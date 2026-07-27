import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "정부지원사업 서류 제출 가이드 - 용량 줄이기부터 PDF 합치기까지 | ZipperDoc",
  description: "정부지원사업·창업지원 서류 제출 시 자주 겪는 용량 제한(5MB)과 PDF 합치기 문제를 해결하는 방법. 통장사본·사업자등록증을 하나의 PDF로 합치는 법까지 정리했습니다.",
};

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 홈으로
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          정부지원사업 서류 제출 가이드: 용량 줄이기부터 PDF 합치기까지
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          정부지원사업이나 창업지원 서류를 제출할 때, 파일 용량 제한이나 &ldquo;하나의 PDF로 합쳐서 제출&rdquo; 요구사항 때문에 막힌 경험이 있으신가요? 이 글에서는 서류 준비 과정에서 자주 겪는 문제와 해결 방법을 정리했습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">지원사업 서류 제출, 왜 까다로울까?</h2>
            <p className="mb-3">
              정부지원사업, 예비창업패키지, 소상공인 지원사업 등에 서류를 제출할 때 흔히 겪는 문제는 크게 두 가지입니다.
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li><strong>파일 용량 제한:</strong> 대부분의 제출 시스템은 파일당 5MB 또는 10MB 이하를 요구합니다. 스마트폰으로 찍은 사진은 한 장에 5~10MB가 넘는 경우가 많아 그대로는 올릴 수 없습니다.</li>
              <li><strong>하나의 PDF로 합치기:</strong> 통장사본, 사업자등록증, 신분증 등 여러 서류를 &ldquo;하나의 PDF 파일로 합쳐서 제출&rdquo;하라는 요구가 많습니다. 사진과 PDF가 섞여 있으면 합치기가 더 번거롭습니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 서류 이미지 용량 줄이는 법</h2>
            <p className="mb-3">
              사진 파일이 5MB 제한을 넘을 때는 이미지를 압축해 용량을 줄이면 됩니다. 화질을 크게 해치지 않으면서 용량만 줄이는 것이 핵심입니다.
            </p>
            <p className="mb-3">
              <Link href="/compress" className="text-[#1D9E75] font-medium underline">ZipperDoc 서류 용량 줄이기</Link>를 사용하면 이미지를 올리고 압축 강도를 조절해 원하는 용량으로 맞출 수 있습니다. 설치 없이 브라우저에서 바로 처리되며, 이미지는 서버에 전송되지 않아 통장사본 같은 민감한 서류도 안전합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 여러 서류를 하나의 PDF로 합치는 법</h2>
            <p className="mb-3">
              &ldquo;하나의 PDF로 제출&rdquo; 요구를 맞추려면 여러 파일을 순서대로 합쳐야 합니다. 문제는 통장사본이나 사업자등록증이 <strong>사진(JPG, PNG)</strong>인 경우가 많다는 점입니다. 대부분의 PDF 합치기 도구는 PDF만 지원해서, 사진을 따로 PDF로 변환해야 하는 번거로움이 있습니다.
            </p>
            <p className="mb-3">
              <Link href="/merge" className="text-[#1D9E75] font-medium underline">ZipperDoc 제출 서류 합치기</Link>는 PDF와 사진을 한 번에 합칠 수 있습니다. 사진은 자동으로 A4 크기에 맞춰 정렬되고, 원하는 순서대로 배치해 하나의 PDF로 다운로드할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 통장사본·사업자등록증 사진 처리하기</h2>
            <p className="mb-3">
              지원사업에서 자주 요구하는 통장사본, 사업자등록증, 신분증 사본은 대부분 스마트폰으로 촬영합니다. 이때 순서는 다음과 같이 하면 편합니다.
            </p>
            <ol className="list-decimal pl-6 flex flex-col gap-2">
              <li>필요한 서류를 스마트폰으로 촬영합니다.</li>
              <li>사진 용량이 크면 <Link href="/compress" className="text-[#1D9E75] font-medium underline">용량 줄이기</Link>로 먼저 압축합니다.</li>
              <li><Link href="/merge" className="text-[#1D9E75] font-medium underline">서류 합치기</Link>에서 사진과 PDF를 순서대로 올려 하나의 PDF로 만듭니다.</li>
              <li>완성된 PDF를 제출 시스템에 업로드합니다.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 지원사업 서류 용량 제한은 보통 얼마인가요?</p>
                <p>대부분 파일당 5MB 또는 10MB 이하를 요구합니다. 사업마다 다르므로 공고문의 제출 안내를 확인하는 것이 정확합니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 통장사본이 사진인데 PDF로 합칠 수 있나요?</p>
                <p>네. ZipperDoc 서류 합치기는 사진(JPG, PNG)과 PDF를 함께 올려 하나의 PDF로 합칠 수 있습니다. 사진은 자동으로 A4 크기에 맞춰집니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 파일이 서버에 저장되나요? 민감한 서류라 걱정됩니다.</p>
                <p>저장되지 않습니다. ZipperDoc의 모든 처리는 이용자의 브라우저 안에서 이루어지며, 파일은 서버로 전송되거나 저장되지 않습니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 무료인가요?</p>
                <p>네. 용량 줄이기와 서류 합치기 기능은 모두 무료이며, 설치나 회원가입 없이 사용할 수 있습니다.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">지금 바로 서류를 준비해보세요</h2>
            <p className="text-gray-600 mb-6">설치 없이 무료로, 브라우저에서 바로 사용할 수 있습니다.</p>
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
              <Link href="/guide/photo-to-pdf" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">사진을 PDF로 만드는 법 (스캐너 없이) →</p>
                <p className="text-sm text-gray-500">스마트폰 사진을 무료로 PDF로 변환하는 방법</p>
              </Link>
              <Link href="/guide/jpg-to-pdf" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">JPG를 PDF로 변환하는 법 (여러 장 한번에) →</p>
                <p className="text-sm text-gray-500">JPG·PNG를 무료로 PDF로 변환하고 합치는 방법</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
