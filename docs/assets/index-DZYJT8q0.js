import{r as pp,a as gp,b as $,L as Tt,u as Si,c as gh,N as _p,d as _h,B as yp,R as wp,e as Bn}from"./react-vendor-DnR8fNeS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var xo={exports:{}},Ms={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l;function bp(){if(_l)return Ms;_l=1;var n=pp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(c,h,d){var m,g={},y=null,A=null;d!==void 0&&(y=""+d),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(A=h.ref);for(m in h)s.call(h,m)&&!i.hasOwnProperty(m)&&(g[m]=h[m]);if(c&&c.defaultProps)for(m in h=c.defaultProps,h)g[m]===void 0&&(g[m]=h[m]);return{$$typeof:e,type:c,key:y,ref:A,props:g,_owner:r.current}}return Ms.Fragment=t,Ms.jsx=a,Ms.jsxs=a,Ms}var yl;function vp(){return yl||(yl=1,xo.exports=bp()),xo.exports}var u=vp(),Lr={},wl;function Ep(){if(wl)return Lr;wl=1;var n=gp();return Lr.createRoot=n.createRoot,Lr.hydrateRoot=n.hydrateRoot,Lr}var Tp=Ep();/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xp=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),bl=n=>{const e=xp(n);return e.charAt(0).toUpperCase()+e.slice(1)},yh=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),Ap=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=$.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:r="",children:i,iconNode:a,...c},h)=>$.createElement("svg",{ref:h,...Rp,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:yh("lucide",r),...!i&&!Ap(c)&&{"aria-hidden":"true"},...c},[...a.map(([d,m])=>$.createElement(d,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=(n,e)=>{const t=$.forwardRef(({className:s,...r},i)=>$.createElement(Sp,{ref:i,iconNode:e,className:yh(`lucide-${Ip(bl(n))}`,`lucide-${n}`,s),...r}));return t.displayName=bl(n),t};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ba=X("arrow-left",Np);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],vl=X("arrow-right",Cp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],Pp=X("atom",kp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Vp=X("award",Dp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],jp=X("book-marked",Op);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ri=X("book-open",Mp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Up=X("calculator",Lp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Bp=X("check",Fp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],$p=X("circle-alert",qp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Wr=X("circle-check-big",Hp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Gp=X("circle-question-mark",zp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],wh=X("clock",Wp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Qp=X("external-link",Kp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ii=X("file-text",Yp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Jp=X("flask-conical",Xp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],eg=X("globe",Zp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],oi=X("graduation-cap",tg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],sg=X("history",ng);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],ig=X("languages",rg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],bh=X("lock",og);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],cg=X("log-out",ag);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],vh=X("mail",lg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],hg=X("menu",ug);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],fg=X("music",dg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],pg=X("palette",mg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],_g=X("phone",gg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],wg=X("play",yg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],vg=X("plus",bg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],El=X("save",Eg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Ig=X("star",Tg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Ag=X("target",xg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Sg=X("trending-up",Rg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Cg=X("user-check",Ng);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Pg=X("users",kg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Js=X("video",Dg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Eh=X("x",Vg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],jg=X("zoom-in",Og);function Mg(){const[n,e]=$.useState(!1),[t,s]=$.useState(null),r=a=>{s(t===a?null:a)},i=()=>{const a="https://calendly.com/admin-myschola/30min";if(window.Calendly)window.Calendly.initPopupWidget({url:a});else{const c=document.createElement("script");c.src="https://assets.calendly.com/assets/external/widget.js",c.async=!0,c.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:a})},document.body.appendChild(c),setTimeout(()=>{window.Calendly||window.open(a,"_blank","noopener,noreferrer")},1e3)}};return u.jsxs("div",{className:"min-h-screen bg-white",children:[u.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),u.jsxs("nav",{className:"fixed w-full top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"flex justify-between items-center h-16",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx(oi,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),u.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),u.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[u.jsx("a",{href:"#home",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),u.jsx("a",{href:"#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),u.jsx("a",{href:"#subjects",className:"text-gray-700 hover:text-blue-600 transition",children:"Subjects"}),u.jsx("a",{href:"#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),u.jsx("a",{href:"#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"}),u.jsx(Tt,{to:"/login",className:"text-gray-700 hover:text-blue-600 transition font-medium",children:"Log In"}),u.jsx("button",{onClick:i,className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a free consultation",children:"Book Free Consultation"})]}),u.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>e(!n),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,"aria-controls":"mobile-menu",children:n?u.jsx(Eh,{className:"h-6 w-6","aria-hidden":"true"}):u.jsx(hg,{className:"h-6 w-6","aria-hidden":"true"})})]})}),n&&u.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:u.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[u.jsx("a",{href:"#home",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),u.jsx("a",{href:"#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),u.jsx("a",{href:"#subjects",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Subjects"}),u.jsx("a",{href:"#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),u.jsx("a",{href:"#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),u.jsx(Tt,{to:"/login",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50 font-medium",role:"menuitem",children:"Log In"}),u.jsx("button",{onClick:()=>{i(),e(!1)},className:"block w-full px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a free consultation",role:"menuitem",children:"Book Free Consultation"})]})})]}),u.jsxs("main",{id:"main-content",children:[u.jsx("section",{id:"home",className:"pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Hero section",children:u.jsx("div",{className:"max-w-7xl mx-auto",children:u.jsxs("div",{className:"text-center",children:[u.jsxs("h1",{className:"text-5xl md:text-6xl font-bold text-gray-900 mb-6",children:["MySchola: #1 GCSE Tutoring Platform for",u.jsx("span",{className:"text-blue-600",children:" Years 7-11"})]}),u.jsxs("p",{className:"text-xl text-gray-600 mb-4 max-w-3xl mx-auto",children:[u.jsx("strong",{children:"GCSE Maths, English & Science"})," via Zoom"]}),u.jsx("p",{className:"text-lg text-gray-600 mb-8 max-w-2xl mx-auto",children:"One-to-one personalised lessons with expert tutors. Your child only sees the teacher - no distractions, maximum focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons."}),u.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:u.jsxs("button",{onClick:i,className:"bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a free consultation",children:["Book Free Consultation",u.jsx(vl,{className:"ml-2 h-5 w-5","aria-hidden":"true"})]})})]})})}),u.jsx("section",{id:"how-it-works",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"how-it-works-heading",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsx("h2",{id:"how-it-works-heading",className:"text-4xl font-bold text-center mb-12",children:"How Our Lessons Work"}),u.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[u.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[u.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:u.jsx(Cg,{className:"h-8 w-8 text-white"})}),u.jsx("h3",{className:"text-xl font-semibold mb-2",children:"1-to-1 Sessions"}),u.jsx("p",{className:"text-gray-600",children:"Personalised one-on-one attention. No group distractions - your child gets the tutor's full focus."})]}),u.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[u.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:u.jsx(jg,{className:"h-8 w-8 text-white"})}),u.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Via Zoom"}),u.jsx("p",{className:"text-gray-600",children:"Convenient online lessons from the comfort of your home. High-quality video and interactive whiteboard. Webcam and microphone are optional - we use Zoom chat to check engagement, and parents can monitor participation for privacy."})]}),u.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[u.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:u.jsx(bh,{className:"h-8 w-8 text-white"})}),u.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Student Privacy"}),u.jsx("p",{className:"text-gray-600",children:"Your child only sees the teacher. Private, secure sessions designed for maximum learning focus. Webcam and mic are optional - we use Zoom chat for communication, and parents can check engagement for privacy reasons."})]})]})]})}),u.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"benefits-heading",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsx("h2",{id:"benefits-heading",className:"text-4xl font-bold text-center mb-4",children:"Benefits for Parents & Students"}),u.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Why thousands of families choose MySchola for GCSE success"}),u.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsxs("div",{className:"flex items-center mb-3",children:[u.jsx(Sg,{className:"h-6 w-6 text-green-500 mr-2","aria-hidden":"true"}),u.jsx("h3",{className:"text-xl font-semibold",children:"Grade Improvement"})]}),u.jsx("p",{className:"text-gray-600",children:"Students consistently improve by 2-3 grades with our proven teaching methods and personalised approach."})]}),u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsxs("div",{className:"flex items-center mb-3",children:[u.jsx(Vp,{className:"h-6 w-6 text-blue-500 mr-2","aria-hidden":"true"}),u.jsx("h3",{className:"text-xl font-semibold",children:"Confidence Building"})]}),u.jsx("p",{className:"text-gray-600",children:"Watch your child's confidence soar as they master difficult concepts and see their progress week by week."})]}),u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsxs("div",{className:"flex items-center mb-3",children:[u.jsx(Ag,{className:"h-6 w-6 text-red-500 mr-2","aria-hidden":"true"}),u.jsx("h3",{className:"text-xl font-semibold",children:"Exam Focus"})]}),u.jsx("p",{className:"text-gray-600",children:"Targeted exam preparation with past papers, exam techniques, and strategies tailored to GCSE requirements."})]}),u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsxs("div",{className:"flex items-center mb-3",children:[u.jsx(wh,{className:"h-6 w-6 text-purple-500 mr-2","aria-hidden":"true"}),u.jsx("h3",{className:"text-xl font-semibold",children:"Flexible Scheduling"})]}),u.jsx("p",{className:"text-gray-600",children:"Choose times that work around your family's schedule. Evening and weekend slots available."})]}),u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsxs("div",{className:"flex items-center mb-3",children:[u.jsx(Pg,{className:"h-6 w-6 text-orange-500 mr-2","aria-hidden":"true"}),u.jsx("h3",{className:"text-xl font-semibold",children:"Expert Tutors"})]}),u.jsx("p",{className:"text-gray-600",children:"Qualified UK teachers with DBS checks and proven track records of GCSE success."})]}),u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsxs("div",{className:"flex items-center mb-3",children:[u.jsx(ri,{className:"h-6 w-6 text-indigo-500 mr-2","aria-hidden":"true"}),u.jsx("h3",{className:"text-xl font-semibold",children:"Personalised Curriculum"})]}),u.jsx("p",{className:"text-gray-600",children:"Lessons tailored to your child's learning style, pace, and specific areas that need improvement."})]})]})]})}),u.jsx("section",{id:"subjects",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"subjects-heading",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsx("h2",{id:"subjects-heading",className:"text-4xl font-bold text-center mb-4",children:"Subjects We Offer"}),u.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Comprehensive GCSE support for Years 7-11"}),u.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{name:"Maths",description:"GCSE Maths (Foundation & Higher)"},{name:"Combined Science",description:"Trilogy and Synergy pathways"},{name:"Triple Science",description:"Biology, Chemistry, and Physics"},{name:"English Language",description:"Reading, writing, and language skills"},{name:"English Literature",description:"Poetry, prose, and drama analysis"}].map(a=>u.jsx("div",{className:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600",children:u.jsxs("div",{className:"flex items-start mb-2",children:[u.jsx(Bp,{className:"h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0","aria-hidden":"true"}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold mb-1",children:a.name}),u.jsx("p",{className:"text-gray-600 text-sm",children:a.description})]})]})},a.name))})]})}),u.jsx("section",{id:"testimonials",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"testimonials-heading",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold text-center mb-4",children:"What Parents & Students Say"}),u.jsx("p",{className:"text-center text-gray-600 mb-12",children:"Real results from real families"}),u.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-12",children:[u.jsxs("div",{className:"bg-blue-600 text-white p-6 rounded-lg text-center",children:[u.jsx("div",{className:"text-4xl font-bold mb-2",children:"95%"}),u.jsx("div",{className:"text-blue-100",children:"Students improve grades"})]}),u.jsxs("div",{className:"bg-green-600 text-white p-6 rounded-lg text-center",children:[u.jsx("div",{className:"text-4xl font-bold mb-2",children:"2-3"}),u.jsx("div",{className:"text-green-100",children:"Grade improvement average"})]}),u.jsxs("div",{className:"bg-purple-600 text-white p-6 rounded-lg text-center",children:[u.jsx("div",{className:"text-4xl font-bold mb-2",children:"500+"}),u.jsx("div",{className:"text-purple-100",children:"Successful students"})]})]}),u.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{name:"Sarah M., Parent",text:"My daughter went from a Grade 5 to Grade 8 in Maths in just one term! The 1-to-1 Zoom sessions were perfect - she felt comfortable asking questions without other students around.",rating:5,result:"Maths: Grade 5 → Grade 8"},{name:"James T., Student",text:"I was really struggling with English Literature, but my tutor made it click. The exam techniques I learned helped me get a Grade 7. The Zoom sessions were so convenient!",rating:5,result:"English Lit: Grade 4 → Grade 7"},{name:"Emma L., Parent",text:"The confidence my son gained was incredible. He went from dreading Science to loving it. His Chemistry grade improved from 5 to 8. Worth every penny!",rating:5,result:"Chemistry: Grade 5 → Grade 8"},{name:"Michael R., Student",text:"My tutor was amazing! She explained everything so clearly and helped me with past papers. I finally understood how to approach exam questions properly.",rating:5,result:"Physics: Grade 6 → Grade 9"},{name:"Lisa K., Parent",text:"As a working parent, the flexible scheduling was a lifesaver. My daughter could do evening sessions that fit around school and activities. Highly recommend!",rating:5,result:"Maths: Grade 6 → Grade 8"},{name:"David P., Parent",text:"The privacy of the sessions meant my son felt comfortable making mistakes and asking for help. His confidence has grown so much, and his grades show it!",rating:5,result:"English: Grade 5 → Grade 7"}].map((a,c)=>u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsx("div",{className:"flex mb-4",children:[...Array(a.rating)].map((h,d)=>u.jsx(Ig,{className:"h-5 w-5 text-yellow-400 fill-current","aria-hidden":"true"},d))}),u.jsxs("p",{className:"text-gray-600 mb-4 italic",children:['"',a.text,'"']}),u.jsxs("div",{className:"border-t pt-4",children:[u.jsxs("p",{className:"font-semibold text-gray-900",children:["— ",a.name]}),u.jsx("p",{className:"text-sm text-blue-600 font-medium mt-1",children:a.result})]})]},c))})]})}),u.jsx("section",{id:"book-call",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600","aria-labelledby":"book-call-heading",children:u.jsxs("div",{className:"max-w-4xl mx-auto text-center text-white",children:[u.jsx("h2",{id:"book-call-heading",className:"text-4xl font-bold mb-6",children:"Ready to Start Your Child's GCSE Success Journey?"}),u.jsx("p",{className:"text-xl text-blue-100 mb-8",children:"Book a free consultation to discuss your child's needs and see how we can help them achieve their goals."}),u.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:u.jsxs("button",{onClick:i,className:"bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a free consultation",children:["Book Free Consultation",u.jsx(vl,{className:"ml-2 h-5 w-5","aria-hidden":"true"})]})}),u.jsx("p",{className:"text-blue-100 text-sm mt-6",children:"No credit card required • Free 30-minute consultation"})]})}),u.jsx("section",{id:"faq",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"faq-heading",children:u.jsxs("div",{className:"max-w-4xl mx-auto",children:[u.jsx("h2",{id:"faq-heading",className:"text-4xl font-bold text-center mb-12",children:"Frequently Asked Questions"}),u.jsx("div",{className:"space-y-4",children:[{q:"How do the Zoom lessons work?",a:"Each lesson is conducted one-to-one via Zoom. Your child will see only the teacher, ensuring privacy and focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We use interactive whiteboards and screen sharing to make lessons engaging and effective. All sessions are recorded for your child to review later."},{q:"What equipment do we need?",a:"You just need a computer, tablet, or laptop with a stable internet connection. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We recommend using a desktop or laptop for the best experience with the interactive whiteboard."},{q:"How long are the sessions?",a:"Standard sessions are 60 minutes, but we also offer 45-minute and 90-minute options depending on your child's needs and attention span. You can discuss the best duration during your free consultation."},{q:"Can I choose the tutor?",a:"Yes! During your consultation, we'll discuss your child's learning style and match them with the best tutor. You can also request specific tutors based on availability."},{q:"What if my child misses a session?",a:"We offer flexible rescheduling with 24 hours notice. Missed sessions can be rescheduled to another time that works for you. We understand that life happens!"},{q:"Do you provide homework and practice materials?",a:"Absolutely! Each tutor provides tailored homework assignments, practice papers, and additional resources to reinforce learning between sessions. All materials are included in the lesson price."},{q:"How quickly will we see results?",a:"Most students see improvement within 4-6 weeks of regular sessions. However, every child is different. We track progress regularly and adjust our approach to ensure maximum effectiveness."},{q:"What age groups do you teach?",a:"We specialize in Years 7-11, preparing students for GCSEs. This includes both Foundation and Higher tier courses across all major GCSE subjects."}].map((a,c)=>u.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[u.jsxs("button",{className:"w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",onClick:()=>r(c),"aria-expanded":t===c,"aria-controls":`faq-answer-${c}`,id:`faq-question-${c}`,children:[u.jsxs("span",{className:"font-semibold text-gray-900 flex items-center",children:[u.jsx(Gp,{className:"h-5 w-5 text-blue-600 mr-2","aria-hidden":"true"}),a.q]}),u.jsx("span",{className:"text-blue-600","aria-hidden":"true","aria-label":t===c?"Collapse answer":"Expand answer",children:t===c?"−":"+"})]}),t===c&&u.jsx("div",{id:`faq-answer-${c}`,className:"px-6 pb-4 text-gray-600",role:"region","aria-labelledby":`faq-question-${c}`,children:a.a})]},c))})]})}),u.jsx("section",{id:"contact",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"contact-heading",children:u.jsxs("div",{className:"max-w-4xl mx-auto",children:[u.jsx("h2",{id:"contact-heading",className:"text-4xl font-bold text-center mb-12",children:"Get in Touch"}),u.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsx(vh,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),u.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Email Us"}),u.jsx("a",{href:"mailto:support@myschola.uk",className:"text-gray-600 hover:text-blue-600 transition",children:"support@myschola.uk"})]}),u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsx(_g,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),u.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Call Us"}),u.jsx("p",{className:"text-gray-600",children:"020 1234 5678"}),u.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Mon-Fri 9am-6pm"})]})]})]})}),u.jsx("section",{id:"privacy-policy",className:"py-20 px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"max-w-4xl mx-auto",children:[u.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Privacy Policy"}),u.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Information We Collect"}),u.jsx("p",{children:"We collect information that you provide directly to us, including your name, email address, phone number, and information about your child's educational needs. We also collect information automatically when you use our services, such as session recordings and progress data."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. How We Use Your Information"}),u.jsx("p",{children:"We use the information we collect to provide, maintain, and improve our tutoring services, process your bookings, communicate with you, and ensure the safety and security of our platform."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Data Security"}),u.jsx("p",{children:"We implement appropriate technical and organizational measures to protect your personal information. All tutors are DBS checked, and all Zoom sessions are encrypted and secure."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Session Recordings"}),u.jsx("p",{children:"Lessons may be recorded for educational purposes and quality assurance. Recordings are stored securely and are accessible only to authorized personnel and the student's account."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Your Rights"}),u.jsx("p",{children:"You have the right to access, update, or delete your personal information at any time. You can also request a copy of your data or withdraw consent for data processing."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Children's Privacy"}),u.jsx("p",{children:"We take children's privacy seriously. We only collect information necessary to provide our services, and all data handling complies with UK GDPR and Children's Code requirements."})]}),u.jsx("div",{children:u.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})}),u.jsx("section",{id:"terms-of-service",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50",children:u.jsxs("div",{className:"max-w-4xl mx-auto",children:[u.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Terms of Service"}),u.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Service Agreement"}),u.jsx("p",{children:"By booking a lesson or consultation with MySchola, you agree to these terms of service. Our services include one-to-one online tutoring sessions delivered via Zoom for students in Years 7-11."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. Booking and Cancellation"}),u.jsx("p",{children:"Lessons must be booked in advance. Cancellations require 24 hours notice for a full refund or reschedule. Cancellations with less than 24 hours notice may be charged at 50% of the lesson fee. No-shows will be charged the full lesson fee."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Payment Terms"}),u.jsx("p",{children:"Payment is required in advance for lesson packages. We accept payment via Stripe. Refunds for unused lessons in a package will be calculated on a pro-rata basis, minus any applicable fees."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Tutor Matching"}),u.jsx("p",{children:"We strive to match students with the most suitable tutor. However, if you're not satisfied after the first session, we offer a free replacement tutor or full refund."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Student Conduct"}),u.jsx("p",{children:"Students are expected to attend lessons punctually, be respectful to tutors, and engage actively in learning. Any inappropriate behavior may result in session termination without refund."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Technical Requirements"}),u.jsx("p",{children:"You are responsible for ensuring you have adequate internet connection and equipment for Zoom sessions. Note that webcam and microphone are optional - not needed. We use Zoom chat to check engagement, and parents can monitor participation for privacy reasons. We are not liable for technical issues on your end, though we'll do our best to accommodate."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"7. Guarantees"}),u.jsx("p",{children:"While we work hard to help students achieve their goals, we cannot guarantee specific grade improvements as results depend on multiple factors including student effort, attendance, and engagement."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"8. Intellectual Property"}),u.jsx("p",{children:"All teaching materials, resources, and session recordings are the intellectual property of MySchola and are for the personal use of the enrolled student only."})]}),u.jsx("div",{children:u.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})})]}),u.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center mb-4",children:[u.jsx(oi,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),u.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),u.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 7-11 via Zoom."})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),u.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[u.jsx("li",{children:u.jsx("a",{href:"#home",className:"hover:text-white transition",children:"Home"})}),u.jsx("li",{children:u.jsx("a",{href:"#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),u.jsx("li",{children:u.jsx("a",{href:"#subjects",className:"hover:text-white transition",children:"Subjects"})}),u.jsx("li",{children:u.jsx("a",{href:"#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),u.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[u.jsx("li",{children:u.jsx("a",{href:"#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),u.jsx("li",{children:u.jsx("a",{href:"#terms-of-service",className:"hover:text-white transition",children:"Terms of Service"})}),u.jsx("li",{children:u.jsx("a",{href:"#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),u.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[u.jsx("li",{children:u.jsx("a",{href:"mailto:support@myschola.co.uk",className:"hover:text-white transition",children:"support@myschola.co.uk"})}),u.jsx("li",{children:u.jsx("a",{href:"tel:02012345678",className:"hover:text-white transition",children:"020 1234 5678"})}),u.jsx("li",{children:u.jsx("button",{onClick:i,className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),u.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:u.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 7-11."]})})]})})]})}const Lg=()=>{};var Tl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Ug=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],c=n[t++],h=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,c=a?n[r+1]:0,h=r+2<n.length,d=h?n[r+2]:0,m=i>>2,g=(i&3)<<4|c>>4;let y=(c&15)<<2|d>>6,A=d&63;h||(A=64,a||(y=64)),s.push(t[m],t[g],t[y],t[A])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Th(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ug(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const g=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||d==null||g==null)throw new Fg;const y=i<<2|c>>4;if(s.push(y),d!==64){const A=c<<4&240|d>>2;if(s.push(A),g!==64){const S=d<<6&192|g;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Fg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bg=function(n){const e=Th(n);return Ih.encodeByteArray(e,!0)},ai=function(n){return Bg(n).replace(/\./g,"")},xh=function(n){try{return Ih.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=()=>qg().__FIREBASE_DEFAULTS__,Hg=()=>{if(typeof process>"u"||typeof Tl>"u")return;const n=Tl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xh(n[1]);return e&&JSON.parse(e)},Ni=()=>{try{return Lg()||$g()||Hg()||zg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ah=n=>{var e,t;return(t=(e=Ni())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Rh=n=>{const e=Ah(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Sh=()=>{var n;return(n=Ni())==null?void 0:n.config},Nh=n=>{var e;return(e=Ni())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function va(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ai(JSON.stringify(t)),ai(JSON.stringify(a)),""].join(".")}const zs={};function Wg(){const n={prod:[],emulator:[]};for(const e of Object.keys(zs))zs[e]?n.emulator.push(e):n.prod.push(e);return n}function Kg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Il=!1;function Ea(n,e){if(typeof window>"u"||typeof document>"u"||!on(window.location.host)||zs[n]===e||zs[n]||Il)return;zs[n]=e;function t(y){return`__firebase__banner__${y}`}const s="__firebase__banner",i=Wg().prod.length>0;function a(){const y=document.getElementById(s);y&&y.remove()}function c(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function h(y,A){y.setAttribute("width","24"),y.setAttribute("id",A),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function d(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Il=!0,a()},y}function m(y,A){y.setAttribute("id",A),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function g(){const y=Kg(s),A=t("text"),S=document.getElementById(A)||document.createElement("span"),P=t("learnmore"),C=document.getElementById(P)||document.createElement("a"),F=t("preprendIcon"),U=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const D=y.element;c(D),m(C,P);const M=d();h(U,F),D.append(U,S,C,M),document.body.appendChild(D)}i?(S.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function Yg(){var e;const n=(e=Ni())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Jg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zg(){const n=Ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function e_(){return!Yg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ph(){try{return typeof indexedDB=="object"}catch{return!1}}function Dh(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function t_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="FirebaseError";class et extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=n_,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sn.prototype.create)}}class Sn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?s_(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new et(r,c,s)}}function s_(n,e){return n.replace(r_,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const r_=/\{\$([^}]+)}/g;function i_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Jt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(xl(i)&&xl(a)){if(!Jt(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function xl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Us(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Fs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function o_(n,e){const t=new a_(n,e);return t.subscribe.bind(t)}class a_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");c_(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Ao),r.error===void 0&&(r.error=Ao),r.complete===void 0&&(r.complete=Ao);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function c_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ao(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=1e3,u_=2,h_=14400*1e3,d_=.5;function Al(n,e=l_,t=u_){const s=e*Math.pow(t,n),r=Math.round(d_*s*(Math.random()-.5)*2);return Math.min(h_,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n){return n&&n._delegate?n._delegate:n}class Je{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Gg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(p_(e))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=_n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_n){return this.instances.has(e)}getOptions(e=_n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:m_(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=_n){return this.component?this.component.multipleInstances?e:_n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function m_(n){return n===_n?void 0:n}function p_(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new f_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const __={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},y_=J.INFO,w_={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},b_=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=w_[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ci{constructor(e){this.name=e,this._logLevel=y_,this._logHandler=b_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?__[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const v_=(n,e)=>e.some(t=>n instanceof t);let Rl,Sl;function E_(){return Rl||(Rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function T_(){return Sl||(Sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vh=new WeakMap,zo=new WeakMap,Oh=new WeakMap,Ro=new WeakMap,Ta=new WeakMap;function I_(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Wt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Vh.set(t,n)}).catch(()=>{}),Ta.set(e,n),e}function x_(n){if(zo.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});zo.set(n,e)}let Go={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return zo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Oh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function A_(n){Go=n(Go)}function R_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(So(this),e,...t);return Oh.set(s,e.sort?e.sort():[e]),Wt(s)}:T_().includes(n)?function(...e){return n.apply(So(this),e),Wt(Vh.get(this))}:function(...e){return Wt(n.apply(So(this),e))}}function S_(n){return typeof n=="function"?R_(n):(n instanceof IDBTransaction&&x_(n),v_(n,E_())?new Proxy(n,Go):n)}function Wt(n){if(n instanceof IDBRequest)return I_(n);if(Ro.has(n))return Ro.get(n);const e=S_(n);return e!==n&&(Ro.set(n,e),Ta.set(e,n)),e}const So=n=>Ta.get(n);function jh(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),c=Wt(a);return s&&a.addEventListener("upgradeneeded",h=>{s(Wt(a.result),h.oldVersion,h.newVersion,Wt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{i&&h.addEventListener("close",()=>i()),r&&h.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const N_=["get","getKey","getAll","getAllKeys","count"],C_=["put","add","delete","clear"],No=new Map;function Nl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(No.get(e))return No.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=C_.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||N_.includes(t)))return;const i=async function(a,...c){const h=this.transaction(a,r?"readwrite":"readonly");let d=h.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),r&&h.done]))[0]};return No.set(e,i),i}A_(n=>({...n,get:(e,t,s)=>Nl(e,t)||n.get(e,t,s),has:(e,t)=>!!Nl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(P_(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function P_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wo="@firebase/app",Cl="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new Ci("@firebase/app"),D_="@firebase/app-compat",V_="@firebase/analytics-compat",O_="@firebase/analytics",j_="@firebase/app-check-compat",M_="@firebase/app-check",L_="@firebase/auth",U_="@firebase/auth-compat",F_="@firebase/database",B_="@firebase/data-connect",q_="@firebase/database-compat",$_="@firebase/functions",H_="@firebase/functions-compat",z_="@firebase/installations",G_="@firebase/installations-compat",W_="@firebase/messaging",K_="@firebase/messaging-compat",Q_="@firebase/performance",Y_="@firebase/performance-compat",X_="@firebase/remote-config",J_="@firebase/remote-config-compat",Z_="@firebase/storage",ey="@firebase/storage-compat",ty="@firebase/firestore",ny="@firebase/ai",sy="@firebase/firestore-compat",ry="firebase",iy="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="[DEFAULT]",oy={[Wo]:"fire-core",[D_]:"fire-core-compat",[O_]:"fire-analytics",[V_]:"fire-analytics-compat",[M_]:"fire-app-check",[j_]:"fire-app-check-compat",[L_]:"fire-auth",[U_]:"fire-auth-compat",[F_]:"fire-rtdb",[B_]:"fire-data-connect",[q_]:"fire-rtdb-compat",[$_]:"fire-fn",[H_]:"fire-fn-compat",[z_]:"fire-iid",[G_]:"fire-iid-compat",[W_]:"fire-fcm",[K_]:"fire-fcm-compat",[Q_]:"fire-perf",[Y_]:"fire-perf-compat",[X_]:"fire-rc",[J_]:"fire-rc-compat",[Z_]:"fire-gcs",[ey]:"fire-gcs-compat",[ty]:"fire-fst",[sy]:"fire-fst-compat",[ny]:"fire-vertex","fire-js":"fire-js",[ry]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new Map,ay=new Map,Qo=new Map;function kl(n,e){try{n.container.addComponent(e)}catch(t){At.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function st(n){const e=n.name;if(Qo.has(e))return At.debug(`There were multiple attempts to register component ${e}.`),!1;Qo.set(e,n);for(const t of ci.values())kl(t,n);for(const t of ay.values())kl(t,n);return!0}function an(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ye(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new Sn("app","Firebase",cy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=iy;function Mh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Ko,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Kt.create("bad-app-name",{appName:String(r)});if(t||(t=Sh()),!t)throw Kt.create("no-options");const i=ci.get(r);if(i){if(Jt(t,i.options)&&Jt(s,i.config))return i;throw Kt.create("duplicate-app",{appName:r})}const a=new g_(r);for(const h of Qo.values())a.addComponent(h);const c=new ly(t,s,a);return ci.set(r,c),c}function ki(n=Ko){const e=ci.get(n);if(!e&&n===Ko&&Sh())return Mh();if(!e)throw Kt.create("no-app",{appName:n});return e}function qe(n,e,t){let s=oy[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),At.warn(a.join(" "));return}st(new Je(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="firebase-heartbeat-database",hy=1,Zs="firebase-heartbeat-store";let Co=null;function Lh(){return Co||(Co=jh(uy,hy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Zs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Kt.create("idb-open",{originalErrorMessage:n.message})})),Co}async function dy(n){try{const t=(await Lh()).transaction(Zs),s=await t.objectStore(Zs).get(Uh(n));return await t.done,s}catch(e){if(e instanceof et)At.warn(e.message);else{const t=Kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});At.warn(t.message)}}}async function Pl(n,e){try{const s=(await Lh()).transaction(Zs,"readwrite");await s.objectStore(Zs).put(e,Uh(n)),await s.done}catch(t){if(t instanceof et)At.warn(t.message);else{const s=Kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});At.warn(s.message)}}}function Uh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=1024,my=30;class py{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _y(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Dl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>my){const a=yy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){At.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dl(),{heartbeatsToSend:s,unsentEntries:r}=gy(this._heartbeatsCache.heartbeats),i=ai(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return At.warn(t),""}}}function Dl(){return new Date().toISOString().substring(0,10)}function gy(n,e=fy){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),Vl(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Vl(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class _y{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ph()?Dh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await dy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Pl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Pl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vl(n){return ai(JSON.stringify({version:2,heartbeats:n})).length}function yy(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(n){st(new Je("platform-logger",e=>new k_(e),"PRIVATE")),st(new Je("heartbeat",e=>new py(e),"PRIVATE")),qe(Wo,Cl,n),qe(Wo,Cl,"esm2020"),qe("fire-js","")}wy("");var by="firebase",vy="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe(by,vy,"app");function Fh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ey=Fh,Bh=new Sn("auth","Firebase",Fh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Ci("@firebase/auth");function Ty(n,...e){li.logLevel<=J.WARN&&li.warn(`Auth (${Nn}): ${n}`,...e)}function Kr(n,...e){li.logLevel<=J.ERROR&&li.error(`Auth (${Nn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(n,...e){throw Ia(n,...e)}function dt(n,...e){return Ia(n,...e)}function qh(n,e,t){const s={...Ey(),[e]:t};return new Sn("auth","Firebase",s).create(e,{appName:n.name})}function Qt(n){return qh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ia(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Bh.create(n,...e)}function z(n,e,...t){if(!n)throw Ia(e,...t)}function vt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Kr(e),new Error(e)}function Rt(n,e){n||vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Iy(){return Ol()==="http:"||Ol()==="https:"}function Ol(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Iy()||kh()||"connection"in navigator)?navigator.onLine:!0}function Ay(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rt(t>e,"Short delay should be less than long delay!"),this.isMobile=Qg()||Jg()}get(){return xy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(n,e){Rt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ny=new fr(3e4,6e4);function Cn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function cn(n,e,t,s,r={}){return Hh(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=dr({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:h,...i};return Xg()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&on(n.emulatorConfig.host)&&(d.credentials="include"),$h.fetch()(await zh(n,n.config.apiHost,t,c),d)})}async function Hh(n,e,t){n._canInitEmulator=!1;const s={...Ry,...e};try{const r=new ky(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ur(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[h,d]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ur(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Ur(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Ur(n,"user-disabled",a);const m=s[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw qh(n,m,d);rt(n,m)}}catch(r){if(r instanceof et)throw r;rt(n,"network-request-failed",{message:String(r)})}}async function Pi(n,e,t,s,r={}){const i=await cn(n,e,t,s,r);return"mfaPendingCredential"in i&&rt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function zh(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?xa(n.config,r):`${n.config.apiScheme}://${r}`;return Sy.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function Cy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ky{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(dt(this.auth,"network-request-failed")),Ny.get())})}}function Ur(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=dt(n,e,s);return r.customData._tokenResponse=t,r}function jl(n){return n!==void 0&&n.enterprise!==void 0}class Py{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Cy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Dy(n,e){return cn(n,"GET","/v2/recaptchaConfig",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(n,e){return cn(n,"POST","/v1/accounts:delete",e)}async function ui(n,e){return cn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Oy(n,e=!1){const t=le(n),s=await t.getIdToken(e),r=Aa(s);z(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Gs(ko(r.auth_time)),issuedAtTime:Gs(ko(r.iat)),expirationTime:Gs(ko(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ko(n){return Number(n)*1e3}function Aa(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Kr("JWT malformed, contained fewer than 3 sections"),null;try{const r=xh(t);return r?JSON.parse(r):(Kr("Failed to decode base64 JWT payload"),null)}catch(r){return Kr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ml(n){const e=Aa(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof et&&jy(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function jy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gs(this.lastLoginAt),this.creationTime=Gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(n){var g;const e=n.auth,t=await n.getIdToken(),s=await er(n,ui(e,{idToken:t}));z(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(g=r.providerUserInfo)!=null&&g.length?Gh(r.providerUserInfo):[],a=Uy(n.providerData,i),c=n.isAnonymous,h=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?h:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Xo(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function Ly(n){const e=le(n);await hi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Uy(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Gh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(n,e){const t=await Hh(n,{},async()=>{const s=dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await zh(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:c,body:s};return n.emulatorConfig&&on(n.emulatorConfig.host)&&(h.credentials="include"),$h.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function By(n,e){return cn(n,"POST","/v2/accounts:revokeToken",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ml(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=Ml(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Fy(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new Yn;return s&&(z(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(z(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(z(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yn,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class tt{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new My(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Xo(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await er(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Oy(this,e)}reload(){return Ly(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await hi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ye(this.auth.app))return Promise.reject(Qt(this.auth));const e=await this.getIdToken();return await er(this,Vy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,h=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:g,emailVerified:y,isAnonymous:A,providerData:S,stsTokenManager:P}=t;z(g&&P,e,"internal-error");const C=Yn.fromJSON(this.name,P);z(typeof g=="string",e,"internal-error"),Ut(s,e.name),Ut(r,e.name),z(typeof y=="boolean",e,"internal-error"),z(typeof A=="boolean",e,"internal-error"),Ut(i,e.name),Ut(a,e.name),Ut(c,e.name),Ut(h,e.name),Ut(d,e.name),Ut(m,e.name);const F=new tt({uid:g,auth:e,email:r,emailVerified:y,displayName:s,isAnonymous:A,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:C,createdAt:d,lastLoginAt:m});return S&&Array.isArray(S)&&(F.providerData=S.map(U=>({...U}))),h&&(F._redirectEventId=h),F}static async _fromIdTokenResponse(e,t,s=!1){const r=new Yn;r.updateFromServerResponse(t);const i=new tt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await hi(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];z(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Gh(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new Yn;c.updateFromIdToken(s);const h=new tt({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Xo(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new Map;function Et(n){Rt(n instanceof Function,"Expected a class definition");let e=Ll.get(n);return e?(Rt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ll.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Wh.type="NONE";const Ul=Wh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n,e,t){return`firebase:${n}:${e}:${t}`}class Xn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Qr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Qr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ui(this.auth,{idToken:e}).catch(()=>{});return t?tt._fromGetAccountInfoResponse(this.auth,t,e):null}return tt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Xn(Et(Ul),e,s);const r=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=r[0]||Et(Ul);const a=Qr(s,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(a);if(m){let g;if(typeof m=="string"){const y=await ui(e,{idToken:m}).catch(()=>{});if(!y)break;g=await tt._fromGetAccountInfoResponse(e,y,m)}else g=tt._fromJSON(e,m);d!==i&&(c=g),i=d;break}}catch{}const h=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!h.length?new Xn(i,e,s):(i=h[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Xn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zh(e))return"Blackberry";if(ed(e))return"Webos";if(Qh(e))return"Safari";if((e.includes("chrome/")||Yh(e))&&!e.includes("edge/"))return"Chrome";if(Jh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Kh(n=Ve()){return/firefox\//i.test(n)}function Qh(n=Ve()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yh(n=Ve()){return/crios\//i.test(n)}function Xh(n=Ve()){return/iemobile/i.test(n)}function Jh(n=Ve()){return/android/i.test(n)}function Zh(n=Ve()){return/blackberry/i.test(n)}function ed(n=Ve()){return/webos/i.test(n)}function Ra(n=Ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qy(n=Ve()){var e;return Ra(n)&&!!((e=window.navigator)!=null&&e.standalone)}function $y(){return Zg()&&document.documentMode===10}function td(n=Ve()){return Ra(n)||Jh(n)||ed(n)||Zh(n)||/windows phone/i.test(n)||Xh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n,e=[]){let t;switch(n){case"Browser":t=Fl(Ve());break;case"Worker":t=`${Fl(Ve())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Nn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,c)=>{try{const h=e(i);a(h)}catch(h){c(h)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zy(n,e={}){return cn(n,"GET","/v2/passwordPolicy",Cn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=6;class Wy{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Gy,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bl(this),this.idTokenSubscription=new Bl(this),this.beforeStateQueue=new Hy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Et(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Xn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ui(this,{idToken:e}),s=await tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ye(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===c)&&(h!=null&&h.user)&&(s=h.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ay()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ye(this.app))return Promise.reject(Qt(this));const t=e?le(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ye(this.app)?Promise.reject(Qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ye(this.app)?Promise.reject(Qt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zy(this),t=new Wy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Sn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await By(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Et(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await Xn.create(this,[Et(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,s,r);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Ye(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Ty(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function us(n){return le(n)}class Bl{constructor(e){this.auth=e,this.observer=null,this.addObserver=o_(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qy(n){Di=n}function sd(n){return Di.loadJS(n)}function Yy(){return Di.recaptchaEnterpriseScript}function Xy(){return Di.gapiScript}function Jy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Zy{constructor(){this.enterprise=new ew}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ew{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const tw="recaptcha-enterprise",rd="NO_RECAPTCHA";class nw{constructor(e){this.type=tw,this.auth=us(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Dy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Py(h);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(h=>{c(h)})})}function r(i,a,c){const h=window.grecaptcha;jl(h)?h.enterprise.ready(()=>{h.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(rd)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Zy().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(c=>{if(!t&&jl(window.grecaptcha))r(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Yy();h.length!==0&&(h+=c),sd(h).then(()=>{r(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function ql(n,e,t,s=!1,r=!1){const i=new nw(n);let a;if(r)a=rd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const h=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const h=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function $l(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await ql(n,e,t,t==="getOobCode");return s(n,a)}else return s(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await ql(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(n,e){const t=an(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Jt(i,e??{}))return r;rt(r,"already-initialized")}return t.initialize({options:e})}function rw(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Et);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function iw(n,e,t){const s=us(n);z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=id(e),{host:a,port:c}=ow(e),h=c===null?"":`:${c}`,d={url:`${i}//${a}${h}/`},m=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){z(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),z(Jt(d,s.config.emulator)&&Jt(m,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=m,s.settings.appVerificationDisabledForTesting=!0,on(a)?(va(`${i}//${a}${h}`),Ea("Auth",!0)):aw()}function id(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ow(n){const e=id(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Hl(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:Hl(a)}}}function Hl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function aw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vt("not implemented")}_getIdTokenResponse(e){return vt("not implemented")}_linkToIdToken(e,t){return vt("not implemented")}_getReauthenticationResolver(e){return vt("not implemented")}}async function cw(n,e){return cn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lw(n,e){return Pi(n,"POST","/v1/accounts:signInWithPassword",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw(n,e){return Pi(n,"POST","/v1/accounts:signInWithEmailLink",Cn(n,e))}async function hw(n,e){return Pi(n,"POST","/v1/accounts:signInWithEmailLink",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Sa{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new tr(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new tr(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $l(e,t,"signInWithPassword",lw);case"emailLink":return uw(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $l(e,s,"signUpPassword",cw);case"emailLink":return hw(e,{idToken:t,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(n,e){return Pi(n,"POST","/v1/accounts:signInWithIdp",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="http://localhost";class En extends Sa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new En(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const a=new En(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Jn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Jn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Jn(e,t)}buildRequest(){const e={requestUri:dw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=dr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mw(n){const e=Us(Fs(n)).link,t=e?Us(Fs(e)).deep_link_id:null,s=Us(Fs(n)).deep_link_id;return(s?Us(Fs(s)).link:null)||s||t||e||n}class Na{constructor(e){const t=Us(Fs(e)),s=t.apiKey??null,r=t.oobCode??null,i=fw(t.mode??null);z(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=mw(e);try{return new Na(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.providerId=hs.PROVIDER_ID}static credential(e,t){return tr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Na.parseLink(t);return z(s,"argument-error"),tr._fromEmailAndCode(e,s.code,s.tenantId)}}hs.PROVIDER_ID="password";hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends od{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends mr{constructor(){super("facebook.com")}static credential(e){return En._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return En._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Bt.credential(t,s)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends mr{constructor(){super("github.com")}static credential(e){return En._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends mr{constructor(){super("twitter.com")}static credential(e,t){return En._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return $t.credential(t,s)}catch{return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com";$t.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await tt._fromIdTokenResponse(e,s,r),a=zl(s);return new ss({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=zl(s);return new ss({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function zl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends et{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,di.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new di(e,t,s,r)}}function ad(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?di._fromErrorAndOperation(n,i,e,s):i})}async function pw(n,e,t=!1){const s=await er(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ss._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(n,e,t=!1){const{auth:s}=n;if(Ye(s.app))return Promise.reject(Qt(s));const r="reauthenticate";try{const i=await er(n,ad(s,r,e,n),t);z(i.idToken,s,"internal-error");const a=Aa(i.idToken);z(a,s,"internal-error");const{sub:c}=a;return z(n.uid===c,s,"user-mismatch"),ss._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(n,e,t=!1){if(Ye(n.app))return Promise.reject(Qt(n));const s="signIn",r=await ad(n,s,e),i=await ss._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function _w(n,e){return cd(us(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(n){const e=us(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ww(n,e,t){return Ye(n.app)?Promise.reject(Qt(n)):_w(le(n),hs.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&yw(n),s})}function bw(n,e,t,s){return le(n).onIdTokenChanged(e,t,s)}function vw(n,e,t){return le(n).beforeAuthStateChanged(e,t)}function ld(n,e,t,s){return le(n).onAuthStateChanged(e,t,s)}function Ew(n){return le(n).signOut()}const fi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fi,"1"),this.storage.removeItem(fi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=1e3,Iw=10;class hd extends ud{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=td(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,h)=>{this.notifyListeners(a,h)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);$y()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Iw):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Tw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hd.type="LOCAL";const xw=hd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd extends ud{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dd.type="SESSION";const fd=dd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Vi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async d=>d(t.origin,i)),h=await Aw(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,h)=>{const d=Ca("",20);r.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(g){const y=g;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(y.data.response);break;default:clearTimeout(m),clearTimeout(i),h(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return window}function Sw(n){ft().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(){return typeof ft().WorkerGlobalScope<"u"&&typeof ft().importScripts=="function"}async function Nw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function kw(){return md()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="firebaseLocalStorageDb",Pw=1,mi="firebaseLocalStorage",gd="fbase_key";class pr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Oi(n,e){return n.transaction([mi],e?"readwrite":"readonly").objectStore(mi)}function Dw(){const n=indexedDB.deleteDatabase(pd);return new pr(n).toPromise()}function Jo(){const n=indexedDB.open(pd,Pw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(mi,{keyPath:gd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(mi)?e(s):(s.close(),await Dw(),e(await Jo()))})})}async function Gl(n,e,t){const s=Oi(n,!0).put({[gd]:e,value:t});return new pr(s).toPromise()}async function Vw(n,e){const t=Oi(n,!1).get(e),s=await new pr(t).toPromise();return s===void 0?null:s.value}function Wl(n,e){const t=Oi(n,!0).delete(e);return new pr(t).toPromise()}const Ow=800,jw=3;class _d{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>jw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return md()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vi._getInstance(kw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await Nw(),!this.activeServiceWorker)return;this.sender=new Rw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jo();return await Gl(e,fi,"1"),await Wl(e,fi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Gl(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Vw(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Oi(r,!1).getAll();return new pr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ow)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_d.type="LOCAL";const Mw=_d;new fr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(n,e){return e?Et(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends Sa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Jn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Uw(n){return cd(n.auth,new ka(n),n.bypassAuthState)}function Fw(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),gw(t,new ka(n),n.bypassAuthState)}async function Bw(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),pw(t,new ka(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uw;case"linkViaPopup":case"linkViaRedirect":return Bw;case"reauthViaPopup":case"reauthViaRedirect":return Fw;default:rt(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=new fr(2e3,1e4);class Qn extends yd{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Qn.currentPopupAction&&Qn.currentPopupAction.cancel(),Qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=Ca();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qw.get())};e()}}Qn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="pendingRedirect",Yr=new Map;class Hw extends yd{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Yr.get(this.auth._key());if(!e){try{const s=await zw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Yr.set(this.auth._key(),e)}return this.bypassAuthState||Yr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zw(n,e){const t=Kw(e),s=Ww(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function Gw(n,e){Yr.set(n._key(),e)}function Ww(n){return Et(n._redirectPersistence)}function Kw(n){return Qr($w,n.config.apiKey,n.name)}async function Qw(n,e,t=!1){if(Ye(n.app))return Promise.reject(Qt(n));const s=us(n),r=Lw(s,e),a=await new Hw(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=600*1e3;class Xw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!wd(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(dt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kl(e))}saveEventToCache(e){this.cachedEventUids.add(Kl(e)),this.lastProcessedEventTime=Date.now()}}function Kl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function wd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(n,e={}){return cn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tb=/^https?/;async function nb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Zw(n);for(const t of e)try{if(sb(t))return}catch{}rt(n,"unauthorized-domain")}function sb(n){const e=Yo(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!tb.test(t))return!1;if(eb.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=new fr(3e4,6e4);function Ql(){const n=ft().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ib(n){return new Promise((e,t)=>{var r,i,a;function s(){Ql(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ql(),t(dt(n,"network-request-failed"))},timeout:rb.get()})}if((i=(r=ft().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=ft().gapi)!=null&&a.load)s();else{const c=Jy("iframefcb");return ft()[c]=()=>{gapi.load?s():t(dt(n,"network-request-failed"))},sd(`${Xy()}?onload=${c}`).catch(h=>t(h))}}).catch(e=>{throw Xr=null,e})}let Xr=null;function ob(n){return Xr=Xr||ib(n),Xr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=new fr(5e3,15e3),cb="__/auth/iframe",lb="emulator/auth/iframe",ub={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function db(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?xa(e,lb):`https://${n.config.authDomain}/${cb}`,s={apiKey:e.apiKey,appName:n.name,v:Nn},r=hb.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${dr(s).slice(1)}`}async function fb(n){const e=await ob(n),t=ft().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:db(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ub,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=dt(n,"network-request-failed"),c=ft().setTimeout(()=>{i(a)},ab.get());function h(){ft().clearTimeout(c),r(s)}s.ping(h).then(h,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pb=500,gb=600,_b="_blank",yb="http://localhost";class Yl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wb(n,e,t,s=pb,r=gb){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const h={...mb,width:s.toString(),height:r.toString(),top:i,left:a},d=Ve().toLowerCase();t&&(c=Yh(d)?_b:t),Kh(d)&&(e=e||yb,h.scrollbars="yes");const m=Object.entries(h).reduce((y,[A,S])=>`${y}${A}=${S},`,"");if(qy(d)&&c!=="_self")return bb(e||"",c),new Yl(null);const g=window.open(e||"",c,m);z(g,n,"popup-blocked");try{g.focus()}catch{}return new Yl(g)}function bb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb="__/auth/handler",Eb="emulator/auth/handler",Tb=encodeURIComponent("fac");async function Xl(n,e,t,s,r,i){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Nn,eventId:r};if(e instanceof od){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",i_(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))a[m]=g}if(e instanceof mr){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const h=await n._getAppCheckToken(),d=h?`#${Tb}=${encodeURIComponent(h)}`:"";return`${Ib(n)}?${dr(c).slice(1)}${d}`}function Ib({config:n}){return n.emulator?xa(n,Eb):`https://${n.authDomain}/${vb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="webStorageSupport";class xb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fd,this._completeRedirectFn=Qw,this._overrideRedirectResult=Gw}async _openPopup(e,t,s,r){var a;Rt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Xl(e,t,s,Yo(),r);return wb(e,i,Ca())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Xl(e,t,s,Yo(),r);return Sw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Rt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await fb(e),s=new Xw(e);return t.register("authEvent",r=>(z(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Po,{type:Po},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[Po];i!==void 0&&t(!!i),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return td()||Qh()||Ra()}}const Ab=xb;var Jl="@firebase/auth",Zl="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nb(n){st(new Je("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const h={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nd(n)},d=new Ky(s,r,i,h);return rw(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),st(new Je("auth-internal",e=>{const t=us(e.getProvider("auth").getImmediate());return(s=>new Rb(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(Jl,Zl,Sb(n)),qe(Jl,Zl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=300,kb=Nh("authIdTokenMaxAge")||Cb;let eu=null;const Pb=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>kb)return;const r=t==null?void 0:t.token;eu!==r&&(eu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Db(n=ki()){const e=an(n,"auth");if(e.isInitialized())return e.getImmediate();const t=sw(n,{popupRedirectResolver:Ab,persistence:[Mw,xw,fd]}),s=Nh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=Pb(i.toString());vw(t,a,()=>a(t.currentUser)),bw(t,c=>a(c))}}const r=Ah("auth");return r&&iw(t,`http://${r}`),t}function Vb(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Qy({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=dt("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",Vb().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Nb("Browser");var tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yt,bd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function b(){}b.prototype=_.prototype,v.F=_.prototype,v.prototype=new b,v.prototype.constructor=v,v.D=function(T,E,I){for(var w=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)w[ne-2]=arguments[ne];return _.prototype[E].apply(T,w)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(v,_,b){b||(b=0);const T=Array(16);if(typeof _=="string")for(var E=0;E<16;++E)T[E]=_.charCodeAt(b++)|_.charCodeAt(b++)<<8|_.charCodeAt(b++)<<16|_.charCodeAt(b++)<<24;else for(E=0;E<16;++E)T[E]=_[b++]|_[b++]<<8|_[b++]<<16|_[b++]<<24;_=v.g[0],b=v.g[1],E=v.g[2];let I=v.g[3],w;w=_+(I^b&(E^I))+T[0]+3614090360&4294967295,_=b+(w<<7&4294967295|w>>>25),w=I+(E^_&(b^E))+T[1]+3905402710&4294967295,I=_+(w<<12&4294967295|w>>>20),w=E+(b^I&(_^b))+T[2]+606105819&4294967295,E=I+(w<<17&4294967295|w>>>15),w=b+(_^E&(I^_))+T[3]+3250441966&4294967295,b=E+(w<<22&4294967295|w>>>10),w=_+(I^b&(E^I))+T[4]+4118548399&4294967295,_=b+(w<<7&4294967295|w>>>25),w=I+(E^_&(b^E))+T[5]+1200080426&4294967295,I=_+(w<<12&4294967295|w>>>20),w=E+(b^I&(_^b))+T[6]+2821735955&4294967295,E=I+(w<<17&4294967295|w>>>15),w=b+(_^E&(I^_))+T[7]+4249261313&4294967295,b=E+(w<<22&4294967295|w>>>10),w=_+(I^b&(E^I))+T[8]+1770035416&4294967295,_=b+(w<<7&4294967295|w>>>25),w=I+(E^_&(b^E))+T[9]+2336552879&4294967295,I=_+(w<<12&4294967295|w>>>20),w=E+(b^I&(_^b))+T[10]+4294925233&4294967295,E=I+(w<<17&4294967295|w>>>15),w=b+(_^E&(I^_))+T[11]+2304563134&4294967295,b=E+(w<<22&4294967295|w>>>10),w=_+(I^b&(E^I))+T[12]+1804603682&4294967295,_=b+(w<<7&4294967295|w>>>25),w=I+(E^_&(b^E))+T[13]+4254626195&4294967295,I=_+(w<<12&4294967295|w>>>20),w=E+(b^I&(_^b))+T[14]+2792965006&4294967295,E=I+(w<<17&4294967295|w>>>15),w=b+(_^E&(I^_))+T[15]+1236535329&4294967295,b=E+(w<<22&4294967295|w>>>10),w=_+(E^I&(b^E))+T[1]+4129170786&4294967295,_=b+(w<<5&4294967295|w>>>27),w=I+(b^E&(_^b))+T[6]+3225465664&4294967295,I=_+(w<<9&4294967295|w>>>23),w=E+(_^b&(I^_))+T[11]+643717713&4294967295,E=I+(w<<14&4294967295|w>>>18),w=b+(I^_&(E^I))+T[0]+3921069994&4294967295,b=E+(w<<20&4294967295|w>>>12),w=_+(E^I&(b^E))+T[5]+3593408605&4294967295,_=b+(w<<5&4294967295|w>>>27),w=I+(b^E&(_^b))+T[10]+38016083&4294967295,I=_+(w<<9&4294967295|w>>>23),w=E+(_^b&(I^_))+T[15]+3634488961&4294967295,E=I+(w<<14&4294967295|w>>>18),w=b+(I^_&(E^I))+T[4]+3889429448&4294967295,b=E+(w<<20&4294967295|w>>>12),w=_+(E^I&(b^E))+T[9]+568446438&4294967295,_=b+(w<<5&4294967295|w>>>27),w=I+(b^E&(_^b))+T[14]+3275163606&4294967295,I=_+(w<<9&4294967295|w>>>23),w=E+(_^b&(I^_))+T[3]+4107603335&4294967295,E=I+(w<<14&4294967295|w>>>18),w=b+(I^_&(E^I))+T[8]+1163531501&4294967295,b=E+(w<<20&4294967295|w>>>12),w=_+(E^I&(b^E))+T[13]+2850285829&4294967295,_=b+(w<<5&4294967295|w>>>27),w=I+(b^E&(_^b))+T[2]+4243563512&4294967295,I=_+(w<<9&4294967295|w>>>23),w=E+(_^b&(I^_))+T[7]+1735328473&4294967295,E=I+(w<<14&4294967295|w>>>18),w=b+(I^_&(E^I))+T[12]+2368359562&4294967295,b=E+(w<<20&4294967295|w>>>12),w=_+(b^E^I)+T[5]+4294588738&4294967295,_=b+(w<<4&4294967295|w>>>28),w=I+(_^b^E)+T[8]+2272392833&4294967295,I=_+(w<<11&4294967295|w>>>21),w=E+(I^_^b)+T[11]+1839030562&4294967295,E=I+(w<<16&4294967295|w>>>16),w=b+(E^I^_)+T[14]+4259657740&4294967295,b=E+(w<<23&4294967295|w>>>9),w=_+(b^E^I)+T[1]+2763975236&4294967295,_=b+(w<<4&4294967295|w>>>28),w=I+(_^b^E)+T[4]+1272893353&4294967295,I=_+(w<<11&4294967295|w>>>21),w=E+(I^_^b)+T[7]+4139469664&4294967295,E=I+(w<<16&4294967295|w>>>16),w=b+(E^I^_)+T[10]+3200236656&4294967295,b=E+(w<<23&4294967295|w>>>9),w=_+(b^E^I)+T[13]+681279174&4294967295,_=b+(w<<4&4294967295|w>>>28),w=I+(_^b^E)+T[0]+3936430074&4294967295,I=_+(w<<11&4294967295|w>>>21),w=E+(I^_^b)+T[3]+3572445317&4294967295,E=I+(w<<16&4294967295|w>>>16),w=b+(E^I^_)+T[6]+76029189&4294967295,b=E+(w<<23&4294967295|w>>>9),w=_+(b^E^I)+T[9]+3654602809&4294967295,_=b+(w<<4&4294967295|w>>>28),w=I+(_^b^E)+T[12]+3873151461&4294967295,I=_+(w<<11&4294967295|w>>>21),w=E+(I^_^b)+T[15]+530742520&4294967295,E=I+(w<<16&4294967295|w>>>16),w=b+(E^I^_)+T[2]+3299628645&4294967295,b=E+(w<<23&4294967295|w>>>9),w=_+(E^(b|~I))+T[0]+4096336452&4294967295,_=b+(w<<6&4294967295|w>>>26),w=I+(b^(_|~E))+T[7]+1126891415&4294967295,I=_+(w<<10&4294967295|w>>>22),w=E+(_^(I|~b))+T[14]+2878612391&4294967295,E=I+(w<<15&4294967295|w>>>17),w=b+(I^(E|~_))+T[5]+4237533241&4294967295,b=E+(w<<21&4294967295|w>>>11),w=_+(E^(b|~I))+T[12]+1700485571&4294967295,_=b+(w<<6&4294967295|w>>>26),w=I+(b^(_|~E))+T[3]+2399980690&4294967295,I=_+(w<<10&4294967295|w>>>22),w=E+(_^(I|~b))+T[10]+4293915773&4294967295,E=I+(w<<15&4294967295|w>>>17),w=b+(I^(E|~_))+T[1]+2240044497&4294967295,b=E+(w<<21&4294967295|w>>>11),w=_+(E^(b|~I))+T[8]+1873313359&4294967295,_=b+(w<<6&4294967295|w>>>26),w=I+(b^(_|~E))+T[15]+4264355552&4294967295,I=_+(w<<10&4294967295|w>>>22),w=E+(_^(I|~b))+T[6]+2734768916&4294967295,E=I+(w<<15&4294967295|w>>>17),w=b+(I^(E|~_))+T[13]+1309151649&4294967295,b=E+(w<<21&4294967295|w>>>11),w=_+(E^(b|~I))+T[4]+4149444226&4294967295,_=b+(w<<6&4294967295|w>>>26),w=I+(b^(_|~E))+T[11]+3174756917&4294967295,I=_+(w<<10&4294967295|w>>>22),w=E+(_^(I|~b))+T[2]+718787259&4294967295,E=I+(w<<15&4294967295|w>>>17),w=b+(I^(E|~_))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(E+(w<<21&4294967295|w>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}s.prototype.v=function(v,_){_===void 0&&(_=v.length);const b=_-this.blockSize,T=this.C;let E=this.h,I=0;for(;I<_;){if(E==0)for(;I<=b;)r(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<_;)if(T[E++]=v.charCodeAt(I++),E==this.blockSize){r(this,T),E=0;break}}else for(;I<_;)if(T[E++]=v[I++],E==this.blockSize){r(this,T),E=0;break}}this.h=E,this.o+=_},s.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;_=this.o*8;for(var b=v.length-8;b<v.length;++b)v[b]=_&255,_/=256;for(this.v(v),v=Array(16),_=0,b=0;b<4;++b)for(let T=0;T<32;T+=8)v[_++]=this.g[b]>>>T&255;return v};function i(v,_){var b=c;return Object.prototype.hasOwnProperty.call(b,v)?b[v]:b[v]=_(v)}function a(v,_){this.h=_;const b=[];let T=!0;for(let E=v.length-1;E>=0;E--){const I=v[E]|0;T&&I==_||(b[E]=I,T=!1)}this.g=b}var c={};function h(v){return-128<=v&&v<128?i(v,function(_){return new a([_|0],_<0?-1:0)}):new a([v|0],v<0?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return g;if(v<0)return C(d(-v));const _=[];let b=1;for(let T=0;v>=b;T++)_[T]=v/b|0,b*=4294967296;return new a(_,0)}function m(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return C(m(v.substring(1),_));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=d(Math.pow(_,8));let T=g;for(let I=0;I<v.length;I+=8){var E=Math.min(8,v.length-I);const w=parseInt(v.substring(I,I+E),_);E<8?(E=d(Math.pow(_,E)),T=T.j(E).add(d(w))):(T=T.j(b),T=T.add(d(w)))}return T}var g=h(0),y=h(1),A=h(16777216);n=a.prototype,n.m=function(){if(P(this))return-C(this).m();let v=0,_=1;for(let b=0;b<this.g.length;b++){const T=this.i(b);v+=(T>=0?T:4294967296+T)*_,_*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(P(this))return"-"+C(this).toString(v);const _=d(Math.pow(v,6));var b=this;let T="";for(;;){const E=M(b,_).g;b=F(b,E.j(_));let I=((b.g.length>0?b.g[0]:b.h)>>>0).toString(v);if(b=E,S(b))return I+T;for(;I.length<6;)I="0"+I;T=I+T}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(let _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function P(v){return v.h==-1}n.l=function(v){return v=F(this,v),P(v)?-1:S(v)?0:1};function C(v){const _=v.g.length,b=[];for(let T=0;T<_;T++)b[T]=~v.g[T];return new a(b,~v.h).add(y)}n.abs=function(){return P(this)?C(this):this},n.add=function(v){const _=Math.max(this.g.length,v.g.length),b=[];let T=0;for(let E=0;E<=_;E++){let I=T+(this.i(E)&65535)+(v.i(E)&65535),w=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);T=w>>>16,I&=65535,w&=65535,b[E]=w<<16|I}return new a(b,b[b.length-1]&-2147483648?-1:0)};function F(v,_){return v.add(C(_))}n.j=function(v){if(S(this)||S(v))return g;if(P(this))return P(v)?C(this).j(C(v)):C(C(this).j(v));if(P(v))return C(this.j(C(v)));if(this.l(A)<0&&v.l(A)<0)return d(this.m()*v.m());const _=this.g.length+v.g.length,b=[];for(var T=0;T<2*_;T++)b[T]=0;for(T=0;T<this.g.length;T++)for(let E=0;E<v.g.length;E++){const I=this.i(T)>>>16,w=this.i(T)&65535,ne=v.i(E)>>>16,ge=v.i(E)&65535;b[2*T+2*E]+=w*ge,U(b,2*T+2*E),b[2*T+2*E+1]+=I*ge,U(b,2*T+2*E+1),b[2*T+2*E+1]+=w*ne,U(b,2*T+2*E+1),b[2*T+2*E+2]+=I*ne,U(b,2*T+2*E+2)}for(v=0;v<_;v++)b[v]=b[2*v+1]<<16|b[2*v];for(v=_;v<2*_;v++)b[v]=0;return new a(b,0)};function U(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function D(v,_){this.g=v,this.h=_}function M(v,_){if(S(_))throw Error("division by zero");if(S(v))return new D(g,g);if(P(v))return _=M(C(v),_),new D(C(_.g),C(_.h));if(P(_))return _=M(v,C(_)),new D(C(_.g),_.h);if(v.g.length>30){if(P(v)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var b=y,T=_;T.l(v)<=0;)b=O(b),T=O(T);var E=B(b,1),I=B(T,1);for(T=B(T,2),b=B(b,2);!S(T);){var w=I.add(T);w.l(v)<=0&&(E=E.add(b),I=w),T=B(T,1),b=B(b,1)}return _=F(v,E.j(_)),new D(E,_)}for(E=g;v.l(_)>=0;){for(b=Math.max(1,Math.floor(v.m()/_.m())),T=Math.ceil(Math.log(b)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),I=d(b),w=I.j(_);P(w)||w.l(v)>0;)b-=T,I=d(b),w=I.j(_);S(I)&&(I=y),E=E.add(I),v=F(v,w)}return new D(E,v)}n.B=function(v){return M(this,v).h},n.and=function(v){const _=Math.max(this.g.length,v.g.length),b=[];for(let T=0;T<_;T++)b[T]=this.i(T)&v.i(T);return new a(b,this.h&v.h)},n.or=function(v){const _=Math.max(this.g.length,v.g.length),b=[];for(let T=0;T<_;T++)b[T]=this.i(T)|v.i(T);return new a(b,this.h|v.h)},n.xor=function(v){const _=Math.max(this.g.length,v.g.length),b=[];for(let T=0;T<_;T++)b[T]=this.i(T)^v.i(T);return new a(b,this.h^v.h)};function O(v){const _=v.g.length+1,b=[];for(let T=0;T<_;T++)b[T]=v.i(T)<<1|v.i(T-1)>>>31;return new a(b,v.h)}function B(v,_){const b=_>>5;_%=32;const T=v.g.length-b,E=[];for(let I=0;I<T;I++)E[I]=_>0?v.i(I+b)>>>_|v.i(I+b+1)<<32-_:v.i(I+b);return new a(E,v.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,bd=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Yt=a}).apply(typeof tu<"u"?tu:typeof self<"u"?self:typeof window<"u"?window:{});var Fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vd,Bs,Ed,Jr,Zo,Td,Id,xd;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fr=="object"&&Fr];for(var l=0;l<o.length;++l){var f=o[l];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=t(this);function r(o,l){if(l)e:{var f=s;o=o.split(".");for(var p=0;p<o.length-1;p++){var x=o[p];if(!(x in f))break e;f=f[x]}o=o[o.length-1],p=f[o],l=l(p),l!=p&&l!=null&&e(f,o,{configurable:!0,writable:!0,value:l})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(l){var f=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&f.push([p,l[p]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function h(o,l,f){return o.call.apply(o.bind,arguments)}function d(o,l,f){return d=h,d.apply(null,arguments)}function m(o,l){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function g(o,l){function f(){}f.prototype=l.prototype,o.Z=l.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(p,x,R){for(var V=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)V[Y-2]=arguments[Y];return l.prototype[x].apply(p,V)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function A(o){const l=o.length;if(l>0){const f=Array(l);for(let p=0;p<l;p++)f[p]=o[p];return f}return[]}function S(o,l){for(let p=1;p<arguments.length;p++){const x=arguments[p];var f=typeof x;if(f=f!="object"?f:x?Array.isArray(x)?"array":f:"null",f=="array"||f=="object"&&typeof x.length=="number"){f=o.length||0;const R=x.length||0;o.length=f+R;for(let V=0;V<R;V++)o[f+V]=x[V]}else o.push(x)}}class P{constructor(l,f){this.i=l,this.j=f,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function C(o){a.setTimeout(()=>{throw o},0)}function F(){var o=v;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class U{constructor(){this.h=this.g=null}add(l,f){const p=D.get();p.set(l,f),this.h?this.h.next=p:this.g=p,this.h=p}}var D=new P(()=>new M,o=>o.reset());class M{constructor(){this.next=this.g=this.h=null}set(l,f){this.h=l,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let O,B=!1,v=new U,_=()=>{const o=Promise.resolve(void 0);O=()=>{o.then(b)}};function b(){for(var o;o=F();){try{o.h.call(o.g)}catch(f){C(f)}var l=D;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}B=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,l),a.removeEventListener("test",f,l)}catch{}return o})();function w(o){return/^[\s\xa0]*$/.test(o)}function ne(o,l){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}g(ne,E),ne.prototype.init=function(o,l){const f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(f=="mouseover"?l=o.fromElement:f=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ne.Z.h.call(this)},ne.prototype.h=function(){ne.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ge="closure_listenable_"+(Math.random()*1e6|0),Vn=0;function ot(o,l,f,p,x){this.listener=o,this.proxy=null,this.src=l,this.type=f,this.capture=!!p,this.ha=x,this.key=++Vn,this.da=this.fa=!1}function We(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ke(o,l,f){for(const p in o)l.call(f,o[p],p,o)}function On(o,l){for(const f in o)l.call(void 0,o[f],f,o)}function kt(o){const l={};for(const f in o)l[f]=o[f];return l}const me="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ir(o,l){let f,p;for(let x=1;x<arguments.length;x++){p=arguments[x];for(f in p)o[f]=p[f];for(let R=0;R<me.length;R++)f=me[R],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function jn(o){this.src=o,this.g={},this.h=0}jn.prototype.add=function(o,l,f,p,x){const R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);const V=Mn(o,l,p,x);return V>-1?(l=o[V],f||(l.fa=!1)):(l=new ot(l,this.src,R,!!p,x),l.fa=f,o.push(l)),l};function ws(o,l){const f=l.type;if(f in o.g){var p=o.g[f],x=Array.prototype.indexOf.call(p,l,void 0),R;(R=x>=0)&&Array.prototype.splice.call(p,x,1),R&&(We(l),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Mn(o,l,f,p){for(let x=0;x<o.length;++x){const R=o[x];if(!R.da&&R.listener==l&&R.capture==!!f&&R.ha==p)return x}return-1}var Pt="closure_lm_"+(Math.random()*1e6|0),bs={};function xr(o,l,f,p,x){if(Array.isArray(l)){for(let R=0;R<l.length;R++)xr(o,l[R],f,p,x);return null}return f=hn(f),o&&o[ge]?o.J(l,f,c(p)?!!p.capture:!1,x):io(o,l,f,!1,p,x)}function io(o,l,f,p,x,R){if(!l)throw Error("Invalid event type");const V=c(x)?!!x.capture:!!x;let Y=at(o);if(Y||(o[Pt]=Y=new jn(o)),f=Y.add(l,f,p,V,R),f.proxy)return f;if(p=oo(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)I||(x=V),x===void 0&&(x=!1),o.addEventListener(l.toString(),p,x);else if(o.attachEvent)o.attachEvent(he(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function oo(){function o(f){return l.call(o.src,o.listener,f)}const l=Le;return o}function q(o,l,f,p,x){if(Array.isArray(l))for(var R=0;R<l.length;R++)q(o,l[R],f,p,x);else p=c(p)?!!p.capture:!!p,f=hn(f),o&&o[ge]?(o=o.i,R=String(l).toString(),R in o.g&&(l=o.g[R],f=Mn(l,f,p,x),f>-1&&(We(l[f]),Array.prototype.splice.call(l,f,1),l.length==0&&(delete o.g[R],o.h--)))):o&&(o=at(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Mn(l,f,p,x)),(f=o>-1?l[o]:null)&&K(f))}function K(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[ge])ws(l.i,o);else{var f=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(f,p,o.capture):l.detachEvent?l.detachEvent(he(f),p):l.addListener&&l.removeListener&&l.removeListener(p),(f=at(l))?(ws(f,o),f.h==0&&(f.src=null,l[Pt]=null)):We(o)}}}function he(o){return o in bs?bs[o]:bs[o]="on"+o}function Le(o,l){if(o.da)o=!0;else{l=new ne(l,this);const f=o.listener,p=o.ha||o.src;o.fa&&K(o),o=f.call(p,l)}return o}function at(o){return o=o[Pt],o instanceof jn?o:null}var bt="__closure_events_fn_"+(Math.random()*1e9>>>0);function hn(o){return typeof o=="function"?o:(o[bt]||(o[bt]=function(l){return o.handleEvent(l)}),o[bt])}function ie(){T.call(this),this.i=new jn(this),this.M=this,this.G=null}g(ie,T),ie.prototype[ge]=!0,ie.prototype.removeEventListener=function(o,l,f,p){q(this,o,l,f,p)};function Re(o,l){var f,p=o.G;if(p)for(f=[];p;p=p.G)f.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new E(l,o);else if(l instanceof E)l.target=l.target||o;else{var x=l;l=new E(p,o),Ir(l,x)}x=!0;let R,V;if(f)for(V=f.length-1;V>=0;V--)R=l.g=f[V],x=Ar(R,p,!0,l)&&x;if(R=l.g=o,x=Ar(R,p,!0,l)&&x,x=Ar(R,p,!1,l)&&x,f)for(V=0;V<f.length;V++)R=l.g=f[V],x=Ar(R,p,!1,l)&&x}ie.prototype.N=function(){if(ie.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const f=o.g[l];for(let p=0;p<f.length;p++)We(f[p]);delete o.g[l],o.h--}}this.G=null},ie.prototype.J=function(o,l,f,p){return this.i.add(String(o),l,!1,f,p)},ie.prototype.K=function(o,l,f,p){return this.i.add(String(o),l,!0,f,p)};function Ar(o,l,f,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let x=!0;for(let R=0;R<l.length;++R){const V=l[R];if(V&&!V.da&&V.capture==f){const Y=V.listener,Te=V.ha||V.src;V.fa&&ws(o.i,V),x=Y.call(Te,p)!==!1&&x}}return x&&!p.defaultPrevented}function $m(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function Tc(o){o.g=$m(()=>{o.g=null,o.i&&(o.i=!1,Tc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Hm extends T{constructor(l,f){super(),this.m=l,this.l=f,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Tc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(o){T.call(this),this.h=o,this.g={}}g(vs,T);var Ic=[];function xc(o){Ke(o.g,function(l,f){this.g.hasOwnProperty(f)&&K(l)},o),o.g={}}vs.prototype.N=function(){vs.Z.N.call(this),xc(this)},vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ao=a.JSON.stringify,zm=a.JSON.parse,Gm=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Ac(){}function Rc(){}var Es={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function co(){E.call(this,"d")}g(co,E);function lo(){E.call(this,"c")}g(lo,E);var dn={},Sc=null;function Rr(){return Sc=Sc||new ie}dn.Ia="serverreachability";function Nc(o){E.call(this,dn.Ia,o)}g(Nc,E);function Ts(o){const l=Rr();Re(l,new Nc(l))}dn.STAT_EVENT="statevent";function Cc(o,l){E.call(this,dn.STAT_EVENT,o),this.stat=l}g(Cc,E);function Oe(o){const l=Rr();Re(l,new Cc(l,o))}dn.Ja="timingevent";function kc(o,l){E.call(this,dn.Ja,o),this.size=l}g(kc,E);function Is(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function xs(){this.g=!0}xs.prototype.ua=function(){this.g=!1};function Wm(o,l,f,p,x,R){o.info(function(){if(o.g)if(R){var V="",Y=R.split("&");for(let re=0;re<Y.length;re++){var Te=Y[re].split("=");if(Te.length>1){const xe=Te[0];Te=Te[1];const lt=xe.split("_");V=lt.length>=2&&lt[1]=="type"?V+(xe+"="+Te+"&"):V+(xe+"=redacted&")}}}else V=null;else V=R;return"XMLHTTP REQ ("+p+") [attempt "+x+"]: "+l+`
`+f+`
`+V})}function Km(o,l,f,p,x,R,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+x+"]: "+l+`
`+f+`
`+R+" "+V})}function Ln(o,l,f,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Ym(o,f)+(p?" "+p:"")})}function Qm(o,l){o.info(function(){return"TIMEOUT: "+l})}xs.prototype.info=function(){};function Ym(o,l){if(!o.g)return l;if(!l)return null;try{const R=JSON.parse(l);if(R){for(o=0;o<R.length;o++)if(Array.isArray(R[o])){var f=R[o];if(!(f.length<2)){var p=f[1];if(Array.isArray(p)&&!(p.length<1)){var x=p[0];if(x!="noop"&&x!="stop"&&x!="close")for(let V=1;V<p.length;V++)p[V]=""}}}}return ao(R)}catch{return l}}var Sr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Pc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Dc;function uo(){}g(uo,Ac),uo.prototype.g=function(){return new XMLHttpRequest},Dc=new uo;function As(o){return encodeURIComponent(String(o))}function Xm(o){var l=1;o=o.split(":");const f=[];for(;l>0&&o.length;)f.push(o.shift()),l--;return o.length&&f.push(o.join(":")),f}function Dt(o,l,f,p){this.j=o,this.i=l,this.l=f,this.S=p||1,this.V=new vs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vc}function Vc(){this.i=null,this.g="",this.h=!1}var Oc={},ho={};function fo(o,l,f){o.M=1,o.A=Cr(ct(l)),o.u=f,o.R=!0,jc(o,null)}function jc(o,l){o.F=Date.now(),Nr(o),o.B=ct(o.A);var f=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Qc(f.i,"t",p),o.C=0,f=o.j.L,o.h=new Vc,o.g=fl(o.j,f?l:null,!o.u),o.P>0&&(o.O=new Hm(d(o.Y,o,o.g),o.P)),l=o.V,f=o.g,p=o.ba;var x="readystatechange";Array.isArray(x)||(x&&(Ic[0]=x.toString()),x=Ic);for(let R=0;R<x.length;R++){const V=xr(f,x[R],p||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=o.J?kt(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),Ts(),Wm(o.i,o.v,o.B,o.l,o.S,o.u)}Dt.prototype.ba=function(o){o=o.target;const l=this.O;l&&jt(o)==3?l.j():this.Y(o)},Dt.prototype.Y=function(o){try{if(o==this.g)e:{const Y=jt(this.g),Te=this.g.ya(),re=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||nl(this.g)))){this.K||Y!=4||Te==7||(Te==8||re<=0?Ts(3):Ts(2)),mo(this);var l=this.g.ca();this.X=l;var f=Jm(this);if(this.o=l==200,Km(this.i,this.v,this.B,this.l,this.S,Y,l),this.o){if(this.U&&!this.L){t:{if(this.g){var p,x=this.g;if((p=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(p)){var R=p;break t}}R=null}if(o=R)Ln(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,po(this,o);else{this.o=!1,this.m=3,Oe(12),fn(this),Rs(this);break e}}if(this.R){o=!0;let xe;for(;!this.K&&this.C<f.length;)if(xe=Zm(this,f),xe==ho){Y==4&&(this.m=4,Oe(14),o=!1),Ln(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==Oc){this.m=4,Oe(15),Ln(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else Ln(this.i,this.l,xe,null),po(this,xe);if(Mc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||f.length!=0||this.h.h||(this.m=1,Oe(16),o=!1),this.o=this.o&&o,!o)Ln(this.i,this.l,f,"[Invalid Chunked Response]"),fn(this),Rs(this);else if(f.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),To(V),V.P=!0,Oe(11))}}else Ln(this.i,this.l,f,null),po(this,f);Y==4&&fn(this),this.o&&!this.K&&(Y==4?ll(this.j,this):(this.o=!1,Nr(this)))}else fp(this.g),l==400&&f.indexOf("Unknown SID")>0?(this.m=3,Oe(12)):(this.m=0,Oe(13)),fn(this),Rs(this)}}}catch{}finally{}};function Jm(o){if(!Mc(o))return o.g.la();const l=nl(o.g);if(l==="")return"";let f="";const p=l.length,x=jt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return fn(o),Rs(o),"";o.h.i=new a.TextDecoder}for(let R=0;R<p;R++)o.h.h=!0,f+=o.h.i.decode(l[R],{stream:!(x&&R==p-1)});return l.length=0,o.h.g+=f,o.C=0,o.h.g}function Mc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Zm(o,l){var f=o.C,p=l.indexOf(`
`,f);return p==-1?ho:(f=Number(l.substring(f,p)),isNaN(f)?Oc:(p+=1,p+f>l.length?ho:(l=l.slice(p,p+f),o.C=p+f,l)))}Dt.prototype.cancel=function(){this.K=!0,fn(this)};function Nr(o){o.T=Date.now()+o.H,Lc(o,o.H)}function Lc(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Is(d(o.aa,o),l)}function mo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Dt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Qm(this.i,this.B),this.M!=2&&(Ts(),Oe(17)),fn(this),this.m=2,Rs(this)):Lc(this,this.T-o)};function Rs(o){o.j.I==0||o.K||ll(o.j,o)}function fn(o){mo(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,xc(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function po(o,l){try{var f=o.j;if(f.I!=0&&(f.g==o||go(f.h,o))){if(!o.L&&go(f.h,o)&&f.I==3){try{var p=f.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var x=p;if(x[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Or(f),Dr(f);else break e;Eo(f),Oe(18)}}else f.xa=x[1],0<f.xa-f.K&&x[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Is(d(f.Va,f),6e3));Bc(f.h)<=1&&f.ta&&(f.ta=void 0)}else pn(f,11)}else if((o.L||f.g==o)&&Or(f),!w(l))for(x=f.Ba.g.parse(l),l=0;l<x.length;l++){let re=x[l];const xe=re[0];if(!(xe<=f.K))if(f.K=xe,re=re[1],f.I==2)if(re[0]=="c"){f.M=re[1],f.ba=re[2];const lt=re[3];lt!=null&&(f.ka=lt,f.j.info("VER="+f.ka));const gn=re[4];gn!=null&&(f.za=gn,f.j.info("SVER="+f.za));const Mt=re[5];Mt!=null&&typeof Mt=="number"&&Mt>0&&(p=1.5*Mt,f.O=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Lt=o.g;if(Lt){const Mr=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mr){var R=p.h;R.g||Mr.indexOf("spdy")==-1&&Mr.indexOf("quic")==-1&&Mr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(_o(R,R.h),R.h=null))}if(p.G){const Io=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Io&&(p.wa=Io,ce(p.J,p.G,Io))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),p=f;var V=o;if(p.na=dl(p,p.L?p.ba:null,p.W),V.L){qc(p.h,V);var Y=V,Te=p.O;Te&&(Y.H=Te),Y.D&&(mo(Y),Nr(Y)),p.g=V}else al(p);f.i.length>0&&Vr(f)}else re[0]!="stop"&&re[0]!="close"||pn(f,7);else f.I==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?pn(f,7):vo(f):re[0]!="noop"&&f.l&&f.l.qa(re),f.A=0)}}Ts(4)}catch{}}var ep=class{constructor(o,l){this.g=o,this.map=l}};function Uc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Bc(o){return o.h?1:o.g?o.g.size:0}function go(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function _o(o,l){o.g?o.g.add(l):o.h=l}function qc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Uc.prototype.cancel=function(){if(this.i=$c(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function $c(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const f of o.g.values())l=l.concat(f.G);return l}return A(o.i)}var Hc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tp(o,l){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const p=o[f].indexOf("=");let x,R=null;p>=0?(x=o[f].substring(0,p),R=o[f].substring(p+1)):x=o[f],l(x,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Vt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof Vt?(this.l=o.l,Ss(this,o.j),this.o=o.o,this.g=o.g,Ns(this,o.u),this.h=o.h,yo(this,Yc(o.i)),this.m=o.m):o&&(l=String(o).match(Hc))?(this.l=!1,Ss(this,l[1]||"",!0),this.o=Cs(l[2]||""),this.g=Cs(l[3]||"",!0),Ns(this,l[4]),this.h=Cs(l[5]||"",!0),yo(this,l[6]||"",!0),this.m=Cs(l[7]||"")):(this.l=!1,this.i=new Ps(null,this.l))}Vt.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(ks(l,zc,!0),":");var f=this.g;return(f||l=="file")&&(o.push("//"),(l=this.o)&&o.push(ks(l,zc,!0),"@"),o.push(As(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(ks(f,f.charAt(0)=="/"?rp:sp,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",ks(f,op)),o.join("")},Vt.prototype.resolve=function(o){const l=ct(this);let f=!!o.j;f?Ss(l,o.j):f=!!o.o,f?l.o=o.o:f=!!o.g,f?l.g=o.g:f=o.u!=null;var p=o.h;if(f)Ns(l,o.u);else if(f=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var x=l.h.lastIndexOf("/");x!=-1&&(p=l.h.slice(0,x+1)+p)}if(x=p,x==".."||x==".")p="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){p=x.lastIndexOf("/",0)==0,x=x.split("/");const R=[];for(let V=0;V<x.length;){const Y=x[V++];Y=="."?p&&V==x.length&&R.push(""):Y==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),p&&V==x.length&&R.push("")):(R.push(Y),p=!0)}p=R.join("/")}else p=x}return f?l.h=p:f=o.i.toString()!=="",f?yo(l,Yc(o.i)):f=!!o.m,f&&(l.m=o.m),l};function ct(o){return new Vt(o)}function Ss(o,l,f){o.j=f?Cs(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Ns(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function yo(o,l,f){l instanceof Ps?(o.i=l,ap(o.i,o.l)):(f||(l=ks(l,ip)),o.i=new Ps(l,o.l))}function ce(o,l,f){o.i.set(l,f)}function Cr(o){return ce(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Cs(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ks(o,l,f){return typeof o=="string"?(o=encodeURI(o).replace(l,np),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function np(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var zc=/[#\/\?@]/g,sp=/[#\?:]/g,rp=/[#\?]/g,ip=/[#\?@]/g,op=/#/g;function Ps(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function mn(o){o.g||(o.g=new Map,o.h=0,o.i&&tp(o.i,function(l,f){o.add(decodeURIComponent(l.replace(/\+/g," ")),f)}))}n=Ps.prototype,n.add=function(o,l){mn(this),this.i=null,o=Un(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(l),this.h+=1,this};function Gc(o,l){mn(o),l=Un(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Wc(o,l){return mn(o),l=Un(o,l),o.g.has(l)}n.forEach=function(o,l){mn(this),this.g.forEach(function(f,p){f.forEach(function(x){o.call(l,x,p,this)},this)},this)};function Kc(o,l){mn(o);let f=[];if(typeof l=="string")Wc(o,l)&&(f=f.concat(o.g.get(Un(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)f=f.concat(o[l]);return f}n.set=function(o,l){return mn(this),this.i=null,o=Un(this,o),Wc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=Kc(this,o),o.length>0?String(o[0]):l):l};function Qc(o,l,f){Gc(o,l),f.length>0&&(o.i=null,o.g.set(Un(o,l),A(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var f=l[p];const x=As(f);f=Kc(this,f);for(let R=0;R<f.length;R++){let V=x;f[R]!==""&&(V+="="+As(f[R])),o.push(V)}}return this.i=o.join("&")};function Yc(o){const l=new Ps;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function Un(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function ap(o,l){l&&!o.j&&(mn(o),o.i=null,o.g.forEach(function(f,p){const x=p.toLowerCase();p!=x&&(Gc(this,p),Qc(this,x,f))},o)),o.j=l}function cp(o,l){const f=new xs;if(a.Image){const p=new Image;p.onload=m(Ot,f,"TestLoadImage: loaded",!0,l,p),p.onerror=m(Ot,f,"TestLoadImage: error",!1,l,p),p.onabort=m(Ot,f,"TestLoadImage: abort",!1,l,p),p.ontimeout=m(Ot,f,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function lp(o,l){const f=new xs,p=new AbortController,x=setTimeout(()=>{p.abort(),Ot(f,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(R=>{clearTimeout(x),R.ok?Ot(f,"TestPingServer: ok",!0,l):Ot(f,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(x),Ot(f,"TestPingServer: error",!1,l)})}function Ot(o,l,f,p,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),p(f)}catch{}}function up(){this.g=new Gm}function wo(o){this.i=o.Sb||null,this.h=o.ab||!1}g(wo,Ac),wo.prototype.g=function(){return new kr(this.i,this.h)};function kr(o,l){ie.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(kr,ie),n=kr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,Vs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ds(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Xc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Xc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Ds(this):Vs(this),this.readyState==3&&Xc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Ds(this))},n.Na=function(o){this.g&&(this.response=o,Ds(this))},n.ga=function(){this.g&&Ds(this)};function Ds(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Vs(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var f=l.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=l.next();return o.join(`\r
`)};function Vs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(kr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Jc(o){let l="";return Ke(o,function(f,p){l+=p,l+=":",l+=f,l+=`\r
`}),l}function bo(o,l,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=Jc(f),typeof o=="string"?f!=null&&As(f):ce(o,l,f))}function pe(o){ie.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(pe,ie);var hp=/^https?$/i,dp=["POST","PUT"];n=pe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Dc.g(),this.g.onreadystatechange=y(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(R){Zc(this,R);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var x in p)f.set(x,p[x]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())f.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(R=>R.toLowerCase()=="content-type"),x=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(dp,l,void 0)>=0)||p||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of f)this.g.setRequestHeader(R,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(R){Zc(this,R)}};function Zc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,el(o),Pr(o)}function el(o){o.A||(o.A=!0,Re(o,"complete"),Re(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Re(this,"complete"),Re(this,"abort"),Pr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pr(this,!0)),pe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?tl(this):this.Xa())},n.Xa=function(){tl(this)};function tl(o){if(o.h&&typeof i<"u"){if(o.v&&jt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Re(o,"readystatechange"),jt(o)==4){o.h=!1;try{const R=o.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var f;if(!(f=l)){var p;if(p=R===0){let V=String(o.D).match(Hc)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),p=!hp.test(V?V.toLowerCase():"")}f=p}if(f)Re(o,"complete"),Re(o,"success");else{o.o=6;try{var x=jt(o)>2?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.ca()+"]",el(o)}}finally{Pr(o)}}}}function Pr(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,l||Re(o,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function jt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return jt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),zm(l)}};function nl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function fp(o){const l={};o=(o.g&&jt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(w(o[p]))continue;var f=Xm(o[p]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const R=l[x]||[];l[x]=R,R.push(f)}On(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Os(o,l,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||l}function sl(o){this.za=0,this.i=[],this.j=new xs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Os("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Os("baseRetryDelayMs",5e3,o),this.Za=Os("retryDelaySeedMs",1e4,o),this.Ta=Os("forwardChannelMaxRetries",2,o),this.va=Os("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Uc(o&&o.concurrentRequestLimit),this.Ba=new up,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=sl.prototype,n.ka=8,n.I=1,n.connect=function(o,l,f,p){Oe(0),this.W=o,this.H=l||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.J=dl(this,null,this.W),Vr(this)};function vo(o){if(rl(o),o.I==3){var l=o.V++,f=ct(o.J);if(ce(f,"SID",o.M),ce(f,"RID",l),ce(f,"TYPE","terminate"),js(o,f),l=new Dt(o,o.j,l),l.M=2,l.A=Cr(ct(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=l.A,f=!0),f||(l.g=fl(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Nr(l)}hl(o)}function Dr(o){o.g&&(To(o),o.g.cancel(),o.g=null)}function rl(o){Dr(o),o.v&&(a.clearTimeout(o.v),o.v=null),Or(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Vr(o){if(!Fc(o.h)&&!o.m){o.m=!0;var l=o.Ea;O||_(),B||(O(),B=!0),v.add(l,o),o.D=0}}function mp(o,l){return Bc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Is(d(o.Ea,o,l),ul(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const x=new Dt(this,this.j,o);let R=this.o;if(this.U&&(R?(R=kt(R),Ir(R,this.U)):R=this.U),this.u!==null||this.R||(x.J=R,R=null),this.S)e:{for(var l=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=f;break e}if(l===4096||f===this.i.length-1){l=f+1;break e}}l=1e3}else l=1e3;l=ol(this,x,l),f=ct(this.J),ce(f,"RID",o),ce(f,"CVER",22),this.G&&ce(f,"X-HTTP-Session-Id",this.G),js(this,f),R&&(this.R?l="headers="+As(Jc(R))+"&"+l:this.u&&bo(f,this.u,R)),_o(this.h,x),this.Ra&&ce(f,"TYPE","init"),this.S?(ce(f,"$req",l),ce(f,"SID","null"),x.U=!0,fo(x,f,null)):fo(x,f,l),this.I=2}}else this.I==3&&(o?il(this,o):this.i.length==0||Fc(this.h)||il(this))};function il(o,l){var f;l?f=l.l:f=o.V++;const p=ct(o.J);ce(p,"SID",o.M),ce(p,"RID",f),ce(p,"AID",o.K),js(o,p),o.u&&o.o&&bo(p,o.u,o.o),f=new Dt(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),l&&(o.i=l.G.concat(o.i)),l=ol(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),_o(o.h,f),fo(f,p,l)}function js(o,l){o.H&&Ke(o.H,function(f,p){ce(l,p,f)}),o.l&&Ke({},function(f,p){ce(l,p,f)})}function ol(o,l,f){f=Math.min(o.i.length,f);const p=o.l?d(o.l.Ka,o.l,o):null;e:{var x=o.i;let Y=-1;for(;;){const Te=["count="+f];Y==-1?f>0?(Y=x[0].g,Te.push("ofs="+Y)):Y=0:Te.push("ofs="+Y);let re=!0;for(let xe=0;xe<f;xe++){var R=x[xe].g;const lt=x[xe].map;if(R-=Y,R<0)Y=Math.max(0,x[xe].g-100),re=!1;else try{R="req"+R+"_"||"";try{var V=lt instanceof Map?lt:Object.entries(lt);for(const[gn,Mt]of V){let Lt=Mt;c(Mt)&&(Lt=ao(Mt)),Te.push(R+gn+"="+encodeURIComponent(Lt))}}catch(gn){throw Te.push(R+"type="+encodeURIComponent("_badmap")),gn}}catch{p&&p(lt)}}if(re){V=Te.join("&");break e}}V=void 0}return o=o.i.splice(0,f),l.G=o,V}function al(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;O||_(),B||(O(),B=!0),v.add(l,o),o.A=0}}function Eo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Is(d(o.Da,o),ul(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,cl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Is(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Oe(10),Dr(this),cl(this))};function To(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function cl(o){o.g=new Dt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=ct(o.na);ce(l,"RID","rpc"),ce(l,"SID",o.M),ce(l,"AID",o.K),ce(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&ce(l,"TO",o.ia),ce(l,"TYPE","xmlhttp"),js(o,l),o.u&&o.o&&bo(l,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=Cr(ct(l)),f.u=null,f.R=!0,jc(f,o)}n.Va=function(){this.C!=null&&(this.C=null,Dr(this),Eo(this),Oe(19))};function Or(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function ll(o,l){var f=null;if(o.g==l){Or(o),To(o),o.g=null;var p=2}else if(go(o.h,l))f=l.G,qc(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){f=l.u?l.u.length:0,l=Date.now()-l.F;var x=o.D;p=Rr(),Re(p,new kc(p,f)),Vr(o)}else al(o);else if(x=l.m,x==3||x==0&&l.X>0||!(p==1&&mp(o,l)||p==2&&Eo(o)))switch(f&&f.length>0&&(l=o.h,l.i=l.i.concat(f)),x){case 1:pn(o,5);break;case 4:pn(o,10);break;case 3:pn(o,6);break;default:pn(o,2)}}}function ul(o,l){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*l}function pn(o,l){if(o.j.info("Error code "+l),l==2){var f=d(o.bb,o),p=o.Ua;const x=!p;p=new Vt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ss(p,"https"),Cr(p),x?cp(p.toString(),f):lp(p.toString(),f)}else Oe(2);o.I=0,o.l&&o.l.pa(l),hl(o),rl(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function hl(o){if(o.I=0,o.ja=[],o.l){const l=$c(o.h);(l.length!=0||o.i.length!=0)&&(S(o.ja,l),S(o.ja,o.i),o.h.i.length=0,A(o.i),o.i.length=0),o.l.oa()}}function dl(o,l,f){var p=f instanceof Vt?ct(f):new Vt(f);if(p.g!="")l&&(p.g=l+"."+p.g),Ns(p,p.u);else{var x=a.location;p=x.protocol,l=l?l+"."+x.hostname:x.hostname,x=+x.port;const R=new Vt(null);p&&Ss(R,p),l&&(R.g=l),x&&Ns(R,x),f&&(R.h=f),p=R}return f=o.G,l=o.wa,f&&l&&ce(p,f,l),ce(p,"VER",o.ka),js(o,p),p}function fl(o,l,f){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new pe(new wo({ab:f})):new pe(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ml(){}n=ml.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function jr(){}jr.prototype.g=function(o,l){return new $e(o,l)};function $e(o,l){ie.call(this),this.g=new sl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!w(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!w(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Fn(this)}g($e,ie),$e.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){vo(this.g)},$e.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=ao(o),o=f);l.i.push(new ep(l.Ya++,o)),l.I==3&&Vr(l)},$e.prototype.N=function(){this.g.l=null,delete this.j,vo(this.g),delete this.g,$e.Z.N.call(this)};function pl(o){co.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const f in l){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}g(pl,co);function gl(){lo.call(this),this.status=1}g(gl,lo);function Fn(o){this.g=o}g(Fn,ml),Fn.prototype.ra=function(){Re(this.g,"a")},Fn.prototype.qa=function(o){Re(this.g,new pl(o))},Fn.prototype.pa=function(o){Re(this.g,new gl)},Fn.prototype.oa=function(){Re(this.g,"b")},jr.prototype.createWebChannel=jr.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,xd=function(){return new jr},Id=function(){return Rr()},Td=dn,Zo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Sr.NO_ERROR=0,Sr.TIMEOUT=8,Sr.HTTP_ERROR=6,Jr=Sr,Pc.COMPLETE="complete",Ed=Pc,Rc.EventType=Es,Es.OPEN="a",Es.CLOSE="b",Es.ERROR="c",Es.MESSAGE="d",ie.prototype.listen=ie.prototype.J,Bs=Rc,pe.prototype.listenOnce=pe.prototype.K,pe.prototype.getLastError=pe.prototype.Ha,pe.prototype.getLastErrorCode=pe.prototype.ya,pe.prototype.getStatus=pe.prototype.ca,pe.prototype.getResponseJson=pe.prototype.La,pe.prototype.getResponseText=pe.prototype.la,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Fa,vd=pe}).apply(typeof Fr<"u"?Fr:typeof self<"u"?self:typeof window<"u"?window:{});const nu="@firebase/firestore",su="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Ci("@firebase/firestore");function $n(){return Tn.logLevel}function L(n,...e){if(Tn.logLevel<=J.DEBUG){const t=e.map(Pa);Tn.debug(`Firestore (${ds}): ${n}`,...t)}}function St(n,...e){if(Tn.logLevel<=J.ERROR){const t=e.map(Pa);Tn.error(`Firestore (${ds}): ${n}`,...t)}}function rs(n,...e){if(Tn.logLevel<=J.WARN){const t=e.map(Pa);Tn.warn(`Firestore (${ds}): ${n}`,...t)}}function Pa(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Ad(n,s,t)}function Ad(n,e,t){let s=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw St(s),new Error(s)}function se(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Ad(e,r,s)}function Q(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends et{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ob{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Pe.UNAUTHENTICATED)))}shutdown(){}}class jb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Mb{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){se(this.o===void 0,42304);let s=this.i;const r=h=>this.i!==s?(s=this.i,t(h)):Promise.resolve();let i=new It;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new It,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const h=i;e.enqueueRetryable((async()=>{await h.promise,await r(this.currentUser)}))},c=h=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new It)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(se(typeof s.accessToken=="string",31837,{l:s}),new Rd(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string",2055,{h:e}),new Pe(e)}}class Lb{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ub{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Lb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Pe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ru{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fb{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ye(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){se(this.o===void 0,3512);const s=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ru(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(se(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ru(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Bb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function Z(n,e){return n<e?-1:n>e?1:0}function ea(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return Do(r)===Do(i)?Z(r,i):Do(r)?1:-1}return Z(n.length,e.length)}const qb=55296,$b=57343;function Do(n){const e=n.charCodeAt(0);return e>=qb&&e<=$b}function is(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="__name__";class ut{constructor(e,t,s){t===void 0?t=0:t>e.length&&G(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&G(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ut.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ut?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=ut.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return Z(e.length,t.length)}static compareSegments(e,t){const s=ut.isNumericId(e),r=ut.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?ut.extractNumericId(e).compare(ut.extractNumericId(t)):ea(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yt.fromString(e.substring(4,e.length-2))}}class oe extends ut{construct(e,t,s){return new oe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new j(N.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new oe(t)}static emptyPath(){return new oe([])}}const Hb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends ut{construct(e,t,s){return new Ne(e,t,s)}static isValidIdentifier(e){return Hb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===iu}static keyField(){return new Ne([iu])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new j(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new j(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new j(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=h,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(i(),r++)}if(i(),a)throw new j(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(t)}static emptyPath(){return new Ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(oe.fromString(e))}static fromName(e){return new H(oe.fromString(e).popFirst(5))}static empty(){return new H(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new oe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(n,e,t){if(!t)throw new j(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function zb(n,e,t,s){if(e===!0&&s===!0)throw new j(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ou(n){if(!H.isDocumentKey(n))throw new j(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function au(n){if(H.isDocumentKey(n))throw new j(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Nd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ji(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G(12329,{type:typeof n})}function yt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ji(n);throw new j(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n,e){const t={typeString:n};return e&&(t.value=e),t}function gr(n,e){if(!Nd(n))throw new j(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new j(N.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=-62135596800,lu=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*lu);return new ae(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<cu)throw new j(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lu}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(gr(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-cu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:Ee("string",ae._jsonSchemaVersion),seconds:Ee("number"),nanoseconds:Ee("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new ae(0,0))}static max(){return new W(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=-1;function Gb(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=W.fromTimestamp(s===1e9?new ae(t+1,0):new ae(t,s));return new Zt(r,H.empty(),e)}function Wb(n){return new Zt(n.readTime,n.key,nr)}class Zt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Zt(W.min(),H.empty(),nr)}static max(){return new Zt(W.max(),H.empty(),nr)}}function Kb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==Qb)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):k.reject(t)}static resolve(e){return new k(((t,s)=>{t(e)}))}static reject(e){return new k(((t,s)=>{s(e)}))}static waitFor(e){return new k(((t,s)=>{let r=0,i=0,a=!1;e.forEach((c=>{++r,c.next((()=>{++i,a&&i===r&&t()}),(h=>s(h)))})),a=!0,i===r&&t()}))}static or(e){let t=k.resolve(!1);for(const s of e)t=t.next((r=>r?k.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new k(((s,r)=>{const i=e.length,a=new Array(i);let c=0;for(let h=0;h<i;h++){const d=h;t(e[d]).next((m=>{a[d]=m,++c,c===i&&s(a)}),(m=>r(m)))}}))}static doWhile(e,t){return new k(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function Xb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ms(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Mi.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=-1;function Li(n){return n==null}function pi(n){return n===0&&1/n==-1/0}function Jb(n){return typeof n=="number"&&Number.isInteger(n)&&!pi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="";function Zb(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=uu(e)),e=ev(n.get(t),e);return uu(e)}function ev(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Cd:t+="";break;default:t+=i}}return t}function uu(n){return n+Cd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ln(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function kd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){this.comparator=e,this.root=t||Se.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Br(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Br(this.root,e,this.comparator,!1)}getReverseIterator(){return new Br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Br(this.root,e,this.comparator,!0)}}class Br{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Se.RED,this.left=r??Se.EMPTY,this.right=i??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new Se(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Se.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new Se(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new du(this.data.getIterator())}getIteratorFrom(e){return new du(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class du{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new He([])}unionWith(e){let t=new Ie(Ne.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new He(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Pd("Invalid base64 string: "+i):i}})(e);return new Ce(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i})(e);return new Ce(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const tv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function en(n){if(se(!!n,39018),typeof n=="string"){let e=0;const t=tv.exec(n);if(se(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:_e(n.seconds),nanos:_e(n.nanos)}}function _e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function tn(n){return typeof n=="string"?Ce.fromBase64String(n):Ce.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="server_timestamp",Vd="__type__",Od="__previous_value__",jd="__local_write_time__";function Oa(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Vd])==null?void 0:s.stringValue)===Dd}function Ui(n){const e=n.mapValue.fields[Od];return Oa(e)?Ui(e):e}function sr(n){const e=en(n.mapValue.fields[jd].timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t,s,r,i,a,c,h,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const gi="(default)";class rr{constructor(e,t){this.projectId=e,this.database=t||gi}static empty(){return new rr("","")}get isDefaultDatabase(){return this.database===gi}isEqual(e){return e instanceof rr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="__type__",sv="__max__",qr={mapValue:{}},Ld="__vector__",_i="value";function nn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oa(n)?4:iv(n)?9007199254740991:rv(n)?10:11:G(28295,{value:n})}function wt(n,e){if(n===e)return!0;const t=nn(n);if(t!==nn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return sr(n).isEqual(sr(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=en(r.timestampValue),c=en(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,i){return tn(r.bytesValue).isEqual(tn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,i){return _e(r.geoPointValue.latitude)===_e(i.geoPointValue.latitude)&&_e(r.geoPointValue.longitude)===_e(i.geoPointValue.longitude)})(n,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return _e(r.integerValue)===_e(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=_e(r.doubleValue),c=_e(i.doubleValue);return a===c?pi(a)===pi(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return is(n.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:case 11:return(function(r,i){const a=r.mapValue.fields||{},c=i.mapValue.fields||{};if(hu(a)!==hu(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!wt(a[h],c[h])))return!1;return!0})(n,e);default:return G(52216,{left:n})}}function ir(n,e){return(n.values||[]).find((t=>wt(t,e)))!==void 0}function os(n,e){if(n===e)return 0;const t=nn(n),s=nn(e);if(t!==s)return Z(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=_e(i.integerValue||i.doubleValue),h=_e(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(n,e);case 3:return fu(n.timestampValue,e.timestampValue);case 4:return fu(sr(n),sr(e));case 5:return ea(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=tn(i),h=tn(a);return c.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=Z(c[d],h[d]);if(m!==0)return m}return Z(c.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=Z(_e(i.latitude),_e(a.latitude));return c!==0?c:Z(_e(i.longitude),_e(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return mu(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var y,A,S,P;const c=i.fields||{},h=a.fields||{},d=(y=c[_i])==null?void 0:y.arrayValue,m=(A=h[_i])==null?void 0:A.arrayValue,g=Z(((S=d==null?void 0:d.values)==null?void 0:S.length)||0,((P=m==null?void 0:m.values)==null?void 0:P.length)||0);return g!==0?g:mu(d,m)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===qr.mapValue&&a===qr.mapValue)return 0;if(i===qr.mapValue)return 1;if(a===qr.mapValue)return-1;const c=i.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let g=0;g<h.length&&g<m.length;++g){const y=ea(h[g],m[g]);if(y!==0)return y;const A=os(c[h[g]],d[m[g]]);if(A!==0)return A}return Z(h.length,m.length)})(n.mapValue,e.mapValue);default:throw G(23264,{he:t})}}function fu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=en(n),s=en(e),r=Z(t.seconds,s.seconds);return r!==0?r:Z(t.nanos,s.nanos)}function mu(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=os(t[r],s[r]);if(i)return i}return Z(t.length,s.length)}function as(n){return ta(n)}function ta(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=en(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return tn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return H.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=ta(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${ta(t.fields[a])}`;return r+"}"})(n.mapValue):G(61005,{value:n})}function Zr(n){switch(nn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ui(n);return e?16+Zr(e):16;case 5:return 2*n.stringValue.length;case 6:return tn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Zr(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return ln(s.fields,((i,a)=>{r+=i.length+Zr(a)})),r})(n.mapValue);default:throw G(13486,{value:n})}}function pu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function na(n){return!!n&&"integerValue"in n}function ja(n){return!!n&&"arrayValue"in n}function gu(n){return!!n&&"nullValue"in n}function _u(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ei(n){return!!n&&"mapValue"in n}function rv(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Md])==null?void 0:s.stringValue)===Ld}function Ws(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return ln(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ws(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ws(n.arrayValue.values[t]);return e}return{...n}}function iv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===sv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ei(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ws(t)}setAll(e){let t=Ne.emptyPath(),s={},r=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=Ws(a):r.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());ei(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];ei(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){ln(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Be(Ws(this.value))}}function Ud(n){const e=[];return ln(n.fields,((t,s)=>{const r=new Ne([t]);if(ei(s)){const i=Ud(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)})),new He(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,s,r,i,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new De(e,0,W.min(),W.min(),W.min(),Be.empty(),0)}static newFoundDocument(e,t,s,r){return new De(e,1,t,W.min(),s,r,0)}static newNoDocument(e,t){return new De(e,2,t,W.min(),W.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new De(e,3,t,W.min(),W.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){this.position=e,this.inclusive=t}}function yu(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(a.referenceValue),t.key):s=os(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function wu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!wt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t="asc"){this.field=e,this.dir=t}}function ov(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{}class ve extends Fd{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new cv(e,t,s):t==="array-contains"?new hv(e,s):t==="in"?new dv(e,s):t==="not-in"?new fv(e,s):t==="array-contains-any"?new mv(e,s):new ve(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new lv(e,s):new uv(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(os(t,this.value)):t!==null&&nn(this.value)===nn(t)&&this.matchesComparison(os(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class it extends Fd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new it(e,t)}matches(e){return Bd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Bd(n){return n.op==="and"}function qd(n){return av(n)&&Bd(n)}function av(n){for(const e of n.filters)if(e instanceof it)return!1;return!0}function sa(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+as(n.value);if(qd(n))return n.filters.map((e=>sa(e))).join(",");{const e=n.filters.map((t=>sa(t))).join(",");return`${n.op}(${e})`}}function $d(n,e){return n instanceof ve?(function(s,r){return r instanceof ve&&s.op===r.op&&s.field.isEqual(r.field)&&wt(s.value,r.value)})(n,e):n instanceof it?(function(s,r){return r instanceof it&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,a,c)=>i&&$d(a,r.filters[c])),!0):!1})(n,e):void G(19439)}function Hd(n){return n instanceof ve?(function(t){return`${t.field.canonicalString()} ${t.op} ${as(t.value)}`})(n):n instanceof it?(function(t){return t.op.toString()+" {"+t.getFilters().map(Hd).join(" ,")+"}"})(n):"Filter"}class cv extends ve{constructor(e,t,s){super(e,t,s),this.key=H.fromName(s.referenceValue)}matches(e){const t=H.comparator(e.key,this.key);return this.matchesComparison(t)}}class lv extends ve{constructor(e,t){super(e,"in",t),this.keys=zd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class uv extends ve{constructor(e,t){super(e,"not-in",t),this.keys=zd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function zd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>H.fromName(s.referenceValue)))}class hv extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ja(t)&&ir(t.arrayValue,this.value)}}class dv extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ir(this.value.arrayValue,t)}}class fv extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ir(this.value.arrayValue,t)}}class mv extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ja(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>ir(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t=null,s=[],r=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function bu(n,e=null,t=[],s=[],r=null,i=null,a=null){return new pv(n,e,t,s,r,i,a)}function Ma(n){const e=Q(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>sa(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Li(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>as(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>as(s))).join(",")),e.Te=t}return e.Te}function La(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ov(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$d(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!wu(n.startAt,e.startAt)&&wu(n.endAt,e.endAt)}function ra(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t=null,s=[],r=[],i=null,a="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function gv(n,e,t,s,r,i,a,c){return new ps(n,e,t,s,r,i,a,c)}function Ua(n){return new ps(n)}function vu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gd(n){return n.collectionGroup!==null}function Ks(n){const e=Q(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ie(Ne.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new or(i,s))})),t.has(Ne.keyField().canonicalString())||e.Ie.push(new or(Ne.keyField(),s))}return e.Ie}function mt(n){const e=Q(n);return e.Ee||(e.Ee=_v(e,Ks(n))),e.Ee}function _v(n,e){if(n.limitType==="F")return bu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new or(r.field,i)}));const t=n.endAt?new yi(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new yi(n.startAt.position,n.startAt.inclusive):null;return bu(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function ia(n,e){const t=n.filters.concat([e]);return new ps(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function oa(n,e,t){return new ps(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Fi(n,e){return La(mt(n),mt(e))&&n.limitType===e.limitType}function Wd(n){return`${Ma(mt(n))}|lt:${n.limitType}`}function Hn(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>Hd(r))).join(", ")}]`),Li(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>as(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>as(r))).join(",")),`Target(${s})`})(mt(n))}; limitType=${n.limitType})`}function Bi(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):H.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of Ks(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(a,c,h){const d=yu(a,c,h);return a.inclusive?d<=0:d<0})(s.startAt,Ks(s),r)||s.endAt&&!(function(a,c,h){const d=yu(a,c,h);return a.inclusive?d>=0:d>0})(s.endAt,Ks(s),r))})(n,e)}function yv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Kd(n){return(e,t)=>{let s=!1;for(const r of Ks(n)){const i=wv(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function wv(n,e,t){const s=n.field.isKeyField()?H.comparator(e.key,t.key):(function(i,a,c){const h=a.data.field(i),d=c.data.field(i);return h!==null&&d!==null?os(h,d):G(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return G(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ln(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return kd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=new de(H.comparator);function Nt(){return bv}const Qd=new de(H.comparator);function qs(...n){let e=Qd;for(const t of n)e=e.insert(t.key,t);return e}function Yd(n){let e=Qd;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function yn(){return Qs()}function Xd(){return Qs()}function Qs(){return new kn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const vv=new de(H.comparator),Ev=new Ie(H.comparator);function ee(...n){let e=Ev;for(const t of n)e=e.add(t);return e}const Tv=new Ie(Z);function Iv(){return Tv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pi(e)?"-0":e}}function Jd(n){return{integerValue:""+n}}function xv(n,e){return Jb(e)?Jd(e):Fa(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this._=void 0}}function Av(n,e,t){return n instanceof ar?(function(r,i){const a={fields:{[Vd]:{stringValue:Dd},[jd]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Oa(i)&&(i=Ui(i)),i&&(a.fields[Od]=i),{mapValue:a}})(t,e):n instanceof cr?ef(n,e):n instanceof lr?tf(n,e):(function(r,i){const a=Zd(r,i),c=Eu(a)+Eu(r.Ae);return na(a)&&na(r.Ae)?Jd(c):Fa(r.serializer,c)})(n,e)}function Rv(n,e,t){return n instanceof cr?ef(n,e):n instanceof lr?tf(n,e):t}function Zd(n,e){return n instanceof wi?(function(s){return na(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class ar extends qi{}class cr extends qi{constructor(e){super(),this.elements=e}}function ef(n,e){const t=nf(e);for(const s of n.elements)t.some((r=>wt(r,s)))||t.push(s);return{arrayValue:{values:t}}}class lr extends qi{constructor(e){super(),this.elements=e}}function tf(n,e){let t=nf(e);for(const s of n.elements)t=t.filter((r=>!wt(r,s)));return{arrayValue:{values:t}}}class wi extends qi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Eu(n){return _e(n.integerValue||n.doubleValue)}function nf(n){return ja(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t){this.field=e,this.transform=t}}function Nv(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof cr&&r instanceof cr||s instanceof lr&&r instanceof lr?is(s.elements,r.elements,wt):s instanceof wi&&r instanceof wi?wt(s.Ae,r.Ae):s instanceof ar&&r instanceof ar})(n.transform,e.transform)}class Cv{constructor(e,t){this.version=e,this.transformResults=t}}class nt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nt}static exists(e){return new nt(void 0,e)}static updateTime(e){return new nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ti(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $i{}function sf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new of(n.key,nt.none()):new _r(n.key,n.data,nt.none());{const t=n.data,s=Be.empty();let r=new Ie(Ne.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new un(n.key,s,new He(r.toArray()),nt.none())}}function kv(n,e,t){n instanceof _r?(function(r,i,a){const c=r.value.clone(),h=Iu(r.fieldTransforms,i,a.transformResults);c.setAll(h),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof un?(function(r,i,a){if(!ti(r.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Iu(r.fieldTransforms,i,a.transformResults),h=i.data;h.setAll(rf(r)),h.setAll(c),i.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,e,t):(function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Ys(n,e,t,s){return n instanceof _r?(function(i,a,c,h){if(!ti(i.precondition,a))return c;const d=i.value.clone(),m=xu(i.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,s):n instanceof un?(function(i,a,c,h){if(!ti(i.precondition,a))return c;const d=xu(i.fieldTransforms,h,a),m=a.data;return m.setAll(rf(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,e,t,s):(function(i,a,c){return ti(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function Pv(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Zd(s.transform,r||null);i!=null&&(t===null&&(t=Be.empty()),t.set(s.field,i))}return t||null}function Tu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&is(s,r,((i,a)=>Nv(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class _r extends $i{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class un extends $i{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rf(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Iu(n,e,t){const s=new Map;se(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,c=e.data.field(i.field);s.set(i.field,Rv(a,c,t[r]))}return s}function xu(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,Av(i,a,e))}return s}class of extends $i{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dv extends $i{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&kv(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ys(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ys(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Xd();return this.mutations.forEach((r=>{const i=e.get(r.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(r.key)?null:c;const h=sf(a,c);h!==null&&s.set(r.key,h),a.isValidDocument()||a.convertToNoDocument(W.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ee())}isEqual(e){return this.batchId===e.batchId&&is(this.mutations,e.mutations,((t,s)=>Tu(t,s)))&&is(this.baseMutations,e.baseMutations,((t,s)=>Tu(t,s)))}}class Ba{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){se(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return vv})();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new Ba(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we,te;function Mv(n){switch(n){case N.OK:return G(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return G(15467,{code:n})}}function af(n){if(n===void 0)return St("GRPC error has no .code"),N.UNKNOWN;switch(n){case we.OK:return N.OK;case we.CANCELLED:return N.CANCELLED;case we.UNKNOWN:return N.UNKNOWN;case we.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case we.INTERNAL:return N.INTERNAL;case we.UNAVAILABLE:return N.UNAVAILABLE;case we.UNAUTHENTICATED:return N.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case we.NOT_FOUND:return N.NOT_FOUND;case we.ALREADY_EXISTS:return N.ALREADY_EXISTS;case we.PERMISSION_DENIED:return N.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case we.ABORTED:return N.ABORTED;case we.OUT_OF_RANGE:return N.OUT_OF_RANGE;case we.UNIMPLEMENTED:return N.UNIMPLEMENTED;case we.DATA_LOSS:return N.DATA_LOSS;default:return G(39323,{code:n})}}(te=we||(we={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=new Yt([4294967295,4294967295],0);function Au(n){const e=Lv().encode(n),t=new bd;return t.update(e),new Uint8Array(t.digest())}function Ru(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Yt([t,s],0),new Yt([r,i],0)]}class qa{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new $s(`Invalid padding: ${t}`);if(s<0)throw new $s(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new $s(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new $s(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Yt.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(Yt.fromNumber(s)));return r.compare(Uv)===1&&(r=new Yt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Au(e),[s,r]=Ru(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new qa(i,r,t);return s.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=Au(e),[s,r]=Ru(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class $s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,yr.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Hi(W.min(),r,new de(Z),Nt(),ee())}}class yr{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new yr(s,t,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class cf{constructor(e,t){this.targetId=e,this.Ce=t}}class lf{constructor(e,t,s=Ce.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Su{constructor(){this.ve=0,this.Fe=Nu(),this.Me=Ce.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ee(),t=ee(),s=ee();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:G(38017,{changeType:i})}})),new yr(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Nu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,se(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Fv{constructor(e){this.Ge=e,this.ze=new Map,this.je=Nt(),this.Je=$r(),this.He=$r(),this.Ye=new de(Z)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:G(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(ra(i))if(s===0){const a=new H(i.path);this.et(t,a,De.newNoDocument(a,W.min()))}else se(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const c=this.ut(e),h=c?this.ct(c,e,a):1;if(h!==0){this.it(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,c;try{a=tn(s).toUint8Array()}catch(h){if(h instanceof Pd)return rs("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new qa(a,r,i)}catch(h){return rs(h instanceof $s?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&ra(c.target)){const h=new H(c.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,De.newNoDocument(h,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let s=ee();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const r=new Hi(e,t,this.Ye,this.je,s);return this.je=Nt(),this.Je=$r(),this.He=$r(),this.Ye=new de(Z),r}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Su,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ie(Z),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ie(Z),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Su),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function $r(){return new de(H.comparator)}function Nu(){return new de(H.comparator)}const Bv={asc:"ASCENDING",desc:"DESCENDING"},qv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$v={and:"AND",or:"OR"};class Hv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function aa(n,e){return n.useProto3Json||Li(e)?e:{value:e}}function bi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function zv(n,e){return bi(n,e.toTimestamp())}function pt(n){return se(!!n,49232),W.fromTimestamp((function(t){const s=en(t);return new ae(s.seconds,s.nanos)})(n))}function $a(n,e){return ca(n,e).canonicalString()}function ca(n,e){const t=(function(r){return new oe(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function hf(n){const e=oe.fromString(n);return se(gf(e),10190,{key:e.toString()}),e}function la(n,e){return $a(n.databaseId,e.path)}function Vo(n,e){const t=hf(e);if(t.get(1)!==n.databaseId.projectId)throw new j(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(ff(t))}function df(n,e){return $a(n.databaseId,e)}function Gv(n){const e=hf(n);return e.length===4?oe.emptyPath():ff(e)}function ua(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ff(n){return se(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Cu(n,e,t){return{name:la(n,e),fields:t.value.mapValue.fields}}function Wv(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(d,m){return d.useProto3Json?(se(m===void 0||typeof m=="string",58123),Ce.fromBase64String(m||"")):(se(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Ce.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(d){const m=d.code===void 0?N.UNKNOWN:af(d.code);return new j(m,d.message||"")})(a);t=new lf(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Vo(n,s.document.name),i=pt(s.document.updateTime),a=s.document.createTime?pt(s.document.createTime):W.min(),c=new Be({mapValue:{fields:s.document.fields}}),h=De.newFoundDocument(r,i,a,c),d=s.targetIds||[],m=s.removedTargetIds||[];t=new ni(d,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Vo(n,s.document),i=s.readTime?pt(s.readTime):W.min(),a=De.newNoDocument(r,i),c=s.removedTargetIds||[];t=new ni([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Vo(n,s.document),i=s.removedTargetIds||[];t=new ni([],i,r,null)}else{if(!("filter"in e))return G(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new jv(r,i),c=s.targetId;t=new cf(c,a)}}return t}function Kv(n,e){let t;if(e instanceof _r)t={update:Cu(n,e.key,e.value)};else if(e instanceof of)t={delete:la(n,e.key)};else if(e instanceof un)t={update:Cu(n,e.key,e.data),updateMask:sE(e.fieldMask)};else{if(!(e instanceof Dv))return G(16599,{Vt:e.type});t={verify:la(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,a){const c=a.transform;if(c instanceof ar)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof cr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof lr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof wi)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw G(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:zv(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G(27497)})(n,e.precondition)),t}function Qv(n,e){return n&&n.length>0?(se(e!==void 0,14353),n.map((t=>(function(r,i){let a=r.updateTime?pt(r.updateTime):pt(i);return a.isEqual(W.min())&&(a=pt(i)),new Cv(a,r.transformResults||[])})(t,e)))):[]}function Yv(n,e){return{documents:[df(n,e.path)]}}function Xv(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=df(n,r);const i=(function(d){if(d.length!==0)return pf(it.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((m=>(function(y){return{field:zn(y.field),direction:eE(y.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=aa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:r}}function Jv(n){let e=Gv(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){se(s===1,65062);const m=t.from[0];m.allDescendants?r=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(g){const y=mf(g);return y instanceof it&&qd(y)?y.getFilters():[y]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((y=>(function(S){return new or(Gn(S.field),(function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(y)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let y;return y=typeof g=="object"?g.value:g,Li(y)?null:y})(t.limit));let h=null;t.startAt&&(h=(function(g){const y=!!g.before,A=g.values||[];return new yi(A,y)})(t.startAt));let d=null;return t.endAt&&(d=(function(g){const y=!g.before,A=g.values||[];return new yi(A,y)})(t.endAt)),gv(e,r,a,i,c,"F",h,d)}function Zv(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Gn(t.unaryFilter.field);return ve.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Gn(t.unaryFilter.field);return ve.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Gn(t.unaryFilter.field);return ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Gn(t.unaryFilter.field);return ve.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ve.create(Gn(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return it.create(t.compositeFilter.filters.map((s=>mf(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return G(1026)}})(t.compositeFilter.op))})(n):G(30097,{filter:n})}function eE(n){return Bv[n]}function tE(n){return qv[n]}function nE(n){return $v[n]}function zn(n){return{fieldPath:n.canonicalString()}}function Gn(n){return Ne.fromServerFormat(n.fieldPath)}function pf(n){return n instanceof ve?(function(t){if(t.op==="=="){if(_u(t.value))return{unaryFilter:{field:zn(t.field),op:"IS_NAN"}};if(gu(t.value))return{unaryFilter:{field:zn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_u(t.value))return{unaryFilter:{field:zn(t.field),op:"IS_NOT_NAN"}};if(gu(t.value))return{unaryFilter:{field:zn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zn(t.field),op:tE(t.op),value:t.value}}})(n):n instanceof it?(function(t){const s=t.getFilters().map((r=>pf(r)));return s.length===1?s[0]:{compositeFilter:{op:nE(t.op),filters:s}}})(n):G(54877,{filter:n})}function sE(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function gf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,s,r,i=W.min(),a=W.min(),c=Ce.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new zt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.yt=e}}function iE(n){const e=Jv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?oa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.Cn=new aE}addToCollectionParentIndex(e,t){return this.Cn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Zt.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Zt.min())}updateCollectionGroup(e,t,s){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class aE{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Ie(oe.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ie(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_f=41943040;class Ue{static withCacheSize(e){return new Ue(e,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue.DEFAULT_COLLECTION_PERCENTILE=10,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ue.DEFAULT=new Ue(_f,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ue.DISABLED=new Ue(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new cs(0)}static cr(){return new cs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="LruGarbageCollector",cE=1048576;function Du([n,e],[t,s]){const r=Z(n,t);return r===0?Z(e,s):r}class lE{constructor(e){this.Ir=e,this.buffer=new Ie(Du),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Du(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class uE{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){L(Pu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ms(t)?L(Pu,"Ignoring IndexedDB error during garbage collection: ",t):await fs(t)}await this.Vr(3e5)}))}}class hE{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Mi.ce);const s=new lE(t);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(ku)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ku):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,r,i,a,c,h,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),r=this.params.maximumSequenceNumbersToCollect):r=g,a=Date.now(),this.nthSequenceNumber(e,r)))).next((g=>(s=g,c=Date.now(),this.removeTargets(e,s,t)))).next((g=>(i=g,h=Date.now(),this.removeOrphanedDocuments(e,s)))).next((g=>(d=Date.now(),$n()<=J.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${i} targets in `+(h-c)+`ms
	Removed ${g} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:g}))))}}function dE(n,e){return new hE(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.changes=new kn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?k.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Ys(s.mutation,r,He.empty(),ae.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,ee()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=ee()){const r=yn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let a=qs();return i.forEach(((c,h)=>{a=a.insert(c,h.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=yn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,ee())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,s,r){let i=Nt();const a=Qs(),c=(function(){return Qs()})();return t.forEach(((h,d)=>{const m=s.get(d.key);r.has(d.key)&&(m===void 0||m.mutation instanceof un)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Ys(m.mutation,d,m.mutation.getFieldMask(),ae.now())):a.set(d.key,He.empty())})),this.recalculateAndSaveOverlays(e,i).next((h=>(h.forEach(((d,m)=>a.set(d,m))),t.forEach(((d,m)=>c.set(d,new mE(m,a.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=Qs();let r=new de(((a,c)=>a-c)),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((h=>{const d=t.get(h);if(d===null)return;let m=s.get(h)||He.empty();m=c.applyToLocalView(d,m),s.set(h,m);const g=(r.get(c.batchId)||ee()).add(h);r=r.insert(c.batchId,g)}))})).next((()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,g=Xd();m.forEach((y=>{if(!i.has(y)){const A=sf(t.get(y),s.get(y));A!==null&&g.set(y,A),i=i.add(y)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return k.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return(function(a){return H.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):k.resolve(yn());let c=nr,h=i;return a.next((d=>k.forEach(d,((m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(m)?k.resolve():this.remoteDocumentCache.getEntry(e,m).next((y=>{h=h.insert(m,y)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,h,d,ee()))).next((m=>({batchId:c,changes:Yd(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next((s=>{let r=qs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=qs();return this.indexManager.getCollectionParents(e,i).next((c=>k.forEach(c,(h=>{const d=(function(g,y){return new ps(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,h.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next((m=>{m.forEach(((g,y)=>{a=a.insert(g,y)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((a=>{i.forEach(((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,De.newInvalidDocument(m)))}));let c=qs();return a.forEach(((h,d)=>{const m=i.get(h);m!==void 0&&Ys(m.mutation,d,He.empty(),ae.now()),Bi(t,d)&&(c=c.insert(h,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return k.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:pt(r.createTime)}})(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(r){return{name:r.name,query:iE(r.bundledQuery),readTime:pt(r.readTime)}})(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.overlays=new de(H.comparator),this.qr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const s=yn();return k.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.St(e,t,i)})),k.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(s)),k.resolve()}getOverlaysForCollection(e,t,s){const r=yn(),i=t.length+1,a=new H(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&h.largestBatchId>s&&r.set(h.getKey(),h)}return k.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new de(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let m=i.get(d.largestBatchId);m===null&&(m=yn(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=yn(),h=i.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=r)););return k.resolve(c)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new Ov(t,s));let i=this.qr.get(t);i===void 0&&(i=ee(),this.qr.set(t,i)),this.qr.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(){this.sessionToken=Ce.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.Qr=new Ie(Ae.$r),this.Ur=new Ie(Ae.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Ae(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Ae(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new H(new oe([])),s=new Ae(t,e),r=new Ae(t,e+1),i=[];return this.Ur.forEachInRange([s,r],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new H(new oe([])),s=new Ae(t,e),r=new Ae(t,e+1);let i=ee();return this.Ur.forEachInRange([s,r],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Ae(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ae{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return H.comparator(e.key,t.key)||Z(e.Yr,t.Yr)}static Kr(e,t){return Z(e.Yr,t.Yr)||H.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ie(Ae.$r)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Vv(i,t,s,r);this.mutationQueue.push(a);for(const c of r)this.Zr=this.Zr.add(new Ae(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ei(s),i=r<0?0:r;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Va:this.tr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ae(t,0),r=new Ae(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],(a=>{const c=this.Xr(a.Yr);i.push(c)})),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ie(Z);return t.forEach((r=>{const i=new Ae(r,0),a=new Ae(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(c=>{s=s.add(c.Yr)}))})),k.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const a=new Ae(new H(i),0);let c=new Ie(Z);return this.Zr.forEachWhile((h=>{const d=h.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(c=c.add(h.Yr)),!0)}),a),k.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){se(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return k.forEach(t.mutations,(r=>{const i=new Ae(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Ae(t,0),r=this.Zr.firstAfterOrEqual(s);return k.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.ri=e,this.docs=(function(){return new de(H.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return k.resolve(s?s.document.mutableCopy():De.newInvalidDocument(t))}getEntries(e,t){let s=Nt();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():De.newInvalidDocument(r))})),k.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=Nt();const a=t.path,c=new H(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Kb(Wb(m),s)<=0||(r.has(m.key)||Bi(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,s,r){G(9500)}ii(e,t){return k.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new vE(this)}getSize(e){return k.resolve(this.size)}}class vE extends fE{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),k.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.persistence=e,this.si=new kn((t=>Ma(t)),La),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.oi=0,this._i=new Ha,this.targetCount=0,this.ai=cs.ur()}forEachTarget(e,t){return this.si.forEach(((s,r)=>t(r))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),k.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new cs(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Pr(t),k.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),k.waitFor(i).next((()=>r))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return k.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),k.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((a=>{i.push(r.markPotentiallyOrphaned(e,a))})),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return k.resolve(s)}containsKey(e,t){return k.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t){this.ui={},this.overlays={},this.ci=new Mi(0),this.li=!1,this.li=!0,this.hi=new yE,this.referenceDelegate=e(this),this.Pi=new EE(this),this.indexManager=new oE,this.remoteDocumentCache=(function(r){return new bE(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new rE(t),this.Ii=new gE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _E,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new wE(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){L("MemoryPersistence","Starting transaction:",e);const r=new TE(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,t){return k.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class TE extends Yb{constructor(e){super(),this.currentSequenceNumber=e}}class za{constructor(e){this.persistence=e,this.Ri=new Ha,this.Vi=null}static mi(e){return new za(e)}get fi(){if(this.Vi)return this.Vi;throw G(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),k.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.fi,(s=>{const r=H.fromPath(s);return this.gi(e,r).next((i=>{i||t.removeEntry(r,W.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return k.or([()=>k.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class vi{constructor(e,t){this.persistence=e,this.pi=new kn((s=>Zb(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=dE(this,t)}static mi(e,t){return new vi(e,t)}Ei(){}di(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return k.forEach(this.pi,((s,r)=>this.br(e,s,r).next((i=>i?k.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(a=>this.br(e,a,t).next((c=>{c||(s++,i.removeEntry(a,W.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),k.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),k.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zr(e.data.value)),t}br(e,t,s){return k.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.pi.get(t);return k.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=r}static As(e,t){let s=ee(),r=ee();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ga(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return e_()?8:Xb(Ve())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.ys(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,t,r,s).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new IE;return this.Ss(e,t,a).next((c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)}))})).next((()=>i.result))}bs(e,t,s,r){return s.documentReadCount<this.fs?($n()<=J.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Hn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),k.resolve()):($n()<=J.DEBUG&&L("QueryEngine","Query:",Hn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?($n()<=J.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Hn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mt(t))):k.resolve())}ys(e,t){if(vu(t))return k.resolve(null);let s=mt(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=oa(t,null,"F"),s=mt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const a=ee(...i);return this.ps.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,s).next((h=>{const d=this.Ds(t,c);return this.Cs(t,d,a,h.readTime)?this.ys(e,oa(t,null,"F")):this.vs(e,d,t,h)}))))})))))}ws(e,t,s,r){return vu(t)||r.isEqual(W.min())?k.resolve(null):this.ps.getDocuments(e,s).next((i=>{const a=this.Ds(t,i);return this.Cs(t,a,s,r)?k.resolve(null):($n()<=J.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Hn(t)),this.vs(e,a,t,Gb(r,nr)).next((c=>c)))}))}Ds(e,t){let s=new Ie(Kd(e));return t.forEach(((r,i)=>{Bi(e,i)&&(s=s.add(i))})),s}Cs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,s){return $n()<=J.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Hn(t)),this.ps.getDocumentsMatchingQuery(e,t,Zt.min(),s)}vs(e,t,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="LocalStore",AE=3e8;class RE{constructor(e,t,s,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new de(Z),this.xs=new kn((i=>Ma(i)),La),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pE(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function SE(n,e,t,s){return new RE(n,e,t,s)}async function wf(n,e){const t=Q(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const a=[],c=[];let h=ee();for(const d of r){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of i){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(s,h).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function NE(n,e){const t=Q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,h,d,m){const g=d.batch,y=g.keys();let A=k.resolve();return y.forEach((S=>{A=A.next((()=>m.getEntry(h,S))).next((P=>{const C=d.docVersions.get(S);se(C!==null,48541),P.version.compareTo(C)<0&&(g.applyToRemoteDocument(P,d),P.isValidDocument()&&(P.setReadTime(d.commitVersion),m.addEntry(P)))}))})),A.next((()=>c.mutationQueue.removeMutationBatch(h,g)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let h=ee();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function bf(n){const e=Q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function CE(n,e){const t=Q(n),s=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});r=t.Ms;const c=[];e.targetChanges.forEach(((m,g)=>{const y=r.get(g);if(!y)return;c.push(t.Pi.removeMatchingKeys(i,m.removedDocuments,g).next((()=>t.Pi.addMatchingKeys(i,m.addedDocuments,g))));let A=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?A=A.withResumeToken(Ce.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):m.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(m.resumeToken,s)),r=r.insert(g,A),(function(P,C,F){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=AE?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0})(y,A,m)&&c.push(t.Pi.updateTargetData(i,A))}));let h=Nt(),d=ee();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),c.push(kE(i,a,e.documentUpdates).next((m=>{h=m.ks,d=m.qs}))),!s.isEqual(W.min())){const m=t.Pi.getLastRemoteSnapshotVersion(i).next((g=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s)));c.push(m)}return k.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,h,d))).next((()=>h))})).then((i=>(t.Ms=r,i)))}function kE(n,e,t){let s=ee(),r=ee();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let a=Nt();return t.forEach(((c,h)=>{const d=i.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(c)),h.isNoDocument()&&h.version.isEqual(W.min())?(e.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(c,h)):L(Wa,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)})),{ks:a,qs:r}}))}function PE(n,e){const t=Q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Va),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function DE(n,e){const t=Q(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.Pi.getTargetData(s,e).next((i=>i?(r=i,k.resolve(r)):t.Pi.allocateTargetId(s).next((a=>(r=new zt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function ha(n,e,t){const s=Q(n),r=s.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(a=>s.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!ms(a))throw a;L(Wa,`Failed to update sequence numbers for target ${e}: ${a}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function Vu(n,e,t){const s=Q(n);let r=W.min(),i=ee();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,m){const g=Q(h),y=g.xs.get(m);return y!==void 0?k.resolve(g.Ms.get(y)):g.Pi.getTargetData(d,m)})(s,a,mt(e)).next((c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(a,c.targetId).next((h=>{i=h}))})).next((()=>s.Fs.getDocumentsMatchingQuery(a,e,t?r:W.min(),t?i:ee()))).next((c=>(VE(s,yv(e),c),{documents:c,Qs:i})))))}function VE(n,e,t){let s=n.Os.get(e)||W.min();t.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),n.Os.set(e,s)}class Ou{constructor(){this.activeTargetIds=Iv()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OE{constructor(){this.Mo=new Ou,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ou,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="ConnectivityMonitor";class Mu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){L(ju,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){L(ju,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr=null;function da(){return Hr===null?Hr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Hr++,"0x"+Hr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="RestConnection",ME={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class LE{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===gi?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,t,s,r,i){const a=da(),c=this.zo(e,t.toUriEncodedString());L(Oo,`Sending RPC '${e}' ${a}:`,c,s);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,r,i);const{host:d}=new URL(c),m=on(d);return this.Jo(e,c,h,s,m).then((g=>(L(Oo,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw rs(Oo,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",s),g}))}Ho(e,t,s,r,i,a){return this.Go(e,t,s,r,i)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ds})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}zo(e,t){const s=ME[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="WebChannelConnection";class FE extends LE{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,r,i){const a=da();return new Promise(((c,h)=>{const d=new vd;d.setWithCredentials(!0),d.listenOnce(Ed.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Jr.NO_ERROR:const g=d.getResponseJson();L(ke,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case Jr.TIMEOUT:L(ke,`RPC '${e}' ${a} timed out`),h(new j(N.DEADLINE_EXCEEDED,"Request time out"));break;case Jr.HTTP_ERROR:const y=d.getStatus();if(L(ke,`RPC '${e}' ${a} failed with status:`,y,"response text:",d.getResponseText()),y>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A==null?void 0:A.error;if(S&&S.status&&S.message){const P=(function(F){const U=F.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(U)>=0?U:N.UNKNOWN})(S.status);h(new j(P,S.message))}else h(new j(N.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new j(N.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{L(ke,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(r);L(ke,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",m,s,15)}))}T_(e,t,s){const r=da(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=xd(),c=Id(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,s),h.encodeInitMessageHeaders=!0;const m=i.join("");L(ke,`Creating RPC '${e}' stream ${r}: ${m}`,h);const g=a.createWebChannel(m,h);this.I_(g);let y=!1,A=!1;const S=new UE({Yo:C=>{A?L(ke,`Not sending because RPC '${e}' stream ${r} is closed:`,C):(y||(L(ke,`Opening RPC '${e}' stream ${r} transport.`),g.open(),y=!0),L(ke,`RPC '${e}' stream ${r} sending:`,C),g.send(C))},Zo:()=>g.close()}),P=(C,F,U)=>{C.listen(F,(D=>{try{U(D)}catch(M){setTimeout((()=>{throw M}),0)}}))};return P(g,Bs.EventType.OPEN,(()=>{A||(L(ke,`RPC '${e}' stream ${r} transport opened.`),S.o_())})),P(g,Bs.EventType.CLOSE,(()=>{A||(A=!0,L(ke,`RPC '${e}' stream ${r} transport closed`),S.a_(),this.E_(g))})),P(g,Bs.EventType.ERROR,(C=>{A||(A=!0,rs(ke,`RPC '${e}' stream ${r} transport errored. Name:`,C.name,"Message:",C.message),S.a_(new j(N.UNAVAILABLE,"The operation could not be completed")))})),P(g,Bs.EventType.MESSAGE,(C=>{var F;if(!A){const U=C.data[0];se(!!U,16349);const D=U,M=(D==null?void 0:D.error)||((F=D[0])==null?void 0:F.error);if(M){L(ke,`RPC '${e}' stream ${r} received error:`,M);const O=M.status;let B=(function(b){const T=we[b];if(T!==void 0)return af(T)})(O),v=M.message;B===void 0&&(B=N.INTERNAL,v="Unknown error status: "+O+" with message "+M.message),A=!0,S.a_(new j(B,v)),g.close()}else L(ke,`RPC '${e}' stream ${r} received:`,U),S.u_(U)}})),P(c,Td.STAT_EVENT,(C=>{C.stat===Zo.PROXY?L(ke,`RPC '${e}' stream ${r} detected buffering proxy`):C.stat===Zo.NOPROXY&&L(ke,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{S.__()}),0),S}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function jo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n){return new Hv(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&L("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="PersistentStream";class Ef{constructor(e,t,s,r,i,a,c,h){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new vf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(St(t.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new j(N.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return L(Lu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(L(Lu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class BE extends Ef{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Wv(this.serializer,e),s=(function(i){if(!("targetChange"in i))return W.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?pt(a.readTime):W.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=ua(this.serializer),t.addTarget=(function(i,a){let c;const h=a.target;if(c=ra(h)?{documents:Yv(i,h)}:{query:Xv(i,h).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=uf(i,a.resumeToken);const d=aa(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(W.min())>0){c.readTime=bi(i,a.snapshotVersion.toTimestamp());const d=aa(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const s=Zv(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=ua(this.serializer),t.removeTarget=e,this.q_(t)}}class qE extends Ef{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Qv(e.writeResults,e.commitTime),s=pt(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=ua(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Kv(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{}class HE extends $E{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new j(N.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,ca(t,s),r,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(N.UNKNOWN,i.toString())}))}Ho(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(e,ca(t,s),r,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(N.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class zE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(St(t),this.aa=!1):L("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="RemoteStore";class GE{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{s.enqueueAndForget((async()=>{Pn(this)&&(L(In,"Restarting streams for network reachability change."),await(async function(h){const d=Q(h);d.Ea.add(4),await wr(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Gi(d)})(this))}))})),this.Ra=new zE(s,r)}}async function Gi(n){if(Pn(n))for(const e of n.da)await e(!0)}async function wr(n){for(const e of n.da)await e(!1)}function Tf(n,e){const t=Q(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Xa(t)?Ya(t):gs(t).O_()&&Qa(t,e))}function Ka(n,e){const t=Q(n),s=gs(t);t.Ia.delete(e),s.O_()&&If(t,e),t.Ia.size===0&&(s.O_()?s.L_():Pn(t)&&t.Ra.set("Unknown"))}function Qa(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gs(n).Y_(e)}function If(n,e){n.Va.Ue(e),gs(n).Z_(e)}function Ya(n){n.Va=new Fv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),gs(n).start(),n.Ra.ua()}function Xa(n){return Pn(n)&&!gs(n).x_()&&n.Ia.size>0}function Pn(n){return Q(n).Ea.size===0}function xf(n){n.Va=void 0}async function WE(n){n.Ra.set("Online")}async function KE(n){n.Ia.forEach(((e,t)=>{Qa(n,e)}))}async function QE(n,e){xf(n),Xa(n)?(n.Ra.ha(e),Ya(n)):n.Ra.set("Unknown")}async function YE(n,e,t){if(n.Ra.set("Online"),e instanceof lf&&e.state===2&&e.cause)try{await(async function(r,i){const a=i.cause;for(const c of i.targetIds)r.Ia.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Ia.delete(c),r.Va.removeTarget(c))})(n,e)}catch(s){L(In,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ei(n,s)}else if(e instanceof ni?n.Va.Ze(e):e instanceof cf?n.Va.st(e):n.Va.tt(e),!t.isEqual(W.min()))try{const s=await bf(n.localStore);t.compareTo(s)>=0&&await(function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=i.Ia.get(d);m&&i.Ia.set(d,m.withResumeToken(h.resumeToken,a))}})),c.targetMismatches.forEach(((h,d)=>{const m=i.Ia.get(h);if(!m)return;i.Ia.set(h,m.withResumeToken(Ce.EMPTY_BYTE_STRING,m.snapshotVersion)),If(i,h);const g=new zt(m.target,h,d,m.sequenceNumber);Qa(i,g)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){L(In,"Failed to raise snapshot:",s),await Ei(n,s)}}async function Ei(n,e,t){if(!ms(e))throw e;n.Ea.add(1),await wr(n),n.Ra.set("Offline"),t||(t=()=>bf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(In,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Gi(n)}))}function Af(n,e){return e().catch((t=>Ei(n,t,e)))}async function Wi(n){const e=Q(n),t=sn(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Va;for(;XE(e);)try{const r=await PE(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,JE(e,r)}catch(r){await Ei(e,r)}Rf(e)&&Sf(e)}function XE(n){return Pn(n)&&n.Ta.length<10}function JE(n,e){n.Ta.push(e);const t=sn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Rf(n){return Pn(n)&&!sn(n).x_()&&n.Ta.length>0}function Sf(n){sn(n).start()}async function ZE(n){sn(n).ra()}async function e0(n){const e=sn(n);for(const t of n.Ta)e.ea(t.mutations)}async function t0(n,e,t){const s=n.Ta.shift(),r=Ba.from(s,e,t);await Af(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await Wi(n)}async function n0(n,e){e&&sn(n).X_&&await(async function(s,r){if((function(a){return Mv(a)&&a!==N.ABORTED})(r.code)){const i=s.Ta.shift();sn(s).B_(),await Af(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Wi(s)}})(n,e),Rf(n)&&Sf(n)}async function Uu(n,e){const t=Q(n);t.asyncQueue.verifyOperationInProgress(),L(In,"RemoteStore received new credentials");const s=Pn(t);t.Ea.add(3),await wr(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Gi(t)}async function s0(n,e){const t=Q(n);e?(t.Ea.delete(2),await Gi(t)):e||(t.Ea.add(2),await wr(t),t.Ra.set("Unknown"))}function gs(n){return n.ma||(n.ma=(function(t,s,r){const i=Q(t);return i.sa(),new BE(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Xo:WE.bind(null,n),t_:KE.bind(null,n),r_:QE.bind(null,n),H_:YE.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Xa(n)?Ya(n):n.Ra.set("Unknown")):(await n.ma.stop(),xf(n))}))),n.ma}function sn(n){return n.fa||(n.fa=(function(t,s,r){const i=Q(t);return i.sa(),new qE(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:ZE.bind(null,n),r_:n0.bind(null,n),ta:e0.bind(null,n),na:t0.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Wi(n)):(await n.fa.stop(),n.Ta.length>0&&(L(In,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,c=new Ja(e,t,a,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Za(n,e){if(St("AsyncQueue",`${e}: ${n}`),ms(n))return new j(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{static emptySet(e){return new Zn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||H.comparator(t.key,s.key):(t,s)=>H.comparator(t.key,s.key),this.keyedMap=qs(),this.sortedSet=new de(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Zn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this.ga=new de(H.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):G(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class ls{constructor(e,t,s,r,i,a,c,h,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new ls(e,t,Zn.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class i0{constructor(){this.queries=Bu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=Q(t),i=r.queries;r.queries=Bu(),i.forEach(((a,c)=>{for(const h of c.Sa)h.onError(s)}))})(this,new j(N.ABORTED,"Firestore shutting down"))}}function Bu(){return new kn((n=>Wd(n)),Fi)}async function Nf(n,e){const t=Q(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new r0,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=Za(a,`Initialization of query '${Hn(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&ec(t)}async function Cf(n,e){const t=Q(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function o0(n,e){const t=Q(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(r)&&(s=!0);a.wa=r}}s&&ec(t)}function a0(n,e,t){const s=Q(n),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(t);s.queries.delete(e)}function ec(n){n.Ca.forEach((e=>{e.next()}))}var fa,qu;(qu=fa||(fa={})).Ma="default",qu.Cache="cache";class kf{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ls(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==fa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this.key=e}}class Df{constructor(e){this.key=e}}class c0{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ee(),this.mutatedKeys=ee(),this.eu=Kd(e),this.tu=new Zn(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Fu,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const h=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((m,g)=>{const y=r.get(m),A=Bi(this.query,g)?g:null,S=!!y&&this.mutatedKeys.has(y.key),P=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let C=!1;y&&A?y.data.isEqual(A.data)?S!==P&&(s.track({type:3,doc:A}),C=!0):this.su(y,A)||(s.track({type:2,doc:A}),C=!0,(h&&this.eu(A,h)>0||d&&this.eu(A,d)<0)&&(c=!0)):!y&&A?(s.track({type:0,doc:A}),C=!0):y&&!A&&(s.track({type:1,doc:y}),C=!0,(h||d)&&(c=!0)),C&&(A?(a=a.add(A),i=P?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),s.track({type:1,doc:m})}return{tu:a,iu:s,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((m,g)=>(function(A,S){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Rt:C})}};return P(A)-P(S)})(m.type,g.type)||this.eu(m.doc,g.doc))),this.ou(s),r=r??!1;const c=t&&!r?this._u():[],h=this.Xa.size===0&&this.current&&!r?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new ls(this.query,e.tu,i,a,e.mutatedKeys,h===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Fu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ee(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new Df(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new Pf(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=ee();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ls.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const tc="SyncEngine";class l0{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class u0{constructor(e){this.key=e,this.hu=!1}}class h0{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new kn((c=>Wd(c)),Fi),this.Iu=new Map,this.Eu=new Set,this.du=new de(H.comparator),this.Au=new Map,this.Ru=new Ha,this.Vu={},this.mu=new Map,this.fu=cs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function d0(n,e,t=!0){const s=Uf(n);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Vf(s,e,t,!0),r}async function f0(n,e){const t=Uf(n);await Vf(t,e,!0,!1)}async function Vf(n,e,t,s){const r=await DE(n.localStore,mt(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return s&&(c=await m0(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Tf(n.remoteStore,r),c}async function m0(n,e,t,s,r){n.pu=(g,y,A)=>(async function(P,C,F,U){let D=C.view.ru(F);D.Cs&&(D=await Vu(P.localStore,C.query,!1).then((({documents:v})=>C.view.ru(v,D))));const M=U&&U.targetChanges.get(C.targetId),O=U&&U.targetMismatches.get(C.targetId)!=null,B=C.view.applyChanges(D,P.isPrimaryClient,M,O);return Hu(P,C.targetId,B.au),B.snapshot})(n,g,y,A);const i=await Vu(n.localStore,e,!0),a=new c0(e,i.Qs),c=a.ru(i.documents),h=yr.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),d=a.applyChanges(c,n.isPrimaryClient,h);Hu(n,t,d.au);const m=new l0(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function p0(n,e,t){const s=Q(n),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter((a=>!Fi(a,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await ha(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Ka(s.remoteStore,r.targetId),ma(s,r.targetId)})).catch(fs)):(ma(s,r.targetId),await ha(s.localStore,r.targetId,!0))}async function g0(n,e){const t=Q(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Ka(t.remoteStore,s.targetId))}async function _0(n,e,t){const s=I0(n);try{const r=await(function(a,c){const h=Q(a),d=ae.now(),m=c.reduce(((A,S)=>A.add(S.key)),ee());let g,y;return h.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let S=Nt(),P=ee();return h.Ns.getEntries(A,m).next((C=>{S=C,S.forEach(((F,U)=>{U.isValidDocument()||(P=P.add(F))}))})).next((()=>h.localDocuments.getOverlayedDocuments(A,S))).next((C=>{g=C;const F=[];for(const U of c){const D=Pv(U,g.get(U.key).overlayedDocument);D!=null&&F.push(new un(U.key,D,Ud(D.value.mapValue),nt.exists(!0)))}return h.mutationQueue.addMutationBatch(A,d,F,c)})).next((C=>{y=C;const F=C.applyToLocalDocumentSet(g,P);return h.documentOverlayCache.saveOverlays(A,C.batchId,F)}))})).then((()=>({batchId:y.batchId,changes:Yd(g)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,c,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new de(Z)),d=d.insert(c,h),a.Vu[a.currentUser.toKey()]=d})(s,r.batchId,t),await br(s,r.changes),await Wi(s.remoteStore)}catch(r){const i=Za(r,"Failed to persist write");t.reject(i)}}async function Of(n,e){const t=Q(n);try{const s=await CE(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const a=t.Au.get(i);a&&(se(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?se(a.hu,14607):r.removedDocuments.size>0&&(se(a.hu,42227),a.hu=!1))})),await br(t,s,e)}catch(s){await fs(s)}}function $u(n,e,t){const s=Q(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&r.push(c.snapshot)})),(function(a,c){const h=Q(a);h.onlineState=c;let d=!1;h.queries.forEach(((m,g)=>{for(const y of g.Sa)y.va(c)&&(d=!0)})),d&&ec(h)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function y0(n,e,t){const s=Q(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),i=r&&r.key;if(i){let a=new de(H.comparator);a=a.insert(i,De.newNoDocument(i,W.min()));const c=ee().add(i),h=new Hi(W.min(),new Map,new de(Z),a,c);await Of(s,h),s.du=s.du.remove(i),s.Au.delete(e),nc(s)}else await ha(s.localStore,e,!1).then((()=>ma(s,e,t))).catch(fs)}async function w0(n,e){const t=Q(n),s=e.batch.batchId;try{const r=await NE(t.localStore,e);Mf(t,s,null),jf(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await br(t,r)}catch(r){await fs(r)}}async function b0(n,e,t){const s=Q(n);try{const r=await(function(a,c){const h=Q(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next((g=>(se(g!==null,37113),m=g.keys(),h.mutationQueue.removeMutationBatch(d,g)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>h.localDocuments.getDocuments(d,m)))}))})(s.localStore,e);Mf(s,e,t),jf(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await br(s,r)}catch(r){await fs(r)}}function jf(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Mf(n,e,t){const s=Q(n);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function ma(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||Lf(n,s)}))}function Lf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ka(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),nc(n))}function Hu(n,e,t){for(const s of t)s instanceof Pf?(n.Ru.addReference(s.key,e),v0(n,s)):s instanceof Df?(L(tc,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||Lf(n,s.key)):G(19791,{wu:s})}function v0(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(L(tc,"New document in limbo: "+t),n.Eu.add(s),nc(n))}function nc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new H(oe.fromString(e)),s=n.fu.next();n.Au.set(s,new u0(t)),n.du=n.du.insert(t,s),Tf(n.remoteStore,new zt(mt(Ua(t.path)),s,"TargetPurposeLimboResolution",Mi.ce))}}async function br(n,e,t){const s=Q(n),r=[],i=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,h)=>{a.push(s.pu(h,e,t).then((d=>{var m;if((d||t)&&s.isPrimaryClient){const g=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(h.targetId,g?"current":"not-current")}if(d){r.push(d);const g=Ga.As(h.targetId,d);i.push(g)}})))})),await Promise.all(a),s.Pu.H_(r),await(async function(h,d){const m=Q(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>k.forEach(d,(y=>k.forEach(y.Es,(A=>m.persistence.referenceDelegate.addReference(g,y.targetId,A))).next((()=>k.forEach(y.ds,(A=>m.persistence.referenceDelegate.removeReference(g,y.targetId,A)))))))))}catch(g){if(!ms(g))throw g;L(Wa,"Failed to update sequence numbers: "+g)}for(const g of d){const y=g.targetId;if(!g.fromCache){const A=m.Ms.get(y),S=A.snapshotVersion,P=A.withLastLimboFreeSnapshotVersion(S);m.Ms=m.Ms.insert(y,P)}}})(s.localStore,i))}async function E0(n,e){const t=Q(n);if(!t.currentUser.isEqual(e)){L(tc,"User change. New user:",e.toKey());const s=await wf(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((c=>{c.forEach((h=>{h.reject(new j(N.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await br(t,s.Ls)}}function T0(n,e){const t=Q(n),s=t.Au.get(e);if(s&&s.hu)return ee().add(s.key);{let r=ee();const i=t.Iu.get(e);if(!i)return r;for(const a of i){const c=t.Tu.get(a);r=r.unionWith(c.view.nu)}return r}}function Uf(n){const e=Q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Of.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=T0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y0.bind(null,e),e.Pu.H_=o0.bind(null,e.eventManager),e.Pu.yu=a0.bind(null,e.eventManager),e}function I0(n){const e=Q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=w0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=b0.bind(null,e),e}class Ti{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return SE(this.persistence,new xE,e.initialUser,this.serializer)}Cu(e){return new yf(za.mi,this.serializer)}Du(e){return new OE}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ti.provider={build:()=>new Ti};class x0 extends Ti{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){se(this.persistence.referenceDelegate instanceof vi,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new uE(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ue.withCacheSize(this.cacheSizeBytes):Ue.DEFAULT;return new yf((s=>vi.mi(s,t)),this.serializer)}}class pa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>$u(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=E0.bind(null,this.syncEngine),await s0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new i0})()}createDatastore(e){const t=zi(e.databaseInfo.databaseId),s=(function(i){return new FE(i)})(e.databaseInfo);return(function(i,a,c,h){return new HE(i,a,c,h)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,a,c){return new GE(s,r,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>$u(this.syncEngine,t,0)),(function(){return Mu.v()?new Mu:new jE})())}createSyncEngine(e,t){return(function(r,i,a,c,h,d,m){const g=new h0(r,i,a,c,h,d);return m&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=Q(r);L(In,"RemoteStore shutting down."),i.Ea.add(5),await wr(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}pa.provider={build:()=>new pa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):St("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="FirestoreClient";class A0{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Pe.UNAUTHENTICATED,this.clientId=Da.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async a=>{L(rn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(L(rn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new It;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Za(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Mo(n,e){n.asyncQueue.verifyOperationInProgress(),L(rn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await wf(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function zu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await R0(n);L(rn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Uu(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>Uu(e.remoteStore,r))),n._onlineComponents=e}async function R0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(rn,"Using user provided OfflineComponentProvider");try{await Mo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===N.FAILED_PRECONDITION||r.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;rs("Error using user provided cache. Falling back to memory cache: "+t),await Mo(n,new Ti)}}else L(rn,"Using default OfflineComponentProvider"),await Mo(n,new x0(void 0));return n._offlineComponents}async function Bf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(rn,"Using user provided OnlineComponentProvider"),await zu(n,n._uninitializedComponentsProvider._online)):(L(rn,"Using default OnlineComponentProvider"),await zu(n,new pa))),n._onlineComponents}function S0(n){return Bf(n).then((e=>e.syncEngine))}async function qf(n){const e=await Bf(n),t=e.eventManager;return t.onListen=d0.bind(null,e.syncEngine),t.onUnlisten=p0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=f0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=g0.bind(null,e.syncEngine),t}function N0(n,e,t={}){const s=new It;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,h,d){const m=new Ff({next:y=>{m.Nu(),a.enqueueAndForget((()=>Cf(i,g)));const A=y.docs.has(c);!A&&y.fromCache?d.reject(new j(N.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&y.fromCache&&h&&h.source==="server"?d.reject(new j(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(y)},error:y=>d.reject(y)}),g=new kf(Ua(c.path),m,{includeMetadataChanges:!0,qa:!0});return Nf(i,g)})(await qf(n),n.asyncQueue,e,t,s))),s.promise}function C0(n,e,t={}){const s=new It;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,h,d){const m=new Ff({next:y=>{m.Nu(),a.enqueueAndForget((()=>Cf(i,g))),y.fromCache&&h.source==="server"?d.reject(new j(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(y)},error:y=>d.reject(y)}),g=new kf(c,m,{includeMetadataChanges:!0,qa:!0});return Nf(i,g)})(await qf(n),n.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="firestore.googleapis.com",Wu=!0;class Ku{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hf,this.ssl=Wu}else this.host=e.host,this.ssl=e.ssl??Wu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_f;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cE)throw new j(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$f(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ki{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ku({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ku(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Ob;switch(s.type){case"firstParty":return new Ub(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new j(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Gu.get(t);s&&(L("ComponentProvider","Removing Datastore"),Gu.delete(t),s.terminate())})(this),Promise.resolve()}}function k0(n,e,t,s={}){var d;n=yt(n,Ki);const r=on(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;r&&(va(`https://${c}`),Ea("Firestore",!0)),i.host!==Hf&&i.host!==c&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...i,host:c,ssl:r,emulatorOptions:s};if(!Jt(h,a)&&(n._setSettings(h),s.mockUserToken)){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=Pe.MOCK_USER;else{m=Ch(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new j(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Pe(y)}n._authCredentials=new jb(new Rd(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Dn(this.firestore,e,this._query)}}class ye{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ye(this.firestore,e,this._key)}toJSON(){return{type:ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(gr(t,ye._jsonSchema))return new ye(e,s||null,new H(oe.fromString(t.referencePath)))}}ye._jsonSchemaVersion="firestore/documentReference/1.0",ye._jsonSchema={type:Ee("string",ye._jsonSchemaVersion),referencePath:Ee("string")};class Xt extends Dn{constructor(e,t,s){super(e,t,Ua(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ye(this.firestore,null,new H(e))}withConverter(e){return new Xt(this.firestore,e,this._path)}}function Gt(n,e,...t){if(n=le(n),Sd("collection","path",e),n instanceof Ki){const s=oe.fromString(e,...t);return au(s),new Xt(n,null,s)}{if(!(n instanceof ye||n instanceof Xt))throw new j(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(oe.fromString(e,...t));return au(s),new Xt(n.firestore,null,s)}}function Ze(n,e,...t){if(n=le(n),arguments.length===1&&(e=Da.newId()),Sd("doc","path",e),n instanceof Ki){const s=oe.fromString(e,...t);return ou(s),new ye(n,null,new H(s))}{if(!(n instanceof ye||n instanceof Xt))throw new j(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(oe.fromString(e,...t));return ou(s),new ye(n.firestore,n instanceof Xt?n.converter:null,new H(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="AsyncQueue";class Yu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new vf(this,"async_queue_retry"),this._c=()=>{const s=jo();s&&L(Qu,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=jo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=jo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new It;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ms(e))throw e;L(Qu,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,St("INTERNAL UNHANDLED ERROR: ",Xu(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Ja.createAndSchedule(this,e,t,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&G(47125,{Pc:Xu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Xu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class _s extends Ki{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Yu,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yu(e),this._firestoreClient=void 0,await e}}}function P0(n,e){const t=typeof n=="object"?n:ki(),s=typeof n=="string"?n:gi,r=an(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Rh("firestore");i&&k0(r,...i)}return r}function sc(n){if(n._terminated)throw new j(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||D0(n),n._firestoreClient}function D0(n){var s,r,i;const e=n._freezeSettings(),t=(function(c,h,d,m){return new nv(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,$f(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new A0(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xe(Ce.fromBase64String(e))}catch(t){throw new j(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xe(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(gr(e,Xe._jsonSchema))return Xe.fromBase64String(e.bytes)}}Xe._jsonSchemaVersion="firestore/bytes/1.0",Xe._jsonSchema={type:Ee("string",Xe._jsonSchemaVersion),bytes:Ee("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gt._jsonSchemaVersion}}static fromJSON(e){if(gr(e,gt._jsonSchema))return new gt(e.latitude,e.longitude)}}gt._jsonSchemaVersion="firestore/geoPoint/1.0",gt._jsonSchema={type:Ee("string",gt._jsonSchemaVersion),latitude:Ee("number"),longitude:Ee("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:_t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(gr(e,_t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new _t(e.vectorValues);throw new j(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_t._jsonSchemaVersion="firestore/vectorValue/1.0",_t._jsonSchema={type:Ee("string",_t._jsonSchemaVersion),vectorValues:Ee("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=/^__.*__$/;class O0{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new un(e,this.data,this.fieldMask,t,this.fieldTransforms):new _r(e,this.data,t,this.fieldTransforms)}}class zf{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new un(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Gf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{Ac:n})}}class rc{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new rc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ii(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Gf(this.Ac)&&V0.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class j0{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||zi(e)}Cc(e,t,s,r=!1){return new rc({Ac:e,methodName:t,Dc:s,path:Ne.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xi(n){const e=n._freezeSettings(),t=zi(n._databaseId);return new j0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Wf(n,e,t,s,r,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,r);oc("Data must be an object, but it was:",a,s);const c=Kf(s,a);let h,d;if(i.merge)h=new He(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const y=ga(e,g,t);if(!a.contains(y))throw new j(N.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Yf(m,y)||m.push(y)}h=new He(m),d=a.fieldTransforms.filter((g=>h.covers(g.field)))}else h=null,d=a.fieldTransforms;return new O0(new Be(c),h,d)}class Ji extends Yi{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ji}}class ic extends Yi{_toFieldTransform(e){return new Sv(e.path,new ar)}isEqual(e){return e instanceof ic}}function M0(n,e,t,s){const r=n.Cc(1,e,t);oc("Data must be an object, but it was:",r,s);const i=[],a=Be.empty();ln(s,((h,d)=>{const m=ac(e,h,t);d=le(d);const g=r.yc(m);if(d instanceof Ji)i.push(m);else{const y=vr(d,g);y!=null&&(i.push(m),a.set(m,y))}}));const c=new He(i);return new zf(a,c,r.fieldTransforms)}function L0(n,e,t,s,r,i){const a=n.Cc(1,e,t),c=[ga(e,s,t)],h=[r];if(i.length%2!=0)throw new j(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)c.push(ga(e,i[y])),h.push(i[y+1]);const d=[],m=Be.empty();for(let y=c.length-1;y>=0;--y)if(!Yf(d,c[y])){const A=c[y];let S=h[y];S=le(S);const P=a.yc(A);if(S instanceof Ji)d.push(A);else{const C=vr(S,P);C!=null&&(d.push(A),m.set(A,C))}}const g=new He(d);return new zf(m,g,a.fieldTransforms)}function U0(n,e,t,s=!1){return vr(t,n.Cc(s?4:3,e))}function vr(n,e){if(Qf(n=le(n)))return oc("Unsupported field value:",e,n),Kf(n,e);if(n instanceof Yi)return(function(s,r){if(!Gf(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const i=[];let a=0;for(const c of s){let h=vr(c,r.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),i.push(h),a++}return{arrayValue:{values:i}}})(n,e)}return(function(s,r){if((s=le(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return xv(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=ae.fromDate(s);return{timestampValue:bi(r.serializer,i)}}if(s instanceof ae){const i=new ae(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:bi(r.serializer,i)}}if(s instanceof gt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Xe)return{bytesValue:uf(r.serializer,s._byteString)};if(s instanceof ye){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$a(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof _t)return(function(a,c){return{mapValue:{fields:{[Md]:{stringValue:Ld},[_i]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return Fa(c.serializer,d)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${ji(s)}`)})(n,e)}function Kf(n,e){const t={};return kd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ln(n,((s,r)=>{const i=vr(r,e.mc(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function Qf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof gt||n instanceof Xe||n instanceof ye||n instanceof Yi||n instanceof _t)}function oc(n,e,t){if(!Qf(t)||!Nd(t)){const s=ji(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function ga(n,e,t){if((e=le(e))instanceof Qi)return e._internalPath;if(typeof e=="string")return ac(n,e);throw Ii("Field path arguments must be of type string or ",n,!1,void 0,t)}const F0=new RegExp("[~\\*/\\[\\]]");function ac(n,e,t){if(e.search(F0)>=0)throw Ii(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Qi(...e.split("."))._internalPath}catch{throw Ii(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ii(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(i||a)&&(h+=" (found",i&&(h+=` in field ${s}`),a&&(h+=` in document ${r}`),h+=")"),new j(N.INVALID_ARGUMENT,c+n+h)}function Yf(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new B0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class B0 extends Xf{data(){return super.data()}}function Zi(n,e){return typeof e=="string"?ac(n,e):e instanceof Qi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cc{}class Jf extends cc{}function ur(n,e,...t){let s=[];e instanceof cc&&s.push(e),s=s.concat(t),(function(i){const a=i.filter((h=>h instanceof lc)).length,c=i.filter((h=>h instanceof eo)).length;if(a>1||a>0&&c>0)throw new j(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class eo extends Jf{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new eo(e,t,s)}_apply(e){const t=this._parse(e);return Zf(e._query,t),new Dn(e.firestore,e.converter,ia(e._query,t))}_parse(e){const t=Xi(e.firestore);return(function(i,a,c,h,d,m,g){let y;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new j(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Zu(g,m);const S=[];for(const P of g)S.push(Ju(h,i,P));y={arrayValue:{values:S}}}else y=Ju(h,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Zu(g,m),y=U0(c,a,g,m==="in"||m==="not-in");return ve.create(d,m,y)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function es(n,e,t){const s=e,r=Zi("where",n);return eo._create(r,s,t)}class lc extends cc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new lc(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:it.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let a=r;const c=i.getFlattenedFilters();for(const h of c)Zf(a,h),a=ia(a,h)})(e._query,t),new Dn(e.firestore,e.converter,ia(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class uc extends Jf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new uc(e,t)}_apply(e){const t=(function(r,i,a){if(r.startAt!==null)throw new j(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new j(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new or(i,a)})(e._query,this._field,this._direction);return new Dn(e.firestore,e.converter,(function(r,i){const a=r.explicitOrderBy.concat([i]);return new ps(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)})(e._query,t))}}function $0(n,e="asc"){const t=e,s=Zi("orderBy",n);return uc._create(s,t)}function Ju(n,e,t){if(typeof(t=le(t))=="string"){if(t==="")throw new j(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gd(e)&&t.indexOf("/")!==-1)throw new j(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(oe.fromString(t));if(!H.isDocumentKey(s))throw new j(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return pu(n,new H(s))}if(t instanceof ye)return pu(n,t._key);throw new j(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ji(t)}.`)}function Zu(n,e){if(!Array.isArray(n)||n.length===0)throw new j(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zf(n,e){const t=(function(r,i){for(const a of r)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new j(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class H0{convertValue(e,t="none"){switch(nn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(tn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ln(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[_i].arrayValue)==null?void 0:r.values)==null?void 0:i.map((a=>_e(a.doubleValue)));return new _t(t)}convertGeoPoint(e){return new gt(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ui(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(sr(e));default:return null}}convertTimestamp(e){const t=en(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=oe.fromString(e);se(gf(s),9688,{name:e});const r=new rr(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(t)||St(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class Hs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bn extends Xf{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new si(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Zi("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=bn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}bn._jsonSchemaVersion="firestore/documentSnapshot/1.0",bn._jsonSchema={type:Ee("string",bn._jsonSchemaVersion),bundleSource:Ee("string","DocumentSnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class si extends bn{data(e={}){return super.data(e)}}class ts{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Hs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new si(this._firestore,this._userDataWriter,s.key,s,new Hs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((c=>{const h=new si(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Hs(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const h=new si(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Hs(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:z0(c.type),doc:h,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ts._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Da.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function z0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(n){n=yt(n,ye);const e=yt(n.firestore,_s);return N0(sc(e),n._key).then((t=>W0(e,n,t)))}ts._jsonSchemaVersion="firestore/querySnapshot/1.0",ts._jsonSchema={type:Ee("string",ts._jsonSchemaVersion),bundleSource:Ee("string","QuerySnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class tm extends H0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ye(this.firestore,null,t)}}function hr(n){n=yt(n,Dn);const e=yt(n.firestore,_s),t=sc(e),s=new tm(e);return q0(n._query),C0(t,n._query).then((r=>new ts(e,s,n,r)))}function G0(n,e,t){n=yt(n,ye);const s=yt(n.firestore,_s),r=em(n.converter,e);return hc(s,[Wf(Xi(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,nt.none())])}function eh(n,e,t,...s){n=yt(n,ye);const r=yt(n.firestore,_s),i=Xi(r);let a;return a=typeof(e=le(e))=="string"||e instanceof Qi?L0(i,"updateDoc",n._key,e,t,s):M0(i,"updateDoc",n._key,e),hc(r,[a.toMutation(n._key,nt.exists(!0))])}function th(n,e){const t=yt(n.firestore,_s),s=Ze(n),r=em(n.converter,e);return hc(t,[Wf(Xi(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,nt.exists(!1))]).then((()=>s))}function hc(n,e){return(function(s,r){const i=new It;return s.asyncQueue.enqueueAndForget((async()=>_0(await S0(s),r,i))),i.promise})(sc(n),e)}function W0(n,e,t){const s=t.docs.get(e._key),r=new tm(n);return new bn(n,r,e._key,s,new Hs(t.hasPendingWrites,t.fromCache),e.converter)}function Wn(){return new ic("serverTimestamp")}(function(e,t=!0){(function(r){ds=r})(Nn),st(new Je("firestore",((s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),c=new _s(new Mb(s.getProvider("auth-internal")),new Fb(a,s.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new j(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rr(d.options.projectId,m)})(a,r),a);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),qe(nu,su,e),qe(nu,su,"esm2020")})();const nm="@firebase/installations",dc="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=1e4,rm=`w:${dc}`,im="FIS_v2",K0="https://firebaseinstallations.googleapis.com/v1",Q0=3600*1e3,Y0="installations",X0="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xn=new Sn(Y0,X0,J0);function om(n){return n instanceof et&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am({projectId:n}){return`${K0}/projects/${n}/installations`}function cm(n){return{token:n.token,requestStatus:2,expiresIn:eT(n.expiresIn),creationTime:Date.now()}}async function lm(n,e){const s=(await e.json()).error;return xn.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function um({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Z0(n,{refreshToken:e}){const t=um(n);return t.append("Authorization",tT(e)),t}async function hm(n){const e=await n();return e.status>=500&&e.status<600?n():e}function eT(n){return Number(n.replace("s","000"))}function tT(n){return`${im} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=am(n),r=um(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={fid:t,authVersion:im,appId:n.appId,sdkVersion:rm},c={method:"POST",headers:r,body:JSON.stringify(a)},h=await hm(()=>fetch(s,c));if(h.ok){const d=await h.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:cm(d.authToken)}}else throw await lm("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=/^[cdef][\w-]{21}$/,_a="";function iT(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=oT(n);return rT.test(t)?t:_a}catch{return _a}}function oT(n){return sT(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=new Map;function mm(n,e){const t=to(n);pm(t,e),aT(t,e)}function pm(n,e){const t=fm.get(n);if(t)for(const s of t)s(e)}function aT(n,e){const t=cT();t&&t.postMessage({key:n,fid:e}),lT()}let wn=null;function cT(){return!wn&&"BroadcastChannel"in self&&(wn=new BroadcastChannel("[Firebase] FID Change"),wn.onmessage=n=>{pm(n.data.key,n.data.fid)}),wn}function lT(){fm.size===0&&wn&&(wn.close(),wn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="firebase-installations-database",hT=1,An="firebase-installations-store";let Lo=null;function fc(){return Lo||(Lo=jh(uT,hT,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(An)}}})),Lo}async function xi(n,e){const t=to(n),r=(await fc()).transaction(An,"readwrite"),i=r.objectStore(An),a=await i.get(t);return await i.put(e,t),await r.done,(!a||a.fid!==e.fid)&&mm(n,e.fid),e}async function gm(n){const e=to(n),s=(await fc()).transaction(An,"readwrite");await s.objectStore(An).delete(e),await s.done}async function no(n,e){const t=to(n),r=(await fc()).transaction(An,"readwrite"),i=r.objectStore(An),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await r.done,c&&(!a||a.fid!==c.fid)&&mm(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mc(n){let e;const t=await no(n.appConfig,s=>{const r=dT(s),i=fT(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===_a?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function dT(n){const e=n||{fid:iT(),registrationStatus:0};return _m(e)}function fT(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(xn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=mT(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pT(n)}:{installationEntry:e}}async function mT(n,e){try{const t=await nT(n,e);return xi(n.appConfig,t)}catch(t){throw om(t)&&t.customData.serverCode===409?await gm(n.appConfig):await xi(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function pT(n){let e=await nh(n.appConfig);for(;e.registrationStatus===1;)await dm(100),e=await nh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await mc(n);return s||t}return e}function nh(n){return no(n,e=>{if(!e)throw xn.create("installation-not-found");return _m(e)})}function _m(n){return gT(n)?{fid:n.fid,registrationStatus:0}:n}function gT(n){return n.registrationStatus===1&&n.registrationTime+sm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _T({appConfig:n,heartbeatServiceProvider:e},t){const s=yT(n,t),r=Z0(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={installation:{sdkVersion:rm,appId:n.appId}},c={method:"POST",headers:r,body:JSON.stringify(a)},h=await hm(()=>fetch(s,c));if(h.ok){const d=await h.json();return cm(d)}else throw await lm("Generate Auth Token",h)}function yT(n,{fid:e}){return`${am(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(n,e=!1){let t;const s=await no(n.appConfig,i=>{if(!ym(i))throw xn.create("not-registered");const a=i.authToken;if(!e&&vT(a))return i;if(a.requestStatus===1)return t=wT(n,e),i;{if(!navigator.onLine)throw xn.create("app-offline");const c=TT(i);return t=bT(n,c),c}});return t?await t:s.authToken}async function wT(n,e){let t=await sh(n.appConfig);for(;t.authToken.requestStatus===1;)await dm(100),t=await sh(n.appConfig);const s=t.authToken;return s.requestStatus===0?pc(n,e):s}function sh(n){return no(n,e=>{if(!ym(e))throw xn.create("not-registered");const t=e.authToken;return IT(t)?{...e,authToken:{requestStatus:0}}:e})}async function bT(n,e){try{const t=await _T(n,e),s={...e,authToken:t};return await xi(n.appConfig,s),t}catch(t){if(om(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await gm(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await xi(n.appConfig,s)}throw t}}function ym(n){return n!==void 0&&n.registrationStatus===2}function vT(n){return n.requestStatus===2&&!ET(n)}function ET(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Q0}function TT(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function IT(n){return n.requestStatus===1&&n.requestTime+sm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(n){const e=n,{installationEntry:t,registrationPromise:s}=await mc(e);return s?s.catch(console.error):pc(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AT(n,e=!1){const t=n;return await RT(t),(await pc(t,e)).token}async function RT(n){const{registrationPromise:e}=await mc(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(n){if(!n||!n.options)throw Uo("App Configuration");if(!n.name)throw Uo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Uo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Uo(n){return xn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="installations",NT="installations-internal",CT=n=>{const e=n.getProvider("app").getImmediate(),t=ST(e),s=an(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},kT=n=>{const e=n.getProvider("app").getImmediate(),t=an(e,wm).getImmediate();return{getId:()=>xT(t),getToken:r=>AT(t,r)}};function PT(){st(new Je(wm,CT,"PUBLIC")),st(new Je(NT,kT,"PRIVATE"))}PT();qe(nm,dc);qe(nm,dc,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="analytics",DT="firebase_id",VT="origin",OT=60*1e3,jT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",gc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=new Ci("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ge=new Sn("analytics","Analytics",MT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(n){if(!n.startsWith(gc)){const e=Ge.create("invalid-gtag-resource",{gtagURL:n});return Me.warn(e.message),""}return n}function bm(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function UT(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function FT(n,e){const t=UT("firebase-js-sdk-policy",{createScriptURL:LT}),s=document.createElement("script"),r=`${gc}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function BT(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function qT(n,e,t,s,r,i){const a=s[r];try{if(a)await e[a];else{const h=(await bm(t)).find(d=>d.measurementId===r);h&&await e[h.appId]}}catch(c){Me.error(c)}n("config",r,i)}async function $T(n,e,t,s,r){try{let i=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const c=await bm(t);for(const h of a){const d=c.find(g=>g.measurementId===h),m=d&&e[d.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",s,r||{})}catch(i){Me.error(i)}}function HT(n,e,t,s){async function r(i,...a){try{if(i==="event"){const[c,h]=a;await $T(n,e,t,c,h)}else if(i==="config"){const[c,h]=a;await qT(n,e,t,s,c,h)}else if(i==="consent"){const[c,h]=a;n("consent",c,h)}else if(i==="get"){const[c,h,d]=a;n("get",c,h,d)}else if(i==="set"){const[c]=a;n("set",c)}else n(i,...a)}catch(c){Me.error(c)}}return r}function zT(n,e,t,s,r){let i=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=HT(i,n,e,t),{gtagCore:i,wrappedGtag:window[r]}}function GT(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(gc)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=30,KT=1e3;class QT{constructor(e={},t=KT){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vm=new QT;function YT(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function XT(n){var a;const{appId:e,apiKey:t}=n,s={method:"GET",headers:YT(t)},r=jT.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let c="";try{const h=await i.json();(a=h.error)!=null&&a.message&&(c=h.error.message)}catch{}throw Ge.create("config-fetch-failed",{httpStatus:i.status,responseMessage:c})}return i.json()}async function JT(n,e=vm,t){const{appId:s,apiKey:r,measurementId:i}=n.options;if(!s)throw Ge.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Ge.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new tI;return setTimeout(async()=>{c.abort()},OT),Em({appId:s,apiKey:r,measurementId:i},a,c,e)}async function Em(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=vm){var c;const{appId:i,measurementId:a}=n;try{await ZT(s,e)}catch(h){if(a)return Me.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:i,measurementId:a};throw h}try{const h=await XT(n);return r.deleteThrottleMetadata(i),h}catch(h){const d=h;if(!eI(d)){if(r.deleteThrottleMetadata(i),a)return Me.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:i,measurementId:a};throw h}const m=Number((c=d==null?void 0:d.customData)==null?void 0:c.httpStatus)===503?Al(t,r.intervalMillis,WT):Al(t,r.intervalMillis),g={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return r.setThrottleMetadata(i,g),Me.debug(`Calling attemptFetch again in ${m} millis`),Em(n,g,s,r)}}function ZT(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s(Ge.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function eI(n){if(!(n instanceof et)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class tI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function nI(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const i=await e,a={...s,send_to:i};n("event",t,a)}}async function sI(n,e,t,s){if(s&&s.global){const r={};for(const i of Object.keys(t))r[`user_properties.${i}`]=t[i];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(){if(Ph())try{await Dh()}catch(n){return Me.warn(Ge.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Me.warn(Ge.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function iI(n,e,t,s,r,i,a){const c=JT(n);c.then(y=>{t[y.measurementId]=y.appId,n.options.measurementId&&y.measurementId!==n.options.measurementId&&Me.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>Me.error(y)),e.push(c);const h=rI().then(y=>{if(y)return s.getId()}),[d,m]=await Promise.all([c,h]);GT(i)||FT(i,d.measurementId),r("js",new Date);const g=(a==null?void 0:a.config)??{};return g[VT]="firebase",g.update=!0,m!=null&&(g[DT]=m),r("config",d.measurementId,g),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.app=e}_delete(){return delete ns[this.app.options.appId],Promise.resolve()}}let ns={},rh=[];const ih={};let Fo="dataLayer",aI="gtag",oh,_c,ah=!1;function cI(){const n=[];if(kh()&&n.push("This is a browser extension environment."),t_()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=Ge.create("invalid-analytics-context",{errorInfo:e});Me.warn(t.message)}}function lI(n,e,t){cI();const s=n.options.appId;if(!s)throw Ge.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Me.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ge.create("no-api-key");if(ns[s]!=null)throw Ge.create("already-exists",{id:s});if(!ah){BT(Fo);const{wrappedGtag:i,gtagCore:a}=zT(ns,rh,ih,Fo,aI);_c=i,oh=a,ah=!0}return ns[s]=iI(n,rh,ih,e,oh,Fo,t),new oI(n)}function uI(n=ki()){n=le(n);const e=an(n,Ai);return e.isInitialized()?e.getImmediate():hI(n)}function hI(n,e={}){const t=an(n,Ai);if(t.isInitialized()){const r=t.getImmediate();if(Jt(e,t.getOptions()))return r;throw Ge.create("already-initialized")}return t.initialize({options:e})}function dI(n,e,t){n=le(n),sI(_c,ns[n.app.options.appId],e,t).catch(s=>Me.error(s))}function fI(n,e,t,s){n=le(n),nI(_c,ns[n.app.options.appId],e,t,s).catch(r=>Me.error(r))}const ch="@firebase/analytics",lh="0.10.19";function mI(){st(new Je(Ai,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return lI(s,r,t)},"PUBLIC")),st(new Je("analytics-internal",n,"PRIVATE")),qe(ch,lh),qe(ch,lh,"esm2020");function n(e){try{const t=e.getProvider(Ai).getImmediate();return{logEvent:(s,r,i)=>fI(t,s,r,i),setUserProperties:(s,r)=>dI(t,s,r)}}catch(t){throw Ge.create("interop-component-reg-failed",{reason:t})}}}mI();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="firebasestorage.googleapis.com",Im="storageBucket",pI=120*1e3,gI=600*1e3,_I=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends et{constructor(e,t,s=0){super(Bo(e),`Firebase Storage: ${t} (${Bo(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Bo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ue;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ue||(ue={}));function Bo(n){return"storage/"+n}function yc(){const n="An unknown error occurred, please check the error payload for server response.";return new fe(ue.UNKNOWN,n)}function yI(n){return new fe(ue.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function wI(n){return new fe(ue.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function bI(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new fe(ue.UNAUTHENTICATED,n)}function vI(){return new fe(ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function EI(n){return new fe(ue.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function xm(){return new fe(ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Am(){return new fe(ue.CANCELED,"User canceled the upload/download.")}function TI(n){return new fe(ue.INVALID_URL,"Invalid URL '"+n+"'.")}function II(n){return new fe(ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function xI(){return new fe(ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Im+"' property when initializing the app?")}function Rm(){return new fe(ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function AI(){return new fe(ue.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function RI(){return new fe(ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function SI(n){return new fe(ue.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ya(n){return new fe(ue.INVALID_ARGUMENT,n)}function Sm(){return new fe(ue.APP_DELETED,"The Firebase app was deleted.")}function NI(n){return new fe(ue.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xs(n,e){return new fe(ue.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ls(n){throw new fe(ue.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=ze.makeFromUrl(e,t)}catch{return new ze(e,"")}if(s.path==="")return s;throw II(e)}static makeFromUrl(e,t){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+r+a,"i"),h={bucket:1,path:3};function d(M){M.path_=decodeURIComponent(M.path)}const m="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",A=new RegExp(`^https?://${g}/${m}/b/${r}/o${y}`,"i"),S={bucket:1,path:3},P=t===Tm?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",F=new RegExp(`^https?://${P}/${r}/${C}`,"i"),D=[{regex:c,indices:h,postModify:i},{regex:A,indices:S,postModify:d},{regex:F,indices:{bucket:1,path:2},postModify:d}];for(let M=0;M<D.length;M++){const O=D[M],B=O.regex.exec(e);if(B){const v=B[O.indices.bucket];let _=B[O.indices.path];_||(_=""),s=new ze(v,_),O.postModify(s);break}}if(s==null)throw TI(e);return s}}class CI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(n,e,t){let s=1,r=null,i=null,a=!1,c=0;function h(){return c===2}let d=!1;function m(...C){d||(d=!0,e.apply(null,C))}function g(C){r=setTimeout(()=>{r=null,n(A,h())},C)}function y(){i&&clearTimeout(i)}function A(C,...F){if(d){y();return}if(C){y(),m.call(null,C,...F);return}if(h()||a){y(),m.call(null,C,...F);return}s<64&&(s*=2);let D;c===1?(c=2,D=0):D=(s+Math.random())*1e3,g(D)}let S=!1;function P(C){S||(S=!0,y(),!d&&(r!==null?(C||(c=2),clearTimeout(r),g(0)):C||(c=1)))}return g(0),i=setTimeout(()=>{a=!0,P(!0)},t),P}function PI(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(n){return n!==void 0}function VI(n){return typeof n=="function"}function OI(n){return typeof n=="object"&&!Array.isArray(n)}function so(n){return typeof n=="string"||n instanceof String}function uh(n){return wc()&&n instanceof Blob}function wc(){return typeof Blob<"u"}function hh(n,e,t,s){if(s<e)throw ya(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw ya(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function Nm(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const r=e(s)+"="+e(n[s]);t=t+r+"&"}return t=t.slice(0,-1),t}var vn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(vn||(vn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,t,s,r,i,a,c,h,d,m,g,y=!0,A=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=g,this.retry=y,this.isUsingEmulator=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,P)=>{this.resolve_=S,this.reject_=P,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new zr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const h=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===vn.NO_ERROR,h=i.getStatus();if(!c||Cm(h,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===vn.ABORT;s(!1,new zr(!1,null,m));return}const d=this.successCodes_.indexOf(h)!==-1;s(!0,new zr(d,i))})},t=(s,r)=>{const i=this.resolve_,a=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const h=this.callback_(c,c.getResponse());DI(h)?i(h):i()}catch(h){a(h)}else if(c!==null){const h=yc();h.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,h)):a(h)}else if(r.canceled){const h=this.appDelete_?Sm():Am();a(h)}else{const h=xm();a(h)}};this.canceled_?t(!1,new zr(!1,null,!0)):this.backoffId_=kI(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zr{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function MI(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function LI(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function UI(n,e){e&&(n["X-Firebase-GMPID"]=e)}function FI(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function BI(n,e,t,s,r,i,a=!0,c=!1){const h=Nm(n.urlParams),d=n.url+h,m=Object.assign({},n.headers);return UI(m,e),MI(m,t),LI(m,i),FI(m,s),new jI(d,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,a,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $I(...n){const e=qI();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(wc())return new Blob(n);throw new fe(ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function HI(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(n){if(typeof atob>"u")throw SI("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qo{constructor(e,t){this.data=e,this.contentType=t||null}}function GI(n,e){switch(n){case ht.RAW:return new qo(km(e));case ht.BASE64:case ht.BASE64URL:return new qo(Pm(n,e));case ht.DATA_URL:return new qo(KI(e),QI(e))}throw yc()}function km(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=s,a=n.charCodeAt(++t);s=65536|(i&1023)<<10|a&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function WI(n){let e;try{e=decodeURIComponent(n)}catch{throw Xs(ht.DATA_URL,"Malformed data URL.")}return km(e)}function Pm(n,e){switch(n){case ht.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Xs(n,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case ht.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Xs(n,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=zI(e)}catch(r){throw r.message.includes("polyfill")?r:Xs(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}class Dm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Xs(ht.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=YI(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function KI(n){const e=new Dm(n);return e.base64?Pm(ht.BASE64,e.rest):WI(e.rest)}function QI(n){return new Dm(n).contentType}function YI(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t){let s=0,r="";uh(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(uh(this.data_)){const s=this.data_,r=HI(s,e,t);return r===null?null:new Ht(r)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new Ht(s,!0)}}static getBlob(...e){if(wc()){const t=e.map(s=>s instanceof Ht?s.data_:s);return new Ht($I.apply(null,t))}else{const t=e.map(a=>so(a)?GI(ht.RAW,a).data:a.data_);let s=0;t.forEach(a=>{s+=a.byteLength});const r=new Uint8Array(s);let i=0;return t.forEach(a=>{for(let c=0;c<a.length;c++)r[i++]=a[c]}),new Ht(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(n){let e;try{e=JSON.parse(n)}catch{return null}return OI(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function JI(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function Om(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(n,e){return e}class je{constructor(e,t,s,r){this.server=e,this.local=t||e,this.writable=!!s,this.xform=r||ZI}}let Gr=null;function ex(n){return!so(n)||n.length<2?n:Om(n)}function jm(){if(Gr)return Gr;const n=[];n.push(new je("bucket")),n.push(new je("generation")),n.push(new je("metageneration")),n.push(new je("name","fullPath",!0));function e(i,a){return ex(a)}const t=new je("name");t.xform=e,n.push(t);function s(i,a){return a!==void 0?Number(a):a}const r=new je("size");return r.xform=s,n.push(r),n.push(new je("timeCreated")),n.push(new je("updated")),n.push(new je("md5Hash",null,!0)),n.push(new je("cacheControl",null,!0)),n.push(new je("contentDisposition",null,!0)),n.push(new je("contentEncoding",null,!0)),n.push(new je("contentLanguage",null,!0)),n.push(new je("contentType",null,!0)),n.push(new je("metadata","customMetadata",!0)),Gr=n,Gr}function tx(n,e){function t(){const s=n.bucket,r=n.fullPath,i=new ze(s,r);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function nx(n,e,t){const s={};s.type="file";const r=t.length;for(let i=0;i<r;i++){const a=t[i];s[a.local]=a.xform(s,e[a.server])}return tx(s,n),s}function Mm(n,e,t){const s=Vm(e);return s===null?null:nx(n,s,t)}function sx(n,e,t,s){const r=Vm(e);if(r===null||!so(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const m=n.bucket,g=n.fullPath,y="/b/"+a(m)+"/o/"+a(g),A=Er(y,t,s),S=Nm({alt:"media",token:d});return A+S})[0]}function Lm(n,e){const t={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class ys{constructor(e,t,s,r){this.url=e,this.method=t,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(n){if(!n)throw yc()}function bc(n,e){function t(s,r){const i=Mm(n,r,e);return xt(i!==null),i}return t}function rx(n,e){function t(s,r){const i=Mm(n,r,e);return xt(i!==null),sx(i,r,n.host,n._protocol)}return t}function Tr(n){function e(t,s){let r;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?r=vI():r=bI():t.getStatus()===402?r=wI(n.bucket):t.getStatus()===403?r=EI(n.path):r=s,r.status=t.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Um(n){const e=Tr(n);function t(s,r){let i=e(s,r);return s.getStatus()===404&&(i=yI(n.path)),i.serverResponse=r.serverResponse,i}return t}function ix(n,e,t){const s=e.fullServerUrl(),r=Er(s,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new ys(r,i,bc(n,t),a);return c.errorHandler=Um(e),c}function ox(n,e,t){const s=e.fullServerUrl(),r=Er(s,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new ys(r,i,rx(n,t),a);return c.errorHandler=Um(e),c}function ax(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Fm(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=ax(null,e)),s}function cx(n,e,t,s,r){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let D="";for(let M=0;M<2;M++)D=D+Math.random().toString().slice(2);return D}const h=c();a["Content-Type"]="multipart/related; boundary="+h;const d=Fm(e,s,r),m=Lm(d,t),g="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+h+`\r
Content-Type: `+d.contentType+`\r
\r
`,y=`\r
--`+h+"--",A=Ht.getBlob(g,s,y);if(A===null)throw Rm();const S={name:d.fullPath},P=Er(i,n.host,n._protocol),C="POST",F=n.maxUploadRetryTime,U=new ys(P,C,bc(n,t),F);return U.urlParams=S,U.headers=a,U.body=A.uploadData(),U.errorHandler=Tr(e),U}class Ri{constructor(e,t,s,r){this.current=e,this.total=t,this.finalized=!!s,this.metadata=r||null}}function vc(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{xt(!1)}return xt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function lx(n,e,t,s,r){const i=e.bucketOnlyServerUrl(),a=Fm(e,s,r),c={name:a.fullPath},h=Er(i,n.host,n._protocol),d="POST",m={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},g=Lm(a,t),y=n.maxUploadRetryTime;function A(P){vc(P);let C;try{C=P.getResponseHeader("X-Goog-Upload-URL")}catch{xt(!1)}return xt(so(C)),C}const S=new ys(h,d,A,y);return S.urlParams=c,S.headers=m,S.body=g,S.errorHandler=Tr(e),S}function ux(n,e,t,s){const r={"X-Goog-Upload-Command":"query"};function i(d){const m=vc(d,["active","final"]);let g=null;try{g=d.getResponseHeader("X-Goog-Upload-Size-Received")}catch{xt(!1)}g||xt(!1);const y=Number(g);return xt(!isNaN(y)),new Ri(y,s.size(),m==="final")}const a="POST",c=n.maxUploadRetryTime,h=new ys(t,a,i,c);return h.headers=r,h.errorHandler=Tr(e),h}const dh=256*1024;function hx(n,e,t,s,r,i,a,c){const h=new Ri(0,0);if(a?(h.current=a.current,h.total=a.total):(h.current=0,h.total=s.size()),s.size()!==h.total)throw AI();const d=h.total-h.current;let m=d;r>0&&(m=Math.min(m,r));const g=h.current,y=g+m;let A="";m===0?A="finalize":d===m?A="upload, finalize":A="upload";const S={"X-Goog-Upload-Command":A,"X-Goog-Upload-Offset":`${h.current}`},P=s.slice(g,y);if(P===null)throw Rm();function C(M,O){const B=vc(M,["active","final"]),v=h.current+m,_=s.size();let b;return B==="final"?b=bc(e,i)(M,O):b=null,new Ri(v,_,B==="final",b)}const F="POST",U=e.maxUploadRetryTime,D=new ys(t,F,C,U);return D.headers=S,D.body=P.uploadData(),D.progressCallback=c||null,D.errorHandler=Tr(n),D}const Fe={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function $o(n){switch(n){case"running":case"pausing":case"canceling":return Fe.RUNNING;case"paused":return Fe.PAUSED;case"success":return Fe.SUCCESS;case"canceled":return Fe.CANCELED;case"error":return Fe.ERROR;default:return Fe.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,t,s){if(VI(e)||t!=null||s!=null)this.next=e,this.error=t??void 0,this.complete=s??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class fx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=vn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=vn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=vn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,r,i){if(this.sent_)throw Ls("cannot .send() more than once");if(on(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ls("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ls("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ls("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ls("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class mx extends fx{initXhr(){this.xhr_.responseType="text"}}function Kn(){return new mx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=s,this._mappings=jm(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(ue.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Cm(r.status,[]))if(i)r=xm();else{this.sleepTime=Math.max(this.sleepTime*2,_I),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(ue.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,s])=>{switch(this._state){case"running":e(t,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const s=lx(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Kn,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,s)=>{const r=ux(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,Kn,t,s);this._request=i,i.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=dh*this._chunkMultiplier,t=new Ri(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let a;try{a=hx(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(h){this._error=h,this._transition("error");return}const c=this._ref.storage._makeRequest(a,Kn,r,i,!1);this._request=c,c.getPromise().then(h=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(h.current),h.finalized?(this._metadata=h.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){dh*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const s=ix(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,Kn,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const s=cx(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Kn,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Am(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=$o(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,s,r){const i=new dx(t||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch($o(this._state)){case Fe.SUCCESS:qn(this._resolve.bind(null,this.snapshot))();break;case Fe.CANCELED:case Fe.ERROR:const t=this._reject;qn(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch($o(this._state)){case Fe.RUNNING:case Fe.PAUSED:e.next&&qn(e.next.bind(e,this.snapshot))();break;case Fe.SUCCESS:e.complete&&qn(e.complete.bind(e))();break;case Fe.CANCELED:case Fe.ERROR:e.error&&qn(e.error.bind(e,this._error))();break;default:e.error&&qn(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t){this._service=e,t instanceof ze?this._location=t:this._location=ze.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Rn(e,t)}get root(){const e=new ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Om(this._location.path)}get storage(){return this._service}get parent(){const e=XI(this._location.path);if(e===null)return null;const t=new ze(this._location.bucket,e);return new Rn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw NI(e)}}function gx(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new px(n,new Ht(e),t)}function _x(n){n._throwIfRoot("getDownloadURL");const e=ox(n.storage,n._location,jm());return n.storage.makeRequestWithTokens(e,Kn).then(t=>{if(t===null)throw RI();return t})}function yx(n,e){const t=JI(n._location.path,e),s=new ze(n._location.bucket,t);return new Rn(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(n){return/^[A-Za-z]+:\/\//.test(n)}function bx(n,e){return new Rn(n,e)}function Bm(n,e){if(n instanceof Ec){const t=n;if(t._bucket==null)throw xI();const s=new Rn(t,t._bucket);return e!=null?Bm(s,e):s}else return e!==void 0?yx(n,e):n}function vx(n,e){if(e&&wx(e)){if(n instanceof Ec)return bx(n,e);throw ya("To use ref(service, url), the first argument must be a Storage instance.")}else return Bm(n,e)}function fh(n,e){const t=e==null?void 0:e[Im];return t==null?null:ze.makeFromBucketSpec(t,n)}function Ex(n,e,t,s={}){n.host=`${e}:${t}`;const r=on(e);r&&(va(`https://${n.host}/b`),Ea("Storage",!0)),n._isUsingEmulator=!0,n._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:Ch(i,n.app.options.projectId))}class Ec{constructor(e,t,s,r,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=Tm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=pI,this._maxUploadRetryTime=gI,this._requests=new Set,r!=null?this._bucket=ze.makeFromBucketSpec(r,this._host):this._bucket=fh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ze.makeFromBucketSpec(this._url,e):this._bucket=fh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ye(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Rn(this,e)}_makeRequest(e,t,s,r,i=!0){if(this._deleted)return new CI(Sm());{const a=BI(e,this._appId,s,r,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,r).getPromise()}}const mh="@firebase/storage",ph="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="storage";function Tx(n,e,t){return n=le(n),gx(n,e,t)}function Ix(n){return n=le(n),_x(n)}function xx(n,e){return n=le(n),vx(n,e)}function Ax(n=ki(),e){n=le(n);const s=an(n,qm).getImmediate({identifier:e}),r=Rh("storage");return r&&Rx(s,...r),s}function Rx(n,e,t,s={}){Ex(n,e,t,s)}function Sx(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new Ec(t,s,r,e,Nn)}function Nx(){st(new Je(qm,Sx,"PUBLIC").setMultipleInstances(!0)),qe(mh,ph,""),qe(mh,ph,"esm2020")}Nx();const wa={apiKey:"AIzaSyBkMktbTfBNIdhtBwCC_cRBEavKeuTyCGA",authDomain:"myschola-5ec1f.firebaseapp.com",projectId:"myschola-5ec1f",storageBucket:"myschola-5ec1f.firebasestorage.app",messagingSenderId:"927860875256",appId:"1:927860875256:web:ce73f8eabd09cac6f3400d",measurementId:"G-XTC703H7RN"};if(!wa.apiKey||!wa.projectId)throw console.error("Firebase configuration is missing. Please check your .env file."),new Error("Firebase configuration error");const ro=Mh(wa),Qe=Db(ro),be=P0(ro);uI(ro);const Cx=Ax(ro);function kx(){const[n,e]=$.useState(""),[t,s]=$.useState(!1),[r,i]=$.useState(!0),a=Si(),c=gh();$.useEffect(()=>{const d=ld(Qe,async m=>{var g,y;if(m)try{console.log("Checking student document for UID:",m.uid);let A;try{A=await Ct(Ze(be,"students",m.uid)),console.log("Student document exists:",A.exists())}catch(S){if(console.error("Firestore error:",S),S.code==="permission-denied"){console.error("PERMISSION DENIED - Check your Firestore security rules!"),e("Permission denied. Please check that Firestore security rules are published."),await Qe.signOut(),i(!1);return}throw S}if(A.exists()){const S=((y=(g=c.state)==null?void 0:g.from)==null?void 0:y.pathname)||"/app/dashboard";console.log("Redirecting to:",S),a(S,{replace:!0});return}else console.warn("Student document not found for UID:",m.uid),await Qe.signOut(),e("Student profile not found. Please contact your teacher.")}catch(A){console.error("Error checking student status:",A),A.code==="permission-denied"?e("Permission denied. Please check Firestore security rules."):e("Error checking student profile. Please try again.")}else console.log("No user logged in");i(!1)});return()=>d()},[a,c]);const h=async d=>{var A,S;d.preventDefault(),e(""),s(!0);const m=new FormData(d.currentTarget),g=m.get("email"),y=m.get("password");try{console.log("Attempting to sign in with email:",g);const C=(await ww(Qe,g,y)).user;console.log("Sign in successful. User UID:",C.uid),console.log("Checking student document in Firestore...");let F;try{F=await Ct(Ze(be,"students",C.uid)),console.log("Student document exists:",F.exists())}catch(D){if(console.error("Firestore error:",D),D.code==="permission-denied"){console.error("PERMISSION DENIED - Check your Firestore security rules!"),e("Permission denied. Please check that Firestore security rules are published and allow authenticated users to read their own student document."),s(!1),await Qe.signOut();return}throw D}if(!F.exists()){console.error("Student document not found for UID:",C.uid),console.error("Please create a document in Firestore:"),console.error("  Collection: students"),console.error("  Document ID:",C.uid),console.error("  Fields: name (string), email (string), subjects (array)"),await Qe.signOut(),e(`Student profile not found. Please create a document in Firestore with Document ID: ${C.uid}`),s(!1);return}console.log("Student document found. Redirecting to dashboard...");const U=((S=(A=c.state)==null?void 0:A.from)==null?void 0:S.pathname)||"/app/dashboard";a(U,{replace:!0})}catch(P){console.error(P),P.code==="auth/invalid-email"?e("Please enter a valid email address."):P.code==="auth/user-not-found"?e("No account found with this email. Please contact your teacher to create an account."):P.code==="auth/wrong-password"?e("Incorrect password. Please try again."):P.code==="auth/invalid-credential"?e("Invalid email or password. Please try again."):e(P.message||"Failed to sign in. Please try again.")}finally{s(!1)}};return r?u.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Checking authentication..."})]})}):u.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[u.jsx("div",{className:"flex justify-center",children:u.jsxs(Tt,{to:"/",className:"flex items-center",children:[u.jsx(oi,{className:"h-12 w-12 text-blue-600"}),u.jsx("span",{className:"ml-2 text-3xl font-bold text-gray-900",children:"MySchola"})]})}),u.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"}),u.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Students: Use the email and password provided by your teacher"})]}),u.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:u.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[u.jsxs("form",{className:"space-y-6",onSubmit:h,children:[n&&u.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative",role:"alert",children:u.jsx("span",{className:"block sm:inline",children:n})}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),u.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:u.jsx(vh,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),u.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"you@example.com"})]})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),u.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:u.jsx(bh,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),u.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"********"})]})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),u.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),u.jsx("div",{className:"text-sm",children:u.jsx("a",{href:"#",className:"font-medium text-blue-600 hover:text-blue-500",children:"Forgot your password?"})})]}),u.jsx("div",{children:u.jsx("button",{type:"submit",disabled:t,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed",children:t?"Please wait...":"Sign in"})})]}),u.jsx("div",{className:"mt-6",children:u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-0 flex items-center",children:u.jsx("div",{className:"w-full border-t border-gray-300"})}),u.jsx("div",{className:"relative flex justify-center text-sm",children:u.jsx("span",{className:"px-2 bg-white text-gray-500",children:u.jsxs(Tt,{to:"/",className:"flex items-center hover:text-gray-900 transition",children:[u.jsx(ba,{className:"h-4 w-4 mr-1"}),"Back to Home"]})})})]})})]})})]})}function Ho({children:n}){const[e,t]=$.useState(!0),[s,r]=$.useState(!1),[i,a]=$.useState(!1),c=gh();return $.useEffect(()=>{const h=ld(Qe,async d=>{if(d)try{(await Ct(Ze(be,"students",d.uid))).exists()?(r(!0),a(!0)):(r(!1),a(!1))}catch(m){console.error("Error checking student status:",m),r(!1),a(!1)}else r(!1),a(!1);t(!1)});return()=>h()},[]),e?u.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Loading..."})]})}):!s||!i?u.jsx(_p,{to:"/login",state:{from:c},replace:!0}):n}const Px=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?Up:e.includes("english")||e.includes("literature")||e.includes("language")?jp:e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?Jp:e.includes("geography")||e.includes("geography")?eg:e.includes("history")?sg:e.includes("music")?fg:e.includes("art")||e.includes("design")?pg:e.includes("language")||e.includes("french")||e.includes("spanish")||e.includes("german")?ig:e.includes("computer")||e.includes("ict")||e.includes("it")?Pp:oi},Dx=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?"bg-blue-50 border-blue-200 text-blue-700":e.includes("english")||e.includes("literature")||e.includes("language")?"bg-purple-50 border-purple-200 text-purple-700":e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?"bg-green-50 border-green-200 text-green-700":e.includes("geography")?"bg-cyan-50 border-cyan-200 text-cyan-700":e.includes("history")?"bg-amber-50 border-amber-200 text-amber-700":e.includes("music")?"bg-pink-50 border-pink-200 text-pink-700":e.includes("art")||e.includes("design")?"bg-rose-50 border-rose-200 text-rose-700":"bg-gray-50 border-gray-200 text-gray-700"};function Vx(){const n=Si(),[e,t]=$.useState(null),[s,r]=$.useState([]),[i,a]=$.useState(!0),[c,h]=$.useState(""),[d,m]=$.useState(null);$.useEffect(()=>{(async()=>{try{const A=Qe.currentUser;if(!A){n("/login");return}const S=await Ct(Ze(be,"students",A.uid));if(!S.exists()){h("Student profile not found"),a(!1);return}const P=S.data();if(t(P),console.log("Student data:",P),console.log("Student subjects array:",P.subjects),P.subjects&&P.subjects.length>0){const F=(await Promise.all(P.subjects.map(async U=>{try{const D=await Ct(Ze(be,"subjects",U));return D.exists()?{id:D.id,...D.data()}:(console.warn(`Subject document not found for ID: ${U}`),null)}catch(D){return console.error(`Error fetching subject ${U}:`,D),null}}))).filter(U=>U!==null);console.log("Loaded subjects:",F),console.log("Expected subjects:",P.subjects),console.log("Missing subjects:",P.subjects.filter(U=>!F.some(D=>D.id===U))),r(F),F.length!==P.subjects.length&&m({expected:P.subjects.length,loaded:F.length,missing:P.subjects.filter(U=>!F.some(D=>D.id===U))})}else console.log("No subjects array found in student data");a(!1)}catch(A){console.error("Error loading student data:",A),h("Failed to load dashboard data"),a(!1)}})()},[n]);const g=async()=>{try{await Ew(Qe),n("/login",{replace:!0})}catch(y){console.error("Error signing out:",y)}};return i?u.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",role:"status","aria-live":"polite",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto","aria-hidden":"true"}),u.jsx("p",{className:"mt-4 text-gray-600","aria-label":"Loading dashboard",children:"Loading your dashboard..."})]})}):c?u.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:u.jsxs("div",{className:"text-center",children:[u.jsx("p",{className:"text-red-600 mb-4",children:c}),u.jsx("button",{onClick:g,className:"text-blue-600 hover:text-blue-700 underline",children:"Sign out and try again"})]})}):u.jsxs("div",{className:"min-h-screen bg-gray-50",children:[u.jsx("header",{className:"bg-white shadow-sm",role:"banner",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(ri,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),u.jsxs("div",{children:[u.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"MySchola Student Dashboard"}),u.jsxs("p",{className:"text-sm text-gray-500",children:["Hi, ",u.jsx("span",{className:"font-medium",children:(e==null?void 0:e.name)||"Student"})]})]})]}),u.jsxs("nav",{className:"flex items-center gap-3","aria-label":"Dashboard navigation",children:[u.jsx(Tt,{to:"/",className:"text-sm text-gray-600 hover:text-gray-900 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition","aria-label":"Return to homepage",children:"Back to site"}),u.jsxs("button",{onClick:g,className:"inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition","aria-label":"Sign out of your account",children:[u.jsx(cg,{className:"h-4 w-4","aria-hidden":"true"}),"Sign out"]})]})]})}),u.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsxs("div",{className:"mb-8",children:[u.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Your Subjects"}),u.jsx("p",{className:"text-gray-600",children:"Select a subject to join Zoom sessions, watch recordings, or complete homework."})]}),d&&u.jsxs("div",{className:"mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4",role:"alert","aria-live":"polite",children:[u.jsx("p",{className:"text-sm text-yellow-800 font-medium mb-1",children:"⚠️ Some subjects may not be loading correctly"}),u.jsxs("p",{className:"text-xs text-yellow-700",children:["Expected ",d.expected," subject(s), loaded ",d.loaded,". Please check the browser console for details."]})]}),s.length===0?u.jsxs("div",{className:"bg-white rounded-lg shadow p-8 text-center",role:"region","aria-labelledby":"no-subjects-heading",children:[u.jsx(ri,{className:"h-12 w-12 text-gray-400 mx-auto mb-4","aria-hidden":"true"}),u.jsx("h3",{id:"no-subjects-heading",className:"text-lg font-semibold text-gray-900 mb-2",children:"No Subjects Enrolled"}),u.jsx("p",{className:"text-gray-600 mb-2",children:"You're not enrolled in any subjects yet."}),u.jsx("p",{className:"text-sm text-gray-500",children:"Please contact your teacher to get enrolled."})]}):u.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",role:"list","aria-label":"Enrolled subjects",children:s.map(y=>{const A=Px(y.name),S=Dx(y.name);return u.jsxs("article",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",role:"listitem",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[u.jsx("div",{className:`p-2 rounded-lg ${S}`,children:u.jsx(A,{className:"h-6 w-6","aria-hidden":"true"})}),u.jsx("h3",{className:"text-xl font-semibold text-gray-900 flex-1",children:y.name})]}),u.jsxs("div",{className:"space-y-3",children:[y.zoomLink&&u.jsxs("a",{href:y.zoomLink,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`Join Zoom session for ${y.name}`,children:[u.jsx(Qp,{className:"h-4 w-4","aria-hidden":"true"}),"Join Zoom"]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[u.jsxs(Tt,{to:`/app/subject/${y.id}/recordings`,className:"flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`View recordings for ${y.name}`,children:[u.jsx(Js,{className:"h-4 w-4","aria-hidden":"true"}),"Recordings"]}),u.jsxs(Tt,{to:`/app/subject/${y.id}/homework`,className:"flex items-center justify-center gap-2 text-green-600 hover:text-green-700 px-4 py-2 border border-green-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition font-medium","aria-label":`View homework for ${y.name}`,children:[u.jsx(ii,{className:"h-4 w-4","aria-hidden":"true"}),"Homework"]})]})]})]},y.id)})})]})]})}function Ox(){const{subjectId:n}=_h(),e=Si(),[t,s]=$.useState([]),[r,i]=$.useState([]),[a,c]=$.useState(null),[h,d]=$.useState(null),[m,g]=$.useState(!0),[y,A]=$.useState(""),[S,P]=$.useState(null);$.useEffect(()=>{n&&(async()=>{try{const M=Qe.currentUser;if(!M){e("/login");return}const O=await Ct(Ze(be,"students",M.uid));if(!O.exists()){A("Student profile not found"),g(!1);return}const B=O.data();d(B);const _=(B.subjectSettings||{})[n]||null;P(_);const b=Ze(be,"subjects",n),T=await Ct(b);T.exists()&&c({id:n,...T.data()});let E;try{E=ur(Gt(be,"recordings"),es("subjectId","==",n),$0("date","desc"))}catch(ne){console.warn("OrderBy failed, using simple query:",ne),E=ur(Gt(be,"recordings"),es("subjectId","==",n))}const w=(await hr(E)).docs.map(ne=>({id:ne.id,...ne.data()})).filter(ne=>ne.approvalStatus==="approved"||!ne.approvalStatus).sort((ne,ge)=>{var We,Ke;const Vn=(We=ne.date)!=null&&We.toDate?ne.date.toDate():ne.date?new Date(ne.date):new Date(0);return((Ke=ge.date)!=null&&Ke.toDate?ge.date.toDate():ge.date?new Date(ge.date):new Date(0))-Vn});s(w),g(!1)}catch(M){console.error("Error loading recordings:",M),A("Failed to load recordings"),g(!1)}})()},[n,e]);const C=()=>{var M;return a?(((M=a.name)==null?void 0:M.toLowerCase())||"").includes("english"):!1};$.useEffect(()=>{if(!t.length){i([]);return}if(!S||!S.examBoard){i(t);return}const D=S.examBoard,M=S.tier,O=t.filter(B=>{const v=B.examBoard,_=B.tier;return v!==D?!1:C()?!0:_&&M?_===M:!_&&!M});i(O)},[t,S,a]);const F=()=>{const D={};return r.forEach(M=>{const O=M.examBoard||"Other",B=M.tier||(C()?"General":"Other"),v=`${O}_${B}`;D[v]||(D[v]={examBoard:O,tier:B,recordings:[]}),D[v].recordings.push(M)}),Object.values(D).sort((M,O)=>M.examBoard!==O.examBoard?M.examBoard==="AQA"?-1:O.examBoard==="AQA"?1:M.examBoard==="Edexcel"?-1:O.examBoard==="Edexcel"?1:M.examBoard.localeCompare(O.examBoard):M.tier==="Foundation"?-1:O.tier==="Foundation"?1:M.tier==="Higher"?-1:O.tier==="Higher"?1:M.tier.localeCompare(O.tier))},U=D=>D?(D.toDate?D.toDate():new Date(D)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"Date not available";return m?u.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Loading recordings..."})]})}):u.jsx("div",{className:"min-h-screen bg-gray-50",children:u.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsxs(Tt,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[u.jsx(ba,{className:"h-4 w-4"}),"Back to Dashboard"]}),u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[u.jsx(Js,{className:"h-6 w-6 text-blue-600"}),u.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Recordings - ",(a==null?void 0:a.name)||"Subject"]})]}),u.jsx("p",{className:"text-gray-600",children:"Watch past lesson recordings for this subject."}),S&&u.jsxs("div",{className:"mt-3 flex items-center gap-2 text-sm",children:[u.jsx("span",{className:"text-gray-500",children:"Your settings:"}),u.jsxs("span",{className:"font-semibold text-blue-600",children:[S.examBoard,!C()&&S.tier&&` - ${S.tier}`]})]}),!S&&u.jsxs("div",{className:"mt-3 bg-yellow-50 border border-yellow-200 rounded-md p-3 flex items-start gap-2",children:[u.jsx($p,{className:"h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5"}),u.jsxs("div",{className:"text-sm text-yellow-800",children:[u.jsx("p",{className:"font-medium mb-1",children:"No exam board settings found"}),u.jsx("p",{children:"Please contact your administrator to set your exam board and tier preferences. Until then, all recordings are shown."})]})]})]}),y&&u.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6",children:y}),r.length===0?u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[u.jsx(Js,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),S?u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"text-gray-600 font-medium mb-2",children:"No recordings available for your settings."}),u.jsxs("p",{className:"text-sm text-gray-500",children:["Your settings: ",u.jsxs("span",{className:"font-semibold",children:[S.examBoard,!C()&&S.tier?` - ${S.tier}`:""]})]}),u.jsx("p",{className:"text-sm text-gray-500 mt-2",children:t.length>0?`There are ${t.length} recording(s) available, but none match your exam board/tier settings.`:"No recordings have been added for this subject yet."})]}):u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"text-gray-600",children:"No recordings available yet."}),u.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Check back later for new recordings."})]})]}):u.jsx("div",{className:"space-y-6",children:F().map((D,M)=>u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",children:[u.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 px-6 py-4",children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(ri,{className:"h-5 w-5 text-blue-600"}),u.jsxs("div",{children:[u.jsxs("h3",{className:"text-lg font-semibold text-gray-900",children:[D.examBoard,!C()&&D.tier&&u.jsxs("span",{className:"ml-2 text-base font-normal text-gray-600",children:["- ",D.tier]})]}),u.jsxs("p",{className:"text-sm text-gray-600",children:[D.recordings.length," recording",D.recordings.length!==1?"s":""]})]})]})}),u.jsx("div",{className:"p-6 space-y-4",children:D.recordings.map(O=>u.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:u.jsxs("div",{className:"flex items-start justify-between",children:[u.jsxs("div",{className:"flex-1",children:[u.jsx("h4",{className:"text-base font-semibold text-gray-900 mb-2",children:O.title}),u.jsx("p",{className:"text-sm text-gray-500",children:U(O.date)})]}),u.jsxs("a",{href:O.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"ml-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap",children:[u.jsx(wg,{className:"h-4 w-4"}),"Watch"]})]})},O.id))})]},M))})]})})}function jx(){var M;const{subjectId:n}=_h(),[e,t]=$.useState([]),[s,r]=$.useState(null),[i,a]=$.useState(!0),[c,h]=$.useState(null),[d,m]=$.useState({}),[g,y]=$.useState(!1),[A,S]=$.useState({});$.useEffect(()=>{n&&(async()=>{try{const B=Ze(be,"subjects",n),v=await Ct(B);v.exists()&&r({id:n,...v.data()});const _=ur(Gt(be,"homeworks"),es("subjectId","==",n)),T=(await hr(_)).docs.map(I=>({id:I.id,...I.data()}));t(T);const E=Qe.currentUser;if(E){const I=ur(Gt(be,"submissions"),es("studentId","==",E.uid),es("homeworkId","in",T.map(ge=>ge.id))),w=await hr(I),ne={};w.docs.forEach(ge=>{ne[ge.data().homeworkId]=ge.data()}),S(ne)}a(!1)}catch(B){console.error("Error loading homework:",B),a(!1)}})()},[n]);const P=(O,B)=>{m({...d,[O]:B})},C=(O,B)=>{let v=0;return O.questions.forEach((_,b)=>{var I,w;const T=(I=B[b])==null?void 0:I.toString().toLowerCase().trim(),E=(w=_.correctAnswer)==null?void 0:w.toString().toLowerCase().trim();T===E&&v++}),Math.round(v/O.questions.length*100)},F=async()=>{if(c){y(!0);try{const O=Qe.currentUser;if(!O){alert("You must be logged in to submit homework");return}const B=C(c,d);await G0(Ze(be,"submissions",`${O.uid}_${c.id}`),{studentId:O.uid,homeworkId:c.id,subjectId:n,answers:d,score:B,submittedAt:Wn()}),S({...A,[c.id]:{score:B,submittedAt:new Date}}),alert(`Homework submitted! Your score: ${B}%`),h(null),m({})}catch(O){console.error("Error submitting homework:",O),alert("Failed to submit homework. Please try again.")}finally{y(!1)}}},U=O=>O?(O.toDate?O.toDate():new Date(O)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"No due date",D=O=>O?(O.toDate?O.toDate():new Date(O))<new Date:!1;return i?u.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Loading homework..."})]})}):u.jsx("div",{className:"min-h-screen bg-gray-50",children:u.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsxs(Tt,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[u.jsx(ba,{className:"h-4 w-4"}),"Back to Dashboard"]}),u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[u.jsx(ii,{className:"h-6 w-6 text-green-600"}),u.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Homework - ",(s==null?void 0:s.name)||"Subject"]})]}),u.jsx("p",{className:"text-gray-600",children:"Complete and submit your homework assignments."})]}),c?u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:c.title}),u.jsx("button",{onClick:()=>{h(null),m({})},className:"text-gray-600 hover:text-gray-900",children:"Close"})]}),c.description&&u.jsx("p",{className:"text-gray-600 mb-6",children:c.description}),u.jsx("div",{className:"space-y-6 mb-6",children:(M=c.questions)==null?void 0:M.map((O,B)=>u.jsxs("div",{className:"border-b border-gray-200 pb-4",children:[u.jsxs("label",{className:"block text-sm font-medium text-gray-900 mb-2",children:["Question ",B+1,": ",O.question]}),u.jsx("input",{type:"text",value:d[B]||"",onChange:v=>P(B,v.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Your answer"})]},B))}),u.jsxs("div",{className:"flex gap-3",children:[u.jsx("button",{onClick:F,disabled:g,className:"bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50",children:g?"Submitting...":"Submit Homework"}),u.jsx("button",{onClick:()=>{h(null),m({})},className:"bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition",children:"Cancel"})]})]}):u.jsx("div",{className:"space-y-4",children:e.length===0?u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[u.jsx(ii,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),u.jsx("p",{className:"text-gray-600",children:"No homework assignments available yet."})]}):e.map(O=>{const B=A[O.id],v=D(O.dueDate);return u.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:u.jsxs("div",{className:"flex items-start justify-between mb-4",children:[u.jsxs("div",{className:"flex-1",children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:O.title}),O.description&&u.jsx("p",{className:"text-gray-600 mb-2",children:O.description}),u.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:[u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx(wh,{className:"h-4 w-4"}),"Due: ",U(O.dueDate)]}),O.questions&&u.jsxs("span",{children:[O.questions.length," questions"]})]}),B&&u.jsxs("div",{className:"mt-3 flex items-center gap-2 text-green-600",children:[u.jsx(Wr,{className:"h-5 w-5"}),u.jsxs("span",{className:"font-semibold",children:["Last score: ",B.score,"%"]})]}),v&&!B&&u.jsx("div",{className:"mt-3 text-red-600 text-sm font-medium",children:"Overdue"})]}),u.jsx("button",{onClick:()=>h(O),className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:B?"Review/Resubmit":"Start Homework"})]})},O.id)})})]})})}function Mx(){const n=Si(),[e,t]=$.useState(""),[s,r]=$.useState(!1),[i,a]=$.useState([]),[c,h]=$.useState(""),[d,m]=$.useState(null),[g,y]=$.useState("recording"),[A,S]=$.useState(""),[P,C]=$.useState(""),[F,U]=$.useState(null),[D,M]=$.useState(0),[O,B]=$.useState(""),[v,_]=$.useState(""),[b,T]=$.useState([]),[E,I]=$.useState(""),[w,ne]=$.useState(""),[ge,Vn]=$.useState(""),[ot,We]=$.useState([{question:"",correctAnswer:""}]),[Ke,On]=$.useState(!1),[kt,me]=$.useState("");$.useEffect(()=>{s&&(async()=>{try{const he=(await hr(Gt(be,"subjects"))).docs.map(Le=>({id:Le.id,...Le.data()}));if(a(he),he.length>0){const Le=he[0];h(Le.id),m(Le)}}catch(K){console.error("Error loading subjects:",K)}})()},[s]),$.useEffect(()=>{(async()=>{if(g==="approve"&&s)try{const K=ur(Gt(be,"recordings"),es("approvalStatus","==","pending")),he=await hr(K),Le=await Promise.all(he.docs.map(async at=>{const bt=at.data();let hn="Unknown";if(bt.subjectId)try{const ie=await Ct(at(be,"subjects",bt.subjectId));ie.exists()&&(hn=ie.data().name)}catch(ie){console.error("Error fetching subject:",ie)}return{id:at.id,...bt,subjectName:hn}}));T(Le)}catch(K){console.error("Error loading pending recordings:",K)}})()},[g,s]),$.useEffect(()=>{const q=i.find(K=>K.id===c);m(q||null),B(""),_("")},[c,i]);const Ir=q=>{q.preventDefault(),e==="admin123"?(r(!0),me("")):me("Incorrect password")},jn=()=>{We([...ot,{question:"",correctAnswer:""}])},ws=q=>{We(ot.filter((K,he)=>he!==q))},Mn=(q,K,he)=>{const Le=[...ot];Le[q][K]=he,We(Le)},Pt=()=>{var K;return d?(((K=d.name)==null?void 0:K.toLowerCase())||"").includes("english"):!1},bs=async q=>{if(q.preventDefault(),!c||!A||!O){me("Please fill in all required fields");return}if(!P&&!F){me("Provide a video URL or upload a file");return}if(!Pt()&&!v){me("Please select a tier (Foundation or Higher)");return}On(!0),me("");try{let K=P;if(F){const he=`recordings/${c}/${Date.now()}-${F.name}`,Le=xx(Cx,he),at=Tx(Le,F);await new Promise((bt,hn)=>{at.on("state_changed",ie=>{const Re=Math.round(ie.bytesTransferred/ie.totalBytes*100);M(Re)},ie=>hn(ie),async()=>{K=await Ix(at.snapshot.ref),bt()})})}await th(Gt(be,"recordings"),{subjectId:c,title:A,videoUrl:K,examBoard:O,tier:Pt()?null:v,approvalStatus:"pending",date:Wn(),createdAt:Wn()}),me("Recording added successfully! It will be visible to students after approval."),S(""),C(""),U(null),M(0),B(""),_("")}catch(K){console.error("Error adding recording:",K),me("Failed to add recording"),M(0)}finally{On(!1)}},xr=async q=>{try{await eh(Ze(be,"recordings",q),{approvalStatus:"approved",approvedAt:Wn()}),T(b.filter(K=>K.id!==q)),me("Recording approved successfully!"),setTimeout(()=>me(""),3e3)}catch(K){console.error("Error approving recording:",K),me("Failed to approve recording")}},io=async q=>{try{await eh(Ze(be,"recordings",q),{approvalStatus:"rejected",rejectedAt:Wn()}),T(b.filter(K=>K.id!==q)),me("Recording rejected"),setTimeout(()=>me(""),3e3)}catch(K){console.error("Error rejecting recording:",K),me("Failed to reject recording")}},oo=async q=>{if(q.preventDefault(),!c||!E||ot.length===0){me("Please fill in all required fields");return}const K=ot.filter(he=>he.question.trim()&&he.correctAnswer.trim());if(K.length===0){me("Please add at least one valid question");return}On(!0),me("");try{await th(Gt(be,"homeworks"),{subjectId:c,title:E,description:w,dueDate:ge?ae.fromDate(new Date(ge)):null,questions:K,createdAt:Wn()}),me("Homework added successfully!"),I(""),ne(""),Vn(""),We([{question:"",correctAnswer:""}])}catch(he){console.error("Error adding homework:",he),me("Failed to add homework")}finally{On(!1)}};return s?u.jsx("div",{className:"min-h-screen bg-gray-50",children:u.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Admin Panel"}),u.jsx("button",{onClick:()=>n("/"),className:"text-gray-600 hover:text-gray-900 underline text-sm",children:"Back to site"})]})}),u.jsxs("div",{className:"flex gap-2 mb-6 flex-wrap",children:[u.jsxs("button",{onClick:()=>y("recording"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${g==="recording"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[u.jsx(Js,{className:"h-4 w-4"}),"Add Recording"]}),u.jsxs("button",{onClick:()=>y("homework"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${g==="homework"?"bg-green-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[u.jsx(ii,{className:"h-4 w-4"}),"Add Homework"]}),u.jsxs("button",{onClick:()=>y("approve"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition relative ${g==="approve"?"bg-purple-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[u.jsx(Wr,{className:"h-4 w-4"}),"Approve Recordings",b.length>0&&u.jsx("span",{className:"ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5",children:b.length})]})]}),kt&&u.jsx("div",{className:`mb-6 p-4 rounded-lg ${kt.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:kt}),u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Select Subject"}),u.jsx("select",{value:c,onChange:q=>h(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:i.map(q=>u.jsx("option",{value:q.id,children:q.name},q.id))})]}),g==="recording"&&u.jsxs("form",{onSubmit:bs,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[u.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Recording"}),u.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Recordings will be pending approval before students can view them."}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),u.jsx("input",{type:"text",value:A,onChange:q=>S(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"e.g., Algebra Basics - Lesson 1",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Exam Board *"}),u.jsxs("select",{value:O,onChange:q=>B(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[u.jsx("option",{value:"",children:"Select Exam Board"}),u.jsx("option",{value:"AQA",children:"AQA"}),u.jsx("option",{value:"Edexcel",children:"Edexcel"})]})]}),!Pt()&&u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Tier *"}),u.jsxs("select",{value:v,onChange:q=>_(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[u.jsx("option",{value:"",children:"Select Tier"}),u.jsx("option",{value:"Foundation",children:"Foundation"}),u.jsx("option",{value:"Higher",children:"Higher"})]})]}),Pt()&&u.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:u.jsx("p",{className:"text-sm text-blue-800",children:"ℹ️ English subjects do not have Foundation/Higher tiers."})}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Video URL *"}),u.jsx("input",{type:"url",value:P,onChange:q=>C(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://youtube.com/watch?v=..."})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Or upload video file"}),u.jsx("input",{type:"file",accept:"video/*",onChange:q=>{var K;return U(((K=q.target.files)==null?void 0:K[0])||null)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),D>0&&D<100&&u.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",D,"%"]})]})]}),u.jsxs("button",{type:"submit",disabled:Ke,className:"mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[u.jsx(El,{className:"h-4 w-4"}),Ke?"Adding...":"Add Recording (Pending Approval)"]})]}),g==="approve"&&u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[u.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Approve Recordings"}),u.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Review and approve pending recordings. Only approved recordings will be visible to students."}),b.length===0?u.jsxs("div",{className:"text-center py-8",children:[u.jsx(Wr,{className:"h-12 w-12 text-green-500 mx-auto mb-4"}),u.jsx("p",{className:"text-gray-600",children:"No pending recordings to approve."})]}):u.jsx("div",{className:"space-y-4",children:b.map(q=>u.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:u.jsxs("div",{className:"flex items-start justify-between",children:[u.jsxs("div",{className:"flex-1",children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:q.title}),u.jsxs("div",{className:"space-y-1 text-sm text-gray-600",children:[u.jsxs("p",{children:[u.jsx("span",{className:"font-medium",children:"Subject:"})," ",q.subjectName]}),u.jsxs("p",{children:[u.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",q.examBoard]}),q.tier&&u.jsxs("p",{children:[u.jsx("span",{className:"font-medium",children:"Tier:"})," ",q.tier]}),q.date&&u.jsxs("p",{children:[u.jsx("span",{className:"font-medium",children:"Date:"})," ",q.date.toDate?q.date.toDate().toLocaleDateString("en-GB"):"N/A"]})]}),u.jsxs("a",{href:q.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm mt-2",children:[u.jsx(Js,{className:"h-4 w-4"}),"Preview Video"]})]}),u.jsxs("div",{className:"flex gap-2 ml-4",children:[u.jsxs("button",{onClick:()=>xr(q.id),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2",children:[u.jsx(Wr,{className:"h-4 w-4"}),"Approve"]}),u.jsx("button",{onClick:()=>io(q.id),className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition",children:"Reject"})]})]})},q.id))})]}),g==="homework"&&u.jsxs("form",{onSubmit:oo,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[u.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Homework"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),u.jsx("input",{type:"text",value:E,onChange:q=>I(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Description"}),u.jsx("textarea",{value:w,onChange:q=>ne(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",rows:"3"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Due Date"}),u.jsx("input",{type:"datetime-local",value:ge,onChange:q=>Vn(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Questions *"}),u.jsxs("button",{type:"button",onClick:jn,className:"text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1",children:[u.jsx(vg,{className:"h-4 w-4"}),"Add Question"]})]}),u.jsx("div",{className:"space-y-3",children:ot.map((q,K)=>u.jsxs("div",{className:"border border-gray-200 rounded-md p-4",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsxs("span",{className:"text-sm font-medium text-gray-700",children:["Question ",K+1]}),ot.length>1&&u.jsx("button",{type:"button",onClick:()=>ws(K),className:"text-red-600 hover:text-red-700",children:u.jsx(Eh,{className:"h-4 w-4"})})]}),u.jsx("input",{type:"text",value:q.question,onChange:he=>Mn(K,"question",he.target.value),placeholder:"Question text",className:"w-full px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"}),u.jsx("input",{type:"text",value:q.correctAnswer,onChange:he=>Mn(K,"correctAnswer",he.target.value),placeholder:"Correct answer",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"})]},K))})]})]}),u.jsxs("button",{type:"submit",disabled:Ke,className:"mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[u.jsx(El,{className:"h-4 w-4"}),Ke?"Adding...":"Add Homework"]})]})]})}):u.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-md w-full",children:[u.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Admin Login"}),u.jsxs("form",{onSubmit:Ir,children:[u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),u.jsx("input",{type:"password",value:e,onChange:q=>t(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),kt&&u.jsx("div",{className:"mb-4 text-red-600 text-sm",children:kt}),u.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"Login"})]}),u.jsx("button",{onClick:()=>n("/"),className:"mt-4 w-full text-gray-600 hover:text-gray-900 underline text-sm",children:"Back to site"})]})})}function Lx(){return u.jsx(yp,{children:u.jsxs(wp,{children:[u.jsx(Bn,{path:"/",element:u.jsx(Mg,{})}),u.jsx(Bn,{path:"/login",element:u.jsx(kx,{})}),u.jsx(Bn,{path:"/admin",element:u.jsx(Mx,{})}),u.jsx(Bn,{path:"/app/dashboard",element:u.jsx(Ho,{children:u.jsx(Vx,{})})}),u.jsx(Bn,{path:"/app/subject/:subjectId/recordings",element:u.jsx(Ho,{children:u.jsx(Ox,{})})}),u.jsx(Bn,{path:"/app/subject/:subjectId/homework",element:u.jsx(Ho,{children:u.jsx(jx,{})})})]})})}Tp.createRoot(document.getElementById("root")).render(u.jsx($.StrictMode,{children:u.jsx(Lx,{})}));
