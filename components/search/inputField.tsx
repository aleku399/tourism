"use client";

import React, { ChangeEventHandler, useState, useRef } from 'react';


interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error: boolean;
  icon: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, error, onChange, icon }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    inputRef.current?.focus();
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`flex items-center bg-white rounded-lg shadow-md px-4 py-1 transition duration-150 ease-in-out ${
        isFocused || error 
        ? 'focus-within:border-red border-red'
        : 'focus-within:border-primary border-gray-gray4'
      }`}
      onClick={() => inputRef.current?.focus()}
    >
      {icon}
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        className="w-full px-2 pb-1.5 text-primary border-none focus:ring-0 text-base font-light outline-none focus:outline-none"
        onChange={onChange}
        onClick={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default InputField;

