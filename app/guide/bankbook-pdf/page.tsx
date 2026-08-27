import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, guideArticle } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "통장사본·사업자등록증을 하나의 PDF로 합치는 법 (2026) | ZipperDoc",
  description: "지원사업 제출용 통장사본, 사업자등록증 사진을 하나의 PDF로 합치는 방법. 서류 제출 순서를 정하는 기준과, 예금주 명의가 다를 때 확인할 점까지 안내합니다.",
  alternates: { canonical: "/guide/bankbook-pdf" },
  openGraph: {
    ...openGraphBase,
    title: "통장사본·사업자등록증을 하나의 PDF로 합치는 법",
    description: "서류 제출 순서를 정하는 기준과 실수하기 쉬운 지점을 안내합니다.",
    url: "/guide/bankbook-pdf",
    type: "article",
  },
};

export default function BankbookPdfGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <JsonLd
        data={guideArticle({
          headline: "통장사본·사업자등록증을 하나의 PDF로 합치는 법 (2026)",
          description: "지원사업 제출용 통장사본, 사업자등록증 사진을 하나의 PDF로 합치는 방법. 서류 제출 순서를 정하는 기준과, 예금주 명의가 다를 때 확인할 점까지 안내합니다.",
          path: "/guide/bankbook-pdf",
        })}
      />
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          통장사본·사업자등록증을 하나의 PDF로 합치는 법
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          정부지원사업이나 창업지원 서류를 제출할 때 &ldquo;통장사본, 사업자등록증을 하나의 PDF로 합쳐서
          제출&rdquo;하라는 요구를 자주 받습니다. 문제는 이 서류들이 대부분 스마트폰으로 찍은 사진이라는
          점, 그리고 순서와 명의를 잘못 맞추면 반려된다는 점입니다. 이 글에서는 사진과 PDF를 합치는
          방법과 함께, 이 조합에서만 자주 걸리는 지점을 정리했습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">왜 하나의 PDF로 합쳐야 할까?</h2>
            <p className="mb-3">
              많은 지원사업 제출 시스템은 첨부파일을 하나만 받거나, 여러 서류를 한 파일로 정리해 제출하도록
              요구합니다. 통장사본, 사업자등록증, 신분증 사본을 따로따로 올리면 반려되거나, 애초에 파일을
              하나만 올릴 수 있는 경우도 많습니다.
            </p>
            <p>
              그래서 여러 서류를 <strong>정해진 순서대로 하나의 PDF로 합치는</strong> 작업이 필요합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">서류 순서, 아무렇게나 넣으면 안 됩니다</h2>
            <p className="mb-3">
              공고문에 제출 서류 목록이 번호로 적혀 있다면 그 순서를 그대로 따르는 것이 가장 안전합니다.
              심사자가 목록 순서대로 서류를 대조하기 때문에, 순서가 뒤섞이면 서류가 누락된 것으로 오해받을
              수 있습니다. 공고문에 명시가 없다면 아래 순서가 일반적으로 통용됩니다.
            </p>
            <ol className="list-decimal pl-6 flex flex-col gap-1">
              <li>사업계획서 등 주요 제출 문서</li>
              <li>사업자등록증 (또는 예비창업자의 경우 신분증)</li>
              <li>통장사본</li>
              <li>기타 증빙 서류 (자격증, 재직증명서 등)</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">예금주 명의, 반드시 대조하세요</h2>
            <p className="mb-3">
              통장사본을 준비할 때 가장 흔한 실수는 예금주 명의입니다. 법인 명의로 신청하면서 대표자 개인
              통장을 첨부하거나, 반대로 개인 자격으로 신청하면서 배우자나 가족 명의 통장을 올리는 경우가
              있습니다. 신청서에 적은 명의와 통장사본의 예금주가 다르면 서류가 일치하지 않는다는 이유로
              반려됩니다.
            </p>
            <p>
              통장사본을 찍기 전에 신청 화면이나 사업자등록증에 적힌 명의와 예금주 이름이 정확히 같은지
              먼저 확인하세요. 법인이라면 법인 명의 통장인지, 대표자 개인 통장인지도 공고문에서 요구하는
              쪽으로 맞춰야 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">사진과 PDF를 한 번에 합치는 방법</h2>
            <p>
              통장사본·사업자등록증은 보통 스마트폰으로 찍은 사진이고, 사업계획서는 PDF인 경우가 많습니다.
              {" "}
              <Link href="/merge" className="text-[#1D9E75] font-medium underline">
                ZipperDoc 제출 서류 합치기
              </Link>
              를 사용하면 형식을 통일할 필요 없이 사진과 PDF를 함께 올려 화살표로 순서를 맞춘 뒤 바로 하나의
              PDF로 다운로드할 수 있습니다. 사진은 A4 크기에 맞춰 자동으로 가운데 정렬됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">파일 용량이 너무 클 때</h2>
            <p className="mb-3">
              사진 화질이 높으면 합친 PDF의 용량이 제출 기준(보통 5MB 또는 10MB)을 넘을 수 있습니다.
              이럴 때는 사진을 먼저 압축한 뒤 합치면 됩니다.
            </p>
            <p>
              <Link href="/compress" className="text-[#1D9E75] font-medium underline">
                ZipperDoc 서류 용량 줄이기
              </Link>
              로 사진 용량을 줄인 다음, 서류 합치기로 하나의 PDF를 만들면 용량 제한도 맞출 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 은행 앱으로 발급받은 통장사본과 실물 통장 사진, 뭐가 더 안전한가요?</p>
                <p>
                  둘 다 통용되지만, 은행 앱이나 인터넷뱅킹에서 발급한 통장사본(계좌개설확인서)은 발급일자가
                  찍혀 있어 최근 발급본을 요구하는 공고에 더 적합합니다. 실물 통장을 찍을 경우 계좌번호와
                  예금주명이 나온 페이지가 선명하게 나왔는지 확인하세요.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 서류 순서를 잘못 넣었으면 처음부터 다시 올려야 하나요?</p>
                <p>아니요. 파일을 올린 목록에서 화살표 버튼으로 순서를 자유롭게 바꿀 수 있어, 다시 올리지 않고도 순서만 조정하면 됩니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 통장사본 같은 민감한 서류인데 안전한가요?</p>
                <p>
                  네. 모든 처리는 이용자의 브라우저 안에서 이루어지며 서버로 전송되지 않습니다. 직접 확인하는
                  방법은{" "}
                  <Link href="/guide/file-safety" className="text-[#1D9E75] underline">
                    온라인 PDF 도구에 통장사본 올려도 될까?
                  </Link>
                  에 정리해두었습니다.
                </p>
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

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">관련 가이드</h2>
            <div className="flex flex-col gap-3">
              <Link href="/guide/submission-checklist" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">정부지원사업 제출 서류 체크리스트 →</p>
                <p className="text-sm text-gray-500">접수 전에 확인해야 할 항목을 순서대로 정리</p>
              </Link>
              <Link href="/guide/photo-to-pdf" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">사진을 PDF로 만드는 법 (스캐너 없이) →</p>
                <p className="text-sm text-gray-500">스마트폰 사진을 선명하게 찍는 요령</p>
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
