
"use client";

import React, { useEffect, useState } from "react";
import TableFilter from "@/components/admin/common/TableFilter";
import TopPart from "@/components/admin/common/TopPart";
import ModalFrame from "@/components/admin/common/ModalFram"; // Ensure correct import
import AddMagazineForm from "@/components/admin/common/AddMagazineForm";
import NewsletterList from "@/components/admin/newsletter/NewsletterList"; // Adjust the import path
import Publication from "@/components/admin/publication/Publication";
import axios from "@/axios-folder/axios";
import { newsletterRoute } from "@/utils/Endpoint";
import CardGroup from "@/components/admin/cards/CardGroup";

const ManageNewslettersPage = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

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
        onClick={() => setShowUploadModal(true)}
      />
      <TableFilter label="Newsletter" />

      <CardGroup data={data} />

      {showUploadModal && (
        <ModalFrame>
          <AddMagazineForm 
            close={() => setShowUploadModal(false)} 
            heading="Add Magazine" // Pass the "Add Magazine" title here
          />
        </ModalFrame>
      )}
    </div>
  );
};
export default ManageNewslettersPage;

