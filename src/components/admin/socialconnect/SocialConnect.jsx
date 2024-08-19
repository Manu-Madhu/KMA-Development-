import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { socialConnectRoute } from '@/utils/Endpoint';
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({ deleteHandler, item }) => {
    const isYouTube = item?.platform === 'YouTube';
    return (
        <div className="relative flex flex-col items-center">
            <div
                className={`border rounded-[32px] overflow-hidden shadow-lg w-full h-[230px] flex flex-col ${isYouTube ? 'bg-[#2A282F]' : 'bg-gray-800'}`}
            >
                <img src={item?.coverImageUrl} alt={item?.title} className="w-full h-[150px] object-cover" />
                <div className={`p-4 ${isYouTube ? 'bg-[#2A282F]' : 'bg-gray-800'} text-white flex flex-col flex-grow`}>
                    <div className={`text-xs ${isYouTube ? 'text-red-500' : 'text-blue-500'}`}>
                        {item?.platform}
                    </div>
                    <div className={`text-sm font-bold mt-1 ${isYouTube ? 'text-sm' : 'text-lg'}`}>{item?.title}</div>
                </div>
            </div>
            <div className="p-4 flex justify-between w-full">
                <button className="flex items-center w-24 h-10 px-3 py-2 gap-2 bg-white text-black rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none">
                    <FaEdit className="w-4 h-4" />
                    Edit
                </button>
                <button 
          onClick={() => deleteHandler(item._id)}
                className="flex items-center w-24 h-10 px-3 py-2 gap-2 bg-white text-[#475467] rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none">
                    <FaTrashAlt className="w-4 h-4" />
                    Delete
                </button>
            </div>
        </div>
    );
};

const SocialConnect = ({data,setData}) => {
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

  const axiosPrivate = useAxiosPrivate()

    const deleteHandler = async (id) => {
        try {
          const response = await axiosPrivate.delete(`${socialConnectRoute}/${id}`)
          if (response.status === 200) {
            toast.success('Deleted')
    
            const newData = data?.filter((item,i)=> item._id !== id)
            setData([...newData])
            
          } else {
            toast.error('Failed to delete')
          }
    
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data?.map((item, index) => (
                <Card
                    key={index}
                    platform={item.platform}
                    title={item.title}
                    imageSrc={item.coverImageUrl}
                    item={item}
                    deleteHandler={deleteHandler}
                />
            ))}
        </div>
    );
};

export default SocialConnect;
