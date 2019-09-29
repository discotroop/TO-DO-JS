import { app } from "./app";
import { render } from "./render.js";
let todos = app.todos;

let handlers = {
    consolelogger: function () {
        console.log(todos);
    },
    newToDoButton: function () {
        //console.log(todos);
        let button = document.querySelector("#todosButton");
        button.addEventListener("click", function() {
            app.buildTodo();
            render.renderToDos(app.todos);
        });
    },

    submitTodo: function () {
        let submit = document.querySelector("#submit");
        submit.addEventListener("click", function() {
            app.buildTodo();
            render.renderToDos(app.todos);
            handlers.expandTodo();
        })
    },
    /* to do expansion */
    expandTodo: function () {
        let todos = document.querySelectorAll(".todo");
        todos.forEach(function(todo) {
            todo.addEventListener("click", function (e) {
                console.log(e.target.data);
                render.renderTodoDetails(e.target.data);
            })
        })
    }
}

export {handlers};