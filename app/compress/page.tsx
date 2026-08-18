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
          사진·이미지 용량 줄이기
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

        <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-900 mb-4">서류 용량은 왜 줄여야 할까요?</h2>
          <p className="mb-4">
            정부지원사업, 예비창업패키지, 소상공인 지원사업의 제출 시스템은 대부분 파일당 5MB 또는 10MB의
            용량 제한을 둡니다. 문제는 스마트폰으로 촬영한 서류 사진이 한 장에 5~10MB를 넘는 경우가 많다는
            점입니다. 최신 스마트폰일수록 화소가 높아 파일이 커지기 때문에, 촬영한 그대로는 업로드 자체가
            막히는 일이 흔합니다.
          </p>
          <p className="mb-8">
            이때 필요한 것이 이미지 압축입니다. 사진의 실제 내용은 그대로 두고 데이터 크기만 줄이는
            방식이라, 글자를 읽는 데 문제가 없는 선에서 용량을 크게 낮출 수 있습니다.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">압축 강도는 어떻게 정하나요?</h2>
          <p className="mb-4">
            이 도구의 슬라이더는 화질을 기준으로 동작합니다. 값을 낮출수록 용량이 많이 줄지만 글자가
            흐려질 수 있고, 높일수록 선명하지만 용량이 덜 줄어듭니다. 서류 종류에 따라 다음 기준을
            참고하세요.
          </p>
          <ul className="list-disc pl-5 mb-4 flex flex-col gap-2">
            <li>
              <strong className="text-gray-900">통장사본·사업자등록증 (글자 위주):</strong> 화질 70~80%.
              계좌번호나 사업자번호 같은 숫자가 뭉개지면 반려될 수 있으므로 너무 낮추지 마세요.
            </li>
            <li>
              <strong className="text-gray-900">신분증 사본:</strong> 화질 80% 이상. 이름과 번호가 또렷해야
              합니다.
            </li>
            <li>
              <strong className="text-gray-900">현장 사진·제품 사진:</strong> 화질 50~70%. 글자가 없으므로
              더 과감하게 줄여도 됩니다.
            </li>
          </ul>
          <p className="mb-8">
            압축 후에는 결과 파일을 반드시 열어서 확인하세요. 특히 숫자와 도장 부분이 알아볼 수 있는지
            보시면 됩니다. 만족스럽지 않다면 화질을 10%씩 올려가며 다시 압축하면 됩니다.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">압축해도 용량이 안 줄어든다면</h2>
          <p className="mb-4">
            이미 한 번 압축된 이미지는 더 줄어들지 않을 수 있습니다. 또한 PNG 형식의 스크린샷은 JPG보다
            압축 효율이 낮습니다. 이런 경우에는 화질을 더 낮추기보다, 서류를 다시 촬영할 때 카메라 해상도를
            낮춰서 찍는 편이 결과가 더 낫습니다.
          </p>
          <p className="mb-8">
            여러 장을 합친 PDF의 용량이 문제라면, 합치기 전에 각 사진을 먼저 압축한 뒤{" "}
            <Link href="/merge" className="text-[#1D9E75] underline">
              서류 합치기
            </Link>
            를 사용하는 순서가 효율적입니다.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">PDF 용량이 큰 경우에는</h2>
          <p className="mb-4">
            PDF 자체가 제출 기준을 넘는다면 압축만으로는 한계가 있습니다. 이럴 때는 먼저 파일 안을
            열어보세요. 스캔하다 생긴 빈 페이지나 안내문 페이지가 섞여 있는 경우가 많습니다. 그런 장을{" "}
            <Link href="/delete-pages" className="text-[#1D9E75] underline">PDF 페이지 삭제</Link>로
            빼는 것만으로 용량이 눈에 띄게 줄어듭니다.
          </p>
          <p className="mb-8">
            그래도 넘는다면 파일을 둘로 나눠 두 번에 걸쳐 제출하는 방법이 있습니다.{" "}
            <Link href="/split" className="text-[#1D9E75] underline">PDF 나누기</Link>에서 앞부분과
            뒷부분의 페이지 범위를 각각 지정해 뽑아내면 됩니다. 다만 공고문에서 하나의 파일로 제출하도록
            요구하는 경우에는 쓸 수 없으니, 업로드 칸이 몇 개인지 먼저 확인하세요.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">촬영할 때 미리 줄이는 방법</h2>
          <p className="mb-8">
            압축은 이미 찍은 사진을 손보는 일이라 한계가 있습니다. 애초에 작게 찍으면 화질 손실 없이
            용량만 줄일 수 있어요. 스마트폰 카메라 설정에서 해상도를 한 단계 낮추고, 서류가 화면을 꽉
            채우도록 가까이서 찍으면 됩니다. 서류 주변의 책상이나 바닥이 넓게 들어갈수록 쓸데없는
            용량만 늘어납니다. 밝은 곳에서 그림자 없이 찍는 것도 중요한데, 어두우면 노이즈가 생겨
            압축 효율까지 떨어집니다.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">파일은 어디로도 전송되지 않습니다</h2>
          <p className="mb-4">
            통장사본이나 신분증처럼 민감한 서류를 온라인 도구에 올리는 것이 불안하실 수 있습니다.
            ZipperDoc의 압축은 서버가 아니라 이용자의 브라우저 안에서 실행됩니다. 파일이 인터넷을 통해
            어디론가 업로드되는 과정 자체가 없기 때문에, 서버에 저장되거나 남을 파일이 존재하지 않습니다.
          </p>
          <p>
            직접 확인하고 싶으시다면, 파일을 올린 뒤 인터넷 연결을 끊고 압축 버튼을 눌러보세요. 그대로
            동작합니다. 자세한 내용은{" "}
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