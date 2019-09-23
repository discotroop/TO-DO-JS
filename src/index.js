import {test} from "./app.js";
import {getToDos} from "./app.js";
import {renderToDos} from "./render.js";
test();
test();
test();
// getToDos();
console.log(getToDos());
console.log(renderToDos(getToDos()));