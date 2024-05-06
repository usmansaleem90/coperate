"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import navWifi from '@/public/images/navWifi.svg'
import notification from '@/public/images/notification.svg'
import Image from "next/image";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Sidebar from "./sidebar";


const Navbar = ({ title1, title2, top, toggleSidebar }) => {

  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }


  const pathName = usePathname();
  return (
    <>
      {/* main container */}
      <div className="w-full flex justify-between px-[2%] items-center h-auto lg:py-6 py-2 bg-[#063557] text-[#FFFFFF]">

        <div className="flex items-center sm:gap-8 gap-4">
          <div className="lg:hidden block ">
            <HiOutlineMenuAlt1 onClick={handleShowSidebar} className={`text-white sm:text-4xl text-2xl`} />
          </div>

          {/* left div */}
          <div className="flex flex-col items-start justify-start w-auto lg:h-10 lg:gap-2 gap-1">
            <span
              className={`${!top
                ? "sm:text-sm text-[10px] font-[200] sm:leading-4"
                : "sm:text-xl text-[13px] font-bold sm:leading-6"
                } `}
            >
              {title1}
            </span>
            <span
              className={`${!top
                ? "sm:text-xl text-[10px] font-bold sm:leading-6"
                : "sm:text-sm text-[13px] font-[200] sm:leading-4"
                }`}
            >
              {title2}
            </span>
          </div>
        </div>

        {/* right div */}
        <div className="flex items-center sm:w-auto w-[240px] justify-start  sm:h-[50px] sm:gap-3 gap-1">
          <button className="lg:w-[206px] lg:px-2 md:px-4 px-3 h-full bg-[#4F46E5] rounded-lg flex justify-between p-2 items-center">
            <div className="w-auto h-auto lg:flex hidden flex-col font-normal justify-start items-start gap-[5px]">
              <span className="text-base leading-5">
                <b>$ 4,546,876</b>.00
              </span>
              <span className="text-xs leading-4 font-thin">Funding Wallet</span>
            </div>
            <Image alt="" src={navWifi} />
          </button>

          <button className="lg:w-[206px] lg:px-2 md:px-4 px-3 h-full bg-[#4F46E5] rounded-lg flex justify-between p-2 items-center">
            <div className="w-auto h-auto lg:flex hidden flex-col font-normal justify-start items-start gap-[5px]">
              <span className="text-base leading-5">
                <b>$ 4,546,876</b>.00
              </span>
              <span className="text-xs leading-4 font-thin">Card Expense Wallet</span>
            </div>
            <Image alt="" src={navWifi} />
          </button>

          <button className="text-sm text-center font-normal leading-4 bg-[#FFFFFF29] p-2 lg:px-2 md:px-4 px-3 lg:min-w-[136px] h-full rounded-[5px] flex justify-center items-center gap-2 ">
            <Image alt="" src={notification} />

            <span className="lg:block hidden">Notifications</span>
          </button>
        </div>
      </div>
      <div className={`${showSidebar ? 'absolute top-0 left-0 w-fit' : 'hidden'} w-full  h-full`}>
        <Sidebar onClick={handleShowSidebar} />
      </div>
    </>
  );
};

export default Navbar;
