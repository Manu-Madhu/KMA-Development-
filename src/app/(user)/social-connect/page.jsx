'use client'
import ArticleCard from "@/components/user/Common/ArticleCard";
import PageEndQuery from "@/components/user/Common/PageEndQuery";
import UnderlinedHeading from "@/components/user/Common/UnderlinedHeading";
import Filter from "@/components/user/Social-Connect/filter";
import { followUsLinks } from "@/data/follow_us";
import useFetchSocialConnect from "@/hooks/socialConnectHooks/useGetSocialConnect";

function Page() {
  const {socialConnects,loading}= useFetchSocialConnect();
  if(loading) return <div class=" flex justify-center items-center">
  <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
</div>
  
  return (
    <>
      <div className="max-w-screen-xl p-3 mx-auto">
        <div className="mt-10">
          <UnderlinedHeading heading={" Social "} text="Connect" />
        </div>
        <Filter />
        <div className="w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3 mt-6 mb-20">
          {socialConnects.map((connect) => (
            <ArticleCard
              key={connect._id}
              title={connect.title}
              textColor={connect.textColor}
              platform={connect.platform.name}
              type={connect.type}
              thumbnailUrl={connect.coverImageUrl}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center">
          <UnderlinedHeading heading={"Follow "} text="Us" />
          <div className="grid grid-cols-4 max-md:grid-cols-2 w-fit mt-14 gap-4">
            {followUsLinks.map((item, index) => (
              <div
                className="p-3 flex border border-gray-400 w-64 max-sm:w-40 rounded-full items-center gap-3"
                key={index}
              >
                <div className="size-9 rounded-full overflow-clip object-cover">
                  <img src={item.icon} alt="Facebook" className="" />
                </div>
                <p className="text-black text-lg max-sm:text-base font-semibold">
                  {item.platform}
                </p>
              </div>
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
