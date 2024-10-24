import React from "react";
import ByingInfo from "./ByingInfo";
import FiltringDetails from "./FiltringDetails";

const Details = ({ product }: any) => {
  return (
    <div className=" flex h-auto max-lg:flex-col ">
      <FiltringDetails product={product} />
      <ByingInfo product={product} />
    </div>
  );
};

export default Details;
