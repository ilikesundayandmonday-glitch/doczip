import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, guideArticle } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "사업자등록증명원 발급 방법과 제출 파일 만들기 (2026) | ZipperDoc",
  description:
    "사업자등록증명원을 정부24·홈택스에서 무료로 발급받는 방법과, 다른 서류와 함께 제출용 PDF로 준비하는 법을 정리했습니다. 발급일자 유효기간도 함께 확인하세요.",
  alternates: { canonical: "/guide/business-registration-certificate" },
  openGraph: {
    ...openGraphBase,
    title: "사업자등록증명원 발급 방법",
    description: "정부24·홈택스에서 무료로 발급받고 제출용 파일로 준비하는 법.",
    url: "/guide/business-registration-certificate",
    type: "article",
  },
};

export default function BusinessRegistrationCertificateGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <JsonLd
        data={guideArticle({
          headline: "사업자등록증명원 발급 방법과 제출 파일 만들기 (2026)",
          description:
            "사업자등록증명원을 정부24·홈택스에서 무료로 발급받는 방법과, 다른 서류와 함께 제출용 PDF로 준비하는 법을 정리했습니다. 발급일자 유효기간도 함께 확인하세요.",
          path: "/guide/business-registration-certificate",
        })}
      />
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          사업자등록증명원 발급 방법과 제출 파일 만들기
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          정부지원사업 대부분이 요구하는 사업자등록증명원은 &ldquo;사업자등록증&rdquo;과 헷갈리기 쉬운 별개의
          서류입니다. 어디서 발급받는지, 사업자등록증과 뭐가 다른지, 발급 후 어떻게 제출용으로 준비하는지
          정리했습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">사업자등록증 vs 사업자등록증명원</h2>
            <p className="mb-3">
              <strong className="text-gray-900">사업자등록증</strong>은 사업자등록을 할 때 세무서에서 한 번
              발급해주는 원본 문서입니다. 재발급을 신청하지 않는 한 발급일이 바뀌지 않습니다.
            </p>
            <p>
              <strong className="text-gray-900">사업자등록증명원</strong>은 현재 사업자등록 상태를 증명하는
              서류로, 필요할 때마다 새로 발급받는 문서입니다. 정부지원사업에서는 &ldquo;최근 발급본&rdquo;을
              요구하는 경우가 많아 사업자등록증이 아니라 증명원을 내야 하는 경우가 대부분입니다. 공고문에
              어떤 서류를 요구하는지 이름을 정확히 확인하세요.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">발급 방법 2가지</h2>
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li>
                <strong className="text-gray-900">정부24 (gov.kr).</strong> 공동인증서나 간편인증으로
                로그인 후 &ldquo;사업자등록증명&rdquo;을 검색하면 즉시 무료로 발급받을 수 있습니다. PDF로
                바로 다운로드됩니다.
              </li>
              <li>
                <strong className="text-gray-900">홈택스 (hometax.go.kr).</strong> 국세증명 메뉴에서
                &ldquo;사업자등록증명&rdquo;을 신청하면 마찬가지로 즉시 무료 발급됩니다. 사업자 인증서로
                로그인하는 경우 이쪽이 더 익숙할 수 있습니다.
              </li>
            </ul>
            <p className="mt-3">
              두 곳 모두 결과는 동일한 효력을 가진 문서이니, 평소 쓰던 인증 방법이 되는 곳에서 발급받으면
              됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">발급일자, 마지막에 다시 확인하세요</h2>
            <p className="mb-3">
              대부분의 공고는 &ldquo;최근 1개월 또는 3개월 이내 발급분&rdquo;을 요구합니다. 서류를 미리
              준비해두고 다른 서류를 챙기는 동안 시간이 지나 유효기간을 넘기는 경우가 흔합니다.
            </p>
            <p>
              <strong className="text-gray-900">해결:</strong> 다른 서류를 다 준비한 뒤, 접수 직전에 사업자등록증명원만
              마지막으로 다시 발급받으세요. 발급은 몇 초면 끝나니 미리 받아두는 이점이 크지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">다른 서류와 함께 제출해야 한다면</h2>
            <p className="mb-3">
              사업자등록증명원 한 장만 내는 경우도 있지만, 통장사본·신분증 사본 등과 함께 &ldquo;하나의
              PDF로 합쳐서 제출&rdquo;하라는 공고도 많습니다. 정부24·홈택스에서 받은 PDF와 사진 파일을 같이
              올려야 하는 상황입니다.
            </p>
            <p>
              <Link href="/merge" className="text-[#1D9E75] font-medium underline">
                제출 서류 합치기
              </Link>
              를 사용하면 PDF와 사진(JPG, PNG)을 함께 올려 원하는 순서대로 하나의 PDF로 합칠 수 있습니다.
              사진은 자동으로 A4 크기에 맞춰 정렬됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">발급 관련해서 자주 걸리는 다른 문제</h2>
            <p>
              발급일자 외에도 파일 형식, 순서, 명의 불일치 같은 이유로 반려되는 경우가 있습니다. 정부지원사업
              전반에서 반복되는 반려 사유는 따로 정리해뒀습니다.
            </p>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">서류 파일부터 정리해두세요</h2>
            <p className="text-gray-600 mb-6">여러 서류를 하나로 합치고, 용량도 맞추고. 설치 없이 무료로.</p>
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
              <Link href="/guide/document-rejected" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">지원사업 서류 반려 사유 8가지와 해결법 →</p>
                <p className="text-sm text-gray-500">실제로 자주 걸리는 반려 사유와 해결 방법</p>
              </Link>
              <Link href="/guide/bankbook-pdf" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">통장사본·사업자등록증을 하나의 PDF로 합치는 법 →</p>
                <p className="text-sm text-gray-500">사진과 PDF를 한 번에 합치고 A4로 정렬하는 방법</p>
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
