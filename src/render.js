import {DOM} from "./initial.js";
import {app} from "./app.js";

let render = {
    /* helper functions */
    logger: function () {
        console.log("test");
    },

    appender: function (parent, ...args) {
        for (let i = 1; i < arguments.length; i++) {
            parent.appendChild(arguments[i]);
        }
        // return parent;
    },

    /* maybe write a div creator function as well */


    createCheckElement: function () {
        let check = document.createElement("div");
        check.setAttribute("class", "check");
        return check;
    },

    createTodoElement: function () {
        let todo = document.createElement("div");
        todo.setAttribute("class", "todo");
        todo.append(this.createCheckElement());
        return todo;
    },
    renderToDos: function (currentTodos) {
        let todos = currentTodos;
        let todoList = DOM.todoList;
        todoList.innerHTML = "";
        console.log(app.todos[4]);

        for (let i = 0; i < todos.length; i++) {
            let todo = this.createTodoElement();
            let todoText = todos[i].title;
            todo.data = i; /* links index to DOM */
            todo.append(todoText);
            todoList.appendChild(todo)
        }
    },

    createPriority: function () {

    },

    createTodoDetails: function (index) {
        let todo = app.todos[index];
        let detailsContainer = document.createElement("div");
        let check = this.createCheckElement();
        let description = document.createElement("div");
        let date = document.createElement('div');
        let title = document.createElement('div');
        let priority = document.createElement("div");
        description.innerText = todo.description;
        date.innerText = todo.date;
        title.innerText = todo.title;
        priority.innerText = todo.priority;

        detailsContainer.setAttribute("class", "details");

        this.appender(detailsContainer, check, title, description,priority);
        return detailsContainer;
    },

    renderTodoDetails: function (index) {
        let todos = document.querySelectorAll(".todo");
        let clickedTodo = todos[index];
        clickedTodo.innerHTML = "";
        clickedTodo.classList.remove("todo");
        clickedTodo.appendChild(this.createTodoDetails(index));
        clickedTodo.setAttribute("class", "expand");
    }
    
}

export {render};