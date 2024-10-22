"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { CheckboxDemo } from "../../components/myCustomComponents/checkbox";
import { checkbokCategorie } from "../../types";
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlinePercentage,
} from "react-icons/ai";
import { LiaPercentageSolid } from "react-icons/lia";
import { SlBasket, SlBasketLoaded } from "react-icons/sl";

import { redirect } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import { PaginationDemo } from "../../components/myCustomComponents/pagination";
import { useDarkMode } from "../../config/darkmode";
import { DropdownBasketIcon } from "../../components/myCustomComponents/Mydrpdown";
import { CommandDemo } from "../../components/myCustomComponents/search";

export default function WishList() {
  const [showCategorie, setShow] = useState(false);

  const { isDarkMode } = useDarkMode();

  let tabProduct = [
    {
      id: "1",
      title: "t-shirt",
      smallTitle: "sjdkfds",
      priceSolde: 200,
      realPrice: 1790,
      percent: 72,
    },
    {
      id: "12",
      title: "a",
      smallTitle: "sjdkfds",
      priceSolde: 200,
      realPrice: 1791,
      percent: 72,
    },
    {
      id: "123",
      title: "b",
      smallTitle: "sjdkfds",
      priceSolde: 200,
      realPrice: 1792,
      percent: 72,
    },
    {
      id: "1234",
      title: "t-shirt",
      smallTitle: "sjdkfds",
      priceSolde: 200,
      realPrice: 1793,
      percent: 72,
    },
    {
      id: "12345",
      title: "t-shirt",
      smallTitle: "sjdkfds",
      priceSolde: 200,
      realPrice: 1794,
      percent: 72,
    },
  ];
  const [product, setProduct] = useState(tabProduct);
  const [selectedProducts, setSelectedProducts] = useState(new Set());

  const deleteSelectedProducts = (id: string) => {
    setProduct(product.filter((product) => !selectedProducts.has(product.id)));
    tabProduct = tabProduct.filter((item) => item.id != id);
    console.log(tabProduct);
    setSelectedProducts(new Set()); // Clear selection after deletion
  };

  const handleSearch = (value: string) => {
    if (value != "") {
      setProduct(product.filter((item) => item.title.includes(value)));
    } else setProduct(tabProduct);
  };

  // useLayoutEffect(() => {
  //   redirect("/page/product/${1}");
  // }, [id]);

  const arr: checkbokCategorie[] = [
    { id: "1", data: "hhhhhha" },
    { id: "2", data: "hhhhhhb" },
    { id: "3", data: "hhhhhhc" },
    { id: "4", data: "hhhhhhd" },
    { id: "5", data: "hhhhhhe" },
    { id: "6", data: "hhhhhhf" },
    { id: "7", data: "hhhhhhg" },
    { id: "8", data: "hhhhhhh" },
    { id: "9", data: "hhhhhhi" },
    { id: "10", data: "hhhhhhj" },
    { id: "11", data: "hhhhhhk" },
  ];

  // useEffect(() => {}, []);
  const nm: number = 2012;
  let color: string = isDarkMode ? " text-black" : "text-[#BBBBBC] ";
  // #2B2E31
  return (
    <div className="w-full h-auto max-sm:min-h-screen flex flex-col mx-auto px-4  gap-2 max-sm:space-y-3  ">
      <div className="flex w-full items-center justify-between px-8 py-2">
        <h1 className={`text-xl ${color} font-semibold`}>WishList</h1>
      </div>

      <div className=" flex flex-col gap-6 px-4">
        <div
          className={`w-[98.6%] h-auto max-sm:w-[95%]  md:h-[70px]   flex items-center  justify-between rounded-md mt-4 ${
            isDarkMode ? " bg-white" : " bg-[#1A1C1E]"
          } max-md:flex-col max-md:justify-start max-md:gap-1 max-md:items-start max-md:py-3`}
        >
          <h6 className={`${color} w-auto bg-transparent px-3`}>
            Total{" "}
            <span className="bg-[#26BF94] text-white text-xs rounded-md p-1">
              {arr.length}
            </span>{" "}
            products are wishlisted
          </h6>
          <div className="w-auto h-auto max-md:h-[40px] z-10 flex items-center max-md:px-3">
            <CommandDemo
              arr={product}
              onSelect={(value: string) => handleSearch(value)}
            ></CommandDemo>
          </div>
        </div>
        <div className="w-full max-sm:h-[80%] md:h-auto flex max-md:flex-col  md:justify-around max-sm:gap-3 sm:gap-3 md:gap-7  ">
          <div className="w-[100%] md:h-full sm:min-h-full   min-sm:flex-col sm:grid max-sm:space-y-6  max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4  sm:gap-6 rounded-md  bg-transparent">
            {product.map((items, index) => (
              <div
                key={index}
                className={`relative group  max-sm:w-[97%] w-[95%] max-sm:ml-1  aspect-card ${
                  isDarkMode ? " bg-white" : " bg-[#1A1C1E]"
                }  flex flex-col sm:gap-0 max-sm:gap-2 max-2xl:space-y-1 items-center rounded-lg `}
              >
                <Link
                  className=" w-[90%] m-4 cursor-pointer max-sm:p-1"
                  href={`/product/${1}`}
                >
                  <img
                    src="/product.png"
                    alt=""
                    className={`${
                      isDarkMode ? " bg-[#F3F6F8]" : " bg-[#2B2E31]"
                    }  w-[100%]  rounded-md `}
                  />
                </Link>

                <div
                  className={`w-[40px] top-6   group-hover:opacity-100 group-hover:transition-opacity opacity-0 duration-300 gap-2 right-8 h-[100px] bg-transparent flex flex-col absolute`}
                >
                  <button
                    className="bg-[#f1aeb5] rounded-lg w-[90%] h-6 flex justify-center items-center"
                    onClick={() => {
                      selectedProducts.add(items.id);
                      deleteSelectedProducts(items.id);
                    }}
                  >
                    <span className="text-[#dc3545]">x</span>
                  </button>
                </div>
                <div className="max-sm:w-full sm:w-[90%] flex flex-col space-y-2 mb-4 max-sm:items-start sm:items-center max-sm:pl-4 max-sm:pr-3">
                  <div className="w-full flex flex-col items-start  ">
                    <div className="w-full  flex items-start justify-between">
                      <h3 className={`w-[50%]  ${color} text-sm font-bold`}>
                        {items.title}
                      </h3>
                      <div className="w-[50%] flex items-center justify-end">
                        <label
                          htmlFor=""
                          className="text-xs text-right font-bold text-[#F5B849]"
                        >
                          4.2
                        </label>
                        <AiFillStar
                          className=" h-3"
                          style={{ color: "#F5B849" }}
                        />
                      </div>
                    </div>
                    <div className="w-[80%] flex ">
                      <h5 className="text-xs text-[#BBBCC1]">
                        {items.smallTitle}
                      </h5>
                    </div>
                  </div>
                  <div className="max-sm:w-[80%] sm:w-[100%] flex flex-col gap-1">
                    <div className="w-full flex space-x-2 max-sm:items-center sm:items-start ">
                      <h5 className={`text-md font-bold ${color}`}>
                        {items.priceSolde}
                      </h5>
                      <h5
                        className={`text-md text-[#BBBCC1] ${
                          !isDarkMode ? "opacity-50" : ""
                        } line-through font-bold`}
                      >
                        {items.realPrice}
                      </h5>
                    </div>
                    <div className="w-[80%] max-sm:mb-5 flex justify-start  items-center">
                      <img src="/product/discount.svg" alt="" className="h-3" />
                      <h5 className="text-[#26BF94] text-xxs font-bold">
                        {items.percent}
                      </h5>
                    </div>
                  </div>
                </div>
                <div
                  className={`w-full h-[50px] flex gap-2  items-center justify-center  border-t ${
                    isDarkMode ? "border-gray-100" : "border-gray-500"
                  }`}
                >
                  <Link href="/cart">
                    <button className=" flex justify-center items-center gap-2 rounded-md px-2 bg-[#F2EEFC] icon hover:bg-[#8459DF]">
                      {" "}
                      <SlBasket className="" />{" "}
                      <h3 className={`font-bold text-sm p-2`}>Move To Cart</h3>
                    </button>
                  </Link>
                  <Link href={`/product/${1}`}>
                    <button className=" flex justify-center items-center gap-2 rounded-md px-2 bg-[#ECF8F4] iconVProduct hover:bg-[#29BF94]">
                      {" "}
                      <SlBasket className="" />{" "}
                      <h3 className={`font-bold text-sm p-2`}>View Product</h3>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[5%] flex  justify-end bg-transparent">
        <div className="   flex justify-start">
          <PaginationDemo></PaginationDemo>
        </div>
      </div>
    </div>
  );
}
