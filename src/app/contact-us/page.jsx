import ContactForm from "@/components/contactpage/ContactForm";
import ContactMap from "@/components/contactpage/ContactMap";
import FirstPart from "@/components/mainFirst/FirstPart";
import Scrollbg from "@/components/scrollbg/Scrollbg";
import React from "react";

import { metadata } from "./contactMetadata"; // Importing metadata
// Directly export the imported metadata
export { metadata };

const ContactUs = () => {
  return (
    <>
      <FirstPart
        url="/assets/contact/contactus.jpg"
        parent="contact"
        title="Contact Us"
      />
      <ContactForm />
      <ContactMap />
      <Scrollbg />
    </>
  );
};

export default ContactUs;
