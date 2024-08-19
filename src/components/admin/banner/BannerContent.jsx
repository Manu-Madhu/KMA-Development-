import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { bannersRoute } from '@/utils/Endpoint';
import { toast } from 'react-toastify';

const bannerItems = [
  { id: 1, imageSrc: '/banner/1.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 2, imageSrc: '/banner/2.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 3, imageSrc: '/banner/3.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 4, imageSrc: '/banner/4.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 5, imageSrc: '/banner/5.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 6, imageSrc: '/banner/6.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 7, imageSrc: '/banner/1.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 8, imageSrc: '/banner/2.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 9, imageSrc: '/banner/3.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 9, imageSrc: '/banner/3.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 9, imageSrc: '/banner/3.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 9, imageSrc: '/banner/3.png', title: 'KMA annual meet', date: '17 JUN 2024' },
  { id: 9, imageSrc: '/banner/3.png', title: 'KMA annual meet', date: '17 JUN 2024' },
];

const BannerContent = ({ data, setData }) => {
  const axiosPrivate = useAxiosPrivate()

  const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const dateFormatFunc = (updatedAt) => {
    const date = updatedAt?.split('T')[0]
    const [day, monthNum, year] = date.split('-');
    const month = shortMonths[Number(monthNum) - 1];
    return `${day} ${month} ${year}`;

  }

  const deleteHandler = async (id) => {
    try {
      const response = await axiosPrivate.delete(`${bannersRoute}/${id}`)
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
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map(item => (
        <div key={item._id} className="relative">
          <img
            src={item.fileUrl}
            alt={item.name}
            className="w-full h-[300px] rounded-lg object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 rounded-2xl">
            <h3 className="text-white text-lg">{item.name}</h3>
            <p className="text-white text-sm">{dateFormatFunc(item.updatedAt)}</p>
          </div>
          <button
          onClick={() => deleteHandler(item._id)}
          className="absolute top-2 right-2 bg-[#FFFFFF] bg-opacity-90 p-2 rounded text-sm flex items-center">
            <TrashIcon className="h-5 w-5 text-black mr-2" />
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BannerContent;
