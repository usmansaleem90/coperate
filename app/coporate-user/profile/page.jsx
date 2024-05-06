import DashboardWrapper from "@/components/Dashboard/Dashboard-Wrapper";
import React from "react";

const page = () => {
  return (
    <>
      {/* main container */}
      <DashboardWrapper
        title1={"Corporate User"}
        title2={"Dashboard - Corporate User - Usman Zafar"}
        top={true}
      >
        <div className="">User profile</div>
      </DashboardWrapper>
    </>
  );
};

export default page;
