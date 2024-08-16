import Banner from '@/components/user/member/Banner'
import BottomImage from '@/components/user/member/BottomImage'
import Category from '@/components/user/member/Category'
import React from 'react'

const Member = () => {
  return (
    <div>
      <Banner/>
      <section>
        <Category/>
      </section>
      <section>
        <BottomImage/>
      </section>
    </div>
  )
}

export default Member
