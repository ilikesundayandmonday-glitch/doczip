"use client";

import { useState } from "react";
import Link from "next/link";
import { PDFDocument } from "pdf-lib";

type Item = { file: File; id: string; kind: "pdf" | "image" };

const A4_WIDTH = 595.28;
const A4_HEIGHT = 841.89;
const MARGIN = 40;

export default function MergePage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);

  const addFiles = (files: FileList | null) => {
    if (!files) return;
    const accepted: Item[] = [];
    Array.from(files).forEach((f) => {
      if (f.type === "application/pdf") {
        accepted.push({ file: f, id: Math.random().toString(36).slice(2), kind: "pdf" });
      } else if (f.type === "image/jpeg" || f.type === "image/png") {
        accepted.push({ file: f, id: Math.random().toString(36).slice(2), kind: "image" });
      }
    });
    if (accepted.length === 0) {
      alert("PDF, JPG, PNG 파일만 올릴 수 있어요.");
      return;
    }
    setItems((prev) => [...prev, ...accepted]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const move = (index: number, dir: -1 | 1) => {
    setItems((prev) => {
      const next = [...prev];
      const target = index + dir;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  const handleMerge = async () => {
    if (items.length < 1) {
      alert("파일을 올려주세요.");
      return;
    }
    setLoading(true);
    try {
      const merged = await PDFDocument.create();

      for (const item of items) {
        const bytes = await item.file.arrayBuffer();

        if (item.kind === "pdf") {
          const doc = await PDFDocument.load(bytes);
          const pages = await merged.copyPages(doc, doc.getPageIndices());
          pages.forEach((p) => merged.addPage(p));
        } else {
          let img;
          if (item.file.type === "image/png") {
            img = await merged.embedPng(bytes);
          } else {
            img = await merged.embedJpg(bytes);
          }

          const page = merged.addPage([A4_WIDTH, A4_HEIGHT]);
          const maxW = A4_WIDTH - MARGIN * 2;
          const maxH = A4_HEIGHT - MARGIN * 2;

          const scale = Math.min(maxW / img.width, maxH / img.height, 1);
          const w = img.width * scale;
          const h = img.height * scale;

          const x = (A4_WIDTH - w) / 2;
          const y = (A4_HEIGHT - h) / 2;

          page.drawImage(img, { x, y, width: w, height: h });
        }
      }

      const mergedBytes = await merged.save();
      const blob = new Blob([mergedBytes as BlobPart], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "제출서류.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("합치는 중 오류가 발생했습니다. 파일이 손상되지 않았는지 확인해주세요.");
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
        <Link
          href="/"
          className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-6 transition"
        >
          ← 홈으로
        </Link>

        <h1 className="text-3xl font-semibold text-gray-900 mb-2 text-center">
          제출 서류 합치기
        </h1>
        <p className="text-gray-500 text-center mb-8">
          PDF·사진을 하나로 · 파일은 서버에 저장되지 않습니다
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <label
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              addFiles(e.dataTransfer.files);
            }}
            className={`block border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition mb-6
              ${dragging ? "border-[#1D9E75] bg-green-50" : "border-gray-300 hover:border-[#1D9E75]"}`}
          >
            <input
              type="file"
              accept="application/pdf,image/jpeg,image/png"
              multiple
              onChange={(e) => addFiles(e.target.files)}
              className="hidden"
            />
            <div className="text-gray-600">
              <div className="text-lg mb-1">PDF·사진을 끌어다 놓거나 클릭</div>
              <div className="text-sm text-gray-400">
                통장사본·사업자등록증 사진도 자동으로 정리돼요
              </div>
            </div>
          </label>

          {items.length > 0 && (
            <div className="flex flex-col gap-2 mb-6">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3"
                >
                  <span className="text-sm text-[#1D9E75] font-medium tabular-nums w-5">
                    {index + 1}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 shrink-0">
                    {item.kind === "pdf" ? "PDF" : "사진"}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{item.file.name}</p>
                    <p className="text-xs text-gray-400">{formatSize(item.file.size)}</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => move(index, -1)}
                      disabled={index === 0}
                      className="w-7 h-7 rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 transition"
                      aria-label="위로"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => move(index, 1)}
                      disabled={index === items.length - 1}
                      className="w-7 h-7 rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 transition"
                      aria-label="아래로"
                    >
                      ↓
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-7 h-7 rounded-md border border-gray-200 text-red-400 hover:bg-red-50 transition"
                      aria-label="삭제"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {items.length > 0 && (
            <button
              onClick={handleMerge}
              disabled={loading}
              className="w-full bg-[#1D9E75] text-white rounded-xl py-3 font-medium hover:bg-[#178a66] disabled:bg-gray-300 transition"
            >
              {loading ? "합치는 중..." : `${items.length}개 합쳐서 다운로드`}
            </button>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          사진은 A4 크기에 맞춰 가운데 정렬됩니다. 순서는 화살표로 바꿀 수 있어요.
        </p>
      </div>
    </main>
  );
}
