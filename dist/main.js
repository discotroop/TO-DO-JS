!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);let n={content:document.querySelector("#content"),container:document.createElement("div"),newTodoContainer:document.createElement("div"),sidebar:document.createElement("div"),sidebarHeader:document.createElement("div"),sidebarTitle:document.createElement("h3"),sidebarButton:document.createElement("button"),sidebarProjects:document.createElement("div"),sidebarProjectsAll:document.createElement("div"),todosContainer:document.createElement("div"),todosHeader:document.createElement("div"),todosTitle:document.createElement("h3"),todosButton:document.createElement("button"),todoList:document.createElement("div"),styleApp:function(){this.sidebar.id="sidebar",this.sidebarHeader.id="sidebarHeader",this.sidebarProjects.id="sidebarProjects",this.sidebarProjectsAll.setAttribute("class","project"),this.todosContainer.id="todosContainer",this.todosHeader.id="todosHeader",this.todosTitle.id="todosTitle",this.todosButton.id="todosButton",this.newTodoContainer.id="newTodoContainer",this.newTodoContainer.setAttribute("class","invisible")},drawApp:function(){this.sidebarTitle.innerText="Projects",this.sidebarButton.innerText="New",this.sidebarProjectsAll.innerText="All",this.todosTitle.innerText="To Do",this.todosButton.innerText="New",this.content.appendChild(this.container),this.container.appendChild(this.sidebar),this.sidebar.appendChild(this.sidebarHeader),this.sidebarHeader.appendChild(this.sidebarTitle),this.sidebarHeader.appendChild(this.sidebarButton),this.sidebar.appendChild(this.sidebarProjects),this.sidebarProjects.appendChild(this.sidebarProjectsAll),this.container.appendChild(this.todosContainer),this.todosContainer.appendChild(this.todosHeader),this.todosHeader.appendChild(this.todosTitle),this.todosHeader.appendChild(this.todosButton),this.todosContainer.appendChild(this.todoList),this.styleApp()},init:function(){this.drawApp()}},i={todos:["sample"],getTitle:function(){return document.querySelector("#title").innerText},getDescription:function(){return document.querySelector("#description").innerText},getDate:function(){return"tbd"},getPriority:function(){return"tbd"},getNotes:function(){return"tbd"},getChecklist:function(){return"might do later"},createTodo:function(){return{title:this.getTitle(),description:this.getDescription(),dueDate:this.getDate(),priority:this.getPriority(),notes:this.getNotes(),checklist:this.getChecklist()}},buildTodo:function(){return this.todos.push(this.createTodo())}},r={logger:function(){console.log("test")},appender:function(e,...t){for(let t=1;t<arguments.length;t++)console.log(arguments[t]),e.appendChild(arguments[t])},createCheckElement:function(){let e=document.createElement("div");return e.setAttribute("class","check"),e},createTodoElement:function(){let e=document.createElement("div");return e.setAttribute("class","todo"),e.append(this.createCheckElement()),e},renderToDos:function(e){let t=e,o=n.todoList;o.innerHTML="";for(let e=0;e<t.length;e++){let n=this.createTodoElement(),i=t[e].title;n.data=e,n.append(i),o.appendChild(n)}},createTodoDetails:function(e){let t=i.todos[e],o=document.createElement("div"),n=this.createCheckElement(),r=document.createElement("div"),d=document.createElement("div"),s=document.createElement("div");return r.innerText=t.description,d.innerText=t.date,s.innerText=t.title,o.setAttribute("class","details"),this.appender(o,n,s,r),o},renderTodoDetails:function(e){let t=document.querySelectorAll(".todo")[e];t.innerHTML="",t.classList.remove("todo"),t.appendChild(this.createTodoDetails(e)),t.setAttribute("class","expand")}},d=i.todos,s={consolelogger:function(){console.log(d)},newToDoButton:function(){document.querySelector("#todosButton").addEventListener("click",(function(){i.buildTodo(),r.renderToDos(i.todos)}))},submitTodo:function(){document.querySelector("#submit").addEventListener("click",(function(){i.buildTodo(),r.renderToDos(i.todos),s.expandTodo()}))},expandTodo:function(){document.querySelectorAll(".todo").forEach((function(e){e.addEventListener("click",(function(e){console.log(e.target.data),r.renderTodoDetails(e.target.data)}))}))}};n.init(),r.renderToDos(i.todos),s.newToDoButton(),s.submitTodo(),s.expandTodo()}]);