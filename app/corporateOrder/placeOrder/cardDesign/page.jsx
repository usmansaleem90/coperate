'use client'
import Carousel from '@/components/carousel/Carousel'
import { useRouter } from 'next/navigation';
import React from 'react'
import { BsCartDash } from "react-icons/bs";
import Link from "next/link";



const Page = () => {

    const router = useRouter()

    return (
        <div >
            <div className='bg-white p-4 rounded-xl'>
                <h1 className='font-semibold text-lg'>Card Design</h1>
                <p className='my-2 text-sm text-[#27272A] font-semibold '>Select Program</p>
                <div className='pt-4'>
                    <Carousel />
                </div>
            </div>
            <div className='bg-white my-6 p-4 rounded-xl'>
                <h1 className='text-[#64748B] font-semibold'>Card Details</h1>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 my-4'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Denomination</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <select
                                name="hightUnit"
                                className='outline-none bg-transparent text-sm text-primary w-full py-1.5'
                            >
                                <option value="m">Denomination </option>
                                <option value="cm">CM</option>
                                <option value="inch">INCH</option>
                                <option value="foot">FOOT</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Number Of Cards</h1>
                        <div className='border-[#E2E8F0] border flex justify-between rounded-md h-12 items-center bg-[#F8FAFC] px-3' >
                            <div className='text-3xl bg-white px-3 rounded-lg w-fit'>+</div>
                            <div className='text-3xl bg-white px-3 rounded-lg w-fit'>-</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Name on Card </h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <select
                                name="hightUnit"
                                className='outline-none bg-transparent text-sm text-primary w-full py-1.5'
                            >
                                <option value="m">Select Product Message </option>
                                <option value="cm">CM</option>
                                <option value="inch">INCH</option>
                                <option value="foot">FOOT</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Custom Message</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 mt-16 mb-4'>
                    <Link href={'/corporateOrder/placeOrder/addtoCart'}>
                        <button  className='bg-[#0D4C7B] text-white text-sm w-[180px] flex items-center justify-center gap-2 rounded-md py-3'>
                            Add to Cart <BsCartDash />
                        </button>
                    </Link>
                    <button className='bg-[#0D4C7B] text-white text-sm w-[230px] rounded-md py-3'>
                        Procced to Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Page
