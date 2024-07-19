import vector from '../../../../public/assets/kma csr awards/vector.png'
import Image from 'next/image'
import ArticleCard from './ArticleCard'
function Articles() {
    return (
        <div className='w-11/12 mx-auto mt-36 pb-10 flex flex-col items-center'>
            <h1 className='text-[2.8rem] font-bold leading-[3.5rem] text-center'>
                <span className='relative mr-3'>
                    Unlimited
                    <Image src={vector} className='absolute right-0 -bottom-2 w-full h-4' alt='Vector' />
                </span>
                Access to All the <br /> Resources, Articles and Insights
            </h1>
            <div className='w-full grid grid-cols-3 gap-4 mt-12'>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
            <button className='px-6 py-2 mt-12 border border-gray-600 w-fit rounded-full font-semibold text-red-600'>
                View All
            </button>
        </div>
    )
}

export default Articles
