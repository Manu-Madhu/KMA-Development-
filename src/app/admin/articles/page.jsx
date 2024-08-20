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
import DownloadCard from '@/components/admin/cards/DownloadCard'


const ArticlePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [mode, setMode] = useState('create')
  const [id, setId] = useState(null)

  const handleCreate = () => {
    setMode('create')
    setId(null)
    setIsModalOpen(true)
  }

  const handleEdit = (id) => {
    setMode('update')
    setId(id)
    setIsModalOpen(true)
  }

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
        <TopPart title={"Manage articles"} type={{ name: "button",content: "create new"}} onClick={handleCreate}   />
      </header>
      <section>
        <ArticleFilter/>

        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {data.map((item, index) => (
            <DownloadCard
              key={index}
              item={item}
              handleEdit={handleEdit}
              tab='article'
              data={data}
              setData={setData}
            />
          ))}
        </div>

      </section>
      {isModalOpen && (
        <ModalFrame>
          <ArticleModal 
          close={()=>setIsModalOpen(false)}
          heading={mode=== 'create' ? "Add article" : "Update article"}
          tab="article"
          mode={mode}
          id={id}
          getData={getData}/>
        </ModalFrame>
      )}
      </main>
  )
}

export default ArticlePage