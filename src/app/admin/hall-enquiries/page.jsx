import TableFilter from "@/components/admin/common/TableFilter";
import TopPart from "@/components/admin/common/TopPart";
import React from "react";

const HallEnquiryPage = () => {
  return (
    <main>
      <TopPart title={"View Enquiries for halls"} type={{ name: "search" }} />
      <TableFilter />
    </main>
  );
};

export default HallEnquiryPage;
