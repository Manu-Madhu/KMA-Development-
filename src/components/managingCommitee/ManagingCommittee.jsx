import React from "react";
import ManagingCard from "./ManagingCard";
import UnderlinedHeading from "../user/Common/UnderlinedHeading";

const ManagingCommittee = ({ title, content, dataListing, count }) => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="font-bold w-full text-start md:text-center text-3xl md:text-4xl my-5 md:my-10">
          <UnderlinedHeading text={title} />
        </h1>
        <div className="w-ful text-start my-5">
          <p>{content}</p>
        </div>
      </div>
      {!count ? (
        <>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-5 md:my-10 lg:mt-14 gap-5">
            {dataListing.map((item) => (
              <ManagingCard key={item?._id} data={item} />
            ))}
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-5 md:my-10 gap-5">
            {dataListing.map((item) => (
              <ManagingCard key={item?._id} data={item} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-5 md:my-10 lg:mt-14 gap-5">
            {dataListing.map((item) => (
              <ManagingCard key={item?._id} data={item} />
            ))}
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-5 md:my-10 gap-5">
            {dataListing.map((item) => (
              <ManagingCard key={item?._id} data={item} />
            ))}
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-5 md:my-10 lg:mt-14 gap-5">
            {dataListing.map((item) => (
              <ManagingCard key={item?._id} data={item} />
            ))}
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-5 md:my-10 gap-5">
            {dataListing.map((item) => (
              <ManagingCard key={item?._id} data={item} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ManagingCommittee;
