import React from "react";
import TemperatureConverterClient from "./TemperatureConverter";

export const metadata = {
  title: "온도 변환기 | Temperature Converter",
  description: "섭씨(°C)나 화씨(°F) 중 하나를 입력하면 자동으로 변환됩니다.",
};

export default function TemperatureConverterPage() {
  return (
    <div className="w-screen flex items-center justify-center bg-gray-50 min-h-screen">
      <TemperatureConverterClient />
    </div>
  );
}
