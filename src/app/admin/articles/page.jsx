"use client"
import React,{useEffect, useState} from 'react'
import TopPart from '@/components/admin/common/TopPart'
import ArticleFilter from '@/components/admin/articles/ArticleFilter'
import ArticleContent from '@/components/admin/articles/ArticleContent'
import ArticleModal from '@/components/admin/articles/ArticleModal'
import ModalFrame from '@/components/admin/common/ModalFram'
import axios from '@/axios-folder/axios'
import { articleRoute } from '@/utils/Endpoint'
import CardGroup from '@/components/admin/cards/CardGroup'


const ArticlePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(articleRoute);
      console.log({ response })
      if (response.status === 200) {
        setData(response?.data?.articles)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <main className="">
      <header>
        <TopPart title={"Manage articles"} type={{ name: "button",content: "create new"}} onClick={handleOpenModal}   />
      </header>
      <section>
        <ArticleFilter/>
        <CardGroup data={data} />
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