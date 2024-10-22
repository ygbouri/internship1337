import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middlewareAdmin(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET });
  if (!token) return NextResponse.redirect("/signin?auth=false");
  const role = token.role;
  if (role !== "ADMIN") return NextResponse.redirect("/forbiden");
  return NextResponse.next();
}
export const config = {
  matcher: ["/addProduct/:path*"],
};
