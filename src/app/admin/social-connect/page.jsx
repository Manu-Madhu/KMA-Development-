"use client";

import React, { useState } from "react";
import TopPart from "@/components/admin/common/TopPart"; 
import TableFilter from "@/components/admin/common/TableFilter";
import SocialConnect from "@/components/admin/socialconnect/SocialConnect";
import ModalFrame from "@/components/admin/common/ModalFram";
import SocialConnectModal from "@/components/admin/socialconnect/SocialConnectModal";

const SocialConnectPage = () => {
  const [showSocialConnectModal, setShowSocialConnectModal] = useState(false);

  return (
    <div>
      <TopPart
        title={"Add social media content"}
        type={{ name: "button", content: "create new " }}
        onClick={() => setShowSocialConnectModal(true)} // Toggle SocialConnectModal visibility
      />
      <TableFilter />
      
      <div className="overflow-y-scroll mb-20 min-h-screen">
        <SocialConnect />
      </div>

      {showSocialConnectModal && (
        <ModalFrame>
          <SocialConnectModal close={() => setShowSocialConnectModal(false)} /> {/* Use SocialConnectModal */}
        </ModalFrame>
      )}
    </div>
  );
};

export default SocialConnectPage;
