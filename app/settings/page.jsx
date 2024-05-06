import DashboardWrapper from "@/components/Dashboard/Dashboard-Wrapper";
import SettingCard from "@/components/Settings/SettingCard";
import Topbar from "@/components/Settings/Topbar";
import { CardsData } from "@/lib/data";
import React from "react";

const SettingsPage = () => {
  return (
    <>
      {/* main container */}
      <DashboardWrapper
        title1={"Settings"}
        title2={"Dashboard - Settings"}
        top={true}
      >
        <div className="w-full h-auto p-[2%] flex flex-col justify-start items-start gap-5">
          <Topbar />

          <div className="grid w-full h-auto grid-cols-3 gap-5">
            {CardsData?.map((item, idx) => (
              <SettingCard key={idx} data={item} />
            ))}
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
};

export default SettingsPage;
