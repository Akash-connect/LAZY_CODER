import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'LAZY CODER | Product Studio',
  description: 'LAZY CODER builds fast, scalable, and automated software. We write less code that does more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(255,159,252,0.15),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(82,39,255,0.26),transparent_28%),linear-gradient(135deg,#090c16_0%,#121426_38%,#1a1633_100%)] text-[#F5F5F5] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
