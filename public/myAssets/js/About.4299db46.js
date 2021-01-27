(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["About"],{"539c":function(t,e,o){"use strict";o("e8b9")},"7c08":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"p-0 h-100 bg-info shadow sideBar"},[o("div",{staticClass:"h-100 d-flex flex-column"},[o("div",{staticClass:"mt-2 mb-5 mx-auto mytooltip",on:{click:function(e){return t.homeScreen()}}},[o("img",{staticClass:"img-fluid text-white",attrs:{height:"60px",width:"60px",src:"/myAssets/img/TicTacToe4D_Transparent.png",alt:"Home"}}),o("span",{staticClass:"tooltiptext"},[t._v("Home")])]),o("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.undo()},mouseenter:function(e){t.buttonUndoHover=!0},mouseleave:function(e){t.buttonUndoHover=!1}}},[o("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-return-left",animation:t.buttonUndoHover?"cylon":null}}),o("span",{staticClass:"tooltiptext"},[t._v(" Undo ")])],1),o("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.redo()},mouseenter:function(e){t.buttonRedoHover=!0},mouseleave:function(e){t.buttonRedoHover=!1}}},[o("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-return-right",animation:t.buttonRedoHover?"cylon":null}}),o("span",{staticClass:"tooltiptext"},[t._v(" Redo ")])],1),o("div",{staticClass:"my-auto"}),o("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.about()},mouseenter:function(e){t.buttonAboutHover=!0},mouseleave:function(e){t.buttonAboutHover=!1}}},[o("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"info-circle",animation:t.buttonAboutHover?"throb":null}}),o("span",{staticClass:"tooltiptext"},[t._v(" About ")])],1),o("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.restart()},mouseenter:function(e){t.buttonRestartHover=!0},mouseleave:function(e){t.buttonRestartHover=!1}}},[o("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-counterclockwise",animation:t.buttonRestartHover?"spin-reverse":null}}),o("span",{staticClass:"tooltiptext"},[t._v(" Restart ")])],1),o("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.reset()},mouseenter:function(e){t.buttonResetHover=!0},mouseleave:function(e){t.buttonResetHover=!1}}},[o("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-repeat",animation:t.buttonResetHover?"spin":null}}),o("span",{staticClass:"tooltiptext"},[t._v(" Reset ")])],1),o("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.logMeOut()},mouseenter:function(e){t.buttonLogOutHover=!0},mouseleave:function(e){t.buttonLogOutHover=!1}}},[o("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"door-open",animation:t.buttonLogOutHover?"throb":null}}),o("span",{staticClass:"tooltiptext"},[t._v(" Logout ")])],1),o("a",{staticClass:"mt-2 mb-4 mx-auto mytooltip",attrs:{href:"/password/change"},on:{mouseenter:function(e){t.buttonPWHover=!0},mouseleave:function(e){t.buttonPWHover=!1}}},[o("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"tools",animation:t.buttonPWHover?"throb":null}}),o("span",{staticClass:"tooltiptext"},[t._v(" Change Password ")])],1)])])},a=[],i=o("5530"),s=o("bc3a"),r=o.n(s),c=o("2f62"),u={name:"SideBar",data:function(){return{buttonAboutHover:!1,buttonUndoHover:!1,buttonRedoHover:!1,buttonRestartHover:!1,buttonResetHover:!1,buttonLogOutHover:!1,buttonPWHover:!1}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["setGame","logout"])),{},{homeScreen:function(){this.$router.push({name:"Game"})},undo:function(){var t=this;r.a.get("/undo").then((function(e){var o=e.data;t.setGame(o)}))},redo:function(){var t=this;r.a.get("/redo").then((function(e){var o=e.data;t.setGame(o)}))},about:function(){this.$router.push({name:"About"})},restart:function(){var t=this;r.a.get("/restart").then((function(e){var o=e.data;t.setGame(o)}))},reset:function(){var t=this;r.a.get("/reset").then((function(e){e.data;t.logout(),t.$router.push({name:"Login"})}))},logMeOut:function(){r.a.get("/signOut").then((function(t){t.data;window.location.href="/"}))}})},l=u,m=(o("a736"),o("2877")),h=Object(m["a"])(l,n,a,!1,null,null,null);e["a"]=h.exports},a0a6:function(t,e,o){},a736:function(t,e,o){"use strict";o("a0a6")},e8b9:function(t,e,o){},f820:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"h-100 p-0 m-0 d-flex"},[o("SideBar"),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content",staticStyle:{width:"calc(100% - 80px)"}},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row justify-content-center"},[o("h2",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v("About")])]),o("div",{staticClass:"row justify-content-center"},[o("p",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v(" Tic tac toe is a classic game, but the standard version is pointless. It’s far too easy to develop strategies that guarantee you’ll draw or win. You can make the game more interesting by increasing the board size from 3 * 3 to 4 * 4, but even that becomes too simple after a while. To develop a truly intriguing alternative version, you need to move on to higher dimensions. ")])]),o("div",{staticClass:"row justify-content-center"},[o("p",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v(" The following image shows a typical tic tac toe game: "),o("br"),o("img",{staticStyle:{"margin-top":"12px"},attrs:{src:"/myAssets/img/tictactoe.png"}})])]),o("div",{staticClass:"row justify-content-center"},[o("p",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v(' 4D Tic-Tac-Toe is a fresh interpretation of the classic game Tic-Tac-Toe. As most know, Tic-Tac-Toe entails two players trying to place their markers ("X" \'s or "O" \'s) on a 3x3 grid to obtain three markers in a row. 4D Tic-Tac-Toe aims to bring much more strategy to the table by expanding all the way to four dimensions! The grid will be 4x4x4x4, meaning there are two more dimensions to plan around, as well as the length of each dimension growing. 4D Tic- Tac-Toe creates a greater need for a precise strategy. Original Tic-Tac-Toe has only 9 discrete locations to place a marker, 4D will have over 20 times as many at 256! Since each dimension has been increased to four, the requirement for winning has been raised to four in a row as well. ')])]),o("div",{staticClass:"row justify-content-center"},[o("p",{staticStyle:{"line-height":"1.5",color:"black"}},[t._v(" The following image shows a typical tic tac toe 4d game: "),o("br"),o("img",{staticStyle:{"margin-top":"12px",width:"100%"},attrs:{src:"/myAssets/img/tictactoe4d.jpg"}})])])])])}],i=o("7c08"),s={name:"About",components:{SideBar:i["a"]}},r=s,c=(o("539c"),o("2877")),u=Object(c["a"])(r,n,a,!1,null,"50ef0178",null);e["default"]=u.exports}}]);
//# sourceMappingURL=About.4299db46.js.map