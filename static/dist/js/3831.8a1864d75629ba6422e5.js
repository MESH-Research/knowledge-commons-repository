/*! For license information please see 3831.8a1864d75629ba6422e5.js.LICENSE.txt */
(self.webpackChunkinvenio_assets=self.webpackChunkinvenio_assets||[]).push([[3831],{52822:(t,e,r)=>{"use strict";r.d(e,{x:()=>N});var n=r(80045),o=r(82284),i=r(64467),a=r(96540),c=r(34915),s=r.n(c),u=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function l(t){var e={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},r=t.match(/<\/?([^\s]+?)[/\s>]/);if(r&&(e.name=r[1],(s()[r[1]]||"/"===t.charAt(t.length-2))&&(e.voidElement=!0),e.name.startsWith("!--"))){var n=t.indexOf("--\x3e");return{type:"comment",comment:-1!==n?t.slice(4,n):""}}for(var o=new RegExp(u),i=null;null!==(i=o.exec(t));)if(i[0].trim())if(i[1]){var a=i[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),e.attrs[c[0]]=c[1],o.lastIndex--}else i[2]&&(e.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return e}var f=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,p=/^\s*$/,h=Object.create(null);function d(t,e){switch(e.type){case"text":return t+e.content;case"tag":return t+="<"+e.name+(e.attrs?function(t){var e=[];for(var r in t)e.push(r+'="'+t[r]+'"');return e.length?" "+e.join(" "):""}(e.attrs):"")+(e.voidElement?"/>":">"),e.voidElement?t:t+e.children.reduce(d,"")+"</"+e.name+">";case"comment":return t+"\x3c!--"+e.comment+"--\x3e"}}var y={parse:function(t,e){e||(e={}),e.components||(e.components=h);var r,n=[],o=[],i=-1,a=!1;if(0!==t.indexOf("<")){var c=t.indexOf("<");n.push({type:"text",content:-1===c?t:t.substring(0,c)})}return t.replace(f,(function(c,s){if(a){if(c!=="</"+r.name+">")return;a=!1}var u,f="/"!==c.charAt(1),h=c.startsWith("\x3c!--"),d=s+c.length,y=t.charAt(d);if(h){var v=l(c);return i<0?(n.push(v),n):((u=o[i]).children.push(v),n)}if(f&&(i++,"tag"===(r=l(c)).type&&e.components[r.name]&&(r.type="component",a=!0),r.voidElement||a||!y||"<"===y||r.children.push({type:"text",content:t.slice(d,t.indexOf("<",d))}),0===i&&n.push(r),(u=o[i-1])&&u.children.push(r),o[i]=r),(!f||r.voidElement)&&(i>-1&&(r.voidElement||r.name===c.slice(2,-1))&&(i--,r=-1===i?n:o[i]),!a&&"<"!==y&&y)){u=-1===i?n:o[i].children;var m=t.indexOf("<",d),g=t.slice(d,-1===m?void 0:m);p.test(g)&&(g=" "),(m>-1&&i+u.length>=0||" "!==g)&&u.push({type:"text",content:g})}})),n},stringify:function(t){return t.reduce((function(t,e){return t+d("",e)}),"")}};const v=y;var m=r(65414);function g(){if(console&&console.warn){for(var t,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(t=console).warn.apply(t,r)}}var b={};function w(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];"string"===typeof e[0]&&b[e[0]]||("string"===typeof e[0]&&(b[e[0]]=new Date),g.apply(void 0,e))}var x=["format"],O=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){(0,i.A)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _(t,e){if(!t)return!1;var r=t.props?t.props.children:t.children;return e?r.length>0:!!r}function A(t){return t?t.props?t.props.children:t.children:[]}function S(t){return Array.isArray(t)?t:[t]}function L(t,e){if(!t)return"";var r="",i=S(t),c=e.transSupportBasicHtmlNodes&&e.transKeepBasicHtmlNodesFor?e.transKeepBasicHtmlNodesFor:[];return i.forEach((function(t,i){if("string"===typeof t)r+="".concat(t);else if((0,a.isValidElement)(t)){var s=Object.keys(t.props).length,u=c.indexOf(t.type)>-1,l=t.props.children;if(!l&&u&&0===s)r+="<".concat(t.type,"/>");else if(l||u&&0===s)if(t.props.i18nIsDynamicList)r+="<".concat(i,"></").concat(i,">");else if(u&&1===s&&"string"===typeof l)r+="<".concat(t.type,">").concat(l,"</").concat(t.type,">");else{var f=L(l,e);r+="<".concat(i,">").concat(f,"</").concat(i,">")}else r+="<".concat(i,"></").concat(i,">")}else if(null===t)g("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,o.A)(t)){var p=t.format,h=(0,n.A)(t,x),d=Object.keys(h);if(1===d.length){var y=p?"".concat(d[0],", ").concat(p):d[0];r+="{{".concat(y,"}}")}else g("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else g("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),r}function k(t,e,r,n,i,c){if(""===e)return[];var s=n.transKeepBasicHtmlNodesFor||[],u=e&&new RegExp(s.join("|")).test(e);if(!t&&!u)return[e];var l={};!function t(e){S(e).forEach((function(e){"string"!==typeof e&&(_(e)?t(A(e)):"object"!==(0,o.A)(e)||(0,a.isValidElement)(e)||Object.assign(l,e))}))}(t);var f=v.parse("<0>".concat(e,"</0>")),p=j(j({},l),i);function h(t,e,r){var n=A(t),o=y(n,e.children,r);return function(t){return"[object Array]"===Object.prototype.toString.call(t)&&t.every((function(t){return(0,a.isValidElement)(t)}))}(n)&&0===o.length?n:o}function d(t,e,r,n,o){t.dummy&&(t.children=e),r.push((0,a.cloneElement)(t,j(j({},t.props),{},{key:n}),o?void 0:e))}function y(e,i,l){var f=S(e);return S(i).reduce((function(e,i,v){var m=i.children&&i.children[0]&&i.children[0].content&&r.services.interpolator.interpolate(i.children[0].content,p,r.language);if("tag"===i.type){var g=f[parseInt(i.name,10)];!g&&1===l.length&&l[0][i.name]&&(g=l[0][i.name]),g||(g={});var b=0!==Object.keys(i.attrs).length?function(t,e){var r=j({},e);return r.props=Object.assign(t.props,e.props),r}({props:i.attrs},g):g,w=(0,a.isValidElement)(b),x=w&&_(i,!0)&&!i.voidElement,O=u&&"object"===(0,o.A)(b)&&b.dummy&&!w,E="object"===(0,o.A)(t)&&null!==t&&Object.hasOwnProperty.call(t,i.name);if("string"===typeof b){var A=r.services.interpolator.interpolate(b,p,r.language);e.push(A)}else if(_(b)||x){d(b,h(b,i,l),e,v)}else if(O){var S=y(f,i.children,l);e.push((0,a.cloneElement)(b,j(j({},b.props),{},{key:v}),S))}else if(Number.isNaN(parseFloat(i.name))){if(E)d(b,h(b,i,l),e,v,i.voidElement);else if(n.transSupportBasicHtmlNodes&&s.indexOf(i.name)>-1)if(i.voidElement)e.push((0,a.createElement)(i.name,{key:"".concat(i.name,"-").concat(v)}));else{var L=y(f,i.children,l);e.push((0,a.createElement)(i.name,{key:"".concat(i.name,"-").concat(v)},L))}else if(i.voidElement)e.push("<".concat(i.name," />"));else{var k=y(f,i.children,l);e.push("<".concat(i.name,">").concat(k,"</").concat(i.name,">"))}}else if("object"!==(0,o.A)(b)||w)1===i.children.length&&m?e.push((0,a.cloneElement)(b,j(j({},b.props),{},{key:v}),m)):e.push((0,a.cloneElement)(b,j(j({},b.props),{},{key:v})));else{var N=i.children[0]?m:null;N&&e.push(N)}}else if("text"===i.type){var P=n.transWrapTextNodes,T=c?n.unescape(r.services.interpolator.interpolate(i.content,p,r.language)):r.services.interpolator.interpolate(i.content,p,r.language);P?e.push((0,a.createElement)(P,{key:"".concat(i.name,"-").concat(v)},T)):e.push(T)}return e}),[])}return A(y([{dummy:!0,children:t||[]}],f,S(t||[]))[0])}function N(t){var e=t.children,r=t.count,o=t.parent,i=t.i18nKey,c=t.context,s=t.tOptions,u=void 0===s?{}:s,l=t.values,f=t.defaults,p=t.components,h=t.ns,d=t.i18n,y=t.t,v=t.shouldUnescape,g=(0,n.A)(t,O),b=(0,a.useContext)(m.gJ)||{},x=b.i18n,E=b.defaultNS,_=d||x||(0,m.TO)();if(!_)return w("You will need to pass in an i18next instance by using i18nextReactModule"),e;var A=y||_.t.bind(_)||function(t){return t};c&&(u.context=c);var S=j(j({},(0,m.rV)()),_.options&&_.options.react),N=h||A.ns||E||_.options&&_.options.defaultNS;N="string"===typeof N?[N]:N||["translation"];var P=f||L(e,S)||S.transEmptyNodeValue||i,T=S.hashTransKey,D=i||(T?T(P):P),I=l?u.interpolation:{interpolation:j(j({},u.interpolation),{},{prefix:"#$?",suffix:"?$#"})},V=j(j(j(j({},u),{},{count:r},l),I),{},{defaultValue:P,ns:N}),F=k(p||e,D?A(D,V):P,_,S,V,v),R=void 0!==o?o:S.defaultTransParent;return R?(0,a.createElement)(R,g,F):F}},21966:(t,e,r)=>{"use strict";var n=r(68238).compose;e.tY="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?n:n.apply(null,arguments)},"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__},34915:t=>{t.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},4633:(t,e,r)=>{var n=r(73738).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},i=Object.prototype,a=i.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",f=s.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(e){p=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new D(n||[]);return c(i,"_invoke",{value:k(t,r,a)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var y="suspendedStart",v="suspendedYield",m="executing",g="completed",b={};function w(){}function x(){}function O(){}var E={};p(E,u,(function(){return this}));var j=Object.getPrototypeOf,_=j&&j(j(I([])));_&&_!==i&&a.call(_,u)&&(E=_);var A=O.prototype=w.prototype=Object.create(E);function S(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,c,s){var u=d(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;c(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function k(t,r,n){var o=y;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=N(c,n);if(s){if(s===b)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var u=d(t,r,n);if("normal"===u.type){if(o=n.done?g:v,u.arg===b)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=g,n.method="throw",n.arg=u.arg)}}}function N(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=d(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function I(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(a.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(n(t)+" is not iterable")}return x.prototype=O,c(A,"constructor",{value:O,configurable:!0}),c(O,"constructor",{value:x,configurable:!0}),x.displayName=p(O,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,p(t,f,"GeneratorFunction")),t.prototype=Object.create(A),t},r.awrap=function(t){return{__await:t}},S(L.prototype),p(L.prototype,l,(function(){return this})),r.AsyncIterator=L,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new L(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(A),p(A,f,"Generator"),p(A,u,(function(){return this})),p(A,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=I,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},73738:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},54756:(t,e,r)=>{var n=r(4633)();t.exports=n;try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},43145:(t,e,r)=>{"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,{A:()=>n})},10467:(t,e,r)=>{"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}r.d(e,{A:()=>o})},80045:(t,e,r)=>{"use strict";r.d(e,{A:()=>o});var n=r(98587);function o(t,e){if(null==t)return{};var r,o,i=(0,n.A)(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}},45458:(t,e,r)=>{"use strict";r.d(e,{A:()=>i});var n=r(43145);var o=r(27800);function i(t){return function(t){if(Array.isArray(t))return(0,n.A)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.A)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},27800:(t,e,r)=>{"use strict";r.d(e,{A:()=>o});var n=r(43145);function o(t,e){if(t){if("string"===typeof t)return(0,n.A)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.A)(t,e):void 0}}}}]);
//# sourceMappingURL=3831.8a1864d75629ba6422e5.js.map