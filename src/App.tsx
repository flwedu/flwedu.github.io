import "./tailwind.css";
import "./styles.css";
import { DarkModeButton } from "./components/DarkModeButton";
import { AboutMe } from "./sections/AboutMe";
import { NavHeader } from "./layout/NavHeader";
import { Technologies } from "./sections/Technologies";
import { ProjectsList } from "./sections/ProjectsList";
import { Links } from "./sections/Links";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import texts from "../static/res/texts.json";

const TEXT_EN = texts.en;
const TEXT_PTBR = texts["pt-br"];

export type TextContextType = {
  text: typeof TEXT_EN;
  toggleFn: () => void;
};
var TextContext = createContext<TextContextType | null>(null);

function App() {
  const [text, setText] = useState(TEXT_PTBR);

  const toggleLanguage = () => {
    if (text.language == "pt-br") {
      return setText(TEXT_EN);
    }
    return setText(TEXT_PTBR);
  };

  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <TextContext.Provider value={{ text, toggleFn: toggleLanguage }}>
            <NavHeader />
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="technologies" element={<Technologies />} />
              <Route path="projects" element={<ProjectsList />} />
              <Route path="links" element={<Links />} />
            </Routes>
          </TextContext.Provider>
        </BrowserRouter>
      </main>
      <DarkModeButton />
    </div>
  );
}

export { App, TextContext };
