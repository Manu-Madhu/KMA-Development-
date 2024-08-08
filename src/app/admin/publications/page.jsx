"use client"; // Add this directive at the top

import React, { useState } from "react";
import TableFilter from "@/components/admin/common/TableFilter";
import TopPart from "@/components/admin/common/TopPart";
import ModalFrame from "@/components/admin/common/ModalFram"; // Ensure this path is correct
import AddMagazineForm from "@/components/admin/common/AddMagazineForm";
import Publication from "@/components/admin/publication/Publication";

const PublicationPage = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
    <div>
      <TopPart
        title={"Manage Publications"}
        type={{ name: "button", content: "Create New" }}
        onClick={() => setShowUploadModal(true)}
      />
      <TableFilter label="Publication" />
      
      <div className="overflow-y-scroll mb-20 min-h-screen">
        <Publication />
      </div>

      {showUploadModal && (
        <ModalFrame>
          <AddMagazineForm close={() => setShowUploadModal(false)} />
        </ModalFrame>
      )}
    </div>
  );
}

export default PublicationPage;
