
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
import ModalFrame from "@/components/admin/common/ModalFram";

const ELibraryPage = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [data, setData] = useState([]);

  const [mode, setMode] = useState('create')
  const [id, setId] = useState(null)

  const handleCreate = ()=>{
    setMode('create')
    setId(null)
    setShowUploadModal(true)
  }

  const handleEdit = (id)=>{
    setMode('update')
    setId(id)
    setShowUploadModal(true)
  }

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
        onClick={handleCreate}
      />
      <TableFilter />

      <div className="overflow-y-scroll mb-20 min-h-screen">

        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {data.map((item, index) => (
            <DownloadCard
              key={index}
              item={item}
              handleEdit={handleEdit}
              tab='e-library'
              data={data}
              setData = {setData}
            />
          ))}
        </div>

      </div>

      {showUploadModal && (
        <ModalFrame>
              <AddMagazineForm
                close={() => setShowUploadModal(false)}
                heading={mode === 'create' ? "Add Book" : 'Update Book'}
                tab='e-library'
                mode={mode}
                id={id}
                getData={getData}
              />
          </ModalFrame>
      )}
    </div>
  );
};

export default ELibraryPage;

