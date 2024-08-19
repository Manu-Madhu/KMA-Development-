"use client";

import React, { useEffect, useState } from "react";
import TableFilter from "@/components/admin/common/TableFilter";
import TopPart from "@/components/admin/common/TopPart";
import ModalFrame from "@/components/admin/common/ModalFram";
import GalleryContent from "@/components/admin/gallery/GalleryContent";
import UploadModal from "@/components/admin/gallery/UploadModal"; 
import axios from "@/axios-folder/axios";
import { galleryRoute } from "@/utils/Endpoint";

const page = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(galleryRoute);
      // console.log({ response })
      if (response.status === 200) {
        setData(response?.data?.gallery)
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
        title="Manage Gallery"
        type={{ name: "button", content: "Create New" }}
        onClick={() => setShowUploadModal(true)}
      />
      <TableFilter label="Gallery" />

      <div className="overflow-y-scroll mb-20 min-h-screen">
        <GalleryContent data={data} setData={setData} />
      </div>

      {showUploadModal && (
        <ModalFrame>
          <UploadModal close={() => setShowUploadModal(false)} getData={getData} />
          <button
            onClick={() => setShowUploadModal(false)}
            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
          >
            Close
          </button>
        </ModalFrame>
      )}
    </div>

  );
};

export default page;
