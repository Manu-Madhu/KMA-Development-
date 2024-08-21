
"use client";

import React, { useEffect, useState } from "react";
import TableFilter from "@/components/admin/common/TableFilter";
import TopPart from "@/components/admin/common/TopPart";
import ModalFrame from "@/components/admin/common/ModalFram"; // Ensure correct import
import axios from "@/axios-folder/axios";
import { newsletterRoute } from "@/utils/Endpoint";
import DownloadCard from "@/components/admin/cards/DownloadCard";
import AlterModal from "@/components/admin/modals/AlterModal";

const ManageNewslettersPage = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [mode, setMode] = useState('create')
  const [id, setId] = useState(null)

  const handleCreate = () => {
    setMode('create')
    setId(null)
    setShowUploadModal(true)
  }

  const handleEdit = (id) => {
    setMode('update')
    setId(id)
    setShowUploadModal(true)
  }

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(newsletterRoute);
      console.log({ response })
      if (response.status === 200) {
        setData(response?.data?.newsletters)
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
        title="Manage Newsletters"
        type={{ name: "button", content: "Create New " }}
        onClick={handleCreate}
      />
      <TableFilter label="Newsletter" />

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {data.map((item, index) => (
            <DownloadCard
              key={index}
              item={item}
              handleEdit={handleEdit}
              tab='newsletter'
              data={data}
              setData={setData}
            />
          ))}
        </div>

      {showUploadModal && (
        <ModalFrame>

          <AlterModal
            close={() => setShowUploadModal(false)}
            heading={mode === 'create' ? "Add newsletter" : "Update newsletter"}
            tab="newsletter"
            mode={mode}
            id={id}
            getData={getData}
          />

        </ModalFrame>
      )}
    </div>
  );
};
export default ManageNewslettersPage;

