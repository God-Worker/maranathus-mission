import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', padding: 24 }}>
      <div style={{ maxWidth: 720 }}>
        <h1 style={{ fontSize: 36, marginBottom: 8 }}>Maranathus Mission</h1>
        <p style={{ lineHeight: 1.7 }}>
          Combining two early Christian confessions — <em>Maranatha</em> (“Come, Lord Jesus”) and <em>Ichthus</em> 
          (“Jesus Christ, Son of God, Savior”) — into a modern platform for faith, sharing, and commerce.
        </p>
        <ul style={{ marginTop: 24, lineHeight: 1.8 }}>
          <li>Community: posts, comments, sharing</li>
          <li>Shop: products, cart, checkout</li>
          <li>Payments: multi-provider (Stripe, Toss, KakaoPay, NaverPay)</li>
        </ul>
        <div style={{ marginTop: 24, display: 'flex', gap: 16 }}>
          <Link href="/api/health">API Health</Link>
          <Link href="https://github.com/">GitHub</Link>
        </div>
      </div>
    </main>
  );
}