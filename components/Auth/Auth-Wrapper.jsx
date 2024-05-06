// * imports
import Image from "next/image";

// * local imports
import card1 from "@/public/images/card1.svg";
import card2 from "@/public/images/card2.svg";
import Rectangle1 from "@/public/images/rectangle1.svg";

const AuthWrapper = ({ children }) => {
  return (
    <>
      {/* ,main container */}
      {/* <div className="w-full h-auto min-h-dvh max-h-screen bg-fBgGrey py-[2%]"> */}
      <div className="w-full h-auto hauto min-h-dvh bg-fBgGrey py-[2%] flex justify-center items-center">
        {/* inner body  */}
        <div className="flex flex-col lg:justify-center justify-start w-[90%] h-full  mx-auto bg-white rounded-xl lg:flex-row">
          {/* left container */}
          <div className="w-full h-auto lg:w-1/2">{children}</div>

          {/* right container */}
          <div className="relative max-lg:hidden flex flex-col items-start justify-center w-full h-auto gap-8 lg:w-1/2 bg-fBlue rounded-xl pt-[5%] pb-[10%]">
            {/* background pattern starts here */}
            {/* pattern 1 */}

            <svg
              width="full"
              height="full"
              viewBox="0 0 663 808"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0"
            >
              <path
                opacity="0.1"
                d="M752.125 -25.6165C752.125 -25.6165 520.901 62.7174 433.307 182.992C320.923 337.307 477.232 517.907 356.457 665.748C243.55 803.957 -65.126 842.117 -65.126 842.117"
                stroke="white"
                stroke-width="10"
              />
            </svg>
            {/* pattern 2 */}
            <svg
              width="full"
              height="full"
              viewBox="0 0 663 682"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0"
            >
              <path
                opacity="0.1"
                d="M858.228 5.41113C858.228 5.41113 613.271 40.9594 501.463 139.13C358.009 265.085 470.97 475.534 320.748 593.334C180.313 703.46 -129.227 673.09 -129.227 673.09"
                stroke="white"
                stroke-width="10"
              />
            </svg>

            <h1 className="h-auto text-3xl font-bold leading-10 text-white max-w-[60%] px-[5%]">
              Some catchy line goes here
            </h1>

            <div className="relative w-[90%] h-[460px] mx-auto">
              <Image
                src={Rectangle1}
                alt="rectangle1"
                width={500}
                height={500}
                className="object-contain w-full h-full"
              />

              <Image
                src={card1}
                alt="card"
                width={500}
                height={500}
                className="object-contain max-w-[263px] h-auto absolute -bottom-[20%] -left-[10%]"
              />
              <Image
                src={card2}
                alt="card"
                width={500}
                height={500}
                className="object-contain max-w-[263px] h-auto absolute top-[25%] -right-[16%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthWrapper;
