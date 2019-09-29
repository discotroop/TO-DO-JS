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
            console.log(app.todos)
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
    },

    deleteTodo: function ()  {
        let button = document.querySelector("#delete");
        let index = document.querySelector("#num");
        button.addEventListener("click", function () {
            console.log("delete");
            console.log(index.valueAsNumber);
            app.deleteTodo(index.valueAsNumber);
            render.renderToDos(app.todos);
        })
    }
}

export {handlers};