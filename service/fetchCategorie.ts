import {
  CategorieEndPoint,
  Marques,
  Product,
  ProductEndPoint,
  SousCategorie,
  SousCategoriePost,
  allCategorieDto,
  aritclesEndPoint,
} from "@/types/Api";
import { useAxios, useAxiosPost, useAxiosPostProduct } from "@/utils";

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
      CategorieEndPoint.SousCategorie + `?idCategorie=${id_categorie}`
    );
    if (allSousCategorie) return allSousCategorie;
  } catch (error) {}
};

export const getAllProductsofSousGa = async (id_sousCategorie: string) => {
  try {
    const allProducts = await useAxios<SousCategorie>(
      "get",
      CategorieEndPoint.SousCategorie + `/${id_sousCategorie}`
    );
    if (allProducts) return allProducts.articles;
  } catch (error) {}
};

// export const allMarqueOfProduct = () => {
//   try {
//     const allMarques = useAxios<Marques[]>("get", aritclesEndPoint.Marques);

//     if (allMarques) {
//       //  allMarques.m
//       return allMarques;
//     }
//   } catch (error) {}
// };

// ************************************************************  POST  **************************************************

export const postCategorie = async (data: SousCategoriePost) => {
  try {
    const response = await useAxiosPost<SousCategoriePost>(
      "post",
      CategorieEndPoint.PostCategorie,
      data
    );

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
    const response = useAxiosPostProduct<Product>(
      "post",
      ProductEndPoint.ProductPost,
      data
    );
    if (response) return response;
  } catch (error) {}
};
