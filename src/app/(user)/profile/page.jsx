import React from "react";
import Image from "next/image";
import ProfileData from "@/components/user/profile/ProfileData";

const Profile = () => {
  return (
    <div className="pb-20">
      <div className="flex flex-col justify-center items-center pt-10">
        <Image src="/hafizelipz.png" width={200} height={200}></Image>
        <div className=" flex flex-col mt-5 items-center justify-center text-black">
          <h1 className="text-[2.8rem] max-md:text-2xl font-bold leading-[3.2rem] text-center">
            {`Hafiz Shefeek`}
          </h1>
        </div>
      </div>
      <section className="p-3">
        <ProfileData />
      </section>
    </div>
  );
};

export default Profile;
