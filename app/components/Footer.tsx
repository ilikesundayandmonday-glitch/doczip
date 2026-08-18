import Link from "next/link";
import { SAFETY_LINE } from "@/app/structured-data";

const TOOLS = [
  { href: "/compress", label: "사진·이미지 용량 줄이기" },
  { href: "/merge", label: "PDF 합치기" },
  { href: "/split", label: "PDF 나누기" },
  { href: "/delete-pages", label: "PDF 페이지 삭제" },
];

const GUIDES = [
  { href: "/guide/submission-checklist", label: "제출 서류 체크리스트" },
  { href: "/guide/document-rejected", label: "서류 반려 사유와 해결법" },
  { href: "/guide/bankbook-pdf", label: "통장사본 PDF로 합치기" },
  { href: "/guide/file-safety", label: "통장사본 올려도 될까?" },
];

const ABOUT = [
  { href: "/safety", label: "ZipperDoc이 안전한 이유" },
  { href: "/guide", label: "서류 제출 가이드 전체" },
  { href: "/privacy", label: "개인정보처리방침" },
];

function Column({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-xs tracking-[0.15em] text-[#4ADE80] font-medium mb-4">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-[#A8B2AC] hover:text-[#FAFBFA] transition">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1C1F1D] px-6 py-14 mt-auto">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          <Column title="도구" items={TOOLS} />
          <Column title="가이드" items={GUIDES} />
          <Column title="ZipperDoc" items={ABOUT} />
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-[#8B968F] leading-relaxed">
            {SAFETY_LINE}{" "}
            <Link href="/safety" className="text-[#4ADE80] hover:text-[#63E88A] transition">
              왜 그런가요 →
            </Link>
          </p>
          <p className="text-sm text-[#5F6B64] shrink-0">© 2026 ZipperDoc</p>
        </div>
      </div>
    </footer>
  );
}
