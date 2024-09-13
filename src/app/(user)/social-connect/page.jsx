'use client'
import ArticleCard from "@/components/user/Common/ArticleCard";
import PageEndQuery from "@/components/user/Common/PageEndQuery";
import UnderlinedHeading from "@/components/user/Common/UnderlinedHeading";
import Filter from "@/components/user/Social-Connect/filter";
import { followUsLinks } from "@/data/follow_us";
import useFetchSocialConnect from "@/hooks/socialConnectHooks/useGetSocialConnect";
import { useState } from "react";
import Link from "next/link";

function Page() {
  const { socialConnects, loading } = useFetchSocialConnect();
  const [filteredPlatforms, setFilteredPlatforms] = useState([]);

  const handleFilterChange = (selectedPlatforms) => {
    setFilteredPlatforms(selectedPlatforms);
  };



  if(loading) return <div class=" flex justify-center items-center">
  <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
</div>

// Filter the socialConnects based on the selected platforms
const filteredConnects = filteredPlatforms.length > 0
? socialConnects.filter(connect => filteredPlatforms.some(platform => platform.name === connect.platform.name))
: socialConnects;

  
  return (
    <>
      <div className="pt-10 max-w-screen-xl min-h-screen mx-auto w-full p-3">
          <UnderlinedHeading heading={" Social "} text="Connect" />
          
          <Filter onFilterChange={handleFilterChange} />
        <div className="w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3 mt-6 mb-20">
        {filteredConnects.length > 0 ? (
            filteredConnects.map((connect) => (
              <ArticleCard
                key={connect._id}
                title={connect.title}
                textColor={connect.textColor}
                platform={connect.platform.name}
                type={connect.type}
                thumbnailUrl={connect.coverImageUrl}
                link={connect.link}
              />
            ))
          ) : (
            <div className="col-span-3 max-md:col-span-2 max-sm:col-span-1 text-center text-2xl text-black">
              No data available
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center">
          <UnderlinedHeading heading={"Follow "} text="Us" />
          <div className="grid grid-cols-4 max-md:grid-cols-2 w-fit mt-14 gap-4">
            {followUsLinks.map((item, index) => (
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <div
                className="p-3 flex border border-gray-400 w-64 max-sm:w-40 rounded-full items-center gap-3"
                key={index}
              >
                <div className="size-9 rounded-full overflow-clip object-cover">
                  <img src={item.icon} alt= {item.platform} className="" />
                </div>
                <p className="text-black text-lg max-sm:text-base font-semibold">
                  {item.platform}
                </p>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <PageEndQuery
        heading={"Want to See More Resources?"}
        subheading={"Click the button below to see more resources"}
        button={{ title: "View More" }}
      />
    </>
  );
}

export default Page;
