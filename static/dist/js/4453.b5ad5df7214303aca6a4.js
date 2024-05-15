"use strict";(self.webpackChunkinvenio_assets=self.webpackChunkinvenio_assets||[]).push([[4453],{12944:(e,t,r)=>{r.d(t,{V:()=>s});var n=r(23029),i=r(92901);function o(e,t,r){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,r)}function l(e,t){return e.get(c(e,t))}function c(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}var a=new WeakMap,s=function(){return(0,i.A)((function e(t){if((0,n.A)(this,e),o(this,a,void 0),null===t||void 0===t||!t.links)throw TypeError("Request resource links are undefined");var r,i,l;r=a,i=this,l=t.links,r.set(c(r,i),l)}),[{key:"selfUrl",get:function(){if(!l(a,this).self)throw TypeError("Self link missing from resource.");return l(a,this).self}},{key:"membersUrl",get:function(){if(!l(a,this).members)throw TypeError("Members link missing from resource.");return l(a,this).members}},{key:"publicMembersUrl",get:function(){if(!l(a,this).public_members)throw TypeError("Public members link missing from resource.");return l(a,this).public_members}},{key:"invitations",get:function(){if(!l(a,this).invitations)throw TypeError("Invitations link missing from resource.");return l(a,this).invitations}}])}()},64483:(e,t,r)=>{r.d(t,{U9:()=>o,Ws:()=>l,to:()=>i});var n=r(80296),i=function(e){var t;return(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)||(null===e||void 0===e?void 0:e.message)},o=function(e){var t,r,n;return{message:null===e||void 0===e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message,errors:null===e||void 0===e||null===(r=e.response)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.errors,status:null===e||void 0===e||null===(n=e.response)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.status}},l=function(e){return Object.entries(e).map((function(e){var t=(0,n.A)(e,2),r=(t[0],t[1]);return{id:r.id,type:r.type}}))}},61234:(e,t,r)=>{r.d(t,{C:()=>p});var n=r(64467),i=r(23029),o=r(92901),l=r(55808),c=r.n(l),a=r(38102);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(){return(0,o.A)((function e(t){(0,i.A)(this,e),this.configRoles=t}),[{key:"serializeFilter",value:function(e,t,r){return(0,n.A)({},e,{buckets:r,label:t})}},{key:"getRoles",value:function(){var e=[];return this.configRoles.forEach((function(t){e.push({key:t.name,label:t.title})})),this.serializeFilter("role","Role",e)}},{key:"getVisibility",value:function(){return this.serializeFilter("visibility","Visibility",[{key:"true",label:"Public"},{key:"false",label:"Hidden"}])}},{key:"getStatus",value:function(){var e=[{key:"submitted",label:a.M.t("Submitted")},{key:"accepted",label:a.M.t("Accepted")},{key:"declined",label:a.M.t("Declined")},{key:"cancel",label:a.M.t("Cancel")},{key:"expired",label:a.M.t("Expired")}];return this.serializeFilter("status","Status",e)}},{key:"getInvitationFilters",value:function(){var e=this.getStatus();return u(u({},this.getRoles()),e)}},{key:"getMembersFilters",value:function(){var e=this.getVisibility();return u(u({},this.getRoles()),e)}},{key:"getHumanReadableVisibility",value:function(e){return"true"===e?"Public":"Hidden"}},{key:"getDisplayValue",value:function(e){var t=c()(e[0]),r=c()(e[1]);return"visibility"===e[0]&&(r=this.getHumanReadableVisibility(e[1])),"".concat(t,": ").concat(r)}}])}()},29889:(e,t,r)=>{r.d(t,{K:()=>v});var n=r(23029),i=r(92901),o=r(56822),l=r(53954),c=r(85501),a=r(96540),s=r(5556),u=r.n(s),p=r(87395),f=r(64483);function m(e,t,r){return t=(0,l.A)(t),(0,o.A)(e,d()?Reflect.construct(t,r||[],(0,l.A)(e).constructor):t.apply(e,r))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}var v=function(e){function t(){return(0,n.A)(this,t),m(this,t,arguments)}return(0,c.A)(t,e),(0,i.A)(t,[{key:"render",value:function(){var e=this.props.error,t=(0,f.U9)(e),r=t.errors,n=t.message;return n||(n=e.message),a.createElement(p.A,{className:"ml-20 mr-20",negative:!0},a.createElement(p.A.Header,null,n),r&&a.createElement(p.A.List,null,r.map((function(e){return a.createElement(p.A.Item,{key:e},"_schema"!==e.field&&a.createElement("strong",null,e.field,": "),1===e.messages.length?e.messages[0]:a.createElement(p.A.List,null,e.messages.map((function(e){return a.createElement(p.A.Item,{key:e},e)}))))}))))}}])}(a.Component);v.propTypes={error:u().object.isRequired}},60996:(e,t,r)=>{r.d(t,{r:()=>s});var n=r(96540),i=r(93682),o=r(28085),l=r(76217),c=r(5556),a=r.n(c),s=function(e){var t=e.trigger,r=e.error;return n.createElement(i.A,{basic:!0,className:"p-0 borderless shadowless mb-1",open:!!r,position:"top center",content:n.createElement(o.A,{content:r,basic:!0,className:"mb-5 error",pointing:"below",removeIcon:"close"}),trigger:t})};s.propTypes={trigger:a().node,error:a().string},s.defaultProps={error:"",trigger:n.createElement(l.A,{name:"exclamation circle",className:"error"})}},10739:(e,t,r)=>{r.d(t,{k:()=>R});var n=r(23029),i=r(92901),o=r(56822),l=r(53954),c=r(85501),a=r(64467),s=r(38102),u=r(5556),p=r.n(u),f=r(96540),m=r(98871),d=r(3487),v=r(28085),y=r(76217),b=r(61234);function h(e,t,r){return t=(0,l.A)(t),(0,o.A)(e,g()?Reflect.construct(t,r||[],(0,l.A)(e).constructor):t.apply(e,r))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var A=function(e){function t(){return(0,n.A)(this,t),h(this,t,arguments)}return(0,c.A)(t,e),(0,i.A)(t,[{key:"render",value:function(){var e=this.props,t=e.filter,r=e.currentQueryState,n=e.updateQueryState,i=r.filters,o=(new b.C).getDisplayValue(t);return f.createElement(v.A,{className:"rel-mr-1 rel-mt-1"},o,f.createElement(y.A,{onClick:function(){var e=i.indexOf(t);i.splice(e,1),n(r)},name:"delete"}))}}])}(f.Component);A.propTypes={updateQueryState:p().func.isRequired,currentQueryState:p().object.isRequired,filter:p().array.isRequired};const k=A;function E(e,t,r){return t=(0,l.A)(t),(0,o.A)(e,O()?Reflect.construct(t,r||[],(0,l.A)(e).constructor):t.apply(e,r))}function O(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(O=function(){return!!e})()}var w=function(e){function t(){var e;(0,n.A)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return e=E(this,t,[].concat(i)),(0,a.A)(e,"filterCurrentFilters",(function(t){var r=e.props.ignoreFilters;return t.filter((function(e){return!r.includes(e[0])}))})),(0,a.A)(e,"onClearAllFilters",(function(t,r){var n=e.props.ignoreFilters;t.filters=t.filters.filter((function(e){return n.includes(e[0])})),r(t)})),e}return(0,c.A)(t,e),(0,i.A)(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.currentQueryState,n=t.updateQueryState,i=this.filterCurrentFilters(r.filters);return f.createElement(f.Fragment,null,i.map((function(e){return f.createElement(k,{key:e[0],filter:e,currentQueryState:r,updateQueryState:n})})),i.length>0&&f.createElement(d.A,{primary:!0,compact:!0,size:"mini",onClick:function(){e.onClearAllFilters(r,n)},className:"rel-mr-1 rel-mt-1"},s.M.t("Clear all filters")))}}])}(f.Component);w.propTypes={updateQueryState:p().func.isRequired,currentQueryState:p().object.isRequired,ignoreFilters:p().array},w.defaultProps={ignoreFilters:[]};var R=(0,m.Q2)(w)},88860:(e,t,r)=>{r.d(t,{B:()=>v});var n=r(23029),i=r(92901),o=r(56822),l=r(53954),c=r(85501),a=r(64467),s=r(5556),u=r.n(s),p=r(96540),f=r(76217);function m(e,t,r){return t=(0,l.A)(t),(0,o.A)(e,d()?Reflect.construct(t,r||[],(0,l.A)(e).constructor):t.apply(e,r))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}var v=function(e){function t(e){var r;(0,n.A)(this,t),r=m(this,t,[e]),(0,a.A)(r,"handleOnTimeOut",(function(){r.setState({show:!1})}));var i=e.show;return r.state={show:i},r}return(0,c.A)(t,e),(0,i.A)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.timeOutDelay,r=e.show;this.setState({show:r});var n=!!this.successTimer;r&&(n&&clearTimeout(this.successTimer),this.successTimer=setTimeout(this.handleOnTimeOut,t))}},{key:"componentWillUnmount",value:function(){this.successTimer&&clearTimeout(this.successTimer)}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.content;return this.state.show&&p.createElement(p.Fragment,null,p.createElement(f.A,{name:"checkmark",className:"positive ".concat(t)}),void 0!==r&&r)}}])}(p.Component);v.propTypes={timeOutDelay:u().number.isRequired,show:u().bool,className:u().string,content:u().string},v.defaultProps={show:!1,className:"",content:void 0}},20640:(e,t,r)=>{r.d(t,{_:()=>q,o:()=>F});var n=r(64467),i=r(96540),o=r(10467),l=r(23029),c=r(92901),a=r(56822),s=r(53954),u=r(85501),p=r(54756),f=r.n(p),m=r(5556),d=r.n(m),v=r(81057),y=r(53196),b=r(27859),h=r(34667),g=r(64483),A=r(60996),k=r(88860);function E(e,t,r){return t=(0,s.A)(t),(0,a.A)(e,O()?Reflect.construct(t,r||[],(0,s.A)(e).constructor):t.apply(e,r))}function O(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(O=function(){return!!e})()}var w=function(e){function t(e){var r;return(0,l.A)(this,t),r=E(this,t,[e]),(0,n.A)(r,"handleOnChange",function(){var e=(0,o.A)(f().mark((function e(t,n){var i,o,l,c,a,s;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.value,o=r.props,l=o.successCallback,c=o.action,a=o.resource,r.setState({loading:!0,actionSuccess:!1}),r.cancellableAction=(0,v.withCancel)(c(a.member,i)),e.prev=4,e.next=7,r.cancellableAction.promise;case 7:s=e.sent,l(s,i),r.setState({loading:!1,actionSuccess:!0,error:void 0}),e.next=17;break;case 12:if(e.prev=12,e.t0=e.catch(4),"UNMOUNTED"!==e.t0){e.next=16;break}return e.abrupt("return");case 16:r.setState({loading:!1,actionSuccess:!1,error:(0,g.to)(e.t0)});case 17:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,r){return e.apply(this,arguments)}}()),r.state={error:void 0,loading:!1,actionSuccess:void 0},r}return(0,u.A)(t,e),(0,c.A)(t,[{key:"componentWillUnmount",value:function(){this.cancellableAction&&this.cancellableAction.cancel()}},{key:"render",value:function(){var e=this.state,t=e.loading,r=e.actionSuccess,n=e.error,o=this.props,l=o.options,c=o.currentValue,a=o.optionsSerializer,s=o.disabled,u=o.direction,p=o.fluid,f=o.label;return i.createElement(y.default,{id:"InvenioCommunities.ActionDropdown.layout",options:l,loading:t,actionSuccess:r,error:n,disabled:s,optionsSerializer:a},i.createElement("div",{className:"flex align-items-center members-dropdown-container"},i.createElement(h.A,{options:a(l),loading:t,value:c,openOnFocus:!1,selectOnBlur:!1,onChange:this.handleOnChange,"aria-label":f,disabled:s,direction:u,fluid:p,floating:!0}),i.createElement("div",{className:"ml-5 action-status-container"},r&&i.createElement(k.B,{timeOutDelay:3e3,show:r}),n&&i.createElement(A.r,{error:n}))))}}])}(i.Component);w.propTypes={options:d().array.isRequired,successCallback:d().func.isRequired,currentValue:d().oneOfType([d().string,d().bool]),action:d().func.isRequired,optionsSerializer:d().func,disabled:d().bool,direction:d().string,label:d().string,resource:d().object.isRequired,fluid:d().bool},w.defaultProps={currentValue:"",disabled:!1,direction:"right",optionsSerializer:function(e){return e.map((function(e){return{key:e.key,text:e.title,value:e.key,content:i.createElement(b.A,null,i.createElement(b.A.Item,null,i.createElement(b.A.Content,null,i.createElement(b.A.Header,null,e.title),i.createElement(b.A.Description,null,e.description))))}}))},fluid:!1};const R=y.default.component("ActionDropdown",w);var S=r(1489),C=r(76217),T=r(23848);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=function(e){var t=e.title,r=e.description,n=e.selected;return i.createElement(S.A,null,i.createElement(S.A.Row,null,i.createElement(S.A.Column,{width:1,verticalAlign:"middle"},n&&i.createElement(C.A,{className:"positive",name:"checkmark"})),i.createElement(S.A.Column,{width:14},i.createElement(T.A.Group,{unstackable:!0},i.createElement(T.A,null,i.createElement(T.A.Content,null,i.createElement(T.A.Description,null,i.createElement("strong",null,t)),i.createElement(T.A.Meta,null,r)))))))};D.propTypes={title:d().string.isRequired,description:d().string.isRequired,selected:d().bool.isRequired};var q=function(e){var t=e.roles,r=e.successCallback,n=e.action,o=e.disabled,l=e.currentValue,c=e.resource,a=e.label;return i.createElement(R,{optionsSerializer:function(e){return function(e,t){return e.map((function(e){return{key:e.name,text:e.title,value:e.name,content:i.createElement(D,{title:e.title,description:e.description,selected:t===e.name})}}))}(e,l)},options:t,successCallback:r,action:n,disabled:o,currentValue:l,resource:c,direction:"left",fluid:!0,label:a})};q.propTypes=P(P({},R.propTypes),{},{roles:d().array.isRequired});var F=function(e){var t=e.visibilityTypes,r=e.successCallback,n=e.action,o=e.disabled,l=e.currentValue,c=e.resource,a=e.label;return i.createElement(R,{optionsSerializer:function(e){return function(e,t){return e.map((function(e){return{key:e.name,text:e.title,value:e.visible,content:i.createElement(D,{title:e.title,description:e.description,selected:t===e.visible})}}))}(e,l)},options:t,successCallback:r,action:n,disabled:o,currentValue:l,resource:c,direction:"left",fluid:!0,label:a})};F.propTypes=P(P({},R.propTypes),{},{visibilityTypes:d().array.isRequired})},86763:(e,t,r)=>{r.d(t,{U:()=>n.U});r(88802);var n=r(71790)}}]);
//# sourceMappingURL=4453.b5ad5df7214303aca6a4.js.map