import Image from 'next/image'
import vector from '../../../../public/assets/kma csr awards/vector.png'
import { LuUsers } from "react-icons/lu";

function MemberBenefits() {
    return (
        <div className='pb-10 w-11/12 mx-auto flex flex-col items-center mt-20'>
            <h1 className='text-title max-md:text-[2.2rem] font-bold mx-auto w-fit mb-8'>Member
                <span className='relative ml-3'>
                    Benefits
                    <Image src={vector} className='absolute right-0 -bottom-2' alt='Vector' />
                </span>
            </h1>
            <p className='text-center mt-3 max-sm:text-sm'>
                KMA membership provides innumerable opportunities to enrich their <br /> experiences by participating in a variety of programs
            </p>
            <div className='w-full p-8 mt-20 rounded-2xl bg-[#FF5C67] flex flex-col gap-3 text-white'>
                <LuUsers size={32} />
                <h2 className='text-xl'>Networking</h2>
                <p className='w-64'>
                    Management networking can provide opportunities for professional growth, knowledge sharing, and building valuable relationships.
                </p>
            </div>
        </div>
    )
}

export default MemberBenefits
