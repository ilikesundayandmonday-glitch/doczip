import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "사업계획서 파일 용량 줄이는 법 - 제출 용량 제한 맞추기 (2026) | ZipperDoc",
  description: "지원사업 사업계획서 제출 시 파일 용량 제한(5MB·10MB)을 초과했을 때, 화질을 유지하며 용량을 줄이는 방법. 이미지가 많은 사업계획서의 용량을 무료로 줄이는 방법을 안내합니다.",
  alternates: { canonical: "/guide/business-plan-compress" },
  openGraph: {
    ...openGraphBase,
    title: "사업계획서 파일 용량 줄이는 법",
    description: "제출 용량 제한을 맞추기 위해 화질을 유지하며 용량을 줄이는 방법을 안내합니다.",
    url: "/guide/business-plan-compress",
    type: "article",
  },
};

export default function BusinessPlanCompressGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          사업계획서 파일 용량 줄이는 법: 제출 용량 제한 맞추기
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          지원사업에 사업계획서를 제출할 때 &ldquo;파일 용량이 제한을 초과했습니다&rdquo;라는 메시지를 만난 적 있으신가요? 사업계획서에 이미지나 표가 많으면 용량이 금방 커집니다. 이 글에서는 사업계획서 용량을 줄여 제출 기준을 맞추는 방법을 정리했습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">사업계획서 용량이 커지는 이유</h2>
            <p className="mb-3">
              사업계획서는 텍스트만 있으면 용량이 작지만, 다음 요소들이 들어가면 용량이 빠르게 늘어납니다.
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>제품·서비스 사진, 시장 조사 이미지, 팀 사진 등 고화질 이미지</li>
              <li>스마트폰으로 촬영해 삽입한 사진 (한 장에 수 MB)</li>
              <li>캡처한 화면, 그래프, 인포그래픽</li>
              <li>스캔한 서류를 이미지로 붙여넣은 경우</li>
            </ul>
            <p className="mt-3">
              특히 스마트폰 사진을 그대로 넣으면, 사진 몇 장만으로도 파일이 10MB를 넘기기 쉽습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">제출 용량 제한은 보통 얼마일까?</h2>
            <p className="mb-3">
              지원사업마다 다르지만, 대부분 파일당 <strong>5MB에서 10MB</strong> 사이의 제한을 둡니다. 일부는 20MB까지 허용하기도 하지만, 안전하게는 5MB 이하로 맞추는 것이 좋습니다.
            </p>
            <p>
              정확한 기준은 공고문의 제출 안내나 온라인 제출 시스템의 안내 문구를 확인하세요.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">용량을 줄이는 가장 쉬운 방법</h2>
            <p className="mb-3">
              사업계획서 용량의 대부분은 <strong>이미지</strong>가 차지합니다. 따라서 문서에 넣기 전에 이미지 용량을 먼저 줄이는 것이 가장 효과적입니다.
            </p>
            <ol className="list-decimal pl-6 flex flex-col gap-2">
              <li>사업계획서에 넣을 이미지들을 준비합니다.</li>
              <li><Link href="/compress" className="text-[#1D9E75] font-medium underline">ZipperDoc 서류 용량 줄이기</Link>에서 이미지를 올려 용량을 줄입니다.</li>
              <li>압축 강도를 조절해 화질과 용량의 균형을 맞춥니다.</li>
              <li>줄인 이미지를 사업계획서에 넣으면 전체 파일 용량이 크게 줄어듭니다.</li>
            </ol>
            <p className="mt-3">
              이미지는 브라우저 안에서 압축되며 외부로 전송되지 않아, 아직 공개하지 않은 사업 아이디어가 담긴 자료도 안전합니다.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">이미 완성된 사업계획서 용량 줄이기</h2>
            <p className="mb-3">
              이미 이미지를 넣어 완성한 사업계획서라면, 문서 안의 이미지를 압축한 버전으로 교체하는 방법이 있습니다. 이미지를 압축해 다시 삽입하면 됩니다.
            </p>
            <p>
              또한 사업계획서와 함께 제출하는 통장사본, 사업자등록증 같은 첨부 서류가 사진이라면, 이 역시 용량을 줄이고 하나의 PDF로 정리하면 제출이 깔끔해집니다. 여러 서류를 하나로 합치는 방법은 <Link href="/guide/bankbook-pdf" className="text-[#1D9E75] font-medium underline">이 가이드</Link>를 참고하세요.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 이미지를 압축하면 화질이 많이 떨어지나요?</p>
                <p>압축 강도를 조절할 수 있어, 화질을 크게 해치지 않는 선에서 용량만 줄일 수 있습니다. 문서 삽입용이라면 적당한 압축으로도 충분히 선명합니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 사업계획서 제출 용량 제한은 보통 얼마인가요?</p>
                <p>대부분 5MB~10MB입니다. 공고문의 제출 안내를 확인하는 것이 가장 정확합니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 아직 공개 안 한 사업 아이디어인데 안전한가요?</p>
                <p>네. 모든 처리는 이용자의 브라우저 안에서 이루어지며, 파일이 서버로 전송되거나 저장되지 않습니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 무료인가요?</p>
                <p>네. 설치나 회원가입 없이 무료로 사용할 수 있습니다.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">사업계획서 용량, 지금 줄여보세요</h2>
            <p className="text-gray-600 mb-6">설치 없이 무료로, 브라우저에서 바로 사용하세요.</p>
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
