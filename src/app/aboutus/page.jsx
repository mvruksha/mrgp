// import FirstSec from "@/components/aboutpage/FirstSec";
import Flow from "@/components/aboutpage/flow/Flow";
import Founder from "@/components/aboutpage/founder/Founder";
import SecAbout from "@/components/aboutpage/SecAbout";
import SecMissionVision from "@/components/aboutpage/SecMissionVision";
import FirstPart from "@/components/mainFirst/FirstPart";
import Scrollbg from "@/components/scrollbg/Scrollbg";
import React from "react";

import { metadata } from "./aboutMetadata"; // Importing metadata
// Directly export the imported metadata
export { metadata };

const Aboutus = () => {
  return (
    <>
      {/* <FirstSec /> */}
      <FirstPart
        url="/assets/aboutus/aboutuspage.jpg"
        parent="aboutus"
        title="About-Us"
      />
      <SecAbout />
      <SecMissionVision />
      <Flow />
      <Founder />
      <Scrollbg />
    </>
  );
};

export default Aboutus;
