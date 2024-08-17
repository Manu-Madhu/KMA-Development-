import Link from 'next/link';
import React from 'react';
import { FaEdit, FaTrashAlt, FaDownload } from 'react-icons/fa';

const DownloadCard = ({ platform, title, imageSrc, fileUrl }) => {
    return (
        <div className="relative flex flex-col items-center">
            <div className="border rounded-[32px] overflow-hidden shadow-lg w-full h-[230px] flex flex-col relative">
                <img src={imageSrc} alt={title} className="w-full h-[150px] object-cover" />
                <div className="p-2 flex flex-col flex-grow" style={{ backgroundColor: 'rgba(42, 40, 47, 0.8)' }}> 
                    <div className="text-xs mb-1" style={{ color: 'rgba(255, 92, 103, 1)', fontSize: '12px', marginTop: '5px' }}> 
                        {platform}
                    </div>
                    <div className="text-sm font-bold text-white" style={{ marginTop: '8px', fontSize: '14px' }}>{title}</div>

                    <Link href={fileUrl} >
                        <button
                            className="absolute bottom-6 right-4 flex items-center gap-2 bg-white text-black px-2 py-1 rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none"
                            style={{
                                width: '105px',
                                height: '25.48px',
                                borderRadius: '12.74px',
                                border: '0.53px solid transparent',
                            }}
                        >
                            <FaDownload className="w-4 h-4" />
                            <span className="text-sm">Download</span>
                        </button>
                    </Link> 
                </div>
            </div>
            <div className="p-4 flex justify-between w-full">
                <button className="flex items-center w-[120px] h-[40px] px-3 py-2 gap-2 bg-white text-black rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none mt-2">
                    <FaEdit className="w-4 h-4" />
                    <span className="text-sm">Edit</span>
                </button>
                <button className="flex items-center w-[120px] h-[40px] mr-[80px] px-3 py-2 gap-2 bg-white text-[#475467] rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none mt-2">
                    <FaTrashAlt className="w-4 h-4" />
                    <span className="text-sm">Delete</span>
                </button>
            </div>
        </div>
    );
};

export default DownloadCard;