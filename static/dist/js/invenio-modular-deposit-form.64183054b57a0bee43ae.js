/*! For license information please see invenio-modular-deposit-form.64183054b57a0bee43ae.js.LICENSE.txt */
(self.webpackChunkinvenio_assets=self.webpackChunkinvenio_assets||[]).push([[6764,8010,9841,2222],{84684:(t,r,e)=>{var n=e(69302),o=e(75288),i=e(36800),a=e(37241),u=Object.prototype,c=u.hasOwnProperty,l=n((function(t,r){t=Object(t);var e=-1,n=r.length,l=n>2?r[2]:void 0;for(l&&i(r[0],r[1],l)&&(n=1);++e<n;)for(var s=r[e],f=a(s),h=-1,p=f.length;++h<p;){var y=f[h],v=t[y];(void 0===v||o(v,u[y])&&!c.call(t,y))&&(t[y]=s[y])}return t}));t.exports=l},2404:(t,r,e)=>{var n=e(60270);t.exports=function(t,r){return n(t,r)}},75866:t=>{var r=Array.prototype.join;t.exports=function(t,e){return null==t?"":r.call(t,e)}},99786:(t,r,e)=>{var n=e(83120),o=e(15389),i=e(69302),a=e(55765),u=e(83693),c=e(68090),l=i((function(t){var r=c(t);return u(r)&&(r=void 0),a(n(t,1,u,!0),o(r,2))}));t.exports=l},52230:(t,r,e)=>{"use strict";e.d(r,{x:()=>i});var n=e(96540),o=e(65414);function i(t){var r=t.i18n,e=t.defaultNS,i=t.children,a=(0,n.useMemo)((function(){return{i18n:r,defaultNS:e}}),[r,e]);return(0,n.createElement)(o.gJ.Provider,{value:a},i)}},34222:(t,r,e)=>{var n={"./AIUsageField.js":[57149,5373,6267,9777,5941,7501,4218,742,6528,3532,1751,226,5848],"./BookSeriesField.js":[15668,5668],"./ImprintISBNField.js":[75157,5157],"./ImprintPagesField.js":[9005,9005],"./ImprintPlaceField.js":[72188,2188],"./ImprintTitleField.js":[50519,519],"./JournalIssueField.js":[38078,8078],"./Notes.js":[36845,6845],"./UserDefinedTags.js":[34809,742,4809],"./Volumes.js":[74059,4059]};function o(t){if(!e.o(n,t))return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=n[t],o=r[0];return Promise.all(r.slice(1).map(e.e)).then((()=>e(o)))}o.keys=()=>Object.keys(n),o.id=34222,t.exports=o},4633:(t,r,e)=>{var n=e(73738).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var r,e={},i=Object.prototype,a=i.hasOwnProperty,u=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(r){h=function(t,r,e){return t[r]=e}}function p(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,i=Object.create(o.prototype),a=new N(n||[]);return u(i,"_invoke",{value:k(t,e,a)}),i}function y(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var v="suspendedStart",d="suspendedYield",m="executing",g="completed",b={};function w(){}function x(){}function j(){}var E={};h(E,l,(function(){return this}));var L=Object.getPrototypeOf,O=L&&L(L(T([])));O&&O!==i&&a.call(O,l)&&(E=O);var _=j.prototype=w.prototype=Object.create(E);function A(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function S(t,r){function e(o,i,u,c){var l=y(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==n(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,u,c)}),(function(t){e("throw",t,u,c)})):r.resolve(f).then((function(t){s.value=t,u(s)}),(function(t){return e("throw",t,u,c)}))}c(l.arg)}var o;u(this,"_invoke",{value:function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}})}function k(t,e,n){var o=v;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=I(u,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var l=y(t,e,n);if("normal"===l.type){if(o=n.done?g:d,l.arg===b)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=g,n.method="throw",n.arg=l.arg)}}}function I(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,I(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=y(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,b;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,b):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function F(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(t){if(t||""===t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(n(t)+" is not iterable")}return x.prototype=j,u(_,"constructor",{value:j,configurable:!0}),u(j,"constructor",{value:x,configurable:!0}),x.displayName=h(j,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===x||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,h(t,f,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},A(S.prototype),h(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},A(_),h(_,f,"Generator"),h(_,l,(function(){return this})),h(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(F),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),b},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),F(e),b}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;F(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),b}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},73738:t=>{function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},54756:(t,r,e)=>{var n=e(4633)();t.exports=n;try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},43145:(t,r,e)=>{"use strict";function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}e.d(r,{A:()=>n})},10467:(t,r,e)=>{"use strict";function n(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void e(l)}u.done?r(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}e.d(r,{A:()=>o})},20454:(t,r,e)=>{"use strict";function n(t){if(null==t)throw new TypeError("Cannot destructure "+t)}e.d(r,{A:()=>n})},80296:(t,r,e)=>{"use strict";e.d(r,{A:()=>o});var n=e(27800);function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,r)||(0,n.A)(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},45458:(t,r,e)=>{"use strict";e.d(r,{A:()=>i});var n=e(43145);var o=e(27800);function i(t){return function(t){if(Array.isArray(t))return(0,n.A)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.A)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},27800:(t,r,e)=>{"use strict";e.d(r,{A:()=>o});var n=e(43145);function o(t,r){if(t){if("string"===typeof t)return(0,n.A)(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,n.A)(t,r):void 0}}}},t=>{t.O(0,[402,1057,7655,5373,6267,9777,5941,7501,4218,8102,742,6528,3532,1751,226],(()=>{return r=66614,t(t.s=r);var r}));t.O()}]);
//# sourceMappingURL=invenio-modular-deposit-form.64183054b57a0bee43ae.js.map