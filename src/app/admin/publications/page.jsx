
"use client"; // Add this directive at the top

import React, { useEffect, useState } from "react";
import TableFilter from "@/components/admin/common/TableFilter";
import TopPart from "@/components/admin/common/TopPart";
import ModalFrame from "@/components/admin/common/ModalFram"; // Ensure this path is correct
import AddMagazineForm from "@/components/admin/common/AddMagazineForm";
import Publication from "@/components/admin/publication/Publication";
import axios from "@/axios-folder/axios";
import { publicationsRoute } from "@/utils/Endpoint";
import CardGroup from "@/components/admin/cards/CardGroup";

const PublicationPage = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(publicationsRoute);
      console.log({ response })
      if (response.status === 200) {
        setData(response?.data?.publications)
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
        title="Manage Publications"
        type={{ name: "button", content: "Create New" }}
        onClick={() => setShowUploadModal(true)}
      />
      <TableFilter label="Publication" />
      
      <CardGroup data={data} />

      {showUploadModal && (
        <ModalFrame>
          <AddMagazineForm 
            close={() => setShowUploadModal(false)} 
            heading="Add Publication" 
          />
        </ModalFrame>
      )}
    </div>
  );
}

export default PublicationPage;

