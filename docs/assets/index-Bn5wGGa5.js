import{r as pp,a as gp,b as B,L as It,u as ki,c as _h,N as yp,d as wh,B as _p,R as wp,e as Fn}from"./react-vendor-DnR8fNeS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var So={exports:{}},Ls={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wl;function bp(){if(wl)return Ls;wl=1;var n=pp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(c,h,d){var m,g={},_=null,A=null;d!==void 0&&(_=""+d),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(A=h.ref);for(m in h)s.call(h,m)&&!i.hasOwnProperty(m)&&(g[m]=h[m]);if(c&&c.defaultProps)for(m in h=c.defaultProps,h)g[m]===void 0&&(g[m]=h[m]);return{$$typeof:e,type:c,key:_,ref:A,props:g,_owner:r.current}}return Ls.Fragment=t,Ls.jsx=a,Ls.jsxs=a,Ls}var bl;function vp(){return bl||(bl=1,So.exports=bp()),So.exports}var l=vp(),Br={},vl;function Ep(){if(vl)return Br;vl=1;var n=gp();return Br.createRoot=n.createRoot,Br.hydrateRoot=n.hydrateRoot,Br}var Tp=Ep();/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xp=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),El=n=>{const e=xp(n);return e.charAt(0).toUpperCase()+e.slice(1)},bh=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),Ap=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=B.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:r="",children:i,iconNode:a,...c},h)=>B.createElement("svg",{ref:h,...Rp,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:bh("lucide",r),...!i&&!Ap(c)&&{"aria-hidden":"true"},...c},[...a.map(([d,m])=>B.createElement(d,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=(n,e)=>{const t=B.forwardRef(({className:s,...r},i)=>B.createElement(Sp,{ref:i,iconNode:e,className:bh(`lucide-${Ip(El(n))}`,`lucide-${n}`,s),...r}));return t.displayName=El(n),t};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ea=X("arrow-left",Np);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Tl=X("arrow-right",Cp);/**
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
 */const jp=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Op=X("book-marked",jp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ai=X("book-open",Mp);/**
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
 */const Hp=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Yr=X("circle-check-big",Hp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Gp=X("circle-question-mark",zp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],vh=X("clock",Wp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Qp=X("external-link",Kp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ci=X("file-text",Yp);/**
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
 */const tg=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],li=X("graduation-cap",tg);/**
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
 */const og=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Eh=X("lock",og);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],cg=X("log-out",ag);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Th=X("mail",lg);/**
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
 */const gg=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],yg=X("phone",gg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],wg=X("play",_g);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],vg=X("plus",bg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Il=X("save",Eg);/**
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
 */const Dg=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Zs=X("video",Dg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ih=X("x",Vg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Og=X("zoom-in",jg);function Mg(){const[n,e]=B.useState(!1),[t,s]=B.useState(null),r=a=>{s(t===a?null:a)},i=()=>{const a="https://calendly.com/admin-myschola/30min";if(window.Calendly)window.Calendly.initPopupWidget({url:a});else{const c=document.createElement("script");c.src="https://assets.calendly.com/assets/external/widget.js",c.async=!0,c.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:a})},document.body.appendChild(c),setTimeout(()=>{window.Calendly||window.open(a,"_blank","noopener,noreferrer")},1e3)}};return l.jsxs("div",{className:"min-h-screen bg-white",children:[l.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),l.jsxs("nav",{className:"fixed w-full top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex justify-between items-center h-16",children:[l.jsxs("div",{className:"flex items-center",children:[l.jsx(li,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),l.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),l.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[l.jsx("a",{href:"#home",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),l.jsx("a",{href:"#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),l.jsx("a",{href:"#subjects",className:"text-gray-700 hover:text-blue-600 transition",children:"Subjects"}),l.jsx("a",{href:"#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),l.jsx("a",{href:"#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"}),l.jsx(It,{to:"/login",className:"text-gray-700 hover:text-blue-600 transition font-medium",children:"Log In"}),l.jsx("button",{onClick:i,className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a free consultation",children:"Book Free Consultation"})]}),l.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>e(!n),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,"aria-controls":"mobile-menu",children:n?l.jsx(Ih,{className:"h-6 w-6","aria-hidden":"true"}):l.jsx(hg,{className:"h-6 w-6","aria-hidden":"true"})})]})}),n&&l.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:l.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[l.jsx("a",{href:"#home",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),l.jsx("a",{href:"#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),l.jsx("a",{href:"#subjects",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Subjects"}),l.jsx("a",{href:"#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),l.jsx("a",{href:"#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),l.jsx(It,{to:"/login",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50 font-medium",role:"menuitem",children:"Log In"}),l.jsx("button",{onClick:()=>{i(),e(!1)},className:"block w-full px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a free consultation",role:"menuitem",children:"Book Free Consultation"})]})})]}),l.jsxs("main",{id:"main-content",children:[l.jsx("section",{id:"home",className:"pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Hero section",children:l.jsx("div",{className:"max-w-7xl mx-auto",children:l.jsxs("div",{className:"text-center",children:[l.jsxs("h1",{className:"text-5xl md:text-6xl font-bold text-gray-900 mb-6",children:["MySchola: #1 GCSE Tutoring Platform for",l.jsx("span",{className:"text-blue-600",children:" Years 7-11"})]}),l.jsxs("p",{className:"text-xl text-gray-600 mb-4 max-w-3xl mx-auto",children:[l.jsx("strong",{children:"GCSE Maths, English & Science"})," via Zoom"]}),l.jsx("p",{className:"text-lg text-gray-600 mb-8 max-w-2xl mx-auto",children:"One-to-one personalised lessons with expert tutors. Your child only sees the teacher - no distractions, maximum focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons."}),l.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:l.jsxs("button",{onClick:i,className:"bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a free consultation",children:["Book Free Consultation",l.jsx(Tl,{className:"ml-2 h-5 w-5","aria-hidden":"true"})]})})]})})}),l.jsx("section",{id:"how-it-works",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"how-it-works-heading",children:l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsx("h2",{id:"how-it-works-heading",className:"text-4xl font-bold text-center mb-12",children:"How Our Lessons Work"}),l.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[l.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[l.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:l.jsx(Cg,{className:"h-8 w-8 text-white"})}),l.jsx("h3",{className:"text-xl font-semibold mb-2",children:"1-to-1 Sessions"}),l.jsx("p",{className:"text-gray-600",children:"Personalised one-on-one attention. No group distractions - your child gets the tutor's full focus."})]}),l.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[l.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:l.jsx(Og,{className:"h-8 w-8 text-white"})}),l.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Via Zoom"}),l.jsx("p",{className:"text-gray-600",children:"Convenient online lessons from the comfort of your home. High-quality video and interactive whiteboard. Webcam and microphone are optional - we use Zoom chat to check engagement, and parents can monitor participation for privacy."})]}),l.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[l.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:l.jsx(Eh,{className:"h-8 w-8 text-white"})}),l.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Student Privacy"}),l.jsx("p",{className:"text-gray-600",children:"Your child only sees the teacher. Private, secure sessions designed for maximum learning focus. Webcam and mic are optional - we use Zoom chat for communication, and parents can check engagement for privacy reasons."})]})]})]})}),l.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"benefits-heading",children:l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsx("h2",{id:"benefits-heading",className:"text-4xl font-bold text-center mb-4",children:"Benefits for Parents & Students"}),l.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Why thousands of families choose MySchola for GCSE success"}),l.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[l.jsxs("div",{className:"flex items-center mb-3",children:[l.jsx(Sg,{className:"h-6 w-6 text-green-500 mr-2","aria-hidden":"true"}),l.jsx("h3",{className:"text-xl font-semibold",children:"Grade Improvement"})]}),l.jsx("p",{className:"text-gray-600",children:"Students consistently improve by 2-3 grades with our proven teaching methods and personalised approach."})]}),l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[l.jsxs("div",{className:"flex items-center mb-3",children:[l.jsx(Vp,{className:"h-6 w-6 text-blue-500 mr-2","aria-hidden":"true"}),l.jsx("h3",{className:"text-xl font-semibold",children:"Confidence Building"})]}),l.jsx("p",{className:"text-gray-600",children:"Watch your child's confidence soar as they master difficult concepts and see their progress week by week."})]}),l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[l.jsxs("div",{className:"flex items-center mb-3",children:[l.jsx(Ag,{className:"h-6 w-6 text-red-500 mr-2","aria-hidden":"true"}),l.jsx("h3",{className:"text-xl font-semibold",children:"Exam Focus"})]}),l.jsx("p",{className:"text-gray-600",children:"Targeted exam preparation with past papers, exam techniques, and strategies tailored to GCSE requirements."})]}),l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[l.jsxs("div",{className:"flex items-center mb-3",children:[l.jsx(vh,{className:"h-6 w-6 text-purple-500 mr-2","aria-hidden":"true"}),l.jsx("h3",{className:"text-xl font-semibold",children:"Flexible Scheduling"})]}),l.jsx("p",{className:"text-gray-600",children:"Choose times that work around your family's schedule. Evening and weekend slots available."})]}),l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[l.jsxs("div",{className:"flex items-center mb-3",children:[l.jsx(Pg,{className:"h-6 w-6 text-orange-500 mr-2","aria-hidden":"true"}),l.jsx("h3",{className:"text-xl font-semibold",children:"Expert Tutors"})]}),l.jsx("p",{className:"text-gray-600",children:"Qualified UK teachers with DBS checks and proven track records of GCSE success."})]}),l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[l.jsxs("div",{className:"flex items-center mb-3",children:[l.jsx(ai,{className:"h-6 w-6 text-indigo-500 mr-2","aria-hidden":"true"}),l.jsx("h3",{className:"text-xl font-semibold",children:"Personalised Curriculum"})]}),l.jsx("p",{className:"text-gray-600",children:"Lessons tailored to your child's learning style, pace, and specific areas that need improvement."})]})]})]})}),l.jsx("section",{id:"subjects",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"subjects-heading",children:l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsx("h2",{id:"subjects-heading",className:"text-4xl font-bold text-center mb-4",children:"Subjects We Offer"}),l.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Comprehensive GCSE support for Years 7-11"}),l.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{name:"Maths",description:"GCSE Maths (Foundation & Higher)"},{name:"Combined Science",description:"Trilogy and Synergy pathways"},{name:"Triple Science",description:"Biology, Chemistry, and Physics"},{name:"English Language",description:"Reading, writing, and language skills"},{name:"English Literature",description:"Poetry, prose, and drama analysis"}].map(a=>l.jsx("div",{className:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600",children:l.jsxs("div",{className:"flex items-start mb-2",children:[l.jsx(Bp,{className:"h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0","aria-hidden":"true"}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-lg font-semibold mb-1",children:a.name}),l.jsx("p",{className:"text-gray-600 text-sm",children:a.description})]})]})},a.name))})]})}),l.jsx("section",{id:"testimonials",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"testimonials-heading",children:l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold text-center mb-4",children:"What Parents & Students Say"}),l.jsx("p",{className:"text-center text-gray-600 mb-12",children:"Real results from real families"}),l.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-12",children:[l.jsxs("div",{className:"bg-blue-600 text-white p-6 rounded-lg text-center",children:[l.jsx("div",{className:"text-4xl font-bold mb-2",children:"95%"}),l.jsx("div",{className:"text-blue-100",children:"Students improve grades"})]}),l.jsxs("div",{className:"bg-green-600 text-white p-6 rounded-lg text-center",children:[l.jsx("div",{className:"text-4xl font-bold mb-2",children:"2-3"}),l.jsx("div",{className:"text-green-100",children:"Grade improvement average"})]}),l.jsxs("div",{className:"bg-purple-600 text-white p-6 rounded-lg text-center",children:[l.jsx("div",{className:"text-4xl font-bold mb-2",children:"500+"}),l.jsx("div",{className:"text-purple-100",children:"Successful students"})]})]}),l.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{name:"Sarah M., Parent",text:"My daughter went from a Grade 5 to Grade 8 in Maths in just one term! The 1-to-1 Zoom sessions were perfect - she felt comfortable asking questions without other students around.",rating:5,result:"Maths: Grade 5 → Grade 8"},{name:"James T., Student",text:"I was really struggling with English Literature, but my tutor made it click. The exam techniques I learned helped me get a Grade 7. The Zoom sessions were so convenient!",rating:5,result:"English Lit: Grade 4 → Grade 7"},{name:"Emma L., Parent",text:"The confidence my son gained was incredible. He went from dreading Science to loving it. His Chemistry grade improved from 5 to 8. Worth every penny!",rating:5,result:"Chemistry: Grade 5 → Grade 8"},{name:"Michael R., Student",text:"My tutor was amazing! She explained everything so clearly and helped me with past papers. I finally understood how to approach exam questions properly.",rating:5,result:"Physics: Grade 6 → Grade 9"},{name:"Lisa K., Parent",text:"As a working parent, the flexible scheduling was a lifesaver. My daughter could do evening sessions that fit around school and activities. Highly recommend!",rating:5,result:"Maths: Grade 6 → Grade 8"},{name:"David P., Parent",text:"The privacy of the sessions meant my son felt comfortable making mistakes and asking for help. His confidence has grown so much, and his grades show it!",rating:5,result:"English: Grade 5 → Grade 7"}].map((a,c)=>l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[l.jsx("div",{className:"flex mb-4",children:[...Array(a.rating)].map((h,d)=>l.jsx(Ig,{className:"h-5 w-5 text-yellow-400 fill-current","aria-hidden":"true"},d))}),l.jsxs("p",{className:"text-gray-600 mb-4 italic",children:['"',a.text,'"']}),l.jsxs("div",{className:"border-t pt-4",children:[l.jsxs("p",{className:"font-semibold text-gray-900",children:["— ",a.name]}),l.jsx("p",{className:"text-sm text-blue-600 font-medium mt-1",children:a.result})]})]},c))})]})}),l.jsx("section",{id:"book-call",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600","aria-labelledby":"book-call-heading",children:l.jsxs("div",{className:"max-w-4xl mx-auto text-center text-white",children:[l.jsx("h2",{id:"book-call-heading",className:"text-4xl font-bold mb-6",children:"Ready to Start Your Child's GCSE Success Journey?"}),l.jsx("p",{className:"text-xl text-blue-100 mb-8",children:"Book a free consultation to discuss your child's needs and see how we can help them achieve their goals."}),l.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:l.jsxs("button",{onClick:i,className:"bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a free consultation",children:["Book Free Consultation",l.jsx(Tl,{className:"ml-2 h-5 w-5","aria-hidden":"true"})]})}),l.jsx("p",{className:"text-blue-100 text-sm mt-6",children:"No credit card required • Free 30-minute consultation"})]})}),l.jsx("section",{id:"faq",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"faq-heading",children:l.jsxs("div",{className:"max-w-4xl mx-auto",children:[l.jsx("h2",{id:"faq-heading",className:"text-4xl font-bold text-center mb-12",children:"Frequently Asked Questions"}),l.jsx("div",{className:"space-y-4",children:[{q:"How do the Zoom lessons work?",a:"Each lesson is conducted one-to-one via Zoom. Your child will see only the teacher, ensuring privacy and focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We use interactive whiteboards and screen sharing to make lessons engaging and effective. All sessions are recorded for your child to review later."},{q:"What equipment do we need?",a:"You just need a computer, tablet, or laptop with a stable internet connection. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We recommend using a desktop or laptop for the best experience with the interactive whiteboard."},{q:"How long are the sessions?",a:"Standard sessions are 60 minutes, but we also offer 45-minute and 90-minute options depending on your child's needs and attention span. You can discuss the best duration during your free consultation."},{q:"Can I choose the tutor?",a:"Yes! During your consultation, we'll discuss your child's learning style and match them with the best tutor. You can also request specific tutors based on availability."},{q:"What if my child misses a session?",a:"We offer flexible rescheduling with 24 hours notice. Missed sessions can be rescheduled to another time that works for you. We understand that life happens!"},{q:"Do you provide homework and practice materials?",a:"Absolutely! Each tutor provides tailored homework assignments, practice papers, and additional resources to reinforce learning between sessions. All materials are included in the lesson price."},{q:"How quickly will we see results?",a:"Most students see improvement within 4-6 weeks of regular sessions. However, every child is different. We track progress regularly and adjust our approach to ensure maximum effectiveness."},{q:"What age groups do you teach?",a:"We specialize in Years 7-11, preparing students for GCSEs. This includes both Foundation and Higher tier courses across all major GCSE subjects."}].map((a,c)=>l.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[l.jsxs("button",{className:"w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",onClick:()=>r(c),"aria-expanded":t===c,"aria-controls":`faq-answer-${c}`,id:`faq-question-${c}`,children:[l.jsxs("span",{className:"font-semibold text-gray-900 flex items-center",children:[l.jsx(Gp,{className:"h-5 w-5 text-blue-600 mr-2","aria-hidden":"true"}),a.q]}),l.jsx("span",{className:"text-blue-600","aria-hidden":"true","aria-label":t===c?"Collapse answer":"Expand answer",children:t===c?"−":"+"})]}),t===c&&l.jsx("div",{id:`faq-answer-${c}`,className:"px-6 pb-4 text-gray-600",role:"region","aria-labelledby":`faq-question-${c}`,children:a.a})]},c))})]})}),l.jsx("section",{id:"contact",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"contact-heading",children:l.jsxs("div",{className:"max-w-4xl mx-auto",children:[l.jsx("h2",{id:"contact-heading",className:"text-4xl font-bold text-center mb-12",children:"Get in Touch"}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[l.jsx(Th,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),l.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Email Us"}),l.jsx("a",{href:"mailto:support@myschola.uk",className:"text-gray-600 hover:text-blue-600 transition",children:"support@myschola.uk"})]}),l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[l.jsx(yg,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),l.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Call Us"}),l.jsx("p",{className:"text-gray-600",children:"020 1234 5678"}),l.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Mon-Fri 9am-6pm"})]})]})]})}),l.jsx("section",{id:"privacy-policy",className:"py-20 px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"max-w-4xl mx-auto",children:[l.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Privacy Policy"}),l.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Information We Collect"}),l.jsx("p",{children:"We collect information that you provide directly to us, including your name, email address, phone number, and information about your child's educational needs. We also collect information automatically when you use our services, such as session recordings and progress data."})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. How We Use Your Information"}),l.jsx("p",{children:"We use the information we collect to provide, maintain, and improve our tutoring services, process your bookings, communicate with you, and ensure the safety and security of our platform."})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Data Security"}),l.jsx("p",{children:"We implement appropriate technical and organizational measures to protect your personal information. All tutors are DBS checked, and all Zoom sessions are encrypted and secure."})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Session Recordings"}),l.jsx("p",{children:"Lessons may be recorded for educational purposes and quality assurance. Recordings are stored securely and are accessible only to authorized personnel and the student's account."})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Your Rights"}),l.jsx("p",{children:"You have the right to access, update, or delete your personal information at any time. You can also request a copy of your data or withdraw consent for data processing."})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Children's Privacy"}),l.jsx("p",{children:"We take children's privacy seriously. We only collect information necessary to provide our services, and all data handling complies with UK GDPR and Children's Code requirements."})]}),l.jsx("div",{children:l.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})}),l.jsx("section",{id:"terms-of-service",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50",children:l.jsxs("div",{className:"max-w-4xl mx-auto",children:[l.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Terms of Service"}),l.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Service Agreement"}),l.jsx("p",{children:"By booking a lesson or consultation with MySchola, you agree to these terms of service. Our services include one-to-one online tutoring sessions delivered via Zoom for students in Years 7-11."})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. Booking and Cancellation"}),l.jsx("p",{children:"Lessons must be booked in advance. Cancellations require 24 hours notice for a full refund or reschedule. Cancellations with less than 24 hours notice may be charged at 50% of the lesson fee. No-shows will be charged the full lesson fee."})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Payment Terms"}),l.jsx("p",{children:"Payment is required in advance for lesson packages. We accept payment via Stripe. Refunds for unused lessons in a package will be calculated on a pro-rata basis, minus any applicable fees."})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Tutor Matching"}),l.jsx("p",{children:"We strive to match students with the most suitable tutor. However, if you're not satisfied after the first session, we offer a free replacement tutor or full refund."})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Student Conduct"}),l.jsx("p",{children:"Students are expected to attend lessons punctually, be respectful to tutors, and engage actively in learning. Any inappropriate behavior may result in session termination without refund."})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Technical Requirements"}),l.jsx("p",{children:"You are responsible for ensuring you have adequate internet connection and equipment for Zoom sessions. Note that webcam and microphone are optional - not needed. We use Zoom chat to check engagement, and parents can monitor participation for privacy reasons. We are not liable for technical issues on your end, though we'll do our best to accommodate."})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"7. Guarantees"}),l.jsx("p",{children:"While we work hard to help students achieve their goals, we cannot guarantee specific grade improvements as results depend on multiple factors including student effort, attendance, and engagement."})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"8. Intellectual Property"}),l.jsx("p",{children:"All teaching materials, resources, and session recordings are the intellectual property of MySchola and are for the personal use of the enrolled student only."})]}),l.jsx("div",{children:l.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})})]}),l.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center mb-4",children:[l.jsx(li,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),l.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),l.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 7-11 via Zoom."})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),l.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[l.jsx("li",{children:l.jsx("a",{href:"#home",className:"hover:text-white transition",children:"Home"})}),l.jsx("li",{children:l.jsx("a",{href:"#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),l.jsx("li",{children:l.jsx("a",{href:"#subjects",className:"hover:text-white transition",children:"Subjects"})}),l.jsx("li",{children:l.jsx("a",{href:"#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),l.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[l.jsx("li",{children:l.jsx("a",{href:"#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),l.jsx("li",{children:l.jsx("a",{href:"#terms-of-service",className:"hover:text-white transition",children:"Terms of Service"})}),l.jsx("li",{children:l.jsx("a",{href:"#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),l.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[l.jsx("li",{children:l.jsx("a",{href:"mailto:support@myschola.co.uk",className:"hover:text-white transition",children:"support@myschola.co.uk"})}),l.jsx("li",{children:l.jsx("a",{href:"tel:02012345678",className:"hover:text-white transition",children:"020 1234 5678"})}),l.jsx("li",{children:l.jsx("button",{onClick:i,className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),l.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:l.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 7-11."]})})]})})]})}const Lg=()=>{};var xl={};/**
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
 */const xh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Ug=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],c=n[t++],h=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,c=a?n[r+1]:0,h=r+2<n.length,d=h?n[r+2]:0,m=i>>2,g=(i&3)<<4|c>>4;let _=(c&15)<<2|d>>6,A=d&63;h||(A=64,a||(_=64)),s.push(t[m],t[g],t[_],t[A])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ug(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const g=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||d==null||g==null)throw new Fg;const _=i<<2|c>>4;if(s.push(_),d!==64){const A=c<<4&240|d>>2;if(s.push(A),g!==64){const S=d<<6&192|g;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Fg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bg=function(n){const e=xh(n);return Ah.encodeByteArray(e,!0)},ui=function(n){return Bg(n).replace(/\./g,"")},Rh=function(n){try{return Ah.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const $g=()=>qg().__FIREBASE_DEFAULTS__,Hg=()=>{if(typeof process>"u"||typeof xl>"u")return;const n=xl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Rh(n[1]);return e&&JSON.parse(e)},Pi=()=>{try{return Lg()||$g()||Hg()||zg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sh=n=>{var e,t;return(t=(e=Pi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Nh=n=>{const e=Sh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ch=()=>{var n;return(n=Pi())==null?void 0:n.config},kh=n=>{var e;return(e=Pi())==null?void 0:e[`_${n}`]};/**
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
 */function sn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ta(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Ph(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ui(JSON.stringify(t)),ui(JSON.stringify(a)),""].join(".")}const Gs={};function Wg(){const n={prod:[],emulator:[]};for(const e of Object.keys(Gs))Gs[e]?n.emulator.push(e):n.prod.push(e);return n}function Kg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Al=!1;function Ia(n,e){if(typeof window>"u"||typeof document>"u"||!sn(window.location.host)||Gs[n]===e||Gs[n]||Al)return;Gs[n]=e;function t(_){return`__firebase__banner__${_}`}const s="__firebase__banner",i=Wg().prod.length>0;function a(){const _=document.getElementById(s);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function h(_,A){_.setAttribute("width","24"),_.setAttribute("id",A),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function d(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Al=!0,a()},_}function m(_,A){_.setAttribute("id",A),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function g(){const _=Kg(s),A=t("text"),S=document.getElementById(A)||document.createElement("span"),k=t("learnmore"),N=document.getElementById(k)||document.createElement("a"),$=t("preprendIcon"),F=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const D=_.element;c(D),m(N,k);const O=d();h(F,$),D.append(F,S,N,O),document.body.appendChild(D)}i?(S.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function Yg(){var e;const n=(e=Pi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Dh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Jg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zg(){const n=je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ey(){return!Yg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vh(){try{return typeof indexedDB=="object"}catch{return!1}}function jh(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function ty(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ny="FirebaseError";class et extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ny,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sn.prototype.create)}}class Sn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?sy(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new et(r,c,s)}}function sy(n,e){return n.replace(ry,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ry=/\{\$([^}]+)}/g;function iy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Yt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(Rl(i)&&Rl(a)){if(!Yt(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Rl(n){return n!==null&&typeof n=="object"}/**
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
 */function fr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Fs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Bs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function oy(n,e){const t=new ay(n,e);return t.subscribe.bind(t)}class ay{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");cy(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=No),r.error===void 0&&(r.error=No),r.complete===void 0&&(r.complete=No);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function No(){}/**
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
 */const ly=1e3,uy=2,hy=14400*1e3,dy=.5;function Sl(n,e=ly,t=uy){const s=e*Math.pow(t,n),r=Math.round(dy*s*(Math.random()-.5)*2);return Math.min(hy,s+r)}/**
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
 */function de(n){return n&&n._delegate?n._delegate:n}class Ze{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yn="[DEFAULT]";/**
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
 */class fy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Gg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(py(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:my(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function my(n){return n===yn?void 0:n}function py(n){return n.instantiationMode==="EAGER"}/**
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
 */class gy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const yy={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},_y=J.INFO,wy={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},by=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=wy[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Di{constructor(e){this.name=e,this._logLevel=_y,this._logHandler=by,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const vy=(n,e)=>e.some(t=>n instanceof t);let Nl,Cl;function Ey(){return Nl||(Nl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ty(){return Cl||(Cl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Oh=new WeakMap,Ko=new WeakMap,Mh=new WeakMap,Co=new WeakMap,xa=new WeakMap;function Iy(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(zt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Oh.set(t,n)}).catch(()=>{}),xa.set(e,n),e}function xy(n){if(Ko.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ko.set(n,e)}let Qo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ko.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Mh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return zt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ay(n){Qo=n(Qo)}function Ry(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ko(this),e,...t);return Mh.set(s,e.sort?e.sort():[e]),zt(s)}:Ty().includes(n)?function(...e){return n.apply(ko(this),e),zt(Oh.get(this))}:function(...e){return zt(n.apply(ko(this),e))}}function Sy(n){return typeof n=="function"?Ry(n):(n instanceof IDBTransaction&&xy(n),vy(n,Ey())?new Proxy(n,Qo):n)}function zt(n){if(n instanceof IDBRequest)return Iy(n);if(Co.has(n))return Co.get(n);const e=Sy(n);return e!==n&&(Co.set(n,e),xa.set(e,n)),e}const ko=n=>xa.get(n);function Lh(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),c=zt(a);return s&&a.addEventListener("upgradeneeded",h=>{s(zt(a.result),h.oldVersion,h.newVersion,zt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{i&&h.addEventListener("close",()=>i()),r&&h.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Ny=["get","getKey","getAll","getAllKeys","count"],Cy=["put","add","delete","clear"],Po=new Map;function kl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Po.get(e))return Po.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Cy.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Ny.includes(t)))return;const i=async function(a,...c){const h=this.transaction(a,r?"readwrite":"readonly");let d=h.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),r&&h.done]))[0]};return Po.set(e,i),i}Ay(n=>({...n,get:(e,t,s)=>kl(e,t)||n.get(e,t,s),has:(e,t)=>!!kl(e,t)||n.has(e,t)}));/**
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
 */class ky{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Py(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Py(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yo="@firebase/app",Pl="0.14.6";/**
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
 */const Rt=new Di("@firebase/app"),Dy="@firebase/app-compat",Vy="@firebase/analytics-compat",jy="@firebase/analytics",Oy="@firebase/app-check-compat",My="@firebase/app-check",Ly="@firebase/auth",Uy="@firebase/auth-compat",Fy="@firebase/database",By="@firebase/data-connect",qy="@firebase/database-compat",$y="@firebase/functions",Hy="@firebase/functions-compat",zy="@firebase/installations",Gy="@firebase/installations-compat",Wy="@firebase/messaging",Ky="@firebase/messaging-compat",Qy="@firebase/performance",Yy="@firebase/performance-compat",Xy="@firebase/remote-config",Jy="@firebase/remote-config-compat",Zy="@firebase/storage",e_="@firebase/storage-compat",t_="@firebase/firestore",n_="@firebase/ai",s_="@firebase/firestore-compat",r_="firebase",i_="12.6.0";/**
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
 */const Xo="[DEFAULT]",o_={[Yo]:"fire-core",[Dy]:"fire-core-compat",[jy]:"fire-analytics",[Vy]:"fire-analytics-compat",[My]:"fire-app-check",[Oy]:"fire-app-check-compat",[Ly]:"fire-auth",[Uy]:"fire-auth-compat",[Fy]:"fire-rtdb",[By]:"fire-data-connect",[qy]:"fire-rtdb-compat",[$y]:"fire-fn",[Hy]:"fire-fn-compat",[zy]:"fire-iid",[Gy]:"fire-iid-compat",[Wy]:"fire-fcm",[Ky]:"fire-fcm-compat",[Qy]:"fire-perf",[Yy]:"fire-perf-compat",[Xy]:"fire-rc",[Jy]:"fire-rc-compat",[Zy]:"fire-gcs",[e_]:"fire-gcs-compat",[t_]:"fire-fst",[s_]:"fire-fst-compat",[n_]:"fire-vertex","fire-js":"fire-js",[r_]:"fire-js-all"};/**
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
 */const hi=new Map,a_=new Map,Jo=new Map;function Dl(n,e){try{n.container.addComponent(e)}catch(t){Rt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function rt(n){const e=n.name;if(Jo.has(e))return Rt.debug(`There were multiple attempts to register component ${e}.`),!1;Jo.set(e,n);for(const t of hi.values())Dl(t,n);for(const t of a_.values())Dl(t,n);return!0}function rn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Xe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const c_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gt=new Sn("app","Firebase",c_);/**
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
 */class l_{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
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
 */const Nn=i_;function Uh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Xo,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Gt.create("bad-app-name",{appName:String(r)});if(t||(t=Ch()),!t)throw Gt.create("no-options");const i=hi.get(r);if(i){if(Yt(t,i.options)&&Yt(s,i.config))return i;throw Gt.create("duplicate-app",{appName:r})}const a=new gy(r);for(const h of Jo.values())a.addComponent(h);const c=new l_(t,s,a);return hi.set(r,c),c}function Vi(n=Xo){const e=hi.get(n);if(!e&&n===Xo&&Ch())return Uh();if(!e)throw Gt.create("no-app",{appName:n});return e}function He(n,e,t){let s=o_[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rt.warn(a.join(" "));return}rt(new Ze(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const u_="firebase-heartbeat-database",h_=1,er="firebase-heartbeat-store";let Do=null;function Fh(){return Do||(Do=Lh(u_,h_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(er)}catch(t){console.warn(t)}}}}).catch(n=>{throw Gt.create("idb-open",{originalErrorMessage:n.message})})),Do}async function d_(n){try{const t=(await Fh()).transaction(er),s=await t.objectStore(er).get(Bh(n));return await t.done,s}catch(e){if(e instanceof et)Rt.warn(e.message);else{const t=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rt.warn(t.message)}}}async function Vl(n,e){try{const s=(await Fh()).transaction(er,"readwrite");await s.objectStore(er).put(e,Bh(n)),await s.done}catch(t){if(t instanceof et)Rt.warn(t.message);else{const s=Gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rt.warn(s.message)}}}function Bh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const f_=1024,m_=30;class p_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new y_(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=jl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>m_){const a=__(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Rt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jl(),{heartbeatsToSend:s,unsentEntries:r}=g_(this._heartbeatsCache.heartbeats),i=ui(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Rt.warn(t),""}}}function jl(){return new Date().toISOString().substring(0,10)}function g_(n,e=f_){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),Ol(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Ol(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class y_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vh()?jh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await d_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Vl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Vl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ol(n){return ui(JSON.stringify({version:2,heartbeats:n})).length}function __(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function w_(n){rt(new Ze("platform-logger",e=>new ky(e),"PRIVATE")),rt(new Ze("heartbeat",e=>new p_(e),"PRIVATE")),He(Yo,Pl,n),He(Yo,Pl,"esm2020"),He("fire-js","")}w_("");var b_="firebase",v_="12.6.0";/**
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
 */He(b_,v_,"app");function qh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const E_=qh,$h=new Sn("auth","Firebase",qh());/**
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
 */const di=new Di("@firebase/auth");function T_(n,...e){di.logLevel<=J.WARN&&di.warn(`Auth (${Nn}): ${n}`,...e)}function Xr(n,...e){di.logLevel<=J.ERROR&&di.error(`Auth (${Nn}): ${n}`,...e)}/**
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
 */function it(n,...e){throw Aa(n,...e)}function ft(n,...e){return Aa(n,...e)}function Hh(n,e,t){const s={...E_(),[e]:t};return new Sn("auth","Firebase",s).create(e,{appName:n.name})}function Wt(n){return Hh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Aa(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return $h.create(n,...e)}function z(n,e,...t){if(!n)throw Aa(e,...t)}function Et(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xr(e),new Error(e)}function St(n,e){n||Et(e)}/**
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
 */function Zo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function I_(){return Ml()==="http:"||Ml()==="https:"}function Ml(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function x_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I_()||Dh()||"connection"in navigator)?navigator.onLine:!0}function A_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class mr{constructor(e,t){this.shortDelay=e,this.longDelay=t,St(t>e,"Short delay should be less than long delay!"),this.isMobile=Qg()||Jg()}get(){return x_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ra(n,e){St(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class zh{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const R_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const S_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],N_=new mr(3e4,6e4);function Cn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function on(n,e,t,s,r={}){return Gh(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=fr({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:h,...i};return Xg()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&sn(n.emulatorConfig.host)&&(d.credentials="include"),zh.fetch()(await Wh(n,n.config.apiHost,t,c),d)})}async function Gh(n,e,t){n._canInitEmulator=!1;const s={...R_,...e};try{const r=new k_(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw qr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[h,d]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw qr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw qr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw qr(n,"user-disabled",a);const m=s[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Hh(n,m,d);it(n,m)}}catch(r){if(r instanceof et)throw r;it(n,"network-request-failed",{message:String(r)})}}async function ji(n,e,t,s,r={}){const i=await on(n,e,t,s,r);return"mfaPendingCredential"in i&&it(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Wh(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?Ra(n.config,r):`${n.config.apiScheme}://${r}`;return S_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function C_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class k_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ft(this.auth,"network-request-failed")),N_.get())})}}function qr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=ft(n,e,s);return r.customData._tokenResponse=t,r}function Ll(n){return n!==void 0&&n.enterprise!==void 0}class P_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return C_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function D_(n,e){return on(n,"GET","/v2/recaptchaConfig",Cn(n,e))}/**
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
 */async function V_(n,e){return on(n,"POST","/v1/accounts:delete",e)}async function fi(n,e){return on(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ws(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function j_(n,e=!1){const t=de(n),s=await t.getIdToken(e),r=Sa(s);z(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ws(Vo(r.auth_time)),issuedAtTime:Ws(Vo(r.iat)),expirationTime:Ws(Vo(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vo(n){return Number(n)*1e3}function Sa(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Xr("JWT malformed, contained fewer than 3 sections"),null;try{const r=Rh(t);return r?JSON.parse(r):(Xr("Failed to decode base64 JWT payload"),null)}catch(r){return Xr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ul(n){const e=Sa(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tr(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof et&&O_(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function O_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class M_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ea{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mi(n){var g;const e=n.auth,t=await n.getIdToken(),s=await tr(n,fi(e,{idToken:t}));z(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(g=r.providerUserInfo)!=null&&g.length?Kh(r.providerUserInfo):[],a=U_(n.providerData,i),c=n.isAnonymous,h=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?h:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ea(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function L_(n){const e=de(n);await mi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function U_(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Kh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function F_(n,e){const t=await Gh(n,{},async()=>{const s=fr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await Wh(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:c,body:s};return n.emulatorConfig&&sn(n.emulatorConfig.host)&&(h.credentials="include"),zh.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function B_(n,e){return on(n,"POST","/v2/accounts:revokeToken",Cn(n,e))}/**
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
 */class Qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ul(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=Ul(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await F_(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new Qn;return s&&(z(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(z(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(z(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qn,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
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
 */function Mt(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class nt{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new M_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ea(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await tr(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return j_(this,e)}reload(){return L_(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new nt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await mi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(Wt(this.auth));const e=await this.getIdToken();return await tr(this,V_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,h=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:g,emailVerified:_,isAnonymous:A,providerData:S,stsTokenManager:k}=t;z(g&&k,e,"internal-error");const N=Qn.fromJSON(this.name,k);z(typeof g=="string",e,"internal-error"),Mt(s,e.name),Mt(r,e.name),z(typeof _=="boolean",e,"internal-error"),z(typeof A=="boolean",e,"internal-error"),Mt(i,e.name),Mt(a,e.name),Mt(c,e.name),Mt(h,e.name),Mt(d,e.name),Mt(m,e.name);const $=new nt({uid:g,auth:e,email:r,emailVerified:_,displayName:s,isAnonymous:A,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:N,createdAt:d,lastLoginAt:m});return S&&Array.isArray(S)&&($.providerData=S.map(F=>({...F}))),h&&($._redirectEventId=h),$}static async _fromIdTokenResponse(e,t,s=!1){const r=new Qn;r.updateFromServerResponse(t);const i=new nt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await mi(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];z(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Kh(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new Qn;c.updateFromIdToken(s);const h=new nt({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ea(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(h,d),h}}/**
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
 */const Fl=new Map;function Tt(n){St(n instanceof Function,"Expected a class definition");let e=Fl.get(n);return e?(St(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fl.set(n,e),e)}/**
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
 */class Qh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Qh.type="NONE";const Bl=Qh;/**
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
 */function Jr(n,e,t){return`firebase:${n}:${e}:${t}`}class Yn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Jr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Jr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await fi(this.auth,{idToken:e}).catch(()=>{});return t?nt._fromGetAccountInfoResponse(this.auth,t,e):null}return nt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Yn(Tt(Bl),e,s);const r=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=r[0]||Tt(Bl);const a=Jr(s,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(a);if(m){let g;if(typeof m=="string"){const _=await fi(e,{idToken:m}).catch(()=>{});if(!_)break;g=await nt._fromGetAccountInfoResponse(e,_,m)}else g=nt._fromJSON(e,m);d!==i&&(c=g),i=d;break}}catch{}const h=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!h.length?new Yn(i,e,s):(i=h[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Yn(i,e,s))}}/**
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
 */function ql(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(td(e))return"Blackberry";if(nd(e))return"Webos";if(Xh(e))return"Safari";if((e.includes("chrome/")||Jh(e))&&!e.includes("edge/"))return"Chrome";if(ed(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Yh(n=je()){return/firefox\//i.test(n)}function Xh(n=je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jh(n=je()){return/crios\//i.test(n)}function Zh(n=je()){return/iemobile/i.test(n)}function ed(n=je()){return/android/i.test(n)}function td(n=je()){return/blackberry/i.test(n)}function nd(n=je()){return/webos/i.test(n)}function Na(n=je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function q_(n=je()){var e;return Na(n)&&!!((e=window.navigator)!=null&&e.standalone)}function $_(){return Zg()&&document.documentMode===10}function sd(n=je()){return Na(n)||ed(n)||nd(n)||td(n)||/windows phone/i.test(n)||Zh(n)}/**
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
 */function rd(n,e=[]){let t;switch(n){case"Browser":t=ql(je());break;case"Worker":t=`${ql(je())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Nn}/${s}`}/**
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
 */class H_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,c)=>{try{const h=e(i);a(h)}catch(h){c(h)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function z_(n,e={}){return on(n,"GET","/v2/passwordPolicy",Cn(n,e))}/**
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
 */const G_=6;class W_{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??G_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class K_{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $l(this),this.idTokenSubscription=new $l(this),this.beforeStateQueue=new H_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tt(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Yn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fi(this,{idToken:e}),s=await nt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Xe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===c)&&(h!=null&&h.user)&&(s=h.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await mi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(Wt(this));const t=e?de(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(Wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(Wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await z_(this),t=new W_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Sn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await B_(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Tt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await Yn.create(this,[Tt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,s,r);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&T_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ls(n){return de(n)}class $l{constructor(e){this.auth=e,this.observer=null,this.addObserver=oy(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Oi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Q_(n){Oi=n}function id(n){return Oi.loadJS(n)}function Y_(){return Oi.recaptchaEnterpriseScript}function X_(){return Oi.gapiScript}function J_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Z_{constructor(){this.enterprise=new ew}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ew{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const tw="recaptcha-enterprise",od="NO_RECAPTCHA";class nw{constructor(e){this.type=tw,this.auth=ls(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{D_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new P_(h);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(h=>{c(h)})})}function r(i,a,c){const h=window.grecaptcha;Ll(h)?h.enterprise.ready(()=>{h.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(od)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Z_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(c=>{if(!t&&Ll(window.grecaptcha))r(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Y_();h.length!==0&&(h+=c),id(h).then(()=>{r(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Hl(n,e,t,s=!1,r=!1){const i=new nw(n);let a;if(r)a=od;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const h=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const h=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function zl(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Hl(n,e,t,t==="getOobCode");return s(n,a)}else return s(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Hl(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(a)})}/**
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
 */function sw(n,e){const t=rn(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Yt(i,e??{}))return r;it(r,"already-initialized")}return t.initialize({options:e})}function rw(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Tt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function iw(n,e,t){const s=ls(n);z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=ad(e),{host:a,port:c}=ow(e),h=c===null?"":`:${c}`,d={url:`${i}//${a}${h}/`},m=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){z(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),z(Yt(d,s.config.emulator)&&Yt(m,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=m,s.settings.appVerificationDisabledForTesting=!0,sn(a)?(Ta(`${i}//${a}${h}`),Ia("Auth",!0)):aw()}function ad(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ow(n){const e=ad(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Gl(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:Gl(a)}}}function Gl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function aw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ca{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,t){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}}async function cw(n,e){return on(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lw(n,e){return ji(n,"POST","/v1/accounts:signInWithPassword",Cn(n,e))}/**
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
 */async function uw(n,e){return ji(n,"POST","/v1/accounts:signInWithEmailLink",Cn(n,e))}async function hw(n,e){return ji(n,"POST","/v1/accounts:signInWithEmailLink",Cn(n,e))}/**
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
 */class nr extends Ca{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new nr(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new nr(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zl(e,t,"signInWithPassword",lw);case"emailLink":return uw(e,{email:this._email,oobCode:this._password});default:it(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zl(e,s,"signUpPassword",cw);case"emailLink":return hw(e,{idToken:t,email:this._email,oobCode:this._password});default:it(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xn(n,e){return ji(n,"POST","/v1/accounts:signInWithIdp",Cn(n,e))}/**
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
 */const dw="http://localhost";class En extends Ca{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new En(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):it("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const a=new En(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Xn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Xn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xn(e,t)}buildRequest(){const e={requestUri:dw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fr(t)}return e}}/**
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
 */function fw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mw(n){const e=Fs(Bs(n)).link,t=e?Fs(Bs(e)).deep_link_id:null,s=Fs(Bs(n)).deep_link_id;return(s?Fs(Bs(s)).link:null)||s||t||e||n}class ka{constructor(e){const t=Fs(Bs(e)),s=t.apiKey??null,r=t.oobCode??null,i=fw(t.mode??null);z(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=mw(e);try{return new ka(t)}catch{return null}}}/**
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
 */class us{constructor(){this.providerId=us.PROVIDER_ID}static credential(e,t){return nr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ka.parseLink(t);return z(s,"argument-error"),nr._fromEmailAndCode(e,s.code,s.tenantId)}}us.PROVIDER_ID="password";us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class cd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pr extends cd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Lt extends pr{constructor(){super("facebook.com")}static credential(e){return En._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lt.PROVIDER_ID="facebook.com";/**
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
 */class Ut extends pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return En._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ut.credential(t,s)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
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
 */class Ft extends pr{constructor(){super("github.com")}static credential(e){return En._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
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
 */class Bt extends pr{constructor(){super("twitter.com")}static credential(e,t){return En._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Bt.credential(t,s)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
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
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await nt._fromIdTokenResponse(e,s,r),a=Wl(s);return new ns({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Wl(s);return new ns({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Wl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class pi extends et{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,pi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new pi(e,t,s,r)}}function ld(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pi._fromErrorAndOperation(n,i,e,s):i})}async function pw(n,e,t=!1){const s=await tr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ns._forOperation(n,"link",s)}/**
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
 */async function gw(n,e,t=!1){const{auth:s}=n;if(Xe(s.app))return Promise.reject(Wt(s));const r="reauthenticate";try{const i=await tr(n,ld(s,r,e,n),t);z(i.idToken,s,"internal-error");const a=Sa(i.idToken);z(a,s,"internal-error");const{sub:c}=a;return z(n.uid===c,s,"user-mismatch"),ns._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&it(s,"user-mismatch"),i}}/**
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
 */async function ud(n,e,t=!1){if(Xe(n.app))return Promise.reject(Wt(n));const s="signIn",r=await ld(n,s,e),i=await ns._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function yw(n,e){return ud(ls(n),e)}/**
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
 */async function _w(n){const e=ls(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ww(n,e,t){return Xe(n.app)?Promise.reject(Wt(n)):yw(de(n),us.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&_w(n),s})}function bw(n,e,t,s){return de(n).onIdTokenChanged(e,t,s)}function vw(n,e,t){return de(n).beforeAuthStateChanged(e,t)}function Pa(n,e,t,s){return de(n).onAuthStateChanged(e,t,s)}function hd(n){return de(n).signOut()}const gi="__sak";/**
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
 */class dd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gi,"1"),this.storage.removeItem(gi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ew=1e3,Tw=10;class fd extends dd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,h)=>{this.notifyListeners(a,h)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);$_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Tw):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Ew)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fd.type="LOCAL";const Iw=fd;/**
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
 */class md extends dd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}md.type="SESSION";const pd=md;/**
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
 */function xw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Mi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Mi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async d=>d(t.origin,i)),h=await xw(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mi.receivers=[];/**
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
 */function Da(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Aw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,h)=>{const d=Da("",20);r.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(g){const _=g;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(m),clearTimeout(i),h(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function mt(){return window}function Rw(n){mt().location.href=n}/**
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
 */function gd(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function Sw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Cw(){return gd()?self:null}/**
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
 */const yd="firebaseLocalStorageDb",kw=1,yi="firebaseLocalStorage",_d="fbase_key";class gr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Li(n,e){return n.transaction([yi],e?"readwrite":"readonly").objectStore(yi)}function Pw(){const n=indexedDB.deleteDatabase(yd);return new gr(n).toPromise()}function ta(){const n=indexedDB.open(yd,kw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(yi,{keyPath:_d})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(yi)?e(s):(s.close(),await Pw(),e(await ta()))})})}async function Kl(n,e,t){const s=Li(n,!0).put({[_d]:e,value:t});return new gr(s).toPromise()}async function Dw(n,e){const t=Li(n,!1).get(e),s=await new gr(t).toPromise();return s===void 0?null:s.value}function Ql(n,e){const t=Li(n,!0).delete(e);return new gr(t).toPromise()}const Vw=800,jw=3;class wd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ta(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>jw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mi._getInstance(Cw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await Sw(),!this.activeServiceWorker)return;this.sender=new Aw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ta();return await Kl(e,gi,"1"),await Ql(e,gi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Kl(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Dw(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ql(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Li(r,!1).getAll();return new gr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wd.type="LOCAL";const Ow=wd;new mr(3e4,6e4);/**
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
 */function Mw(n,e){return e?Tt(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Va extends Ca{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Lw(n){return ud(n.auth,new Va(n),n.bypassAuthState)}function Uw(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),gw(t,new Va(n),n.bypassAuthState)}async function Fw(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),pw(t,new Va(n),n.bypassAuthState)}/**
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
 */class bd{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lw;case"linkViaPopup":case"linkViaRedirect":return Fw;case"reauthViaPopup":case"reauthViaRedirect":return Uw;default:it(this.auth,"internal-error")}}resolve(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bw=new mr(2e3,1e4);class Kn extends bd{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){St(this.filter.length===1,"Popup operations only handle one event");const e=Da();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bw.get())};e()}}Kn.currentPopupAction=null;/**
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
 */const qw="pendingRedirect",Zr=new Map;class $w extends bd{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Zr.get(this.auth._key());if(!e){try{const s=await Hw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Zr.set(this.auth._key(),e)}return this.bypassAuthState||Zr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hw(n,e){const t=Ww(e),s=Gw(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function zw(n,e){Zr.set(n._key(),e)}function Gw(n){return Tt(n._redirectPersistence)}function Ww(n){return Jr(qw,n.config.apiKey,n.name)}async function Kw(n,e,t=!1){if(Xe(n.app))return Promise.reject(Wt(n));const s=ls(n),r=Mw(s,e),a=await new $w(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const Qw=600*1e3;class Yw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!vd(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(ft(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yl(e))}saveEventToCache(e){this.cachedEventUids.add(Yl(e)),this.lastProcessedEventTime=Date.now()}}function Yl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function vd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vd(n);default:return!1}}/**
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
 */async function Jw(n,e={}){return on(n,"GET","/v1/projects",e)}/**
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
 */const Zw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eb=/^https?/;async function tb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Jw(n);for(const t of e)try{if(nb(t))return}catch{}it(n,"unauthorized-domain")}function nb(n){const e=Zo(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!eb.test(t))return!1;if(Zw.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const sb=new mr(3e4,6e4);function Xl(){const n=mt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function rb(n){return new Promise((e,t)=>{var r,i,a;function s(){Xl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xl(),t(ft(n,"network-request-failed"))},timeout:sb.get()})}if((i=(r=mt().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=mt().gapi)!=null&&a.load)s();else{const c=J_("iframefcb");return mt()[c]=()=>{gapi.load?s():t(ft(n,"network-request-failed"))},id(`${X_()}?onload=${c}`).catch(h=>t(h))}}).catch(e=>{throw ei=null,e})}let ei=null;function ib(n){return ei=ei||rb(n),ei}/**
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
 */const ob=new mr(5e3,15e3),ab="__/auth/iframe",cb="emulator/auth/iframe",lb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ub=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hb(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ra(e,cb):`https://${n.config.authDomain}/${ab}`,s={apiKey:e.apiKey,appName:n.name,v:Nn},r=ub.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${fr(s).slice(1)}`}async function db(n){const e=await ib(n),t=mt().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:hb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lb,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=ft(n,"network-request-failed"),c=mt().setTimeout(()=>{i(a)},ob.get());function h(){mt().clearTimeout(c),r(s)}s.ping(h).then(h,()=>{i(a)})}))}/**
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
 */const fb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mb=500,pb=600,gb="_blank",yb="http://localhost";class Jl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _b(n,e,t,s=mb,r=pb){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const h={...fb,width:s.toString(),height:r.toString(),top:i,left:a},d=je().toLowerCase();t&&(c=Jh(d)?gb:t),Yh(d)&&(e=e||yb,h.scrollbars="yes");const m=Object.entries(h).reduce((_,[A,S])=>`${_}${A}=${S},`,"");if(q_(d)&&c!=="_self")return wb(e||"",c),new Jl(null);const g=window.open(e||"",c,m);z(g,n,"popup-blocked");try{g.focus()}catch{}return new Jl(g)}function wb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const bb="__/auth/handler",vb="emulator/auth/handler",Eb=encodeURIComponent("fac");async function Zl(n,e,t,s,r,i){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Nn,eventId:r};if(e instanceof cd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",iy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))a[m]=g}if(e instanceof pr){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const h=await n._getAppCheckToken(),d=h?`#${Eb}=${encodeURIComponent(h)}`:"";return`${Tb(n)}?${fr(c).slice(1)}${d}`}function Tb({config:n}){return n.emulator?Ra(n,vb):`https://${n.authDomain}/${bb}`}/**
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
 */const jo="webStorageSupport";class Ib{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pd,this._completeRedirectFn=Kw,this._overrideRedirectResult=zw}async _openPopup(e,t,s,r){var a;St((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Zl(e,t,s,Zo(),r);return _b(e,i,Da())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Zl(e,t,s,Zo(),r);return Rw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(St(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await db(e),s=new Yw(e);return t.register("authEvent",r=>(z(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(jo,{type:jo},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[jo];i!==void 0&&t(!!i),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sd()||Xh()||Na()}}const xb=Ib;var eu="@firebase/auth",tu="1.11.1";/**
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
 */class Ab{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Rb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sb(n){rt(new Ze("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const h={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rd(n)},d=new K_(s,r,i,h);return rw(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),rt(new Ze("auth-internal",e=>{const t=ls(e.getProvider("auth").getImmediate());return(s=>new Ab(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(eu,tu,Rb(n)),He(eu,tu,"esm2020")}/**
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
 */const Nb=300,Cb=kh("authIdTokenMaxAge")||Nb;let nu=null;const kb=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Cb)return;const r=t==null?void 0:t.token;nu!==r&&(nu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Pb(n=Vi()){const e=rn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=sw(n,{popupRedirectResolver:xb,persistence:[Ow,Iw,pd]}),s=kh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=kb(i.toString());vw(t,a,()=>a(t.currentUser)),bw(t,c=>a(c))}}const r=Sh("auth");return r&&iw(t,`http://${r}`),t}function Db(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Q_({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=ft("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",Db().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sb("Browser");var su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kt,Ed;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function b(){}b.prototype=y.prototype,v.F=y.prototype,v.prototype=new b,v.prototype.constructor=v,v.D=function(T,E,I){for(var w=Array(arguments.length-2),te=2;te<arguments.length;te++)w[te-2]=arguments[te];return y.prototype[E].apply(T,w)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(v,y,b){b||(b=0);const T=Array(16);if(typeof y=="string")for(var E=0;E<16;++E)T[E]=y.charCodeAt(b++)|y.charCodeAt(b++)<<8|y.charCodeAt(b++)<<16|y.charCodeAt(b++)<<24;else for(E=0;E<16;++E)T[E]=y[b++]|y[b++]<<8|y[b++]<<16|y[b++]<<24;y=v.g[0],b=v.g[1],E=v.g[2];let I=v.g[3],w;w=y+(I^b&(E^I))+T[0]+3614090360&4294967295,y=b+(w<<7&4294967295|w>>>25),w=I+(E^y&(b^E))+T[1]+3905402710&4294967295,I=y+(w<<12&4294967295|w>>>20),w=E+(b^I&(y^b))+T[2]+606105819&4294967295,E=I+(w<<17&4294967295|w>>>15),w=b+(y^E&(I^y))+T[3]+3250441966&4294967295,b=E+(w<<22&4294967295|w>>>10),w=y+(I^b&(E^I))+T[4]+4118548399&4294967295,y=b+(w<<7&4294967295|w>>>25),w=I+(E^y&(b^E))+T[5]+1200080426&4294967295,I=y+(w<<12&4294967295|w>>>20),w=E+(b^I&(y^b))+T[6]+2821735955&4294967295,E=I+(w<<17&4294967295|w>>>15),w=b+(y^E&(I^y))+T[7]+4249261313&4294967295,b=E+(w<<22&4294967295|w>>>10),w=y+(I^b&(E^I))+T[8]+1770035416&4294967295,y=b+(w<<7&4294967295|w>>>25),w=I+(E^y&(b^E))+T[9]+2336552879&4294967295,I=y+(w<<12&4294967295|w>>>20),w=E+(b^I&(y^b))+T[10]+4294925233&4294967295,E=I+(w<<17&4294967295|w>>>15),w=b+(y^E&(I^y))+T[11]+2304563134&4294967295,b=E+(w<<22&4294967295|w>>>10),w=y+(I^b&(E^I))+T[12]+1804603682&4294967295,y=b+(w<<7&4294967295|w>>>25),w=I+(E^y&(b^E))+T[13]+4254626195&4294967295,I=y+(w<<12&4294967295|w>>>20),w=E+(b^I&(y^b))+T[14]+2792965006&4294967295,E=I+(w<<17&4294967295|w>>>15),w=b+(y^E&(I^y))+T[15]+1236535329&4294967295,b=E+(w<<22&4294967295|w>>>10),w=y+(E^I&(b^E))+T[1]+4129170786&4294967295,y=b+(w<<5&4294967295|w>>>27),w=I+(b^E&(y^b))+T[6]+3225465664&4294967295,I=y+(w<<9&4294967295|w>>>23),w=E+(y^b&(I^y))+T[11]+643717713&4294967295,E=I+(w<<14&4294967295|w>>>18),w=b+(I^y&(E^I))+T[0]+3921069994&4294967295,b=E+(w<<20&4294967295|w>>>12),w=y+(E^I&(b^E))+T[5]+3593408605&4294967295,y=b+(w<<5&4294967295|w>>>27),w=I+(b^E&(y^b))+T[10]+38016083&4294967295,I=y+(w<<9&4294967295|w>>>23),w=E+(y^b&(I^y))+T[15]+3634488961&4294967295,E=I+(w<<14&4294967295|w>>>18),w=b+(I^y&(E^I))+T[4]+3889429448&4294967295,b=E+(w<<20&4294967295|w>>>12),w=y+(E^I&(b^E))+T[9]+568446438&4294967295,y=b+(w<<5&4294967295|w>>>27),w=I+(b^E&(y^b))+T[14]+3275163606&4294967295,I=y+(w<<9&4294967295|w>>>23),w=E+(y^b&(I^y))+T[3]+4107603335&4294967295,E=I+(w<<14&4294967295|w>>>18),w=b+(I^y&(E^I))+T[8]+1163531501&4294967295,b=E+(w<<20&4294967295|w>>>12),w=y+(E^I&(b^E))+T[13]+2850285829&4294967295,y=b+(w<<5&4294967295|w>>>27),w=I+(b^E&(y^b))+T[2]+4243563512&4294967295,I=y+(w<<9&4294967295|w>>>23),w=E+(y^b&(I^y))+T[7]+1735328473&4294967295,E=I+(w<<14&4294967295|w>>>18),w=b+(I^y&(E^I))+T[12]+2368359562&4294967295,b=E+(w<<20&4294967295|w>>>12),w=y+(b^E^I)+T[5]+4294588738&4294967295,y=b+(w<<4&4294967295|w>>>28),w=I+(y^b^E)+T[8]+2272392833&4294967295,I=y+(w<<11&4294967295|w>>>21),w=E+(I^y^b)+T[11]+1839030562&4294967295,E=I+(w<<16&4294967295|w>>>16),w=b+(E^I^y)+T[14]+4259657740&4294967295,b=E+(w<<23&4294967295|w>>>9),w=y+(b^E^I)+T[1]+2763975236&4294967295,y=b+(w<<4&4294967295|w>>>28),w=I+(y^b^E)+T[4]+1272893353&4294967295,I=y+(w<<11&4294967295|w>>>21),w=E+(I^y^b)+T[7]+4139469664&4294967295,E=I+(w<<16&4294967295|w>>>16),w=b+(E^I^y)+T[10]+3200236656&4294967295,b=E+(w<<23&4294967295|w>>>9),w=y+(b^E^I)+T[13]+681279174&4294967295,y=b+(w<<4&4294967295|w>>>28),w=I+(y^b^E)+T[0]+3936430074&4294967295,I=y+(w<<11&4294967295|w>>>21),w=E+(I^y^b)+T[3]+3572445317&4294967295,E=I+(w<<16&4294967295|w>>>16),w=b+(E^I^y)+T[6]+76029189&4294967295,b=E+(w<<23&4294967295|w>>>9),w=y+(b^E^I)+T[9]+3654602809&4294967295,y=b+(w<<4&4294967295|w>>>28),w=I+(y^b^E)+T[12]+3873151461&4294967295,I=y+(w<<11&4294967295|w>>>21),w=E+(I^y^b)+T[15]+530742520&4294967295,E=I+(w<<16&4294967295|w>>>16),w=b+(E^I^y)+T[2]+3299628645&4294967295,b=E+(w<<23&4294967295|w>>>9),w=y+(E^(b|~I))+T[0]+4096336452&4294967295,y=b+(w<<6&4294967295|w>>>26),w=I+(b^(y|~E))+T[7]+1126891415&4294967295,I=y+(w<<10&4294967295|w>>>22),w=E+(y^(I|~b))+T[14]+2878612391&4294967295,E=I+(w<<15&4294967295|w>>>17),w=b+(I^(E|~y))+T[5]+4237533241&4294967295,b=E+(w<<21&4294967295|w>>>11),w=y+(E^(b|~I))+T[12]+1700485571&4294967295,y=b+(w<<6&4294967295|w>>>26),w=I+(b^(y|~E))+T[3]+2399980690&4294967295,I=y+(w<<10&4294967295|w>>>22),w=E+(y^(I|~b))+T[10]+4293915773&4294967295,E=I+(w<<15&4294967295|w>>>17),w=b+(I^(E|~y))+T[1]+2240044497&4294967295,b=E+(w<<21&4294967295|w>>>11),w=y+(E^(b|~I))+T[8]+1873313359&4294967295,y=b+(w<<6&4294967295|w>>>26),w=I+(b^(y|~E))+T[15]+4264355552&4294967295,I=y+(w<<10&4294967295|w>>>22),w=E+(y^(I|~b))+T[6]+2734768916&4294967295,E=I+(w<<15&4294967295|w>>>17),w=b+(I^(E|~y))+T[13]+1309151649&4294967295,b=E+(w<<21&4294967295|w>>>11),w=y+(E^(b|~I))+T[4]+4149444226&4294967295,y=b+(w<<6&4294967295|w>>>26),w=I+(b^(y|~E))+T[11]+3174756917&4294967295,I=y+(w<<10&4294967295|w>>>22),w=E+(y^(I|~b))+T[2]+718787259&4294967295,E=I+(w<<15&4294967295|w>>>17),w=b+(I^(E|~y))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(E+(w<<21&4294967295|w>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}s.prototype.v=function(v,y){y===void 0&&(y=v.length);const b=y-this.blockSize,T=this.C;let E=this.h,I=0;for(;I<y;){if(E==0)for(;I<=b;)r(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<y;)if(T[E++]=v.charCodeAt(I++),E==this.blockSize){r(this,T),E=0;break}}else for(;I<y;)if(T[E++]=v[I++],E==this.blockSize){r(this,T),E=0;break}}this.h=E,this.o+=y},s.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var b=v.length-8;b<v.length;++b)v[b]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,b=0;b<4;++b)for(let T=0;T<32;T+=8)v[y++]=this.g[b]>>>T&255;return v};function i(v,y){var b=c;return Object.prototype.hasOwnProperty.call(b,v)?b[v]:b[v]=y(v)}function a(v,y){this.h=y;const b=[];let T=!0;for(let E=v.length-1;E>=0;E--){const I=v[E]|0;T&&I==y||(b[E]=I,T=!1)}this.g=b}var c={};function h(v){return-128<=v&&v<128?i(v,function(y){return new a([y|0],y<0?-1:0)}):new a([v|0],v<0?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return g;if(v<0)return N(d(-v));const y=[];let b=1;for(let T=0;v>=b;T++)y[T]=v/b|0,b*=4294967296;return new a(y,0)}function m(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return N(m(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=d(Math.pow(y,8));let T=g;for(let I=0;I<v.length;I+=8){var E=Math.min(8,v.length-I);const w=parseInt(v.substring(I,I+E),y);E<8?(E=d(Math.pow(y,E)),T=T.j(E).add(d(w))):(T=T.j(b),T=T.add(d(w)))}return T}var g=h(0),_=h(1),A=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-N(this).m();let v=0,y=1;for(let b=0;b<this.g.length;b++){const T=this.i(b);v+=(T>=0?T:4294967296+T)*y,y*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(k(this))return"-"+N(this).toString(v);const y=d(Math.pow(v,6));var b=this;let T="";for(;;){const E=O(b,y).g;b=$(b,E.j(y));let I=((b.g.length>0?b.g[0]:b.h)>>>0).toString(v);if(b=E,S(b))return I+T;for(;I.length<6;)I="0"+I;T=I+T}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function k(v){return v.h==-1}n.l=function(v){return v=$(this,v),k(v)?-1:S(v)?0:1};function N(v){const y=v.g.length,b=[];for(let T=0;T<y;T++)b[T]=~v.g[T];return new a(b,~v.h).add(_)}n.abs=function(){return k(this)?N(this):this},n.add=function(v){const y=Math.max(this.g.length,v.g.length),b=[];let T=0;for(let E=0;E<=y;E++){let I=T+(this.i(E)&65535)+(v.i(E)&65535),w=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);T=w>>>16,I&=65535,w&=65535,b[E]=w<<16|I}return new a(b,b[b.length-1]&-2147483648?-1:0)};function $(v,y){return v.add(N(y))}n.j=function(v){if(S(this)||S(v))return g;if(k(this))return k(v)?N(this).j(N(v)):N(N(this).j(v));if(k(v))return N(this.j(N(v)));if(this.l(A)<0&&v.l(A)<0)return d(this.m()*v.m());const y=this.g.length+v.g.length,b=[];for(var T=0;T<2*y;T++)b[T]=0;for(T=0;T<this.g.length;T++)for(let E=0;E<v.g.length;E++){const I=this.i(T)>>>16,w=this.i(T)&65535,te=v.i(E)>>>16,_e=v.i(E)&65535;b[2*T+2*E]+=w*_e,F(b,2*T+2*E),b[2*T+2*E+1]+=I*_e,F(b,2*T+2*E+1),b[2*T+2*E+1]+=w*te,F(b,2*T+2*E+1),b[2*T+2*E+2]+=I*te,F(b,2*T+2*E+2)}for(v=0;v<y;v++)b[v]=b[2*v+1]<<16|b[2*v];for(v=y;v<2*y;v++)b[v]=0;return new a(b,0)};function F(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function D(v,y){this.g=v,this.h=y}function O(v,y){if(S(y))throw Error("division by zero");if(S(v))return new D(g,g);if(k(v))return y=O(N(v),y),new D(N(y.g),N(y.h));if(k(y))return y=O(v,N(y)),new D(N(y.g),y.h);if(v.g.length>30){if(k(v)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var b=_,T=y;T.l(v)<=0;)b=j(b),T=j(T);var E=q(b,1),I=q(T,1);for(T=q(T,2),b=q(b,2);!S(T);){var w=I.add(T);w.l(v)<=0&&(E=E.add(b),I=w),T=q(T,1),b=q(b,1)}return y=$(v,E.j(y)),new D(E,y)}for(E=g;v.l(y)>=0;){for(b=Math.max(1,Math.floor(v.m()/y.m())),T=Math.ceil(Math.log(b)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),I=d(b),w=I.j(y);k(w)||w.l(v)>0;)b-=T,I=d(b),w=I.j(y);S(I)&&(I=_),E=E.add(I),v=$(v,w)}return new D(E,v)}n.B=function(v){return O(this,v).h},n.and=function(v){const y=Math.max(this.g.length,v.g.length),b=[];for(let T=0;T<y;T++)b[T]=this.i(T)&v.i(T);return new a(b,this.h&v.h)},n.or=function(v){const y=Math.max(this.g.length,v.g.length),b=[];for(let T=0;T<y;T++)b[T]=this.i(T)|v.i(T);return new a(b,this.h|v.h)},n.xor=function(v){const y=Math.max(this.g.length,v.g.length),b=[];for(let T=0;T<y;T++)b[T]=this.i(T)^v.i(T);return new a(b,this.h^v.h)};function j(v){const y=v.g.length+1,b=[];for(let T=0;T<y;T++)b[T]=v.i(T)<<1|v.i(T-1)>>>31;return new a(b,v.h)}function q(v,y){const b=y>>5;y%=32;const T=v.g.length-b,E=[];for(let I=0;I<T;I++)E[I]=y>0?v.i(I+b)>>>y|v.i(I+b+1)<<32-y:v.i(I+b);return new a(E,v.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Ed=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Kt=a}).apply(typeof su<"u"?su:typeof self<"u"?self:typeof window<"u"?window:{});var $r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Td,qs,Id,ti,na,xd,Ad,Rd;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $r=="object"&&$r];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=t(this);function r(o,u){if(u)e:{var f=s;o=o.split(".");for(var p=0;p<o.length-1;p++){var x=o[p];if(!(x in f))break e;f=f[x]}o=o[o.length-1],p=f[o],u=u(p),u!=p&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(u){var f=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&f.push([p,u[p]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function h(o,u,f){return o.call.apply(o.bind,arguments)}function d(o,u,f){return d=h,d.apply(null,arguments)}function m(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function g(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(p,x,R){for(var V=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)V[Y-2]=arguments[Y];return u.prototype[x].apply(p,V)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function A(o){const u=o.length;if(u>0){const f=Array(u);for(let p=0;p<u;p++)f[p]=o[p];return f}return[]}function S(o,u){for(let p=1;p<arguments.length;p++){const x=arguments[p];var f=typeof x;if(f=f!="object"?f:x?Array.isArray(x)?"array":f:"null",f=="array"||f=="object"&&typeof x.length=="number"){f=o.length||0;const R=x.length||0;o.length=f+R;for(let V=0;V<R;V++)o[f+V]=x[V]}else o.push(x)}}class k{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function N(o){a.setTimeout(()=>{throw o},0)}function $(){var o=v;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class F{constructor(){this.h=this.g=null}add(u,f){const p=D.get();p.set(u,f),this.h?this.h.next=p:this.g=p,this.h=p}}var D=new k(()=>new O,o=>o.reset());class O{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let j,q=!1,v=new F,y=()=>{const o=Promise.resolve(void 0);j=()=>{o.then(b)}};function b(){for(var o;o=$();){try{o.h.call(o.g)}catch(f){N(f)}var u=D;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}q=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,u),a.removeEventListener("test",f,u)}catch{}return o})();function w(o){return/^[\s\xa0]*$/.test(o)}function te(o,u){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}g(te,E),te.prototype.init=function(o,u){const f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&te.Z.h.call(this)},te.prototype.h=function(){te.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var _e="closure_listenable_"+(Math.random()*1e6|0),Vn=0;function _s(o,u,f,p,x){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!p,this.ha=x,this.key=++Vn,this.da=this.fa=!1}function at(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function tt(o,u,f){for(const p in o)u.call(f,o[p],p,o)}function xr(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function ct(o){const u={};for(const f in o)u[f]=o[f];return u}const ln="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function un(o,u){let f,p;for(let x=1;x<arguments.length;x++){p=arguments[x];for(f in p)o[f]=p[f];for(let R=0;R<ln.length;R++)f=ln[R],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function vt(o){this.src=o,this.g={},this.h=0}vt.prototype.add=function(o,u,f,p,x){const R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);const V=ue(o,u,p,x);return V>-1?(u=o[V],f||(u.fa=!1)):(u=new _s(u,this.src,R,!!p,x),u.fa=f,o.push(u)),u};function hn(o,u){const f=u.type;if(f in o.g){var p=o.g[f],x=Array.prototype.indexOf.call(p,u,void 0),R;(R=x>=0)&&Array.prototype.splice.call(p,x,1),R&&(at(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function ue(o,u,f,p){for(let x=0;x<o.length;++x){const R=o[x];if(!R.da&&R.listener==u&&R.capture==!!f&&R.ha==p)return x}return-1}var ws="closure_lm_"+(Math.random()*1e6|0),bs={};function Ar(o,u,f,p,x){if(Array.isArray(u)){for(let R=0;R<u.length;R++)Ar(o,u[R],f,p,x);return null}return f=ie(f),o&&o[_e]?o.J(u,f,c(p)?!!p.capture:!1,x):Rr(o,u,f,!1,p,x)}function Rr(o,u,f,p,x,R){if(!u)throw Error("Invalid event type");const V=c(x)?!!x.capture:!!x;let Y=M(o);if(Y||(o[ws]=Y=new vt(o)),f=Y.add(u,f,p,V,R),f.proxy)return f;if(p=jn(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)I||(x=V),x===void 0&&(x=!1),o.addEventListener(u.toString(),p,x);else if(o.attachEvent)o.attachEvent(Nr(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function jn(){function o(f){return u.call(o.src,o.listener,f)}const u=co;return o}function Sr(o,u,f,p,x){if(Array.isArray(u))for(var R=0;R<u.length;R++)Sr(o,u[R],f,p,x);else p=c(p)?!!p.capture:!!p,f=ie(f),o&&o[_e]?(o=o.i,R=String(u).toString(),R in o.g&&(u=o.g[R],f=ue(u,f,p,x),f>-1&&(at(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[R],o.h--)))):o&&(o=M(o))&&(u=o.g[u.toString()],o=-1,u&&(o=ue(u,f,p,x)),(f=o>-1?u[o]:null)&&vs(f))}function vs(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[_e])hn(u.i,o);else{var f=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(f,p,o.capture):u.detachEvent?u.detachEvent(Nr(f),p):u.addListener&&u.removeListener&&u.removeListener(p),(f=M(u))?(hn(f,o),f.h==0&&(f.src=null,u[ws]=null)):at(o)}}}function Nr(o){return o in bs?bs[o]:bs[o]="on"+o}function co(o,u){if(o.da)o=!0;else{u=new te(u,this);const f=o.listener,p=o.ha||o.src;o.fa&&vs(o),o=f.call(p,u)}return o}function M(o){return o=o[ws],o instanceof vt?o:null}var W="__closure_events_fn_"+(Math.random()*1e9>>>0);function ie(o){return typeof o=="function"?o:(o[W]||(o[W]=function(u){return o.handleEvent(u)}),o[W])}function se(){T.call(this),this.i=new vt(this),this.M=this,this.G=null}g(se,T),se.prototype[_e]=!0,se.prototype.removeEventListener=function(o,u,f,p){Sr(this,o,u,f,p)};function me(o,u){var f,p=o.G;if(p)for(f=[];p;p=p.G)f.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new E(u,o);else if(u instanceof E)u.target=u.target||o;else{var x=u;u=new E(p,o),un(u,x)}x=!0;let R,V;if(f)for(V=f.length-1;V>=0;V--)R=u.g=f[V],x=ze(R,p,!0,u)&&x;if(R=u.g=o,x=ze(R,p,!0,u)&&x,x=ze(R,p,!1,u)&&x,f)for(V=0;V<f.length;V++)R=u.g=f[V],x=ze(R,p,!1,u)&&x}se.prototype.N=function(){if(se.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let p=0;p<f.length;p++)at(f[p]);delete o.g[u],o.h--}}this.G=null},se.prototype.J=function(o,u,f,p){return this.i.add(String(o),u,!1,f,p)},se.prototype.K=function(o,u,f,p){return this.i.add(String(o),u,!0,f,p)};function ze(o,u,f,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let x=!0;for(let R=0;R<u.length;++R){const V=u[R];if(V&&!V.da&&V.capture==f){const Y=V.listener,Ie=V.ha||V.src;V.fa&&hn(o.i,V),x=Y.call(Ie,p)!==!1&&x}}return x&&!p.defaultPrevented}function On(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function Ye(o){o.g=On(()=>{o.g=null,o.i&&(o.i=!1,Ye(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class lo extends T{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ye(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Es(o){T.call(this),this.h=o,this.g={}}g(Es,T);var Ac=[];function Rc(o){tt(o.g,function(u,f){this.g.hasOwnProperty(f)&&vs(u)},o),o.g={}}Es.prototype.N=function(){Es.Z.N.call(this),Rc(this)},Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var uo=a.JSON.stringify,zm=a.JSON.parse,Gm=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Sc(){}function Nc(){}var Ts={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ho(){E.call(this,"d")}g(ho,E);function fo(){E.call(this,"c")}g(fo,E);var dn={},Cc=null;function Cr(){return Cc=Cc||new se}dn.Ia="serverreachability";function kc(o){E.call(this,dn.Ia,o)}g(kc,E);function Is(o){const u=Cr();me(u,new kc(u))}dn.STAT_EVENT="statevent";function Pc(o,u){E.call(this,dn.STAT_EVENT,o),this.stat=u}g(Pc,E);function Oe(o){const u=Cr();me(u,new Pc(u,o))}dn.Ja="timingevent";function Dc(o,u){E.call(this,dn.Ja,o),this.size=u}g(Dc,E);function xs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function As(){this.g=!0}As.prototype.ua=function(){this.g=!1};function Wm(o,u,f,p,x,R){o.info(function(){if(o.g)if(R){var V="",Y=R.split("&");for(let oe=0;oe<Y.length;oe++){var Ie=Y[oe].split("=");if(Ie.length>1){const Ae=Ie[0];Ie=Ie[1];const ut=Ae.split("_");V=ut.length>=2&&ut[1]=="type"?V+(Ae+"="+Ie+"&"):V+(Ae+"=redacted&")}}}else V=null;else V=R;return"XMLHTTP REQ ("+p+") [attempt "+x+"]: "+u+`
`+f+`
`+V})}function Km(o,u,f,p,x,R,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+x+"]: "+u+`
`+f+`
`+R+" "+V})}function Mn(o,u,f,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ym(o,f)+(p?" "+p:"")})}function Qm(o,u){o.info(function(){return"TIMEOUT: "+u})}As.prototype.info=function(){};function Ym(o,u){if(!o.g)return u;if(!u)return null;try{const R=JSON.parse(u);if(R){for(o=0;o<R.length;o++)if(Array.isArray(R[o])){var f=R[o];if(!(f.length<2)){var p=f[1];if(Array.isArray(p)&&!(p.length<1)){var x=p[0];if(x!="noop"&&x!="stop"&&x!="close")for(let V=1;V<p.length;V++)p[V]=""}}}}return uo(R)}catch{return u}}var kr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Vc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},jc;function mo(){}g(mo,Sc),mo.prototype.g=function(){return new XMLHttpRequest},jc=new mo;function Rs(o){return encodeURIComponent(String(o))}function Xm(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function kt(o,u,f,p){this.j=o,this.i=u,this.l=f,this.S=p||1,this.V=new Es(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Oc}function Oc(){this.i=null,this.g="",this.h=!1}var Mc={},po={};function go(o,u,f){o.M=1,o.A=Dr(lt(u)),o.u=f,o.R=!0,Lc(o,null)}function Lc(o,u){o.F=Date.now(),Pr(o),o.B=lt(o.A);var f=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Xc(f.i,"t",p),o.C=0,f=o.j.L,o.h=new Oc,o.g=pl(o.j,f?u:null,!o.u),o.P>0&&(o.O=new lo(d(o.Y,o,o.g),o.P)),u=o.V,f=o.g,p=o.ba;var x="readystatechange";Array.isArray(x)||(x&&(Ac[0]=x.toString()),x=Ac);for(let R=0;R<x.length;R++){const V=Ar(f,x[R],p||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=o.J?ct(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),Is(),Wm(o.i,o.v,o.B,o.l,o.S,o.u)}kt.prototype.ba=function(o){o=o.target;const u=this.O;u&&Vt(o)==3?u.j():this.Y(o)},kt.prototype.Y=function(o){try{if(o==this.g)e:{const Y=Vt(this.g),Ie=this.g.ya(),oe=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||rl(this.g)))){this.K||Y!=4||Ie==7||(Ie==8||oe<=0?Is(3):Is(2)),yo(this);var u=this.g.ca();this.X=u;var f=Jm(this);if(this.o=u==200,Km(this.i,this.v,this.B,this.l,this.S,Y,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,x=this.g;if((p=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(p)){var R=p;break t}}R=null}if(o=R)Mn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,_o(this,o);else{this.o=!1,this.m=3,Oe(12),fn(this),Ss(this);break e}}if(this.R){o=!0;let Ae;for(;!this.K&&this.C<f.length;)if(Ae=Zm(this,f),Ae==po){Y==4&&(this.m=4,Oe(14),o=!1),Mn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ae==Mc){this.m=4,Oe(15),Mn(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else Mn(this.i,this.l,Ae,null),_o(this,Ae);if(Uc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||f.length!=0||this.h.h||(this.m=1,Oe(16),o=!1),this.o=this.o&&o,!o)Mn(this.i,this.l,f,"[Invalid Chunked Response]"),fn(this),Ss(this);else if(f.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ao(V),V.P=!0,Oe(11))}}else Mn(this.i,this.l,f,null),_o(this,f);Y==4&&fn(this),this.o&&!this.K&&(Y==4?hl(this.j,this):(this.o=!1,Pr(this)))}else fp(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,Oe(12)):(this.m=0,Oe(13)),fn(this),Ss(this)}}}catch{}finally{}};function Jm(o){if(!Uc(o))return o.g.la();const u=rl(o.g);if(u==="")return"";let f="";const p=u.length,x=Vt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return fn(o),Ss(o),"";o.h.i=new a.TextDecoder}for(let R=0;R<p;R++)o.h.h=!0,f+=o.h.i.decode(u[R],{stream:!(x&&R==p-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function Uc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Zm(o,u){var f=o.C,p=u.indexOf(`
`,f);return p==-1?po:(f=Number(u.substring(f,p)),isNaN(f)?Mc:(p+=1,p+f>u.length?po:(u=u.slice(p,p+f),o.C=p+f,u)))}kt.prototype.cancel=function(){this.K=!0,fn(this)};function Pr(o){o.T=Date.now()+o.H,Fc(o,o.H)}function Fc(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=xs(d(o.aa,o),u)}function yo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}kt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Qm(this.i,this.B),this.M!=2&&(Is(),Oe(17)),fn(this),this.m=2,Ss(this)):Fc(this,this.T-o)};function Ss(o){o.j.I==0||o.K||hl(o.j,o)}function fn(o){yo(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Rc(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function _o(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||wo(f.h,o))){if(!o.L&&wo(f.h,o)&&f.I==3){try{var p=f.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var x=p;if(x[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Lr(f),Or(f);else break e;xo(f),Oe(18)}}else f.xa=x[1],0<f.xa-f.K&&x[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=xs(d(f.Va,f),6e3));$c(f.h)<=1&&f.ta&&(f.ta=void 0)}else pn(f,11)}else if((o.L||f.g==o)&&Lr(f),!w(u))for(x=f.Ba.g.parse(u),u=0;u<x.length;u++){let oe=x[u];const Ae=oe[0];if(!(Ae<=f.K))if(f.K=Ae,oe=oe[1],f.I==2)if(oe[0]=="c"){f.M=oe[1],f.ba=oe[2];const ut=oe[3];ut!=null&&(f.ka=ut,f.j.info("VER="+f.ka));const gn=oe[4];gn!=null&&(f.za=gn,f.j.info("SVER="+f.za));const jt=oe[5];jt!=null&&typeof jt=="number"&&jt>0&&(p=1.5*jt,f.O=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Ot=o.g;if(Ot){const Fr=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fr){var R=p.h;R.g||Fr.indexOf("spdy")==-1&&Fr.indexOf("quic")==-1&&Fr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(bo(R,R.h),R.h=null))}if(p.G){const Ro=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Ro&&(p.wa=Ro,he(p.J,p.G,Ro))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),p=f;var V=o;if(p.na=ml(p,p.L?p.ba:null,p.W),V.L){Hc(p.h,V);var Y=V,Ie=p.O;Ie&&(Y.H=Ie),Y.D&&(yo(Y),Pr(Y)),p.g=V}else ll(p);f.i.length>0&&Mr(f)}else oe[0]!="stop"&&oe[0]!="close"||pn(f,7);else f.I==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?pn(f,7):Io(f):oe[0]!="noop"&&f.l&&f.l.qa(oe),f.A=0)}}Is(4)}catch{}}var ep=class{constructor(o,u){this.g=o,this.map=u}};function Bc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function qc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function $c(o){return o.h?1:o.g?o.g.size:0}function wo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function bo(o,u){o.g?o.g.add(u):o.h=u}function Hc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Bc.prototype.cancel=function(){if(this.i=zc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function zc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return A(o.i)}var Gc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tp(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const p=o[f].indexOf("=");let x,R=null;p>=0?(x=o[f].substring(0,p),R=o[f].substring(p+1)):x=o[f],u(x,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Pt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Pt?(this.l=o.l,Ns(this,o.j),this.o=o.o,this.g=o.g,Cs(this,o.u),this.h=o.h,vo(this,Jc(o.i)),this.m=o.m):o&&(u=String(o).match(Gc))?(this.l=!1,Ns(this,u[1]||"",!0),this.o=ks(u[2]||""),this.g=ks(u[3]||"",!0),Cs(this,u[4]),this.h=ks(u[5]||"",!0),vo(this,u[6]||"",!0),this.m=ks(u[7]||"")):(this.l=!1,this.i=new Ds(null,this.l))}Pt.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(Ps(u,Wc,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ps(u,Wc,!0),"@"),o.push(Rs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Ps(f,f.charAt(0)=="/"?rp:sp,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Ps(f,op)),o.join("")},Pt.prototype.resolve=function(o){const u=lt(this);let f=!!o.j;f?Ns(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var p=o.h;if(f)Cs(u,o.u);else if(f=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var x=u.h.lastIndexOf("/");x!=-1&&(p=u.h.slice(0,x+1)+p)}if(x=p,x==".."||x==".")p="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){p=x.lastIndexOf("/",0)==0,x=x.split("/");const R=[];for(let V=0;V<x.length;){const Y=x[V++];Y=="."?p&&V==x.length&&R.push(""):Y==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),p&&V==x.length&&R.push("")):(R.push(Y),p=!0)}p=R.join("/")}else p=x}return f?u.h=p:f=o.i.toString()!=="",f?vo(u,Jc(o.i)):f=!!o.m,f&&(u.m=o.m),u};function lt(o){return new Pt(o)}function Ns(o,u,f){o.j=f?ks(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Cs(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function vo(o,u,f){u instanceof Ds?(o.i=u,ap(o.i,o.l)):(f||(u=Ps(u,ip)),o.i=new Ds(u,o.l))}function he(o,u,f){o.i.set(u,f)}function Dr(o){return he(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function ks(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ps(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,np),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function np(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Wc=/[#\/\?@]/g,sp=/[#\?:]/g,rp=/[#\?]/g,ip=/[#\?@]/g,op=/#/g;function Ds(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function mn(o){o.g||(o.g=new Map,o.h=0,o.i&&tp(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Ds.prototype,n.add=function(o,u){mn(this),this.i=null,o=Ln(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Kc(o,u){mn(o),u=Ln(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Qc(o,u){return mn(o),u=Ln(o,u),o.g.has(u)}n.forEach=function(o,u){mn(this),this.g.forEach(function(f,p){f.forEach(function(x){o.call(u,x,p,this)},this)},this)};function Yc(o,u){mn(o);let f=[];if(typeof u=="string")Qc(o,u)&&(f=f.concat(o.g.get(Ln(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}n.set=function(o,u){return mn(this),this.i=null,o=Ln(this,o),Qc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Yc(this,o),o.length>0?String(o[0]):u):u};function Xc(o,u,f){Kc(o,u),f.length>0&&(o.i=null,o.g.set(Ln(o,u),A(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var f=u[p];const x=Rs(f);f=Yc(this,f);for(let R=0;R<f.length;R++){let V=x;f[R]!==""&&(V+="="+Rs(f[R])),o.push(V)}}return this.i=o.join("&")};function Jc(o){const u=new Ds;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Ln(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function ap(o,u){u&&!o.j&&(mn(o),o.i=null,o.g.forEach(function(f,p){const x=p.toLowerCase();p!=x&&(Kc(this,p),Xc(this,x,f))},o)),o.j=u}function cp(o,u){const f=new As;if(a.Image){const p=new Image;p.onload=m(Dt,f,"TestLoadImage: loaded",!0,u,p),p.onerror=m(Dt,f,"TestLoadImage: error",!1,u,p),p.onabort=m(Dt,f,"TestLoadImage: abort",!1,u,p),p.ontimeout=m(Dt,f,"TestLoadImage: timeout",!1,u,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function lp(o,u){const f=new As,p=new AbortController,x=setTimeout(()=>{p.abort(),Dt(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(R=>{clearTimeout(x),R.ok?Dt(f,"TestPingServer: ok",!0,u):Dt(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(x),Dt(f,"TestPingServer: error",!1,u)})}function Dt(o,u,f,p,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),p(f)}catch{}}function up(){this.g=new Gm}function Eo(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Eo,Sc),Eo.prototype.g=function(){return new Vr(this.i,this.h)};function Vr(o,u){se.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Vr,se),n=Vr.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,js(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,js(this)),this.g&&(this.readyState=3,js(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Zc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Zc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Vs(this):js(this),this.readyState==3&&Zc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Vs(this))},n.Na=function(o){this.g&&(this.response=o,Vs(this))},n.ga=function(){this.g&&Vs(this)};function Vs(o){o.readyState=4,o.l=null,o.j=null,o.B=null,js(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function js(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Vr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function el(o){let u="";return tt(o,function(f,p){u+=p,u+=":",u+=f,u+=`\r
`}),u}function To(o,u,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=el(f),typeof o=="string"?f!=null&&Rs(f):he(o,u,f))}function ye(o){se.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ye,se);var hp=/^https?$/i,dp=["POST","PUT"];n=ye.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():jc.g(),this.g.onreadystatechange=_(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(R){tl(this,R);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var x in p)f.set(x,p[x]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())f.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(R=>R.toLowerCase()=="content-type"),x=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(dp,u,void 0)>=0)||p||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of f)this.g.setRequestHeader(R,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(R){tl(this,R)}};function tl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,nl(o),jr(o)}function nl(o){o.A||(o.A=!0,me(o,"complete"),me(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,me(this,"complete"),me(this,"abort"),jr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jr(this,!0)),ye.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?sl(this):this.Xa())},n.Xa=function(){sl(this)};function sl(o){if(o.h&&typeof i<"u"){if(o.v&&Vt(o)==4)setTimeout(o.Ca.bind(o),0);else if(me(o,"readystatechange"),Vt(o)==4){o.h=!1;try{const R=o.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var p;if(p=R===0){let V=String(o.D).match(Gc)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),p=!hp.test(V?V.toLowerCase():"")}f=p}if(f)me(o,"complete"),me(o,"success");else{o.o=6;try{var x=Vt(o)>2?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.ca()+"]",nl(o)}}finally{jr(o)}}}}function jr(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||me(o,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Vt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Vt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),zm(u)}};function rl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function fp(o){const u={};o=(o.g&&Vt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(w(o[p]))continue;var f=Xm(o[p]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const R=u[x]||[];u[x]=R,R.push(f)}xr(u,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Os(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function il(o){this.za=0,this.i=[],this.j=new As,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Os("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Os("baseRetryDelayMs",5e3,o),this.Za=Os("retryDelaySeedMs",1e4,o),this.Ta=Os("forwardChannelMaxRetries",2,o),this.va=Os("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Bc(o&&o.concurrentRequestLimit),this.Ba=new up,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=il.prototype,n.ka=8,n.I=1,n.connect=function(o,u,f,p){Oe(0),this.W=o,this.H=u||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.J=ml(this,null,this.W),Mr(this)};function Io(o){if(ol(o),o.I==3){var u=o.V++,f=lt(o.J);if(he(f,"SID",o.M),he(f,"RID",u),he(f,"TYPE","terminate"),Ms(o,f),u=new kt(o,o.j,u),u.M=2,u.A=Dr(lt(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=u.A,f=!0),f||(u.g=pl(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Pr(u)}fl(o)}function Or(o){o.g&&(Ao(o),o.g.cancel(),o.g=null)}function ol(o){Or(o),o.v&&(a.clearTimeout(o.v),o.v=null),Lr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Mr(o){if(!qc(o.h)&&!o.m){o.m=!0;var u=o.Ea;j||y(),q||(j(),q=!0),v.add(u,o),o.D=0}}function mp(o,u){return $c(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=xs(d(o.Ea,o,u),dl(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const x=new kt(this,this.j,o);let R=this.o;if(this.U&&(R?(R=ct(R),un(R,this.U)):R=this.U),this.u!==null||this.R||(x.J=R,R=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=cl(this,x,u),f=lt(this.J),he(f,"RID",o),he(f,"CVER",22),this.G&&he(f,"X-HTTP-Session-Id",this.G),Ms(this,f),R&&(this.R?u="headers="+Rs(el(R))+"&"+u:this.u&&To(f,this.u,R)),bo(this.h,x),this.Ra&&he(f,"TYPE","init"),this.S?(he(f,"$req",u),he(f,"SID","null"),x.U=!0,go(x,f,null)):go(x,f,u),this.I=2}}else this.I==3&&(o?al(this,o):this.i.length==0||qc(this.h)||al(this))};function al(o,u){var f;u?f=u.l:f=o.V++;const p=lt(o.J);he(p,"SID",o.M),he(p,"RID",f),he(p,"AID",o.K),Ms(o,p),o.u&&o.o&&To(p,o.u,o.o),f=new kt(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=cl(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),bo(o.h,f),go(f,p,u)}function Ms(o,u){o.H&&tt(o.H,function(f,p){he(u,p,f)}),o.l&&tt({},function(f,p){he(u,p,f)})}function cl(o,u,f){f=Math.min(o.i.length,f);const p=o.l?d(o.l.Ka,o.l,o):null;e:{var x=o.i;let Y=-1;for(;;){const Ie=["count="+f];Y==-1?f>0?(Y=x[0].g,Ie.push("ofs="+Y)):Y=0:Ie.push("ofs="+Y);let oe=!0;for(let Ae=0;Ae<f;Ae++){var R=x[Ae].g;const ut=x[Ae].map;if(R-=Y,R<0)Y=Math.max(0,x[Ae].g-100),oe=!1;else try{R="req"+R+"_"||"";try{var V=ut instanceof Map?ut:Object.entries(ut);for(const[gn,jt]of V){let Ot=jt;c(jt)&&(Ot=uo(jt)),Ie.push(R+gn+"="+encodeURIComponent(Ot))}}catch(gn){throw Ie.push(R+"type="+encodeURIComponent("_badmap")),gn}}catch{p&&p(ut)}}if(oe){V=Ie.join("&");break e}}V=void 0}return o=o.i.splice(0,f),u.G=o,V}function ll(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;j||y(),q||(j(),q=!0),v.add(u,o),o.A=0}}function xo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=xs(d(o.Da,o),dl(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,ul(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=xs(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Oe(10),Or(this),ul(this))};function Ao(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function ul(o){o.g=new kt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=lt(o.na);he(u,"RID","rpc"),he(u,"SID",o.M),he(u,"AID",o.K),he(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&he(u,"TO",o.ia),he(u,"TYPE","xmlhttp"),Ms(o,u),o.u&&o.o&&To(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=Dr(lt(u)),f.u=null,f.R=!0,Lc(f,o)}n.Va=function(){this.C!=null&&(this.C=null,Or(this),xo(this),Oe(19))};function Lr(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function hl(o,u){var f=null;if(o.g==u){Lr(o),Ao(o),o.g=null;var p=2}else if(wo(o.h,u))f=u.G,Hc(o.h,u),p=1;else return;if(o.I!=0){if(u.o)if(p==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var x=o.D;p=Cr(),me(p,new Dc(p,f)),Mr(o)}else ll(o);else if(x=u.m,x==3||x==0&&u.X>0||!(p==1&&mp(o,u)||p==2&&xo(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),x){case 1:pn(o,5);break;case 4:pn(o,10);break;case 3:pn(o,6);break;default:pn(o,2)}}}function dl(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function pn(o,u){if(o.j.info("Error code "+u),u==2){var f=d(o.bb,o),p=o.Ua;const x=!p;p=new Pt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ns(p,"https"),Dr(p),x?cp(p.toString(),f):lp(p.toString(),f)}else Oe(2);o.I=0,o.l&&o.l.pa(u),fl(o),ol(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function fl(o){if(o.I=0,o.ja=[],o.l){const u=zc(o.h);(u.length!=0||o.i.length!=0)&&(S(o.ja,u),S(o.ja,o.i),o.h.i.length=0,A(o.i),o.i.length=0),o.l.oa()}}function ml(o,u,f){var p=f instanceof Pt?lt(f):new Pt(f);if(p.g!="")u&&(p.g=u+"."+p.g),Cs(p,p.u);else{var x=a.location;p=x.protocol,u=u?u+"."+x.hostname:x.hostname,x=+x.port;const R=new Pt(null);p&&Ns(R,p),u&&(R.g=u),x&&Cs(R,x),f&&(R.h=f),p=R}return f=o.G,u=o.wa,f&&u&&he(p,f,u),he(p,"VER",o.ka),Ms(o,p),p}function pl(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new ye(new Eo({ab:f})):new ye(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function gl(){}n=gl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ur(){}Ur.prototype.g=function(o,u){return new Ge(o,u)};function Ge(o,u){se.call(this),this.g=new il(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!w(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!w(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Un(this)}g(Ge,se),Ge.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ge.prototype.close=function(){Io(this.g)},Ge.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=uo(o),o=f);u.i.push(new ep(u.Ya++,o)),u.I==3&&Mr(u)},Ge.prototype.N=function(){this.g.l=null,delete this.j,Io(this.g),delete this.g,Ge.Z.N.call(this)};function yl(o){ho.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}g(yl,ho);function _l(){fo.call(this),this.status=1}g(_l,fo);function Un(o){this.g=o}g(Un,gl),Un.prototype.ra=function(){me(this.g,"a")},Un.prototype.qa=function(o){me(this.g,new yl(o))},Un.prototype.pa=function(o){me(this.g,new _l)},Un.prototype.oa=function(){me(this.g,"b")},Ur.prototype.createWebChannel=Ur.prototype.g,Ge.prototype.send=Ge.prototype.o,Ge.prototype.open=Ge.prototype.m,Ge.prototype.close=Ge.prototype.close,Rd=function(){return new Ur},Ad=function(){return Cr()},xd=dn,na={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},kr.NO_ERROR=0,kr.TIMEOUT=8,kr.HTTP_ERROR=6,ti=kr,Vc.COMPLETE="complete",Id=Vc,Nc.EventType=Ts,Ts.OPEN="a",Ts.CLOSE="b",Ts.ERROR="c",Ts.MESSAGE="d",se.prototype.listen=se.prototype.J,qs=Nc,ye.prototype.listenOnce=ye.prototype.K,ye.prototype.getLastError=ye.prototype.Ha,ye.prototype.getLastErrorCode=ye.prototype.ya,ye.prototype.getStatus=ye.prototype.ca,ye.prototype.getResponseJson=ye.prototype.La,ye.prototype.getResponseText=ye.prototype.la,ye.prototype.send=ye.prototype.ea,ye.prototype.setWithCredentials=ye.prototype.Fa,Td=ye}).apply(typeof $r<"u"?$r:typeof self<"u"?self:typeof window<"u"?window:{});const ru="@firebase/firestore",iu="4.9.2";/**
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
 */class De{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}De.UNAUTHENTICATED=new De(null),De.GOOGLE_CREDENTIALS=new De("google-credentials-uid"),De.FIRST_PARTY=new De("first-party-uid"),De.MOCK_USER=new De("mock-user");/**
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
 */let hs="12.3.0";/**
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
 */const Tn=new Di("@firebase/firestore");function qn(){return Tn.logLevel}function U(n,...e){if(Tn.logLevel<=J.DEBUG){const t=e.map(ja);Tn.debug(`Firestore (${hs}): ${n}`,...t)}}function Nt(n,...e){if(Tn.logLevel<=J.ERROR){const t=e.map(ja);Tn.error(`Firestore (${hs}): ${n}`,...t)}}function ss(n,...e){if(Tn.logLevel<=J.WARN){const t=e.map(ja);Tn.warn(`Firestore (${hs}): ${n}`,...t)}}function ja(n){if(typeof n=="string")return n;try{/**
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
 */function G(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Sd(n,s,t)}function Sd(n,e,t){let s=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Nt(s),new Error(s)}function re(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Sd(e,r,s)}function Q(n,e){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends et{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Nd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(De.UNAUTHENTICATED)))}shutdown(){}}class jb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ob{constructor(e){this.t=e,this.currentUser=De.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0,42304);let s=this.i;const r=h=>this.i!==s?(s=this.i,t(h)):Promise.resolve();let i=new xt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xt,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const h=i;e.enqueueRetryable((async()=>{await h.promise,await r(this.currentUser)}))},c=h=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string",31837,{l:s}),new Nd(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string",2055,{h:e}),new De(e)}}class Mb{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=De.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Lb{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Mb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(De.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ou{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ub{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){re(this.o===void 0,3512);const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ou(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ou(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Fb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Oa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Fb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function Z(n,e){return n<e?-1:n>e?1:0}function sa(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return Oo(r)===Oo(i)?Z(r,i):Oo(r)?1:-1}return Z(n.length,e.length)}const Bb=55296,qb=57343;function Oo(n){const e=n.charCodeAt(0);return e>=Bb&&e<=qb}function rs(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
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
 */const au="__name__";class ht{constructor(e,t,s){t===void 0?t=0:t>e.length&&G(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&G(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ht.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ht?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=ht.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return Z(e.length,t.length)}static compareSegments(e,t){const s=ht.isNumericId(e),r=ht.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?ht.extractNumericId(e).compare(ht.extractNumericId(t)):sa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Kt.fromString(e.substring(4,e.length-2))}}class ce extends ht{construct(e,t,s){return new ce(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new ce(t)}static emptyPath(){return new ce([])}}const $b=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ce extends ht{construct(e,t,s){return new Ce(e,t,s)}static isValidIdentifier(e){return $b.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ce.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===au}static keyField(){return new Ce([au])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new L(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new L(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=h,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(i(),r++)}if(i(),a)throw new L(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ce(t)}static emptyPath(){return new Ce([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ce.fromString(e))}static fromName(e){return new H(ce.fromString(e).popFirst(5))}static empty(){return new H(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ce(e.slice()))}}/**
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
 */function Cd(n,e,t){if(!t)throw new L(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Hb(n,e,t,s){if(e===!0&&s===!0)throw new L(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function cu(n){if(!H.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function lu(n){if(H.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function kd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ui(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G(12329,{type:typeof n})}function wt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ui(n);throw new L(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Te(n,e){const t={typeString:n};return e&&(t.value=e),t}function yr(n,e){if(!kd(n))throw new L(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new L(C.INVALID_ARGUMENT,t);return!0}/**
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
 */const uu=-62135596800,hu=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*hu);return new le(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<uu)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hu}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(yr(e,le._jsonSchema))return new le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-uu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:Te("string",le._jsonSchemaVersion),seconds:Te("number"),nanoseconds:Te("number")};/**
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
 */class K{static fromTimestamp(e){return new K(e)}static min(){return new K(new le(0,0))}static max(){return new K(new le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const sr=-1;function zb(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=K.fromTimestamp(s===1e9?new le(t+1,0):new le(t,s));return new Xt(r,H.empty(),e)}function Gb(n){return new Xt(n.readTime,n.key,sr)}class Xt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Xt(K.min(),H.empty(),sr)}static max(){return new Xt(K.max(),H.empty(),sr)}}function Wb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
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
 */const Kb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ds(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Kb)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,s)=>{t(e)}))}static reject(e){return new P(((t,s)=>{s(e)}))}static waitFor(e){return new P(((t,s)=>{let r=0,i=0,a=!1;e.forEach((c=>{++r,c.next((()=>{++i,a&&i===r&&t()}),(h=>s(h)))})),a=!0,i===r&&t()}))}static or(e){let t=P.resolve(!1);for(const s of e)t=t.next((r=>r?P.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new P(((s,r)=>{const i=e.length,a=new Array(i);let c=0;for(let h=0;h<i;h++){const d=h;t(e[d]).next((m=>{a[d]=m,++c,c===i&&s(a)}),(m=>r(m)))}}))}static doWhile(e,t){return new P(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function Yb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function fs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Fi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Fi.ce=-1;/**
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
 */const Ma=-1;function Bi(n){return n==null}function _i(n){return n===0&&1/n==-1/0}function Xb(n){return typeof n=="number"&&Number.isInteger(n)&&!_i(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Pd="";function Jb(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=du(e)),e=Zb(n.get(t),e);return du(e)}function Zb(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Pd:t+="";break;default:t+=i}}return t}function du(n){return n+Pd+""}/**
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
 */function fu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function an(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Dd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class pe{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hr(this.root,e,this.comparator,!0)}}class Hr{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Ne.RED,this.left=r??Ne.EMPTY,this.right=i??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new Ne(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Ne.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xe{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new mu(this.data.getIterator())}getIteratorFrom(e){return new mu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new xe(this.comparator);return t.data=e,t}}class mu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class We{constructor(e){this.fields=e,e.sort(Ce.comparator)}static empty(){return new We([])}unionWith(e){let t=new xe(Ce.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new We(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Vd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ke{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Vd("Invalid base64 string: "+i):i}})(e);return new ke(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i})(e);return new ke(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ke.EMPTY_BYTE_STRING=new ke("");const ev=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(n){if(re(!!n,39018),typeof n=="string"){let e=0;const t=ev.exec(n);if(re(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:we(n.seconds),nanos:we(n.nanos)}}function we(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zt(n){return typeof n=="string"?ke.fromBase64String(n):ke.fromUint8Array(n)}/**
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
 */const jd="server_timestamp",Od="__type__",Md="__previous_value__",Ld="__local_write_time__";function La(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Od])==null?void 0:s.stringValue)===jd}function qi(n){const e=n.mapValue.fields[Md];return La(e)?qi(e):e}function rr(n){const e=Jt(n.mapValue.fields[Ld].timestampValue);return new le(e.seconds,e.nanos)}/**
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
 */class tv{constructor(e,t,s,r,i,a,c,h,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const wi="(default)";class ir{constructor(e,t){this.projectId=e,this.database=t||wi}static empty(){return new ir("","")}get isDefaultDatabase(){return this.database===wi}isEqual(e){return e instanceof ir&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ud="__type__",nv="__max__",zr={mapValue:{}},Fd="__vector__",bi="value";function en(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?La(n)?4:rv(n)?9007199254740991:sv(n)?10:11:G(28295,{value:n})}function bt(n,e){if(n===e)return!0;const t=en(n);if(t!==en(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return rr(n).isEqual(rr(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Jt(r.timestampValue),c=Jt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,i){return Zt(r.bytesValue).isEqual(Zt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,i){return we(r.geoPointValue.latitude)===we(i.geoPointValue.latitude)&&we(r.geoPointValue.longitude)===we(i.geoPointValue.longitude)})(n,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return we(r.integerValue)===we(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=we(r.doubleValue),c=we(i.doubleValue);return a===c?_i(a)===_i(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return rs(n.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:case 11:return(function(r,i){const a=r.mapValue.fields||{},c=i.mapValue.fields||{};if(fu(a)!==fu(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!bt(a[h],c[h])))return!1;return!0})(n,e);default:return G(52216,{left:n})}}function or(n,e){return(n.values||[]).find((t=>bt(t,e)))!==void 0}function is(n,e){if(n===e)return 0;const t=en(n),s=en(e);if(t!==s)return Z(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=we(i.integerValue||i.doubleValue),h=we(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(n,e);case 3:return pu(n.timestampValue,e.timestampValue);case 4:return pu(rr(n),rr(e));case 5:return sa(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Zt(i),h=Zt(a);return c.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=Z(c[d],h[d]);if(m!==0)return m}return Z(c.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=Z(we(i.latitude),we(a.latitude));return c!==0?c:Z(we(i.longitude),we(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return gu(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var _,A,S,k;const c=i.fields||{},h=a.fields||{},d=(_=c[bi])==null?void 0:_.arrayValue,m=(A=h[bi])==null?void 0:A.arrayValue,g=Z(((S=d==null?void 0:d.values)==null?void 0:S.length)||0,((k=m==null?void 0:m.values)==null?void 0:k.length)||0);return g!==0?g:gu(d,m)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===zr.mapValue&&a===zr.mapValue)return 0;if(i===zr.mapValue)return 1;if(a===zr.mapValue)return-1;const c=i.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let g=0;g<h.length&&g<m.length;++g){const _=sa(h[g],m[g]);if(_!==0)return _;const A=is(c[h[g]],d[m[g]]);if(A!==0)return A}return Z(h.length,m.length)})(n.mapValue,e.mapValue);default:throw G(23264,{he:t})}}function pu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=Jt(n),s=Jt(e),r=Z(t.seconds,s.seconds);return r!==0?r:Z(t.nanos,s.nanos)}function gu(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=is(t[r],s[r]);if(i)return i}return Z(t.length,s.length)}function os(n){return ra(n)}function ra(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Jt(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Zt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return H.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=ra(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${ra(t.fields[a])}`;return r+"}"})(n.mapValue):G(61005,{value:n})}function ni(n){switch(en(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qi(n);return e?16+ni(e):16;case 5:return 2*n.stringValue.length;case 6:return Zt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+ni(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return an(s.fields,((i,a)=>{r+=i.length+ni(a)})),r})(n.mapValue);default:throw G(13486,{value:n})}}function yu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ia(n){return!!n&&"integerValue"in n}function Ua(n){return!!n&&"arrayValue"in n}function _u(n){return!!n&&"nullValue"in n}function wu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function si(n){return!!n&&"mapValue"in n}function sv(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ud])==null?void 0:s.stringValue)===Fd}function Ks(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return an(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ks(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ks(n.arrayValue.values[t]);return e}return{...n}}function rv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===nv}/**
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
 */class $e{constructor(e){this.value=e}static empty(){return new $e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!si(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(t)}setAll(e){let t=Ce.emptyPath(),s={},r=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=Ks(a):r.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());si(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];si(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){an(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new $e(Ks(this.value))}}function Bd(n){const e=[];return an(n.fields,((t,s)=>{const r=new Ce([t]);if(si(s)){const i=Bd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)})),new We(e)}/**
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
 */class Ve{constructor(e,t,s,r,i,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ve(e,0,K.min(),K.min(),K.min(),$e.empty(),0)}static newFoundDocument(e,t,s,r){return new Ve(e,1,t,K.min(),s,r,0)}static newNoDocument(e,t){return new Ve(e,2,t,K.min(),K.min(),$e.empty(),0)}static newUnknownDocument(e,t){return new Ve(e,3,t,K.min(),K.min(),$e.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vi{constructor(e,t){this.position=e,this.inclusive=t}}function bu(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(a.referenceValue),t.key):s=is(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function vu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!bt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ar{constructor(e,t="asc"){this.field=e,this.dir=t}}function iv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class qd{}class Ee extends qd{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new av(e,t,s):t==="array-contains"?new uv(e,s):t==="in"?new hv(e,s):t==="not-in"?new dv(e,s):t==="array-contains-any"?new fv(e,s):new Ee(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new cv(e,s):new lv(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(is(t,this.value)):t!==null&&en(this.value)===en(t)&&this.matchesComparison(is(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ot extends qd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ot(e,t)}matches(e){return $d(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function $d(n){return n.op==="and"}function Hd(n){return ov(n)&&$d(n)}function ov(n){for(const e of n.filters)if(e instanceof ot)return!1;return!0}function oa(n){if(n instanceof Ee)return n.field.canonicalString()+n.op.toString()+os(n.value);if(Hd(n))return n.filters.map((e=>oa(e))).join(",");{const e=n.filters.map((t=>oa(t))).join(",");return`${n.op}(${e})`}}function zd(n,e){return n instanceof Ee?(function(s,r){return r instanceof Ee&&s.op===r.op&&s.field.isEqual(r.field)&&bt(s.value,r.value)})(n,e):n instanceof ot?(function(s,r){return r instanceof ot&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,a,c)=>i&&zd(a,r.filters[c])),!0):!1})(n,e):void G(19439)}function Gd(n){return n instanceof Ee?(function(t){return`${t.field.canonicalString()} ${t.op} ${os(t.value)}`})(n):n instanceof ot?(function(t){return t.op.toString()+" {"+t.getFilters().map(Gd).join(" ,")+"}"})(n):"Filter"}class av extends Ee{constructor(e,t,s){super(e,t,s),this.key=H.fromName(s.referenceValue)}matches(e){const t=H.comparator(e.key,this.key);return this.matchesComparison(t)}}class cv extends Ee{constructor(e,t){super(e,"in",t),this.keys=Wd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class lv extends Ee{constructor(e,t){super(e,"not-in",t),this.keys=Wd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Wd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>H.fromName(s.referenceValue)))}class uv extends Ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ua(t)&&or(t.arrayValue,this.value)}}class hv extends Ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&or(this.value.arrayValue,t)}}class dv extends Ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(or(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!or(this.value.arrayValue,t)}}class fv extends Ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ua(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>or(this.value.arrayValue,s)))}}/**
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
 */class mv{constructor(e,t=null,s=[],r=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Eu(n,e=null,t=[],s=[],r=null,i=null,a=null){return new mv(n,e,t,s,r,i,a)}function Fa(n){const e=Q(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>oa(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Bi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>os(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>os(s))).join(",")),e.Te=t}return e.Te}function Ba(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!iv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!zd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!vu(n.startAt,e.startAt)&&vu(n.endAt,e.endAt)}function aa(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ms{constructor(e,t=null,s=[],r=[],i=null,a="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function pv(n,e,t,s,r,i,a,c){return new ms(n,e,t,s,r,i,a,c)}function qa(n){return new ms(n)}function Tu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Kd(n){return n.collectionGroup!==null}function Qs(n){const e=Q(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new xe(Ce.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ar(i,s))})),t.has(Ce.keyField().canonicalString())||e.Ie.push(new ar(Ce.keyField(),s))}return e.Ie}function pt(n){const e=Q(n);return e.Ee||(e.Ee=gv(e,Qs(n))),e.Ee}function gv(n,e){if(n.limitType==="F")return Eu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new ar(r.field,i)}));const t=n.endAt?new vi(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new vi(n.startAt.position,n.startAt.inclusive):null;return Eu(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function ca(n,e){const t=n.filters.concat([e]);return new ms(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function la(n,e,t){return new ms(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $i(n,e){return Ba(pt(n),pt(e))&&n.limitType===e.limitType}function Qd(n){return`${Fa(pt(n))}|lt:${n.limitType}`}function $n(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>Gd(r))).join(", ")}]`),Bi(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>os(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>os(r))).join(",")),`Target(${s})`})(pt(n))}; limitType=${n.limitType})`}function Hi(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):H.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of Qs(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(a,c,h){const d=bu(a,c,h);return a.inclusive?d<=0:d<0})(s.startAt,Qs(s),r)||s.endAt&&!(function(a,c,h){const d=bu(a,c,h);return a.inclusive?d>=0:d>0})(s.endAt,Qs(s),r))})(n,e)}function yv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Yd(n){return(e,t)=>{let s=!1;for(const r of Qs(n)){const i=_v(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function _v(n,e,t){const s=n.field.isKeyField()?H.comparator(e.key,t.key):(function(i,a,c){const h=a.data.field(i),d=c.data.field(i);return h!==null&&d!==null?is(h,d):G(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return G(19790,{direction:n.dir})}}/**
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
 */class kn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){an(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return Dd(this.inner)}size(){return this.innerSize}}/**
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
 */const wv=new pe(H.comparator);function Ct(){return wv}const Xd=new pe(H.comparator);function $s(...n){let e=Xd;for(const t of n)e=e.insert(t.key,t);return e}function Jd(n){let e=Xd;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function _n(){return Ys()}function Zd(){return Ys()}function Ys(){return new kn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const bv=new pe(H.comparator),vv=new xe(H.comparator);function ee(...n){let e=vv;for(const t of n)e=e.add(t);return e}const Ev=new xe(Z);function Tv(){return Ev}/**
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
 */function $a(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_i(e)?"-0":e}}function ef(n){return{integerValue:""+n}}function Iv(n,e){return Xb(e)?ef(e):$a(n,e)}/**
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
 */class zi{constructor(){this._=void 0}}function xv(n,e,t){return n instanceof cr?(function(r,i){const a={fields:{[Od]:{stringValue:jd},[Ld]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&La(i)&&(i=qi(i)),i&&(a.fields[Md]=i),{mapValue:a}})(t,e):n instanceof lr?nf(n,e):n instanceof ur?sf(n,e):(function(r,i){const a=tf(r,i),c=Iu(a)+Iu(r.Ae);return ia(a)&&ia(r.Ae)?ef(c):$a(r.serializer,c)})(n,e)}function Av(n,e,t){return n instanceof lr?nf(n,e):n instanceof ur?sf(n,e):t}function tf(n,e){return n instanceof Ei?(function(s){return ia(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class cr extends zi{}class lr extends zi{constructor(e){super(),this.elements=e}}function nf(n,e){const t=rf(e);for(const s of n.elements)t.some((r=>bt(r,s)))||t.push(s);return{arrayValue:{values:t}}}class ur extends zi{constructor(e){super(),this.elements=e}}function sf(n,e){let t=rf(e);for(const s of n.elements)t=t.filter((r=>!bt(r,s)));return{arrayValue:{values:t}}}class Ei extends zi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Iu(n){return we(n.integerValue||n.doubleValue)}function rf(n){return Ua(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Rv{constructor(e,t){this.field=e,this.transform=t}}function Sv(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof lr&&r instanceof lr||s instanceof ur&&r instanceof ur?rs(s.elements,r.elements,bt):s instanceof Ei&&r instanceof Ei?bt(s.Ae,r.Ae):s instanceof cr&&r instanceof cr})(n.transform,e.transform)}class Nv{constructor(e,t){this.version=e,this.transformResults=t}}class st{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new st}static exists(e){return new st(void 0,e)}static updateTime(e){return new st(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ri(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Gi{}function of(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new cf(n.key,st.none()):new _r(n.key,n.data,st.none());{const t=n.data,s=$e.empty();let r=new xe(Ce.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new cn(n.key,s,new We(r.toArray()),st.none())}}function Cv(n,e,t){n instanceof _r?(function(r,i,a){const c=r.value.clone(),h=Au(r.fieldTransforms,i,a.transformResults);c.setAll(h),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof cn?(function(r,i,a){if(!ri(r.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Au(r.fieldTransforms,i,a.transformResults),h=i.data;h.setAll(af(r)),h.setAll(c),i.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,e,t):(function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Xs(n,e,t,s){return n instanceof _r?(function(i,a,c,h){if(!ri(i.precondition,a))return c;const d=i.value.clone(),m=Ru(i.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,s):n instanceof cn?(function(i,a,c,h){if(!ri(i.precondition,a))return c;const d=Ru(i.fieldTransforms,h,a),m=a.data;return m.setAll(af(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,e,t,s):(function(i,a,c){return ri(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function kv(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=tf(s.transform,r||null);i!=null&&(t===null&&(t=$e.empty()),t.set(s.field,i))}return t||null}function xu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&rs(s,r,((i,a)=>Sv(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class _r extends Gi{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class cn extends Gi{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function af(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Au(n,e,t){const s=new Map;re(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,c=e.data.field(i.field);s.set(i.field,Av(a,c,t[r]))}return s}function Ru(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,xv(i,a,e))}return s}class cf extends Gi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pv extends Gi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Dv{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Cv(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Xs(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Xs(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Zd();return this.mutations.forEach((r=>{const i=e.get(r.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(r.key)?null:c;const h=of(a,c);h!==null&&s.set(r.key,h),a.isValidDocument()||a.convertToNoDocument(K.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ee())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,((t,s)=>xu(t,s)))&&rs(this.baseMutations,e.baseMutations,((t,s)=>xu(t,s)))}}class Ha{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){re(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return bv})();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new Ha(e,t,s,r)}}/**
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
 */class Vv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var ve,ne;function Ov(n){switch(n){case C.OK:return G(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return G(15467,{code:n})}}function lf(n){if(n===void 0)return Nt("GRPC error has no .code"),C.UNKNOWN;switch(n){case ve.OK:return C.OK;case ve.CANCELLED:return C.CANCELLED;case ve.UNKNOWN:return C.UNKNOWN;case ve.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ve.INTERNAL:return C.INTERNAL;case ve.UNAVAILABLE:return C.UNAVAILABLE;case ve.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ve.NOT_FOUND:return C.NOT_FOUND;case ve.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ve.ABORTED:return C.ABORTED;case ve.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ve.DATA_LOSS:return C.DATA_LOSS;default:return G(39323,{code:n})}}(ne=ve||(ve={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Mv(){return new TextEncoder}/**
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
 */const Lv=new Kt([4294967295,4294967295],0);function Su(n){const e=Mv().encode(n),t=new Ed;return t.update(e),new Uint8Array(t.digest())}function Nu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kt([t,s],0),new Kt([r,i],0)]}class za{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Hs(`Invalid padding: ${t}`);if(s<0)throw new Hs(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Hs(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Hs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Kt.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(Kt.fromNumber(s)));return r.compare(Lv)===1&&(r=new Kt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Su(e),[s,r]=Nu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new za(i,r,t);return s.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=Su(e),[s,r]=Nu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Wi{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,wr.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Wi(K.min(),r,new pe(Z),Ct(),ee())}}class wr{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new wr(s,t,ee(),ee(),ee())}}/**
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
 */class ii{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class uf{constructor(e,t){this.targetId=e,this.Ce=t}}class hf{constructor(e,t,s=ke.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Cu{constructor(){this.ve=0,this.Fe=ku(),this.Me=ke.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ee(),t=ee(),s=ee();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:G(38017,{changeType:i})}})),new wr(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=ku()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,re(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Uv{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ct(),this.Je=Gr(),this.He=Gr(),this.Ye=new pe(Z)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:G(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(aa(i))if(s===0){const a=new H(i.path);this.et(t,a,Ve.newNoDocument(a,K.min()))}else re(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const c=this.ut(e),h=c?this.ct(c,e,a):1;if(h!==0){this.it(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,c;try{a=Zt(s).toUint8Array()}catch(h){if(h instanceof Vd)return ss("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new za(a,r,i)}catch(h){return ss(h instanceof Hs?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&aa(c.target)){const h=new H(c.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Ve.newNoDocument(h,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let s=ee();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const r=new Wi(e,t,this.Ye,this.je,s);return this.je=Ct(),this.Je=Gr(),this.He=Gr(),this.Ye=new pe(Z),r}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Cu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new xe(Z),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new xe(Z),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Cu),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Gr(){return new pe(H.comparator)}function ku(){return new pe(H.comparator)}const Fv={asc:"ASCENDING",desc:"DESCENDING"},Bv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qv={and:"AND",or:"OR"};class $v{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ua(n,e){return n.useProto3Json||Bi(e)?e:{value:e}}function Ti(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function df(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Hv(n,e){return Ti(n,e.toTimestamp())}function gt(n){return re(!!n,49232),K.fromTimestamp((function(t){const s=Jt(t);return new le(s.seconds,s.nanos)})(n))}function Ga(n,e){return ha(n,e).canonicalString()}function ha(n,e){const t=(function(r){return new ce(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function ff(n){const e=ce.fromString(n);return re(_f(e),10190,{key:e.toString()}),e}function da(n,e){return Ga(n.databaseId,e.path)}function Mo(n,e){const t=ff(e);if(t.get(1)!==n.databaseId.projectId)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(pf(t))}function mf(n,e){return Ga(n.databaseId,e)}function zv(n){const e=ff(n);return e.length===4?ce.emptyPath():pf(e)}function fa(n){return new ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pf(n){return re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Pu(n,e,t){return{name:da(n,e),fields:t.value.mapValue.fields}}function Gv(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(d,m){return d.useProto3Json?(re(m===void 0||typeof m=="string",58123),ke.fromBase64String(m||"")):(re(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ke.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(d){const m=d.code===void 0?C.UNKNOWN:lf(d.code);return new L(m,d.message||"")})(a);t=new hf(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Mo(n,s.document.name),i=gt(s.document.updateTime),a=s.document.createTime?gt(s.document.createTime):K.min(),c=new $e({mapValue:{fields:s.document.fields}}),h=Ve.newFoundDocument(r,i,a,c),d=s.targetIds||[],m=s.removedTargetIds||[];t=new ii(d,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Mo(n,s.document),i=s.readTime?gt(s.readTime):K.min(),a=Ve.newNoDocument(r,i),c=s.removedTargetIds||[];t=new ii([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Mo(n,s.document),i=s.removedTargetIds||[];t=new ii([],i,r,null)}else{if(!("filter"in e))return G(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new jv(r,i),c=s.targetId;t=new uf(c,a)}}return t}function Wv(n,e){let t;if(e instanceof _r)t={update:Pu(n,e.key,e.value)};else if(e instanceof cf)t={delete:da(n,e.key)};else if(e instanceof cn)t={update:Pu(n,e.key,e.data),updateMask:n0(e.fieldMask)};else{if(!(e instanceof Pv))return G(16599,{Vt:e.type});t={verify:da(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,a){const c=a.transform;if(c instanceof cr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof lr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ur)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ei)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw G(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:Hv(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G(27497)})(n,e.precondition)),t}function Kv(n,e){return n&&n.length>0?(re(e!==void 0,14353),n.map((t=>(function(r,i){let a=r.updateTime?gt(r.updateTime):gt(i);return a.isEqual(K.min())&&(a=gt(i)),new Nv(a,r.transformResults||[])})(t,e)))):[]}function Qv(n,e){return{documents:[mf(n,e.path)]}}function Yv(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=mf(n,r);const i=(function(d){if(d.length!==0)return yf(ot.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((m=>(function(_){return{field:Hn(_.field),direction:Zv(_.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ua(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:r}}function Xv(n){let e=zv(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){re(s===1,65062);const m=t.from[0];m.allDescendants?r=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(g){const _=gf(g);return _ instanceof ot&&Hd(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((_=>(function(S){return new ar(zn(S.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(_)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let _;return _=typeof g=="object"?g.value:g,Bi(_)?null:_})(t.limit));let h=null;t.startAt&&(h=(function(g){const _=!!g.before,A=g.values||[];return new vi(A,_)})(t.startAt));let d=null;return t.endAt&&(d=(function(g){const _=!g.before,A=g.values||[];return new vi(A,_)})(t.endAt)),pv(e,r,a,i,c,"F",h,d)}function Jv(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=zn(t.unaryFilter.field);return Ee.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=zn(t.unaryFilter.field);return Ee.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zn(t.unaryFilter.field);return Ee.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zn(t.unaryFilter.field);return Ee.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ee.create(zn(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ot.create(t.compositeFilter.filters.map((s=>gf(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return G(1026)}})(t.compositeFilter.op))})(n):G(30097,{filter:n})}function Zv(n){return Fv[n]}function e0(n){return Bv[n]}function t0(n){return qv[n]}function Hn(n){return{fieldPath:n.canonicalString()}}function zn(n){return Ce.fromServerFormat(n.fieldPath)}function yf(n){return n instanceof Ee?(function(t){if(t.op==="=="){if(wu(t.value))return{unaryFilter:{field:Hn(t.field),op:"IS_NAN"}};if(_u(t.value))return{unaryFilter:{field:Hn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(wu(t.value))return{unaryFilter:{field:Hn(t.field),op:"IS_NOT_NAN"}};if(_u(t.value))return{unaryFilter:{field:Hn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hn(t.field),op:e0(t.op),value:t.value}}})(n):n instanceof ot?(function(t){const s=t.getFilters().map((r=>yf(r)));return s.length===1?s[0]:{compositeFilter:{op:t0(t.op),filters:s}}})(n):G(54877,{filter:n})}function n0(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function _f(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class $t{constructor(e,t,s,r,i=K.min(),a=K.min(),c=ke.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new $t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class s0{constructor(e){this.yt=e}}function r0(n){const e=Xv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?la(e,e.limit,"L"):e}/**
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
 */class i0{constructor(){this.Cn=new o0}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Xt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Xt.min())}updateCollectionGroup(e,t,s){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class o0{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new xe(ce.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new xe(ce.comparator)).toArray()}}/**
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
 */const Du={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wf=41943040;class Fe{static withCacheSize(e){return new Fe(e,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Fe.DEFAULT_COLLECTION_PERCENTILE=10,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fe.DEFAULT=new Fe(wf,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fe.DISABLED=new Fe(-1,0,0);/**
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
 */class as{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new as(0)}static cr(){return new as(-1)}}/**
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
 */const Vu="LruGarbageCollector",a0=1048576;function ju([n,e],[t,s]){const r=Z(n,t);return r===0?Z(e,s):r}class c0{constructor(e){this.Ir=e,this.buffer=new xe(ju),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ju(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class l0{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){U(Vu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){fs(t)?U(Vu,"Ignoring IndexedDB error during garbage collection: ",t):await ds(t)}await this.Vr(3e5)}))}}class u0{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Fi.ce);const s=new c0(t);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Du)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Du):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,r,i,a,c,h,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),r=this.params.maximumSequenceNumbersToCollect):r=g,a=Date.now(),this.nthSequenceNumber(e,r)))).next((g=>(s=g,c=Date.now(),this.removeTargets(e,s,t)))).next((g=>(i=g,h=Date.now(),this.removeOrphanedDocuments(e,s)))).next((g=>(d=Date.now(),qn()<=J.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${i} targets in `+(h-c)+`ms
	Removed ${g} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:g}))))}}function h0(n,e){return new u0(n,e)}/**
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
 */class d0{constructor(){this.changes=new kn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?P.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class f0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class m0{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Xs(s.mutation,r,We.empty(),le.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,ee()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=ee()){const r=_n();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let a=$s();return i.forEach(((c,h)=>{a=a.insert(c,h.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=_n();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,ee())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,s,r){let i=Ct();const a=Ys(),c=(function(){return Ys()})();return t.forEach(((h,d)=>{const m=s.get(d.key);r.has(d.key)&&(m===void 0||m.mutation instanceof cn)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Xs(m.mutation,d,m.mutation.getFieldMask(),le.now())):a.set(d.key,We.empty())})),this.recalculateAndSaveOverlays(e,i).next((h=>(h.forEach(((d,m)=>a.set(d,m))),t.forEach(((d,m)=>c.set(d,new f0(m,a.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=Ys();let r=new pe(((a,c)=>a-c)),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((h=>{const d=t.get(h);if(d===null)return;let m=s.get(h)||We.empty();m=c.applyToLocalView(d,m),s.set(h,m);const g=(r.get(c.batchId)||ee()).add(h);r=r.insert(c.batchId,g)}))})).next((()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,g=Zd();m.forEach((_=>{if(!i.has(_)){const A=of(t.get(_),s.get(_));A!==null&&g.set(_,A),i=i.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return P.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return(function(a){return H.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Kd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):P.resolve(_n());let c=sr,h=i;return a.next((d=>P.forEach(d,((m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(m)?P.resolve():this.remoteDocumentCache.getEntry(e,m).next((_=>{h=h.insert(m,_)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,h,d,ee()))).next((m=>({batchId:c,changes:Jd(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next((s=>{let r=$s();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=$s();return this.indexManager.getCollectionParents(e,i).next((c=>P.forEach(c,(h=>{const d=(function(g,_){return new ms(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,h.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next((m=>{m.forEach(((g,_)=>{a=a.insert(g,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((a=>{i.forEach(((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Ve.newInvalidDocument(m)))}));let c=$s();return a.forEach(((h,d)=>{const m=i.get(h);m!==void 0&&Xs(m.mutation,d,We.empty(),le.now()),Hi(t,d)&&(c=c.insert(h,d))})),c}))}}/**
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
 */class p0{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return P.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:gt(r.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(r){return{name:r.name,query:r0(r.bundledQuery),readTime:gt(r.readTime)}})(t)),P.resolve()}}/**
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
 */class g0{constructor(){this.overlays=new pe(H.comparator),this.qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const s=_n();return P.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.St(e,t,i)})),P.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(s)),P.resolve()}getOverlaysForCollection(e,t,s){const r=_n(),i=t.length+1,a=new H(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&h.largestBatchId>s&&r.set(h.getKey(),h)}return P.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new pe(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let m=i.get(d.largestBatchId);m===null&&(m=_n(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=_n(),h=i.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=r)););return P.resolve(c)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new Vv(t,s));let i=this.qr.get(t);i===void 0&&(i=ee(),this.qr.set(t,i)),this.qr.set(t,i.add(s.key))}}/**
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
 */class y0{constructor(){this.sessionToken=ke.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class Wa{constructor(){this.Qr=new xe(Re.$r),this.Ur=new xe(Re.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Re(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Re(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new H(new ce([])),s=new Re(t,e),r=new Re(t,e+1),i=[];return this.Ur.forEachInRange([s,r],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new H(new ce([])),s=new Re(t,e),r=new Re(t,e+1);let i=ee();return this.Ur.forEachInRange([s,r],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Re(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Re{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return H.comparator(e.key,t.key)||Z(e.Yr,t.Yr)}static Kr(e,t){return Z(e.Yr,t.Yr)||H.comparator(e.key,t.key)}}/**
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
 */class _0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new xe(Re.$r)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Dv(i,t,s,r);this.mutationQueue.push(a);for(const c of r)this.Zr=this.Zr.add(new Re(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ei(s),i=r<0?0:r;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Ma:this.tr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Re(t,0),r=new Re(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],(a=>{const c=this.Xr(a.Yr);i.push(c)})),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new xe(Z);return t.forEach((r=>{const i=new Re(r,0),a=new Re(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(c=>{s=s.add(c.Yr)}))})),P.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const a=new Re(new H(i),0);let c=new xe(Z);return this.Zr.forEachWhile((h=>{const d=h.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(c=c.add(h.Yr)),!0)}),a),P.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){re(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return P.forEach(t.mutations,(r=>{const i=new Re(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Re(t,0),r=this.Zr.firstAfterOrEqual(s);return P.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class w0{constructor(e){this.ri=e,this.docs=(function(){return new pe(H.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return P.resolve(s?s.document.mutableCopy():Ve.newInvalidDocument(t))}getEntries(e,t){let s=Ct();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ve.newInvalidDocument(r))})),P.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=Ct();const a=t.path,c=new H(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Wb(Gb(m),s)<=0||(r.has(m.key)||Hi(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,s,r){G(9500)}ii(e,t){return P.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new b0(this)}getSize(e){return P.resolve(this.size)}}class b0 extends d0{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),P.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class v0{constructor(e){this.persistence=e,this.si=new kn((t=>Fa(t)),Ba),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.oi=0,this._i=new Wa,this.targetCount=0,this.ai=as.ur()}forEachTarget(e,t){return this.si.forEach(((s,r)=>t(r))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),P.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new as(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Pr(t),P.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),P.waitFor(i).next((()=>r))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return P.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),P.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((a=>{i.push(r.markPotentiallyOrphaned(e,a))})),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return P.resolve(s)}containsKey(e,t){return P.resolve(this._i.containsKey(t))}}/**
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
 */class bf{constructor(e,t){this.ui={},this.overlays={},this.ci=new Fi(0),this.li=!1,this.li=!0,this.hi=new y0,this.referenceDelegate=e(this),this.Pi=new v0(this),this.indexManager=new i0,this.remoteDocumentCache=(function(r){return new w0(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new s0(t),this.Ii=new p0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new g0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new _0(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){U("MemoryPersistence","Starting transaction:",e);const r=new E0(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,t){return P.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class E0 extends Qb{constructor(e){super(),this.currentSequenceNumber=e}}class Ka{constructor(e){this.persistence=e,this.Ri=new Wa,this.Vi=null}static mi(e){return new Ka(e)}get fi(){if(this.Vi)return this.Vi;throw G(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),P.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,(s=>{const r=H.fromPath(s);return this.gi(e,r).next((i=>{i||t.removeEntry(r,K.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Ii{constructor(e,t){this.persistence=e,this.pi=new kn((s=>Jb(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=h0(this,t)}static mi(e,t){return new Ii(e,t)}Ei(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return P.forEach(this.pi,((s,r)=>this.br(e,s,r).next((i=>i?P.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(a=>this.br(e,a,t).next((c=>{c||(s++,i.removeEntry(a,K.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),P.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ni(e.data.value)),t}br(e,t,s){return P.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.pi.get(t);return P.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Qa{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=r}static As(e,t){let s=ee(),r=ee();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Qa(e,t.fromCache,s,r)}}/**
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
 */class T0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class I0{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return ey()?8:Yb(je())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.ys(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,t,r,s).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new T0;return this.Ss(e,t,a).next((c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)}))})).next((()=>i.result))}bs(e,t,s,r){return s.documentReadCount<this.fs?(qn()<=J.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",$n(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(qn()<=J.DEBUG&&U("QueryEngine","Query:",$n(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(qn()<=J.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",$n(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pt(t))):P.resolve())}ys(e,t){if(Tu(t))return P.resolve(null);let s=pt(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=la(t,null,"F"),s=pt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const a=ee(...i);return this.ps.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,s).next((h=>{const d=this.Ds(t,c);return this.Cs(t,d,a,h.readTime)?this.ys(e,la(t,null,"F")):this.vs(e,d,t,h)}))))})))))}ws(e,t,s,r){return Tu(t)||r.isEqual(K.min())?P.resolve(null):this.ps.getDocuments(e,s).next((i=>{const a=this.Ds(t,i);return this.Cs(t,a,s,r)?P.resolve(null):(qn()<=J.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),$n(t)),this.vs(e,a,t,zb(r,sr)).next((c=>c)))}))}Ds(e,t){let s=new xe(Yd(e));return t.forEach(((r,i)=>{Hi(e,i)&&(s=s.add(i))})),s}Cs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,s){return qn()<=J.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",$n(t)),this.ps.getDocumentsMatchingQuery(e,t,Xt.min(),s)}vs(e,t,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const Ya="LocalStore",x0=3e8;class A0{constructor(e,t,s,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new pe(Z),this.xs=new kn((i=>Fa(i)),Ba),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new m0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function R0(n,e,t,s){return new A0(n,e,t,s)}async function vf(n,e){const t=Q(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const a=[],c=[];let h=ee();for(const d of r){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of i){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(s,h).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function S0(n,e){const t=Q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,h,d,m){const g=d.batch,_=g.keys();let A=P.resolve();return _.forEach((S=>{A=A.next((()=>m.getEntry(h,S))).next((k=>{const N=d.docVersions.get(S);re(N!==null,48541),k.version.compareTo(N)<0&&(g.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),m.addEntry(k)))}))})),A.next((()=>c.mutationQueue.removeMutationBatch(h,g)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let h=ee();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function Ef(n){const e=Q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function N0(n,e){const t=Q(n),s=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});r=t.Ms;const c=[];e.targetChanges.forEach(((m,g)=>{const _=r.get(g);if(!_)return;c.push(t.Pi.removeMatchingKeys(i,m.removedDocuments,g).next((()=>t.Pi.addMatchingKeys(i,m.addedDocuments,g))));let A=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?A=A.withResumeToken(ke.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):m.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(m.resumeToken,s)),r=r.insert(g,A),(function(k,N,$){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=x0?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(_,A,m)&&c.push(t.Pi.updateTargetData(i,A))}));let h=Ct(),d=ee();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),c.push(C0(i,a,e.documentUpdates).next((m=>{h=m.ks,d=m.qs}))),!s.isEqual(K.min())){const m=t.Pi.getLastRemoteSnapshotVersion(i).next((g=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s)));c.push(m)}return P.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,h,d))).next((()=>h))})).then((i=>(t.Ms=r,i)))}function C0(n,e,t){let s=ee(),r=ee();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let a=Ct();return t.forEach(((c,h)=>{const d=i.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(c)),h.isNoDocument()&&h.version.isEqual(K.min())?(e.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(c,h)):U(Ya,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)})),{ks:a,qs:r}}))}function k0(n,e){const t=Q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Ma),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function P0(n,e){const t=Q(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.Pi.getTargetData(s,e).next((i=>i?(r=i,P.resolve(r)):t.Pi.allocateTargetId(s).next((a=>(r=new $t(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function ma(n,e,t){const s=Q(n),r=s.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(a=>s.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!fs(a))throw a;U(Ya,`Failed to update sequence numbers for target ${e}: ${a}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function Ou(n,e,t){const s=Q(n);let r=K.min(),i=ee();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,m){const g=Q(h),_=g.xs.get(m);return _!==void 0?P.resolve(g.Ms.get(_)):g.Pi.getTargetData(d,m)})(s,a,pt(e)).next((c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(a,c.targetId).next((h=>{i=h}))})).next((()=>s.Fs.getDocumentsMatchingQuery(a,e,t?r:K.min(),t?i:ee()))).next((c=>(D0(s,yv(e),c),{documents:c,Qs:i})))))}function D0(n,e,t){let s=n.Os.get(e)||K.min();t.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),n.Os.set(e,s)}class Mu{constructor(){this.activeTargetIds=Tv()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class V0{constructor(){this.Mo=new Mu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Mu,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class j0{Oo(e){}shutdown(){}}/**
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
 */const Lu="ConnectivityMonitor";class Uu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){U(Lu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){U(Lu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wr=null;function pa(){return Wr===null?Wr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Wr++,"0x"+Wr.toString(16)}/**
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
 */const Lo="RestConnection",O0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class M0{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===wi?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,t,s,r,i){const a=pa(),c=this.zo(e,t.toUriEncodedString());U(Lo,`Sending RPC '${e}' ${a}:`,c,s);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,r,i);const{host:d}=new URL(c),m=sn(d);return this.Jo(e,c,h,s,m).then((g=>(U(Lo,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw ss(Lo,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",s),g}))}Ho(e,t,s,r,i,a){return this.Go(e,t,s,r,i)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+hs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}zo(e,t){const s=O0[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class L0{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Pe="WebChannelConnection";class U0 extends M0{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,r,i){const a=pa();return new Promise(((c,h)=>{const d=new Td;d.setWithCredentials(!0),d.listenOnce(Id.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case ti.NO_ERROR:const g=d.getResponseJson();U(Pe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case ti.TIMEOUT:U(Pe,`RPC '${e}' ${a} timed out`),h(new L(C.DEADLINE_EXCEEDED,"Request time out"));break;case ti.HTTP_ERROR:const _=d.getStatus();if(U(Pe,`RPC '${e}' ${a} failed with status:`,_,"response text:",d.getResponseText()),_>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A==null?void 0:A.error;if(S&&S.status&&S.message){const k=(function($){const F=$.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(F)>=0?F:C.UNKNOWN})(S.status);h(new L(k,S.message))}else h(new L(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new L(C.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{U(Pe,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(r);U(Pe,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",m,s,15)}))}T_(e,t,s){const r=pa(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Rd(),c=Ad(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,s),h.encodeInitMessageHeaders=!0;const m=i.join("");U(Pe,`Creating RPC '${e}' stream ${r}: ${m}`,h);const g=a.createWebChannel(m,h);this.I_(g);let _=!1,A=!1;const S=new L0({Yo:N=>{A?U(Pe,`Not sending because RPC '${e}' stream ${r} is closed:`,N):(_||(U(Pe,`Opening RPC '${e}' stream ${r} transport.`),g.open(),_=!0),U(Pe,`RPC '${e}' stream ${r} sending:`,N),g.send(N))},Zo:()=>g.close()}),k=(N,$,F)=>{N.listen($,(D=>{try{F(D)}catch(O){setTimeout((()=>{throw O}),0)}}))};return k(g,qs.EventType.OPEN,(()=>{A||(U(Pe,`RPC '${e}' stream ${r} transport opened.`),S.o_())})),k(g,qs.EventType.CLOSE,(()=>{A||(A=!0,U(Pe,`RPC '${e}' stream ${r} transport closed`),S.a_(),this.E_(g))})),k(g,qs.EventType.ERROR,(N=>{A||(A=!0,ss(Pe,`RPC '${e}' stream ${r} transport errored. Name:`,N.name,"Message:",N.message),S.a_(new L(C.UNAVAILABLE,"The operation could not be completed")))})),k(g,qs.EventType.MESSAGE,(N=>{var $;if(!A){const F=N.data[0];re(!!F,16349);const D=F,O=(D==null?void 0:D.error)||(($=D[0])==null?void 0:$.error);if(O){U(Pe,`RPC '${e}' stream ${r} received error:`,O);const j=O.status;let q=(function(b){const T=ve[b];if(T!==void 0)return lf(T)})(j),v=O.message;q===void 0&&(q=C.INTERNAL,v="Unknown error status: "+j+" with message "+O.message),A=!0,S.a_(new L(q,v)),g.close()}else U(Pe,`RPC '${e}' stream ${r} received:`,F),S.u_(F)}})),k(c,xd.STAT_EVENT,(N=>{N.stat===na.PROXY?U(Pe,`RPC '${e}' stream ${r} detected buffering proxy`):N.stat===na.NOPROXY&&U(Pe,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{S.__()}),0),S}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Uo(){return typeof document<"u"?document:null}/**
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
 */function Ki(n){return new $v(n,!0)}/**
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
 */class Tf{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Fu="PersistentStream";class If{constructor(e,t,s,r,i,a,c,h){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Tf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Nt(t.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new L(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return U(Fu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(U(Fu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class F0 extends If{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Gv(this.serializer,e),s=(function(i){if(!("targetChange"in i))return K.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?gt(a.readTime):K.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=fa(this.serializer),t.addTarget=(function(i,a){let c;const h=a.target;if(c=aa(h)?{documents:Qv(i,h)}:{query:Yv(i,h).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=df(i,a.resumeToken);const d=ua(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(K.min())>0){c.readTime=Ti(i,a.snapshotVersion.toTimestamp());const d=ua(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const s=Jv(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=fa(this.serializer),t.removeTarget=e,this.q_(t)}}class B0 extends If{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Kv(e.writeResults,e.commitTime),s=gt(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=fa(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Wv(this.serializer,s)))};this.q_(t)}}/**
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
 */class q0{}class $0 extends q0{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,ha(t,s),r,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(C.UNKNOWN,i.toString())}))}Ho(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(e,ha(t,s),r,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(C.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class H0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Nt(t),this.aa=!1):U("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const In="RemoteStore";class z0{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{s.enqueueAndForget((async()=>{Pn(this)&&(U(In,"Restarting streams for network reachability change."),await(async function(h){const d=Q(h);d.Ea.add(4),await br(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Qi(d)})(this))}))})),this.Ra=new H0(s,r)}}async function Qi(n){if(Pn(n))for(const e of n.da)await e(!0)}async function br(n){for(const e of n.da)await e(!1)}function xf(n,e){const t=Q(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ec(t)?Za(t):ps(t).O_()&&Ja(t,e))}function Xa(n,e){const t=Q(n),s=ps(t);t.Ia.delete(e),s.O_()&&Af(t,e),t.Ia.size===0&&(s.O_()?s.L_():Pn(t)&&t.Ra.set("Unknown"))}function Ja(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ps(n).Y_(e)}function Af(n,e){n.Va.Ue(e),ps(n).Z_(e)}function Za(n){n.Va=new Uv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ps(n).start(),n.Ra.ua()}function ec(n){return Pn(n)&&!ps(n).x_()&&n.Ia.size>0}function Pn(n){return Q(n).Ea.size===0}function Rf(n){n.Va=void 0}async function G0(n){n.Ra.set("Online")}async function W0(n){n.Ia.forEach(((e,t)=>{Ja(n,e)}))}async function K0(n,e){Rf(n),ec(n)?(n.Ra.ha(e),Za(n)):n.Ra.set("Unknown")}async function Q0(n,e,t){if(n.Ra.set("Online"),e instanceof hf&&e.state===2&&e.cause)try{await(async function(r,i){const a=i.cause;for(const c of i.targetIds)r.Ia.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Ia.delete(c),r.Va.removeTarget(c))})(n,e)}catch(s){U(In,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await xi(n,s)}else if(e instanceof ii?n.Va.Ze(e):e instanceof uf?n.Va.st(e):n.Va.tt(e),!t.isEqual(K.min()))try{const s=await Ef(n.localStore);t.compareTo(s)>=0&&await(function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=i.Ia.get(d);m&&i.Ia.set(d,m.withResumeToken(h.resumeToken,a))}})),c.targetMismatches.forEach(((h,d)=>{const m=i.Ia.get(h);if(!m)return;i.Ia.set(h,m.withResumeToken(ke.EMPTY_BYTE_STRING,m.snapshotVersion)),Af(i,h);const g=new $t(m.target,h,d,m.sequenceNumber);Ja(i,g)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){U(In,"Failed to raise snapshot:",s),await xi(n,s)}}async function xi(n,e,t){if(!fs(e))throw e;n.Ea.add(1),await br(n),n.Ra.set("Offline"),t||(t=()=>Ef(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{U(In,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Qi(n)}))}function Sf(n,e){return e().catch((t=>xi(n,t,e)))}async function Yi(n){const e=Q(n),t=tn(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ma;for(;Y0(e);)try{const r=await k0(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,X0(e,r)}catch(r){await xi(e,r)}Nf(e)&&Cf(e)}function Y0(n){return Pn(n)&&n.Ta.length<10}function X0(n,e){n.Ta.push(e);const t=tn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Nf(n){return Pn(n)&&!tn(n).x_()&&n.Ta.length>0}function Cf(n){tn(n).start()}async function J0(n){tn(n).ra()}async function Z0(n){const e=tn(n);for(const t of n.Ta)e.ea(t.mutations)}async function eE(n,e,t){const s=n.Ta.shift(),r=Ha.from(s,e,t);await Sf(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await Yi(n)}async function tE(n,e){e&&tn(n).X_&&await(async function(s,r){if((function(a){return Ov(a)&&a!==C.ABORTED})(r.code)){const i=s.Ta.shift();tn(s).B_(),await Sf(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Yi(s)}})(n,e),Nf(n)&&Cf(n)}async function Bu(n,e){const t=Q(n);t.asyncQueue.verifyOperationInProgress(),U(In,"RemoteStore received new credentials");const s=Pn(t);t.Ea.add(3),await br(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Qi(t)}async function nE(n,e){const t=Q(n);e?(t.Ea.delete(2),await Qi(t)):e||(t.Ea.add(2),await br(t),t.Ra.set("Unknown"))}function ps(n){return n.ma||(n.ma=(function(t,s,r){const i=Q(t);return i.sa(),new F0(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Xo:G0.bind(null,n),t_:W0.bind(null,n),r_:K0.bind(null,n),H_:Q0.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),ec(n)?Za(n):n.Ra.set("Unknown")):(await n.ma.stop(),Rf(n))}))),n.ma}function tn(n){return n.fa||(n.fa=(function(t,s,r){const i=Q(t);return i.sa(),new B0(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:J0.bind(null,n),r_:tE.bind(null,n),ta:Z0.bind(null,n),na:eE.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Yi(n)):(await n.fa.stop(),n.Ta.length>0&&(U(In,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class tc{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,c=new tc(e,t,a,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nc(n,e){if(Nt("AsyncQueue",`${e}: ${n}`),fs(n))return new L(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Jn{static emptySet(e){return new Jn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||H.comparator(t.key,s.key):(t,s)=>H.comparator(t.key,s.key),this.keyedMap=$s(),this.sortedSet=new pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Jn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class qu{constructor(){this.ga=new pe(H.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):G(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class cs{constructor(e,t,s,r,i,a,c,h,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new cs(e,t,Jn.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$i(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class sE{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class rE{constructor(){this.queries=$u(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=Q(t),i=r.queries;r.queries=$u(),i.forEach(((a,c)=>{for(const h of c.Sa)h.onError(s)}))})(this,new L(C.ABORTED,"Firestore shutting down"))}}function $u(){return new kn((n=>Qd(n)),$i)}async function kf(n,e){const t=Q(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new sE,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=nc(a,`Initialization of query '${$n(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&sc(t)}async function Pf(n,e){const t=Q(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function iE(n,e){const t=Q(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(r)&&(s=!0);a.wa=r}}s&&sc(t)}function oE(n,e,t){const s=Q(n),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(t);s.queries.delete(e)}function sc(n){n.Ca.forEach((e=>{e.next()}))}var ga,Hu;(Hu=ga||(ga={})).Ma="default",Hu.Cache="cache";class Df{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new cs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ga.Cache}}/**
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
 */class Vf{constructor(e){this.key=e}}class jf{constructor(e){this.key=e}}class aE{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ee(),this.mutatedKeys=ee(),this.eu=Yd(e),this.tu=new Jn(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new qu,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const h=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((m,g)=>{const _=r.get(m),A=Hi(this.query,g)?g:null,S=!!_&&this.mutatedKeys.has(_.key),k=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let N=!1;_&&A?_.data.isEqual(A.data)?S!==k&&(s.track({type:3,doc:A}),N=!0):this.su(_,A)||(s.track({type:2,doc:A}),N=!0,(h&&this.eu(A,h)>0||d&&this.eu(A,d)<0)&&(c=!0)):!_&&A?(s.track({type:0,doc:A}),N=!0):_&&!A&&(s.track({type:1,doc:_}),N=!0,(h||d)&&(c=!0)),N&&(A?(a=a.add(A),i=k?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),s.track({type:1,doc:m})}return{tu:a,iu:s,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((m,g)=>(function(A,S){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Rt:N})}};return k(A)-k(S)})(m.type,g.type)||this.eu(m.doc,g.doc))),this.ou(s),r=r??!1;const c=t&&!r?this._u():[],h=this.Xa.size===0&&this.current&&!r?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new cs(this.query,e.tu,i,a,e.mutatedKeys,h===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new qu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ee(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new jf(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new Vf(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=ee();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return cs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const rc="SyncEngine";class cE{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class lE{constructor(e){this.key=e,this.hu=!1}}class uE{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new kn((c=>Qd(c)),$i),this.Iu=new Map,this.Eu=new Set,this.du=new pe(H.comparator),this.Au=new Map,this.Ru=new Wa,this.Vu={},this.mu=new Map,this.fu=as.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function hE(n,e,t=!0){const s=Bf(n);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Of(s,e,t,!0),r}async function dE(n,e){const t=Bf(n);await Of(t,e,!0,!1)}async function Of(n,e,t,s){const r=await P0(n.localStore,pt(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return s&&(c=await fE(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&xf(n.remoteStore,r),c}async function fE(n,e,t,s,r){n.pu=(g,_,A)=>(async function(k,N,$,F){let D=N.view.ru($);D.Cs&&(D=await Ou(k.localStore,N.query,!1).then((({documents:v})=>N.view.ru(v,D))));const O=F&&F.targetChanges.get(N.targetId),j=F&&F.targetMismatches.get(N.targetId)!=null,q=N.view.applyChanges(D,k.isPrimaryClient,O,j);return Gu(k,N.targetId,q.au),q.snapshot})(n,g,_,A);const i=await Ou(n.localStore,e,!0),a=new aE(e,i.Qs),c=a.ru(i.documents),h=wr.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),d=a.applyChanges(c,n.isPrimaryClient,h);Gu(n,t,d.au);const m=new cE(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function mE(n,e,t){const s=Q(n),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter((a=>!$i(a,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await ma(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Xa(s.remoteStore,r.targetId),ya(s,r.targetId)})).catch(ds)):(ya(s,r.targetId),await ma(s.localStore,r.targetId,!0))}async function pE(n,e){const t=Q(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Xa(t.remoteStore,s.targetId))}async function gE(n,e,t){const s=TE(n);try{const r=await(function(a,c){const h=Q(a),d=le.now(),m=c.reduce(((A,S)=>A.add(S.key)),ee());let g,_;return h.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let S=Ct(),k=ee();return h.Ns.getEntries(A,m).next((N=>{S=N,S.forEach((($,F)=>{F.isValidDocument()||(k=k.add($))}))})).next((()=>h.localDocuments.getOverlayedDocuments(A,S))).next((N=>{g=N;const $=[];for(const F of c){const D=kv(F,g.get(F.key).overlayedDocument);D!=null&&$.push(new cn(F.key,D,Bd(D.value.mapValue),st.exists(!0)))}return h.mutationQueue.addMutationBatch(A,d,$,c)})).next((N=>{_=N;const $=N.applyToLocalDocumentSet(g,k);return h.documentOverlayCache.saveOverlays(A,N.batchId,$)}))})).then((()=>({batchId:_.batchId,changes:Jd(g)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,c,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new pe(Z)),d=d.insert(c,h),a.Vu[a.currentUser.toKey()]=d})(s,r.batchId,t),await vr(s,r.changes),await Yi(s.remoteStore)}catch(r){const i=nc(r,"Failed to persist write");t.reject(i)}}async function Mf(n,e){const t=Q(n);try{const s=await N0(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const a=t.Au.get(i);a&&(re(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?re(a.hu,14607):r.removedDocuments.size>0&&(re(a.hu,42227),a.hu=!1))})),await vr(t,s,e)}catch(s){await ds(s)}}function zu(n,e,t){const s=Q(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&r.push(c.snapshot)})),(function(a,c){const h=Q(a);h.onlineState=c;let d=!1;h.queries.forEach(((m,g)=>{for(const _ of g.Sa)_.va(c)&&(d=!0)})),d&&sc(h)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function yE(n,e,t){const s=Q(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),i=r&&r.key;if(i){let a=new pe(H.comparator);a=a.insert(i,Ve.newNoDocument(i,K.min()));const c=ee().add(i),h=new Wi(K.min(),new Map,new pe(Z),a,c);await Mf(s,h),s.du=s.du.remove(i),s.Au.delete(e),ic(s)}else await ma(s.localStore,e,!1).then((()=>ya(s,e,t))).catch(ds)}async function _E(n,e){const t=Q(n),s=e.batch.batchId;try{const r=await S0(t.localStore,e);Uf(t,s,null),Lf(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await vr(t,r)}catch(r){await ds(r)}}async function wE(n,e,t){const s=Q(n);try{const r=await(function(a,c){const h=Q(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next((g=>(re(g!==null,37113),m=g.keys(),h.mutationQueue.removeMutationBatch(d,g)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>h.localDocuments.getDocuments(d,m)))}))})(s.localStore,e);Uf(s,e,t),Lf(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await vr(s,r)}catch(r){await ds(r)}}function Lf(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Uf(n,e,t){const s=Q(n);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function ya(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||Ff(n,s)}))}function Ff(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Xa(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),ic(n))}function Gu(n,e,t){for(const s of t)s instanceof Vf?(n.Ru.addReference(s.key,e),bE(n,s)):s instanceof jf?(U(rc,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||Ff(n,s.key)):G(19791,{wu:s})}function bE(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(U(rc,"New document in limbo: "+t),n.Eu.add(s),ic(n))}function ic(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new H(ce.fromString(e)),s=n.fu.next();n.Au.set(s,new lE(t)),n.du=n.du.insert(t,s),xf(n.remoteStore,new $t(pt(qa(t.path)),s,"TargetPurposeLimboResolution",Fi.ce))}}async function vr(n,e,t){const s=Q(n),r=[],i=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,h)=>{a.push(s.pu(h,e,t).then((d=>{var m;if((d||t)&&s.isPrimaryClient){const g=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(h.targetId,g?"current":"not-current")}if(d){r.push(d);const g=Qa.As(h.targetId,d);i.push(g)}})))})),await Promise.all(a),s.Pu.H_(r),await(async function(h,d){const m=Q(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>P.forEach(d,(_=>P.forEach(_.Es,(A=>m.persistence.referenceDelegate.addReference(g,_.targetId,A))).next((()=>P.forEach(_.ds,(A=>m.persistence.referenceDelegate.removeReference(g,_.targetId,A)))))))))}catch(g){if(!fs(g))throw g;U(Ya,"Failed to update sequence numbers: "+g)}for(const g of d){const _=g.targetId;if(!g.fromCache){const A=m.Ms.get(_),S=A.snapshotVersion,k=A.withLastLimboFreeSnapshotVersion(S);m.Ms=m.Ms.insert(_,k)}}})(s.localStore,i))}async function vE(n,e){const t=Q(n);if(!t.currentUser.isEqual(e)){U(rc,"User change. New user:",e.toKey());const s=await vf(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((c=>{c.forEach((h=>{h.reject(new L(C.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await vr(t,s.Ls)}}function EE(n,e){const t=Q(n),s=t.Au.get(e);if(s&&s.hu)return ee().add(s.key);{let r=ee();const i=t.Iu.get(e);if(!i)return r;for(const a of i){const c=t.Tu.get(a);r=r.unionWith(c.view.nu)}return r}}function Bf(n){const e=Q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yE.bind(null,e),e.Pu.H_=iE.bind(null,e.eventManager),e.Pu.yu=oE.bind(null,e.eventManager),e}function TE(n){const e=Q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_E.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wE.bind(null,e),e}class Ai{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ki(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return R0(this.persistence,new I0,e.initialUser,this.serializer)}Cu(e){return new bf(Ka.mi,this.serializer)}Du(e){return new V0}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ai.provider={build:()=>new Ai};class IE extends Ai{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){re(this.persistence.referenceDelegate instanceof Ii,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new l0(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Fe.withCacheSize(this.cacheSizeBytes):Fe.DEFAULT;return new bf((s=>Ii.mi(s,t)),this.serializer)}}class _a{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>zu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=vE.bind(null,this.syncEngine),await nE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new rE})()}createDatastore(e){const t=Ki(e.databaseInfo.databaseId),s=(function(i){return new U0(i)})(e.databaseInfo);return(function(i,a,c,h){return new $0(i,a,c,h)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,a,c){return new z0(s,r,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>zu(this.syncEngine,t,0)),(function(){return Uu.v()?new Uu:new j0})())}createSyncEngine(e,t){return(function(r,i,a,c,h,d,m){const g=new uE(r,i,a,c,h,d);return m&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=Q(r);U(In,"RemoteStore shutting down."),i.Ea.add(5),await br(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}_a.provider={build:()=>new _a};/**
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
 */class qf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Nt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const nn="FirestoreClient";class xE{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=De.UNAUTHENTICATED,this.clientId=Oa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async a=>{U(nn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(U(nn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=nc(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Fo(n,e){n.asyncQueue.verifyOperationInProgress(),U(nn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await vf(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Wu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await AE(n);U(nn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Bu(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>Bu(e.remoteStore,r))),n._onlineComponents=e}async function AE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(nn,"Using user provided OfflineComponentProvider");try{await Fo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===C.FAILED_PRECONDITION||r.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;ss("Error using user provided cache. Falling back to memory cache: "+t),await Fo(n,new Ai)}}else U(nn,"Using default OfflineComponentProvider"),await Fo(n,new IE(void 0));return n._offlineComponents}async function $f(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(nn,"Using user provided OnlineComponentProvider"),await Wu(n,n._uninitializedComponentsProvider._online)):(U(nn,"Using default OnlineComponentProvider"),await Wu(n,new _a))),n._onlineComponents}function RE(n){return $f(n).then((e=>e.syncEngine))}async function Hf(n){const e=await $f(n),t=e.eventManager;return t.onListen=hE.bind(null,e.syncEngine),t.onUnlisten=mE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=dE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=pE.bind(null,e.syncEngine),t}function SE(n,e,t={}){const s=new xt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,h,d){const m=new qf({next:_=>{m.Nu(),a.enqueueAndForget((()=>Pf(i,g)));const A=_.docs.has(c);!A&&_.fromCache?d.reject(new L(C.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&_.fromCache&&h&&h.source==="server"?d.reject(new L(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),g=new Df(qa(c.path),m,{includeMetadataChanges:!0,qa:!0});return kf(i,g)})(await Hf(n),n.asyncQueue,e,t,s))),s.promise}function NE(n,e,t={}){const s=new xt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,h,d){const m=new qf({next:_=>{m.Nu(),a.enqueueAndForget((()=>Pf(i,g))),_.fromCache&&h.source==="server"?d.reject(new L(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),g=new Df(c,m,{includeMetadataChanges:!0,qa:!0});return kf(i,g)})(await Hf(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function zf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ku=new Map;/**
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
 */const Gf="firestore.googleapis.com",Qu=!0;class Yu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new L(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gf,this.ssl=Qu}else this.host=e.host,this.ssl=e.ssl??Qu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<a0)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zf(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xi{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Vb;switch(s.type){case"firstParty":return new Lb(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new L(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Ku.get(t);s&&(U("ComponentProvider","Removing Datastore"),Ku.delete(t),s.terminate())})(this),Promise.resolve()}}function CE(n,e,t,s={}){var d;n=wt(n,Xi);const r=sn(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;r&&(Ta(`https://${c}`),Ia("Firestore",!0)),i.host!==Gf&&i.host!==c&&ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...i,host:c,ssl:r,emulatorOptions:s};if(!Yt(h,a)&&(n._setSettings(h),s.mockUserToken)){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=De.MOCK_USER;else{m=Ph(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new L(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new De(_)}n._authCredentials=new jb(new Nd(m,g))}}/**
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
 */class Dn{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Dn(this.firestore,e,this._query)}}class be{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(yr(t,be._jsonSchema))return new be(e,s||null,new H(ce.fromString(t.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:Te("string",be._jsonSchemaVersion),referencePath:Te("string")};class Qt extends Dn{constructor(e,t,s){super(e,t,qa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new H(e))}withConverter(e){return new Qt(this.firestore,e,this._path)}}function Ht(n,e,...t){if(n=de(n),Cd("collection","path",e),n instanceof Xi){const s=ce.fromString(e,...t);return lu(s),new Qt(n,null,s)}{if(!(n instanceof be||n instanceof Qt))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ce.fromString(e,...t));return lu(s),new Qt(n.firestore,null,s)}}function Se(n,e,...t){if(n=de(n),arguments.length===1&&(e=Oa.newId()),Cd("doc","path",e),n instanceof Xi){const s=ce.fromString(e,...t);return cu(s),new be(n,null,new H(s))}{if(!(n instanceof be||n instanceof Qt))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ce.fromString(e,...t));return cu(s),new be(n.firestore,n instanceof Qt?n.converter:null,new H(s))}}/**
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
 */const Xu="AsyncQueue";class Ju{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Tf(this,"async_queue_retry"),this._c=()=>{const s=Uo();s&&U(Xu,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Uo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Uo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new xt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!fs(e))throw e;U(Xu,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Nt("INTERNAL UNHANDLED ERROR: ",Zu(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=tc.createAndSchedule(this,e,t,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&G(47125,{Pc:Zu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Zu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class gs extends Xi{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Ju,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ju(e),this._firestoreClient=void 0,await e}}}function kE(n,e){const t=typeof n=="object"?n:Vi(),s=typeof n=="string"?n:wi,r=rn(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Nh("firestore");i&&CE(r,...i)}return r}function oc(n){if(n._terminated)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||PE(n),n._firestoreClient}function PE(n){var s,r,i;const e=n._freezeSettings(),t=(function(c,h,d,m){return new tv(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,zf(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new xE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}})(n._componentsProvider))}/**
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
 */class Je{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Je(ke.fromBase64String(e))}catch(t){throw new L(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Je(ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Je._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(yr(e,Je._jsonSchema))return Je.fromBase64String(e.bytes)}}Je._jsonSchemaVersion="firestore/bytes/1.0",Je._jsonSchema={type:Te("string",Je._jsonSchemaVersion),bytes:Te("string")};/**
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
 */class Ji{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zi{constructor(e){this._methodName=e}}/**
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
 */class yt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yt._jsonSchemaVersion}}static fromJSON(e){if(yr(e,yt._jsonSchema))return new yt(e.latitude,e.longitude)}}yt._jsonSchemaVersion="firestore/geoPoint/1.0",yt._jsonSchema={type:Te("string",yt._jsonSchemaVersion),latitude:Te("number"),longitude:Te("number")};/**
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
 */class _t{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:_t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(yr(e,_t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new _t(e.vectorValues);throw new L(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_t._jsonSchemaVersion="firestore/vectorValue/1.0",_t._jsonSchema={type:Te("string",_t._jsonSchemaVersion),vectorValues:Te("object")};/**
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
 */const DE=/^__.*__$/;class VE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new cn(e,this.data,this.fieldMask,t,this.fieldTransforms):new _r(e,this.data,t,this.fieldTransforms)}}class Wf{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new cn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Kf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{Ac:n})}}class ac{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ac({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ri(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Kf(this.Ac)&&DE.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class jE{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ki(e)}Cc(e,t,s,r=!1){return new ac({Ac:e,methodName:t,Dc:s,path:Ce.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eo(n){const e=n._freezeSettings(),t=Ki(n._databaseId);return new jE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Qf(n,e,t,s,r,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,r);lc("Data must be an object, but it was:",a,s);const c=Yf(s,a);let h,d;if(i.merge)h=new We(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const _=wa(e,g,t);if(!a.contains(_))throw new L(C.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Jf(m,_)||m.push(_)}h=new We(m),d=a.fieldTransforms.filter((g=>h.covers(g.field)))}else h=null,d=a.fieldTransforms;return new VE(new $e(c),h,d)}class to extends Zi{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof to}}class cc extends Zi{_toFieldTransform(e){return new Rv(e.path,new cr)}isEqual(e){return e instanceof cc}}function OE(n,e,t,s){const r=n.Cc(1,e,t);lc("Data must be an object, but it was:",r,s);const i=[],a=$e.empty();an(s,((h,d)=>{const m=uc(e,h,t);d=de(d);const g=r.yc(m);if(d instanceof to)i.push(m);else{const _=Er(d,g);_!=null&&(i.push(m),a.set(m,_))}}));const c=new We(i);return new Wf(a,c,r.fieldTransforms)}function ME(n,e,t,s,r,i){const a=n.Cc(1,e,t),c=[wa(e,s,t)],h=[r];if(i.length%2!=0)throw new L(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(wa(e,i[_])),h.push(i[_+1]);const d=[],m=$e.empty();for(let _=c.length-1;_>=0;--_)if(!Jf(d,c[_])){const A=c[_];let S=h[_];S=de(S);const k=a.yc(A);if(S instanceof to)d.push(A);else{const N=Er(S,k);N!=null&&(d.push(A),m.set(A,N))}}const g=new We(d);return new Wf(m,g,a.fieldTransforms)}function LE(n,e,t,s=!1){return Er(t,n.Cc(s?4:3,e))}function Er(n,e){if(Xf(n=de(n)))return lc("Unsupported field value:",e,n),Yf(n,e);if(n instanceof Zi)return(function(s,r){if(!Kf(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const i=[];let a=0;for(const c of s){let h=Er(c,r.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),i.push(h),a++}return{arrayValue:{values:i}}})(n,e)}return(function(s,r){if((s=de(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Iv(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=le.fromDate(s);return{timestampValue:Ti(r.serializer,i)}}if(s instanceof le){const i=new le(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ti(r.serializer,i)}}if(s instanceof yt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Je)return{bytesValue:df(r.serializer,s._byteString)};if(s instanceof be){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ga(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof _t)return(function(a,c){return{mapValue:{fields:{[Ud]:{stringValue:Fd},[bi]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return $a(c.serializer,d)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${Ui(s)}`)})(n,e)}function Yf(n,e){const t={};return Dd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):an(n,((s,r)=>{const i=Er(r,e.mc(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function Xf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof le||n instanceof yt||n instanceof Je||n instanceof be||n instanceof Zi||n instanceof _t)}function lc(n,e,t){if(!Xf(t)||!kd(t)){const s=Ui(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function wa(n,e,t){if((e=de(e))instanceof Ji)return e._internalPath;if(typeof e=="string")return uc(n,e);throw Ri("Field path arguments must be of type string or ",n,!1,void 0,t)}const UE=new RegExp("[~\\*/\\[\\]]");function uc(n,e,t){if(e.search(UE)>=0)throw Ri(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ji(...e.split("."))._internalPath}catch{throw Ri(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ri(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(i||a)&&(h+=" (found",i&&(h+=` in field ${s}`),a&&(h+=` in document ${r}`),h+=")"),new L(C.INVALID_ARGUMENT,c+n+h)}function Jf(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class Zf{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(no("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class FE extends Zf{data(){return super.data()}}function no(n,e){return typeof e=="string"?uc(n,e):e instanceof Ji?e._internalPath:e._delegate._internalPath}/**
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
 */function BE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hc{}class em extends hc{}function hr(n,e,...t){let s=[];e instanceof hc&&s.push(e),s=s.concat(t),(function(i){const a=i.filter((h=>h instanceof dc)).length,c=i.filter((h=>h instanceof so)).length;if(a>1||a>0&&c>0)throw new L(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class so extends em{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new so(e,t,s)}_apply(e){const t=this._parse(e);return tm(e._query,t),new Dn(e.firestore,e.converter,ca(e._query,t))}_parse(e){const t=eo(e.firestore);return(function(i,a,c,h,d,m,g){let _;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new L(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){th(g,m);const S=[];for(const k of g)S.push(eh(h,i,k));_={arrayValue:{values:S}}}else _=eh(h,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||th(g,m),_=LE(c,a,g,m==="in"||m==="not-in");return Ee.create(d,m,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Zn(n,e,t){const s=e,r=no("where",n);return so._create(r,s,t)}class dc extends hc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new dc(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:ot.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let a=r;const c=i.getFlattenedFilters();for(const h of c)tm(a,h),a=ca(a,h)})(e._query,t),new Dn(e.firestore,e.converter,ca(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fc extends em{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new fc(e,t)}_apply(e){const t=(function(r,i,a){if(r.startAt!==null)throw new L(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new L(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ar(i,a)})(e._query,this._field,this._direction);return new Dn(e.firestore,e.converter,(function(r,i){const a=r.explicitOrderBy.concat([i]);return new ms(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)})(e._query,t))}}function qE(n,e="asc"){const t=e,s=no("orderBy",n);return fc._create(s,t)}function eh(n,e,t){if(typeof(t=de(t))=="string"){if(t==="")throw new L(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kd(e)&&t.indexOf("/")!==-1)throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ce.fromString(t));if(!H.isDocumentKey(s))throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return yu(n,new H(s))}if(t instanceof be)return yu(n,t._key);throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ui(t)}.`)}function th(n,e){if(!Array.isArray(n)||n.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tm(n,e){const t=(function(r,i){for(const a of r)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $E{convertValue(e,t="none"){switch(en(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return an(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[bi].arrayValue)==null?void 0:r.values)==null?void 0:i.map((a=>we(a.doubleValue)));return new _t(t)}convertGeoPoint(e){return new yt(we(e.latitude),we(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=qi(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(rr(e));default:return null}}convertTimestamp(e){const t=Jt(e);return new le(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ce.fromString(e);re(_f(s),9688,{name:e});const r=new ir(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(t)||Nt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function nm(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class zs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bn extends Zf{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new oi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(no("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=bn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}bn._jsonSchemaVersion="firestore/documentSnapshot/1.0",bn._jsonSchema={type:Te("string",bn._jsonSchemaVersion),bundleSource:Te("string","DocumentSnapshot"),bundleName:Te("string"),bundle:Te("string")};class oi extends bn{data(e={}){return super.data(e)}}class es{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new zs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new oi(this._firestore,this._userDataWriter,s.key,s,new zs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((c=>{const h=new oi(r._firestore,r._userDataWriter,c.doc.key,c.doc,new zs(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const h=new oi(r._firestore,r._userDataWriter,c.doc.key,c.doc,new zs(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:HE(c.type),doc:h,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=es._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Oa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function HE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:n})}}/**
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
 */function Le(n){n=wt(n,be);const e=wt(n.firestore,gs);return SE(oc(e),n._key).then((t=>GE(e,n,t)))}es._jsonSchemaVersion="firestore/querySnapshot/1.0",es._jsonSchema={type:Te("string",es._jsonSchemaVersion),bundleSource:Te("string","QuerySnapshot"),bundleName:Te("string"),bundle:Te("string")};class sm extends $E{constructor(e){super(),this.firestore=e}convertBytes(e){return new Je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function dr(n){n=wt(n,Dn);const e=wt(n.firestore,gs),t=oc(e),s=new sm(e);return BE(n._query),NE(t,n._query).then((r=>new es(e,s,n,r)))}function zE(n,e,t){n=wt(n,be);const s=wt(n.firestore,gs),r=nm(n.converter,e);return mc(s,[Qf(eo(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,st.none())])}function nh(n,e,t,...s){n=wt(n,be);const r=wt(n.firestore,gs),i=eo(r);let a;return a=typeof(e=de(e))=="string"||e instanceof Ji?ME(i,"updateDoc",n._key,e,t,s):OE(i,"updateDoc",n._key,e),mc(r,[a.toMutation(n._key,st.exists(!0))])}function sh(n,e){const t=wt(n.firestore,gs),s=Se(n),r=nm(n.converter,e);return mc(t,[Qf(eo(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,st.exists(!1))]).then((()=>s))}function mc(n,e){return(function(s,r){const i=new xt;return s.asyncQueue.enqueueAndForget((async()=>gE(await RE(s),r,i))),i.promise})(oc(n),e)}function GE(n,e,t){const s=t.docs.get(e._key),r=new sm(n);return new bn(n,r,e._key,s,new zs(t.hasPendingWrites,t.fromCache),e.converter)}function Gn(){return new cc("serverTimestamp")}(function(e,t=!0){(function(r){hs=r})(Nn),rt(new Ze("firestore",((s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),c=new gs(new Ob(s.getProvider("auth-internal")),new Ub(a,s.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ir(d.options.projectId,m)})(a,r),a);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),He(ru,iu,e),He(ru,iu,"esm2020")})();const rm="@firebase/installations",pc="0.6.19";/**
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
 */const im=1e4,om=`w:${pc}`,am="FIS_v2",WE="https://firebaseinstallations.googleapis.com/v1",KE=3600*1e3,QE="installations",YE="Installations";/**
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
 */const XE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xn=new Sn(QE,YE,XE);function cm(n){return n instanceof et&&n.code.includes("request-failed")}/**
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
 */function lm({projectId:n}){return`${WE}/projects/${n}/installations`}function um(n){return{token:n.token,requestStatus:2,expiresIn:ZE(n.expiresIn),creationTime:Date.now()}}async function hm(n,e){const s=(await e.json()).error;return xn.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function dm({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function JE(n,{refreshToken:e}){const t=dm(n);return t.append("Authorization",eT(e)),t}async function fm(n){const e=await n();return e.status>=500&&e.status<600?n():e}function ZE(n){return Number(n.replace("s","000"))}function eT(n){return`${am} ${n}`}/**
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
 */async function tT({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=lm(n),r=dm(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={fid:t,authVersion:am,appId:n.appId,sdkVersion:om},c={method:"POST",headers:r,body:JSON.stringify(a)},h=await fm(()=>fetch(s,c));if(h.ok){const d=await h.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:um(d.authToken)}}else throw await hm("Create Installation",h)}/**
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
 */function mm(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function nT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const sT=/^[cdef][\w-]{21}$/,ba="";function rT(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=iT(n);return sT.test(t)?t:ba}catch{return ba}}function iT(n){return nT(n).substr(0,22)}/**
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
 */function ro(n){return`${n.appName}!${n.appId}`}/**
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
 */const pm=new Map;function gm(n,e){const t=ro(n);ym(t,e),oT(t,e)}function ym(n,e){const t=pm.get(n);if(t)for(const s of t)s(e)}function oT(n,e){const t=aT();t&&t.postMessage({key:n,fid:e}),cT()}let wn=null;function aT(){return!wn&&"BroadcastChannel"in self&&(wn=new BroadcastChannel("[Firebase] FID Change"),wn.onmessage=n=>{ym(n.data.key,n.data.fid)}),wn}function cT(){pm.size===0&&wn&&(wn.close(),wn=null)}/**
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
 */const lT="firebase-installations-database",uT=1,An="firebase-installations-store";let Bo=null;function gc(){return Bo||(Bo=Lh(lT,uT,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(An)}}})),Bo}async function Si(n,e){const t=ro(n),r=(await gc()).transaction(An,"readwrite"),i=r.objectStore(An),a=await i.get(t);return await i.put(e,t),await r.done,(!a||a.fid!==e.fid)&&gm(n,e.fid),e}async function _m(n){const e=ro(n),s=(await gc()).transaction(An,"readwrite");await s.objectStore(An).delete(e),await s.done}async function io(n,e){const t=ro(n),r=(await gc()).transaction(An,"readwrite"),i=r.objectStore(An),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await r.done,c&&(!a||a.fid!==c.fid)&&gm(n,c.fid),c}/**
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
 */async function yc(n){let e;const t=await io(n.appConfig,s=>{const r=hT(s),i=dT(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===ba?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function hT(n){const e=n||{fid:rT(),registrationStatus:0};return wm(e)}function dT(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(xn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=fT(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mT(n)}:{installationEntry:e}}async function fT(n,e){try{const t=await tT(n,e);return Si(n.appConfig,t)}catch(t){throw cm(t)&&t.customData.serverCode===409?await _m(n.appConfig):await Si(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function mT(n){let e=await rh(n.appConfig);for(;e.registrationStatus===1;)await mm(100),e=await rh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await yc(n);return s||t}return e}function rh(n){return io(n,e=>{if(!e)throw xn.create("installation-not-found");return wm(e)})}function wm(n){return pT(n)?{fid:n.fid,registrationStatus:0}:n}function pT(n){return n.registrationStatus===1&&n.registrationTime+im<Date.now()}/**
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
 */async function gT({appConfig:n,heartbeatServiceProvider:e},t){const s=yT(n,t),r=JE(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={installation:{sdkVersion:om,appId:n.appId}},c={method:"POST",headers:r,body:JSON.stringify(a)},h=await fm(()=>fetch(s,c));if(h.ok){const d=await h.json();return um(d)}else throw await hm("Generate Auth Token",h)}function yT(n,{fid:e}){return`${lm(n)}/${e}/authTokens:generate`}/**
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
 */async function _c(n,e=!1){let t;const s=await io(n.appConfig,i=>{if(!bm(i))throw xn.create("not-registered");const a=i.authToken;if(!e&&bT(a))return i;if(a.requestStatus===1)return t=_T(n,e),i;{if(!navigator.onLine)throw xn.create("app-offline");const c=ET(i);return t=wT(n,c),c}});return t?await t:s.authToken}async function _T(n,e){let t=await ih(n.appConfig);for(;t.authToken.requestStatus===1;)await mm(100),t=await ih(n.appConfig);const s=t.authToken;return s.requestStatus===0?_c(n,e):s}function ih(n){return io(n,e=>{if(!bm(e))throw xn.create("not-registered");const t=e.authToken;return TT(t)?{...e,authToken:{requestStatus:0}}:e})}async function wT(n,e){try{const t=await gT(n,e),s={...e,authToken:t};return await Si(n.appConfig,s),t}catch(t){if(cm(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await _m(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Si(n.appConfig,s)}throw t}}function bm(n){return n!==void 0&&n.registrationStatus===2}function bT(n){return n.requestStatus===2&&!vT(n)}function vT(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+KE}function ET(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function TT(n){return n.requestStatus===1&&n.requestTime+im<Date.now()}/**
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
 */async function IT(n){const e=n,{installationEntry:t,registrationPromise:s}=await yc(e);return s?s.catch(console.error):_c(e).catch(console.error),t.fid}/**
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
 */async function xT(n,e=!1){const t=n;return await AT(t),(await _c(t,e)).token}async function AT(n){const{registrationPromise:e}=await yc(n);e&&await e}/**
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
 */function RT(n){if(!n||!n.options)throw qo("App Configuration");if(!n.name)throw qo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw qo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function qo(n){return xn.create("missing-app-config-values",{valueName:n})}/**
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
 */const vm="installations",ST="installations-internal",NT=n=>{const e=n.getProvider("app").getImmediate(),t=RT(e),s=rn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},CT=n=>{const e=n.getProvider("app").getImmediate(),t=rn(e,vm).getImmediate();return{getId:()=>IT(t),getToken:r=>xT(t,r)}};function kT(){rt(new Ze(vm,NT,"PUBLIC")),rt(new Ze(ST,CT,"PRIVATE"))}kT();He(rm,pc);He(rm,pc,"esm2020");/**
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
 */const Ni="analytics",PT="firebase_id",DT="origin",VT=60*1e3,jT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wc="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ue=new Di("@firebase/analytics");/**
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
 */const OT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qe=new Sn("analytics","Analytics",OT);/**
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
 */function MT(n){if(!n.startsWith(wc)){const e=Qe.create("invalid-gtag-resource",{gtagURL:n});return Ue.warn(e.message),""}return n}function Em(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function LT(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function UT(n,e){const t=LT("firebase-js-sdk-policy",{createScriptURL:MT}),s=document.createElement("script"),r=`${wc}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function FT(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function BT(n,e,t,s,r,i){const a=s[r];try{if(a)await e[a];else{const h=(await Em(t)).find(d=>d.measurementId===r);h&&await e[h.appId]}}catch(c){Ue.error(c)}n("config",r,i)}async function qT(n,e,t,s,r){try{let i=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const c=await Em(t);for(const h of a){const d=c.find(g=>g.measurementId===h),m=d&&e[d.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",s,r||{})}catch(i){Ue.error(i)}}function $T(n,e,t,s){async function r(i,...a){try{if(i==="event"){const[c,h]=a;await qT(n,e,t,c,h)}else if(i==="config"){const[c,h]=a;await BT(n,e,t,s,c,h)}else if(i==="consent"){const[c,h]=a;n("consent",c,h)}else if(i==="get"){const[c,h,d]=a;n("get",c,h,d)}else if(i==="set"){const[c]=a;n("set",c)}else n(i,...a)}catch(c){Ue.error(c)}}return r}function HT(n,e,t,s,r){let i=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=$T(i,n,e,t),{gtagCore:i,wrappedGtag:window[r]}}function zT(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(wc)&&t.src.includes(n))return t;return null}/**
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
 */const GT=30,WT=1e3;class KT{constructor(e={},t=WT){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Tm=new KT;function QT(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function YT(n){var a;const{appId:e,apiKey:t}=n,s={method:"GET",headers:QT(t)},r=jT.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let c="";try{const h=await i.json();(a=h.error)!=null&&a.message&&(c=h.error.message)}catch{}throw Qe.create("config-fetch-failed",{httpStatus:i.status,responseMessage:c})}return i.json()}async function XT(n,e=Tm,t){const{appId:s,apiKey:r,measurementId:i}=n.options;if(!s)throw Qe.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Qe.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new eI;return setTimeout(async()=>{c.abort()},VT),Im({appId:s,apiKey:r,measurementId:i},a,c,e)}async function Im(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=Tm){var c;const{appId:i,measurementId:a}=n;try{await JT(s,e)}catch(h){if(a)return Ue.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:i,measurementId:a};throw h}try{const h=await YT(n);return r.deleteThrottleMetadata(i),h}catch(h){const d=h;if(!ZT(d)){if(r.deleteThrottleMetadata(i),a)return Ue.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:i,measurementId:a};throw h}const m=Number((c=d==null?void 0:d.customData)==null?void 0:c.httpStatus)===503?Sl(t,r.intervalMillis,GT):Sl(t,r.intervalMillis),g={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return r.setThrottleMetadata(i,g),Ue.debug(`Calling attemptFetch again in ${m} millis`),Im(n,g,s,r)}}function JT(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s(Qe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ZT(n){if(!(n instanceof et)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class eI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tI(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const i=await e,a={...s,send_to:i};n("event",t,a)}}async function nI(n,e,t,s){if(s&&s.global){const r={};for(const i of Object.keys(t))r[`user_properties.${i}`]=t[i];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
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
 */async function sI(){if(Vh())try{await jh()}catch(n){return Ue.warn(Qe.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ue.warn(Qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function rI(n,e,t,s,r,i,a){const c=XT(n);c.then(_=>{t[_.measurementId]=_.appId,n.options.measurementId&&_.measurementId!==n.options.measurementId&&Ue.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Ue.error(_)),e.push(c);const h=sI().then(_=>{if(_)return s.getId()}),[d,m]=await Promise.all([c,h]);zT(i)||UT(i,d.measurementId),r("js",new Date);const g=(a==null?void 0:a.config)??{};return g[DT]="firebase",g.update=!0,m!=null&&(g[PT]=m),r("config",d.measurementId,g),d.measurementId}/**
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
 */class iI{constructor(e){this.app=e}_delete(){return delete ts[this.app.options.appId],Promise.resolve()}}let ts={},oh=[];const ah={};let $o="dataLayer",oI="gtag",ch,bc,lh=!1;function aI(){const n=[];if(Dh()&&n.push("This is a browser extension environment."),ty()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=Qe.create("invalid-analytics-context",{errorInfo:e});Ue.warn(t.message)}}function cI(n,e,t){aI();const s=n.options.appId;if(!s)throw Qe.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ue.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qe.create("no-api-key");if(ts[s]!=null)throw Qe.create("already-exists",{id:s});if(!lh){FT($o);const{wrappedGtag:i,gtagCore:a}=HT(ts,oh,ah,$o,oI);bc=i,ch=a,lh=!0}return ts[s]=rI(n,oh,ah,e,ch,$o,t),new iI(n)}function lI(n=Vi()){n=de(n);const e=rn(n,Ni);return e.isInitialized()?e.getImmediate():uI(n)}function uI(n,e={}){const t=rn(n,Ni);if(t.isInitialized()){const r=t.getImmediate();if(Yt(e,t.getOptions()))return r;throw Qe.create("already-initialized")}return t.initialize({options:e})}function hI(n,e,t){n=de(n),nI(bc,ts[n.app.options.appId],e,t).catch(s=>Ue.error(s))}function dI(n,e,t,s){n=de(n),tI(bc,ts[n.app.options.appId],e,t,s).catch(r=>Ue.error(r))}const uh="@firebase/analytics",hh="0.10.19";function fI(){rt(new Ze(Ni,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return cI(s,r,t)},"PUBLIC")),rt(new Ze("analytics-internal",n,"PRIVATE")),He(uh,hh),He(uh,hh,"esm2020");function n(e){try{const t=e.getProvider(Ni).getImmediate();return{logEvent:(s,r,i)=>dI(t,s,r,i),setUserProperties:(s,r)=>hI(t,s,r)}}catch(t){throw Qe.create("interop-component-reg-failed",{reason:t})}}}fI();/**
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
 */const xm="firebasestorage.googleapis.com",Am="storageBucket",mI=120*1e3,pI=600*1e3,gI=1e3;/**
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
 */class ge extends et{constructor(e,t,s=0){super(Ho(e),`Firebase Storage: ${t} (${Ho(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ge.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ho(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var fe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(fe||(fe={}));function Ho(n){return"storage/"+n}function vc(){const n="An unknown error occurred, please check the error payload for server response.";return new ge(fe.UNKNOWN,n)}function yI(n){return new ge(fe.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function _I(n){return new ge(fe.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wI(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ge(fe.UNAUTHENTICATED,n)}function bI(){return new ge(fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function vI(n){return new ge(fe.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Rm(){return new ge(fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Sm(){return new ge(fe.CANCELED,"User canceled the upload/download.")}function EI(n){return new ge(fe.INVALID_URL,"Invalid URL '"+n+"'.")}function TI(n){return new ge(fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function II(){return new ge(fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Am+"' property when initializing the app?")}function Nm(){return new ge(fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function xI(){return new ge(fe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function AI(){return new ge(fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function RI(n){return new ge(fe.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function va(n){return new ge(fe.INVALID_ARGUMENT,n)}function Cm(){return new ge(fe.APP_DELETED,"The Firebase app was deleted.")}function SI(n){return new ge(fe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Js(n,e){return new ge(fe.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Us(n){throw new ge(fe.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Ke{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Ke.makeFromUrl(e,t)}catch{return new Ke(e,"")}if(s.path==="")return s;throw TI(e)}static makeFromUrl(e,t){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+r+a,"i"),h={bucket:1,path:3};function d(O){O.path_=decodeURIComponent(O.path)}const m="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",A=new RegExp(`^https?://${g}/${m}/b/${r}/o${_}`,"i"),S={bucket:1,path:3},k=t===xm?"(?:storage.googleapis.com|storage.cloud.google.com)":t,N="([^?#]*)",$=new RegExp(`^https?://${k}/${r}/${N}`,"i"),D=[{regex:c,indices:h,postModify:i},{regex:A,indices:S,postModify:d},{regex:$,indices:{bucket:1,path:2},postModify:d}];for(let O=0;O<D.length;O++){const j=D[O],q=j.regex.exec(e);if(q){const v=q[j.indices.bucket];let y=q[j.indices.path];y||(y=""),s=new Ke(v,y),j.postModify(s);break}}if(s==null)throw EI(e);return s}}class NI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function CI(n,e,t){let s=1,r=null,i=null,a=!1,c=0;function h(){return c===2}let d=!1;function m(...N){d||(d=!0,e.apply(null,N))}function g(N){r=setTimeout(()=>{r=null,n(A,h())},N)}function _(){i&&clearTimeout(i)}function A(N,...$){if(d){_();return}if(N){_(),m.call(null,N,...$);return}if(h()||a){_(),m.call(null,N,...$);return}s<64&&(s*=2);let D;c===1?(c=2,D=0):D=(s+Math.random())*1e3,g(D)}let S=!1;function k(N){S||(S=!0,_(),!d&&(r!==null?(N||(c=2),clearTimeout(r),g(0)):N||(c=1)))}return g(0),i=setTimeout(()=>{a=!0,k(!0)},t),k}function kI(n){n(!1)}/**
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
 */function PI(n){return n!==void 0}function DI(n){return typeof n=="function"}function VI(n){return typeof n=="object"&&!Array.isArray(n)}function oo(n){return typeof n=="string"||n instanceof String}function dh(n){return Ec()&&n instanceof Blob}function Ec(){return typeof Blob<"u"}function fh(n,e,t,s){if(s<e)throw va(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw va(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Tr(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function km(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const r=e(s)+"="+e(n[s]);t=t+r+"&"}return t=t.slice(0,-1),t}var vn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(vn||(vn={}));/**
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
 */function Pm(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||r||i}/**
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
 */class jI{constructor(e,t,s,r,i,a,c,h,d,m,g,_=!0,A=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=g,this.retry=_,this.isUsingEmulator=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,k)=>{this.resolve_=S,this.reject_=k,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Kr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const h=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===vn.NO_ERROR,h=i.getStatus();if(!c||Pm(h,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===vn.ABORT;s(!1,new Kr(!1,null,m));return}const d=this.successCodes_.indexOf(h)!==-1;s(!0,new Kr(d,i))})},t=(s,r)=>{const i=this.resolve_,a=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const h=this.callback_(c,c.getResponse());PI(h)?i(h):i()}catch(h){a(h)}else if(c!==null){const h=vc();h.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,h)):a(h)}else if(r.canceled){const h=this.appDelete_?Cm():Sm();a(h)}else{const h=Rm();a(h)}};this.canceled_?t(!1,new Kr(!1,null,!0)):this.backoffId_=CI(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Kr{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function OI(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function MI(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function LI(n,e){e&&(n["X-Firebase-GMPID"]=e)}function UI(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function FI(n,e,t,s,r,i,a=!0,c=!1){const h=km(n.urlParams),d=n.url+h,m=Object.assign({},n.headers);return LI(m,e),OI(m,t),MI(m,i),UI(m,s),new jI(d,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,a,c)}/**
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
 */function BI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function qI(...n){const e=BI();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(Ec())return new Blob(n);throw new ge(fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function $I(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function HI(n){if(typeof atob>"u")throw RI("base-64");return atob(n)}/**
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
 */const dt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zo{constructor(e,t){this.data=e,this.contentType=t||null}}function zI(n,e){switch(n){case dt.RAW:return new zo(Dm(e));case dt.BASE64:case dt.BASE64URL:return new zo(Vm(n,e));case dt.DATA_URL:return new zo(WI(e),KI(e))}throw vc()}function Dm(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=s,a=n.charCodeAt(++t);s=65536|(i&1023)<<10|a&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function GI(n){let e;try{e=decodeURIComponent(n)}catch{throw Js(dt.DATA_URL,"Malformed data URL.")}return Dm(e)}function Vm(n,e){switch(n){case dt.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Js(n,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case dt.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Js(n,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=HI(e)}catch(r){throw r.message.includes("polyfill")?r:Js(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}class jm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Js(dt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=QI(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function WI(n){const e=new jm(n);return e.base64?Vm(dt.BASE64,e.rest):GI(e.rest)}function KI(n){return new jm(n).contentType}function QI(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class qt{constructor(e,t){let s=0,r="";dh(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(dh(this.data_)){const s=this.data_,r=$I(s,e,t);return r===null?null:new qt(r)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new qt(s,!0)}}static getBlob(...e){if(Ec()){const t=e.map(s=>s instanceof qt?s.data_:s);return new qt(qI.apply(null,t))}else{const t=e.map(a=>oo(a)?zI(dt.RAW,a).data:a.data_);let s=0;t.forEach(a=>{s+=a.byteLength});const r=new Uint8Array(s);let i=0;return t.forEach(a=>{for(let c=0;c<a.length;c++)r[i++]=a[c]}),new qt(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Om(n){let e;try{e=JSON.parse(n)}catch{return null}return VI(e)?e:null}/**
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
 */function YI(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function XI(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function Mm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function JI(n,e){return e}class Me{constructor(e,t,s,r){this.server=e,this.local=t||e,this.writable=!!s,this.xform=r||JI}}let Qr=null;function ZI(n){return!oo(n)||n.length<2?n:Mm(n)}function Lm(){if(Qr)return Qr;const n=[];n.push(new Me("bucket")),n.push(new Me("generation")),n.push(new Me("metageneration")),n.push(new Me("name","fullPath",!0));function e(i,a){return ZI(a)}const t=new Me("name");t.xform=e,n.push(t);function s(i,a){return a!==void 0?Number(a):a}const r=new Me("size");return r.xform=s,n.push(r),n.push(new Me("timeCreated")),n.push(new Me("updated")),n.push(new Me("md5Hash",null,!0)),n.push(new Me("cacheControl",null,!0)),n.push(new Me("contentDisposition",null,!0)),n.push(new Me("contentEncoding",null,!0)),n.push(new Me("contentLanguage",null,!0)),n.push(new Me("contentType",null,!0)),n.push(new Me("metadata","customMetadata",!0)),Qr=n,Qr}function ex(n,e){function t(){const s=n.bucket,r=n.fullPath,i=new Ke(s,r);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function tx(n,e,t){const s={};s.type="file";const r=t.length;for(let i=0;i<r;i++){const a=t[i];s[a.local]=a.xform(s,e[a.server])}return ex(s,n),s}function Um(n,e,t){const s=Om(e);return s===null?null:tx(n,s,t)}function nx(n,e,t,s){const r=Om(e);if(r===null||!oo(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const m=n.bucket,g=n.fullPath,_="/b/"+a(m)+"/o/"+a(g),A=Tr(_,t,s),S=km({alt:"media",token:d});return A+S})[0]}function Fm(n,e){const t={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class ys{constructor(e,t,s,r){this.url=e,this.method=t,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function At(n){if(!n)throw vc()}function Tc(n,e){function t(s,r){const i=Um(n,r,e);return At(i!==null),i}return t}function sx(n,e){function t(s,r){const i=Um(n,r,e);return At(i!==null),nx(i,r,n.host,n._protocol)}return t}function Ir(n){function e(t,s){let r;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?r=bI():r=wI():t.getStatus()===402?r=_I(n.bucket):t.getStatus()===403?r=vI(n.path):r=s,r.status=t.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Bm(n){const e=Ir(n);function t(s,r){let i=e(s,r);return s.getStatus()===404&&(i=yI(n.path)),i.serverResponse=r.serverResponse,i}return t}function rx(n,e,t){const s=e.fullServerUrl(),r=Tr(s,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new ys(r,i,Tc(n,t),a);return c.errorHandler=Bm(e),c}function ix(n,e,t){const s=e.fullServerUrl(),r=Tr(s,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new ys(r,i,sx(n,t),a);return c.errorHandler=Bm(e),c}function ox(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function qm(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=ox(null,e)),s}function ax(n,e,t,s,r){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let D="";for(let O=0;O<2;O++)D=D+Math.random().toString().slice(2);return D}const h=c();a["Content-Type"]="multipart/related; boundary="+h;const d=qm(e,s,r),m=Fm(d,t),g="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+h+`\r
Content-Type: `+d.contentType+`\r
\r
`,_=`\r
--`+h+"--",A=qt.getBlob(g,s,_);if(A===null)throw Nm();const S={name:d.fullPath},k=Tr(i,n.host,n._protocol),N="POST",$=n.maxUploadRetryTime,F=new ys(k,N,Tc(n,t),$);return F.urlParams=S,F.headers=a,F.body=A.uploadData(),F.errorHandler=Ir(e),F}class Ci{constructor(e,t,s,r){this.current=e,this.total=t,this.finalized=!!s,this.metadata=r||null}}function Ic(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{At(!1)}return At(!!t&&(e||["active"]).indexOf(t)!==-1),t}function cx(n,e,t,s,r){const i=e.bucketOnlyServerUrl(),a=qm(e,s,r),c={name:a.fullPath},h=Tr(i,n.host,n._protocol),d="POST",m={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},g=Fm(a,t),_=n.maxUploadRetryTime;function A(k){Ic(k);let N;try{N=k.getResponseHeader("X-Goog-Upload-URL")}catch{At(!1)}return At(oo(N)),N}const S=new ys(h,d,A,_);return S.urlParams=c,S.headers=m,S.body=g,S.errorHandler=Ir(e),S}function lx(n,e,t,s){const r={"X-Goog-Upload-Command":"query"};function i(d){const m=Ic(d,["active","final"]);let g=null;try{g=d.getResponseHeader("X-Goog-Upload-Size-Received")}catch{At(!1)}g||At(!1);const _=Number(g);return At(!isNaN(_)),new Ci(_,s.size(),m==="final")}const a="POST",c=n.maxUploadRetryTime,h=new ys(t,a,i,c);return h.headers=r,h.errorHandler=Ir(e),h}const mh=256*1024;function ux(n,e,t,s,r,i,a,c){const h=new Ci(0,0);if(a?(h.current=a.current,h.total=a.total):(h.current=0,h.total=s.size()),s.size()!==h.total)throw xI();const d=h.total-h.current;let m=d;r>0&&(m=Math.min(m,r));const g=h.current,_=g+m;let A="";m===0?A="finalize":d===m?A="upload, finalize":A="upload";const S={"X-Goog-Upload-Command":A,"X-Goog-Upload-Offset":`${h.current}`},k=s.slice(g,_);if(k===null)throw Nm();function N(O,j){const q=Ic(O,["active","final"]),v=h.current+m,y=s.size();let b;return q==="final"?b=Tc(e,i)(O,j):b=null,new Ci(v,y,q==="final",b)}const $="POST",F=e.maxUploadRetryTime,D=new ys(t,$,N,F);return D.headers=S,D.body=k.uploadData(),D.progressCallback=c||null,D.errorHandler=Ir(n),D}const Be={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Go(n){switch(n){case"running":case"pausing":case"canceling":return Be.RUNNING;case"paused":return Be.PAUSED;case"success":return Be.SUCCESS;case"canceled":return Be.CANCELED;case"error":return Be.ERROR;default:return Be.ERROR}}/**
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
 */class hx{constructor(e,t,s){if(DI(e)||t!=null||s!=null)this.next=e,this.error=t??void 0,this.complete=s??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function Bn(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class dx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=vn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=vn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=vn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,r,i){if(this.sent_)throw Us("cannot .send() more than once");if(sn(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Us("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Us("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Us("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Us("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class fx extends dx{initXhr(){this.xhr_.responseType="text"}}function Wn(){return new fx}/**
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
 */class mx{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=s,this._mappings=Lm(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(fe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Pm(r.status,[]))if(i)r=Rm();else{this.sleepTime=Math.max(this.sleepTime*2,gI),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(fe.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,s])=>{switch(this._state){case"running":e(t,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const s=cx(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Wn,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,s)=>{const r=lx(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,Wn,t,s);this._request=i,i.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=mh*this._chunkMultiplier,t=new Ci(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let a;try{a=ux(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(h){this._error=h,this._transition("error");return}const c=this._ref.storage._makeRequest(a,Wn,r,i,!1);this._request=c,c.getPromise().then(h=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(h.current),h.finalized?(this._metadata=h.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){mh*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const s=rx(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,Wn,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const s=ax(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Wn,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Sm(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Go(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,s,r){const i=new hx(t||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Go(this._state)){case Be.SUCCESS:Bn(this._resolve.bind(null,this.snapshot))();break;case Be.CANCELED:case Be.ERROR:const t=this._reject;Bn(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Go(this._state)){case Be.RUNNING:case Be.PAUSED:e.next&&Bn(e.next.bind(e,this.snapshot))();break;case Be.SUCCESS:e.complete&&Bn(e.complete.bind(e))();break;case Be.CANCELED:case Be.ERROR:e.error&&Bn(e.error.bind(e,this._error))();break;default:e.error&&Bn(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Rn{constructor(e,t){this._service=e,t instanceof Ke?this._location=t:this._location=Ke.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Rn(e,t)}get root(){const e=new Ke(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Mm(this._location.path)}get storage(){return this._service}get parent(){const e=YI(this._location.path);if(e===null)return null;const t=new Ke(this._location.bucket,e);return new Rn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw SI(e)}}function px(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new mx(n,new qt(e),t)}function gx(n){n._throwIfRoot("getDownloadURL");const e=ix(n.storage,n._location,Lm());return n.storage.makeRequestWithTokens(e,Wn).then(t=>{if(t===null)throw AI();return t})}function yx(n,e){const t=XI(n._location.path,e),s=new Ke(n._location.bucket,t);return new Rn(n.storage,s)}/**
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
 */function _x(n){return/^[A-Za-z]+:\/\//.test(n)}function wx(n,e){return new Rn(n,e)}function $m(n,e){if(n instanceof xc){const t=n;if(t._bucket==null)throw II();const s=new Rn(t,t._bucket);return e!=null?$m(s,e):s}else return e!==void 0?yx(n,e):n}function bx(n,e){if(e&&_x(e)){if(n instanceof xc)return wx(n,e);throw va("To use ref(service, url), the first argument must be a Storage instance.")}else return $m(n,e)}function ph(n,e){const t=e==null?void 0:e[Am];return t==null?null:Ke.makeFromBucketSpec(t,n)}function vx(n,e,t,s={}){n.host=`${e}:${t}`;const r=sn(e);r&&(Ta(`https://${n.host}/b`),Ia("Storage",!0)),n._isUsingEmulator=!0,n._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:Ph(i,n.app.options.projectId))}class xc{constructor(e,t,s,r,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=xm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mI,this._maxUploadRetryTime=pI,this._requests=new Set,r!=null?this._bucket=Ke.makeFromBucketSpec(r,this._host):this._bucket=ph(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ke.makeFromBucketSpec(this._url,e):this._bucket=ph(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Rn(this,e)}_makeRequest(e,t,s,r,i=!0){if(this._deleted)return new NI(Cm());{const a=FI(e,this._appId,s,r,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,r).getPromise()}}const gh="@firebase/storage",yh="0.14.0";/**
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
 */const Hm="storage";function Ex(n,e,t){return n=de(n),px(n,e,t)}function Tx(n){return n=de(n),gx(n)}function Ix(n,e){return n=de(n),bx(n,e)}function xx(n=Vi(),e){n=de(n);const s=rn(n,Hm).getImmediate({identifier:e}),r=Nh("storage");return r&&Ax(s,...r),s}function Ax(n,e,t,s={}){vx(n,e,t,s)}function Rx(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new xc(t,s,r,e,Nn)}function Sx(){rt(new Ze(Hm,Rx,"PUBLIC").setMultipleInstances(!0)),He(gh,yh,""),He(gh,yh,"esm2020")}Sx();const Nx={apiKey:"AIzaSyBkMktbTfBNIdhtBwCC_cRBEavKeuTyCGA",authDomain:"myschola-5ec1f.firebaseapp.com",projectId:"myschola-5ec1f",storageBucket:"myschola-5ec1f.appspot.com",messagingSenderId:"927860875256",appId:"1:927860875256:web:ce73f8eabd09cac6f3400d",measurementId:"G-XTC703H7RN"},ao=Uh(Nx),qe=Pb(ao),ae=kE(ao);lI(ao);const Cx=xx(ao);function kx(){const[n,e]=B.useState(""),[t,s]=B.useState(!1),[r,i]=B.useState(!0),a=ki(),c=_h();B.useEffect(()=>{const d=Pa(qe,async m=>{var g,_;if(m)try{console.log("Checking profile documents for UID:",m.uid);let A,S,k;try{[A,S,k]=await Promise.all([Le(Se(ae,"students",m.uid)),Le(Se(ae,"teachers",m.uid)),Le(Se(ae,"admins",m.uid))]),console.log("Student doc exists:",A.exists()),console.log("Teacher doc exists:",S.exists()),console.log("Admin doc exists:",k.exists())}catch(N){if(console.error("Firestore error:",N),N.code==="permission-denied"){console.error("PERMISSION DENIED - Check your Firestore security rules!"),e("Permission denied. Please check that Firestore security rules are published."),await qe.signOut(),i(!1);return}throw N}if(A.exists()){const N=((_=(g=c.state)==null?void 0:g.from)==null?void 0:_.pathname)||"/app/dashboard";console.log("Redirecting student to:",N),a(N,{replace:!0});return}if(S.exists()||k.exists()){console.log("Redirecting teacher/admin to /admin"),a("/admin",{replace:!0});return}console.warn("No student/teacher/admin profile found for UID:",m.uid),await qe.signOut(),e("Profile not found. Please contact your administrator.")}catch(A){console.error("Error checking student status:",A),A.code==="permission-denied"?e("Permission denied. Please check Firestore security rules."):e("Error checking student profile. Please try again.")}else console.log("No user logged in");i(!1)});return()=>d()},[a,c]);const h=async d=>{var A,S;d.preventDefault(),e(""),s(!0);const m=new FormData(d.currentTarget),g=m.get("email"),_=m.get("password");try{console.log("Attempting to sign in with email:",g);const N=(await ww(qe,g,_)).user;console.log("Sign in successful. User UID:",N.uid),console.log("Checking profile documents in Firestore...");let $,F,D;try{[$,F,D]=await Promise.all([Le(Se(ae,"students",N.uid)),Le(Se(ae,"teachers",N.uid)),Le(Se(ae,"admins",N.uid))]),console.log("Student document exists:",$.exists()),console.log("Teacher document exists:",F.exists()),console.log("Admin document exists:",D.exists())}catch(O){if(console.error("Firestore error:",O),O.code==="permission-denied"){console.error("PERMISSION DENIED - Check your Firestore security rules!"),e("Permission denied. Please check that Firestore security rules are published and allow authenticated users to read their own profile document."),s(!1),await qe.signOut();return}throw O}if($.exists()){console.log("Student document found. Redirecting to dashboard...");const O=((S=(A=c.state)==null?void 0:A.from)==null?void 0:S.pathname)||"/app/dashboard";a(O,{replace:!0});return}if(F.exists()||D.exists()){console.log("Teacher/admin document found. Redirecting to admin panel..."),a("/admin",{replace:!0});return}console.error("No student/teacher/admin profile found for UID:",N.uid),await qe.signOut(),e(`Profile not found. Please create a document in Firestore in one of: students, teachers, admins with Document ID: ${N.uid}`),s(!1);return}catch(k){console.error(k),k.code==="auth/invalid-email"?e("Please enter a valid email address."):k.code==="auth/user-not-found"?e("No account found with this email. Please contact your teacher to create an account."):k.code==="auth/wrong-password"?e("Incorrect password. Please try again."):k.code==="auth/invalid-credential"?e("Invalid email or password. Please try again."):e(k.message||"Failed to sign in. Please try again.")}finally{s(!1)}};return r?l.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),l.jsx("p",{className:"mt-4 text-gray-600",children:"Checking authentication..."})]})}):l.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[l.jsx("div",{className:"flex justify-center",children:l.jsxs(It,{to:"/",className:"flex items-center",children:[l.jsx(li,{className:"h-12 w-12 text-blue-600"}),l.jsx("span",{className:"ml-2 text-3xl font-bold text-gray-900",children:"MySchola"})]})}),l.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"}),l.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Students: Use the email and password provided by your teacher"})]}),l.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:l.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[l.jsxs("form",{className:"space-y-6",onSubmit:h,children:[n&&l.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative",role:"alert",children:l.jsx("span",{className:"block sm:inline",children:n})}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),l.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[l.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:l.jsx(Th,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),l.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"you@example.com"})]})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),l.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[l.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:l.jsx(Eh,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),l.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"********"})]})]}),l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center",children:[l.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),l.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),l.jsx("div",{className:"text-sm",children:l.jsx("a",{href:"#",className:"font-medium text-blue-600 hover:text-blue-500",children:"Forgot your password?"})})]}),l.jsx("div",{children:l.jsx("button",{type:"submit",disabled:t,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed",children:t?"Please wait...":"Sign in"})})]}),l.jsx("div",{className:"mt-6",children:l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"absolute inset-0 flex items-center",children:l.jsx("div",{className:"w-full border-t border-gray-300"})}),l.jsx("div",{className:"relative flex justify-center text-sm",children:l.jsx("span",{className:"px-2 bg-white text-gray-500",children:l.jsxs(It,{to:"/",className:"flex items-center hover:text-gray-900 transition",children:[l.jsx(Ea,{className:"h-4 w-4 mr-1"}),"Back to Home"]})})})]})})]})})]})}function Wo({children:n}){const[e,t]=B.useState(!0),[s,r]=B.useState(!1),[i,a]=B.useState(!1),c=_h();return B.useEffect(()=>{const h=Pa(qe,async d=>{if(d)try{(await Le(Se(ae,"students",d.uid))).exists()?(r(!0),a(!0)):(r(!1),a(!1))}catch(m){console.error("Error checking student status:",m),r(!1),a(!1)}else r(!1),a(!1);t(!1)});return()=>h()},[]),e?l.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),l.jsx("p",{className:"mt-4 text-gray-600",children:"Loading..."})]})}):!s||!i?l.jsx(yp,{to:"/login",state:{from:c},replace:!0}):n}const Px=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?Up:e.includes("english")||e.includes("literature")||e.includes("language")?Op:e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?Jp:e.includes("geography")||e.includes("geography")?eg:e.includes("history")?sg:e.includes("music")?fg:e.includes("art")||e.includes("design")?pg:e.includes("language")||e.includes("french")||e.includes("spanish")||e.includes("german")?ig:e.includes("computer")||e.includes("ict")||e.includes("it")?Pp:li},Dx=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?"bg-blue-50 border-blue-200 text-blue-700":e.includes("english")||e.includes("literature")||e.includes("language")?"bg-purple-50 border-purple-200 text-purple-700":e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?"bg-green-50 border-green-200 text-green-700":e.includes("geography")?"bg-cyan-50 border-cyan-200 text-cyan-700":e.includes("history")?"bg-amber-50 border-amber-200 text-amber-700":e.includes("music")?"bg-pink-50 border-pink-200 text-pink-700":e.includes("art")||e.includes("design")?"bg-rose-50 border-rose-200 text-rose-700":"bg-gray-50 border-gray-200 text-gray-700"};function Vx(){const n=ki(),[e,t]=B.useState(null),[s,r]=B.useState([]),[i,a]=B.useState(!0),[c,h]=B.useState(""),[d,m]=B.useState(null);B.useEffect(()=>{(async()=>{try{const A=qe.currentUser;if(!A){n("/login");return}const S=await Le(Se(ae,"students",A.uid));if(!S.exists()){h("Student profile not found"),a(!1);return}const k=S.data();if(t(k),console.log("Student data:",k),console.log("Student subjects array:",k.subjects),k.subjects&&k.subjects.length>0){const $=(await Promise.all(k.subjects.map(async F=>{try{const D=await Le(Se(ae,"subjects",F));return D.exists()?{id:D.id,...D.data()}:(console.warn(`Subject document not found for ID: ${F}`),null)}catch(D){return console.error(`Error fetching subject ${F}:`,D),null}}))).filter(F=>F!==null);console.log("Loaded subjects:",$),console.log("Expected subjects:",k.subjects),console.log("Missing subjects:",k.subjects.filter(F=>!$.some(D=>D.id===F))),r($),$.length!==k.subjects.length&&m({expected:k.subjects.length,loaded:$.length,missing:k.subjects.filter(F=>!$.some(D=>D.id===F))})}else console.log("No subjects array found in student data");a(!1)}catch(A){console.error("Error loading student data:",A),h("Failed to load dashboard data"),a(!1)}})()},[n]);const g=async()=>{try{await hd(qe),n("/login",{replace:!0})}catch(_){console.error("Error signing out:",_)}};return i?l.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",role:"status","aria-live":"polite",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto","aria-hidden":"true"}),l.jsx("p",{className:"mt-4 text-gray-600","aria-label":"Loading dashboard",children:"Loading your dashboard..."})]})}):c?l.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:l.jsxs("div",{className:"text-center",children:[l.jsx("p",{className:"text-red-600 mb-4",children:c}),l.jsx("button",{onClick:g,className:"text-blue-600 hover:text-blue-700 underline",children:"Sign out and try again"})]})}):l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx("header",{className:"bg-white shadow-sm",role:"banner",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx(ai,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),l.jsxs("div",{children:[l.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"MySchola Student Dashboard"}),l.jsxs("p",{className:"text-sm text-gray-500",children:["Hi, ",l.jsx("span",{className:"font-medium",children:(e==null?void 0:e.name)||"Student"})]})]})]}),l.jsxs("nav",{className:"flex items-center gap-3","aria-label":"Dashboard navigation",children:[l.jsx(It,{to:"/",className:"text-sm text-gray-600 hover:text-gray-900 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition","aria-label":"Return to homepage",children:"Back to site"}),l.jsxs("button",{onClick:g,className:"inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition","aria-label":"Sign out of your account",children:[l.jsx(cg,{className:"h-4 w-4","aria-hidden":"true"}),"Sign out"]})]})]})}),l.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[l.jsxs("div",{className:"mb-8",children:[l.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Your Subjects"}),l.jsx("p",{className:"text-gray-600",children:"Select a subject to join Zoom sessions, watch recordings, or complete homework."})]}),d&&l.jsxs("div",{className:"mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4",role:"alert","aria-live":"polite",children:[l.jsx("p",{className:"text-sm text-yellow-800 font-medium mb-1",children:"⚠️ Some subjects may not be loading correctly"}),l.jsxs("p",{className:"text-xs text-yellow-700",children:["Expected ",d.expected," subject(s), loaded ",d.loaded,". Please check the browser console for details."]})]}),s.length===0?l.jsxs("div",{className:"bg-white rounded-lg shadow p-8 text-center",role:"region","aria-labelledby":"no-subjects-heading",children:[l.jsx(ai,{className:"h-12 w-12 text-gray-400 mx-auto mb-4","aria-hidden":"true"}),l.jsx("h3",{id:"no-subjects-heading",className:"text-lg font-semibold text-gray-900 mb-2",children:"No Subjects Enrolled"}),l.jsx("p",{className:"text-gray-600 mb-2",children:"You're not enrolled in any subjects yet."}),l.jsx("p",{className:"text-sm text-gray-500",children:"Please contact your teacher to get enrolled."})]}):l.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",role:"list","aria-label":"Enrolled subjects",children:s.map(_=>{const A=Px(_.name),S=Dx(_.name);return l.jsxs("article",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",role:"listitem",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:`p-2 rounded-lg ${S}`,children:l.jsx(A,{className:"h-6 w-6","aria-hidden":"true"})}),l.jsx("h3",{className:"text-xl font-semibold text-gray-900 flex-1",children:_.name})]}),l.jsxs("div",{className:"space-y-3",children:[_.zoomLink&&l.jsxs("a",{href:_.zoomLink,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`Join Zoom session for ${_.name}`,children:[l.jsx(Qp,{className:"h-4 w-4","aria-hidden":"true"}),"Join Zoom"]}),l.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[l.jsxs(It,{to:`/app/subject/${_.id}/recordings`,className:"flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`View recordings for ${_.name}`,children:[l.jsx(Zs,{className:"h-4 w-4","aria-hidden":"true"}),"Recordings"]}),l.jsxs(It,{to:`/app/subject/${_.id}/homework`,className:"flex items-center justify-center gap-2 text-green-600 hover:text-green-700 px-4 py-2 border border-green-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition font-medium","aria-label":`View homework for ${_.name}`,children:[l.jsx(ci,{className:"h-4 w-4","aria-hidden":"true"}),"Homework"]})]})]})]},_.id)})})]})]})}function jx(){const{subjectId:n}=wh(),e=ki(),[t,s]=B.useState([]),[r,i]=B.useState([]),[a,c]=B.useState(null),[h,d]=B.useState(null),[m,g]=B.useState(!0),[_,A]=B.useState(""),[S,k]=B.useState(null);B.useEffect(()=>{n&&(async()=>{try{const O=qe.currentUser;if(!O){e("/login");return}const j=await Le(Se(ae,"students",O.uid));if(!j.exists()){A("Student profile not found"),g(!1);return}const q=j.data();d(q);const y=(q.subjectSettings||{})[n]||null;k(y);const b=Se(ae,"subjects",n),T=await Le(b);T.exists()&&c({id:n,...T.data()});let E;try{E=hr(Ht(ae,"recordings"),Zn("subjectId","==",n),qE("date","desc"))}catch(te){console.warn("OrderBy failed, using simple query:",te),E=hr(Ht(ae,"recordings"),Zn("subjectId","==",n))}const w=(await dr(E)).docs.map(te=>({id:te.id,...te.data()})).filter(te=>te.approvalStatus==="approved"||!te.approvalStatus).sort((te,_e)=>{var at,tt;const Vn=(at=te.date)!=null&&at.toDate?te.date.toDate():te.date?new Date(te.date):new Date(0);return((tt=_e.date)!=null&&tt.toDate?_e.date.toDate():_e.date?new Date(_e.date):new Date(0))-Vn});s(w),g(!1)}catch(O){console.error("Error loading recordings:",O),A("Failed to load recordings"),g(!1)}})()},[n,e]);const N=()=>{var O;return a?(((O=a.name)==null?void 0:O.toLowerCase())||"").includes("english"):!1};B.useEffect(()=>{if(!t.length){i([]);return}if(!S||!S.examBoard){i(t);return}const D=S.examBoard,O=S.tier,j=t.filter(q=>{const v=q.examBoard,y=q.tier;return v!==D?!1:N()?!0:y&&O?y===O:!y&&!O});i(j)},[t,S,a]);const $=()=>{const D={};return r.forEach(O=>{const j=O.examBoard||"Other",q=O.tier||(N()?"General":"Other"),v=`${j}_${q}`;D[v]||(D[v]={examBoard:j,tier:q,recordings:[]}),D[v].recordings.push(O)}),Object.values(D).sort((O,j)=>O.examBoard!==j.examBoard?O.examBoard==="AQA"?-1:j.examBoard==="AQA"?1:O.examBoard==="Edexcel"?-1:j.examBoard==="Edexcel"?1:O.examBoard.localeCompare(j.examBoard):O.tier==="Foundation"?-1:j.tier==="Foundation"?1:O.tier==="Higher"?-1:j.tier==="Higher"?1:O.tier.localeCompare(j.tier))},F=D=>D?(D.toDate?D.toDate():new Date(D)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"Date not available";return m?l.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),l.jsx("p",{className:"mt-4 text-gray-600",children:"Loading recordings..."})]})}):l.jsx("div",{className:"min-h-screen bg-gray-50",children:l.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[l.jsxs(It,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[l.jsx(Ea,{className:"h-4 w-4"}),"Back to Dashboard"]}),l.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[l.jsx(Zs,{className:"h-6 w-6 text-blue-600"}),l.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Recordings - ",(a==null?void 0:a.name)||"Subject"]})]}),l.jsx("p",{className:"text-gray-600",children:"Watch past lesson recordings for this subject."}),S&&l.jsxs("div",{className:"mt-3 flex items-center gap-2 text-sm",children:[l.jsx("span",{className:"text-gray-500",children:"Your settings:"}),l.jsxs("span",{className:"font-semibold text-blue-600",children:[S.examBoard,!N()&&S.tier&&` - ${S.tier}`]})]}),!S&&l.jsxs("div",{className:"mt-3 bg-yellow-50 border border-yellow-200 rounded-md p-3 flex items-start gap-2",children:[l.jsx($p,{className:"h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5"}),l.jsxs("div",{className:"text-sm text-yellow-800",children:[l.jsx("p",{className:"font-medium mb-1",children:"No exam board settings found"}),l.jsx("p",{children:"Please contact your administrator to set your exam board and tier preferences. Until then, all recordings are shown."})]})]})]}),_&&l.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6",children:_}),r.length===0?l.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[l.jsx(Zs,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),S?l.jsxs(l.Fragment,{children:[l.jsx("p",{className:"text-gray-600 font-medium mb-2",children:"No recordings available for your settings."}),l.jsxs("p",{className:"text-sm text-gray-500",children:["Your settings: ",l.jsxs("span",{className:"font-semibold",children:[S.examBoard,!N()&&S.tier?` - ${S.tier}`:""]})]}),l.jsx("p",{className:"text-sm text-gray-500 mt-2",children:t.length>0?`There are ${t.length} recording(s) available, but none match your exam board/tier settings.`:"No recordings have been added for this subject yet."})]}):l.jsxs(l.Fragment,{children:[l.jsx("p",{className:"text-gray-600",children:"No recordings available yet."}),l.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Check back later for new recordings."})]})]}):l.jsx("div",{className:"space-y-6",children:$().map((D,O)=>l.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",children:[l.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 px-6 py-4",children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx(ai,{className:"h-5 w-5 text-blue-600"}),l.jsxs("div",{children:[l.jsxs("h3",{className:"text-lg font-semibold text-gray-900",children:[D.examBoard,!N()&&D.tier&&l.jsxs("span",{className:"ml-2 text-base font-normal text-gray-600",children:["- ",D.tier]})]}),l.jsxs("p",{className:"text-sm text-gray-600",children:[D.recordings.length," recording",D.recordings.length!==1?"s":""]})]})]})}),l.jsx("div",{className:"p-6 space-y-4",children:D.recordings.map(j=>l.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:l.jsxs("div",{className:"flex items-start justify-between",children:[l.jsxs("div",{className:"flex-1",children:[l.jsx("h4",{className:"text-base font-semibold text-gray-900 mb-2",children:j.title}),l.jsx("p",{className:"text-sm text-gray-500",children:F(j.date)})]}),l.jsxs("a",{href:j.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"ml-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap",children:[l.jsx(wg,{className:"h-4 w-4"}),"Watch"]})]})},j.id))})]},O))})]})})}function Ox(){var O;const{subjectId:n}=wh(),[e,t]=B.useState([]),[s,r]=B.useState(null),[i,a]=B.useState(!0),[c,h]=B.useState(null),[d,m]=B.useState({}),[g,_]=B.useState(!1),[A,S]=B.useState({});B.useEffect(()=>{n&&(async()=>{try{const q=Se(ae,"subjects",n),v=await Le(q);v.exists()&&r({id:n,...v.data()});const y=hr(Ht(ae,"homeworks"),Zn("subjectId","==",n)),T=(await dr(y)).docs.map(I=>({id:I.id,...I.data()}));t(T);const E=qe.currentUser;if(E){const I=hr(Ht(ae,"submissions"),Zn("studentId","==",E.uid),Zn("homeworkId","in",T.map(_e=>_e.id))),w=await dr(I),te={};w.docs.forEach(_e=>{te[_e.data().homeworkId]=_e.data()}),S(te)}a(!1)}catch(q){console.error("Error loading homework:",q),a(!1)}})()},[n]);const k=(j,q)=>{m({...d,[j]:q})},N=(j,q)=>{let v=0;return j.questions.forEach((y,b)=>{var I,w;const T=(I=q[b])==null?void 0:I.toString().toLowerCase().trim(),E=(w=y.correctAnswer)==null?void 0:w.toString().toLowerCase().trim();T===E&&v++}),Math.round(v/j.questions.length*100)},$=async()=>{if(c){_(!0);try{const j=qe.currentUser;if(!j){alert("You must be logged in to submit homework");return}const q=N(c,d);await zE(Se(ae,"submissions",`${j.uid}_${c.id}`),{studentId:j.uid,homeworkId:c.id,subjectId:n,answers:d,score:q,submittedAt:Gn()}),S({...A,[c.id]:{score:q,submittedAt:new Date}}),alert(`Homework submitted! Your score: ${q}%`),h(null),m({})}catch(j){console.error("Error submitting homework:",j),alert("Failed to submit homework. Please try again.")}finally{_(!1)}}},F=j=>j?(j.toDate?j.toDate():new Date(j)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"No due date",D=j=>j?(j.toDate?j.toDate():new Date(j))<new Date:!1;return i?l.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),l.jsx("p",{className:"mt-4 text-gray-600",children:"Loading homework..."})]})}):l.jsx("div",{className:"min-h-screen bg-gray-50",children:l.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[l.jsxs(It,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[l.jsx(Ea,{className:"h-4 w-4"}),"Back to Dashboard"]}),l.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[l.jsx(ci,{className:"h-6 w-6 text-green-600"}),l.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Homework - ",(s==null?void 0:s.name)||"Subject"]})]}),l.jsx("p",{className:"text-gray-600",children:"Complete and submit your homework assignments."})]}),c?l.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[l.jsxs("div",{className:"flex items-center justify-between mb-6",children:[l.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:c.title}),l.jsx("button",{onClick:()=>{h(null),m({})},className:"text-gray-600 hover:text-gray-900",children:"Close"})]}),c.description&&l.jsx("p",{className:"text-gray-600 mb-6",children:c.description}),l.jsx("div",{className:"space-y-6 mb-6",children:(O=c.questions)==null?void 0:O.map((j,q)=>l.jsxs("div",{className:"border-b border-gray-200 pb-4",children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-900 mb-2",children:["Question ",q+1,": ",j.question]}),l.jsx("input",{type:"text",value:d[q]||"",onChange:v=>k(q,v.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Your answer"})]},q))}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{onClick:$,disabled:g,className:"bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50",children:g?"Submitting...":"Submit Homework"}),l.jsx("button",{onClick:()=>{h(null),m({})},className:"bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition",children:"Cancel"})]})]}):l.jsx("div",{className:"space-y-4",children:e.length===0?l.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[l.jsx(ci,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),l.jsx("p",{className:"text-gray-600",children:"No homework assignments available yet."})]}):e.map(j=>{const q=A[j.id],v=D(j.dueDate);return l.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:l.jsxs("div",{className:"flex items-start justify-between mb-4",children:[l.jsxs("div",{className:"flex-1",children:[l.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:j.title}),j.description&&l.jsx("p",{className:"text-gray-600 mb-2",children:j.description}),l.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:[l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx(vh,{className:"h-4 w-4"}),"Due: ",F(j.dueDate)]}),j.questions&&l.jsxs("span",{children:[j.questions.length," questions"]})]}),q&&l.jsxs("div",{className:"mt-3 flex items-center gap-2 text-green-600",children:[l.jsx(Yr,{className:"h-5 w-5"}),l.jsxs("span",{className:"font-semibold",children:["Last score: ",q.score,"%"]})]}),v&&!q&&l.jsx("div",{className:"mt-3 text-red-600 text-sm font-medium",children:"Overdue"})]}),l.jsx("button",{onClick:()=>h(j),className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:q?"Review/Resubmit":"Start Homework"})]})},j.id)})})]})})}function Mx(){const n=ki(),[e,t]=B.useState(!1),[s,r]=B.useState(!0),[i,a]=B.useState(!1),[c,h]=B.useState(!1),[d,m]=B.useState([]),[g,_]=B.useState(""),[A,S]=B.useState(null),[k,N]=B.useState("recording"),[$,F]=B.useState(""),[D,O]=B.useState(null),[j,q]=B.useState(null),[v,y]=B.useState(""),[b,T]=B.useState(""),[E,I]=B.useState(""),[w,te]=B.useState([]),[_e,Vn]=B.useState(""),[_s,at]=B.useState(""),[tt,xr]=B.useState(""),[ct,ln]=B.useState([{question:"",correctAnswer:""}]),[un,vt]=B.useState(!1),[hn,ue]=B.useState("");B.useEffect(()=>{const M=Pa(qe,async W=>{if(!W){n("/login",{replace:!0}),r(!1);return}try{const[ie,se]=await Promise.all([Le(Se(ae,"teachers",W.uid)),Le(Se(ae,"admins",W.uid))]),me=ie.exists(),ze=se.exists();me||ze?(t(!0),a(me),h(ze),ue("")):(ue("You are not authorised to access the admin panel."),n("/login",{replace:!0}))}catch(ie){console.error("Error checking admin/teacher status:",ie),ue("Failed to verify your permissions."),n("/login",{replace:!0})}finally{r(!1)}});return()=>M()},[n]);const ws=async()=>{try{await hd(qe),n("/login",{replace:!0})}catch(M){console.error("Error logging out:",M),ue("Failed to log out. Please try again.")}};B.useEffect(()=>{e&&(async()=>{try{const ie=(await dr(Ht(ae,"subjects"))).docs.map(se=>({id:se.id,...se.data()}));if(m(ie),ie.length>0){const se=ie[0];_(se.id),S(se)}}catch(W){console.error("Error loading subjects:",W)}})()},[e]),B.useEffect(()=>{(async()=>{if(k==="approve"&&e)try{const W=hr(Ht(ae,"recordings"),Zn("approvalStatus","==","pending")),ie=await dr(W),se=await Promise.all(ie.docs.map(async me=>{const ze=me.data();let On="Unknown";if(ze.subjectId)try{const Ye=await Le(me(ae,"subjects",ze.subjectId));Ye.exists()&&(On=Ye.data().name)}catch(Ye){console.error("Error fetching subject:",Ye)}return{id:me.id,...ze,subjectName:On}}));te(se)}catch(W){console.error("Error loading pending recordings:",W)}})()},[k,e]),B.useEffect(()=>{const M=d.find(W=>W.id===g);S(M||null),y(""),T("")},[g,d]);const bs=()=>{ln([...ct,{question:"",correctAnswer:""}])},Ar=M=>{ln(ct.filter((W,ie)=>ie!==M))},Rr=(M,W,ie)=>{const se=[...ct];se[M][W]=ie,ln(se)},jn=()=>{var W;return A?(((W=A.name)==null?void 0:W.toLowerCase())||"").includes("english"):!1},Sr=async M=>{if(M.preventDefault(),!g||!$||!v||!E){ue("Please fill in all required fields");return}if(!D){ue("Please select a video file (MP4)");return}if(!jn()&&!b){ue("Please select a tier (Foundation or Higher) for this subject");return}vt(!0),ue("");try{const W=`recordings/${g}/${Date.now()}_${D.name}`,ie=Ix(Cx,W),se=Ex(ie,D);await new Promise((ze,On)=>{se.on("state_changed",Ye=>{const lo=Math.round(Ye.bytesTransferred/Ye.totalBytes*100);q(lo)},Ye=>On(Ye),()=>ze())});const me=await Tx(se.snapshot.ref);await sh(Ht(ae,"recordings"),{subjectId:g,title:$,videoUrl:me,originalFileName:D.name,examBoard:v,tier:jn()?null:b,yearGroup:E,approvalStatus:"approved",date:Gn(),createdAt:Gn()}),ue("Recording added successfully! It will be visible to students after approval."),F(""),O(null),y(""),T(""),I(""),q(null)}catch(W){console.error("Error adding recording:",W),ue("Failed to add recording"),q(null)}finally{vt(!1)}},vs=async M=>{try{await nh(Se(ae,"recordings",M),{approvalStatus:"approved",approvedAt:Gn()}),te(w.filter(W=>W.id!==M)),ue("Recording approved successfully!"),setTimeout(()=>ue(""),3e3)}catch(W){console.error("Error approving recording:",W),ue("Failed to approve recording")}},Nr=async M=>{try{await nh(Se(ae,"recordings",M),{approvalStatus:"rejected",rejectedAt:Gn()}),te(w.filter(W=>W.id!==M)),ue("Recording rejected"),setTimeout(()=>ue(""),3e3)}catch(W){console.error("Error rejecting recording:",W),ue("Failed to reject recording")}},co=async M=>{if(M.preventDefault(),!g||!_e||ct.length===0){ue("Please fill in all required fields");return}const W=ct.filter(ie=>ie.question.trim()&&ie.correctAnswer.trim());if(W.length===0){ue("Please add at least one valid question");return}vt(!0),ue("");try{await sh(Ht(ae,"homeworks"),{subjectId:g,title:_e,description:_s,dueDate:tt?le.fromDate(new Date(tt)):null,questions:W,createdAt:Gn()}),ue("Homework added successfully!"),Vn(""),at(""),xr(""),ln([{question:"",correctAnswer:""}])}catch(ie){console.error("Error adding homework:",ie),ue("Failed to add homework")}finally{vt(!1)}};return s?l.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),l.jsx("p",{className:"mt-4 text-gray-600",children:"Checking permissions..."})]})}):e?l.jsx("div",{className:"min-h-screen bg-gray-50",children:l.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[l.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:c?"Admin Panel":"Teacher Panel"}),l.jsx("p",{className:"text-sm text-gray-500 mt-1",children:c?"Manage recordings, homework and approvals.":"Add recordings and homework for your students."})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("button",{onClick:()=>n("/app/dashboard"),className:"text-gray-600 hover:text-gray-900 underline text-sm",children:"Back to dashboard"}),l.jsx("button",{onClick:ws,className:"text-sm text-red-600 hover:text-red-700 underline",children:"Log out"})]})]})}),l.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[l.jsx("div",{className:"flex items-center justify-between mb-4",children:l.jsxs("div",{children:[l.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Your Subjects"}),l.jsx("p",{className:"text-sm text-gray-600",children:"Select a subject to manage recordings or homework."})]})}),d.length===0?l.jsx("div",{className:"text-gray-600 text-sm",children:"No subjects available."}):l.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:d.map(M=>l.jsxs("div",{className:`border rounded-lg p-4 transition hover:shadow-sm ${g===M.id?"border-blue-500 ring-1 ring-blue-200":"border-gray-200"}`,children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:M.name}),g===M.id&&l.jsx("span",{className:"text-xs text-blue-600 font-semibold",children:"Selected"})]}),l.jsx("p",{className:"text-sm text-gray-600 mb-3",children:M.description||"No description provided."}),l.jsxs("div",{className:"flex flex-wrap gap-2",children:[l.jsx("button",{onClick:()=>_(M.id),className:"px-3 py-2 text-sm rounded-md border border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 transition",children:"Manage"}),l.jsx("button",{onClick:()=>n(`/app/subject/${M.id}/recordings`),className:"px-3 py-2 text-sm rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition",children:"View as student"}),l.jsx("button",{onClick:()=>n(`/app/subject/${M.id}/homework`),className:"px-3 py-2 text-sm rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition",children:"Homework view"})]})]},M.id))})]}),l.jsxs("div",{className:"flex gap-2 mb-6 flex-wrap",children:[l.jsxs("button",{onClick:()=>N("recording"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${k==="recording"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[l.jsx(Zs,{className:"h-4 w-4"}),"Add Recording"]}),l.jsxs("button",{onClick:()=>N("homework"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${k==="homework"?"bg-green-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[l.jsx(ci,{className:"h-4 w-4"}),"Add Homework"]}),c&&l.jsxs("button",{onClick:()=>N("approve"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition relative ${k==="approve"?"bg-purple-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[l.jsx(Yr,{className:"h-4 w-4"}),"Approve Recordings",w.length>0&&l.jsx("span",{className:"ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5",children:w.length})]})]}),hn&&l.jsx("div",{className:`mb-6 p-4 rounded-lg ${hn.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:hn}),l.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Select Subject"}),l.jsx("select",{value:g,onChange:M=>_(M.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:d.map(M=>l.jsx("option",{value:M.id,children:M.name},M.id))})]}),k==="recording"&&l.jsxs("form",{onSubmit:Sr,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[l.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Recording"}),l.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Recordings will be pending approval before students can view them."}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),l.jsx("input",{type:"text",value:$,onChange:M=>F(M.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"e.g., Algebra Basics - Lesson 1",required:!0})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Exam Board *"}),l.jsxs("select",{value:v,onChange:M=>y(M.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[l.jsx("option",{value:"",children:"Select Exam Board"}),l.jsx("option",{value:"AQA",children:"AQA"}),l.jsx("option",{value:"Edexcel",children:"Edexcel"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Year Group *"}),l.jsxs("select",{value:E,onChange:M=>I(M.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[l.jsx("option",{value:"",children:"Select Year Group"}),l.jsx("option",{value:"Year 7",children:"Year 7"}),l.jsx("option",{value:"Year 8",children:"Year 8"}),l.jsx("option",{value:"Year 9",children:"Year 9"}),l.jsx("option",{value:"Year 10",children:"Year 10"}),l.jsx("option",{value:"Year 11",children:"Year 11"})]})]}),!jn()&&l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Tier (Maths & Sciences only) *"}),l.jsxs("select",{value:b,onChange:M=>T(M.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[l.jsx("option",{value:"",children:"Select Tier"}),l.jsx("option",{value:"Foundation",children:"Foundation"}),l.jsx("option",{value:"Higher",children:"Higher"})]})]}),jn()&&l.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:l.jsx("p",{className:"text-sm text-blue-800",children:"ℹ️ English subjects do not use Foundation/Higher tiers. Tier will be stored as not set."})}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Video file (MP4) *"}),l.jsx("input",{type:"file",accept:"video/mp4",onChange:M=>{var W;return O(((W=M.target.files)==null?void 0:W[0])||null)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0}),l.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"Please upload an MP4 video file from your device."}),j!==null&&l.jsxs("div",{className:"mt-2",children:[l.jsxs("div",{className:"flex justify-between text-xs text-gray-600 mb-1",children:[l.jsx("span",{children:"Uploading..."}),l.jsxs("span",{children:[j,"%"]})]}),l.jsx("div",{className:"w-full bg-gray-100 rounded-full h-2 overflow-hidden",children:l.jsx("div",{className:"h-2 bg-blue-600 transition-all",style:{width:`${j}%`}})})]})]})]}),l.jsxs("button",{type:"submit",disabled:un,className:"mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[l.jsx(Il,{className:"h-4 w-4"}),un?"Adding...":"Add Recording (Pending Approval)"]})]}),k==="approve"&&c&&l.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[l.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Approve Recordings"}),l.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Review and approve pending recordings. Only approved recordings will be visible to students."}),w.length===0?l.jsxs("div",{className:"text-center py-8",children:[l.jsx(Yr,{className:"h-12 w-12 text-green-500 mx-auto mb-4"}),l.jsx("p",{className:"text-gray-600",children:"No pending recordings to approve."})]}):l.jsx("div",{className:"space-y-4",children:w.map(M=>l.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:l.jsxs("div",{className:"flex items-start justify-between",children:[l.jsxs("div",{className:"flex-1",children:[l.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:M.title}),l.jsxs("div",{className:"space-y-1 text-sm text-gray-600",children:[l.jsxs("p",{children:[l.jsx("span",{className:"font-medium",children:"Subject:"})," ",M.subjectName]}),l.jsxs("p",{children:[l.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",M.examBoard]}),M.yearGroup&&l.jsxs("p",{children:[l.jsx("span",{className:"font-medium",children:"Year:"})," ",M.yearGroup]}),M.tier&&l.jsxs("p",{children:[l.jsx("span",{className:"font-medium",children:"Tier:"})," ",M.tier]}),M.date&&l.jsxs("p",{children:[l.jsx("span",{className:"font-medium",children:"Date:"})," ",M.date.toDate?M.date.toDate().toLocaleDateString("en-GB"):"N/A"]})]}),l.jsxs("a",{href:M.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm mt-2",children:[l.jsx(Zs,{className:"h-4 w-4"}),"Preview Video"]})]}),l.jsxs("div",{className:"flex gap-2 ml-4",children:[l.jsxs("button",{onClick:()=>vs(M.id),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2",children:[l.jsx(Yr,{className:"h-4 w-4"}),"Approve"]}),l.jsx("button",{onClick:()=>Nr(M.id),className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition",children:"Reject"})]})]})},M.id))})]}),k==="homework"&&l.jsxs("form",{onSubmit:co,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[l.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Homework"}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),l.jsx("input",{type:"text",value:_e,onChange:M=>Vn(M.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",required:!0})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Description"}),l.jsx("textarea",{value:_s,onChange:M=>at(M.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",rows:"3"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Due Date"}),l.jsx("input",{type:"datetime-local",value:tt,onChange:M=>xr(M.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Questions *"}),l.jsxs("button",{type:"button",onClick:bs,className:"text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1",children:[l.jsx(vg,{className:"h-4 w-4"}),"Add Question"]})]}),l.jsx("div",{className:"space-y-3",children:ct.map((M,W)=>l.jsxs("div",{className:"border border-gray-200 rounded-md p-4",children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsxs("span",{className:"text-sm font-medium text-gray-700",children:["Question ",W+1]}),ct.length>1&&l.jsx("button",{type:"button",onClick:()=>Ar(W),className:"text-red-600 hover:text-red-700",children:l.jsx(Ih,{className:"h-4 w-4"})})]}),l.jsx("input",{type:"text",value:M.question,onChange:ie=>Rr(W,"question",ie.target.value),placeholder:"Question text",className:"w-full px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"}),l.jsx("input",{type:"text",value:M.correctAnswer,onChange:ie=>Rr(W,"correctAnswer",ie.target.value),placeholder:"Correct answer",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"})]},W))})]})]}),l.jsxs("button",{type:"submit",disabled:un,className:"mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[l.jsx(Il,{className:"h-4 w-4"}),un?"Adding...":"Add Homework"]})]})]})}):null}function Lx(){return l.jsx(_p,{children:l.jsxs(wp,{children:[l.jsx(Fn,{path:"/",element:l.jsx(Mg,{})}),l.jsx(Fn,{path:"/login",element:l.jsx(kx,{})}),l.jsx(Fn,{path:"/admin",element:l.jsx(Mx,{})}),l.jsx(Fn,{path:"/app/dashboard",element:l.jsx(Wo,{children:l.jsx(Vx,{})})}),l.jsx(Fn,{path:"/app/subject/:subjectId/recordings",element:l.jsx(Wo,{children:l.jsx(jx,{})})}),l.jsx(Fn,{path:"/app/subject/:subjectId/homework",element:l.jsx(Wo,{children:l.jsx(Ox,{})})})]})})}Tp.createRoot(document.getElementById("root")).render(l.jsx(B.StrictMode,{children:l.jsx(Lx,{})}));
