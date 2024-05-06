import React from "react";

const FundingWallet = () => {
  return (
    <>
      {/* main container */}
      <div className="w-full h-auto min-h-[491px] bg-white rounded-[10px] pt-[2%] pb-[4%] space-y-6">
        {/* top div */}
        <div className="px-[2%] w-full min-h-11 h-auto flex flex-wrap justify-between items-center rounded-[10px]">
          <div className="w-auto h-auto flex justify-start items-start flex-col gap-2">
            <h1 className="text-[#000000] text-base font-bold leading-5">
              FundingWallet Orders
            </h1>
            <p className="text-[#52525B] font-normal text-sm leading-4">
              <b>Funding Wallet</b> has 345 transactions
            </p>
          </div>

          {/* buttons div*/}
          <div className="w-auto h-auto flex justify-start items-center gap-[15px]">
            {/* search bar */}
            <div className="max-w-[257px] h-[45px] rounded gap-2 bg-[#F1F5F9] flex justify-start items-center pl-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
                  stroke="black"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 16.5L15 15"
                  stroke="black"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input
                type="text"
                autoFocus
                className="bg-transparent placeholder:text-[#64748B] text-xs leading-4 font-normal outline-none focus:outline-none w-auto h-full"
                placeholder="Search Something..."
              />
            </div>

            {/* filter */}
            <button className="bg-[#F1F5F9] text-[#1F2C38] font-medium text-sm leading-4 py-2 px-3 rounded min-w-[98px] w-auto min-h-8 h-auto flex justify-center items-center gap-[5px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V5"
                  stroke="#1E293B"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 2V5"
                  stroke="#1E293B"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 9.08997H20.5"
                  stroke="#1E293B"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                  stroke="#1E293B"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6937 13.7002H15.7027"
                  stroke="#1E293B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6937 16.7002H15.7027"
                  stroke="#1E293B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9945 13.7002H12.0035"
                  stroke="#1E293B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9945 16.7002H12.0035"
                  stroke="#1E293B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29529 13.7002H8.30427"
                  stroke="#1E293B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29529 16.7002H8.30427"
                  stroke="#1E293B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>Filter</span>
            </button>

            {/* Download CSV */}
            <button className="bg-[#F1F5F9] text-[#1F2C38] font-medium text-sm leading-4 py-2 px-3 rounded min-w-[98px] w-auto min-h-8 h-auto flex justify-center items-center gap-[5px]">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.32031 12.1801L11.8803 14.7401L14.4403 12.1801"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.8789 4.5V14.67"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 12.6801C20 17.1001 17 20.6801 12 20.6801C7 20.6801 4 17.1001 4 12.6801"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>Download CSV</span>
            </button>

            {/* Download PDF */}
            <button className="bg-[#F1F5F9] text-[#1F2C38] font-medium text-sm leading-4 py-2 px-3 rounded min-w-[98px] w-auto min-h-8 h-auto flex justify-center items-center gap-[5px]">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.32031 12.1801L11.8803 14.7401L14.4403 12.1801"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.8789 4.5V14.67"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 12.6801C20 17.1001 17 20.6801 12 20.6801C7 20.6801 4 17.1001 4 12.6801"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* table div */}
        <div className="w-full h-auto overflow-x-auto ">
          <table className="w-full border-collapse min-w-max">
            <thead className="text-[#3F3F46] text-sm leading-4 font-bold bg-[#F9F9F9] ">
              <tr className="h-[58px]">
                <td className="min-w-[60px] pl-4 pr-0 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                  Sr.No
                </td>
                <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Trans Date
                </td>
                <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Trans Time
                </td>
                <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Trans Ref ID
                </td>
                <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Description
                </td>
                <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Description
                </td>
                <td className="w-auto px-0 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                  {`   Debit (-)`}
                </td>
                <td className="w-auto px-0 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                  {`Credit (+)`}
                </td>
                <td className="w-auto px-0 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                  {`Fee`}
                </td>
                <td className="w-auto px-0 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                  {`Running Balance`}
                </td>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, idx) => (
                <tr
                  key={idx}
                  className="border-b text-[#000000] text-sm font-normal leading-4"
                >
                  <td className="min-w-[60px] pl-4 pr-0 py-4 overflow-hidden whitespace-nowrap text-overflow-ellipsis">
                    #{idx + 1}
                  </td>
                  <td className="min-w-[100px] pl-4 pr-0 py-4 overflow-hidden whitespace-nowrap text-overflow-ellipsis">
                    Aug 23, 2023
                  </td>
                  <td className="px-0 py-4 min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    11:45 PM
                  </td>
                  <td className="px-0 py-4 min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    45678578
                  </td>
                  <td className="px-0 py-4 min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    Share Funds testing
                  </td>
                  <td className="px-0 py-4 min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    24567
                  </td>
                  <td className="px-0 py-4 min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    $ 456.99
                  </td>
                  <td className="px-0 py-4 min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    $ 456.99
                  </td>
                  <td className="px-0 py-4 min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    $ 456.99
                  </td>
                  <td className="px-0 py-4 min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    $ 456.99
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FundingWallet;
