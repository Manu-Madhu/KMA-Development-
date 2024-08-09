import React from 'react';
import { FaEdit, FaTrashAlt, FaDownload } from 'react-icons/fa';

const LibraryCard = ({ platform, title, imageSrc }) => {
    return (
        <div className="relative flex flex-col items-center">
            <div className="border rounded-[32px] overflow-hidden shadow-lg w-full h-[250px] opacity-100 flex flex-col">
                <img src={imageSrc} alt={title} className="w-full h-[180px] object-cover" />
                <div className="p-3 bg-gray-800 text-white flex flex-col flex-grow">
                    <div className="flex justify-between items-center">
                        <div className="text-sm" style={{ color: 'rgba(255, 92, 103, 1)' }}>
                            {platform}
                        </div>
                        <button
                            className="flex items-center gap-2 bg-white text-black px-2 py-1 rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none"
                            style={{
                                width: '105px',
                                height: '25.48px',
                                borderRadius: '12.74px',
                                border: '0.53px solid transparent',
                                marginRight: '10px',
                                marginTop: '10px',
                            }}
                        >
                            <FaDownload className="w-4 h-4" />
                            <span className="text-sm">Download</span>
                        </button>
                    </div>
                    <div className="text-lg font-bold mt-2">{title}</div>
                </div>
            </div>
            <div className="p-4 flex justify-between w-full">
                <button className="flex items-center w-[120px] h-[40px]  px-3 py-2 gap-2 bg-white text-black rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none">
                    <FaEdit className="w-4 h-4" />
                    <span className="text-sm">Edit</span>
                </button>
                <button className="flex items-center w-[120px] h-[40px] mr-[80px] px-3 py-2 gap-2 bg-white text-[#475467] rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none">
                    <FaTrashAlt className="w-4 h-4" />
                    <span className="text-sm">Delete</span>
                </button>
            </div>
        </div>
    );
};

const Library = () => {
    const libraryItems = [
        {
            platform: 'E-Book',
            title: 'Best New Poets',
            imageSrc: '/library/1.png',
        },
        {
            platform: 'E-Book',
            title: 'Best New Poets',
            imageSrc: '/library/2.png',
        },
        {
            platform: 'E-Book',
            title: 'Best New Poets',
            imageSrc: '/library/3.png',
        },
        {
            platform: 'E-Book',
            title: 'Best New Poets',
            imageSrc: '/library/4.png',
        },
        {
            platform: 'E-Book',
            title: 'Best New Poets',
            imageSrc: '/library/5.png',
        },
        {
            platform: 'E-Book',
            title: 'Best New Poets',
            imageSrc: '/library/6.png',
        },
    ];

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {libraryItems.map((item, index) => (
                <LibraryCard
                    key={index}
                    platform={item.platform}
                    title={item.title}
                    imageSrc={item.imageSrc}
                />
            ))}
        </div>
    );
};

export default Library;
