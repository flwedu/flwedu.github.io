import { useContext } from "react";
import { TextContext } from "../providers/text-context-provider";

const useTextContext = () => {
  const context = useContext(TextContext);

  if (context == undefined) {
    throw new Error("useTextContext was used outside of TextContextProvider");
  }

  return context;
};

export default useTextContext;
