export function renderToDos(todos) {
    let content = document.querySelector("#content"); 
    todos.forEach(function(todo) {
        let para = document.createElement("p");
        para.innerText = todo.title;
        content.appendChild(para);
    })

}