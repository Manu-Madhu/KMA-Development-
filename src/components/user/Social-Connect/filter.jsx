'use client'
import { useEffect, useState } from 'react'
import FilterTile from './FilterTile'
import { RxCross1 } from "react-icons/rx";
import useFetchPlatforms from '@/hooks/socialConnectHooks/useGetPlatforms';
  
  function Filter({ onFilterChange }) {
    const { platforms, loading } = useFetchPlatforms();
    const [selectedPlatform, setSelectedPlatform] = useState([]);
    const [unSelectedPlatform, setUnSelectedPlatform] = useState([]);
  
    useEffect(() => {
      if (!loading && platforms.length > 0) {
        setUnSelectedPlatform(platforms);
      }
    }, [platforms, loading]);

  useEffect(() => {
    // Notify parent component of the selected platforms
    onFilterChange(selectedPlatform);
  }, [selectedPlatform, onFilterChange]);
  
    return (
      <div className='w-full mt-16 max-md:mt-8'>
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
                setSelectedPlatform([]);
                setUnSelectedPlatform(platforms);
              }}
              className={`${selectedPlatform.length === 0 ? "hidden" : ""} border border-gray-400 py-2 px-5 rounded-full`}>
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
    );
  }
  
  export default Filter;