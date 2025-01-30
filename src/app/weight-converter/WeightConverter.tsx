"use client";

import React, { useState, useEffect } from "react";

const translations = {
  ko: {
    title: "무게 변환기",
    instructions:
      "kg, lb, g 중 하나를 입력하면 나머지 값이 자동으로 변환됩니다.",
    kgLabel: "킬로그램 (kg)",
    lbLabel: "파운드 (lb)",
    gLabel: "그램 (g)",
  },
  en: {
    title: "Weight Converter",
    instructions:
      "Enter any one of kg, lb, or g to see the others converted automatically.",
    kgLabel: "Kilograms (kg)",
    lbLabel: "Pounds (lb)",
    gLabel: "Grams (g)",
  },
};

const WeightConverterClient: React.FC = () => {
  const [language, setLanguage] = useState<"ko" | "en">("ko");

  const [kg, setKg] = useState<string>("");
  const [lb, setLb] = useState<string>("");
  const [g, setG] = useState<string>("");

  useEffect(() => {
    const browserLang = navigator.language.substring(0, 2).toLowerCase();
    setLanguage(browserLang === "en" ? "en" : "ko");
  }, []);

  const t = translations[language];

  const parseValue = (value: string) => {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? 0 : parsed;
  };

  // kg -> lb, g
  const handleKgChange = (value: string) => {
    setKg(value);
    const kgVal = parseValue(value);

    const lbVal = kgVal * 2.2046226218; // 1 kg = 2.2046226218 lb
    const gVal = kgVal * 1000;

    setLb(lbVal ? lbVal.toFixed(4) : "");
    setG(gVal ? gVal.toFixed(4) : "");
  };

  // lb -> kg, g
  const handleLbChange = (value: string) => {
    setLb(value);
    const lbVal = parseValue(value);

    const kgVal = lbVal / 2.2046226218;
    const gVal = kgVal * 1000;

    setKg(kgVal ? kgVal.toFixed(4) : "");
    setG(gVal ? gVal.toFixed(4) : "");
  };

  // g -> kg, lb
  const handleGChange = (value: string) => {
    setG(value);
    const gVal = parseValue(value);

    const kgVal = gVal / 1000;
    const lbVal = kgVal * 2.2046226218;

    setKg(kgVal ? kgVal.toFixed(4) : "");
    setLb(lbVal ? lbVal.toFixed(4) : "");
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
          <label className="block text-gray-700 mb-1">{t.kgLabel}</label>
          <input
            type="number"
            value={kg}
            onChange={(e) => handleKgChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:border-blue-500 text-black"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">{t.lbLabel}</label>
          <input
            type="number"
            value={lb}
            onChange={(e) => handleLbChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:border-blue-500 text-black"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">{t.gLabel}</label>
          <input
            type="number"
            value={g}
            onChange={(e) => handleGChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:border-blue-500 text-black"
            placeholder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default WeightConverterClient;
