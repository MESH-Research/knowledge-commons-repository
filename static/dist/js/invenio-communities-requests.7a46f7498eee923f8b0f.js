"use strict";(self.webpackChunkinvenio_assets=self.webpackChunkinvenio_assets||[]).push([[456],{50711:(e,t,n)=>{var a=n(64467),r=n(25306),c=n(86763),s=n(5905),l=n(53196),i=n(38102),o=n(5556),u=n.n(o),m=n(96540),p=n(98871),y=n(92257),A=n(43092);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,a.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=(0,p.Q2)((function(e){var t=e.placeholder,n=e.queryString,a=e.onInputChange,r=e.updateQueryState,c=e.currentQueryState,s=t||i.M.t("Search"),l=function(){r(d(d({},c),{},{queryString:n}))};return m.createElement(y.A,{action:{icon:"search",onClick:function(){l()},className:"search","aria-label":i.M.t("Search")},fluid:!0,placeholder:s,onChange:function(e,t){var n=t.value;a(n)},value:n,onKeyPress:function(e){"Enter"===e.key&&l()}})})),f=function(e){var t=e.result,n=e.community,a=(0,p.Q2)(A.m$),r=(0,p.Q2)(A.tl),c="/communities/".concat(n.slug,"/requests/").concat(t.id);return m.createElement(m.Fragment,null,m.createElement(a,{result:t,detailsURL:c}),m.createElement(r,{result:t,detailsURL:c}))};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,a.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}f.propTypes={result:u().object.isRequired,community:u().object.isRequired};var v=document.getElementById("communities-request-search-root"),h="InvenioCommunities.RequestSearch",O=JSON.parse(v.dataset.community),R=(0,l.parametrize)(f,{community:O}),z=(0,l.parametrize)(A.DP,{appName:h}),N=q((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)({},"".concat(h,".BucketAggregation.element"),s.Ox),"".concat(h,".BucketAggregationValues.element"),s.O6),"".concat(h,".SearchApp.facets"),s.rn),"".concat(h,".ResultsList.item"),R),"".concat(h,".ResultsGrid.item"),(function(){return null})),"".concat(h,".SearchApp.layout"),z),"".concat(h,".SearchApp.results"),A.xp),"".concat(h,".SearchBar.element"),g),"".concat(h,".EmptyResults.element"),A.VT),r.Lu),k=l.overrideStore.getAll();(0,c.U)(q(q({},N),k),!0,"invenio-search-config",!0)},16811:(e,t,n)=>{n.d(t,{F0:()=>d,VT:()=>b,bI:()=>y,rn:()=>A});var a=n(58168),r=n(33393),c=n(59945),s=n(96540),l=n(5556),i=n.n(l),o=n(34667),u=n(85598),m=r.O.MediaContextProvider,p=r.O.Media,y=function(e){var t=e.onClick,n=e.loading,r=e.ariaAttributes,l=e.size,i=e.className;return s.createElement(m,null,s.createElement(p,{greaterThanOrEqual:"tablet"},s.createElement(u.qk,(0,a.A)({onClick:t,loading:n,disabled:n,size:l,className:i},r))),s.createElement(p,{at:"mobile"},s.createElement(o.A.Item,{icon:{name:"cancel",color:"negative",className:"mr-5"},onClick:t,content:c.M.t("Decline")})))};y.propTypes={onClick:i().func.isRequired,loading:i().bool,ariaAttributes:i().object,size:i().string,className:i().string},y.defaultProps={size:"mini",className:"ml-5"};var A=function(e){var t=e.onClick,n=e.requestType,r=e.loading,l=e.ariaAttributes,i=e.size,y=e.className,A="community-submission"===n?c.M.t("Accept and publish"):c.M.t("Accept");return s.createElement(m,null,s.createElement(p,{greaterThanOrEqual:"tablet"},s.createElement(u.af,(0,a.A)({onClick:t,loading:r,disabled:r,requestType:n,size:i,className:y},l))),s.createElement(p,{at:"mobile"},s.createElement(o.A.Item,{icon:{name:"checkmark",color:"positive",className:"mr-5"},onClick:t,content:A})))};A.propTypes={onClick:i().func.isRequired,loading:i().bool,ariaAttributes:i().object,size:i().string,className:i().string},A.defaultProps={size:"mini",className:"ml-5"};var b=function(e){var t=e.onClick,n=e.loading,r=e.ariaAttributes,l=e.size,i=e.className;return s.createElement(m,null,s.createElement(p,{greaterThanOrEqual:"tablet"},s.createElement(u.S,(0,a.A)({content:c.M.t("Cancel"),onClick:t,loading:n,disabled:n,size:l,className:i,negative:!1},r))),s.createElement(p,{at:"mobile"},s.createElement(o.A.Item,{icon:{name:"cancel",className:"neutral mr-5"},onClick:t,content:c.M.t("Cancel")})))};b.propTypes={onClick:i().func.isRequired,loading:i().bool,ariaAttributes:i().object,size:i().string,className:i().string},b.defaultProps={size:"mini",className:"ml-5"};var d=function(e){var t=e.onClick,n=e.requestType,r=e.loading,l=e.ariaAttributes,i=e.size,y=e.className,A=c.M.t("Request access");return s.createElement(m,null,s.createElement(p,{greaterThanOrEqual:"tablet"},s.createElement(u.o8,(0,a.A)({onClick:t,loading:r,disabled:r,requestType:n,size:i,className:y},l))),s.createElement(p,{at:"mobile"},s.createElement(o.A.Item,{icon:{name:"unlock alternate",color:"positive",className:"mr-5"},onClick:t,content:A})))};d.propTypes={onClick:i().func.isRequired,loading:i().bool,ariaAttributes:i().object,size:i().string,className:i().string},d.defaultProps={size:"mini",className:"ml-5"}},25306:(e,t,n)=>{n.d(t,{$Y:()=>b,po:()=>g,R3:()=>d,QZ:()=>A,aO:()=>f,h5:()=>y,qK:()=>q,to:()=>v,eu:()=>R,s6:()=>E,rx:()=>h,io:()=>O,Lu:()=>z});var a,r=n(64467),c=n(85598),s=n(16811),l=n(96540),i=n(76217),o=function(){return l.createElement(i.A,{name:"unlock alternate",className:"neutral"})},u=function(){return l.createElement(i.A,{name:"plus",className:"neutral"})},m=n(28085),p=n(59945),y=function(e){return l.createElement(m.A,{horizontal:!0,className:"primary",size:"small"},l.createElement(i.A,{name:"clock outline"}),p.M.t("Submitted"))},A=function(e){return l.createElement(m.A,{horizontal:!0,className:"negative",size:"small"},l.createElement(i.A,{name:"trash"}),p.M.t("Deleted"))},b=function(e){return l.createElement(m.A,{horizontal:!0,className:"positive",size:"small"},l.createElement(i.A,{name:"check circle"}),p.M.t("Accepted"))},d=function(e){return l.createElement(m.A,{horizontal:!0,className:"negative",size:"small"},l.createElement(i.A,{name:"times"}),p.M.t("Declined"))},g=function(e){return l.createElement(m.A,{horizontal:!0,className:"neutral",size:"small"},l.createElement(i.A,{name:"stop"}),p.M.t("Cancelled"))},f=function(e){return l.createElement(m.A,{horizontal:!0,className:"expired",size:"small"},l.createElement(i.A,{name:"calendar times outline"}),p.M.t("Expired"))},E=function(e){return l.createElement(m.A,{horizontal:!0,className:"primary",size:"small"},p.M.t("Draft review"))},q=function(e){return l.createElement(m.A,{horizontal:!0,className:"primary",size:"small"},p.M.t("Community inclusion"))},v=function(e){return l.createElement(m.A,{horizontal:!0,className:"primary",size:"small"},p.M.t("Member invitation"))},h=function(e){return l.createElement(m.A,{horizontal:!0,className:"primary",size:"small"},p.M.t("Guest access"))},O=function(e){return l.createElement(m.A,{horizontal:!0,className:"primary",size:"small"},p.M.t("User access"))},R=function(e){return l.createElement(m.A,{horizontal:!0,className:"primary",size:"small"},p.M.t("Community manage record"))},z=(a={},(0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)(a,"RequestTypeLabel.layout.community-submission",E),"RequestTypeLabel.layout.community-inclusion",q),"RequestTypeLabel.layout.community-invitation",v),"RequestTypeLabel.layout.guest-access-request",h),"RequestTypeLabel.layout.user-access-request",O),"RequestTypeLabel.layout.community-manage-record",R),"RequestStatusLabel.layout.submitted",y),"RequestStatusLabel.layout.deleted",A),"RequestStatusLabel.layout.accepted",b),"RequestStatusLabel.layout.declined",d),(0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)(a,"RequestStatusLabel.layout.cancelled",g),"RequestStatusLabel.layout.expired",f),"RequestActionButton.cancel",c.S),"RequestActionButton.decline",c.qk),"RequestActionButton.submit",c.o8),"RequestActionButton.accept",c.af),"RequestActionModalTrigger.accept",s.rn),"RequestActionModalTrigger.decline",s.bI),"RequestActionModalTrigger.cancel",s.VT),"InvenioRequests.RequestTypeIcon.layout.guest-access-request",o),(0,r.A)((0,r.A)((0,r.A)((0,r.A)(a,"InvenioRequests.RequestTypeIcon.layout.user-access-request",o),"InvenioRequests.RequestTypeIcon.layout.community-inclusion",u),"InvenioRequests.RequestTypeIcon.layout.community-submission",u),"InvenioRequests.RequestTypeIcon.layout.community-invitation",(function(){return l.createElement(i.A,{name:"user plus",className:"neutral"})})))},86763:(e,t,n)=>{n.d(t,{U:()=>a.U});n(88802);var a=n(71790)}},e=>{e.O(0,[402,1057,7655,5373,6267,9777,5941,7501,4218,8010,2373,8102,742,6528,3532,1751,226,5580,9945,1357,3092],(()=>{return t=50711,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=invenio-communities-requests.7a46f7498eee923f8b0f.js.map