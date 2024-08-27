'use client'
import PageEndQuery from "@/components/user/Common/PageEndQuery";
import UnderlinedHeading from "@/components/user/Common/UnderlinedHeading";
import EBookCard from "@/components/user/Common/EBookCard";
import React from "react";
import useFetchPublications from "@/hooks/publicationHooks/useGetPublictions";

function Page() {
  const {publications,loading} = useFetchPublications();
  if(loading) return <div class=" flex justify-center items-center">
  <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
</div>

  return (
    <>
      <div className="max-w-screen-xl p-3 mx-auto pt-10">
        <UnderlinedHeading text="Publications" />
        <div className="grid grid-cols-3 w-full max-md:grid-cols-2 max-sm:grid-cols-1 gap-3 mt-14">
          {publications.map((data) => (
            <EBookCard
              key={data.id}
              title={data.title}
              type={data.type}
              thumbnailUrl={data.coverImageUrl}
              downloadLink={data.fileUrl}
            />
          ))}
        </div>
      </div>
      <div className="mt-20">
        <PageEndQuery
          heading="Want to See More Resources?"
          subheading="Click the button below to see more resources"
          button={{ path: "/", title: "View More" }}
        />
      </div>
    </>
  );
}

export default Page;
