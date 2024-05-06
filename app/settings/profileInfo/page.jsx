'use client'

import DashboardWrapper from '@/components/Dashboard/Dashboard-Wrapper'
import React, { useState } from 'react'
import dumyImg from '@/public/images/dumyImg.svg'
import profileIcon from '@/public/images/profileicon.svg'
import Image from "next/image";
import PersonalInformation from './PersonalInformation'
import Adress from './Adress'


const Page = () => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    { label: 'Personal Information', content: <PersonalInformation /> },
    { label: 'Adress', content: <Adress/> },
  ];

  return (
    <DashboardWrapper
    title1={"Corporate User"}
    title2={"Dashboard - Corporate User - Usman Zafar"}
    top={true}
    >
      <div className='px-5 py-4'>
        <div className='bg-white rounded-lg flex sm:flex-row flex-col h-full pb-10'>
          <div className='border-r border-[#E2E8F0] sm:px-8 px-4 flex flex-col items-center gap-2'>
            <Image alt='' src={dumyImg} className='sm:mt-12 mt-6 ' />
            <div className='bg-[#E2E8F0] px-3 py-1 rounded-full flex items-center gap-1'>
              <Image alt='' src={profileIcon} />
              <p className='text-sm'>Update Profile</p>
            </div>

            <div className='flex flex-col gap-6 mt-8'>
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-3 sm:w-[230px] sm:text-base text-sm whitespace-nowrap rounded-md ${activeTab === index ? 'bg-[#0D4C7B] text-white' : 'bg-[#F8FAFC] text-primary '
                    }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* content */}
          <div className='w-full h-full sm:mt-0  mt-6'>
            <div className=" w-full">
              {tabs.map((tab, index) => (
                <div key={index} className={activeTab === index ? '' : 'hidden'}>
                  {tab.content}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </DashboardWrapper>
  )
}

export default Page
