(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game","About"],{"0cc9":function(t,e,a){},2532:function(t,e,a){"use strict";var n=a("23e7"),o=a("5a34"),s=a("1d80"),i=a("ab13");n({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(s(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,a){var n=a("861d"),o=a("c6b6"),s=a("b622"),i=s("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},"5a34":function(t,e,a){var n=a("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5bf2":function(t,e,a){},"7d36":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.checkIfWon?a("div",{staticClass:"h-100 p-0 m-0"},[a("GameOver")],1):a("div",{staticClass:"h-100 p-0 m-0 d-flex"},[a("SideBar"),a("div",{staticClass:"content",staticStyle:{width:"calc(100% - 80px)"}},[a("GameContent")],1)],1)},o=[],s=(a("caad"),a("2532"),a("5530")),i=a("c510"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column mx-auto mt-0"},[a("div",{staticClass:"statusMessage",attrs:{id:"statusMessage"}},[a("div",{staticClass:"statusMessage__header alert alert-info"},[a("span",{staticClass:"statusMessage__header__header"},[t._v(" "+t._s(t.game.gridArray?"Status Message:":"GAME OVER!")+" ")]),a("br"),t._v(" "+t._s(t.game.statusMessage)+" ")])]),a("div",{staticClass:"game__container m-auto",attrs:{id:"gameContainer"}},t._l(t.game.gridArray.length,(function(e,n){return a("div",[a("table",{staticClass:"grid table w-auto"},t._l(t.game.gridArray[n].length,(function(e,o){return a("div",[a("tr",{staticClass:"row"},t._l(t.game.gridArray[n][o].length,(function(e,s){return a("div",["-"===t.game.gridArray[n][o][s]?a("td",{staticClass:"col",attrs:{id:"notSet"+n+"-"+o+"-"+s},on:{click:function(e){return t.move(n,o,s)}}}):a("td",{staticClass:"col",class:"col__player"+t.getPlayer(n,o,s),on:{click:function(e){return t.move(n,o,s)}}})])})),0)])})),0)])})),0)])},c=[],l=a("2f62"),u=a("bc3a"),m=a.n(u),d={name:"GameContent",computed:Object(s["a"])({},Object(l["c"])(["game"])),methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["setGame"])),{},{getPlayer:function(t,e,a){return"X"===this.game.gridArray[t][e][a]?1:2},move:function(t,e,a){var n=this;m.a.post("/move",{col:a,row:e,grid:t},{headers:{"Content-Type":"application/json"}}).then((function(t){var e=t.data;n.setGame(e)}))}}),created:function(){var t=this;m.a.get("/json").then((function(e){var a=e.data;t.setGame(a)}))}},f=d,v=(a("fee3"),a("2877")),h=Object(v["a"])(f,r,c,!1,null,null,null),b=h.exports,g=a("f820"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gameOverScreen flex-column"},[a("h1",[t._v("Game Over")]),a("b-button-group",{staticClass:"mt-5 buttonGroup"},[a("b-button",{staticClass:"m-5",attrs:{size:"lg",variant:"info",pill:""},on:{click:t.restart}},[t._v(" PLAY AGAIN! ")]),a("b-button",{staticClass:"m-5",attrs:{size:"lg",variant:"info",pill:""},on:{click:t.reset}},[t._v(" CHOOSE DIFFERENT PLAYERS! ")])],1),a("div",{staticClass:"overlay"})],1)},C=[],y={name:"GameOver",methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["setGame","logout"])),{},{restart:function(){var t=this;m.a.post("/restart").then((function(e){var a=e.data;t.setGame(a)}))},reset:function(){var t=this;m.a.post("/reset").then((function(e){e.data;t.logout()}))}})},w=y,x=(a("fb7c"),Object(v["a"])(w,p,C,!1,null,null,null)),_=x.exports,O={name:"Game",components:{GameOver:_,About:g["default"],GameContent:b,SideBar:i["a"]},computed:Object(s["a"])(Object(s["a"])({},Object(l["c"])(["game","isLoggedIn"])),{},{checkIfWon:function(){return this.game.statusMessage.includes("congratulation")}}),data:function(){return{toggleAboutPage:!1}}},T=O,j=Object(v["a"])(T,n,o,!1,null,null,null);e["default"]=j.exports},"7de7":function(t,e,a){},ab13:function(t,e,a){var n=a("b622"),o=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[o]=!1,"/./"[t](e)}catch(n){}}return!1}},c2dd:function(t,e,a){"use strict";a("5bf2")},c510:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-0 h-100 bg-info shadow sideBar"},[a("div",{staticClass:"h-100 d-flex flex-column"},[a("div",{staticClass:"mt-2 mb-5 mx-auto mytooltip",on:{click:function(e){return t.homeScreen()}}},[a("img",{staticClass:"img-fluid text-white",attrs:{height:"60px",width:"60px",src:"/assets/images/TicTacToe4D_Transparent.png",alt:"Home"}}),a("span",{staticClass:"tooltiptext"},[t._v("Home")])]),a("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.undo()},mouseenter:function(e){t.buttonUndoHover=!0},mouseleave:function(e){t.buttonUndoHover=!1}}},[a("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-return-left",animation:t.buttonUndoHover?"cylon":null}}),a("span",{staticClass:"tooltiptext"},[t._v(" Undo ")])],1),a("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.redo()},mouseenter:function(e){t.buttonRedoHover=!0},mouseleave:function(e){t.buttonRedoHover=!1}}},[a("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-return-right",animation:t.buttonRedoHover?"cylon":null}}),a("span",{staticClass:"tooltiptext"},[t._v(" Redo ")])],1),a("div",{staticClass:"my-auto"}),a("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.about()},mouseenter:function(e){t.buttonAboutHover=!0},mouseleave:function(e){t.buttonAboutHover=!1}}},[a("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"info-circle",animation:t.buttonAboutHover?"throb":null}}),a("span",{staticClass:"tooltiptext"},[t._v(" About ")])],1),a("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.restart()},mouseenter:function(e){t.buttonRestartHover=!0},mouseleave:function(e){t.buttonRestartHover=!1}}},[a("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-counterclockwise",animation:t.buttonRestartHover?"spin-reverse":null}}),a("span",{staticClass:"tooltiptext"},[t._v(" Restart ")])],1),a("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.reset()},mouseenter:function(e){t.buttonResetHover=!0},mouseleave:function(e){t.buttonResetHover=!1}}},[a("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-repeat",animation:t.buttonResetHover?"spin":null}}),a("span",{staticClass:"tooltiptext"},[t._v(" Reset ")])],1)])])},o=[],s=a("5530"),i=a("bc3a"),r=a.n(i),c=a("2f62"),l={name:"SideBar",data:function(){return{buttonAboutHover:!1,buttonUndoHover:!1,buttonRedoHover:!1,buttonRestartHover:!1,buttonResetHover:!1}},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["setGame","logout"])),{},{homeScreen:function(){this.$router.push({name:"Game"})},undo:function(){var t=this;r.a.get("/undo").then((function(e){var a=e.data;t.setGame(a)}))},redo:function(){var t=this;r.a.get("/redo").then((function(e){var a=e.data;t.setGame(a)}))},about:function(){this.$router.push({name:"About"})},restart:function(){var t=this;r.a.post("/restart").then((function(e){var a=e.data;t.setGame(a)}))},reset:function(){var t=this;r.a.post("/reset").then((function(e){e.data;t.logout()}))}})},u=l,m=(a("c2dd"),a("2877")),d=Object(m["a"])(u,n,o,!1,null,null,null);e["a"]=d.exports},caad:function(t,e,a){"use strict";var n=a("23e7"),o=a("4d64").includes,s=a("44d2"),i=a("ae40"),r=i("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!r},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h-100 p-0 m-0 d-flex"},[a("SideBar"),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"container-fluid",staticStyle:{width:"calc(100% - 80px)"}},[a("div",{staticClass:"row justify-content-center"},[a("h2",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v("About")])]),a("div",{staticClass:"row justify-content-center"},[a("p",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v(" Tic tac toe is a classic game, but the standard version is pointless. It’s far too easy to develop strategies that guarantee you’ll draw or win. You can make the game more interesting by increasing the board size from 3 * 3 to 4 * 4, but even that becomes too simple after a while. To develop a truly intriguing alternative version, you need to move on to higher dimensions. ")])]),a("div",{staticClass:"row justify-content-center"},[a("p",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v(" The following image shows a typical tic tac toe game: "),a("br"),a("img",{staticStyle:{"margin-top":"12px"},attrs:{src:"/assets/images/tictactoe.png"}})])]),a("div",{staticClass:"row justify-content-center"},[a("p",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v(' 4D Tic-Tac-Toe is a fresh interpretation of the classic game Tic-Tac-Toe. As most know, Tic-Tac-Toe entails two players trying to place their markers ("X" \'s or "O" \'s) on a 3x3 grid to obtain three markers in a row. 4D Tic-Tac-Toe aims to bring much more strategy to the table by expanding all the way to four dimensions! The grid will be 4x4x4x4, meaning there are two more dimensions to plan around, as well as the length of each dimension growing. 4D Tic- Tac-Toe creates a greater need for a precise strategy. Original Tic-Tac-Toe has only 9 discrete locations to place a marker, 4D will have over 20 times as many at 256! Since each dimension has been increased to four, the requirement for winning has been raised to four in a row as well. ')])]),a("div",{staticClass:"row justify-content-center"},[a("p",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v(" The following image shows a typical tic tac toe 4d game: "),a("br"),a("img",{staticStyle:{"margin-top":"12px",width:"100%"},attrs:{src:"/assets/images/tictactoe4d.jpg"}})])])])])}],s=a("c510"),i={name:"About",components:{SideBar:s["a"]}},r=i,c=a("2877"),l=Object(c["a"])(r,n,o,!1,null,"1f29c8d7",null);e["default"]=l.exports},fb7c:function(t,e,a){"use strict";a("7de7")},fee3:function(t,e,a){"use strict";a("0cc9")}}]);
//# sourceMappingURL=game.48e688b7.js.map