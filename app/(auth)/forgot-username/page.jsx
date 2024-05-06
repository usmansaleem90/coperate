// ForgetUsernamePage.js
"use client"
import AuthWrapper from "@/components/Auth/Auth-Wrapper";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { LoginRequest } from "@/redux/actions/forgetUsernameActions";
import Image from "next/image";
import forgotPasswordImg from "@/public/images/forgot-password-icon.svg";
import FormInputWrapper from "@/components/UI/form-input-wrapper";
import LabelWrapper from "@/components/UI/label-wrapper";
import InputWrapper from "@/components/UI/input-wrapper";
import Button from "@/components/UI/form-button";
import Link from "next/link";

const ForgetUsernamePage = () => {
  const otpRefs = useRef([]);
  const dispatch = useDispatch();
  const [email, setEmail] = useState(""); // State to hold email
  const [otpValue, setOtpValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch login request action with email and OTP
    dispatch(LoginRequest(email, otpValue));
  };

  const handleInputChange = (e, index) => {
    const newValue = otpValue.substr(0, index) + e.target.value + otpValue.substr(index + 1);
    setOtpValue(newValue);

    if (e.target.value.length === 1 && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1].focus();
    }
  };

  useEffect(() => {
    otpRefs.current[0].focus();
  }, []);

  return (
    <AuthWrapper>
      <div className="flex flex-col items-start justify-around w-full h-full border max-lg:min-h-screen max-md:gap-8">
        <div className="w-full h-auto space-y-8">
          <div className="w-[60%] h-auto mx-auto">
            <Image
              src={forgotPasswordImg}
              alt="forgotPasswordImg"
              width={500}
              height={500}
              className="object-contain w-[60%] mx-auto h-auto"
            />
            <div className="flex flex-col text-[#334155] items-center justify-start text-center mx-auto w-full h-auto text-base font-normal leading-5 space-y-2">
              <h1 className="text-xl font-bold text-black">
                Recover your Username
              </h1>
              <span className="">
                Having an identity crisis? You can recover your username using
                the email address associated with your account.
              </span>
            </div>
          </div>
          <div className="md:w-[70%] w-[90%] h-auto mx-auto">
            <FormInputWrapper>
              <LabelWrapper>Enter your Email</LabelWrapper>
              <InputWrapper
                placeholder={"Type here"}
                type={"email"}
                forgot={""}
                link={""}
                placeholderColor={false}
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormInputWrapper>
          </div>
          <div className="md:w-[70%] w-[90%] h-auto flex flex-col justify-start gap-4 items-center text-[#334155] text-base font-normal leading-5 mx-auto">
            <p className="w-full mx-auto font-bold text-start">
              Type your 6 digits security code
            </p>
            <div
              id="otp-container"
              className="flex items-center justify-between w-full space-x-1 md:space-x-3 flex-nowrap"
            >
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text" // Change type to text
                  inputMode="numeric" // Add inputMode attribute
                  pattern="[0-9]*" // Add pattern attribute to allow only numeric input
                  maxLength="1"
                  placeholder="1"
                  value={otpValue[index] || ""}
                  onChange={(e) => handleInputChange(e, index)}
                  ref={(el) => (otpRefs.current[index] = el)}
                  className="max-w-16 max-h-16 min-w-14 min-h-14 max-md:w-4 max-md:h-4 border rounded-lg outline-none focus:outline-none text-center placeholder:text-[#B2B2B2] font-normal md:text-base text-sm leading-5"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-[70%] w-[90%] mx-auto h-auto ">
          <Button className="w-full h-auto" onClick={handleSubmit}>Continue</Button>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default ForgetUsernamePage;
