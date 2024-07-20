import React from 'react'
import UnderlinedHeading from '../Common/UnderlinedHeading'
import banner from '../../../../public/assets/events/events_banner.jpg'
import Image from 'next/image'
import { events } from '@/data/events'
import EventCard from '../Common/EventCard'
import UpcomingEvents from './UpcomingEvents'
import ArchivedEvents from './ArchivedEvents'
import EventsCalender from './EventsCalender'
import ConductEvent from './ConductEvent'
function EventsPage() {
    return (
        <div className='pt-40 w-11/12 mx-auto'>
            <UnderlinedHeading text='Events' />
            <div className='my-16 h-[80vh] rounded-2xl overflow-clip relative flex justify-center items-center'>
                <Image src={banner} alt='events banner' layout='fill' objectFit='cover' />
                <div className='absolute bg-black bg-opacity-40 w-full h-full'></div>
                <h1 className='text-[3.5rem] absolute font-bold text-white flex justify-center items-center'>
                    Our Flagship Event
                </h1>
                <p className='absolute text-white bottom-[10%] text-lg'>
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
