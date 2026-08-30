// ⚠️ 지금은 실제 정부 공고 데이터가 아니라 "예시" 데이터입니다.
// 기업마당(bizinfo.go.kr)·K-스타트업(k-startup.go.kr) Open API 인증키를 받으면
// 이 파일 대신 실제 API에서 가져온 데이터로 교체할 예정입니다.
// 그 전까지는 화면에도 "예시" 표시를 그대로 유지해주세요 — 진짜 공고처럼 보이면 안 됩니다.

export type ProgramCategory = "금융" | "기술" | "경영" | "인력" | "수출" | "창업";
export type ProgramStage = "예비창업자" | "3년 미만" | "7년 미만" | "제한없음";

export type Program = {
  id: string;
  title: string;
  agency: string;
  category: ProgramCategory;
  region: string;
  stage: ProgramStage;
  summary: string;
  budget: string;
  deadline: string;
  guideHref?: string;
};

export const SAMPLE_PROGRAMS: Program[] = [
  {
    id: "pre-startup-package",
    title: "예비창업패키지 (예시)",
    agency: "중소벤처기업부",
    category: "창업",
    region: "전국",
    stage: "예비창업자",
    summary: "예비창업자의 초기 사업화를 위한 자금·멘토링 지원 사업입니다. 매년 상·하반기 모집합니다.",
    budget: "팀당 최대 1억원 내외 (예시)",
    deadline: "매년 상반기 공고 (시기는 공고문 확인)",
    guideHref: "/guide/pre-startup-package-checklist",
  },
  {
    id: "youth-startup-academy",
    title: "청년창업사관학교 (예시)",
    agency: "중소벤처기업진흥공단",
    category: "창업",
    region: "전국",
    stage: "3년 미만",
    summary: "만 39세 이하 청년 창업자를 대상으로 사업화 자금과 전담 교육·코칭을 지원합니다.",
    budget: "팀당 최대 1억원 내외 (예시)",
    deadline: "매년 1~2월 공고 (시기는 공고문 확인)",
    guideHref: "/guide/youth-startup-academy-checklist",
  },
  {
    id: "small-business-policy-fund",
    title: "소상공인 정책자금 (소진공) (예시)",
    agency: "소상공인시장진흥공단",
    category: "금융",
    region: "전국",
    stage: "제한없음",
    summary: "소상공인 대상 운전자금·시설자금 융자 지원입니다. 예산 소진 시 조기 마감될 수 있습니다.",
    budget: "업체당 한도는 자금 종류별 상이 (예시)",
    deadline: "연중 상시 (예산 소진 시 마감)",
    guideHref: "/guide/small-business-policy-fund",
  },
  {
    id: "initial-startup-package",
    title: "초기창업패키지 (예시)",
    agency: "창업진흥원",
    category: "창업",
    region: "전국",
    stage: "3년 미만",
    summary: "창업 3년 이내 기업의 성장을 지원하는 사업화 자금 및 액셀러레이팅 프로그램입니다.",
    budget: "기업당 최대 1억원 내외 (예시)",
    deadline: "매년 상반기 공고 (시기는 공고문 확인)",
  },
  {
    id: "local-creator",
    title: "로컬크리에이터 활성화 지원사업 (예시)",
    agency: "중소벤처기업부",
    category: "경영",
    region: "전국",
    stage: "7년 미만",
    summary: "지역 자원을 활용한 로컬 비즈니스의 사업화·브랜딩을 지원합니다.",
    budget: "팀당 최대 수천만원 내외 (예시)",
    deadline: "매년 상반기 공고 (시기는 공고문 확인)",
  },
  {
    id: "women-biz-fund",
    title: "여성기업 육성자금 (예시)",
    agency: "여성기업종합지원센터",
    category: "금융",
    region: "전국",
    stage: "제한없음",
    summary: "여성 대표 기업의 경영 안정과 성장을 위한 정책자금 융자입니다.",
    budget: "업체당 한도는 자금 종류별 상이 (예시)",
    deadline: "연중 상시 (예산 소진 시 마감)",
  },
];

export const CATEGORIES: ProgramCategory[] = ["창업", "금융", "기술", "경영", "인력", "수출"];
export const STAGES: ProgramStage[] = ["예비창업자", "3년 미만", "7년 미만", "제한없음"];
