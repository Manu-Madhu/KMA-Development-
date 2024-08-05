import React from 'react'
import { TrashIcon } from '@heroicons/react/24/outline'; 
import { LuDownload } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";


const ReportsContent = () => {
    const galleryItems = [
        { id: 1, imageSrc: '/gallery/reportsimg1.png', title: 'E-Book', description: 'Best New Poets' },
        { id: 2, imageSrc: '/gallery/reportsimg1.png', title: 'E-Book', description: 'Best New Poets' },
        { id: 3, imageSrc: '/gallery/reportsimg1.png', title: 'E-Book', description: 'Best New Poets' },
        { id: 4, imageSrc: '/gallery/reportsimg2.png', title: 'E-Book', description: '1Best New Poets' },
        { id: 5, imageSrc: '/gallery/reportsimg2.png', title: 'E-Book', description: 'Best New Poets' },
        { id: 6, imageSrc: '/gallery/reportsimg2.png', title: 'E-Book', description: 'Best New Poets' },
        
      ];
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {galleryItems.map(item => (
        <div key={item.id} className="relative mb-20">
          <img 
            src={item.imageSrc} 
            alt={item.title} 
            className="w-full h-auto rounded-3xl object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/4  bg-customGray flex flex-col justify-end p-2 rounded-b-3xl ">
            <h3 className="text-customRed text-sm ">{item.title}</h3>
            <p className="text-white text-lg ">{item.description}</p>
            <button className="absolute bg-[#FFFFFF] bg-opacity-90 right-2 py-2 px-4 rounded-full text-sm flex items-center mt-2">
            <LuDownload  className="h-5 w-5 text-black mr-2" /> 
            download
          </button>
          </div>
          <div className="flex flex-row justify-around mt-4">
          <button className="absolute shadow-lg  bg-opacity-90 left-2 py-2 px-4 rounded-lg text-sm flex items-center mt-2">
          <FiEdit   className="h-5 w-5 text-black mr-2" /> 
            Edit
          </button>
          <button className="absolute shadow-lg  py-2 px-4 rounded-lg text-sm flex items-center mt-2">
          <RiDeleteBinLine   className="h-5 w-5 text-black mr-2" /> 
            Delete
          </button>
        </div>
        </div>
      ))}
    </div>
  )
}

export default ReportsContent
