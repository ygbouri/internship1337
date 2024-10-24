"use client";
import { useDarkMode } from "@/context/darkmode";
import { getAllProductsofSousGa } from "@/service/fetchCategorie";
import { ProductGet, ProductGetData } from "@/types/Api";
import React, { useEffect, useState } from "react";

function SimilarProduct({ product }: any) {
  const { isDarkMode } = useDarkMode();
  const [semiliarProduct, setSemiliar] = useState<ProductGet[]>([]);
  const productData = product as ProductGetData;
  console.log(productData?.sous_categories[0].id_souscategorie);
  useEffect(() => {
    console.log(
      "kldsjfkljfkldajfklasjklsjkljfdkls============> " +
        productData?.sous_categories[0].id_souscategorie
    );
    if (productData?.sous_categories[0].id_souscategorie) {
      const getSemiliarProduct = async () => {
        const data = await getAllProductsofSousGa(
          productData?.sous_categories[0].id_souscategorie
        );
        if (data)
          setSemiliar(
            data.filter((item) => item.id_article != productData.id_article)
          );
        console.log(semiliarProduct);
      };
      getSemiliarProduct();
    }
  }, [productData?.sous_categories[0].id_souscategorie]);
  let color: string = isDarkMode ? " text-black" : "text-[#BBBBBC] ";

  return (
    <div className="h-auto xl:max-h-[700px]  w-full space-y-4 px-10 max-sm:hidden p-4">
      <h3 className={`text-lg font-bold ${color}`}>SimilarProduct</h3>
      <div
        className={` divide-y ${
          isDarkMode ? "divide-gray-100" : "divide-gray-500"
        } flex flex-col  rounded-sm border ${
          isDarkMode ? "border-gray-100" : "border-gray-500"
        } `}
      >
        {semiliarProduct?.map((item, index) => (
          <div
            key={index}
            className="flex red xl:max-h-full overflow-auto  hide-scrollbar  p-2 justify-between "
          >
            <div className="flex gap-4">
              <img
                src={`/uploads/${item.image[0]}`}
                alt=""
                className={`h-12 w-12 ${
                  isDarkMode ? " bg-[#F3F6F8]" : " bg-[#2B2E31]"
                } rounded-md`}
              />
              <div className="">
                <h3 className={`${color} font-semibold`}>
                  {item.name_article}
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className={`font-medium ${color}`}>{item.prix}Dh</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarProduct;
