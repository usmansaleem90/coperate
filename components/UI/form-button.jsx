import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <>
      {/* main container */}
      <button onClick={onClick} className="w-full h-auto px-8 py-3 text-base font-bold leading-5 text-center text-white rounded min-h-12 bg-fBlue">
        {children}
      </button>
    </>
  );
};

export default Button;