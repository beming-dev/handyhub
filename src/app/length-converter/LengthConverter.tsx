"use client";

import React, { useState, useEffect } from "react";

// 한국어/영어 문구
const translations = {
  ko: {
    title: "길이 변환기",
    instructions:
      "cm, inch, feet, meter 중 하나를 입력하면 나머지 값이 자동으로 변환됩니다.",
    cmLabel: "센티미터 (cm)",
    inchLabel: "인치 (inch)",
    feetLabel: "피트 (feet)",
    meterLabel: "미터 (m)",
  },
  en: {
    title: "Length Converter",
    instructions:
      "Enter any one of cm, inch, feet, or meter to see the others converted automatically.",
    cmLabel: "Centimeters (cm)",
    inchLabel: "Inches (inch)",
    feetLabel: "Feet (ft)",
    meterLabel: "Meters (m)",
  },
};

const LengthConverterClient: React.FC = () => {
  const [language, setLanguage] = useState<"ko" | "en">("ko");

  // 각 단위별 상태
  const [cm, setCm] = useState<string>("");
  const [inch, setInch] = useState<string>("");
  const [feet, setFeet] = useState<string>("");
  const [meter, setMeter] = useState<string>("");

  useEffect(() => {
    const browserLang = navigator.language.substring(0, 2).toLowerCase();
    setLanguage(browserLang === "en" ? "en" : "ko");
  }, []);

  const t = translations[language];

  const parseValue = (value: string) => {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? 0 : parsed;
  };

  // cm -> inch, feet, meter
  const handleCmChange = (value: string) => {
    setCm(value);
    const cmVal = parseValue(value);
    const inchVal = cmVal / 2.54;
    const feetVal = cmVal / 30.48;
    const meterVal = cmVal / 100;
    setInch(inchVal ? inchVal.toFixed(4) : "");
    setFeet(feetVal ? feetVal.toFixed(4) : "");
    setMeter(meterVal ? meterVal.toFixed(4) : "");
  };

  // inch -> cm, feet, meter
  const handleInchChange = (value: string) => {
    setInch(value);
    const inchVal = parseValue(value);
    const cmVal = inchVal * 2.54;
    const feetVal = cmVal / 30.48;
    const meterVal = cmVal / 100;
    setCm(cmVal ? cmVal.toFixed(4) : "");
    setFeet(feetVal ? feetVal.toFixed(4) : "");
    setMeter(meterVal ? meterVal.toFixed(4) : "");
  };

  // feet -> cm, inch, meter
  const handleFeetChange = (value: string) => {
    setFeet(value);
    const feetVal = parseValue(value);
    const cmVal = feetVal * 30.48;
    const inchVal = cmVal / 2.54;
    const meterVal = cmVal / 100;
    setCm(cmVal ? cmVal.toFixed(4) : "");
    setInch(inchVal ? inchVal.toFixed(4) : "");
    setMeter(meterVal ? meterVal.toFixed(4) : "");
  };

  // meter -> cm, inch, feet
  const handleMeterChange = (value: string) => {
    setMeter(value);
    const meterVal = parseValue(value);
    const cmVal = meterVal * 100;
    const inchVal = cmVal / 2.54;
    const feetVal = cmVal / 30.48;
    setCm(cmVal ? cmVal.toFixed(4) : "");
    setInch(inchVal ? inchVal.toFixed(4) : "");
    setFeet(feetVal ? feetVal.toFixed(4) : "");
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
          <label className="block text-gray-700 mb-1">{t.cmLabel}</label>
          <input
            type="number"
            value={cm}
            onChange={(e) => handleCmChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:border-blue-500"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">{t.inchLabel}</label>
          <input
            type="number"
            value={inch}
            onChange={(e) => handleInchChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:border-blue-500"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">{t.feetLabel}</label>
          <input
            type="number"
            value={feet}
            onChange={(e) => handleFeetChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:border-blue-500"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">{t.meterLabel}</label>
          <input
            type="number"
            value={meter}
            onChange={(e) => handleMeterChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 
                       focus:outline-none focus:border-blue-500"
            placeholder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default LengthConverterClient;
