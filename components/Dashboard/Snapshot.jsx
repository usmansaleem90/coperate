import React from "react";

const Snapshot = () => {
  return (
    <>
      {/* main container */}
      <div className="w-full h-auto min-h-[491px] bg-white rounded-[10px] py-[2%] space-y-6">
        {/* top div */}
        <div className="px-[2%] w-full min-h-11 h-auto flex justify-between items-center">
          <div className="w-auto h-auto flex justify-start items-start flex-col gap-2">
            <h1 className="text-[#000000] text-base font-bold leading-5">
              Snapshot Orders
            </h1>
            <p className="text-[#52525B] font-normal text-sm leading-4">
              you have 234 orders
            </p>
          </div>

          {/* buttons */}
          <div className="w-auto h-auto flex justify-start items-center gap-[15px]">
            <button className="bg-[#F1F5F9] text-[#1F2C38] font-medium text-sm leading-4 py-2 px-3 rounded smLmin-w-[98px] w-auto min-h-8 h-auto flex justify-center items-center gap-[5px]">
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

              <span className="sm:block hidden">November </span>
            </button>

            <button className="bg-[#F1F5F9] text-[#1F2C38] font-medium text-sm leading-4 py-3 px-3 rounded min-w-[98px] w-auto min-h-8 h-auto flex justify-center items-center gap-[5px]">
              <span>Status </span>
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
        </div>

        {/* table div */}
        <div className="w-full h-auto overflow-x-auto ">
          <table className="w-full border-collapse min-w-max">
            <thead className="text-[#3F3F46] text-sm leading-4 font-bold bg-[#F9F9F9] ">
              <tr className="h-[58px]">
                <td className="min-w-[50px] pl-4 pr-0 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                  Order ID
                </td>
                <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Name
                </td>
                <td className="px-0 py-2 text-left min-w-[130px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Date
                </td>
                <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Date
                </td>
                <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Total
                </td>
                <td className="px-0 py-2 text-left min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                  Status
                </td>
                <td className="w-auto px-0 py-2 overflow-hidden text-left whitespace-nowrap text-overflow-ellipsis">
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((_, idx) => (
                <tr
                  key={idx}
                  className="border-b text-[#000000] text-sm font-normal leading-4"
                >
                  <td className="min-w-[50px] pl-4 pr-0 py-4 overflow-hidden whitespace-nowrap text-overflow-ellipsis">
                    #12414
                  </td>
                  <td className="px-0 py-4 min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    Name here
                  </td>
                  <td className="px-0 py-4 min-w-[130px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    Nov 23, 2023
                  </td>
                  <td className="px-0 py-4 min-w-[130px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    Nov 23, 2023
                  </td>
                  <td className="px-0 font-bold py-4 min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    $ 23.55
                  </td>
                  <td className="px-0 py-4 min-w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    <buton className="bg-[#FFEDD5] font-bold text-[13px] text-[#EA580C] py-2 px-[14px] rounded-3xl text-center">
                      Pending
                    </buton>
                  </td>
                  <td className="w-auto px-0 py-4 overflow-hidden whitespace-nowrap text-overflow-ellipsis">
                    <div className="w-auto h-auto flex justify-start items-center gap-[10px]">
                      <button>
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="34" height="34" rx="10" fill="#DCFCE7" />
                          <path
                            opacity="0.4"
                            d="M23.75 24.5H10.25C9.9425 24.5 9.6875 24.245 9.6875 23.9375C9.6875 23.63 9.9425 23.375 10.25 23.375H23.75C24.0575 23.375 24.3125 23.63 24.3125 23.9375C24.3125 24.245 24.0575 24.5 23.75 24.5Z"
                            fill="#047857"
                          />
                          <path
                            opacity="0.4"
                            d="M22.2649 10.61C20.8099 9.155 19.3849 9.1175 17.8924 10.61L16.9849 11.5175C16.9099 11.5925 16.8799 11.7125 16.9099 11.8175C17.4799 13.805 19.0699 15.395 21.0574 15.965C21.0874 15.9725 21.1174 15.98 21.1474 15.98C21.2299 15.98 21.3049 15.95 21.3649 15.89L22.2649 14.9825C23.0074 14.2475 23.3674 13.535 23.3674 12.815C23.3749 12.0725 23.0149 11.3525 22.2649 10.61Z"
                            fill="#047857"
                          />
                          <path
                            d="M19.7082 16.6476C19.4907 16.5426 19.2807 16.4376 19.0782 16.3176C18.9132 16.2201 18.7557 16.1151 18.5982 16.0026C18.4707 15.9201 18.3207 15.8001 18.1782 15.6801C18.1632 15.6726 18.1107 15.6276 18.0507 15.5676C17.8032 15.3576 17.5257 15.0876 17.2782 14.7876C17.2557 14.7726 17.2182 14.7201 17.1657 14.6526C17.0907 14.5626 16.9632 14.4126 16.8507 14.2401C16.7607 14.1276 16.6557 13.9626 16.5582 13.7976C16.4382 13.5951 16.3332 13.3926 16.2282 13.1826C16.1232 12.9576 16.0407 12.7401 15.9657 12.5376L11.2557 17.2476C11.1582 17.3451 11.0682 17.5326 11.0457 17.6601L10.6407 20.5326C10.5657 21.0426 10.7082 21.5226 11.0232 21.8451C11.2932 22.1076 11.6682 22.2501 12.0732 22.2501C12.1632 22.2501 12.2532 22.2426 12.3432 22.2276L15.2232 21.8226C15.3582 21.8001 15.5457 21.7101 15.6357 21.6126L20.3457 16.9026C20.1357 16.8276 19.9332 16.7451 19.7082 16.6476Z"
                            fill="#047857"
                          />
                        </svg>
                      </button>
                      <button>
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="34" height="34" rx="10" fill="#FEE2E2" />
                          <path
                            d="M23.8032 11.9225C22.5957 11.8025 21.3882 11.7125 20.1732 11.645V11.6375L20.0082 10.6625C19.8957 9.9725 19.7307 8.9375 17.9757 8.9375H16.0107C14.2632 8.9375 14.0982 9.9275 13.9782 10.655L13.8207 11.615C13.1232 11.66 12.4257 11.705 11.7282 11.7725L10.1982 11.9225C9.88323 11.9525 9.65823 12.23 9.68823 12.5375C9.71823 12.845 9.98823 13.07 10.3032 13.04L11.8332 12.89C15.7632 12.5 19.7232 12.65 23.6982 13.0475C23.7207 13.0475 23.7357 13.0475 23.7582 13.0475C24.0432 13.0475 24.2907 12.83 24.3207 12.5375C24.3432 12.23 24.1182 11.9525 23.8032 11.9225Z"
                            fill="#B91C1C"
                          />
                          <path
                            opacity="0.3991"
                            d="M22.4218 14.105C22.2418 13.9175 21.9943 13.8125 21.7393 13.8125H12.2593C12.0043 13.8125 11.7493 13.9175 11.5768 14.105C11.4043 14.2925 11.3068 14.5475 11.3218 14.81L11.7868 22.505C11.8693 23.645 11.9743 25.07 14.5918 25.07H19.4068C22.0243 25.07 22.1293 23.6525 22.2118 22.505L22.6768 14.8175C22.6918 14.5475 22.5943 14.2925 22.4218 14.105Z"
                            fill="#B91C1C"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.1855 20.75C15.1855 20.4393 15.4374 20.1875 15.748 20.1875H18.2455C18.5562 20.1875 18.808 20.4393 18.808 20.75C18.808 21.0607 18.5562 21.3125 18.2455 21.3125H15.748C15.4374 21.3125 15.1855 21.0607 15.1855 20.75Z"
                            fill="#B91C1C"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.5625 17.75C14.5625 17.4393 14.8143 17.1875 15.125 17.1875H18.875C19.1857 17.1875 19.4375 17.4393 19.4375 17.75C19.4375 18.0607 19.1857 18.3125 18.875 18.3125H15.125C14.8143 18.3125 14.5625 18.0607 14.5625 17.75Z"
                            fill="#B91C1C"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* bottom div */}
        <div className="w-full h-auto flex flex-col justify-center items-center text-[#0D4C7B] leading-4 text-sm font-normal">
          <span className="font-bold">View More</span>
          <span>234 Snapshot Orders</span>
        </div>
      </div>
    </>
  );
};

export default Snapshot;
