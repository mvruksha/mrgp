import ServiceContact from "@/components/serviceContact/ServiceContact";
import AdvisorySupport from "@/components/servicepage/AdvisorySupport ";
import Consultations from "@/components/servicepage/Consultations";
import Sales from "@/components/servicepage/Sales";
import TitleCard from "@/components/titleCard/TitleCard";
import React from "react";

import { metadata } from "./servicesMetadata"; // Importing metadata
// Directly export the imported metadata
export { metadata };

const Mservices = () => {
  return (
    <>
      <TitleCard
        url="/assets/servicespage/mrservices.jpg"
        parent="mservices"
        title="Our-Services"
      />
      <Sales />
      <AdvisorySupport />
      <Consultations />
      <ServiceContact />
    </>
  );
};

export default Mservices;
