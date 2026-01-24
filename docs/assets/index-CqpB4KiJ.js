import{r as pm,a as gm,b as k,L as rt,u as Qn,c as Zr,N as ym,d as Fu,B as _m,R as wm,e as xt}from"./react-vendor-w9dygoMj.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var so={exports:{}},Tr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc;function vm(){if(Bc)return Tr;Bc=1;var n=pm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(l,h,f){var m,g={},w=null,A=null;f!==void 0&&(w=""+f),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(A=h.ref);for(m in h)r.call(h,m)&&!i.hasOwnProperty(m)&&(g[m]=h[m]);if(l&&l.defaultProps)for(m in h=l.defaultProps,h)g[m]===void 0&&(g[m]=h[m]);return{$$typeof:e,type:l,key:w,ref:A,props:g,_owner:s.current}}return Tr.Fragment=t,Tr.jsx=a,Tr.jsxs=a,Tr}var qc;function bm(){return qc||(qc=1,so.exports=vm()),so.exports}var c=bm(),bs={},$c;function xm(){if($c)return bs;$c=1;var n=gm();return bs.createRoot=n.createRoot,bs.hydrateRoot=n.hydrateRoot,bs}var Em=xm();/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Tm=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),Hc=n=>{const e=Tm(n);return e.charAt(0).toUpperCase()+e.slice(1)},Uu=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim(),Am=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=k.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:a,...l},h)=>k.createElement("svg",{ref:h,...Sm,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:Uu("lucide",s),...!i&&!Am(l)&&{"aria-hidden":"true"},...l},[...a.map(([f,m])=>k.createElement(f,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=(n,e)=>{const t=k.forwardRef(({className:r,...s},i)=>k.createElement(Nm,{ref:i,iconNode:e,className:Uu(`lucide-${Im(Hc(n))}`,`lucide-${n}`,r),...s}));return t.displayName=Hc(n),t};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Lr=Y("arrow-left",Rm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],zc=Y("arrow-right",Cm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],km=Y("atom",Pm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Dm=Y("award",jm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Om=Y("book-marked",Vm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Bs=Y("book-open",Mm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Fm=Y("calculator",Lm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Bm=Y("check",Um);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],$m=Y("chevron-right",qm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],zm=Y("chevron-left",Hm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Cs=Y("circle-check-big",Gm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Km=Y("circle-question-mark",Wm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Bu=Y("clock",Qm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Gc=Y("download",Ym);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Xm=Y("external-link",Jm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],qs=Y("file-text",Zm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],tp=Y("flask-conical",ep);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],rp=Y("globe",np);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Fr=Y("graduation-cap",sp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],op=Y("history",ip);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],cp=Y("languages",ap);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],qu=Y("lock",lp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],hp=Y("log-out",up);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],$u=Y("mail",dp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],mp=Y("menu",fp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],xs=Y("message-circle",pp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],yp=Y("music",gp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],wp=Y("palette",_p);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],bp=Y("phone",vp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Ep=Y("play",xp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Wc=Y("save",Ip);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Ap=Y("star",Tp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Np=Y("target",Sp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Cp=Y("trending-up",Rp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],kp=Y("user-check",Pp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Dp=Y("users",jp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Ur=Y("video",Vp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Mp=Y("x",Op);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Fp=Y("zoom-in",Lp),Up="/assets/testimonial1-5gwMtUAO-5gwMtUAO.mp4",Bp="/assets/testimonial2-D0fw-lJA.mp4";function qp(){typeof window<"u"&&window.fbq&&window.fbq("track","PageView")}function $p(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booking",content_category:"GCSE Tuition"})}function Es(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"WhatsApp Inquiry",content_category:"GCSE Tuition"})}function Hp(){typeof window<"u"&&window.fbq&&window.fbq("track","Purchase",{currency:"GBP"})}function zp(){if(!(typeof window>"u"||!window.fbq))try{if(!(window.location.hostname==="myschola.uk"))return;window.fbq("track","StartTrial",{value:0,currency:"GBP",predicted_ltv:0})}catch{}}function Gp({videoSrc:n,isActive:e,translateX:t,translateY:r,scale:s,opacity:i,blur:a,zIndex:l}){const h=k.useRef(null);return k.useEffect(()=>{const f=h.current;if(!f)return;const m=()=>{f.readyState===0&&f.load()},g=()=>{f.readyState>=2&&(f.currentTime=.01,f.pause())};return e&&m(),f.addEventListener("loadedmetadata",g),f.readyState<2?f.load():(f.currentTime=.01,f.pause()),()=>{f.removeEventListener("loadedmetadata",g)}},[e,n]),c.jsx("div",{className:"absolute",style:{transform:`translateX(${t}%) translateY(${r}%) scale(${s})`,opacity:i,zIndex:l,filter:`blur(${a}px)`,pointerEvents:e?"auto":"none",transition:"all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",willChange:"transform, opacity, filter"},children:c.jsx("div",{className:`rounded-2xl overflow-hidden bg-white shadow-lg transition-all duration-700 ${e?"shadow-xl":"shadow-md"}`,children:c.jsxs("video",{ref:h,className:"w-full h-auto max-w-xs",controls:e,playsInline:!0,preload:"metadata",children:[c.jsx("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]})})})}function Wp(){const[n,e]=k.useState(!1),[t,r]=k.useState(null),[s,i]=k.useState(0),a=[{src:Bp,id:2},{src:Up,id:1}],l=()=>{i(g=>(g+1)%a.length)},h=()=>{i(g=>(g-1+a.length)%a.length)},f=g=>{r(t===g?null:g)},m=()=>{$p(),zp();const g="https://calendly.com/admin-myschola/30min";if(window.Calendly)window.Calendly.initPopupWidget({url:g});else{const w=document.createElement("script");w.src="https://assets.calendly.com/assets/external/widget.js",w.async=!0,w.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:g})},document.body.appendChild(w),setTimeout(()=>{window.Calendly||window.open(g,"_blank","noopener,noreferrer")},1e3)}};return c.jsxs("div",{className:"min-h-screen bg-white",children:[c.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),c.jsxs("nav",{className:"fixed w-full top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center h-16",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx(Fr,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),c.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),c.jsx("div",{className:"hidden md:flex justify-center",children:c.jsxs("div",{className:"flex items-center space-x-8",children:[c.jsx("a",{href:"#home",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),c.jsx("a",{href:"#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),c.jsx("a",{href:"#subjects",className:"text-gray-700 hover:text-blue-600 transition",children:"Subjects"}),c.jsx("a",{href:"#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),c.jsx("a",{href:"#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"})]})}),c.jsxs("div",{className:"flex items-center justify-end",children:[c.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[c.jsx(rt,{to:"/login",className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center","aria-label":"Log in",children:"Log In"}),c.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Es,className:"bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2","aria-label":"Contact us on WhatsApp",children:[c.jsx(xs,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})]}),c.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>e(!n),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,"aria-controls":"mobile-menu",children:n?c.jsx(Mp,{className:"h-6 w-6","aria-hidden":"true"}):c.jsx(mp,{className:"h-6 w-6","aria-hidden":"true"})})]})]})}),n&&c.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:c.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[c.jsx("a",{href:"#home",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),c.jsx("a",{href:"#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),c.jsx("a",{href:"#subjects",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Subjects"}),c.jsx("a",{href:"#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),c.jsx("a",{href:"#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),c.jsx(rt,{to:"/login",className:"block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",role:"menuitem",children:"Log In"}),c.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Es,className:"block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2","aria-label":"Contact us on WhatsApp",role:"menuitem",children:c.jsxs("span",{className:"inline-flex items-center gap-2",children:[c.jsx(xs,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})})]})})]}),c.jsxs("main",{id:"main-content",children:[c.jsx("section",{id:"home",className:"pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Hero section",children:c.jsx("div",{className:"max-w-7xl mx-auto",children:c.jsxs("div",{className:"text-center",children:[c.jsxs("h1",{className:"text-5xl md:text-6xl font-bold text-gray-900 mb-6",children:["MySchola: #1 GCSE Tutoring Platform for",c.jsx("span",{className:"text-blue-600",children:" Years 9-11"})]}),c.jsxs("p",{className:"text-xl text-gray-600 mb-4 max-w-3xl mx-auto",children:[c.jsx("strong",{children:"GCSE Maths, English & Science"})," via Zoom"]}),c.jsx("p",{className:"text-lg text-gray-600 mb-8 max-w-2xl mx-auto",children:"One-to-one personalised lessons with expert tutors. Your child only sees the teacher - no distractions, maximum focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons."}),c.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:c.jsxs("button",{onClick:m,className:"bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a free consultation",children:["Book Free Consultation",c.jsx(zc,{className:"ml-2 h-5 w-5","aria-hidden":"true"})]})})]})})}),c.jsx("section",{id:"how-it-works",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"how-it-works-heading",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsx("h2",{id:"how-it-works-heading",className:"text-4xl font-bold text-center mb-12",children:"How Our Lessons Work"}),c.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[c.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[c.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:c.jsx(kp,{className:"h-8 w-8 text-white"})}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"1-to-1 Sessions"}),c.jsx("p",{className:"text-gray-600",children:"Personalised one-on-one attention. No group distractions - your child gets the tutor's full focus."})]}),c.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[c.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:c.jsx(Fp,{className:"h-8 w-8 text-white"})}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Via Zoom"}),c.jsx("p",{className:"text-gray-600",children:"Convenient online lessons from the comfort of your home. High-quality video and interactive whiteboard. Webcam and microphone are optional - we use Zoom chat to check engagement, and parents can monitor participation for privacy."})]}),c.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[c.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:c.jsx(qu,{className:"h-8 w-8 text-white"})}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Student Privacy"}),c.jsx("p",{className:"text-gray-600",children:"Your child only sees the teacher. Private, secure sessions designed for maximum learning focus. Webcam and mic are optional - we use Zoom chat for communication, and parents can check engagement for privacy reasons."})]})]})]})}),c.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"benefits-heading",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsx("h2",{id:"benefits-heading",className:"text-4xl font-bold text-center mb-4",children:"Benefits for Parents & Students"}),c.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Why thousands of families choose MySchola for GCSE success"}),c.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx(Cp,{className:"h-6 w-6 text-green-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Grade Improvement"})]}),c.jsx("p",{className:"text-gray-600",children:"Students consistently improve by 2-3 grades with our proven teaching methods and personalised approach."})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx(Dm,{className:"h-6 w-6 text-blue-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Confidence Building"})]}),c.jsx("p",{className:"text-gray-600",children:"Watch your child's confidence soar as they master difficult concepts and see their progress week by week."})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx(Np,{className:"h-6 w-6 text-red-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Exam Focus"})]}),c.jsx("p",{className:"text-gray-600",children:"Targeted exam preparation with past papers, exam techniques, and strategies tailored to GCSE requirements."})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx(Bu,{className:"h-6 w-6 text-purple-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Flexible Scheduling"})]}),c.jsx("p",{className:"text-gray-600",children:"Choose times that work around your family's schedule. Evening and weekend slots available."})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx(Dp,{className:"h-6 w-6 text-orange-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Expert Tutors"})]}),c.jsx("p",{className:"text-gray-600",children:"Qualified UK teachers with DBS checks and proven track records of GCSE success."})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx(Bs,{className:"h-6 w-6 text-indigo-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Personalised Curriculum"})]}),c.jsx("p",{className:"text-gray-600",children:"Lessons tailored to your child's learning style, pace, and specific areas that need improvement."})]})]})]})}),c.jsx("section",{id:"subjects",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"subjects-heading",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsx("h2",{id:"subjects-heading",className:"text-4xl font-bold text-center mb-4",children:"Subjects We Offer"}),c.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Comprehensive GCSE support for Years 9-11"}),c.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{name:"Maths",description:"GCSE Maths (Foundation & Higher)"},{name:"Combined Science",description:"Trilogy and Synergy pathways"},{name:"Triple Science",description:"Biology, Chemistry, and Physics"},{name:"English Language",description:"Reading, writing, and language skills"},{name:"English Literature",description:"Poetry, prose, and drama analysis"}].map(g=>c.jsx("div",{className:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600",children:c.jsxs("div",{className:"flex items-start mb-2",children:[c.jsx(Bm,{className:"h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0","aria-hidden":"true"}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-semibold mb-1",children:g.name}),c.jsx("p",{className:"text-gray-600 text-sm",children:g.description})]})]})},g.name))})]})}),c.jsx("section",{id:"video-testimonials",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"video-testimonials-heading",children:c.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[c.jsx("h2",{id:"video-testimonials-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Video Testimonials"}),c.jsx("p",{className:"text-gray-600 mb-12",children:"Hear directly from parents and students about their results."}),c.jsxs("div",{className:"relative",children:[c.jsxs("div",{className:"relative h-[450px] md:h-[500px] flex items-center justify-center overflow-visible",children:[c.jsx("div",{className:"relative w-full h-full flex items-center justify-center",children:a.map((g,w)=>{const A=w===s,C=w===(s-1+a.length)%a.length,j=w===(s+1)%a.length;let P=0,O=0,D=1,F=1,K=0,ie=10;return A?(P=0,O=0,D=1,F=1,K=0,ie=30):C?(P=-65,O=20,D=.75,F=.5,K=1,ie=10):j?(P=65,O=20,D=.75,F=.5,K=1,ie=10):(P=0,O=0,D=.5,F=0,K=3,ie=1),c.jsx(Gp,{videoSrc:g.src,isActive:A,translateX:P,translateY:O,scale:D,opacity:F,blur:K,zIndex:ie},g.id)})}),c.jsx("button",{onClick:h,className:"absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 hover:text-blue-600 p-3 rounded-full shadow-md hover:shadow-lg border border-gray-200 transition-all duration-200 z-40","aria-label":"Previous video",children:c.jsx(zm,{className:"h-5 w-5 md:h-6 md:w-6"})}),c.jsx("button",{onClick:l,className:"absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 hover:text-blue-600 p-3 rounded-full shadow-md hover:shadow-lg border border-gray-200 transition-all duration-200 z-40","aria-label":"Next video",children:c.jsx($m,{className:"h-5 w-5 md:h-6 md:w-6"})})]}),c.jsx("div",{className:"flex justify-center items-center gap-3 mt-12 mb-4",children:a.map((g,w)=>c.jsx("button",{onClick:()=>i(w),className:`transition-all duration-300 rounded-full ${w===s?"bg-blue-600 w-10 h-2.5 shadow-md":"bg-gray-300 w-2.5 h-2.5 hover:bg-gray-400 hover:scale-125"}`,"aria-label":`Go to video ${w+1}`},w))})]})]})}),c.jsx("section",{id:"testimonials",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"testimonials-heading",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold text-center mb-4",children:"What Parents & Students Say"}),c.jsx("p",{className:"text-center text-gray-600 mb-12",children:"Real results from real families"}),c.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-12",children:[c.jsxs("div",{className:"bg-blue-600 text-white p-6 rounded-lg text-center",children:[c.jsx("div",{className:"text-4xl font-bold mb-2",children:"95%"}),c.jsx("div",{className:"text-blue-100",children:"Students improve grades"})]}),c.jsxs("div",{className:"bg-green-600 text-white p-6 rounded-lg text-center",children:[c.jsx("div",{className:"text-4xl font-bold mb-2",children:"2-3"}),c.jsx("div",{className:"text-green-100",children:"Grade improvement average"})]}),c.jsxs("div",{className:"bg-purple-600 text-white p-6 rounded-lg text-center",children:[c.jsx("div",{className:"text-4xl font-bold mb-2",children:"300+"}),c.jsx("div",{className:"text-purple-100",children:"Successful students"})]})]}),c.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{name:"Aisha K, Parent",text:"My son started the term lacking confidence in Maths and was sitting at a Grade 5. After weekly Zoom lessons with MySchola, his understanding improved steadily and he finished the term with a Grade 7.",rating:5,result:"Maths: Grade 5 → Grade 7"},{name:"Rahul P, Parent",text:"MySchola was patient and explained the Poetry Anthology texts in a way my daughter could finally understand. Her confidence grew each week and her English grade jumped from a 5 to an 8.",rating:5,result:"English Lit: Grade 5 → Grade 8"},{name:"Emma L., Parent",text:"The confidence my son gained was incredible. He went from hating Chemistry especially Organic Chemistry to loving it. His Chemistry grade improved from 5 to 8. Worth every penny!",rating:5,result:"Chemistry: Grade 5 → Grade 8"},{name:"Michael R., Student",text:"Going through past papers and custom exam style questions with Isam and Hamza made a huge difference. Physics finally started to make sense, and I learned how to approach exam questions properly.",rating:5,result:"Physics: Grade 6 → Grade 9"},{name:"Jasmin K., Parent",text:"As a working parent, the flexible scheduling in the evenings was a lifesaver. My daughter could do sessions that fit around school and activities. Highly recommend!",rating:4,result:"Maths: Grade 6 → Grade 8"},{name:"Emmanuel P., Parent",text:"The privacy of the sessions meant my son felt comfortable making mistakes and asking for help. His confidence has grown so much, and his grades show it!",rating:5,result:"English: Grade 5 → Grade 7"}].map((g,w)=>c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsx("div",{className:"flex mb-4",children:[...Array(g.rating)].map((A,C)=>c.jsx(Ap,{className:"h-5 w-5 text-yellow-400 fill-current","aria-hidden":"true"},C))}),c.jsxs("p",{className:"text-gray-600 mb-4 italic",children:['"',g.text,'"']}),c.jsxs("div",{className:"border-t pt-4",children:[c.jsxs("p",{className:"font-semibold text-gray-900",children:["— ",g.name]}),c.jsx("p",{className:"text-sm text-blue-600 font-medium mt-1",children:g.result})]})]},w))})]})}),c.jsx("section",{id:"book-call",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600","aria-labelledby":"book-call-heading",children:c.jsxs("div",{className:"max-w-4xl mx-auto text-center text-white",children:[c.jsx("h2",{id:"book-call-heading",className:"text-4xl font-bold mb-6",children:"Ready to Start Your Child's GCSE Success Journey?"}),c.jsx("p",{className:"text-xl text-blue-100 mb-8",children:"Book a free consultation to discuss your child's needs and see how we can help them achieve their goals."}),c.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:c.jsxs("button",{onClick:m,className:"bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a free consultation",children:["Book Free Consultation",c.jsx(zc,{className:"ml-2 h-5 w-5","aria-hidden":"true"})]})}),c.jsx("p",{className:"text-blue-100 text-sm mt-6",children:"No card required • Free 15-minute consultation"})]})}),c.jsx("section",{id:"faq",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"faq-heading",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h2",{id:"faq-heading",className:"text-4xl font-bold text-center mb-12",children:"Frequently Asked Questions"}),c.jsx("div",{className:"space-y-4",children:[{q:"How do the Zoom lessons work?",a:"Each lesson is conducted one-to-one via Zoom. Your child will see only the teacher, ensuring privacy and focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We use interactive whiteboards and screen sharing to make lessons engaging and effective. All sessions are recorded for your child to review later."},{q:"What equipment do we need?",a:"You just need a computer, tablet, or laptop with a stable internet connection. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We recommend using a desktop or laptop for the best experience with the interactive whiteboard."},{q:"How long are the sessions?",a:"Standard sessions are 60 minutes, but we also offer 45-minute and 90-minute options depending on your child's needs and attention span. You can discuss the best duration during your free consultation."},{q:"Can I choose the tutor?",a:"Yes! During your consultation, we'll discuss your child's learning style and match them with the best tutor. You can also request specific tutors based on availability."},{q:"What if my child misses a session?",a:"We offer flexible rescheduling with 24 hours notice. Missed sessions can be rescheduled to another time that works for you. We understand that life happens!"},{q:"Do you provide homework and practice materials?",a:"Absolutely! Each tutor provides tailored homework assignments, practice papers, and additional resources to reinforce learning between sessions. All materials are included in the lesson price."},{q:"How quickly will we see results?",a:"Most students see improvement within 4-6 weeks of regular sessions. However, every child is different. We track progress regularly and adjust our approach to ensure maximum effectiveness."},{q:"What age groups do you teach?",a:"We specialize in Years 9-11, preparing students for GCSEs. This includes both Foundation and Higher tier courses across all major GCSE subjects."}].map((g,w)=>c.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[c.jsxs("button",{className:"w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",onClick:()=>f(w),"aria-expanded":t===w,"aria-controls":`faq-answer-${w}`,id:`faq-question-${w}`,children:[c.jsxs("span",{className:"font-semibold text-gray-900 flex items-center",children:[c.jsx(Km,{className:"h-5 w-5 text-blue-600 mr-2","aria-hidden":"true"}),g.q]}),c.jsx("span",{className:"text-blue-600","aria-hidden":"true","aria-label":t===w?"Collapse answer":"Expand answer",children:t===w?"−":"+"})]}),t===w&&c.jsx("div",{id:`faq-answer-${w}`,className:"px-6 pb-4 text-gray-600",role:"region","aria-labelledby":`faq-question-${w}`,children:g.a})]},w))})]})}),c.jsx("section",{id:"contact",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"contact-heading",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h2",{id:"contact-heading",className:"text-4xl font-bold text-center mb-12",children:"Get in Touch"}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsx($u,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Email Us"}),c.jsx("a",{href:"mailto:support@myschola.uk",className:"text-gray-600 hover:text-blue-600 transition",children:"support@myschola.uk"})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsx(bp,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Call Us"}),c.jsx("a",{href:"tel:+447344193804",className:"text-gray-600 hover:text-blue-600 transition",children:"+44 7344 193804"}),c.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Mon-Fri 9am-6pm"})]})]})]})}),c.jsx("section",{id:"privacy-policy",className:"py-20 px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Privacy Policy"}),c.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Information We Collect"}),c.jsx("p",{children:"We collect information that you provide directly to us, including your name, email address, phone number, and information about your child's educational needs. We also collect information automatically when you use our services, such as session recordings and progress data."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. How We Use Your Information"}),c.jsx("p",{children:"We use the information we collect to provide, maintain, and improve our tutoring services, process your bookings, communicate with you, and ensure the safety and security of our platform."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Data Security"}),c.jsx("p",{children:"We implement appropriate technical and organizational measures to protect your personal information. All tutors are DBS checked, and all Zoom sessions are encrypted and secure."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Session Recordings"}),c.jsx("p",{children:"Lessons may be recorded for educational purposes and quality assurance. Recordings are stored securely and are accessible only to authorized personnel and the student's account."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Your Rights"}),c.jsx("p",{children:"You have the right to access, update, or delete your personal information at any time. You can also request a copy of your data or withdraw consent for data processing."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Children's Privacy"}),c.jsx("p",{children:"We take children's privacy seriously. We only collect information necessary to provide our services, and all data handling complies with UK GDPR and Children's Code requirements."})]}),c.jsx("div",{children:c.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})}),c.jsx("section",{id:"terms-of-service",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Terms of Service"}),c.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Service Agreement"}),c.jsx("p",{children:"By booking a lesson or consultation with MySchola, you agree to these terms of service. Our services include one-to-one online tutoring sessions delivered via Zoom for students in Years 9-11."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. Booking and Cancellation"}),c.jsx("p",{children:"Lessons must be booked in advance. Cancellations require 24 hours notice for a full refund or reschedule. Cancellations with less than 24 hours notice may be charged at 50% of the lesson fee. No-shows will be charged the full lesson fee."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Payment Terms"}),c.jsx("p",{children:"Payment is required in advance for lesson packages. We accept payment via Stripe. Refunds for unused lessons in a package will be calculated on a pro-rata basis, minus any applicable fees."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Tutor Matching"}),c.jsx("p",{children:"We strive to match students with the most suitable tutor. However, if you're not satisfied after the first session, we offer a free replacement tutor or full refund."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Student Conduct"}),c.jsx("p",{children:"Students are expected to attend lessons punctually, be respectful to tutors, and engage actively in learning. Any inappropriate behavior may result in session termination without refund."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Technical Requirements"}),c.jsx("p",{children:"You are responsible for ensuring you have adequate internet connection and equipment for Zoom sessions. Note that webcam and microphone are optional - not needed. We use Zoom chat to check engagement, and parents can monitor participation for privacy reasons. We are not liable for technical issues on your end, though we'll do our best to accommodate."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"7. Guarantees"}),c.jsx("p",{children:"While we work hard to help students achieve their goals, we cannot guarantee specific grade improvements as results depend on multiple factors including student effort, attendance, and engagement."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"8. Intellectual Property"}),c.jsx("p",{children:"All teaching materials, resources, and session recordings are the intellectual property of MySchola and are for the personal use of the enrolled student only."})]}),c.jsx("div",{children:c.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})})]}),c.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center mb-4",children:[c.jsx(Fr,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),c.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),c.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 9-11 via Zoom."})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),c.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[c.jsx("li",{children:c.jsx("a",{href:"#home",className:"hover:text-white transition",children:"Home"})}),c.jsx("li",{children:c.jsx("a",{href:"#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),c.jsx("li",{children:c.jsx("a",{href:"#subjects",className:"hover:text-white transition",children:"Subjects"})}),c.jsx("li",{children:c.jsx("a",{href:"#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),c.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[c.jsx("li",{children:c.jsx("a",{href:"#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),c.jsx("li",{children:c.jsx("a",{href:"#terms-of-service",className:"hover:text-white transition",children:"Terms of Service"})}),c.jsx("li",{children:c.jsx("a",{href:"#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),c.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[c.jsx("li",{children:c.jsx("a",{href:"mailto:support@myschola.co.uk",className:"hover:text-white transition",children:"support@myschola.co.uk"})}),c.jsx("li",{children:c.jsx("a",{href:"tel:+447344193804",className:"hover:text-white transition",children:"+44 7344 193804"})}),c.jsx("li",{children:c.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Es,className:"text-green-400 hover:text-green-300 transition inline-flex items-center gap-2",children:[c.jsx(xs,{className:"h-4 w-4","aria-hidden":"true"}),"Contact Us on WhatsApp"]})}),c.jsx("li",{children:c.jsx("button",{onClick:m,className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),c.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:c.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 9-11."]})})]})}),c.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Es,className:"fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 focus:outline-none focus:ring-4 focus:ring-green-300","aria-label":"Contact us on WhatsApp",children:c.jsx(xs,{className:"h-6 w-6","aria-hidden":"true"})})]})}const Kp=()=>{};var Kc={};/**
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
 */const Hu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Qp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],h=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},zu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,m=i>>2,g=(i&3)<<4|l>>4;let w=(l&15)<<2|f>>6,A=f&63;h||(A=64,a||(w=64)),r.push(t[m],t[g],t[w],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Hu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Qp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||f==null||g==null)throw new Yp;const w=i<<2|l>>4;if(r.push(w),f!==64){const A=l<<4&240|f>>2;if(r.push(A),g!==64){const C=f<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Yp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jp=function(n){const e=Hu(n);return zu.encodeByteArray(e,!0)},$s=function(n){return Jp(n).replace(/\./g,"")},Gu=function(n){try{return zu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Xp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zp=()=>Xp().__FIREBASE_DEFAULTS__,eg=()=>{if(typeof process>"u"||typeof Kc>"u")return;const n=Kc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Gu(n[1]);return e&&JSON.parse(e)},di=()=>{try{return Kp()||Zp()||eg()||tg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Wu=n=>{var e,t;return(t=(e=di())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},ng=n=>{const e=Wu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ku=()=>{var n;return(n=di())==null?void 0:n.config},Qu=n=>{var e;return(e=di())==null?void 0:e[`_${n}`]};/**
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
 */class rg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Yn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Yu(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function sg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[$s(JSON.stringify(t)),$s(JSON.stringify(a)),""].join(".")}const kr={};function ig(){const n={prod:[],emulator:[]};for(const e of Object.keys(kr))kr[e]?n.emulator.push(e):n.prod.push(e);return n}function og(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Qc=!1;function Ju(n,e){if(typeof window>"u"||typeof document>"u"||!Yn(window.location.host)||kr[n]===e||kr[n]||Qc)return;kr[n]=e;function t(w){return`__firebase__banner__${w}`}const r="__firebase__banner",i=ig().prod.length>0;function a(){const w=document.getElementById(r);w&&w.remove()}function l(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,A){w.setAttribute("width","24"),w.setAttribute("id",A),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function f(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Qc=!0,a()},w}function m(w,A){w.setAttribute("id",A),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=og(r),A=t("text"),C=document.getElementById(A)||document.createElement("span"),j=t("learnmore"),P=document.getElementById(j)||document.createElement("a"),O=t("preprendIcon"),D=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const F=w.element;l(F),m(P,j);const K=f();h(D,O),F.append(D,C,P,K),document.body.appendChild(F)}i?(C.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ag(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function cg(){var e;const n=(e=di())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ug(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hg(){const n=Fe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function dg(){return!cg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zu(){try{return typeof indexedDB=="object"}catch{return!1}}function eh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function fg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const mg="FirebaseError";class at extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=mg,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vn.prototype.create)}}class vn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?pg(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new at(s,l,r)}}function pg(n,e){return n.replace(gg,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gg=/\{\$([^}]+)}/g;function yg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Kt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Yc(i)&&Yc(a)){if(!Kt(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Yc(n){return n!==null&&typeof n=="object"}/**
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
 */function es(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ar(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Sr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function _g(n,e){const t=new wg(n,e);return t.subscribe.bind(t)}class wg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");vg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=io),s.error===void 0&&(s.error=io),s.complete===void 0&&(s.complete=io);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function io(){}/**
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
 */const bg=1e3,xg=2,Eg=14400*1e3,Ig=.5;function Jc(n,e=bg,t=xg){const r=e*Math.pow(t,n),s=Math.round(Ig*r*(Math.random()-.5)*2);return Math.min(Eg,r+s)}/**
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
 */function ye(n){return n&&n._delegate?n._delegate:n}class st{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const un="[DEFAULT]";/**
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
 */class Tg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new rg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sg(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ag(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ag(n){return n===un?void 0:n}function Sg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ng{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Tg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const Rg={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Cg=J.INFO,Pg={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},kg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Pg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fi{constructor(e){this.name=e,this._logLevel=Cg,this._logHandler=kg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const jg=(n,e)=>e.some(t=>n instanceof t);let Xc,Zc;function Dg(){return Xc||(Xc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vg(){return Zc||(Zc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const th=new WeakMap,Io=new WeakMap,nh=new WeakMap,oo=new WeakMap,Jo=new WeakMap;function Og(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t($t(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&th.set(t,n)}).catch(()=>{}),Jo.set(e,n),e}function Mg(n){if(Io.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Io.set(n,e)}let To={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Io.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Lg(n){To=n(To)}function Fg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ao(this),e,...t);return nh.set(r,e.sort?e.sort():[e]),$t(r)}:Vg().includes(n)?function(...e){return n.apply(ao(this),e),$t(th.get(this))}:function(...e){return $t(n.apply(ao(this),e))}}function Ug(n){return typeof n=="function"?Fg(n):(n instanceof IDBTransaction&&Mg(n),jg(n,Dg())?new Proxy(n,To):n)}function $t(n){if(n instanceof IDBRequest)return Og(n);if(oo.has(n))return oo.get(n);const e=Ug(n);return e!==n&&(oo.set(n,e),Jo.set(e,n)),e}const ao=n=>Jo.get(n);function rh(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=$t(a);return r&&a.addEventListener("upgradeneeded",h=>{r($t(a.result),h.oldVersion,h.newVersion,$t(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{i&&h.addEventListener("close",()=>i()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Bg=["get","getKey","getAll","getAllKeys","count"],qg=["put","add","delete","clear"],co=new Map;function el(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(co.get(e))return co.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=qg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Bg.includes(t)))return;const i=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[t](...l),s&&h.done]))[0]};return co.set(e,i),i}Lg(n=>({...n,get:(e,t,r)=>el(e,t)||n.get(e,t,r),has:(e,t)=>!!el(e,t)||n.has(e,t)}));/**
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
 */class $g{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Hg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Hg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ao="@firebase/app",tl="0.14.6";/**
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
 */const St=new fi("@firebase/app"),zg="@firebase/app-compat",Gg="@firebase/analytics-compat",Wg="@firebase/analytics",Kg="@firebase/app-check-compat",Qg="@firebase/app-check",Yg="@firebase/auth",Jg="@firebase/auth-compat",Xg="@firebase/database",Zg="@firebase/data-connect",ey="@firebase/database-compat",ty="@firebase/functions",ny="@firebase/functions-compat",ry="@firebase/installations",sy="@firebase/installations-compat",iy="@firebase/messaging",oy="@firebase/messaging-compat",ay="@firebase/performance",cy="@firebase/performance-compat",ly="@firebase/remote-config",uy="@firebase/remote-config-compat",hy="@firebase/storage",dy="@firebase/storage-compat",fy="@firebase/firestore",my="@firebase/ai",py="@firebase/firestore-compat",gy="firebase",yy="12.6.0";/**
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
 */const So="[DEFAULT]",_y={[Ao]:"fire-core",[zg]:"fire-core-compat",[Wg]:"fire-analytics",[Gg]:"fire-analytics-compat",[Qg]:"fire-app-check",[Kg]:"fire-app-check-compat",[Yg]:"fire-auth",[Jg]:"fire-auth-compat",[Xg]:"fire-rtdb",[Zg]:"fire-data-connect",[ey]:"fire-rtdb-compat",[ty]:"fire-fn",[ny]:"fire-fn-compat",[ry]:"fire-iid",[sy]:"fire-iid-compat",[iy]:"fire-fcm",[oy]:"fire-fcm-compat",[ay]:"fire-perf",[cy]:"fire-perf-compat",[ly]:"fire-rc",[uy]:"fire-rc-compat",[hy]:"fire-gcs",[dy]:"fire-gcs-compat",[fy]:"fire-fst",[py]:"fire-fst-compat",[my]:"fire-vertex","fire-js":"fire-js",[gy]:"fire-js-all"};/**
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
 */const Hs=new Map,wy=new Map,No=new Map;function nl(n,e){try{n.container.addComponent(e)}catch(t){St.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function wt(n){const e=n.name;if(No.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;No.set(e,n);for(const t of Hs.values())nl(t,n);for(const t of wy.values())nl(t,n);return!0}function bn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function et(n){return n==null?!1:n.settings!==void 0}/**
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
 */const vy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new vn("app","Firebase",vy);/**
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
 */class by{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const Jn=yy;function sh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:So,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ht.create("bad-app-name",{appName:String(s)});if(t||(t=Ku()),!t)throw Ht.create("no-options");const i=Hs.get(s);if(i){if(Kt(t,i.options)&&Kt(r,i.config))return i;throw Ht.create("duplicate-app",{appName:s})}const a=new Ng(s);for(const h of No.values())a.addComponent(h);const l=new by(t,r,a);return Hs.set(s,l),l}function Xo(n=So){const e=Hs.get(n);if(!e&&n===So&&Ku())return sh();if(!e)throw Ht.create("no-app",{appName:n});return e}function Xe(n,e,t){let r=_y[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(a.join(" "));return}wt(new st(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const xy="firebase-heartbeat-database",Ey=1,Br="firebase-heartbeat-store";let lo=null;function ih(){return lo||(lo=rh(xy,Ey,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Br)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),lo}async function Iy(n){try{const t=(await ih()).transaction(Br),r=await t.objectStore(Br).get(oh(n));return await t.done,r}catch(e){if(e instanceof at)St.warn(e.message);else{const t=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(t.message)}}}async function rl(n,e){try{const r=(await ih()).transaction(Br,"readwrite");await r.objectStore(Br).put(e,oh(n)),await r.done}catch(t){if(t instanceof at)St.warn(t.message);else{const r=Ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});St.warn(r.message)}}}function oh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ty=1024,Ay=30;class Sy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ry(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Ay){const a=Cy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){St.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sl(),{heartbeatsToSend:r,unsentEntries:s}=Ny(this._heartbeatsCache.heartbeats),i=$s(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return St.warn(t),""}}}function sl(){return new Date().toISOString().substring(0,10)}function Ny(n,e=Ty){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),il(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),il(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ry{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zu()?eh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Iy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return rl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return rl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function il(n){return $s(JSON.stringify({version:2,heartbeats:n})).length}function Cy(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Py(n){wt(new st("platform-logger",e=>new $g(e),"PRIVATE")),wt(new st("heartbeat",e=>new Sy(e),"PRIVATE")),Xe(Ao,tl,n),Xe(Ao,tl,"esm2020"),Xe("fire-js","")}Py("");var ky="firebase",jy="12.6.0";/**
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
 */Xe(ky,jy,"app");function ah(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dy=ah,ch=new vn("auth","Firebase",ah());/**
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
 */const zs=new fi("@firebase/auth");function Vy(n,...e){zs.logLevel<=J.WARN&&zs.warn(`Auth (${Jn}): ${n}`,...e)}function Ps(n,...e){zs.logLevel<=J.ERROR&&zs.error(`Auth (${Jn}): ${n}`,...e)}/**
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
 */function it(n,...e){throw Zo(n,...e)}function ft(n,...e){return Zo(n,...e)}function lh(n,e,t){const r={...Dy(),[e]:t};return new vn("auth","Firebase",r).create(e,{appName:n.name})}function zt(n){return lh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ch.create(n,...e)}function q(n,e,...t){if(!n)throw Zo(e,...t)}function Et(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ps(e),new Error(e)}function Nt(n,e){n||Et(e)}/**
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
 */function Ro(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Oy(){return ol()==="http:"||ol()==="https:"}function ol(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function My(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Oy()||Xu()||"connection"in navigator)?navigator.onLine:!0}function Ly(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ts{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nt(t>e,"Short delay should be less than long delay!"),this.isMobile=ag()||ug()}get(){return My()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ea(n,e){Nt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class uh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Fy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Uy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],By=new ts(3e4,6e4);function xn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function tn(n,e,t,r,s={}){return hh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=es({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:h,...i};return lg()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&Yn(n.emulatorConfig.host)&&(f.credentials="include"),uh.fetch()(await dh(n,n.config.apiHost,t,l),f)})}async function hh(n,e,t){n._canInitEmulator=!1;const r={...Fy,...e};try{const s=new $y(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Is(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[h,f]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Is(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Is(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Is(n,"user-disabled",a);const m=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw lh(n,m,f);it(n,m)}}catch(s){if(s instanceof at)throw s;it(n,"network-request-failed",{message:String(s)})}}async function mi(n,e,t,r,s={}){const i=await tn(n,e,t,r,s);return"mfaPendingCredential"in i&&it(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function dh(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?ea(n.config,s):`${n.config.apiScheme}://${s}`;return Uy.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function qy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $y{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ft(this.auth,"network-request-failed")),By.get())})}}function Is(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ft(n,e,r);return s.customData._tokenResponse=t,s}function al(n){return n!==void 0&&n.enterprise!==void 0}class Hy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return qy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function zy(n,e){return tn(n,"GET","/v2/recaptchaConfig",xn(n,e))}/**
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
 */async function Gy(n,e){return tn(n,"POST","/v1/accounts:delete",e)}async function Gs(n,e){return tn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function jr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wy(n,e=!1){const t=ye(n),r=await t.getIdToken(e),s=ta(r);q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:jr(uo(s.auth_time)),issuedAtTime:jr(uo(s.iat)),expirationTime:jr(uo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function uo(n){return Number(n)*1e3}function ta(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ps("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gu(t);return s?JSON.parse(s):(Ps("Failed to decode base64 JWT payload"),null)}catch(s){return Ps("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function cl(n){const e=ta(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof at&&Ky(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ky({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Qy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Co{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=jr(this.lastLoginAt),this.creationTime=jr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ws(n){var g;const e=n.auth,t=await n.getIdToken(),r=await qr(n,Gs(e,{idToken:t}));q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?fh(s.providerUserInfo):[],a=Jy(n.providerData,i),l=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Co(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function Yy(n){const e=ye(n);await Ws(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jy(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function fh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Xy(n,e){const t=await hh(n,{},async()=>{const r=es({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await dh(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:r};return n.emulatorConfig&&Yn(n.emulatorConfig.host)&&(h.credentials="include"),uh.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Zy(n,e){return tn(n,"POST","/v2/accounts:revokeToken",xn(n,e))}/**
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
 */class On{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=cl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Xy(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new On;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new On,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
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
 */function Mt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class tt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Qy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Co(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await qr(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Wy(this,e)}reload(){return Yy(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ws(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject(zt(this.auth));const e=await this.getIdToken();return await qr(this,Gy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,h=t._redirectEventId??void 0,f=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:g,emailVerified:w,isAnonymous:A,providerData:C,stsTokenManager:j}=t;q(g&&j,e,"internal-error");const P=On.fromJSON(this.name,j);q(typeof g=="string",e,"internal-error"),Mt(r,e.name),Mt(s,e.name),q(typeof w=="boolean",e,"internal-error"),q(typeof A=="boolean",e,"internal-error"),Mt(i,e.name),Mt(a,e.name),Mt(l,e.name),Mt(h,e.name),Mt(f,e.name),Mt(m,e.name);const O=new tt({uid:g,auth:e,email:s,emailVerified:w,displayName:r,isAnonymous:A,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:P,createdAt:f,lastLoginAt:m});return C&&Array.isArray(C)&&(O.providerData=C.map(D=>({...D}))),h&&(O._redirectEventId=h),O}static async _fromIdTokenResponse(e,t,r=!1){const s=new On;s.updateFromServerResponse(t);const i=new tt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ws(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?fh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new On;l.updateFromIdToken(r);const h=new tt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Co(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(h,f),h}}/**
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
 */const ll=new Map;function It(n){Nt(n instanceof Function,"Expected a class definition");let e=ll.get(n);return e?(Nt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ll.set(n,e),e)}/**
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
 */class mh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mh.type="NONE";const ul=mh;/**
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
 */function ks(n,e,t){return`firebase:${n}:${e}:${t}`}class Mn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ks(this.userKey,s.apiKey,i),this.fullPersistenceKey=ks("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Gs(this.auth,{idToken:e}).catch(()=>{});return t?tt._fromGetAccountInfoResponse(this.auth,t,e):null}return tt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Mn(It(ul),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||It(ul);const a=ks(r,e.config.apiKey,e.name);let l=null;for(const f of t)try{const m=await f._get(a);if(m){let g;if(typeof m=="string"){const w=await Gs(e,{idToken:m}).catch(()=>{});if(!w)break;g=await tt._fromGetAccountInfoResponse(e,w,m)}else g=tt._fromJSON(e,m);f!==i&&(l=g),i=f;break}}catch{}const h=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!h.length?new Mn(i,e,r):(i=h[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async f=>{if(f!==i)try{await f._remove(a)}catch{}})),new Mn(i,e,r))}}/**
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
 */function hl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_h(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ph(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vh(e))return"Blackberry";if(bh(e))return"Webos";if(gh(e))return"Safari";if((e.includes("chrome/")||yh(e))&&!e.includes("edge/"))return"Chrome";if(wh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ph(n=Fe()){return/firefox\//i.test(n)}function gh(n=Fe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yh(n=Fe()){return/crios\//i.test(n)}function _h(n=Fe()){return/iemobile/i.test(n)}function wh(n=Fe()){return/android/i.test(n)}function vh(n=Fe()){return/blackberry/i.test(n)}function bh(n=Fe()){return/webos/i.test(n)}function na(n=Fe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function e_(n=Fe()){var e;return na(n)&&!!((e=window.navigator)!=null&&e.standalone)}function t_(){return hg()&&document.documentMode===10}function xh(n=Fe()){return na(n)||wh(n)||bh(n)||vh(n)||/windows phone/i.test(n)||_h(n)}/**
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
 */function Eh(n,e=[]){let t;switch(n){case"Browser":t=hl(Fe());break;case"Worker":t=`${hl(Fe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Jn}/${r}`}/**
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
 */class n_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const h=e(i);a(h)}catch(h){l(h)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function r_(n,e={}){return tn(n,"GET","/v2/passwordPolicy",xn(n,e))}/**
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
 */const s_=6;class i_{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??s_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class o_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dl(this),this.idTokenSubscription=new dl(this),this.beforeStateQueue=new n_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ch,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=It(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Mn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gs(this,{idToken:e}),r=await tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(et(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===l)&&(h!=null&&h.user)&&(r=h.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ws(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ly()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(et(this.app))return Promise.reject(zt(this));const t=e?ye(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject(zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return et(this.app)?Promise.reject(zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(It(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await r_(this),t=new i_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Zy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&It(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await Mn.create(this,[It(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,s);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Eh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Vy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Xn(n){return ye(n)}class dl{constructor(e){this.auth=e,this.observer=null,this.addObserver=_g(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function a_(n){pi=n}function Ih(n){return pi.loadJS(n)}function c_(){return pi.recaptchaEnterpriseScript}function l_(){return pi.gapiScript}function u_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class h_{constructor(){this.enterprise=new d_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class d_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const f_="recaptcha-enterprise",Th="NO_RECAPTCHA";class m_{constructor(e){this.type=f_,this.auth=Xn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{zy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new Hy(h);return i.tenantId==null?i._agentRecaptchaConfig=f:i._tenantRecaptchaConfigs[i.tenantId]=f,a(f.siteKey)}}).catch(h=>{l(h)})})}function s(i,a,l){const h=window.grecaptcha;al(h)?h.enterprise.ready(()=>{h.enterprise.execute(i,{action:e}).then(f=>{a(f)}).catch(()=>{a(Th)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new h_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&al(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=c_();h.length!==0&&(h+=l),Ih(h).then(()=>{s(l,i,a)}).catch(f=>{a(f)})}}).catch(l=>{a(l)})})}}async function fl(n,e,t,r=!1,s=!1){const i=new m_(n);let a;if(s)a=Th;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const h=l.phoneEnrollmentInfo.phoneNumber,f=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:f,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const h=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ml(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await fl(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await fl(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
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
 */function p_(n,e){const t=bn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Kt(i,e??{}))return s;it(s,"already-initialized")}return t.initialize({options:e})}function g_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(It);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function y_(n,e,t){const r=Xn(n);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ah(e),{host:a,port:l}=__(e),h=l===null?"":`:${l}`,f={url:`${i}//${a}${h}/`},m=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(Kt(f,r.config.emulator)&&Kt(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,Yn(a)?(Yu(`${i}//${a}${h}`),Ju("Auth",!0)):w_()}function Ah(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function __(n){const e=Ah(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:pl(a)}}}function pl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function w_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ra{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,t){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}}async function v_(n,e){return tn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function b_(n,e){return mi(n,"POST","/v1/accounts:signInWithPassword",xn(n,e))}/**
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
 */async function x_(n,e){return mi(n,"POST","/v1/accounts:signInWithEmailLink",xn(n,e))}async function E_(n,e){return mi(n,"POST","/v1/accounts:signInWithEmailLink",xn(n,e))}/**
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
 */class $r extends ra{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new $r(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new $r(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ml(e,t,"signInWithPassword",b_);case"emailLink":return x_(e,{email:this._email,oobCode:this._password});default:it(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ml(e,r,"signUpPassword",v_);case"emailLink":return E_(e,{idToken:t,email:this._email,oobCode:this._password});default:it(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ln(n,e){return mi(n,"POST","/v1/accounts:signInWithIdp",xn(n,e))}/**
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
 */const I_="http://localhost";class mn extends ra{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):it("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new mn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ln(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ln(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ln(e,t)}buildRequest(){const e={requestUri:I_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=es(t)}return e}}/**
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
 */function T_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function A_(n){const e=Ar(Sr(n)).link,t=e?Ar(Sr(e)).deep_link_id:null,r=Ar(Sr(n)).deep_link_id;return(r?Ar(Sr(r)).link:null)||r||t||e||n}class sa{constructor(e){const t=Ar(Sr(e)),r=t.apiKey??null,s=t.oobCode??null,i=T_(t.mode??null);q(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=A_(e);try{return new sa(t)}catch{return null}}}/**
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
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(e,t){return $r._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=sa.parseLink(t);return q(r,"argument-error"),$r._fromEmailAndCode(e,r.code,r.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Sh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ns extends Sh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Lt extends ns{constructor(){super("facebook.com")}static credential(e){return mn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lt.PROVIDER_ID="facebook.com";/**
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
 */class Ft extends ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ft.credential(t,r)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
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
 */class Ut extends ns{constructor(){super("github.com")}static credential(e){return mn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
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
 */class Bt extends ns{constructor(){super("twitter.com")}static credential(e,t){return mn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Bt.credential(t,r)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
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
 */class qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await tt._fromIdTokenResponse(e,r,s),a=gl(r);return new qn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=gl(r);return new qn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function gl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ks extends at{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ks.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ks(e,t,r,s)}}function Nh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ks._fromErrorAndOperation(n,i,e,r):i})}async function S_(n,e,t=!1){const r=await qr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return qn._forOperation(n,"link",r)}/**
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
 */async function N_(n,e,t=!1){const{auth:r}=n;if(et(r.app))return Promise.reject(zt(r));const s="reauthenticate";try{const i=await qr(n,Nh(r,s,e,n),t);q(i.idToken,r,"internal-error");const a=ta(i.idToken);q(a,r,"internal-error");const{sub:l}=a;return q(n.uid===l,r,"user-mismatch"),qn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&it(r,"user-mismatch"),i}}/**
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
 */async function Rh(n,e,t=!1){if(et(n.app))return Promise.reject(zt(n));const r="signIn",s=await Nh(n,r,e),i=await qn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function R_(n,e){return Rh(Xn(n),e)}/**
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
 */async function C_(n){const e=Xn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function P_(n,e,t){return et(n.app)?Promise.reject(zt(n)):R_(ye(n),Zn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&C_(n),r})}function k_(n,e,t,r){return ye(n).onIdTokenChanged(e,t,r)}function j_(n,e,t){return ye(n).beforeAuthStateChanged(e,t)}function gi(n,e,t,r){return ye(n).onAuthStateChanged(e,t,r)}function D_(n){return ye(n).signOut()}const Qs="__sak";/**
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
 */class Ch{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qs,"1"),this.storage.removeItem(Qs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const V_=1e3,O_=10;class Ph extends Ch{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);t_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,O_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},V_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ph.type="LOCAL";const M_=Ph;/**
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
 */class kh extends Ch{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kh.type="SESSION";const jh=kh;/**
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
 */function L_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class yi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new yi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async f=>f(t.origin,i)),h=await L_(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yi.receivers=[];/**
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
 */function ia(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class F_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,h)=>{const f=ia("",20);s.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===f)switch(w.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(w.data.response);break;default:clearTimeout(m),clearTimeout(i),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function mt(){return window}function U_(n){mt().location.href=n}/**
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
 */function Dh(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function B_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function q_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function $_(){return Dh()?self:null}/**
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
 */const Vh="firebaseLocalStorageDb",H_=1,Ys="firebaseLocalStorage",Oh="fbase_key";class rs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _i(n,e){return n.transaction([Ys],e?"readwrite":"readonly").objectStore(Ys)}function z_(){const n=indexedDB.deleteDatabase(Vh);return new rs(n).toPromise()}function Po(){const n=indexedDB.open(Vh,H_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ys,{keyPath:Oh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ys)?e(r):(r.close(),await z_(),e(await Po()))})})}async function yl(n,e,t){const r=_i(n,!0).put({[Oh]:e,value:t});return new rs(r).toPromise()}async function G_(n,e){const t=_i(n,!1).get(e),r=await new rs(t).toPromise();return r===void 0?null:r.value}function _l(n,e){const t=_i(n,!0).delete(e);return new rs(t).toPromise()}const W_=800,K_=3;class Mh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Po(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>K_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yi._getInstance($_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await B_(),!this.activeServiceWorker)return;this.sender=new F_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||q_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Po();return await yl(e,Qs,"1"),await _l(e,Qs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>G_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_l(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_i(s,!1).getAll();return new rs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mh.type="LOCAL";const Q_=Mh;new ts(3e4,6e4);/**
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
 */function Y_(n,e){return e?It(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class oa extends ra{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ln(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ln(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function J_(n){return Rh(n.auth,new oa(n),n.bypassAuthState)}function X_(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),N_(t,new oa(n),n.bypassAuthState)}async function Z_(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),S_(t,new oa(n),n.bypassAuthState)}/**
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
 */class Lh{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return J_;case"linkViaPopup":case"linkViaRedirect":return Z_;case"reauthViaPopup":case"reauthViaRedirect":return X_;default:it(this.auth,"internal-error")}}resolve(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ew=new ts(2e3,1e4);class Vn extends Lh{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vn.currentPopupAction&&Vn.currentPopupAction.cancel(),Vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Nt(this.filter.length===1,"Popup operations only handle one event");const e=ia();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ew.get())};e()}}Vn.currentPopupAction=null;/**
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
 */const tw="pendingRedirect",js=new Map;class nw extends Lh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=js.get(this.auth._key());if(!e){try{const r=await rw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}js.set(this.auth._key(),e)}return this.bypassAuthState||js.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rw(n,e){const t=ow(e),r=iw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function sw(n,e){js.set(n._key(),e)}function iw(n){return It(n._redirectPersistence)}function ow(n){return ks(tw,n.config.apiKey,n.name)}async function aw(n,e,t=!1){if(et(n.app))return Promise.reject(zt(n));const r=Xn(n),s=Y_(r,e),a=await new nw(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const cw=600*1e3;class lw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Fh(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(ft(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cw&&this.cachedEventUids.clear(),this.cachedEventUids.has(wl(e))}saveEventToCache(e){this.cachedEventUids.add(wl(e)),this.lastProcessedEventTime=Date.now()}}function wl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Fh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fh(n);default:return!1}}/**
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
 */async function hw(n,e={}){return tn(n,"GET","/v1/projects",e)}/**
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
 */const dw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fw=/^https?/;async function mw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await hw(n);for(const t of e)try{if(pw(t))return}catch{}it(n,"unauthorized-domain")}function pw(n){const e=Ro(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!fw.test(t))return!1;if(dw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const gw=new ts(3e4,6e4);function vl(){const n=mt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function yw(n){return new Promise((e,t)=>{var s,i,a;function r(){vl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vl(),t(ft(n,"network-request-failed"))},timeout:gw.get()})}if((i=(s=mt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=mt().gapi)!=null&&a.load)r();else{const l=u_("iframefcb");return mt()[l]=()=>{gapi.load?r():t(ft(n,"network-request-failed"))},Ih(`${l_()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw Ds=null,e})}let Ds=null;function _w(n){return Ds=Ds||yw(n),Ds}/**
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
 */const ww=new ts(5e3,15e3),vw="__/auth/iframe",bw="emulator/auth/iframe",xw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ew=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Iw(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ea(e,bw):`https://${n.config.authDomain}/${vw}`,r={apiKey:e.apiKey,appName:n.name,v:Jn},s=Ew.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${es(r).slice(1)}`}async function Tw(n){const e=await _w(n),t=mt().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:Iw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ft(n,"network-request-failed"),l=mt().setTimeout(()=>{i(a)},ww.get());function h(){mt().clearTimeout(l),s(r)}r.ping(h).then(h,()=>{i(a)})}))}/**
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
 */const Aw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sw=500,Nw=600,Rw="_blank",Cw="http://localhost";class bl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pw(n,e,t,r=Sw,s=Nw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h={...Aw,width:r.toString(),height:s.toString(),top:i,left:a},f=Fe().toLowerCase();t&&(l=yh(f)?Rw:t),ph(f)&&(e=e||Cw,h.scrollbars="yes");const m=Object.entries(h).reduce((w,[A,C])=>`${w}${A}=${C},`,"");if(e_(f)&&l!=="_self")return kw(e||"",l),new bl(null);const g=window.open(e||"",l,m);q(g,n,"popup-blocked");try{g.focus()}catch{}return new bl(g)}function kw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const jw="__/auth/handler",Dw="emulator/auth/handler",Vw=encodeURIComponent("fac");async function xl(n,e,t,r,s,i){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Jn,eventId:s};if(e instanceof Sh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",yg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))a[m]=g}if(e instanceof ns){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const h=await n._getAppCheckToken(),f=h?`#${Vw}=${encodeURIComponent(h)}`:"";return`${Ow(n)}?${es(l).slice(1)}${f}`}function Ow({config:n}){return n.emulator?ea(n,Dw):`https://${n.authDomain}/${jw}`}/**
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
 */const ho="webStorageSupport";class Mw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jh,this._completeRedirectFn=aw,this._overrideRedirectResult=sw}async _openPopup(e,t,r,s){var a;Nt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await xl(e,t,r,Ro(),s);return Pw(e,i,ia())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await xl(e,t,r,Ro(),s);return U_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Nt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Tw(e),r=new lw(e);return t.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ho,{type:ho},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[ho];i!==void 0&&t(!!i),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xh()||gh()||na()}}const Lw=Mw;var El="@firebase/auth",Il="1.11.1";/**
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
 */class Fw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Uw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Bw(n){wt(new st("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Eh(n)},f=new o_(r,s,i,h);return g_(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),wt(new st("auth-internal",e=>{const t=Xn(e.getProvider("auth").getImmediate());return(r=>new Fw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(El,Il,Uw(n)),Xe(El,Il,"esm2020")}/**
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
 */const qw=300,$w=Qu("authIdTokenMaxAge")||qw;let Tl=null;const Hw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>$w)return;const s=t==null?void 0:t.token;Tl!==s&&(Tl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zw(n=Xo()){const e=bn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=p_(n,{popupRedirectResolver:Lw,persistence:[Q_,M_,jh]}),r=Qu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Hw(i.toString());j_(t,a,()=>a(t.currentUser)),k_(t,l=>a(l))}}const s=Wu("auth");return s&&y_(t,`http://${s}`),t}function Gw(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}a_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ft("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Gw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Bw("Browser");var Al=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gt,Uh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,y){function v(){}v.prototype=y.prototype,x.F=y.prototype,x.prototype=new v,x.prototype.constructor=x,x.D=function(E,b,I){for(var _=Array(arguments.length-2),H=2;H<arguments.length;H++)_[H-2]=arguments[H];return y.prototype[b].apply(E,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,y,v){v||(v=0);const E=Array(16);if(typeof y=="string")for(var b=0;b<16;++b)E[b]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(b=0;b<16;++b)E[b]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=x.g[0],v=x.g[1],b=x.g[2];let I=x.g[3],_;_=y+(I^v&(b^I))+E[0]+3614090360&4294967295,y=v+(_<<7&4294967295|_>>>25),_=I+(b^y&(v^b))+E[1]+3905402710&4294967295,I=y+(_<<12&4294967295|_>>>20),_=b+(v^I&(y^v))+E[2]+606105819&4294967295,b=I+(_<<17&4294967295|_>>>15),_=v+(y^b&(I^y))+E[3]+3250441966&4294967295,v=b+(_<<22&4294967295|_>>>10),_=y+(I^v&(b^I))+E[4]+4118548399&4294967295,y=v+(_<<7&4294967295|_>>>25),_=I+(b^y&(v^b))+E[5]+1200080426&4294967295,I=y+(_<<12&4294967295|_>>>20),_=b+(v^I&(y^v))+E[6]+2821735955&4294967295,b=I+(_<<17&4294967295|_>>>15),_=v+(y^b&(I^y))+E[7]+4249261313&4294967295,v=b+(_<<22&4294967295|_>>>10),_=y+(I^v&(b^I))+E[8]+1770035416&4294967295,y=v+(_<<7&4294967295|_>>>25),_=I+(b^y&(v^b))+E[9]+2336552879&4294967295,I=y+(_<<12&4294967295|_>>>20),_=b+(v^I&(y^v))+E[10]+4294925233&4294967295,b=I+(_<<17&4294967295|_>>>15),_=v+(y^b&(I^y))+E[11]+2304563134&4294967295,v=b+(_<<22&4294967295|_>>>10),_=y+(I^v&(b^I))+E[12]+1804603682&4294967295,y=v+(_<<7&4294967295|_>>>25),_=I+(b^y&(v^b))+E[13]+4254626195&4294967295,I=y+(_<<12&4294967295|_>>>20),_=b+(v^I&(y^v))+E[14]+2792965006&4294967295,b=I+(_<<17&4294967295|_>>>15),_=v+(y^b&(I^y))+E[15]+1236535329&4294967295,v=b+(_<<22&4294967295|_>>>10),_=y+(b^I&(v^b))+E[1]+4129170786&4294967295,y=v+(_<<5&4294967295|_>>>27),_=I+(v^b&(y^v))+E[6]+3225465664&4294967295,I=y+(_<<9&4294967295|_>>>23),_=b+(y^v&(I^y))+E[11]+643717713&4294967295,b=I+(_<<14&4294967295|_>>>18),_=v+(I^y&(b^I))+E[0]+3921069994&4294967295,v=b+(_<<20&4294967295|_>>>12),_=y+(b^I&(v^b))+E[5]+3593408605&4294967295,y=v+(_<<5&4294967295|_>>>27),_=I+(v^b&(y^v))+E[10]+38016083&4294967295,I=y+(_<<9&4294967295|_>>>23),_=b+(y^v&(I^y))+E[15]+3634488961&4294967295,b=I+(_<<14&4294967295|_>>>18),_=v+(I^y&(b^I))+E[4]+3889429448&4294967295,v=b+(_<<20&4294967295|_>>>12),_=y+(b^I&(v^b))+E[9]+568446438&4294967295,y=v+(_<<5&4294967295|_>>>27),_=I+(v^b&(y^v))+E[14]+3275163606&4294967295,I=y+(_<<9&4294967295|_>>>23),_=b+(y^v&(I^y))+E[3]+4107603335&4294967295,b=I+(_<<14&4294967295|_>>>18),_=v+(I^y&(b^I))+E[8]+1163531501&4294967295,v=b+(_<<20&4294967295|_>>>12),_=y+(b^I&(v^b))+E[13]+2850285829&4294967295,y=v+(_<<5&4294967295|_>>>27),_=I+(v^b&(y^v))+E[2]+4243563512&4294967295,I=y+(_<<9&4294967295|_>>>23),_=b+(y^v&(I^y))+E[7]+1735328473&4294967295,b=I+(_<<14&4294967295|_>>>18),_=v+(I^y&(b^I))+E[12]+2368359562&4294967295,v=b+(_<<20&4294967295|_>>>12),_=y+(v^b^I)+E[5]+4294588738&4294967295,y=v+(_<<4&4294967295|_>>>28),_=I+(y^v^b)+E[8]+2272392833&4294967295,I=y+(_<<11&4294967295|_>>>21),_=b+(I^y^v)+E[11]+1839030562&4294967295,b=I+(_<<16&4294967295|_>>>16),_=v+(b^I^y)+E[14]+4259657740&4294967295,v=b+(_<<23&4294967295|_>>>9),_=y+(v^b^I)+E[1]+2763975236&4294967295,y=v+(_<<4&4294967295|_>>>28),_=I+(y^v^b)+E[4]+1272893353&4294967295,I=y+(_<<11&4294967295|_>>>21),_=b+(I^y^v)+E[7]+4139469664&4294967295,b=I+(_<<16&4294967295|_>>>16),_=v+(b^I^y)+E[10]+3200236656&4294967295,v=b+(_<<23&4294967295|_>>>9),_=y+(v^b^I)+E[13]+681279174&4294967295,y=v+(_<<4&4294967295|_>>>28),_=I+(y^v^b)+E[0]+3936430074&4294967295,I=y+(_<<11&4294967295|_>>>21),_=b+(I^y^v)+E[3]+3572445317&4294967295,b=I+(_<<16&4294967295|_>>>16),_=v+(b^I^y)+E[6]+76029189&4294967295,v=b+(_<<23&4294967295|_>>>9),_=y+(v^b^I)+E[9]+3654602809&4294967295,y=v+(_<<4&4294967295|_>>>28),_=I+(y^v^b)+E[12]+3873151461&4294967295,I=y+(_<<11&4294967295|_>>>21),_=b+(I^y^v)+E[15]+530742520&4294967295,b=I+(_<<16&4294967295|_>>>16),_=v+(b^I^y)+E[2]+3299628645&4294967295,v=b+(_<<23&4294967295|_>>>9),_=y+(b^(v|~I))+E[0]+4096336452&4294967295,y=v+(_<<6&4294967295|_>>>26),_=I+(v^(y|~b))+E[7]+1126891415&4294967295,I=y+(_<<10&4294967295|_>>>22),_=b+(y^(I|~v))+E[14]+2878612391&4294967295,b=I+(_<<15&4294967295|_>>>17),_=v+(I^(b|~y))+E[5]+4237533241&4294967295,v=b+(_<<21&4294967295|_>>>11),_=y+(b^(v|~I))+E[12]+1700485571&4294967295,y=v+(_<<6&4294967295|_>>>26),_=I+(v^(y|~b))+E[3]+2399980690&4294967295,I=y+(_<<10&4294967295|_>>>22),_=b+(y^(I|~v))+E[10]+4293915773&4294967295,b=I+(_<<15&4294967295|_>>>17),_=v+(I^(b|~y))+E[1]+2240044497&4294967295,v=b+(_<<21&4294967295|_>>>11),_=y+(b^(v|~I))+E[8]+1873313359&4294967295,y=v+(_<<6&4294967295|_>>>26),_=I+(v^(y|~b))+E[15]+4264355552&4294967295,I=y+(_<<10&4294967295|_>>>22),_=b+(y^(I|~v))+E[6]+2734768916&4294967295,b=I+(_<<15&4294967295|_>>>17),_=v+(I^(b|~y))+E[13]+1309151649&4294967295,v=b+(_<<21&4294967295|_>>>11),_=y+(b^(v|~I))+E[4]+4149444226&4294967295,y=v+(_<<6&4294967295|_>>>26),_=I+(v^(y|~b))+E[11]+3174756917&4294967295,I=y+(_<<10&4294967295|_>>>22),_=b+(y^(I|~v))+E[2]+718787259&4294967295,b=I+(_<<15&4294967295|_>>>17),_=v+(I^(b|~y))+E[9]+3951481745&4294967295,x.g[0]=x.g[0]+y&4294967295,x.g[1]=x.g[1]+(b+(_<<21&4294967295|_>>>11))&4294967295,x.g[2]=x.g[2]+b&4294967295,x.g[3]=x.g[3]+I&4294967295}r.prototype.v=function(x,y){y===void 0&&(y=x.length);const v=y-this.blockSize,E=this.C;let b=this.h,I=0;for(;I<y;){if(b==0)for(;I<=v;)s(this,x,I),I+=this.blockSize;if(typeof x=="string"){for(;I<y;)if(E[b++]=x.charCodeAt(I++),b==this.blockSize){s(this,E),b=0;break}}else for(;I<y;)if(E[b++]=x[I++],b==this.blockSize){s(this,E),b=0;break}}this.h=b,this.o+=y},r.prototype.A=function(){var x=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);x[0]=128;for(var y=1;y<x.length-8;++y)x[y]=0;y=this.o*8;for(var v=x.length-8;v<x.length;++v)x[v]=y&255,y/=256;for(this.v(x),x=Array(16),y=0,v=0;v<4;++v)for(let E=0;E<32;E+=8)x[y++]=this.g[v]>>>E&255;return x};function i(x,y){var v=l;return Object.prototype.hasOwnProperty.call(v,x)?v[x]:v[x]=y(x)}function a(x,y){this.h=y;const v=[];let E=!0;for(let b=x.length-1;b>=0;b--){const I=x[b]|0;E&&I==y||(v[b]=I,E=!1)}this.g=v}var l={};function h(x){return-128<=x&&x<128?i(x,function(y){return new a([y|0],y<0?-1:0)}):new a([x|0],x<0?-1:0)}function f(x){if(isNaN(x)||!isFinite(x))return g;if(x<0)return P(f(-x));const y=[];let v=1;for(let E=0;x>=v;E++)y[E]=x/v|0,v*=4294967296;return new a(y,0)}function m(x,y){if(x.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(x.charAt(0)=="-")return P(m(x.substring(1),y));if(x.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=f(Math.pow(y,8));let E=g;for(let I=0;I<x.length;I+=8){var b=Math.min(8,x.length-I);const _=parseInt(x.substring(I,I+b),y);b<8?(b=f(Math.pow(y,b)),E=E.j(b).add(f(_))):(E=E.j(v),E=E.add(f(_)))}return E}var g=h(0),w=h(1),A=h(16777216);n=a.prototype,n.m=function(){if(j(this))return-P(this).m();let x=0,y=1;for(let v=0;v<this.g.length;v++){const E=this.i(v);x+=(E>=0?E:4294967296+E)*y,y*=4294967296}return x},n.toString=function(x){if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(C(this))return"0";if(j(this))return"-"+P(this).toString(x);const y=f(Math.pow(x,6));var v=this;let E="";for(;;){const b=K(v,y).g;v=O(v,b.j(y));let I=((v.g.length>0?v.g[0]:v.h)>>>0).toString(x);if(v=b,C(v))return I+E;for(;I.length<6;)I="0"+I;E=I+E}},n.i=function(x){return x<0?0:x<this.g.length?this.g[x]:this.h};function C(x){if(x.h!=0)return!1;for(let y=0;y<x.g.length;y++)if(x.g[y]!=0)return!1;return!0}function j(x){return x.h==-1}n.l=function(x){return x=O(this,x),j(x)?-1:C(x)?0:1};function P(x){const y=x.g.length,v=[];for(let E=0;E<y;E++)v[E]=~x.g[E];return new a(v,~x.h).add(w)}n.abs=function(){return j(this)?P(this):this},n.add=function(x){const y=Math.max(this.g.length,x.g.length),v=[];let E=0;for(let b=0;b<=y;b++){let I=E+(this.i(b)&65535)+(x.i(b)&65535),_=(I>>>16)+(this.i(b)>>>16)+(x.i(b)>>>16);E=_>>>16,I&=65535,_&=65535,v[b]=_<<16|I}return new a(v,v[v.length-1]&-2147483648?-1:0)};function O(x,y){return x.add(P(y))}n.j=function(x){if(C(this)||C(x))return g;if(j(this))return j(x)?P(this).j(P(x)):P(P(this).j(x));if(j(x))return P(this.j(P(x)));if(this.l(A)<0&&x.l(A)<0)return f(this.m()*x.m());const y=this.g.length+x.g.length,v=[];for(var E=0;E<2*y;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(let b=0;b<x.g.length;b++){const I=this.i(E)>>>16,_=this.i(E)&65535,H=x.i(b)>>>16,ee=x.i(b)&65535;v[2*E+2*b]+=_*ee,D(v,2*E+2*b),v[2*E+2*b+1]+=I*ee,D(v,2*E+2*b+1),v[2*E+2*b+1]+=_*H,D(v,2*E+2*b+1),v[2*E+2*b+2]+=I*H,D(v,2*E+2*b+2)}for(x=0;x<y;x++)v[x]=v[2*x+1]<<16|v[2*x];for(x=y;x<2*y;x++)v[x]=0;return new a(v,0)};function D(x,y){for(;(x[y]&65535)!=x[y];)x[y+1]+=x[y]>>>16,x[y]&=65535,y++}function F(x,y){this.g=x,this.h=y}function K(x,y){if(C(y))throw Error("division by zero");if(C(x))return new F(g,g);if(j(x))return y=K(P(x),y),new F(P(y.g),P(y.h));if(j(y))return y=K(x,P(y)),new F(P(y.g),y.h);if(x.g.length>30){if(j(x)||j(y))throw Error("slowDivide_ only works with positive integers.");for(var v=w,E=y;E.l(x)<=0;)v=ie(v),E=ie(E);var b=oe(v,1),I=oe(E,1);for(E=oe(E,2),v=oe(v,2);!C(E);){var _=I.add(E);_.l(x)<=0&&(b=b.add(v),I=_),E=oe(E,1),v=oe(v,1)}return y=O(x,b.j(y)),new F(b,y)}for(b=g;x.l(y)>=0;){for(v=Math.max(1,Math.floor(x.m()/y.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),I=f(v),_=I.j(y);j(_)||_.l(x)>0;)v-=E,I=f(v),_=I.j(y);C(I)&&(I=w),b=b.add(I),x=O(x,_)}return new F(b,x)}n.B=function(x){return K(this,x).h},n.and=function(x){const y=Math.max(this.g.length,x.g.length),v=[];for(let E=0;E<y;E++)v[E]=this.i(E)&x.i(E);return new a(v,this.h&x.h)},n.or=function(x){const y=Math.max(this.g.length,x.g.length),v=[];for(let E=0;E<y;E++)v[E]=this.i(E)|x.i(E);return new a(v,this.h|x.h)},n.xor=function(x){const y=Math.max(this.g.length,x.g.length),v=[];for(let E=0;E<y;E++)v[E]=this.i(E)^x.i(E);return new a(v,this.h^x.h)};function ie(x){const y=x.g.length+1,v=[];for(let E=0;E<y;E++)v[E]=x.i(E)<<1|x.i(E-1)>>>31;return new a(v,x.h)}function oe(x,y){const v=y>>5;y%=32;const E=x.g.length-v,b=[];for(let I=0;I<E;I++)b[I]=y>0?x.i(I+v)>>>y|x.i(I+v+1)<<32-y:x.i(I+v);return new a(b,x.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Uh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,Gt=a}).apply(typeof Al<"u"?Al:typeof self<"u"?self:typeof window<"u"?window:{});var Ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bh,Nr,qh,Vs,ko,$h,Hh,zh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ts=="object"&&Ts];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var T=o[p];if(!(T in d))break e;d=d[T]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var d=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&d.push([p,u[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function h(o,u,d){return o.call.apply(o.bind,arguments)}function f(o,u,d){return f=h,f.apply(null,arguments)}function m(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function g(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(p,T,S){for(var V=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)V[Q-2]=arguments[Q];return u.prototype[T].apply(p,V)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function A(o){const u=o.length;if(u>0){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function C(o,u){for(let p=1;p<arguments.length;p++){const T=arguments[p];var d=typeof T;if(d=d!="object"?d:T?Array.isArray(T)?"array":d:"null",d=="array"||d=="object"&&typeof T.length=="number"){d=o.length||0;const S=T.length||0;o.length=d+S;for(let V=0;V<S;V++)o[d+V]=T[V]}else o.push(T)}}class j{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function P(o){a.setTimeout(()=>{throw o},0)}function O(){var o=x;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class D{constructor(){this.h=this.g=null}add(u,d){const p=F.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var F=new j(()=>new K,o=>o.reset());class K{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,oe=!1,x=new D,y=()=>{const o=Promise.resolve(void 0);ie=()=>{o.then(v)}};function v(){for(var o;o=O();){try{o.h.call(o.g)}catch(d){P(d)}var u=F;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}oe=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,u),a.removeEventListener("test",d,u)}catch{}return o})();function _(o){return/^[\s\xa0]*$/.test(o)}function H(o,u){b.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}g(H,b),H.prototype.init=function(o,u){const d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&H.Z.h.call(this)},H.prototype.h=function(){H.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ee="closure_listenable_"+(Math.random()*1e6|0),Ke=0;function Sn(o,u,d,p,T){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=T,this.key=++Ke,this.da=this.fa=!1}function Qe(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ue(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function $e(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function bt(o){const u={};for(const d in o)u[d]=o[d];return u}const xe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ct(o,u){let d,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(d in p)o[d]=p[d];for(let S=0;S<xe.length;S++)d=xe[S],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function lt(o){this.src=o,this.g={},this.h=0}lt.prototype.add=function(o,u,d,p,T){const S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);const V=or(o,u,p,T);return V>-1?(u=o[V],d||(u.fa=!1)):(u=new Sn(u,this.src,S,!!p,T),u.fa=d,o.push(u)),u};function ir(o,u){const d=u.type;if(d in o.g){var p=o.g[d],T=Array.prototype.indexOf.call(p,u,void 0),S;(S=T>=0)&&Array.prototype.splice.call(p,T,1),S&&(Qe(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function or(o,u,d,p){for(let T=0;T<o.length;++T){const S=o[T];if(!S.da&&S.listener==u&&S.capture==!!d&&S.ha==p)return T}return-1}var ar="closure_lm_"+(Math.random()*1e6|0),cr={};function U(o,u,d,p,T){if(Array.isArray(u)){for(let S=0;S<u.length;S++)U(o,u[S],d,p,T);return null}return d=Ye(d),o&&o[ee]?o.J(u,d,l(p)?!!p.capture:!1,T):z(o,u,d,!1,p,T)}function z(o,u,d,p,T,S){if(!u)throw Error("Invalid event type");const V=l(T)?!!T.capture:!!T;let Q=De(o);if(Q||(o[ar]=Q=new lt(o)),d=Q.add(u,d,p,V,S),d.proxy)return d;if(p=ne(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)I||(T=V),T===void 0&&(T=!1),o.addEventListener(u.toString(),p,T);else if(o.attachEvent)o.attachEvent(ce(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ne(){function o(d){return u.call(o.src,o.listener,d)}const u=Te;return o}function se(o,u,d,p,T){if(Array.isArray(u))for(var S=0;S<u.length;S++)se(o,u[S],d,p,T);else p=l(p)?!!p.capture:!!p,d=Ye(d),o&&o[ee]?(o=o.i,S=String(u).toString(),S in o.g&&(u=o.g[S],d=or(u,d,p,T),d>-1&&(Qe(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[S],o.h--)))):o&&(o=De(o))&&(u=o.g[u.toString()],o=-1,u&&(o=or(u,d,p,T)),(d=o>-1?u[o]:null)&&je(d))}function je(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ee])ir(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(ce(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=De(u))?(ir(d,o),d.h==0&&(d.src=null,u[ar]=null)):Qe(o)}}}function ce(o){return o in cr?cr[o]:cr[o]="on"+o}function Te(o,u){if(o.da)o=!0;else{u=new H(u,this);const d=o.listener,p=o.ha||o.src;o.fa&&je(o),o=d.call(p,u)}return o}function De(o){return o=o[ar],o instanceof lt?o:null}var rn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ye(o){return typeof o=="function"?o:(o[rn]||(o[rn]=function(u){return o.handleEvent(u)}),o[rn])}function Ve(){E.call(this),this.i=new lt(this),this.M=this,this.G=null}g(Ve,E),Ve.prototype[ee]=!0,Ve.prototype.removeEventListener=function(o,u,d,p){se(this,o,u,d,p)};function Ue(o,u){var d,p=o.G;if(p)for(d=[];p;p=p.G)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new b(u,o);else if(u instanceof b)u.target=u.target||o;else{var T=u;u=new b(p,o),ct(u,T)}T=!0;let S,V;if(d)for(V=d.length-1;V>=0;V--)S=u.g=d[V],T=ls(S,p,!0,u)&&T;if(S=u.g=o,T=ls(S,p,!0,u)&&T,T=ls(S,p,!1,u)&&T,d)for(V=0;V<d.length;V++)S=u.g=d[V],T=ls(S,p,!1,u)&&T}Ve.prototype.N=function(){if(Ve.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let p=0;p<d.length;p++)Qe(d[p]);delete o.g[u],o.h--}}this.G=null},Ve.prototype.J=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},Ve.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function ls(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let T=!0;for(let S=0;S<u.length;++S){const V=u[S];if(V&&!V.da&&V.capture==d){const Q=V.listener,Ee=V.ha||V.src;V.fa&&ir(o.i,V),T=Q.call(Ee,p)!==!1&&T}}return T&&!p.defaultPrevented}function $f(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=f(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function Wa(o){o.g=$f(()=>{o.g=null,o.i&&(o.i=!1,Wa(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Hf extends E{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Wa(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lr(o){E.call(this),this.h=o,this.g={}}g(lr,E);var Ka=[];function Qa(o){ue(o.g,function(u,d){this.g.hasOwnProperty(d)&&je(u)},o),o.g={}}lr.prototype.N=function(){lr.Z.N.call(this),Qa(this)},lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bi=a.JSON.stringify,zf=a.JSON.parse,Gf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Ya(){}function Ja(){}var ur={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function qi(){b.call(this,"d")}g(qi,b);function $i(){b.call(this,"c")}g($i,b);var sn={},Xa=null;function us(){return Xa=Xa||new Ve}sn.Ia="serverreachability";function Za(o){b.call(this,sn.Ia,o)}g(Za,b);function hr(o){const u=us();Ue(u,new Za(u))}sn.STAT_EVENT="statevent";function ec(o,u){b.call(this,sn.STAT_EVENT,o),this.stat=u}g(ec,b);function Be(o){const u=us();Ue(u,new ec(u,o))}sn.Ja="timingevent";function tc(o,u){b.call(this,sn.Ja,o),this.size=u}g(tc,b);function dr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function fr(){this.g=!0}fr.prototype.ua=function(){this.g=!1};function Wf(o,u,d,p,T,S){o.info(function(){if(o.g)if(S){var V="",Q=S.split("&");for(let ae=0;ae<Q.length;ae++){var Ee=Q[ae].split("=");if(Ee.length>1){const Ae=Ee[0];Ee=Ee[1];const ht=Ae.split("_");V=ht.length>=2&&ht[1]=="type"?V+(Ae+"="+Ee+"&"):V+(Ae+"=redacted&")}}}else V=null;else V=S;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+u+`
`+d+`
`+V})}function Kf(o,u,d,p,T,S,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+u+`
`+d+`
`+S+" "+V})}function Nn(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Yf(o,d)+(p?" "+p:"")})}function Qf(o,u){o.info(function(){return"TIMEOUT: "+u})}fr.prototype.info=function(){};function Yf(o,u){if(!o.g)return u;if(!u)return null;try{const S=JSON.parse(u);if(S){for(o=0;o<S.length;o++)if(Array.isArray(S[o])){var d=S[o];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var T=p[0];if(T!="noop"&&T!="stop"&&T!="close")for(let V=1;V<p.length;V++)p[V]=""}}}}return Bi(S)}catch{return u}}var hs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},nc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},rc;function Hi(){}g(Hi,Ya),Hi.prototype.g=function(){return new XMLHttpRequest},rc=new Hi;function mr(o){return encodeURIComponent(String(o))}function Jf(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function Pt(o,u,d,p){this.j=o,this.i=u,this.l=d,this.S=p||1,this.V=new lr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new sc}function sc(){this.i=null,this.g="",this.h=!1}var ic={},zi={};function Gi(o,u,d){o.M=1,o.A=fs(ut(u)),o.u=d,o.R=!0,oc(o,null)}function oc(o,u){o.F=Date.now(),ds(o),o.B=ut(o.A);var d=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),wc(d.i,"t",p),o.C=0,d=o.j.L,o.h=new sc,o.g=Mc(o.j,d?u:null,!o.u),o.P>0&&(o.O=new Hf(f(o.Y,o,o.g),o.P)),u=o.V,d=o.g,p=o.ba;var T="readystatechange";Array.isArray(T)||(T&&(Ka[0]=T.toString()),T=Ka);for(let S=0;S<T.length;S++){const V=U(d,T[S],p||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=o.J?bt(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),hr(),Wf(o.i,o.v,o.B,o.l,o.S,o.u)}Pt.prototype.ba=function(o){o=o.target;const u=this.O;u&&Dt(o)==3?u.j():this.Y(o)},Pt.prototype.Y=function(o){try{if(o==this.g)e:{const Q=Dt(this.g),Ee=this.g.ya(),ae=this.g.ca();if(!(Q<3)&&(Q!=3||this.g&&(this.h.h||this.g.la()||Ac(this.g)))){this.K||Q!=4||Ee==7||(Ee==8||ae<=0?hr(3):hr(2)),Wi(this);var u=this.g.ca();this.X=u;var d=Xf(this);if(this.o=u==200,Kf(this.i,this.v,this.B,this.l,this.S,Q,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,T=this.g;if((p=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var S=p;break t}}S=null}if(o=S)Nn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ki(this,o);else{this.o=!1,this.m=3,Be(12),on(this),pr(this);break e}}if(this.R){o=!0;let Ae;for(;!this.K&&this.C<d.length;)if(Ae=Zf(this,d),Ae==zi){Q==4&&(this.m=4,Be(14),o=!1),Nn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ae==ic){this.m=4,Be(15),Nn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else Nn(this.i,this.l,Ae,null),Ki(this,Ae);if(ac(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||d.length!=0||this.h.h||(this.m=1,Be(16),o=!1),this.o=this.o&&o,!o)Nn(this.i,this.l,d,"[Invalid Chunked Response]"),on(this),pr(this);else if(d.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),no(V),V.P=!0,Be(11))}}else Nn(this.i,this.l,d,null),Ki(this,d);Q==4&&on(this),this.o&&!this.K&&(Q==4?jc(this.j,this):(this.o=!1,ds(this)))}else fm(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,Be(12)):(this.m=0,Be(13)),on(this),pr(this)}}}catch{}finally{}};function Xf(o){if(!ac(o))return o.g.la();const u=Ac(o.g);if(u==="")return"";let d="";const p=u.length,T=Dt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return on(o),pr(o),"";o.h.i=new a.TextDecoder}for(let S=0;S<p;S++)o.h.h=!0,d+=o.h.i.decode(u[S],{stream:!(T&&S==p-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function ac(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Zf(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?zi:(d=Number(u.substring(d,p)),isNaN(d)?ic:(p+=1,p+d>u.length?zi:(u=u.slice(p,p+d),o.C=p+d,u)))}Pt.prototype.cancel=function(){this.K=!0,on(this)};function ds(o){o.T=Date.now()+o.H,cc(o,o.H)}function cc(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=dr(f(o.aa,o),u)}function Wi(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Pt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Qf(this.i,this.B),this.M!=2&&(hr(),Be(17)),on(this),this.m=2,pr(this)):cc(this,this.T-o)};function pr(o){o.j.I==0||o.K||jc(o.j,o)}function on(o){Wi(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Qa(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Ki(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||Qi(d.h,o))){if(!o.L&&Qi(d.h,o)&&d.I==3){try{var p=d.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)_s(d),gs(d);else break e;to(d),Be(18)}}else d.xa=T[1],0<d.xa-d.K&&T[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=dr(f(d.Va,d),6e3));hc(d.h)<=1&&d.ta&&(d.ta=void 0)}else cn(d,11)}else if((o.L||d.g==o)&&_s(d),!_(u))for(T=d.Ba.g.parse(u),u=0;u<T.length;u++){let ae=T[u];const Ae=ae[0];if(!(Ae<=d.K))if(d.K=Ae,ae=ae[1],d.I==2)if(ae[0]=="c"){d.M=ae[1],d.ba=ae[2];const ht=ae[3];ht!=null&&(d.ka=ht,d.j.info("VER="+d.ka));const ln=ae[4];ln!=null&&(d.za=ln,d.j.info("SVER="+d.za));const Vt=ae[5];Vt!=null&&typeof Vt=="number"&&Vt>0&&(p=1.5*Vt,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ot=o.g;if(Ot){const vs=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vs){var S=p.h;S.g||vs.indexOf("spdy")==-1&&vs.indexOf("quic")==-1&&vs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Yi(S,S.h),S.h=null))}if(p.G){const ro=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;ro&&(p.wa=ro,he(p.J,p.G,ro))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var V=o;if(p.na=Oc(p,p.L?p.ba:null,p.W),V.L){dc(p.h,V);var Q=V,Ee=p.O;Ee&&(Q.H=Ee),Q.D&&(Wi(Q),ds(Q)),p.g=V}else Pc(p);d.i.length>0&&ys(d)}else ae[0]!="stop"&&ae[0]!="close"||cn(d,7);else d.I==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?cn(d,7):eo(d):ae[0]!="noop"&&d.l&&d.l.qa(ae),d.A=0)}}hr(4)}catch{}}var em=class{constructor(o,u){this.g=o,this.map=u}};function lc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function uc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function hc(o){return o.h?1:o.g?o.g.size:0}function Qi(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Yi(o,u){o.g?o.g.add(u):o.h=u}function dc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}lc.prototype.cancel=function(){if(this.i=fc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function fc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return A(o.i)}var mc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tm(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const p=o[d].indexOf("=");let T,S=null;p>=0?(T=o[d].substring(0,p),S=o[d].substring(p+1)):T=o[d],u(T,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function kt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof kt?(this.l=o.l,gr(this,o.j),this.o=o.o,this.g=o.g,yr(this,o.u),this.h=o.h,Ji(this,vc(o.i)),this.m=o.m):o&&(u=String(o).match(mc))?(this.l=!1,gr(this,u[1]||"",!0),this.o=_r(u[2]||""),this.g=_r(u[3]||"",!0),yr(this,u[4]),this.h=_r(u[5]||"",!0),Ji(this,u[6]||"",!0),this.m=_r(u[7]||"")):(this.l=!1,this.i=new vr(null,this.l))}kt.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(wr(u,pc,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(wr(u,pc,!0),"@"),o.push(mr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(wr(d,d.charAt(0)=="/"?sm:rm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",wr(d,om)),o.join("")},kt.prototype.resolve=function(o){const u=ut(this);let d=!!o.j;d?gr(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var p=o.h;if(d)yr(u,o.u);else if(d=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var T=u.h.lastIndexOf("/");T!=-1&&(p=u.h.slice(0,T+1)+p)}if(T=p,T==".."||T==".")p="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){p=T.lastIndexOf("/",0)==0,T=T.split("/");const S=[];for(let V=0;V<T.length;){const Q=T[V++];Q=="."?p&&V==T.length&&S.push(""):Q==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),p&&V==T.length&&S.push("")):(S.push(Q),p=!0)}p=S.join("/")}else p=T}return d?u.h=p:d=o.i.toString()!=="",d?Ji(u,vc(o.i)):d=!!o.m,d&&(u.m=o.m),u};function ut(o){return new kt(o)}function gr(o,u,d){o.j=d?_r(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function yr(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Ji(o,u,d){u instanceof vr?(o.i=u,am(o.i,o.l)):(d||(u=wr(u,im)),o.i=new vr(u,o.l))}function he(o,u,d){o.i.set(u,d)}function fs(o){return he(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function _r(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function wr(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,nm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function nm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var pc=/[#\/\?@]/g,rm=/[#\?:]/g,sm=/[#\?]/g,im=/[#\?@]/g,om=/#/g;function vr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function an(o){o.g||(o.g=new Map,o.h=0,o.i&&tm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=vr.prototype,n.add=function(o,u){an(this),this.i=null,o=Rn(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function gc(o,u){an(o),u=Rn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function yc(o,u){return an(o),u=Rn(o,u),o.g.has(u)}n.forEach=function(o,u){an(this),this.g.forEach(function(d,p){d.forEach(function(T){o.call(u,T,p,this)},this)},this)};function _c(o,u){an(o);let d=[];if(typeof u=="string")yc(o,u)&&(d=d.concat(o.g.get(Rn(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}n.set=function(o,u){return an(this),this.i=null,o=Rn(this,o),yc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=_c(this,o),o.length>0?String(o[0]):u):u};function wc(o,u,d){gc(o,u),d.length>0&&(o.i=null,o.g.set(Rn(o,u),A(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var d=u[p];const T=mr(d);d=_c(this,d);for(let S=0;S<d.length;S++){let V=T;d[S]!==""&&(V+="="+mr(d[S])),o.push(V)}}return this.i=o.join("&")};function vc(o){const u=new vr;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Rn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function am(o,u){u&&!o.j&&(an(o),o.i=null,o.g.forEach(function(d,p){const T=p.toLowerCase();p!=T&&(gc(this,p),wc(this,T,d))},o)),o.j=u}function cm(o,u){const d=new fr;if(a.Image){const p=new Image;p.onload=m(jt,d,"TestLoadImage: loaded",!0,u,p),p.onerror=m(jt,d,"TestLoadImage: error",!1,u,p),p.onabort=m(jt,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=m(jt,d,"TestLoadImage: timeout",!1,u,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function lm(o,u){const d=new fr,p=new AbortController,T=setTimeout(()=>{p.abort(),jt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(T),S.ok?jt(d,"TestPingServer: ok",!0,u):jt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(T),jt(d,"TestPingServer: error",!1,u)})}function jt(o,u,d,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(d)}catch{}}function um(){this.g=new Gf}function Xi(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Xi,Ya),Xi.prototype.g=function(){return new ms(this.i,this.h)};function ms(o,u){Ve.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(ms,Ve),n=ms.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,xr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,br(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,xr(this)),this.g&&(this.readyState=3,xr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;bc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function bc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?br(this):xr(this),this.readyState==3&&bc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,br(this))},n.Na=function(o){this.g&&(this.response=o,br(this))},n.ga=function(){this.g&&br(this)};function br(o){o.readyState=4,o.l=null,o.j=null,o.B=null,xr(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function xr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ms.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function xc(o){let u="";return ue(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Zi(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=xc(d),typeof o=="string"?d!=null&&mr(d):he(o,u,d))}function pe(o){Ve.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(pe,Ve);var hm=/^https?$/i,dm=["POST","PUT"];n=pe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():rc.g(),this.g.onreadystatechange=w(f(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(S){Ec(this,S);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)d.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())d.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),T=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(dm,u,void 0)>=0)||p||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,V]of d)this.g.setRequestHeader(S,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(S){Ec(this,S)}};function Ec(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Ic(o),ps(o)}function Ic(o){o.A||(o.A=!0,Ue(o,"complete"),Ue(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ue(this,"complete"),Ue(this,"abort"),ps(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ps(this,!0)),pe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Tc(this):this.Xa())},n.Xa=function(){Tc(this)};function Tc(o){if(o.h&&typeof i<"u"){if(o.v&&Dt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ue(o,"readystatechange"),Dt(o)==4){o.h=!1;try{const S=o.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=S===0){let V=String(o.D).match(mc)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),p=!hm.test(V?V.toLowerCase():"")}d=p}if(d)Ue(o,"complete"),Ue(o,"success");else{o.o=6;try{var T=Dt(o)>2?o.g.statusText:""}catch{T=""}o.l=T+" ["+o.ca()+"]",Ic(o)}}finally{ps(o)}}}}function ps(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||Ue(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Dt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Dt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),zf(u)}};function Ac(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function fm(o){const u={};o=(o.g&&Dt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(_(o[p]))continue;var d=Jf(o[p]);const T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=u[T]||[];u[T]=S,S.push(d)}$e(u,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Er(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Sc(o){this.za=0,this.i=[],this.j=new fr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Er("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Er("baseRetryDelayMs",5e3,o),this.Za=Er("retryDelaySeedMs",1e4,o),this.Ta=Er("forwardChannelMaxRetries",2,o),this.va=Er("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new lc(o&&o.concurrentRequestLimit),this.Ba=new um,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Sc.prototype,n.ka=8,n.I=1,n.connect=function(o,u,d,p){Be(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=Oc(this,null,this.W),ys(this)};function eo(o){if(Nc(o),o.I==3){var u=o.V++,d=ut(o.J);if(he(d,"SID",o.M),he(d,"RID",u),he(d,"TYPE","terminate"),Ir(o,d),u=new Pt(o,o.j,u),u.M=2,u.A=fs(ut(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=u.A,d=!0),d||(u.g=Mc(u.j,null),u.g.ea(u.A)),u.F=Date.now(),ds(u)}Vc(o)}function gs(o){o.g&&(no(o),o.g.cancel(),o.g=null)}function Nc(o){gs(o),o.v&&(a.clearTimeout(o.v),o.v=null),_s(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function ys(o){if(!uc(o.h)&&!o.m){o.m=!0;var u=o.Ea;ie||y(),oe||(ie(),oe=!0),x.add(u,o),o.D=0}}function mm(o,u){return hc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=dr(f(o.Ea,o,u),Dc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const T=new Pt(this,this.j,o);let S=this.o;if(this.U&&(S?(S=bt(S),ct(S,this.U)):S=this.U),this.u!==null||this.R||(T.J=S,S=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Cc(this,T,u),d=ut(this.J),he(d,"RID",o),he(d,"CVER",22),this.G&&he(d,"X-HTTP-Session-Id",this.G),Ir(this,d),S&&(this.R?u="headers="+mr(xc(S))+"&"+u:this.u&&Zi(d,this.u,S)),Yi(this.h,T),this.Ra&&he(d,"TYPE","init"),this.S?(he(d,"$req",u),he(d,"SID","null"),T.U=!0,Gi(T,d,null)):Gi(T,d,u),this.I=2}}else this.I==3&&(o?Rc(this,o):this.i.length==0||uc(this.h)||Rc(this))};function Rc(o,u){var d;u?d=u.l:d=o.V++;const p=ut(o.J);he(p,"SID",o.M),he(p,"RID",d),he(p,"AID",o.K),Ir(o,p),o.u&&o.o&&Zi(p,o.u,o.o),d=new Pt(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Cc(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Yi(o.h,d),Gi(d,p,u)}function Ir(o,u){o.H&&ue(o.H,function(d,p){he(u,p,d)}),o.l&&ue({},function(d,p){he(u,p,d)})}function Cc(o,u,d){d=Math.min(o.i.length,d);const p=o.l?f(o.l.Ka,o.l,o):null;e:{var T=o.i;let Q=-1;for(;;){const Ee=["count="+d];Q==-1?d>0?(Q=T[0].g,Ee.push("ofs="+Q)):Q=0:Ee.push("ofs="+Q);let ae=!0;for(let Ae=0;Ae<d;Ae++){var S=T[Ae].g;const ht=T[Ae].map;if(S-=Q,S<0)Q=Math.max(0,T[Ae].g-100),ae=!1;else try{S="req"+S+"_"||"";try{var V=ht instanceof Map?ht:Object.entries(ht);for(const[ln,Vt]of V){let Ot=Vt;l(Vt)&&(Ot=Bi(Vt)),Ee.push(S+ln+"="+encodeURIComponent(Ot))}}catch(ln){throw Ee.push(S+"type="+encodeURIComponent("_badmap")),ln}}catch{p&&p(ht)}}if(ae){V=Ee.join("&");break e}}V=void 0}return o=o.i.splice(0,d),u.G=o,V}function Pc(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;ie||y(),oe||(ie(),oe=!0),x.add(u,o),o.A=0}}function to(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=dr(f(o.Da,o),Dc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,kc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=dr(f(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Be(10),gs(this),kc(this))};function no(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function kc(o){o.g=new Pt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=ut(o.na);he(u,"RID","rpc"),he(u,"SID",o.M),he(u,"AID",o.K),he(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&he(u,"TO",o.ia),he(u,"TYPE","xmlhttp"),Ir(o,u),o.u&&o.o&&Zi(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=fs(ut(u)),d.u=null,d.R=!0,oc(d,o)}n.Va=function(){this.C!=null&&(this.C=null,gs(this),to(this),Be(19))};function _s(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function jc(o,u){var d=null;if(o.g==u){_s(o),no(o),o.g=null;var p=2}else if(Qi(o.h,u))d=u.G,dc(o.h,u),p=1;else return;if(o.I!=0){if(u.o)if(p==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var T=o.D;p=us(),Ue(p,new tc(p,d)),ys(o)}else Pc(o);else if(T=u.m,T==3||T==0&&u.X>0||!(p==1&&mm(o,u)||p==2&&to(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),T){case 1:cn(o,5);break;case 4:cn(o,10);break;case 3:cn(o,6);break;default:cn(o,2)}}}function Dc(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function cn(o,u){if(o.j.info("Error code "+u),u==2){var d=f(o.bb,o),p=o.Ua;const T=!p;p=new kt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||gr(p,"https"),fs(p),T?cm(p.toString(),d):lm(p.toString(),d)}else Be(2);o.I=0,o.l&&o.l.pa(u),Vc(o),Nc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function Vc(o){if(o.I=0,o.ja=[],o.l){const u=fc(o.h);(u.length!=0||o.i.length!=0)&&(C(o.ja,u),C(o.ja,o.i),o.h.i.length=0,A(o.i),o.i.length=0),o.l.oa()}}function Oc(o,u,d){var p=d instanceof kt?ut(d):new kt(d);if(p.g!="")u&&(p.g=u+"."+p.g),yr(p,p.u);else{var T=a.location;p=T.protocol,u=u?u+"."+T.hostname:T.hostname,T=+T.port;const S=new kt(null);p&&gr(S,p),u&&(S.g=u),T&&yr(S,T),d&&(S.h=d),p=S}return d=o.G,u=o.wa,d&&u&&he(p,d,u),he(p,"VER",o.ka),Ir(o,p),p}function Mc(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new pe(new Xi({ab:d})):new pe(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lc(){}n=Lc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ws(){}ws.prototype.g=function(o,u){return new ze(o,u)};function ze(o,u){Ve.call(this),this.g=new Sc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!_(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Cn(this)}g(ze,Ve),ze.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ze.prototype.close=function(){eo(this.g)},ze.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Bi(o),o=d);u.i.push(new em(u.Ya++,o)),u.I==3&&ys(u)},ze.prototype.N=function(){this.g.l=null,delete this.j,eo(this.g),delete this.g,ze.Z.N.call(this)};function Fc(o){qi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}g(Fc,qi);function Uc(){$i.call(this),this.status=1}g(Uc,$i);function Cn(o){this.g=o}g(Cn,Lc),Cn.prototype.ra=function(){Ue(this.g,"a")},Cn.prototype.qa=function(o){Ue(this.g,new Fc(o))},Cn.prototype.pa=function(o){Ue(this.g,new Uc)},Cn.prototype.oa=function(){Ue(this.g,"b")},ws.prototype.createWebChannel=ws.prototype.g,ze.prototype.send=ze.prototype.o,ze.prototype.open=ze.prototype.m,ze.prototype.close=ze.prototype.close,zh=function(){return new ws},Hh=function(){return us()},$h=sn,ko={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,Vs=hs,nc.COMPLETE="complete",qh=nc,Ja.EventType=ur,ur.OPEN="a",ur.CLOSE="b",ur.ERROR="c",ur.MESSAGE="d",Ve.prototype.listen=Ve.prototype.J,Nr=Ja,pe.prototype.listenOnce=pe.prototype.K,pe.prototype.getLastError=pe.prototype.Ha,pe.prototype.getLastErrorCode=pe.prototype.ya,pe.prototype.getStatus=pe.prototype.ca,pe.prototype.getResponseJson=pe.prototype.La,pe.prototype.getResponseText=pe.prototype.la,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Fa,Bh=pe}).apply(typeof Ts<"u"?Ts:typeof self<"u"?self:typeof window<"u"?window:{});const Sl="@firebase/firestore",Nl="4.9.2";/**
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
 */let er="12.3.0";/**
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
 */const pn=new fi("@firebase/firestore");function Pn(){return pn.logLevel}function L(n,...e){if(pn.logLevel<=J.DEBUG){const t=e.map(aa);pn.debug(`Firestore (${er}): ${n}`,...t)}}function Rt(n,...e){if(pn.logLevel<=J.ERROR){const t=e.map(aa);pn.error(`Firestore (${er}): ${n}`,...t)}}function $n(n,...e){if(pn.logLevel<=J.WARN){const t=e.map(aa);pn.warn(`Firestore (${er}): ${n}`,...t)}}function aa(n){if(typeof n=="string")return n;try{/**
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
 */function $(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Gh(n,r,t)}function Gh(n,e,t){let r=`FIRESTORE (${er}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Rt(r),new Error(r)}function re(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Gh(e,s,r)}function W(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends at{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ww{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Me.UNAUTHENTICATED)))}shutdown(){}}class Kw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Qw{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let i=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tt,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=i;e.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},l=h=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string",31837,{l:r}),new Wh(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string",2055,{h:e}),new Me(e)}}class Yw{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Jw{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Yw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Me.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Rl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,et(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){re(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Rl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Rl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Zw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class ca{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Zw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function X(n,e){return n<e?-1:n>e?1:0}function jo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return fo(s)===fo(i)?X(s,i):fo(s)?1:-1}return X(n.length,e.length)}const e0=55296,t0=57343;function fo(n){const e=n.charCodeAt(0);return e>=e0&&e<=t0}function Hn(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const Cl="__name__";class dt{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&$(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return dt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof dt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=dt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return X(e.length,t.length)}static compareSegments(e,t){const r=dt.isNumericId(e),s=dt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?dt.extractNumericId(e).compare(dt.extractNumericId(t)):jo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gt.fromString(e.substring(4,e.length-2))}}class le extends dt{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new le(t)}static emptyPath(){return new le([])}}const n0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ce extends dt{construct(e,t,r){return new Ce(e,t,r)}static isValidIdentifier(e){return n0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ce.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cl}static keyField(){return new Ce([Cl])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new M(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new M(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new M(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ce(t)}static emptyPath(){return new Ce([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(le.fromString(e))}static fromName(e){return new B(le.fromString(e).popFirst(5))}static empty(){return new B(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new le(e.slice()))}}/**
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
 */function Kh(n,e,t){if(!t)throw new M(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function r0(n,e,t,r){if(e===!0&&r===!0)throw new M(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Pl(n){if(!B.isDocumentKey(n))throw new M(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function kl(n){if(B.isDocumentKey(n))throw new M(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function wi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$(12329,{type:typeof n})}function gn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wi(n);throw new M(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ve(n,e){const t={typeString:n};return e&&(t.value=e),t}function ss(n,e){if(!Qh(n))throw new M(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new M(N.INVALID_ARGUMENT,t);return!0}/**
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
 */const jl=-62135596800,Dl=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Dl);return new de(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<jl)throw new M(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Dl}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ss(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:ve("string",de._jsonSchemaVersion),seconds:ve("number"),nanoseconds:ve("number")};/**
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
 */class G{static fromTimestamp(e){return new G(e)}static min(){return new G(new de(0,0))}static max(){return new G(new de(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Hr=-1;function s0(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new de(t+1,0):new de(t,r));return new Qt(s,B.empty(),e)}function i0(n){return new Qt(n.readTime,n.key,Hr)}class Qt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Qt(G.min(),B.empty(),Hr)}static max(){return new Qt(G.max(),B.empty(),Hr)}}function o0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
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
 */const a0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class c0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function tr(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==a0)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,r)=>{t(e)}))}static reject(e){return new R(((t,r)=>{r(e)}))}static waitFor(e){return new R(((t,r)=>{let s=0,i=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&t()}),(h=>r(h)))})),a=!0,i===s&&t()}))}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next((s=>s?R.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new R(((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let h=0;h<i;h++){const f=h;t(e[f]).next((m=>{a[f]=m,++l,l===i&&r(a)}),(m=>s(m)))}}))}static doWhile(e,t){return new R(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function l0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function nr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class vi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}vi.ce=-1;/**
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
 */const la=-1;function bi(n){return n==null}function Js(n){return n===0&&1/n==-1/0}function u0(n){return typeof n=="number"&&Number.isInteger(n)&&!Js(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Yh="";function h0(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Vl(e)),e=d0(n.get(t),e);return Vl(e)}function d0(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Yh:t+="";break;default:t+=i}}return t}function Vl(n){return n+Yh+""}/**
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
 */function Ol(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function nn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Jh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class me{constructor(e,t){this.comparator=e,this.root=t||Re.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new As(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new As(this.root,e,this.comparator,!1)}getReverseIterator(){return new As(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new As(this.root,e,this.comparator,!0)}}class As{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Re.RED,this.left=s??Re.EMPTY,this.right=i??Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Re(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Re.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw $(27949);return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Re(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ie{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ml(this.data.getIterator())}getIteratorFrom(e){return new Ml(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class Ml{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class nt{constructor(e){this.fields=e,e.sort(Ce.comparator)}static empty(){return new nt([])}unionWith(e){let t=new Ie(Ce.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new nt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Hn(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Xh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ke{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Xh("Invalid base64 string: "+i):i}})(e);return new ke(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new ke(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ke.EMPTY_BYTE_STRING=new ke("");const f0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(n){if(re(!!n,39018),typeof n=="string"){let e=0;const t=f0.exec(n);if(re(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jt(n){return typeof n=="string"?ke.fromBase64String(n):ke.fromUint8Array(n)}/**
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
 */const Zh="server_timestamp",ed="__type__",td="__previous_value__",nd="__local_write_time__";function ua(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[ed])==null?void 0:r.stringValue)===Zh}function xi(n){const e=n.mapValue.fields[td];return ua(e)?xi(e):e}function zr(n){const e=Yt(n.mapValue.fields[nd].timestampValue);return new de(e.seconds,e.nanos)}/**
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
 */class m0{constructor(e,t,r,s,i,a,l,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m}}const Xs="(default)";class Gr{constructor(e,t){this.projectId=e,this.database=t||Xs}static empty(){return new Gr("","")}get isDefaultDatabase(){return this.database===Xs}isEqual(e){return e instanceof Gr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const rd="__type__",p0="__max__",Ss={mapValue:{}},sd="__vector__",Zs="value";function Xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ua(n)?4:y0(n)?9007199254740991:g0(n)?10:11:$(28295,{value:n})}function vt(n,e){if(n===e)return!0;const t=Xt(n);if(t!==Xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zr(n).isEqual(zr(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Yt(s.timestampValue),l=Yt(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Jt(s.bytesValue).isEqual(Jt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return ge(s.geoPointValue.latitude)===ge(i.geoPointValue.latitude)&&ge(s.geoPointValue.longitude)===ge(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ge(s.integerValue)===ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ge(s.doubleValue),l=ge(i.doubleValue);return a===l?Js(a)===Js(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Hn(n.arrayValue.values||[],e.arrayValue.values||[],vt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ol(a)!==Ol(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!vt(a[h],l[h])))return!1;return!0})(n,e);default:return $(52216,{left:n})}}function Wr(n,e){return(n.values||[]).find((t=>vt(t,e)))!==void 0}function zn(n,e){if(n===e)return 0;const t=Xt(n),r=Xt(e);if(t!==r)return X(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=ge(i.integerValue||i.doubleValue),h=ge(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,e);case 3:return Ll(n.timestampValue,e.timestampValue);case 4:return Ll(zr(n),zr(e));case 5:return jo(n.stringValue,e.stringValue);case 6:return(function(i,a){const l=Jt(i),h=Jt(a);return l.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const m=X(l[f],h[f]);if(m!==0)return m}return X(l.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=X(ge(i.latitude),ge(a.latitude));return l!==0?l:X(ge(i.longitude),ge(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Fl(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var w,A,C,j;const l=i.fields||{},h=a.fields||{},f=(w=l[Zs])==null?void 0:w.arrayValue,m=(A=h[Zs])==null?void 0:A.arrayValue,g=X(((C=f==null?void 0:f.values)==null?void 0:C.length)||0,((j=m==null?void 0:m.values)==null?void 0:j.length)||0);return g!==0?g:Fl(f,m)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Ss.mapValue&&a===Ss.mapValue)return 0;if(i===Ss.mapValue)return 1;if(a===Ss.mapValue)return-1;const l=i.fields||{},h=Object.keys(l),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let g=0;g<h.length&&g<m.length;++g){const w=jo(h[g],m[g]);if(w!==0)return w;const A=zn(l[h[g]],f[m[g]]);if(A!==0)return A}return X(h.length,m.length)})(n.mapValue,e.mapValue);default:throw $(23264,{he:t})}}function Ll(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=Yt(n),r=Yt(e),s=X(t.seconds,r.seconds);return s!==0?s:X(t.nanos,r.nanos)}function Fl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=zn(t[s],r[s]);if(i)return i}return X(t.length,r.length)}function Gn(n){return Do(n)}function Do(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Yt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Jt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return B.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Do(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Do(t.fields[a])}`;return s+"}"})(n.mapValue):$(61005,{value:n})}function Os(n){switch(Xt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xi(n);return e?16+Os(e):16;case 5:return 2*n.stringValue.length;case 6:return Jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Os(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return nn(r.fields,((i,a)=>{s+=i.length+Os(a)})),s})(n.mapValue);default:throw $(13486,{value:n})}}function Ul(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Vo(n){return!!n&&"integerValue"in n}function ha(n){return!!n&&"arrayValue"in n}function Bl(n){return!!n&&"nullValue"in n}function ql(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ms(n){return!!n&&"mapValue"in n}function g0(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[rd])==null?void 0:r.stringValue)===sd}function Dr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return nn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Dr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Dr(n.arrayValue.values[t]);return e}return{...n}}function y0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===p0}/**
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
 */class Ge{constructor(e){this.value=e}static empty(){return new Ge({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ms(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Dr(t)}setAll(e){let t=Ce.emptyPath(),r={},s=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Dr(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ms(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ms(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){nn(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Ge(Dr(this.value))}}function id(n){const e=[];return nn(n.fields,((t,r)=>{const s=new Ce([t]);if(Ms(r)){const i=id(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new nt(e)}/**
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
 */class Le{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Le(e,0,G.min(),G.min(),G.min(),Ge.empty(),0)}static newFoundDocument(e,t,r,s){return new Le(e,1,t,G.min(),r,s,0)}static newNoDocument(e,t){return new Le(e,2,t,G.min(),G.min(),Ge.empty(),0)}static newUnknownDocument(e,t){return new Le(e,3,t,G.min(),G.min(),Ge.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ge.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ei{constructor(e,t){this.position=e,this.inclusive=t}}function $l(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),t.key):r=zn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!vt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Kr{constructor(e,t="asc"){this.field=e,this.dir=t}}function _0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class od{}class we extends od{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new v0(e,t,r):t==="array-contains"?new E0(e,r):t==="in"?new I0(e,r):t==="not-in"?new T0(e,r):t==="array-contains-any"?new A0(e,r):new we(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new b0(e,r):new x0(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zn(t,this.value)):t!==null&&Xt(this.value)===Xt(t)&&this.matchesComparison(zn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ot extends od{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ot(e,t)}matches(e){return ad(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ad(n){return n.op==="and"}function cd(n){return w0(n)&&ad(n)}function w0(n){for(const e of n.filters)if(e instanceof ot)return!1;return!0}function Oo(n){if(n instanceof we)return n.field.canonicalString()+n.op.toString()+Gn(n.value);if(cd(n))return n.filters.map((e=>Oo(e))).join(",");{const e=n.filters.map((t=>Oo(t))).join(",");return`${n.op}(${e})`}}function ld(n,e){return n instanceof we?(function(r,s){return s instanceof we&&r.op===s.op&&r.field.isEqual(s.field)&&vt(r.value,s.value)})(n,e):n instanceof ot?(function(r,s){return s instanceof ot&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&ld(a,s.filters[l])),!0):!1})(n,e):void $(19439)}function ud(n){return n instanceof we?(function(t){return`${t.field.canonicalString()} ${t.op} ${Gn(t.value)}`})(n):n instanceof ot?(function(t){return t.op.toString()+" {"+t.getFilters().map(ud).join(" ,")+"}"})(n):"Filter"}class v0 extends we{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class b0 extends we{constructor(e,t){super(e,"in",t),this.keys=hd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class x0 extends we{constructor(e,t){super(e,"not-in",t),this.keys=hd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function hd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>B.fromName(r.referenceValue)))}class E0 extends we{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ha(t)&&Wr(t.arrayValue,this.value)}}class I0 extends we{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wr(this.value.arrayValue,t)}}class T0 extends we{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Wr(this.value.arrayValue,t)}}class A0 extends we{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ha(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Wr(this.value.arrayValue,r)))}}/**
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
 */class S0{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function zl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new S0(n,e,t,r,s,i,a)}function da(n){const e=W(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Oo(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),bi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Gn(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Gn(r))).join(",")),e.Te=t}return e.Te}function fa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!_0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ld(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Hl(n.startAt,e.startAt)&&Hl(n.endAt,e.endAt)}function Mo(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class rr{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function N0(n,e,t,r,s,i,a,l){return new rr(n,e,t,r,s,i,a,l)}function ma(n){return new rr(n)}function Gl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dd(n){return n.collectionGroup!==null}function Vr(n){const e=W(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ie(Ce.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Kr(i,r))})),t.has(Ce.keyField().canonicalString())||e.Ie.push(new Kr(Ce.keyField(),r))}return e.Ie}function pt(n){const e=W(n);return e.Ee||(e.Ee=R0(e,Vr(n))),e.Ee}function R0(n,e){if(n.limitType==="F")return zl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Kr(s.field,i)}));const t=n.endAt?new ei(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ei(n.startAt.position,n.startAt.inclusive):null;return zl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Lo(n,e){const t=n.filters.concat([e]);return new rr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Fo(n,e,t){return new rr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ei(n,e){return fa(pt(n),pt(e))&&n.limitType===e.limitType}function fd(n){return`${da(pt(n))}|lt:${n.limitType}`}function kn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>ud(s))).join(", ")}]`),bi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Gn(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Gn(s))).join(",")),`Target(${r})`})(pt(n))}; limitType=${n.limitType})`}function Ii(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Vr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,l,h){const f=$l(a,l,h);return a.inclusive?f<=0:f<0})(r.startAt,Vr(r),s)||r.endAt&&!(function(a,l,h){const f=$l(a,l,h);return a.inclusive?f>=0:f>0})(r.endAt,Vr(r),s))})(n,e)}function C0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function md(n){return(e,t)=>{let r=!1;for(const s of Vr(n)){const i=P0(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function P0(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):(function(i,a,l){const h=a.data.field(i),f=l.data.field(i);return h!==null&&f!==null?zn(h,f):$(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $(19790,{direction:n.dir})}}/**
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
 */class En{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){nn(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Jh(this.inner)}size(){return this.innerSize}}/**
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
 */const k0=new me(B.comparator);function Ct(){return k0}const pd=new me(B.comparator);function Rr(...n){let e=pd;for(const t of n)e=e.insert(t.key,t);return e}function gd(n){let e=pd;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function hn(){return Or()}function yd(){return Or()}function Or(){return new En((n=>n.toString()),((n,e)=>n.isEqual(e)))}const j0=new me(B.comparator),D0=new Ie(B.comparator);function Z(...n){let e=D0;for(const t of n)e=e.add(t);return e}const V0=new Ie(X);function O0(){return V0}/**
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
 */function pa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Js(e)?"-0":e}}function _d(n){return{integerValue:""+n}}function M0(n,e){return u0(e)?_d(e):pa(n,e)}/**
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
 */class Ti{constructor(){this._=void 0}}function L0(n,e,t){return n instanceof Qr?(function(s,i){const a={fields:{[ed]:{stringValue:Zh},[nd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ua(i)&&(i=xi(i)),i&&(a.fields[td]=i),{mapValue:a}})(t,e):n instanceof Yr?vd(n,e):n instanceof Jr?bd(n,e):(function(s,i){const a=wd(s,i),l=Wl(a)+Wl(s.Ae);return Vo(a)&&Vo(s.Ae)?_d(l):pa(s.serializer,l)})(n,e)}function F0(n,e,t){return n instanceof Yr?vd(n,e):n instanceof Jr?bd(n,e):t}function wd(n,e){return n instanceof ti?(function(r){return Vo(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Qr extends Ti{}class Yr extends Ti{constructor(e){super(),this.elements=e}}function vd(n,e){const t=xd(e);for(const r of n.elements)t.some((s=>vt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Jr extends Ti{constructor(e){super(),this.elements=e}}function bd(n,e){let t=xd(e);for(const r of n.elements)t=t.filter((s=>!vt(s,r)));return{arrayValue:{values:t}}}class ti extends Ti{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Wl(n){return ge(n.integerValue||n.doubleValue)}function xd(n){return ha(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class U0{constructor(e,t){this.field=e,this.transform=t}}function B0(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Yr&&s instanceof Yr||r instanceof Jr&&s instanceof Jr?Hn(r.elements,s.elements,vt):r instanceof ti&&s instanceof ti?vt(r.Ae,s.Ae):r instanceof Qr&&s instanceof Qr})(n.transform,e.transform)}class q0{constructor(e,t){this.version=e,this.transformResults=t}}class At{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new At}static exists(e){return new At(void 0,e)}static updateTime(e){return new At(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ls(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ai{}function Ed(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Td(n.key,At.none()):new Si(n.key,n.data,At.none());{const t=n.data,r=Ge.empty();let s=new Ie(Ce.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new In(n.key,r,new nt(s.toArray()),At.none())}}function $0(n,e,t){n instanceof Si?(function(s,i,a){const l=s.value.clone(),h=Ql(s.fieldTransforms,i,a.transformResults);l.setAll(h),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof In?(function(s,i,a){if(!Ls(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Ql(s.fieldTransforms,i,a.transformResults),h=i.data;h.setAll(Id(s)),h.setAll(l),i.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Mr(n,e,t,r){return n instanceof Si?(function(i,a,l,h){if(!Ls(i.precondition,a))return l;const f=i.value.clone(),m=Yl(i.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(n,e,t,r):n instanceof In?(function(i,a,l,h){if(!Ls(i.precondition,a))return l;const f=Yl(i.fieldTransforms,h,a),m=a.data;return m.setAll(Id(i)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,e,t,r):(function(i,a,l){return Ls(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function H0(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=wd(r.transform,s||null);i!=null&&(t===null&&(t=Ge.empty()),t.set(r.field,i))}return t||null}function Kl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hn(r,s,((i,a)=>B0(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Si extends Ai{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class In extends Ai{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Id(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Ql(n,e,t){const r=new Map;re(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,F0(a,l,t[s]))}return r}function Yl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,L0(i,a,e))}return r}class Td extends Ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class z0 extends Ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class G0{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&$0(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Mr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Mr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=yd();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const h=Ed(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(G.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Z())}isEqual(e){return this.batchId===e.batchId&&Hn(this.mutations,e.mutations,((t,r)=>Kl(t,r)))&&Hn(this.baseMutations,e.baseMutations,((t,r)=>Kl(t,r)))}}class ga{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){re(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return j0})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ga(e,t,r,s)}}/**
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
 */class W0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class K0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var _e,te;function Q0(n){switch(n){case N.OK:return $(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return $(15467,{code:n})}}function Ad(n){if(n===void 0)return Rt("GRPC error has no .code"),N.UNKNOWN;switch(n){case _e.OK:return N.OK;case _e.CANCELLED:return N.CANCELLED;case _e.UNKNOWN:return N.UNKNOWN;case _e.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case _e.INTERNAL:return N.INTERNAL;case _e.UNAVAILABLE:return N.UNAVAILABLE;case _e.UNAUTHENTICATED:return N.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case _e.NOT_FOUND:return N.NOT_FOUND;case _e.ALREADY_EXISTS:return N.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return N.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case _e.ABORTED:return N.ABORTED;case _e.OUT_OF_RANGE:return N.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return N.UNIMPLEMENTED;case _e.DATA_LOSS:return N.DATA_LOSS;default:return $(39323,{code:n})}}(te=_e||(_e={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Y0(){return new TextEncoder}/**
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
 */const J0=new Gt([4294967295,4294967295],0);function Jl(n){const e=Y0().encode(n),t=new Uh;return t.update(e),new Uint8Array(t.digest())}function Xl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gt([t,r],0),new Gt([s,i],0)]}class ya{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Cr(`Invalid padding: ${t}`);if(r<0)throw new Cr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Cr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Cr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Gt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Gt.fromNumber(r)));return s.compare(J0)===1&&(s=new Gt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Jl(e),[r,s]=Xl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ya(i,s,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.ge===0)return;const t=Jl(e),[r,s]=Xl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Cr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ni{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,is.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ni(G.min(),s,new me(X),Ct(),Z())}}class is{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new is(r,t,Z(),Z(),Z())}}/**
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
 */class Fs{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Sd{constructor(e,t){this.targetId=e,this.Ce=t}}class Nd{constructor(e,t,r=ke.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Zl{constructor(){this.ve=0,this.Fe=eu(),this.Me=ke.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Z(),t=Z(),r=Z();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:$(38017,{changeType:i})}})),new is(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=eu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,re(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class X0{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ct(),this.Je=Ns(),this.He=Ns(),this.Ye=new me(X)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:$(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Mo(i))if(r===0){const a=new B(i.path);this.et(t,a,Le.newNoDocument(a,G.min()))}else re(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),h=l?this.ct(l,e,a):1;if(h!==0){this.it(t);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,f)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Jt(r).toUint8Array()}catch(h){if(h instanceof Xh)return $n("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new ya(a,s,i)}catch(h){return $n(h instanceof Cr?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Mo(l.target)){const h=new B(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Le.newNoDocument(h,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let r=Z();this.He.forEach(((i,a)=>{let l=!0;a.forEachWhile((h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new Ni(e,t,this.Ye,this.je,r);return this.je=Ct(),this.Je=Ns(),this.He=Ns(),this.Ye=new me(X),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Zl,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ie(X),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ie(X),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Zl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ns(){return new me(B.comparator)}function eu(){return new me(B.comparator)}const Z0={asc:"ASCENDING",desc:"DESCENDING"},ev={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tv={and:"AND",or:"OR"};class nv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Uo(n,e){return n.useProto3Json||bi(e)?e:{value:e}}function ni(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function rv(n,e){return ni(n,e.toTimestamp())}function gt(n){return re(!!n,49232),G.fromTimestamp((function(t){const r=Yt(t);return new de(r.seconds,r.nanos)})(n))}function _a(n,e){return Bo(n,e).canonicalString()}function Bo(n,e){const t=(function(s){return new le(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Cd(n){const e=le.fromString(n);return re(Vd(e),10190,{key:e.toString()}),e}function qo(n,e){return _a(n.databaseId,e.path)}function mo(n,e){const t=Cd(e);if(t.get(1)!==n.databaseId.projectId)throw new M(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(kd(t))}function Pd(n,e){return _a(n.databaseId,e)}function sv(n){const e=Cd(n);return e.length===4?le.emptyPath():kd(e)}function $o(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function kd(n){return re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function tu(n,e,t){return{name:qo(n,e),fields:t.value.mapValue.fields}}function iv(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:$(39313,{state:f})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(f,m){return f.useProto3Json?(re(m===void 0||typeof m=="string",58123),ke.fromBase64String(m||"")):(re(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ke.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(f){const m=f.code===void 0?N.UNKNOWN:Ad(f.code);return new M(m,f.message||"")})(a);t=new Nd(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=mo(n,r.document.name),i=gt(r.document.updateTime),a=r.document.createTime?gt(r.document.createTime):G.min(),l=new Ge({mapValue:{fields:r.document.fields}}),h=Le.newFoundDocument(s,i,a,l),f=r.targetIds||[],m=r.removedTargetIds||[];t=new Fs(f,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=mo(n,r.document),i=r.readTime?gt(r.readTime):G.min(),a=Le.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Fs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=mo(n,r.document),i=r.removedTargetIds||[];t=new Fs([],i,s,null)}else{if(!("filter"in e))return $(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new K0(s,i),l=r.targetId;t=new Sd(l,a)}}return t}function ov(n,e){let t;if(e instanceof Si)t={update:tu(n,e.key,e.value)};else if(e instanceof Td)t={delete:qo(n,e.key)};else if(e instanceof In)t={update:tu(n,e.key,e.data),updateMask:pv(e.fieldMask)};else{if(!(e instanceof z0))return $(16599,{Vt:e.type});t={verify:qo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const l=a.transform;if(l instanceof Qr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Yr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Jr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ti)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw $(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:rv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$(27497)})(n,e.precondition)),t}function av(n,e){return n&&n.length>0?(re(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?gt(s.updateTime):gt(i);return a.isEqual(G.min())&&(a=gt(i)),new q0(a,s.transformResults||[])})(t,e)))):[]}function cv(n,e){return{documents:[Pd(n,e.path)]}}function lv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Pd(n,s);const i=(function(f){if(f.length!==0)return Dd(ot.create(f,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(f){if(f.length!==0)return f.map((m=>(function(w){return{field:jn(w.field),direction:dv(w.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Uo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(e.endAt)),{ft:t,parent:s}}function uv(n){let e=sv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){re(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(g){const w=jd(g);return w instanceof ot&&cd(w)?w.getFilters():[w]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((w=>(function(C){return new Kr(Dn(C.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(w)))})(t.orderBy));let l=null;t.limit&&(l=(function(g){let w;return w=typeof g=="object"?g.value:g,bi(w)?null:w})(t.limit));let h=null;t.startAt&&(h=(function(g){const w=!!g.before,A=g.values||[];return new ei(A,w)})(t.startAt));let f=null;return t.endAt&&(f=(function(g){const w=!g.before,A=g.values||[];return new ei(A,w)})(t.endAt)),N0(e,s,a,i,l,"F",h,f)}function hv(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function jd(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Dn(t.unaryFilter.field);return we.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Dn(t.unaryFilter.field);return we.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Dn(t.unaryFilter.field);return we.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Dn(t.unaryFilter.field);return we.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return $(61313);default:return $(60726)}})(n):n.fieldFilter!==void 0?(function(t){return we.create(Dn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return $(58110);default:return $(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ot.create(t.compositeFilter.filters.map((r=>jd(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $(1026)}})(t.compositeFilter.op))})(n):$(30097,{filter:n})}function dv(n){return Z0[n]}function fv(n){return ev[n]}function mv(n){return tv[n]}function jn(n){return{fieldPath:n.canonicalString()}}function Dn(n){return Ce.fromServerFormat(n.fieldPath)}function Dd(n){return n instanceof we?(function(t){if(t.op==="=="){if(ql(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NAN"}};if(Bl(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ql(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NOT_NAN"}};if(Bl(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jn(t.field),op:fv(t.op),value:t.value}}})(n):n instanceof ot?(function(t){const r=t.getFilters().map((s=>Dd(s)));return r.length===1?r[0]:{compositeFilter:{op:mv(t.op),filters:r}}})(n):$(54877,{filter:n})}function pv(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Vd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class qt{constructor(e,t,r,s,i=G.min(),a=G.min(),l=ke.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class gv{constructor(e){this.yt=e}}function yv(n){const e=uv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fo(e,e.limit,"L"):e}/**
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
 */class _v{constructor(){this.Cn=new wv}addToCollectionParentIndex(e,t){return this.Cn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Qt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Qt.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class wv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ie(le.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ie(le.comparator)).toArray()}}/**
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
 */const nu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Od=41943040;class He{static withCacheSize(e){return new He(e,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */He.DEFAULT_COLLECTION_PERCENTILE=10,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,He.DEFAULT=new He(Od,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),He.DISABLED=new He(-1,0,0);/**
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
 */class Wn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Wn(0)}static cr(){return new Wn(-1)}}/**
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
 */const ru="LruGarbageCollector",vv=1048576;function su([n,e],[t,r]){const s=X(n,t);return s===0?X(e,r):s}class bv{constructor(e){this.Ir=e,this.buffer=new Ie(su),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();su(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){L(ru,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){nr(t)?L(ru,"Ignoring IndexedDB error during garbage collection: ",t):await tr(t)}await this.Vr(3e5)}))}}class Ev{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return R.resolve(vi.ce);const r=new bv(t);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(nu)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nu):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,l,h,f;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(r=g,l=Date.now(),this.removeTargets(e,r,t)))).next((g=>(i=g,h=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(f=Date.now(),Pn()<=J.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(h-l)+`ms
	Removed ${g} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function Iv(n,e){return new Ev(n,e)}/**
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
 */class Tv{constructor(){this.changes=new En((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Av{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Sv{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Mr(r.mutation,s,nt.empty(),de.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Z()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Z()){const s=hn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Rr();return i.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=hn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Z())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,s){let i=Ct();const a=Or(),l=(function(){return Or()})();return t.forEach(((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof In)?i=i.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),Mr(m.mutation,f,m.mutation.getFieldMask(),de.now())):a.set(f.key,nt.empty())})),this.recalculateAndSaveOverlays(e,i).next((h=>(h.forEach(((f,m)=>a.set(f,m))),t.forEach(((f,m)=>l.set(f,new Av(m,a.get(f)??null)))),l)))}recalculateAndSaveOverlays(e,t){const r=Or();let s=new me(((a,l)=>a-l)),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((h=>{const f=t.get(h);if(f===null)return;let m=r.get(h)||nt.empty();m=l.applyToLocalView(f,m),r.set(h,m);const g=(s.get(l.batchId)||Z()).add(h);s=s.insert(l.batchId,g)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,m=h.value,g=yd();m.forEach((w=>{if(!i.has(w)){const A=Ed(t.get(w),r.get(w));A!==null&&g.set(w,A),i=i.add(w)}})),a.push(this.documentOverlayCache.saveOverlays(e,f,g))}return R.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):R.resolve(hn());let l=Hr,h=i;return a.next((f=>R.forEach(f,((m,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(m)?R.resolve():this.remoteDocumentCache.getEntry(e,m).next((w=>{h=h.insert(m,w)}))))).next((()=>this.populateOverlays(e,f,i))).next((()=>this.computeViews(e,h,f,Z()))).next((m=>({batchId:l,changes:gd(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next((r=>{let s=Rr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Rr();return this.indexManager.getCollectionParents(e,i).next((l=>R.forEach(l,(h=>{const f=(function(g,w){return new rr(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,h.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next((m=>{m.forEach(((g,w)=>{a=a.insert(g,w)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,Le.newInvalidDocument(m)))}));let l=Rr();return a.forEach(((h,f)=>{const m=i.get(h);m!==void 0&&Mr(m.mutation,f,nt.empty(),de.now()),Ii(t,f)&&(l=l.insert(h,f))})),l}))}}/**
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
 */class Nv{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return R.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:gt(s.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:yv(s.bundledQuery),readTime:gt(s.readTime)}})(t)),R.resolve()}}/**
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
 */class Rv{constructor(){this.overlays=new me(B.comparator),this.qr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=hn();return R.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.St(e,t,i)})),R.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const s=hn(),i=t.length+1,a=new B(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===i&&h.largestBatchId>r&&s.set(h.getKey(),h)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new me(((f,m)=>f-m));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let m=i.get(f.largestBatchId);m===null&&(m=hn(),i=i.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const l=hn(),h=i.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,m)=>l.set(f,m))),!(l.size()>=s)););return R.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new W0(t,r));let i=this.qr.get(t);i===void 0&&(i=Z(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class Cv{constructor(){this.sessionToken=ke.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
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
 */class wa{constructor(){this.Qr=new Ie(Se.$r),this.Ur=new Ie(Se.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Se(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new Se(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new B(new le([])),r=new Se(t,e),s=new Se(t,e+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new B(new le([])),r=new Se(t,e),s=new Se(t,e+1);let i=Z();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Se(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Se{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return B.comparator(e.key,t.key)||X(e.Yr,t.Yr)}static Kr(e,t){return X(e.Yr,t.Yr)||B.comparator(e.key,t.key)}}/**
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
 */class Pv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ie(Se.$r)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new G0(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new Se(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,t){return R.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?la:this.tr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Se(t,0),s=new Se(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const l=this.Xr(a.Yr);i.push(l)})),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ie(X);return t.forEach((s=>{const i=new Se(s,0),a=new Se(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(l=>{r=r.add(l.Yr)}))})),R.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const a=new Se(new B(i),0);let l=new Ie(X);return this.Zr.forEachWhile((h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(h.Yr)),!0)}),a),R.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){re(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return R.forEach(t.mutations,(s=>{const i=new Se(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new Se(t,0),s=this.Zr.firstAfterOrEqual(r);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class kv{constructor(e){this.ri=e,this.docs=(function(){return new me(B.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():Le.newInvalidDocument(t))}getEntries(e,t){let r=Ct();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Le.newInvalidDocument(s))})),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Ct();const a=t.path,l=new B(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||o0(i0(m),r)<=0||(s.has(m.key)||Ii(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,r,s){$(9500)}ii(e,t){return R.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new jv(this)}getSize(e){return R.resolve(this.size)}}class jv extends Tv{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),R.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class Dv{constructor(e){this.persistence=e,this.si=new En((t=>da(t)),fa),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.oi=0,this._i=new wa,this.targetCount=0,this.ai=Wn.ur()}forEachTarget(e,t){return this.si.forEach(((r,s)=>t(s))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),R.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Wn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Pr(t),R.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),R.waitFor(i).next((()=>s))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),R.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this._i.containsKey(t))}}/**
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
 */class Md{constructor(e,t){this.ui={},this.overlays={},this.ci=new vi(0),this.li=!1,this.li=!0,this.hi=new Cv,this.referenceDelegate=e(this),this.Pi=new Dv(this),this.indexManager=new _v,this.remoteDocumentCache=(function(s){return new kv(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new gv(t),this.Ii=new Nv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Rv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new Pv(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new Vv(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,t){return R.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class Vv extends c0{constructor(e){super(),this.currentSequenceNumber=e}}class va{constructor(e){this.persistence=e,this.Ri=new wa,this.Vi=null}static mi(e){return new va(e)}get fi(){if(this.Vi)return this.Vi;throw $(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(r=>{const s=B.fromPath(r);return this.gi(e,s).next((i=>{i||t.removeEntry(s,G.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ri{constructor(e,t){this.persistence=e,this.pi=new En((r=>h0(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Iv(this,t)}static mi(e,t){return new ri(e,t)}Ei(){}di(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return R.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?R.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,t).next((l=>{l||(r++,i.removeEntry(a,G.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Os(e.data.value)),t}br(e,t,r){return R.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ba{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=Z(),s=Z();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ba(e,t.fromCache,r,s)}}/**
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
 */class Ov{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Mv{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return dg()?8:l0(Fe())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Ov;return this.Ss(e,t,a).next((l=>{if(i.result=l,this.Vs)return this.bs(e,t,a,l.size)}))})).next((()=>i.result))}bs(e,t,r,s){return r.documentReadCount<this.fs?(Pn()<=J.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(Pn()<=J.DEBUG&&L("QueryEngine","Query:",kn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Pn()<=J.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pt(t))):R.resolve())}ys(e,t){if(Gl(t))return R.resolve(null);let r=pt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Fo(t,null,"F"),r=pt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=Z(...i);return this.ps.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((h=>{const f=this.Ds(t,l);return this.Cs(t,f,a,h.readTime)?this.ys(e,Fo(t,null,"F")):this.vs(e,f,t,h)}))))})))))}ws(e,t,r,s){return Gl(t)||s.isEqual(G.min())?R.resolve(null):this.ps.getDocuments(e,r).next((i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?R.resolve(null):(Pn()<=J.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),kn(t)),this.vs(e,a,t,s0(s,Hr)).next((l=>l)))}))}Ds(e,t){let r=new Ie(md(e));return t.forEach(((s,i)=>{Ii(e,i)&&(r=r.add(i))})),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Pn()<=J.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",kn(t)),this.ps.getDocumentsMatchingQuery(e,t,Qt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const xa="LocalStore",Lv=3e8;class Fv{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new me(X),this.xs=new En((i=>da(i)),fa),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Sv(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Uv(n,e,t,r){return new Fv(n,e,t,r)}async function Ld(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let h=Z();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of i){l.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(r,h).next((f=>({Ls:f,removedBatchIds:a,addedBatchIds:l})))}))}))}function Bv(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,h,f,m){const g=f.batch,w=g.keys();let A=R.resolve();return w.forEach((C=>{A=A.next((()=>m.getEntry(h,C))).next((j=>{const P=f.docVersions.get(C);re(P!==null,48541),j.version.compareTo(P)<0&&(g.applyToRemoteDocument(j,f),j.isValidDocument()&&(j.setReadTime(f.commitVersion),m.addEntry(j)))}))})),A.next((()=>l.mutationQueue.removeMutationBatch(h,g)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=Z();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Fd(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function qv(n,e){const t=W(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach(((m,g)=>{const w=s.get(g);if(!w)return;l.push(t.Pi.removeMatchingKeys(i,m.removedDocuments,g).next((()=>t.Pi.addMatchingKeys(i,m.addedDocuments,g))));let A=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?A=A.withResumeToken(ke.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):m.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(m.resumeToken,r)),s=s.insert(g,A),(function(j,P,O){return j.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=Lv?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0})(w,A,m)&&l.push(t.Pi.updateTargetData(i,A))}));let h=Ct(),f=Z();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),l.push($v(i,a,e.documentUpdates).next((m=>{h=m.ks,f=m.qs}))),!r.isEqual(G.min())){const m=t.Pi.getLastRemoteSnapshotVersion(i).next((g=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(m)}return R.waitFor(l).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,h,f))).next((()=>h))})).then((i=>(t.Ms=s,i)))}function $v(n,e,t){let r=Z(),s=Z();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=Ct();return t.forEach(((l,h)=>{const f=i.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(G.min())?(e.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(h),a=a.insert(l,h)):L(xa,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)})),{ks:a,qs:s}}))}function Hv(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=la),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function zv(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.Pi.getTargetData(r,e).next((i=>i?(s=i,R.resolve(s)):t.Pi.allocateTargetId(r).next((a=>(s=new qt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function Ho(n,e,t){const r=W(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!nr(a))throw a;L(xa,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function iu(n,e,t){const r=W(n);let s=G.min(),i=Z();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,f,m){const g=W(h),w=g.xs.get(m);return w!==void 0?R.resolve(g.Ms.get(w)):g.Pi.getTargetData(f,m)})(r,a,pt(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((h=>{i=h}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:G.min(),t?i:Z()))).next((l=>(Gv(r,C0(e),l),{documents:l,Qs:i})))))}function Gv(n,e,t){let r=n.Os.get(e)||G.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Os.set(e,r)}class ou{constructor(){this.activeTargetIds=O0()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Wv{constructor(){this.Mo=new ou,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ou,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Kv{Oo(e){}shutdown(){}}/**
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
 */const au="ConnectivityMonitor";class cu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){L(au,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){L(au,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rs=null;function zo(){return Rs===null?Rs=(function(){return 268435456+Math.round(2147483648*Math.random())})():Rs++,"0x"+Rs.toString(16)}/**
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
 */const po="RestConnection",Qv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Yv{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Xs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=zo(),l=this.zo(e,t.toUriEncodedString());L(po,`Sending RPC '${e}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,i);const{host:f}=new URL(l),m=Yn(f);return this.Jo(e,l,h,r,m).then((g=>(L(po,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw $n(po,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g}))}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+er})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,t){const r=Qv[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Jv{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Oe="WebChannelConnection";class Xv extends Yv{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=zo();return new Promise(((l,h)=>{const f=new Bh;f.setWithCredentials(!0),f.listenOnce(qh.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case Vs.NO_ERROR:const g=f.getResponseJson();L(Oe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case Vs.TIMEOUT:L(Oe,`RPC '${e}' ${a} timed out`),h(new M(N.DEADLINE_EXCEEDED,"Request time out"));break;case Vs.HTTP_ERROR:const w=f.getStatus();if(L(Oe,`RPC '${e}' ${a} failed with status:`,w,"response text:",f.getResponseText()),w>0){let A=f.getResponseJson();Array.isArray(A)&&(A=A[0]);const C=A==null?void 0:A.error;if(C&&C.status&&C.message){const j=(function(O){const D=O.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(D)>=0?D:N.UNKNOWN})(C.status);h(new M(j,C.message))}else h(new M(N.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new M(N.UNAVAILABLE,"Connection failed."));break;default:$(9055,{l_:e,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{L(Oe,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(s);L(Oe,`RPC '${e}' ${a} sending request:`,s),f.send(t,"POST",m,r,15)}))}T_(e,t,r){const s=zo(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=zh(),l=Hh(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const m=i.join("");L(Oe,`Creating RPC '${e}' stream ${s}: ${m}`,h);const g=a.createWebChannel(m,h);this.I_(g);let w=!1,A=!1;const C=new Jv({Yo:P=>{A?L(Oe,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(w||(L(Oe,`Opening RPC '${e}' stream ${s} transport.`),g.open(),w=!0),L(Oe,`RPC '${e}' stream ${s} sending:`,P),g.send(P))},Zo:()=>g.close()}),j=(P,O,D)=>{P.listen(O,(F=>{try{D(F)}catch(K){setTimeout((()=>{throw K}),0)}}))};return j(g,Nr.EventType.OPEN,(()=>{A||(L(Oe,`RPC '${e}' stream ${s} transport opened.`),C.o_())})),j(g,Nr.EventType.CLOSE,(()=>{A||(A=!0,L(Oe,`RPC '${e}' stream ${s} transport closed`),C.a_(),this.E_(g))})),j(g,Nr.EventType.ERROR,(P=>{A||(A=!0,$n(Oe,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),C.a_(new M(N.UNAVAILABLE,"The operation could not be completed")))})),j(g,Nr.EventType.MESSAGE,(P=>{var O;if(!A){const D=P.data[0];re(!!D,16349);const F=D,K=(F==null?void 0:F.error)||((O=F[0])==null?void 0:O.error);if(K){L(Oe,`RPC '${e}' stream ${s} received error:`,K);const ie=K.status;let oe=(function(v){const E=_e[v];if(E!==void 0)return Ad(E)})(ie),x=K.message;oe===void 0&&(oe=N.INTERNAL,x="Unknown error status: "+ie+" with message "+K.message),A=!0,C.a_(new M(oe,x)),g.close()}else L(Oe,`RPC '${e}' stream ${s} received:`,D),C.u_(D)}})),j(l,$h.STAT_EVENT,(P=>{P.stat===ko.PROXY?L(Oe,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===ko.NOPROXY&&L(Oe,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function go(){return typeof document<"u"?document:null}/**
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
 */function Ri(n){return new nv(n,!0)}/**
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
 */class Ud{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const lu="PersistentStream";class Bd{constructor(e,t,r,s,i,a,l,h){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ud(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Rt(t.toString()),Rt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new M(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return L(lu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(L(lu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Zv extends Bd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=iv(this.serializer,e),r=(function(i){if(!("targetChange"in i))return G.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?G.min():a.readTime?gt(a.readTime):G.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=$o(this.serializer),t.addTarget=(function(i,a){let l;const h=a.target;if(l=Mo(h)?{documents:cv(i,h)}:{query:lv(i,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Rd(i,a.resumeToken);const f=Uo(i,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(G.min())>0){l.readTime=ni(i,a.snapshotVersion.toTimestamp());const f=Uo(i,a.expectedCount);f!==null&&(l.expectedCount=f)}return l})(this.serializer,e);const r=hv(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=$o(this.serializer),t.removeTarget=e,this.q_(t)}}class eb extends Bd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=av(e.writeResults,e.commitTime),r=gt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=$o(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>ov(this.serializer,r)))};this.q_(t)}}/**
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
 */class tb{}class nb extends tb{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new M(N.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,Bo(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(N.UNKNOWN,i.toString())}))}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(e,Bo(t,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(N.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class rb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rt(t),this.aa=!1):L("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const yn="RemoteStore";class sb{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{Tn(this)&&(L(yn,"Restarting streams for network reachability change."),await(async function(h){const f=W(h);f.Ea.add(4),await os(f),f.Ra.set("Unknown"),f.Ea.delete(4),await Ci(f)})(this))}))})),this.Ra=new rb(r,s)}}async function Ci(n){if(Tn(n))for(const e of n.da)await e(!0)}async function os(n){for(const e of n.da)await e(!1)}function qd(n,e){const t=W(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Aa(t)?Ta(t):sr(t).O_()&&Ia(t,e))}function Ea(n,e){const t=W(n),r=sr(t);t.Ia.delete(e),r.O_()&&$d(t,e),t.Ia.size===0&&(r.O_()?r.L_():Tn(t)&&t.Ra.set("Unknown"))}function Ia(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}sr(n).Y_(e)}function $d(n,e){n.Va.Ue(e),sr(n).Z_(e)}function Ta(n){n.Va=new X0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),sr(n).start(),n.Ra.ua()}function Aa(n){return Tn(n)&&!sr(n).x_()&&n.Ia.size>0}function Tn(n){return W(n).Ea.size===0}function Hd(n){n.Va=void 0}async function ib(n){n.Ra.set("Online")}async function ob(n){n.Ia.forEach(((e,t)=>{Ia(n,e)}))}async function ab(n,e){Hd(n),Aa(n)?(n.Ra.ha(e),Ta(n)):n.Ra.set("Unknown")}async function cb(n,e,t){if(n.Ra.set("Online"),e instanceof Nd&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))})(n,e)}catch(r){L(yn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await si(n,r)}else if(e instanceof Fs?n.Va.Ze(e):e instanceof Sd?n.Va.st(e):n.Va.tt(e),!t.isEqual(G.min()))try{const r=await Fd(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach(((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=i.Ia.get(f);m&&i.Ia.set(f,m.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,f)=>{const m=i.Ia.get(h);if(!m)return;i.Ia.set(h,m.withResumeToken(ke.EMPTY_BYTE_STRING,m.snapshotVersion)),$d(i,h);const g=new qt(m.target,h,f,m.sequenceNumber);Ia(i,g)})),i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){L(yn,"Failed to raise snapshot:",r),await si(n,r)}}async function si(n,e,t){if(!nr(e))throw e;n.Ea.add(1),await os(n),n.Ra.set("Offline"),t||(t=()=>Fd(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(yn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ci(n)}))}function zd(n,e){return e().catch((t=>si(n,t,e)))}async function Pi(n){const e=W(n),t=Zt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:la;for(;lb(e);)try{const s=await Hv(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,ub(e,s)}catch(s){await si(e,s)}Gd(e)&&Wd(e)}function lb(n){return Tn(n)&&n.Ta.length<10}function ub(n,e){n.Ta.push(e);const t=Zt(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Gd(n){return Tn(n)&&!Zt(n).x_()&&n.Ta.length>0}function Wd(n){Zt(n).start()}async function hb(n){Zt(n).ra()}async function db(n){const e=Zt(n);for(const t of n.Ta)e.ea(t.mutations)}async function fb(n,e,t){const r=n.Ta.shift(),s=ga.from(r,e,t);await zd(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Pi(n)}async function mb(n,e){e&&Zt(n).X_&&await(async function(r,s){if((function(a){return Q0(a)&&a!==N.ABORTED})(s.code)){const i=r.Ta.shift();Zt(r).B_(),await zd(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Pi(r)}})(n,e),Gd(n)&&Wd(n)}async function uu(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),L(yn,"RemoteStore received new credentials");const r=Tn(t);t.Ea.add(3),await os(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ci(t)}async function pb(n,e){const t=W(n);e?(t.Ea.delete(2),await Ci(t)):e||(t.Ea.add(2),await os(t),t.Ra.set("Unknown"))}function sr(n){return n.ma||(n.ma=(function(t,r,s){const i=W(t);return i.sa(),new Zv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:ib.bind(null,n),t_:ob.bind(null,n),r_:ab.bind(null,n),H_:cb.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Aa(n)?Ta(n):n.Ra.set("Unknown")):(await n.ma.stop(),Hd(n))}))),n.ma}function Zt(n){return n.fa||(n.fa=(function(t,r,s){const i=W(t);return i.sa(),new eb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:hb.bind(null,n),r_:mb.bind(null,n),ta:db.bind(null,n),na:fb.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Pi(n)):(await n.fa.stop(),n.Ta.length>0&&(L(yn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Sa{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Sa(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Na(n,e){if(Rt("AsyncQueue",`${e}: ${n}`),nr(n))return new M(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Fn{static emptySet(e){return new Fn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=Rr(),this.sortedSet=new me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Fn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class hu{constructor(){this.ga=new me(B.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):$(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Kn{constructor(e,t,r,s,i,a,l,h,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Kn(e,t,Fn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ei(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class gb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class yb{constructor(){this.queries=du(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=W(t),i=s.queries;s.queries=du(),i.forEach(((a,l)=>{for(const h of l.Sa)h.onError(r)}))})(this,new M(N.ABORTED,"Firestore shutting down"))}}function du(){return new En((n=>fd(n)),Ei)}async function Kd(n,e){const t=W(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new gb,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Na(a,`Initialization of query '${kn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Ra(t)}async function Qd(n,e){const t=W(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function _b(n,e){const t=W(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&Ra(t)}function wb(n,e,t){const r=W(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Ra(n){n.Ca.forEach((e=>{e.next()}))}var Go,fu;(fu=Go||(Go={})).Ma="default",fu.Cache="cache";class Yd{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Kn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Kn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Go.Cache}}/**
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
 */class Jd{constructor(e){this.key=e}}class Xd{constructor(e){this.key=e}}class vb{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Z(),this.mutatedKeys=Z(),this.eu=md(e),this.tu=new Fn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new hu,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,g)=>{const w=s.get(m),A=Ii(this.query,g)?g:null,C=!!w&&this.mutatedKeys.has(w.key),j=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let P=!1;w&&A?w.data.isEqual(A.data)?C!==j&&(r.track({type:3,doc:A}),P=!0):this.su(w,A)||(r.track({type:2,doc:A}),P=!0,(h&&this.eu(A,h)>0||f&&this.eu(A,f)<0)&&(l=!0)):!w&&A?(r.track({type:0,doc:A}),P=!0):w&&!A&&(r.track({type:1,doc:w}),P=!0,(h||f)&&(l=!0)),P&&(A?(a=a.add(A),i=j?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((m,g)=>(function(A,C){const j=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $(20277,{Rt:P})}};return j(A)-j(C)})(m.type,g.type)||this.eu(m.doc,g.doc))),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,f=h!==this.Za;return this.Za=h,a.length!==0||f?{snapshot:new Kn(this.query,e.tu,i,a,e.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new hu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Z(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new Xd(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new Jd(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=Z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Kn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ca="SyncEngine";class bb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class xb{constructor(e){this.key=e,this.hu=!1}}class Eb{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new En((l=>fd(l)),Ei),this.Iu=new Map,this.Eu=new Set,this.du=new me(B.comparator),this.Au=new Map,this.Ru=new wa,this.Vu={},this.mu=new Map,this.fu=Wn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Ib(n,e,t=!0){const r=sf(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Zd(r,e,t,!0),s}async function Tb(n,e){const t=sf(n);await Zd(t,e,!0,!1)}async function Zd(n,e,t,r){const s=await zv(n.localStore,pt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await Ab(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&qd(n.remoteStore,s),l}async function Ab(n,e,t,r,s){n.pu=(g,w,A)=>(async function(j,P,O,D){let F=P.view.ru(O);F.Cs&&(F=await iu(j.localStore,P.query,!1).then((({documents:x})=>P.view.ru(x,F))));const K=D&&D.targetChanges.get(P.targetId),ie=D&&D.targetMismatches.get(P.targetId)!=null,oe=P.view.applyChanges(F,j.isPrimaryClient,K,ie);return pu(j,P.targetId,oe.au),oe.snapshot})(n,g,w,A);const i=await iu(n.localStore,e,!0),a=new vb(e,i.Qs),l=a.ru(i.documents),h=is.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),f=a.applyChanges(l,n.isPrimaryClient,h);pu(n,t,f.au);const m=new bb(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),f.snapshot}async function Sb(n,e,t){const r=W(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!Ei(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ho(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ea(r.remoteStore,s.targetId),Wo(r,s.targetId)})).catch(tr)):(Wo(r,s.targetId),await Ho(r.localStore,s.targetId,!0))}async function Nb(n,e){const t=W(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ea(t.remoteStore,r.targetId))}async function Rb(n,e,t){const r=Ob(n);try{const s=await(function(a,l){const h=W(a),f=de.now(),m=l.reduce(((A,C)=>A.add(C.key)),Z());let g,w;return h.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let C=Ct(),j=Z();return h.Ns.getEntries(A,m).next((P=>{C=P,C.forEach(((O,D)=>{D.isValidDocument()||(j=j.add(O))}))})).next((()=>h.localDocuments.getOverlayedDocuments(A,C))).next((P=>{g=P;const O=[];for(const D of l){const F=H0(D,g.get(D.key).overlayedDocument);F!=null&&O.push(new In(D.key,F,id(F.value.mapValue),At.exists(!0)))}return h.mutationQueue.addMutationBatch(A,f,O,l)})).next((P=>{w=P;const O=P.applyToLocalDocumentSet(g,j);return h.documentOverlayCache.saveOverlays(A,P.batchId,O)}))})).then((()=>({batchId:w.batchId,changes:gd(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,h){let f=a.Vu[a.currentUser.toKey()];f||(f=new me(X)),f=f.insert(l,h),a.Vu[a.currentUser.toKey()]=f})(r,s.batchId,t),await as(r,s.changes),await Pi(r.remoteStore)}catch(s){const i=Na(s,"Failed to persist write");t.reject(i)}}async function ef(n,e){const t=W(n);try{const r=await qv(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Au.get(i);a&&(re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?re(a.hu,14607):s.removedDocuments.size>0&&(re(a.hu,42227),a.hu=!1))})),await as(t,r,e)}catch(r){await tr(r)}}function mu(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const h=W(a);h.onlineState=l;let f=!1;h.queries.forEach(((m,g)=>{for(const w of g.Sa)w.va(l)&&(f=!0)})),f&&Ra(h)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Cb(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new me(B.comparator);a=a.insert(i,Le.newNoDocument(i,G.min()));const l=Z().add(i),h=new Ni(G.min(),new Map,new me(X),a,l);await ef(r,h),r.du=r.du.remove(i),r.Au.delete(e),Pa(r)}else await Ho(r.localStore,e,!1).then((()=>Wo(r,e,t))).catch(tr)}async function Pb(n,e){const t=W(n),r=e.batch.batchId;try{const s=await Bv(t.localStore,e);nf(t,r,null),tf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await as(t,s)}catch(s){await tr(s)}}async function kb(n,e,t){const r=W(n);try{const s=await(function(a,l){const h=W(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let m;return h.mutationQueue.lookupMutationBatch(f,l).next((g=>(re(g!==null,37113),m=g.keys(),h.mutationQueue.removeMutationBatch(f,g)))).next((()=>h.mutationQueue.performConsistencyCheck(f))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m))).next((()=>h.localDocuments.getDocuments(f,m)))}))})(r.localStore,e);nf(r,e,t),tf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await as(r,s)}catch(s){await tr(s)}}function tf(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function nf(n,e,t){const r=W(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Wo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||rf(n,r)}))}function rf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ea(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Pa(n))}function pu(n,e,t){for(const r of t)r instanceof Jd?(n.Ru.addReference(r.key,e),jb(n,r)):r instanceof Xd?(L(Ca,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||rf(n,r.key)):$(19791,{wu:r})}function jb(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(L(Ca,"New document in limbo: "+t),n.Eu.add(r),Pa(n))}function Pa(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new B(le.fromString(e)),r=n.fu.next();n.Au.set(r,new xb(t)),n.du=n.du.insert(t,r),qd(n.remoteStore,new qt(pt(ma(t.path)),r,"TargetPurposeLimboResolution",vi.ce))}}async function as(n,e,t){const r=W(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,h)=>{a.push(r.pu(h,e,t).then((f=>{var m;if((f||t)&&r.isPrimaryClient){const g=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,g?"current":"not-current")}if(f){s.push(f);const g=ba.As(h.targetId,f);i.push(g)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(h,f){const m=W(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>R.forEach(f,(w=>R.forEach(w.Es,(A=>m.persistence.referenceDelegate.addReference(g,w.targetId,A))).next((()=>R.forEach(w.ds,(A=>m.persistence.referenceDelegate.removeReference(g,w.targetId,A)))))))))}catch(g){if(!nr(g))throw g;L(xa,"Failed to update sequence numbers: "+g)}for(const g of f){const w=g.targetId;if(!g.fromCache){const A=m.Ms.get(w),C=A.snapshotVersion,j=A.withLastLimboFreeSnapshotVersion(C);m.Ms=m.Ms.insert(w,j)}}})(r.localStore,i))}async function Db(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){L(Ca,"User change. New user:",e.toKey());const r=await Ld(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((l=>{l.forEach((h=>{h.reject(new M(N.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await as(t,r.Ls)}}function Vb(n,e){const t=W(n),r=t.Au.get(e);if(r&&r.hu)return Z().add(r.key);{let s=Z();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function sf(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ef.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Cb.bind(null,e),e.Pu.H_=_b.bind(null,e.eventManager),e.Pu.yu=wb.bind(null,e.eventManager),e}function Ob(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Pb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kb.bind(null,e),e}class ii{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ri(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Uv(this.persistence,new Mv,e.initialUser,this.serializer)}Cu(e){return new Md(va.mi,this.serializer)}Du(e){return new Wv}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ii.provider={build:()=>new ii};class Mb extends ii{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){re(this.persistence.referenceDelegate instanceof ri,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xv(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?He.withCacheSize(this.cacheSizeBytes):He.DEFAULT;return new Md((r=>ri.mi(r,t)),this.serializer)}}class Ko{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Db.bind(null,this.syncEngine),await pb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new yb})()}createDatastore(e){const t=Ri(e.databaseInfo.databaseId),r=(function(i){return new Xv(i)})(e.databaseInfo);return(function(i,a,l,h){return new nb(i,a,l,h)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,l){return new sb(r,s,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>mu(this.syncEngine,t,0)),(function(){return cu.v()?new cu:new Kv})())}createSyncEngine(e,t){return(function(s,i,a,l,h,f,m){const g=new Eb(s,i,a,l,h,f);return m&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=W(s);L(yn,"RemoteStore shutting down."),i.Ea.add(5),await os(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ko.provider={build:()=>new Ko};/**
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
 */class of{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Rt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const en="FirestoreClient";class Lb{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Me.UNAUTHENTICATED,this.clientId=ca.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{L(en,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(L(en,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Na(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function yo(n,e){n.asyncQueue.verifyOperationInProgress(),L(en,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Ld(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function gu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Fb(n);L(en,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>uu(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>uu(e.remoteStore,s))),n._onlineComponents=e}async function Fb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(en,"Using user provided OfflineComponentProvider");try{await yo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;$n("Error using user provided cache. Falling back to memory cache: "+t),await yo(n,new ii)}}else L(en,"Using default OfflineComponentProvider"),await yo(n,new Mb(void 0));return n._offlineComponents}async function af(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(en,"Using user provided OnlineComponentProvider"),await gu(n,n._uninitializedComponentsProvider._online)):(L(en,"Using default OnlineComponentProvider"),await gu(n,new Ko))),n._onlineComponents}function Ub(n){return af(n).then((e=>e.syncEngine))}async function cf(n){const e=await af(n),t=e.eventManager;return t.onListen=Ib.bind(null,e.syncEngine),t.onUnlisten=Sb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Tb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Nb.bind(null,e.syncEngine),t}function Bb(n,e,t={}){const r=new Tt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,h,f){const m=new of({next:w=>{m.Nu(),a.enqueueAndForget((()=>Qd(i,g)));const A=w.docs.has(l);!A&&w.fromCache?f.reject(new M(N.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&w.fromCache&&h&&h.source==="server"?f.reject(new M(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),g=new Yd(ma(l.path),m,{includeMetadataChanges:!0,qa:!0});return Kd(i,g)})(await cf(n),n.asyncQueue,e,t,r))),r.promise}function qb(n,e,t={}){const r=new Tt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,h,f){const m=new of({next:w=>{m.Nu(),a.enqueueAndForget((()=>Qd(i,g))),w.fromCache&&h.source==="server"?f.reject(new M(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),g=new Yd(l,m,{includeMetadataChanges:!0,qa:!0});return Kd(i,g)})(await cf(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function lf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const yu=new Map;/**
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
 */const uf="firestore.googleapis.com",_u=!0;class wu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new M(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uf,this.ssl=_u}else this.host=e.host,this.ssl=e.ssl??_u;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Od;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vv)throw new M(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}r0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lf(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new M(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new M(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new M(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ki{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Ww;switch(r.type){case"firstParty":return new Jw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=yu.get(t);r&&(L("ComponentProvider","Removing Datastore"),yu.delete(t),r.terminate())})(this),Promise.resolve()}}function $b(n,e,t,r={}){var f;n=gn(n,ki);const s=Yn(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(Yu(`https://${l}`),Ju("Firestore",!0)),i.host!==uf&&i.host!==l&&$n("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...i,host:l,ssl:s,emulatorOptions:r};if(!Kt(h,a)&&(n._setSettings(h),r.mockUserToken)){let m,g;if(typeof r.mockUserToken=="string")m=r.mockUserToken,g=Me.MOCK_USER;else{m=sg(r.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new M(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Me(w)}n._authCredentials=new Kw(new Wh(m,g))}}/**
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
 */class An{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new An(this.firestore,e,this._query)}}class be{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ss(t,be._jsonSchema))return new be(e,r||null,new B(le.fromString(t.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:ve("string",be._jsonSchemaVersion),referencePath:ve("string")};class Wt extends An{constructor(e,t,r){super(e,t,ma(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new B(e))}withConverter(e){return new Wt(this.firestore,e,this._path)}}function Xr(n,e,...t){if(n=ye(n),Kh("collection","path",e),n instanceof ki){const r=le.fromString(e,...t);return kl(r),new Wt(n,null,r)}{if(!(n instanceof be||n instanceof Wt))throw new M(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return kl(r),new Wt(n.firestore,null,r)}}function Ne(n,e,...t){if(n=ye(n),arguments.length===1&&(e=ca.newId()),Kh("doc","path",e),n instanceof ki){const r=le.fromString(e,...t);return Pl(r),new be(n,null,new B(r))}{if(!(n instanceof be||n instanceof Wt))throw new M(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Pl(r),new be(n.firestore,n instanceof Wt?n.converter:null,new B(r))}}/**
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
 */const vu="AsyncQueue";class bu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ud(this,"async_queue_retry"),this._c=()=>{const r=go();r&&L(vu,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=go();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=go();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Tt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!nr(e))throw e;L(vu,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Rt("INTERNAL UNHANDLED ERROR: ",xu(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Sa.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&$(47125,{Pc:xu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function xu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ji extends ki{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new bu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bu(e),this._firestoreClient=void 0,await e}}}function Hb(n,e){const t=typeof n=="object"?n:Xo(),r=typeof n=="string"?n:Xs,s=bn(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ng("firestore");i&&$b(s,...i)}return s}function ka(n){if(n._terminated)throw new M(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||zb(n),n._firestoreClient}function zb(n){var r,s,i;const e=n._freezeSettings(),t=(function(l,h,f,m){return new m0(l,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,lf(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Lb(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
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
 */class Je{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Je(ke.fromBase64String(e))}catch(t){throw new M(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Je(ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Je._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ss(e,Je._jsonSchema))return Je.fromBase64String(e.bytes)}}Je._jsonSchemaVersion="firestore/bytes/1.0",Je._jsonSchema={type:ve("string",Je._jsonSchemaVersion),bytes:ve("string")};/**
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
 */class Di{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Vi{constructor(e){this._methodName=e}}/**
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
 */class yt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yt._jsonSchemaVersion}}static fromJSON(e){if(ss(e,yt._jsonSchema))return new yt(e.latitude,e.longitude)}}yt._jsonSchemaVersion="firestore/geoPoint/1.0",yt._jsonSchema={type:ve("string",yt._jsonSchemaVersion),latitude:ve("number"),longitude:ve("number")};/**
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
 */class _t{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:_t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ss(e,_t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new _t(e.vectorValues);throw new M(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_t._jsonSchemaVersion="firestore/vectorValue/1.0",_t._jsonSchema={type:ve("string",_t._jsonSchemaVersion),vectorValues:ve("object")};/**
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
 */const Gb=/^__.*__$/;class hf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new In(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function df(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{Ac:n})}}class ja{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ja({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return oi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(df(this.Ac)&&Gb.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Wb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ri(e)}Cc(e,t,r,s=!1){return new ja({Ac:e,methodName:t,Dc:r,path:Ce.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ff(n){const e=n._freezeSettings(),t=Ri(n._databaseId);return new Wb(n._databaseId,!!e.ignoreUndefinedProperties,t)}class Oi extends Vi{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oi}}class Da extends Vi{_toFieldTransform(e){return new U0(e.path,new Qr)}isEqual(e){return e instanceof Da}}function Kb(n,e,t,r){const s=n.Cc(1,e,t);pf("Data must be an object, but it was:",s,r);const i=[],a=Ge.empty();nn(r,((h,f)=>{const m=Va(e,h,t);f=ye(f);const g=s.yc(m);if(f instanceof Oi)i.push(m);else{const w=cs(f,g);w!=null&&(i.push(m),a.set(m,w))}}));const l=new nt(i);return new hf(a,l,s.fieldTransforms)}function Qb(n,e,t,r,s,i){const a=n.Cc(1,e,t),l=[Eu(e,r,t)],h=[s];if(i.length%2!=0)throw new M(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)l.push(Eu(e,i[w])),h.push(i[w+1]);const f=[],m=Ge.empty();for(let w=l.length-1;w>=0;--w)if(!Zb(f,l[w])){const A=l[w];let C=h[w];C=ye(C);const j=a.yc(A);if(C instanceof Oi)f.push(A);else{const P=cs(C,j);P!=null&&(f.push(A),m.set(A,P))}}const g=new nt(f);return new hf(m,g,a.fieldTransforms)}function Yb(n,e,t,r=!1){return cs(t,n.Cc(r?4:3,e))}function cs(n,e){if(mf(n=ye(n)))return pf("Unsupported field value:",e,n),Jb(n,e);if(n instanceof Vi)return(function(r,s){if(!df(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const l of r){let h=cs(l,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),i.push(h),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return M0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=de.fromDate(r);return{timestampValue:ni(s.serializer,i)}}if(r instanceof de){const i=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ni(s.serializer,i)}}if(r instanceof yt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Je)return{bytesValue:Rd(s.serializer,r._byteString)};if(r instanceof be){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_a(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _t)return(function(a,l){return{mapValue:{fields:{[rd]:{stringValue:sd},[Zs]:{arrayValue:{values:a.toArray().map((f=>{if(typeof f!="number")throw l.Sc("VectorValues must only contain numeric values.");return pa(l.serializer,f)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${wi(r)}`)})(n,e)}function Jb(n,e){const t={};return Jh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nn(n,((r,s)=>{const i=cs(s,e.mc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function mf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof yt||n instanceof Je||n instanceof be||n instanceof Vi||n instanceof _t)}function pf(n,e,t){if(!mf(t)||!Qh(t)){const r=wi(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Eu(n,e,t){if((e=ye(e))instanceof Di)return e._internalPath;if(typeof e=="string")return Va(n,e);throw oi("Field path arguments must be of type string or ",n,!1,void 0,t)}const Xb=new RegExp("[~\\*/\\[\\]]");function Va(n,e,t){if(e.search(Xb)>=0)throw oi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Di(...e.split("."))._internalPath}catch{throw oi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function oi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(i||a)&&(h+=" (found",i&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new M(N.INVALID_ARGUMENT,l+n+h)}function Zb(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class gf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ex(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ex extends gf{data(){return super.data()}}function Mi(n,e){return typeof e=="string"?Va(n,e):e instanceof Di?e._internalPath:e._delegate._internalPath}/**
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
 */function tx(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Oa{}class yf extends Oa{}function ai(n,e,...t){let r=[];e instanceof Oa&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((h=>h instanceof Ma)).length,l=i.filter((h=>h instanceof Li)).length;if(a>1||a>0&&l>0)throw new M(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Li extends yf{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Li(e,t,r)}_apply(e){const t=this._parse(e);return _f(e._query,t),new An(e.firestore,e.converter,Lo(e._query,t))}_parse(e){const t=ff(e.firestore);return(function(i,a,l,h,f,m,g){let w;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new M(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Tu(g,m);const C=[];for(const j of g)C.push(Iu(h,i,j));w={arrayValue:{values:C}}}else w=Iu(h,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Tu(g,m),w=Yb(l,a,g,m==="in"||m==="not-in");return we.create(f,m,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ci(n,e,t){const r=e,s=Mi("where",n);return Li._create(s,r,t)}class Ma extends Oa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ma(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:ot.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const l=i.getFlattenedFilters();for(const h of l)_f(a,h),a=Lo(a,h)})(e._query,t),new An(e.firestore,e.converter,Lo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class La extends yf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new La(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new M(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Kr(i,a)})(e._query,this._field,this._direction);return new An(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new rr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function nx(n,e="asc"){const t=e,r=Mi("orderBy",n);return La._create(r,t)}function Iu(n,e,t){if(typeof(t=ye(t))=="string"){if(t==="")throw new M(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dd(e)&&t.indexOf("/")!==-1)throw new M(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(le.fromString(t));if(!B.isDocumentKey(r))throw new M(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ul(n,new B(r))}if(t instanceof be)return Ul(n,t._key);throw new M(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wi(t)}.`)}function Tu(n,e){if(!Array.isArray(n)||n.length===0)throw new M(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _f(n,e){const t=(function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new M(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class rx{convertValue(e,t="none"){switch(Xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Jt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return nn(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Zs].arrayValue)==null?void 0:s.values)==null?void 0:i.map((a=>ge(a.doubleValue)));return new _t(t)}convertGeoPoint(e){return new yt(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=xi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(zr(e));default:return null}}convertTimestamp(e){const t=Yt(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);re(Vd(r),9688,{name:e});const s=new Gr(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(t)||Rt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}class Pr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fn extends gf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Us(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Mi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=fn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}fn._jsonSchemaVersion="firestore/documentSnapshot/1.0",fn._jsonSchema={type:ve("string",fn._jsonSchemaVersion),bundleSource:ve("string","DocumentSnapshot"),bundleName:ve("string"),bundle:ve("string")};class Us extends fn{data(e={}){return super.data(e)}}class Un{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Pr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Us(this._firestore,this._userDataWriter,r.key,r,new Pr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const h=new Us(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Pr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const h=new Us(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Pr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:sx(l.type),doc:h,oldIndex:f,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Un._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ca.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function sx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $(61501,{type:n})}}/**
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
 */function Pe(n){n=gn(n,be);const e=gn(n.firestore,ji);return Bb(ka(e),n._key).then((t=>ox(e,n,t)))}Un._jsonSchemaVersion="firestore/querySnapshot/1.0",Un._jsonSchema={type:ve("string",Un._jsonSchemaVersion),bundleSource:ve("string","QuerySnapshot"),bundleName:ve("string"),bundle:ve("string")};class wf extends rx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function li(n){n=gn(n,An);const e=gn(n.firestore,ji),t=ka(e),r=new wf(e);return tx(n._query),qb(t,n._query).then((s=>new Un(e,r,n,s)))}function Au(n,e,t,...r){n=gn(n,be);const s=gn(n.firestore,ji),i=ff(s);let a;return a=typeof(e=ye(e))=="string"||e instanceof Di?Qb(i,"updateDoc",n._key,e,t,r):Kb(i,"updateDoc",n._key,e),ix(s,[a.toMutation(n._key,At.exists(!0))])}function ix(n,e){return(function(r,s){const i=new Tt;return r.asyncQueue.enqueueAndForget((async()=>Rb(await Ub(r),s,i))),i.promise})(ka(n),e)}function ox(n,e,t){const r=t.docs.get(e._key),s=new wf(n);return new fn(n,s,e._key,r,new Pr(t.hasPendingWrites,t.fromCache),e.converter)}function Su(){return new Da("serverTimestamp")}(function(e,t=!0){(function(s){er=s})(Jn),wt(new st("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ji(new Qw(r.getProvider("auth-internal")),new Xw(a,r.getProvider("app-check-internal")),(function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new M(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gr(f.options.projectId,m)})(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Xe(Sl,Nl,e),Xe(Sl,Nl,"esm2020")})();const vf="@firebase/installations",Fa="0.6.19";/**
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
 */const bf=1e4,xf=`w:${Fa}`,Ef="FIS_v2",ax="https://firebaseinstallations.googleapis.com/v1",cx=3600*1e3,lx="installations",ux="Installations";/**
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
 */const hx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},_n=new vn(lx,ux,hx);function If(n){return n instanceof at&&n.code.includes("request-failed")}/**
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
 */function Tf({projectId:n}){return`${ax}/projects/${n}/installations`}function Af(n){return{token:n.token,requestStatus:2,expiresIn:fx(n.expiresIn),creationTime:Date.now()}}async function Sf(n,e){const r=(await e.json()).error;return _n.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Nf({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function dx(n,{refreshToken:e}){const t=Nf(n);return t.append("Authorization",mx(e)),t}async function Rf(n){const e=await n();return e.status>=500&&e.status<600?n():e}function fx(n){return Number(n.replace("s","000"))}function mx(n){return`${Ef} ${n}`}/**
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
 */async function px({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Tf(n),s=Nf(n),i=e.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={fid:t,authVersion:Ef,appId:n.appId,sdkVersion:xf},l={method:"POST",headers:s,body:JSON.stringify(a)},h=await Rf(()=>fetch(r,l));if(h.ok){const f=await h.json();return{fid:f.fid||t,registrationStatus:2,refreshToken:f.refreshToken,authToken:Af(f.authToken)}}else throw await Sf("Create Installation",h)}/**
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
 */function Cf(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function gx(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const yx=/^[cdef][\w-]{21}$/,Qo="";function _x(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=wx(n);return yx.test(t)?t:Qo}catch{return Qo}}function wx(n){return gx(n).substr(0,22)}/**
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
 */function Fi(n){return`${n.appName}!${n.appId}`}/**
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
 */const Pf=new Map;function kf(n,e){const t=Fi(n);jf(t,e),vx(t,e)}function jf(n,e){const t=Pf.get(n);if(t)for(const r of t)r(e)}function vx(n,e){const t=bx();t&&t.postMessage({key:n,fid:e}),xx()}let dn=null;function bx(){return!dn&&"BroadcastChannel"in self&&(dn=new BroadcastChannel("[Firebase] FID Change"),dn.onmessage=n=>{jf(n.data.key,n.data.fid)}),dn}function xx(){Pf.size===0&&dn&&(dn.close(),dn=null)}/**
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
 */const Ex="firebase-installations-database",Ix=1,wn="firebase-installations-store";let _o=null;function Ua(){return _o||(_o=rh(Ex,Ix,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(wn)}}})),_o}async function ui(n,e){const t=Fi(n),s=(await Ua()).transaction(wn,"readwrite"),i=s.objectStore(wn),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&kf(n,e.fid),e}async function Df(n){const e=Fi(n),r=(await Ua()).transaction(wn,"readwrite");await r.objectStore(wn).delete(e),await r.done}async function Ui(n,e){const t=Fi(n),s=(await Ua()).transaction(wn,"readwrite"),i=s.objectStore(wn),a=await i.get(t),l=e(a);return l===void 0?await i.delete(t):await i.put(l,t),await s.done,l&&(!a||a.fid!==l.fid)&&kf(n,l.fid),l}/**
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
 */async function Ba(n){let e;const t=await Ui(n.appConfig,r=>{const s=Tx(r),i=Ax(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Qo?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Tx(n){const e=n||{fid:_x(),registrationStatus:0};return Vf(e)}function Ax(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(_n.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Sx(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Nx(n)}:{installationEntry:e}}async function Sx(n,e){try{const t=await px(n,e);return ui(n.appConfig,t)}catch(t){throw If(t)&&t.customData.serverCode===409?await Df(n.appConfig):await ui(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Nx(n){let e=await Nu(n.appConfig);for(;e.registrationStatus===1;)await Cf(100),e=await Nu(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Ba(n);return r||t}return e}function Nu(n){return Ui(n,e=>{if(!e)throw _n.create("installation-not-found");return Vf(e)})}function Vf(n){return Rx(n)?{fid:n.fid,registrationStatus:0}:n}function Rx(n){return n.registrationStatus===1&&n.registrationTime+bf<Date.now()}/**
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
 */async function Cx({appConfig:n,heartbeatServiceProvider:e},t){const r=Px(n,t),s=dx(n,t),i=e.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={installation:{sdkVersion:xf,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},h=await Rf(()=>fetch(r,l));if(h.ok){const f=await h.json();return Af(f)}else throw await Sf("Generate Auth Token",h)}function Px(n,{fid:e}){return`${Tf(n)}/${e}/authTokens:generate`}/**
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
 */async function qa(n,e=!1){let t;const r=await Ui(n.appConfig,i=>{if(!Of(i))throw _n.create("not-registered");const a=i.authToken;if(!e&&Dx(a))return i;if(a.requestStatus===1)return t=kx(n,e),i;{if(!navigator.onLine)throw _n.create("app-offline");const l=Ox(i);return t=jx(n,l),l}});return t?await t:r.authToken}async function kx(n,e){let t=await Ru(n.appConfig);for(;t.authToken.requestStatus===1;)await Cf(100),t=await Ru(n.appConfig);const r=t.authToken;return r.requestStatus===0?qa(n,e):r}function Ru(n){return Ui(n,e=>{if(!Of(e))throw _n.create("not-registered");const t=e.authToken;return Mx(t)?{...e,authToken:{requestStatus:0}}:e})}async function jx(n,e){try{const t=await Cx(n,e),r={...e,authToken:t};return await ui(n.appConfig,r),t}catch(t){if(If(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Df(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await ui(n.appConfig,r)}throw t}}function Of(n){return n!==void 0&&n.registrationStatus===2}function Dx(n){return n.requestStatus===2&&!Vx(n)}function Vx(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+cx}function Ox(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function Mx(n){return n.requestStatus===1&&n.requestTime+bf<Date.now()}/**
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
 */async function Lx(n){const e=n,{installationEntry:t,registrationPromise:r}=await Ba(e);return r?r.catch(console.error):qa(e).catch(console.error),t.fid}/**
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
 */async function Fx(n,e=!1){const t=n;return await Ux(t),(await qa(t,e)).token}async function Ux(n){const{registrationPromise:e}=await Ba(n);e&&await e}/**
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
 */function Bx(n){if(!n||!n.options)throw wo("App Configuration");if(!n.name)throw wo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw wo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function wo(n){return _n.create("missing-app-config-values",{valueName:n})}/**
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
 */const Mf="installations",qx="installations-internal",$x=n=>{const e=n.getProvider("app").getImmediate(),t=Bx(e),r=bn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Hx=n=>{const e=n.getProvider("app").getImmediate(),t=bn(e,Mf).getImmediate();return{getId:()=>Lx(t),getToken:s=>Fx(t,s)}};function zx(){wt(new st(Mf,$x,"PUBLIC")),wt(new st(qx,Hx,"PRIVATE"))}zx();Xe(vf,Fa);Xe(vf,Fa,"esm2020");/**
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
 */const hi="analytics",Gx="firebase_id",Wx="origin",Kx=60*1e3,Qx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$a="https://www.googletagmanager.com/gtag/js";/**
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
 */const qe=new fi("@firebase/analytics");/**
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
 */const Yx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},We=new vn("analytics","Analytics",Yx);/**
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
 */function Jx(n){if(!n.startsWith($a)){const e=We.create("invalid-gtag-resource",{gtagURL:n});return qe.warn(e.message),""}return n}function Lf(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Xx(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Zx(n,e){const t=Xx("firebase-js-sdk-policy",{createScriptURL:Jx}),r=document.createElement("script"),s=`${$a}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function eE(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function tE(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const h=(await Lf(t)).find(f=>f.measurementId===s);h&&await e[h.appId]}}catch(l){qe.error(l)}n("config",s,i)}async function nE(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Lf(t);for(const h of a){const f=l.find(g=>g.measurementId===h),m=f&&e[f.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){qe.error(i)}}function rE(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[l,h]=a;await nE(n,e,t,l,h)}else if(i==="config"){const[l,h]=a;await tE(n,e,t,r,l,h)}else if(i==="consent"){const[l,h]=a;n("consent",l,h)}else if(i==="get"){const[l,h,f]=a;n("get",l,h,f)}else if(i==="set"){const[l]=a;n("set",l)}else n(i,...a)}catch(l){qe.error(l)}}return s}function sE(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=rE(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function iE(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes($a)&&t.src.includes(n))return t;return null}/**
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
 */const oE=30,aE=1e3;class cE{constructor(e={},t=aE){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ff=new cE;function lE(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function uE(n){var a;const{appId:e,apiKey:t}=n,r={method:"GET",headers:lE(t)},s=Qx.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let l="";try{const h=await i.json();(a=h.error)!=null&&a.message&&(l=h.error.message)}catch{}throw We.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function hE(n,e=Ff,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw We.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw We.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new mE;return setTimeout(async()=>{l.abort()},Kx),Uf({appId:r,apiKey:s,measurementId:i},a,l,e)}async function Uf(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Ff){var l;const{appId:i,measurementId:a}=n;try{await dE(r,e)}catch(h){if(a)return qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:i,measurementId:a};throw h}try{const h=await uE(n);return s.deleteThrottleMetadata(i),h}catch(h){const f=h;if(!fE(f)){if(s.deleteThrottleMetadata(i),a)return qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:i,measurementId:a};throw h}const m=Number((l=f==null?void 0:f.customData)==null?void 0:l.httpStatus)===503?Jc(t,s.intervalMillis,oE):Jc(t,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return s.setThrottleMetadata(i,g),qe.debug(`Calling attemptFetch again in ${m} millis`),Uf(n,g,r,s)}}function dE(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(We.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function fE(n){if(!(n instanceof at)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class mE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function pE(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a={...r,send_to:i};n("event",t,a)}}async function gE(n,e,t,r){if(r&&r.global){const s={};for(const i of Object.keys(t))s[`user_properties.${i}`]=t[i];return n("set",s),Promise.resolve()}else{const s=await e;n("config",s,{update:!0,user_properties:t})}}/**
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
 */async function yE(){if(Zu())try{await eh()}catch(n){return qe.warn(We.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return qe.warn(We.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _E(n,e,t,r,s,i,a){const l=hE(n);l.then(w=>{t[w.measurementId]=w.appId,n.options.measurementId&&w.measurementId!==n.options.measurementId&&qe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>qe.error(w)),e.push(l);const h=yE().then(w=>{if(w)return r.getId()}),[f,m]=await Promise.all([l,h]);iE(i)||Zx(i,f.measurementId),s("js",new Date);const g=(a==null?void 0:a.config)??{};return g[Wx]="firebase",g.update=!0,m!=null&&(g[Gx]=m),s("config",f.measurementId,g),f.measurementId}/**
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
 */class wE{constructor(e){this.app=e}_delete(){return delete Bn[this.app.options.appId],Promise.resolve()}}let Bn={},Cu=[];const Pu={};let vo="dataLayer",vE="gtag",ku,Ha,ju=!1;function bE(){const n=[];if(Xu()&&n.push("This is a browser extension environment."),fg()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=We.create("invalid-analytics-context",{errorInfo:e});qe.warn(t.message)}}function xE(n,e,t){bE();const r=n.options.appId;if(!r)throw We.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw We.create("no-api-key");if(Bn[r]!=null)throw We.create("already-exists",{id:r});if(!ju){eE(vo);const{wrappedGtag:i,gtagCore:a}=sE(Bn,Cu,Pu,vo,vE);Ha=i,ku=a,ju=!0}return Bn[r]=_E(n,Cu,Pu,e,ku,vo,t),new wE(n)}function EE(n=Xo()){n=ye(n);const e=bn(n,hi);return e.isInitialized()?e.getImmediate():IE(n)}function IE(n,e={}){const t=bn(n,hi);if(t.isInitialized()){const s=t.getImmediate();if(Kt(e,t.getOptions()))return s;throw We.create("already-initialized")}return t.initialize({options:e})}function TE(n,e,t){n=ye(n),gE(Ha,Bn[n.app.options.appId],e,t).catch(r=>qe.error(r))}function AE(n,e,t,r){n=ye(n),pE(Ha,Bn[n.app.options.appId],e,t,r).catch(s=>qe.error(s))}const Du="@firebase/analytics",Vu="0.10.19";function SE(){wt(new st(hi,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return xE(r,s,t)},"PUBLIC")),wt(new st("analytics-internal",n,"PRIVATE")),Xe(Du,Vu),Xe(Du,Vu,"esm2020");function n(e){try{const t=e.getProvider(hi).getImmediate();return{logEvent:(r,s,i)=>AE(t,r,s,i),setUserProperties:(r,s)=>TE(t,r,s)}}catch(t){throw We.create("interop-component-reg-failed",{reason:t})}}}SE();const Yo={apiKey:"AIzaSyBkMktbTfBNIdhtBwCC_cRBEavKeuTyCGA",authDomain:"myschola-5ec1f.firebaseapp.com",projectId:"myschola-5ec1f",storageBucket:"myschola-5ec1f.appspot.com",messagingSenderId:"927860875256",appId:"1:927860875256:web:ce73f8eabd09cac6f3400d",measurementId:"G-XTC703H7RN"};if(!Yo.apiKey||!Yo.projectId)throw console.error("Firebase configuration is missing. Please check your .env file."),new Error("Firebase configuration error");const za=sh(Yo),Ze=zw(za),fe=Hb(za);EE(za);function NE(){const[n,e]=k.useState(""),[t,r]=k.useState(!1),[s,i]=k.useState(!0),a=Qn(),l=Zr(),h=async m=>{var C,j;if((await Pe(Ne(fe,"admins",m))).exists())return a("/admin",{replace:!0}),!0;if((await Pe(Ne(fe,"teachers",m))).exists())return a("/admin",{replace:!0}),!0;if((await Pe(Ne(fe,"students",m))).exists()){const P=((j=(C=l.state)==null?void 0:C.from)==null?void 0:j.pathname)||"/app/dashboard";return a(P,{replace:!0}),!0}return!1};k.useEffect(()=>{(async()=>{try{await Ze.signOut()}catch(g){console.error("Error signing out existing session:",g)}finally{i(!1)}})()},[]);const f=async m=>{m.preventDefault(),e(""),r(!0);const g=new FormData(m.currentTarget),w=g.get("email"),A=g.get("password");try{console.log("Attempting to sign in with email:",w);const j=(await P_(Ze,w,A)).user;console.log("Sign in successful. User UID:",j.uid),await h(j.uid)||(console.error("No role document found for UID:",j.uid),await Ze.signOut(),e("Profile not found. Please contact your administrator."))}catch(C){console.error(C),C.code==="auth/invalid-email"?e("Please enter a valid email address."):C.code==="auth/user-not-found"?e("No account found with this email. Please contact your teacher to create an account."):C.code==="auth/wrong-password"?e("Incorrect password. Please try again."):C.code==="auth/invalid-credential"?e("Invalid email or password. Please try again."):e(C.message||"Failed to sign in. Please try again.")}finally{r(!1)}};return s?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Checking authentication..."})]})}):c.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[c.jsx("div",{className:"flex justify-center",children:c.jsxs(rt,{to:"/",className:"flex items-center",children:[c.jsx(Fr,{className:"h-12 w-12 text-blue-600"}),c.jsx("span",{className:"ml-2 text-3xl font-bold text-gray-900",children:"MySchola"})]})}),c.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"}),c.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Students: Use the email and password provided by your teacher"})]}),c.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:c.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[c.jsxs("form",{className:"space-y-6",onSubmit:f,children:[n&&c.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative",role:"alert",children:c.jsx("span",{className:"block sm:inline",children:n})}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),c.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:c.jsx($u,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),c.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"you@example.com"})]})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),c.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:c.jsx(qu,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),c.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"********"})]})]}),c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),c.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),c.jsx("div",{className:"text-sm",children:c.jsx("a",{href:"#",className:"font-medium text-blue-600 hover:text-blue-500",children:"Forgot your password?"})})]}),c.jsx("div",{children:c.jsx("button",{type:"submit",disabled:t,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed",children:t?"Please wait...":"Sign in"})})]}),c.jsx("div",{className:"mt-6",children:c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"absolute inset-0 flex items-center",children:c.jsx("div",{className:"w-full border-t border-gray-300"})}),c.jsx("div",{className:"relative flex justify-center text-sm",children:c.jsx("span",{className:"px-2 bg-white text-gray-500",children:c.jsxs(rt,{to:"/",className:"flex items-center hover:text-gray-900 transition",children:[c.jsx(Lr,{className:"h-4 w-4 mr-1"}),"Back to Home"]})})})]})})]})})]})}function bo({children:n}){const[e,t]=k.useState(!0),[r,s]=k.useState(!1),[i,a]=k.useState(!1),l=Zr();return k.useEffect(()=>{const h=gi(Ze,async f=>{if(f)try{(await Pe(Ne(fe,"students",f.uid))).exists()?(s(!0),a(!0)):(s(!1),a(!1))}catch(m){console.error("Error checking student status:",m),s(!1),a(!1)}else s(!1),a(!1);t(!1)});return()=>h()},[]),e?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Loading..."})]})}):!r||!i?c.jsx(ym,{to:"/login",state:{from:l},replace:!0}):n}const RE=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?Fm:e.includes("english")||e.includes("literature")||e.includes("language")?Om:e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?tp:e.includes("geography")||e.includes("geography")?rp:e.includes("history")?op:e.includes("music")?yp:e.includes("art")||e.includes("design")?wp:e.includes("language")||e.includes("french")||e.includes("spanish")||e.includes("german")?cp:e.includes("computer")||e.includes("ict")||e.includes("it")?km:Fr},CE=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?"bg-blue-50 border-blue-200 text-blue-700":e.includes("english")||e.includes("literature")||e.includes("language")?"bg-purple-50 border-purple-200 text-purple-700":e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?"bg-green-50 border-green-200 text-green-700":e.includes("geography")?"bg-cyan-50 border-cyan-200 text-cyan-700":e.includes("history")?"bg-amber-50 border-amber-200 text-amber-700":e.includes("music")?"bg-pink-50 border-pink-200 text-pink-700":e.includes("art")||e.includes("design")?"bg-rose-50 border-rose-200 text-rose-700":"bg-gray-50 border-gray-200 text-gray-700"},Bf="subjectAccess",PE=()=>{try{const n=localStorage.getItem(Bf),e=n?JSON.parse(n):[];return Array.isArray(e)?e:[]}catch{return[]}},kE=n=>{localStorage.setItem(Bf,JSON.stringify(n))},Ou=n=>(n==null?void 0:n.pin)||(n==null?void 0:n.accessPin)||"";function jE(){const n=Qn(),[e,t]=k.useState(null),[r,s]=k.useState([]),[i,a]=k.useState(!0),[l,h]=k.useState(""),[f,m]=k.useState(null),[g,w]=k.useState(PE()),[A,C]=k.useState(null),[j,P]=k.useState(""),[O,D]=k.useState("");k.useEffect(()=>{(async()=>{try{const v=Ze.currentUser;if(!v){n("/login");return}const E=await Pe(Ne(fe,"students",v.uid));if(!E.exists()){h("Student profile not found"),a(!1);return}const b=E.data();if(t(b),console.log("Student data:",b),console.log("Student subjects array:",b.subjects),b.subjects&&b.subjects.length>0){const _=(await Promise.all(b.subjects.map(async H=>{try{const ee=await Pe(Ne(fe,"subjects",H));return ee.exists()?{id:ee.id,...ee.data()}:(console.warn(`Subject document not found for ID: ${H}`),null)}catch(ee){return console.error(`Error fetching subject ${H}:`,ee),null}}))).filter(H=>H!==null);console.log("Loaded subjects:",_),console.log("Expected subjects:",b.subjects),console.log("Missing subjects:",b.subjects.filter(H=>!_.some(ee=>ee.id===H))),s(_),_.length!==b.subjects.length&&m({expected:b.subjects.length,loaded:_.length,missing:b.subjects.filter(H=>!_.some(ee=>ee.id===H))})}else console.log("No subjects array found in student data");a(!1)}catch(v){console.error("Error loading student data:",v),h("Failed to load dashboard data"),a(!1)}})()},[n]);const F=y=>!String(Ou(y)||"").trim()||g.includes(y.id),K=y=>{C(y),P(""),D("")},ie=y=>{const v=String(Ou(y)||"").trim();if(v&&j.trim()!==v){D("Incorrect PIN");return}const E=Array.from(new Set([...g,y.id]));w(E),kE(E),C(null),P(""),D("")},oe=()=>{C(null),P(""),D("")},x=async()=>{try{await D_(Ze),n("/login",{replace:!0})}catch(y){console.error("Error signing out:",y)}};return i?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",role:"status","aria-live":"polite",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto","aria-hidden":"true"}),c.jsx("p",{className:"mt-4 text-gray-600","aria-label":"Loading dashboard",children:"Loading your dashboard..."})]})}):l?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("p",{className:"text-red-600 mb-4",children:l}),c.jsx("button",{onClick:x,className:"text-blue-600 hover:text-blue-700 underline",children:"Sign out and try again"})]})}):c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx("header",{className:"bg-white shadow-sm",role:"banner",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx(Bs,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),c.jsxs("div",{children:[c.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"MySchola Student Dashboard"}),c.jsxs("p",{className:"text-sm text-gray-500",children:["Hi, ",c.jsx("span",{className:"font-medium",children:(e==null?void 0:e.name)||"Student"})]})]})]}),c.jsxs("nav",{className:"flex items-center gap-3","aria-label":"Dashboard navigation",children:[c.jsx(rt,{to:"/",className:"text-sm text-gray-600 hover:text-gray-900 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition","aria-label":"Return to homepage",children:"Back to site"}),c.jsxs("button",{onClick:x,className:"inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition","aria-label":"Sign out of your account",children:[c.jsx(hp,{className:"h-4 w-4","aria-hidden":"true"}),"Sign out"]})]})]})}),c.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"mb-8",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Your Subjects"}),c.jsx("p",{className:"text-gray-600",children:"Select a subject to join Zoom sessions, watch recordings, or download homework."})]}),f&&c.jsxs("div",{className:"mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4",role:"alert","aria-live":"polite",children:[c.jsx("p",{className:"text-sm text-yellow-800 font-medium mb-1",children:"Some subjects may not be loading correctly"}),c.jsxs("p",{className:"text-xs text-yellow-700",children:["Expected ",f.expected," subject(s), loaded ",f.loaded,". Please check the browser console for details."]})]}),r.length===0?c.jsxs("div",{className:"bg-white rounded-lg shadow p-8 text-center",role:"region","aria-labelledby":"no-subjects-heading",children:[c.jsx(Bs,{className:"h-12 w-12 text-gray-400 mx-auto mb-4","aria-hidden":"true"}),c.jsx("h3",{id:"no-subjects-heading",className:"text-lg font-semibold text-gray-900 mb-2",children:"No Subjects Enrolled"}),c.jsx("p",{className:"text-gray-600 mb-2",children:"You're not enrolled in any subjects yet."}),c.jsx("p",{className:"text-sm text-gray-500",children:"Please contact your teacher to get enrolled."})]}):c.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",role:"list","aria-label":"Enrolled subjects",children:r.map(y=>{const v=RE(y.name),E=CE(y.name);return c.jsxs("article",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",role:"listitem",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[c.jsx("div",{className:`p-2 rounded-lg ${E}`,children:c.jsx(v,{className:"h-6 w-6","aria-hidden":"true"})}),c.jsx("h3",{className:"text-xl font-semibold text-gray-900 flex-1",children:y.name})]}),c.jsx("div",{className:"space-y-3",children:F(y)?c.jsxs(c.Fragment,{children:[y.zoomLink&&c.jsxs("a",{href:y.zoomLink,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`Join Zoom session for ${y.name}`,children:[c.jsx(Xm,{className:"h-4 w-4","aria-hidden":"true"}),"Join Zoom"]}),c.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[c.jsxs(rt,{to:`/app/subject/${y.id}/recordings`,className:"flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`View recordings for ${y.name}`,children:[c.jsx(Ur,{className:"h-4 w-4","aria-hidden":"true"}),"Recordings"]}),c.jsxs(rt,{to:`/app/subject/${y.id}/homework`,className:"flex items-center justify-center gap-2 text-green-600 hover:text-green-700 px-4 py-2 border border-green-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition font-medium","aria-label":`View homework for ${y.name}`,children:[c.jsx(qs,{className:"h-4 w-4","aria-hidden":"true"}),"Homework"]})]})]}):c.jsxs("div",{className:"space-y-3",children:[c.jsx("p",{className:"text-sm text-gray-600",children:"This subject is locked. Enter the PIN to unlock."}),A===y.id?c.jsxs("div",{className:"space-y-2",children:[c.jsx("input",{type:"password",value:j,onChange:b=>P(b.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Subject PIN"}),O&&c.jsx("p",{className:"text-sm text-red-600",children:O}),c.jsxs("div",{className:"flex flex-wrap gap-2",children:[c.jsx("button",{type:"button",onClick:()=>ie(y),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Unlock"}),c.jsx("button",{type:"button",onClick:oe,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Cancel"})]})]}):c.jsx("button",{type:"button",onClick:()=>K(y.id),className:"w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Enter PIN"})]})})]},y.id)})})]})]})}const qf="subjectAccess",DE=()=>{try{const n=localStorage.getItem(qf),e=n?JSON.parse(n):[];return Array.isArray(e)?e:[]}catch{return[]}},VE=n=>{localStorage.setItem(qf,JSON.stringify(n))},OE=n=>(n==null?void 0:n.pin)||(n==null?void 0:n.accessPin)||"";function ME(){const{subjectId:n}=Fu(),e=Qn(),[t,r]=k.useState([]),[s,i]=k.useState([]),[a,l]=k.useState(null),[h,f]=k.useState(!0),[m,g]=k.useState(""),[w,A]=k.useState(!1),[C,j]=k.useState(""),[P,O]=k.useState(""),[D,F]=k.useState(""),[K,ie]=k.useState(DE()),[oe,x]=k.useState(0);k.useEffect(()=>{const I=async()=>{try{if(!Ze.currentUser){e("/login");return}const H=Ne(fe,"subjects",n),ee=await Pe(H);if(ee.exists()){const ue={id:n,...ee.data()};l(ue);const $e=OE(ue);if(F($e),!(!$e||K.includes(n))){A(!0),f(!1);return}}let Ke;try{Ke=ai(Xr(fe,"recordings"),ci("subjectId","==",n),nx("date","desc"))}catch(ue){console.warn("OrderBy failed, using simple query:",ue),Ke=ai(Xr(fe,"recordings"),ci("subjectId","==",n))}const Qe=(await li(Ke)).docs.map(ue=>({id:ue.id,...ue.data()})).filter(ue=>ue.approvalStatus==="approved"||!ue.approvalStatus).sort((ue,$e)=>{var ct,lt;const bt=(ct=ue.date)!=null&&ct.toDate?ue.date.toDate():ue.date?new Date(ue.date):new Date(0);return((lt=$e.date)!=null&&lt.toDate?$e.date.toDate():$e.date?new Date($e.date):new Date(0))-bt});r(Qe),i(Qe),A(!1),f(!1)}catch(_){console.error("Error loading recordings:",_),g("Failed to load recordings"),f(!1)}};n&&(f(!0),g(""),I())},[n,e,K,oe]);const y=I=>{I.preventDefault();const _=String(D||"").trim();if(!_){A(!1);return}if(C.trim()!==_){O("Incorrect PIN");return}const H=Array.from(new Set([...K,n]));ie(H),VE(H),j(""),O(""),A(!1),x(ee=>ee+1)},v=()=>{var _;return a?(((_=a.name)==null?void 0:_.toLowerCase())||"").includes("english"):!1},E=()=>{const I={};return s.forEach(_=>{const H=_.examBoard||"Other",ee=_.tier||(v()?"General":"Other"),Ke=`${H}_${ee}`;I[Ke]||(I[Ke]={examBoard:H,tier:ee,recordings:[]}),I[Ke].recordings.push(_)}),Object.values(I).sort((_,H)=>_.examBoard!==H.examBoard?_.examBoard==="AQA"?-1:H.examBoard==="AQA"?1:_.examBoard==="Edexcel"?-1:H.examBoard==="Edexcel"?1:_.examBoard.localeCompare(H.examBoard):_.tier==="Foundation"?-1:H.tier==="Foundation"?1:_.tier==="Higher"?-1:H.tier==="Higher"?1:_.tier.localeCompare(H.tier))},b=I=>I?(I.toDate?I.toDate():new Date(I)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"Date not available";return h?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Loading recordings..."})]})}):w?c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs(rt,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[c.jsx(Lr,{className:"h-4 w-4"}),"Back to Dashboard"]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsx("h1",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Enter Subject PIN"}),c.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"This subject is locked. Enter the PIN to access recordings."}),c.jsxs("form",{onSubmit:y,className:"space-y-4",children:[c.jsx("input",{type:"password",value:C,onChange:I=>j(I.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Subject PIN",autoFocus:!0}),P&&c.jsx("div",{className:"text-sm text-red-600",children:P}),c.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"Unlock Subject"})]})]})]})}):c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs(rt,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[c.jsx(Lr,{className:"h-4 w-4"}),"Back to Dashboard"]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[c.jsx(Ur,{className:"h-6 w-6 text-blue-600"}),c.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Recordings - ",(a==null?void 0:a.name)||"Subject"]})]}),c.jsx("p",{className:"text-gray-600",children:"Watch past lesson recordings for this subject."})]}),m&&c.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6",children:m}),s.length===0?c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[c.jsx(Ur,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),c.jsx("p",{className:"text-gray-600",children:"No recordings available yet."}),c.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Check back later for new recordings."})]}):c.jsx("div",{className:"space-y-6",children:E().map((I,_)=>c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",children:[c.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 px-6 py-4",children:c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx(Bs,{className:"h-5 w-5 text-blue-600"}),c.jsxs("div",{children:[c.jsxs("h3",{className:"text-lg font-semibold text-gray-900",children:[I.examBoard,!v()&&I.tier&&c.jsxs("span",{className:"ml-2 text-base font-normal text-gray-600",children:["- ",I.tier]})]}),c.jsxs("p",{className:"text-sm text-gray-600",children:[I.recordings.length," recording",I.recordings.length!==1?"s":""]})]})]})}),c.jsx("div",{className:"p-6 space-y-4",children:I.recordings.map(H=>c.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:c.jsxs("div",{className:"flex items-start justify-between",children:[c.jsxs("div",{className:"flex-1",children:[c.jsx("h4",{className:"text-base font-semibold text-gray-900 mb-2",children:H.title}),c.jsx("p",{className:"text-sm text-gray-500",children:b(H.date)})]}),c.jsxs("a",{href:H.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"ml-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap",children:[c.jsx(Ep,{className:"h-4 w-4"}),"Watch"]})]})},H.id))})]},_))})]})})}function LE(){const{subjectId:n}=Fu(),[e,t]=k.useState([]),[r,s]=k.useState(null),[i,a]=k.useState(!0),[l,h]=k.useState(null);k.useEffect(()=>{n&&(async()=>{try{const w=Ne(fe,"subjects",n),A=await Pe(w);A.exists()&&s({id:n,...A.data()});const C=ai(Xr(fe,"homeworks"),ci("subjectId","==",n)),P=(await li(C)).docs.map(O=>({id:O.id,...O.data()}));t(P),a(!1)}catch(w){console.error("Error loading homework:",w),a(!1)}})()},[n]);const f=g=>g?(g.toDate?g.toDate():new Date(g)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"No due date",m=g=>g?(g.toDate?g.toDate():new Date(g))<new Date:!1;return i?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Loading homework..."})]})}):c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs(rt,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[c.jsx(Lr,{className:"h-4 w-4"}),"Back to Dashboard"]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[c.jsx(qs,{className:"h-6 w-6 text-green-600"}),c.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Homework - ",(r==null?void 0:r.name)||"Subject"]})]}),c.jsx("p",{className:"text-gray-600",children:"Download your homework assignments."})]}),l?c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsxs("div",{className:"flex items-center justify-between mb-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:l.title}),c.jsx("button",{onClick:()=>{h(null)},className:"text-gray-600 hover:text-gray-900",children:"Close"})]}),l.description&&c.jsx("p",{className:"text-gray-600 mb-6",children:l.description}),c.jsxs("p",{className:"text-sm text-gray-500 mb-6",children:["Due: ",f(l.dueDate)]}),l.attachmentUrl&&c.jsxs("a",{href:l.attachmentUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6",children:[c.jsx(Gc,{className:"h-5 w-5"}),"Download ",l.attachmentName||"homework file"]}),!l.attachmentUrl&&c.jsx("p",{className:"text-gray-600",children:"No homework file attached."})]}):c.jsx("div",{className:"space-y-4",children:e.length===0?c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[c.jsx(qs,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),c.jsx("p",{className:"text-gray-600",children:"No homework assignments available yet."})]}):e.map(g=>{const w=m(g.dueDate);return c.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:c.jsxs("div",{className:"flex items-start justify-between mb-4",children:[c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:g.title}),g.description&&c.jsx("p",{className:"text-gray-600 mb-2",children:g.description}),g.attachmentUrl&&c.jsxs("a",{href:g.attachmentUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-2",children:[c.jsx(Gc,{className:"h-4 w-4"}),"Download ",g.attachmentName||"homework file"]}),c.jsx("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsx(Bu,{className:"h-4 w-4"}),"Due: ",f(g.dueDate)]})}),w&&c.jsx("div",{className:"mt-3 text-red-600 text-sm font-medium",children:"Overdue"})]}),c.jsx("button",{onClick:()=>h(g),className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"View Details"})]})},g.id)})})]})})}const FE="myschola-5ec1f",UE=`https://us-central1-${FE}.cloudfunctions.net`,Mu=UE,BE=async()=>{const n=Ze.currentUser;if(!n)throw new Error("User is not authenticated");return n.getIdToken()},Ga=async(n,e)=>{if(!Mu)throw new Error("Functions base URL is not configured");const t=await BE(),r=await fetch(`${Mu}/${n}`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(e||{})});if(!r.ok){const s=await r.text();throw new Error(s||`Request failed (${r.status})`)}return r.json()},Lu=n=>Ga("createHidriveUpload",n),qE=n=>Ga("createRecording",n),$E=n=>Ga("createHomework",n);function HE(){const n=Qn(),[e,t]=k.useState(!1),[r,s]=k.useState(!0),[i,a]=k.useState([]),[l,h]=k.useState(""),[f,m]=k.useState(null),[g,w]=k.useState("recording"),[A,C]=k.useState(""),[j,P]=k.useState(null),[O,D]=k.useState(0),[F,K]=k.useState(""),[ie,oe]=k.useState(""),[x,y]=k.useState([]),[v,E]=k.useState(""),[b,I]=k.useState(""),[_,H]=k.useState(""),[ee,Ke]=k.useState(null),[Sn,Qe]=k.useState(0),[ue,$e]=k.useState(!1),[bt,xe]=k.useState("");k.useEffect(()=>{const U=gi(Ze,async z=>{if(!z){t(!1),s(!1),n("/login",{replace:!0});return}try{const ne=await Pe(Ne(fe,"admins",z.uid)),se=ne.exists()?null:await Pe(Ne(fe,"teachers",z.uid));ne.exists()||se!=null&&se.exists()?t(!0):(t(!1),n("/login",{replace:!0}))}catch(ne){console.error("Error verifying role:",ne),t(!1),n("/login",{replace:!0})}finally{s(!1)}});return()=>U()},[n]),k.useEffect(()=>{e&&(async()=>{try{const ne=(await li(Xr(fe,"subjects"))).docs.map(se=>({id:se.id,...se.data()}));if(a(ne),ne.length>0){const se=ne[0];h(se.id),m(se)}}catch(z){console.error("Error loading subjects:",z)}})()},[e]),k.useEffect(()=>{(async()=>{if(g==="approve"&&e)try{const z=ai(Xr(fe,"recordings"),ci("approvalStatus","==","pending")),ne=await li(z),se=await Promise.all(ne.docs.map(async je=>{const ce=je.data();let Te="Unknown";if(ce.subjectId)try{const De=await Pe(je(fe,"subjects",ce.subjectId));De.exists()&&(Te=De.data().name)}catch(De){console.error("Error fetching subject:",De)}return{id:je.id,...ce,subjectName:Te}}));y(se)}catch(z){console.error("Error loading pending recordings:",z)}})()},[g,e]),k.useEffect(()=>{const U=i.find(z=>z.id===l);m(U||null),K(""),oe("")},[l,i]);const ct=()=>{var z;return f?(((z=f.name)==null?void 0:z.toLowerCase())||"").includes("english"):!1},lt=(U,z,ne)=>new Promise((se,je)=>{if(!(z!=null&&z.uploadUrl)){je(new Error("Upload URL is missing"));return}const ce=new XMLHttpRequest;ce.open(z.method||"PUT",z.uploadUrl,!0),ce.responseType="json",z.headers&&Object.entries(z.headers).forEach(([Te,De])=>{De&&ce.setRequestHeader(Te,De)}),ce.upload.onprogress=Te=>{if(Te.lengthComputable){const De=Math.round(Te.loaded/Te.total*100);ne&&ne(De)}},ce.onload=()=>{if(ce.status>=200&&ce.status<300){ne&&ne(100);let Te=ce.response;if(!Te&&ce.responseText)try{Te=JSON.parse(ce.responseText)}catch{Te=null}se({response:Te})}else je(new Error(`Upload failed (${ce.status})`))},ce.onerror=()=>{je(new Error("Upload failed"))},ce.send(U)}),ir=async U=>{if(U.preventDefault(),!l||!A||!F){xe("Please fill in all required fields");return}if(!j){xe("Please upload a video file to continue");return}if(!ct()&&!ie){xe("Please select a tier (Foundation or Higher)");return}$e(!0),xe("");try{D(0);const z=await Lu({subjectId:l,fileName:j.name,contentType:j.type,uploadType:"recording"}),ne=await lt(j,z,D),se=ne==null?void 0:ne.response,je=(se==null?void 0:se.id)||(se==null?void 0:se.pid)||(se==null?void 0:se.file_id)||null,ce={subjectId:l,title:A,examBoard:F,tier:ct()?null:ie,hidrivePath:z.hidrivePath,hidriveFileId:je,fileName:j.name};sessionStorage.setItem("pendingRecording",JSON.stringify(ce)),C(""),P(null),D(0),K(""),oe(""),n("/admin/share-link",{state:{pendingRecording:ce}})}catch(z){console.error("Error adding recording:",z),xe("Failed to upload recording"),D(0)}finally{$e(!1)}},or=async U=>{try{await Au(Ne(fe,"recordings",U),{approvalStatus:"approved",approvedAt:Su()}),y(x.filter(z=>z.id!==U)),xe("Recording approved successfully!"),setTimeout(()=>xe(""),3e3)}catch(z){console.error("Error approving recording:",z),xe("Failed to approve recording")}},ar=async U=>{try{await Au(Ne(fe,"recordings",U),{approvalStatus:"rejected",rejectedAt:Su()}),y(x.filter(z=>z.id!==U)),xe("Recording rejected"),setTimeout(()=>xe(""),3e3)}catch(z){console.error("Error rejecting recording:",z),xe("Failed to reject recording")}},cr=async U=>{if(U.preventDefault(),!l||!v){xe("Please fill in all required fields");return}if(!ee){xe("Please upload a homework file");return}$e(!0),xe("");try{let z=null,ne=null,se=null,je=null,ce=null;if(ee){Qe(0);const De=await Lu({subjectId:l,fileName:ee.name,contentType:ee.type,uploadType:"homework"}),rn=await lt(ee,De,Qe),Ye=rn==null?void 0:rn.response;ne=(Ye==null?void 0:Ye.id)||(Ye==null?void 0:Ye.pid)||(Ye==null?void 0:Ye.file_id)||null,z=De.hidrivePath,se=ee.name,je=ee.type,ce=ee.size}const Te={subjectId:l,title:v,description:b,dueDate:_?new Date(_).toISOString():null,attachmentName:se,attachmentContentType:je,attachmentSize:ce,hidrivePath:z,hidriveFileId:ne,fileName:ee.name};sessionStorage.setItem("pendingHomework",JSON.stringify(Te)),E(""),I(""),H(""),Ke(null),Qe(0),n("/admin/homework-share-link",{state:{pendingHomework:Te}})}catch(z){console.error("Error adding homework:",z),xe("Failed to add homework")}finally{$e(!1)}};return r?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):e?c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Admin Panel"}),c.jsx("button",{onClick:async()=>{await Ze.signOut(),n("/login",{replace:!0})},className:"text-gray-600 hover:text-gray-900 underline text-sm",children:"Sign out"})]})}),c.jsxs("div",{className:"flex gap-2 mb-6 flex-wrap",children:[c.jsxs("button",{onClick:()=>w("recording"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${g==="recording"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[c.jsx(Ur,{className:"h-4 w-4"}),"Add Recording"]}),c.jsxs("button",{onClick:()=>w("homework"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${g==="homework"?"bg-green-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[c.jsx(qs,{className:"h-4 w-4"}),"Add Homework"]}),c.jsxs("button",{onClick:()=>w("approve"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition relative ${g==="approve"?"bg-purple-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[c.jsx(Cs,{className:"h-4 w-4"}),"Approve Recordings",x.length>0&&c.jsx("span",{className:"ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5",children:x.length})]})]}),bt&&c.jsx("div",{className:`mb-6 p-4 rounded-lg ${bt.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:bt}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Select Subject"}),c.jsx("select",{value:l,onChange:U=>h(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:i.map(U=>c.jsx("option",{value:U.id,children:U.name},U.id))})]}),g==="recording"&&c.jsxs("form",{onSubmit:ir,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Recording"}),c.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Recordings will be pending approval before students can view them."}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),c.jsx("input",{type:"text",value:A,onChange:U=>C(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"e.g., Algebra Basics - Lesson 1",required:!0})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Exam Board *"}),c.jsxs("select",{value:F,onChange:U=>K(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[c.jsx("option",{value:"",children:"Select Exam Board"}),c.jsx("option",{value:"AQA",children:"AQA"}),c.jsx("option",{value:"Edexcel",children:"Edexcel"})]})]}),!ct()&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Tier *"}),c.jsxs("select",{value:ie,onChange:U=>oe(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[c.jsx("option",{value:"",children:"Select Tier"}),c.jsx("option",{value:"Foundation",children:"Foundation"}),c.jsx("option",{value:"Higher",children:"Higher"})]})]}),ct()&&c.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:c.jsx("p",{className:"text-sm text-blue-800",children:"English subjects do not have Foundation/Higher tiers."})}),c.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700",children:"After upload, you will be taken to a new page to paste the HiDrive share link."}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Upload Video File"}),c.jsx("input",{type:"file",accept:"video/*",onChange:U=>{var ne;const z=((ne=U.target.files)==null?void 0:ne[0])||null;P(z),D(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),O>0&&O<100&&c.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",O,"%"]})]})]}),c.jsxs("button",{type:"submit",disabled:ue,className:"mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[c.jsx(Wc,{className:"h-4 w-4"}),ue?"Adding...":"Add Recording (Pending Approval)"]})]}),g==="approve"&&c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Approve Recordings"}),c.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Review and approve pending recordings. Only approved recordings will be visible to students."}),x.length===0?c.jsxs("div",{className:"text-center py-8",children:[c.jsx(Cs,{className:"h-12 w-12 text-green-500 mx-auto mb-4"}),c.jsx("p",{className:"text-gray-600",children:"No pending recordings to approve."})]}):c.jsx("div",{className:"space-y-4",children:x.map(U=>c.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:c.jsxs("div",{className:"flex items-start justify-between",children:[c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:U.title}),c.jsxs("div",{className:"space-y-1 text-sm text-gray-600",children:[c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Subject:"})," ",U.subjectName]}),c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",U.examBoard]}),U.tier&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Tier:"})," ",U.tier]}),U.date&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Date:"})," ",U.date.toDate?U.date.toDate().toLocaleDateString("en-GB"):"N/A"]})]}),c.jsxs("a",{href:U.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm mt-2",children:[c.jsx(Ur,{className:"h-4 w-4"}),"Preview Video"]})]}),c.jsxs("div",{className:"flex gap-2 ml-4",children:[c.jsxs("button",{onClick:()=>or(U.id),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2",children:[c.jsx(Cs,{className:"h-4 w-4"}),"Approve"]}),c.jsx("button",{onClick:()=>ar(U.id),className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition",children:"Reject"})]})]})},U.id))})]}),g==="homework"&&c.jsxs("form",{onSubmit:cr,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Homework"}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),c.jsx("input",{type:"text",value:v,onChange:U=>E(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",required:!0})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Description"}),c.jsx("textarea",{value:b,onChange:U=>I(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",rows:"3"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Due Date"}),c.jsx("input",{type:"datetime-local",value:_,onChange:U=>H(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Homework File *"}),c.jsx("input",{type:"file",required:!0,onChange:U=>{var ne;const z=((ne=U.target.files)==null?void 0:ne[0])||null;Ke(z),Qe(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"}),Sn>0&&Sn<100&&c.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",Sn,"%"]})]}),c.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700",children:"After upload, you will be taken to a new page to paste the HiDrive share link."})]}),c.jsxs("button",{type:"submit",disabled:ue,className:"mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[c.jsx(Wc,{className:"h-4 w-4"}),ue?"Adding...":"Add Homework"]})]})]})}):null}const xo="pendingRecording";function zE(){const n=Qn(),e=Zr(),[t,r]=k.useState(!0),[s,i]=k.useState(!1),[a,l]=k.useState(null),[h,f]=k.useState(""),[m,g]=k.useState(""),[w,A]=k.useState(""),[C,j]=k.useState(!1);k.useEffect(()=>{const O=gi(Ze,async D=>{if(!D){i(!1),r(!1),n("/login",{replace:!0});return}try{const F=await Pe(Ne(fe,"admins",D.uid)),K=F.exists()?null:await Pe(Ne(fe,"teachers",D.uid));F.exists()||K!=null&&K.exists()?i(!0):(i(!1),n("/login",{replace:!0}))}catch(F){console.error("Error verifying role:",F),i(!1),n("/login",{replace:!0})}finally{r(!1)}});return()=>O()},[n]),k.useEffect(()=>{var F;const O=(F=e.state)==null?void 0:F.pendingRecording;if(O){sessionStorage.setItem(xo,JSON.stringify(O)),l(O);return}const D=sessionStorage.getItem(xo);if(D)try{l(JSON.parse(D))}catch{l(null)}},[e.state]),k.useEffect(()=>{(async()=>{if(a!=null&&a.subjectId)try{const D=await Pe(Ne(fe,"subjects",a.subjectId));D.exists()&&f(D.data().name||"")}catch(D){console.error("Error loading subject:",D)}})()},[a]);const P=async O=>{if(O.preventDefault(),!a){A("No pending upload found. Go back and upload again.");return}if(!m){A("Paste the HiDrive share link to continue.");return}j(!0),A("");try{const D=await qE({subjectId:a.subjectId,title:a.title,examBoard:a.examBoard,tier:a.tier,videoUrl:m,hidrivePath:a.hidrivePath,hidriveFileId:a.hidriveFileId});sessionStorage.removeItem(xo);const F=(D==null?void 0:D.approvalStatus)==="approved"?"Recording added and approved!":"Recording added successfully! It will be visible to students after approval.";A(F)}catch(D){console.error("Error saving recording:",D),A("Failed to save recording")}finally{j(!1)}};return t?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):s?a?c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Paste HiDrive Share Link"}),c.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Your upload is complete. Create a share link in HiDrive and paste it below."})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Recording Details"}),c.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Title:"})," ",a.title]}),c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Subject:"})," ",h||a.subjectId]}),c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",a.examBoard]}),a.tier&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Tier:"})," ",a.tier]}),a.fileName&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"File:"})," ",a.fileName]})]})]}),c.jsxs("form",{onSubmit:P,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4",children:[c.jsx("p",{children:"1) Open HiDrive and find the uploaded file."}),c.jsx("p",{children:"2) Click Share -> Create link -> Copy link."}),c.jsx("p",{children:"3) Paste the link below and click Save Recording."})]}),c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HiDrive Share Link"}),c.jsx("input",{type:"url",value:m,onChange:O=>g(O.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://hidrive.ionos.com/lnk/...",required:!0}),w&&c.jsx("div",{className:`mt-4 p-3 rounded-md text-sm ${w.includes("successfully")||w.includes("approved")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:w}),c.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[c.jsx("button",{type:"submit",disabled:C,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:C?"Saving...":"Save Recording"}),c.jsx("button",{type:"button",onClick:()=>n("/admin"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Back to Admin"})]})]})]})}):c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center",children:[c.jsx("p",{className:"text-gray-700 mb-4",children:"No pending upload found. Please upload a file first."}),c.jsx("button",{onClick:()=>n("/admin",{replace:!0}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Back to Admin"})]})}):null}const Eo="pendingHomework";function GE(){const n=Qn(),e=Zr(),[t,r]=k.useState(!0),[s,i]=k.useState(!1),[a,l]=k.useState(null),[h,f]=k.useState(""),[m,g]=k.useState(""),[w,A]=k.useState(""),[C,j]=k.useState(!1);k.useEffect(()=>{const O=gi(Ze,async D=>{if(!D){i(!1),r(!1),n("/login",{replace:!0});return}try{const F=await Pe(Ne(fe,"admins",D.uid)),K=F.exists()?null:await Pe(Ne(fe,"teachers",D.uid));F.exists()||K!=null&&K.exists()?i(!0):(i(!1),n("/login",{replace:!0}))}catch(F){console.error("Error verifying role:",F),i(!1),n("/login",{replace:!0})}finally{r(!1)}});return()=>O()},[n]),k.useEffect(()=>{var F;const O=(F=e.state)==null?void 0:F.pendingHomework;if(O){sessionStorage.setItem(Eo,JSON.stringify(O)),l(O);return}const D=sessionStorage.getItem(Eo);if(D)try{l(JSON.parse(D))}catch{l(null)}},[e.state]),k.useEffect(()=>{(async()=>{if(a!=null&&a.subjectId)try{const D=await Pe(Ne(fe,"subjects",a.subjectId));D.exists()&&f(D.data().name||"")}catch(D){console.error("Error loading subject:",D)}})()},[a]);const P=async O=>{if(O.preventDefault(),!a){A("No pending upload found. Go back and upload again.");return}if(!m){A("Paste the HiDrive share link to continue.");return}j(!0),A("");try{await $E({subjectId:a.subjectId,title:a.title,description:a.description,dueDate:a.dueDate||null,attachmentUrl:m,attachmentName:a.attachmentName||a.fileName||null,attachmentContentType:a.attachmentContentType||null,attachmentSize:a.attachmentSize||null,hidrivePath:a.hidrivePath,hidriveFileId:a.hidriveFileId}),sessionStorage.removeItem(Eo),A("Homework added successfully!")}catch(D){console.error("Error saving homework:",D),A("Failed to save homework")}finally{j(!1)}};return t?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):s?a?c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Paste HiDrive Share Link"}),c.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Your upload is complete. Create a share link in HiDrive and paste it below."})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Homework Details"}),c.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Title:"})," ",a.title]}),c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Subject:"})," ",h||a.subjectId]}),a.dueDate&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Due:"})," ",new Date(a.dueDate).toLocaleString("en-GB")]}),a.fileName&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"File:"})," ",a.fileName]})]})]}),c.jsxs("form",{onSubmit:P,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4",children:[c.jsx("p",{children:"1) Open HiDrive and find the uploaded file."}),c.jsx("p",{children:"2) Click Share -> Create link -> Copy link."}),c.jsx("p",{children:"3) Paste the link below and click Save Homework."})]}),c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HiDrive Share Link"}),c.jsx("input",{type:"url",value:m,onChange:O=>g(O.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://hidrive.ionos.com/lnk/...",required:!0}),w&&c.jsx("div",{className:`mt-4 p-3 rounded-md text-sm ${w.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:w}),c.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[c.jsx("button",{type:"submit",disabled:C,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:C?"Saving...":"Save Homework"}),c.jsx("button",{type:"button",onClick:()=>n("/admin"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Back to Admin"})]})]})]})}):c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center",children:[c.jsx("p",{className:"text-gray-700 mb-4",children:"No pending upload found. Please upload a file first."}),c.jsx("button",{onClick:()=>n("/admin",{replace:!0}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Back to Admin"})]})}):null}function WE(){return k.useEffect(()=>{Hp()},[]),c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center px-4",children:c.jsxs("div",{className:"max-w-md w-full text-center",children:[c.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 md:p-10",children:[c.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:c.jsx(Cs,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})}),c.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Payment confirmed"}),c.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for your purchase. You will receive a confirmation email shortly with your receipt and next steps."}),c.jsxs(rt,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",children:[c.jsx(Lr,{className:"h-5 w-5","aria-hidden":"true"}),"Back to home"]})]}),c.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-gray-500",children:[c.jsx(Fr,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),c.jsx("span",{className:"text-sm",children:"MySchola"})]})]})})}function KE(){const{pathname:n}=Zr();return k.useEffect(()=>{qp()},[n]),null}function QE(){return c.jsxs(_m,{children:[c.jsx(KE,{}),c.jsxs(wm,{children:[c.jsx(xt,{path:"/",element:c.jsx(Wp,{})}),c.jsx(xt,{path:"/login",element:c.jsx(NE,{})}),c.jsx(xt,{path:"/payment-success",element:c.jsx(WE,{})}),c.jsx(xt,{path:"/admin",element:c.jsx(HE,{})}),c.jsx(xt,{path:"/admin/share-link",element:c.jsx(zE,{})}),c.jsx(xt,{path:"/admin/homework-share-link",element:c.jsx(GE,{})}),c.jsx(xt,{path:"/app/dashboard",element:c.jsx(bo,{children:c.jsx(jE,{})})}),c.jsx(xt,{path:"/app/subject/:subjectId/recordings",element:c.jsx(bo,{children:c.jsx(ME,{})})}),c.jsx(xt,{path:"/app/subject/:subjectId/homework",element:c.jsx(bo,{children:c.jsx(LE,{})})})]})]})}Em.createRoot(document.getElementById("root")).render(c.jsx(k.StrictMode,{children:c.jsx(QE,{})}));
