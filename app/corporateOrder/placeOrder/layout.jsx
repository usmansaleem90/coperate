import DashboardWrapper from '@/components/Dashboard/Dashboard-Wrapper'
import React from 'react'
import navWifi from '@/public/images/navWifi.svg'
import card from '@/public/images/smallCard.svg'
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";


const layout = ({children}) => {
    return (
        <DashboardWrapper
            title1={"Place Corporate Order"}
            title2={"Dashboard - Place Corporate Order"}
            top={true}
        >
            <div className='px-6 py-3'>

                {/* top bar */}
                <div className="w-full px-4 py-3 h-auto flex justify-between sm:items-center items-end sm:flex-row flex-col bg-white  rounded-[10px]">
                    <div className='flex flex-col gap-2 md:w-auto sm:w-1/2 w-full'>
                        <h1 className="text-[#000000] text-base font-bold leading-5">
                            Place Corporate Order
                        </h1>
                        <p className="text-[#52525B] font-normal text-sm leading-4">
                            Order your favorite card that you liked want to gift to someone on special occasions
                        </p>
                    </div>
                    <button className="w-[206px] lg:px-2 md:px-4 px-3 h-full bg-[#4F46E5] rounded-lg flex justify-between p-2 py-3 items-center">
                        <div className="w-auto h-auto flex  flex-col font-normal justify-start items-start gap-[5px]">
                            <span className="text-base text-white leading-5 whitespace-nowrap">
                                <b>$ 4,546,876</b>.00
                            </span>
                            <span className="text-xs leading-4 font-thin text-white">Account Balance</span>
                        </div>
                        <Image alt="" src={navWifi} />
                    </button>
                </div>

                {/* Inner */}
                <div className='w-full flex gap-4 lg:flex-row flex-col-reverse items-start mt-4'>
                    <div className='xl:w-[65%] lg:w-1/2 w-full'>
                        {children}
                    </div>

                    {/* right bar */}

                    <div className='xl:w-[35%] lg:w-1/2 w-full bg-white rounded-xl'>
                        <div className='py-6 px-4'>
                            <h1 className='font-semibold text-black text-lg' >Cart</h1>
                            <div className=' mt-4 flex flex-wrap items-center justify-between'>
                                <Image src={card} alt='' />
                                <div>
                                    <h1 className='text-black font-semibold sm:text-base text-sm'>Name of the card</h1>
                                    <div className='flex w-full gap-4'>
                                        <p className='text-primary'>x2</p>
                                        <p className='font-semibold text-primary sm:text-base text-sm' >$ 45</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-black font-semibold sm:text-base text-sm '>Total</h1>
                                    <p className='font-semibold text-primary sm:text-base text-sm' >$ 4005</p>
                                </div>
                                <div className='bg-[#FEE2E2] p-2 rounded-lg'>
                                    <RiDeleteBinLine className='text-[#B91C1C] text-xl' />
                                </div>
                            </div>
                            <div className='bg-[#E2E8F0] my-4 h-[1px] w-full' ></div>
                            <div className='flex items-center flex-wrap justify-between'>
                                <Image src={card} alt='' />
                                <div>
                                    <h1 className='text-black font-semibold sm:text-base text-sm '>Name of the card</h1>
                                    <div className='flex w-full gap-4'>
                                        <p className='text-primary'>x2</p>
                                        <p className='font-semibold text-primary sm:text-base text-sm' >$ 45</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-black font-semibold sm:text-base text-sm '>Total</h1>
                                    <p className='font-semibold text-primary sm:text-base text-sm' >$ 4005</p>
                                </div>
                                <div className='bg-[#FEE2E2] p-2 rounded-lg'>
                                    <RiDeleteBinLine className='text-[#B91C1C] text-xl' />
                                </div>
                            </div>

                            <div>
                                <h1 className='font-semibold text-[#94A3B8] text-lg mt-2' >Cart</h1>
                                <div className='w-full flex flex-col gap-3 mt-2'>
                                    <div className='flex w-full justify-between'>
                                        <h1>Card Value</h1>
                                        <h1 className='font-semibold'>$ 8010.00</h1>
                                    </div>
                                    <div className='flex w-full justify-between'>
                                        <h1>Card Value</h1>
                                        <h1 className='font-semibold'>$ 33.00</h1>
                                    </div>
                                    <div className='flex w-full justify-between'>
                                        <h1>Card Value</h1>
                                        <h1 className='font-semibold'>$ 3.00</h1>
                                    </div>
                                    <div className='flex w-full justify-between'>
                                        <h1>Card Value</h1>
                                        <h1 className='font-semibold'>$ 10.00</h1>
                                    </div>
                                    <div className='flex w-full justify-between'>
                                        <h1>Card Value</h1>
                                        <h1 className='font-semibold'>$ 8040.00</h1>
                                    </div>
                                    <div className='flex w-full justify-between mt-4'>
                                        <h1 className='font-semibold'>Grand Total</h1>
                                        <h1 className='font-semibold'>$ 8610.00</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </DashboardWrapper>
    )
}

export default layout
