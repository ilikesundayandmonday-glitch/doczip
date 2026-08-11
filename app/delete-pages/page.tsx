"use client";

import { useState } from "react";
import Link from "next/link";
import { PDFDocument } from "pdf-lib";
import { track } from "@vercel/analytics";

export default function DeletePagesPage() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [removed, setRemoved] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [note, setNote] = useState("");

  const baseName = file ? file.name.replace(/\.pdf$/i, "") : "문서";
  const keptCount = pageCount - removed.size;

  const loadFile = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const f = files[0];
    if (f.type !== "application/pdf") {
      alert("PDF 파일만 올릴 수 있어요.");
      return;
    }
    try {
      const doc = await PDFDocument.load(await f.arrayBuffer());
      setFile(f);
      setPageCount(doc.getPageCount());
      setRemoved(new Set());
      setNote("");
      track("페이지삭제_파일올림");
    } catch (error) {
      console.error(error);
      alert("PDF를 읽지 못했습니다. 암호가 걸려 있거나 손상된 파일일 수 있어요.");
    }
  };

  const toggle = (page: number) => {
    setRemoved((prev) => {
      const next = new Set(prev);
      if (next.has(page)) next.delete(page);
      else next.add(page);
      return next;
    });
    setNote("");
  };

  const reset = () => {
    setFile(null);
    setPageCount(0);
    setRemoved(new Set());
    setNote("");
  };

  const handleDelete = async () => {
    if (!file) return;
    if (keptCount === 0) {
      alert("모든 페이지를 지울 수는 없어요. 최소 한 장은 남겨주세요.");
      return;
    }
    setLoading(true);
    setNote("");
    try {
      const source = await PDFDocument.load(await file.arrayBuffer());
      const keep: number[] = [];
      for (let i = 1; i <= pageCount; i++) {
        if (!removed.has(i)) keep.push(i - 1);
      }

      const out = await PDFDocument.create();
      const copied = await out.copyPages(source, keep);
      copied.forEach((p) => out.addPage(p));

      const bytes = await out.save();
      const blob = new Blob([bytes as BlobPart], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${baseName}_정리.pdf`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);

      setNote(`${removed.size}페이지를 지우고 ${keptCount}페이지를 저장했습니다.`);
      track("페이지삭제_다운로드");
    } catch (error) {
      console.error(error);
      alert("처리 중 오류가 발생했습니다. 파일이 손상되지 않았는지 확인해주세요.");
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

        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">PDF 페이지 삭제</h1>
        <p className="text-gray-500 text-center mb-8">
          필요 없는 장만 빼기 · 파일은 서버에 저장되지 않습니다
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
                <div className="text-sm text-gray-400">지울 페이지를 번호로 골라내요</div>
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

              <p className="text-sm font-medium text-gray-700 mb-3">지울 페이지를 눌러주세요</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => {
                  const isRemoved = removed.has(page);
                  return (
                    <button
                      key={page}
                      onClick={() => toggle(page)}
                      aria-pressed={isRemoved}
                      className={`w-11 h-11 rounded-lg border text-sm font-medium tabular-nums transition ${
                        isRemoved
                          ? "border-red-300 bg-red-50 text-red-400 line-through"
                          : "border-gray-200 text-gray-700 hover:border-[#1D9E75] hover:bg-green-50"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-sm mb-6 bg-gray-50 rounded-xl px-4 py-3">
                <span className="text-gray-500">
                  {removed.size === 0 ? "아직 고른 페이지가 없어요" : `${removed.size}페이지 삭제 예정`}
                </span>
                <span className="text-gray-900 font-medium">{keptCount}페이지 남음</span>
              </div>

              <button
                onClick={handleDelete}
                disabled={loading || removed.size === 0 || keptCount === 0}
                className="w-full bg-[#1D9E75] text-white rounded-xl py-3 font-medium hover:bg-[#178a66] disabled:bg-gray-300 transition"
              >
                {loading ? "처리하는 중..." : `${removed.size}페이지 지우고 다운로드`}
              </button>

              {note && <p className="text-sm text-[#1D9E75] text-center mt-4">{note}</p>}
            </>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          원본 파일은 그대로 남습니다. 지워진 결과가 새 파일로 저장돼요.
        </p>

        <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-900 mb-4">페이지를 지워야 하는 경우</h2>
          <p className="mb-4">
            가장 흔한 것은 빈 페이지입니다. 자동급지 스캐너로 여러 장을 한 번에 스캔하면 뒷면까지 함께
            읽히면서 아무것도 없는 흰 페이지가 사이사이 끼어듭니다. 그대로 제출하면 서류가 정돈되지 않은
            인상을 주고, 심사자가 페이지를 잘못 세는 원인이 되기도 합니다.
          </p>
          <p className="mb-8">
            안내문이나 표지처럼 제출할 필요가 없는 장을 빼는 경우도 많습니다. 은행에서 받은 거래내역서
            앞에 붙은 안내 페이지, 관공서 발급 문서의 마지막 확인 안내문 같은 것들입니다. 이런 장을 빼면
            파일 용량도 함께 줄어듭니다.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">쓰는 법</h2>
          <ol className="list-decimal pl-5 mb-8 flex flex-col gap-2">
            <li>PDF를 올리면 페이지 개수만큼 번호 버튼이 나타납니다.</li>
            <li>지울 페이지의 번호를 누르면 빨간색으로 표시됩니다. 다시 누르면 취소됩니다.</li>
            <li>다운로드를 누르면 표시하지 않은 페이지만 순서대로 담긴 새 PDF가 저장됩니다.</li>
          </ol>

          <h2 className="text-xl font-bold text-gray-900 mb-4">몇 페이지를 지워야 할지 모를 때</h2>
          <p className="mb-8">
            먼저 원본 PDF를 열어 지울 페이지의 번호를 확인해두세요. PDF 뷰어에 표시되는 페이지 번호와 이
            도구의 번호는 동일하게 첫 장이 1번입니다. 다만 문서 안에 인쇄된 쪽 번호가 실제 순서와 다른
            경우가 있으니(표지가 쪽 번호에서 빠지는 경우 등), 인쇄된 숫자가 아니라 몇 번째 장인지를
            기준으로 세는 것이 정확합니다.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">원본은 그대로 남습니다</h2>
          <p className="mb-8">
            이 도구는 원본 파일을 고치지 않습니다. 지운 결과를 새 파일로 만들어 내려받는 방식이라, 잘못
            지웠다면 원본을 다시 올려서 처음부터 하면 됩니다. 파일 이름 뒤에 &ldquo;_정리&rdquo;가 붙어
            저장되므로 원본과 헷갈릴 일도 없습니다.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">함께 쓰면 좋은 도구</h2>
          <p className="mb-8">
            남길 페이지가 지울 페이지보다 훨씬 적다면{" "}
            <Link href="/split" className="text-[#1D9E75] underline">PDF 나누기</Link>로 필요한 범위만
            추출하는 편이 빠릅니다. 정리한 파일을 다른 서류와 묶으려면{" "}
            <Link href="/merge" className="text-[#1D9E75] underline">PDF 합치기</Link>를, 용량이 여전히
            제출 기준을 넘는다면{" "}
            <Link href="/compress" className="text-[#1D9E75] underline">용량 줄이기</Link>를 이어서 쓰면
            됩니다.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">파일은 어디로도 전송되지 않습니다</h2>
          <p>
            페이지를 지우는 작업은 서버가 아니라 이용자의 브라우저 안에서 실행됩니다. 파일이 인터넷을 통해
            업로드되는 과정 자체가 없으므로, 서버에 저장되거나 남을 파일이 존재하지 않습니다. 이 페이지를
            연 뒤 와이파이를 끄고 처리해보시면 그대로 동작하는 것을 확인하실 수 있습니다. 자세한 내용은{" "}
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
