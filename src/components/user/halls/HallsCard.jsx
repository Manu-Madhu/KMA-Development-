import factHall from '@/../public/assets/halls/fact_hall.png'
import Image from 'next/image'

function HallsCard({ isInquiryHidden = false }) {
    return (
        <div className='rounded-2xl overflow-clip h-[19rem] relative max-w-[26rem]'>
            <Image src={factHall} alt='Hall Banner' className='object-cover' />
            <div className='h-22 absolute p-4 bg-gray-800/80 bottom-0 w-full backdrop-blur-xl'>
                <h1 className='text-xl font-semibold text-white'>
                    Fact Hall
                </h1>
                <div className='flex gap-4'>
                    <p className='font-light text-sm text-white'>
                        <span className='text-[#FF5C67] font-medium'> 8</span> Hrs. Rs. <span className='text-[#FF5C67] font-medium'> 7000</span>+GST <span className='text-[#FF5C67] font-medium'> 4</span> Hrs. Rs. <span className='text-[#FF5C67] font-medium'> 3750</span>+GST
                        Pax 20
                    </p>
                    <button className={`bg-white text-primaryColor px-4 h-fit rounded-full font-medium ${isInquiryHidden ? "hidden" : ""}`}>
                        inquire
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HallsCard
