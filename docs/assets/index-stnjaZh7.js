import{r as hm,a as dm,b as F,L as ft,u as oi,c as ku,N as fm,d as Du,B as mm,R as pm,e as xn}from"./react-vendor-DnR8fNeS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var eo={exports:{}},Ir={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc;function gm(){if(Fc)return Ir;Fc=1;var n=hm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(c,h,f){var m,g={},w=null,S=null;f!==void 0&&(w=""+f),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(S=h.ref);for(m in h)r.call(h,m)&&!i.hasOwnProperty(m)&&(g[m]=h[m]);if(c&&c.defaultProps)for(m in h=c.defaultProps,h)g[m]===void 0&&(g[m]=h[m]);return{$$typeof:e,type:c,key:w,ref:S,props:g,_owner:s.current}}return Ir.Fragment=t,Ir.jsx=a,Ir.jsxs=a,Ir}var Uc;function ym(){return Uc||(Uc=1,eo.exports=gm()),eo.exports}var u=ym(),ws={},Bc;function _m(){if(Bc)return ws;Bc=1;var n=dm();return ws.createRoot=n.createRoot,ws.hydrateRoot=n.hydrateRoot,ws}var wm=_m();/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bm=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),qc=n=>{const e=bm(n);return e.charAt(0).toUpperCase()+e.slice(1)},Vu=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim(),Em=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Im={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=F.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:a,...c},h)=>F.createElement("svg",{ref:h,...Im,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:Vu("lucide",s),...!i&&!Em(c)&&{"aria-hidden":"true"},...c},[...a.map(([f,m])=>F.createElement(f,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=(n,e)=>{const t=F.forwardRef(({className:r,...s},i)=>F.createElement(Tm,{ref:i,iconNode:e,className:Vu(`lucide-${vm(qc(n))}`,`lucide-${n}`,r),...s}));return t.displayName=qc(n),t};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Wo=J("arrow-left",xm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],$c=J("arrow-right",Am);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],Rm=J("atom",Sm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Cm=J("award",Nm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],km=J("book-marked",Pm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ms=J("book-open",Dm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],jm=J("calculator",Vm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Mm=J("check",Om);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Fm=J("circle-alert",Lm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],As=J("circle-check-big",Um);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],qm=J("circle-question-mark",Bm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ju=J("clock",$m);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],zm=J("external-link",Hm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ls=J("file-text",Wm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Km=J("flask-conical",Gm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Ym=J("globe",Qm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Fs=J("graduation-cap",Jm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Zm=J("history",Xm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],tp=J("languages",ep);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Ou=J("lock",np);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],sp=J("log-out",rp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Mu=J("mail",ip);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ap=J("menu",op);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],lp=J("music",cp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],hp=J("palette",up);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],fp=J("phone",dp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],pp=J("play",mp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],yp=J("plus",gp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Hc=J("save",_p);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],vp=J("star",wp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Ep=J("target",bp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Tp=J("trending-up",Ip);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ap=J("user-check",xp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Rp=J("users",Sp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Or=J("video",Np);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Lu=J("x",Cp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],kp=J("zoom-in",Pp);function Dp(){const[n,e]=F.useState(!1),[t,r]=F.useState(null),s=a=>{r(t===a?null:a)},i=()=>{const a="https://calendly.com/admin-myschola/30min";if(window.Calendly)window.Calendly.initPopupWidget({url:a});else{const c=document.createElement("script");c.src="https://assets.calendly.com/assets/external/widget.js",c.async=!0,c.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:a})},document.body.appendChild(c),setTimeout(()=>{window.Calendly||window.open(a,"_blank","noopener,noreferrer")},1e3)}};return u.jsxs("div",{className:"min-h-screen bg-white",children:[u.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),u.jsxs("nav",{className:"fixed w-full top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"flex justify-between items-center h-16",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx(Fs,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),u.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),u.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[u.jsx("a",{href:"#home",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),u.jsx("a",{href:"#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),u.jsx("a",{href:"#subjects",className:"text-gray-700 hover:text-blue-600 transition",children:"Subjects"}),u.jsx("a",{href:"#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),u.jsx("a",{href:"#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"}),u.jsx(ft,{to:"/login",className:"text-gray-700 hover:text-blue-600 transition font-medium",children:"Log In"}),u.jsx("button",{onClick:i,className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a free consultation",children:"Book Free Consultation"})]}),u.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>e(!n),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,"aria-controls":"mobile-menu",children:n?u.jsx(Lu,{className:"h-6 w-6","aria-hidden":"true"}):u.jsx(ap,{className:"h-6 w-6","aria-hidden":"true"})})]})}),n&&u.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:u.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[u.jsx("a",{href:"#home",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),u.jsx("a",{href:"#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),u.jsx("a",{href:"#subjects",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Subjects"}),u.jsx("a",{href:"#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),u.jsx("a",{href:"#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),u.jsx(ft,{to:"/login",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50 font-medium",role:"menuitem",children:"Log In"}),u.jsx("button",{onClick:()=>{i(),e(!1)},className:"block w-full px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a free consultation",role:"menuitem",children:"Book Free Consultation"})]})})]}),u.jsxs("main",{id:"main-content",children:[u.jsx("section",{id:"home",className:"pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Hero section",children:u.jsx("div",{className:"max-w-7xl mx-auto",children:u.jsxs("div",{className:"text-center",children:[u.jsxs("h1",{className:"text-5xl md:text-6xl font-bold text-gray-900 mb-6",children:["MySchola: #1 GCSE Tutoring Platform for",u.jsx("span",{className:"text-blue-600",children:" Years 7-11"})]}),u.jsxs("p",{className:"text-xl text-gray-600 mb-4 max-w-3xl mx-auto",children:[u.jsx("strong",{children:"GCSE Maths, English & Science"})," via Zoom"]}),u.jsx("p",{className:"text-lg text-gray-600 mb-8 max-w-2xl mx-auto",children:"One-to-one personalised lessons with expert tutors. Your child only sees the teacher - no distractions, maximum focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons."}),u.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:u.jsxs("button",{onClick:i,className:"bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a free consultation",children:["Book Free Consultation",u.jsx($c,{className:"ml-2 h-5 w-5","aria-hidden":"true"})]})})]})})}),u.jsx("section",{id:"how-it-works",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"how-it-works-heading",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsx("h2",{id:"how-it-works-heading",className:"text-4xl font-bold text-center mb-12",children:"How Our Lessons Work"}),u.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[u.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[u.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:u.jsx(Ap,{className:"h-8 w-8 text-white"})}),u.jsx("h3",{className:"text-xl font-semibold mb-2",children:"1-to-1 Sessions"}),u.jsx("p",{className:"text-gray-600",children:"Personalised one-on-one attention. No group distractions - your child gets the tutor's full focus."})]}),u.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[u.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:u.jsx(kp,{className:"h-8 w-8 text-white"})}),u.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Via Zoom"}),u.jsx("p",{className:"text-gray-600",children:"Convenient online lessons from the comfort of your home. High-quality video and interactive whiteboard. Webcam and microphone are optional - we use Zoom chat to check engagement, and parents can monitor participation for privacy."})]}),u.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[u.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:u.jsx(Ou,{className:"h-8 w-8 text-white"})}),u.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Student Privacy"}),u.jsx("p",{className:"text-gray-600",children:"Your child only sees the teacher. Private, secure sessions designed for maximum learning focus. Webcam and mic are optional - we use Zoom chat for communication, and parents can check engagement for privacy reasons."})]})]})]})}),u.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"benefits-heading",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsx("h2",{id:"benefits-heading",className:"text-4xl font-bold text-center mb-4",children:"Benefits for Parents & Students"}),u.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Why thousands of families choose MySchola for GCSE success"}),u.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsxs("div",{className:"flex items-center mb-3",children:[u.jsx(Tp,{className:"h-6 w-6 text-green-500 mr-2","aria-hidden":"true"}),u.jsx("h3",{className:"text-xl font-semibold",children:"Grade Improvement"})]}),u.jsx("p",{className:"text-gray-600",children:"Students consistently improve by 2-3 grades with our proven teaching methods and personalised approach."})]}),u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsxs("div",{className:"flex items-center mb-3",children:[u.jsx(Cm,{className:"h-6 w-6 text-blue-500 mr-2","aria-hidden":"true"}),u.jsx("h3",{className:"text-xl font-semibold",children:"Confidence Building"})]}),u.jsx("p",{className:"text-gray-600",children:"Watch your child's confidence soar as they master difficult concepts and see their progress week by week."})]}),u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsxs("div",{className:"flex items-center mb-3",children:[u.jsx(Ep,{className:"h-6 w-6 text-red-500 mr-2","aria-hidden":"true"}),u.jsx("h3",{className:"text-xl font-semibold",children:"Exam Focus"})]}),u.jsx("p",{className:"text-gray-600",children:"Targeted exam preparation with past papers, exam techniques, and strategies tailored to GCSE requirements."})]}),u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsxs("div",{className:"flex items-center mb-3",children:[u.jsx(ju,{className:"h-6 w-6 text-purple-500 mr-2","aria-hidden":"true"}),u.jsx("h3",{className:"text-xl font-semibold",children:"Flexible Scheduling"})]}),u.jsx("p",{className:"text-gray-600",children:"Choose times that work around your family's schedule. Evening and weekend slots available."})]}),u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsxs("div",{className:"flex items-center mb-3",children:[u.jsx(Rp,{className:"h-6 w-6 text-orange-500 mr-2","aria-hidden":"true"}),u.jsx("h3",{className:"text-xl font-semibold",children:"Expert Tutors"})]}),u.jsx("p",{className:"text-gray-600",children:"Qualified UK teachers with DBS checks and proven track records of GCSE success."})]}),u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsxs("div",{className:"flex items-center mb-3",children:[u.jsx(Ms,{className:"h-6 w-6 text-indigo-500 mr-2","aria-hidden":"true"}),u.jsx("h3",{className:"text-xl font-semibold",children:"Personalised Curriculum"})]}),u.jsx("p",{className:"text-gray-600",children:"Lessons tailored to your child's learning style, pace, and specific areas that need improvement."})]})]})]})}),u.jsx("section",{id:"subjects",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"subjects-heading",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsx("h2",{id:"subjects-heading",className:"text-4xl font-bold text-center mb-4",children:"Subjects We Offer"}),u.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Comprehensive GCSE support for Years 7-11"}),u.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{name:"Maths",description:"GCSE Maths (Foundation & Higher)"},{name:"Combined Science",description:"Trilogy and Synergy pathways"},{name:"Triple Science",description:"Biology, Chemistry, and Physics"},{name:"English Language",description:"Reading, writing, and language skills"},{name:"English Literature",description:"Poetry, prose, and drama analysis"}].map(a=>u.jsx("div",{className:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600",children:u.jsxs("div",{className:"flex items-start mb-2",children:[u.jsx(Mm,{className:"h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0","aria-hidden":"true"}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold mb-1",children:a.name}),u.jsx("p",{className:"text-gray-600 text-sm",children:a.description})]})]})},a.name))})]})}),u.jsx("section",{id:"testimonials",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"testimonials-heading",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold text-center mb-4",children:"What Parents & Students Say"}),u.jsx("p",{className:"text-center text-gray-600 mb-12",children:"Real results from real families"}),u.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-12",children:[u.jsxs("div",{className:"bg-blue-600 text-white p-6 rounded-lg text-center",children:[u.jsx("div",{className:"text-4xl font-bold mb-2",children:"95%"}),u.jsx("div",{className:"text-blue-100",children:"Students improve grades"})]}),u.jsxs("div",{className:"bg-green-600 text-white p-6 rounded-lg text-center",children:[u.jsx("div",{className:"text-4xl font-bold mb-2",children:"2-3"}),u.jsx("div",{className:"text-green-100",children:"Grade improvement average"})]}),u.jsxs("div",{className:"bg-purple-600 text-white p-6 rounded-lg text-center",children:[u.jsx("div",{className:"text-4xl font-bold mb-2",children:"500+"}),u.jsx("div",{className:"text-purple-100",children:"Successful students"})]})]}),u.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{name:"Sarah M., Parent",text:"My daughter went from a Grade 5 to Grade 8 in Maths in just one term! The 1-to-1 Zoom sessions were perfect - she felt comfortable asking questions without other students around.",rating:5,result:"Maths: Grade 5 → Grade 8"},{name:"James T., Student",text:"I was really struggling with English Literature, but my tutor made it click. The exam techniques I learned helped me get a Grade 7. The Zoom sessions were so convenient!",rating:5,result:"English Lit: Grade 4 → Grade 7"},{name:"Emma L., Parent",text:"The confidence my son gained was incredible. He went from dreading Science to loving it. His Chemistry grade improved from 5 to 8. Worth every penny!",rating:5,result:"Chemistry: Grade 5 → Grade 8"},{name:"Michael R., Student",text:"My tutor was amazing! She explained everything so clearly and helped me with past papers. I finally understood how to approach exam questions properly.",rating:5,result:"Physics: Grade 6 → Grade 9"},{name:"Lisa K., Parent",text:"As a working parent, the flexible scheduling was a lifesaver. My daughter could do evening sessions that fit around school and activities. Highly recommend!",rating:5,result:"Maths: Grade 6 → Grade 8"},{name:"David P., Parent",text:"The privacy of the sessions meant my son felt comfortable making mistakes and asking for help. His confidence has grown so much, and his grades show it!",rating:5,result:"English: Grade 5 → Grade 7"}].map((a,c)=>u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsx("div",{className:"flex mb-4",children:[...Array(a.rating)].map((h,f)=>u.jsx(vp,{className:"h-5 w-5 text-yellow-400 fill-current","aria-hidden":"true"},f))}),u.jsxs("p",{className:"text-gray-600 mb-4 italic",children:['"',a.text,'"']}),u.jsxs("div",{className:"border-t pt-4",children:[u.jsxs("p",{className:"font-semibold text-gray-900",children:["— ",a.name]}),u.jsx("p",{className:"text-sm text-blue-600 font-medium mt-1",children:a.result})]})]},c))})]})}),u.jsx("section",{id:"book-call",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600","aria-labelledby":"book-call-heading",children:u.jsxs("div",{className:"max-w-4xl mx-auto text-center text-white",children:[u.jsx("h2",{id:"book-call-heading",className:"text-4xl font-bold mb-6",children:"Ready to Start Your Child's GCSE Success Journey?"}),u.jsx("p",{className:"text-xl text-blue-100 mb-8",children:"Book a free consultation to discuss your child's needs and see how we can help them achieve their goals."}),u.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:u.jsxs("button",{onClick:i,className:"bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a free consultation",children:["Book Free Consultation",u.jsx($c,{className:"ml-2 h-5 w-5","aria-hidden":"true"})]})}),u.jsx("p",{className:"text-blue-100 text-sm mt-6",children:"No credit card required • Free 30-minute consultation"})]})}),u.jsx("section",{id:"faq",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"faq-heading",children:u.jsxs("div",{className:"max-w-4xl mx-auto",children:[u.jsx("h2",{id:"faq-heading",className:"text-4xl font-bold text-center mb-12",children:"Frequently Asked Questions"}),u.jsx("div",{className:"space-y-4",children:[{q:"How do the Zoom lessons work?",a:"Each lesson is conducted one-to-one via Zoom. Your child will see only the teacher, ensuring privacy and focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We use interactive whiteboards and screen sharing to make lessons engaging and effective. All sessions are recorded for your child to review later."},{q:"What equipment do we need?",a:"You just need a computer, tablet, or laptop with a stable internet connection. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We recommend using a desktop or laptop for the best experience with the interactive whiteboard."},{q:"How long are the sessions?",a:"Standard sessions are 60 minutes, but we also offer 45-minute and 90-minute options depending on your child's needs and attention span. You can discuss the best duration during your free consultation."},{q:"Can I choose the tutor?",a:"Yes! During your consultation, we'll discuss your child's learning style and match them with the best tutor. You can also request specific tutors based on availability."},{q:"What if my child misses a session?",a:"We offer flexible rescheduling with 24 hours notice. Missed sessions can be rescheduled to another time that works for you. We understand that life happens!"},{q:"Do you provide homework and practice materials?",a:"Absolutely! Each tutor provides tailored homework assignments, practice papers, and additional resources to reinforce learning between sessions. All materials are included in the lesson price."},{q:"How quickly will we see results?",a:"Most students see improvement within 4-6 weeks of regular sessions. However, every child is different. We track progress regularly and adjust our approach to ensure maximum effectiveness."},{q:"What age groups do you teach?",a:"We specialize in Years 7-11, preparing students for GCSEs. This includes both Foundation and Higher tier courses across all major GCSE subjects."}].map((a,c)=>u.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[u.jsxs("button",{className:"w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",onClick:()=>s(c),"aria-expanded":t===c,"aria-controls":`faq-answer-${c}`,id:`faq-question-${c}`,children:[u.jsxs("span",{className:"font-semibold text-gray-900 flex items-center",children:[u.jsx(qm,{className:"h-5 w-5 text-blue-600 mr-2","aria-hidden":"true"}),a.q]}),u.jsx("span",{className:"text-blue-600","aria-hidden":"true","aria-label":t===c?"Collapse answer":"Expand answer",children:t===c?"−":"+"})]}),t===c&&u.jsx("div",{id:`faq-answer-${c}`,className:"px-6 pb-4 text-gray-600",role:"region","aria-labelledby":`faq-question-${c}`,children:a.a})]},c))})]})}),u.jsx("section",{id:"contact",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"contact-heading",children:u.jsxs("div",{className:"max-w-4xl mx-auto",children:[u.jsx("h2",{id:"contact-heading",className:"text-4xl font-bold text-center mb-12",children:"Get in Touch"}),u.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsx(Mu,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),u.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Email Us"}),u.jsx("a",{href:"mailto:support@myschola.uk",className:"text-gray-600 hover:text-blue-600 transition",children:"support@myschola.uk"})]}),u.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[u.jsx(fp,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),u.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Call Us"}),u.jsx("p",{className:"text-gray-600",children:"020 1234 5678"}),u.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Mon-Fri 9am-6pm"})]})]})]})}),u.jsx("section",{id:"privacy-policy",className:"py-20 px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"max-w-4xl mx-auto",children:[u.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Privacy Policy"}),u.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Information We Collect"}),u.jsx("p",{children:"We collect information that you provide directly to us, including your name, email address, phone number, and information about your child's educational needs. We also collect information automatically when you use our services, such as session recordings and progress data."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. How We Use Your Information"}),u.jsx("p",{children:"We use the information we collect to provide, maintain, and improve our tutoring services, process your bookings, communicate with you, and ensure the safety and security of our platform."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Data Security"}),u.jsx("p",{children:"We implement appropriate technical and organizational measures to protect your personal information. All tutors are DBS checked, and all Zoom sessions are encrypted and secure."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Session Recordings"}),u.jsx("p",{children:"Lessons may be recorded for educational purposes and quality assurance. Recordings are stored securely and are accessible only to authorized personnel and the student's account."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Your Rights"}),u.jsx("p",{children:"You have the right to access, update, or delete your personal information at any time. You can also request a copy of your data or withdraw consent for data processing."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Children's Privacy"}),u.jsx("p",{children:"We take children's privacy seriously. We only collect information necessary to provide our services, and all data handling complies with UK GDPR and Children's Code requirements."})]}),u.jsx("div",{children:u.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})}),u.jsx("section",{id:"terms-of-service",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50",children:u.jsxs("div",{className:"max-w-4xl mx-auto",children:[u.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Terms of Service"}),u.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Service Agreement"}),u.jsx("p",{children:"By booking a lesson or consultation with MySchola, you agree to these terms of service. Our services include one-to-one online tutoring sessions delivered via Zoom for students in Years 7-11."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. Booking and Cancellation"}),u.jsx("p",{children:"Lessons must be booked in advance. Cancellations require 24 hours notice for a full refund or reschedule. Cancellations with less than 24 hours notice may be charged at 50% of the lesson fee. No-shows will be charged the full lesson fee."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Payment Terms"}),u.jsx("p",{children:"Payment is required in advance for lesson packages. We accept payment via Stripe. Refunds for unused lessons in a package will be calculated on a pro-rata basis, minus any applicable fees."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Tutor Matching"}),u.jsx("p",{children:"We strive to match students with the most suitable tutor. However, if you're not satisfied after the first session, we offer a free replacement tutor or full refund."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Student Conduct"}),u.jsx("p",{children:"Students are expected to attend lessons punctually, be respectful to tutors, and engage actively in learning. Any inappropriate behavior may result in session termination without refund."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Technical Requirements"}),u.jsx("p",{children:"You are responsible for ensuring you have adequate internet connection and equipment for Zoom sessions. Note that webcam and microphone are optional - not needed. We use Zoom chat to check engagement, and parents can monitor participation for privacy reasons. We are not liable for technical issues on your end, though we'll do our best to accommodate."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"7. Guarantees"}),u.jsx("p",{children:"While we work hard to help students achieve their goals, we cannot guarantee specific grade improvements as results depend on multiple factors including student effort, attendance, and engagement."})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"8. Intellectual Property"}),u.jsx("p",{children:"All teaching materials, resources, and session recordings are the intellectual property of MySchola and are for the personal use of the enrolled student only."})]}),u.jsx("div",{children:u.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})})]}),u.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:u.jsxs("div",{className:"max-w-7xl mx-auto",children:[u.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center mb-4",children:[u.jsx(Fs,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),u.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),u.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 7-11 via Zoom."})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),u.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[u.jsx("li",{children:u.jsx("a",{href:"#home",className:"hover:text-white transition",children:"Home"})}),u.jsx("li",{children:u.jsx("a",{href:"#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),u.jsx("li",{children:u.jsx("a",{href:"#subjects",className:"hover:text-white transition",children:"Subjects"})}),u.jsx("li",{children:u.jsx("a",{href:"#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),u.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[u.jsx("li",{children:u.jsx("a",{href:"#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),u.jsx("li",{children:u.jsx("a",{href:"#terms-of-service",className:"hover:text-white transition",children:"Terms of Service"})}),u.jsx("li",{children:u.jsx("a",{href:"#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),u.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[u.jsx("li",{children:u.jsx("a",{href:"mailto:support@myschola.co.uk",className:"hover:text-white transition",children:"support@myschola.co.uk"})}),u.jsx("li",{children:u.jsx("a",{href:"tel:02012345678",className:"hover:text-white transition",children:"020 1234 5678"})}),u.jsx("li",{children:u.jsx("button",{onClick:i,className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),u.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:u.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 7-11."]})})]})})]})}const Vp=()=>{};var zc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},jp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],h=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Uu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,m=i>>2,g=(i&3)<<4|c>>4;let w=(c&15)<<2|f>>6,S=f&63;h||(S=64,a||(w=64)),r.push(t[m],t[g],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):jp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||f==null||g==null)throw new Op;const w=i<<2|c>>4;if(r.push(w),f!==64){const S=c<<4&240|f>>2;if(r.push(S),g!==64){const C=f<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Op extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mp=function(n){const e=Fu(n);return Uu.encodeByteArray(e,!0)},Us=function(n){return Mp(n).replace(/\./g,"")},Bu=function(n){try{return Uu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fp=()=>Lp().__FIREBASE_DEFAULTS__,Up=()=>{if(typeof process>"u"||typeof zc>"u")return;const n=zc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bu(n[1]);return e&&JSON.parse(e)},ai=()=>{try{return Vp()||Fp()||Up()||Bp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qu=n=>{var e,t;return(t=(e=ai())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},qp=n=>{const e=qu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},$u=()=>{var n;return(n=ai())==null?void 0:n.config},Hu=n=>{var e;return(e=ai())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Wn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zu(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Hp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Us(JSON.stringify(t)),Us(JSON.stringify(a)),""].join(".")}const Cr={};function zp(){const n={prod:[],emulator:[]};for(const e of Object.keys(Cr))Cr[e]?n.emulator.push(e):n.prod.push(e);return n}function Wp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Wc=!1;function Wu(n,e){if(typeof window>"u"||typeof document>"u"||!Wn(window.location.host)||Cr[n]===e||Cr[n]||Wc)return;Cr[n]=e;function t(w){return`__firebase__banner__${w}`}const r="__firebase__banner",i=zp().prod.length>0;function a(){const w=document.getElementById(r);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,S){w.setAttribute("width","24"),w.setAttribute("id",S),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function f(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Wc=!0,a()},w}function m(w,S){w.setAttribute("id",S),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=Wp(r),S=t("text"),C=document.getElementById(S)||document.createElement("span"),k=t("learnmore"),P=document.getElementById(k)||document.createElement("a"),$=t("preprendIcon"),B=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const O=w.element;c(O),m(P,k);const H=f();h(B,$),O.append(B,C,P,H),document.body.appendChild(O)}i?(C.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Kp(){var e;const n=(e=ai())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Yp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jp(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Xp(){return!Kp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ku(){try{return typeof indexedDB=="object"}catch{return!1}}function Qu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function Zp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="FirebaseError";class Je extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=eg,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fn.prototype.create)}}class fn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?tg(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Je(s,c,r)}}function tg(n,e){return n.replace(ng,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ng=/\{\$([^}]+)}/g;function rg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ut(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Gc(i)&&Gc(a)){if(!Ut(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Gc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Tr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function sg(n,e){const t=new ig(n,e);return t.subscribe.bind(t)}class ig{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");og(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=to),s.error===void 0&&(s.error=to),s.complete===void 0&&(s.complete=to);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function og(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function to(){}/**
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
 */const ag=1e3,cg=2,lg=14400*1e3,ug=.5;function Kc(n,e=ag,t=cg){const r=e*Math.pow(t,n),s=Math.round(ug*r*(Math.random()-.5)*2);return Math.min(lg,r+s)}/**
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
 */function me(n){return n&&n._delegate?n._delegate:n}class Ke{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rn="[DEFAULT]";/**
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
 */class hg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new $p;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fg(e))try{this.getOrInitializeService({instanceIdentifier:rn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rn){return this.instances.has(e)}getOptions(e=rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rn){return this.component?this.component.multipleInstances?e:rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dg(n){return n===rn?void 0:n}function fg(n){return n.instantiationMode==="EAGER"}/**
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
 */class mg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const pg={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},gg=X.INFO,yg={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},_g=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=yg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ci{constructor(e){this.name=e,this._logLevel=gg,this._logHandler=_g,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const wg=(n,e)=>e.some(t=>n instanceof t);let Qc,Yc;function vg(){return Qc||(Qc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bg(){return Yc||(Yc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yu=new WeakMap,_o=new WeakMap,Ju=new WeakMap,no=new WeakMap,Go=new WeakMap;function Eg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(jt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Yu.set(t,n)}).catch(()=>{}),Go.set(e,n),e}function Ig(n){if(_o.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});_o.set(n,e)}let wo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return _o.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ju.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return jt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Tg(n){wo=n(wo)}function xg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ro(this),e,...t);return Ju.set(r,e.sort?e.sort():[e]),jt(r)}:bg().includes(n)?function(...e){return n.apply(ro(this),e),jt(Yu.get(this))}:function(...e){return jt(n.apply(ro(this),e))}}function Ag(n){return typeof n=="function"?xg(n):(n instanceof IDBTransaction&&Ig(n),wg(n,vg())?new Proxy(n,wo):n)}function jt(n){if(n instanceof IDBRequest)return Eg(n);if(no.has(n))return no.get(n);const e=Ag(n);return e!==n&&(no.set(n,e),Go.set(e,n)),e}const ro=n=>Go.get(n);function Xu(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=jt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(jt(a.result),h.oldVersion,h.newVersion,jt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{i&&h.addEventListener("close",()=>i()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Sg=["get","getKey","getAll","getAllKeys","count"],Rg=["put","add","delete","clear"],so=new Map;function Jc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(so.get(e))return so.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Rg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Sg.includes(t)))return;const i=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),s&&h.done]))[0]};return so.set(e,i),i}Tg(n=>({...n,get:(e,t,r)=>Jc(e,t)||n.get(e,t,r),has:(e,t)=>!!Jc(e,t)||n.has(e,t)}));/**
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
 */class Ng{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Cg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Cg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vo="@firebase/app",Xc="0.14.6";/**
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
 */const pt=new ci("@firebase/app"),Pg="@firebase/app-compat",kg="@firebase/analytics-compat",Dg="@firebase/analytics",Vg="@firebase/app-check-compat",jg="@firebase/app-check",Og="@firebase/auth",Mg="@firebase/auth-compat",Lg="@firebase/database",Fg="@firebase/data-connect",Ug="@firebase/database-compat",Bg="@firebase/functions",qg="@firebase/functions-compat",$g="@firebase/installations",Hg="@firebase/installations-compat",zg="@firebase/messaging",Wg="@firebase/messaging-compat",Gg="@firebase/performance",Kg="@firebase/performance-compat",Qg="@firebase/remote-config",Yg="@firebase/remote-config-compat",Jg="@firebase/storage",Xg="@firebase/storage-compat",Zg="@firebase/firestore",ey="@firebase/ai",ty="@firebase/firestore-compat",ny="firebase",ry="12.6.0";/**
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
 */const bo="[DEFAULT]",sy={[vo]:"fire-core",[Pg]:"fire-core-compat",[Dg]:"fire-analytics",[kg]:"fire-analytics-compat",[jg]:"fire-app-check",[Vg]:"fire-app-check-compat",[Og]:"fire-auth",[Mg]:"fire-auth-compat",[Lg]:"fire-rtdb",[Fg]:"fire-data-connect",[Ug]:"fire-rtdb-compat",[Bg]:"fire-fn",[qg]:"fire-fn-compat",[$g]:"fire-iid",[Hg]:"fire-iid-compat",[zg]:"fire-fcm",[Wg]:"fire-fcm-compat",[Gg]:"fire-perf",[Kg]:"fire-perf-compat",[Qg]:"fire-rc",[Yg]:"fire-rc-compat",[Jg]:"fire-gcs",[Xg]:"fire-gcs-compat",[Zg]:"fire-fst",[ty]:"fire-fst-compat",[ey]:"fire-vertex","fire-js":"fire-js",[ny]:"fire-js-all"};/**
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
 */const Bs=new Map,iy=new Map,Eo=new Map;function Zc(n,e){try{n.container.addComponent(e)}catch(t){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function at(n){const e=n.name;if(Eo.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;Eo.set(e,n);for(const t of Bs.values())Zc(t,n);for(const t of iy.values())Zc(t,n);return!0}function mn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ze(n){return n==null?!1:n.settings!==void 0}/**
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
 */const oy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ot=new fn("app","Firebase",oy);/**
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
 */class ay{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const Gn=ry;function Zu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:bo,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ot.create("bad-app-name",{appName:String(s)});if(t||(t=$u()),!t)throw Ot.create("no-options");const i=Bs.get(s);if(i){if(Ut(t,i.options)&&Ut(r,i.config))return i;throw Ot.create("duplicate-app",{appName:s})}const a=new mg(s);for(const h of Eo.values())a.addComponent(h);const c=new ay(t,r,a);return Bs.set(s,c),c}function Ko(n=bo){const e=Bs.get(n);if(!e&&n===bo&&$u())return Zu();if(!e)throw Ot.create("no-app",{appName:n});return e}function $e(n,e,t){let r=sy[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(a.join(" "));return}at(new Ke(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const cy="firebase-heartbeat-database",ly=1,Mr="firebase-heartbeat-store";let io=null;function eh(){return io||(io=Xu(cy,ly,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Mr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ot.create("idb-open",{originalErrorMessage:n.message})})),io}async function uy(n){try{const t=(await eh()).transaction(Mr),r=await t.objectStore(Mr).get(th(n));return await t.done,r}catch(e){if(e instanceof Je)pt.warn(e.message);else{const t=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pt.warn(t.message)}}}async function el(n,e){try{const r=(await eh()).transaction(Mr,"readwrite");await r.objectStore(Mr).put(e,th(n)),await r.done}catch(t){if(t instanceof Je)pt.warn(t.message);else{const r=Ot.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});pt.warn(r.message)}}}function th(n){return`${n.name}!${n.options.appId}`}/**
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
 */const hy=1024,dy=30;class fy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new py(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>dy){const a=gy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tl(),{heartbeatsToSend:r,unsentEntries:s}=my(this._heartbeatsCache.heartbeats),i=Us(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return pt.warn(t),""}}}function tl(){return new Date().toISOString().substring(0,10)}function my(n,e=hy){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),nl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),nl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class py{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ku()?Qu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await uy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return el(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return el(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function nl(n){return Us(JSON.stringify({version:2,heartbeats:n})).length}function gy(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function yy(n){at(new Ke("platform-logger",e=>new Ng(e),"PRIVATE")),at(new Ke("heartbeat",e=>new fy(e),"PRIVATE")),$e(vo,Xc,n),$e(vo,Xc,"esm2020"),$e("fire-js","")}yy("");var _y="firebase",wy="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e(_y,wy,"app");function nh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vy=nh,rh=new fn("auth","Firebase",nh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new ci("@firebase/auth");function by(n,...e){qs.logLevel<=X.WARN&&qs.warn(`Auth (${Gn}): ${n}`,...e)}function Ss(n,...e){qs.logLevel<=X.ERROR&&qs.error(`Auth (${Gn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n,...e){throw Qo(n,...e)}function tt(n,...e){return Qo(n,...e)}function sh(n,e,t){const r={...vy(),[e]:t};return new fn("auth","Firebase",r).create(e,{appName:n.name})}function Mt(n){return sh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return rh.create(n,...e)}function z(n,e,...t){if(!n)throw Qo(e,...t)}function ht(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ss(e),new Error(e)}function gt(n,e){n||ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Ey(){return rl()==="http:"||rl()==="https:"}function rl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ey()||Gu()||"connection"in navigator)?navigator.onLine:!0}function Ty(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t){this.shortDelay=e,this.longDelay=t,gt(t>e,"Short delay should be less than long delay!"),this.isMobile=Gp()||Yp()}get(){return Iy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n,e){gt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Sy=new Jr(3e4,6e4);function pn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Gt(n,e,t,r,s={}){return oh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Yr({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:h,...i};return Qp()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&Wn(n.emulatorConfig.host)&&(f.credentials="include"),ih.fetch()(await ah(n,n.config.apiHost,t,c),f)})}async function oh(n,e,t){n._canInitEmulator=!1;const r={...xy,...e};try{const s=new Ny(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw vs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[h,f]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw vs(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw vs(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw vs(n,"user-disabled",a);const m=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw sh(n,m,f);Qe(n,m)}}catch(s){if(s instanceof Je)throw s;Qe(n,"network-request-failed",{message:String(s)})}}async function li(n,e,t,r,s={}){const i=await Gt(n,e,t,r,s);return"mfaPendingCredential"in i&&Qe(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ah(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Yo(n.config,s):`${n.config.apiScheme}://${s}`;return Ay.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function Ry(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ny{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),Sy.get())})}}function vs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=tt(n,e,r);return s.customData._tokenResponse=t,s}function sl(n){return n!==void 0&&n.enterprise!==void 0}class Cy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ry(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Py(n,e){return Gt(n,"GET","/v2/recaptchaConfig",pn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ky(n,e){return Gt(n,"POST","/v1/accounts:delete",e)}async function $s(n,e){return Gt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dy(n,e=!1){const t=me(n),r=await t.getIdToken(e),s=Jo(r);z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Pr(oo(s.auth_time)),issuedAtTime:Pr(oo(s.iat)),expirationTime:Pr(oo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function oo(n){return Number(n)*1e3}function Jo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ss("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bu(t);return s?JSON.parse(s):(Ss("Failed to decode base64 JWT payload"),null)}catch(s){return Ss("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function il(n){const e=Jo(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Je&&Vy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Vy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pr(this.lastLoginAt),this.creationTime=Pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hs(n){var g;const e=n.auth,t=await n.getIdToken(),r=await Lr(n,$s(e,{idToken:t}));z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?ch(s.providerUserInfo):[],a=My(n.providerData,i),c=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),f=c?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new To(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function Oy(n){const e=me(n);await Hs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function My(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ch(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ly(n,e){const t=await oh(n,{},async()=>{const r=Yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await ah(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:c,body:r};return n.emulatorConfig&&Wn(n.emulatorConfig.host)&&(h.credentials="include"),ih.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Fy(n,e){return Gt(n,"POST","/v2/accounts:revokeToken",pn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):il(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=il(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ly(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new kn;return r&&(z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kn,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class We{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new jy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new To(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Lr(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Dy(this,e)}reload(){return Oy(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new We({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Hs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ze(this.auth.app))return Promise.reject(Mt(this.auth));const e=await this.getIdToken();return await Lr(this,ky(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,h=t._redirectEventId??void 0,f=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:g,emailVerified:w,isAnonymous:S,providerData:C,stsTokenManager:k}=t;z(g&&k,e,"internal-error");const P=kn.fromJSON(this.name,k);z(typeof g=="string",e,"internal-error"),Rt(r,e.name),Rt(s,e.name),z(typeof w=="boolean",e,"internal-error"),z(typeof S=="boolean",e,"internal-error"),Rt(i,e.name),Rt(a,e.name),Rt(c,e.name),Rt(h,e.name),Rt(f,e.name),Rt(m,e.name);const $=new We({uid:g,auth:e,email:s,emailVerified:w,displayName:r,isAnonymous:S,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:P,createdAt:f,lastLoginAt:m});return C&&Array.isArray(C)&&($.providerData=C.map(B=>({...B}))),h&&($._redirectEventId=h),$}static async _fromIdTokenResponse(e,t,r=!1){const s=new kn;s.updateFromServerResponse(t);const i=new We({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ch(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new kn;c.updateFromIdToken(r);const h=new We({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new To(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new Map;function dt(n){gt(n instanceof Function,"Expected a class definition");let e=ol.get(n);return e?(gt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ol.set(n,e),e)}/**
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
 */class lh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}lh.type="NONE";const al=lh;/**
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
 */function Rs(n,e,t){return`firebase:${n}:${e}:${t}`}class Dn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Rs(this.userKey,s.apiKey,i),this.fullPersistenceKey=Rs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await $s(this.auth,{idToken:e}).catch(()=>{});return t?We._fromGetAccountInfoResponse(this.auth,t,e):null}return We._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Dn(dt(al),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||dt(al);const a=Rs(r,e.config.apiKey,e.name);let c=null;for(const f of t)try{const m=await f._get(a);if(m){let g;if(typeof m=="string"){const w=await $s(e,{idToken:m}).catch(()=>{});if(!w)break;g=await We._fromGetAccountInfoResponse(e,w,m)}else g=We._fromJSON(e,m);f!==i&&(c=g),i=f;break}}catch{}const h=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!h.length?new Dn(i,e,r):(i=h[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==i)try{await f._remove(a)}catch{}})),new Dn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ph(e))return"Blackberry";if(gh(e))return"Webos";if(hh(e))return"Safari";if((e.includes("chrome/")||dh(e))&&!e.includes("edge/"))return"Chrome";if(mh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uh(n=Pe()){return/firefox\//i.test(n)}function hh(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dh(n=Pe()){return/crios\//i.test(n)}function fh(n=Pe()){return/iemobile/i.test(n)}function mh(n=Pe()){return/android/i.test(n)}function ph(n=Pe()){return/blackberry/i.test(n)}function gh(n=Pe()){return/webos/i.test(n)}function Xo(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Uy(n=Pe()){var e;return Xo(n)&&!!((e=window.navigator)!=null&&e.standalone)}function By(){return Jp()&&document.documentMode===10}function yh(n=Pe()){return Xo(n)||mh(n)||gh(n)||ph(n)||/windows phone/i.test(n)||fh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(n,e=[]){let t;switch(n){case"Browser":t=cl(Pe());break;case"Worker":t=`${cl(Pe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gn}/${r}`}/**
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
 */class qy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const h=e(i);a(h)}catch(h){c(h)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $y(n,e={}){return Gt(n,"GET","/v2/passwordPolicy",pn(n,e))}/**
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
 */const Hy=6;class zy{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Hy,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ll(this),this.idTokenSubscription=new ll(this),this.beforeStateQueue=new qy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Dn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $s(this,{idToken:e}),r=await We._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(ze(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===c)&&(h!=null&&h.user)&&(r=h.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ty()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ze(this.app))return Promise.reject(Mt(this));const t=e?me(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ze(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ze(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $y(this),t=new zy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Fy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await Dn.create(this,[dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,s);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_h(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(ze(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&by(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Kn(n){return me(n)}class ll{constructor(e){this.auth=e,this.observer=null,this.addObserver=sg(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Gy(n){ui=n}function wh(n){return ui.loadJS(n)}function Ky(){return ui.recaptchaEnterpriseScript}function Qy(){return ui.gapiScript}function Yy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Jy{constructor(){this.enterprise=new Xy}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Xy{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Zy="recaptcha-enterprise",vh="NO_RECAPTCHA";class e_{constructor(e){this.type=Zy,this.auth=Kn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Py(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const f=new Cy(h);return i.tenantId==null?i._agentRecaptchaConfig=f:i._tenantRecaptchaConfigs[i.tenantId]=f,a(f.siteKey)}}).catch(h=>{c(h)})})}function s(i,a,c){const h=window.grecaptcha;sl(h)?h.enterprise.ready(()=>{h.enterprise.execute(i,{action:e}).then(f=>{a(f)}).catch(()=>{a(vh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Jy().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&sl(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Ky();h.length!==0&&(h+=c),wh(h).then(()=>{s(c,i,a)}).catch(f=>{a(f)})}}).catch(c=>{a(c)})})}}async function ul(n,e,t,r=!1,s=!1){const i=new e_(n);let a;if(s)a=vh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const h=c.phoneEnrollmentInfo.phoneNumber,f=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:f,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const h=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function hl(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await ul(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await ul(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(n,e){const t=mn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ut(i,e??{}))return s;Qe(s,"already-initialized")}return t.initialize({options:e})}function n_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(dt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function r_(n,e,t){const r=Kn(n);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=bh(e),{host:a,port:c}=s_(e),h=c===null?"":`:${c}`,f={url:`${i}//${a}${h}/`},m=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(Ut(f,r.config.emulator)&&Ut(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,Wn(a)?(zu(`${i}//${a}${h}`),Wu("Auth",!0)):i_()}function bh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function s_(n){const e=bh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:dl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:dl(a)}}}function dl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function i_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,t){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}async function o_(n,e){return Gt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(n,e){return li(n,"POST","/v1/accounts:signInWithPassword",pn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(n,e){return li(n,"POST","/v1/accounts:signInWithEmailLink",pn(n,e))}async function l_(n,e){return li(n,"POST","/v1/accounts:signInWithEmailLink",pn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Zo{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Fr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Fr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hl(e,t,"signInWithPassword",a_);case"emailLink":return c_(e,{email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hl(e,r,"signUpPassword",o_);case"emailLink":return l_(e,{idToken:t,email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(n,e){return li(n,"POST","/v1/accounts:signInWithIdp",pn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="http://localhost";class cn extends Zo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new cn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Vn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Vn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vn(e,t)}buildRequest(){const e={requestUri:u_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Yr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function d_(n){const e=Tr(xr(n)).link,t=e?Tr(xr(e)).deep_link_id:null,r=Tr(xr(n)).deep_link_id;return(r?Tr(xr(r)).link:null)||r||t||e||n}class ea{constructor(e){const t=Tr(xr(e)),r=t.apiKey??null,s=t.oobCode??null,i=h_(t.mode??null);z(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=d_(e);try{return new ea(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.providerId=Qn.PROVIDER_ID}static credential(e,t){return Fr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ea.parseLink(t);return z(r,"argument-error"),Fr._fromEmailAndCode(e,r.code,r.tenantId)}}Qn.PROVIDER_ID="password";Qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xr extends Eh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Xr{constructor(){super("facebook.com")}static credential(e){return cn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Xr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ct.credential(t,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Xr{constructor(){super("github.com")}static credential(e){return cn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Xr{constructor(){super("twitter.com")}static credential(e,t){return cn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return kt.credential(t,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await We._fromIdTokenResponse(e,r,s),a=fl(r);return new Fn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=fl(r);return new Fn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function fl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends Je{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,zs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new zs(e,t,r,s)}}function Ih(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zs._fromErrorAndOperation(n,i,e,r):i})}async function f_(n,e,t=!1){const r=await Lr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fn._forOperation(n,"link",r)}/**
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
 */async function m_(n,e,t=!1){const{auth:r}=n;if(ze(r.app))return Promise.reject(Mt(r));const s="reauthenticate";try{const i=await Lr(n,Ih(r,s,e,n),t);z(i.idToken,r,"internal-error");const a=Jo(i.idToken);z(a,r,"internal-error");const{sub:c}=a;return z(n.uid===c,r,"user-mismatch"),Fn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Th(n,e,t=!1){if(ze(n.app))return Promise.reject(Mt(n));const r="signIn",s=await Ih(n,r,e),i=await Fn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function p_(n,e){return Th(Kn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g_(n){const e=Kn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function y_(n,e,t){return ze(n.app)?Promise.reject(Mt(n)):p_(me(n),Qn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&g_(n),r})}function __(n,e,t,r){return me(n).onIdTokenChanged(e,t,r)}function w_(n,e,t){return me(n).beforeAuthStateChanged(e,t)}function xh(n,e,t,r){return me(n).onAuthStateChanged(e,t,r)}function v_(n){return me(n).signOut()}const Ws="__sak";/**
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
 */class Ah{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ws,"1"),this.storage.removeItem(Ws),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=1e3,E_=10;class Sh extends Ah{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);By()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,E_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},b_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sh.type="LOCAL";const I_=Sh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh extends Ah{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rh.type="SESSION";const Nh=Rh;/**
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
 */function T_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class hi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new hi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async f=>f(t.origin,i)),h=await T_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class x_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,h)=>{const f=ta("",20);s.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===f)switch(w.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(w.data.response);break;default:clearTimeout(m),clearTimeout(i),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function A_(n){nt().location.href=n}/**
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
 */function Ch(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function S_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function R_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function N_(){return Ch()?self:null}/**
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
 */const Ph="firebaseLocalStorageDb",C_=1,Gs="firebaseLocalStorage",kh="fbase_key";class Zr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function di(n,e){return n.transaction([Gs],e?"readwrite":"readonly").objectStore(Gs)}function P_(){const n=indexedDB.deleteDatabase(Ph);return new Zr(n).toPromise()}function xo(){const n=indexedDB.open(Ph,C_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Gs,{keyPath:kh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Gs)?e(r):(r.close(),await P_(),e(await xo()))})})}async function ml(n,e,t){const r=di(n,!0).put({[kh]:e,value:t});return new Zr(r).toPromise()}async function k_(n,e){const t=di(n,!1).get(e),r=await new Zr(t).toPromise();return r===void 0?null:r.value}function pl(n,e){const t=di(n,!0).delete(e);return new Zr(t).toPromise()}const D_=800,V_=3;class Dh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>V_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ch()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hi._getInstance(N_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await S_(),!this.activeServiceWorker)return;this.sender=new x_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||R_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xo();return await ml(e,Ws,"1"),await pl(e,Ws),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ml(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>k_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=di(s,!1).getAll();return new Zr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dh.type="LOCAL";const j_=Dh;new Jr(3e4,6e4);/**
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
 */function O_(n,e){return e?dt(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class na extends Zo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function M_(n){return Th(n.auth,new na(n),n.bypassAuthState)}function L_(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),m_(t,new na(n),n.bypassAuthState)}async function F_(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),f_(t,new na(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M_;case"linkViaPopup":case"linkViaRedirect":return F_;case"reauthViaPopup":case"reauthViaRedirect":return L_;default:Qe(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new Jr(2e3,1e4);class Pn extends Vh{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const e=ta();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,U_.get())};e()}}Pn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="pendingRedirect",Ns=new Map;class q_ extends Vh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ns.get(this.auth._key());if(!e){try{const r=await $_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ns.set(this.auth._key(),e)}return this.bypassAuthState||Ns.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $_(n,e){const t=W_(e),r=z_(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function H_(n,e){Ns.set(n._key(),e)}function z_(n){return dt(n._redirectPersistence)}function W_(n){return Rs(B_,n.config.apiKey,n.name)}async function G_(n,e,t=!1){if(ze(n.app))return Promise.reject(Mt(n));const r=Kn(n),s=O_(r,e),a=await new q_(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=600*1e3;class Q_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!jh(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(tt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=K_&&this.cachedEventUids.clear(),this.cachedEventUids.has(gl(e))}saveEventToCache(e){this.cachedEventUids.add(gl(e)),this.lastProcessedEventTime=Date.now()}}function gl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function jh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(n,e={}){return Gt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z_=/^https?/;async function ew(n){if(n.config.emulator)return;const{authorizedDomains:e}=await J_(n);for(const t of e)try{if(tw(t))return}catch{}Qe(n,"unauthorized-domain")}function tw(n){const e=Io(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Z_.test(t))return!1;if(X_.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const nw=new Jr(3e4,6e4);function yl(){const n=nt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function rw(n){return new Promise((e,t)=>{var s,i,a;function r(){yl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yl(),t(tt(n,"network-request-failed"))},timeout:nw.get()})}if((i=(s=nt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=nt().gapi)!=null&&a.load)r();else{const c=Yy("iframefcb");return nt()[c]=()=>{gapi.load?r():t(tt(n,"network-request-failed"))},wh(`${Qy()}?onload=${c}`).catch(h=>t(h))}}).catch(e=>{throw Cs=null,e})}let Cs=null;function sw(n){return Cs=Cs||rw(n),Cs}/**
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
 */const iw=new Jr(5e3,15e3),ow="__/auth/iframe",aw="emulator/auth/iframe",cw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uw(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Yo(e,aw):`https://${n.config.authDomain}/${ow}`,r={apiKey:e.apiKey,appName:n.name,v:Gn},s=lw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Yr(r).slice(1)}`}async function hw(n){const e=await sw(n),t=nt().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:uw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=tt(n,"network-request-failed"),c=nt().setTimeout(()=>{i(a)},iw.get());function h(){nt().clearTimeout(c),s(r)}r.ping(h).then(h,()=>{i(a)})}))}/**
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
 */const dw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fw=500,mw=600,pw="_blank",gw="http://localhost";class _l{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yw(n,e,t,r=fw,s=mw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const h={...dw,width:r.toString(),height:s.toString(),top:i,left:a},f=Pe().toLowerCase();t&&(c=dh(f)?pw:t),uh(f)&&(e=e||gw,h.scrollbars="yes");const m=Object.entries(h).reduce((w,[S,C])=>`${w}${S}=${C},`,"");if(Uy(f)&&c!=="_self")return _w(e||"",c),new _l(null);const g=window.open(e||"",c,m);z(g,n,"popup-blocked");try{g.focus()}catch{}return new _l(g)}function _w(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const ww="__/auth/handler",vw="emulator/auth/handler",bw=encodeURIComponent("fac");async function wl(n,e,t,r,s,i){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Gn,eventId:s};if(e instanceof Eh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",rg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))a[m]=g}if(e instanceof Xr){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const h=await n._getAppCheckToken(),f=h?`#${bw}=${encodeURIComponent(h)}`:"";return`${Ew(n)}?${Yr(c).slice(1)}${f}`}function Ew({config:n}){return n.emulator?Yo(n,vw):`https://${n.authDomain}/${ww}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="webStorageSupport";class Iw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nh,this._completeRedirectFn=G_,this._overrideRedirectResult=H_}async _openPopup(e,t,r,s){var a;gt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await wl(e,t,r,Io(),s);return yw(e,i,ta())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await wl(e,t,r,Io(),s);return A_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(gt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await hw(e),r=new Q_(e);return t.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ao,{type:ao},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[ao];i!==void 0&&t(!!i),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ew(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yh()||hh()||Xo()}}const Tw=Iw;var vl="@firebase/auth",bl="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sw(n){at(new Ke("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_h(n)},f=new Wy(r,s,i,h);return n_(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),at(new Ke("auth-internal",e=>{const t=Kn(e.getProvider("auth").getImmediate());return(r=>new xw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),$e(vl,bl,Aw(n)),$e(vl,bl,"esm2020")}/**
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
 */const Rw=300,Nw=Hu("authIdTokenMaxAge")||Rw;let El=null;const Cw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Nw)return;const s=t==null?void 0:t.token;El!==s&&(El=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Pw(n=Ko()){const e=mn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=t_(n,{popupRedirectResolver:Tw,persistence:[j_,I_,Nh]}),r=Hu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Cw(i.toString());w_(t,a,()=>a(t.currentUser)),__(t,c=>a(c))}}const s=qu("auth");return s&&r_(t,`http://${s}`),t}function kw(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Gy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=tt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",kw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sw("Browser");var Il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lt,Oh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function v(){}v.prototype=y.prototype,b.F=y.prototype,b.prototype=new v,b.prototype.constructor=b,b.D=function(I,E,T){for(var _=Array(arguments.length-2),te=2;te<arguments.length;te++)_[te-2]=arguments[te];return y.prototype[E].apply(I,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,v){v||(v=0);const I=Array(16);if(typeof y=="string")for(var E=0;E<16;++E)I[E]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(E=0;E<16;++E)I[E]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=b.g[0],v=b.g[1],E=b.g[2];let T=b.g[3],_;_=y+(T^v&(E^T))+I[0]+3614090360&4294967295,y=v+(_<<7&4294967295|_>>>25),_=T+(E^y&(v^E))+I[1]+3905402710&4294967295,T=y+(_<<12&4294967295|_>>>20),_=E+(v^T&(y^v))+I[2]+606105819&4294967295,E=T+(_<<17&4294967295|_>>>15),_=v+(y^E&(T^y))+I[3]+3250441966&4294967295,v=E+(_<<22&4294967295|_>>>10),_=y+(T^v&(E^T))+I[4]+4118548399&4294967295,y=v+(_<<7&4294967295|_>>>25),_=T+(E^y&(v^E))+I[5]+1200080426&4294967295,T=y+(_<<12&4294967295|_>>>20),_=E+(v^T&(y^v))+I[6]+2821735955&4294967295,E=T+(_<<17&4294967295|_>>>15),_=v+(y^E&(T^y))+I[7]+4249261313&4294967295,v=E+(_<<22&4294967295|_>>>10),_=y+(T^v&(E^T))+I[8]+1770035416&4294967295,y=v+(_<<7&4294967295|_>>>25),_=T+(E^y&(v^E))+I[9]+2336552879&4294967295,T=y+(_<<12&4294967295|_>>>20),_=E+(v^T&(y^v))+I[10]+4294925233&4294967295,E=T+(_<<17&4294967295|_>>>15),_=v+(y^E&(T^y))+I[11]+2304563134&4294967295,v=E+(_<<22&4294967295|_>>>10),_=y+(T^v&(E^T))+I[12]+1804603682&4294967295,y=v+(_<<7&4294967295|_>>>25),_=T+(E^y&(v^E))+I[13]+4254626195&4294967295,T=y+(_<<12&4294967295|_>>>20),_=E+(v^T&(y^v))+I[14]+2792965006&4294967295,E=T+(_<<17&4294967295|_>>>15),_=v+(y^E&(T^y))+I[15]+1236535329&4294967295,v=E+(_<<22&4294967295|_>>>10),_=y+(E^T&(v^E))+I[1]+4129170786&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^E&(y^v))+I[6]+3225465664&4294967295,T=y+(_<<9&4294967295|_>>>23),_=E+(y^v&(T^y))+I[11]+643717713&4294967295,E=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(E^T))+I[0]+3921069994&4294967295,v=E+(_<<20&4294967295|_>>>12),_=y+(E^T&(v^E))+I[5]+3593408605&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^E&(y^v))+I[10]+38016083&4294967295,T=y+(_<<9&4294967295|_>>>23),_=E+(y^v&(T^y))+I[15]+3634488961&4294967295,E=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(E^T))+I[4]+3889429448&4294967295,v=E+(_<<20&4294967295|_>>>12),_=y+(E^T&(v^E))+I[9]+568446438&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^E&(y^v))+I[14]+3275163606&4294967295,T=y+(_<<9&4294967295|_>>>23),_=E+(y^v&(T^y))+I[3]+4107603335&4294967295,E=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(E^T))+I[8]+1163531501&4294967295,v=E+(_<<20&4294967295|_>>>12),_=y+(E^T&(v^E))+I[13]+2850285829&4294967295,y=v+(_<<5&4294967295|_>>>27),_=T+(v^E&(y^v))+I[2]+4243563512&4294967295,T=y+(_<<9&4294967295|_>>>23),_=E+(y^v&(T^y))+I[7]+1735328473&4294967295,E=T+(_<<14&4294967295|_>>>18),_=v+(T^y&(E^T))+I[12]+2368359562&4294967295,v=E+(_<<20&4294967295|_>>>12),_=y+(v^E^T)+I[5]+4294588738&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^E)+I[8]+2272392833&4294967295,T=y+(_<<11&4294967295|_>>>21),_=E+(T^y^v)+I[11]+1839030562&4294967295,E=T+(_<<16&4294967295|_>>>16),_=v+(E^T^y)+I[14]+4259657740&4294967295,v=E+(_<<23&4294967295|_>>>9),_=y+(v^E^T)+I[1]+2763975236&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^E)+I[4]+1272893353&4294967295,T=y+(_<<11&4294967295|_>>>21),_=E+(T^y^v)+I[7]+4139469664&4294967295,E=T+(_<<16&4294967295|_>>>16),_=v+(E^T^y)+I[10]+3200236656&4294967295,v=E+(_<<23&4294967295|_>>>9),_=y+(v^E^T)+I[13]+681279174&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^E)+I[0]+3936430074&4294967295,T=y+(_<<11&4294967295|_>>>21),_=E+(T^y^v)+I[3]+3572445317&4294967295,E=T+(_<<16&4294967295|_>>>16),_=v+(E^T^y)+I[6]+76029189&4294967295,v=E+(_<<23&4294967295|_>>>9),_=y+(v^E^T)+I[9]+3654602809&4294967295,y=v+(_<<4&4294967295|_>>>28),_=T+(y^v^E)+I[12]+3873151461&4294967295,T=y+(_<<11&4294967295|_>>>21),_=E+(T^y^v)+I[15]+530742520&4294967295,E=T+(_<<16&4294967295|_>>>16),_=v+(E^T^y)+I[2]+3299628645&4294967295,v=E+(_<<23&4294967295|_>>>9),_=y+(E^(v|~T))+I[0]+4096336452&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~E))+I[7]+1126891415&4294967295,T=y+(_<<10&4294967295|_>>>22),_=E+(y^(T|~v))+I[14]+2878612391&4294967295,E=T+(_<<15&4294967295|_>>>17),_=v+(T^(E|~y))+I[5]+4237533241&4294967295,v=E+(_<<21&4294967295|_>>>11),_=y+(E^(v|~T))+I[12]+1700485571&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~E))+I[3]+2399980690&4294967295,T=y+(_<<10&4294967295|_>>>22),_=E+(y^(T|~v))+I[10]+4293915773&4294967295,E=T+(_<<15&4294967295|_>>>17),_=v+(T^(E|~y))+I[1]+2240044497&4294967295,v=E+(_<<21&4294967295|_>>>11),_=y+(E^(v|~T))+I[8]+1873313359&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~E))+I[15]+4264355552&4294967295,T=y+(_<<10&4294967295|_>>>22),_=E+(y^(T|~v))+I[6]+2734768916&4294967295,E=T+(_<<15&4294967295|_>>>17),_=v+(T^(E|~y))+I[13]+1309151649&4294967295,v=E+(_<<21&4294967295|_>>>11),_=y+(E^(v|~T))+I[4]+4149444226&4294967295,y=v+(_<<6&4294967295|_>>>26),_=T+(v^(y|~E))+I[11]+3174756917&4294967295,T=y+(_<<10&4294967295|_>>>22),_=E+(y^(T|~v))+I[2]+718787259&4294967295,E=T+(_<<15&4294967295|_>>>17),_=v+(T^(E|~y))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+T&4294967295}r.prototype.v=function(b,y){y===void 0&&(y=b.length);const v=y-this.blockSize,I=this.C;let E=this.h,T=0;for(;T<y;){if(E==0)for(;T<=v;)s(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<y;)if(I[E++]=b.charCodeAt(T++),E==this.blockSize){s(this,I),E=0;break}}else for(;T<y;)if(I[E++]=b[T++],E==this.blockSize){s(this,I),E=0;break}}this.h=E,this.o+=y},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;y=this.o*8;for(var v=b.length-8;v<b.length;++v)b[v]=y&255,y/=256;for(this.v(b),b=Array(16),y=0,v=0;v<4;++v)for(let I=0;I<32;I+=8)b[y++]=this.g[v]>>>I&255;return b};function i(b,y){var v=c;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=y(b)}function a(b,y){this.h=y;const v=[];let I=!0;for(let E=b.length-1;E>=0;E--){const T=b[E]|0;I&&T==y||(v[E]=T,I=!1)}this.g=v}var c={};function h(b){return-128<=b&&b<128?i(b,function(y){return new a([y|0],y<0?-1:0)}):new a([b|0],b<0?-1:0)}function f(b){if(isNaN(b)||!isFinite(b))return g;if(b<0)return P(f(-b));const y=[];let v=1;for(let I=0;b>=v;I++)y[I]=b/v|0,v*=4294967296;return new a(y,0)}function m(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return P(m(b.substring(1),y));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=f(Math.pow(y,8));let I=g;for(let T=0;T<b.length;T+=8){var E=Math.min(8,b.length-T);const _=parseInt(b.substring(T,T+E),y);E<8?(E=f(Math.pow(y,E)),I=I.j(E).add(f(_))):(I=I.j(v),I=I.add(f(_)))}return I}var g=h(0),w=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-P(this).m();let b=0,y=1;for(let v=0;v<this.g.length;v++){const I=this.i(v);b+=(I>=0?I:4294967296+I)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(C(this))return"0";if(k(this))return"-"+P(this).toString(b);const y=f(Math.pow(b,6));var v=this;let I="";for(;;){const E=H(v,y).g;v=$(v,E.j(y));let T=((v.g.length>0?v.g[0]:v.h)>>>0).toString(b);if(v=E,C(v))return T+I;for(;T.length<6;)T="0"+T;I=T+I}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function C(b){if(b.h!=0)return!1;for(let y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function k(b){return b.h==-1}n.l=function(b){return b=$(this,b),k(b)?-1:C(b)?0:1};function P(b){const y=b.g.length,v=[];for(let I=0;I<y;I++)v[I]=~b.g[I];return new a(v,~b.h).add(w)}n.abs=function(){return k(this)?P(this):this},n.add=function(b){const y=Math.max(this.g.length,b.g.length),v=[];let I=0;for(let E=0;E<=y;E++){let T=I+(this.i(E)&65535)+(b.i(E)&65535),_=(T>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);I=_>>>16,T&=65535,_&=65535,v[E]=_<<16|T}return new a(v,v[v.length-1]&-2147483648?-1:0)};function $(b,y){return b.add(P(y))}n.j=function(b){if(C(this)||C(b))return g;if(k(this))return k(b)?P(this).j(P(b)):P(P(this).j(b));if(k(b))return P(this.j(P(b)));if(this.l(S)<0&&b.l(S)<0)return f(this.m()*b.m());const y=this.g.length+b.g.length,v=[];for(var I=0;I<2*y;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<b.g.length;E++){const T=this.i(I)>>>16,_=this.i(I)&65535,te=b.i(E)>>>16,ue=b.i(E)&65535;v[2*I+2*E]+=_*ue,B(v,2*I+2*E),v[2*I+2*E+1]+=T*ue,B(v,2*I+2*E+1),v[2*I+2*E+1]+=_*te,B(v,2*I+2*E+1),v[2*I+2*E+2]+=T*te,B(v,2*I+2*E+2)}for(b=0;b<y;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=y;b<2*y;b++)v[b]=0;return new a(v,0)};function B(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function O(b,y){this.g=b,this.h=y}function H(b,y){if(C(y))throw Error("division by zero");if(C(b))return new O(g,g);if(k(b))return y=H(P(b),y),new O(P(y.g),P(y.h));if(k(y))return y=H(b,P(y)),new O(P(y.g),y.h);if(b.g.length>30){if(k(b)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var v=w,I=y;I.l(b)<=0;)v=V(v),I=V(I);var E=U(v,1),T=U(I,1);for(I=U(I,2),v=U(v,2);!C(I);){var _=T.add(I);_.l(b)<=0&&(E=E.add(v),T=_),I=U(I,1),v=U(v,1)}return y=$(b,E.j(y)),new O(E,y)}for(E=g;b.l(y)>=0;){for(v=Math.max(1,Math.floor(b.m()/y.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),T=f(v),_=T.j(y);k(_)||_.l(b)>0;)v-=I,T=f(v),_=T.j(y);C(T)&&(T=w),E=E.add(T),b=$(b,_)}return new O(E,b)}n.B=function(b){return H(this,b).h},n.and=function(b){const y=Math.max(this.g.length,b.g.length),v=[];for(let I=0;I<y;I++)v[I]=this.i(I)&b.i(I);return new a(v,this.h&b.h)},n.or=function(b){const y=Math.max(this.g.length,b.g.length),v=[];for(let I=0;I<y;I++)v[I]=this.i(I)|b.i(I);return new a(v,this.h|b.h)},n.xor=function(b){const y=Math.max(this.g.length,b.g.length),v=[];for(let I=0;I<y;I++)v[I]=this.i(I)^b.i(I);return new a(v,this.h^b.h)};function V(b){const y=b.g.length+1,v=[];for(let I=0;I<y;I++)v[I]=b.i(I)<<1|b.i(I-1)>>>31;return new a(v,b.h)}function U(b,y){const v=y>>5;y%=32;const I=b.g.length-v,E=[];for(let T=0;T<I;T++)E[T]=y>0?b.i(T+v)>>>y|b.i(T+v+1)<<32-y:b.i(T+v);return new a(E,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Oh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,Lt=a}).apply(typeof Il<"u"?Il:typeof self<"u"?self:typeof window<"u"?window:{});var bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mh,Ar,Lh,Ps,Ao,Fh,Uh,Bh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof bs=="object"&&bs];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var x=o[p];if(!(x in d))break e;d=d[x]}o=o[o.length-1],p=d[o],l=l(p),l!=p&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var d=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&d.push([p,l[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function h(o,l,d){return o.call.apply(o.bind,arguments)}function f(o,l,d){return f=h,f.apply(null,arguments)}function m(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function g(o,l){function d(){}d.prototype=l.prototype,o.Z=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(p,x,A){for(var D=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)D[Q-2]=arguments[Q];return l.prototype[x].apply(p,D)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const l=o.length;if(l>0){const d=Array(l);for(let p=0;p<l;p++)d[p]=o[p];return d}return[]}function C(o,l){for(let p=1;p<arguments.length;p++){const x=arguments[p];var d=typeof x;if(d=d!="object"?d:x?Array.isArray(x)?"array":d:"null",d=="array"||d=="object"&&typeof x.length=="number"){d=o.length||0;const A=x.length||0;o.length=d+A;for(let D=0;D<A;D++)o[d+D]=x[D]}else o.push(x)}}class k{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function P(o){a.setTimeout(()=>{throw o},0)}function $(){var o=b;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class B{constructor(){this.h=this.g=null}add(l,d){const p=O.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var O=new k(()=>new H,o=>o.reset());class H{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let V,U=!1,b=new B,y=()=>{const o=Promise.resolve(void 0);V=()=>{o.then(v)}};function v(){for(var o;o=$();){try{o.h.call(o.g)}catch(d){P(d)}var l=O;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}U=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var T=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,l),a.removeEventListener("test",d,l)}catch{}return o})();function _(o){return/^[\s\xa0]*$/.test(o)}function te(o,l){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}g(te,E),te.prototype.init=function(o,l){const d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&te.Z.h.call(this)},te.prototype.h=function(){te.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ue="closure_listenable_"+(Math.random()*1e6|0),vt=0;function bt(o,l,d,p,x){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=x,this.key=++vt,this.da=this.fa=!1}function ie(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ut(o,l,d){for(const p in o)l.call(d,o[p],p,o)}function Vi(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function os(o){const l={};for(const d in o)l[d]=o[d];return l}const nr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yt(o,l){let d,p;for(let x=1;x<arguments.length;x++){p=arguments[x];for(d in p)o[d]=p[d];for(let A=0;A<nr.length;A++)d=nr[A],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function wn(o){this.src=o,this.g={},this.h=0}wn.prototype.add=function(o,l,d,p,x){const A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);const D=sr(o,l,p,x);return D>-1?(l=o[D],d||(l.fa=!1)):(l=new bt(l,this.src,A,!!p,x),l.fa=d,o.push(l)),l};function rr(o,l){const d=l.type;if(d in o.g){var p=o.g[d],x=Array.prototype.indexOf.call(p,l,void 0),A;(A=x>=0)&&Array.prototype.splice.call(p,x,1),A&&(ie(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function sr(o,l,d,p){for(let x=0;x<o.length;++x){const A=o[x];if(!A.da&&A.listener==l&&A.capture==!!d&&A.ha==p)return x}return-1}var ir="closure_lm_"+(Math.random()*1e6|0),L={};function Y(o,l,d,p,x){if(Array.isArray(l)){for(let A=0;A<l.length;A++)Y(o,l[A],d,p,x);return null}return d=Ha(d),o&&o[ue]?o.J(l,d,c(p)?!!p.capture:!1,x):pe(o,l,d,!1,p,x)}function pe(o,l,d,p,x,A){if(!l)throw Error("Invalid event type");const D=c(x)?!!x.capture:!!x;let Q=ji(o);if(Q||(o[ir]=Q=new wn(o)),d=Q.add(l,d,p,D,A),d.proxy)return d;if(p=Ue(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)T||(x=D),x===void 0&&(x=!1),o.addEventListener(l.toString(),p,x);else if(o.attachEvent)o.attachEvent(or(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ue(){function o(d){return l.call(o.src,o.listener,d)}const l=bn;return o}function vn(o,l,d,p,x){if(Array.isArray(l))for(var A=0;A<l.length;A++)vn(o,l[A],d,p,x);else p=c(p)?!!p.capture:!!p,d=Ha(d),o&&o[ue]?(o=o.i,A=String(l).toString(),A in o.g&&(l=o.g[A],d=sr(l,d,p,x),d>-1&&(ie(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete o.g[A],o.h--)))):o&&(o=ji(o))&&(l=o.g[l.toString()],o=-1,l&&(o=sr(l,d,p,x)),(d=o>-1?l[o]:null)&&Jt(d))}function Jt(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[ue])rr(l.i,o);else{var d=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(d,p,o.capture):l.detachEvent?l.detachEvent(or(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=ji(l))?(rr(d,o),d.h==0&&(d.src=null,l[ir]=null)):ie(o)}}}function or(o){return o in L?L[o]:L[o]="on"+o}function bn(o,l){if(o.da)o=!0;else{l=new te(l,this);const d=o.listener,p=o.ha||o.src;o.fa&&Jt(o),o=d.call(p,l)}return o}function ji(o){return o=o[ir],o instanceof wn?o:null}var Oi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ha(o){return typeof o=="function"?o:(o[Oi]||(o[Oi]=function(l){return o.handleEvent(l)}),o[Oi])}function Se(){I.call(this),this.i=new wn(this),this.M=this,this.G=null}g(Se,I),Se.prototype[ue]=!0,Se.prototype.removeEventListener=function(o,l,d,p){vn(this,o,l,d,p)};function ke(o,l){var d,p=o.G;if(p)for(d=[];p;p=p.G)d.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new E(l,o);else if(l instanceof E)l.target=l.target||o;else{var x=l;l=new E(p,o),Yt(l,x)}x=!0;let A,D;if(d)for(D=d.length-1;D>=0;D--)A=l.g=d[D],x=as(A,p,!0,l)&&x;if(A=l.g=o,x=as(A,p,!0,l)&&x,x=as(A,p,!1,l)&&x,d)for(D=0;D<d.length;D++)A=l.g=d[D],x=as(A,p,!1,l)&&x}Se.prototype.N=function(){if(Se.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const d=o.g[l];for(let p=0;p<d.length;p++)ie(d[p]);delete o.g[l],o.h--}}this.G=null},Se.prototype.J=function(o,l,d,p){return this.i.add(String(o),l,!1,d,p)},Se.prototype.K=function(o,l,d,p){return this.i.add(String(o),l,!0,d,p)};function as(o,l,d,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let x=!0;for(let A=0;A<l.length;++A){const D=l[A];if(D&&!D.da&&D.capture==d){const Q=D.listener,ve=D.ha||D.src;D.fa&&rr(o.i,D),x=Q.call(ve,p)!==!1&&x}}return x&&!p.defaultPrevented}function Ff(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=f(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function za(o){o.g=Ff(()=>{o.g=null,o.i&&(o.i=!1,za(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Uf extends I{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:za(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ar(o){I.call(this),this.h=o,this.g={}}g(ar,I);var Wa=[];function Ga(o){ut(o.g,function(l,d){this.g.hasOwnProperty(d)&&Jt(l)},o),o.g={}}ar.prototype.N=function(){ar.Z.N.call(this),Ga(this)},ar.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mi=a.JSON.stringify,Bf=a.JSON.parse,qf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Ka(){}function Qa(){}var cr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Li(){E.call(this,"d")}g(Li,E);function Fi(){E.call(this,"c")}g(Fi,E);var Xt={},Ya=null;function cs(){return Ya=Ya||new Se}Xt.Ia="serverreachability";function Ja(o){E.call(this,Xt.Ia,o)}g(Ja,E);function lr(o){const l=cs();ke(l,new Ja(l))}Xt.STAT_EVENT="statevent";function Xa(o,l){E.call(this,Xt.STAT_EVENT,o),this.stat=l}g(Xa,E);function De(o){const l=cs();ke(l,new Xa(l,o))}Xt.Ja="timingevent";function Za(o,l){E.call(this,Xt.Ja,o),this.size=l}g(Za,E);function ur(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function hr(){this.g=!0}hr.prototype.ua=function(){this.g=!1};function $f(o,l,d,p,x,A){o.info(function(){if(o.g)if(A){var D="",Q=A.split("&");for(let se=0;se<Q.length;se++){var ve=Q[se].split("=");if(ve.length>1){const Ee=ve[0];ve=ve[1];const Ze=Ee.split("_");D=Ze.length>=2&&Ze[1]=="type"?D+(Ee+"="+ve+"&"):D+(Ee+"=redacted&")}}}else D=null;else D=A;return"XMLHTTP REQ ("+p+") [attempt "+x+"]: "+l+`
`+d+`
`+D})}function Hf(o,l,d,p,x,A,D){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+x+"]: "+l+`
`+d+`
`+A+" "+D})}function En(o,l,d,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Wf(o,d)+(p?" "+p:"")})}function zf(o,l){o.info(function(){return"TIMEOUT: "+l})}hr.prototype.info=function(){};function Wf(o,l){if(!o.g)return l;if(!l)return null;try{const A=JSON.parse(l);if(A){for(o=0;o<A.length;o++)if(Array.isArray(A[o])){var d=A[o];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var x=p[0];if(x!="noop"&&x!="stop"&&x!="close")for(let D=1;D<p.length;D++)p[D]=""}}}}return Mi(A)}catch{return l}}var ls={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ec={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},tc;function Ui(){}g(Ui,Ka),Ui.prototype.g=function(){return new XMLHttpRequest},tc=new Ui;function dr(o){return encodeURIComponent(String(o))}function Gf(o){var l=1;o=o.split(":");const d=[];for(;l>0&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function Et(o,l,d,p){this.j=o,this.i=l,this.l=d,this.S=p||1,this.V=new ar(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new nc}function nc(){this.i=null,this.g="",this.h=!1}var rc={},Bi={};function qi(o,l,d){o.M=1,o.A=hs(Xe(l)),o.u=d,o.R=!0,sc(o,null)}function sc(o,l){o.F=Date.now(),us(o),o.B=Xe(o.A);var d=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),yc(d.i,"t",p),o.C=0,d=o.j.L,o.h=new nc,o.g=jc(o.j,d?l:null,!o.u),o.P>0&&(o.O=new Uf(f(o.Y,o,o.g),o.P)),l=o.V,d=o.g,p=o.ba;var x="readystatechange";Array.isArray(x)||(x&&(Wa[0]=x.toString()),x=Wa);for(let A=0;A<x.length;A++){const D=Y(d,x[A],p||l.handleEvent,!1,l.h||l);if(!D)break;l.g[D.key]=D}l=o.J?os(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),lr(),$f(o.i,o.v,o.B,o.l,o.S,o.u)}Et.prototype.ba=function(o){o=o.target;const l=this.O;l&&xt(o)==3?l.j():this.Y(o)},Et.prototype.Y=function(o){try{if(o==this.g)e:{const Q=xt(this.g),ve=this.g.ya(),se=this.g.ca();if(!(Q<3)&&(Q!=3||this.g&&(this.h.h||this.g.la()||Tc(this.g)))){this.K||Q!=4||ve==7||(ve==8||se<=0?lr(3):lr(2)),$i(this);var l=this.g.ca();this.X=l;var d=Kf(this);if(this.o=l==200,Hf(this.i,this.v,this.B,this.l,this.S,Q,l),this.o){if(this.U&&!this.L){t:{if(this.g){var p,x=this.g;if((p=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var A=p;break t}}A=null}if(o=A)En(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Hi(this,o);else{this.o=!1,this.m=3,De(12),Zt(this),fr(this);break e}}if(this.R){o=!0;let Ee;for(;!this.K&&this.C<d.length;)if(Ee=Qf(this,d),Ee==Bi){Q==4&&(this.m=4,De(14),o=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(Ee==rc){this.m=4,De(15),En(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else En(this.i,this.l,Ee,null),Hi(this,Ee);if(ic(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||d.length!=0||this.h.h||(this.m=1,De(16),o=!1),this.o=this.o&&o,!o)En(this.i,this.l,d,"[Invalid Chunked Response]"),Zt(this),fr(this);else if(d.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Xi(D),D.P=!0,De(11))}}else En(this.i,this.l,d,null),Hi(this,d);Q==4&&Zt(this),this.o&&!this.K&&(Q==4?Pc(this.j,this):(this.o=!1,us(this)))}else lm(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,De(12)):(this.m=0,De(13)),Zt(this),fr(this)}}}catch{}finally{}};function Kf(o){if(!ic(o))return o.g.la();const l=Tc(o.g);if(l==="")return"";let d="";const p=l.length,x=xt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Zt(o),fr(o),"";o.h.i=new a.TextDecoder}for(let A=0;A<p;A++)o.h.h=!0,d+=o.h.i.decode(l[A],{stream:!(x&&A==p-1)});return l.length=0,o.h.g+=d,o.C=0,o.h.g}function ic(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Qf(o,l){var d=o.C,p=l.indexOf(`
`,d);return p==-1?Bi:(d=Number(l.substring(d,p)),isNaN(d)?rc:(p+=1,p+d>l.length?Bi:(l=l.slice(p,p+d),o.C=p+d,l)))}Et.prototype.cancel=function(){this.K=!0,Zt(this)};function us(o){o.T=Date.now()+o.H,oc(o,o.H)}function oc(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ur(f(o.aa,o),l)}function $i(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Et.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(zf(this.i,this.B),this.M!=2&&(lr(),De(17)),Zt(this),this.m=2,fr(this)):oc(this,this.T-o)};function fr(o){o.j.I==0||o.K||Pc(o.j,o)}function Zt(o){$i(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,Ga(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function Hi(o,l){try{var d=o.j;if(d.I!=0&&(d.g==o||zi(d.h,o))){if(!o.L&&zi(d.h,o)&&d.I==3){try{var p=d.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var x=p;if(x[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)gs(d),ms(d);else break e;Ji(d),De(18)}}else d.xa=x[1],0<d.xa-d.K&&x[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ur(f(d.Va,d),6e3));lc(d.h)<=1&&d.ta&&(d.ta=void 0)}else tn(d,11)}else if((o.L||d.g==o)&&gs(d),!_(l))for(x=d.Ba.g.parse(l),l=0;l<x.length;l++){let se=x[l];const Ee=se[0];if(!(Ee<=d.K))if(d.K=Ee,se=se[1],d.I==2)if(se[0]=="c"){d.M=se[1],d.ba=se[2];const Ze=se[3];Ze!=null&&(d.ka=Ze,d.j.info("VER="+d.ka));const nn=se[4];nn!=null&&(d.za=nn,d.j.info("SVER="+d.za));const At=se[5];At!=null&&typeof At=="number"&&At>0&&(p=1.5*At,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const St=o.g;if(St){const _s=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_s){var A=p.h;A.g||_s.indexOf("spdy")==-1&&_s.indexOf("quic")==-1&&_s.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Wi(A,A.h),A.h=null))}if(p.G){const Zi=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;Zi&&(p.wa=Zi,ce(p.J,p.G,Zi))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var D=o;if(p.na=Vc(p,p.L?p.ba:null,p.W),D.L){uc(p.h,D);var Q=D,ve=p.O;ve&&(Q.H=ve),Q.D&&($i(Q),us(Q)),p.g=D}else Nc(p);d.i.length>0&&ps(d)}else se[0]!="stop"&&se[0]!="close"||tn(d,7);else d.I==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?tn(d,7):Yi(d):se[0]!="noop"&&d.l&&d.l.qa(se),d.A=0)}}lr(4)}catch{}}var Yf=class{constructor(o,l){this.g=o,this.map=l}};function ac(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function cc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function lc(o){return o.h?1:o.g?o.g.size:0}function zi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Wi(o,l){o.g?o.g.add(l):o.h=l}function uc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}ac.prototype.cancel=function(){if(this.i=hc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function hc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.G);return l}return S(o.i)}var dc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jf(o,l){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const p=o[d].indexOf("=");let x,A=null;p>=0?(x=o[d].substring(0,p),A=o[d].substring(p+1)):x=o[d],l(x,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function It(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof It?(this.l=o.l,mr(this,o.j),this.o=o.o,this.g=o.g,pr(this,o.u),this.h=o.h,Gi(this,_c(o.i)),this.m=o.m):o&&(l=String(o).match(dc))?(this.l=!1,mr(this,l[1]||"",!0),this.o=gr(l[2]||""),this.g=gr(l[3]||"",!0),pr(this,l[4]),this.h=gr(l[5]||"",!0),Gi(this,l[6]||"",!0),this.m=gr(l[7]||"")):(this.l=!1,this.i=new _r(null,this.l))}It.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(yr(l,fc,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(yr(l,fc,!0),"@"),o.push(dr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(yr(d,d.charAt(0)=="/"?em:Zf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",yr(d,nm)),o.join("")},It.prototype.resolve=function(o){const l=Xe(this);let d=!!o.j;d?mr(l,o.j):d=!!o.o,d?l.o=o.o:d=!!o.g,d?l.g=o.g:d=o.u!=null;var p=o.h;if(d)pr(l,o.u);else if(d=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var x=l.h.lastIndexOf("/");x!=-1&&(p=l.h.slice(0,x+1)+p)}if(x=p,x==".."||x==".")p="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){p=x.lastIndexOf("/",0)==0,x=x.split("/");const A=[];for(let D=0;D<x.length;){const Q=x[D++];Q=="."?p&&D==x.length&&A.push(""):Q==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),p&&D==x.length&&A.push("")):(A.push(Q),p=!0)}p=A.join("/")}else p=x}return d?l.h=p:d=o.i.toString()!=="",d?Gi(l,_c(o.i)):d=!!o.m,d&&(l.m=o.m),l};function Xe(o){return new It(o)}function mr(o,l,d){o.j=d?gr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function pr(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Gi(o,l,d){l instanceof _r?(o.i=l,rm(o.i,o.l)):(d||(l=yr(l,tm)),o.i=new _r(l,o.l))}function ce(o,l,d){o.i.set(l,d)}function hs(o){return ce(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function gr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function yr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Xf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Xf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var fc=/[#\/\?@]/g,Zf=/[#\?:]/g,em=/[#\?]/g,tm=/[#\?@]/g,nm=/#/g;function _r(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function en(o){o.g||(o.g=new Map,o.h=0,o.i&&Jf(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=_r.prototype,n.add=function(o,l){en(this),this.i=null,o=In(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function mc(o,l){en(o),l=In(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function pc(o,l){return en(o),l=In(o,l),o.g.has(l)}n.forEach=function(o,l){en(this),this.g.forEach(function(d,p){d.forEach(function(x){o.call(l,x,p,this)},this)},this)};function gc(o,l){en(o);let d=[];if(typeof l=="string")pc(o,l)&&(d=d.concat(o.g.get(In(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)d=d.concat(o[l]);return d}n.set=function(o,l){return en(this),this.i=null,o=In(this,o),pc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=gc(this,o),o.length>0?String(o[0]):l):l};function yc(o,l,d){mc(o,l),d.length>0&&(o.i=null,o.g.set(In(o,l),S(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var d=l[p];const x=dr(d);d=gc(this,d);for(let A=0;A<d.length;A++){let D=x;d[A]!==""&&(D+="="+dr(d[A])),o.push(D)}}return this.i=o.join("&")};function _c(o){const l=new _r;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function In(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function rm(o,l){l&&!o.j&&(en(o),o.i=null,o.g.forEach(function(d,p){const x=p.toLowerCase();p!=x&&(mc(this,p),yc(this,x,d))},o)),o.j=l}function sm(o,l){const d=new hr;if(a.Image){const p=new Image;p.onload=m(Tt,d,"TestLoadImage: loaded",!0,l,p),p.onerror=m(Tt,d,"TestLoadImage: error",!1,l,p),p.onabort=m(Tt,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=m(Tt,d,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function im(o,l){const d=new hr,p=new AbortController,x=setTimeout(()=>{p.abort(),Tt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(A=>{clearTimeout(x),A.ok?Tt(d,"TestPingServer: ok",!0,l):Tt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(x),Tt(d,"TestPingServer: error",!1,l)})}function Tt(o,l,d,p,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),p(d)}catch{}}function om(){this.g=new qf}function Ki(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Ki,Ka),Ki.prototype.g=function(){return new ds(this.i,this.h)};function ds(o,l){Se.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(ds,Se),n=ds.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,vr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;wc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function wc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?wr(this):vr(this),this.readyState==3&&wc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,wr(this))},n.Na=function(o){this.g&&(this.response=o,wr(this))},n.ga=function(){this.g&&wr(this)};function wr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,vr(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function vr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function vc(o){let l="";return ut(o,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function Qi(o,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=vc(d),typeof o=="string"?d!=null&&dr(d):ce(o,l,d))}function he(o){Se.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(he,Se);var am=/^https?$/i,cm=["POST","PUT"];n=he.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():tc.g(),this.g.onreadystatechange=w(f(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(A){bc(this,A);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var x in p)d.set(x,p[x]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const A of p.keys())d.set(A,p.get(A));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(A=>A.toLowerCase()=="content-type"),x=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(cm,l,void 0)>=0)||p||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,D]of d)this.g.setRequestHeader(A,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(A){bc(this,A)}};function bc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Ec(o),fs(o)}function Ec(o){o.A||(o.A=!0,ke(o,"complete"),ke(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,ke(this,"complete"),ke(this,"abort"),fs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fs(this,!0)),he.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ic(this):this.Xa())},n.Xa=function(){Ic(this)};function Ic(o){if(o.h&&typeof i<"u"){if(o.v&&xt(o)==4)setTimeout(o.Ca.bind(o),0);else if(ke(o,"readystatechange"),xt(o)==4){o.h=!1;try{const A=o.ca();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=A===0){let D=String(o.D).match(dc)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),p=!am.test(D?D.toLowerCase():"")}d=p}if(d)ke(o,"complete"),ke(o,"success");else{o.o=6;try{var x=xt(o)>2?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.ca()+"]",Ec(o)}}finally{fs(o)}}}}function fs(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,l||ke(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function xt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return xt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Bf(l)}};function Tc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function lm(o){const l={};o=(o.g&&xt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(_(o[p]))continue;var d=Gf(o[p]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const A=l[x]||[];l[x]=A,A.push(d)}Vi(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function br(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function xc(o){this.za=0,this.i=[],this.j=new hr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=br("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=br("baseRetryDelayMs",5e3,o),this.Za=br("retryDelaySeedMs",1e4,o),this.Ta=br("forwardChannelMaxRetries",2,o),this.va=br("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new ac(o&&o.concurrentRequestLimit),this.Ba=new om,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=xc.prototype,n.ka=8,n.I=1,n.connect=function(o,l,d,p){De(0),this.W=o,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=Vc(this,null,this.W),ps(this)};function Yi(o){if(Ac(o),o.I==3){var l=o.V++,d=Xe(o.J);if(ce(d,"SID",o.M),ce(d,"RID",l),ce(d,"TYPE","terminate"),Er(o,d),l=new Et(o,o.j,l),l.M=2,l.A=hs(Xe(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=l.A,d=!0),d||(l.g=jc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),us(l)}Dc(o)}function ms(o){o.g&&(Xi(o),o.g.cancel(),o.g=null)}function Ac(o){ms(o),o.v&&(a.clearTimeout(o.v),o.v=null),gs(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function ps(o){if(!cc(o.h)&&!o.m){o.m=!0;var l=o.Ea;V||y(),U||(V(),U=!0),b.add(l,o),o.D=0}}function um(o,l){return lc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ur(f(o.Ea,o,l),kc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const x=new Et(this,this.j,o);let A=this.o;if(this.U&&(A?(A=os(A),Yt(A,this.U)):A=this.U),this.u!==null||this.R||(x.J=A,A=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Rc(this,x,l),d=Xe(this.J),ce(d,"RID",o),ce(d,"CVER",22),this.G&&ce(d,"X-HTTP-Session-Id",this.G),Er(this,d),A&&(this.R?l="headers="+dr(vc(A))+"&"+l:this.u&&Qi(d,this.u,A)),Wi(this.h,x),this.Ra&&ce(d,"TYPE","init"),this.S?(ce(d,"$req",l),ce(d,"SID","null"),x.U=!0,qi(x,d,null)):qi(x,d,l),this.I=2}}else this.I==3&&(o?Sc(this,o):this.i.length==0||cc(this.h)||Sc(this))};function Sc(o,l){var d;l?d=l.l:d=o.V++;const p=Xe(o.J);ce(p,"SID",o.M),ce(p,"RID",d),ce(p,"AID",o.K),Er(o,p),o.u&&o.o&&Qi(p,o.u,o.o),d=new Et(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),l&&(o.i=l.G.concat(o.i)),l=Rc(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Wi(o.h,d),qi(d,p,l)}function Er(o,l){o.H&&ut(o.H,function(d,p){ce(l,p,d)}),o.l&&ut({},function(d,p){ce(l,p,d)})}function Rc(o,l,d){d=Math.min(o.i.length,d);const p=o.l?f(o.l.Ka,o.l,o):null;e:{var x=o.i;let Q=-1;for(;;){const ve=["count="+d];Q==-1?d>0?(Q=x[0].g,ve.push("ofs="+Q)):Q=0:ve.push("ofs="+Q);let se=!0;for(let Ee=0;Ee<d;Ee++){var A=x[Ee].g;const Ze=x[Ee].map;if(A-=Q,A<0)Q=Math.max(0,x[Ee].g-100),se=!1;else try{A="req"+A+"_"||"";try{var D=Ze instanceof Map?Ze:Object.entries(Ze);for(const[nn,At]of D){let St=At;c(At)&&(St=Mi(At)),ve.push(A+nn+"="+encodeURIComponent(St))}}catch(nn){throw ve.push(A+"type="+encodeURIComponent("_badmap")),nn}}catch{p&&p(Ze)}}if(se){D=ve.join("&");break e}}D=void 0}return o=o.i.splice(0,d),l.G=o,D}function Nc(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;V||y(),U||(V(),U=!0),b.add(l,o),o.A=0}}function Ji(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ur(f(o.Da,o),kc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Cc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ur(f(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,De(10),ms(this),Cc(this))};function Xi(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Cc(o){o.g=new Et(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=Xe(o.na);ce(l,"RID","rpc"),ce(l,"SID",o.M),ce(l,"AID",o.K),ce(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&ce(l,"TO",o.ia),ce(l,"TYPE","xmlhttp"),Er(o,l),o.u&&o.o&&Qi(l,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=hs(Xe(l)),d.u=null,d.R=!0,sc(d,o)}n.Va=function(){this.C!=null&&(this.C=null,ms(this),Ji(this),De(19))};function gs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Pc(o,l){var d=null;if(o.g==l){gs(o),Xi(o),o.g=null;var p=2}else if(zi(o.h,l))d=l.G,uc(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var x=o.D;p=cs(),ke(p,new Za(p,d)),ps(o)}else Nc(o);else if(x=l.m,x==3||x==0&&l.X>0||!(p==1&&um(o,l)||p==2&&Ji(o)))switch(d&&d.length>0&&(l=o.h,l.i=l.i.concat(d)),x){case 1:tn(o,5);break;case 4:tn(o,10);break;case 3:tn(o,6);break;default:tn(o,2)}}}function kc(o,l){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*l}function tn(o,l){if(o.j.info("Error code "+l),l==2){var d=f(o.bb,o),p=o.Ua;const x=!p;p=new It(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||mr(p,"https"),hs(p),x?sm(p.toString(),d):im(p.toString(),d)}else De(2);o.I=0,o.l&&o.l.pa(l),Dc(o),Ac(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Dc(o){if(o.I=0,o.ja=[],o.l){const l=hc(o.h);(l.length!=0||o.i.length!=0)&&(C(o.ja,l),C(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function Vc(o,l,d){var p=d instanceof It?Xe(d):new It(d);if(p.g!="")l&&(p.g=l+"."+p.g),pr(p,p.u);else{var x=a.location;p=x.protocol,l=l?l+"."+x.hostname:x.hostname,x=+x.port;const A=new It(null);p&&mr(A,p),l&&(A.g=l),x&&pr(A,x),d&&(A.h=d),p=A}return d=o.G,l=o.wa,d&&l&&ce(p,d,l),ce(p,"VER",o.ka),Er(o,p),p}function jc(o,l,d){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new he(new Ki({ab:d})):new he(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oc(){}n=Oc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ys(){}ys.prototype.g=function(o,l){return new Me(o,l)};function Me(o,l){Se.call(this),this.g=new xc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!_(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Tn(this)}g(Me,Se),Me.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Me.prototype.close=function(){Yi(this.g)},Me.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Mi(o),o=d);l.i.push(new Yf(l.Ya++,o)),l.I==3&&ps(l)},Me.prototype.N=function(){this.g.l=null,delete this.j,Yi(this.g),delete this.g,Me.Z.N.call(this)};function Mc(o){Li.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}g(Mc,Li);function Lc(){Fi.call(this),this.status=1}g(Lc,Fi);function Tn(o){this.g=o}g(Tn,Oc),Tn.prototype.ra=function(){ke(this.g,"a")},Tn.prototype.qa=function(o){ke(this.g,new Mc(o))},Tn.prototype.pa=function(o){ke(this.g,new Lc)},Tn.prototype.oa=function(){ke(this.g,"b")},ys.prototype.createWebChannel=ys.prototype.g,Me.prototype.send=Me.prototype.o,Me.prototype.open=Me.prototype.m,Me.prototype.close=Me.prototype.close,Bh=function(){return new ys},Uh=function(){return cs()},Fh=Xt,Ao={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ls.NO_ERROR=0,ls.TIMEOUT=8,ls.HTTP_ERROR=6,Ps=ls,ec.COMPLETE="complete",Lh=ec,Qa.EventType=cr,cr.OPEN="a",cr.CLOSE="b",cr.ERROR="c",cr.MESSAGE="d",Se.prototype.listen=Se.prototype.J,Ar=Qa,he.prototype.listenOnce=he.prototype.K,he.prototype.getLastError=he.prototype.Ha,he.prototype.getLastErrorCode=he.prototype.ya,he.prototype.getStatus=he.prototype.ca,he.prototype.getResponseJson=he.prototype.La,he.prototype.getResponseText=he.prototype.la,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Fa,Mh=he}).apply(typeof bs<"u"?bs:typeof self<"u"?self:typeof window<"u"?window:{});const Tl="@firebase/firestore",xl="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yn="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new ci("@firebase/firestore");function An(){return ln.logLevel}function M(n,...e){if(ln.logLevel<=X.DEBUG){const t=e.map(ra);ln.debug(`Firestore (${Yn}): ${n}`,...t)}}function yt(n,...e){if(ln.logLevel<=X.ERROR){const t=e.map(ra);ln.error(`Firestore (${Yn}): ${n}`,...t)}}function Un(n,...e){if(ln.logLevel<=X.WARN){const t=e.map(ra);ln.warn(`Firestore (${Yn}): ${n}`,...t)}}function ra(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function W(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,qh(n,r,t)}function qh(n,e,t){let r=`FIRESTORE (${Yn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw yt(r),new Error(r)}function re(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||qh(e,s,r)}function K(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Je{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Dw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ne.UNAUTHENTICATED)))}shutdown(){}}class Vw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class jw{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let i=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mt,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=i;e.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},c=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string",31837,{l:r}),new $h(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string",2055,{h:e}),new Ne(e)}}class Ow{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Mw{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Ow(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ne.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Al{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ze(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){re(this.o===void 0,3512);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Al(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Al(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Fw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function Z(n,e){return n<e?-1:n>e?1:0}function So(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return co(s)===co(i)?Z(s,i):co(s)?1:-1}return Z(n.length,e.length)}const Uw=55296,Bw=57343;function co(n){const e=n.charCodeAt(0);return e>=Uw&&e<=Bw}function Bn(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="__name__";class et{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&W(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof et?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=et.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Z(e.length,t.length)}static compareSegments(e,t){const r=et.isNumericId(e),s=et.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?et.extractNumericId(e).compare(et.extractNumericId(t)):So(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Lt.fromString(e.substring(4,e.length-2))}}class oe extends et{construct(e,t,r){return new oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new oe(t)}static emptyPath(){return new oe([])}}const qw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends et{construct(e,t,r){return new xe(e,t,r)}static isValidIdentifier(e){return qw.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sl}static keyField(){return new xe([Sl])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new j(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new j(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(t)}static emptyPath(){return new xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(oe.fromString(e))}static fromName(e){return new q(oe.fromString(e).popFirst(5))}static empty(){return new q(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new oe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(n,e,t){if(!t)throw new j(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function $w(n,e,t,r){if(e===!0&&r===!0)throw new j(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Rl(n){if(!q.isDocumentKey(n))throw new j(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Nl(n){if(q.isDocumentKey(n))throw new j(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function zh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function ct(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fi(n);throw new j(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function we(n,e){const t={typeString:n};return e&&(t.value=e),t}function es(n,e){if(!zh(n))throw new j(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new j(R.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=-62135596800,Pl=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Pl);return new ae(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Cl)throw new j(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pl}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(es(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:we("string",ae._jsonSchemaVersion),seconds:we("number"),nanoseconds:we("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static fromTimestamp(e){return new G(e)}static min(){return new G(new ae(0,0))}static max(){return new G(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ur=-1;function Hw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new ae(t+1,0):new ae(t,r));return new Bt(s,q.empty(),e)}function zw(n){return new Bt(n.readTime,n.key,Ur)}class Bt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Bt(G.min(),q.empty(),Ur)}static max(){return new Bt(G.max(),q.empty(),Ur)}}function Ww(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==Gw)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):N.reject(t)}static resolve(e){return new N(((t,r)=>{t(e)}))}static reject(e){return new N(((t,r)=>{r(e)}))}static waitFor(e){return new N(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(h=>r(h)))})),a=!0,i===s&&t()}))}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next((s=>s?N.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new N(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let h=0;h<i;h++){const f=h;t(e[f]).next((m=>{a[f]=m,++c,c===i&&r(a)}),(m=>s(m)))}}))}static doWhile(e,t){return new N(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function Qw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class mi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}mi.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=-1;function pi(n){return n==null}function Ks(n){return n===0&&1/n==-1/0}function Yw(n){return typeof n=="number"&&Number.isInteger(n)&&!Ks(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="";function Jw(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=kl(e)),e=Xw(n.get(t),e);return kl(e)}function Xw(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Wh:t+="";break;default:t+=i}}return t}function kl(n){return n+Wh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Kt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Gh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Es(this.root,e,this.comparator,!1)}getReverseIterator(){return new Es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Es(this.root,e,this.comparator,!0)}}class Es{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Te.RED,this.left=s??Te.EMPTY,this.right=i??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Te(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Te.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vl(this.data.getIterator())}getIteratorFrom(e){return new Vl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new be(this.comparator);return t.data=e,t}}class Vl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.fields=e,e.sort(xe.comparator)}static empty(){return new Le([])}unionWith(e){let t=new be(xe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bn(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Kh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Kh("Invalid base64 string: "+i):i}})(e);return new Ae(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const Zw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(n){if(re(!!n,39018),typeof n=="string"){let e=0;const t=Zw.exec(n);if(re(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(n.seconds),nanos:de(n.nanos)}}function de(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $t(n){return typeof n=="string"?Ae.fromBase64String(n):Ae.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="server_timestamp",Yh="__type__",Jh="__previous_value__",Xh="__local_write_time__";function oa(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Yh])==null?void 0:r.stringValue)===Qh}function gi(n){const e=n.mapValue.fields[Jh];return oa(e)?gi(e):e}function Br(n){const e=qt(n.mapValue.fields[Xh].timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t,r,s,i,a,c,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m}}const Qs="(default)";class qr{constructor(e,t){this.projectId=e,this.database=t||Qs}static empty(){return new qr("","")}get isDefaultDatabase(){return this.database===Qs}isEqual(e){return e instanceof qr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="__type__",tv="__max__",Is={mapValue:{}},ed="__vector__",Ys="value";function Ht(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?oa(n)?4:rv(n)?9007199254740991:nv(n)?10:11:W(28295,{value:n})}function lt(n,e){if(n===e)return!0;const t=Ht(n);if(t!==Ht(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Br(n).isEqual(Br(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=qt(s.timestampValue),c=qt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return $t(s.bytesValue).isEqual($t(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return de(s.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return de(s.integerValue)===de(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=de(s.doubleValue),c=de(i.doubleValue);return a===c?Ks(a)===Ks(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Bn(n.arrayValue.values||[],e.arrayValue.values||[],lt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Dl(a)!==Dl(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!lt(a[h],c[h])))return!1;return!0})(n,e);default:return W(52216,{left:n})}}function $r(n,e){return(n.values||[]).find((t=>lt(t,e)))!==void 0}function qn(n,e){if(n===e)return 0;const t=Ht(n),r=Ht(e);if(t!==r)return Z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=de(i.integerValue||i.doubleValue),h=de(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(n,e);case 3:return jl(n.timestampValue,e.timestampValue);case 4:return jl(Br(n),Br(e));case 5:return So(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=$t(i),h=$t(a);return c.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),h=a.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=Z(c[f],h[f]);if(m!==0)return m}return Z(c.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=Z(de(i.latitude),de(a.latitude));return c!==0?c:Z(de(i.longitude),de(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Ol(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var w,S,C,k;const c=i.fields||{},h=a.fields||{},f=(w=c[Ys])==null?void 0:w.arrayValue,m=(S=h[Ys])==null?void 0:S.arrayValue,g=Z(((C=f==null?void 0:f.values)==null?void 0:C.length)||0,((k=m==null?void 0:m.values)==null?void 0:k.length)||0);return g!==0?g:Ol(f,m)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Is.mapValue&&a===Is.mapValue)return 0;if(i===Is.mapValue)return 1;if(a===Is.mapValue)return-1;const c=i.fields||{},h=Object.keys(c),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let g=0;g<h.length&&g<m.length;++g){const w=So(h[g],m[g]);if(w!==0)return w;const S=qn(c[h[g]],f[m[g]]);if(S!==0)return S}return Z(h.length,m.length)})(n.mapValue,e.mapValue);default:throw W(23264,{he:t})}}function jl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=qt(n),r=qt(e),s=Z(t.seconds,r.seconds);return s!==0?s:Z(t.nanos,r.nanos)}function Ol(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=qn(t[s],r[s]);if(i)return i}return Z(t.length,r.length)}function $n(n){return Ro(n)}function Ro(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=qt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return $t(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return q.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ro(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ro(t.fields[a])}`;return s+"}"})(n.mapValue):W(61005,{value:n})}function ks(n){switch(Ht(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gi(n);return e?16+ks(e):16;case 5:return 2*n.stringValue.length;case 6:return $t(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+ks(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Kt(r.fields,((i,a)=>{s+=i.length+ks(a)})),s})(n.mapValue);default:throw W(13486,{value:n})}}function Ml(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function No(n){return!!n&&"integerValue"in n}function aa(n){return!!n&&"arrayValue"in n}function Ll(n){return!!n&&"nullValue"in n}function Fl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ds(n){return!!n&&"mapValue"in n}function nv(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Zh])==null?void 0:r.stringValue)===ed}function kr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Kt(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=kr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=kr(n.arrayValue.values[t]);return e}return{...n}}function rv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===tv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.value=e}static empty(){return new Oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ds(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=kr(t)}setAll(e){let t=xe.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=kr(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ds(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ds(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Kt(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Oe(kr(this.value))}}function td(n){const e=[];return Kt(n.fields,((t,r)=>{const s=new xe([t]);if(Ds(r)){const i=td(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Le(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ce(e,0,G.min(),G.min(),G.min(),Oe.empty(),0)}static newFoundDocument(e,t,r,s){return new Ce(e,1,t,G.min(),r,s,0)}static newNoDocument(e,t){return new Ce(e,2,t,G.min(),G.min(),Oe.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,G.min(),G.min(),Oe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Js{constructor(e,t){this.position=e,this.inclusive=t}}function Ul(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),t.key):r=qn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!lt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Hr{constructor(e,t="asc"){this.field=e,this.dir=t}}function sv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class nd{}class _e extends nd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ov(e,t,r):t==="array-contains"?new lv(e,r):t==="in"?new uv(e,r):t==="not-in"?new hv(e,r):t==="array-contains-any"?new dv(e,r):new _e(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new av(e,r):new cv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(qn(t,this.value)):t!==null&&Ht(this.value)===Ht(t)&&this.matchesComparison(qn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ye extends nd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ye(e,t)}matches(e){return rd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function rd(n){return n.op==="and"}function sd(n){return iv(n)&&rd(n)}function iv(n){for(const e of n.filters)if(e instanceof Ye)return!1;return!0}function Co(n){if(n instanceof _e)return n.field.canonicalString()+n.op.toString()+$n(n.value);if(sd(n))return n.filters.map((e=>Co(e))).join(",");{const e=n.filters.map((t=>Co(t))).join(",");return`${n.op}(${e})`}}function id(n,e){return n instanceof _e?(function(r,s){return s instanceof _e&&r.op===s.op&&r.field.isEqual(s.field)&&lt(r.value,s.value)})(n,e):n instanceof Ye?(function(r,s){return s instanceof Ye&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&id(a,s.filters[c])),!0):!1})(n,e):void W(19439)}function od(n){return n instanceof _e?(function(t){return`${t.field.canonicalString()} ${t.op} ${$n(t.value)}`})(n):n instanceof Ye?(function(t){return t.op.toString()+" {"+t.getFilters().map(od).join(" ,")+"}"})(n):"Filter"}class ov extends _e{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class av extends _e{constructor(e,t){super(e,"in",t),this.keys=ad("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class cv extends _e{constructor(e,t){super(e,"not-in",t),this.keys=ad("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ad(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>q.fromName(r.referenceValue)))}class lv extends _e{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return aa(t)&&$r(t.arrayValue,this.value)}}class uv extends _e{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$r(this.value.arrayValue,t)}}class hv extends _e{constructor(e,t){super(e,"not-in",t)}matches(e){if($r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$r(this.value.arrayValue,t)}}class dv extends _e{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!aa(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>$r(this.value.arrayValue,r)))}}/**
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
 */class fv{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function ql(n,e=null,t=[],r=[],s=null,i=null,a=null){return new fv(n,e,t,r,s,i,a)}function ca(n){const e=K(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Co(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),pi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>$n(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>$n(r))).join(",")),e.Te=t}return e.Te}function la(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!sv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!id(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Bl(n.startAt,e.startAt)&&Bl(n.endAt,e.endAt)}function Po(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function mv(n,e,t,r,s,i,a,c){return new Zn(n,e,t,r,s,i,a,c)}function ua(n){return new Zn(n)}function $l(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function cd(n){return n.collectionGroup!==null}function Dr(n){const e=K(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new be(xe.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(c=c.add(f.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Hr(i,r))})),t.has(xe.keyField().canonicalString())||e.Ie.push(new Hr(xe.keyField(),r))}return e.Ie}function rt(n){const e=K(n);return e.Ee||(e.Ee=pv(e,Dr(n))),e.Ee}function pv(n,e){if(n.limitType==="F")return ql(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Hr(s.field,i)}));const t=n.endAt?new Js(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Js(n.startAt.position,n.startAt.inclusive):null;return ql(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ko(n,e){const t=n.filters.concat([e]);return new Zn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Do(n,e,t){return new Zn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yi(n,e){return la(rt(n),rt(e))&&n.limitType===e.limitType}function ld(n){return`${ca(rt(n))}|lt:${n.limitType}`}function Sn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>od(s))).join(", ")}]`),pi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>$n(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>$n(s))).join(",")),`Target(${r})`})(rt(n))}; limitType=${n.limitType})`}function _i(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Dr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,h){const f=Ul(a,c,h);return a.inclusive?f<=0:f<0})(r.startAt,Dr(r),s)||r.endAt&&!(function(a,c,h){const f=Ul(a,c,h);return a.inclusive?f>=0:f>0})(r.endAt,Dr(r),s))})(n,e)}function gv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ud(n){return(e,t)=>{let r=!1;for(const s of Dr(n)){const i=yv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yv(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):(function(i,a,c){const h=a.data.field(i),f=c.data.field(i);return h!==null&&f!==null?qn(h,f):W(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Kt(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Gh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=new le(q.comparator);function _t(){return _v}const hd=new le(q.comparator);function Sr(...n){let e=hd;for(const t of n)e=e.insert(t.key,t);return e}function dd(n){let e=hd;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function sn(){return Vr()}function fd(){return Vr()}function Vr(){return new gn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const wv=new le(q.comparator),vv=new be(q.comparator);function ee(...n){let e=vv;for(const t of n)e=e.add(t);return e}const bv=new be(Z);function Ev(){return bv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ks(e)?"-0":e}}function md(n){return{integerValue:""+n}}function Iv(n,e){return Yw(e)?md(e):ha(n,e)}/**
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
 */class wi{constructor(){this._=void 0}}function Tv(n,e,t){return n instanceof zr?(function(s,i){const a={fields:{[Yh]:{stringValue:Qh},[Xh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&oa(i)&&(i=gi(i)),i&&(a.fields[Jh]=i),{mapValue:a}})(t,e):n instanceof Wr?gd(n,e):n instanceof Gr?yd(n,e):(function(s,i){const a=pd(s,i),c=Hl(a)+Hl(s.Ae);return No(a)&&No(s.Ae)?md(c):ha(s.serializer,c)})(n,e)}function xv(n,e,t){return n instanceof Wr?gd(n,e):n instanceof Gr?yd(n,e):t}function pd(n,e){return n instanceof Xs?(function(r){return No(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class zr extends wi{}class Wr extends wi{constructor(e){super(),this.elements=e}}function gd(n,e){const t=_d(e);for(const r of n.elements)t.some((s=>lt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Gr extends wi{constructor(e){super(),this.elements=e}}function yd(n,e){let t=_d(e);for(const r of n.elements)t=t.filter((s=>!lt(s,r)));return{arrayValue:{values:t}}}class Xs extends wi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Hl(n){return de(n.integerValue||n.doubleValue)}function _d(n){return aa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,t){this.field=e,this.transform=t}}function Sv(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Wr&&s instanceof Wr||r instanceof Gr&&s instanceof Gr?Bn(r.elements,s.elements,lt):r instanceof Xs&&s instanceof Xs?lt(r.Ae,s.Ae):r instanceof zr&&s instanceof zr})(n.transform,e.transform)}class Rv{constructor(e,t){this.version=e,this.transformResults=t}}class Ge{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ge}static exists(e){return new Ge(void 0,e)}static updateTime(e){return new Ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class vi{}function wd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new bd(n.key,Ge.none()):new ts(n.key,n.data,Ge.none());{const t=n.data,r=Oe.empty();let s=new be(xe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Qt(n.key,r,new Le(s.toArray()),Ge.none())}}function Nv(n,e,t){n instanceof ts?(function(s,i,a){const c=s.value.clone(),h=Wl(s.fieldTransforms,i,a.transformResults);c.setAll(h),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Qt?(function(s,i,a){if(!Vs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Wl(s.fieldTransforms,i,a.transformResults),h=i.data;h.setAll(vd(s)),h.setAll(c),i.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function jr(n,e,t,r){return n instanceof ts?(function(i,a,c,h){if(!Vs(i.precondition,a))return c;const f=i.value.clone(),m=Gl(i.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(n,e,t,r):n instanceof Qt?(function(i,a,c,h){if(!Vs(i.precondition,a))return c;const f=Gl(i.fieldTransforms,h,a),m=a.data;return m.setAll(vd(i)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,e,t,r):(function(i,a,c){return Vs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function Cv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=pd(r.transform,s||null);i!=null&&(t===null&&(t=Oe.empty()),t.set(r.field,i))}return t||null}function zl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Bn(r,s,((i,a)=>Sv(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ts extends vi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qt extends vi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vd(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Wl(n,e,t){const r=new Map;re(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,xv(a,c,t[s]))}return r}function Gl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Tv(i,a,e))}return r}class bd extends vi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pv extends vi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Nv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=jr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=jr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=fd();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const h=wd(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(G.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ee())}isEqual(e){return this.batchId===e.batchId&&Bn(this.mutations,e.mutations,((t,r)=>zl(t,r)))&&Bn(this.baseMutations,e.baseMutations,((t,r)=>zl(t,r)))}}class da{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){re(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return wv})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new da(e,t,r,s)}}/**
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
 */class Dv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Vv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,ne;function jv(n){switch(n){case R.OK:return W(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return W(15467,{code:n})}}function Ed(n){if(n===void 0)return yt("GRPC error has no .code"),R.UNKNOWN;switch(n){case ge.OK:return R.OK;case ge.CANCELLED:return R.CANCELLED;case ge.UNKNOWN:return R.UNKNOWN;case ge.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ge.INTERNAL:return R.INTERNAL;case ge.UNAVAILABLE:return R.UNAVAILABLE;case ge.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ge.NOT_FOUND:return R.NOT_FOUND;case ge.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ge.ABORTED:return R.ABORTED;case ge.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ge.DATA_LOSS:return R.DATA_LOSS;default:return W(39323,{code:n})}}(ne=ge||(ge={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ov(){return new TextEncoder}/**
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
 */const Mv=new Lt([4294967295,4294967295],0);function Kl(n){const e=Ov().encode(n),t=new Oh;return t.update(e),new Uint8Array(t.digest())}function Ql(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Lt([t,r],0),new Lt([s,i],0)]}class fa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Rr(`Invalid padding: ${t}`);if(r<0)throw new Rr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Rr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Rr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Lt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Lt.fromNumber(r)));return s.compare(Mv)===1&&(s=new Lt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Kl(e),[r,s]=Ql(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new fa(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=Kl(e),[r,s]=Ql(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Rr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ns.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new bi(G.min(),s,new le(Z),_t(),ee())}}class ns{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ns(r,t,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Id{constructor(e,t){this.targetId=e,this.Ce=t}}class Td{constructor(e,t,r=Ae.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Yl{constructor(){this.ve=0,this.Fe=Jl(),this.Me=Ae.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ee(),t=ee(),r=ee();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:W(38017,{changeType:i})}})),new ns(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Jl()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,re(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Lv{constructor(e){this.Ge=e,this.ze=new Map,this.je=_t(),this.Je=Ts(),this.He=Ts(),this.Ye=new le(Z)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:W(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Po(i))if(r===0){const a=new q(i.path);this.et(t,a,Ce.newNoDocument(a,G.min()))}else re(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),h=c?this.ct(c,e,a):1;if(h!==0){this.it(t);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,f)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=$t(r).toUint8Array()}catch(h){if(h instanceof Kh)return Un("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new fa(a,s,i)}catch(h){return Un(h instanceof Rr?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Po(c.target)){const h=new q(c.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Ce.newNoDocument(h,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let r=ee();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new bi(e,t,this.Ye,this.je,r);return this.je=_t(),this.Je=Ts(),this.He=Ts(),this.Ye=new le(Z),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Yl,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new be(Z),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new be(Z),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Yl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ts(){return new le(q.comparator)}function Jl(){return new le(q.comparator)}const Fv={asc:"ASCENDING",desc:"DESCENDING"},Uv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bv={and:"AND",or:"OR"};class qv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vo(n,e){return n.useProto3Json||pi(e)?e:{value:e}}function Zs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function $v(n,e){return Zs(n,e.toTimestamp())}function st(n){return re(!!n,49232),G.fromTimestamp((function(t){const r=qt(t);return new ae(r.seconds,r.nanos)})(n))}function ma(n,e){return jo(n,e).canonicalString()}function jo(n,e){const t=(function(s){return new oe(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Ad(n){const e=oe.fromString(n);return re(Pd(e),10190,{key:e.toString()}),e}function Oo(n,e){return ma(n.databaseId,e.path)}function lo(n,e){const t=Ad(e);if(t.get(1)!==n.databaseId.projectId)throw new j(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(Rd(t))}function Sd(n,e){return ma(n.databaseId,e)}function Hv(n){const e=Ad(n);return e.length===4?oe.emptyPath():Rd(e)}function Mo(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Rd(n){return re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Xl(n,e,t){return{name:Oo(n,e),fields:t.value.mapValue.fields}}function zv(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:W(39313,{state:f})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(f,m){return f.useProto3Json?(re(m===void 0||typeof m=="string",58123),Ae.fromBase64String(m||"")):(re(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Ae.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(f){const m=f.code===void 0?R.UNKNOWN:Ed(f.code);return new j(m,f.message||"")})(a);t=new Td(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=lo(n,r.document.name),i=st(r.document.updateTime),a=r.document.createTime?st(r.document.createTime):G.min(),c=new Oe({mapValue:{fields:r.document.fields}}),h=Ce.newFoundDocument(s,i,a,c),f=r.targetIds||[],m=r.removedTargetIds||[];t=new js(f,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=lo(n,r.document),i=r.readTime?st(r.readTime):G.min(),a=Ce.newNoDocument(s,i),c=r.removedTargetIds||[];t=new js([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=lo(n,r.document),i=r.removedTargetIds||[];t=new js([],i,s,null)}else{if(!("filter"in e))return W(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Vv(s,i),c=r.targetId;t=new Id(c,a)}}return t}function Wv(n,e){let t;if(e instanceof ts)t={update:Xl(n,e.key,e.value)};else if(e instanceof bd)t={delete:Oo(n,e.key)};else if(e instanceof Qt)t={update:Xl(n,e.key,e.data),updateMask:t0(e.fieldMask)};else{if(!(e instanceof Pv))return W(16599,{Vt:e.type});t={verify:Oo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof zr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Wr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Gr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Xs)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw W(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:$v(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W(27497)})(n,e.precondition)),t}function Gv(n,e){return n&&n.length>0?(re(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?st(s.updateTime):st(i);return a.isEqual(G.min())&&(a=st(i)),new Rv(a,s.transformResults||[])})(t,e)))):[]}function Kv(n,e){return{documents:[Sd(n,e.path)]}}function Qv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Sd(n,s);const i=(function(f){if(f.length!==0)return Cd(Ye.create(f,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(f){if(f.length!==0)return f.map((m=>(function(w){return{field:Rn(w.field),direction:Xv(w.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Vo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(e.endAt)),{ft:t,parent:s}}function Yv(n){let e=Hv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){re(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(g){const w=Nd(g);return w instanceof Ye&&sd(w)?w.getFilters():[w]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((w=>(function(C){return new Hr(Nn(C.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(w)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let w;return w=typeof g=="object"?g.value:g,pi(w)?null:w})(t.limit));let h=null;t.startAt&&(h=(function(g){const w=!!g.before,S=g.values||[];return new Js(S,w)})(t.startAt));let f=null;return t.endAt&&(f=(function(g){const w=!g.before,S=g.values||[];return new Js(S,w)})(t.endAt)),mv(e,s,a,i,c,"F",h,f)}function Jv(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nd(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Nn(t.unaryFilter.field);return _e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Nn(t.unaryFilter.field);return _e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Nn(t.unaryFilter.field);return _e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Nn(t.unaryFilter.field);return _e.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}})(n):n.fieldFilter!==void 0?(function(t){return _e.create(Nn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ye.create(t.compositeFilter.filters.map((r=>Nd(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W(1026)}})(t.compositeFilter.op))})(n):W(30097,{filter:n})}function Xv(n){return Fv[n]}function Zv(n){return Uv[n]}function e0(n){return Bv[n]}function Rn(n){return{fieldPath:n.canonicalString()}}function Nn(n){return xe.fromServerFormat(n.fieldPath)}function Cd(n){return n instanceof _e?(function(t){if(t.op==="=="){if(Fl(t.value))return{unaryFilter:{field:Rn(t.field),op:"IS_NAN"}};if(Ll(t.value))return{unaryFilter:{field:Rn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Fl(t.value))return{unaryFilter:{field:Rn(t.field),op:"IS_NOT_NAN"}};if(Ll(t.value))return{unaryFilter:{field:Rn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rn(t.field),op:Zv(t.op),value:t.value}}})(n):n instanceof Ye?(function(t){const r=t.getFilters().map((s=>Cd(s)));return r.length===1?r[0]:{compositeFilter:{op:e0(t.op),filters:r}}})(n):W(54877,{filter:n})}function t0(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Pd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t,r,s,i=G.min(),a=G.min(),c=Ae.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new Dt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.yt=e}}function r0(n){const e=Yv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Do(e,e.limit,"L"):e}/**
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
 */class s0{constructor(){this.Cn=new i0}addToCollectionParentIndex(e,t){return this.Cn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Bt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Bt.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class i0{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new be(oe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new be(oe.comparator)).toArray()}}/**
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
 */const Zl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kd=41943040;class je{static withCacheSize(e){return new je(e,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je.DEFAULT_COLLECTION_PERCENTILE=10,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,je.DEFAULT=new je(kd,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),je.DISABLED=new je(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Hn(0)}static cr(){return new Hn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="LruGarbageCollector",o0=1048576;function tu([n,e],[t,r]){const s=Z(n,t);return s===0?Z(e,r):s}class a0{constructor(e){this.Ir=e,this.buffer=new be(tu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();tu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class c0{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){M(eu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xn(t)?M(eu,"Ignoring IndexedDB error during garbage collection: ",t):await Jn(t)}await this.Vr(3e5)}))}}class l0{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return N.resolve(mi.ce);const r=new a0(t);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Zl)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zl):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,h,f;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(r=g,c=Date.now(),this.removeTargets(e,r,t)))).next((g=>(i=g,h=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(f=Date.now(),An()<=X.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(h-c)+`ms
	Removed ${g} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function u0(n,e){return new l0(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(){this.changes=new gn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class d0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&jr(r.mutation,s,Le.empty(),ae.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,ee()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=ee()){const s=sn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Sr();return i.forEach(((c,h)=>{a=a.insert(c,h.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=sn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,ee())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=_t();const a=Vr(),c=(function(){return Vr()})();return t.forEach(((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof Qt)?i=i.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),jr(m.mutation,f,m.mutation.getFieldMask(),ae.now())):a.set(f.key,Le.empty())})),this.recalculateAndSaveOverlays(e,i).next((h=>(h.forEach(((f,m)=>a.set(f,m))),t.forEach(((f,m)=>c.set(f,new d0(m,a.get(f)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=Vr();let s=new le(((a,c)=>a-c)),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((h=>{const f=t.get(h);if(f===null)return;let m=r.get(h)||Le.empty();m=c.applyToLocalView(f,m),r.set(h,m);const g=(s.get(c.batchId)||ee()).add(h);s=s.insert(c.batchId,g)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,g=fd();m.forEach((w=>{if(!i.has(w)){const S=wd(t.get(w),r.get(w));S!==null&&g.set(w,S),i=i.add(w)}})),a.push(this.documentOverlayCache.saveOverlays(e,f,g))}return N.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):N.resolve(sn());let c=Ur,h=i;return a.next((f=>N.forEach(f,((m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(m)?N.resolve():this.remoteDocumentCache.getEntry(e,m).next((w=>{h=h.insert(m,w)}))))).next((()=>this.populateOverlays(e,f,i))).next((()=>this.computeViews(e,h,f,ee()))).next((m=>({batchId:c,changes:dd(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next((r=>{let s=Sr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Sr();return this.indexManager.getCollectionParents(e,i).next((c=>N.forEach(c,(h=>{const f=(function(g,w){return new Zn(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,h.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next((m=>{m.forEach(((g,w)=>{a=a.insert(g,w)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,Ce.newInvalidDocument(m)))}));let c=Sr();return a.forEach(((h,f)=>{const m=i.get(h);m!==void 0&&jr(m.mutation,f,Le.empty(),ae.now()),_i(t,f)&&(c=c.insert(h,f))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return N.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:st(s.createTime)}})(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:r0(s.bundledQuery),readTime:st(s.readTime)}})(t)),N.resolve()}}/**
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
 */class p0{constructor(){this.overlays=new le(q.comparator),this.qr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=sn();return N.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.St(e,t,i)})),N.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const s=sn(),i=t.length+1,a=new q(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===i&&h.largestBatchId>r&&s.set(h.getKey(),h)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new le(((f,m)=>f-m));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let m=i.get(f.largestBatchId);m===null&&(m=sn(),i=i.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=sn(),h=i.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,m)=>c.set(f,m))),!(c.size()>=s)););return N.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Dv(t,r));let i=this.qr.get(t);i===void 0&&(i=ee(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class g0{constructor(){this.sessionToken=Ae.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this.Qr=new be(Ie.$r),this.Ur=new be(Ie.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Ie(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new Ie(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new q(new oe([])),r=new Ie(t,e),s=new Ie(t,e+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new q(new oe([])),r=new Ie(t,e),s=new Ie(t,e+1);let i=ee();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Ie(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return q.comparator(e.key,t.key)||Z(e.Yr,t.Yr)}static Kr(e,t){return Z(e.Yr,t.Yr)||q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new be(Ie.$r)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new kv(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new Ie(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?ia:this.tr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ie(t,0),s=new Ie(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const c=this.Xr(a.Yr);i.push(c)})),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new be(Z);return t.forEach((s=>{const i=new Ie(s,0),a=new Ie(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(c=>{r=r.add(c.Yr)}))})),N.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const a=new Ie(new q(i),0);let c=new be(Z);return this.Zr.forEachWhile((h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.Yr)),!0)}),a),N.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){re(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return N.forEach(t.mutations,(s=>{const i=new Ie(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new Ie(t,0),s=this.Zr.firstAfterOrEqual(r);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e){this.ri=e,this.docs=(function(){return new le(q.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let r=_t();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ce.newInvalidDocument(s))})),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=_t();const a=t.path,c=new q(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Ww(zw(m),r)<=0||(s.has(m.key)||_i(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,r,s){W(9500)}ii(e,t){return N.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new w0(this)}getSize(e){return N.resolve(this.size)}}class w0 extends h0{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),N.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.persistence=e,this.si=new gn((t=>ca(t)),la),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.oi=0,this._i=new pa,this.targetCount=0,this.ai=Hn.ur()}forEachTarget(e,t){return this.si.forEach(((r,s)=>t(s))),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),N.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Hn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Pr(t),N.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),N.waitFor(i).next((()=>s))}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,t){this.ui={},this.overlays={},this.ci=new mi(0),this.li=!1,this.li=!0,this.hi=new g0,this.referenceDelegate=e(this),this.Pi=new v0(this),this.indexManager=new s0,this.remoteDocumentCache=(function(s){return new _0(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new n0(t),this.Ii=new m0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new p0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new y0(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new b0(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,t){return N.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class b0 extends Kw{constructor(e){super(),this.currentSequenceNumber=e}}class ga{constructor(e){this.persistence=e,this.Ri=new pa,this.Vi=null}static mi(e){return new ga(e)}get fi(){if(this.Vi)return this.Vi;throw W(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.fi,(r=>{const s=q.fromPath(r);return this.gi(e,s).next((i=>{i||t.removeEntry(s,G.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return N.or([()=>N.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ei{constructor(e,t){this.persistence=e,this.pi=new gn((r=>Jw(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=u0(this,t)}static mi(e,t){return new ei(e,t)}Ei(){}di(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return N.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?N.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,t).next((c=>{c||(r++,i.removeEntry(a,G.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),N.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ks(e.data.value)),t}br(e,t,r){return N.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=ee(),s=ee();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ya(e,t.fromCache,r,s)}}/**
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
 */class E0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class I0{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Xp()?8:Qw(Pe())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new E0;return this.Ss(e,t,a).next((c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)}))})).next((()=>i.result))}bs(e,t,r,s){return r.documentReadCount<this.fs?(An()<=X.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Sn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),N.resolve()):(An()<=X.DEBUG&&M("QueryEngine","Query:",Sn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(An()<=X.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Sn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rt(t))):N.resolve())}ys(e,t){if($l(t))return N.resolve(null);let r=rt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Do(t,null,"F"),r=rt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=ee(...i);return this.ps.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((h=>{const f=this.Ds(t,c);return this.Cs(t,f,a,h.readTime)?this.ys(e,Do(t,null,"F")):this.vs(e,f,t,h)}))))})))))}ws(e,t,r,s){return $l(t)||s.isEqual(G.min())?N.resolve(null):this.ps.getDocuments(e,r).next((i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?N.resolve(null):(An()<=X.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Sn(t)),this.vs(e,a,t,Hw(s,Ur)).next((c=>c)))}))}Ds(e,t){let r=new be(ud(e));return t.forEach(((s,i)=>{_i(e,i)&&(r=r.add(i))})),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return An()<=X.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Sn(t)),this.ps.getDocumentsMatchingQuery(e,t,Bt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="LocalStore",T0=3e8;class x0{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new le(Z),this.xs=new gn((i=>ca(i)),la),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new f0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function A0(n,e,t,r){return new x0(n,e,t,r)}async function Vd(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let h=ee();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of i){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(r,h).next((f=>({Ls:f,removedBatchIds:a,addedBatchIds:c})))}))}))}function S0(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,h,f,m){const g=f.batch,w=g.keys();let S=N.resolve();return w.forEach((C=>{S=S.next((()=>m.getEntry(h,C))).next((k=>{const P=f.docVersions.get(C);re(P!==null,48541),k.version.compareTo(P)<0&&(g.applyToRemoteDocument(k,f),k.isValidDocument()&&(k.setReadTime(f.commitVersion),m.addEntry(k)))}))})),S.next((()=>c.mutationQueue.removeMutationBatch(h,g)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let h=ee();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function jd(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function R0(n,e){const t=K(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach(((m,g)=>{const w=s.get(g);if(!w)return;c.push(t.Pi.removeMatchingKeys(i,m.removedDocuments,g).next((()=>t.Pi.addMatchingKeys(i,m.addedDocuments,g))));let S=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(Ae.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),s=s.insert(g,S),(function(k,P,$){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=T0?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(w,S,m)&&c.push(t.Pi.updateTargetData(i,S))}));let h=_t(),f=ee();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),c.push(N0(i,a,e.documentUpdates).next((m=>{h=m.ks,f=m.qs}))),!r.isEqual(G.min())){const m=t.Pi.getLastRemoteSnapshotVersion(i).next((g=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(m)}return N.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,h,f))).next((()=>h))})).then((i=>(t.Ms=s,i)))}function N0(n,e,t){let r=ee(),s=ee();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=_t();return t.forEach(((c,h)=>{const f=i.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(G.min())?(e.removeEntry(c,h.readTime),a=a.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(h),a=a.insert(c,h)):M(_a,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)})),{ks:a,qs:s}}))}function C0(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=ia),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function P0(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.Pi.getTargetData(r,e).next((i=>i?(s=i,N.resolve(s)):t.Pi.allocateTargetId(r).next((a=>(s=new Dt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function Lo(n,e,t){const r=K(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Xn(a))throw a;M(_a,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function nu(n,e,t){const r=K(n);let s=G.min(),i=ee();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,f,m){const g=K(h),w=g.xs.get(m);return w!==void 0?N.resolve(g.Ms.get(w)):g.Pi.getTargetData(f,m)})(r,a,rt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next((h=>{i=h}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:G.min(),t?i:ee()))).next((c=>(k0(r,gv(e),c),{documents:c,Qs:i})))))}function k0(n,e,t){let r=n.Os.get(e)||G.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Os.set(e,r)}class ru{constructor(){this.activeTargetIds=Ev()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class D0{constructor(){this.Mo=new ru,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ru,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class V0{Oo(e){}shutdown(){}}/**
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
 */const su="ConnectivityMonitor";class iu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){M(su,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){M(su,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xs=null;function Fo(){return xs===null?xs=(function(){return 268435456+Math.round(2147483648*Math.random())})():xs++,"0x"+xs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="RestConnection",j0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class O0{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Qs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=Fo(),c=this.zo(e,t.toUriEncodedString());M(uo,`Sending RPC '${e}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,i);const{host:f}=new URL(c),m=Wn(f);return this.Jo(e,c,h,r,m).then((g=>(M(uo,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw Un(uo,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",r),g}))}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Yn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,t){const r=j0[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="WebChannelConnection";class L0 extends O0{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Fo();return new Promise(((c,h)=>{const f=new Mh;f.setWithCredentials(!0),f.listenOnce(Lh.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case Ps.NO_ERROR:const g=f.getResponseJson();M(Re,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case Ps.TIMEOUT:M(Re,`RPC '${e}' ${a} timed out`),h(new j(R.DEADLINE_EXCEEDED,"Request time out"));break;case Ps.HTTP_ERROR:const w=f.getStatus();if(M(Re,`RPC '${e}' ${a} failed with status:`,w,"response text:",f.getResponseText()),w>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const k=(function($){const B=$.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(B)>=0?B:R.UNKNOWN})(C.status);h(new j(k,C.message))}else h(new j(R.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new j(R.UNAVAILABLE,"Connection failed."));break;default:W(9055,{l_:e,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{M(Re,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(s);M(Re,`RPC '${e}' ${a} sending request:`,s),f.send(t,"POST",m,r,15)}))}T_(e,t,r){const s=Fo(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Bh(),c=Uh(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const m=i.join("");M(Re,`Creating RPC '${e}' stream ${s}: ${m}`,h);const g=a.createWebChannel(m,h);this.I_(g);let w=!1,S=!1;const C=new M0({Yo:P=>{S?M(Re,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(w||(M(Re,`Opening RPC '${e}' stream ${s} transport.`),g.open(),w=!0),M(Re,`RPC '${e}' stream ${s} sending:`,P),g.send(P))},Zo:()=>g.close()}),k=(P,$,B)=>{P.listen($,(O=>{try{B(O)}catch(H){setTimeout((()=>{throw H}),0)}}))};return k(g,Ar.EventType.OPEN,(()=>{S||(M(Re,`RPC '${e}' stream ${s} transport opened.`),C.o_())})),k(g,Ar.EventType.CLOSE,(()=>{S||(S=!0,M(Re,`RPC '${e}' stream ${s} transport closed`),C.a_(),this.E_(g))})),k(g,Ar.EventType.ERROR,(P=>{S||(S=!0,Un(Re,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),C.a_(new j(R.UNAVAILABLE,"The operation could not be completed")))})),k(g,Ar.EventType.MESSAGE,(P=>{var $;if(!S){const B=P.data[0];re(!!B,16349);const O=B,H=(O==null?void 0:O.error)||(($=O[0])==null?void 0:$.error);if(H){M(Re,`RPC '${e}' stream ${s} received error:`,H);const V=H.status;let U=(function(v){const I=ge[v];if(I!==void 0)return Ed(I)})(V),b=H.message;U===void 0&&(U=R.INTERNAL,b="Unknown error status: "+V+" with message "+H.message),S=!0,C.a_(new j(U,b)),g.close()}else M(Re,`RPC '${e}' stream ${s} received:`,B),C.u_(B)}})),k(c,Fh.STAT_EVENT,(P=>{P.stat===Ao.PROXY?M(Re,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Ao.NOPROXY&&M(Re,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function ho(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n){return new qv(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="PersistentStream";class Md{constructor(e,t,r,s,i,a,c,h){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Od(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(yt(t.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new j(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return M(ou,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(M(ou,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class F0 extends Md{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=zv(this.serializer,e),r=(function(i){if(!("targetChange"in i))return G.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?G.min():a.readTime?st(a.readTime):G.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Mo(this.serializer),t.addTarget=(function(i,a){let c;const h=a.target;if(c=Po(h)?{documents:Kv(i,h)}:{query:Qv(i,h).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=xd(i,a.resumeToken);const f=Vo(i,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(G.min())>0){c.readTime=Zs(i,a.snapshotVersion.toTimestamp());const f=Vo(i,a.expectedCount);f!==null&&(c.expectedCount=f)}return c})(this.serializer,e);const r=Jv(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Mo(this.serializer),t.removeTarget=e,this.q_(t)}}class U0 extends Md{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Gv(e.writeResults,e.commitTime),r=st(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Mo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Wv(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{}class q0 extends B0{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new j(R.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,jo(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(R.UNKNOWN,i.toString())}))}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(e,jo(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(R.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class $0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(yt(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="RemoteStore";class H0{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{yn(this)&&(M(un,"Restarting streams for network reachability change."),await(async function(h){const f=K(h);f.Ea.add(4),await rs(f),f.Ra.set("Unknown"),f.Ea.delete(4),await Ii(f)})(this))}))})),this.Ra=new $0(r,s)}}async function Ii(n){if(yn(n))for(const e of n.da)await e(!0)}async function rs(n){for(const e of n.da)await e(!1)}function Ld(n,e){const t=K(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ea(t)?ba(t):er(t).O_()&&va(t,e))}function wa(n,e){const t=K(n),r=er(t);t.Ia.delete(e),r.O_()&&Fd(t,e),t.Ia.size===0&&(r.O_()?r.L_():yn(t)&&t.Ra.set("Unknown"))}function va(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}er(n).Y_(e)}function Fd(n,e){n.Va.Ue(e),er(n).Z_(e)}function ba(n){n.Va=new Lv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),er(n).start(),n.Ra.ua()}function Ea(n){return yn(n)&&!er(n).x_()&&n.Ia.size>0}function yn(n){return K(n).Ea.size===0}function Ud(n){n.Va=void 0}async function z0(n){n.Ra.set("Online")}async function W0(n){n.Ia.forEach(((e,t)=>{va(n,e)}))}async function G0(n,e){Ud(n),Ea(n)?(n.Ra.ha(e),ba(n)):n.Ra.set("Unknown")}async function K0(n,e,t){if(n.Ra.set("Online"),e instanceof Td&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))})(n,e)}catch(r){M(un,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ti(n,r)}else if(e instanceof js?n.Va.Ze(e):e instanceof Id?n.Va.st(e):n.Va.tt(e),!t.isEqual(G.min()))try{const r=await jd(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach(((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=i.Ia.get(f);m&&i.Ia.set(f,m.withResumeToken(h.resumeToken,a))}})),c.targetMismatches.forEach(((h,f)=>{const m=i.Ia.get(h);if(!m)return;i.Ia.set(h,m.withResumeToken(Ae.EMPTY_BYTE_STRING,m.snapshotVersion)),Fd(i,h);const g=new Dt(m.target,h,f,m.sequenceNumber);va(i,g)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){M(un,"Failed to raise snapshot:",r),await ti(n,r)}}async function ti(n,e,t){if(!Xn(e))throw e;n.Ea.add(1),await rs(n),n.Ra.set("Offline"),t||(t=()=>jd(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(un,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ii(n)}))}function Bd(n,e){return e().catch((t=>ti(n,t,e)))}async function Ti(n){const e=K(n),t=zt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ia;for(;Q0(e);)try{const s=await C0(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,Y0(e,s)}catch(s){await ti(e,s)}qd(e)&&$d(e)}function Q0(n){return yn(n)&&n.Ta.length<10}function Y0(n,e){n.Ta.push(e);const t=zt(n);t.O_()&&t.X_&&t.ea(e.mutations)}function qd(n){return yn(n)&&!zt(n).x_()&&n.Ta.length>0}function $d(n){zt(n).start()}async function J0(n){zt(n).ra()}async function X0(n){const e=zt(n);for(const t of n.Ta)e.ea(t.mutations)}async function Z0(n,e,t){const r=n.Ta.shift(),s=da.from(r,e,t);await Bd(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Ti(n)}async function eb(n,e){e&&zt(n).X_&&await(async function(r,s){if((function(a){return jv(a)&&a!==R.ABORTED})(s.code)){const i=r.Ta.shift();zt(r).B_(),await Bd(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ti(r)}})(n,e),qd(n)&&$d(n)}async function au(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),M(un,"RemoteStore received new credentials");const r=yn(t);t.Ea.add(3),await rs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ii(t)}async function tb(n,e){const t=K(n);e?(t.Ea.delete(2),await Ii(t)):e||(t.Ea.add(2),await rs(t),t.Ra.set("Unknown"))}function er(n){return n.ma||(n.ma=(function(t,r,s){const i=K(t);return i.sa(),new F0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:z0.bind(null,n),t_:W0.bind(null,n),r_:G0.bind(null,n),H_:K0.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Ea(n)?ba(n):n.Ra.set("Unknown")):(await n.ma.stop(),Ud(n))}))),n.ma}function zt(n){return n.fa||(n.fa=(function(t,r,s){const i=K(t);return i.sa(),new U0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:J0.bind(null,n),r_:eb.bind(null,n),ta:X0.bind(null,n),na:Z0.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Ti(n)):(await n.fa.stop(),n.Ta.length>0&&(M(un,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Ia(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ta(n,e){if(yt("AsyncQueue",`${e}: ${n}`),Xn(n))return new j(R.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{static emptySet(e){return new jn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=Sr(),this.sortedSet=new le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof jn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new jn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this.ga=new le(q.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):W(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class zn{constructor(e,t,r,s,i,a,c,h,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new zn(e,t,jn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class rb{constructor(){this.queries=lu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=K(t),i=s.queries;s.queries=lu(),i.forEach(((a,c)=>{for(const h of c.Sa)h.onError(r)}))})(this,new j(R.ABORTED,"Firestore shutting down"))}}function lu(){return new gn((n=>ld(n)),yi)}async function Hd(n,e){const t=K(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new nb,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Ta(a,`Initialization of query '${Sn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&xa(t)}async function zd(n,e){const t=K(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function sb(n,e){const t=K(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&xa(t)}function ib(n,e,t){const r=K(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function xa(n){n.Ca.forEach((e=>{e.next()}))}var Uo,uu;(uu=Uo||(Uo={})).Ma="default",uu.Cache="cache";class Wd{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new zn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=zn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Uo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.key=e}}class Kd{constructor(e){this.key=e}}class ob{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ee(),this.mutatedKeys=ee(),this.eu=ud(e),this.tu=new jn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new cu,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,g)=>{const w=s.get(m),S=_i(this.query,g)?g:null,C=!!w&&this.mutatedKeys.has(w.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let P=!1;w&&S?w.data.isEqual(S.data)?C!==k&&(r.track({type:3,doc:S}),P=!0):this.su(w,S)||(r.track({type:2,doc:S}),P=!0,(h&&this.eu(S,h)>0||f&&this.eu(S,f)<0)&&(c=!0)):!w&&S?(r.track({type:0,doc:S}),P=!0):w&&!S&&(r.track({type:1,doc:w}),P=!0,(h||f)&&(c=!0)),P&&(S?(a=a.add(S),i=k?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((m,g)=>(function(S,C){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{Rt:P})}};return k(S)-k(C)})(m.type,g.type)||this.eu(m.doc,g.doc))),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,f=h!==this.Za;return this.Za=h,a.length!==0||f?{snapshot:new zn(this.query,e.tu,i,a,e.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new cu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ee(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new Kd(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new Gd(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=ee();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return zn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Aa="SyncEngine";class ab{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class cb{constructor(e){this.key=e,this.hu=!1}}class lb{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new gn((c=>ld(c)),yi),this.Iu=new Map,this.Eu=new Set,this.du=new le(q.comparator),this.Au=new Map,this.Ru=new pa,this.Vu={},this.mu=new Map,this.fu=Hn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ub(n,e,t=!0){const r=ef(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Qd(r,e,t,!0),s}async function hb(n,e){const t=ef(n);await Qd(t,e,!0,!1)}async function Qd(n,e,t,r){const s=await P0(n.localStore,rt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await db(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ld(n.remoteStore,s),c}async function db(n,e,t,r,s){n.pu=(g,w,S)=>(async function(k,P,$,B){let O=P.view.ru($);O.Cs&&(O=await nu(k.localStore,P.query,!1).then((({documents:b})=>P.view.ru(b,O))));const H=B&&B.targetChanges.get(P.targetId),V=B&&B.targetMismatches.get(P.targetId)!=null,U=P.view.applyChanges(O,k.isPrimaryClient,H,V);return du(k,P.targetId,U.au),U.snapshot})(n,g,w,S);const i=await nu(n.localStore,e,!0),a=new ob(e,i.Qs),c=a.ru(i.documents),h=ns.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,h);du(n,t,f.au);const m=new ab(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),f.snapshot}async function fb(n,e,t){const r=K(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!yi(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Lo(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&wa(r.remoteStore,s.targetId),Bo(r,s.targetId)})).catch(Jn)):(Bo(r,s.targetId),await Lo(r.localStore,s.targetId,!0))}async function mb(n,e){const t=K(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),wa(t.remoteStore,r.targetId))}async function pb(n,e,t){const r=Eb(n);try{const s=await(function(a,c){const h=K(a),f=ae.now(),m=c.reduce(((S,C)=>S.add(C.key)),ee());let g,w;return h.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let C=_t(),k=ee();return h.Ns.getEntries(S,m).next((P=>{C=P,C.forEach((($,B)=>{B.isValidDocument()||(k=k.add($))}))})).next((()=>h.localDocuments.getOverlayedDocuments(S,C))).next((P=>{g=P;const $=[];for(const B of c){const O=Cv(B,g.get(B.key).overlayedDocument);O!=null&&$.push(new Qt(B.key,O,td(O.value.mapValue),Ge.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,$,c)})).next((P=>{w=P;const $=P.applyToLocalDocumentSet(g,k);return h.documentOverlayCache.saveOverlays(S,P.batchId,$)}))})).then((()=>({batchId:w.batchId,changes:dd(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,h){let f=a.Vu[a.currentUser.toKey()];f||(f=new le(Z)),f=f.insert(c,h),a.Vu[a.currentUser.toKey()]=f})(r,s.batchId,t),await ss(r,s.changes),await Ti(r.remoteStore)}catch(s){const i=Ta(s,"Failed to persist write");t.reject(i)}}async function Yd(n,e){const t=K(n);try{const r=await R0(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Au.get(i);a&&(re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?re(a.hu,14607):s.removedDocuments.size>0&&(re(a.hu,42227),a.hu=!1))})),await ss(t,r,e)}catch(r){await Jn(r)}}function hu(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const h=K(a);h.onlineState=c;let f=!1;h.queries.forEach(((m,g)=>{for(const w of g.Sa)w.va(c)&&(f=!0)})),f&&xa(h)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gb(n,e,t){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new le(q.comparator);a=a.insert(i,Ce.newNoDocument(i,G.min()));const c=ee().add(i),h=new bi(G.min(),new Map,new le(Z),a,c);await Yd(r,h),r.du=r.du.remove(i),r.Au.delete(e),Sa(r)}else await Lo(r.localStore,e,!1).then((()=>Bo(r,e,t))).catch(Jn)}async function yb(n,e){const t=K(n),r=e.batch.batchId;try{const s=await S0(t.localStore,e);Xd(t,r,null),Jd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ss(t,s)}catch(s){await Jn(s)}}async function _b(n,e,t){const r=K(n);try{const s=await(function(a,c){const h=K(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let m;return h.mutationQueue.lookupMutationBatch(f,c).next((g=>(re(g!==null,37113),m=g.keys(),h.mutationQueue.removeMutationBatch(f,g)))).next((()=>h.mutationQueue.performConsistencyCheck(f))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,c))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m))).next((()=>h.localDocuments.getDocuments(f,m)))}))})(r.localStore,e);Xd(r,e,t),Jd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ss(r,s)}catch(s){await Jn(s)}}function Jd(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Xd(n,e,t){const r=K(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Bo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||Zd(n,r)}))}function Zd(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(wa(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Sa(n))}function du(n,e,t){for(const r of t)r instanceof Gd?(n.Ru.addReference(r.key,e),wb(n,r)):r instanceof Kd?(M(Aa,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Zd(n,r.key)):W(19791,{wu:r})}function wb(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(M(Aa,"New document in limbo: "+t),n.Eu.add(r),Sa(n))}function Sa(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new q(oe.fromString(e)),r=n.fu.next();n.Au.set(r,new cb(t)),n.du=n.du.insert(t,r),Ld(n.remoteStore,new Dt(rt(ua(t.path)),r,"TargetPurposeLimboResolution",mi.ce))}}async function ss(n,e,t){const r=K(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,h)=>{a.push(r.pu(h,e,t).then((f=>{var m;if((f||t)&&r.isPrimaryClient){const g=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,g?"current":"not-current")}if(f){s.push(f);const g=ya.As(h.targetId,f);i.push(g)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(h,f){const m=K(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>N.forEach(f,(w=>N.forEach(w.Es,(S=>m.persistence.referenceDelegate.addReference(g,w.targetId,S))).next((()=>N.forEach(w.ds,(S=>m.persistence.referenceDelegate.removeReference(g,w.targetId,S)))))))))}catch(g){if(!Xn(g))throw g;M(_a,"Failed to update sequence numbers: "+g)}for(const g of f){const w=g.targetId;if(!g.fromCache){const S=m.Ms.get(w),C=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(C);m.Ms=m.Ms.insert(w,k)}}})(r.localStore,i))}async function vb(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){M(Aa,"User change. New user:",e.toKey());const r=await Vd(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((c=>{c.forEach((h=>{h.reject(new j(R.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ss(t,r.Ls)}}function bb(n,e){const t=K(n),r=t.Au.get(e);if(r&&r.hu)return ee().add(r.key);{let s=ee();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function ef(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gb.bind(null,e),e.Pu.H_=sb.bind(null,e.eventManager),e.Pu.yu=ib.bind(null,e.eventManager),e}function Eb(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_b.bind(null,e),e}class ni{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ei(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return A0(this.persistence,new I0,e.initialUser,this.serializer)}Cu(e){return new Dd(ga.mi,this.serializer)}Du(e){return new D0}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ni.provider={build:()=>new ni};class Ib extends ni{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){re(this.persistence.referenceDelegate instanceof ei,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new c0(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?je.withCacheSize(this.cacheSizeBytes):je.DEFAULT;return new Dd((r=>ei.mi(r,t)),this.serializer)}}class qo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vb.bind(null,this.syncEngine),await tb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new rb})()}createDatastore(e){const t=Ei(e.databaseInfo.databaseId),r=(function(i){return new L0(i)})(e.databaseInfo);return(function(i,a,c,h){return new q0(i,a,c,h)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new H0(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>hu(this.syncEngine,t,0)),(function(){return iu.v()?new iu:new V0})())}createSyncEngine(e,t){return(function(s,i,a,c,h,f,m){const g=new lb(s,i,a,c,h,f);return m&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=K(s);M(un,"RemoteStore shutting down."),i.Ea.add(5),await rs(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}qo.provider={build:()=>new qo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):yt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="FirestoreClient";class Tb{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ne.UNAUTHENTICATED,this.clientId=sa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{M(Wt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(M(Wt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ta(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function fo(n,e){n.asyncQueue.verifyOperationInProgress(),M(Wt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Vd(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function fu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await xb(n);M(Wt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>au(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>au(e.remoteStore,s))),n._onlineComponents=e}async function xb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(Wt,"Using user provided OfflineComponentProvider");try{await fo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Un("Error using user provided cache. Falling back to memory cache: "+t),await fo(n,new ni)}}else M(Wt,"Using default OfflineComponentProvider"),await fo(n,new Ib(void 0));return n._offlineComponents}async function nf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(Wt,"Using user provided OnlineComponentProvider"),await fu(n,n._uninitializedComponentsProvider._online)):(M(Wt,"Using default OnlineComponentProvider"),await fu(n,new qo))),n._onlineComponents}function Ab(n){return nf(n).then((e=>e.syncEngine))}async function rf(n){const e=await nf(n),t=e.eventManager;return t.onListen=ub.bind(null,e.syncEngine),t.onUnlisten=fb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=mb.bind(null,e.syncEngine),t}function Sb(n,e,t={}){const r=new mt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,h,f){const m=new tf({next:w=>{m.Nu(),a.enqueueAndForget((()=>zd(i,g)));const S=w.docs.has(c);!S&&w.fromCache?f.reject(new j(R.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&h&&h.source==="server"?f.reject(new j(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),g=new Wd(ua(c.path),m,{includeMetadataChanges:!0,qa:!0});return Hd(i,g)})(await rf(n),n.asyncQueue,e,t,r))),r.promise}function Rb(n,e,t={}){const r=new mt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,h,f){const m=new tf({next:w=>{m.Nu(),a.enqueueAndForget((()=>zd(i,g))),w.fromCache&&h.source==="server"?f.reject(new j(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),g=new Wd(c,m,{includeMetadataChanges:!0,qa:!0});return Hd(i,g)})(await rf(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function sf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="firestore.googleapis.com",pu=!0;class gu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=of,this.ssl=pu}else this.host=e.host,this.ssl=e.ssl??pu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<o0)throw new j(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$w("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sf(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Dw;switch(r.type){case"firstParty":return new Mw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=mu.get(t);r&&(M("ComponentProvider","Removing Datastore"),mu.delete(t),r.terminate())})(this),Promise.resolve()}}function Nb(n,e,t,r={}){var f;n=ct(n,xi);const s=Wn(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(zu(`https://${c}`),Wu("Firestore",!0)),i.host!==of&&i.host!==c&&Un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...i,host:c,ssl:s,emulatorOptions:r};if(!Ut(h,a)&&(n._setSettings(h),r.mockUserToken)){let m,g;if(typeof r.mockUserToken=="string")m=r.mockUserToken,g=Ne.MOCK_USER;else{m=Hp(r.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new j(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ne(w)}n._authCredentials=new Vw(new $h(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _n(this.firestore,e,this._query)}}class fe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fe(this.firestore,e,this._key)}toJSON(){return{type:fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(es(t,fe._jsonSchema))return new fe(e,r||null,new q(oe.fromString(t.referencePath)))}}fe._jsonSchemaVersion="firestore/documentReference/1.0",fe._jsonSchema={type:we("string",fe._jsonSchemaVersion),referencePath:we("string")};class Ft extends _n{constructor(e,t,r){super(e,t,ua(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fe(this.firestore,null,new q(e))}withConverter(e){return new Ft(this.firestore,e,this._path)}}function Vt(n,e,...t){if(n=me(n),Hh("collection","path",e),n instanceof xi){const r=oe.fromString(e,...t);return Nl(r),new Ft(n,null,r)}{if(!(n instanceof fe||n instanceof Ft))throw new j(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return Nl(r),new Ft(n.firestore,null,r)}}function He(n,e,...t){if(n=me(n),arguments.length===1&&(e=sa.newId()),Hh("doc","path",e),n instanceof xi){const r=oe.fromString(e,...t);return Rl(r),new fe(n,null,new q(r))}{if(!(n instanceof fe||n instanceof Ft))throw new j(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return Rl(r),new fe(n.firestore,n instanceof Ft?n.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="AsyncQueue";class _u{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Od(this,"async_queue_retry"),this._c=()=>{const r=ho();r&&M(yu,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=ho();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ho();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new mt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Xn(e))throw e;M(yu,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,yt("INTERNAL UNHANDLED ERROR: ",wu(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Ia.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&W(47125,{Pc:wu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function wu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class tr extends xi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new _u,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _u(e),this._firestoreClient=void 0,await e}}}function Cb(n,e){const t=typeof n=="object"?n:Ko(),r=typeof n=="string"?n:Qs,s=mn(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=qp("firestore");i&&Nb(s,...i)}return s}function Ra(n){if(n._terminated)throw new j(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Pb(n),n._firestoreClient}function Pb(n){var r,s,i;const e=n._freezeSettings(),t=(function(c,h,f,m){return new ev(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,sf(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Tb(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qe(Ae.fromBase64String(e))}catch(t){throw new j(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qe(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(es(e,qe._jsonSchema))return qe.fromBase64String(e.bytes)}}qe._jsonSchemaVersion="firestore/bytes/1.0",qe._jsonSchema={type:we("string",qe._jsonSchemaVersion),bytes:we("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:it._jsonSchemaVersion}}static fromJSON(e){if(es(e,it._jsonSchema))return new it(e.latitude,e.longitude)}}it._jsonSchemaVersion="firestore/geoPoint/1.0",it._jsonSchema={type:we("string",it._jsonSchemaVersion),latitude:we("number"),longitude:we("number")};/**
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
 */class ot{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ot._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(es(e,ot._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ot(e.vectorValues);throw new j(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ot._jsonSchemaVersion="firestore/vectorValue/1.0",ot._jsonSchema={type:we("string",ot._jsonSchemaVersion),vectorValues:we("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=/^__.*__$/;class Db{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new ts(e,this.data,t,this.fieldTransforms)}}class af{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Qt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function cf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ac:n})}}class Na{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Na({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ri(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(cf(this.Ac)&&kb.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Vb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ei(e)}Cc(e,t,r,s=!1){return new Na({Ac:e,methodName:t,Dc:r,path:xe.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ri(n){const e=n._freezeSettings(),t=Ei(n._databaseId);return new Vb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function lf(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Pa("Data must be an object, but it was:",a,r);const c=uf(r,a);let h,f;if(i.merge)h=new Le(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const w=$o(e,g,t);if(!a.contains(w))throw new j(R.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);df(m,w)||m.push(w)}h=new Le(m),f=a.fieldTransforms.filter((g=>h.covers(g.field)))}else h=null,f=a.fieldTransforms;return new Db(new Oe(c),h,f)}class Ni extends Si{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ni}}class Ca extends Si{_toFieldTransform(e){return new Av(e.path,new zr)}isEqual(e){return e instanceof Ca}}function jb(n,e,t,r){const s=n.Cc(1,e,t);Pa("Data must be an object, but it was:",s,r);const i=[],a=Oe.empty();Kt(r,((h,f)=>{const m=ka(e,h,t);f=me(f);const g=s.yc(m);if(f instanceof Ni)i.push(m);else{const w=is(f,g);w!=null&&(i.push(m),a.set(m,w))}}));const c=new Le(i);return new af(a,c,s.fieldTransforms)}function Ob(n,e,t,r,s,i){const a=n.Cc(1,e,t),c=[$o(e,r,t)],h=[s];if(i.length%2!=0)throw new j(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)c.push($o(e,i[w])),h.push(i[w+1]);const f=[],m=Oe.empty();for(let w=c.length-1;w>=0;--w)if(!df(f,c[w])){const S=c[w];let C=h[w];C=me(C);const k=a.yc(S);if(C instanceof Ni)f.push(S);else{const P=is(C,k);P!=null&&(f.push(S),m.set(S,P))}}const g=new Le(f);return new af(m,g,a.fieldTransforms)}function Mb(n,e,t,r=!1){return is(t,n.Cc(r?4:3,e))}function is(n,e){if(hf(n=me(n)))return Pa("Unsupported field value:",e,n),uf(n,e);if(n instanceof Si)return(function(r,s){if(!cf(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let h=is(c,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),i.push(h),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Iv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ae.fromDate(r);return{timestampValue:Zs(s.serializer,i)}}if(r instanceof ae){const i=new ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zs(s.serializer,i)}}if(r instanceof it)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qe)return{bytesValue:xd(s.serializer,r._byteString)};if(r instanceof fe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ma(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ot)return(function(a,c){return{mapValue:{fields:{[Zh]:{stringValue:ed},[Ys]:{arrayValue:{values:a.toArray().map((f=>{if(typeof f!="number")throw c.Sc("VectorValues must only contain numeric values.");return ha(c.serializer,f)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${fi(r)}`)})(n,e)}function uf(n,e){const t={};return Gh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kt(n,((r,s)=>{const i=is(s,e.mc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function hf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof it||n instanceof qe||n instanceof fe||n instanceof Si||n instanceof ot)}function Pa(n,e,t){if(!hf(t)||!zh(t)){const r=fi(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function $o(n,e,t){if((e=me(e))instanceof Ai)return e._internalPath;if(typeof e=="string")return ka(n,e);throw ri("Field path arguments must be of type string or ",n,!1,void 0,t)}const Lb=new RegExp("[~\\*/\\[\\]]");function ka(n,e,t){if(e.search(Lb)>=0)throw ri(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ai(...e.split("."))._internalPath}catch{throw ri(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ri(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(i||a)&&(h+=" (found",i&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new j(R.INVALID_ARGUMENT,c+n+h)}function df(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ci("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Fb extends ff{data(){return super.data()}}function Ci(n,e){return typeof e=="string"?ka(n,e):e instanceof Ai?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Da{}class mf extends Da{}function Kr(n,e,...t){let r=[];e instanceof Da&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((h=>h instanceof Va)).length,c=i.filter((h=>h instanceof Pi)).length;if(a>1||a>0&&c>0)throw new j(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Pi extends mf{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Pi(e,t,r)}_apply(e){const t=this._parse(e);return pf(e._query,t),new _n(e.firestore,e.converter,ko(e._query,t))}_parse(e){const t=Ri(e.firestore);return(function(i,a,c,h,f,m,g){let w;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new j(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){bu(g,m);const C=[];for(const k of g)C.push(vu(h,i,k));w={arrayValue:{values:C}}}else w=vu(h,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||bu(g,m),w=Mb(c,a,g,m==="in"||m==="not-in");return _e.create(f,m,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function On(n,e,t){const r=e,s=Ci("where",n);return Pi._create(s,r,t)}class Va extends Da{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Va(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Ye.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const h of c)pf(a,h),a=ko(a,h)})(e._query,t),new _n(e.firestore,e.converter,ko(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ja extends mf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ja(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new j(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new j(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Hr(i,a)})(e._query,this._field,this._direction);return new _n(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new Zn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Bb(n,e="asc"){const t=e,r=Ci("orderBy",n);return ja._create(r,t)}function vu(n,e,t){if(typeof(t=me(t))=="string"){if(t==="")throw new j(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cd(e)&&t.indexOf("/")!==-1)throw new j(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(oe.fromString(t));if(!q.isDocumentKey(r))throw new j(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ml(n,new q(r))}if(t instanceof fe)return Ml(n,t._key);throw new j(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fi(t)}.`)}function bu(n,e){if(!Array.isArray(n)||n.length===0)throw new j(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pf(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new j(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class qb{convertValue(e,t="none"){switch(Ht(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($t(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Kt(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Ys].arrayValue)==null?void 0:s.values)==null?void 0:i.map((a=>de(a.doubleValue)));return new ot(t)}convertGeoPoint(e){return new it(de(e.latitude),de(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=gi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Br(e));default:return null}}convertTimestamp(e){const t=qt(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=oe.fromString(e);re(Pd(r),9688,{name:e});const s=new qr(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(t)||yt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Nr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class an extends ff{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Os(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ci("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=an._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}an._jsonSchemaVersion="firestore/documentSnapshot/1.0",an._jsonSchema={type:we("string",an._jsonSchemaVersion),bundleSource:we("string","DocumentSnapshot"),bundleName:we("string"),bundle:we("string")};class Os extends an{data(e={}){return super.data(e)}}class Mn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Nr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Os(this._firestore,this._userDataWriter,r.key,r,new Nr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const h=new Os(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Nr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const h=new Os(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Nr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:$b(c.type),doc:h,oldIndex:f,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Mn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=sa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $b(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n){n=ct(n,fe);const e=ct(n.firestore,tr);return Sb(Ra(e),n._key).then((t=>zb(e,n,t)))}Mn._jsonSchemaVersion="firestore/querySnapshot/1.0",Mn._jsonSchema={type:we("string",Mn._jsonSchemaVersion),bundleSource:we("string","QuerySnapshot"),bundleName:we("string"),bundle:we("string")};class yf extends qb{constructor(e){super(),this.firestore=e}convertBytes(e){return new qe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new fe(this.firestore,null,t)}}function Qr(n){n=ct(n,_n);const e=ct(n.firestore,tr),t=Ra(e),r=new yf(e);return Ub(n._query),Rb(t,n._query).then((s=>new Mn(e,r,n,s)))}function Hb(n,e,t){n=ct(n,fe);const r=ct(n.firestore,tr),s=gf(n.converter,e);return Oa(r,[lf(Ri(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ge.none())])}function Eu(n,e,t,...r){n=ct(n,fe);const s=ct(n.firestore,tr),i=Ri(s);let a;return a=typeof(e=me(e))=="string"||e instanceof Ai?Ob(i,"updateDoc",n._key,e,t,r):jb(i,"updateDoc",n._key,e),Oa(s,[a.toMutation(n._key,Ge.exists(!0))])}function Iu(n,e){const t=ct(n.firestore,tr),r=He(n),s=gf(n.converter,e);return Oa(t,[lf(Ri(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ge.exists(!1))]).then((()=>r))}function Oa(n,e){return(function(r,s){const i=new mt;return r.asyncQueue.enqueueAndForget((async()=>pb(await Ab(r),s,i))),i.promise})(Ra(n),e)}function zb(n,e,t){const r=t.docs.get(e._key),s=new yf(n);return new an(n,s,e._key,r,new Nr(t.hasPendingWrites,t.fromCache),e.converter)}function Cn(){return new Ca("serverTimestamp")}(function(e,t=!0){(function(s){Yn=s})(Gn),at(new Ke("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new tr(new jw(r.getProvider("auth-internal")),new Lw(a,r.getProvider("app-check-internal")),(function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new j(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qr(f.options.projectId,m)})(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),$e(Tl,xl,e),$e(Tl,xl,"esm2020")})();const _f="@firebase/installations",Ma="0.6.19";/**
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
 */const wf=1e4,vf=`w:${Ma}`,bf="FIS_v2",Wb="https://firebaseinstallations.googleapis.com/v1",Gb=3600*1e3,Kb="installations",Qb="Installations";/**
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
 */const Yb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},hn=new fn(Kb,Qb,Yb);function Ef(n){return n instanceof Je&&n.code.includes("request-failed")}/**
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
 */function If({projectId:n}){return`${Wb}/projects/${n}/installations`}function Tf(n){return{token:n.token,requestStatus:2,expiresIn:Xb(n.expiresIn),creationTime:Date.now()}}async function xf(n,e){const r=(await e.json()).error;return hn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Af({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Jb(n,{refreshToken:e}){const t=Af(n);return t.append("Authorization",Zb(e)),t}async function Sf(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Xb(n){return Number(n.replace("s","000"))}function Zb(n){return`${bf} ${n}`}/**
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
 */async function eE({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=If(n),s=Af(n),i=e.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={fid:t,authVersion:bf,appId:n.appId,sdkVersion:vf},c={method:"POST",headers:s,body:JSON.stringify(a)},h=await Sf(()=>fetch(r,c));if(h.ok){const f=await h.json();return{fid:f.fid||t,registrationStatus:2,refreshToken:f.refreshToken,authToken:Tf(f.authToken)}}else throw await xf("Create Installation",h)}/**
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
 */function Rf(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function tE(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const nE=/^[cdef][\w-]{21}$/,Ho="";function rE(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=sE(n);return nE.test(t)?t:Ho}catch{return Ho}}function sE(n){return tE(n).substr(0,22)}/**
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
 */function ki(n){return`${n.appName}!${n.appId}`}/**
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
 */const Nf=new Map;function Cf(n,e){const t=ki(n);Pf(t,e),iE(t,e)}function Pf(n,e){const t=Nf.get(n);if(t)for(const r of t)r(e)}function iE(n,e){const t=oE();t&&t.postMessage({key:n,fid:e}),aE()}let on=null;function oE(){return!on&&"BroadcastChannel"in self&&(on=new BroadcastChannel("[Firebase] FID Change"),on.onmessage=n=>{Pf(n.data.key,n.data.fid)}),on}function aE(){Nf.size===0&&on&&(on.close(),on=null)}/**
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
 */const cE="firebase-installations-database",lE=1,dn="firebase-installations-store";let mo=null;function La(){return mo||(mo=Xu(cE,lE,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(dn)}}})),mo}async function si(n,e){const t=ki(n),s=(await La()).transaction(dn,"readwrite"),i=s.objectStore(dn),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&Cf(n,e.fid),e}async function kf(n){const e=ki(n),r=(await La()).transaction(dn,"readwrite");await r.objectStore(dn).delete(e),await r.done}async function Di(n,e){const t=ki(n),s=(await La()).transaction(dn,"readwrite"),i=s.objectStore(dn),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!a||a.fid!==c.fid)&&Cf(n,c.fid),c}/**
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
 */async function Fa(n){let e;const t=await Di(n.appConfig,r=>{const s=uE(r),i=hE(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Ho?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function uE(n){const e=n||{fid:rE(),registrationStatus:0};return Df(e)}function hE(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(hn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=dE(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fE(n)}:{installationEntry:e}}async function dE(n,e){try{const t=await eE(n,e);return si(n.appConfig,t)}catch(t){throw Ef(t)&&t.customData.serverCode===409?await kf(n.appConfig):await si(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function fE(n){let e=await Tu(n.appConfig);for(;e.registrationStatus===1;)await Rf(100),e=await Tu(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Fa(n);return r||t}return e}function Tu(n){return Di(n,e=>{if(!e)throw hn.create("installation-not-found");return Df(e)})}function Df(n){return mE(n)?{fid:n.fid,registrationStatus:0}:n}function mE(n){return n.registrationStatus===1&&n.registrationTime+wf<Date.now()}/**
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
 */async function pE({appConfig:n,heartbeatServiceProvider:e},t){const r=gE(n,t),s=Jb(n,t),i=e.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={installation:{sdkVersion:vf,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},h=await Sf(()=>fetch(r,c));if(h.ok){const f=await h.json();return Tf(f)}else throw await xf("Generate Auth Token",h)}function gE(n,{fid:e}){return`${If(n)}/${e}/authTokens:generate`}/**
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
 */async function Ua(n,e=!1){let t;const r=await Di(n.appConfig,i=>{if(!Vf(i))throw hn.create("not-registered");const a=i.authToken;if(!e&&wE(a))return i;if(a.requestStatus===1)return t=yE(n,e),i;{if(!navigator.onLine)throw hn.create("app-offline");const c=bE(i);return t=_E(n,c),c}});return t?await t:r.authToken}async function yE(n,e){let t=await xu(n.appConfig);for(;t.authToken.requestStatus===1;)await Rf(100),t=await xu(n.appConfig);const r=t.authToken;return r.requestStatus===0?Ua(n,e):r}function xu(n){return Di(n,e=>{if(!Vf(e))throw hn.create("not-registered");const t=e.authToken;return EE(t)?{...e,authToken:{requestStatus:0}}:e})}async function _E(n,e){try{const t=await pE(n,e),r={...e,authToken:t};return await si(n.appConfig,r),t}catch(t){if(Ef(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await kf(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await si(n.appConfig,r)}throw t}}function Vf(n){return n!==void 0&&n.registrationStatus===2}function wE(n){return n.requestStatus===2&&!vE(n)}function vE(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Gb}function bE(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function EE(n){return n.requestStatus===1&&n.requestTime+wf<Date.now()}/**
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
 */async function IE(n){const e=n,{installationEntry:t,registrationPromise:r}=await Fa(e);return r?r.catch(console.error):Ua(e).catch(console.error),t.fid}/**
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
 */async function TE(n,e=!1){const t=n;return await xE(t),(await Ua(t,e)).token}async function xE(n){const{registrationPromise:e}=await Fa(n);e&&await e}/**
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
 */function AE(n){if(!n||!n.options)throw po("App Configuration");if(!n.name)throw po("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw po(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function po(n){return hn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="installations",SE="installations-internal",RE=n=>{const e=n.getProvider("app").getImmediate(),t=AE(e),r=mn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},NE=n=>{const e=n.getProvider("app").getImmediate(),t=mn(e,jf).getImmediate();return{getId:()=>IE(t),getToken:s=>TE(t,s)}};function CE(){at(new Ke(jf,RE,"PUBLIC")),at(new Ke(SE,NE,"PRIVATE"))}CE();$e(_f,Ma);$e(_f,Ma,"esm2020");/**
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
 */const ii="analytics",PE="firebase_id",kE="origin",DE=60*1e3,VE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ba="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ve=new ci("@firebase/analytics");/**
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
 */const jE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Fe=new fn("analytics","Analytics",jE);/**
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
 */function OE(n){if(!n.startsWith(Ba)){const e=Fe.create("invalid-gtag-resource",{gtagURL:n});return Ve.warn(e.message),""}return n}function Of(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function ME(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function LE(n,e){const t=ME("firebase-js-sdk-policy",{createScriptURL:OE}),r=document.createElement("script"),s=`${Ba}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function FE(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function UE(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const h=(await Of(t)).find(f=>f.measurementId===s);h&&await e[h.appId]}}catch(c){Ve.error(c)}n("config",s,i)}async function BE(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await Of(t);for(const h of a){const f=c.find(g=>g.measurementId===h),m=f&&e[f.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){Ve.error(i)}}function qE(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[c,h]=a;await BE(n,e,t,c,h)}else if(i==="config"){const[c,h]=a;await UE(n,e,t,r,c,h)}else if(i==="consent"){const[c,h]=a;n("consent",c,h)}else if(i==="get"){const[c,h,f]=a;n("get",c,h,f)}else if(i==="set"){const[c]=a;n("set",c)}else n(i,...a)}catch(c){Ve.error(c)}}return s}function $E(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=qE(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function HE(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ba)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=30,WE=1e3;class GE{constructor(e={},t=WE){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Mf=new GE;function KE(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function QE(n){var a;const{appId:e,apiKey:t}=n,r={method:"GET",headers:KE(t)},s=VE.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let c="";try{const h=await i.json();(a=h.error)!=null&&a.message&&(c=h.error.message)}catch{}throw Fe.create("config-fetch-failed",{httpStatus:i.status,responseMessage:c})}return i.json()}async function YE(n,e=Mf,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw Fe.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Fe.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new ZE;return setTimeout(async()=>{c.abort()},DE),Lf({appId:r,apiKey:s,measurementId:i},a,c,e)}async function Lf(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Mf){var c;const{appId:i,measurementId:a}=n;try{await JE(r,e)}catch(h){if(a)return Ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:i,measurementId:a};throw h}try{const h=await QE(n);return s.deleteThrottleMetadata(i),h}catch(h){const f=h;if(!XE(f)){if(s.deleteThrottleMetadata(i),a)return Ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:i,measurementId:a};throw h}const m=Number((c=f==null?void 0:f.customData)==null?void 0:c.httpStatus)===503?Kc(t,s.intervalMillis,zE):Kc(t,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return s.setThrottleMetadata(i,g),Ve.debug(`Calling attemptFetch again in ${m} millis`),Lf(n,g,r,s)}}function JE(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(Fe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function XE(n){if(!(n instanceof Je)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class ZE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function eI(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a={...r,send_to:i};n("event",t,a)}}async function tI(n,e,t,r){if(r&&r.global){const s={};for(const i of Object.keys(t))s[`user_properties.${i}`]=t[i];return n("set",s),Promise.resolve()}else{const s=await e;n("config",s,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(){if(Ku())try{await Qu()}catch(n){return Ve.warn(Fe.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ve.warn(Fe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function rI(n,e,t,r,s,i,a){const c=YE(n);c.then(w=>{t[w.measurementId]=w.appId,n.options.measurementId&&w.measurementId!==n.options.measurementId&&Ve.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>Ve.error(w)),e.push(c);const h=nI().then(w=>{if(w)return r.getId()}),[f,m]=await Promise.all([c,h]);HE(i)||LE(i,f.measurementId),s("js",new Date);const g=(a==null?void 0:a.config)??{};return g[kE]="firebase",g.update=!0,m!=null&&(g[PE]=m),s("config",f.measurementId,g),f.measurementId}/**
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
 */class sI{constructor(e){this.app=e}_delete(){return delete Ln[this.app.options.appId],Promise.resolve()}}let Ln={},Au=[];const Su={};let go="dataLayer",iI="gtag",Ru,qa,Nu=!1;function oI(){const n=[];if(Gu()&&n.push("This is a browser extension environment."),Zp()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=Fe.create("invalid-analytics-context",{errorInfo:e});Ve.warn(t.message)}}function aI(n,e,t){oI();const r=n.options.appId;if(!r)throw Fe.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Fe.create("no-api-key");if(Ln[r]!=null)throw Fe.create("already-exists",{id:r});if(!Nu){FE(go);const{wrappedGtag:i,gtagCore:a}=$E(Ln,Au,Su,go,iI);qa=i,Ru=a,Nu=!0}return Ln[r]=rI(n,Au,Su,e,Ru,go,t),new sI(n)}function cI(n=Ko()){n=me(n);const e=mn(n,ii);return e.isInitialized()?e.getImmediate():lI(n)}function lI(n,e={}){const t=mn(n,ii);if(t.isInitialized()){const s=t.getImmediate();if(Ut(e,t.getOptions()))return s;throw Fe.create("already-initialized")}return t.initialize({options:e})}function uI(n,e,t){n=me(n),tI(qa,Ln[n.app.options.appId],e,t).catch(r=>Ve.error(r))}function hI(n,e,t,r){n=me(n),eI(qa,Ln[n.app.options.appId],e,t,r).catch(s=>Ve.error(s))}const Cu="@firebase/analytics",Pu="0.10.19";function dI(){at(new Ke(ii,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return aI(r,s,t)},"PUBLIC")),at(new Ke("analytics-internal",n,"PRIVATE")),$e(Cu,Pu),$e(Cu,Pu,"esm2020");function n(e){try{const t=e.getProvider(ii).getImmediate();return{logEvent:(r,s,i)=>hI(t,r,s,i),setUserProperties:(r,s)=>uI(t,r,s)}}catch(t){throw Fe.create("interop-component-reg-failed",{reason:t})}}}dI();const zo={apiKey:"AIzaSyAZniUvAr4JQO-AApWDwVJ4lqTz4Fozd4k",authDomain:"learnova-a793c.firebaseapp.com",projectId:"learnova-a793c",storageBucket:"learnova-a793c.firebasestorage.app",messagingSenderId:"746486056360",appId:"1:746486056360:web:6a04aad62fe8d4076e499d",measurementId:"G-D1E21BVFGT"};if(!zo.apiKey||!zo.projectId)throw console.error("Firebase configuration is missing. Please check your .env file."),new Error("Firebase configuration error");const $a=Zu(zo),Be=Pw($a),ye=Cb($a);cI($a);function fI(){const[n,e]=F.useState(""),[t,r]=F.useState(!1),[s,i]=F.useState(!0),a=oi(),c=ku();F.useEffect(()=>{const f=xh(Be,async m=>{var g,w;if(m)try{console.log("Checking student document for UID:",m.uid);let S;try{S=await wt(He(ye,"students",m.uid)),console.log("Student document exists:",S.exists())}catch(C){if(console.error("Firestore error:",C),C.code==="permission-denied"){console.error("PERMISSION DENIED - Check your Firestore security rules!"),e("Permission denied. Please check that Firestore security rules are published."),await Be.signOut(),i(!1);return}throw C}if(S.exists()){const C=((w=(g=c.state)==null?void 0:g.from)==null?void 0:w.pathname)||"/app/dashboard";console.log("Redirecting to:",C),a(C,{replace:!0});return}else console.warn("Student document not found for UID:",m.uid),await Be.signOut(),e("Student profile not found. Please contact your teacher.")}catch(S){console.error("Error checking student status:",S),S.code==="permission-denied"?e("Permission denied. Please check Firestore security rules."):e("Error checking student profile. Please try again.")}else console.log("No user logged in");i(!1)});return()=>f()},[a,c]);const h=async f=>{var S,C;f.preventDefault(),e(""),r(!0);const m=new FormData(f.currentTarget),g=m.get("email"),w=m.get("password");try{console.log("Attempting to sign in with email:",g);const P=(await y_(Be,g,w)).user;console.log("Sign in successful. User UID:",P.uid),console.log("Checking student document in Firestore...");let $;try{$=await wt(He(ye,"students",P.uid)),console.log("Student document exists:",$.exists())}catch(O){if(console.error("Firestore error:",O),O.code==="permission-denied"){console.error("PERMISSION DENIED - Check your Firestore security rules!"),e("Permission denied. Please check that Firestore security rules are published and allow authenticated users to read their own student document."),r(!1),await Be.signOut();return}throw O}if(!$.exists()){console.error("Student document not found for UID:",P.uid),console.error("Please create a document in Firestore:"),console.error("  Collection: students"),console.error("  Document ID:",P.uid),console.error("  Fields: name (string), email (string), subjects (array)"),await Be.signOut(),e(`Student profile not found. Please create a document in Firestore with Document ID: ${P.uid}`),r(!1);return}console.log("Student document found. Redirecting to dashboard...");const B=((C=(S=c.state)==null?void 0:S.from)==null?void 0:C.pathname)||"/app/dashboard";a(B,{replace:!0})}catch(k){console.error(k),k.code==="auth/invalid-email"?e("Please enter a valid email address."):k.code==="auth/user-not-found"?e("No account found with this email. Please contact your teacher to create an account."):k.code==="auth/wrong-password"?e("Incorrect password. Please try again."):k.code==="auth/invalid-credential"?e("Invalid email or password. Please try again."):e(k.message||"Failed to sign in. Please try again.")}finally{r(!1)}};return s?u.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Checking authentication..."})]})}):u.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[u.jsx("div",{className:"flex justify-center",children:u.jsxs(ft,{to:"/",className:"flex items-center",children:[u.jsx(Fs,{className:"h-12 w-12 text-blue-600"}),u.jsx("span",{className:"ml-2 text-3xl font-bold text-gray-900",children:"MySchola"})]})}),u.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"}),u.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Students: Use the email and password provided by your teacher"})]}),u.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:u.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[u.jsxs("form",{className:"space-y-6",onSubmit:h,children:[n&&u.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative",role:"alert",children:u.jsx("span",{className:"block sm:inline",children:n})}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),u.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:u.jsx(Mu,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),u.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"you@example.com"})]})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),u.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:u.jsx(Ou,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),u.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"********"})]})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),u.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),u.jsx("div",{className:"text-sm",children:u.jsx("a",{href:"#",className:"font-medium text-blue-600 hover:text-blue-500",children:"Forgot your password?"})})]}),u.jsx("div",{children:u.jsx("button",{type:"submit",disabled:t,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed",children:t?"Please wait...":"Sign in"})})]}),u.jsx("div",{className:"mt-6",children:u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-0 flex items-center",children:u.jsx("div",{className:"w-full border-t border-gray-300"})}),u.jsx("div",{className:"relative flex justify-center text-sm",children:u.jsx("span",{className:"px-2 bg-white text-gray-500",children:u.jsxs(ft,{to:"/",className:"flex items-center hover:text-gray-900 transition",children:[u.jsx(Wo,{className:"h-4 w-4 mr-1"}),"Back to Home"]})})})]})})]})})]})}function yo({children:n}){const[e,t]=F.useState(!0),[r,s]=F.useState(!1),[i,a]=F.useState(!1),c=ku();return F.useEffect(()=>{const h=xh(Be,async f=>{if(f)try{(await wt(He(ye,"students",f.uid))).exists()?(s(!0),a(!0)):(s(!1),a(!1))}catch(m){console.error("Error checking student status:",m),s(!1),a(!1)}else s(!1),a(!1);t(!1)});return()=>h()},[]),e?u.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Loading..."})]})}):!r||!i?u.jsx(fm,{to:"/login",state:{from:c},replace:!0}):n}const mI=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?jm:e.includes("english")||e.includes("literature")||e.includes("language")?km:e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?Km:e.includes("geography")||e.includes("geography")?Ym:e.includes("history")?Zm:e.includes("music")?lp:e.includes("art")||e.includes("design")?hp:e.includes("language")||e.includes("french")||e.includes("spanish")||e.includes("german")?tp:e.includes("computer")||e.includes("ict")||e.includes("it")?Rm:Fs},pI=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?"bg-blue-50 border-blue-200 text-blue-700":e.includes("english")||e.includes("literature")||e.includes("language")?"bg-purple-50 border-purple-200 text-purple-700":e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?"bg-green-50 border-green-200 text-green-700":e.includes("geography")?"bg-cyan-50 border-cyan-200 text-cyan-700":e.includes("history")?"bg-amber-50 border-amber-200 text-amber-700":e.includes("music")?"bg-pink-50 border-pink-200 text-pink-700":e.includes("art")||e.includes("design")?"bg-rose-50 border-rose-200 text-rose-700":"bg-gray-50 border-gray-200 text-gray-700"};function gI(){const n=oi(),[e,t]=F.useState(null),[r,s]=F.useState([]),[i,a]=F.useState(!0),[c,h]=F.useState(""),[f,m]=F.useState(null);F.useEffect(()=>{(async()=>{try{const S=Be.currentUser;if(!S){n("/login");return}const C=await wt(He(ye,"students",S.uid));if(!C.exists()){h("Student profile not found"),a(!1);return}const k=C.data();if(t(k),console.log("Student data:",k),console.log("Student subjects array:",k.subjects),k.subjects&&k.subjects.length>0){const $=(await Promise.all(k.subjects.map(async B=>{try{const O=await wt(He(ye,"subjects",B));return O.exists()?{id:O.id,...O.data()}:(console.warn(`Subject document not found for ID: ${B}`),null)}catch(O){return console.error(`Error fetching subject ${B}:`,O),null}}))).filter(B=>B!==null);console.log("Loaded subjects:",$),console.log("Expected subjects:",k.subjects),console.log("Missing subjects:",k.subjects.filter(B=>!$.some(O=>O.id===B))),s($),$.length!==k.subjects.length&&m({expected:k.subjects.length,loaded:$.length,missing:k.subjects.filter(B=>!$.some(O=>O.id===B))})}else console.log("No subjects array found in student data");a(!1)}catch(S){console.error("Error loading student data:",S),h("Failed to load dashboard data"),a(!1)}})()},[n]);const g=async()=>{try{await v_(Be),n("/login",{replace:!0})}catch(w){console.error("Error signing out:",w)}};return i?u.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",role:"status","aria-live":"polite",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto","aria-hidden":"true"}),u.jsx("p",{className:"mt-4 text-gray-600","aria-label":"Loading dashboard",children:"Loading your dashboard..."})]})}):c?u.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:u.jsxs("div",{className:"text-center",children:[u.jsx("p",{className:"text-red-600 mb-4",children:c}),u.jsx("button",{onClick:g,className:"text-blue-600 hover:text-blue-700 underline",children:"Sign out and try again"})]})}):u.jsxs("div",{className:"min-h-screen bg-gray-50",children:[u.jsx("header",{className:"bg-white shadow-sm",role:"banner",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Ms,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),u.jsxs("div",{children:[u.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"MySchola Student Dashboard"}),u.jsxs("p",{className:"text-sm text-gray-500",children:["Hi, ",u.jsx("span",{className:"font-medium",children:(e==null?void 0:e.name)||"Student"})]})]})]}),u.jsxs("nav",{className:"flex items-center gap-3","aria-label":"Dashboard navigation",children:[u.jsx(ft,{to:"/",className:"text-sm text-gray-600 hover:text-gray-900 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition","aria-label":"Return to homepage",children:"Back to site"}),u.jsxs("button",{onClick:g,className:"inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition","aria-label":"Sign out of your account",children:[u.jsx(sp,{className:"h-4 w-4","aria-hidden":"true"}),"Sign out"]})]})]})}),u.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsxs("div",{className:"mb-8",children:[u.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Your Subjects"}),u.jsx("p",{className:"text-gray-600",children:"Select a subject to join Zoom sessions, watch recordings, or complete homework."})]}),f&&u.jsxs("div",{className:"mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4",role:"alert","aria-live":"polite",children:[u.jsx("p",{className:"text-sm text-yellow-800 font-medium mb-1",children:"⚠️ Some subjects may not be loading correctly"}),u.jsxs("p",{className:"text-xs text-yellow-700",children:["Expected ",f.expected," subject(s), loaded ",f.loaded,". Please check the browser console for details."]})]}),r.length===0?u.jsxs("div",{className:"bg-white rounded-lg shadow p-8 text-center",role:"region","aria-labelledby":"no-subjects-heading",children:[u.jsx(Ms,{className:"h-12 w-12 text-gray-400 mx-auto mb-4","aria-hidden":"true"}),u.jsx("h3",{id:"no-subjects-heading",className:"text-lg font-semibold text-gray-900 mb-2",children:"No Subjects Enrolled"}),u.jsx("p",{className:"text-gray-600 mb-2",children:"You're not enrolled in any subjects yet."}),u.jsx("p",{className:"text-sm text-gray-500",children:"Please contact your teacher to get enrolled."})]}):u.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",role:"list","aria-label":"Enrolled subjects",children:r.map(w=>{const S=mI(w.name),C=pI(w.name);return u.jsxs("article",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",role:"listitem",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[u.jsx("div",{className:`p-2 rounded-lg ${C}`,children:u.jsx(S,{className:"h-6 w-6","aria-hidden":"true"})}),u.jsx("h3",{className:"text-xl font-semibold text-gray-900 flex-1",children:w.name})]}),u.jsxs("div",{className:"space-y-3",children:[w.zoomLink&&u.jsxs("a",{href:w.zoomLink,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`Join Zoom session for ${w.name}`,children:[u.jsx(zm,{className:"h-4 w-4","aria-hidden":"true"}),"Join Zoom"]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[u.jsxs(ft,{to:`/app/subject/${w.id}/recordings`,className:"flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`View recordings for ${w.name}`,children:[u.jsx(Or,{className:"h-4 w-4","aria-hidden":"true"}),"Recordings"]}),u.jsxs(ft,{to:`/app/subject/${w.id}/homework`,className:"flex items-center justify-center gap-2 text-green-600 hover:text-green-700 px-4 py-2 border border-green-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition font-medium","aria-label":`View homework for ${w.name}`,children:[u.jsx(Ls,{className:"h-4 w-4","aria-hidden":"true"}),"Homework"]})]})]})]},w.id)})})]})]})}function yI(){const{subjectId:n}=Du(),e=oi(),[t,r]=F.useState([]),[s,i]=F.useState([]),[a,c]=F.useState(null),[h,f]=F.useState(null),[m,g]=F.useState(!0),[w,S]=F.useState(""),[C,k]=F.useState(null);F.useEffect(()=>{n&&(async()=>{try{const H=Be.currentUser;if(!H){e("/login");return}const V=await wt(He(ye,"students",H.uid));if(!V.exists()){S("Student profile not found"),g(!1);return}const U=V.data();f(U);const y=(U.subjectSettings||{})[n]||null;k(y);const v=He(ye,"subjects",n),I=await wt(v);I.exists()&&c({id:n,...I.data()});let E;try{E=Kr(Vt(ye,"recordings"),On("subjectId","==",n),Bb("date","desc"))}catch(te){console.warn("OrderBy failed, using simple query:",te),E=Kr(Vt(ye,"recordings"),On("subjectId","==",n))}const _=(await Qr(E)).docs.map(te=>({id:te.id,...te.data()})).filter(te=>te.approvalStatus==="approved"||!te.approvalStatus).sort((te,ue)=>{var ie,ut;const vt=(ie=te.date)!=null&&ie.toDate?te.date.toDate():te.date?new Date(te.date):new Date(0);return((ut=ue.date)!=null&&ut.toDate?ue.date.toDate():ue.date?new Date(ue.date):new Date(0))-vt});r(_),g(!1)}catch(H){console.error("Error loading recordings:",H),S("Failed to load recordings"),g(!1)}})()},[n,e]);const P=()=>{var H;return a?(((H=a.name)==null?void 0:H.toLowerCase())||"").includes("english"):!1};F.useEffect(()=>{if(!t.length){i([]);return}if(!C||!C.examBoard){i(t);return}const O=C.examBoard,H=C.tier,V=t.filter(U=>{const b=U.examBoard,y=U.tier;return b!==O?!1:P()?!0:y&&H?y===H:!y&&!H});i(V)},[t,C,a]);const $=()=>{const O={};return s.forEach(H=>{const V=H.examBoard||"Other",U=H.tier||(P()?"General":"Other"),b=`${V}_${U}`;O[b]||(O[b]={examBoard:V,tier:U,recordings:[]}),O[b].recordings.push(H)}),Object.values(O).sort((H,V)=>H.examBoard!==V.examBoard?H.examBoard==="AQA"?-1:V.examBoard==="AQA"?1:H.examBoard==="Edexcel"?-1:V.examBoard==="Edexcel"?1:H.examBoard.localeCompare(V.examBoard):H.tier==="Foundation"?-1:V.tier==="Foundation"?1:H.tier==="Higher"?-1:V.tier==="Higher"?1:H.tier.localeCompare(V.tier))},B=O=>O?(O.toDate?O.toDate():new Date(O)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"Date not available";return m?u.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Loading recordings..."})]})}):u.jsx("div",{className:"min-h-screen bg-gray-50",children:u.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsxs(ft,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[u.jsx(Wo,{className:"h-4 w-4"}),"Back to Dashboard"]}),u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[u.jsx(Or,{className:"h-6 w-6 text-blue-600"}),u.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Recordings - ",(a==null?void 0:a.name)||"Subject"]})]}),u.jsx("p",{className:"text-gray-600",children:"Watch past lesson recordings for this subject."}),C&&u.jsxs("div",{className:"mt-3 flex items-center gap-2 text-sm",children:[u.jsx("span",{className:"text-gray-500",children:"Your settings:"}),u.jsxs("span",{className:"font-semibold text-blue-600",children:[C.examBoard,!P()&&C.tier&&` - ${C.tier}`]})]}),!C&&u.jsxs("div",{className:"mt-3 bg-yellow-50 border border-yellow-200 rounded-md p-3 flex items-start gap-2",children:[u.jsx(Fm,{className:"h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5"}),u.jsxs("div",{className:"text-sm text-yellow-800",children:[u.jsx("p",{className:"font-medium mb-1",children:"No exam board settings found"}),u.jsx("p",{children:"Please contact your administrator to set your exam board and tier preferences. Until then, all recordings are shown."})]})]})]}),w&&u.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6",children:w}),s.length===0?u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[u.jsx(Or,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),C?u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"text-gray-600 font-medium mb-2",children:"No recordings available for your settings."}),u.jsxs("p",{className:"text-sm text-gray-500",children:["Your settings: ",u.jsxs("span",{className:"font-semibold",children:[C.examBoard,!P()&&C.tier?` - ${C.tier}`:""]})]}),u.jsx("p",{className:"text-sm text-gray-500 mt-2",children:t.length>0?`There are ${t.length} recording(s) available, but none match your exam board/tier settings.`:"No recordings have been added for this subject yet."})]}):u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"text-gray-600",children:"No recordings available yet."}),u.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Check back later for new recordings."})]})]}):u.jsx("div",{className:"space-y-6",children:$().map((O,H)=>u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",children:[u.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 px-6 py-4",children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Ms,{className:"h-5 w-5 text-blue-600"}),u.jsxs("div",{children:[u.jsxs("h3",{className:"text-lg font-semibold text-gray-900",children:[O.examBoard,!P()&&O.tier&&u.jsxs("span",{className:"ml-2 text-base font-normal text-gray-600",children:["- ",O.tier]})]}),u.jsxs("p",{className:"text-sm text-gray-600",children:[O.recordings.length," recording",O.recordings.length!==1?"s":""]})]})]})}),u.jsx("div",{className:"p-6 space-y-4",children:O.recordings.map(V=>u.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:u.jsxs("div",{className:"flex items-start justify-between",children:[u.jsxs("div",{className:"flex-1",children:[u.jsx("h4",{className:"text-base font-semibold text-gray-900 mb-2",children:V.title}),u.jsx("p",{className:"text-sm text-gray-500",children:B(V.date)})]}),u.jsxs("a",{href:V.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"ml-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap",children:[u.jsx(pp,{className:"h-4 w-4"}),"Watch"]})]})},V.id))})]},H))})]})})}function _I(){var H;const{subjectId:n}=Du(),[e,t]=F.useState([]),[r,s]=F.useState(null),[i,a]=F.useState(!0),[c,h]=F.useState(null),[f,m]=F.useState({}),[g,w]=F.useState(!1),[S,C]=F.useState({});F.useEffect(()=>{n&&(async()=>{try{const U=He(ye,"subjects",n),b=await wt(U);b.exists()&&s({id:n,...b.data()});const y=Kr(Vt(ye,"homeworks"),On("subjectId","==",n)),I=(await Qr(y)).docs.map(T=>({id:T.id,...T.data()}));t(I);const E=Be.currentUser;if(E){const T=Kr(Vt(ye,"submissions"),On("studentId","==",E.uid),On("homeworkId","in",I.map(ue=>ue.id))),_=await Qr(T),te={};_.docs.forEach(ue=>{te[ue.data().homeworkId]=ue.data()}),C(te)}a(!1)}catch(U){console.error("Error loading homework:",U),a(!1)}})()},[n]);const k=(V,U)=>{m({...f,[V]:U})},P=(V,U)=>{let b=0;return V.questions.forEach((y,v)=>{var T,_;const I=(T=U[v])==null?void 0:T.toString().toLowerCase().trim(),E=(_=y.correctAnswer)==null?void 0:_.toString().toLowerCase().trim();I===E&&b++}),Math.round(b/V.questions.length*100)},$=async()=>{if(c){w(!0);try{const V=Be.currentUser;if(!V){alert("You must be logged in to submit homework");return}const U=P(c,f);await Hb(He(ye,"submissions",`${V.uid}_${c.id}`),{studentId:V.uid,homeworkId:c.id,subjectId:n,answers:f,score:U,submittedAt:Cn()}),C({...S,[c.id]:{score:U,submittedAt:new Date}}),alert(`Homework submitted! Your score: ${U}%`),h(null),m({})}catch(V){console.error("Error submitting homework:",V),alert("Failed to submit homework. Please try again.")}finally{w(!1)}}},B=V=>V?(V.toDate?V.toDate():new Date(V)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"No due date",O=V=>V?(V.toDate?V.toDate():new Date(V))<new Date:!1;return i?u.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Loading homework..."})]})}):u.jsx("div",{className:"min-h-screen bg-gray-50",children:u.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsxs(ft,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[u.jsx(Wo,{className:"h-4 w-4"}),"Back to Dashboard"]}),u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[u.jsx(Ls,{className:"h-6 w-6 text-green-600"}),u.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Homework - ",(r==null?void 0:r.name)||"Subject"]})]}),u.jsx("p",{className:"text-gray-600",children:"Complete and submit your homework assignments."})]}),c?u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:c.title}),u.jsx("button",{onClick:()=>{h(null),m({})},className:"text-gray-600 hover:text-gray-900",children:"Close"})]}),c.description&&u.jsx("p",{className:"text-gray-600 mb-6",children:c.description}),u.jsx("div",{className:"space-y-6 mb-6",children:(H=c.questions)==null?void 0:H.map((V,U)=>u.jsxs("div",{className:"border-b border-gray-200 pb-4",children:[u.jsxs("label",{className:"block text-sm font-medium text-gray-900 mb-2",children:["Question ",U+1,": ",V.question]}),u.jsx("input",{type:"text",value:f[U]||"",onChange:b=>k(U,b.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Your answer"})]},U))}),u.jsxs("div",{className:"flex gap-3",children:[u.jsx("button",{onClick:$,disabled:g,className:"bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50",children:g?"Submitting...":"Submit Homework"}),u.jsx("button",{onClick:()=>{h(null),m({})},className:"bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition",children:"Cancel"})]})]}):u.jsx("div",{className:"space-y-4",children:e.length===0?u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[u.jsx(Ls,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),u.jsx("p",{className:"text-gray-600",children:"No homework assignments available yet."})]}):e.map(V=>{const U=S[V.id],b=O(V.dueDate);return u.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:u.jsxs("div",{className:"flex items-start justify-between mb-4",children:[u.jsxs("div",{className:"flex-1",children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:V.title}),V.description&&u.jsx("p",{className:"text-gray-600 mb-2",children:V.description}),u.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:[u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx(ju,{className:"h-4 w-4"}),"Due: ",B(V.dueDate)]}),V.questions&&u.jsxs("span",{children:[V.questions.length," questions"]})]}),U&&u.jsxs("div",{className:"mt-3 flex items-center gap-2 text-green-600",children:[u.jsx(As,{className:"h-5 w-5"}),u.jsxs("span",{className:"font-semibold",children:["Last score: ",U.score,"%"]})]}),b&&!U&&u.jsx("div",{className:"mt-3 text-red-600 text-sm font-medium",children:"Overdue"})]}),u.jsx("button",{onClick:()=>h(V),className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:U?"Review/Resubmit":"Start Homework"})]})},V.id)})})]})})}function wI(){const n=oi(),[e,t]=F.useState(""),[r,s]=F.useState(!1),[i,a]=F.useState([]),[c,h]=F.useState(""),[f,m]=F.useState(null),[g,w]=F.useState("recording"),[S,C]=F.useState(""),[k,P]=F.useState(""),[$,B]=F.useState(""),[O,H]=F.useState(""),[V,U]=F.useState([]),[b,y]=F.useState(""),[v,I]=F.useState(""),[E,T]=F.useState(""),[_,te]=F.useState([{question:"",correctAnswer:""}]),[ue,vt]=F.useState(!1),[bt,ie]=F.useState("");F.useEffect(()=>{r&&(async()=>{try{const pe=(await Qr(Vt(ye,"subjects"))).docs.map(Ue=>({id:Ue.id,...Ue.data()}));if(a(pe),pe.length>0){const Ue=pe[0];h(Ue.id),m(Ue)}}catch(Y){console.error("Error loading subjects:",Y)}})()},[r]),F.useEffect(()=>{(async()=>{if(g==="approve"&&r)try{const Y=Kr(Vt(ye,"recordings"),On("approvalStatus","==","pending")),pe=await Qr(Y),Ue=await Promise.all(pe.docs.map(async vn=>{const Jt=vn.data();let or="Unknown";if(Jt.subjectId)try{const bn=await wt(vn(ye,"subjects",Jt.subjectId));bn.exists()&&(or=bn.data().name)}catch(bn){console.error("Error fetching subject:",bn)}return{id:vn.id,...Jt,subjectName:or}}));U(Ue)}catch(Y){console.error("Error loading pending recordings:",Y)}})()},[g,r]),F.useEffect(()=>{const L=i.find(Y=>Y.id===c);m(L||null),B(""),H("")},[c,i]);const ut=L=>{L.preventDefault(),e==="admin123"?(s(!0),ie("")):ie("Incorrect password")},Vi=()=>{te([..._,{question:"",correctAnswer:""}])},os=L=>{te(_.filter((Y,pe)=>pe!==L))},nr=(L,Y,pe)=>{const Ue=[..._];Ue[L][Y]=pe,te(Ue)},Yt=()=>{var Y;return f?(((Y=f.name)==null?void 0:Y.toLowerCase())||"").includes("english"):!1},wn=async L=>{if(L.preventDefault(),!c||!S||!k||!$){ie("Please fill in all required fields");return}if(!Yt()&&!O){ie("Please select a tier (Foundation or Higher)");return}vt(!0),ie("");try{await Iu(Vt(ye,"recordings"),{subjectId:c,title:S,videoUrl:k,examBoard:$,tier:Yt()?null:O,approvalStatus:"pending",date:Cn(),createdAt:Cn()}),ie("Recording added successfully! It will be visible to students after approval."),C(""),P(""),B(""),H("")}catch(Y){console.error("Error adding recording:",Y),ie("Failed to add recording")}finally{vt(!1)}},rr=async L=>{try{await Eu(He(ye,"recordings",L),{approvalStatus:"approved",approvedAt:Cn()}),U(V.filter(Y=>Y.id!==L)),ie("Recording approved successfully!"),setTimeout(()=>ie(""),3e3)}catch(Y){console.error("Error approving recording:",Y),ie("Failed to approve recording")}},sr=async L=>{try{await Eu(He(ye,"recordings",L),{approvalStatus:"rejected",rejectedAt:Cn()}),U(V.filter(Y=>Y.id!==L)),ie("Recording rejected"),setTimeout(()=>ie(""),3e3)}catch(Y){console.error("Error rejecting recording:",Y),ie("Failed to reject recording")}},ir=async L=>{if(L.preventDefault(),!c||!b||_.length===0){ie("Please fill in all required fields");return}const Y=_.filter(pe=>pe.question.trim()&&pe.correctAnswer.trim());if(Y.length===0){ie("Please add at least one valid question");return}vt(!0),ie("");try{await Iu(Vt(ye,"homeworks"),{subjectId:c,title:b,description:v,dueDate:E?ae.fromDate(new Date(E)):null,questions:Y,createdAt:Cn()}),ie("Homework added successfully!"),y(""),I(""),T(""),te([{question:"",correctAnswer:""}])}catch(pe){console.error("Error adding homework:",pe),ie("Failed to add homework")}finally{vt(!1)}};return r?u.jsx("div",{className:"min-h-screen bg-gray-50",children:u.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Admin Panel"}),u.jsx("button",{onClick:()=>n("/"),className:"text-gray-600 hover:text-gray-900 underline text-sm",children:"Back to site"})]})}),u.jsxs("div",{className:"flex gap-2 mb-6 flex-wrap",children:[u.jsxs("button",{onClick:()=>w("recording"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${g==="recording"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[u.jsx(Or,{className:"h-4 w-4"}),"Add Recording"]}),u.jsxs("button",{onClick:()=>w("homework"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${g==="homework"?"bg-green-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[u.jsx(Ls,{className:"h-4 w-4"}),"Add Homework"]}),u.jsxs("button",{onClick:()=>w("approve"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition relative ${g==="approve"?"bg-purple-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[u.jsx(As,{className:"h-4 w-4"}),"Approve Recordings",V.length>0&&u.jsx("span",{className:"ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5",children:V.length})]})]}),bt&&u.jsx("div",{className:`mb-6 p-4 rounded-lg ${bt.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:bt}),u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Select Subject"}),u.jsx("select",{value:c,onChange:L=>h(L.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:i.map(L=>u.jsx("option",{value:L.id,children:L.name},L.id))})]}),g==="recording"&&u.jsxs("form",{onSubmit:wn,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[u.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Recording"}),u.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Recordings will be pending approval before students can view them."}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),u.jsx("input",{type:"text",value:S,onChange:L=>C(L.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"e.g., Algebra Basics - Lesson 1",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Exam Board *"}),u.jsxs("select",{value:$,onChange:L=>B(L.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[u.jsx("option",{value:"",children:"Select Exam Board"}),u.jsx("option",{value:"AQA",children:"AQA"}),u.jsx("option",{value:"Edexcel",children:"Edexcel"})]})]}),!Yt()&&u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Tier *"}),u.jsxs("select",{value:O,onChange:L=>H(L.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[u.jsx("option",{value:"",children:"Select Tier"}),u.jsx("option",{value:"Foundation",children:"Foundation"}),u.jsx("option",{value:"Higher",children:"Higher"})]})]}),Yt()&&u.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:u.jsx("p",{className:"text-sm text-blue-800",children:"ℹ️ English subjects do not have Foundation/Higher tiers."})}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Video URL *"}),u.jsx("input",{type:"url",value:k,onChange:L=>P(L.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://youtube.com/watch?v=...",required:!0})]})]}),u.jsxs("button",{type:"submit",disabled:ue,className:"mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[u.jsx(Hc,{className:"h-4 w-4"}),ue?"Adding...":"Add Recording (Pending Approval)"]})]}),g==="approve"&&u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[u.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Approve Recordings"}),u.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Review and approve pending recordings. Only approved recordings will be visible to students."}),V.length===0?u.jsxs("div",{className:"text-center py-8",children:[u.jsx(As,{className:"h-12 w-12 text-green-500 mx-auto mb-4"}),u.jsx("p",{className:"text-gray-600",children:"No pending recordings to approve."})]}):u.jsx("div",{className:"space-y-4",children:V.map(L=>u.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:u.jsxs("div",{className:"flex items-start justify-between",children:[u.jsxs("div",{className:"flex-1",children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:L.title}),u.jsxs("div",{className:"space-y-1 text-sm text-gray-600",children:[u.jsxs("p",{children:[u.jsx("span",{className:"font-medium",children:"Subject:"})," ",L.subjectName]}),u.jsxs("p",{children:[u.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",L.examBoard]}),L.tier&&u.jsxs("p",{children:[u.jsx("span",{className:"font-medium",children:"Tier:"})," ",L.tier]}),L.date&&u.jsxs("p",{children:[u.jsx("span",{className:"font-medium",children:"Date:"})," ",L.date.toDate?L.date.toDate().toLocaleDateString("en-GB"):"N/A"]})]}),u.jsxs("a",{href:L.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm mt-2",children:[u.jsx(Or,{className:"h-4 w-4"}),"Preview Video"]})]}),u.jsxs("div",{className:"flex gap-2 ml-4",children:[u.jsxs("button",{onClick:()=>rr(L.id),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2",children:[u.jsx(As,{className:"h-4 w-4"}),"Approve"]}),u.jsx("button",{onClick:()=>sr(L.id),className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition",children:"Reject"})]})]})},L.id))})]}),g==="homework"&&u.jsxs("form",{onSubmit:ir,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[u.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Homework"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),u.jsx("input",{type:"text",value:b,onChange:L=>y(L.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Description"}),u.jsx("textarea",{value:v,onChange:L=>I(L.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",rows:"3"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Due Date"}),u.jsx("input",{type:"datetime-local",value:E,onChange:L=>T(L.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Questions *"}),u.jsxs("button",{type:"button",onClick:Vi,className:"text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1",children:[u.jsx(yp,{className:"h-4 w-4"}),"Add Question"]})]}),u.jsx("div",{className:"space-y-3",children:_.map((L,Y)=>u.jsxs("div",{className:"border border-gray-200 rounded-md p-4",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsxs("span",{className:"text-sm font-medium text-gray-700",children:["Question ",Y+1]}),_.length>1&&u.jsx("button",{type:"button",onClick:()=>os(Y),className:"text-red-600 hover:text-red-700",children:u.jsx(Lu,{className:"h-4 w-4"})})]}),u.jsx("input",{type:"text",value:L.question,onChange:pe=>nr(Y,"question",pe.target.value),placeholder:"Question text",className:"w-full px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"}),u.jsx("input",{type:"text",value:L.correctAnswer,onChange:pe=>nr(Y,"correctAnswer",pe.target.value),placeholder:"Correct answer",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"})]},Y))})]})]}),u.jsxs("button",{type:"submit",disabled:ue,className:"mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[u.jsx(Hc,{className:"h-4 w-4"}),ue?"Adding...":"Add Homework"]})]})]})}):u.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:u.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-md w-full",children:[u.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Admin Login"}),u.jsxs("form",{onSubmit:ut,children:[u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),u.jsx("input",{type:"password",value:e,onChange:L=>t(L.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),bt&&u.jsx("div",{className:"mb-4 text-red-600 text-sm",children:bt}),u.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"Login"})]}),u.jsx("button",{onClick:()=>n("/"),className:"mt-4 w-full text-gray-600 hover:text-gray-900 underline text-sm",children:"Back to site"})]})})}function vI(){return u.jsx(mm,{children:u.jsxs(pm,{children:[u.jsx(xn,{path:"/",element:u.jsx(Dp,{})}),u.jsx(xn,{path:"/login",element:u.jsx(fI,{})}),u.jsx(xn,{path:"/admin",element:u.jsx(wI,{})}),u.jsx(xn,{path:"/app/dashboard",element:u.jsx(yo,{children:u.jsx(gI,{})})}),u.jsx(xn,{path:"/app/subject/:subjectId/recordings",element:u.jsx(yo,{children:u.jsx(yI,{})})}),u.jsx(xn,{path:"/app/subject/:subjectId/homework",element:u.jsx(yo,{children:u.jsx(_I,{})})})]})})}wm.createRoot(document.getElementById("root")).render(u.jsx(F.StrictMode,{children:u.jsx(vI,{})}));
