// openGraph 는 세그먼트 간 얕은 병합이라 하위에서 정의하면 상위 값이 통째로 교체됩니다.
// 공통 필드를 여기서 spread 해서 siteName/locale/images 가 유실되지 않게 합니다.
export const ogImage = {
  url: "/og-cover.png",
  width: 1200,
  height: 630,
  alt: "ZipperDoc - PDF 합치기, 나누기, 사진 용량 줄이기. 파일 업로드 없이.",
};

export const openGraphBase = {
  siteName: "ZipperDoc",
  locale: "ko_KR",
  images: [ogImage],
};
