(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{298:function(t,e,n){"use strict";(function(t){n(66);var r=n(6),o=n.n(r),a=n(153);e.a={data:function(){return{pub_key:this.$route.params.id,cookie:"",formData:{url:""},short_url:""}},methods:{checkPubkey:function(){var t=o()(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=new a.a,n=e.get("pub_key"),console.log(n),this.cookie=n;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),generateUrl:function(){var e=o()(regeneratorRuntime.mark(function e(){var n,r,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"AIzaSyDzIGXtO7E05XllgcLxCVCwOuVYt6zCbGA","https://bazaaar.page.link",n=this.formData.url,console.log(t.env.DYNAMICLINKS_DOMAIN),r={dynamicLinkInfo:{domainUriPrefix:t.env.DYNAMICLINKS_DOMAIN,link:"".concat(n),androidInfo:{androidPackageName:"com.example.android"},iosInfo:{iosBundleId:"com.example.ios"}},suffix:{option:"SHORT"}};try{this.$axios.$post("https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=".concat("AIzaSyDzIGXtO7E05XllgcLxCVCwOuVYt6zCbGA"),r).then(function(t){console.log(t.shortLink),o.short_url=t.shortLink})}catch(t){alert(t)}case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}}).call(this,n(107))},299:function(t,e,n){var r=n(303);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(49).default)("7b445225",r,!0,{})},302:function(t,e,n){"use strict";var r=n(299);n.n(r).a},303:function(t,e,n){(t.exports=n(48)(!1)).push([t.i,".text-center{text-align:center}",""])},309:function(t,e,n){"use strict";n.r(e);var r=n(298).a,o=(n(302),n(22)),a=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("p",[t._v("\n    Link : "+t._s(t.pub_key)+"\n    "),n("br"),t._v("\n    Cookie : "+t._s(t.cookie)+"\n  ")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.checkPubkey}},[t._v("check pub_key")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("hr"),t._v(" "),n("br"),t._v(" "),n("form",[n("div",{staticClass:"form-content"},[n("span",[t._v("Generate URL")]),t._v(" "),n("el-input",{attrs:{placeholder:""},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}})],1),t._v(" "),n("div",{staticClass:"text-right"},[n("el-button",{attrs:{type:"primary"},on:{click:t.generateUrl}},[t._v("Generate")])],1),t._v(" "),n("p",[t._v("\n      Short URL:  "+t._s(t.short_url)+"\n    ")])])],1)},[],!1,null,null,null);a.options.__file="_id.vue";e.default=a.exports}}]);