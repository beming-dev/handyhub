import React from "react";
import CompoundInterestCalculatorClient from "./CompoundInterest";

// Next.js 13에서 메타데이터 설정 (옵션)
export const metadata = {
  title: "복리 계산기 | Compound Interest",
  description:
    "원금, 연이자율, 기간, 연 복리 횟수를 입력하면 최종 금액을 계산합니다.",
};

export default function CompoundInterestPage() {
  // 이 부분에서 서버 사이드 로직(데이터 패칭 등)을 추가할 수 있음
  // 예: const data = await fetch(...)
  //     return some SSR logic

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {/* 
        서버 컴포넌트에서 클라이언트 컴포넌트를 불러옴.
        복리 계산기를 실제로 그리는 부분(상태 관리, 이벤트 등)은
        CompoundInterestCalculatorClient 내부에서 처리 
      */}
      <CompoundInterestCalculatorClient />
    </div>
  );
}
