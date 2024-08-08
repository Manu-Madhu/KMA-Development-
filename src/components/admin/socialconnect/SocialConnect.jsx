import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Card = ({ platform, title, imageSrc }) => {
    return (
        <div className="relative flex flex-col items-center">
            <div className="border rounded-lg overflow-hidden shadow-lg w-full h-64 opacity-100 flex flex-col">
                <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
                <div className="p-4 bg-gray-800 text-white flex flex-col flex-grow">
                    <div className={`text-sm ${platform === 'YouTube' ? 'text-red-500' : 'text-blue-500'}`}>
                        {platform}
                    </div>
                    <div className="text-lg font-bold mt-1">{title}</div>
                </div>
            </div>
            <div className="p-4 flex justify-between w-full">
                <button className="flex items-center w-24 h-10 px-3 py-2 gap-2 bg-white text-black rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none">
                    <FaEdit className="w-4 h-4" />
                    Edit
                </button>
                <button className="flex items-center w-24 h-10 px-3 py-2 gap-2 bg-white text-[#475467] rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none">
                    <FaTrashAlt className="w-4 h-4" />
                    Delete
                </button>
            </div>
        </div>
    );
};

const SocialConnect = () => {
    const galleryItems = [
        {
            platform: 'YouTube',
            title: 'KMA Corporate Video',
            imageSrc: '/gallery/1.png',
        },
        {
            platform: 'YouTube',
            title: 'KMA Corporate Video',
            imageSrc: '/gallery/2.png',
        },
        {
            platform: 'YouTube',
            title: 'KMA Corporate Video',
            imageSrc: '/gallery/3.png',
        },
        {
            platform: 'Facebook',
            title: 'KMA Corporate Video',
            imageSrc: '/gallery/4.png',
        },
        {
            platform: 'Facebook',
            title: 'KMA Corporate Video',
            imageSrc: '/gallery/5.png',
        },
        {
            platform: 'Facebook',
            title: 'KMA Corporate Video',
            imageSrc: '/gallery/6.png',
        },
    ];

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
                <Card
                    key={index}
                    platform={item.platform}
                    title={item.title}
                    imageSrc={item.imageSrc}
                />
            ))}
        </div>
    );
};

export default SocialConnect;
