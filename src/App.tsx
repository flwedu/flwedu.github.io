import { NavHeader } from "@/layout/NavHeader";
import { AboutMe } from "@/sections/AboutMe";
import { Links } from "@/sections/Links";
import { ProjectsList } from "@/sections/ProjectsList";
import { Technologies } from "@/sections/Technologies";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Card } from "./components/ui/card.jsx";
import "./i18n/config.ts";
import "./styles/global.css";

function App() {
	return (
		<div className="w-full h-full">
			<HashRouter>
				<NavHeader />
				<main className="mx-auto container">
					<Card className="bg-neutral-50 dark:bg-neutral-800 mt-4 p-4">
						<Routes>
							<Route path="/" element={<AboutMe />} />
							<Route path="technologies" element={<Technologies />} />
							<Route path="projects" element={<ProjectsList />} />
							<Route path="links" element={<Links />} />
						</Routes>
					</Card>
				</main>
			</HashRouter>
		</div>
	);
}

export { App };
