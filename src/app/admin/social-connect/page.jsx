import React from 'react'
import TopPart from '@/components/admin/common/TopPart'
import SocialConnectContent from '@/components/admin/socialConnect/SocialConnectContent'
import SocialConnectFilter from '@/components/admin/socialConnect/SocialConnectFilter'


const SocialConnectPage = () => {
  return (
    <main className="">
      <header>
        <TopPart title={"Add social media content"} type={{ name: "button",content: "create new" }} />
      </header>
      <section>
        <SocialConnectFilter/>
        <SocialConnectContent/>
      </section>
      
      </main>
  )
}

export default SocialConnectPage