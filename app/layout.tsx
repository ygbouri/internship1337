"use client";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { DarkModeProvider, useDarkMode } from "../context/darkmode";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { VariablesProvider } from "@/components/providerVariable";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@/context/userData";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface Props {
  children: React.ReactNode;
  session: any;
}

export default function RootLayout({ children, session }: Props) {
  const client = new QueryClient();

  return (
    <DarkModeProvider>
      <QueryClientProvider client={client}>
        <SessionProvider session={session}>
          <UserProvider>
            <LayoutContent>{children}</LayoutContent>
          </UserProvider>
        </SessionProvider>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

// Créer un nouveau composant qui sera l'enfant de `DarkModeProvider`.
function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useDarkMode();

  // if (cook.get("connect.sid") !== null && cook.get("connect.sid") !== undefined)
  //   localStorage.setItem("islogged", "true");
  let colorT: string = isDarkMode ? " text-black" : "text-[#BBBBBC] ";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Smooth scrolling animation
    });
  };
  const client = new QueryClient();
  return (
    <html lang="en">
      <body
        className={cn(
          `min-h-screen bg-background font-sans antialiased flex flex-col hide-scrollbar overflow-x-hidden  overflow-y-auto gap-2  h-screen w-full ${
            isDarkMode ? " bg-[#EFF1F7]" : " bg-[#2B2E31]"
          }
          }`,
          fontSans.variable
        )}
      >
        <VariablesProvider>
          <div className="h-[100%]  w-full flex flex-col  gap-2 ">
            <div className="w-full    flex flex-col  h-[70px] items-center bg-white fixed top-0 z-50">
              <Navbar />
            </div>
            <div className="flex  h-[calc(100%-100px)] gap-2 justify-between  mt-[70px] ">
              <div className=" h-full w-full">{children}</div>
            </div>
          </div>
        </VariablesProvider>
      </body>
    </html>
  );
}

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//         <DarkModeProvider>
//       <body className={'flex h-screen w-full '}>

//         {/* <Sidebar/> */}
//       <div className="h-full w-full">
//       <Navbar/>

//         {children}

//       </div>

//         </body>
//       </DarkModeProvider>
//     </html>
//   );
// }
