"use client";

// import { checkboxTitle } from "@/constant";
import { ParkingMeter } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { on } from "events";
import { useDarkMode } from "@/context/darkmode";
import { caraSousCateRequired, filterCara } from "@/types/Api";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

export function CheckboxDemo({ parametre, isSelected, onSelect }: any) {
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
  let color: string = isDarkMode ? "text-black" : "text-[#BBBBBC]";

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={parametre.id}
        onCheckedChange={onSelect}
        checked={isSelected}
        color={"#855ADF"}
      />
      <label
        htmlFor={parametre.item}
        className={`text-sm ${color} font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
      >
        {parametre.name}
      </label>
    </div>
  );
}

export function CheckboxDemoCara(props: {
  cara: caraSousCateRequired[] | undefined;
  onSelect: Function;
  isSelected: filterCara | undefined;
}) {
  const { cara, onSelect, isSelected } = props;
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
  const [selectedItemCheck, setSelectedItemsCheck] = useState<filterCara[]>([]);
  let color: string = isDarkMode ? "text-black" : "text-[#BBBBBC]";
  const map = new Map<
    string,
    { id_caracteristique: string; value: string[] }
  >();
  const convertToMap = (cara: caraSousCateRequired[]) => {
    cara.forEach((item: caraSousCateRequired) => {
      if (map.has(item.name)) {
        map.get(item.name)?.value.push(item.value);
      } else {
        map.set(item.name, {
          id_caracteristique: item.id_caracteristique,
          value: [item.value],
        });
      }
    });
  };
  convertToMap(cara ? cara : []);

  const handleSelectedItem = (nameC: string, value: string): boolean => {
    // console.log("name:==> " + nameC + " value: " + value);
    const findItem = selectedItemCheck.find((item) => item.name == nameC);
    if (findItem && findItem.value == value) {
      // console.log("it's true");
      return true;
    }
    return false;
    // return selectedItemCheck.some(
    //   (items) => items.name === nameC && items.value === value
    // );
  };

  return (
    <div className="flex flex-col items-center space-x-2">
      {Array.from(map.entries()).map(([nameC, values], index: number) => (
        <div
          key={nameC}
          className={`w-full flex items-start  rounded-tl-md rounded-tr-md flex-col gap-2 justify-around ${
            isDarkMode ? " bg-white" : " bg-[#1A1C1E]"
          }`}
        >
          <div className="w-[50%] flex gap-2 ">
            <h1 className="w-full ml-4 mt-4 text-[#8D9198] font-bold">
              {nameC.toLocaleUpperCase()}
            </h1>
          </div>
          {values.value.map((item: string, index: number) => (
            <div className="w-full flex flex-col ml-6 gap-2 ">
              <div key={index} className={`flex items-center space-x-2`}>
                <Checkbox
                  key={nameC}
                  name={nameC}
                  checked={handleSelectedItem(nameC, item)}
                  onCheckedChange={() => {
                    setSelectedItemsCheck((prevSelectedItemsCheck) => {
                      // Check if the item is already selected
                      const isAlreadySelected = prevSelectedItemsCheck.some(
                        (items) => items.name === nameC && items.value === item
                      );

                      if (isAlreadySelected) {
                        // If already selected, unselect it by filtering it out
                        return prevSelectedItemsCheck.filter(
                          (data) =>
                            !(data.name === nameC && data.value === item)
                        );
                      } else {
                        // Otherwise, remove other selections in the category and add the new item
                        const filteredItems = prevSelectedItemsCheck.filter(
                          (data) => data.name !== nameC
                        );
                        return [...filteredItems, { name: nameC, value: item }];
                      }
                    });
                    // setSelectedItemsCheck((prevSelectedItemsCheck) => {
                    //   const filteredItems = prevSelectedItemsCheck.filter(
                    //     (data) => data.name !== nameC
                    //   );

                    //   return [...filteredItems, { name: nameC, value: item }];
                    // });
                    onSelect({ name: nameC, value: item });
                  }}
                  color={"#855ADF"}
                />
                <label
                  htmlFor={item}
                  className={`text-sm ${color} font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                >
                  {item}
                </label>
              </div>
            </div>
          ))}
        </div>
      ))}
      {/* <h1 className="w-full ml-4 mt-4 text-[#8D9198] font-bold">
        {}
      </h1> */}
      {/* <Checkbox
        id={parametre.id}
        onCheckedChange={onSelect}
        checked={isSelected}
        color={"#855ADF"}
      />
      <label
        htmlFor={parametre.item}
        className={`text-sm ${color} font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
      >
        {parametre.name}
      </label> */}
    </div>
  );
}
