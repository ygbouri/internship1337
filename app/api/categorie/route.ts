import prisma from "@/lib/instancePrisma";
import { postCategorieSchema } from "@/lib/schemaValidator";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const allCategoie = await prisma.categorie.findMany({
    include: {
      sous_categories: true,
    },
  });
  if (allCategoie.length > 0)
    return NextResponse.json({
      data: allCategoie,
      message: "Category retrieval successful",
    });
  else
    return NextResponse.json(
      { data: null, message: "No category found" },
      { status: 200 }
    );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validateData = await postCategorieSchema.validate(body, {
      abortEarly: false,
    });
    const cat = await prisma.categorie.findUnique({
      where: {
        name: validateData.name,
      },
    });
    if (cat)
      return NextResponse.json({
        data: cat,
        message: "this category is exist",
      });
    const postData = await prisma.categorie.create({
      data: {
        name: validateData.name,
        description: validateData.description,
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
