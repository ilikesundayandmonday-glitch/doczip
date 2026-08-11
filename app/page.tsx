"use client";

import Link from "next/link";
import Image from "next/image";
import { track } from "@vercel/analytics";
import WaveBackground from "./components/WaveBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#1C1F1D]">
        <WaveBackground />
        <div className="relative z-10 px-8 sm:px-16 py-20 sm:py-28">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-6">

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold text-[#FAFBFA] mb-6 leading-tight tracking-tight">
                  PDF 합치기, 용량 줄이기<br />
                  <span className="text-[#4ADE80]">파일 업로드 없이</span>
                </h1>

                <p className="text-base sm:text-lg text-[#DDE3DF] max-w-lg mx-auto md:mx-0 mb-6 leading-relaxed">
                  파일이 서버로 전송되지 않습니다. 모든 처리가 브라우저 안에서 이루어져, 통장사본·신분증 같은 민감한 서류도 안심하고 쓸 수 있어요. 설치도 회원가입도 없습니다.
                </p>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                  <Link
                    href="/compress"
                    onClick={() => track("히어로_압축_클릭")}
                    className="bg-[#4ADE80] text-[#0C1610] text-base font-bold px-7 py-4 rounded-2xl hover:bg-[#3bc46d] transition shadow-lg shadow-[#4ADE80]/20"
                  >
                    서류 용량 줄이기
                  </Link>
                  <Link
                    href="/merge"
                    onClick={() => track("히어로_합치기_클릭")}
                    className="bg-white/10 text-[#FAFBFA] text-base font-bold px-7 py-4 rounded-2xl hover:bg-white/20 transition border border-white/20"
                  >
                    PDF 합치기
                  </Link>
                </div>

                <div className="text-sm text-[#8B968F] font-medium">
                  정부지원사업 · 대출 · 각종 제출 서류를 준비하는 분들이 씁니다
                </div>
              </div>

              <div className="flex flex-col items-center shrink-0">
                <Image src="/DOCZIPlogo.png" alt="ZipperDoc 로고" width={240} height={240} className="drop-shadow-[0_0_50px_rgba(74,222,128,0.4)]" priority />
                <span className="mt-3 text-2xl font-bold text-[#FAFBFA] tracking-tight">
                  Zipper<span className="text-[#4ADE80]">Doc</span>
                </span>
              </div>

            </div>
          </div>
        </div>
        <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm py-3 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-[scroll_20s_linear_infinite] text-sm text-[#8B968F]">
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> PDF 합치기</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> PDF 용량 줄이기</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 사진 PDF 변환</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 통장사본·사업자등록증 정리</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> PDF 합치기</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> PDF 용량 줄이기</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 사진 PDF 변환</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 통장사본·사업자등록증 정리</span>
          </div>
        </div>
      </section>

      <section id="tools" className="px-6 py-24 max-w-4xl mx-auto w-full">
        <div className="text-xs tracking-[0.2em] text-[#1D9E75] font-medium mb-2">지금 쓸 수 있는 도구</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">어떤 작업을 도와드릴까요?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Tool href="/compress" title="PDF·사진 용량 줄이기" desc="5MB 업로드 제한에 걸릴 때. 화질을 조절해가며 규격에 맞춰요." event="도구클릭_압축" />
          <Tool href="/merge" title="PDF 합치기" desc="PDF와 사진(통장사본·사업자등록증)을 원하는 순서대로 하나의 PDF로." event="도구클릭_합치기" />
        </div>

        <div className="mt-16">
          <Link href="/guide" className="block bg-[#1C1F1D] rounded-2xl p-7 hover:bg-[#252927] transition">
            <div className="text-xs tracking-[0.2em] text-[#4ADE80] font-medium mb-2">가이드</div>
            <p className="text-lg font-bold text-[#FAFBFA] mb-2">정부지원사업 서류 제출 가이드 →</p>
            <p className="text-sm text-[#A8B2AC] leading-relaxed">용량 줄이기부터 PDF 합치기까지, 서류 준비 방법을 정리했어요.</p>
          </Link>
        </div>
      </section>
      <section className="px-6 py-24 bg-[#1C1F1D]">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs tracking-[0.2em] text-[#4ADE80] font-medium mb-2">왜 안전한가</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#FAFBFA] mb-4">파일이 서버로 오지 않습니다</h2>
          <p className="text-[#A8B2AC] leading-relaxed mb-10 max-w-2xl">
            대부분의 온라인 변환 사이트는 파일을 회사 서버로 보낸 뒤 처리하고, 일정 시간이 지나면 삭제한다고
            안내합니다. ZipperDoc은 애초에 파일을 받지 않습니다. 모든 처리가 이용자의 브라우저 안에서
            끝나기 때문에, 삭제를 약속할 파일 자체가 생기지 않습니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="border border-white/15 rounded-2xl p-6">
              <p className="text-sm text-[#8B968F] mb-3">일반적인 변환 사이트</p>
              <ul className="flex flex-col gap-2 text-[#DDE3DF] text-sm">
                <li>파일을 서버로 전송</li>
                <li>서버에서 처리 후 보관</li>
                <li>일정 시간 후 삭제 (약속)</li>
              </ul>
            </div>
            <div className="border-2 border-[#4ADE80] rounded-2xl p-6">
              <p className="text-sm text-[#4ADE80] mb-3">ZipperDoc</p>
              <ul className="flex flex-col gap-2 text-[#FAFBFA] text-sm">
                <li>전송 없음</li>
                <li>브라우저 안에서 처리</li>
                <li>보관할 파일이 없음</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-[#FAFBFA] font-bold mb-2">직접 확인해보세요</p>
            <p className="text-[#A8B2AC] text-sm leading-relaxed">
              이 페이지를 연 뒤 와이파이를 끄고 파일을 올려 변환해보세요. 그대로 동작합니다. 서버로 보내는
              구조였다면 오류가 나거나 멈춥니다.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs tracking-[0.2em] text-[#1D9E75] font-medium mb-2 text-center">HOW IT WORKS</div>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-16">3단계로 끝납니다</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <Step num="1" title="파일 선택" desc="PDF나 사진을 끌어다 놓으세요" />
            <Step num="2" title="정리하기" desc="용량을 줄이거나 순서대로 합쳐요" />
            <Step num="3" title="다운로드" desc="바로 제출할 수 있는 파일 완성" />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 max-w-3xl mx-auto w-full">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-16">자주 묻는 질문</h2>
        <div className="flex flex-col gap-4">
          <Faq q="무료로 쓸 수 있나요?" a="네. 현재 제공되는 도구는 모두 무료이고, 회원가입도 필요 없습니다." />
          <Faq q="통장사본이나 신분증을 올려도 안전한가요?" a="파일이 서버로 전송되지 않습니다. 모든 처리가 브라우저 안에서 이루어지므로 저장될 파일 자체가 생기지 않습니다. 와이파이를 끄고 변환해보시면 확인하실 수 있습니다." />
          <Faq q="PDF와 사진을 같이 합칠 수 있나요?" a="네. JPG·PNG 사진과 PDF를 함께 올려 하나의 PDF로 합칠 수 있습니다. 사진은 A4 크기에 맞춰 자동 정렬됩니다." />
          <Faq q="용량은 얼마나 줄어드나요?" a="화질을 조절해가며 원하는 용량에 맞출 수 있습니다. 5MB·10MB 같은 제출 기준에 맞추는 용도로 쓰기 좋습니다." />
          <Faq q="프로그램을 설치해야 하나요?" a="아니요. 브라우저에서 바로 사용합니다. 설치·업데이트가 필요 없어요." />
          <Faq q="수집하는 정보가 전혀 없나요?" a="파일 내용은 수집하지 않습니다. 다만 방문자 수와 버튼 클릭 같은 이용 통계는 수집합니다. 어떤 기능이 실제로 쓰이는지 확인하기 위한 것이며 파일이나 파일명과는 무관합니다." />
        </div>
      </section>

      <footer className="px-6 py-10 border-t border-gray-200">
        <div className="flex flex-col items-center gap-3">
          <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-800 transition">개인정보처리방침</Link>
          <p className="text-center text-sm text-gray-400">© 2026 ZipperDoc. 한국 문서 행정을 더 쉽게.</p>
        </div>
      </footer>
    </main>
  );
}

function Tool({ href, title, desc, event }: { href: string; title: string; desc: string; event: string }) {
  return (
    <Link href={href} onClick={() => track(event)} className="block bg-white border border-gray-200 rounded-2xl p-7 hover:border-[#1D9E75] hover:shadow-md transition">
      <div className="flex items-center justify-between mb-3">
        <p className="text-lg font-bold text-gray-900">{title}</p>
        <span className="text-xs text-green-600 whitespace-nowrap">● 사용 가능</span>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </Link>
  );
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="text-center">
      <div className="w-14 h-14 rounded-full bg-[#1D9E75] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">{num}</div>
      <p className="text-lg font-bold text-gray-900 mb-2">{title}</p>
      <p className="text-base text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      <p className="text-base font-bold text-gray-900 mb-2">{q}</p>
      <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
    </div>
  );
}
