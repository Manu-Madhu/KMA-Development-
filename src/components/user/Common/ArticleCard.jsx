import Image from "next/image";
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
    <div data-aos="fade-down" data-aos-duration="1000" className="rounded-2xl overflow-clip h-[19rem] relative">
      <Image
        src={thumbnailUrl}
        alt="Article Thumbnail"
        fill
        className="object-cover"
        sizes=""
        priority
      />
      <div className="h-[80px] absolute p-4 bg-gray-700/80 bottom-0 w-full backdrop-blur-xl">
        <p
          style={{
            color: 'red',
          }}
          className={`font-bold`}
        >
          {platform}
        </p>
        <p className="text-white text-lg">{title}</p>
      </div>
      <div
        className={`p-4 inset-0 size-fit m-auto text-white rounded-full absolute cursor-pointer bg-[#2A282FCC] ${type == "video" ? "" : "hidden"
          }`}
      >
        {link ? <Link href={link}>{link?.name || <FaPlay />}</Link> : <FaPlay />}
      </div>
    </div>
  );
}

export default ArticleCard;
