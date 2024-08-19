import React from 'react'
import VideoBackground from './VideoBackground'

function YearVideoBanner() {
    const sample = '/assets/home/sample.mp4'

    return (
        <div className='h-screen relative w-full flex flex-col items-center text-white bg-white'>
            <VideoBackground videoSrc={sample} />
        </div>
    )
}

export default YearVideoBanner
