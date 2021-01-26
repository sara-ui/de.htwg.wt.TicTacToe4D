(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={main:0},a={main:0},i=[];function u(e){return s.p+"myAssets/js/"+({About:"About",game:"game",gameOver:"gameOver",login:"login"}[e]||e)+"."+{About:"2bfbd3b8",game:"534771ac",gameOver:"467d636b",login:"227db752"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={About:1,game:1,gameOver:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="myAssets/css/"+({About:"About",game:"game",gameOver:"gameOver",login:"login"}[e]||e)+"."+{About:"00266026",game:"86cf87f6",gameOver:"952e2892",login:"31d6cfe0"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],m.parentNode.removeChild(m),n(i)},m.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){n("db4d"),e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-100 h-100",attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("96cf"),n("1da1")),u=n("5530"),s=n("bc3a"),c=n.n(s),l=n("2f62"),d=n("1157"),m=n.n(d),f={created:function(){var e=this;this.$workbox&&this.$workbox.addEventListener("waiting",(function(){e.showUpgradeUI=!0}))},computed:Object(u["a"])({},Object(l["c"])(["players","game"])),methods:Object(u["a"])(Object(u["a"])({},Object(l["b"])(["setGame"])),{},{accept:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.showUpgradeUI=!1,t.next=3,e.$workbox.messageSW({type:"SKIP_WAITING"});case 3:case"end":return t.stop()}}),t)})))()}}),mounted:function(){var e={initializr:function(){var e=this;e.id="background",e.bubbles_number=25,e.speed=[1500,1e4],e.max_bubbles_height=e.height,e.shape=!1,m()("#"+e.id).length>0&&m()("#"+e.id).remove(),e.object=m()("<div class='m-0 d-flex' style= overflow:hidden; id='"+e.id+"'> </div>'").appendTo("body"),e.ww=m()(window).width(),e.wh=m()(window).height(),m()("body").prepend("<style>.shape__background__O {z-index: -1;transform-origin:center;width:80px;height:80px;position: absolute}</style><style>.shape__background__X {z-index: -1;transform-origin:center;width:80px;height:80px;position: absolute}</style>");for(var t=0;t<this.bubbles_number;t++)e.generate_bubbles()},generate_bubbles:function(){var e,t=this,n=m()("<div class='shape__background__O'></div>"),r=m()("<div class='shape__background__X'> X </div>"),o=t.shape?t.shape:this.randomNumber(1,2);e=1===o?n.css({border:this.randomNumber(1,4)+"px solid lightblue",borderRadius:"50%"}):r.css({backgroundColor:"inherit",color:"lightblue",fontSize:this.randomNumber(30,100)+"px"});var a=t.randomNumber(.8,1.2);e.css({transform:"scale("+a+") rotate("+t.randomNumber(-360,360)+"deg)",top:t.wh,left:t.randomNumber(-60,t.ww+60)}),e.appendTo(t.object),e.animate({top:t.randomNumber(t.wh/4,t.wh/4-60),transform:"scale("+a+") rotate("+t.randomNumber(-360,360)+"deg)",opacity:0},t.randomNumber(t.speed[0],t.speed[1]),(function(){m()(this).remove(),t.generate_bubbles()}))},randomNumber:function(e,t,n){return n?Math.random()*(t-e+1)+e:Math.floor(Math.random()*(t-e+1)+e)}};e.initializr()}},p=f,b=(n("5c0b"),n("2877")),g=Object(b["a"])(p,o,a,!1,null,null,null),h=g.exports,v=n("a18c");r["default"].use(l["a"]);var w={players:{},game:{statusMessage:"",gridArray:[]}},y=new l["a"].Store({state:w,getters:{players:function(e){return e.players},game:function(e){return e.game}},mutations:{SET_PLAYERS:function(e,t){e.players=t},SET_GAME:function(e,t){e.game=t}},actions:{setPlayers:function(e,t){var n=e.commit;n("SET_PLAYERS",t)},login:function(e,t){var n=e.commit;c.a.post("/players",t).then((function(e){var r=e.data;n("SET_IS_LOGGED_IN",!0),n("SET_PLAYERS",t),n("SET_GAME",r)}))},logout:function(e){var t=e.commit;t("SET_IS_LOGGED_IN",!1),t("SET_PLAYERS",{}),t("SET_GAME",{statusMessage:"",gridArray:[]})},setGame:function(e,t){var n=e.commit;n("SET_GAME",t)}},modules:{}}),_=n("5f5b"),O=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(_["a"]),r["default"].use(O["a"]);var E,S=n("acfa");"serviceWorker"in navigator?(console.log("test"),E=new S["a"]("".concat("","/assets/service-worker.js")),E.addEventListener("controlling",(function(){window.location.reload()})),E.register()):E=null;var A=E;r["default"].prototype.$workbox=A,r["default"].config.productionTip=!1,new r["default"]({router:v["a"],store:y,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7");var r=n("a026"),o=n("8c4f");r["default"].use(o["a"]);var a=[{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/about",name:"About",component:function(){return n.e("About").then(n.bind(null,"f820"))}},{path:"/startGaming",name:"Game",component:function(){return n.e("game").then(n.bind(null,"7d36"))}},{path:"/gameOver",name:"GameOver",component:function(){return n.e("gameOver").then(n.bind(null,"29bf"))}}],i=new o["a"]({mode:"history",routes:a});t["a"]=i}});
//# sourceMappingURL=main.510a7483.js.map