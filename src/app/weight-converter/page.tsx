import React from "react";
import WeightConverterClient from "./WeightConverter";

export const metadata = {
  title: "무게 변환기 | Weight Converter",
  description: "kg, lb, g 중 하나를 입력하면 나머지 값이 자동으로 변환됩니다.",
};

export default function WeightConverterPage() {
  return (
    <div className="w-screen flex items-center justify-center bg-gray-50 min-h-screen">
      <WeightConverterClient />
    </div>
  );
}
