import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "지원사업 서류 반려 사유 8가지와 해결법 (2026) | ZipperDoc",
  description: "정부지원사업 접수에서 서류가 반려되는 대표적인 이유와 각각의 해결 방법. 발급일자 초과, 파일 형식 오류, 용량 초과, 순서 오류 등 실제로 자주 걸리는 항목을 정리했습니다.",
  alternates: { canonical: "/guide/document-rejected" },
  openGraph: {
    ...openGraphBase,
    title: "지원사업 서류 반려 사유 8가지와 해결법",
    description: "실제로 자주 걸리는 반려 사유와 각각의 해결 방법을 정리했습니다.",
    url: "/guide/document-rejected",
    type: "article",
  },
};

export default function DocumentRejectedGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          지원사업 서류 반려 사유 8가지와 해결법
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          사업 내용이 아니라 서류 형식 때문에 반려되는 경우가 생각보다 많습니다. 대부분 미리 알았다면 몇 분
          만에 막을 수 있는 것들입니다. 접수 담당자들이 실제로 자주 지적하는 항목과, 각각을 어떻게
          해결하는지 정리했습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. 증명서 발급일자가 기준을 넘음</h2>
            <p className="mb-3">
              가장 흔한 반려 사유입니다. 사업자등록증명, 국세·지방세 완납증명, 등기부등본은 보통 &ldquo;최근
              1개월 또는 3개월 이내 발급분&rdquo;을 요구합니다. 예전에 발급받아 저장해둔 파일을 그대로
              제출하면 내용이 맞아도 반려됩니다.
            </p>
            <p>
              <strong className="text-gray-900">해결:</strong> 접수 직전에 새로 발급받으세요. 정부24나
              홈택스에서 대부분 즉시 발급되고 무료입니다. 발급일이 찍힌 부분이 잘리지 않게 촬영·저장하는
              것도 중요합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. 파일 용량이 제한을 초과</h2>
            <p className="mb-3">
              업로드 자체가 막히거나, 올라가더라도 시스템에서 잘려 저장되는 경우가 있습니다. 스마트폰으로
              찍은 서류 사진은 한 장에 5~10MB를 넘는 일이 흔합니다.
            </p>
            <p>
              <strong className="text-gray-900">해결:</strong>{" "}
              <Link href="/compress" className="text-[#1D9E75] font-medium underline">
                이미지 용량을 줄인 뒤
              </Link>{" "}
              제출하세요. 다만 너무 세게 압축하면 글자가 뭉개져 다른 사유로 반려되니, 압축 후 계좌번호나
              사업자번호가 읽히는지 확인하는 과정을 꼭 거치세요.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. 글자나 숫자를 알아볼 수 없음</h2>
            <p className="mb-3">
              어두운 곳에서 찍었거나, 그림자가 지거나, 과하게 압축해서 계좌번호·사업자번호가 흐릿한
              경우입니다. 심사자가 대조를 못 하면 그대로 재제출 요청이 옵니다.
            </p>
            <p>
              <strong className="text-gray-900">해결:</strong> 밝은 곳에서 그림자 없이, 서류와 카메라를
              수평으로 두고 다시 촬영하세요. 형광등 바로 아래보다 창가 자연광이 낫습니다. 압축은 화질
              70~80% 선에서 멈추는 것이 안전합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. 여러 파일을 따로 올림 (또는 반대)</h2>
            <p className="mb-3">
              &ldquo;하나의 PDF로 합쳐 제출&rdquo;인데 따로 올렸거나, 서류별로 칸이 나뉘어 있는데 하나로
              합쳐 올린 경우입니다. 둘 다 반려 대상입니다.
            </p>
            <p>
              <strong className="text-gray-900">해결:</strong> 업로드 화면의 칸 개수를 먼저 보세요. 칸이
              하나면{" "}
              <Link href="/merge" className="text-[#1D9E75] font-medium underline">
                하나의 PDF로 합치고
              </Link>
              , 서류별로 나뉘어 있으면 각각 올리면 됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. 서류 순서가 목록과 다름</h2>
            <p className="mb-3">
              합친 PDF 안의 페이지 순서가 공고문 목록과 다르면, 심사자가 서류가 빠진 것으로 오해할 수
              있습니다. 실제로 누락으로 처리되는 경우도 있습니다.
            </p>
            <p>
              <strong className="text-gray-900">해결:</strong> 공고문의 번호 순서를 그대로 따르세요. 합친
              뒤에는 PDF를 열어 페이지를 넘겨가며 순서를 확인하는 것이 확실합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. 사진이 회전되거나 잘림</h2>
            <p className="mb-3">
              스마트폰으로 가로로 찍은 사진이 세로로 들어가 옆으로 누운 상태가 되거나, 서류 귀퉁이가
              프레임 밖으로 나가 잘린 경우입니다. 도장이나 발급일자가 잘리면 특히 문제가 됩니다.
            </p>
            <p>
              <strong className="text-gray-900">해결:</strong> 촬영할 때 서류 네 귀퉁이가 모두 화면 안에
              들어오는지 확인하고, 여백을 조금 두고 찍으세요. 합친 뒤 결과 파일에서 방향과 잘림을 다시
              확인하면 됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. 명의가 일치하지 않음</h2>
            <p className="mb-3">
              법인 사업인데 대표자 개인 명의 통장사본을 냈거나, 신청자와 사업자등록증상의 대표자가 다른
              경우입니다. 서류 자체는 진짜여도 요건 불일치로 반려됩니다.
            </p>
            <p>
              <strong className="text-gray-900">해결:</strong> 신청 주체(개인/개인사업자/법인)를 먼저
              확정하고, 모든 서류의 명의를 거기에 맞추세요. 공동대표라면 어느 쪽 명의를 요구하는지 문의처에
              확인하는 편이 빠릅니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. 지정 양식을 쓰지 않음</h2>
            <p className="mb-3">
              사업계획서를 자유 양식으로 작성했거나, 이전 연도 양식을 그대로 쓴 경우입니다. 항목이 하나만
              달라도 재제출 대상이 됩니다.
            </p>
            <p>
              <strong className="text-gray-900">해결:</strong> 반드시 해당 공고에 첨부된 양식 파일을
              내려받아 사용하세요. 검색으로 찾은 양식은 연도가 다를 수 있습니다. 양식의 안내 문구나 예시
              문장은 지우고 제출하는 것이 기본입니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">반려 통보를 받았다면</h2>
            <p className="mb-3">
              대부분의 사업은 보완 기간을 줍니다. 통보 내용에 적힌 사유와 기한을 먼저 확인하고, 애매하면
              문의처에 전화해 정확히 무엇을 고쳐야 하는지 물어보세요. 짐작으로 고쳐서 다시 냈다가 같은
              사유로 또 반려되는 경우가 많습니다.
            </p>
            <p>
              보완 기간이 짧은 경우가 많으니, 통보를 받은 날 바로 처리하는 것이 안전합니다.
            </p>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">서류 파일 문제부터 해결하세요</h2>
            <p className="text-gray-600 mb-6">용량 초과와 파일 합치기, 설치 없이 무료로.</p>
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
              <Link href="/guide/submission-checklist" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">정부지원사업 제출 서류 체크리스트 →</p>
                <p className="text-sm text-gray-500">접수 전에 확인해야 할 항목을 순서대로 정리</p>
              </Link>
              <Link href="/guide/business-plan-compress" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">사업계획서 파일 용량 줄이는 법 →</p>
                <p className="text-sm text-gray-500">제출 용량 제한을 맞추기 위해 용량을 줄이는 방법</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
