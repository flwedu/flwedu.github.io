//@ts-nocheck
import { createContext, useEffect, useState } from "react";
import textsSource from "../../../static/res/texts.json";
import { StorageService } from "../../service/storage-service";

type TextSource = {
  language: "en" | "pt-br";
  emoji: "🇺🇸" | "🇧🇷",
    buttons: {
      toDarkMode: string,
      toLightMode: string,
      language: string
    },
  navbar: {
    home: string;
    technologies: string;
    projects: string;
    links: string;
  };
  sections: {
    about: {
      h1: string;
      p: string;
    };
    technologies: {
      h1: string;
      p: string;
    };
    projects: {
      h1: string;
      p: string;
    };
  };
};

type TextContextType = {
  text: TextSource;
  language: "en" | "pt-br";
  toggleFn: () => void;
};

const TEXT_EN = textsSource["en"];
const TEXT_PTBR = textsSource["pt-br"];

const TextContext = createContext<TextContextType | null>(null);

const TextContextProvider = (props: {
  children: JSX.Element;
  storageService: StorageService;
}) => {
  const initialLanguage = props.storageService.loadItem("language");
  const [language, setLanguage] = useState(initialLanguage);
  const [text, setText] = useState(textsSource[initialLanguage]);

  // saving new preferences when text is changed
  useEffect(() => {
    props.storageService.saveItem("language", text.language);
    setLanguage(text.language);
  }, [text]);

  // Toggle language selection, useEffect function above this is triggered
  const toggleFn = () => {
    if (text.language == "pt-br") {
      return setText(TEXT_EN);
    }
    return setText(TEXT_PTBR);
  };

  return (
    <TextContext.Provider value={{ text, toggleFn, language }}>
      {props.children}
    </TextContext.Provider>
  );
};

export { TextContext, TextContextProvider };
