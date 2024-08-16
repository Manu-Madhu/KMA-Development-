import React from 'react'
import Image from 'next/image'

const BottomImage = () => {
  return (
      <div className="relative mt-20 mb-10">
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black z-10">
        <h1 className="text-[2.8rem] max-md:text-4xl font-bold leading-[3.2rem] text-center">
          {`Interested in Becoming a Member?`}
        </h1>
        <span className='mb-4'>Click the register button below to see the procedures</span>
        <button className='p-2 w-40 font-bold bg-white border border-opacity-25 text-sm border-gray-500 text-primaryColor rounded-full'>Register Now</button>
      </div>

      {/* Image */}
      <Image 
        src='/bottomimage.png' 
        width={1500} 
        height={300} 
        className='object-cover'
        alt='Banner Image'
      />
    </div>
  )
}

export default BottomImage
