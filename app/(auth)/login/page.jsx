"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import AuthWrapper from "@/components/Auth/Auth-Wrapper";
import Button from "@/components/UI/form-button";
import FormInputWrapper from "@/components/UI/form-input-wrapper";
import InputWrapper from "@/components/UI/input-wrapper";
import LabelWrapper from "@/components/UI/label-wrapper";
import Logo from "@/public/images/logoIcon.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/actions/authActions";
import Toast from "../../../components/Toast/Toast";
import './login.css'

const LoginPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => state.auth
  );
  const router = useRouter();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setloginErr] = useState("");

  const handleSubmit = async (event) => {
    if (!userName) {
      Toast("err", "Enter UserName");
      return;
    }
    
    if (!password) {
      Toast("err", "Enter Password");
      return;
    }


    event.preventDefault();
    try {
      dispatch(loginUser(userName, password, router));
    } catch (error) {
      return "err", error;
    }
  };


  return (
    <AuthWrapper>
      <div className="flex max-lg:min-h-screen flex-col items-center justify-center w-full h-full gap-10 bg-white max-lg:py-[8%] rounded-lg">
        <div className="flex flex-col items-center justify-center w-full h-auto gap-3">
          <Image
            src={Logo}
            alt="logo"
            width={500}
            height={500}
            className="object-contain h-auto w-28"
          />
          <h1 className="lg:max-w-[20%] max-w-[50%] text-center flex justify-center items-center h-auto text-xl font-bold leading-6 text-fTextBlue">
            Corporate Ordering Management
          </h1>
        </div>

        <div className="flex flex-col items-center gap-4 justify-start md:w-[60%] w-[90%] h-auto">
          <FormInputWrapper>
            <LabelWrapper>Username</LabelWrapper>
            <InputWrapper
              placeholderColor={false}
              forgot={"Forgot Username?"}
              link={"/forgot-username"}
              placeholder={"Username"}
              type={"text"}
              value={userName}
              onChange={(event) => setUsername(event.target.value)}
            />
          </FormInputWrapper>

          <FormInputWrapper>
            <LabelWrapper>Password</LabelWrapper>
            <InputWrapper
              placeholderColor={false}
              forgot={"Forget Password?"}
              link={"/forgot-password"}
              placeholder={"Type here"}
              type={"password"}
              value={password} 
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormInputWrapper>
           {
            !isLoading ?(
              <Button onClick={handleSubmit}>Login</Button>

            ):(
              <p className="spinner"></p>
             

            )
           }
        </div>
      </div>
    </AuthWrapper>
  );
};

export default LoginPage;
