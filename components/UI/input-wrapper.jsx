"use client";

import React, { useRef, useState } from "react";

// * lib imports
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";

const InputWrapper = ({
  type,
  placeholder,
  forgot,
  link,
  placeholderColor,
  iconType,
  value,
  onChange
}) => {
  const [inputType, setInputType] = useState(type || "text");
  const [showPassword, setShowPassword] = useState(true);
  const [copyMessage, setCopyMessage] = useState("");

  const inputRef = useRef(null);

  const handleCopyText = () => {
    if (inputRef.current.value === "") {
      setCopyMessage("Please enter something to copy.");
    } else {
      inputRef.current.select();
      document.execCommand("copy");
      setCopyMessage("Text copied!");
    }
    setTimeout(() => {
      setCopyMessage("");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-start w-full h-auto gap-2">
      {/* main container */}

      <div
        className={`w-full border h-14 relative bg-[#fafafc] rounded-lg text-start text-sm font-normal leading-4`}
      >
        <input
          ref={inputRef}
          type={inputType}
          autoFocus
          placeholder={placeholder || "Placeholder"}
          value={value} // Add value prop
          onChange={onChange} // Add onChange event handler
          className={`w-full h-full py-6 px-5 bg-[#fafafc] rounded-lg text-start  text-sm font-normal leading-4 outline-none focus:outline-none ${
            placeholderColor
              ? " placeholder:text-[#1D4B7E]"
              : "placeholder:text-fTextGrey"
          }`}
        />

        {copyMessage && (
          <span className="text-xs text-green-500">{copyMessage}</span>
        )}

        {iconType && iconType !== "" && (
          <button onClick={handleCopyText}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-5 h-5 cursor-pointer right-2 top-4"
            >
              <path
                d="M17 13.4V16.4C17 20.4 15.4 22 11.4 22H7.6C3.6 22 2 20.4 2 16.4V12.6C2 8.6 3.6 7 7.6 7H10.6"
                stroke="#2563EB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.9996 13.4H13.7996C11.3996 13.4 10.5996 12.6 10.5996 10.2V7L16.9996 13.4Z"
                stroke="#2563EB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.5996 2H15.5996"
                stroke="#2563EB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 5C7 3.34 8.34 2 10 2H12.62"
                stroke="#2563EB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.0004 8V14.19C22.0004 15.74 20.7404 17 19.1904 17"
                stroke="#2563EB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 8H19C16.75 8 16 7.25 16 5V2L22 8Z"
                stroke="#2563EB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        )}
        {type === "password" && (
          <>
            {showPassword ? (
              <>
                <IoEyeOutline
                  onClick={() => {
                    setShowPassword(!showPassword), setInputType("text");
                  }}
                  className="absolute w-5 h-5 cursor-pointer right-2 top-4"
                />
              </>
            ) : (
              <>
                <FaRegEyeSlash
                  onClick={() => {
                    setShowPassword(!showPassword), setInputType("password");
                  }}
                  className="absolute w-5 h-5 cursor-pointer right-2 top-4"
                />
              </>
            )}
          </>
        )}
      </div>
      {forgot && forgot !== "" && (
        <Link
          href={link || ""}
          className="flex items-end justify-end w-full h-auto text-sm font-normal leading-4 text-black"
        >
          {forgot}
        </Link>
      )}
    </div>
  );
};

export default InputWrapper;
