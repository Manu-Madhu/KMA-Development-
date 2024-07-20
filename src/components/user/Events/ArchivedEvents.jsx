import React from 'react'
import UnderlinedHeading from '../Common/UnderlinedHeading'
import EventCard from '../Common/EventCard'
import { events } from '@/data/events'

function ArchivedEvents() {
    return (
        <div className='mt-16 max-w-screen-xl mx-auto p-3 w-full'>
            <UnderlinedHeading heading='Archived' text=' Events' />
            <p className='my-10 md:my-14'>
                The Management of the Association is vested in a Managing Committee of not more than sixteen elected members of which at least three persons should be from Corporate Sector. The Managing Committee shall be elected at the Annual General Meeting of the Association every year. There shall be a President, two Vice Presidents, an Honorary Secretary, a Joint Secretary and a Treasurer all of whom shall be elected by the Managing Committee and will hold office for the duration of the Management Committee for which they were elected. In addition to the elected members there are Co-opted Members and Special Invitees.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8'>
                {events.map((event, index) => (
                    <EventCard
                        key={index}
                        Name={event.name}
                        Title={event.title}
                        Description={event.description}
                        Location={event.location}
                        isArchived
                    />
                ))}
            </div>
        </div>
    )
}

export default ArchivedEvents
