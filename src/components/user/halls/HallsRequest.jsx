import Image from 'next/image'
import pattern1 from '../../../../public/assets/Register/Pattern 1.png'
import pattern2 from '../../../../public/assets/Register/Pattern 2.png'
function HallsRequest() {
    return (
        <div className='w-full mt-5 h-screen relative flex items-center justify-center'>
            <div className='w-fit flex flex-col items-center'>
                <h1 className='text-[2.4rem] max-md:text-[2.2rem] font-bold leading-[3.5rem] max-md:leading-10 text-center'>
                    To Enquire more about our halls
                </h1>
                <p className='text-center'>Please call us at 0484-4044367, 231 7917, 231 7966 or submit a request here</p>
                <button className='px-6 py-2 mt-8 border border-gray-600 w-fit rounded-full font-semibold text-red-600'>
                    Submit Request
                </button>
            </div>
            <Image src={pattern1} alt='Pattern 1' className='absolute top-0 left-0' />
            <Image src={pattern2} alt='Pattern 2' className='absolute bottom-0 right-0 max-md:hidden' />
        </div>
    )
}

export default HallsRequest
