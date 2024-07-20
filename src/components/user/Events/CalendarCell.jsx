import React from 'react'

function CalendarCell({ date, events = [], current = true, isToday = false }) {
    return (
        <div key={date} className="border text-sm h-[8rem] relative flex flex-col items-start p-2">
            <h4 className={`${current ? '' : 'text-gray-400'}`}>{date + 1}</h4>
            <div className="h-full overflow-hidden flex flex-col-reverse gap-1 w-full">
                {
                    events.map((event, index) => (
                        <div className='py-[2px] px-[5px] w-fit bg-yellow-100'>
                            <p key={index} className="line-clamp-1 text-left text-xs">{event}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CalendarCell
