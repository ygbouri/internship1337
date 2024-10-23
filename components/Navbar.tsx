"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useDarkMode } from "../context/darkmode";
import {
  DropdownBasketIcon,
  DropdownLanguageIcon,
  DropdownNotifIcon,
  DropdownProfile,
} from "./myCustomComponents/Mydrpdown";
import { CartItem, NotifItems } from "../types";
import { CiDark } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { DialogDemo } from "./myCustomComponents/MySearch";
import { SheetDemo } from "./myCustomComponents/SideBar";
import { useVariable } from "./providerVariable";
import { Button } from "./ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { useUser } from "@/context/userData";
const Navbar = () => {
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
  const [imageState, setImageState] = useState<boolean>(false);
  const { role } = useVariable();
  const user = useUser();
  let roleUser: string = "";
  let color: string = isDarkMode ? "text-black" : "text-[#697764]";
  if (user?.role && user.role === "ADMIN") roleUser = "Admin";
  else if (user?.role && user.role === "CLIENT") roleUser = "Client";

  return (
    <div
      className={`  px1 w-full h-full flex gap-x-5 pr-2  justify-between ${
        isDarkMode ? " bg-white" : " bg-black"
      } items-center  select-none border-b-1 shadow-sm `}
    >
      <div className=" w-[50%] gap-4 flex pl-6 items-center">
        {roleUser === "Admin" && <SheetDemo></SheetDemo>}
        <h1
          className={`font-bold  text-[25px] ${color}`}
          onClick={() => (window.location.href = "/")}
        >
          {" "}
          MyStore
        </h1>
      </div>

      <div
        className={` w-full h-full flex gap-x-5 pr-2 justify-end items-center `}
      >
        <div className="  flex justify-center items-center cursor-pointer">
          <MdOutlineDarkMode
            color="#697794"
            className="size-6"
            onClick={handleDarkModeToggle}
          />
        </div>
        <div className="w-fit h-full items-center justify-between flex gap-2">
          <DropdownProfile imageUrl={user?.image}></DropdownProfile>
          <div className="h-full items-start  justify-center flex flex-col">
            <span className="whitespace-nowrap text-xs text-[#697794] font-bold">
              {user?.fullName ? user.fullName : ""}
            </span>
            <span className=" text-xs text-[#697794]">{roleUser}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
