import React from "react";
import Link from "next/link";
import Image from "next/image";

const Article = ({
  type = "video",
  title,
  platform,
  thumbnailUrl,
  textColor = "text-[#FF5C67]",
  link,
}) => {
  return (
    <div className="rounded-2xl overflow-hidden  flex  flex-col ">
      <img
        src={thumbnailUrl}
        alt="Article Thumbnail"
        className="object-cover "
      />
      <div className="p-4 bg-[#2A282F]/80 w-full min-h-[10px] backdrop-blur-xl flex justify-between items-center">
        <div className="text-sm">
          <p style={{ color: textColor }} className={`font-bold`}>
            {platform}
          </p>
          <p className="text-white text-lg">{title}</p>
        </div>
        <Link href={link?.link || ""}>
          <div
            className={`p-2 px-5 text-sm inset-0 size-fit  rounded-full bg-white `}
          >
            {link?.name}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Article;
