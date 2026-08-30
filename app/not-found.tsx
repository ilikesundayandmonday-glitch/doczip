import Link from "next/link";

const TOOLS = [
  { href: "/merge", label: "서류 합치기", desc: "PDF·사진을 순서대로 합치기" },
  { href: "/compress", label: "사진·이미지 용량 줄이기", desc: "5MB·10MB 제출 기준에 맞추기" },
  { href: "/split", label: "PDF 나누기", desc: "필요한 페이지만 뽑아내기" },
  { href: "/delete-pages", label: "PDF 페이지 삭제", desc: "빈 페이지·불필요한 장 지우기" },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-semibold text-[#1D9E75] mb-3">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          페이지를 찾을 수 없어요
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          주소가 바뀌었거나 삭제된 페이지일 수 있어요.
          <br />
          아래에서 필요한 도구를 찾아보세요.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-10">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="border border-gray-200 rounded-xl p-4 hover:border-[#1D9E75] hover:shadow-md transition"
            >
              <p className="font-semibold text-gray-900 mb-1">{tool.label}</p>
              <p className="text-sm text-gray-500">{tool.desc}</p>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center text-[#1D9E75] font-medium hover:underline"
        >
          ← ZipperDoc 홈으로 가기
        </Link>
      </div>
    </main>
  );
}
