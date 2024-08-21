import axios from "@/axios-folder/axios";
import TableFilter from "@/components/admin/common/TableFilter";
import TopPart from "@/components/admin/common/TopPart";
import HallTable from "@/components/admin/hallEnquiries/HallTable";
import { DummyTableData } from "@/data/admin/TableData";
import { hallEnquiriesRoute } from "@/utils/Endpoint";
import React from "react";

const HallEnquiryPage = async () => {
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

  let data = [];

    const getData = async () => {
        try {
            const response = await axios.get(hallEnquiriesRoute);
            console.log({ response })
            if (response.status === 200) {
                data = response?.data?.hallEnquiries
            }
        } catch (error) {
            console.log(error)
        }
    }

    await getData()

  return (
    <main>
      <TopPart title={"View Enquiries for halls"} type={{ name: "search" }} />
      <TableFilter />

      <div className="overflow-y-scroll mb-10">
        <HallTable data={data} />
      </div>
    </main>
  );
};

export default HallEnquiryPage;
