import AboutKMADescription from "@/components/user/about/AboutKMADescription";
import AwardsAndRecognitions from "@/components/user/about/AwardsAndRecognitions";
import HistoryBanner from "@/components/user/about/HistoryBanner";
import OurHistory from "@/components/user/about/OurHistory";
import PageEndQuery from "@/components/user/Common/PageEndQuery";
import RotateGallery from "@/components/user/Home/RotateGallery";
import React from "react";

function Page() {
  return (
    <div>
      <AboutKMADescription />
      <RotateGallery />
      <OurHistory />
      <AwardsAndRecognitions />
      <PageEndQuery
        heading={`Interested in Becoming a Member?`}
        subheading={`Click the register button below to see the procedures`}
        button={{ title: "Register now",path:"/registration" }}
      />
    </div>
  );
}

export default Page;
