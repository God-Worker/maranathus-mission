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
          <Link href="#about">회사소개</Link>
          <Link href="#business">비즈니스</Link>
          <Link href="#meta">META · AI · XR</Link>
          <Link href="#news">소식</Link>
          <Link href="#contact">문의/제휴</Link>
          <Link href="#jobs">채용</Link>
        </div>
        <div className="actions" aria-label="actions">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4" strokeWidth="2"/><path d="M4 20c2-4 14-4 16 0" strokeWidth="2"/></svg>
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9" strokeWidth="2"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" strokeWidth="2"/></svg>
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 7h18M3 12h18M3 17h18" strokeWidth="2"/></svg>
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
