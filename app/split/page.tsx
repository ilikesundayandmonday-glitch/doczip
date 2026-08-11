"use client";

import { useState } from "react";
import Link from "next/link";
import { PDFDocument } from "pdf-lib";
import { track } from "@vercel/analytics";

type Mode = "range" | "each";

function parseRange(input: string, total: number): number[] {
  const result: number[] = [];
  const seen = new Set<number>();

  for (const chunk of input.split(",")) {
    const part = chunk.trim();
    if (!part) continue;

    const dash = part.match(/^(\d+)\s*[-~]\s*(\d+)$/);
    if (dash) {
      const start = parseInt(dash[1], 10);
      const end = parseInt(dash[2], 10);
      if (start < 1 || end > total || start > end) return [];
      for (let p = start; p <= end; p++) {
        if (!seen.has(p)) { seen.add(p); result.push(p); }
      }
      continue;
    }

    const single = part.match(/^\d+$/);
    if (single) {
      const p = parseInt(part, 10);
      if (p < 1 || p > total) return [];
      if (!seen.has(p)) { seen.add(p); result.push(p); }
      continue;
    }

    return [];
  }

  return result;
}

function download(bytes: Uint8Array, name: string) {
  const blob = new Blob([bytes as BlobPart], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function SplitPage() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [mode, setMode] = useState<Mode>("range");
  const [range, setRange] = useState("");
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [note, setNote] = useState("");

  const baseName = file ? file.name.replace(/\.pdf$/i, "") : "문서";

  const loadFile = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const f = files[0];
    if (f.type !== "application/pdf") {
      alert("PDF 파일만 올릴 수 있어요.");
      return;
    }
    try {
      const doc = await PDFDocument.load(await f.arrayBuffer());
      const count = doc.getPageCount();
      setFile(f);
      setPageCount(count);
      setRange(count > 1 ? `1-${Math.ceil(count / 2)}` : "1");
      setNote("");
      track("나누기_파일올림");
    } catch (error) {
      console.error(error);
      alert("PDF를 읽지 못했습니다. 암호가 걸려 있거나 손상된 파일일 수 있어요.");
    }
  };

  const reset = () => {
    setFile(null);
    setPageCount(0);
    setRange("");
    setNote("");
  };

  const selected = pageCount > 0 ? parseRange(range, pageCount) : [];
  const rangeInvalid = mode === "range" && range.trim().length > 0 && selected.length === 0;

  const handleSplit = async () => {
    if (!file) return;
    setLoading(true);
    setNote("");
    try {
      const bytes = await file.arrayBuffer();
      const source = await PDFDocument.load(bytes);

      if (mode === "range") {
        if (selected.length === 0) {
          alert("추출할 페이지를 올바르게 입력해주세요. 예: 1-3, 5");
          setLoading(false);
          return;
        }
        const out = await PDFDocument.create();
        const copied = await out.copyPages(source, selected.map((p) => p - 1));
        copied.forEach((p) => out.addPage(p));
        download(await out.save(), `${baseName}_추출.pdf`);
        setNote(`${selected.length}페이지를 추출했습니다.`);
      } else {
        for (let i = 0; i < pageCount; i++) {
          const out = await PDFDocument.create();
          const [copied] = await out.copyPages(source, [i]);
          out.addPage(copied);
          download(await out.save(), `${baseName}_${i + 1}.pdf`);
          await new Promise((r) => setTimeout(r, 350));
        }
        setNote(`${pageCount}개 파일로 나눴습니다. 다운로드 폴더를 확인해주세요.`);
      }
      track("나누기_다운로드");
    } catch (error) {
      console.error(error);
      alert("나누는 중 오류가 발생했습니다. 파일이 손상되지 않았는지 확인해주세요.");
    }
    setLoading(false);
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-xl">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-6 transition">
          ← 홈으로
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">PDF 나누기</h1>
        <p className="text-gray-500 text-center mb-8">
          원하는 페이지만 추출 · 파일은 서버에 저장되지 않습니다
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          {!file ? (
            <label
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => { e.preventDefault(); setDragging(false); loadFile(e.dataTransfer.files); }}
              className={`block border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition ${dragging ? "border-[#1D9E75] bg-green-50" : "border-gray-300 hover:border-[#1D9E75]"}`}
            >
              <input type="file" accept="application/pdf" onChange={(e) => loadFile(e.target.files)} className="hidden" />
              <div className="text-gray-600">
                <div className="text-lg mb-1">PDF를 끌어다 놓거나 클릭</div>
                <div className="text-sm text-gray-400">한 번에 한 개의 PDF를 나눕니다</div>
              </div>
            </label>
          ) : (
            <>
              <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 mb-6">
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 shrink-0">PDF</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                  <p className="text-xs text-gray-400">{formatSize(file.size)} · 총 {pageCount}페이지</p>
                </div>
                <button onClick={reset} className="w-7 h-7 rounded-md border border-gray-200 text-red-400 hover:bg-red-50 transition shrink-0" aria-label="파일 제거">×</button>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-6">
                <button
                  onClick={() => setMode("range")}
                  className={`rounded-xl py-3 px-3 text-sm font-medium border transition ${mode === "range" ? "border-[#1D9E75] bg-green-50 text-[#1D9E75]" : "border-gray-200 text-gray-500 hover:bg-gray-50"}`}
                >
                  원하는 페이지만 추출
                </button>
                <button
                  onClick={() => setMode("each")}
                  className={`rounded-xl py-3 px-3 text-sm font-medium border transition ${mode === "each" ? "border-[#1D9E75] bg-green-50 text-[#1D9E75]" : "border-gray-200 text-gray-500 hover:bg-gray-50"}`}
                >
                  한 장씩 낱개로 나누기
                </button>
              </div>

              {mode === "range" ? (
                <div className="mb-6">
                  <label htmlFor="range" className="block text-sm font-medium text-gray-700 mb-2">
                    추출할 페이지
                  </label>
                  <input
                    id="range"
                    type="text"
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                    placeholder="예: 1-3, 5, 8-10"
                    className={`w-full rounded-xl border px-4 py-3 text-gray-900 outline-none transition ${rangeInvalid ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-[#1D9E75]"}`}
                  />
                  <p className={`text-xs mt-2 ${rangeInvalid ? "text-red-500" : "text-gray-400"}`}>
                    {rangeInvalid
                      ? `1부터 ${pageCount} 사이의 숫자로 입력해주세요. 예: 1-3, 5`
                      : selected.length > 0
                        ? `${selected.length}페이지가 선택됐습니다 (${selected.slice(0, 8).join(", ")}${selected.length > 8 ? " …" : ""})`
                        : `1부터 ${pageCount}까지 입력할 수 있어요. 쉼표로 여러 구간을 지정합니다.`}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-gray-500 leading-relaxed mb-6 bg-gray-50 rounded-xl p-4">
                  {pageCount}개의 파일이 순서대로 다운로드됩니다. 브라우저가 &ldquo;여러 파일 다운로드를
                  허용하시겠습니까?&rdquo;라고 물으면 허용을 눌러주세요.
                </p>
              )}

              <button
                onClick={handleSplit}
                disabled={loading || (mode === "range" && selected.length === 0)}
                className="w-full bg-[#1D9E75] text-white rounded-xl py-3 font-medium hover:bg-[#178a66] disabled:bg-gray-300 transition"
              >
                {loading
                  ? "나누는 중..."
                  : mode === "range"
                    ? `${selected.length}페이지 추출해서 다운로드`
                    : `${pageCount}개 파일로 나누기`}
              </button>

              {note && <p className="text-sm text-[#1D9E75] text-center mt-4">{note}</p>}
            </>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          암호가 걸린 PDF는 열 수 없습니다. 암호를 해제한 뒤 올려주세요.
        </p>

        <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-900 mb-4">PDF를 나눠야 하는 경우</h2>
          <p className="mb-4">
            서류를 제출하다 보면 파일 전체가 아니라 일부만 필요한 경우가 자주 생깁니다. 스캔한 계약서 20장
            중에서 서명 페이지 두 장만 보내야 하거나, 사업계획서 뒤에 붙은 참고자료를 떼어내고 본문만 내야
            하는 식입니다.
          </p>
          <p className="mb-8">
            제출 시스템의 용량 제한 때문에 나누는 경우도 많습니다. 한 파일이 10MB를 넘으면 아예 업로드가
            막히는데, 앞부분과 뒷부분으로 나눠 두 번에 걸쳐 올리면 통과됩니다. 이때는 페이지 범위를 두 번
            지정해 각각 추출하면 됩니다.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">페이지 범위 입력하는 법</h2>
          <p className="mb-4">
            추출할 페이지는 쉼표와 하이픈으로 지정합니다. 연속된 구간은 하이픈으로, 떨어진 페이지는 쉼표로
            구분하세요.
          </p>
          <ul className="list-disc pl-5 mb-4 flex flex-col gap-2">
            <li><strong className="text-gray-900">1-5</strong> — 1페이지부터 5페이지까지</li>
            <li><strong className="text-gray-900">3</strong> — 3페이지 한 장만</li>
            <li><strong className="text-gray-900">1-3, 7, 10-12</strong> — 세 구간을 한 파일로</li>
          </ul>
          <p className="mb-8">
            입력한 순서대로 페이지가 배치됩니다. 예를 들어 <strong className="text-gray-900">5, 1-2</strong>
            라고 쓰면 5페이지가 맨 앞에 오고 그 뒤에 1~2페이지가 붙습니다. 서류 순서를 바꿔야 할 때 쓸 수
            있습니다.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">한 장씩 낱개로 나누기</h2>
          <p className="mb-8">
            여러 장의 서류를 한 번에 스캔해 하나의 PDF가 됐을 때 쓰는 방식입니다. 통장사본, 사업자등록증,
            신분증을 연속으로 스캔했다면 이 기능으로 낱장으로 분리한 뒤, 제출 시스템의 서류별 업로드 칸에
            각각 올리면 됩니다. 파일 이름은 원본 이름 뒤에 페이지 번호가 붙어 저장됩니다.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">나눈 뒤에 확인할 것</h2>
          <ul className="list-disc pl-5 mb-8 flex flex-col gap-2">
            <li>추출된 파일을 열어 원하는 페이지가 맞게 들어갔는지 확인</li>
            <li>페이지 순서가 뒤바뀌지 않았는지 확인</li>
            <li>낱장으로 나눴다면 다운로드된 파일 개수가 페이지 수와 같은지 확인</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mb-4">함께 쓰면 좋은 도구</h2>
          <p className="mb-8">
            필요 없는 장만 골라서 지우고 나머지는 그대로 두고 싶다면{" "}
            <Link href="/delete-pages" className="text-[#1D9E75] underline">PDF 페이지 삭제</Link>가 더
            간편합니다. 반대로 나눠진 파일을 다시 하나로 묶을 때는{" "}
            <Link href="/merge" className="text-[#1D9E75] underline">PDF 합치기</Link>를, 나눈 파일이
            여전히 용량 기준을 넘는다면{" "}
            <Link href="/compress" className="text-[#1D9E75] underline">용량 줄이기</Link>를 이어서 쓰면
            됩니다.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">파일은 어디로도 전송되지 않습니다</h2>
          <p>
            PDF를 나누는 작업은 서버가 아니라 이용자의 브라우저 안에서 실행됩니다. 파일이 인터넷을 통해
            업로드되는 과정 자체가 없으므로, 서버에 저장되거나 남을 파일이 존재하지 않습니다. 이 페이지를
            연 뒤 와이파이를 끄고 나눠보시면 그대로 동작하는 것을 확인하실 수 있습니다. 자세한 내용은{" "}
            <Link href="/privacy" className="text-[#1D9E75] underline">개인정보처리방침</Link>에서 확인하실
            수 있습니다.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/guide" className="text-sm text-gray-500 hover:text-gray-800 underline">
            정부지원사업 서류 제출 가이드 전체 보기 →
          </Link>
        </div>
      </div>
    </main>
  );
}
