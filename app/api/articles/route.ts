// import prisma from "@/lib/instancePrisma";
// import { NextRequest, NextResponse } from "next/server";

import { NextRequest, NextResponse } from "next/server";
import uploadFileMiddleware from "../uploads/route";
import { NextApiRequest, NextApiResponse } from "next";

// export async function GET(req: NextRequest) {
//   const url = new URL(req.url);
//   const id_sousCategorie = url.searchParams.get("id_sousCategorie");
//   if (id_sousCategorie) {
//     const articles = await prisma.article.findMany({
//       where: {
//         id_souscategorie: id_sousCategorie,
//       },
//     });
//     if (articles)
//       return NextResponse.json({
//         data: articles,
//         message: "products retrieval successful",
//       });
//     return NextResponse.json(
//       { data: null, message: "No product found" },
//       { status: 200 }
//     );
//   }
//   return NextResponse.json(
//     { data: null, message: "something is wrong" },
//     { status: 400 }
//   );
// }

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  //   try {
  const fileName = await uploadFileMiddleware(req, res);
  console.log(fileName);
  return NextResponse.json({ data: null }, { status: 200 });
  //   } catch (error) {}
}
