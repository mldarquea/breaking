(this.webpackJsonpseries=this.webpackJsonpseries||[]).push([[0],{19:function(e,t,n){},28:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(21),s=n.n(r),i=(n(28),n(19),n(7)),o=n(3),u=n(0);var j=function(){var e=Object(o.f)();return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){e.push("/breaking")},children:"Breaking Bad"}),Object(u.jsx)("button",{onClick:function(){e.push("/saul")},children:"Better Call Saul"})]})};var d=function(){var e=Object(o.f)(),t=[1,2,3,4,5];return Object(u.jsx)("div",{className:"Temporadas_Breaking",children:Object(u.jsxs)("header",{className:"Temporadas_Breaking-header",children:[Object(u.jsx)("h1",{children:"Temporadas Breaking Bad"}),t?t.map((function(t,n){return Object(u.jsx)("div",{children:Object(u.jsxs)("button",{style:{margin:"10px"},onClick:function(){return n=t,void e.push("/breaking/".concat(n));var n},children:["Temporada: ",t]},n)})})):"\n Cargando..."]})})},p=n(6),l=n.n(p),h=n(8),b=n(9);var x=function(){var e=Object(a.useState)(),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(o.f)();return Object(a.useEffect)((function(){(function(){var e=Object(h.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(u.jsx)("div",{className:"Temporadas_Saul",children:Object(u.jsxs)("header",{className:"Temporadas_Saul-header",children:[Object(u.jsx)("h1",{children:"Episodios Better Call Saul"}),Object(u.jsx)("ol",{children:n?n.map((function(e,t){return Object(u.jsx)("div",{children:Object(u.jsxs)("button",{style:{margin:"10px"},onClick:function(){return t=e.episode_id,void r.push("/saul/episode/".concat(t));var t},children:[e.title," ",e.season," ",e.episode]},t)})})):"\n Cargando..."})]})})};var O=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(b.a)(n,2),r=c[0],s=c[1],i=Object(o.f)();return Object(a.useEffect)((function(){(function(){var e=Object(h.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes/".concat(t.params.episode_id));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,s(a),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log(t)}),[t]),Object(u.jsxs)("div",{children:[r&&r[0]&&Object(u.jsxs)("h3",{children:["Nombre del episodio: ",r[0].title]}),r&&r[0]&&Object(u.jsxs)("h3",{children:["Temporada: ",r[0].season]}),r&&r[0]&&Object(u.jsxs)("h3",{children:["N\xb0 del episodio: ",r[0].episode]}),r&&r[0]&&Object(u.jsxs)("h3",{children:["Fecha de lanzamiento: ",r[0].air_date]}),r&&r[0]&&Object(u.jsxs)("h3",{children:["Personajes: ",r[0].characters.map((function(e,t){return Object(u.jsx)("button",{style:{margin:"10px"},onClick:function(){return e=2,void i.push("/breaking/character/".concat(e));var e},children:e},t)}))]})]})};var f=function(e){var t=e.match,n=Object(a.useState)({img:{}}),c=Object(b.a)(n,2),r=c[0],s=c[1],i=Object(o.f)();Object(a.useEffect)((function(){(function(){var e=Object(h.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tarea-1-breaking-bad.herokuapp.com/api/characters/".concat(t.params.char_id));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,s(a),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log(t)}),[t]);var j=function(e){i.push("/breaking/".concat(e))};return Object(u.jsxs)("div",{children:[r&&r[0]&&Object(u.jsxs)("h3",{children:["Nombre: ",r[0].name]}),r&&r[0]&&Object(u.jsx)("img",{className:"photo",src:r[0].img,alt:""}),r&&r[0]&&Object(u.jsxs)("h3",{children:["Status: ",r[0].status]}),r&&r[0]&&Object(u.jsxs)("h3",{children:["Apodo: ",r[0].nickname]}),r&&r[0]&&Object(u.jsxs)("h3",{children:["Interpretado por: ",r[0].portrayed]}),r&&r[0]&&Object(u.jsxs)("h3",{children:["Ocupaci\xf3n: ",r[0].occupation.map((function(e){return Object(u.jsx)("p",{children:e})}))]}),r&&r[0]&&Object(u.jsxs)("h3",{children:["Temporadas en las que aparece de Breaking Bad: ",r[0].appearance.map((function(e,t){return Object(u.jsxs)("button",{style:{margin:"10px"},onClick:function(){return j("")},children:[e," "]},t)}))]}),r&&r[0]&&Object(u.jsxs)("h3",{children:["Temporadas en las que aparece de Better Call Saul: ",r[0].better_call_saul_appearance.map((function(e,t){return Object(u.jsxs)("button",{style:{margin:"10px"},onClick:function(){return j("")},children:[e," "]},t)}))]})]})};var m=function(e){var t=e.match,n=Object(a.useState)(),c=Object(b.a)(n,2),r=c[0],s=c[1],i=Object(o.f)();return Object(a.useEffect)((function(){(function(){var e=Object(h.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),console.log(t.params.season),console.log(r),Object(u.jsx)("div",{className:"Temporadas_Breaking",children:Object(u.jsxs)("header",{className:"Temporadas_Breaking-header",children:[Object(u.jsx)("h1",{children:"Episodios Breaking Bad"}),Object(u.jsx)("ol",{children:r?r.map((function(e,t){return Object(u.jsx)("div",{children:Object(u.jsxs)("button",{style:{margin:"10px"},onClick:function(){return t=e.episode_id,void i.push("/breaking/episode/".concat(t));var t},children:[e.title," ",e.season," ",e.episode]},t)})})):"\n Cargando..."})]})})};var v=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(i.a,{basename:"/breaking",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,component:j}),Object(u.jsx)(o.a,{path:"/breaking",exact:!0,component:d}),Object(u.jsx)(o.a,{path:"/breaking/:season",exact:!0,component:m}),Object(u.jsx)(o.a,{path:"/saul",exact:!0,component:x}),Object(u.jsx)(o.a,{path:"/breaking/episode/:episode_id",exact:!0,component:O}),Object(u.jsx)(o.a,{path:"/breaking/character/:char_id",exact:!0,component:f})," */}"]})})})};var g=function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(v,{})})})},k=n(23),B=n(38),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},_=Object(k.a)(),S=document.getElementById("root"),T=(/#!(\/.*)$/.exec(window.location.hash)||[])[1];T&&_.replace(T),s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(B.a,{children:Object(u.jsx)(g,{})})}),S),C()}},[[36,1,2]]]);
//# sourceMappingURL=main.27125c2c.chunk.js.map