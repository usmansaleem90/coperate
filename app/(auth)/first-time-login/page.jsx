"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQRCode } from "@/redux/actions/qrCodeAction";
import Link from "next/link";
import Button from "@/components/UI/form-button";
import {QRCodeSVG} from 'qrcode.react';
import GoogleImg from "@/public/images/google.svg";
import AppleImg from "@/public/images/apple.svg";
import QRImg from "@/public/images/QRCode.svg";
import Toast  from "../../../components/Toast/Toast";
import axios from "axios";
import Cookies from 'js-cookie';
const FirstTimeLoginPage = () => {
  const dispatch = useDispatch();
  const qrCodeUrl = useSelector((state) => state.qrCodeUrl);
  const [error, setError] = useState(null);
  const otpRefs = useRef([]);
  const [otpValue, setOtpValue] = useState("");

 
  const handleInputChange = (e, index) => {
    const newValue = otpValue + e.target.value;
    setOtpValue(newValue);

    if (e.target.value.length === 1 && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1].focus();
    }
  };

  useEffect(() => {
    dispatch(getQRCode()).catch((error) => {
      console.error("Error fetching QR code:", error);
      setError(error.message || "Failed to fetch QR code");
    });
  }, [dispatch]);

  useEffect(() => {
    otpRefs.current[0].focus();
  }, []);

 
  var code = Cookies.get("qrcode")





  const handleContinue = () => {
    const userDataString = Cookies.get("userData");

    if (!userDataString) {
      setError("User data not found in local storage");
      return;
    }
  
    const userData = JSON.parse(userDataString).tokenDto;
    const emailId = userData.emailId;
    const memberId = userData.accountId;
    const totp = otpValue;
    console.log("usman" , emailId , memberId , otpValue)
  
    axios
      .post("https://oxygentestenv01.oxygen-global.com/cardholderadmin/gAuth/validate/totp", {
        email: emailId, 
        userId: memberId, 
        totp: totp,
      })
      .then((response) => {
        Toast( "sucess" ,'verification successful');
       
        console.log("TOTP verification successful");
        window.location.href = '/forgot-password/new-password';
        
      })
      .catch((error) => {
        Toast( "err" , 'verification failed , InValid OTP');
        console.error("Error verifying TOTP:", error);
        setError("Failed to verify TOTP");
      });
  };
  

  

  return (
    <>
      <div className="flex items-start justify-center w-full h-full min-h-dvh bg-[#d1dbec] p-[2%]">
        <div className="flex items-start justify-between w-full h-full gap-5 bg-transparent">
          <div className="max-lg:hidden min-w-[33%] max-w-[30%] min-h-dvh h-full flex flex-col justify-start items-start border rounded-xl bg-white px-[2%] pt-[2%] pb-[10%] gap-12">
            <h1 className="text-xl font-bold leading-7 text-black">
              Two-Factor Authentication Set up Instructions
            </h1>
            <div className="w-full h-auto space-y-10">
              <div className="flex flex-col items-start justify-start w-full h-auto gap-6">
                <div className="w-full h-auto gap-3 text-base font-normal leading-5 text-[#64748B] flex flex-col">
                  <h1 className="flex items-center justify-center w-8 h-8 text-base font-extrabold leading-5 text-center text-white rounded-full bg-fBlue">
                    1
                  </h1>
                  <h1 className="text-lg font-bold leading-6 text-black">
                    Download Authenticator App
                  </h1>
                  <span className="flex flex-wrap items-center justify-start w-full h-auto gap-x-1">
                    You can use{" "}
                    <span className="text-[#008CD9] font-semibold">
                      Google Authenticator,
                    </span>{" "}
                    Authy or 1 Password as well as Google Authenticator.
                  </span>
                </div>
                <div className="flex items-center justify-start w-full h-auto gap-1">
                  <div className="w-[40%] h-12">
                    <Image
                      src={GoogleImg}
                      alt=""
                      width={500}
                      height={500}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="w-[40%] h-12">
                    <Image
                      src={AppleImg}
                      alt=""
                      width={500}
                      height={500}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start w-full h-auto gap-6">
                <div className="w-full h-auto gap-3 text-base font-normal leading-5 text-[#64748B] flex flex-col">
                  <h1 className="flex items-center justify-center w-8 h-8 text-base font-extrabold leading-5 text-center text-white rounded-full bg-fBlue">
                    2
                  </h1>
                  <h1 className="text-lg font-bold leading-6 text-black">
                    Scan QR code with the App
                  </h1>
                  <span className="flex flex-wrap items-center justify-start w-full h-auto gap-x-1">
                    If your device does not support QR codes, Input a secret key
                    given below the QR code manually into your Authenticator
                    App.
                  </span>
                </div>
                <div className="flex items-center justify-start w-full h-auto gap-1">
                  <div className="w-[40%] h-32">
                  <img src={`data:image/png;base64,${code}`} alt="QR Code" width={500} height={500} className="object-contain w-auto h-full" />

                    {/* <div className="flex items-center justify-start w-full h-auto gap-1">
                      <div className="w-[40%] h-32">
                        {qrCodeUrl && <QRCodeSVG value="" size={225} />}
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start w-full h-auto gap-6">
                <div className="w-full h-auto gap-3 text-base font-normal leading-5 text-[#64748B] flex flex-col">
                  <h1 className="flex items-center justify-center w-8 h-8 text-base font-extrabold leading-5 text-center text-white rounded-full bg-fBlue">
                    3
                  </h1>
                  <h1 className="text-lg font-bold leading-6 text-black">
                    Enter the Code
                  </h1>
                  <span className="flex flex-wrap items-center justify-start w-full h-auto gap-x-1">
                    Then enter your code
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:items-start items-center justify-center md:justify-start w-auto min-h-dvh h-full gap-[20vh] bg-white border grow rounded-xl px-[2%] pt-[4%] pb-[18%]">
            <div className="flex flex-col items-center justify-between w-full h-auto gap-4 md:items-start md:flex-row">
              <div className="flex flex-col items-start justify-start w-auto h-auto gap-3 md:gap-6 grow">
                <div className="flex flex-col items-center justify-center w-full h-auto space-y-2 md:items-start md:justify-start">
                  <h1 className="text-[#000000] font-bold text-2xl leading-9 md:text-start text-center">
                    Two-Factor Authentication Set up
                  </h1>
                  <span className="text-base font-normal leading-5">
                    Scan the QR code or enter the code
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-auto space-y-2 md:items-start md:justify-start">
                  <h1 className="text-[#64748B] text-sm font-bold leading-4">
                    Whose
                  </h1>
                  <div className="flex flex-col items-center justify-center w-full h-auto md:items-start md:justify-start">
                    <h1 className="text-[#000000] font-bold text-lg leading-9">
                      Username here
                    </h1>
                    <span className="text-base font-normal leading-5">
                      username
                    </span>
                  </div>
                </div>
                <div className="flex flex-col text-[#334155] md:items-start items-center justify-center md:justify-start md:text-start text-center md:w-full w-[90%] h-auto text-base font-normal leading-5 space-y-2">
                  <h1 className="text-base font-bold text-black md:text-xl">
                    Enter the via third- a authenticator
                  </h1>
                  <span className="">
                    Please use your authentication app (such as Duo or Google
                    Authenticator) to scan this QR code.
                  </span>
                </div>
                <div className="w-full h-auto flex flex-col justify-center md:justify-start gap-4 items-center md:items-start text-[#334155] text-base font-normal leading-5">
                  <p className="w-full mx-auto font-bold text-center md:text-start">
                    Type your 6 digits security code
                  </p>
                  <div
                    id="otp-container"
                    className="flex items-center md:justify-start justify-center md:w-[80%] w-[90%] space-x-1 md:space-x-3 flex-nowrap"
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
                        className="max-w-16 max-h-16 lg:min-w-14 lg:min-h-14 min-w-10 min-h-10 max-md:w-4 max-md:h-4 border rounded-lg outline-none focus:outline-none text-center placeholder:text-[#B2B2B2] font-normal md:text-base text-sm leading-5"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:min-w-[30%] min-w-[10vw] max-w-[40%] h-auto ">
                {qrCodeUrl && (
                  <>
                                     <img src={`data:image/png;base64,${code}`} alt="QR Code" width={500} height={500} className="object-contain w-auto h-full" />

                              <p>QR Code URL: {code}</p> {/* Add console log here */}
                  </>
                )}
              </div>
            </div>

            <div className="w-[40%] max-md:mx-auto h-auto">
              <Link
                // href={"/forgot-password/new-password"}
                href={''}
                className="w-full h-auto "
              >
                <Button onClick={handleContinue}>Continue</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstTimeLoginPage;
