import React from 'react'
import eventpic from '../../../../public/assets/events/event1.png'
import Image from 'next/image'
function EventsCardAdmin({ data, isArchived = false }) {
    const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = data?.date
    const day = date?.split('/')[0]
    const month = date?.split('/')[1] && shortMonths[Number(date?.split('/')[1]) - 1];
    const year = date?.split('/')[2]

    return (
        <div className={`p-7 relative border overflow-clip flex flex-col w-full sm:w-[350px] h-80 max-md:h-64 border-gray-400 justify-between rounded-2xl`}>
            <h1 className='text-red-600 font-semibold max-md:text-sm'>{data?.speakerName}</h1>
            <h1 className='text-xl font-semibold max-md:text-[1.7rem]'>{data?.title}</h1>
            <p className='w-[45%] text-sm font-medium text-gray-600  my-auto'>
                {data?.description}
            </p>
            <div className={`px-4 py-2 ${isArchived ? "bg-[#E3000F] text-white" : "bg-[#E3000F33]"} w-fit max-md:text-sm font-medium rounded-full`}>
                <p className='text-sm'>
                    {data?.location}
                </p>
            </div>
            <div className='size-72 blur-2xl absolute -bottom-10 -right-12 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  from-[#E3000F83] via-[#E3000F20] to-transparent'>
            </div>
            <Image 
            src={data?.speakerCoverUrl} 
            alt='Event Picture'
            className='h-40 w-40 object-cover bottom-0 right-0 absolute' 
            width={50} height={50}
             />


            <div className={`absolute right-7 top-10 flex flex-col items-end ${isArchived ? "hidden" : ""}`}>
                <p className='text-[2.1rem] max-md:text-[1.9rem] text-[#E3000F] leading-8 font-semibold'>{day}</p>
                <p className='text-sm font-medium'>{`${month} ${year}`}</p>
            </div>
        </div>
    )
}

export default EventsCardAdmin
