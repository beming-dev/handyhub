import InputField from "@/components/InputField";
import React, { useState, useEffect } from "react";

// 한국어/영어 문구
const translations = {
  ko: {
    title: "BMI 계산기",
    instructionsLine1: "키와 체중을 입력하면",
    instructionsLine2: "BMI와 체중 범주를 확인할 수 있습니다.",
    heightLabel: "키(cm)",
    heightPlaceholder: "예: 170",
    weightLabel: "체중(kg)",
    weightPlaceholder: "예: 65",
    calculateButton: "계산하기",
    resultLabel: "결과",
    alertMessage: "키와 체중을 제대로 입력해주세요.",
    bmiText: "BMI",
    categoryText: "체중 범주",
    categoryUnderweight: "저체중",
    categoryNormal: "정상",
    categoryOverweight: "과체중",
    categoryObese: "비만",
  },
  en: {
    title: "BMI Calculator",
    instructionsLine1: "Enter your height and weight to",
    instructionsLine2: "check your BMI and weight category.",
    heightLabel: "Height (cm)",
    heightPlaceholder: "e.g. 170",
    weightLabel: "Weight (kg)",
    weightPlaceholder: "e.g. 65",
    calculateButton: "Calculate",
    resultLabel: "Result",
    alertMessage: "Please enter valid height and weight.",
    bmiText: "BMI",
    categoryText: "Weight Category",
    categoryUnderweight: "Underweight",
    categoryNormal: "Normal",
    categoryOverweight: "Overweight",
    categoryObese: "Obese",
  },
};

const BMICalculator: React.FC = () => {
  // 언어 상태: "ko" 또는 "en"
  const [language, setLanguage] = useState<"ko" | "en">("ko");

  // 입력값 상태
  const [height, setHeight] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [bmiResult, setBmiResult] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  // 브라우저 언어로 초기 설정
  useEffect(() => {
    const browserLang = navigator.language.substring(0, 2).toLowerCase();
    if (browserLang === "en") {
      setLanguage("en");
    } else {
      setLanguage("ko");
    }
  }, []);

  // 숫자 변환
  const parseValue = (value: number | "" | string) => {
    if (value === "") return NaN;
    return typeof value === "string" ? parseFloat(value) : value;
  };

  // BMI 계산 핸들러
  const handleCalculate = () => {
    const h = parseValue(height);
    const w = parseValue(weight);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      alert(t.alertMessage);
      return;
    }

    // 키를 미터(m)로 변환
    const heightM = h / 100;
    // BMI = 체중(kg) / (키(m))^2
    const bmi = w / (heightM * heightM);
    const bmiFixed = bmi.toFixed(2);

    setBmiResult(bmiFixed);
    setCategory(getBMICategory(bmi));
  };

  // BMI 범주 구분 함수
  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) {
      return t.categoryUnderweight; // 저체중
    } else if (bmi < 25) {
      return t.categoryNormal; // 정상
    } else if (bmi < 30) {
      return t.categoryOverweight; // 과체중
    } else {
      return t.categoryObese; // 비만
    }
  };

  // 현재 언어에 맞는 번역
  const t = translations[language];

  return (
    <div className="w-screen flex items-center justify-center">
      <div className="relative max-w-md w-full bg-white rounded-xl shadow-md px-8 py-12 text-center">
        {/* 언어 전환 버튼 */}
        <button
          onClick={() => setLanguage(language === "ko" ? "en" : "ko")}
          className="text-sm text-gray-500 underline absolute top-2 right-4"
        >
          {language === "ko" ? "English" : "한국어"}
        </button>

        <h1 className="text-2xl font-bold mb-4 text-blue-600">{t.title}</h1>
        <p className="text-gray-600 mb-6 text-sm leading-6">
          {t.instructionsLine1}
          <br />
          {t.instructionsLine2}
        </p>

        <div className="flex flex-col space-y-4 text-left">
          <InputField
            label={t.heightLabel}
            type="number"
            placeholder={t.heightPlaceholder}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <InputField
            label={t.weightLabel}
            type="number"
            placeholder={t.weightPlaceholder}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <button
          onClick={handleCalculate}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md 
                   hover:bg-blue-700 focus:outline-none transition-colors"
        >
          {t.calculateButton}
        </button>

        {/* 결과 표시 영역 */}
        {bmiResult && category && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md text-left">
            <p className="text-blue-800 text-sm mb-2 font-semibold">
              {t.resultLabel}
            </p>
            <div className="flex flex-col space-y-1">
              <p>
                <span className="font-medium">{t.bmiText}: </span>
                {bmiResult}
              </p>
              <p>
                <span className="font-medium">{t.categoryText}: </span>
                {category}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
