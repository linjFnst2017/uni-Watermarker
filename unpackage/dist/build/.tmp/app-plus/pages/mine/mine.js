(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/mine"],{"18a6":function(n,e,t){},"1a34":function(n,e,t){"use strict";t.r(e);var i=t("eef4"),o=t("bd18");for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);t("2c31");var a=t("2877"),u=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},"2c31":function(n,e,t){"use strict";var i=t("18a6"),o=t.n(i);o.a},bd18:function(n,e,t){"use strict";t.r(e);var i=t("fc32"),o=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,function(){return i[n]})}(r);e["default"]=o.a},eef4:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"a",function(){return i}),t.d(e,"b",function(){return o})},fc32:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{userInfo:{},token:""}},computed:{login:function(){return""!=this.token},avatarUrl:function(){return""!=this.token?"../../static/images/avater.png":"../../static/images/nologin.png"},vipIcon:function(){return null!=this.userInfo.vip_end_time?"../../static/images/isvip.png":"../../static/images/novip.png"},endDate:function(){if(null!=this.userInfo.vip_end_time){var n=this.userInfo.vip_end_time;n*=1e3;var e=new Date(n);return e.getFullYear()>=2019?"永久":e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}return this.login?"开通VIP会员":"-"}},onLoad:function(){},onShow:function(){var e=n.getStorageSync("TOKEN");e?(this.token=e,this.getUserInfo()):(this.token="",this.userInfo={})},methods:{toLogin:function(){var n=this.$checkLogin("/pages/mine/mine",2);if(!n)return!1},toUserInfo:function(){var e=this.$checkLogin("/pages/mine/mine",2);if(!e)return!1;n.navigateTo({url:"/pages/userInfo/userInfo?info="+JSON.stringify(this.userInfo)})},toRecharge:function(){var e=this.$checkLogin("/pages/mine/mine",2);if(!e)return!1;n.navigateTo({url:"/pages/downApp/downApp"})},toInvite:function(){var e=this.$checkLogin("/pages/mine/mine",2);if(!e)return!1;n.navigateTo({url:"/pages/invite/invite?num="+this.userInfo.mobile})},toSecurity:function(){var e=this.$checkLogin("/pages/mine/mine",2);if(!e)return!1;n.navigateTo({url:"/pages/security/security?num="+this.userInfo.mobile})},toFeedback:function(){var e=this.$checkLogin("/pages/mine/mine",2);if(!e)return!1;n.navigateTo({url:"/pages/feedback/feedback"})},toSetting:function(){var e=this.$checkLogin("/pages/mine/mine",2);if(!e)return!1;n.navigateTo({url:"/pages/setting/setting"})},getUserInfo:function(){var n=this;this.$uniRequest(this.$baseUrl+"/v1/member/info",0,function(e){n.userInfo=e.data.data},!1)},canRecharge:function(){this.login&&!this.userInfo.vip_end_time&&this.toRecharge()}}};e.default=t}).call(this,t("6e42")["default"])}},[["cfd6","common/runtime","common/vendor"]]]);