import{DOM} from "./initial.js";
import {render} from "./render.js";
import{app} from "./app.js"
import{handlers} from "./handlers.js";
DOM.init();

render.renderToDos(app.todos);
handlers.newToDoButton();
handlers.submitTodo();
handlers.deleteTodo();

// handlers.expandTodo();

// app.deleteTodo(1);