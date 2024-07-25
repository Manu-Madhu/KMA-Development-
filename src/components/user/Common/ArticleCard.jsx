import Link from "next/link";
import { FaPlay } from "react-icons/fa";
function ArticleCard({
  type = "video",
  title,
  platform,
  thumbnailUrl,
  textColor = "text-[#FF5C67]",
  link,
}) {
  return (
    <div className="rounded-2xl overflow-clip h-[19rem] relative">
      <img
        src={thumbnailUrl}
        alt="Article Thumbnail"
        className="object-cover h-full"
      />
      <div className="h-22 absolute p-4 bg-gray-700/80 bottom-0 w-full backdrop-blur-xl">
        <p
          style={{
            color: textColor,
          }}
          className={`font-bold`}
        >
          {platform}
        </p>
        <p className="text-white text-lg">{title}</p>
      </div>
      <div
        className={`p-4 inset-0 size-fit m-auto text-white rounded-full absolute bg-[#2A282FCC] ${
          type == "video" ? "" : "hidden"
        }`}
      >
        {link ? <Link href={link?.link}>{link?.name}</Link> : <FaPlay />}
      </div>
    </div>
  );
}

export default ArticleCard;
