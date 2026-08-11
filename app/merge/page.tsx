"use client";

import { useState } from "react";
import Link from "next/link";
import { PDFDocument } from "pdf-lib";
import { track } from "@vercel/analytics";

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
    track("합치기_파일올림");
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
      track("합치기_다운로드");
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
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-6 transition">
          ← 홈으로
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          PDF 합치기
        </h1>
        <p className="text-gray-500 text-center mb-8">
          사진을 PDF로 변환해 함께 합칩니다 · 파일은 서버에 저장되지 않습니다
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <label
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files); }}
            className={`block border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition mb-6 ${dragging ? "border-[#1D9E75] bg-green-50" : "border-gray-300 hover:border-[#1D9E75]"}`}
          >
            <input type="file" accept="application/pdf,image/jpeg,image/png" multiple onChange={(e) => addFiles(e.target.files)} className="hidden" />
            <div className="text-gray-600">
              <div className="text-lg mb-1">PDF·사진을 끌어다 놓거나 클릭</div>
              <div className="text-sm text-gray-400">통장사본·사업자등록증 사진도 자동으로 정리돼요</div>
            </div>
          </label>

          {items.length > 0 && (
            <div className="flex flex-col gap-2 mb-6">
              {items.map((item, index) => (
                <div key={item.id} className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3">
                  <span className="text-sm text-[#1D9E75] font-medium tabular-nums w-5">{index + 1}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 shrink-0">
                    {item.kind === "pdf" ? "PDF" : "사진"}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{item.file.name}</p>
                    <p className="text-xs text-gray-400">{formatSize(item.file.size)}</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button onClick={() => move(index, -1)} disabled={index === 0} className="w-7 h-7 rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 transition" aria-label="위로">↑</button>
                    <button onClick={() => move(index, 1)} disabled={index === items.length - 1} className="w-7 h-7 rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 transition" aria-label="아래로">↓</button>
                    <button onClick={() => removeItem(item.id)} className="w-7 h-7 rounded-md border border-gray-200 text-red-400 hover:bg-red-50 transition" aria-label="삭제">×</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {items.length > 0 && (
            <button onClick={handleMerge} disabled={loading} className="w-full bg-[#1D9E75] text-white rounded-xl py-3 font-medium hover:bg-[#178a66] disabled:bg-gray-300 transition">
              {loading ? "합치는 중..." : `${items.length}개 합쳐서 다운로드`}
            </button>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          사진은 A4 크기에 맞춰 가운데 정렬됩니다. 순서는 화살표로 바꿀 수 있어요.
        </p>

        <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-900 mb-4">왜 하나의 PDF로 합쳐야 할까요?</h2>
          <p className="mb-8">
            지원사업 제출 시스템은 첨부파일을 하나만 받거나, 여러 서류를 한 파일로 정리해 제출하도록
            요구하는 경우가 많습니다. 통장사본, 사업자등록증, 신분증 사본을 따로 올리면 반려되거나 애초에
            업로드 칸이 하나뿐이라 올릴 수 없습니다. 그래서 여러 서류를 정해진 순서대로 하나의 PDF로 묶는
            작업이 필요합니다.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">서류 순서는 어떻게 정하나요?</h2>
          <p className="mb-4">
            공고문에 제출 서류 목록이 번호로 적혀 있다면, 그 순서를 그대로 따르는 것이 가장 안전합니다.
            심사자가 목록 순서대로 확인하기 때문에, 순서가 뒤섞이면 서류가 누락된 것으로 오해받을 수
            있습니다. 공고문에 명시가 없다면 일반적으로 다음 순서를 씁니다.
          </p>
          <ol className="list-decimal pl-5 mb-8 flex flex-col gap-1">
            <li>사업계획서 등 주요 제출 문서</li>
            <li>사업자등록증 (또는 예비창업자의 경우 신분증)</li>
            <li>통장사본</li>
            <li>기타 증빙 서류 (자격증, 재직증명서 등)</li>
          </ol>

          <h2 className="text-xl font-bold text-gray-900 mb-4">사진과 PDF가 섞여 있을 때</h2>
          <p className="mb-4">
            통장사본이나 사업자등록증은 대부분 스마트폰으로 촬영한 JPG·PNG 사진입니다. 반면 사업계획서는
            PDF인 경우가 많습니다. 일반적인 PDF 합치기 도구는 PDF만 지원해서, 사진을 일일이 PDF로 변환한
            뒤 다시 합쳐야 합니다.
          </p>
          <p className="mb-8">
            이 도구는 사진과 PDF를 구분 없이 함께 올려 한 번에 합칠 수 있습니다. 사진은 A4 크기에 맞춰
            자동으로 가운데 정렬되므로, 크기와 비율이 제각각인 사진들도 문서처럼 정돈된 형태로 들어갑니다.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">합친 파일이 용량 제한을 넘는다면</h2>
          <p className="mb-8">
            사진 화질이 높으면 합친 PDF가 제출 기준(보통 5MB 또는 10MB)을 초과할 수 있습니다. 이럴 때는
            합치기 전에{" "}
            <Link href="/compress" className="text-[#1D9E75] underline">
              서류 용량 줄이기
            </Link>
            로 사진을 먼저 압축한 뒤 합치는 순서가 효율적입니다. 이미 합친 PDF를 줄이는 것보다 결과가 좋고
            글자도 더 선명하게 남습니다.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">제출 전 확인할 것</h2>
          <ul className="list-disc pl-5 mb-8 flex flex-col gap-2">
            <li>완성된 PDF를 열어 페이지 순서가 공고문과 일치하는지 확인</li>
            <li>계좌번호, 사업자번호 등 숫자가 알아볼 수 있게 나왔는지 확인</li>
            <li>서류가 잘리거나 회전되어 들어가지 않았는지 확인</li>
            <li>최종 파일 용량이 제출 기준 이하인지 확인</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mb-4">파일은 어디로도 전송되지 않습니다</h2>
          <p>
            통장사본처럼 민감한 서류를 온라인 도구에 올리는 것이 불안하실 수 있습니다. ZipperDoc의 합치기는
            서버가 아니라 이용자의 브라우저 안에서 실행됩니다. 파일이 인터넷을 통해 업로드되는 과정 자체가
            없으므로, 서버에 저장되거나 남을 파일이 존재하지 않습니다. 자세한 내용은{" "}
            <Link href="/privacy" className="text-[#1D9E75] underline">
              개인정보처리방침
            </Link>
            에서 확인하실 수 있습니다.
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