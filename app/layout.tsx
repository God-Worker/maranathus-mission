export const metadata = {
  title: 'Maranathus Mission',
  description:
    '하늘의 메시지, 세상과 연결되다. Maranatha & Ichthus(ΙΧΘΥΣ)를 잇는 신앙·공유·커머스 플랫폼.',
  metadataBase: new URL('https://maranathus-mission.vercel.app'),
  openGraph: {
    title: 'Maranathus Mission',
    description: '하늘의 메시지, 세상과 연결되다.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

function Nav() {
  return (
    <nav className="nav">
      <div className="bar">
<<<<<<< HEAD
        {/* 좌측 로고 → 홈으로 이동 */}
=======
        {/* 좌측 로고 → 홈 이동 */}
>>>>>>> 4041bcb (feat(nav): add fixed glass navbar + brand logo link to home)
        <Link href="/" className="brand" aria-label="Go to home">
          <Image src="/brand-logo.png" alt="Maranathus logo" width={32} height={32} />
          <span>Maranathus</span>
        </Link>

        {/* 가운데 메뉴 */}
        <div className="menu">
          <Link href="#about">회사소개</Link>
          <Link href="#business">비즈니스</Link>
          <Link href="#meta">META · AI · XR</Link>
          <Link href="#news">소식</Link>
          <Link href="#contact">문의/제휴</Link>
          <Link href="#jobs">채용</Link>
        </div>

<<<<<<< HEAD
        {/* 우측 액션 (아이콘) */}
        <div className="actions" aria-label="actions">
          {/* 사용자 */}
=======
        {/* 우측 아이콘 */}
        <div className="actions" aria-label="actions">
>>>>>>> 4041bcb (feat(nav): add fixed glass navbar + brand logo link to home)
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="8" r="4" strokeWidth="2" />
            <path d="M4 20c2-4 14-4 16 0" strokeWidth="2" />
          </svg>
<<<<<<< HEAD
          {/* 글로벌 */}
=======
>>>>>>> 4041bcb (feat(nav): add fixed glass navbar + brand logo link to home)
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="9" strokeWidth="2" />
            <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" strokeWidth="2" />
          </svg>
<<<<<<< HEAD

cat > app/layout.tsx <<'EOF'
export const metadata = {
  title: 'Maranathus Mission',
  description:
    '하늘의 메시지, 세상과 연결되다. Maranatha & Ichthus(ΙΧΘΥΣ)를 잇는 신앙·공유·커머스 플랫폼.',
  metadataBase: new URL('https://maranathus-mission.vercel.app'),
  openGraph: {
    title: 'Maranathus Mission',
    description: '하늘의 메시지, 세상과 연결되다.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

function Nav() {
  return (
    <nav className="nav">
      <div className="bar">
        {/* 좌측 로고 → 홈으로 이동 */}
        <Link href="/" className="brand" aria-label="Go to home">
          <Image src="/brand-logo.png" alt="Maranathus logo" width={32} height={32} />
          <span>Maranathus</span>
        </Link>

        {/* 가운데 메뉴 */}
        <div className="menu">
          <Link href="#about">회사소개</Link>
          <Link href="#business">비즈니스</Link>
          <Link href="#meta">META · AI · XR</Link>
          <Link href="#news">소식</Link>
          <Link href="#contact">문의/제휴</Link>
          <Link href="#jobs">채용</Link>
        </div>

        {/* 우측 액션 (아이콘) */}
        <div className="actions" aria-label="actions">
          {/* 사용자 */}
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="8" r="4" strokeWidth="2" />
            <path d="M4 20c2-4 14-4 16 0" strokeWidth="2" />
          </svg>
          {/* 글로벌 */}
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="9" strokeWidth="2" />
            <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" strokeWidth="2" />
          </svg>
          {/* 메뉴 햄버거 */}
=======
>>>>>>> 4041bcb (feat(nav): add fixed glass navbar + brand logo link to home)
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 7h18M3 12h18M3 17h18" strokeWidth="2" />
          </svg>
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
