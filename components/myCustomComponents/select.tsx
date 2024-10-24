"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDarkMode } from "@/context/darkmode";
import { allCategorieDto, SousCategorie } from "@/types/Api";
import { useEffect, useState } from "react";
// import Test from "./SideBar";

export function SelectDemo(props: {
  title: string;
  arr: string[];
  onSelect: Function;
  SelectBrand: Function;
  className: any;
}) {
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [isbrand, setIsBrand] = useState(false);
  const [newItem, setNewItem] = useState("");
  // const [newArr, setNewArr] = useState<string[]>([]);
  // const [newItem ,setNewItem] =  useState("")
  const { title, arr, onSelect, SelectBrand } = props;
  // useEffect(() => {}, [arr]);
  // console.log(arr);
  // console.log("new arr : " + newArr);
  // const handleNewItem = (item: string) => {
  //   // console.log("i'm here");
  //   arr.push(item);
  //   // onSelect(item);
  // };
  const choseItem = (item: string) => {
    SelectBrand(item);
  };
  const handleSelect = (item: string) => {
    // console.log("brand new : " + item);
    onSelect(item);
  };

  return (
    <Select
      onValueChange={(value: string) => {
        choseItem(value);
      }}
    >
      <SelectTrigger
        className={` w-full h-auto border ${
          isDarkMode ? "border-gray-100" : "border-gray-500"
        } ${
          isDarkMode ? "text-black" : "text-[#BBBBBC]"
        } rounded-md px-2 py-2 font-medium text-sm ${
          isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
        }`}
      >
        <SelectValue placeholder={"Select " + title} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup key={1}>
          {arr.map((item: string, index: number) => (
            <SelectItem key={index} value={item}>
              {String(item).toLocaleUpperCase()}
            </SelectItem>
          ))}
          {/* 
          <DialogBrand
            title={"Add Brand"}
            isOpen={isOpen}
            setIsopen={setIsOpen}
            newBrand={handleSelect}
            // tab={newArr}
          ></DialogBrand> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function SelectEtatProduct({ title, arr, onSelect }: any) {
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();

  const handleSelect = (item: string) => {
    console.log("brand new : " + item);
    onSelect(item.toLocaleUpperCase());
  };
  return (
    <Select
      onValueChange={(value: any) => {
        handleSelect(value);
      }}
    >
      <SelectTrigger
        className={` w-full h-auto border ${
          isDarkMode ? "border-gray-100" : "border-gray-500"
        } ${
          isDarkMode ? "text-black" : "text-[#BBBBBC]"
        } rounded-md px-2 py-2 font-medium text-sm ${
          isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
        }`}
      >
        <SelectValue placeholder={"Select " + title} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup key={1}>
          {arr &&
            arr.map((item: any, index: number) => (
              <SelectItem key={index} value={item}>
                {String(item).toLocaleUpperCase()}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export function SelectDemoCategorie({ title, onSelect, arr }: any) {
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [newCategorie, setNewCategorie] = useState<
    allCategorieDto[] | undefined
  >([]);

  useEffect(() => {
    setNewCategorie(arr);
  }, [arr?.length]);

  const handleSelect = (item: string) => {
    console.log(item);
    if (item !== null && item !== undefined) {
      onSelect(item);
    }
  };

  return (
    <Select
      onValueChange={(value: any) => {
        handleSelect(value);
      }}
    >
      <SelectTrigger
        className={` w-full h-auto border ${
          isDarkMode ? "border-gray-100" : "border-gray-500"
        } ${
          isDarkMode ? "text-black" : "text-[#BBBBBC]"
        } rounded-md px-2 py-2 font-medium text-sm ${
          isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
        }`}
      >
        <SelectValue placeholder={"Select " + title} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup key={1}>
          {newCategorie &&
            newCategorie?.map((item: any, index: number) => {
              return (
                <SelectItem key={item.id_categorie} value={item.id_categorie}>
                  {String(item.name).toLocaleUpperCase()}
                </SelectItem>
              );
            })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function SelectDemoSousCategorie({ title, arr, onSelect }: any) {
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectSousCategorie = (item: string) => {
    if (item !== null && item !== undefined) onSelect(item);
  };
  const [newSousCategorie, setNewSousCategorie] = useState<
    SousCategorie[] | undefined
  >([]);

  useEffect(() => {
    setNewSousCategorie(arr);
  }, [arr?.length]);
  return (
    <Select
      onValueChange={(value: any) => {
        handleSelectSousCategorie(value);
      }}
    >
      <SelectTrigger
        className={` w-full h-auto border ${
          isDarkMode ? "border-gray-100" : "border-gray-500"
        } ${
          isDarkMode ? "text-black" : "text-[#BBBBBC]"
        } rounded-md px-2 py-2 font-medium text-sm ${
          isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
        }`}
      >
        <SelectValue placeholder={"Select " + title} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup key={1}>
          {newSousCategorie &&
            newSousCategorie?.map((item: any, index: number) => {
              return (
                <SelectItem
                  key={item.id_souscategorie}
                  value={item.id_souscategorie}
                >
                  {String(item.name).toLocaleUpperCase()}
                </SelectItem>
              );
            })}
        </SelectGroup>
        {/* <DialogCategorie
          title={"Add SousCategorie"}
          isOpen={isOpen}
          isDarkMode={isDarkMode}
          setIsopen={setIsOpen}
        /> */}
      </SelectContent>
    </Select>
  );
}
