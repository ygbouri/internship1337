import { useQuery } from "@tanstack/react-query";
import { allSousCategorie } from "./categorie";

export function SousCategorieQuery(idCategorie: string) {
  if (idCategorie) {
    const { data } = useQuery({
      queryKey: ["SousCategorie", idCategorie ? idCategorie : undefined],
      queryFn: () => allSousCategorie(idCategorie),
    });
    return data;
  } else return [];
}
