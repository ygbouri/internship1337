import prisma from "@/lib/instancePrisma";
import { user_role } from "@prisma/client";
import NextAuth, { NextAuthOptions, Profile } from "next-auth";
import FortyTwo from "next-auth/providers/42-school";

interface customProfil extends Profile {
  login?: string;
  phone?: string;
}

const options: NextAuthOptions = {
  providers: [
    FortyTwo({
      clientId: process.env.CLIENT_ID_42!,
      clientSecret: process.env.SECRET_ID_42!,
      authorization: {
        params: {
          scope: "public",
          redirect_uri:
            process.env.NEXTAUTH_URL + "/api/auth/callback/42-school",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user, profile }) {
      if (account && profile) {
        const { login, email, displayname } = profile as {
          login: string;
          email: string;
          displayname: string;
        };
        if (account.provider === "42-school") {
          const existUser = await prisma.user.findUnique({
            where: {
              email: profile.email,
            },
          });
          let role: user_role = "CLIENT";
          const allUser = await prisma.user.findMany();
          if (allUser.length == 0) role = "ADMIN";
          if (!existUser) {
            const newUser = await prisma.user.create({
              data: {
                login: login,
                email: email!,
                fullName: displayname,
                image: profile.image?.link.toString()!,
                role: role,
              },
            });
            if (newUser) {
              token.email = newUser.email;
              token.role = newUser.role;
            }
          } else {
            token.email = existUser.email;
            token.role = existUser.role;
          }
        }
      }
      return token;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
};

const handler = NextAuth(options);
export { handler as GET, handler as POST };
