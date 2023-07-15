//@ts-nocheck
import { ReactNode, createContext, useEffect, useState } from "react";
import { StorageService } from "../../service/storage-service";

type DarkModeContextType = {
  darkmode: boolean;
  toggleFn: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | null>(null);

const DarkModeContextProvider = (props: {
  children: ReactNode;
  storageService: StorageService;
}) => {
  const initialDarkMode = props.storageService.loadItem("darkmode") as boolean;

  const [darkmode, setDarkMode] = useState<boolean>(initialDarkMode);

  // Check if dark mode is enabled at initialization
  if (darkmode) document.documentElement.classList.add("dark");

  useEffect(() => {
    props.storageService.saveItem("darkmode", darkmode);
  }, [darkmode]);

  // Function that is used to toggle dark mode
  const toggleFn = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(document.documentElement.classList.contains("dark"));
  };

  return (
    <DarkModeContext.Provider value={{ darkmode, toggleFn }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeContextProvider };
