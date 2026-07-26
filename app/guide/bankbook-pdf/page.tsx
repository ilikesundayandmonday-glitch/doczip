import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "통장사본·사업자등록증을 하나의 PDF로 합치는 법 (2026) | ZipperDoc",
  description: "지원사업 제출용 통장사본, 사업자등록증 사진을 하나의 PDF로 합치는 방법. 사진과 PDF를 함께 합치고 A4로 정렬하는 무료 방법을 단계별로 안내합니다.",
};

export default function BankbookPdfGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          통장사본·사업자등록증을 하나의 PDF로 합치는 법
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          정부지원사업이나 창업지원 서류를 제출할 때 &ldquo;통장사본, 사업자등록증을 하나의 PDF로 합쳐서 제출&rdquo;하라는 요구를 자주 받습니다. 문제는 이 서류들이 대부분 스마트폰으로 찍은 사진이라는 점입니다. 이 글에서는 사진과 PDF를 하나로 합치는 방법을 정리했습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">왜 하나의 PDF로 합쳐야 할까?</h2>
            <p className="mb-3">
              많은 지원사업 제출 시스템은 첨부파일을 하나만 받거나, 여러 서류를 한 파일로 정리해 제출하도록 요구합니다. 통장사본, 사업자등록증, 신분증 사본을 따로따로 올리면 반려되거나, 애초에 파일을 하나만 올릴 수 있는 경우도 많습니다.
            </p>
            <p>
              그래서 여러 서류를 <strong>정해진 순서대로 하나의 PDF로 합치는</strong> 작업이 필요합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">사진과 PDF가 섞여 있을 때의 문제</h2>
            <p className="mb-3">
              통장사본이나 사업자등록증은 보통 스마트폰으로 촬영해 <strong>JPG·PNG 사진</strong> 형태입니다. 반면 사업계획서 같은 서류는 <strong>PDF</strong>인 경우가 많습니다.
            </p>
            <p>
              대부분의 PDF 합치기 도구는 PDF 파일만 지원하기 때문에, 사진을 일일이 PDF로 변환한 뒤 다시 합쳐야 하는 번거로움이 있습니다. 사진과 PDF를 한 번에 합칠 수 있으면 이 과정이 훨씬 간단해집니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">사진과 PDF를 한 번에 합치는 방법</h2>
            <p className="mb-3">
              <Link href="/merge" className="text-[#1D9E75] font-medium underline">ZipperDoc 제출 서류 합치기</Link>를 사용하면 사진과 PDF를 구분 없이 한 번에 합칠 수 있습니다. 방법은 다음과 같습니다.
            </p>
            <ol className="list-decimal pl-6 flex flex-col gap-2">
              <li>통장사본, 사업자등록증 등 필요한 서류를 스마트폰으로 촬영하거나 준비합니다.</li>
              <li>서류 합치기 페이지에서 사진(JPG·PNG)과 PDF를 모두 올립니다.</li>
              <li>화살표로 원하는 순서대로 배치합니다. (예: 사업계획서 → 통장사본 → 사업자등록증)</li>
              <li>&ldquo;합쳐서 다운로드&rdquo;를 누르면 하나의 PDF로 저장됩니다.</li>
            </ol>
            <p className="mt-3">
              사진은 자동으로 A4 크기에 맞춰 가운데 정렬되므로, 크기가 제각각인 사진들도 깔끔하게 정리됩니다.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">파일 용량이 너무 클 때</h2>
            <p className="mb-3">
              사진 화질이 높으면 합친 PDF의 용량이 제출 기준(보통 5MB 또는 10MB)을 넘을 수 있습니다. 이럴 때는 사진을 먼저 압축한 뒤 합치면 됩니다.
            </p>
            <p>
              <Link href="/compress" className="text-[#1D9E75] font-medium underline">ZipperDoc 서류 용량 줄이기</Link>로 사진 용량을 줄인 다음, 서류 합치기로 하나의 PDF를 만들면 용량 제한도 맞출 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 통장사본 사진을 PDF로 바꾸지 않고 바로 합칠 수 있나요?</p>
                <p>네. ZipperDoc은 JPG·PNG 사진을 PDF로 따로 변환하지 않아도, 사진 그대로 올려 다른 PDF와 하나로 합칠 수 있습니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 서류 순서를 바꿀 수 있나요?</p>
                <p>네. 파일을 올린 뒤 화살표 버튼으로 순서를 자유롭게 바꿀 수 있습니다. 공고에서 요구하는 순서대로 배치하면 됩니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 통장사본 같은 민감한 서류인데 안전한가요?</p>
                <p>네. 모든 처리는 이용자의 브라우저 안에서 이루어지며, 파일이 서버로 전송되거나 저장되지 않습니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 무료인가요?</p>
                <p>네. 회원가입이나 설치 없이 무료로 사용할 수 있습니다.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">지금 서류를 합쳐보세요</h2>
            <p className="text-gray-600 mb-6">사진과 PDF를 하나로. 설치 없이 무료로 바로 사용하세요.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/merge" className="bg-[#1D9E75] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#178a66] transition">
                제출 서류 합치기
              </Link>
              <Link href="/compress" className="bg-white border border-gray-300 text-gray-800 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition">
                서류 용량 줄이기
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}