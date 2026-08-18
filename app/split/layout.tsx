import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, toolApp } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "PDF 나누기 무료 | 페이지 분할·추출, 업로드 없이 - ZipperDoc",
  description: "PDF 나누기, PDF 분할, 페이지 추출을 무료로. 원하는 페이지 범위만 뽑아내거나 페이지마다 파일로 나눌 수 있습니다. 파일이 서버로 전송되지 않고 브라우저에서만 처리됩니다.",
  keywords: ["PDF 나누기", "PDF 분할", "PDF 페이지 분리", "PDF 페이지 추출", "PDF 자르기", "PDF 파일 나누기"],
  alternates: { canonical: "/split" },
  openGraph: {
    ...openGraphBase,
    title: "PDF 나누기 무료 | ZipperDoc",
    description: "원하는 페이지만 뽑아내거나 낱장으로 나누세요. 파일 업로드 없이, 설치 없이.",
    url: "/split",
    type: "website",
  },
};

export default function SplitLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd
        data={toolApp({
          name: "PDF 나누기 - ZipperDoc",
          path: "/split",
          description:
            "PDF에서 원하는 페이지 범위만 추출하거나 한 장씩 낱개 파일로 나누는 무료 도구. 파일이 서버로 전송되지 않고 이용자의 브라우저 안에서 처리됩니다.",
          featureList: [
            "페이지 범위 지정 추출 (예: 1-3, 5, 8-10)",
            "한 장씩 낱개 PDF로 분할",
            "입력한 순서대로 페이지 재배치",
            "파일 업로드 없이 브라우저에서 처리",
            "무료, 설치 불필요, 회원가입 불필요",
          ],
        })}
      />
      {children}
    </>
  );
}
