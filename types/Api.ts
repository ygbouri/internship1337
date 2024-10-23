export const CategorieEndPoint = {
  allCategorie: "categorie/",
  SousCategorie: "categorie/getCategorie/",
  PostSousCategorie: "sous-categorie/addSousCategorie",
  PostCategorie: "categorie/addCategorie",
};

export const FournisseurEndPoint = {
  allFournisseur: "fournisseur/getAllFournisseur",
  PostSupplier: "fournisseur/addFournisseur",
};
export const aritclesEndPoint = {
  Marques: "articles/allMarquesOfArticles",
  SubCategoryProduct: "articles/allArticleCat/",
};

export const CaracteristiqueEndPoint = {
  CaracteristiqueSousCategorie: "caracteristique/getCaracteristique/",
};

export const ProductEndPoint = {
  ProductPost: "articles/addArticle",
};
// idCategorie
export interface allCategorieDto {
  login?: string;
  id_categorie: string;
  name: string;
  ImageCouverture: string;
  description: string;
  sous_categories: SousCategorie[];
}

export interface SousCategorie {
  id_souscategorie: string;
  name: string;
  ImageCouverture: string;
  description: string;
  id_categorie: string;
  articles: ProductGet[];
}

export interface SousCategoriePost {
  loign?: string;
  name: string;
  ImageCouverture: any;
  imageMiniature: any;
  description: string;
  smallDescription: string;
  id_categorie?: string;
}
export interface Marques {
  marque: string;
}

export interface Fournisseur {
  id_fournisseur: string;
  name: string;
  email: string;
  telephone: string;
  address: string;
  description: string;
  ville: string;
}
export interface FournisseurPost {
  login?: string;
  name: string;
  email: string;
  telephone: string;
  address: string;
  description: string;
  ville: string;
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

export interface caraSousCate {
  id_caracteristique?: string;
  name: string;
  value: string;
}

export interface caraSousCateRequired {
  id_caracteristique: string;
  name: string;
  value: string;
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
  // id_article?: string;
  reference: string;
  // name_article: string;
  // prix: number;
  // quantite_stock: number;
  // quantite_minimal: number;
  // prix_TVA: number;
  // prix_achat: number;
  // // prix_remise?: number;
  image: File[];
  // description: string;
  // small_description: string;
  // etat: string;
  // marque: string;
  // new_nbr_days: number;
  // id_fournisseur: string;
  // id_sousCategorie: string;
  // caracteristique: nameValue[];
  // Serial: string[];
}

export interface ProductGet {
  id_article?: string;
  reference: string;
  name_article: string;
  prix: number;
  quantite_stock: number;
  quantite_minimal: number;
  prix_TVA: number;
  prix_achat: number;
  // prix_remise?: number;
  image: string[];
  description: string;
  small_description: string;
  etat: string;
  marque: string;
  new_nbr_days: number;
  id_fournisseur: string;
  id_souscategorie: string;
  // caracteristique: nameValue[];
  // Serial: string[];
}

export interface productCara {
  article: ProductGet;
  caracteristique: caraSousCateRequired[];
}
