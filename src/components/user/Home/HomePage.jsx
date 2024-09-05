import React from "react";
import LandingPart from "./LandingPart";
import Stats from "./Stats";
import HomeEvents from "./HomeEvents";
import ManagingDirectors from "./ManagingDirectors";
import MemberBenefits from "./benefits/MemberBenefits";
import Articles from "./Articles";
import HomeRegister from "./Register/HomeRegister";
import AwardSlideCards from "./AwardSlideCards";
import ArticleSlideCards from "./ArticleSlideCards";
import KmaVideo from "./KmaVideo/KmaVideo";
import DontTakeCards from "./DontTakeCards";
import AboutKMA from "./AboutKMA";
import Mission from "./Mission";
import Flagship from "./Flagship";
import RotateGallery from "./RotateGallery";
import YearVideoBanner from "./YearVideoBanner";
import OfficeBearers from "./OfficeBearers";
import Testimonials from "./testimonial/Testimonials";
import KMACSRAwards from "./KMACSRAwards";

function HomePage() {
  return (
    <div>
      <LandingPart />
      <AwardSlideCards />
      <AboutKMA />
      <div className="p-3 lg:p-0">
        <Stats />
      </div>
      <KmaVideo />
      <Mission />
      <HomeEvents />
      <Flagship />
      <MemberBenefits />
      <DontTakeCards />
      <ManagingDirectors />
      <ArticleSlideCards />
      <Articles />
      <HomeRegister />
      {/* <RotateGallery /> */}
      {/* <YearVideoBanner /> */}
      {/* <OfficeBearers /> */}
      {/* <KMACSRAwards /> */}
      {/* <Testimonials /> */}
    </div>
  );
}

export default HomePage;
