"use client";
import React,{useEffect, useState} from 'react'
import TopPart from '@/components/admin/common/TopPart'
import ReportsFilter from '@/components/admin/reports/ReportsFilter'
import ReportsContent from '@/components/admin/reports/ReportsContent'
import ModalFrame from '@/components/admin/common/ModalFram';
import ReportModal from '@/components/admin/reports/ReportModal'
import axios from '@/axios-folder/axios';
import { reportsRoute } from '@/utils/Endpoint';


const ReportsPage = () => {
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
      const response = await axios.get(reportsRoute);
      console.log({ response })
      if (response.status === 200) {
        setData(response?.data?.reports)
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
        <TopPart title={"Manage Reports"} type={{ name: "button",content: "create new"}}  onClick={handleOpenModal}  />
      </header>
      <section>
        <ReportsFilter/>
        <ReportsContent data={data} />
      </section>
      {isModalOpen && (
        <ModalFrame>
          <ReportModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </ModalFrame>
      )}
      
      </main>
  )
}

export default ReportsPage
