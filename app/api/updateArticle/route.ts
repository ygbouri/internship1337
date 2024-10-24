import prisma from "@/lib/instancePrisma";
import { articlePostSchemaPUT } from "@/lib/schemaValidator";
import { ProductGet } from "@/types/Api";
import { article } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

function getDifferences(obj1: any, obj2: any): any {
  let differences: any = {};
  Object.keys(obj1).forEach((key) => {
    if (key in obj2) {
      if (obj1[key] !== obj2[key]) {
        differences[key] = obj2[key];
      }
    }
  });
  return differences;
}
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("hola", body);
    const validateData = await articlePostSchemaPUT.validate(body, {
      abortEarly: false,
    });
    const art = await prisma.article.findUnique({
      where: {
        id_article: validateData.reference,
      },
    });
    if (art) {
      const diff = getDifferences(art, validateData);
      if (diff) {
        const upda = await prisma.article.update({
          where: {
            id_article: art.id_article,
          },
          data: diff,
        });
        if (upda)
          return NextResponse.json({ data: upda, message: "data updated" });
        return NextResponse.json({ data: upda, message: "data not updated" });
      }
    }
  } catch (error: any) {
    if (error.name === "ValidationError") {
      console.error("Validation Errors:", error.errors); // Log validation errors
      return NextResponse.json(
        { data: null, message: "Validation failed", errors: error.errors },
        { status: 400 } // Send a 400 error for validation issues
      );
    }
    return NextResponse.json(
      { data: null, message: "something is wrong" },
      { status: 500 }
    );
  }
}
