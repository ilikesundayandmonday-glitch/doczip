// 지원사업 준비 체크리스트 — 서버 없이 브라우저 localStorage에만 저장한다.
// (설계 근거: 프로젝트 지식의 "zipperdoc_체크리스트_기능_설계.md" 참고)

export type ChecklistStatus = "preparing" | "ready" | "submitted" | "archived";
export type ItemStatus = "not_started" | "preparing" | "ready" | "not_applicable";
export type RelatedTool = "compress" | "merge" | "split" | "delete_pages";

export type ChecklistItem = {
  id: string;
  title: string;
  description?: string;
  required: boolean;
  status: ItemStatus;
  note: string;
  relatedTool?: RelatedTool;
  updatedAt: string;
};

export type Checklist = {
  id: string;
  programName: string;
  deadline?: string; // YYYY-MM-DD
  status: ChecklistStatus;
  createdAt: string;
  updatedAt: string;
  submittedAt?: string;
  items: ChecklistItem[];
  finalReviewChecked: boolean[];
};

export const FINAL_REVIEW_ITEMS: string[] = [
  "모든 필수 서류의 파일 형식(PDF/JPG 등)이 맞는지 확인",
  "각 파일 용량이 제출 기준을 넘지 않는지 확인",
  "서류 발급일이 유효 기간 이내인지 확인",
  "필요한 서명·직인이 빠지지 않았는지 확인",
  "페이지 방향이 거꾸로 되어있지 않은지 확인",
  "파일명이 공고문에서 요구하는 형식과 맞는지 확인",
];

export const TOOL_LABEL: Record<RelatedTool, string> = {
  compress: "용량 줄이기로 이동",
  merge: "서류 합치기로 이동",
  split: "페이지 나누기로 이동",
  delete_pages: "페이지 삭제로 이동",
};

export const TOOL_HREF: Record<RelatedTool, string> = {
  compress: "/compress",
  merge: "/merge",
  split: "/split",
  delete_pages: "/delete-pages",
};

export const TEMPLATE_PRE_STARTUP: {
  title: string;
  required: boolean;
  description: string;
  relatedTool?: RelatedTool;
}[] = [
  { title: "사업자등록증명원", required: true, description: "국세청 홈택스에서 발급, 3개월 이내 발급분 권장." },
  { title: "통장사본", required: true, description: "사업용 계좌 통장 첫 페이지.", relatedTool: "merge" },
  { title: "국세·지방세 완납증명서", required: true, description: "미납 세금이 있으면 안 됩니다. 홈택스·위택스에서 발급.", relatedTool: "merge" },
  { title: "신분증 사본", required: true, description: "주민등록증 또는 운전면허증 앞면.", relatedTool: "compress" },
  { title: "사업계획서 PDF", required: true, description: "공고문 양식에 맞춰 작성 후 PDF로 변환.", relatedTool: "compress" },
  { title: "창업아이템 소개자료", required: false, description: "선택 제출 서류입니다.", relatedTool: "split" },
];

const STORAGE_KEY = "zipperdoc_checklists_v1";

export function loadChecklists(): Checklist[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as Checklist[];
  } catch {
    return [];
  }
}

export function saveChecklists(list: Checklist[]): boolean {
  if (typeof window === "undefined") return false;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return true;
  } catch {
    return false;
  }
}

export function newId(prefix: string): string {
  const rand = Math.random().toString(36).slice(2, 9);
  return prefix + "_" + Date.now().toString(36) + rand;
}

export function computeProgress(cl: Checklist) {
  const applicable = cl.items.filter((i) => i.status !== "not_applicable");
  const requiredApplicable = applicable.filter((i) => i.required);
  const requiredDone = requiredApplicable.filter((i) => i.status === "ready");
  const allDone = applicable.filter((i) => i.status === "ready");
  return {
    overallPct: applicable.length ? Math.round((allDone.length / applicable.length) * 100) : 0,
    requiredDone: requiredDone.length,
    requiredTotal: requiredApplicable.length,
    requiredComplete: requiredApplicable.length > 0 && requiredDone.length === requiredApplicable.length,
  };
}

export function daysUntil(dateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr + "T00:00:00");
  return Math.round((target.getTime() - today.getTime()) / 86400000);
}
