!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);let n=["todo one","todo two","todo three"];!function(){let e=document.querySelector("#content"),t=document.createElement("div");e.appendChild(t);let r=document.createElement("div");t.appendChild(r);let n=document.createElement("div");r.appendChild(n);let o=document.createElement("h3");o.innerText="Projects",n.appendChild(o);let l=document.createElement("button");l.innerText="New",n.appendChild(l);let d=document.createElement("div");r.appendChild(d);let i=document.createElement("div");i.innerText="All",d.appendChild(i);let c=document.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=".button {background-color: whitesmoke;border-radius: 25px;border-style: solid;}button:hover {background-color:lightsteelblue}",e.appendChild(c);let u=document.createElement("style");u.setAttribute("type","text/css"),u.innerHTML=".project {padding: 3%;}.project:hover {background-color: #DEB0C4;border-radius: 25px; text-align: center;width: 75%;}",e.appendChild(u),e.setAttribute("style","font-family: arial"),t.setAttribute("style","display: grid;grid-template-columns: repeat(20, 1fr);grid-template-rows: repeat(10, 1fr);height: 100vh;"),r.setAttribute("style","padding: 20px;grid-column-start: 1;grid-column-end: 5;grid-row-start: 1;grid-row-end: 10;"),n.setAttribute("style","display: grid;grid-template-columns: 5;grid-template-rows: 1;)"),o.setAttribute("style","grid-column-start: 1;grid-column-end: 2"),l.setAttribute("style","grid-column-start: 4;"+`${c}`),l.setAttribute("class","button"),d.setAttribute("style","padding: 20px;"),i.setAttribute("class","project");let s=document.createElement("div");s.id="todoList",t.appendChild(s);let a=document.createElement("div");s.appendChild(a);let p=document.createElement("h3");p.innerText="To Do",a.appendChild(p);let m=document.createElement("button");m.innerText="New",a.appendChild(m),s.setAttribute("style","padding: 20px;grid-column-start: 5;grid-column-end: 15;grid-row-start: 1;grid-row-end: 10;border-left-style: solid;border-left-color: black;border-left-width: 3px;"),a.setAttribute("style","display: grid;grid-template-columns: 11;grid-template-rows: 1;"),p.setAttribute("style","grid-column-start: 5;grid-column-end: 5;"),m.setAttribute("style","grid-column-start: 9;grid-column-end: 11;"),m.setAttribute("class","button")}(),console.log(Date.now()),console.log(n),n.push({title:void console.log("title test"),description:void console.log("description"),dueDate:void console.log("date/time"),priority:void console.log("high priority"),notes:void console.log("notes"),checklist:void console.log("checklist?")}),function(){let e=["1","2","3"],t=document.querySelector("#todoList");function r(){let e=document.createElement("div");e.setAttribute("class","todo");let t=document.createElement("div");return t.setAttribute("class","check"),e.append(t),e}for(let n=0;n<e.length;n++){let o=r(),l=e[n];o.append(l),t.appendChild(o)}}()}]);