"use client";

import { useEffect, useState } from "react";
import DisplayProduct from "../components/DisplayProduct";
import { useDarkMode } from "@/config/darkmode";
import Link from "next/link";

import { ListProduct } from "@/components/ListProduct";
import WishList from "@/app/wishlist/WishList";
import AddProduct from "@/components/AddProduct";
import Chat from "@/components/chat";
import { useRouter } from "next/navigation";
import Acceuil from "@/components/Acceuil";
// import { useSocket } from "@/components/socketContext";
import { useQueryClient } from "@tanstack/react-query";

export default function Home() {
  const [color, setColor] = useState(true);
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
  let colorT: string = isDarkMode ? " text-black" : "text-[#BBBBBC] ";

  // const router = useRouter();
  // router.push("/Acceuil");

  // const socket = useSocket();
  // const queryClient = useQueryClient();

  // const refetchProduct = () => {
  //   queryClient.invalidateQueries({
  //     queryKey: ["articles"],
  //   });
  //   console.log("update data");
  // };
  // useEffect(() => {
  //   socket?.on("refetchProdut", refetchProduct);
  // }, [socket]);
  return (
    // <Test>
    <main className={`sm:h-full w-full flex `}>
      <Acceuil></Acceuil>
    </main>
  );
}
