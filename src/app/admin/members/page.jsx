import Table from "@/components/admin/common/Table";
import TableFilter from "@/components/admin/common/TableFilter";
import TopPart from "@/components/admin/common/TopPart";
import { DummyTableData } from "@/data/admin/TableData";
import React from "react";

const MembersPage = () => {
  // mapping the needed fields from the data
  const filteredData = DummyTableData.map(
    ({ id, name, Organization, status }) => ({
      id,
      name,
      Organization,
      status,
    })
  );

  console.log(filteredData);
  return (
    <main className="">
      <header>
        <TopPart title={"View and manage members"} type={{ name: "search" }} />
      </header>
      <section className="overflow-y-scroll mb-10">
        <TableFilter />
        <Table action={true} data={filteredData} />
      </section>
    </main>
  );
};

export default MembersPage;
