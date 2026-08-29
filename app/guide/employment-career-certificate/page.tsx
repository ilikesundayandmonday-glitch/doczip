import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, guideArticle } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "재직증명서·경력증명서 발급 및 PDF 준비법 (2026) | ZipperDoc",
  description: "정부지원사업 제출용 재직증명서, 경력증명서 발급 방법을 정리했습니다. 회사 직접 발급, 정부24 온라인 발급, 전 직장 폐업 시 대안까지 다룹니다.",
  alternates: { canonical: "/guide/employment-career-certificate" },
  openGraph: {
    ...openGraphBase,
    title: "재직증명서·경력증명서 발급 및 PDF 준비법",
    description: "회사 직접 발급, 정부24 온라인 발급, 전 직장 폐업 시 대안까지 정리했습니다.",
    url: "/guide/employment-career-certificate",
    type: "article",
  },
};

export default function EmploymentCareerCertificateGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <JsonLd
        data={guideArticle({
          headline: "재직증명서·경력증명서 발급 및 PDF 준비법 (2026)",
          description: "정부지원사업 제출용 재직증명서, 경력증명서 발급 방법을 정리했습니다. 회사 직접 발급, 정부24 온라인 발급, 전 직장 폐업 시 대안까지 다룹니다.",
          path: "/guide/employment-career-certificate",
        })}
      />
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          재직증명서·경력증명서 발급 및 PDF 준비법
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          청년창업사관학교의 경력 요건, 예비창업패키지의 재직·무직 상태 확인처럼 정부지원사업에서 대표자나
          팀원의 근무 이력을 증빙해야 하는 경우가 많습니다. 재직증명서와 경력증명서는 이름은 비슷해도
          발급 경로와 내용이 다른 서류라, 헷갈리기 쉬운 부분을 정리했습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">재직증명서: 현재 다니는 회사에서 직접 발급</h2>
            <p className="mb-3">
              재직증명서는 &ldquo;지금 이 회사에 다니고 있다&rdquo;는 사실을 증명하는 서류입니다. 일반
              사기업 근로자는 온라인 발급이 안 되고, 재직 중인 회사 인사팀에 용도와 필요 항목을 명시해
              요청해야 합니다. 보통 당일에서 3영업일 안에 직인이 찍힌 서류를 출력본이나 PDF로 받을 수
              있습니다.
            </p>
            <p className="mb-3">
              공무원·교원·공공기관 재직자는 예외적으로 정부24에서 본인 인증 후 온라인으로 발급받을 수
              있습니다.
            </p>
            <p>
              증명서에는 근로자 성명·생년월일, 회사명·사업자등록번호·주소·대표자명, 부서·직위, 재직
              기간, 발급일과 회사 직인이 들어가야 하니 발급받은 뒤 빠진 항목이 없는지 확인하세요.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">퇴직한 회사에도 요청할 수 있습니다</h2>
            <p>
              근로기준법 제39조에 따라 회사는 퇴직자의 재직증명서 발급 요청을 거부할 수 없습니다. 퇴직
              후 3년 이내라면 즉시 발급 의무가 있으니, 예전 직장의 재직 이력이 필요하다면 주저 말고
              인사팀에 요청하세요.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">경력증명서: 정부24에서 국민연금 이력으로 발급</h2>
            <p className="mb-3">
              여러 직장을 거친 전체 경력, 또는 특정 회사·기간의 경력만 증명하고 싶다면 정부24의
              경력증명서를 이용합니다. 국민연금공단의 가입 이력을 자동으로 조회해 만들어주는 방식이라
              절차가 간단합니다.
            </p>
            <ol className="list-decimal pl-6 flex flex-col gap-2">
              <li>정부24에 접속해 공동인증서·금융인증서·간편인증 등으로 본인인증을 완료합니다.</li>
              <li>전체 경력이 필요하면 &lsquo;종합 경력증명서&rsquo;, 특정 회사·기간만 필요하면 &lsquo;부분 경력증명서&rsquo;를 선택합니다.</li>
              <li>국민연금 가입 이력이 표시되면 회사명·근무기간을 확인하고, 잘못된 부분이 있으면 수정합니다.</li>
              <li>발급이 완료되면 PDF로 바로 다운로드하거나 전자문서지갑에 저장할 수 있습니다.</li>
            </ol>
            <p className="mt-3">
              한 가지 주의할 점은 대리인 신청이 안 되고 본인만 신청 가능하다는 것, 그리고 국민연금에
              가입되지 않은 경력(일부 공무원·특수직역연금 대상자, 일용직, 단기 아르바이트 등)은 이
              증명서에 나타나지 않는다는 것입니다. 정보에 오류가 있다면 국민연금공단에 문의해 가입
              이력을 정정한 뒤 다시 발급받아야 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">전 직장이 폐업해서 경력증명서를 못 받는다면</h2>
            <p className="mb-3">
              실제로 한 신청자는 2000년대에 다닌 회사가 폐업해 경력증명서를 발급받을 방법이 없어지자,
              그동안은 국민연금 가입증명서로 경력을 인정받아 왔는데 어느 날 갑자기 경력증명서 제출을
              요구받아 곤란해진 사례가 있었습니다. 이런 경우 상담 답변은 다음과 같았습니다.
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>경력을 어떤 서류로 증빙할지는 원칙적으로 접수 기관(사업장)이 정하는 사항이므로, 담당 부서와 먼저 협의하세요.</li>
              <li>폐업으로 경력증명서 발급이 불가능하다는 사정을 구체적으로 설명하세요.</li>
              <li>국민연금 가입증명서나 건강보험 자격득실확인서 같은 대체 서류를 인정받을 수 있는지 확인하세요.</li>
            </ul>
            <p className="mt-3">
              무작정 &ldquo;서류를 못 만든다&rdquo;고 포기하지 말고, 담당 기관에 상황을 설명하고 대체
              가능한 서류를 먼저 물어보는 것이 실제로 통하는 방법입니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">발급받은 서류, PDF로 정리하기</h2>
            <p>
              재직증명서·경력증명서를 다른 제출 서류와 함께 하나의 PDF로 묶어야 한다면{" "}
              <Link href="/merge" className="text-[#1D9E75] font-medium underline">
                제출 서류 합치기
              </Link>
              를 이용하세요. 스마트폰으로 촬영한 서류라 용량이 크다면{" "}
              <Link href="/compress" className="text-[#1D9E75] font-medium underline">
                용량 줄이기
              </Link>
              로 먼저 압축한 뒤 합치면 됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 재직증명서와 경력증명서 중 뭘 내야 하는지 공고문에 안 나와 있어요.</p>
                <p>현재 재직 여부만 확인하는 것인지, 과거 전체 경력을 보는 것인지에 따라 다릅니다. 헷갈린다면 담당 기관에 문의해 정확한 서류명을 확인하는 게 가장 빠릅니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 경력증명서에 프리랜서나 개인사업자 경력도 나오나요?</p>
                <p>국민연금 지역가입자로 납부한 이력이 있다면 조회될 수 있지만, 회사명이 아니라 가입 형태로만 표시되는 경우가 많습니다. 사업 운영 경력을 별도로 증빙해야 한다면 사업자등록증명원 같은 서류를 함께 준비하세요.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 발급받은 전자문서를 그대로 제출해도 되나요?</p>
                <p>제출처가 전자문서(정부24 전자문서지갑 등)를 인정하는지 미리 확인하세요. 인정하지 않는 곳이라면 PDF로 출력해서 제출해야 합니다.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">발급받은 서류를 정리해두세요</h2>
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
              <Link href="/guide/youth-startup-academy-checklist" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">청년창업사관학교 제출서류 체크리스트와 준비 방법 →</p>
                <p className="text-sm text-gray-500">지원 자격과 실적 증빙 서류를 정리</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
