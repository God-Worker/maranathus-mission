export const metadata = {
  title: 'Contact | Maranathus Mission',
  description: '마라나투스 미션 팀과 연락하는 방법'
};

export default function ContactPage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p>
        문의가 있으신가요? 아래 채널로 연락해주세요. 곧 답변드리겠습니다.
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Email: contact@maranathus.example</li>
        <li>Prayer & Support: support@maranathus.example</li>
      </ul>
    </main>
  );
}
