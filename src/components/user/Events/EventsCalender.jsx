import React from 'react'
import UnderlinedHeading from '../Common/UnderlinedHeading'
import EventCard from '../Common/EventCard'
import Calendar from './Calendar'

function EventsCalender() {
    return (
        <div className='mt-16 pb-14'>
            <UnderlinedHeading heading='Events' text=' Calender' />
            <div className='flex justify-between mt-16'>
                <div className='w-[64%]'>
                    <Calendar />
                </div>
                <div className='w-[34%] mt-20'>
                    <EventCard Name='Event Name' Title='Event Title' Description='Event Description' Location='Event Location' />
                </div>
            </div>
        </div>
    )
}

export default EventsCalender
