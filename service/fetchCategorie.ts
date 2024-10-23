import {
  CaracteristiqueEndPoint,
  CategorieEndPoint,
  Fournisseur,
  FournisseurEndPoint,
  FournisseurPost,
  Marques,
  Product,
  ProductEndPoint,
  ProductGet,
  SousCategorie,
  SousCategoriePost,
  allCategorieDto,
  aritclesEndPoint,
  caraSousCate,
  caraSousCateRequired,
  productCara,
} from "@/types/Api";
import { useAxios, useAxiosPost, useAxiosPostProduct } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";
import { CiGlass } from "react-icons/ci";
import { GiExplosionRays } from "react-icons/gi";

// ************************************************************  GET  **************************************************
export const allCategorie = async () => {
  try {
    const allcategorie = await useAxios<allCategorieDto[]>(
      "get",
      CategorieEndPoint.allCategorie
    );
    if (allcategorie) return allcategorie;
  } catch (error) {}
};

export const allSousCategorie = (id_categorie: string) => {
  try {
    const allSousCategorie = useAxios<SousCategorie[]>(
      "get",
      CategorieEndPoint.SousCategorie + id_categorie
    );
    if (allSousCategorie) return allSousCategorie;
  } catch (error) {}
};

export const getAllProductsofSousGa = (id_sousCategorie: string) => {
  try {
    const allProducts = useAxios<productCara[]>(
      "get",
      aritclesEndPoint.SubCategoryProduct + id_sousCategorie
    );
    console.log("inside articles", allProducts);
    if (allProducts) return allProducts;
  } catch (error) {}
};

export const allMarqueOfProduct = () => {
  try {
    const allMarques = useAxios<Marques[]>("get", aritclesEndPoint.Marques);

    if (allMarques) {
      //  allMarques.m
      return allMarques;
    }
  } catch (error) {}
};

export const allFournisseur = () => {
  try {
    const allFournisseur = useAxios<Fournisseur[]>(
      "get",
      FournisseurEndPoint.allFournisseur
    );
    if (allFournisseur) {
      return allFournisseur;
    }
  } catch (error) {}
};

export const caracteristiqueOfSousCategorie = (id_sousCategorie: string) => {
  try {
    const allCaracteristique = useAxios<caraSousCateRequired[]>(
      "get",
      CaracteristiqueEndPoint.CaracteristiqueSousCategorie + id_sousCategorie
    );
    if (allCaracteristique) return allCaracteristique;
  } catch (error) {}
};

export const filterProductsByCara = () => {};
// ************************************************************  POST  **************************************************

export const supplierPost = async (data: FournisseurPost) => {
  try {
    const response = useAxios<FournisseurPost>(
      "post",
      FournisseurEndPoint.PostSupplier,
      data
    );
    // console.log(response);
    if (response) return response;
  } catch (error) {}
};
export const postCategorie = async (data: SousCategoriePost) => {
  try {
    console.log("from post Categorie", data);
    const response = useAxiosPost<SousCategoriePost>(
      "post",
      CategorieEndPoint.PostCategorie,
      data
    );
    // const response =  axios("http://localhost:5000/", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // });
    if (response) return response;
  } catch (error) {}
};

export const postSousCategorie = async (data: SousCategoriePost) => {
  try {
    const response = useAxiosPost<SousCategoriePost>(
      "post",
      CategorieEndPoint.PostSousCategorie,
      data
    );
    // const response =  axios("http://localhost:5000/", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // });
    if (response) return response;
  } catch (error) {}
};

export const postProductD = async (data: Product) => {
  try {
    console.log("postpost", data);
    const response = useAxiosPostProduct<Product>(
      "post",
      ProductEndPoint.ProductPost,
      data
    );
    console.log(response);
    if (response) return response;
  } catch (error) {}
};
