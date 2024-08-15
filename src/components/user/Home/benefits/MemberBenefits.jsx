import Image from 'next/image'
import vector from '../../../../../public/assets/kma csr awards/Vector.png'
import BenefitCard from './BenefitCard';
import { LuUsers } from "react-icons/lu";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

function MemberBenefits() {

    const data = [
        {
            bgcolor:'#FF5C67',
            icon: <FaRegHandshake size={32} />,
            title: "Networking",
            content: `Management networking can provide opportunities for professional growth, knowledge sharing, and building valuable relationships.`
        },
        {
            bgcolor:'#5CA7FF',
            icon: <HiOutlineBookOpen size={32} />,
            title: "Learning",
            content: `Management networking can provide opportunities for professional growth, knowledge sharing, and building valuable relationships.`
        },
        {
            bgcolor:'#FFB45C',
            icon: <HiOutlineChatBubbleLeftRight size={32} />,
            title: "Social",
            content: `Management networking can provide opportunities for professional growth, knowledge sharing, and building valuable relationships.`
        },
        {
            bgcolor:'#61C55F',
            icon: <LuUsers size={32} />,
            title: "Community",
            content: `Management networking can provide opportunities for professional growth, knowledge sharing, and building valuable relationships.`
        },
    ]

    return (
        <div className='pb-10 max-w-screen-xl mx-auto p-3 w-full flex flex-col items-center mt-20'>
            <h1 className='text-title max-md:text-[2.2rem] font-bold mx-auto w-fit mb-8'>Member
                <span className='relative ml-3'>
                    Benefits
                    <Image src={vector} className='absolute right-0 -bottom-2' alt='Vector' />
                </span>
            </h1>
            <p className='text-center mt-3 max-sm:text-sm'>
                KMA membership provides innumerable opportunities to enrich their <br /> experiences by participating in a variety of programs
            </p>

            <div className='w-full mt-20 flex flex-col sm:flex-row items-center gap-4'>

                {
                    data.map((item, index) => (
                        <BenefitCard key={index} index={index} bgcolor={item.bgcolor} icon={item.icon} title={item.title} content={item.content} />
                    ))
                }
            </div>


        </div>
    )
}

export default MemberBenefits
