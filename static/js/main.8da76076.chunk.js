(this["webpackJsonpuser-management-interface"]=this["webpackJsonpuser-management-interface"]||[]).push([[0],{41:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),n=s(14),r=s.n(n),i=s(33),l=s(17),j=s(5),o=s(15),u=s(19);o.b.add(u.d,u.c,u.a,u.b);var b=s(13),d=s(7),O=(s(41),s(52)),m=s(51),h=s(1);function x(){var e=Object(c.useContext)(V),t=e.show,s=e.handleClose,a=e.addNewUser,n=Object(c.useState)(""),r=Object(j.a)(n,2),i=r[0],l=r[1],o=Object(c.useState)(""),u=Object(j.a)(o,2),b=u[0],d=u[1],x=Object(c.useState)(""),f=Object(j.a)(x,2),v=f[0],p=f[1],N=Object(c.useState)(""),g=Object(j.a)(N,2),C=g[0],S=g[1];return Object(h.jsx)("div",{children:Object(h.jsxs)(O.a,{show:t,onHide:s,children:[Object(h.jsx)(O.a.Header,{closeButton:!0}),Object(h.jsxs)(O.a.Body,{children:[Object(h.jsx)("h1",{children:"Invite New User"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"Admin"===C||"User"===C?(a({name:i,lastname:b,mail:v,role:C}),l(""),d(""),p(""),S(""),s()):alert("Please choose a user role")},children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("input",{type:"text",className:"name",placeholder:"* First Name",required:!0,value:i,onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("input",{type:"text",className:"last-name",placeholder:"* Last Name",required:!0,value:b,onChange:function(e){return d(e.target.value)}})]}),Object(h.jsx)("div",{className:"form-control",children:Object(h.jsx)("input",{type:"email",className:"email",placeholder:"* Email",required:!0,value:v,onChange:function(e){return p(e.target.value)}})}),Object(h.jsx)("div",{className:"form-control",children:Object(h.jsxs)("select",{className:"role",value:C,required:!0,onChange:function(e){return S(e.target.value)},children:[Object(h.jsx)("option",{value:"* Role",defaultValue:!0,hidden:!0,children:"* Role"}),Object(h.jsx)("option",{value:"Admin",children:"Admin"}),Object(h.jsx)("option",{value:"User",children:"User"})]})}),Object(h.jsx)("div",{className:"form-control",children:Object(h.jsx)(m.a,{type:"submit",className:"add-user--btn-submit",children:"Send Invitation"})})]})]})]})})}function f(e){var t=e.title,s=e.button,c=e.searchBox;return Object(h.jsx)("div",{className:"header--container",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"row header--heading",children:Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("h1",{children:t}),c]})}),s,Object(h.jsx)(x,{})]})})}function v(e){var t=e.user,s=Object(c.useContext)(V),a=s.toggleStatus,n=s.deleteUser;return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsxs)("div",{className:"user--name-block",children:[Object(h.jsx)("p",{children:t.name}),Object(h.jsx)("p",{className:"lastname",children:t.lastname})]}),Object(h.jsx)("span",{children:t.mail})]}),Object(h.jsx)("td",{children:t.role}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{className:"user--status ".concat(t.status?"true":"false"),onClick:function(){return a(t.id)},children:t.status})}),Object(h.jsxs)("td",{children:[Object(h.jsx)(b.b,{to:{pathname:"/user-setup/".concat(t.id),state:{users:t}},className:"user--btn-settings",children:Object(h.jsx)("svg",{width:"15.934",height:"17.15",fill:"#c6c6c6",version:"1.1",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M22.2,14.4L21,13.7c-1.3-0.8-1.3-2.7,0-3.5l1.2-0.7c1-0.6,1.3-1.8,0.7-2.7l-1-1.7c-0.6-1-1.8-1.3-2.7-0.7   L18,5.1c-1.3,0.8-3-0.2-3-1.7V2c0-1.1-0.9-2-2-2h-2C9.9,0,9,0.9,9,2v1.3c0,1.5-1.7,2.5-3,1.7L4.8,4.4c-1-0.6-2.2-0.2-2.7,0.7   l-1,1.7C0.6,7.8,0.9,9,1.8,9.6L3,10.3C4.3,11,4.3,13,3,13.7l-1.2,0.7c-1,0.6-1.3,1.8-0.7,2.7l1,1.7c0.6,1,1.8,1.3,2.7,0.7L6,18.9   c1.3-0.8,3,0.2,3,1.7V22c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-1.3c0-1.5,1.7-2.5,3-1.7l1.2,0.7c1,0.6,2.2,0.2,2.7-0.7l1-1.7   C23.4,16.2,23.1,15,22.2,14.4z M12,16c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C16,14.2,14.2,16,12,16z",id:"settings"})})}),Object(h.jsx)("button",{className:"btn user--btn-danger",onClick:function(){return n(t.id)},children:Object(h.jsxs)("svg",{width:"12.934",height:"17.15",viewBox:"0 0 12.934 17.15",children:[Object(h.jsx)("path",{fill:"#c6c6c6"}),Object(h.jsx)("path",{d:"M1.539,16.156a1.883,1.883,0,0,0,1.848,1.905h7.391a1.883,1.883,0,0,0,1.848-1.905V4.723H1.539ZM13.549,1.864H10.316L9.392.912H4.772l-.924.953H.615V3.77H13.549Z",transform:"translate(-0.615 -0.912)"})]})})]})]})}var p=s(16);function N(e){var t=e.headers,s=e.onSorting,a=Object(c.useState)(""),n=Object(j.a)(a,2),r=n[0],i=n[1],l=Object(c.useState)("asc"),o=Object(j.a)(l,2),u=o[0],b=o[1];return Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:t.map((function(e){var t=e.name,c=e.field,a=e.sortable;return Object(h.jsxs)("th",{onClick:function(){return a?function(e){var t=e===r&&"asc"===u?"desc":"asc";i(e),b(t),s(e,t)}(c):null},scope:"col",children:[t,r&&r===c&&Object(h.jsx)(p.a,{icon:"asc"===u?"sort-down":"sort-up"})]},t)}))})})}var g=s(20);function C(e){var t=e.total,s=e.itemsPerPage,a=e.currentPage,n=e.onPageChange,r=Object(c.useState)(0),i=Object(j.a)(r,2),l=i[0],o=i[1];Object(c.useEffect)((function(){t>0&&s>0&&o(Math.ceil(t/s))}),[t,s]);var u=Object(c.useMemo)((function(){for(var e=[],t=function(t){e.push(Object(h.jsx)(g.a.Item,{active:t===a,onClick:function(){return n(t)},children:t},t))},s=1;s<=l;s++)t(s);return e}),[l,a]);return 0===l?null:Object(h.jsxs)(g.a,{children:[Object(h.jsx)(g.a.Prev,{onClick:function(){return n(a-1)},disabled:1===a}),u,Object(h.jsx)(g.a.Next,{onClick:function(){return n(a+1)},disabled:a===l})]})}function S(){var e=Object(c.useContext)(V),t=e.searchValue,s=e.users,a=Object(c.useState)({field:"",order:""}),n=Object(j.a)(a,2),r=n[0],i=n[1],l=Object(c.useState)(0),o=Object(j.a)(l,2),u=o[0],b=o[1],d=Object(c.useState)(1),O=Object(j.a)(d,2),m=O[0],x=O[1],f=Object(c.useMemo)((function(){var e=s;if(t&&(e=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.mail.toLowerCase().includes(t.toLowerCase())||e.role.toLowerCase().includes(t.toLowerCase())}))),b(e.length),r.field){var c="asc"===r.order?1:-1;e=e.sort((function(e,t){return c*e[r.field].localeCompare(t[r.field])}))}return e.slice(2*(m-1),2*(m-1)+2)}),[s,m,t,r]);return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)(N,{headers:[{name:"User",field:"name",sortable:!0},{name:"Role",field:"role",sortable:!0},{name:"Status",field:"status",sortable:!1},{name:"Actions",field:"actions",sortable:!1}],onSorting:function(e,t){return i({field:e,order:t})}}),Object(h.jsx)("tbody",{children:f.map((function(e){return Object(h.jsx)(v,{user:e},e.id)}))})]})}),Object(h.jsxs)("div",{className:"col-12 table--pagination-container",children:[Object(h.jsxs)("span",{children:["Record on page: ",2]}),Object(h.jsx)(C,{total:u,itemsPerPage:2,currentPage:m,onPageChange:function(e){return x(e)}})]})]})})}var w=s(53),k=s.p+"static/media/user-picture.80539740.svg";function y(){var e=Object(d.f)().state,t=Object(c.useContext)(V).changeUser,s=Object(c.useState)(e.users.name),a=Object(j.a)(s,2),n=a[0],r=a[1],i=Object(c.useState)(e.users.lastname),l=Object(j.a)(i,2),o=l[0],u=l[1],b=Object(c.useState)(e.users.role),O=Object(j.a)(b,2),x=O[0],f=O[1],v=Object(c.useState)(e.users.mail),p=Object(j.a)(v,2),N=p[0],g=p[1],C=Object(c.useState)(e.users.status),S=Object(j.a)(C,2),w=S[0],y=S[1],P=Object(c.useState)(e.users.permission1),U=Object(j.a)(P,2),L=U[0],B=U[1],M=Object(c.useState)(e.users.permission2),q=Object(j.a)(M,2),A=q[0],E=q[1];Object(c.useEffect)((function(){e.users.status=w}),[w]),Object(c.useEffect)((function(){e.users.permission1=L}),[L]),Object(c.useEffect)((function(){e.users.permission2=A}),[A]);var H=e.users.id;return Object(h.jsx)("div",{className:"container user-setup",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-12 col-lg-4 user-setup--info",children:[Object(h.jsx)("img",{src:k,alt:""}),Object(h.jsxs)("div",{className:"user-setup--info-box",children:[Object(h.jsxs)("p",{children:[n," "]}),Object(h.jsxs)("p",{children:[o," "]}),Object(h.jsxs)("span",{children:[N," "]})]})]}),Object(h.jsxs)("div",{className:"col-12 col-lg-4 user-setup--form",children:[Object(h.jsx)("h2",{children:"Details"}),Object(h.jsxs)("div",{className:"form-control user-setup--status-box",children:[Object(h.jsx)("span",{children:"Status"}),Object(h.jsx)("button",{className:"user--status ".concat(w?"true":"false"),onClick:function(){return y(!w)},children:w})]}),Object(h.jsxs)("form",{onSubmit:function(s){s.preventDefault(),t({id:H,name:n,lastname:o,mail:N,role:x,status:w,permission1:L,permission2:A},e.users.id)},children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"* First Name"}),Object(h.jsx)("input",{type:"text",className:"name",required:!0,value:n,onChange:function(e){return r(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"* Last Name"}),Object(h.jsx)("input",{type:"text",className:"name",required:!0,value:o,onChange:function(e){return u(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"* Email"}),Object(h.jsx)("input",{type:"text",className:"email",required:!0,value:N,onChange:function(e){return g(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"* Role"}),Object(h.jsxs)("select",{className:"role",value:x,required:!0,onChange:function(e){return f(e.target.value)},children:[Object(h.jsx)("option",{value:"Admin",children:"Admin"}),Object(h.jsx)("option",{value:"User",children:"User"})]})]}),Object(h.jsx)("div",{className:"form-control",children:Object(h.jsx)(m.a,{type:"submit",className:"add-user--btn-submit",children:"Save Changes"})})]})]}),Object(h.jsxs)("div",{className:"col-12 col-lg-4 user-setup--permissions",children:[Object(h.jsx)("h2",{children:"Permissions"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"user-setup--permision-box",children:[Object(h.jsx)("span",{children:"Permission 1"}),Object(h.jsx)("button",{className:"user--status ".concat(L?"true":"false"),onClick:function(){return B(!L)},children:L})]}),Object(h.jsxs)("div",{className:"user-setup--permision-box",children:[Object(h.jsx)("span",{children:"Permission 2"}),Object(h.jsx)("button",{className:"user--status ".concat(A?"true":"false"),onClick:function(){return E(!A)},children:A})]})]})]})})}function P(){var e=Object(c.useContext)(V).handleShow;return Object(h.jsx)("button",{className:"btn btn-primary header--btn-add-user",onClick:e,children:"+"})}function U(){var e=Object(c.useContext)(V),t=e.searchValue,s=e.setSearchValue;return Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("input",{type:"search",placeholder:"Type to filter the table",value:t,onChange:function(e){s(e.target.value)}}),Object(h.jsx)(p.a,{icon:"search"})]})}function L(){return Object(h.jsx)(b.b,{to:"/",children:Object(h.jsx)("button",{className:"btn btn-primary header--btn-add-user",children:Object(h.jsx)(p.a,{icon:"home"})})})}var V=a.a.createContext();var B=[{id:1,name:"Danniel",lastname:"Blichman",mail:"danniel.blichman@testtask.com",role:"admin",status:!0,permission1:!1,permission2:!1},{id:2,name:"Margarette",lastname:" Jones",mail:"margarette.jones@testtask.com",role:"User",status:!1,permission1:!1,permission2:!1},{id:3,name:"Bethany",lastname:"Doe",mail:"bethany.doe@testtask.com",role:"admin",status:!1,permission1:!1,permission2:!1},{id:4,name:"Samuel",lastname:"Jackson",mail:"samuel.jackson@testtask.com",role:"user",status:!0,permission1:!1,permission2:!1}],M=function(){var e=Object(c.useState)(B),t=Object(j.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),r=Object(j.a)(n,2),o=r[0],u=r[1],O=Object(c.useState)(!1),m=Object(j.a)(O,2),x=m[0],v=m[1],p={toggleStatus:function(e){a(s.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{status:!t.status}):t})))},deleteUser:function(e){a(s.filter((function(t){return t.id!==e})))},searchValue:o,setSearchValue:u,users:s,show:x,handleClose:function(){return v(!1)},handleShow:function(){return v(!0)},addNewUser:function(e){var t=Object(w.a)(),c=Object(l.a)(Object(l.a)({id:t},e),{},{status:!1});a([].concat(Object(i.a)(s),[c]))},changeUser:function(e,t){a(s.map((function(s){return s.id===t?Object(l.a)({},e):s})))}};return Object(h.jsx)(b.a,{children:Object(h.jsx)(V.Provider,{value:p,children:Object(h.jsx)("div",{className:"main-content",children:Object(h.jsx)(b.a,{children:Object(h.jsxs)(d.c,{children:[Object(h.jsxs)(d.a,{exact:!0,path:"/",children:[Object(h.jsx)(f,{title:"Project Access",button:Object(h.jsx)(P,{}),searchBox:Object(h.jsx)(U,{})}),Object(h.jsx)(S,{})]}),Object(h.jsxs)(d.a,{path:"/user-setup/:id",children:[Object(h.jsx)(f,{title:"User Setup",button:Object(h.jsx)(L,{})}),Object(h.jsx)(y,{})]})]})})})})})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.8da76076.chunk.js.map