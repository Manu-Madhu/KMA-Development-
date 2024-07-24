import PageEndQuery from '@/components/user/Common/PageEndQuery'
import UnderlinedHeading from '@/components/user/Common/UnderlinedHeading'
import EBookCard from '@/components/user/Common/EBookCard'
import { eLibraryData } from '@/data/e_library'
import React from 'react'

function Page() {
    return (
        <div className='max-w-screen-xl p-3 mx-auto'>
            <UnderlinedHeading text="Reports" />
            <div className='grid grid-cols-3 w-full max-md:grid-cols-2 max-sm:grid-cols-1 gap-3 mt-14'>
                {
                    eLibraryData.map((data) => (
                        <EBookCard
                            key={data.id}
                            title={data.title}
                            type={data.type}
                            thumbnailUrl={data.thumbnailUrl}
                            downloadLink={data.downloadLink}
                        />
                    ))
                }
            </div>
            <div className="my-20">
                <PageEndQuery
                    heading="Want to See More Resources?"
                    subheading="Click the button below to see more resources"
                    button={{ path: "/", title: "View More" }}
                />
            </div>
        </div>
    )
}

export default Page
