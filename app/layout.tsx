import "./globals.css";

export const metadata = {
  title: "Blog Next.js",
  description: "Projeto de blog com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}