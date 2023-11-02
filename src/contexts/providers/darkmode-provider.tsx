import * as localforage from 'localforage'
import { ReactNode, createContext, useEffect, useState } from "react";

type DarkModeContextType = {
	darkMode: boolean;
  toggleFn: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | null>(null);

const DarkModeContextProvider = (props: {
  children: ReactNode;
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

	useEffect(() => {
		localforage.getItem<boolean>("darkMode").then((value) => {
			if (value == null) {
				localforage.setItem("darkMode", false);
			} else {
				setDarkMode(value);
			}
		});
	}, []);

  useEffect(() => {
		localforage.setItem("darkMode", darkMode);

		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

  }, [darkMode]);

  // Function that is used to toggle dark mode
  const toggleFn = () => {
    setDarkMode((currDarkMode) => !currDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleFn }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeContextProvider };
