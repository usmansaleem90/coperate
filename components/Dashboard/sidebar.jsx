'use client'
// * imports
import React, { useState } from "react";

// * local imports
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import { SideMenuData } from "@/lib/data";
import DP from "@/public/images/defaultDP.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdExpandMore } from "react-icons/md";
import arrow from '@/public/images/buttonArrow.svg'
import { AiOutlineClose } from "react-icons/ai";


const Sidebar = ({ onClick }) => {

    const [openSubmenu, setOpenSubmenu] = useState(false);
    const [showSiderbar, setShowSidebar] = useState(false);

    const location = usePathname()

    const isActive = (path) => {
        return location === path;
    };

    const handleOpenSubmenu = () => {
        setOpenSubmenu(!openSubmenu)
    }

    const handleShowSidebar = () => {
        setShowSidebar(!showSiderbar)
    }

    return (
        <>
            {/* sidebar starts here */}
            <div className={`relative py-7 px-6 pr-8 h-screen w-full flex flex-col justify-between bg-white`}>

                {/* side button */}
                <button onClick={handleShowSidebar} className="absolute overflow-visible lg:flex hidden items-center z-50 justify-center w-[38px] h-[38px] bg-black rounded-full top-[17.5%] -right-5">
                    <Image alt="" src={arrow} className={`h-10 ${showSiderbar ? '' : 'rotate-180'} `} />
                </button>

                {/* logo  */}
                <div className="w-full flex flex-col items-center">

                    <Link href={"/"} className="flex items-center justify-between w-full">
                        <Image
                            src={Logo}
                            alt="logo"
                            width={500}
                            height={500}
                            className={`object-contain ${showSiderbar ? 'w-14' : 'w-32'}  max-h-9`}
                        />

                        <div onClick={onClick} className="lg:hidden block">
                            <AiOutlineClose className="text-3xl -mr-5" />
                        </div>

                    </Link>

                    {/* main menu item starts here*/}
                    <div className="flex flex-col items-start justify-start w-full h-auto gap-5 mt-10">
                        <span className="mb-3 text-xs font-medium whitespace-nowrap leading-4 text-[#52525B]">
                            MAIN MENU
                        </span>
                    </div>

                    {/* main menu item ends here*/}
                    <div className={`flex-col items-start text-[#52525B] font-medium text-sm justify-start ${showSiderbar ? 'w-fit' : 'w-full'}  h-auto space-y-[16px]`}>
                        <Link href={'/'} className="flex items-center justify-start w-full h-auto gap-2">
                            <svg
                                width="23"
                                height="23"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_0_2962)">
                                    <path
                                        d="M22.9579 10.525L16.5138 5.51279C15.9483 5.07284 15.2523 4.83398 14.5358 4.83398C13.8193 4.83398 13.1233 5.07284 12.5578 5.51279L6.11252 10.525C5.72518 10.8262 5.4118 11.2119 5.1963 11.6528C4.98081 12.0936 4.86891 12.5778 4.86914 13.0685V21.7685C4.86914 22.4094 5.12375 23.0241 5.57697 23.4773C6.03018 23.9306 6.64487 24.1852 7.28581 24.1852H21.7858C22.4267 24.1852 23.0414 23.9306 23.4946 23.4773C23.9479 23.0241 24.2025 22.4094 24.2025 21.7685V13.0685C24.2025 12.074 23.7433 11.1352 22.9579 10.525Z"
                                        stroke={isActive('/') ? '#3F88EC' : '#52525B'}
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M19.3346 18.125C16.6642 19.7357 12.336 19.7357 9.66797 18.125"
                                        stroke={`${isActive('/') ? '#3F88EC' : '#52525B'}`}
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_2962">
                                        <rect width="29" height="29" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h1 className={` ${showSiderbar ? 'hidden' : 'block'} ${isActive('/') ? 'text-base text-[#3F88EC] font-bold' : 'font-medium text-[#52525B]'} `}>
                                Dashboard
                            </h1>
                        </Link>

                        {/* dashboard items */}
                        <button className="flex items-center justify-start w-full h-auto gap-2">
                            <svg
                                width="23"
                                height="23"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_0_2969)">
                                    <path
                                        d="M10.8763 6.04199H8.45964C7.8187 6.04199 7.20401 6.2966 6.75079 6.74982C6.29758 7.20303 6.04297 7.81772 6.04297 8.45866V22.9587C6.04297 23.5996 6.29758 24.2143 6.75079 24.6675C7.20401 25.1207 7.8187 25.3753 8.45964 25.3753H20.543C21.1839 25.3753 21.7986 25.1207 22.2518 24.6675C22.705 24.2143 22.9596 23.5996 22.9596 22.9587V8.45866C22.9596 7.81772 22.705 7.20303 22.2518 6.74982C21.7986 6.2966 21.1839 6.04199 20.543 6.04199H18.1263"
                                        stroke="#52525B"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M10.875 6.04167C10.875 5.40073 11.1296 4.78604 11.5828 4.33283C12.036 3.87961 12.6507 3.625 13.2917 3.625H15.7083C16.3493 3.625 16.964 3.87961 17.4172 4.33283C17.8704 4.78604 18.125 5.40073 18.125 6.04167C18.125 6.68261 17.8704 7.2973 17.4172 7.75051C16.964 8.20372 16.3493 8.45833 15.7083 8.45833H13.2917C12.6507 8.45833 12.036 8.20372 11.5828 7.75051C11.1296 7.2973 10.875 6.68261 10.875 6.04167Z"
                                        stroke="#52525B"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M10.875 14.5H10.8871"
                                        stroke="#52525B"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M15.707 14.5H18.1237"
                                        stroke="#52525B"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M10.875 19.333H10.8871"
                                        stroke="#52525B"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M15.707 19.333H18.1237"
                                        stroke="#52525B"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_2969">
                                        <rect width="29" height="29" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <div className={`${showSiderbar ? 'hidden' : 'flex'} items-center whitespace-nowrap  justify-between gap-1 `}>
                                <span onClick={handleOpenSubmenu}>Corporate Ordering</span>
                                <MdExpandMore className={`text-xl ${openSubmenu ? 'rotate-180' : ''}`} />
                            </div>
                        </button>

                        {/* sub menu  */}
                        {
                            openSubmenu && !showSiderbar &&
                            <div className="ml-3 w-full h-auto flex flex-col justify-start items-start border-l mt-3 gap-4 border-[#D4D4D8]">
                                <Link href="/corporateOrder/placeOrder/billingDetails" className={`flex items-center justify-start w-auto h-auto ${isActive('/corporateOrder/placeOrder/billingDetails') ? 'text-base text-[#3F88EC] font-bold' : 'font-medium text-[#52525B]'}  text-sm font-normal leading-4`}>
                                    <span className="w-2 h-[1px] bg-[#D4D4D8]"></span>
                                    <h1 className="">Place orders</h1>
                                </Link>
                                <Link href="/corporateOrder/batchCarprateOrder" className={`flex items-center  justify-start w-auto h-auto ${isActive('/corporateOrder/batchCarprateOrder') ? 'text-base text-[#3F88EC] font-bold' : 'font-medium text-[#52525B]'} text-sm font-normal leading-4`}>
                                    <span className="w-2 h-[1px] bg-[#D4D4D8]"></span>
                                    <h1 className="">Batch Corporate Card order</h1>
                                </Link>
                                <Link href="/corporateOrder/manageOrder" className={`flex items-center  justify-start w-auto h-auto ${isActive('/corporateOrder/manageOrder') ? 'text-base text-[#3F88EC] font-bold' : 'font-medium text-[#52525B]'} text-sm font-normal leading-4`}>
                                    <span className="w-2 h-[1px] bg-[#D4D4D8]"></span>
                                    <h1 className="">Manage Orders</h1>
                                </Link>
                            </div>
                        }

                        {SideMenuData?.map((item, idx) => (
                            <Link
                                href={item.src}
                                key={idx}
                                className="flex items-center justify-start w-full h-auto gap-2 text-start"
                            >
                                {isActive(item.src) ? item.icons2 : item.icons}
                                <h1 className={`${showSiderbar ? 'hidden' : 'block'} ${isActive(item.src) ? ' text-[#3F88EC] font-semibold' : 'font-medium text-[#52525B]'} `}>{item.title}</h1>
                            </Link>
                        ))}
                    </div>

                    <div className={`flex flex-col items-start justify-start ${showSiderbar ? 'w-fit' : 'w-full'} h-auto gap-5 mt-5`}>
                        <span className="mb-3 text-xs font-medium leading-4 text-[#52525B]">
                            ACCOUNT
                        </span>
                    </div>

                    <div className={`flex-col items-start text-[#52525B] font-medium text-sm justify-start ${showSiderbar ? 'w-fit' : 'w-full'} h-auto space-y-[16px]`}>
                        <button className="flex items-center justify-start w-full h-auto gap-2 text-start">
                            <svg
                                width="23"
                                height="23"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.541 22.2697H15.7077L10.3306 25.8463C9.53308 26.378 8.45768 25.8101 8.45768 24.8434V22.2697C4.83268 22.2697 2.41602 19.853 2.41602 16.228V8.97795C2.41602 5.35295 4.83268 2.93628 8.45768 2.93628H20.541C24.166 2.93628 26.5827 5.35295 26.5827 8.97795V16.228C26.5827 19.853 24.166 22.2697 20.541 22.2697Z"
                                    stroke="#52525B"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M14.4999 13.7267V13.473C14.4999 12.6513 15.0075 12.2163 15.515 11.8659C16.0104 11.5275 16.5057 11.0926 16.5057 10.2951C16.5057 9.18339 15.6116 8.28918 14.4999 8.28918C13.3883 8.28918 12.4941 9.18339 12.4941 10.2951"
                                    stroke="#52525B"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M14.4952 16.6145H14.5061"
                                    stroke="#52525B"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <h1 className={`${showSiderbar ? 'hidden' : 'block'}`}>Support</h1>
                        </button>

                        <Link
                            href={"/settings"}
                            className="flex items-center justify-start w-full h-auto gap-2 text-start"
                        >
                            <svg
                                width="23"
                                height="23"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.625 11.0079V17.98C3.625 20.5416 3.625 20.5416 6.04167 22.1729L12.6875 26.0154C13.6904 26.5954 15.3217 26.5954 16.3125 26.0154L22.9583 22.1729C25.375 20.5416 25.375 20.5416 25.375 17.9921V11.0079C25.375 8.45831 25.375 8.45831 22.9583 6.82706L16.3125 2.98456C15.3217 2.40456 13.6904 2.40456 12.6875 2.98456L6.04167 6.82706C3.625 8.45831 3.625 8.45831 3.625 11.0079Z"
                                    stroke={isActive('/settings') ? '#3F88EC' : '#52525B'}
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M14.5 18.125C16.502 18.125 18.125 16.502 18.125 14.5C18.125 12.498 16.502 10.875 14.5 10.875C12.498 10.875 10.875 12.498 10.875 14.5C10.875 16.502 12.498 18.125 14.5 18.125Z"
                                    stroke={isActive('/settings') ? '#3F88EC' : '#52525B'}
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <h1 className={`${showSiderbar ? 'hidden' : 'block'} ${isActive('/settings') ? ' text-[#3F88EC] font-semibold' : 'font-medium text-[#52525B]'}`}>Setting</h1>
                        </Link>
                    </div>
                </div>

                {/* profile  */}
                <div className={`flex flex-col  ${showSiderbar ? 'w-fit items-center mx-auto' : 'w-full items-start justify-start'} h-auto gap-2 mt-4`}>
                    <span className="mb-3 text-xs font-medium leading-4 text-[#52525B]">
                        PROFILE
                    </span>

                    <div className={`flex items-center justify-start  ${showSiderbar ? 'w-fit' : 'w-full'} h-auto gap-2`}>
                        <Image
                            src={DP}
                            alt="dp"
                            width={500}
                            height={500}
                            className={`object-contain rounded-full ${setShowSidebar ? 'w-9 h-9' : 'w-11 h-11'} `}
                        />
                        <div className={`${showSiderbar ? 'hidden' : 'flex'} flex-col items-start justify-center w-auto h-auto`}>
                            <span className="text-[#000000] font-bold text-sm leading-4">
                                User Name here
                            </span>
                            <span className="text-[#3F3F46] text-xs font-normal leading-4">
                                namehere@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
