

function ArticleCard() {
    return (
        <div className='rounded-2xl overflow-clip h-[19rem] relative'>
            <iframe width="100%" height="100%" className='object-cover' src="https://www.youtube.com/embed/XcBMVtFvsxI?si=D8WgnllHKGvAbCo9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className='h-22 absolute p-4 bg-gray-700/80 bottom-0 w-full backdrop-blur-xl'>
                <p className='text-[#FF5C67] font-bold'>Youtube</p>
                <p className='text-white text-lg'>How to be a good leader</p>
            </div>
        </div>
    )
}

export default ArticleCard
