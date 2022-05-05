import jsonPtBr from "../../static/res/projects.json";
import jsonEn from "../../static/res/projects_en.json";
import { Project } from "../components/ProjectCard";

export class ProjectsListService {
  constructor() {}

  async getList(): Promise<Project[]> {
    const projects: Project[] = jsonPtBr.map((el: any) => el as Project);
    return projects;
  }
}
