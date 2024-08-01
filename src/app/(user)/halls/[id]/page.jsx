import UnderlinedHeading from '@/components/user/Common/UnderlinedHeading'
import HallsCard from '@/components/user/halls/HallsCard'
import { halls } from '@/data/halls';
import React from 'react'

async function Page({ params }) {
    function findHall(_id) {
        return halls.find((item) => item?.id == _id);
    }
    return (
        <div className='max-w-screen-xl mx-auto flex flex-col items-center gap-16 mb-20'>
            <UnderlinedHeading heading={"Hall "} text='Inquiry' />
            <div className='flex flex-col items-center w-fit'>
                <HallsCard hall={findHall(params.id)} isInquiryHidden />
                <form className='w-full gap-4 mt-10 flex flex-col' action="">
                    <div className='w-full'>
                        <label className='mb-1' htmlFor="Name">Name</label>
                        <input
                            type="text"
                            className='outline outline-1 outline-gray-400 rounded-full w-full py-2 px-5'
                            placeholder='Enter Name'
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="Name">Email</label>
                        <input
                            type="email"
                            className='outline outline-1 outline-gray-400 rounded-full w-full py-2 px-5'
                            placeholder='Enter Email'
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="Name">Phone Number</label>
                        <input
                            type="tel"
                            className='outline outline-1 outline-gray-400 rounded-full w-full py-2 px-5'
                            placeholder='Enter Phone Number'
                        />
                    </div>
                    <button className='border border-gray-400 w-fit px-5 text-primaryColor rounded-full py-2 mt-5'>
                        Inquire Now
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Page
