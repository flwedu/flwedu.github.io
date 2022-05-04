export type Project = {
  title: string;
  description: string;
  tags: string[];
  imgUrl: string;
  applicationLink: string | null;
  githubLink: string | null;
};

export function ProjectCard(props: { project: Project }) {
  const { project } = props;

  return (
    <div className="flex max-w-sm p-1 my-2 rounded-lg shadow-lg flex-col space-x-4">
      <div className="flex justify-center">
        <img
          src={project.imgUrl}
          alt="Imagem do projeto"
          className="w-40 rounded-sm"
        />
      </div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

/* 
<div class="card">
            <div class="card-header">
            <img src=${project.imgUrl} />
            </div>
            <div class="card-body">
            <div class="tags">
            ${project.tags?.map(generateTagHtml).join("")}
            </div>
            <h2 class="card-title">${project.title}</h2>
            <p class="card-text">
            ${project.description}
            </p>
            </div>
            <div class="card-footer">
            ${
              project.applicationLink
                ? "<a href='" +
                  project.applicationLink +
                  "' target='_blank' class='btn btn-grad'>Visite App</a>"
                : ""
            }
            <a href=${
              project.githubLink
            } target="_blank" class="btn btn-grad">Github</a>
            </div>
            </div>
*/
