(this.webpackJsonpfrontend_api_trello=this.webpackJsonpfrontend_api_trello||[]).push([[0],{41:function(e,a,c){},42:function(e,a,c){},50:function(e,a,c){"use strict";c.r(a);var t=c(0),s=c.n(t),l=c(17),r=c.n(l),o=(c(40),c(41),c(19)),n=c(6),j=c(15),b=c(9),d=c(12),i=c(52),h=c(56),O=c(32),x=c(53),u=(c(42),c(1));function m(){var e,a,c=Object(t.useState)({name:"",desc:"",pos:"bottom",due:"",dueComplete:"false",idList:"605bcb467e18477f336b1f54",idLabels:"",urlSource:""}),s=Object(j.a)(c,2),l=s[0],r=s[1],o=function(e){var a=e.target,c=a.name,t=a.value,s=a.type,o=a.checked;console.log({name:c,value:t,type:s,checked:o});var n="checkbox"===s;l[c]="checkbox"==s?o:t;var j=l[c]||{},i=n?j:t;r(Object(d.a)(Object(d.a)({},l),{},Object(b.a)({},c,i))),console.log(l)};return Object(u.jsx)(i.a,{className:"container",children:Object(u.jsxs)(h.a,{children:[Object(u.jsxs)(h.a.Row,{children:[Object(u.jsxs)(h.a.Group,{as:O.a,className:"coluna",children:[Object(u.jsx)(h.a.Label,{children:"Nome"}),Object(u.jsx)(h.a.Control,{type:"text",name:"name",placeholder:"Nome do card",value:l.name,onChange:o})]}),Object(u.jsxs)(h.a.Group,{as:O.a,className:"coluna",controlId:"formGridState",children:[Object(u.jsx)(h.a.Label,{children:"Qual ser\xe1 sua lista"}),Object(u.jsxs)(h.a.Control,{as:"select",name:"idList",value:l.idList,onChange:o,children:[Object(u.jsx)("option",{value:"605bcb467e18477f336b1f54",children:"A Fazer"}),Object(u.jsx)("option",{value:"605bcb467e18477f336b1f55",children:"Em Andamento"}),Object(u.jsx)("option",{value:"605bcb467e18477f336b1f56",children:"Conclu\xeddo"})]})]})]}),Object(u.jsxs)(h.a.Row,{children:[Object(u.jsxs)(h.a.Group,{as:O.a,className:"coluna",children:[Object(u.jsx)(h.a.Label,{children:"Data de entrega"}),Object(u.jsx)(h.a.Control,{type:"date",name:"due",placeholder:"Data de entrega",value:l.due,onChange:o})]}),Object(u.jsxs)(h.a.Group,{as:O.a,className:"coluna",controlId:"formGridState",children:[Object(u.jsx)(h.a.Label,{children:"Posi\xe7\xe3o na lista"}),Object(u.jsxs)(h.a.Control,{as:"select",name:"pos",value:l.pos,onChange:o,children:[Object(u.jsx)("option",{value:"top",children:"Topo da lista"}),Object(u.jsx)("option",{value:"bottom",children:"Fim da lista"})]})]})]}),Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.Group,{as:O.a,className:"coluna",id:"concluido",children:Object(u.jsx)(h.a.Check,(e={type:"checkbox",value:"true",name:"dueComplete"},Object(b.a)(e,"value",l.dueComplete),Object(b.a)(e,"label","Tarefa j\xe1 conclu\xedda"),Object(b.a)(e,"onChange",o),e))}),Object(u.jsx)(h.a.Group,{as:O.a})]}),Object(u.jsxs)(h.a.Row,{children:[Object(u.jsxs)(h.a.Group,{as:O.a,className:"coluna",children:[Object(u.jsx)(h.a.Label,{children:"Descri\xe7\xe3o"}),Object(u.jsx)(h.a.Control,{as:"textarea",name:"desc",rows:3,value:l.desc,onChange:o})]}),Object(u.jsxs)(h.a.Group,(a={as:O.a,className:"coluna"},Object(b.a)(a,"className","mb-3"),Object(b.a)(a,"children",[Object(u.jsx)(h.a.Label,{className:"block",children:"Adicione labels ao seu card"}),Object(u.jsxs)("div",{className:"block",children:[Object(u.jsx)(h.a.Check,{custom:!0,name:"idLabels",value:"605bcb46184d2c731b8fc582",inline:!0,label:"verde",type:"checkbox",id:"idLabels1"}),Object(u.jsx)(h.a.Check,{value:"605bcb46184d2c731b8fc585",name:"idLabels",custom:!0,inline:!0,label:"amarelo",type:"checkbox",id:"idLabels2"}),Object(u.jsx)(h.a.Check,{value:"605bcb46184d2c731b8fc589",name:"idLabels",custom:!0,inline:!0,label:"vermelho",type:"checkbox",id:"idLabels3"}),Object(u.jsx)(h.a.Check,{value:"605bcb46184d2c731b8fc58c",name:"idLabels",custom:!0,inline:!0,label:"roxo",type:"checkbox",id:"idLabels4"}),Object(u.jsx)(h.a.Check,{value:"605bcb46184d2c731b8fc58e",name:"idLabels",custom:!0,inline:!0,label:"azul",type:"checkbox",id:"idLabels5"})]})]),a),"idLabels")]}),Object(u.jsx)(h.a.Row,{children:Object(u.jsxs)(h.a.Group,{as:O.a,className:"coluna",children:[Object(u.jsx)(h.a.Label,{children:"Insira uma imagem ao card (cole a url da imagem)"}),Object(u.jsx)(h.a.Control,{type:"text",name:"urlSource",placeholder:"url imagem",value:l.urlSource,onChange:o})]})}),Object(u.jsx)(h.a.Row,{className:"button",children:Object(u.jsx)(x.a,{variant:"primary",type:"submit",children:"Enviar"})})]})})}var p={name:"",board:"",list:"",desc:""};function C(){var e=Object(t.useState)(p),a=Object(j.a)(e,2),c=a[0],s=a[1],l=function(e){var a=e.target,t=a.name,l=a.value,r=a.type,o=a.checked,n="checkbox"===r;console.log(c);var j=c[t]||{};n&&(j[l]=o);var i=n?j:l;s(Object(d.a)(Object(d.a)({},c),{},Object(b.a)({},t,i)))};return Object(u.jsx)(i.a,{children:Object(u.jsxs)(h.a,{children:[Object(u.jsxs)(h.a.Row,{children:[Object(u.jsxs)(h.a.Group,{as:O.a,controlId:"formGridEmail",children:[Object(u.jsx)(h.a.Label,{children:"Email"}),Object(u.jsx)(h.a.Control,{type:"email",placeholder:"Enter email",onChange:l})]}),Object(u.jsxs)(h.a.Group,{as:O.a,controlId:"formGridPassword",children:[Object(u.jsx)(h.a.Label,{children:"Password"}),Object(u.jsx)(h.a.Control,{type:"password",placeholder:"Password",onChange:l})]})]}),Object(u.jsxs)(h.a.Group,{controlId:"formGridAddress1",children:[Object(u.jsx)(h.a.Label,{children:"Address"}),Object(u.jsx)(h.a.Control,{placeholder:"1234 Main St",onChange:l})]}),Object(u.jsxs)(h.a.Group,{controlId:"formGridAddress2",children:[Object(u.jsx)(h.a.Label,{children:"Address 2"}),Object(u.jsx)(h.a.Control,{placeholder:"Apartment, studio, or floor",onChange:l})]}),Object(u.jsxs)(h.a.Row,{children:[Object(u.jsxs)(h.a.Group,{as:O.a,controlId:"formGridCity",children:[Object(u.jsx)(h.a.Label,{children:"City"}),Object(u.jsx)(h.a.Control,{onChange:l})]}),Object(u.jsxs)(h.a.Group,{as:O.a,controlId:"formGridState",children:[Object(u.jsx)(h.a.Label,{children:"State"}),Object(u.jsxs)(h.a.Control,{as:"select",defaultValue:"Choose...",children:[Object(u.jsx)("option",{children:"Choose..."}),Object(u.jsx)("option",{children:"..."})]})]}),Object(u.jsxs)(h.a.Group,{as:O.a,controlId:"formGridZip",children:[Object(u.jsx)(h.a.Label,{children:"Zip"}),Object(u.jsx)(h.a.Control,{})]})]}),Object(u.jsx)(h.a.Group,{id:"formGridCheckbox",children:Object(u.jsx)(h.a.Check,{type:"checkbox",label:"Check me out"})})]})})}var f={name:"",board:"",list:"",desc:""};function v(){var e=Object(t.useState)(f),a=Object(j.a)(e,2),c=a[0],s=a[1],l=function(e){var a=e.target,t=a.name,l=a.value,r=a.type,o=a.checked,n="checkbox"===r;console.log(c);var j=c[t]||{};n&&(j[l]=o);var i=n?j:l;s(Object(d.a)(Object(d.a)({},c),{},Object(b.a)({},t,i)))};return Object(u.jsx)(i.a,{children:Object(u.jsxs)(h.a,{children:[Object(u.jsxs)(h.a.Row,{children:[Object(u.jsxs)(h.a.Group,{as:O.a,controlId:"formGridEmail",children:[Object(u.jsx)(h.a.Label,{children:"Email"}),Object(u.jsx)(h.a.Control,{type:"email",placeholder:"Enter email",onChange:l})]}),Object(u.jsxs)(h.a.Group,{as:O.a,controlId:"formGridPassword",children:[Object(u.jsx)(h.a.Label,{children:"Password"}),Object(u.jsx)(h.a.Control,{type:"password",placeholder:"Password",onChange:l})]})]}),Object(u.jsxs)(h.a.Group,{controlId:"formGridAddress1",children:[Object(u.jsx)(h.a.Label,{children:"Address"}),Object(u.jsx)(h.a.Control,{placeholder:"1234 Main St",onChange:l})]}),Object(u.jsxs)(h.a.Group,{controlId:"formGridAddress2",children:[Object(u.jsx)(h.a.Label,{children:"Address 2"}),Object(u.jsx)(h.a.Control,{placeholder:"Apartment, studio, or floor",onChange:l})]}),Object(u.jsxs)(h.a.Row,{children:[Object(u.jsxs)(h.a.Group,{as:O.a,controlId:"formGridCity",children:[Object(u.jsx)(h.a.Label,{children:"City"}),Object(u.jsx)(h.a.Control,{onChange:l})]}),Object(u.jsxs)(h.a.Group,{as:O.a,controlId:"formGridState",children:[Object(u.jsx)(h.a.Label,{children:"State"}),Object(u.jsxs)(h.a.Control,{as:"select",defaultValue:"Choose...",children:[Object(u.jsx)("option",{children:"Choose..."}),Object(u.jsx)("option",{children:"..."})]})]})]}),Object(u.jsx)(h.a.Group,{id:"formGridCheckbox",children:Object(u.jsx)(h.a.Check,{type:"checkbox",label:"Check me out"})}),Object(u.jsx)(x.a,{variant:"primary",type:"submit",children:"Submit"})]})})}var k=c(55),G=c(54),L=c(57);function g(){Object(n.f)();var e=Object(t.useState)(0),a=Object(j.a)(e,2),c=a[0],s=a[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(k.a,{bg:"light",expand:"lg",children:[Object(u.jsxs)(k.a.Text,{onClick:function(){return s(0)},children:[Object(u.jsx)(G.a,{style:{height:80}}),"Trello-API"]}),Object(u.jsx)(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(k.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(L.a,{className:"mr-auto",children:[Object(u.jsx)(L.a.Link,{onClick:function(){return s(0)},children:"Cards"}),Object(u.jsx)(L.a.Link,{onClick:function(){return s(1)},children:"CheckLists"}),Object(u.jsx)(L.a.Link,{onClick:function(){return s(2)},children:"CheckItems"})]})})]}),Object(u.jsxs)("div",{className:"container",children:[0===c&&Object(u.jsx)(m,{setScreen:s}),1===c&&Object(u.jsx)(C,{setScreen:s}),2===c&&Object(u.jsx)(v,{setScreen:s})]})]})}var y=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(n.c,{children:Object(u.jsx)(n.a,{path:"/",exact:!0,component:g})})})})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.2282271c.chunk.js.map