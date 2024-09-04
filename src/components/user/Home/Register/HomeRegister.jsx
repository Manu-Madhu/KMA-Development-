import Image from "next/image";
import Link from "next/link";
import wavynet from "../../../../../public/assets/home/wavynet.png";

function HomeRegister() {
  return (
    <div className="w-full mt-5 h-[300px] sm:h-screen relative flex items-center justify-center">
      <Image
        src={wavynet}
        alt=""
        fill
        className="z-0 object-cover "
        quality={100}
      />

      <div className="w-fit flex flex-col items-center absolute">
        <h1 className="text-[2.4rem] max-md:text-xl font-bold leading-[3.5rem] max-md:leading-10 text-center">
          Interested in Becoming a Member?
        </h1>
        <p className="text-center">
          Click the register button below to see the procedures
        </p>
        <Link href={"/registration"}>
        <button className="px-6 py-2 mt-8 border border-gray-600 w-fit rounded-full font-semibold text-red-600">
          Register now
        </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeRegister;
