import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// export async function middlewareAdmin(req: NextRequest) {
//   console.log("this is the middleware");
//   if (req.method !== "POST") return NextResponse.next();
//   const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET });
//   if (!token) return NextResponse.redirect("/signin?auth=false");
//   const role = token.role;
//   if (role !== "ADMIN") return NextResponse.redirect("/forbiden");
//   return NextResponse.next();
// }

// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   async function middleware(req) {
//     console.log("fdsfsd", process.env.NEXTAUTH_SECRET);
//     if (req.method !== "POST") return NextResponse.next();
//     const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET });
//     if (!token) return NextResponse.redirect("/signin?auth=false");
//     const role = token.role;
//     if (role !== "ADMIN") return NextResponse.redirect("/forbiden");
//     return NextResponse.next();
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => token?.role === "admin",
//     },
//   }
// );

// export const config = {
//   matcher: ["/addProduct/:path*", "/api/categorie/:path*"],
// };

export default async function middlewareAdmin(req: NextRequest) {
  if (
    req.method !== "POST" &&
    req.url !== `${process.env.NEXTAUTH_URL}/addProduct`
  ) {
    return NextResponse.next();
  }
  const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET });
  if (!token) {
    return NextResponse.rewrite(new URL("/signin", req.url));
  }
  const role = token.role;
  if (role !== "ADMIN")
    return NextResponse.rewrite(new URL("/forbiden", req.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/addProduct/:path*", "/api/categorie/:path*"],
};
