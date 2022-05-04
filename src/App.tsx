import "./tailwind.css";
import { FeedBackButton } from "./components/FeedBackButton";
import { AboutMe } from "./sections/AboutMe";
import { NavHeader } from "./layout/NavHeader";
import { Technologies } from "./sections/Technologies";
<<<<<<< HEAD
import { ProjectsList } from "./sections/ProjectsList";
=======
import { Projects } from "./sections/Projects";
>>>>>>> ec2275a8cc0c813001101e1d8b450e49406dd130

function App() {
  return (
    <div className="App">
      <body>
        <NavHeader />
        <AboutMe />
        <Technologies />
<<<<<<< HEAD
        <ProjectsList />
=======
        <Projects />
>>>>>>> ec2275a8cc0c813001101e1d8b450e49406dd130
      </body>
      <FeedBackButton />
    </div>
  );
}

export default App;
