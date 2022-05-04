import "./tailwind.css";
import { DarkModeButton } from "./components/DarkModeButton";
import { AboutMe } from "./sections/AboutMe";
import { NavHeader } from "./layout/NavHeader";
import { Technologies } from "./sections/Technologies";
import { ProjectsList } from "./sections/ProjectsList";
import { Links } from "./sections/Links";

function App() {
  return (
    <div className="App">
      <NavHeader />
      <main>
        <AboutMe />
        <Technologies />
        <ProjectsList />
        <Links />
      </main>
      <DarkModeButton />
    </div>
  );
}

export default App;
