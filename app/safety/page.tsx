import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, faqPage } from "@/app/structured-data";

const SAFETY_FAQ = [
  { q: "변환한 파일이 컴퓨터에 남나요?", a: "변환하는 동안에는 브라우저 메모리에만 있고, 페이지를 닫으면 사라집니다. 다운로드한 결과 파일은 당연히 저장되니, 제출을 마쳤다면 필요 없는 파일은 정리하시면 됩니다." },
  { q: "스마트폰에서도 똑같나요?", a: "같습니다. PC든 모바일이든 브라우저 안에서 처리되는 방식은 동일합니다. 다만 아주 큰 파일은 기기 성능에 따라 느려질 수 있습니다." },
  { q: "회원가입은 왜 없나요?", a: "받을 이유가 없어서입니다. 파일을 저장하지 않으니 이용자를 구분할 필요가 없고, 구분할 필요가 없으니 개인정보를 받을 이유도 없습니다." },
  { q: "무료인데 어떻게 운영되나요?", a: "파일이 서버를 거치지 않으니 운영비가 거의 들지 않습니다. 페이지를 내려주는 비용만 들기 때문에 무료로 열어둘 수 있습니다." },
];

export const metadata: Metadata = {
  title: "ZipperDoc이 안전한 이유 - 파일이 서버로 가지 않는 원리 | ZipperDoc",
  description: "통장사본·신분증을 올려도 안전한 이유를 원리부터 설명합니다. 파일이 서버로 전송되지 않고 브라우저 안에서 처리되는 구조와, 그것을 이용자가 직접 확인하는 방법까지 정리했습니다.",
  keywords: ["PDF 사이트 안전", "통장사본 안전", "파일 업로드 없이", "개인정보 유출", "브라우저 처리"],
  alternates: { canonical: "/safety" },
  openGraph: {
    ...openGraphBase,
    title: "ZipperDoc이 안전한 이유",
    description: "파일이 서버로 가지 않는 원리와, 그것을 직접 확인하는 방법.",
    url: "/safety",
    type: "article",
  },
};

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={faqPage(SAFETY_FAQ)} />
      <section className="bg-[#1C1F1D] px-6 py-20 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs tracking-[0.2em] text-[#4ADE80] font-medium mb-4">왜 안전한가</div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#FAFBFA] leading-tight tracking-tight mb-6">
            ZipperDoc이 안전하냐고요?<br />
            <span className="text-[#4ADE80]">바로 이런 이유 때문입니다.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#DDE3DF] leading-relaxed">
            통장사본에는 계좌번호가, 신분증에는 주민등록번호가 그대로 찍혀 있습니다. 이걸 처음 보는
            사이트에 올리는 게 불안한 건 당연합니다. 그래서 &ldquo;안전합니다&rdquo;라고 말하는 대신,
            어떤 구조로 만들어졌는지 그대로 설명하겠습니다. 읽고 나서 직접 확인해보실 수 있습니다.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-12 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              웹사이트에 있는 계산기를 떠올려보세요
            </h2>
            <p className="mb-4">
              인터넷에서 계산기를 쓴다고 해봅시다. <strong className="text-gray-900">3 + 5</strong>를
              누르면 8이 나옵니다. 이 숫자가 어딘가 멀리 전송돼서 계산된 다음 돌아온 걸까요? 아니죠.
              그냥 내 화면 안에서 계산된 겁니다.
            </p>
            <p>
              ZipperDoc도 똑같습니다. PDF를 합치는 것도 결국 계산이에요. 그 계산이 내 컴퓨터 안에서
              일어납니다. 파일을 어디로 보낼 필요가 없습니다.
            </p>
          </section>

          <section className="border-l-4 border-[#1D9E75] pl-6 py-1">
            <p className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-3">
              웹사이트는 프로그램을 내려주고,<br />실행은 내 컴퓨터가 합니다.
            </p>
            <p className="text-gray-600">
              파일은 &ldquo;실행되는 곳&rdquo;에만 있으면 됩니다. 실행이 내 컴퓨터에서 일어나니까,
              파일도 내 컴퓨터 밖으로 나가지 않는 겁니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              대부분의 변환 사이트는 왜 다를까요
            </h2>
            <p className="mb-6">
              옛날에는 브라우저가 이런 작업을 할 만큼 강력하지 않아서, 무조건 파일을 서버로 보내야
              했습니다. 지금은 브라우저가 충분히 좋아졌는데도 많은 사이트가 예전 방식을 그대로 쓰고
              있을 뿐입니다. 나쁜 의도가 있어서가 아니라, 바꿀 이유가 없어서요.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="text-sm text-gray-400 mb-4">일반적인 변환 사이트</p>
                <ol className="flex flex-col gap-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-gray-300 font-bold shrink-0">1</span>
                    <span>내 파일을 회사 서버로 전송</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-300 font-bold shrink-0">2</span>
                    <span>서버에서 변환하고 잠시 보관</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-300 font-bold shrink-0">3</span>
                    <span>결과를 내려받고, 원본은 나중에 삭제</span>
                  </li>
                </ol>
                <p className="text-sm text-gray-500 mt-5 pt-5 border-t border-gray-100">
                  삭제를 약속하지만, 이용자가 확인할 방법은 없습니다.
                </p>
              </div>

              <div className="border-2 border-[#1D9E75] rounded-2xl p-6">
                <p className="text-sm text-[#1D9E75] font-medium mb-4">ZipperDoc</p>
                <ol className="flex flex-col gap-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-[#1D9E75] font-bold shrink-0">1</span>
                    <span>접속하면 프로그램이 내 컴퓨터로 내려옴</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#1D9E75] font-bold shrink-0">2</span>
                    <span>변환은 내 브라우저 안에서 실행</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#1D9E75] font-bold shrink-0">3</span>
                    <span>파일은 처음부터 끝까지 내 컴퓨터에</span>
                  </li>
                </ol>
                <p className="text-sm text-gray-500 mt-5 pt-5 border-t border-gray-100">
                  삭제를 약속할 파일 자체가 생기지 않습니다.
                </p>
              </div>
            </div>

            <p className="mt-6">
              약속을 믿는 것과, 구조적으로 불가능한 것은 다릅니다. ZipperDoc은 마음먹어도 파일을 볼 수
              없습니다. 애초에 받지 않으니까요.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              말로만 하면 믿기 어렵죠. 직접 확인해보세요
            </h2>
            <p className="mb-6">
              전문 지식 없이, 1분이면 됩니다. 순서만 지키시면 돼요.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex gap-5 items-start border border-gray-200 rounded-2xl p-6">
                <div className="w-9 h-9 rounded-full bg-[#1D9E75] text-white flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">먼저 페이지를 엽니다 — 인터넷 필요</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    도구 페이지에 접속합니다. 이때 프로그램이 내 컴퓨터로 내려옵니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start border border-gray-200 rounded-2xl p-6">
                <div className="w-9 h-9 rounded-full bg-[#1D9E75] text-white flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">와이파이를 끕니다 — 인터넷 불필요</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    화면은 그대로 살아 있습니다. 이미 내 컴퓨터에 있으니까요.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start border border-gray-200 rounded-2xl p-6">
                <div className="w-9 h-9 rounded-full bg-[#1D9E75] text-white flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">그 상태로 파일을 올려 변환해봅니다</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    잘 됩니다. 인터넷이 끊겼는데도요.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 mb-4">
              <strong className="text-gray-900">이게 왜 증거가 되나요?</strong> 파일을 서버로 보내는
              구조였다면, 와이파이가 꺼진 순간 보낼 길이 없으니 오류가 나거나 멈춰야 정상입니다.
              그런데 멀쩡히 동작하죠. 보내는 과정이 아예 없다는 뜻입니다.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>한 가지 주의.</strong> 와이파이를 끈 뒤에 새로고침(F5)은 누르지 마세요.
                새로고침은 페이지를 처음부터 다시 받아오는 것이라, 인터넷이 없으면 오류 화면이 뜹니다.
                그건 정상입니다. TV 채널을 튼 뒤 리모컨을 내려놔도 방송은 계속 나오지만, 채널을 바꾸려면
                리모컨이 필요한 것과 같습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              그럼 서버는 아무것도 안 하나요?
            </h2>
            <p className="mb-4">
              서버가 없는 건 아닙니다. 다만 하는 일이 하나뿐이에요.
              <strong className="text-gray-900"> 주소를 치고 들어오면 웹페이지를 내려주는 것</strong>,
              거기까지입니다. 식당이 요리를 해서 배달하는 게 아니라, 조리도구와 레시피를 집으로 보내주는
              쪽에 가깝습니다. 요리는 내 부엌에서 내가 합니다.
            </p>
            <p>
              그래서 서류를 다루는 동안 서버는 관여하지 않습니다. 무엇이 올라왔는지, 몇 장짜리인지,
              파일 이름이 무엇인지 알 방법이 없습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              그래도 수집하는 게 하나 있습니다
            </h2>
            <p className="mb-5">
              정직하게 밝히는 편이 낫다고 생각합니다. 방문자 수와 버튼 클릭 같은
              <strong className="text-gray-900"> 이용 통계는 수집합니다.</strong> 어떤 기능이 실제로
              쓰이는지 알아야 다음에 무엇을 만들지 정할 수 있어서입니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-sm font-bold text-gray-900 mb-3">수집하는 것</p>
                <ul className="flex flex-col gap-2 text-sm text-gray-600">
                  <li>방문한 페이지 주소</li>
                  <li>버튼을 눌렀는지 여부</li>
                  <li>대략적인 접속 국가와 브라우저 종류</li>
                  <li>구글 광고 스크립트가 심는 쿠키</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-sm font-bold text-gray-900 mb-3">수집하지 않는 것</p>
                <ul className="flex flex-col gap-2 text-sm text-gray-600">
                  <li>파일의 내용</li>
                  <li>파일 이름, 크기, 장수</li>
                  <li>이름·이메일 등 개인정보</li>
                  <li>계정과 비밀번호 (회원가입이 없습니다)</li>
                </ul>
              </div>
            </div>

            <p className="mt-6 mb-4">
              &ldquo;파일을 올렸다&rdquo;는 사실은 기록되지만, 무슨 파일인지는 기록되지 않습니다. 100명이
              들어와 몇 명이 실제로 도구를 쓰는지 알기 위한 숫자이고, 파일 이름이나 크기는 애초에 서버로
              가지 않으니 기록할 방법도 없습니다.
            </p>
            <p className="mb-4">
              <strong className="text-gray-900">광고에 대해서도 밝혀둡니다.</strong> 이 사이트에는 구글
              애드센스 광고 스크립트가 들어 있습니다. 운영비를 감당하기 위한 것이고, 구글은 광고를 위해
              쿠키를 사용합니다. 이 부분은 구글이 수집하는 영역이라 저희가 통제하지 못합니다. 브라우저
              설정이나{" "}
              <a href="https://myadcenter.google.com" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] font-medium underline">
                구글 광고 설정
              </a>
              에서 거부하실 수 있습니다.
            </p>
            <p>
              다만 광고 쿠키와 파일은 완전히 다른 얘기입니다. 광고가 붙든 안 붙든 서류는 여전히 서버로
              가지 않습니다. 자세한 범위는{" "}
              <Link href="/privacy" className="text-[#1D9E75] font-medium underline">개인정보처리방침</Link>
              에 적어두었습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">자주 묻는 질문</h2>
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-bold text-gray-900 mb-2">Q. 변환한 파일이 컴퓨터에 남나요?</p>
                <p>
                  변환하는 동안에는 브라우저 메모리에만 있고, 페이지를 닫으면 사라집니다. 다운로드한
                  결과 파일은 당연히 저장되니, 제출을 마쳤다면 필요 없는 파일은 정리하시면 됩니다.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Q. 스마트폰에서도 똑같나요?</p>
                <p>
                  같습니다. PC든 모바일이든 브라우저 안에서 처리되는 방식은 동일합니다. 다만 아주 큰
                  파일은 기기 성능에 따라 느려질 수 있습니다.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Q. 회원가입은 왜 없나요?</p>
                <p>
                  받을 이유가 없어서입니다. 파일을 저장하지 않으니 이용자를 구분할 필요가 없고, 구분할
                  필요가 없으니 개인정보를 받을 이유도 없습니다.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Q. 무료인데 어떻게 운영되나요?</p>
                <p>
                  파일이 서버를 거치지 않으니 운영비가 거의 들지 않습니다. 페이지를 내려주는 비용만
                  들기 때문에 무료로 열어둘 수 있습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#1C1F1D] rounded-2xl p-8 sm:p-10 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-[#FAFBFA] mb-3">직접 확인해보세요</h2>
            <p className="text-[#A8B2AC] mb-7 leading-relaxed">
              페이지를 연 뒤 와이파이를 끄고 써보시면 됩니다.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/compress" className="bg-[#4ADE80] text-[#0C1610] font-bold px-6 py-3 rounded-xl hover:bg-[#3bc46d] transition">
                용량 줄이기
              </Link>
              <Link href="/merge" className="bg-white/10 border border-white/20 text-[#FAFBFA] font-bold px-6 py-3 rounded-xl hover:bg-white/20 transition">
                PDF 합치기
              </Link>
              <Link href="/split" className="bg-white/10 border border-white/20 text-[#FAFBFA] font-bold px-6 py-3 rounded-xl hover:bg-white/20 transition">
                PDF 나누기
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">더 읽어보기</h2>
            <div className="flex flex-col gap-3">
              <Link href="/guide/file-safety" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">온라인 PDF 도구에 통장사본 올려도 될까? →</p>
                <p className="text-sm text-gray-500">다른 사이트가 안전한지 스스로 판단하는 방법</p>
              </Link>
              <Link href="/privacy" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">개인정보처리방침 →</p>
                <p className="text-sm text-gray-500">수집 범위를 문서로 정리했습니다</p>
              </Link>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
