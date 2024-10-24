"use client";
import { ProgressDemo } from "@/components/myCustomComponents/progress";
import { ToggleGroupDemo } from "@/components/myCustomComponents/toggleGroup";
import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { LiaMedalSolid } from "react-icons/lia";
import { GiCardPickup } from "react-icons/gi";
import { AvatarDemo } from "@/components/myCustomComponents/avatar";
import { BiDislike, BiLike } from "react-icons/bi";
import { useDarkMode } from "@/context/darkmode";
const FiltringDetails = ({ product }: any) => {
  const { isDarkMode } = useDarkMode();
  const arrr: string[] = ["GPS", "GPS+Cellular"];
  console.log(arrr);
  let color: string = isDarkMode ? " text-black" : "text-[#BBBBBC] ";
  let nom: number = 4.2;
  // let num: number = parseFloat(nom.toPrecision()) - parseInt(nom.toFixed());
  let num = Math.floor(nom);
  // let fractionalPart = nom - num;
  return (
    <div className=" h-auto flex flex-col w-full gap-7 rounded-3xl  p-10  lg:w-[66%] ">
      <div className="w-full  flex flex-col">
        <h1 className={`${color} text-lg font-semibold`}>
          Orange Watch Series 4 (GPS + Cellular, 44mm) - Colored Aluminium Case
          with Multiple Featured Sports Band - Regular
        </h1>
        <div className=" flex space-x-2">
          <p className="flex my-auto  rounded-md  text-center   text-white font-bold">
            {Array.from({ length: 4 }).map((item, index) => (
              <FaStar
                key={index}
                className=" h-[12px] "
                style={{ color: "#F4B849" }}
              />
            ))}
            {num > 0 ? (
              <FaStarHalfAlt className="h-3 " style={{ color: "#F4B849" }} />
            ) : (
              ""
            )}
          </p>
          <span className="text-gray-400 font-bold text-[18px]">{nom}</span>
          <span className="text-blue-400 font-bold text-[18px]">
            {" "}
            (2.4k Reviews)
          </span>
        </div>
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
              $1,299
              <span className={`absolute  h-[70%] top-1 text-xs `}>.00</span>
            </p>
            <p
              className={`w-fit text-xxs font-bold bg-red-100 text-center rounded-sm px-2 py-[0.5px] text-red-400`}
            >
              50% off
            </p>
          </div>
          <div className="">
            <p
              className={`w-fit  bg-transparent text-xs font-medium text-gray-400 line-through`}
            >
              M.R.P-$2,599.00
            </p>
          </div>
        </div>
        <div className="w-full  flex md:gap-20 gap-10">
          <div className=" flex flex-col ">
            <div className="h-[50%]">
              <h2 className={`font-bold ${color}`}>Watch Type</h2>
            </div>
            <div className="h-[10%]">
              <ToggleGroupDemo arr={arrr} />
            </div>
          </div>
          <div className="w-auto flex flex-col ">
            <div className="h-[50%]">
              <h2 className={`font-bold ${color} w-auto`}>Watch Type</h2>
            </div>
            <div className="h-[10%] w-auto">
              <ToggleGroupDemo arr={arrr} />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col">
        <div className="">
          <h2 className={`font-bold ${color}`}>Description :</h2>
        </div>
        <div className="">
          <p className="text-[14px] text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            accusamus, quaerat nam quo optio reiciendis harum reprehenderit
            omnis tempora adipisci in iste aperiam unde, repellendus possimus
            explicabo veritatis? Dignissimos, id.
          </p>
        </div>
      </div>
      <div className=" w-[60%] flex max-md:flex-col max-md:gap-5 justify-between">
        {/* <div className="w-auto "> */}
        <div className="h-auto  flex flex-col gap-2">
          <div className="h-auto">
            <h2 className={`font-bold ${color}`}>Colors:</h2>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center border ">
              <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center border ">
              <div className="w-5 h-5 rounded-full bg-orange-500"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center border ">
              <div className="w-5 h-5 rounded-full bg-black"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center border ">
              <div className="w-5 h-5 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* <div className="w-auto max-w-[50%]"></div> */}
        <div className="h-auto  flex flex-col gap-2">
          <div className="h-auto">
            <h2 className={`font-bold ${color}`}>Dial Size(in mm):</h2>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center border ">
              <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center border ">
              <div className="w-5 h-5 rounded-full bg-orange-500"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center border ">
              <div className="w-5 h-5 rounded-full bg-black"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center border ">
              <div className="w-5 h-5 rounded-full bg-green-500"></div>
            </div>
          </div>
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
          <h2 className={`font-bold ${color}`}>Product Details :</h2>
        </div>

        {/*<div className=" h-auto">
          <div className="border w-[70%] order-gray-500 flex items-center">
            <div className=" border-r h-[40px] w-[30%] flex items-center">
              <p className=" text-sm font-semibold">product</p>
            </div>
            <div className="w-[70%] font-semibold text-sm">
              <p className="text-sm font-semibold">brand</p>
            </div>
          </div>
          <div className="border w-[70%] order-gray-500 flex items-center">
            <div className=" border-r h-[40px] w-[30%] flex items-center">
              <p className=" text-sm font-semibold">product</p>
            </div>
            <div className="w-[70%] font-semibold text-sm">
              <p className="text-sm font-semibold">brand</p>
            </div>
          </div>
          <div className="border w-[70%] order-gray-500 flex items-center">
            <div className=" border-r h-[40px] w-[30%] flex items-center">
              <p className=" text-sm font-semibold">product</p>
            </div>
            <div className="w-[70%] font-semibold text-sm">
              <p className="text-sm font-semibold">brand</p>
            </div>
          </div>
          <div className="border w-[70%] order-gray-500 flex items-center">
            <div className=" border-r h-[40px] w-[30%] flex items-center">
              <p className=" text-sm font-semibold">product</p>
            </div>
            <div className="w-[70%] font-semibold text-sm">
              <p className="text-sm font-semibold">brand</p>
            </div>
          </div>
        </div> */}
        <table
          className={`h-auto  w-[80%] max-md:w-auto  divide-y border  ${
            isDarkMode ? "divide-gray-100" : "divide-gray-500"
          }  border ${isDarkMode ? "border-gray-100" : "border-gray-500"}`}
        >
          <thead
            className={`divide-y  ${
              isDarkMode ? "divide-gray-100" : "divide-gray-500"
            }`}
          >
            <tr className="">
              <td
                scope="col"
                className={`w-[30%] border-r text-sm font-semibold ${color}`}
              >
                Product
              </td>
              <td scope="col" className={`text-sm font-semibold ${color}`}>
                brand
              </td>
            </tr>
            <tr className="">
              <td
                scope="col"
                className={`w-[30%] border-r text-sm font-semibold ${color}`}
              >
                Product
              </td>
              <td scope="col" className={`text-sm font-semibold ${color}`}>
                brand
              </td>
            </tr>
            <tr className="">
              <td
                scope="col"
                className={`w-[30%] border-r text-sm font-semibold ${color}`}
              >
                Product
              </td>
              <td scope="col" className={`text-sm font-semibold ${color}`}>
                brand
              </td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div className="h-auto  flex flex-col gap-2 ">
        <div className="h-auto">
          <h2 className={`font-bold ${color}`}>Features :</h2>
        </div>
        <div className="h-auto  flex flex-col gap-2">
          <ul className="ml-8 list-disc">
            <li className="text-[14px] text-gray-500 font-medium">hola</li>
            <li className="text-[14px] text-gray-500 font-medium">hola</li>
            <li className="text-[14px] text-gray-500 font-medium">hola</li>
            <li className="text-[14px] text-gray-500 font-medium">hola</li>
            <li className="text-[14px] text-gray-500 font-medium">hola</li>
            <li className="text-[14px] text-gray-500 font-medium">hola</li>
            <li className="text-[14px] text-gray-500 font-medium">hola</li>
            <li className="text-[14px] text-gray-500 font-medium">hola</li>
            <li className="text-[14px] text-gray-500 font-medium">hola</li>
          </ul>
        </div>
      </div>
      <div className=" h-auto  flex max-xl:flex-col   max-xl:w-full gap-5 max-md:gap-10">
        <div className="h-auto w-[40%]  max-xl:w-full  flex flex-col gap-2 ">
          <div className="h-auto">
            <h2 className={`font-bold truncate ${color}`}>
              Reviews & Ratings :
            </h2>
          </div>
          <div className=" flex  gap-2">
            <FaStar className=" h-[20px] " style={{ color: "#F4B849" }} />
            <div>
              <p className={`text-[14px]  font-medium ${color}`}>
                {" "}
                4.2 out of 5{" "}
              </p>
              <p className="text-[10px] text-gray-500 font-medium">
                Based on (23,435) ratings
              </p>

              {/* shoulde be calculate the real number */}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className=" flex items-center gap-2">
              <p className={`${color} flex items-center`}>
                <span className={`text-[10px]  font-bold ${color}`}>5</span>
                <FaStar
                  className=" h-[9px] "
                  style={{ color: `${isDarkMode ? " black" : "#BBBBBC"}` }}
                />
              </p>
              <ProgressDemo></ProgressDemo>
              <p className={`text-[12px] ${color} font-medium`}>(10.893)</p>
            </div>
            <div className=" flex items-center gap-2">
              <p className={`${color} flex items-center`}>
                <span className={`text-[10px]  font-bold ${color}`}>5</span>
                <FaStar
                  className=" h-[9px] "
                  style={{ color: `${isDarkMode ? " black" : "#BBBBBC"}` }}
                />
              </p>
              <ProgressDemo></ProgressDemo>
              <p className={`text-[12px] ${color} font-medium`}>(10.893)</p>
            </div>
            <div className=" flex items-center gap-2">
              <p className={`${color} flex items-center`}>
                <span className={`text-[10px]  font-bold ${color}`}>5</span>
                <FaStar
                  className=" h-[9px] "
                  style={{ color: `${isDarkMode ? " black" : "#BBBBBC"}` }}
                />
              </p>
              <ProgressDemo></ProgressDemo>
              <p className={`text-[12px] ${color} font-medium`}>(10.893)</p>
            </div>
            <div className=" flex items-center gap-2">
              <p className={`${color} flex items-center`}>
                <span className={`text-[10px]  font-bold ${color}`}>5</span>
                <FaStar
                  className=" h-[9px] "
                  style={{ color: `${isDarkMode ? " black" : "#BBBBBC"}` }}
                />
              </p>
              <ProgressDemo></ProgressDemo>
              <p className={`text-[12px] ${color} font-medium`}>(10.893)</p>
            </div>
            <div className=" flex items-center gap-2">
              <p className={`${color} flex items-center`}>
                <span className={`text-[10px]  font-bold ${color}`}>5</span>
                <FaStar
                  className=" h-[9px] "
                  style={{ color: `${isDarkMode ? " black" : "#BBBBBC"}` }}
                />
              </p>
              <ProgressDemo></ProgressDemo>
              <p className={`text-[12px] ${color} font-medium`}>(10.893)</p>
            </div>
          </div>
        </div>
        <div className="w-[70%] border h-[200px] max-xl:w-full flex flex-col gap-3 overflow-y-auto ">
          <div className="w-full h-full">
            <div className="w-full flex justify-between px-3  items-center">
              <div className="w-auto  p-3 flex gap-3">
                <div className="flex items-center">
                  <AvatarDemo></AvatarDemo>
                </div>
                <div className=" flex w-auto flex-col h-auto gap-1">
                  <div className=" ">
                    <h5 className={`font-semibold text-sm ${color}`}>
                      Alex Carey
                    </h5>
                  </div>
                  <div className=" h-auto flex">
                    {Array.from({ length: 4 }).map((item, index) => (
                      <FaStar
                        key={index}
                        className=" h-[7px] "
                        style={{ color: "#F4B849" }}
                      />
                    ))}
                    <FaRegStar
                      className=" h-[7px] "
                      style={{ color: "#F4B849" }}
                    />
                  </div>
                  <div>
                    <h6 className={`font-medium text-[10px] w-full ${color}`}>
                      Reviewed on 24 nov,2022
                    </h6>
                  </div>
                </div>
              </div>
              <div className="bg-[#28BF94] h-[20px] rounded-md flex items-center">
                <h6 className={`text-[9px] font-bold text-white p-1 `}>
                  Verified Purchase
                </h6>
              </div>
            </div>
            <div className="flex flex-col ml-[50px] gap-1">
              <h3 className={` ${color}font-semibold text-[15px]`}>
                Wonderful product😀
              </h3>

              <p
                className={`font-semibold border text-[12px] mr-[10px] h-[60px] overflow-y-auto ${color}`}
              >
                Really this product is very good quality and best for daily
                use... It supports Spo2.. Very well Really this product is very
                good quality and best for daily use... It supports Spo2.. Very
                Really this product is very good quality and best for daily
                use... It supports Spo2.. Very well Really this product is very
                good quality and best for daily use... It supports Spo2.. Very
              </p>
            </div>
            <div className="  w-auto h-auto gap-3 flex justify-end  p-1">
              <div
                className={` w-[100px] h-auto flex items-center rounded-md ${
                  isDarkMode ? " bg-[#F3F6F8]" : " bg-[#2B2E31]"
                } hover:bg-[#EFF0F6]`}
              >
                <button
                  className={`text-[12px]  font-semibold h-[30px] w-[100%] ${color} `}
                >
                  Report abuse
                </button>
              </div>
              <div className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-[#F2EEFC] icon hover:bg-[#8459DF]">
                <BiLike />
              </div>
              <div className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-[#F2EEFC] icon hover:bg-[#8459DF]">
                <BiDislike />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltringDetails;
