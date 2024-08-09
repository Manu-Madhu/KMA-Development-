import React from 'react'
import EventTypeSelect from './EventsFilter'
import EventsCardAdmin from './EventsCardAdmin'

function EventsGridPart() {
    return (
        <div>
            <div className='flex items-center w-fulll justify-between'>
                <div className='flex items-center'>
                    <EventTypeSelect />
                    <p className='text-black ml-5'>Sort by <span className='text-primaryColor ml-2'>Date of event</span></p>
                </div>
                <div className='flex items-center'>
                    <button className='shadow-md border border-gray-300 rounded-lg p-1.5 px-3 ml-5'>Set as archived</button>
                    <button className='shadow-md border border-gray-300 rounded-lg p-1.5 px-3 ml-5'>delete selected</button>
                </div>
            </div>
            <div className='w-full grid grid-cols-3'>
                <EventsCardAdmin Name={'jon doe'} />
            </div>
        </div>
    )
}

export default EventsGridPart
