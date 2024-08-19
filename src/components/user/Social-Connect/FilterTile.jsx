
import { FaCheck } from 'react-icons/fa6'

function FilterTile({ isSelected, platform, setSelectedPlatform, setUnSelectedPlatform }) {
    return (
        <button
            onClick={() => {
                if (isSelected) {
                    setSelectedPlatform((prev) => prev.filter((item) => item.id !== platform.id))
                    setUnSelectedPlatform((prev) => [...prev, platform])
                } else {
                    setSelectedPlatform((prev) => [...prev, platform])
                    setUnSelectedPlatform((prev) => prev.filter((item) => item.id !== platform.id))
                }
            }}
            className={`px-5 py-2 max-md:text-sm max-md:px-4 h-fit w-fit text-nowrap transition duration-300 ease-in-out flex items-center gap-2 font-light rounded-full ${isSelected ? "bg-primaryColor  text-white" : "border border-gray-400"}`}>
            <FaCheck className={`${isSelected ? "" : "hidden"}`} /> {platform.name}
        </button>
    )
}

export default FilterTile
