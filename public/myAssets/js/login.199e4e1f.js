(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a55b:function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row justify-content-center w-100 m-0 h-100"},[e("div",{staticClass:"col-lg-8 col-md-12 d-flex"},[e("div",{staticClass:"m-auto w-100",staticStyle:{width:"100%","max-width":"420px"}},[e("div",{staticClass:"d-flex flex-column"},[t._m(0),e("login-form",{attrs:{payload:t.payload},on:{submit:t.submit}})],1)])])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-center mb-4"},[e("img",{staticClass:"img-fluid mb-4",attrs:{src:"/assets/images/TicTacToe4D_Transparent.png",alt:"TicTacToe4D"}}),e("h2",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("TicTacToe 4D")])])}],s=e("5530"),i=e("2f62"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{staticClass:"needs-validation",on:{submit:function(a){return t.$emit("submit")}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"player1"}},[t._v("First Player Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.player1,expression:"payload.player1"}],staticClass:"form-control",attrs:{type:"text",name:"player1",id:"player1","aria-describedby":"player1Help",required:""},domProps:{value:t.payload.player1},on:{input:function(a){a.target.composing||t.$set(t.payload,"player1",a.target.value)}}}),e("small",{staticClass:"form-text text-muted",attrs:{id:"player1Help"}},[t._v("For example: Alex")])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"player2"}},[t._v("Second Player Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.player2,expression:"payload.player2"}],staticClass:"form-control",attrs:{type:"text",name:"player2",id:"player2","aria-describedby":"player2Help",required:""},domProps:{value:t.payload.player2},on:{input:function(a){a.target.composing||t.$set(t.payload,"player2",a.target.value)}}}),e("small",{staticClass:"form-text text-muted",attrs:{id:"player2Help"}},[t._v("For example: Simon")])]),e("button",{staticClass:"btn btn-primary btn-block btn-lg mb-5",attrs:{type:"submit"}},[t._v("Start The Game")])])},n=[],p={name:"LoginForm",props:{payload:{type:String,required:!0}}},c=p,m=e("2877"),d=Object(m["a"])(c,o,n,!1,null,"14dde53d",null),u=d.exports,y={name:"Login",components:{LoginForm:u},data:function(){return{payload:{player1:"",player2:""}}},methods:Object(s["a"])({submit:function(t){t.preventDefault(),this.login(this.payload)}},Object(i["b"])(["login"]))},f=y,b=Object(m["a"])(f,l,r,!1,null,"c3595614",null);a["default"]=b.exports}}]);
//# sourceMappingURL=login.199e4e1f.js.map