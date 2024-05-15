"use strict";(self.webpackChunkinvenio_assets=self.webpackChunkinvenio_assets||[]).push([[4252],{12944:(e,t,r)=>{r.d(t,{V:()=>c});var n=r(23029),i=r(92901);function s(e,t,r){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,r)}function u(e,t){return e.get(o(e,t))}function o(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}var a=new WeakMap,c=function(){return(0,i.A)((function e(t){if((0,n.A)(this,e),s(this,a,void 0),null===t||void 0===t||!t.links)throw TypeError("Request resource links are undefined");var r,i,u;r=a,i=this,u=t.links,r.set(o(r,i),u)}),[{key:"selfUrl",get:function(){if(!u(a,this).self)throw TypeError("Self link missing from resource.");return u(a,this).self}},{key:"membersUrl",get:function(){if(!u(a,this).members)throw TypeError("Members link missing from resource.");return u(a,this).members}},{key:"publicMembersUrl",get:function(){if(!u(a,this).public_members)throw TypeError("Public members link missing from resource.");return u(a,this).public_members}},{key:"invitations",get:function(){if(!u(a,this).invitations)throw TypeError("Invitations link missing from resource.");return u(a,this).invitations}}])}()},4252:(e,t,r)=>{r.d(t,{AM:()=>h});r(38381);var n=r(10467),i=r(23029),s=r(92901),u=r(64467),o=r(54756),a=r.n(o),c=r(81057);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,u.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(){return(0,s.A)((function e(){(0,i.A)(this,e),(0,u.A)(this,"baseUrl","/api/communities")}),[{key:"create",value:function(){var e=(0,n.A)(a().mark((function e(t,r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=r||{},e.abrupt("return",c.http.post(this.baseUrl,t,f({},r)));case 2:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=(0,n.A)(a().mark((function e(t,r,n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=n||{},e.abrupt("return",c.http.put("".concat(this.baseUrl,"/").concat(t),r,f({},n)));case 2:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=(0,n.A)(a().mark((function e(t,r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=r||{},e.abrupt("return",c.http.delete("".concat(this.baseUrl,"/").concat(t),f({},r)));case 2:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"renameSlug",value:function(){var e=(0,n.A)(a().mark((function e(t,r,n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=n||{},e.abrupt("return",c.http.post("".concat(this.baseUrl,"/").concat(t,"/rename"),{slug:r},f({},n)));case 2:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"updateLogo",value:function(){var e=(0,n.A)(a().mark((function e(t,r,n){var i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=n||{},i={"Content-Type":"application/octet-stream"},e.abrupt("return",c.http.put("".concat(this.baseUrl,"/").concat(t,"/logo"),r,f({headers:i},n)));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"deleteLogo",value:function(){var e=(0,n.A)(a().mark((function e(t,r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=r||{},n={"Content-Type":"application/octet-stream"},e.abrupt("return",c.http.delete("".concat(this.baseUrl,"/").concat(t,"/logo"),f({headers:n},r)));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}])}();r(28626)},38381:(e,t,r)=>{r.d(t,{s:()=>d});var n=r(10467),i=r(92901),s=r(23029),u=r(64467),o=r(54756),a=r.n(o),c=r(12944),p=r(64483),f=r(81057);function h(e,t,r){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,r)}function l(e,t){return e.get(v(e,t))}function v(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}var m=new WeakMap,d=(0,i.A)((function e(t){var r,i,o,d=this,b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.V;(0,s.A)(this,e),h(this,m,void 0),(0,u.A)(this,"createInvite",function(){var e=(0,n.A)(a().mark((function e(t,r){var n,i,s=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>2&&void 0!==s[2]?s[2]:void 0,i={members:(0,p.Ws)(t),role:r},n&&(i.message=n),e.next=5,f.http.post(l(m,d).invitations,i);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),(0,u.A)(this,"addGroupToMembers",function(){var e=(0,n.A)(a().mark((function e(t,r){var n,i,s=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>2&&void 0!==s[2]?s[2]:void 0,i={members:(0,p.Ws)(t),role:r},n&&(i.message=n),e.next=5,f.http.post(l(m,d).membersUrl,i);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),(0,u.A)(this,"updateInvites",function(){var e=(0,n.A)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.http.put(l(m,d).invitations,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,u.A)(this,"updateRole",function(){var e=(0,n.A)(a().mark((function e(t,r){var n,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,p.Ws)([t]),i={members:n,role:r},e.next=4,d.updateInvites(i);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),r=m,i=this,o=new b(t),r.set(v(r,i),o),this.community=t}))},28626:(e,t,r)=>{r.d(t,{D:()=>b});var n=r(10467),i=r(23029),s=r(92901),u=r(64467),o=r(54756),a=r.n(o),c=r(12944),p=r(81057),f=r(64483);function h(e,t,r){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,r)}function l(e,t){return e.get(v(e,t))}function v(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}var m=new WeakMap,d=new WeakMap,b=function(){return(0,s.A)((function e(t){var r,s,o,b=this,w=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.V;(0,i.A)(this,e),h(this,m,void 0),(0,u.A)(this,"getMembers",(0,n.A)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.http.get(b.endpoint);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),(0,u.A)(this,"removeMemberBase",function(){var e=(0,n.A)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.http.delete(b.endpoint,{data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,u.A)(this,"removeMember",function(){var e=(0,n.A)(a().mark((function e(t){var r,n,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.type,n=t.id,i={members:[{type:r,id:n}]},e.abrupt("return",b.removeMemberBase(i));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,u.A)(this,"bulkRemoveMembers",function(){var e=(0,n.A)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,f.Ws)(t),e.abrupt("return",b.removeMemberBase({members:r}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h(this,d,function(){var e=(0,n.A)(a().mark((function e(t){var r,n,i,s,u=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(u.length>1&&void 0!==u[1]?u[1]:{}).refresh,n=void 0!==r&&r,i=new URL(b.endpoint),(s=i.searchParams).delete("refresh"),n&&s.set("refresh",n),i.search=s.toString(),e.next=8,p.http.put(i.toString(),t);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,u.A)(this,"updateRole",function(){var e=(0,n.A)(a().mark((function e(t,r){var n,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,f.Ws)([t]),i={members:n,role:r},e.next=4,l(d,b).call(b,i);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),(0,u.A)(this,"updateVisibility",function(){var e=(0,n.A)(a().mark((function e(t,r){var n,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,f.Ws)([t]),i={members:n,visible:r},e.next=4,l(d,b).call(b,i);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),(0,u.A)(this,"bulkUpdateRoles",(function(e,t){var r={members:(0,f.Ws)(e),role:t};return l(d,b).call(b,r,{refresh:!0})})),(0,u.A)(this,"bulkUpdateVisibilities",(function(e,t){var r={members:(0,f.Ws)(e),visible:t};return l(d,b).call(b,r,{refresh:!0})})),r=m,s=this,o=new w(t),r.set(v(r,s),o)}),[{key:"endpoint",get:function(){return l(m,this).membersUrl}}])}()},64483:(e,t,r)=>{r.d(t,{U9:()=>s,Ws:()=>u,to:()=>i});var n=r(80296),i=function(e){var t;return(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)||(null===e||void 0===e?void 0:e.message)},s=function(e){var t,r,n;return{message:null===e||void 0===e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message,errors:null===e||void 0===e||null===(r=e.response)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.errors,status:null===e||void 0===e||null===(n=e.response)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.status}},u=function(e){return Object.entries(e).map((function(e){var t=(0,n.A)(e,2),r=(t[0],t[1]);return{id:r.id,type:r.type}}))}}}]);
//# sourceMappingURL=4252.53a341d52da8b5d387fd.js.map