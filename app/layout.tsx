import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Nav from "./components/Nav";
import ScrollTop from "./components/ScrollTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://zipperdoc.com"),
  title: "정부지원사업 서류 도구 | PDF 합치기·용량 줄이기 - ZipperDoc",
  description: "정부지원사업 제출 서류의 용량을 줄이고 PDF와 사진을 하나로 합치세요. 사업자등록증·통장사본도 설치 없이 무료로 정리할 수 있습니다.",
  keywords: ["정부지원사업 서류", "서류 용량 줄이기", "PDF 합치기", "통장사본 PDF", "사업자등록증 PDF", "제출 서류 정리"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "정부지원사업 서류 도구 | ZipperDoc",
    description: "정부지원사업 제출 서류의 용량을 줄이고 PDF와 사진을 하나로 합치세요. 설치 없이 무료로.",
    url: "https://zipperdoc.com",
    siteName: "ZipperDoc",
    locale: "ko_KR",
    type: "website",
  },
  other: {
    "google-adsense-account": "ca-pub-9595724629001821",
  },
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