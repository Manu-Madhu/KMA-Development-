"use client";
import Article from "@/components/user/article/Article";
import PageEndQuery from "@/components/user/Common/PageEndQuery";
import UnderlinedHeading from "@/components/user/Common/UnderlinedHeading";
import useFetchArticles from "@/hooks/articleHooks/useGetArticles";

import React from "react";

const ArticlePage = () => {
  const { articles, loading, error } = useFetchArticles();

  if (loading)
    return (
      <div class=" flex justify-center items-center">
        <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );

  return (
    <>
      <div className="pt-10 max-w-screen-xl min-h-screen mx-auto w-full p-3">
        <UnderlinedHeading heading="" text="Articles" />
        <div className="my-10 md:my-16">
          <div className="grid grid-cols-3 w-full max-md:grid-cols-2 max-sm:grid-cols-1 gap-3 mt-14">
            {articles.map((item) => (
              <Article
                key={item?._id}
                thumbnailUrl={item?.coverImageUrl}
                textColor="#FF5C67"
                platform={item?.date}
                title={item?.title}
                link={{
                  link: `/articles/${item?._id}`,
                  name: "View",
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <PageEndQuery
        heading={"Want to See More Resources?"}
        subheading={"Click the button below to see more resources"}
        button={{ title: "View More", path: "/" }}
      />
    </>
  );
};

export default ArticlePage;
