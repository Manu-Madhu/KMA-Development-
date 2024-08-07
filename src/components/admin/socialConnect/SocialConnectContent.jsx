import React from 'react'
import { TrashIcon } from '@heroicons/react/24/outline'; 
import { LuDownload } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";


const SocialConnectContent = () => {
    const galleryItems = [
        { id: 1, imageSrc: '/gallery/socialimg1.png', title: 'Youtube', description: 'KMA Corporate Video' },
        { id: 2, imageSrc: '/gallery/socialimg1.png', title: 'Youtube', description: 'KMA Corporate Video' },
        { id: 3, imageSrc: '/gallery/socialimg1.png', title: 'Youtube', description: 'KMA Corporate Video' },
        { id: 4, imageSrc: '/gallery/socialimg2.png', title: 'Facebook', description: 'KMA Corporate Video' },
        { id: 5, imageSrc: '/gallery/socialimg2.png', title: 'Facebook', description: 'KMA Corporate Video' },
        { id: 6, imageSrc: '/gallery/socialimg2.png', title: 'Facebook', description: 'KMA Corporate Video' },
        
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
          
          <div className="absolute inset-x-0 bottom-4 h-1/4 opacity-90 bg-customGray flex flex-col justify-end p-2 rounded-b-3xl ">
            <h3 className={`text-xs pl-3 pt-1 ${item.title === 'Facebook' ? 'text-[#5CA7FF]' : 'text-customRed'}`}>{item.title}</h3>
            <p className="text-white text-sm pl-3 pb-2">{item.description}</p>
          </div>
          <div className="flex flex-row justify-around mt-4">
          <button className="absolute shadow-lg  bg-opacity-90 left-1 py-2 px-4 rounded-lg text-sm flex items-center mt-2">
          <FiEdit   className="h-4 w-4 text-black mr-2" /> 
            Edit
          </button>
          <button className="absolute shadow-lg opacity-60  py-2 px-4 rounded-lg text-sm flex items-center mt-2">
          <RiDeleteBinLine   className="h-5 w-5 text-black mr-2" /> 
            Delete
          </button>
        </div>
        </div>
      ))}
    </div>
  )
}

export default SocialConnectContent
