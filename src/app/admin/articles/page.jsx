import React from 'react'
import TopPart from '@/components/admin/common/TopPart'
import ArticleFilter from '@/components/admin/articles/ArticleFilter'
import ArticleContent from '@/components/admin/articles/ArticleContent'


const MagazinePage = () => {
  return (
    <main className="">
      <header>
        <TopPart title={"Manage articles"} type={{ name: "button",content: "create new" }} />
      </header>
      <section>
        <ArticleFilter/>
        <ArticleContent/>
      </section>
      
      </main>
  )
}

export default MagazinePage