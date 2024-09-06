import PageEndQuery from "@/components/user/Common/PageEndQuery";
import Banner from "@/components/user/member/Banner";
import BottomImage from "@/components/user/member/BottomImage";
import Category from "@/components/user/member/Category";
import SubscriptionFeesTable from "@/components/user/member/SubscriptionFeesTable";
import React from "react";

const Member = () => {
  return (
    <div>
      <Banner />
      <section>
        <Category />
      </section>
      <section>
        <SubscriptionFeesTable/>
      </section>

      <section>
        <PageEndQuery
          heading={`Interested in Becoming a Member?`}
          subheading={`Click the register button below to see the procedures`}
          button={{ title: "Register Now", path: "/registration" }}
        />
      </section>
    </div>
  );
};

export default Member;
