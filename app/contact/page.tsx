import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "문의하기 | ZipperDoc",
  description: "ZipperDoc 이용 중 오류, 기능 제안, 개인정보 관련 문의는 이메일로 받고 있습니다.",
  alternates: { canonical: "/contact" },
  openGraph: {
    ...openGraphBase,
    title: "문의하기 | ZipperDoc",
    description: "오류 신고, 기능 제안, 개인정보 문의를 이메일로 받고 있습니다.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 홈으로
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">문의하기</h1>
        <p className="text-sm text-gray-400 mb-10">최종 수정일: 2026년 8월 30일</p>

        <div className="flex flex-col gap-8 text-gray-700 leading-relaxed">
          <section>
            <p>
              ZipperDoc은 이대흥이 혼자 운영하는 서비스입니다. 아래 이메일로 문의를 남겨주시면 직접
              확인 후 답변드립니다.
            </p>
            <div className="mt-4 border border-gray-200 rounded-xl p-5 inline-block">
              <p className="text-sm text-gray-400 mb-1">이메일</p>
              <a href="mailto:zipperdoc.help@gmail.com" className="text-lg font-bold text-[#1D9E75]">
                zipperdoc.help@gmail.com
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">이런 문의를 받고 있어요</h2>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>도구 사용 중 발생한 오류 신고 (어떤 파일·상황에서 문제가 생겼는지 알려주시면 빠른 확인에 도움이 됩니다)</li>
              <li>필요한 기능 제안</li>
              <li>가이드 내용 중 잘못되었거나 오래된 정보 신고</li>
              <li>개인정보 처리와 관련된 문의 (자세한 내용은{" "}
                <Link href="/privacy" className="text-[#1D9E75] underline">개인정보처리방침</Link>
                을 함께 확인해주세요)</li>
              <li>제휴·광고 관련 문의</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">답변 관련 안내</h2>
            <p>
              가능한 한 빠르게 확인하고 답변드리려고 노력하지만, 1인이 운영하는 서비스라 답변까지
              시간이 며칠 걸릴 수 있습니다. 급하게 처리해야 하는 서류 제출 마감이 있으시다면, 문의와
              별개로 해당 기관의 공식 안내를 함께 확인해주시길 권해드립니다.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
