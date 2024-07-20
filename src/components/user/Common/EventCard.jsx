import React from 'react'
import eventpic from '../../../../public/assets/events/event1.png'
import Image from 'next/image'
function EventCard({ Name, Title, Description, Location, Picture, isArchived = false }) {
    return (
        <div className={`p-7 relative border overflow-clip flex flex-col w-[96%] h-80 max-md:h-64 border-gray-400 justify-between rounded-2xl`}>
            <h1 className='text-red-600 font-semibold max-md:text-sm'>{Name}</h1>
            <h1 className='text-[2.3rem] font-semibold max-md:text-[1.7rem]'>{Title}</h1>
            <p className='w-[45%] text-sm font-medium text-gray-600  my-auto'>
                {Description}
            </p>
            <div className={`px-4 py-1 ${isArchived ? "bg-[#E3000F] text-white" : "bg-[#E3000F33]"} w-fit max-md:text-sm font-medium rounded-full`}>
                <p>
                    {Location}
                </p>
            </div>
            <div className='size-72 blur-2xl absolute -bottom-10 -right-12 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  from-[#E3000F83] via-[#E3000F20] to-transparent'>
            </div>
            <Image className='h-[56%] w-fit bottom-0 right-0 absolute' src={eventpic} alt='Event Picture' />
            <div className={`absolute right-7 top-10 flex flex-col items-end ${isArchived ? "hidden" : ""}`}>
                <p className='text-[2.1rem] max-md:text-[1.9rem] text-[#E3000F] leading-8 font-semibold'>21</p>
                <p className='text-sm font-medium'>Aug 2024</p>
            </div>
        </div>
    )
}

export default EventCard
