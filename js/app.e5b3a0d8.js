(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function a(e){return u.p+"js/"+({404:"404",about:"about",pokemon:"pokemon"}[e]||e)+"."+{404:"bb8b7708",about:"a69c5040",pokemon:"a9efbc37","chunk-2d21e38c":"d03bca4b"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var l=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/pokedex/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var b=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d73":function(e,t,n){"use strict";n("f103")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"container"},c=Object(r["k"])("header",null,[Object(r["k"])("h1",{class:"text-7xl mt-0 text-500 text-center uppercase"},"pokedex")],-1),a={class:"max-w-screen w-10 m-auto surface-50 p-3"},u=Object(r["k"])("footer",{class:"flex justify-content-center bg-surface-0"},[Object(r["k"])("p",{class:"text-xl"},[Object(r["l"])(" Developed by "),Object(r["k"])("a",{href:"https://github.com/19r3ka"},"19r3ka")])],-1),i={setup:function(e){return Object(r["x"])((function(e){console.log("error happened",e.message)})),function(e,t){var n=Object(r["G"])("router-view");return Object(r["A"])(),Object(r["j"])("div",o,[c,Object(r["k"])("main",a,[Object(r["m"])(n,null,{default:Object(r["N"])((function(e){var t=e.Component,n=e.route;return[Object(r["m"])(r["d"],{name:n.meta.transitionName||"fade",mode:"out-in"},{default:Object(r["N"])((function(){return[(Object(r["A"])(),Object(r["h"])(r["b"],null,[(Object(r["A"])(),Object(r["h"])(Object(r["I"])(t),{key:n.path}))],1024))]})),_:2},1032,["name"])]})),_:1})]),u])}}};n("fdf4");const l=i;var s=l,b=n("9483");Object(b["a"])("".concat("/pokedex/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0"),n("ac1f"),n("1276");var f=n("6c02"),p=n("1da1"),d=n("ade3"),m=(n("96cf"),n("159b"),n("4de4"),n("caad"),n("2532"),n("b0c0"),n("4e82"),n("5319"),n("9899")),j=n("bb57"),O=n("a1e6"),g=n("5072"),h=n("bdc0"),v=n("8398"),k=n("a5af"),y=n("fa3e"),w={class:"page"},x={id:"toolbar",class:"mb-4"},N={class:"p-input-icon-left"},L=Object(r["k"])("i",{class:"pi pi-filter"},null,-1),_={id:"pokemon-list",class:"grid row-gap-2 justify-content-between"},A=["src","alt"],P={class:"capitalize text-600"},C={id:"cto",class:"grid justify-content-center mt-5"},E={setup:function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";return fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.next,n=e.results;c.value=t,n.forEach((function(e){var t=e.url;return Object(y["a"])(t).then((function(e){return a.push(e)}))}))})).then((function(){return i.value=""})).catch((function(e){return"Something went wrong: ".concat(e)}))}var n=Object(r["f"])((function(){return a.filter((function(e){return e.name.toLowerCase().includes(u.value.toLowerCase())}))}));function o(e){var t,n=(t={id:function(e,t){return e.id-t.id},name:function(e,t){return e.name.localeCompare(t.name)}},Object(d["a"])(t,"-id",(function(e,t){return t.id-e.id})),Object(d["a"])(t,"-name",(function(e,t){return t.name.localeCompare(e.name)})),t);Object.hasOwnProperty.call(n,e)&&a.sort(n[e])}var c=Object(r["D"])(""),a=Object(r["C"])([]),u=Object(r["D"])(""),i=Object(r["D"])(""),l=Object(r["C"])([{icon:"pi pi-sort-alpha-down",value:"name"},{icon:"pi pi-sort-alpha-up",value:"-name"},{icon:"pi pi-sort-numeric-down",value:"id"},{icon:"pi pi-sort-numeric-up",value:"-id"}]),s=Object(f["e"])(),b=Object(f["d"])();return Object(r["y"])(Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:b.query.sort&&o(b.query.sort);case 3:case"end":return e.stop()}}),e)})))),Object(r["M"])((function(){return b.query.sort}),(function(e){o(e),i.value=l.filter((function(t){return t.value===e})).pop()})),function(e,o){var a=Object(r["G"])("router-link");return Object(r["A"])(),Object(r["j"])("div",w,[Object(r["k"])("div",x,[Object(r["m"])(Object(r["L"])(h["a"]),{class:"surface-0"},{start:Object(r["N"])((function(){return[Object(r["k"])("span",N,[L,Object(r["m"])(Object(r["L"])(v["a"]),{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=function(e){return u.value=e}),type:"text",placeholder:"Filter pokemons"},null,8,["modelValue"])])]})),end:Object(r["N"])((function(){return[Object(r["m"])(Object(r["L"])(k["a"]),{modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=function(e){return i.value=e}),options:Object(r["L"])(l),"data-key":"value",onChange:o[2]||(o[2]=function(e){return Object(r["L"])(s).replace({name:"Home",query:{sort:i.value.value}})})},{option:Object(r["N"])((function(e){return[Object(r["k"])("i",{class:Object(r["t"])(e.option.icon)},null,2)]})),_:1},8,["modelValue","options"])]})),_:1})]),Object(r["k"])("div",_,[Object(r["m"])(r["e"],{name:"list"},{default:Object(r["N"])((function(){return[(Object(r["A"])(!0),Object(r["j"])(r["a"],null,Object(r["E"])(Object(r["L"])(n),(function(e){return Object(r["A"])(),Object(r["h"])(Object(r["L"])(m["a"]),{key:e.id,class:"col-12 md:col-4 lg:col-3 shadow-none"},{header:Object(r["N"])((function(){return[Object(r["k"])("img",{src:e.image,alt:e.name},null,8,A)]})),subtitle:Object(r["N"])((function(){return[Object(r["l"])("No. "+Object(r["K"])(e.displayId),1)]})),title:Object(r["N"])((function(){return[Object(r["m"])(a,{to:{name:"Pokemon",params:{id:e.id}},class:"no-underline"},{default:Object(r["N"])((function(){return[Object(r["k"])("span",P,Object(r["K"])(e.name),1)]})),_:2},1032,["to"])]})),content:Object(r["N"])((function(){return[(Object(r["A"])(!0),Object(r["j"])(r["a"],null,Object(r["E"])(e.types,(function(e){return Object(r["A"])(),Object(r["h"])(Object(r["L"])(O["a"]),{key:e,label:e,class:Object(r["t"])(["px-2 capitalize",Object(r["L"])(y["c"])[e]])},null,8,["label","class"])})),128))]})),_:2},1024)})),128))]})),_:1})]),Object(r["k"])("div",C,[Object(r["m"])(Object(r["L"])(j["a"]),{label:"load more",class:"text-2xl col-4 uppercase",onClick:o[3]||(o[3]=function(e){return t(Object(r["L"])(c))})})]),Object(r["m"])(Object(r["L"])(g["a"]))])}}};n("0d73");const S=E;var q=S,M=[{path:"/",name:"Home",component:q},{path:"/pokemon",redirect:function(){return{path:"/"}}},{path:"/pokemon/:id",name:"Pokemon",component:function(){return n.e("pokemon").then(n.bind(null,"a82c"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/:pathMatch(.*)*",name:"PageNotFound",component:function(){return n.e("404").then(n.bind(null,"a5b5"))}}],V=Object(f["a"])({history:Object(f["b"])(),routes:M});V.afterEach((function(e,t){var n=e.path.split("/").length,r=t.path.split("/").length;e.meta.transitionName=n<r?"fadeinleft":"fadeinright"}));var T=V,D=n("9319"),F=(n("bddf"),n("7a3c"),n("e1ae"),n("4121"),Object(r["g"])(s));F.use(T),F.use(D["a"]),F.mount("#app")},b9aa:function(e,t,n){},f103:function(e,t,n){},fa3e:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u}));var r=n("1da1");n("96cf"),n("4d90"),n("d3b7"),n("25f0"),n("b0c0"),n("d81d"),n("d9e2"),n("99af");function o(e){return c.apply(this,arguments)}function c(){return c=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(n=e.sent,n.ok){e.next=5;break}throw new Error("".concat(n.status,": ").concat(n.statusText));case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",i(r));case 9:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function a(e){var t="https://pokeapi.co/api/v2/pokemon/".concat(e);return o(t)}var u={bug:"bg-yellow-100",dark:"bg-gray-800",dragon:"bg-indigo-100",electric:"bg-yellow-300",fairy:"bg-pink-100",fighting:"bg-red-100",fire:"bg-orange-100",flying:"bg-cyan-200",ghost:"bg-teal-100",grass:"bg-green-100",ground:"bg-orange-600",ice:"bg-blue-100",normal:"bg-gray-100",poison:"bg-purple-200",psychic:"bg-pink-500",rock:"bg-orange-200",steel:"bg-gray-500",water:"bg-blue-300"};function i(e){return{id:e.id,displayId:e.id.toString().padStart(3,"0"),name:e.name,image:e.sprites.other["official-artwork"].front_default,types:e.types.map((function(e){return e.type.name})),abilities:e.abilities.map((function(e){return e.ability.name})),forms:e.forms.map((function(e){return e.name})),stats:e.stats.map((function(e){return{name:e.stat.name,value:e.base_stat}}))}}},fdf4:function(e,t,n){"use strict";n("b9aa")}});
//# sourceMappingURL=app.e5b3a0d8.js.map