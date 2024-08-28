import Image from "next/image";
function UnderlinedHeading({ heading, text }) {
  return (
    <h1 className="text-[2.5rem] max-md:text-3xl font-bold leading-[3.5rem] text-center">
      {heading}
      <span className="relative mr-3">
        {" "}{text}
        <Image
          src={"/assets/kma csr awards/Vector.png"}
          className="absolute object-contain right-0 -bottom-2 w-full h-4 max-md:h-3"
          alt="Vector"
          width={500}
          height={500}
        />
      </span>
    </h1>
  );
}

export default UnderlinedHeading;
