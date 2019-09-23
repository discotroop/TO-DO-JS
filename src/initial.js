export function drawApp() {
    let content = document.querySelector("#content");
    let sidebar = document.createElement("div");
    let header = document.createElement("div");
    let projects = document.createElement("div");
    let todosContainer = document.createElement("div");
    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(todosContainer);
    sidebar.appendChild(projects);
}