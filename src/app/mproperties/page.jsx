import Mblog from "@/components/blog/Mblog";
import FirstPart from "@/components/mainFirst/FirstPart";
import Catalogue from "@/components/mhome/catalogue/Catalogue";
import LastPart from "@/components/mhome/lastPart/LastPart";
import RealEstateSlider from "@/components/mhome/mslider/RealEstateSlider";
import React from "react";

import { metadata } from "./propertyMetadata"; // Importing metadata
// Directly export the imported metadata
export { metadata };

const Properties = () => {
  return (
    <>
      <FirstPart
        url="/assets/residenialpage/residenial.jpg"
        parent="Properties"
        title="Properties"
      />
      <RealEstateSlider
        heading="Residential Plots"
        viewAllLabel="Explore Residential"
        viewAllLink="/mproperties/residential-plots"
        variant="residential"
      />
      <RealEstateSlider
        heading="Agricultural FarmLand"
        viewAllLabel="Explore Farmland"
        viewAllLink="/mproperties/agricultural-farmland"
        variant="agricultural"
      />
      <RealEstateSlider
        heading="Commercial Plots"
        viewAllLabel="Explore Commercial"
        viewAllLink="/mproperties/commercial-plots"
        variant="commercial"
      />
      {/* <Mblog />
      <LastPart /> */}
      <Catalogue />
    </>
  );
};

export default Properties;
