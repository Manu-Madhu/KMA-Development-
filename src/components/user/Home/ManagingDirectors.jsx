import Image from 'next/image'
import vector from '../../../../public/assets/kma csr awards/Vector.png';
import Person from '../../../../public/assets/events/event1.png'

import ProfileCard from './ProfileCard'
import { members } from '@/data/members'
function ManagingDirectors() {
    return (
        <div className='max-w-screen-xl mx-auto w-full p-3 flex flex-col items-center mt-20 pb-10'>
            <h1 className='text-title font-bold mx-auto w-fit mb-12 max-md:text-[2rem]'>Managing
                <span className='relative ml-3'>
                    Committee
                    <Image src={vector} className='absolute right-0 -bottom-2' alt='Vector' />
                </span>
            </h1>
            <div className='grid grid-cols-6 max-sm:grid-cols-2 max-lg:grid-cols-4 gap-2 sm:gap-4 w-full'>
                {
                    members.map((member, index) => (
                        <ProfileCard key={index} name={member?.name} role={member.title} image={Person} />
                    ))
                }
            </div>
            <button className='px-6 py-2 mt-8 border border-gray-600 w-fit rounded-full font-semibold text-red-600'>
                View All
            </button>
        </div>
    )
}

export default ManagingDirectors
