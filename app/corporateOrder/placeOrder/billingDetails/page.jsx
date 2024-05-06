'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Link from "next/link";


const Page = () => {

    const router = useRouter()

    return (
        <div>
            {/* card1 */}
            <div className='bg-white px-6 py-4 rounded-xl'>
                <h1 className='font-semibold text-[#64748B]'>Order Information</h1>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 mt-6'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Order Number</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Transaction ID</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >PO Reference No</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Remarks</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Remarks</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <select
                                name="hightUnit"
                                className='outline-none bg-transparent text-sm text-primary w-full py-1.5'
                            >
                                <option value="m">Select Shipping Method</option>
                                <option value="cm">CM</option>
                                <option value="inch">INCH</option>
                                <option value="foot">FOOT</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* card2 */}
            <div className=' mt-4 bg-white rounded-xl px-6 py-4'>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold text-[#64748B]'>Saved Addess</h1>
                    <h1 className='font-medium' >Select Saved Address</h1>
                    <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                        <select
                            name="hightUnit"
                            className='outline-none bg-transparent text-sm text-primary w-full py-1.5'
                        >
                            <option value="m">Select Saved Address</option>
                            <option value="cm">CM</option>
                            <option value="inch">INCH</option>
                            <option value="foot">FOOT</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* card3 */}
            <div className='bg-white px-6 rounded-xl mt-4 py-4'>
                <h1 className='font-semibold text-[#64748B]'>Billing Address</h1>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 mt-6'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >First Name</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Last Name</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Phone Number</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Adress line 1</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Adress line 2</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Country</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <select
                                name="hightUnit"
                                className='outline-none bg-transparent text-sm text-primary w-full py-1.5'
                            >
                                <option value="m">Select </option>
                                <option value="cm">CM</option>
                                <option value="inch">INCH</option>
                                <option value="foot">FOOT</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >City</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <select
                                name="hightUnit"
                                className='outline-none bg-transparent text-sm text-primary w-full py-1.5'
                            >
                                <option value="m">Select </option>
                                <option value="cm">CM</option>
                                <option value="inch">INCH</option>
                                <option value="foot">FOOT</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Postal Code</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>

                </div>
                <div className='flex items-center gap-3 my-6'>
                    <input type="checkbox" name="" className='h-4 w-4' id="" />
                    <p>Use Same address as Shipping Address</p>
                </div>
                <h1 className='font-semibold text-[#64748B] mt-4'>Shiping Address</h1>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 mt-6'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >First Name</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Last Name</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Phone Number</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Adress line 1</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Adress line 2</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Country</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <select
                                name="hightUnit"
                                className='outline-none bg-transparent text-sm text-primary w-full py-1.5'
                            >
                                <option value="m">Select </option>
                                <option value="cm">CM</option>
                                <option value="inch">INCH</option>
                                <option value="foot">FOOT</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >City</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <select
                                name="hightUnit"
                                className='outline-none bg-transparent text-sm text-primary w-full py-1.5'
                            >
                                <option value="m">Select </option>
                                <option value="cm">CM</option>
                                <option value="inch">INCH</option>
                                <option value="foot">FOOT</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Postal Code</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                </div>

                <div className='flex gap-4 pt-6 mt-4'>
                    <button className='bg-[#0D4C7B] text-white text-sm w-[200px] rounded-md py-3'>Save as New Adress</button>
                    <Link href={'/corporateOrder/placeOrder/cardDesign'} className=''>
                        <button  className='bg-[#0D4C7B] text-white text-sm w-[200px] rounded-md py-3'>Place Your Order</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page
