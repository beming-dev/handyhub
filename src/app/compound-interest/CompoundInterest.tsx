"use client"; // 클라이언트 컴포넌트 선언

import InputField from "@/components/InputField";
import React, { useState, useEffect } from "react";

// 한국어/영어 문구를 정의한 객체
const translations = {
  ko: {
    calculatorTitle: "복리 계산기",
    instructionsLine1: "원금, 연이자율, 기간(연), 연 복리 횟수를 입력하면",
    instructionsLine2: "최종 금액을 계산합니다.",
    principalLabel: "원금(Principal)",
    principalPlaceholder: "예: 1000000",
    rateLabel: "연 이자율(%)",
    ratePlaceholder: "예: 5 (5%)",
    yearsLabel: "기간(년)",
    yearsPlaceholder: "예: 10",
    compoundLabel: "연 복리 횟수(n)",
    compoundPlaceholder: "예: 12 (매달 복리)",
    calculateButton: "계산하기",
    resultLabel: "최종 금액",
    alertMessage: "올바른 입력값을 모두 입력해주세요.",
  },
  en: {
    calculatorTitle: "Compound Interest Calculator",
    instructionsLine1:
      "Enter the principal, annual interest rate, years, and compounding frequency to",
    instructionsLine2: "calculate the final amount.",
    principalLabel: "Principal (P)",
    principalPlaceholder: "e.g. 1000000",
    rateLabel: "Annual Interest Rate (%)",
    ratePlaceholder: "e.g. 5 (5%)",
    yearsLabel: "Number of Years",
    yearsPlaceholder: "e.g. 10",
    compoundLabel: "Compounding Frequency (n)",
    compoundPlaceholder: "e.g. 12 (monthly)",
    calculateButton: "Calculate",
    resultLabel: "Final Amount",
    alertMessage: "Please fill out all fields correctly.",
  },
};

const CompoundInterestCalculatorClient: React.FC = () => {
  // 언어 상태: "ko"(한국어) 또는 "en"(영어)
  const [language, setLanguage] = useState<"ko" | "en">("ko");

  // Input 상태
  const [principal, setPrincipal] = useState<number | "">("");
  const [rate, setRate] = useState<number | "">("");
  const [years, setYears] = useState<number | "">("");
  const [compound, setCompound] = useState<number | "">("");
  const [result, setResult] = useState<string | null>(null);

  // 브라우저 언어에 따라 초기 설정 (CSR에서만 가능)
  useEffect(() => {
    const browserLang = navigator.language.substring(0, 2).toLowerCase();
    if (browserLang === "en") {
      setLanguage("en");
    } else {
      setLanguage("ko");
    }
  }, []);

  // 숫자로 변환 함수
  const parseValue = (value: number | "" | string) => {
    if (value === "") return NaN;
    return typeof value === "string" ? parseFloat(value) : value;
  };

  const handleCalculate = () => {
    const P = parseValue(principal);
    const r = parseValue(rate) / 100; // % -> 소수
    const t = parseValue(years);
    const n = parseValue(compound);

    if (isNaN(P) || isNaN(r) || isNaN(t) || isNaN(n)) {
      alert(translations[language].alertMessage);
      return;
    }

    // 복리 계산 공식: A = P * (1 + r / n)^(n * t)
    const amount = P * Math.pow(1 + r / n, n * t);
    setResult(amount.toFixed(2));
  };

  // 현재 언어에 맞는 번역 객체
  const t = translations[language];

  return (
    <div className="relative max-w-md w-full bg-white rounded-xl shadow-md px-8 py-12 text-center">
      {/* 우측 상단 언어 전환 버튼 */}
      <button
        onClick={() => setLanguage(language === "ko" ? "en" : "ko")}
        className="text-sm text-gray-500 underline absolute top-2 right-4 bg-transparent"
      >
        {language === "ko" ? "English" : "한국어"}
      </button>

      <h1 className="text-2xl font-bold mb-4 text-blue-600">
        {t.calculatorTitle}
      </h1>
      <p className="text-gray-600 mb-6 text-sm leading-6">
        {t.instructionsLine1}
        <br />
        {t.instructionsLine2}
      </p>

      {/* 인풋 필드 영역 */}
      <div className="flex flex-col space-y-4 text-left">
        <InputField
          label={t.principalLabel}
          type="number"
          placeholder={t.principalPlaceholder}
          value={principal}
          onChange={(e: any) => setPrincipal(e.target.value)}
        />

        <InputField
          label={t.rateLabel}
          type="number"
          placeholder={t.ratePlaceholder}
          value={rate}
          onChange={(e: any) => setRate(e.target.value)}
        />

        <InputField
          label={t.yearsLabel}
          type="number"
          placeholder={t.yearsPlaceholder}
          value={years}
          onChange={(e: any) => setYears(e.target.value)}
        />

        <InputField
          label={t.compoundLabel}
          type="number"
          placeholder={t.compoundPlaceholder}
          value={compound}
          onChange={(e: any) => setCompound(e.target.value)}
        />
      </div>

      <button
        onClick={handleCalculate}
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md 
                   hover:bg-blue-700 focus:outline-none transition-colors"
      >
        {t.calculateButton}
      </button>

      {/* 결과 영역 */}
      {result && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-blue-800 text-sm">{t.resultLabel}</p>
          <p className="text-xl font-semibold text-blue-600">{result}</p>
        </div>
      )}
    </div>
  );
};

export default CompoundInterestCalculatorClient;
