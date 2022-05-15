//@ts-nocheck
import { createContext, useEffect, useState } from "react";
import textsSource from "../../../static/res/texts.json";
import { StorageService } from "../../service/storage-service";

type TextSource = {
  language: "en" | "pt-br";
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
  otherLanguage: "en" | "pt-br";
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
  const [text, setText] = useState(textsSource[initialLanguage]);
  const [otherLanguage, setOtherLanguage] = useState(
    oppositeLanguage(initialLanguage)
  );

  // saving new preferences when text is changed
  useEffect(() => {
    props.storageService.saveItem("language", text.language);
  }, [text]);

  // Toggle language selection, useEffect function above this is triggered
  const toggleFn = () => {
    setOtherLanguage(text.language);
    if (text.language == "pt-br") {
      return setText(TEXT_EN);
    }
    return setText(TEXT_PTBR);
  };

  return (
    <TextContext.Provider value={{ text, toggleFn, otherLanguage }}>
      {props.children}
    </TextContext.Provider>
  );
};

function oppositeLanguage(language: "en" | "pt-br") {
  if (language === "en") return "pt-br";
  return "en";
}

export { TextContext, TextContextProvider };
