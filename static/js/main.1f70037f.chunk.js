(this.webpackJsonpignite=this.webpackJsonpignite||[]).push([[0],{125:function(e,n,t){"use strict";t.r(n);var a,c=t(0),r=t.n(c),i=t(58),s=t.n(i),o=t(12),d=t(13),b=Object(d.a)(a||(a=Object(o.a)(['\n*{\n    margin: 0;\n    padding:0;\n    box-sizing:border-box;\n}\n\nhtml{\n    \n    &::-webkit-scrollbar{\n        width: 0.5rem;\n    }\n    &::-webkit-scrollbar-thumb{\n\n      background-color:darkgray\n    }\n}\n\n\nbody{\n    font-family: "Montserrat",sans-serif;\n}\nh2{\n    font-family: "Abril Fatface" ,cursive;\n    font-weight: lighter;\n    font-size: 3rem;\n    color: #FF7676\n}\n\nh3{\n    font-size:1.3rem;\n    color: #333;\n    padding: 1.5rem 0rem;\n}\n\np{\n    font-size:1.2rem;\n    line-height:200%;\n    color:#696969\n}\na{\n    text-decoration: none;\n    color: #333\n}\nimg{\n    display: block;\n}\n']))),l=t(8),j=t(92),g=t(126),m=t.p+"static/media/logo.9b6b8655.svg",u=t(39),p=t.n(u),h=t(51),O=t(40),f=t.n(O);t(117).config();var A,x,w,v,y,k,E,I,C,S,D,U,N="https://api.rawg.io/api/",T=(new Date).getFullYear(),B=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),R=function(){var e=(new Date).getDate();return e<10?"0".concat(e):e}(),G="".concat(T,"-").concat(B,"-").concat(R),L="".concat(T-1,"-").concat(B,"-").concat(R),z="".concat(T+1,"-").concat(B,"-").concat(R),F="games?key=".concat("033e8f20c4934e56ac3e61cbb9849de8","&dates=").concat(L,",").concat(G,"&ordering=-rating&page_size=10"),H="games?key=".concat("033e8f20c4934e56ac3e61cbb9849de8","&dates=").concat(G,",").concat(z,"&ordering=-added&page_size=10"),Z="games?key=".concat("033e8f20c4934e56ac3e61cbb9849de8","&dates=").concat(L,",").concat(G,"&ordering=-released&page_size=10"),_=function(e){return"".concat(N,"games/").concat(e,"/screenshots")},M=function(e){return"".concat(N,"games?search=").concat(e,"&page_size=9")},P=t(27),V=t(2),X=Object(d.b)(g.a.div)(A||(A=Object(o.a)(['\n  text-align: center;\n  input {\n    width: 30%;\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    border: none;\n    margin-top: 1rem;\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);\n    font-weight: bold;\n    font-family: "Montserrat", sans-serif;\n  }\n  button {\n    font-size: 1.5rem;\n    border: none;\n    padding: 0.5rem 2rem;\n    cursor: pointer;\n    background: #ff7676;\n    color: white;\n  }\n']))),J=Object(d.b)(g.a.div)(x||(x=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  img {\n    height: 2rem;\n    width: 2rem;\n  }\n  cursor: pointer;\n"]))),W=function(){var e=Object(P.b)(),n=Object(c.useState)(""),t=Object(j.a)(n,2),a=t[0],r=t[1];return Object(V.jsxs)(X,{children:[Object(V.jsxs)(J,{children:[Object(V.jsx)("img",{src:m,alt:""}),Object(V.jsx)("h1",{children:"Ignite"})]}),Object(V.jsxs)("form",{className:"search",children:[Object(V.jsx)("input",{value:a,onChange:function(e){r(e.target.value)},type:"text"}),Object(V.jsx)("button",{type:"submit",onClick:function(n){var t;n.preventDefault(),e((t=a,function(){var e=Object(h.a)(p.a.mark((function e(n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(M(t));case 2:a=e.sent,n({type:"FETCH_SEARCHED",payload:{searched:a.data.results}});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())),r("")},children:"Search"})]})]})},Q=t(34),Y=Object(d.b)(g.a.div)(w||(w=Object(o.a)(["\n  min-height: 30vh;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  border-radius: 1rem;\n  overflow: hidden;\n  img {\n    width: 100%;\n    height: 40vh;\n    object-fit: cover;\n    background: #e4e4e4;\n  }\n  cursor: pointer;\n"]))),K=function(e){var n=e.name,t=e.released,a=e.id,c=e.image,r=(Object(l.e)(),Object(P.b)());return Object(V.jsx)(Y,{layoutId:a,onClick:function(){document.body.style.overflow="auto",r(function(e){return function(){var n=Object(h.a)(p.a.mark((function n(t){var a,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"LOADING_DETAIL"}),n.next=3,f.a.get((r=e,"".concat(N,"games/").concat(r)));case 3:return a=n.sent,n.next=6,f.a.get(_(e));case 6:c=n.sent,t({type:"GET_DETAIL",payload:{game:a.data,screen:c}});case 8:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()}(a))},children:Object(V.jsxs)(Q.b,{to:"/game/".concat(a),children:[Object(V.jsx)("h3",{children:n}),Object(V.jsx)("p",{children:t}),Object(V.jsx)("img",{src:c,alt:n})]})})},q=t.p+"static/media/playstation.18cc4b9c.svg",$=t.p+"static/media/steam.d7b8819f.svg",ee=t.p+"static/media/xbox.3e7db735.svg",ne=t.p+"static/media/nintendo.f579be04.svg",te=t.p+"static/media/apple.5757c37e.svg",ae=t.p+"static/media/gamepad.c9269ef5.svg",ce=Object(d.b)(g.a.div)(v||(v=Object(o.a)(["\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: scroll;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  ::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n  ::-webkit-scrollbar-thumb {\n    background-color: #ff7676;\n  }\n  ::-webkit-scrollbar-track {\n    background: white;\n  }\n  display:flex;\n  justify-content:center;\n  align-items: center;\n"]))),re=Object(d.b)(g.a.div)(y||(y=Object(o.a)(["\n  \n  width: 80vw;\n  height: 90vh;\n  padding: 2rem 5rem;\n    \n  border-radius: 1rem;\n  \n  background: white;\n  position: absolute;\n  \n  \n  color: black;\n  overflow-y:scroll;\n  overflow-x:hidden;\n  h1{\n    margin: 0.5rem 0\n  }\n  img {\n    width: 100%;\n  }\n  ::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n  ::-webkit-scrollbar-thumb {\n    background-color: #ff7676;\n  }\n  ::-webkit-scrollbar-track {\n    background: white;\n  }\n\n  \n"]))),ie=Object(d.b)(g.a.div)(k||(k=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-align: left;\n  align-self: center;\n   flex-flow: row wrap;\n\np{\n  padding-top: 2rem ;\n}\n  img {\n    width: 2rem;\n    height: 2rem;\n    display: inline;\n  }\n  \n"]))),se=Object(d.b)(g.a.div)(E||(E=Object(o.a)(["\n  text-align: left;\n"]))),oe=Object(d.b)(g.a.div)(I||(I=Object(o.a)(["\n  display: flex;\n  \n  justify-content: space-evenly;\n  img {\n    margin-right: 2rem;\n  }\n"]))),de=Object(d.b)(g.a.div)(C||(C=Object(o.a)(["\n  margin-top: 5rem;\n  img {\n    width: 100%;\n  }\n"]))),be=Object(d.b)(g.a.div)(S||(S=Object(o.a)(["\n  margin: 5rem 0rem;\n"]))),le=function(e){var n=e.pathId,t=Object(l.e)(),a=function(e){switch(e){case"PlayStation 4":return q;case"PC":return $;case"Xbox One":return ee;case"Nintendo Switch":return ne;case"IOS":return te;default:return ae}},c=Object(P.c)((function(e){return e.detail})),r=c.screen,i=c.game,s=c.isLoading;return Object(V.jsx)(V.Fragment,{children:!s&&Object(V.jsx)(ce,{className:"shadow",onClick:function(e){e.target.classList.contains("shadow")&&(document.body.style.overflow="auto",t.push("/"))},children:Object(V.jsxs)(re,{layoutId:n,children:[Object(V.jsx)("h1",{children:i.name}),Object(V.jsxs)(ie,{children:[Object(V.jsxs)("div",{className:"rating",children:[Object(V.jsxs)("p",{children:["Rating: ",i.rating]}),Object(V.jsx)("br",{}),function(){for(var e=[],n=Math.floor(i.rating),t=1;t<=5;t++)t<=n?e.push(Object(V.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZbbbcIwFIZ/o4pnNqiZAEbICO0EpRM0ErcHHkgfIaCGDWCStiN0A0bgmUDc4yQkAYziEyWfZCW2bH858RWogHLdDpi0wESNxwO02x9gwhZBiDmUcsGEJYqjASTJOmoyeeO05UWko8nxwMBalEWTIzlR2Ud0Hc0F67GyEhmiudBXw6EDC0RZBTWdSppl3w9EVEH9IAxfRRAcUCZKO+uj1eoginp6VsX5pHPbxalF+ywJoZ9/+l0sFnuhRqM5CTw0SRR5SURNyrRktfrMxqgRWSrRr1eToVZZQXInqk12IzGKUplLsi9U4XweiPV6d1tsXLD0NQE9AvAJTJKHohQJLnr9PaBeUbLI2aI++CIJjog2Ub5Eow/E2ezZWkQNJMzs6asdSu9I9rR7wtAxFT/BTO8mf6DOPeH7mzT/S2kbHx/JOSULdfXfsJve1NjJBLT4cDx2C5K8mu9vxXLZjevkEUpTl+aIokgPrIfTaVN2zsRC2gXorrdLr2EvsKXKBbHQVprK/wF34p3gYzo6rAAAAABJRU5ErkJggg=="},t)):e.push(Object(V.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtZZLbsIwEIYnD7HODWpOAEIsukJZdtkbNEWAkFi0NwCW3ZUdAkTDEXoEdtmA1BvkCHQXiVdnaFK5wQFPRH7Jsj3E83lsjzFADnme5wBTJjDVbrc927ZfgCk2yDCMPpZXYIoFomiOx6PAptPpdJ44Y1kgikbqDoAhbZAUzUnU5kSlDUpFk8C090oLlI5GUrXVarmgIevaB91uV2D1gSUrd0Sj0fgMgiC65MdInG232yrO2sEcqVBNsyUnFwBpbbCEODY0TfNUY/lCf+F4PA4N3NA+GgZQoMi/tVqtlvV6nfouFCCCzGaz4WmPioIlEGr/HYZbw2TIP9AtYWnIGSiB1Wq1b0zQB8ghHOdNp9NR2q7Mo/V6HWBkdKzvgQd5n0wmb6rfLt0MApiK8w9YoIwr5xqoygbB783AEi6dAA4IL1E2JJbT6/XutEGHw0GAWiEWd7/fP8ftM0VR5KrstsqIS1CR+7j2G7QNpGO7xOI3m03Psiz6nxLJt9in1VikfZoZIDcBUPLtdruyKjfm87mP9jJNAuIIs1ZDGVEMIcDI9/0NXBHmzhDfeotSqUTPsEfQVZ4HojRWqOw/3aTMvdEfx5AAAAAASUVORK5CYII="},t));return e}()]}),Object(V.jsxs)(se,{children:[Object(V.jsx)("h3",{children:"Platform"}),Object(V.jsx)(oe,{children:i.platforms.map((function(e){return Object(V.jsx)("img",{src:a(e.platform.name)},e.platform.id)}))})]})]}),Object(V.jsx)(de,{children:Object(V.jsx)("img",{src:i.background_image,alt:"image"})}),Object(V.jsxs)(be,{children:[Object(V.jsx)("h1",{children:"Details"}),Object(V.jsx)("br",{}),Object(V.jsx)("p",{children:i.description_raw})]}),Object(V.jsxs)("div",{className:"gallary",children:[Object(V.jsx)("h1",{children:"Screenshots"}),Object(V.jsx)("br",{}),r.data.results.map((function(e){return Object(V.jsx)("img",{src:e.image,alt:"screenshot"},e.id)}))]})]})})})},je=t(127),ge=Object(d.b)(g.a.div)(D||(D=Object(o.a)(["\n  padding: 0rem 5vw;\n  h2 {\n    padding: 5rem 0rem;\n  }\n"]))),me=Object(d.b)(g.a.div)(U||(U=Object(o.a)(["\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\n  grid-column-gap: 3rem;\n  grid-row-gap: 5rem;\n"]))),ue=function(){var e=Object(l.f)().pathname.split("/")[2],n=Object(P.b)();Object(c.useEffect)((function(){n(function(){var e=Object(h.a)(p.a.mark((function e(n){var t,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(N).concat(F));case 2:return t=e.sent,e.next=5,f.a.get("".concat(N).concat(H));case 5:return a=e.sent,e.next=8,f.a.get("".concat(N).concat(Z));case 8:c=e.sent,n({type:"FETCH_GAMES",payload:{popular:t.data.results,upcoming:a.data.results,new:c.data.results}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[]);var t=Object(P.c)((function(e){return e.games})),a=t.popular,r=t.newGames,i=t.upcoming,s=t.searched;return Object(V.jsx)(ge,{children:Object(V.jsxs)(je.a,{type:"crossfade",children:[e&&Object(V.jsx)(le,{pathId:e}),s.length?Object(V.jsxs)("div",{className:"searched",children:[Object(V.jsx)("h2",{children:"Searched Games"}),Object(V.jsx)(me,{children:s.map((function(e){return Object(V.jsx)(K,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))})]}):"",Object(V.jsx)("h2",{children:"Popular Games"}),Object(V.jsx)(me,{children:a.map((function(e){return Object(V.jsx)(K,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(V.jsx)("h2",{children:"New Games"}),Object(V.jsx)(me,{children:r.map((function(e){return Object(V.jsx)(K,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(V.jsx)("h2",{children:"Upcoming Games"}),Object(V.jsx)(me,{children:i.map((function(e){return Object(V.jsx)(K,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))})]})})},pe=function(){return Object(V.jsxs)("div",{className:"App",children:[Object(V.jsx)(b,{}),Object(V.jsx)(W,{}),Object(V.jsx)(l.a,{path:["/game/:id","/"],children:Object(V.jsx)(ue,{})})]})},he=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,128)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))},Oe=t(36),fe=t(26),Ae={popular:[],newGames:[],upcoming:[],searched:[]},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(fe.a)(Object(fe.a)({},e),{},{popular:n.payload.popular,upcoming:n.payload.upcoming,newGames:n.payload.new});case"FETCH_SEARCHED":return Object(fe.a)(Object(fe.a)({},e),{},{searched:n.payload.searched});default:return Object(fe.a)({},e)}},we={game:{platforms:[]},screen:{data:{results:[]}},isLoading:!0},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_DETAIL":return Object(fe.a)(Object(fe.a)({},e),{},{game:n.payload.game,screen:n.payload.screen,isLoading:!1});case"LOADING_DETAIL":return Object(fe.a)(Object(fe.a)({},e),{},{isLoading:!0});default:return Object(fe.a)({},e)}},ye=Object(Oe.c)({games:xe,detail:ve}),ke=t(91),Ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Oe.d,Ie=Object(Oe.e)(ye,Ee(Object(Oe.a)(ke.a)));s.a.render(Object(V.jsx)(r.a.StrictMode,{children:Object(V.jsx)(P.a,{store:Ie,children:Object(V.jsx)(Q.a,{children:Object(V.jsx)(pe,{})})})}),document.getElementById("root")),he()}},[[125,1,2]]]);
//# sourceMappingURL=main.1f70037f.chunk.js.map