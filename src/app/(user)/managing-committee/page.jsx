import PageEndQuery from "@/components/user/Common/PageEndQuery";
import ConductEvent from "@/components/user/Events/ConductEvent";
import ManagingCommittee from "@/components/user/managingCommitee/ManagingCommittee";
import { Managing ,OfficeBearers} from "@/data/Managing";
import React from "react";

const page = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto w-full p-3 ">
        <div>
          <ManagingCommittee
            heading={"Managing"}
            title={"committee 2024-2025"}
            content={`The Management of the Association is vested in a Managing 
            Committee of not more than sixteen elected members of which at least three 
            persons should be from Corporate Sector. The Managing Committee shall be elected 
            at the Annual General Meeting of the Association every year. There shall be 
            a President, two Vice Presidents, an Honorary Secretary, a Joint Secretary 
            and a Treasurer all of whom shall be elected by the Managing Committee and 
            will hold office for the duration of the Management Committee for which they 
            were elected. In addition to the elected members there are Co-opted Members and 
            Special Invitees.`}
            dataListing={Managing.slice(0, 13)}
          />
        </div>
        <div className="my-10 lg:my-20">
          <ManagingCommittee
            heading={"Co-opted"}
            title={" members 2024-2025"}
            content={`The Management of the Association is vested in a Managing 
            Committee of not more than sixteen elected members of which at least three 
            persons should be from Corporate Sector. The Managing Committee shall be elected 
            at the Annual General Meeting of the Association every year. There shall be 
            a President, two Vice Presidents, an Honorary Secretary, a Joint Secretary 
            and a Treasurer all of whom shall be elected by the Managing Committee and 
            will hold office for the duration of the Management Committee for which they 
            were elected. In addition to the elected members there are Co-opted Members and 
            Special Invitees.`}
            dataListing={Managing.slice(13)}
            count={4}
          />
        </div>
        <div className="my-5  lg:my-20">
          <ManagingCommittee
            heading={""}
            title={"Secretariat"}
            content={`The Management of the Association is vested in a Managing 
            Committee of not more than sixteen elected members of which at least three 
            persons should be from Corporate Sector. The Managing Committee shall be elected 
            at the Annual General Meeting of the Association every year. There shall be 
            a President, two Vice Presidents, an Honorary Secretary, a Joint Secretary 
            and a Treasurer all of whom shall be elected by the Managing Committee and 
            will hold office for the duration of the Management Committee for which they 
            were elected. In addition to the elected members there are Co-opted Members and 
            Special Invitees.`}
            dataListing={OfficeBearers}
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
