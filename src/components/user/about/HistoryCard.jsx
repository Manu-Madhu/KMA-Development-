
function HistoryCard({ title, description, image }) {
    return (
        <div className="w-full overflow-clip flex flex-col rounded-2xl border border-gray-300 h-60">
            <img src={image} alt='history' className='w-full h-[68%] object-cover' />
            <div className="h-[32%] w-full bg-white pb-3 px-3 pt-1">
                <h1 className="text-xl font-bold text-primaryColor">
                    {title}
                </h1>
                <p className='text-left text-xs line-clamp-2'>{description}</p>
            </div>
        </div>
    )
}

export default HistoryCard
