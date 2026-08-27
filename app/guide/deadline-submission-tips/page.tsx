import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import { JsonLd, guideArticle } from "@/app/structured-data";

export const metadata: Metadata = {
  title: "정부지원사업 마감일 임박, 온라인 제출 오류 대처법 (2026) | ZipperDoc",
  description: "정부지원사업 마감일 직전 접속 폭주·전산 오류로 제출 자체를 못 하는 경우가 실제로 많습니다. 마감 당일 대처법과 미리 준비해두는 법을 정리했습니다.",
  alternates: { canonical: "/guide/deadline-submission-tips" },
  openGraph: {
    ...openGraphBase,
    title: "정부지원사업 마감일 임박, 온라인 제출 오류 대처법",
    description: "접속 폭주·전산 오류로 제출을 못 하는 상황, 마감 당일 대처법과 예방법을 정리했습니다.",
    url: "/guide/deadline-submission-tips",
    type: "article",
  },
};

export default function DeadlineSubmissionTipsGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <JsonLd
        data={guideArticle({
          headline: "정부지원사업 마감일 임박, 온라인 제출 오류 대처법 (2026)",
          description: "정부지원사업 마감일 직전 접속 폭주·전산 오류로 제출 자체를 못 하는 경우가 실제로 많습니다. 마감 당일 대처법과 미리 준비해두는 법을 정리했습니다.",
          path: "/guide/deadline-submission-tips",
        })}
      />
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          정부지원사업 마감일 임박, 온라인 제출 오류 대처법
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          서류도 다 준비했고 내용도 문제없는데, 정작 마감 당일에 사이트가 안 열리거나 접수 화면에서
          멈춰서 제출 자체를 못 하는 경우가 실제로 많습니다.{" "}
          <Link href="/guide/document-rejected" className="text-[#1D9E75] underline">
            서류가 반려되는 이유
          </Link>
          가 &ldquo;낸 서류의 형식&rdquo; 문제라면, 이 글은 &ldquo;내는 과정 자체&rdquo;에서 생기는
          문제를 다룹니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">왜 마감일에 유독 접속이 안 될까</h2>
            <p className="mb-3">
              대부분의 지원사업 접수 시스템은 평소엔 여유롭다가 마감일 직전에만 수만 명이 한꺼번에
              몰립니다. 특히 마감일 오전 시간대와 마감 몇 시간 전에 접속이 집중되면서 서버가 불안정해지고,
              본인 정보가 시스템에 제때 반영되지 않아 명단 누락처럼 보이는 오류가 생기기도 합니다.
            </p>
            <p>
              실제로 지원사업 탈락 이유를 정리한 글들에서도 &ldquo;마감일에 신청한다&rdquo;를 흔한 탈락
              원인 중 하나로 꼽습니다. 접속 폭주·서류 오류·전산 문제로 제출 자체를 못 하는 경우가 그만큼
              흔하다는 뜻입니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">접속이 안 될 때 해볼 순서</h2>
            <p className="mb-3">
              화면이 멈추거나 오류가 뜬다고 바로 포기하지 말고, 아래 순서대로 시도해보세요.
            </p>
            <ol className="list-decimal pl-6 flex flex-col gap-2">
              <li>브라우저를 완전히 종료했다가 다시 켜고, 캐시를 삭제한 뒤 재접속합니다.</li>
              <li>공동인증서 로그인이 안 되면 간편인증(카카오·네이버 등)으로 방식을 바꿔봅니다.</li>
              <li>접속자가 몰리는 시간대(정시, 마감 임박 시각)를 피해 10~20분 뒤 다시 시도합니다.</li>
              <li>PC와 모바일을 번갈아 시도해봅니다. 한쪽에서만 발생하는 오류일 수 있습니다.</li>
              <li>이 모든 방법이 24시간 넘게 안 통하면 사업 담당 기관 고객센터에 전화로 직접 문의하세요. 전산 오류가 확인되면 접수 기간이 연장되거나 별도 구제 절차가 안내되는 경우도 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">&ldquo;접수했다&rdquo;와 &ldquo;확정됐다&rdquo;는 다릅니다</h2>
            <p className="mb-3">
              제출 버튼을 눌렀다고 끝난 게 아닙니다. 접수 완료 화면과 접수번호를 반드시 스크린샷으로
              남겨두고, 안내 문자나 이메일이 오면 함께 보관하세요. 나중에 &ldquo;제출이 안 됐다&rdquo;는
              분쟁이 생겼을 때 이 기록이 유일한 증거가 됩니다.
            </p>
            <p>
              접수 이후에도 공고가 수정되거나 추가 서류 요청이 올 수 있으니, 접수했다고 안심하지 말고
              공고 페이지를 주기적으로 확인하는 습관을 들이는 게 좋습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">가장 확실한 예방법: 마감일에 아무것도 안 하기</h2>
            <p className="mb-3">
              결국 가장 확실한 대처법은 마감일 당일에는 &ldquo;업로드 버튼만 누르면 되는&rdquo; 상태로
              만들어두는 것입니다. 서류를 마감일에 스캔하고 압축하고 합치려 하면, 시스템이 멀쩡해도
              시간에 쫓겨 실수가 나옵니다.
            </p>
            <p>
              최소 2~3일 전에 필요한 서류를 전부 모으고,{" "}
              <Link href="/compress" className="text-[#1D9E75] font-medium underline">
                용량을 미리 맞추고
              </Link>
              ,{" "}
              <Link href="/merge" className="text-[#1D9E75] font-medium underline">
                하나의 PDF로 합쳐서
              </Link>{" "}
              완성해두세요. 마감일에는 그 파일을 업로드하고, 접속이 안 되면 위 순서대로 대응하는 것만
              남게 됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 전산 오류로 마감 시간 안에 제출을 못 했어요. 구제받을 방법이 있나요?</p>
                <p>담당 기관에 즉시 연락해서 오류 발생 시각과 상황을 구체적으로 알리세요. 시스템 장애가 공식 확인되면 접수 기간이 연장되거나 별도 접수를 받아주는 경우가 있지만, 사업마다 다르므로 보장되진 않습니다. 그래서 마감 당일 제출은 애초에 피하는 게 가장 안전합니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 접수번호나 확인 문자를 못 받았어요. 정상 접수된 건가요?</p>
                <p>접수 완료 화면과 접수번호가 안 보이면 정상 접수되지 않았을 가능성이 있습니다. 다시 로그인해서 접수 내역을 확인하거나, 담당 기관에 직접 문의해 접수 여부를 확인하세요.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 서류는 다 준비됐는데 파일 형식 때문에 업로드가 안 돼요.</p>
                <p>
                  파일 형식·용량 문제는 시스템 오류와는 다른 문제입니다.{" "}
                  <Link href="/guide/document-rejected" className="text-[#1D9E75] font-medium underline">
                    서류가 반려되는 이유
                  </Link>
                  에서 파일 관련 흔한 실수를 먼저 확인해보세요.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">마감일 전에 미리 끝내두세요</h2>
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
              <Link href="/guide/document-rejected" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">서류가 반려되는 이유 →</p>
                <p className="text-sm text-gray-500">발급일자, 용량, 명의 등 형식 문제 8가지</p>
              </Link>
              <Link href="/guide/submission-checklist" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">정부지원사업 제출 서류 체크리스트 →</p>
                <p className="text-sm text-gray-500">접수 전에 확인해야 할 항목을 순서대로 정리</p>
              </Link>
              <Link href="/guide/tax-clearance-certificate" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">국세완납증명서·지방세완납증명서 발급 방법 →</p>
                <p className="text-sm text-gray-500">홈택스·위택스에서 미리 발급받는 법</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
