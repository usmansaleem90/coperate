import CorporateUser from "@/components/Corporate/CorporateUser";
import DashboardWrapper from "@/components/Dashboard/Dashboard-Wrapper";
import React from "react";

const CorporateUserPage = () => {
  return (
    <>
      {/* main container */}
      <DashboardWrapper
        title1={"Corporate User"}
        title2={"Dashboard - Corporate User"}
        top={true}
      >
        <div className="w-full h-auto p-[2%]">
          <CorporateUser />
        </div>
      </DashboardWrapper>
    </>
  );
};

export default CorporateUserPage;
