"use client";

import React, { ChangeEventHandler, MutableRefObject, useState, useRef } from 'react';


interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error: boolean;
  icon: React.ReactNode;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  handleFocus?: () => void;
  handleBlur?: () => void;
  isFocused?: boolean;
  rightIcon?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, error, onChange, icon, inputRef, handleBlur, handleFocus, isFocused, rightIcon }) => {

  return (
    <div
      className={`flex items-center bg-white rounded-lg shadow-md px-4 py-1 transition duration-150 ease-in-out ${
        isFocused || error 
        ? 'focus-within:border-red border-red'
        : 'focus-within:border-primary border-gray-gray4'
      }`}
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
      {rightIcon}
    </div>
  );
};

export default InputField;

