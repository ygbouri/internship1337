"use client ";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Label } from "./ui/label";
import { IoIosClose } from "react-icons/io";
import { CloudFog, Film } from "lucide-react";
import { Button } from "./ui/button";

export default function ImageUploader(props: {
  isDarkMode: boolean;
  images: File[];
  setImages: Function;
}) {
  const { isDarkMode, images, setImages } = props;
  // const [images, setImages] = useState<File[]>([]);
  const [error, setError] = useState<string>("");
  let errorMsg: string = "";
  // useEffect(() => {
  //   console.log("Images state updated: ", images);
  // }, [images]);

  const removeDuplicateFiles = (fileArray: File[]) => {
    // let errorMessage: string = "";
    const fileMap = new Map<string, File>();
    fileArray.map((file) => {
      if (fileMap.has(file.name)) {
        errorMsg += `${file.name} this picture already uploaded\n`;
      } else fileMap.set(file.name, file);
    });

    let validateFIlES: File[] = Array.from(fileMap.values());
    fileMap.clear();
    return validateFIlES;
  };

  const onDrop = (acceptedFiles: File[]) => {
    let validateMsg: File[] = [];

    if (acceptedFiles) {
      acceptedFiles.forEach((item: File) => {
        if (item.size > 2 * 1204 * 1024)
          errorMsg += `${item.name} is larger than 2MB.\n`;
        else {
          validateMsg.push(item);
        }
      });
    }
    if (validateMsg.length) {
      // images.push(...validateMsg);
      // validateMsg.push(...images);
      console.log("images");
      console.log(images);
      let otherTable: File[] = [];
      images.forEach((item) => {
        otherTable.push(item);
      });
      let files: File[] = [...otherTable, ...validateMsg];
      console.log(files);
      const allFiles = removeDuplicateFiles(files);
      // let reader = new FileReader();
      // reader.onload = () => {
      setImages(allFiles);
      // };
    }
    if (errorMsg) {
      setError(errorMsg);
      errorMsg = "";
      setTimeout(() => setError(""), 5000);
      // setError("");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  const handleRemoveImage = (index: number) => {
    if (index != -1) {
      const uploadFile = images.filter((_, i: number) => i !== index);
      setImages(uploadFile);
    } else {
      setImages([]);
    }
  };
  return (
    <div className=" w-full flex flex-col gap-2">
      <div
        {...getRootProps()}
        className={`w-full ${isDarkMode ? "bg-white" : "bg-[#1A1C1E]"} `}
        style={{
          // border: '2px dashed #cccccc',
          // borderRadius: '10px',
          // padding: '20px',
          textAlign: "center",
          backgroundColor: isDarkMode ? "white" : "#1A1C1E",
          cursor: "pointer",
        }}
      >
        <input
          {...getInputProps()}
          className={`w-full border border-dashed h-auto ${
            isDarkMode ? "border-gray-100" : "border-gray-500"
          }  ${isDarkMode ? "bg-white" : "bg-[#1A1C1E]"}`}
        />

        <Label
          className={`w-full  font-bold text-[12px]  ${
            isDarkMode ? "text-black" : "text-[#BBBBBC]"
          }  ${
            isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
          } hover:cursor-pointer hover:text-[#8459df]`}
        >
          Click To Select Your Images Here
        </Label>
      </div>
      <div
        className={`w-full  flex flex-col gap-1 h-auto ${
          isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
        }`}
      >
        <ul className="flex flex-wrap gap-2  w-full ">
          {images?.map((file, index) => (
            <li
              key={index}
              className={`relative  w-28 h-28 ${
                isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
              }`}
            >
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className={`w-full border ${
                  isDarkMode ? "border-gray-950" : "border-gray-50"
                }  rounded-md h-full `}
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
              />
              <button
                className=" w-4 h-4 hover:w-6 hover:h-6 absolute top-0 right-0 bg-white rounded-full"
                onClick={() => handleRemoveImage(index)}
              >
                <IoIosClose
                  style={{ width: "100%", height: "100%", color: "black" }}
                />
              </button>
            </li>
          ))}
        </ul>

        {error && (
          <Label className={`w-full text-xs  text-red-500 `}>{error}</Label>
        )}
        {images.length >= 2 && (
          <div className="w-full flex justify-end pr-10">
            <Button variant={"outline"} onClick={() => handleRemoveImage(-1)}>
              Clear all
            </Button>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col gap-2 justify-center ">
        <Label
          className={`  col-span-3 text-[12px] text-center  ${
            isDarkMode ? "text-black" : "text-[#BBBBBC]"
          }`}
        >
          The maximum size of the image should not be greater than 2MB
        </Label>
      </div>
    </div>
  );
}

// export default ImageUploader;
