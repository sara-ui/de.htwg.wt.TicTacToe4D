(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"0b25":function(t,e,n){var r=n("a691"),i=n("50c4");t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw RangeError("Wrong length or index");return n}},1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),o=n("825a"),a=n("1d80"),s=n("4840"),c=n("8aa5"),u=n("50c4"),f=n("14c3"),h=n("9263"),l=n("d039"),d=[].push,p=Math.min,v=4294967295,y=!l((function(){return!RegExp(v,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),o=void 0===n?v:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);var s,c,u,f=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,y=new RegExp(t.source,l+"g");while(s=h.call(y,r)){if(c=y.lastIndex,c>p&&(f.push(r.slice(p,s.index)),s.length>1&&s.index<r.length&&d.apply(f,s.slice(1)),u=s[0].length,p=c,f.length>=o))break;y.lastIndex===s.index&&y.lastIndex++}return p===r.length?!u&&y.test("")||f.push(""):f.push(r.slice(p)),f.length>o?f.slice(0,o):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=a(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var a=n(r,t,this,i,r!==e);if(a.done)return a.value;var h=o(t),l=String(this),d=s(h,RegExp),b=h.unicode,g=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(y?"y":"g"),x=new d(y?h:"^(?:"+h.source+")",g),m=void 0===i?v:i>>>0;if(0===m)return[];if(0===l.length)return null===f(x,l)?[l]:[];var w=0,A=0,T=[];while(A<l.length){x.lastIndex=y?A:0;var E,R=f(x,y?l:l.slice(A));if(null===R||(E=p(u(x.lastIndex+(y?0:A)),l.length))===w)A=c(l,A,b);else{if(T.push(l.slice(w,A)),T.length===m)return T;for(var M=1;M<=R.length-1;M++)if(T.push(R[M]),T.length===m)return T;A=w=E}}return T.push(l.slice(w)),T}]}),!y)},"145e":function(t,e,n){"use strict";var r=n("7b0b"),i=n("23cb"),o=n("50c4"),a=Math.min;t.exports=[].copyWithin||function(t,e){var n=r(this),s=o(n.length),c=i(t,s),u=i(e,s),f=arguments.length>2?arguments[2]:void 0,h=a((void 0===f?s:i(f,s))-u,s-c),l=1;u<c&&c<u+h&&(l=-1,u+=h-1,c+=h-1);while(h-- >0)u in n?n[c]=n[u]:delete n[c],c+=l,u+=l;return n}},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"170b":function(t,e,n){"use strict";var r=n("ebb5"),i=n("50c4"),o=n("23cb"),a=n("4840"),s=r.aTypedArray,c=r.exportTypedArrayMethod;c("subarray",(function(t,e){var n=s(this),r=n.length,c=o(t,r);return new(a(n,n.constructor))(n.buffer,n.byteOffset+c*n.BYTES_PER_ELEMENT,i((void 0===e?r:o(e,r))-c))}))},"182d":function(t,e,n){var r=n("f8cd");t.exports=function(t,e){var n=r(t);if(n%e)throw RangeError("Wrong offset");return n}},"219c":function(t,e,n){"use strict";var r=n("ebb5"),i=r.aTypedArray,o=r.exportTypedArrayMethod,a=[].sort;o("sort",(function(t){return a.call(i(this),t)}))},2532:function(t,e,n){"use strict";var r=n("23e7"),i=n("5a34"),o=n("1d80"),a=n("ab13");r({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(o(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"25a1":function(t,e,n){"use strict";var r=n("ebb5"),i=n("d58f").right,o=r.aTypedArray,a=r.exportTypedArrayMethod;a("reduceRight",(function(t){return i(o(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},2954:function(t,e,n){"use strict";var r=n("ebb5"),i=n("4840"),o=n("d039"),a=r.aTypedArray,s=r.aTypedArrayConstructor,c=r.exportTypedArrayMethod,u=[].slice,f=o((function(){new Int8Array(1).slice()}));c("slice",(function(t,e){var n=u.call(a(this),t,e),r=i(this,this.constructor),o=0,c=n.length,f=new(s(r))(c);while(c>o)f[o]=n[o++];return f}),f)},3280:function(t,e,n){"use strict";var r=n("ebb5"),i=n("e58c"),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("lastIndexOf",(function(t){return i.apply(o(this),arguments)}))},"35cc":function(t,e,n){},"3a7b":function(t,e,n){"use strict";var r=n("ebb5"),i=n("b727").findIndex,o=r.aTypedArray,a=r.exportTypedArrayMethod;a("findIndex",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},"3c5d":function(t,e,n){"use strict";var r=n("ebb5"),i=n("50c4"),o=n("182d"),a=n("7b0b"),s=n("d039"),c=r.aTypedArray,u=r.exportTypedArrayMethod,f=s((function(){new Int8Array(1).set({})}));u("set",(function(t){c(this);var e=o(arguments.length>1?arguments[1]:void 0,1),n=this.length,r=a(t),s=i(r.length),u=0;if(s+e>n)throw RangeError("Wrong length");while(u<s)this[e+u]=r[u++]}),f)},"3fcc":function(t,e,n){"use strict";var r=n("ebb5"),i=n("b727").map,o=n("4840"),a=r.aTypedArray,s=r.aTypedArrayConstructor,c=r.exportTypedArrayMethod;c("map",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0,(function(t,e){return new(s(o(t,t.constructor)))(e)}))}))},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),a=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5f96":function(t,e,n){"use strict";var r=n("ebb5"),i=r.aTypedArray,o=r.exportTypedArrayMethod,a=[].join;o("join",(function(t){return a.apply(i(this),arguments)}))},"60bd":function(t,e,n){"use strict";var r=n("da84"),i=n("ebb5"),o=n("e260"),a=n("b622"),s=a("iterator"),c=r.Uint8Array,u=o.values,f=o.keys,h=o.entries,l=i.aTypedArray,d=i.exportTypedArrayMethod,p=c&&c.prototype[s],v=!!p&&("values"==p.name||void 0==p.name),y=function(){return u.call(l(this))};d("entries",(function(){return h.call(l(this))})),d("keys",(function(){return f.call(l(this))})),d("values",y,!v),d(s,y,!v)},"621a":function(t,e,n){"use strict";var r=n("da84"),i=n("83ab"),o=n("a981"),a=n("9112"),s=n("e2cc"),c=n("d039"),u=n("19aa"),f=n("a691"),h=n("50c4"),l=n("0b25"),d=n("77a7"),p=n("e163"),v=n("d2bb"),y=n("241c").f,b=n("9bf2").f,g=n("81d5"),x=n("d44e"),m=n("69f3"),w=m.get,A=m.set,T="ArrayBuffer",E="DataView",R="prototype",M="Wrong length",I="Wrong index",C=r[T],S=C,O=r[E],_=O&&O[R],H=Object.prototype,L=r.RangeError,U=d.pack,P=d.unpack,k=function(t){return[255&t]},B=function(t){return[255&t,t>>8&255]},D=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},W=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},j=function(t){return U(t,23,4)},F=function(t){return U(t,52,8)},N=function(t,e){b(t[R],e,{get:function(){return w(this)[e]}})},Y=function(t,e,n,r){var i=l(n),o=w(t);if(i+e>o.byteLength)throw L(I);var a=w(o.buffer).bytes,s=i+o.byteOffset,c=a.slice(s,s+e);return r?c:c.reverse()},$=function(t,e,n,r,i,o){var a=l(n),s=w(t);if(a+e>s.byteLength)throw L(I);for(var c=w(s.buffer).bytes,u=a+s.byteOffset,f=r(+i),h=0;h<e;h++)c[u+h]=f[o?h:e-h-1]};if(o){if(!c((function(){C(1)}))||!c((function(){new C(-1)}))||c((function(){return new C,new C(1.5),new C(NaN),C.name!=T}))){S=function(t){return u(this,S),new C(l(t))};for(var G,V=S[R]=C[R],z=y(C),X=0;z.length>X;)(G=z[X++])in S||a(S,G,C[G]);V.constructor=S}v&&p(_)!==H&&v(_,H);var J=new O(new S(2)),K=_.setInt8;J.setInt8(0,2147483648),J.setInt8(1,2147483649),!J.getInt8(0)&&J.getInt8(1)||s(_,{setInt8:function(t,e){K.call(this,t,e<<24>>24)},setUint8:function(t,e){K.call(this,t,e<<24>>24)}},{unsafe:!0})}else S=function(t){u(this,S,T);var e=l(t);A(this,{bytes:g.call(new Array(e),0),byteLength:e}),i||(this.byteLength=e)},O=function(t,e,n){u(this,O,E),u(t,S,E);var r=w(t).byteLength,o=f(e);if(o<0||o>r)throw L("Wrong offset");if(n=void 0===n?r-o:h(n),o+n>r)throw L(M);A(this,{buffer:t,byteLength:n,byteOffset:o}),i||(this.buffer=t,this.byteLength=n,this.byteOffset=o)},i&&(N(S,"byteLength"),N(O,"buffer"),N(O,"byteLength"),N(O,"byteOffset")),s(O[R],{getInt8:function(t){return Y(this,1,t)[0]<<24>>24},getUint8:function(t){return Y(this,1,t)[0]},getInt16:function(t){var e=Y(this,2,t,arguments.length>1?arguments[1]:void 0);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=Y(this,2,t,arguments.length>1?arguments[1]:void 0);return e[1]<<8|e[0]},getInt32:function(t){return W(Y(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return W(Y(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return P(Y(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return P(Y(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,e){$(this,1,t,k,e)},setUint8:function(t,e){$(this,1,t,k,e)},setInt16:function(t,e){$(this,2,t,B,e,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,e){$(this,2,t,B,e,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,e){$(this,4,t,D,e,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,e){$(this,4,t,D,e,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,e){$(this,4,t,j,e,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,e){$(this,8,t,F,e,arguments.length>2?arguments[2]:void 0)}});x(S,T),x(O,E),t.exports={ArrayBuffer:S,DataView:O}},"649e":function(t,e,n){"use strict";var r=n("ebb5"),i=n("b727").some,o=r.aTypedArray,a=r.exportTypedArrayMethod;a("some",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),o=function(t){return function(e,n){var o,a,s=String(i(e)),c=r(n),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},7156:function(t,e,n){var r=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},"72f7":function(t,e,n){"use strict";var r=n("ebb5").exportTypedArrayMethod,i=n("d039"),o=n("da84"),a=o.Uint8Array,s=a&&a.prototype||{},c=[].toString,u=[].join;i((function(){c.call({})}))&&(c=function(){return u.call(this)});var f=s.toString!=c;r("toString",c,f)},"735e":function(t,e,n){"use strict";var r=n("ebb5"),i=n("81d5"),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("fill",(function(t){return i.apply(o(this),arguments)}))},"74e8":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("83ab"),a=n("8aa7"),s=n("ebb5"),c=n("621a"),u=n("19aa"),f=n("5c6c"),h=n("9112"),l=n("50c4"),d=n("0b25"),p=n("182d"),v=n("c04e"),y=n("5135"),b=n("f5df"),g=n("861d"),x=n("7c73"),m=n("d2bb"),w=n("241c").f,A=n("a078"),T=n("b727").forEach,E=n("2626"),R=n("9bf2"),M=n("06cf"),I=n("69f3"),C=n("7156"),S=I.get,O=I.set,_=R.f,H=M.f,L=Math.round,U=i.RangeError,P=c.ArrayBuffer,k=c.DataView,B=s.NATIVE_ARRAY_BUFFER_VIEWS,D=s.TYPED_ARRAY_TAG,W=s.TypedArray,j=s.TypedArrayPrototype,F=s.aTypedArrayConstructor,N=s.isTypedArray,Y="BYTES_PER_ELEMENT",$="Wrong length",G=function(t,e){var n=0,r=e.length,i=new(F(t))(r);while(r>n)i[n]=e[n++];return i},V=function(t,e){_(t,e,{get:function(){return S(this)[e]}})},z=function(t){var e;return t instanceof P||"ArrayBuffer"==(e=b(t))||"SharedArrayBuffer"==e},X=function(t,e){return N(t)&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},J=function(t,e){return X(t,e=v(e,!0))?f(2,t[e]):H(t,e)},K=function(t,e,n){return!(X(t,e=v(e,!0))&&g(n)&&y(n,"value"))||y(n,"get")||y(n,"set")||n.configurable||y(n,"writable")&&!n.writable||y(n,"enumerable")&&!n.enumerable?_(t,e,n):(t[e]=n.value,t)};o?(B||(M.f=J,R.f=K,V(j,"buffer"),V(j,"byteOffset"),V(j,"byteLength"),V(j,"length")),r({target:"Object",stat:!0,forced:!B},{getOwnPropertyDescriptor:J,defineProperty:K}),t.exports=function(t,e,n){var o=t.match(/\d+$/)[0]/8,s=t+(n?"Clamped":"")+"Array",c="get"+t,f="set"+t,v=i[s],y=v,b=y&&y.prototype,R={},M=function(t,e){var n=S(t);return n.view[c](e*o+n.byteOffset,!0)},I=function(t,e,r){var i=S(t);n&&(r=(r=L(r))<0?0:r>255?255:255&r),i.view[f](e*o+i.byteOffset,r,!0)},H=function(t,e){_(t,e,{get:function(){return M(this,e)},set:function(t){return I(this,e,t)},enumerable:!0})};B?a&&(y=e((function(t,e,n,r){return u(t,y,s),C(function(){return g(e)?z(e)?void 0!==r?new v(e,p(n,o),r):void 0!==n?new v(e,p(n,o)):new v(e):N(e)?G(y,e):A.call(y,e):new v(d(e))}(),t,y)})),m&&m(y,W),T(w(v),(function(t){t in y||h(y,t,v[t])})),y.prototype=b):(y=e((function(t,e,n,r){u(t,y,s);var i,a,c,f=0,h=0;if(g(e)){if(!z(e))return N(e)?G(y,e):A.call(y,e);i=e,h=p(n,o);var v=e.byteLength;if(void 0===r){if(v%o)throw U($);if(a=v-h,a<0)throw U($)}else if(a=l(r)*o,a+h>v)throw U($);c=a/o}else c=d(e),a=c*o,i=new P(a);O(t,{buffer:i,byteOffset:h,byteLength:a,length:c,view:new k(i)});while(f<c)H(t,f++)})),m&&m(y,W),b=y.prototype=x(j)),b.constructor!==y&&h(b,"constructor",y),D&&h(b,D,s),R[s]=y,r({global:!0,forced:y!=v,sham:!B},R),Y in y||h(y,Y,o),Y in b||h(b,Y,o),E(s)}):t.exports=function(){}},"77a7":function(t,e){var n=1/0,r=Math.abs,i=Math.pow,o=Math.floor,a=Math.log,s=Math.LN2,c=function(t,e,c){var u,f,h,l=new Array(c),d=8*c-e-1,p=(1<<d)-1,v=p>>1,y=23===e?i(2,-24)-i(2,-77):0,b=t<0||0===t&&1/t<0?1:0,g=0;for(t=r(t),t!=t||t===n?(f=t!=t?1:0,u=p):(u=o(a(t)/s),t*(h=i(2,-u))<1&&(u--,h*=2),t+=u+v>=1?y/h:y*i(2,1-v),t*h>=2&&(u++,h/=2),u+v>=p?(f=0,u=p):u+v>=1?(f=(t*h-1)*i(2,e),u+=v):(f=t*i(2,v-1)*i(2,e),u=0));e>=8;l[g++]=255&f,f/=256,e-=8);for(u=u<<e|f,d+=e;d>0;l[g++]=255&u,u/=256,d-=8);return l[--g]|=128*b,l},u=function(t,e){var r,o=t.length,a=8*o-e-1,s=(1<<a)-1,c=s>>1,u=a-7,f=o-1,h=t[f--],l=127&h;for(h>>=7;u>0;l=256*l+t[f],f--,u-=8);for(r=l&(1<<-u)-1,l>>=-u,u+=e;u>0;r=256*r+t[f],f--,u-=8);if(0===l)l=1-c;else{if(l===s)return r?NaN:h?-n:n;r+=i(2,e),l-=c}return(h?-1:1)*r*i(2,l-e)};t.exports={pack:c,unpack:u}},"7c08":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-0 h-100 bg-info shadow sideBar"},[n("div",{staticClass:"h-100 d-flex flex-column"},[n("div",{staticClass:"mt-2 mb-5 mx-auto mytooltip",on:{click:function(e){return t.homeScreen()}}},[n("img",{staticClass:"img-fluid text-white",attrs:{height:"60px",width:"60px",src:"/myAssets/img/TicTacToe4D_Transparent.png",alt:"Home"}}),n("span",{staticClass:"tooltiptext"},[t._v("Home")])]),n("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.undo()},mouseenter:function(e){t.buttonUndoHover=!0},mouseleave:function(e){t.buttonUndoHover=!1}}},[n("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-return-left",animation:t.buttonUndoHover?"cylon":null}}),n("span",{staticClass:"tooltiptext"},[t._v(" Undo ")])],1),n("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.redo()},mouseenter:function(e){t.buttonRedoHover=!0},mouseleave:function(e){t.buttonRedoHover=!1}}},[n("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-return-right",animation:t.buttonRedoHover?"cylon":null}}),n("span",{staticClass:"tooltiptext"},[t._v(" Redo ")])],1),n("div",{staticClass:"my-auto"}),n("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.about()},mouseenter:function(e){t.buttonAboutHover=!0},mouseleave:function(e){t.buttonAboutHover=!1}}},[n("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"info-circle",animation:t.buttonAboutHover?"throb":null}}),n("span",{staticClass:"tooltiptext"},[t._v(" About ")])],1),n("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.restart()},mouseenter:function(e){t.buttonRestartHover=!0},mouseleave:function(e){t.buttonRestartHover=!1}}},[n("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-counterclockwise",animation:t.buttonRestartHover?"spin-reverse":null}}),n("span",{staticClass:"tooltiptext"},[t._v(" Restart ")])],1),n("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.reset()},mouseenter:function(e){t.buttonResetHover=!0},mouseleave:function(e){t.buttonResetHover=!1}}},[n("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"arrow-repeat",animation:t.buttonResetHover?"spin":null}}),n("span",{staticClass:"tooltiptext"},[t._v(" Reset ")])],1),n("div",{staticClass:"mt-2 mb-4 mx-auto mytooltip",on:{click:function(e){return t.logMeOut()},mouseenter:function(e){t.buttonLogOutHover=!0},mouseleave:function(e){t.buttonLogOutHover=!1}}},[n("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"door-open",animation:t.buttonLogOutHover?"throb":null}}),n("span",{staticClass:"tooltiptext"},[t._v(" Logout ")])],1),n("a",{staticClass:"mt-2 mb-4 mx-auto mytooltip",attrs:{href:"/password/change"},on:{mouseenter:function(e){t.buttonPWHover=!0},mouseleave:function(e){t.buttonPWHover=!1}}},[n("b-icon",{staticClass:"text-white m-0 h2",attrs:{icon:"tools",animation:t.buttonPWHover?"throb":null}}),n("span",{staticClass:"tooltiptext"},[t._v(" Change Password ")])],1)])])},i=[],o=n("5530"),a=n("bc3a"),s=n.n(a),c=n("2f62"),u={name:"SideBar",data:function(){return{buttonAboutHover:!1,buttonUndoHover:!1,buttonRedoHover:!1,buttonRestartHover:!1,buttonResetHover:!1,buttonLogOutHover:!1,buttonPWHover:!1}},methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["setGame","logout"])),{},{homeScreen:function(){this.$router.push({name:"Game"})},undo:function(){var t=this;s.a.get("/undo").then((function(e){var n=e.data;t.setGame(n)}))},redo:function(){var t=this;s.a.get("/redo").then((function(e){var n=e.data;t.setGame(n)}))},about:function(){this.$router.push({name:"About"})},restart:function(){var t=this;s.a.get("/restart").then((function(e){var n=e.data;t.setGame(n)}))},reset:function(){var t=this;s.a.get("/reset").then((function(e){e.data;t.logout(),t.$router.push({name:"Login"})}))},logMeOut:function(){s.a.get("/signOut").then((function(t){t.data;window.location.href="/"}))}})},f=u,h=(n("a736"),n("2877")),l=Object(h["a"])(f,r,i,!1,null,null,null);e["a"]=l.exports},"7d36":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-100 p-0 m-0 d-flex"},[n("SideBar"),n("div",{staticClass:"content",staticStyle:{width:"calc(100% - 80px)"}},[n("GameContent")],1)],1)},i=[],o=n("7c08"),a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"statusMessage"},[n("div",{staticClass:"alert alert-info",attrs:{id:"status",role:"alert"}})]),n("div",{staticClass:"w-100 h-100",attrs:{id:"game"}})])}],c=(n("cb29"),n("7db0"),n("4160"),n("caad"),n("d3b7"),n("ac1f"),n("2532"),n("1276"),n("cfc3"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("159b"),n("a18c")),u={mounted:function(){this.$nextTick((function(){!function(t){function e(t,e,n){var r=new Float32Array([t||0,e||0,n||0]);return r.transformMat4=function(t,e){var n=t[0],r=t[1],i=t[2],o=e[3]*n+e[7]*r+e[11]*i+e[15];return o=o||1,this[0]=(e[0]*n+e[4]*r+e[8]*i+e[12])/o,this[1]=(e[1]*n+e[5]*r+e[9]*i+e[13])/o,this[2]=(e[2]*n+e[6]*r+e[10]*i+e[14])/o,this},Object.defineProperty(r,"x",{get:function(){return this[0]},set:function(t){this[0]=t}}),Object.defineProperty(r,"y",{get:function(){return this[1]},set:function(t){this[1]=t}}),Object.defineProperty(r,"z",{get:function(){return this[2]},set:function(t){this[2]=t}}),r}function n(){var e=new Float32Array(16);return e.identity=function(){return this[0]=1,this[1]=0,this[2]=0,this[3]=0,this[4]=0,this[5]=1,this[6]=0,this[7]=0,this[8]=0,this[9]=0,this[10]=1,this[11]=0,this[12]=0,this[13]=0,this[14]=0,this[15]=1,this},e.rotateX=function(e){var n=t.sin(e),r=t.cos(e),i=this[4],o=this[5],a=this[6],s=this[7],c=this[8],u=this[9],f=this[10],h=this[11];return this[4]=i*r+c*n,this[5]=o*r+u*n,this[6]=a*r+f*n,this[7]=s*r+h*n,this[8]=c*r-i*n,this[9]=u*r-o*n,this[10]=f*r-a*n,this[11]=h*r-s*n,this},e.rotateY=function(e){var n=t.sin(e),r=t.cos(e),i=this[0],o=this[1],a=this[2],s=this[3],c=this[8],u=this[9],f=this[10],h=this[11];return this[0]=i*r-c*n,this[1]=o*r-u*n,this[2]=a*r-f*n,this[3]=s*r-h*n,this[8]=i*n+c*r,this[9]=o*n+u*r,this[10]=a*n+f*r,this[11]=s*n+h*r,this},e.multiply=function(t,e){var n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],s=t[5],c=t[6],u=t[7],f=t[8],h=t[9],l=t[10],d=t[11],p=t[12],v=t[13],y=t[14],b=t[15],g=e[0],x=e[1],m=e[2],w=e[3];return this[0]=g*n+x*a+m*f+w*p,this[1]=g*r+x*s+m*h+w*v,this[2]=g*i+x*c+m*l+w*y,this[3]=g*o+x*u+m*d+w*b,g=e[4],x=e[5],m=e[6],w=e[7],this[4]=g*n+x*a+m*f+w*p,this[5]=g*r+x*s+m*h+w*v,this[6]=g*i+x*c+m*l+w*y,this[7]=g*o+x*u+m*d+w*b,g=e[8],x=e[9],m=e[10],w=e[11],this[8]=g*n+x*a+m*f+w*p,this[9]=g*r+x*s+m*h+w*v,this[10]=g*i+x*c+m*l+w*y,this[11]=g*o+x*u+m*d+w*b,g=e[12],x=e[13],m=e[14],w=e[15],this[12]=g*n+x*a+m*f+w*p,this[13]=g*r+x*s+m*h+w*v,this[14]=g*i+x*c+m*l+w*y,this[15]=g*o+x*u+m*d+w*b,this},e}var r=1,i=2,o=0,a=o;function s(){for(var t=0;t<27;t++)f[t].s=0;a=0}function u(){m.font="30px Codystar",m.fillStyle="#fff",m.textAlign="center",m.fillText(d,x.width/2,x.height/8)}var f=[],h=0,l=0,d="",p=["","#0f0","#f00","#fff"];function v(){requestAnimationFrame(v),m.clearRect(0,0,x.width,x.height),w.isDown&&(h-=.001*(w.x-w.xb),l+=.001*(w.y-w.yb)),h*=.9,l*=.9,y.update(l,h),f.forEach((function(t){t.project()})),f.sort((function(t,e){return e.zIndex-t.zIndex})),f.forEach((function(t){t.draw()})),d&&u(),w.xb=w.x,w.yb=w.y}var y={mvMatrix:n().identity(),currentRotationMatrix:n().identity(),newRotationMatrix:n().identity(),update:function(t,e){this.newRotationMatrix.identity().rotateX(t).rotateY(e),this.currentRotationMatrix.multiply(this.newRotationMatrix,this.currentRotationMatrix),this.mvMatrix.identity().multiply(this.mvMatrix,this.currentRotationMatrix)}},b=function(t,n,r,i,o){var a=x.width/6;this.id=t,this.width=o,this.coord=e((n-1)*a,(r-1)*a,(i-1)*a),this.p2d=e(),this.x=0,this.y=0,this.w=0,this.s=0,this.zIndex=0};b.prototype.project=function(){this.p2d.transformMat4(this.coord,y.mvMatrix),this.zIndex=this.p2d.z;var t=400/(800+this.p2d.z);this.x=.5*x.width+this.p2d.x*t,this.y=.5*x.height+this.p2d.y*t,this.w=t*this.width*4/5},b.prototype.draw=function(){a&&!this.s||(m.beginPath(),m.arc(this.x,this.y,this.w,0,2*t.PI),m.fillStyle="lightgrey",m.fillStyle=p[this.s],m.strokeStyle="#000",m.fill(),m.stroke())};for(var g,x={width:0,height:0,rx:1,ry:1,elem:document.createElement("canvas"),resize:function(){var t=this.elem;for(this.offsetWidth=this.elem.offsetWidth,this.offsetHeight=this.elem.offsetHeight,this.width&&(this.rx=this.width/this.offsetWidth,this.ry=this.height/this.offsetHeight),this.left=0,this.top=0;null!=t;t=t.offsetParent)this.left+=t.offsetLeft,this.top+=t.offsetTop},init:function(){var t=this.elem.getContext("2d");return document.getElementById("game").append(this.elem),this.resize(),this.width=this.elem.width=this.offsetWidth-80,this.height=this.elem.height=this.offsetHeight,window.addEventListener("resize",x.resize.bind(x),!1),t}},m=x.init(),w=function(e){var n={x:0,y:0,canvas:e,touchMode:!1,isDown:!1,draging:!1,xb:0,yb:0};return[[window,"mousemove,touchmove",function(t){this.touchMode=t.targetTouches,this.touchMode&&t.preventDefault();var e=this.touchMode?this.touchMode[0]:t;this.x=(e.clientX-this.canvas.left)*this.canvas.rx,this.y=(e.clientY-this.canvas.top)*this.canvas.ry,this.isDown&&(this.draging=!0)}],[e.elem,"mousedown,touchstart",function(e){this.touchMode=e.targetTouches,this.touchMode&&e.preventDefault();var n=this.touchMode?this.touchMode[0]:e;this.xb=this.x=(n.clientX-this.canvas.left)*this.canvas.rx,this.yb=this.y=(n.clientY-this.canvas.top)*this.canvas.ry,this.isDown=!0,setTimeout(function(){!this.isDown&&t.abs(this.xb-this.x)<11&&t.abs(this.yb-this.y)<11&&this.click(e)}.bind(this),200)}],[window,"mouseup,touchend,touchcancel",function(t){t.preventDefault(),this.isDown=!1,this.draging=!1}]].forEach(function(t){for(var e=0,r=t[1].split(",");e<r.length;e++)t[0].addEventListener(r[e],t[2].bind(n),!1)}.bind(n)),n}(x),A=0;A<4;A++)for(var T=0;T<4;T++)for(var E=0;E<4;E++){var R=A+"-"+T+"-"+E;f.push(new b(R,E,T,A,x.width/11))}function M(t){var e=f.find((function(e){return e.id===t}));return e}function I(t){var e=t.statusMessage,n=t.gridArray;document.getElementById("status").innerHTML=e,e.includes("congratulation")&&c["a"].push({name:"GameOver"});for(var o=0;o<n.length;o++)for(var a=0;a<n[o].length;a++)for(var s=0;s<n[o][a].length;s++)"-"!==n[o][a][s]?M(o+"-"+a+"-"+s).s="X"===n[o][a][s]?i:r:M(o+"-"+a+"-"+s).s=0}function C(t){g=new WebSocket("ws://localhost:9000/websocket"),console.info("Connecting to WebSocket..."),g.onopen=function(){console.info("Connected to server: "+g.url)},g.onmessage=function(t){var e=JSON.parse(t.data);I(e)},g.onerror=function(t){return console.error(t)},g.onclose=function(){return setTimeout(C,2e3)}}C(1),fetch("/json").then((function(t){return t.json()})).then((function(t){return I(t)}));var S=!1;w.click=function(){a&&s(),d="";var e=null;if(f.forEach((function(n){var r=w.x-n.x,i=w.y-n.y;t.sqrt(r*r+i*i)<n.w&&(e=n)})),e){var n=e.id.split("-");e.s=S?i:r,S=!S,g.send(JSON.stringify({col:parseInt(n[2]),row:parseInt(n[1]),grid:parseInt(n[0])}))}e&&0===e.s&&(e.s=i)},v()}(Math)}))}},f=u,h=(n("bb86"),n("2877")),l=Object(h["a"])(f,a,s,!1,null,null,null),d=l.exports,p={name:"Game",components:{GameContent:d,SideBar:o["a"]}},v=p,y=Object(h["a"])(v,r,i,!1,null,null,null);e["default"]=y.exports},"7db0":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").find,o=n("44d2"),a=n("ae40"),s="find",c=!0,u=a(s);s in[]&&Array(1)[s]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!u},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},"81d5":function(t,e,n){"use strict";var r=n("7b0b"),i=n("23cb"),o=n("50c4");t.exports=function(t){var e=r(this),n=o(e.length),a=arguments.length,s=i(a>1?arguments[1]:void 0,n),c=a>2?arguments[2]:void 0,u=void 0===c?n:i(c,n);while(u>s)e[s++]=t;return e}},"82f8":function(t,e,n){"use strict";var r=n("ebb5"),i=n("4d64").includes,o=r.aTypedArray,a=r.exportTypedArrayMethod;a("includes",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8aa7":function(t,e,n){var r=n("da84"),i=n("d039"),o=n("1c7e"),a=n("ebb5").NATIVE_ARRAY_BUFFER_VIEWS,s=r.ArrayBuffer,c=r.Int8Array;t.exports=!a||!i((function(){c(1)}))||!i((function(){new c(-1)}))||!o((function(t){new c,new c(null),new c(1.5),new c(t)}),!0)||i((function(){return 1!==new c(new s(2),1,void 0).length}))},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),o=RegExp.prototype.exec,a=String.prototype.replace,s=o,c=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],h=c||f||u;h&&(s=function(t){var e,n,i,s,h=this,l=u&&h.sticky,d=r.call(h),p=h.source,v=0,y=t;return l&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),y=String(t).slice(h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==t[h.lastIndex-1])&&(p="(?: "+p+")",y=" "+y,v++),n=new RegExp("^(?:"+p+")",d)),f&&(n=new RegExp("^"+p+"$(?!\\s)",d)),c&&(e=h.lastIndex),i=o.call(l?n:h,y),l?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=h.lastIndex,h.lastIndex+=i[0].length):h.lastIndex=0:c&&i&&(h.lastIndex=h.global?i.index+i[0].length:e),f&&i&&i.length>1&&a.call(i[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i}),t.exports=s},"9a8c":function(t,e,n){"use strict";var r=n("ebb5"),i=n("145e"),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("copyWithin",(function(t,e){return i.call(o(this),t,e,arguments.length>2?arguments[2]:void 0)}))},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a078:function(t,e,n){var r=n("7b0b"),i=n("50c4"),o=n("35a1"),a=n("e95a"),s=n("0366"),c=n("ebb5").aTypedArrayConstructor;t.exports=function(t){var e,n,u,f,h,l,d=r(t),p=arguments.length,v=p>1?arguments[1]:void 0,y=void 0!==v,b=o(d);if(void 0!=b&&!a(b)){h=b.call(d),l=h.next,d=[];while(!(f=l.call(h)).done)d.push(f.value)}for(y&&p>2&&(v=s(v,arguments[2],2)),n=i(d.length),u=new(c(this))(n),e=0;n>e;e++)u[e]=y?v(d[e],e):d[e];return u}},a0a6:function(t,e,n){},a736:function(t,e,n){"use strict";n("a0a6")},a975:function(t,e,n){"use strict";var r=n("ebb5"),i=n("b727").every,o=r.aTypedArray,a=r.exportTypedArrayMethod;a("every",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},a981:function(t,e){t.exports="undefined"!==typeof ArrayBuffer&&"undefined"!==typeof DataView},ab13:function(t,e,n){var r=n("b622"),i=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(r){}}return!1}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b39a:function(t,e,n){"use strict";var r=n("da84"),i=n("ebb5"),o=n("d039"),a=r.Int8Array,s=i.aTypedArray,c=i.exportTypedArrayMethod,u=[].toLocaleString,f=[].slice,h=!!a&&o((function(){u.call(new a(1))})),l=o((function(){return[1,2].toLocaleString()!=new a([1,2]).toLocaleString()}))||!o((function(){a.prototype.toLocaleString.call([1,2])}));c("toLocaleString",(function(){return u.apply(h?f.call(s(this)):s(this),arguments)}),l)},bb86:function(t,e,n){"use strict";n("35cc")},c1ac:function(t,e,n){"use strict";var r=n("ebb5"),i=n("b727").filter,o=n("4840"),a=r.aTypedArray,s=r.aTypedArrayConstructor,c=r.exportTypedArrayMethod;c("filter",(function(t){var e=i(a(this),t,arguments.length>1?arguments[1]:void 0),n=o(this,this.constructor),r=0,c=e.length,u=new(s(n))(c);while(c>r)u[r]=e[r++];return u}))},ca91:function(t,e,n){"use strict";var r=n("ebb5"),i=n("d58f").left,o=r.aTypedArray,a=r.exportTypedArrayMethod;a("reduce",(function(t){return i(o(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,o=n("44d2"),a=n("ae40"),s=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!s},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cb29:function(t,e,n){var r=n("23e7"),i=n("81d5"),o=n("44d2");r({target:"Array",proto:!0},{fill:i}),o("fill")},cd26:function(t,e,n){"use strict";var r=n("ebb5"),i=r.aTypedArray,o=r.exportTypedArrayMethod,a=Math.floor;o("reverse",(function(){var t,e=this,n=i(e).length,r=a(n/2),o=0;while(o<r)t=e[o],e[o++]=e[--n],e[n]=t;return e}))},cfc3:function(t,e,n){var r=n("74e8");r("Float32",(function(t){return function(e,n,r){return t(this,e,n,r)}}))},d139:function(t,e,n){"use strict";var r=n("ebb5"),i=n("b727").find,o=r.aTypedArray,a=r.exportTypedArrayMethod;a("find",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},d58f:function(t,e,n){var r=n("1c0b"),i=n("7b0b"),o=n("44ad"),a=n("50c4"),s=function(t){return function(e,n,s,c){r(n);var u=i(e),f=o(u),h=a(u.length),l=t?h-1:0,d=t?-1:1;if(s<2)while(1){if(l in f){c=f[l],l+=d;break}if(l+=d,t?l<0:h<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:h>l;l+=d)l in f&&(c=n(c,f[l],l,u));return c}};t.exports={left:s(!1),right:s(!0)}},d5d6:function(t,e,n){"use strict";var r=n("ebb5"),i=n("b727").forEach,o=r.aTypedArray,a=r.exportTypedArrayMethod;a("forEach",(function(t){i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),o=n("b622"),a=n("9263"),s=n("9112"),c=o("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),h=o("replace"),l=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),d=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,h){var p=o(t),v=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),y=v&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!v||!y||"replace"===t&&(!u||!f||l)||"split"===t&&!d){var b=/./[p],g=n(p,""[t],(function(t,e,n,r,i){return e.exec===a?v&&!i?{done:!0,value:b.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:l}),x=g[0],m=g[1];r(String.prototype,t,x),r(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}h&&s(RegExp.prototype[p],"sham",!0)}},e58c:function(t,e,n){"use strict";var r=n("fc6a"),i=n("a691"),o=n("50c4"),a=n("a640"),s=n("ae40"),c=Math.min,u=[].lastIndexOf,f=!!u&&1/[1].lastIndexOf(1,-0)<0,h=a("lastIndexOf"),l=s("indexOf",{ACCESSORS:!0,1:0}),d=f||!h||!l;t.exports=d?function(t){if(f)return u.apply(this,arguments)||0;var e=r(this),n=o(e.length),a=n-1;for(arguments.length>1&&(a=c(a,i(arguments[1]))),a<0&&(a=n+a);a>=0;a--)if(a in e&&e[a]===t)return a||0;return-1}:u},e91f:function(t,e,n){"use strict";var r=n("ebb5"),i=n("4d64").indexOf,o=r.aTypedArray,a=r.exportTypedArrayMethod;a("indexOf",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},ebb5:function(t,e,n){"use strict";var r,i=n("a981"),o=n("83ab"),a=n("da84"),s=n("861d"),c=n("5135"),u=n("f5df"),f=n("9112"),h=n("6eeb"),l=n("9bf2").f,d=n("e163"),p=n("d2bb"),v=n("b622"),y=n("90e3"),b=a.Int8Array,g=b&&b.prototype,x=a.Uint8ClampedArray,m=x&&x.prototype,w=b&&d(b),A=g&&d(g),T=Object.prototype,E=T.isPrototypeOf,R=v("toStringTag"),M=y("TYPED_ARRAY_TAG"),I=i&&!!p&&"Opera"!==u(a.opera),C=!1,S={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},O={BigInt64Array:8,BigUint64Array:8},_=function(t){if(!s(t))return!1;var e=u(t);return"DataView"===e||c(S,e)||c(O,e)},H=function(t){if(!s(t))return!1;var e=u(t);return c(S,e)||c(O,e)},L=function(t){if(H(t))return t;throw TypeError("Target is not a typed array")},U=function(t){if(p){if(E.call(w,t))return t}else for(var e in S)if(c(S,r)){var n=a[e];if(n&&(t===n||E.call(n,t)))return t}throw TypeError("Target is not a typed array constructor")},P=function(t,e,n){if(o){if(n)for(var r in S){var i=a[r];i&&c(i.prototype,t)&&delete i.prototype[t]}A[t]&&!n||h(A,t,n?e:I&&g[t]||e)}},k=function(t,e,n){var r,i;if(o){if(p){if(n)for(r in S)i=a[r],i&&c(i,t)&&delete i[t];if(w[t]&&!n)return;try{return h(w,t,n?e:I&&b[t]||e)}catch(s){}}for(r in S)i=a[r],!i||i[t]&&!n||h(i,t,e)}};for(r in S)a[r]||(I=!1);if((!I||"function"!=typeof w||w===Function.prototype)&&(w=function(){throw TypeError("Incorrect invocation")},I))for(r in S)a[r]&&p(a[r],w);if((!I||!A||A===T)&&(A=w.prototype,I))for(r in S)a[r]&&p(a[r].prototype,A);if(I&&d(m)!==A&&p(m,A),o&&!c(A,R))for(r in C=!0,l(A,R,{get:function(){return s(this)?this[M]:void 0}}),S)a[r]&&f(a[r],M,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:I,TYPED_ARRAY_TAG:C&&M,aTypedArray:L,aTypedArrayConstructor:U,exportTypedArrayMethod:P,exportTypedArrayStaticMethod:k,isView:_,isTypedArray:H,TypedArray:w,TypedArrayPrototype:A}},f8cd:function(t,e,n){var r=n("a691");t.exports=function(t){var e=r(t);if(e<0)throw RangeError("The argument can't be less than 0");return e}}}]);
//# sourceMappingURL=game.f0ee1ed8.js.map