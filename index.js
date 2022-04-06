"use strict";
const loadFromJson = (filePath, cb) => {
  fetch(filePath)
    .then((res) => res.json())
    .then(cb)
    .catch(console.error);
};

const renderProjects = (list) => {
  const projectsListEl = document.querySelector("#projects_list");
  list.forEach((item) => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    cardEl.innerHTML = generateCardInnerHtml(item);
    projectsListEl.appendChild(cardEl);
  });
};

const generateCardInnerHtml = (project) => {
  const generateTagHtml = (tag) => `<span class='tag'>${tag}</span>`;

  return `
            <div class="card">
            <div class "card-header">
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
            <div class"card-footer">
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
            `;
};

loadFromJson("./res/projects.json", renderProjects);
