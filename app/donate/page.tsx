export const metadata = {
  title: 'Donate | Maranathus Mission',
  description: '기도와 물질로 마라나투스 미션을 후원하세요.'
};

export default function DonatePage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Donate</h1>
      <p>
        함께 복음을 전파하는 사역에 동참해 주세요. 여러분의 기도와 후원이 큰 힘이 됩니다.
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Account: 000-0000-000000 (Maranathus Mission)</li>
        <li>Contact: donate@maranathus.example</li>
      </ul>
    </main>
  );
}
