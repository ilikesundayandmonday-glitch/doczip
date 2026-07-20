"use client";

import { useState } from "react";
import Link from "next/link";
import imageCompression from "browser-image-compression";
import { track } from "@vercel/analytics";

export default function CompressPage() {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [compressedFile, setCompressedFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(0.8);
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);

  const selectFile = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      setOriginalFile(file);
      setCompressedFile(null);
      track("압축_파일올림");
    } else {
      alert("이미지 파일만 올릴 수 있어요.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) selectFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) selectFile(file);
  };
  const handleCompress = async () => {
    if (!originalFile) return;
    setLoading(true);
    try {
      const options = {
        maxSizeMB: 10,
        maxWidthOrHeight: 4000,
        useWebWorker: true,
        initialQuality: quality,
      };
      const compressed = await imageCompression(originalFile, options);
      setCompressedFile(compressed);
      track("압축_완료");
    } catch (error) {
      console.error(error);
      alert("압축 중 오류가 발생했습니다.");
    }
    setLoading(false);
  };

  const handleDownload = () => {
    if (!compressedFile) return;
    const url = URL.createObjectURL(compressedFile);
    const a = document.createElement("a");
    a.href = url;
    a.download = "compressed_" + (originalFile?.name || "image");
    a.click();
    URL.revokeObjectURL(url);
    track("압축_다운로드");
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
          서류 용량 줄이기
        </h1>
        <p className="text-gray-500 text-center mb-8">
          5MB 제한 맞추기 · 파일은 서버에 저장되지 않습니다
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <label
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            className={`block border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition mb-6 ${dragging ? "border-[#1D9E75] bg-green-50" : "border-gray-300 hover:border-[#1D9E75]"}`}
          >
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            <div className="text-gray-600">
              {originalFile ? (
                <span className="font-medium text-gray-800">{originalFile.name}</span>
              ) : (
                <>
                  <div className="text-lg mb-1">파일을 끌어다 놓거나 클릭</div>
                  <div className="text-sm text-gray-400">이미지 파일 (JPG, PNG 등)</div>
                </>
              )}
            </div>
          </label>

          {originalFile && (
            <>
              <div className="mb-6">
                <label className="block text-sm text-gray-700 mb-2">
                  압축 강도: 화질 {Math.round(quality * 100)}%
                </label>
                <input type="range" min="0.2" max="1" step="0.1" value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-[#1D9E75]" />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>용량 우선</span>
                  <span>화질 우선</span>
                </div>
              </div>

              <button onClick={handleCompress} disabled={loading} className="w-full bg-[#1D9E75] text-white rounded-xl py-3 font-medium hover:bg-[#178a66] disabled:bg-gray-300 transition mb-4">
                {loading ? "압축 중..." : "압축하기"}
              </button>

              <div className="text-sm text-gray-600">
                원본 크기: {formatSize(originalFile.size)}
              </div>
            </>
          )}

          {compressedFile && (
            <div className="mt-4 p-4 bg-green-50 rounded-xl">
              <div className="text-sm text-gray-700 mb-1">
                압축 후: {formatSize(compressedFile.size)}
              </div>
              <div className="text-sm font-medium text-[#1D9E75] mb-3">
                {Math.round((1 - compressedFile.size / (originalFile?.size || 1)) * 100)}% 감소
              </div>
              <button onClick={handleDownload} className="w-full bg-gray-900 text-white rounded-xl py-3 font-medium hover:bg-gray-700 transition">
                다운로드
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          압축은 브라우저에서 처리되며, 이미지는 어디에도 전송되지 않습니다.
        </p>
      </div>
    </main>
  );
}