"use client";
import React from "react";
import { LiaMedalSolid } from "react-icons/lia";
import { GiCardPickup } from "react-icons/gi";
import { useDarkMode } from "@/context/darkmode";
import { ProductGetData } from "@/types/Api";
const FiltringDetails = ({ product }: any) => {
  const { isDarkMode } = useDarkMode();
  const productData = product as ProductGetData;
  let color: string = isDarkMode ? " text-black" : "text-[#BBBBBC] ";
  // let num: number = parseFloat(nom.toPrecision()) - parseInt(nom.toFixed());

  // let fractionalPart = nom - num;
  return (
    <div className=" h-auto flex flex-col w-full gap-7 rounded-3xl  p-10  lg:w-[66%] ">
      <div className="w-full  flex flex-col">
        <h1 className={`${color} text-lg font-semibold`}>
          {productData?.name_article}
        </h1>
      </div>
      <div className=" w-[80%]   flex  max-2xl:flex-col max-2xl:gap-10 gap-20">
        <div className="  flex flex-col gap-1">
          <div className="">
            <p className="text-[10px] text-[#25BF94] font-bold">
              Special Offer
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <p className={`relative h-full text-2xl  font-semibold ${color}`}>
              {productData?.prix}
              <span className={`absolute  h-[70%] top-1 text-xs `}>.00</span>
            </p>
            <p
              className={`w-fit text-xxs font-bold bg-red-100 text-center rounded-sm px-2 py-[0.5px] text-red-400`}
            >
              50% off
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col">
        <div className="">
          <h2 className={`font-bold ${color}`}>Small Description :</h2>
        </div>
        <div className="">
          <p className="text-[14px] text-gray-500 font-medium">
            {productData?.small_description}
          </p>
        </div>
      </div>

      <div className="h-auto flex gap-5 max-sm:flex-col ">
        <div className="w-[30%] max-md:w-auto flex flex-col items-center justify-center border border-dashed h-[120px] rounded-md border-green-400">
          <LiaMedalSolid
            className=" w-[20%] h-[60%]  "
            style={{ color: "#0ECEB2" }}
          />
          <h2 className={`font-bold  text-center w-full ${color}`}>
            Assured Quality
          </h2>
        </div>
        <div className="w-[30%] max-md:w-auto flex flex-col items-center justify-center border border-dashed h-[120px] rounded-md border-green-400">
          <GiCardPickup
            className=" w-[20%] h-[60%]  "
            style={{ color: "#0ECEB2" }}
          />
          <h2 className={`font-bold  text-center w-full ${color}`}>
            Assured Quality
          </h2>
        </div>
      </div>
      <div className="h-auto  flex flex-col gap-2 ">
        <div className="h-auto">
          <h2 className={`font-bold ${color}`}>Description :</h2>
          <div className=" flex flex-col">
            <div className="xl:w-[550px] xl:h-[350px] ">
              <p className="text-[14px] text-gray-500 font-medium">
                {productData?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltringDetails;
