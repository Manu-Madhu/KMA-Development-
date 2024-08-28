import Image from "next/image";
import vector from "../../../../public/assets/kma csr awards/Vector.png";
import Person from "../../../../public/1.png";

import ProfileCard from "./ProfileCard";
import { members } from "@/data/members";
function ManagingDirectors() {
  return (
    <div className="max-w-screen-xl mx-auto w-full p-3 flex flex-col items-center mt-10 pb-28 relative">
      <h1 className="text-title font-bold mx-auto w-fit mb-12 max-md:text-[2rem]">
        Managing
        <span className="relative ml-3">
          Committee
          <Image
            src={vector}
            className="absolute right-0 -bottom-2"
            alt="Vector"
          />
        </span>
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-2 sm:gap-4 w-full lg:mt-7">
        {members.map((member, index) => (
          <ProfileCard
            key={index}
            name={member?.name}
            role={member.title}
            image={Person}
          />
        ))}
      </div>
      <button className="buttonAnimation overflow-hidden absolute bottom-0 px-6 py-2 mt-8 border border-black/10 w-fit rounded-full font-semibold text-red-600">
        <span>View All</span>
      </button>
    </div>
  );
}

export default ManagingDirectors;
