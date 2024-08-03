import Table from "@/components/admin/common/Table";
import TopPart from "@/components/admin/members/TopPart";
import React from "react";

const MembersPage = () => {
  return (
    <main>
      <header>
        <TopPart title={"View and manage members"} type={{ name: "search" }} />
      </header>
      <section>
        <Table />
      </section>
    </main>
  );
};

export default MembersPage;
