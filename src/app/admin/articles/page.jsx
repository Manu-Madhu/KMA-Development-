"use client"
import React,{useState} from 'react'
import TopPart from '@/components/admin/common/TopPart'
import ArticleFilter from '@/components/admin/articles/ArticleFilter'
import ArticleContent from '@/components/admin/articles/ArticleContent'
import ArticleModal from '@/components/admin/articles/ArticleModal'
import ModalFrame from '@/components/admin/common/ModalFram'


const ArticlePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <main className="">
      <header>
        <TopPart title={"Manage articles"} type={{ name: "button",content: "create new", onClick: handleOpenModal }} />
      </header>
      <section>
        <ArticleFilter/>
        <ArticleContent/>
      </section>
      {isModalOpen && (
        <ModalFrame>
          <ArticleModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </ModalFrame>
      )}
      </main>
  )
}

export default ArticlePage