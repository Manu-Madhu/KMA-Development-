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

function HomePage() {
    return (
        <div>
            <LandingPart />
            <KMACSRAwards />
            <Stats />
            <HomeEvents />
            <OfficeBearers />
            <ManagingDirectors />
            <MemberBenefits />
            <Articles />
            <Testimonials />
            <HomeRegister />
        </div>
    )
}

export default HomePage
