import React from "react";

const Topbar = () => {
  return (
    <>
      {/* main container */}
      <div className="w-full p-[2%] h-auto flex justify-start items-start bg-white flex-col gap-2 rounded-[10px]">
        <h1 className="text-[#000000] text-base font-bold leading-5">
          Settings
        </h1>
        <p className="text-[#52525B] font-normal text-sm leading-4">
          <b>Usman Zafar,</b> usmanzafar089@gmail.com
        </p>
      </div>
    </>
  );
};

export default Topbar;
