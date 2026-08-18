import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, toolApp } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "사진·이미지 용량 줄이기 무료 | 업로드 없이 - ZipperDoc",
  description: "사진 용량 줄이기, 이미지 용량 줄이기를 무료로. 화질을 조절해가며 5MB·10MB 제출 기준에 맞출 수 있습니다. 파일이 서버로 전송되지 않고 브라우저에서만 처리됩니다.",
  keywords: ["사진 용량 줄이기", "이미지 용량 줄이기", "PDF 용량 줄이기", "사진 압축", "파일 용량 줄이기"],
  alternates: { canonical: "/compress" },
  openGraph: {
    ...openGraphBase,
    title: "사진·이미지 용량 줄이기 무료 | ZipperDoc",
    description: "제출 용량 제한에 맞춰 용량을 줄이세요. 파일 업로드 없이, 설치 없이.",
    url: "/compress",
    type: "website",
  },
};

export default function CompressLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd
        data={toolApp({
          name: "사진·이미지 용량 줄이기 - ZipperDoc",
          path: "/compress",
          description:
            "사진과 이미지의 용량을 줄여 5MB·10MB 같은 제출 기준에 맞추는 무료 도구. 화질을 조절해가며 원하는 용량으로 압축할 수 있고, 파일이 서버로 전송되지 않고 브라우저 안에서 처리됩니다.",
          featureList: [
            "사진·이미지 용량 압축",
            "화질 조절로 목표 용량 맞추기",
            "5MB·10MB 제출 기준 대응",
            "파일 업로드 없이 브라우저에서 처리",
            "무료, 설치 불필요, 회원가입 불필요",
          ],
        })}
      />
      {children}
    </>
  );
}
