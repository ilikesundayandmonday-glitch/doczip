"use client";

import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#4ADE80]/40">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-5 sm:gap-8">
          <Link href="/" className="flex items-center gap-1.5 text-sm font-semibold text-[#4ADE80] hover:text-[#63E88A] transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 10.5 L12 3 L21 10.5" />
              <path d="M5 9 V20 H19 V9" />
            </svg>
            Home
          </Link>
          <Link href="/compress" className="text-sm font-semibold text-[#4ADE80] hover:text-[#63E88A] transition">이미지 압축</Link>
          <Link href="/merge" className="text-sm font-semibold text-[#4ADE80] hover:text-[#63E88A] transition">PDF 합치기</Link>
        </div>

        <Link href="/" className="flex items-center gap-2">
          <Image src="/DOCZIPlogo.png" alt="DocZip" width={38} height={38} className="rounded-lg" />
          <span className="text-lg font-bold text-[#FAFBFA]">
            Doc<span className="text-[#4ADE80]">Zip</span>
          </span>
        </Link>
      </div>
    </nav>
  );
}