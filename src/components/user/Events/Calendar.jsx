"use client";

import {
  add,
  differenceInDays,
  endOfMinute,
  endOfMonth,
  startOfMonth,
  sub,
} from "date-fns";
import { useState } from "react";
import CalendarCell from "./CalendarCell";
import { eventdata } from "@/data/event_calendar_data";

const dayOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function Calendar() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(new Date());

  let startDate = startOfMonth(selectedDate);
  let endDate = endOfMonth(selectedDate);
  let prefixDays = startDate.getDay();
  let nextMonthDays = 6 - endDate.getDay();
  let numDays = differenceInDays(endDate, startDate) + 1;
  let prevMonthDays =
    differenceInDays(startDate, startOfMonth(sub(startDate, { months: 1 }))) -
    1;
  const prevMonth = () => {
    setSelectedDate(sub(selectedDate, { months: 1 }));
  };
  const nextMonth = () => {
    setSelectedDate(add(selectedDate, { months: 1 }));
  };
  return (
    <div className=" rounded-xl border-gray-400 flex flex-col justify-between">
      <div className="my-6 font-semibold flex items-center justify-between">
        <h2>
          {months[selectedDate.getMonth()] + " " + selectedDate.getFullYear()}
        </h2>
        <div>
          <button
            onClick={prevMonth}
            className="text-black bg-red-200 px-4 py-2 rounded-lg  text-sm"
          >
            Prev
          </button>
          <button
            className="text-black bg-red-200 px-4 py-2 rounded-lg  ml-2 text-sm"
            onClick={nextMonth}
          >
            Next
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 w-full border rounded-xl overflow-hidden">
        {dayOfTheWeek.map((day, index) => (
          <div
            key={index}
            className="border w-full text-sm font-medium text-gray-500 py-2 flex justify-center"
          >
            <h4>{day}</h4>
          </div>
        ))}
        {Array.from({ length: prefixDays }).map((_, index) =>
          index === 0 ? (
            <CalendarCell
              current={false}
              date={prevMonthDays - (prefixDays - 1 - index)}
              key={index}
            />
          ) : (
            <CalendarCell
              current={false}
              date={prevMonthDays - (prefixDays - 1 - index)}
              key={index}
            />
          )
        )}
        {Array.from({ length: numDays }).map((_, index) =>
          index === 0 ? (
            <CalendarCell
              current={true}
              date={index}
              events={eventdata[`${index + 1}`]}
              key={index}
            />
          ) : (
            <CalendarCell
              isToday={today.getDate() && index + 1}
              date={index}
              events={eventdata[`${index + 1}`]}
              key={index}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Calendar;
