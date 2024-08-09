"use client";

import React, { useState } from "react";
import TableFilter from "@/components/admin/common/TableFilter";
import TopPart from "@/components/admin/common/TopPart";
import ModalFrame from "@/components/admin/common/ModalFram"; // Ensure correct import
import AddMagazineForm from "@/components/admin/common/AddMagazineForm";
import NewsletterList from "@/components/admin/newsletter/NewsletterList"; // Adjust the import path
import Publication from "@/components/admin/publication/Publication";

const ManageNewslettersPage = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
    <div>
      <TopPart
        title="Manage Newsletters"
        type={{ name: "button", content: "Create New " }}
        onClick={() => setShowUploadModal(true)}
      />
      <TableFilter label="Newsletter" />

      <div className="overflow-y-scroll mb-20 min-h-screen">
        <Publication />
      </div>

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
