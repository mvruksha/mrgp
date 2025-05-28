import agriProperties from "./agricultural-land/DataAgri";
import commercialProperties from "./commercial-properties/DataCommercial";
import rentProperties from "./rent-lease/Rent";
import residentialProperties from "./residential-properties/DataResidential";

const allProperties = [
  ...agriProperties,
  ...commercialProperties,
  ...rentProperties,
  ...residentialProperties,
];

// ✅ Return filtered data by variant
export function getPropertiesByVariant(variant) {
  switch (variant) {
    case "agricultural":
      return agriProperties;
    case "commercial":
      return commercialProperties;
    case "rent":
      return rentProperties;
    case "residential":
      return residentialProperties;
    case "all":
    default:
      return allProperties;
  }
}

export {
  allProperties,
  agriProperties,
  commercialProperties,
  rentProperties,
  residentialProperties,
};
