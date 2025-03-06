import React from 'react'


export default function thankyou() {
  return (
    <div className="bg-white flex justify-center h-[250px] mt-18 opacity-80 pt-8 pb-8 pr-4 pl-6 rounded-4xl shadow-lg w-72 text-center">
      <div className='flex flex-col justify-center items-center'>
      <h2 className="custom-heading text-2xl text-[#461072] font-bold uppercase pt-4">
          Thank you
        </h2>
        <hr className="w-32 text-[#461072] mt-2" />
        <p className="mt-2 uppercase font-bold text-md ">
        your entry has been successfully submitted.
      </p>
      </div>
    </div>
  )
}
