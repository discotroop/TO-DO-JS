import{DOM} from "./initial.js";
import {render} from "./render.js";
import{app} from "./app.js"
import{handlers} from "./handlers.js";
DOM.init();

app.buildTodo();
app.buildTodo();
app.buildTodo();

render.logger();

render.renderToDos(app.todos);
handlers.newToDoButton();
handlers.submitTodo();

render.renderNewTodo();