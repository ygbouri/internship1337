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
import { CheckboxListProduct } from "./myCustomComponents/CheckBoxListProduct";

import { CiEdit } from "react-icons/ci";

import { PaginationDemo } from "./myCustomComponents/pagination";
import {
  AlertDialogDemo,
  AlertDialogDemoDeleteAll,
} from "./myCustomComponents/alertDialog";
import { Product, etat_article } from "@/types";
import { useEffect, useState } from "react";

export function ListProduct() {
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
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
    {
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
    },
  ];
  const [product, setProduct] = useState(arr);
  const [selectedProducts, setSelectedProducts] = useState(new Set());
  const [selectedAll, setselectedAll] = useState(false);

  const toggleSelectAll = () => {
    if (selectedAll) {
      setSelectedProducts(
        new Set(product.map((product) => product.id_article))
      );
    } else {
      setSelectedProducts(new Set());
      // setselectedAll(!selectedAll);
    }
    setselectedAll(!selectedAll);
  };

  const toggleProductSelection = (id: string) => {
    const newSelection = new Set(selectedProducts);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedProducts(newSelection);
  };

  const deleteSelectedProducts = () => {
    setProduct(
      product.filter((product) => !selectedProducts.has(product.id_article))
    );
    setSelectedProducts(new Set()); // Clear selection after deletion
    setselectedAll(!selectedAll);
  };

  useEffect(() => {
    setselectedAll(true);
  }, []);

  return (
    <div className="flex  w-full flex-col ">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b  px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"></div>
        <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
          <Tabs defaultValue="all">
            <CardHeader className=" flex justify-start item ">
              <CardTitle
                className={` ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
              >
                Products List
              </CardTitle>
            </CardHeader>
            <TabsContent value="all" className="">
              <Card
                x-chunk="dashboard-06-chunk-0"
                className={`${
                  isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
                } h-full  flex flex-col gap-6 `}
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
                      Product List
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
                          className={`hidden  w-[100px] sm:table-cell ${
                            isDarkMode ? "border-gray-100" : "border-gray-500"
                          }`}
                        >
                          <CheckboxListProduct
                            key={1}
                            parametre={"all"}
                            isSelected={!selectedAll}
                            onSelect={() => {
                              toggleSelectAll();
                            }}
                            className=" "
                          />
                        </TableHead>
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
                          className={`font-bold ${
                            isDarkMode ? "text-black" : "text-[#BBBBBC]"
                          } ${
                            isDarkMode ? "border-gray-100" : "border-gray-500"
                          }`}
                        >
                          Category
                        </TableHead>
                        <TableHead
                          className={` font-bold ${
                            isDarkMode ? "text-black" : "text-[#BBBBBC]"
                          } hidden md:table-cell ${
                            isDarkMode ? "border-gray-100" : "border-gray-500"
                          }`}
                        >
                          Price
                        </TableHead>
                        <TableHead
                          className={`font-bold ${
                            isDarkMode ? "text-black" : "text-[#BBBBBC]"
                          } hidden md:table-cell ${
                            isDarkMode ? "border-gray-100" : "border-gray-500"
                          }`}
                        >
                          Stock
                        </TableHead>
                        <TableHead
                          className={`font-bold ${
                            isDarkMode ? "text-black" : "text-[#BBBBBC]"
                          } hidden md:table-cell ${
                            isDarkMode ? "border-gray-100" : "border-gray-500"
                          }`}
                        >
                          Marque
                        </TableHead>
                        <TableHead
                          className={`font-bold ${
                            isDarkMode ? "text-black" : "text-[#BBBBBC]"
                          } hidden md:table-cell ${
                            isDarkMode ? "border-gray-100" : "border-gray-500"
                          }`}
                        >
                          Created at
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
                            className={`hidden ${
                              isDarkMode ? "border-gray-100" : "border-gray-500"
                            } border  sm:table-cell`}
                          >
                            <CheckboxListProduct
                              key={item.id_article}
                              parametre={item.id_article}
                              isSelected={
                                selectedProducts.has(item.id_article) ||
                                selectedProducts.size === product.length
                              }
                              onSelect={() =>
                                toggleProductSelection(item.id_article)
                              }
                              className=" "
                            />
                          </TableCell>
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
                              <div className={`w-full flex items-center`}>
                                <h3
                                  className={`font-bold ${
                                    isDarkMode ? "text-black" : "text-[#BBBBBC]"
                                  }`}
                                >
                                  {item.name_article}
                                </h3>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell
                            className={`${
                              isDarkMode ? "border-gray-100" : "border-gray-500"
                            }`}
                          >
                            <Badge
                              variant="outline"
                              className={` font-bold ${
                                isDarkMode ? "text-black" : "text-[#BBBBBC]"
                              }`}
                            >
                              laptops
                            </Badge>
                          </TableCell>
                          <TableCell
                            className={` font-bold hidden md:table-cell ${
                              isDarkMode ? "text-black" : "text-[#BBBBBC]"
                            } ${
                              isDarkMode ? "border-gray-100" : "border-gray-500"
                            }`}
                          >
                            ${item.prix_TVA}
                          </TableCell>
                          <TableCell
                            className={` font-bold hidden md:table-cell  ${
                              isDarkMode ? "text-black" : "text-[#BBBBBC]"
                            } ${
                              isDarkMode ? "border-gray-100" : "border-gray-500"
                            }`}
                          >
                            {item.quantite_stock}
                          </TableCell>
                          <TableCell
                            className={` font-bold hidden md:table-cell ${
                              isDarkMode ? "text-black" : "text-[#BBBBBC]"
                            } ${
                              isDarkMode ? "border-gray-100" : "border-gray-500"
                            }`}
                          >
                            2023-07-12 10:42 AM
                          </TableCell>
                          <TableCell
                            className={`${
                              isDarkMode ? "border-gray-100" : "border-gray-500"
                            }`}
                          >
                            <div className="  flex w-full space-x-2">
                              <Link href="/editProduct">
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                  className=" w-5 h-5 rounded-md bg-[#EDF7FD] "
                                >
                                  <CiEdit
                                    className="w-4 h-4 rounded-md bg-[#EDF7FD] "
                                    style={{ color: "#3A84AF" }}
                                  />
                                </Button>
                              </Link>
                              <AlertDialogDemo
                                siz={5}
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
                <CardFooter className="  gap-2 flex items-center  justify-between">
                  <div className="w-[50%] ">
                    <PaginationDemo></PaginationDemo>
                  </div>
                  <div className="  rounded-md ">
                    <AlertDialogDemoDeleteAll
                      onSelect={deleteSelectedProducts}
                    ></AlertDialogDemoDeleteAll>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
