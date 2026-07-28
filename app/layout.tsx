import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Nav from "./components/Nav";
import ScrollTop from "./components/ScrollTop";

export const metadata: Metadata = {
  title: "ZipperDoc - 정부지원사업 서류 준비 도우미",
  description: "지원사업 서류, 용량 줄이기부터 합치기까지. 설치 없이 무료로.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9595724629001821"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <ScrollTop />
        <Analytics />
      </body>
    </html>
  );
}