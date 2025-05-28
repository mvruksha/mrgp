import RealEstatePagination from "@/components/residentialProPage/RealEstatePagination";
import TitleCard from "@/components/titleCard/TitleCard";
import React from "react";
import properties from "../../../data/commercial-properties/DataCommercial";
import CommercialPro from "@/components/commercialpro/CommercialPro";
import ServiceContact from "@/components/serviceContact/ServiceContact";

import { metadata } from "./commMetadata"; // Importing metadata
// Directly export the imported metadata
export { metadata };

const CommercialProperties = () => {
  return (
    <>
      <TitleCard
        url="/assets/residenialpage/commercial.jpg"
        parent="commercial-plots"
        title="Commercial-Plots"
      />
      <RealEstatePagination properties={properties} />
      <CommercialPro />
      <ServiceContact />
    </>
  );
};

export default CommercialProperties;
