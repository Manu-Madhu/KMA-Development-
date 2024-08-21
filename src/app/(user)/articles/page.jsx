import Article from "@/components/user/article/Article";
import PageEndQuery from "@/components/user/Common/PageEndQuery";
import UnderlinedHeading from "@/components/user/Common/UnderlinedHeading";
import { Articles } from "@/data/Articles";
import React from "react";

const ArticlePage = () => {
  return (
    <>
      <div className="pt-10 max-w-screen-xl mx-auto w-full p-3">
        <UnderlinedHeading heading="" text="Articles" />
        <div className="my-10 md:my-16">
          <div className="grid grid-cols-1 md:grid-cold-2 lg:grid-cols-4 gap-3">
            {Articles.map((item) => (
              <Article
                key={item?._id}
                thumbnailUrl={item?.thumbnailUrl}
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
