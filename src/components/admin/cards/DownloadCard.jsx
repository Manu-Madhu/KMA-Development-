import Link from 'next/link';
import React from 'react';
import { LuDownload } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { elibraryRoute, magazineRoute, reportsRoute } from '@/utils/Endpoint';
import { toast } from 'react-toastify';

const DownloadCard = ({ item, handleEdit, tab, data, setData }) => {
    const axiosPrivate = useAxiosPrivate();

    const route = tab === 'e-library' ? elibraryRoute 
    : tab === 'report' ? reportsRoute 
    : tab === 'magazine' ? magazineRoute
    : ''


    const deleteHandler = async(id)=>{
        try {
            const response = await axiosPrivate.delete(`${route}/${id}`)

            if(response.status === 200){
                const newData = data?.filter(item=> item._id !== id)
                setData(newData)
                toast.success('Deleted')
            }
            
        } catch (error) {
            toast.error('Attempt failed')
            console.log(error)
        }
    }

    return (
        <div className="relative mb-20">
            <img
                src={item?.coverImageUrl}
                alt={item?.title}
                className="w-full h-[250px] rounded-3xl object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/4  bg-customGray flex flex-col justify-end p-2 rounded-b-3xl ">
                <h3 className="text-customRed text-xs pl-3 pt-1 ">{item?.platform}</h3>
                <p className="text-white text-sm pl-3 pb-2">{item?.title}</p>
                <a href={item?.fileUrl} target='_blank' rel="noopener noreferrer" className="absolute bg-[#FFFFFF] bg-opacity-90 right-4 py-2 px-4 rounded-full text-sm flex items-center mt-2">
                    <LuDownload className="h-5 w-5 text-black mr-2" />
                    Download
                </a>
            </div>
            <div className="flex flex-row justify-around mt-4">
                <button 
                onClick={()=> handleEdit(item?._id)}
                className="absolute shadow-lg  bg-opacity-90 left-1 py-2 px-4 rounded-lg text-sm flex items-center mt-2">
                    <FiEdit className="h-4 w-4 text-black mr-2" />
                    Edit
                </button>
                <button
                onClick={()=> deleteHandler(item?._id)}
                className="absolute shadow-lg opacity-60  py-2 px-4 rounded-lg text-sm flex items-center mt-2">
                    <RiDeleteBinLine className="h-5 w-5 text-black mr-2" />
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DownloadCard;