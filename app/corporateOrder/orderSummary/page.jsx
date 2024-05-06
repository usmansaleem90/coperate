import DashboardWrapper from '@/components/Dashboard/Dashboard-Wrapper'
import React from 'react'
import slide1 from '@/public/images/slide1.svg'
import slide2 from '@/public/images/slideCard2.svg'
import Image from "next/image";


const page = () => {
    return (
        <DashboardWrapper
            title1={"Place Corporate Order"}
            title2={"Dashboard - Place Corporate Order - Order Name - Order Summary"}
            top={true}
        >
            <div className='py-4 px-6'>
                <div className='bg-white p-4' >
                    <div className='flex justify-between flex-wrap md:gap-0 gap-4 lg:w-[90%] w-full'>
                        <div className=''>
                            <h1 className='text-[#A1A1AA] text-xs font-semibold'>Order Number</h1>
                            <h1 className='text-[#171717] text-base mt-2'>5467323</h1>
                        </div>
                        <div className=''>
                            <h1 className='text-[#A1A1AA] text-xs font-semibold'>Corporate ID</h1>
                            <h1 className='text-[#171717] text-base mt-2'>Flipkart</h1>
                        </div>
                        <div className=''>
                            <h1 className='text-[#A1A1AA] text-xs font-semibold'>Corporate Name</h1>
                            <h1 className='text-[#171717] text-base mt-2'>Flipkart</h1>
                        </div>
                        <div className=''>
                            <h1 className='text-[#A1A1AA] text-xs font-semibold'>Failed / Approved Records</h1>
                            <h1 className='text-[#171717] text-base mt-2'>0/0</h1>
                        </div>
                        <div className=''>
                            <h1 className='text-[#A1A1AA] text-xs font-semibold'>Total / Processed Order Value</h1>
                            <h1 className='text-[#171717] text-base mt-2'>$ 0 / $ 0</h1>
                        </div>
                    </div>

                    <div className='w-full flex sm:flex-row flex-col gap-4 mt-8'>
                        <div className='lg:w-[25%] sm:w-[35%] w-full ' >
                            <div className='bg-[#F1F5F9] p-4 rounded-lg flex flex-col items-start gap-4'>
                                <h1 className='font-semibold text-lg'>Shipping Details</h1>
                                <div>
                                    <h1 className='text-sm font-semibold text-[#64748B]' >Shipping Method</h1>
                                    <p className='mt-2'>Courier</p>
                                </div>
                                <div>
                                    <h1 className='text-sm font-semibold text-[#64748B]' >Ship to</h1>
                                    <p className='mt-2'>FlipkartC/O Siva</p>
                                </div>
                                <div>
                                    <h1 className='text-sm font-semibold text-[#64748B]' >Address</h1>
                                    <p className='mt-2'>Ph: 8088669 Ravoos Chairtra Ayyppa Layout Maratahaili</p>
                                </div>
                                <p className='' >Bangalore</p>
                                <p className='' >New Delhi</p>
                                <p className='' >India</p>
                                <p className='' >New Delhi</p>

                            </div>
                            <div className='bg-[#F1F5F9] mt-6 p-4 rounded-lg flex flex-col items-start gap-4'>
                                <h1 className='font-semibold text-lg'>Billing Details</h1>

                                <p className='' >Ravoos Chaitra</p>
                                <p className='' >Ayyppa Layoout</p>
                                <p className='' >Maratahaili</p>
                                <p className='' >Bangalore</p>
                                <p className='' >New Delhi</p>
                                <p className='' >India</p>
                                <p className='' >New Delhi</p>

                            </div>
                        </div>
                        <div className='lg:w-[80%] sm:w-[65%] w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3' >
                            {
                                [1, 2, 3, 4, 5].map((item, index) => (
                                    <div key={index} className='bg-[#F1F5F9] rounded-lg p-4'>
                                        <h1 className='font-semibold text-lg'>Shipping Details</h1>
                                        <div className='flex justify-between w-full items-center mt-2'>
                                            <h1 className='text-sm font-semibold text-[#64748B]' >Card Design</h1>
                                            <p className='text-[#2563EB] underline text-sm font-semibold'>View Card Design</p>
                                        </div>
                                        <div className='flex justify-center my-2'>
                                            <Image alt='' src={slide1} />
                                        </div>
                                        <div className='flex flex-col gap-3 mt-4'>
                                            <div className='flex justify-between w-full items-center'>
                                                <h1 className='text-sm font-semibold text-[#64748B]' >Order Created By</h1>
                                                <p className=''>Admin</p>
                                            </div>
                                            <div className='flex justify-between w-full items-center'>
                                                <h1 className='text-sm font-semibold text-[#64748B]' >Order Created On</h1>
                                                <p className=''>04/05/2023</p>
                                            </div>
                                            <div className='flex justify-between w-full items-center'>
                                                <h1 className='text-sm font-semibold text-[#64748B]' >Approved On</h1>
                                                <p className=''>04/05/2023</p>
                                            </div>
                                            <div className='flex justify-between w-full items-center'>
                                                <h1 className='text-sm font-semibold text-[#64748B]' >Approved By</h1>
                                                <p className=''>Admin</p>
                                            </div>
                                            <div className='flex justify-between w-full items-center'>
                                                <h1 className='text-sm font-semibold text-[#64748B]' >Activated by</h1>
                                                <p className=''>-</p>
                                            </div>
                                            <div className='flex justify-between w-full items-center'>
                                                <h1 className='text-sm font-semibold text-[#64748B]' >Total Cards</h1>
                                                <p className=''>2</p>
                                            </div>
                                            <div className='flex justify-between w-full items-center'>
                                                <h1 className='text-sm font-semibold text-[#64748B]' >Generated Cards</h1>
                                                <p className=''>0</p>
                                            </div>
                                            <div className='flex justify-between w-full items-center'>
                                                <h1 className='text-sm font-semibold text-[#64748B]' >Failed Cards</h1>
                                                <p className=''>0</p>
                                            </div>
                                            <div className='flex justify-between w-full items-center'>
                                                <h1 className='text-sm font-semibold text-[#64748B]' >Total Approved Amount </h1>
                                                <p className=''>$0.00000000</p>
                                            </div>
                                            <div className='flex justify-between w-full items-center'>
                                                <h1 className='text-sm font-semibold text-[#64748B]' >Status </h1>
                                                <div className='bg-[#10B981] px-4 py-1 text-white rounded-full'>
                                                    Ready
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </DashboardWrapper >
    )
}

export default page
