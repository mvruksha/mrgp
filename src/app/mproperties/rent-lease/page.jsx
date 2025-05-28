import RealEstatePagination from "@/components/residentialProPage/RealEstatePagination";
import TitleCard from "@/components/titleCard/TitleCard";
import React from "react";
import properties from "../../../data/rent-lease/Rent";
import RentLeasepro from "@/components/rentLeasepro/RentLeasepro";
import ServiceContact from "@/components/serviceContact/ServiceContact";

const RentLease = () => {
  return (
    <>
      <TitleCard
        url="/assets/residenialpage/rentlease.jpg"
        parent="rent-lease"
        title="Rent-Lease"
      />
      <RealEstatePagination properties={properties} />
      <RentLeasepro />
      <ServiceContact />
    </>
  );
};

export default RentLease;
