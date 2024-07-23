
import { FaPlay } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import PageEndQuery from "../Common/PageEndQuery";
function EBookCard({ title, type, thumbnailUrl, downloadUrl }) {
    return (
        <div className='rounded-2xl overflow-clip h-[19rem] relative'>
            <img src={thumbnailUrl} alt='Thumbnail' className='object-cover h-full' />
            <div className='h-22 absolute p-4 bg-gray-700/80 flex items-center justify-between bottom-0 w-full backdrop-blur-xl'>
                <div>
                    <p
                        className={`font-bold text-[#FF5C67]`}>{type}</p>
                    <p className='text-white text-lg'>{title}</p>
                </div>
                <button className="bg-white py-2 px-4 flex items-center gap-2 rounded-full font-medium text-sm">
                    <LuDownload />    Download
                </button>
            </div>
            
        </div>
    )
}

export default EBookCard
