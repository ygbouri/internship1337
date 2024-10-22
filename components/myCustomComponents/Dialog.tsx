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
import { ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { Console } from "console";
import { LiaCoinsSolid } from "react-icons/lia";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useDarkMode } from "@/config/darkmode";
import {
  postCategorie,
  postSousCategorie,
  supplierPost,
} from "@/requests/categorie";
import { FournisseurPost, SousCategorie, SousCategoriePost } from "@/types/Api";

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
  const [text, setText] = useState("");
  const [textD, setDText] = useState("");
  const [lengthSDesc, setLengthSDesc] = useState(150);
  const [lengthDesc, setLengthDesc] = useState(300);
  const [Name, setName] = useState("");
  const [imgCouverture, setImageCouver] = useState();
  const [imgMiniat, setImageMinia] = useState(null);
  const [imagePreviewUrlCouv, setImagePreviewUrlCouv] = useState("");
  const [imagePreviewUrlMinia, setImagePreviewUrlMinia] = useState("");
  // const { isDarkMode, handleDarkModeToggle } = useDarkMode();

  const handleSCategorie = useCallback((even: any) => {
    const str: string = even.target.value;
    setText(str);
    setLengthSDesc(150 - str.length);
  }, []);
  const handleCategorie = useCallback((even: any) => {
    const tab: string = even.target.value;
    setDText(tab);
    setLengthDesc(300 - tab.length);
  }, []);

  const handleOpen = useCallback(() => setIsopen(false), []);

  const handleChangeCouv = useCallback((e: any, sign: number) => {
    e.preventDefault();
    // console.log(sign);
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      let reader = new FileReader();

      reader.onload = () => {
        if (sign === 0) {
          setImageCouver(file);
          setImagePreviewUrlCouv(String(reader.result));
        } else {
          setImageMinia(file);
          setImagePreviewUrlMinia(String(reader.result));
        }
      };
      reader.readAsDataURL(file);
    }
  }, []);
  const handleName = useCallback((e: any) => setName(e.target.value), []);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: SousCategoriePost) => postCategorie(data),
    onSuccess: () => {
      console.log("categorie is success");
      queryClient.invalidateQueries({
        queryKey: ["allCategorie"],
        // refetchType: "active",
        // exact: true,
      });
      SetRefetchCategorie(true);
      onRefetchCategories();
    },
    onError: (error: any) => {
      SetRefetchCategorie(false);
    },
  });
  const addCategorie = () => {
    const data: SousCategoriePost = {
      name: Name,
      ImageCouverture: imgCouverture,
      imageMiniature: imgMiniat,
      description: textD,
      smallDescription: text,
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
      {/* <DialogTrigger asChild>
        <Button
          onClick={() => setIsopen(!isOpen)}
          className="w-full"
          variant="outline"
        >
          Add items
        </Button>
      </DialogTrigger> */}
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
        {/* <form
          className="grid gap-4 py-4"
          onSubmit={(e: any) => {
            addCategorie(e), setIsopen(false);
          }}
        > */}
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
            htmlFor="couvertureImage"
            className={`text-right   ${
              isDarkMode ? "text-black" : "text-[#BBBBBC]"
            }`}
          >
            Image Coverture
          </Label>
          <Input
            type="file"
            id="ImageCoverture"
            className={`col-span-3  ${
              isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
            } ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
            name="couverture"
            accept="image/*"
            onChange={(e: any) => handleChangeCouv(e, 0)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor="ImageMiniature"
            className={`text-right   ${
              isDarkMode ? "text-black" : "text-[#BBBBBC]"
            }`}
          >
            Image Miniature
          </Label>
          <Input
            type="file"
            id="ImageMiniature"
            className={`col-span-3 ${
              isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
            } ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
            name="miniature"
            accept="image/*"
            onChange={(e: any) => handleChangeCouv(e, 1)}
          />
        </div>

        <div className="grid grid-cols-4  items-center gap-4">
          <Label
            htmlFor="username"
            className={`text-right   ${
              isDarkMode ? "text-black" : "text-[#BBBBBC]"
            }`}
          >
            Small Description
          </Label>
          <Textarea
            value={text}
            onChange={handleSCategorie}
            className={`col-span-3 ${
              isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
            } ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
            placeholder="Write the Small Description"
            maxLength={150}
          ></Textarea>
          <Label
            className={`col-span-3 text-[10px] ${
              isDarkMode ? "text-black" : "text-[#BBBBBC]"
            }`}
          >
            The max lenght of caracters you should be enter is {lengthSDesc}
          </Label>
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
  // onRefetchSousCategories: Function;
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
  const [text, setText] = useState("");
  const [textD, setDText] = useState("");
  const [lengthSDesc, setLengthSDesc] = useState(150);
  const [lengthDesc, setLengthDesc] = useState(300);
  const [Name, setName] = useState("");
  const [imgCouverture, setImageCouver] = useState();
  const [imgMiniat, setImageMinia] = useState(null);
  const [imagePreviewUrlCouv, setImagePreviewUrlCouv] = useState("");
  const [imagePreviewUrlMinia, setImagePreviewUrlMinia] = useState("");
  // const { isDarkMode, handleDarkModeToggle } = useDarkMode();

  const handleSCategorie = useCallback((even: any) => {
    const str: string = even.target.value;
    setText(str);
    setLengthSDesc(150 - str.length);
  }, []);
  const handleCategorie = useCallback((even: any) => {
    const tab: string = even.target.value;
    setDText(tab);
    setLengthDesc(300 - tab.length);
  }, []);

  const handleOpen = useCallback(() => setIsopen(false), []);

  const handleChangeCouv = useCallback((e: any, sign: number) => {
    e.preventDefault();
    // console.log(sign);
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      let reader = new FileReader();

      reader.onload = () => {
        if (sign === 0) {
          setImageCouver(file);
          setImagePreviewUrlCouv(String(reader.result));
        } else {
          setImageMinia(file);
          setImagePreviewUrlMinia(String(reader.result));
        }
      };
      reader.readAsDataURL(file);
    }
  }, []);
  const handleName = useCallback((e: any) => setName(e.target.value), []);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: SousCategoriePost) => postSousCategorie(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["SousCategorie"],
        // refetchType: "active",
        // exact: true,
      });
      SetRefetchSousCategorie(true);
      // onRefetchSousCategories();
    },
    onError: (error: any) => {
      SetRefetchSousCategorie(false);
    },
  });
  const addCategorie = () => {
    const data: SousCategoriePost = {
      name: Name,
      ImageCouverture: imgCouverture,
      imageMiniature: imgMiniat,
      description: textD,
      smallDescription: text,
      id_categorie: dataProp,
    };
    console.log(data);
    mutation.mutate(data);
    // console.log("hello");
  };
  const handleOpenDaialog = (e: any) => {
    e.preventDefault();
    addCategorie();
    handleOpen();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(e: any) => handleOpenDaialog}>
      {/* <DialogTrigger asChild>
        <Button
          onClick={() => setIsopen(!isOpen)}
          className="w-full"
          variant="outline"
        >
          Add items
        </Button>
      </DialogTrigger> */}
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
        {/* <form
          className="grid gap-4 py-4"
          onSubmit={(e: any) => {
            addCategorie(e), setIsopen(false);
          }}
        > */}
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
            htmlFor="couvertureImage"
            className={`text-right   ${
              isDarkMode ? "text-black" : "text-[#BBBBBC]"
            }`}
          >
            Image Coverture
          </Label>
          <Input
            type="file"
            id="ImageCoverture"
            className={`col-span-3  ${
              isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
            } ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
            name="couverture"
            accept="image/*"
            onChange={(e: any) => handleChangeCouv(e, 0)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor="ImageMiniature"
            className={`text-right   ${
              isDarkMode ? "text-black" : "text-[#BBBBBC]"
            }`}
          >
            Image Miniature
          </Label>
          <Input
            type="file"
            id="ImageMiniature"
            className={`col-span-3 ${
              isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
            } ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
            name="miniature"
            accept="image/*"
            onChange={(e: any) => handleChangeCouv(e, 1)}
          />
        </div>

        <div className="grid grid-cols-4  items-center gap-4">
          <Label
            htmlFor="username"
            className={`text-right   ${
              isDarkMode ? "text-black" : "text-[#BBBBBC]"
            }`}
          >
            Small Description
          </Label>
          <Textarea
            value={text}
            onChange={handleSCategorie}
            className={`col-span-3 ${
              isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
            } ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
            placeholder="Write the Small Description"
            maxLength={150}
          ></Textarea>
          <Label
            className={`col-span-3 text-[10px] ${
              isDarkMode ? "text-black" : "text-[#BBBBBC]"
            }`}
          >
            The max lenght of caracters you should be enter is {lengthSDesc}
          </Label>
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

// id_fournisseur String @id @default(uuid())
//   name String @unique
//   email String @unique
//   telephone String
//   address String
//   description String
//   ville String?
//   articles Article[]

export function DialogFournisseur(props: {
  isOpen: boolean;
  setIsopen: Function;
  title: string;
  // onRefetchFournisseur: Function;
  SetRefetchSupplier: Function;
}) {
  const {
    isOpen,
    setIsopen,
    title,
    /*onRefetchFournisseur,*/ SetRefetchSupplier,
  } = props;
  const [textD, setDText] = useState("");
  const [lengthDesc, setLengthDesc] = useState(300);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [ville, setVille] = useState("");
  const [tel, setTel] = useState<boolean>(true);
  const [mail, setMail] = useState<boolean>(true);
  const [nameB, setNameB] = useState<boolean>(true);
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: (data: FournisseurPost) => supplierPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allFournisseur"] });
      // onRefetchFournisseur();
      SetRefetchSupplier(true);
    },
    onError: (error: any) => {
      SetRefetchSupplier(false);
    },
  });

  const handleCategorie = (even: any) => {
    const tab: string = even.target.value;
    setDText(tab);
    setLengthDesc(300 - tab.length);
  };

  const handleOpen = () => setIsopen(false);

  const checkPhoneEmail = (value: string, checker: number) => {
    if (checker === 1) {
      var numericRegex = /^[0-9]+$/;
      return numericRegex.test(value);
    }
    var numericRegex = /\S+@\S+\.\S+/;
    return numericRegex.test(value);
  };
  const CheckAndSubmit = () => {
    !checkPhoneEmail(phone, 1) ? setTel(false) : setTel(true);
    !checkPhoneEmail(email, 2) ? setMail(false) : setMail(true);
    if (name === "" || adress === "" || ville === "") {
      setNameB(false);
      console.log(name + " " + adress + " " + ville);
      console.log("wld nass");
    } else {
      // setNameB(true);
      const data: FournisseurPost = {
        name: name,
        email: email,
        telephone: phone,
        address: adress,
        description: textD,
        ville: ville,
      };
      console.log("here we go");
      mutate.mutate(data);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      {/* <DialogTrigger asChild>
        <Button
          onClick={() => setIsopen(!isOpen)}
          className="w-full"
          variant="outline"
        >
          Add Supplier
        </Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Add your new Supplier here</DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className={`text-left `}>
              Name*
            </Label>
            <Input
              id="name"
              placeholder="Name of Fournisseur"
              className={`col-span-3`}
              onChange={(e: any) => setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="email"
              className={`text-left ${mail ? "" : "text-red-500"} `}
            >
              Email*
            </Label>
            <div className="col-span-3 flex flex-col">
              <Input
                id="emailInput"
                className="col-span-3"
                placeholder="Email"
                onChange={(e: any) => setEmail(e.target.value)}
              />
              {!mail && (
                <Label className="col-span-3 text-[10px] text-red-500">
                  Email should be not empty and containt @ and .
                </Label>
              )}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="Phone"
              className={`${tel ? "" : "text-red-500"} text-left `}
            >
              Phone*
            </Label>
            <div className="col-span-3 flex flex-col">
              <Input
                id="Phone"
                className="col-span-3"
                name="phone"
                placeholder="Phone"
                pattern="[0-9]{2}-[0-9]"
                onChange={(e: any) => setPhone(e.target.value)}
              />
              {!tel && (
                <Label className="col-span-3 text-[10px] text-red-500">
                  Phone should be containt only numbers
                </Label>
              )}
            </div>
          </div>

          <div className="grid grid-cols-4  items-center gap-4">
            <Label htmlFor="Addrees" className="text-left ">
              Address*
            </Label>
            <Input
              id="addres"
              className="col-span-3"
              placeholder="Adress"
              onChange={(e: any) => setAdress(e.target.value)}
            ></Input>
          </div>
          <div className="grid grid-cols-4  items-center gap-4">
            <Label htmlFor="Ville" className="text-left ">
              Ville*
            </Label>
            <Input
              id="addres"
              className="col-span-3"
              placeholder="Ville"
              onChange={(e: any) => setVille(e.target.value)}
            ></Input>
          </div>
          <div className="grid grid-cols-4 items-center gap-4 ">
            <Label htmlFor="Description" className="text-left ">
              Description
            </Label>
            <div className="flex flex-col gap-2 col-span-3">
              <Textarea
                value={textD}
                onChange={handleCategorie}
                className="col-span-3"
                placeholder="Write the Description"
                maxLength={300}
              ></Textarea>
              <Label className="col-span-3 text-xxs ">
                The max lenght of caracters you should be enter is {lengthDesc}
              </Label>
            </div>
            {nameB && (
              <Label className="col-span-3 text-[10px] text-red-500">
                Each field has (*) should be not empty
              </Label>
            )}
          </div>
        </form>
        <DialogFooter>
          <div className="max-sm:flex max-sm:flex-col max-sm:gap-2 flex gap-2">
            <Button
              type="submit"
              onClick={() => {
                CheckAndSubmit();
                setIsopen(false);
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

export function DialogAddCaracteristique(props: {
  isOpen: boolean;
  setIsopen: Function;
  onSelect: Function;
  // tab: string[];
}) {
  const { isOpen, setIsopen, onSelect } = props;
  const [name, setName] = useState("");
  // const [newMarque, setNewMarque] = useState("");
  let nameInput: string;
  let valueInput: string;

  const handleSubmit = (e: any) => {
    if (nameInput && valueInput) {
      onSelect(nameInput, valueInput);
      setIsopen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>Add New characteristic</DialogTitle>
          <DialogDescription>Add your new item here</DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder={`Name`}
              className="col-span-3"
              onChange={(e: any) => {
                nameInput = e.target.value;
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Value
            </Label>
            <Input
              id="name"
              placeholder={`Value`}
              className="col-span-3"
              onChange={(e: any) => {
                valueInput = e.target.value;
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

export function DialogEditNameCaracteristique(props: {
  isOpen: boolean;
  setIsopen: Function;
  onSelect: Function;
  // tab: string[];
}) {
  const { isOpen, setIsopen, onSelect } = props;
  const [name, setName] = useState("");
  // const [newMarque, setNewMarque] = useState("");
  let nameInput: string;
  let valueInput: string;

  const handleSubmit = (e: any) => {
    onSelect(nameInput);
    setIsopen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      {/* <DialogTrigger asChild>
        <Button
          onClick={() => setIsopen(!isOpen)}
          className="w-full"
          variant="outline"
        >
          Add items
        </Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>Edit name of characteristic</DialogTitle>
          <DialogDescription>Edit item here</DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder={`Name`}
              className="col-span-3"
              onChange={(e: any) => {
                nameInput = e.target.value;
              }}
            />
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Value
            </Label>
            <Input
              id="name"
              placeholder={`Value`}
              className="col-span-3"
              onChange={(e: any) => {
                valueInput = e.target.value;
              }}
            />
          </div> */}
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

export function DialogSerial(props: {
  isOpen: boolean;
  setIsopen: Function;
  title: string;
  qteStock: number | undefined;
  addSerials: Function;
  setQteStock: Function;
  // tab: string[];
}) {
  const { isOpen, setIsopen, title, qteStock, setQteStock, addSerials } = props;
  const [name, setName] = useState("");
  const [display, setDisplay] = useState(false);
  let qte: number = 0;
  if (qteStock != undefined) qte = qteStock;
  let inputvalue: string[] = Array(qte).fill("");
  function isArrayFullyFilled(arr: string[], qte: number): boolean {
    return qte > 0 && arr.every((element) => element != "");
  }
  const handleSubmit = (e: any) => {
    if (inputvalue && isArrayFullyFilled(inputvalue, qte)) {
      addSerials(inputvalue);
      console.log("here we go");
      setIsopen(false);
    } else if (qte > 0) setDisplay(true);
  };

  const handleInputEvent = (index: number, e: any) => {
    if (
      e.target.value != null &&
      e.target.value != undefined &&
      e.target.value != ""
    ) {
      inputvalue[index] = e.target.value;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[425px] sm:max-h-[500px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Add your new item here</DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4 overflow-y-auto">
          {Array.from({ length: qte }).map((_, index: number) => (
            <div key={index} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={"name " + index + 1} className="text-right">
                Serial {index + 1}
              </Label>
              <Input
                id={"name " + index + 1}
                placeholder="Name of Serial"
                className="col-span-3"
                onChange={(e: any) => {
                  handleInputEvent(index, e);
                }}
              />
            </div>
          ))}
        </form>
        {qte == 0 && (
          <Label className="font-bold text-[15px] text-red-500">
            Enter number of Quantite en Stock
          </Label>
        )}
        <DialogFooter>
          <div className="w-full h-full flex ">
            <div className="w-[40%] flex items-center ">
              {display && (
                <Label className="font-bold text-[12px] text-red-500">
                  Enter all serial to submit
                </Label>
              )}
            </div>
            <div className="w-[60%] flex justify-around">
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
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
