export default function HelpLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <header>帮助页面专属头部</header>
        {children}
      </div>
    );
  }