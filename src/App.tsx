//@ts-nocheck
import { createContext, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import texts from "../static/res/texts.json";
import { DarkModeButton } from "./components/DarkModeButton";
import { NavHeader } from "./layout/NavHeader";
import { AboutMe } from "./sections/AboutMe";
import { Links } from "./sections/Links";
import { ProjectsList } from "./sections/ProjectsList";
import { Technologies } from "./sections/Technologies";
import "./styles.css";
import "./tailwind.css";

const TEXT_EN = texts.en;
const TEXT_PTBR = texts["pt-br"];

export type TextContextType = {
  text: typeof TEXT_EN;
  otherLanguage: string;
  toggleFn: () => void;
};
var TextContext = createContext<TextContextType | null>(null);

function App() {
  const [text, setText] = useState(TEXT_PTBR);
  const [otherLanguage, setOtherLanguage] = useState("en");

  const toggleLanguage = () => {
    setOtherLanguage(text.language);
    if (text.language == "pt-br") {
      return setText(TEXT_EN);
    }
    return setText(TEXT_PTBR);
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
      <DarkModeButton />
    </div>
  );
}

export { App, TextContext };
