(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(4),n=t.n(c),r=t(3),i=t(1);t(10);function l(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}var s=t(5),o=t.n(s),j=t(0),d=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange,r=a/t;return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:"page-item disabled",children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":"true",children:"\xab"})}),l(1,r).map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:e===c}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(j.jsx)("li",{className:"page-item disabled",children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":"false",children:"\xbb"})})]})},h=l(1,42).map((function(e){return"Item ".concat(e)})),u=function(){var e=Object(i.useState)(5),a=Object(r.a)(e,2),t=a[0],c=a[1],n=Object(i.useState)(1),l=Object(r.a)(n,2),s=l[0],o=l[1],u=s*t+t,b=h.slice((s-1)*t,Math.min(+t,h.length));return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(s*+t," - ").concat(u," of ").concat(h.length,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:t,onChange:function(e){return c(+e.target.value)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:h.length,perPage:t,currentPage:s,onPageChange:o}),Object(j.jsx)("ul",{children:b.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e528cfb5.chunk.js.map