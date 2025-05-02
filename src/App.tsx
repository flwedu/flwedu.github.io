import DarkModeButton from "@/components/DarkModeButton";
import LanguageButton from "@/components/LanguageButton";
import { NavHeader } from "@/layout/NavHeader";
import { AboutMe } from "@/sections/AboutMe";
import { Links } from "@/sections/Links";
import { ProjectsList } from "@/sections/ProjectsList";
import { Technologies } from "@/sections/Technologies";
import "@/styles.css";
import "@/tailwind.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./i18n/config.ts";

function App() {
	return (
		<div className="App">
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
			<DarkModeButton />
		</div>
	);
}

export { App };
