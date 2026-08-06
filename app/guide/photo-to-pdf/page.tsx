import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "사진을 PDF로 만드는 법 - 스캐너 없이 무료로 (2026) | ZipperDoc",
  description: "스캐너 없이 스마트폰 사진을 PDF로 만드는 방법. 여러 장의 사진을 한 번에 하나의 PDF로 합치고 A4 크기로 정렬하는 무료 방법을 안내합니다.",
  alternates: { canonical: "/guide/photo-to-pdf" },
  openGraph: {
    ...openGraphBase,
    title: "사진을 PDF로 만드는 법 (스캐너 없이)",
    description: "스마트폰 사진을 PDF로 만들고 A4 크기로 정렬하는 방법을 안내합니다.",
    url: "/guide/photo-to-pdf",
    type: "article",
  },
};

export default function PhotoToPdfGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          사진을 PDF로 만드는 법: 스캐너 없이 무료로
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          서류를 제출할 때 &ldquo;PDF 파일로 제출&rdquo;하라는 요구를 자주 받습니다. 하지만 집에 스캐너가 없다면 어떻게 해야 할까요? 스마트폰으로 찍은 사진만 있어도 PDF를 만들 수 있습니다. 이 글에서 방법을 정리했습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">사진을 PDF로 바꿔야 하는 이유</h2>
            <p className="mb-3">
              관공서, 학교, 회사, 지원사업 제출처는 대부분 문서를 PDF로 받습니다. PDF는 어떤 기기에서 열어도 레이아웃이 유지되고, 여러 장을 하나로 묶을 수 있기 때문입니다.
            </p>
            <p>
              하지만 통장사본, 신분증, 계약서 같은 서류를 스마트폰으로 찍으면 JPG·PNG 사진으로 저장됩니다. 이 사진들을 PDF로 바꾸면 제출 요건을 쉽게 맞출 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">스캐너가 꼭 필요할까?</h2>
            <p className="mb-3">
              아닙니다. 예전에는 서류를 PDF로 만들려면 스캐너가 필요했지만, 지금은 스마트폰 카메라로 찍은 사진을 그대로 PDF로 변환할 수 있습니다. 화질만 알아볼 수 있으면 대부분의 제출처에서 문제없이 접수됩니다.
            </p>
            <p>
              중요한 것은 사진이 <strong>선명하게 잘 보이는지</strong>입니다. 촬영할 때 그림자가 지지 않게 하고, 서류 전체가 프레임 안에 들어오도록 반듯하게 찍으면 됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">사진을 PDF로 만드는 방법</h2>
            <p className="mb-3">
              <Link href="/merge" className="text-[#1D9E75] font-medium underline">ZipperDoc 제출 서류 합치기</Link>를 사용하면 사진을 PDF로 변환하고, 여러 장을 하나의 PDF로 합치는 것까지 한 번에 할 수 있습니다.
            </p>
            <ol className="list-decimal pl-6 flex flex-col gap-2">
              <li>PDF로 만들 사진(JPG·PNG)을 준비합니다.</li>
              <li>서류 합치기 페이지에서 사진을 올립니다. 여러 장을 한 번에 올릴 수 있습니다.</li>
              <li>화살표로 사진 순서를 원하는 대로 정리합니다.</li>
              <li>&ldquo;합쳐서 다운로드&rdquo;를 누르면 사진이 하나의 PDF로 저장됩니다.</li>
            </ol>
            <p className="mt-3">
              사진 한 장만 올려도 PDF로 변환되고, 여러 장을 올리면 페이지가 여러 개인 PDF가 만들어집니다. 사진은 자동으로 A4 크기에 맞춰 정렬됩니다.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">PDF 용량이 너무 클 때</h2>
            <p className="mb-3">
              고화질 사진으로 PDF를 만들면 파일 용량이 커질 수 있습니다. 제출처의 용량 제한(보통 5MB~10MB)을 넘는다면, 사진을 먼저 압축하면 됩니다.
            </p>
            <p>
              <Link href="/compress" className="text-[#1D9E75] font-medium underline">ZipperDoc 서류 용량 줄이기</Link>로 사진 용량을 줄인 뒤 PDF로 만들면, 화질은 유지하면서 용량 제한을 맞출 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 스캐너 없이 사진만으로 PDF를 만들어도 제출이 되나요?</p>
                <p>네. 대부분의 제출처는 사진으로 만든 PDF도 받습니다. 서류 내용이 선명하게 보이는지만 확인하면 됩니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 여러 장의 사진을 한 개의 PDF로 만들 수 있나요?</p>
                <p>네. 여러 장을 한 번에 올리면 각 사진이 PDF의 한 페이지씩으로 들어가 하나의 PDF가 만들어집니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 앱을 설치해야 하나요?</p>
                <p>아니요. 브라우저에서 바로 사용하며, 설치나 회원가입이 필요 없습니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 사진이 서버에 저장되나요?</p>
                <p>저장되지 않습니다. 모든 변환은 이용자의 브라우저 안에서 이루어지며, 사진은 외부로 전송되지 않습니다.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">사진을 PDF로 바로 만들어보세요</h2>
            <p className="text-gray-600 mb-6">스캐너 없이, 설치 없이, 무료로 사용하세요.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/merge" className="bg-[#1D9E75] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#178a66] transition">
                사진을 PDF로 만들기
              </Link>
              <Link href="/compress" className="bg-white border border-gray-300 text-gray-800 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition">
                서류 용량 줄이기
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
