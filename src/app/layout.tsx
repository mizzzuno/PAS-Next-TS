import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //<html lang="en"> 元コード
    <html lang="ja" suppressHydrationWarning>
      {/*追加*/}
      <head>
        <meta name="google" content="notranslate" />
      </head>
      {/*ここまで*/}
      <body>{children}</body>
    </html>
  );
}
