import "./tailwind.css";
import { FeedBackButton } from "./components/FeedBackButton";
import { AboutMe } from "./sections/AboutMe";
import { NavHeader } from "./layout/NavHeader";
import { Technologies } from "./sections/Technologies";
import { ProjectsList } from "./sections/ProjectsList";

function App() {
  return (
    <div className="App">
      <body>
        <NavHeader />
        <AboutMe />
        <Technologies />
        <ProjectsList />
      </body>
      <FeedBackButton />
    </div>
  );
}

export default App;
