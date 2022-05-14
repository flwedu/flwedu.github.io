import { useContext } from "react";
import { TextContext, TextContextType } from "../App";

export default function LanguageButton() {
  const { toggleFn, otherLanguage } = useContext(
    TextContext
  ) as TextContextType;
  function handleClick() {
    toggleFn();
  }

  return (
    <button onClick={handleClick}>
      {otherLanguage == "en" ? "🇺🇸" : "🇧🇷"} {otherLanguage.toUpperCase()}
    </button>
  );
}
