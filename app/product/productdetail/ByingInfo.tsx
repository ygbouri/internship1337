"use client";
import { useDarkMode } from "@/config/darkmode";
import Link from "next/link";
import React, { useState } from "react";
import { BiSolidOffer } from "react-icons/bi";

const ByingInfo = () => {
  const [showOffers, setOffers] = useState(false);
  const { isDarkMode } = useDarkMode();
  let color: string = isDarkMode ? " text-black" : "text-[#BBBBBC] ";

  const arr = [
    {
      tiltle: " Bank Offer:",
      content: "5% off upto 500 on min purchase of $999",
    },
    {
      tiltle: " Bank Offer:",
      content: "5% off upto 500 on min purchase of $999",
    },
    {
      tiltle: " Bank Offer:",
      content: "5% off upto 500 on min purchase of $999",
    },
    {
      tiltle: " Bank Offer:",
      content: "5% off upto 500 on min purchase of $999",
    },
    {
      tiltle: " Bank Offer:",
      content: "5% off upto 500 on min purchase of $999",
    },
    {
      tiltle: " Bank Offer:",
      content: "5% off upto 500 on min purchase of $999",
    },
    {
      tiltle: " Bank Offer:",
      content: "5% off upto 500 on min purchase of $999",
    },
    {
      tiltle: " Bank Offer:",
      content: "5% off upto 500 on min purchase of $999",
    },
  ];
  return (
    <div className=" h-auto w-[30%] max-lg:w-full grow  max-lg:p-5  flex flex-col justify-center  gap-10 ">
      <div className="h-[600px]   flex justify-center flex-col   gap-3">
        <div className="h-auto flex flex-col  gap-1 pl-0 p-3">
          <h3 className="text-md font-medium text-red-400">
            Only 5 left in stock.
          </h3>
          <h5 className={`text-xs font-medium ${color}`}>
            Sold by Regaltos PVT.LTDand quality checked by Spruko Tchnologies.
          </h5>
        </div>
        <div className=" flex flex-col  gap-3 ">
          {/* <div className="h-auto  rounded-md"> */}
          <table className="w-[90%] h-[90%] border  divide-y ">
            <thead className="">
              <tr>
                <td className="flex gap-2 p-2  items-center ">
                  <BiSolidOffer style={{ color: "#26BF94" }} />
                  <h1 className="text-[#26BF94] font-semibold text-sm">
                    {" "}
                    3 Available offers
                  </h1>
                </td>
              </tr>
            </thead>
            <tbody className="divide-y">
              {arr.slice(0, showOffers ? arr.length : 3).map((item, index) => (
                <tr key={index} className="flex gap-2 p-2  items-center ">
                  <td scope="col" className="flex gap-2 p-2  items-center ">
                    <h3 className="text-[#26BF94] font-bold text-[13px]">
                      {item.tiltle}
                    </h3>
                    <h5 className={`${color} text-[13px]`}>{item.content}</h5>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="flex">
                  <button
                    className="text-[#26BF94] underline p-3 text-[13px]"
                    onClick={() => setOffers(!showOffers)}
                  >
                    More Offers
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <div className="w-full flex">
            </div> */}
          {/* </div> */}
          <div className="flex flex-col">
            <h1 className={`${color} text-sm font-bold`}>Return:</h1>
            <p className="text-xs w-[80%] text-[#999DA3]">
              Min 7 days return and exchange policy. Return Policies may vary
              based on products and promotions. For full details on our Returns
              Policies, please click here․
            </p>
          </div>
          {/* <div className="">devlivrey</div> */}
          <div className=" flex flex-col gap-2">
            <div className="w-[90%] ">
              <Link href="/cart">
                <button className="p-2 font-medium text-white bg-[#8459DF] w-[100%] rounded-md">
                  Add to Cart
                </button>
              </Link>
            </div>
            <div className="w-[90%] ">
              <Link href="/PageBuy">
                <button className="p-2 font-medium text-white bg-[#26BF94] w-[100%] rounded-md">
                  Buy Now
                </button>
              </Link>
            </div>
            <div className="w-[90%] ">
              <Link href={"/wishlist"}>
                <button className="p-2 font-medium  bg-[#F3F6F8] w-[100%] rounded-md">
                  Add to Wishlist
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[600px] max-h-[600px] flex max-lg:justify-center justify-start max-lg:px-1 ">
        <img
          src="/ads.png"
          alt=""
          className={`w-[90%] max-lg:w-[80%] h-full rounded-lg px-5 ${
            isDarkMode ? " bg-[#F3F6F8]" : " bg-[#2B2E31]"
          } `}
        />
      </div>
    </div>
  );
};

export default ByingInfo;
