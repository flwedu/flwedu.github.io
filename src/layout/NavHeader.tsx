import { Link } from "react-router-dom";

export function NavHeader() {
  return (
    <nav className="sticky container flex flex-row mx-auto justify-center content-center top-0 max-w-3xl h-12 bg-white border-gray-200 dark:bg-gray-800 rounded shadow-md">
      <ul className="flex flex-row justify-center items-center gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/technologies">Tecnologias</Link>
        </li>
        <li>
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/links">Links</Link>
        </li>
      </ul>
    </nav>
  );
}
