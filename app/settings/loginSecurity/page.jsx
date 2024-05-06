"use client";

import DashboardWrapper from "@/components/Dashboard/Dashboard-Wrapper";
import LoginAUthWrapper from "@/components/Settings/LoginAUthWrapper";
import { useState } from "react";

const LoginPage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [answer, setAnswer] = useState("");
  return (
    <>
      {/* main container */}
      <DashboardWrapper
        title1={"Settings"}
        title2={"Dashboard - Settings"}
        top={true}
      >
        <div className="w-full h-auto p-[2%] space-y-5">
          <div className="w-full p-[2%] h-auto flex justify-start items-start bg-white flex-col gap-2 rounded-[10px]">
            <h1 className="text-[#000000] text-base font-bold leading-5">
              Login & Security
            </h1>
            <p className="text-[#52525B] font-normal text-sm leading-4">
              Update your password and secure your account
            </p>
          </div>

          <LoginAUthWrapper
            option={`Authentication options`}
            desc={``}
            heading={`Passwords`}
            question={`Password has been set`}
            setShowDialog={setShowDialog}
          >
            <p className="text-[#000000] text-sm leading-4 font-normal">
              You currently use{" "}
              <button className="text-[#008CD9] font-bold">
                Google Sign-in
              </button>{" "}
              to login.
            </p>
          </LoginAUthWrapper>

          <LoginAUthWrapper
            option={`Two-step verification options`}
            desc={`Add an extra layer of security to block unauthorized access and protect your account.`}
            heading={`Security question`}
            question={`Enabled`}
            setShowDialog={setShowDialog}
          >
            <p className="text-[#000000] text-sm leading-4 font-normal">
              {`Answer a question you choose to confirm it's you.`}
            </p>
          </LoginAUthWrapper>
        </div>
      </DashboardWrapper>

      {showDialog && (
        <div className="absolute top-0 left-0 w-full min-h-dvh h-auto py-[8%] z-10 bg-[#0000005E] flex justify-center items-center ">
          {/* container */}
          <div className="max-w-[50%] gap-8 min-w-[428px] w-auto overflow-auto min-h-[722px] h-auto bg-white rounded-[10px] flex flex-col justify-start items-start p-[1%]">
            <div className="flex items-start justify-between w-full h-auto">
              <div className="flex flex-col items-start justify-start w-auto h-auto space-y-2">
                <h1 className="text-[#000000] font-bold text-lg leading-5">
                  Security question
                </h1>
                <span className="text-[#71717A] text-base font-normal leading-5">
                  Before you can set a new security question, you’ll have to
                  answer your current one correctly.
                </span>
              </div>

              {/* close button */}
              <button
                onClick={() => {
                  setShowDialog(false);
                }}
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9883 10.9896L23.0091 23.0104"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.9909 23.0104L23.0117 10.9896"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex text-[#000000] text-sm leading-4 font-normal flex-col items-start justify-start w-full h-auto space-y-2">
              <h1 className="font-semibold">Current Question</h1>
              <span className="text-base font-normal leading-5 ">
                What’s My Father Name?
              </span>
            </div>

            <div className="flex flex-col items-start justify-start w-full h-auto pb-6 border-b">
              {/* input transaction div */}
              <div className="flex flex-col items-start justify-start w-full h-auto gap-3">
                <label
                  htmlFor="transaction"
                  className="text-[#27272A] text-sm font-semibold leading-4"
                >
                  Answer
                </label>

                <div className="w-full h-[60px] bg-[#F8FAFC] border-[1.5px] border-[#E2E8F0] rounded-lg flex justify-center px-[3%] gap-2 items-start">
                  <input
                    type="text"
                    name="Answer"
                    id="Answer"
                    autoFocus
                    placeholder="Type here"
                    value={answer}
                    onChange={(e) => {
                      setAnswer(e.target.value);
                    }}
                    // pattern="^\d*$"
                    className="bg-transparent outline-none focus:outline-none w-auto grow h-full flex justify-center items-start text-start placeholder:text-[#3F3F46] text-sm leading-4 font-normal"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start w-full h-auto gap-4 ">
              {/* input transaction div */}
              <div className="flex flex-col items-start justify-start w-full h-auto gap-3">
                <label
                  htmlFor="transaction"
                  className="text-[#27272A] text-sm font-semibold leading-4"
                >
                  New Question
                </label>

                <div className="w-full h-[60px] bg-[#F8FAFC] border-[1.5px] border-[#E2E8F0] rounded-lg flex justify-between px-[3%] gap-2 items-center">
                  <input
                    type="select"
                    name="Answer"
                    id="Answer"
                    disabled
                    autoFocus
                    placeholder="What’s My Pet Name?"
                    // value={answer}

                    className="bg-transparent outline-none focus:outline-none w-auto grow h-full flex justify-center items-start text-start placeholder:text-[#3F3F46] text-sm leading-4 font-normal"
                  />
                  <button className="flex items-center justify-center w-auto h-auto">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.6189 5.22083C11.6189 5.22083 8.26474 8.57499 7.81557 9.02416C7.59098 9.24875 6.99886 9.7222 6.99886 9.7222C6.99886 9.7222 6.40681 9.24873 6.18224 9.02416L2.37891 5.22083"
                        stroke="#334155"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* input transaction div */}
              <div className="flex flex-col items-start justify-start w-full h-auto gap-3">
                <label
                  htmlFor="transaction"
                  className="text-[#27272A] text-sm font-semibold leading-4"
                >
                  Answer
                </label>

                <div className="w-full h-[60px] bg-[#F8FAFC] border-[1.5px] border-[#E2E8F0] rounded-lg flex justify-center px-[3%] gap-2 items-start">
                  <input
                    type="text"
                    name="Answer"
                    id="Answer"
                    autoFocus
                    placeholder="Type here"
                    value={answer}
                    onChange={(e) => {
                      setAnswer(e.target.value);
                    }}
                    // pattern="^\d*$"
                    className="bg-transparent outline-none focus:outline-none w-auto grow h-full flex justify-center items-start text-start placeholder:text-[#3F3F46] text-sm leading-4 font-normal"
                  />
                </div>
              </div>

              {/* term & conditons div */}
              <div className="w-full h-auto flex flex-col justify-start items-start gap-[15px]">
                <div className="flex items-center justify-start w-full h-auto gap-2">
                  <input
                    type="checkbox"
                    name="understand"
                    id="understand"
                    checked
                    className="w-5 h-5 border-[2px] cursor-pointer appearance-none border-[#94A3B8] rounded-md accent-[#94A3B8]"
                  />
                  <p className="text-[#000000] text-sm leading-7 font-normal">
                    I understand my account will be locked if I am unable to
                    answer this question
                  </p>
                </div>

                <div className="flex items-center justify-start w-full h-auto gap-2">
                  <input
                    type="checkbox"
                    name="understand"
                    id="understand"
                    checked
                    className="w-5 h-5 border-[2px] cursor-pointer appearance-none border-[#94A3B8] rounded-md accent-[#94A3B8]"
                  />
                  <p className="text-[#000000] text-sm leading-7 font-normal">
                    Keep me logged in on this device
                  </p>
                </div>
              </div>
            </div>

            {/* button div */}
            <div className="flex items-center justify-start w-full h-auto gap-4 text-sm font-bold leading-4">
              <button
                className="bg-[#CBD5E1] text-[#475569] h-11 min-w-[117px] w-auto py-3 px-8 rounded"
                onClick={() => setShowDialog(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[#0D4C7B] mt-auto text-[#FFFFFF] h-11 min-w-[117px] w-auto py-3 px-8 rounded"
                onClick={() => setShowDialog(false)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
