import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import { JsonLd, siteGraph } from "./structured-data";
import { openGraphBase } from "./shared-metadata";

export const metadata: Metadata = {
  metadataBase: new URL("https://zipperdoc.com"),
  title: "PDF 합치기·용량 줄이기 무료 | 파일 업로드 없이 - ZipperDoc",
  description: "PDF 합치기, PDF 용량 줄이기, 사진 PDF 변환을 무료로. 파일이 서버에 업로드되지 않고 브라우저에서만 처리되어 통장사본·신분증 같은 민감한 서류도 안전합니다. 설치·회원가입 없음.",
  keywords: ["PDF 합치기", "PDF 용량 줄이기", "사진 용량 줄이기", "JPG PDF 변환", "PDF 병합", "이미지 용량 줄이기", "통장사본 PDF", "정부지원사업 서류"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...openGraphBase,
    title: "PDF 합치기·용량 줄이기 무료 | ZipperDoc",
    description: "파일이 서버로 전송되지 않습니다. 브라우저에서만 처리되어 민감한 서류도 안전하게.",
    url: "https://zipperdoc.com",
    type: "website",
  },
  // twitter 도 세그먼트 간 얕은 병합이라 여기에 title/description 을 두면
  // 하위 페이지가 홈 문구를 그대로 물려받습니다. card 종류만 남기고
  // 제목·설명·이미지는 각 페이지의 og 태그로 대체되게 둡니다.
  twitter: {
    card: "summary_large_image",
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
        <JsonLd data={siteGraph} />
        <Nav />
        {children}
        <Footer />
        <ScrollTop />
        <Analytics />
      </body>
    </html>
  );
}