"use strict";(self.webpackChunkinvenio_assets=self.webpackChunkinvenio_assets||[]).push([[9693],{9504:(e,t,r)=>{r.d(t,{Q:()=>B});var n=r(23029),a=r(92901),s=r(56822),i=r(53954),o=r(85501),c=r(60505),l=r(28962),u=r(96540),m=r(5556),p=r.n(m),d=r(64467),y=r(68238),b=r(21966),f=r(44641);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,d.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={loading:!1,refreshing:!1,data:{},error:null,size:15,page:1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.m3:return g(g({},e),{},{loading:!0});case f.fI:return g(g({},e),{},{refreshing:!0});case f.qO:return g(g({},e),{},{refreshing:!1,loading:!1,data:t.payload,error:null});case f.C3:return g(g({},e),{},{refreshing:!1,loading:!1,error:t.payload});case f.fJ:return g(g({},e),{},{page:t.payload});default:return e}},q=r(27985);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,d.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j={error:null,isLoading:!1,commentContent:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.l4:return h(h({},e),{},{commentContent:t.payload});case q.m3:return h(h({},e),{},{isLoading:!0});case q.C3:return h(h({},e),{},{error:t.payload,isLoading:!1});case q.qO:return h(h({},e),{},{isLoading:!1,error:null,commentContent:""});default:return e}},z=r(38325);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,d.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C={loading:!1,data:{},error:null},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type===z.dG?w(w({},e),{},{loading:!1,data:t.payload,error:null}):e};var k=r(1265);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,d.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=(0,b.tY)({name:"InvenioRequests"});function I(e){var t=e.defaultQueryParams.size;return(0,y.createStore)((0,y.combineReducers)({timeline:O,timelineCommentEditor:P,request:N}),{timeline:M(M({},v),{},{size:t})},D((0,y.applyMiddleware)(k.default.withExtraArgument(e))))}var L=r(53196),S=r(61225);function x(e,t,r){return t=(0,i.A)(t),(0,s.A)(e,Q()?Reflect.construct(t,r||[],(0,i.A)(e).constructor):t.apply(e,r))}function Q(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Q=function(){return!!e})()}var B=function(e){function t(e){var r;(0,n.A)(this,t);var a=(r=x(this,t,[e])).props,s=a.requestsApi,i=a.requestEventsApi,o=a.request,l=a.defaultQueryParams,u=new c.D0(new c.FO(o)),m={requestsApi:s||u,request:o,requestEventsApi:i||function(e){return new c.h5(new c.IL(e))},refreshIntervalMs:5e3,defaultQueryParams:l};return r.store=I(m),r}return(0,o.A)(t,e),(0,a.A)(t,[{key:"render",value:function(){var e=this.props,t=e.overriddenCmps,r=e.userAvatar,n=e.permissions;return u.createElement(L.OverridableContext.Provider,{value:t},u.createElement(S.Provider,{store:this.store},u.createElement(l.Kd,{userAvatar:r,permissions:n})))}}])}(u.Component);B.propTypes={requestsApi:p().object,requestEventsApi:p().object,overriddenCmps:p().object,request:p().object.isRequired,userAvatar:p().string.isRequired,defaultQueryParams:p().object,permissions:p().object.isRequired},B.defaultProps={overriddenCmps:{},requestsApi:null,defaultQueryParams:{size:15}}},16811:(e,t,r)=>{r.d(t,{F0:()=>f,VT:()=>b,bI:()=>d,rn:()=>y});var n=r(58168),a=r(33393),s=r(59945),i=r(96540),o=r(5556),c=r.n(o),l=r(34667),u=r(85598),m=a.O.MediaContextProvider,p=a.O.Media,d=function(e){var t=e.onClick,r=e.loading,a=e.ariaAttributes,o=e.size,c=e.className;return i.createElement(m,null,i.createElement(p,{greaterThanOrEqual:"tablet"},i.createElement(u.qk,(0,n.A)({onClick:t,loading:r,disabled:r,size:o,className:c},a))),i.createElement(p,{at:"mobile"},i.createElement(l.A.Item,{icon:{name:"cancel",color:"negative",className:"mr-5"},onClick:t,content:s.M.t("Decline")})))};d.propTypes={onClick:c().func.isRequired,loading:c().bool,ariaAttributes:c().object,size:c().string,className:c().string},d.defaultProps={size:"mini",className:"ml-5"};var y=function(e){var t=e.onClick,r=e.requestType,a=e.loading,o=e.ariaAttributes,c=e.size,d=e.className,y="community-submission"===r?s.M.t("Accept and publish"):s.M.t("Accept");return i.createElement(m,null,i.createElement(p,{greaterThanOrEqual:"tablet"},i.createElement(u.af,(0,n.A)({onClick:t,loading:a,disabled:a,requestType:r,size:c,className:d},o))),i.createElement(p,{at:"mobile"},i.createElement(l.A.Item,{icon:{name:"checkmark",color:"positive",className:"mr-5"},onClick:t,content:y})))};y.propTypes={onClick:c().func.isRequired,loading:c().bool,ariaAttributes:c().object,size:c().string,className:c().string},y.defaultProps={size:"mini",className:"ml-5"};var b=function(e){var t=e.onClick,r=e.loading,a=e.ariaAttributes,o=e.size,c=e.className;return i.createElement(m,null,i.createElement(p,{greaterThanOrEqual:"tablet"},i.createElement(u.S,(0,n.A)({content:s.M.t("Cancel"),onClick:t,loading:r,disabled:r,size:o,className:c,negative:!1},a))),i.createElement(p,{at:"mobile"},i.createElement(l.A.Item,{icon:{name:"cancel",className:"neutral mr-5"},onClick:t,content:s.M.t("Cancel")})))};b.propTypes={onClick:c().func.isRequired,loading:c().bool,ariaAttributes:c().object,size:c().string,className:c().string},b.defaultProps={size:"mini",className:"ml-5"};var f=function(e){var t=e.onClick,r=e.requestType,a=e.loading,o=e.ariaAttributes,c=e.size,d=e.className,y=s.M.t("Request access");return i.createElement(m,null,i.createElement(p,{greaterThanOrEqual:"tablet"},i.createElement(u.o8,(0,n.A)({onClick:t,loading:a,disabled:a,requestType:r,size:c,className:d},o))),i.createElement(p,{at:"mobile"},i.createElement(l.A.Item,{icon:{name:"unlock alternate",color:"positive",className:"mr-5"},onClick:t,content:y})))};f.propTypes={onClick:c().func.isRequired,loading:c().bool,ariaAttributes:c().object,size:c().string,className:c().string},f.defaultProps={size:"mini",className:"ml-5"}},25306:(e,t,r)=>{r.d(t,{$Y:()=>b,po:()=>A,R3:()=>f,QZ:()=>y,aO:()=>g,h5:()=>d,qK:()=>O,to:()=>q,eu:()=>j,s6:()=>v,rx:()=>E,io:()=>h,Lu:()=>P});var n,a=r(64467),s=r(85598),i=r(16811),o=r(96540),c=r(76217),l=function(){return o.createElement(c.A,{name:"unlock alternate",className:"neutral"})},u=function(){return o.createElement(c.A,{name:"plus",className:"neutral"})},m=r(28085),p=r(59945),d=function(e){return o.createElement(m.A,{horizontal:!0,className:"primary",size:"small"},o.createElement(c.A,{name:"clock outline"}),p.M.t("Submitted"))},y=function(e){return o.createElement(m.A,{horizontal:!0,className:"negative",size:"small"},o.createElement(c.A,{name:"trash"}),p.M.t("Deleted"))},b=function(e){return o.createElement(m.A,{horizontal:!0,className:"positive",size:"small"},o.createElement(c.A,{name:"check circle"}),p.M.t("Accepted"))},f=function(e){return o.createElement(m.A,{horizontal:!0,className:"negative",size:"small"},o.createElement(c.A,{name:"times"}),p.M.t("Declined"))},A=function(e){return o.createElement(m.A,{horizontal:!0,className:"neutral",size:"small"},o.createElement(c.A,{name:"stop"}),p.M.t("Cancelled"))},g=function(e){return o.createElement(m.A,{horizontal:!0,className:"expired",size:"small"},o.createElement(c.A,{name:"calendar times outline"}),p.M.t("Expired"))},v=function(e){return o.createElement(m.A,{horizontal:!0,className:"primary",size:"small"},p.M.t("Draft review"))},O=function(e){return o.createElement(m.A,{horizontal:!0,className:"primary",size:"small"},p.M.t("Community inclusion"))},q=function(e){return o.createElement(m.A,{horizontal:!0,className:"primary",size:"small"},p.M.t("Member invitation"))},E=function(e){return o.createElement(m.A,{horizontal:!0,className:"primary",size:"small"},p.M.t("Guest access"))},h=function(e){return o.createElement(m.A,{horizontal:!0,className:"primary",size:"small"},p.M.t("User access"))},j=function(e){return o.createElement(m.A,{horizontal:!0,className:"primary",size:"small"},p.M.t("Community manage record"))},P=(n={},(0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)(n,"RequestTypeLabel.layout.community-submission",v),"RequestTypeLabel.layout.community-inclusion",O),"RequestTypeLabel.layout.community-invitation",q),"RequestTypeLabel.layout.guest-access-request",E),"RequestTypeLabel.layout.user-access-request",h),"RequestTypeLabel.layout.community-manage-record",j),"RequestStatusLabel.layout.submitted",d),"RequestStatusLabel.layout.deleted",y),"RequestStatusLabel.layout.accepted",b),"RequestStatusLabel.layout.declined",f),(0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)(n,"RequestStatusLabel.layout.cancelled",A),"RequestStatusLabel.layout.expired",g),"RequestActionButton.cancel",s.S),"RequestActionButton.decline",s.qk),"RequestActionButton.submit",s.o8),"RequestActionButton.accept",s.af),"RequestActionModalTrigger.accept",i.rn),"RequestActionModalTrigger.decline",i.bI),"RequestActionModalTrigger.cancel",i.VT),"InvenioRequests.RequestTypeIcon.layout.guest-access-request",l),(0,a.A)((0,a.A)((0,a.A)((0,a.A)(n,"InvenioRequests.RequestTypeIcon.layout.user-access-request",l),"InvenioRequests.RequestTypeIcon.layout.community-inclusion",u),"InvenioRequests.RequestTypeIcon.layout.community-submission",u),"InvenioRequests.RequestTypeIcon.layout.community-invitation",(function(){return o.createElement(c.A,{name:"user plus",className:"neutral"})})))}}]);
//# sourceMappingURL=9693.e8da8da41f0f07ea373c.js.map