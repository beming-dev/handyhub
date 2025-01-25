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
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-2/3 min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome!</h1>
        <p className="text-gray-700 mb-4">This is the Home Page.</p>
        <div className="flex space-x-2 space-y-2 flex-wrap">
          <div></div>
          <Link
            href="/compound-interest"
            className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Go to Compound Interest
          </Link>
          <Link
            href="/bmi-calculator"
            className="text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Go to BMI Calculator
          </Link>
          <Link
            href="/text-counter"
            className="text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Go to Text Counter
          </Link>

          <Link
            href="/length-converter"
            className="text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Go to Length Converter
          </Link>

          <Link
            href="/weight-converter"
            className="text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Go to Weight Converter
          </Link>
          <Link
            href="/temp-converter"
            className="text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            Temperature Converter
          </Link>
          <Link
            href="/speed-converter"
            className="text-white bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Speed Converter
          </Link>
          <Link
            href="/pressure-converter"
            className="text-white bg-teal-600 px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
          >
            Pressure Converter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
