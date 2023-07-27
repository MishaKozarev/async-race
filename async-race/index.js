(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(81),i=n.n(r),a=n(645),o=n.n(a),c=n(667),s=n.n(c),d=new URL(n(512),n.b),l=new URL(n(3),n.b),u=o()(i()),h=s()(d),p=s()(l);u.push([e.id,`body {\n    display: flex;\n    flex-direction: column;\n    /* background: rgb(39, 38, 38); */\n    background: url(${h});\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100vw;\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n    color: beige;\n    box-sizing: border-box;\n    min-width: 460px;\n}\n\nbutton {\n    cursor: pointer;\n     margin: 5px;\n\n}\n\n.update__input-color,\n.create__input-color{\n    height: 20px;\n}\n\n.update__input-text,\n.create__input-text{\n    height: 15px;\n}\n\n.header {\n    height: 5vh;\n    padding: 15px;\n}\n\n.btn-garage,\n.btn-winner {\n    width: 100px;\n    height: 25px;\n    background: rgb(49, 231, 25);\n    margin-right: 10px;\n}\n\n.main {\n    width: 100vw;\n    /* height: 90vh; */\n    height: 1500px;\n}\n\n.section-garage {\n    display: block;\n    padding: 0 20px;\n}\n\n.control {\n    width: 400px;\n    height: 100px;\n    display: grid;\n    grid-template-columns: 50% 20% 30%;\n    grid-template-rows: 1fr 1fr 1fr;\n    gap: 7px;\n}\n\n.btn-race {\n    background: rgb(25, 231, 231);\n}\n\n.btn-create,\n.btn-update {\n    background: rgb(76, 238, 62);\n}\n\n.btn-reset {\n    background: rgb(255, 252, 83);\n}\n\n.btn-generate {\n    background: rgb(239, 80, 245);\n}\n\n.track {\n    position: relative;\n    height: 60px;\n    border-bottom: dotted;\n    margin-bottom: 10px;\n}\n\n.car-image svg{\n    width: 100px;\n    position: absolute;\n    bottom: 0;\n    transition: all 2s ease-in-out;\n    left: 0;\n}\n\n.car-image.go {\n    transform: translate(89vw,0);\n    transition: all 2s ease-in-out;\n}\n\n.flag {\n    width: 40px;\n    height: 40px;\n    background-image: url(${p});\n    background-size: 40px 40px;\n    position: absolute;\n    right: 100px;\n    bottom: 0;\n}\n\n.btn-select,\n.btn-remove {\n    background: rgb(25, 231, 231);\n}\n\n\n.btn-start,\n.btn-stop {\n    width: 60px;\n    height: 20px;\n    border-radius: 1px;\n    background: rgb(22, 22, 22);\n    margin-right: 10px;\n    color: beige;\n}\n\n.track__race {\n    width: 90%;\n    display: flex;\n    justify-content: end;\n}\n\n.section-winner {\n    display: none;\n    padding: 20px;\n}\n\ntable {\n    border-collapse: collapse;\n  }\n\nth,\ntd {\n    border: #413a3a9a 3px solid;\n    padding: 2px;\n    min-width: 50px;\n    color: rgb(0, 0, 0);\n    background: white;\n}\n\n.footer {\n    height: 5vh;\n    padding: 20px;\n}\n\n.go {\n    transform: translate(350px,0);\n}\n\n.winner {\n    position: absolute;\n    top:25%;\n    left:70%;\n    transform:translate(-50%, -50%);\n    width:50vw;\n    height: 30vh;\n    display: block;\n    color: rgb(81, 255, 0);\n    font-size: 50px;\n    z-index: 3;\n}`,""]);const m=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var h=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var m=i(p,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}o.push(u)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var c=n(a[o]);t[c].references--}for(var s=r(e,i),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},512:(e,t,n)=>{e.exports=n.p+"bacc5f5c229846e575bf.gif"},3:(e,t,n)=>{e.exports=n.p+"907d479f5d814f8ae230.png"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!e;)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),a=n(569),o=n.n(a),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),h=n.n(u),p=n(426),m={};m.styleTagTransform=h(),m.setAttributes=s(),m.insert=o().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;const g={header:"header",main:"main",footer:"footer",section:"section",btn:"button",div:"div",input:"input",h2:"h2",h4:"h4",span:"span",table:"table",th:"th"},v={header:"header",main:"main",footer:"footer",sectionGarage:"section-garage",sectionWinner:"section-winner",btnGarage:"btn-garage",btnWinner:"btn-winner",control:"control",btnCreate:"btn-create",btnUpdate:"btn-update",inputTextCreate:"create__input-text",inputColorCreate:"create__input-color",inputTextUpdate:"update__input-text",inputColorUpdate:"update__input-color",btnRace:"btn-race",btnReset:"btn-reset",btnGenerate:"btn-generate",countGarage:"title-garage",numGarage:"subtitle-garage",countWinner:"title-garage",numWinner:"subtitle-garage",btnPrev:"btn-prev",btnNext:"btn-next",track:"track",carImage:"car-image",carName:"car-name",btnStart:"btn-start",btnStop:"btn-stop",btnSelect:"btn-select",btnRemove:"btn-remove",divTrack:"track",table:"table",th:"th",flag:"flag",container:"container",winner:"winner"},b={btnGarage:"TO GARAGE",btnWinner:"TO WINNER",btnCreate:"CREATE",btnUpdate:"UPDATE",btnRace:"RACE",btnReset:"RESET",btnGenerate:"GENERATE",countGarage:"Garage(1)",numGarage:"Page#1",countWinner:"Garage(1)",numWinner:"Page#1",btnNext:"NEXT",btnPrev:"PREV",btnStart:"START",btnStop:"STOP",btnSelect:"SELECT",btnRemove:"REMOVE",number:"number",car:"car",name:"name",winner:"winner",best:"best-time"},f={type:"type"},y={text:"text",color:"color"},E='<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="50pt" height="20pt" viewBox="0 0 923.000000 375.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,375.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M113 3424 c-3 -8 -3 -46 -1 -83 12 -166 132 -293 302 -321 32 -5 60 -11 62 -12 10 -11 73 -283 66 -290 -4 -4 -45 -19 -89 -32 -103 -30 -143 -53 -166 -96 -22 -43 -20 -87 18 -295 l27 -151 -62 -189 -63 -190 0 -135 c1 -143 17 -378 33 -470 13 -70 52 -126 114 -165 l49 -30 288 -5 c158 -3 289 -7 292 -10 2 -3 14 -31 27 -64 64 -161 208 -314 375 -399 193 -97 490 -95 689 5 70 35 187 130 243 198 51 62 143 226 143 256 0 12 323 14 2225 12 l2226 -3 32 -75 c88 -203 267 -368 466 -430 102 -32 233 -44 342 -30 203 24 350 106 500 277 47 54 139 218 139 249 0 12 42 14 249 14 l248 0 46 40 c25 22 57 60 71 84 25 43 26 50 26 216 0 167 -1 173 -26 216 -15 25 -55 70 -91 102 -36 31 -90 91 -121 132 -163 216 -226 277 -348 338 -77 39 -57 35 -664 157 -289 59 -571 117 -627 130 -121 29 -185 57 -738 330 -668 330 -805 395 -882 421 -178 60 -473 79 -1238 79 -569 0 -724 -6 -1140 -41 -706 -59 -1461 -178 -2174 -344 -118 -28 -215 -49 -216 -47 -5 7 -45 174 -45 185 0 11 19 12 95 7 l94 -7 7 27 c12 47 -3 144 -31 200 -28 59 -99 136 -146 160 -40 21 -129 40 -326 69 -203 31 -291 33 -300 10z m4799 -564 c294 -11 407 -24 508 -56 41 -13 282 -127 535 -253 526 -263 784 -400 799 -423 13 -21 -13 -52 -69 -81 -39 -20 -49 -20 -600 -13 -1652 19 -2854 101 -3067 208 -31 15 -38 24 -38 49 0 66 73 169 231 328 186 186 257 224 455 240 142 12 954 12 1246 1z m-2162 -21 c0 -13 -26 -47 -66 -86 -80 -78 -158 -117 -265 -132 -112 -15 -433 -35 -452 -28 -28 10 -20 28 36 82 84 82 154 111 342 140 227 35 282 42 348 44 52 1 57 -1 57 -20z m-2089 -758 c133 -45 134 -46 168 -122 35 -79 37 -92 15 -113 -12 -13 -39 -16 -137 -15 -125 0 -221 10 -234 23 -16 16 12 168 43 228 19 36 38 36 145 -1z m2427 -158 c35 -25 76 -62 91 -83 64 -88 278 -540 266 -560 -10 -16 -26 -12 -100 24 -91 43 -154 100 -192 173 -29 53 -171 396 -188 451 -9 30 11 54 39 46 12 -4 49 -27 84 -51z m5147 -13 c93 -16 174 -35 181 -42 7 -7 48 -60 93 -118 55 -71 77 -106 67 -108 -8 -2 -76 13 -152 32 l-138 36 -110 84 c-61 47 -127 98 -146 115 l-35 30 35 1 c19 0 111 -13 205 -30z m-6382 -320 c111 -34 199 -112 260 -232 31 -60 32 -68 32 -178 0 -110 -1 -118 -31 -175 -105 -200 -310 -296 -503 -236 -83 26 -137 60 -198 123 -94 100 -134 221 -114 346 43 268 299 431 554 352z m5970 -17 c94 -45 168 -118 217 -216 38 -76 40 -83 40 -176 0 -90 -2 -102 -35 -170 -46 -95 -126 -176 -220 -222 -66 -32 -76 -34 -171 -34 -96 0 -103 2 -177 38 -135 67 -223 182 -248 324 -22 125 28 271 124 367 93 93 179 127 312 123 77 -2 100 -7 158 -34z"/><path d="M1623 1328 c-48 -34 -73 -86 -73 -149 0 -66 23 -108 79 -145 36 -23 48 -26 105 -22 50 3 71 10 99 31 66 50 87 172 40 235 -39 52 -70 66 -146 70 -62 3 -76 0 -104 -20z"/><path d="M7545 1319 c-49 -43 -65 -78 -65 -142 0 -44 5 -62 31 -96 39 -54 86 -74 159 -69 99 7 154 67 154 168 1 65 -24 114 -74 147 -26 18 -47 23 -101 23 -62 0 -71 -3 -104 -31z"/></g></svg>',S={idUpdate:"",pageCarsNumber:"1",recordsAnimation:[]};class w{constructor(){w.recordsAnimation=[],w.winnersId=[]}getAnimation(){console.log(w.recordsAnimation)}}const x=w,C="http://localhost:3000/",$="garage";var k=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((r=r.apply(e,t||[])).next())}))};const T=class{getCars(e,t){return k(this,void 0,void 0,(function*(){const n=t||`${S.pageCarsNumber}`,r=e?yield fetch(`${C}${$}/${e}`):yield fetch(`${C}${$}?_page=${n}&_limit=7`);return[yield r.json(),r.headers.get("X-Total-Count"),n]}))}getCarsAll(){return k(this,void 0,void 0,(function*(){const e=yield fetch(`${C}${$}`);return yield e.json()}))}createCar(e,t){return k(this,void 0,void 0,(function*(){const n=yield fetch(`${C}${$}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:`${e}`,color:`${t}`})});return[yield n.json()]}))}updateCar(e,t,n){return k(this,void 0,void 0,(function*(){yield fetch(`${C}${$}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:`${t}`,color:`${n}`})})}))}deleteCar(e){return k(this,void 0,void 0,(function*(){return yield fetch(`${C}${$}/${e}`,{method:"DELETE"}),e}))}startStopEngine(e,t){return k(this,void 0,void 0,(function*(){const n=yield fetch(`${C}engine?id=${e}&status=${t}`,{method:"PATCH"});return yield n.json()}))}carRun(e){return k(this,void 0,void 0,(function*(){const t=yield fetch(`${C}engine?id=${e}&status=drive`,{method:"PATCH"});return yield t.json()}))}getWinners(){return k(this,void 0,void 0,(function*(){const e=yield fetch(`${C}winners/`);return yield e.json()}))}getWinner(e){return k(this,void 0,void 0,(function*(){const t=yield fetch(`${C}winners/${e}`);return yield t.json()}))}createWinner(e,t,n){return k(this,void 0,void 0,(function*(){yield fetch(`${C}winners`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:+e,wins:+t,time:+n})})}))}};var q=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((r=r.apply(e,t||[])).next())}))};var A=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((r=r.apply(e,t||[])).next())}))};(new class{constructor(){this.view=new class{constructor(){this.body=document.querySelector("body"),this.sectionGarage=this.createElem(g.section,v.sectionGarage),this.animations=new x,this.requestServer=new T}createElem(e,t,n){const r=document.createElement(`${e}`);return r.className=t,n&&(r.innerHTML=n),r}createElemTrack(e,t,n){const r=document.createElement(`${e}`);return r.className=t,r.id=n,r}createInput(e,t,n,r){const i=document.createElement(`${e}`);return i.className=t,n&&i.setAttribute(`${n}`,`${r}`),i}createPage(){var e;const t=this.createElem(g.header,v.header),n=this.createElem(g.main,v.main),r=this.createElem(g.footer,v.footer),i=this.createElem(g.section,v.sectionWinner),a=this.createElem(g.btn,v.btnGarage,b.btnGarage),o=this.createElem(g.btn,v.btnWinner,b.btnWinner),c=this.createElem(g.div,v.control),s=this.createInput(g.input,v.inputTextCreate,f.type,y.text),d=this.createInput(g.input,v.inputColorCreate,f.type,y.color),l=this.createElem(g.btn,v.btnCreate,b.btnCreate),u=this.createInput(g.input,v.inputTextUpdate,f.type,y.text),h=this.createInput(g.input,v.inputColorUpdate,f.type,y.color),p=this.createElem(g.btn,v.btnUpdate,b.btnUpdate),m=this.createElem(g.btn,v.btnRace,b.btnRace),E=this.createElem(g.btn,v.btnReset,b.btnReset),S=this.createElem(g.btn,v.btnGenerate,b.btnGenerate),w=this.createElem(g.h2,v.countGarage,b.countGarage),x=this.createElem(g.h2,v.numGarage,b.numGarage),C=this.createElem(g.btn,v.btnPrev,b.btnPrev),$=this.createElem(g.btn,v.btnNext,b.btnNext),k=this.createElem(g.div,v.container),T=this.createElem(g.div,v.winner);null===(e=this.body)||void 0===e||e.append(t,n,r),t.append(a,o),n.append(this.sectionGarage,i),this.sectionGarage.append(T,c,w,x,k),c.append(s,d,l,u,h,p,m,E,S);const q=this.createElem(g.h2,v.countGarage,b.countGarage),A=this.createElem(g.h2,v.numWinner,b.numWinner),N=this.createElem(g.table,v.table),R=this.createElem(g.th,v.th,b.number),W=this.createElem(g.th,v.th,b.car),I=this.createElem(g.th,v.th,b.name),_=this.createElem(g.th,v.th,b.winner),M=this.createElem(g.th,v.th,b.best);i.append(q,A,N),N.append(R,W,I,_,M),r.append(C,$)}createTrack(e,t,n,r){const i=document.querySelector(".container"),a=this.createElemTrack(g.div,v.divTrack,`${e}`),o=r?`${n} ${r}`:n,c=this.createElem(g.div,v.carImage);c.innerHTML=E;const s=this.createElem(g.span,v.carName,`${o}`),d=this.createElem(g.btn,v.btnStart,b.btnStart),l=this.createElem(g.btn,v.btnStop,b.btnStop),u=this.createElem(g.btn,v.btnSelect,b.btnSelect),h=this.createElem(g.btn,v.btnRemove,b.btnRemove),p=this.createElem(g.div,v.flag);a.append(d,l,u,h,s,c,p),a.children[5].children[0].children[0].style.fill=t,i.append(a),l.disabled=!0}addTrack(e){return q(this,void 0,void 0,(function*(){const t=yield e,n=t[1],r=t[2],i=document.querySelector(".container"),a=document.querySelector(".btn-prev"),o=document.querySelector(".btn-next");i&&(i.innerHTML=""),S.pageCarsNumber=r,x.recordsAnimation=[],t[0].forEach((e=>{this.createTrack(e.id,e.color,e.name)}));const c=document.querySelector(".title-garage"),s=document.querySelector(".subtitle-garage");c.innerText=`Garage (${n})`,s.innerHTML=`Page #${r}`,o.disabled=!(Number(n)>7),o.disabled=!(Math.ceil(Number(n)/7)>Number(r)),a.disabled=1===Number(r)}))}deleteTrack(e){var t;return q(this,void 0,void 0,(function*(){null===(t=document.getElementById(yield e))||void 0===t||t.remove()}))}updateDataTrack(e){return q(this,void 0,void 0,(function*(){const t=(yield e)[0],n=document.querySelector(".update__input-text"),r=document.querySelector(".update__input-color");n.value=t.name,r.value=t.color,S.idUpdate=String(t.id)}))}startAnimation(e,t){return q(this,void 0,void 0,(function*(){const n=yield t,r=document.getElementById(e);if(0===n.velocity){const t=[];return x.recordsAnimation.forEach((n=>{n.id!==+e?t.push(n):n.animation.cancel()})),x.recordsAnimation=t,void(r.children[5].children[0].style.left="0")}const i=n.distance/n.velocity,a=+r.children[5].offsetWidth-100,o=r.children[5].children[0].animate([{left:"0px"},{left:`${a}px`}],{duration:i,fill:"forwards"});r.children[0].disabled=!0,r.children[1].disabled=!1,x.recordsAnimation.push({id:+e,time:+(i/1e3).toFixed(2),animation:o});const c=x.recordsAnimation.sort(((e,t)=>e.time<t.time?-1:1)),s=c[0].time,d=c[0].id,l=(yield this.requestServer.getCarsAll()).filter((e=>e.id===d))[0],u=l.id,h=l.name;d===u&&(localStorage.setItem("winnerId",`${d}`),localStorage.setItem("nameWin",`${h}`),localStorage.setItem("timeWinner",`${s}`))}))}stopAnimation(e){return q(this,void 0,void 0,(function*(){const t=document.getElementById(e),n=t.children[5].children[0].getBoundingClientRect().left;t.children[5].children[0].style.left=`${n}px`,x.recordsAnimation.forEach((t=>{t.id===+e&&(t.time=1/0,t.animation.cancel())}))}))}drawWinnersFragment(e,t,n,r){const i=document.querySelector(".table"),a=this.createElem("tr","tr-regular"),o=this.createElem("td","td-number",`${e}`),c=this.createElem("td","td-car");c.innerHTML=E;const s=this.createElem("td","td-name",`${t}`),d=this.createElem("td","td-wins",`${n}`),l=this.createElem("td","td-time",`${r}`);i.append(a),a.append(o,c,s,d,l)}addWinnersFragments(e){return q(this,void 0,void 0,(function*(){const t=yield e,n=yield this.requestServer.getCarsAll();x.winnersId=[],t.forEach((e=>{const t=n.filter((t=>t.id===e.id))[0];console.log(t);const r=t.id,i=t.name;e.id===r&&(this.drawWinnersFragment(1,`${i}`,"1",`${e.time}`),x.winnersId.push(e.id))}))}))}},this.selectPage=new class{constructor(){this.setSelect()}setSelect(){const e=document.querySelector(".btn-garage"),t=document.querySelector(".btn-winner"),n=document.querySelector(".section-garage"),r=document.querySelector(".section-winner");null==e||e.addEventListener("click",(()=>{n&&(n.style.display="block"),r&&(r.style.display="none")})),null==t||t.addEventListener("click",(()=>{n&&(n.style.display="none"),r&&(r.style.display="block")}))}},this.requestServer=new T,this.generate=new class{constructor(){this.carNames=["Mazda","Citroen","VW","Ford","Peugeot","BMW","Mercedes","Opel","Tesla","Audi"],this.carModels=["6","C5","Golf","Fiesta","406","X1","AMG","Omega","Model S","A8"]}getRandomName(){return`${this.carNames[Math.round(9*Math.random())]} ${this.carModels[Math.round(9*Math.random())]}`}getRandomColor(){let e="#";for(let t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}}}start(){this.view.createPage(),this.view.addTrack(this.requestServer.getCars()),this.view.addWinnersFragments(this.requestServer.getWinners()),this.selectPage.setSelect(),this.getCurrentId(),this.addEventsOnClickButtonCreate(),this.removeEventsOnClickButtonCreate(),this.updateEventsOnClickButtonCreate(),this.updateEventsOnClickButtonТNext(),this.addEventsOnClickButtonStart(),this.addEventsOnClickButtonRace(),this.addEventsOnClickButtonGenerate(),this.addEventsOnClickButtonReset(),this.requestServer.getCarsAll()}addEventsOnClickButtonCreate(){const e=document.querySelector(".btn-create");e&&e.addEventListener("click",(()=>{const e=document.querySelector(".create__input-color"),t=document.querySelector(".create__input-text").value,n=e.value;this.requestServer.createCar(t,n).then((()=>this.view.addTrack(this.requestServer.getCars())))}))}removeEventsOnClickButtonCreate(){document.querySelector(".section-garage").addEventListener("click",(e=>{if(e.target.classList.contains("btn-remove")){const t=e.target.parentNode.id;this.view.deleteTrack(this.requestServer.deleteCar(t))}}))}updateEventsOnClickButtonCreate(){document.querySelector(".section-garage").addEventListener("click",(e=>{if(e.target.classList.contains("btn-update")){const e=document.querySelector(".update__input-color"),t=document.querySelector(".update__input-text").value,n=e.value,r=localStorage.getItem("currentIdStorage");this.requestServer.updateCar(`${r}`,t,n).then((()=>this.view.addTrack(this.requestServer.getCars())))}}))}getCurrentId(){document.querySelector(".section-garage").addEventListener("click",(e=>{e.target.classList.contains("btn-select")&&(e.target.disabled=!0,localStorage.setItem("currentIdStorage",`${e.target.parentNode.id}`))}))}updateEventsOnClickButtonТNext(){var e;null===(e=document.querySelector(".footer"))||void 0===e||e.addEventListener("click",(e=>{e.target.classList.contains("btn-next")&&this.view.addTrack(this.requestServer.getCars("",""+(+S.pageCarsNumber+1))),e.target.classList.contains("btn-prev")&&this.view.addTrack(this.requestServer.getCars("",""+(+S.pageCarsNumber-1)))}))}addEventsOnClickButtonStart(){var e;null===(e=document.querySelector(".container"))||void 0===e||e.addEventListener("click",(e=>A(this,void 0,void 0,(function*(){const t=e.target.parentNode.id;e.target.classList.contains("btn-start")&&this.view.startAnimation(t,this.requestServer.startStopEngine(t,"started")).then((()=>this.requestServer.carRun(t).catch((()=>this.view.stopAnimation(t))))),e.target.classList.contains("btn-stop")&&this.view.startAnimation(t,this.requestServer.startStopEngine(t,"stopped"))}))))}addEventsOnClickButtonRace(){document.querySelector(".section-garage").addEventListener("click",(e=>A(this,void 0,void 0,(function*(){e.target.classList.contains("btn-race")&&((yield this.requestServer.getCars())[0].forEach((e=>{this.view.startAnimation(`${e.id}`,this.requestServer.startStopEngine(`${e.id}`,"started")).then((()=>this.requestServer.carRun(`${e.id}`).catch((()=>this.view.stopAnimation(`${e.id}`)))))})),document.querySelectorAll(".btn-start").forEach((e=>e.disabled=!0)),this.getWinnerCar(),this.showWinner())}))))}addEventsOnClickButtonGenerate(){document.querySelector(".section-garage").addEventListener("click",(e=>A(this,void 0,void 0,(function*(){if(e.target.classList.contains("btn-generate"))for(let e=0;e<100;e++)this.requestServer.createCar(this.generate.getRandomName(),this.generate.getRandomColor()).then((()=>this.view.addTrack(this.requestServer.getCars())))}))))}addEventsOnClickButtonReset(){document.querySelector(".section-garage").addEventListener("click",(e=>{e.target.classList.contains("btn-reset")&&(x.recordsAnimation.forEach((e=>this.view.startAnimation(`${e.id}`,this.requestServer.startStopEngine(`${e.id}`,"stopped")))),document.querySelectorAll(".btn-start").forEach((e=>e.disabled=!1)))}))}getWinnerCar(){const e=document.querySelector(".table");setTimeout((()=>{const t=localStorage.getItem("winnerId"),n=localStorage.getItem("timeWinner");this.requestServer.createWinner(`${t}`,"1",`${n}`),e.innerHTML=""}),5e3),setTimeout((()=>{this.view.addWinnersFragments(this.requestServer.getWinners())}),6e3)}showWinner(){const e=document.querySelector(".winner");setTimeout((()=>{e.style.display="block";const t=localStorage.getItem("nameWin"),n=localStorage.getItem("timeWinner");e.textContent=`Winner ${t} time: ${n}`,setTimeout((()=>e.style.display="none"),4e3)}),5e3)}}).start()})()})();