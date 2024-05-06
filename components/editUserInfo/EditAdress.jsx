'use client'
import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";


const EditAdress = () => {


    return (
        <>
            <div className='bg-white  py-4 rounded-xl w-full mb-20'>
                <h1 className='font-semibold text-[#64748B]'>Personal  Information</h1>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 mt-6 w-full'>
                <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Address Line 1</h1>
                        <div className='border-[#E2E8F0] border rounded-md flex items-center bg-[#F8FAFC] ' >
                            <textarea name="" id="" cols="30" placeholder='Type here' className='bg-transparent px-3 w-full' rows="6"></textarea>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Address Line 2</h1>
                        <div className='border-[#E2E8F0] border rounded-md flex items-center bg-[#F8FAFC] ' >
                            <textarea name="" id="" cols="30" placeholder='Type here' className='bg-transparent px-3 w-full' rows="6"></textarea>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >City</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <select
                                name="hightUnit"
                                className='outline-none bg-transparent text-sm text-primary w-full py-1.5'
                            >
                                <option value="m">Select City</option>
                                <option value="cm">CM</option>
                                <option value="inch">INCH</option>
                                <option value="foot">FOOT</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >State</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <select
                                name="hightUnit"
                                className='outline-none bg-transparent text-sm text-primary w-full py-1.5'
                            >
                                <option value="m">Select State</option>
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
                
            </div>
        </>
    )
}

export default EditAdress
