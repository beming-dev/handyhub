"use client";

import React, { useState, useEffect } from "react";

const translations = {
  ko: {
    title: "속도 변환기",
    instructions: "km/h, mph, m/s 중 하나를 입력하면 자동으로 변환됩니다.",
    kmhLabel: "킬로미터/시 (km/h)",
    mphLabel: "마일/시 (mph)",
    msLabel: "미터/초 (m/s)",
  },
  en: {
    title: "Speed Converter",
    instructions:
      "Enter any one of km/h, mph, or m/s to see the others converted automatically.",
    kmhLabel: "Kilometers/hour (km/h)",
    mphLabel: "Miles/hour (mph)",
    msLabel: "Meters/second (m/s)",
  },
};

const SpeedConverterClient: React.FC = () => {
  const [language, setLanguage] = useState<"ko" | "en">("ko");

  const [kmh, setKmh] = useState<string>("");
  const [mph, setMph] = useState<string>("");
  const [ms, setMs] = useState<string>("");

  useEffect(() => {
    const browserLang = navigator.language.substring(0, 2).toLowerCase();
    setLanguage(browserLang === "en" ? "en" : "ko");
  }, []);

  const t = translations[language];

  const parseValue = (value: string) => {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? 0 : parsed;
  };

  // km/h → mph, m/s
  const handleKmhChange = (value: string) => {
    setKmh(value);
    const kmhVal = parseValue(value);

    const mphVal = kmhVal * 0.6213711922; // 1 km/h ≈ 0.6213711922 mph
    const msVal = kmhVal / 3.6; // 1 km/h = 1/3.6 m/s

    setMph(mphVal ? mphVal.toFixed(4) : "");
    setMs(msVal ? msVal.toFixed(4) : "");
  };

  // mph → km/h, m/s
  const handleMphChange = (value: string) => {
    setMph(value);
    const mphVal = parseValue(value);

    const kmhVal = mphVal / 0.6213711922;
    const msVal = kmhVal / 3.6;

    setKmh(kmhVal ? kmhVal.toFixed(4) : "");
    setMs(msVal ? msVal.toFixed(4) : "");
  };

  // m/s → km/h, mph
  const handleMsChange = (value: string) => {
    setMs(value);
    const msVal = parseValue(value);

    const kmhVal = msVal * 3.6;
    const mphVal = kmhVal * 0.6213711922;

    setKmh(kmhVal ? kmhVal.toFixed(4) : "");
    setMph(mphVal ? mphVal.toFixed(4) : "");
  };

  return (
    <div className="relative max-w-md w-full bg-white rounded-xl shadow-md px-8 py-12 text-center">
      {/* 언어 전환 버튼 */}
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
          <label className="block text-gray-700 mb-1">{t.kmhLabel}</label>
          <input
            type="number"
            value={kmh}
            onChange={(e) => handleKmhChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:border-blue-500"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">{t.mphLabel}</label>
          <input
            type="number"
            value={mph}
            onChange={(e) => handleMphChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:border-blue-500"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">{t.msLabel}</label>
          <input
            type="number"
            value={ms}
            onChange={(e) => handleMsChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:border-blue-500"
            placeholder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default SpeedConverterClient;
