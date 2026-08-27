import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, guideArticle } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "소상공인 정책자금(소진공) 제출서류 준비법 (2026) | ZipperDoc",
  description: "소상공인시장진흥공단 정책자금 신청 시 부결되는 대표 사유와 서류 준비 순서를 정리했습니다. 세금 체납, 매출 증빙, 완납증명서 등 자금 신청 전에 확인할 것들.",
  alternates: { canonical: "/guide/small-business-policy-fund" },
  openGraph: {
    ...openGraphBase,
    title: "소상공인 정책자금(소진공) 제출서류 준비법",
    description: "부결되는 대표 사유와 서류 준비 순서를 정리했습니다.",
    url: "/guide/small-business-policy-fund",
    type: "article",
  },
};

export default function SmallBusinessPolicyFundGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <JsonLd
        data={guideArticle({
          headline: "소상공인 정책자금(소진공) 제출서류 준비법 (2026)",
          description: "소상공인시장진흥공단 정책자금 신청 시 부결되는 대표 사유와 서류 준비 순서를 정리했습니다. 세금 체납, 매출 증빙, 완납증명서 등 자금 신청 전에 확인할 것들.",
          path: "/guide/small-business-policy-fund",
        })}
      />
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          소상공인 정책자금(소진공) 제출서류 준비법
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          소상공인시장진흥공단(소진공) 정책자금은 예비창업패키지 같은 사업비 지원사업과 다르게{" "}
          <strong className="text-gray-900">대출(융자)</strong> 성격이라 심사 기준도 다릅니다. 사업계획서의
          완성도보다 신용·세금·매출 증빙 같은 &ldquo;자격 요건&rdquo;에서 걸러지는 경우가 훨씬 많습니다.
          이 글은 그 요건들과 준비 순서를 정리했습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">서류를 준비하기 전에 결격 사유부터 지우세요</h2>
            <p className="mb-3">
              소진공 정책자금은 접수 단계에서부터 자격 요건을 걸러내는 방식이라, 서류를 아무리 잘
              준비해도 아래 사유가 있으면 그 자체로 접수가 막히거나 부결됩니다.
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li><strong>국세·지방세 체납</strong> — 금액과 상관없이 단 1원이라도 미납 상태면 시스템에서 자동으로 접수가 차단되는 경우가 많습니다. 신청 전 홈택스·위택스에서 미납 여부부터 확인하세요.</li>
              <li><strong>낮은 신용점수·연체 이력</strong> — KCB·NICE 신용점수가 너무 낮거나 최근 1년 내 연체가 여러 번 있으면 부결 사유가 됩니다. 신용회복위원회 등록자나 개인회생·파산 신청자는 애초에 제외 대상인 경우가 많습니다.</li>
              <li><strong>제한 업종</strong> — 도박·사치·향락업은 물론, 부동산 임대·매매업이나 일부 전문직종도 지원 대상에서 제외됩니다. 표준산업분류코드를 미리 확인해보세요.</li>
              <li><strong>사업자 상태 이상</strong> — 휴업·폐업 신고 상태이거나, 실제 영업장 주소와 사업자등록상 주소가 다르거나, 명의를 빌린 사업자인 경우 부결됩니다.</li>
              <li><strong>매출 증빙 불가</strong> — 부가세 신고를 누락했거나, 매출이 지나치게 적거나, 현금거래·개인 통장만 써서 매출을 증빙할 방법이 없는 경우입니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">서류 준비는 이 순서로</h2>
            <p className="mb-3">위 결격 사유를 먼저 지운 다음, 서류는 아래 순서로 모으면 헤매지 않습니다.</p>
            <ol className="list-decimal pl-6 flex flex-col gap-2">
              <li>
                <strong>완납증명서부터 확인.</strong> 체납이 없는지, 있다면 납부 후 전산 반영까지 2~3영업일이
                걸린다는 점을 감안해 가장 먼저 처리하세요. 발급 방법은{" "}
                <Link href="/guide/tax-clearance-certificate" className="text-[#1D9E75] font-medium underline">
                  국세완납증명서·지방세완납증명서 발급 방법
                </Link>
                에 정리해두었습니다.
              </li>
              <li><strong>신청할 자금 종류 확정.</strong> 운전자금, 시설(설비)자금, 대환자금 등 목적에 따라 요구 서류가 달라집니다.</li>
              <li><strong>기본 증명서 일괄 발급.</strong> 사업자등록증, 부가세 과세표준증명원 등을 한 번에 모아 발급받으세요.</li>
              <li><strong>용도 소명 자료 정리.</strong> 특히 대환자금은 해당 대출이 실제 사업장 운영에 쓰였음을 보여주는 세금계산서·계약서 같은 소명 자료를 빠짐없이 챙겨야 합니다. 개인 신용대출을 사업자금으로 대환하려는 경우 이 자료 미비가 가장 흔한 반려 사유로 꼽힙니다.</li>
              <li><strong>신청 창구 선택.</strong> 온라인(소진공 정책자금 사이트) 또는 전국 지역센터 중 편한 곳으로 접수합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">서류가 완벽해도 승인은 별개입니다</h2>
            <p>
              위 결격 사유가 없고 서류를 다 갖췄더라도, 그것이 곧 승인을 의미하지는 않습니다. 심사에서는
              매출 규모, 기존 채무 수준(연매출 대비 기존 대출 잔액 비율이 지나치게 높으면 감점), 보증
              여력 등을 종합적으로 평가합니다. 또한 정책자금은 연간 예산이 정해져 있어 요건을 충족해도
              예산 소진 시점에 따라 접수 자체가 조기 마감될 수 있으니, 공고 시작 직후 서두르는 편이
              유리합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">서류 미비로 떨어졌다면</h2>
            <p>
              서류 미비로 인한 부결은 대부분 보완 후 바로 재신청이 가능합니다. 반면 신용점수나 세금 문제로
              부결됐다면 통상 6개월 이상 상황을 개선한 뒤 재신청해야 합니다. 부결 통지에 적힌 사유를
              먼저 정확히 확인하고, 서류 문제인지 자격 문제인지부터 구분하는 게 다음 행동을 정하는
              데 중요합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 예비창업패키지 같은 사업비 지원사업이랑 준비 방식이 다른가요?</p>
                <p>
                  많이 다릅니다. 예비창업패키지 등은 사업계획서 완성도가 핵심이지만, 소진공 정책자금은
                  대출이라 신용·세금·매출 증빙 같은 자격 요건이 우선입니다. 사업계획서 작성법이 궁금하다면{" "}
                  <Link href="/guide/business-plan-writing" className="text-[#1D9E75] underline">
                    PSST 구조로 쓰는 법
                  </Link>
                  을 참고하세요.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 세금을 방금 다 냈는데도 왜 체납으로 뜨나요?</p>
                <p>납부 후 전산에 반영되기까지 보통 2~3영업일이 걸립니다. 납부 직후 바로 신청하지 말고 며칠 여유를 두세요.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 여러 증명서를 하나의 파일로 합쳐서 제출해야 하나요?</p>
                <p>
                  신청 방식에 따라 다르지만, 여러 서류를 하나로 합쳐 제출해야 한다면{" "}
                  <Link href="/merge" className="text-[#1D9E75] font-medium underline">
                    제출 서류 합치기
                  </Link>
                  로 순서대로 정리할 수 있습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">준비된 서류를 정리해두세요</h2>
            <p className="text-gray-600 mb-6">여러 증명서를 하나로 합치고, 용량도 맞추고. 설치 없이 무료로.</p>
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
              <Link href="/guide/tax-clearance-certificate" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">국세완납증명서·지방세완납증명서 발급 방법 →</p>
                <p className="text-sm text-gray-500">홈택스·위택스에서 미리 발급받는 법</p>
              </Link>
              <Link href="/guide/business-registration-certificate" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">사업자등록증명원 발급 방법과 제출 파일 만들기 →</p>
                <p className="text-sm text-gray-500">정부24·홈택스에서 무료로 발급받는 법</p>
              </Link>
              <Link href="/guide/document-rejected" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">서류가 반려되는 이유 →</p>
                <p className="text-sm text-gray-500">발급일자, 용량, 명의 등 형식 문제 8가지</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
