(this["webpackJsonpreact-colorswatch"]=this["webpackJsonpreact-colorswatch"]||[]).push([[0],{45:function(e,t,n){e.exports=n(59)},50:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(31),c=n.n(o),l=(n(50),n(32)),i=n(33),u=n(43),s=n(34),p=n(44),d=n(16),m=n(14),h=n(19),g=n(60),v=n(20),b=n.n(v);function E(){var e=Object(h.a)(["\n  query {\n    colors {\n      color_code\n      id\n    }\n  }\n"]);return E=function(){return e},e}var f,x=b()(E());var y=function(){var e=Object(m.g)();return a.a.createElement(g.a,{query:x},(function(t){var n=t.loading,r=t.error,o=t.data;if(n)return a.a.createElement("div",null,"Fetching");if(r)return a.a.createElement("div",null,"Error");var c=o.colors;return f=c.find((function(t,n,r){return t.id==e.params.id})),a.a.createElement("div",null,a.a.createElement("div",{style:{display:"inline-block"}},a.a.createElement("div",{style:{boxShadow:"2px 2px 2px 2px",background:f.color_code,display:"inline-block",margin:"10px",width:"150px",height:"150px",position:"relative"}},a.a.createElement("p",{style:{background:"white",position:"absolute",bottom:"0",margin:"0",paddingBottom:"10px",textAlign:"center",width:"100%"}},f.color_code))))}))};n(57);function w(){var e=Object(h.a)(["query { colors( first: 5 skip: ",") { id color_code } }"]);return w=function(){return e},e}function k(e){if(0!=e)return a.a.createElement(d.b,{to:"/colors/"+(parseInt(e)-1)},a.a.createElement("span",{style:{margin:"10px"}},"previous"))}console.log("yooo again");var j=function(){var e=Object(m.g)();k(e);var t=5*e.params.page,n=b()(w(),t);return a.a.createElement(g.a,{query:n},(function(t){var n=t.loading,r=t.error,o=t.data;if(n)return a.a.createElement("div",null,"Fetching");if(r)return a.a.createElement("div",null,"Error: ",r);console.log(o);var c=o.colors;return a.a.createElement("div",null,c.map((function(e){return a.a.createElement(d.b,{to:"/color/"+e.id},a.a.createElement("div",{style:{display:"inline-block"}},a.a.createElement("div",{style:{boxShadow:"2px 2px 2px 2px",background:e.color_code,display:"inline-block",margin:"10px",width:"150px",height:"150px",position:"relative"}},a.a.createElement("p",{style:{background:"white",position:"absolute",bottom:"0",margin:"0",paddingBottom:"10px",textAlign:"center",width:"100%"}},e.color_code))))})),k(e.params.page),function(e,t){if(t>=5)return a.a.createElement(d.b,{to:"/colors/"+(parseInt(e)+1)},a.a.createElement("span",{style:{margin:"10px"}},"next"))}(e.params.page,c.length))}))},O=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(d.a,null,a.a.createElement(m.d,null,a.a.createElement(m.b,{exact:!0,path:"/",render:function(){return a.a.createElement(m.a,{to:"/colors/0"})}}),a.a.createElement(m.b,{path:"/color/:id"},a.a.createElement(y,null)),a.a.createElement(m.b,{exact:!0,path:"/colors/:page"},a.a.createElement(j,null))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=n(5),q=n(15),B=n(42),I=n(41),z=Object(B.a)({uri:"https://frozen-sierra-97329.herokuapp.com/"});console.log("helloooo in index.js"),console.log("https://frozen-sierra-97329.herokuapp.com/");var A=new q.a({link:z,cache:new I.a});c.a.render(a.a.createElement(_.a,{client:A},a.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);