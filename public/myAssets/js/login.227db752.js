(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a55b:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},s=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("a",{staticClass:"navbar-brand",attrs:{href:"@controllers.routes.ApplicationController.index"}},[a._v("Tic Tac Toe 4D")]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[e("div",{staticClass:"navbar-nav"},[e("a",{staticClass:"nav-item nav-link",attrs:{href:"@controllers.routes.ApplicationController.vueIndex()"}},[a._v("Play")]),e("a",{staticClass:"nav-item nav-link",attrs:{href:"@controllers.routes.ApplicationController.index"}},[a._v('@messages("home")')]),e("a",{staticClass:"nav-item nav-link",attrs:{href:"https://github.com/sara-ui/de.htwg.wt.TicTacToe4D"}},[a._v("GitHub")])])]),e("div",{staticClass:"collapse navbar-collapse navbar-right",attrs:{id:"navbarNavAltMarkup2"}},[e("div",{staticClass:"navbar-nav"},[a._v(" @user.map { u => "),e("a",{staticClass:"nav-link",attrs:{href:"@controllers.routes.ApplicationController.index"}},[a._v("@u.name")]),a._v(" @if(u.loginInfo.providerID == com.mohiva.play.silhouette.impl.providers.CredentialsProvider.ID) { "),e("a",{staticClass:"nav-item nav-link",attrs:{href:"@controllers.routes.ChangePasswordController.view"}},[a._v('@messages("change.password")')]),a._v(" } "),e("a",{staticClass:"nav-item nav-link",attrs:{href:"@controllers.routes.ApplicationController.signOut"}},[a._v('@messages("sign.out")')]),a._v(" }.getOrElse { "),e("a",{staticClass:"nav-item nav-link",attrs:{href:"@controllers.routes.SignInController.view"}},[a._v('@messages("sign.in")')]),e("a",{staticClass:"nav-item nav-link",attrs:{href:"@controllers.routes.SignUpController.view"}},[a._v('@messages("sign.up")')]),a._v(" } ")])])])}],l=e("5530"),n=e("2f62"),o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("form",{staticClass:"needs-validation",on:{submit:a.submit}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"player1"}},[a._v("First Player Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.payload.player1,expression:"payload.player1"}],staticClass:"form-control",attrs:{type:"text",name:"player1",id:"player1","aria-describedby":"player1Help",required:""},domProps:{value:a.payload.player1},on:{input:function(t){t.target.composing||a.$set(a.payload,"player1",t.target.value)}}}),e("small",{staticClass:"form-text text-muted",attrs:{id:"player1Help"}},[a._v("For example: Alex")])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"player2"}},[a._v("Second Player Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.payload.player2,expression:"payload.player2"}],staticClass:"form-control",attrs:{type:"text",name:"player2",id:"player2","aria-describedby":"player2Help",required:""},domProps:{value:a.payload.player2},on:{input:function(t){t.target.composing||a.$set(a.payload,"player2",t.target.value)}}}),e("small",{staticClass:"form-text text-muted",attrs:{id:"player2Help"}},[a._v("For example: Simon")])]),e("button",{staticClass:"btn btn-primary btn-block btn-lg mb-5",attrs:{type:"submit"}},[a._v(" Start The Game ")])])},i=[],p={name:"LoginForm",props:{payload:{type:String,required:!0}},methods:{submit:function(a){a.preventDefault(),this.$emit("submit")}}},v=p,c=e("2877"),u=Object(c["a"])(v,o,i,!1,null,"63073ddd",null),m=u.exports,d={name:"Login",components:{LoginForm:m},data:function(){return{payload:{player1:"",player2:""}}},methods:Object(l["a"])({submit:function(){this.login(this.payload),this.$router.push({name:"Game"})}},Object(n["b"])(["login"]))},b=d,g=Object(c["a"])(b,r,s,!1,null,"6b6c95c2",null);t["default"]=g.exports}}]);
//# sourceMappingURL=login.227db752.js.map