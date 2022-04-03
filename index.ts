interface Project {
  title: string,
  description: string,
  imgUrl: string,
  applicationLink: string,
  githubLink: string
}

interface TechImage {
  src: string,
  alt: string
}

// Rendering lists
const renderProjects = (list: Project[]) => {
  const projectsListEl = document.querySelector<HTMLDivElement>("#projectsList");
  list.forEach((item) => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    cardEl.innerHTML = generateCardInnerHtml(item);

    projectsListEl.appendChild(cardEl);
  });
}

const renderTechnologies = (list: TechImage[]) => {
  const techListEl = document.querySelector<HTMLDivElement>("#techList");
  list.forEach((item) => {
    const el = document.createElement("img");
    el.src = item.src;
    el.alt = item.alt;
    techListEl.appendChild(el);
  })
}

const generateCardInnerHtml = (project: Project) => {
  return `
  <div class="col-12">
    <img src=${project.imgUrl} class="card-img-top" />
    <div class="card-body">
    <h5 class="card-title">${project.title}</h5>
    <p class="card-text">
    ${project.description}
    </p>
      ${project.applicationLink ? "<a href='" + project.applicationLink + "' target='_blank' class='btn btn-light'>Visite App</a>" : ""}
      <a href=${project.githubLink} target="_blank" class="btn btn-light">Github</a>
      </div>
      </div>
      `
}

const loadFromJson = (filePath: string, cb: any) => {
  fetch(filePath).then(res => res.json()).then(cb).catch(console.error);
}

loadFromJson("./res/projects.json", renderProjects);
loadFromJson("./res/technologies.json", renderTechnologies);