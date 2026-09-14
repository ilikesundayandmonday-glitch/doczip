import { SAMPLE_PROGRAMS, type Program, type ProgramCategory, type ProgramStage } from "./data";

// K-Startup(창업진흥원) 공식 Open API - 공공데이터포털(data.go.kr)에서 발급받은
// KSTARTUP_API_KEY 환경변수를 사용합니다. 키가 없거나 호출이 실패하면 조용히
// SAMPLE_PROGRAMS(예시 데이터)로 되돌아가므로, 이 파일이 실패해도 화면은 절대 깨지지 않습니다.
const KSTARTUP_ENDPOINT =
  "https://apis.data.go.kr/B552735/kisedKstartupService01/getAnnouncementInformation01";

type KStartupItem = {
  pbanc_sn: number;
  biz_pbanc_nm: string;
  pbanc_ctnt: string | null;
  supt_biz_clsfc: string | null;
  supt_regin: string | null;
  biz_enyy: string | null;
  sprv_inst: string | null;
  pbanc_rcpt_bgng_dt: string | null;
  pbanc_rcpt_end_dt: string | null;
  detl_pg_url: string | null;
  rcrt_prgs_yn: string | null;
};

function mapCategory(raw: string | null): ProgramCategory {
  const text = raw ?? "";
  if (text.includes("자금") || text.includes("금융")) return "금융";
  if (text.includes("기술") || text.includes("연구") || text.includes("R&D")) return "기술";
  if (text.includes("수출") || text.includes("글로벌")) return "수출";
  if (text.includes("교육") || text.includes("멘토") || text.includes("컨설팅") || text.includes("인력")) return "인력";
  if (text.includes("창업") || text.includes("보육") || text.includes("공간") || text.includes("시설")) return "창업";
  return "경영";
}

function mapStage(raw: string | null): ProgramStage {
  const text = raw ?? "";
  if (text.includes("예비창업자") && !text.includes("년")) return "예비창업자";
  if (text.includes("1년미만") || text.includes("2년미만") || text.includes("3년미만")) return "3년 미만";
  if (text.includes("5년미만") || text.includes("7년미만")) return "7년 미만";
  return "제한없음";
}

function formatDate(raw: string | null): string | null {
  if (!raw || raw.length !== 8) return null;
  return `${raw.slice(0, 4)}.${raw.slice(4, 6)}.${raw.slice(6, 8)}`;
}

function formatDeadline(end: string | null): string {
  const endFmt = formatDate(end);
  return endFmt ? `~ ${endFmt} 마감` : "공고문에서 접수기간 확인";
}

function summarize(text: string | null): string {
  if (!text) return "공고 상세 내용은 원문에서 확인하세요.";
  const cleaned = text.replace(/\r\n/g, " ").replace(/\s+/g, " ").trim();
  return cleaned.length > 140 ? `${cleaned.slice(0, 140)}…` : cleaned;
}

async function fetchKStartupPrograms(): Promise<Program[] | null> {
  const key = process.env.KSTARTUP_API_KEY;
  if (!key) return null;

  try {
    // 주의: data.go.kr 서비스키는 이미 URL 인코딩된 상태로 발급되는 경우가 많아서,
    // URLSearchParams로 다시 인코딩하면 이중 인코딩되어 인증 오류가 납니다.
    // 그래서 serviceKey만 직접 붙이고 나머지 파라미터만 URLSearchParams를 씁니다.
    const otherParams = new URLSearchParams({
      page: "1",
      perPage: "20",
      returnType: "json",
    });
    otherParams.set("cond[rcrt_prgs_yn::EQ]", "Y");
    const url = `${KSTARTUP_ENDPOINT}?serviceKey=${key}&${otherParams.toString()}`;

    const res = await fetch(url, {
      // 지원사업 공고는 자주 바뀌지 않으니 1시간 캐시
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;

    const json: unknown = await res.json();
    if (json && typeof json === "object" && "OpenAPI_ServiceResponse" in json) {
      // 에러 응답 형식 (예: 인증키 오류)
      return null;
    }

    const data = (json as { data?: unknown })?.data;
    const items: KStartupItem[] = Array.isArray(data)
      ? (data as KStartupItem[])
      : Array.isArray((data as { data?: unknown })?.data)
        ? ((data as { data: KStartupItem[] }).data)
        : [];

    if (items.length === 0) return null;

    return items
      .filter((item) => item.biz_pbanc_nm)
      .map((item) => ({
        id: `kstartup-${item.pbanc_sn}`,
        title: item.biz_pbanc_nm,
        agency: item.sprv_inst || "창업진흥원 K-Startup",
        category: mapCategory(item.supt_biz_clsfc),
        region: item.supt_regin || "전국",
        stage: mapStage(item.biz_enyy),
        summary: summarize(item.pbanc_ctnt),
        budget: "지원 내용은 공고문 참고",
        deadline: formatDeadline(item.pbanc_rcpt_end_dt),
        sourceUrl: item.detl_pg_url || "https://www.k-startup.go.kr",
      }));
  } catch {
    return null;
  }
}

export async function getPrograms(): Promise<{ programs: Program[]; isLive: boolean }> {
  const kstartup = await fetchKStartupPrograms();
  if (kstartup && kstartup.length > 0) {
    return { programs: kstartup, isLive: true };
  }
  return { programs: SAMPLE_PROGRAMS, isLive: false };
}
