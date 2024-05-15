/*! For license information please see invenio-communities-new.9f5ba14dfa995543c024.js.LICENSE.txt */
(self.webpackChunkinvenio_assets=self.webpackChunkinvenio_assets||[]).push([[8656],{72585:(e,t,r)=>{"use strict";var n=r(10467),o=r(23029),i=r(92901),a=r(56822),c=r(53954),l=r(85501),u=r(64467),s=r(54756),f=r.n(s),h=r(38102),p=r(17684),m=r(62193),y=r.n(m),d=r(58156),v=r.n(d),b=r(96540),g=r(40961),w=r(81057),E=r(80501),x=r(87395),A=r(1489),O=r(27041),j=r(36713),L=r(3487),S=r(76217),k=r(4252),C=r(64483),F=r(5556),_=r.n(F);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,u.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(e,t,r){return t=(0,c.A)(t),(0,a.A)(e,I()?Reflect.construct(t,r||[],(0,c.A)(e).constructor):t.apply(e,r))}function I(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(I=function(){return!!e})()}var R=function(e){var t=e.formConfig,r=(0,p.useFormikContext)().values,n=b.createElement(b.Fragment,null,h.M.t("This is your community's unique identifier. You will be able to access your community through the URL:"),b.createElement("br",null),"".concat(t.SITE_UI_URL,"/communities/").concat(r.slug));return b.createElement(w.TextField,{required:!0,id:"slug",label:b.createElement(w.FieldLabel,{htmlFor:"slug",icon:"barcode",label:h.M.t("Identifier")}),fieldPath:"slug",helpText:n,fluid:!0,className:"text-muted",onKeyDown:function(e){"Enter"===e.key&&e.preventDefault()}})};R.propTypes={formConfig:_().object.isRequired};var M=function(e){function t(){var e;(0,o.A)(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=T(this,t,[].concat(i)),(0,u.A)(e,"state",{error:""}),(0,u.A)(e,"setGlobalError",(function(t){e.setState({error:t})})),(0,u.A)(e,"onSubmit",function(){var t=(0,n.A)(f().mark((function t(r,n){var o,i,a,c,l,u,s,h;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.setSubmitting,i=n.setFieldError,o(!0),a=new k.AM,c=N({metadata:{}},r),e.cancellableCreate=(0,w.withCancel)(a.create(c)),t.prev=5,t.next=8,e.cancellableCreate.promise;case 8:l=t.sent,o(!1),window.location.href=l.data.links.settings_html,t.next=20;break;case 13:if(t.prev=13,t.t0=t.catch(5),"UNMOUNTED"!==t.t0){t.next=17;break}return t.abrupt("return");case 17:u=(0,C.U9)(t.t0),s=u.errors,(h=u.message)&&e.setGlobalError(h),s&&s.map((function(e){var t=e.field,r=e.messages;return i(t,r[0])}));case 20:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,r){return t.apply(this,arguments)}}()),e}return(0,l.A)(t,e),(0,i.A)(t,[{key:"componentWillUnmount",value:function(){this.cancellableCreate&&this.cancellableCreate.cancel()}},{key:"render",value:function(){var e=this.props,t=e.formConfig,n=e.canCreateRestricted,o=this.state.error;return b.createElement(p.Formik,{initialValues:{access:{visibility:"public"},slug:""},onSubmit:this.onSubmit},(function(e){var i=e.values,a=e.isSubmitting,c=e.handleSubmit;return b.createElement(E.A,{onSubmit:c,className:"communities-creation"},b.createElement(x.A,{hidden:""===o,negative:!0,className:"flashed"},b.createElement(A.A,{container:!0,centered:!0},b.createElement(A.A.Column,{mobile:16,tablet:12,computer:8,textAlign:"left"},b.createElement("strong",null,o)))),b.createElement(A.A,{container:!0,centered:!0},b.createElement(A.A.Row,null,b.createElement(A.A.Column,{mobile:16,tablet:12,computer:8,textAlign:"center"},b.createElement(O.A,{as:"h1",className:"rel-mt-2"},h.M.t("Setup your new community")),b.createElement(j.A,null))),b.createElement(A.A.Row,{textAlign:"left"},b.createElement(A.A.Column,{mobile:16,tablet:12,computer:8},b.createElement(w.TextField,{required:!0,id:"metadata.title",fluid:!0,fieldPath:"metadata.title",onKeyDown:function(e){"Enter"===e.key&&e.preventDefault()},label:b.createElement(w.FieldLabel,{htmlFor:"metadata.title",icon:"book",label:h.M.t("Community name")})}),b.createElement(R,{formConfig:t}),!y()(G.ui)&&b.createElement(w.CustomFields,{config:G.ui,templateLoaders:[function(e){return r(34222)("./".concat(e,".js"))},function(e){return Promise.resolve().then(r.bind(r,81057))}],fieldPathPrefix:"custom_fields"}),n&&b.createElement(b.Fragment,null,b.createElement(O.A,{as:"h3"},h.M.t("Community visibility")),t.access.visibility.map((function(e){return b.createElement(b.Fragment,{key:e.value},b.createElement(w.RadioField,{key:e.value,fieldPath:"access.visibility",label:e.text,labelIcon:e.icon,checked:v()(i,"access.visibility")===e.value,value:e.value,onChange:function(t){t.event,t.data;t.formikProps.form.setFieldValue("access.visibility",e.value)}}),b.createElement("label",{className:"helptext"},e.helpText))}))))),b.createElement(A.A.Row,null,b.createElement(A.A.Column,{textAlign:"center"},b.createElement(L.A,{positive:!0,icon:!0,labelPosition:"left",loading:a,disabled:a,type:"button",onClick:function(e){return c(e)}},b.createElement(S.A,{name:"plus"}),h.M.t("Create community"))))))}))}}])}(b.Component);M.propTypes={formConfig:_().object.isRequired,canCreateRestricted:_().bool.isRequired};var D=document.getElementById("app"),U=JSON.parse(D.dataset.formConfig),G=JSON.parse(D.dataset.customFields),q=JSON.parse(D.dataset.canCreateRestricted);g.render(b.createElement(M,{formConfig:U,customFields:G,canCreateRestricted:q}),D)},34222:(e,t,r)=>{var n={"./AIUsageField.js":[57149,5373,6267,9777,5941,7501,4218,742,6528,3532,1751,226,5848],"./BookSeriesField.js":[15668,5668],"./ImprintISBNField.js":[75157,5157],"./ImprintPagesField.js":[9005,9005],"./ImprintPlaceField.js":[72188,2188],"./ImprintTitleField.js":[50519,519],"./JournalIssueField.js":[38078,8078],"./Notes.js":[36845,6845],"./UserDefinedTags.js":[34809,742,4809],"./Volumes.js":[74059,4059]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(o)))}o.keys=()=>Object.keys(n),o.id=34222,e.exports=o},4633:(e,t,r)=>{var n=r(73738).default;function o(){"use strict";e.exports=o=function(){return r},e.exports.__esModule=!0,e.exports.default=e.exports;var t,r={},i=Object.prototype,a=i.hasOwnProperty,c=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},u=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",f=l.toStringTag||"@@toStringTag";function h(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(t){h=function(e,t,r){return e[t]=r}}function p(e,t,r,n){var o=t&&t.prototype instanceof w?t:w,i=Object.create(o.prototype),a=new N(n||[]);return c(i,"_invoke",{value:C(e,r,a)}),i}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=p;var y="suspendedStart",d="suspendedYield",v="executing",b="completed",g={};function w(){}function E(){}function x(){}var A={};h(A,u,(function(){return this}));var O=Object.getPrototypeOf,j=O&&O(O(T([])));j&&j!==i&&a.call(j,u)&&(A=j);var L=x.prototype=w.prototype=Object.create(A);function S(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(o,i,c,l){var u=m(e[o],e,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==n(f)&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,c,l)}),(function(e){r("throw",e,c,l)})):t.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,l)}))}l(u.arg)}var o;c(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}})}function C(e,r,n){var o=y;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===b){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=F(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=b,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var u=m(e,r,n);if("normal"===u.type){if(o=n.done?b:d,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=b,n.method="throw",n.arg=u.arg)}}}function F(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,F(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=m(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(n(e)+" is not iterable")}return E.prototype=x,c(L,"constructor",{value:x,configurable:!0}),c(x,"constructor",{value:E,configurable:!0}),E.displayName=h(x,f,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===E||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,h(e,f,"GeneratorFunction")),e.prototype=Object.create(L),e},r.awrap=function(e){return{__await:e}},S(k.prototype),h(k.prototype,s,(function(){return this})),r.AsyncIterator=k,r.async=function(e,t,n,o,i){void 0===i&&(i=Promise);var a=new k(p(e,t,n,o),i);return r.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(L),h(L,f,"Generator"),h(L,u,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},73738:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},54756:(e,t,r)=>{var n=r(4633)();e.exports=n;try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},43145:(e,t,r)=>{"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{A:()=>n})},10467:(e,t,r)=>{"use strict";function n(e,t,r,n,o,i,a){try{var c=e[i](a),l=c.value}catch(u){return void r(u)}c.done?t(l):Promise.resolve(l).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function c(e){n(a,o,i,c,l,"next",e)}function l(e){n(a,o,i,c,l,"throw",e)}c(void 0)}))}}r.d(t,{A:()=>o})},80296:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(27800);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||(0,n.A)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},27800:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(43145);function o(e,t){if(e){if("string"===typeof e)return(0,n.A)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.A)(e,t):void 0}}}},e=>{e.O(0,[402,1057,7655,8102,4252],(()=>{return t=72585,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=invenio-communities-new.9f5ba14dfa995543c024.js.map