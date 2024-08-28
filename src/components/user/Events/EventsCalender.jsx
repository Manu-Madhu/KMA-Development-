import React from 'react'
import UnderlinedHeading from '../Common/UnderlinedHeading'
import EventCard from '../Common/EventCard'
import Calendar from './Calendar'

function EventsCalender() {
    return (
        <div className='my-10 md:mt-16 md:pb-14 max-w-screen-xl mx-auto p-3 w-full'>
            <UnderlinedHeading heading='Events' text=' Calender' />
            <div className='flex max-md:flex-col justify-between mt-10 md:mt-16'>
                <div className='w-[64%] max-md:w-full'>
                    <Calendar />
                </div>
                <div className='w-[34%] max-md:w-full mt-10 md:mt-20'>
                    <EventCard Name='Event Name' Title='Event Title' Description='Event Description' Location='Event Location' border={true} />
                </div>
            </div>
        </div>
    )
}

export default EventsCalender
