
'use client'; // Ensure client-side rendering

import React, { useEffect, useState } from 'react';
import TableFilter from '@/components/admin/common/TableFilter';
import TopPart from '@/components/admin/common/TopPart';
import Library from '@/components/admin/E-Library/Library';
import AddMagazineForm from '@/components/admin/common/AddMagazineForm'; // Ensure correct import
import Publication from '@/components/admin/publication/Publication';
import axios from '@/axios-folder/axios';
import { elibraryRoute } from '@/utils/Endpoint';
import DownloadCard from '@/components/admin/cards/DownloadCard'

const ELibraryPage = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(elibraryRoute);
      console.log({ response })
      if (response.status === 200) {
        setData(response?.data?.eLibraries)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <TopPart
        title={"Manage E-Library"}
        type={{ name: "button", content: "Create New" }}
        onClick={() => setShowUploadModal(true)}
      />
      <TableFilter />

      <div className="overflow-y-scroll mb-20 min-h-screen">

        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {data.map((item, index) => (
            <DownloadCard
              key={index}
              platform={item?.platform ?? "test"}
              title={item?.title}
              imageSrc={item?.coverImageUrl}
              fileUrl={item?.fileUrl}
            />
          ))}
        </div>

      </div>

      {showUploadModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            <button
              onClick={() => setShowUploadModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <span className="text-xl">&times;</span>
            </button>
            <div className="w-full">
              <AddMagazineForm
                close={() => setShowUploadModal(false)}
                heading="Add Book"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ELibraryPage;

