"use client";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useDarkMode } from "@/context/darkmode";
import { CheckboxListProduct } from "../../components/myCustomComponents/CheckBoxListProduct";

import { CiEdit, CiHeart } from "react-icons/ci";

import { PaginationDemo } from "../../components/myCustomComponents/pagination";
import {
  AlertDialogDemo,
  AlertDialogDemoDeleteAll,
} from "../../components/myCustomComponents/alertDialog";
import { Product, etat_article } from "@/types";
import { useEffect, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { ToggleGroupDemo } from "@/components/myCustomComponents/toggleGroup";
import { useRouter } from "next/router";
import { getProduct } from "@/service/fetchCategorie";
import { ProductGet } from "@/types/Api";

export default function Page() {
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
  const [products, setProducts] = useState<ProductGet>();

  const router = useRouter();
  const id_article = router.query;

  useEffect(() => {
    if (id_article) {
      const getProducts = async () => {
        const data = await getProduct(id_article.toLocaleString());
        if (data) setProducts(data);
      };
      getProducts();
    }
  }, [id_article]);
  let num: number = 0;
  let arr: Product[] = [
    {
      id_article: "a",
      reference: "dell ",
      name_article: "dell dell",
      prix: 0,
      quantite_stock: 0,

      prix_TVA: 4000,
      prix_achat: 1000,
      image: "/swatch.png",
      description:
        "dfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadaf",
      small_description:
        "dfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadaf",
      etat: etat_article.NEW,
      marque: "dell",
      new_nbr_days: 0,
      serie: "f" + num++,
      id_fournisseur: "ad8b6166-f3ca-4e57-9dde-aa3395cce940",
      id_sousCategorie: "d05845ff-e70f-4cba-a48e-9882206fd445",
    },

    {
      id_article: "b",
      reference: "dell ",
      name_article: "dell dell",
      prix: 0,
      quantite_stock: 0,

      prix_TVA: 4000,
      prix_achat: 1000,
      image: "/swatch.png",
      description:
        "dfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadaf",
      small_description:
        "dfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadaf",
      etat: etat_article.NEW,
      marque: "dell",
      new_nbr_days: 0,
      serie: "f" + num++,
      id_fournisseur: "ad8b6166-f3ca-4e57-9dde-aa3395cce940",
      id_sousCategorie: "d05845ff-e70f-4cba-a48e-9882206fd445",
    },
    {
      id_article: "c",
      reference: "dell ",
      name_article: "dell dell",
      prix: 0,
      quantite_stock: 0,

      prix_TVA: 4000,
      prix_achat: 1000,
      image: "/swatch.png",
      description:
        "dfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadaf",
      small_description:
        "dfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadaf",
      etat: etat_article.NEW,
      marque: "dell",
      new_nbr_days: 0,
      serie: "f" + num++,
      id_fournisseur: "ad8b6166-f3ca-4e57-9dde-aa3395cce940",
      id_sousCategorie: "d05845ff-e70f-4cba-a48e-9882206fd445",
    },
    {
      id_article: "d",
      reference: "dell ",
      name_article: "dell dell",
      prix: 0,
      quantite_stock: 0,

      prix_TVA: 4000,
      prix_achat: 1000,
      image: "/swatch.png",
      description:
        "dfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadaf",
      small_description:
        "dfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadaf",
      etat: etat_article.NEW,
      marque: "dell",
      new_nbr_days: 0,
      serie: "f" + num++,
      id_fournisseur: "ad8b6166-f3ca-4e57-9dde-aa3395cce940",
      id_sousCategorie: "d05845ff-e70f-4cba-a48e-9882206fd445",
    },
    {
      id_article: "e",
      reference: "dell ",
      name_article: "dell dell",
      prix: 0,
      quantite_stock: 0,

      prix_TVA: 4000,
      prix_achat: 1000,
      image: "/swatch.png",
      description:
        "dfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadaf",
      small_description:
        "dfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadaf",
      etat: etat_article.NEW,
      marque: "dell",
      new_nbr_days: 0,
      serie: "f" + num++,
      id_fournisseur: "ad8b6166-f3ca-4e57-9dde-aa3395cce940",
      id_sousCategorie: "d05845ff-e70f-4cba-a48e-9882206fd445",
    },

    {
      id_article: "f",
      reference: "dell ",
      name_article: "dell dell",
      prix: 0,
      quantite_stock: 0,

      prix_TVA: 4000,
      prix_achat: 1000,
      image: "/swatch.png",
      description:
        "dfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadaf",
      small_description:
        "dfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadaf",
      etat: etat_article.NEW,
      marque: "dell",
      new_nbr_days: 0,
      serie: "f" + num++,
      id_fournisseur: "ad8b6166-f3ca-4e57-9dde-aa3395cce940",
      id_sousCategorie: "d05845ff-e70f-4cba-a48e-9882206fd445",
    },
  ];

  const addProduct = () => {
    const newProduct = {
      id_article: "g",
      reference: "dell ",
      name_article: "dell dell",
      prix: 0,
      quantite_stock: 0,

      prix_TVA: 4000,
      prix_achat: 1000,
      image: "/swatch.png",
      description:
        "dfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadaf",
      small_description:
        "dfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadafdfsfafadsfadaf",
      etat: etat_article.NEW,
      marque: "dell",
      new_nbr_days: 0,
      serie: "f" + num++,
      id_fournisseur: "ad8b6166-f3ca-4e57-9dde-aa3395cce940",
      id_sousCategorie: "d05845ff-e70f-4cba-a48e-9882206fd445",
    };
    console.log("addd");
    setProduct([...product, newProduct]);
  };

  const deleteProduct = (id: string) => {
    const updatedProductList = product.filter((item) => item.id_article !== id);

    setProduct(updatedProductList);
  };

  const handleInputChange = (event: any, index: number) => {
    const value = event.target.value.replace(/\D/g, "");
    setTotal((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = isNaN(Number(value)) ? 0 : Number(value);
      return newQuantities;
    });
    console.log(total[index]);
  };
  const [product, setProduct] = useState(arr);

  const [total, setTotal] = useState(Array(arr.length).fill(0));

  let color: string = isDarkMode ? " text-black" : "text-[#BBBBBC] ";

  const arrr: string[] = ["Free Delivery", "Express Delivery"];

  const handleQuantityChange = (index: number, sign: string) => {
    if (sign === "+") {
      setTotal((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] += 1;
        return newQuantities;
      });
    } else {
      setTotal((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        if (newQuantities[index] > 0) newQuantities[index] -= 1;
        return newQuantities;
      });
    }
  };

  const valueManuel = (index: number, value: number) => {
    setTotal((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = value;
      return newQuantities;
    });
  };

  return (
    <div className="flex  w-full h-auto flex-col ">
      <div className="flex max-2xl:flex-col h-full sm:gap-4 sm:py-4 sm:px-4">
        <div className="w-[100%] flex  items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8  ">
          <Tabs defaultValue="all" className="w-full lg:w-[100%]">
            <CardHeader className=" flex justify-start item ">
              <CardTitle
                className={` ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
              >
                Cart
              </CardTitle>
            </CardHeader>
            <TabsContent
              value="all"
              className="w-[100%] flex max-2xl:flex-col gap-4"
            >
              <Card
                x-chunk="dashboard-06-chunk-0"
                className={`${
                  isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
                } h-full max-2xl:w-full w-[80%] flex flex-col gap-6 overflow-x-auto`}
              >
                <CardContent
                  className={`w-full
                  ${
                    isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
                  } flex flex-col  rounded-md gap-5 min-w-max overflow-auto overflow-x-auto`}
                >
                  <div
                    className={`h-[50px] border-b ${
                      isDarkMode ? "border-gray-100" : "border-gray-500"
                    } flex items-center`}
                  >
                    {" "}
                    <h2
                      className={`font-bold ${
                        isDarkMode ? "text-black" : "text-[#BBBBBC]"
                      }`}
                    >
                      Cart Items
                    </h2>
                  </div>
                  <Table
                    className={`w-full border border-gray-0 ${
                      isDarkMode ? "border-gray-100" : "border-gray-500"
                    } border-spacing-1  `}
                  >
                    <TableHeader
                      className={`${
                        isDarkMode ? "border-gray-100" : "border-gray-500"
                      } `}
                    >
                      <TableRow
                        className={` ${
                          isDarkMode ? "border-gray-100" : "border-gray-500"
                        } -r border`}
                      >
                        <TableHead
                          className={`font-bold ${
                            isDarkMode ? "text-black" : "text-[#BBBBBC]"
                          } ${
                            isDarkMode ? "border-gray-100" : "border-gray-500"
                          }`}
                        >
                          Product
                        </TableHead>
                        <TableHead
                          className={` font-bold ${
                            isDarkMode ? "text-black" : "text-[#BBBBBC]"
                          } table-cell ${
                            isDarkMode ? "border-gray-100" : "border-gray-500"
                          }`}
                        >
                          Price
                        </TableHead>
                        <TableHead
                          className={`font-bold ${
                            isDarkMode ? "text-black" : "text-[#BBBBBC]"
                          } table-cell ${
                            isDarkMode ? "border-gray-100" : "border-gray-500"
                          }`}
                        >
                          Quantity
                        </TableHead>
                        <TableHead
                          className={`font-bold ${
                            isDarkMode ? "text-black" : "text-[#BBBBBC]"
                          } table-cell ${
                            isDarkMode ? "border-gray-100" : "border-gray-500"
                          }`}
                        >
                          Total
                        </TableHead>
                        <TableHead
                          className={`font-bold ${
                            isDarkMode ? "text-black" : "text-[#BBBBBC]"
                          } table-cell ${
                            isDarkMode ? "border-gray-100" : "border-gray-500"
                          }`}
                        >
                          Action
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="">
                      {product.map((item, index) => (
                        <TableRow
                          key={item.id_article}
                          className={` ${
                            isDarkMode ? "border-gray-100" : "border-gray-500"
                          } -r border`}
                        >
                          <TableCell
                            className={`font-medium md:table-cell flex gap-1 ${
                              isDarkMode ? "border-gray-100" : "border-gray-500"
                            }`}
                          >
                            <div className="w-full flex space-x-1 ">
                              <Image
                                alt="Product image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src={item.image}
                                width="64"
                              />
                              <div
                                className={`w-full flex flex-col items-start justify-center`}
                              >
                                <h3
                                  className={`font-bold ${
                                    isDarkMode ? "text-black" : "text-[#BBBBBC]"
                                  }`}
                                >
                                  {item.name_article}
                                </h3>
                                <h4
                                  className={`font-normal text-xs ${
                                    isDarkMode ? "text-black" : "text-[#BBBBBC]"
                                  }`}
                                >
                                  {" "}
                                  Marque:{" "}
                                  <span className="font-semibold text-[#BBBBBf] text-[13px]">
                                    {item.marque}
                                  </span>
                                </h4>
                                <h5
                                  className={`font-bold text-xxs bg-[#ECF8F4] text-[#44C59D] px-1 rounded-md`}
                                >
                                  In Offer
                                </h5>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell
                            className={` font-bold table-cell ${
                              isDarkMode ? "text-black" : "text-[#BBBBBC]"
                            } ${
                              isDarkMode ? "border-gray-100" : "border-gray-500"
                            }`}
                          >
                            ${item.prix_TVA}
                          </TableCell>
                          <TableCell
                            className={`w-auto  md:w-[10%] font-normal table-cell   ${
                              isDarkMode ? "text-black" : "text-[#BBBBBC]"
                            } ${
                              isDarkMode ? "border-gray-100" : "border-gray-500"
                            }`}
                          >
                            <div
                              className={`flex max-md:w-auto  md:w-40   border ${
                                isDarkMode
                                  ? "border-gray-100"
                                  : "border-gray-500"
                              }  rounded-lg`}
                            >
                              <button
                                className={` w-full md:w-10 h-10  border-r rounded-l-lg ${
                                  isDarkMode
                                    ? "border-gray-100"
                                    : "border-gray-500"
                                } ${
                                  isDarkMode ? "bg-[#F3F6F8]" : "bg-[#2B2E31]"
                                }`}
                                onClick={() => handleQuantityChange(index, "-")}
                              >
                                {/* actionadd */}-
                              </button>
                              <input
                                type="text"
                                inputMode="numeric"
                                value={total[index]}
                                style={{ outline: "none" }}
                                className={`w-full md:w-20 h-10 flex items-center  justify-center text-center  ${
                                  isDarkMode ? "bg-transparent" : "bg-[#232628]"
                                } `}
                                onChange={(e: any) =>
                                  handleInputChange(e, index)
                                }
                              ></input>
                              <button
                                className={`w-full md:w-10 h-10 border-l rounded-r-lg ${
                                  isDarkMode
                                    ? "border-gray-100"
                                    : "border-gray-500"
                                } ${
                                  isDarkMode ? "bg-[#F3F6F8]" : "bg-[#2B2E31]"
                                }`}
                                onClick={() => handleQuantityChange(index, "+")}
                              >
                                +
                              </button>
                            </div>
                          </TableCell>
                          <TableCell
                            className={` font-bold table-cell md:w-40 ${
                              isDarkMode ? "text-black" : "text-[#BBBBBC]"
                            } ${
                              isDarkMode ? "border-gray-100" : "border-gray-500"
                            }`}
                          >
                            ${total[index] * item.prix_TVA}
                          </TableCell>
                          <TableCell
                            className={`${
                              isDarkMode ? "border-gray-100" : "border-gray-500"
                            }`}
                          >
                            <div className=" max-md:flex-col max-md:items-start max-md:justify-start  flex w-full md:space-x-2">
                              <Link href="/wishlist">
                                <button className=" w-8 h-8 flex items-center justify-center rounded-md bg-[#44C59D] ">
                                  <CiHeart
                                    className="w-4 h-4 rounded-md bg-[#44C59D] "
                                    style={{ color: "#ffffff" }}
                                  />
                                </button>
                              </Link>
                              <AlertDialogDemo
                                siz={8}
                                onSelect={() => {
                                  const newProduct = product.filter(
                                    (itemP) =>
                                      itemP.id_article !== item.id_article
                                  );
                                  setProduct(newProduct);
                                }}
                              ></AlertDialogDemo>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <div
                className={`w-[20%] max-2xl:w-full h-[50%] ${
                  isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
                }  rounded-md flex flex-col`}
              >
                <div
                  className={`border-b  ${
                    isDarkMode ? "border-gray-100" : "border-gray-500"
                  } w-full flex items-center justify-center p-3 `}
                >
                  <h1
                    className={`w-[90%] p-2 bg-[#F2EEFC] flex justify-center rounded-md`}
                  >
                    Sale Ends in 18 Hours : 32 Minutes
                  </h1>
                </div>
                <div
                  className={`border-b border-dashed ${
                    isDarkMode ? "border-gray-100" : "border-gray-500"
                  } w-full text-sm flex  flex-col items-start justify-start gap-2 p-3 `}
                >
                  <h2 className={`font-bold ${color}`}>Delivery :</h2>
                  <div className="h-[15%]">
                    <ToggleGroupDemo arr={arrr} />
                  </div>
                  <h3 className={`text-[12px] font-medium ${color}`}>
                    Delivered by 24,Nov 2022
                  </h3>
                </div>
                <div
                  className={`border-b border-dashed  ${
                    isDarkMode ? "border-gray-100" : "border-gray-500"
                  } w-full h-[90px]  flex flex-col gap-2 items-start  justify-center p-3`}
                >
                  <div className="h-[80%] flex w-full ">
                    <input
                      className={`border w-[80%] rounded-l-md  p-1 h-full`}
                      placeholder="Coupon code"
                      type="text"
                      name=""
                      id=""
                    />
                    <button
                      className={`w-[20%] h-full rounded-r-md border-l-0 border bg-[#8459DF] text-white font-medium`}
                    >
                      {" "}
                      Apply
                    </button>
                  </div>
                  <div>
                    <h3 className={`text-[12px] font-medium text-[#44C59D]`}>
                      10% off on first purchase
                    </h3>
                  </div>
                </div>
                <div
                  className={`border-b ${
                    isDarkMode ? "border-gray-100" : "border-gray-500"
                  } w-full flex items-center justify-center p-3 `}
                >
                  <div className={`w-full flex flex-col gap-4`}>
                    <div className={`w-full flex justify-between px-2`}>
                      <h1 className={`text-[#BBBBBC] font-medium text-sm`}>
                        Sub Total
                      </h1>
                      <h1 className={`${color} font-semibold text-sm`}>$2</h1>
                    </div>
                    <div className={`w-full flex justify-between px-2`}>
                      <h1 className={`text-[#BBBBBC] font-medium text-sm`}>
                        Discount
                      </h1>
                      <h1 className={`text-[#44C59D] font-semibold text-sm`}>
                        $2
                      </h1>
                    </div>
                    <div className={`w-full flex justify-between px-2`}>
                      <h1 className={`text-[#BBBBBC] font-medium text-sm`}>
                        Delivery Charges
                      </h1>
                      <h1 className={`text-[#E5533C] font-semibold text-sm`}>
                        $2
                      </h1>
                    </div>
                    <div className={`w-full flex justify-between px-2`}>
                      <h1 className={`text-[#BBBBBC] font-medium text-sm`}>
                        Service Tax (18%)
                      </h1>
                      <h1 className={`${color} font-semibold text-sm`}>$2</h1>
                    </div>
                    <div className={`w-full flex justify-between px-2`}>
                      <h1 className={`text-[#BBBBBC] font-medium text-sm`}>
                        Total :
                      </h1>
                      <h1 className={`text-[#8459DF] font-semibold text-sm`}>
                        $2
                      </h1>
                    </div>
                  </div>
                </div>
                <div
                  className={`border-b ${
                    isDarkMode ? "border-gray-100" : "border-gray-500"
                  } w-full flex flex-col gap-1 items-center justify-center p-3 `}
                >
                  <Link href="/Checkout" className="w-full rounded-md">
                    <button
                      className={`w-full bg-[#8459DF] rounded-md text-white p-2`}
                    >
                      Proceed To Checkout
                    </button>
                  </Link>
                  <Link href="/" className="w-full rounded-md">
                    <button
                      className={`w-full ${
                        isDarkMode ? "bg-[#F3F6F8]" : "bg-[#2B2E31]"
                      } rounded-md ${color} p-2`}
                    >
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
