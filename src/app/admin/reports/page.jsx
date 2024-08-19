"use client";
import React,{useState} from 'react'
import TopPart from '@/components/admin/common/TopPart'
import ReportsFilter from '@/components/admin/reports/ReportsFilter'
import ReportsContent from '@/components/admin/reports/ReportsContent'
import ModalFrame from '@/components/admin/common/ModalFram';
import ReportModal from '@/components/admin/reports/ReportModal'


const ReportsPage = () => {
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
        <TopPart title={"Manage Reports"} type={{ name: "button",content: "create new", onClick: handleOpenModal}} />
      </header>
      <section>
        <ReportsFilter/>
        <ReportsContent/>
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
