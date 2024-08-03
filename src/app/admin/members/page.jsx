import Table from "@/components/admin/common/Table";
import TopPart from "@/components/admin/common/TopPart";
import React from "react";

const MembersPage = () => {
  return (
    <main>
      <header>
        <TopPart title={"View and manage members"} type={{ name: "search", content:"Upload New" }} />
      </header>
      <section>
        <Table />
      </section>
    </main>
  );
};

export default MembersPage;
