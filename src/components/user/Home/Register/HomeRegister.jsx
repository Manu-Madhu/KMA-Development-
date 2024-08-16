import Image from 'next/image'
import pattern1 from '../../../../../public/assets/Register/Pattern 1.png'
import pattern2 from '../../../../../public/assets/Register/Pattern 2.png'
import wavynet from '../../../../../public/assets/home/wavynet.png';

function HomeRegister() {
    return (
        <div className='w-full mt-5 h-[300px] sm:h-screen relative flex items-center justify-center'>
             <Image
                src={wavynet}
                alt=''
                fill
                className="z-0 object-fill"
                quality={100}
            />

            <div className='w-fit flex flex-col items-center absolute'>
                <h1 className='text-[2.4rem] max-md:text-xl font-bold leading-[3.5rem] max-md:leading-10 text-center'>
                    Interested in Becoming a Member?
                </h1>
                <p className='text-center'>Click the register button below to see the procedures</p>
                <button className='px-6 py-2 mt-8 border border-gray-600 w-fit rounded-full font-semibold text-red-600'>
                    Register now
                </button>
            </div>


            {/* <Image src={pattern1} alt='Pattern 1' className='absolute top-0 left-0' />
            <Image src={pattern2} alt='Pattern 2' className='absolute bottom-0 right-0 max-md:hidden' /> */}

        </div>
    )
}

export default HomeRegister
