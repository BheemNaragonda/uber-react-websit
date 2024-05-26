"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([["legacy-3831"],{29061:function(t,e,r){r.d(e,{N:function(){return m}});var n=r(36151),o=r(43193),i=r(43915),l=r(84081),u=r(17059),a=r(33990);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,l,u=[],a=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{if(!a&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw o}}return u}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s=function(t){var e=t.fallback,r=t.small,f=t.medium,s=t.large,y=t.isPlaysInline,p=t.hasControls,d=t.isAutoPlay,b=t.isMuted,m=t.isPlaying,v=t.isLooping,g=c((0,i.hQ)(),2)[1].mediaQuery,h=(0,l.a)(g.small),O=(0,l.a)(g.medium),j=(0,l.a)(g.large),w=(0,n.useRef)(null);return o.useEffect((function(){var t=w.current,e=function(){null==t||t.play()};return null==t||t.load(),t&&(t.defaultMuted=!!b,t.muted=!!b,t.playsInline=Boolean(y),t.controls=!!p,t.loop=!!v,t.autoplay=!!d,m&&t.addEventListener("canplay",e)),function(){m&&(null==t||t.removeEventListener("canplay",e)),null==t||t.pause()}}),[h,O,j,p,d,v,b,m,y]),(0,u.oM)(t)?(0,a.BX)("video",{height:"100%",width:"100%",ref:w,children:[!h&&!O&&!j&&(0,a.BX)(a.HY,{children:[e&&e.webM&&(0,a.tZ)("source",{src:e.webM,type:"video/webm"}),e&&e.mp4&&(0,a.tZ)("source",{src:e.mp4,type:"video/mp4"})]}),h&&!O&&!j&&(0,a.BX)(a.HY,{children:[r&&r.webM&&(0,a.tZ)("source",{src:r.webM,type:"video/webm"}),r&&r.mp4&&(0,a.tZ)("source",{src:r.mp4,type:"video/mp4"})]}),O&&!j&&(0,a.BX)(a.HY,{children:[f&&f.webM&&(0,a.tZ)("source",{src:f.webM,type:"video/webm"}),f&&f.mp4&&(0,a.tZ)("source",{src:f.mp4,type:"video/mp4"})]}),j&&(0,a.BX)(a.HY,{children:[s&&s.webM&&(0,a.tZ)("source",{src:s.webM,type:"video/webm"}),s&&s.mp4&&(0,a.tZ)("source",{src:s.mp4,type:"video/mp4"})]}),(0,a.tZ)("track",{kind:"captions",src:""})]}):null};function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===y(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=function(t){var e=t.hasControls?{isLooping:!1,isMuted:!1,isPlaysInline:!1,isAutoPlay:!0}:{isLooping:!0,isMuted:!0,isPlaysInline:!0,isAutoPlay:!0};return(0,u.oM)(t)?(0,a.tZ)(s,d(d({},t),e)):null}},18921:function(t,e,r){r.d(e,{FC:function(){return c},TT:function(){return i},WR:function(){return u},d_:function(){return o},pI:function(){return a},sc:function(){return l},vZ:function(){return n}});var n={LEFT:"left",RIGHT:"right"},o={LEFT:"left",RIGHT:"right"},i={H1:1,H2:2,H3:3,H4:4,H5:5,H6:6},l={C1:1,C2:2,C3:3,C4:4},u={ON:!0,OFF:!1},a=(Object.freeze({DESKTOP:"desktop",PORTABLE:"portable",PALM:"palm"}),Object.freeze({RTL:"rtl",LTR:"ltr"}),Object.freeze({FLUSH:"flush",FLUSH_END:"flush--ends",FLUSH_TOP:"flush--top",FLUSH_BOTTOM:"flush--top",FLUSH_VERTICAL:"flush--vertical",INSET:"inset",HALF:"half",BLOCK:"block",QUARTER:"quarter",DEFAULT:"default"}),Object.freeze({R4X3:"aspect_4_3",R16X9:"aspect_16_9",R263X1:"aspect_263_1",R9X16:"aspect_9_16",R3X4:"aspect_3_4",R1X1:"aspect_1_1",AUTO:"auto"})),c=Object.freeze({DOWN:40,LEFT:37,RIGHT:39,SPACE:32,UP:38,TAB:9})},22229:function(t,e,r){r.d(e,{d:function(){return n}});var n=function(){}},44375:function(t,e,r){r.d(e,{H$:function(){return y}});var n="click",o="visible",i="submit";var l=r(22229);function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,l,u=[],a=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{if(!a&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw o}}return u}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.label,o=void 0===n?"":n,i=r.category,l=void 0===i?"":i,u=r.redirectUrl,a=void 0===u?"":u;return t.filter((function(t){return t.eventType===e})).map((function(t){var r=t.selectedCampaigns,n=t.eventName;return{campaignId:Array.isArray(r)&&r[0]?r[0]:null,eventType:e,eventName:n,label:o,category:l,redirectUrl:a}}))}var f=function(t,e){return{trackClickEvents:function(r){e(c(t,n,r))},trackVisibleEvents:function(r){e(c(t,o,r))},trackSubmitEvents:function(r){e(c(t,i,r))}}},s=function t(e,r,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(!(o>=5))return Array.isArray(r[0])?(o++,r.map((function(e,r){return t(r,e,n,o)})).filter(Boolean)):f(r,n)};function y(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.d;return Object.fromEntries(Object.entries(t).map((function(t){var r=u(t,2),n=r[0],o=r[1];return[n,s(n,o,e)]})))}},25353:function(t,e,r){var n=r(36151),o=r(33990);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l=["title","titleId","size"];function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===i(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.forwardRef((function(t,e){var r=t.title,n=void 0===r?"Youtube":r,i=t.titleId,u=t.size,c=void 0===u?"1em":u,s=f(t,l);return(0,o.BX)("svg",a(a({width:c,height:c,viewBox:"0 0 24 24",fill:"none",ref:e,"aria-labelledby":i},s),{},{children:[void 0===n?(0,o.tZ)("title",{id:i,children:"Youtube"}):n?(0,o.tZ)("title",{id:i,children:n}):null,(0,o.tZ)("path",{d:"M23 12s0-3.85-.46-5.58c-.25-.95-1-1.7-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46c-.95.25-1.69 1.01-1.94 1.96C1 8.15 1 12 1 12s.04 3.85.5 5.58c.25.95 1 1.7 1.95 1.96 1.71.46 8.59.46 8.59.46s6.88 0 8.6-.46c.95-.25 1.69-1.01 1.94-1.96.46-1.73.42-5.58.42-5.58Zm-13 3.27V8.73L15.5 12 10 15.27Z",fill:"currentColor"})]}))}));e.Z=s},6742:function(t,e,r){r.d(e,{W:function(){return n}});var n={CTA_ONE:"ctaOne",CTA_TWO:"ctaTwo"}},3831:function(t,e,r){r.d(e,{y:function(){return G}});var n=r(36151),o=r(44375),i=r(18921),l=r(75638),u=r(94116),a=r(6498),c=r(43915),f=r(25353),s=r(97602),y=r(86071),p=r(84081),d=r(22229),b=r(58844),m=r(42644),v=r(4461),g=r(36833),h=r(29061),O=r(84417),j=r(29570),w=r(5408),S=r(18165),P=r(12518);function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(r),!0).forEach((function(e){E(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function E(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==T(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===T(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var I=P.ZP.values.fontSize,C=P.ZP.buttonReset,A=((0,c.zo)("div",(function(t){var e=t.$theme,r=t.$isFlush,n=e.mediaQuery,o=e.sizing;return E({},n.large,{marginTop:r?o.scale1600:0})})),(0,c.zo)("div",(function(t){return{alignItems:"center",color:t.$playButtonColor,display:"flex",fontSize:"88px",left:"calc(50% - 44px)",position:"absolute",top:"calc(50% - 44px)",transform:"rtl"===t.$theme.direction?"scale(-1)":"none",zIndex:1,cursor:"pointer"}}))),x=(0,c.zo)("span",(function(t){var e=t.$rtl;return{alignItems:"center",display:"flex",fontSize:"58px",height:"58px",marginLeft:e?"10px":0,marginRight:e?0:"10px",transform:e?"scale(-1)":"none"}})),_=(0,c.zo)("button",(function(t){var e=t.$playButtonColor;return k(k({},C),{},{alignItems:"center",color:e,cursor:"pointer",display:"flex",fontSize:I.fixedBodyMediumDesk,margin:"12px 0 0 0"})})),D=r(6742),M=r(33990);function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function L(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?R(Object(r),!0).forEach((function(e){N(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function N(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==B(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===B(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function $(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,l,u=[],a=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{if(!a&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw o}}return u}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var H={aspect_1_1:1,aspect_4_5:.8,aspect_3_2:1.5,aspect_16_9:16/9},U=function(t){var e=t.$display,r=void 0===e?"grid":e,n=t.$gridColumn,o=void 0===n?["1/-1"]:n,i=t.$order,l=void 0===i?[0]:i,u=t.$hasVideo,a=t.children;return(0,M.tZ)(w.Z,{alignSelf:"center",display:r,order:l,gridColumn:o,overrides:{Block:{style:{cursor:u?"pointer":"default"}}},width:"100%",children:a})};function F(t){var e,r,o,i,l,P,T,Z,k,E,I,C,B,R,N=t.animations,z=t.textColor,F=t.aspectRatio,V=void 0===F?"aspect_4_5":F,X=t.textPosition,W=void 0===X?"left":X,Q=t.body,Y=t.ctaOne,K=t.ctaTwo,G=t.ctaColorTheme,q=t.eyebrow,J=t.flipMobile,tt=t.hasVideo,et=t.embedVideo,rt=t.heading,nt=t.headingLevel,ot=t.highlightVideo,it=t.playText,lt=void 0===it?"Play Video":it,ut=t.handleClick,at=t.image,ct=t.hideImageDesktop,ft=t.imageTablet,st=t.hideImageTablet,yt=t.imageMobile,pt=t.hideImageMobile,dt=t.playButtonColor,bt=t.subheading,mt=t.textAlign,vt=void 0===mt?"center":mt,gt=t.videoUrl,ht=t.anchorName,Ot=t.backgroundImageLarge,jt=t.backgroundImageMedium,wt=t.backgroundImageSmall,St=t.containerBackgroundTransparent,Pt=t.highlightImageStyle,Tt=t.justifyText,Zt=void 0===Tt?"left":Tt,kt=t.eventTrackers,Et=void 0===kt?{}:kt,It=t.isLoading,Ct=void 0!==It&&It,At=$((0,c.hQ)(),2),xt=At[0],_t=At[1],Dt=_t.mediaQuery,Mt="rtl"===_t.direction,Bt="dark"===dt?_t.colors.mono1000:_t.colors.mono100,Rt=(0,p.a)(Dt.large),Lt=H[V],Nt=function(t,e){var r={text:"text",link:"text",primary:"button",button:"button",secondary:"inverted",inverted:"inverted"}[t];return"text"===r?r:"button"===r?"light"===e?"inverted":r:"inverted"===r?r:""},$t={ctaPrimary:L(L({},null==Y?void 0:Y.ctaDetails),{},{ctaType:Nt((null==Y?void 0:Y.ctaType)||"",G||""),onClick:(null===(e=Et[D.W.CTA_ONE])||void 0===e||null===(e=e.trackClickEvents)||void 0===e?void 0:e.bind(null,{redirectUrl:(null==Y||null===(r=Y.ctaDetails)||void 0===r?void 0:r.href)||"",label:(null==Y||null===(o=Y.ctaDetails)||void 0===o?void 0:o.text)||"",category:"1"}))||d.d}),ctaSecondary:L(L({},null==K?void 0:K.ctaDetails),{},{ctaType:Nt((null==K?void 0:K.ctaType)||"",G||""),onClick:(null===(i=Et[D.W.CTA_TWO])||void 0===i||null===(i=i.trackClickEvents)||void 0===i?void 0:i.bind(null,{redirectUrl:(null==K||null===(l=K.ctaDetails)||void 0===l?void 0:l.href)||"",label:(null==K||null===(P=K.ctaDetails)||void 0===P?void 0:P.text)||"",category:"1"}))||d.d})},zt=Boolean((null==ot||null===(T=ot.fallback)||void 0===T?void 0:T.webM)||(null==ot||null===(Z=ot.fallback)||void 0===Z?void 0:Z.mp4)||(null==ot||null===(k=ot.small)||void 0===k?void 0:k.webM)||(null==ot||null===(E=ot.small)||void 0===E?void 0:E.mp4)||(null==ot||null===(I=ot.medium)||void 0===I?void 0:I.webM)||(null==ot||null===(C=ot.medium)||void 0===C?void 0:C.mp4)||(null==ot||null===(B=ot.large)||void 0===B?void 0:B.webM)||(null==ot||null===(R=ot.large)||void 0===R?void 0:R.mp4)),Ht=s.Z.imageIsValid(at),Ut=Ht||tt||zt,Ft=Ut&&!ct?"span 5":"span 8",Vt=Mt&&"center"!==Zt?"right":Zt,Xt="center"!==Zt||Ut&&!ct?Ut&&!ct?W:"left":Zt,Wt={left:1,right:Ut&&!ct?8:5,center:3},Qt=tt||zt?"grid":[pt?"none":"grid",pt?"none":"grid",st?"none":"grid",ct?"none":"grid"],Yt=function(t){return"true"===J?1===t?[2,2,2,1]:[1,1,1,2]:t},Kt={content:{left:{cols:["1/-1","1/-1","1/-1","".concat(Wt[Xt]," / ").concat(Ft)],order:Yt(1)},right:{cols:["1/-1","1/-1","1/-1","".concat(Wt[Xt]," / ").concat(Ft)],order:Yt(2)}},image:{left:{cols:["1/-1","1/-1","1/-1","7 / span 6"],order:Yt(2)},right:{cols:["1/-1","1/-1","1/-1","span 6"],order:Yt(1)}}},Gt=Ot,qt=jt,Jt=wt,te=St,ee=!1,re="auto",ne="auto";"fullWidth"===Pt&&Ht&&Rt&&(Gt=at,qt=ft,Jt=yt,te=!0,ee=!0,re="".concat(900,"px"),ne="".concat(480,"px"));var oe=gt?"https://img.youtube.com/vi/".concat(function(t){var e=t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return e&&11==e[7].length?e[7]:""}(gt),"/mqdefault.jpg"):"",ie=(0,M.tZ)("div",{className:xt({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"default"}),children:(0,M.BX)("div",{className:xt({overflow:"hidden",width:"100%"}),children:[(0,M.tZ)(A,{$playButtonColor:Bt,className:"overlay-open",onClick:ut,onKeyPress:ut,children:(0,M.tZ)(f.Z,{})}),(0,M.tZ)("img",{src:oe,alt:"youtube thumbnail",className:xt({width:"100%",height:"auto"})})]})});return(0,M.tZ)(g.l,{animations:N,target:"fullBlock",children:(0,M.tZ)(j.V,L(L({},t),{},{containerBackgroundTransparent:te,backgroundImageLarge:Gt,backgroundImageMedium:qt,backgroundImageSmall:Jt,maxHeight:re,minHeight:ne,children:(0,M.BX)(n.Fragment,{children:[(0,M.BX)(b.P,{$alignSelf:vt,$gridColumn:Kt.content[W].cols,$order:Kt.content[W].order,children:[(0,M.tZ)(m.Z,{animations:N,width:[100,85,100],eyebrow:q,heading:rt,headingSize:nt,headingAnchorName:ht,body:Q,bodySize:v.sn.MEDIUM,cta:$t,ctaSize:"medium",rtl:Mt,subheading:bt,color:z,textAlign:Vt,justifyContent:Vt,enableSkeleton:Ct}),tt&&"fullWidth"===Pt&&Rt&&(0,M.BX)(_,{className:"overlay-open",onClick:ut,$playButtonColor:Bt,onKeyPress:ut,tabIndex:0,type:"button",children:[(0,M.tZ)(x,{$rtl:Mt,children:(0,M.tZ)(f.Z,{})}),(0,M.tZ)("span",{className:"play-text-label",children:lt})]})]}),!ee&&(Ht||tt||zt)&&(0,M.tZ)(U,{$display:Qt,$gridColumn:Kt.image[W].cols,$order:Kt.image[W].order,$hasVideo:tt,children:(0,M.tZ)(g.l,{animations:N,target:"imageGroup",children:zt?(0,M.tZ)(h.N,L(L({},ot),{},{isPlaying:!0,hasControls:!(null!=ot&&ot.looping)})):tt&&et?(0,M.tZ)(O.Z,{videoUrl:gt,autoplay:"0"}):Ht?(0,M.BX)(u.Z,{aspectRatio:Lt,position:"relative",children:[tt&&!et&&(0,M.tZ)(A,{$playButtonColor:Bt,className:"overlay-open",onClick:ut,onKeyPress:ut,children:(0,M.tZ)(f.Z,{})}),Ht&&at&&(0,M.tZ)(w.Z,{overrides:{Block:{style:{cursor:"default"}}},children:(0,M.tZ)(a.Z,{children:(0,M.tZ)(S.Z,{children:(0,M.tZ)(y.Z,{image:at,alt:"",imageTablet:ft,imageMobile:yt})})})})]}):(0,M.tZ)(u.Z,{aspectRatio:Lt,position:"relative",height:"100%",children:ie})})})]})}))})}function V(t){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var X=["userData","isPersonalized"];function W(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?W(Object(r),!0).forEach((function(e){Y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Y(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==V(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==V(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===V(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function K(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function G(t){var e=t.userData,r=(t.isPersonalized,K(t,X)),i=(e||{}).loading,u=t.anchorName,a=t.videoUrl,c=t.translations,f=t.rtl,s=t.analyticsEvents,y=t.analyticsHandler,p=(0,o.H$)(s,y),d=(0,M.tZ)(F,Q(Q({},r),{},{hasVideo:!!a,anchorName:u,eventTrackers:p,isLoading:i})),b=a?function(t){return(0,M.tZ)(l.Z,{rtl:f,translations:c,videoUrl:a,children:t})}(d):d;return(0,M.tZ)(n.Fragment,{children:b})}G.defaultProps={textPosition:i.d_.LEFT,ctaOne:{ctaDetails:{},ctaType:"text"},ctaTwo:{ctaDetails:{},ctaType:"text"},flipMobile:"false",headingLevel:2,textAlign:"center",containerBackgroundTransparent:!0,analyticsEvents:{},analyticsHandler:function(){}}},18165:function(t,e,r){var n=r(36151),o=r(33990);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,l,u=[],a=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{if(!a&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw o}}return u}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,d(n.key),n)}}function c(t,e){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=p(t);if(e){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return y(t)}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===i(e)?e:String(e)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(r,t);var e=f(r);function r(t){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),function(t,e,r){(e=d(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}(y(o=e.call(this,t)),"state",{isVisible:!1}),o.lazyRef=(0,n.createRef)(),o}return function(t,e,r){e&&a(t.prototype,e),r&&a(t,r),Object.defineProperty(t,"prototype",{writable:!1})}(r,[{key:"componentDidMount",value:function(){var t=this;r.hasIntersectionObserver?(this.io=new IntersectionObserver((function(e,r){if(l(e,1)[0].isIntersecting)return t.setVisible(),r.disconnect()}),{root:null,rootMargin:"150px",threshold:0}),this.lazyRef&&this.io.observe(this.lazyRef.current)):this.setVisible()}},{key:"componentWillUnmount",value:function(){var t;r.hasIntersectionObserver&&(null===(t=this.io)||void 0===t||t.disconnect())}},{key:"setVisible",value:function(){this.setState({isVisible:!0});var t=this.props.onLoaded;t&&t()}},{key:"render",value:function(){return(0,o.tZ)("div",{style:{height:"100%",width:"100%"},ref:this.lazyRef,children:this.state.isVisible?this.props.children:null})}}],[{key:"hasIntersectionObserver",get:function(){return"undefined"!=typeof window&&"undefined"!=typeof window.IntersectionObserver}}]),r}(n.PureComponent);e.Z=b}}]);