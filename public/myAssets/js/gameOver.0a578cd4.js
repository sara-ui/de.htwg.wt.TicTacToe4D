(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gameOver"],{"29bf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gameOverScreen flex-column"},[a("h1",[t._v("Game Over")]),a("b-button-group",{staticClass:"mt-5 buttonGroup"},[a("b-button",{staticClass:"m-5",attrs:{size:"lg",variant:"info",pill:""},on:{click:t.restart}},[t._v(" PLAY AGAIN! ")]),a("b-button",{staticClass:"m-5",attrs:{size:"lg",variant:"info",pill:""},on:{click:t.reset}},[t._v(" LOG OUT ")])],1),a("div",{staticClass:"overlay"})],1)},s=[],o=a("5530"),c=a("bc3a"),r=a.n(c),i=a("2f62"),l={name:"GameOver",computed:Object(o["a"])({},mapGetters(["players","game"])),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["setGame","logout"])),{},{restart:function(){var t=this;console.log(this.players),console.log(this.game),r.a.get("/restart").then((function(e){var a=e.data;t.setGame(a),t.$router.push({name:"Game"})}))},reset:function(){r.a.get("/signOut").then((function(t){t.data;window.location.href="/"}))}})},u=l,b=(a("fb7c"),a("2877")),m=Object(b["a"])(u,n,s,!1,null,null,null);e["default"]=m.exports},"7de7":function(t,e,a){},fb7c:function(t,e,a){"use strict";a("7de7")}}]);
//# sourceMappingURL=gameOver.0a578cd4.js.map