"use client"
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "@/redux/actions/newPasswordActions";
import AuthWrapper from "@/components/Auth/Auth-Wrapper";
import Button from "@/components/UI/form-button";
import FormInputWrapper from "@/components/UI/form-input-wrapper";
import InputWrapper from "@/components/UI/input-wrapper";
import LabelWrapper from "@/components/UI/label-wrapper";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NewPasswordPage = () => {
  const router=useRouter();
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');
  const newPasswordState = useSelector(state => state.newPassword);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [totp, setTotp] = useState("");
  const otpRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const newValue = e.target.value;
  
    if (newValue.length === 1 && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1].focus();
    }
    
    // Update totp state with concatenated value of all OTP inputs
    let newTotp = otpRefs.current.map(ref => ref.value).join("");
    setTotp(newTotp);
  };
  

  useEffect(() => {
    otpRefs.current[0].focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    dispatch(changePassword(password, totp,router));
  };

  return (
    <>
      {/* main container */}
      <AuthWrapper>
        <div className="w-full h-auto flex flex-col justify-start items-start p-[5%] space-y-10 text-start">
          {/* top div */}
          <div className="w-full h-auto space-y-3">
            <h1 className="text-[#000000] font-bold text-3xl leading-9">
              New Password
            </h1>
            <span className="text-[#52525B] font-normal text-base leading-5">
              Set a new Password
            </span>
          </div>

          {/* input div */}
          <div className="md:w-[70%] w-full h-auto space-y-12">
            <div className="w-full h-auto space-y-3">
              <FormInputWrapper>
                <LabelWrapper>Password</LabelWrapper>
                <InputWrapper
                  type={"password"}
                  placeholder={"Enter password"}
                  forgot={""}
                  placeholderColor={true}
                  link={""}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormInputWrapper>
              <FormInputWrapper>
                <LabelWrapper>Confirm Password</LabelWrapper>
                <InputWrapper
                  placeholderColor={true}
                  type={"password"}
                  placeholder={"Confirm Password"}
                  forgot={""}
                  link={""}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FormInputWrapper>
            </div>

            {/* two factor container */}
            <div className="flex flex-col text-[#334155] items-start justify-start text-start w-full h-auto text-base font-normal leading-5 space-y-2">
              <h1 className="text-xl font-bold text-black">
                Two-Factor Verification
              </h1>
              <span className="">
                Enter the verification code displayed in your{" "}
                <p className="font-bold">Authenticator App</p>
              </span>
            </div>

            {/* input otp */}
            <div className="w-full h-auto flex flex-col justify-start gap-4 items-center text-[#334155] text-base font-normal leading-5">
              <p className="w-full mx-auto font-bold text-start">
                Type your 6 digits security code
              </p>
              {/* OTP Input Fields */}
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
                    onChange={(e) => handleInputChange(e, index)}
                    ref={(el) => (otpRefs.current[index] = el)}
                    className="max-w-16 max-h-16 min-w-14 min-h-14 max-md:w-4 max-md:h-4 border rounded-lg outline-none focus:outline-none text-center placeholder:text-[#B2B2B2] font-normal md:text-base text-sm leading-5"
                  />
                ))}
              </div>
            </div>

            {/* submit button */}
            <div className="w-[80%] max-md:mx-auto h-auto">
              <Button onClick={handleSubmit}>Continue</Button>
            </div>
          </div>
        </div>
      </AuthWrapper>
    </>
  );
};

export default NewPasswordPage;
