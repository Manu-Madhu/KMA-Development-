"use client";

import React, { useState } from "react";
import { add, sub, startOfMonth, endOfMonth, differenceInDays } from "date-fns";
import CalendarCell from "./CalendarCell";

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

function Calendar({ onDateClick, eventdata }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const today = new Date();
  const startDate = startOfMonth(selectedDate);
  const endDate = endOfMonth(selectedDate);
  const prefixDays = startDate.getDay();
  const numDays = differenceInDays(endDate, startDate) + 1;

  // Move to the previous month
  const prevMonth = () => setSelectedDate(sub(selectedDate, { months: 1 }));

  // Move to the next month
  const nextMonth = () => setSelectedDate(add(selectedDate, { months: 1 }));

  // When a day is clicked
  const handleDayClick = (day) => {
    const selectedDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);

    console.log(selectedDay)

    // Find if there is any event on this particular day
    const eventForDay = eventdata.find((event) => {
      const eventDate = new Date(event.date); // Event's date from the eventdata
      return eventDate.toDateString() === selectedDay.toDateString(); // Compare event date with the selected date
    });

    if (eventForDay) {
      onDateClick(eventForDay); // Pass the event to parent (for card display)
    }
  };

  return (
    <div className="rounded-xl border-gray-400 flex flex-col justify-between">
      <div className="my-6 font-semibold flex items-center justify-between">
        <h2>{months[selectedDate.getMonth()] + " " + selectedDate.getFullYear()}</h2>
        <div>
          <button
            onClick={prevMonth}
            className="text-black bg-red-200 px-4 py-2 rounded-lg text-sm"
          >
            Prev
          </button>
          <button
            onClick={nextMonth}
            className="text-black bg-red-200 px-4 py-2 rounded-lg ml-2 text-sm"
          >
            Next
          </button>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 w-full border rounded-xl overflow-hidden">
        {dayOfTheWeek.map((day, index) => (
          <div key={index} className="border w-full text-sm font-medium text-gray-500 py-2 flex justify-center">
            <h4>{day}</h4>
          </div>
        ))}
        
        {/* Empty cells for the days before the start of the month */}
        {Array.from({ length: prefixDays }).map((_, index) => (
          <CalendarCell key={index} current={false} date={index} />
        ))}
        
        {/* Actual calendar days */}
        {Array.from({ length: numDays }).map((_, index) => {
          const day = index + 1;
          const selectedDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
          
          // Find event for this day
          const eventForDay = eventdata.find((event) => {
            const eventDate = new Date(event.date);
            return eventDate.toDateString() === selectedDay.toDateString();
          });

          return (
            <CalendarCell
              key={index}
              current={true}
              date={day}
              onEventClick={() => handleDayClick(day)}
              events={eventForDay ? [eventForDay.title] : []} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
