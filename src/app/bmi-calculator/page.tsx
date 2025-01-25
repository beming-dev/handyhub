import React from "react";
import BMICalculatorClient from "./BMICalculator";

// Next.js 13 - 메타데이터 설정 (옵션)
export const metadata = {
  title: "BMI 계산기 | BMI Calculator",
  description: "키와 체중을 입력하면 BMI와 체중 범주를 확인할 수 있습니다.",
};

export default function BMICalculatorPage() {
  // 여기서 서버 사이드 로직(데이터 패칭, SSR 등)을 처리할 수 있음
  return (
    <div className="w-screen flex items-center justify-center bg-gray-50 min-h-screen">
      {/* 클라이언트 컴포넌트 호출 */}
      <BMICalculatorClient />
    </div>
  );
}
