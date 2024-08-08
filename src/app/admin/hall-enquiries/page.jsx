import TableFilter from "@/components/admin/common/TableFilter";
import TopPart from "@/components/admin/common/TopPart";
import HallTable from "@/components/admin/hallEnquiries/HallTable";
import { DummyTableData } from "@/data/admin/TableData";
import React from "react";

const HallEnquiryPage = () => {
  // mapping the needed fields from the data
  const filteredData = DummyTableData.map(
    ({ id, name, hall, email, phone }) => ({
      id,
      name,
      hall,
      email,
      phone,
    })
  );

  return (
    <main>
      <TopPart title={"View Enquiries for halls"} type={{ name: "search" }} />
      <TableFilter />

      <div className="overflow-y-scroll mb-10">
        <HallTable data={filteredData} />
      </div>
    </main>
  );
};

export default HallEnquiryPage;
