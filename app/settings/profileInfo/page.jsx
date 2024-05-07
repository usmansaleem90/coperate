'use client'
import DashboardWrapper from '@/components/Dashboard/Dashboard-Wrapper'
import React, { useState , useEffect } from 'react'
import dumyImg from '@/public/images/dumyImg.svg'
import profileIcon from '@/public/images/profileicon.svg'
import Image from "next/image";
import PersonalInformation from './PersonalInformation'
import Adress from './Adress'
import axios from 'axios';
import Cookies from 'js-cookie'

const Page = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [profilePhoto, setProfilePhoto] = useState();

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  


  
  

  const handleUpload = () => {
    

    const userDataString = Cookies.get("userData");

    const userData = JSON.parse(userDataString);

    const tokenDto = userData.tokenDto;
    const { mediaInfo, mediaType, memberId } = imageData;

  
    const blob = dataURItoBlob(mediaInfo);
  
    const formData = new FormData();
  
    formData.append('file', blob, 'profile.jpg');
    formData.append('mediaType', mediaType);
    formData.append('memberId', memberId);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token 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`,
    };

  
    axios.post('https://oxygentestenv01.oxygen-global.com/cardholderadmin/private/profile/updatePicture', formData ,{
      headers
    })
      .then(response => {
        console.log('Profile photo uploaded successfully:', response.data);
       
      })
      .catch(error => {
        console.error('Error uploading profile photo:', error);
   
      });
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

            {/* Upload profile photo */}
            <input type="file" accept="image/*" />
            <button onClick={handleUpload}>Upload</button>

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
