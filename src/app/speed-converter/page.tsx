import React from "react";
import SpeedConverterClient from "./SpeedConverter";

export const metadata = {
  title: "속도 변환기 | Speed Converter",
  description: "km/h, mph, m/s 중 하나를 입력하면 자동으로 변환됩니다.",
};

export default function SpeedConverterPage() {
  return (
    <div className="w-screen flex items-center justify-center bg-gray-50 min-h-screen">
      <SpeedConverterClient />
    </div>
  );
}
