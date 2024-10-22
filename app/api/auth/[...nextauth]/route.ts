import prisma from "@/lib/instancePrisma";
import { user_role } from "@prisma/client";
import NextAuth, { NextAuthOptions, Profile } from "next-auth";
import FortyTwo from "next-auth/providers/42-school";

interface customProfil extends Profile {
  firstName: string;
  lastName: string;
  login?: string;
  phone?: string;
}
const options: NextAuthOptions = {
  providers: [
    FortyTwo({
      clientId: process.env.CLIENT_ID_42!,
      clientSecret: process.env.SECRET_ID_42!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user, profile }) {
      if (account && user) {
        if (account.provider === "42-school") {
          const customUser = profile as customProfil;
          const existUser = await prisma.user.findUnique({
            where: {
              email: profile?.email,
            },
          });
          let role: user_role = "CLIENT";
          const allUser = await prisma.user.findMany();
          const name = profile?.name?.split(" ");
          if (allUser.length == 0) role = "ADMIN";
          if (!existUser) {
            const newUser = await prisma.user.create({
              data: {
                login: customUser.login!,
                email: customUser.email!,
                firstname: name![0],
                lastname: name![1],
                telephone: customUser.phone,
                image: customUser.image!,
                role: role,
              },
            });
            if (newUser) {
              token.email = newUser.email;
            }
          } else token.email = existUser.email;
        }
      }
      return token;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
};

const handler = NextAuth(options);
export { handler as GET, handler as POST };
