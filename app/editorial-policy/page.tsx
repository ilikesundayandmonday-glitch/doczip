import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "콘텐츠 작성 기준 | ZipperDoc",
  description: "ZipperDoc 가이드 콘텐츠를 작성·검수·갱신할 때 지키는 원칙을 안내합니다.",
  alternates: { canonical: "/editorial-policy" },
  openGraph: {
    ...openGraphBase,
    title: "콘텐츠 작성 기준 | ZipperDoc",
    description: "가이드 콘텐츠를 작성·검수·갱신할 때 지키는 원칙.",
    url: "/editorial-policy",
    type: "website",
  },
};

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 홈으로
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">콘텐츠 작성 기준</h1>
        <p className="text-sm text-gray-400 mb-10">최종 수정일: 2026년 8월 30일</p>

        <div className="flex flex-col gap-8 text-gray-700 leading-relaxed">
          <section>
            <p>
              ZipperDoc의 가이드 글은 정부지원사업 등에 서류를 제출하는 분들이 실제로 궁금해하는
              내용을 다룹니다. 어떻게 쓰고 관리하는지 아래에 정리했습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. 작성 방식</h2>
            <p>
              글의 초안 작성 과정에서 AI 도구의 도움을 받습니다. 다만 발행 전에 실제 화면·기능과
              내용이 맞는지, 언급한 기관명·절차가 실제와 일치하는지 운영자가 직접 확인한 뒤
              게시합니다. AI가 만들었다는 이유로 검토를 건너뛰지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. 사실 확인 원칙</h2>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>확인하지 못한 지원 금액, 마감일, 제출 기준은 단정적으로 적지 않습니다.</li>
              <li>기관별 기준을 다룰 때는 해당 기관의 공식 공고나 공식 페이지를 함께 안내합니다.</li>
              <li>실제로 지원하지 않는 ZipperDoc의 기능을 지원한다고 설명하지 않습니다.</li>
              <li>존재하지 않는 사용자 후기나 통계를 만들어 넣지 않습니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. 갱신 원칙</h2>
            <p>
              지원사업 관련 기준은 시간이 지나면서 바뀔 수 있습니다. 그래서 각 글에는 작성일 또는
              최종 검토일을 표기해 언제 기준의 내용인지 알 수 있게 합니다. 잘못되었거나 오래된 정보를
              발견하시면{" "}
              <Link href="/contact" className="text-[#1D9E75] underline">문의하기</Link>
              로 알려주세요. 확인 후 수정합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. 준비 중인 콘텐츠 표시</h2>
            <p>
              아직 실제 데이터와 연결되지 않았거나 예시로만 구성된 화면(예: 정부지원사업 공고 모아보기
              페이지)은 &lsquo;예시&rsquo; 또는 &lsquo;준비 중&rsquo;임을 화면에 명확히 표시하고,
              검색엔진에는 노출되지 않도록 처리합니다. 실제 데이터로 완전히 교체된 뒤에만 정식으로
              공개합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. ZipperDoc 도구 언급 기준</h2>
            <p>
              가이드 안에서 관련된 ZipperDoc 도구를 자연스럽게 안내하지만, 홍보가 본문 대부분을
              차지하지 않도록 합니다. 글의 목적은 어디까지나 이용자의 실제 문제를 해결하는 것입니다.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
