import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome!</h1>
      <p className="text-gray-700 mb-4">This is the Home Page.</p>
      <div className="flex space-x-2 space-y-2 flex-wrap">
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
  );
};

export default Home;
