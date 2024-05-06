"use client";

import DashboardWrapper from "@/components/Dashboard/Dashboard-Wrapper";
import InvoiceHistroy from "@/components/Dashboard/Invoice-History";
import React, { useState } from "react";

const InvoicePage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showDetailDialog, setShowDetailDialog] = useState(false);
  const [funding, setFunding] = useState("");
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [transaction, setTransaction] = useState("");
  const [transactionDate, setTransactionDate] = useState("");

  const handleIncrement = () => {
    let newValue = parseInt(funding, 10);
    if (isNaN(newValue)) {
      newValue = 0; // If funding is empty, set it to 0
    }
    newValue += 1;
    setFunding(newValue.toString());
  };

  const handleIncrement1 = () => {
    let newValue = parseInt(expense, 10);
    if (isNaN(newValue)) {
      newValue = 0; // If expense is empty, set it to 0
    }
    newValue += 1;
    setExpense(newValue.toString());
  };
  const handleIncrement2 = () => {
    let newValue = parseInt(amount, 10);
    if (isNaN(newValue)) {
      newValue = 0; // If amount is empty, set it to 0
    }
    newValue += 1;
    setAmount(newValue.toString());
  };

  const handleDecrement = () => {
    let newValue = parseInt(funding, 10);
    if (isNaN(newValue)) {
      newValue = 0; // If funding is empty, set it to 0
    }
    newValue -= 1;
    if (newValue >= 0) {
      setFunding(newValue.toString());
    }
  };

  const handleDecrement1 = () => {
    let newValue = parseInt(expense, 10);
    if (isNaN(newValue)) {
      newValue = 0; // If expense is empty, set it to 0
    }
    newValue -= 1;
    if (newValue >= 0) {
      setExpense(newValue.toString());
    }
  };
  const handleDecrement2 = () => {
    let newValue = parseInt(amount, 10);
    if (isNaN(newValue)) {
      newValue = 0; // If amount is empty, set it to 0
    }
    newValue -= 1;
    if (newValue >= 0) {
      setAmount(newValue.toString());
    }
  };

  return (
    <>
      {/* main container */}
      <DashboardWrapper
        title1={"Invoice Management"}
        title2={"Dashboard - Invoice Management"}
        top={true}
      >
        <>
          <div className="w-full h-auto p-[2%] space-y-5">
            {/* top div */}
            <div className="w-full h-auto flex flex-wrap justify-between items-center min-h-[85px] bg-white rounded-[10px] p-4 ">
              <div className="text-[#000000]  w-auto h-auto flex flex-col justify-start items-start">
                <h1 className="text-base font-bold leading-5">
                  Do you want to add More?
                </h1>
                <span className="text-sm font-normal left-4">
                  If you want to add more funds to the corporate wallet please
                  click on{" "}
                  <button className="font-semibold text-[#2563EB]">
                    Add more Funds
                  </button>{" "}
                  button.
                </span>
              </div>

              <button
                className="bg-[#0D4C7B] rounded py-4 px-6 flex flex-nowrap justify-center items-center gap-2 min-w-[202px] h-[56px] text-white font-bold text-base leading-5"
                onClick={() => setShowDialog(true)}
              >
                <svg
                  width="27"
                  height="28"
                  viewBox="0 0 27 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75 14H20.25"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5 20.75V7.25"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>Add more Funds </span>
              </button>
            </div>

            <InvoiceHistroy />
          </div>

          {/* dialog */}
          {showDialog && (
            <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-[#0000005E] flex justify-center items-center ">
              {/* container */}
              <div className="max-w-[30%] gap-8 w-auto min-h-[485px] h-auto bg-white rounded-[10px] flex flex-col justify-start items-start px-[1%] py-[2%]">
                <div className="w-full h-auto space-y-2">
                  <h1 className="text-[#000000] font-bold text-lg leading-5">
                    Add More Funds
                  </h1>
                  <span className="text-[#71717A] text-base font-normal leading-5">
                    We would like to add funds corporate wallet. please raise an
                    invoice for the amount.
                  </span>
                </div>

                {/* input div */}
                <div className="w-full h-auto flex flex-col justify-start items-start gap-3">
                  <label
                    htmlFor="funding"
                    className="text-[#27272A] text-sm font-semibold leading-4"
                  >
                    Funding Wallet
                  </label>

                  <div className="w-full h-[60px] bg-[#F8FAFC] border-[1.5px] border-[#E2E8F0] rounded-lg flex justify-center px-[2%] gap-2 items-center">
                    {/* minus */}
                    <button
                      className="w-12 h-12 bg-white rounded-lg flex justify-center items-center"
                      onClick={handleDecrement}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12H18"
                          stroke="#292D32"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      name="funding"
                      id="funding"
                      autoFocus
                      placeholder="Type here"
                      value={funding}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value)) {
                          setFunding(value);
                        }
                      }}
                      pattern="^\d*$"
                      className="bg-transparent outline-none focus:outline-none w-auto grow h-full flex justify-center items-center text-center placeholder:text-[#3F3F46] text-sm leading-4 font-normal"
                    />
                    {/* plus */}
                    <button
                      className="w-12 h-12 bg-white rounded-lg flex justify-center items-center"
                      onClick={handleIncrement}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12H18"
                          stroke="#292D32"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 18V6"
                          stroke="#292D32"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* input div */}
                <div className="w-full h-auto flex flex-col justify-start items-start gap-3">
                  <label
                    htmlFor="expense"
                    className="text-[#27272A] text-sm font-semibold leading-4"
                  >
                    Card Expense Wallet
                  </label>

                  <div className="w-full h-[60px] bg-[#F8FAFC] border-[1.5px] border-[#E2E8F0] rounded-lg flex justify-center px-[2%] gap-2 items-center">
                    {/* minus */}
                    <button
                      className="w-12 h-12 bg-white rounded-lg flex justify-center items-center"
                      onClick={handleDecrement1}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12H18"
                          stroke="#292D32"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      name="expense"
                      id="expense"
                      autoFocus
                      placeholder="Type here"
                      value={expense}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value)) {
                          setExpense(value);
                        }
                      }}
                      pattern="^\d*$"
                      className="bg-transparent outline-none focus:outline-none w-auto grow h-full flex justify-center items-center text-center placeholder:text-[#3F3F46] text-sm leading-4 font-normal"
                    />
                    {/* plus */}
                    <button
                      className="w-12 h-12 bg-white rounded-lg flex justify-center items-center"
                      onClick={handleIncrement1}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12H18"
                          stroke="#292D32"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 18V6"
                          stroke="#292D32"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="w-full h-auto flex justify-start items-center gap-1 text-[#71717A] text-sm leading-5 font-normal">
                    <span>GST</span>
                    <span className="font-bold text-black">$20.0</span>
                  </div>
                </div>

                {/* button div */}
                <div className="w-full h-auto flex justify-start items-center gap-4 text-sm font-bold leading-4">
                  <button
                    className="bg-[#CBD5E1] text-[#475569] h-11 min-w-[117px] w-auto py-3 px-8 rounded"
                    onClick={() => setShowDialog(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-[#0D4C7B] mt-auto text-[#FFFFFF] h-11 min-w-[117px] w-auto py-3 px-8 rounded"
                    onClick={() => {
                      setShowDialog(false), setShowDetailDialog(true);
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* dialog 2 */}
          {showDetailDialog && (
            <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-[#0000005E] flex justify-center items-center ">
              {/* container */}
              <div className="max-w-[30%] gap-8 min-w-[428px] w-auto min-h-[485px] h-auto bg-white rounded-[10px] flex flex-col justify-start items-start px-[1%] py-[2%]">
                <div className="w-full h-auto space-y-2 flex flex-col justify-start items-start">
                  <h1 className="text-[#000000] font-bold underline text-lg leading-5">
                    Details:
                  </h1>
                  <div className="w-auto h-auto flex flex-col justify-start items-start">
                    <span className="text-[#71717A] text-base font-normal leading-5">
                      Order Number:
                    </span>
                    <span className="text-[#71717A] text-base font-normal leading-5">
                      Invoice Number:
                    </span>
                    <span className="text-[#71717A] text-base font-normal leading-5">
                      Corporate Reference Number
                    </span>
                  </div>
                </div>

                <div className="w-full flex-col gap-[15px] h-auto flex justify-start items-start">
                  {/* input transaction div */}
                  <div className="w-full h-auto flex flex-col justify-start items-start gap-3">
                    <label
                      htmlFor="transaction"
                      className="text-[#27272A] text-sm font-semibold leading-4"
                    >
                      Transaction Reference Number
                    </label>

                    <div className="w-full h-[60px] bg-[#F8FAFC] border-[1.5px] border-[#E2E8F0] rounded-lg flex justify-center px-[3%] gap-2 items-start">
                      <input
                        type="text"
                        name="transaction"
                        id="transaction"
                        autoFocus
                        placeholder="BN-AS-2354867349"
                        value={transaction}
                        onChange={(e) => {
                          setTransaction(e.target.value);
                        }}
                        pattern="^\d*$"
                        className="bg-transparent outline-none focus:outline-none w-auto grow h-full flex justify-center items-start text-start placeholder:text-[#3F3F46] text-sm leading-4 font-normal"
                      />
                    </div>
                  </div>

                  {/* input Transaction Date div */}
                  <div className="w-full h-auto flex flex-col justify-start items-start gap-3">
                    <label
                      htmlFor="TransactionDate"
                      className="text-[#27272A] text-sm font-semibold leading-4"
                    >
                      Transaction Date
                    </label>

                    <div className="w-full h-[60px] bg-[#F8FAFC] border-[1.5px] border-[#E2E8F0] rounded-lg flex justify-center px-[3%] gap-2 items-start">
                      <input
                        type="text"
                        name="transactionDate"
                        id="transactionDate"
                        autoFocus
                        placeholder="23 Aug, 2023"
                        value={transactionDate}
                        onChange={(e) => {
                          setTransactionDate(e.target.value);
                        }}
                        pattern="^\d*$"
                        className="bg-transparent outline-none focus:outline-none w-auto grow h-full flex justify-center items-start text-start placeholder:text-[#3F3F46] text-sm leading-4 font-normal"
                      />
                    </div>
                  </div>

                  {/* input amount div */}
                  <div className="w-full h-auto flex flex-col justify-start items-start gap-3">
                    <label
                      htmlFor="amount"
                      className="text-[#27272A] text-sm font-semibold leading-4"
                    >
                      Amount
                    </label>

                    <div className="w-full h-[60px] bg-[#F8FAFC] border-[1.5px] border-[#E2E8F0] rounded-lg flex justify-center px-[2%] gap-2 items-center">
                      {/* minus */}
                      <button
                        className="w-12 h-12 bg-white rounded-lg flex justify-center items-center"
                        onClick={handleDecrement2}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 12H18"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        name="amount"
                        id="amount"
                        autoFocus
                        placeholder="$1,000,000"
                        value={amount}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d*$/.test(value)) {
                            setAmount(value);
                          }
                        }}
                        pattern="^\d*$"
                        className="bg-transparent outline-none focus:outline-none w-auto grow h-full flex justify-center items-center text-center placeholder:text-[#3F3F46] text-sm leading-4 font-normal"
                      />
                      {/* plus */}
                      <button
                        className="w-12 h-12 bg-white rounded-lg flex justify-center items-center"
                        onClick={handleIncrement2}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 12H18"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 18V6"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* button div */}
                <div className="w-full h-auto flex justify-start items-center gap-4 text-sm font-bold leading-4">
                  <button
                    className="bg-[#CBD5E1] text-[#475569] h-11 min-w-[117px] w-auto py-3 px-8 rounded"
                    onClick={() => setShowDetailDialog(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-[#0D4C7B] mt-auto text-[#FFFFFF] h-11 min-w-[117px] w-auto py-3 px-8 rounded"
                    onClick={() => setShowDetailDialog(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      </DashboardWrapper>
    </>
  );
};

export default InvoicePage;
