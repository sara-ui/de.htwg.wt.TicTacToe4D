(function(e){function t(t){for(var r,o,s=t[0],u=t[1],c=t[2],d=0,l=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);m&&m(t);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={main:0},a={main:0},i=[];function s(e){return u.p+"myAssets/js/"+({game:"game",login:"login"}[e]||e)+"."+{game:"28d9da0d",login:"1122764b"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={game:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="myAssets/css/"+({game:"game",login:"login"}[e]||e)+"."+{game:"149c7618",login:"31d6cfe0"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){c=l[s],d=c.getAttribute("data-href");if(d===r||d===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],m.parentNode.removeChild(m),n(i)},m.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=s(e);var l=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var m=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){n("db4d"),e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-100 h-100",attrs:{id:"app"}},[n("router-view")],1)},a=[],i=n("5530"),s=n("bc3a"),u=n.n(s),c=n("2f62"),d=n("1157"),l=n.n(d),m={created:function(){var e=this;u.a.post("/isLoggedIn").then((function(t){var n=t.data;e.setIsLoggedIn(n.isLoggedIn)}))},computed:Object(i["a"])({},Object(c["c"])(["isLoggedIn","players","game"])),methods:Object(i["a"])({},Object(c["b"])(["setIsLoggedIn","setGame"])),watch:{isLoggedIn:{handler:function(e){var t=e?"Game":"Login";this.$router.push({path:t})},immediate:!0}},mounted:function(){var e={initializr:function(){var e=this;e.id="background",e.bubbles_number=25,e.speed=[1500,1e4],e.max_bubbles_height=e.height,e.shape=!1,l()("#"+e.id).length>0&&l()("#"+e.id).remove(),e.object=l()("<div class='m-0 d-flex' style= overflow:hidden; id='"+e.id+"'> </div>'").appendTo("body"),e.ww=l()(window).width(),e.wh=l()(window).height(),l()("body").prepend("<style>.shape__background__O {z-index: -1;transform-origin:center;width:80px;height:80px;position: absolute}</style><style>.shape__background__X {z-index: -1;transform-origin:center;width:80px;height:80px;position: absolute}</style>");for(var t=0;t<this.bubbles_number;t++)e.generate_bubbles()},generate_bubbles:function(){var e,t=this,n=l()("<div class='shape__background__O'></div>"),r=l()("<div class='shape__background__X'> X </div>"),o=t.shape?t.shape:this.randomNumber(1,2);e=1===o?n.css({border:this.randomNumber(1,4)+"px solid lightblue",borderRadius:"50%"}):r.css({backgroundColor:"inherit",color:"lightblue",fontSize:this.randomNumber(30,100)+"px"});var a=t.randomNumber(.8,1.2);e.css({transform:"scale("+a+") rotate("+t.randomNumber(-360,360)+"deg)",top:t.wh,left:t.randomNumber(-60,t.ww+60)}),e.appendTo(t.object),e.animate({top:t.randomNumber(t.wh/4,t.wh/4-60),transform:"scale("+a+") rotate("+t.randomNumber(-360,360)+"deg)",opacity:0},t.randomNumber(t.speed[0],t.speed[1]),(function(){l()(this).remove(),t.generate_bubbles()}))},randomNumber:function(e,t,n){return n?Math.random()*(t-e+1)+e:Math.floor(Math.random()*(t-e+1)+e)}};e.initializr()}},f=m,g=(n("5c0b"),n("2877")),p=Object(g["a"])(f,o,a,!1,null,null,null),h=p.exports,b=(n("d3b7"),n("8c4f"));r["default"].use(b["a"]);var v=[{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/game",name:"Game",component:function(){return n.e("game").then(n.bind(null,"7d36"))}}],_=new b["a"]({mode:"history",routes:v}),y=_;r["default"].use(c["a"]);var w={players:{},isLoggedIn:!1,game:{statusMessage:"",gridArray:[]}},E=new c["a"].Store({state:w,getters:{players:function(e){return e.players},isLoggedIn:function(e){return e.isLoggedIn},game:function(e){return e.game}},mutations:{SET_PLAYERS:function(e,t){e.players=t},SET_IS_LOGGED_IN:function(e,t){e.isLoggedIn=t},SET_GAME:function(e,t){e.game=t}},actions:{setPlayers:function(e,t){var n=e.commit;n("SET_PLAYERS",t)},setIsLoggedIn:function(e,t){var n=e.commit;n("SET_IS_LOGGED_IN",t)},login:function(e,t){var n=e.commit;u.a.post("/players",t).then((function(e){var r=e.data;n("SET_IS_LOGGED_IN",!0),n("SET_PLAYERS",t),n("SET_GAME",r)}))},logout:function(e){var t=e.commit;t("SET_IS_LOGGED_IN",!1),t("SET_PLAYERS",{}),t("SET_GAME",{statusMessage:"",gridArray:[]})},setGame:function(e,t){var n=e.commit;n("SET_GAME",t)}},modules:{}}),S=n("5f5b"),L=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(S["a"]),r["default"].use(L["a"]),r["default"].config.productionTip=!1,new r["default"]({router:y,store:E,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=main.0f787c96.js.map