export const metadata = {
  title: 'Maranathus Mission',
  description: 'Maranatha & Ichthus — 신앙·공유·커머스를 하나로.',
  metadataBase: new URL('https://maranathus-mission.vercel.app'),
  openGraph: {
    title: 'Maranathus Mission',
    description: '강렬하고 단순한 신앙 플랫폼.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
