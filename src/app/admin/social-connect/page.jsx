
"use client";

import React, { useState, useEffect } from "react";
import TopPart from "@/components/admin/common/TopPart"; 
import TableFilter from "@/components/admin/common/TableFilter";
import SocialConnect from "@/components/admin/socialconnect/SocialConnect";
import ModalFrame from "@/components/admin/common/ModalFram";
import SocialConnectModal from "@/components/admin/socialConnect/SocialConnectModal_temp";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import axios from "@/axios-folder/axios";
import { socialConnectRoute } from "@/utils/Endpoint";

const SocialConnectPage = () => {
  const [showSocialConnectModal, setShowSocialConnectModal] = useState(false);

  const axiosPrivate = useAxiosPrivate();

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(socialConnectRoute);
      console.log({ response })
      if (response.status === 200) {
        setData(response?.data?.socialConnects)
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
        title={"Add social media content"}
        type={{ name: "button", content: "create new " }}
        onClick={() => setShowSocialConnectModal(true)} // Toggle SocialConnectModal visibility
      />
      <TableFilter />
      
      <div className="overflow-y-scroll mb-20 min-h-screen">
        <SocialConnect data={data} setData={setData} />
      </div>

      {showSocialConnectModal && (
        <ModalFrame>
          <SocialConnectModal close={() => setShowSocialConnectModal(false)} getData={getData} /> 
        </ModalFrame>
      )}
    </div>
  );
};

export default SocialConnectPage;

