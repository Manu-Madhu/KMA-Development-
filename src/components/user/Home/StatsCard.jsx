import React from 'react'
import vector from '../../../../public/assets/kma csr awards/Vector.png'
import Image from 'next/image'
function StatsCard({ title, value }) {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-[3rem] font-bold leading-[3.4rem]'>{value}</h1>
            <p className='text-xl font-semibold'>{title}</p>
            <Image className='-mt-1' src={vector} alt='Vector' />
        </div>
    )
}

export default StatsCard
