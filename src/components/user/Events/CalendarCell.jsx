function CalendarCell({
  date,
  events = [],
  current = true,
  isToday = false,
  onEventClick,
}) {

  return (
    <div
      className={`border text-sm h-[8rem] max-md:h-[3rem] relative flex flex-col items-start p-2 max-md:p-1 group hover:bg-[#FFB9B9] ease-in-out duration-300 cursor-pointer
                  ${
                    isToday ? "bg-yellow-100 border-yellow-400" : ""
                  }  // Highlight today
              `}
      onClick={() => onEventClick(date)}
    >
      <h4 className={`${current ? "" : "text-gray-400"}`}>{date}</h4>

      <div className="h-full flex md:flex-col-reverse max-md:rounded-full gap-1 w-full">
        {/* Show if there are any events */}
        {events.length > 0 ? (
          events.map((event, index) => (
            <div
              key={index}
              className="py-[2px] px-[5px] rounded-md max-md:p-0 max-md:size-1 w-fit bg-green-300 group-hover:bg-[#FF5C67] group-hover:text-white"
            >
              <p className="line-clamp-1 max-md:hidden text-left text-xs">
                {event}
              </p>
            </div>
          ))
        ) : (
          <p className="text-xs text-gray-400">No events</p>
        )}
      </div>
    </div>
  );
}

export default CalendarCell;
