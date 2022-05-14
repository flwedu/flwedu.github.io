//@ts-nocheck
import { createContext, useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import texts from "../static/res/texts.json";
import { DarkModeButton } from "./components/DarkModeButton";
import { NavHeader } from "./layout/NavHeader";
import { AboutMe } from "./sections/AboutMe";
import { Links } from "./sections/Links";
import { ProjectsList } from "./sections/ProjectsList";
import { Technologies } from "./sections/Technologies";
import { StorageService } from "./service/storage-service";
import "./styles.css";
import "./tailwind.css";

const TEXT_EN = texts.en;
const TEXT_PTBR = texts["pt-br"];

export type TextContextType = {
  text: typeof TEXT_EN;
  otherLanguage: "pt-br" | "en";
  toggleFn: () => void;
};
var TextContext = createContext<TextContextType | null>(null);

function App() {
  const storageService = new StorageService();
  const settings = storageService.load();

  const [text, setText] = useState(texts[settings.language]);
  const [darkmode, setDarkmode] = useState(settings.darkmode);
  const [otherLanguage, setOtherLanguage] = useState(settings.language);

  // Initializing
  useEffect(() => {
    if (darkmode) document.documentElement.classList.add("dark");
    if (settings.language == "en") return setOtherLanguage("pt-br");
    return setOtherLanguage("en");
  });

  // Saving new settings on storage
  useEffect(() => {
    storageService.save({ darkmode, language: text.language });
  }, [text, darkmode]);

  // Toggle language selection, useEffect function above this is triggered
  const toggleLanguage = () => {
    setOtherLanguage(text.language);
    if (text.language == "pt-br") {
      return setText(TEXT_EN);
    }
    return setText(TEXT_PTBR);
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkmode(document.documentElement.classList.contains("dark"));
  };

  return (
    <div className="App">
      <main>
        <HashRouter>
          <TextContext.Provider
            value={{ text, toggleFn: toggleLanguage, otherLanguage }}
          >
            <NavHeader />
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="technologies" element={<Technologies />} />
              <Route path="projects" element={<ProjectsList />} />
              <Route path="links" element={<Links />} />
            </Routes>
          </TextContext.Provider>
        </HashRouter>
      </main>
      <DarkModeButton toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export { App, TextContext };
