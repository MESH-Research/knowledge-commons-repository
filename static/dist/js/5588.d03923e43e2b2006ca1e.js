"use strict";(self.webpackChunkinvenio_assets=self.webpackChunkinvenio_assets||[]).push([[5588],{45588:(e,t,n)=>{var r;n.d(t,{tW:()=>s}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(r||(r={}));function i(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function a(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}var o;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(o||(o={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function s(e,t){void 0===t&&(t={});let n=e;n.endsWith("*")&&"*"!==n&&!n.endsWith("/*")&&(a(!1,'Route path "'+n+'" will be treated as if it were "'+n.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+n.replace(/\*$/,"/*")+'".'),n=n.replace(/\*$/,"/*"));const r=n.startsWith("/")?"/":"",o=e=>null==e?"":"string"===typeof e?e:String(e);return r+n.split(/\/+/).map(((e,n,r)=>{if(n===r.length-1&&"*"===e){return o(t["*"])}const a=e.match(/^:([\w-]+)(\??)$/);if(a){const[,e,n]=a;let r=t[e];return i("?"===n||null!=r,'Missing ":'+e+'" param'),o(r)}return e.replace(/\?$/g,"")})).filter((e=>!!e)).join("/")}const c=["post","put","patch","delete"],l=(new Set(c),["get",...c]);new Set(l),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred")}}]);
//# sourceMappingURL=5588.d03923e43e2b2006ca1e.js.map