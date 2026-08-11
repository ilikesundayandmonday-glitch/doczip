"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#4ADE80]/40">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <a href="/" onClick={goHome} className="flex items-center gap-1.5 text-sm font-semibold text-[#4ADE80] hover:text-[#63E88A] transition cursor-pointer shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 10.5 L12 3 L21 10.5" />
              <path d="M5 9 V20 H19 V9" />
            </svg>
            홈
          </a>
          <Link href="/compress" className="text-sm font-semibold text-[#4ADE80] hover:text-[#63E88A] transition shrink-0">용량 줄이기</Link>
          <Link href="/merge" className="text-sm font-semibold text-[#4ADE80] hover:text-[#63E88A] transition shrink-0">PDF 합치기</Link>
          <Link href="/split" className="text-sm font-semibold text-[#4ADE80] hover:text-[#63E88A] transition shrink-0">PDF 나누기</Link>
          <Link href="/delete-pages" className="text-sm font-semibold text-[#4ADE80] hover:text-[#63E88A] transition shrink-0">페이지 삭제</Link>
          <Link href="/guide" className="text-sm font-semibold text-[#4ADE80] hover:text-[#63E88A] transition shrink-0">가이드</Link>
        </div>

        <a href="/" onClick={goHome} className="flex items-center gap-2 cursor-pointer">
          <Image src="/DOCZIPlogo.png" alt="ZipperDoc" width={38} height={38} className="rounded-lg" />
          <span className="text-lg font-bold text-[#FAFBFA]">
            Zipper<span className="text-[#4ADE80]">Doc</span>
          </span>
        </a>
      </div>
    </nav>
  );
}