import{DOM} from "./initial.js";
import {render} from "./render.js";
import{app} from "./app.js"
import{handlers} from "./handlers.js";
DOM.init();

import { formatDistance, subDays } from 'date-fns';

let testing = formatDistance(subDays(new Date(), 3), new Date());
console.log("test", testing);

render.renderToDos(app.todos);
handlers.newToDoButton();
handlers.submitTodo();

render.renderNewTodo();

