"use client"
import React,{useState} from 'react'
import TopPart from '@/components/admin/common/TopPart'
import SocialConnectContent from '@/components/admin/socialConnect/SocialConnectContent'
import SocialConnectFilter from '@/components/admin/socialConnect/SocialConnectFilter'
import ModalFrame from '@/components/admin/common/ModalFram'
import SocialConnectModal from '@/components/admin/socialConnect/SocialConnectModal'

const SocialConnectPage = () => {
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
        <TopPart title={"Add social media content"} type={{ name: "button",content: "create new", onClick: handleOpenModal }} />
      </header>
      <section>
        <SocialConnectFilter/>
        <SocialConnectContent/>
      </section>
      {isModalOpen && (
        <ModalFrame>
          <SocialConnectModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </ModalFrame>
      )}
      </main>
  )
}

export default SocialConnectPage