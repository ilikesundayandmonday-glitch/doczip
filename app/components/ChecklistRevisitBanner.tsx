"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Checklist, computeProgress, daysUntil, loadChecklists } from "@/app/lib/checklist";

export default function ChecklistRevisitBanner() {
  const [nearest, setNearest] = useState<Checklist | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 서버에는 localStorage가 없어서(SSR), 마운트 후 클라이언트에서만 한 번 불러온다.
    /* eslint-disable react-hooks/set-state-in-effect */
    const all = loadChecklists().filter((c) => c.status !== "submitted" && c.status !== "archived");
    if (all.length === 0) return;
    const sorted = [...all].sort(
      (a, b) => (a.deadline ? daysUntil(a.deadline) : 9999) - (b.deadline ? daysUntil(b.deadline) : 9999)
    );
    setNearest(sorted[0]);
    setCount(all.length);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  if (!nearest) return null;

  const p = computeProgress(nearest);
  const remaining = p.requiredTotal - p.requiredDone;
  const d = nearest.deadline ? daysUntil(nearest.deadline) : null;
  const title = count > 1 ? `준비 중인 체크리스트 ${count}개` : "준비 중인 체크리스트 1개";
  const subParts = [remaining > 0 ? `필수서류 ${remaining}개 남음` : "필수서류 준비 완료"];
  if (d !== null) subParts.push(d >= 0 ? `D-${d}` : "마감 지남");

  return (
    <div className="px-6 -mt-2 mb-2">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/checklist"
          className="flex items-center justify-between gap-4 bg-white border border-emerald-200 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:border-[#1D9E75] transition"
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-lg shrink-0">📌</span>
            <div>
              <p className="font-bold text-gray-900 text-sm sm:text-base">{title}</p>
              <p className="text-xs sm:text-sm text-gray-500">{subParts.join(" · ")}</p>
            </div>
          </div>
          <span className="shrink-0 text-xs sm:text-sm font-bold text-[#1D9E75]">이어서 준비하기 →</span>
        </Link>
      </div>
    </div>
  );
}
