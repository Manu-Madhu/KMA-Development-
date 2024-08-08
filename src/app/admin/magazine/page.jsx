"use client";
import React,{useState} from 'react'
import TopPart from '@/components/admin/common/TopPart'
import MagazineFilter from '@/components/admin/magazine/MagazineFilter'
import MagazineContent from '@/components/admin/magazine/MagazineContent'
import ModalFrame from '@/components/admin/common/ModalFram'
import MagazineModal from '@/components/admin/magazine/MagazineModal';

const MagazinePage = () => {
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
        <TopPart title={"Manage magazines"} type={{ name: "button",content: "create new", onClick: handleOpenModal }} />
      </header>
      <section>
        <MagazineFilter/>
        <MagazineContent/>
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