import React from "react";
import CustomSwiper from "./CustomSwiper";
import SimilarProduct from "./SimilarProduct";

const PreviewAndSimilarProduct = ({ product }: any) => {
  return (
    <div className=" h-auto w-full  flex  flex-grow  flex-row xxl:flex-col xxl:min-h-screen xxl:max-w-[540px]  xxl:w-[28%] ">
      <div className="w-full   max-sm:w-full flex flex-grow  xl:max-h-[600px]  max-xxl:w-[50%]">
        <CustomSwiper product={product} />
        {/* <div className="flex-1 red"></div> */}
      </div>
      <div className="w-full    xl:max-h-[700px]  max-xl:w-[50%]  max-sm:hidden">
        <SimilarProduct product={product} />
      </div>
    </div>
  );
};

export default PreviewAndSimilarProduct;
