"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CATEGORIES, STAGES, SAMPLE_PROGRAMS, type ProgramCategory, type ProgramStage } from "./data";

export default function ProgramsClient() {
  const [category, setCategory] = useState<ProgramCategory | "전체">("전체");
  const [stage, setStage] = useState<ProgramStage | "전체">("전체");

  const filtered = useMemo(() => {
    return SAMPLE_PROGRAMS.filter((p) => {
      if (category !== "전체" && p.category !== category) return false;
      if (stage !== "전체" && p.stage !== stage) return false;
      return true;
    });
  }, [category, stage]);

  const chipClass = (active: boolean) =>
    `px-3 py-1.5 rounded-full text-sm font-medium border transition ${
      active
        ? "border-[#1D9E75] bg-green-50 text-[#1D9E75]"
        : "border-gray-200 text-gray-500 hover:border-gray-300"
    }`;

  return (
    <div>
      <div className="flex flex-col gap-4 mb-8">
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">지원분야</p>
          <div className="flex flex-wrap gap-2">
            <button className={chipClass(category === "전체")} onClick={() => setCategory("전체")}>전체</button>
            {CATEGORIES.map((c) => (
              <button key={c} className={chipClass(category === c)} onClick={() => setCategory(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">창업 단계</p>
          <div className="flex flex-wrap gap-2">
            <button className={chipClass(stage === "전체")} onClick={() => setStage("전체")}>전체</button>
            {STAGES.map((s) => (
              <button key={s} className={chipClass(stage === s)} onClick={() => setStage(s)}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-4">{filtered.length}건</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((p) => (
          <div key={p.id} className="border border-gray-200 rounded-2xl p-5 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-gray-900 leading-snug">{p.title}</h3>
              <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200">
                예시
              </span>
            </div>
            <p className="text-sm text-gray-500">{p.agency}</p>
            <p className="text-sm text-gray-700 leading-relaxed">{p.summary}</p>

            <div className="flex flex-wrap gap-1.5">
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">{p.category}</span>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">{p.region}</span>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">{p.stage}</span>
            </div>

            <div className="text-sm text-gray-600 flex flex-col gap-0.5 mt-1">
              <span><strong className="text-gray-900">지원 규모</strong> {p.budget}</span>
              <span><strong className="text-gray-900">접수</strong> {p.deadline}</span>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              <a
                href={p.category === "금융" ? "https://www.bizinfo.go.kr" : "https://www.k-startup.go.kr"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-3 py-1.5 rounded-lg border border-gray-200 text-gray-700 hover:border-[#1D9E75] hover:text-[#1D9E75] transition"
              >
                공식 사이트에서 확인 →
              </a>
              {p.guideHref && (
                <Link
                  href={p.guideHref}
                  className="text-sm font-medium px-3 py-1.5 rounded-lg border border-[#1D9E75] text-[#1D9E75] hover:bg-green-50 transition"
                >
                  준비 가이드 보기
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-16">조건에 맞는 공고가 없어요. 필터를 바꿔보세요.</p>
      )}
    </div>
  );
}
