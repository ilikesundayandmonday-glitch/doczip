import Link from "next/link";
import WaveBackground from "./components/WaveBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#1C1F1D]">
        <WaveBackground />
        <div className="relative z-10 px-6 py-28 sm:py-36">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block text-xs tracking-[0.2em] text-[#4ADE80] font-medium mb-6">
              AI 정부지원사업 어시스턴트
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold text-[#FAFBFA] mb-5 leading-tight tracking-tight">
              공고문 분석부터 서류 준비까지<br />
              <span className="text-[#4ADE80]">3분</span>이면 끝납니다
            </h1>
            <p className="text-base sm:text-lg text-[#A8B2AC] max-w-xl mx-auto mb-10 leading-relaxed">
              복잡한 정부지원사업, 공고문만 올리면 조건·서류·마감일까지 정리해드려요
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/compress" className="bg-[#4ADE80] text-[#0C1610] text-base font-semibold px-7 py-3.5 rounded-xl hover:bg-[#3bc46d] transition">
                무료로 시작하기
              </Link>
              <a href="#tools" className="bg-white/10 text-[#DDE3DF] text-base px-7 py-3.5 rounded-xl border border-white/15 hover:bg-white/15 transition backdrop-blur-sm">
                기능 둘러보기
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm py-3 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-[scroll_20s_linear_infinite] text-sm text-[#8B968F]">
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> HWP 변환</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 공고문 AI 요약</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 서류 용량 줄이기</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 제출 서류 합치기</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 마감일 관리</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 서류 체크리스트</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> HWP 변환</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 공고문 AI 요약</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 서류 용량 줄이기</span>
            <span className="mx-5"><span className="text-[#4ADE80]">●</span> 제출 서류 합치기</span>
          </div>
        </div>
      </section>
      <section id="tools" className="px-6 py-24 max-w-4xl mx-auto w-full">
        <div className="text-xs tracking-[0.2em] text-[#1D9E75] font-medium mb-2">
          WHAT YOU CAN DO
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10">
          지원사업 준비의 모든 단계
        </h2>
        <div className="flex flex-col gap-2">
          <Row num="01" title="공고문 AI 요약" desc="핵심 조건과 제출 서류를 자동 정리" status="soon" href={null} />
          <Row num="02" title="HWP 변환" desc="한글 파일을 PDF·Word로" status="wip" href={null} />
          <Row num="03" title="서류 용량 줄이기" desc="5MB 업로드 제한 맞추기" status="live" href="/compress" />
          <Row num="04" title="제출 서류 합치기" desc="PDF·사진을 하나로" status="live" href="/merge" />
        </div>
      </section>

      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs tracking-[0.2em] text-[#1D9E75] font-medium mb-2 text-center">
            HOW IT WORKS
          </div>
          <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 mb-16">
            3단계로 끝납니다
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <Step num="1" title="공고문 업로드" desc="HWP·PDF 공고문을 올리세요" />
            <Step num="2" title="AI가 분석" desc="핵심 조건과 서류를 정리해요" />
            <Step num="3" title="준비 시작" desc="체크리스트대로 진행하세요" />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 max-w-3xl mx-auto w-full">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 mb-16">
          자주 묻는 질문
        </h2>
        <div className="flex flex-col gap-4">
          <Faq q="무료로 쓸 수 있나요?" a="네. 서류 용량 줄이기 등 기본 기능은 무료입니다. AI 분석은 추후 유료로 제공될 예정이에요." />
          <Faq q="제 문서가 안전한가요?" a="파일은 브라우저에서 직접 처리되며 서버에 저장되지 않습니다. 민감한 공문서도 안심하고 쓰세요." />
          <Faq q="프로그램을 설치해야 하나요?" a="아니요. 브라우저에서 바로 사용합니다. 설치·업데이트가 필요 없어요." />
        </div>
      </section>

      <footer className="px-6 py-10 border-t border-gray-200">
        <p className="text-center text-sm text-gray-400">
          © 2026 Doczip. 한국 문서 행정을 더 쉽게.
        </p>
      </footer>
    </main>
  );
}
function Row({ num, title, desc, status, href }: { num: string; title: string; desc: string; status: string; href: string | null }) {
  const badge =
    status === "live" ? <span className="text-xs text-green-600 whitespace-nowrap">● 사용 가능</span>
    : status === "soon" ? <span className="text-xs text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full whitespace-nowrap">곧 출시</span>
    : <span className="text-xs text-gray-400 whitespace-nowrap">준비중</span>;

  const box = (
    <div className={`flex items-center gap-4 bg-white border rounded-xl px-5 py-4 ${href ? "border-gray-200 hover:border-[#1D9E75] hover:shadow-md cursor-pointer transition" : "border-gray-200"}`}>
      <span className="text-xs text-[#1D9E75] font-medium tabular-nums w-5">{num}</span>
      <div className="flex-1">
        <p className="text-base font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
      {badge}
    </div>
  );
  return href ? <Link href={href}>{box}</Link> : box;
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="text-center">
      <div className="w-14 h-14 rounded-full bg-[#1D9E75] text-white flex items-center justify-center text-xl font-semibold mx-auto mb-4">
        {num}
      </div>
      <p className="text-lg font-medium text-gray-900 mb-2">{title}</p>
      <p className="text-base text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      <p className="text-base font-medium text-gray-900 mb-2">{q}</p>
      <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
    </div>
  );
}