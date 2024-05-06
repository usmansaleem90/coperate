import React from "react";
import PieChart from "./PieChart";
import DonutChart from "./DonutChart";

const ChartComp = () => {
  return (
    <>
      {/* main container */}
      <div className="w-full h-auto min-h-[60vh] gap-4 grid md:grid-cols-2 grid-cols-1 items-center">
        {/* left div  */}
        <div className=" min-h-[473px] px-[2%] rounded-[10px] bg-white flex flex-col justify-start py-[2%] gap-6 items-start">
          {/* top div */}
          <div className="flex items-center justify-between w-full h-auto">
            <span className="text-[#000000] text-base font-bold leading-5">
              Invoices
            </span>

            <button className="bg-[#F1F5F9] text-[#1F2C38] font-medium text-sm leading-4 py-2 px-3 rounded min-w-[98px] w-auto min-h-8 h-auto flex justify-center items-center gap-[5px]">
              <span>Monthly </span>
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5.5 5.5L10 1"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* labels div */}
          <div className="w-full h-auto flex justify-start items-center gap-3 text-[#615E83] font-bold leading-7 text-sm">
            <div className="w-auto h-auto flex justify-start items-center gap-4 ">
              <span className="bg-[#4A3AFF] w-[14px] h-[14px] rounded-full"></span>
              <span>Paid</span>
            </div>
            <div className="w-auto h-auto flex justify-start items-center gap-4 ">
              <span className="bg-[#615E83] w-[14px] h-[14px] rounded-full"></span>
              <span>Pending</span>
            </div>
          </div>

          {/* name here div */}
          <div className="w-full h-auto flex-wrap flex justify-start items-center gap-5 text-[#615E83] font-semibold leading-4 text-sm">
            <div className="w-auto h-auto flex justify-start items-center gap-[14px]">
              <div className="w-auto h-auto flex justify-start items-center gap-2 text-base font-medium leading-4 text-[#1E1B39]">
                <span className="bg-[#4A3AFF] w-2 h-2 rounded-full"></span>
                <span>Name here</span>
              </div>
              <span className="font-normal">39.11%</span>
              <span className="text-[#04CE00] text-sm font-normal leading-4">
                {` (+2.98%)`}
              </span>
            </div>

            <div className="w-auto h-auto flex justify-start items-center gap-[14px]">
              <div className="w-auto h-auto flex justify-start items-center gap-2 text-base font-medium leading-4 text-[#1E1B39]">
                <span className="bg-[#E0C6FD] w-2 h-2 rounded-full"></span>
                <span>Name here</span>
              </div>
              <span className="font-normal">28.02%</span>
              <span className="text-[#FF718B] text-sm font-normal leading-4">
                {`(-3.25%)`}
              </span>
            </div>
          </div>

          {/* chart div */}
          <div className="w-full h-auto mt-auto flex justify-center items-center">
            <PieChart />
          </div>
        </div>
        {/* right div  */}
        <div className=" min-h-[473px] px-[2%] rounded-[10px] bg-white flex flex-col justify-start py-[2%] gap-6 items-start">
          {/* top div */}
          <div className="flex items-center justify-start w-full h-auto">
            <span className="text-[#000000] text-base font-bold leading-5">
              Orders
            </span>
          </div>

          {/* labels div */}
          <div className="w-full h-auto flex justify-start items-center gap-3 text-[#615E83] font-bold leading-7 text-sm">
            <div className="w-auto h-auto flex justify-start items-center gap-4 ">
              <span className="bg-[#4A3AFF] w-[14px] h-[14px] rounded-full"></span>
              <span>Approved</span>
            </div>
            <div className="w-auto h-auto flex justify-start items-center gap-4 ">
              <span className="bg-[#615E83] w-[14px] h-[14px] rounded-full"></span>
              <span>Pending</span>
            </div>
          </div>

          {/* chart div */}
          <div className="w-full h-auto mt-auto flex justify-center items-center">
            <DonutChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartComp;
