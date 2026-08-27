import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, guideArticle } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "정부지원사업 발표평가(PT) 완벽 대비법 (2026) | ZipperDoc",
  description: "정부지원사업 발표평가(비대면 PT 포함) 시간 배분, 질의응답 답변 요령, 자주 나오는 질문 대비, 기술 점검 체크리스트까지 실전 준비 방법을 정리했습니다.",
  alternates: { canonical: "/guide/pt-evaluation" },
  openGraph: {
    ...openGraphBase,
    title: "정부지원사업 발표평가(PT) 완벽 대비법",
    description: "시간 배분, 질의응답 요령, 기술 점검까지 실전 준비 방법을 정리했습니다.",
    url: "/guide/pt-evaluation",
    type: "article",
  },
};

export default function PtEvaluationGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <JsonLd
        data={guideArticle({
          headline: "정부지원사업 발표평가(PT) 완벽 대비법 (2026)",
          description: "정부지원사업 발표평가(비대면 PT 포함) 시간 배분, 질의응답 답변 요령, 자주 나오는 질문 대비, 기술 점검 체크리스트까지 실전 준비 방법을 정리했습니다.",
          path: "/guide/pt-evaluation",
        })}
      />
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          정부지원사업 발표평가(PT) 완벽 대비법
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          서면평가를 통과하면 발표평가(PT)가 기다립니다. 짧게는 20분 안에 사업계획서 전체를 설명하고
          질문에 답해야 하는데, 서면에서는 좋은 평가를 받고도 발표에서 흔들려 아쉽게 떨어지는 경우가
          적지 않습니다. 최근 비대면 화상 발표평가가 늘어난 흐름까지 반영해 준비 방법을 정리했습니다.
        </p>

        <p className="text-sm text-gray-400 mb-10 -mt-6 leading-relaxed">
          발표·질의응답 시간과 진행 방식(대면/비대면)은 사업과 회차마다 다릅니다. 아래 수치는 흔히 쓰이는
          구성을 기준으로 한 것이니, 참석 안내 문자나 공고문에 적힌 정확한 시간을 반드시 다시 확인하세요.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">전체 시간 배분부터 파악하세요</h2>
            <p className="mb-3">
              흔히 쓰이는 구성은 발표 5분, 질의응답 15분입니다. 20분이라는 시간을 실제로 재보면 생각보다
              짧습니다. 발표 5분 안에 사업계획서 전체를 다 설명하려 하면 핵심이 흐려지므로, 문제-해결책-
              차별점-성과 계획 순으로 뼈대만 명확히 전달하는 편이 낫습니다.
            </p>
            <p>
              질의응답 15분 동안 보통 5개 안팎의 질문이 나옵니다. 한 질문에 답하는 시간은{" "}
              <strong className="text-gray-900">20초 내외</strong>가 적당하고, 30초를 넘기지 않는 것이
              좋습니다. 너무 짧게(5초 이내) 답하는 것도 성의 없어 보일 수 있으니, 핵심을 먼저 말하고
              근거를 한 문장 덧붙이는 정도의 길이를 목표로 연습하세요.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5분 발표, 무엇을 담아야 할까</h2>
            <p className="mb-3">
              사업계획서 본문을 그대로 요약해 읽는 방식은 심사위원에게 새로운 정보를 주지 못합니다. 발표는
              서면 자료를 &ldquo;읽는 시간&rdquo;이 아니라, 서면으로 다 전달하지 못한 확신을 짧게 강조하는
              시간이라고 생각하는 편이 낫습니다.
            </p>
            <p>
              첫 문장에서 어떤 문제를 다루는지 바로 밝히고, 우리만의 차별점을 한 문장으로 못 박은 뒤,
              지금까지의 진행 상황(고객 반응, 프로토타입, 협업 현황 등)으로 실현가능성을 뒷받침하는
              흐름을 권합니다. 마지막은 이 사업을 통해 이루려는 목표로 마무리하세요.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">예상 질문에 미리 답을 준비해두세요</h2>
            <p className="mb-3">
              발표평가에서 나오는 질문은 대개 사업계획서에서 설명이 부족했거나 의문이 남는 지점에
              집중됩니다. 흔히 나오는 유형은 다음과 같습니다.
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>제시한 시장 규모나 매출 목표의 근거는 무엇인가</li>
              <li>경쟁사 대비 진입장벽이나 차별점을 유지할 수 있는 이유는 무엇인가</li>
              <li>지금까지 실제로 확인한 고객 반응이나 성과가 있는가</li>
              <li>지원금을 구체적으로 어디에 쓸 계획인가</li>
              <li>부족한 역량(기술, 마케팅 등)을 어떻게 보완할 것인가</li>
            </ul>
            <p className="mt-3">
              예상 질문 목록을 만들고 답변을 스크립트로 써본 뒤, 실제로 소리 내어 말하며 반복 연습하세요.
              머릿속으로만 정리한 답변은 실전에서 훨씬 길어지거나 흐트러지기 쉽습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">비대면 발표평가 준비 체크리스트</h2>
            <p className="mb-3">
              화상으로 진행되는 발표평가가 늘면서, 내용 못지않게 기술적인 준비가 당락에 영향을 주는
              경우가 생겼습니다. 시작 전 아래 항목을 점검하세요.
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>컴퓨터, 카메라, 마이크, 인터넷 연결 상태를 발표 전날과 당일 아침 두 번 점검</li>
              <li>이어셋이나 마이크의 예비품을 준비해 현장에서 문제가 생겨도 바로 대응</li>
              <li>화면 공유할 발표 자료를 미리 열어두고, 필요 없는 창과 알림은 모두 꺼두기</li>
              <li>조용하고 조명이 밝은 장소에서 진행하고, 최소 10분 전에는 접속을 마쳐두기</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">연습은 반드시 녹화해서 확인하세요</h2>
            <p>
              발표 내용을 눈으로 읽는 것과 실제로 말해보는 것은 완전히 다릅니다. 최소 한두 번은 실제
              발표하듯 소리 내어 연습하고, 스마트폰으로 녹화해 다시 보면서 말이 빠르지는 않은지, 시선이나
              손동작이 산만하지는 않은지 확인하세요. 발표 자료와 예상 질문 답변을 하나의 문서로 정리해두면
              발표 직전에 훑어보기도 편합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 발표 자료(PPT)를 심사위원에게 파일로도 제출해야 하나요?</p>
                <p>
                  사업에 따라 발표 자료를 별도 파일로 미리 제출하라는 경우가 있습니다. 사업계획서와 발표
                  자료를 함께 하나의 PDF로 정리해 제출해야 한다면{" "}
                  <Link href="/merge" className="text-[#1D9E75] font-medium underline">
                    제출 서류 합치기
                  </Link>
                  로 순서를 맞춰 합칠 수 있습니다.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 질문에 대한 답을 모를 때는 어떻게 해야 하나요?</p>
                <p>모르는 내용을 아는 척 길게 설명하는 것보다, 현재까지 확인한 부분과 확인이 필요한 부분을 솔직히 구분해서 답하는 편이 신뢰를 덜 잃습니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 서면평가와 발표평가 비중이 다른가요?</p>
                <p>사업마다 다릅니다. 최종 점수에 서면평가 결과가 일부 반영되는 사업도 있고, 발표평가 점수만으로 최종 순위를 정하는 사업도 있습니다. 참석 안내에 적힌 평가 방식을 확인하세요.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">발표 자료와 서류를 정리해두세요</h2>
            <p className="text-gray-600 mb-6">여러 자료를 하나로 합치고, 용량도 맞추고. 설치 없이 무료로.</p>
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
              <Link href="/guide/business-plan-writing" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">정부지원사업 사업계획서 작성법 (PSST 구조) →</p>
                <p className="text-sm text-gray-500">문제인식부터 팀구성까지 항목별 작성 팁</p>
              </Link>
              <Link href="/guide/business-plan-mistakes" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">사업계획서, 형식은 맞는데 왜 떨어질까? →</p>
                <p className="text-sm text-gray-500">서류 형식이 아니라 내용 자체가 문제인 7가지</p>
              </Link>
              <Link href="/guide/submission-checklist" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">정부지원사업 제출 서류 체크리스트 →</p>
                <p className="text-sm text-gray-500">접수 전에 확인해야 할 항목을 순서대로 정리</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
