"use client";

import React, { useEffect, useState } from "react";

import dp from "@/public/images/tableDP.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExpandMore } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import axios from "axios";

const CorporateUser = () => {
  useEffect(() => {
    allUser();
  }, []);

  const allUser = async () => {

    const userDataString = localStorage.getItem("userData");
    const userData = JSON.parse(userDataString);
    const tokenDto = userData.tokenDto;
    const token = tokenDto.token;
    const clientId = tokenDto.clientId;
    const clientsecret = tokenDto.clientSecret;



    try {

      const headers = {
        'Authorization': token,
        'clientId': clientId,
        'clientSecret': clientsecret
      };
      const response = await axios.get('https://oxygentestenv01.oxygen-global.com/cardholderadmin/public/private/list/listAllApplicationUsersByAccountId', {
        headers: headers
      });
      const data = response.data;
      console.log("object", data); // Assuming you want to do something with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here, e.g., show a message to the user or log it
    }
  };

  const [activeBtn, setActiveBtn] = useState(false);
  const [activeBtnIndex, setActiveBtnIndex] = useState(0);

  const pathName = usePathname();
  return (
    <>
      {/* main container */}
      <div className="w-full h-auto min-h-[491px] bg-white rounded-[10px] py-[2%] sm:space-y-6 space-y-3">
        {/* top div */}
        <div className="px-[2%] w-full min-h-11 h-auto flex  justify-between items-center">
          <div className="w-auto h-auto flex justify-start items-start flex-col gap-2">
            <h1 className="text-[#000000] text-base font-bold sm:leading-5 leading-3">
              Corporate User
            </h1>
            <p className="text-[#52525B] font-normal sm:text-sm text-xs sm:leading-4 leading-3">
              you have 234 employee’s
            </p>
          </div>

          {/* buttons */}
          <div className="w-auto h-auto flex justify-start items-stretch sm:gap-[15px] gap-2">
            <div className="bg-[#F1F5F9] flex items-center rounded-md gap-2 py-1 px-2">
              <CiSearch className="text-2xl" />
              <input
                type="text"
                placeholder="Search Something..."
                className="md:block hidden h-9 outline-none bg-transparent"
                name=""
                id=""
              />
            </div>

            <div class="relative h-full bg-[#F1F5F9] rounded-md">
              <select class="block appearance-none md:w-full w-fit bg-[#F1F5F9] rounded-md h-full outline-none px-4 py-2.5">
                <option>Role</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <MdOutlineExpandMore className="text-2xl absolute md:right-5 right-3  top-1/2 transform -translate-y-1/2 text-black" />
            </div>

            <div className="bg-[#0D4C7B] flex gap-1 items-center text-white sm:px-4 px-2 rounded-md">
              <GoPlus className=" text-xl" />
              <span className="sm:block hidden">Add New User</span>
            </div>
          </div>
        </div>

        {/* table div */}
        <div className="w-full h-auto overflow-x-auto ">
          <table className="w-full border-collapse min-w-max">
            <thead className="text-[#3F3F46] text-sm leading-4 font-bold bg-[#F9F9F9] ">
              <tr className="h-[58px]">
                <td className="min-w-[80px] pl-4 pr-0 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                  Sr.No
                </td>
                <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Avatar
                </td>
                <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Name
                </td>
                <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Username
                </td>
                <td className="px-0 py-2 text-left lg:min-w-[100px] min-w-[140px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Contact Number
                </td>
                <td className="px-0 py-2 text-left lg:min-w-[100px] min-w-[160px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Email
                </td>
                <td className="px-0 py-2 text-left lg:min-w-[100px] min-w-[120px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Role
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
                    <Image
                      src={dp}
                      alt="dp"
                      width={500}
                      height={500}
                      className="object-cover w-11 h-11"
                    />
                  </td>
                  <td className="px-0 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    Name here
                  </td>
                  <td className="px-0 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    abhijith
                  </td>
                  <td className="px-0 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    +91 8880888808
                  </td>
                  <td className="px-0 py-4 whitespace-nowrap min-w-[200px] overflow-hidden text-overflow-ellipsis">
                    namehere@gmail.com
                    {/* <buton className="bg-[#2563EB21] font-bold text-[13px] text-[#2563EB] py-2 px-[14px] rounded-3xl text-center">
                    </buton> */}
                  </td>
                  <td className="px-0 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    Role here
                  </td>
                  <td className="w-auto px-0 py-4 overflow-hidden whitespace-nowrap text-overflow-ellipsis">
                    <div className="w-auto h-auto flex justify-start items-center gap-[10px]">
                      <Link href={`${pathName}/profile`}>
                        <button>
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="34"
                              height="34"
                              rx="10"
                              fill="#DCFCE7"
                            />
                            <path
                              opacity="0.4"
                              d="M23.75 24.5H10.25C9.9425 24.5 9.6875 24.245 9.6875 23.9375C9.6875 23.63 9.9425 23.375 10.25 23.375H23.75C24.0575 23.375 24.3125 23.63 24.3125 23.9375C24.3125 24.245 24.0575 24.5 23.75 24.5Z"
                              fill="#047857"
                            />
                            <path
                              opacity="0.4"
                              d="M22.2649 10.61C20.8099 9.155 19.3849 9.1175 17.8924 10.61L16.9849 11.5175C16.9099 11.5925 16.8799 11.7125 16.9099 11.8175C17.4799 13.805 19.0699 15.395 21.0574 15.965C21.0874 15.9725 21.1174 15.98 21.1474 15.98C21.2299 15.98 21.3049 15.95 21.3649 15.89L22.2649 14.9825C23.0074 14.2475 23.3674 13.535 23.3674 12.815C23.3749 12.0725 23.0149 11.3525 22.2649 10.61Z"
                              fill="#047857"
                            />
                            <path
                              d="M19.7082 16.6476C19.4907 16.5426 19.2807 16.4376 19.0782 16.3176C18.9132 16.2201 18.7557 16.1151 18.5982 16.0026C18.4707 15.9201 18.3207 15.8001 18.1782 15.6801C18.1632 15.6726 18.1107 15.6276 18.0507 15.5676C17.8032 15.3576 17.5257 15.0876 17.2782 14.7876C17.2557 14.7726 17.2182 14.7201 17.1657 14.6526C17.0907 14.5626 16.9632 14.4126 16.8507 14.2401C16.7607 14.1276 16.6557 13.9626 16.5582 13.7976C16.4382 13.5951 16.3332 13.3926 16.2282 13.1826C16.1232 12.9576 16.0407 12.7401 15.9657 12.5376L11.2557 17.2476C11.1582 17.3451 11.0682 17.5326 11.0457 17.6601L10.6407 20.5326C10.5657 21.0426 10.7082 21.5226 11.0232 21.8451C11.2932 22.1076 11.6682 22.2501 12.0732 22.2501C12.1632 22.2501 12.2532 22.2426 12.3432 22.2276L15.2232 21.8226C15.3582 21.8001 15.5457 21.7101 15.6357 21.6126L20.3457 16.9026C20.1357 16.8276 19.9332 16.7451 19.7082 16.6476Z"
                              fill="#047857"
                            />
                          </svg>
                        </button>
                      </Link>
                      <button>
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="34" height="34" rx="10" fill="#DBEAFE" />
                          <path
                            opacity="0.4"
                            d="M9.5 17.66V16.34C9.5 15.56 10.1375 14.915 10.925 14.915C12.2825 14.915 12.8375 13.955 12.155 12.7775C11.765 12.1025 11.9975 11.225 12.68 10.835L13.9775 10.0925C14.57 9.73995 15.335 9.94995 15.6875 10.5425L15.77 10.685C16.445 11.8625 17.555 11.8625 18.2375 10.685L18.32 10.5425C18.6725 9.94995 19.4375 9.73995 20.03 10.0925L21.3275 10.835C22.01 11.225 22.2425 12.1025 21.8525 12.7775C21.17 13.955 21.725 14.915 23.0825 14.915C23.8625 14.915 24.5075 15.5525 24.5075 16.34V17.66C24.5075 18.44 23.87 19.085 23.0825 19.085C21.725 19.085 21.17 20.045 21.8525 21.2225C22.2425 21.905 22.01 22.775 21.3275 23.165L20.03 23.9075C19.4375 24.26 18.6725 24.05 18.32 23.4575L18.2375 23.315C17.5625 22.1375 16.4525 22.1375 15.77 23.315L15.6875 23.4575C15.335 24.05 14.57 24.26 13.9775 23.9075L12.68 23.165C11.9975 22.775 11.765 21.8975 12.155 21.2225C12.8375 20.045 12.2825 19.085 10.925 19.085C10.1375 19.085 9.5 18.44 9.5 17.66Z"
                            fill="#1E40AF"
                          />
                          <path
                            d="M17 19.4375C18.3462 19.4375 19.4375 18.3462 19.4375 17C19.4375 15.6538 18.3462 14.5625 17 14.5625C15.6538 14.5625 14.5625 15.6538 14.5625 17C14.5625 18.3462 15.6538 19.4375 17 19.4375Z"
                            fill="#1E40AF"
                          />
                        </svg>
                      </button>
                      <button>
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="34" height="34" rx="10" fill="#FEE2E2" />
                          <path
                            d="M23.8032 11.9225C22.5957 11.8025 21.3882 11.7125 20.1732 11.645V11.6375L20.0082 10.6625C19.8957 9.9725 19.7307 8.9375 17.9757 8.9375H16.0107C14.2632 8.9375 14.0982 9.9275 13.9782 10.655L13.8207 11.615C13.1232 11.66 12.4257 11.705 11.7282 11.7725L10.1982 11.9225C9.88323 11.9525 9.65823 12.23 9.68823 12.5375C9.71823 12.845 9.98823 13.07 10.3032 13.04L11.8332 12.89C15.7632 12.5 19.7232 12.65 23.6982 13.0475C23.7207 13.0475 23.7357 13.0475 23.7582 13.0475C24.0432 13.0475 24.2907 12.83 24.3207 12.5375C24.3432 12.23 24.1182 11.9525 23.8032 11.9225Z"
                            fill="#B91C1C"
                          />
                          <path
                            opacity="0.3991"
                            d="M22.4218 14.105C22.2418 13.9175 21.9943 13.8125 21.7393 13.8125H12.2593C12.0043 13.8125 11.7493 13.9175 11.5768 14.105C11.4043 14.2925 11.3068 14.5475 11.3218 14.81L11.7868 22.505C11.8693 23.645 11.9743 25.07 14.5918 25.07H19.4068C22.0243 25.07 22.1293 23.6525 22.2118 22.505L22.6768 14.8175C22.6918 14.5475 22.5943 14.2925 22.4218 14.105Z"
                            fill="#B91C1C"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.1855 20.75C15.1855 20.4393 15.4374 20.1875 15.748 20.1875H18.2455C18.5562 20.1875 18.808 20.4393 18.808 20.75C18.808 21.0607 18.5562 21.3125 18.2455 21.3125H15.748C15.4374 21.3125 15.1855 21.0607 15.1855 20.75Z"
                            fill="#B91C1C"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.5625 17.75C14.5625 17.4393 14.8143 17.1875 15.125 17.1875H18.875C19.1857 17.1875 19.4375 17.4393 19.4375 17.75C19.4375 18.0607 19.1857 18.3125 18.875 18.3125H15.125C14.8143 18.3125 14.5625 18.0607 14.5625 17.75Z"
                            fill="#B91C1C"
                          />
                        </svg>
                      </button>
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
                    className={`w-8 h-8 font-semibold text-[13px] transition-all duration-100 rounded-lg border border-[#F1F1F1] flex justify-center items-center ${
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

export default CorporateUser;
