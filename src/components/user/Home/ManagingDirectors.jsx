import Image from 'next/image'
import vector from '../../../../public/assets/kma csr awards/vector.png'

import OfficeBearerCard from './OfficeBearerCard'
import { members } from '@/data/members'
function ManagingDirectors() {
    return (
        <div className='w-11/12 flex flex-col items-center mx-auto mt-20 pb-10'>
            <h1 className='text-title font-bold mx-auto w-fit mb-8 max-md:text-[2.2rem]'>Managing
                <span className='relative ml-3'>
                    Directors
                    <Image src={vector} className='absolute right-0 -bottom-2' alt='Vector' />
                </span>
            </h1>
            <div className='grid grid-cols-6 max-sm:grid-cols-2 gap-4 w-full'>
                {
                    members.map((member, index) => (
                        <OfficeBearerCard key={index} member={member} />
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
