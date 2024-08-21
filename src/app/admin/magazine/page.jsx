
"use client";
import React, { useEffect, useState } from 'react'
import TopPart from '@/components/admin/common/TopPart'
import MagazineFilter from '@/components/admin/magazine/MagazineFilter'
import MagazineContent from '@/components/admin/magazine/MagazineContent'
import ModalFrame from '@/components/admin/common/ModalFram'
import MagazineModal from '@/components/admin/magazine/MagazineModal';
import axios from '@/axios-folder/axios';
import { magazineRoute } from '@/utils/Endpoint';
import DownloadCard from '@/components/admin/cards/DownloadCard';
import AlterModal from '@/components/admin/modals/AlterModal';

const MagazinePage = () => {
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

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(magazineRoute);
      console.log({ response })
      if (response.status === 200) {
        setData(response?.data?.magazines)
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
        <TopPart title={"Manage magazines"} type={{ name: "button", content: "create new" }} onClick={handleCreate} />
      </header>
      <section>
        <MagazineFilter />
        {/* <MagazineContent data={data} /> */}

        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {data.map((item, index) => (
            <DownloadCard
              key={index}
              item={item}
              handleEdit={handleEdit}
              tab='magazine'
              data={data}
              setData={setData}
            />
          ))}
        </div>

      </section>
      {isModalOpen && (
        <ModalFrame>
          {/* <MagazineModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}

          <AlterModal
            close={() => setIsModalOpen(false)}
            heading={mode === 'create' ? "Add Magazine" : "Update Magazine"}
            tab="magazine"
            mode={mode}
            id={id}
            getData={getData}
          />

        </ModalFrame>
      )}
    </main>
  )
}

export default MagazinePage