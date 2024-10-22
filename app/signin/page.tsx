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
import { useDarkMode } from "@/config/darkmode";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { login } from "@/types/Api";
import { useRouter } from "next/navigation";
import { useVariable } from "@/components/providerVariable";
import { CloudCog } from "lucide-react";
import { METHODS } from "http";

export default function Page() {
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState<boolean>(true);
  const [nameB, setNameB] = useState<boolean>(false);
  const [confirm, setConfim] = useState<boolean>(true);
  const [doneMail, setIsDoneMail] = useState<boolean>(true);
  const router = useRouter();
  const { role, updateRole } = useVariable();
  useEffect(() => {});
  const mutate = useMutation({
    mutationFn: async (user: login) => {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        {
          username: email,
          password: password,
        },
        { withCredentials: true }
      );
      if (response.status !== 201) {
        setIsDoneMail(false);
        return null;
      }
      setIsDoneMail(true);
      const redirectefPath: string | null =
        localStorage.getItem("pathBeforSigin");
      if (redirectefPath) {
        localStorage.setItem("role", response.data.data.role);
        updateRole();
        localStorage.removeItem("pathBeforSigin");
        router.push(redirectefPath);
      } else router.push("/");
      localStorage.setItem("isLoged", "true");
    },
  });
  const handleLoginGoogle = async (event: any) => {
    event.preventDefault();

    console.log("hola");
    try {
      // let currentPath = localStorage.getItem("pathBeforSigin");
      // const response = await axios.get(
      //   `http://localhost:5000/auth/google/login?state=${currentPath}`,
      //   {
      //     // headers: {
      //     //   "Content-Type": "application/json", // Set content type if needed
      //     //   // Add other headers here, e.g., Authorization
      //     // },
      //     // withCredentials: true,
      //   }
      // );
      // if (response.status !== 200) {
      //   return null;
      // }
      // console.log(response);
      // if (response.data.role && response.data.path) {
      //   localStorage.setItem("role", response.data.role as string);
      //   updateRole();
      //   router.push(response.data.path);
      // }
      //  const redirectefPath: string | null =
      //  localStorage.getItem("pathBeforSigin");
      //  if (redirectefPath) {
      //    localStorage.setItem("role", response.data.data.role);
      //    updateRole();
      //    localStorage.removeItem("pathBeforSigin");
      //    router.push(redirectefPath);
      //  } else router.push("/");
      //  localStorage.setItem("isLoged", "true");
    } catch (error) {
      console.log(error);
    }
    // localStorage.setItem("pathBeforSigin", window.location.pathname);
    let currentPath = localStorage.getItem("pathBeforSigin");
    if (!currentPath) currentPath = "/";
    window.open(
      `http://localhost:5000/auth/google/login?state=${encodeURIComponent(
        currentPath
      )}`,
      "_self"
    );
  };
  const checkPhoneEmail = (value: string, checker: number) => {
    if (checker === 1) {
      return password !== "" ? true : false;
    }
    var numericRegex = /\S+@\S+\.\S+/;
    return numericRegex.test(value);
  };
  const CheckAndSubmit = (event: any) => {
    event.preventDefault();
    checkPhoneEmail(password, 1) ? setConfim(true) : setConfim(false);
    checkPhoneEmail(email, 2) ? setMail(true) : setMail(false);
    if (email === "" || password === "") setNameB(true);

    if (confirm === true && mail === true) {
      mutate.mutate({ username: email, password: password });
    }
  };
  // const handleSignup = (event: any) => {
  //   // event.preventDefault();

  //   let data = {
  //     username: email,
  //     password: password,
  //   };
  //   console.log("email is : " + email + " and password is: " + password);
  //   mutate.mutate(data);
  //   console.log("data is : " + mutate.data);
  //   // if (doneMail) setIsDone(true);
  //   // else setIsDone(false);
  // };

  return (
    <div className="flex flex-col items-center  h-full justify-center">
      <Card
        className={`mx-auto max-w-sm  ${
          isDarkMode ? "bg-white" : "bg-[#1A1C1E]"
        }`}
      >
        <CardHeader className="p-6">
          <CardTitle
            className={`${
              isDarkMode ? " text-black" : "text-[#BBBBBC] "
            } text-2xl`}
          >
            Login
          </CardTitle>
          <CardDescription
            className={`${isDarkMode ? " text-black" : "text-[#BBBBBC] "}`}
          >
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <form className=" flex flex-col gap-2" onSubmit={CheckAndSubmit}>
              <div className="grid gap-2">
                <Label
                  htmlFor="email"
                  className={`${
                    isDarkMode ? " text-black" : "text-[#BBBBBC] "
                  }`}
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(even) => setEmail(even.target.value)}
                  className={`${
                    isDarkMode ? " text-black" : "text-[#BBBBBC] "
                  }`}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label
                    htmlFor="password"
                    className={`${
                      isDarkMode ? " text-black" : "text-[#BBBBBC] "
                    }`}
                  >
                    Password
                  </Label>
                  <Link
                    href="#"
                    className={`ml-auto inline-block text-sm underline ${
                      isDarkMode ? " text-black" : "text-[#BBBBBC] "
                    }`}
                  >
                    Forgot your password?
                  </Link>
                </div>

                <Input
                  id="password"
                  type="password"
                  required
                  onChange={(even) => setPassword(even.target.value)}
                />
                {!doneMail && (
                  <Label className={`text-[10px] text-red-500`}>
                    Email or Password not correct
                  </Label>
                )}
              </div>
              <Button
                type="submit"
                className={`w-full ${!isDarkMode && " bg-[#855ADF]"}`}
              >
                Login
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={(e: any) => {
                  handleLoginGoogle(e);
                }}
              >
                Login with Google
              </Button>
            </form>
          </div>
          <div
            className={`mt-4 text-center text-sm ${
              isDarkMode ? " text-black" : "text-[#BBBBBC] "
            }`}
          >
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
