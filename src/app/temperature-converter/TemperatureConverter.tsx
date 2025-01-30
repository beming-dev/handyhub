"use client";

import React, { useState, useEffect } from "react";

const translations = {
  ko: {
    title: "온도 변환기",
    instructions: "섭씨(°C)나 화씨(°F) 중 하나를 입력하면 자동으로 변환됩니다.",
    cLabel: "섭씨 (°C)",
    fLabel: "화씨 (°F)",
  },
  en: {
    title: "Temperature Converter",
    instructions:
      "Enter either Celsius (°C) or Fahrenheit (°F) to convert automatically.",
    cLabel: "Celsius (°C)",
    fLabel: "Fahrenheit (°F)",
  },
};

const TemperatureConverterClient: React.FC = () => {
  const [language, setLanguage] = useState<"ko" | "en">("ko");
  const [celsius, setCelsius] = useState<string>("");
  const [fahrenheit, setFahrenheit] = useState<string>("");

  useEffect(() => {
    const browserLang = navigator.language.substring(0, 2).toLowerCase();
    setLanguage(browserLang === "en" ? "en" : "ko");
  }, []);

  const t = translations[language];

  const parseValue = (value: string) => {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? 0 : parsed;
  };

  // 섭씨 -> 화씨
  const handleCelsiusChange = (value: string) => {
    setCelsius(value);
    const cVal = parseValue(value);
    const fVal = (cVal * 9) / 5 + 32; // °F = °C * 1.8 + 32
    setFahrenheit(value ? fVal.toFixed(4) : "");
  };

  // 화씨 -> 섭씨
  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value);
    const fVal = parseValue(value);
    const cVal = ((fVal - 32) * 5) / 9; // °C = (°F - 32) * 5/9
    setCelsius(value ? cVal.toFixed(4) : "");
  };

  return (
    <div className="relative max-w-md w-full bg-white rounded-xl shadow-md px-8 py-12 text-center">
      <button
        onClick={() => setLanguage(language === "ko" ? "en" : "ko")}
        className="text-sm text-gray-500 underline absolute top-2 right-4"
      >
        {language === "ko" ? "English" : "한국어"}
      </button>

      <h1 className="text-2xl font-bold mb-4 text-blue-600">{t.title}</h1>
      <p className="text-gray-600 mb-6 text-sm leading-6">{t.instructions}</p>

      <div className="flex flex-col space-y-4 text-left">
        <div>
          <label className="block text-gray-700 mb-1">{t.cLabel}</label>
          <input
            type="number"
            value={celsius}
            onChange={(e) => handleCelsiusChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:border-blue-500 text-black"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">{t.fLabel}</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={(e) => handleFahrenheitChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:border-blue-500 text-black"
            placeholder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverterClient;
