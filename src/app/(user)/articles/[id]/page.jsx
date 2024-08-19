import PageEndQuery from "@/components/user/Common/PageEndQuery";
import UnderlinedHeading from "@/components/user/Common/UnderlinedHeading";
import { Articles } from "@/data/Articles";
import Image from "next/image";
import React from "react";

// get the initial data
const getArticle = async (id) => {
  try {
    // const data = fetch().then;
    const data = Articles.find((item) => item?._id == id);
    return data;
  } catch (error) {
    console.log(error, "halo error");
  }
};

// get the split title
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

const ArticleDetailedView = async ({ params }) => {
  const articleData = await getArticle(params?.id);
  const title = splitTitle(articleData?.title);
  return (
    <>
      <div className="pt-5 md:pt-10 max-w-screen-xl mx-auto w-full h-full p-3">
        {/* Heading */}
        <UnderlinedHeading heading={title?.first} text={title?.second} />

        {/* Section  */}
        <div className="my-7 md:my-16 h-full">
          <div className="w-full h-full md:h-[350px] rounded-2xl overflow-hidden">
            <img
              src={articleData?.thumbnailUrl}
              alt="Banner Image"
              className="w-full object-cover h-full rounded-2xl"
            />
          </div>

          <div className=" my-7 md:my-14">
            {articleData?.details.map((item) => (
              <>
                <p className="mb-5 text-sm leading-6">{item?.content}</p>
              </>
            ))}
          </div>

          <div>
            <h5 className="text-primaryColor text-sm font-[500]">
              12 March 2023
            </h5>
            <p className="text-xs">
              Last edited: <span>{articleData?.date}</span>
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Part */}
      <PageEndQuery
        heading={"Want to See More Resources?"}
        subheading={"Click the button below to see more resources"}
        button={{ title: "View More", path: "/" }}
      />
    </>
  );
};

export default ArticleDetailedView;
