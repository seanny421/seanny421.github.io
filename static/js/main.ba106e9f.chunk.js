(this.webpackJsonptimetablereact=this.webpackJsonptimetablereact||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(7),o=a.n(s),d=(a(13),a(2)),r=(a(14),a(8)),i=a(0),l=a(16);var u=function(e){var t=e.setInputText,a=e.inputText,c=e.setTodos,n=e.todos,s=e.today,o=e.setDay,d=e.day;return Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{value:a,onChange:function(e){t(e.target.value)},type:"text",className:"todo-input"}),Object(i.jsx)("button",{onClick:function(e){e.preventDefault(),c([].concat(Object(r.a)(n),[{text:a,id:l("todo-id-"),completed:!1,day:d}])),t("")},className:"todo-button",type:"submit",children:Object(i.jsx)("i",{className:"fas fa-plus-square"})}),Object(i.jsx)("div",{className:"select",children:Object(i.jsxs)("select",{onChange:function(e){o(e.target.value)},name:"todos",className:"filter-todo",children:[Object(i.jsx)("option",{value:s,children:"Today"}),Object(i.jsx)("option",{value:"Monday",children:"Monday"}),Object(i.jsx)("option",{value:"Tuesday",children:"Tuesday"}),Object(i.jsx)("option",{value:"Wednesday",children:"Wednesday"}),Object(i.jsx)("option",{value:"Thursday",children:"Thursday"}),Object(i.jsx)("option",{value:"Friday",children:"Friday"}),Object(i.jsx)("option",{value:"Saturday",children:"Saturday"}),Object(i.jsx)("option",{value:"Sunday",children:"Sunday"})]})})]})};var j=function(e){var t=e.menu,a=e.setMenu;return Object(i.jsxs)("div",{className:"menu-container",children:[Object(i.jsxs)("div",{onClick:function(){a(!t)},className:"hamburger-container ".concat(t?"change":""),children:[Object(i.jsx)("div",{className:"bar1"}),Object(i.jsx)("div",{className:"bar2"}),Object(i.jsx)("div",{className:"bar3"})]}),Object(i.jsxs)("div",{id:"flyoutMenu",className:"".concat(t?"show":""),children:[Object(i.jsx)("h2",{children:Object(i.jsx)("a",{href:"./index.html",className:"home",children:"Home"})}),Object(i.jsx)("h2",{children:Object(i.jsx)("a",{href:"#",children:"Reminder"})}),Object(i.jsx)("h2",{children:Object(i.jsx)("a",{href:"#",children:"Look At"})}),Object(i.jsx)("h2",{children:Object(i.jsx)("a",{href:"./pom.html",children:"Pomodoro"})})]})]})},b=a(6);var f=function(e){var t=e.todos,a=e.setTodos,n=e.todoText,s=e.todo,o=(e.today,Object(c.useState)(!1)),r=Object(d.a)(o,2),l=r[0],u=r[1];return Object(i.jsxs)("div",{className:"todo ".concat(l?"fall":""," ").concat(s.completed?"completed":""),children:[Object(i.jsx)("li",{className:"todo-item",children:n}),Object(i.jsx)("button",{onClick:function(){a(t.map((function(e){return e.id===s.id?Object(b.a)(Object(b.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn",children:Object(i.jsx)("i",{className:"fas fa-check"})}),Object(i.jsx)("button",{onClick:function(e){u(!0),setTimeout((function(){a(t.filter((function(e){return e.id!==s.id})))}),500)},className:"trash-btn",children:Object(i.jsx)("i",{className:"fas fa-trash"})})]})};var O=function(e){var t=e.todos,a=e.setTodos,c=e.today,n=e.filteredTodos;return Object(i.jsx)("div",{className:"todo-container",children:Object(i.jsx)("ul",{className:"todo-list",children:n.map((function(e){return Object(i.jsx)(f,{todoText:e.text,todos:t,setTodos:a,todo:e,today:c},e.id)}))})})};var h=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),o=Object(d.a)(s,2),r=o[0],l=o[1],b=Object(c.useState)([]),f=Object(d.a)(b,2),h=f[0],y=f[1],x=Object(c.useState)(""),m=Object(d.a)(x,2),p=m[0],v=m[1],T=Object(c.useState)(""),N=Object(d.a)(T,2),S=N[0],g=N[1],k=Object(c.useState)([]),C=Object(d.a)(k,2),M=C[0],F=C[1];function I(){(new Date).getDay();return"Monday"}return Object(c.useEffect)((function(){v(I),g(I),function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));y(e)}}()}),[]),Object(c.useEffect)((function(){!function(){switch(S){case"Monday":F(h.filter((function(e){return"Monday"===e.day})));break;case"Tuesday":F(h.filter((function(e){return"Tuesday"===e.day})));break;case"Wednesday":F(h.filter((function(e){return"Wednesday"===e.day})));break;case"Thursday":F(h.filter((function(e){return"Thursday"===e.day})));break;case"Friday":F(h.filter((function(e){return"Friday"===e.day})));break;case"Saturday":F(h.filter((function(e){return"Saturday"===e.day})));break;case"Sunday":F(h.filter((function(e){return"Sunday"===e.day})));break;case"Today":default:F(h.filter((function(e){return e.day===p})))}}(),localStorage.setItem("todos",JSON.stringify(h))}),[h,S]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{menu:a,setMenu:n}),Object(i.jsx)("header",{children:Object(i.jsx)("h1",{className:"day-of-the-week",children:S})}),Object(i.jsx)(u,{setTodos:y,todos:h,setInputText:l,inputText:r,today:p,setDay:g,day:S}),Object(i.jsx)(O,{todos:h,setTodos:y,today:p,filteredTodos:M})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),s(e),o(e)}))};o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),y()}},[[18,1,2]]]);
//# sourceMappingURL=main.ba106e9f.chunk.js.map