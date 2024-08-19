import Image from "next/image";
import React from "react";
function AboutKMA() {
  return (
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
            />
          </span>
        </h1>
        <p className="text-sm mt-6 mr-10 max-md:mr-0 max-md:text-justify">
          Corporate Social Responsibility (CSR) and Environment, Social, &
          Governance (ESG) have become pivotal in steering society towards
          Sustainable Development Goals (SDG), aligning corporate actions with
          global priorities. Recent challenges, such as pandemics and climate
          change, have prompted an expansion of CSR initiatives and a
          reevaluation of corporate performance metrics, emphasising not only
          financial returns but also environmental and social contributions. To
          achieve their objectives, the Corporations increasingly rely on
          nongovernmental organisations for efficient and effective
          implementation of CSR projects.
        </p>
        <p className="text-sm mt-3 mr-10 max-md:mr-0 max-md:text-justify">
          The Kerala Management Association heralds this paradigm shift by
          calling on progressive companies to join the KMA CSR Awards 2024. The
          Awards will honour organizations that are innovatively tackling
          societal issues, integrating CSR and sustainability into their core
          values, and making a positive impact that echoes beyond the corporate
          sphere.
        </p>

        <p className="text-sm mt-3 mr-10 max-md:mr-0 max-md:text-justify">
          Winners selected by our distinguished Jury will be lauded at a grand
          ceremony on March 7th, 2024, receiving a prestigious trophy and a
          certificate of excellence. This honour not only elevates your
          company's reputation but also bolsters staff morale and engagement
          with CSR. Additionally, it provides a competitive edge and amplifies
          your success through KMA's publications and press releases.
        </p>

        <button className="px-6 py-2 mt-8 border border-gray-600 w-fit rounded-full font-semibold text-red-600">
          Know more
        </button>
      </div>
      <Image
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full lg:w-2/5 h-[300px] sm:h-full max-lg:mt-6 object-cover rounded-xl"
        src="/assets/home/aboutImg.png"
        alt="KMA"
      />
    </div>
  );
}

export default AboutKMA;
