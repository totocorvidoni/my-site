(function(e){function t(t){for(var r,o,a=t[0],l=t[1],u=t[2],p=0,f=[];p<a.length;p++)o=a[p],i[o]&&f.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/my-site/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var c=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2a73":function(e,t,n){"use strict";var r=n("a647"),i=n.n(r);i.a},"4c37":function(e,t,n){"use strict";var r=n("a918"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("hero-comp"),n("skills-comp")],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"hero"}},[n("h1",{staticClass:"big"},[e._v("Hi,")]),n("h2",[e._v("I'm a full-stack web developer.")]),n("h3",{staticClass:"likes"},[e._v("I like ...")]),n("item-runner",{attrs:{items:e.likes,delay:2e3,loops:20}},[e._v("coding efficient and intuitive apps for the user.")])],1)},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("transition",{attrs:{name:"slide"}},[e.showMessage?n("p",{key:"message",staticClass:"item"},[e._t("default")],2):n("p",{key:e.activeItem,staticClass:"item"},[e._v(e._s(e.items[e.activeItem]))])])],1)},u=[],c=(n("c5f6"),{name:"item-runner",props:{items:Array,delay:Number,loops:Number},data:function(){return{activeItem:0,showMessage:!1}},methods:{itemStep:function(e,t,n){var r=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(this.activeItem=e,e==this.items.length-1&&i!=n&&(i+=1,e=-1),e<this.items.length-1){var s=t<=50?50:t/1.1;setTimeout(function(){r.itemStep(e+1,s,n,i)},t)}else this.showMessage=!0}},mounted:function(){var e=this;setTimeout(function(){e.itemStep(e.activeItem,e.delay,e.loops)},1e3)}}),p=c,f=(n("4c37"),n("2877")),m=Object(f["a"])(p,l,u,!1,null,null,null),d=m.exports,v={name:"hero-comp",components:{ItemRunner:d},data:function(){return{likes:["efficent code","simple designs","snappy performance"]}}},h=v,b=(n("2a73"),Object(f["a"])(h,o,a,!1,null,null,null)),y=b.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"skills"}},[e._v("\n  front end skill are:\n  vue\n")])},_=[],k={name:"skills-comp"},w=k,O=Object(f["a"])(w,g,_,!1,null,null,null),j=O.exports,x={name:"app",components:{HeroComp:y,SkillsComp:j}},S=x,I=(n("5c0b"),Object(f["a"])(S,i,s,!1,null,null,null)),C=I.exports;n("f5df");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),i=n.n(r);i.a},"5e27":function(e,t,n){},a647:function(e,t,n){},a918:function(e,t,n){}});
//# sourceMappingURL=app.a8891e37.js.map