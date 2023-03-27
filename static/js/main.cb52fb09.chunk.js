(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(10),s=c.n(n),a=c(2),i=c(1),o=(c(15),c(16),c(17),c(4)),l=c.n(o),r=c(0),d=function(e){var t=e.posts,c=e.setSelectPost,n=e.selectPost;return Object(r.jsx)(r.Fragment,{children:t.length?Object(r.jsxs)("div",{"data-cy":"PostsList",children:[Object(r.jsx)("p",{className:"title",children:"Posts:"}),Object(r.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{className:"has-background-link-light",children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.title;return Object(r.jsxs)("tr",{"data-cy":"Post",children:[Object(r.jsx)("td",{"data-cy":"PostId",children:t}),Object(r.jsx)("td",{"data-cy":"PostTitle",children:s}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{type:"button","data-cy":"PostButton",className:l()("button","is-link",{"is-light":(null===n||void 0===n?void 0:n.id)!==t}),onClick:function(){return function(e){c(n===e?null:e)}(e)},children:(null===n||void 0===n?void 0:n.id)===t?"Close":"Open"})})]},t)}))})]})]}):Object(r.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"})})},j=c(9),m=(c(19),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(r.jsx)("div",{className:"Loader__content"})})}),b=c(5),u=c(3),h=function(e){var t=e.handleAddComment,c=e.postId,n=e.isLoading,s=Object(i.useState)({name:"",email:"",body:""}),o=Object(a.a)(s,2),d=o[0],j=o[1],m=Object(i.useState)({name:"",email:"",body:""}),h=Object(a.a)(m,2),O=h[0],f=h[1],x=function(e){var t=e.target,c=t.name,n=t.value;j((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(b.a)({},c,n))}))};return Object(r.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault();var n={name:"",email:"",body:""};if(d.name||(n.name="Name is required"),d.email||(n.email="Email is required"),d.body||(n.body="Enter some text"),f(n),Object.values(n).every((function(e){return""===e}))){var s=Object(u.a)(Object(u.a)({},d),{},{postId:c});t(s),j((function(e){return Object(u.a)(Object(u.a)({},e),{},{body:""})}))}},children:[Object(r.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(r.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(r.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(r.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:"input ".concat(O.name?"is-danger":""),value:d.name,onChange:x}),Object(r.jsx)("span",{className:"icon is-small is-left",children:Object(r.jsx)("i",{className:"fas fa-user"})}),O.name&&Object(r.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(r.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),O.name&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:O.name})]}),Object(r.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(r.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(r.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(r.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:"input ".concat(O.email?"is-danger":""),value:d.email,onChange:x}),Object(r.jsx)("span",{className:"icon is-small is-left",children:Object(r.jsx)("i",{className:"fas fa-envelope"})}),O.email&&Object(r.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(r.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),O.email&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:O.email})]}),Object(r.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(r.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:"input ".concat(O.body?"is-danger":""),value:d.body,onChange:x})}),O.body&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:O.body})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit",className:l()("button is-link",{"is-loading":n}),children:"Add"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){Object.keys(d).forEach((function(e){j((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(b.a)({},e,""))})),f((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(b.a)({},e,""))}))}))},children:"Clear"})})]})]})},O="https://mate.academy/students-api";function f(e){return new Promise((function(t){setTimeout(t,e)}))}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:t};return c&&(n.body=JSON.stringify(c),n.headers={"Content-Type":"application/json; charset=UTF-8"}),f(300).then((function(){return fetch(O+e,n)})).then((function(e){return e.json()}))}var N,y=function(e){return x(e)},p=function(e,t){return x(e,"POST",t)},v=function(e){return x(e,"DELETE")};!function(e){e.ADD="Something went wrong on comment add!",e.POSTS="Something went wrong on posts load!",e.USERS="Something went wrong on users load!",e.DELETE="Something went wrong on comment delete!",e.COMMENTS="Something went wrong on comments load!"}(N||(N={}));var g=function(e){var t=e.selectPost,c=Object(i.useState)([]),n=Object(a.a)(c,2),s=n[0],o=n[1],l=Object(i.useState)(!1),d=Object(a.a)(l,2),b=d[0],u=d[1],O=Object(i.useState)(null),f=Object(a.a)(O,2),x=f[0],g=f[1],S=Object(i.useState)(!1),E=Object(a.a)(S,2),P=E[0],w=E[1],C=t.id,T=t.title,k=t.body;Object(i.useEffect)((function(){u(!0),w(!1),function(e){return y("/comments?postId=".concat(e))}(C).then((function(e){o(e)})).catch((function(){g(N.COMMENTS)})).finally((function(){u(!1)}))}),[t]);var L=function(e){o(s.filter((function(t){return t.id!==e}))),function(e){return v("/comments/".concat(e))}(e).catch((function(){o(Object(j.a)(s)),g(N.DELETE)}))};return Object(r.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(r.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(r.jsxs)("div",{className:"block",children:[Object(r.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(C,": ").concat(T)}),Object(r.jsx)("p",{"data-cy":"PostBody",children:k})]}),Object(r.jsxs)("div",{className:"block",children:[b?Object(r.jsx)(m,{}):Object(r.jsx)(r.Fragment,{children:s.length||x?Object(r.jsx)("p",{className:"title is-4",children:"Comments:"}):Object(r.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"})}),x===N.COMMENTS&&Object(r.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),s.map((function(e){var t=e.email,c=e.name;return Object(r.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(r.jsxs)("div",{className:"message-header",children:[Object(r.jsx)("a",{href:"mailto:".concat(t),"data-cy":"CommentAuthor",children:c}),Object(r.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return L(e.id)},children:"delete button"})]}),Object(r.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)})),!P&&!b&&!x&&Object(r.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){w(!0)},children:"Write a comment"})]}),x===N.DELETE&&Object(r.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:x}),P&&Object(r.jsx)(h,{handleAddComment:function(e){var t;u(!0),(t=e,p("/comments",t)).then((function(e){o((function(t){return[].concat(Object(j.a)(t),[e])}))})).catch((function(){g(N.ADD)})).finally((function(){u(!1)}))},postId:t.id,isLoading:b})]})})},S=function(e){var t=e.users,c=e.getPostsById,n=e.setSelectPost,s=Object(i.useState)(!1),o=Object(a.a)(s,2),d=o[0],j=o[1],m=Object(i.useState)(null),b=Object(a.a)(m,2),u=b[0],h=b[1],O=Object(i.useRef)(null);return Object(r.jsxs)("div",{"data-cy":"UserSelector",className:l()("dropdown",{"is-active":d}),onBlur:function(){O.current&&O.current.classList.contains("is-active")&&O.current.classList.remove("is-active")},ref:O,children:[Object(r.jsx)("div",{className:"dropdown-trigger",children:Object(r.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){j(!d)},children:[Object(r.jsx)("span",{children:(null===u||void 0===u?void 0:u.name)||"Choose a user"}),Object(r.jsx)("span",{className:"icon is-small",children:Object(r.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(r.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(r.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(r.jsx)("a",{href:"#user-".concat(e.id),className:l()("dropdown-item",{"is-active":e.name===(null===u||void 0===u?void 0:u.name)}),onMouseDown:function(){return function(e){h(e),j(!1),c(e.id),n(null)}(e)},children:e.name},e.id)}))})})]})},E=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)([]),o=Object(a.a)(s,2),j=o[0],b=o[1],u=Object(i.useState)(!1),h=Object(a.a)(u,2),O=h[0],f=h[1],x=Object(i.useState)(null),p=Object(a.a)(x,2),v=p[0],E=p[1],P=Object(i.useState)(!1),w=Object(a.a)(P,2),C=w[0],T=w[1],k=Object(i.useState)(null),L=Object(a.a)(k,2),D=L[0],M=L[1];Object(i.useEffect)((function(){y("/users").then((function(e){n(e)})).catch((function(){E(N.USERS)}))}),[]);return Object(r.jsx)("main",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"tile is-ancestor",children:[Object(r.jsx)("div",{className:"tile is-parent",children:Object(r.jsxs)("div",{className:"tile is-child box is-success",children:[Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(S,{users:c,getPostsById:function(e){f(!0),function(e){return y("/posts?userId=".concat(e))}(e).then((function(e){b(e),T(!0)})).catch((function(){E(N.POSTS)})).finally((function(){return f(!1)}))},setSelectPost:M})}),Object(r.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!C&&Object(r.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),v===N.USERS&&Object(r.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:N.USERS.toString()}),v===N.POSTS&&Object(r.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:N.POSTS.toString()}),O?Object(r.jsx)(m,{}):C&&Object(r.jsx)(d,{posts:j,setSelectPost:M,selectPost:D})]})]})}),Object(r.jsx)("div",{"data-cy":"Sidebar",className:l()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":D}),children:Object(r.jsx)("div",{className:"tile is-child box is-success ",children:D&&Object(r.jsx)(g,{selectPost:D})})})]})})})};s.a.render(Object(r.jsx)(E,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.cb52fb09.chunk.js.map