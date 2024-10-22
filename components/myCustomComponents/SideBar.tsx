"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AiOutlineMenu } from "react-icons/ai";

import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";
import { BsBasket3 } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useDarkMode } from "@/config/darkmode";
import Link from "next/link";

export function SheetDemo() {
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();

  return (
    <Sheet modal={false}>
      <SheetTrigger asChild className="">
        {/* <Button variant="outline">Open</Button> */}
        <AiOutlineMenu
          color="#697794"
          style={{ strokeWidth: "2" }}
        ></AiOutlineMenu>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[200px] flex flex-col gap-12">
        <SheetHeader>
          <SheetTitle>Name Of WebSite</SheetTitle>
          <SheetDescription>The missions of Admins</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-8">
          <div className="flex gap-2">
            <Link href={"/Dashboard"} className="flex gap-2">
              <RxDashboard></RxDashboard>
              <Label htmlFor="name" className="text-right">
                Dashboard
              </Label>
            </Link>
            {/* <Input id="name" value="Pedro Duarte" className="col-span-3" /> */}
          </div>
          <div className="flex gap-2">
            <Link href={"/addProduct"} className="hover:align-sub flex gap-2">
              <HiOutlineSquare3Stack3D></HiOutlineSquare3Stack3D>
              <Label htmlFor="name" className="text-right cursor-pointer">
                Products
              </Label>
            </Link>
            {/* <Input id="name" value="Pedro Duarte" className="col-span-3" /> */}
          </div>

          <div className="flex gap-2">
            <BsBasket3></BsBasket3>
            <Label htmlFor="name" className="text-right">
              Orders
            </Label>
          </div>

          <div className="flex gap-2">
            <FaRegStar></FaRegStar>
            <Label htmlFor="name" className="text-right">
              Reviews
            </Label>
            {/* <Input id="name" value="Pedro Duarte" className="col-span-3" /> */}
          </div>
          <div className="flex gap-2">
            <TbHandClick></TbHandClick>
            <Label htmlFor="name" className="text-right">
              manual control
            </Label>
            {/* <Input id="name" value="Pedro Duarte" className="col-span-3" /> */}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
