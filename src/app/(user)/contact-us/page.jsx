import PageEndQuery from "@/components/user/Common/PageEndQuery";
import UnderlinedHeading from "@/components/user/Common/UnderlinedHeading";
import ContactForm from "@/components/user/contactUs/ContactForm";
import ContactInfo from "@/components/user/contactUs/ContactInfo";
import ContactMap from "@/components/user/contactUs/ContactMap";

const ContactPage = () => {
  return (
    <main>
        {/*  */}
      <section className="max-w-screen-xl mx-auto w-full p-3">
        {/* heading part */}
        <section className="my-10 lg:mt-20">
          <UnderlinedHeading heading={"Contact"} text={"Us"} />
        </section>

        {/* Content part */}
        <section className="mt-10 lg:mt-20 flex flex-col lg:flex-row w-full gap-5 lg:gap-10">
          {/* Form Section */}
          <div className="w-full">
            <ContactForm />
          </div>
          {/* map Section */}
          <div className="w-full">
            <ContactMap />
          </div>
        </section>

        {/* Contact Info Part */}
        <section className="mt-10 lg:mt-20">
          <ContactInfo />
        </section>
      </section>

      <section>
        <PageEndQuery
          heading={"Interested in Becoming a Member?"}
          subheading={"Click the register button below to see the procedures"}
          button={{
            title: "Register Now",
            path: "/registration",
          }}
        />
      </section>
    </main>
  );
};

export default ContactPage;
