import { GoDownload } from "react-icons/go";
import UnderlinedHeading from "@/components/user/Common/UnderlinedHeading";
import React from "react";
import PageEndQuery from "@/components/user/Common/PageEndQuery";

const CsrPage = () => {
  // Application path
  const ApplicationFile = "/csr/test.pdf";

  return (
    <div className="pt-10 ">
      {/* title */}
      <div className="">
        <UnderlinedHeading heading={"A CSR Initiative By"} text={"KMA"} />
      </div>

      {/* Content Part */}
      <div className="max-w-screen-xl mx-auto my-5 md:mt-10 p-3">
        <p className="text-sm leading-6 pb-2 ">
          {` Kerala Management Association (KMA) has invited applications for the scholarship scheme to 
          students who need financial assistance for study purposes including fees. Students studying for
           higher degree or admitted to the course will be eligible for the scholarship.`}
        </p>
        <p className="text-sm leading-6 pb-2">
          {`The document of the course or admission to the course of the students applying for the 
          scholarship and the certificate of the village officer or the head of the institution that they 
          are from a financial situation that is currently challenging for the study should be presented. 
          The KMA CSR sub-committee headed by KMA President A. Balakrishnan, Secretary Dilip Narayanan and
           Committee Chair Deepak Aswani will scrutinize the applications and identify the most deserving 
           and allocate the amount.
          `}
        </p>
        <p className="text-sm leading-6 pb-2">
          {`Information about KMA Scholarship has been provided for all professional colleges in the state. 
          If the applicant is eligible as per the criteria laid down by the KMA Committee, the scholarship 
          will be given preference for the professional course over the regular degree course. Also those who 
          have less time limit to complete the course will get more weightage as compared to those who are in 
          first years or semesters.
          `}
        </p>
        <p className="text-sm leading-6 pb-2">
          {`At the time of selection, background and academic achievements of the student will be considered.
           KMA will also encourage students those who complete their course, get placements and earn income to
            give back the money as donations in order to provide scholarships to more people, benefit poor 
            students.
          `}
        </p>
        <p className="text-sm leading-6 pb-2">
          {`This is for students who are doing professional courses and post graduation in Management MTech 
          and MCA will also be considered Students who have backlog in exams will not be considered 
          Fundamentally for financially backward students.
          `}
        </p>
        <p className="text-sm leading-6">
          {`Funds are raised through the KMA Management Education Foundation. Along with this, KMA corporate
           members will also participate by contributing to the project through their CSR and other 
           charitable allocations. More information is available on KMA's website www.kma.org.in. 
           Applications can be downloaded from the website or can be collect directly from the KMA office at
            Panampally Nagar. info@kma.org.in, 0484 2317917.
          `}
        </p>
        <div className="mt-5 md:my-10 ">
          <a
            href={ApplicationFile}
            download="Scholarship_Application.docx"
            className="no-underline"
          >
            <div className="flex gap-2 border rounded-2xl w-fit p-2 px-4 cursor-pointer">
              <GoDownload className="" />
              <h1 className="text-sm font-[500]">Scholarship Application</h1>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom part */}
      <PageEndQuery
        heading={"Interested in Becoming a Member?"}
        subheading={"Click the register button below to see the procedures"}
        button={{ title: "Register now", path: "/" }}
      />
    </div>
  );
};

export default CsrPage;
