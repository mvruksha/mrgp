import { allProperties } from "../../../data/allProperties";
// import PropertyImages from "@/components/propertypages/PropertyImages";
import PropertyDetailsTable from "@/components/propertypages/PropertyDetailsTable";
import PropertyDescription from "@/components/propertypages/PropertyDescription";
// import PropertyEnquiryForm from "@/components/propertypages/Proertypages";
// import ServiceContact from "@/components/serviceContact/ServiceContact";
import BackButton from "@/components/propertypages/BackButton";
import RealEstateSlider from "@/components/mhome/mslider/RealEstateSlider";

import { metadata } from "./proMetadata"; // Importing metadata
// Directly export the imported metadata
export { metadata };

// Static params generation
export async function generateStaticParams() {
  return allProperties.map((property) => ({
    slug: property.link.split("/property/")[1],
  }));
}

// Main Page
export default function PropertyPage({ params }) {
  const property = allProperties.find(
    (prop) => prop.link.split("/property/")[1] === params.slug
  );

  if (!property) {
    return <div className="text-center py-20">Property Not Found</div>;
  }

  return (
    <div className=" bg-gray-50 px-8 py-16">
      {/* Title and Location */}
      <div className="pt-16">
        {/* ✅ Back Button */}
        {/* ✅ Adjust positioning */}
        <div className="mb-2">
          <BackButton />
        </div>
        <h1 className="text-4xl font-bold mb-6">{property.title}</h1>
        <p className="text-gray-600 mb-8">{property.location}</p>
      </div>

      {/* Description with images (video/image slider) */}
      <PropertyDescription
        description={property.description}
        images={property.images} // ✅ Added images prop
      />

      {/* Details */}
      <PropertyDetailsTable images={property.images} property={property} />

      {/* Enquiry Form */}
      {/* <PropertyEnquiryForm /> */}
      {/* <ServiceContact /> */}
      <RealEstateSlider
        heading="Featured Properties"
        viewAllLabel="View All"
        viewAllLink="/mproperties"
        variant="all"
      />
    </div>
  );
}
