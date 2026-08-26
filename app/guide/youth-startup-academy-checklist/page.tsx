import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, guideArticle } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "청년창업사관학교 제출서류 체크리스트와 준비 방법 (2026) | ZipperDoc",
  description:
    "청년창업사관학교 지원 자격과 제출서류를 정리했습니다. 예비창업패키지와 달리 이미 사업을 운영 중인 대표자를 대상으로 하는 만큼, 매출·MVP 같은 실적 증빙을 준비하는 법을 짚었습니다.",
  alternates: { canonical: "/guide/youth-startup-academy-checklist" },
  openGraph: {
    ...openGraphBase,
    title: "청년창업사관학교 제출서류 체크리스트",
    description: "지원 자격과 실적 증빙 서류를 정리했습니다.",
    url: "/guide/youth-startup-academy-checklist",
    type: "article",
  },
};

export default function YouthStartupAcademyGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <JsonLd
        data={guideArticle({
          headline: "청년창업사관학교 제출서류 체크리스트와 준비 방법 (2026)",
          description:
            "청년창업사관학교 지원 자격과 제출서류를 정리했습니다. 예비창업패키지와 달리 이미 사업을 운영 중인 대표자를 대상으로 하는 만큼, 매출·MVP 같은 실적 증빙을 준비하는 법을 짚었습니다.",
          path: "/guide/youth-startup-academy-checklist",
        })}
      />
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          청년창업사관학교 제출서류 체크리스트
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          청년창업사관학교는 예비창업패키지와 달리 <strong className="text-gray-900">이미 사업을 시작한 대표자</strong>가
          대상입니다. 그래서 서류도 &ldquo;계획&rdquo;보다 &ldquo;실적&rdquo;을 증빙하는 쪽에 무게가 실립니다.
          지원 자격부터 실제로 헷갈리기 쉬운 부분까지 정리했습니다.
        </p>

        <p className="text-sm text-gray-400 mb-10 -mt-6 leading-relaxed">
          아래 내용은 최근 공고 기준으로 정리했습니다. 기수마다 세부 조건이 바뀔 수 있으니, 신청 전에는
          반드시 K-Startup(k-startup.go.kr)에 게시된 해당 기수 공고문으로 최종 확인하세요.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">지원 자격부터 확인하세요</h2>
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li>
                <strong className="text-gray-900">나이:</strong> 만 39세 이하 대표자를 원칙으로 합니다.
              </li>
              <li>
                <strong className="text-gray-900">창업 경력:</strong> 창업 3년 이내 기업의 대표자여야
                합니다(예비창업자를 대상으로 하는 별도 트랙이 있는 경우도 있으니 공고문에서 확인하세요).
              </li>
              <li>
                <strong className="text-gray-900">사업자등록:</strong> 신청 시점 기준으로 사업자등록을
                보유하고 있어야 하는 경우가 일반적입니다.
              </li>
              <li>
                <strong className="text-gray-900">사업 분야:</strong> 기술 기반 창업 아이템을 우대합니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">제출서류 한눈에 보기</h2>
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li>
                <strong className="text-gray-900">사업계획서.</strong> 공고문에 첨부된 지정 양식을
                사용합니다. 예비창업패키지의 사업계획서가 &ldquo;앞으로의 계획&rdquo;에 가깝다면, 이쪽은
                기존 사업의 현황과 확장 계획을 함께 다루는 구성이 많습니다.
              </li>
              <li>
                <strong className="text-gray-900">사업자등록증.</strong> 신청 자격을 증빙하는 기본 서류입니다.
              </li>
              <li>
                <strong className="text-gray-900">실적 증빙자료.</strong> 매출 자료, 서비스 이용자 수(MAU),
                시제품(MVP) 운영 화면 등입니다. 계획이 아니라 &ldquo;지금 실제로 돌아가고 있다&rdquo;는
                근거이므로 미리 정리해두는 것이 좋습니다.
              </li>
              <li>
                <strong className="text-gray-900">가점 증빙서류 (해당자만).</strong> 특허·인증 보유,
                창업경진대회 수상 실적 등입니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. 예비창업패키지 서류를 그대로 재활용</h2>
            <p className="mb-3">
              두 사업이 비슷해 보여서 예비창업패키지에 냈던 사업계획서를 그대로 제출하는 경우가 있습니다.
              하지만 청년창업사관학교는 실적 중심 평가라, 계획 위주로 쓰인 서류는 정작 봐야 할 매출·이용자
              지표가 빠져 있어 불리하게 작용할 수 있습니다.
            </p>
            <p>
              <strong className="text-gray-900">해결:</strong> 이번 공고의 지정 양식을 새로 받아, 실적 항목을
              채우는 데 분량을 더 할애하세요.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. 실적 자료를 캡처 화면 그대로 첨부</h2>
            <p className="mb-3">
              매출 대시보드나 앱 통계 화면을 캡처해서 그대로 올리면, 숫자가 작거나 잘려서 심사자가 확인하기
              어려운 경우가 많습니다.
            </p>
            <p>
              <strong className="text-gray-900">해결:</strong> 핵심 지표만 표나 그래프로 다시 정리하고,
              원본 캡처는 참고 자료로 뒤에 첨부하세요. 여러 장의 캡처와 표를{" "}
              <Link href="/merge" className="text-[#1D9E75] font-medium underline">
                하나의 PDF로 합쳐두면
              </Link>{" "}
              제출이 깔끔해집니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. 대표자 자격 요건을 뒤늦게 확인</h2>
            <p className="mb-3">
              나이나 창업 경과 연수 기준을 신청 직전에야 확인하고 아슬아슬하게 걸리거나 이미 넘긴 경우가
              있습니다. 이 부분은 서류를 아무리 잘 준비해도 자격 미달이면 소용이 없습니다.
            </p>
            <p>
              <strong className="text-gray-900">해결:</strong> 사업계획서를 쓰기 전에 나이·창업일 기준부터
              공고문 첫 페이지에서 확인하세요. 애매하면 접수처에 먼저 문의하는 편이 시간을 아낍니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">서류 형식 문제는 공통이에요</h2>
            <p>
              파일 용량 초과, 지정 양식 미사용, 명의 불일치처럼 정부지원사업 전반에서 반복되는 반려 사유는
              따로 정리해뒀습니다. 아래 관련 가이드에서 확인해보세요.
            </p>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">실적 자료부터 정리해두세요</h2>
            <p className="text-gray-600 mb-6">여러 장의 자료를 하나로 합치고, 용량도 맞추고. 설치 없이 무료로.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/merge" className="bg-[#1D9E75] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#178a66] transition">
                제출 서류 합치기
              </Link>
              <Link href="/compress" className="bg-white border border-gray-300 text-gray-800 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition">
                서류 용량 줄이기
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">관련 가이드</h2>
            <div className="flex flex-col gap-3">
              <Link href="/guide/pre-startup-package-checklist" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">예비창업패키지 제출서류 체크리스트와 반려 피하는 법 →</p>
                <p className="text-sm text-gray-500">아직 창업 전이라면 이쪽을 먼저 확인하세요</p>
              </Link>
              <Link href="/guide/document-rejected" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">지원사업 서류 반려 사유 8가지와 해결법 →</p>
                <p className="text-sm text-gray-500">실제로 자주 걸리는 반려 사유와 해결 방법</p>
              </Link>
              <Link href="/guide/submission-checklist" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">정부지원사업 제출 서류 체크리스트 →</p>
                <p className="text-sm text-gray-500">접수 전에 확인해야 할 항목을 순서대로 정리</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
