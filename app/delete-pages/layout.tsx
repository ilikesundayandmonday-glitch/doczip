import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "PDF 페이지 삭제 무료 | 필요 없는 장만 빼기 - ZipperDoc",
  description: "PDF 페이지 삭제를 무료로. 빈 페이지나 불필요한 장을 골라 지우고 나머지를 하나의 PDF로 저장합니다. 파일이 서버로 전송되지 않고 브라우저에서만 처리됩니다.",
  keywords: ["PDF 페이지 삭제", "PDF 페이지 지우기", "PDF 빈 페이지 삭제", "PDF 장 삭제", "PDF 편집"],
  alternates: { canonical: "/delete-pages" },
  openGraph: {
    ...openGraphBase,
    title: "PDF 페이지 삭제 무료 | ZipperDoc",
    description: "필요 없는 페이지만 골라서 빼세요. 파일 업로드 없이, 설치 없이.",
    url: "/delete-pages",
    type: "website",
  },
};

export default function DeletePagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
