'use client'
import PageEndQuery from "@/components/user/Common/PageEndQuery";
import UnderlinedHeading from "@/components/user/Common/UnderlinedHeading";
import useFetchArticleById from "@/hooks/articleHooks/useGetArticleById";
import Image from "next/image";
import React from "react";

const splitTitle = (title) => {
  if (!title) return { first: "", second: "" };

  const words = title.split(" ");
  if (words.length === 1) {
    return { first: "", second: title };
  }

  const second = words.pop();
  const first = words.join(" ");

  return { first, second };
};

const ArticleDetailedView = ({ params }) => {
  const { article, loading} = useFetchArticleById(params?.id);

if(loading) return <div class=" flex justify-center items-center">
  <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
</div>

  const title = splitTitle(article?.title);

  return (
    <>
      <div className="pt-10 max-w-screen-xl mx-auto w-full h-full p-3">
        <UnderlinedHeading heading={title?.first} text={title?.second} />

        <div className="my-10 md:my-16 h-full">
          <div className="w-full h-full md:h-[350px] rounded-2xl overflow-hidden">
            <img
              src={article?.coverImageUrl}
              alt="Banner Image"
              className="w-full object-cover h-full rounded-2xl"
            />
          </div>

          <div className="my-7 md:my-14">
            {article?.content && (
              <p className="mb-5 text-sm leading-6">{article?.content}</p>
            )}
          </div>

          <div>
            <h5 className="text-primaryColor text-sm font-[500]">
              {new Date(article?.createdAt).toLocaleDateString()}
            </h5>
            <p className="text-xs">
              Last edited:{" "}
              <span>
                {new Date(article?.updatedAt).toLocaleDateString()}
              </span>
            </p>
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

export default ArticleDetailedView;