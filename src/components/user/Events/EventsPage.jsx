import React from 'react'
import UnderlinedHeading from '../Common/UnderlinedHeading'
import banner from '../../../../public/assets/events/events_banner.jpg'
import Image from 'next/image'
import UpcomingEvents from './UpcomingEvents'
import ArchivedEvents from './ArchivedEvents'
import EventsCalender from './EventsCalender'
import ConductEvent from '../ConductEvent'
function EventsPage() {
    return (
        <div className='pt-10 max-md:pt-5 '>
            <UnderlinedHeading text='Events' />
            <div className=' max-w-screen-xl mx-auto my-7 md:my-16 h-[80vh] object-cover max-md:h-[30%] md:rounded-2xl overflow-clip relative flex justify-center items-center'>
                <Image src={banner} className='size-full object-cover' alt='events banner' />
                <div className='absolute bg-black bg-opacity-40 w-full h-full'></div>
                <h1 className='text-[3.5rem] max-md:text-3xl absolute font-bold text-white flex justify-center items-center'>
                    Our Flagship Event
                </h1>
                <p className='absolute text-white bottom-[10%] md:text-lg'>
                    Stay Tuned
                </p>
            </div>
            <UpcomingEvents />
            <ArchivedEvents />
            <EventsCalender />
            <ConductEvent />
        </div>
    )
}


export default EventsPage
