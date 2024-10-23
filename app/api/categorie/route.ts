import prisma from "@/lib/instancePrisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const allCategoie = await prisma.categorie.findMany();
  if (allCategoie.length > 0)
    return NextResponse.json({
      data: allCategoie,
      message: "Category retrieval successful",
    });
  else return NextResponse.json({ data: null, message: "No category found" });
}
