import PageEndQuery from '@/components/user/Common/PageEndQuery'
import UnderlinedHeading from '@/components/user/Common/UnderlinedHeading'
import ScrollProgress from '@/components/user/PastPresidents/ScrollProgress'
import React from 'react'

function Page() {
    return (
        <>
        <div className='max-w-screen-xl mx-auto p-3'>
            <div className='mt-10'>
                <UnderlinedHeading heading={"Past "} text="Presidents'" />
            </div>
            <div className='relative h-fit mt-20'>
                <ScrollProgress />
            </div>


        </div>
            <PageEndQuery heading={`View all Members`} subheading={`Click the button below to see all members`} button={{ title: "All Members", path:'/managing-committee' }} />
        </>
    )
}

export default Page
