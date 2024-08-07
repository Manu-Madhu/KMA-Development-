import React from 'react'
import image1 from '@/../public/assets/about/history_img_1.png'
import image2 from '@/../public/assets/about/history_img_2.png'
import image3 from '@/../public/assets/about/history_img_3.png'
import Image from 'next/image'
function HistoryBanner() {
    return (
        <div className='w-screen relative flex max-lg:flex-col justify-around items-center bg-black h-screen mt-16'>
            <div className='blur-[3px] w-fit flex flex-col items-center'>
                <div className='size-[75%]'>
                    <Image className='rounded-full aspect-square object-cover size-full' src={image1} alt='history' />
                </div>
                <p className='text-white text-center text-sm'>Mr Robert Dunning, Mr Alan Reader and <br /> Mr N V Rangaswamy Feb 1978</p>
            </div>
            <div className='blur-[6px]'>
                <Image className='rounded-full aspect-square object-cover size-[25%]' src={image2} alt='history' />
            </div>
            <div className='blur-[3px]'>
                <Image className='rounded-full aspect-square object-cover size-[50%]' src={image3} alt='history' />
            </div>
            <div className='w-20'>
            </div>
            <div className='absolute right-24 w-fit flex flex-col items-center scale-125 max-md:scale-95 max-md:bottom-5 max-md:right-5'>
                <Image className='rounded-full aspect-square object-cover' src={image2} alt='history' />
                <p className='text-white text-center text-sm'>Mr Robert Dunning, Mr Alan Reader and <br /> Mr N V Rangaswamy Feb 1978</p>
            </div>
            <div className='absolute  size-full bg-black/40'>

            </div>
            <h1 className='absolute text-white text-[20rem] font-light max-md:font-normal tracking-[4rem] max-md:tracking-[2rem] max-xl:text-[15rem] max-md:text-[8rem] max-sm:text-[5rem]'>1978</h1>
        </div>
    )
}

export default HistoryBanner
