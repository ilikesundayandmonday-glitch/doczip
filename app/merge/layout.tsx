import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "PDF 합치기 무료 | 사진·JPG도 함께 병합 - ZipperDoc",
  description: "PDF 합치기, PDF 병합, JPG PDF 변환을 무료로. 사진과 PDF를 원하는 순서대로 하나의 PDF로 합칠 수 있고, 사진은 A4에 맞춰 자동 정렬됩니다. 파일이 서버로 전송되지 않습니다.",
  keywords: ["PDF 합치기", "PDF 병합", "PDF 파일 합치기", "JPG PDF 변환", "사진 PDF 변환", "통장사본 PDF"],
  alternates: { canonical: "/merge" },
  openGraph: {
    ...openGraphBase,
    title: "PDF 합치기 무료 | ZipperDoc",
    description: "PDF와 사진을 원하는 순서대로 하나의 PDF로. 파일 업로드 없이, 설치 없이.",
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
