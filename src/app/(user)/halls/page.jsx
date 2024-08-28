import UnderlinedHeading from "@/components/user/Common/UnderlinedHeading";
import hallBanner from "@/../public/assets/halls/hall_banner.jpg";
import Image from "next/image";
import HallsCard from "@/components/user/halls/HallsCard";
import { halls } from "@/data/halls";
import PageEndQuery from "@/components/user/Common/PageEndQuery";

function Page() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-3">
        <div className="mt-10">
          <h1 className="text-[2.8rem] max-md:text-4xl  font-bold leading-[3.2rem] text-center">
            {`World Convenes at Kochi's`}
          </h1>
          <UnderlinedHeading heading={"Iconic KMA"} text={"House"} />
        </div>
        <div className="pt-5">
          <p className="w-full mt-10 text-sm leading-6 text-[#1F392C]">
            {`Right at the centre of the buzzing city, in Panampilly Nagar, where
          the heart of Kochi throbs, KMA House stands proud and tall. After its
          complete makeover, KMA House meets with international standards of
          excellence. With five conference halls of varied facilities, KMA House
          is ready to meet all your requirements with high-tech facilities of
          global standards to hold physical, online and hybrid meetings for your
          business events and functions. The aesthetically designed interiors
          provide an inviting ambience with elegance and grandeur, along with
          state-of-the-art amenities that will enhance your brand image. The
          location of the property, Panampilly Nagar, is ideally located and
          easily accessible. The address enjoys proximity to all transportation
          hubs of the city. Conferences, business presentations, interviews, or
          seminars - KMA House offers a prestigious address to hold all kinds of
          corporate events.`}
          </p>
          <Image
            className="h-[70vh] max-md:h-[50vh] max-sm:h-[25vh] mt-10 rounded-xl object-cover"
            src={hallBanner}
            alt="Hall Banner"
          />
        </div>
        <div className="pb-10 mt-10">
          <UnderlinedHeading heading={"Our"} text={"Halls"} />
          <div className="mt-16 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
            {
              halls.map((hall, index) => (
                <HallsCard
                  key={index}
                  hall={hall}
                />
              ))
            }
          </div>
        </div>
      </div>
      <PageEndQuery heading={`To inquire more about our halls`} subheading={`Please call us at 0484-4044367, 231 7917, 231 7966 or submit a request here`} button={{ title: "Submit Request", path:'/halls/inquiry' }} />

    </>
  );
}

export default Page;
