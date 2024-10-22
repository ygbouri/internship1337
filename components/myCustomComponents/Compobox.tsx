"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Key } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DialogBrand } from "./Dialog";
import { IoIosClose } from "react-icons/io";

export function ComboboxDemo(props: {
  values: string[];
  name: string;
  length: number;
  caraLength: number;
  idSousCategorie: string;
  onSelect: Function;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const { values, name, length, idSousCategorie, caraLength, onSelect } = props;

  const handelSelectedValue = (): string => {
    let findValue: string | undefined = "";
    let returnValue: string = "";
    findValue = values.find((item) => item.toLocaleLowerCase() === value);
    returnValue =
      findValue != undefined ? findValue : `Select ${name.toLocaleUpperCase()}`;
    return returnValue;
  };

  React.useEffect(() => {}, [idSousCategorie]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-center"
        >
          {handelSelectedValue()}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${name.toLocaleUpperCase()}`} />
          <CommandList>
            <CommandEmpty>No {name.toLocaleUpperCase()} found.</CommandEmpty>
            <CommandGroup className=" flex flex-col max-h-[200px] overflow-y-auto gap-1 ">
              {values?.map((framework, index: number) => (
                <CommandItem
                  key={framework}
                  value={framework?.toLocaleLowerCase()}
                  className="relative w-full"
                  onSelect={(currentValue: string) => {
                    // console.log(currentValue);
                    if (currentValue != "") {
                      // console.log(
                      //   "the value is " + value + " hola  + " + currentValue
                      // );
                      setValue(currentValue);
                      // console.log(length);
                      onSelect(currentValue);
                      setOpen(false);
                    }
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework}
                  {values.indexOf(framework) >= length && (
                    <button
                      className=" w-4 h-4  absolute top-2 right-2 bg-[#8459df]  rounded-full"
                      onClick={() => {
                        const index: number = values.indexOf(framework, 0);
                        values.splice(index, 1);
                        setValue("");
                      }}
                    >
                      <IoIosClose style={{ width: "100%", height: "100%" }} />{" "}
                    </button>
                  )}
                </CommandItem>
              ))}
              <CommandItem className=" sticky bottom-0">
                <DialogBrand
                  isOpen={isOpen}
                  setIsopen={setIsOpen}
                  title={`${name}`}
                  newBrand={(item: string) => {
                    if (!values.includes(item, 0)) values[values.length] = item;
                  }}
                />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
