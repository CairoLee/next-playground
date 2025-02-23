import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>我的主页</h1>
      <p>这是一个自定义的主页内容。</p>
      <Link href="/help">前往帮助页面</Link>
    </div>
  );
}