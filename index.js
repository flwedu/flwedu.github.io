// Request projects to array
var dataLoader = new XMLHttpRequest();
dataLoader.overrideMimeType("application/json");
dataLoader.open("GET", "projects.json", true);
dataLoader.onreadystatechange = function () {
    if (dataLoader.readyState === 4 && dataLoader.status == 200) {
        var response = JSON.parse(dataLoader.responseText);
        render(response);
    }
};
dataLoader.send();
// Rendering projects list
var render = function (list) {
    var projectsList = document.querySelector(".projectsList");
    list.forEach(function (project) {
        var projectCard = document.createElement("div");
        projectCard.classList.add("card");
        projectCard.innerHTML = "\n    <img src=" + project.imgUrl + " class=\"card-img-top\" />\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">" + project.title + "</h5>\n      <p class=\"card-text\">\n        " + project.description + "\n      </p>\n      <a href=" + project.applicationLink + " target=\"_blank\" class=\"btn btn-light\"\n        >Visite App</a\n      >\n      <a href=" + project.githubLink + " target=\"_blank\" class=\"btn btn-light\"\n        >Github</a\n      >\n    </div>\n  ";
        projectsList.appendChild(projectCard);
    });
};
