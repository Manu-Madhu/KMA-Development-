"use client";

import React, { useState } from "react";
import TableFilter from "@/components/admin/common/TableFilter";
import TopPart from "@/components/admin/common/TopPart";
import ModalFrame from "@/components/admin/common/ModalFram";
import GalleryContent from "@/components/admin/gallery/GalleryContent";
import UploadModal from "@/components/admin/gallery/UploadModal"; 

const NewsletterPage = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
    <div>
      <TopPart
        title="Manage Newsletters"
        type={{ name: "button", content: "Create New" }}
        onClick={() => setShowUploadModal(true)}
      />
      <TableFilter label="Newsletter" />

      <div className="overflow-y-scroll mb-20 min-h-screen">
        <GalleryContent />
      </div>

      {showUploadModal && (
        <ModalFrame>
          <UploadModal />
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

export default NewsletterPage;
