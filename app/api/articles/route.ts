import { NextRequest, NextResponse } from "next/server";
import { midd } from "../uploads/route";
import prisma from "@/lib/instancePrisma";
import { articlePostSchema } from "@/lib/schemaValidator";

const normalizeFormFields = (fields: { [key: string]: any }) => {
  const normalized: { [key: string]: any } = {};
  for (const key in fields) {
    if (Array.isArray(fields[key]) && fields[key].length === 1) {
      normalized[key] = fields[key][0]; // Convert single-item arrays to strings
    } else {
      normalized[key] = fields[key];
    }
  }
  return normalized;
};

export const POST = async (req: NextRequest) => {
  try {
    const { files, fields } = await midd(req);
    if (!fields) {
      return NextResponse.json(
        { data: null, message: "No form data provided" },
        { status: 400 }
      );
    }
    const normalizedFields = normalizeFormFields(fields);
    const validateData = await articlePostSchema.validate(normalizedFields, {
      abortEarly: true,
    });
    const imageName: string[] = [];
    files?.map((item, index) => {
      imageName.push(item.savedAs);
    });
    const prod = await prisma.article.findUnique({
      where: {
        reference: validateData.reference,
      },
    });
    if (prod)
      return NextResponse.json({ data: null, message: "product is exist" });
    const data = await prisma.article.create({
      data: {
        reference: validateData.reference,
        name_article: validateData.name_article,
        prix: validateData.prix,
        quantite_stock: validateData.quantite_stock,
        image: imageName,
        description: validateData.description,
        small_description: validateData.small_description,
        etat: validateData.etat,
        marque: validateData.marque,
        sous_categories: {
          connect: {
            id_souscategorie: validateData.id_souscategorie,
          },
        },
      },
    });
    if (data)
      return NextResponse.json({ data: data, message: "product added sucess" });
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
};

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id_article = url.searchParams.get("id_article");

    if (id_article) {
      const data = await prisma.article.findUnique({
        where: {
          id_article: id_article,
        },
        include: {
          sous_categories: {
            select: {
              id_souscategorie: true,
            },
          },
        },
      });
      if (data)
        return NextResponse.json({ data: data, message: "product get sucess" });
      return NextResponse.json({ data: null, message: "product not found" });
    }
  } catch (error) {
    return NextResponse.json({ data: null, message: "something is wrong" });
  }
}
