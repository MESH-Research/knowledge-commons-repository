(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1031:function(n,e,o){"use strict";o.r(e);var i=o(48),t=o.n(i),a="#invenio-admin-top-nav",s=t()("#rdm-burger-menu-icon"),c=t()(a);s.on("click",(function(){c.toggleClass("active")})),t()("#user-profile-dropdown.ui.dropdown").dropdown({showOnFocus:!1,selectOnKeydown:!1,action:function(n,e,o){var i=o.attr("href");window.location.pathname=i},onShow:function(){t()("#user-profile-dropdown-btn").attr("aria-expanded",!0)},onHide:function(){t()("#user-profile-dropdown-btn").attr("aria-expanded",!1)}});var r=t()("#rdm-burger-menu-icon"),d=t()("#rdm-close-burger-menu-icon"),u=function(){r.css("display","block"),r.attr("aria-expanded",!1),t()(a).removeClass("active"),r.trigger("focus")};r.on({click:function(){r.attr("aria-expanded",!0),t()(a).addClass("active"),d.trigger("focus"),r.css("display","none")}}),d.on({click:u}),t()("#invenio-menu").on("keydown",(function(n){"Escape"===n.key&&u()}));var l=t()(".side-menu-toggle"),p=t()(".side-menu-toggle .left.icon"),w=t()(".side-menu-toggle .right.icon"),g=t()("#admin-side-menu"),f=t()("#admin-main-content"),m=f[0].classList.value;l.on("click",(function(){f.hasClass(m)?f.removeClass(m).addClass("sixteen wide column"):f[0].classList.value=m,p.each((function(){t()(this).toggleClass("hidden")})),w.each((function(){t()(this).toggleClass("hidden")})),g.toggleClass("hidden")}))},136:function(n,e){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(i){"object"===typeof window&&(o=window)}n.exports=o}},[[1031,0,3]]]);
//# sourceMappingURL=7.f4309cc4a9e65473ce9b.js.map