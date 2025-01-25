import React, { useState, useEffect } from "react";

// 한국어/영어 번역
const translations = {
  ko: {
    title: "글자수 세기",
    instructionsLine1: "아래 텍스트박스에 텍스트를 입력하면,",
    instructionsLine2: "공백 포함/미포함 글자수가 자동으로 계산됩니다.",
    placeholder: "텍스트를 입력해주세요",
    withSpace: "공백 포함 글자수",
    withoutSpace: "공백 미포함 글자수",
  },
  en: {
    title: "Character Counter",
    instructionsLine1: "Type your text in the box below,",
    instructionsLine2: "and the character counts will update automatically.",
    placeholder: "Please type your text here",
    withSpace: "Characters (including spaces)",
    withoutSpace: "Characters (excluding spaces)",
  },
};

const TextCounterPage: React.FC = () => {
  // 언어 상태 ("ko" 또는 "en")
  const [language, setLanguage] = useState<"ko" | "en">("ko");

  // 사용자 입력 텍스트
  const [text, setText] = useState<string>("");

  // 브라우저 언어 자동 설정
  useEffect(() => {
    const browserLang = navigator.language.substring(0, 2).toLowerCase();
    if (browserLang === "en") {
      setLanguage("en");
    } else {
      setLanguage("ko");
    }
  }, []);

  // 현재 언어에 따른 번역
  const t = translations[language];

  // 글자수 계산: 실시간으로 text 변경 시 매번 계산
  const withSpaceCount = text.length;
  const withoutSpaceCount = text.replace(/\s/g, "").length;

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

        {/* 텍스트 입력 영역 */}
        <textarea
          className="w-full border border-gray-300 rounded-md px-3 py-2 
                   focus:outline-none focus:border-blue-500 min-h-[120px] text-left"
          placeholder={t.placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* 결과 영역 */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md text-left space-y-2">
          <p className="text-blue-800 text-sm font-semibold mb-1">{t.title}</p>
          <p>
            <span className="font-medium">{t.withSpace}: </span>
            {withSpaceCount}
          </p>
          <p>
            <span className="font-medium">{t.withoutSpace}: </span>
            {withoutSpaceCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextCounterPage;
