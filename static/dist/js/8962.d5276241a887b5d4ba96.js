"use strict";(self.webpackChunkinvenio_assets=self.webpackChunkinvenio_assets||[]).push([[8962],{82872:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(58168),a=n(23029),o=n(92901),i=n(56822),c=n(53954),u=n(85501),l=n(96540),s=n(53196),m=n(2685),d=n(76833),p=n(6549),v=n(5556),f=n.n(v);function A(e,t,n){return t=(0,c.A)(t),(0,i.A)(e,E()?Reflect.construct(t,n||[],(0,c.A)(e).constructor):t.apply(e,n))}function E(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(E=function(){return!!e})()}var h=function(e){function t(){return(0,a.A)(this,t),A(this,t,arguments)}return(0,u.A)(t,e),(0,o.A)(t,[{key:"render",value:function(){var e=this.props,t=e.isLoading,n=e.children;return l.createElement(s.default,(0,r.A)({id:"Loader.layout"},this.props),t?l.createElement(m.A,{className:"loader-container"},l.createElement(d.A,{active:!0,inverted:!0},l.createElement(p.A,{active:!0,size:"large",inline:"centered"}))):l.createElement(l.Fragment,null,n))}}])}(l.Component);h.propTypes={isLoading:f().bool,children:f().node},h.defaultProps={isLoading:!1,children:null};const y=s.default.component("Loader",h)},2545:(e,t,n)=>{n.d(t,{Ay:()=>E,Me:()=>f});var r=n(58168),a=n(80045),o=n(5556),i=n.n(o),c=n(96540),u=n(81057),l=n(27089),s=n(98462),m=n(76217),d=["src"],p=["isActionEvent"],v=function(e){var t=e.children;return c.createElement(l.A,{className:"requests-feed-container rich-input-content ml-0-mobile mr-0-mobile"},c.createElement(s.A,null,t))},f=function(e){var t=e.src,n=(0,a.A)(e,d);return c.createElement("div",{className:"requests-avatar-container"},t&&c.createElement(u.Image,(0,r.A)({src:t,rounded:!0,avatar:!0},n)),!t&&c.createElement(m.A,{size:"large",name:"user circle outline"}))},A=function(e){var t=e.isActionEvent,n=(0,a.A)(e,p);return c.createElement(s.A.Event,(0,r.A)({},n,{className:t?"requests-action-event":""}))};A.propTypes={isActionEvent:i().bool},A.defaultProps={isActionEvent:!1},v.Content=function(e){var t=e.children,n=e.isEvent;return c.createElement("div",{className:"requests-event-inner-container".concat(n?" thread":"")},t)},v.Avatar=f,v.Icon=function(e){var t=e.name,n=e.size,r=e.color;return c.createElement("div",{className:"requests-action-event-icon"},c.createElement(m.A,{name:t,size:n,className:r}))},v.Item=function(e){var t=e.children;return c.createElement("div",{className:"requests-event-item"},c.createElement("div",{className:"requests-event-container"},t))},v.Event=A;const E=v},87058:(e,t,n)=>{n.d(t,{k:()=>i});var r=n(96540),a=n(5556),o=n.n(a),i=function(e){var t=e.content;return"html"===e.format?r.createElement("span",{dangerouslySetInnerHTML:{__html:t}}):t};i.propTypes={content:o().string,format:o().string},i.defaultProps={content:"",format:""}},13254:(e,t,n)=>{n.d(t,{A:()=>q});var r=n(58168),a=n(23029),o=n(92901),i=n(56822),c=n(53954),u=n(85501),l=n(87664),s=n(96540),m=n(5556),d=n.n(m),p=n(53196),v=n(1489),f=n(61225),A=n(44641),E=n(51253),h=(0,f.connect)((function(e){return{loading:e.timeline.loading,refreshing:e.timeline.refreshing,timeline:e.timeline.data,error:e.timeline.error,isSubmitting:e.timelineCommentEditor.isLoading,size:e.timeline.size,page:e.timeline.page}}),(function(e){return{getTimelineWithRefresh:function(){return e((0,A.Zx)())},timelineStopRefresh:function(){return e((0,A.En)())},setPage:function(t){return e((0,A.Ir)(t))}}}))(E.A);function y(e,t,n){return t=(0,c.A)(t),(0,i.A)(e,g()?Reflect.construct(t,n||[],(0,c.A)(e).constructor):t.apply(e,n))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var C=function(e){function t(){return(0,a.A)(this,t),y(this,t,arguments)}return(0,u.A)(t,e),(0,o.A)(t,[{key:"render",value:function(){var e=this.props,t=e.request,n=e.userAvatar,a=e.permissions;return s.createElement(p.default,(0,r.A)({id:"InvenioRequests.RequestDetails.layout"},this.props),s.createElement(s.Fragment,null,s.createElement(v.A,{stackable:!0,reversed:"mobile"},s.createElement(v.A.Column,{mobile:16,tablet:12,computer:13},s.createElement(h,{userAvatar:n,request:t,permissions:a})),s.createElement(v.A.Column,{mobile:16,tablet:4,computer:3},s.createElement(l.A,{request:t})))))}}])}(s.Component);C.propTypes={request:d().object.isRequired,userAvatar:d().string,permissions:d().object.isRequired},C.defaultProps={userAvatar:""};const q=p.default.component("InvenioRequests.RequestDetails",C)},87664:(e,t,n)=>{n.d(t,{A:()=>I});var r=n(23029),a=n(92901),o=n(56822),i=n(53954),c=n(85501),u=n(64467),l=n(59945),s=n(5556),m=n.n(s),d=n(96540),p=n(81057),v=n(53196),f=n(76217),A=n(87395),E=n(27041),h=n(36713),y=n(89263),g=n(7763);function C(e,t,n){return t=(0,i.A)(t),(0,o.A)(e,q()?Reflect.construct(t,n||[],(0,i.A)(e).constructor):t.apply(e,n))}function q(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(q=function(){return!!e})()}var R=function(e){var t,n=e.user;return d.createElement("div",{className:"flex"},d.createElement(p.Image,{src:n.links.avatar,avatar:!0,size:"tiny",className:"mr-5",ui:!1,rounded:!0}),d.createElement("span",null,(null===(t=n.profile)||void 0===t?void 0:t.full_name)||(null===n||void 0===n?void 0:n.username)||(null===n||void 0===n?void 0:n.email)||l.M.t("Anonymous user")))},b=function(e){var t=e.community;return d.createElement("div",{className:"flex"},d.createElement(p.Image,{src:t.links.logo,avatar:!0,size:"tiny",className:"mr-5",ui:!1}),d.createElement("a",{href:"/communities/".concat(t.slug)},t.metadata.title))},k=function(e){var t=e.email;return d.createElement("div",{className:"flex"},d.createElement(f.A,{name:"mail",className:"mr-5"}),d.createElement("span",null,l.M.t("Email"),": ",t.id))},x=function(e){var t=e.userData,n=e.details,r="community"in t,a="email"in t;return"user"in t?d.createElement(R,{user:n}):r?d.createElement(b,{community:n}):a?d.createElement(k,{email:n}):void 0},M=function(e){var t=e.details;return d.createElement(A.A,{negative:!0},t.metadata.title)},T=function(e){function t(){var e;(0,r.A)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=C(this,t,[].concat(a)),(0,u.A)(e,"isResourceDeleted",(function(e){return!0===e.is_ghost})),e}return(0,c.A)(t,e),(0,a.A)(t,[{key:"render",value:function(){var e,t,n,r,a,o=this.props.request,i=null===(e=o.expanded)||void 0===e?void 0:e.created_by,c=null===(t=o.expanded)||void 0===t?void 0:t.receiver;return d.createElement(v.default,{id:"InvenioRequest.RequestMetadata.Layout",request:o},d.createElement(d.Fragment,null,void 0!==i&&d.createElement(d.Fragment,null,d.createElement(E.A,{as:"h3",size:"tiny"},l.M.t("Creator")),this.isResourceDeleted(i)?d.createElement(M,{details:i}):d.createElement(x,{userData:o.created_by,details:null===(n=o.expanded)||void 0===n?void 0:n.created_by}),d.createElement(h.A,null)),d.createElement(E.A,{as:"h3",size:"tiny"},l.M.t("Receiver")),this.isResourceDeleted(c)?d.createElement(M,{details:c}):d.createElement(x,{userData:o.receiver,details:null===(r=o.expanded)||void 0===r?void 0:r.receiver}),d.createElement(h.A,null),d.createElement(E.A,{as:"h3",size:"tiny"},l.M.t("Request type")),d.createElement(g.A,{type:o.type}),d.createElement(h.A,null),d.createElement(E.A,{as:"h3",size:"tiny"},l.M.t("Status")),d.createElement(y.A,{status:o.status}),d.createElement(h.A,null),d.createElement(E.A,{as:"h3",size:"tiny"},l.M.t("Created")),(0,p.toRelativeTime)(o.created,l.M.language),o.expires_at&&d.createElement(d.Fragment,null,d.createElement(h.A,null),d.createElement(E.A,{as:"h3",size:"tiny"},l.M.t("Expires")),(0,p.toRelativeTime)(o.expires_at,l.M.language)),"accepted"===o.status&&(null===(a=o.topic)||void 0===a?void 0:a.record)&&d.createElement(d.Fragment,null,d.createElement(h.A,null),d.createElement(E.A,{as:"h3",size:"tiny"},l.M.t("Record")),d.createElement("a",{href:"/records/".concat(o.topic.record)},o.title))))}}])}(d.Component);T.propTypes={request:m().object.isRequired};const I=v.default.component("InvenioRequests.RequestMetadata",T)},89263:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(23029),a=n(92901),o=n(56822),i=n(53954),c=n(85501),u=n(96540),l=n(5556),s=n.n(l),m=n(53196),d=n(76217);function p(e,t,n){return t=(0,i.A)(t),(0,o.A)(e,v()?Reflect.construct(t,n||[],(0,i.A)(e).constructor):t.apply(e,n))}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}var f=function(e){function t(){return(0,r.A)(this,t),p(this,t,arguments)}return(0,c.A)(t,e),(0,a.A)(t,[{key:"render",value:function(){var e=this.props.status;return u.createElement(m.default,{id:"RequestStatus.layout.".concat(e),status:e},u.createElement("div",null,u.createElement(d.A,{name:"bars"}),u.createElement("span",null,e)))}}])}(u.Component);f.propTypes={status:s().string.isRequired};const A=m.default.component("InvenioRequests.RequestStatus",f)},28962:(e,t,n)=>{n.d(t,{zm:()=>O,lk:()=>N,BX:()=>L,KS:()=>w,w9:()=>S,Kd:()=>P,pD:()=>I});var r=n(61225),a=n(23029),o=n(92901),i=n(56822),c=n(53954),u=n(85501),l=n(53196),s=n(82872),m=n(91343),d=n(5556),p=n.n(d),v=n(40961),f=n(96540),A=document.getElementById("request-actions"),E=function(e){var t=e.request,n=e.actionSuccessCallback;return v.createPortal(f.createElement(m.U,{request:t,actionSuccessCallback:n,size:"medium"}),A)};E.propTypes={request:p().object.isRequired,actionSuccessCallback:p().func.isRequired};const h=l.default.component("InvenioRequests.RequestActionsPortal",E);var y=n(13254),g=n(62193),C=n.n(g);function q(e,t,n){return t=(0,c.A)(t),(0,i.A)(e,R()?Reflect.construct(t,n||[],(0,c.A)(e).constructor):t.apply(e,n))}function R(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(R=function(){return!!e})()}var b=function(e){function t(){return(0,a.A)(this,t),q(this,t,arguments)}return(0,u.A)(t,e),(0,o.A)(t,[{key:"componentDidMount",value:function(){(0,this.props.initRequest)()}},{key:"render",value:function(){var e=this.props,t=e.request,n=e.updateRequestAfterAction,r=e.userAvatar,a=e.permissions;return f.createElement(l.default,{id:"InvenioRequest.Request.layout"},f.createElement(s.A,{isLoading:C()(t)},f.createElement(h,{request:t,actionSuccessCallback:n}),f.createElement(y.A,{request:t,userAvatar:r,permissions:a})))}}])}(f.Component);b.propTypes={request:p().object.isRequired,initRequest:p().func.isRequired,updateRequestAfterAction:p().func.isRequired,userAvatar:p().string,permissions:p().object.isRequired},b.defaultProps={userAvatar:""};const k=l.default.component("InvenioRequests.Request",b);var x=n(38325),M=n(76217),T=n(59945),I=function(){return f.createElement("div",null,f.createElement(M.A,{name:"clock outline"}),f.createElement("span",null,T.M.t("Submitted")))},w=function(){return f.createElement("div",null,f.createElement(M.A,{name:"trash"}),f.createElement("span",null,T.M.t("Deleted")))},O=function(){return f.createElement("div",null,f.createElement(M.A,{name:"check circle"}),f.createElement("span",null,T.M.t("Accepted")))},L=function(){return f.createElement("div",null,f.createElement(M.A,{name:"times"}),f.createElement("span",null,T.M.t("Declined")))},N=function(){return f.createElement("div",null,f.createElement(M.A,{name:"stop"}),f.createElement("span",null,T.M.t("Cancelled")))},S=function(){return f.createElement("div",null,f.createElement(M.A,{name:"calendar times outline"}),f.createElement("span",null,T.M.t("Expired")))},P=(0,r.connect)((function(e){return{request:e.request.data}}),(function(e){return{initRequest:function(){return e((0,x.qw)())},updateRequestAfterAction:function(t){return e((0,x.Pi)(t))}}}))(k)},38325:(e,t,n)=>{n.d(t,{H5:()=>u,Pi:()=>l,dG:()=>i,qw:()=>c});var r=n(10467),a=n(54756),o=n.n(a),i="request/INIT",c=function(){return function(){var e=(0,r.A)(o().mark((function e(t,n,r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:i,payload:r.request});case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},u=function(e){return function(){var t=(0,r.A)(o().mark((function t(n,r,a){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:i,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=(0,r.A)(o().mark((function t(n,r,a){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(u(e)),window.location.reload();case 2:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()}},51253:(e,t,n)=>{n.d(t,{A:()=>oe});var r=n(58168),a=n(23029),o=n(92901),i=n(56822),c=n(53954),u=n(85501),l=n(64467),s=n(5556),m=n.n(s),d=n(96540),p=n(53196),v=n(27089),f=n(36713),A=n(51217),E=n(82872),h=n(10467),y=n(54756),g=n.n(y),C=n(48423),q=n(87395),R=n(3487),b=function(e){var t=e.contentText,n=e.action,r=e.isLoading,a=e.error,o=e.headerText,i=e.cancelButtonText,c=e.actionButtonText,u=e.open,l=e.onOpen,s=e.onClose;return d.createElement(C.A,{onClose:l,onOpen:s,open:u},d.createElement(C.A.Header,null,o),d.createElement(C.A.Content,null,t),d.createElement(C.A.Actions,null,a&&d.createElement(q.A,{negative:!0,compact:!0},a),d.createElement(R.A,{content:i,onClick:function(){return s()}}),d.createElement(R.A,{content:c,negative:!0,onClick:function(){return n()},loading:r})))};b.propTypes={contentText:m().string.isRequired,action:m().func.isRequired,isLoading:m().bool.isRequired,error:m().string.isRequired,headerText:m().string.isRequired,cancelButtonText:m().string.isRequired,actionButtonText:m().string.isRequired};const k=b;var x=n(59945),M=n(18292);function T(e,t,n){return t=(0,c.A)(t),(0,i.A)(e,I()?Reflect.construct(t,n||[],(0,c.A)(e).constructor):t.apply(e,n))}function I(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(I=function(){return!!e})()}var w=function(e){function t(e){var n;return(0,a.A)(this,t),n=T(this,t,[e]),(0,l.A)(n,"onDelete",(0,h.A)(g().mark((function e(){var t,r,a;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,r=t.action,a=t.onClose,n.setState({isLoading:!0}),e.prev=2,e.next=5,r();case 5:n.setState({isLoading:!1,error:""}),a(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),n.setState({isLoading:!1,error:(0,M.t)(e.t0)});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))),n.state={isLoading:!1,error:""},n}return(0,u.A)(t,e),(0,o.A)(t,[{key:"render",value:function(){var e=this.props,t=e.onOpen,n=e.onClose,r=e.open,a=this.state,o=a.isLoading,i=a.error;return d.createElement(k,{contentText:x.M.t("Are you sure you want to delete this comment?"),action:this.onDelete,open:r,onOpen:t,onClose:n,isLoading:o,error:i,headerText:x.M.t("Confirm"),cancelButtonText:x.M.t("Cancel"),actionButtonText:x.M.t("Delete")})}}])}(d.Component);w.propTypes={open:m().bool.isRequired,onOpen:m().func.isRequired,onClose:m().func.isRequired};var O=n(95270),L=function(e){var t=e.size,n=e.page,r=e.totalLength,a=e.setPage,o=Math.ceil(r/t);return r>t?d.createElement(O.A,{totalPages:o,activePage:n,onPageChange:function(e,t){var n=t.activePage;return a(n)}}):null};L.propTypes={size:m().number,page:m().number,totalLength:m().number,setPage:m().func.isRequired},L.defaultProps={size:1,page:1,totalLength:1};var N=n(2545),S=n(61225),P=n(27985),z=n(81057),D=n(85598),_=function(e){var t=e.isLoading,n=e.commentContent,r=e.setCommentContent,a=e.error,o=e.submitComment,i=e.userAvatar;return d.createElement("div",{className:"timeline-comment-editor-container"},a&&d.createElement(q.A,{negative:!0},a),d.createElement("div",{className:"flex"},d.createElement(N.Me,{src:i,className:"tablet computer only rel-mr-1"}),d.createElement(v.A,{fluid:!0,className:"ml-0-mobile mr-0-mobile fluid-mobile"},d.createElement(z.RichEditor,{value:n,onChange:function(e,t){r(t.getContent())},minHeight:150}))),d.createElement("div",{className:"text-align-right rel-mt-1"},d.createElement(D.yY,{icon:"send",size:"medium",content:x.M.t("Comment"),loading:t,onClick:function(){return o(n,"html")}})))};_.propTypes={commentContent:m().string,isLoading:m().bool,setCommentContent:m().func.isRequired,error:m().string,submitComment:m().func.isRequired,userAvatar:m().string},_.defaultProps={commentContent:"",isLoading:!1,error:"",userAvatar:""};const B=_;var j=(0,S.connect)((function(e){return{isLoading:e.timelineCommentEditor.isLoading,error:e.timelineCommentEditor.error,commentContent:e.timelineCommentEditor.commentContent}}),(function(e){return{submitComment:function(t,n){return e((0,P.cC)(t,n))},setCommentContent:function(t){return e((0,P.u9)(t))}}}))(B),F=n(58309);function H(e,t,n){return t=(0,c.A)(t),(0,i.A)(e,G()?Reflect.construct(t,n||[],(0,c.A)(e).constructor):t.apply(e,n))}function G(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(G=function(){return!!e})()}var U=function(e){function t(e){var n;return(0,a.A)(this,t),n=H(this,t,[e]),(0,l.A)(n,"toggleEditMode",(function(){var e=n.state.isEditing;n.setState({isEditing:!e,error:null})})),(0,l.A)(n,"updateComment",function(){var e=(0,h.A)(g().mark((function e(t,r){var a,o,i;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.props,o=a.updateComment,i=a.event,t){e.next=3;break}return e.abrupt("return");case 3:return n.setState({isLoading:!0}),e.prev=4,e.next=7,o({content:t,format:r,event:i});case 7:n.setState({isLoading:!1,isEditing:!1,error:null}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),n.setState({isLoading:!1,isEditing:!0,error:(0,M.t)(e.t0)});case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t,n){return e.apply(this,arguments)}}()),(0,l.A)(n,"deleteComment",(0,h.A)(g().mark((function e(){var t,r,a;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.props,r=t.deleteComment,a=t.event,(0,t.openConfirmModal)((function(){return r({event:a})}));case 2:case"end":return e.stop()}}),e)})))),n.state={isLoading:!1,isEditing:!1,error:null},n}return(0,u.A)(t,e),(0,o.A)(t,[{key:"render",value:function(){var e=this.props.event,t=this.state,n=t.isLoading,r=t.isEditing,a=t.error;return d.createElement(p.default,{id:"TimelineCommentEventControlled.layout"},d.createElement(F.kc,{updateComment:this.updateComment,deleteComment:this.deleteComment,toggleEditMode:this.toggleEditMode,isLoading:n,isEditing:r,error:a,event:e}))}}])}(d.Component);U.propTypes={event:m().object.isRequired,updateComment:m().func.isRequired,deleteComment:m().func.isRequired,openConfirmModal:m().func.isRequired};const W=p.default.component("TimelineCommentEventControlled",U);var J=n(44641),Z=n(88055),K=n.n(Z);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){(0,l.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=function(e){var t=e.content,n=e.format,r=e.event;return function(){var e=(0,h.A)(g().mark((function e(a,o,i){var c,u,l;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a((0,J.En)()),c=i.requestEventsApi(r.links),u=(0,M.J)(t,n),a({type:J.fI}),e.next=6,c.updateComment(u);case 6:return l=e.sent,a({type:J.qO,payload:$(l.data,o().timeline.data)}),a((0,J.LD)()),e.abrupt("return",l.data);case 10:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},V=function(e){var t=e.event;return function(){var e=(0,h.A)(g().mark((function e(n,r,a){var o,i;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n((0,J.En)()),o=a.requestEventsApi(t.links),n({type:J.fI}),e.next=5,o.deleteComment();case 5:return i=e.sent,n({type:J.qO,payload:ee(t.id,r)}),n((0,J.LD)()),e.abrupt("return",i.data);case 9:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},$=function(e,t){var n=K()(t),r=n.hits.hits,a=r.findIndex((function(t){return t.id===e.id}));return r[a]=e,n},ee=function(e,t){var n=K()(t().timeline.data),r=n.hits.hits,a=r.findIndex((function(t){return t.id===e})),o=r[a],i={content:x.M.t("deleted a comment"),event:"comment_deleted",format:"html"};return r[a]=X(X({},o),{},{type:"L",payload:i}),n},te=(0,S.connect)(null,(function(e){return{updateComment:function(){var t=(0,h.A)(g().mark((function t(n){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e(Q(n)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),deleteComment:function(){var t=(0,h.A)(g().mark((function t(n){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e(V(n)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(W);function ne(e,t,n){return t=(0,c.A)(t),(0,i.A)(e,re()?Reflect.construct(t,n||[],(0,c.A)(e).constructor):t.apply(e,n))}function re(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(re=function(){return!!e})()}var ae=function(e){function t(e){var n;return(0,a.A)(this,t),n=ne(this,t,[e]),(0,l.A)(n,"onOpenModal",(function(e){n.setState({modalOpen:!0,modalAction:e})})),n.state={modalOpen:!1,modalAction:null},n}return(0,u.A)(t,e),(0,o.A)(t,[{key:"componentDidMount",value:function(){(0,this.props.getTimelineWithRefresh)()}},{key:"componentWillUnmount",value:function(){(0,this.props.timelineStopRefresh)()}},{key:"render",value:function(){var e,t,n=this,a=this.props,o=a.timeline,i=a.loading,c=a.error,u=a.setPage,l=a.size,s=a.page,m=a.userAvatar,h=a.request,y=a.permissions,g=this.state,C=g.modalOpen,q=g.modalAction;return d.createElement(E.A,{isLoading:i},d.createElement(A.A,{error:c},d.createElement(p.default,(0,r.A)({id:"TimelineFeed.layout"},this.props),d.createElement(v.A,{id:"requests-timeline",className:"ml-0-mobile mr-0-mobile"},d.createElement(p.default,{id:"TimelineFeed.header",request:h,permissions:y}),d.createElement(N.Ay,null,null===(e=o.hits)||void 0===e?void 0:e.hits.map((function(e){return d.createElement(te,{key:e.id,event:e,openConfirmModal:n.onOpenModal})}))),d.createElement(f.A,{fitted:!0}),d.createElement(v.A,{textAlign:"center",className:"mb-15 mt-15"},d.createElement(L,{page:s,size:l,setPage:u,totalLength:null===(t=o.hits)||void 0===t?void 0:t.total})),d.createElement(j,{userAvatar:m}),d.createElement(w,{open:C,action:q,onOpen:function(){return n.setState({modalOpen:!0})},onClose:function(){return n.setState({modalOpen:!1})}})))))}}])}(d.Component);ae.propTypes={getTimelineWithRefresh:m().func.isRequired,timelineStopRefresh:m().func.isRequired,timeline:m().object,error:m().object,isSubmitting:m().bool,setPage:m().func.isRequired,page:m().number,size:m().number,userAvatar:m().string,request:m().object.isRequired,permissions:m().object.isRequired},ae.defaultProps={userAvatar:""};const oe=p.default.component("TimelineFeed",ae)},44641:(e,t,n)=>{n.d(t,{C3:()=>d,En:()=>C,Ir:()=>E,LD:()=>g,Zx:()=>y,fI:()=>p,fJ:()=>v,m3:()=>s,qO:()=>m});var r=n(10467),a=n(23029),o=n(92901),i=n(64467),c=n(54756),u=n.n(c),l=n(38325),s="timeline/IS_LOADING",m="timeline/SUCCESS",d="timeline/HAS_ERROR",p="timeline/REFRESHING",v="timeline/CHANGE_PAGE",f=function(){return(0,o.A)((function e(){(0,a.A)(this,e)}),null,[{key:"setIntervalId",value:function(e){this.intervalId=e}},{key:"resetInterval",value:function(){clearInterval(this.intervalId),delete this.intervalId}}])}();(0,i.A)(f,"IntervalId",void 0);var A=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(){var t=(0,r.A)(u().mark((function t(n,r,a){var o,i,c,v,f,A,E,h,y;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r(),i=o.timeline,c=i.size,v=i.page,f=i.data,e&&n({type:s}),n({type:p}),t.prev=4,t.next=7,a.requestsApi.getTimeline({size:c,page:v,sort:"oldest"});case 7:if(h=t.sent,!((null===(A=h.data)||void 0===A||null===(A=A.hits)||void 0===A?void 0:A.total)>(null===f||void 0===f||null===(E=f.hits)||void 0===E?void 0:E.total))){t.next=16;break}if(!h.data.hits.hits.some((function(e){var t;return"L"===e.type&&a.requestsApi.availableRequestStatuses.includes(null===e||void 0===e||null===(t=e.payload)||void 0===t?void 0:t.event)}))){t.next=16;break}return t.next=14,a.requestsApi.getRequest();case 14:y=t.sent,n((0,l.H5)(y.data));case 16:n({type:m,payload:h.data}),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(4),n({type:d,payload:t.t0});case 22:case"end":return t.stop()}}),t,null,[[4,19]])})));return function(e,n,r){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=(0,r.A)(u().mark((function t(n,r,a){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:v,payload:e}),t.next=3,n(A());case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},h=function(e,t,n){var r=t(),a=r.timeline,o=a.loading,i=a.refreshing,c=a.error,u=r.timelineCommentEditor.isLoading;c&&e(C()),o&&i&&u||e(A(!1))},y=function(){return function(){var e=(0,r.A)(u().mark((function e(t,n,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(A(!0)),t(g());case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},g=function(){return function(){var e=(0,r.A)(u().mark((function e(t,n,r){var a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.intervalId||(a=setInterval((function(){return h(t,n)}),r.refreshIntervalMs),f.setIntervalId(a));case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},C=function(){return function(e,t,n){f.resetInterval()}}},27985:(e,t,n)=>{n.d(t,{C3:()=>d,cC:()=>A,l4:()=>v,m3:()=>m,qO:()=>p,u9:()=>f});var r=n(45458),a=n(10467),o=n(54756),i=n.n(o),c=n(18292),u=n(44641),l=n(88055),s=n.n(l),m="eventEditor/IS_LOADING",d="eventEditor/HAS_ERROR",p="eventEditor/SUCCESS",v="eventEditor/SETTING_CONTENT",f=function(e){return function(){var t=(0,a.A)(i().mark((function t(n,r,a){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:v,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},A=function(e,t){return function(){var n=(0,a.A)(i().mark((function n(r,a,o){var l,s,v,f,A,h,y,g;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=a(),s=l.timeline,r((0,u.En)()),r({type:m}),v=(0,c.J)(e,t||"html"),n.prev=4,n.next=7,o.requestsApi.submitComment(v);case 7:return f=n.sent,A=s.page,h=s.size,y=s.data.hits.hits.length,(g=y+1>h)&&r({type:u.fJ,payload:A+1}),r({type:p}),n.next=16,r({type:u.qO,payload:E(f.data,s,g)});case 16:r((0,u.LD)()),n.next=24;break;case 19:throw n.prev=19,n.t0=n.catch(4),r({type:d,payload:(0,c.t)(n.t0)}),r((0,u.LD)()),n.t0;case 24:case"end":return n.stop()}}),n,null,[[4,19]])})));return function(e,t,r){return n.apply(this,arguments)}}()},E=function(e,t,n){var a=s()(t.data),o=a.hits.hits;return a.hits.hits=n?[e]:[].concat((0,r.A)(o),[e]),a.hits.total++,a}},43977:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(23029),a=n(92901),o=n(56822),i=n(53954),c=n(85501),u=n(64467),l=n(59945),s=n(5556),m=n.n(s),d=n(96540),p=n(81057),v=n(53196),f=n(76217),A=n(98462),E=n(34667),h=n(27089),y=n(85598),g=n(51217),C=n(2545),q=n(87058);function R(e,t,n){return t=(0,i.A)(t),(0,o.A)(e,b()?Reflect.construct(t,n||[],(0,i.A)(e).constructor):t.apply(e,n))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}var k=function(e){function t(e){var n,a;(0,r.A)(this,t),a=R(this,t,[e]),(0,u.A)(a,"eventToType",(function(e){var t=e.type,n=e.payload;switch(t){case"L":return(null===n||void 0===n?void 0:n.event)||"unknown";case"C":return"comment";default:return"unknown"}}));var o=e.event;return a.state={commentContent:null===o||void 0===o||null===(n=o.payload)||void 0===n?void 0:n.content},a}return(0,c.A)(t,e),(0,a.A)(t,[{key:"render",value:function(){var e,t,n,r,a,o,i,c,u=this,s=this.props,m=s.isLoading,R=s.isEditing,b=s.error,k=s.event,x=s.updateComment,M=s.deleteComment,T=s.toggleEditMode,I=this.state.commentContent,w=(null===k||void 0===k?void 0:k.revision_id)>1&&(null===k||void 0===k?void 0:k.payload),O=null===k||void 0===k||null===(e=k.permissions)||void 0===e?void 0:e.can_delete_comment,L=null===k||void 0===k||null===(t=k.permissions)||void 0===t?void 0:t.can_update_comment,N=k.created_by,S="user"in N,P="email"in N,z=null===(n=k.expanded)||void 0===n?void 0:n.created_by,D=null;S?(i=d.createElement(C.Ay.Avatar,{src:z.links.avatar,as:p.Image,circular:!0}),D=(null===(c=z.profile)||void 0===c?void 0:c.full_name)||z.username):P&&(i=d.createElement(f.A,{size:"large",name:"user circle outline"}),D=N.email);return d.createElement(v.default,{id:"TimelineEvent.layout.".concat(this.eventToType(k)),event:k},d.createElement(C.Ay.Item,null,d.createElement(C.Ay.Content,null,i,d.createElement(C.Ay.Event,null,d.createElement(A.A.Content,null,(O||L)&&d.createElement(E.A,{icon:"ellipsis horizontal",className:"right-floated",direction:"left","aria-label":l.M.t("Actions")},d.createElement(E.A.Menu,null,L&&d.createElement(E.A.Item,{onClick:function(){return T()}},l.M.t("Edit")),O&&d.createElement(E.A.Item,{onClick:function(){return M()}},l.M.t("Delete")))),d.createElement(A.A.Summary,null,d.createElement("b",null,D),d.createElement(A.A.Date,null,l.M.t("commented {{commentTime}}",{commentTime:(0,p.toRelativeTime)(k.created,l.M.language)}))),d.createElement(A.A.Extra,{text:!R},b&&d.createElement(g.A,{error:b}),R?d.createElement(p.RichEditor,{value:null===k||void 0===k||null===(r=k.payload)||void 0===r?void 0:r.content,onChange:function(e,t){u.setState({commentContent:t.getContent()})},minHeight:150}):d.createElement(q.k,{content:null===k||void 0===k||null===(a=k.payload)||void 0===a?void 0:a.content,format:null===k||void 0===k||null===(o=k.payload)||void 0===o?void 0:o.format}),R&&d.createElement(h.A,{fluid:!0,className:"mt-15",textAlign:"right"},d.createElement(y.Zb,{onClick:function(){return T()}}),d.createElement(y.yY,{onClick:function(){return x(I,"html")},loading:m}))),w&&d.createElement(A.A.Meta,null,l.M.t("Edited")))))))}}])}(d.Component);k.propTypes={event:m().object.isRequired,deleteComment:m().func.isRequired,updateComment:m().func.isRequired,toggleEditMode:m().func.isRequired,isLoading:m().bool,isEditing:m().bool,error:m().string},k.defaultProps={isLoading:!1,isEditing:!1,error:void 0};const x=v.default.component("TimelineEvent",k)},58309:(e,t,n)=>{n.d(t,{gW:()=>C,Ih:()=>b,jU:()=>x,Il:()=>q,kc:()=>M.A,nk:()=>R,Ow:()=>k});var r=n(23029),a=n(92901),o=n(56822),i=n(53954),c=n(85501),u=n(59945),l=n(5556),s=n.n(l),m=n(96540),d=n(81057),p=n(53196),v=n(98462),f=n(2545),A=n(87058);function E(e,t,n){return t=(0,i.A)(t),(0,o.A)(e,h()?Reflect.construct(t,n||[],(0,i.A)(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var y=function(e){function t(){return(0,r.A)(this,t),E(this,t,arguments)}return(0,c.A)(t,e),(0,a.A)(t,[{key:"render",value:function(){var e,t,n,r,a=this.props,o=a.event,i=a.iconName,c=a.iconColor,l=a.eventContent,s="user"in o.created_by,E=null===(e=o.expanded)||void 0===e?void 0:e.created_by,h=null;s&&(n=m.createElement(d.Image,{src:E.links.avatar,avatar:!0,size:"tiny",className:"mr-5",ui:!1}),h=(null===(r=E.profile)||void 0===r?void 0:r.full_name)||E.username);return m.createElement(p.default,{id:"TimelineActionEvent.layout",event:o,iconName:i,iconColor:c},m.createElement(f.Ay.Item,null,m.createElement(f.Ay.Content,{isEvent:!0},m.createElement(f.Ay.Icon,{name:i,size:"large",color:c}),m.createElement(f.Ay.Event,{isActionEvent:!0},m.createElement(v.A.Content,null,m.createElement(v.A.Summary,{className:"flex"},n,m.createElement("b",null,h),m.createElement(v.A.Date,null,m.createElement(A.k,{content:l,format:null===o||void 0===o||null===(t=o.payload)||void 0===t?void 0:t.format})," ",(0,d.toRelativeTime)(o.created,u.M.language))))))))}}])}(m.Component);y.propTypes={event:s().object.isRequired,iconName:s().string.isRequired,eventContent:s().string.isRequired,iconColor:s().string},y.defaultProps={iconColor:"grey"};const g=p.default.component("TimelineActionEvent",y);var C=function(e){var t=e.event;return m.createElement(g,{iconName:"check circle",iconColor:"positive",event:t,eventContent:u.M.t("accepted this request")})},q=function(e){var t=e.event;return m.createElement(g,{iconName:"close",event:t,eventContent:u.M.t("declined this request"),iconColor:"negative"})},R=function(e){var t=e.event;return m.createElement(g,{iconName:"calendar times",event:t,eventContent:u.M.t("this request expired"),iconColor:"negative"})},b=function(e){var t=e.event;return m.createElement(g,{iconName:"close",event:t,eventContent:u.M.t("cancelled this request"),iconColor:"negative"})},k=function(e){var t=e.event;return m.createElement(g,{iconName:"close",iconColor:"negative",event:t,eventContent:u.M.t("unknown event")})},x=function(e){var t=e.event;return m.createElement(g,{iconName:"erase",iconColor:"grey",event:t,eventContent:u.M.t("deleted a comment")})},M=n(43977)}}]);
//# sourceMappingURL=8962.d5276241a887b5d4ba96.js.map