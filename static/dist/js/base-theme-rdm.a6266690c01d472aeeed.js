(self.webpackChunkinvenio_assets=self.webpackChunkinvenio_assets||[]).push([[172],{5676:(t,e,n)=>{"use strict";var r=n(73),o=n.n(r),a=n(5905),i=n(70742),c=n(40961),u=n(96540),d=o()("#rdm-burger-menu-icon"),s=o()("#invenio-nav");d.on("click",(function(){s.toggleClass("active")})),o()(".jump-to-top").on("click",(function(){document.documentElement.scrollTop=0}));var l=".rdm-tab-menu .item",p=o()(l);p.tab({onVisible:function(t){o()(l).attr("aria-selected",!1),o()("#".concat(t,"-tab")).attr("aria-selected",!0),o()(".rdm-tab-container .tab.segment").attr("hidden",!0),o()("#".concat(t,"-tab-panel")).attr("hidden",!1)}}),p.on("keydown",(function(t){if("Enter"===t.key){var e=t.target.attributes["data-tab"],n=e&&e.value;o()(t.target).tab("change tab",n)}})),o()("#user-profile-dropdown.ui.dropdown").dropdown({showOnFocus:!1,selectOnKeydown:!1,action:function(t,e,n){var r=n.attr("href");window.location.pathname=r},onShow:function(){o()("#user-profile-dropdown-btn").attr("aria-expanded",!0)},onHide:function(){o()("#user-profile-dropdown-btn").attr("aria-expanded",!1)}}),o()("#quick-create-dropdown.ui.dropdown").dropdown({showOnFocus:!1,selectOnKeydown:!1,action:function(t,e,n){var r=n.attr("href");window.location.pathname=r},onShow:function(){o()("#quick-create-dropdown-btn").attr("aria-expanded",!0)},onHide:function(){o()("#quick-create-dropdown-btn").attr("aria-expanded",!1)}});var f=o()("#rdm-burger-menu-icon"),b=o()("#rdm-close-burger-menu-icon"),m=function(){f.css("display","block"),f.attr("aria-expanded",!1),o()("#invenio-nav").removeClass("active"),f.trigger("focus")};f.on({click:function(){f.attr("aria-expanded",!0),o()("#invenio-nav").addClass("active"),b.trigger("focus"),f.css("display","none")}}),b.on({click:m}),o()("#invenio-menu").on("keydown",(function(t){"Escape"===t.key&&m()}));var y=document.getElementById("header-search-bar");if(y){var v=JSON.parse(y.dataset.options);c.render(u.createElement(a.eh,{options:v,placeholder:i.M.t("Search records...")}),y)}},73738:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},43145:(t,e,n)=>{"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{A:()=>r})},80296:(t,e,n)=>{"use strict";n.d(e,{A:()=>o});var r=n(27800);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,c=[],u=!0,d=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){d=!0,o=t}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(d)throw o}}return c}}(t,e)||(0,r.A)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},27800:(t,e,n)=>{"use strict";n.d(e,{A:()=>o});var r=n(43145);function o(t,e){if(t){if("string"===typeof t)return(0,r.A)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.A)(t,e):void 0}}}},t=>{t.O(0,[402,1057,7655,5373,6267,9777,7501,73,742,6528],(()=>{return e=5676,t(t.s=e);var e}));t.O()}]);
//# sourceMappingURL=base-theme-rdm.a6266690c01d472aeeed.js.map