export const metadata = {
  title: 'Maranathus Mission',
  description: '하늘의 메시지, 세상과 연결되다.',
  metadataBase: new URL('https://maranathus-mission.vercel.app'),
  openGraph: { title: 'Maranathus Mission', description: '하늘의 메시지, 세상과 연결되다.', images: [{ url: '/og.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image' },
};

import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

function Nav() {
  return (
    <nav className="nav">
      <div className="bar">
        <Link href="/" className="brand" aria-label="Go to home">
          <Image src="/brand-logo.png" alt="Maranathus logo" width={40} height={40} />
          <span>Maranathus</span>
        </Link>
        <div className="menu">
          <Link href="/about">소개</Link>
          <Link href="/media">미디어</Link>
          <Link href="/community">커뮤니티</Link>
          <Link href="/store">스토어</Link>
          <Link href="/donate">후원</Link>
          <Link href="/news">소식</Link>
          <Link href="/contact">문의</Link>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
