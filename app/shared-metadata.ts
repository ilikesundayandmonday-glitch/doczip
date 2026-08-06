// openGraph 는 세그먼트 간 얕은 병합이라 하위에서 정의하면 상위 값이 통째로 교체됩니다.
// 공통 필드를 여기서 spread 해서 siteName/locale 이 유실되지 않게 합니다.
export const openGraphBase = {
  siteName: "ZipperDoc",
  locale: "ko_KR",
} as const;
