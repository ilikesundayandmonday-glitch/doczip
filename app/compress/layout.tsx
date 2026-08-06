import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "서류 용량 줄이기 - 5MB 제한 맞추는 무료 이미지 압축 | ZipperDoc",
  description: "정부지원사업 제출 서류의 이미지 용량을 줄여 5MB·10MB 제한에 맞추세요. 압축 강도를 직접 조절할 수 있고, 파일은 브라우저에서만 처리되어 서버에 저장되지 않습니다.",
  alternates: { canonical: "/compress" },
  openGraph: {
    ...openGraphBase,
    title: "서류 용량 줄이기 | ZipperDoc",
    description: "제출 용량 제한에 맞춰 이미지 용량을 줄이세요. 설치 없이 무료로.",
    url: "/compress",
    type: "website",
  },
};

export default function CompressLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
