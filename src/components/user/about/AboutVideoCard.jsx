import React from 'react'
import { FaPlay } from 'react-icons/fa6'

function AboutVideoCard() {
    return (
        <div className='max-w-screen-xl relative p-3 mx-auto'>
            <div className='w-full  rounded-xl relative overflow-clip mt-10'>
                <img src='/assets/about/about1.png' alt='placeholder' className='w-full h-[70vh] max-sm:h-56 max-md:h-72 rounded-xl object-cover' />
                <div className='absolute bottom-0 left-0 w-full p-5 max-md:p-4 max-sm:p-3 backdrop-blur-2xl bg-black bg-opacity-30 rounded-xl'>
                    <p className='font-medium max-sm:text-sm text-red-400'>Youtube</p>
                    <p className='text-lg max-sm:text-base text-white font-medium'>KMA History Video</p>
                </div>
                <div className='absolute p-4 m-auto text-white inset-0 top-[-10%] size-fit rounded-full bg-[#2A282FCC] backdrop-blur-lg'>
                    <FaPlay />
                </div>
            </div>
        </div>
    )
}

export default AboutVideoCard
