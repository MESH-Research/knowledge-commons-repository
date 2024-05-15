"use strict";(self.webpackChunkinvenio_assets=self.webpackChunkinvenio_assets||[]).push([[3208],{23914:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(23029),r=n(92901),l=n(56822),o=n(53954),i=n(85501),s=n(38102),c=n(92516),u=n.n(c),m=n(5556),d=n.n(m),p=n(96540),f=n(81057),h=n(53196),A=n(23848),v=n(1489),g=n(27041),E=n(3487);function C(e,t,n){return t=(0,o.A)(t),(0,l.A)(e,b()?Reflect.construct(t,n||[],(0,o.A)(e).constructor):t.apply(e,n))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}var y=function(e){function t(){return(0,a.A)(this,t),C(this,t,arguments)}return(0,i.A)(t,e),(0,r.A)(t,[{key:"render",value:function(){var e=this.props,t=e.community,n=e.defaultLogo,a=e.className,r=e.showUploadBtn;return p.createElement(h.default,{id:"InvenioCommunities.CarouselItem.layout",community:t,defaultLogo:n,className:a},p.createElement(A.A,{className:"carousel flex align-items-center ".concat(a),key:t.id},p.createElement(f.Image,{size:"small",src:t.links.logo,fallbackSrc:n}),p.createElement(A.A.Content,null,p.createElement(A.A.Header,{as:v.A,stackable:!0,className:"rel-pb-1"},p.createElement(v.A.Column,{computer:"10",tablet:"16",className:"pl-0 pb-0"},p.createElement(g.A,{as:"a",size:"medium",href:t.links.self_html},t.metadata.title)),p.createElement(v.A.Column,{computer:"6",tablet:"16",className:"buttons pl-0 pb-0"},p.createElement(E.A,{size:"mini",href:t.links.self_html,content:s.M.t("Browse")}),r&&p.createElement(E.A,{size:"mini",icon:"upload",labelPosition:"left",positive:!0,href:"/uploads/new?community=".concat(t.slug),content:s.M.t("New upload")}))),p.createElement(A.A.Description,{content:u()(t.metadata.description,{length:300})}))))}}])}(p.Component);y.propTypes={community:d().object.isRequired,defaultLogo:d().string.isRequired,className:d().string,showUploadBtn:d().bool},y.defaultProps={className:"",showUploadBtn:!0};const w=h.default.component("InvenioCommunities.CarouselItem",y)},24508:(e,t,n)=>{n.d(t,{A:()=>B});var a=n(10467),r=n(23029),l=n(92901),o=n(56822),i=n(53954),s=n(85501),c=n(64467),u=n(54756),m=n.n(u),d=n(38102),p=n(62193),f=n.n(p),h=n(5556),A=n.n(h),v=n(96540),g=n(81057),E=n(53196),C=n(27089),b=n(27041),y=n(1489),w=n(23848),I=n(24941),k=n(76217),x=n(80124),P=n(23914);function N(e,t,n){return t=(0,i.A)(t),(0,o.A)(e,S()?Reflect.construct(t,n||[],(0,i.A)(e).constructor):t.apply(e,n))}function S(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(S=function(){return!!e})()}var D=function(e){function t(e){var n;return(0,r.A)(this,t),n=N(this,t,[e]),(0,c.A)(n,"getDataIndex",(function(e){var t=n.props.itemsPerPage,a=n.state.data.hits,r=e*parseInt(t);return r>a.length-1?0:r<0?a.length-1:r})),(0,c.A)(n,"runCarousel",function(){var e=(0,a.A)(m().mark((function e(t){var a,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.activeIndex,r=t<a?"right":"left",e.next=4,n.setState({animationDirection:r});case 4:n.setState({activeIndex:n.getDataIndex(t)});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,c.A)(n,"setCarouselTimer",(function(){var e=n.state,t=e.data.hits,a=e.activeIndex,r=n.props.intervalDelay;n.setState({carouselTimer:setInterval((function(){t&&n.runCarousel(a+1)}),r)})})),(0,c.A)(n,"stopCarousel",(function(){var e=n.state.carouselTimer;clearInterval(e)})),(0,c.A)(n,"startCarousel",(function(){n.setCarouselTimer()})),(0,c.A)(n,"fetchData",(0,a.A)(m().mark((function e(){var t,a;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.fetchUrl,n.cancellableFetch=(0,g.withCancel)(g.http.get(t)),e.prev=2,e.next=5,n.cancellableFetch.promise;case 5:a=e.sent,n.setState({data:a.data.hits}),n.setCarouselTimer(),n.setState({isLoading:!1}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0),n.setState({isLoading:!1});case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))),(0,c.A)(n,"renderPlaceholder",(function(){var e=n.props.title;return v.createElement(C.A,{fluid:!0,className:"rel-pt-2 rel-pb-2 ml-0-mobile mr-0-mobile"},v.createElement(C.A,null,v.createElement(b.A,{as:"h2",className:"rel-mb-1"},e)),v.createElement(y.A,{container:!0},v.createElement(y.A.Column,{width:"2"}),v.createElement(y.A.Column,{width:"12"},v.createElement(w.A.Group,null,v.createElement(w.A,null,v.createElement(w.A.Image,null,v.createElement(I.A,null,v.createElement(I.A.Image,{square:!0}))),v.createElement(w.A.Content,null,v.createElement(w.A.Header,{className:"mt-5 rel-mb-2"},v.createElement(I.A,null,v.createElement(I.A.Header,null,v.createElement(I.A.Line,null)))),v.createElement(w.A.Description,null,v.createElement(I.A,null,v.createElement(I.A.Paragraph,null,v.createElement(I.A.Line,null),v.createElement(I.A.Line,null),v.createElement(I.A.Line,null)))))))),v.createElement(y.A.Column,{width:"2"})))})),(0,c.A)(n,"carouselSlides",(function(){var e,t=n.state,a=t.data,r=t.activeIndex,l=n.props,o=l.defaultLogo,i=l.itemsPerPage,s=l.showUploadBtn,c=parseInt(r)+parseInt(i);return null===(e=a.hits)||void 0===e?void 0:e.slice(r,c).map((function(e){return v.createElement(P.A,{community:e,defaultLogo:o,key:e.id,showUploadBtn:s})}))})),n.state={data:{hits:[]},activeIndex:0,animationDirection:"left",carouselTimer:null,isLoading:!0},n}return(0,s.A)(t,e),(0,l.A)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"componentWillUnmount",value:function(){this.cancellableFetch&&this.cancellableFetch.cancel(),this.stopCarousel()}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,a=t.animationDirection,r=t.activeIndex,l=t.isLoading,o=this.props,i=o.title,s=o.animationSpeed,c=o.itemsPerPage;return v.createElement(E.default,{id:"InvenioCommunities.CommunitiesCarousel.layout",data:n,animationDirection:a,activeIndex:r,title:i,animationSpeed:s,carouselSlides:this.carouselSlides(),stopCarousel:this.stopCarousel,startCarousel:this.startCarousel,runCarousel:this.runCarousel,itemsPerPage:c},v.createElement(v.Fragment,null,l&&this.renderPlaceholder(),!l&&!f()(n.hits)&&v.createElement(C.A,{fluid:!0,className:"carousel rel-pt-2 rel-pb-2 ml-0-mobile mr-0-mobile"},v.createElement(C.A,{className:"rel-mb-1"},v.createElement(b.A,{as:"h2"},i)),v.createElement(y.A,{container:!0,onFocus:this.stopCarousel,onBlur:this.startCarousel},v.createElement(y.A.Column,{width:"2",className:"pr-0",verticalAlign:"middle",textAlign:"left"},v.createElement(k.A,{className:"carousel-arrow",inverted:!0,role:"button",name:"angle left",size:"huge","aria-label":d.M.t("Previous slide"),onClick:function(){return e.runCarousel(r-1)},onKeyDown:function(t){return"Enter"===t.key&&e.runCarousel(r-1)},tabIndex:"0"})),v.createElement(y.A.Column,{width:"12"},v.createElement(x.A.Group,{as:w.A.Group,className:"flex align-items-center justify-center",duration:s,animation:"carousel-slide ".concat(a),directional:!0},this.carouselSlides())),v.createElement(y.A.Column,{width:"2",className:"pl-0",verticalAlign:"middle",textAlign:"right"},v.createElement(k.A,{className:"carousel-arrow",inverted:!0,role:"button",name:"angle right",size:"huge","aria-label":d.M.t("Next slide"),onClick:function(){return e.runCarousel(r+1)},onKeyDown:function(t){return"Enter"===t.key&&e.runCarousel(r+1)},tabIndex:"0"}))))))}}])}(v.Component);D.propTypes={title:A().string.isRequired,fetchUrl:A().string.isRequired,intervalDelay:A().number.isRequired,animationSpeed:A().number.isRequired,defaultLogo:A().string.isRequired,itemsPerPage:A().string.isRequired,showUploadBtn:A().bool},D.defaultProps={showUploadBtn:!0};const B=E.default.component("InvenioCommunities.CommunitiesCarousel",D)},32411:(e,t,n)=>{var a=n(96540),r=n(40961),l=n(53196),o=n(24508),i=document.getElementById("communities-carousel"),s=i.dataset.title,c=i.dataset.fetchUrl,u=parseInt(i.dataset.intervalDelay),m=parseInt(i.dataset.animationSpeed),d=i.dataset.defaultLogo,p=i.dataset.itemsPerPage,f=JSON.parse(i.dataset.showUploadBtn),h=l.overrideStore.getAll();r.render(a.createElement(l.OverridableContext.Provider,{value:h},a.createElement(o.A,{title:s,fetchUrl:c,intervalDelay:u,animationSpeed:m,defaultLogo:d,itemsPerPage:p,showUploadBtn:f})),i)}},e=>{e.O(0,[402,1057,7655,4481,8102],(()=>{return t=32411,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=invenio-communities-carousel.2cac6a6e0b62c0b3ae1d.js.map