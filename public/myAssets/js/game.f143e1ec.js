(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"0cc9":function(t,e,a){},2532:function(t,e,a){"use strict";var n=a("23e7"),o=a("5a34"),s=a("1d80"),i=a("ab13");n({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(s(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},3535:function(t,e,a){t.exports=a.p+"myAssets/img/tictactoe.2986d938.png"},"44e7":function(t,e,a){var n=a("861d"),o=a("c6b6"),s=a("b622"),i=s("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},"5a34":function(t,e,a){var n=a("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5bf2":function(t,e,a){},"68f5":function(t,e,a){t.exports=a.p+"myAssets/img/tictactoe4d.13b6a6de.jpg"},"7d36":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.checkIfWon?a("div",{staticClass:"h-100 p-0 m-0"},[a("GameOver")],1):a("div",{staticClass:"h-100 p-0 m-0 d-flex"},[a("SideBar"),a("div",{staticClass:"content",staticStyle:{width:"calc(100% - 80px)"}},[t.toggleAboutPage?a("div",[a("About")],1):a("div",[a("GameContent")],1)])],1)},o=[],s=(a("caad"),a("2532"),a("5530")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-0 h-100 bg-info shadow sideBar"},[n("div",{staticClass:"h-100 d-flex flex-column"},[n("div",{staticClass:"mt-2 mb-5 mx-auto mytooltip",on:{click:function(e){return t.homeScreen()}}},[n("img",{staticClass:"img-fluid text-white",attrs:{height:"60px",width:"60px",src:a("9a77"),alt:"Home"}}),n("span",{staticClass:"tooltiptext"},[t._v("Home")])]),n("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.undo()},mouseenter:function(e){t.buttonUndoHover=!0},mouseleave:function(e){t.buttonUndoHover=!1}}},[n("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-return-left",animation:t.buttonUndoHover?"cylon":null}}),n("span",{staticClass:"tooltiptext"},[t._v(" Undo ")])],1),n("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.redo()},mouseenter:function(e){t.buttonRedoHover=!0},mouseleave:function(e){t.buttonRedoHover=!1}}},[n("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-return-right",animation:t.buttonRedoHover?"cylon":null}}),n("span",{staticClass:"tooltiptext"},[t._v(" Redo ")])],1),n("div",{staticClass:"my-auto"}),n("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.about()},mouseenter:function(e){t.buttonAboutHover=!0},mouseleave:function(e){t.buttonAboutHover=!1}}},[n("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"info-circle",animation:t.buttonAboutHover?"throb":null}}),n("span",{staticClass:"tooltiptext"},[t._v(" About ")])],1),n("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.restart()},mouseenter:function(e){t.buttonRestartHover=!0},mouseleave:function(e){t.buttonRestartHover=!1}}},[n("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-counterclockwise",animation:t.buttonRestartHover?"spin-reverse":null}}),n("span",{staticClass:"tooltiptext"},[t._v(" Restart ")])],1),n("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.reset()},mouseenter:function(e){t.buttonResetHover=!0},mouseleave:function(e){t.buttonResetHover=!1}}},[n("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-repeat",animation:t.buttonResetHover?"spin":null}}),n("span",{staticClass:"tooltiptext"},[t._v(" Reset ")])],1)])])},r=[],c=a("a026"),l=new c["default"],u=a("bc3a"),m=a.n(u),d=a("2f62"),v={name:"SideBar",data:function(){return{buttonAboutHover:!1,buttonUndoHover:!1,buttonRedoHover:!1,buttonRestartHover:!1,buttonResetHover:!1}},methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])(["setGame","logout"])),{},{homeScreen:function(){l.$emit("homeScreen")},undo:function(){var t=this;m.a.get("/undo").then((function(e){var a=e.data;t.setGame(a)}))},redo:function(){var t=this;m.a.get("/redo").then((function(e){var a=e.data;t.setGame(a)}))},about:function(){l.$emit("toggleAbout")},restart:function(){var t=this;m.a.post("/restart").then((function(e){var a=e.data;t.setGame(a)}))},reset:function(){var t=this;m.a.post("/reset").then((function(e){e.data;t.logout()}))}})},g=v,f=(a("c2dd"),a("2877")),A=Object(f["a"])(g,i,r,!1,null,null,null),h=A.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column mx-auto mt-0"},[a("div",{staticClass:"statusMessage",attrs:{id:"statusMessage"}},[a("div",{staticClass:"statusMessage__header alert alert-info"},[a("span",{staticClass:"statusMessage__header__header"},[t._v(" "+t._s(t.game.gridArray?"Status Message:":"GAME OVER!")+" ")]),a("br"),t._v(" "+t._s(t.game.statusMessage)+" ")])]),a("div",{staticClass:"game__container m-auto",attrs:{id:"gameContainer"}},t._l(t.game.gridArray.length,(function(e,n){return a("div",[a("table",{staticClass:"grid table w-auto"},t._l(t.game.gridArray[n].length,(function(e,o){return a("div",[a("tr",{staticClass:"row"},t._l(t.game.gridArray[n][o].length,(function(e,s){return a("div",["-"===t.game.gridArray[n][o][s]?a("td",{staticClass:"col",attrs:{id:"notSet"+n+"-"+o+"-"+s},on:{click:function(e){return t.move(n,o,s)}}}):a("td",{staticClass:"col",class:"col__player"+t.getPlayer(n,o,s),on:{click:function(e){return t.move(n,o,s)}}})])})),0)])})),0)])})),0)])},p=[],y={name:"GameContent",computed:Object(s["a"])({},Object(d["c"])(["game"])),methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])(["setGame"])),{},{getPlayer:function(t,e,a){return"X"===this.game.gridArray[t][e][a]?1:2},move:function(t,e,a){var n=this;m.a.post("/move",{col:a,row:e,grid:t},{headers:{"Content-Type":"application/json"}}).then((function(t){var e=t.data;n.setGame(e)}))}}),created:function(){var t=this;m.a.get("/json").then((function(e){var a=e.data;t.setGame(a)}))}},C=y,w=(a("fee3"),Object(f["a"])(C,b,p,!1,null,null,null)),x=w.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row justify-content-center"},[n("h2",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v("About")])]),n("div",{staticClass:"row justify-content-center"},[n("p",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v(" Tic tac toe is a classic game, but the standard version is pointless. It’s far too easy to develop strategies that guarantee you’ll draw or win. You can make the game more interesting by increasing the board size from 3 * 3 to 4 * 4, but even that becomes too simple after a while. To develop a truly intriguing alternative version, you need to move on to higher dimensions. ")])]),n("div",{staticClass:"row justify-content-center"},[n("p",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v(" The following image shows a typical tic tac toe game: "),n("br"),n("img",{staticStyle:{"margin-top":"12px"},attrs:{src:a("3535")}})])]),n("div",{staticClass:"row justify-content-center"},[n("p",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v(' 4D Tic-Tac-Toe is a fresh interpretation of the classic game Tic-Tac-Toe. As most know, Tic-Tac-Toe entails two players trying to place their markers ("X" \'s or "O" \'s) on a 3x3 grid to obtain three markers in a row. 4D Tic-Tac-Toe aims to bring much more strategy to the table by expanding all the way to four dimensions! The grid will be 4x4x4x4, meaning there are two more dimensions to plan around, as well as the length of each dimension growing. 4D Tic- Tac-Toe creates a greater need for a precise strategy. Original Tic-Tac-Toe has only 9 discrete locations to place a marker, 4D will have over 20 times as many at 256! Since each dimension has been increased to four, the requirement for winning has been raised to four in a row as well. ')])]),n("div",{staticClass:"row justify-content-center"},[n("p",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v(" The following image shows a typical tic tac toe 4d game: "),n("br"),n("img",{staticStyle:{"margin-top":"12px",width:"100%"},attrs:{src:a("68f5")}})])])])}],S={name:"About"},G=S,T=Object(f["a"])(G,O,k,!1,null,"04929970",null),j=T.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gameOverScreen flex-column"},[a("h1",[t._v("Game Over")]),a("b-button-group",{staticClass:"mt-5 buttonGroup"},[a("b-button",{staticClass:"m-5",attrs:{size:"lg",variant:"info",pill:""},on:{click:t.restart}},[t._v(" PLAY AGAIN! ")]),a("b-button",{staticClass:"m-5",attrs:{size:"lg",variant:"info",pill:""},on:{click:t.reset}},[t._v(" CHOOSE DIFFERENT PLAYERS! ")])],1),a("div",{staticClass:"overlay"})],1)},R=[],Z={name:"GameOver",methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])(["setGame","logout"])),{},{restart:function(){var t=this;m.a.post("/restart").then((function(e){var a=e.data;t.setGame(a)}))},reset:function(){var t=this;m.a.post("/reset").then((function(e){e.data;t.logout()}))}})},F=Z,L=(a("fb7c"),Object(f["a"])(F,H,R,!1,null,null,null)),U=L.exports,Y={name:"Game",components:{GameOver:U,About:j,GameContent:x,SideBar:h},computed:Object(s["a"])(Object(s["a"])({},Object(d["c"])(["game","isLoggedIn"])),{},{checkIfWon:function(){return console.log(this.game.statusMessage.includes("congratulation")),this.game.statusMessage.includes("congratulation")}}),data:function(){return{toggleAboutPage:!1}},created:function(){var t=this;l.$on("toggleAbout",(function(){t.toggleAboutPage=!t.toggleAboutPage})),l.$on("homeScreen",(function(){t.toggleAboutPage=!1}))}},X=Y,N=Object(f["a"])(X,n,o,!1,null,null,null);e["default"]=N.exports},"7de7":function(t,e,a){},"9a77":function(t,e){t.exports="data:image/png;base64,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"},ab13:function(t,e,a){var n=a("b622"),o=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[o]=!1,"/./"[t](e)}catch(n){}}return!1}},c2dd:function(t,e,a){"use strict";a("5bf2")},caad:function(t,e,a){"use strict";var n=a("23e7"),o=a("4d64").includes,s=a("44d2"),i=a("ae40"),r=i("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!r},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},fb7c:function(t,e,a){"use strict";a("7de7")},fee3:function(t,e,a){"use strict";a("0cc9")}}]);
//# sourceMappingURL=game.f143e1ec.js.map