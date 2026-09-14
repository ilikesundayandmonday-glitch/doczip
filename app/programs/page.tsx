import Link from "next/link";
import type { Metadata } from "next";
import ProgramsClient from "./ProgramsClient";
import { getPrograms } from "./fetchPrograms";

// K-스타트업 Open API 연동 완료(2026-09). 아직 기업마당(bizinfo) API는 연동 전이라
// 지금은 K-스타트업 공고만 보여줍니다. API 호출이 실패하면 getPrograms()가 자동으로
// 예시 데이터로 되돌아가고, 이 페이지도 그에 맞춰 "준비 중" 안내와 robots noindex로
// 자동 전환됩니다 (아래 isLive 분기 참고).
export async function generateMetadata(): Promise<Metadata> {
  const { isLive } = await getPrograms();
  if (isLive) {
    return {
      title: "정부지원사업 공고 모아보기 | ZipperDoc",
      description: "창업진흥원 K-Startup 공고를 분야·단계별로 모아보고, 서류 준비 도구로 바로 이어집니다.",
    };
  }
  return {
    title: "정부지원사업 공고 모아보기 (준비 중) | ZipperDoc",
    description: "정부지원사업 공고를 분야·단계별로 모아보는 페이지를 준비하고 있습니다.",
    robots: { index: false, follow: false },
  };
}

export default async function ProgramsPage() {
  const { programs, isLive } = await getPrograms();

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

        {isLive ? (
          <div className="bg-green-50 border border-[#1D9E75]/30 rounded-xl p-4 mb-10 text-sm text-[#1D9E75] leading-relaxed">
            ✅ 창업진흥원 K-Startup 공고를 실시간으로 가져오고 있어요. 분야·단계 표시는 자동 분류라 정확하지
            않을 수 있으니, 지원 전에는 꼭 원문 공고를 확인하세요. (기업마당 공고는 준비 중입니다.)
          </div>
        ) : (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10 text-sm text-amber-800 leading-relaxed">
            🚧 <strong>준비 중인 페이지입니다.</strong> 지금 보이는 공고는 실제 접수 중인 공고가 아니라
            화면 구성을 보여드리기 위한 예시입니다. 실제 정부 공고와 연결되면 이 안내는 사라집니다.
          </div>
        )}

        <ProgramsClient programs={programs} />
      </div>
    </main>
  );
}
