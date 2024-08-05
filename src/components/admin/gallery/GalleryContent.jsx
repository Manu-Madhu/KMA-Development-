import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline'; 

const galleryItems = [
  { id: 1, imageSrc: '/gallery/1.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 2, imageSrc: '/gallery/2.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 3, imageSrc: '/gallery/3.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 4, imageSrc: '/gallery/4.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 5, imageSrc: '/gallery/5.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 6, imageSrc: '/gallery/6.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 7, imageSrc: '/gallery/7.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 8, imageSrc: '/gallery/8.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 9, imageSrc: '/gallery/9.png', title: 'KMA annual meet', date: '17 JUN 2024' },
];

const GalleryContent = () => {
  console.log('Rendering GalleryContent component'); 
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {galleryItems.map(item => (
        <div key={item.id} className="relative">
          <img 
            src={item.imageSrc} 
            alt={item.title} 
            className="w-full h-auto rounded-lg object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-2 rounded-lg">
            <h3 className="text-white text-lg">{item.title}</h3>
            <p className="text-white text-sm">{item.date}</p>
          </div>
          <button className="absolute top-2 right-2 bg-[#FFFFFF] bg-opacity-90 p-2 rounded text-sm flex items-center">
            <TrashIcon className="h-5 w-5 text-black mr-2" /> 
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default GalleryContent;
