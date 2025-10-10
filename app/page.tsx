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

        {/* 메인 타이틀 - 줄바꿈 */}
        <h1 className="title">
          하늘의 메시지!<br />
          세상과 연결되다.
        </h1>

        {/* 본문: 한글 중심 + ΙΧΘΥΣ 표기 */}
        <p className="subtitle">
          Maranatha(“주 예수여 오시옵소서”)와 Ichthus(ΙΧΘΥΣ, “예수 그리스도, 하나님의 아들, 구주”).<br/>



cat > app/page.tsx <<'EOF'
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

        {/* 메인 타이틀 - 줄바꿈 */}
        <h1 className="title">
          하늘의 메시지!<br />
          세상과 연결되다.
        </h1>

        {/* 본문: 한글 중심 + ΙΧΘΥΣ 표기 */}
        <p className="subtitle">
          Maranatha(“주 예수여 오시옵소서”)와 Ichthus(ΙΧΘΥΣ, “예수 그리스도, 하나님의 아들, 구주”).<br/>
          두 고백이 하나로 흐르는 거룩한 연결, <strong>Maranathus Mission</strong>.
        </p>

        {/* 영문 서브라인 */}
        <p className="subtitle subtitle--en">
          Heaven’s Message, Connected to the World.
        </p>

        {/* CTA 버튼 */}
        <div className="cta">
          <Link href="#start" className="btn btn--primary">시작하기</Link>
          <Link href="/api/health" className="btn">상태 확인</Link>
          <Link href="https://github.com/God-Worker/maranathus-mission" target="_blank" className="btn">GitHub</Link>
        </div>
      </div>
    </main>
  )
}
