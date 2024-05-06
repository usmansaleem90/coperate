'use client'
import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { AiOutlineEdit } from "react-icons/ai";
import { HolderInfo } from './Data';
import DashboardWrapper from '@/components/Dashboard/Dashboard-Wrapper';
import filter from "@/public/images/filter.svg";
import navWifi from '@/public/images/navWifi.svg'
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";


const Page = () => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <DashboardWrapper
            title1={"Manage Card Load"}
            title2={"Dashboard - Manage Card Load - Employer Detail"}
            top={true}
        >
            <div className='py-4 px-6'>
                <div className="bg-white shadow-2xl py-3 pb-5 w-full px-4 rounded-lg ">
                    <div className="flex flex-col ">
                        <div className="flex  items-start justify-between">
                            <h1 className="font-semibold" >Card Holder  Information</h1>
                            <div className="flex  items-start gap-3">
                                <button className="bg-[#E2E8F0] text-[#334155] font-semibold text-sm rounded-md flex items-center justify-center gap-2 ms:px-0 px-3 sm:w-[130px] py-2.5" >
                                    <Image src={filter} alt='' />
                                    <p className='sm:block hidden'>Filter</p>
                                </button>
                                <button onClick={handleOpen} className="bg-[#E2E8F0] text-[#334155] font-semibold text-sm rounded-md flex items-center justify-center gap-2 ms:px-0 px-3 sm:w-[130px] py-2.5" >
                                    <AiOutlineEdit className='text-xl' />
                                    <p className='sm:block hidden'>Edit</p>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1 className='text-sm text-[#A1A1AA] font-semibold'>User ID</h1>
                                <p className='mt-2'>Name here</p>
                            </div>
                            <div className='flex gap-10 flex-wrap'>
                                {
                                    HolderInfo.map((item, index) => (
                                        <div key={index}>
                                            <h1 className='text-sm text-[#A1A1AA] font-semibold'>{item.head}</h1>
                                            <p className='mt-2 text-sm'>{item.des}</p>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className='flex justify-between items-center mt-5 flex-wrap gap-3'>
                                <div className='flex gap-2 flex-wrap'>
                                    <button className="bg-[#E2E8F0] text-[#334155] font-semibold text-sm rounded-md flex items-center justify-center gap-2 w-[110px] py-2.5" >
                                        Locked
                                    </button>
                                    <button className="bg-[#E2E8F0] text-[#334155] font-semibold text-sm rounded-md flex items-center justify-center gap-2 w-[110px] py-2.5" >
                                        Closed
                                    </button>
                                    <button className="bg-[#E2E8F0] text-[#334155] font-semibold text-sm rounded-md flex items-center justify-center gap-2 w-[110px] py-2.5" >
                                        Reactive
                                    </button>
                                    <button className="bg-[#E2E8F0] text-[#334155] font-semibold text-sm rounded-md flex items-center justify-center gap-2 w-[110px] py-2.5" >
                                        Active
                                    </button>
                                    <button className="bg-[#E2E8F0] text-[#334155] font-semibold text-sm rounded-md flex items-center justify-center gap-2 w-[110px] py-2.5" >
                                        Change Pin
                                    </button>
                                </div>

                                <button className="lg:w-[206px] lg:px-2 md:px-4 px-3 h-full bg-[#4F46E5] rounded-lg flex justify-between p-2 items-center">
                                    <div className="w-auto h-auto flex flex-col font-normal justify-start items-start gap-[5px]">
                                        <span className="text-base text-white leading-5">
                                            <b>$ 4,546,876</b>.00
                                        </span>
                                        <span className="text-xs text-white leading-4 font-thin">Current Balance</span>
                                    </div>
                                    <Image alt="" src={navWifi} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                {
                    open &&
                    <div className='inset-0 fixed flex justify-center items-center z-50 w-full h-full'>
                        <div className="absolute inset-0 bg-black opacity-20 z-20 w-full h-full"></div>
                        <div className='bg-white py-7 rounded-xl  px-4  lg:w-[50%] sm:w-[75%] w-[90%] z-30 h-fit' >
                            <h1 className='text-lg font-semibold'>Change PIN Details</h1>
                            <p className='text-[#71717A] text-sm'>To help protect your security,
                                the keyboard entry has been disabled. Please use the on-screen
                                keypad to enter your card PIN. Click on the respective field to
                                launch the on-screen keypad</p>
                            <div className='mt-6'>
                                <div className='sm:w-[80%] w-full'>
                                    <h1 className='font-semibold'>PIN</h1>
                                    <div className="bg-[#F1F5F9] mt-2 flex items-center justify-between rounded-md gap-2 py-1 px-4" >
                                        <input type="text" placeholder="Enter Password" className=" h-9 placeholder:text-[#1D4B7E] placeholder:sm:text-base placeholder:text-xs outline-none bg-transparent" name="" id="" />
                                        <IoEyeOutline className='' />
                                    </div>
                                    <h1 className='font-semibold mt-3'>Confirm PIN</h1>
                                    <div className="bg-[#F1F5F9] mt-2 flex items-center justify-between rounded-md gap-2 py-1 px-4" >
                                        <input type="text" placeholder="Enter Password" className=" h-9 placeholder:text-[#1D4B7E] placeholder:sm:text-base placeholder:text-xs outline-none bg-transparent" name="" id="" />
                                        <IoEyeOutline className='' />
                                    </div>
                                </div>
                                <div className='flex gap-3 mt-10'>
                                    <button onClick={handleOpen} className="bg-[#E2E8F0] text-[#334155] font-semibold text-sm rounded-md flex items-center justify-center gap-2 w-[130px] py-2.5" >
                                        Cancel
                                    </button>
                                    <button className="bg-[#0D4C7B] text-white font-semibold text-sm rounded-md flex items-center justify-center gap-2 w-[130px] py-2.5" >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </DashboardWrapper>
    )
}

export default Page
