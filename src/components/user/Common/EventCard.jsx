import React from 'react'
import eventpic from '../../../../public/assets/events/event1.png'
import Image from 'next/image'
function EventCard() {
    return (
        <div className='p-7 relative border overflow-clip flex flex-col w-[96%] h-80 border-gray-400 justify-between rounded-2xl'>
            <h1 className='text-red-600 font-semibold'>Dr. John George Chiramal</h1>
            <h1 className='text-[2.3rem] font-semibold'>Book Review</h1>
            <p className='w-[43%] text-sm font-medium text-gray-600  my-auto'>
                The soft science of
                business transformation
            </p>
            <div className='px-4 py-1 bg-[#E3000F33] w-fit font-semibold rounded-full'>
                <p>Management House</p>
            </div>
            <div className='size-72 blur-2xl absolute -bottom-10 -right-12 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  from-[#E3000F83] via-[#E3000F20] to-transparent'>
            </div>
            <Image className='h-[56%] w-fit bottom-0 right-0 absolute' src={eventpic} alt='Event Picture' />
        </div>
    )
}

export default EventCard
