(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/changePwd/changePwd"],{"0ba9":function(n,e,s){},"0fea":function(n,e,s){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{userInfo:{password:"",newPassword:"",newRepassword:""}}},methods:{changePwd:function(){var e=this;return this.userInfo.newPassword!=this.userInfo.newRepassword?(this.userInfo.newPassword="",this.userInfo.newRepassword="",n.showToast({title:"两次输入密码不一致",icon:"none"}),!1):this.userInfo.newPassword.length<6||this.userInfo.newPassword.length>20?(this.userInfo.newPassword="",this.userInfo.newRepassword="",n.showToast({title:"新密码长度应为6-20字符",icon:"none"}),!1):(n.showLoading({title:"修改密码中",mask:!0}),void this.$uniRequest(this.$baseUrl+"/v1/member/editPsw",{old_pwd:this.userInfo.password,new_pwd:this.userInfo.newPassword},function(s){200==s.data.code?n.showToast({title:"密码修改成功",mask:!0,duration:1e3,success:function(){setTimeout(function(){n.switchTab({url:"/pages/mine/mine"})},1e3)}}):(e.userInfo.password="",n.showToast({title:"原密码错误",icon:"none"}))},!1))}}};e.default=s}).call(this,s("6e42")["default"])},"2b1b":function(n,e,s){"use strict";var t=s("0ba9"),o=s.n(t);o.a},9881:function(n,e,s){"use strict";s.r(e);var t=s("0fea"),o=s.n(t);for(var a in t)"default"!==a&&function(n){s.d(e,n,function(){return t[n]})}(a);e["default"]=o.a},a289:function(n,e,s){"use strict";s.r(e);var t=s("a472"),o=s("9881");for(var a in o)"default"!==a&&function(n){s.d(e,n,function(){return o[n]})}(a);s("2b1b");var r=s("2877"),u=Object(r["a"])(o["default"],t["a"],t["b"],!1,null,null,null);e["default"]=u.exports},a472:function(n,e,s){"use strict";var t=function(){var n=this,e=n.$createElement;n._self._c},o=[];s.d(e,"a",function(){return t}),s.d(e,"b",function(){return o})}},[["bce4","common/runtime","common/vendor"]]]);