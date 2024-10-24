"use client";
import React, { useEffect, useState } from "react";
// import LandingPage from "./prelaunch/LandingPage";
// import Background from "../components/mycomponents/Background";
import ProcuctDetails from "../productdetail/ProcuctDetails";
import { useParams } from "next/navigation";
import { getProduct } from "@/service/fetchCategorie";
import { ProductGet } from "@/types/Api";
import { useRouter } from "next/router";

export default function Page({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<ProductGet>();
  const id: string = params.id;

  useEffect(() => {
    if (id) {
      const getProducts = async () => {
        const data = await getProduct(id);
        if (data) setProduct(data);
      };
      getProducts();
    }
  }, [id]);
  console.log("fsfdsfd", product?.id_souscategorie);
  return (
    <div className=" ">
      <ProcuctDetails product={product} />
      {/* <LandingPage />
      <Background /> */}
    </div>
  );
}
