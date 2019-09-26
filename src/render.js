
export function renderToDos(currentTodos) {
    // let todos = ["1", "2", "3"];
    let todos = currentTodos;
    let todoList = document.querySelector("#todoList");

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
        let todoText = todos[i];
        todo.append(todoText);
        todoList.appendChild(todo)
    }
}
