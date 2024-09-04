"use client";
import React from "react";
import Image from "next/image";
import ProfileData from "@/components/user/profile/ProfileData";
import { MemberProvider } from "@/app/Providers";
import { useSession } from "next-auth/react";
import useGetUser from "@/hooks/profileHooks/useGetUser";
import LoaderData from "@/components/Common/Loader";

const Profile = () => {
  const { data: session, status } = useSession();

  const userId = session?.user?.userInfo?._id;
  const { user, loading } = useGetUser(userId);
  console.log(user)

  if (status === "loading" || loading) {
    return (
      <div className="h-screen w-full grid place-items-center">
        <LoaderData />
      </div>
    );
  }

  if (!session || !userId) {
    return (
      <div className="h-screen w-full grid place-items-center">
        <p>You need to be logged in to view this page.</p>
      </div>
    );
  }

  return (
    <MemberProvider>
      <div className="pb-20">
        <div className="flex flex-col justify-center items-center pt-10">
          <Image src="/hafizelipz.png" width={200} height={200} alt="Profile Image" />
          <div className="flex flex-col mt-5 items-center justify-center text-black">
            <h1 className="text-[2.8rem] max-md:text-2xl font-bold leading-[3.2rem] text-center">
              {user?.username}
            </h1>
          </div>
        </div>
        <section className="p-3">
          <ProfileData user={user} />
        </section>
      </div>
    </MemberProvider>
  );
};

export default Profile;
