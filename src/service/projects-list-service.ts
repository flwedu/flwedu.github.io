import { Project } from "../components/ProjectCard";

export class ProjectsListService {
  constructor(private filePath: string) {}

  async getList(): Promise<Project[]> {
    const list = await (await fetch(this.filePath)).json();
    const projects: Project[] = list.map((el: any) => el as Project);
    return projects;
  }
}
