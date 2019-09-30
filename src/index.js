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


// To Do
// set priority
// set date/time
    // use moment.js 
    /// https://www.sitepoint.com/managing-dates-times-using-moment-js/