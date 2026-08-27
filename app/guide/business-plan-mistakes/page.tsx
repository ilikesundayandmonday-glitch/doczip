import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, guideArticle } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "사업계획서, 형식은 맞는데 왜 떨어질까? 내용 문제 7가지 (2026) | ZipperDoc",
  description: "서류 형식은 문제없는데 정부지원사업 서면평가에서 탈락한다면 내용 자체를 점검해야 합니다. 심사위원이 감점하는 사업계획서의 흔한 문제 7가지를 정리했습니다.",
  alternates: { canonical: "/guide/business-plan-mistakes" },
  openGraph: {
    ...openGraphBase,
    title: "사업계획서, 형식은 맞는데 왜 떨어질까?",
    description: "심사위원이 감점하는 사업계획서의 흔한 내용 문제 7가지를 정리했습니다.",
    url: "/guide/business-plan-mistakes",
    type: "article",
  },
};

export default function BusinessPlanMistakesGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <JsonLd
        data={guideArticle({
          headline: "사업계획서, 형식은 맞는데 왜 떨어질까? 내용 문제 7가지 (2026)",
          description: "서류 형식은 문제없는데 정부지원사업 서면평가에서 탈락한다면 내용 자체를 점검해야 합니다. 심사위원이 감점하는 사업계획서의 흔한 문제 7가지를 정리했습니다.",
          path: "/guide/business-plan-mistakes",
        })}
      />
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          사업계획서, 형식은 맞는데 왜 떨어질까?
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          제출 형식도 맞추고 서류도 빠짐없이 넣었는데 서면평가에서 떨어졌다면, 원인은 파일이 아니라
          내용에 있을 가능성이 큽니다.{" "}
          <Link href="/guide/document-rejected" className="text-[#1D9E75] underline">
            서류가 반려되는 이유
          </Link>
          가 발급일자 초과나 용량 초과 같은 형식 문제를 다룬다면, 이 글은 형식은 멀쩡한데도 점수를 깎아
          먹는 &ldquo;내용&rdquo; 문제 7가지를 정리했습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 사업 요약이 평범하고 추상적이다</h2>
            <p>
              &ldquo;혁신적인 기술로 시장을 선도하겠다&rdquo;, &ldquo;고객 만족을 최우선으로 한다&rdquo;
              같은 문장은 어떤 사업계획서에도 붙일 수 있어 심사위원에게 아무 정보도 주지 못합니다. 요약
              문단부터 이 사업만이 다룰 수 있는 구체적인 문제와 숫자를 담아야 합니다. &ldquo;30대 맞벌이
              가구의 70%가 저녁 준비에 하루 40분 이상을 쓴다&rdquo;처럼 검증 가능한 사실로 시작하면
              추상적인 표현을 줄일 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 숫자는 있는데 해석이 없다</h2>
            <p className="mb-3">
              시장 규모나 매출 목표 같은 숫자를 인용 자체는 하면서, 그 숫자가 우리 사업과 어떻게
              연결되는지는 설명하지 않는 경우가 많습니다. &ldquo;국내 반려동물 시장은 6조 원 규모&rdquo;라는
              문장만 던지고 끝내면, 심사위원은 &ldquo;그래서 이 중 우리가 노리는 부분은 얼마인가&rdquo;를
              스스로 답해야 합니다.
            </p>
            <p>
              전체 시장 규모 다음에는 반드시 우리가 실제로 진입할 수 있는 부분(SOM)을 좁혀서 제시하고, 그
              근거가 되는 계산 과정을 한두 문장으로 덧붙이세요. 숫자를 나열하는 것과 숫자를 해석해 보여주는
              것은 심사위원이 받는 인상에서 큰 차이가 납니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 근거 없이 주장만 반복한다</h2>
            <p>
              &ldquo;경쟁사보다 우수하다&rdquo;, &ldquo;압도적인 기술력을 보유하고 있다&rdquo;처럼 결론만
              말하고 왜 그런지는 설명하지 않는 문장이 반복되면, 오히려 근거가 없다는 인상을 줍니다. 우수하다고
              말하고 싶다면 비교 표, 테스트 결과, 특허나 인증처럼 확인 가능한 근거를 함께 제시해야
              설득력이 생깁니다. 근거를 붙이기 어려운 주장이라면 차라리 문장에서 빼는 편이 낫습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 지금까지의 실행 성과가 부족하다</h2>
            <p>
              계획만 화려하고 지금까지 실제로 무엇을 해봤는지가 빈약하면 실현가능성에서 감점됩니다. 매출이나
              투자 유치처럼 거창한 성과가 아니어도 괜찮습니다. 프로토타입을 만들어봤는지, 잠재 고객
              몇 명에게라도 반응을 확인했는지, 협업 의향을 밝힌 기업이 있는지처럼 작더라도 실제로 진행한
              내용을 구체적으로 적으세요. &ldquo;앞으로 하겠다&rdquo;는 계획보다 &ldquo;이미 해봤더니
              이랬다&rdquo;는 사실이 심사위원에게 더 강한 신뢰를 줍니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 전문 용어가 과도하다</h2>
            <p>
              해당 분야 심사위원만 배정되는 것이 아닙니다. 업계 용어나 기술 약어를 설명 없이 나열하면
              비전문가인 심사위원은 사업의 핵심을 이해하지 못한 채 낮은 점수를 줄 수밖에 없습니다. 전문
              용어를 처음 쓸 때는 괄호로 짧게 풀어주고, 가능하면 그림이나 비유로 바꿔 설명하세요. 같은
              분야 전문가가 아닌 사람에게 먼저 읽혀보고 이해가 되는지 확인하는 것도 좋은 방법입니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 사업 목적과 어긋난 내용을 담는다</h2>
            <p>
              사업마다 지원하려는 목적이 다릅니다. 청년 창업 지원 사업인데 팀 전체가 특정 연령대에
              치우쳐 있다는 인상을 주거나, 지역 특화 사업인데 지역과의 연결고리를 전혀 언급하지 않는 경우처럼
              공고가 요구하는 방향과 계획서의 내용이 어긋나면 아무리 사업 자체가 훌륭해도 낮은 점수를
              받습니다. 작성을 시작하기 전에 공고문의 지원 목적과 평가 기준을 다시 읽고, 계획서 곳곳에 그
              목적과 맞닿는 문장을 의도적으로 배치하세요.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 스토리텔링이 약하다</h2>
            <p>
              문제-해결책-성과를 나열만 하고 하나의 이야기로 엮지 못하면 읽는 사람의 기억에 남지 않습니다.
              수십 개의 사업계획서를 연달아 검토하는 심사위원 입장에서는, 항목별로 흩어진 정보보다 처음부터
              끝까지 하나의 흐름으로 읽히는 계획서가 더 설득력 있게 다가옵니다.{" "}
              <Link href="/guide/business-plan-writing" className="text-[#1D9E75] underline">
                PSST 구조로 작성하는 법
              </Link>
              을 참고해 문제인식에서 팀구성까지 하나의 흐름으로 이어지도록 다시 읽어보세요.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 몇 번이나 떨어져야 원인을 내용에서 찾아야 하나요?</p>
                <p>
                  서류 형식과 제출 절차를 다 지켰는데도 떨어졌다면 바로 내용을 점검해보는 것이 좋습니다.{" "}
                  <Link href="/guide/document-rejected" className="text-[#1D9E75] font-medium underline">
                    서류가 반려되는 이유
                  </Link>
                  에서 형식 문제부터 먼저 제외해보세요.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 위 7가지를 전부 고치면 반드시 통과하나요?</p>
                <p>
                  아닙니다. 사업계획서의 완성도는 통과 가능성을 높이는 요소일 뿐, 경쟁률과 심사위원 구성에
                  따라 결과는 달라질 수 있습니다. 다만 위 문제들은 실제로 감점 요인으로 자주 지적되는
                  내용이라 점검해둘 가치는 충분합니다.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 주변 사람에게 검토를 부탁할 때 무엇을 물어봐야 하나요?</p>
                <p>
                  같은 업계 사람보다는 관련 없는 지인에게 먼저 읽혀보고 &ldquo;무슨 사업인지 한 문장으로
                  설명해달라&rdquo;고 물어보세요. 제대로 답하지 못한다면 5번 항목(과도한 전문성) 문제를
                  의심해볼 만합니다.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">내용을 고쳤다면 제출 서류도 정리하세요</h2>
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
              <Link href="/guide/pt-evaluation" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">정부지원사업 발표평가(PT) 완벽 대비법 →</p>
                <p className="text-sm text-gray-500">시간 배분, 질의응답, 비대면 발표 체크리스트</p>
              </Link>
              <Link href="/guide/document-rejected" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">서류가 반려되는 이유 →</p>
                <p className="text-sm text-gray-500">발급일자, 용량, 명의 등 형식 문제 8가지</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
