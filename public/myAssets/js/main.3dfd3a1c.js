(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={main:0},a={main:0},u=[];function i(e){return c.p+"myAssets/js/"+({about:"about",game:"game",login:"login"}[e]||e)+"."+{about:"06fc977c",game:"8c639673",login:"90322fc3"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={game:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="myAssets/css/"+({about:"about",game:"game",login:"login"}[e]||e)+"."+{about:"31d6cfe0",game:"c16b295b",login:"31d6cfe0"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){n("db4d"),e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-100 h-100",attrs:{id:"app"}},[n("router-view")],1)},a=[],u=n("5530"),i=n("bc3a"),c=n.n(i),s=n("2f62"),l={created:function(){var e=this;c.a.post("/isLoggedIn").then((function(t){var n=t.data;e.setIsLoggedIn(n.isLoggedIn)}))},computed:Object(u["a"])({},Object(s["c"])(["isLoggedIn"])),methods:Object(u["a"])({},Object(s["b"])(["setIsLoggedIn"])),watch:{isLoggedIn:{handler:function(e){var t=e?"Game":"Login";this.$router.push({path:t})},immediate:!0}}},f=l,d=(n("5c0b"),n("2877")),g=Object(d["a"])(f,o,a,!1,null,null,null),p=g.exports,m=(n("d3b7"),n("8c4f"));r["default"].use(m["a"]);var h=[{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/game",name:"Game",component:function(){return n.e("game").then(n.bind(null,"7d36"))}}],b=new m["a"]({mode:"history",routes:h}),v=b;r["default"].use(s["a"]);var y={players:{},isLoggedIn:!1,game:{statusMessage:"",gridArray:[]}},E=new s["a"].Store({state:y,getters:{players:function(e){return e.players},isLoggedIn:function(e){return e.isLoggedIn},game:function(e){return e.game}},mutations:{SET_PLAYERS:function(e,t){e.players=t},SET_IS_LOGGED_IN:function(e,t){e.isLoggedIn=t},SET_GAME:function(e,t){e.game=t}},actions:{setPlayers:function(e,t){var n=e.commit;n("SET_PLAYERS",t)},setIsLoggedIn:function(e,t){var n=e.commit;n("SET_IS_LOGGED_IN",t)},login:function(e,t){var n=e.commit;c.a.post("/players",t).then((function(e){var r=e.data;n("SET_IS_LOGGED_IN",!0),n("SET_PLAYERS",t),n("SET_GAME",r)}))}},modules:{}}),_=n("5f5b"),L=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(_["a"]),r["default"].use(L["a"]),r["default"].config.productionTip=!1,new r["default"]({router:v,store:E,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=main.3dfd3a1c.js.map