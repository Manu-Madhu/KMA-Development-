'use client'
import React, { useEffect, useState } from 'react'
import EventTypeSelect from './EventsFilter'
import EventsCardAdmin from './EventsCardAdmin'
import useAxiosPrivate from '@/hooks/useAxiosPrivate'
import { eventRoute } from '@/utils/Endpoint'

function EventsGridPart() {
    const [data, setData] = useState([])

    const axiosPrivate = useAxiosPrivate()

    const getEvents = async () => {
      try {
        const response = await axiosPrivate.get(eventRoute);
        console.log({ response })
        if (response.status === 200) {
          setData(response?.data?.events)
        }
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {
      getEvents()
    }, [])
    
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
            <div className='w-full flex flex-col sm:flex-row gap-4' >
                {
                    data?.map((item,index)=>(
                        <EventsCardAdmin data={item} />

                    ))
                }
            </div>
        </div>
    )
}

export default EventsGridPart
