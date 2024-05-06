import DashboardWrapper from "@/components/Dashboard/Dashboard-Wrapper";
import FundingWallet from "@/components/Invoice/FundingWallet";
import React from "react";

const page = () => {
  return (
    <>
      {/* main container */}
      <DashboardWrapper
        title1={"Manage Card "}
        title2={"Dashboard - Manage Card Load - Employer Detail"}
        top={true}
      >
        <div className="w-full h-auto p-[2%] flex justify-start items-start">
          {/* table container */}
          <FundingWallet />
        </div>
      </DashboardWrapper>
    </>
  );
};

export default page;
