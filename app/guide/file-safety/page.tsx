import Link from "next/link";
import type { Metadata } from "next";
import { openGraphBase } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "온라인 PDF 도구에 통장사본 올려도 될까? 안전하게 쓰는 법 (2026) | ZipperDoc",
  description: "무료 PDF 변환 사이트에 통장사본·신분증을 올려도 되는지, 서버 업로드형과 브라우저 처리형의 차이는 무엇인지 정리했습니다. 파일이 전송되는지 직접 확인하는 방법도 안내합니다.",
  alternates: { canonical: "/guide/file-safety" },
  openGraph: {
    ...openGraphBase,
    title: "온라인 PDF 도구에 통장사본 올려도 될까?",
    description: "서버 업로드형과 브라우저 처리형의 차이, 그리고 직접 확인하는 방법.",
    url: "/guide/file-safety",
    type: "article",
  },
};

export default function FileSafetyGuide() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/guide" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition">
          ← 가이드 목록
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          온라인 PDF 도구에 통장사본 올려도 될까?
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          서류를 제출하려고 무료 PDF 도구를 검색하다 보면 한 번쯤 멈칫하게 됩니다. 통장사본에는 계좌번호가,
          신분증에는 주민등록번호가 그대로 찍혀 있으니까요. 이 파일이 어디로 가는지 알 수 없다면 불안한 게
          당연합니다. 이 글에서는 온라인 문서 도구가 파일을 처리하는 두 가지 방식과, 내가 쓰는 도구가 어느
          쪽인지 직접 확인하는 방법을 정리했습니다.
        </p>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">온라인 도구는 두 종류로 나뉩니다</h2>
            <p className="mb-3">
              겉보기에는 똑같이 &ldquo;파일을 올리고 버튼을 누르는&rdquo; 사이트지만, 내부 동작은 완전히
              다를 수 있습니다.
            </p>
            <p className="mb-3">
              <strong className="text-gray-900">서버 업로드형</strong>은 파일을 회사의 서버로 전송한 뒤,
              그곳에서 변환하고 결과 파일을 다시 내려받게 하는 방식입니다. 대부분의 유명 온라인 변환
              서비스가 이 구조입니다. 무거운 작업도 처리할 수 있다는 장점이 있지만, 내 파일이 잠시라도
              타인의 서버에 존재하게 됩니다.
            </p>
            <p>
              <strong className="text-gray-900">브라우저 처리형</strong>은 파일을 전송하지 않고, 내
              컴퓨터의 브라우저 안에서 직접 변환하는 방식입니다. 파일이 인터넷을 건너가는 과정 자체가
              없습니다. 처리할 수 있는 작업의 종류는 제한되지만, 개인정보 관점에서는 구조적으로 더
              안전합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              &ldquo;즉시 삭제&rdquo;는 안전하다는 뜻일까?
            </h2>
            <p className="mb-3">
              서버 업로드형 서비스들은 보통 &ldquo;처리 후 1시간 내 자동 삭제&rdquo; 같은 문구를 씁니다.
              대부분 실제로 그렇게 운영되고, 신뢰할 만한 업체도 많습니다. 다만 이용자 입장에서 알아둘
              점은 있습니다.
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>삭제 약속을 이용자가 직접 확인할 방법은 없습니다. 업체를 믿는 수밖에 없습니다.</li>
              <li>
                삭제되기 전까지의 시간 동안, 그리고 전송 과정에서 파일은 내 통제 밖에 있습니다.
              </li>
              <li>
                서버가 해킹당하거나 설정이 잘못된 경우, 삭제 정책과 무관하게 파일이 노출될 수 있습니다.
              </li>
            </ul>
            <p className="mt-3">
              반면 애초에 전송하지 않는 구조라면, 삭제를 약속할 파일 자체가 생기지 않습니다. 약속을 믿는
              것과 구조적으로 불가능한 것은 다릅니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">내가 쓰는 도구가 어느 쪽인지 확인하는 법</h2>
            <p className="mb-3">
              전문 지식 없이도 확인할 수 있는 방법이 두 가지 있습니다.
            </p>
            <p className="mb-3">
              <strong className="text-gray-900">방법 1. 인터넷을 끊어보기.</strong> 페이지를 먼저 연 다음
              와이파이를 끄고, 파일을 올려 변환을 실행해보세요. 브라우저 처리형이라면 그대로 동작합니다.
              서버 업로드형이라면 오류가 나거나 무한 로딩에 걸립니다. 가장 확실하고 간단한 방법입니다.
            </p>
            <p className="mb-3">
              <strong className="text-gray-900">방법 2. 개발자도구 확인하기.</strong> 크롬에서 F12(맥은
              Option+Command+I)를 눌러 개발자도구를 열고 &ldquo;네트워크&rdquo; 탭을 선택한 뒤 파일을
              변환해보세요. 파일 크기만 한 업로드 요청이 잡히면 서버로 전송된 것입니다. 아무 요청도 없거나
              작은 요청만 보인다면 브라우저 안에서 처리된 것입니다.
            </p>
            <p>
              민감한 서류를 다루기 전에 한 번만 확인해두면, 이후로는 마음 편히 쓸 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">그 외에 지킬 것들</h2>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>
                <strong className="text-gray-900">주소창의 자물쇠 확인.</strong> https로 시작하는지 보세요.
                http만 있는 사이트에는 어떤 서류도 올리지 마세요.
              </li>
              <li>
                <strong className="text-gray-900">회원가입을 요구하는지 보기.</strong> 단순 파일 변환에
                이메일이나 로그인을 요구한다면, 파일보다 개인정보 수집이 목적일 수 있습니다.
              </li>
              <li>
                <strong className="text-gray-900">공용 컴퓨터에서는 다운로드 폴더 정리.</strong> PC방이나
                사무실 공용 PC를 썼다면 변환한 파일과 원본이 남아있지 않은지 확인하세요.
              </li>
              <li>
                <strong className="text-gray-900">개인정보처리방침 확인.</strong> 짧아도 좋으니 있는지, 그
                내용이 실제 동작과 맞는지 보세요. 아예 없는 서비스는 피하는 편이 낫습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">ZipperDoc은 어떻게 동작하나요</h2>
            <p className="mb-3">
              ZipperDoc의 용량 줄이기와 서류 합치기는 모두 브라우저 처리형입니다. 파일을 올려도 서버로
              전송되지 않고, 이용자의 브라우저 안에서 압축과 병합이 실행됩니다. 저장할 파일이 서버에
              도착하지 않으므로 보관 기간이나 삭제 주기라는 개념 자체가 없습니다.
            </p>
            <p>
              위에 적은 방법 그대로 확인해보셔도 됩니다. 페이지를 연 뒤 인터넷을 끊고 파일을 합치거나
              압축해보세요. 정상적으로 동작합니다. 수집하는 정보의 범위는{" "}
              <Link href="/privacy" className="text-[#1D9E75] font-medium underline">
                개인정보처리방침
              </Link>
              에 정리해두었습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 유명한 해외 변환 사이트는 안전한가요?</p>
                <p>
                  대부분 정상적으로 운영되며 삭제 정책도 지킵니다. 다만 파일이 해외 서버로 전송된다는 점,
                  그리고 삭제 여부를 이용자가 확인할 수 없다는 점은 알고 쓰시는 것이 좋습니다. 통장사본이나
                  신분증처럼 민감한 서류라면 브라우저 처리형을 권합니다.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 카카오톡으로 나에게 보내서 변환하면 안 되나요?</p>
                <p>
                  파일 전달 용도로는 편리하지만, 대화방에 서류가 그대로 남습니다. 나중에 기기를 바꾸거나
                  계정이 노출되면 함께 노출됩니다. 변환 후에는 대화방에서 지우시는 편이 안전합니다.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 브라우저에서 처리하면 파일이 컴퓨터에 남나요?</p>
                <p>
                  변환 중에는 브라우저 메모리에만 있고, 페이지를 닫으면 사라집니다. 다운로드한 결과 파일은
                  당연히 컴퓨터에 저장되므로, 제출을 마쳤다면 필요 없는 파일은 정리하시면 됩니다.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Q. 스마트폰에서도 똑같이 안전한가요?</p>
                <p>
                  네. 브라우저 처리형은 PC든 모바일이든 같은 방식으로 동작합니다. 모바일 브라우저에서도
                  파일이 서버로 전송되지 않습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">파일을 올리지 않고 서류를 정리하세요</h2>
            <p className="text-gray-600 mb-6">브라우저 안에서 처리됩니다. 설치도, 회원가입도 없습니다.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/compress" className="bg-[#1D9E75] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#178a66] transition">
                서류 용량 줄이기
              </Link>
              <Link href="/merge" className="bg-white border border-gray-300 text-gray-800 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition">
                제출 서류 합치기
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">관련 가이드</h2>
            <div className="flex flex-col gap-3">
              <Link href="/guide/submission-checklist" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">정부지원사업 제출 서류 체크리스트 →</p>
                <p className="text-sm text-gray-500">제출 전에 확인해야 할 항목을 순서대로 정리</p>
              </Link>
              <Link href="/guide/bankbook-pdf" className="block border border-gray-200 rounded-xl p-5 hover:border-[#1D9E75] hover:shadow-md transition">
                <p className="font-bold text-gray-900 mb-1">통장사본·사업자등록증을 하나의 PDF로 합치는 법 →</p>
                <p className="text-sm text-gray-500">사진과 PDF를 한 번에 합치고 A4로 정렬하는 방법</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
