import React from 'react'

const ReissueCard = () => {
    return (
        <div className='bg-white h-full rounded-lg py-4 px-6' >
            <div className=''>
                <h1 className='font-semibold' >Reissue Card</h1>
                <p className='mt-2 text-sm'>Reissue your card if your is card is damage or  being stolen</p>

                <div className='flex flex-col gap-3 my-4' >
                    <div className='flex gap-2 sm:items-center sm:flex-row flex-col'>
                        <h1 className='text-sm font-semibold text-[#64748B] w-[45%]'>Reissue Card</h1>
                        <div className='flex gap-2 items-center'>
                            <input type="radio" className='w-4 h-4 rounded-full' name="" id="" />
                            <p className='sm:text-sm text-xs'>New Card Number with Updated Expiry Date</p>
                        </div>
                    </div>
                    <div className='flex gap-2 sm:items-center sm:flex-row flex-col'>
                        <h1 className='text-sm font-semibold text-[#64748B] w-[45%]'>Reissue Fee</h1>
                        <div className='flex gap-2 items-center'>
                            <p className='font-semibold'>$ 20.00</p>
                        </div>
                    </div>
                    <div className='flex gap-2 sm:items-center sm:flex-row flex-col'>
                        <h1 className='text-sm font-semibold text-[#64748B] w-[45%]'>Enter a new kit number</h1>
                        <div className="bg-[#F1F5F9] flex w-[200px] border-2 border-[#E2E8F0] items-center rounded-md gap-2 py-1 px-2" >
                            <input type="text" placeholder="Type Here" className=" h-9 outline-none bg-transparent" name="" id="" />
                        </div>
                    </div>
                    <button className="text-white mt-8 rounded-md bg-[#0D4C7B] font-semibold text-sm py-3 justify-center flex items-center gap-2 w-[145px] xl:px-0 px-4 ">
                        Reissue Card
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReissueCard
