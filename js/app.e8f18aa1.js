(function(t){function e(e){for(var i,l,n=e[0],r=e[1],c=e[2],u=0,m=[];u<n.length;u++)l=n[u],o[l]&&m.push(o[l][0]),o[l]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);p&&p(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,n=1;n<a.length;n++){var r=a[n];0!==o[r]&&(i=!1)}i&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},o={app:0},s=[];function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/my-site/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],r=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var p=r;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0596":function(t,e,a){},"07eb":function(t,e,a){},"0950":function(t,e,a){},"1c8d":function(t,e,a){"use strict";var i=a("815a"),o=a.n(i);o.a},"23eb":function(t,e,a){"use strict";var i=a("0950"),o=a.n(i);o.a},"2a73":function(t,e,a){"use strict";var i=a("a647"),o=a.n(i);o.a},"39e8":function(t,e,a){"use strict";var i=a("a165"),o=a.n(i);o.a},"4c37":function(t,e,a){"use strict";var i=a("a918"),o=a.n(i);o.a},"50c4":function(t,e,a){"use strict";var i=a("d05b"),o=a.n(i);o.a},5452:function(t,e,a){"use strict";var i=a("0596"),o=a.n(i);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header-comp"),a("nav-comp"),a("hero-comp"),a("projects-comp")],1)},s=[],l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header"}},[a("p",[t._v("Want me to make something awesome for you?")]),a("a",{attrs:{href:"mailto:totocorvidoni@gmail.com",target:"_blank",rel:"nooppener norefferer"}},[t._v("Let's get in touch!")])])}],r={name:"nav-comp"},c=r,p=(a("5452"),a("2877")),u=Object(p["a"])(c,l,n,!1,null,null,null),m=u.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navigator"}},[a("a",{staticClass:"node-wrapper",attrs:{href:"#hero"}},[a("div",{staticClass:"node"}),a("span",{staticClass:"description"},[t._v("to top")])]),a("a",{staticClass:"node-wrapper",attrs:{href:"#about"}},[a("div",{staticClass:"node"}),a("span",{staticClass:"description"},[t._v("about me")])]),a("a",{staticClass:"node-wrapper",attrs:{href:"#skills"}},[a("div",{staticClass:"node"}),a("span",{staticClass:"description"},[t._v("my skills")])]),a("a",{staticClass:"node-wrapper",attrs:{href:"#projects"}},[a("div",{staticClass:"node"}),a("span",{staticClass:"description"},[t._v("my projects")])]),a("a",{staticClass:"node-wrapper",attrs:{href:"#contact"}},[a("div",{staticClass:"node"}),a("span",{staticClass:"description"},[t._v("contact me")])])])}],v={name:"nav-comp"},f=v,g=(a("1c8d"),Object(p["a"])(f,d,h,!1,null,null,null)),x=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"hero"}},[a("div",{staticClass:"hello"},[t._m(0),a("h2",{staticClass:"big"},[t._v("and I am a full stack web developer")]),a("item-runner",{attrs:{items:t.likes,delay:2e3,loops:4}},[t._v("Just a guy trying to make the internet more of an awesome place.")])],1),a("skills-comp")],1)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"biggest"},[t._v("\n      Hello!\n      "),a("br"),t._v("My name is Tomás\n    ")])}],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("transition",{attrs:{name:"slide"}},[t.finish?a("div",{key:"message",staticClass:"finish-message",on:{mouseover:function(e){t.hovering=!0},mouseleave:function(e){t.hovering=!1},click:t.onFinishClick}},[a("transition",{attrs:{name:"slide"}},[t.hovering?a("p",{key:"rewind",staticClass:"item rewind"},[t._v("⏮ Rewind?")]):a("p",{key:"finish",staticClass:"item"},[t._t("default")],2)])],1):a("p",{key:t.activeItem,staticClass:"item"},[t._v(t._s(t.items[t.activeItem]))])])],1)},k=[],y=(a("c5f6"),{name:"item-runner",props:{items:Array,delay:Number,loops:Number},data:function(){return{activeItem:0,finish:!1,hovering:!1}},methods:{itemStep:function(t,e,a){var i=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(this.activeItem=t,t==this.items.length-1&&o!=a&&(o+=1,t=-1),t<this.items.length-1){var s=e<=50?50:e/1.3;setTimeout(function(){i.itemStep(t+1,s,a,o)},e)}else this.finish=!0},onFinishClick:function(){var t=this;this.finish=!1,this.$nextTick(function(){t.itemStep(0,t.delay,t.loops)})}},mounted:function(){var t=this;setTimeout(function(){t.itemStep(0,t.delay,t.loops)},3e3)}}),w=y,j=(a("4c37"),Object(p["a"])(w,C,k,!1,null,null,null)),S=j.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"skills"}},[a("transition",{attrs:{name:"flip",mode:"out-in"}},[a("div",{key:t.showingFront,staticClass:"wrapper",class:t.showingFront?"front":"back",on:{click:function(e){t.showingFront=!t.showingFront}}},[a("h2",{staticClass:"title"},[t._v(t._s(t.skillsTitle))]),t.showingFront?a("div",{staticClass:"description"},[a("p",[t._v("\n          I mostly develop\n          "),a("strong",{staticClass:"skill"},[t._v("Vue.js")]),t._v(" web apps setting them up using\n          "),a("strong",{staticClass:"skill"},[t._v("Webpack")]),t._v(" and\n          "),a("strong",{staticClass:"skill"},[t._v("npm")]),t._v(".\n          The building blocks I use according the projects needs are\n          "),a("strong",{staticClass:"skill"},[t._v("HTML5")]),t._v(",\n          "),a("strong",{staticClass:"skill"},[t._v("CSS3 + Sass")]),t._v(" and\n          "),a("strong",{staticClass:"skill"},[t._v("Javascript")]),t._v(".\n        ")]),a("p",[t._v("\n          I also have also worked on projects using\n          "),a("strong",{staticClass:"skill"},[t._v("React")]),t._v(" and\n          "),a("strong",{staticClass:"skill"},[t._v("Wordpress")])]),a("p",[t._v("\n          My main focus when developing are keeping the codebase\n          "),a("strong",[t._v("organized")]),t._v(" and\n          "),a("strong",[t._v("efficient")]),t._v(" as possible and making as\n          "),a("strong",[t._v("easy")]),t._v(" as possible for the user to use the app.\n        ")])]):a("div",{staticClass:"description"},[a("p",[t._v("\n          I mostly use\n          "),a("strong",{staticClass:"skill"},[t._v("Ruby on Rails")]),t._v(" using\n          "),a("strong",{staticClass:"skill"},[t._v("PostgreSQl")]),t._v(" or\n          "),a("strong",{staticClass:"skill"},[t._v("MySQL")]),t._v(" as database.\n        ")])]),a("div",{staticClass:"flip",attrs:{tabindex:"0"}},[t._v("- flip -")])])])],1)},P=[],I={name:"skills-comp",data:function(){return{showingFront:!0,front:[{name:"Vue.js"},{name:"Vanilla Javascript"},{name:"HTML"},{name:"CSS + Sass"},{name:"Webpack"}],back:[{name:"Rails"},{name:"Ruby"},{name:"PostgreSQl"},{name:"MySql"}]}},computed:{activeSkills:function(){return this.showingFront?this.front:this.back},skillsTitle:function(){return"My ".concat(this.showingFront?"front":"back"," end toolbox")}}},O=I,L=(a("f736"),Object(p["a"])(O,q,P,!1,null,null,null)),F=L.exports,$={name:"hero-comp",components:{ItemRunner:S,SkillsComp:F},data:function(){return{likes:["Let me tell you a little about me...","Self-thought developer","Living in Argentina","Who also graduated in Advertising.","Very detail oriented,","I Love clean code,","People enjoing my apps,","Keeping things simple,","Polished,","Elegant,","Responsive,","Snappy,","Fun"]}}},E=$,T=(a("2a73"),Object(p["a"])(E,b,_,!1,null,null,null)),M=T.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"about"}},[a("h2",[t._v("This is my description")]),a("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum deserunt ad architecto atque saepe placeat aperiam similique optio, rem explicabo iusto, at deleniti sed, cupiditate eveniet? Quam, fugit voluptatem!")]),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor itaque unde, totam ea atque, vero minus dolorum ex iure dignissimos sapiente deserunt deleniti aliquid id repellendus, cumque fugiat quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, asperiores ratione. Veritatis neque repellat, voluptatibus aperiam nobis quasi non incidunt adipisci atque cumque nesciunt commodi itaque facere at dignissimos labore.")])])}],V={name:"about-comp"},H=V,U=(a("50c4"),Object(p["a"])(H,R,A,!1,null,null,null)),J=U.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"projects"}},[a("div",{staticClass:"project-grid"},[a("h2",{staticClass:"title"},[t._v("Some of my projects")]),t._l(t.projects,function(e){return a("project-card",t._b({key:e.name},"project-card",e,!1))})],2)])},W=[],N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project-card"},[i("transition",{attrs:{name:"flip",mode:"out-in"}},[t.showingFront?i("div",{key:"front",staticClass:"card-front"},[i("img",{staticClass:"image",attrs:{src:t.coverImage.thumb,alt:t.coverImage.alt},on:{click:function(e){t.showingFront=!1}}}),i("div",{staticClass:"card-wrapper"},[i("h3",{staticClass:"name"},[t._v(t._s(t.name))]),i("p",{staticClass:"description"},[t._v(t._s(t.description))]),i("div",{staticClass:"tag-wrapper"},t._l(t.tags,function(e){return i("base-tag",[t._v(t._s(e))])}),1),i("div",{staticClass:"flip",attrs:{tabindex:"0"},on:{click:function(e){t.showingFront=!1}}},[t._v("- flip -")])])]):i("div",{key:"back",staticClass:"card-back"},[i("div",{staticClass:"images-wrapper"},t._l(t.images,function(e,a){return i("vue-pure-lightbox",{staticClass:"image-wrapper",attrs:{thumbnail:e.thumb,images:t.fullImages,"open-at-index":a}})}),1),i("div",{staticClass:"links"},[i("a",{staticClass:"link",attrs:{href:t.links.live,target:"_blank",rel:"nooppener norefferer"}},[i("img",{staticClass:"icon",attrs:{src:a("ce61"),alt:"An open door"}}),i("div",{staticClass:"link-text"},[t._v("Visit Site")])]),i("a",{staticClass:"link",attrs:{href:t.links.repo,target:"_blank",rel:"nooppener norefferer"}},[i("img",{staticClass:"icon",attrs:{src:a("68a3"),alt:"GitHub Logo"}}),i("div",{staticClass:"link-text"},[t._v("Source Code")])])]),i("div",{staticClass:"flip",attrs:{tabindex:"0"},on:{click:function(e){t.showingFront=!0}}},[t._v("- flip -")])])])],1)},z=[],B=a("c107"),D=a.n(B),G=(a("9a3e"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"tag"},[t._t("default")],2)}),K=[],X={name:"base-tag"},Y=X,Z=(a("fdb6"),Object(p["a"])(Y,G,K,!1,null,null,null)),tt=Z.exports,et={name:"project-card",components:{VuePureLightbox:D.a,BaseTag:tt},props:{name:String,links:Object,description:String,tags:Array,images:Array},data:function(){return{showingFront:!0}},computed:{coverImage:function(){return this.images[0]},fullImages:function(){return this.images.map(function(t){return t.full})}}},at=et,it=(a("39e8"),Object(p["a"])(at,N,z,!1,null,null,null)),ot=it.exports,st=[{name:"Placeholder Project 1",links:{repo:"https://github.com/totocorvidoni",live:"https://github.com/totocorvidoni"},description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta eligendi, autem tempore sed quisquam, deleniti exercitationem deserunt dolore provident rerum maxime doloribus laboriosam excepturi adipisci?text= Iure placeat officiis maiores?text=",tags:["tag1","tag two","longer tag","tag4"],images:[{thumb:"https://via.placeholder.com/150x300?text=1",full:"https://via.placeholder.com/450x900?text=1",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/300x300?text=2",full:"https://via.placeholder.com/200x400?text=2",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/100x900?text=3",full:"https://via.placeholder.com/900x500?text=3",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/450x700?text=4",full:"https://via.placeholder.com/380x120?text=4",alt:"placeholder alternate text."}]},{name:"Placeholder Project 2",links:{repo:"https://github.com/totocorvidoni",live:"https://github.com/totocorvidoni"},description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta eligendi, autem tempore sed quisquam, deleniti exercitationem deserunt dolore provident rerum maxime doloribus laboriosam excepturi adipisci?text= Iure placeat officiis maiores?text=",tags:["tag1","tag two","longer tag","tag4"],images:[{thumb:"https://via.placeholder.com/300x300?text=2",full:"https://via.placeholder.com/200x400?text=2",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/150x300?text=1",full:"https://via.placeholder.com/450x900?text=1",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/100x900?text=3",full:"https://via.placeholder.com/900x500?text=3",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/450x700?text=4",full:"https://via.placeholder.com/380x120?text=4",alt:"placeholder alternate text."}]},{name:"Placeholder Project 3",links:{repo:"https://github.com/totocorvidoni",live:"https://github.com/totocorvidoni"},description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta eligendi, autem tempore sed quisquam, deleniti exercitationem deserunt dolore provident rerum maxime doloribus laboriosam excepturi adipisci?text= Iure placeat officiis maiores?text=",tags:["tag1","tag two","longer tag","tag4"],images:[{thumb:"https://via.placeholder.com/100x900?text=3",full:"https://via.placeholder.com/900x500?text=3",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/150x300?text=1",full:"https://via.placeholder.com/450x900?text=1",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/300x300?text=2",full:"https://via.placeholder.com/200x400?text=2",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/450x700?text=4",full:"https://via.placeholder.com/380x120?text=4",alt:"placeholder alternate text."}]},{name:"Placeholder Project 4",links:{repo:"https://github.com/totocorvidoni",live:"https://github.com/totocorvidoni"},description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta eligendi, autem tempore sed quisquam, deleniti exercitationem deserunt dolore provident rerum maxime doloribus laboriosam excepturi adipisci?text= Iure placeat officiis maiores?text=",tags:["tag1","tag two","longer tag","tag4"],images:[{thumb:"https://via.placeholder.com/450x700?text=4",full:"https://via.placeholder.com/380x120?text=4",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/150x300?text=1",full:"https://via.placeholder.com/450x900?text=1",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/300x300?text=2",full:"https://via.placeholder.com/200x400?text=2",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/100x900?text=3",full:"https://via.placeholder.com/900x500?text=3",alt:"placeholder alternate text."}]},{name:"Placeholder Project 5",links:{repo:"https://github.com/totocorvidoni",live:"https://github.com/totocorvidoni"},description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta eligendi, autem tempore sed quisquam, deleniti exercitationem deserunt dolore provident rerum maxime doloribus laboriosam excepturi adipisci?text= Iure placeat officiis maiores?text=",tags:["tag1","tag two","longer tag","tag4"],images:[{thumb:"https://via.placeholder.com/150x300?text=1",full:"https://via.placeholder.com/450x900?text=1",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/300x300?text=2",full:"https://via.placeholder.com/200x400?text=2",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/100x900?text=3",full:"https://via.placeholder.com/900x500?text=3",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/450x700?text=4",full:"https://via.placeholder.com/380x120?text=4",alt:"placeholder alternate text."}]},{name:"Placeholder Project 6",links:{repo:"https://github.com/totocorvidoni",live:"https://github.com/totocorvidoni"},description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta eligendi, autem tempore sed quisquam, deleniti exercitationem deserunt dolore provident rerum maxime doloribus laboriosam excepturi adipisci?text= Iure placeat officiis maiores?text=",tags:["tag1","tag two","longer tag","tag4"],images:[{thumb:"https://via.placeholder.com/150x300?text=1",full:"https://via.placeholder.com/450x900?text=1",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/300x300?text=2",full:"https://via.placeholder.com/200x400?text=2",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/100x900?text=3",full:"https://via.placeholder.com/900x500?text=3",alt:"placeholder alternate text."},{thumb:"https://via.placeholder.com/450x700?text=4",full:"https://via.placeholder.com/380x120?text=4",alt:"placeholder alternate text."}]}],lt={name:"projects-comp",components:{ProjectCard:ot},data:function(){return{projects:st}}},nt=lt,rt=(a("23eb"),Object(p["a"])(nt,Q,W,!1,null,null,null)),ct=rt.exports,pt={name:"app",components:{HeaderComp:m,NavComp:x,HeroComp:M,AboutComp:J,SkillsComp:F,ProjectsComp:ct}},ut=pt,mt=(a("5c0b"),Object(p["a"])(ut,o,s,!1,null,null,null)),dt=mt.exports;a("f5df");i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(dt)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("5e27"),o=a.n(i);o.a},"5e27":function(t,e,a){},"68a3":function(t,e,a){t.exports=a.p+"img/github-brands.0a0db642.svg"},"6c26":function(t,e,a){},"815a":function(t,e,a){},"9a3e":function(t,e,a){},a165:function(t,e,a){},a647:function(t,e,a){},a918:function(t,e,a){},ce61:function(t,e,a){t.exports=a.p+"img/door-open-solid.9854866c.svg"},d05b:function(t,e,a){},f736:function(t,e,a){"use strict";var i=a("6c26"),o=a.n(i);o.a},fdb6:function(t,e,a){"use strict";var i=a("07eb"),o=a.n(i);o.a}});
//# sourceMappingURL=app.e8f18aa1.js.map