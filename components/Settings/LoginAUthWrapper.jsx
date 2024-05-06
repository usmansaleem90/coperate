import React from "react";

const LoginAUthWrapper = ({
  children,
  option,
  desc,
  heading,
  question,
  setShowDialog,
}) => {
  return (
    <>
      {/* main container */}
      <div className="w-full h-auto flex flex-col justify-start items-center p-[2%] rounded-[10px] bg-white space-y-6">
        {/* top div */}
        <div className="text-[#000000] leading-5 w-full h-auto flex flex-col justify-start items-start space-y-[9px]">
          <h1 className="text-lg font-bold">{option}</h1>
          {desc !== "" && <p className="text-base font-normal">{desc || ""}</p>}
        </div>

        {/* bottom div */}
        <div className="flex items-center justify-between w-full h-auto">
          <div className="w-auto h-auto flex flex-col text-sm leading-5 font-normal text-[#000000] justify-start items-start space-y-4">
            <h1 className="text-[#64748B] text-base leading-5 font-bold">
              {heading}
            </h1>

            <div className="flex flex-col items-start justify-start w-auto h-auto space-y-2">
              <div className="w-auto h-auto flex justify-start items-center gap-[6px]">
                <div className="bg-[#008CD9] rounded-full w-[14px] h-[14px] flex justify-center items-center">
                  <svg
                    width="7"
                    height="5"
                    viewBox="0 0 7 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.125 2.49996L2.70833 4.08329L5.875 0.916626"
                      stroke="white"
                      stroke-width="1.58333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <h1 className="text-sm font-semibold leading-4 text-black">
                  {question}
                </h1>
              </div>

              <div className="flex items-center justify-start w-auto h-auto text-sm font-normal leading-4 text-black">
                {children}
              </div>
            </div>
          </div>

          {/* edit button */}
          <button
            onClick={() => {
              setShowDialog((prevShowDialog) => true);
            }}
          >
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="45"
                height="45"
                rx="22.5"
                fill="white"
                stroke="#E2E8F0"
              />
              <path
                opacity="0.4"
                d="M30.5 31.3334H15.5C15.1583 31.3334 14.875 31.05 14.875 30.7084C14.875 30.3667 15.1583 30.0834 15.5 30.0834H30.5C30.8417 30.0834 31.125 30.3667 31.125 30.7084C31.125 31.05 30.8417 31.3334 30.5 31.3334Z"
                fill="#334155"
              />
              <path
                opacity="0.4"
                d="M28.8495 15.9C27.2328 14.2834 25.6495 14.2417 23.9912 15.9L22.9828 16.9084C22.8995 16.9917 22.8662 17.125 22.8995 17.2417C23.5328 19.45 25.2995 21.2167 27.5078 21.85C27.5412 21.8584 27.5745 21.8667 27.6078 21.8667C27.6995 21.8667 27.7828 21.8334 27.8495 21.7667L28.8495 20.7584C29.6745 19.9417 30.0745 19.15 30.0745 18.35C30.0828 17.525 29.6828 16.725 28.8495 15.9Z"
                fill="#334155"
              />
              <path
                d="M26.007 22.6083C25.7653 22.4916 25.532 22.375 25.307 22.2416C25.1236 22.1333 24.9486 22.0166 24.7736 21.8916C24.632 21.8 24.4653 21.6666 24.307 21.5333C24.2903 21.525 24.232 21.475 24.1653 21.4083C23.8903 21.175 23.582 20.875 23.307 20.5416C23.282 20.525 23.2403 20.4666 23.182 20.3916C23.0986 20.2916 22.957 20.125 22.832 19.9333C22.732 19.8083 22.6153 19.625 22.507 19.4416C22.3736 19.2166 22.257 18.9916 22.1403 18.7583C22.0236 18.5083 21.932 18.2666 21.8486 18.0416L16.6153 23.275C16.507 23.3833 16.407 23.5916 16.382 23.7333L15.932 26.925C15.8486 27.4916 16.007 28.025 16.357 28.3833C16.657 28.675 17.0736 28.8333 17.5236 28.8333C17.6236 28.8333 17.7236 28.825 17.8236 28.8083L21.0236 28.3583C21.1736 28.3333 21.382 28.2333 21.482 28.125L26.7153 22.8916C26.482 22.8083 26.257 22.7166 26.007 22.6083Z"
                fill="#334155"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginAUthWrapper;
