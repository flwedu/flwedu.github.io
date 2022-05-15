import { Link } from "react-router-dom";
import useTextContext from "../contexts/consumers/text-context-consumer";

export function NavHeader() {
  const { text } = useTextContext();

  return (
    <nav className="sticky container flex flex-row mx-auto justify-center content-center top-0 max-w-3xl h-12 bg-white border-gray-200 dark:bg-gray-800 rounded shadow-md">
      <ul className="flex flex-row justify-center items-center gap-5">
        <li>
          <Link to="/">{text.navbar.home}</Link>
        </li>
        <li>
          <Link to="/technologies">{text.navbar.technologies}</Link>
        </li>
        <li>
          <Link to="/projects">{text.navbar.projects}</Link>
        </li>
        <li>
          <Link to="/links">{text.navbar.links}</Link>
        </li>
      </ul>
    </nav>
  );
}
