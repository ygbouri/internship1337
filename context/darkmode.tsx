"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from "react";

interface DarkModeContextType {
  isDarkMode: boolean;
  handleDarkModeToggle: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: FC<DarkModeProviderProps> = ({ children }) => {
  // Check if window is defined (i.e., if in the browser environment)
  const [isDarkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return userPrefersDark ? false : true;
    }
    return true; // Default to light mode if not in browser
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mode = isDarkMode ? "dark" : "light";
      localStorage.setItem("darkMode", mode);
    }
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    if (localStorage.getItem("darkMode") === "dark")
      localStorage.setItem("darkMode", "light");
    else localStorage.setItem("darkMode", "dark");
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, handleDarkModeToggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

// ("use client");

// import * as React from "react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { type ThemeProviderProps } from "next-themes/dist/types";

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
// }
