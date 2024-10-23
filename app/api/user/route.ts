import prisma from "@/lib/instancePrisma";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const email = url.searchParams.get("email");
  const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET });
  if (!token) {
    return NextResponse.json(
      { data: null, message: "unauthorized" },
      { status: 200 }
    );
  }

  if (email) {
    const userdata = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userdata)
      return NextResponse.json(
        { data: userdata, message: "user exist" },
        { status: 200 }
      );
  }
  return NextResponse.json(
    { data: null, message: "user something is wrong" },
    { status: 200 }
  );
}
