import Image from "next/image";

function ProfileCard({ name, role, image }) {
  return (
    <div
    //   data-aos="fade-up"
    //   data-aos-duration="1000"
      className="h-[300px] lg:h-[225px] w-full rounded-2xl overflow-hidden border border-gray-300"
    >
      <div className="w-full h-[70%] rounded-t-2xl relative">
        <Image
          src={image}
          className="w-full h-full object-cover bottom-0 inset-x-0 mx-auto absolute"
          alt="Person"
        />
      </div>
      <div className="h-[30%] p-3 rounded-b-2xl ">
        <h1 className="font-[550] mt-3 lg:mt-0 lg:text-sm">{name}</h1>
        <p className="text-[11px] mt-1">{role}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
