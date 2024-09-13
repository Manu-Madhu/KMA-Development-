import React from "react";

const ContactInfo = () => {
  return (
    <main className="lg:py-20 lg:pb-32 flex flex-col md:flex-row gap-8 lg:gap-40 my-5 overflow-hidden">
      {/* Contact Info */}
      <section>
        <h5 className="text-primaryColor font-[700] text-[15px]">Contact Info</h5>
        <h1 className="font-extrabold text-4xl lg:text-5xl mt-2 lg:mt-4 leading-[45px] lg:leading-[55px]">
          We are always happy <br className="hidden lg:block"/> to assist you
        </h1>
      </section>

      {/* email address */}
      <section>
        <h5 className="text-[#000000]/50 font-semibold text-[16px]">
          Email Address
        </h5>
        <p className="text-[#E3000F] font-[700] my-2">info@kma.org.in</p>
        <p className="text-sm font-[500] text-black">Assistance hours: </p>
        <p className="text-sm font-[500] text-black">Monday - Friday 6 am to</p>
        <p className="text-sm font-[500] text-black">8 pm EST</p>
      </section>

      {/* Number */}
      <section>
        <h5 className="text-[#000000]/50 font-semibold text-[16px]">Number</h5>
        <p className="text-[#E3000F] font-[700] my-2">90727 75588, 0484 - 2317966</p>
        <p className="text-sm font-[500] text-black">Assistance hours: </p>
        <p className="text-sm font-[500] text-black">Monday - Friday 6 am to</p>
        <p className="text-sm font-[500] text-black">8 pm EST</p>
      </section>
    </main>
  );
};

export default ContactInfo;
