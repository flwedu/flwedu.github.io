import { HashRouter, Route, Routes } from "react-router-dom";
import DarkModeButton from "./components/DarkModeButton";
import LanguageButton from "./components/LanguageButton";
import { DarkModeContextProvider } from "./contexts/providers/darkmode-provider";
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
        <LanguageButton />
        <DarkModeContextProvider storageService={storageService}>
          <DarkModeButton />
        </DarkModeContextProvider>
      </TextContextProvider>
    </div>
  );
}

export { App };
