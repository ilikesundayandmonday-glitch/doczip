import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, guideArticle } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "예비창업패키지 제출서류 체크리스트와 반려 피하는 법 (2026) | ZipperDoc",
  description:
    "예비창업패키지 신청 전 준비해야 할 서류 목록과, 사업계획서 양식·첨부 총용량·마감 시각처럼 이 사업에서 특히 자주 걸리는 반려 포인트를 정리했습니다.",
  alternates: { canonical: "/guide/pre-startup-package-checklist" },
  openGraph: {
    ...openGraphBase,
    title: "예비창업패키지 제출서류 체크리스트",
    description: "제출서류 목록과 이 사업에서 자주 걸리는 반려 포인트를 정리했습니다.",
    url: "/guide/pre-startup-package-checklist",
    type: "article",
  },
};

export default function PreStartupPackageChecklistGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <JsonLd
        data={guideArticle({
          headline: "예비창업패키지 제출서류 체크리스트와 반려 피하는 법 (2026)",
          description:
            "예비창업패키지 신청 전 준비해야 할 서류 목록과, 사업계획서 양식·첨부 총용량·마감 시각처럼 이 사업에서 특히 자주 걸리는 반려 포인트를 정리했습니다.",
          path: "/guide/pre-startup-package-checklist",
        })}
      />
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          예비창업패키지 제출서류 체크리스트
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          예비창업패키지는 경쟁이 치열한 만큼, 아이디어가 아니라 서류 단계에서 걸러지는 게 제일 아깝습니다.
          &ldquo;지정 양식을 안 써서&rdquo;, &ldquo;첨부파일 총용량을 못 맞춰서&rdquo; 같은 사소한 이유로
          반려되는 경우가 실제로 꽤 있습니다. 제출서류를 한눈에 정리하고, 이 사업에서 특히 자주 걸리는
          지점을 짚었습니다.
        </p>

        <p className="text-sm text-gray-400 mb-10 -mt-6 leading-relaxed">
          아래 서류 목록과 수치는 최근 공고 기준으로 정리했습니다. 회차마다 세부 조건이 바뀔 수 있으니,
          신청 전에는 반드시 K-Startup(k-startup.go.kr)에 게시된 해당 회차 공고문으로 최종 확인하세요.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">제출서류 한눈에 보기</h2>
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li>
                <strong className="text-gray-900">사업신청서.</strong> K-Startup 누리집에서 온라인으로 직접
                입력합니다. 별도 파일 첨부가 아닙니다.
              </li>
              <li>
                <strong className="text-gray-900">사업계획서.</strong> 공고문에 첨부된 지정 양식만 사용합니다.
                필수 서류입니다.
              </li>
              <li>
                <strong className="text-gray-900">신청자격 확인 서류.</strong> 사업자등록 사실여부 확인서,
                폐업사실증명원 등 예비창업자 자격을 증빙하는 서류입니다. 신청 화면에서 공공마이데이터
                연동으로 자동 제출이 가능한 항목도 있으니 먼저 확인해보세요.
              </li>
              <li>
                <strong className="text-gray-900">가점 증빙서류 (해당자만).</strong> 창업경진대회 수상 실적,
                관련 자격증, 특허 등록증 등입니다.
              </li>
              <li>
                <strong className="text-gray-900">그 외 첨부서류 (해당자만).</strong> 팀 구성 시 팀원 정보,
                특허·인증 보유 시 관련 증빙입니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. 사업계획서 양식을 그대로 안 써서</h2>
            <p className="mb-3">
              공고문에 첨부된 사업계획서 양식은 목차, 페이지 수, 글자 크기까지 지정된 경우가 많습니다. 예전
              회차 양식을 재활용하거나 자체 양식으로 작성하면, 내용이 좋아도 형식 미준수로 걸러질 수
              있습니다.
            </p>
            <p>
              <strong className="text-gray-900">해결:</strong> 매 회차 새로 배포되는 양식을 다시 내려받아
              쓰세요. 검색으로 찾은 양식은 연도가 다를 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. 첨부파일 총용량 초과</h2>
            <p className="mb-3">
              증빙서류를 스캔하거나 사진으로 찍어 첨부하다 보면 파일 하나하나는 괜찮아도 전체 합산 용량이
              금방 커집니다. 신청 시스템은 보통 첨부파일 전체 합산 기준으로 용량 제한을 두기 때문에, 이
              기준을 넘기면 업로드 자체가 막히거나 제출이 튕깁니다.
            </p>
            <p>
              <strong className="text-gray-900">해결:</strong> 여러 장의 증빙서류는{" "}
              <Link href="/merge" className="text-[#1D9E75] font-medium underline">
                한 파일로 먼저 합치고
              </Link>
              , 용량이 크면{" "}
              <Link href="/compress" className="text-[#1D9E75] font-medium underline">
                미리 줄여두는
              </Link>{" "}
              것이 안전합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. 마감 직전 제출 시도</h2>
            <p className="mb-3">
              신청 마감은 대부분 정해진 시각에 시스템이 자동으로 차단합니다. &ldquo;몇 분 늦어도
              되겠지&rdquo;가 통하지 않습니다.
            </p>
            <p>
              <strong className="text-gray-900">해결:</strong> 마감 당일보다는 최소 하루 전에 서류를 다
              올려두고, 마감일엔 최종 확인만 하세요. 용량을 줄이거나 파일을 합치는 작업을 마감 직전에
              시작하면 시간이 부족합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">이것 말고 다른 반려 사유도 있어요</h2>
            <p>
              발급일자 초과, 명의 불일치, 사진 회전·잘림처럼 예비창업패키지뿐 아니라 정부지원사업 전반에서
              반복되는 반려 사유는 따로 정리해뒀습니다. 아래 관련 가이드에서 8가지를 모두 확인할 수
              있습니다.
            </p>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">서류 파일부터 정리해두세요</h2>
            <p className="text-gray-600 mb-6">용량 줄이기와 하나로 합치기, 설치 없이 무료로.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/compress" className="bg-[#1D9E75] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#178a66] transition">
                서류 용량 줄이기
              </Link>
              <Link href="/merge" className="bg-white border border-gray-300 text-gray-800 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition">
                제출 서류 합치기
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">관련 가이드</h2>
            <div className="flex flex-col gap-3">
              <Link href="/guide/document-rejected" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">지원사업 서류 반려 사유 8가지와 해결법 →</p>
                <p className="text-sm text-gray-500">실제로 자주 걸리는 반려 사유와 해결 방법</p>
              </Link>
              <Link href="/guide/submission-checklist" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">정부지원사업 제출 서류 체크리스트 →</p>
                <p className="text-sm text-gray-500">접수 전에 확인해야 할 항목을 순서대로 정리</p>
              </Link>
              <Link href="/guide/business-plan-compress" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">사업계획서 파일 용량 줄이는 법 →</p>
                <p className="text-sm text-gray-500">제출 용량 제한을 맞추기 위해 용량을 줄이는 방법</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
