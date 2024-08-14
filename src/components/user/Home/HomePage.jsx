import React from 'react'
import LandingPart from './LandingPart'
import KMACSRAwards from './KMACSRAwards'
import Stats from './Stats'
import HomeEvents from './HomeEvents'
import OfficeBearers from './OfficeBearers'
import ManagingDirectors from './ManagingDirectors'
import MemberBenefits from './MemberBenefits'
import Articles from './Articles'
import Testimonials from './testimonial/Testimonials'
import HomeRegister from './Register/HomeRegister'
import AwardSlideCards from './AwardSlideCards'
import ArticleSlideCards from './ArticleSlideCards'
import DontTakeCards from './DontTakeCards'

function HomePage() {
    return (
        <div>
            <LandingPart />
            < AwardSlideCards />
            <KMACSRAwards />
            <Stats />
            <HomeEvents />
            <OfficeBearers />
            <ManagingDirectors />
            <MemberBenefits />
            <DontTakeCards/>
            <ArticleSlideCards/>
            <Articles />
            {/* <Testimonials /> */}
            <HomeRegister />
        </div>
    )
}

export default HomePage
