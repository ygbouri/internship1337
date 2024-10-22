import {
  Bold,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  // DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useDarkMode } from "@/config/darkmode";
import {
  DropdownBasketIconProps,
  DropdownNotificationIconProps,
} from "@/types";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaGift } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { SlBasket } from "react-icons/sl";
import { PiGiftThin } from "react-icons/pi";
import Link from "next/link";
import { unique } from "next/dist/build/utils";
import { redirect } from "next/navigation";
import { IoNotificationsOutline } from "react-icons/io5";
export function DropdownLanguageIcon() {
  const [choseImg, setImage] = useState("/navbar/anglaisLang.svg");
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <img
          src={`${choseImg}`}
          alt=""
          className="size-6 cursor-pointer rounded-full"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ">
        <DropdownMenuGroup>
          <DropdownMenuItem className=" ">
            <div
              className="w-full flex justify-between "
              onClick={() => {
                setImage("/navbar/anglaisLang.svg");
              }}
            >
              <img className="size-8" src="/navbar/anglaisLang.svg" alt="" />
              <span>English</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-between">
            <div
              className="w-full flex justify-between "
              onClick={() => {
                setImage("/navbar/frenchLang.svg");
              }}
            >
              <img className="size-8" src="/navbar/frenchLang.svg" alt="" />
              <span>French</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-between">
            <div
              className="w-full flex justify-between "
              onClick={() => {
                setImage("/navbar/maroc.svg");
              }}
            >
              <img className="size-8" src="/navbar/maroc.svg" alt="" />
              <span>Arabic</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DropdownBasketIcon({ cartItems }: DropdownBasketIconProps) {
  const [colorText, setTextColor] = useState(false);
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className=" size-6 ">
          {/* <img
            src="/navbar/basket.svg"
            alt=""
            className="size-5 cursor-pointer rounded-full"
          /> */}
          <SlBasket
            color="#697794"
            style={{ strokeWidth: "2" }}
            className="size-6 font-bold"
          ></SlBasket>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-64 ">
        <DropdownMenuItem>
          <div className="w-full flex justify-between items-center">
            <DropdownMenuLabel>Cart Items</DropdownMenuLabel>
            <div className=" bg-[#ECF8F4] rounded-md font-bold text-[#42C59E]">
              {cartItems.length + " items"}
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {cartItems.map((items, index) => (
            <DropdownMenuItem key={items.id}>
              <div
                key={items.id}
                className="w-full flex justify-between items-center"
              >
                <img
                  src={items.image}
                  alt=""
                  className="size-8 object-cover rounded-full "
                />
                <div className="flex flex-col gap-1">
                  <span className=" font-bold">{items.name}</span>
                  <span>{items.smallDescription}</span>
                </div>
                <span className=" font-bold">{items.price + "Dh"}</span>
                <div className=" size-8 flex items-center">
                  <RiDeleteBin6Line></RiDeleteBin6Line>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className={`w-[100%] flex items-center justify-center h-[100%] bg-[#855ADF] rounded-md cursor-pointer}`}
          onMouseEnter={() => {
            setTextColor(true);
          }}
          onMouseLeave={() => {
            setTextColor(false);
          }}
        >
          <Link href="/cart">
            <span className={colorText ? `text-black` : `text-white`}>
              click here
            </span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
      {/* should be add a link to page of card */}
    </DropdownMenu>
  );
}

export function DropdownNotifIcon({
  notification,
}: DropdownNotificationIconProps) {
  const [colorText, setTextColor] = useState(false);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="size-8">
          {/* <img
            src="/navbar/notification.svg"
            alt=""
            className="size-8 cursor-pointer rounded-full"
          /> */}
          <IoNotificationsOutline
            color="#697794"
            style={{ strokeWidth: "2" }}
            className="size-6 font-bold"
          ></IoNotificationsOutline>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-64 ">
        <DropdownMenuItem>
          <div className="w-full flex justify-between items-center">
            <DropdownMenuLabel>Notification</DropdownMenuLabel>
            <div className=" bg-[#ECF8F4] rounded-md font-bold text-[#42C59E]">
              {notification.length + " Unread"}
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {notification.map((items, index) => (
            <DropdownMenuItem key={items.id}>
              <div
                key={items.id}
                className="w-full flex justify-around items-center "
              >
                {/* <img src={items.image} alt="" className="size-8 object-cover" />
                 */}
                <PiGiftThin className=" size-6 bg-[#F3EEFC] rounded-full"></PiGiftThin>
                <div className="w-[50%] flex flex-col gap-1">
                  <span className=" font-bold overflow-hidden whitespace-nowrap text-ellipsis  ">
                    {items.title}
                  </span>
                  <span className="overflow-hidden whitespace-nowrap text-ellipsis  ">
                    {items.message}
                  </span>
                </div>
                <div className=" size-10 flex items-center justify-center  ">
                  <TiDelete className="size-6 hover:cursor-pointer"></TiDelete>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className={`w-[100%] flex items-center justify-center h-[100%] bg-[#855ADF] rounded-md cursor-pointer}`}
          onMouseEnter={() => {
            setTextColor(true);
          }}
          onMouseLeave={() => {
            setTextColor(false);
          }}
        >
          <span className={colorText ? `text-black` : `text-white`}>
            see all
          </span>
          {/* should be add a link to page of notification */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DropdownProfile() {
  let profile: string = "Login in";
  let isLog: boolean = false;
  if (typeof window === undefined) {
    const checker = localStorage.getItem("isLoged") === "true" ? true : false;
    if (checker) {
      profile = "Profile";
      isLog = true;
    }
  }
  const handleProfile = () => {
    // console.log("signup");
    const pathBeforSignin: string = window.location.pathname;
    console.log("path befor signin", pathBeforSignin);
    localStorage.setItem("pathBeforSigin", pathBeforSignin);
    if (!isLog) window.location.href = "/signin";

    // else
    //   redirect("/user/")
  };
  const handleLogout = () => {
    fetch("http://localhost:5000/auth/logout", {
      method: "GET", // ou 'POST' selon la configuration de votre serveur
      credentials: "include", // Important pour inclure les cookies de session dans la requête
    })
      .then((response) => {
        // Gérer la réponse du serveur
        console.log("Déconnecté avec succès");
        // Rediriger l'utilisateur vers la page de connexion ou autre
        localStorage.removeItem("isLoged");
        localStorage.removeItem("role");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Erreur lors de la déconnexion", error);
      });
  };
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <img
          src="/profile.jpeg"
          alt=""
          className="size-8 rounded-full object-cover"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-38">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleProfile}>
            <User className="mr-2 h-4 w-4" />
            <span>{profile}</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <a href="/setting">Settings</a>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <a href="/support">Support</a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
