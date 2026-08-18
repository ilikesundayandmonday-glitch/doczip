import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, toolApp } from "@/app/structured-data";

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
  return (
    <>
      <JsonLd
        data={toolApp({
          name: "PDF 페이지 삭제 - ZipperDoc",
          path: "/delete-pages",
          description:
            "PDF에서 빈 페이지나 필요 없는 장만 골라 지우고 나머지를 하나의 PDF로 저장하는 무료 도구. 파일이 서버로 전송되지 않고 이용자의 브라우저 안에서 처리됩니다.",
          featureList: [
            "페이지 번호를 눌러 삭제할 장 선택",
            "스캔 시 생긴 빈 페이지 제거",
            "원본 파일은 수정하지 않고 새 파일로 저장",
            "파일 업로드 없이 브라우저에서 처리",
            "무료, 설치 불필요, 회원가입 불필요",
          ],
        })}
      />
      {children}
    </>
  );
}
