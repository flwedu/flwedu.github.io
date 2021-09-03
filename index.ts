// Request projects to array
const dataLoader = new XMLHttpRequest();
dataLoader.overrideMimeType("application/json");
dataLoader.open("GET", "projects.json", true);
dataLoader.onreadystatechange = function () {
  if (dataLoader.readyState === 4 && dataLoader.status == 200) {
    let response = JSON.parse(dataLoader.responseText);
    render(response);
  }
}

dataLoader.send();

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
      <a href=${project.applicationLink} target="_blank" class="btn btn-light"
        >Visite App</a
      >
      <a href=${project.githubLink} target="_blank" class="btn btn-light"
        >Github</a
      >
    </div>
  `

    projectsList.appendChild(projectCard);
  });
}