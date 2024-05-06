"use client";

import React, { useState } from "react";

import dp from "@/public/images/tableDP.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExpandMore } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { IoMdMore } from "react-icons/io";



const Table = () => {

    const [activeBtn, setActiveBtn] = useState(false);
    const [activeBtnIndex, setActiveBtnIndex] = useState(0);
    const [openMenu, setOpenMenu] = useState(false)

    const pathName = usePathname();

    const handleMenu = (id) => {
        setOpenMenu(!openMenu)
    }

    return (
        <div>
            {/* table div */}
            <div className="w-full h-auto overflow-x-auto ">
                <table className="w-full border-collapse min-w-max">
                    <thead className="text-[#3F3F46] text-sm leading-4 font-bold bg-[#F9F9F9] ">
                        <tr className="h-[58px]">
                            <td className="min-w-[80px] pl-4 pr-0 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                                Order Created On
                            </td>
                            <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                Order  Number
                            </td>
                            <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                Corporate ID
                            </td>
                            <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                Total Cards
                            </td>
                            <td className="px-0 py-2 text-left lg:min-w-[100px] min-w-[140px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                Generated Cards
                            </td>
                            <td className="px-0 py-2 text-left lg:min-w-[100px] min-w-[160px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                Total / Processed Order Value
                            </td>
                            <td className="px-0 py-2 text-left lg:min-w-[100px] min-w-[120px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
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
                                    Nov 23, 2023
                                </td>
                                <td className="px-0 py-4 min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    2423423
                                </td>
                                <td className="px-0 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    FLIPCART
                                </td>
                                <td className="px-0 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    FLIPCART
                                </td>
                                <td className="px-0 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    11
                                </td>
                                <td className="px-0 py-4 whitespace-nowrap min-w-[200px] overflow-hidden text-overflow-ellipsis">
                                    $ 2000 / $ 2000

                                </td>
                                <td className="px-0 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    <button className="bg-[#DCFCE7] rounded-full text-[#15803D] px-3 py-1.5">
                                        Processed
                                    </button>
                                </td>
                                <td className="w-auto px-0 py-4 overflow-hidden z-40 whitespace-nowrap text-overflow-ellipsis">
                                    <div onClick={() => handleMenu(idx)} className="bg-[#F1F5F9] w-fit  p-1 rounded-md">
                                        <IoMdMore className="text-xl" />
                                    </div>
                                    {openMenu &&
                                        <div className="bg-white shadow-lg absolute  right-0 flex flex-col gap-2 py-3 px-2" >
                                            <h1 className="font-semibold">Approved</h1>
                                            <h1 className="font-semibold">Reject</h1>
                                            <h1 className="font-semibold">Delete</h1>
                                            <h1 className="font-semibold">Cancel Order</h1>
                                        </div>
                                    }
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
                                    className={`w-8 h-8 font-semibold text-[13px] transition-all duration-100 rounded-lg border border-[#F1F1F1] flex justify-center items-center ${activeBtn && activeBtnIndex === idx
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
    )
}

export default Table
