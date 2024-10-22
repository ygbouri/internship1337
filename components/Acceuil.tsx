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
import { useDarkMode } from "@/config/darkmode";
import { PaginationDemo } from "@/components/myCustomComponents/pagination";
import { Product, checkbokCategorie } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  allCategorie,
  allSousCategorie,
  caracteristiqueOfSousCategorie,
  getAllProductsofSousGa,
} from "@/requests/categorie";
import {
  caraSousCateRequired,
  filterCara,
  productCara,
  ProductGet,
  SousCategorie,
} from "@/types/Api";
import Image from "next/image";
// import { useSocket } from "./socketContext";
import { io } from "socket.io-client";
import { Label } from "./ui/label";
import { it } from "node:test";
import { RadioGroupDemo } from "./myCustomComponents/radioButtion";

export default function Acceuil() {
  const [showCategorie, setShow] = useState(false);
  const [showSousCategorie, setShowSousCategorie] = useState(false);
  const [products, setProducts] = useState<productCara[]>([]);
  const [productsFilter, setProductsFilter] = useState<productCara[]>([]);

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
  const [Cara, setCara] = useState<caraSousCateRequired[]>([]);
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
    // console.log("if selected items", selectedItemCaract);
    // console.log("if selected Map items",selectedItemsMap)
  }, [selectedItemCaract.length]);
  const handleSelectCara = (item: filterCara) => {
    // if (selectedItemCaract.some((items:filterCara)=>(items.name === item.name) && (items.value === item.value)))
    //   setSelectedItemCaract((prev:filterCara[])=> prev.filter((items:filterCara)=>(items.name !== item.name) && (items.value !== item.value)))
    // else
    // {
    //   setSelectedItemCaract((prev:filterCara[])=>prev.includes(item)?prev.filter((i)=>i!=item):[...prev,item]);
    // }
    if (selectedItemsMap.has(item.name)) {
      if (selectedItemsMap.get(item.name)?.value != item.value) {
        selectedItemsMap.set(item.name, item);
        setSelectedItemCaract((prev: filterCara[]) =>
          prev.filter((items: filterCara) => items.name !== item.name)
        );
        setSelectedItemCaract((prev: filterCara[]) =>
          prev.includes(item) ? prev.filter((i) => i != item) : [...prev, item]
        );
      } else {
        selectedItemsMap.delete(item.name);
        setSelectedItemCaract((prev: filterCara[]) =>
          prev.filter(
            (items: filterCara) =>
              items.name !== item.name && items.value !== item.value
          )
        );
      }
    } else {
      selectedItemsMap.set(item.name, item);
      setSelectedItemCaract((prev: filterCara[]) =>
        prev.includes(item) ? prev.filter((i) => i != item) : [...prev, item]
      );
    }
  };
  const { data: Categorie } = useQuery({
    queryKey: ["allCategorie"],
    queryFn: allCategorie,
  });

  const { data: SousCategories } = useQuery({
    queryKey: ["SousCategorie", idCategorie],
    queryFn: () => {
      return allSousCategorie(idCategorie);
    },
    enabled: idCategorie != "",
  });

  const { data: articles } = useQuery({
    queryKey: ["articles", idSousCategorie],
    queryFn: () => {
      return getAllProductsofSousGa(idSousCategorie);
    },
    enabled: idSousCategorie != "",
  });

  const { data: Caracteristiques } = useQuery({
    queryKey: ["Caracterisitque", idSousCategorie],
    queryFn: () => {
      return caracteristiqueOfSousCategorie(idSousCategorie);
    },
    enabled: idSousCategorie != "",
  });

  const { data: filterProducts } = useQuery({
    queryKey: ["filterProduct"],
    queryFn: () => {
      return;
    },
    enabled: refetchFilterProduct,
  });

  useEffect(() => {
    if (SousCategories?.length == 0) {
      setCara([]);
      setProducts([]);
    }
  }, [idCategorie]);
  useEffect(() => {
    if (Caracteristiques && Caracteristiques.length > 0) setCara(Cara);
  }, [Caracteristiques?.length]);
  useEffect(() => {
    if (articles && articles.length > 0) {
      setProducts(articles);
    } else {
      setProducts([]);
    }
  }, [idCategorie, idSousCategorie, articles?.length]);
  let countArticle = 0;
  useEffect(() => {
    if (Categorie) {
      countArticle = Categorie.reduce((acc, item) => {
        return (
          acc +
          item.sous_categories?.reduce((acca, items) => {
            return acca + items.articles.length;
          }, 0)
        );
      }, 0);
    }
  }, [Categorie?.length]);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["articles", idSousCategorie] });
  }, [idSousCategorie]);

  // const arr: checkbokCategorie[] = [
  //   { id: "1", data: "hhhhhha" },
  //   { id: "2", data: "hhhhhhb" },
  //   { id: "3", data: "hhhhhhc" },
  //   { id: "4", data: "hhhhhhd" },
  //   { id: "5", data: "hhhhhhe" },
  //   { id: "6", data: "hhhhhhf" },
  //   { id: "7", data: "hhhhhhg" },
  //   { id: "8", data: "hhhhhhh" },
  //   { id: "9", data: "hhhhhhi" },
  //   { id: "10", data: "hhhhhhj" },
  //   { id: "11", data: "hhhhhhk" },
  // ];
  // const nm: number = 2012;
  let color: string = isDarkMode ? " text-black" : "text-[#BBBBBC] ";
  // #2B2E31
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
              {Categorie?.slice(0, showCategorie ? Categorie.length : 4).map(
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
                      {item.sous_categories
                        ?.reduce((acc: number, item: SousCategorie) => {
                          return acc + item.articles?.length;
                        }, 0)
                        .toLocaleString("en-US")}
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
              {SousCategories?.slice(
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
          >
            {/* <RadioGroupDemo
              cara={Caracteristiques}
              isSelected={SelectedItem}
              onSelect={(item: caraSousCateRequired) => {
                setSelectedItem(item);
                handleSelectCara(item);
              }}
            ></RadioGroupDemo> */}
            <CheckboxDemoCara
              cara={Cara}
              isSelected={SelectedItem}
              onSelect={(item: caraSousCateRequired) => {
                setSelectedItem(item);
                handleSelectCara(item);
              }}
            ></CheckboxDemoCara>
          </div>
        </div>

        <div className="w-[100%]  md:h-full sm:min-h-full   min-sm:flex-col sm:grid max-sm:space-y-6  max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4  sm:gap-6 rounded-md  bg-transparent">
          {products.map((item: productCara, index: number) => (
            <div
              key={item.article.id_article}
              className={`relative group h-auto max-sm:w-[97%] w-[95%] max-sm:ml-1  aspect-card   ${
                isDarkMode ? " bg-white" : " bg-[#1A1C1E]"
              }  flex flex-col sm:gap-10 max-sm:gap-2 max-2xl:space-y-1 items-center rounded-lg `}
            >
              <div className="w-[90%] h-[500px] ">
                <Link
                  className=" w-full m-4 h-full cursor-pointer max-sm:p-1"
                  href={`/product/${item.article.id_article}`}
                >
                  <Image
                    src={`http://localhost:5000/file/product?fileName=${item.article.image[0]}&reference=${item.article.reference}`}
                    alt={`image of product name's ${item.article.name_article}`}
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
              <div className="max-sm:w-full  sm:w-[90%] flex flex-col space-y-2 mb-4 max-sm:items-start sm:items-center max-sm:pl-4 max-sm:pr-3">
                <div className="w-full flex flex-col items-start  ">
                  <div className="w-full  flex items-start justify-between">
                    <h3 className={`w-[50%]  ${color} text-sm font-bold`}>
                      {item.article.name_article}
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
                      fjdklsfjdklsfjdklsj
                    </h5>
                  </div>
                </div>
                <div className="max-sm:w-[80%]  sm:w-[100%] flex flex-col gap-1">
                  <div className="w-full flex space-x-2 max-sm:items-center sm:items-start ">
                    {item.article.prix > 0 ? (
                      <h5 className={`text-md font-bold ${color}`}>
                        ${item.article.prix}
                      </h5>
                    ) : (
                      <h5
                        className={`text-md text-[#BBBCC1] ${
                          !isDarkMode ? "opacity-50" : ""
                        } line-through font-bold`}
                      >
                        ${item.article.prix_TVA}
                      </h5>
                    )}
                  </div>
                  {item.article.prix != 0 ? (
                    <div className="w-[80%] max-sm:mb-5 flex justify-start  items-center">
                      <img src="/product/discount.svg" alt="" className="h-3" />
                      <h5 className="text-[#26BF94] text-xxs font-bold">
                        Offer Price $599
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
