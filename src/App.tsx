import "./tailwind.css";
import { FeedBackButton } from "./components/FeedBackButton";
import { AboutMe } from "./sections/AboutMe";
import { NavHeader } from "./layout/NavHeader";
import { Technologies } from "./sections/Technologies";
import { Projects } from "./sections/Projects";

function App() {
  return (
    <div className="App">
      <body>
        <NavHeader />
        <AboutMe />
        <Technologies />
        <Projects />
      </body>
      <FeedBackButton />
    </div>
  );
}

export default App;
