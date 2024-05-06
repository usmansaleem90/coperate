import DashboardWrapper from '@/components/Dashboard/Dashboard-Wrapper'
import React from 'react'
import { LuDownload } from "react-icons/lu";
import profileIcon from '@/public/images/profileicon.svg'
import Image from "next/image";
import Table from './Table';


const page = () => {
    return (
        <DashboardWrapper
            title1={"Batch Corporate Card order"}
            title2={"Dashboard - Batch Corporate Card order"}
            top={true}
        >
            <div className='py-4 px-6'>

                <div className='py-4 px-3 bg-white rounded-lg flex flex-col items-center'>
                    <div className='bg-[#2563EB17] rounded-md flex border-[#2563EB] border items-center gap-2 w-[40%] justify-center py-2.5'>
                        <h1 className='text-[#0D4C7B] font-semibold' >Download Corporate Card Order Template</h1>
                        <LuDownload className='text-[#0D4C7B] ' />
                    </div>

                    <div className='bg-[#F8FAFC] rounded-md w-full mt-6 h-[300px] flex items-center justify-center border-2 border-dashed border-[#CBD5E1]'>
                        <div className='flex flex-col items-center gap-2'>
                            <Image alt='' src={profileIcon} />
                            <h1 className='whitespace-nowrap'>Upload or Drag documents</h1>
                        </div>
                    </div>

                    <button className='bg-[#0D4C7B] mb-8 mt-20 text-white px-5 py-2 rounded-sm'>Submit</button>

                </div>


                <div className='bg-white mt-6 rounded-lg' >
                    <div className='bg-white py-2 rounded-lg px-3'>
                        <h1 className='font-semibold '>Uploaded Batch</h1>
                        <p className='text-primary text-sm'>you have 234 Batch</p>
                    </div>
                    <Table />
                </div>

            </div>

        </DashboardWrapper>
    )
}

export default page
