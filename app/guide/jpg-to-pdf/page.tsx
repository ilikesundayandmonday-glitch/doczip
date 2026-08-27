import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, guideArticle } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "JPG를 PDF로 변환하는 법 - 무료로 여러 장 한번에 (2026) | ZipperDoc",
  description: "이미 가지고 있는 JPG·PNG 이미지 파일을 PDF로 변환하는 방법. 형식 차이, 여러 폴더에 흩어진 파일 정리법, 스크린샷 변환 시 주의점까지 안내합니다.",
  alternates: { canonical: "/guide/jpg-to-pdf" },
  openGraph: {
    ...openGraphBase,
    title: "JPG를 PDF로 변환하는 법 (여러 장 한번에)",
    description: "이미 가지고 있는 이미지 파일을 정리해 하나의 PDF로 변환하는 방법을 안내합니다.",
    url: "/guide/jpg-to-pdf",
    type: "article",
  },
};

export default function JpgToPdfGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <JsonLd
        data={guideArticle({
          headline: "JPG를 PDF로 변환하는 법 - 무료로 여러 장 한번에 (2026)",
          description: "이미 가지고 있는 JPG·PNG 이미지 파일을 PDF로 변환하는 방법. 형식 차이, 여러 폴더에 흩어진 파일 정리법, 스크린샷 변환 시 주의점까지 안내합니다.",
          path: "/guide/jpg-to-pdf",
        })}
      />
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          JPG를 PDF로 변환하는 법: 무료로 여러 장 한번에
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          스마트폰으로 방금 찍은 사진이 아니라, 갤러리나 폴더에 이미 저장돼 있던 JPG·PNG 파일을 PDF로
          바꿔야 할 때가 있습니다. 여러 폴더에 흩어진 이미지를 정리하거나, 스크린샷을 문서 형태로 만들
          때가 대표적입니다. 이 글에서는 이미 가지고 있는 이미지 파일을 정리해서 PDF로 변환하는 방법을
          정리했습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">JPG와 PDF, 무엇이 다를까?</h2>
            <p className="mb-3">
              JPG(JPEG)는 사진에 널리 쓰이는 이미지 형식이고, PDF는 문서를 위한 형식입니다. JPG는 한
              파일에 이미지 한 장만 담기지만, PDF는 여러 페이지를 하나로 묶을 수 있고 어떤 기기에서 열어도
              레이아웃이 유지됩니다.
            </p>
            <p>
              그래서 서류를 제출하거나 여러 이미지를 하나로 정리할 때는 JPG를 PDF로 변환하는 것이
              편리합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">JPG와 PNG, 어떤 걸 그대로 써도 될까?</h2>
            <p className="mb-3">
              두 형식 모두 이 도구에서 PDF로 바꿀 수 있지만 특성이 다릅니다. <strong className="text-gray-900">JPG</strong>는
              사진처럼 색이 복잡한 이미지를 압축해 저장하는 방식이라 파일이 작지만, 압축 과정에서 화질이
              약간 손실됩니다. <strong className="text-gray-900">PNG</strong>는 압축해도 화질 손실이 없어
              글자나 표처럼 선이 또렷해야 하는 이미지에 유리하지만, 그만큼 파일이 큽니다.
            </p>
            <p>
              스마트폰으로 찍은 서류 사진은 대부분 JPG로 저장되고, 화면을 캡처한 스크린샷은 대부분 PNG로
              저장됩니다. 어느 쪽이든 변환 방법은 같으니 형식을 바꿀 필요 없이 그대로 올리면 됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">스크린샷을 PDF로 만들 때 주의할 점</h2>
            <p className="mb-3">
              공고문이나 신청 화면을 캡처해서 증빙자료로 제출하는 경우가 많습니다. 이때는 화면 전체가
              잘리지 않고 캡처됐는지, 그리고 글자가 확대 없이도 읽을 수 있는 크기인지 먼저 확인하세요.
              작은 글자만 캡처하면 PDF로 만들어도 여전히 작게 나옵니다.
            </p>
            <p>
              스크린샷 여러 장을 순서대로 이어 붙여야 한다면, 파일명 앞에 01, 02처럼 두 자리 숫자를 붙여
              정리해두면 다음 단계에서 순서를 맞추기 쉽습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">여러 폴더에 흩어진 이미지 정리하기</h2>
            <p>
              카카오톡으로 받은 사진, 이메일 첨부파일, 다운로드 폴더의 캡처 이미지처럼 출처가 제각각인
              파일을 하나의 PDF로 합쳐야 할 때는, 먼저 필요한 파일만 바탕화면 같은 한 폴더에 모아두는 것이
              편합니다. 원하는 순서대로 파일명 앞에 숫자를 붙여두면{" "}
              <Link href="/merge" className="text-[#1D9E75] font-medium underline">
                ZipperDoc 제출 서류 합치기
              </Link>
              에 올릴 때 순서를 다시 맞추는 수고를 줄일 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">변환 방법과 용량이 클 때</h2>
            <p className="mb-3">
              파일 정리가 끝났다면 서류 합치기 페이지에 이미지를 올리고 순서를 확인한 뒤 다운로드하면
              됩니다. JPG·PNG를 구분 없이 함께 올릴 수 있고, 이미지 한 장당 PDF 한 페이지로 A4 크기에
              맞춰 자동 정렬됩니다.
            </p>
            <p>
              변환한 PDF 용량이 제출 기준(보통 5MB~10MB)을 넘는다면{" "}
              <Link href="/compress" className="text-[#1D9E75] font-medium underline">
                ZipperDoc 서류 용량 줄이기
              </Link>
              로 이미지를 먼저 압축한 뒤 변환하는 순서가 효율적입니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. JPG와 PNG를 섞어서 한 PDF로 만들 수 있나요?</p>
                <p>네. 형식이 달라도 함께 올려 순서대로 하나의 PDF로 합칠 수 있습니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 파일 이름 순서대로 자동 정렬되나요?</p>
                <p>
                  자동 정렬은 되지 않고, 올린 순서대로 배치된 뒤 화살표 버튼으로 순서를 조정하는 방식입니다.
                  파일명 앞에 번호를 붙여 폴더에서 미리 정렬해두면 올릴 때도 그 순서대로 선택하기 쉽습니다.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 이미지가 서버에 저장되나요?</p>
                <p>
                  저장되지 않습니다. 모든 변환은 이용자의 브라우저 안에서 이루어집니다. 구조가 궁금하시면{" "}
                  <Link href="/guide/file-safety" className="text-[#1D9E75] underline">
                    온라인 PDF 도구에 통장사본 올려도 될까?
                  </Link>
                  를 참고하세요.
                </p>
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
                <p className="text-sm text-gray-500">스마트폰으로 방금 찍은 사진을 PDF로 변환하는 방법</p>
              </Link>
              <Link href="/guide/bankbook-pdf" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">통장사본·사업자등록증을 하나의 PDF로 합치는 법 →</p>
                <p className="text-sm text-gray-500">지원사업 제출용으로 서류 순서까지 맞추는 방법</p>
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
