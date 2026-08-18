const SITE = "https://zipperdoc.com";
export const ORG_ID = `${SITE}/#organization`;

export const SAFETY_LINE =
  "모든 처리가 이용자의 브라우저 안에서 실행되기 때문에 파일이 서버로 전송되지 않습니다.";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "ZipperDoc",
      url: SITE,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/DOCZIPlogo.png`,
      },
      description:
        "파일을 서버로 전송하지 않고 브라우저 안에서 처리하는 무료 문서 도구. PDF 합치기, PDF 나누기, PDF 페이지 삭제, 사진·이미지 용량 줄이기를 제공합니다.",
      disambiguatingDescription: SAFETY_LINE,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "ZipperDoc",
      publisher: { "@id": ORG_ID },
      inLanguage: "ko",
    },
  ],
};

type ToolInput = {
  name: string;
  path: string;
  description: string;
  featureList: string[];
};

export function toolApp({ name, path, description, featureList }: ToolInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    url: `${SITE}${path}`,
    description,
    disambiguatingDescription: SAFETY_LINE,
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "문서 변환 도구",
    operatingSystem: "웹 브라우저 (Windows, macOS, Linux, iOS, Android)",
    browserRequirements: "JavaScript를 지원하는 최신 웹 브라우저",
    inLanguage: "ko",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
    },
    featureList,
    publisher: { "@id": ORG_ID },
  };
}

export function faqPage(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
