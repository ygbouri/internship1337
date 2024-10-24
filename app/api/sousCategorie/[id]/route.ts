import prisma from "@/lib/instancePrisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id_sousCategorie = params.id;

  if (id_sousCategorie) {
    const sousCategorie = await prisma.sous_categorie.findUnique({
      where: {
        id_souscategorie: id_sousCategorie,
      },
      include: {
        articles: true,
      },
    });
    if (sousCategorie)
      return NextResponse.json({
        data: sousCategorie,
        message: "Subcategory retrieval successful",
      });
    return NextResponse.json(
      { data: null, message: "No subcategory found" },
      { status: 200 }
    );
  }
  return NextResponse.json(
    { data: null, message: "something is wrong" },
    { status: 400 }
  );
}
