import React from 'react'
import vector from '../../../../public/assets/kma csr awards/Vector.png'
import Image from 'next/image'
function StatsCard({ title, value }) {
    return (
        <div className='h-full p-14 max-lg:p-7 flex flex-col items-center bg-[#ffd6d8] '>
            <h1 className='text-[3rem] font-bold leading-[3.4rem]'>{value}</h1>
            <Image className='-mt-1' src={vector} alt='Vector' />
            <p className='text-xl text-primaryColor font-semibold'>{title}</p>
        </div>
    )
}

export default StatsCard
