import Link from "next/link";
import React from "react";

export const metadata = {
  title: "HandyHub",
  description: "간단한 계산은 여기서 해결하세요!",
  openGraph: {
    title: "Handyhub",
    description: "간단한 계산은 여기서 해결하세요!",
    url: "https://mydomain.com/my-route",
    images: [
      {
        url: "https://github.com/user-attachments/assets/75df5a3b-abb2-4920-931c-8f8d77291fdf",
      },
    ],
    siteName: "My Site",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter Title",
    description: "Twitter Description",
    images: [
      "https://github.com/user-attachments/assets/75df5a3b-abb2-4920-931c-8f8d77291fdf",
    ],
  },
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 flex flex-col items-center justify-center">
      {/* 메인 컨테이너 */}
      <div className="max-w-4xl w-full px-4 py-16">
        {/* Hero 섹션 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-2">HandyHub</h1>
          <p className="text-gray-600">간단한 계산은 여기서 해결하세요!</p>
        </div>

        {/* 버튼/링크를 카드 형태로 그리드 배치 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Compound Interest */}
          <Link
            href="/compound-interest"
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow hover:shadow-md transition p-6"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Compound Interest
            </h2>
            <p className="text-gray-500 text-sm">
              Calculate compounded interest
            </p>
          </Link>

          {/* BMI Calculator */}
          <Link
            href="/bmi-calculator"
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow hover:shadow-md transition p-6"
          >
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              BMI Calculator
            </h2>
            <p className="text-gray-500 text-sm">
              Check your BMI and weight category
            </p>
          </Link>

          {/* Text Counter */}
          <Link
            href="/text-counter"
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow hover:shadow-md transition p-6"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              Text Counter
            </h2>
            <p className="text-gray-500 text-sm">
              Count characters with/without spaces
            </p>
          </Link>

          {/* Length Converter */}
          <Link
            href="/length-converter"
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow hover:shadow-md transition p-6"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              Length Converter
            </h2>
            <p className="text-gray-500 text-sm">cm, inch, feet, meter</p>
          </Link>

          {/* Weight Converter */}
          <Link
            href="/weight-converter"
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow hover:shadow-md transition p-6"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              Weight Converter
            </h2>
            <p className="text-gray-500 text-sm">kg, lb, g</p>
          </Link>

          {/* Temperature Converter */}
          <Link
            href="/temp-converter"
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow hover:shadow-md transition p-6"
          >
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              Temperature Converter
            </h2>
            <p className="text-gray-500 text-sm">Celsius ↔ Fahrenheit</p>
          </Link>

          {/* Speed Converter */}
          <Link
            href="/speed-converter"
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow hover:shadow-md transition p-6"
          >
            <h2 className="text-xl font-semibold text-purple-600 mb-2">
              Speed Converter
            </h2>
            <p className="text-gray-500 text-sm">km/h, mph, m/s</p>
          </Link>

          {/* Pressure Converter */}
          <Link
            href="/pressure-converter"
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow hover:shadow-md transition p-6"
          >
            <h2 className="text-xl font-semibold text-teal-600 mb-2">
              Pressure Converter
            </h2>
            <p className="text-gray-500 text-sm">Pa, atm, bar</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
