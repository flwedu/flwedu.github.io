import "./tailwind.css";
import "./styles.css";
import { DarkModeButton } from "./components/DarkModeButton";
import { AboutMe } from "./sections/AboutMe";
import { NavHeader } from "./layout/NavHeader";
import { Technologies } from "./sections/Technologies";
import { ProjectsList } from "./sections/ProjectsList";
import { Links } from "./sections/Links";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <NavHeader />
          <Routes>
            <Route path="/" index element={<AboutMe />} />
            <Route path="technologies" element={<Technologies />} />
            <Route path="projects" element={<ProjectsList />} />
            <Route path="links" element={<Links />} />
          </Routes>
        </BrowserRouter>
      </main>
      <DarkModeButton />
    </div>
  );
}

export default App;
