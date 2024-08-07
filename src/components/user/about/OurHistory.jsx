import { ourHistory } from "@/data/ourHistory"
import UnderlinedHeading from "../Common/UnderlinedHeading"
import HistoryCard from "./HistoryCard"

function OurHistory() {
    return (
        <div className='max-w-screen-xl p-3 mx-auto my-20'>
            <UnderlinedHeading heading='Our' text='History' />
            <div className="mt-16 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 w-full gap-4">
                {
                    ourHistory.map((history, index) => (
                        <HistoryCard key={index} title={history.title} description={history.description} image={history.image} />
                    ))
                }
            </div>
        </div>
    )
}

export default OurHistory
