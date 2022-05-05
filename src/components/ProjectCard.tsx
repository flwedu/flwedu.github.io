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
    <div className="card flex flex-col gap-2 max-w-sm p-2 my-2 rounded-lg shadow-lg space-x-4 items-center place-content-between">
      <div className="card-header flex justify-center">
        <img
          src={project.imgUrl}
          alt="Imagem do projeto"
          className="w-40 rounded-sm"
        />
      </div>
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="card-footer flex items-center gap-2">
        {project.applicationLink && (
          <ProjectCardButton
            key="1"
            name="Visite App"
            url={project.applicationLink}
          />
        )}
        {project.githubLink && (
          <ProjectCardButton key="2" name="Github" url={project.githubLink} />
        )}
      </div>
    </div>
  );
}

function ProjectCardButton(props: { name: string; url: string }) {
  return (
    <a
      href={props.url}
      target="_blank"
      className="text-center rounded-md px-1 py-2 w-24 bg-mainPurple-500 hover:bg-mainPurple-100"
    >
      {props.name}
    </a>
  );
}
