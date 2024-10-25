import React, { useEffect, useLayoutEffect, useState } from "react";
import { CheckboxDemo } from "./myCustomComponents/checkbox";
import { checkbokCategorie } from "../types";
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlinePercentage,
} from "react-icons/ai";
import { LiaPercentageSolid } from "react-icons/lia";
import { SlBasketLoaded } from "react-icons/sl";

import { redirect } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import { PaginationDemo } from "./myCustomComponents/pagination";
import { useDarkMode } from "../context/darkmode";

export default function DisplayProduct() {
  const [showCategorie, setShow] = useState(false);
  // const [showSousCategorie, setSousShow] = useState(false);
  // const [showIcons, setShowIcons] = useState(false);
  // const [detailProduct, setDisplayDetail] = useState(false);
  const { isDarkMode } = useDarkMode();
  const [selectedItem, setSelectedItem] = useState(""); // Store the ID of the selected item
  let id = 0;

  const handleSelect = (id: string) => {
    setSelectedItem(id);
  };

  // useLayoutEffect(() => {
  //   redirect("/page/product/${1}");
  // }, [id]);

  useEffect(() => {});
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
  const nm: number = 2012;
  let color: string = isDarkMode ? " text-black" : "text-[#BBBBBC] ";
  // #2B2E31
  return (
    <div className="w-full h-auto max-sm:min-h-screen flex flex-col mx-auto px-4  gap-6 max-sm:space-y-3  ">
      <div
        className={`w-[98.6%] max-sm:w-[95%] max-sm:h-[70px] md:h-[70px]  md:ml-4 flex flex-col rounded-md mt-4 ${
          isDarkMode ? " bg-white" : " bg-[#1A1C1E]"
        }`}
      >
        <h6 className={`${color} w-[10%] bg-transparent`}></h6>
      </div>
      <div className="w-full max-sm:h-[80%] md:h-auto flex max-md:flex-col  md:justify-around max-sm:gap-3 sm:gap-3 md:gap-7  ">
        <div className="max-2xl:w-[40%] 2xl:w-[30%] max-sm:w-[100%] sm:w-[80%] max-sm:min-h-full flex flex-col rounded-md max:sm:ml-0 lg:ml-4 bg-transparent">
          <div
            className={`w-full flex items-start  rounded-tl-md rounded-tr-md flex-col gap-5 justify-around ${
              isDarkMode ? " bg-white" : " bg-[#1A1C1E]"
            }`}
          >
            <h1 className="w-full ml-4 mt-4 text-[#8D9198] font-bold">
              CATEGORIES
            </h1>
            <div className="w-full flex flex-col ml-6 gap-4">
              {arr
                .slice(0, showCategorie ? arr.length : 4)
                .map((item, index) => (
                  <div key={index} className="w-[90%]  flex justify-between">
                    <CheckboxDemo
                      key={item.id}
                      parametre={item}
                      isSelected={item.id === selectedItem}
                      onSelect={() => handleSelect(item.id)}
                    ></CheckboxDemo>
                    <label
                      className={`px-[2px] py-[2px] ${
                        isDarkMode ? "bg-[#F3F6F8]" : " bg-[#2B2E31]"
                      } ${
                        isDarkMode ? "text-[#8C9097]" : "text-white"
                      } font-bold text-xxs rounded-sm`}
                    >
                      {nm.toLocaleString("en-US")}
                    </label>
                  </div>
                ))}
              <button
                onClick={() => setShow(!showCategorie)}
                className="w-[20%] h-6 mb-4 px-2 py-1 bg-[#F3EFFC] text-[#855ADF] text-xs rounded-lg transition-colors"
              >
                {showCategorie ? "More-" : "More+"}
              </button>
            </div>
          </div>
          <div
            className={`w-full flex items-start  rounded-tl-md rounded-tr-md flex-col gap-5 justify-around ${
              isDarkMode ? " bg-white" : " bg-[#1A1C1E]"
            }`}
          >
            <h1 className="w-full ml-4 mt-4 text-[#8D9198] font-bold">
              CATEGORIES
            </h1>
            <div className="w-full flex flex-col ml-6 gap-4">
              {arr
                .slice(0, showCategorie ? arr.length : 4)
                .map((item, index) => (
                  <div key={index} className="w-[90%]  flex justify-between">
                    <CheckboxDemo
                      key={item.id}
                      parametre={item}
                      isSelected={item.id === selectedItem}
                      onSelect={() => handleSelect(item.id)}
                    ></CheckboxDemo>
                    <label
                      className={`px-[2px] py-[2px] ${
                        isDarkMode ? "bg-[#F3F6F8]" : " bg-[#2B2E31]"
                      } ${
                        isDarkMode ? "text-[#8C9097]" : "text-white"
                      } font-bold text-xxs rounded-sm`}
                    >
                      {nm.toLocaleString("en-US")}
                    </label>
                  </div>
                ))}
              <button
                onClick={() => setShow(!showCategorie)}
                className="w-[20%] h-6 mb-4 px-2 py-1 bg-[#F3EFFC] text-[#855ADF] text-xs rounded-lg transition-colors"
              >
                {showCategorie ? "More-" : "More+"}
              </button>
            </div>
          </div>
          <div
            className={`w-full flex items-start  rounded-tl-md rounded-tr-md flex-col gap-5 justify-around ${
              isDarkMode ? " bg-white" : " bg-[#1A1C1E]"
            }`}
          >
            <h1 className="w-full ml-4 mt-4 text-[#8D9198] font-bold">
              CATEGORIES
            </h1>
            <div className="w-full flex flex-col ml-6 gap-4">
              {arr
                .slice(0, showCategorie ? arr.length : 4)
                .map((item, index) => (
                  <div key={index} className="w-[90%]  flex justify-between">
                    <CheckboxDemo
                      key={item.id}
                      parametre={item}
                      isSelected={item.id === selectedItem}
                      onSelect={() => handleSelect(item.id)}
                    ></CheckboxDemo>
                    <label
                      className={`px-[2px] py-[2px] ${
                        isDarkMode ? "bg-[#F3F6F8]" : " bg-[#2B2E31]"
                      } ${
                        isDarkMode ? "text-[#8C9097]" : "text-white"
                      } font-bold text-xxs rounded-sm`}
                    >
                      {nm.toLocaleString("en-US")}
                    </label>
                  </div>
                ))}
              <button
                onClick={() => setShow(!showCategorie)}
                className="w-[20%] h-6 mb-4 px-2 py-1 bg-[#F3EFFC] text-[#855ADF] text-xs rounded-lg transition-colors"
              >
                {showCategorie ? "More-" : "More+"}
              </button>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <div className="w-[100%] md:h-full sm:min-h-full   min-sm:flex-col sm:grid max-sm:space-y-6  max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4  sm:gap-6 rounded-md  bg-transparent">
          <div
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
              <button className="bg-[#f1aeb5] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineHeart style={{ color: "#dc3545" }} />
              </button>
              <button className="bg-[#F2EEFC] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <SlBasketLoaded style={{ color: "#845ADF" }} />
              </button>
              <button className="bg-[#d1e7dd]  rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineEye style={{ color: "#198754" }} />
              </button>
            </div>
            <div className="max-sm:w-full sm:w-[90%] flex flex-col space-y-2 mb-4 max-sm:items-start sm:items-center max-sm:pl-4 max-sm:pr-3">
              <div className="w-full flex flex-col items-start  ">
                <div className="w-full  flex items-start justify-between">
                  <h3 className={`w-[50%]  ${color} text-sm font-bold`}>
                    item
                  </h3>
                  <div className="w-[50%] flex items-center justify-end">
                    <label
                      htmlFor=""
                      className="text-xs text-right font-bold text-[#F5B849]"
                    >
                      4.2
                    </label>
                    <AiFillStar className=" h-3" style={{ color: "#F5B849" }} />
                  </div>
                </div>
                <div className="w-[80%] flex ">
                  <h5 className="text-xs text-[#BBBCC1]">
                    fjdklsfjdklsfjdklsj
                  </h5>
                </div>
              </div>
              <div className="max-sm:w-[80%] sm:w-[100%] flex flex-col gap-1">
                <div className="w-full flex space-x-2 max-sm:items-center sm:items-start ">
                  <h5 className={`text-md font-bold ${color}`}>$599</h5>
                  <h5
                    className={`text-md text-[#BBBCC1] ${
                      !isDarkMode ? "opacity-50" : ""
                    } line-through font-bold`}
                  >
                    $45125
                  </h5>
                </div>
                <div className="w-[80%] max-sm:mb-5 flex justify-start  items-center">
                  <img src="/product/discount.svg" alt="" className="h-3" />
                  <h5 className="text-[#26BF94] text-xxs font-bold">
                    Offer Price $599
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
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
              <button className="bg-[#f1aeb5] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineHeart style={{ color: "#dc3545" }} />
              </button>
              <button className="bg-[#F2EEFC] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <SlBasketLoaded style={{ color: "#845ADF" }} />
              </button>
              <button className="bg-[#d1e7dd]  rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineEye style={{ color: "#198754" }} />
              </button>
            </div>
            <div className="max-sm:w-full sm:w-[90%] flex flex-col space-y-2 mb-4 max-sm:items-start sm:items-center max-sm:pl-4 max-sm:pr-3">
              <div className="w-full flex flex-col items-start  ">
                <div className="w-full  flex items-start justify-between">
                  <h3 className={`w-[50%]  ${color} text-sm font-bold`}>
                    item
                  </h3>
                  <div className="w-[50%] flex items-center justify-end">
                    <label
                      htmlFor=""
                      className="text-xs text-right font-bold text-[#F5B849]"
                    >
                      4.2
                    </label>
                    <AiFillStar className=" h-3" style={{ color: "#F5B849" }} />
                  </div>
                </div>
                <div className="w-[80%] flex ">
                  <h5 className="text-xs text-[#BBBCC1]">
                    fjdklsfjdklsfjdklsj
                  </h5>
                </div>
              </div>
              <div className="max-sm:w-[80%] sm:w-[100%] flex flex-col gap-1">
                <div className="w-full flex space-x-2 max-sm:items-center sm:items-start ">
                  <h5 className={`text-md font-bold ${color}`}>$599</h5>
                  <h5
                    className={`text-md text-[#BBBCC1] ${
                      !isDarkMode ? "opacity-50" : ""
                    } line-through font-bold`}
                  >
                    $45125
                  </h5>
                </div>
                <div className="w-[80%] max-sm:mb-5 flex justify-start  items-center">
                  <img src="/product/discount.svg" alt="" className="h-3" />
                  <h5 className="text-[#26BF94] text-xxs font-bold">
                    Offer Price $599
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
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
              <button className="bg-[#f1aeb5] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineHeart style={{ color: "#dc3545" }} />
              </button>
              <button className="bg-[#F2EEFC] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <SlBasketLoaded style={{ color: "#845ADF" }} />
              </button>
              <button className="bg-[#d1e7dd]  rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineEye style={{ color: "#198754" }} />
              </button>
            </div>
            <div className="max-sm:w-full sm:w-[90%] flex flex-col space-y-2 mb-4 max-sm:items-start sm:items-center max-sm:pl-4 max-sm:pr-3">
              <div className="w-full flex flex-col items-start  ">
                <div className="w-full  flex items-start justify-between">
                  <h3 className={`w-[50%]  ${color} text-sm font-bold`}>
                    item
                  </h3>
                  <div className="w-[50%] flex items-center justify-end">
                    <label
                      htmlFor=""
                      className="text-xs text-right font-bold text-[#F5B849]"
                    >
                      4.2
                    </label>
                    <AiFillStar className=" h-3" style={{ color: "#F5B849" }} />
                  </div>
                </div>
                <div className="w-[80%] flex ">
                  <h5 className="text-xs text-[#BBBCC1]">
                    fjdklsfjdklsfjdklsj
                  </h5>
                </div>
              </div>
              <div className="max-sm:w-[80%] sm:w-[100%] flex flex-col gap-1">
                <div className="w-full flex space-x-2 max-sm:items-center sm:items-start ">
                  <h5 className={`text-md font-bold ${color}`}>$599</h5>
                  <h5
                    className={`text-md text-[#BBBCC1] ${
                      !isDarkMode ? "opacity-50" : ""
                    } line-through font-bold`}
                  >
                    $45125
                  </h5>
                </div>
                <div className="w-[80%] max-sm:mb-5 flex justify-start  items-center">
                  <img src="/product/discount.svg" alt="" className="h-3" />
                  <h5 className="text-[#26BF94] text-xxs font-bold">
                    Offer Price $599
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
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
              <button className="bg-[#f1aeb5] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineHeart style={{ color: "#dc3545" }} />
              </button>
              <button className="bg-[#F2EEFC] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <SlBasketLoaded style={{ color: "#845ADF" }} />
              </button>
              <button className="bg-[#d1e7dd]  rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineEye style={{ color: "#198754" }} />
              </button>
            </div>
            <div className="max-sm:w-full sm:w-[90%] flex flex-col space-y-2 mb-4 max-sm:items-start sm:items-center max-sm:pl-4 max-sm:pr-3">
              <div className="w-full flex flex-col items-start  ">
                <div className="w-full  flex items-start justify-between">
                  <h3 className={`w-[50%]  ${color} text-sm font-bold`}>
                    item
                  </h3>
                  <div className="w-[50%] flex items-center justify-end">
                    <label
                      htmlFor=""
                      className="text-xs text-right font-bold text-[#F5B849]"
                    >
                      4.2
                    </label>
                    <AiFillStar className=" h-3" style={{ color: "#F5B849" }} />
                  </div>
                </div>
                <div className="w-[80%] flex ">
                  <h5 className="text-xs text-[#BBBCC1]">
                    fjdklsfjdklsfjdklsj
                  </h5>
                </div>
              </div>
              <div className="max-sm:w-[80%] sm:w-[100%] flex flex-col gap-1">
                <div className="w-full flex space-x-2 max-sm:items-center sm:items-start ">
                  <h5 className={`text-md font-bold ${color}`}>$599</h5>
                  <h5
                    className={`text-md text-[#BBBCC1] ${
                      !isDarkMode ? "opacity-50" : ""
                    } line-through font-bold`}
                  >
                    $45125
                  </h5>
                </div>
                <div className="w-[80%] max-sm:mb-5 flex justify-start  items-center">
                  <img src="/product/discount.svg" alt="" className="h-3" />
                  <h5 className="text-[#26BF94] text-xxs font-bold">
                    Offer Price $599
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
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
              <button className="bg-[#f1aeb5] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineHeart style={{ color: "#dc3545" }} />
              </button>
              <button className="bg-[#F2EEFC] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <SlBasketLoaded style={{ color: "#845ADF" }} />
              </button>
              <button className="bg-[#d1e7dd]  rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineEye style={{ color: "#198754" }} />
              </button>
            </div>
            <div className="max-sm:w-full sm:w-[90%] flex flex-col space-y-2 mb-4 max-sm:items-start sm:items-center max-sm:pl-4 max-sm:pr-3">
              <div className="w-full flex flex-col items-start  ">
                <div className="w-full  flex items-start justify-between">
                  <h3 className={`w-[50%]  ${color} text-sm font-bold`}>
                    item
                  </h3>
                  <div className="w-[50%] flex items-center justify-end">
                    <label
                      htmlFor=""
                      className="text-xs text-right font-bold text-[#F5B849]"
                    >
                      4.2
                    </label>
                    <AiFillStar className=" h-3" style={{ color: "#F5B849" }} />
                  </div>
                </div>
                <div className="w-[80%] flex ">
                  <h5 className="text-xs text-[#BBBCC1]">
                    fjdklsfjdklsfjdklsj
                  </h5>
                </div>
              </div>
              <div className="max-sm:w-[80%] sm:w-[100%] flex flex-col gap-1">
                <div className="w-full flex space-x-2 max-sm:items-center sm:items-start ">
                  <h5 className={`text-md font-bold ${color}`}>$599</h5>
                  <h5
                    className={`text-md text-[#BBBCC1] ${
                      !isDarkMode ? "opacity-50" : ""
                    } line-through font-bold`}
                  >
                    $45125
                  </h5>
                </div>
                <div className="w-[80%] max-sm:mb-5 flex justify-start  items-center">
                  <img src="/product/discount.svg" alt="" className="h-3" />
                  <h5 className="text-[#26BF94] text-xxs font-bold">
                    Offer Price $599
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
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
              <button className="bg-[#f1aeb5] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineHeart style={{ color: "#dc3545" }} />
              </button>
              <button className="bg-[#F2EEFC] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <SlBasketLoaded style={{ color: "#845ADF" }} />
              </button>
              <button className="bg-[#d1e7dd]  rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineEye style={{ color: "#198754" }} />
              </button>
            </div>
            <div className="max-sm:w-full sm:w-[90%] flex flex-col space-y-2 mb-4 max-sm:items-start sm:items-center max-sm:pl-4 max-sm:pr-3">
              <div className="w-full flex flex-col items-start  ">
                <div className="w-full  flex items-start justify-between">
                  <h3 className={`w-[50%]  ${color} text-sm font-bold`}>
                    item
                  </h3>
                  <div className="w-[50%] flex items-center justify-end">
                    <label
                      htmlFor=""
                      className="text-xs text-right font-bold text-[#F5B849]"
                    >
                      4.2
                    </label>
                    <AiFillStar className=" h-3" style={{ color: "#F5B849" }} />
                  </div>
                </div>
                <div className="w-[80%] flex ">
                  <h5 className="text-xs text-[#BBBCC1]">
                    fjdklsfjdklsfjdklsj
                  </h5>
                </div>
              </div>
              <div className="max-sm:w-[80%] sm:w-[100%] flex flex-col gap-1">
                <div className="w-full flex space-x-2 max-sm:items-center sm:items-start ">
                  <h5 className={`text-md font-bold ${color}`}>$599</h5>
                  <h5
                    className={`text-md text-[#BBBCC1] ${
                      !isDarkMode ? "opacity-50" : ""
                    } line-through font-bold`}
                  >
                    $45125
                  </h5>
                </div>
                <div className="w-[80%] max-sm:mb-5 flex justify-start  items-center">
                  <img src="/product/discount.svg" alt="" className="h-3" />
                  <h5 className="text-[#26BF94] text-xxs font-bold">
                    Offer Price $599
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
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
              <button className="bg-[#f1aeb5] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineHeart style={{ color: "#dc3545" }} />
              </button>
              <button className="bg-[#F2EEFC] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <SlBasketLoaded style={{ color: "#845ADF" }} />
              </button>
              <button className="bg-[#d1e7dd]  rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineEye style={{ color: "#198754" }} />
              </button>
            </div>
            <div className="max-sm:w-full sm:w-[90%] flex flex-col space-y-2 mb-4 max-sm:items-start sm:items-center max-sm:pl-4 max-sm:pr-3">
              <div className="w-full flex flex-col items-start  ">
                <div className="w-full  flex items-start justify-between">
                  <h3 className={`w-[50%]  ${color} text-sm font-bold`}>
                    item
                  </h3>
                  <div className="w-[50%] flex items-center justify-end">
                    <label
                      htmlFor=""
                      className="text-xs text-right font-bold text-[#F5B849]"
                    >
                      4.2
                    </label>
                    <AiFillStar className=" h-3" style={{ color: "#F5B849" }} />
                  </div>
                </div>
                <div className="w-[80%] flex ">
                  <h5 className="text-xs text-[#BBBCC1]">
                    fjdklsfjdklsfjdklsj
                  </h5>
                </div>
              </div>
              <div className="max-sm:w-[80%] sm:w-[100%] flex flex-col gap-1">
                <div className="w-full flex space-x-2 max-sm:items-center sm:items-start ">
                  <h5 className={`text-md font-bold ${color}`}>$599</h5>
                  <h5
                    className={`text-md text-[#BBBCC1] ${
                      !isDarkMode ? "opacity-50" : ""
                    } line-through font-bold`}
                  >
                    $45125
                  </h5>
                </div>
                <div className="w-[80%] max-sm:mb-5 flex justify-start  items-center">
                  <img src="/product/discount.svg" alt="" className="h-3" />
                  <h5 className="text-[#26BF94] text-xxs font-bold">
                    Offer Price $599
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
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
              <button className="bg-[#f1aeb5] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineHeart style={{ color: "#dc3545" }} />
              </button>
              <button className="bg-[#F2EEFC] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <SlBasketLoaded style={{ color: "#845ADF" }} />
              </button>
              <button className="bg-[#d1e7dd]  rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineEye style={{ color: "#198754" }} />
              </button>
            </div>
            <div className="max-sm:w-full sm:w-[90%] flex flex-col space-y-2 mb-4 max-sm:items-start sm:items-center max-sm:pl-4 max-sm:pr-3">
              <div className="w-full flex flex-col items-start  ">
                <div className="w-full  flex items-start justify-between">
                  <h3 className={`w-[50%]  ${color} text-sm font-bold`}>
                    item
                  </h3>
                  <div className="w-[50%] flex items-center justify-end">
                    <label
                      htmlFor=""
                      className="text-xs text-right font-bold text-[#F5B849]"
                    >
                      4.2
                    </label>
                    <AiFillStar className=" h-3" style={{ color: "#F5B849" }} />
                  </div>
                </div>
                <div className="w-[80%] flex ">
                  <h5 className="text-xs text-[#BBBCC1]">
                    fjdklsfjdklsfjdklsj
                  </h5>
                </div>
              </div>
              <div className="max-sm:w-[80%] sm:w-[100%] flex flex-col gap-1">
                <div className="w-full flex space-x-2 max-sm:items-center sm:items-start ">
                  <h5 className={`text-md font-bold ${color}`}>$599</h5>
                  <h5
                    className={`text-md text-[#BBBCC1] ${
                      !isDarkMode ? "opacity-50" : ""
                    } line-through font-bold`}
                  >
                    $45125
                  </h5>
                </div>
                <div className="w-[80%] max-sm:mb-5 flex justify-start  items-center">
                  <img src="/product/discount.svg" alt="" className="h-3" />
                  <h5 className="text-[#26BF94] text-xxs font-bold">
                    Offer Price $599
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
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
              <button className="bg-[#f1aeb5] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineHeart style={{ color: "#dc3545" }} />
              </button>
              <button className="bg-[#F2EEFC] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <SlBasketLoaded style={{ color: "#845ADF" }} />
              </button>
              <button className="bg-[#d1e7dd]  rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineEye style={{ color: "#198754" }} />
              </button>
            </div>
            <div className="max-sm:w-full sm:w-[90%] flex flex-col space-y-2 mb-4 max-sm:items-start sm:items-center max-sm:pl-4 max-sm:pr-3">
              <div className="w-full flex flex-col items-start  ">
                <div className="w-full  flex items-start justify-between">
                  <h3 className={`w-[50%]  ${color} text-sm font-bold`}>
                    item
                  </h3>
                  <div className="w-[50%] flex items-center justify-end">
                    <label
                      htmlFor=""
                      className="text-xs text-right font-bold text-[#F5B849]"
                    >
                      4.2
                    </label>
                    <AiFillStar className=" h-3" style={{ color: "#F5B849" }} />
                  </div>
                </div>
                <div className="w-[80%] flex ">
                  <h5 className="text-xs text-[#BBBCC1]">
                    fjdklsfjdklsfjdklsj
                  </h5>
                </div>
              </div>
              <div className="max-sm:w-[80%] sm:w-[100%] flex flex-col gap-1">
                <div className="w-full flex space-x-2 max-sm:items-center sm:items-start ">
                  <h5 className={`text-md font-bold ${color}`}>$599</h5>
                  <h5
                    className={`text-md text-[#BBBCC1] ${
                      !isDarkMode ? "opacity-50" : ""
                    } line-through font-bold`}
                  >
                    $45125
                  </h5>
                </div>
                <div className="w-[80%] max-sm:mb-5 flex justify-start  items-center">
                  <img src="/product/discount.svg" alt="" className="h-3" />
                  <h5 className="text-[#26BF94] text-xxs font-bold">
                    Offer Price $599
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
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
              <button className="bg-[#f1aeb5] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineHeart style={{ color: "#dc3545" }} />
              </button>
              <button className="bg-[#F2EEFC] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <SlBasketLoaded style={{ color: "#845ADF" }} />
              </button>
              <button className="bg-[#d1e7dd]  rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineEye style={{ color: "#198754" }} />
              </button>
            </div>
            <div className="max-sm:w-full sm:w-[90%] flex flex-col space-y-2 mb-4 max-sm:items-start sm:items-center max-sm:pl-4 max-sm:pr-3">
              <div className="w-full flex flex-col items-start  ">
                <div className="w-full  flex items-start justify-between">
                  <h3 className={`w-[50%]  ${color} text-sm font-bold`}>
                    item
                  </h3>
                  <div className="w-[50%] flex items-center justify-end">
                    <label
                      htmlFor=""
                      className="text-xs text-right font-bold text-[#F5B849]"
                    >
                      4.2
                    </label>
                    <AiFillStar className=" h-3" style={{ color: "#F5B849" }} />
                  </div>
                </div>
                <div className="w-[80%] flex ">
                  <h5 className="text-xs text-[#BBBCC1]">
                    fjdklsfjdklsfjdklsj
                  </h5>
                </div>
              </div>
              <div className="max-sm:w-[80%] sm:w-[100%] flex flex-col gap-1">
                <div className="w-full flex space-x-2 max-sm:items-center sm:items-start ">
                  <h5 className={`text-md font-bold ${color}`}>$599</h5>
                  <h5
                    className={`text-md text-[#BBBCC1] ${
                      !isDarkMode ? "opacity-50" : ""
                    } line-through font-bold`}
                  >
                    $45125
                  </h5>
                </div>
                <div className="w-[80%] max-sm:mb-5 flex justify-start  items-center">
                  <img src="/product/discount.svg" alt="" className="h-3" />
                  <h5 className="text-[#26BF94] text-xxs font-bold">
                    Offer Price $599
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
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
              <button className="bg-[#f1aeb5] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineHeart style={{ color: "#dc3545" }} />
              </button>
              <button className="bg-[#F2EEFC] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <SlBasketLoaded style={{ color: "#845ADF" }} />
              </button>
              <button className="bg-[#d1e7dd]  rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineEye style={{ color: "#198754" }} />
              </button>
            </div>
            <div className="max-sm:w-full sm:w-[90%] flex flex-col space-y-2 mb-4 max-sm:items-start sm:items-center max-sm:pl-4 max-sm:pr-3">
              <div className="w-full flex flex-col items-start  ">
                <div className="w-full  flex items-start justify-between">
                  <h3 className={`w-[50%]  ${color} text-sm font-bold`}>
                    item
                  </h3>
                  <div className="w-[50%] flex items-center justify-end">
                    <label
                      htmlFor=""
                      className="text-xs text-right font-bold text-[#F5B849]"
                    >
                      4.2
                    </label>
                    <AiFillStar className=" h-3" style={{ color: "#F5B849" }} />
                  </div>
                </div>
                <div className="w-[80%] flex ">
                  <h5 className="text-xs text-[#BBBCC1]">
                    fjdklsfjdklsfjdklsj
                  </h5>
                </div>
              </div>
              <div className="max-sm:w-[80%] sm:w-[100%] flex flex-col gap-1">
                <div className="w-full flex space-x-2 max-sm:items-center sm:items-start ">
                  <h5 className={`text-md font-bold ${color}`}>$599</h5>
                  <h5
                    className={`text-md text-[#BBBCC1] ${
                      !isDarkMode ? "opacity-50" : ""
                    } line-through font-bold`}
                  >
                    $45125
                  </h5>
                </div>
                <div className="w-[80%] max-sm:mb-5 flex justify-start  items-center">
                  <img src="/product/discount.svg" alt="" className="h-3" />
                  <h5 className="text-[#26BF94] text-xxs font-bold">
                    Offer Price $599
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
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
              <button className="bg-[#f1aeb5] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineHeart style={{ color: "#dc3545" }} />
              </button>
              <button className="bg-[#F2EEFC] rounded-lg w-[90%] h-6 flex justify-center items-center">
                <SlBasketLoaded style={{ color: "#845ADF" }} />
              </button>
              <button className="bg-[#d1e7dd]  rounded-lg w-[90%] h-6 flex justify-center items-center">
                <AiOutlineEye style={{ color: "#198754" }} />
              </button>
            </div>
            <div className="max-sm:w-full sm:w-[90%] flex flex-col space-y-2 mb-4 max-sm:items-start sm:items-center max-sm:pl-4 max-sm:pr-3">
              <div className="w-full flex flex-col items-start  ">
                <div className="w-full  flex items-start justify-between">
                  <h3 className={`w-[50%]  ${color} text-sm font-bold`}>
                    item
                  </h3>
                  <div className="w-[50%] flex items-center justify-end">
                    <label
                      htmlFor=""
                      className="text-xs text-right font-bold text-[#F5B849]"
                    >
                      4.2
                    </label>
                    <AiFillStar className=" h-3" style={{ color: "#F5B849" }} />
                  </div>
                </div>
                <div className="w-[80%] flex ">
                  <h5 className="text-xs text-[#BBBCC1]">
                    fjdklsfjdklsfjdklsj
                  </h5>
                </div>
              </div>
              <div className="max-sm:w-[80%] sm:w-[100%] flex flex-col gap-1">
                <div className="w-full flex space-x-2 max-sm:items-center sm:items-start ">
                  <h5 className={`text-md font-bold ${color}`}>$599</h5>
                  <h5
                    className={`text-md text-[#BBBCC1] ${
                      !isDarkMode ? "opacity-50" : ""
                    } line-through font-bold`}
                  >
                    $45125
                  </h5>
                </div>
                <div className="w-[80%] max-sm:mb-5 flex justify-start  items-center">
                  <img src="/product/discount.svg" alt="" className="h-3" />
                  <h5 className="text-[#26BF94] text-xxs font-bold">
                    Offer Price $599
                  </h5>
                </div>
              </div>
            </div>
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
