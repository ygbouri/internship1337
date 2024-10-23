import { user_role } from "@prisma/client";

import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

interface User {
  id_user: string;
  login: string;
  fullName: string;
  password?: string;
  telephone?: string;
  address?: string;
  image: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  role: user_role;
  ville?: string;
}

interface UserProviderPorps {
  children: React.ReactNode;
}
const userContext = createContext<User | null>(null);

export const UserProvider = ({ children }: UserProviderPorps) => {
  const [user, setUser] = useState<User | null>(null);
  const { data: session, status } = useSession();
  // if (session.data?.user)
  //     var email = session.data.user.email
  useEffect(() => {
    const data = async () => {
      if (status === "authenticated" && session?.user?.email) {
        const res = await fetch(`/api/user?email=${session.user.email}`);
        const userData = await res.json();
        setUser(userData.data);
      }
    };
    data();
    if (user) localStorage.setItem("isLoged", "true");
  }, [status, session]);
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export const useUser = (): User | null => {
  return useContext(userContext);
};
