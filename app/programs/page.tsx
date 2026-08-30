import Link from "next/link";
import type { Metadata } from "next";
import ProgramsClient from "./ProgramsClient";

// ⚠️ 이 페이지는 아직 실제 정부 공고 데이터와 연결되지 않았습니다 (data.ts의 예시 데이터만 표시).
// 그래서 검색엔진에 색인되지 않도록 robots: noindex를 걸어두었고, sitemap.ts에도 아직 추가하지
// 않았습니다. 기업마당·K-스타트업 API 연동이 끝나고 실제 데이터로 교체되면:
// 1) 아래 robots 옵션을 지우고 2) app/sitemap.ts에 "/programs"를 추가해주세요.
export const metadata: Metadata = {
  title: "정부지원사업 공고 모아보기 (준비 중) | ZipperDoc",
  description: "정부지원사업 공고를 분야·단계별로 모아보는 페이지를 준비하고 있습니다.",
  robots: { index: false, follow: false },
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 홈으로
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          정부지원사업 공고 모아보기
        </h1>
        <p className="text-gray-500 mb-6 leading-relaxed">
          분야·창업 단계별로 지원사업 공고를 모아보고, 관련 준비 가이드와 서류 도구로 바로 이어집니다.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10 text-sm text-amber-800 leading-relaxed">
          🚧 <strong>준비 중인 페이지입니다.</strong> 지금 보이는 공고는 실제 접수 중인 공고가 아니라
          화면 구성을 보여드리기 위한 예시입니다. 실제 정부 공고와 연결되면 이 안내는 사라집니다.
        </div>

        <ProgramsClient />
      </div>
    </main>
  );
}
