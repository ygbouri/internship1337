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
