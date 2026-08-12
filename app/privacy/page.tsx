import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | ZipperDoc",
  description: "ZipperDoc의 개인정보처리방침입니다. 업로드한 파일이 서버로 전송되지 않는 이유와, 서비스가 수집하는 정보의 범위를 안내합니다.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 홈으로
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">개인정보처리방침</h1>
        <p className="text-sm text-gray-400 mb-10">최종 수정일: 2026년 8월 12일</p>

        <div className="flex flex-col gap-8 text-gray-700 leading-relaxed">
          <section>
            <p>
              ZipperDoc(이하 &lsquo;서비스&rsquo;)은 이용자의 개인정보를 소중히 여기며, 관련 법령을 준수합니다.
              본 방침은 서비스가 어떤 정보를 어떻게 다루는지 설명합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. 업로드 파일은 저장하지 않습니다</h2>
            <p>
              이미지 압축, 서류 합치기 등 모든 파일 처리는 이용자의 웹 브라우저 안에서 직접 이루어집니다.
              업로드한 파일(이미지, PDF 등)은 서버로 전송되거나 저장되지 않으며, 작업이 끝나면 브라우저에서 사라집니다.
              통장사본·사업자등록증 같은 민감한 서류도 외부로 나가지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. 수집하는 정보</h2>
            <p className="mb-3">서비스는 회원가입을 받지 않으며, 개인을 식별할 수 있는 정보를 수집하지 않습니다. 다만 서비스 개선을 위해 다음의 익명 정보를 수집합니다.</p>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li>방문자 수, 페이지 조회수 등 익명 통계</li>
              <li>접속 기기·브라우저 종류, 대략적인 접속 국가, 유입 경로</li>
              <li>버튼 클릭 등 기능 이용 여부에 대한 익명 집계</li>
            </ul>
            <p className="mt-3">
              기능 이용 집계에는 &lsquo;파일을 선택했다&rsquo;, &lsquo;다운로드 버튼을 눌렀다&rsquo;와 같은
              행위 발생 여부만 포함됩니다. 파일의 내용은 물론 파일명·용량·페이지 수도 포함되지 않으며,
              해당 정보는 서버로 전송되지 않으므로 수집할 수 있는 방법 자체가 없습니다. 이름·연락처 등
              개인정보도 수집하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. 쿠키 및 광고</h2>
            <p className="mb-3">
              서비스는 운영 비용을 충당하기 위해 <strong className="text-gray-900">Google AdSense
              광고를 사용하고 있습니다.</strong> Google을 포함한 제3자 광고 사업자는 이용자의 이전 방문
              기록을 바탕으로 광고를 게재하기 위해 쿠키를 사용합니다. 이 영역은 Google이 직접 수집·처리하며,
              서비스는 해당 데이터에 접근하지 않습니다.
            </p>
            <p className="mb-3">
              이용자는{" "}
              <a href="https://myadcenter.google.com" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] underline">
                Google 광고 설정
              </a>
              에서 맞춤 광고를 해제하거나, 브라우저 설정에서 쿠키를 거부할 수 있습니다. Google의 데이터
              처리 방식은{" "}
              <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] underline">
                Google 파트너 사이트 정책
              </a>
              에서 확인하실 수 있습니다.
            </p>
            <p>
              방문 통계 분석에 사용하는 Vercel Analytics는 쿠키를 사용하지 않습니다. 광고 쿠키를 거부하시더라도
              용량 줄이기·PDF 합치기 등 서비스의 모든 기능은 그대로 이용하실 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. 제3자 서비스</h2>
            <p>
              서비스는 안정적인 운영을 위해 다음의 외부 서비스를 이용합니다.
              이들은 각자의 개인정보처리방침에 따라 익명 데이터를 처리할 수 있습니다.
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-1 mt-3">
              <li>Vercel — 웹사이트 호스팅 및 방문 통계 (쿠키 미사용)</li>
              <li>Google AdSense — 광고 게재 (쿠키 사용, 현재 적용 중)</li>
            </ul>
            <p className="mt-3">
              두 서비스 모두 이용자가 업로드한 파일에는 접근하지 않습니다. 파일은 브라우저 밖으로
              전송되지 않으므로 외부 서비스에 전달될 경로 자체가 존재하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. 개인정보 보호책임자</h2>
            <p>개인정보 관련 문의는 아래로 연락 주시기 바랍니다.</p>
            <p className="mt-2 text-gray-600">이메일: zipperdoc.help@gmail.com</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. 방침 변경</h2>
            <p>
              본 방침은 법령이나 서비스 변경에 따라 수정될 수 있으며, 변경 시 본 페이지를 통해 공지합니다.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
