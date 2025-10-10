import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* HERO: 풀스크린 배경 + 텍스트 오버레이 */}
      <section className="hero hero--overlay">
        <div className="watermark" aria-hidden>
          {/* 배경 이미지는 화면을 꽉 채우게 */
          /* public/logo-lion.png 를 전체 배경으로 사용 */}
          <Image src="/logo-lion.png" alt="" fill priority style={{ objectFit: 'cover' }} />
        </div>
        <div className="shade" aria-hidden />
        <div className="content container">
          <div className="logo" style={{marginBottom:10}}>
            <Image src="/logo-nibc.png" alt="Maranathus Ichthus" width={36} height={36} priority />
            <span className="kicker">Maranathus Mission</span>
          </div>
          <h1 className="k-title">The New World of Maranathus</h1>
          <p className="k-desc">
            하늘의 메시지! 세상과 연결되다. Maranatha와 Ichthus(ΙΧΘΥΣ)를 잇는 신앙·공유·커머스의 허브.
          </p>
          <div className="cta" style={{marginTop:16}}>
            <Link href="#media" className="btn btn--primary">시작하기</Link>
            <Link href="/api/health" className="btn">상태 확인</Link>
          </div>
        </div>
      </section>

      {/* MEDIA STRIP: 카드 4개 */}
      <section id="media" className="section pattern">
        <div className="container">
          <h2 className="h1" style={{fontSize:24, marginBottom:16}}>우리가 만드는 가치</h2>
          <div className="card-strip">
            <article className="card">
              <div className="thumb thumb-a" />
              <div className="body">
                <h3>묵상 & 말씀</h3>
                <p>기도·말씀·큐티를 나누고 기록하는 커뮤니티.</p>
              </div>
            </article>
            <article className="card">
              <div className="thumb thumb-b" />
              <div className="body">
                <h3>콘텐츠 & 미디어</h3>
                <p>말씀 클립, 성경강해, 찬양 영상 배포.</p>
              </div>
            </article>
            <article className="card">
              <div className="thumb thumb-c" />
              <div className="body">
                <h3>스토어</h3>
                <p>디지털/실물 굿즈 판매, 장바구니, 결제 연동.</p>
              </div>
            </article>
            <article className="card">
              <div className="thumb thumb-d" />
              <div className="body">
                <h3>미션 & 나눔</h3>
                <p>후원, 프로젝트, 봉사를 연결하는 채널.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* TECH / SPLIT: 좌 텍스트, 우 시각화 */}
      <section className="section">
        <div className="container split">
          <div>
            <p className="kicker">Tech</p>
            <h3 className="h1" style={{fontSize:26, margin:'6px 0 10px'}}>메타버스 · AI · XR로 확장</h3>
            <p className="p" style={{color:'var(--muted)'}}>
              Stripe/Toss/카카오페이 결제, 글로벌 i18n, 크리에이터 도구, 오픈 API까지.
              Maranathus는 신앙 생태계의 디지털 전환을 돕습니다.
            </p>
            <div className="btns" style={{marginTop:14, display:'flex', gap:10}}>
              <Link href="https://github.com/God-Worker/maranathus-mission" target="_blank" className="btn">GitHub</Link>
              <Link href="/api/health" className="btn btn--primary">API Health</Link>
            </div>
          </div>

          <div className="panel">
            <div className="thumb">
              {/* 필요 시 임시 그래픽 → 실제 이미지로 교체해도 됨 */}
              <Image src="/logo-lion.png" alt="" fill style={{objectFit:'cover', opacity:.5}} />
            </div>
            <div className="body">
              <h3>Creator · Commerce · Community</h3>
              <p>창작자 도구, 스토어, 커뮤니티가 한곳에서 작동합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="section pattern" style={{paddingTop:24, paddingBottom:24, textAlign:'center'}}>
        © {new Date().getFullYear()} Maranathus Mission · “주 예수여 오시옵소서”
      </footer>
    </>
  )
}
