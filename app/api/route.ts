// import { NextApiRequest, NextApiResponse } from "next";
// import { cookies } from "next/headers";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const cookieStore = cookies();
//   const testCookie = cookieStore.get("connect.sid");

//   res.status(200).json({ testCookie: testCookie || null });
// }

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export function GET(req: NextRequest) {
  const cookieStore = cookies();
  const testCookie = cookieStore.get("connect.sid");

  return NextResponse.json({ testCookie: testCookie || null });
}
