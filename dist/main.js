!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);let n={content:document.querySelector("#content"),container:document.createElement("div"),newTodoContainer:document.createElement("div"),sidebar:document.createElement("div"),sidebarHeader:document.createElement("div"),sidebarTitle:document.createElement("h3"),sidebarButton:document.createElement("button"),sidebarProjects:document.createElement("div"),sidebarProjectsAll:document.createElement("div"),todosContainer:document.createElement("div"),todosHeader:document.createElement("div"),todosTitle:document.createElement("h3"),todosButton:document.createElement("button"),todoList:document.createElement("div"),styleApp:function(){this.sidebar.id="sidebar",this.sidebarHeader.id="sidebarHeader",this.sidebarProjects.id="sidebarProjects",this.sidebarProjectsAll.setAttribute("class","project"),this.todosContainer.id="todosContainer",this.todosHeader.id="todosHeader",this.todosTitle.id="todosTitle",this.todosButton.id="todosButton",this.newTodoContainer.id="newTodoContainer",this.newTodoContainer.setAttribute("class","invisible")},drawApp:function(){this.sidebarTitle.innerText="Projects",this.sidebarButton.innerText="New",this.sidebarProjectsAll.innerText="All",this.todosTitle.innerText="To Do",this.todosButton.innerText="New",this.content.appendChild(this.container),this.container.appendChild(this.sidebar),this.sidebar.appendChild(this.sidebarHeader),this.sidebarHeader.appendChild(this.sidebarTitle),this.sidebarHeader.appendChild(this.sidebarButton),this.sidebar.appendChild(this.sidebarProjects),this.sidebarProjects.appendChild(this.sidebarProjectsAll),this.container.appendChild(this.todosContainer),this.todosContainer.appendChild(this.todosHeader),this.todosHeader.appendChild(this.todosTitle),this.todosHeader.appendChild(this.todosButton),this.todosContainer.appendChild(this.todoList),this.styleApp()},init:function(){this.drawApp()}},i={logger:function(){console.log("test")},renderToDos:function(e){let t=e,o=n.todoList;function i(){let e=document.createElement("div");e.setAttribute("class","todo");let t=document.createElement("div");return t.setAttribute("class","check"),e.append(t),e}o.innerHTML="",console.log("render",t);for(let e=0;e<t.length;e++){let n=i(),r=t[e].title;n.append(r),o.appendChild(n)}},container:n.newTodoContainer,title:document.createElement("a"),renderNewTodo:function(){let e=document.querySelector("#newTodoContainer"),t=document.createElement("div");this.title.id="title",this.title.innerText="click me",t.innerText="testing",e.appendChild(t),t.appendChild(this.title),this.title.addEventListener("click",(function(){this.title.backgroundColor="blue"}))}},r={todos:[],getTitle:function(){return document.querySelector("#title").innerText},getDescription:function(){return document.querySelector("#description").innerText},getDate:function(){return"tbd"},getPriority:function(){return"tbd"},getNotes:function(){return"tbd"},getChecklist:function(){return"might do later"},createTodo:function(){return{title:this.getTitle(),description:this.getDescription(),dueDate:this.getDate(),priority:this.getPriority(),notes:this.getNotes(),checklist:this.getChecklist()}},buildTodo:function(){return this.todos.push(this.createTodo())}},d=r.todos,s=function(){document.querySelector("#todosButton").addEventListener("click",(function(){r.buildTodo(),i.renderToDos(r.todos)})),console.log("test",d),console.log("length",d.length)},c=function(){document.querySelector("#submit").addEventListener("click",(function(){r.buildTodo(),i.renderToDos(r.todos)}))};n.init(),r.buildTodo(),r.buildTodo(),r.buildTodo(),i.logger(),i.renderToDos(r.todos),s(),c(),i.renderNewTodo()}]);