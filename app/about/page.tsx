import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "운영자 소개 | ZipperDoc",
  description: "ZipperDoc을 만들고 운영하는 사람과, 서비스를 만들 때 지키는 원칙을 소개합니다.",
  alternates: { canonical: "/about" },
  openGraph: {
    ...openGraphBase,
    title: "운영자 소개 | ZipperDoc",
    description: "ZipperDoc을 만들고 운영하는 사람과, 서비스를 만들 때 지키는 원칙.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 홈으로
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">운영자 소개</h1>
        <p className="text-sm text-gray-400 mb-10">최종 수정일: 2026년 8월 30일</p>

        <div className="flex flex-col gap-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">무엇을 하는 서비스인가요</h2>
            <p>
              ZipperDoc은 정부지원사업, 대출, 각종 신청 절차에서 자주 요구되는 통장사본·사업자등록증
              같은 제출서류를 정리하는 무료 도구입니다. 여러 사진과 PDF를 하나로 합치고, 필요한 페이지만
              남기고, 용량을 제출 기준에 맞추는 작업을 브라우저 안에서 바로 처리합니다. 파일을 서버에
              올리지 않기 때문에 회원가입도, 설치도 필요 없습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">누가 운영하나요</h2>
            <p>
              ZipperDoc은 이대흥이 혼자 기획·개발·운영하는 1인 서비스입니다. 별도의 법인이나 팀 없이,
              개인이 만들고 책임지고 있습니다. 문의나 오류 신고는{" "}
              <Link href="/contact" className="text-[#1D9E75] underline">문의하기</Link>{" "}
              페이지를 통해 직접 저에게 전달됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">서비스를 만들 때 지키는 원칙</h2>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>
                <strong className="text-gray-900">파일은 서버로 보내지 않습니다.</strong> 모든 처리는
                이용자의 브라우저 안에서 이루어집니다. 원리는{" "}
                <Link href="/safety" className="text-[#1D9E75] underline">ZipperDoc이 안전한 이유</Link>
                에 자세히 설명해두었습니다.
              </li>
              <li>
                <strong className="text-gray-900">지원하지 않는 기능을 지원한다고 표시하지 않습니다.</strong>{" "}
                실제로 되지 않는 기능을 화면이나 문구에 넣지 않으려고 합니다. 확인 중 발견하시면
                알려주세요.
              </li>
              <li>
                <strong className="text-gray-900">확인되지 않은 정보를 사실처럼 보여주지 않습니다.</strong>{" "}
                예를 들어 정부지원사업 공고 정보처럼 실제 기관 데이터와 연결되지 않은 화면은 &lsquo;예시&rsquo;
                또는 &lsquo;준비 중&rsquo;임을 명확히 표시합니다.
              </li>
              <li>
                <strong className="text-gray-900">지금 무료인 핵심 기능은 갑자기 유료로 바꾸지 않습니다.</strong>{" "}
                앞으로 유료 기능을 추가하더라도, 현재 제공하는 서류 정리 기능은 계속 무료로 유지할
                계획입니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">더 알아보기</h2>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li><Link href="/safety" className="text-[#1D9E75] underline">ZipperDoc이 안전한 이유</Link></li>
              <li><Link href="/privacy" className="text-[#1D9E75] underline">개인정보처리방침</Link></li>
              <li><Link href="/terms" className="text-[#1D9E75] underline">이용약관</Link></li>
              <li><Link href="/editorial-policy" className="text-[#1D9E75] underline">콘텐츠 작성 기준</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
