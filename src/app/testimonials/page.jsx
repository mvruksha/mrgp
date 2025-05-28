import Review from "@/components/mhome/creview/Review";
import LastPart from "@/components/mhome/lastPart/LastPart";
import TitleCard from "@/components/titleCard/TitleCard";
import React from "react";

import { metadata } from "./testiMetadata"; // Importing metadata
// Directly export the imported metadata
export { metadata };

const Testimonials = () => {
  return (
    <>
      <TitleCard
        url="/assets/servicespage/testimonials.jpg"
        parent="testimonials"
        title="Testimonials"
      />
      <Review />
      <LastPart />
    </>
  );
};

export default Testimonials;
