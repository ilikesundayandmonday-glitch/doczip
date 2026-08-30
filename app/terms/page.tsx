import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "이용약관 | ZipperDoc",
  description: "ZipperDoc 서비스 이용약관입니다.",
  alternates: { canonical: "/terms" },
  openGraph: {
    ...openGraphBase,
    title: "이용약관 | ZipperDoc",
    description: "ZipperDoc 서비스 이용약관입니다.",
    url: "/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 홈으로
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">이용약관</h1>
        <p className="text-sm text-gray-400 mb-4">최종 수정일: 2026년 8월 30일</p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-10 text-sm text-gray-600 leading-relaxed">
          이 약관은 법률 전문가가 작성한 법률 자문이 아니며, ZipperDoc을 무료로 이용하실 때 서로
          확인해두면 좋은 내용을 정리한 참고용 문서입니다. 법적으로 정확한 판단이 필요하시다면
          변호사 등 전문가와 상담하시길 권해드립니다.
        </div>

        <div className="flex flex-col gap-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. 목적</h2>
            <p>
              본 약관은 이대흥(이하 &lsquo;운영자&rsquo;)이 제공하는 ZipperDoc(zipperdoc.com, 이하
              &lsquo;서비스&rsquo;)의 이용 조건을 안내하기 위한 것입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. 서비스 내용</h2>
            <p className="mb-3">
              서비스는 이용자의 브라우저 안에서 파일을 처리하는 다음 무료 도구를 제공합니다.
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li>사진·이미지 용량 줄이기</li>
              <li>PDF·사진 합치기</li>
              <li>PDF 나누기</li>
              <li>PDF 페이지 삭제</li>
              <li>서류 준비 관련 가이드 콘텐츠 제공</li>
            </ul>
            <p className="mt-3">
              회원가입 없이 누구나 이용할 수 있으며, 업로드한 파일은 서버로 전송되지 않고 처리가
              끝나면 브라우저에서 사라집니다. 자세한 구조는{" "}
              <Link href="/safety" className="text-[#1D9E75] underline">ZipperDoc이 안전한 이유</Link>
              에서 확인하실 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. 이용자의 책임</h2>
            <p className="mb-3">
              이용자는 본인이 업로드하는 파일의 내용과 처리 결과에 대해 스스로 책임집니다. 특히
              정부지원사업, 대출, 각종 신청 절차에 제출하는 서류의 형식·용량·페이지 수 기준은
              기관마다, 공고마다 다를 수 있습니다.
            </p>
            <p>
              서비스가 제공하는 가이드와 안내는 일반적인 참고 정보이며, 실제 제출 전에는 반드시 해당
              공고문이나 담당 기관의 공식 안내로 최종 기준을 확인해주시기 바랍니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. 서비스 제공자의 책임 범위</h2>
            <p className="mb-3">
              서비스는 무료로 제공되며, 처리 결과의 완전성이나 특정 기관·공고의 제출 기준과의
              일치를 보증하지 않습니다. 서비스 이용 중 발생한 파일 손실이나 지연 등에 대해 운영자는
              고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.
            </p>
            <p>
              다만 오류나 문제를 발견하시면{" "}
              <Link href="/contact" className="text-[#1D9E75] underline">문의하기</Link>
              를 통해 알려주시기 바랍니다. 확인 후 최대한 빠르게 수정하겠습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. 콘텐츠 저작권</h2>
            <p>
              서비스에 게재된 가이드 글, 디자인, 로고 등 콘텐츠의 저작권은 운영자에게 있습니다.
              출처를 밝히지 않은 무단 복제·재배포는 삼가주시기 바랍니다. 인용이나 출처 표기를
              동반한 링크 공유는 환영합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. 광고</h2>
            <p>
              서비스는 운영비 충당을 위해 Google AdSense 광고를 게재하고 있습니다. 광고 관련 쿠키
              사용 등 자세한 내용은{" "}
              <Link href="/privacy" className="text-[#1D9E75] underline">개인정보처리방침</Link>
              에서 확인하실 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. 서비스 변경 및 중단</h2>
            <p>
              서비스는 무료로 제공되는 개인 프로젝트의 특성상, 기능이 추가되거나 변경될 수 있고
              부득이한 사정으로 일부 또는 전부가 중단될 수 있습니다. 가능한 경우 사전에 서비스 화면을
              통해 안내하겠습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. 약관의 변경</h2>
            <p>
              본 약관은 서비스 내용이나 관련 법령의 변경에 따라 수정될 수 있으며, 변경 시 본 페이지를
              통해 공지합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. 문의</h2>
            <p>
              약관 관련 문의는{" "}
              <Link href="/contact" className="text-[#1D9E75] underline">문의하기</Link>
              페이지 또는 zipperdoc.help@gmail.com으로 연락해주시기 바랍니다.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
