// Request projects to array
fetch("projects.json").then(function (res) { return res.json(); }).then(function (res) { return render(res); })["catch"](function (error) { return alert('Error loading projects list'); });
// Rendering projects list
var render = function (list) {
    var projectsList = document.querySelector(".projectsList");
    list.forEach(function (project) {
        var projectCard = document.createElement("div");
        projectCard.classList.add("card");
        projectCard.innerHTML = "\n    <img src=" + project.imgUrl + " class=\"card-img-top\" />\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">" + project.title + "</h5>\n      <p class=\"card-text\">\n        " + project.description + "\n      </p>\n      " + (project.applicationLink ? "<a href=${project.applicationLink} target='_blank' class='btn btn-light'>Visite App</a>" : "") + "\n      <a href=" + project.githubLink + " target=\"_blank\" class=\"btn btn-light\">Github</a>\n    </div>\n  ";
        projectsList.appendChild(projectCard);
    });
};
