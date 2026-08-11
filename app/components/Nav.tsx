"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const PDF_TOOLS = [
  { href: "/merge", label: "PDF 합치기" },
  { href: "/split", label: "PDF 나누기" },
  { href: "/delete-pages", label: "PDF 페이지 삭제" },
  { href: "/merge", label: "사진을 PDF로 변환" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pdfActive = PDF_TOOLS.some((t) => pathname === t.href.split("?")[0]);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const linkClass = "text-sm font-semibold text-[#4ADE80] hover:text-[#63E88A] transition shrink-0";

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#4ADE80]/40">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-5 sm:gap-7">
          <a href="/" onClick={goHome} className={`${linkClass} flex items-center gap-1.5 cursor-pointer`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 10.5 L12 3 L21 10.5" />
              <path d="M5 9 V20 H19 V9" />
            </svg>
            홈
          </a>

          <Link href="/compress" className={linkClass}>용량 줄이기</Link>

          <div
            ref={menuRef}
            className="relative shrink-0"
            onMouseEnter={() => { cancelClose(); setOpen(true); }}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-haspopup="true"
              className={`flex items-center gap-1 text-sm font-semibold transition ${pdfActive || open ? "text-[#FAFBFA]" : "text-[#4ADE80] hover:text-[#63E88A]"}`}
            >
              PDF
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {open && (
              <div className="absolute left-0 top-full pt-3">
                <div className="w-52 rounded-xl border border-[#4ADE80]/25 bg-[#0F1310] p-1.5 shadow-xl shadow-black/50">
                  {PDF_TOOLS.map((tool) => {
                    const isCurrent = pathname === tool.href.split("?")[0];
                    return (
                      <Link
                        key={tool.label}
                        href={tool.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-lg px-3 py-2.5 text-sm transition ${isCurrent ? "bg-[#4ADE80]/12 text-[#FAFBFA]" : "text-[#A8B2AC] hover:bg-white/5 hover:text-[#FAFBFA]"}`}
                      >
                        {tool.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link href="/guide" className={linkClass}>가이드</Link>
        </div>

        <a href="/" onClick={goHome} className="flex items-center gap-2 cursor-pointer shrink-0">
          <Image src="/DOCZIPlogo.png" alt="ZipperDoc" width={38} height={38} className="rounded-lg" />
          <span className="text-lg font-bold text-[#FAFBFA]">
            Zipper<span className="text-[#4ADE80]">Doc</span>
          </span>
        </a>
      </div>
    </nav>
  );
}
