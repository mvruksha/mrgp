import TitleCard from "@/components/titleCard/TitleCard";
import React from "react";
import agriproperties from "../../../data/agricultural-land/DataAgri";
import RealEstatePagination from "@/components/residentialProPage/RealEstatePagination";
import ServiceContact from "@/components/serviceContact/ServiceContact";
import AgriculturalLandPro from "@/components/agriculturalLandPro/AgriculturalLandPro";
import { metadata } from "./agriMetadata"; // Importing metadata
// Directly export the imported metadata
export { metadata };

const AgriculturalLand = () => {
  return (
    <>
      <TitleCard
        url="/assets/residenialpage/agriculturalland.jpg"
        parent="agricultural-plots"
        title="Agricultural-Plots"
      />
      <RealEstatePagination properties={agriproperties} />
      <AgriculturalLandPro />
      <ServiceContact />
    </>
  );
};

export default AgriculturalLand;
