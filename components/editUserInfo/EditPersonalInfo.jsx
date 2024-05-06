'use client'
import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";


const EditPersonalInfo = () => {

    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => {
        setIsChecked(!isChecked);
    };


    return (
        <>
            <div className='bg-white  py-4 rounded-xl w-full'>
                <h1 className='font-semibold text-[#64748B]'>Personal  Information</h1>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 mt-6 w-full'>
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
                        <h1 className='font-medium' >Email</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Contact Number</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Date Of  Birth</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Program</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <select
                                name="hightUnit"
                                className='outline-none bg-transparent text-sm text-primary w-full py-1.5'
                            >
                                <option value="m">Select Program</option>
                                <option value="cm">CM</option>
                                <option value="inch">INCH</option>
                                <option value="foot">FOOT</option>
                            </select>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-2 bg-white border w-fit px-2 py-1 rounded-full'>
                                <p className='text-sm'>Festive Card</p>
                                <div className='bg-[#FEE2E2] p-1 rounded-full' >
                                    <AiOutlineClose className='text-[#B91C1C] text-xs' />
                                </div>
                            </div>
                            <div className='flex items-center gap-2 bg-white border w-fit px-2 py-1 rounded-full'>
                                <p className='text-sm'>Gift Card</p>
                                <div className='bg-[#FEE2E2] p-1 rounded-full' >
                                    <AiOutlineClose className='text-[#B91C1C] text-xs' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h1 className='font-medium' >Role</h1>
                        <div className='border-[#E2E8F0] border rounded-md h-12 flex items-center bg-[#F8FAFC] px-3' >
                            <input type="text" className='bg-transparent w-full h-full outline-none' placeholder='Type here' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 mt-6'>
                    <h1>Active or Deactive</h1>
                    <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <div className="relative">
                <input id="toggle" type="checkbox" checked={isChecked} onChange={toggleSwitch} className="hidden" />
                <div className={`toggle__line w-12 h-7 bg-gray-400 rounded-full shadow-inner ${isChecked ? 'bg-[#10B981]' : ''}`}></div>
                <div className={`toggle__dot absolute w-6 h-6 mt-0.5  bg-white rounded-full shadow inset-y-0 left-0 ${isChecked ? 'transform translate-x-full' : ''}`}></div>
            </div>
        </label>
                </div>
            </div>
        </>
    )
}

export default EditPersonalInfo
