webpackJsonp([0],{"+on8":function(t,i,a){t.exports=a.p+"static/img/product1.c361f42.jpg"},"0Sw8":function(t,i){},"0qj+":function(t,i){},Cv6m:function(t,i){},LZbY:function(t,i,a){t.exports=a.p+"static/img/product5.4716dc3.jpg"},NHnr:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a("7+uW"),s={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"bs-component"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Foodify")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/Blog"}},[t._v("Blog")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/Services"}},[t._v("Services")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/Contact"}},[t._v("Contact")])],1)])])])]),t._v(" "),a("div",{staticClass:"container"},[a("transition",{attrs:{name:"moveInUp"}},[a("router-view")],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[i("span",{staticClass:"navbar-toggler-icon"})])}]};var n=a("VU/8")({name:"App"},s,!1,function(t){a("0qj+")},null,null).exports,r=a("/ocq"),o={name:"home",data:function(){return{products:[{title:"Pizza",image:a("+on8"),id:1},{title:"Custard",image:a("qnmm"),id:2},{title:"Snail",image:a("ck3Q"),id:3},{title:"Cereal",image:a("hZ5B"),id:4},{title:"Fruit Mix",image:a("LZbY"),id:5},{title:"Date Fruit",image:a("rmxJ"),id:6}]}}},c={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"home"},[a("h1",[t._v("Home")]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.products,function(i,e){return a("div",{key:i.id,staticClass:"col-md-4 col-lg-4"},[a("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:i.image}}),t._v(" "),a("router-link",{attrs:{to:/details/+i.id}},[a("h3",[t._v(t._s(i.title))])])],1)}),0)])])},staticRenderFns:[]};var l=a("VU/8")(o,c,!1,function(t){a("weEQ")},"data-v-1935a566",null).exports,u={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"blog"},[i("h1",[this._v(this._s(this.title))]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",[t._v("Vue.js")])]),t._v(" "),a("div",{staticClass:"card-body"},[t._v("\n         \n         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n         proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n       ")])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",[t._v("Angular")])]),t._v(" "),a("div",{staticClass:"card-body"},[t._v("\n         \n         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n         proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n       ")])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",[t._v("React")])]),t._v(" "),a("div",{staticClass:"card-body"},[t._v("\n         \n         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n         proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n       ")])])])])])}]};var d=a("VU/8")({name:"blog",data:function(){return{title:"Blog"}}},u,!1,function(t){a("ckwe")},"data-v-df00ec82",null).exports,m={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"services"},[i("div",{staticClass:"container"},[i("h1",[this._v(this._s(this.title))]),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("p",[this._v("\n         ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n       consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n       proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n       "),i("br"),this._v(" "),i("br"),this._v("\n       ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n       consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n       proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n     ")])}]};var v=a("VU/8")({name:"services",data:function(){return{title:"Services"}}},m,!1,function(t){a("Cv6m")},"data-v-d5119de8",null).exports,p={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"contact"},[i("h1",[this._v(this._s(this.title))]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("form",[i("div",{staticClass:"form-group"},[i("div",{staticClass:"input-group-prepend"},[i("input",{staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"Enter your name..."}})]),this._v(" "),i("div",{staticClass:"input-group-prepend"},[i("input",{staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:"Enter your email..."}})]),this._v(" "),i("div",{staticClass:"input-group-prepend"},[i("textarea",{staticClass:"form-control",attrs:{placeholder:"Enter your message...",rows:"3"}})]),this._v(" "),i("button",{staticClass:"btn btn-primary btn-block"},[this._v("Submit")])])])}]};var _=a("VU/8")({name:"contact",data:function(){return{title:"Contact"}}},p,!1,function(t){a("0Sw8")},"data-v-3852d794",null).exports,f={name:"details",data:function(){return{proId:this.$route.params.Pid,title:"details",products:[{title:"Pizza",image:a("+on8"),id:1},{title:"Custard",image:a("qnmm"),id:2},{title:"Snail",image:a("ck3Q"),id:3},{title:"Cereal",image:a("hZ5B"),id:4},{title:"Fruit Mix",image:a("LZbY"),id:5},{title:"Date Fruit",image:a("rmxJ"),id:6}]}}},h={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"details"},[a("div",{staticClass:"row"},[t._l(t.products,function(i,e){return a("div",{key:i.id,staticClass:"col-md-6"},[t.proId==i.id?a("div",[a("h1",[t._v(t._s(i.title))]),t._v(" "),a("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:i.image}})]):t._e()])}),t._v(" "),t._m(0)],2)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"col-md-6"},[i("h3",[this._v("Description")]),this._v(" "),i("p",[this._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus exercitationem veritatis reiciendis modi voluptate sunt obcaecati autem, quod velit repellendus eligendi, neque tempore suscipit, vitae earum. Animi esse amet est dolorum perspiciatis, enim, tempora ipsa assumenda debitis odio aut maiores!")])])}]};var g=a("VU/8")(f,h,!1,function(t){a("YqIq")},"data-v-6040b22a",null).exports;e.a.use(r.a);var C=new r.a({routes:[{path:"/",name:"Home",component:l},{path:"/Blog",name:"blog",component:d},{path:"/Services",name:"services",component:v},{path:"/Contact",name:"contact",component:_},{path:"/details/:Pid",name:"details",component:g}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:C,components:{App:n},template:"<App/>"})},YqIq:function(t,i){},ck3Q:function(t,i,a){t.exports=a.p+"static/img/product3.8bd7bce.jpg"},ckwe:function(t,i){},hZ5B:function(t,i,a){t.exports=a.p+"static/img/product4.f123b2a.jpg"},qnmm:function(t,i,a){t.exports=a.p+"static/img/product2.c34007e.jpg"},rmxJ:function(t,i,a){t.exports=a.p+"static/img/product6.a817faa.jpg"},weEQ:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.a1ccded8cd909f84fa23.js.map