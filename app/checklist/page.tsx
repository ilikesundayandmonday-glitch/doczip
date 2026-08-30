import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";
import ChecklistClient from "./ChecklistClient";

export const metadata: Metadata = {
  title: "지원사업 준비 체크리스트 | ZipperDoc",
  description: "정부지원사업 제출서류 준비 상태를 체크리스트로 관리하세요. 회원가입 없이 이 브라우저에만 저장됩니다.",
  keywords: ["지원사업 체크리스트", "제출서류 준비", "서류 준비 체크리스트", "정부지원사업 서류"],
  alternates: { canonical: "/checklist" },
  openGraph: {
    ...openGraphBase,
    title: "지원사업 준비 체크리스트 | ZipperDoc",
    description: "회원가입 없이, 이 브라우저에만 저장되는 서류 준비 체크리스트.",
    url: "/checklist",
    type: "website",
  },
};

export default function ChecklistPage() {
  return (
    <main className="min-h-screen bg-white py-14 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 홈으로
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">지원사업 준비 체크리스트</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          준비 중인 지원사업의 제출서류를 체크리스트로 관리하세요. 로그인 없이 이 브라우저에만 저장되고,
          서버로는 전송되지 않습니다.
        </p>

        <ChecklistClient />
      </div>
    </main>
  );
}
