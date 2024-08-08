
"use client";

import React, { useState } from "react";
import TableFilter from "@/components/admin/common/TableFilter";
import TopPart from "@/components/admin/common/TopPart";
import ModalFrame from "@/components/admin/common/ModalFram";
import Publication from "@/components/admin/publication/Publication";
import AddMagazineForm from "@/components/admin/common/AddMagazineForm";  // Adjust the import path

const NewsletterPage = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
    <div>
      <TopPart
        title="Manage Newsletters"
        type={{ name: "button", content: "Create New Newsletter" }}
        onClick={() => setShowUploadModal(true)}
      />
      <TableFilter label="Newsletter" />

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
};

export default NewsletterPage;

