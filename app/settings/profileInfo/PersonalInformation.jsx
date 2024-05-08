
'use client'
import React, { useEffect, useState } from 'react'
import circle from '@/public/images/circle.svg'
import { AiFillEdit } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { data } from 'autoprefixer';
import Cookies from 'js-cookie';
const PersonalInformation = () => {
    const [userData, setUserData] = useState(null);

  useEffect(()=>{
    const getdata = async () => {
       

        try {
          const userDataString = sessionStorage.getItem("userData");
          if (!userDataString) {
            throw new Error("User data not found in local storage");
          }
    
          console.log("Retrieved userData:", userDataString);
          const userData = JSON.parse(userDataString);
    
          const tokenDto = userData.tokenDto;
          if (!tokenDto) {
            throw new Error("Token data not found in userData");
          }
    
         
          const token = tokenDto.token;
          const memberId = tokenDto.memberId;
          const response = await fetch(`https://oxygentestenv01.oxygen-global.com/cardholderadmin/private/profile/read/${memberId}`, {
            method: 'GET',
            headers: {
              'Authorization': `Token ${token}`,
              'Content-Type': 'application/json',
            },
          });
            if(response){
    
              const responseData = await response.json();
            console.log(responseData)
            setUserData(responseData)
            }
          if (!response.ok) {
            let errorMessage = 'Unknown error occurred';
            if (response.status === 401) {
              errorMessage = 'Unauthorized: Check your authentication credentials';
            } else {
              errorMessage = `HTTP error! Status: ${response.status}`;
            }
            throw new Error(errorMessage);
          }
    
        
        } catch (error) {
          console.error("Error:", error);
          
        }
 
    };
    getdata()
  } , [])
      

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
         {
            userData && (
                <>
                   <div className='xl:w-[73%] w-full flex flex-col gap-10 mt-4'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-6' >
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-primary' >Name</p>
                        <p className='text-black md:whitespace-nowrap' >{userData.firstName}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-primary' >Contact Number</p>
                        <p className='text-black md:whitespace-nowrap' >{userData.mobileNumber}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-primary' >Status</p>
                        <p className='text-[#059669] font-semibold' >Active</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-6' >
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-primary whitespace-nowrap' >Date Of  Birth</p>
                        <p className='text-black md:whitespace-nowrap' >{userData.dateofbirth}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-primary' >Email ID</p>
                        <p className=' md:whitespace-nowrap whitespace-wrap' >{userData.emailId}</p>
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
                    {/* <button onClick={getQRCode}>usman</button> */}
                </div>
            </div>
                </>
            )
         }
        </div>
    )
}

export default PersonalInformation
