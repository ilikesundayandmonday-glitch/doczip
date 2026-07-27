import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JPG를 PDF로 변환하는 법 - 무료로 여러 장 한번에 (2026) | ZipperDoc",
  description: "JPG·PNG 이미지를 PDF로 변환하는 방법. 여러 장의 JPG를 한 번에 하나의 PDF로 합치고, 용량까지 줄이는 무료 방법을 안내합니다. 설치·회원가입 없이 브라우저에서 바로.",
};

export default function JpgToPdfGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          JPG를 PDF로 변환하는 법: 무료로 여러 장 한번에
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          JPG 이미지를 PDF로 변환해야 할 때가 많습니다. 서류 제출, 문서 보관, 여러 장의 이미지를 하나로 묶을 때 등입니다. 이 글에서는 설치나 회원가입 없이 JPG를 PDF로 바꾸는 방법을 정리했습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">JPG와 PDF, 무엇이 다를까?</h2>
            <p className="mb-3">
              JPG(JPEG)는 사진에 널리 쓰이는 이미지 형식이고, PDF는 문서를 위한 형식입니다. JPG는 한 파일에 이미지 한 장만 담기지만, PDF는 여러 페이지를 하나로 묶을 수 있고 어떤 기기에서 열어도 레이아웃이 유지됩니다.
            </p>
            <p>
              그래서 서류를 제출하거나 여러 이미지를 하나로 정리할 때는 JPG를 PDF로 변환하는 것이 편리합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">언제 JPG를 PDF로 변환할까?</h2>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>서류 제출처에서 &ldquo;PDF 형식으로 제출&rdquo;을 요구할 때</li>
              <li>여러 장의 사진을 하나의 파일로 묶어 정리하고 싶을 때</li>
              <li>이미지를 인쇄용 문서로 만들고 싶을 때</li>
              <li>통장사본, 신분증, 계약서 사진을 문서 형태로 보관할 때</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">JPG를 PDF로 변환하는 방법</h2>
            <p className="mb-3">
              <Link href="/merge" className="text-[#1D9E75] font-medium underline">ZipperDoc 제출 서류 합치기</Link>를 사용하면 JPG를 PDF로 변환하고, 여러 장을 하나의 PDF로 묶는 것까지 한 번에 할 수 있습니다.
            </p>
            <ol className="list-decimal pl-6 flex flex-col gap-2">
              <li>변환할 JPG(또는 PNG) 이미지를 준비합니다.</li>
              <li>서류 합치기 페이지에 이미지를 올립니다. 여러 장을 한 번에 올릴 수 있습니다.</li>
              <li>화살표로 순서를 원하는 대로 정리합니다.</li>
              <li>&ldquo;합쳐서 다운로드&rdquo;를 누르면 JPG가 PDF로 변환되어 저장됩니다.</li>
            </ol>
            <p className="mt-3">
              JPG 한 장만 올리면 한 페이지짜리 PDF가, 여러 장을 올리면 여러 페이지 PDF가 만들어집니다. 이미지는 자동으로 A4 크기에 맞춰 가운데 정렬됩니다.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">변환한 PDF 용량이 클 때</h2>
            <p className="mb-3">
              고화질 JPG를 PDF로 변환하면 용량이 커질 수 있습니다. 제출처의 용량 제한(보통 5MB~10MB)을 넘는다면, 이미지를 먼저 압축하면 됩니다.
            </p>
            <p>
              <Link href="/compress" className="text-[#1D9E75] font-medium underline">ZipperDoc 서류 용량 줄이기</Link>로 JPG 용량을 줄인 뒤 PDF로 변환하면, 화질은 유지하면서 용량 제한을 맞출 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 여러 장의 JPG를 하나의 PDF로 합칠 수 있나요?</p>
                <p>네. 여러 장을 한 번에 올리면 각 이미지가 PDF의 한 페이지씩으로 들어가 하나의 PDF가 만들어집니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. PNG도 PDF로 변환되나요?</p>
                <p>네. JPG뿐 아니라 PNG 이미지도 같은 방법으로 PDF로 변환할 수 있습니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 설치나 회원가입이 필요한가요?</p>
                <p>아니요. 브라우저에서 바로 사용하며, 설치나 회원가입 없이 무료로 이용할 수 있습니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 이미지가 서버에 저장되나요?</p>
                <p>저장되지 않습니다. 모든 변환은 이용자의 브라우저 안에서 이루어지며, 이미지는 외부로 전송되지 않습니다.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">JPG를 PDF로 바로 변환해보세요</h2>
            <p className="text-gray-600 mb-6">설치 없이, 회원가입 없이, 무료로 사용하세요.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/merge" className="bg-[#1D9E75] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#178a66] transition">
                JPG를 PDF로 변환하기
              </Link>
              <Link href="/compress" className="bg-white border border-gray-300 text-gray-800 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition">
                이미지 용량 줄이기
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">관련 가이드</h2>
            <div className="flex flex-col gap-3">
              <Link href="/guide/photo-to-pdf" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">사진을 PDF로 만드는 법 (스캐너 없이) →</p>
                <p className="text-sm text-gray-500">스마트폰 사진을 무료로 PDF로 변환하는 방법</p>
              </Link>
              <Link href="/guide/bankbook-pdf" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">통장사본·사업자등록증을 하나의 PDF로 합치는 법 →</p>
                <p className="text-sm text-gray-500">사진과 PDF를 한 번에 합치고 A4로 정렬하는 방법</p>
              </Link>
              <Link href="/guide" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">정부지원사업 서류 제출 가이드 →</p>
                <p className="text-sm text-gray-500">용량 줄이기부터 PDF 합치기까지 전체 정리</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}