// import UnderlinedHeading from "@/components/user/Common/UnderlinedHeading";
// import HallsCard from "@/components/user/halls/HallsCard";
// import { halls } from "@/data/halls";
// import React from "react";

// async function Page({ params }) {
//   function findHall(_id) {
//     return halls.find((item) => item?.id == _id);
//   }
//   return (
//     <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-16 my-20 mt-24 p-3 ">
//       <UnderlinedHeading heading={"Hall "} text="Inquiry" />
//       <div className="flex flex-col items-center w-fit">
//         <HallsCard hall={findHall(params.id)} isInquiryHidden />
//         <form className="w-full gap-4 mt-10 flex flex-col" action="">
//           <div className="w-full">
//             <label className="mb-1" htmlFor="Name">
//               Name
//             </label>
//             <input
//               type="text"
//               className="outline outline-1 outline-gray-400 rounded-full w-full py-2 px-5"
//               placeholder="Enter Name"
//             />
//           </div>
//           <div className="w-full">
//             <label htmlFor="Name">Email</label>
//             <input
//               type="email"
//               className="outline outline-1 outline-gray-400 rounded-full w-full py-2 px-5"
//               placeholder="Enter Email"
//             />
//           </div>
//           <div className="w-full">
//             <label htmlFor="Name">Phone Number</label>
//             <input
//               type="tel"
//               className="outline outline-1 outline-gray-400 rounded-full w-full py-2 px-5"
//               placeholder="Enter Phone Number"
//             />
//           </div>
//           <button className="border border-gray-400 w-fit px-5 text-primaryColor rounded-full py-2 mt-5">
//             Enquire Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Page;
"use client";
import UnderlinedHeading from "@/components/user/Common/UnderlinedHeading";
import HallsCard from "@/components/user/halls/HallsCard";
import { halls } from "@/data/halls";
import { useFormValidation } from "@/hooks/hallEnquiryHooks/useFormValidation";
import { useSubmitForm } from "@/hooks/hallEnquiryHooks/useSubmitForm";

function Page({ params }) {
  const { formData, errors, handleChange, validateForm,setFormData } = useFormValidation({
    name: '',
    email: '',
    phone: '',
  });
  const { submitForm } = useSubmitForm();
  

  function findHall(_id) {
    return halls.find((item) => item?.id == _id);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await submitForm(formData);
      // Reset form data after successful submission
      setFormData({
        name:'',
        email:'',
        phone:'',
      })
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-16 my-20 mt-24 p-3">
      <UnderlinedHeading heading={"Hall "} text="Inquiry" />
      <div className="flex flex-col items-center w-fit">
        <HallsCard hall={findHall(params.id)} isInquiryHidden />
        <form className="w-full gap-4 mt-10 flex flex-col" onSubmit={handleSubmit}>
          <div className="w-full">
            <label className="mb-1" htmlFor="Name">Name</label>
            <input
              type="text"
              name="name"
              className="outline outline-1 outline-gray-400 rounded-full w-full py-2 px-5"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="w-full">
            <label htmlFor="Name">Email</label>
            <input
              type="email"
              name="email"
              className="outline outline-1 outline-gray-400 rounded-full w-full py-2 px-5"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="w-full">
            <label htmlFor="Name">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="outline outline-1 outline-gray-400 rounded-full w-full py-2 px-5"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
          <button className="border border-gray-400 w-fit px-5 text-primaryColor rounded-full py-2 mt-5">
            Enquire Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;


