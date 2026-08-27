import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, guideArticle } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "사진을 PDF로 만드는 법 - 스캐너 없이 무료로 (2026) | ZipperDoc",
  description: "스캐너 없이 스마트폰 사진을 PDF로 만드는 방법. 선명하게 촬영하는 요령부터 여러 장을 A4 크기로 정렬해 하나의 PDF로 합치는 방법까지 안내합니다.",
  alternates: { canonical: "/guide/photo-to-pdf" },
  openGraph: {
    ...openGraphBase,
    title: "사진을 PDF로 만드는 법 (스캐너 없이)",
    description: "선명하게 촬영하는 요령과, 여러 장을 A4 크기로 정렬해 PDF로 합치는 방법.",
    url: "/guide/photo-to-pdf",
    type: "article",
  },
};

export default function PhotoToPdfGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <JsonLd
        data={guideArticle({
          headline: "사진을 PDF로 만드는 법 - 스캐너 없이 무료로 (2026)",
          description: "스캐너 없이 스마트폰 사진을 PDF로 만드는 방법. 선명하게 촬영하는 요령부터 여러 장을 A4 크기로 정렬해 하나의 PDF로 합치는 방법까지 안내합니다.",
          path: "/guide/photo-to-pdf",
        })}
      />
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          사진을 PDF로 만드는 법: 스캐너 없이 무료로
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          서류를 제출할 때 &ldquo;PDF 파일로 제출&rdquo;하라는 요구를 자주 받습니다. 하지만 집에 스캐너가
          없다면 어떻게 해야 할까요? 스마트폰으로 찍은 사진만 있어도 PDF를 만들 수 있습니다. 다만 스캐너와
          달리 촬영 상태에 따라 결과물의 품질이 크게 갈리기 때문에, 이 글에서는 잘 찍는 요령부터 PDF로
          만드는 방법까지 정리했습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">사진을 PDF로 바꿔야 하는 이유</h2>
            <p className="mb-3">
              관공서, 학교, 회사, 지원사업 제출처는 대부분 문서를 PDF로 받습니다. PDF는 어떤 기기에서 열어도
              레이아웃이 유지되고, 여러 장을 하나로 묶을 수 있기 때문입니다.
            </p>
            <p>
              하지만 통장사본, 신분증, 계약서 같은 서류를 스마트폰으로 찍으면 JPG·PNG 사진으로 저장됩니다.
              이 사진들을 PDF로 바꾸면 제출 요건을 쉽게 맞출 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">스캐너가 꼭 필요할까?</h2>
            <p>
              아닙니다. 예전에는 서류를 PDF로 만들려면 스캐너가 필요했지만, 지금은 스마트폰 카메라로 찍은
              사진을 그대로 PDF로 변환할 수 있습니다. 다만 스캐너는 자동으로 각도를 바로잡고 조명을
              균일하게 맞춰주는 반면, 카메라 촬영은 이 과정을 사람이 직접 신경 써야 합니다. 아래 요령을
              따르면 스캔한 것과 큰 차이 없는 결과를 얻을 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">선명하게 촬영하는 5가지 요령</h2>
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li>
                <strong className="text-gray-900">그림자부터 없애기.</strong> 창가나 조명 아래에서 몸이나
                스마트폰의 그림자가 서류에 지지 않는 각도를 먼저 잡으세요. 그림자 진 부분의 글자는 압축이나
                보정으로도 살리기 어렵습니다.
              </li>
              <li>
                <strong className="text-gray-900">서류와 수평으로 맞추기.</strong> 비스듬히 찍으면 글자가
                한쪽으로 갈수록 흐려지고 원근 때문에 직사각형이 아니라 사다리꼴로 찍힙니다. 서류 바로
                위에서 수직으로 내려다보고 찍으세요.
              </li>
              <li>
                <strong className="text-gray-900">서류가 프레임을 꽉 채우게.</strong> 책상이나 바닥이 많이
                보이도록 멀리서 찍으면 정작 서류 안의 글자가 작게 나옵니다. 서류 네 귀퉁이가 화면 안에
                다 들어오는 선에서 최대한 가까이 찍으세요.
              </li>
              <li>
                <strong className="text-gray-900">초점을 확인하고 찍기.</strong> 촬영 전에 화면에서 서류의
                글자 부분을 한 번 터치해 초점을 맞춘 뒤 찍으면 흔들림으로 인한 흐림을 줄일 수 있습니다.
              </li>
              <li>
                <strong className="text-gray-900">찍자마자 확대해서 확인하기.</strong> 촬영 직후 사진을
                두 손가락으로 확대해 계좌번호나 이름 같은 작은 글자가 또렷한지 바로 확인하세요. 흐리다면
                그 자리에서 다시 찍는 편이 나중에 다시 준비하는 것보다 훨씬 빠릅니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">촬영한 사진을 PDF로 만드는 법</h2>
            <p>
              사진 준비가 끝났다면{" "}
              <Link href="/merge" className="text-[#1D9E75] font-medium underline">
                ZipperDoc 제출 서류 합치기
              </Link>
              에 올리기만 하면 됩니다. 여러 장을 한 번에 올리고 화살표로 순서를 정리한 뒤 다운로드를
              누르면, 사진 한 장당 한 페이지씩 A4 크기로 자동 정렬된 PDF가 만들어집니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">PDF 용량이 너무 클 때</h2>
            <p className="mb-3">
              고화질 사진으로 PDF를 만들면 파일 용량이 커질 수 있습니다. 제출처의 용량 제한(보통
              5MB~10MB)을 넘는다면, 사진을 먼저 압축하면 됩니다.
            </p>
            <p>
              <Link href="/compress" className="text-[#1D9E75] font-medium underline">
                ZipperDoc 서류 용량 줄이기
              </Link>
              로 사진 용량을 줄인 뒤 PDF로 만들면, 화질은 유지하면서 용량 제한을 맞출 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">찍은 사진이 흐릿하거나 비뚤게 나왔다면</h2>
            <p className="mb-3">
              가장 빠른 해결책은 다시 찍는 것입니다. 위 요령대로 그림자를 없애고 수평을 맞춰 다시
              촬영하면, 편집으로 고치는 것보다 훨씬 결과가 좋고 시간도 덜 듭니다.
            </p>
            <p>
              다만 사진이 옆으로 눕거나 거꾸로 찍혔다면, 이 도구는 아직 자동으로 방향을 바로잡아주지
              않습니다. 스마트폰 갤러리 앱에서 사진을 올바른 방향으로 회전한 뒤 올려주세요.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 스캐너 없이 사진만으로 PDF를 만들어도 제출이 되나요?</p>
                <p>네. 대부분의 제출처는 사진으로 만든 PDF도 받습니다. 위 촬영 요령대로 글자가 선명하게 보이는지만 확인하면 됩니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 여러 장을 찍었는데 순서가 뒤바뀌면 어떻게 하나요?</p>
                <p>서류 합치기 페이지에서 파일을 올린 뒤 화살표 버튼으로 순서를 자유롭게 바꿀 수 있습니다. 다시 찍을 필요 없이 순서만 조정하면 됩니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 통장사본처럼 민감한 사진인데 안전한가요?</p>
                <p>
                  네. 촬영한 사진은 이용자의 브라우저 안에서만 PDF로 합쳐지며 서버로 전송되지 않습니다. 확인하는
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
              <Link href="/guide/jpg-to-pdf" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">JPG를 PDF로 변환하는 법 →</p>
                <p className="text-sm text-gray-500">이미 갖고 있는 이미지 파일을 정리해 변환하는 방법</p>
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
