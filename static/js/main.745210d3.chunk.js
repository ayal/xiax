(this.webpackJsonpxiax=this.webpackJsonpxiax||[]).push([[0],{13:function(n,e,a){n.exports=a(23)},18:function(n,e,a){},19:function(n,e,a){n.exports=a.p+"static/media/logo.5d5d9eef.svg"},20:function(n,e,a){},23:function(n,e,a){"use strict";a.r(e);var t=a(0),i=a.n(t),l=a(8),c=a.n(l),o=(a(18),a(4)),r=a(3),u=a(1),b=(a(19),a(20),a(2));function p(){var n=Object(u.a)(["\n   display:flex;\n   min-height: 0px;\n   width:12.5%;\n   height:12.5%;\n   outline:1px solid ",";\n"]);return p=function(){return n},n}var _={rook_white:"image://v1/4bc52e_d51d5b998211419b897e2640a89e1673~mv2.png/45_45/rook_white.png",rook_black:"image://v1/4bc52e_96400be7e1ad4ef088153fc740d27bbf~mv2.png/45_45/rook_black.png",pawn_white:"image://v1/4bc52e_e64495675a074dc8a29112e7193b598b~mv2.png/45_45/pawn_white.png",pawn_black:"image://v1/4bc52e_4ef97a0ac7c84fbb964d7b750831c2b6~mv2.png/45_45/pawn_black.png",knight_white:"image://v1/4bc52e_61b911077ced4793a045f865fb4f03fc~mv2.png/45_45/knight_white.png",knight_black:"image://v1/4bc52e_cde6554283d841ff92efc1387b91b0f2~mv2.png/45_45/knight_black.png",bishop_white:"image://v1/4bc52e_42a9d5a4ba70472d9f8574ec9631e9cf~mv2.png/45_45/bishop_white.png",bishop_black:"image://v1/4bc52e_73d298244f294c11aa76163720f7cb51~mv2.png/45_45/bishop_black.png",queen_white:"image://v1/4bc52e_a36c146ecb654dbab53c13c40adc5bff~mv2.png/45_45/queen_white.png",queen_black:"image://v1/4bc52e_2df8702d1b2f456a824fd259821d13c4~mv2.png/45_45/queen_black.png",king_white:"image://v1/4bc52e_19d50b42ffb84435809a9288462b819d~mv2.png/45_45/king_white.png",king_black:"image://v1/4bc52e_d236fec85c954a3aa4bf3c5e2d6c6047~mv2.png/45_45/king_black.png"},g=b.a.div(p(),(function(n){return n.selection&&(n.selection.from===n.index?"red":"black")}));var d=function(n){return i.a.createElement(g,Object.assign({},n,{onClick:function(){return n.onClick(n)}}),i.a.createElement("img",{src:(e=n.name,_[e]&&_[e].replace("image://v1/","https://static.wixstatic.com/media/").replace("/45_45/".concat(e,".png"),""))}));var e};function m(){var n=Object(u.a)(["\n   max-width:320px;\n   min-width:320px;\n   max-height:320px;\n   background:grey;\n   display:flex;\n   flex-wrap:wrap;\n   align-content:center;\n   flex-direction: row;\n   flex:1;\n   min-height: 0px;\n"]);return m=function(){return n},n}var f=b.a.div(m());var h=function(n){var e=i.a.useState({from:null,to:null}),a=Object(r.a)(e,2),t=a[0],l=a[1];console.log("rendering Board",t);var c=n.data.map((function(n,e){return i.a.createElement(d,{key:e,index:e,name:n,selection:t,onClick:function(n){console.log("click cell",n,t),!t.from&&n.name?l({from:n.index,to:null}):t.from===n.index?l({from:null,to:null}):(console.log("move piece!",n.name,t.from,n.index),window.parent.postMessage({type:"move",move:Object(o.a)({},t,{to:n.index})},"*"),l({from:null,to:null}))}})}));return i.a.createElement(f,null,c)};function w(){var n=Object(u.a)(["\n   font-size:0.7em;\n"]);return w=function(){return n},n}function s(){var n=Object(u.a)(["\n   font-size:0.7em;\n"]);return s=function(){return n},n}function k(){var n=Object(u.a)(["\n   display:flex;\n   flex-direction:column;\n   width:100%;\n   height:100%;\n   margin:0px;\n"]);return k=function(){return n},n}var v=b.a.div(k()),x=b.a.div(s()),E=b.a.div(w()),j=function(n){window.parent.postMessage(n,"*")};var y=function(n){var e=i.a.useState(n.data),a=Object(r.a)(e,2),t=a[0],l=a[1],c=i.a.useState(""),u=Object(r.a)(c,2),b=u[0],p=u[1];if(i.a.useEffect((function(){window.addEventListener("message",(function(n){n.data&&n.data.board&&l((function(e){return Object(o.a)({},n.data)})),n.data&&n.data.message&&p(n.data.message)}),!1)}),[]),!t)return null;var _=t.white?i.a.createElement(E,null,"White user: ".concat(t.white)):i.a.createElement("button",{onClick:function(n){return j({type:"sit",sit:"white"})}},"sit white"),g=t.black?i.a.createElement(E,null,"White user: ".concat(t.black)):i.a.createElement("button",{onClick:function(n){return j({type:"sit",sit:"black"})}},"sit black");return console.log("rendering app...",t),i.a.createElement(v,null,g,i.a.createElement(h,{data:t.board}),_,i.a.createElement(E,null,"Move by ".concat(8===t.move?"white":"black")),i.a.createElement(x,null,b))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(y,{data:{board:["rook_black","knight_black","bishop_black","queen_black","king_black","bishop_black",null,"rook_black","pawn_black","pawn_black","pawn_black","pawn_black","pawn_black","pawn_black","pawn_black","pawn_black",null,null,null,null,null,"knight_black",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"pawn_white","pawn_white",null,null,null,null,null,null,null,null,"pawn_white",null,"pawn_white","pawn_white","pawn_white","pawn_white",null,null,null,"pawn_white","rook_white","knight_white","bishop_white","queen_white","king_white","bishop_white","knight_white","rook_white"]}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.745210d3.chunk.js.map