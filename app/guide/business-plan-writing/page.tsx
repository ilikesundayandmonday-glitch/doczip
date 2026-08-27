import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, guideArticle } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "정부지원사업 사업계획서 작성법 - PSST 구조로 쓰기 (2026) | ZipperDoc",
  description: "정부지원사업 사업계획서의 표준 평가 구조인 PSST(문제인식·실현가능성·성장전략·팀구성)를 항목별로 어떻게 채워야 하는지, 각 항목의 배점 비중과 실전 팁을 정리했습니다.",
  alternates: { canonical: "/guide/business-plan-writing" },
  openGraph: {
    ...openGraphBase,
    title: "정부지원사업 사업계획서 작성법 (PSST 구조)",
    description: "문제인식·실현가능성·성장전략·팀구성 4개 항목을 어떻게 채워야 하는지 정리했습니다.",
    url: "/guide/business-plan-writing",
    type: "article",
  },
};

export default function BusinessPlanWritingGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <JsonLd
        data={guideArticle({
          headline: "정부지원사업 사업계획서 작성법 - PSST 구조로 쓰기 (2026)",
          description: "정부지원사업 사업계획서의 표준 평가 구조인 PSST(문제인식·실현가능성·성장전략·팀구성)를 항목별로 어떻게 채워야 하는지, 각 항목의 배점 비중과 실전 팁을 정리했습니다.",
          path: "/guide/business-plan-writing",
        })}
      />
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          정부지원사업 사업계획서 작성법: PSST 구조로 쓰기
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          예비창업패키지, 초기창업패키지를 비롯한 대부분의 중소벤처기업부 산하 창업지원사업은{" "}
          <strong className="text-gray-900">PSST</strong>라는 같은 평가 구조를 씁니다. 양식 이름이 사업마다
          조금씩 달라도 심사위원이 채점하는 틀은 크게 다르지 않습니다. 이 글은 서류 형식이 아니라, PSST의
          각 항목을 &ldquo;무엇으로&rdquo; 채워야 심사위원을 설득할 수 있는지를 정리했습니다.
        </p>

        <p className="text-sm text-gray-400 mb-10 -mt-6 leading-relaxed">
          사업마다 항목 이름과 배점은 세부적으로 다를 수 있습니다. 이 글은 여러 사업 공고에 공통적으로
          쓰이는 PSST 구조의 일반적인 작성 원칙을 정리한 것이며, 정확한 배점과 목차는 신청하려는 사업의
          공고문과 첨부 양식을 최종 기준으로 삼아야 합니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">PSST란 무엇인가</h2>
            <p className="mb-3">
              PSST는 Problem(문제인식), Solution(실현가능성), Scale-up(성장전략), Team(팀구성)의 앞글자를
              딴 구조입니다. 예비창업패키지 사업계획서 양식의 목차가 거의 이 순서를 그대로 따르고, 다른
              창업지원사업들도 이름만 바꿔 비슷한 흐름을 쓰는 경우가 많습니다.
            </p>
            <p>
              각 항목은 서로 독립된 게 아니라 하나의 이야기로 이어집니다. 문제를 던지고, 그 문제를 우리가
              어떻게 풀 것인지 보여주고, 풀고 난 뒤 어떻게 키울 것인지 말하고, 마지막으로 그걸 해낼 사람이
              누구인지 증명하는 순서입니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 문제인식 (Problem)</h2>
            <p className="mb-3">
              &ldquo;내가 이 사업을 왜 하는가&rdquo;를 설득하는 항목입니다. 흔히 하는 실수는 문제를
              추상적으로 적는 것입니다. &ldquo;시장에 불편함이 있다&rdquo; 같은 문장은 심사위원에게 아무
              인상도 남기지 못합니다.
            </p>
            <p>
              대신 현장에서 확인한 사실이나 신뢰할 수 있는 출처의 통계처럼, <strong className="text-gray-900">근거로 뒷받침되는 문제</strong>를
              먼저 제시하고, 기존 방법이나 경쟁 서비스가 그 문제를 왜 충분히 풀지 못하는지를 짚어야
              합니다. 목표 고객이 이 문제를 얼마나 자주, 얼마나 심각하게 겪는지가 드러나야 이어지는
              해결책의 필요성도 설득력을 갖습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 실현가능성 (Solution)</h2>
            <p className="mb-3">
              PSST 안에서 가장 비중이 큰 항목입니다. 두 부분으로 나눠서 준비하면 빠뜨리는 게 줄어듭니다.
            </p>
            <p className="mb-3">
              <strong className="text-gray-900">개발·사업화 전략.</strong> 제품이나 서비스의 핵심
              기능·성능을 앞서 제시한 문제와 직접 연결해서 설명하세요. &ldquo;이 기능이 있다&rdquo;가
              아니라 &ldquo;이 기능이 그 문제를 이렇게 없앤다&rdquo;는 식으로 이어야 합니다. 현재 어디까지
              구현했는지와 앞으로의 개발 일정을 함께 밝히면 실현가능성이 뒷받침됩니다.
            </p>
            <p>
              <strong className="text-gray-900">시장분석 및 경쟁력.</strong> 경쟁사나 대체재의 현황을
              먼저 정리하고, 그 대비 우리의 비교우위가 무엇인지 논리적으로 이어가야 합니다. 표로 경쟁
              비교를 정리해두면 심사위원이 한눈에 위치를 파악할 수 있어 유리합니다. &ldquo;경쟁사가
              없다&rdquo;는 표현은 대개 시장 조사가 부족했다는 인상을 줍니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 성장전략 (Scale-up)</h2>
            <p className="mb-3">
              자금 소요 계획과 시장 진입·성과 계획으로 나뉘는데, 실제 평가에서는 후자의 비중이 더 큽니다.
              자금 계획은 항목별로 현실적인 수준에서 간결하게 정리하는 것으로 충분하고, 분량을 더 써야
              할 곳은 &ldquo;어떻게 시장에 들어가서 어떤 성과를 낼 것인가&rdquo;입니다.
            </p>
            <p>
              초기 진입 시장을 구체적으로 좁혀서 제시하고, 실제 고객과 접촉한 근거(사전 신청, 인터뷰,
              베타 테스트 반응 등)가 있다면 반드시 포함하세요. 수익 모델과 향후 몇 년간의 목표를 숫자로
              제시하되, 근거 없이 큰 숫자만 나열하면 오히려 신뢰를 깎습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 팀구성 (Team)</h2>
            <p className="mb-3">
              &ldquo;이 팀이 정말 해낼 수 있는가&rdquo;를 보는 항목입니다. 학력이나 경력을 나열하는 데
              그치지 말고, 창업동아리·교육·멘토링 참여 경험처럼 이 사업 아이템과 직접 연결되는 활동을
              강조하세요.
            </p>
            <p>
              아직 부족한 역량이 있다면 숨기기보다, 추가 채용 계획이나 협업할 외부 파트너를 구체적으로
              밝히는 편이 낫습니다. &ldquo;마케팅 인력 1명 충원 예정&rdquo;처럼 막연한 문장보다,
              어떤 역할을 언제 채울 것인지가 드러나야 계획으로 읽힙니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">완성한 뒤 제출하기 전에</h2>
            <p>
              사업계획서 본문에 넣을 이미지나 표가 많으면 파일 용량이 쉽게 커집니다. 제출 기준을 넘겼다면{" "}
              <Link href="/guide/business-plan-compress" className="text-[#1D9E75] font-medium underline">
                사업계획서 파일 용량 줄이는 법
              </Link>
              을 참고하세요. 또한 아무리 내용이 좋아도 지정 양식을 쓰지 않거나 발급일자가 지난 첨부서류를
              넣으면 형식 문제로 반려될 수 있으니,{" "}
              <Link href="/guide/document-rejected" className="text-[#1D9E75] font-medium underline">
                지원사업 서류 반려 사유 8가지
              </Link>
              도 함께 확인해보시길 권합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. PSST 항목의 페이지 배분은 어떻게 하나요?</p>
                <p>사업마다 첨부 양식에 페이지 수 가이드가 있는 경우가 많습니다. 일반적으로는 실현가능성(Solution)에 가장 많은 분량을, 자금 소요 같은 세부 항목에는 짧게 배분하는 흐름이 많이 쓰입니다. 정확한 기준은 신청하려는 공고문을 확인하세요.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 모든 정부지원사업이 PSST 구조인가요?</p>
                <p>중소벤처기업부 산하 창업지원사업 다수가 이 구조를 공유하지만, R&D 지원사업이나 지자체 사업은 다른 목차를 쓰기도 합니다. 공고문에 첨부된 양식의 목차를 우선 기준으로 삼으세요.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 사업계획서와 발표평가는 같은 내용으로 준비하면 되나요?</p>
                <p>
                  기본 논리는 같지만 전달 방식은 달라야 합니다. 발표평가 준비 방법은{" "}
                  <Link href="/guide/pt-evaluation" className="text-[#1D9E75] underline">
                    정부지원사업 발표평가(PT) 완벽 대비법
                  </Link>
                  에 따로 정리해두었습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">사업계획서 파일을 정리해두세요</h2>
            <p className="text-gray-600 mb-6">용량 줄이기와 하나로 합치기, 설치 없이 무료로.</p>
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
              <Link href="/guide/business-plan-mistakes" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">사업계획서, 형식은 맞는데 왜 떨어질까? →</p>
                <p className="text-sm text-gray-500">서류 형식이 아니라 내용 자체가 문제인 7가지</p>
              </Link>
              <Link href="/guide/pt-evaluation" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">정부지원사업 발표평가(PT) 완벽 대비법 →</p>
                <p className="text-sm text-gray-500">시간 배분부터 예상 질문 대비까지</p>
              </Link>
              <Link href="/guide/pre-startup-package-checklist" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">예비창업패키지 제출서류 체크리스트와 반려 피하는 법 →</p>
                <p className="text-sm text-gray-500">제출서류와 이 사업에서 자주 걸리는 반려 포인트</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
