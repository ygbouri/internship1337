export const CategorieEndPoint = {
  allCategorie: "/categorie/",
  SousCategorie: "/sousCategorie",
  PostSousCategorie: "/sousCategorie",
  PostCategorie: "categorie/",
};

export const aritclesEndPoint = {
  Product: "/articles/",
  // SubCategoryProduct: "s/",
};

export const ProductEndPoint = {
  ProductPost: "/articles/",
  proudtPUT: "/updateArticle/",
};
// idCategorie
export interface allCategorieDto {
  login?: string;
  id_categorie: string;
  name: string;
  description: string;
  sous_categories: SousCategorie[];
}

export interface SousCategorie {
  id_souscategorie: string;
  name: string;
  description: string;
  id_categorie: string;
  articles: ProductGet[];
}

export interface SousCategoriePost {
  loign?: string;
  name: string;
  description: string;
  id_categorie?: string;
}
export interface Marques {
  marque: string;
}

export interface UserSignup {
  firstname: string;
  lastname: string;
  password: string;
  genre: string;
  telephone: string;
  address: string;
  image: any;
  email: string;
  ville: string;
}

export interface login {
  username: string;
  password: string;
}

// export class articleCara {

//   image: string;
//   @ArrayNotEmpty()
//   caracteristique: nameValue[];
// }

export interface nameValue {
  name: string;
  value: string;
}

export interface filterCara {
  name: string;
  value: string;
}

export interface Product {
  reference: string;
  name_article: string;
  prix: number;
  quantite_stock: number;
  image: File[];
  description: string;
  small_description: string;
  etat: string;
  marque: string;
}

export interface ProductGet {
  id_article?: string;
  reference: string;
  name_article: string;
  prix: number;
  quantite_stock: number;
  image: string[];
  description: string;
  small_description: string;
  etat: string;
  marque: string;
  id_souscategorie: string;
}

export interface ProductGetData {
  id_article?: string;
  reference: string;
  name_article: string;
  prix: number;
  quantite_stock: number;
  image: string[];
  description: string;
  small_description: string;
  etat: string;
  marque: string;
  sous_categories: sous_categoriesArray[];
}

export interface sous_categoriesArray {
  id_souscategorie: string;
}
