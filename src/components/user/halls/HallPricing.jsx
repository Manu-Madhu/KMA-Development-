 export function HallPricing({ hoursArray, pax }) {
    return (
      <p className="font-light text-sm text-white">
        {hoursArray.map((item, index) => (
          <span key={index}>
            <span className="text-[#FF5C67] font-medium"> {item.hours}</span> Hrs. Rs.{" "}
            <span className="text-[#FF5C67] font-medium">{item.price}</span>
            +GST {index !== hoursArray.length - 1 && " "}
          </span>
        ))}
        Pax {pax}
      </p>
    );
  }
  