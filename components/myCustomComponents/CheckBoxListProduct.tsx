"use client";

// import { checkboxTitle } from "@/constant";
import { ParkingMeter } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { on } from "events";
import { useDarkMode } from "@/config/darkmode";

export function CheckboxListProduct({ parametre, isSelected, onSelect }: any) {
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
  let color: string = isDarkMode ? "text-black" : "text-[#BBBBBC]";

  return (
    <div className="flex items-center ml-2">
      <Checkbox
        id={parametre.id}
        onCheckedChange={onSelect}
        defaultChecked={false}
        checked={isSelected}
        color={"#855ADF"}
      />
      {/* <label
        htmlFor={parametre.item}
        className={`text-sm ${color} font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
      >
        {parametre.data}
      </label> */}
    </div>
  );
}
