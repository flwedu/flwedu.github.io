// Request projects to array
fetch("projects.json").then(res => res.json()).then(res => render(res)).catch(error => alert('Error loading projects list'));

interface Project {
  title: string,
  description: string,
  imgUrl: string,
  applicationLink: string,
  githubLink: string
}

// Rendering projects list
var render = (list: any) => {
  let projectsList = document.querySelector(".projectsList");
  list.forEach(project => {
    let projectCard = document.createElement("div");
    projectCard.classList.add("card");

    projectCard.innerHTML = `
    <img src=${project.imgUrl} class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">${project.title}</h5>
      <p class="card-text">
        ${project.description}
      </p>
      ${project.applicationLink ? "<a href=" + project.applicationLink + "target='_blank' class='btn btn-light'>Visite App</a>" : ""}
      <a href=${project.githubLink} target="_blank" class="btn btn-light">Github</a>
    </div>
  `

    projectsList.appendChild(projectCard);
  });
}