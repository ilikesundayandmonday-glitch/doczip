import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "제출 서류 합치기 - PDF와 사진을 하나의 PDF로 | ZipperDoc",
  description: "통장사본·사업자등록증 사진과 PDF를 원하는 순서대로 하나의 PDF로 합치세요. 사진은 A4 크기에 맞춰 자동 정렬되며, 파일은 서버에 저장되지 않습니다.",
  alternates: { canonical: "/merge" },
  openGraph: {
    ...openGraphBase,
    title: "제출 서류 합치기 | ZipperDoc",
    description: "PDF와 사진을 원하는 순서대로 하나의 PDF로. 설치 없이 무료로.",
    url: "/merge",
    type: "website",
  },
};

export default function MergeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
