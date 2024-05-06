"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SettingCard = ({ data }) => {
  const pathName = usePathname();
  return (
    <>
      {/* main container */}
      <Link
        href={`${pathName}/${data.src}`}
        className="min-w-[363px] space-y-4 p-5 w-auto min-h-[171px] bg-white rounded-[10px] fleex flex-col justify-center items-start h-auto"
      >
        <Image
          src={data.icon}
          alt={data.title}
          className=" object-contain w-auto h-auto"
          width={500}
          height={500}
        />

        <div className="w-full h-auto flex flex-col justify-start items-start gap-[10px]">
          <h1 className="text-[#1E1E1E] font-bold text-base leading-5">
            {data.title}
          </h1>

          <h1 className="text-[#71717A] text-sm font-normal leading-5 max-w-[80%] w-auto h-auto">
            {data.desc}
          </h1>
        </div>
      </Link>
    </>
  );
};

export default SettingCard;
