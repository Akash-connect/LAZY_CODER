import { NextResponse } from 'next/server';
import * as z from 'zod';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  budget: z.enum(['$5k', '$12k', '$25k+', 'Not sure']),
  projectType: z.enum(['SaaS', 'AI Automation', 'Mobile App', 'No-Code + Code', 'Other']),
  message: z.string().min(20),
});

// Simple in-memory rate limiting map (IP -> { count, resetTime })
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    const rateData = rateLimitMap.get(ip) || { count: 0, resetTime: now + 60000 };

    if (now > rateData.resetTime) {
      rateData.count = 1;
      rateData.resetTime = now + 60000;
    } else {
      rateData.count += 1;
    }
    rateLimitMap.set(ip, rateData);

    if (rateData.count > 5) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute before submitting again.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form fields', details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, email, budget, projectType, message } = result.data;

    console.log('[NEW LEAD RECEIVED]', {
      name,
      email,
      budget,
      projectType,
      message,
      timestamp: new Date().toISOString(),
    });

    // Optional Resend email dispatch if RESEND_API_KEY is configured
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: 'LAZY CODER Leads <leads@lazycoder.dev>',
        to: 'hello@lazycoder.dev',
        subject: `New lead: ${name} - ${budget}`,
        html: `
          <h2>New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Overview:</strong></p>
          <blockquote>${message.replace(/\n/g, '<br/>')}</blockquote>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('[LEAD API ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to process lead inquiry' },
      { status: 500 }
    );
  }
}
