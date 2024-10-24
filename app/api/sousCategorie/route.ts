import prisma from "@/lib/instancePrisma";
import { postSousCategorieSchema } from "@/lib/schemaValidator";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const idCategorie = url.searchParams.get("idCategorie");

  if (idCategorie) {
    const sousCategorie = await prisma.sous_categorie.findMany({
      where: {
        id_categorie: idCategorie,
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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validateData = await postSousCategorieSchema.validate(body, {
      abortEarly: false,
    });
    const cat = await prisma.sous_categorie.findUnique({
      where: {
        name: validateData.name,
      },
    });
    if (cat)
      return NextResponse.json({
        data: cat,
        message: "this category is exist",
      });
    const postData = await prisma.sous_categorie.create({
      data: {
        name: validateData.name,
        description: validateData.description,
        id_categorie: validateData.id_categorie,
      },
    });
    if (postData)
      return NextResponse.json({
        data: postData,
        message: "categorie added with sucess",
      });
    return NextResponse.json(
      { data: postData, message: "categorie not added" },
      { status: 400 }
    );
  } catch (error: any) {
    if (error.name === "ValidationError") {
      console.error("Validation Errors:", error.errors);
      return NextResponse.json(
        { data: null, message: "Validation failed", errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { data: null, message: "something is wrong" },
      { status: 500 }
    );
  }
}
