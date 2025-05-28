import Banner from "@/components/mhome/banner/Banner";
// import Header from "@/components/navbar/Header";
import Aboutus from "@/components/mhome/aboutus/Aboutus";
import RealEstateSlider from "@/components/mhome/mslider/RealEstateSlider";
// import Catalogue from "@/components/mhome/catalogue/Catalogue";
import PrOverview from "@/components/Newani/PrOverview";
// import Footer from "@/components/footer/Footer";
import Review from "@/components/mhome/creview/Review";
import LastPart from "@/components/mhome/lastPart/LastPart";
// import Scrollbg from "@/components/scrollbg/Scrollbg";

import { metadata } from "./layoutMetadata"; // Importing metadata
// Directly export the imported metadata
export { metadata };

export default function Home() {
  return (
    <div>
      <Banner />
      <RealEstateSlider
        heading="Featured Properties"
        viewAllLabel="View All"
        viewAllLink="/mproperties"
        variant="all"
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
      {/* <Catalogue /> */}
      <Aboutus />
      <PrOverview />
      <Review />
      <LastPart />
    </div>
  );
}
