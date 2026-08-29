import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, guideArticle } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "표준재무제표증명 발급 방법 (2026) | ZipperDoc",
  description: "정책자금·대출·입찰 제출용 표준재무제표증명을 홈택스에서 발급하는 방법과, 발급이 안 되는 경우(신고 방식, 결산 전) 및 대체 서류를 정리했습니다.",
  alternates: { canonical: "/guide/standard-financial-statement" },
  openGraph: {
    ...openGraphBase,
    title: "표준재무제표증명 발급 방법",
    description: "홈택스 발급 절차와 발급이 안 되는 경우, 대체 서류를 정리했습니다.",
    url: "/guide/standard-financial-statement",
    type: "article",
  },
};

export default function StandardFinancialStatementGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <JsonLd
        data={guideArticle({
          headline: "표준재무제표증명 발급 방법 (2026)",
          description: "정책자금·대출·입찰 제출용 표준재무제표증명을 홈택스에서 발급하는 방법과, 발급이 안 되는 경우(신고 방식, 결산 전) 및 대체 서류를 정리했습니다.",
          path: "/guide/standard-financial-statement",
        })}
      />
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          표준재무제표증명 발급 방법
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          은행 대출이나 소상공인 정책자금처럼 기업의 재무 신뢰성을 확인해야 하는 곳에서는 표준재무제표증명을
          요구합니다. 발급 자체는 간단하지만, 신고 방식에 따라 아예 발급이 안 되는 경우가 있어 미리 알아두지
          않으면 마감 직전에 당황할 수 있습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">홈택스에서 발급하는 방법</h2>
            <ol className="list-decimal pl-6 flex flex-col gap-2">
              <li>홈택스(hometax.go.kr)에 공동인증서(법인은 법인 인증서)로 로그인합니다.</li>
              <li>상단 메뉴 [증명·등록·신청] → [즉시발급 증명] → [표준재무제표증명(개인/법인)]을 선택합니다. 검색창에 이름을 입력해 찾아도 됩니다.</li>
              <li>사용 용도(대출, 입찰, 공공기관 제출 등)와 제출처, 확인하려는 사업연도를 입력합니다.</li>
              <li>[신청하기]를 누르면 민원증명 처리결과 화면으로 이동하고, 여기서 출력하거나 PDF로 저장할 수 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">발급이 안 될 때 가장 먼저 의심해야 할 것</h2>
            <p className="mb-3">
              신고를 분명히 했는데도 발급이 안 된다는 문의가 실제로 많습니다. 한 개인사업자는 매출 실적이
              있는데도 최근 3년치 표준재무제표가 국세청에서 계속 발급 거부되는 상황을 겪었는데, 원인은
              신고를 안 해서가 아니라 <strong className="text-gray-900">신고 방식</strong>에 있었습니다.
            </p>
            <p className="mb-3">
              표준재무제표증명은 <strong className="text-gray-900">복식부기로 종합소득세를 신고한 경우에만
              발급</strong>됩니다. 간편장부나 추계신고(단순경비율·기준경비율)로 신고했다면 실적이 있어도
              이 증명서 자체가 발급되지 않습니다.
            </p>
            <p>
              그동안 간편장부나 추계신고로 세금을 신고해왔다면, 지난 종합소득세 신고서의 신고유형 항목을
              먼저 확인해보세요. 복식부기로 전환하지 않는 한 이 증명서는 발급받을 수 없습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">신고 전, 결산 전이라면</h2>
            <p>
              법인세 신고가 아직 안 끝났거나 기장(결산)이 완료되지 않은 사업연도는 애초에 증명서 자체가
              존재하지 않아 발급이 불가능합니다. 보통 해당 사업연도 신고·결산이 끝난 다음 달 말일부터
              신청할 수 있습니다. 예를 들어 2025년 귀속분이라면 2026년 5월은 지나야 발급받을 수 있는
              식입니다. 정책자금 신청을 앞두고 있다면 이 시차를 미리 계산해두세요.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">복식부기 신고자가 아니라면: 대체 서류</h2>
            <p>
              표준재무제표증명을 발급받을 수 없는 상황이라면, 제출처에 소득금액증명원이나 과세표준증명원
              같은 대체 서류로 갈음할 수 있는지 먼저 문의하세요. 정책자금이나 대출 심사 기관마다 인정하는
              대체 서류가 다르므로, 발급이 안 된다는 걸 확인한 즉시 담당자에게 연락하는 게 시간을
              아끼는 방법입니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">유효기간을 꼭 확인하세요</h2>
            <p>
              표준재무제표증명의 유효기간은 보통 <strong className="text-gray-900">3개월</strong>이고,
              대부분의 제출처는 발급일 기준 90일 이내 서류만 인정합니다. 미리 발급해뒀다가 정작 제출
              시점에 기간이 지나버리는 경우가 흔하니, 다른 서류들과 함께 제출 직전에 발급받는 편이
              안전합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 소상공인 정책자금 신청에도 이 서류가 필요한가요?</p>
                <p>
                  자금 종류와 규모에 따라 요구되는 경우가 있습니다. 소진공 정책자금 전체 제출서류는{" "}
                  <Link href="/guide/small-business-policy-fund" className="text-[#1D9E75] font-medium underline">
                    소상공인 정책자금 제출서류 준비법
                  </Link>
                  에 정리해두었습니다.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 개인사업자와 법인사업자가 발급 방법이 다른가요?</p>
                <p>기본 절차는 같지만 인증서가 다릅니다. 법인은 법인 명의 공동인증서로 로그인해야 하고, 개인사업자는 대표자 개인 인증서를 사용합니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 지금이라도 복식부기로 바꾸면 바로 발급되나요?</p>
                <p>당해 연도부터 복식부기로 신고 방식을 바꿀 수는 있지만, 과거 연도분(이미 간편장부·추계신고로 신고 완료된 사업연도)의 표준재무제표증명은 소급 발급되지 않습니다. 세무 대리인과 상담해 신고 방식 전환 시점을 확인하세요.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">발급받은 서류를 정리해두세요</h2>
            <p className="text-gray-600 mb-6">여러 증명서를 하나의 PDF로 합치고, 용량도 맞추고. 설치 없이 무료로.</p>
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
              <Link href="/guide/small-business-policy-fund" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">소상공인 정책자금(소진공) 제출서류 준비법 →</p>
                <p className="text-sm text-gray-500">부결 사유와 준비 순서를 함께 정리</p>
              </Link>
              <Link href="/guide/tax-clearance-certificate" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">국세완납증명서·지방세완납증명서 발급 방법 →</p>
                <p className="text-sm text-gray-500">홈택스·위택스에서 미리 발급받는 법</p>
              </Link>
              <Link href="/guide/business-registration-certificate" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">사업자등록증명원 발급 방법과 제출 파일 만들기 →</p>
                <p className="text-sm text-gray-500">정부24·홈택스에서 무료로 발급받는 법</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
