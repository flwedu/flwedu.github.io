import { useEffect, useState } from "react";
import { Project, ProjectCard } from "../components/ProjectCard";
import { ProjectsListService } from "../service/projects-list-service";

export function ProjectsList() {
  const projectsListPath = "../../assets/res/projects.json";
  const projectsListPathEn = "../../assets/res/projects_en.json";

  const service = new ProjectsListService(projectsListPath);

  const [projectsList, setProjectsList] = useState<Project[]>([]);
  useEffect(() => {
    const loadProjects = async () => {
      const list = await service.getList();
      setProjectsList(list);
    };

    loadProjects();
  }, []);

  return (
    <section id="projects">
      <h1>Projetos desenvolvidos</h1>

      <p>
        Esses são alguns projetos que achei bastante desafiadores e pude aplicar
        o que estava estudando durante o período do desenvolvimento.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 content-center">
        {projectsList.map((el) => (
          <ProjectCard project={el} key={el.title} />
        ))}
      </div>
    </section>
  );
}
