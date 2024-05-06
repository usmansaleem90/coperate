"use client"
import { useDispatch, useSelector } from 'react-redux';
import {
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailure,
} from '../../../redux/actions/forgetPasswordActions';
import AuthWrapper from "@/components/Auth/Auth-Wrapper";
import Image from "next/image";
import React, { useState } from "react";
import forgotPasswordImg from "@/public/images/forgot-password-icon.svg";
import FormInputWrapper from "@/components/UI/form-input-wrapper";
import LabelWrapper from "@/components/UI/label-wrapper";
import InputWrapper from "@/components/UI/input-wrapper";
import Button from "@/components/UI/form-button";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Toast  from "../../../components/Toast/Toast";


const ForotPasswordPage = () => {
  const router=useRouter();
  const dispatch = useDispatch();
  const forgotPasswordState = useSelector((state) => state.forgotPassword);
  const [username, setUsername] = useState('');

  const handleForgotPassword = () => {
    Toast( "err" ,'No UserName Found');

    // dispatch(forgotPasswordRequest(username,router));
    console.log(username);
  };
  
  const handleUsernameChange = (e) => {
    const inputUsername = e.target.value;
    setUsername(inputUsername);
    console.log("Username input:", inputUsername);
  };

  return (
    <>
      {/* main container */}
      <AuthWrapper>
        <div className="flex flex-col items-start justify-around w-full h-full border max-lg:min-h-screen max-md:gap-8">
          {/* top container */}
          <div className="w-full h-auto space-y-8">
            {/* forgot password image */}
            <div className="w-[60%] h-auto mx-auto">
              <Image
                src={forgotPasswordImg}
                alt="forgotPasswordImg"
                width={500}
                height={500}
                className="object-contain w-[60%] mx-auto h-auto"
              />
              {/* forgotpassword div */}
              <div className="flex flex-col text-[#334155] items-center justify-start text-center mx-auto w-full h-auto text-base font-normal leading-5 space-y-2">
                <h1 className="text-xl font-bold text-black">
                  Forget Password
                </h1>
                <span className="">
                  Enter your Username, validate with authenticator app and reset
                  your account password.
                </span>
              </div>
            </div>
            {/* input wrapper */}
            <div className="md:w-[70%] w-[90%] h-auto mx-auto">
              <FormInputWrapper>
                <LabelWrapper>Enter your Username</LabelWrapper>
                <InputWrapper
                  placeholder={"Type here"}
                  type={"text"}
                  forgot={username}
                  link={""}
                  placeholderColor={false}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormInputWrapper>
            </div>
          </div>

          {/* button  */}
          <div className="md:w-[70%] w-[90%] mx-auto h-auto ">
            <Button onClick={handleForgotPassword}>Continue</Button>
          </div>
        </div>
      </AuthWrapper>
    </>
  );
};

export default ForotPasswordPage;
