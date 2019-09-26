import{drawApp} from "./initial.js";
drawApp();
import {renderToDos} from "./render.js";

import{app} from "./app.js"

let todos = app.todos;
renderToDos(todos);
app.todos.push("test");
renderToDos(todos);