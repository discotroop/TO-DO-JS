let DOM = {
    /* grab screen */
    content: document.querySelector("#content"),
    container: document.createElement("div"),

    /* build sidebar */
    sidebar: document.createElement("div"),
    sidebarHeader: document.createElement("div"),
    sidebarTitle: document.createElement("h3"),
    sidebarButton: document.createElement("button"),
    sidebarProjects: document.createElement("div"),
    sidebarProjectsAll: document.createElement("div"),

    /* build todosContainer */
    todosContainer: document.createElement("div"),
    todosHeader: document.createElement("div"),
    todosTitle: document.createElement("h3"),
    todosButton: document.createElement("button"),
    todoList: document.createElement("div"),
 
    styleApp: function () {
        this.sidebar.id = "sidebar";
        this.sidebarHeader.id = "sidebarHeader";
        this.sidebarProjects.id = "sidebarProjects";
        this.todosContainer.id = "todosContainer";
        this.todosHeader.i
    },

    drawApp: function () {
        this.todosContainer.innerText = "testing";

        this.sidebarTitle.innerText = "Projects";
        this.sidebarButton.innerText = "New";

        this.content.appendChild(this.container);
        this.container.appendChild(this.sidebar);

        this.sidebar.appendChild(this.sidebarHeader);
        this.sidebarHeader.appendChild(this.sidebarTitle);
        this.sidebarHeader.appendChild(this.sidebarButton);
        this.sidebar.appendChild(this.sidebarProjects);
        this.sidebarProjects.appendChild(this.sidebarProjectsAll);

        /* draw todosContainer */
        this.container.appendChild(this.todosContainer);
        this.todosContainer.appendChild(this.todosHeader);
        this.todosHeader.appendChild(this.todosTitle);
        this.todosHeader.appendChild(this.todosButton);
        this.todosContainer.appendChild(this.todoList);

        this.styleApp();
    },

    init: function () {
        // this.styleApp();
        this.drawApp();
    }
}

export {DOM};


// this.todosHeader.setAttribute("style", "display: grid;" +
// "grid-template-columns: 11;" +
// "grid-template-rows: 1;"
// );
// this.todosTitle.setAttribute("style", "grid-column-start: 5;" +
// "grid-column-end: 5;"
// );
// this.todosButton.setAttribute("style", "grid-column-start: 9;" +
// "grid-column-end: 11;"
// );
// this.todosButton.setAttribute("class", "button");