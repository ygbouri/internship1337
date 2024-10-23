"use client";
import { useDarkMode } from "@/context/darkmode";
import React, { useEffect, useState } from "react";
import {
  allCategorie,
  allFournisseur,
  allMarqueOfProduct,
  allSousCategorie,
  caracteristiqueOfSousCategorie,
  postProductD,
} from "@/requests/categorie";
import {
  SelectDemo,
  SelectDemoCategorie,
  SelectDemoFournisseur,
  SelectDemoSousCategorie,
  SelectEtatProduct,
} from "./myCustomComponents/select";
import { Input } from "./ui/input";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Item } from "@radix-ui/react-dropdown-menu";
import { Product, SousCategorie, caraSousCate } from "@/types/Api";
import { CgAddR } from "react-icons/cg";
import { BsPlusLg } from "react-icons/bs";
import {
  DialogBrand,
  DialogCategorie,
  DialogEditNameCaracteristique,
  DialogFournisseur,
  DialogSerial,
  DialogSousCategorie,
} from "./myCustomComponents/Dialog";
import ImageUploader from "./Uploaderfile";
import addCaracteristique from "./addCaracteristique";
import { Button } from "./ui/button";
import AddCaracteristique from "./addCaracteristique";
import { nameValue } from "@/types";
// import load from 'lodash'

export default function AddProduct() {
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
  const [qteStock, setQteStock] = useState<number>(0);
  const [qteMin, setQteMin] = useState<number>(0);
  const [nbDayNew, setNbDayNew] = useState<number>(0);
  const [brandItem, setBrand] = useState("");
  const [idCategorie, setIdCategorie] = useState("");
  const [idFournisseur, setIdFournisseur] = useState("");
  const [name, setName] = useState("");
  const [reference, setReference] = useState("");
  const [etatProduct, setEtatProduct] = useState("");
  const [purchacePrice, setPurchasePrice] = useState<number>(0.0);
  const [sellingPrice, setSellingPrice] = useState<number>(0.0);
  const [tvaPrice, setTvaPrice] = useState<number>(0.0);
  // const [hide, setHide] = useState(false);
  // const [hideS, setHideS] = useState(false);
  const [sousCategorie, setSousCategorie] = useState("");
  const [text, setText] = useState("");
  const [textD, setDText] = useState("");
  const [lengthSDesc, setLengthSDesc] = useState(200);
  const [lengthDesc, setLengthDesc] = useState(500);
  const [branTab, setBranTab] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenS, setIsOpenS] = useState(false);
  const [isOpenQ, setIsOpenQ] = useState(false);
  const [isOpenF, setIsOpenF] = useState(false);
  const [isOpenB, setIsOpenB] = useState(false);
  const [openE, setOpenE] = useState<boolean>(false);

  const [SousCategoriesArray, setSousCategorieArray] =
    useState<SousCategorie[]>();
  const [serials, setSerials] = useState<string[]>([]);
  const [cara, setCara] = useState<nameValue[]>([]);
  const [caraPushed, setCaraPushed] = useState<nameValue[]>([]);
  const [images, setImages] = useState<File[]>([]);

  const mutate = useMutation({
    mutationFn: (data: any) => postProductD(data),
  });
  // if (idCategorie) {
  // console.log(mutate.data);

  const { data: SousCategories } = useQuery({
    queryKey: ["SousCategorie", idCategorie],
    queryFn: () => {
      return allSousCategorie(idCategorie);
    },
    enabled: idCategorie != "",
  });

  // }
  // if (SousCategories == undefined)
  //     SousCategories
  // console.log("add product");
  // console.log(images);
  // let cara: caraSousCate[] = [];

  const { data: CaracteristiquesSousCategorie } = useQuery({
    queryKey: ["CaracteristiquesSousCategorie", sousCategorie],
    queryFn: () => {
      return caracteristiqueOfSousCategorie(sousCategorie);
    },
    enabled: sousCategorie != "",
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const data: nameValue[] = CaracteristiquesSousCategorie
      ? CaracteristiquesSousCategorie?.map((item) => {
          return { name: item.name, value: item.value };
        })
      : [];
    if (CaracteristiquesSousCategorie) {
      setCara(data);
      setCaraPushed(data);
      console.log("carac ", cara);
    }
    // console.log(
    //   cara.length + " oldtable=> " + CaracteristiquesSousCategorie?.length
    // );
  }, [CaracteristiquesSousCategorie]);
  const handleCaracteristique = (name: string, value: string) => {
    if (!cara.includes({ name: name, value: value }, 0)) {
      console.log("dkhal");
      // if (value != "") cara.push({ name, value });
      if (value != "") {
        const dataPushed = caraPushed.filter((item) => item.name !== name);
        dataPushed.push({ name, value });
        console.log("data Pushed", dataPushed);
        setCaraPushed(dataPushed);
        const findObject = cara.find(
          (item) => item.name === name && item.value == value
        );
        if (!findObject) {
          console.log("wld nasse");
          setCara([...cara, { name, value }]);
        }
      }
    }
  };

  const handleEditCaracteristique = (
    oldname: string,
    newName: string,
    index: number
  ) => {
    // if (cara.includes({ name: oldname, value: value }, 0)) {
    //   // let obj :caraSousCate = cara.find({name,value},0)
    //   let index: number = cara.indexOf({ name: oldname,value:value});
    //   cara[index] = { name: newName, value: value };
    // }
    if (index == 0) {
      cara.forEach((item: caraSousCate) => {
        if (oldname === item.name) item.name = newName;
      });
    } else if (index == 1) {
      setCara(cara.filter((item: caraSousCate) => item.name != oldname)); // deletecaracteristique
    }
  };
  // try to use caracteristiqueOfSousCategorie and pass it as a props to addCaracteristique

  const arrEtatProduct: string[] = ["New", "Used"];
  let tabNoSelectedData: string[] = ["-1-1", "No SubCategorie is Selected"];
  //========>useQuery
  const { data: Categorie } = useQuery({
    queryKey: ["allCategorie"],
    queryFn: allCategorie,
  });

  const { data: marques } = useQuery({
    queryKey: ["allMarques"],
    queryFn: allMarqueOfProduct,
  });

  const { data: Fournisseurs } = useQuery({
    queryKey: ["allFournisseur"],
    queryFn: allFournisseur,
  });
  // const SousCategorie = SousCategorieQuery(idCategorie);
  //=======>handleEvent
  const handleSCategorie = (even: any) => {
    const str: string = even.target.value;
    setText(str);
    setLengthSDesc(200 - str.length);
  };

  const handleIdFournisseur = (item: string) => {
    setIdFournisseur(item);
  };
  const handleCategorie = (even: any) => {
    const tab: string = even.target.value;
    setDText(tab);
    setLengthDesc(500 - tab.length);
  };
  const handleSelectCategorie = (item: string) => {
    if (item !== "") setIdCategorie(item);
    else setIdCategorie("-1");
  };

  const handleSousCategorie = (item: string) => setSousCategorie(item);
  const handleSelectEtatProduct = (item: string) =>
    setEtatProduct(item.toLocaleUpperCase());

  let brand: string[] = marques ? marques.map((item) => item.marque) : [];
  useEffect(() => {
    setBranTab(brand);
  }, [marques]);
  const handleBrand = (item: string) => {
    // setBrand(item);
    // setBranTab(brand);
    const checkItem = branTab.includes(item); /// i check why if a chose an brand setBrand(item) set another value
    if (!checkItem) branTab.push(item);
  };
  const selectedBrand = (item: string) => {
    if (item) setBrand(item);
  };

  const checkData = (): boolean => {
    if (
      sousCategorie != "" &&
      nbDayNew != 0 &&
      text != "" &&
      textD != "" &&
      brandItem != "" &&
      qteStock != 0 &&
      qteMin != 0 &&
      serials.length === qteStock &&
      caraPushed.length > 0 &&
      images.length > 0 &&
      idFournisseur != "" &&
      etatProduct != "" &&
      purchacePrice != 0.0 &&
      sellingPrice != 0.0 &&
      tvaPrice != 0.0 &&
      name != " " &&
      reference != ""
    ) {
      if (serials.includes("", 0)) return false;
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
        formData.append("quantite_minimal", qteMin.toString()),
        formData.append("prix_TVA", tvaPrice.toString()),
        formData.append("prix_achat", sellingPrice.toString()),
        images.forEach((item: File) => {
          formData.append("image", item);
        });
      formData.append("description", textD),
        formData.append("small_description", text),
        formData.append("etat", etatProduct),
        formData.append("marque", brandItem),
        formData.append("new_nbr_days", nbDayNew.toString()),
        formData.append("id_fournisseur", idFournisseur),
        formData.append("id_sousCategorie", sousCategorie),
        caraPushed.forEach((item: nameValue) => {
          formData.append("caracteristique", JSON.stringify(item));
        });
      serials.forEach((item: string) => {
        formData.append("Serial", item);
      });
      mutate.mutate(formData);
      console.log("ok");
      console.log(caraPushed);
    } else {
      console.log("ko");
      console.log(serials);
    }
  };

  const handleSerialInput = (index: number, data: string) => {
    // const seri: string[] = [...serials];
    // seri[index] = data;
    // setSerials(seri);

    setSerials((prevStrings) => {
      const updatedStrings = [...prevStrings];
      updatedStrings[index] = data;
      return updatedStrings;
    });
  };
  const colorIC = isDarkMode ? "black" : "#6B7280";
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
                {/* <Button
                  variant={"outline"}
                  className="px-3"
                  onClick={() => {
                    setIsOpenQ(!isOpenQ);
                  }}
                >
                  <BsPlusLg
                    strokeWidth={0.6}
                    className="size-4 text-zinc-600"
                  ></BsPlusLg>
                </Button>
                {isOpenQ && (
                  <DialogSerial
                    title={"Add Serials"}
                    isOpen={isOpenQ}
                    qteStock={qteStock}
                    setQteStock={setQteStock}
                    addSerials={AddSerials}
                    // isDarkMode={isDarkMode}
                    setIsopen={setIsOpenQ}
                    // dataProp={idCategorie}
                  />
                )} */}
              </div>
            </div>
            <div className="w-[50%] max-xl:w-full flex flex-col gap-2">
              <label
                className={`w-auto font-semibold text-sm ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                }`}
              >
                Minimum Quantity *
              </label>
              <Input
                type="number"
                style={{ outline: "none" }}
                value={qteMin}
                className={` border ${
                  isDarkMode ? "border-gray-100" : "border-gray-500"
                } ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                } rounded-md px-2 py-2 font-medium text-xs ${
                  isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
                }`}
                placeholder="Number of Minimum Quantity"
                onChange={(e: any) =>
                  e.target.value > 0
                    ? setQteMin(Number.parseInt(e.target.value, 10))
                    : setQteMin(0)
                }
              />
            </div>
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
                {/* <div > */}
                {/* <button
                  className="w-[50px] h-[35px]  flex justify-center items-center"
                  onClick={() => {
                    setIsOpenS(!isOpenS);
                  }}
                >
                  <CgAddR
                    style={{ width: "100%", height: "100%", color: colorIC }}
                  ></CgAddR>
                </button> */}

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
                {/* </div> */}
                {isOpenS && (
                  <DialogSousCategorie
                    title={"Add SousCategorie"}
                    isOpen={isOpenS}
                    isDarkMode={isDarkMode}
                    setIsopen={setIsOpenS}
                    dataProp={idCategorie}
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
                {/* </div> */}
                {isOpenB && (
                  <DialogBrand
                    title={"Brand"}
                    isOpen={isOpenB}
                    setIsopen={setIsOpenB}
                    newBrand={handleBrand}
                    // tab={newArr}
                  ></DialogBrand>
                )}
              </div>
            </div>
          </div>
          <div className={`flex  gap-2`}>
            <div className="w-[50%] flex flex-col gap-2">
              <label
                className={`w-auto font-semibold text-sm ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                }`}
              >
                Product Supplier *
              </label>
              <div className=" flex gap-1 h-auto">
                <SelectDemoFournisseur
                  className={` w-full h-auto border ${
                    isDarkMode ? "border-gray-100" : "border-gray-500"
                  } ${
                    isDarkMode ? "text-black" : "text-[#BBBBBC]"
                  } rounded-md px-2 py-2 font-medium text-xs ${
                    isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
                  }`}
                  arr={Fournisseurs}
                  title={"Product Supplier"}
                  onSelect={handleIdFournisseur}
                ></SelectDemoFournisseur>

                <Button
                  variant={"outline"}
                  className={`px-3 `}
                  onClick={() => {
                    setIsOpenF(!isOpenF);
                  }}
                >
                  <BsPlusLg
                    strokeWidth={0.6}
                    className="size-4 text-zinc-600"
                  ></BsPlusLg>
                </Button>
                {isOpenF && (
                  <DialogFournisseur
                    title={"Add Fournisseur"}
                    isOpen={isOpenF}
                    setIsopen={setIsOpenF}
                    // newFournisseur={}
                  />
                )}
              </div>
            </div>
            <div className="w-[50%] flex flex-col gap-2">
              <label
                className={`w-auto font-semibold text-sm ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                }`}
              >
                Product number of days as new *
              </label>
              <Input
                type="number"
                style={{ outline: "none" }}
                value={nbDayNew}
                className={` border ${
                  isDarkMode ? "border-gray-100" : "border-gray-500"
                } ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                } rounded-md px-2 py-2 font-medium text-xs ${
                  isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
                }`}
                placeholder="Number of Minimum Quantity"
                onChange={(e: any) =>
                  e.target.value > 0
                    ? setNbDayNew(Number(e.target.value))
                    : setNbDayNew(0)
                }
              />
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

        {/* rightside *********************************** */}
        <div
          className={`w-[50%] max-xl:w-full  flex flex-col gap-4   px-2 py-2`}
        >
          <div className="w-[100%] flex  gap-2">
            <div className="w-[33%] flex flex-col gap-2 ">
              <label
                className={`w-auto font-semibold text-sm ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                }`}
              >
                Purchase Price *
              </label>
              <Input
                type="number"
                placeholder="Enter Purchace price "
                value={purchacePrice}
                className={` border ${
                  isDarkMode ? "border-gray-100" : "border-gray-500"
                } ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                } rounded-md px-2 py-2 font-medium text-xs ${
                  isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
                }`}
                onChange={(e: any) => {
                  e.target.value > 0
                    ? setPurchasePrice(Number(e.target.value))
                    : setPurchasePrice(0.0);
                }}
              ></Input>
            </div>
            <div className="w-[33%] flex flex-col gap-2 ">
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
            <div className="w-[33%] flex flex-col gap-2 ">
              <label
                className={`w-auto font-semibold text-sm ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                }`}
              >
                TVA Price *
              </label>
              <Input
                type="number"
                placeholder="Enter TVA price "
                value={tvaPrice}
                className={` border ${
                  isDarkMode ? "border-gray-100" : "border-gray-500"
                } ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                } rounded-md px-2 py-2 font-medium text-xs ${
                  isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
                }`}
                onChange={(e: any) => {
                  e.target.value > 0
                    ? setTvaPrice(Number(e.target.value))
                    : setTvaPrice(0.0);
                }}
              ></Input>
            </div>
          </div>

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
                {" "}
                {/* <Label
                  className={`w-auto font-semibold text-sm ${
                    isDarkMode ? "text-black" : "text-[#BBBBBC]"
                  }`}
                >
                  Click To Select Your Images Here
                </Label>
                <Input
                  type="file"
                  id="fileProduct"
                  accept="image/*"
                  multiple
                  className="hidden"
                ></Input> */}
                <ImageUploader
                  images={images}
                  setImages={setImages}
                  isDarkMode={isDarkMode}
                ></ImageUploader>
              </div>
            </div>
          </div>

          <div className="w-[100%] flex flex-col gap-2">
            <label
              className={`w-auto font-semibold text-sm ${
                isDarkMode ? "text-black" : "text-[#BBBBBC]"
              }`}
            >
              Characteristics *
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
                <AddCaracteristique
                  idSousCategorie={sousCategorie}
                  isDarkMode={isDarkMode}
                  cara={cara}
                  length={
                    CaracteristiquesSousCategorie
                      ? CaracteristiquesSousCategorie.length
                      : 0
                  }
                  onSelect={handleCaracteristique}
                  EditName={handleEditCaracteristique}
                ></AddCaracteristique>
              </div>
            </div>
          </div>
          {qteStock > 0 && (
            <div className="w-[100%] flex flex-col gap-2">
              <label
                className={`w-auto font-semibold text-sm ${
                  isDarkMode ? "text-black" : "text-[#BBBBBC]"
                }`}
              >
                Serials *
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
                <div className=" grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2">
                  {Array.from({ length: qteStock }, (_, index: number) => (
                    <div key={index} className=" flex  gap-1 ">
                      <Label
                        className={`w-auto content-center font-semibold text-[12px]  ${
                          isDarkMode ? "text-black" : "text-[#BBBBBC]"
                        }  ${isDarkMode ? "bg-white" : "bg-[#1A1C1E]"} `}
                      >
                        {`SERIAL ${index + 1}`}
                      </Label>
                      <Input
                        className={`w-auto  ${
                          isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
                        }`}
                        onBlur={
                          (e: any) => handleSerialInput(index, e.target.value)
                          //   e.preventDefault();
                          //   const seri: string[] = [...serials];
                          //   seri[index] = e.target.value;
                          //   setSerials(seri);
                          // }
                        }
                      ></Input>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
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
