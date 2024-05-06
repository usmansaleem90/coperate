import React from 'react'
import circle from '@/public/images/circle.svg'
import { AiFillEdit } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from 'next/navigation';


const PersonalInformation = () => {

    const router = useRouter()

    return (
        <div className=' w-full py-3 px-5 h-full'>
            <div className='w-full flex justify-between '>
                <h1 className='font-semibold text-black sm:text-lg'>Personal  Information</h1>
                <button onClick={() => router.push('/settings/profileInfo/editProfileInfo')} className='flex items-center gap-1 justify-center rounded-sm bg-[#E2E8F0] py-2 sm:w-[100px] sm:px-0 px-2'>
                    <AiFillEdit className='text-lg' />
                    Edit
                </button>
            </div>
            <div className='xl:w-[73%] w-full flex flex-col gap-10 mt-4'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-6' >
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-primary' >Name</p>
                        <p className='text-black md:whitespace-nowrap' >Name Here</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-primary' >Contact Number</p>
                        <p className='text-black md:whitespace-nowrap' >+44 123 456 7890</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-primary' >Status</p>
                        <p className='text-[#059669] font-semibold' >Active</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-6' >
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-primary whitespace-nowrap' >Date Of  Birth</p>
                        <p className='text-black md:whitespace-nowrap' >Nov 23, 2000</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-primary' >Email ID</p>
                        <p className=' md:whitespace-nowrap whitespace-wrap' >namehere@gmail .com</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-primary' >Role</p>
                        <p className='text-[#008CD9] font-semibold' >Manager</p>
                    </div>
                </div>
                <div>
                    <p className='text-primary'>Programs List</p>
                    <div className='flex items-center gap-2 mt-2'>
                        <Image src={circle} alt="" />
                        <p>Gift Card</p>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <Image src={circle} alt="" />
                        <p>Festive Card</p>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <Image src={circle} alt="" />
                        <p>Travel Card</p>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <Image src={circle} alt="" />
                        <p>MIT Triton Card</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInformation
