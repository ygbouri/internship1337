"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
// import { CheckboxDemo } from "./myCustomComponents/checkbox";
// import { checkbokCategorie } from "../types";
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
// import { PaginationDemo } from "./myCustomComponents/pagination";
// import { useDarkMode } from "../config/darkmode";
import {
  CheckboxDemo,
  CheckboxDemoCara,
} from "@/components/myCustomComponents/checkbox";
import { useDarkMode } from "@/context/darkmode";
import { PaginationDemo } from "@/components/myCustomComponents/pagination";
import { Product, checkbokCategorie } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import {
  allCategorieDto,
  filterCara,
  ProductGet,
  SousCategorie,
} from "@/types/Api";
import Image from "next/image";
// import { useSocket } from "./socketContext";
import { io } from "socket.io-client";
import { Label } from "./ui/label";
import { it } from "node:test";
import { RadioGroupDemo } from "./myCustomComponents/radioButtion";
import {
  allCategorie,
  allSousCategorie,
  getAllProductsofSousGa,
} from "@/service/fetchCategorie";

export default function Acceuil() {
  const [showCategorie, setShow] = useState(false);
  const [showSousCategorie, setShowSousCategorie] = useState(false);
  const [products, setProducts] = useState<ProductGet[]>([]);

  // const [showSousCategorie, setSousShow] = useState(false);
  // const [showIcons, setShowIcons] = useState(false);
  // const [detailProduct, setDisplayDetail] = useState(false);
  const { isDarkMode } = useDarkMode();
  const [selectedItemCatgorie, setSelectedItemCatgorie] = useState(""); // Store the ID of the selected item
  const [selectedItemSubCatgorie, setSelectedItemSubCatgorie] = useState(""); // Store the ID of the selected item
  const [selectedItemCaract, setSelectedItemCaract] = useState<filterCara[]>(
    []
  ); // Store the ID of the selected item
  const [SelectedItem, setSelectedItem] = useState<filterCara>(); // Store the ID of the selected item
  const [idCategorie, setIdCategorie] = useState("");
  const [idSousCategorie, setSousCategorie] = useState("");
  const [refetchFilterProduct, setRefetchFilterProduct] = useState(false);
  const [Categorie, setCategorie] = useState<allCategorieDto[]>([]);
  const [SousCategories, setSousCategories] = useState<SousCategorie[]>([]);

  let id = 0;
  const queryClient = useQueryClient();
  const selectedItemsMap: Map<string, filterCara> = new Map<
    string,
    filterCara
  >();
  const handleSelect = (id: string, index: number) => {
    if (index == 0) {
      setIdCategorie(id);
      setSelectedItemCatgorie(id);
    } else if (index == 1) {
      setSousCategorie(id);
      setSelectedItemSubCatgorie(id);
    }
  };

  useEffect(() => {
    const getAllCategorie = async () => {
      const data = await allCategorie();
      if (data) setCategorie(data);
    };
    getAllCategorie();
  }, []);

  useEffect(() => {
    if (idCategorie) {
      const getSousCategories = async () => {
        const data = await allSousCategorie(idCategorie);
        if (data) setSousCategories(data);
      };
      getSousCategories();
    }
  }, [idCategorie]);
  useEffect(() => {
    if (idSousCategorie) {
      const getArticles = async () => {
        const data = await getAllProductsofSousGa(idSousCategorie);
        if (data) setProducts(data);
      };
      getArticles();
    }
  }, [idSousCategorie]);

  let color: string = isDarkMode ? " text-black" : "text-[#BBBBBC] ";
  return (
    <div className="w-full h-auto max-sm:min-h-screen flex flex-col mx-auto px-4  gap-6 max-sm:space-y-3 mt-4 ">
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
              {Array.isArray(Categorie) &&
                Categorie.slice(0, showCategorie ? Categorie.length : 4).map(
                  (item, index) => (
                    <div key={index} className="w-[90%]  flex justify-between">
                      <CheckboxDemo
                        key={item.id_categorie}
                        parametre={item}
                        isSelected={item.id_categorie === selectedItemCatgorie}
                        onSelect={() => handleSelect(item.id_categorie, 0)}
                      ></CheckboxDemo>
                      <label
                        className={`px-[2px] py-[2px] ${
                          isDarkMode ? "bg-[#F3F6F8]" : " bg-[#2B2E31]"
                        } ${
                          isDarkMode ? "text-[#8C9097]" : "text-white"
                        } font-bold text-xxs rounded-sm`}
                      >
                        {item.sous_categories.length.toLocaleString("en-US")}
                      </label>
                    </div>
                  )
                )}
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
              SUBCATEGORIES
            </h1>
            <div className="w-full flex flex-col ml-6 gap-4">
              {Array.isArray(SousCategories) &&
                SousCategories?.slice(
                  0,
                  showSousCategorie ? SousCategories.length : 4
                ).map((item, index) => (
                  <div key={index} className="w-[90%]  flex justify-between">
                    <CheckboxDemo
                      key={item.id_souscategorie}
                      parametre={item}
                      isSelected={
                        item.id_souscategorie === selectedItemSubCatgorie
                      }
                      onSelect={() => handleSelect(item.id_souscategorie, 1)}
                    ></CheckboxDemo>
                    <label
                      className={`px-[2px] py-[2px] ${
                        isDarkMode ? "bg-[#F3F6F8]" : " bg-[#2B2E31]"
                      } ${
                        isDarkMode ? "text-[#8C9097]" : "text-white"
                      } font-bold text-xxs rounded-sm`}
                    >
                      {item.articles.length.toLocaleString("en-US")}
                    </label>
                  </div>
                ))}
              <button
                onClick={() => setShowSousCategorie(!showSousCategorie)}
                className="w-[20%] h-6 mb-4 px-2 py-1 bg-[#F3EFFC] text-[#855ADF] text-xs rounded-lg transition-colors"
              >
                {showSousCategorie ? "More-" : "More+"}
              </button>
            </div>
          </div>

          <div
            className={`w-full flex items-start  rounded-tl-md rounded-tr-md flex-col gap-5 justify-around ${
              isDarkMode ? " bg-white" : " bg-[#1A1C1E]"
            }`}
          ></div>
        </div>

        <div className="w-[100%]  md:h-full sm:min-h-full   min-sm:flex-col sm:grid max-sm:space-y-6  max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4  sm:gap-6 rounded-md  bg-transparent">
          {Array.isArray(products) &&
            products.map((item: ProductGet, index: number) => (
              <div
                key={item.id_article}
                className={`relative group h-auto max-sm:w-[97%] w-[95%] max-sm:ml-1  aspect-card   ${
                  isDarkMode ? " bg-white" : " bg-[#1A1C1E]"
                }  flex flex-col sm:gap-10 max-sm:gap-2 max-2xl:space-y-1 items-center rounded-lg `}
              >
                <div className="w-[90%] h-[500px] ">
                  <Link
                    className=" w-full m-4 h-full cursor-pointer max-sm:p-1"
                    href={`/product/${item.id_article}`}
                  >
                    <Image
                      src={`/uploads/${item.image[0]}`}
                      alt={`image of product name's ${item.name_article}`}
                      width={500}
                      height={500}
                      // layout="fill"
                      // objectFit="cover"
                      style={{ objectFit: "cover" }}
                      className={`${
                        isDarkMode ? " bg-[#F3F6F8]" : " bg-[#2B2E31]"
                      }  w-[100%] h-[100%]  rounded-md border ${
                        isDarkMode ? "border-gray-950" : "border-gray-50"
                      } `}
                    />
                  </Link>
                </div>

                <div
                  className={`w-[40px] top-8   group-hover:opacity-100 group-hover:transition-opacity opacity-0 duration-300 gap-2 right-8 h-[100px] bg-transparent flex flex-col absolute`}
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
                <div className="max-sm:w-full  sm:w-[90%] flex flex-col space-y-2 mb-4 max-sm:items-start sm:items-center max-sm:pl-4 max-sm:pr-3">
                  <div className="w-full flex flex-col items-start  ">
                    <div className="w-full  flex items-start justify-between">
                      <h3 className={`w-[50%]  ${color} text-sm font-bold`}>
                        {item.name_article}
                      </h3>
                      {/* <div className="w-[50%] flex items-center justify-end">
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
                      </div> */}
                    </div>
                    <div className="w-[80%] flex ">
                      <h5 className="text-xs text-[#BBBCC1]">
                        {item.description}
                      </h5>
                    </div>
                  </div>
                  <div className="max-sm:w-[80%]  sm:w-[100%] flex flex-col gap-1">
                    <div className="w-full flex space-x-2 max-sm:items-center sm:items-start ">
                      {item.prix > 0 ? (
                        <h5 className={`text-md font-bold ${color}`}>
                          ${item.prix}
                        </h5>
                      ) : (
                        <h5
                          className={`text-md text-[#BBBCC1] ${
                            !isDarkMode ? "opacity-50" : ""
                          } line-through font-bold`}
                        >
                          ${item.prix}
                        </h5>
                      )}
                    </div>
                    {item.prix != 0 ? (
                      <div className="w-[80%] max-sm:mb-5 flex justify-start  items-center">
                        <h5 className="text-[#26BF94] text-xxs font-bold">
                          {item.small_description}
                        </h5>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
