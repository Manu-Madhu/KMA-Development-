

function CalendarCell({ date, events = [], current = true, isToday = false }) {
    return (
        <div key={date} className="border text-sm h-[8rem] max-md:h-[3rem] relative flex flex-col items-start p-2 max-md:p-1">
            <h4 className={`${current ? '' : 'text-gray-400'}`}>{date + 1}</h4>
            <div className="h-full flex md:flex-col-reverse max-md:rounded-full gap-1 w-full">
                {
                    events.map((event, index) => (
                        <div key={index} className='py-[2px] px-[5px] rounded-md max-md:p-0 max-md:size-1 w-fit bg-green-300'>
                            <p key={index} className="line-clamp-1 max-md:hidden text-left text-xs">{event}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CalendarCell
