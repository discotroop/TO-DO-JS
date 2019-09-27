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
    console.log("test", todos);
    console.log("length", todos.length);
    },

    submitTodo: function () {
        let submit = document.querySelector("#submit");
        submit.addEventListener("click", function() {
            app.buildTodo();
            render.renderToDos(app.todos);
        })
    }
}

export {handlers};