
function HistoryCard({ title, description, image }) {
    return (
        <div className="w-full overflow-clip flex flex-col rounded-2xl border border-gray-300 h-60">
            <img src={image} alt='history' className='w-full h-[65%] object-cover' />
            <div className="h-[35%] w-full bg-white pb-3 px-3 pt-2">
                <h1 className="text-xl font-bold text-primaryColor">
                    {title}
                </h1>
                <p className='text-left text-[12px] text-[#3E3E59] line-clamp-2'>{description}</p>
            </div>
        </div>
    )
}

export default HistoryCard
