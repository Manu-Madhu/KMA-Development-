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
    <div className="rounded-2xl overflow-clip h-[19rem] relative">
     <img src={thumbnailUrl} alt='Thumbnail' className='object-cover h-full' />
      <div className="h-22 absolute p-4 bg-gray-700/80 flex items-center justify-between bottom-0 w-full backdrop-blur-xl">
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
