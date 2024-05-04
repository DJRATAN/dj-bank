
export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body >{children}n</body>
      </html>
    );
  }
  