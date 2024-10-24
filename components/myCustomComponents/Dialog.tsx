import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { useCallback, useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postCategorie, postSousCategorie } from "@/service/fetchCategorie";
import { SousCategoriePost } from "@/types/Api";

export function DialogCategorie(props: {
  isOpen: boolean;
  setIsopen: Function;
  title: string;
  isDarkMode: boolean;
  onRefetchCategories: Function;
  SetRefetchCategorie: Function;
}) {
  const {
    isOpen,
    setIsopen,
    title,
    isDarkMode,
    onRefetchCategories,
    SetRefetchCategorie,
  } = props;
  const [textD, setDText] = useState("");
  const [lengthDesc, setLengthDesc] = useState(300);
  const [Name, setName] = useState("");

  const handleCategorie = useCallback((even: any) => {
    const tab: string = even.target.value;
    setDText(tab);
    setLengthDesc(300 - tab.length);
  }, []);

  const handleOpen = useCallback(() => setIsopen(false), []);

  const handleName = useCallback((e: any) => setName(e.target.value), []);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: SousCategoriePost) => postCategorie(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["allCategorie"],
      });
      onRefetchCategories();
      SetRefetchCategorie(true);
    },
    onError: (error: any) => {
      SetRefetchCategorie(false);
    },
  });
  const addCategorie = () => {
    const data: SousCategoriePost = {
      name: Name,
      description: textD,
    };
    mutation.mutate(data);
  };
  const handleOpenDaialog = (e: any) => {
    e.preventDefault();
    addCategorie();
    handleOpen();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(e: any) => handleOpenDaialog}>
      <DialogContent
        className={`sm:max-w-[425px] h-auto  ${
          isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
        }`}
      >
        <DialogHeader>
          <DialogTitle
            className={`${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
          >
            {title}
          </DialogTitle>
          <DialogDescription>Add your new item here</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor="name"
            className={`text-right    ${
              isDarkMode ? "text-black" : "text-[#BBBBBC]"
            }`}
          >
            Name
          </Label>
          <Input
            id="name"
            value={Name}
            placeholder="Name of Categori"
            className={`col-span-3 ${
              isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
            }  ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
            onChange={(e: any) => {
              handleName(e);
            }}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor="username"
            className={`text-right   ${
              isDarkMode ? "text-black" : "text-[#BBBBBC]"
            } ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
          >
            Description
          </Label>
          <Textarea
            value={textD}
            onChange={handleCategorie}
            className={`col-span-3 ${
              isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
            } ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
            placeholder="Write the Description"
            maxLength={300}
          ></Textarea>
          <Label
            className={`col-span-3 text-[10px] ${
              isDarkMode ? "text-black" : "text-[#BBBBBC]"
            }`}
          >
            The max lenght of caracters you should be enter is {lengthDesc}
          </Label>
        </div>
        <DialogFooter>
          <div className="max-sm:flex max-sm:flex-col max-sm:gap-2 flex gap-2">
            <Button
              type="submit"
              onClick={(e: any) => {
                handleOpenDaialog(e);
              }}
            >
              Save changes
            </Button>
            <Button onClick={() => setIsopen(false)}>Cancel</Button>
          </div>
        </DialogFooter>
        {/* </form> */}
      </DialogContent>
    </Dialog>
  );
}

export function DialogSousCategorie(props: {
  isOpen: boolean;
  setIsopen: Function;
  title: string;
  isDarkMode: boolean;
  dataProp: string;
  SetRefetchSousCategorie: Function;
}) {
  const {
    isOpen,
    setIsopen,
    title,
    isDarkMode,
    dataProp,
    /*onRefetchSousCategories*/ SetRefetchSousCategorie,
  } = props;
  const [textD, setDText] = useState("");
  const [lengthDesc, setLengthDesc] = useState(300);
  const [Name, setName] = useState("");

  const handleCategorie = useCallback((even: any) => {
    const tab: string = even.target.value;
    setDText(tab);
    setLengthDesc(300 - tab.length);
  }, []);

  const handleOpen = useCallback(() => setIsopen(false), []);

  const handleName = useCallback((e: any) => setName(e.target.value), []);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: SousCategoriePost) => postSousCategorie(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["SousCategorie"],
      });
      SetRefetchSousCategorie(true);
    },
    onError: (error: any) => {
      SetRefetchSousCategorie(false);
    },
  });
  const addCategorie = () => {
    const data: SousCategoriePost = {
      name: Name,
      description: textD,
      id_categorie: dataProp,
    };
    console.log(data);
    mutation.mutate(data);
  };
  const handleOpenDaialog = (e: any) => {
    e.preventDefault();
    addCategorie();
    handleOpen();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(e: any) => handleOpenDaialog}>
      <DialogContent
        className={`sm:max-w-[425px] ${
          isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
        }`}
      >
        <DialogHeader>
          <DialogTitle
            className={`${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
          >
            {title}
          </DialogTitle>
          <DialogDescription>Add your new item here</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor="name"
            className={`text-right    ${
              isDarkMode ? "text-black" : "text-[#BBBBBC]"
            }`}
          >
            Name
          </Label>
          <Input
            id="name"
            value={Name}
            placeholder="Name of Categori"
            className={`col-span-3 ${
              isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
            }  ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
            onChange={(e: any) => {
              handleName(e);
            }}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor="username"
            className={`text-right   ${
              isDarkMode ? "text-black" : "text-[#BBBBBC]"
            } ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
          >
            Description
          </Label>
          <Textarea
            value={textD}
            onChange={handleCategorie}
            className={`col-span-3 ${
              isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
            } ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
            placeholder="Write the Description"
            maxLength={300}
          ></Textarea>
          <Label
            className={`col-span-3 text-[10px] ${
              isDarkMode ? "text-black" : "text-[#BBBBBC]"
            }`}
          >
            The max lenght of caracters you should be enter is {lengthDesc}
          </Label>
        </div>
        <DialogFooter>
          <div className="max-sm:flex max-sm:flex-col max-sm:gap-2 flex gap-2">
            <Button
              type="submit"
              onClick={(e: any) => {
                handleOpenDaialog(e);
              }}
            >
              Save changes
            </Button>
            <Button onClick={() => setIsopen(false)}>Cancel</Button>
          </div>
        </DialogFooter>
        {/* </form> */}
      </DialogContent>
    </Dialog>
  );
}

export function DialogBrand(props: {
  isOpen: boolean;
  setIsopen: Function;
  title: string;
  newBrand: Function;
  // tab: string[];
}) {
  const { isOpen, setIsopen, title, newBrand } = props;
  const [name, setName] = useState("");
  // const [newMarque, setNewMarque] = useState("");
  let inputvalue: string;
  const handleSubmit = (e: any) => {
    newBrand(inputvalue);
    setIsopen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogTrigger asChild>
        {/* <Button
          onClick={() => setIsopen(!isOpen)}
          className="w-full"
          variant="outline"
        >
          Add items
        </Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>Add {title}</DialogTitle>
          <DialogDescription>Add your new item here</DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder={`Name of ${title}`}
              className="col-span-3"
              onChange={(e: any) => {
                inputvalue = e.target.value;
              }}
            />
          </div>
        </form>
        <DialogFooter>
          <div className="max-sm:flex max-sm:flex-col max-sm:gap-2 flex gap-2">
            <Button
              type="submit"
              onClick={(e: any) => {
                handleSubmit(e);
              }}
            >
              Save changes
            </Button>
            <Button onClick={() => setIsopen(false)}>Cancel</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
