"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDarkMode } from "@/context/darkmode";
import { useEffect, useState } from "react";
import { SelectEtatProduct } from "@/components/myCustomComponents/select";
import { useMutation } from "@tanstack/react-query";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { UserSignup } from "@/types/Api";
import axios from "axios";

export default function Page() {
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
  const [doneMail, setIsDoneMail] = useState<boolean>(true);
  const [done, setIsDone] = useState<boolean>(false);

  const mutate = useMutation({
    mutationFn: async (user: UserSignup) => {
      const response = await axios.post(
        "http://localhost:5000/auth/signup",
        user,
        {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("lay lay0");

      if (response.data.data === null) {
        console.log("lay lay1");
        console.log(response.data.data);
        setIsDoneMail(false);

        return null;
      }
      console.log(response.data.data);
      setIsDoneMail(true);
      return response.data.data;
    },
  });
  const [textD, setDText] = useState("");
  const [lengthDesc, setLengthDesc] = useState(300);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [genre, setGenre] = useState("MALE");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [ville, setVille] = useState("");
  const [profile, setProfile] = useState(null);
  const [imagePreviewUrlCouv, setImagePreviewUrlCouv] =
    useState("/profile.jpeg");
  const [tel, setTel] = useState<boolean>(true);
  const [confirm, setConfim] = useState<boolean>(true);
  const [mail, setMail] = useState<boolean>(true);

  const [nameB, setNameB] = useState<boolean>(false);

  const genreHum: string[] = ["MALE", "FEMALE"];
  const handleSelectEtatProduct = (item: string) => setGenre(item);

  // let rel: boolean = false;
  // useEffect(() => {
  //   if (done) rel = true;
  // }, [rel]);

  const checkPhoneEmail = (value: string, checker: number) => {
    if (checker === 1) {
      var numericRegex = /^[0-9]+$/;
      return numericRegex.test(value);
    }
    var numericRegex = /\S+@\S+\.\S+/;
    return numericRegex.test(value);
  };
  const CheckAndSubmit = () => {
    console.log("here we go : " + fname);

    checkPhoneEmail(phone, 1)
      ? setTel(true)
      : phone !== ""
      ? setTel(false)
      : setTel(true);
    checkPhoneEmail(email, 2) ? setMail(true) : setMail(false);
    if (
      fname === "" ||
      lname === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    )
      setNameB(true);
    if (confirmPassword !== password) setConfim(false);
    else setConfim(true);
    if (nameB === false && confirm === true && mail === true && tel === true) {
      console.log("should be not enter");
      handleSignup();
    }
  };
  const handleChangeCouv = (e: any, sign: number) => {
    e.preventDefault();
    console.log(sign);
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      let reader = new FileReader();

      reader.onload = () => {
        if (sign === 0) {
          setProfile(file);
          setImagePreviewUrlCouv(String(reader.result));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignup = () => {
    let data: UserSignup = {
      firstname: fname,
      lastname: lname,
      genre: genre,
      email: email,
      password: password,
      telephone: phone,
      address: adress,
      ville: ville,
      image: profile,
    };
    mutate.mutate(data);
    console.log("data is : " + mutate.data);
    if (doneMail) setIsDone(true);
    else setIsDone(false);
  };
  return (
    <div className="flex flex-col items-center  h-full justify-center">
      <Card
        className={`mx-auto max-w-sm  ${
          isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
        }`}
      >
        <CardHeader className=" p-6">
          <CardTitle
            className={`text-xl ${
              isDarkMode ? " text-black" : "text-[#BBBBBC] "
            }`}
          >
            Sign Up
          </CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 ">
            {!done && (
              <form className=" flex flex-col gap-2">
                <div className="grid grid-cols-4    gap-4">
                  <Input
                    type="file"
                    style={{ display: "none" }}
                    id="profilePic"
                    className="col-span-3"
                    accept="image/*"
                    onChange={(e: any) => handleChangeCouv(e, 0)}
                  />
                  <Label
                    htmlFor="profilePic"
                    onChange={(e: any) => handleChangeCouv(e, 0)}
                    className=" col-span-4 flex  justify-center"
                  >
                    <Avatar className="w-20 h-20  ">
                      <AvatarImage src={imagePreviewUrlCouv} />
                    </Avatar>
                  </Label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label
                      htmlFor="first-name"
                      className={`${nameB ? "text-red-500" : ""} ${
                        isDarkMode ? " text-black" : "text-[#BBBBBC] "
                      }`}
                    >
                      First name *
                    </Label>
                    <Input
                      id="first-name"
                      placeholder="Max"
                      className={`${isDarkMode ? "bg-white" : "bg-[#1A1C1E]"} ${
                        isDarkMode ? " text-black" : "text-[#BBBBBC] "
                      }`}
                      required
                      onChange={(e: any) => setFName(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="last-name"
                      className={`${nameB ? "text-red-500" : ""} ${
                        isDarkMode ? " text-black" : "text-[#BBBBBC] "
                      }`}
                    >
                      Last name *
                    </Label>
                    <Input
                      id="last-name"
                      placeholder="Robinson"
                      className={`${isDarkMode ? "bg-white" : "bg-[#1A1C1E]"} ${
                        isDarkMode ? " text-black" : "text-[#BBBBBC] "
                      }`}
                      required
                      onChange={(e: any) => setLName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="email"
                    className={`${mail ? "" : "text-red-500"} ${
                      isDarkMode ? " text-black" : "text-[#BBBBBC] "
                    }`}
                  >
                    Email *
                  </Label>
                  <Input
                    id="email"
                    className={`${isDarkMode ? "bg-white" : "bg-[#1A1C1E]"} ${
                      isDarkMode ? " text-black" : "text-[#BBBBBC] "
                    }`}
                    type="email"
                    placeholder="m@example.com"
                    required
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                  {!mail && (
                    <Label className=" text-[10px] text-red-500">
                      Email should be not empty and containt @ and .
                    </Label>
                  )}
                  {!doneMail && (
                    <Label className=" text-[10px] text-red-500">
                      Email Already exist .
                    </Label>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="password"
                    className={`${nameB ? "text-red-500" : ""} ${
                      isDarkMode ? " text-black" : "text-[#BBBBBC] "
                    }`}
                  >
                    Password *
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className={`${isDarkMode ? "bg-white" : "bg-[#1A1C1E]"} ${
                      isDarkMode ? " text-black" : "text-[#BBBBBC] "
                    }`}
                    // autocomplete="new-password"
                    onChange={(e: any) => setPassword(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="password"
                    className={`${nameB ? "text-red-500" : ""} ${
                      isDarkMode ? " text-black" : "text-[#BBBBBC] "
                    }`}
                  >
                    Confirm Password *
                  </Label>
                  <Input
                    id="confirmpassword"
                    placeholder="Confirm Password"
                    className={`${isDarkMode ? "bg-white" : "bg-[#1A1C1E]"} ${
                      isDarkMode ? " text-black" : "text-[#BBBBBC] "
                    }`}
                    type="password"
                    onChange={(e: any) => setConfirmPassword(e.target.value)}
                  />
                  {!confirm && (
                    <Label className=" text-[10px] text-red-500">
                      Password not Confirmed
                    </Label>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label
                      htmlFor="phone"
                      className={` ${
                        isDarkMode ? " text-black" : "text-[#BBBBBC] "
                      }`}
                    >
                      Phone
                    </Label>

                    <Input
                      id="phone"
                      className={`${isDarkMode ? "bg-white" : "bg-[#1A1C1E]"} ${
                        isDarkMode ? " text-black" : "text-[#BBBBBC] "
                      }`}
                      type="phone"
                      pattern="[0-9]{2}-[0-9]"
                      placeholder="phone"
                      required
                      onChange={(e: any) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label
                      className={` ${
                        isDarkMode ? " text-black" : "text-[#BBBBBC] "
                      }`}
                      htmlFor="genre"
                    >
                      Genre
                    </Label>
                    <SelectEtatProduct
                      className={` w-full h-auto border ${
                        isDarkMode ? "border-gray-100" : "border-gray-500"
                      }  text-black rounded-md px-2 py-2 font-medium text-xs ${
                        isDarkMode ? "bg-[#1A1C1E]" : "bg-white"
                      }`}
                      arr={genreHum}
                      title={"Genre"}
                      onSelect={handleSelectEtatProduct}
                    ></SelectEtatProduct>
                  </div>
                  {!tel && (
                    <Label className="col-span-3 text-[10px] text-red-500">
                      Phone should be containt only numbers
                    </Label>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label
                      htmlFor="adress"
                      className={` ${
                        isDarkMode ? " text-black" : "text-[#BBBBBC] "
                      }`}
                    >
                      Adress
                    </Label>
                    <Input
                      id="adress"
                      type="adress"
                      placeholder="adress"
                      className={`${isDarkMode ? "bg-white" : "bg-[#1A1C1E]"} ${
                        isDarkMode ? " text-black" : "text-[#BBBBBC] "
                      }`}
                      required
                      onChange={(e: any) => setAdress(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="ville"
                      className={` ${
                        isDarkMode ? " text-black" : "text-[#BBBBBC] "
                      }`}
                    >
                      City
                    </Label>
                    <Input
                      id="ville"
                      type="ville"
                      className={`${isDarkMode ? "bg-white" : "bg-[#1A1C1E]"} ${
                        isDarkMode ? " text-black" : "text-[#BBBBBC] "
                      }`}
                      placeholder="city"
                      required
                      onChange={(e: any) => setVille(e.target.value)}
                    />
                  </div>
                  {nameB && (
                    <Label className="col-span-3 text-[10px] text-red-500">
                      Each field has (*) should be not empty
                    </Label>
                  )}
                </div>
                <Button
                  type="submit"
                  className={`w-full ${!isDarkMode && " bg-[#855ADF]"}`}
                  onClick={CheckAndSubmit}
                >
                  Create an account
                </Button>
              </form>
            )}
            {done && (
              <Label className="col-span-3 text-[10px] text-green-500">
                Your account has been created successfully now you should be
                signin
              </Label>
            )}
            {/* <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button> */}
          </div>

          <div
            className={`mt-4 text-center text-sm ${
              isDarkMode ? " text-black" : "text-[#BBBBBC] "
            }`}
          >
            Already have an account?{" "}
            <Link href="/signin" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
