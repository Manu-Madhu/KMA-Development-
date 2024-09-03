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
    <div data-aos="fade-down" data-aos-duration="1000" className="rounded-2xl overflow-clip
     h-[19rem] relative">
      <Image
        src={thumbnailUrl}
        alt="Article Thumbnail"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
// import Image from "next/image";
// import Link from "next/link";
// import { FaPlay } from "react-icons/fa";

// function ArticleCard({
//   type = "video",
//   title,
//   platform,
//   thumbnailUrl,
//   textColor = "text-[#FF5C67]",
//   link,
// }) {
//   return (
//     <div data-aos="fade-down" data-aos-duration="1000" className="rounded-2xl overflow-clip h-[19rem] relative">
//       {/* Video Thumbnail */}
//       <Image
//         src={thumbnailUrl}
//         alt="Article Thumbnail"
//         fill
//         className="object-cover"
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         priority
//       />

//       {/* Text area on top 1/4th of the video */}
//       <div className="absolute top-0 w-full h-[25%] bg-gray-700/80 p-4 backdrop-blur-xl">
//         <p className="font-bold" style={{ color: 'red' }}>
//           {platform}
//         </p>
//         <p className="text-white text-lg">{title}</p>
//       </div>

//       {/* Play button overlay in the center */}
//       <div
//         className={`absolute inset-0 flex justify-center items-center text-white rounded-full cursor-pointer bg-[#2A282FCC] ${type === "video" ? "" : "hidden"}`}
//       >
//         {link ? (
//           <Link href={link}>
//             <FaPlay size={30} />
//           </Link>
//         ) : (
//           <FaPlay size={30} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default ArticleCard;

