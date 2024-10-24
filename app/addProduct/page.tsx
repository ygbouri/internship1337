"use client";
import { useDarkMode } from "@/context/darkmode";
import React, { useEffect, useState } from "react";

import {
  SelectDemo,
  SelectDemoCategorie,
  SelectDemoSousCategorie,
  SelectEtatProduct,
} from "@/components/myCustomComponents/select";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { BsPlusLg } from "react-icons/bs";
import {
  DialogBrand,
  DialogCategorie,
  DialogSousCategorie,
} from "@/components/myCustomComponents/Dialog";
import ImageUploader from "@/components/Uploaderfile";

import { Button } from "@/components/ui/button";
import { nameValue } from "@/types";
import { Input } from "@/components/ui/input";
import {
  allCategorie,
  // allMarqueOfProduct,
  allSousCategorie,
  postProductD,
} from "@/service/fetchCategorie";

export default function AddProduct() {
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
  const [qteStock, setQteStock] = useState<number>(0);

  const [brandItem, setBrand] = useState("");
  const [idCategorie, setIdCategorie] = useState("");

  const [name, setName] = useState("");
  const [reference, setReference] = useState("");
  const [etatProduct, setEtatProduct] = useState("");
  const [purchacePrice, setPurchasePrice] = useState<number>(0.0);
  const [sellingPrice, setSellingPrice] = useState<number>(0.0);

  const [sousCategorie, setSousCategorie] = useState("");
  const [text, setText] = useState("");
  const [textD, setDText] = useState("");
  const [lengthSDesc, setLengthSDesc] = useState(200);
  const [lengthDesc, setLengthDesc] = useState(500);
  const [branTab, setBranTab] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenS, setIsOpenS] = useState(false);

  const [isOpenB, setIsOpenB] = useState(false);
  const [refetchCategorie, SetRefetchCategorie] = useState(false);
  const [refetchSousCategorie, SetRefetchSousCategorie] = useState(false);
  const [images, setImages] = useState<File[]>([]);

  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: (data: any) => postProductD(data),
    onSettled: () => {
      console.log("onSuccess");
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });

  const { data: SousCategories } = useQuery({
    queryKey: ["SousCategorie", idCategorie],
    queryFn: () => {
      return allSousCategorie(idCategorie);
    },
    enabled: idCategorie != "" || refetchSousCategorie == true,
  });

  useEffect(() => {
    SetRefetchCategorie(true);
  }, [refetchCategorie]);
  const arrEtatProduct: string[] = ["New", "Used"];

  const { data: Categorie } = useQuery({
    queryKey: ["allCategorie"],
    queryFn: allCategorie,
    enabled: refetchCategorie,
  });

  const handleSCategorie = (even: any) => {
    const str: string = even.target.value;
    setText(str);
    setLengthSDesc(200 - str.length);
  };

  const handleCategorie = (even: any) => {
    const tab: string = even.target.value;
    setDText(tab);
    setLengthDesc(500 - tab.length);
  };
  const handleSelectCategorie = (item: string) => {
    if (item !== "") setIdCategorie(item);
    else setIdCategorie("");
  };

  const handleSousCategorie = (item: string) => {
    if (item !== "") setSousCategorie(item);
  };
  const handleSelectEtatProduct = (item: string) =>
    setEtatProduct(item.toLocaleUpperCase());

  const handleBrand = (item: string) => {
    const checkItem = branTab.includes(item);
    if (!checkItem) branTab.push(item);
  };

  const selectedBrand = (item: string) => {
    if (item) setBrand(item);
  };

  const checkData = (): boolean => {
    if (
      sousCategorie != "" &&
      text != "" &&
      textD != "" &&
      brandItem != "" &&
      qteStock != 0 &&
      images.length > 0 &&
      etatProduct != "" &&
      sellingPrice != 0.0 &&
      name != " " &&
      reference != ""
    ) {
      return true;
    }
    return false;
  };
  const postProduct = (e: any) => {
    e.preventDefault();

    if (checkData()) {
      const formData = new FormData();

      formData.append("reference", reference);
      formData.append("name_article", name);
      formData.append("prix", sellingPrice.toString());
      formData.append("quantite_stock", qteStock.toString()),
        images.forEach((item: File) => {
          formData.append("image", item);
        });
      formData.append("description", textD),
        formData.append("small_description", text),
        formData.append("etat", etatProduct),
        formData.append("marque", brandItem),
        mutate.mutate(formData);
    } else {
      console.log("ko");
    }
  };

  return (
    <div className={`flex flex-col gap-8 h-auto w-full sm:py-4 sm:px-4  `}>
      <div className={`sm:gap-4 `}>
        <h1
          className={`${
            isDarkMode ? "text-black" : "text-[#BBBBBC]"
          } font-semibold text-2xl`}
        >
          Add product
        </h1>
      </div>
      <div
        className={`w-full h-auto  ${
          isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
        } rounded-t-md flex max-xl:flex-col pt-2 pl-2 relative`}
      >
        <div
          className={`w-[50%] max-xl:w-full  flex flex-col gap-4  px-2 py-2`}
        >
          <div className={`flex flex-col gap-2`}>
            <label
              className={`w-auto font-semibold text-sm ${
                isDarkMode ? "text-black" : "text-[#BBBBBC]"
              } ${isDarkMode ? "bg-white" : "bg-[#1A1C1E]"}`}
            >
              Product Name *
            </label>
            <Input
              type="text"
              style={{ outline: "none" }}
              className={` border ${
                isDarkMode ? "border-gray-100" : "border-gray-500"
              } rounded-md px-2 py-2 font-medium text-xs ${
                isDarkMode ? "text-black" : "text-[#BBBBBC]"
              } ${isDarkMode ? "bg-white" : "bg-[#1A1C1E]"}`}
              placeholder="Name"
              onBlur={(e: any) => setName(e.target.value)}
            />
          </div>
          <div className={`flex flex-col gap-2`}>
            <label
              className={`w-auto font-semibold text-sm ${
                isDarkMode ? "text-black" : "text-[#BBBBBC]"
              }`}
            >
              Product Reference *
            </label>
            <Input
              type="text"
              style={{ outline: "none" }}
              className={` border ${
                isDarkMode ? "border-gray-100" : "border-gray-500"
              } ${
                isDarkMode ? "text-black" : "text-[#BBBBBC]"
              } rounded-md px-2 py-2 font-medium text-xs ${
                isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
              }`}
              placeholder="Reference"
              onBlur={(e: any) => setReference(e.target.value)}
            />
            <label
              className={`font-semibold text-xs  ${
                isDarkMode ? "text-black" : "text-[#BBBBBC]"
              }`}
            >
              *Reference should be unique
            </label>
          </div>

          <div className={`flex max-xl:flex-col gap-2`}>
            <div className="w-[50%] max-xl:w-full flex flex-col gap-2">
              <label
                className={`w-auto font-semibold text-sm ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                }`}
              >
                Categorie *
              </label>
              <div className="flex gap-1 h-auto">
                <SelectDemoCategorie
                  className={` w-[95%] h-auto border ${
                    isDarkMode ? "border-gray-100" : "border-gray-500"
                  } ${
                    isDarkMode ? "text-black" : "text-[#BBBBBC]"
                  } rounded-md px-2 py-2 font-medium text-xs ${
                    isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
                  }`}
                  arr={Categorie}
                  onSelect={handleSelectCategorie}
                  title={"Chose Categorie"}
                ></SelectDemoCategorie>

                <Button
                  variant={"outline"}
                  className={`px-3 `}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <BsPlusLg
                    strokeWidth={0.6}
                    className="size-4 text-zinc-600"
                  ></BsPlusLg>
                </Button>
                {isOpen && (
                  <DialogCategorie
                    title={"Add Categorie"}
                    isOpen={isOpen}
                    isDarkMode={isDarkMode}
                    setIsopen={setIsOpen}
                    onRefetchCategories={() => {
                      queryClient.invalidateQueries({
                        queryKey: ["allCategorie"],
                      });
                      console.log("onRefetchCategories");
                    }}
                    SetRefetchCategorie={SetRefetchCategorie}
                  />
                )}
              </div>
            </div>
            <div className="w-[50%] max-xl:w-full flex flex-col gap-2">
              <label
                className={`w-auto font-semibold text-sm ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                }`}
              >
                SubCategorie *
              </label>
              <div className="flex gap-1 h-auto">
                <SelectDemoSousCategorie
                  className={` w-[95%] h-auto border ${
                    isDarkMode ? "border-gray-100" : "border-gray-500"
                  } ${
                    isDarkMode ? "text-black" : "text-[#BBBBBC]"
                  } rounded-md px-2 py-2 font-medium text-xs ${
                    isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
                  }`}
                  arr={
                    SousCategories != undefined
                      ? SousCategories
                      : Array().fill("data not found")
                  }
                  title={"Chose SousCategorie"}
                  onSelect={handleSousCategorie}
                ></SelectDemoSousCategorie>

                <Button
                  variant={"outline"}
                  className="px-3"
                  onClick={() => {
                    setIsOpenS(!isOpenS);
                  }}
                >
                  <BsPlusLg
                    strokeWidth={0.6}
                    className="size-4 text-zinc-600"
                  ></BsPlusLg>
                </Button>
                {isOpenS && (
                  <DialogSousCategorie
                    title={"Add SousCategorie"}
                    isOpen={isOpenS}
                    isDarkMode={isDarkMode}
                    setIsopen={setIsOpenS}
                    dataProp={idCategorie}
                    SetRefetchSousCategorie={SetRefetchSousCategorie}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={`flex max-xl:flex-col gap-2`}>
            <div className="w-[50%] max-xl:w-full flex flex-col gap-2">
              <label
                className={`w-auto font-semibold text-sm ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                }`}
              >
                Product State *
              </label>
              <SelectEtatProduct
                className={` w-full h-auto border ${
                  isDarkMode ? "border-gray-100" : "border-gray-500"
                } ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                } rounded-md px-2 py-2 font-medium text-xs ${
                  isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
                }`}
                arr={arrEtatProduct}
                title={"Product State"}
                onSelect={handleSelectEtatProduct}
              ></SelectEtatProduct>
            </div>
            <div className="w-[50%] max-xl:w-full flex flex-col gap-2">
              <label
                className={`w-auto font-semibold text-sm ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                }`}
              >
                Product brand *
              </label>
              <div className=" flex gap-1 h-auto">
                <SelectDemo
                  className={` w-full h-auto border ${
                    isDarkMode ? "border-gray-100" : "border-gray-500"
                  } ${
                    isDarkMode ? "text-black" : "text-[#BBBBBC]"
                  } rounded-md px-2 py-2 font-medium text-xs ${
                    isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
                  }`}
                  arr={branTab}
                  title={"Product Brand"}
                  onSelect={handleBrand}
                  SelectBrand={selectedBrand}
                ></SelectDemo>
                <Button
                  variant={"outline"}
                  className="px-3"
                  onClick={() => {
                    setIsOpenB(!isOpenB);
                  }}
                >
                  <BsPlusLg
                    strokeWidth={0.6}
                    className="size-4 text-zinc-600"
                  ></BsPlusLg>
                </Button>
                {isOpenB && (
                  <DialogBrand
                    title={"Brand"}
                    isOpen={isOpenB}
                    setIsopen={setIsOpenB}
                    newBrand={handleBrand}
                  ></DialogBrand>
                )}
              </div>
            </div>
          </div>

          <div className="w-[100%] flex flex-col gap-2">
            <label
              className={`w-auto font-semibold text-sm ${
                isDarkMode ? "text-black" : "text-[#BBBBBC]"
              }`}
            >
              Small Description *
            </label>
            <Textarea
              value={text}
              onChange={handleSCategorie}
              className={`col-span-3  ${
                isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
              } ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
              placeholder="Write the Small Description"
              maxLength={200}
            ></Textarea>
            <Label
              className={`col-span-3 text-[12px] ${
                isDarkMode ? "text-black" : "text-[#BBBBBC]"
              }`}
            >
              The max lenght of caracters you should be enter is {lengthSDesc}
            </Label>
          </div>
          <div className="w-[100%] flex flex-col gap-2">
            <label
              className={`w-auto font-semibold text-sm ${
                isDarkMode ? "text-black" : "text-[#BBBBBC]"
              }`}
            >
              Description *
            </label>
            <Textarea
              value={textD}
              onChange={handleCategorie}
              className={`col-span-3  ${
                isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
              } ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
              placeholder="Write the Small Description"
              maxLength={500}
            ></Textarea>
            <Label
              className={`col-span-3 text-[12px] ${
                isDarkMode ? "text-black" : "text-[#BBBBBC]"
              }`}
            >
              The max lenght of caracters you should be enter is {lengthDesc}
            </Label>
          </div>
        </div>

        <div
          className={`w-[50%] max-xl:w-full  flex flex-col gap-4   px-2 py-2`}
        >
          <div className="w-[100%] flex flex-col gap-2">
            <label
              className={`w-auto font-semibold text-sm ${
                isDarkMode ? "text-black" : "text-[#BBBBBC]"
              }`}
            >
              Product Images *
            </label>
            <div
              className={` border border-dashed h-auto ${
                isDarkMode ? "border-gray-100" : "border-gray-500"
              } ${
                isDarkMode ? "text-black" : "text-[#BBBBBC]"
              } rounded-md px-2 py-2 font-medium text-xs ${
                isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
              }`}
            >
              <div className="  flex justify-center">
                <ImageUploader
                  images={images}
                  setImages={setImages}
                  isDarkMode={isDarkMode}
                ></ImageUploader>
              </div>
            </div>
          </div>
          <div className={`flex max-xl:flex-col gap-2`}>
            <div className="w-[50%] max-xl:w-full flex flex-col gap-2">
              <label
                className={`w-auto font-semibold text-sm ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                }`}
              >
                Quantity In Stock *
              </label>
              <div className="flex gap-1">
                <Input
                  type="number"
                  style={{ outline: "none" }}
                  value={qteStock}
                  step={"1"}
                  min={"0"}
                  className={`w-[95%] border ${
                    isDarkMode ? "border-gray-100" : "border-gray-500"
                  } ${
                    isDarkMode ? "text-black" : "text-[#BBBBBC]"
                  } rounded-md px-2 py-2 font-medium text-xs  ${
                    isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
                  }`}
                  placeholder="Number of Quantity in Stock (Max value should be enter is 3000)"
                  onChange={(e: any) =>
                    e.target.value > 0 && e.target.value < 3000
                      ? setQteStock(Number.parseInt(e.target.value, 10))
                      : setQteStock(0)
                  }
                />
              </div>
            </div>
            <div className="w-[50%] flex flex-col gap-2 ">
              <label
                className={`w-auto font-semibold text-sm ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                }`}
              >
                Selling Price *
              </label>
              <Input
                type="number"
                placeholder="Enter Selling price "
                value={sellingPrice}
                className={` border ${
                  isDarkMode ? "border-gray-100" : "border-gray-500"
                } ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                } rounded-md px-2 py-2 font-medium text-xs ${
                  isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
                }`}
                onChange={(e: any) => {
                  e.target.value > 0
                    ? setSellingPrice(Number(e.target.value))
                    : setSellingPrice(0.0);
                }}
              ></Input>
            </div>
          </div>
          <div
            className={`absolute top-[99%] w-full rounded-b-md right-0  border border-dashed flex justify-end ${
              isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
            }   ${
              isDarkMode ? "border-gray-100" : "border-gray-500"
            } py-3 px-3 gap-2`}
          >
            <div className={`w-28`}>
              <Button
                variant={"outline"}
                className="w-full bg-[#855ADF] text-white border-[#855ADF]"
                onClick={(e: any) => postProduct(e)}
              >
                Add Product
              </Button>
            </div>
            <div className={`w-28`}>
              <Button
                variant={"outline"}
                className={"w-28 text-white bg-red-500"}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
