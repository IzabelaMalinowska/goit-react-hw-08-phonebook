"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[907],{9907:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(2791),r=n(9434),s=n(4270),c=n(3433),o=n(9439),i="ContactForm_form__dhl+T",l="ContactForm_formName__9bHzl",u="ContactForm_formNumber__UMrmC",m="ContactForm_formLabel__TSwxK",d="ContactForm_formBtn__qZGY3",f=n(3634),h=function(e){return e.contacts.items},_=function(e){return e.contacts.isLoading},p=function(e){return e.filter.filter},x=n(184),v=function(){var e=(0,a.useState)(""),t=(0,o.Z)(e,2),n=t[0],s=t[1],_=(0,a.useState)(""),p=(0,o.Z)(_,2),v=p[0],b=p[1],C=(0,r.I0)(),j=(0,r.v9)(h);return(0,x.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault();var t=e.currentTarget;-1!==(0,c.Z)(j).findIndex((function(e){return n===e.name}))?alert("".concat(n," is already in contacts.")):C((0,f.uK)({name:n,number:v})),t.reset()},children:[(0,x.jsxs)("label",{className:m,children:["Name",(0,x.jsx)("input",{className:l,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",value:n,onChange:function(e){var t=e.target.value;s(t)}})]}),(0,x.jsxs)("label",{className:m,children:["Number",(0,x.jsx)("input",{className:u,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter phone number",value:v,onChange:function(e){var t=e.target.value;b(t)}})]}),(0,x.jsx)("button",{className:d,type:"submit",children:"Add contact"})]})},b="Filter_filterName__Y2kKA",C="Filter_filterLabel__+pnW-",j=n(4808),N=function(){var e=(0,r.I0)(),t=(0,r.v9)(p);return(0,x.jsxs)("div",{children:[(0,x.jsx)("label",{className:C,children:"Find contacts by Name "}),(0,x.jsx)("input",{className:b,type:"text",name:"filter",placeholder:"Enter filter",value:t,onChange:function(t){e((0,j.T)(t.target.value))}})]})},g="ContactList_wraperContactList__y2X8k",L="ContactList_contactList__UFVCg",F="ContactList_contactListItem__3th7-",y="ContactList_contactListItemBtn__TXYnT",k=function(){var e=function(e,t){return t?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):e}((0,r.v9)(h),(0,r.v9)(p)),t=(0,r.I0)();return(0,x.jsx)("div",{className:g,children:(0,x.jsx)("ul",{className:L,children:e.map((function(e,n){return(0,x.jsxs)("li",{className:F,children:[e.name,": ",e.number,(0,x.jsx)("button",{type:"button",className:y,onClick:function(){return function(e){return t((0,f.nE)(e))}(e.id)},children:"Delete"})]},n)}))})})},w=function(){var e=(0,r.I0)(),t=(0,r.v9)(_),n=(0,r.v9)(h);return(0,a.useEffect)((function(){e((0,f.yF)())}),[e]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s.q,{children:(0,x.jsx)("title",{children:"Phonebook"})}),(0,x.jsx)(v,{}),(0,x.jsx)("div",{children:t&&"Request in progress..."}),(0,x.jsx)(N,{}),n.length>0?(0,x.jsx)(k,{}):(0,x.jsx)("div",{children:"No contacts found."})]})}}}]);
//# sourceMappingURL=907.ced449e0.chunk.js.map