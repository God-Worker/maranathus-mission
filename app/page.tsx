import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="hero">
      {/* 워터마크: 유다의 사자 */}
      <div className="watermark" aria-hidden>
        <Image src="/logo-lion.png" alt="" width={700} height={700} priority />
      </div>

      <div className="hero__content">
        {/* 상단 작은 로고: 잌투스 */}
        <div className="logo">
          <Image src="/logo-nibc.png" alt="Maranathus Ichthus" width={40} height={40} priority />
          <span className="kicker">Maranathus Mission</span>
        </div>

        <h1 className="title">강렬함과 단순함으로<br/>마음을 사로잡다</h1>
        <p className="subtitle">
          Maranatha (“주 예수여 오시옵소서”)와 Ichthus (“예수 그리스도, 하나님의 아들, 구주”).<br/>
          두 고백이 만나는, 신앙·공유·커머스의 하나된 시작.
        </p>

        <div className="cta">
          <Link href="#start" className="btn btn--primary">시작하기</Link>
          <Link href="/api/health" className="btn">상태 확인</Link>
          <Link href="https://github.com/God-Worker/maranathus-mission" target="_blank" className="btn">GitHub</Link>
        </div>
      </div>
    </main>
  )
}
