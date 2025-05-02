import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export function Technologies() {
	const { t } = useTranslation<"translations">();

	return (
		<>
			<CardHeader>
				<CardTitle className="text-center text-2xl">
					{t("sections.technologies.h1")}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p>{t("sections.technologies.p")}</p>
				<div className="grid text-center mt-2 text-xl sm:grid-cols-2">
					<ul className="text-purple-600 dark:text-slate-300 font-[Bungee]">
						<li>Javascript</li>
						<li>Node.js</li>
						<li>Typescript</li>
						<li>React.js</li>
						<li>HTML</li>
						<li>CSS</li>
					</ul>
					<ul className="text-purple-600 dark:text-slate-300 font-[Bungee]">
						<li>Java & Spring</li>
						<li>GIT & Github</li>
						<li>Maven & Gradle</li>
						<li>JUnit</li>
						<li>GraphQL</li>
						<li>API Rest</li>
					</ul>
				</div>
			</CardContent>
		</>
	);
}
