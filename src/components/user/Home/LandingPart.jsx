import Image from 'next/image'
import React from 'react'
import FutureCircle from '../../../../public/assets/home/line.png'
import RightHand from '../../../../public/assets/home/hand_r.png'
import LeftHand from '../../../../public/assets/home/hand_l.png'

function LandingPart() {
    return (
        <div className='h-screen relative w-full flex flex-col items-center text-black bg-white'>
            <div className='absolute flex flex-col items-center top-1/4'>
                <h1 className='text-black text-[4.5rem] leading-[50px] font-bold z-10'>Shaping a sustainable</h1>
                <div className='relative'>
                    <h1 className='text-black w-fit h-fit leading-3 text-[4.5rem] absolute inset-0 m-auto font-bold'>future</h1>
                    <Image
                        src={FutureCircle}
                        className='h-[6.5rem] w-[21rem] mx-auto'
                        alt='Future Circle'
                    />
                </div>
                <p className='text-xl mt-4'>Honouring Excellence in CSR and ESG Leadership</p>
            </div>
            <Image src={RightHand} className='absolute right-0 top-1/4' alt='Right Hand' />
            <Image src={LeftHand} className='absolute left-0' alt='Left Hand' />
        </div>
    )
}

export default LandingPart
