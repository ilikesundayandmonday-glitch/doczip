import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 홈으로
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">개인정보처리방침</h1>
        <p className="text-sm text-gray-400 mb-10">최종 수정일: 2026년 7월 20일</p>

        <div className="flex flex-col gap-8 text-gray-700 leading-relaxed">
          <section>
            <p>
              DocZip(이하 &lsquo;서비스&rsquo;)은 이용자의 개인정보를 소중히 여기며, 관련 법령을 준수합니다.
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
            <p className="mb-3">서비스는 개인을 식별할 수 있는 정보를 수집하지 않습니다. 다만 서비스 개선을 위해 다음의 익명 정보를 수집할 수 있습니다.</p>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li>방문자 수, 페이지 조회수 등 익명 통계</li>
              <li>접속 기기·브라우저 종류, 유입 경로</li>
              <li>어떤 기능이 얼마나 사용되었는지에 대한 익명 집계</li>
            </ul>
            <p className="mt-3">
              위 정보는 개인을 특정할 수 없는 형태로 수집되며, 이름·연락처·파일 내용 등은 포함되지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. 쿠키 및 광고</h2>
            <p>
              서비스는 이용 통계 분석을 위해 쿠키를 사용할 수 있습니다. 또한 향후 Google AdSense 등
              제3자 광고 서비스를 도입할 경우, 해당 서비스가 광고 제공을 위해 쿠키를 사용할 수 있습니다.
              이용자는 브라우저 설정에서 쿠키를 거부할 수 있으며, 이 경우 일부 기능이 제한될 수 있습니다.
              Google의 광고 쿠키 정책은 Google 광고 정책 페이지에서 확인할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. 제3자 서비스</h2>
            <p>
              서비스는 안정적인 운영을 위해 다음의 외부 서비스를 이용합니다.
              이들은 각자의 개인정보처리방침에 따라 익명 데이터를 처리할 수 있습니다.
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-1 mt-3">
              <li>Vercel (호스팅 및 방문 통계)</li>
              <li>Google AdSense (광고, 도입 시)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. 개인정보 보호책임자</h2>
            <p>
              개인정보 관련 문의는 아래로 연락 주시기 바랍니다.
            </p>
            <p className="mt-2 text-gray-600">이메일: ilikesundayandmonday@gmail.com</p>
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