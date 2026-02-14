import{r as Em,a as Im,b as P,u as nn,c as Xn,L as Xe,N as Tm,d as Gu,B as Am,R as Sm,e as tt}from"./react-vendor-w9dygoMj.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var io={exports:{}},Ns={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc;function Nm(){if(qc)return Ns;qc=1;var n=Em(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(l,h,f){var m,g={},x=null,A=null;f!==void 0&&(x=""+f),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(A=h.ref);for(m in h)s.call(h,m)&&!i.hasOwnProperty(m)&&(g[m]=h[m]);if(l&&l.defaultProps)for(m in h=l.defaultProps,h)g[m]===void 0&&(g[m]=h[m]);return{$$typeof:e,type:l,key:x,ref:A,props:g,_owner:r.current}}return Ns.Fragment=t,Ns.jsx=a,Ns.jsxs=a,Ns}var $c;function Rm(){return $c||($c=1,io.exports=Nm()),io.exports}var c=Rm(),Er={},Hc;function km(){if(Hc)return Er;Hc=1;var n=Im();return Er.createRoot=n.createRoot,Er.hydrateRoot=n.hydrateRoot,Er}var Cm=km();/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jm=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),zc=n=>{const e=jm(n);return e.charAt(0).toUpperCase()+e.slice(1)},Ku=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),Dm=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Vm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=P.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:r="",children:i,iconNode:a,...l},h)=>P.createElement("svg",{ref:h,...Vm,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:Ku("lucide",r),...!i&&!Dm(l)&&{"aria-hidden":"true"},...l},[...a.map(([f,m])=>P.createElement(f,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=(n,e)=>{const t=P.forwardRef(({className:s,...r},i)=>P.createElement(Om,{ref:i,iconNode:e,className:Ku(`lucide-${Pm(zc(n))}`,`lucide-${n}`,s),...r}));return t.displayName=zc(n),t};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Kt=X("arrow-left",Mm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ir=X("arrow-right",Lm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],Um=X("atom",Fm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],qm=X("award",Bm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Hm=X("book-marked",$m);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],$r=X("book-open",zm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Gm=X("calculator",Wm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],Qm=X("calendar-check",Km);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Jm=X("check",Ym);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Pr=X("circle-check-big",Xm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ep=X("circle-question-mark",Zm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Qu=X("clock",tp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Wc=X("download",np);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],rp=X("external-link",sp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],qs=X("file-text",ip);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],ap=X("flask-conical",op);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],lp=X("globe",cp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Hn=X("graduation-cap",up);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],dp=X("history",hp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],mp=X("languages",fp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Yu=X("lock",pp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],yp=X("log-out",gp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Ju=X("mail",_p);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],xp=X("menu",wp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Rs=X("message-circle",bp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Ep=X("music",vp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Tp=X("palette",Ip);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Sp=X("phone",Ap);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Rp=X("play",Np);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Gc=X("save",kp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Pp=X("star",Cp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Dp=X("target",jp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Op=X("trending-up",Vp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Lp=X("user-check",Mp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Kc=X("users",Fp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],$s=X("video",Up);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],qp=X("x",Bp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Hp=X("zoom-in",$p),zp="/assets/testimonial1-5gwMtUAO-5gwMtUAO.mp4",Wp="/assets/testimonial2-D0fw-lJA.mp4",Gp="/assets/testmonial3-CD7BqzK1.mp4",Kp="/assets/testimonial4-DLVnnJv5.mp4",Qp="/assets/testimonial5-CpY5IMND.mp4";function Yp(){typeof window<"u"&&window.fbq&&window.fbq("track","PageView")}function Qc(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booking",content_category:"GCSE Tuition"})}function Tr(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"WhatsApp Inquiry",content_category:"GCSE Tuition"})}function Jp(){typeof window<"u"&&window.fbq&&window.fbq("track","Purchase",{currency:"GBP"})}function Xp(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booked",content_category:"GCSE Tuition"})}function Zp(){typeof window<"u"&&window.fbq&&window.fbq("track","BOOK NOW",{value:0,currency:"GBP"})}const Yc="/assets/nottingham-university-logo-Bvc07xhs.png",Jc="/assets/King's_College_London_logo-XbRZheqd.svg",Xc="/assets/cambridge-64gH2uf-.jpg",Zc="/assets/Imperial-College-Logo-CiZ74UPN.png",el="/assets/warwick-DzXBUNN5.svg",eg="/assets/aqa-R9eUC-1Y.jpg",tg="/assets/edexcel-vector-logo-BkmWVkxU.png";function tl(){const n=nn(),e=Xn(),[t,s]=P.useState(!1),[r,i]=P.useState(null),[a,l]=P.useState(!1),[h,f]=P.useState(0),[m,g]=P.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),x=[{src:Qp,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:Kp,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:Gp,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:Wp,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:zp,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],A=x.length,k=Math.max(0,A-m),j=L=>L===1?"Improved by 1 grade":`Improved by ${L} grades`;P.useEffect(()=>{const L=()=>{const $=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;g($)};return L(),window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)},[]),P.useEffect(()=>{f(L=>Math.min(L,k))},[k]);const C=L=>{i(r===L?null:L)},M=()=>{f(L=>Math.max(L-1,0))},D=()=>{f(L=>Math.min(L+1,k))},U=()=>{const L="https://calendly.com/admin-myschola/30min",$=window.innerWidth<768;if(window.Calendly)window.Calendly.initPopupWidget({url:L,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0});else{const v=document.createElement("script");v.src="https://assets.calendly.com/assets/external/widget.js",v.async=!0,v.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:L,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0})},document.body.appendChild(v),setTimeout(()=>{window.Calendly||window.open(L,"_blank","noopener,noreferrer")},1e3)}},Y=()=>{Qc(),n("/booking",{replace:!1}),U()};return P.useEffect(()=>{if(e.pathname==="/booking"&&!a){Qc(),l(!0);const L=setTimeout(()=>{U()},300);return()=>clearTimeout(L)}else e.pathname!=="/booking"&&l(!1)},[e.pathname]),c.jsxs("div",{className:"min-h-screen bg-white",children:[c.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),c.jsx("div",{className:"w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md",children:"Join our February cohort as soon as possible — spaces are running out!"}),c.jsxs("nav",{className:"sticky top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center h-16",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx(Hn,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),c.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),c.jsx("div",{className:"hidden md:flex justify-center",children:c.jsxs("div",{className:"flex items-center space-x-8",children:[c.jsx("a",{href:"#home",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),c.jsx("a",{href:"#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),c.jsx("a",{href:"#subjects",className:"text-gray-700 hover:text-blue-600 transition",children:"Subjects"}),c.jsx("a",{href:"#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),c.jsx("a",{href:"#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"})]})}),c.jsxs("div",{className:"flex items-center justify-end",children:[c.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[c.jsx(Xe,{to:"/login",className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center","aria-label":"Log in",children:"Log In"}),c.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Tr,className:"bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2","aria-label":"Contact us on WhatsApp",children:[c.jsx(Rs,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})]}),c.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>s(!t),"aria-label":t?"Close menu":"Open menu","aria-expanded":t,"aria-controls":"mobile-menu",children:t?c.jsx(qp,{className:"h-6 w-6","aria-hidden":"true"}):c.jsx(xp,{className:"h-6 w-6","aria-hidden":"true"})})]})]})}),t&&c.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:c.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[c.jsx("a",{href:"#home",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),c.jsx("a",{href:"#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),c.jsx("a",{href:"#subjects",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Subjects"}),c.jsx("a",{href:"#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),c.jsx("a",{href:"#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),c.jsx(Xe,{to:"/login",className:"block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",role:"menuitem",children:"Log In"}),c.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Tr,className:"block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2","aria-label":"Contact us on WhatsApp",role:"menuitem",children:c.jsxs("span",{className:"inline-flex items-center gap-2",children:[c.jsx(Rs,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})})]})})]}),c.jsxs("main",{id:"main-content",children:[c.jsx("section",{id:"home",className:"pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Hero section",children:c.jsx("div",{className:"max-w-7xl mx-auto",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"relative inline-block px-2",children:c.jsxs("h1",{className:"relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6",children:["MySchola: #1 GCSE Tutoring Platform for",c.jsx("span",{className:"text-blue-600",children:" Years 9-11"})]})}),c.jsxs("p",{className:"text-lg sm:text-xl text-gray-600 mb-3 sm:mb-4 max-w-3xl mx-auto px-2",children:[c.jsx("strong",{children:"GCSE Maths, English & Science"})," via Zoom"]}),c.jsx("p",{className:"text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2",children:"Personalised lessons with one-to-one support from expert tutors. Your child only sees the teacher - no distractions, maximum focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons."}),c.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:c.jsxs("button",{type:"button",onClick:Y,className:"bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation","aria-label":"Book a free consultation",children:["Book Free Consultation",c.jsx(Ir,{className:"ml-2 h-5 w-5 flex-shrink-0","aria-hidden":"true"})]})})]})})}),c.jsx("section",{id:"how-it-works",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"how-it-works-heading",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsx("h2",{id:"how-it-works-heading",className:"text-4xl font-bold text-center mb-12",children:"How Our Lessons Work"}),c.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-3xl mx-auto",children:"A clear, supportive structure that keeps students confident and parents fully in the loop."}),c.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[c.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[c.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:c.jsx(Lp,{className:"h-8 w-8 text-white"})}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"One-to-One Support"}),c.jsx("p",{className:"text-gray-600",children:"Personalised lessons with one-to-one support. Your child only sees the teacher, ensuring privacy and focus."})]}),c.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[c.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:c.jsx(Hp,{className:"h-8 w-8 text-white"})}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Via Zoom"}),c.jsx("p",{className:"text-gray-600",children:"Convenient online lessons from the comfort of your home. High-quality video and interactive whiteboard. Webcam and microphone are optional - we use Zoom chat to check engagement, and parents can monitor participation for privacy."})]}),c.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[c.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:c.jsx(Yu,{className:"h-8 w-8 text-white"})}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Student Privacy"}),c.jsx("p",{className:"text-gray-600",children:"Your child only sees the teacher. Private, secure sessions designed for maximum learning focus. Webcam and mic are optional - we use Zoom chat for communication, and parents can check engagement for privacy reasons."})]}),c.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[c.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:c.jsx(Rs,{className:"h-8 w-8 text-white"})}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"24/7 Personalised Support"}),c.jsx("p",{className:"text-gray-600",children:"Students can ask questions anytime between lessons. Tutors respond with personalised explanations, feedback, and next-step guidance."})]}),c.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[c.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:c.jsx(Kc,{className:"h-8 w-8 text-white"})}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Parent Evenings"}),c.jsx("p",{className:"text-gray-600",children:"Regular parent evenings to review progress, share targets, and agree on the next steps for maximum grade improvement."})]}),c.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[c.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:c.jsx(qs,{className:"h-8 w-8 text-white"})}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Regular Exam-Style Tests"}),c.jsx("p",{className:"text-gray-600",children:"We set regular exams and topic checks to track progress, build exam technique, and close gaps quickly."})]})]})]})}),c.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"benefits-heading",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsx("h2",{id:"benefits-heading",className:"text-4xl font-bold text-center mb-4",children:"Benefits for Parents & Students"}),c.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Why thousands of families choose MySchola for GCSE success"}),c.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx(Op,{className:"h-6 w-6 text-green-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Grade Improvement"})]}),c.jsx("p",{className:"text-gray-600",children:"Students consistently improve by 2-3 grades with our proven teaching methods and personalised approach."})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx(qm,{className:"h-6 w-6 text-blue-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Confidence Building"})]}),c.jsx("p",{className:"text-gray-600",children:"Watch your child's confidence soar as they master difficult concepts and see their progress week by week."})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx(Dp,{className:"h-6 w-6 text-red-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Exam Focus"})]}),c.jsx("p",{className:"text-gray-600",children:"Targeted exam preparation with past papers, exam techniques, and strategies tailored to GCSE requirements."})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx(Qu,{className:"h-6 w-6 text-purple-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Flexible Scheduling"})]}),c.jsx("p",{className:"text-gray-600",children:"Choose times that work around your family's schedule. Evening and weekend slots available."})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx(Kc,{className:"h-6 w-6 text-orange-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Expert Tutors"})]}),c.jsx("p",{className:"text-gray-600",children:"Qualified UK teachers with DBS checks and proven track records of GCSE success."})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx($r,{className:"h-6 w-6 text-indigo-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Personalised Curriculum"})]}),c.jsx("p",{className:"text-gray-600",children:"Lessons tailored to your child's learning style, pace, and specific areas that need improvement."})]})]})]})}),c.jsx("section",{id:"testimonials",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"video-testimonials-heading",children:c.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[c.jsx("h2",{id:"video-testimonials-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Video Testimonials"}),c.jsx("p",{className:"text-gray-600 mb-12",children:"Short clips from students, with the subject and grade improvements below."}),c.jsxs("div",{className:"relative sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[c.jsx("button",{type:"button",onClick:M,disabled:h===0,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:c.jsx(Kt,{className:"h-5 w-5","aria-hidden":"true"})}),c.jsx("div",{className:"overflow-hidden sm:col-start-2",children:c.jsx("div",{className:"flex transition-transform duration-500 ease-out will-change-transform",style:{transform:`translateX(-${h*(100/m)}%)`},children:x.map((L,$)=>{const v=Math.floor(m/2),y=$===h+v;return c.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/m}%`},children:c.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${y?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[c.jsxs("video",{className:"w-full h-auto rounded-t-2xl",controls:!0,playsInline:!0,preload:"metadata",children:[c.jsx("source",{src:L.src,type:"video/mp4"}),"Your browser does not support the video tag."]}),c.jsxs("div",{className:"p-4 text-center",children:[c.jsx("p",{className:"text-lg font-semibold text-gray-900",children:L.name}),c.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[c.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:L.subjects.join(" / ")}),c.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:j(L.improvedBy)})]})]})]})},L.id)})})}),c.jsx("button",{type:"button",onClick:D,disabled:h>=k,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:c.jsx(Ir,{className:"h-5 w-5","aria-hidden":"true"})}),c.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[c.jsx("button",{type:"button",onClick:M,disabled:h===0,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:c.jsx(Kt,{className:"h-5 w-5","aria-hidden":"true"})}),c.jsx("button",{type:"button",onClick:D,disabled:h>=k,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:c.jsx(Ir,{className:"h-5 w-5","aria-hidden":"true"})})]})]})]})}),c.jsx("section",{id:"text-testimonials",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"testimonials-heading",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold text-center mb-4",children:"What Parents & Students Say"}),c.jsx("p",{className:"text-center text-gray-600 mb-12",children:"Real results from real families"}),c.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-12",children:[c.jsxs("div",{className:"bg-blue-600 text-white p-6 rounded-lg text-center",children:[c.jsx("div",{className:"text-4xl font-bold mb-2",children:"95%"}),c.jsx("div",{className:"text-blue-100",children:"Students improve grades"})]}),c.jsxs("div",{className:"bg-green-600 text-white p-6 rounded-lg text-center",children:[c.jsx("div",{className:"text-4xl font-bold mb-2",children:"2-3"}),c.jsx("div",{className:"text-green-100",children:"Grade improvement average"})]}),c.jsxs("div",{className:"bg-purple-600 text-white p-6 rounded-lg text-center",children:[c.jsx("div",{className:"text-4xl font-bold mb-2",children:"300+"}),c.jsx("div",{className:"text-purple-100",children:"Successful students"})]})]}),c.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{name:"Aisha K, Parent",text:"My son started the term lacking confidence in Maths and was sitting at a Grade 5. After weekly Zoom lessons with MySchola, his understanding improved steadily and he finished the term with a Grade 7.",rating:5,result:"Maths: Grade 5 → Grade 7"},{name:"Rahul P, Parent",text:"MySchola was patient and explained the Poetry Anthology texts in a way my daughter could finally understand. Her confidence grew each week and her English grade jumped from a 5 to an 8.",rating:5,result:"English Lit: Grade 5 → Grade 8"},{name:"Emma L., Parent",text:"The confidence my son gained was incredible. He went from hating Chemistry especially Organic Chemistry to loving it. His Chemistry grade improved from 5 to 8. Worth every penny!",rating:5,result:"Chemistry: Grade 5 → Grade 8"},{name:"Michael R., Student",text:"Going through past papers and custom exam style questions with Isam and Hamza made a huge difference. Physics finally started to make sense, and I learned how to approach exam questions properly.",rating:5,result:"Physics: Grade 6 → Grade 9"},{name:"Jasmin K., Parent",text:"As a working parent, the flexible scheduling in the evenings was a lifesaver. My daughter could do sessions that fit around school and activities. Highly recommend!",rating:4,result:"Maths: Grade 6 → Grade 8"},{name:"Emmanuel P., Parent",text:"The privacy of the sessions meant my son felt comfortable making mistakes and asking for help. His confidence has grown so much, and his grades show it!",rating:5,result:"English: Grade 5 → Grade 7"}].map((L,$)=>c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsx("div",{className:"flex mb-4",children:[...Array(L.rating)].map((v,y)=>c.jsx(Pp,{className:"h-5 w-5 text-yellow-400 fill-current","aria-hidden":"true"},y))}),c.jsxs("p",{className:"text-gray-600 mb-4 italic",children:['"',L.text,'"']}),c.jsxs("div",{className:"border-t pt-4",children:[c.jsxs("p",{className:"font-semibold text-gray-900",children:["— ",L.name]}),c.jsx("p",{className:"text-sm text-blue-600 font-medium mt-1",children:L.result})]})]},$))})]})}),c.jsx("section",{id:"subjects",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"subjects-heading",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsx("h2",{id:"subjects-heading",className:"text-4xl font-bold text-center mb-4",children:"Subjects We Offer"}),c.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Comprehensive GCSE support for Years 9-11"}),c.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{name:"Maths",description:"GCSE Maths (Foundation & Higher)"},{name:"Combined Science",description:"Trilogy and Synergy pathways"},{name:"Triple Science",description:"Biology, Chemistry, and Physics"},{name:"English Language",description:"Reading, writing, and language skills"},{name:"English Literature",description:"Poetry, prose, and drama analysis"}].map(L=>c.jsx("div",{className:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600",children:c.jsxs("div",{className:"flex items-start mb-2",children:[c.jsx(Jm,{className:"h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0","aria-hidden":"true"}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-semibold mb-1",children:L.name}),c.jsx("p",{className:"text-gray-600 text-sm",children:L.description})]})]})},L.name))})]})}),c.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-white","aria-labelledby":"universities-heading",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h2",{id:"universities-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Our tutors study at the UK's most prestigious universities"}),c.jsx("p",{className:"text-gray-600 max-w-3xl mx-auto",children:"Your education is everything. That's why we only hire the best in class. All of our tutors have stellar academic backgrounds and have first-hand experience with the rigorous exam process. Learn from the best to achieve your best."})]}),c.jsx("div",{className:"relative overflow-hidden",children:c.jsxs("div",{className:"flex animate-marquee",children:[[{src:Yc,alt:"University of Nottingham",name:"Nottingham"},{src:Jc,alt:"King's College London",name:"King's College"},{src:Xc,alt:"University of Cambridge",name:"Cambridge"},{src:Zc,alt:"Imperial College London",name:"Imperial"},{src:el,alt:"University of Warwick",name:"Warwick"}].map((L,$)=>c.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:c.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-40 sm:h-48 lg:h-56 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:c.jsx("img",{src:L.src,alt:L.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`first-${$}`)),[{src:Yc,alt:"University of Nottingham",name:"Nottingham"},{src:Jc,alt:"King's College London",name:"King's College"},{src:Xc,alt:"University of Cambridge",name:"Cambridge"},{src:Zc,alt:"Imperial College London",name:"Imperial"},{src:el,alt:"University of Warwick",name:"Warwick"}].map((L,$)=>c.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:c.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-40 sm:h-48 lg:h-56 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:c.jsx("img",{src:L.src,alt:L.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`second-${$}`))]})})]})}),c.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"exam-boards-heading",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h2",{id:"exam-boards-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Expert tuition for every exam board"}),c.jsx("p",{className:"text-gray-600 max-w-3xl mx-auto",children:"Unlock academic success with tailored support across every exam board. Our team of expert tutors knows the ins and outs of each curriculum, offering customized guidance that fits your exact syllabus."})]}),c.jsx("div",{className:"relative overflow-hidden",children:c.jsx("div",{className:"flex animate-marquee-reverse",children:[...Array(3)].map((L,$)=>[{src:eg,alt:"AQA",name:"AQA"},{src:tg,alt:"Edexcel",name:"Edexcel"}].map((v,y)=>c.jsx("div",{className:"flex-shrink-0 mx-6 sm:mx-8 lg:mx-10",children:c.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 h-44 sm:h-52 lg:h-60 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:c.jsx("img",{src:v.src,alt:v.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`set-${$}-${y}`)))})})]})}),c.jsx("section",{id:"book-call",className:"py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600","aria-labelledby":"book-call-heading",children:c.jsxs("div",{className:"max-w-4xl mx-auto text-center text-white",children:[c.jsx("h2",{id:"book-call-heading",className:"text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 px-2",children:"Ready to Start Your Child's GCSE Success Journey?"}),c.jsx("p",{className:"text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-2",children:"Book a free consultation to discuss your child's needs and see how we can help them achieve their goals."}),c.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:c.jsxs("button",{type:"button",onClick:Y,className:"bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 active:bg-gray-200 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation","aria-label":"Book a free consultation",children:["Book Free Consultation",c.jsx(Ir,{className:"ml-2 h-5 w-5 flex-shrink-0","aria-hidden":"true"})]})}),c.jsx("p",{className:"text-blue-100 text-sm mt-6",children:"No card required • Free 15-minute consultation"})]})}),c.jsx("section",{id:"faq",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"faq-heading",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h2",{id:"faq-heading",className:"text-4xl font-bold text-center mb-12",children:"Frequently Asked Questions"}),c.jsx("div",{className:"space-y-4",children:[{q:"How do the Zoom lessons work?",a:"Each lesson feels one-to-one via Zoom. Your child will see only the teacher, ensuring privacy and focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We use interactive whiteboards and screen sharing to make lessons engaging and effective. All sessions are recorded for your child to review later."},{q:"What equipment do we need?",a:"You just need a computer, tablet, or laptop with a stable internet connection. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We recommend using a desktop or laptop for the best experience with the interactive whiteboard."},{q:"How long are the sessions?",a:"All lessons are 60 minutes and this duration is fixed."},{q:"Can I choose the tutor?",a:"Yes! During your consultation, we'll discuss your child's learning style and match them with the best tutor. You can also request specific tutors based on availability."},{q:"What if my child misses a session?",a:"All sessions are recorded and uploaded. If your child misses a lesson, they can watch the recording at their convenience. You can ask any questions through our WhatsApp support, available 24/7."},{q:"Do you provide homework and practice materials?",a:"Absolutely! Each tutor provides tailored homework assignments, practice papers, and additional resources to reinforce learning between sessions. All materials are included in the lesson price."},{q:"How quickly will we see results?",a:"Most students see improvement within 4-6 weeks of regular sessions. However, every child is different. We track progress regularly and adjust our approach to ensure maximum effectiveness."},{q:"What age groups do you teach?",a:"We specialize in Years 9-11, preparing students for GCSEs. This includes both Foundation and Higher tier courses across all major GCSE subjects."}].map((L,$)=>c.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[c.jsxs("button",{className:"w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",onClick:()=>C($),"aria-expanded":r===$,"aria-controls":`faq-answer-${$}`,id:`faq-question-${$}`,children:[c.jsxs("span",{className:"font-semibold text-gray-900 flex items-center",children:[c.jsx(ep,{className:"h-5 w-5 text-blue-600 mr-2","aria-hidden":"true"}),L.q]}),c.jsx("span",{className:"text-blue-600","aria-hidden":"true","aria-label":r===$?"Collapse answer":"Expand answer",children:r===$?"−":"+"})]}),r===$&&c.jsx("div",{id:`faq-answer-${$}`,className:"px-6 pb-4 text-gray-600",role:"region","aria-labelledby":`faq-question-${$}`,children:L.a})]},$))})]})}),c.jsx("section",{id:"contact",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"contact-heading",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h2",{id:"contact-heading",className:"text-4xl font-bold text-center mb-12",children:"Get in Touch"}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsx(Ju,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Email Us"}),c.jsx("a",{href:"mailto:support@myschola.uk",className:"text-gray-600 hover:text-blue-600 transition",children:"support@myschola.uk"})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsx(Sp,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Call Us"}),c.jsx("a",{href:"tel:+447344193804",className:"text-gray-600 hover:text-blue-600 transition",children:"+44 7344 193804"}),c.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Mon-Fri 9am-6pm"})]})]})]})}),c.jsx("section",{id:"privacy-policy",className:"py-20 px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Privacy Policy"}),c.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Information We Collect"}),c.jsx("p",{children:"We collect information that you provide directly to us, including your name, email address, phone number, and information about your child's educational needs. We also collect information automatically when you use our services, such as session recordings and progress data."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. How We Use Your Information"}),c.jsx("p",{children:"We use the information we collect to provide, maintain, and improve our tutoring services, process your bookings, communicate with you, and ensure the safety and security of our platform."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Data Security"}),c.jsx("p",{children:"We implement appropriate technical and organizational measures to protect your personal information. All tutors are DBS checked, and all Zoom sessions are encrypted and secure."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Session Recordings"}),c.jsx("p",{children:"Lessons may be recorded for educational purposes and quality assurance. Recordings are stored securely and are accessible only to authorized personnel and the student's account."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Your Rights"}),c.jsx("p",{children:"You have the right to access, update, or delete your personal information at any time. You can also request a copy of your data or withdraw consent for data processing."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Children's Privacy"}),c.jsx("p",{children:"We take children's privacy seriously. We only collect information necessary to provide our services, and all data handling complies with UK GDPR and Children's Code requirements."})]}),c.jsx("div",{children:c.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})}),c.jsx("section",{id:"terms-of-service",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Terms of Service"}),c.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Service Agreement"}),c.jsx("p",{children:"By booking a lesson or consultation with MySchola, you agree to these terms of service. Our services include feel one-to-one tutoring delivered via Zoom for students in Years 9-11."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. Booking and Cancellation"}),c.jsx("p",{children:"Lessons must be booked in advance. Cancellation policies only apply to pay-as-you-go bookings. For bundle purchases, if your child misses a lesson, they can watch the recorded video and ask any questions through our WhatsApp support, available 24/7."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Payment Terms"}),c.jsx("p",{children:"Payment is required in advance for lesson packages. We accept payment via Stripe. Refunds for unused lessons in a package will be calculated on a pro-rata basis, minus any applicable fees."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Tutor Matching"}),c.jsx("p",{children:"We strive to match students with the most suitable tutor. However, if you're not satisfied after the first session, we offer a free replacement tutor or full refund."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Student Conduct"}),c.jsx("p",{children:"Students are expected to attend lessons punctually, be respectful to tutors, and engage actively in learning. Any inappropriate behavior may result in session termination without refund."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Technical Requirements"}),c.jsx("p",{children:"You are responsible for ensuring you have adequate internet connection and equipment for Zoom sessions. Note that webcam and microphone are optional - not needed. We use Zoom chat to check engagement, and parents can monitor participation for privacy reasons. We are not liable for technical issues on your end, though we'll do our best to accommodate."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"7. Guarantees"}),c.jsx("p",{children:"While we work hard to help students achieve their goals, we cannot guarantee specific grade improvements as results depend on multiple factors including student effort, attendance, and engagement."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"8. Intellectual Property"}),c.jsx("p",{children:"All teaching materials, resources, and session recordings are the intellectual property of MySchola and are for the personal use of the enrolled student only."})]}),c.jsx("div",{children:c.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})})]}),c.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center mb-4",children:[c.jsx(Hn,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),c.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),c.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 9-11 via Zoom."})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),c.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[c.jsx("li",{children:c.jsx("a",{href:"#home",className:"hover:text-white transition",children:"Home"})}),c.jsx("li",{children:c.jsx("a",{href:"#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),c.jsx("li",{children:c.jsx("a",{href:"#subjects",className:"hover:text-white transition",children:"Subjects"})}),c.jsx("li",{children:c.jsx("a",{href:"#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),c.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[c.jsx("li",{children:c.jsx("a",{href:"#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),c.jsx("li",{children:c.jsx("a",{href:"#terms-of-service",className:"hover:text-white transition",children:"Terms of Service"})}),c.jsx("li",{children:c.jsx("a",{href:"#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),c.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[c.jsx("li",{children:c.jsx("a",{href:"mailto:support@myschola.uk",className:"hover:text-white transition",children:"support@myschola.uk"})}),c.jsx("li",{children:c.jsx("a",{href:"tel:+447344193804",className:"hover:text-white transition",children:"+44 7344 193804"})}),c.jsx("li",{children:c.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Tr,className:"text-green-400 hover:text-green-300 transition inline-flex items-center gap-2",children:[c.jsx(Rs,{className:"h-4 w-4","aria-hidden":"true"}),"Contact Us on WhatsApp"]})}),c.jsx("li",{children:c.jsx("button",{type:"button",onClick:Y,className:"bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation text-sm sm:text-base","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),c.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:c.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 9-11."]})})]})}),c.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Tr,className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation","aria-label":"Contact us on WhatsApp",children:c.jsx(Rs,{className:"h-5 w-5 sm:h-6 sm:w-6","aria-hidden":"true"})})]})}const ng=()=>{};var nl={};/**
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
 */const Xu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},sg=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],l=n[t++],h=((r&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Zu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,l=a?n[r+1]:0,h=r+2<n.length,f=h?n[r+2]:0,m=i>>2,g=(i&3)<<4|l>>4;let x=(l&15)<<2|f>>6,A=f&63;h||(A=64,a||(x=64)),s.push(t[m],t[g],t[x],t[A])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const f=r<n.length?t[n.charAt(r)]:64;++r;const g=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||l==null||f==null||g==null)throw new rg;const x=i<<2|l>>4;if(s.push(x),f!==64){const A=l<<4&240|f>>2;if(s.push(A),g!==64){const k=f<<6&192|g;s.push(k)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ig=function(n){const e=Xu(n);return Zu.encodeByteArray(e,!0)},Hr=function(n){return ig(n).replace(/\./g,"")},eh=function(n){try{return Zu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function og(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ag=()=>og().__FIREBASE_DEFAULTS__,cg=()=>{if(typeof process>"u"||typeof nl>"u")return;const n=nl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&eh(n[1]);return e&&JSON.parse(e)},fi=()=>{try{return ng()||ag()||cg()||lg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},th=n=>{var e,t;return(t=(e=fi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},ug=n=>{const e=th(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},nh=()=>{var n;return(n=fi())==null?void 0:n.config},sh=n=>{var e;return(e=fi())==null?void 0:e[`_${n}`]};/**
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
 */class hg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Zn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function dg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Hr(JSON.stringify(t)),Hr(JSON.stringify(a)),""].join(".")}const Os={};function fg(){const n={prod:[],emulator:[]};for(const e of Object.keys(Os))Os[e]?n.emulator.push(e):n.prod.push(e);return n}function mg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let sl=!1;function ih(n,e){if(typeof window>"u"||typeof document>"u"||!Zn(window.location.host)||Os[n]===e||Os[n]||sl)return;Os[n]=e;function t(x){return`__firebase__banner__${x}`}const s="__firebase__banner",i=fg().prod.length>0;function a(){const x=document.getElementById(s);x&&x.remove()}function l(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function h(x,A){x.setAttribute("width","24"),x.setAttribute("id",A),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function f(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{sl=!0,a()},x}function m(x,A){x.setAttribute("id",A),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function g(){const x=mg(s),A=t("text"),k=document.getElementById(A)||document.createElement("span"),j=t("learnmore"),C=document.getElementById(j)||document.createElement("a"),M=t("preprendIcon"),D=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const U=x.element;l(U),m(C,j);const Y=f();h(D,M),U.append(D,k,C,Y),document.body.appendChild(U)}i?(k.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function gg(){var e;const n=(e=fi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wg(){const n=Fe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function xg(){return!gg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ah(){try{return typeof indexedDB=="object"}catch{return!1}}function ch(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function bg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const vg="FirebaseError";class ct extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=vg,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vn.prototype.create)}}class vn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Eg(i,s):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new ct(r,l,s)}}function Eg(n,e){return n.replace(Ig,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ig=/\{\$([^}]+)}/g;function Tg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Qt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(rl(i)&&rl(a)){if(!Qt(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function rl(n){return n!==null&&typeof n=="object"}/**
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
 */function nr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ks(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Cs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ag(n,e){const t=new Sg(n,e);return t.subscribe.bind(t)}class Sg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Ng(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=oo),r.error===void 0&&(r.error=oo),r.complete===void 0&&(r.complete=oo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ng(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function oo(){}/**
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
 */const Rg=1e3,kg=2,Cg=14400*1e3,Pg=.5;function il(n,e=Rg,t=kg){const s=e*Math.pow(t,n),r=Math.round(Pg*s*(Math.random()-.5)*2);return Math.min(Cg,s+r)}/**
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
 */function ye(n){return n&&n._delegate?n._delegate:n}class it{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const dn="[DEFAULT]";/**
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
 */class jg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new hg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vg(e))try{this.getOrInitializeService({instanceIdentifier:dn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dn){return this.instances.has(e)}getOptions(e=dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Dg(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=dn){return this.component?this.component.multipleInstances?e:dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dg(n){return n===dn?void 0:n}function Vg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Og{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const Mg={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Lg=Z.INFO,Fg={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Ug=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Fg[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mi{constructor(e){this.name=e,this._logLevel=Lg,this._logHandler=Ug,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Bg=(n,e)=>e.some(t=>n instanceof t);let ol,al;function qg(){return ol||(ol=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $g(){return al||(al=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lh=new WeakMap,To=new WeakMap,uh=new WeakMap,ao=new WeakMap,Xo=new WeakMap;function Hg(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t($t(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&lh.set(t,n)}).catch(()=>{}),Xo.set(e,n),e}function zg(n){if(To.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});To.set(n,e)}let Ao={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return To.get(n);if(e==="objectStoreNames")return n.objectStoreNames||uh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Wg(n){Ao=n(Ao)}function Gg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(co(this),e,...t);return uh.set(s,e.sort?e.sort():[e]),$t(s)}:$g().includes(n)?function(...e){return n.apply(co(this),e),$t(lh.get(this))}:function(...e){return $t(n.apply(co(this),e))}}function Kg(n){return typeof n=="function"?Gg(n):(n instanceof IDBTransaction&&zg(n),Bg(n,qg())?new Proxy(n,Ao):n)}function $t(n){if(n instanceof IDBRequest)return Hg(n);if(ao.has(n))return ao.get(n);const e=Kg(n);return e!==n&&(ao.set(n,e),Xo.set(e,n)),e}const co=n=>Xo.get(n);function hh(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),l=$t(a);return s&&a.addEventListener("upgradeneeded",h=>{s($t(a.result),h.oldVersion,h.newVersion,$t(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{i&&h.addEventListener("close",()=>i()),r&&h.addEventListener("versionchange",f=>r(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Qg=["get","getKey","getAll","getAllKeys","count"],Yg=["put","add","delete","clear"],lo=new Map;function cl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(lo.get(e))return lo.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Yg.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Qg.includes(t)))return;const i=async function(a,...l){const h=this.transaction(a,r?"readwrite":"readonly");let f=h.store;return s&&(f=f.index(l.shift())),(await Promise.all([f[t](...l),r&&h.done]))[0]};return lo.set(e,i),i}Wg(n=>({...n,get:(e,t,s)=>cl(e,t)||n.get(e,t,s),has:(e,t)=>!!cl(e,t)||n.has(e,t)}));/**
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
 */class Jg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Xg(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Xg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const So="@firebase/app",ll="0.14.6";/**
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
 */const St=new mi("@firebase/app"),Zg="@firebase/app-compat",ey="@firebase/analytics-compat",ty="@firebase/analytics",ny="@firebase/app-check-compat",sy="@firebase/app-check",ry="@firebase/auth",iy="@firebase/auth-compat",oy="@firebase/database",ay="@firebase/data-connect",cy="@firebase/database-compat",ly="@firebase/functions",uy="@firebase/functions-compat",hy="@firebase/installations",dy="@firebase/installations-compat",fy="@firebase/messaging",my="@firebase/messaging-compat",py="@firebase/performance",gy="@firebase/performance-compat",yy="@firebase/remote-config",_y="@firebase/remote-config-compat",wy="@firebase/storage",xy="@firebase/storage-compat",by="@firebase/firestore",vy="@firebase/ai",Ey="@firebase/firestore-compat",Iy="firebase",Ty="12.6.0";/**
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
 */const No="[DEFAULT]",Ay={[So]:"fire-core",[Zg]:"fire-core-compat",[ty]:"fire-analytics",[ey]:"fire-analytics-compat",[sy]:"fire-app-check",[ny]:"fire-app-check-compat",[ry]:"fire-auth",[iy]:"fire-auth-compat",[oy]:"fire-rtdb",[ay]:"fire-data-connect",[cy]:"fire-rtdb-compat",[ly]:"fire-fn",[uy]:"fire-fn-compat",[hy]:"fire-iid",[dy]:"fire-iid-compat",[fy]:"fire-fcm",[my]:"fire-fcm-compat",[py]:"fire-perf",[gy]:"fire-perf-compat",[yy]:"fire-rc",[_y]:"fire-rc-compat",[wy]:"fire-gcs",[xy]:"fire-gcs-compat",[by]:"fire-fst",[Ey]:"fire-fst-compat",[vy]:"fire-vertex","fire-js":"fire-js",[Iy]:"fire-js-all"};/**
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
 */const zr=new Map,Sy=new Map,Ro=new Map;function ul(n,e){try{n.container.addComponent(e)}catch(t){St.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xt(n){const e=n.name;if(Ro.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;Ro.set(e,n);for(const t of zr.values())ul(t,n);for(const t of Sy.values())ul(t,n);return!0}function En(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function nt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ny={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new vn("app","Firebase",Ny);/**
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
 */class Ry{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new it("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const es=Ty;function dh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:No,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Ht.create("bad-app-name",{appName:String(r)});if(t||(t=nh()),!t)throw Ht.create("no-options");const i=zr.get(r);if(i){if(Qt(t,i.options)&&Qt(s,i.config))return i;throw Ht.create("duplicate-app",{appName:r})}const a=new Og(r);for(const h of Ro.values())a.addComponent(h);const l=new Ry(t,s,a);return zr.set(r,l),l}function Zo(n=No){const e=zr.get(n);if(!e&&n===No&&nh())return dh();if(!e)throw Ht.create("no-app",{appName:n});return e}function Ze(n,e,t){let s=Ay[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(a.join(" "));return}xt(new it(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ky="firebase-heartbeat-database",Cy=1,Hs="firebase-heartbeat-store";let uo=null;function fh(){return uo||(uo=hh(ky,Cy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Hs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),uo}async function Py(n){try{const t=(await fh()).transaction(Hs),s=await t.objectStore(Hs).get(mh(n));return await t.done,s}catch(e){if(e instanceof ct)St.warn(e.message);else{const t=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(t.message)}}}async function hl(n,e){try{const s=(await fh()).transaction(Hs,"readwrite");await s.objectStore(Hs).put(e,mh(n)),await s.done}catch(t){if(t instanceof ct)St.warn(t.message);else{const s=Ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});St.warn(s.message)}}}function mh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jy=1024,Dy=30;class Vy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new My(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=dl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Dy){const a=Ly(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){St.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=dl(),{heartbeatsToSend:s,unsentEntries:r}=Oy(this._heartbeatsCache.heartbeats),i=Hr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return St.warn(t),""}}}function dl(){return new Date().toISOString().substring(0,10)}function Oy(n,e=jy){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),fl(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),fl(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class My{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ah()?ch().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Py(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return hl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return hl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fl(n){return Hr(JSON.stringify({version:2,heartbeats:n})).length}function Ly(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Fy(n){xt(new it("platform-logger",e=>new Jg(e),"PRIVATE")),xt(new it("heartbeat",e=>new Vy(e),"PRIVATE")),Ze(So,ll,n),Ze(So,ll,"esm2020"),Ze("fire-js","")}Fy("");var Uy="firebase",By="12.6.0";/**
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
 */Ze(Uy,By,"app");function ph(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qy=ph,gh=new vn("auth","Firebase",ph());/**
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
 */const Wr=new mi("@firebase/auth");function $y(n,...e){Wr.logLevel<=Z.WARN&&Wr.warn(`Auth (${es}): ${n}`,...e)}function jr(n,...e){Wr.logLevel<=Z.ERROR&&Wr.error(`Auth (${es}): ${n}`,...e)}/**
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
 */function ot(n,...e){throw ea(n,...e)}function mt(n,...e){return ea(n,...e)}function yh(n,e,t){const s={...qy(),[e]:t};return new vn("auth","Firebase",s).create(e,{appName:n.name})}function zt(n){return yh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ea(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return gh.create(n,...e)}function H(n,e,...t){if(!n)throw ea(e,...t)}function Et(n){const e="INTERNAL ASSERTION FAILED: "+n;throw jr(e),new Error(e)}function Nt(n,e){n||Et(e)}/**
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
 */function ko(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Hy(){return ml()==="http:"||ml()==="https:"}function ml(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function zy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hy()||oh()||"connection"in navigator)?navigator.onLine:!0}function Wy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class sr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nt(t>e,"Short delay should be less than long delay!"),this.isMobile=pg()||_g()}get(){return zy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ta(n,e){Nt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class _h{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Gy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ky=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Qy=new sr(3e4,6e4);function In(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function sn(n,e,t,s,r={}){return wh(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const l=nr({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:h,...i};return yg()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&Zn(n.emulatorConfig.host)&&(f.credentials="include"),_h.fetch()(await xh(n,n.config.apiHost,t,l),f)})}async function wh(n,e,t){n._canInitEmulator=!1;const s={...Gy,...e};try{const r=new Jy(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ar(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[h,f]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ar(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Ar(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Ar(n,"user-disabled",a);const m=s[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw yh(n,m,f);ot(n,m)}}catch(r){if(r instanceof ct)throw r;ot(n,"network-request-failed",{message:String(r)})}}async function pi(n,e,t,s,r={}){const i=await sn(n,e,t,s,r);return"mfaPendingCredential"in i&&ot(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function xh(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?ta(n.config,r):`${n.config.apiScheme}://${r}`;return Ky.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function Yy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Jy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(mt(this.auth,"network-request-failed")),Qy.get())})}}function Ar(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=mt(n,e,s);return r.customData._tokenResponse=t,r}function pl(n){return n!==void 0&&n.enterprise!==void 0}class Xy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Yy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Zy(n,e){return sn(n,"GET","/v2/recaptchaConfig",In(n,e))}/**
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
 */async function e_(n,e){return sn(n,"POST","/v1/accounts:delete",e)}async function Gr(n,e){return sn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ms(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function t_(n,e=!1){const t=ye(n),s=await t.getIdToken(e),r=na(s);H(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ms(ho(r.auth_time)),issuedAtTime:Ms(ho(r.iat)),expirationTime:Ms(ho(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ho(n){return Number(n)*1e3}function na(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return jr("JWT malformed, contained fewer than 3 sections"),null;try{const r=eh(t);return r?JSON.parse(r):(jr("Failed to decode base64 JWT payload"),null)}catch(r){return jr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function gl(n){const e=na(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zs(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ct&&n_(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function n_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class s_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Co{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ms(this.lastLoginAt),this.creationTime=Ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kr(n){var g;const e=n.auth,t=await n.getIdToken(),s=await zs(n,Gr(e,{idToken:t}));H(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(g=r.providerUserInfo)!=null&&g.length?bh(r.providerUserInfo):[],a=i_(n.providerData,i),l=n.isAnonymous,h=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),f=l?h:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Co(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function r_(n){const e=ye(n);await Kr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function i_(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function bh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function o_(n,e){const t=await wh(n,{},async()=>{const s=nr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await xh(n,r,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:s};return n.emulatorConfig&&Zn(n.emulatorConfig.host)&&(h.credentials="include"),_h.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function a_(n,e){return sn(n,"POST","/v2/accounts:revokeToken",In(n,e))}/**
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
 */class Ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=gl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await o_(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new Ln;return s&&(H(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ln,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
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
 */function Mt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class st{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new s_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Co(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await zs(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return t_(this,e)}reload(){return r_(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new st({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Kr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nt(this.auth.app))return Promise.reject(zt(this.auth));const e=await this.getIdToken();return await zs(this,e_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,h=t._redirectEventId??void 0,f=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:g,emailVerified:x,isAnonymous:A,providerData:k,stsTokenManager:j}=t;H(g&&j,e,"internal-error");const C=Ln.fromJSON(this.name,j);H(typeof g=="string",e,"internal-error"),Mt(s,e.name),Mt(r,e.name),H(typeof x=="boolean",e,"internal-error"),H(typeof A=="boolean",e,"internal-error"),Mt(i,e.name),Mt(a,e.name),Mt(l,e.name),Mt(h,e.name),Mt(f,e.name),Mt(m,e.name);const M=new st({uid:g,auth:e,email:r,emailVerified:x,displayName:s,isAnonymous:A,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:C,createdAt:f,lastLoginAt:m});return k&&Array.isArray(k)&&(M.providerData=k.map(D=>({...D}))),h&&(M._redirectEventId=h),M}static async _fromIdTokenResponse(e,t,s=!1){const r=new Ln;r.updateFromServerResponse(t);const i=new st({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Kr(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];H(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?bh(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Ln;l.updateFromIdToken(s);const h=new st({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Co(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(h,f),h}}/**
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
 */const yl=new Map;function It(n){Nt(n instanceof Function,"Expected a class definition");let e=yl.get(n);return e?(Nt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,yl.set(n,e),e)}/**
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
 */class vh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vh.type="NONE";const _l=vh;/**
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
 */function Dr(n,e,t){return`firebase:${n}:${e}:${t}`}class Fn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Dr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Dr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Gr(this.auth,{idToken:e}).catch(()=>{});return t?st._fromGetAccountInfoResponse(this.auth,t,e):null}return st._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Fn(It(_l),e,s);const r=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=r[0]||It(_l);const a=Dr(s,e.config.apiKey,e.name);let l=null;for(const f of t)try{const m=await f._get(a);if(m){let g;if(typeof m=="string"){const x=await Gr(e,{idToken:m}).catch(()=>{});if(!x)break;g=await st._fromGetAccountInfoResponse(e,x,m)}else g=st._fromJSON(e,m);f!==i&&(l=g),i=f;break}}catch{}const h=r.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!h.length?new Fn(i,e,s):(i=h[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async f=>{if(f!==i)try{await f._remove(a)}catch{}})),new Fn(i,e,s))}}/**
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
 */function wl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ah(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Eh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nh(e))return"Blackberry";if(Rh(e))return"Webos";if(Ih(e))return"Safari";if((e.includes("chrome/")||Th(e))&&!e.includes("edge/"))return"Chrome";if(Sh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Eh(n=Fe()){return/firefox\//i.test(n)}function Ih(n=Fe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Th(n=Fe()){return/crios\//i.test(n)}function Ah(n=Fe()){return/iemobile/i.test(n)}function Sh(n=Fe()){return/android/i.test(n)}function Nh(n=Fe()){return/blackberry/i.test(n)}function Rh(n=Fe()){return/webos/i.test(n)}function sa(n=Fe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function c_(n=Fe()){var e;return sa(n)&&!!((e=window.navigator)!=null&&e.standalone)}function l_(){return wg()&&document.documentMode===10}function kh(n=Fe()){return sa(n)||Sh(n)||Rh(n)||Nh(n)||/windows phone/i.test(n)||Ah(n)}/**
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
 */function Ch(n,e=[]){let t;switch(n){case"Browser":t=wl(Fe());break;case"Worker":t=`${wl(Fe())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${es}/${s}`}/**
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
 */class u_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,l)=>{try{const h=e(i);a(h)}catch(h){l(h)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function h_(n,e={}){return sn(n,"GET","/v2/passwordPolicy",In(n,e))}/**
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
 */const d_=6;class f_{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??d_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class m_{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xl(this),this.idTokenSubscription=new xl(this),this.beforeStateQueue=new u_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=It(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Fn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gr(this,{idToken:e}),s=await st._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(nt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===l)&&(h!=null&&h.user)&&(s=h.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Kr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nt(this.app))return Promise.reject(zt(this));const t=e?ye(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nt(this.app)?Promise.reject(zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nt(this.app)?Promise.reject(zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(It(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await h_(this),t=new f_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await a_(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&It(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await Fn.create(this,[It(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,s,r);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ch(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&$y(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ts(n){return ye(n)}class xl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ag(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let gi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function p_(n){gi=n}function Ph(n){return gi.loadJS(n)}function g_(){return gi.recaptchaEnterpriseScript}function y_(){return gi.gapiScript}function __(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class w_{constructor(){this.enterprise=new x_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class x_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const b_="recaptcha-enterprise",jh="NO_RECAPTCHA";class v_{constructor(e){this.type=b_,this.auth=ts(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{Zy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new Xy(h);return i.tenantId==null?i._agentRecaptchaConfig=f:i._tenantRecaptchaConfigs[i.tenantId]=f,a(f.siteKey)}}).catch(h=>{l(h)})})}function r(i,a,l){const h=window.grecaptcha;pl(h)?h.enterprise.ready(()=>{h.enterprise.execute(i,{action:e}).then(f=>{a(f)}).catch(()=>{a(jh)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new w_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(l=>{if(!t&&pl(window.grecaptcha))r(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=g_();h.length!==0&&(h+=l),Ph(h).then(()=>{r(l,i,a)}).catch(f=>{a(f)})}}).catch(l=>{a(l)})})}}async function bl(n,e,t,s=!1,r=!1){const i=new v_(n);let a;if(r)a=jh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const h=l.phoneEnrollmentInfo.phoneNumber,f=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:f,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const h=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function vl(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await bl(n,e,t,t==="getOobCode");return s(n,a)}else return s(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await bl(n,e,t,t==="getOobCode");return s(n,l)}else return Promise.reject(a)})}/**
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
 */function E_(n,e){const t=En(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Qt(i,e??{}))return r;ot(r,"already-initialized")}return t.initialize({options:e})}function I_(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(It);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function T_(n,e,t){const s=ts(n);H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Dh(e),{host:a,port:l}=A_(e),h=l===null?"":`:${l}`,f={url:`${i}//${a}${h}/`},m=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){H(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),H(Qt(f,s.config.emulator)&&Qt(m,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=f,s.emulatorConfig=m,s.settings.appVerificationDisabledForTesting=!0,Zn(a)?(rh(`${i}//${a}${h}`),ih("Auth",!0)):S_()}function Dh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function A_(n){const e=Dh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:El(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:El(a)}}}function El(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function S_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ra{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,t){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}}async function N_(n,e){return sn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function R_(n,e){return pi(n,"POST","/v1/accounts:signInWithPassword",In(n,e))}/**
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
 */async function k_(n,e){return pi(n,"POST","/v1/accounts:signInWithEmailLink",In(n,e))}async function C_(n,e){return pi(n,"POST","/v1/accounts:signInWithEmailLink",In(n,e))}/**
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
 */class Ws extends ra{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ws(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ws(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vl(e,t,"signInWithPassword",R_);case"emailLink":return k_(e,{email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vl(e,s,"signUpPassword",N_);case"emailLink":return C_(e,{idToken:t,email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Un(n,e){return pi(n,"POST","/v1/accounts:signInWithIdp",In(n,e))}/**
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
 */const P_="http://localhost";class gn extends ra{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ot("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const a=new gn(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Un(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Un(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Un(e,t)}buildRequest(){const e={requestUri:P_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=nr(t)}return e}}/**
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
 */function j_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function D_(n){const e=ks(Cs(n)).link,t=e?ks(Cs(e)).deep_link_id:null,s=ks(Cs(n)).deep_link_id;return(s?ks(Cs(s)).link:null)||s||t||e||n}class ia{constructor(e){const t=ks(Cs(e)),s=t.apiKey??null,r=t.oobCode??null,i=j_(t.mode??null);H(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=D_(e);try{return new ia(t)}catch{return null}}}/**
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
 */class ns{constructor(){this.providerId=ns.PROVIDER_ID}static credential(e,t){return Ws._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ia.parseLink(t);return H(s,"argument-error"),Ws._fromEmailAndCode(e,s.code,s.tenantId)}}ns.PROVIDER_ID="password";ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Vh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rr extends Vh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Lt extends rr{constructor(){super("facebook.com")}static credential(e){return gn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lt.PROVIDER_ID="facebook.com";/**
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
 */class Ft extends rr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ft.credential(t,s)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
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
 */class Ut extends rr{constructor(){super("github.com")}static credential(e){return gn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
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
 */class Bt extends rr{constructor(){super("twitter.com")}static credential(e,t){return gn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Bt.credential(t,s)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
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
 */class zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await st._fromIdTokenResponse(e,s,r),a=Il(s);return new zn({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Il(s);return new zn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Il(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Qr extends ct{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Qr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Qr(e,t,s,r)}}function Oh(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qr._fromErrorAndOperation(n,i,e,s):i})}async function V_(n,e,t=!1){const s=await zs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return zn._forOperation(n,"link",s)}/**
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
 */async function O_(n,e,t=!1){const{auth:s}=n;if(nt(s.app))return Promise.reject(zt(s));const r="reauthenticate";try{const i=await zs(n,Oh(s,r,e,n),t);H(i.idToken,s,"internal-error");const a=na(i.idToken);H(a,s,"internal-error");const{sub:l}=a;return H(n.uid===l,s,"user-mismatch"),zn._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ot(s,"user-mismatch"),i}}/**
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
 */async function Mh(n,e,t=!1){if(nt(n.app))return Promise.reject(zt(n));const s="signIn",r=await Oh(n,s,e),i=await zn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function M_(n,e){return Mh(ts(n),e)}/**
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
 */async function L_(n){const e=ts(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function F_(n,e,t){return nt(n.app)?Promise.reject(zt(n)):M_(ye(n),ns.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&L_(n),s})}function U_(n,e,t,s){return ye(n).onIdTokenChanged(e,t,s)}function B_(n,e,t){return ye(n).beforeAuthStateChanged(e,t)}function yi(n,e,t,s){return ye(n).onAuthStateChanged(e,t,s)}function q_(n){return ye(n).signOut()}const Yr="__sak";/**
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
 */class Lh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yr,"1"),this.storage.removeItem(Yr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $_=1e3,H_=10;class Fh extends Lh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);l_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,H_):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},$_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fh.type="LOCAL";const z_=Fh;/**
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
 */class Uh extends Lh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Uh.type="SESSION";const Bh=Uh;/**
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
 */function W_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _i{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new _i(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(a).map(async f=>f(t.origin,i)),h=await W_(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_i.receivers=[];/**
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
 */function oa(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class G_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((l,h)=>{const f=oa("",20);r.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(g){const x=g;if(x.data.eventId===f)switch(x.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(x.data.response);break;default:clearTimeout(m),clearTimeout(i),h(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function pt(){return window}function K_(n){pt().location.href=n}/**
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
 */function qh(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function Q_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Y_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function J_(){return qh()?self:null}/**
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
 */const $h="firebaseLocalStorageDb",X_=1,Jr="firebaseLocalStorage",Hh="fbase_key";class ir{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function wi(n,e){return n.transaction([Jr],e?"readwrite":"readonly").objectStore(Jr)}function Z_(){const n=indexedDB.deleteDatabase($h);return new ir(n).toPromise()}function Po(){const n=indexedDB.open($h,X_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Jr,{keyPath:Hh})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Jr)?e(s):(s.close(),await Z_(),e(await Po()))})})}async function Tl(n,e,t){const s=wi(n,!0).put({[Hh]:e,value:t});return new ir(s).toPromise()}async function ew(n,e){const t=wi(n,!1).get(e),s=await new ir(t).toPromise();return s===void 0?null:s.value}function Al(n,e){const t=wi(n,!0).delete(e);return new ir(t).toPromise()}const tw=800,nw=3;class zh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Po(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>nw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_i._getInstance(J_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await Q_(),!this.activeServiceWorker)return;this.sender=new G_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Y_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Po();return await Tl(e,Yr,"1"),await Al(e,Yr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Tl(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>ew(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Al(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=wi(r,!1).getAll();return new ir(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zh.type="LOCAL";const sw=zh;new sr(3e4,6e4);/**
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
 */function rw(n,e){return e?It(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class aa extends ra{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Un(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Un(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Un(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iw(n){return Mh(n.auth,new aa(n),n.bypassAuthState)}function ow(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),O_(t,new aa(n),n.bypassAuthState)}async function aw(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),V_(t,new aa(n),n.bypassAuthState)}/**
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
 */class Wh{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iw;case"linkViaPopup":case"linkViaRedirect":return aw;case"reauthViaPopup":case"reauthViaRedirect":return ow;default:ot(this.auth,"internal-error")}}resolve(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cw=new sr(2e3,1e4);class Mn extends Wh{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Nt(this.filter.length===1,"Popup operations only handle one event");const e=oa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cw.get())};e()}}Mn.currentPopupAction=null;/**
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
 */const lw="pendingRedirect",Vr=new Map;class uw extends Wh{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Vr.get(this.auth._key());if(!e){try{const s=await hw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Vr.set(this.auth._key(),e)}return this.bypassAuthState||Vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hw(n,e){const t=mw(e),s=fw(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function dw(n,e){Vr.set(n._key(),e)}function fw(n){return It(n._redirectPersistence)}function mw(n){return Dr(lw,n.config.apiKey,n.name)}async function pw(n,e,t=!1){if(nt(n.app))return Promise.reject(zt(n));const s=ts(n),r=rw(s,e),a=await new uw(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const gw=600*1e3;class yw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_w(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Gh(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(mt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sl(e))}saveEventToCache(e){this.cachedEventUids.add(Sl(e)),this.lastProcessedEventTime=Date.now()}}function Sl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Gh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _w(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gh(n);default:return!1}}/**
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
 */async function ww(n,e={}){return sn(n,"GET","/v1/projects",e)}/**
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
 */const xw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bw=/^https?/;async function vw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ww(n);for(const t of e)try{if(Ew(t))return}catch{}ot(n,"unauthorized-domain")}function Ew(n){const e=ko(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!bw.test(t))return!1;if(xw.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Iw=new sr(3e4,6e4);function Nl(){const n=pt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Tw(n){return new Promise((e,t)=>{var r,i,a;function s(){Nl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nl(),t(mt(n,"network-request-failed"))},timeout:Iw.get()})}if((i=(r=pt().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=pt().gapi)!=null&&a.load)s();else{const l=__("iframefcb");return pt()[l]=()=>{gapi.load?s():t(mt(n,"network-request-failed"))},Ph(`${y_()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw Or=null,e})}let Or=null;function Aw(n){return Or=Or||Tw(n),Or}/**
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
 */const Sw=new sr(5e3,15e3),Nw="__/auth/iframe",Rw="emulator/auth/iframe",kw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pw(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ta(e,Rw):`https://${n.config.authDomain}/${Nw}`,s={apiKey:e.apiKey,appName:n.name,v:es},r=Cw.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${nr(s).slice(1)}`}async function jw(n){const e=await Aw(n),t=pt().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:Pw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kw,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=mt(n,"network-request-failed"),l=pt().setTimeout(()=>{i(a)},Sw.get());function h(){pt().clearTimeout(l),r(s)}s.ping(h).then(h,()=>{i(a)})}))}/**
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
 */const Dw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vw=500,Ow=600,Mw="_blank",Lw="http://localhost";class Rl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fw(n,e,t,s=Vw,r=Ow){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const h={...Dw,width:s.toString(),height:r.toString(),top:i,left:a},f=Fe().toLowerCase();t&&(l=Th(f)?Mw:t),Eh(f)&&(e=e||Lw,h.scrollbars="yes");const m=Object.entries(h).reduce((x,[A,k])=>`${x}${A}=${k},`,"");if(c_(f)&&l!=="_self")return Uw(e||"",l),new Rl(null);const g=window.open(e||"",l,m);H(g,n,"popup-blocked");try{g.focus()}catch{}return new Rl(g)}function Uw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Bw="__/auth/handler",qw="emulator/auth/handler",$w=encodeURIComponent("fac");async function kl(n,e,t,s,r,i){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:es,eventId:r};if(e instanceof Vh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Tg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))a[m]=g}if(e instanceof rr){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const h=await n._getAppCheckToken(),f=h?`#${$w}=${encodeURIComponent(h)}`:"";return`${Hw(n)}?${nr(l).slice(1)}${f}`}function Hw({config:n}){return n.emulator?ta(n,qw):`https://${n.authDomain}/${Bw}`}/**
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
 */const fo="webStorageSupport";class zw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bh,this._completeRedirectFn=pw,this._overrideRedirectResult=dw}async _openPopup(e,t,s,r){var a;Nt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await kl(e,t,s,ko(),r);return Fw(e,i,oa())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await kl(e,t,s,ko(),r);return K_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Nt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await jw(e),s=new yw(e);return t.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fo,{type:fo},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[fo];i!==void 0&&t(!!i),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kh()||Ih()||sa()}}const Ww=zw;var Cl="@firebase/auth",Pl="1.11.1";/**
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
 */class Gw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Kw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qw(n){xt(new it("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=s.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ch(n)},f=new m_(s,r,i,h);return I_(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),xt(new it("auth-internal",e=>{const t=ts(e.getProvider("auth").getImmediate());return(s=>new Gw(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(Cl,Pl,Kw(n)),Ze(Cl,Pl,"esm2020")}/**
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
 */const Yw=300,Jw=sh("authIdTokenMaxAge")||Yw;let jl=null;const Xw=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Jw)return;const r=t==null?void 0:t.token;jl!==r&&(jl=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Zw(n=Zo()){const e=En(n,"auth");if(e.isInitialized())return e.getImmediate();const t=E_(n,{popupRedirectResolver:Ww,persistence:[sw,z_,Bh]}),s=sh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=Xw(i.toString());B_(t,a,()=>a(t.currentUser)),U_(t,l=>a(l))}}const r=th("auth");return r&&T_(t,`http://${r}`),t}function e0(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}p_({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=mt("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",e0().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qw("Browser");var Dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wt,Kh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function w(){}w.prototype=y.prototype,v.F=y.prototype,v.prototype=new w,v.prototype.constructor=v,v.D=function(E,b,I){for(var _=Array(arguments.length-2),W=2;W<arguments.length;W++)_[W-2]=arguments[W];return y.prototype[b].apply(E,_)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(v,y,w){w||(w=0);const E=Array(16);if(typeof y=="string")for(var b=0;b<16;++b)E[b]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(b=0;b<16;++b)E[b]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=v.g[0],w=v.g[1],b=v.g[2];let I=v.g[3],_;_=y+(I^w&(b^I))+E[0]+3614090360&4294967295,y=w+(_<<7&4294967295|_>>>25),_=I+(b^y&(w^b))+E[1]+3905402710&4294967295,I=y+(_<<12&4294967295|_>>>20),_=b+(w^I&(y^w))+E[2]+606105819&4294967295,b=I+(_<<17&4294967295|_>>>15),_=w+(y^b&(I^y))+E[3]+3250441966&4294967295,w=b+(_<<22&4294967295|_>>>10),_=y+(I^w&(b^I))+E[4]+4118548399&4294967295,y=w+(_<<7&4294967295|_>>>25),_=I+(b^y&(w^b))+E[5]+1200080426&4294967295,I=y+(_<<12&4294967295|_>>>20),_=b+(w^I&(y^w))+E[6]+2821735955&4294967295,b=I+(_<<17&4294967295|_>>>15),_=w+(y^b&(I^y))+E[7]+4249261313&4294967295,w=b+(_<<22&4294967295|_>>>10),_=y+(I^w&(b^I))+E[8]+1770035416&4294967295,y=w+(_<<7&4294967295|_>>>25),_=I+(b^y&(w^b))+E[9]+2336552879&4294967295,I=y+(_<<12&4294967295|_>>>20),_=b+(w^I&(y^w))+E[10]+4294925233&4294967295,b=I+(_<<17&4294967295|_>>>15),_=w+(y^b&(I^y))+E[11]+2304563134&4294967295,w=b+(_<<22&4294967295|_>>>10),_=y+(I^w&(b^I))+E[12]+1804603682&4294967295,y=w+(_<<7&4294967295|_>>>25),_=I+(b^y&(w^b))+E[13]+4254626195&4294967295,I=y+(_<<12&4294967295|_>>>20),_=b+(w^I&(y^w))+E[14]+2792965006&4294967295,b=I+(_<<17&4294967295|_>>>15),_=w+(y^b&(I^y))+E[15]+1236535329&4294967295,w=b+(_<<22&4294967295|_>>>10),_=y+(b^I&(w^b))+E[1]+4129170786&4294967295,y=w+(_<<5&4294967295|_>>>27),_=I+(w^b&(y^w))+E[6]+3225465664&4294967295,I=y+(_<<9&4294967295|_>>>23),_=b+(y^w&(I^y))+E[11]+643717713&4294967295,b=I+(_<<14&4294967295|_>>>18),_=w+(I^y&(b^I))+E[0]+3921069994&4294967295,w=b+(_<<20&4294967295|_>>>12),_=y+(b^I&(w^b))+E[5]+3593408605&4294967295,y=w+(_<<5&4294967295|_>>>27),_=I+(w^b&(y^w))+E[10]+38016083&4294967295,I=y+(_<<9&4294967295|_>>>23),_=b+(y^w&(I^y))+E[15]+3634488961&4294967295,b=I+(_<<14&4294967295|_>>>18),_=w+(I^y&(b^I))+E[4]+3889429448&4294967295,w=b+(_<<20&4294967295|_>>>12),_=y+(b^I&(w^b))+E[9]+568446438&4294967295,y=w+(_<<5&4294967295|_>>>27),_=I+(w^b&(y^w))+E[14]+3275163606&4294967295,I=y+(_<<9&4294967295|_>>>23),_=b+(y^w&(I^y))+E[3]+4107603335&4294967295,b=I+(_<<14&4294967295|_>>>18),_=w+(I^y&(b^I))+E[8]+1163531501&4294967295,w=b+(_<<20&4294967295|_>>>12),_=y+(b^I&(w^b))+E[13]+2850285829&4294967295,y=w+(_<<5&4294967295|_>>>27),_=I+(w^b&(y^w))+E[2]+4243563512&4294967295,I=y+(_<<9&4294967295|_>>>23),_=b+(y^w&(I^y))+E[7]+1735328473&4294967295,b=I+(_<<14&4294967295|_>>>18),_=w+(I^y&(b^I))+E[12]+2368359562&4294967295,w=b+(_<<20&4294967295|_>>>12),_=y+(w^b^I)+E[5]+4294588738&4294967295,y=w+(_<<4&4294967295|_>>>28),_=I+(y^w^b)+E[8]+2272392833&4294967295,I=y+(_<<11&4294967295|_>>>21),_=b+(I^y^w)+E[11]+1839030562&4294967295,b=I+(_<<16&4294967295|_>>>16),_=w+(b^I^y)+E[14]+4259657740&4294967295,w=b+(_<<23&4294967295|_>>>9),_=y+(w^b^I)+E[1]+2763975236&4294967295,y=w+(_<<4&4294967295|_>>>28),_=I+(y^w^b)+E[4]+1272893353&4294967295,I=y+(_<<11&4294967295|_>>>21),_=b+(I^y^w)+E[7]+4139469664&4294967295,b=I+(_<<16&4294967295|_>>>16),_=w+(b^I^y)+E[10]+3200236656&4294967295,w=b+(_<<23&4294967295|_>>>9),_=y+(w^b^I)+E[13]+681279174&4294967295,y=w+(_<<4&4294967295|_>>>28),_=I+(y^w^b)+E[0]+3936430074&4294967295,I=y+(_<<11&4294967295|_>>>21),_=b+(I^y^w)+E[3]+3572445317&4294967295,b=I+(_<<16&4294967295|_>>>16),_=w+(b^I^y)+E[6]+76029189&4294967295,w=b+(_<<23&4294967295|_>>>9),_=y+(w^b^I)+E[9]+3654602809&4294967295,y=w+(_<<4&4294967295|_>>>28),_=I+(y^w^b)+E[12]+3873151461&4294967295,I=y+(_<<11&4294967295|_>>>21),_=b+(I^y^w)+E[15]+530742520&4294967295,b=I+(_<<16&4294967295|_>>>16),_=w+(b^I^y)+E[2]+3299628645&4294967295,w=b+(_<<23&4294967295|_>>>9),_=y+(b^(w|~I))+E[0]+4096336452&4294967295,y=w+(_<<6&4294967295|_>>>26),_=I+(w^(y|~b))+E[7]+1126891415&4294967295,I=y+(_<<10&4294967295|_>>>22),_=b+(y^(I|~w))+E[14]+2878612391&4294967295,b=I+(_<<15&4294967295|_>>>17),_=w+(I^(b|~y))+E[5]+4237533241&4294967295,w=b+(_<<21&4294967295|_>>>11),_=y+(b^(w|~I))+E[12]+1700485571&4294967295,y=w+(_<<6&4294967295|_>>>26),_=I+(w^(y|~b))+E[3]+2399980690&4294967295,I=y+(_<<10&4294967295|_>>>22),_=b+(y^(I|~w))+E[10]+4293915773&4294967295,b=I+(_<<15&4294967295|_>>>17),_=w+(I^(b|~y))+E[1]+2240044497&4294967295,w=b+(_<<21&4294967295|_>>>11),_=y+(b^(w|~I))+E[8]+1873313359&4294967295,y=w+(_<<6&4294967295|_>>>26),_=I+(w^(y|~b))+E[15]+4264355552&4294967295,I=y+(_<<10&4294967295|_>>>22),_=b+(y^(I|~w))+E[6]+2734768916&4294967295,b=I+(_<<15&4294967295|_>>>17),_=w+(I^(b|~y))+E[13]+1309151649&4294967295,w=b+(_<<21&4294967295|_>>>11),_=y+(b^(w|~I))+E[4]+4149444226&4294967295,y=w+(_<<6&4294967295|_>>>26),_=I+(w^(y|~b))+E[11]+3174756917&4294967295,I=y+(_<<10&4294967295|_>>>22),_=b+(y^(I|~w))+E[2]+718787259&4294967295,b=I+(_<<15&4294967295|_>>>17),_=w+(I^(b|~y))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(b+(_<<21&4294967295|_>>>11))&4294967295,v.g[2]=v.g[2]+b&4294967295,v.g[3]=v.g[3]+I&4294967295}s.prototype.v=function(v,y){y===void 0&&(y=v.length);const w=y-this.blockSize,E=this.C;let b=this.h,I=0;for(;I<y;){if(b==0)for(;I<=w;)r(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<y;)if(E[b++]=v.charCodeAt(I++),b==this.blockSize){r(this,E),b=0;break}}else for(;I<y;)if(E[b++]=v[I++],b==this.blockSize){r(this,E),b=0;break}}this.h=b,this.o+=y},s.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var w=v.length-8;w<v.length;++w)v[w]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,w=0;w<4;++w)for(let E=0;E<32;E+=8)v[y++]=this.g[w]>>>E&255;return v};function i(v,y){var w=l;return Object.prototype.hasOwnProperty.call(w,v)?w[v]:w[v]=y(v)}function a(v,y){this.h=y;const w=[];let E=!0;for(let b=v.length-1;b>=0;b--){const I=v[b]|0;E&&I==y||(w[b]=I,E=!1)}this.g=w}var l={};function h(v){return-128<=v&&v<128?i(v,function(y){return new a([y|0],y<0?-1:0)}):new a([v|0],v<0?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return g;if(v<0)return C(f(-v));const y=[];let w=1;for(let E=0;v>=w;E++)y[E]=v/w|0,w*=4294967296;return new a(y,0)}function m(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return C(m(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=f(Math.pow(y,8));let E=g;for(let I=0;I<v.length;I+=8){var b=Math.min(8,v.length-I);const _=parseInt(v.substring(I,I+b),y);b<8?(b=f(Math.pow(y,b)),E=E.j(b).add(f(_))):(E=E.j(w),E=E.add(f(_)))}return E}var g=h(0),x=h(1),A=h(16777216);n=a.prototype,n.m=function(){if(j(this))return-C(this).m();let v=0,y=1;for(let w=0;w<this.g.length;w++){const E=this.i(w);v+=(E>=0?E:4294967296+E)*y,y*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(j(this))return"-"+C(this).toString(v);const y=f(Math.pow(v,6));var w=this;let E="";for(;;){const b=Y(w,y).g;w=M(w,b.j(y));let I=((w.g.length>0?w.g[0]:w.h)>>>0).toString(v);if(w=b,k(w))return I+E;for(;I.length<6;)I="0"+I;E=I+E}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function j(v){return v.h==-1}n.l=function(v){return v=M(this,v),j(v)?-1:k(v)?0:1};function C(v){const y=v.g.length,w=[];for(let E=0;E<y;E++)w[E]=~v.g[E];return new a(w,~v.h).add(x)}n.abs=function(){return j(this)?C(this):this},n.add=function(v){const y=Math.max(this.g.length,v.g.length),w=[];let E=0;for(let b=0;b<=y;b++){let I=E+(this.i(b)&65535)+(v.i(b)&65535),_=(I>>>16)+(this.i(b)>>>16)+(v.i(b)>>>16);E=_>>>16,I&=65535,_&=65535,w[b]=_<<16|I}return new a(w,w[w.length-1]&-2147483648?-1:0)};function M(v,y){return v.add(C(y))}n.j=function(v){if(k(this)||k(v))return g;if(j(this))return j(v)?C(this).j(C(v)):C(C(this).j(v));if(j(v))return C(this.j(C(v)));if(this.l(A)<0&&v.l(A)<0)return f(this.m()*v.m());const y=this.g.length+v.g.length,w=[];for(var E=0;E<2*y;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(let b=0;b<v.g.length;b++){const I=this.i(E)>>>16,_=this.i(E)&65535,W=v.i(b)>>>16,ne=v.i(b)&65535;w[2*E+2*b]+=_*ne,D(w,2*E+2*b),w[2*E+2*b+1]+=I*ne,D(w,2*E+2*b+1),w[2*E+2*b+1]+=_*W,D(w,2*E+2*b+1),w[2*E+2*b+2]+=I*W,D(w,2*E+2*b+2)}for(v=0;v<y;v++)w[v]=w[2*v+1]<<16|w[2*v];for(v=y;v<2*y;v++)w[v]=0;return new a(w,0)};function D(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function U(v,y){this.g=v,this.h=y}function Y(v,y){if(k(y))throw Error("division by zero");if(k(v))return new U(g,g);if(j(v))return y=Y(C(v),y),new U(C(y.g),C(y.h));if(j(y))return y=Y(v,C(y)),new U(C(y.g),y.h);if(v.g.length>30){if(j(v)||j(y))throw Error("slowDivide_ only works with positive integers.");for(var w=x,E=y;E.l(v)<=0;)w=L(w),E=L(E);var b=$(w,1),I=$(E,1);for(E=$(E,2),w=$(w,2);!k(E);){var _=I.add(E);_.l(v)<=0&&(b=b.add(w),I=_),E=$(E,1),w=$(w,1)}return y=M(v,b.j(y)),new U(b,y)}for(b=g;v.l(y)>=0;){for(w=Math.max(1,Math.floor(v.m()/y.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),I=f(w),_=I.j(y);j(_)||_.l(v)>0;)w-=E,I=f(w),_=I.j(y);k(I)&&(I=x),b=b.add(I),v=M(v,_)}return new U(b,v)}n.B=function(v){return Y(this,v).h},n.and=function(v){const y=Math.max(this.g.length,v.g.length),w=[];for(let E=0;E<y;E++)w[E]=this.i(E)&v.i(E);return new a(w,this.h&v.h)},n.or=function(v){const y=Math.max(this.g.length,v.g.length),w=[];for(let E=0;E<y;E++)w[E]=this.i(E)|v.i(E);return new a(w,this.h|v.h)},n.xor=function(v){const y=Math.max(this.g.length,v.g.length),w=[];for(let E=0;E<y;E++)w[E]=this.i(E)^v.i(E);return new a(w,this.h^v.h)};function L(v){const y=v.g.length+1,w=[];for(let E=0;E<y;E++)w[E]=v.i(E)<<1|v.i(E-1)>>>31;return new a(w,v.h)}function $(v,y){const w=y>>5;y%=32;const E=v.g.length-w,b=[];for(let I=0;I<E;I++)b[I]=y>0?v.i(I+w)>>>y|v.i(I+w+1)<<32-y:v.i(I+w);return new a(b,v.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Kh=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,Wt=a}).apply(typeof Dl<"u"?Dl:typeof self<"u"?self:typeof window<"u"?window:{});var Sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qh,Ps,Yh,Mr,jo,Jh,Xh,Zh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sr=="object"&&Sr];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function r(o,u){if(u)e:{var d=s;o=o.split(".");for(var p=0;p<o.length-1;p++){var T=o[p];if(!(T in d))break e;d=d[T]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(u){var d=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&d.push([p,u[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function h(o,u,d){return o.call.apply(o.bind,arguments)}function f(o,u,d){return f=h,f.apply(null,arguments)}function m(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function g(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(p,T,S){for(var V=Array(arguments.length-2),J=2;J<arguments.length;J++)V[J-2]=arguments[J];return u.prototype[T].apply(p,V)}}var x=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function A(o){const u=o.length;if(u>0){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function k(o,u){for(let p=1;p<arguments.length;p++){const T=arguments[p];var d=typeof T;if(d=d!="object"?d:T?Array.isArray(T)?"array":d:"null",d=="array"||d=="object"&&typeof T.length=="number"){d=o.length||0;const S=T.length||0;o.length=d+S;for(let V=0;V<S;V++)o[d+V]=T[V]}else o.push(T)}}class j{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function C(o){a.setTimeout(()=>{throw o},0)}function M(){var o=v;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class D{constructor(){this.h=this.g=null}add(u,d){const p=U.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var U=new j(()=>new Y,o=>o.reset());class Y{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let L,$=!1,v=new D,y=()=>{const o=Promise.resolve(void 0);L=()=>{o.then(w)}};function w(){for(var o;o=M();){try{o.h.call(o.g)}catch(d){C(d)}var u=U;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}$=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,u),a.removeEventListener("test",d,u)}catch{}return o})();function _(o){return/^[\s\xa0]*$/.test(o)}function W(o,u){b.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}g(W,b),W.prototype.init=function(o,u){const d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&W.Z.h.call(this)},W.prototype.h=function(){W.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),Ke=0;function Rn(o,u,d,p,T){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=T,this.key=++Ke,this.da=this.fa=!1}function Qe(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ue(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function $e(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function vt(o){const u={};for(const d in o)u[d]=o[d];return u}const ve="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lt(o,u){let d,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(d in p)o[d]=p[d];for(let S=0;S<ve.length;S++)d=ve[S],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function ut(o){this.src=o,this.g={},this.h=0}ut.prototype.add=function(o,u,d,p,T){const S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);const V=ls(o,u,p,T);return V>-1?(u=o[V],d||(u.fa=!1)):(u=new Rn(u,this.src,S,!!p,T),u.fa=d,o.push(u)),u};function cs(o,u){const d=u.type;if(d in o.g){var p=o.g[d],T=Array.prototype.indexOf.call(p,u,void 0),S;(S=T>=0)&&Array.prototype.splice.call(p,T,1),S&&(Qe(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function ls(o,u,d,p){for(let T=0;T<o.length;++T){const S=o[T];if(!S.da&&S.listener==u&&S.capture==!!d&&S.ha==p)return T}return-1}var us="closure_lm_"+(Math.random()*1e6|0),hs={};function B(o,u,d,p,T){if(Array.isArray(u)){for(let S=0;S<u.length;S++)B(o,u[S],d,p,T);return null}return d=Ye(d),o&&o[ne]?o.J(u,d,l(p)?!!p.capture:!1,T):G(o,u,d,!1,p,T)}function G(o,u,d,p,T,S){if(!u)throw Error("Invalid event type");const V=l(T)?!!T.capture:!!T;let J=De(o);if(J||(o[us]=J=new ut(o)),d=J.add(u,d,p,V,S),d.proxy)return d;if(p=re(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)I||(T=V),T===void 0&&(T=!1),o.addEventListener(u.toString(),p,T);else if(o.attachEvent)o.attachEvent(ce(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function re(){function o(d){return u.call(o.src,o.listener,d)}const u=Te;return o}function oe(o,u,d,p,T){if(Array.isArray(u))for(var S=0;S<u.length;S++)oe(o,u[S],d,p,T);else p=l(p)?!!p.capture:!!p,d=Ye(d),o&&o[ne]?(o=o.i,S=String(u).toString(),S in o.g&&(u=o.g[S],d=ls(u,d,p,T),d>-1&&(Qe(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[S],o.h--)))):o&&(o=De(o))&&(u=o.g[u.toString()],o=-1,u&&(o=ls(u,d,p,T)),(d=o>-1?u[o]:null)&&je(d))}function je(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ne])cs(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(ce(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=De(u))?(cs(d,o),d.h==0&&(d.src=null,u[us]=null)):Qe(o)}}}function ce(o){return o in hs?hs[o]:hs[o]="on"+o}function Te(o,u){if(o.da)o=!0;else{u=new W(u,this);const d=o.listener,p=o.ha||o.src;o.fa&&je(o),o=d.call(p,u)}return o}function De(o){return o=o[us],o instanceof ut?o:null}var on="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ye(o){return typeof o=="function"?o:(o[on]||(o[on]=function(u){return o.handleEvent(u)}),o[on])}function Ve(){E.call(this),this.i=new ut(this),this.M=this,this.G=null}g(Ve,E),Ve.prototype[ne]=!0,Ve.prototype.removeEventListener=function(o,u,d,p){oe(this,o,u,d,p)};function Ue(o,u){var d,p=o.G;if(p)for(d=[];p;p=p.G)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new b(u,o);else if(u instanceof b)u.target=u.target||o;else{var T=u;u=new b(p,o),lt(u,T)}T=!0;let S,V;if(d)for(V=d.length-1;V>=0;V--)S=u.g=d[V],T=hr(S,p,!0,u)&&T;if(S=u.g=o,T=hr(S,p,!0,u)&&T,T=hr(S,p,!1,u)&&T,d)for(V=0;V<d.length;V++)S=u.g=d[V],T=hr(S,p,!1,u)&&T}Ve.prototype.N=function(){if(Ve.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let p=0;p<d.length;p++)Qe(d[p]);delete o.g[u],o.h--}}this.G=null},Ve.prototype.J=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},Ve.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function hr(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let T=!0;for(let S=0;S<u.length;++S){const V=u[S];if(V&&!V.da&&V.capture==d){const J=V.listener,Ee=V.ha||V.src;V.fa&&cs(o.i,V),T=J.call(Ee,p)!==!1&&T}}return T&&!p.defaultPrevented}function Jf(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=f(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function Ka(o){o.g=Jf(()=>{o.g=null,o.i&&(o.i=!1,Ka(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Xf extends E{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ka(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ds(o){E.call(this),this.h=o,this.g={}}g(ds,E);var Qa=[];function Ya(o){ue(o.g,function(u,d){this.g.hasOwnProperty(d)&&je(u)},o),o.g={}}ds.prototype.N=function(){ds.Z.N.call(this),Ya(this)},ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qi=a.JSON.stringify,Zf=a.JSON.parse,em=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Ja(){}function Xa(){}var fs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function $i(){b.call(this,"d")}g($i,b);function Hi(){b.call(this,"c")}g(Hi,b);var an={},Za=null;function dr(){return Za=Za||new Ve}an.Ia="serverreachability";function ec(o){b.call(this,an.Ia,o)}g(ec,b);function ms(o){const u=dr();Ue(u,new ec(u))}an.STAT_EVENT="statevent";function tc(o,u){b.call(this,an.STAT_EVENT,o),this.stat=u}g(tc,b);function Be(o){const u=dr();Ue(u,new tc(u,o))}an.Ja="timingevent";function nc(o,u){b.call(this,an.Ja,o),this.size=u}g(nc,b);function ps(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function gs(){this.g=!0}gs.prototype.ua=function(){this.g=!1};function tm(o,u,d,p,T,S){o.info(function(){if(o.g)if(S){var V="",J=S.split("&");for(let ae=0;ae<J.length;ae++){var Ee=J[ae].split("=");if(Ee.length>1){const Ae=Ee[0];Ee=Ee[1];const dt=Ae.split("_");V=dt.length>=2&&dt[1]=="type"?V+(Ae+"="+Ee+"&"):V+(Ae+"=redacted&")}}}else V=null;else V=S;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+u+`
`+d+`
`+V})}function nm(o,u,d,p,T,S,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+u+`
`+d+`
`+S+" "+V})}function kn(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+rm(o,d)+(p?" "+p:"")})}function sm(o,u){o.info(function(){return"TIMEOUT: "+u})}gs.prototype.info=function(){};function rm(o,u){if(!o.g)return u;if(!u)return null;try{const S=JSON.parse(u);if(S){for(o=0;o<S.length;o++)if(Array.isArray(S[o])){var d=S[o];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var T=p[0];if(T!="noop"&&T!="stop"&&T!="close")for(let V=1;V<p.length;V++)p[V]=""}}}}return qi(S)}catch{return u}}var fr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},sc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},rc;function zi(){}g(zi,Ja),zi.prototype.g=function(){return new XMLHttpRequest},rc=new zi;function ys(o){return encodeURIComponent(String(o))}function im(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function Ct(o,u,d,p){this.j=o,this.i=u,this.l=d,this.S=p||1,this.V=new ds(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ic}function ic(){this.i=null,this.g="",this.h=!1}var oc={},Wi={};function Gi(o,u,d){o.M=1,o.A=pr(ht(u)),o.u=d,o.R=!0,ac(o,null)}function ac(o,u){o.F=Date.now(),mr(o),o.B=ht(o.A);var d=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),xc(d.i,"t",p),o.C=0,d=o.j.L,o.h=new ic,o.g=Lc(o.j,d?u:null,!o.u),o.P>0&&(o.O=new Xf(f(o.Y,o,o.g),o.P)),u=o.V,d=o.g,p=o.ba;var T="readystatechange";Array.isArray(T)||(T&&(Qa[0]=T.toString()),T=Qa);for(let S=0;S<T.length;S++){const V=B(d,T[S],p||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=o.J?vt(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),ms(),tm(o.i,o.v,o.B,o.l,o.S,o.u)}Ct.prototype.ba=function(o){o=o.target;const u=this.O;u&&Dt(o)==3?u.j():this.Y(o)},Ct.prototype.Y=function(o){try{if(o==this.g)e:{const J=Dt(this.g),Ee=this.g.ya(),ae=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||Sc(this.g)))){this.K||J!=4||Ee==7||(Ee==8||ae<=0?ms(3):ms(2)),Ki(this);var u=this.g.ca();this.X=u;var d=om(this);if(this.o=u==200,nm(this.i,this.v,this.B,this.l,this.S,J,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,T=this.g;if((p=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var S=p;break t}}S=null}if(o=S)kn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qi(this,o);else{this.o=!1,this.m=3,Be(12),cn(this),_s(this);break e}}if(this.R){o=!0;let Ae;for(;!this.K&&this.C<d.length;)if(Ae=am(this,d),Ae==Wi){J==4&&(this.m=4,Be(14),o=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ae==oc){this.m=4,Be(15),kn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else kn(this.i,this.l,Ae,null),Qi(this,Ae);if(cc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||d.length!=0||this.h.h||(this.m=1,Be(16),o=!1),this.o=this.o&&o,!o)kn(this.i,this.l,d,"[Invalid Chunked Response]"),cn(this),_s(this);else if(d.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),so(V),V.P=!0,Be(11))}}else kn(this.i,this.l,d,null),Qi(this,d);J==4&&cn(this),this.o&&!this.K&&(J==4?Dc(this.j,this):(this.o=!1,mr(this)))}else bm(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,Be(12)):(this.m=0,Be(13)),cn(this),_s(this)}}}catch{}finally{}};function om(o){if(!cc(o))return o.g.la();const u=Sc(o.g);if(u==="")return"";let d="";const p=u.length,T=Dt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return cn(o),_s(o),"";o.h.i=new a.TextDecoder}for(let S=0;S<p;S++)o.h.h=!0,d+=o.h.i.decode(u[S],{stream:!(T&&S==p-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function cc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function am(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?Wi:(d=Number(u.substring(d,p)),isNaN(d)?oc:(p+=1,p+d>u.length?Wi:(u=u.slice(p,p+d),o.C=p+d,u)))}Ct.prototype.cancel=function(){this.K=!0,cn(this)};function mr(o){o.T=Date.now()+o.H,lc(o,o.H)}function lc(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ps(f(o.aa,o),u)}function Ki(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Ct.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(sm(this.i,this.B),this.M!=2&&(ms(),Be(17)),cn(this),this.m=2,_s(this)):lc(this,this.T-o)};function _s(o){o.j.I==0||o.K||Dc(o.j,o)}function cn(o){Ki(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Ya(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Qi(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||Yi(d.h,o))){if(!o.L&&Yi(d.h,o)&&d.I==3){try{var p=d.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)xr(d),_r(d);else break e;no(d),Be(18)}}else d.xa=T[1],0<d.xa-d.K&&T[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ps(f(d.Va,d),6e3));dc(d.h)<=1&&d.ta&&(d.ta=void 0)}else un(d,11)}else if((o.L||d.g==o)&&xr(d),!_(u))for(T=d.Ba.g.parse(u),u=0;u<T.length;u++){let ae=T[u];const Ae=ae[0];if(!(Ae<=d.K))if(d.K=Ae,ae=ae[1],d.I==2)if(ae[0]=="c"){d.M=ae[1],d.ba=ae[2];const dt=ae[3];dt!=null&&(d.ka=dt,d.j.info("VER="+d.ka));const hn=ae[4];hn!=null&&(d.za=hn,d.j.info("SVER="+d.za));const Vt=ae[5];Vt!=null&&typeof Vt=="number"&&Vt>0&&(p=1.5*Vt,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ot=o.g;if(Ot){const vr=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vr){var S=p.h;S.g||vr.indexOf("spdy")==-1&&vr.indexOf("quic")==-1&&vr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Ji(S,S.h),S.h=null))}if(p.G){const ro=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;ro&&(p.wa=ro,he(p.J,p.G,ro))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var V=o;if(p.na=Mc(p,p.L?p.ba:null,p.W),V.L){fc(p.h,V);var J=V,Ee=p.O;Ee&&(J.H=Ee),J.D&&(Ki(J),mr(J)),p.g=V}else Pc(p);d.i.length>0&&wr(d)}else ae[0]!="stop"&&ae[0]!="close"||un(d,7);else d.I==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?un(d,7):to(d):ae[0]!="noop"&&d.l&&d.l.qa(ae),d.A=0)}}ms(4)}catch{}}var cm=class{constructor(o,u){this.g=o,this.map=u}};function uc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function hc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function dc(o){return o.h?1:o.g?o.g.size:0}function Yi(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ji(o,u){o.g?o.g.add(u):o.h=u}function fc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}uc.prototype.cancel=function(){if(this.i=mc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function mc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return A(o.i)}var pc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lm(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const p=o[d].indexOf("=");let T,S=null;p>=0?(T=o[d].substring(0,p),S=o[d].substring(p+1)):T=o[d],u(T,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Pt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Pt?(this.l=o.l,ws(this,o.j),this.o=o.o,this.g=o.g,xs(this,o.u),this.h=o.h,Xi(this,bc(o.i)),this.m=o.m):o&&(u=String(o).match(pc))?(this.l=!1,ws(this,u[1]||"",!0),this.o=bs(u[2]||""),this.g=bs(u[3]||"",!0),xs(this,u[4]),this.h=bs(u[5]||"",!0),Xi(this,u[6]||"",!0),this.m=bs(u[7]||"")):(this.l=!1,this.i=new Es(null,this.l))}Pt.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(vs(u,gc,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(vs(u,gc,!0),"@"),o.push(ys(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(vs(d,d.charAt(0)=="/"?dm:hm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",vs(d,mm)),o.join("")},Pt.prototype.resolve=function(o){const u=ht(this);let d=!!o.j;d?ws(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var p=o.h;if(d)xs(u,o.u);else if(d=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var T=u.h.lastIndexOf("/");T!=-1&&(p=u.h.slice(0,T+1)+p)}if(T=p,T==".."||T==".")p="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){p=T.lastIndexOf("/",0)==0,T=T.split("/");const S=[];for(let V=0;V<T.length;){const J=T[V++];J=="."?p&&V==T.length&&S.push(""):J==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),p&&V==T.length&&S.push("")):(S.push(J),p=!0)}p=S.join("/")}else p=T}return d?u.h=p:d=o.i.toString()!=="",d?Xi(u,bc(o.i)):d=!!o.m,d&&(u.m=o.m),u};function ht(o){return new Pt(o)}function ws(o,u,d){o.j=d?bs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function xs(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Xi(o,u,d){u instanceof Es?(o.i=u,pm(o.i,o.l)):(d||(u=vs(u,fm)),o.i=new Es(u,o.l))}function he(o,u,d){o.i.set(u,d)}function pr(o){return he(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function bs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function vs(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,um),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function um(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var gc=/[#\/\?@]/g,hm=/[#\?:]/g,dm=/[#\?]/g,fm=/[#\?@]/g,mm=/#/g;function Es(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function ln(o){o.g||(o.g=new Map,o.h=0,o.i&&lm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Es.prototype,n.add=function(o,u){ln(this),this.i=null,o=Cn(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function yc(o,u){ln(o),u=Cn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function _c(o,u){return ln(o),u=Cn(o,u),o.g.has(u)}n.forEach=function(o,u){ln(this),this.g.forEach(function(d,p){d.forEach(function(T){o.call(u,T,p,this)},this)},this)};function wc(o,u){ln(o);let d=[];if(typeof u=="string")_c(o,u)&&(d=d.concat(o.g.get(Cn(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}n.set=function(o,u){return ln(this),this.i=null,o=Cn(this,o),_c(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=wc(this,o),o.length>0?String(o[0]):u):u};function xc(o,u,d){yc(o,u),d.length>0&&(o.i=null,o.g.set(Cn(o,u),A(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var d=u[p];const T=ys(d);d=wc(this,d);for(let S=0;S<d.length;S++){let V=T;d[S]!==""&&(V+="="+ys(d[S])),o.push(V)}}return this.i=o.join("&")};function bc(o){const u=new Es;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Cn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function pm(o,u){u&&!o.j&&(ln(o),o.i=null,o.g.forEach(function(d,p){const T=p.toLowerCase();p!=T&&(yc(this,p),xc(this,T,d))},o)),o.j=u}function gm(o,u){const d=new gs;if(a.Image){const p=new Image;p.onload=m(jt,d,"TestLoadImage: loaded",!0,u,p),p.onerror=m(jt,d,"TestLoadImage: error",!1,u,p),p.onabort=m(jt,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=m(jt,d,"TestLoadImage: timeout",!1,u,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function ym(o,u){const d=new gs,p=new AbortController,T=setTimeout(()=>{p.abort(),jt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(T),S.ok?jt(d,"TestPingServer: ok",!0,u):jt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(T),jt(d,"TestPingServer: error",!1,u)})}function jt(o,u,d,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(d)}catch{}}function _m(){this.g=new em}function Zi(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Zi,Ja),Zi.prototype.g=function(){return new gr(this.i,this.h)};function gr(o,u){Ve.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(gr,Ve),n=gr.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Ts(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Is(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;vc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function vc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Is(this):Ts(this),this.readyState==3&&vc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Is(this))},n.Na=function(o){this.g&&(this.response=o,Is(this))},n.ga=function(){this.g&&Is(this)};function Is(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Ts(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Ts(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(gr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ec(o){let u="";return ue(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function eo(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Ec(d),typeof o=="string"?d!=null&&ys(d):he(o,u,d))}function pe(o){Ve.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(pe,Ve);var wm=/^https?$/i,xm=["POST","PUT"];n=pe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():rc.g(),this.g.onreadystatechange=x(f(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(S){Ic(this,S);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)d.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())d.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),T=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(xm,u,void 0)>=0)||p||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,V]of d)this.g.setRequestHeader(S,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(S){Ic(this,S)}};function Ic(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Tc(o),yr(o)}function Tc(o){o.A||(o.A=!0,Ue(o,"complete"),Ue(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ue(this,"complete"),Ue(this,"abort"),yr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yr(this,!0)),pe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ac(this):this.Xa())},n.Xa=function(){Ac(this)};function Ac(o){if(o.h&&typeof i<"u"){if(o.v&&Dt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ue(o,"readystatechange"),Dt(o)==4){o.h=!1;try{const S=o.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=S===0){let V=String(o.D).match(pc)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),p=!wm.test(V?V.toLowerCase():"")}d=p}if(d)Ue(o,"complete"),Ue(o,"success");else{o.o=6;try{var T=Dt(o)>2?o.g.statusText:""}catch{T=""}o.l=T+" ["+o.ca()+"]",Tc(o)}}finally{yr(o)}}}}function yr(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||Ue(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Dt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Dt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Zf(u)}};function Sc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function bm(o){const u={};o=(o.g&&Dt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(_(o[p]))continue;var d=im(o[p]);const T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=u[T]||[];u[T]=S,S.push(d)}$e(u,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Nc(o){this.za=0,this.i=[],this.j=new gs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=As("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=As("baseRetryDelayMs",5e3,o),this.Za=As("retryDelaySeedMs",1e4,o),this.Ta=As("forwardChannelMaxRetries",2,o),this.va=As("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new uc(o&&o.concurrentRequestLimit),this.Ba=new _m,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Nc.prototype,n.ka=8,n.I=1,n.connect=function(o,u,d,p){Be(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=Mc(this,null,this.W),wr(this)};function to(o){if(Rc(o),o.I==3){var u=o.V++,d=ht(o.J);if(he(d,"SID",o.M),he(d,"RID",u),he(d,"TYPE","terminate"),Ss(o,d),u=new Ct(o,o.j,u),u.M=2,u.A=pr(ht(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=u.A,d=!0),d||(u.g=Lc(u.j,null),u.g.ea(u.A)),u.F=Date.now(),mr(u)}Oc(o)}function _r(o){o.g&&(so(o),o.g.cancel(),o.g=null)}function Rc(o){_r(o),o.v&&(a.clearTimeout(o.v),o.v=null),xr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function wr(o){if(!hc(o.h)&&!o.m){o.m=!0;var u=o.Ea;L||y(),$||(L(),$=!0),v.add(u,o),o.D=0}}function vm(o,u){return dc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ps(f(o.Ea,o,u),Vc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const T=new Ct(this,this.j,o);let S=this.o;if(this.U&&(S?(S=vt(S),lt(S,this.U)):S=this.U),this.u!==null||this.R||(T.J=S,S=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Cc(this,T,u),d=ht(this.J),he(d,"RID",o),he(d,"CVER",22),this.G&&he(d,"X-HTTP-Session-Id",this.G),Ss(this,d),S&&(this.R?u="headers="+ys(Ec(S))+"&"+u:this.u&&eo(d,this.u,S)),Ji(this.h,T),this.Ra&&he(d,"TYPE","init"),this.S?(he(d,"$req",u),he(d,"SID","null"),T.U=!0,Gi(T,d,null)):Gi(T,d,u),this.I=2}}else this.I==3&&(o?kc(this,o):this.i.length==0||hc(this.h)||kc(this))};function kc(o,u){var d;u?d=u.l:d=o.V++;const p=ht(o.J);he(p,"SID",o.M),he(p,"RID",d),he(p,"AID",o.K),Ss(o,p),o.u&&o.o&&eo(p,o.u,o.o),d=new Ct(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Cc(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Ji(o.h,d),Gi(d,p,u)}function Ss(o,u){o.H&&ue(o.H,function(d,p){he(u,p,d)}),o.l&&ue({},function(d,p){he(u,p,d)})}function Cc(o,u,d){d=Math.min(o.i.length,d);const p=o.l?f(o.l.Ka,o.l,o):null;e:{var T=o.i;let J=-1;for(;;){const Ee=["count="+d];J==-1?d>0?(J=T[0].g,Ee.push("ofs="+J)):J=0:Ee.push("ofs="+J);let ae=!0;for(let Ae=0;Ae<d;Ae++){var S=T[Ae].g;const dt=T[Ae].map;if(S-=J,S<0)J=Math.max(0,T[Ae].g-100),ae=!1;else try{S="req"+S+"_"||"";try{var V=dt instanceof Map?dt:Object.entries(dt);for(const[hn,Vt]of V){let Ot=Vt;l(Vt)&&(Ot=qi(Vt)),Ee.push(S+hn+"="+encodeURIComponent(Ot))}}catch(hn){throw Ee.push(S+"type="+encodeURIComponent("_badmap")),hn}}catch{p&&p(dt)}}if(ae){V=Ee.join("&");break e}}V=void 0}return o=o.i.splice(0,d),u.G=o,V}function Pc(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;L||y(),$||(L(),$=!0),v.add(u,o),o.A=0}}function no(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ps(f(o.Da,o),Vc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,jc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ps(f(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Be(10),_r(this),jc(this))};function so(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function jc(o){o.g=new Ct(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=ht(o.na);he(u,"RID","rpc"),he(u,"SID",o.M),he(u,"AID",o.K),he(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&he(u,"TO",o.ia),he(u,"TYPE","xmlhttp"),Ss(o,u),o.u&&o.o&&eo(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=pr(ht(u)),d.u=null,d.R=!0,ac(d,o)}n.Va=function(){this.C!=null&&(this.C=null,_r(this),no(this),Be(19))};function xr(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Dc(o,u){var d=null;if(o.g==u){xr(o),so(o),o.g=null;var p=2}else if(Yi(o.h,u))d=u.G,fc(o.h,u),p=1;else return;if(o.I!=0){if(u.o)if(p==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var T=o.D;p=dr(),Ue(p,new nc(p,d)),wr(o)}else Pc(o);else if(T=u.m,T==3||T==0&&u.X>0||!(p==1&&vm(o,u)||p==2&&no(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),T){case 1:un(o,5);break;case 4:un(o,10);break;case 3:un(o,6);break;default:un(o,2)}}}function Vc(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function un(o,u){if(o.j.info("Error code "+u),u==2){var d=f(o.bb,o),p=o.Ua;const T=!p;p=new Pt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ws(p,"https"),pr(p),T?gm(p.toString(),d):ym(p.toString(),d)}else Be(2);o.I=0,o.l&&o.l.pa(u),Oc(o),Rc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function Oc(o){if(o.I=0,o.ja=[],o.l){const u=mc(o.h);(u.length!=0||o.i.length!=0)&&(k(o.ja,u),k(o.ja,o.i),o.h.i.length=0,A(o.i),o.i.length=0),o.l.oa()}}function Mc(o,u,d){var p=d instanceof Pt?ht(d):new Pt(d);if(p.g!="")u&&(p.g=u+"."+p.g),xs(p,p.u);else{var T=a.location;p=T.protocol,u=u?u+"."+T.hostname:T.hostname,T=+T.port;const S=new Pt(null);p&&ws(S,p),u&&(S.g=u),T&&xs(S,T),d&&(S.h=d),p=S}return d=o.G,u=o.wa,d&&u&&he(p,d,u),he(p,"VER",o.ka),Ss(o,p),p}function Lc(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new pe(new Zi({ab:d})):new pe(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fc(){}n=Fc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function br(){}br.prototype.g=function(o,u){return new ze(o,u)};function ze(o,u){Ve.call(this),this.g=new Nc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!_(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Pn(this)}g(ze,Ve),ze.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ze.prototype.close=function(){to(this.g)},ze.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=qi(o),o=d);u.i.push(new cm(u.Ya++,o)),u.I==3&&wr(u)},ze.prototype.N=function(){this.g.l=null,delete this.j,to(this.g),delete this.g,ze.Z.N.call(this)};function Uc(o){$i.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}g(Uc,$i);function Bc(){Hi.call(this),this.status=1}g(Bc,Hi);function Pn(o){this.g=o}g(Pn,Fc),Pn.prototype.ra=function(){Ue(this.g,"a")},Pn.prototype.qa=function(o){Ue(this.g,new Uc(o))},Pn.prototype.pa=function(o){Ue(this.g,new Bc)},Pn.prototype.oa=function(){Ue(this.g,"b")},br.prototype.createWebChannel=br.prototype.g,ze.prototype.send=ze.prototype.o,ze.prototype.open=ze.prototype.m,ze.prototype.close=ze.prototype.close,Zh=function(){return new br},Xh=function(){return dr()},Jh=an,jo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},fr.NO_ERROR=0,fr.TIMEOUT=8,fr.HTTP_ERROR=6,Mr=fr,sc.COMPLETE="complete",Yh=sc,Xa.EventType=fs,fs.OPEN="a",fs.CLOSE="b",fs.ERROR="c",fs.MESSAGE="d",Ve.prototype.listen=Ve.prototype.J,Ps=Xa,pe.prototype.listenOnce=pe.prototype.K,pe.prototype.getLastError=pe.prototype.Ha,pe.prototype.getLastErrorCode=pe.prototype.ya,pe.prototype.getStatus=pe.prototype.ca,pe.prototype.getResponseJson=pe.prototype.La,pe.prototype.getResponseText=pe.prototype.la,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Fa,Qh=pe}).apply(typeof Sr<"u"?Sr:typeof self<"u"?self:typeof window<"u"?window:{});const Vl="@firebase/firestore",Ol="4.9.2";/**
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
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
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
 */let ss="12.3.0";/**
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
 */const yn=new mi("@firebase/firestore");function jn(){return yn.logLevel}function F(n,...e){if(yn.logLevel<=Z.DEBUG){const t=e.map(ca);yn.debug(`Firestore (${ss}): ${n}`,...t)}}function Rt(n,...e){if(yn.logLevel<=Z.ERROR){const t=e.map(ca);yn.error(`Firestore (${ss}): ${n}`,...t)}}function Wn(n,...e){if(yn.logLevel<=Z.WARN){const t=e.map(ca);yn.warn(`Firestore (${ss}): ${n}`,...t)}}function ca(n){if(typeof n=="string")return n;try{/**
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
 */function z(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,ed(n,s,t)}function ed(n,e,t){let s=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Rt(s),new Error(s)}function ie(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||ed(e,r,s)}function Q(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class td{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class t0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Me.UNAUTHENTICATED)))}shutdown(){}}class n0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class s0{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ie(this.o===void 0,42304);let s=this.i;const r=h=>this.i!==s?(s=this.i,t(h)):Promise.resolve();let i=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tt,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const h=i;e.enqueueRetryable((async()=>{await h.promise,await r(this.currentUser)}))},l=h=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ie(typeof s.accessToken=="string",31837,{l:s}),new td(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string",2055,{h:e}),new Me(e)}}class r0{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class i0{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new r0(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Me.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ml{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class o0{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ie(this.o===void 0,3512);const s=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ml(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ie(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ml(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function a0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class la{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=a0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function ee(n,e){return n<e?-1:n>e?1:0}function Do(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return mo(r)===mo(i)?ee(r,i):mo(r)?1:-1}return ee(n.length,e.length)}const c0=55296,l0=57343;function mo(n){const e=n.charCodeAt(0);return e>=c0&&e<=l0}function Gn(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
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
 */const Ll="__name__";class ft{constructor(e,t,s){t===void 0?t=0:t>e.length&&z(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&z(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ft.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ft?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=ft.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return ee(e.length,t.length)}static compareSegments(e,t){const s=ft.isNumericId(e),r=ft.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?ft.extractNumericId(e).compare(ft.extractNumericId(t)):Do(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wt.fromString(e.substring(4,e.length-2))}}class le extends ft{construct(e,t,s){return new le(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new O(N.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new le(t)}static emptyPath(){return new le([])}}const u0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ke extends ft{construct(e,t,s){return new ke(e,t,s)}static isValidIdentifier(e){return u0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ke.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ll}static keyField(){return new ke([Ll])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new O(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new O(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=h,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(s+=l,r++):(i(),r++)}if(i(),a)throw new O(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ke(t)}static emptyPath(){return new ke([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(le.fromString(e))}static fromName(e){return new q(le.fromString(e).popFirst(5))}static empty(){return new q(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new le(e.slice()))}}/**
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
 */function nd(n,e,t){if(!t)throw new O(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function h0(n,e,t,s){if(e===!0&&s===!0)throw new O(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Fl(n){if(!q.isDocumentKey(n))throw new O(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ul(n){if(q.isDocumentKey(n))throw new O(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function xi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z(12329,{type:typeof n})}function _n(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xi(n);throw new O(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function xe(n,e){const t={typeString:n};return e&&(t.value=e),t}function or(n,e){if(!sd(n))throw new O(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new O(N.INVALID_ARGUMENT,t);return!0}/**
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
 */const Bl=-62135596800,ql=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*ql);return new de(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Bl)throw new O(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ql}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(or(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Bl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:xe("string",de._jsonSchemaVersion),seconds:xe("number"),nanoseconds:xe("number")};/**
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
 */class K{static fromTimestamp(e){return new K(e)}static min(){return new K(new de(0,0))}static max(){return new K(new de(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Gs=-1;function d0(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=K.fromTimestamp(s===1e9?new de(t+1,0):new de(t,s));return new Yt(r,q.empty(),e)}function f0(n){return new Yt(n.readTime,n.key,Gs)}class Yt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Yt(K.min(),q.empty(),Gs)}static max(){return new Yt(K.max(),q.empty(),Gs)}}function m0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
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
 */const p0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class g0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function rs(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==p0)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,s)=>{t(e)}))}static reject(e){return new R(((t,s)=>{s(e)}))}static waitFor(e){return new R(((t,s)=>{let r=0,i=0,a=!1;e.forEach((l=>{++r,l.next((()=>{++i,a&&i===r&&t()}),(h=>s(h)))})),a=!0,i===r&&t()}))}static or(e){let t=R.resolve(!1);for(const s of e)t=t.next((r=>r?R.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new R(((s,r)=>{const i=e.length,a=new Array(i);let l=0;for(let h=0;h<i;h++){const f=h;t(e[f]).next((m=>{a[f]=m,++l,l===i&&s(a)}),(m=>r(m)))}}))}static doWhile(e,t){return new R(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function y0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function is(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class bi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}bi.ce=-1;/**
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
 */const ua=-1;function vi(n){return n==null}function Xr(n){return n===0&&1/n==-1/0}function _0(n){return typeof n=="number"&&Number.isInteger(n)&&!Xr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const rd="";function w0(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=$l(e)),e=x0(n.get(t),e);return $l(e)}function x0(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case rd:t+="";break;default:t+=i}}return t}function $l(n){return n+rd+""}/**
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
 */function Hl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function rn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function id(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class me{constructor(e,t){this.comparator=e,this.root=t||Re.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nr(this.root,e,this.comparator,!0)}}class Nr{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Re.RED,this.left=r??Re.EMPTY,this.right=i??Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new Re(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Re.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw z(27949);return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new Re(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ie{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zl(this.data.getIterator())}getIteratorFrom(e){return new zl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class zl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rt{constructor(e){this.fields=e,e.sort(ke.comparator)}static empty(){return new rt([])}unionWith(e){let t=new Ie(ke.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new rt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Gn(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class od extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new od("Invalid base64 string: "+i):i}})(e);return new Pe(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i})(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const b0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(n){if(ie(!!n,39018),typeof n=="string"){let e=0;const t=b0.exec(n);if(ie(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xt(n){return typeof n=="string"?Pe.fromBase64String(n):Pe.fromUint8Array(n)}/**
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
 */const ad="server_timestamp",cd="__type__",ld="__previous_value__",ud="__local_write_time__";function ha(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[cd])==null?void 0:s.stringValue)===ad}function Ei(n){const e=n.mapValue.fields[ld];return ha(e)?Ei(e):e}function Ks(n){const e=Jt(n.mapValue.fields[ud].timestampValue);return new de(e.seconds,e.nanos)}/**
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
 */class v0{constructor(e,t,s,r,i,a,l,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m}}const Zr="(default)";class Qs{constructor(e,t){this.projectId=e,this.database=t||Zr}static empty(){return new Qs("","")}get isDefaultDatabase(){return this.database===Zr}isEqual(e){return e instanceof Qs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const hd="__type__",E0="__max__",Rr={mapValue:{}},dd="__vector__",ei="value";function Zt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ha(n)?4:T0(n)?9007199254740991:I0(n)?10:11:z(28295,{value:n})}function bt(n,e){if(n===e)return!0;const t=Zt(n);if(t!==Zt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ks(n).isEqual(Ks(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Jt(r.timestampValue),l=Jt(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,i){return Xt(r.bytesValue).isEqual(Xt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,i){return ge(r.geoPointValue.latitude)===ge(i.geoPointValue.latitude)&&ge(r.geoPointValue.longitude)===ge(i.geoPointValue.longitude)})(n,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return ge(r.integerValue)===ge(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=ge(r.doubleValue),l=ge(i.doubleValue);return a===l?Xr(a)===Xr(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Gn(n.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:case 11:return(function(r,i){const a=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Hl(a)!==Hl(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!bt(a[h],l[h])))return!1;return!0})(n,e);default:return z(52216,{left:n})}}function Ys(n,e){return(n.values||[]).find((t=>bt(t,e)))!==void 0}function Kn(n,e){if(n===e)return 0;const t=Zt(n),s=Zt(e);if(t!==s)return ee(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=ge(i.integerValue||i.doubleValue),h=ge(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,e);case 3:return Wl(n.timestampValue,e.timestampValue);case 4:return Wl(Ks(n),Ks(e));case 5:return Do(n.stringValue,e.stringValue);case 6:return(function(i,a){const l=Xt(i),h=Xt(a);return l.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const m=ee(l[f],h[f]);if(m!==0)return m}return ee(l.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=ee(ge(i.latitude),ge(a.latitude));return l!==0?l:ee(ge(i.longitude),ge(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Gl(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var x,A,k,j;const l=i.fields||{},h=a.fields||{},f=(x=l[ei])==null?void 0:x.arrayValue,m=(A=h[ei])==null?void 0:A.arrayValue,g=ee(((k=f==null?void 0:f.values)==null?void 0:k.length)||0,((j=m==null?void 0:m.values)==null?void 0:j.length)||0);return g!==0?g:Gl(f,m)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Rr.mapValue&&a===Rr.mapValue)return 0;if(i===Rr.mapValue)return 1;if(a===Rr.mapValue)return-1;const l=i.fields||{},h=Object.keys(l),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let g=0;g<h.length&&g<m.length;++g){const x=Do(h[g],m[g]);if(x!==0)return x;const A=Kn(l[h[g]],f[m[g]]);if(A!==0)return A}return ee(h.length,m.length)})(n.mapValue,e.mapValue);default:throw z(23264,{he:t})}}function Wl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=Jt(n),s=Jt(e),r=ee(t.seconds,s.seconds);return r!==0?r:ee(t.nanos,s.nanos)}function Gl(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Kn(t[r],s[r]);if(i)return i}return ee(t.length,s.length)}function Qn(n){return Vo(n)}function Vo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Jt(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Xt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return q.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=Vo(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${Vo(t.fields[a])}`;return r+"}"})(n.mapValue):z(61005,{value:n})}function Lr(n){switch(Zt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ei(n);return e?16+Lr(e):16;case 5:return 2*n.stringValue.length;case 6:return Xt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Lr(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return rn(s.fields,((i,a)=>{r+=i.length+Lr(a)})),r})(n.mapValue);default:throw z(13486,{value:n})}}function Kl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Oo(n){return!!n&&"integerValue"in n}function da(n){return!!n&&"arrayValue"in n}function Ql(n){return!!n&&"nullValue"in n}function Yl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fr(n){return!!n&&"mapValue"in n}function I0(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[hd])==null?void 0:s.stringValue)===dd}function Ls(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return rn(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ls(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ls(n.arrayValue.values[t]);return e}return{...n}}function T0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===E0}/**
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
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Fr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ls(t)}setAll(e){let t=ke.emptyPath(),s={},r=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,s,r),s={},r=[],t=l.popLast()}a?s[l.lastSegment()]=Ls(a):r.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Fr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Fr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){rn(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new We(Ls(this.value))}}function fd(n){const e=[];return rn(n.fields,((t,s)=>{const r=new ke([t]);if(Fr(s)){const i=fd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)})),new rt(e)}/**
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
 */class Le{constructor(e,t,s,r,i,a,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Le(e,0,K.min(),K.min(),K.min(),We.empty(),0)}static newFoundDocument(e,t,s,r){return new Le(e,1,t,K.min(),s,r,0)}static newNoDocument(e,t){return new Le(e,2,t,K.min(),K.min(),We.empty(),0)}static newUnknownDocument(e,t){return new Le(e,3,t,K.min(),K.min(),We.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ti{constructor(e,t){this.position=e,this.inclusive=t}}function Jl(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=q.comparator(q.fromName(a.referenceValue),t.key):s=Kn(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Xl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!bt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Js{constructor(e,t="asc"){this.field=e,this.dir=t}}function A0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class md{}class we extends md{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new N0(e,t,s):t==="array-contains"?new C0(e,s):t==="in"?new P0(e,s):t==="not-in"?new j0(e,s):t==="array-contains-any"?new D0(e,s):new we(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new R0(e,s):new k0(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Kn(t,this.value)):t!==null&&Zt(this.value)===Zt(t)&&this.matchesComparison(Kn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class at extends md{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new at(e,t)}matches(e){return pd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function pd(n){return n.op==="and"}function gd(n){return S0(n)&&pd(n)}function S0(n){for(const e of n.filters)if(e instanceof at)return!1;return!0}function Mo(n){if(n instanceof we)return n.field.canonicalString()+n.op.toString()+Qn(n.value);if(gd(n))return n.filters.map((e=>Mo(e))).join(",");{const e=n.filters.map((t=>Mo(t))).join(",");return`${n.op}(${e})`}}function yd(n,e){return n instanceof we?(function(s,r){return r instanceof we&&s.op===r.op&&s.field.isEqual(r.field)&&bt(s.value,r.value)})(n,e):n instanceof at?(function(s,r){return r instanceof at&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,a,l)=>i&&yd(a,r.filters[l])),!0):!1})(n,e):void z(19439)}function _d(n){return n instanceof we?(function(t){return`${t.field.canonicalString()} ${t.op} ${Qn(t.value)}`})(n):n instanceof at?(function(t){return t.op.toString()+" {"+t.getFilters().map(_d).join(" ,")+"}"})(n):"Filter"}class N0 extends we{constructor(e,t,s){super(e,t,s),this.key=q.fromName(s.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class R0 extends we{constructor(e,t){super(e,"in",t),this.keys=wd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class k0 extends we{constructor(e,t){super(e,"not-in",t),this.keys=wd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function wd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>q.fromName(s.referenceValue)))}class C0 extends we{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return da(t)&&Ys(t.arrayValue,this.value)}}class P0 extends we{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ys(this.value.arrayValue,t)}}class j0 extends we{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ys(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ys(this.value.arrayValue,t)}}class D0 extends we{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!da(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ys(this.value.arrayValue,s)))}}/**
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
 */class V0{constructor(e,t=null,s=[],r=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Zl(n,e=null,t=[],s=[],r=null,i=null,a=null){return new V0(n,e,t,s,r,i,a)}function fa(n){const e=Q(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Mo(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),vi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Qn(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Qn(s))).join(",")),e.Te=t}return e.Te}function ma(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!A0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!yd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Xl(n.startAt,e.startAt)&&Xl(n.endAt,e.endAt)}function Lo(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class os{constructor(e,t=null,s=[],r=[],i=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function O0(n,e,t,s,r,i,a,l){return new os(n,e,t,s,r,i,a,l)}function pa(n){return new os(n)}function eu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xd(n){return n.collectionGroup!==null}function Fs(n){const e=Q(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ie(ke.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Js(i,s))})),t.has(ke.keyField().canonicalString())||e.Ie.push(new Js(ke.keyField(),s))}return e.Ie}function gt(n){const e=Q(n);return e.Ee||(e.Ee=M0(e,Fs(n))),e.Ee}function M0(n,e){if(n.limitType==="F")return Zl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Js(r.field,i)}));const t=n.endAt?new ti(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new ti(n.startAt.position,n.startAt.inclusive):null;return Zl(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Fo(n,e){const t=n.filters.concat([e]);return new os(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Uo(n,e,t){return new os(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ii(n,e){return ma(gt(n),gt(e))&&n.limitType===e.limitType}function bd(n){return`${fa(gt(n))}|lt:${n.limitType}`}function Dn(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>_d(r))).join(", ")}]`),vi(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>Qn(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>Qn(r))).join(",")),`Target(${s})`})(gt(n))}; limitType=${n.limitType})`}function Ti(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):q.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of Fs(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(a,l,h){const f=Jl(a,l,h);return a.inclusive?f<=0:f<0})(s.startAt,Fs(s),r)||s.endAt&&!(function(a,l,h){const f=Jl(a,l,h);return a.inclusive?f>=0:f>0})(s.endAt,Fs(s),r))})(n,e)}function L0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vd(n){return(e,t)=>{let s=!1;for(const r of Fs(n)){const i=F0(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function F0(n,e,t){const s=n.field.isKeyField()?q.comparator(e.key,t.key):(function(i,a,l){const h=a.data.field(i),f=l.data.field(i);return h!==null&&f!==null?Kn(h,f):z(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return z(19790,{direction:n.dir})}}/**
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
 */class Tn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){rn(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return id(this.inner)}size(){return this.innerSize}}/**
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
 */const U0=new me(q.comparator);function kt(){return U0}const Ed=new me(q.comparator);function js(...n){let e=Ed;for(const t of n)e=e.insert(t.key,t);return e}function Id(n){let e=Ed;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function fn(){return Us()}function Td(){return Us()}function Us(){return new Tn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const B0=new me(q.comparator),q0=new Ie(q.comparator);function te(...n){let e=q0;for(const t of n)e=e.add(t);return e}const $0=new Ie(ee);function H0(){return $0}/**
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
 */function ga(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xr(e)?"-0":e}}function Ad(n){return{integerValue:""+n}}function z0(n,e){return _0(e)?Ad(e):ga(n,e)}/**
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
 */class Ai{constructor(){this._=void 0}}function W0(n,e,t){return n instanceof Xs?(function(r,i){const a={fields:{[cd]:{stringValue:ad},[ud]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ha(i)&&(i=Ei(i)),i&&(a.fields[ld]=i),{mapValue:a}})(t,e):n instanceof Zs?Nd(n,e):n instanceof er?Rd(n,e):(function(r,i){const a=Sd(r,i),l=tu(a)+tu(r.Ae);return Oo(a)&&Oo(r.Ae)?Ad(l):ga(r.serializer,l)})(n,e)}function G0(n,e,t){return n instanceof Zs?Nd(n,e):n instanceof er?Rd(n,e):t}function Sd(n,e){return n instanceof ni?(function(s){return Oo(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Xs extends Ai{}class Zs extends Ai{constructor(e){super(),this.elements=e}}function Nd(n,e){const t=kd(e);for(const s of n.elements)t.some((r=>bt(r,s)))||t.push(s);return{arrayValue:{values:t}}}class er extends Ai{constructor(e){super(),this.elements=e}}function Rd(n,e){let t=kd(e);for(const s of n.elements)t=t.filter((r=>!bt(r,s)));return{arrayValue:{values:t}}}class ni extends Ai{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function tu(n){return ge(n.integerValue||n.doubleValue)}function kd(n){return da(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class K0{constructor(e,t){this.field=e,this.transform=t}}function Q0(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof Zs&&r instanceof Zs||s instanceof er&&r instanceof er?Gn(s.elements,r.elements,bt):s instanceof ni&&r instanceof ni?bt(s.Ae,r.Ae):s instanceof Xs&&r instanceof Xs})(n.transform,e.transform)}class Y0{constructor(e,t){this.version=e,this.transformResults=t}}class At{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new At}static exists(e){return new At(void 0,e)}static updateTime(e){return new At(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ur(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Si{}function Cd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new jd(n.key,At.none()):new Ni(n.key,n.data,At.none());{const t=n.data,s=We.empty();let r=new Ie(ke.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new An(n.key,s,new rt(r.toArray()),At.none())}}function J0(n,e,t){n instanceof Ni?(function(r,i,a){const l=r.value.clone(),h=su(r.fieldTransforms,i,a.transformResults);l.setAll(h),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof An?(function(r,i,a){if(!Ur(r.precondition,i))return void i.convertToUnknownDocument(a.version);const l=su(r.fieldTransforms,i,a.transformResults),h=i.data;h.setAll(Pd(r)),h.setAll(l),i.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,e,t):(function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Bs(n,e,t,s){return n instanceof Ni?(function(i,a,l,h){if(!Ur(i.precondition,a))return l;const f=i.value.clone(),m=ru(i.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(n,e,t,s):n instanceof An?(function(i,a,l,h){if(!Ur(i.precondition,a))return l;const f=ru(i.fieldTransforms,h,a),m=a.data;return m.setAll(Pd(i)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,e,t,s):(function(i,a,l){return Ur(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function X0(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Sd(s.transform,r||null);i!=null&&(t===null&&(t=We.empty()),t.set(s.field,i))}return t||null}function nu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Gn(s,r,((i,a)=>Q0(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ni extends Si{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class An extends Si{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pd(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function su(n,e,t){const s=new Map;ie(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,l=e.data.field(i.field);s.set(i.field,G0(a,l,t[r]))}return s}function ru(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,W0(i,a,e))}return s}class jd extends Si{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Z0 extends Si{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ex{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&J0(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Bs(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Bs(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Td();return this.mutations.forEach((r=>{const i=e.get(r.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(r.key)?null:l;const h=Cd(a,l);h!==null&&s.set(r.key,h),a.isValidDocument()||a.convertToNoDocument(K.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),te())}isEqual(e){return this.batchId===e.batchId&&Gn(this.mutations,e.mutations,((t,s)=>nu(t,s)))&&Gn(this.baseMutations,e.baseMutations,((t,s)=>nu(t,s)))}}class ya{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){ie(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return B0})();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new ya(e,t,s,r)}}/**
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
 */class tx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var _e,se;function sx(n){switch(n){case N.OK:return z(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return z(15467,{code:n})}}function Dd(n){if(n===void 0)return Rt("GRPC error has no .code"),N.UNKNOWN;switch(n){case _e.OK:return N.OK;case _e.CANCELLED:return N.CANCELLED;case _e.UNKNOWN:return N.UNKNOWN;case _e.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case _e.INTERNAL:return N.INTERNAL;case _e.UNAVAILABLE:return N.UNAVAILABLE;case _e.UNAUTHENTICATED:return N.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case _e.NOT_FOUND:return N.NOT_FOUND;case _e.ALREADY_EXISTS:return N.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return N.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case _e.ABORTED:return N.ABORTED;case _e.OUT_OF_RANGE:return N.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return N.UNIMPLEMENTED;case _e.DATA_LOSS:return N.DATA_LOSS;default:return z(39323,{code:n})}}(se=_e||(_e={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rx(){return new TextEncoder}/**
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
 */const ix=new Wt([4294967295,4294967295],0);function iu(n){const e=rx().encode(n),t=new Kh;return t.update(e),new Uint8Array(t.digest())}function ou(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wt([t,s],0),new Wt([r,i],0)]}class _a{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ds(`Invalid padding: ${t}`);if(s<0)throw new Ds(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ds(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ds(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Wt.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(Wt.fromNumber(s)));return r.compare(ix)===1&&(r=new Wt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=iu(e),[s,r]=ou(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new _a(i,r,t);return s.forEach((l=>a.insert(l))),a}insert(e){if(this.ge===0)return;const t=iu(e),[s,r]=ou(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ri{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,ar.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ri(K.min(),r,new me(ee),kt(),te())}}class ar{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ar(s,t,te(),te(),te())}}/**
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
 */class Br{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class Vd{constructor(e,t){this.targetId=e,this.Ce=t}}class Od{constructor(e,t,s=Pe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class au{constructor(){this.ve=0,this.Fe=cu(),this.Me=Pe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),t=te(),s=te();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:z(38017,{changeType:i})}})),new ar(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=cu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ie(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class ox{constructor(e){this.Ge=e,this.ze=new Map,this.je=kt(),this.Je=kr(),this.He=kr(),this.Ye=new me(ee)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:z(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(Lo(i))if(s===0){const a=new q(i.path);this.et(t,a,Le.newNoDocument(a,K.min()))}else ie(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const l=this.ut(e),h=l?this.ct(l,e,a):1;if(h!==0){this.it(t);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,f)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,l;try{a=Xt(s).toUint8Array()}catch(h){if(h instanceof od)return Wn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new _a(a,r,i)}catch(h){return Wn(h instanceof Ds?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Lo(l.target)){const h=new q(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Le.newNoDocument(h,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let s=te();this.He.forEach(((i,a)=>{let l=!0;a.forEachWhile((h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const r=new Ri(e,t,this.Ye,this.je,s);return this.je=kt(),this.Je=kr(),this.He=kr(),this.Ye=new me(ee),r}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new au,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ie(ee),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ie(ee),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new au),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function kr(){return new me(q.comparator)}function cu(){return new me(q.comparator)}const ax={asc:"ASCENDING",desc:"DESCENDING"},cx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lx={and:"AND",or:"OR"};class ux{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bo(n,e){return n.useProto3Json||vi(e)?e:{value:e}}function si(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Md(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function hx(n,e){return si(n,e.toTimestamp())}function yt(n){return ie(!!n,49232),K.fromTimestamp((function(t){const s=Jt(t);return new de(s.seconds,s.nanos)})(n))}function wa(n,e){return qo(n,e).canonicalString()}function qo(n,e){const t=(function(r){return new le(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Ld(n){const e=le.fromString(n);return ie($d(e),10190,{key:e.toString()}),e}function $o(n,e){return wa(n.databaseId,e.path)}function po(n,e){const t=Ld(e);if(t.get(1)!==n.databaseId.projectId)throw new O(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(Ud(t))}function Fd(n,e){return wa(n.databaseId,e)}function dx(n){const e=Ld(n);return e.length===4?le.emptyPath():Ud(e)}function Ho(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ud(n){return ie(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function lu(n,e,t){return{name:$o(n,e),fields:t.value.mapValue.fields}}function fx(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:z(39313,{state:f})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(f,m){return f.useProto3Json?(ie(m===void 0||typeof m=="string",58123),Pe.fromBase64String(m||"")):(ie(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Pe.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(f){const m=f.code===void 0?N.UNKNOWN:Dd(f.code);return new O(m,f.message||"")})(a);t=new Od(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=po(n,s.document.name),i=yt(s.document.updateTime),a=s.document.createTime?yt(s.document.createTime):K.min(),l=new We({mapValue:{fields:s.document.fields}}),h=Le.newFoundDocument(r,i,a,l),f=s.targetIds||[],m=s.removedTargetIds||[];t=new Br(f,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=po(n,s.document),i=s.readTime?yt(s.readTime):K.min(),a=Le.newNoDocument(r,i),l=s.removedTargetIds||[];t=new Br([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=po(n,s.document),i=s.removedTargetIds||[];t=new Br([],i,r,null)}else{if(!("filter"in e))return z(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new nx(r,i),l=s.targetId;t=new Vd(l,a)}}return t}function mx(n,e){let t;if(e instanceof Ni)t={update:lu(n,e.key,e.value)};else if(e instanceof jd)t={delete:$o(n,e.key)};else if(e instanceof An)t={update:lu(n,e.key,e.data),updateMask:Ex(e.fieldMask)};else{if(!(e instanceof Z0))return z(16599,{Vt:e.type});t={verify:$o(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,a){const l=a.transform;if(l instanceof Xs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof er)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ni)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw z(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:hx(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z(27497)})(n,e.precondition)),t}function px(n,e){return n&&n.length>0?(ie(e!==void 0,14353),n.map((t=>(function(r,i){let a=r.updateTime?yt(r.updateTime):yt(i);return a.isEqual(K.min())&&(a=yt(i)),new Y0(a,r.transformResults||[])})(t,e)))):[]}function gx(n,e){return{documents:[Fd(n,e.path)]}}function yx(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Fd(n,r);const i=(function(f){if(f.length!==0)return qd(at.create(f,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(f){if(f.length!==0)return f.map((m=>(function(x){return{field:Vn(x.field),direction:xx(x.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Bo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(e.endAt)),{ft:t,parent:r}}function _x(n){let e=dx(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){ie(s===1,65062);const m=t.from[0];m.allDescendants?r=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(g){const x=Bd(g);return x instanceof at&&gd(x)?x.getFilters():[x]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((x=>(function(k){return new Js(On(k.field),(function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(x)))})(t.orderBy));let l=null;t.limit&&(l=(function(g){let x;return x=typeof g=="object"?g.value:g,vi(x)?null:x})(t.limit));let h=null;t.startAt&&(h=(function(g){const x=!!g.before,A=g.values||[];return new ti(A,x)})(t.startAt));let f=null;return t.endAt&&(f=(function(g){const x=!g.before,A=g.values||[];return new ti(A,x)})(t.endAt)),O0(e,r,a,i,l,"F",h,f)}function wx(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bd(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=On(t.unaryFilter.field);return we.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=On(t.unaryFilter.field);return we.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=On(t.unaryFilter.field);return we.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=On(t.unaryFilter.field);return we.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}})(n):n.fieldFilter!==void 0?(function(t){return we.create(On(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return at.create(t.compositeFilter.filters.map((s=>Bd(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return z(1026)}})(t.compositeFilter.op))})(n):z(30097,{filter:n})}function xx(n){return ax[n]}function bx(n){return cx[n]}function vx(n){return lx[n]}function Vn(n){return{fieldPath:n.canonicalString()}}function On(n){return ke.fromServerFormat(n.fieldPath)}function qd(n){return n instanceof we?(function(t){if(t.op==="=="){if(Yl(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NAN"}};if(Ql(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Yl(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NOT_NAN"}};if(Ql(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vn(t.field),op:bx(t.op),value:t.value}}})(n):n instanceof at?(function(t){const s=t.getFilters().map((r=>qd(r)));return s.length===1?s[0]:{compositeFilter:{op:vx(t.op),filters:s}}})(n):z(54877,{filter:n})}function Ex(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function $d(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class qt{constructor(e,t,s,r,i=K.min(),a=K.min(),l=Pe.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ix{constructor(e){this.yt=e}}function Tx(n){const e=_x({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Uo(e,e.limit,"L"):e}/**
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
 */class Ax{constructor(){this.Cn=new Sx}addToCollectionParentIndex(e,t){return this.Cn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Yt.min())}updateCollectionGroup(e,t,s){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Sx{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Ie(le.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ie(le.comparator)).toArray()}}/**
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
 */const uu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hd=41943040;class He{static withCacheSize(e){return new He(e,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */He.DEFAULT_COLLECTION_PERCENTILE=10,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,He.DEFAULT=new He(Hd,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),He.DISABLED=new He(-1,0,0);/**
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
 */class Yn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Yn(0)}static cr(){return new Yn(-1)}}/**
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
 */const hu="LruGarbageCollector",Nx=1048576;function du([n,e],[t,s]){const r=ee(n,t);return r===0?ee(e,s):r}class Rx{constructor(e){this.Ir=e,this.buffer=new Ie(du),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();du(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class kx{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){F(hu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){is(t)?F(hu,"Ignoring IndexedDB error during garbage collection: ",t):await rs(t)}await this.Vr(3e5)}))}}class Cx{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return R.resolve(bi.ce);const s=new Rx(t);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(uu)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uu):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,r,i,a,l,h,f;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),r=this.params.maximumSequenceNumbersToCollect):r=g,a=Date.now(),this.nthSequenceNumber(e,r)))).next((g=>(s=g,l=Date.now(),this.removeTargets(e,s,t)))).next((g=>(i=g,h=Date.now(),this.removeOrphanedDocuments(e,s)))).next((g=>(f=Date.now(),jn()<=Z.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${r} in `+(l-a)+`ms
	Removed ${i} targets in `+(h-l)+`ms
	Removed ${g} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:g}))))}}function Px(n,e){return new Cx(n,e)}/**
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
 */class jx{constructor(){this.changes=new Tn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?R.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Dx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Vx{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Bs(s.mutation,r,rt.empty(),de.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,te()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=te()){const r=fn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let a=js();return i.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=fn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,te())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,s,r){let i=kt();const a=Us(),l=(function(){return Us()})();return t.forEach(((h,f)=>{const m=s.get(f.key);r.has(f.key)&&(m===void 0||m.mutation instanceof An)?i=i.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),Bs(m.mutation,f,m.mutation.getFieldMask(),de.now())):a.set(f.key,rt.empty())})),this.recalculateAndSaveOverlays(e,i).next((h=>(h.forEach(((f,m)=>a.set(f,m))),t.forEach(((f,m)=>l.set(f,new Dx(m,a.get(f)??null)))),l)))}recalculateAndSaveOverlays(e,t){const s=Us();let r=new me(((a,l)=>a-l)),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((h=>{const f=t.get(h);if(f===null)return;let m=s.get(h)||rt.empty();m=l.applyToLocalView(f,m),s.set(h,m);const g=(r.get(l.batchId)||te()).add(h);r=r.insert(l.batchId,g)}))})).next((()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,m=h.value,g=Td();m.forEach((x=>{if(!i.has(x)){const A=Cd(t.get(x),s.get(x));A!==null&&g.set(x,A),i=i.add(x)}})),a.push(this.documentOverlayCache.saveOverlays(e,f,g))}return R.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return(function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):R.resolve(fn());let l=Gs,h=i;return a.next((f=>R.forEach(f,((m,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(m)?R.resolve():this.remoteDocumentCache.getEntry(e,m).next((x=>{h=h.insert(m,x)}))))).next((()=>this.populateOverlays(e,f,i))).next((()=>this.computeViews(e,h,f,te()))).next((m=>({batchId:l,changes:Id(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next((s=>{let r=js();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=js();return this.indexManager.getCollectionParents(e,i).next((l=>R.forEach(l,(h=>{const f=(function(g,x){return new os(x,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,h.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,s,r).next((m=>{m.forEach(((g,x)=>{a=a.insert(g,x)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((a=>{i.forEach(((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,Le.newInvalidDocument(m)))}));let l=js();return a.forEach(((h,f)=>{const m=i.get(h);m!==void 0&&Bs(m.mutation,f,rt.empty(),de.now()),Ti(t,f)&&(l=l.insert(h,f))})),l}))}}/**
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
 */class Ox{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return R.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:yt(r.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(r){return{name:r.name,query:Tx(r.bundledQuery),readTime:yt(r.readTime)}})(t)),R.resolve()}}/**
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
 */class Mx{constructor(){this.overlays=new me(q.comparator),this.qr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const s=fn();return R.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.St(e,t,i)})),R.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(s)),R.resolve()}getOverlaysForCollection(e,t,s){const r=fn(),i=t.length+1,a=new q(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===i&&h.largestBatchId>s&&r.set(h.getKey(),h)}return R.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new me(((f,m)=>f-m));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>s){let m=i.get(f.largestBatchId);m===null&&(m=fn(),i=i.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const l=fn(),h=i.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,m)=>l.set(f,m))),!(l.size()>=r)););return R.resolve(l)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new tx(t,s));let i=this.qr.get(t);i===void 0&&(i=te(),this.qr.set(t,i)),this.qr.set(t,i.add(s.key))}}/**
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
 */class Lx{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
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
 */class xa{constructor(){this.Qr=new Ie(Se.$r),this.Ur=new Ie(Se.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Se(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Se(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new q(new le([])),s=new Se(t,e),r=new Se(t,e+1),i=[];return this.Ur.forEachInRange([s,r],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new q(new le([])),s=new Se(t,e),r=new Se(t,e+1);let i=te();return this.Ur.forEachInRange([s,r],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Se(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Se{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return q.comparator(e.key,t.key)||ee(e.Yr,t.Yr)}static Kr(e,t){return ee(e.Yr,t.Yr)||q.comparator(e.key,t.key)}}/**
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
 */class Fx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ie(Se.$r)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ex(i,t,s,r);this.mutationQueue.push(a);for(const l of r)this.Zr=this.Zr.add(new Se(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,t){return R.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ei(s),i=r<0?0:r;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?ua:this.tr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Se(t,0),r=new Se(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],(a=>{const l=this.Xr(a.Yr);i.push(l)})),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ie(ee);return t.forEach((r=>{const i=new Se(r,0),a=new Se(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(l=>{s=s.add(l.Yr)}))})),R.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;q.isDocumentKey(i)||(i=i.child(""));const a=new Se(new q(i),0);let l=new Ie(ee);return this.Zr.forEachWhile((h=>{const f=h.key.path;return!!s.isPrefixOf(f)&&(f.length===r&&(l=l.add(h.Yr)),!0)}),a),R.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){ie(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return R.forEach(t.mutations,(r=>{const i=new Se(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Se(t,0),r=this.Zr.firstAfterOrEqual(s);return R.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Ux{constructor(e){this.ri=e,this.docs=(function(){return new me(q.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return R.resolve(s?s.document.mutableCopy():Le.newInvalidDocument(t))}getEntries(e,t){let s=kt();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Le.newInvalidDocument(r))})),R.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=kt();const a=t.path,l=new q(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||m0(f0(m),s)<=0||(r.has(m.key)||Ti(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,s,r){z(9500)}ii(e,t){return R.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Bx(this)}getSize(e){return R.resolve(this.size)}}class Bx extends jx{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),R.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class qx{constructor(e){this.persistence=e,this.si=new Tn((t=>fa(t)),ma),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.oi=0,this._i=new xa,this.targetCount=0,this.ai=Yn.ur()}forEachTarget(e,t){return this.si.forEach(((s,r)=>t(r))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),R.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Yn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Pr(t),R.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),R.waitFor(i).next((()=>r))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return R.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),R.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((a=>{i.push(r.markPotentiallyOrphaned(e,a))})),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return R.resolve(s)}containsKey(e,t){return R.resolve(this._i.containsKey(t))}}/**
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
 */class zd{constructor(e,t){this.ui={},this.overlays={},this.ci=new bi(0),this.li=!1,this.li=!0,this.hi=new Lx,this.referenceDelegate=e(this),this.Pi=new qx(this),this.indexManager=new Ax,this.remoteDocumentCache=(function(r){return new Ux(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new Ix(t),this.Ii=new Ox(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Mx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new Fx(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){F("MemoryPersistence","Starting transaction:",e);const r=new $x(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,t){return R.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class $x extends g0{constructor(e){super(),this.currentSequenceNumber=e}}class ba{constructor(e){this.persistence=e,this.Ri=new xa,this.Vi=null}static mi(e){return new ba(e)}get fi(){if(this.Vi)return this.Vi;throw z(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),R.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(s=>{const r=q.fromPath(s);return this.gi(e,r).next((i=>{i||t.removeEntry(r,K.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ri{constructor(e,t){this.persistence=e,this.pi=new Tn((s=>w0(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Px(this,t)}static mi(e,t){return new ri(e,t)}Ei(){}di(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return R.forEach(this.pi,((s,r)=>this.br(e,s,r).next((i=>i?R.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(a=>this.br(e,a,t).next((l=>{l||(s++,i.removeEntry(a,K.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),R.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Lr(e.data.value)),t}br(e,t,s){return R.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.pi.get(t);return R.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class va{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=r}static As(e,t){let s=te(),r=te();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new va(e,t.fromCache,s,r)}}/**
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
 */class Hx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class zx{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return xg()?8:y0(Fe())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.ys(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,t,r,s).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Hx;return this.Ss(e,t,a).next((l=>{if(i.result=l,this.Vs)return this.bs(e,t,a,l.size)}))})).next((()=>i.result))}bs(e,t,s,r){return s.documentReadCount<this.fs?(jn()<=Z.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Dn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(jn()<=Z.DEBUG&&F("QueryEngine","Query:",Dn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(jn()<=Z.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Dn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gt(t))):R.resolve())}ys(e,t){if(eu(t))return R.resolve(null);let s=gt(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=Uo(t,null,"F"),s=gt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const a=te(...i);return this.ps.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,s).next((h=>{const f=this.Ds(t,l);return this.Cs(t,f,a,h.readTime)?this.ys(e,Uo(t,null,"F")):this.vs(e,f,t,h)}))))})))))}ws(e,t,s,r){return eu(t)||r.isEqual(K.min())?R.resolve(null):this.ps.getDocuments(e,s).next((i=>{const a=this.Ds(t,i);return this.Cs(t,a,s,r)?R.resolve(null):(jn()<=Z.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Dn(t)),this.vs(e,a,t,d0(r,Gs)).next((l=>l)))}))}Ds(e,t){let s=new Ie(vd(e));return t.forEach(((r,i)=>{Ti(e,i)&&(s=s.add(i))})),s}Cs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,s){return jn()<=Z.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Dn(t)),this.ps.getDocumentsMatchingQuery(e,t,Yt.min(),s)}vs(e,t,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const Ea="LocalStore",Wx=3e8;class Gx{constructor(e,t,s,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new me(ee),this.xs=new Tn((i=>fa(i)),ma),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Vx(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Kx(n,e,t,s){return new Gx(n,e,t,s)}async function Wd(n,e){const t=Q(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const a=[],l=[];let h=te();for(const f of r){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of i){l.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(s,h).next((f=>({Ls:f,removedBatchIds:a,addedBatchIds:l})))}))}))}function Qx(n,e){const t=Q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,h,f,m){const g=f.batch,x=g.keys();let A=R.resolve();return x.forEach((k=>{A=A.next((()=>m.getEntry(h,k))).next((j=>{const C=f.docVersions.get(k);ie(C!==null,48541),j.version.compareTo(C)<0&&(g.applyToRemoteDocument(j,f),j.isValidDocument()&&(j.setReadTime(f.commitVersion),m.addEntry(j)))}))})),A.next((()=>l.mutationQueue.removeMutationBatch(h,g)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let h=te();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function Gd(n){const e=Q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Yx(n,e){const t=Q(n),s=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});r=t.Ms;const l=[];e.targetChanges.forEach(((m,g)=>{const x=r.get(g);if(!x)return;l.push(t.Pi.removeMatchingKeys(i,m.removedDocuments,g).next((()=>t.Pi.addMatchingKeys(i,m.addedDocuments,g))));let A=x.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?A=A.withResumeToken(Pe.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):m.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(m.resumeToken,s)),r=r.insert(g,A),(function(j,C,M){return j.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=Wx?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0})(x,A,m)&&l.push(t.Pi.updateTargetData(i,A))}));let h=kt(),f=te();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),l.push(Jx(i,a,e.documentUpdates).next((m=>{h=m.ks,f=m.qs}))),!s.isEqual(K.min())){const m=t.Pi.getLastRemoteSnapshotVersion(i).next((g=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(m)}return R.waitFor(l).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,h,f))).next((()=>h))})).then((i=>(t.Ms=r,i)))}function Jx(n,e,t){let s=te(),r=te();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let a=kt();return t.forEach(((l,h)=>{const f=i.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(r=r.add(l)),h.isNoDocument()&&h.version.isEqual(K.min())?(e.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(h),a=a.insert(l,h)):F(Ea,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)})),{ks:a,qs:r}}))}function Xx(n,e){const t=Q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=ua),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Zx(n,e){const t=Q(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.Pi.getTargetData(s,e).next((i=>i?(r=i,R.resolve(r)):t.Pi.allocateTargetId(s).next((a=>(r=new qt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function zo(n,e,t){const s=Q(n),r=s.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(a=>s.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!is(a))throw a;F(Ea,`Failed to update sequence numbers for target ${e}: ${a}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function fu(n,e,t){const s=Q(n);let r=K.min(),i=te();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,f,m){const g=Q(h),x=g.xs.get(m);return x!==void 0?R.resolve(g.Ms.get(x)):g.Pi.getTargetData(f,m)})(s,a,gt(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(a,l.targetId).next((h=>{i=h}))})).next((()=>s.Fs.getDocumentsMatchingQuery(a,e,t?r:K.min(),t?i:te()))).next((l=>(eb(s,L0(e),l),{documents:l,Qs:i})))))}function eb(n,e,t){let s=n.Os.get(e)||K.min();t.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),n.Os.set(e,s)}class mu{constructor(){this.activeTargetIds=H0()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tb{constructor(){this.Mo=new mu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new mu,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nb{Oo(e){}shutdown(){}}/**
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
 */const pu="ConnectivityMonitor";class gu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){F(pu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){F(pu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cr=null;function Wo(){return Cr===null?Cr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Cr++,"0x"+Cr.toString(16)}/**
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
 */const go="RestConnection",sb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===Zr?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,t,s,r,i){const a=Wo(),l=this.zo(e,t.toUriEncodedString());F(go,`Sending RPC '${e}' ${a}:`,l,s);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,r,i);const{host:f}=new URL(l),m=Zn(f);return this.Jo(e,l,h,s,m).then((g=>(F(go,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw Wn(go,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",s),g}))}Ho(e,t,s,r,i,a){return this.Go(e,t,s,r,i)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ss})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}zo(e,t){const s=sb[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class ib{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Oe="WebChannelConnection";class ob extends rb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,r,i){const a=Wo();return new Promise(((l,h)=>{const f=new Qh;f.setWithCredentials(!0),f.listenOnce(Yh.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case Mr.NO_ERROR:const g=f.getResponseJson();F(Oe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case Mr.TIMEOUT:F(Oe,`RPC '${e}' ${a} timed out`),h(new O(N.DEADLINE_EXCEEDED,"Request time out"));break;case Mr.HTTP_ERROR:const x=f.getStatus();if(F(Oe,`RPC '${e}' ${a} failed with status:`,x,"response text:",f.getResponseText()),x>0){let A=f.getResponseJson();Array.isArray(A)&&(A=A[0]);const k=A==null?void 0:A.error;if(k&&k.status&&k.message){const j=(function(M){const D=M.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(D)>=0?D:N.UNKNOWN})(k.status);h(new O(j,k.message))}else h(new O(N.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new O(N.UNAVAILABLE,"Connection failed."));break;default:z(9055,{l_:e,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{F(Oe,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(r);F(Oe,`RPC '${e}' ${a} sending request:`,r),f.send(t,"POST",m,s,15)}))}T_(e,t,s){const r=Wo(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Zh(),l=Xh(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,s),h.encodeInitMessageHeaders=!0;const m=i.join("");F(Oe,`Creating RPC '${e}' stream ${r}: ${m}`,h);const g=a.createWebChannel(m,h);this.I_(g);let x=!1,A=!1;const k=new ib({Yo:C=>{A?F(Oe,`Not sending because RPC '${e}' stream ${r} is closed:`,C):(x||(F(Oe,`Opening RPC '${e}' stream ${r} transport.`),g.open(),x=!0),F(Oe,`RPC '${e}' stream ${r} sending:`,C),g.send(C))},Zo:()=>g.close()}),j=(C,M,D)=>{C.listen(M,(U=>{try{D(U)}catch(Y){setTimeout((()=>{throw Y}),0)}}))};return j(g,Ps.EventType.OPEN,(()=>{A||(F(Oe,`RPC '${e}' stream ${r} transport opened.`),k.o_())})),j(g,Ps.EventType.CLOSE,(()=>{A||(A=!0,F(Oe,`RPC '${e}' stream ${r} transport closed`),k.a_(),this.E_(g))})),j(g,Ps.EventType.ERROR,(C=>{A||(A=!0,Wn(Oe,`RPC '${e}' stream ${r} transport errored. Name:`,C.name,"Message:",C.message),k.a_(new O(N.UNAVAILABLE,"The operation could not be completed")))})),j(g,Ps.EventType.MESSAGE,(C=>{var M;if(!A){const D=C.data[0];ie(!!D,16349);const U=D,Y=(U==null?void 0:U.error)||((M=U[0])==null?void 0:M.error);if(Y){F(Oe,`RPC '${e}' stream ${r} received error:`,Y);const L=Y.status;let $=(function(w){const E=_e[w];if(E!==void 0)return Dd(E)})(L),v=Y.message;$===void 0&&($=N.INTERNAL,v="Unknown error status: "+L+" with message "+Y.message),A=!0,k.a_(new O($,v)),g.close()}else F(Oe,`RPC '${e}' stream ${r} received:`,D),k.u_(D)}})),j(l,Jh.STAT_EVENT,(C=>{C.stat===jo.PROXY?F(Oe,`RPC '${e}' stream ${r} detected buffering proxy`):C.stat===jo.NOPROXY&&F(Oe,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{k.__()}),0),k}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function yo(){return typeof document<"u"?document:null}/**
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
 */function ki(n){return new ux(n,!0)}/**
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
 */class Kd{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const yu="PersistentStream";class Qd{constructor(e,t,s,r,i,a,l,h){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Kd(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Rt(t.toString()),Rt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new O(N.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return F(yu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(F(yu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ab extends Qd{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=fx(this.serializer,e),s=(function(i){if(!("targetChange"in i))return K.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?yt(a.readTime):K.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Ho(this.serializer),t.addTarget=(function(i,a){let l;const h=a.target;if(l=Lo(h)?{documents:gx(i,h)}:{query:yx(i,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Md(i,a.resumeToken);const f=Bo(i,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(K.min())>0){l.readTime=si(i,a.snapshotVersion.toTimestamp());const f=Bo(i,a.expectedCount);f!==null&&(l.expectedCount=f)}return l})(this.serializer,e);const s=wx(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Ho(this.serializer),t.removeTarget=e,this.q_(t)}}class cb extends Qd{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=px(e.writeResults,e.commitTime),s=yt(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Ho(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>mx(this.serializer,s)))};this.q_(t)}}/**
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
 */class lb{}class ub extends lb{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new O(N.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,qo(t,s),r,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(N.UNKNOWN,i.toString())}))}Ho(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(e,qo(t,s),r,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(N.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class hb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rt(t),this.aa=!1):F("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const wn="RemoteStore";class db{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{s.enqueueAndForget((async()=>{Sn(this)&&(F(wn,"Restarting streams for network reachability change."),await(async function(h){const f=Q(h);f.Ea.add(4),await cr(f),f.Ra.set("Unknown"),f.Ea.delete(4),await Ci(f)})(this))}))})),this.Ra=new hb(s,r)}}async function Ci(n){if(Sn(n))for(const e of n.da)await e(!0)}async function cr(n){for(const e of n.da)await e(!1)}function Yd(n,e){const t=Q(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Sa(t)?Aa(t):as(t).O_()&&Ta(t,e))}function Ia(n,e){const t=Q(n),s=as(t);t.Ia.delete(e),s.O_()&&Jd(t,e),t.Ia.size===0&&(s.O_()?s.L_():Sn(t)&&t.Ra.set("Unknown"))}function Ta(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}as(n).Y_(e)}function Jd(n,e){n.Va.Ue(e),as(n).Z_(e)}function Aa(n){n.Va=new ox({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),as(n).start(),n.Ra.ua()}function Sa(n){return Sn(n)&&!as(n).x_()&&n.Ia.size>0}function Sn(n){return Q(n).Ea.size===0}function Xd(n){n.Va=void 0}async function fb(n){n.Ra.set("Online")}async function mb(n){n.Ia.forEach(((e,t)=>{Ta(n,e)}))}async function pb(n,e){Xd(n),Sa(n)?(n.Ra.ha(e),Aa(n)):n.Ra.set("Unknown")}async function gb(n,e,t){if(n.Ra.set("Online"),e instanceof Od&&e.state===2&&e.cause)try{await(async function(r,i){const a=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,a),r.Ia.delete(l),r.Va.removeTarget(l))})(n,e)}catch(s){F(wn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ii(n,s)}else if(e instanceof Br?n.Va.Ze(e):e instanceof Vd?n.Va.st(e):n.Va.tt(e),!t.isEqual(K.min()))try{const s=await Gd(n.localStore);t.compareTo(s)>=0&&await(function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach(((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=i.Ia.get(f);m&&i.Ia.set(f,m.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,f)=>{const m=i.Ia.get(h);if(!m)return;i.Ia.set(h,m.withResumeToken(Pe.EMPTY_BYTE_STRING,m.snapshotVersion)),Jd(i,h);const g=new qt(m.target,h,f,m.sequenceNumber);Ta(i,g)})),i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(s){F(wn,"Failed to raise snapshot:",s),await ii(n,s)}}async function ii(n,e,t){if(!is(e))throw e;n.Ea.add(1),await cr(n),n.Ra.set("Offline"),t||(t=()=>Gd(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{F(wn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ci(n)}))}function Zd(n,e){return e().catch((t=>ii(n,t,e)))}async function Pi(n){const e=Q(n),t=en(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ua;for(;yb(e);)try{const r=await Xx(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,_b(e,r)}catch(r){await ii(e,r)}ef(e)&&tf(e)}function yb(n){return Sn(n)&&n.Ta.length<10}function _b(n,e){n.Ta.push(e);const t=en(n);t.O_()&&t.X_&&t.ea(e.mutations)}function ef(n){return Sn(n)&&!en(n).x_()&&n.Ta.length>0}function tf(n){en(n).start()}async function wb(n){en(n).ra()}async function xb(n){const e=en(n);for(const t of n.Ta)e.ea(t.mutations)}async function bb(n,e,t){const s=n.Ta.shift(),r=ya.from(s,e,t);await Zd(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await Pi(n)}async function vb(n,e){e&&en(n).X_&&await(async function(s,r){if((function(a){return sx(a)&&a!==N.ABORTED})(r.code)){const i=s.Ta.shift();en(s).B_(),await Zd(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Pi(s)}})(n,e),ef(n)&&tf(n)}async function _u(n,e){const t=Q(n);t.asyncQueue.verifyOperationInProgress(),F(wn,"RemoteStore received new credentials");const s=Sn(t);t.Ea.add(3),await cr(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ci(t)}async function Eb(n,e){const t=Q(n);e?(t.Ea.delete(2),await Ci(t)):e||(t.Ea.add(2),await cr(t),t.Ra.set("Unknown"))}function as(n){return n.ma||(n.ma=(function(t,s,r){const i=Q(t);return i.sa(),new ab(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Xo:fb.bind(null,n),t_:mb.bind(null,n),r_:pb.bind(null,n),H_:gb.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Sa(n)?Aa(n):n.Ra.set("Unknown")):(await n.ma.stop(),Xd(n))}))),n.ma}function en(n){return n.fa||(n.fa=(function(t,s,r){const i=Q(t);return i.sa(),new cb(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:wb.bind(null,n),r_:vb.bind(null,n),ta:xb.bind(null,n),na:bb.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Pi(n)):(await n.fa.stop(),n.Ta.length>0&&(F(wn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Na{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,l=new Na(e,t,a,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ra(n,e){if(Rt("AsyncQueue",`${e}: ${n}`),is(n))return new O(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Bn{static emptySet(e){return new Bn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||q.comparator(t.key,s.key):(t,s)=>q.comparator(t.key,s.key),this.keyedMap=js(),this.sortedSet=new me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Bn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Bn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class wu{constructor(){this.ga=new me(q.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):z(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Jn{constructor(e,t,s,r,i,a,l,h,f){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Jn(e,t,Bn.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ii(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Ib{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Tb{constructor(){this.queries=xu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=Q(t),i=r.queries;r.queries=xu(),i.forEach(((a,l)=>{for(const h of l.Sa)h.onError(s)}))})(this,new O(N.ABORTED,"Firestore shutting down"))}}function xu(){return new Tn((n=>bd(n)),Ii)}async function nf(n,e){const t=Q(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new Ib,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const l=Ra(a,`Initialization of query '${Dn(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&ka(t)}async function sf(n,e){const t=Q(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Ab(n,e){const t=Q(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(r)&&(s=!0);a.wa=r}}s&&ka(t)}function Sb(n,e,t){const s=Q(n),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(t);s.queries.delete(e)}function ka(n){n.Ca.forEach((e=>{e.next()}))}var Go,bu;(bu=Go||(Go={})).Ma="default",bu.Cache="cache";class rf{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Jn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Go.Cache}}/**
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
 */class of{constructor(e){this.key=e}}class af{constructor(e){this.key=e}}class Nb{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=te(),this.mutatedKeys=te(),this.eu=vd(e),this.tu=new Bn(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new wu,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,l=!1;const h=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,f=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((m,g)=>{const x=r.get(m),A=Ti(this.query,g)?g:null,k=!!x&&this.mutatedKeys.has(x.key),j=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let C=!1;x&&A?x.data.isEqual(A.data)?k!==j&&(s.track({type:3,doc:A}),C=!0):this.su(x,A)||(s.track({type:2,doc:A}),C=!0,(h&&this.eu(A,h)>0||f&&this.eu(A,f)<0)&&(l=!0)):!x&&A?(s.track({type:0,doc:A}),C=!0):x&&!A&&(s.track({type:1,doc:x}),C=!0,(h||f)&&(l=!0)),C&&(A?(a=a.add(A),i=j?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),s.track({type:1,doc:m})}return{tu:a,iu:s,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((m,g)=>(function(A,k){const j=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{Rt:C})}};return j(A)-j(k)})(m.type,g.type)||this.eu(m.doc,g.doc))),this.ou(s),r=r??!1;const l=t&&!r?this._u():[],h=this.Xa.size===0&&this.current&&!r?1:0,f=h!==this.Za;return this.Za=h,a.length!==0||f?{snapshot:new Jn(this.query,e.tu,i,a,e.mutatedKeys,h===0,f,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new wu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=te(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new af(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new of(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=te();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Jn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ca="SyncEngine";class Rb{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class kb{constructor(e){this.key=e,this.hu=!1}}class Cb{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Tn((l=>bd(l)),Ii),this.Iu=new Map,this.Eu=new Set,this.du=new me(q.comparator),this.Au=new Map,this.Ru=new xa,this.Vu={},this.mu=new Map,this.fu=Yn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Pb(n,e,t=!0){const s=ff(n);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await cf(s,e,t,!0),r}async function jb(n,e){const t=ff(n);await cf(t,e,!0,!1)}async function cf(n,e,t,s){const r=await Zx(n.localStore,gt(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return s&&(l=await Db(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Yd(n.remoteStore,r),l}async function Db(n,e,t,s,r){n.pu=(g,x,A)=>(async function(j,C,M,D){let U=C.view.ru(M);U.Cs&&(U=await fu(j.localStore,C.query,!1).then((({documents:v})=>C.view.ru(v,U))));const Y=D&&D.targetChanges.get(C.targetId),L=D&&D.targetMismatches.get(C.targetId)!=null,$=C.view.applyChanges(U,j.isPrimaryClient,Y,L);return Eu(j,C.targetId,$.au),$.snapshot})(n,g,x,A);const i=await fu(n.localStore,e,!0),a=new Nb(e,i.Qs),l=a.ru(i.documents),h=ar.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),f=a.applyChanges(l,n.isPrimaryClient,h);Eu(n,t,f.au);const m=new Rb(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),f.snapshot}async function Vb(n,e,t){const s=Q(n),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter((a=>!Ii(a,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await zo(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Ia(s.remoteStore,r.targetId),Ko(s,r.targetId)})).catch(rs)):(Ko(s,r.targetId),await zo(s.localStore,r.targetId,!0))}async function Ob(n,e){const t=Q(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Ia(t.remoteStore,s.targetId))}async function Mb(n,e,t){const s=Hb(n);try{const r=await(function(a,l){const h=Q(a),f=de.now(),m=l.reduce(((A,k)=>A.add(k.key)),te());let g,x;return h.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let k=kt(),j=te();return h.Ns.getEntries(A,m).next((C=>{k=C,k.forEach(((M,D)=>{D.isValidDocument()||(j=j.add(M))}))})).next((()=>h.localDocuments.getOverlayedDocuments(A,k))).next((C=>{g=C;const M=[];for(const D of l){const U=X0(D,g.get(D.key).overlayedDocument);U!=null&&M.push(new An(D.key,U,fd(U.value.mapValue),At.exists(!0)))}return h.mutationQueue.addMutationBatch(A,f,M,l)})).next((C=>{x=C;const M=C.applyToLocalDocumentSet(g,j);return h.documentOverlayCache.saveOverlays(A,C.batchId,M)}))})).then((()=>({batchId:x.batchId,changes:Id(g)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,l,h){let f=a.Vu[a.currentUser.toKey()];f||(f=new me(ee)),f=f.insert(l,h),a.Vu[a.currentUser.toKey()]=f})(s,r.batchId,t),await lr(s,r.changes),await Pi(s.remoteStore)}catch(r){const i=Ra(r,"Failed to persist write");t.reject(i)}}async function lf(n,e){const t=Q(n);try{const s=await Yx(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const a=t.Au.get(i);a&&(ie(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?ie(a.hu,14607):r.removedDocuments.size>0&&(ie(a.hu,42227),a.hu=!1))})),await lr(t,s,e)}catch(s){await rs(s)}}function vu(n,e,t){const s=Q(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&r.push(l.snapshot)})),(function(a,l){const h=Q(a);h.onlineState=l;let f=!1;h.queries.forEach(((m,g)=>{for(const x of g.Sa)x.va(l)&&(f=!0)})),f&&ka(h)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Lb(n,e,t){const s=Q(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),i=r&&r.key;if(i){let a=new me(q.comparator);a=a.insert(i,Le.newNoDocument(i,K.min()));const l=te().add(i),h=new Ri(K.min(),new Map,new me(ee),a,l);await lf(s,h),s.du=s.du.remove(i),s.Au.delete(e),Pa(s)}else await zo(s.localStore,e,!1).then((()=>Ko(s,e,t))).catch(rs)}async function Fb(n,e){const t=Q(n),s=e.batch.batchId;try{const r=await Qx(t.localStore,e);hf(t,s,null),uf(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await lr(t,r)}catch(r){await rs(r)}}async function Ub(n,e,t){const s=Q(n);try{const r=await(function(a,l){const h=Q(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let m;return h.mutationQueue.lookupMutationBatch(f,l).next((g=>(ie(g!==null,37113),m=g.keys(),h.mutationQueue.removeMutationBatch(f,g)))).next((()=>h.mutationQueue.performConsistencyCheck(f))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m))).next((()=>h.localDocuments.getDocuments(f,m)))}))})(s.localStore,e);hf(s,e,t),uf(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await lr(s,r)}catch(r){await rs(r)}}function uf(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function hf(n,e,t){const s=Q(n);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function Ko(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||df(n,s)}))}function df(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ia(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Pa(n))}function Eu(n,e,t){for(const s of t)s instanceof of?(n.Ru.addReference(s.key,e),Bb(n,s)):s instanceof af?(F(Ca,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||df(n,s.key)):z(19791,{wu:s})}function Bb(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(F(Ca,"New document in limbo: "+t),n.Eu.add(s),Pa(n))}function Pa(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new q(le.fromString(e)),s=n.fu.next();n.Au.set(s,new kb(t)),n.du=n.du.insert(t,s),Yd(n.remoteStore,new qt(gt(pa(t.path)),s,"TargetPurposeLimboResolution",bi.ce))}}async function lr(n,e,t){const s=Q(n),r=[],i=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,h)=>{a.push(s.pu(h,e,t).then((f=>{var m;if((f||t)&&s.isPrimaryClient){const g=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(h.targetId,g?"current":"not-current")}if(f){r.push(f);const g=va.As(h.targetId,f);i.push(g)}})))})),await Promise.all(a),s.Pu.H_(r),await(async function(h,f){const m=Q(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>R.forEach(f,(x=>R.forEach(x.Es,(A=>m.persistence.referenceDelegate.addReference(g,x.targetId,A))).next((()=>R.forEach(x.ds,(A=>m.persistence.referenceDelegate.removeReference(g,x.targetId,A)))))))))}catch(g){if(!is(g))throw g;F(Ea,"Failed to update sequence numbers: "+g)}for(const g of f){const x=g.targetId;if(!g.fromCache){const A=m.Ms.get(x),k=A.snapshotVersion,j=A.withLastLimboFreeSnapshotVersion(k);m.Ms=m.Ms.insert(x,j)}}})(s.localStore,i))}async function qb(n,e){const t=Q(n);if(!t.currentUser.isEqual(e)){F(Ca,"User change. New user:",e.toKey());const s=await Wd(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((l=>{l.forEach((h=>{h.reject(new O(N.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await lr(t,s.Ls)}}function $b(n,e){const t=Q(n),s=t.Au.get(e);if(s&&s.hu)return te().add(s.key);{let r=te();const i=t.Iu.get(e);if(!i)return r;for(const a of i){const l=t.Tu.get(a);r=r.unionWith(l.view.nu)}return r}}function ff(n){const e=Q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=lf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$b.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lb.bind(null,e),e.Pu.H_=Ab.bind(null,e.eventManager),e.Pu.yu=Sb.bind(null,e.eventManager),e}function Hb(n){const e=Q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Fb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ub.bind(null,e),e}class oi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ki(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Kx(this.persistence,new zx,e.initialUser,this.serializer)}Cu(e){return new zd(ba.mi,this.serializer)}Du(e){return new tb}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oi.provider={build:()=>new oi};class zb extends oi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ie(this.persistence.referenceDelegate instanceof ri,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new kx(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?He.withCacheSize(this.cacheSizeBytes):He.DEFAULT;return new zd((s=>ri.mi(s,t)),this.serializer)}}class Qo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>vu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=qb.bind(null,this.syncEngine),await Eb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Tb})()}createDatastore(e){const t=ki(e.databaseInfo.databaseId),s=(function(i){return new ob(i)})(e.databaseInfo);return(function(i,a,l,h){return new ub(i,a,l,h)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,a,l){return new db(s,r,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>vu(this.syncEngine,t,0)),(function(){return gu.v()?new gu:new nb})())}createSyncEngine(e,t){return(function(r,i,a,l,h,f,m){const g=new Cb(r,i,a,l,h,f);return m&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=Q(r);F(wn,"RemoteStore shutting down."),i.Ea.add(5),await cr(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Qo.provider={build:()=>new Qo};/**
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
 */class mf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Rt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const tn="FirestoreClient";class Wb{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Me.UNAUTHENTICATED,this.clientId=la.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async a=>{F(tn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(F(tn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ra(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function _o(n,e){n.asyncQueue.verifyOperationInProgress(),F(tn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Wd(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Iu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Gb(n);F(tn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>_u(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>_u(e.remoteStore,r))),n._onlineComponents=e}async function Gb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F(tn,"Using user provided OfflineComponentProvider");try{await _o(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===N.FAILED_PRECONDITION||r.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Wn("Error using user provided cache. Falling back to memory cache: "+t),await _o(n,new oi)}}else F(tn,"Using default OfflineComponentProvider"),await _o(n,new zb(void 0));return n._offlineComponents}async function pf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F(tn,"Using user provided OnlineComponentProvider"),await Iu(n,n._uninitializedComponentsProvider._online)):(F(tn,"Using default OnlineComponentProvider"),await Iu(n,new Qo))),n._onlineComponents}function Kb(n){return pf(n).then((e=>e.syncEngine))}async function gf(n){const e=await pf(n),t=e.eventManager;return t.onListen=Pb.bind(null,e.syncEngine),t.onUnlisten=Vb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=jb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ob.bind(null,e.syncEngine),t}function Qb(n,e,t={}){const s=new Tt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,h,f){const m=new mf({next:x=>{m.Nu(),a.enqueueAndForget((()=>sf(i,g)));const A=x.docs.has(l);!A&&x.fromCache?f.reject(new O(N.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&x.fromCache&&h&&h.source==="server"?f.reject(new O(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(x)},error:x=>f.reject(x)}),g=new rf(pa(l.path),m,{includeMetadataChanges:!0,qa:!0});return nf(i,g)})(await gf(n),n.asyncQueue,e,t,s))),s.promise}function Yb(n,e,t={}){const s=new Tt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,h,f){const m=new mf({next:x=>{m.Nu(),a.enqueueAndForget((()=>sf(i,g))),x.fromCache&&h.source==="server"?f.reject(new O(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(x)},error:x=>f.reject(x)}),g=new rf(l,m,{includeMetadataChanges:!0,qa:!0});return nf(i,g)})(await gf(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function yf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Tu=new Map;/**
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
 */const _f="firestore.googleapis.com",Au=!0;class Su{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_f,this.ssl=Au}else this.host=e.host,this.ssl=e.ssl??Au;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Hd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Nx)throw new O(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}h0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yf(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ji{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Su({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Su(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new t0;switch(s.type){case"firstParty":return new i0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new O(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Tu.get(t);s&&(F("ComponentProvider","Removing Datastore"),Tu.delete(t),s.terminate())})(this),Promise.resolve()}}function Jb(n,e,t,s={}){var f;n=_n(n,ji);const r=Zn(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&(rh(`https://${l}`),ih("Firestore",!0)),i.host!==_f&&i.host!==l&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...i,host:l,ssl:r,emulatorOptions:s};if(!Qt(h,a)&&(n._setSettings(h),s.mockUserToken)){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=Me.MOCK_USER;else{m=dg(s.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const x=s.mockUserToken.sub||s.mockUserToken.user_id;if(!x)throw new O(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Me(x)}n._authCredentials=new n0(new td(m,g))}}/**
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
 */class Nn{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Nn(this.firestore,e,this._query)}}class be{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(or(t,be._jsonSchema))return new be(e,s||null,new q(le.fromString(t.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:xe("string",be._jsonSchemaVersion),referencePath:xe("string")};class Gt extends Nn{constructor(e,t,s){super(e,t,pa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new q(e))}withConverter(e){return new Gt(this.firestore,e,this._path)}}function tr(n,e,...t){if(n=ye(n),nd("collection","path",e),n instanceof ji){const s=le.fromString(e,...t);return Ul(s),new Gt(n,null,s)}{if(!(n instanceof be||n instanceof Gt))throw new O(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(le.fromString(e,...t));return Ul(s),new Gt(n.firestore,null,s)}}function Ne(n,e,...t){if(n=ye(n),arguments.length===1&&(e=la.newId()),nd("doc","path",e),n instanceof ji){const s=le.fromString(e,...t);return Fl(s),new be(n,null,new q(s))}{if(!(n instanceof be||n instanceof Gt))throw new O(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(le.fromString(e,...t));return Fl(s),new be(n.firestore,n instanceof Gt?n.converter:null,new q(s))}}/**
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
 */const Nu="AsyncQueue";class Ru{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Kd(this,"async_queue_retry"),this._c=()=>{const s=yo();s&&F(Nu,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=yo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=yo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Tt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!is(e))throw e;F(Nu,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Rt("INTERNAL UNHANDLED ERROR: ",ku(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Na.createAndSchedule(this,e,t,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&z(47125,{Pc:ku(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function ku(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Di extends ji{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Ru,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ru(e),this._firestoreClient=void 0,await e}}}function Xb(n,e){const t=typeof n=="object"?n:Zo(),s=typeof n=="string"?n:Zr,r=En(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=ug("firestore");i&&Jb(r,...i)}return r}function ja(n){if(n._terminated)throw new O(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Zb(n),n._firestoreClient}function Zb(n){var s,r,i;const e=n._freezeSettings(),t=(function(l,h,f,m){return new v0(l,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,yf(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Wb(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
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
 */class Je{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Je(Pe.fromBase64String(e))}catch(t){throw new O(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Je(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Je._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(or(e,Je._jsonSchema))return Je.fromBase64String(e.bytes)}}Je._jsonSchemaVersion="firestore/bytes/1.0",Je._jsonSchema={type:xe("string",Je._jsonSchemaVersion),bytes:xe("string")};/**
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
 */class Vi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Oi{constructor(e){this._methodName=e}}/**
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
 */class _t{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_t._jsonSchemaVersion}}static fromJSON(e){if(or(e,_t._jsonSchema))return new _t(e.latitude,e.longitude)}}_t._jsonSchemaVersion="firestore/geoPoint/1.0",_t._jsonSchema={type:xe("string",_t._jsonSchemaVersion),latitude:xe("number"),longitude:xe("number")};/**
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
 */class wt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(or(e,wt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new wt(e.vectorValues);throw new O(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wt._jsonSchemaVersion="firestore/vectorValue/1.0",wt._jsonSchema={type:xe("string",wt._jsonSchemaVersion),vectorValues:xe("object")};/**
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
 */const ev=/^__.*__$/;class wf{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new An(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{Ac:n})}}class Da{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Da({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ai(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(xf(this.Ac)&&ev.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class tv{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ki(e)}Cc(e,t,s,r=!1){return new Da({Ac:e,methodName:t,Dc:s,path:ke.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bf(n){const e=n._freezeSettings(),t=ki(n._databaseId);return new tv(n._databaseId,!!e.ignoreUndefinedProperties,t)}class Mi extends Oi{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mi}}class Va extends Oi{_toFieldTransform(e){return new K0(e.path,new Xs)}isEqual(e){return e instanceof Va}}function nv(n,e,t,s){const r=n.Cc(1,e,t);Ef("Data must be an object, but it was:",r,s);const i=[],a=We.empty();rn(s,((h,f)=>{const m=Oa(e,h,t);f=ye(f);const g=r.yc(m);if(f instanceof Mi)i.push(m);else{const x=ur(f,g);x!=null&&(i.push(m),a.set(m,x))}}));const l=new rt(i);return new wf(a,l,r.fieldTransforms)}function sv(n,e,t,s,r,i){const a=n.Cc(1,e,t),l=[Cu(e,s,t)],h=[r];if(i.length%2!=0)throw new O(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let x=0;x<i.length;x+=2)l.push(Cu(e,i[x])),h.push(i[x+1]);const f=[],m=We.empty();for(let x=l.length-1;x>=0;--x)if(!av(f,l[x])){const A=l[x];let k=h[x];k=ye(k);const j=a.yc(A);if(k instanceof Mi)f.push(A);else{const C=ur(k,j);C!=null&&(f.push(A),m.set(A,C))}}const g=new rt(f);return new wf(m,g,a.fieldTransforms)}function rv(n,e,t,s=!1){return ur(t,n.Cc(s?4:3,e))}function ur(n,e){if(vf(n=ye(n)))return Ef("Unsupported field value:",e,n),iv(n,e);if(n instanceof Oi)return(function(s,r){if(!xf(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const i=[];let a=0;for(const l of s){let h=ur(l,r.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),i.push(h),a++}return{arrayValue:{values:i}}})(n,e)}return(function(s,r){if((s=ye(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return z0(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=de.fromDate(s);return{timestampValue:si(r.serializer,i)}}if(s instanceof de){const i=new de(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:si(r.serializer,i)}}if(s instanceof _t)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Je)return{bytesValue:Md(r.serializer,s._byteString)};if(s instanceof be){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wa(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof wt)return(function(a,l){return{mapValue:{fields:{[hd]:{stringValue:dd},[ei]:{arrayValue:{values:a.toArray().map((f=>{if(typeof f!="number")throw l.Sc("VectorValues must only contain numeric values.");return ga(l.serializer,f)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${xi(s)}`)})(n,e)}function iv(n,e){const t={};return id(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rn(n,((s,r)=>{const i=ur(r,e.mc(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function vf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof _t||n instanceof Je||n instanceof be||n instanceof Oi||n instanceof wt)}function Ef(n,e,t){if(!vf(t)||!sd(t)){const s=xi(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Cu(n,e,t){if((e=ye(e))instanceof Vi)return e._internalPath;if(typeof e=="string")return Oa(n,e);throw ai("Field path arguments must be of type string or ",n,!1,void 0,t)}const ov=new RegExp("[~\\*/\\[\\]]");function Oa(n,e,t){if(e.search(ov)>=0)throw ai(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vi(...e.split("."))._internalPath}catch{throw ai(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ai(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(i||a)&&(h+=" (found",i&&(h+=` in field ${s}`),a&&(h+=` in document ${r}`),h+=")"),new O(N.INVALID_ARGUMENT,l+n+h)}function av(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class If{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Li("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class cv extends If{data(){return super.data()}}function Li(n,e){return typeof e=="string"?Oa(n,e):e instanceof Vi?e._internalPath:e._delegate._internalPath}/**
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
 */function lv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ma{}class Tf extends Ma{}function ci(n,e,...t){let s=[];e instanceof Ma&&s.push(e),s=s.concat(t),(function(i){const a=i.filter((h=>h instanceof La)).length,l=i.filter((h=>h instanceof Fi)).length;if(a>1||a>0&&l>0)throw new O(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class Fi extends Tf{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Fi(e,t,s)}_apply(e){const t=this._parse(e);return Af(e._query,t),new Nn(e.firestore,e.converter,Fo(e._query,t))}_parse(e){const t=bf(e.firestore);return(function(i,a,l,h,f,m,g){let x;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new O(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){ju(g,m);const k=[];for(const j of g)k.push(Pu(h,i,j));x={arrayValue:{values:k}}}else x=Pu(h,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||ju(g,m),x=rv(l,a,g,m==="in"||m==="not-in");return we.create(f,m,x)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function li(n,e,t){const s=e,r=Li("where",n);return Fi._create(r,s,t)}class La extends Ma{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new La(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:at.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let a=r;const l=i.getFlattenedFilters();for(const h of l)Af(a,h),a=Fo(a,h)})(e._query,t),new Nn(e.firestore,e.converter,Fo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fa extends Tf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Fa(e,t)}_apply(e){const t=(function(r,i,a){if(r.startAt!==null)throw new O(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new O(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Js(i,a)})(e._query,this._field,this._direction);return new Nn(e.firestore,e.converter,(function(r,i){const a=r.explicitOrderBy.concat([i]);return new os(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)})(e._query,t))}}function uv(n,e="asc"){const t=e,s=Li("orderBy",n);return Fa._create(s,t)}function Pu(n,e,t){if(typeof(t=ye(t))=="string"){if(t==="")throw new O(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xd(e)&&t.indexOf("/")!==-1)throw new O(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(le.fromString(t));if(!q.isDocumentKey(s))throw new O(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Kl(n,new q(s))}if(t instanceof be)return Kl(n,t._key);throw new O(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xi(t)}.`)}function ju(n,e){if(!Array.isArray(n)||n.length===0)throw new O(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Af(n,e){const t=(function(r,i){for(const a of r)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new O(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class hv{convertValue(e,t="none"){switch(Zt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return rn(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[ei].arrayValue)==null?void 0:r.values)==null?void 0:i.map((a=>ge(a.doubleValue)));return new wt(t)}convertGeoPoint(e){return new _t(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ei(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ks(e));default:return null}}convertTimestamp(e){const t=Jt(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=le.fromString(e);ie($d(s),9688,{name:e});const r=new Qs(s.get(1),s.get(3)),i=new q(s.popFirst(5));return r.isEqual(t)||Rt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}class Vs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pn extends If{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Li("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=pn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}pn._jsonSchemaVersion="firestore/documentSnapshot/1.0",pn._jsonSchema={type:xe("string",pn._jsonSchemaVersion),bundleSource:xe("string","DocumentSnapshot"),bundleName:xe("string"),bundle:xe("string")};class qr extends pn{data(e={}){return super.data(e)}}class qn{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Vs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new qr(this._firestore,this._userDataWriter,s.key,s,new Vs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((l=>{const h=new qr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Vs(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const h=new qr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Vs(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let f=-1,m=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:dv(l.type),doc:h,oldIndex:f,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=qn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=la.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function dv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:n})}}/**
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
 */function Ce(n){n=_n(n,be);const e=_n(n.firestore,Di);return Qb(ja(e),n._key).then((t=>mv(e,n,t)))}qn._jsonSchemaVersion="firestore/querySnapshot/1.0",qn._jsonSchema={type:xe("string",qn._jsonSchemaVersion),bundleSource:xe("string","QuerySnapshot"),bundleName:xe("string"),bundle:xe("string")};class Sf extends hv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function ui(n){n=_n(n,Nn);const e=_n(n.firestore,Di),t=ja(e),s=new Sf(e);return lv(n._query),Yb(t,n._query).then((r=>new qn(e,s,n,r)))}function Du(n,e,t,...s){n=_n(n,be);const r=_n(n.firestore,Di),i=bf(r);let a;return a=typeof(e=ye(e))=="string"||e instanceof Vi?sv(i,"updateDoc",n._key,e,t,s):nv(i,"updateDoc",n._key,e),fv(r,[a.toMutation(n._key,At.exists(!0))])}function fv(n,e){return(function(s,r){const i=new Tt;return s.asyncQueue.enqueueAndForget((async()=>Mb(await Kb(s),r,i))),i.promise})(ja(n),e)}function mv(n,e,t){const s=t.docs.get(e._key),r=new Sf(n);return new pn(n,r,e._key,s,new Vs(t.hasPendingWrites,t.fromCache),e.converter)}function Vu(){return new Va("serverTimestamp")}(function(e,t=!0){(function(r){ss=r})(es),xt(new it("firestore",((s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),l=new Di(new s0(s.getProvider("auth-internal")),new o0(a,s.getProvider("app-check-internal")),(function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new O(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qs(f.options.projectId,m)})(a,r),a);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Ze(Vl,Ol,e),Ze(Vl,Ol,"esm2020")})();const Nf="@firebase/installations",Ua="0.6.19";/**
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
 */const Rf=1e4,kf=`w:${Ua}`,Cf="FIS_v2",pv="https://firebaseinstallations.googleapis.com/v1",gv=3600*1e3,yv="installations",_v="Installations";/**
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
 */const wv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xn=new vn(yv,_v,wv);function Pf(n){return n instanceof ct&&n.code.includes("request-failed")}/**
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
 */function jf({projectId:n}){return`${pv}/projects/${n}/installations`}function Df(n){return{token:n.token,requestStatus:2,expiresIn:bv(n.expiresIn),creationTime:Date.now()}}async function Vf(n,e){const s=(await e.json()).error;return xn.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Of({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function xv(n,{refreshToken:e}){const t=Of(n);return t.append("Authorization",vv(e)),t}async function Mf(n){const e=await n();return e.status>=500&&e.status<600?n():e}function bv(n){return Number(n.replace("s","000"))}function vv(n){return`${Cf} ${n}`}/**
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
 */async function Ev({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=jf(n),r=Of(n),i=e.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&r.append("x-firebase-client",f)}const a={fid:t,authVersion:Cf,appId:n.appId,sdkVersion:kf},l={method:"POST",headers:r,body:JSON.stringify(a)},h=await Mf(()=>fetch(s,l));if(h.ok){const f=await h.json();return{fid:f.fid||t,registrationStatus:2,refreshToken:f.refreshToken,authToken:Df(f.authToken)}}else throw await Vf("Create Installation",h)}/**
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
 */function Lf(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Iv(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Tv=/^[cdef][\w-]{21}$/,Yo="";function Av(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Sv(n);return Tv.test(t)?t:Yo}catch{return Yo}}function Sv(n){return Iv(n).substr(0,22)}/**
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
 */function Ui(n){return`${n.appName}!${n.appId}`}/**
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
 */const Ff=new Map;function Uf(n,e){const t=Ui(n);Bf(t,e),Nv(t,e)}function Bf(n,e){const t=Ff.get(n);if(t)for(const s of t)s(e)}function Nv(n,e){const t=Rv();t&&t.postMessage({key:n,fid:e}),kv()}let mn=null;function Rv(){return!mn&&"BroadcastChannel"in self&&(mn=new BroadcastChannel("[Firebase] FID Change"),mn.onmessage=n=>{Bf(n.data.key,n.data.fid)}),mn}function kv(){Ff.size===0&&mn&&(mn.close(),mn=null)}/**
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
 */const Cv="firebase-installations-database",Pv=1,bn="firebase-installations-store";let wo=null;function Ba(){return wo||(wo=hh(Cv,Pv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(bn)}}})),wo}async function hi(n,e){const t=Ui(n),r=(await Ba()).transaction(bn,"readwrite"),i=r.objectStore(bn),a=await i.get(t);return await i.put(e,t),await r.done,(!a||a.fid!==e.fid)&&Uf(n,e.fid),e}async function qf(n){const e=Ui(n),s=(await Ba()).transaction(bn,"readwrite");await s.objectStore(bn).delete(e),await s.done}async function Bi(n,e){const t=Ui(n),r=(await Ba()).transaction(bn,"readwrite"),i=r.objectStore(bn),a=await i.get(t),l=e(a);return l===void 0?await i.delete(t):await i.put(l,t),await r.done,l&&(!a||a.fid!==l.fid)&&Uf(n,l.fid),l}/**
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
 */async function qa(n){let e;const t=await Bi(n.appConfig,s=>{const r=jv(s),i=Dv(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===Yo?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function jv(n){const e=n||{fid:Av(),registrationStatus:0};return $f(e)}function Dv(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(xn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Vv(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ov(n)}:{installationEntry:e}}async function Vv(n,e){try{const t=await Ev(n,e);return hi(n.appConfig,t)}catch(t){throw Pf(t)&&t.customData.serverCode===409?await qf(n.appConfig):await hi(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Ov(n){let e=await Ou(n.appConfig);for(;e.registrationStatus===1;)await Lf(100),e=await Ou(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await qa(n);return s||t}return e}function Ou(n){return Bi(n,e=>{if(!e)throw xn.create("installation-not-found");return $f(e)})}function $f(n){return Mv(n)?{fid:n.fid,registrationStatus:0}:n}function Mv(n){return n.registrationStatus===1&&n.registrationTime+Rf<Date.now()}/**
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
 */async function Lv({appConfig:n,heartbeatServiceProvider:e},t){const s=Fv(n,t),r=xv(n,t),i=e.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&r.append("x-firebase-client",f)}const a={installation:{sdkVersion:kf,appId:n.appId}},l={method:"POST",headers:r,body:JSON.stringify(a)},h=await Mf(()=>fetch(s,l));if(h.ok){const f=await h.json();return Df(f)}else throw await Vf("Generate Auth Token",h)}function Fv(n,{fid:e}){return`${jf(n)}/${e}/authTokens:generate`}/**
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
 */async function $a(n,e=!1){let t;const s=await Bi(n.appConfig,i=>{if(!Hf(i))throw xn.create("not-registered");const a=i.authToken;if(!e&&qv(a))return i;if(a.requestStatus===1)return t=Uv(n,e),i;{if(!navigator.onLine)throw xn.create("app-offline");const l=Hv(i);return t=Bv(n,l),l}});return t?await t:s.authToken}async function Uv(n,e){let t=await Mu(n.appConfig);for(;t.authToken.requestStatus===1;)await Lf(100),t=await Mu(n.appConfig);const s=t.authToken;return s.requestStatus===0?$a(n,e):s}function Mu(n){return Bi(n,e=>{if(!Hf(e))throw xn.create("not-registered");const t=e.authToken;return zv(t)?{...e,authToken:{requestStatus:0}}:e})}async function Bv(n,e){try{const t=await Lv(n,e),s={...e,authToken:t};return await hi(n.appConfig,s),t}catch(t){if(Pf(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await qf(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await hi(n.appConfig,s)}throw t}}function Hf(n){return n!==void 0&&n.registrationStatus===2}function qv(n){return n.requestStatus===2&&!$v(n)}function $v(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+gv}function Hv(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function zv(n){return n.requestStatus===1&&n.requestTime+Rf<Date.now()}/**
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
 */async function Wv(n){const e=n,{installationEntry:t,registrationPromise:s}=await qa(e);return s?s.catch(console.error):$a(e).catch(console.error),t.fid}/**
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
 */async function Gv(n,e=!1){const t=n;return await Kv(t),(await $a(t,e)).token}async function Kv(n){const{registrationPromise:e}=await qa(n);e&&await e}/**
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
 */function Qv(n){if(!n||!n.options)throw xo("App Configuration");if(!n.name)throw xo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw xo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function xo(n){return xn.create("missing-app-config-values",{valueName:n})}/**
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
 */const zf="installations",Yv="installations-internal",Jv=n=>{const e=n.getProvider("app").getImmediate(),t=Qv(e),s=En(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Xv=n=>{const e=n.getProvider("app").getImmediate(),t=En(e,zf).getImmediate();return{getId:()=>Wv(t),getToken:r=>Gv(t,r)}};function Zv(){xt(new it(zf,Jv,"PUBLIC")),xt(new it(Yv,Xv,"PRIVATE"))}Zv();Ze(Nf,Ua);Ze(Nf,Ua,"esm2020");/**
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
 */const di="analytics",eE="firebase_id",tE="origin",nE=60*1e3,sE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ha="https://www.googletagmanager.com/gtag/js";/**
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
 */const qe=new mi("@firebase/analytics");/**
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
 */const rE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ge=new vn("analytics","Analytics",rE);/**
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
 */function iE(n){if(!n.startsWith(Ha)){const e=Ge.create("invalid-gtag-resource",{gtagURL:n});return qe.warn(e.message),""}return n}function Wf(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function oE(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function aE(n,e){const t=oE("firebase-js-sdk-policy",{createScriptURL:iE}),s=document.createElement("script"),r=`${Ha}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function cE(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function lE(n,e,t,s,r,i){const a=s[r];try{if(a)await e[a];else{const h=(await Wf(t)).find(f=>f.measurementId===r);h&&await e[h.appId]}}catch(l){qe.error(l)}n("config",r,i)}async function uE(n,e,t,s,r){try{let i=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const l=await Wf(t);for(const h of a){const f=l.find(g=>g.measurementId===h),m=f&&e[f.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",s,r||{})}catch(i){qe.error(i)}}function hE(n,e,t,s){async function r(i,...a){try{if(i==="event"){const[l,h]=a;await uE(n,e,t,l,h)}else if(i==="config"){const[l,h]=a;await lE(n,e,t,s,l,h)}else if(i==="consent"){const[l,h]=a;n("consent",l,h)}else if(i==="get"){const[l,h,f]=a;n("get",l,h,f)}else if(i==="set"){const[l]=a;n("set",l)}else n(i,...a)}catch(l){qe.error(l)}}return r}function dE(n,e,t,s,r){let i=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=hE(i,n,e,t),{gtagCore:i,wrappedGtag:window[r]}}function fE(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ha)&&t.src.includes(n))return t;return null}/**
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
 */const mE=30,pE=1e3;class gE{constructor(e={},t=pE){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Gf=new gE;function yE(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function _E(n){var a;const{appId:e,apiKey:t}=n,s={method:"GET",headers:yE(t)},r=sE.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let l="";try{const h=await i.json();(a=h.error)!=null&&a.message&&(l=h.error.message)}catch{}throw Ge.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function wE(n,e=Gf,t){const{appId:s,apiKey:r,measurementId:i}=n.options;if(!s)throw Ge.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Ge.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new vE;return setTimeout(async()=>{l.abort()},nE),Kf({appId:s,apiKey:r,measurementId:i},a,l,e)}async function Kf(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=Gf){var l;const{appId:i,measurementId:a}=n;try{await xE(s,e)}catch(h){if(a)return qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:i,measurementId:a};throw h}try{const h=await _E(n);return r.deleteThrottleMetadata(i),h}catch(h){const f=h;if(!bE(f)){if(r.deleteThrottleMetadata(i),a)return qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:i,measurementId:a};throw h}const m=Number((l=f==null?void 0:f.customData)==null?void 0:l.httpStatus)===503?il(t,r.intervalMillis,mE):il(t,r.intervalMillis),g={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return r.setThrottleMetadata(i,g),qe.debug(`Calling attemptFetch again in ${m} millis`),Kf(n,g,s,r)}}function xE(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s(Ge.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function bE(n){if(!(n instanceof ct)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class vE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function EE(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const i=await e,a={...s,send_to:i};n("event",t,a)}}async function IE(n,e,t,s){if(s&&s.global){const r={};for(const i of Object.keys(t))r[`user_properties.${i}`]=t[i];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
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
 */async function TE(){if(ah())try{await ch()}catch(n){return qe.warn(Ge.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return qe.warn(Ge.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function AE(n,e,t,s,r,i,a){const l=wE(n);l.then(x=>{t[x.measurementId]=x.appId,n.options.measurementId&&x.measurementId!==n.options.measurementId&&qe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>qe.error(x)),e.push(l);const h=TE().then(x=>{if(x)return s.getId()}),[f,m]=await Promise.all([l,h]);fE(i)||aE(i,f.measurementId),r("js",new Date);const g=(a==null?void 0:a.config)??{};return g[tE]="firebase",g.update=!0,m!=null&&(g[eE]=m),r("config",f.measurementId,g),f.measurementId}/**
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
 */class SE{constructor(e){this.app=e}_delete(){return delete $n[this.app.options.appId],Promise.resolve()}}let $n={},Lu=[];const Fu={};let bo="dataLayer",NE="gtag",Uu,za,Bu=!1;function RE(){const n=[];if(oh()&&n.push("This is a browser extension environment."),bg()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=Ge.create("invalid-analytics-context",{errorInfo:e});qe.warn(t.message)}}function kE(n,e,t){RE();const s=n.options.appId;if(!s)throw Ge.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ge.create("no-api-key");if($n[s]!=null)throw Ge.create("already-exists",{id:s});if(!Bu){cE(bo);const{wrappedGtag:i,gtagCore:a}=dE($n,Lu,Fu,bo,NE);za=i,Uu=a,Bu=!0}return $n[s]=AE(n,Lu,Fu,e,Uu,bo,t),new SE(n)}function CE(n=Zo()){n=ye(n);const e=En(n,di);return e.isInitialized()?e.getImmediate():PE(n)}function PE(n,e={}){const t=En(n,di);if(t.isInitialized()){const r=t.getImmediate();if(Qt(e,t.getOptions()))return r;throw Ge.create("already-initialized")}return t.initialize({options:e})}function jE(n,e,t){n=ye(n),IE(za,$n[n.app.options.appId],e,t).catch(s=>qe.error(s))}function DE(n,e,t,s){n=ye(n),EE(za,$n[n.app.options.appId],e,t,s).catch(r=>qe.error(r))}const qu="@firebase/analytics",$u="0.10.19";function VE(){xt(new it(di,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return kE(s,r,t)},"PUBLIC")),xt(new it("analytics-internal",n,"PRIVATE")),Ze(qu,$u),Ze(qu,$u,"esm2020");function n(e){try{const t=e.getProvider(di).getImmediate();return{logEvent:(s,r,i)=>DE(t,s,r,i),setUserProperties:(s,r)=>jE(t,s,r)}}catch(t){throw Ge.create("interop-component-reg-failed",{reason:t})}}}VE();const Jo={apiKey:"AIzaSyBkMktbTfBNIdhtBwCC_cRBEavKeuTyCGA",authDomain:"myschola-5ec1f.firebaseapp.com",projectId:"myschola-5ec1f",storageBucket:"myschola-5ec1f.appspot.com",messagingSenderId:"927860875256",appId:"1:927860875256:web:ce73f8eabd09cac6f3400d",measurementId:"G-XTC703H7RN"};if(!Jo.apiKey||!Jo.projectId)throw console.error("Firebase configuration is missing. Please check your .env file."),new Error("Firebase configuration error");const Wa=dh(Jo),et=Zw(Wa),fe=Xb(Wa);CE(Wa);function OE(){const[n,e]=P.useState(""),[t,s]=P.useState(!1),[r,i]=P.useState(!0),a=nn(),l=Xn(),h=async m=>{var k,j;if((await Ce(Ne(fe,"admins",m))).exists())return a("/admin",{replace:!0}),!0;if((await Ce(Ne(fe,"teachers",m))).exists())return a("/admin",{replace:!0}),!0;if((await Ce(Ne(fe,"students",m))).exists()){const C=((j=(k=l.state)==null?void 0:k.from)==null?void 0:j.pathname)||"/app/dashboard";return a(C,{replace:!0}),!0}return!1};P.useEffect(()=>{(async()=>{try{await et.signOut()}catch(g){console.error("Error signing out existing session:",g)}finally{i(!1)}})()},[]);const f=async m=>{m.preventDefault(),e(""),s(!0);const g=new FormData(m.currentTarget),x=g.get("email"),A=g.get("password");try{console.log("Attempting to sign in with email:",x);const j=(await F_(et,x,A)).user;console.log("Sign in successful. User UID:",j.uid),await h(j.uid)||(console.error("No role document found for UID:",j.uid),await et.signOut(),e("Profile not found. Please contact your administrator."))}catch(k){console.error(k),k.code==="auth/invalid-email"?e("Please enter a valid email address."):k.code==="auth/user-not-found"?e("No account found with this email. Please contact your teacher to create an account."):k.code==="auth/wrong-password"?e("Incorrect password. Please try again."):k.code==="auth/invalid-credential"?e("Invalid email or password. Please try again."):e(k.message||"Failed to sign in. Please try again.")}finally{s(!1)}};return r?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Checking authentication..."})]})}):c.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[c.jsx("div",{className:"flex justify-center",children:c.jsxs(Xe,{to:"/",className:"flex items-center",children:[c.jsx(Hn,{className:"h-12 w-12 text-blue-600"}),c.jsx("span",{className:"ml-2 text-3xl font-bold text-gray-900",children:"MySchola"})]})}),c.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"}),c.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Students: Use the email and password provided by your teacher"})]}),c.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:c.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[c.jsxs("form",{className:"space-y-6",onSubmit:f,children:[n&&c.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative",role:"alert",children:c.jsx("span",{className:"block sm:inline",children:n})}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),c.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:c.jsx(Ju,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),c.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"you@example.com"})]})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),c.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:c.jsx(Yu,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),c.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"********"})]})]}),c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),c.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),c.jsx("div",{className:"text-sm",children:c.jsx("a",{href:"#",className:"font-medium text-blue-600 hover:text-blue-500",children:"Forgot your password?"})})]}),c.jsx("div",{children:c.jsx("button",{type:"submit",disabled:t,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed",children:t?"Please wait...":"Sign in"})})]}),c.jsx("div",{className:"mt-6",children:c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"absolute inset-0 flex items-center",children:c.jsx("div",{className:"w-full border-t border-gray-300"})}),c.jsx("div",{className:"relative flex justify-center text-sm",children:c.jsx("span",{className:"px-2 bg-white text-gray-500",children:c.jsxs(Xe,{to:"/",className:"flex items-center hover:text-gray-900 transition",children:[c.jsx(Kt,{className:"h-4 w-4 mr-1"}),"Back to Home"]})})})]})})]})})]})}function vo({children:n}){const[e,t]=P.useState(!0),[s,r]=P.useState(!1),[i,a]=P.useState(!1),l=Xn();return P.useEffect(()=>{const h=yi(et,async f=>{if(f)try{(await Ce(Ne(fe,"students",f.uid))).exists()?(r(!0),a(!0)):(r(!1),a(!1))}catch(m){console.error("Error checking student status:",m),r(!1),a(!1)}else r(!1),a(!1);t(!1)});return()=>h()},[]),e?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Loading..."})]})}):!s||!i?c.jsx(Tm,{to:"/login",state:{from:l},replace:!0}):n}const ME=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?Gm:e.includes("english")||e.includes("literature")||e.includes("language")?Hm:e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?ap:e.includes("geography")||e.includes("geography")?lp:e.includes("history")?dp:e.includes("music")?Ep:e.includes("art")||e.includes("design")?Tp:e.includes("language")||e.includes("french")||e.includes("spanish")||e.includes("german")?mp:e.includes("computer")||e.includes("ict")||e.includes("it")?Um:Hn},LE=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?"bg-blue-50 border-blue-200 text-blue-700":e.includes("english")||e.includes("literature")||e.includes("language")?"bg-purple-50 border-purple-200 text-purple-700":e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?"bg-green-50 border-green-200 text-green-700":e.includes("geography")?"bg-cyan-50 border-cyan-200 text-cyan-700":e.includes("history")?"bg-amber-50 border-amber-200 text-amber-700":e.includes("music")?"bg-pink-50 border-pink-200 text-pink-700":e.includes("art")||e.includes("design")?"bg-rose-50 border-rose-200 text-rose-700":"bg-gray-50 border-gray-200 text-gray-700"},Qf="subjectAccess",FE=()=>{try{const n=localStorage.getItem(Qf),e=n?JSON.parse(n):[];return Array.isArray(e)?e:[]}catch{return[]}},UE=n=>{localStorage.setItem(Qf,JSON.stringify(n))},Hu=n=>(n==null?void 0:n.pin)||(n==null?void 0:n.accessPin)||"";function BE(){const n=nn(),[e,t]=P.useState(null),[s,r]=P.useState([]),[i,a]=P.useState(!0),[l,h]=P.useState(""),[f,m]=P.useState(null),[g,x]=P.useState(FE()),[A,k]=P.useState(null),[j,C]=P.useState(""),[M,D]=P.useState("");P.useEffect(()=>{(async()=>{try{const w=et.currentUser;if(!w){n("/login");return}const E=await Ce(Ne(fe,"students",w.uid));if(!E.exists()){h("Student profile not found"),a(!1);return}const b=E.data();if(t(b),console.log("Student data:",b),console.log("Student subjects array:",b.subjects),b.subjects&&b.subjects.length>0){const _=(await Promise.all(b.subjects.map(async W=>{try{const ne=await Ce(Ne(fe,"subjects",W));return ne.exists()?{id:ne.id,...ne.data()}:(console.warn(`Subject document not found for ID: ${W}`),null)}catch(ne){return console.error(`Error fetching subject ${W}:`,ne),null}}))).filter(W=>W!==null);console.log("Loaded subjects:",_),console.log("Expected subjects:",b.subjects),console.log("Missing subjects:",b.subjects.filter(W=>!_.some(ne=>ne.id===W))),r(_),_.length!==b.subjects.length&&m({expected:b.subjects.length,loaded:_.length,missing:b.subjects.filter(W=>!_.some(ne=>ne.id===W))})}else console.log("No subjects array found in student data");a(!1)}catch(w){console.error("Error loading student data:",w),h("Failed to load dashboard data"),a(!1)}})()},[n]);const U=y=>!String(Hu(y)||"").trim()||g.includes(y.id),Y=y=>{k(y),C(""),D("")},L=y=>{const w=String(Hu(y)||"").trim();if(w&&j.trim()!==w){D("Incorrect PIN");return}const E=Array.from(new Set([...g,y.id]));x(E),UE(E),k(null),C(""),D("")},$=()=>{k(null),C(""),D("")},v=async()=>{try{await q_(et),n("/login",{replace:!0})}catch(y){console.error("Error signing out:",y)}};return i?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",role:"status","aria-live":"polite",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto","aria-hidden":"true"}),c.jsx("p",{className:"mt-4 text-gray-600","aria-label":"Loading dashboard",children:"Loading your dashboard..."})]})}):l?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("p",{className:"text-red-600 mb-4",children:l}),c.jsx("button",{onClick:v,className:"text-blue-600 hover:text-blue-700 underline",children:"Sign out and try again"})]})}):c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx("header",{className:"bg-white shadow-sm",role:"banner",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx($r,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),c.jsxs("div",{children:[c.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"MySchola Student Dashboard"}),c.jsxs("p",{className:"text-sm text-gray-500",children:["Hi, ",c.jsx("span",{className:"font-medium",children:(e==null?void 0:e.name)||"Student"})]})]})]}),c.jsxs("nav",{className:"flex items-center gap-3","aria-label":"Dashboard navigation",children:[c.jsx(Xe,{to:"/",className:"text-sm text-gray-600 hover:text-gray-900 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition","aria-label":"Return to homepage",children:"Back to site"}),c.jsxs("button",{onClick:v,className:"inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition","aria-label":"Sign out of your account",children:[c.jsx(yp,{className:"h-4 w-4","aria-hidden":"true"}),"Sign out"]})]})]})}),c.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"mb-8",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Your Subjects"}),c.jsx("p",{className:"text-gray-600",children:"Select a subject to join Zoom sessions, watch recordings, or download homework."})]}),f&&c.jsxs("div",{className:"mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4",role:"alert","aria-live":"polite",children:[c.jsx("p",{className:"text-sm text-yellow-800 font-medium mb-1",children:"Some subjects may not be loading correctly"}),c.jsxs("p",{className:"text-xs text-yellow-700",children:["Expected ",f.expected," subject(s), loaded ",f.loaded,". Please check the browser console for details."]})]}),s.length===0?c.jsxs("div",{className:"bg-white rounded-lg shadow p-8 text-center",role:"region","aria-labelledby":"no-subjects-heading",children:[c.jsx($r,{className:"h-12 w-12 text-gray-400 mx-auto mb-4","aria-hidden":"true"}),c.jsx("h3",{id:"no-subjects-heading",className:"text-lg font-semibold text-gray-900 mb-2",children:"No Subjects Enrolled"}),c.jsx("p",{className:"text-gray-600 mb-2",children:"You're not enrolled in any subjects yet."}),c.jsx("p",{className:"text-sm text-gray-500",children:"Please contact your teacher to get enrolled."})]}):c.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",role:"list","aria-label":"Enrolled subjects",children:s.map(y=>{const w=ME(y.name),E=LE(y.name);return c.jsxs("article",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",role:"listitem",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[c.jsx("div",{className:`p-2 rounded-lg ${E}`,children:c.jsx(w,{className:"h-6 w-6","aria-hidden":"true"})}),c.jsx("h3",{className:"text-xl font-semibold text-gray-900 flex-1",children:y.name})]}),c.jsx("div",{className:"space-y-3",children:U(y)?c.jsxs(c.Fragment,{children:[y.zoomLink&&c.jsxs("a",{href:y.zoomLink,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`Join Zoom session for ${y.name}`,children:[c.jsx(rp,{className:"h-4 w-4","aria-hidden":"true"}),"Join Zoom"]}),c.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[c.jsxs(Xe,{to:`/app/subject/${y.id}/recordings`,className:"flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`View recordings for ${y.name}`,children:[c.jsx($s,{className:"h-4 w-4","aria-hidden":"true"}),"Recordings"]}),c.jsxs(Xe,{to:`/app/subject/${y.id}/homework`,className:"flex items-center justify-center gap-2 text-green-600 hover:text-green-700 px-4 py-2 border border-green-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition font-medium","aria-label":`View homework for ${y.name}`,children:[c.jsx(qs,{className:"h-4 w-4","aria-hidden":"true"}),"Homework"]})]})]}):c.jsxs("div",{className:"space-y-3",children:[c.jsx("p",{className:"text-sm text-gray-600",children:"This subject is locked. Enter the PIN to unlock."}),A===y.id?c.jsxs("div",{className:"space-y-2",children:[c.jsx("input",{type:"password",value:j,onChange:b=>C(b.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Subject PIN"}),M&&c.jsx("p",{className:"text-sm text-red-600",children:M}),c.jsxs("div",{className:"flex flex-wrap gap-2",children:[c.jsx("button",{type:"button",onClick:()=>L(y),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Unlock"}),c.jsx("button",{type:"button",onClick:$,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Cancel"})]})]}):c.jsx("button",{type:"button",onClick:()=>Y(y.id),className:"w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Enter PIN"})]})})]},y.id)})})]})]})}const Yf="subjectAccess",qE=()=>{try{const n=localStorage.getItem(Yf),e=n?JSON.parse(n):[];return Array.isArray(e)?e:[]}catch{return[]}},$E=n=>{localStorage.setItem(Yf,JSON.stringify(n))},HE=n=>(n==null?void 0:n.pin)||(n==null?void 0:n.accessPin)||"";function zE(){const{subjectId:n}=Gu(),e=nn(),[t,s]=P.useState([]),[r,i]=P.useState([]),[a,l]=P.useState(null),[h,f]=P.useState(!0),[m,g]=P.useState(""),[x,A]=P.useState(!1),[k,j]=P.useState(""),[C,M]=P.useState(""),[D,U]=P.useState(""),[Y,L]=P.useState(qE()),[$,v]=P.useState(0);P.useEffect(()=>{const I=async()=>{try{if(!et.currentUser){e("/login");return}const W=Ne(fe,"subjects",n),ne=await Ce(W);if(ne.exists()){const ue={id:n,...ne.data()};l(ue);const $e=HE(ue);if(U($e),!(!$e||Y.includes(n))){A(!0),f(!1);return}}let Ke;try{Ke=ci(tr(fe,"recordings"),li("subjectId","==",n),uv("date","desc"))}catch(ue){console.warn("OrderBy failed, using simple query:",ue),Ke=ci(tr(fe,"recordings"),li("subjectId","==",n))}const Qe=(await ui(Ke)).docs.map(ue=>({id:ue.id,...ue.data()})).filter(ue=>ue.approvalStatus==="approved"||!ue.approvalStatus).sort((ue,$e)=>{var lt,ut;const vt=(lt=ue.date)!=null&&lt.toDate?ue.date.toDate():ue.date?new Date(ue.date):new Date(0);return((ut=$e.date)!=null&&ut.toDate?$e.date.toDate():$e.date?new Date($e.date):new Date(0))-vt});s(Qe),i(Qe),A(!1),f(!1)}catch(_){console.error("Error loading recordings:",_),g("Failed to load recordings"),f(!1)}};n&&(f(!0),g(""),I())},[n,e,Y,$]);const y=I=>{I.preventDefault();const _=String(D||"").trim();if(!_){A(!1);return}if(k.trim()!==_){M("Incorrect PIN");return}const W=Array.from(new Set([...Y,n]));L(W),$E(W),j(""),M(""),A(!1),v(ne=>ne+1)},w=()=>{var _;return a?(((_=a.name)==null?void 0:_.toLowerCase())||"").includes("english"):!1},E=()=>{const I={};return r.forEach(_=>{const W=_.examBoard||"Other",ne=_.tier||(w()?"General":"Other"),Ke=`${W}_${ne}`;I[Ke]||(I[Ke]={examBoard:W,tier:ne,recordings:[]}),I[Ke].recordings.push(_)}),Object.values(I).sort((_,W)=>_.examBoard!==W.examBoard?_.examBoard==="AQA"?-1:W.examBoard==="AQA"?1:_.examBoard==="Edexcel"?-1:W.examBoard==="Edexcel"?1:_.examBoard.localeCompare(W.examBoard):_.tier==="Foundation"?-1:W.tier==="Foundation"?1:_.tier==="Higher"?-1:W.tier==="Higher"?1:_.tier.localeCompare(W.tier))},b=I=>I?(I.toDate?I.toDate():new Date(I)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"Date not available";return h?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Loading recordings..."})]})}):x?c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs(Xe,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[c.jsx(Kt,{className:"h-4 w-4"}),"Back to Dashboard"]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsx("h1",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Enter Subject PIN"}),c.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"This subject is locked. Enter the PIN to access recordings."}),c.jsxs("form",{onSubmit:y,className:"space-y-4",children:[c.jsx("input",{type:"password",value:k,onChange:I=>j(I.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Subject PIN",autoFocus:!0}),C&&c.jsx("div",{className:"text-sm text-red-600",children:C}),c.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"Unlock Subject"})]})]})]})}):c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs(Xe,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[c.jsx(Kt,{className:"h-4 w-4"}),"Back to Dashboard"]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[c.jsx($s,{className:"h-6 w-6 text-blue-600"}),c.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Recordings - ",(a==null?void 0:a.name)||"Subject"]})]}),c.jsx("p",{className:"text-gray-600",children:"Watch past lesson recordings for this subject."})]}),m&&c.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6",children:m}),r.length===0?c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[c.jsx($s,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),c.jsx("p",{className:"text-gray-600",children:"No recordings available yet."}),c.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Check back later for new recordings."})]}):c.jsx("div",{className:"space-y-6",children:E().map((I,_)=>c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",children:[c.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 px-6 py-4",children:c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx($r,{className:"h-5 w-5 text-blue-600"}),c.jsxs("div",{children:[c.jsxs("h3",{className:"text-lg font-semibold text-gray-900",children:[I.examBoard,!w()&&I.tier&&c.jsxs("span",{className:"ml-2 text-base font-normal text-gray-600",children:["- ",I.tier]})]}),c.jsxs("p",{className:"text-sm text-gray-600",children:[I.recordings.length," recording",I.recordings.length!==1?"s":""]})]})]})}),c.jsx("div",{className:"p-6 space-y-4",children:I.recordings.map(W=>c.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:c.jsxs("div",{className:"flex items-start justify-between",children:[c.jsxs("div",{className:"flex-1",children:[c.jsx("h4",{className:"text-base font-semibold text-gray-900 mb-2",children:W.title}),c.jsx("p",{className:"text-sm text-gray-500",children:b(W.date)})]}),c.jsxs("a",{href:W.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"ml-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap",children:[c.jsx(Rp,{className:"h-4 w-4"}),"Watch"]})]})},W.id))})]},_))})]})})}function WE(){const{subjectId:n}=Gu(),[e,t]=P.useState([]),[s,r]=P.useState(null),[i,a]=P.useState(!0),[l,h]=P.useState(null);P.useEffect(()=>{n&&(async()=>{try{const x=Ne(fe,"subjects",n),A=await Ce(x);A.exists()&&r({id:n,...A.data()});const k=ci(tr(fe,"homeworks"),li("subjectId","==",n)),C=(await ui(k)).docs.map(M=>({id:M.id,...M.data()}));t(C),a(!1)}catch(x){console.error("Error loading homework:",x),a(!1)}})()},[n]);const f=g=>g?(g.toDate?g.toDate():new Date(g)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"No due date",m=g=>g?(g.toDate?g.toDate():new Date(g))<new Date:!1;return i?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Loading homework..."})]})}):c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs(Xe,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[c.jsx(Kt,{className:"h-4 w-4"}),"Back to Dashboard"]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[c.jsx(qs,{className:"h-6 w-6 text-green-600"}),c.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Homework - ",(s==null?void 0:s.name)||"Subject"]})]}),c.jsx("p",{className:"text-gray-600",children:"Download your homework assignments."})]}),l?c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsxs("div",{className:"flex items-center justify-between mb-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:l.title}),c.jsx("button",{onClick:()=>{h(null)},className:"text-gray-600 hover:text-gray-900",children:"Close"})]}),l.description&&c.jsx("p",{className:"text-gray-600 mb-6",children:l.description}),c.jsxs("p",{className:"text-sm text-gray-500 mb-6",children:["Due: ",f(l.dueDate)]}),l.attachmentUrl&&c.jsxs("a",{href:l.attachmentUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6",children:[c.jsx(Wc,{className:"h-5 w-5"}),"Download ",l.attachmentName||"homework file"]}),!l.attachmentUrl&&c.jsx("p",{className:"text-gray-600",children:"No homework file attached."})]}):c.jsx("div",{className:"space-y-4",children:e.length===0?c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[c.jsx(qs,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),c.jsx("p",{className:"text-gray-600",children:"No homework assignments available yet."})]}):e.map(g=>{const x=m(g.dueDate);return c.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:c.jsxs("div",{className:"flex items-start justify-between mb-4",children:[c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:g.title}),g.description&&c.jsx("p",{className:"text-gray-600 mb-2",children:g.description}),g.attachmentUrl&&c.jsxs("a",{href:g.attachmentUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-2",children:[c.jsx(Wc,{className:"h-4 w-4"}),"Download ",g.attachmentName||"homework file"]}),c.jsx("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsx(Qu,{className:"h-4 w-4"}),"Due: ",f(g.dueDate)]})}),x&&c.jsx("div",{className:"mt-3 text-red-600 text-sm font-medium",children:"Overdue"})]}),c.jsx("button",{onClick:()=>h(g),className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"View Details"})]})},g.id)})})]})})}const GE="myschola-5ec1f",KE=`https://us-central1-${GE}.cloudfunctions.net`,zu=KE,QE=async()=>{const n=et.currentUser;if(!n)throw new Error("User is not authenticated");return n.getIdToken()},Ga=async(n,e)=>{if(!zu)throw new Error("Functions base URL is not configured");const t=await QE(),s=await fetch(`${zu}/${n}`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(e||{})});if(!s.ok){const r=await s.text();throw new Error(r||`Request failed (${s.status})`)}return s.json()},Wu=n=>Ga("createHidriveUpload",n),YE=n=>Ga("createRecording",n),JE=n=>Ga("createHomework",n);function XE(){const n=nn(),[e,t]=P.useState(!1),[s,r]=P.useState(!0),[i,a]=P.useState([]),[l,h]=P.useState(""),[f,m]=P.useState(null),[g,x]=P.useState("recording"),[A,k]=P.useState(""),[j,C]=P.useState(null),[M,D]=P.useState(0),[U,Y]=P.useState(""),[L,$]=P.useState(""),[v,y]=P.useState([]),[w,E]=P.useState(""),[b,I]=P.useState(""),[_,W]=P.useState(""),[ne,Ke]=P.useState(null),[Rn,Qe]=P.useState(0),[ue,$e]=P.useState(!1),[vt,ve]=P.useState("");P.useEffect(()=>{const B=yi(et,async G=>{if(!G){t(!1),r(!1),n("/login",{replace:!0});return}try{const re=await Ce(Ne(fe,"admins",G.uid)),oe=re.exists()?null:await Ce(Ne(fe,"teachers",G.uid));re.exists()||oe!=null&&oe.exists()?t(!0):(t(!1),n("/login",{replace:!0}))}catch(re){console.error("Error verifying role:",re),t(!1),n("/login",{replace:!0})}finally{r(!1)}});return()=>B()},[n]),P.useEffect(()=>{e&&(async()=>{try{const re=(await ui(tr(fe,"subjects"))).docs.map(oe=>({id:oe.id,...oe.data()}));if(a(re),re.length>0){const oe=re[0];h(oe.id),m(oe)}}catch(G){console.error("Error loading subjects:",G)}})()},[e]),P.useEffect(()=>{(async()=>{if(g==="approve"&&e)try{const G=ci(tr(fe,"recordings"),li("approvalStatus","==","pending")),re=await ui(G),oe=await Promise.all(re.docs.map(async je=>{const ce=je.data();let Te="Unknown";if(ce.subjectId)try{const De=await Ce(je(fe,"subjects",ce.subjectId));De.exists()&&(Te=De.data().name)}catch(De){console.error("Error fetching subject:",De)}return{id:je.id,...ce,subjectName:Te}}));y(oe)}catch(G){console.error("Error loading pending recordings:",G)}})()},[g,e]),P.useEffect(()=>{const B=i.find(G=>G.id===l);m(B||null),Y(""),$("")},[l,i]);const lt=()=>{var G;return f?(((G=f.name)==null?void 0:G.toLowerCase())||"").includes("english"):!1},ut=(B,G,re)=>new Promise((oe,je)=>{if(!(G!=null&&G.uploadUrl)){je(new Error("Upload URL is missing"));return}const ce=new XMLHttpRequest;ce.open(G.method||"PUT",G.uploadUrl,!0),ce.responseType="json",G.headers&&Object.entries(G.headers).forEach(([Te,De])=>{De&&ce.setRequestHeader(Te,De)}),ce.upload.onprogress=Te=>{if(Te.lengthComputable){const De=Math.round(Te.loaded/Te.total*100);re&&re(De)}},ce.onload=()=>{if(ce.status>=200&&ce.status<300){re&&re(100);let Te=ce.response;if(!Te&&ce.responseText)try{Te=JSON.parse(ce.responseText)}catch{Te=null}oe({response:Te})}else je(new Error(`Upload failed (${ce.status})`))},ce.onerror=()=>{je(new Error("Upload failed"))},ce.send(B)}),cs=async B=>{if(B.preventDefault(),!l||!A||!U){ve("Please fill in all required fields");return}if(!j){ve("Please upload a video file to continue");return}if(!lt()&&!L){ve("Please select a tier (Foundation or Higher)");return}$e(!0),ve("");try{D(0);const G=await Wu({subjectId:l,fileName:j.name,contentType:j.type,uploadType:"recording"}),re=await ut(j,G,D),oe=re==null?void 0:re.response,je=(oe==null?void 0:oe.id)||(oe==null?void 0:oe.pid)||(oe==null?void 0:oe.file_id)||null,ce={subjectId:l,title:A,examBoard:U,tier:lt()?null:L,hidrivePath:G.hidrivePath,hidriveFileId:je,fileName:j.name};sessionStorage.setItem("pendingRecording",JSON.stringify(ce)),k(""),C(null),D(0),Y(""),$(""),n("/admin/share-link",{state:{pendingRecording:ce}})}catch(G){console.error("Error adding recording:",G),ve("Failed to upload recording"),D(0)}finally{$e(!1)}},ls=async B=>{try{await Du(Ne(fe,"recordings",B),{approvalStatus:"approved",approvedAt:Vu()}),y(v.filter(G=>G.id!==B)),ve("Recording approved successfully!"),setTimeout(()=>ve(""),3e3)}catch(G){console.error("Error approving recording:",G),ve("Failed to approve recording")}},us=async B=>{try{await Du(Ne(fe,"recordings",B),{approvalStatus:"rejected",rejectedAt:Vu()}),y(v.filter(G=>G.id!==B)),ve("Recording rejected"),setTimeout(()=>ve(""),3e3)}catch(G){console.error("Error rejecting recording:",G),ve("Failed to reject recording")}},hs=async B=>{if(B.preventDefault(),!l||!w){ve("Please fill in all required fields");return}if(!ne){ve("Please upload a homework file");return}$e(!0),ve("");try{let G=null,re=null,oe=null,je=null,ce=null;if(ne){Qe(0);const De=await Wu({subjectId:l,fileName:ne.name,contentType:ne.type,uploadType:"homework"}),on=await ut(ne,De,Qe),Ye=on==null?void 0:on.response;re=(Ye==null?void 0:Ye.id)||(Ye==null?void 0:Ye.pid)||(Ye==null?void 0:Ye.file_id)||null,G=De.hidrivePath,oe=ne.name,je=ne.type,ce=ne.size}const Te={subjectId:l,title:w,description:b,dueDate:_?new Date(_).toISOString():null,attachmentName:oe,attachmentContentType:je,attachmentSize:ce,hidrivePath:G,hidriveFileId:re,fileName:ne.name};sessionStorage.setItem("pendingHomework",JSON.stringify(Te)),E(""),I(""),W(""),Ke(null),Qe(0),n("/admin/homework-share-link",{state:{pendingHomework:Te}})}catch(G){console.error("Error adding homework:",G),ve("Failed to add homework")}finally{$e(!1)}};return s?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):e?c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Admin Panel"}),c.jsx("button",{onClick:async()=>{await et.signOut(),n("/login",{replace:!0})},className:"text-gray-600 hover:text-gray-900 underline text-sm",children:"Sign out"})]})}),c.jsxs("div",{className:"flex gap-2 mb-6 flex-wrap",children:[c.jsxs("button",{onClick:()=>x("recording"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${g==="recording"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[c.jsx($s,{className:"h-4 w-4"}),"Add Recording"]}),c.jsxs("button",{onClick:()=>x("homework"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${g==="homework"?"bg-green-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[c.jsx(qs,{className:"h-4 w-4"}),"Add Homework"]}),c.jsxs("button",{onClick:()=>x("approve"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition relative ${g==="approve"?"bg-purple-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[c.jsx(Pr,{className:"h-4 w-4"}),"Approve Recordings",v.length>0&&c.jsx("span",{className:"ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5",children:v.length})]})]}),vt&&c.jsx("div",{className:`mb-6 p-4 rounded-lg ${vt.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:vt}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Select Subject"}),c.jsx("select",{value:l,onChange:B=>h(B.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:i.map(B=>c.jsx("option",{value:B.id,children:B.name},B.id))})]}),g==="recording"&&c.jsxs("form",{onSubmit:cs,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Recording"}),c.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Recordings will be pending approval before students can view them."}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),c.jsx("input",{type:"text",value:A,onChange:B=>k(B.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"e.g., Algebra Basics - Lesson 1",required:!0})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Exam Board *"}),c.jsxs("select",{value:U,onChange:B=>Y(B.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[c.jsx("option",{value:"",children:"Select Exam Board"}),c.jsx("option",{value:"AQA",children:"AQA"}),c.jsx("option",{value:"Edexcel",children:"Edexcel"})]})]}),!lt()&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Tier *"}),c.jsxs("select",{value:L,onChange:B=>$(B.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[c.jsx("option",{value:"",children:"Select Tier"}),c.jsx("option",{value:"Foundation",children:"Foundation"}),c.jsx("option",{value:"Higher",children:"Higher"})]})]}),lt()&&c.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:c.jsx("p",{className:"text-sm text-blue-800",children:"English subjects do not have Foundation/Higher tiers."})}),c.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700",children:"After upload, you will be taken to a new page to paste the HiDrive share link."}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Upload Video File"}),c.jsx("input",{type:"file",accept:"video/*",onChange:B=>{var re;const G=((re=B.target.files)==null?void 0:re[0])||null;C(G),D(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),M>0&&M<100&&c.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",M,"%"]})]})]}),c.jsxs("button",{type:"submit",disabled:ue,className:"mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[c.jsx(Gc,{className:"h-4 w-4"}),ue?"Adding...":"Add Recording (Pending Approval)"]})]}),g==="approve"&&c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Approve Recordings"}),c.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Review and approve pending recordings. Only approved recordings will be visible to students."}),v.length===0?c.jsxs("div",{className:"text-center py-8",children:[c.jsx(Pr,{className:"h-12 w-12 text-green-500 mx-auto mb-4"}),c.jsx("p",{className:"text-gray-600",children:"No pending recordings to approve."})]}):c.jsx("div",{className:"space-y-4",children:v.map(B=>c.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:c.jsxs("div",{className:"flex items-start justify-between",children:[c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:B.title}),c.jsxs("div",{className:"space-y-1 text-sm text-gray-600",children:[c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Subject:"})," ",B.subjectName]}),c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",B.examBoard]}),B.tier&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Tier:"})," ",B.tier]}),B.date&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Date:"})," ",B.date.toDate?B.date.toDate().toLocaleDateString("en-GB"):"N/A"]})]}),c.jsxs("a",{href:B.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm mt-2",children:[c.jsx($s,{className:"h-4 w-4"}),"Preview Video"]})]}),c.jsxs("div",{className:"flex gap-2 ml-4",children:[c.jsxs("button",{onClick:()=>ls(B.id),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2",children:[c.jsx(Pr,{className:"h-4 w-4"}),"Approve"]}),c.jsx("button",{onClick:()=>us(B.id),className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition",children:"Reject"})]})]})},B.id))})]}),g==="homework"&&c.jsxs("form",{onSubmit:hs,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Homework"}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),c.jsx("input",{type:"text",value:w,onChange:B=>E(B.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",required:!0})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Description"}),c.jsx("textarea",{value:b,onChange:B=>I(B.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",rows:"3"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Due Date"}),c.jsx("input",{type:"datetime-local",value:_,onChange:B=>W(B.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Homework File *"}),c.jsx("input",{type:"file",required:!0,onChange:B=>{var re;const G=((re=B.target.files)==null?void 0:re[0])||null;Ke(G),Qe(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"}),Rn>0&&Rn<100&&c.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",Rn,"%"]})]}),c.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700",children:"After upload, you will be taken to a new page to paste the HiDrive share link."})]}),c.jsxs("button",{type:"submit",disabled:ue,className:"mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[c.jsx(Gc,{className:"h-4 w-4"}),ue?"Adding...":"Add Homework"]})]})]})}):null}const Eo="pendingRecording";function ZE(){const n=nn(),e=Xn(),[t,s]=P.useState(!0),[r,i]=P.useState(!1),[a,l]=P.useState(null),[h,f]=P.useState(""),[m,g]=P.useState(""),[x,A]=P.useState(""),[k,j]=P.useState(!1);P.useEffect(()=>{const M=yi(et,async D=>{if(!D){i(!1),s(!1),n("/login",{replace:!0});return}try{const U=await Ce(Ne(fe,"admins",D.uid)),Y=U.exists()?null:await Ce(Ne(fe,"teachers",D.uid));U.exists()||Y!=null&&Y.exists()?i(!0):(i(!1),n("/login",{replace:!0}))}catch(U){console.error("Error verifying role:",U),i(!1),n("/login",{replace:!0})}finally{s(!1)}});return()=>M()},[n]),P.useEffect(()=>{var U;const M=(U=e.state)==null?void 0:U.pendingRecording;if(M){sessionStorage.setItem(Eo,JSON.stringify(M)),l(M);return}const D=sessionStorage.getItem(Eo);if(D)try{l(JSON.parse(D))}catch{l(null)}},[e.state]),P.useEffect(()=>{(async()=>{if(a!=null&&a.subjectId)try{const D=await Ce(Ne(fe,"subjects",a.subjectId));D.exists()&&f(D.data().name||"")}catch(D){console.error("Error loading subject:",D)}})()},[a]);const C=async M=>{if(M.preventDefault(),!a){A("No pending upload found. Go back and upload again.");return}if(!m){A("Paste the HiDrive share link to continue.");return}j(!0),A("");try{const D=await YE({subjectId:a.subjectId,title:a.title,examBoard:a.examBoard,tier:a.tier,videoUrl:m,hidrivePath:a.hidrivePath,hidriveFileId:a.hidriveFileId});sessionStorage.removeItem(Eo);const U=(D==null?void 0:D.approvalStatus)==="approved"?"Recording added and approved!":"Recording added successfully! It will be visible to students after approval.";A(U)}catch(D){console.error("Error saving recording:",D),A("Failed to save recording")}finally{j(!1)}};return t?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):r?a?c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Paste HiDrive Share Link"}),c.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Your upload is complete. Create a share link in HiDrive and paste it below."})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Recording Details"}),c.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Title:"})," ",a.title]}),c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Subject:"})," ",h||a.subjectId]}),c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",a.examBoard]}),a.tier&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Tier:"})," ",a.tier]}),a.fileName&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"File:"})," ",a.fileName]})]})]}),c.jsxs("form",{onSubmit:C,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4",children:[c.jsx("p",{children:"1) Open HiDrive and find the uploaded file."}),c.jsx("p",{children:"2) Click Share -> Create link -> Copy link."}),c.jsx("p",{children:"3) Paste the link below and click Save Recording."})]}),c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HiDrive Share Link"}),c.jsx("input",{type:"url",value:m,onChange:M=>g(M.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://hidrive.ionos.com/lnk/...",required:!0}),x&&c.jsx("div",{className:`mt-4 p-3 rounded-md text-sm ${x.includes("successfully")||x.includes("approved")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:x}),c.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[c.jsx("button",{type:"submit",disabled:k,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:k?"Saving...":"Save Recording"}),c.jsx("button",{type:"button",onClick:()=>n("/admin"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Back to Admin"})]})]})]})}):c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center",children:[c.jsx("p",{className:"text-gray-700 mb-4",children:"No pending upload found. Please upload a file first."}),c.jsx("button",{onClick:()=>n("/admin",{replace:!0}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Back to Admin"})]})}):null}const Io="pendingHomework";function eI(){const n=nn(),e=Xn(),[t,s]=P.useState(!0),[r,i]=P.useState(!1),[a,l]=P.useState(null),[h,f]=P.useState(""),[m,g]=P.useState(""),[x,A]=P.useState(""),[k,j]=P.useState(!1);P.useEffect(()=>{const M=yi(et,async D=>{if(!D){i(!1),s(!1),n("/login",{replace:!0});return}try{const U=await Ce(Ne(fe,"admins",D.uid)),Y=U.exists()?null:await Ce(Ne(fe,"teachers",D.uid));U.exists()||Y!=null&&Y.exists()?i(!0):(i(!1),n("/login",{replace:!0}))}catch(U){console.error("Error verifying role:",U),i(!1),n("/login",{replace:!0})}finally{s(!1)}});return()=>M()},[n]),P.useEffect(()=>{var U;const M=(U=e.state)==null?void 0:U.pendingHomework;if(M){sessionStorage.setItem(Io,JSON.stringify(M)),l(M);return}const D=sessionStorage.getItem(Io);if(D)try{l(JSON.parse(D))}catch{l(null)}},[e.state]),P.useEffect(()=>{(async()=>{if(a!=null&&a.subjectId)try{const D=await Ce(Ne(fe,"subjects",a.subjectId));D.exists()&&f(D.data().name||"")}catch(D){console.error("Error loading subject:",D)}})()},[a]);const C=async M=>{if(M.preventDefault(),!a){A("No pending upload found. Go back and upload again.");return}if(!m){A("Paste the HiDrive share link to continue.");return}j(!0),A("");try{await JE({subjectId:a.subjectId,title:a.title,description:a.description,dueDate:a.dueDate||null,attachmentUrl:m,attachmentName:a.attachmentName||a.fileName||null,attachmentContentType:a.attachmentContentType||null,attachmentSize:a.attachmentSize||null,hidrivePath:a.hidrivePath,hidriveFileId:a.hidriveFileId}),sessionStorage.removeItem(Io),A("Homework added successfully!")}catch(D){console.error("Error saving homework:",D),A("Failed to save homework")}finally{j(!1)}};return t?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):r?a?c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Paste HiDrive Share Link"}),c.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Your upload is complete. Create a share link in HiDrive and paste it below."})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Homework Details"}),c.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Title:"})," ",a.title]}),c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Subject:"})," ",h||a.subjectId]}),a.dueDate&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Due:"})," ",new Date(a.dueDate).toLocaleString("en-GB")]}),a.fileName&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"File:"})," ",a.fileName]})]})]}),c.jsxs("form",{onSubmit:C,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4",children:[c.jsx("p",{children:"1) Open HiDrive and find the uploaded file."}),c.jsx("p",{children:"2) Click Share -> Create link -> Copy link."}),c.jsx("p",{children:"3) Paste the link below and click Save Homework."})]}),c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HiDrive Share Link"}),c.jsx("input",{type:"url",value:m,onChange:M=>g(M.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://hidrive.ionos.com/lnk/...",required:!0}),x&&c.jsx("div",{className:`mt-4 p-3 rounded-md text-sm ${x.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:x}),c.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[c.jsx("button",{type:"submit",disabled:k,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:k?"Saving...":"Save Homework"}),c.jsx("button",{type:"button",onClick:()=>n("/admin"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Back to Admin"})]})]})]})}):c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center",children:[c.jsx("p",{className:"text-gray-700 mb-4",children:"No pending upload found. Please upload a file first."}),c.jsx("button",{onClick:()=>n("/admin",{replace:!0}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Back to Admin"})]})}):null}function tI(){return P.useEffect(()=>{Jp()},[]),c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center px-4",children:c.jsxs("div",{className:"max-w-md w-full text-center",children:[c.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 md:p-10",children:[c.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:c.jsx(Pr,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})}),c.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Payment confirmed"}),c.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for your purchase. You will receive a confirmation email shortly with your receipt and next steps."}),c.jsxs(Xe,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",children:[c.jsx(Kt,{className:"h-5 w-5","aria-hidden":"true"}),"Back to home"]})]}),c.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-gray-500",children:[c.jsx(Hn,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),c.jsx("span",{className:"text-sm",children:"MySchola"})]})]})})}function nI(){return P.useEffect(()=>{Xp(),Zp()},[]),c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center px-4",children:c.jsxs("div",{className:"max-w-md w-full text-center",children:[c.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 md:p-10",children:[c.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:c.jsx(Qm,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})}),c.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Booking confirmed"}),c.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for booking your free consultation. You will receive a confirmation email shortly with the meeting link and next steps."}),c.jsxs(Xe,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",children:[c.jsx(Kt,{className:"h-5 w-5","aria-hidden":"true"}),"Back to home"]})]}),c.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-gray-500",children:[c.jsx(Hn,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),c.jsx("span",{className:"text-sm",children:"MySchola"})]})]})})}function sI(n){var e;return((e=n==null?void 0:n.data)==null?void 0:e.event)&&n.data.event.indexOf("calendly")===0&&n.data.event==="calendly.event_scheduled"}function rI(){const{pathname:n}=Xn();return P.useEffect(()=>{Yp()},[n]),null}function iI(){const n=nn();return P.useEffect(()=>{const e=t=>{sI(t)&&n("/booking-success",{replace:!0})};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[n]),null}function oI(){return c.jsxs(Am,{children:[c.jsx(rI,{}),c.jsx(iI,{}),c.jsxs(Sm,{children:[c.jsx(tt,{path:"/",element:c.jsx(tl,{})}),c.jsx(tt,{path:"/booking",element:c.jsx(tl,{})}),c.jsx(tt,{path:"/login",element:c.jsx(OE,{})}),c.jsx(tt,{path:"/payment-success",element:c.jsx(tI,{})}),c.jsx(tt,{path:"/booking-success",element:c.jsx(nI,{})}),c.jsx(tt,{path:"/admin",element:c.jsx(XE,{})}),c.jsx(tt,{path:"/admin/share-link",element:c.jsx(ZE,{})}),c.jsx(tt,{path:"/admin/homework-share-link",element:c.jsx(eI,{})}),c.jsx(tt,{path:"/app/dashboard",element:c.jsx(vo,{children:c.jsx(BE,{})})}),c.jsx(tt,{path:"/app/subject/:subjectId/recordings",element:c.jsx(vo,{children:c.jsx(zE,{})})}),c.jsx(tt,{path:"/app/subject/:subjectId/homework",element:c.jsx(vo,{children:c.jsx(WE,{})})})]})]})}Cm.createRoot(document.getElementById("root")).render(c.jsx(P.StrictMode,{children:c.jsx(oI,{})}));
