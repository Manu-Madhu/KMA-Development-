import Image from "next/image";
import vector from "../../../../public/assets/kma csr awards/Vector.png";
import Person from "../../../../public/1.png";
import { Managing } from "@/data/Managing";
import ProfileCard from "./ProfileCard";
import Link from "next/link";
import ManagingCommittee from "../managingCommitee/ManagingCommittee";

function ManagingDirectors() {
  return (
    <div className="max-w-screen-xl mx-auto w-full p-3 flex flex-col items-center mt-10 pb-28 relative">
      
        <ManagingCommittee
          heading={"Managing"}
          title={"Committee"}
          dataListing={Managing.slice(0,4)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center"
          count={1}
        />
      
      <Link href={'/managing-committee'} className="pe-32">
        <button className="buttonAnimation overflow-hidden absolute bottom-0 px-6 py-2 mt-8 border border-black/10 w-fit rounded-full font-semibold text-red-600">
          <span>View All</span>
        </button>
      </Link>
    </div>
  );
}

export default ManagingDirectors;
