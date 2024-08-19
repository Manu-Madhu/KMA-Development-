
"use client";
import React,{useEffect, useState} from 'react'
import TopPart from '@/components/admin/common/TopPart'
import MagazineFilter from '@/components/admin/magazine/MagazineFilter'
import MagazineContent from '@/components/admin/magazine/MagazineContent'
import ModalFrame from '@/components/admin/common/ModalFram'
import MagazineModal from '@/components/admin/magazine/MagazineModal';
import axios from '@/axios-folder/axios';
import { magazineRoute } from '@/utils/Endpoint';

const MagazinePage = () => {
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
        <TopPart title={"Manage magazines"} type={{ name: "button",content: "create new" }}  onClick={handleOpenModal}  />
      </header>
      <section>
        <MagazineFilter/>
        <MagazineContent data={data} />
      </section>
      {isModalOpen && (
        <ModalFrame>
          <MagazineModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </ModalFrame>
      )}
      </main>
  )
}

export default MagazinePage