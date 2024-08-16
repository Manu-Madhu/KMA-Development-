import PageEndQuery from "@/components/user/Common/PageEndQuery";
import ConductEvent from "@/components/user/Events/ConductEvent";
import ManagingCommittee from "@/components/user/managingCommitee/ManagingCommittee";
import { Managing } from "@/data/Managing";
import React from "react";

const page = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto w-full p-3 ">
        <div>
          <ManagingCommittee
            heading={"Managing"}
            title={"Committee"}
            content={`The Management of the Association is vested in a Managing 
            Committee of not more than sixteen elected members of which at least three 
            persons should be from Corporate Sector. The Managing Committee shall be elected 
            at the Annual General Meeting of the Association every year. There shall be 
            a President, two Vice Presidents, an Honorary Secretary, a Joint Secretary 
            and a Treasurer all of whom shall be elected by the Managing Committee and 
            will hold office for the duration of the Management Committee for which they 
            were elected. In addition to the elected members there are Co-opted Members and 
            FSpecial Invitees.`}
            dataListing={Managing}
          />
        </div>
        <div className="my-10 lg:my-20">
          <ManagingCommittee
            heading={"Office"}
            title={" Bearers"}
            content={`The Management of the Association is vested in a Managing 
            Committee of not more than sixteen elected members of which at least three 
            persons should be from Corporate Sector. The Managing Committee shall be elected 
            at the Annual General Meeting of the Association every year. There shall be 
            a President, two Vice Presidents, an Honorary Secretary, a Joint Secretary 
            and a Treasurer all of whom shall be elected by the Managing Committee and 
            will hold office for the duration of the Management Committee for which they 
            were elected. In addition to the elected members there are Co-opted Members and 
            FSpecial Invitees.`}
            dataListing={Managing}
          />
        </div>
        <div className="my-10 lg:my-20">
          <ManagingCommittee
            heading={""}
            title={"Council"}
            content={`The Management of the Association is vested in a Managing 
            Committee of not more than sixteen elected members of which at least three 
            persons should be from Corporate Sector. The Managing Committee shall be elected 
            at the Annual General Meeting of the Association every year. There shall be 
            a President, two Vice Presidents, an Honorary Secretary, a Joint Secretary 
            and a Treasurer all of whom shall be elected by the Managing Committee and 
            will hold office for the duration of the Management Committee for which they 
            were elected. In addition to the elected members there are Co-opted Members and 
            FSpecial Invitees.`}
            dataListing={Managing}
            count={4}
          />
        </div>
      </div>
      <PageEndQuery
        heading={"View Our Past Presidents"}
        subheading={"Click the button below to see our past presidents"}
        button={{ title: "Past Presidents", path: "/past-presidents" }}
      />
    </>
  );
};

export default page;
