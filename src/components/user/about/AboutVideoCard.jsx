import React from 'react'

function AboutVideoCard() {
    return (
        <div className='w-full rounded-xl relative overflow-clip mt-10'>
            <img src='/assets/about/about1.png' alt='placeholder' className='w-full h-[70vh] rounded-xl object-cover' />
            <div className='absolute bottom-0 left-0 w-full p-5 backdrop-blur-2xl bg-black bg-opacity-30 rounded-xl'>
                <p className='font-medium text-red-400'>Youtube</p>
                <p className='text-lg text-white font-medium'>KMA History Video</p>
            </div>
        </div>
    )
}

export default AboutVideoCard
