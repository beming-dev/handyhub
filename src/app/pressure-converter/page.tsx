import React from "react";
import PressureConverterClient from "./PressureConverter";

export const metadata = {
  title: "압력 변환기 | Pressure Converter",
  description: "Pa, atm, bar 중 하나를 입력하면 자동으로 변환됩니다.",
};

export default function PressureConverterPage() {
  return (
    <div className="w-screen flex items-center justify-center bg-gray-50 min-h-screen">
      <PressureConverterClient />
    </div>
  );
}
