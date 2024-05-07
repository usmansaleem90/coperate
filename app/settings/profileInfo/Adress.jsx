
'use client'
import React, { useEffect, useState } from 'react'
import circle from '@/public/images/circle.svg'
import { AiFillEdit } from "react-icons/ai";
import Image from "next/image";
import Cookies from 'js-cookie';


      
const Adress = () => {
    const [userData, setUserData] = useState(null);

  useEffect(()=>{
    const getdata = async () => {
       

        try {
          const userDataString = Cookies.get("userData");
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
    return (
    <>
    {
        userData && (
            <>
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
                    <p className='text-black ' >{userData.address}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-sm text-primary' >City</p>
                    <p className='text-black ' >{userData.city}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-sm text-primary' >State</p>
                    <p className='' >{userData.state}</p>
                </div>
            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-6' >
            <div className='flex flex-col gap-1'>
                    <p className='text-sm text-primary' >Address Line 2</p>
                    <p className='text-black ' >{userData.address2}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-sm text-primary' >Postal Code</p>
                    <p className=' ' >{userData.pincode}</p>
                </div>
            </div>
          
        </div>
       </div>
            </>
        )
    }
    
    </>
    )
}

export default Adress
