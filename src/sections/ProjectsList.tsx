import { useContext, useEffect, useState } from "react";
import projectsListJson from "../../static/res/projects.json";
import { TextContext, TextContextType } from "../App";
import { ProjectCard } from "../components/ProjectCard";

export function ProjectsList() {
  const { text } = useContext(TextContext) as TextContextType;
  const projects = text.sections.projects;

  const [projectsList, setProjectsList] = useState<
    typeof projectsListJson["pt-br"]
  >(projectsListJson["pt-br"]);
  useEffect(() => {
    if (text.language == "en") return setProjectsList(projectsListJson.en);
    return setProjectsList(projectsListJson["pt-br"]);
  }, [text]);

  return (
    <section id="projects" className="">
      <h1>{projects.h1}</h1>

      <p>{projects.p}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 content-center">
        {projectsList.map((el) => (
          <ProjectCard project={el} key={el.title} />
        ))}
      </div>
    </section>
  );
}
