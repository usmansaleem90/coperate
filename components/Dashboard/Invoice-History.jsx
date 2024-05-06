"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const InvoiceHistroy = () => {
  const pathName = usePathname();

  const [activeBtn, setActiveBtn] = useState(false);
  const [activeBtnIndex, setActiveBtnIndex] = useState(0);
  return (
    <>
      {/* main container */}
      <div className="w-full h-auto min-h-[491px] bg-white rounded-[10px] py-[2%] space-y-6">
        {/* top div */}
        <div className="px-[2%] w-full min-h-11 h-auto flex justify-between items-center">
          <div className="w-auto h-auto flex justify-start items-start flex-col gap-2">
            <h1 className="text-[#000000] text-base font-bold leading-5">
              Invoice Histroy
            </h1>
            <p className="text-[#52525B] font-normal text-sm leading-4">
              you have 234 invoice History
            </p>
          </div>

          {/* buttons */}
          <div className="w-auto h-auto flex justify-start items-center gap-[15px]">
            <button className="bg-[#F1F5F9] text-[#1F2C38] font-medium text-sm leading-4 py-2 px-3 rounded sm:min-w-[98px] w-auto min-h-8 h-auto flex justify-center items-center gap-[5px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V5"
                  stroke="#1E293B"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 2V5"
                  stroke="#1E293B"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 9.08997H20.5"
                  stroke="#1E293B"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                  stroke="#1E293B"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6937 13.7002H15.7027"
                  stroke="#1E293B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6937 16.7002H15.7027"
                  stroke="#1E293B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9945 13.7002H12.0035"
                  stroke="#1E293B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9945 16.7002H12.0035"
                  stroke="#1E293B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29529 13.7002H8.30427"
                  stroke="#1E293B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29529 16.7002H8.30427"
                  stroke="#1E293B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="sm:block hidden">Calendar</span>
            </button>
          </div>
        </div>

        {/* table div */}
        <div className="w-full h-auto overflow-x-auto ">
          <table className="w-full border-collapse min-w-max">
            <thead className="text-[#3F3F46] text-sm leading-4 font-bold bg-[#F9F9F9] ">
              <tr className="h-[58px]">
                <td className="min-w-[50px] pl-4 pr-0 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                  Sr.No
                </td>
                <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Date
                </td>
                <td className="px-0 py-2 text-left min-w-[130px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Requested Raised by
                </td>
                <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Reference Number
                </td>
                <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Reference Date
                </td>
                <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Status
                </td>
                <td className="w-auto px-0 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, idx) => (
                <tr
                  key={idx}
                  className="border-b text-[#000000] text-sm font-normal leading-4"
                >
                  <td className="min-w-[50px] pl-4 pr-0 py-4 overflow-hidden whitespace-nowrap text-overflow-ellipsis">
                    #{idx + 1}
                  </td>
                  <td className="px-0 py-4 min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    23 Aug, 2023
                  </td>
                  <td className="px-0 py-4 min-w-[130px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    User name here
                  </td>
                  <td className="px-0 py-4 min-w-[130px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    N/A
                  </td>
                  <td className="px-0 py-4 min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    --
                  </td>
                  <td className="px-0 py-4 min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    <buton className="bg-[#2563EB21] font-bold text-[13px] text-[#2563EB] py-2 px-[14px] rounded-3xl text-center">
                      Request Raised
                    </buton>
                  </td>
                  <td className="w-auto px-0 py-4 overflow-hidden whitespace-nowrap text-overflow-ellipsis">
                    <div className="w-auto h-auto flex justify-start items-center gap-[10px]">
                      <button>
                        <svg
                          width="34"
                          height="35"
                          viewBox="0 0 34 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="34"
                            height="34"
                            rx="10"
                            fill="#F1F5F9"
                          />
                          <g clip-path="url(#clip0_72_262)">
                            <path
                              d="M16.25 17.5C16.25 17.6989 16.329 17.8897 16.4697 18.0303C16.6103 18.171 16.8011 18.25 17 18.25C17.1989 18.25 17.3897 18.171 17.5303 18.0303C17.671 17.8897 17.75 17.6989 17.75 17.5C17.75 17.3011 17.671 17.1103 17.5303 16.9697C17.3897 16.829 17.1989 16.75 17 16.75C16.8011 16.75 16.6103 16.829 16.4697 16.9697C16.329 17.1103 16.25 17.3011 16.25 17.5Z"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M16.25 22.75C16.25 22.9489 16.329 23.1397 16.4697 23.2803C16.6103 23.421 16.8011 23.5 17 23.5C17.1989 23.5 17.3897 23.421 17.5303 23.2803C17.671 23.1397 17.75 22.9489 17.75 22.75C17.75 22.5511 17.671 22.3603 17.5303 22.2197C17.3897 22.079 17.1989 22 17 22C16.8011 22 16.6103 22.079 16.4697 22.2197C16.329 22.3603 16.25 22.5511 16.25 22.75Z"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M16.25 12.25C16.25 12.4489 16.329 12.6397 16.4697 12.7803C16.6103 12.921 16.8011 13 17 13C17.1989 13 17.3897 12.921 17.5303 12.7803C17.671 12.6397 17.75 12.4489 17.75 12.25C17.75 12.0511 17.671 11.8603 17.5303 11.7197C17.3897 11.579 17.1989 11.5 17 11.5C16.8011 11.5 16.6103 11.579 16.4697 11.7197C16.329 11.8603 16.25 12.0511 16.25 12.25Z"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <g clip-path="url(#clip1_72_262)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M-100.801 -242.5H70.3777L215.457 -91.2795V202.846C215.457 239.691 185.648 269.5 148.93 269.5H-100.801C-137.646 269.5 -167.455 239.691 -167.455 202.846V-175.846C-167.456 -212.691 -137.647 -242.5 -100.801 -242.5Z"
                                fill="#E5252A"
                              />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_72_262">
                              <rect
                                width="18"
                                height="18"
                                fill="white"
                                transform="translate(8 8.5)"
                              />
                            </clipPath>
                            <clipPath id="clip1_72_262">
                              <rect
                                width="512"
                                height="512"
                                fill="white"
                                transform="translate(-232 -242.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                      <button>
                        <svg
                          width="37"
                          height="35"
                          viewBox="0 0 37 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="37" height="35" rx="6" fill="#F1F5F9" />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.3557 9H20.0394L24.8565 14.021V23.7869C24.8565 25.0102 23.8667 26 22.6476 26H14.3557C13.1323 26 12.1426 25.0102 12.1426 23.7869V11.2131C12.1426 9.98975 13.1323 9 14.3557 9Z"
                            fill="#E5252A"
                          />
                          <path
                            opacity="0.302"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20.0352 9V13.9828H24.8565L20.0352 9Z"
                            fill="white"
                          />
                          <path
                            d="M14.6016 21.6841V18.5789H15.9227C16.2497 18.5789 16.5089 18.6681 16.7043 18.8507C16.8997 19.0291 16.9974 19.2713 16.9974 19.5729C16.9974 19.8745 16.8997 20.1166 16.7043 20.295C16.5089 20.4777 16.2497 20.5669 15.9227 20.5669H15.3959V21.6841H14.6016ZM15.3959 19.8915H15.8335C15.9524 19.8915 16.0458 19.866 16.1096 19.8065C16.1733 19.7513 16.2073 19.6748 16.2073 19.5729C16.2073 19.4709 16.1733 19.3945 16.1096 19.3393C16.0459 19.2798 15.9524 19.2543 15.8335 19.2543H15.3959V19.8915ZM17.3244 21.6841V18.5789H18.4246C18.6413 18.5789 18.8452 18.6086 19.0363 18.6723C19.2275 18.736 19.4017 18.8252 19.5546 18.9484C19.7075 19.0674 19.8307 19.2288 19.9199 19.4327C20.0048 19.6366 20.0516 19.8702 20.0516 20.1336C20.0516 20.3927 20.0049 20.6263 19.9199 20.8302C19.8307 21.0341 19.7075 21.1955 19.5546 21.3145C19.4016 21.4377 19.2275 21.5269 19.0363 21.5906C18.8452 21.6543 18.6413 21.6841 18.4246 21.6841H17.3244ZM18.1018 21.0087H18.3312C18.4544 21.0087 18.5691 20.9959 18.6753 20.9662C18.7772 20.9364 18.8749 20.8897 18.9684 20.826C19.0576 20.7623 19.1298 20.6731 19.1808 20.5541C19.2317 20.4352 19.2572 20.295 19.2572 20.1336C19.2572 19.9679 19.2317 19.8277 19.1808 19.7088C19.1298 19.5899 19.0576 19.5007 18.9684 19.4369C18.8749 19.3732 18.7772 19.3265 18.6753 19.2968C18.5691 19.267 18.4544 19.2543 18.3312 19.2543H18.1018V21.0087ZM20.4509 21.6841V18.5789H22.6598V19.2543H21.2452V19.7513H22.3752V20.4224H21.2452V21.6841H20.4509Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                      <Link
                        href={`${pathName}/employeeDetail`}
                        className="text-[#2563EB] font-semibold underline"
                      >
                        View
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* pagination div */}
        <div className="w-full h-auto flex justify-end items-center text-[#0D4C7B] leading-4 text-sm font-normal">
          <div className="w-auto h-auto flex justify-start items-center gap-[5px] px-[2%]">
            {/* button previous */}
            <button className=" bg-white rounded-lg w-8 h-8 border border-[#F1F1F1] flex justify-center items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z"
                  fill="#333333"
                />
                <path
                  d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z"
                  fill="#333333"
                />
              </svg>
            </button>

            <button className=" bg-white rounded-lg w-8 h-8 border border-[#F1F1F1] flex justify-center items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z"
                  fill="black"
                />
              </svg>
            </button>

            {/* buttons */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => {
              if (idx < 4 || idx === 9) {
                return (
                  <button
                    className={`w-8 h-8 font-semibold text-[13px] transition-all dur rounded-lg border border-[#F1F1F1] flex justify-center items-center ${
                      activeBtn && activeBtnIndex === idx
                        ? "bg-[#2F80ED] text-white"
                        : "bg-white text-[#333333]"
                    }`}
                    key={idx}
                    onClick={() => {
                      setActiveBtnIndex(idx);
                      setActiveBtn(true);
                    }}
                  >
                    {item}
                  </button>
                );
              }
              if (idx === 4) {
                return (
                  <button
                    className="w-8 h-8 text-[#333333] font-semibold text-[13px] bg-white rounded-lg flex justify-center items-center"
                    key={idx}
                  >
                    ...
                  </button>
                );
              }
            })}

            <button className=" bg-white rounded-lg w-8 h-8 border border-[#F1F1F1] flex justify-center items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z"
                  fill="black"
                />
              </svg>
            </button>

            {/* button forward */}
            <button className=" bg-white rounded-lg w-8 h-8 border border-[#F1F1F1] flex justify-center items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z"
                  fill="black"
                />
                <path
                  d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceHistroy;
