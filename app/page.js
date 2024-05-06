import ChartComp from "@/components/Dashboard/Chart-Comp";
import DashboardWrapper from "@/components/Dashboard/Dashboard-Wrapper";
import HeroComp from "@/components/Dashboard/HeroComp";
import InvoiceHistroy from "@/components/Dashboard/Invoice-History";
<<<<<<< Updated upstream
import Snapshot from "@/components/Dashboard/Snapshot";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
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
    </div>
=======
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function Home() {
 
  const router = useRouter(); 
  const { isAuthenticated } = useSelector(state => state.auth); 

  useEffect(() => {
    console.log("usmansaleem" , isAuthenticated)
    // Ensure router is available before using it
    if (router) {
      // If isAuthenticated is true, redirect to the root path
      if (isAuthenticated) {
        router.push('/');
      }
    }
  }, []); 
 

  return isAuthenticated ? (

  
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
     
  ) :(
    <LoginPage />
>>>>>>> Stashed changes
  );
}
