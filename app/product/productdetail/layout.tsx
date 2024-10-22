// import "~/styles/globals.css";
// import "~/styles/index.css";
// import "~/styles/style.scss";
// import { ClerkProvider } from "@clerk/nextjs";
// import { Toaster } from "sonner";
// import { Inter } from "~/styles/fonts";
// import TrpcProvider from "~/providers/trpc-provider";

// export const metadata = {
//   title: "FlaminGo",
//   description: "Support Made Easy",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html
//       lang="en"
//       className={`h-full ${Inter.className}`}
//       suppressHydrationWarning
//     >
//       {/* <ClerkProvider> */}
//       <body className="bg-white">
//         {/* <Toaster richColors /> */}
//         {/* <TrpcProvider > */}
//         <div className="h-[70px] w-full">Navbar</div>
//         <main className="relative  min-w-[280px]">{children}</main>
//         <div className="h-[70px] w-full">footer</div>
//         {/* </TrpcProvider> */}
//       </body>
//       {/* </ClerkProvider> */}
//     </html>
//   );
// }
