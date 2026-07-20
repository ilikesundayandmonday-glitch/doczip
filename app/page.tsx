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
                <h1 className="text-5xl sm:text-6xl font-bold text-[#FAFBFA] mb-8 leading-tight tracking-tight">
                  지원사업 서류 준비를<br />
                  위한 <span className="text-[#4ADE80]">무료 도구</span>
                </h1>

                <div className="flex items-center justify-center md:justify-start gap-4 text-sm font-bold text-[#DDE3DF] mb-6 flex-wrap">
                  <span>용량 줄이기</span>
                  <span className="text-[#4ADE80]/40">|</span>
                  <span>서류 합치기</span>
                  <span className="text-[#4ADE80]/40">|</span>
                  <span>설치 없이 바로</span>
                </div>

                <p className="text-base sm:text-lg text-[#A8B2AC] max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
                  통장사본·사업자등록증 같은 사진도 PDF로. 브라우저에서 바로 처리하고, 파일은 서버에 저장되지 않아요.
                </p>
                <div className="flex justify-center md:justify-start mb-8">
                  <a href="#tools" onClick={() => track("무료로_시작하기_클릭")} className="bg-[#4ADE80] text-[#0C1610] text-lg font-bold px-10 py-5 rounded-2xl hover:bg-[#3bc46d] transition shadow-lg shadow-[#4ADE80]/20">
                    무료로 시작하기 →
                  </a>
                </div>

                <div className="text-xs tracking-[0.25em] text-[#8B968F] font-bold">
                  DOC + ZIP. 서류를 하나로.
                </div>
              </div>

              <div className="flex flex-col items-center shrink-0">
                <Image src="/DOCZIPlogo.png" alt="DocZip 로고" width={320} height={320} className="drop-shadow-[0_0_50px_rgba(74,222,128,0.4)]" priority />
                <span className="mt-4 text-3xl font-bold text-[#FAFBFA] tracking-tight">
                  Doc<span className="text-[#4ADE80]">Zip</span>
                </span>
              </div>

            </div>
          </div>
        </div>
        <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm py-3 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-[scroll_20s_linear_infinite] text-sm text-[#8B968F]">
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 서류 용량 줄이기</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 제출 서류 합치기</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 통장사본·사업자등록증 정리</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 서류 용량 줄이기</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 제출 서류 합치기</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 통장사본·사업자등록증 정리</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 서류 용량 줄이기</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 제출 서류 합치기</span>
          </div>
        </div>
      </section>

      <section id="tools" className="px-6 py-24 max-w-4xl mx-auto w-full">
        <div className="text-xs tracking-[0.2em] text-[#1D9E75] font-medium mb-2">
          지금 쓸 수 있는 도구
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
          어떤 작업을 도와드릴까요?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Tool href="/compress" title="서류 용량 줄이기" desc="5MB 업로드 제한에 걸릴 때. 이미지 용량을 줄여 규격에 맞춰요." event="도구클릭_압축" />
          <Tool href="/merge" title="제출 서류 합치기" desc="PDF와 사진(통장사본·사업자등록증)을 원하는 순서대로 하나의 PDF로." event="도구클릭_합치기" />
        </div>

        <div className="text-xs tracking-[0.2em] text-gray-400 font-medium mb-4 mt-16">
          곧 추가될 기능
        </div>
        <div className="flex flex-col gap-2">
          <SoonRow title="공고문 AI 요약" desc="공고문을 올리면 조건·제출 서류·마감일을 자동 정리" />
          <SoonRow title="HWP 변환" desc="한글(HWP) 파일을 PDF로 변환" />
        </div>
      </section>

      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs tracking-[0.2em] text-[#1D9E75] font-medium mb-2 text-center">
            HOW IT WORKS
          </div>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-16">
            3단계로 끝납니다
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <Step num="1" title="파일 올리기" desc="PDF나 사진을 끌어다 놓으세요" />
            <Step num="2" title="정리하기" desc="용량을 줄이거나 순서대로 합쳐요" />
            <Step num="3" title="다운로드" desc="바로 제출할 수 있는 파일 완성" />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 max-w-3xl mx-auto w-full">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-16">
          자주 묻는 질문
        </h2>
        <div className="flex flex-col gap-4">
          <Faq q="무료로 쓸 수 있나요?" a="네. 현재 제공되는 도구는 모두 무료입니다." />
          <Faq q="제 문서가 안전한가요?" a="파일은 브라우저에서 직접 처리되며 서버에 저장되지 않습니다. 민감한 공문서도 안심하고 쓰세요." />
          <Faq q="프로그램을 설치해야 하나요?" a="아니요. 브라우저에서 바로 사용합니다. 설치·업데이트가 필요 없어요." />
        </div>
      </section>

      <footer className="px-6 py-10 border-t border-gray-200">
        <p className="text-center text-sm text-gray-400">
          © 2026 DocZip. 한국 문서 행정을 더 쉽게.
        </p>
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

function SoonRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-4">
      <div className="flex-1">
        <p className="text-base font-bold text-gray-700">{title}</p>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
      <span className="text-xs text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full whitespace-nowrap">곧 출시</span>
    </div>
  );
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="text-center">
      <div className="w-14 h-14 rounded-full bg-[#1D9E75] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {num}
      </div>
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