import vector from '../../../../public/assets/kma csr awards/vector.png'
import Image from 'next/image'
function UnderlinedHeading({ heading, text }) {
    return (
        <h1 className='text-[2.8rem] font-bold leading-[3.5rem] text-center'>
            {heading}
            <span className='relative mr-3'>
                {text}
                <Image src={vector} className='absolute right-0 -bottom-2 w-full h-4' alt='Vector' />
            </span>
        </h1>
    )
}

export default UnderlinedHeading
