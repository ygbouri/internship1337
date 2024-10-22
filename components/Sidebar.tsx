// import {
//   allCategorie,
//   allFournisseur,
//   allMarqueOfProduct,
//   allSousCategorie,
// } from "@/api/categorie";
// import {
//   allCategorie,
//   allFournisseur,
//   allMarqueOfProduct,
//   allSousCategorie,
// } from "@/api/categorie";
// import {
//   allCategorie,
//   allFournisseur,
//   allMarqueOfProduct,
//   allSousCategorie,
// } from "@/api/categorie";
// import {
//   allCategorie,
//   allFournisseur,
//   allMarqueOfProduct,
//   allSousCategorie,
// } from "@/api/categorie";
// import {
//   allCategorie,
//   allFournisseur,
//   allMarqueOfProduct,
//   allSousCategorie,
// } from "@/api/categorie";
// import { useDarkMode } from "@/config/darkmode";
// import { useDarkMode } from "@/config/darkmode";
// import { useDarkMode } from "@/config/darkmode";
// import { useDarkMode } from "@/config/darkmode";
// import { useDarkMode } from "@/config/darkmode";
// import { useQuery } from "@tanstack/react-query";
// import { useQuery } from "@tanstack/react-query";
// import { useQuery } from "@tanstack/react-query";
// import { useQuery } from "@tanstack/react-query";
// import { useQuery } from "@tanstack/react-query";
// import React, { useState } from "react";
// import React, { useState } from "react";
// import React, { useState } from "react";
// import React, { useState } from "react";
// import React, { useState } from "react";
// import {
//   allCategorie,
//   allSousCategorie,
//   allMarqueOfProduct,
//   allFournisseur,
// } from "@/api/categorie";
// import { useDarkMode } from "@/config/darkmode";
// import React, { useState } from "react";
// import {
//   SelectDemo,
//   SelectDemoCategorie,
//   SelectDemoFournisseur,
//   SelectDemoSousCategorie,
// } from "./myCustomComponents/select";
// import {
//   SelectDemo,
//   SelectDemoCategorie,
//   SelectDemoFournisseur,
//   SelectDemoSousCategorie,
// } from "./myCustomComponents/select";
// import {
//   SelectDemo,
//   SelectDemoCategorie,
//   SelectDemoFournisseur,
//   SelectDemoSousCategorie,
// } from "./myCustomComponents/select";
// import {
//   SelectDemo,
//   SelectDemoCategorie,
//   SelectDemoFournisseur,
//   SelectDemoSousCategorie,
// } from "./myCustomComponents/select";
// import {
//   SelectDemo,
//   SelectDemoCategorie,
//   SelectDemoFournisseur,
//   SelectDemoSousCategorie,
// } from "./myCustomComponents/select";
// import { Input } from "./ui/input";
// import { Input } from "./ui/input";
// import { Input } from "./ui/input";
// import { Input } from "./ui/input";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";
// import { Label } from "./ui/label";
// import { Label } from "./ui/label";
// import { Label } from "./ui/label";
// import { Label } from "./ui/label";
// import { Textarea } from "./ui/textarea";
// import { Textarea } from "./ui/textarea";
// import { Textarea } from "./ui/textarea";
// import { Textarea } from "./ui/textarea";
// import { Textarea } from "./ui/textarea";
// import {
//   SelectDemoCategorie,
//   SelectDemoSousCategorie,
//   SelectDemo,
//   SelectDemoFournisseur,
// } from "./myCustomComponents/select";

// const Sidebar = () => {
//   return <div className="h-full w-[5%] hover:w-[20%] green ">sidebar</div>;
// };

// export default Sidebar;
// export default function AddProduct() {
//   const { isDarkMode, handleDarkModeToggle } = useDarkMode();
//   const [qteStock, setQteStock] = useState(0);
//   const [qteMin, setQteMin] = useState(0);
//   const [nbDayNew, setNbDayNew] = useState(0);

//   const [idCategorie, setIdCategorie] = useState("");
//   const [idFournisseur, setIdFournisseur] = useState("");
//   const [etatProduct, setEtatProduct] = useState("");
//   const [hide, setHide] = useState(false);
//   const [sousCategorie, setSousCategorie] = useState("");

//   const [text, setText] = useState("");
//   const [textD, setDText] = useState("");
//   const [lengthSDesc, setLengthSDesc] = useState(200);
//   const [lengthDesc, setLengthDesc] = useState(500);
//   //===========> variables
//   const arrEtatProduct: string[] = ["New", "Used"];
//   let tabNoSelectedData: string[] = ["-1-1", "No SubCategorie is Selected"];
//   //========>useQuery
//   const { data: Categorie } = useQuery({
//     queryKey: ["allCategorie"],
//     queryFn: allCategorie,
//   });

//   const { data: SousCategorie } = useQuery({
//     queryKey: ["SousCategorie", idCategorie],
//     queryFn: () => allSousCategorie(idCategorie),
//   });

//   const { data: marques } = useQuery({
//     queryKey: ["allMarques"],
//     queryFn: allMarqueOfProduct,
//   });

//   const { data: Fournisseurs } = useQuery({
//     queryKey: ["allFournisseur"],
//     queryFn: allFournisseur,
//   });
//   // const SousCategorie = SousCategorieQuery(idCategorie);
//   //=======>handleEvent
//   const handleSCategorie = (even: any) => {
//     const str: string = even.target.value;
//     setText(str);
//     setLengthSDesc(200 - str.length);
//   };

//   const handleIdFournisseur = (item: string) => {
//     setIdFournisseur(item);
//   };
//   const handleCategorie = (even: any) => {
//     const tab: string = even.target.value;
//     setDText(tab);
//     setLengthDesc(500 - tab.length);
//   };
//   const handleSelectCategorie = (item: string) => {
//     setIdCategorie(item);
//   };

//   const handleSousCategorie = (item: string) => setSousCategorie(item);

//   const handleSelectEtatProduct = (item: string) => setEtatProduct(item);
//   const brand: string[] = marques ? marques.map((item) => item.marque) : [];
//   return (
//     <div className={`flex flex-col gap-8 h-auto w-full sm:py-4 sm:px-4 `}>
//       <div className={`sm:gap-4 `}>
//         <h1
//           className={`${
//             isDarkMode ? "text-black" : "text-[#BBBBBC]"
//           } font-semibold text-2xl`}
//         >
//           Add product
//         </h1>
//       </div>
//       <div
//         className={`w-full h-auto ${
//           isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
//         } rounded-md flex max-xl:flex-col`}
//       >
//         <div
//           className={`w-[50%] max-xl:w-full max-xl:w-full flex flex-col gap-4  px-2 py-2`}
//         >
//           <div className={`flex flex-col gap-2`}>
//             <label
//               className={`w-auto font-semibold text-sm ${
//                 isDarkMode ? "text-black" : "text-[#BBBBBC]"
//               } ${isDarkMode ? "bg-white" : "bg-[#1A1C1E]"}`}
//             >
//               Product Name *
//             </label>
//             <Input
//               type="text"
//               style={{ outline: "none" }}
//               className={` border ${
//                 isDarkMode ? "border-gray-100" : "border-gray-500"
//               } rounded-md px-2 py-2 font-medium text-xs ${
//                 isDarkMode ? "text-black" : "text-[#BBBBBC]"
//               } ${isDarkMode ? "bg-white" : "bg-[#1A1C1E]"}`}
//               placeholder="Name"
//             />
//           </div>
//           <div className={`flex flex-col gap-2`}>
//             <label
//               className={`w-auto font-semibold text-sm ${
//                 isDarkMode ? "text-black" : "text-[#BBBBBC]"
//               }`}
//             >
//               Product Reference *
//             </label>
//             <Input
//               type="text"
//               style={{ outline: "none" }}
//               className={` border ${
//                 isDarkMode ? "border-gray-100" : "border-gray-500"
//               } ${
//                 isDarkMode ? "text-black" : "text-[#BBBBBC]"
//               } rounded-md px-2 py-2 font-medium text-xs ${
//                 isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
//               }`}
//               placeholder="Reference"
//             />
//             <label
//               className={`font-semibold text-xs  ${
//                 isDarkMode ? "text-black" : "text-[#BBBBBC]"
//               }`}
//             >
//               *Reference should be unique
//             </label>
//           </div>
//           <div className={`flex max-xl:flex-col gap-2`}>
//             <div className="w-[50%] max-xl:w-full flex flex-col gap-2">
//               <label
//                 className={`w-auto font-semibold text-sm ${
//                   isDarkMode ? "text-black" : "text-[#BBBBBC]"
//                 }`}
//               >
//                 Quantity In Stock *
//               </label>
//               <Input
//                 type="number"
//                 style={{ outline: "none" }}
//                 value={qteStock}
//                 className={` border ${
//                   isDarkMode ? "border-gray-100" : "border-gray-500"
//                 } ${
//                   isDarkMode ? "text-black" : "text-[#BBBBBC]"
//                 } rounded-md px-2 py-2 font-medium text-xs ${
//                   isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
//                 }`}
//                 placeholder="Number of Quantity in Stock"
//                 onChange={(e: any) =>
//                   e.target.value > 0
//                     ? setQteStock(Number(e.target.value))
//                     : setQteStock(0)
//                 }
//               />
//             </div>
//             <div className="w-[50%] max-xl:w-full flex flex-col gap-2">
//               <label
//                 className={`w-auto font-semibold text-sm ${
//                   isDarkMode ? "text-black" : "text-[#BBBBBC]"
//                 }`}
//               >
//                 Minimum Quantity *
//               </label>
//               <Input
//                 type="number"
//                 style={{ outline: "none" }}
//                 value={qteMin}
//                 className={` border ${
//                   isDarkMode ? "border-gray-100" : "border-gray-500"
//                 } ${
//                   isDarkMode ? "text-black" : "text-[#BBBBBC]"
//                 } rounded-md px-2 py-2 font-medium text-xs ${
//                   isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
//                 }`}
//                 placeholder="Number of Minimum Quantity"
//                 onChange={(e: any) =>
//                   e.target.value > 0
//                     ? setQteMin(Number(e.target.value))
//                     : setQteMin(0)
//                 }
//               />
//             </div>
//           </div>

//           <div className={`flex max-xl:flex-col gap-2`}>
//             <div className="w-[50%] max-xl:w-full flex flex-col gap-2">
//               <label
//                 className={`w-auto font-semibold text-sm ${
//                   isDarkMode ? "text-black" : "text-[#BBBBBC]"
//                 }`}
//               >
//                 Categorie *
//               </label>
//               {!hide && (
//                 <SelectDemoCategorie
//                   className={` w-full h-auto border ${
//                     isDarkMode ? "border-gray-100" : "border-gray-500"
//                   } ${
//                     isDarkMode ? "text-black" : "text-[#BBBBBC]"
//                   } rounded-md px-2 py-2 font-medium text-xs ${
//                     isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
//                   }`}
//                   arr={Categorie}
//                   onSelect={handleSelectCategorie}
//                   title={"Chose Categorie"}
//                 ></SelectDemoCategorie>
//               )}
//               {/* {hide && (
//               <DialogCategorie
//                 onSelect={() => setHide(!hide)}
//               ></DialogCategorie>
//             )} */}
//             </div>
//             <div className="w-[50%] max-xl:w-full flex flex-col gap-2">
//               <label
//                 className={`w-auto font-semibold text-sm ${
//                   isDarkMode ? "text-black" : "text-[#BBBBBC]"
//                 }`}
//               >
//                 SubCategorie *
//               </label>
//               <SelectDemoSousCategorie
//                 className={` w-full h-auto border ${
//                   isDarkMode ? "border-gray-100" : "border-gray-500"
//                 } ${
//                   isDarkMode ? "text-black" : "text-[#BBBBBC]"
//                 } rounded-md px-2 py-2 font-medium text-xs ${
//                   isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
//                 }`}
//                 arr={SousCategorie}
//                 title={"Chose SousCategorie"}
//                 onSelect={handleSousCategorie}
//               ></SelectDemoSousCategorie>
//             </div>
//           </div>
//           <div className={`flex max-xl:flex-col max-xl:w-full gap-2`}>
//             <div className="w-[50%] max-xl:w-full flex flex-col gap-2">
//               <label
//                 className={`w-auto font-semibold text-sm ${
//                   isDarkMode ? "text-black" : "text-[#BBBBBC]"
//                 }`}
//               >
//                 Product State *
//               </label>
//               <SelectDemo
//                 className={` w-full h-auto border ${
//                   isDarkMode ? "border-gray-100" : "border-gray-500"
//                 } ${
//                   isDarkMode ? "text-black" : "text-[#BBBBBC]"
//                 } rounded-md px-2 py-2 font-medium text-xs ${
//                   isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
//                 }`}
//                 arr={arrEtatProduct}
//                 title={"Product State"}
//                 onSelect={handleSelectEtatProduct}
//               ></SelectDemo>
//             </div>
//             <div className="w-[50%] max-xl:w-full flex flex-col gap-2">
//               <label
//                 className={`w-auto font-semibold text-sm ${
//                   isDarkMode ? "text-black" : "text-[#BBBBBC]"
//                 }`}
//               >
//                 Product brand *
//               </label>
//               <SelectDemo
//                 className={` w-full h-auto border ${
//                   isDarkMode ? "border-gray-100" : "border-gray-500"
//                 } ${
//                   isDarkMode ? "text-black" : "text-[#BBBBBC]"
//                 } rounded-md px-2 py-2 font-medium text-xs ${
//                   isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
//                 }`}
//                 arr={brand}
//                 title={"Product Brand"}
//                 onSelect={() => {}}
//               ></SelectDemo>
//             </div>
//           </div>
//           <div className={`flex max-xl:flex-col gap-2`}>
//             <div className="w-[50%] max-xl:w-full flex flex-col gap-2">
//               <label
//                 className={`w-auto font-semibold text-sm ${
//                   isDarkMode ? "text-black" : "text-[#BBBBBC]"
//                 }`}
//               >
//                 Product Supplier *
//               </label>
//               <SelectDemoFournisseur
//                 className={` w-full h-auto border ${
//                   isDarkMode ? "border-gray-100" : "border-gray-500"
//                 } ${
//                   isDarkMode ? "text-black" : "text-[#BBBBBC]"
//                 } rounded-md px-2 py-2 font-medium text-xs ${
//                   isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
//                 }`}
//                 arr={Fournisseurs}
//                 title={"Product Supplier"}
//                 onSelect={handleIdFournisseur}
//               ></SelectDemoFournisseur>
//             </div>
//             <div className="w-[50%] flex flex-col gap-2">
//               <label
//                 className={`w-auto font-semibold text-sm ${
//                   isDarkMode ? "text-black" : "text-[#BBBBBC]"
//                 }`}
//               >
//                 Product number of days as new *
//               </label>
//               <Input
//                 type="number"
//                 style={{ outline: "none" }}
//                 value={nbDayNew}
//                 className={` border ${
//                   isDarkMode ? "border-gray-100" : "border-gray-500"
//                 } ${
//                   isDarkMode ? "text-black" : "text-[#BBBBBC]"
//                 } rounded-md px-2 py-2 font-medium text-xs ${
//                   isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
//                 }`}
//                 placeholder="Number of Minimum Quantity"
//                 onChange={(e: any) =>
//                   e.target.value > 0
//                     ? setNbDayNew(Number(e.target.value))
//                     : setNbDayNew(0)
//                 }
//               />
//             </div>
//           </div>
//           <div className="w-[100%] flex flex-col gap-2">
//             <label
//               className={`w-auto font-semibold text-sm ${
//                 isDarkMode ? "text-black" : "text-[#BBBBBC]"
//               }`}
//             >
//               Small Description *
//             </label>
//             <Textarea
//               value={text}
//               onChange={handleSCategorie}
//               className={`col-span-3  ${
//                 isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
//               } ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
//               placeholder="Write the Small Description"
//               maxLength={200}
//             ></Textarea>
//             <Label
//               className={`col-span-3 text-[12px] ${
//                 isDarkMode ? "text-black" : "text-[#BBBBBC]"
//               }`}
//             >
//               The max lenght of caracters you should be enter is {lengthSDesc}
//             </Label>
//           </div>
//           <div className="w-[100%] flex flex-col gap-2">
//             <label
//               className={`w-auto font-semibold text-sm ${
//                 isDarkMode ? "text-black" : "text-[#BBBBBC]"
//               }`}
//             >
//               Description *
//             </label>
//             <Textarea
//               value={textD}
//               onChange={handleCategorie}
//               className={`col-span-3  ${
//                 isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
//               } ${isDarkMode ? "text-black" : "text-[#BBBBBC]"}`}
//               placeholder="Write the Small Description"
//               maxLength={500}
//             ></Textarea>
//             <Label
//               className={`col-span-3 text-[12px] ${
//                 isDarkMode ? "text-black" : "text-[#BBBBBC]"
//               }`}
//             >
//               The max lenght of caracters you should be enter is {lengthDesc}
//             </Label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
