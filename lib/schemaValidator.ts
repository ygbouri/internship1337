import * as yup from "yup";
export const postCategorieSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
});

export const postSousCategorieSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  id_categorie: yup.string().required(),
});

enum etat_article {
  NEW = "NEW",
  USED = "USED",
}
const etatArticle = Object.values(etat_article);
export const articlePostSchema = yup.object().shape({
  reference: yup.string().required(),
  name_article: yup.string().required(),
  prix: yup.number().required(),
  quantite_stock: yup.number().required(),
  image: yup.array().of(yup.string()),
  description: yup.string().required(),
  small_description: yup.string().required(),
  etat: yup
    .mixed<etat_article>()
    .oneOf(etatArticle as etat_article[], "Invalid status")
    .required("Status is required"),
  marque: yup.string().required(),
  id_souscategorie: yup.string().required(),
});

export const articlePostSchemaPUT = yup.object().shape({
  id_article: yup.string().optional(),
  reference: yup.string().optional(),
  name_article: yup.string().optional(),
  prix: yup.number().optional(),
  quantite_stock: yup.number().optional(),
  image: yup.array().of(yup.string()),
  description: yup.string().optional(),
  small_description: yup.string().optional(),
  etat: yup
    .mixed<etat_article>()
    .oneOf(etatArticle as etat_article[], "Invalid status")
    .required(),
  marque: yup.string().optional(),
});
