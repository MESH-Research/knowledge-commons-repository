"use strict";(self.webpackChunkinvenio_assets=self.webpackChunkinvenio_assets||[]).push([[4282],{14054:(n,e,i)=>{var o=i(73),s=i.n(o),a="#invenio-admin-top-nav",t=s()("#rdm-burger-menu-icon"),c=s()(a);t.on("click",(function(){c.toggleClass("active")})),s()("#user-profile-dropdown.ui.dropdown").dropdown({showOnFocus:!1,selectOnKeydown:!1,action:function(n,e,i){var o=i.attr("href");window.location.pathname=o},onShow:function(){s()("#user-profile-dropdown-btn").attr("aria-expanded",!0)},onHide:function(){s()("#user-profile-dropdown-btn").attr("aria-expanded",!1)}});var d=s()("#rdm-burger-menu-icon"),r=s()("#rdm-close-burger-menu-icon"),l=function(){d.css("display","block"),d.attr("aria-expanded",!1),s()(a).removeClass("active"),d.trigger("focus")};d.on({click:function(){d.attr("aria-expanded",!0),s()(a).addClass("active"),r.trigger("focus"),d.css("display","none")}}),r.on({click:l}),s()("#invenio-menu").on("keydown",(function(n){"Escape"===n.key&&l()}));var u=s()(".side-menu-toggle"),g=s()(".side-menu-toggle .left.icon"),p=s()(".side-menu-toggle .right.icon"),f=s()("#admin-side-menu"),m=s()("#admin-main-content"),v=m[0].classList.value;u.on("click",(function(){m.hasClass(v)?m.removeClass(v).addClass("sixteen wide column"):m[0].classList.value=v,g.each((function(){s()(this).toggleClass("hidden")})),p.each((function(){s()(this).toggleClass("hidden")})),f.toggleClass("hidden")}))}},n=>{n.O(0,[73],(()=>{return e=14054,n(n.s=e);var e}));n.O()}]);
//# sourceMappingURL=base-admin-theme.39054220a1de4859d647.js.map