"use client";
// pages/Home.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DashboardWrapper from "@/components/Dashboard/Dashboard-Wrapper";
import HeroComp from "@/components/Dashboard/HeroComp";
import ChartComp from "@/components/Dashboard/Chart-Comp";
import Snapshot from "@/components/Dashboard/Snapshot";
import { isTokenExpired } from '@/components/Auth/Auth_login';

export default function Home() {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const tokenExpiryDate = localStorage.getItem('expirydate');

   useEffect(() => {
      const isAuthenticated = localStorage.getItem('token');
      setIsAuthenticated(isAuthenticated);
   }, []);

   useEffect(() => {
      if (isTokenExpired(tokenExpiryDate)) {
         // Redirect to login page if expired
         setIsAuthenticated(false);
         window.location.href='/login'
        }
   }, [tokenExpiryDate]);

   if (!isAuthenticated) {
      return null; // Or loading indicator
   }

   return (
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
   );
}
