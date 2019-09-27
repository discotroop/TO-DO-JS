import {DOM} from "./initial.js";

let render = {
    logger: function () {
        console.log("test");
    },
    renderToDos: function (currentTodos) {
        let todos = currentTodos;
        let todoList = DOM.todoList;
        todoList.innerHTML = "";
        console.log("render", todos);
    
        function createTodoElement () {
            let todo = document.createElement("div");
            todo.setAttribute("class", "todo");
            let check = document.createElement("div");
            check.setAttribute("class", "check");
            todo.append(check);
            return todo;
        }
    
        for (let i = 0; i < todos.length; i++) {
            let todo = createTodoElement();
            let todoText = todos[i].title;
            todo.append(todoText);
            todoList.appendChild(todo)
        }
    },
    container: DOM.newTodoContainer,
    title: document.createElement("a"),
    
    // renderNewTodo: function () {
    //     let container = document.querySelector("#newTodoContainer");
    //     let tester = document.createElement("div");
    //     this.title.id = "title";
    //     this.title.innerText = "click me";
    //     container.appendChild(tester);
    //     tester.appendChild(this.title);
    //     this.title.addEventListener("click", function () {
    //         this.title.backgroundColor = "blue";
    //     })

    //}
}

export {render};