'use client'
import { useState } from 'react'
import FilterTile from './FilterTile'
import { RxCross1 } from "react-icons/rx";

function Filter() {
    const [selectedPlatform, setSelectedPlatform] = useState([])
    const platforms = [
        { id: 1, name: 'Youtube' },
        { id: 2, name: 'Facebook' },
        { id: 3, name: 'Instagram' },
        { id: 4, name: 'Twitter' },
        { id: 5, name: 'LinkedIn' },
        { id: 6, name: 'Pinterest' },
    ]
    const [unSelectedPlatform, setUnSelectedPlatform] = useState(platforms)
    return (
        <div className='w-full mt-16 max-md:mt-8' >
            <p>Filter by platform</p>
            <div className='w-full overflow-x-scroll'>
                <div className="mt-3 w-fit flex gap-3">
                    {selectedPlatform.map((platform, index) => (
                        <FilterTile
                            key={index}
                            setSelectedPlatform={setSelectedPlatform}
                            setUnSelectedPlatform={setUnSelectedPlatform}
                            platform={platform}
                            isSelected
                        />
                    ))}
                    <button
                        onClick={() => {
                            setSelectedPlatform([])
                            setUnSelectedPlatform(platforms)
                        }}
                        className={`${selectedPlatform.length == 0 ? "hidden" : ""} border border-gray-400 py-2 px-5 rounded-full`}>
                        <RxCross1 />
                    </button>
                    {unSelectedPlatform.map((platform, index) => (
                        <FilterTile
                            key={index}
                            setSelectedPlatform={setSelectedPlatform}
                            setUnSelectedPlatform={setUnSelectedPlatform}
                            platform={platform}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Filter
