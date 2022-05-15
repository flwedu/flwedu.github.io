//@ts-nocheck
import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { DarkModeButton } from "./components/DarkModeButton";
import { TextContextProvider } from "./contexts/providers/text-context-provider";
import { NavHeader } from "./layout/NavHeader";
import { AboutMe } from "./sections/AboutMe";
import { Links } from "./sections/Links";
import { ProjectsList } from "./sections/ProjectsList";
import { Technologies } from "./sections/Technologies";
import { StorageService } from "./service/storage-service";
import "./styles.css";
import "./tailwind.css";

function App() {
  const storageService = new StorageService();
  const settings = storageService.load();

  const [darkmode, setDarkmode] = useState(settings.darkmode);

  // Initializing
  useEffect(() => {
    if (darkmode) document.documentElement.classList.add("dark");
  });

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkmode(document.documentElement.classList.contains("dark"));
  };

  return (
    <div className="App">
      <TextContextProvider storageService={storageService}>
        <main>
          <HashRouter>
            <NavHeader />
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="technologies" element={<Technologies />} />
              <Route path="projects" element={<ProjectsList />} />
              <Route path="links" element={<Links />} />
            </Routes>
          </HashRouter>
        </main>
        <DarkModeButton toggleDarkMode={toggleDarkMode} />
      </TextContextProvider>
    </div>
  );
}

export { App };
