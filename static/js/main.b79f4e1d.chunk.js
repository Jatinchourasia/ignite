(this.webpackJsonpignite=this.webpackJsonpignite||[]).push([[0],{66:function(e,n,t){"use strict";t.r(n);var a,c=t(0),r=t.n(c),i=t(12),o=t.n(i),s=t(6),d=t(7),g=Object(d.a)(a||(a=Object(s.a)(['\n*{\n    margin: 0;\n    padding:0;\n    box-sizing:border-box;\n}\n\nhtml{\n    &::--webkit-scrollbar{\n        width: 0.5rem;\n    }\n    &::--webkit-scrollbar-thumb{\n\n      background-color:darkgray\n    }\n}\n\n\nbody{\n    font-family: "Montserrat",sans-serif;\n}\nh2{\n    font-family: "Abril Fatface" ,cursive;\n    font-weight: lighter;\n    font-size: 3rem;\n    color: #FF7676\n}\n\nh3{\n    font-size:1.3rem;\n    color: #333;\n    padding: 1.5rem;\n}\n\n\n']))),b=t(10),u=t(18),l=t.n(u),p=t(31),m=t(14),j=t.n(m);t(62).config();var h,O,f,x="https://api.rawg.io/api/",v=(new Date).getFullYear(),w=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),y=function(){var e=(new Date).getDate();return e<10?"0".concat(e):e}(),_="".concat(v,"-").concat(w,"-").concat(y),k="".concat(v-1,"-").concat(w,"-").concat(y),E="".concat(v+1,"-").concat(w,"-").concat(y),F="games?key=".concat("033e8f20c4934e56ac3e61cbb9849de8","&dates=").concat(k,",").concat(_,"&ordering=-rating&page_size=10"),D="games?key=".concat("033e8f20c4934e56ac3e61cbb9849de8","&dates=").concat(k,",").concat(E,"&ordering=-added&page_size=10"),S="games?key=".concat("033e8f20c4934e56ac3e61cbb9849de8","&dates=").concat(k,",").concat(_,"&ordering=-released&page_size=10"),z=t(67),C=t(1),M=Object(d.b)(z.a.div)(h||(h=Object(s.a)(["\n  min-height: 30vh;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  border-radius: 1rem;\n  img {\n    width: 100%;\n    height: 40vh;\n    object-fit: cover;\n  }\n"]))),T=function(e){var n=e.name,t=e.released,a=(e.id,e.image);return Object(C.jsxs)(M,{children:[Object(C.jsx)("h3",{children:n}),Object(C.jsx)("p",{children:t}),Object(C.jsx)("img",{src:a,alt:n})]})},G=Object(d.b)(z.a.div)(O||(O=Object(s.a)(["\n  padding: 0rem 5rem;\n  h2 {\n    padding: 5rem 0rem;\n  }\n"]))),A=Object(d.b)(z.a.div)(f||(f=Object(s.a)(["\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\n  grid-column-gap: 3rem;\n  grid-row-gap: 5rem;\n"]))),I=function(){var e=Object(b.b)();Object(c.useEffect)((function(){e(function(){var e=Object(p.a)(l.a.mark((function e(n){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(x).concat(F));case 2:return t=e.sent,e.next=5,j.a.get("".concat(x).concat(D));case 5:return a=e.sent,e.next=8,j.a.get("".concat(x).concat(S));case 8:c=e.sent,n({type:"FETCH_GAMES",payload:{popular:t.data.results,upcoming:a.data.results,new:c.data.results}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[]);var n=Object(b.c)((function(e){return e.games})),t=(n.popular,n.newGames,n.upcoming);return Object(C.jsxs)(G,{children:[Object(C.jsx)("h2",{children:"upcoming games"}),Object(C.jsx)(A,{children:t.map((function(e){return Object(C.jsx)(T,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))})]})};var H=function(){return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(g,{}),Object(C.jsx)("h1",{children:"Hello Ignite"}),Object(C.jsx)(I,{})]})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))},N=t(5),P=t(15),B={popular:[],newGames:[],upcoming:[],searched:[]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(P.a)(Object(P.a)({},e),{},{popular:n.payload.popular,upcoming:n.payload.upcoming,newGames:n.payload.new});default:return Object(P.a)({},e)}},X=Object(N.c)({games:J}),R=t(32),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||N.d,V=Object(N.e)(X,U(Object(N.a)(R.a)));o.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(b.a,{store:V,children:Object(C.jsx)(H,{})})}),document.getElementById("root")),L()}},[[66,1,2]]]);
//# sourceMappingURL=main.b79f4e1d.chunk.js.map