"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import {
  Checklist,
  ChecklistItem,
  FINAL_REVIEW_ITEMS,
  ItemStatus,
  TEMPLATE_PRE_STARTUP,
  TOOL_HREF,
  TOOL_LABEL,
  computeProgress,
  daysUntil,
  loadChecklists,
  newId,
  saveChecklists,
} from "@/app/lib/checklist";

type View = "create" | "list" | "detail";

const STATUS_LABEL: Record<ItemStatus, string> = {
  not_started: "아직",
  preparing: "준비중",
  ready: "완료",
  not_applicable: "해당없음",
};

const STATUS_ORDER: ItemStatus[] = ["not_started", "preparing", "ready", "not_applicable"];

const STATUS_BTN_ACTIVE: Record<ItemStatus, string> = {
  not_started: "bg-gray-100 text-gray-700 border-gray-400",
  preparing: "bg-amber-50 text-amber-700 border-amber-400",
  ready: "bg-emerald-50 text-emerald-700 border-emerald-400",
  not_applicable: "bg-gray-50 text-gray-400 border-gray-300 line-through",
};

export default function ChecklistClient() {
  const [checklists, setChecklists] = useState<Checklist[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState<View>("create");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [customName, setCustomName] = useState("");
  const [customDeadline, setCustomDeadline] = useState("");
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [toast, setToast] = useState("");

  useEffect(() => {
    // 서버에는 localStorage가 없어서(SSR), 마운트 후 클라이언트에서만 한 번 불러온다.
    // 화면이 깜빡이며 바뀌는 걸 막기 위한 정상적인 초기 로딩 패턴이라 아래 규칙은 의도적으로 끈다.
    /* eslint-disable react-hooks/set-state-in-effect */
    const loadedList = loadChecklists();
    setChecklists(loadedList);
    setView(loadedList.length > 0 ? "list" : "create");
    setLoaded(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  function persist(next: Checklist[]) {
    setChecklists(next);
    saveChecklists(next);
  }

  function updateActive(mutator: (cl: Checklist) => Checklist) {
    persist(checklists.map((c) => (c.id === activeId ? mutator(c) : c)));
  }

  function createFromTemplate() {
    const now = new Date().toISOString();
    const cl: Checklist = {
      id: newId("cl"),
      programName: "2026 예비창업패키지",
      deadline: "2026-09-15",
      status: "preparing",
      createdAt: now,
      updatedAt: now,
      items: TEMPLATE_PRE_STARTUP.map((t) => ({
        id: newId("it"),
        title: t.title,
        description: t.description,
        required: t.required,
        status: "not_started",
        note: "",
        relatedTool: t.relatedTool,
        updatedAt: now,
      })),
      finalReviewChecked: FINAL_REVIEW_ITEMS.map(() => false),
    };
    persist([...checklists, cl]);
    setActiveId(cl.id);
    setView("detail");
    track("체크리스트_생성_템플릿");
    setToast("체크리스트가 만들어졌어요");
  }

  function createCustom() {
    if (!customName.trim()) {
      setToast("사업명을 입력해주세요");
      return;
    }
    const now = new Date().toISOString();
    const cl: Checklist = {
      id: newId("cl"),
      programName: customName.trim(),
      deadline: customDeadline || undefined,
      status: "preparing",
      createdAt: now,
      updatedAt: now,
      items: [],
      finalReviewChecked: FINAL_REVIEW_ITEMS.map(() => false),
    };
    persist([...checklists, cl]);
    setActiveId(cl.id);
    setCustomName("");
    setCustomDeadline("");
    setShowCustomForm(false);
    setView("detail");
    track("체크리스트_생성_직접입력");
    setToast("체크리스트가 만들어졌어요 — 항목을 추가해보세요");
  }

  function addCustomItem() {
    const name = window.prompt("추가할 서류 이름을 입력해주세요");
    if (!name || !name.trim()) return;
    const now = new Date().toISOString();
    updateActive((cl) => ({
      ...cl,
      updatedAt: now,
      items: [
        ...cl.items,
        { id: newId("it"), title: name.trim(), required: true, status: "not_started", note: "", updatedAt: now },
      ],
    }));
  }

  function setItemStatus(itemId: string, status: ItemStatus) {
    const now = new Date().toISOString();
    updateActive((cl) => ({
      ...cl,
      updatedAt: now,
      items: cl.items.map((i) => (i.id === itemId ? { ...i, status, updatedAt: now } : i)),
    }));
  }

  function setItemNote(itemId: string, note: string) {
    updateActive((cl) => ({
      ...cl,
      items: cl.items.map((i) => (i.id === itemId ? { ...i, note } : i)),
    }));
  }

  function toggleFinalReview(idx: number, checked: boolean) {
    updateActive((cl) => {
      const next = [...cl.finalReviewChecked];
      next[idx] = checked;
      return { ...cl, finalReviewChecked: next };
    });
  }

  function markSubmitted() {
    const now = new Date().toISOString();
    updateActive((cl) => ({ ...cl, status: "submitted", submittedAt: now, updatedAt: now }));
    track("체크리스트_제출완료");
    setToast("제출 완료로 표시했어요");
  }

  function confirmDelete() {
    persist(checklists.filter((c) => c.id !== deleteTargetId));
    setDeleteTargetId(null);
    setView("list");
    setToast("삭제했어요");
  }

  function downloadJson(cl: Checklist) {
    const blob = new Blob([JSON.stringify(cl, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = cl.programName.replace(/\s+/g, "_") + "_체크리스트.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    setToast("JSON 파일을 다운로드했어요");
  }

  function copyKakaoText(cl: Checklist) {
    const p = computeProgress(cl);
    const lines = [
      "[" + cl.programName + "] 준비 현황 (" + p.overallPct + "%)",
      cl.deadline ? "마감: " + cl.deadline : "",
      "",
      ...cl.items.map((i) => {
        const mark = i.status === "ready" ? "✅" : i.status === "preparing" ? "🟡" : i.status === "not_applicable" ? "➖" : "⬜";
        return mark + " " + i.title + (i.required ? " (필수)" : "");
      }),
    ].filter(Boolean);
    const text = lines.join("\n");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        () => setToast("복사했어요 — 카카오톡 '나에게 보내기'에 붙여넣어보세요"),
        () => {
          window.prompt("아래 내용을 복사하세요 (Cmd/Ctrl+C):", text);
        }
      );
    } else {
      window.prompt("아래 내용을 복사하세요 (Cmd/Ctrl+C):", text);
    }
  }

  function downloadIcs(cl: Checklist) {
    if (!cl.deadline) {
      setToast("마감일이 없는 체크리스트예요");
      return;
    }
    const dt = cl.deadline.replace(/-/g, "");
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "SUMMARY:" + cl.programName + " 제출 마감",
      "DESCRIPTION:ZipperDoc 체크리스트에서 준비 상태를 확인하세요.",
      "DTSTART;VALUE=DATE:" + dt,
      "DTEND;VALUE=DATE:" + dt,
      "BEGIN:VALARM",
      "TRIGGER:-P3D",
      "ACTION:DISPLAY",
      "DESCRIPTION:마감 3일 전 - 필수서류 최종 확인",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = cl.programName.replace(/\s+/g, "_") + "_마감일.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    setToast("캘린더 파일을 다운로드했어요");
  }

  const activeChecklist = useMemo(
    () => checklists.find((c) => c.id === activeId) ?? null,
    [checklists, activeId]
  );

  if (!loaded) {
    return <div className="text-center text-gray-400 py-20 text-sm">불러오는 중...</div>;
  }

  return (
    <div>
      <div className="flex gap-1 border-b border-gray-200 mb-7">
        {(
          [
            ["create", "체크리스트 만들기"],
            ["list", "내 준비 현황"],
          ] as [View, string][]
        ).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setView(key)}
            className={`px-4 py-3 text-sm font-semibold -mb-px border-b-2 transition ${
              view === key ? "text-[#1D9E75] border-[#1D9E75]" : "text-gray-400 border-transparent hover:text-gray-600"
            }`}
          >
            {label}
          </button>
        ))}
        {view === "detail" && (
          <span className="px-4 py-3 text-sm font-semibold text-[#1D9E75] border-b-2 border-[#1D9E75] -mb-px">
            체크리스트 상세
          </span>
        )}
      </div>

      {view === "create" && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={createFromTemplate}
              className="text-left border border-gray-200 rounded-2xl p-5 hover:border-[#1D9E75] hover:shadow-md transition"
            >
              <p className="text-xs font-bold text-[#1D9E75] mb-2">템플릿에서 시작</p>
              <p className="font-bold text-gray-900 mb-1">2026 예비창업패키지</p>
              <p className="text-sm text-gray-500 leading-relaxed">필수서류 5개 + 선택서류 1개가 자동으로 채워져요.</p>
            </button>
            <button
              onClick={() => setShowCustomForm(true)}
              className="text-left border border-gray-200 rounded-2xl p-5 hover:border-[#1D9E75] hover:shadow-md transition"
            >
              <p className="text-xs font-bold text-[#1D9E75] mb-2">직접 만들기</p>
              <p className="font-bold text-gray-900 mb-1">사업명을 직접 입력</p>
              <p className="text-sm text-gray-500 leading-relaxed">이름과 마감일만 넣고 항목은 직접 추가하세요.</p>
            </button>
          </div>

          {showCustomForm && (
            <div className="mt-5 border border-gray-200 rounded-2xl p-5">
              <div className="mb-3">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">사업명</label>
                <input
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  type="text"
                  placeholder="예: 청년창업사관학교"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#1D9E75]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">접수 마감일 (선택)</label>
                <input
                  value={customDeadline}
                  onChange={(e) => setCustomDeadline(e.target.value)}
                  type="date"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#1D9E75]"
                />
              </div>
              <button onClick={createCustom} className="bg-[#1D9E75] text-white font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-[#17805f] transition">
                체크리스트 만들기
              </button>
            </div>
          )}
        </div>
      )}

      {view === "list" && (
        <div className="flex flex-col gap-3">
          {checklists.length === 0 && (
            <p className="text-center text-gray-400 text-sm py-16">
              아직 만든 체크리스트가 없어요.{" "}
              <button onClick={() => setView("create")} className="text-[#1D9E75] underline font-medium">
                체크리스트 만들기
              </button>
              에서 시작해보세요.
            </p>
          )}
          {[...checklists]
            .sort((a, b) => (a.deadline ? daysUntil(a.deadline) : 9999) - (b.deadline ? daysUntil(b.deadline) : 9999))
            .map((cl) => {
              const p = computeProgress(cl);
              const d = cl.deadline ? daysUntil(cl.deadline) : null;
              return (
                <button
                  key={cl.id}
                  onClick={() => {
                    setActiveId(cl.id);
                    setView("detail");
                  }}
                  className="text-left border border-gray-200 rounded-2xl p-4 sm:p-5 hover:border-[#1D9E75] hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-gray-900">
                      {cl.programName}
                      {cl.status === "submitted" ? " · 제출완료" : ""}
                    </span>
                    {d !== null && (
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${d <= 7 ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-600"}`}>
                        {d >= 0 ? `D-${d}` : "마감 지남"}
                      </span>
                    )}
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-[#1D9E75] rounded-full transition-all" style={{ width: `${p.overallPct}%` }} />
                  </div>
                  <p className="text-xs text-gray-500">
                    전체 {p.overallPct}% · 필수서류 {p.requiredDone}/{p.requiredTotal} 완료
                  </p>
                </button>
              );
            })}
        </div>
      )}

      {view === "detail" && activeChecklist && (
        <DetailView
          cl={activeChecklist}
          onBack={() => setView("list")}
          onAddItem={addCustomItem}
          onSetStatus={setItemStatus}
          onSetNote={setItemNote}
          onToggleReview={toggleFinalReview}
          onSubmit={markSubmitted}
          onDelete={() => setDeleteTargetId(activeChecklist.id)}
          onDownloadJson={() => downloadJson(activeChecklist)}
          onCopyKakao={() => copyKakaoText(activeChecklist)}
          onDownloadIcs={() => downloadIcs(activeChecklist)}
        />
      )}

      {deleteTargetId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-5 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <p className="font-bold text-gray-900 mb-2">이 체크리스트를 삭제할까요?</p>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">
              삭제하면 되돌릴 수 없어요. 계속하기 전에 백업이 필요하면 먼저 다운로드해주세요.
            </p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setDeleteTargetId(null)} className="text-sm font-semibold px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
                취소
              </button>
              <button onClick={confirmDelete} className="text-sm font-semibold px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition">
                삭제하기
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-5 py-3 rounded-xl shadow-lg z-50 max-w-[90%] text-center">
          {toast}
        </div>
      )}
    </div>
  );
}

function DetailView({
  cl,
  onBack,
  onAddItem,
  onSetStatus,
  onSetNote,
  onToggleReview,
  onSubmit,
  onDelete,
  onDownloadJson,
  onCopyKakao,
  onDownloadIcs,
}: {
  cl: Checklist;
  onBack: () => void;
  onAddItem: () => void;
  onSetStatus: (itemId: string, status: ItemStatus) => void;
  onSetNote: (itemId: string, note: string) => void;
  onToggleReview: (idx: number, checked: boolean) => void;
  onSubmit: () => void;
  onDelete: () => void;
  onDownloadJson: () => void;
  onCopyKakao: () => void;
  onDownloadIcs: () => void;
}) {
  const p = computeProgress(cl);
  const d = cl.deadline ? daysUntil(cl.deadline) : null;
  const buckets: Record<ItemStatus, ChecklistItem[]> = { not_started: [], preparing: [], ready: [], not_applicable: [] };
  cl.items.forEach((i) => buckets[i.status].push(i));
  const bucketLabels: Record<ItemStatus, string> = {
    not_started: "아직 준비 못함",
    preparing: "준비 중",
    ready: "준비 완료",
    not_applicable: "해당 없음",
  };
  const frChecked = cl.finalReviewChecked.filter(Boolean).length;
  const frDone = frChecked === FINAL_REVIEW_ITEMS.length;
  const frLocked = !p.requiredComplete;

  return (
    <div>
      <button onClick={onBack} className="text-sm text-gray-500 hover:text-gray-800 mb-5 transition">
        ← 내 준비 현황으로
      </button>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6 text-sm text-emerald-800 leading-relaxed">
        🔒 개인정보 걱정 없어요 — 이 체크리스트는 회원가입이나 서버 저장 없이, 지금 쓰는 이 브라우저에만 저장돼요.
        다른 기기나 다른 브라우저로 들어오면 안 보일 수 있고, 브라우저 데이터를 지우면 같이 사라져요. 중요한
        내용은 아래 백업 버튼으로 저장해두시는 걸 권해드려요.
      </div>

      <div className="border border-gray-200 rounded-2xl p-5 mb-6">
        <div className="flex justify-between items-start gap-3 mb-3">
          <h2 className="text-lg font-bold text-gray-900">{cl.programName}</h2>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 자동 저장됨
          </span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3">
          <div className="h-full bg-[#1D9E75] rounded-full transition-all" style={{ width: `${p.overallPct}%` }} />
        </div>
        <div className="flex flex-wrap gap-5 text-xs text-gray-500">
          <span>
            전체 진행률 <b className="text-gray-900 text-sm">{p.overallPct}%</b>
          </span>
          <span>
            필수서류{" "}
            <b className="text-gray-900 text-sm">
              {p.requiredDone}/{p.requiredTotal}
            </b>
          </span>
          {d !== null && (
            <span>
              마감까지 <b className="text-gray-900 text-sm">{d >= 0 ? `D-${d}` : "마감 지남"}</b>
            </span>
          )}
        </div>
      </div>

      {STATUS_ORDER.filter((s) => buckets[s].length > 0).map((s) => (
        <div key={s}>
          <p className="text-xs font-bold text-gray-500 mt-6 mb-2">
            {bucketLabels[s]} ({buckets[s].length})
          </p>
          <div className="flex flex-col gap-2">
            {buckets[s].map((item) => (
              <ItemCard key={item.id} item={item} onSetStatus={onSetStatus} onSetNote={onSetNote} />
            ))}
          </div>
        </div>
      ))}

      <button onClick={onAddItem} className="mt-4 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition">
        + 항목 직접 추가
      </button>

      <div className={`mt-7 border-2 border-dashed rounded-2xl p-5 ${frLocked ? "border-gray-200 opacity-50" : "border-[#1D9E75]"}`}>
        <p className="font-bold text-gray-900 mb-1">제출 직전 최종 검수</p>
        <p className="text-xs text-gray-500 mb-3">
          {frLocked
            ? "필수서류를 모두 준비 완료로 표시하면 최종 검수를 시작할 수 있어요."
            : "체크박스를 다 채웠다고 끝이 아니에요 — 제출 전에 한 번 더 확인하세요."}
        </p>
        {FINAL_REVIEW_ITEMS.map((label, idx) => (
          <label key={idx} className="flex items-center gap-2.5 py-1.5 text-sm text-gray-700">
            <input
              type="checkbox"
              disabled={frLocked}
              checked={cl.finalReviewChecked[idx] || false}
              onChange={(e) => onToggleReview(idx, e.target.checked)}
              className="w-4 h-4 accent-[#1D9E75]"
            />
            {label}
          </label>
        ))}
        <button
          onClick={onSubmit}
          disabled={!frDone || cl.status === "submitted"}
          className="mt-3 bg-[#1D9E75] text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-[#17805f] transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {cl.status === "submitted" ? "제출 완료로 표시됨 ✓" : "제출 완료로 표시하기"}
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-7 pt-5 border-t border-gray-100">
        <button onClick={onDownloadJson} className="text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 px-3.5 py-2 rounded-lg transition">
          ⬇ JSON 백업 다운로드
        </button>
        <button onClick={onCopyKakao} className="text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 px-3.5 py-2 rounded-lg transition">
          💬 카카오톡용 텍스트 복사
        </button>
        <button onClick={onDownloadIcs} className="text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 px-3.5 py-2 rounded-lg transition">
          📅 캘린더에 마감일 추가
        </button>
        <button onClick={onDelete} className="text-xs font-semibold bg-red-50 text-red-600 hover:bg-red-100 px-3.5 py-2 rounded-lg transition">
          삭제
        </button>
      </div>
    </div>
  );
}

function ItemCard({
  item,
  onSetStatus,
  onSetNote,
}: {
  item: ChecklistItem;
  onSetStatus: (itemId: string, status: ItemStatus) => void;
  onSetNote: (itemId: string, note: string) => void;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className="font-bold text-sm text-gray-900 flex items-center gap-2">
          {item.title}
          {item.required ? (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-600">필수</span>
          ) : (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">선택</span>
          )}
        </span>
        <div className="flex gap-1 flex-wrap">
          {STATUS_ORDER.map((s) => (
            <button
              key={s}
              onClick={() => onSetStatus(item.id, s)}
              className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${
                item.status === s ? STATUS_BTN_ACTIVE[s] : "bg-white text-gray-500 border-gray-200"
              }`}
            >
              {STATUS_LABEL[s]}
            </button>
          ))}
        </div>
      </div>
      {item.description && <p className="text-xs text-gray-500 mt-2 leading-relaxed">{item.description}</p>}
      {item.relatedTool && (
        <Link
          href={TOOL_HREF[item.relatedTool]}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D9E75] bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full mt-2.5"
        >
          🔧 {TOOL_LABEL[item.relatedTool]}
        </Link>
      )}
      <textarea
        value={item.note}
        onChange={(e) => onSetNote(item.id, e.target.value)}
        placeholder="메모 (선택)"
        className="w-full mt-2.5 px-2.5 py-2 border border-dashed border-gray-300 rounded-lg text-xs resize-y min-h-[32px] focus:outline-none focus:border-[#1D9E75]"
      />
      <p className="text-[10.5px] text-red-500 mt-1">⚠️ 주민등록번호·계좌번호 등 민감정보는 메모에 적지 마세요</p>
    </div>
  );
}
