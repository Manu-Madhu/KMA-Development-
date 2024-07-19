import Image from 'next/image'
import vector from '../../../../public/assets/kma csr awards/vector.png'

import OfficeBearerCard from './OfficeBearerCard'
function ManagingDirectors() {
    return (
        <div className='w-11/12 flex flex-col items-center mx-auto mt-20 pb-10'>
            <h1 className='text-title font-bold mx-auto w-fit mb-8'>Managing
                <span className='relative ml-3'>
                    Directors
                    <Image src={vector} className='absolute right-0 -bottom-2' alt='Vector' />
                </span>
            </h1>
            <div className='grid grid-cols-6 gap-4 w-full'>
                <OfficeBearerCard />
            </div>
            <button className='px-6 py-2 border border-gray-600 w-fit rounded-full font-semibold text-red-600'>
                View All
            </button>
        </div>
    )
}

export default ManagingDirectors
