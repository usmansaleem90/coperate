"use client";
import { useSelector, } from 'react-redux'; // Import the useSelector hook to access state from the Redux store
import LoginPage from "./(auth)/login/page";
import DashboardWrapper from "@/components/Dashboard/Dashboard-Wrapper";
import HeroComp from "@/components/Dashboard/HeroComp";
import ChartComp from "@/components/Dashboard/Chart-Comp";
import Snapshot from "@/components/Dashboard/Snapshot";
import InvoiceHistroy from "@/components/Dashboard/Invoice-History";
import { useEffect } from 'react';
export default function Home() {
  const {isAuthenticated} = useSelector(
    (state) => state.auth
  );



  return (
    <div>
      {!isAuthenticated ? <LoginPage /> : (
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
      )}
    </div>
  );
}
