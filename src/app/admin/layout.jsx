"use client";

import AdminNav from "@/components/admin/nav/AdminNav";
import SideOption from "@/components/admin/SideOption";
import React from "react";
import { AdminProvider } from "../Providers";

const layout = ({ children }) => {
  return (
    // <AdminProvider>
      <div className="h-screen max-h-screen overflow-hidden">
        <div>
          <AdminNav />
        </div>
        <div className="w-full h-full flex">
          <div className="w-[400px] h-full bg-[#F0F0F0] p-5 px-8  overflow-y-scroll hidden lg:block">
            <SideOption />
          </div>
          <div className="w-full md:p-5 md:px-8 overflow-y-scroll">{children}</div>
        </div>
      </div>

    // </AdminProvider>
  );
};

export default layout;
