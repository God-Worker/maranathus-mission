import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="hero hero--overlay">
      {/* 워터마크: 사자 배경. 필요시 68%→72~78%로 미세조정 */}
      <div className="watermark" aria-hidden>
        <Image src="/logo-lion.png" alt="" fill priority style={{ objectFit:'cover', objectPosition:'center 68%' }} />
      </div>

      <div className="hero__content">
        <div className="logo">
          <Image src="/logo-nibc.png" alt="Maranathus Ichthus" width={64} height={64} priority />
          <span className="kicker">MARANATHUS MISSION</span>
        </div>

        <h1 className="title">The New World of Maranathus</h1>
        <p className="subtitle">
          하늘의 메시지! 세상과 연결되다. Maranatha와 Ichthus(ΙΧΘΥΣ)를 잇는 신앙·공유·커머스의 허브.
        </p>

        <div className="cta">
          <Link href="#media" className="btn btn--primary">시작하기</Link>
          <Link href="/api/health" className="btn">상태 확인</Link>
        </div>
      </div>
    </main>
  )
}
