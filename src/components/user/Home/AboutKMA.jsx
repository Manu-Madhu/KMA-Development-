import Image from "next/image";
import React from "react";
import Link from "next/link";

function AboutKMA() {
  return (
    <div className="mb-10">
    <div className="flex mt-16 max-w-screen-xl lg:h-[560px] mx-auto p-3 w-full  max-lg:flex-col ">
      <div className="w-full lg:w-3/5">
        <h1 className="text-[2.8rem] max-md:text-[2.2rem] font-bold max-md:leading-[2.6rem]">
          About
          <span className="relative ml-3">
            KMA
            <Image
              src="/assets/kma csr awards/Vector.png"
              className="absolute right-0 -bottom-2"
              alt="Vector"
              width={100}
              height={100}
            />
          </span>
        </h1>
        <p className="text-sm mt-6 mr-10 max-md:mr-0 max-md:text-justify">
        Cochin was a sleepy little town in the 1950’s. The State of Kerala 
        had just been formed in November 1956 and the Communist Government 
        headed by E.M.S.Namboodiripad was yet to become a reality. P.S.Rao, 
        formerly of the Indian Civil Service, was the Governor who administered 
        over the State with the help of his advisers. Cochin City had not come 
        into existence and the three Municipalities of Ernakulam, Mattanchery 
        and Fort Cochin were functioning separately. This was the backdrop against
         which the Kerala Institute of Management, as it was called then, came into
          existence with the initiative of a few Entrepreneurs, Managers and Civil 
        </p>
        <p className="text-sm mt-3 mr-10 max-md:mr-0 max-md:text-justify">
        Servants who visualized the necessity of a forum to discuss and debate issues
         of mutual interest and concern, and find relevant solutions via peer feedback.
          The institute was founded with Mr.M.S.Venkitaraman, Administrative Officer of
           Cochin Port (Cochin Port Trust had not been formed yet) as the President, 
           Mr.S.Nallaperumal, Dy. General Superintendent of FACT as the Secretary and
            Mr.Paul Pothen, again of FACT, as the Joint Secretary. The membership consisted
             of 5 Corporate Members, 11 Associate Corporate Members, 7 Individual Members and 1 Life Member.
        </p>

        <p className="text-sm mt-3 mr-10 max-md:mr-0 max-md:text-justify">
        The Institute was registered in March 1957 and the inaugural meeting was held on 10th
         September of the same year at TDM Hall, Ernakulam. Dr.John Mathai, Vice Chancellor of
          Kerala University and Chairman of the Governing Body of the Administrative Staff College,
           Hyderabad presided over the function and Mr.J.N.Sri Nagesh, Chairman, Hindustan Aeronautics
            Ltd delivered the inaugural address. A large number of representatives from the Government sector,
             industrial & commercial organizations and trade unions attended the prestigious function, which 
             was to set the pace for all its activities ahead.
             </p>
             <p className="text-sm mt-3 mr-10 max-md:mr-0 max-md:text-justify">
           Lectures and Seminars were started right during the first year. The 1st Seminar was held from 12th
            to 14thNovember 1957 in the BoardRoom at the Administrative Block of Cochin Port. Mr.K.P.Gopalan,
             Hon’ble Minister for Industries addressed the seminar and Mr.James B.Shearer of ILO was the leading
              faculty. During the 2nd Seminar (15th to 17th February 1958), Mr.E.M.S.Namboodiripad, Chief Minister
               of Kerala was also present to grace the occasion.

        </p>
        <Link href="/about"> {/* Use Link to navigate */}
        <button className="px-6 py-2 mt-8 border border-[#000000]/20 w-fit rounded-full font-semibold text-red-600 hover:bg-red-600  hover:text-white ease-in-out duration-300 hover:border-red-600">
          Know more
        </button>
        </Link>
      </div>
      <Image
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full lg:w-2/5 h-[300px] sm:h-full max-lg:mt-6 mt-10 object-contain rounded-xl"
        src="/assets/home/aboutimg.png"
        width={500}
        height={500}
        alt="KMA"
      />
    </div>
    </div>
  );
}

export default AboutKMA;
