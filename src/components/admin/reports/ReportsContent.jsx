import React from 'react'
import { TrashIcon } from '@heroicons/react/24/outline';
import { LuDownload } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from 'next/link';
import DownloadCard from '../cards/DownloadCard';


const ReportsContent = ({ data, setData }) => {
  const galleryItems = [
    { id: 1, imageSrc: '/gallery/reportsimg1.png', title: 'E-Book', description: 'Best New Poets' },
    { id: 2, imageSrc: '/gallery/reportsimg1.png', title: 'E-Book', description: 'Best New Poets' },
    { id: 3, imageSrc: '/gallery/reportsimg1.png', title: 'E-Book', description: 'Best New Poets' },
    { id: 4, imageSrc: '/gallery/reportsimg2.png', title: 'E-Book', description: '1Best New Poets' },
    { id: 5, imageSrc: '/gallery/reportsimg2.png', title: 'E-Book', description: 'Best New Poets' },
    { id: 6, imageSrc: '/gallery/reportsimg2.png', title: 'E-Book', description: 'Best New Poets' },

  ];

  

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
      {data.map((item, index) => (
        <DownloadCard
          key={index}
          item={item}
          handleEdit={handleEdit}
          tab='report'
          data={data}
          setData={setData}
        />
      ))}
    </div>
  )
}

export default ReportsContent
