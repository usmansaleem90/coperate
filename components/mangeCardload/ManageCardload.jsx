"use client";

import React, { useState } from "react";

import dp from "@/public/images/tableDP.png";
import filter from "@/public/images/filter.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExpandMore } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";


const ManageCardload = () => {
    const [activeBtn, setActiveBtn] = useState(false);
    const [activeBtnIndex, setActiveBtnIndex] = useState(0);
    const [openFilter, setOpenFilter] = useState(false)

    const handleOpenFilter = () => {
        setOpenFilter(!openFilter)
    }

    const pathName = usePathname();
    return (
        <>
            {/* main container */}
            <div className="w-full relative h-auto min-h-[491px] bg-white rounded-[10px] pb-[2%] sm:space-y-6 space-y-3">

                {/* top div */}
                <div className="px-[2%] pt-[2%] w-full min-h-11 h-auto flex  justify-between items-center">
                    <div className="w-auto h-auto flex justify-start items-start flex-col gap-2">
                        <h1 className="text-[#000000] text-base font-bold sm:leading-5 leading-3">
                            Cardholder
                        </h1>
                        <p className="text-[#52525B] font-normal sm:text-sm text-xs sm:leading-4 leading-3">
                            you have 234 employee’s
                        </p>
                    </div>

                    {/* buttons */}
                    <div className="flex gap-3">
                        <button onClick={handleOpenFilter} className="text-[#334155] bg-[#F1F5F9] font-semibold text-sm py-3 justify-center flex items-center gap-2 sm:w-[125px] w-auto sm:px-0 px-4 rounded-sm">
                            <Image alt="" src={filter} className="w-4 " />
                            <p className="sm:block hidden">Filter</p>
                        </button>
                        <button className="text-[#334155] bg-[#F1F5F9] font-semibold text-sm py-3 justify-center flex items-center gap-2 sm:w-[125px] w-[94px] rounded-sm">
                            Load Cards
                        </button>
                    </div>

                </div>

                {/* table div */}
                <div className="w-full h-auto overflow-x-auto ">
                    <table className="w-full border-collapse min-w-max">
                        <thead className=" text-sm leading-4 font-bold bg-[#F9F9F9] ">
                            <tr className="h-[58px] text-[#3F3F46]">
                                <td className="pl-4 pr-0 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                                    <input type="checkbox" name="" id="" />
                                </td>
                                <td className="px-4 py-2 text-left  whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    Account Name
                                </td>
                                <td className="px-4 py-2 text-left  whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    User ID
                                </td>
                                <td className="px-4 py-2 text-left  whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    Card No
                                </td>
                                <td className="px-4 py-2 text-left whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    Card Ref No
                                </td>
                                <td className="px-4 py-2 text-left  whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    Card Balance
                                </td>
                                <td className="px-4 py-2 text-left whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    Last Deposit
                                </td>
                                <td className="w-auto px-4 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                                    Status
                                </td>
                                <td className="w-auto px-4 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                                    Load Amount
                                </td>
                                <td className="w-auto px-4 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
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
                                    <td className=" pl-4 pr-3 py-4 overflow-hidden whitespace-nowrap text-overflow-ellipsis">
                                        <input type="checkbox" name="" id="" />
                                    </td>
                                    <td className="px-4 py-4 min-w-[80px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                        Sample Card
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                        Name here
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                        *1346
                                    </td>
                                    <td className="px-4 py-4  whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                        3453287689319
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap  overflow-hidden text-overflow-ellipsis">
                                        AUD 23723
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                        1.00 AUD on 23/06/2020
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                        $567.99
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                        <button className="border border-[#E2E8F0] bg-[#F8FAFC] flex items-start w-[120px] py-2.5 rounded-md px-2" >
                                            $567.99
                                        </button>
                                    </td>


                                    <td className="w-auto px-4 py-4 overflow-hidden whitespace-nowrap text-overflow-ellipsis">
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


                {
                    openFilter &&
                    <div className="bg-white shadow-2xl py-3 pb-5 w-full px-2 absolute -top-6 rounded-lg left-0">
                        <div className="flex flex-col ">
                            <div className="flex  items-start justify-between">
                                <h1 className="font-semibold" >Filters</h1>
                                <button onClick={handleOpenFilter} className="bg-[#1D4B7E] text-white rounded-md flex items-center justify-center gap-2 w-[130px] py-2" >
                                    <RxCross2 />
                                    Filter
                                </button>
                            </div>
                            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 items-end mt-4" >
                                <div className="">
                                    <h1 className='sm:text-base text-sm'>Card Reference No</h1>
                                    <div className="bg-[#F1F5F9] mt-2 flex items-center rounded-md gap-2 py-1 px-2" >
                                        <CiSearch className="text-2xl" />
                                        <input type="text" placeholder="Search by Card Reference No" className="placeholder:sm:text-base placeholder:text-xs h-9 overflow-hidden outline-none bg-transparent" name="" id="" />
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className='sm:text-base text-sm'>User ID</h1>
                                    <div className="bg-[#F1F5F9] mt-2 flex items-center rounded-md gap-2 py-1 px-2" >
                                        <CiSearch className="text-2xl" />
                                        <input type="text" placeholder="Search by User ID" className="placeholder:sm:text-base placeholder:text-xs h-9 outline-none overflow-hidden bg-transparent" name="" id="" />
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className='sm:text-base text-sm'>Mobile No</h1>
                                    <div className="bg-[#F1F5F9] mt-2 flex items-center rounded-md gap-2 py-1 px-2" >
                                        <CiSearch className="text-2xl" />
                                        <input type="text" placeholder="Search by Mobile Number" className="placeholder:sm:text-base placeholder:text-xs h-9 outline-none overflow-hidden bg-transparent" name="" id="" />
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className='sm:text-base text-sm'>Card No</h1>
                                    <div className="bg-[#F1F5F9] mt-2 flex items-center rounded-md gap-2 py-1 px-2" >
                                        <CiSearch className="text-2xl" />
                                        <input type="text" placeholder="Search by Card No" className="placeholder:sm:text-base placeholder:text-xs h-9 outline-none overflow-hidden bg-transparent" name="" id="" />
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className='sm:text-base text-sm'>Name</h1>
                                    <div className="bg-[#F1F5F9] mt-2 flex items-center rounded-md gap-2 py-1 px-2" >
                                        <CiSearch className="text-2xl" />
                                        <input type="text" placeholder="Search Name" className="placeholder:sm:text-base placeholder:text-xs h-9 outline-none overflow-hidden bg-transparent" name="" id="" />
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className='sm:text-base text-sm'>Card Unique Code</h1>
                                    <div className="bg-[#F1F5F9] mt-2 flex items-center rounded-md gap-2 py-1 px-2" >
                                        <CiSearch className="text-2xl" />
                                        <input type="text" placeholder="Card Unique Code" className="placeholder:sm:text-base placeholder:text-xs h-9 outline-none overflow-hidden bg-transparent" name="" id="" />
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className='sm:text-base text-sm'>Email</h1>
                                    <div className="bg-[#F1F5F9] mt-2 flex items-center rounded-md gap-2 py-1 px-2" >
                                        <CiSearch className="text-2xl" />
                                        <input type="text" placeholder="Search by Email" className="placeholder:sm:text-base placeholder:text-xs h-9 outline-none overflow-hidden bg-transparent" name="" id="" />
                                    </div>
                                </div>
                                <Link href={'/manageCardload/cardHolderInfo'} >
                                    <button className="bg-[#1D4B7E] text-white rounded-md w-full py-2.5">
                                        Search
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default ManageCardload;
