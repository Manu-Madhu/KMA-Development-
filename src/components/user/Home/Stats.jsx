import React from 'react'
import StatsCard from './StatsCard'
import { home_stats } from '../../../data/home_stats'
function Stats() {
    return (
        <div className='w-11/12 mx-auto my-14  border border-gray-400 rounded-2xl py-14 max-md:py-10 flex max-md:flex-col max-md:gap-8 justify-around'>
            {home_stats.map((stat, index) => (
                <StatsCard key={index} title={stat.title} value={stat.value} />
            ))}
        </div>
    )
}

export default Stats
