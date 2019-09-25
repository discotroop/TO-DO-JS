import{drawApp} from "./initial.js";
drawApp();
import {test} from "./app.js";
import {getToDos} from "./app.js";
import {renderToDos} from "./render.js";
test();
renderToDos(getToDos);