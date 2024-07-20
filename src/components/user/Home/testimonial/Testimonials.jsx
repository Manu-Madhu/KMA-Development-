import React from 'react'
import TestimonialsCarousel from './TestimonialsCarousel'
import Image from 'next/image'
import vector from '../../../../../public/assets/kma csr awards/Vector.png'

function Testimonials() {
    return (
        <div className='w-full mx-auto mt-14 pb-20'>
            <h1 className='text-[2.8rem] font-bold text-center max-md:text-[2.2rem]'>
                {`Don't take our`} <br />
                <span className='relative ml-3'>
                    word for it
                    <Image src={vector} className='absolute right-0 -bottom-2 w-full h-4' alt='Vector' />
                </span>
            </h1>
            <TestimonialsCarousel />
        </div>
    )
}

export default Testimonials
