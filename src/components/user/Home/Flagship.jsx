import Image from 'next/image'
import countdown from '../../../../public/assets/home/countdown.png'

function Flagship() {
    return (
        <div className='max-w-screen-xl mx-auto my-24 w-full h-[500px]  bg-no-repeat bg-cover bg-center relative flex items-center'>
            <Image
                src={countdown}
                alt=''
                layout="fill"
                // objectFit="fill"
                className="z-0 object-cover sm:object-fill"
                quality={100}
            />

            <div className='w-full h-full absolute text-white flex flex-col items-center justify-center'>

                <h2 className='text-[#FF3C49] text-2xl sm:text-4xl font-bold mb-10'>Our Flagship Event</h2>

                <span className='text-xs'>Will starts in</span>

                <div className='mt-4 flex flex-col sm:flex-row items-center text-xl sm:text-3xl font-light max-sm:gap-4 '>
                    <span>120 Days</span>
                    <div class="hidden sm:flex border-l-2 border-gray-500 h-5 mx-4"></div>
                    <span>4 Hours</span>
                    <div class="hidden sm:flex border-l-2 border-gray-500 h-5 mx-4"></div>
                    <span>32 Minutes</span>
                    <div class="hidden sm:flex border-l-2 border-gray-500 h-5 mx-4"></div>
                    <span>6 Seconds</span>
                </div>

                <button className='mt-16 bg-white text-primaryColor rounded-2xl text-xs py-2 px-4'>
                    View all events
                </button>
            </div>
        </div>
    )
}

export default Flagship
