import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, guideArticle } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "정부지원사업 제출 서류 체크리스트 - 접수 전 확인할 12가지 (2026) | ZipperDoc",
  description: "정부지원사업·예비창업패키지 서류 접수 전에 확인해야 할 항목을 순서대로 정리했습니다. 서류 종류, 파일 형식, 용량, 발급일자, 마감 시각까지 놓치기 쉬운 부분을 짚었습니다.",
  alternates: { canonical: "/guide/submission-checklist" },
  openGraph: {
    ...openGraphBase,
    title: "정부지원사업 제출 서류 체크리스트",
    description: "접수 전에 확인해야 할 12가지를 순서대로 정리했습니다.",
    url: "/guide/submission-checklist",
    type: "article",
  },
};

export default function SubmissionChecklistGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <JsonLd
        data={guideArticle({
          headline: "정부지원사업 제출 서류 체크리스트 - 접수 전 확인할 12가지 (2026)",
          description: "정부지원사업·예비창업패키지 서류 접수 전에 확인해야 할 항목을 순서대로 정리했습니다. 서류 종류, 파일 형식, 용량, 발급일자, 마감 시각까지 놓치기 쉬운 부분을 짚었습니다.",
          path: "/guide/submission-checklist",
        })}
      />
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          정부지원사업 제출 서류 체크리스트
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          지원사업 접수는 대부분 마감 당일에 몰립니다. 그런데 막상 업로드하려는 순간 파일 형식이 안 맞거나,
          서류 한 장이 빠져 있거나, 발급받은 지 오래된 증명서를 넣은 걸 발견하는 일이 흔합니다. 접수 전에
          한 번씩 짚어보면 좋은 항목들을 순서대로 정리했습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1단계. 공고문부터 다시 읽기</h2>
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li>
                <strong className="text-gray-900">제출 서류 목록을 번호까지 그대로 옮겨 적기.</strong>{" "}
                공고문 본문과 별첨 양식에 적힌 목록이 다른 경우가 있습니다. 둘 다 확인하세요.
              </li>
              <li>
                <strong className="text-gray-900">필수와 선택을 구분하기.</strong> &ldquo;해당자에
                한함&rdquo;으로 표시된 서류를 필수로 착각해 시간을 쓰거나, 반대로 필수를 빠뜨리는 일이
                자주 있습니다.
              </li>
              <li>
                <strong className="text-gray-900">마감 시각 확인하기.</strong> 날짜만 보고 자정까지로
                생각했다가 오후 6시 마감에 걸리는 경우가 많습니다. 시각까지 적어두세요.
              </li>
              <li>
                <strong className="text-gray-900">문의처 번호 메모하기.</strong> 마감 직전에 시스템 오류가
                나면 연락할 곳이 필요합니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2단계. 서류 발급 상태 확인</h2>
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li>
                <strong className="text-gray-900">발급일자가 유효기간 안에 있는지.</strong> 사업자등록증명,
                국세·지방세 완납증명, 등기부등본은 보통 &ldquo;최근 3개월 이내 발급분&rdquo;을 요구합니다.
                예전에 받아둔 파일을 그대로 쓰면 반려됩니다.
              </li>
              <li>
                <strong className="text-gray-900">주민등록번호 뒷자리 처리.</strong> 공고에 따라 마스킹을
                요구하기도, 반대로 전체 표기를 요구하기도 합니다. 요구사항과 반대로 제출하면 재제출
                대상입니다.
              </li>
              <li>
                <strong className="text-gray-900">통장사본의 예금주가 신청 명의와 같은지.</strong> 개인
                명의 통장을 법인 사업에 제출하는 실수가 잦습니다.
              </li>
              <li>
                <strong className="text-gray-900">직인·서명이 들어갔는지.</strong> 양식 문서는 출력 후
                날인하고 다시 촬영하거나 스캔해야 하는 경우가 많습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3단계. 파일 형식과 용량 맞추기</h2>
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li>
                <strong className="text-gray-900">요구 형식이 PDF인지 HWP인지.</strong> 사업계획서는 HWP
                원본을, 증빙 서류는 PDF를 요구하는 경우가 많습니다. 섞이지 않게 확인하세요.
              </li>
              <li>
                <strong className="text-gray-900">하나로 합쳐야 하는지, 따로 올려야 하는지.</strong> 업로드
                칸이 하나뿐이면 합쳐야 하고, 서류별로 칸이 나뉘어 있으면 따로 올려야 합니다. 반대로 하면
                반려됩니다.
              </li>
              <li>
                <strong className="text-gray-900">파일당 용량 제한.</strong> 보통 5MB 또는 10MB입니다.
                스마트폰 사진은 한 장만으로도 이 기준을 넘기 쉬우므로{" "}
                <Link href="/compress" className="text-[#1D9E75] font-medium underline">
                  용량 줄이기
                </Link>
                가 필요합니다.
              </li>
              <li>
                <strong className="text-gray-900">파일명 규칙.</strong> &ldquo;[기업명]_사업계획서&rdquo;
                같은 형식을 지정하는 공고가 많습니다. 특수문자나 공백 때문에 업로드가 막히는 경우도
                있으니 지정 형식을 그대로 따르세요.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4단계. 최종 파일 열어서 눈으로 확인</h2>
            <p className="mb-3">
              합치거나 압축한 뒤에는 반드시 완성 파일을 열어서 확인하세요. 여기서 걸러지는 문제가 가장
              많습니다.
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li>페이지 순서가 공고문의 서류 목록 순서와 같은지</li>
              <li>계좌번호, 사업자번호, 이름 같은 글자가 알아볼 수 있게 나왔는지</li>
              <li>사진이 뒤집히거나 옆으로 누워 들어가지 않았는지</li>
              <li>서류 귀퉁이가 잘리지 않았는지</li>
              <li>빈 페이지가 끼어 있지 않은지</li>
            </ul>
            <p className="mt-3">
              특히 압축을 세게 한 경우 숫자가 뭉개지기 쉽습니다. 화면을 확대해서 계좌번호를 읽어보는
              것만으로도 대부분의 반려를 예방할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5단계. 접수 후 확인</h2>
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li>
                <strong className="text-gray-900">접수번호와 접수완료 화면 캡처.</strong> 시스템 오류로
                접수가 누락됐을 때 증빙이 됩니다.
              </li>
              <li>
                <strong className="text-gray-900">확인 메일이나 문자가 왔는지.</strong> 오지 않았다면
                접수가 안 됐을 수 있으니 다시 확인하세요.
              </li>
              <li>
                <strong className="text-gray-900">업로드된 파일을 다시 내려받아 열어보기.</strong> 올리는
                과정에서 파일이 손상되는 경우가 드물게 있습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">마감 직전에 자주 생기는 문제</h2>
            <p className="mb-3">
              마감 당일 오후에는 접속자가 몰려 업로드가 느려지거나 실패하는 일이 흔합니다. 가능하면 마감
              하루 전에 접수를 마치는 것이 가장 확실한 대비책입니다.
            </p>
            <p>
              부득이하게 당일에 하게 됐다면, 서류 준비를 미리 끝내두고 접수 시작 시간에 바로 올리세요.
              용량을 줄이거나 파일을 합치는 작업을 마감 30분 전에 시작하면 시간이 부족합니다.
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
              <Link href="/guide/bankbook-pdf" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">통장사본·사업자등록증을 하나의 PDF로 합치는 법 →</p>
                <p className="text-sm text-gray-500">사진과 PDF를 한 번에 합치고 A4로 정렬하는 방법</p>
              </Link>
              <Link href="/guide/file-safety" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">온라인 PDF 도구에 통장사본 올려도 될까? →</p>
                <p className="text-sm text-gray-500">파일이 서버로 전송되는지 직접 확인하는 방법</p>
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
