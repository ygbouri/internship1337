import { useDarkMode } from "@/context/darkmode";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Arr = [
  {
    image: "/swatch.png",
    title: "Apple watch",
    review: "4.4",
    reviewers: 12222,
    price: "$1123",
    oldPrice: 2010,
  },
  {
    image: "/swatch.png",
    title: "Apple watch",
    review: "4.4",
    reviewers: 12222,
    price: "$1123",
    oldPrice: 2010,
  },
  {
    image: "/swatch.png",
    title: "Apple watch",
    review: "4.4",
    reviewers: 12222,
    price: "$1123",
    oldPrice: 2010,
  },
  {
    image: "/swatch.png",
    title: "Apple watch",
    review: "4.4",
    reviewers: 12222,
    price: "$1123",
    oldPrice: 2010,
  },
  {
    image: "/swatch.png",
    title: "Apple watch",
    review: "4.4",
    reviewers: 12222,
    price: "$1123",
    oldPrice: 2010,
  },
  {
    image: "/swatch.png",
    title: "Appl watch ",
    review: "4.4",
    reviewers: 12222,
    price: "$1123",
    oldPrice: 2010,
  },
  {
    image: "/swatch.png",
    title: "Appl watch ",
    review: "4.4",
    reviewers: 12222,
    price: "$1123",
    oldPrice: 2010,
  },
  {
    image: "/swatch.png",
    title: "Appl watch ",
    review: "4.4",
    reviewers: 12222,
    price: "$1123",
    oldPrice: 2010,
  },
];

function SimilarProduct() {
  const { isDarkMode } = useDarkMode();

  let color: string = isDarkMode ? " text-black" : "text-[#BBBBBC] ";

  return (
    <div className="h-auto   w-full space-y-4 px-10 max-sm:hidden p-4">
      <h3 className={`text-lg font-bold ${color}`}>SimilarProduct</h3>
      <div
        className={` divide-y ${
          isDarkMode ? "divide-gray-100" : "divide-gray-500"
        } flex flex-col  rounded-sm border ${
          isDarkMode ? "border-gray-100" : "border-gray-500"
        } `}
      >
        {Arr.map((item, index) => (
          <div key={index} className="flex p-2 justify-between ">
            <div className="flex gap-4">
              <img
                src={item.image}
                alt=""
                className={`h-12 ${
                  isDarkMode ? " bg-[#F3F6F8]" : " bg-[#2B2E31]"
                } rounded-md`}
              />
              <div className="">
                <h3 className={`${color} font-semibold`}>{item.title}</h3>
                <div className="flex gap-2">
                  <p className="flex my-auto h-fit rounded-md bg-[#25BF94]  py-[2px] text-[10px] text-white font-bold">
                    {item.review}
                    <AiFillStar className=" h-3" style={{ color: "white" }} />
                  </p>
                  <span className="text-gray-400 font-bold text-sm">
                    ({item.reviewers.toLocaleString("en-US")})
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className={`font-medium ${color}`}>{item.price}</span>
              <span className="text-[12px] text-gray-400 line-through font-bold text-sm">
                ${item.oldPrice.toLocaleString("en-US")}
              </span>
            </div>
          </div>
        ))}
        <div className=" py-3 flex w-full justify-center">
          <button
            className={`h-[40px] w-[80%] text-[15px] font-medium  rounded-md  ${
              isDarkMode ? "bg-[#F2EEFC]" : "bg-[#2A253B]"
            } text-[#845ADF] hover:bg-[#845ADF] hover:text-white`}
          >
            View All products
          </button>
        </div>
      </div>
    </div>
  );
}

export default SimilarProduct;
