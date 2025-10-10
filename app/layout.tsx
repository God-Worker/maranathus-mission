export const metadata = {
  title: 'Maranathus Mission',
  description:
    '하늘의 메시지, 세상과 연결되다. Maranatha & Ichthus(ΙΧΘΥΣ)를 잇는 신앙·공유·커머스 플랫폼. — Heaven’s Message, Connected to the World.',
  metadataBase: new URL('https://maranathus-mission.vercel.app'),
  openGraph: {
    title: 'Maranathus Mission',
    description:
      '하늘의 메시지, 세상과 연결되다. (Heaven’s Message, Connected to the World.)',
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
