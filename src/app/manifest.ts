import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LAZY CODER',
    short_name: 'LAZY',
    description: 'Product studio that builds fast, scalable, automated software. Ship in 21 days.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A1A',
    theme_color: '#0A0A1A',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
