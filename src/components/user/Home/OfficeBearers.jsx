import Image from 'next/image'
import vector from '../../../../public/assets/kma csr awards/vector.png'

import OfficeBearerCard from './OfficeBearerCard'
function OfficeBearers() {
    return (
        <div className='w-11/12 mx-auto flex flex-col items-center mt-10 pb-10'>
            <h1 className='text-title font-bold mx-auto w-fit mb-8'>Office
                <span className='relative ml-3'>
                    Bearers
                    <Image src={vector} className='absolute right-0 -bottom-2' alt='Vector' />
                </span>
            </h1>
            <div className='grid grid-cols-6 gap-4 w-full'>
                <OfficeBearerCard />
            </div>
            <button className='px-6 py-2 mt-8 border border-gray-600 w-fit rounded-full font-semibold text-red-600'>
                View All
            </button>
        </div>
    )
}

export default OfficeBearers
