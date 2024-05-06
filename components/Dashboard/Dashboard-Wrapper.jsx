// * imports
import React, { Children } from "react";

// * local imports
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import { SideMenuData } from "@/lib/data";
import DP from "@/public/images/defaultDP.svg";
import Navbar from "./Navbar";
import Link from "next/link";
import Sidebar from "./sidebar";

const DashboardWrapper = ({ children, title1, title2, top }) => {

  return (
    <>
      {/* main container */}
      <div className="w-full h-screen min-h-screen flex items-start  bg-[#f1f5f9]">

        <div className="h-screen z-50 lg:block hidden">
          <Sidebar />
        </div>


        <div className="w-full h-full overflow-y-auto " >
          <div className="sticky top-0 left-0 z-50 w-full h-fit " >
            <Navbar title1={title1} title2={title2} top={top} />
          </div>
          <div className="h-fit">
            {children}
          </div>
        </div>


      </div>
    </>
  );
};

export default DashboardWrapper;
