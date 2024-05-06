'use client'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import filter from "@/public/images/filter.svg";
import download from "@/public/images/download.svg";
import { CgCalendarDates } from "react-icons/cg";


const History = () => {

    const [openFilter, setOpenFilter] = useState(false)

    const handleFilter = () => {
        setOpenFilter(!openFilter)
    }

    return (
        <div>
            <div className="w-full relative h-auto min-h-[491px] bg-white rounded-[10px] pb-[2%] sm:space-y-6 space-y-3">

                {/* top div */}
                <div className="px-[2%] pt-[2%] w-full min-h-11 h-auto flex md:flex-nowrap gap-2 flex-wrap justify-between items-center">
                    <div className="w-auto h-auto flex justify-start items-start flex-col gap-2">
                        <h1 className="text-[#000000] text-base font-bold sm:leading-5 leading-3">
                            Card Holder  Transaction
                        </h1>
                        <p className="text-[#52525B] font-normal sm:text-sm text-xs sm:leading-4 leading-3">
                            Card Holder  has 345 transactions
                        </p>
                    </div>

                    {/* buttons */}
                    <div className="flex gap-3 sm:flex-nowrap flex-wrap">
                        <div className="bg-[#F1F5F9] flex items-center rounded-md gap-2 py-1 px-2" >
                            <CiSearch className="text-2xl" />
                            <input type="text" placeholder="Search Something..." className=" h-9 outline-none bg-transparent" name="" id="" />
                        </div>
                        <button onClick={handleFilter} className={` ${openFilter ? 'bg-[#1D4B7E] text-white':'bg-[#F1F5F9] text-[#334155]'}  font-semibold text-sm py-3 justify-center flex items-center gap-2 w-[80px]  sm:px-0 px-4 rounded-sm`}>
                            <Image alt="" src={filter} className="w-4 " />
                            <p className="sm:block hidden">Filter</p>
                        </button>
                        <button className="text-[#334155] bg-[#F1F5F9] font-semibold text-sm py-3 justify-center flex items-center gap-2 xl:w-[145px] w-[fit] xl:px-0 px-4  rounded-sm">
                            <Image alt="" src={download} className="w-4 " />
                            <p className="xl:block hidden">Download CSV</p>
                            <p className="xl:hidden block">CSV</p>
                        </button>
                        <button className="text-[#334155] bg-[#F1F5F9] font-semibold text-sm py-3 justify-center flex items-center gap-2 xl:w-[145px] w-[fit] xl:px-0 px-4  rounded-sm">
                            <Image alt="" src={download} className="w-4 " />
                            <p className="xl:block hidden">Download PDF</p>
                            <p className="xl:hidden block">PDF</p>
                        </button>

                    </div>

                    {
                        openFilter && <div className='bg-white absolute top-[11%] shadow-2xl right-[35%] py-3 rounded-lg px-3' >
                            <h1 className='font-semibold text-sm' >Filter</h1>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-4'>
                                    <div className='flex gap-2 items-center'>
                                        <input type="radio" className='rounded-full h-4 w-4' name="" id="" />
                                        <h1 className='text-sm' >All</h1>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <input type="radio" className='rounded-full h-4 w-4' name="" id="" />
                                        <h1 className='text-sm' >Debit</h1>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <input type="radio" className='rounded-full h-4 w-4' name="" id="" />
                                        <h1 className='text-sm' >Credit</h1>
                                    </div>
                                </div>
                                <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                                    <select
                                        name="hightUnit"
                                        className='outline-none bg-transparent text-sm text-primary w-full py-1.5'
                                    >
                                        <option value="m">Last 3 months</option>
                                        <option value="cm">CM</option>
                                        <option value="inch">INCH</option>
                                        <option value="foot">FOOT</option>
                                    </select>
                                </div>
                                <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                                    <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='From Datee' />
                                    <CgCalendarDates className='text-xl' />
                                </div>
                                <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                                    <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='To Datee' />
                                    <CgCalendarDates className='text-xl' />
                                </div>
                                <button className='bg-[#1D4B7E] text-white py-2'>
                                    Search
                                </button>
                            </div>
                        </div>
                    }

                </div>

                {/* table div */}
                <div className="w-full h-auto overflow-x-auto ">
                    <table className="w-full border-collapse min-w-max">
                        <thead className=" text-sm leading-4 font-bold bg-[#F9F9F9] ">
                            <tr className="h-[58px] text-[#3F3F46]">
                                <td className="pl-4 pr-0 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                                    Sr.No
                                </td>
                                <td className="px-4 py-2 text-left  whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    Trans Date
                                </td>
                                <td className="px-4 py-2 text-left  whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    Trans Time
                                </td>
                                <td className="px-4 py-2 text-left  whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    Trans Ref ID
                                </td>
                                <td className="px-4 py-2 text-left whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    Description
                                </td>
                                <td className="px-4 py-2 text-left  whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    Card Number
                                </td>
                                <td className="px-4 py-2 text-left whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    Debit (-)
                                </td>
                                <td className="w-auto px-4 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                                    Credit (+)
                                </td>
                                <td className="w-auto px-4 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                                    Fee
                                </td>
                                <td className="w-auto px-4 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                                    Running Balance
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
                                        #1
                                    </td>
                                    <td className="px-4 py-4 min-w-[80px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                        Aug 23, 2023
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                        11:45 PM
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                        45678578
                                    </td>
                                    <td className="px-4 py-4  whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                        Share Funds testing
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap  overflow-hidden text-overflow-ellipsis">
                                        24567
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                        $ 456.99
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                        $ 456.99
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                        $ 456.99
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                        $ 456.99
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )
}

export default History
