"use client";

import React, { useState, useEffect } from "react";

// 변환 상수
// 1 atm = 101325 Pa = 1.01325 bar
const ONE_ATM_IN_PA = 101325;
const ONE_ATM_IN_BAR = 1.01325;

const translations = {
  ko: {
    title: "압력 변환기",
    instructions: "Pa, atm, bar 중 하나를 입력하면 자동으로 변환됩니다.",
    paLabel: "파스칼 (Pa)",
    atmLabel: "기압 (atm)",
    barLabel: "바 (bar)",
  },
  en: {
    title: "Pressure Converter",
    instructions:
      "Enter any one of Pa, atm, or bar to see the others converted automatically.",
    paLabel: "Pascals (Pa)",
    atmLabel: "Atmospheres (atm)",
    barLabel: "Bar (bar)",
  },
};

const PressureConverterClient: React.FC = () => {
  const [language, setLanguage] = useState<"ko" | "en">("ko");
  const [pa, setPa] = useState<string>("");
  const [atm, setAtm] = useState<string>("");
  const [bar, setBar] = useState<string>("");

  useEffect(() => {
    const browserLang = navigator.language.substring(0, 2).toLowerCase();
    setLanguage(browserLang === "en" ? "en" : "ko");
  }, []);

  const t = translations[language];

  const parseValue = (value: string) => {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? 0 : parsed;
  };

  // Pa -> atm, bar
  const handlePaChange = (value: string) => {
    setPa(value);
    const paVal = parseValue(value);

    const atmVal = paVal / ONE_ATM_IN_PA; // 1 atm = 101325 Pa
    const barVal = atmVal * ONE_ATM_IN_BAR; // 1 atm = 1.01325 bar

    setAtm(atmVal ? atmVal.toFixed(6) : "");
    setBar(barVal ? barVal.toFixed(6) : "");
  };

  // atm -> Pa, bar
  const handleAtmChange = (value: string) => {
    setAtm(value);
    const atmVal = parseValue(value);

    const paVal = atmVal * ONE_ATM_IN_PA;
    const barVal = atmVal * ONE_ATM_IN_BAR;

    setPa(paVal ? paVal.toFixed(2) : "");
    setBar(barVal ? barVal.toFixed(6) : "");
  };

  // bar -> Pa, atm
  const handleBarChange = (value: string) => {
    setBar(value);
    const barVal = parseValue(value);

    const atmVal = barVal / ONE_ATM_IN_BAR;
    const paVal = atmVal * ONE_ATM_IN_PA;

    setAtm(atmVal ? atmVal.toFixed(6) : "");
    setPa(paVal ? paVal.toFixed(2) : "");
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
          <label className="block text-gray-700 mb-1">{t.paLabel}</label>
          <input
            type="number"
            value={pa}
            onChange={(e) => handlePaChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:border-blue-500"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">{t.atmLabel}</label>
          <input
            type="number"
            value={atm}
            onChange={(e) => handleAtmChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:border-blue-500"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">{t.barLabel}</label>
          <input
            type="number"
            value={bar}
            onChange={(e) => handleBarChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:border-blue-500"
            placeholder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default PressureConverterClient;
