(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={main:0},a={main:0},i=[];function u(e){return s.p+"myAssets/js/"+({game:"game",login:"login"}[e]||e)+"."+{game:"8ff66f3f",login:"9342396c"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={game:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="myAssets/css/"+({game:"game",login:"login"}[e]||e)+"."+{game:"187c9d55",login:"31d6cfe0"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){n("db4d"),e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-100 h-100",attrs:{id:"app"}},[n("router-view")],1)},a=[],i=n("5530"),u=n("bc3a"),s=n.n(u),c=n("2f62"),l={created:function(){var e=this;s.a.post("/isLoggedIn").then((function(t){var n=t.data;e.setIsLoggedIn(n.isLoggedIn)}))},computed:Object(i["a"])({},Object(c["c"])(["isLoggedIn"])),methods:Object(i["a"])({},Object(c["b"])(["setIsLoggedIn"])),watch:{isLoggedIn:{handler:function(e){var t=e?"Game":"Login";this.$router.push({path:t})},immediate:!0}}},f=l,d=(n("5c0b"),n("2877")),g=Object(d["a"])(f,o,a,!1,null,null,null),p=g.exports,m=(n("d3b7"),n("8c4f"));r["default"].use(m["a"]);var h=[{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/game",name:"Game",component:function(){return n.e("game").then(n.bind(null,"7d36"))}}],v=new m["a"]({mode:"history",routes:h}),b=v;r["default"].use(c["a"]);var y={players:{},isLoggedIn:!1,game:{statusMessage:"",gridArray:[]}},E=new c["a"].Store({state:y,getters:{players:function(e){return e.players},isLoggedIn:function(e){return e.isLoggedIn},game:function(e){return e.game}},mutations:{SET_PLAYERS:function(e,t){e.players=t},SET_IS_LOGGED_IN:function(e,t){e.isLoggedIn=t},SET_GAME:function(e,t){e.game=t}},actions:{setPlayers:function(e,t){var n=e.commit;n("SET_PLAYERS",t)},setIsLoggedIn:function(e,t){var n=e.commit;n("SET_IS_LOGGED_IN",t)},login:function(e,t){var n=e.commit;s.a.post("/players",t).then((function(e){var r=e.data;n("SET_IS_LOGGED_IN",!0),n("SET_PLAYERS",t),n("SET_GAME",r)}))}},modules:{}}),_=n("5f5b"),L=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(_["a"]),r["default"].use(L["a"]),r["default"].config.productionTip=!1,new r["default"]({router:b,store:E,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=main.4b7004a7.js.map