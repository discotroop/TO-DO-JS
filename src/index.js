import{drawApp} from "./initial.js";
drawApp();
import {buildToDo} from "./app.js";
import {getToDos} from "./app.js";
import {renderToDos} from "./render.js";

let todos = ["1", "2", "3"];

renderToDos(getToDos());

getToDos();