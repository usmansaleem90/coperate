"use client"
import axios from 'axios';
import AuthWrapper from "@/components/Auth/Auth-Wrapper";
import Button from "@/components/UI/form-button";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { verifyOTP } from '@/redux/actions/TwoFactorActions';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';

const TwoFactorPage = () => {
  const router=useRouter();
  const dispatch = useDispatch();
  const otpRefs = useRef([]);
  const [otpValue, setOtpValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e, index) => {
    const newValue = otpValue + e.target.value;
    setOtpValue(newValue);
  
    if (e.target.value.length === 1 && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1].focus();
    }
  };



  const handleSubmit = () => {
    console.log("btn is clicked");
    setLoading(true);
    dispatch(verifyOTP(otpValue, router))
      .then((response) => {
        console.log("Request successful:", response);
        setLoading(false);
        // Handle success response
      })
      .catch((error) => {
        console.error("Error processing request:", error);
        setLoading(false);
        // Handle error response
      });
  };

  useEffect(() => {
    otpRefs.current[0].focus();
  }, []);

  return (
    <>
      <AuthWrapper>
        <div className="flex flex-col items-center justify-center w-full h-full max-lg:min-h-screen gap-14">
          <svg
            width="71"
            height="114"
            viewBox="0 0 71 114"
            fill="none"
            xmlns="(link unavailable)"
            className="bg-[#9EDCFF] rounded-xl"
          >
            <path
              d="M10.3472 3.41018H60.7422C64.3802 3.41018 67.2517 6.29729 67.2517 9.92822V104.128C67.2517 107.757 64.3788 110.647 60.7422 110.647H10.3472C6.71197 110.647 3.83624 107.757 3.83624 104.128V9.92822C3.83766 6.29871 6.71197 3.41018 10.3472 3.41018ZM10.3472 0.461914C5.12761 0.461914 0.880859 4.70867 0.880859 9.92822V104.128C0.880859 109.35 5.12761 113.594 10.3472 113.594H60.7422C65.9646 113.594 70.2156 109.35 70.2156 104.128V9.92822C70.2156 4.70867 65.9646 0.461914 60.7422 0.461914H10.3472Z"
              fill="#CBD5E1"
            />
            <path
              d="M30.7794 6.60352C29.9559 6.60352 29.2988 7.26058 29.2988 8.08405C29.2988 8.90609 29.9559 9.566 30.7794 9.566H41.0606C41.8755 9.566 42.5426 8.90609 42.5426 8.08405C42.5426 7.26058 41.8755 6.60352 41.0606 6.60352H30.7794Z"
              fill="#CBD5E1"
            />
          </svg>

          <div className="flex flex-col text-[#334155] items-center justify-start text-center md:w-1/2 w-[90%] h-auto text-base font-normal leading-5 space-y-2">
            <h1 className="text-xl font-bold text-black">
              Two-Factor Verification
            </h1>
            <span className="">
              Enter the verification code displayed in your{" "}
              <p className="font-bold">Authenticator App</p>
            </span>
          </div>

          <div className="w-full h-auto flex flex-col justify-start gap-2 items-center text-[#334155] text-base font-normal leading-5">
            <p className="md:w-[70%] w-[90%] mx-auto font-bold text-start">
              Type your 6 digits security code
            </p>
            <div
              id="otp-container"
              className="md:space-x-3 space-x-1 md:w-[70%] w-[90%] flex flex-nowrap justify-between items-center"
            >
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength="1"
                  placeholder="1"
                  
                  onChange={(e) => handleInputChange(e, index)}
                  ref={(el) => (otpRefs.current[index] = el)}
                  className="max-w-16 max-h-16 min-w-12 min-h-12 max-md:w-4 max-md:h-4 border rounded-lg outline-none focus:outline-none text-center placeholder:text-[#B2B2B2] font-normal md:text-base text-sm leading-5"
                />
              ))}
            </div>
          </div>

          <div className="w-[30%] max-md:w-[40%] h-auto">
            <Button className="w-full h-auto" onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </AuthWrapper>
    </>
  );
};

export default TwoFactorPage;
