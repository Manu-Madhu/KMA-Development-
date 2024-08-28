import Link from "next/link";
import React from "react";

const ContactForm = () => {
  return (
    <main>
      {/* heading */}
      <h1 className="text-[#475467] text-[15px]">
        Our friendly team would love to hear from you.
      </h1>

      {/* form */}
      <form action="" className="mt-5 lg:mt-10 flex flex-col gap-5">
        {/* First last name */}
        <div className="flex gap-3 w-full">
          {/* first name */}
          <div className="w-full">
            <label htmlFor="" className="text-[#344054] font-medium">
              First Name
            </label>
            <input
              type="text"
              className="p-2 text-sm w-full border rounded-lg border-[#D0D5DD] placeholder:text-[#667085] ps-4"
              placeholder="First name"
            />
          </div>
          {/* last name */}
          <div className="w-full">
            <label htmlFor="" className="text-[#344054] font-medium">
              Last Name
            </label>
            <input
              type="text"
              className="p-2 text-sm w-full border rounded-lg border-[#D0D5DD] placeholder:text-[#667085] ps-4"
              placeholder="First name"
            />
          </div>
        </div>

        {/* email */}
        <div className="flex flex-col w-full">
          <label htmlFor="" className="text-[#344054] font-medium">
            Email
          </label>
          <input
            type="text"
            className="p-2 text-sm w-full border rounded-lg border-[#D0D5DD] placeholder:text-[#667085] ps-4"
            placeholder="you@company.com"
          />
        </div>

        {/* Phone number */}
        <div className="flex flex-col w-full">
          <label htmlFor="" className="text-[#344054] font-medium">
            Phone number
          </label>
          <input
            type="text"
            className="p-2 text-sm w-full border rounded-lg border-[#D0D5DD] placeholder:text-[#667085] ps-4"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col w-full">
          <label htmlFor="" className="text-[#344054] font-medium">
            Message
          </label>
          <textarea
            type="text"
            className="p-2 text-sm w-full h-40 border rounded-lg border-[#D0D5DD] placeholder:text-[#667085] ps-4"
          />
        </div>

        {/* Message */}
        <div className="flex w-full gap-3">
          <input
            type="checkbox"
            className="p-2 text-sm border rounded-lg border-[#D0D5DD] placeholder:text-[#475467] ps-4"
          />
          <label htmlFor="" className="text-[#344054] text-sm">
            You agree to our friendly <Link href={`#`} className="underline">privacy policy</Link>.
          </label>
        </div>
        {/* Submit button */}
        <div className="flex flex-col w-full">
          <button className="bg-primaryColor text-white p-3 text-sm rounded-lg">
            Send message
          </button>
        </div>
      </form>
    </main>
  );
};

export default ContactForm;
