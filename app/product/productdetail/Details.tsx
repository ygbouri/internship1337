import React from "react";
import ByingInfo from "./ByingInfo";
import FiltringDetails from "./FiltringDetails";

const Details = () => {
  return (
    <div className=" flex h-auto max-lg:flex-col ">
      <FiltringDetails />
      <ByingInfo />
    </div>
  );
};

export default Details;
