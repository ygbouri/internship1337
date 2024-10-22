// const

export interface CartItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
  smallDescription: string;
  price: number;
}

export interface DropdownBasketIconProps {
  cartItems: CartItem[];
}

export interface NotifItems {
  id: string;
  title: string;
  message: string;
}

export interface DropdownNotificationIconProps {
  notification: NotifItems[];
}

export interface checkbokCategorie {
  id: string;
  data: string;
}

export enum etat_article {
  NEW,
  USED,
}

export interface Product {
  id_article: string; // for updateArticle this champ must be not empty
  reference: string;
  name_article: string;
  prix: number;
  quantite_stock: number;
  quantite_minimal?: number;
  prix_TVA: number;
  prix_achat: number;
  prix_remise?: number;
  image: string;
  description: string;
  small_description: string;
  etat: etat_article;
  marque: string;
  new_nbr_days: number;
  OrdreAffichage?: number;
  serie?: string;
  lot?: string;
  id_fournisseur: string;

  id_sousCategorie?: string;
  // @ArrayNotEmpty()
  // caracteristique: nameValue[];
}

export interface nameValue {
  name: string;
  value: string;
}

export interface cart {
  id_article: string; // for updateArticle this champ must be not empty
  reference: string;
  name_article: string;
  prix: number;
  quantite_stock: number;
  quantite_minimal?: number;
  prix_TVA: number;
  prix_achat: number;
  prix_remise?: number;
  image: string;
  description: string;
  small_description: string;
  etat: etat_article;
  marque: string;
  new_nbr_days: number;
  OrdreAffichage?: number;
  serie?: string;
  lot?: string;
  id_fournisseur: string;

  id_sousCategorie?: string;
  quantityCart: number;
  // @ArrayNotEmpty()
  // caracteristique: nameValue[];
}
