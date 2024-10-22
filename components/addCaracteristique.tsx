"use client ";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Label } from "./ui/label";
import { IoIosClose } from "react-icons/io";
import { CloudFog, Film } from "lucide-react";
import { Button } from "./ui/button";
import { useQuery } from "@tanstack/react-query";
import { caracteristiqueOfSousCategorie } from "@/requests/categorie";
import { nameValue } from "@/types/Api";
import { ComboboxDemo } from "./myCustomComponents/Compobox";
import { BsPlusLg } from "react-icons/bs";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogDemo } from "./myCustomComponents/MySearch";
import {
  DialogAddCaracteristique,
  DialogBrand,
  DialogEditNameCaracteristique,
} from "./myCustomComponents/Dialog";
import { Value } from "@radix-ui/react-select";
import { MdModeEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
// import { nameValue } from "@/types";

export default function AddCaracteristique(props: {
  idSousCategorie: string;
  isDarkMode: boolean;
  cara: nameValue[];
  length: number;
  onSelect: Function;
  EditName: Function;
}) {
  const { idSousCategorie, isDarkMode, cara, length, onSelect, EditName } =
    props;

  const [openD, setOpenD] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);

  const map = new Map<string, string[]>();
  const convertToMap = (cara: nameValue[]) => {
    cara.forEach((item: nameValue) => {
      if (map.has(item.name)) {
        map.get(item.name)?.push(item.value);
      } else {
        map.set(item.name, [item.value]);
      }
    });
  };
  // useEffect(() => {
  //   console.log("cara =>", cara);
  //   cara.push({ name: "name", value: "value" });
  // }, [idSousCategorie]);
  convertToMap(cara);
  return (
    <div className="w-full flex flex-wrap gap-6 max-md:justify-center ">
      {Array.from(map.entries()).map(([name, values], index: number) => (
        <div
          key={name}
          className={` flex-wrap  gap-2   max-md:justify-center  `}
        >
          <div className="w-[50%] flex gap-2 ">
            <Label
              className={` font-semibold text-[12px]  ${
                isDarkMode ? "text-black" : "text-[#BBBBBC]"
              }  ${isDarkMode ? "bg-white" : "bg-[#1A1C1E]"} `}
            >
              {name.toLocaleUpperCase()}
            </Label>

            {index >= length - 1 && (
              <div className=" flex gap-21">
                <button onClick={() => setOpenE(!openE)}>
                  <MdModeEdit
                  // strokeWidth={0.6}
                  // className="size-4 text-zinc-600"
                  ></MdModeEdit>
                </button>
                <button onClick={() => EditName(name, "", 1)}>
                  <TiDeleteOutline
                    className="size-4"
                    style={{ color: "red" }}
                  />
                </button>
              </div>
            )}
            {openE && (
              <DialogEditNameCaracteristique
                isOpen={openE}
                setIsopen={setOpenE}
                onSelect={(data: string) => {
                  EditName(name, data, 0);
                }}
              ></DialogEditNameCaracteristique>
            )}
          </div>
          {/* <div className="w-[50%] max-md:items-center red"> */}
          <ComboboxDemo
            values={values}
            idSousCategorie={idSousCategorie}
            name={name}
            length={index >= length - 1 ? 0 : values.length}
            caraLength={length}
            onSelect={(value: string) => {
              if (!cara.includes({ name, value }, 0))
                console.log(" hola first ", name, " ", value);
              onSelect(name, value);
            }}
          ></ComboboxDemo>
          {/* </div> */}
        </div>
      ))}
      <div className="w-full flex justify-end pr-10">
        {idSousCategorie !== "" && (
          <Button variant={"outline"} onClick={() => setOpenD(!openD)}>
            Add more
          </Button>
        )}
        {openD && (
          <DialogAddCaracteristique
            isOpen={openD}
            setIsopen={setOpenD}
            onSelect={(name: string, value: string) => {
              if (!cara.includes({ name, value }, 0)) onSelect(name, value);
            }}
          ></DialogAddCaracteristique>
        )}
      </div>
    </div>
  );
}

// export default ImageUploader;
// values={values} name={name}
