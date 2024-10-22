"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface defaultVariable {
  role: boolean;
  updateRole: () => void;
}
const variableContext = createContext<defaultVariable | null>(null);

export function VariablesProvider({ children }: any) {
  const [role, setRole] = useState<boolean>(false);

  useEffect(() => {
    const storRole =
      localStorage.getItem("role") == "ADMIN" ||
      localStorage.getItem("role") == "OWNER"
        ? true
        : false;
    if (storRole) setRole(storRole);
  }, [role]);

  const updateRole = () => {
    const roleCheck =
      localStorage.getItem("role") == "ADMIN" ||
      localStorage.getItem("role") == "OWNER"
        ? true
        : false;
    setRole(roleCheck);
  };
  return (
    <variableContext.Provider value={{ role, updateRole }}>
      {children}
    </variableContext.Provider>
  );
}

export const useVariable = () => {
  const role = useContext(variableContext);
  if (role == null)
    throw new Error("useVariable must be used with variableContext");
  return role;
};
