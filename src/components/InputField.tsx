import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md px-3 py-2 
                   focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default InputField;
