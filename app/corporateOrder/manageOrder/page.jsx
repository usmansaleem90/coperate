import DashboardWrapper from '@/components/Dashboard/Dashboard-Wrapper'
import React from 'react'
import Table from '../batchCarprateOrder/Table'
import { CiSearch } from "react-icons/ci";


const page = () => {
    return (
        <DashboardWrapper
            title1={"Manage Orders"}
            title2={"Dashboard - Manage Orders"}
            top={true}
        >
            <div className='px-6 py-4'>
                <div className='bg-white py-6 flex justify-between rounded-lg px-3'>
                    <div>
                        <h1 className='font-semibold '>Uploaded Batch</h1>
                        <p className='text-primary text-sm'>you have 234 Batch</p>
                    </div>
                    <div className="bg-[#F1F5F9] flex items-center rounded-md gap-2 py-1 px-2" >
                        <CiSearch className="text-2xl" />
                        <input type="text" placeholder="Search Something..." className="md:block hidden h-9 outline-none bg-transparent" name="" id="" />
                    </div>
                </div>
                <div className='bg-white py-4 px-6'>
                    <Table />
                </div>
            </div>
        </DashboardWrapper>
    )
}

export default page
