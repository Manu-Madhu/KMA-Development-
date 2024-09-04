"use client"; // This component runs on the client side
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ArticleCard from "../Common/ArticleCard";
import cover from "../../../../public/assets/about/about1.png";
import axios from "@/axios-folder/axios";
import { socialConnectRoute } from "@/utils/Endpoint";

function Articles() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data on the client side
  useEffect(() => {
    const fetchSocialConnect = async () => {
      try {
        const res = await axios.get(socialConnectRoute);
        console.log(res)
        setData(res?.data?.socialConnects || []);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSocialConnect();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto w-full p-3 mt-28 lg:mt-36 pb-10 flex flex-col items-center">
      <h1 className="text-[2.8rem] max-md:text-[1.5rem] font-bold leading-[3.5rem] max-md:leading-9 text-center">
        <span className="relative mr-3">
          Unlimited
          <Image
            src={"/assets/kma csr awards/Vector.png"}
            width={500}
            height={500}
            className="absolute right-0 -bottom-2 max-md:-bottom-1 w-full h-4 max-md:h-2"
            alt="Vector"
          />
        </span>
        Access to All the <br /> Resources, Articles and Insights
      </h1>
      <div className="w-full grid grid-cols-3 max-sm:grid-cols-1 gap-4 mt-10 lg:mt-12">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.map((item, index) => (
            <ArticleCard
              key={item._id}
              type="video"
              title={item?.title}
              platform={item?.platform?.name}
              thumbnailUrl={item?.coverImageUrl}
              textColor="text-[#FF5C67]"
              link={item?.link}
            />
          ))
        )}
      </div>
      <div className="flex justify-center relative mb-10">
        <button
          className="buttonAnimation overflow-hidden absolute mx-auto px-6 py-2 mt-12 border 
        border-black/20 w-fit rounded-full font-semibold text-red-600"
        >
          <span className="truncate">View All</span>
        </button>
      </div>
    </div>
  );
}

export default Articles;

// "use client"; // This component runs on the client side
// import React from "react";
// import Image from "next/image";

// function Articles() {
//   // Static video data
//   const videoData = [
//     {
//       _id: "1",
//       title: "Video 1",
//       platform: { name: "YouTube" },
//       videoUrl: "https://www.youtube.com/embed/IlbV1oxvoug",
//     },
//     {
//       _id: "2",
//       title: "Video 2",
//       platform: { name: "YouTube" },
//       videoUrl: "https://www.youtube.com/embed/ApilC9AgPbY",
//     },
//     {
//       _id: "3",
//       title: "Video 3",
//       platform: { name: "YouTube" },
//       videoUrl: "https://www.youtube.com/embed/cC5A1T5Itys",
//     },
//     {
//       _id: "4",
//       title: "Video 4",
//       platform: { name: "YouTube" },
//       videoUrl: "https://www.youtube.com/embed/B-yeUWo83Kw",
//     },
//   ];

//   return (
//     <div className="max-w-screen-xl mx-auto w-full p-3 mt-28 lg:mt-36 pb-10 flex flex-col items-center">
//       <h1 className="text-[2.8rem] max-md:text-[1.5rem] font-bold leading-[3.5rem] max-md:leading-9 text-center">
//         <span className="relative mr-3">
//           Unlimited
//           <Image
//             src={"/assets/kma csr awards/Vector.png"}
//             width={500}
//             height={500}
//             className="absolute right-0 -bottom-2 max-md:-bottom-1 w-full h-4 max-md:h-2"
//             alt="Vector"
//           />
//         </span>
//         Access to All the <br /> Resources, Articles and Insights
//       </h1>

//       {/* Video Grid */}
//       <div className="w-full grid grid-cols-3  max-sm:grid-cols-1 gap-4 mt-10 lg:mt-12">
//         {videoData.map((item) => (
//           <div key={item._id} className="w-100 h-[300px] ">
//             <iframe
//               className="w-full h-full border rounded-3xl"
//               src={item.videoUrl}
//               title={item.title}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className="flex justify-center relative mb-10">
//         <button
//           className="buttonAnimation overflow-hidden absolute mx-auto px-6 py-2 mt-12 border 
//         border-black/20 w-fit rounded-full font-semibold text-red-600"
//         >
//           <span className="truncate">View All</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Articles;


