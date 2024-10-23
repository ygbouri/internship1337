import React from "react";
import PreviewAndSimilarProduct from "./PreviewAndSimilarProduct";
import Details from "./Details";
import { useDarkMode } from "@/context/darkmode";

function ProcuctDetails() {
  const { isDarkMode } = useDarkMode();
  let color: string = isDarkMode ? " text-black" : "text-[#BBBBBC] ";

  return (
    <div className="">
      <div className="flex w-full items-center justify-between px-8 py-2">
        <h2 className={`text-xl ${color} font-semibold`}>Product Details</h2>
        <h4 className={`text-sm ${color} font-semibold`}>
          Ecommerce/ProductDetails
        </h4>
      </div>
      <div
        className={`mt-6 flex h-auto   xl:mx-5 rounded-md ${
          isDarkMode ? " bg-white" : " bg-[#1A1C1E]"
        } flex-col gap-2  xxl:flex-row`}
      >
        <PreviewAndSimilarProduct />
        <Details />
      </div>
    </div>
  );
}

export default ProcuctDetails;
