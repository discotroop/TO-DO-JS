import{DOM} from "./initial.js";
DOM.init();
// drawApp();
import {renderToDos} from "./render.js";

import{app} from "./app.js"


renderToDos(app.todos);
