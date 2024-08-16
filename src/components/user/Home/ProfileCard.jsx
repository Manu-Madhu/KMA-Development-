import Image from 'next/image'

function ProfileCard({ name, role,image }) {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='h-[260px] rounded-2xl border border-gray-300'>
            <div className='w-full rounded-t-2xl relative bg-yellow-300 h-[70%]'>
                <Image src={image} className='h-[90%] w-fit bottom-0 inset-x-0 mx-auto absolute' alt='Person' />
            </div>
            <div className='h-[30%] p-3  rounded-b-2xl '>
                <h1>
                    {name}
                </h1>
                <p className='text-sm'>
                    {role}
                </p>
            </div>
        </div>
    )
}

export default ProfileCard
