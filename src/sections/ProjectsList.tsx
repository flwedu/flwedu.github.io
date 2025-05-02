import { useEffect, useState } from "react";
import projectsListJson from "../../static/res/projects.json";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "../components/ProjectCard";

export function ProjectsList() {
	const { t, i18n } = useTranslation();

	const [projectsList, setProjectsList] = useState<
		(typeof projectsListJson)["pt-br"]
	>(projectsListJson["pt-br"]);

	useEffect(() => {
		if (i18n.language === "pt-BR")
			return setProjectsList(projectsListJson["pt-br"]);
		return setProjectsList(projectsListJson.en);
	}, [i18n.language]);

	return (
		<div className="flex flex-col gap-8">
			<CardHeader>
				<CardTitle className="text-2xl text-center">
					{t("sections.projects.h1")}
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<p>{t("sections.projects.p")}</p>
				<div className="justify-items-center gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{projectsList.map((el) => (
						<ProjectCard project={el} key={el.title} />
					))}
				</div>
			</CardContent>
		</div>
	);
}
