import RealEstatePagination from "@/components/residentialProPage/RealEstatePagination";
import ResidentialPro from "@/components/residentialProPage/ResidentialPro";
import ServiceContact from "@/components/serviceContact/ServiceContact";
import TitleCard from "@/components/titleCard/TitleCard";
import React from "react";
import properties from "../../../data/residential-properties/DataResidential";

import { metadata } from "./resiMetadata"; // Importing metadata
// Directly export the imported metadata
export { metadata };

const ResidentialProperties = () => {
  return (
    <>
      <TitleCard
        url="/assets/residenialpage/residenial.jpg"
        parent="residential-plots"
        title="Residential-Plots"
      />
      <RealEstatePagination properties={properties} />
      <ResidentialPro />
      <ServiceContact />
    </>
  );
};

export default ResidentialProperties;
