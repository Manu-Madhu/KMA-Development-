"use client";

import React, { useEffect, useState } from "react";
import TableFilter from "@/components/admin/common/TableFilter";
import TopPart from "@/components/admin/common/TopPart";
import ModalFrame from "@/components/admin/common/ModalFram";
import axios from "@/axios-folder/axios";
import { bannersRoute } from "@/utils/Endpoint";
import BannerContent from "@/components/admin/banner/BannerContent";
import UploadModal from "@/components/admin/modals/UploadModal";

const page = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(bannersRoute);
      console.log({ response })
      if (response.status === 200) {
        setData(response?.data?.banners)
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
        title="Manage Banner"
        type={{ name: "button", content: "Create New" }}
        onClick={() => setShowUploadModal(true)}
      />
      <TableFilter label="Banner" />

      <div className="overflow-y-scroll mb-20 min-h-screen">
        <BannerContent data={data} />
      </div>

      {showUploadModal && (
        <ModalFrame>
          <UploadModal close={() => setShowUploadModal(false)} getData={getData} tab="banner" />
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
