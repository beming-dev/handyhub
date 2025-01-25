import React from "react";
import TextCounterClient from "./TextCounter";

export const metadata = {
  title: "글자수 세기 | Character Counter",
  description:
    "입력한 텍스트의 공백 포함/미포함 글자 수를 자동으로 계산합니다.",
};

export default function TextCounterPage() {
  return (
    <div className="w-screen flex items-center justify-center bg-gray-50 min-h-screen">
      <TextCounterClient />
    </div>
  );
}
