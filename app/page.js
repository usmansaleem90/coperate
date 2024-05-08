"use client";
// pages/Home.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DashboardWrapper from "@/components/Dashboard/Dashboard-Wrapper";
import HeroComp from "@/components/Dashboard/HeroComp";
import ChartComp from "@/components/Dashboard/Chart-Comp";
import Snapshot from "@/components/Dashboard/Snapshot";
import { isTokenExpired } from '@/components/Auth/Auth_login';
import InvoiceHistroy from '@/components/Dashboard/Invoice-History';
import LoginPage from './(auth)/login/page';
import { gettoken } from '@/redux/actions/authActions';

export default function Home() {
   if (typeof window !== 'undefined') {
    var isLogged = gettoken();
   }
   useEffect(() => {
      if (!isLogged) {
        window.location.href ='/login';
      }
    }, [isLogged]);
   return (
      <>
      {
         
         isLogged ? (
            <DashboardWrapper
            title1={"Saturday, November 18"}
            title2={"Good afternoon, Name here"}
         >
            <div className="py-4 px-[2%] w-full grow space-y-4">
               <HeroComp />
               <ChartComp />
               <Snapshot />
               <InvoiceHistroy />
            </div>
         </DashboardWrapper>
         )
         :(
            <LoginPage />
         )
      
      }
      </>
   );
}