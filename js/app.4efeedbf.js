(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);_&&_(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0ad3555e":"9136b485","chunk-0dbf735e":"c82c6e6a","chunk-3f873adf":"bc66da67","chunk-7a61477e":"3155e6eb"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0ad3555e":1,"chunk-0dbf735e":1,"chunk-3f873adf":1,"chunk-7a61477e":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0ad3555e":"9b16c910","chunk-0dbf735e":"39dea4cd","chunk-3f873adf":"a477bb6f","chunk-7a61477e":"a9112d1a"}[t]+".css",i=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var _=document.createElement("link");_.rel="stylesheet",_.type="text/css",_.onload=e,_.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],_.parentNode.removeChild(_),n(o)},_.href=i,0!==_.href.indexOf(window.location.origin+"/")&&(_.crossOrigin="anonymous");var m=document.getElementsByTagName("head")[0];m.appendChild(_)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t),0!==u.src.indexOf(window.location.origin+"/")&&(u.crossOrigin="anonymous");var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(_);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[t]=void 0}};var _=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var _=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0393":function(t,e,n){"use strict";var a=n("1e37"),r=n.n(a);r.a},"08e6":function(t,e,n){"use strict";var a=n("1d69"),r=n.n(a);r.a},"0a71":function(t,e,n){"use strict";var a=n("3f54"),r=n.n(a);r.a},"1a75":function(t,e,n){"use strict";var a=n("9b05"),r=n.n(a);r.a},"1d69":function(t,e,n){},"1e37":function(t,e,n){},"21bb":function(t,e,n){"use strict";var a=n("2dad"),r=n.n(a);r.a},"24c4":function(t,e,n){"use strict";var a=n("2f7f"),r=n.n(a);r.a},"2dad":function(t,e,n){},"2f7f":function(t,e,n){},"3f54":function(t,e,n){},4360:function(t,e,n){"use strict";n("99af"),n("d81d");var a=n("2909"),r=n("2b0e"),i=n("2f62");r["a"].use(i["a"]),e["a"]=new i["a"].Store({state:{loading:!0,isCookieSet:!1,events:{content:[],count:0,total:0},pages:[]},getters:{getEvent:function(t){return function(e){var n;return!!t.events&&(t.events.content.map((function(t){t.id==e&&(n=t)})),n)}}},mutations:{setEvents:function(t,e){t.events.content=[].concat(Object(a["a"])(t.events.content),Object(a["a"])(e)),t.events.count=t.events.count+e.length},setPages:function(t,e){t.pages.push(e)},setTotalEvents:function(t,e){t.events.total=parseInt(e)},cookieIsSet:function(t){t.isCookieSet=!0},isLoading:function(t,e){t.loading=e}}})},"53aa":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social-link",class:{"social-link--small":t.small}},["facebook"===t.type?n("div",{staticClass:"social-link__facebook",class:{"social-link--dark":t.dark,"social-link--light":t.light}},[n("a",{attrs:{href:this.facebook,rel:"noreferrer",target:"_blank","aria-label":"Abdera Biberach Facebook"}},[n("svg",{staticStyle:{"enable-background":"new 0 0 300 300"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 300 300","xml:space":"preserve"}},[n("path",{staticClass:"st0",attrs:{d:"M299.3,150.3c0-82.6-66.9-149.5-149.5-149.5S0.3,67.7,0.3,150.3C0.3,224.9,55,286.8,126.5,298V193.5h-38v-43.2\n        h38v-32.9c0-37.5,22.3-58.2,56.5-58.2c16.4,0,33.5,2.9,33.5,2.9v36.8h-18.9c-18.6,0-24.4,11.5-24.4,23.4v28h41.5l-6.6,43.2h-34.8\n        V298C244.7,286.8,299.3,224.9,299.3,150.3L299.3,150.3z"}})])])]):t._e(),"instagram"===t.type?n("div",{staticClass:"social-link__instagram",class:{"social-link--dark":t.dark,"social-link--light":t.light}},[n("a",{attrs:{href:this.instagram,rel:"noreferrer",target:"_blank","aria-label":"Abdera Biberach Instagram"}},[n("svg",{staticStyle:{"enable-background":"new 0 0 300 300"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 300 300","xml:space":"preserve"}},[n("g",[n("path",{staticClass:"st0",attrs:{d:"M225.7,92.8c-1.6-4.2-4-8-7.3-11.2c-3.1-3.2-7-5.7-11.2-7.3c-3.4-1.3-8.6-2.9-18-3.3\n          c-10.2-0.5-13.3-0.6-39.3-0.6l0,0c-25.9,0-29,0.1-39.3,0.6c-9.5,0.4-14.6,2-18,3.3c-4.2,1.6-8,4-11.2,7.3c-3.2,3.1-5.7,7-7.3,11.2\n          c-1.3,3.4-2.9,8.6-3.3,18c-0.5,10.2-0.6,13.3-0.6,39.3c0,25.9,0.1,29,0.6,39.3c0.4,9.5,2,14.6,3.3,18c1.6,4.2,4,8,7.3,11.2\n          c3.1,3.2,7,5.7,11.2,7.3c3.4,1.3,8.6,2.9,18,3.3c10.2,0.5,13.3,0.6,39.3,0.6s29-0.1,39.3-0.6c9.5-0.4,14.6-2,18-3.3\n          c8.5-3.3,15.2-10,18.4-18.4c1.3-3.4,2.9-8.6,3.3-18c0.5-10.2,0.6-13.3,0.6-39.3c0-25.9-0.1-29-0.6-39.3\n          C228.6,101.4,227,96.3,225.7,92.8z M149.9,200.1c-27.6,0-49.9-22.3-49.9-49.9s22.3-49.9,49.9-49.9s49.9,22.3,49.9,49.9\n          S177.5,200.1,149.9,200.1z M201.8,109.9c-6.4,0-11.7-5.2-11.7-11.7c0-6.4,5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7\n          C213.5,104.7,208.3,109.9,201.8,109.9z"}}),n("path",{staticClass:"st0",attrs:{d:"M149.9,0.3C67.2,0.3,0.1,67.4,0.1,150.2S67.2,300,149.9,300s149.8-67.1,149.8-149.8S232.7,0.3,149.9,0.3z\n          M246.5,190.2c-0.5,10.3-2.1,17.4-4.5,23.6c-5,13.1-15.4,23.4-28.4,28.4c-6.2,2.4-13.2,4-23.6,4.5c-10.4,0.5-13.7,0.6-40.1,0.6\n          c-26.4,0-29.7-0.1-40.1-0.6c-10.3-0.5-17.4-2.1-23.6-4.5c-6.5-2.4-12.4-6.3-17.2-11.2c-4.9-4.9-8.8-10.7-11.2-17.2\n          c-2.4-6.2-4-13.2-4.5-23.6c-0.5-10.4-0.6-13.7-0.6-40.1s0.1-29.7,0.6-40.1c0.5-10.3,2.1-17.4,4.5-23.6c2.4-6.5,6.3-12.4,11.2-17.2\n          c4.9-4.9,10.7-8.8,17.2-11.2c6.2-2.4,13.2-4,23.6-4.5c10.4-0.5,13.7-0.6,40.1-0.6c0,0,0,0,0,0h0c0,0,0,0,0,0\n          c26.4,0,29.7,0.1,40.1,0.6c10.3,0.5,17.4,2.1,23.6,4.5c6.5,2.4,12.4,6.3,17.2,11.2c4.9,4.9,8.8,10.7,11.2,17.2\n          c2.4,6.2,4,13.2,4.5,23.6c0.5,10.4,0.6,13.7,0.6,40.1S247,179.9,246.5,190.2z"}}),n("ellipse",{staticClass:"st0",attrs:{transform:"matrix(0.9999 -1.183313e-02 1.183313e-02 0.9999 -1.7663 1.7848)",cx:"149.9",cy:"150.2",rx:"32.4",ry:"32.4"}})])])])]):t._e(),"youtube"===t.type?n("div",{staticClass:"social-link__youtube",class:{"social-link--dark":t.dark,"social-link--light":t.light}},[n("a",{attrs:{href:this.youtube,rel:"noreferrer",target:"_blank","aria-label":"Abdera Biberach Youtube"}},[n("svg",{staticStyle:{"enable-background":"new 0 0 300 300"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 300 300","xml:space":"preserve"}},[n("g",[n("path",{staticClass:"st0",attrs:{d:"M150,0C67.2,0,0,67.2,0,150s67.2,150,150,150s150-67.2,150-150S232.8,0,150,0z M244,150.2c0,0,0,30.9-3.9,45.7\n          c-2.2,8.2-8.6,14.6-16.8,16.8c-14.9,3.9-74.3,3.9-74.3,3.9s-59.3,0-74.3-4.1c-8.2-2.2-14.6-8.6-16.8-16.8C54,181,54,150,54,150\n          s0-30.8,3.9-45.7c2.2-8.2,8.8-14.7,16.8-17c14.9-3.9,74.3-3.9,74.3-3.9s59.5,0,74.3,4.1c8.2,2.2,14.6,8.6,16.8,16.8\n          C244.1,119.2,244,150.2,244,150.2z"}}),n("polygon",{staticClass:"st0",attrs:{points:"130.1,178.5 179.5,150 130.1,121.5 \t"}})])])])]):t._e()])},r=[],i=n("f121"),o=n.n(i),s={name:"SocialLink",props:{type:String,dark:Boolean,light:Boolean,small:Boolean},data:function(){return{facebook:o.a.FACEBOOK,instagram:o.a.INSTAGRAM,youtube:o.a.YOUTUBE}}},c=s,l=(n("75c6"),n("2877")),u=Object(l["a"])(c,a,r,!1,null,"28b96d5b",null);e["a"]=u.exports},5689:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{app__dark:t.isDark},attrs:{id:"app"}},[n("Navigation",{attrs:{dark:t.isDark}},[n("ul",[t._l(t.routes,(function(e){return[t.excludeRoutes(e.name)?t._e():n("li",{key:e.path},[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1)]}))],2),n("ul",[n("li",[n("router-link",{attrs:{to:"/vermietung"}},[t._v("→ Booking & Mieten")])],1)])]),n("main",{class:{main__dark:t.isDark}},[n("Loader",{directives:[{name:"show",rawName:"v-show",value:t.isLoading(),expression:"isLoading()"}]}),n("router-view",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading(),expression:"!isLoading()"}]})],1),n("Footer",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading(),expression:"!isLoading()"}]},[n("ul",[t._l(t.routes,(function(e){return[t.excludeRoutes(e.name)?t._e():n("li",{key:e.path},[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1)]}))],2),n("ul",[n("li",[n("router-link",{attrs:{to:"/vermietung"}},[t._v("→ Booking & Mieten")])],1)])]),n("CookieNotice")],1)},i=[],o=(n("4160"),n("caad"),n("b0c0"),n("2532"),n("159b"),n("ed08")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navigation",class:{"navigation--dark":t.dark}},[a("div",{staticClass:"navigation__main--grid base-grid"},[a("div",{staticClass:"navigation__main content large-full"},[a("div",{staticClass:"navigation__main__logo--wrapper"},[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"navigation__main__logo"},[a("img",{attrs:{width:"300",height:"24",src:n("ba22"),alt:"Kulturhalle Abdera Biberach – Logo"}})])])],1),a("div",{staticClass:"navigation__main__hamburger transition",class:{"rotate-90 navigation__main__hamburger--open":t.showMenu},on:{click:function(e){t.showMenu=!t.showMenu}}}),a("transition",{attrs:{name:"toggleMobileMenu"}},[t.showMenu?a("nav",{staticClass:"navigation__main__container--grid base-grid",attrs:{id:"nav"},on:{click:t.evalClick}},[a("div",{staticClass:"navigation__main__container full medium-right-border base-grid"},[a("div",{staticClass:"navigation__main__container--distributor content medium-full"},[t._t("default")],2)])]):t._e()])],1)]),a("transition",{attrs:{name:"toggleMenuBackButton"}},[this.$route.path.includes("/event/")?a("div",{staticClass:"navigation__optional__container"},[a("div",{staticClass:"navigation__optional--grid base-grid"},[a("div",{staticClass:"navigation__optional content large-full",on:{click:function(e){return t.goBack()}}},[t._v(" ← Übersicht ")])])]):t._e()])],1)},c=[],l={name:"Navigation",props:{dark:Boolean},data:function(){return{showMenu:!1}},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/programm")},evalClick:function(t){var e=t.target.baseURI===window.location.href&&"a"===t.target.localName;("nav"===t.target.id||e)&&(this.showMenu=!1)}},watch:{$route:function(){this.showMenu=!1},showMenu:function(){document.documentElement.style.overflowY=this.showMenu?"hidden":"scroll"}}},u=l,d=(n("bbf2"),n("2877")),_=Object(d["a"])(u,s,c,!1,null,null,null),m=_.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader"})},f=[],v={name:"Loader"},g=v,h=(n("0a71"),Object(d["a"])(g,p,f,!1,null,null,null)),b=h.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer",class:{"footer--dark":t.dark}},[n("div",{staticClass:"footer--grid base-grid"},[n("div",{staticClass:"footer__container content medium-left"},[n("div",{staticClass:"footer__container__column footer__container__column__left"},[n("div",{staticClass:"footer__socialmedia"},[n("SocialLink",{attrs:{type:"facebook",light:""}}),n("SocialLink",{attrs:{type:"instagram",light:""}}),n("SocialLink",{attrs:{type:"youtube",light:""}})],1),n("div",{staticClass:"footer__contact"},[n("p",{staticClass:"text--caption footer__contact__item"},[n("strong",[t._v(" © "+t._s(t.currentYear)+" Lilienthal e.V."),n("br"),t._v(" Kulturhalle Abdera")]),n("br"),t._m(0),n("br"),n("br"),t._v(" +49 (0) 7351 / 16 93 54 "),n("br"),n("a",{staticClass:"footer__container__mail",attrs:{href:"mailto:info@abdera-bc.de"}},[t._v(" info@abdera-bc.de ")])]),n("div",{staticClass:"footer__legal footer__contact__item"},[n("Tag",{attrs:{content:"Impressum",url:this.config.BASE_URL+"impressum",dark:""}}),n("Tag",{attrs:{content:"Datenschutz",url:this.config.BASE_URL+"datenschutz",dark:""}})],1)])])]),n("div",{staticClass:"footer__container content medium-right"},[n("div",{staticClass:"footer__container__column footer__container__column__right"},[n("div",{staticClass:"footer__menu"},[n("div",{staticClass:"only-desktop"},[t._t("default")],2),t._m(1)])])])])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"footer__container__link",attrs:{href:"https://goo.gl/maps/AqhEVUu3ajY8928n6",target:"_blank",rel:"noreferrer"}},[t._v(" Breslaustraße 13 "),n("br"),t._v(" 88400 Biberach/Riß ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer__copyright footer__menu__item"},[t._v(" Design und Implementierung"),n("br"),n("a",{attrs:{href:"https://katrinmentz.com/",traget:"_blank",rel:"noreferrer"}},[t._v("Katrin Mentz")]),t._v(" & "),n("a",{attrs:{href:"https://moritzgut.de/",traget:"_blank",rel:"noreferrer"}},[t._v("Moritz Gut")])])}],C=n("f121"),y=n.n(C),x=n("53aa"),M=n("c009"),S={name:"ProgramItem",components:{SocialLink:x["a"],Tag:M["a"]},props:{event:Object,dark:Boolean},data:function(){return{config:y.a}},computed:{currentYear:function(){return(new Date).getFullYear()}}},O=S,A=(n("0393"),Object(d["a"])(O,k,w,!1,null,null,null)),E=A.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.cookieSet?n("div",{staticClass:"cookie-notice base-grid",class:{"cookie-notice__dark":t.dark}},[n("div",{staticClass:"cookie-notice__wrapper content"},[t._m(0),n("div",{staticClass:"cookie-notice__button-container"},[n("Tag",{attrs:{content:"Yeah … Cookies!",icon:"&check;",dark:""},nativeOn:{click:function(e){return t.cookieAccepted()}}}),n("span",{staticClass:"cookie-notice__denial transition",on:{click:function(e){return t.cookieDenied()}}},[t._v(" Nein, ich mag keine Cookies ")])],1)])]):t._e()},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Wir nutzen Cookies und Google Analytics um zu erfahren, wie viele Leute unsere Website besuchen und welche Inhalte sie am Interessantesten finden. Weitere Informationen hierzu findest du in unserer "),n("a",{attrs:{href:"/datenschutz"}},[t._v("Datenschutzerklärung")]),t._v(". "),n("br"),n("br"),n("strong",[t._v("Ist es ok für dich, dass wir aus diesem Grund Cookies setzen?")])])}],T={name:"CookieNotice",components:{Tag:M["a"]},props:{dark:Boolean},data:function(){return{cookie:null}},computed:{cookieSet:function(){return!this.$store.state.isCookieSet}},methods:{cookieAccepted:function(){o["a"].cookie.set("cookie-acceptance","1",7),this.$store.commit("cookieIsSet"),this.$ga.enable()},cookieDenied:function(){o["a"].cookie.set("cookie-acceptance","0",1),this.$store.commit("cookieIsSet"),this.$ga.disable()}},created:function(){this.cookie=o["a"].cookie.get("cookie-acceptance"),this.cookie&&this.$store.commit("cookieIsSet")}},$=T,j=(n("1a75"),Object(d["a"])($,L,B,!1,null,null,null)),P=j.exports,D={components:{Navigation:m,Loader:b,Footer:E,CookieNotice:P},data:function(){return{pages:null,routes:[],isDark:void 0,cookie:null}},methods:{isLoading:function(){return this.$store.state.loading},tracking:function(){this.cookie=o["a"].cookie.get("cookie-acceptance"),"1"===this.cookie&&this.$ga.page(this.$route.path)},excludeRoutes:function(t){var e=["404"];return e.includes(t)}},created:function(){var t=this;this.cookie=o["a"].cookie.get("cookie-acceptance"),this.$router.options.routes.forEach((function(e){e.name&&t.routes.push({name:e.name,path:e.path})})),"1"===this.cookie&&(this.$ga.enable(),this.tracking());var e=function(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://")};e()&&console.log("webapp is installed")},watch:{$route:function(){this.isDark=this.$router.currentRoute.path.includes("/vermietung"),this.tracking()}}},I=D,z=(n("5c0b"),Object(d["a"])(I,r,i,!1,null,null,null)),N=z.exports,H=(n("b635"),n("9483"));Object(H["a"])("".concat("/","service-worker.js"),{ready:function(t){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"),console.log("Registration scope:",t.scope)},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var R=n("a18c"),F=n("4360"),U=n("0284"),W=n.n(U);n("a41b");a["a"].config.productionTip=!1,a["a"].use(W.a,{id:"UA-155634377-4",disabled:!0,router:R["a"]}),new a["a"]({router:R["a"],store:F["a"],render:function(t){return t(N)}}).$mount("#app")},5709:function(t,e,n){"use strict";var a=n("a290"),r=n.n(a);r.a},"5b35":function(t,e,n){t.exports=n.p+"img/abdera-helfen.25a5fd2f.jpg"},"5c07":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"5cf7":function(t,e,n){},"5e43":function(t,e,n){},7038:function(t,e,n){},"71df":function(t,e,n){"use strict";var a=n("7038"),r=n.n(a);r.a},"75c6":function(t,e,n){"use strict";var a=n("5c07"),r=n.n(a);r.a},"79d3":function(t,e,n){t.exports=n.p+"img/abdera-start.31c75473.jpg"},"96ff":function(t,e,n){},"99d4":function(t,e,n){"use strict";var a=n("5689"),r=n.n(a);r.a},"9b05":function(t,e,n){},"9c0c":function(t,e,n){},a18c:function(t,e,n){"use strict";n("d3b7");var a=n("2b0e"),r=n("8c4f"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.page?a("div",{staticClass:"home"},[a("div",{staticClass:"home__wrapper base-grid"},[a("div",{staticClass:"home__image full"},[a("div",{staticClass:"home__title full base-grid"},[a("div",{staticClass:"home__title__wrapper content"},[t.page.subtitle?a("h2",{staticClass:"home__title__subtitle text--headline frame-bl",domProps:{innerHTML:t._s(t.page.subtitle)}}):t._e(),t.page.title?a("h1",{staticClass:"text--headline frame-br",domProps:{innerHTML:t._s(t.page.title)}}):t._e()])]),t.page.image?a("img",{attrs:{width:"1280",height:"768",src:t.page.image,alt:"Willkommen im Abdera",loading:"lazy"}}):a("img",{attrs:{width:"1280",height:"768",src:n("79d3"),alt:"Willkommen im Abdera",loading:"lazy"}})]),a("div",{staticClass:"home__description full base-grid"},[a("div",{staticClass:"home__description_wrapper content"},[a("div",{staticClass:"rendered-content rendered-content--tight rendered-content--onBlack",domProps:{innerHTML:t._s(t.page.content)}}),a("Tag",{staticClass:"home__description__link",attrs:{content:"Mehr über uns",url:"/abbe",dark:""}})],1)]),t.page.important.exists?a("Important",{attrs:{content:t.page.important}}):t._e()],1),a("Overview",{attrs:{show:"3"}}),a("div",{staticClass:"home__wrapper base-grid"},[t.page.blackboard?a("Blackboard",{attrs:{entries:t.page.blackboard}}):t._e(),a("div",{staticClass:"home__socialmedia content"},[a("SocialLink",{attrs:{type:"facebook",dark:""}}),a("SocialLink",{attrs:{type:"instagram",dark:""}}),a("SocialLink",{attrs:{type:"youtube",dark:""}})],1)],1),a("div",{staticClass:"home__wrapper base-grid"},[a("div",{staticClass:"home__help full base-grid"},[t._m(0),a("div",{staticClass:"home__help__wrapper content medium-right"},[a("div",{staticClass:"home__help__title"},[a("Headline",{attrs:{title:"Mach mit ...",frame:"br"}})],1),a("div",{staticClass:"home__help__content"},[a("p",{staticClass:"frame-bl"},[a("strong",[t._v("... werde Helfer:in!")]),a("br"),t._v(" Wir suchen immer fleißige Freiwillige, die mit uns den Laden schmeißen!"),a("br"),a("span",{staticClass:"home__help__button"},[a("Tag",{staticClass:"home__help__link",attrs:{content:"Helfer:in werden",url:"/mitmachen"}})],1)])])])])])],1):t._e()},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home__help__image full"},[a("img",{attrs:{width:"1280",height:"768",src:n("5b35"),alt:"Helfen im Abdera",loading:"lazy"}})])}],s=(n("d81d"),n("ed08")),c=n("53aa"),l=n("c009"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overview"},[n("div",{staticClass:"overview__container base-grid"},[n("div",{staticClass:"overview__container__left"},[n("router-link",{attrs:{to:"/programm"}},[n("h1",{staticClass:"frame-br"},[t._v("Nächste Veranstaltungen")])])],1)]),t._l(t.events.slice(0,3),(function(t){return[n("ProgramItem",{key:t.id,attrs:{event:t,overview:""}})]})),n("div",{staticClass:"overview__container base-grid"},[n("div",{staticClass:"overview__container__right"},[n("Tag",{attrs:{content:"Zum kompletten Programm",url:"/programm"}})],1)])],2)},d=[],_=(n("96cf"),n("1da1")),m=n("a972"),p={name:"Overview",components:{ProgramItem:m["a"],Tag:l["a"]},props:{show:String},computed:{events:function(){return this.$store.state.events.content}},mounted:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==this.$store.state.events.count){t.next=4;break}return this.$store.commit("isLoading",!0),t.next=4,s["a"].get.content("events",{per_page:this.show,orderby:"meta_value",meta_key:"event_date",order:"asc"}).then((function(t){return e.$store.commit("setEvents",s["a"].map.events(t))})).then(this.$store.commit("isLoading",!1)).catch((function(t){return console.error("Abdera is sorry:",t)}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},f=p,v=(n("71df"),n("2877")),g=Object(v["a"])(f,u,d,!1,null,"5d1b2cfa",null),h=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blackboard full base-grid"},[n("div",{staticClass:"blackboard__wrapper content "},[n("div",{staticClass:"blackboard__title text--subline"},[t._v("Aktuell")]),n("ul",{staticClass:"frame-bl"},t._l(t.entries,(function(e){return n("li",{key:e.home_blackboard_title},[n("div",[n("h1",[t._v(t._s(e.home_blackboard_title))]),n("div",{staticClass:"rendered-content rendered-content--tight rendered-content--onBlack not-indented",domProps:{innerHTML:t._s(e.home_blackboard_content)}})])])})),0)])])},k=[],w={name:"Blackboard",props:{entries:Array,area:Object}},C=w,y=(n("5709"),Object(v["a"])(C,b,k,!1,null,"f9c6316e",null)),x=y.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"important full base-grid"},[n("div",{staticClass:"important__image full"},[n("img",{attrs:{width:"1280",height:"600",src:t.content.image,alt:"Background Image",loading:"lazy"}})]),n("div",{staticClass:"important__wrapper content"},[n("div",{staticClass:"important__title"},[n("Headline",{attrs:{title:t.content.title,frame:"br"}})],1),n("div",{staticClass:"important__content"},[n("p",{staticClass:"frame-bl"},[n("span",{staticClass:"rendered_content",domProps:{innerHTML:t._s(t.content.content)}}),t.linkExists?n("Tag",{staticClass:"important__content__link",attrs:{content:t.content.link.title,url:t.content.link.url}}):t._e()],1)])])])},S=[],O=(n("9911"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"headline",class:this.selectFrame},[t._v(" "+t._s(t.title)+" ")])}),A=[],E={name:"Headline",props:{title:String,frame:String},computed:{selectFrame:function(){return{br:"frame-br",bl:"frame-bl"}[this.frame]}}},L=E,B=(n("e60c"),Object(v["a"])(L,O,A,!1,null,null,null)),T=B.exports,$={name:"Important",components:{Headline:T,Tag:l["a"]},props:{content:Object},computed:{linkExists:function(){return this.content.link.title&&this.content.link.url}}},j=$,P=(n("24c4"),Object(v["a"])(j,M,S,!1,null,"765bed74",null)),D=P.exports,I={name:"Home",components:{Overview:h,Tag:l["a"],Blackboard:x,Important:D,Headline:T,SocialLink:c["a"]},data:function(){return{page:null}},computed:{important:function(){return this.page.important.title&&this.page.important.content}},methods:{getContent:function(t){var e=this;this.$store.commit("isLoading",!0),s["a"].get.content("pages?slug="+t).then((function(t){return e.page=s["a"].map.home(t[0])})).then(this.$store.commit("isLoading",!1))}},mounted:function(){this.getContent("startseite")}},z=I,N=(n("21bb"),Object(v["a"])(z,i,o,!1,null,null,null)),H=N.exports,R=function(){return Promise.resolve(n.e("chunk-0ad3555e").then(n.bind(null,"6ec4")))},F=function(){return Promise.resolve(n.e("chunk-0dbf735e").then(n.bind(null,"2048")))},U=function(){return Promise.resolve(n.e("chunk-7a61477e").then(n.bind(null,"d3dc")))},W=function(){return Promise.resolve(n.e("chunk-3f873adf").then(n.bind(null,"9703")))};a["a"].use(r["a"]);var K=[{path:"/",component:H},{path:"/programm",name:"Programm",component:R},{path:"/event/:id",component:U},{path:"/abbe",name:"Das Abdera",component:F},{path:"/besuch",name:"Der Besuch",component:F},{path:"/mitmachen",name:"Mitmachen",component:F},{path:"/:slug",component:F},{path:"/404",name:"404",component:W},{path:"*",redirect:"/404"}],V=new r["a"]({routes:K,mode:"history",scrollBehavior:function(t,e,n){return n||{x:0,y:0}}});e["a"]=V},a290:function(t,e,n){},a41b:function(t,e,n){},a972:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"program__item base-grid"},[n("router-link",{staticClass:"program__item__link content",attrs:{to:/event/+t.event.id,"aria-label":"Bald im Abdera Biberach:"+t.event.title}}),t.event.image?n("div",{staticClass:"program__item__image content"},[n("img",{attrs:{src:t.event.image,alt:"Bald im Abdera Biberach: "+t.event.title,width:"900",height:"450",loading:"lazy"}})]):t._e(),n("div",{staticClass:"program__item--left"},[t.overview?n("ProgramItemDate",{attrs:{weekday:t.event.date.weekday,day:t.event.date.day,month:t.event.date.month}}):n("ProgramItemDate",{attrs:{weekday:t.event.date.weekday,day:t.event.date.day}})],1),n("div",{staticClass:"program__item--right"},[n("div",[n("div",{staticClass:"program__item__type text--subline"},t._l(t.event.types,(function(e){return n("div",{key:e[2]},[n("span",[t._v(t._s(e[0]))])])})),0),n("router-link",{attrs:{to:/event/+t.event.id}},[n("h1",{staticClass:"program__item__title",domProps:{innerHTML:t._s(t.event.title)}})]),n("div",{staticClass:"program__item__info text--subline"},[t.event.entry_tba?n("span",[t._v(" Einlass: TBA • ")]):t.event.entry?n("span",[t._v(" Einlass "+t._s(t.event.entry)+" • ")]):t._e(),t.event.price_tba?n("span",[t._v(" Preis: TBA ")]):"0"!==t.event.ak||"0"!==t.event.vvk&&t.event.vvk?t.event.ak&&t.event.vvk?n("span",[t._v(" AK €"+t._s(t.event.ak)+t._s(t.event.akDisc?"/€"+t.event.akDisc:"")+" • VVK €"+t._s(t.event.vvk)+t._s(t.event.vvkDisc?"/€"+t.event.vvkDisc:"")+" ")]):n("span",[t._v(" €"+t._s(t.event.ak)+t._s(t.event.akDisc?"/€"+t.event.akDisc:"")+" ")]):n("span",[t._v(" Eintritt frei ")])])],1),n("div",{staticClass:"program__item__tags--container"},[t.event.tags?n("div",{staticClass:"program__item__tags"},t._l(t.event.tags,(function(t){return n("Tag",{key:t,attrs:{content:t}})})),1):t._e(),n("div",{staticClass:"program__item__tags"},[t.event.quick.includes("vvk_address")?n("Tag",{attrs:{content:"VVK",url:t.event.tickets}}):t._e(),t.event.quick.includes("partypass")?n("Tag",{attrs:{content:"Partypass",url:"https://www.partypass.de/"}}):t._e()],1)])]),n("div",{staticClass:"program__item__border content"})],1)},r=[],i=n("c009"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"programm__item__date"},[n("div",{staticClass:"programm__item__date__container frame-br"},[n("span",{staticClass:"tex--subline"},[t._v(t._s(t.weekday))]),n("h1",[t._v(t._s(t.day)+".")]),t.month?n("span",{staticClass:"tex--subline"},[t._v(t._s(t.month))]):t._e()])])},s=[],c={name:"ProgramItemDate",props:{weekday:String,day:String,month:String}},l=c,u=(n("08e6"),n("2877")),d=Object(u["a"])(l,o,s,!1,null,null,null),_=d.exports,m={name:"ProgramItem",components:{Tag:i["a"],ProgramItemDate:_},props:{event:Object,overview:Boolean}},p=m,f=(n("99d4"),Object(u["a"])(p,a,r,!1,null,null,null));e["a"]=f.exports},b323:function(t,e,n){"use strict";var a=n("5cf7"),r=n.n(a);r.a},b635:function(t,e){var n=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(n,"px")),window.addEventListener("resize",(function(){n=.01*window.innerHeight,document.documentElement.style.setProperty("--vh","".concat(n,"px"))}))},ba22:function(t,e,n){t.exports=n.p+"img/abdera-logo.3219241b.svg"},bbf2:function(t,e,n){"use strict";var a=n("96ff"),r=n.n(a);r.a},c009:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t.url?n("a",{staticClass:"tag transition",class:{tag__link:t.url||t.button||t.icon,"tag--light":t.dark},attrs:{href:t.url}},[t.url?n("span",[t._v("→")]):t._e(),t.button?n("span",[t._v("↓")]):t._e(),t.icon?n("span",{domProps:{innerHTML:t._s(t.icon)}}):t._e(),t._v(" "+t._s(t.content.charAt(0).toUpperCase()+t.content.slice(1))+" ")]):n("span",{staticClass:"tag transition",class:{tag__link:t.url||t.button||t.icon,"tag--light":t.dark}},[t.url?n("span",[t._v("→")]):t._e(),t.button?n("span",[t._v("↓")]):t._e(),t.icon?n("span",{domProps:{innerHTML:t._s(t.icon)}}):t._e(),t._v(" "+t._s(t.content.charAt(0).toUpperCase()+t.content.slice(1))+" ")])])},r=[],i={name:"Tag",props:{content:String,url:String,icon:String,button:Boolean,dark:Boolean}},o=i,s=(n("b323"),n("2877")),c=Object(s["a"])(o,a,r,!1,null,null,null);e["a"]=c.exports},e60c:function(t,e,n){"use strict";var a=n("5e43"),r=n.n(a);r.a},ed08:function(t,e,n){"use strict";n("caad"),n("d81d"),n("b0c0"),n("d3b7"),n("ac1f"),n("2532"),n("466d"),n("5319");var a=n("3835"),r=(n("96cf"),n("1da1")),i=(n("6d93"),n("9b02")),o=n.n(i),s=n("a78e"),c=n.n(s),l=n("f121"),u=n.n(l),d=n("a18c"),_=n("4360"),m={getContent:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,a,r,i,o,s,c,l,d,m=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=m.length>1&&void 0!==m[1]?m[1]:{},a="",r="",i="",o=e.includes("options")?"acf/v3/":"wp/v2/",n.pages&&n.pages.map((function(t){a+="&_include[]="+t})),n.fields&&n.fields.map((function(t){r+="&_fields[]="+t})),i+=n.per_page?"&per_page="+n.per_page:"",i+=n.offset?"&offset="+n.offset:"",i+=n.orderby?"&orderby="+n.orderby:"",i+=n.meta_key?"&meta_key="+n.meta_key:"",i+=n.order?"&order="+n.order:"",s=a||r||i?"?"+a+r+i:"",c=u.a.API_LOCATION+o+e+s,t.next=16,window.fetch(c);case 16:if(l=t.sent,200!=l.status){t.next=24;break}return"events"===e&&_["a"].commit("setTotalEvents",l.headers.get("X-WP-Total")),t.next=21,l.json();case 21:if(d=t.sent,!d.length){t.next=24;break}return t.abrupt("return",d);case 24:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),eventMapper:function(t,e){if(t)return t.map((function(t){return console.log(t),{id:t.id||"",title:o()(t,"title.rendered"),content:p(o()(t,"content.rendered")),types:t.cats?t.cats.map((function(t){return[t.name,t.slug,t.cat_ID]})):"",tags:t.custom_tags?t.custom_tags.map((function(t){return t.name})):"",date:v(o()(t,"acf.event_date"),e),entry:o()(t,"acf.event_entry"),start:o()(t,"acf.event_start"),end:o()(t,"acf.event_end"),entry_tba:o()(t,"acf.event_entry_tba"),price_tba:o()(t,"acf.event_price_tba"),location:o()(t,"acf.event_common_information.event_location"),organizer:o()(t,"acf.event_common_information.event_organizer"),presenter:o()(t,"acf.event_common_information.event_presenter"),spotify:o()(t,"acf.event_common_information.event_spotify"),website:o()(t,"acf.event_common_information.event_website"),image:o()(t,"acf.event_common_information.event_image"),vvk:o()(t,"acf.event_sale_information.event_pre_sale"),vvkDisc:o()(t,"acf.event_sale_information.event_pre_sale_disc"),ak:o()(t,"acf.event_sale_information.event_box_office"),akDisc:o()(t,"acf.event_sale_information.event_box_office_disc"),tickets:o()(t,"acf.event_sale_information.event_ticket_link"),quick:o()(t,"acf.event_quick_information")}}))},pageMapper:function(t){if(t)return{id:t.id||"",title:o()(t,"acf.page_title"),subtitle:o()(t,"acf.page_subtitle"),image:o()(t,"acf.page_image"),wp_title:o()(t,"title.rendered"),content:o()(t,"content.rendered")}},homeMapper:function(t){if(t)return{id:t.id||"",title:o()(t,"acf.page_title"),subtitle:o()(t,"acf.page_subtitle"),image:o()(t,"acf.page_image"),blackboard:o()(t,"acf.home_blackboard"),important:{exists:o()(t,"acf.home_is_important"),title:o()(t,"acf.home_important.home_important_title"),content:o()(t,"acf.home_important.home_important_content"),image:o()(t,"acf.home_important.home_important_image"),link:o()(t,"acf.home_important.home_important_link")},content:o()(t,"content.rendered")}},errorRouter:function(t){404==t.message&&d["a"].push("/404")},translateWeekday:function(t){return{Mon:"Mo",Tue:"Di",Wed:"Mi",Thu:"Do",Fri:"Fr",Sat:"Sa",Sun:"So"}[t]},translateMonth:function(t){return{Jan:"Jan",Feb:"Feb",Mar:"März",Apr:"Apr",May:"Mai",Jun:"Jun",Jul:"Jul",Aug:"Aug",Sep:"Sept",Oct:"Okt",Nov:"Nov",Dec:"Dez"}[t]},setCookie:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;c.a.set(t,e,{expires:n})},getCookie:function(t){return c.a.get(t)}};function p(t){return t.replace(/https:\/\/www.youtube.com\/embed/g,"https://www.youtube-nocookie.com/embed")}var f=null;function v(t,e){var n,r=t.substring(0,4),i=t.substring(4,6),o=t.substring(6,8),s=new Date(r,i-1,o)+"",c=s.match(/(.{3})\s(.{3})\s(\d{2})\s(\d{4})/),l=Object(a["a"])(c,5),u=l[0],d=l[1],_=l[2],p=l[3],v=l[4];if(null!=f){var g=f!=_;f=_,n=g}else f=_,n=!0;return e&&(f=null),{full:{en:u},weekday:m.translateWeekday(d),day:p,month:m.translateMonth(_),year:v,change:n}}e["a"]={get:{content:m.getContent},map:{events:m.eventMapper,event:m.singleEventMapper,page:m.pageMapper,home:m.homeMapper},error:{route:m.errorRouter},cookie:{get:m.getCookie,set:m.setCookie},translate:{weekday:m.translateWeekday,month:m.translateMonth}};m.getContent,m.errorRouter,m.getCookie,m.setCookie,m.eventMapper,m.pageMapper,m.homeMapper,m.translateWeekday,m.translateMonth},f121:function(t,e){t.exports={BASE_URL:"".concat(window.location.origin,"/"),API_LOCATION:"https://backend.abdera-bc.de/wp-json/",FACEBOOK:"https://www.facebook.com/Abdera.BC",INSTAGRAM:"https://www.instagram.com/abdera.bc/",YOUTUBE:"https://www.youtube.com/c/KulturhalleAbdera"}}});
//# sourceMappingURL=app.4efeedbf.js.map