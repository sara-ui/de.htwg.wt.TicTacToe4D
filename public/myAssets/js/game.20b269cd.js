(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"0cc9":function(t,e,o){},3535:function(t,e,o){t.exports=o.p+"myAssets/img/tictactoe.2986d938.png"},"5bf2":function(t,e,o){},"68f5":function(t,e,o){t.exports=o.p+"myAssets/img/tictactoe4d.13b6a6de.jpg"},"7d36":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"h-100 p-0 m-0 d-flex"},[o("SideBar"),o("div",{staticClass:"content",staticStyle:{width:"calc(100% - 80px)"}},[t.toggleAboutPage?o("div",[o("About")],1):o("div",[o("GameContent")],1)])],1)},n=[],s=o("5530"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-0 h-100 bg-info shadow sideBar"},[a("div",{staticClass:"h-100 d-flex flex-column"},[a("div",{staticClass:"mt-2 mb-5 mx-auto mytooltip",on:{click:function(e){return t.homeScreen()}}},[a("img",{staticClass:"img-fluid text-white",attrs:{height:"60px",width:"60px",src:o("9a77"),alt:"Home"}}),a("span",{staticClass:"tooltiptext"},[t._v("Home")])]),a("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.undo()},mouseenter:function(e){t.buttonUndoHover=!0},mouseleave:function(e){t.buttonUndoHover=!1}}},[a("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-return-left",animation:t.buttonUndoHover?"cylon":null}}),a("span",{staticClass:"tooltiptext"},[t._v(" Undo ")])],1),a("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.redo()},mouseenter:function(e){t.buttonRedoHover=!0},mouseleave:function(e){t.buttonRedoHover=!1}}},[a("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-return-right",animation:t.buttonRedoHover?"cylon":null}}),a("span",{staticClass:"tooltiptext"},[t._v(" Redo ")])],1),a("div",{staticClass:"my-auto"}),a("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.about()},mouseenter:function(e){t.buttonAboutHover=!0},mouseleave:function(e){t.buttonAboutHover=!1}}},[a("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"info-circle",animation:t.buttonAboutHover?"throb":null}}),a("span",{staticClass:"tooltiptext"},[t._v(" About ")])],1),a("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.restart()},mouseenter:function(e){t.buttonRestartHover=!0},mouseleave:function(e){t.buttonRestartHover=!1}}},[a("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-counterclockwise",animation:t.buttonRestartHover?"spin-reverse":null}}),a("span",{staticClass:"tooltiptext"},[t._v(" Restart ")])],1),a("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.restart()},mouseenter:function(e){t.buttonResetHover=!0},mouseleave:function(e){t.buttonResetHover=!1}}},[a("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-repeat",animation:t.buttonResetHover?"spin":null}}),a("span",{staticClass:"tooltiptext"},[t._v(" Reset ")])],1)])])},r=[],c=o("a026"),l=new c["default"],u={name:"SideBar",data:function(){return{buttonAboutHover:!1,buttonUndoHover:!1,buttonRedoHover:!1,buttonRestartHover:!1,buttonResetHover:!1}},methods:{homeScreen:function(){l.$emit("homeScreen")},undo:function(){console.log("undo")},redo:function(){console.log("redo")},about:function(){l.$emit("toggleAbout")},restart:function(){console.log("restart")},reset:function(){console.log("reset")}}},m=u,A=(o("c2dd"),o("2877")),d=Object(A["a"])(m,i,r,!1,null,null,null),g=d.exports,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex flex-column mx-auto mt-0"},[o("div",{staticClass:"statusMessage",attrs:{id:"statusMessage"}}),o("div",{staticClass:"game__container m-auto",attrs:{id:"gameContainer"}},t._l(t.game.gridArray.length,(function(e){return o("table",{staticClass:"grid table w-auto"},[t._v(" "+t._s(e)+" "),t._l(t.game.gridArray[e].length,(function(a){return o("tr",{staticClass:"row"},[t._v(" "+t._s(a)+" "),t._l(t.game.gridArray[e][a].length,(function(n){return o("div",[t._v(" "+t._s(n)+" "),"-"===t.game.gridArray[e][a][n]?o("td",{staticClass:"col",attrs:{id:"notSet"+e+"-"+a+"-"+n}}):o("td",{staticClass:"col",class:"col__player"+t.getPlayer(e,a,n)})])}))],2)}))],2)})),0)])},b=[],f=o("2f62"),h={name:"GameContent",computed:Object(s["a"])({},Object(f["c"])(["game"])),methods:{getPlayer:function(t,e,o){return"X"===this.game.gridArray[t][e][o]?1:2}},created:function(){console.log(this.game)}},p=h,y=(o("fee3"),Object(A["a"])(p,v,b,!1,null,null,null)),w=y.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row justify-content-center"},[a("h1",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v("About")])]),a("div",{staticClass:"row justify-content-center"},[a("p",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v(" Tic tac toe is a classic game, but the standard version is pointless. It’s far too easy to develop strategies that guarantee you’ll draw or win. You can make the game more interesting by increasing the board size from 3 * 3 to 4 * 4, but even that becomes too simple after a while. To develop a truly intriguing alternative version, you need to move on to higher dimensions. ")])]),a("div",{staticClass:"row justify-content-center"},[a("p",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v(" The following image shows a typical tic tac toe game: "),a("br"),a("img",{staticStyle:{"margin-top":"12px"},attrs:{src:o("3535")}})])]),a("div",{staticClass:"row justify-content-center"},[a("p",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v(' 4D Tic-Tac-Toe is a fresh interpretation of the classic game Tic-Tac-Toe. As most know, Tic-Tac-Toe entails two players trying to place their markers ("X" \'s or "O" \'s) on a 3x3 grid to obtain three markers in a row. 4D Tic-Tac-Toe aims to bring much more strategy to the table by expanding all the way to four dimensions! The grid will be 4x4x4x4, meaning there are two more dimensions to plan around, as well as the length of each dimension growing. 4D Tic- Tac-Toe creates a greater need for a precise strategy. Original Tic-Tac-Toe has only 9 discrete locations to place a marker, 4D will have over 20 times as many at 256! Since each dimension has been increased to four, the requirement for winning has been raised to four in a row as well. ')])]),a("div",{staticClass:"row justify-content-center"},[a("p",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v(" The following image shows a typical tic tac toe 4d game: "),a("br"),a("img",{staticStyle:{"margin-top":"12px",width:"100%"},attrs:{src:o("68f5")}})])])])}],k={name:"About"},S=k,H=Object(A["a"])(S,C,x,!1,null,"a989b5b0",null),Z=H.exports,T={name:"Game",components:{About:Z,GameContent:w,SideBar:g},data:function(){return{toggleAboutPage:!1}},computed:Object(s["a"])({},Object(f["c"])(["players","game"])),methods:Object(s["a"])({},Object(f["b"])(["setGame"])),created:function(){var t=this;l.$on("toggleAbout",(function(){t.toggleAboutPage=!t.toggleAboutPage})),l.$on("homeScreen",(function(){t.toggleAboutPage=!1}))}},U=T,F=Object(A["a"])(U,a,n,!1,null,null,null);e["default"]=F.exports},"9a77":function(t,e){t.exports="data:image/png;base64,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"},c2dd:function(t,e,o){"use strict";o("5bf2")},fee3:function(t,e,o){"use strict";o("0cc9")}}]);
//# sourceMappingURL=game.20b269cd.js.map