import React from 'react'
import vector from '../../../../public/assets/kma csr awards/vector.png'
import Image from 'next/image'
import EventCard from '../Common/EventCard'
import HomeCarousal from './HomeEventCarousel/HomeCarousal'
function HomeEvents() {
    return (
        <div className='w-11/12 py-20 mx-auto relative'>
            <div className='mx-auto w-fit mb-8'>
                <h1 className='text-[2.8rem] font-bold ml-3'>
                    Events
                </h1>
                <Image src={vector} alt='Vector' className='-mt-2' />
            </div>
            <div className='pb-10 relative'>
                <HomeCarousal />
            </div>
        </div>
    )
}

export default HomeEvents
