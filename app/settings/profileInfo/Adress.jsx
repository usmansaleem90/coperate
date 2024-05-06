import React from 'react'
import circle from '@/public/images/circle.svg'
import { AiFillEdit } from "react-icons/ai";
import Image from "next/image";


const Adress = () => {
    return (
        <div className=' w-full py-3 px-5 h-full'>
            <div className='w-full flex justify-between '>
                <h1 className='font-semibold text-black sm:text-lg'>Personal  Information</h1>
                <button className='flex items-center gap-1 justify-center rounded-sm bg-[#E2E8F0] py-2 sm:w-[100px] sm:px-0 px-2'>
                    <AiFillEdit className='text-lg' />
                    Edit
                </button>
            </div>
            <div className='w-full flex flex-col gap-10 mt-4'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-6' >
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-primary' >Address Line 1</p>
                        <p className='text-black ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo sapien</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-primary' >City</p>
                        <p className='text-black ' >Name Here</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-primary' >State</p>
                        <p className='' >Name Here</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-6' >
                <div className='flex flex-col gap-1'>
                        <p className='text-sm text-primary' >Address Line 2</p>
                        <p className='text-black ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo sapien</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-primary' >Postal Code</p>
                        <p className=' ' >1234</p>
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default Adress
