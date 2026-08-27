import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, guideArticle } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "국세완납증명서·지방세완납증명서 발급 방법 (2026) | ZipperDoc",
  description: "정부지원사업·정책자금 신청 시 요구되는 국세완납증명서, 지방세완납증명서를 홈택스·위택스·정부24에서 발급받는 방법과 제출 시 주의사항을 정리했습니다.",
  alternates: { canonical: "/guide/tax-clearance-certificate" },
  openGraph: {
    ...openGraphBase,
    title: "국세완납증명서·지방세완납증명서 발급 방법",
    description: "홈택스·위택스·정부24에서 완납증명서 발급받는 방법과 제출 시 주의사항을 정리했습니다.",
    url: "/guide/tax-clearance-certificate",
    type: "article",
  },
};

export default function TaxClearanceCertificateGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <JsonLd
        data={guideArticle({
          headline: "국세완납증명서·지방세완납증명서 발급 방법 (2026)",
          description: "정부지원사업·정책자금 신청 시 요구되는 국세완납증명서, 지방세완납증명서를 홈택스·위택스·정부24에서 발급받는 방법과 제출 시 주의사항을 정리했습니다.",
          path: "/guide/tax-clearance-certificate",
        })}
      />
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          국세완납증명서·지방세완납증명서 발급 방법
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          정부지원사업이나 소상공인 정책자금을 신청할 때 빠지지 않고 요구되는 서류가 완납증명서입니다.
          한 신청자는 발급일이 기준을 넘긴 증명서를 그대로 냈다가 그 이유만으로 반려된 경험을 공유하기도
          했습니다. 자주 쓰는 서류인데도 막상 발급하려면 어디서, 어떻게 받아야 하는지 헷갈리는 경우가
          많아 정리했습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">국세완납증명서, 홈택스에서 발급하기</h2>
            <p className="mb-3">
              국세(소득세, 법인세, 부가가치세 등) 완납증명서는 홈택스(hometax.go.kr)에서 발급합니다.
            </p>
            <ol className="list-decimal pl-6 flex flex-col gap-2">
              <li>공동인증서 또는 금융인증서로 홈택스에 로그인합니다.</li>
              <li>상단 메뉴에서 납세증명 신청 화면으로 이동합니다.</li>
              <li>주민등록번호 공개 여부, 발급 유형(한글·영문), 사용 목적을 선택해 신청서를 작성합니다.</li>
              <li>신청이 완료되면 발급번호가 부여되고, PDF로 저장하거나 바로 인쇄할 수 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">지방세완납증명서, 위택스·정부24 중 편한 곳에서</h2>
            <p className="mb-3">
              지방세(재산세, 자동차세, 지방소득세 등) 완납증명서는 위택스(wetax.go.kr) 또는
              정부24(gov.kr)에서 발급할 수 있고, 두 곳 모두 발급 수수료는 무료입니다.
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li><strong>위택스:</strong> 간편인증(카카오·네이버 등)으로 로그인 → 상단 메뉴 &lsquo;발급&rsquo; → &lsquo;납세증명서&rsquo; 선택 → 납세자 정보 확인 후 신청하면 즉시 발급됩니다. 세금을 방금 납부한 직후에도 곧바로 확인·발급되는 편입니다.</li>
              <li><strong>정부24:</strong> 로그인 후 &lsquo;지방세납세증명&rsquo; 검색 → 발급하기 → 인적사항 확인 → 사용 목적 선택 → 온라인 발급(본인 출력) 순서로 진행합니다.</li>
              <li><strong>무인민원발급기:</strong> 지하철역·주민센터 등에 설치된 기기에서 지문 인증으로도 발급 가능하지만, 일부 기기는 지방세 발급을 지원하지 않으니 방문 전 확인하는 게 좋습니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">발급받기 전, 이 두 가지는 꼭 확인하세요</h2>
            <p className="mb-3">
              <strong className="text-gray-900">1. 체납분을 방금 냈다면 하루 이틀 여유를 두세요.</strong>{" "}
              밀린 세금을 납부했더라도 전산에 반영되기까지 보통 2~3영업일이 걸립니다. 납부 직후 바로
              완납증명서를 발급하려 하면 아직 미납 상태로 조회돼 발급이 막힐 수 있습니다. 마감일 임박해서
              체납을 정리하고 증명서까지 받으려 하면 시간이 부족할 수 있으니 여유를 두고 처리하세요.
            </p>
            <p>
              <strong className="text-gray-900">2. 완납증명서와 과세증명서는 다른 서류입니다.</strong>{" "}
              완납증명서는 &ldquo;밀린 세금이 없다&rdquo;를 증명하는 서류이고, 세목별과세증명서는
              &ldquo;어떤 세금을 얼마 냈는지&rdquo;를 보여주는 서류입니다. 공고문에서 요구하는 서류명을
              정확히 확인한 뒤 발급하세요. 유효기간도 법적으로 정해진 건 아니고 제출처 기준을 따르는
              경우가 많아, 보통 발급 후 1~3개월 이내를 요구합니다 — 마찬가지로 공고문 기준이 최우선입니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">정책자금 신청이라면 더 신경 써야 하는 이유</h2>
            <p>
              소상공인 정책자금처럼 대출 성격의 지원사업은 국세·지방세 체납이 단 1원이라도 있으면 접수
              시스템에서 자동으로 걸러지는 경우가 많습니다. 신청 전에 홈택스·위택스에서 미리 완납 여부를
              확인해두는 게, 서류를 다 준비해놓고도 체납 한 줄 때문에 처음부터 막히는 상황을 피하는
              방법입니다. 소진공 정책자금 신청서류 전체는{" "}
              <Link href="/guide/small-business-policy-fund" className="text-[#1D9E75] font-medium underline">
                소상공인 정책자금 제출서류 준비법
              </Link>
              에 정리해두었습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 국세완납증명서와 지방세완납증명서 둘 다 필요한가요?</p>
                <p>공고문에서 요구하는 대로 따르면 됩니다. 두 증명서는 발급 기관(국세청/지자체)이 달라 따로 발급받아야 하며, 대부분의 지원사업은 둘 다 요구하는 경우가 많습니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 미납이 있으면 아예 발급이 안 되나요?</p>
                <p>네. 완납증명서는 말 그대로 밀린 세금이 없어야 발급됩니다. 미납이 있다면 먼저 납부하고, 전산 반영까지 2~3영업일 정도 기다린 뒤 다시 신청하세요.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 발급받은 PDF를 다른 서류와 합쳐서 제출해야 하는데 어떻게 하나요?</p>
                <p>
                  완납증명서 PDF를 사업자등록증, 통장사본 등 다른 서류와{" "}
                  <Link href="/merge" className="text-[#1D9E75] font-medium underline">
                    하나의 PDF로 합치기
                  </Link>
                  에서 순서대로 올리면 됩니다.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">발급받은 서류, 하나로 정리하세요</h2>
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
              <Link href="/guide/business-registration-certificate" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">사업자등록증명원 발급 방법과 제출 파일 만들기 →</p>
                <p className="text-sm text-gray-500">정부24·홈택스에서 무료로 발급받는 법</p>
              </Link>
              <Link href="/guide/small-business-policy-fund" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">소상공인 정책자금(소진공) 제출서류 준비법 →</p>
                <p className="text-sm text-gray-500">부결 사유와 준비 순서를 함께 정리</p>
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
