import React from 'react'
import Image from 'next/image'
import ProfileData from '@/components/user/profile/ProfileData'

const Profile = () => {
  return (
    <div className=''>
        <div className='flex justify-center items-center mt-10 mb-20'>
      <Image src='/hafizelipz.png' width={200} height={200}></Image>
      <div className="absolute inset-0 flex flex-col mt-10 items-center justify-center text-black z-10">
        <h1 className="text-[2.8rem] max-md:text-4xl font-bold leading-[3.2rem] text-center">
          {`Hafiz Shefeek`}
        </h1>
        </div>
      </div>
      <section>
        <ProfileData/>
      </section>
    </div>
  )
}

export default Profile
