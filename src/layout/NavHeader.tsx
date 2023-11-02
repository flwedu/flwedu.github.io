import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";

export function NavHeader() {
	const { t } = useTranslation();

  return (
    <nav className="sticky container flex flex-row mx-auto justify-center content-center top-0 max-w-3xl h-12 bg-white border-gray-200 dark:bg-gray-800 rounded shadow-md">
      <ul className="flex flex-row justify-center items-center gap-5">
        <li>
          <Link to="/">{t("navbar.home")}</Link>
        </li>
        <li>
          <Link to="/technologies">{t("navbar.technologies")}</Link>
        </li>
        <li>
          <Link to="/projects">{t("navbar.projects")}</Link>
        </li>
        <li>
          <Link to="/links">{t("navbar.links")}</Link>
        </li>
      </ul>
    </nav>
  );
}
