(this.webpackJsonpfrontend_api_trello=this.webpackJsonpfrontend_api_trello||[]).push([[0],{32:function(e,a,t){},54:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(21),s=t.n(r),o=(t(53),t(54),t(17)),l=t(7),i=t(90),j=t(86),b=t(92),d=t(1);function u(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{bg:"light",expand:"lg",children:[Object(d.jsx)(i.a.Text,{children:Object(d.jsx)(j.a,{style:{height:70}})}),Object(d.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(b.a,{style:{marginLeft:100},children:[Object(d.jsx)(b.a.Link,{children:Object(d.jsx)(o.b,{to:"./",className:"nav-link nav--hover",children:"Cards"})}),Object(d.jsx)(b.a.Link,{children:Object(d.jsx)(o.b,{to:"./checkList",className:"nav-link nav--hover",children:"CheckLists"})}),Object(d.jsx)(b.a.Link,{children:Object(d.jsx)(o.b,{to:"./checkItem",className:"nav-link nav--hover",children:"CheckItems"})})]})})]})})}var h=t(13),O=t(87),m=t(88);function x(e){var a=Object(c.useState)([]),t=Object(h.a)(a,2),n=t[0],r=t[1],s=Object(c.useState)(""),o=Object(h.a)(s,2),l=o[0],i=o[1];return Object(c.useEffect)((function(){r(e.location.state),console.log(n),n.length?i("Dados encontrados:"):i("Nenhum dado encontrado")}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{style:{display:"block",textAlign:"center",color:"red"},children:l}),Object(d.jsx)(O.a,{children:Object(d.jsxs)(m.a,{responsive:!0,bordered:!0,style:{marginTop:"20px"},children:[Object(d.jsx)("thead",{responsive:!0,children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Card"}),Object(d.jsx)("td",{children:"Nome"}),Object(d.jsx)("td",{children:"Descri\xe7\xe3o"})]})}),Object(d.jsx)("tbody",{children:n.map((function(e,a){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("a",{href:e.url,children:"LINK"})}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.desc})]},a)}))})]})})]})}var p=t(6),f=t.n(p),v=t(11),k=t(12),C=t(15),g=t(22),y=t.n(g),L=(t(81),function(){var e=Object(v.a)(f.a.mark((function e(a){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.data,a.query,e.next=3,y()({method:"get",url:"https://api.trello.com/1/boards/7GQzKJOi/cards?key=1c1d1d2f9e61ecbc410102acc2b7d4ed&token=6fb62d2e3fdcef0aafc8daadccaa2cb0e4302ee834b7b7607267e0fcf2021d04",data:t}).then((function(e){return e.status?{error:!1,message:e.data}:{error:!0}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),N=function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()({method:"get",url:"https://api.trello.com/1/boards/7GQzKJOi/cards?key=1c1d1d2f9e61ecbc410102acc2b7d4ed&token=6fb62d2e3fdcef0aafc8daadccaa2cb0e4302ee834b7b7607267e0fcf2021d04"}).then((function(e){return{error:!1,message:e.data}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(v.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()({method:"get",url:"https://api.trello.com/1/cards/"+a+"/checklists?key=1c1d1d2f9e61ecbc410102acc2b7d4ed&token=6fb62d2e3fdcef0aafc8daadccaa2cb0e4302ee834b7b7607267e0fcf2021d04"}).then((function(e){return{error:!1,message:e.data}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),G=t(91),S=t(48),E=t(89);t(32);function R(){var e,a,t={name:"",desc:"",pos:"bottom",due:"",dueComplete:"false",idLabels:"",urlSource:""},n=Object(c.useState)(t),r=Object(h.a)(n,2),s=r[0],o=r[1],i=Object(c.useState)({nameList:"A fazer"}),j=Object(h.a)(i,2),b=j[0],u=j[1],m=Object(l.f)(),x=function(e){var a=e.target,t=a.name,c=a.value,n=a.type,r=a.checked,l="checkbox"===n;s[t]="checkbox"==n?r:c;var i=s[t]||{},j=l?i:c;o(Object(C.a)(Object(C.a)({},s),{},Object(k.a)({},t,j)))},p=function(){var e=Object(v.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),Object.keys(s).forEach((function(e){""==s[e]&&delete s[e]})),e.next=4,L({data:s,query:b}).then((function(e){o(t),u({nameList:"A fazer"}),m.push({pathname:"/list",state:e.message})}));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(d.jsx)(O.a,{className:"container",children:Object(d.jsxs)(G.a,{children:[Object(d.jsxs)(G.a.Row,{children:[Object(d.jsxs)(G.a.Group,{as:S.a,className:"coluna",children:[Object(d.jsx)(G.a.Label,{children:"Nome"}),Object(d.jsx)(G.a.Control,{type:"text",name:"name",placeholder:"Nome do card",value:s.name,onChange:x})]}),Object(d.jsxs)(G.a.Group,{as:S.a,className:"coluna",controlId:"formGridState",children:[Object(d.jsx)(G.a.Label,{children:"Qual ser\xe1 sua lista"}),Object(d.jsxs)(G.a.Control,{as:"select",name:"nameList",value:s.nameList,onChange:function(e){u({nameList:e.target.value})},children:[Object(d.jsx)("option",{children:"A fazer"}),Object(d.jsx)("option",{children:"Em Andamento"}),Object(d.jsx)("option",{children:"Conclu\xeddo"})]})]})]}),Object(d.jsxs)(G.a.Row,{children:[Object(d.jsxs)(G.a.Group,{as:S.a,className:"coluna",children:[Object(d.jsx)(G.a.Label,{children:"Data de entrega"}),Object(d.jsx)(G.a.Control,{type:"date",name:"due",placeholder:"Data de entrega",value:s.due,onChange:x})]}),Object(d.jsxs)(G.a.Group,{as:S.a,className:"coluna",controlId:"formGridState",children:[Object(d.jsx)(G.a.Label,{children:"Posi\xe7\xe3o na lista"}),Object(d.jsxs)(G.a.Control,{as:"select",name:"pos",value:s.pos,onChange:x,children:[Object(d.jsx)("option",{value:"top",children:"Topo da lista"}),Object(d.jsx)("option",{value:"bottom",children:"Fim da lista"})]})]})]}),Object(d.jsxs)(G.a.Row,{children:[Object(d.jsx)(G.a.Group,{as:S.a,className:"coluna",id:"concluido",children:Object(d.jsx)(G.a.Check,(e={type:"checkbox",value:"true",name:"dueComplete"},Object(k.a)(e,"value",s.dueComplete),Object(k.a)(e,"label","Tarefa j\xe1 conclu\xedda"),Object(k.a)(e,"onChange",x),e))}),Object(d.jsx)(G.a.Group,{as:S.a})]}),Object(d.jsxs)(G.a.Row,{children:[Object(d.jsxs)(G.a.Group,{as:S.a,className:"coluna",children:[Object(d.jsx)(G.a.Label,{children:"Descri\xe7\xe3o"}),Object(d.jsx)(G.a.Control,{as:"textarea",name:"desc",rows:3,value:s.desc,onChange:x})]}),Object(d.jsxs)(G.a.Group,(a={as:S.a,className:"coluna"},Object(k.a)(a,"className","mb-3"),Object(k.a)(a,"children",[Object(d.jsx)(G.a.Label,{className:"block",children:"Adicione labels ao seu card"}),Object(d.jsxs)("div",{className:"block",children:[Object(d.jsx)(G.a.Check,{custom:!0,name:"idLabels",value:"605bcb46184d2c731b8fc582",inline:!0,label:"verde",type:"checkbox",id:"idLabels1"}),Object(d.jsx)(G.a.Check,{value:"605bcb46184d2c731b8fc585",name:"idLabels",custom:!0,inline:!0,label:"amarelo",type:"checkbox",id:"idLabels2"}),Object(d.jsx)(G.a.Check,{value:"605bcb46184d2c731b8fc589",name:"idLabels",custom:!0,inline:!0,label:"vermelho",type:"checkbox",id:"idLabels3"}),Object(d.jsx)(G.a.Check,{value:"605bcb46184d2c731b8fc58c",name:"idLabels",custom:!0,inline:!0,label:"roxo",type:"checkbox",id:"idLabels4"}),Object(d.jsx)(G.a.Check,{value:"605bcb46184d2c731b8fc58e",name:"idLabels",custom:!0,inline:!0,label:"azul",type:"checkbox",id:"idLabels5"})]})]),a),"idLabels")]}),Object(d.jsx)(G.a.Row,{children:Object(d.jsxs)(G.a.Group,{as:S.a,className:"coluna",children:[Object(d.jsx)(G.a.Label,{children:"Insira uma imagem ao card (cole a url da imagem)"}),Object(d.jsx)(G.a.Control,{type:"text",name:"urlSource",placeholder:"url imagem",value:s.urlSource,onChange:x})]})}),Object(d.jsx)(G.a.Row,{className:"button",children:Object(d.jsx)(E.a,{variant:"primary",onClick:p,type:"submit",children:"Enviar"})})]})})}function I(){var e={name:"",nameCard:""},a=Object(c.useState)(e),t=Object(h.a)(a,2),n=t[0],r=t[1],s=Object(c.useState)([]),o=Object(h.a)(s,2),i=o[0],j=o[1],b=Object(l.f)(),u=function(e){var a=e.target,t=a.name,c=a.value,s=a.type,o=a.checked,l="checkbox"===s;n[t]="checkbox"==s?o:c;var i=n[t]||{},j=l?i:c;r(Object(C.a)(Object(C.a)({},n),{},Object(k.a)({},t,j)))};Object(c.useEffect)(Object(v.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return e.next=4,e.sent.message;case 4:return a=e.sent,e.next=7,j(a);case 7:r(Object(C.a)(Object(C.a)({},n),{},{nameCard:a[0].name}));case 8:case"end":return e.stop()}}),e)}))),[]);var m=function(){var a=Object(v.a)(f.a.mark((function a(t){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),Object.keys(n).forEach((function(e){""==n[e]&&delete n[e]})),a.next=4,L({data:n,query:i}).then((function(a){r(e),b.push({pathname:"/",state:a.message})}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(d.jsx)(O.a,{className:"container",children:Object(d.jsxs)(G.a,{children:[Object(d.jsxs)(G.a.Row,{children:[Object(d.jsxs)(G.a.Group,{as:S.a,className:"coluna",children:[Object(d.jsx)(G.a.Label,{children:"Nome CheckList"}),Object(d.jsx)(G.a.Control,{type:"text",name:"name",placeholder:"Nome do card",value:n.name,onChange:u})]}),Object(d.jsxs)(G.a.Group,{as:S.a,className:"coluna",children:[Object(d.jsx)(G.a.Label,{children:"Nome do Card"}),Object(d.jsx)(G.a.Control,{as:"select",name:"nameCard",value:n.nameCards,onChange:u,children:i.map((function(e,a){return Object(d.jsx)("option",{children:e.name},a)}))})]})]}),Object(d.jsx)(G.a.Row,{className:"button",children:Object(d.jsx)(E.a,{variant:"primary",onClick:m,type:"submit",children:"Enviar"})})]})})}function D(){var e={name:"",nameCard:"",nameCheckList:""},a=Object(c.useState)(e),t=Object(h.a)(a,2),n=t[0],r=t[1],s=Object(c.useState)([]),o=Object(h.a)(s,2),i=o[0],j=o[1],b=Object(c.useState)([]),u=Object(h.a)(b,2),m=u[0],x=u[1],p=Object(l.f)(),g=function(e){var a=e.target,t=a.name,c=a.value,s=a.type,o=a.checked,l="checkbox"===s;n[t]="checkbox"==s?o:c;var i=n[t]||{},j=l?i:c;r(Object(C.a)(Object(C.a)({},n),{},Object(k.a)({},t,j)))};Object(c.useEffect)(Object(v.a)(f.a.mark((function e(){var a,t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return e.next=4,e.sent.message;case 4:return a=e.sent,e.next=7,j(a);case 7:return r(Object(C.a)(Object(C.a)({},n),{},{nameCard:a[0].name})),e.next=10,w(a[0].id);case 10:return e.next=12,e.sent.message;case 12:return t=e.sent,e.next=15,x(t);case 15:case"end":return e.stop()}}),e)}))),[]);var y=function(){var a=Object(v.a)(f.a.mark((function a(t){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),Object.keys(n).forEach((function(e){""==n[e]&&delete n[e]})),a.next=4,L({data:n,query:i}).then((function(a){r(e),p.push({pathname:"/",state:a.message})}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(d.jsx)(O.a,{className:"container",children:Object(d.jsxs)(G.a,{children:[Object(d.jsxs)(G.a.Row,{children:[Object(d.jsxs)(G.a.Group,{as:S.a,className:"coluna",children:[Object(d.jsx)(G.a.Label,{children:"Nome CheckItem"}),Object(d.jsx)(G.a.Control,{type:"text",name:"name",placeholder:"Nome do card",value:n.name,onChange:g})]}),Object(d.jsxs)(G.a.Group,{as:S.a,className:"coluna",children:[Object(d.jsx)(G.a.Label,{children:"Nome do Card"}),Object(d.jsx)(G.a.Control,{as:"select",name:"nameCard",value:n.nameCards,onChange:g,children:i.map((function(e,a){return Object(d.jsx)("option",{children:e.name},a)}))})]}),Object(d.jsxs)(G.a.Group,{as:S.a,className:"coluna",children:[Object(d.jsx)(G.a.Label,{children:"Nome da CheckList"}),Object(d.jsx)(G.a.Control,{as:"select",name:"nameCheckLists",value:n.nameCheckLists,onChange:g,children:m.map((function(e,a){return Object(d.jsx)("option",{children:e.name},a)}))})]})]}),Object(d.jsx)(G.a.Row,{className:"button",children:Object(d.jsx)(E.a,{variant:"primary",onClick:y,type:"submit",children:"Enviar"})})]})})}var z=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(u,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",exact:!0,component:R}),Object(d.jsx)(l.a,{path:"/checkList",component:I}),Object(d.jsx)(l.a,{path:"/checkItem",component:D}),Object(d.jsx)(l.a,{path:"/list",component:x})]})]})})};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.3c7da02b.chunk.js.map