import React from "react";

const ContactMap = () => {
  return (
    <main className="w-full h-full relative flex items-center justify-center rounded-xl">
      {/* Embed Google Map using iframe */}
      <iframe
        width="500"
        height="500"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.7651987672625!2d76.29653877405974!3d9.953483673835384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872c1ec599165%3A0x3341180584240a72!2sKMA!5e0!3m2!1sen!2sin!4v1725374841058!5m2!1sen!2sin"
        title="Kerala Management Association"
        className="w-full h-full rounded-xl"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
     
    </main>
  );
};

export default ContactMap;
