import React from "react";

const FormInputWrapper = ({ children }) => {
  return (
    <div
      className={`w-full h-auto flex flex-col justify-start items-start gap-3`}
    >
      {children}
    </div>
  );
};

export default FormInputWrapper;
