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
import { getProviders, signIn, useSession } from "next-auth/react";
export default function Page() {
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
  const [provider, setProviders] = useState<any>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const { role, updateRole } = useVariable();
  useEffect(() => {
    getProviders().then((provider) => {
      setProviders(provider);
      setIsLoaded(true);
    });
  }, []);
  useEffect(() => {
    if (status === "authenticated") {
      window.location.href = "/"; // Redirige l'utilisateur authentifié
    }
  }, [status]);
  // const mutate = useMutation({
  //   mutationFn: async (user: login) => {
  //     const response = await axios.post(
  //       "http://localhost:3000/api/auth/signin",
  //       {
  //         username: email,
  //         password: password,
  //       },
  //       { withCredentials: true }
  //     );
  //     if (response.status !== 201) {
  //       setIsDoneMail(false);
  //       return null;
  //     }
  //     setIsDoneMail(true);
  //     const redirectefPath: string | null =
  //       localStorage.getItem("pathBeforSigin");
  //     if (redirectefPath) {
  //       localStorage.setItem("role", response.data.data.role);
  //       updateRole();
  //       localStorage.removeItem("pathBeforSigin");
  //       router.push(redirectefPath);
  //     } else router.push("/");
  //     localStorage.setItem("isLoged", "true");
  //   },
  // });
  // console.log(isLoaded);
  // if (!isLoaded) return <div>Chargement...</div>;
  // const handleLoginGoogle = async (event: any) => {};

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
          {Object.values(provider).map((provi: any) => (
            <div key={provi.name} className="grid gap-4">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={(e: any) => {
                  signIn(provi.id);
                }}
              >
                Login with 42
              </Button>
            </div>
          ))}
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
