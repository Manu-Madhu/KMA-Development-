import AboutKMADescription from '@/components/user/about/AboutKMADescription'
import AboutVideoCard from '@/components/user/about/AboutVideoCard'
import AwardsAndRecognitions from '@/components/user/about/AwardsAndRecognitions'
import HistoryBanner from '@/components/user/about/HistoryBanner'
import OurHistory from '@/components/user/about/OurHistory'
import PageEndQuery from '@/components/user/Common/PageEndQuery'
import React from 'react'

function Page() {
    return (
        <div >
            <AboutKMADescription />
            <AboutVideoCard />
            <HistoryBanner />
            <OurHistory />
            <AwardsAndRecognitions />
            <PageEndQuery heading={`Interested in Becoming a Member?`} subheading={`Click the register button below to see the procedures`} button={{ title: "Register now" }} />
        </div>
    )
}

export default Page
