
function AwardsCard({ title, description, image }) {
    return (
        <div className="w-full overflow-clip flex flex-col rounded-2xl border border-gray-300 h-60">
            <img src={image} alt='history' className='w-full h-[70%] object-contain' />
            <div className="h-[30%] w-full bg-white flex flex-col p-3 pt-1">
                <h1 className="text-xl font-bold text-primaryColor">
                    {title}
                </h1>
                <p className='text-left text-xs line-clamp-2'>{description}</p>
            </div>
        </div>
    )
}

export default AwardsCard
