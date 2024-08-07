import React from 'react'
import TopPart from '@/components/admin/common/TopPart'
import MagazineFilter from '@/components/admin/magazine/MagazineFilter'
import MagazineContent from '@/components/admin/magazine/MagazineContent'

const MagazinePage = () => {
  return (
    <main className="">
      <header>
        <TopPart title={"Manage magazines"} type={{ name: "button",content: "create new" }} />
      </header>
      <section>
        <MagazineFilter/>
        <MagazineContent/>
      </section>
      
      </main>
  )
}

export default MagazinePage