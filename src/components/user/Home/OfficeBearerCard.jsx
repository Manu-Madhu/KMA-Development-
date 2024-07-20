import Image from 'next/image'
import Person from '../../../../public/assets/events/event1.png'

function OfficeBearerCard() {
    return (
        <div className='h-60  rounded-2xl border border-gray-300'>
            <div className='w-full rounded-t-2xl relative bg-yellow-300 h-[70%]'>
                <Image src={Person} className='h-[90%] w-fit bottom-0 inset-x-0 mx-auto absolute' alt='Person' />
            </div>
            <div className='h-[30%] p-3  rounded-b-2xl '>
                <h1>
                    John George
                </h1>
                <p className='text-sm'>
                    Software Developer
                </p>
            </div>
        </div>
    )
}

export default OfficeBearerCard
