"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([["legacy-6672"],{77286:function(r,t,e){e.d(t,{H$:function(){return y}});var n="click",o="visible",i="submit";var l=e(9944);function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,o,i,l,a=[],u=!0,c=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;u=!1}else for(;!(u=(n=i.call(e)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(r){c=!0,o=r}finally{try{if(!u&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(r,t)||function(r,t){if(!r)return;if("string"==typeof r)return u(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function c(r,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=e.label,o=void 0===n?"":n,i=e.category,l=void 0===i?"":i,a=e.redirectUrl,u=void 0===a?"":a;return r.filter((function(r){return r.eventType===t})).map((function(r){var e=r.selectedCampaigns,n=r.eventName;return{campaignId:Array.isArray(e)&&e[0]?e[0]:null,eventType:t,eventName:n,label:o,category:l,redirectUrl:u}}))}var f=function(r,t){return{trackClickEvents:function(e){t(c(r,n,e))},trackVisibleEvents:function(e){t(c(r,o,e))},trackSubmitEvents:function(e){t(c(r,i,e))}}},s=function r(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(!(o>=5))return Array.isArray(e[0])?(o++,e.map((function(t,e){return r(e,t,n,o)})).filter(Boolean)):f(e,n)};function y(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.d;return Object.fromEntries(Object.entries(r).map((function(r){var e=a(r,2),n=e[0],o=e[1];return[n,s(n,o,t)]})))}},62908:function(r,t,e){var n=e(36151),o=e(33990);function i(r){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var l=["title","titleId","size"];function a(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function u(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){c(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function c(r,t,e){return(t=function(r){var t=function(r,t){if("object"!==i(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,t||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"===i(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function f(r,t){if(null==r)return{};var e,n,o=function(r,t){if(null==r)return{};var e,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||(o[e]=r[e]);return o}(r,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(r,e)&&(o[e]=r[e])}return o}var s=n.forwardRef((function(r,t){var e=r.title,n=void 0===e?"Chevron down":e,i=r.titleId,a=r.size,c=void 0===a?"1em":a,s=f(r,l);return(0,o.BX)("svg",u(u({width:c,height:c,viewBox:"0 0 24 24",fill:"none",ref:t,"aria-labelledby":i},s),{},{children:[void 0===n?(0,o.tZ)("title",{id:i,children:"Chevron down"}):n?(0,o.tZ)("title",{id:i,children:n}):null,(0,o.tZ)("path",{d:"M22 6.9v3.8l-10 7.7-10-7.7V6.9l10 7.7 10-7.7Z",fill:"currentColor"})]}))}));t.Z=s},__fusion__6:function(r,t,e){e.r(t),e.d(t,{SubNavigation:function(){return Mr},default:function(){return Qr}});var n=e(36151),o=e(9661),i=e(61978),l=e(29244),a={moreLink:{text:"More",ariaLabel:"More"}},u=e(2207),c=e(18997),f=e(9944),s=e(43915),y=e(33990);function b(r){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function p(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function d(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?p(Object(e),!0).forEach((function(t){m(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function m(r,t,e){return(t=function(r){var t=function(r,t){if("object"!==b(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,t||"default");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"===b(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function v(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,o,i,l,a=[],u=!0,c=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;u=!1}else for(;!(u=(n=i.call(e)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(r){c=!0,o=r}finally{try{if(!u&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(r,t)||function(r,t){if(!r)return;if("string"==typeof r)return h(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return h(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var g=function(r){var t=r.label,e=r.enhancer,n=r.click,o=void 0===n?f.d:n,i=r.hoverColor,l=void 0===i?"primary500":i,a=r.cursor,b=void 0===a?"pointer":a,p=(0,v((0,s.hQ)(),1)[0])({overflow:"hidden",whiteSpace:"nowrap",display:"block",textOverflow:"ellipsis"});return(0,y.tZ)(u.Z,d(d({size:c.NO.compact,shape:c.X3.pill,kind:c.TO.secondary},e&&{endEnhancer:e}),{},{onClick:o,overrides:{BaseButton:{style:function(r){var t=r.$theme;return d(d({},t.typography.HeadingSmall),{},m(m(m({backgroundColor:"transparent",color:t.colors.black,cursor:b,paddingLeft:0,paddingRight:0,width:"100%"},":hover",{backgroundColor:"transparent",color:t.colors[l]}),":active",{backgroundColor:"transparent"}),":focus",{backgroundColor:"transparent"}))}}},children:(0,y.tZ)("span",{className:p,children:t})}))},O=e(52180);function j(r){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var w=["href","ariaLabel","text","openInNewTab"];function S(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function P(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?S(Object(e),!0).forEach((function(t){k(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):S(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function k(r,t,e){return(t=function(r){var t=function(r,t){if("object"!==j(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,t||"default");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"===j(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function E(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,o,i,l,a=[],u=!0,c=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;u=!1}else for(;!(u=(n=i.call(e)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(r){c=!0,o=r}finally{try{if(!u&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(r,t)||function(r,t){if(!r)return;if("string"==typeof r)return x(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return x(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function A(r,t){if(null==r)return{};var e,n,o=function(r,t){if(null==r)return{};var e,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||(o[e]=r[e]);return o}(r,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(r,e)&&(o[e]=r[e])}return o}var I=function(r){var t=r.link,e=t.href,n=t.ariaLabel,o=t.text,i=t.openInNewTab,l=A(t,w),a=E((0,s.hQ)(),2)[1];return(0,y.tZ)(O.F,P(P({href:e,target:i?"_blank":"_self","aria-label":n},l),{},{$style:P(P({color:a.colors.mono700},a.typography.ParagraphSmall),{},k(k(k(k({textDecoration:"none",position:"relative",whiteSpace:"nowrap"},":hover",{color:"".concat(a.colors.black)}),":visited",{color:a.colors.mono700}),":visited:hover",{color:a.colors.black}),":after",{position:"absolute",content:"''",bottom:"-"+a.sizing.scale750,left:0,right:0,height:"3px",backgroundColor:"none",width:"100%"})),children:o}))},Z=e(77286);function C(r){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var L=["href","ariaLabel","text","openInNewTab"];function D(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function z(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?D(Object(e),!0).forEach((function(t){T(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):D(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function T(r,t,e){return(t=function(r){var t=function(r,t){if("object"!==C(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,t||"default");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"===C(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function B(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,o,i,l,a=[],u=!0,c=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;u=!1}else for(;!(u=(n=i.call(e)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(r){c=!0,o=r}finally{try{if(!u&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(r,t)||function(r,t){if(!r)return;if("string"==typeof r)return N(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return N(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function $(r,t){if(null==r)return{};var e,n,o=function(r,t){if(null==r)return{};var e,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||(o[e]=r[e]);return o}(r,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(r,e)&&(o[e]=r[e])}return o}var M=function(r){var t=r.cta,e=t.href,n=void 0===e?"":e,o=t.ariaLabel,i=t.text,l=t.openInNewTab,a=$(t,L),f=r.analyticsEvents,b=r.analyticsHandler,p=B((0,s.hQ)(),2)[1],d=(0,Z.H$)(f,b);return(0,y.tZ)(u.Z,z(z({$as:"a",size:c.NO.compact,shape:c.X3.pill,kind:c.TO.secondary,href:n,target:l?"_blank":"_self","aria-label":o,onClick:function(){var r;null==d||null===(r=d.cta)||void 0===r||r.trackClickEvents({label:i||"",category:"1",redirectUrl:n||""})}},a),{},{overrides:{BaseButton:{style:{fontSize:p.sizing.scale550,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",display:"block"}}},children:i}))},Q=e(43193),U=e(99889),R=e(58131),_=e(39277),X=e(69710),H=e(29829);function F(r){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var W=["isSelected","text","ariaLabel","endEnhancer"];function V(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function G(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?V(Object(e),!0).forEach((function(t){K(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):V(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function K(r,t,e){return(t=function(r){var t=function(r,t){if("object"!==F(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,t||"default");if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"===F(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function q(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,o,i,l,a=[],u=!0,c=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;u=!1}else for(;!(u=(n=i.call(e)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(r){c=!0,o=r}finally{try{if(!u&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(r,t)||function(r,t){if(!r)return;if("string"==typeof r)return J(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return J(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function Y(r,t){if(null==r)return{};var e,n,o=function(r,t){if(null==r)return{};var e,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||(o[e]=r[e]);return o}(r,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(r,e)&&(o[e]=r[e])}return o}var rr=(0,n.forwardRef)((function(r,t){var e=r.isSelected,n=r.text,o=r.ariaLabel,i=r.endEnhancer,l=Y(r,W),a=q((0,s.hQ)(),2)[1];return(0,y.tZ)(u.Z,G(G({size:c.NO.compact,shape:c.X3.pill,kind:c.TO.secondary,endEnhancer:i,"aria-label":o,isSelected:e},l),{},{ref:t,overrides:{BaseButton:{style:{whiteSpace:"nowrap"}},EndEnhancer:{style:{marginLeft:a.sizing.scale300}}},children:n}))}));function tr(r){return(tr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var er=["$item"];function nr(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,o,i,l,a=[],u=!0,c=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;u=!1}else for(;!(u=(n=i.call(e)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(r){c=!0,o=r}finally{try{if(!u&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(r,t)||function(r,t){if(!r)return;if("string"==typeof r)return or(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return or(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function or(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function ir(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function lr(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?ir(Object(e),!0).forEach((function(t){ar(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):ir(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function ar(r,t,e){return(t=function(r){var t=function(r,t){if("object"!==tr(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,t||"default");if("object"!==tr(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"===tr(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function ur(r,t){if(null==r)return{};var e,n,o=function(r,t){if(null==r)return{};var e,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||(o[e]=r[e]);return o}(r,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(r,e)&&(o[e]=r[e])}return o}var cr=(0,s.zo)("a",{color:"inherit",textDecoration:"none"}),fr=function(r){var t=r.$item,e=ur(r,er);return t.hidden?null:(0,y.tZ)(cr,lr(lr({href:t.href,target:t.openInNewTab?"_blank":"_self","aria-label":t.ariaLabel},e),{},{children:t.text}))},sr=function(r){var t=r.text,e=r.ariaLabel,o=r.links,i=nr((0,s.hQ)(),2)[1],l=nr((0,n.useState)(!1),2),a=l[0],u=l[1],c=(0,n.useCallback)((function(){return u(!1)}),[u]),f=(0,n.useCallback)((function(){return u(!a)}),[u,a]),b=(0,n.useMemo)((function(){return o.filter((function(r){return!r.hidden})).map((function(r){return r.link}))}),[o]);return(0,y.tZ)(U.Z,{content:(0,y.tZ)(H.Z,{items:b,overrides:{Option:{props:{overrides:{ListItemAnchor:fr}}}}}),accessibilityType:"menu",placement:R.r4.bottomLeft,overrides:{Body:{style:{left:i.sizing.scale500}}},isOpen:a,onClickOutside:c,focusLock:!0,returnFocus:!0,autoFocus:!0,renderAll:!0,onClick:f,onEsc:c,children:(0,y.tZ)(rr,{text:t,ariaLabel:e,isSelected:a,endEnhancer:a?(0,y.tZ)(X.Z,{size:18}):(0,y.tZ)(_.Z,{size:18})})})},yr=Q.memo(sr),br=e(66744),pr=e(34260),dr=e.n(pr);function mr(r){return function(r){if(Array.isArray(r))return gr(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||hr(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function vr(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,o,i,l,a=[],u=!0,c=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;u=!1}else for(;!(u=(n=i.call(e)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(r){c=!0,o=r}finally{try{if(!u&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(r,t)||hr(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function hr(r,t){if(r){if("string"==typeof r)return gr(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?gr(r,t):void 0}}function gr(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var Or="page-preview",jr=e(62908);function wr(r){return(wr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var Sr=["title","titleId","size"];function Pr(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function kr(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?Pr(Object(e),!0).forEach((function(t){Er(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):Pr(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function Er(r,t,e){return(t=function(r){var t=function(r,t){if("object"!==wr(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,t||"default");if("object"!==wr(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"===wr(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function xr(r,t){if(null==r)return{};var e,n,o=function(r,t){if(null==r)return{};var e,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||(o[e]=r[e]);return o}(r,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(r,e)&&(o[e]=r[e])}return o}var Ar=n.forwardRef((function(r,t){var e=r.title,n=void 0===e?"Chevron up":e,o=r.titleId,i=r.size,l=void 0===i?"1em":i,a=xr(r,Sr);return(0,y.BX)("svg",kr(kr({width:l,height:l,viewBox:"0 0 24 24",fill:"none",ref:t,"aria-labelledby":o},a),{},{children:[void 0===n?(0,y.tZ)("title",{id:o,children:"Chevron up"}):n?(0,y.tZ)("title",{id:o,children:n}):null,(0,y.tZ)("path",{d:"M22 13.3v3.8L12 9.4 2 17.1v-3.8l10-7.7 10 7.7Z",fill:"currentColor"})]}))}));function Ir(r){return(Ir="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function Zr(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function Cr(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?Zr(Object(e),!0).forEach((function(t){zr(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):Zr(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function Lr(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,o,i,l,a=[],u=!0,c=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;u=!1}else for(;!(u=(n=i.call(e)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(r){c=!0,o=r}finally{try{if(!u&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(r,t)||function(r,t){if(!r)return;if("string"==typeof r)return Dr(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Dr(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Dr(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function zr(r,t,e){return(t=function(r){var t=function(r,t){if("object"!==Ir(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,t||"default");if("object"!==Ir(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"===Ir(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var Tr=(0,s.w1)(o.Dx,(function(r){var t=r.$theme;return zr(zr({},"rtl"===t.direction?"paddingRight":"paddingLeft",t.sizing.scale800),"rtl"===t.direction?"paddingLeft":"paddingRight",0)})),Br=(0,s.w1)(o.b2,(function(r){var t=r.$theme;return zr(zr({flexBasis:"auto"},t.mediaQuery.small,{flexShrink:1,flexGrow:1,width:"50%"}),t.mediaQuery.large,{flexShrink:0,flexGrow:0,width:"auto"})})),Nr=(0,s.w1)(o.b2,(function(){return{flex:"1 1 auto",overflow:"hidden"}})),$r=(0,s.zo)("div",(function(r){var t=r.$theme;return zr(zr({visibility:r.$isVisible?"visible":"hidden",flex:"1 1 auto",justifyContent:"flex-end",overflow:"hidden"},t.mediaQuery.small,{display:"none"}),t.mediaQuery.large,{display:"flex"})})),Mr=(0,e(24347).jz)((function(r){var t,e,o=r.activeKey,u=void 0===o?"":o,c=r.label,b=r.setDrawerContent,p=void 0===b?f.d:b,d=r.closeDrawer,m=void 0===d?f.d:d,v=r.links,h=r.cta,O=r.translations,j=void 0===O?a:O,w=r.appContext,S=r.analyticsEvents,P=r.analyticsHandler,k=r.automatedEventTracker,E=Lr((0,s.hQ)(),2),x=E[0],A=E[1],Z=A.grid.maxWidth+"px",C="MOBILE_SUB_MENU"===u,L=x(zr({display:"none"},A.mediaQuery.large,{display:"flex"})),D=x(zr(zr({marginBottom:0},A.mediaQuery.small,{minWidth:0}),A.mediaQuery.large,{minWidth:"auto"})),z=x(zr({},A.mediaQuery.large,{display:"none"})),T=(0,br.a)(A.mediaQuery.large),B=(0,n.useRef)(null),N=function(r){var t=r.links,e=r.linksContainerRef,o=vr((0,s.hQ)(),2)[1],i=(0,br.a)(o.mediaQuery.large),l=vr((0,n.useState)(!1),2),a=l[0],u=l[1],c=vr((0,n.useState)([]),2),f=c[0],y=c[1],b=vr((0,n.useState)(t),2),p=b[0],d=b[1],m=vr((0,n.useState)([]),2),v=m[0],h=m[1],g=vr((0,n.useState)(!1),2),O=g[0],j=g[1];(0,n.useEffect)((function(){var r=function(){u(!0)};if(!document||"complete"!==document.readyState)return window&&window.addEventListener("load",r),function(){window&&window.removeEventListener("load",r)};r()}),[]),(0,n.useEffect)((function(){if(e.current&&a&&i&&!f.length){var r=e.current.childNodes;r&&r.length&&y(mr(r).map((function(r){return r.getBoundingClientRect().width})))}}),[i,a,f.length,e]);var w=(0,n.useCallback)((function(){if(e.current&&a&&i&&f.length){var r=[],n=f.length-1,o=f.slice(0,n),l=[],u=(e.current||{}).offsetWidth,c=void 0===u?0:u,s=0,y=!1;if(o.forEach((function(e,n){!y&&s+e<c?(l.push(t[n]),s+=e):(y=!0,r.push(t[n]))})),r.length){var b=o.slice(0,l.length).reduce((function(r,t){return r+t}),0),p=f[n]-(c-b);if(p>0)for(var m=l.length-1;m>0&&(r.unshift(l.pop()),!((p-=f[m])<=0));m--);}h(r),d(l),j(!0)}}),[t,a,f,i,e]);return(0,n.useEffect)((function(){return w()}),[a,w]),(0,n.useEffect)((function(){var r=dr()((function(){a&&w()}),150);return window&&window.addEventListener("resize",r),function(){window&&window.removeEventListener("resize",r)}}),[a,w]),{filteredLinks:p,moreLinks:v,isLinksFiltered:O}}({links:v,linksContainerRef:B}),$=N.filteredLinks,Q=N.moreLinks,U=N.isLinksFiltered,R=(null==h?void 0:h.text)&&!(null!=h&&h.hidden),_=(null==$?void 0:$.length)>0||(null==Q?void 0:Q.length)>0||R,X=(0,n.useMemo)((function(){if(_)return C?m:function(){p({activeKey:"MOBILE_SUB_MENU",size:"auto"})}}),[_,C,m,p]),H=_?C?(0,y.tZ)(Ar,{size:10}):(0,y.tZ)(jr.Z,{size:10}):null,F=w&&w===Or?"56px":0;return(0,y.tZ)(i.Z,{overrides:{Root:{style:function(r){var t=r.$theme;return zr({position:"sticky",zIndex:2e3,width:"100%",borderBottom:0,height:t.sizing.scale1600,boxSizing:"border-box",backgroundColor:t.colors.white,paddingRight:t.sizing.scale800,paddingLeft:t.sizing.scale800,top:F},t.mediaQuery.large,{paddingRight:t.sizing.scale1600,paddingLeft:t.sizing.scale1600})},props:{onClick:k}}},children:(0,y.BX)("div",{className:x({display:"flex",marginLeft:"auto",marginRight:"auto",width:"100%",maxWidth:Z}),children:[(0,y.tZ)(Br,{$align:l.H.left,children:(0,y.BX)(Tr,{$style:{minWidth:0,paddingLeft:0,marginBottom:0},children:[(0,y.tZ)("div",{className:L,children:(0,y.tZ)(g,{label:c,hoverColor:"primary",cursor:"default"})}),(0,y.tZ)("div",{className:z,children:(0,y.tZ)(g,{label:c,hoverColor:_?"primary500":"primary",cursor:_?"pointer":"default",click:X,enhancer:H})})]})}),_&&(0,y.BX)(Nr,{$align:l.H.right,children:[(0,y.BX)($r,{$isVisible:U&&T,ref:B,children:[$&&$.filter((function(r){var t=r.link;return t&&!t.hidden})).map((function(r,t){return(0,y.tZ)(Tr,{$style:{marginBottom:0},children:(0,y.tZ)(I,Cr({},r))},t)})),(Q&&!!Q.length||!U)&&(0,y.tZ)(Tr,{$style:{marginBottom:0},children:(0,y.tZ)(yr,{text:null==j||null===(t=j.moreLink)||void 0===t?void 0:t.text,ariaLabel:null==j||null===(e=j.moreLink)||void 0===e?void 0:e.ariaLabel,links:Q})})]}),R&&(0,y.tZ)(Tr,{className:D,children:(0,y.tZ)(M,{cta:h,analyticsEvents:S,analyticsHandler:P})})]})]})})})),Qr=Mr}}]);