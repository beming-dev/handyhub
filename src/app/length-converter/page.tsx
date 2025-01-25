import React from "react";
import LengthConverterClient from "./LengthConverter";

export const metadata = {
  title: "길이 변환기 | Length Converter",
  description:
    "cm, inch, feet, meter 중 하나를 입력하면 나머지 값이 자동으로 변환됩니다.",
};

export default function LengthConverterPage() {
  return (
    <div className="w-screen flex items-center justify-center bg-gray-50 min-h-screen">
      {/* 클라이언트 컴포넌트 */}
      <LengthConverterClient />
    </div>
  );
}
