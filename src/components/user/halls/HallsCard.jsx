import Link from "next/link";

function HallsCard({ isInquiryHidden = false, hall }) {
  return (
    <div className="rounded-2xl overflow-clip h-[19rem] relative max-w-[26rem]">
      <img src={hall?.image} alt="Hall Banner" className="object-cover" />
      <div className="h-22 absolute p-4 bg-gray-800/80 bottom-0 w-full backdrop-blur-xl">
        <h1 className="text-xl font-semibold text-white">{hall?.name}</h1>
        <div className="flex gap-4">
          <p className="font-light text-sm text-white">
            <span className="text-[#FF5C67] font-medium"> 8</span> Hrs. Rs.{" "}
            <span className="text-[#FF5C67] font-medium">
              {" "}
              {hall?.eightHsrPrice}
            </span>
            +GST <span className="text-[#FF5C67] font-medium"> 4</span> Hrs. Rs.{" "}
            <span className="text-[#FF5C67] font-medium">
              {" "}
              {hall?.fourHrsPrice}
            </span>
            +GST Pax 20
          </p>
          <Link href={`/halls/${hall?.id}`}>
            <button
              className={`bg-white text-primaryColor p-2 px-4 h-fit rounded-full font-medium ${
                isInquiryHidden ? "hidden" : ""
              }`}
            >
              inquire
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HallsCard;
