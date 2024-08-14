import React from 'react'
import flag from '../../../../public/assets/mission/flag.png'
import eye from '../../../../public/assets/mission/eye.png'
import diamond from '../../../../public/assets/mission/diamond.png'
import Image from 'next/image'

const Mission = () => {
  return (
    <div className='pb-10 max-w-screen-xl mx-auto p-3 w-full flex flex-col sm:flex-row items-start 
    justify-center mt-20 max-md:gap-8'>
        
        <div className='w-full sm:w-[20vw] flex flex-col items-center gap-2 '>
          <Image
          src={flag}
          alt=''
          className='w-32 h-32'
          />

          <p className='text-black text-lg font-bold'>OUR <span className='text-[#FF0042]'>MISSION</span> </p>

          <p className='text-center text-sm'>Corporate Social Responsibility (CSR) and Environment, Social, & Governance (ESG) 
            have become pivotal</p>

        </div>

        <div class="hidden sm:flex border-l-2 border-gray-300 h-32 mx-4"></div>

        <div className='w-full sm:w-[20vw] flex flex-col items-center gap-2 '>
          <Image
          src={eye}
          alt=''
          className='w-32 h-32'
          />

          <p className='text-black text-lg font-bold'>OUR <span className='text-[#FF0042]'>VISION</span> </p>

          <p className='text-center text-sm'>Corporate Social Responsibility (CSR) and Environment, Social, & Governance (ESG) 
            have become pivotal</p>

        </div>

        <div class="hidden sm:flex border-l-2 border-gray-300 h-32 mx-4"></div>


        <div className='w-full sm:w-[20vw] flex flex-col items-center gap-2 '>
          <Image
          src={diamond}
          alt=''
          className='w-32 h-32'
          />

          <p className='text-black text-lg font-bold'>OUR <span className='text-[#FF0042]'>VALUES</span> </p>

          <p className='text-center text-sm'>Corporate Social Responsibility (CSR) and Environment, Social, & Governance (ESG) 
            have become pivotal</p>

        </div>


    </div>
  )
}

export default Mission