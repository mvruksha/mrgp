// Real Estate Listings Data
const properties = [
  {
    title: "Luxury 3BHK Apartment",
    sites: null, // <- Not a site
    location: "Whitefield, Bangalore",
    images: [
      "/assets/home/properties/luxury1.jpg",
      "/assets/home/properties/luxury2.jpg",
      "/assets/home/properties/luxury3.jpg",
    ],
    price: 7500000,
    bedrooms: 3,
    bathrooms: 2,
    dimensions: "1800 sqft",
    availability: "Sold Out",
    ownerName: "Mr. Arjun Rao",
    propertyType: "Apartment",
    phoneNumber: "+91 9876543210",
    dcConversion: "Yes",
    revenueSite: "No",
    googleMapLink: "https://maps.google.com/?q=Whitefield,Bangalore",
    link: "/property/luxury-3bhk-apartment",
    description:
      "Experience luxury living in this beautifully designed 3BHK apartment located in the vibrant locality of Whitefield, Bangalore. Spanning 1800 sqft, this property offers spacious bedrooms, modern interiors, a fully equipped kitchen, and scenic balcony views. Ideal for families seeking comfort, connectivity, and a sophisticated lifestyle.",
  },
  {
    title: "Spacious 2BHK Villa",
    sites: null, // <- Not a site
    location: "HSR Layout, Bangalore",
    images: [
      "/assets/home/properties/villa1.jpg",
      "/assets/home/properties/villa2.jpg",
      "/assets/home/properties/villa3.jpg",
    ],
    price: 5200000,
    bedrooms: 2,
    bathrooms: 2,
    dimensions: "1500 sqft",
    availability: "Available",
    ownerName: "Ms. Shreya Kapoor",
    propertyType: "Villa",
    phoneNumber: "+91 9876543211",
    dcConversion: "Yes",
    revenueSite: "Yes",
    googleMapLink: "https://maps.google.com/?q=HSR+Layout,Bangalore",
    link: "/property/spacious-2bhk-villa",
    description:
      "Discover a serene lifestyle in this spacious 2BHK villa nestled in the prime neighborhood of HSR Layout, Bangalore. Designed with elegance, this 1500 sqft home features open living spaces, lush gardens, and ample natural light, perfect for families who value privacy and comfort.",
  },
  {
    title: "Modern 4BHK Penthouse",
    sites: null, // <- Not a site
    location: "Koramangala, Bangalore",
    images: [
      "/assets/home/properties/penthouse1.jpg",
      "/assets/home/properties/penthouse2.jpg",
      "/assets/home/properties/penthouse3.jpg",
    ],
    price: 12500000,
    bedrooms: 4,
    bathrooms: 3,
    dimensions: "3200 sqft",
    availability: "Available",
    ownerName: "Mr. Rahul Menon",
    propertyType: "Penthouse",
    phoneNumber: "+91 9876543212",
    dcConversion: "Yes",
    revenueSite: "No",
    googleMapLink: "https://maps.google.com/?q=Koramangala,Bangalore",
    link: "/property/modern-4bhk-penthouse",
    description:
      "Step into a world of sophistication with this stunning 4BHK penthouse located in the heart of Koramangala. Spread over a lavish 3200 sqft, this home boasts state-of-the-art finishes, panoramic city views, expansive terraces, and smart home technology for a truly elite urban experience.",
  },
  {
    title: "Cozy 1BHK Apartment",
    sites: null, // <- Not a site
    location: "Indiranagar, Bangalore",
    images: [
      "/assets/home/properties/cozy1.jpg",
      "/assets/home/properties/cozy2.jpg",
      "/assets/home/properties/cozy3.jpg",
    ],
    price: 3200000,
    bedrooms: 1,
    bathrooms: 1,
    dimensions: "800 sqft",
    availability: "Sold Out",
    ownerName: "Ms. Priya Shetty",
    propertyType: "Studio Apartment",
    phoneNumber: "+91 9876543213",
    dcConversion: "No",
    revenueSite: "Yes",
    googleMapLink: "https://maps.google.com/?q=Indiranagar,Bangalore",
    link: "/property/cozy-1bhk-studio-apartment",
    description:
      "Perfect for young professionals and couples, this cozy 1BHK studio apartment in Indiranagar offers a smart use of space, chic modern interiors, and close proximity to cafes, tech hubs, and shopping streets. A perfect starter home or investment property in one of Bangalore’s most sought-after neighborhoods.",
  },
  {
    title: "Elegant 5BHK Independent House",
    sites: null, // <- Not a site
    location: "Jayanagar, Bangalore",
    images: [
      "/assets/home/properties/elegant1.jpg",
      "/assets/home/properties/elegant2.jpg",
      "/assets/home/properties/elegant3.jpg",
    ],
    price: 18000000,
    bedrooms: 5,
    bathrooms: 4,
    dimensions: "4000 sqft",
    availability: "Sold Out",
    ownerName: "Dr. Vishal Kumar",
    propertyType: "Independent House",
    phoneNumber: "+91 9876543214",
    dcConversion: "Yes",
    revenueSite: "No",
    googleMapLink: "https://maps.google.com/?q=Jayanagar,Bangalore",
    link: "/property/elegant-5bhk-independent-house",
    description:
      "Indulge in opulence with this magnificent 5BHK independent house located in the prestigious locality of Jayanagar. Covering an area of 4000 sqft, this home features exquisite architecture, sprawling living spaces, landscaped gardens, and a peaceful ambiance — an ideal retreat in the city.",
  },
  {
    title: "Premium 3BHK Duplex",
    sites: null, // <- Not a site
    location: "BTM Layout, Bangalore",
    images: [
      "/assets/home/properties/bhk1.jpg",
      "/assets/home/properties/bhk2.jpg",
      "/assets/home/properties/bhk3.jpg",
    ],
    price: 8900000,
    bedrooms: 3,
    bathrooms: 3,
    dimensions: "2200 sqft",
    availability: "Available",
    ownerName: "Mr. Karthik Reddy",
    propertyType: "Duplex",
    phoneNumber: "+91 9876543215",
    dcConversion: "No",
    revenueSite: "Yes",
    googleMapLink: "https://maps.google.com/?q=BTM+Layout,Bangalore",
    link: "/property/premium-3bhk-duplex",
    description:
      "This premium 3BHK duplex in BTM Layout offers a perfect blend of style and functionality. Spread over 2200 sqft, it features double-height ceilings, modern kitchen fittings, elegant bedrooms, and premium finishes throughout. A fantastic choice for families seeking upscale living in a thriving community.",
  },
];

export default properties;
