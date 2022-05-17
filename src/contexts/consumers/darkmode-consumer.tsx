import { useContext } from "react";
import { DarkModeContext } from "../providers/darkmode-provider";

const useDarkModeContext = () => {
  const context = useContext(DarkModeContext);

  if (context == undefined) {
    throw new Error(
      "useDarkModeContext was used outside of DarkModeContextProvider"
    );
  }

  return context;
};

export default useDarkModeContext;
