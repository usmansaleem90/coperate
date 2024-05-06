import React from 'react'

const Comments = () => {
  return (
    <div className='bg-white p-4 rounded-lg'>
      <h1 className='font-semibold'>Memo/Comments</h1>
      <div className='mt-6 md:w-[80%] flex flex-col'>
        <h1 className='text-sm'>Add Comments</h1>
        <textarea name="" id="" placeholder='Type here' cols="30" rows="8" className='bg-[#F8FAFC] rounded-lg mt-2 p-4 border border-[#E2E8F0]'></textarea>
        <button className='bg-[#0D4C7B] mt-4 text-white w-[150px] py-2.5 rounded-md' >Submit</button>
      </div>
    </div>
  )
}

export default Comments
