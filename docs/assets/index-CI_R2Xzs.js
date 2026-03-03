import{r as $m,a as Wm,b as R,u as rn,c as on,L as ze,N as Hm,d as ih,B as zm,R as Gm,e as Je}from"./react-vendor-w9dygoMj.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var uo={exports:{}},Ps={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jc;function Km(){if(Jc)return Ps;Jc=1;var n=$m(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(l,h,f){var m,y={},w=null,T=null;f!==void 0&&(w=""+f),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(T=h.ref);for(m in h)s.call(h,m)&&!i.hasOwnProperty(m)&&(y[m]=h[m]);if(l&&l.defaultProps)for(m in h=l.defaultProps,h)y[m]===void 0&&(y[m]=h[m]);return{$$typeof:e,type:l,key:w,ref:T,props:y,_owner:r.current}}return Ps.Fragment=t,Ps.jsx=c,Ps.jsxs=c,Ps}var Xc;function Qm(){return Xc||(Xc=1,uo.exports=Km()),uo.exports}var a=Qm(),Tr={},Zc;function Ym(){if(Zc)return Tr;Zc=1;var n=Wm();return Tr.createRoot=n.createRoot,Tr.hydrateRoot=n.hydrateRoot,Tr}var Jm=Ym();/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zm=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),el=n=>{const e=Zm(n);return e.charAt(0).toUpperCase()+e.slice(1)},oh=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),ep=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=R.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:r="",children:i,iconNode:c,...l},h)=>R.createElement("svg",{ref:h,...tp,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:oh("lucide",r),...!i&&!ep(l)&&{"aria-hidden":"true"},...l},[...c.map(([f,m])=>R.createElement(f,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=(n,e)=>{const t=R.forwardRef(({className:s,...r},i)=>R.createElement(np,{ref:i,iconNode:e,className:oh(`lucide-${Xm(el(n))}`,`lucide-${n}`,s),...r}));return t.displayName=el(n),t};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],lt=Q("arrow-left",sp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Un=Q("arrow-right",rp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],op=Q("atom",ip);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],cp=Q("award",ap);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],up=Q("bell",lp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],dp=Q("book-marked",hp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],$r=Q("book-open",fp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],pp=Q("calculator",mp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],yp=Q("calendar-check",gp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Co=Q("calendar",_p);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],wp=Q("check",xp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ht=Q("circle-check-big",bp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ep=Q("circle-question-mark",vp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ia=Q("clock",Ip);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],tl=Q("download",Tp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Np=Q("external-link",Ap);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Hs=Q("file-text",Sp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],kp=Q("flask-conical",Rp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Pp=Q("globe",Cp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Kn=Q("graduation-cap",jp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Vp=Q("history",Dp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],Mp=Q("languages",Op);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],oa=Q("lock",Lp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Up=Q("log-out",Fp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],ah=Q("mail",Bp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],$p=Q("menu",qp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],gn=Q("message-circle",Wp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],zp=Q("music",Hp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Kp=Q("palette",Gp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Yp=Q("phone",Qp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Xp=Q("play",Jp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],nl=Q("save",Zp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],sl=Q("sparkles",eg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ng=Q("star",tg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],rg=Q("target",sg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],ch=Q("trending-up",ig);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],lh=Q("user-check",og);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],rl=Q("users",ag);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Qn=Q("video",cg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ug=Q("x",lg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],uh=Q("zoom-in",hg),hh="/assets/testimonial1-5gwMtUAO-5gwMtUAO.mp4",dh="/assets/testimonial2-D0fw-lJA.mp4",fh="/assets/testmonial3-CD7BqzK1.mp4",mh="/assets/testimonial4-DLVnnJv5.mp4",ph="/assets/testimonial5-CpY5IMND.mp4";function dg(){typeof window<"u"&&window.fbq&&window.fbq("track","PageView")}function il(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booking",content_category:"GCSE Tuition"})}function Ar(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"WhatsApp Inquiry",content_category:"GCSE Tuition"})}function fg(){typeof window<"u"&&window.fbq&&window.fbq("track","Purchase",{currency:"GBP"})}function mg(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booked",content_category:"GCSE Tuition"})}function pg(){typeof window<"u"&&window.fbq&&window.fbq("track","BOOK NOW",{value:0,currency:"GBP"})}const Wr="/assets/nottingham-university-logo-Bvc07xhs.png",Hr="/assets/King's_College_London_logo-XbRZheqd.svg",zr="/assets/cambridge-64gH2uf-.jpg",Gr="/assets/Imperial-College-Logo-CiZ74UPN.png",Kr="/assets/warwick-DzXBUNN5.svg",gg="/assets/aqa-R9eUC-1Y.jpg",yg="/assets/edexcel-vector-logo-BkmWVkxU.png";function _g({src:n,className:e,showControls:t=!0}){const s=R.useRef(null);return R.useEffect(()=>{const r=s.current;if(!r)return;const i=()=>{r.readyState>=2&&(r.currentTime=.01,r.pause())};return r.addEventListener("loadedmetadata",i),r.readyState<2?r.load():i(),()=>{r.removeEventListener("loadedmetadata",i)}},[n]),a.jsxs("video",{ref:s,className:e,controls:t,playsInline:!0,preload:"metadata",children:[a.jsx("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]})}function ol(){const n=rn(),e=on(),t=[{src:ph,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:mh,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:fh,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:dh,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:hh,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],s=t.length,r=[...t,...t,...t],i=s,c=s*2,[l,h]=R.useState(!1),[f,m]=R.useState(null),[y,w]=R.useState(!1),[T,C]=R.useState(i),[j,P]=R.useState(!0),[M,D]=R.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),U=g=>g===1?"Improved by 1 grade":`Improved by ${g} grades`;R.useEffect(()=>{const g=()=>{const b=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;D(b)};return g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]),R.useEffect(()=>{if(T<i||T>=c){P(!1);const g=T<i?T+s:T-s;C(g),requestAnimationFrame(()=>{requestAnimationFrame(()=>P(!0))})}},[T,i,c,s]);const Y=g=>{m(f===g?null:g)},ue=()=>{C(g=>g-1)},se=()=>{C(g=>g+1)},E=()=>{const g="https://calendly.com/admin-myschola/30min",b=window.innerWidth<768;if(window.Calendly)window.Calendly.initPopupWidget({url:g,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0});else{const v=document.createElement("script");v.src="https://assets.calendly.com/assets/external/widget.js",v.async=!0,v.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:g,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0})},document.body.appendChild(v),setTimeout(()=>{window.Calendly||window.open(g,"_blank","noopener,noreferrer")},1e3)}},_=()=>{il(),n("/booking",{replace:!1}),E()};return R.useEffect(()=>{if(e.pathname==="/booking"&&!y){il(),w(!0);const g=setTimeout(()=>{E()},300);return()=>clearTimeout(g)}else e.pathname!=="/booking"&&w(!1)},[e.pathname]),a.jsxs("div",{className:"min-h-screen bg-white",children:[a.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),a.jsx("div",{className:"w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md",children:"Join our February cohort as soon as possible — spaces are running out!"}),a.jsxs("nav",{className:"sticky top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center h-16",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx(Kn,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),a.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),a.jsx("div",{className:"hidden md:flex justify-center",children:a.jsxs("div",{className:"flex items-center space-x-8",children:[a.jsx("a",{href:"#home",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),a.jsx("a",{href:"#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),a.jsx("a",{href:"#subjects",className:"text-gray-700 hover:text-blue-600 transition",children:"Subjects"}),a.jsx("a",{href:"#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),a.jsx("a",{href:"#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"})]})}),a.jsxs("div",{className:"flex items-center justify-end",children:[a.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[a.jsx(ze,{to:"/login",className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center","aria-label":"Log in",children:"Log In"}),a.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Ar,className:"bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2","aria-label":"Contact us on WhatsApp",children:[a.jsx(gn,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})]}),a.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>h(!l),"aria-label":l?"Close menu":"Open menu","aria-expanded":l,"aria-controls":"mobile-menu",children:l?a.jsx(ug,{className:"h-6 w-6","aria-hidden":"true"}):a.jsx($p,{className:"h-6 w-6","aria-hidden":"true"})})]})]})}),l&&a.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:a.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[a.jsx("a",{href:"#home",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),a.jsx("a",{href:"#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),a.jsx("a",{href:"#subjects",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Subjects"}),a.jsx("a",{href:"#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),a.jsx("a",{href:"#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),a.jsx(ze,{to:"/login",className:"block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",role:"menuitem",children:"Log In"}),a.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Ar,className:"block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2","aria-label":"Contact us on WhatsApp",role:"menuitem",children:a.jsxs("span",{className:"inline-flex items-center gap-2",children:[a.jsx(gn,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})})]})})]}),a.jsxs("main",{id:"main-content",children:[a.jsx("section",{id:"home",className:"pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Hero section",children:a.jsx("div",{className:"max-w-7xl mx-auto",children:a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"relative inline-block px-2",children:a.jsxs("h1",{className:"relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6",children:["MySchola: #1 GCSE Tutoring Platform for",a.jsx("span",{className:"text-blue-600",children:" Years 9-11"})]})}),a.jsxs("p",{className:"text-lg sm:text-xl text-gray-600 mb-3 sm:mb-4 max-w-3xl mx-auto px-2",children:[a.jsx("strong",{children:"GCSE Maths, English & Science"})," via Zoom"]}),a.jsx("p",{className:"text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2",children:"Personalised lessons with one-to-one support from expert tutors. Your child only sees the teacher - no distractions, maximum focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons."}),a.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:a.jsxs("button",{type:"button",onClick:_,className:"bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation","aria-label":"Book a free consultation",children:["Book Free Consultation",a.jsx(Un,{className:"ml-2 h-5 w-5 flex-shrink-0","aria-hidden":"true"})]})})]})})}),a.jsx("section",{id:"how-it-works",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"how-it-works-heading",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsx("h2",{id:"how-it-works-heading",className:"text-4xl font-bold text-center mb-12",children:"How Our Lessons Work"}),a.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-3xl mx-auto",children:"A clear, supportive structure that keeps students confident and parents fully in the loop."}),a.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[a.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[a.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:a.jsx(lh,{className:"h-8 w-8 text-white"})}),a.jsx("h3",{className:"text-xl font-semibold mb-2",children:"One-to-One Support"}),a.jsx("p",{className:"text-gray-600",children:"Personalised lessons with one-to-one support. Your child only sees the teacher, ensuring privacy and focus."})]}),a.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[a.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:a.jsx(uh,{className:"h-8 w-8 text-white"})}),a.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Via Zoom"}),a.jsx("p",{className:"text-gray-600",children:"Convenient online lessons from the comfort of your home. High-quality video and interactive whiteboard. Webcam and microphone are optional - we use Zoom chat to check engagement, and parents can monitor participation for privacy."})]}),a.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[a.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:a.jsx(oa,{className:"h-8 w-8 text-white"})}),a.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Student Privacy"}),a.jsx("p",{className:"text-gray-600",children:"Your child only sees the teacher. Private, secure sessions designed for maximum learning focus. Webcam and mic are optional - we use Zoom chat for communication, and parents can check engagement for privacy reasons."})]}),a.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[a.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:a.jsx(gn,{className:"h-8 w-8 text-white"})}),a.jsx("h3",{className:"text-xl font-semibold mb-2",children:"24/7 Personalised Support"}),a.jsx("p",{className:"text-gray-600",children:"Students can ask questions anytime between lessons. Tutors respond with personalised explanations, feedback, and next-step guidance."})]}),a.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[a.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:a.jsx(rl,{className:"h-8 w-8 text-white"})}),a.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Parent Evenings"}),a.jsx("p",{className:"text-gray-600",children:"Regular parent evenings to review progress, share targets, and agree on the next steps for maximum grade improvement."})]}),a.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[a.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:a.jsx(Hs,{className:"h-8 w-8 text-white"})}),a.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Regular Exam-Style Tests"}),a.jsx("p",{className:"text-gray-600",children:"We set regular exams and topic checks to track progress, build exam technique, and close gaps quickly."})]})]})]})}),a.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"benefits-heading",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsx("h2",{id:"benefits-heading",className:"text-4xl font-bold text-center mb-4",children:"Benefits for Parents & Students"}),a.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Why thousands of families choose MySchola for GCSE success"}),a.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[a.jsxs("div",{className:"flex items-center mb-3",children:[a.jsx(ch,{className:"h-6 w-6 text-green-500 mr-2","aria-hidden":"true"}),a.jsx("h3",{className:"text-xl font-semibold",children:"Grade Improvement"})]}),a.jsx("p",{className:"text-gray-600",children:"Students consistently improve by 2-3 grades with our proven teaching methods and personalised approach."})]}),a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[a.jsxs("div",{className:"flex items-center mb-3",children:[a.jsx(cp,{className:"h-6 w-6 text-blue-500 mr-2","aria-hidden":"true"}),a.jsx("h3",{className:"text-xl font-semibold",children:"Confidence Building"})]}),a.jsx("p",{className:"text-gray-600",children:"Watch your child's confidence soar as they master difficult concepts and see their progress week by week."})]}),a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[a.jsxs("div",{className:"flex items-center mb-3",children:[a.jsx(rg,{className:"h-6 w-6 text-red-500 mr-2","aria-hidden":"true"}),a.jsx("h3",{className:"text-xl font-semibold",children:"Exam Focus"})]}),a.jsx("p",{className:"text-gray-600",children:"Targeted exam preparation with past papers, exam techniques, and strategies tailored to GCSE requirements."})]}),a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[a.jsxs("div",{className:"flex items-center mb-3",children:[a.jsx(ia,{className:"h-6 w-6 text-purple-500 mr-2","aria-hidden":"true"}),a.jsx("h3",{className:"text-xl font-semibold",children:"Flexible Scheduling"})]}),a.jsx("p",{className:"text-gray-600",children:"Choose times that work around your family's schedule. Evening and weekend slots available."})]}),a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[a.jsxs("div",{className:"flex items-center mb-3",children:[a.jsx(rl,{className:"h-6 w-6 text-orange-500 mr-2","aria-hidden":"true"}),a.jsx("h3",{className:"text-xl font-semibold",children:"Expert Tutors"})]}),a.jsx("p",{className:"text-gray-600",children:"Qualified UK teachers with DBS checks and proven track records of GCSE success."})]}),a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[a.jsxs("div",{className:"flex items-center mb-3",children:[a.jsx($r,{className:"h-6 w-6 text-indigo-500 mr-2","aria-hidden":"true"}),a.jsx("h3",{className:"text-xl font-semibold",children:"Personalised Curriculum"})]}),a.jsx("p",{className:"text-gray-600",children:"Lessons tailored to your child's learning style, pace, and specific areas that need improvement."})]})]})]})}),a.jsx("section",{id:"testimonials",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"video-testimonials-heading",children:a.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[a.jsx("h2",{id:"video-testimonials-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Video Testimonials"}),a.jsx("p",{className:"text-gray-600 mb-12",children:"Short clips from students, with the subject and grade improvements below."}),a.jsxs("div",{className:"relative sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[a.jsx("button",{type:"button",onClick:ue,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:a.jsx(lt,{className:"h-5 w-5","aria-hidden":"true"})}),a.jsx("div",{className:"overflow-hidden sm:col-start-2",children:a.jsx("div",{className:`flex ${j?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${T*(100/M)}%)`},children:r.map((g,b)=>{const v=Math.floor(M/2),I=b===T+v;return a.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/M}%`},children:a.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${I?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[a.jsx(_g,{src:g.src,className:"w-full h-auto rounded-t-2xl"}),a.jsxs("div",{className:"p-4 text-center",children:[a.jsx("p",{className:"text-lg font-semibold text-gray-900",children:g.name}),a.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[a.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:g.subjects.join(" / ")}),a.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:U(g.improvedBy)})]})]})]})},`${g.id}-${b}`)})})}),a.jsx("button",{type:"button",onClick:se,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:a.jsx(Un,{className:"h-5 w-5","aria-hidden":"true"})}),a.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[a.jsx("button",{type:"button",onClick:ue,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:a.jsx(lt,{className:"h-5 w-5","aria-hidden":"true"})}),a.jsx("button",{type:"button",onClick:se,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:a.jsx(Un,{className:"h-5 w-5","aria-hidden":"true"})})]})]})]})}),a.jsx("section",{id:"text-testimonials",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"testimonials-heading",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold text-center mb-4",children:"What Parents & Students Say"}),a.jsx("p",{className:"text-center text-gray-600 mb-12",children:"Real results from real families"}),a.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-12",children:[a.jsxs("div",{className:"bg-blue-600 text-white p-6 rounded-lg text-center",children:[a.jsx("div",{className:"text-4xl font-bold mb-2",children:"95%"}),a.jsx("div",{className:"text-blue-100",children:"Students improve grades"})]}),a.jsxs("div",{className:"bg-green-600 text-white p-6 rounded-lg text-center",children:[a.jsx("div",{className:"text-4xl font-bold mb-2",children:"2-3"}),a.jsx("div",{className:"text-green-100",children:"Grade improvement average"})]}),a.jsxs("div",{className:"bg-purple-600 text-white p-6 rounded-lg text-center",children:[a.jsx("div",{className:"text-4xl font-bold mb-2",children:"300+"}),a.jsx("div",{className:"text-purple-100",children:"Successful students"})]})]}),a.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{name:"Aisha K, Parent",text:"My son started the term lacking confidence in Maths and was sitting at a Grade 5. After weekly Zoom lessons with MySchola, his understanding improved steadily and he finished the term with a Grade 7.",rating:5,result:"Maths: Grade 5 → Grade 7"},{name:"Rahul P, Parent",text:"MySchola was patient and explained the Poetry Anthology texts in a way my daughter could finally understand. Her confidence grew each week and her English grade jumped from a 5 to an 8.",rating:5,result:"English Lit: Grade 5 → Grade 8"},{name:"Emma L., Parent",text:"The confidence my son gained was incredible. He went from hating Chemistry especially Organic Chemistry to loving it. His Chemistry grade improved from 5 to 8. Worth every penny!",rating:5,result:"Chemistry: Grade 5 → Grade 8"},{name:"Michael R., Student",text:"Going through past papers and custom exam style questions with Isam and Hamza made a huge difference. Physics finally started to make sense, and I learned how to approach exam questions properly.",rating:5,result:"Physics: Grade 6 → Grade 9"},{name:"Jasmin K., Parent",text:"As a working parent, the flexible scheduling in the evenings was a lifesaver. My daughter could do sessions that fit around school and activities. Highly recommend!",rating:4,result:"Maths: Grade 6 → Grade 8"},{name:"Emmanuel P., Parent",text:"The privacy of the sessions meant my son felt comfortable making mistakes and asking for help. His confidence has grown so much, and his grades show it!",rating:5,result:"English: Grade 5 → Grade 7"}].map((g,b)=>a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[a.jsx("div",{className:"flex mb-4",children:[...Array(g.rating)].map((v,I)=>a.jsx(ng,{className:"h-5 w-5 text-yellow-400 fill-current","aria-hidden":"true"},I))}),a.jsxs("p",{className:"text-gray-600 mb-4 italic",children:['"',g.text,'"']}),a.jsxs("div",{className:"border-t pt-4",children:[a.jsxs("p",{className:"font-semibold text-gray-900",children:["— ",g.name]}),a.jsx("p",{className:"text-sm text-blue-600 font-medium mt-1",children:g.result})]})]},b))})]})}),a.jsx("section",{id:"subjects",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"subjects-heading",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsx("h2",{id:"subjects-heading",className:"text-4xl font-bold text-center mb-4",children:"Subjects We Offer"}),a.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Comprehensive GCSE support for Years 9-11"}),a.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{name:"Maths",description:"GCSE Maths (Foundation & Higher)"},{name:"Combined Science",description:"Trilogy and Synergy pathways"},{name:"Triple Science",description:"Biology, Chemistry, and Physics"},{name:"English Language",description:"Reading, writing, and language skills"},{name:"English Literature",description:"Poetry, prose, and drama analysis"}].map(g=>a.jsx("div",{className:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600",children:a.jsxs("div",{className:"flex items-start mb-2",children:[a.jsx(wp,{className:"h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0","aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-1",children:g.name}),a.jsx("p",{className:"text-gray-600 text-sm",children:g.description})]})]})},g.name))})]})}),a.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-white","aria-labelledby":"universities-heading",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("h2",{id:"universities-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Our tutors study at the UK's most prestigious universities"}),a.jsx("p",{className:"text-gray-600 max-w-3xl mx-auto",children:"Your education is everything. That's why we only hire the best in class. All of our tutors have stellar academic backgrounds and have first-hand experience with the rigorous exam process. Learn from the best to achieve your best."})]}),a.jsx("div",{className:"relative overflow-hidden",children:a.jsxs("div",{className:"flex animate-marquee",children:[[{src:Wr,alt:"University of Nottingham",name:"Nottingham"},{src:Hr,alt:"King's College London",name:"King's College"},{src:zr,alt:"University of Cambridge",name:"Cambridge"},{src:Gr,alt:"Imperial College London",name:"Imperial"},{src:Kr,alt:"University of Warwick",name:"Warwick"}].map((g,b)=>a.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:a.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-40 sm:h-48 lg:h-56 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:a.jsx("img",{src:g.src,alt:g.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`first-${b}`)),[{src:Wr,alt:"University of Nottingham",name:"Nottingham"},{src:Hr,alt:"King's College London",name:"King's College"},{src:zr,alt:"University of Cambridge",name:"Cambridge"},{src:Gr,alt:"Imperial College London",name:"Imperial"},{src:Kr,alt:"University of Warwick",name:"Warwick"}].map((g,b)=>a.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:a.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-40 sm:h-48 lg:h-56 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:a.jsx("img",{src:g.src,alt:g.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`second-${b}`))]})})]})}),a.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"exam-boards-heading",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("h2",{id:"exam-boards-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Expert tuition for every exam board"}),a.jsx("p",{className:"text-gray-600 max-w-3xl mx-auto",children:"Unlock academic success with tailored support across every exam board. Our team of expert tutors knows the ins and outs of each curriculum, offering customized guidance that fits your exact syllabus."})]}),a.jsx("div",{className:"relative overflow-hidden",children:a.jsx("div",{className:"flex animate-marquee-reverse",children:[...Array(3)].map((g,b)=>[{src:gg,alt:"AQA",name:"AQA"},{src:yg,alt:"Edexcel",name:"Edexcel"}].map((v,I)=>a.jsx("div",{className:"flex-shrink-0 mx-6 sm:mx-8 lg:mx-10",children:a.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 h-44 sm:h-52 lg:h-60 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:a.jsx("img",{src:v.src,alt:v.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`set-${b}-${I}`)))})})]})}),a.jsx("section",{id:"book-call",className:"py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600","aria-labelledby":"book-call-heading",children:a.jsxs("div",{className:"max-w-4xl mx-auto text-center text-white",children:[a.jsx("h2",{id:"book-call-heading",className:"text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 px-2",children:"Ready to Start Your Child's GCSE Success Journey?"}),a.jsx("p",{className:"text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-2",children:"Book a free consultation to discuss your child's needs and see how we can help them achieve their goals."}),a.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:a.jsxs("button",{type:"button",onClick:_,className:"bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 active:bg-gray-200 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation","aria-label":"Book a free consultation",children:["Book Free Consultation",a.jsx(Un,{className:"ml-2 h-5 w-5 flex-shrink-0","aria-hidden":"true"})]})}),a.jsx("p",{className:"text-blue-100 text-sm mt-6",children:"No card required • Free 15-minute consultation"})]})}),a.jsx("section",{id:"faq",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"faq-heading",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsx("h2",{id:"faq-heading",className:"text-4xl font-bold text-center mb-12",children:"Frequently Asked Questions"}),a.jsx("div",{className:"space-y-4",children:[{q:"How do the Zoom lessons work?",a:"Each lesson feels one-to-one via Zoom. Your child will see only the teacher, ensuring privacy and focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We use interactive whiteboards and screen sharing to make lessons engaging and effective. All sessions are recorded for your child to review later."},{q:"What equipment do we need?",a:"You just need a computer, tablet, or laptop with a stable internet connection. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We recommend using a desktop or laptop for the best experience with the interactive whiteboard."},{q:"How long are the sessions?",a:"All lessons are 60 minutes and this duration is fixed."},{q:"Can I choose the tutor?",a:"Yes! During your consultation, we'll discuss your child's learning style and match them with the best tutor. You can also request specific tutors based on availability."},{q:"What if my child misses a session?",a:"All sessions are recorded and uploaded. If your child misses a lesson, they can watch the recording at their convenience. You can ask any questions through our WhatsApp support, available 24/7."},{q:"Do you provide homework and practice materials?",a:"Absolutely! Each tutor provides tailored homework assignments, practice papers, and additional resources to reinforce learning between sessions. All materials are included in the lesson price."},{q:"How quickly will we see results?",a:"Most students see improvement within 4-6 weeks of regular sessions. However, every child is different. We track progress regularly and adjust our approach to ensure maximum effectiveness."},{q:"What age groups do you teach?",a:"We specialize in Years 9-11, preparing students for GCSEs. This includes both Foundation and Higher tier courses across all major GCSE subjects."}].map((g,b)=>a.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[a.jsxs("button",{className:"w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",onClick:()=>Y(b),"aria-expanded":f===b,"aria-controls":`faq-answer-${b}`,id:`faq-question-${b}`,children:[a.jsxs("span",{className:"font-semibold text-gray-900 flex items-center",children:[a.jsx(Ep,{className:"h-5 w-5 text-blue-600 mr-2","aria-hidden":"true"}),g.q]}),a.jsx("span",{className:"text-blue-600","aria-hidden":"true","aria-label":f===b?"Collapse answer":"Expand answer",children:f===b?"−":"+"})]}),f===b&&a.jsx("div",{id:`faq-answer-${b}`,className:"px-6 pb-4 text-gray-600",role:"region","aria-labelledby":`faq-question-${b}`,children:g.a})]},b))})]})}),a.jsx("section",{id:"contact",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"contact-heading",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsx("h2",{id:"contact-heading",className:"text-4xl font-bold text-center mb-12",children:"Get in Touch"}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[a.jsx(ah,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),a.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Email Us"}),a.jsx("a",{href:"mailto:support@myschola.uk",className:"text-gray-600 hover:text-blue-600 transition",children:"support@myschola.uk"})]}),a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[a.jsx(Yp,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),a.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Call Us"}),a.jsx("a",{href:"tel:+447344193804",className:"text-gray-600 hover:text-blue-600 transition",children:"+44 7344 193804"}),a.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Mon-Fri 9am-6pm"})]})]})]})}),a.jsx("section",{id:"privacy-policy",className:"py-20 px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Privacy Policy"}),a.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Information We Collect"}),a.jsx("p",{children:"We collect information that you provide directly to us, including your name, email address, phone number, and information about your child's educational needs. We also collect information automatically when you use our services, such as session recordings and progress data."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. How We Use Your Information"}),a.jsx("p",{children:"We use the information we collect to provide, maintain, and improve our tutoring services, process your bookings, communicate with you, and ensure the safety and security of our platform."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Data Security"}),a.jsx("p",{children:"We implement appropriate technical and organizational measures to protect your personal information. All tutors are DBS checked, and all Zoom sessions are encrypted and secure."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Session Recordings"}),a.jsx("p",{children:"Lessons may be recorded for educational purposes and quality assurance. Recordings are stored securely and are accessible only to authorized personnel and the student's account."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Your Rights"}),a.jsx("p",{children:"You have the right to access, update, or delete your personal information at any time. You can also request a copy of your data or withdraw consent for data processing."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Children's Privacy"}),a.jsx("p",{children:"We take children's privacy seriously. We only collect information necessary to provide our services, and all data handling complies with UK GDPR and Children's Code requirements."})]}),a.jsx("div",{children:a.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})}),a.jsx("section",{id:"terms-of-service",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Terms of Service"}),a.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Service Agreement"}),a.jsx("p",{children:"By booking a lesson or consultation with MySchola, you agree to these terms of service. Our services include feel one-to-one tutoring delivered via Zoom for students in Years 9-11."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. Booking and Cancellation"}),a.jsx("p",{children:"Lessons must be booked in advance. Cancellation policies only apply to pay-as-you-go bookings. For bundle purchases, if your child misses a lesson, they can watch the recorded video and ask any questions through our WhatsApp support, available 24/7."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Payment Terms"}),a.jsx("p",{children:"Payment is required in advance for lesson packages. We accept payment via Stripe. Refunds for unused lessons in a package will be calculated on a pro-rata basis, minus any applicable fees."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Tutor Matching"}),a.jsx("p",{children:"We strive to match students with the most suitable tutor. However, if you're not satisfied after the first session, we offer a free replacement tutor or full refund."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Student Conduct"}),a.jsx("p",{children:"Students are expected to attend lessons punctually, be respectful to tutors, and engage actively in learning. Any inappropriate behavior may result in session termination without refund."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Technical Requirements"}),a.jsx("p",{children:"You are responsible for ensuring you have adequate internet connection and equipment for Zoom sessions. Note that webcam and microphone are optional - not needed. We use Zoom chat to check engagement, and parents can monitor participation for privacy reasons. We are not liable for technical issues on your end, though we'll do our best to accommodate."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"7. Guarantees"}),a.jsx("p",{children:"While we work hard to help students achieve their goals, we cannot guarantee specific grade improvements as results depend on multiple factors including student effort, attendance, and engagement."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"8. Intellectual Property"}),a.jsx("p",{children:"All teaching materials, resources, and session recordings are the intellectual property of MySchola and are for the personal use of the enrolled student only."})]}),a.jsx("div",{children:a.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})})]}),a.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center mb-4",children:[a.jsx(Kn,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),a.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),a.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 9-11 via Zoom."})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),a.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[a.jsx("li",{children:a.jsx("a",{href:"#home",className:"hover:text-white transition",children:"Home"})}),a.jsx("li",{children:a.jsx("a",{href:"#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),a.jsx("li",{children:a.jsx("a",{href:"#subjects",className:"hover:text-white transition",children:"Subjects"})}),a.jsx("li",{children:a.jsx("a",{href:"#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),a.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[a.jsx("li",{children:a.jsx("a",{href:"#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),a.jsx("li",{children:a.jsx("a",{href:"#terms-of-service",className:"hover:text-white transition",children:"Terms of Service"})}),a.jsx("li",{children:a.jsx("a",{href:"#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),a.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[a.jsx("li",{children:a.jsx("a",{href:"mailto:support@myschola.uk",className:"hover:text-white transition",children:"support@myschola.uk"})}),a.jsx("li",{children:a.jsx("a",{href:"tel:+447344193804",className:"hover:text-white transition",children:"+44 7344 193804"})}),a.jsx("li",{children:a.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Ar,className:"text-green-400 hover:text-green-300 transition inline-flex items-center gap-2",children:[a.jsx(gn,{className:"h-4 w-4","aria-hidden":"true"}),"Contact Us on WhatsApp"]})}),a.jsx("li",{children:a.jsx("button",{type:"button",onClick:_,className:"bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation text-sm sm:text-base","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),a.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:a.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 9-11."]})})]})}),a.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Ar,className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation","aria-label":"Contact us on WhatsApp",children:a.jsx(gn,{className:"h-5 w-5 sm:h-6 sm:w-6","aria-hidden":"true"})})]})}const xg=()=>{};var al={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},wg=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],c=n[t++],l=n[t++],h=((r&7)<<18|(i&63)<<12|(c&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const i=n[t++],c=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|c&63)}}return e.join("")},yh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],c=r+1<n.length,l=c?n[r+1]:0,h=r+2<n.length,f=h?n[r+2]:0,m=i>>2,y=(i&3)<<4|l>>4;let w=(l&15)<<2|f>>6,T=f&63;h||(T=64,c||(w=64)),s.push(t[m],t[y],t[w],t[T])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(gh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const f=r<n.length?t[n.charAt(r)]:64;++r;const y=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||l==null||f==null||y==null)throw new bg;const w=i<<2|l>>4;if(s.push(w),f!==64){const T=l<<4&240|f>>2;if(s.push(T),y!==64){const C=f<<6&192|y;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vg=function(n){const e=gh(n);return yh.encodeByteArray(e,!0)},Qr=function(n){return vg(n).replace(/\./g,"")},_h=function(n){try{return yh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Eg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ig=()=>Eg().__FIREBASE_DEFAULTS__,Tg=()=>{if(typeof process>"u"||typeof al>"u")return;const n=al.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ag=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_h(n[1]);return e&&JSON.parse(e)},_i=()=>{try{return xg()||Ig()||Tg()||Ag()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xh=n=>{var e,t;return(t=(e=_i())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Ng=n=>{const e=xh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},wh=()=>{var n;return(n=_i())==null?void 0:n.config},bh=n=>{var e;return(e=_i())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function ss(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Rg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Qr(JSON.stringify(t)),Qr(JSON.stringify(c)),""].join(".")}const Fs={};function kg(){const n={prod:[],emulator:[]};for(const e of Object.keys(Fs))Fs[e]?n.emulator.push(e):n.prod.push(e);return n}function Cg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let cl=!1;function Eh(n,e){if(typeof window>"u"||typeof document>"u"||!ss(window.location.host)||Fs[n]===e||Fs[n]||cl)return;Fs[n]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",i=kg().prod.length>0;function c(){const w=document.getElementById(s);w&&w.remove()}function l(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,T){w.setAttribute("width","24"),w.setAttribute("id",T),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function f(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{cl=!0,c()},w}function m(w,T){w.setAttribute("id",T),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function y(){const w=Cg(s),T=t("text"),C=document.getElementById(T)||document.createElement("span"),j=t("learnmore"),P=document.getElementById(j)||document.createElement("a"),M=t("preprendIcon"),D=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const U=w.element;l(U),m(P,j);const Y=f();h(D,M),U.append(D,C,P,Y),document.body.appendChild(U)}i?(C.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function jg(){var e;const n=(e=_i())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ih(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Og(){const n=$e();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Mg(){return!jg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Th(){try{return typeof indexedDB=="object"}catch{return!1}}function Ah(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function Lg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="FirebaseError";class ft extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Fg,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,An.prototype.create)}}class An{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],c=i?Ug(i,s):"Error",l=`${this.serviceName}: ${c} (${r}).`;return new ft(r,l,s)}}function Ug(n,e){return n.replace(Bg,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Bg=/\{\$([^}]+)}/g;function qg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Jt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],c=e[r];if(ll(i)&&ll(c)){if(!Jt(i,c))return!1}else if(i!==c)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function ll(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function js(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ds(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function $g(n,e){const t=new Wg(n,e);return t.subscribe.bind(t)}class Wg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Hg(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=ho),r.error===void 0&&(r.error=ho),r.complete===void 0&&(r.complete=ho);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ho(){}/**
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
 */const zg=1e3,Gg=2,Kg=14400*1e3,Qg=.5;function ul(n,e=zg,t=Gg){const s=e*Math.pow(t,n),r=Math.round(Qg*s*(Math.random()-.5)*2);return Math.min(Kg,s+r)}/**
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
 */function we(n){return n&&n._delegate?n._delegate:n}class ut{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pn="[DEFAULT]";/**
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
 */class Yg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Sg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xg(e))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pn){return this.instances.has(e)}getOptions(e=pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&c.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Jg(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=pn){return this.component?this.component.multipleInstances?e:pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jg(n){return n===pn?void 0:n}function Xg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Zg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Yg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const ey={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},ty=Z.INFO,ny={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},sy=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=ny[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xi{constructor(e){this.name=e,this._logLevel=ty,this._logHandler=sy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ey[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const ry=(n,e)=>e.some(t=>n instanceof t);let hl,dl;function iy(){return hl||(hl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oy(){return dl||(dl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nh=new WeakMap,Po=new WeakMap,Sh=new WeakMap,fo=new WeakMap,aa=new WeakMap;function ay(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",c)},i=()=>{t(zt(n.result)),r()},c=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Nh.set(t,n)}).catch(()=>{}),aa.set(e,n),e}function cy(n){if(Po.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",c),n.removeEventListener("abort",c)},i=()=>{t(),r()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",c),n.addEventListener("abort",c)});Po.set(n,e)}let jo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Po.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Sh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return zt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ly(n){jo=n(jo)}function uy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(mo(this),e,...t);return Sh.set(s,e.sort?e.sort():[e]),zt(s)}:oy().includes(n)?function(...e){return n.apply(mo(this),e),zt(Nh.get(this))}:function(...e){return zt(n.apply(mo(this),e))}}function hy(n){return typeof n=="function"?uy(n):(n instanceof IDBTransaction&&cy(n),ry(n,iy())?new Proxy(n,jo):n)}function zt(n){if(n instanceof IDBRequest)return ay(n);if(fo.has(n))return fo.get(n);const e=hy(n);return e!==n&&(fo.set(n,e),aa.set(e,n)),e}const mo=n=>aa.get(n);function Rh(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const c=indexedDB.open(n,e),l=zt(c);return s&&c.addEventListener("upgradeneeded",h=>{s(zt(c.result),h.oldVersion,h.newVersion,zt(c.transaction),h)}),t&&c.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{i&&h.addEventListener("close",()=>i()),r&&h.addEventListener("versionchange",f=>r(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const dy=["get","getKey","getAll","getAllKeys","count"],fy=["put","add","delete","clear"],po=new Map;function fl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(po.get(e))return po.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=fy.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||dy.includes(t)))return;const i=async function(c,...l){const h=this.transaction(c,r?"readwrite":"readonly");let f=h.store;return s&&(f=f.index(l.shift())),(await Promise.all([f[t](...l),r&&h.done]))[0]};return po.set(e,i),i}ly(n=>({...n,get:(e,t,s)=>fl(e,t)||n.get(e,t,s),has:(e,t)=>!!fl(e,t)||n.has(e,t)}));/**
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
 */class my{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(py(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function py(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Do="@firebase/app",ml="0.14.6";/**
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
 */const Rt=new xi("@firebase/app"),gy="@firebase/app-compat",yy="@firebase/analytics-compat",_y="@firebase/analytics",xy="@firebase/app-check-compat",wy="@firebase/app-check",by="@firebase/auth",vy="@firebase/auth-compat",Ey="@firebase/database",Iy="@firebase/data-connect",Ty="@firebase/database-compat",Ay="@firebase/functions",Ny="@firebase/functions-compat",Sy="@firebase/installations",Ry="@firebase/installations-compat",ky="@firebase/messaging",Cy="@firebase/messaging-compat",Py="@firebase/performance",jy="@firebase/performance-compat",Dy="@firebase/remote-config",Vy="@firebase/remote-config-compat",Oy="@firebase/storage",My="@firebase/storage-compat",Ly="@firebase/firestore",Fy="@firebase/ai",Uy="@firebase/firestore-compat",By="firebase",qy="12.6.0";/**
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
 */const Vo="[DEFAULT]",$y={[Do]:"fire-core",[gy]:"fire-core-compat",[_y]:"fire-analytics",[yy]:"fire-analytics-compat",[wy]:"fire-app-check",[xy]:"fire-app-check-compat",[by]:"fire-auth",[vy]:"fire-auth-compat",[Ey]:"fire-rtdb",[Iy]:"fire-data-connect",[Ty]:"fire-rtdb-compat",[Ay]:"fire-fn",[Ny]:"fire-fn-compat",[Sy]:"fire-iid",[Ry]:"fire-iid-compat",[ky]:"fire-fcm",[Cy]:"fire-fcm-compat",[Py]:"fire-perf",[jy]:"fire-perf-compat",[Dy]:"fire-rc",[Vy]:"fire-rc-compat",[Oy]:"fire-gcs",[My]:"fire-gcs-compat",[Ly]:"fire-fst",[Uy]:"fire-fst-compat",[Fy]:"fire-vertex","fire-js":"fire-js",[By]:"fire-js-all"};/**
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
 */const Yr=new Map,Wy=new Map,Oo=new Map;function pl(n,e){try{n.container.addComponent(e)}catch(t){Rt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Et(n){const e=n.name;if(Oo.has(e))return Rt.debug(`There were multiple attempts to register component ${e}.`),!1;Oo.set(e,n);for(const t of Yr.values())pl(t,n);for(const t of Wy.values())pl(t,n);return!0}function Nn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ot(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Hy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gt=new An("app","Firebase",Hy);/**
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
 */class zy{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
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
 */const rs=qy;function kh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Vo,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Gt.create("bad-app-name",{appName:String(r)});if(t||(t=wh()),!t)throw Gt.create("no-options");const i=Yr.get(r);if(i){if(Jt(t,i.options)&&Jt(s,i.config))return i;throw Gt.create("duplicate-app",{appName:r})}const c=new Zg(r);for(const h of Oo.values())c.addComponent(h);const l=new zy(t,s,c);return Yr.set(r,l),l}function ca(n=Vo){const e=Yr.get(n);if(!e&&n===Vo&&wh())return kh();if(!e)throw Gt.create("no-app",{appName:n});return e}function st(n,e,t){let s=$y[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const c=[`Unable to register library "${s}" with version "${e}":`];r&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&c.push("and"),i&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rt.warn(c.join(" "));return}Et(new ut(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Gy="firebase-heartbeat-database",Ky=1,zs="firebase-heartbeat-store";let go=null;function Ch(){return go||(go=Rh(Gy,Ky,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Gt.create("idb-open",{originalErrorMessage:n.message})})),go}async function Qy(n){try{const t=(await Ch()).transaction(zs),s=await t.objectStore(zs).get(Ph(n));return await t.done,s}catch(e){if(e instanceof ft)Rt.warn(e.message);else{const t=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rt.warn(t.message)}}}async function gl(n,e){try{const s=(await Ch()).transaction(zs,"readwrite");await s.objectStore(zs).put(e,Ph(n)),await s.done}catch(t){if(t instanceof ft)Rt.warn(t.message);else{const s=Gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rt.warn(s.message)}}}function Ph(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Yy=1024,Jy=30;class Xy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new e_(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=yl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(c=>c.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Jy){const c=t_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Rt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yl(),{heartbeatsToSend:s,unsentEntries:r}=Zy(this._heartbeatsCache.heartbeats),i=Qr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Rt.warn(t),""}}}function yl(){return new Date().toISOString().substring(0,10)}function Zy(n,e=Yy){const t=[];let s=n.slice();for(const r of n){const i=t.find(c=>c.agent===r.agent);if(i){if(i.dates.push(r.date),_l(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),_l(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class e_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Th()?Ah().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Qy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return gl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return gl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _l(n){return Qr(JSON.stringify({version:2,heartbeats:n})).length}function t_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function n_(n){Et(new ut("platform-logger",e=>new my(e),"PRIVATE")),Et(new ut("heartbeat",e=>new Xy(e),"PRIVATE")),st(Do,ml,n),st(Do,ml,"esm2020"),st("fire-js","")}n_("");var s_="firebase",r_="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st(s_,r_,"app");function jh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const i_=jh,Dh=new An("auth","Firebase",jh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new xi("@firebase/auth");function o_(n,...e){Jr.logLevel<=Z.WARN&&Jr.warn(`Auth (${rs}): ${n}`,...e)}function jr(n,...e){Jr.logLevel<=Z.ERROR&&Jr.error(`Auth (${rs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n,...e){throw la(n,...e)}function yt(n,...e){return la(n,...e)}function Vh(n,e,t){const s={...i_(),[e]:t};return new An("auth","Firebase",s).create(e,{appName:n.name})}function Kt(n){return Vh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function la(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Dh.create(n,...e)}function W(n,e,...t){if(!n)throw la(e,...t)}function Tt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw jr(e),new Error(e)}function kt(n,e){n||Tt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function a_(){return xl()==="http:"||xl()==="https:"}function xl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(a_()||Ih()||"connection"in navigator)?navigator.onLine:!0}function l_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t){this.shortDelay=e,this.longDelay=t,kt(t>e,"Short delay should be less than long delay!"),this.isMobile=Pg()||Vg()}get(){return c_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(n,e){kt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],d_=new ir(3e4,6e4);function Sn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function an(n,e,t,s,r={}){return Mh(n,r,async()=>{let i={},c={};s&&(e==="GET"?c=s:i={body:JSON.stringify(s)});const l=rr({key:n.config.apiKey,...c}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:h,...i};return Dg()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&ss(n.emulatorConfig.host)&&(f.credentials="include"),Oh.fetch()(await Lh(n,n.config.apiHost,t,l),f)})}async function Mh(n,e,t){n._canInitEmulator=!1;const s={...u_,...e};try{const r=new m_(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const c=await i.json();if("needConfirmation"in c)throw Nr(n,"account-exists-with-different-credential",c);if(i.ok&&!("errorMessage"in c))return c;{const l=i.ok?c.errorMessage:c.error.message,[h,f]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nr(n,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw Nr(n,"email-already-in-use",c);if(h==="USER_DISABLED")throw Nr(n,"user-disabled",c);const m=s[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Vh(n,m,f);ht(n,m)}}catch(r){if(r instanceof ft)throw r;ht(n,"network-request-failed",{message:String(r)})}}async function wi(n,e,t,s,r={}){const i=await an(n,e,t,s,r);return"mfaPendingCredential"in i&&ht(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Lh(n,e,t,s){const r=`${e}${t}?${s}`,i=n,c=i.config.emulator?ua(n.config,r):`${n.config.apiScheme}://${r}`;return h_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(c).toString():c}function f_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class m_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(yt(this.auth,"network-request-failed")),d_.get())})}}function Nr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=yt(n,e,s);return r.customData._tokenResponse=t,r}function wl(n){return n!==void 0&&n.enterprise!==void 0}class p_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return f_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function g_(n,e){return an(n,"GET","/v2/recaptchaConfig",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(n,e){return an(n,"POST","/v1/accounts:delete",e)}async function Xr(n,e){return an(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function __(n,e=!1){const t=we(n),s=await t.getIdToken(e),r=ha(s);W(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,c=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Us(yo(r.auth_time)),issuedAtTime:Us(yo(r.iat)),expirationTime:Us(yo(r.exp)),signInProvider:c||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yo(n){return Number(n)*1e3}function ha(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return jr("JWT malformed, contained fewer than 3 sections"),null;try{const r=_h(t);return r?JSON.parse(r):(jr("Failed to decode base64 JWT payload"),null)}catch(r){return jr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function bl(n){const e=ha(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ft&&x_(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function x_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zr(n){var y;const e=n.auth,t=await n.getIdToken(),s=await Gs(n,Xr(e,{idToken:t}));W(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(y=r.providerUserInfo)!=null&&y.length?Fh(r.providerUserInfo):[],c=v_(n.providerData,i),l=n.isAnonymous,h=!(n.email&&r.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:c,metadata:new Lo(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function b_(n){const e=we(n);await Zr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function v_(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Fh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E_(n,e){const t=await Mh(n,{},async()=>{const s=rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,c=await Lh(n,r,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:s};return n.emulatorConfig&&ss(n.emulatorConfig.host)&&(h.credentials="include"),Oh.fetch()(c,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function I_(n,e){return an(n,"POST","/v2/accounts:revokeToken",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=bl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await E_(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,c=new qn;return s&&(W(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),r&&(W(typeof r=="string","internal-error",{appName:e}),c.accessToken=r),i&&(W(typeof i=="number","internal-error",{appName:e}),c.expirationTime=i),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qn,this.toJSON())}_performRefresh(){return Tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class at{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new w_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Lo(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Gs(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return __(this,e)}reload(){return b_(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new at({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Zr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(Kt(this.auth));const e=await this.getIdToken();return await Gs(this,y_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,c=t.photoURL??void 0,l=t.tenantId??void 0,h=t._redirectEventId??void 0,f=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:y,emailVerified:w,isAnonymous:T,providerData:C,stsTokenManager:j}=t;W(y&&j,e,"internal-error");const P=qn.fromJSON(this.name,j);W(typeof y=="string",e,"internal-error"),Ft(s,e.name),Ft(r,e.name),W(typeof w=="boolean",e,"internal-error"),W(typeof T=="boolean",e,"internal-error"),Ft(i,e.name),Ft(c,e.name),Ft(l,e.name),Ft(h,e.name),Ft(f,e.name),Ft(m,e.name);const M=new at({uid:y,auth:e,email:r,emailVerified:w,displayName:s,isAnonymous:T,photoURL:c,phoneNumber:i,tenantId:l,stsTokenManager:P,createdAt:f,lastLoginAt:m});return C&&Array.isArray(C)&&(M.providerData=C.map(D=>({...D}))),h&&(M._redirectEventId=h),M}static async _fromIdTokenResponse(e,t,s=!1){const r=new qn;r.updateFromServerResponse(t);const i=new at({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Zr(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];W(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Fh(r.providerUserInfo):[],c=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new qn;l.updateFromIdToken(s);const h=new at({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:c}),f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Lo(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=new Map;function At(n){kt(n instanceof Function,"Expected a class definition");let e=vl.get(n);return e?(kt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,vl.set(n,e),e)}/**
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
 */class Uh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Uh.type="NONE";const El=Uh;/**
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
 */function Dr(n,e,t){return`firebase:${n}:${e}:${t}`}class $n{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Dr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Dr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Xr(this.auth,{idToken:e}).catch(()=>{});return t?at._fromGetAccountInfoResponse(this.auth,t,e):null}return at._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new $n(At(El),e,s);const r=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=r[0]||At(El);const c=Dr(s,e.config.apiKey,e.name);let l=null;for(const f of t)try{const m=await f._get(c);if(m){let y;if(typeof m=="string"){const w=await Xr(e,{idToken:m}).catch(()=>{});if(!w)break;y=await at._fromGetAccountInfoResponse(e,w,m)}else y=at._fromJSON(e,m);f!==i&&(l=y),i=f;break}}catch{}const h=r.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!h.length?new $n(i,e,s):(i=h[0],l&&await i._set(c,l.toJSON()),await Promise.all(t.map(async f=>{if(f!==i)try{await f._remove(c)}catch{}})),new $n(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zh(e))return"Blackberry";if(Gh(e))return"Webos";if(qh(e))return"Safari";if((e.includes("chrome/")||$h(e))&&!e.includes("edge/"))return"Chrome";if(Hh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Bh(n=$e()){return/firefox\//i.test(n)}function qh(n=$e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $h(n=$e()){return/crios\//i.test(n)}function Wh(n=$e()){return/iemobile/i.test(n)}function Hh(n=$e()){return/android/i.test(n)}function zh(n=$e()){return/blackberry/i.test(n)}function Gh(n=$e()){return/webos/i.test(n)}function da(n=$e()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function T_(n=$e()){var e;return da(n)&&!!((e=window.navigator)!=null&&e.standalone)}function A_(){return Og()&&document.documentMode===10}function Kh(n=$e()){return da(n)||Hh(n)||Gh(n)||zh(n)||/windows phone/i.test(n)||Wh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(n,e=[]){let t;switch(n){case"Browser":t=Il($e());break;case"Worker":t=`${Il($e())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${rs}/${s}`}/**
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
 */class N_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((c,l)=>{try{const h=e(i);c(h)}catch(h){l(h)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function S_(n,e={}){return an(n,"GET","/v2/passwordPolicy",Sn(n,e))}/**
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
 */const R_=6;class k_{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??R_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tl(this),this.idTokenSubscription=new Tl(this),this.beforeStateQueue=new N_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=At(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await $n.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xr(this,{idToken:e}),s=await at._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(ot(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===l)&&(h!=null&&h.user)&&(s=h.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=l_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject(Kt(this));const t=e?we(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(Kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject(Kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await S_(this),t=new k_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new An("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await I_(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&At(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await $n.create(this,[At(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let c=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{c||i(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,s,r);return()=>{c=!0,h()}}else{const h=e.addObserver(t);return()=>{c=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&o_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function is(n){return we(n)}class Tl{constructor(e){this.auth=e,this.observer=null,this.addObserver=$g(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function P_(n){bi=n}function Yh(n){return bi.loadJS(n)}function j_(){return bi.recaptchaEnterpriseScript}function D_(){return bi.gapiScript}function V_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class O_{constructor(){this.enterprise=new M_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class M_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const L_="recaptcha-enterprise",Jh="NO_RECAPTCHA";class F_{constructor(e){this.type=L_,this.auth=is(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(c,l)=>{g_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new p_(h);return i.tenantId==null?i._agentRecaptchaConfig=f:i._tenantRecaptchaConfigs[i.tenantId]=f,c(f.siteKey)}}).catch(h=>{l(h)})})}function r(i,c,l){const h=window.grecaptcha;wl(h)?h.enterprise.ready(()=>{h.enterprise.execute(i,{action:e}).then(f=>{c(f)}).catch(()=>{c(Jh)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new O_().execute("siteKey",{action:"verify"}):new Promise((i,c)=>{s(this.auth).then(l=>{if(!t&&wl(window.grecaptcha))r(l,i,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let h=j_();h.length!==0&&(h+=l),Yh(h).then(()=>{r(l,i,c)}).catch(f=>{c(f)})}}).catch(l=>{c(l)})})}}async function Al(n,e,t,s=!1,r=!1){const i=new F_(n);let c;if(r)c=Jh;else try{c=await i.verify(t)}catch{c=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const h=l.phoneEnrollmentInfo.phoneNumber,f=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:f,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const h=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:c}):Object.assign(l,{captchaResponse:c}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Nl(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Al(n,e,t,t==="getOobCode");return s(n,c)}else return s(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Al(n,e,t,t==="getOobCode");return s(n,l)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(n,e){const t=Nn(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Jt(i,e??{}))return r;ht(r,"already-initialized")}return t.initialize({options:e})}function B_(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(At);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function q_(n,e,t){const s=is(n);W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Xh(e),{host:c,port:l}=$_(e),h=l===null?"":`:${l}`,f={url:`${i}//${c}${h}/`},m=Object.freeze({host:c,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){W(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),W(Jt(f,s.config.emulator)&&Jt(m,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=f,s.emulatorConfig=m,s.settings.appVerificationDisabledForTesting=!0,ss(c)?(vh(`${i}//${c}${h}`),Eh("Auth",!0)):W_()}function Xh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function $_(n){const e=Xh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Sl(s.substr(i.length+1))}}else{const[i,c]=s.split(":");return{host:i,port:Sl(c)}}}function Sl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function W_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tt("not implemented")}_getIdTokenResponse(e){return Tt("not implemented")}_linkToIdToken(e,t){return Tt("not implemented")}_getReauthenticationResolver(e){return Tt("not implemented")}}async function H_(n,e){return an(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(n,e){return wi(n,"POST","/v1/accounts:signInWithPassword",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(n,e){return wi(n,"POST","/v1/accounts:signInWithEmailLink",Sn(n,e))}async function K_(n,e){return wi(n,"POST","/v1/accounts:signInWithEmailLink",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends fa{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ks(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ks(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nl(e,t,"signInWithPassword",z_);case"emailLink":return G_(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nl(e,s,"signUpPassword",H_);case"emailLink":return K_(e,{idToken:t,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(n,e){return wi(n,"POST","/v1/accounts:signInWithIdp",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_="http://localhost";class wn extends fa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ht("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const c=new wn(s,r);return c.idToken=i.idToken||void 0,c.accessToken=i.accessToken||void 0,c.secret=i.secret,c.nonce=i.nonce,c.pendingToken=i.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Wn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Wn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wn(e,t)}buildRequest(){const e={requestUri:Q_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function J_(n){const e=js(Ds(n)).link,t=e?js(Ds(e)).deep_link_id:null,s=js(Ds(n)).deep_link_id;return(s?js(Ds(s)).link:null)||s||t||e||n}class ma{constructor(e){const t=js(Ds(e)),s=t.apiKey??null,r=t.oobCode??null,i=Y_(t.mode??null);W(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=J_(e);try{return new ma(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.providerId=os.PROVIDER_ID}static credential(e,t){return Ks._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ma.parseLink(t);return W(s,"argument-error"),Ks._fromEmailAndCode(e,s.code,s.tenantId)}}os.PROVIDER_ID="password";os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class or extends Zh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends or{constructor(){super("facebook.com")}static credential(e){return wn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ut.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends or{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Bt.credential(t,s)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends or{constructor(){super("github.com")}static credential(e){return wn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends or{constructor(){super("twitter.com")}static credential(e,t){return wn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return $t.credential(t,s)}catch{return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com";$t.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await at._fromIdTokenResponse(e,s,r),c=Rl(s);return new Yn({user:i,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Rl(s);return new Yn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Rl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends ft{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ei.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new ei(e,t,s,r)}}function ed(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ei._fromErrorAndOperation(n,i,e,s):i})}async function X_(n,e,t=!1){const s=await Gs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yn._forOperation(n,"link",s)}/**
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
 */async function Z_(n,e,t=!1){const{auth:s}=n;if(ot(s.app))return Promise.reject(Kt(s));const r="reauthenticate";try{const i=await Gs(n,ed(s,r,e,n),t);W(i.idToken,s,"internal-error");const c=ha(i.idToken);W(c,s,"internal-error");const{sub:l}=c;return W(n.uid===l,s,"user-mismatch"),Yn._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ht(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function td(n,e,t=!1){if(ot(n.app))return Promise.reject(Kt(n));const s="signIn",r=await ed(n,s,e),i=await Yn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function ex(n,e){return td(is(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tx(n){const e=is(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function nx(n,e,t){return ot(n.app)?Promise.reject(Kt(n)):ex(we(n),os.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&tx(n),s})}function sx(n,e,t,s){return we(n).onIdTokenChanged(e,t,s)}function rx(n,e,t){return we(n).beforeAuthStateChanged(e,t)}function vi(n,e,t,s){return we(n).onAuthStateChanged(e,t,s)}function ix(n){return we(n).signOut()}const ti="__sak";/**
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
 */class nd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ti,"1"),this.storage.removeItem(ti),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=1e3,ax=10;class sd extends nd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,l,h)=>{this.notifyListeners(c,h)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},i=this.storage.getItem(s);A_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ax):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},ox)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sd.type="LOCAL";const cx=sd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends nd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rd.type="SESSION";const id=rd;/**
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
 */function lx(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ei{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Ei(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,c=this.handlersMap[r];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(c).map(async f=>f(t.origin,i)),h=await lx(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ei.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ux{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,c;return new Promise((l,h)=>{const f=pa("",20);r.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},s);c={messageChannel:r,onMessage(y){const w=y;if(w.data.eventId===f)switch(w.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(w.data.response);break;default:clearTimeout(m),clearTimeout(i),h(new Error("invalid_response"));break}}},this.handlers.add(c),r.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[r.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return window}function hx(n){_t().location.href=n}/**
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
 */function od(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function dx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fx(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function mx(){return od()?self:null}/**
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
 */const ad="firebaseLocalStorageDb",px=1,ni="firebaseLocalStorage",cd="fbase_key";class ar{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ii(n,e){return n.transaction([ni],e?"readwrite":"readonly").objectStore(ni)}function gx(){const n=indexedDB.deleteDatabase(ad);return new ar(n).toPromise()}function Fo(){const n=indexedDB.open(ad,px);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ni,{keyPath:cd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ni)?e(s):(s.close(),await gx(),e(await Fo()))})})}async function kl(n,e,t){const s=Ii(n,!0).put({[cd]:e,value:t});return new ar(s).toPromise()}async function yx(n,e){const t=Ii(n,!1).get(e),s=await new ar(t).toPromise();return s===void 0?null:s.value}function Cl(n,e){const t=Ii(n,!0).delete(e);return new ar(t).toPromise()}const _x=800,xx=3;class ld{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>xx)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return od()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ei._getInstance(mx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await dx(),!this.activeServiceWorker)return;this.sender=new ux(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fo();return await kl(e,ti,"1"),await Cl(e,ti),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>kl(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>yx(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ii(r,!1).getAll();return new ar(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_x)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ld.type="LOCAL";const wx=ld;new ir(3e4,6e4);/**
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
 */function bx(n,e){return e?At(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ga extends fa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vx(n){return td(n.auth,new ga(n),n.bypassAuthState)}function Ex(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),Z_(t,new ga(n),n.bypassAuthState)}async function Ix(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),X_(t,new ga(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:c,type:l}=e;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vx;case"linkViaPopup":case"linkViaRedirect":return Ix;case"reauthViaPopup":case"reauthViaRedirect":return Ex;default:ht(this.auth,"internal-error")}}resolve(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=new ir(2e3,1e4);class Bn extends ud{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){kt(this.filter.length===1,"Popup operations only handle one event");const e=pa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Tx.get())};e()}}Bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax="pendingRedirect",Vr=new Map;class Nx extends ud{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Vr.get(this.auth._key());if(!e){try{const s=await Sx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Vr.set(this.auth._key(),e)}return this.bypassAuthState||Vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sx(n,e){const t=Cx(e),s=kx(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function Rx(n,e){Vr.set(n._key(),e)}function kx(n){return At(n._redirectPersistence)}function Cx(n){return Dr(Ax,n.config.apiKey,n.name)}async function Px(n,e,t=!1){if(ot(n.app))return Promise.reject(Kt(n));const s=is(n),r=bx(s,e),c=await new Nx(s,r,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=600*1e3;class Dx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Vx(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!hd(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(yt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pl(e))}saveEventToCache(e){this.cachedEventUids.add(Pl(e)),this.lastProcessedEventTime=Date.now()}}function Pl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function hd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Vx(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(n,e={}){return an(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lx=/^https?/;async function Fx(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ox(n);for(const t of e)try{if(Ux(t))return}catch{}ht(n,"unauthorized-domain")}function Ux(n){const e=Mo(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!Lx.test(t))return!1;if(Mx.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Bx=new ir(3e4,6e4);function jl(){const n=_t().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qx(n){return new Promise((e,t)=>{var r,i,c;function s(){jl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jl(),t(yt(n,"network-request-failed"))},timeout:Bx.get()})}if((i=(r=_t().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((c=_t().gapi)!=null&&c.load)s();else{const l=V_("iframefcb");return _t()[l]=()=>{gapi.load?s():t(yt(n,"network-request-failed"))},Yh(`${D_()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw Or=null,e})}let Or=null;function $x(n){return Or=Or||qx(n),Or}/**
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
 */const Wx=new ir(5e3,15e3),Hx="__/auth/iframe",zx="emulator/auth/iframe",Gx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qx(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ua(e,zx):`https://${n.config.authDomain}/${Hx}`,s={apiKey:e.apiKey,appName:n.name,v:rs},r=Kx.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${rr(s).slice(1)}`}async function Yx(n){const e=await $x(n),t=_t().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:Qx(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gx,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const c=yt(n,"network-request-failed"),l=_t().setTimeout(()=>{i(c)},Wx.get());function h(){_t().clearTimeout(l),r(s)}s.ping(h).then(h,()=>{i(c)})}))}/**
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
 */const Jx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xx=500,Zx=600,e0="_blank",t0="http://localhost";class Dl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function n0(n,e,t,s=Xx,r=Zx){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const h={...Jx,width:s.toString(),height:r.toString(),top:i,left:c},f=$e().toLowerCase();t&&(l=$h(f)?e0:t),Bh(f)&&(e=e||t0,h.scrollbars="yes");const m=Object.entries(h).reduce((w,[T,C])=>`${w}${T}=${C},`,"");if(T_(f)&&l!=="_self")return s0(e||"",l),new Dl(null);const y=window.open(e||"",l,m);W(y,n,"popup-blocked");try{y.focus()}catch{}return new Dl(y)}function s0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const r0="__/auth/handler",i0="emulator/auth/handler",o0=encodeURIComponent("fac");async function Vl(n,e,t,s,r,i){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:rs,eventId:r};if(e instanceof Zh){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",qg(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))c[m]=y}if(e instanceof or){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(c.scopes=m.join(","))}n.tenantId&&(c.tid=n.tenantId);const l=c;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const h=await n._getAppCheckToken(),f=h?`#${o0}=${encodeURIComponent(h)}`:"";return`${a0(n)}?${rr(l).slice(1)}${f}`}function a0({config:n}){return n.emulator?ua(n,i0):`https://${n.authDomain}/${r0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="webStorageSupport";class c0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=id,this._completeRedirectFn=Px,this._overrideRedirectResult=Rx}async _openPopup(e,t,s,r){var c;kt((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const i=await Vl(e,t,s,Mo(),r);return n0(e,i,pa())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Vl(e,t,s,Mo(),r);return hx(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(kt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Yx(e),s=new Dx(e);return t.register("authEvent",r=>(W(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_o,{type:_o},r=>{var c;const i=(c=r==null?void 0:r[0])==null?void 0:c[_o];i!==void 0&&t(!!i),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Fx(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kh()||qh()||da()}}const l0=c0;var Ol="@firebase/auth",Ml="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function d0(n){Et(new ut("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:c,authDomain:l}=s.options;W(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const h={apiKey:c,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qh(n)},f=new C_(s,r,i,h);return B_(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Et(new ut("auth-internal",e=>{const t=is(e.getProvider("auth").getImmediate());return(s=>new u0(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),st(Ol,Ml,h0(n)),st(Ol,Ml,"esm2020")}/**
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
 */const f0=300,m0=bh("authIdTokenMaxAge")||f0;let Ll=null;const p0=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>m0)return;const r=t==null?void 0:t.token;Ll!==r&&(Ll=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function g0(n=ca()){const e=Nn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=U_(n,{popupRedirectResolver:l0,persistence:[wx,cx,id]}),s=bh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const c=p0(i.toString());rx(t,c,()=>c(t.currentUser)),sx(t,l=>c(l))}}const r=xh("auth");return r&&q_(t,`http://${r}`),t}function y0(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}P_({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=yt("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",y0().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});d0("Browser");var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qt,dd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function g(){}g.prototype=_.prototype,E.F=_.prototype,E.prototype=new g,E.prototype.constructor=E,E.D=function(b,v,I){for(var x=Array(arguments.length-2),$=2;$<arguments.length;$++)x[$-2]=arguments[$];return _.prototype[v].apply(b,x)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,_,g){g||(g=0);const b=Array(16);if(typeof _=="string")for(var v=0;v<16;++v)b[v]=_.charCodeAt(g++)|_.charCodeAt(g++)<<8|_.charCodeAt(g++)<<16|_.charCodeAt(g++)<<24;else for(v=0;v<16;++v)b[v]=_[g++]|_[g++]<<8|_[g++]<<16|_[g++]<<24;_=E.g[0],g=E.g[1],v=E.g[2];let I=E.g[3],x;x=_+(I^g&(v^I))+b[0]+3614090360&4294967295,_=g+(x<<7&4294967295|x>>>25),x=I+(v^_&(g^v))+b[1]+3905402710&4294967295,I=_+(x<<12&4294967295|x>>>20),x=v+(g^I&(_^g))+b[2]+606105819&4294967295,v=I+(x<<17&4294967295|x>>>15),x=g+(_^v&(I^_))+b[3]+3250441966&4294967295,g=v+(x<<22&4294967295|x>>>10),x=_+(I^g&(v^I))+b[4]+4118548399&4294967295,_=g+(x<<7&4294967295|x>>>25),x=I+(v^_&(g^v))+b[5]+1200080426&4294967295,I=_+(x<<12&4294967295|x>>>20),x=v+(g^I&(_^g))+b[6]+2821735955&4294967295,v=I+(x<<17&4294967295|x>>>15),x=g+(_^v&(I^_))+b[7]+4249261313&4294967295,g=v+(x<<22&4294967295|x>>>10),x=_+(I^g&(v^I))+b[8]+1770035416&4294967295,_=g+(x<<7&4294967295|x>>>25),x=I+(v^_&(g^v))+b[9]+2336552879&4294967295,I=_+(x<<12&4294967295|x>>>20),x=v+(g^I&(_^g))+b[10]+4294925233&4294967295,v=I+(x<<17&4294967295|x>>>15),x=g+(_^v&(I^_))+b[11]+2304563134&4294967295,g=v+(x<<22&4294967295|x>>>10),x=_+(I^g&(v^I))+b[12]+1804603682&4294967295,_=g+(x<<7&4294967295|x>>>25),x=I+(v^_&(g^v))+b[13]+4254626195&4294967295,I=_+(x<<12&4294967295|x>>>20),x=v+(g^I&(_^g))+b[14]+2792965006&4294967295,v=I+(x<<17&4294967295|x>>>15),x=g+(_^v&(I^_))+b[15]+1236535329&4294967295,g=v+(x<<22&4294967295|x>>>10),x=_+(v^I&(g^v))+b[1]+4129170786&4294967295,_=g+(x<<5&4294967295|x>>>27),x=I+(g^v&(_^g))+b[6]+3225465664&4294967295,I=_+(x<<9&4294967295|x>>>23),x=v+(_^g&(I^_))+b[11]+643717713&4294967295,v=I+(x<<14&4294967295|x>>>18),x=g+(I^_&(v^I))+b[0]+3921069994&4294967295,g=v+(x<<20&4294967295|x>>>12),x=_+(v^I&(g^v))+b[5]+3593408605&4294967295,_=g+(x<<5&4294967295|x>>>27),x=I+(g^v&(_^g))+b[10]+38016083&4294967295,I=_+(x<<9&4294967295|x>>>23),x=v+(_^g&(I^_))+b[15]+3634488961&4294967295,v=I+(x<<14&4294967295|x>>>18),x=g+(I^_&(v^I))+b[4]+3889429448&4294967295,g=v+(x<<20&4294967295|x>>>12),x=_+(v^I&(g^v))+b[9]+568446438&4294967295,_=g+(x<<5&4294967295|x>>>27),x=I+(g^v&(_^g))+b[14]+3275163606&4294967295,I=_+(x<<9&4294967295|x>>>23),x=v+(_^g&(I^_))+b[3]+4107603335&4294967295,v=I+(x<<14&4294967295|x>>>18),x=g+(I^_&(v^I))+b[8]+1163531501&4294967295,g=v+(x<<20&4294967295|x>>>12),x=_+(v^I&(g^v))+b[13]+2850285829&4294967295,_=g+(x<<5&4294967295|x>>>27),x=I+(g^v&(_^g))+b[2]+4243563512&4294967295,I=_+(x<<9&4294967295|x>>>23),x=v+(_^g&(I^_))+b[7]+1735328473&4294967295,v=I+(x<<14&4294967295|x>>>18),x=g+(I^_&(v^I))+b[12]+2368359562&4294967295,g=v+(x<<20&4294967295|x>>>12),x=_+(g^v^I)+b[5]+4294588738&4294967295,_=g+(x<<4&4294967295|x>>>28),x=I+(_^g^v)+b[8]+2272392833&4294967295,I=_+(x<<11&4294967295|x>>>21),x=v+(I^_^g)+b[11]+1839030562&4294967295,v=I+(x<<16&4294967295|x>>>16),x=g+(v^I^_)+b[14]+4259657740&4294967295,g=v+(x<<23&4294967295|x>>>9),x=_+(g^v^I)+b[1]+2763975236&4294967295,_=g+(x<<4&4294967295|x>>>28),x=I+(_^g^v)+b[4]+1272893353&4294967295,I=_+(x<<11&4294967295|x>>>21),x=v+(I^_^g)+b[7]+4139469664&4294967295,v=I+(x<<16&4294967295|x>>>16),x=g+(v^I^_)+b[10]+3200236656&4294967295,g=v+(x<<23&4294967295|x>>>9),x=_+(g^v^I)+b[13]+681279174&4294967295,_=g+(x<<4&4294967295|x>>>28),x=I+(_^g^v)+b[0]+3936430074&4294967295,I=_+(x<<11&4294967295|x>>>21),x=v+(I^_^g)+b[3]+3572445317&4294967295,v=I+(x<<16&4294967295|x>>>16),x=g+(v^I^_)+b[6]+76029189&4294967295,g=v+(x<<23&4294967295|x>>>9),x=_+(g^v^I)+b[9]+3654602809&4294967295,_=g+(x<<4&4294967295|x>>>28),x=I+(_^g^v)+b[12]+3873151461&4294967295,I=_+(x<<11&4294967295|x>>>21),x=v+(I^_^g)+b[15]+530742520&4294967295,v=I+(x<<16&4294967295|x>>>16),x=g+(v^I^_)+b[2]+3299628645&4294967295,g=v+(x<<23&4294967295|x>>>9),x=_+(v^(g|~I))+b[0]+4096336452&4294967295,_=g+(x<<6&4294967295|x>>>26),x=I+(g^(_|~v))+b[7]+1126891415&4294967295,I=_+(x<<10&4294967295|x>>>22),x=v+(_^(I|~g))+b[14]+2878612391&4294967295,v=I+(x<<15&4294967295|x>>>17),x=g+(I^(v|~_))+b[5]+4237533241&4294967295,g=v+(x<<21&4294967295|x>>>11),x=_+(v^(g|~I))+b[12]+1700485571&4294967295,_=g+(x<<6&4294967295|x>>>26),x=I+(g^(_|~v))+b[3]+2399980690&4294967295,I=_+(x<<10&4294967295|x>>>22),x=v+(_^(I|~g))+b[10]+4293915773&4294967295,v=I+(x<<15&4294967295|x>>>17),x=g+(I^(v|~_))+b[1]+2240044497&4294967295,g=v+(x<<21&4294967295|x>>>11),x=_+(v^(g|~I))+b[8]+1873313359&4294967295,_=g+(x<<6&4294967295|x>>>26),x=I+(g^(_|~v))+b[15]+4264355552&4294967295,I=_+(x<<10&4294967295|x>>>22),x=v+(_^(I|~g))+b[6]+2734768916&4294967295,v=I+(x<<15&4294967295|x>>>17),x=g+(I^(v|~_))+b[13]+1309151649&4294967295,g=v+(x<<21&4294967295|x>>>11),x=_+(v^(g|~I))+b[4]+4149444226&4294967295,_=g+(x<<6&4294967295|x>>>26),x=I+(g^(_|~v))+b[11]+3174756917&4294967295,I=_+(x<<10&4294967295|x>>>22),x=v+(_^(I|~g))+b[2]+718787259&4294967295,v=I+(x<<15&4294967295|x>>>17),x=g+(I^(v|~_))+b[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(v+(x<<21&4294967295|x>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+I&4294967295}s.prototype.v=function(E,_){_===void 0&&(_=E.length);const g=_-this.blockSize,b=this.C;let v=this.h,I=0;for(;I<_;){if(v==0)for(;I<=g;)r(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<_;)if(b[v++]=E.charCodeAt(I++),v==this.blockSize){r(this,b),v=0;break}}else for(;I<_;)if(b[v++]=E[I++],v==this.blockSize){r(this,b),v=0;break}}this.h=v,this.o+=_},s.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var g=E.length-8;g<E.length;++g)E[g]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,g=0;g<4;++g)for(let b=0;b<32;b+=8)E[_++]=this.g[g]>>>b&255;return E};function i(E,_){var g=l;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=_(E)}function c(E,_){this.h=_;const g=[];let b=!0;for(let v=E.length-1;v>=0;v--){const I=E[v]|0;b&&I==_||(g[v]=I,b=!1)}this.g=g}var l={};function h(E){return-128<=E&&E<128?i(E,function(_){return new c([_|0],_<0?-1:0)}):new c([E|0],E<0?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return y;if(E<0)return P(f(-E));const _=[];let g=1;for(let b=0;E>=g;b++)_[b]=E/g|0,g*=4294967296;return new c(_,0)}function m(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return P(m(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=f(Math.pow(_,8));let b=y;for(let I=0;I<E.length;I+=8){var v=Math.min(8,E.length-I);const x=parseInt(E.substring(I,I+v),_);v<8?(v=f(Math.pow(_,v)),b=b.j(v).add(f(x))):(b=b.j(g),b=b.add(f(x)))}return b}var y=h(0),w=h(1),T=h(16777216);n=c.prototype,n.m=function(){if(j(this))return-P(this).m();let E=0,_=1;for(let g=0;g<this.g.length;g++){const b=this.i(g);E+=(b>=0?b:4294967296+b)*_,_*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(j(this))return"-"+P(this).toString(E);const _=f(Math.pow(E,6));var g=this;let b="";for(;;){const v=Y(g,_).g;g=M(g,v.j(_));let I=((g.g.length>0?g.g[0]:g.h)>>>0).toString(E);if(g=v,C(g))return I+b;for(;I.length<6;)I="0"+I;b=I+b}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function j(E){return E.h==-1}n.l=function(E){return E=M(this,E),j(E)?-1:C(E)?0:1};function P(E){const _=E.g.length,g=[];for(let b=0;b<_;b++)g[b]=~E.g[b];return new c(g,~E.h).add(w)}n.abs=function(){return j(this)?P(this):this},n.add=function(E){const _=Math.max(this.g.length,E.g.length),g=[];let b=0;for(let v=0;v<=_;v++){let I=b+(this.i(v)&65535)+(E.i(v)&65535),x=(I>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);b=x>>>16,I&=65535,x&=65535,g[v]=x<<16|I}return new c(g,g[g.length-1]&-2147483648?-1:0)};function M(E,_){return E.add(P(_))}n.j=function(E){if(C(this)||C(E))return y;if(j(this))return j(E)?P(this).j(P(E)):P(P(this).j(E));if(j(E))return P(this.j(P(E)));if(this.l(T)<0&&E.l(T)<0)return f(this.m()*E.m());const _=this.g.length+E.g.length,g=[];for(var b=0;b<2*_;b++)g[b]=0;for(b=0;b<this.g.length;b++)for(let v=0;v<E.g.length;v++){const I=this.i(b)>>>16,x=this.i(b)&65535,$=E.i(v)>>>16,X=E.i(v)&65535;g[2*b+2*v]+=x*X,D(g,2*b+2*v),g[2*b+2*v+1]+=I*X,D(g,2*b+2*v+1),g[2*b+2*v+1]+=x*$,D(g,2*b+2*v+1),g[2*b+2*v+2]+=I*$,D(g,2*b+2*v+2)}for(E=0;E<_;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=_;E<2*_;E++)g[E]=0;return new c(g,0)};function D(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function U(E,_){this.g=E,this.h=_}function Y(E,_){if(C(_))throw Error("division by zero");if(C(E))return new U(y,y);if(j(E))return _=Y(P(E),_),new U(P(_.g),P(_.h));if(j(_))return _=Y(E,P(_)),new U(P(_.g),_.h);if(E.g.length>30){if(j(E)||j(_))throw Error("slowDivide_ only works with positive integers.");for(var g=w,b=_;b.l(E)<=0;)g=ue(g),b=ue(b);var v=se(g,1),I=se(b,1);for(b=se(b,2),g=se(g,2);!C(b);){var x=I.add(b);x.l(E)<=0&&(v=v.add(g),I=x),b=se(b,1),g=se(g,1)}return _=M(E,v.j(_)),new U(v,_)}for(v=y;E.l(_)>=0;){for(g=Math.max(1,Math.floor(E.m()/_.m())),b=Math.ceil(Math.log(g)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),I=f(g),x=I.j(_);j(x)||x.l(E)>0;)g-=b,I=f(g),x=I.j(_);C(I)&&(I=w),v=v.add(I),E=M(E,x)}return new U(v,E)}n.B=function(E){return Y(this,E).h},n.and=function(E){const _=Math.max(this.g.length,E.g.length),g=[];for(let b=0;b<_;b++)g[b]=this.i(b)&E.i(b);return new c(g,this.h&E.h)},n.or=function(E){const _=Math.max(this.g.length,E.g.length),g=[];for(let b=0;b<_;b++)g[b]=this.i(b)|E.i(b);return new c(g,this.h|E.h)},n.xor=function(E){const _=Math.max(this.g.length,E.g.length),g=[];for(let b=0;b<_;b++)g[b]=this.i(b)^E.i(b);return new c(g,this.h^E.h)};function ue(E){const _=E.g.length+1,g=[];for(let b=0;b<_;b++)g[b]=E.i(b)<<1|E.i(b-1)>>>31;return new c(g,E.h)}function se(E,_){const g=_>>5;_%=32;const b=E.g.length-g,v=[];for(let I=0;I<b;I++)v[I]=_>0?E.i(I+g)>>>_|E.i(I+g+1)<<32-_:E.i(I+g);return new c(v,E.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,dd=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=m,Qt=c}).apply(typeof Fl<"u"?Fl:typeof self<"u"?self:typeof window<"u"?window:{});var Sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fd,Vs,md,Mr,Uo,pd,gd,yd;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sr=="object"&&Sr];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function r(o,u){if(u)e:{var d=s;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in d))break e;d=d[A]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(u){var d=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&d.push([p,u[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},c=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function h(o,u,d){return o.call.apply(o.bind,arguments)}function f(o,u,d){return f=h,f.apply(null,arguments)}function m(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function y(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(p,A,N){for(var V=Array(arguments.length-2),J=2;J<arguments.length;J++)V[J-2]=arguments[J];return u.prototype[A].apply(p,V)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function T(o){const u=o.length;if(u>0){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function C(o,u){for(let p=1;p<arguments.length;p++){const A=arguments[p];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=o.length||0;const N=A.length||0;o.length=d+N;for(let V=0;V<N;V++)o[d+V]=A[V]}else o.push(A)}}class j{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function P(o){c.setTimeout(()=>{throw o},0)}function M(){var o=E;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class D{constructor(){this.h=this.g=null}add(u,d){const p=U.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var U=new j(()=>new Y,o=>o.reset());class Y{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,se=!1,E=new D,_=()=>{const o=Promise.resolve(void 0);ue=()=>{o.then(g)}};function g(){for(var o;o=M();){try{o.h.call(o.g)}catch(d){P(d)}var u=U;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}se=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return o})();function x(o){return/^[\s\xa0]*$/.test(o)}function $(o,u){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}y($,v),$.prototype.init=function(o,u){const d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&$.Z.h.call(this)},$.prototype.h=function(){$.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var X="closure_listenable_"+(Math.random()*1e6|0),O=0;function re(o,u,d,p,A){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=A,this.key=++O,this.da=this.fa=!1}function Ne(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ae(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function Pe(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function it(o){const u={};for(const d in o)u[d]=o[d];return u}const _e="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qe(o,u){let d,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(d in p)o[d]=p[d];for(let N=0;N<_e.length;N++)d=_e[N],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function et(o){this.src=o,this.g={},this.h=0}et.prototype.add=function(o,u,d,p,A){const N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);const V=fs(o,u,p,A);return V>-1?(u=o[V],d||(u.fa=!1)):(u=new re(u,this.src,N,!!p,A),u.fa=d,o.push(u)),u};function ds(o,u){const d=u.type;if(d in o.g){var p=o.g[d],A=Array.prototype.indexOf.call(p,u,void 0),N;(N=A>=0)&&Array.prototype.splice.call(p,A,1),N&&(Ne(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function fs(o,u,d,p){for(let A=0;A<o.length;++A){const N=o[A];if(!N.da&&N.listener==u&&N.capture==!!d&&N.ha==p)return A}return-1}var ms="closure_lm_"+(Math.random()*1e6|0),ps={};function B(o,u,d,p,A){if(Array.isArray(u)){for(let N=0;N<u.length;N++)B(o,u[N],d,p,A);return null}return d=tt(d),o&&o[X]?o.J(u,d,l(p)?!!p.capture:!1,A):z(o,u,d,!1,p,A)}function z(o,u,d,p,A,N){if(!u)throw Error("Invalid event type");const V=l(A)?!!A.capture:!!A;let J=Le(o);if(J||(o[ms]=J=new et(o)),d=J.add(u,d,p,V,N),d.proxy)return d;if(p=ie(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)I||(A=V),A===void 0&&(A=!1),o.addEventListener(u.toString(),p,A);else if(o.attachEvent)o.attachEvent(he(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ie(){function o(d){return u.call(o.src,o.listener,d)}const u=Se;return o}function ce(o,u,d,p,A){if(Array.isArray(u))for(var N=0;N<u.length;N++)ce(o,u[N],d,p,A);else p=l(p)?!!p.capture:!!p,d=tt(d),o&&o[X]?(o=o.i,N=String(u).toString(),N in o.g&&(u=o.g[N],d=fs(u,d,p,A),d>-1&&(Ne(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[N],o.h--)))):o&&(o=Le(o))&&(u=o.g[u.toString()],o=-1,u&&(o=fs(u,d,p,A)),(d=o>-1?u[o]:null)&&Me(d))}function Me(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[X])ds(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(he(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=Le(u))?(ds(d,o),d.h==0&&(d.src=null,u[ms]=null)):Ne(o)}}}function he(o){return o in ps?ps[o]:ps[o]="on"+o}function Se(o,u){if(o.da)o=!0;else{u=new $(u,this);const d=o.listener,p=o.ha||o.src;o.fa&&Me(o),o=d.call(p,u)}return o}function Le(o){return o=o[ms],o instanceof et?o:null}var ln="__closure_events_fn_"+(Math.random()*1e9>>>0);function tt(o){return typeof o=="function"?o:(o[ln]||(o[ln]=function(u){return o.handleEvent(u)}),o[ln])}function Fe(){b.call(this),this.i=new et(this),this.M=this,this.G=null}y(Fe,b),Fe.prototype[X]=!0,Fe.prototype.removeEventListener=function(o,u,d,p){ce(this,o,u,d,p)};function We(o,u){var d,p=o.G;if(p)for(d=[];p;p=p.G)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new v(u,o);else if(u instanceof v)u.target=u.target||o;else{var A=u;u=new v(p,o),Qe(u,A)}A=!0;let N,V;if(d)for(V=d.length-1;V>=0;V--)N=u.g=d[V],A=fr(N,p,!0,u)&&A;if(N=u.g=o,A=fr(N,p,!0,u)&&A,A=fr(N,p,!1,u)&&A,d)for(V=0;V<d.length;V++)N=u.g=d[V],A=fr(N,p,!1,u)&&A}Fe.prototype.N=function(){if(Fe.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let p=0;p<d.length;p++)Ne(d[p]);delete o.g[u],o.h--}}this.G=null},Fe.prototype.J=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},Fe.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function fr(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let A=!0;for(let N=0;N<u.length;++N){const V=u[N];if(V&&!V.da&&V.capture==d){const J=V.listener,Te=V.ha||V.src;V.fa&&ds(o.i,V),A=J.call(Te,p)!==!1&&A}}return A&&!p.defaultPrevented}function ym(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=f(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:c.setTimeout(o,u||0)}function sc(o){o.g=ym(()=>{o.g=null,o.i&&(o.i=!1,sc(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class _m extends b{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:sc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(o){b.call(this),this.h=o,this.g={}}y(gs,b);var rc=[];function ic(o){ae(o.g,function(u,d){this.g.hasOwnProperty(d)&&Me(u)},o),o.g={}}gs.prototype.N=function(){gs.Z.N.call(this),ic(this)},gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gi=c.JSON.stringify,xm=c.JSON.parse,wm=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function oc(){}function ac(){}var ys={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ki(){v.call(this,"d")}y(Ki,v);function Qi(){v.call(this,"c")}y(Qi,v);var un={},cc=null;function mr(){return cc=cc||new Fe}un.Ia="serverreachability";function lc(o){v.call(this,un.Ia,o)}y(lc,v);function _s(o){const u=mr();We(u,new lc(u))}un.STAT_EVENT="statevent";function uc(o,u){v.call(this,un.STAT_EVENT,o),this.stat=u}y(uc,v);function He(o){const u=mr();We(u,new uc(u,o))}un.Ja="timingevent";function hc(o,u){v.call(this,un.Ja,o),this.size=u}y(hc,v);function xs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ws(){this.g=!0}ws.prototype.ua=function(){this.g=!1};function bm(o,u,d,p,A,N){o.info(function(){if(o.g)if(N){var V="",J=N.split("&");for(let le=0;le<J.length;le++){var Te=J[le].split("=");if(Te.length>1){const Re=Te[0];Te=Te[1];const pt=Re.split("_");V=pt.length>=2&&pt[1]=="type"?V+(Re+"="+Te+"&"):V+(Re+"=redacted&")}}}else V=null;else V=N;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+u+`
`+d+`
`+V})}function vm(o,u,d,p,A,N,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+u+`
`+d+`
`+N+" "+V})}function jn(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Im(o,d)+(p?" "+p:"")})}function Em(o,u){o.info(function(){return"TIMEOUT: "+u})}ws.prototype.info=function(){};function Im(o,u){if(!o.g)return u;if(!u)return null;try{const N=JSON.parse(u);if(N){for(o=0;o<N.length;o++)if(Array.isArray(N[o])){var d=N[o];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var A=p[0];if(A!="noop"&&A!="stop"&&A!="close")for(let V=1;V<p.length;V++)p[V]=""}}}}return Gi(N)}catch{return u}}var pr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},dc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},fc;function Yi(){}y(Yi,oc),Yi.prototype.g=function(){return new XMLHttpRequest},fc=new Yi;function bs(o){return encodeURIComponent(String(o))}function Tm(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function jt(o,u,d,p){this.j=o,this.i=u,this.l=d,this.S=p||1,this.V=new gs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new mc}function mc(){this.i=null,this.g="",this.h=!1}var pc={},Ji={};function Xi(o,u,d){o.M=1,o.A=yr(mt(u)),o.u=d,o.R=!0,gc(o,null)}function gc(o,u){o.F=Date.now(),gr(o),o.B=mt(o.A);var d=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Rc(d.i,"t",p),o.C=0,d=o.j.L,o.h=new mc,o.g=Gc(o.j,d?u:null,!o.u),o.P>0&&(o.O=new _m(f(o.Y,o,o.g),o.P)),u=o.V,d=o.g,p=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(rc[0]=A.toString()),A=rc);for(let N=0;N<A.length;N++){const V=B(d,A[N],p||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=o.J?it(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),_s(),bm(o.i,o.v,o.B,o.l,o.S,o.u)}jt.prototype.ba=function(o){o=o.target;const u=this.O;u&&Ot(o)==3?u.j():this.Y(o)},jt.prototype.Y=function(o){try{if(o==this.g)e:{const J=Ot(this.g),Te=this.g.ya(),le=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||Oc(this.g)))){this.K||J!=4||Te==7||(Te==8||le<=0?_s(3):_s(2)),Zi(this);var u=this.g.ca();this.X=u;var d=Am(this);if(this.o=u==200,vm(this.i,this.v,this.B,this.l,this.S,J,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,A=this.g;if((p=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(p)){var N=p;break t}}N=null}if(o=N)jn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,eo(this,o);else{this.o=!1,this.m=3,He(12),hn(this),vs(this);break e}}if(this.R){o=!0;let Re;for(;!this.K&&this.C<d.length;)if(Re=Nm(this,d),Re==Ji){J==4&&(this.m=4,He(14),o=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(Re==pc){this.m=4,He(15),jn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else jn(this.i,this.l,Re,null),eo(this,Re);if(yc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||d.length!=0||this.h.h||(this.m=1,He(16),o=!1),this.o=this.o&&o,!o)jn(this.i,this.l,d,"[Invalid Chunked Response]"),hn(this),vs(this);else if(d.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),co(V),V.P=!0,He(11))}}else jn(this.i,this.l,d,null),eo(this,d);J==4&&hn(this),this.o&&!this.K&&(J==4?$c(this.j,this):(this.o=!1,gr(this)))}else Bm(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,He(12)):(this.m=0,He(13)),hn(this),vs(this)}}}catch{}finally{}};function Am(o){if(!yc(o))return o.g.la();const u=Oc(o.g);if(u==="")return"";let d="";const p=u.length,A=Ot(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return hn(o),vs(o),"";o.h.i=new c.TextDecoder}for(let N=0;N<p;N++)o.h.h=!0,d+=o.h.i.decode(u[N],{stream:!(A&&N==p-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function yc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Nm(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?Ji:(d=Number(u.substring(d,p)),isNaN(d)?pc:(p+=1,p+d>u.length?Ji:(u=u.slice(p,p+d),o.C=p+d,u)))}jt.prototype.cancel=function(){this.K=!0,hn(this)};function gr(o){o.T=Date.now()+o.H,_c(o,o.H)}function _c(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=xs(f(o.aa,o),u)}function Zi(o){o.D&&(c.clearTimeout(o.D),o.D=null)}jt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Em(this.i,this.B),this.M!=2&&(_s(),He(17)),hn(this),this.m=2,vs(this)):_c(this,this.T-o)};function vs(o){o.j.I==0||o.K||$c(o.j,o)}function hn(o){Zi(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,ic(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function eo(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||to(d.h,o))){if(!o.L&&to(d.h,o)&&d.I==3){try{var p=d.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)vr(d),wr(d);else break e;ao(d),He(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=xs(f(d.Va,d),6e3));bc(d.h)<=1&&d.ta&&(d.ta=void 0)}else fn(d,11)}else if((o.L||d.g==o)&&vr(d),!x(u))for(A=d.Ba.g.parse(u),u=0;u<A.length;u++){let le=A[u];const Re=le[0];if(!(Re<=d.K))if(d.K=Re,le=le[1],d.I==2)if(le[0]=="c"){d.M=le[1],d.ba=le[2];const pt=le[3];pt!=null&&(d.ka=pt,d.j.info("VER="+d.ka));const mn=le[4];mn!=null&&(d.za=mn,d.j.info("SVER="+d.za));const Mt=le[5];Mt!=null&&typeof Mt=="number"&&Mt>0&&(p=1.5*Mt,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Lt=o.g;if(Lt){const Ir=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ir){var N=p.h;N.g||Ir.indexOf("spdy")==-1&&Ir.indexOf("quic")==-1&&Ir.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(no(N,N.h),N.h=null))}if(p.G){const lo=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;lo&&(p.wa=lo,fe(p.J,p.G,lo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var V=o;if(p.na=zc(p,p.L?p.ba:null,p.W),V.L){vc(p.h,V);var J=V,Te=p.O;Te&&(J.H=Te),J.D&&(Zi(J),gr(J)),p.g=V}else Bc(p);d.i.length>0&&br(d)}else le[0]!="stop"&&le[0]!="close"||fn(d,7);else d.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?fn(d,7):oo(d):le[0]!="noop"&&d.l&&d.l.qa(le),d.A=0)}}_s(4)}catch{}}var Sm=class{constructor(o,u){this.g=o,this.map=u}};function xc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function wc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function bc(o){return o.h?1:o.g?o.g.size:0}function to(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function no(o,u){o.g?o.g.add(u):o.h=u}function vc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}xc.prototype.cancel=function(){if(this.i=Ec(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ec(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return T(o.i)}var Ic=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rm(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const p=o[d].indexOf("=");let A,N=null;p>=0?(A=o[d].substring(0,p),N=o[d].substring(p+1)):A=o[d],u(A,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Dt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Dt?(this.l=o.l,Es(this,o.j),this.o=o.o,this.g=o.g,Is(this,o.u),this.h=o.h,so(this,kc(o.i)),this.m=o.m):o&&(u=String(o).match(Ic))?(this.l=!1,Es(this,u[1]||"",!0),this.o=Ts(u[2]||""),this.g=Ts(u[3]||"",!0),Is(this,u[4]),this.h=Ts(u[5]||"",!0),so(this,u[6]||"",!0),this.m=Ts(u[7]||"")):(this.l=!1,this.i=new Ns(null,this.l))}Dt.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(As(u,Tc,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(As(u,Tc,!0),"@"),o.push(bs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(As(d,d.charAt(0)=="/"?Pm:Cm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",As(d,Dm)),o.join("")},Dt.prototype.resolve=function(o){const u=mt(this);let d=!!o.j;d?Es(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var p=o.h;if(d)Is(u,o.u);else if(d=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var A=u.h.lastIndexOf("/");A!=-1&&(p=u.h.slice(0,A+1)+p)}if(A=p,A==".."||A==".")p="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){p=A.lastIndexOf("/",0)==0,A=A.split("/");const N=[];for(let V=0;V<A.length;){const J=A[V++];J=="."?p&&V==A.length&&N.push(""):J==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),p&&V==A.length&&N.push("")):(N.push(J),p=!0)}p=N.join("/")}else p=A}return d?u.h=p:d=o.i.toString()!=="",d?so(u,kc(o.i)):d=!!o.m,d&&(u.m=o.m),u};function mt(o){return new Dt(o)}function Es(o,u,d){o.j=d?Ts(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Is(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function so(o,u,d){u instanceof Ns?(o.i=u,Vm(o.i,o.l)):(d||(u=As(u,jm)),o.i=new Ns(u,o.l))}function fe(o,u,d){o.i.set(u,d)}function yr(o){return fe(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Ts(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function As(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,km),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function km(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Tc=/[#\/\?@]/g,Cm=/[#\?:]/g,Pm=/[#\?]/g,jm=/[#\?@]/g,Dm=/#/g;function Ns(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function dn(o){o.g||(o.g=new Map,o.h=0,o.i&&Rm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Ns.prototype,n.add=function(o,u){dn(this),this.i=null,o=Dn(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Ac(o,u){dn(o),u=Dn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Nc(o,u){return dn(o),u=Dn(o,u),o.g.has(u)}n.forEach=function(o,u){dn(this),this.g.forEach(function(d,p){d.forEach(function(A){o.call(u,A,p,this)},this)},this)};function Sc(o,u){dn(o);let d=[];if(typeof u=="string")Nc(o,u)&&(d=d.concat(o.g.get(Dn(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}n.set=function(o,u){return dn(this),this.i=null,o=Dn(this,o),Nc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Sc(this,o),o.length>0?String(o[0]):u):u};function Rc(o,u,d){Ac(o,u),d.length>0&&(o.i=null,o.g.set(Dn(o,u),T(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var d=u[p];const A=bs(d);d=Sc(this,d);for(let N=0;N<d.length;N++){let V=A;d[N]!==""&&(V+="="+bs(d[N])),o.push(V)}}return this.i=o.join("&")};function kc(o){const u=new Ns;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Dn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Vm(o,u){u&&!o.j&&(dn(o),o.i=null,o.g.forEach(function(d,p){const A=p.toLowerCase();p!=A&&(Ac(this,p),Rc(this,A,d))},o)),o.j=u}function Om(o,u){const d=new ws;if(c.Image){const p=new Image;p.onload=m(Vt,d,"TestLoadImage: loaded",!0,u,p),p.onerror=m(Vt,d,"TestLoadImage: error",!1,u,p),p.onabort=m(Vt,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=m(Vt,d,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Mm(o,u){const d=new ws,p=new AbortController,A=setTimeout(()=>{p.abort(),Vt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(N=>{clearTimeout(A),N.ok?Vt(d,"TestPingServer: ok",!0,u):Vt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),Vt(d,"TestPingServer: error",!1,u)})}function Vt(o,u,d,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(d)}catch{}}function Lm(){this.g=new wm}function ro(o){this.i=o.Sb||null,this.h=o.ab||!1}y(ro,oc),ro.prototype.g=function(){return new _r(this.i,this.h)};function _r(o,u){Fe.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(_r,Fe),n=_r.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Rs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||c).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Rs(this)),this.g&&(this.readyState=3,Rs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Cc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Cc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ss(this):Rs(this),this.readyState==3&&Cc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Ss(this))},n.Na=function(o){this.g&&(this.response=o,Ss(this))},n.ga=function(){this.g&&Ss(this)};function Ss(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Rs(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Rs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(_r.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Pc(o){let u="";return ae(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function io(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Pc(d),typeof o=="string"?d!=null&&bs(d):fe(o,u,d))}function ye(o){Fe.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(ye,Fe);var Fm=/^https?$/i,Um=["POST","PUT"];n=ye.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():fc.g(),this.g.onreadystatechange=w(f(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(N){jc(this,N);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)d.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),A=c.FormData&&o instanceof c.FormData,!(Array.prototype.indexOf.call(Um,u,void 0)>=0)||p||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,V]of d)this.g.setRequestHeader(N,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(N){jc(this,N)}};function jc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Dc(o),xr(o)}function Dc(o){o.A||(o.A=!0,We(o,"complete"),We(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,We(this,"complete"),We(this,"abort"),xr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xr(this,!0)),ye.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Vc(this):this.Xa())},n.Xa=function(){Vc(this)};function Vc(o){if(o.h&&typeof i<"u"){if(o.v&&Ot(o)==4)setTimeout(o.Ca.bind(o),0);else if(We(o,"readystatechange"),Ot(o)==4){o.h=!1;try{const N=o.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=N===0){let V=String(o.D).match(Ic)[1]||null;!V&&c.self&&c.self.location&&(V=c.self.location.protocol.slice(0,-1)),p=!Fm.test(V?V.toLowerCase():"")}d=p}if(d)We(o,"complete"),We(o,"success");else{o.o=6;try{var A=Ot(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",Dc(o)}}finally{xr(o)}}}}function xr(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||We(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ot(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Ot(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),xm(u)}};function Oc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Bm(o){const u={};o=(o.g&&Ot(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(x(o[p]))continue;var d=Tm(o[p]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=u[A]||[];u[A]=N,N.push(d)}Pe(u,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ks(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Mc(o){this.za=0,this.i=[],this.j=new ws,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ks("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ks("baseRetryDelayMs",5e3,o),this.Za=ks("retryDelaySeedMs",1e4,o),this.Ta=ks("forwardChannelMaxRetries",2,o),this.va=ks("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new xc(o&&o.concurrentRequestLimit),this.Ba=new Lm,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Mc.prototype,n.ka=8,n.I=1,n.connect=function(o,u,d,p){He(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=zc(this,null,this.W),br(this)};function oo(o){if(Lc(o),o.I==3){var u=o.V++,d=mt(o.J);if(fe(d,"SID",o.M),fe(d,"RID",u),fe(d,"TYPE","terminate"),Cs(o,d),u=new jt(o,o.j,u),u.M=2,u.A=yr(mt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.A,d=!0),d||(u.g=Gc(u.j,null),u.g.ea(u.A)),u.F=Date.now(),gr(u)}Hc(o)}function wr(o){o.g&&(co(o),o.g.cancel(),o.g=null)}function Lc(o){wr(o),o.v&&(c.clearTimeout(o.v),o.v=null),vr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&c.clearTimeout(o.m),o.m=null)}function br(o){if(!wc(o.h)&&!o.m){o.m=!0;var u=o.Ea;ue||_(),se||(ue(),se=!0),E.add(u,o),o.D=0}}function qm(o,u){return bc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=xs(f(o.Ea,o,u),Wc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new jt(this,this.j,o);let N=this.o;if(this.U&&(N?(N=it(N),Qe(N,this.U)):N=this.U),this.u!==null||this.R||(A.J=N,N=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Uc(this,A,u),d=mt(this.J),fe(d,"RID",o),fe(d,"CVER",22),this.G&&fe(d,"X-HTTP-Session-Id",this.G),Cs(this,d),N&&(this.R?u="headers="+bs(Pc(N))+"&"+u:this.u&&io(d,this.u,N)),no(this.h,A),this.Ra&&fe(d,"TYPE","init"),this.S?(fe(d,"$req",u),fe(d,"SID","null"),A.U=!0,Xi(A,d,null)):Xi(A,d,u),this.I=2}}else this.I==3&&(o?Fc(this,o):this.i.length==0||wc(this.h)||Fc(this))};function Fc(o,u){var d;u?d=u.l:d=o.V++;const p=mt(o.J);fe(p,"SID",o.M),fe(p,"RID",d),fe(p,"AID",o.K),Cs(o,p),o.u&&o.o&&io(p,o.u,o.o),d=new jt(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Uc(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),no(o.h,d),Xi(d,p,u)}function Cs(o,u){o.H&&ae(o.H,function(d,p){fe(u,p,d)}),o.l&&ae({},function(d,p){fe(u,p,d)})}function Uc(o,u,d){d=Math.min(o.i.length,d);const p=o.l?f(o.l.Ka,o.l,o):null;e:{var A=o.i;let J=-1;for(;;){const Te=["count="+d];J==-1?d>0?(J=A[0].g,Te.push("ofs="+J)):J=0:Te.push("ofs="+J);let le=!0;for(let Re=0;Re<d;Re++){var N=A[Re].g;const pt=A[Re].map;if(N-=J,N<0)J=Math.max(0,A[Re].g-100),le=!1;else try{N="req"+N+"_"||"";try{var V=pt instanceof Map?pt:Object.entries(pt);for(const[mn,Mt]of V){let Lt=Mt;l(Mt)&&(Lt=Gi(Mt)),Te.push(N+mn+"="+encodeURIComponent(Lt))}}catch(mn){throw Te.push(N+"type="+encodeURIComponent("_badmap")),mn}}catch{p&&p(pt)}}if(le){V=Te.join("&");break e}}V=void 0}return o=o.i.splice(0,d),u.G=o,V}function Bc(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;ue||_(),se||(ue(),se=!0),E.add(u,o),o.A=0}}function ao(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=xs(f(o.Da,o),Wc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,qc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=xs(f(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,He(10),wr(this),qc(this))};function co(o){o.B!=null&&(c.clearTimeout(o.B),o.B=null)}function qc(o){o.g=new jt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=mt(o.na);fe(u,"RID","rpc"),fe(u,"SID",o.M),fe(u,"AID",o.K),fe(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&fe(u,"TO",o.ia),fe(u,"TYPE","xmlhttp"),Cs(o,u),o.u&&o.o&&io(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=yr(mt(u)),d.u=null,d.R=!0,gc(d,o)}n.Va=function(){this.C!=null&&(this.C=null,wr(this),ao(this),He(19))};function vr(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function $c(o,u){var d=null;if(o.g==u){vr(o),co(o),o.g=null;var p=2}else if(to(o.h,u))d=u.G,vc(o.h,u),p=1;else return;if(o.I!=0){if(u.o)if(p==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var A=o.D;p=mr(),We(p,new hc(p,d)),br(o)}else Bc(o);else if(A=u.m,A==3||A==0&&u.X>0||!(p==1&&qm(o,u)||p==2&&ao(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),A){case 1:fn(o,5);break;case 4:fn(o,10);break;case 3:fn(o,6);break;default:fn(o,2)}}}function Wc(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function fn(o,u){if(o.j.info("Error code "+u),u==2){var d=f(o.bb,o),p=o.Ua;const A=!p;p=new Dt(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Es(p,"https"),yr(p),A?Om(p.toString(),d):Mm(p.toString(),d)}else He(2);o.I=0,o.l&&o.l.pa(u),Hc(o),Lc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function Hc(o){if(o.I=0,o.ja=[],o.l){const u=Ec(o.h);(u.length!=0||o.i.length!=0)&&(C(o.ja,u),C(o.ja,o.i),o.h.i.length=0,T(o.i),o.i.length=0),o.l.oa()}}function zc(o,u,d){var p=d instanceof Dt?mt(d):new Dt(d);if(p.g!="")u&&(p.g=u+"."+p.g),Is(p,p.u);else{var A=c.location;p=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;const N=new Dt(null);p&&Es(N,p),u&&(N.g=u),A&&Is(N,A),d&&(N.h=d),p=N}return d=o.G,u=o.wa,d&&u&&fe(p,d,u),fe(p,"VER",o.ka),Cs(o,p),p}function Gc(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new ye(new ro({ab:d})):new ye(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kc(){}n=Kc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Er(){}Er.prototype.g=function(o,u){return new Ye(o,u)};function Ye(o,u){Fe.call(this),this.g=new Mc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!x(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!x(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Vn(this)}y(Ye,Fe),Ye.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ye.prototype.close=function(){oo(this.g)},Ye.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Gi(o),o=d);u.i.push(new Sm(u.Ya++,o)),u.I==3&&br(u)},Ye.prototype.N=function(){this.g.l=null,delete this.j,oo(this.g),delete this.g,Ye.Z.N.call(this)};function Qc(o){Ki.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}y(Qc,Ki);function Yc(){Qi.call(this),this.status=1}y(Yc,Qi);function Vn(o){this.g=o}y(Vn,Kc),Vn.prototype.ra=function(){We(this.g,"a")},Vn.prototype.qa=function(o){We(this.g,new Qc(o))},Vn.prototype.pa=function(o){We(this.g,new Yc)},Vn.prototype.oa=function(){We(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,Ye.prototype.send=Ye.prototype.o,Ye.prototype.open=Ye.prototype.m,Ye.prototype.close=Ye.prototype.close,yd=function(){return new Er},gd=function(){return mr()},pd=un,Uo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},pr.NO_ERROR=0,pr.TIMEOUT=8,pr.HTTP_ERROR=6,Mr=pr,dc.COMPLETE="complete",md=dc,ac.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",Fe.prototype.listen=Fe.prototype.J,Vs=ac,ye.prototype.listenOnce=ye.prototype.K,ye.prototype.getLastError=ye.prototype.Ha,ye.prototype.getLastErrorCode=ye.prototype.ya,ye.prototype.getStatus=ye.prototype.ca,ye.prototype.getResponseJson=ye.prototype.La,ye.prototype.getResponseText=ye.prototype.la,ye.prototype.send=ye.prototype.ea,ye.prototype.setWithCredentials=ye.prototype.Fa,fd=ye}).apply(typeof Sr<"u"?Sr:typeof self<"u"?self:typeof window<"u"?window:{});const Ul="@firebase/firestore",Bl="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new xi("@firebase/firestore");function On(){return bn.logLevel}function F(n,...e){if(bn.logLevel<=Z.DEBUG){const t=e.map(ya);bn.debug(`Firestore (${as}): ${n}`,...t)}}function Ct(n,...e){if(bn.logLevel<=Z.ERROR){const t=e.map(ya);bn.error(`Firestore (${as}): ${n}`,...t)}}function Jn(n,...e){if(bn.logLevel<=Z.WARN){const t=e.map(ya);bn.warn(`Firestore (${as}): ${n}`,...t)}}function ya(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function H(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,_d(n,s,t)}function _d(n,e,t){let s=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ct(s),new Error(s)}function oe(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||_d(e,r,s)}function K(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends ft{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Be.UNAUTHENTICATED)))}shutdown(){}}class x0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class w0{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){oe(this.o===void 0,42304);let s=this.i;const r=h=>this.i!==s?(s=this.i,t(h)):Promise.resolve();let i=new Nt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nt,e.enqueueRetryable((()=>r(this.currentUser)))};const c=()=>{const h=i;e.enqueueRetryable((async()=>{await h.promise,await r(this.currentUser)}))},l=h=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nt)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(oe(typeof s.accessToken=="string",31837,{l:s}),new xd(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Be(e)}}class b0{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class v0{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new b0(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Be.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ql{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class E0{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){oe(this.o===void 0,3512);const s=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const c=i.token!==this.m;return this.m=i.token,F("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ql(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(oe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ql(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=I0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function ee(n,e){return n<e?-1:n>e?1:0}function Bo(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return xo(r)===xo(i)?ee(r,i):xo(r)?1:-1}return ee(n.length,e.length)}const T0=55296,A0=57343;function xo(n){const e=n.charCodeAt(0);return e>=T0&&e<=A0}function Xn(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="__name__";class gt{constructor(e,t,s){t===void 0?t=0:t>e.length&&H(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&H(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return gt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gt?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=gt.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return ee(e.length,t.length)}static compareSegments(e,t){const s=gt.isNumericId(e),r=gt.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?gt.extractNumericId(e).compare(gt.extractNumericId(t)):Bo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qt.fromString(e.substring(4,e.length-2))}}class de extends gt{construct(e,t,s){return new de(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new de(t)}static emptyPath(){return new de([])}}const N0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class De extends gt{construct(e,t,s){return new De(e,t,s)}static isValidIdentifier(e){return N0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),De.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$l}static keyField(){return new De([$l])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new L(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new L(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new L(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=h,r+=2}else l==="`"?(c=!c,r++):l!=="."||c?(s+=l,r++):(i(),r++)}if(i(),c)throw new L(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new De(t)}static emptyPath(){return new De([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(de.fromString(e))}static fromName(e){return new q(de.fromString(e).popFirst(5))}static empty(){return new q(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return de.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new de(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(n,e,t){if(!t)throw new L(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function S0(n,e,t,s){if(e===!0&&s===!0)throw new L(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wl(n){if(!q.isDocumentKey(n))throw new L(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Hl(n){if(q.isDocumentKey(n))throw new L(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function bd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ti(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H(12329,{type:typeof n})}function vn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ti(n);throw new L(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ee(n,e){const t={typeString:n};return e&&(t.value=e),t}function cr(n,e){if(!bd(n))throw new L(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(r&&typeof c!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&c!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new L(S.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=-62135596800,Gl=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Gl);return new me(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<zl)throw new L(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gl}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cr(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-zl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:Ee("string",me._jsonSchemaVersion),seconds:Ee("number"),nanoseconds:Ee("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static fromTimestamp(e){return new G(e)}static min(){return new G(new me(0,0))}static max(){return new G(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Qs=-1;function R0(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=G.fromTimestamp(s===1e9?new me(t+1,0):new me(t,s));return new Xt(r,q.empty(),e)}function k0(n){return new Xt(n.readTime,n.key,Qs)}class Xt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Xt(G.min(),q.empty(),Qs)}static max(){return new Xt(G.max(),q.empty(),Qs)}}function C0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class j0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==P0)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):k.reject(t)}static resolve(e){return new k(((t,s)=>{t(e)}))}static reject(e){return new k(((t,s)=>{s(e)}))}static waitFor(e){return new k(((t,s)=>{let r=0,i=0,c=!1;e.forEach((l=>{++r,l.next((()=>{++i,c&&i===r&&t()}),(h=>s(h)))})),c=!0,i===r&&t()}))}static or(e){let t=k.resolve(!1);for(const s of e)t=t.next((r=>r?k.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new k(((s,r)=>{const i=e.length,c=new Array(i);let l=0;for(let h=0;h<i;h++){const f=h;t(e[f]).next((m=>{c[f]=m,++l,l===i&&s(c)}),(m=>r(m)))}}))}static doWhile(e,t){return new k(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function D0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ls(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ai{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ai.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=-1;function Ni(n){return n==null}function si(n){return n===0&&1/n==-1/0}function V0(n){return typeof n=="number"&&Number.isInteger(n)&&!si(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="";function O0(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Kl(e)),e=M0(n.get(t),e);return Kl(e)}function M0(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case vd:t+="";break;default:t+=i}}return t}function Kl(n){return n+vd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function cn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ed(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.comparator=e,this.root=t||je.EMPTY}insert(e,t){return new ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rr(this.root,e,this.comparator,!0)}}class Rr{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??je.RED,this.left=r??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new je(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return je.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw H(43730,{key:this.key,value:this.value});if(this.right.isRed())throw H(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw H(27949);return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw H(57766)}get value(){throw H(16141)}get color(){throw H(16727)}get left(){throw H(29726)}get right(){throw H(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yl(this.data.getIterator())}getIteratorFrom(e){return new Yl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class Yl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.fields=e,e.sort(De.comparator)}static empty(){return new ct([])}unionWith(e){let t=new Ae(De.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ct(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xn(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Id extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Id("Invalid base64 string: "+i):i}})(e);return new Oe(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let c=0;c<r.length;++c)i+=String.fromCharCode(r[c]);return i})(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const L0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(n){if(oe(!!n,39018),typeof n=="string"){let e=0;const t=L0.exec(n);if(oe(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:xe(n.seconds),nanos:xe(n.nanos)}}function xe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function en(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="server_timestamp",Ad="__type__",Nd="__previous_value__",Sd="__local_write_time__";function wa(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ad])==null?void 0:s.stringValue)===Td}function Si(n){const e=n.mapValue.fields[Nd];return wa(e)?Si(e):e}function Ys(n){const e=Zt(n.mapValue.fields[Sd].timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,t,s,r,i,c,l,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=c,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m}}const ri="(default)";class Js{constructor(e,t){this.projectId=e,this.database=t||ri}static empty(){return new Js("","")}get isDefaultDatabase(){return this.database===ri}isEqual(e){return e instanceof Js&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="__type__",U0="__max__",kr={mapValue:{}},kd="__vector__",ii="value";function tn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wa(n)?4:q0(n)?9007199254740991:B0(n)?10:11:H(28295,{value:n})}function It(n,e){if(n===e)return!0;const t=tn(n);if(t!==tn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ys(n).isEqual(Ys(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const c=Zt(r.timestampValue),l=Zt(i.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,i){return en(r.bytesValue).isEqual(en(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,i){return xe(r.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(r.geoPointValue.longitude)===xe(i.geoPointValue.longitude)})(n,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return xe(r.integerValue)===xe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const c=xe(r.doubleValue),l=xe(i.doubleValue);return c===l?si(c)===si(l):isNaN(c)&&isNaN(l)}return!1})(n,e);case 9:return Xn(n.arrayValue.values||[],e.arrayValue.values||[],It);case 10:case 11:return(function(r,i){const c=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Ql(c)!==Ql(l))return!1;for(const h in c)if(c.hasOwnProperty(h)&&(l[h]===void 0||!It(c[h],l[h])))return!1;return!0})(n,e);default:return H(52216,{left:n})}}function Xs(n,e){return(n.values||[]).find((t=>It(t,e)))!==void 0}function Zn(n,e){if(n===e)return 0;const t=tn(n),s=tn(e);if(t!==s)return ee(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return(function(i,c){const l=xe(i.integerValue||i.doubleValue),h=xe(c.integerValue||c.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,e);case 3:return Jl(n.timestampValue,e.timestampValue);case 4:return Jl(Ys(n),Ys(e));case 5:return Bo(n.stringValue,e.stringValue);case 6:return(function(i,c){const l=en(i),h=en(c);return l.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(i,c){const l=i.split("/"),h=c.split("/");for(let f=0;f<l.length&&f<h.length;f++){const m=ee(l[f],h[f]);if(m!==0)return m}return ee(l.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,c){const l=ee(xe(i.latitude),xe(c.latitude));return l!==0?l:ee(xe(i.longitude),xe(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Xl(n.arrayValue,e.arrayValue);case 10:return(function(i,c){var w,T,C,j;const l=i.fields||{},h=c.fields||{},f=(w=l[ii])==null?void 0:w.arrayValue,m=(T=h[ii])==null?void 0:T.arrayValue,y=ee(((C=f==null?void 0:f.values)==null?void 0:C.length)||0,((j=m==null?void 0:m.values)==null?void 0:j.length)||0);return y!==0?y:Xl(f,m)})(n.mapValue,e.mapValue);case 11:return(function(i,c){if(i===kr.mapValue&&c===kr.mapValue)return 0;if(i===kr.mapValue)return 1;if(c===kr.mapValue)return-1;const l=i.fields||{},h=Object.keys(l),f=c.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const w=Bo(h[y],m[y]);if(w!==0)return w;const T=Zn(l[h[y]],f[m[y]]);if(T!==0)return T}return ee(h.length,m.length)})(n.mapValue,e.mapValue);default:throw H(23264,{he:t})}}function Jl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=Zt(n),s=Zt(e),r=ee(t.seconds,s.seconds);return r!==0?r:ee(t.nanos,s.nanos)}function Xl(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Zn(t[r],s[r]);if(i)return i}return ee(t.length,s.length)}function es(n){return qo(n)}function qo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Zt(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return en(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return q.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=qo(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const c of s)i?i=!1:r+=",",r+=`${c}:${qo(t.fields[c])}`;return r+"}"})(n.mapValue):H(61005,{value:n})}function Lr(n){switch(tn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Si(n);return e?16+Lr(e):16;case 5:return 2*n.stringValue.length;case 6:return en(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Lr(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return cn(s.fields,((i,c)=>{r+=i.length+Lr(c)})),r})(n.mapValue);default:throw H(13486,{value:n})}}function Zl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function $o(n){return!!n&&"integerValue"in n}function ba(n){return!!n&&"arrayValue"in n}function eu(n){return!!n&&"nullValue"in n}function tu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fr(n){return!!n&&"mapValue"in n}function B0(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Rd])==null?void 0:s.stringValue)===kd}function Bs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return cn(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Bs(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Bs(n.arrayValue.values[t]);return e}return{...n}}function q0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===U0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.value=e}static empty(){return new Xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Fr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bs(t)}setAll(e){let t=De.emptyPath(),s={},r=[];e.forEach(((c,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,s,r),s={},r=[],t=l.popLast()}c?s[l.lastSegment()]=Bs(c):r.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Fr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return It(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Fr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){cn(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Xe(Bs(this.value))}}function Cd(n){const e=[];return cn(n.fields,((t,s)=>{const r=new De([t]);if(Fr(s)){const i=Cd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const c of i)e.push(r.child(c))}else e.push(r)})),new ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t,s,r,i,c,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=c,this.documentState=l}static newInvalidDocument(e){return new qe(e,0,G.min(),G.min(),G.min(),Xe.empty(),0)}static newFoundDocument(e,t,s,r){return new qe(e,1,t,G.min(),s,r,0)}static newNoDocument(e,t){return new qe(e,2,t,G.min(),G.min(),Xe.empty(),0)}static newUnknownDocument(e,t){return new qe(e,3,t,G.min(),G.min(),Xe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class oi{constructor(e,t){this.position=e,this.inclusive=t}}function nu(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],c=n.position[r];if(i.field.isKeyField()?s=q.comparator(q.fromName(c.referenceValue),t.key):s=Zn(c,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function su(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!It(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Zs{constructor(e,t="asc"){this.field=e,this.dir=t}}function $0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Pd{}class ve extends Pd{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new H0(e,t,s):t==="array-contains"?new K0(e,s):t==="in"?new Q0(e,s):t==="not-in"?new Y0(e,s):t==="array-contains-any"?new J0(e,s):new ve(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new z0(e,s):new G0(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Zn(t,this.value)):t!==null&&tn(this.value)===tn(t)&&this.matchesComparison(Zn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dt extends Pd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new dt(e,t)}matches(e){return jd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function jd(n){return n.op==="and"}function Dd(n){return W0(n)&&jd(n)}function W0(n){for(const e of n.filters)if(e instanceof dt)return!1;return!0}function Wo(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+es(n.value);if(Dd(n))return n.filters.map((e=>Wo(e))).join(",");{const e=n.filters.map((t=>Wo(t))).join(",");return`${n.op}(${e})`}}function Vd(n,e){return n instanceof ve?(function(s,r){return r instanceof ve&&s.op===r.op&&s.field.isEqual(r.field)&&It(s.value,r.value)})(n,e):n instanceof dt?(function(s,r){return r instanceof dt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,c,l)=>i&&Vd(c,r.filters[l])),!0):!1})(n,e):void H(19439)}function Od(n){return n instanceof ve?(function(t){return`${t.field.canonicalString()} ${t.op} ${es(t.value)}`})(n):n instanceof dt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Od).join(" ,")+"}"})(n):"Filter"}class H0 extends ve{constructor(e,t,s){super(e,t,s),this.key=q.fromName(s.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class z0 extends ve{constructor(e,t){super(e,"in",t),this.keys=Md("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class G0 extends ve{constructor(e,t){super(e,"not-in",t),this.keys=Md("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Md(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>q.fromName(s.referenceValue)))}class K0 extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ba(t)&&Xs(t.arrayValue,this.value)}}class Q0 extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xs(this.value.arrayValue,t)}}class Y0 extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Xs(this.value.arrayValue,t)}}class J0 extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ba(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Xs(this.value.arrayValue,s)))}}/**
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
 */class X0{constructor(e,t=null,s=[],r=[],i=null,c=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=c,this.endAt=l,this.Te=null}}function ru(n,e=null,t=[],s=[],r=null,i=null,c=null){return new X0(n,e,t,s,r,i,c)}function va(n){const e=K(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Wo(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Ni(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>es(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>es(s))).join(",")),e.Te=t}return e.Te}function Ea(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!$0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Vd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!su(n.startAt,e.startAt)&&su(n.endAt,e.endAt)}function Ho(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t=null,s=[],r=[],i=null,c="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=c,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Z0(n,e,t,s,r,i,c,l){return new us(n,e,t,s,r,i,c,l)}function Ia(n){return new us(n)}function iu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ld(n){return n.collectionGroup!==null}function qs(n){const e=K(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let l=new Ae(De.comparator);return c.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Zs(i,s))})),t.has(De.keyField().canonicalString())||e.Ie.push(new Zs(De.keyField(),s))}return e.Ie}function xt(n){const e=K(n);return e.Ee||(e.Ee=ew(e,qs(n))),e.Ee}function ew(n,e){if(n.limitType==="F")return ru(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Zs(r.field,i)}));const t=n.endAt?new oi(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new oi(n.startAt.position,n.startAt.inclusive):null;return ru(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function zo(n,e){const t=n.filters.concat([e]);return new us(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Go(n,e,t){return new us(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ri(n,e){return Ea(xt(n),xt(e))&&n.limitType===e.limitType}function Fd(n){return`${va(xt(n))}|lt:${n.limitType}`}function Mn(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>Od(r))).join(", ")}]`),Ni(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>es(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>es(r))).join(",")),`Target(${s})`})(xt(n))}; limitType=${n.limitType})`}function ki(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):q.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of qs(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(c,l,h){const f=nu(c,l,h);return c.inclusive?f<=0:f<0})(s.startAt,qs(s),r)||s.endAt&&!(function(c,l,h){const f=nu(c,l,h);return c.inclusive?f>=0:f>0})(s.endAt,qs(s),r))})(n,e)}function tw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ud(n){return(e,t)=>{let s=!1;for(const r of qs(n)){const i=nw(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function nw(n,e,t){const s=n.field.isKeyField()?q.comparator(e.key,t.key):(function(i,c,l){const h=c.data.field(i),f=l.data.field(i);return h!==null&&f!==null?Zn(h,f):H(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return H(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){cn(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return Ed(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=new ge(q.comparator);function Pt(){return sw}const Bd=new ge(q.comparator);function Os(...n){let e=Bd;for(const t of n)e=e.insert(t.key,t);return e}function qd(n){let e=Bd;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function yn(){return $s()}function $d(){return $s()}function $s(){return new Rn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const rw=new ge(q.comparator),iw=new Ae(q.comparator);function te(...n){let e=iw;for(const t of n)e=e.add(t);return e}const ow=new Ae(ee);function aw(){return ow}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:si(e)?"-0":e}}function Wd(n){return{integerValue:""+n}}function cw(n,e){return V0(e)?Wd(e):Ta(n,e)}/**
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
 */class Ci{constructor(){this._=void 0}}function lw(n,e,t){return n instanceof er?(function(r,i){const c={fields:{[Ad]:{stringValue:Td},[Sd]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&wa(i)&&(i=Si(i)),i&&(c.fields[Nd]=i),{mapValue:c}})(t,e):n instanceof tr?zd(n,e):n instanceof nr?Gd(n,e):(function(r,i){const c=Hd(r,i),l=ou(c)+ou(r.Ae);return $o(c)&&$o(r.Ae)?Wd(l):Ta(r.serializer,l)})(n,e)}function uw(n,e,t){return n instanceof tr?zd(n,e):n instanceof nr?Gd(n,e):t}function Hd(n,e){return n instanceof ai?(function(s){return $o(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class er extends Ci{}class tr extends Ci{constructor(e){super(),this.elements=e}}function zd(n,e){const t=Kd(e);for(const s of n.elements)t.some((r=>It(r,s)))||t.push(s);return{arrayValue:{values:t}}}class nr extends Ci{constructor(e){super(),this.elements=e}}function Gd(n,e){let t=Kd(e);for(const s of n.elements)t=t.filter((r=>!It(r,s)));return{arrayValue:{values:t}}}class ai extends Ci{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ou(n){return xe(n.integerValue||n.doubleValue)}function Kd(n){return ba(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,t){this.field=e,this.transform=t}}function dw(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof tr&&r instanceof tr||s instanceof nr&&r instanceof nr?Xn(s.elements,r.elements,It):s instanceof ai&&r instanceof ai?It(s.Ae,r.Ae):s instanceof er&&r instanceof er})(n.transform,e.transform)}class fw{constructor(e,t){this.version=e,this.transformResults=t}}class St{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new St}static exists(e){return new St(void 0,e)}static updateTime(e){return new St(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ur(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Pi{}function Qd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Jd(n.key,St.none()):new ji(n.key,n.data,St.none());{const t=n.data,s=Xe.empty();let r=new Ae(De.comparator);for(let i of e.fields)if(!r.has(i)){let c=t.field(i);c===null&&i.length>1&&(i=i.popLast(),c=t.field(i)),c===null?s.delete(i):s.set(i,c),r=r.add(i)}return new kn(n.key,s,new ct(r.toArray()),St.none())}}function mw(n,e,t){n instanceof ji?(function(r,i,c){const l=r.value.clone(),h=cu(r.fieldTransforms,i,c.transformResults);l.setAll(h),i.convertToFoundDocument(c.version,l).setHasCommittedMutations()})(n,e,t):n instanceof kn?(function(r,i,c){if(!Ur(r.precondition,i))return void i.convertToUnknownDocument(c.version);const l=cu(r.fieldTransforms,i,c.transformResults),h=i.data;h.setAll(Yd(r)),h.setAll(l),i.convertToFoundDocument(c.version,h).setHasCommittedMutations()})(n,e,t):(function(r,i,c){i.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Ws(n,e,t,s){return n instanceof ji?(function(i,c,l,h){if(!Ur(i.precondition,c))return l;const f=i.value.clone(),m=lu(i.fieldTransforms,h,c);return f.setAll(m),c.convertToFoundDocument(c.version,f).setHasLocalMutations(),null})(n,e,t,s):n instanceof kn?(function(i,c,l,h){if(!Ur(i.precondition,c))return l;const f=lu(i.fieldTransforms,h,c),m=c.data;return m.setAll(Yd(i)),m.setAll(f),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((y=>y.field)))})(n,e,t,s):(function(i,c,l){return Ur(i.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):l})(n,e,t)}function pw(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Hd(s.transform,r||null);i!=null&&(t===null&&(t=Xe.empty()),t.set(s.field,i))}return t||null}function au(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Xn(s,r,((i,c)=>dw(i,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ji extends Pi{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class kn extends Pi{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yd(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function cu(n,e,t){const s=new Map;oe(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let r=0;r<t.length;r++){const i=n[r],c=i.transform,l=e.data.field(i.field);s.set(i.field,uw(c,l,t[r]))}return s}function lu(n,e,t){const s=new Map;for(const r of n){const i=r.transform,c=t.data.field(r.field);s.set(r.field,lw(i,c,e))}return s}class Jd extends Pi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gw extends Pi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&mw(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ws(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ws(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=$d();return this.mutations.forEach((r=>{const i=e.get(r.key),c=i.overlayedDocument;let l=this.applyToLocalView(c,i.mutatedFields);l=t.has(r.key)?null:l;const h=Qd(c,l);h!==null&&s.set(r.key,h),c.isValidDocument()||c.convertToNoDocument(G.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),te())}isEqual(e){return this.batchId===e.batchId&&Xn(this.mutations,e.mutations,((t,s)=>au(t,s)))&&Xn(this.baseMutations,e.baseMutations,((t,s)=>au(t,s)))}}class Aa{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){oe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return rw})();const i=e.mutations;for(let c=0;c<i.length;c++)r=r.insert(i[c].key,s[c].version);return new Aa(e,t,s,r)}}/**
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
 */class _w{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,ne;function ww(n){switch(n){case S.OK:return H(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return H(15467,{code:n})}}function Xd(n){if(n===void 0)return Ct("GRPC error has no .code"),S.UNKNOWN;switch(n){case be.OK:return S.OK;case be.CANCELLED:return S.CANCELLED;case be.UNKNOWN:return S.UNKNOWN;case be.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case be.INTERNAL:return S.INTERNAL;case be.UNAVAILABLE:return S.UNAVAILABLE;case be.UNAUTHENTICATED:return S.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case be.NOT_FOUND:return S.NOT_FOUND;case be.ALREADY_EXISTS:return S.ALREADY_EXISTS;case be.PERMISSION_DENIED:return S.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case be.ABORTED:return S.ABORTED;case be.OUT_OF_RANGE:return S.OUT_OF_RANGE;case be.UNIMPLEMENTED:return S.UNIMPLEMENTED;case be.DATA_LOSS:return S.DATA_LOSS;default:return H(39323,{code:n})}}(ne=be||(be={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bw(){return new TextEncoder}/**
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
 */const vw=new Qt([4294967295,4294967295],0);function uu(n){const e=bw().encode(n),t=new dd;return t.update(e),new Uint8Array(t.digest())}function hu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qt([t,s],0),new Qt([r,i],0)]}class Na{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ms(`Invalid padding: ${t}`);if(s<0)throw new Ms(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Qt.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(Qt.fromNumber(s)));return r.compare(vw)===1&&(r=new Qt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=uu(e),[s,r]=hu(t);for(let i=0;i<this.hashCount;i++){const c=this.ye(s,r,i);if(!this.we(c))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),c=new Na(i,r,t);return s.forEach((l=>c.insert(l))),c}insert(e){if(this.ge===0)return;const t=uu(e),[s,r]=hu(t);for(let i=0;i<this.hashCount;i++){const c=this.ye(s,r,i);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,lr.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Di(G.min(),r,new ge(ee),Pt(),te())}}class lr{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new lr(s,t,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class Zd{constructor(e,t){this.targetId=e,this.Ce=t}}class ef{constructor(e,t,s=Oe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class du{constructor(){this.ve=0,this.Fe=fu(),this.Me=Oe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),t=te(),s=te();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:H(38017,{changeType:i})}})),new lr(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=fu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Ew{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pt(),this.Je=Cr(),this.He=Cr(),this.Ye=new ge(ee)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:H(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(Ho(i))if(s===0){const c=new q(i.path);this.et(t,c,qe.newNoDocument(c,G.min()))}else oe(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const l=this.ut(e),h=l?this.ct(l,e,c):1;if(h!==0){this.it(t);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,f)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let c,l;try{c=en(s).toUint8Array()}catch(h){if(h instanceof Id)return Jn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Na(c,r,i)}catch(h){return Jn(h instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const c=this.Ge.ht(),l=`projects/${c.projectId}/databases/${c.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,c)=>{const l=this.ot(c);if(l){if(i.current&&Ho(l.target)){const h=new q(l.target.path);this.It(h).has(c)||this.Et(c,h)||this.et(c,h,qe.newNoDocument(h,e))}i.Be&&(t.set(c,i.ke()),i.qe())}}));let s=te();this.He.forEach(((i,c)=>{let l=!0;c.forEachWhile((h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.je.forEach(((i,c)=>c.setReadTime(e)));const r=new Di(e,t,this.Ye,this.je,s);return this.je=Pt(),this.Je=Cr(),this.He=Cr(),this.Ye=new ge(ee),r}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new du,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ae(ee),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ae(ee),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new du),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Cr(){return new ge(q.comparator)}function fu(){return new ge(q.comparator)}const Iw={asc:"ASCENDING",desc:"DESCENDING"},Tw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Aw={and:"AND",or:"OR"};class Nw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ko(n,e){return n.useProto3Json||Ni(e)?e:{value:e}}function ci(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Sw(n,e){return ci(n,e.toTimestamp())}function wt(n){return oe(!!n,49232),G.fromTimestamp((function(t){const s=Zt(t);return new me(s.seconds,s.nanos)})(n))}function Sa(n,e){return Qo(n,e).canonicalString()}function Qo(n,e){const t=(function(r){return new de(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function nf(n){const e=de.fromString(n);return oe(cf(e),10190,{key:e.toString()}),e}function Yo(n,e){return Sa(n.databaseId,e.path)}function wo(n,e){const t=nf(e);if(t.get(1)!==n.databaseId.projectId)throw new L(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(rf(t))}function sf(n,e){return Sa(n.databaseId,e)}function Rw(n){const e=nf(n);return e.length===4?de.emptyPath():rf(e)}function Jo(n){return new de(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function rf(n){return oe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function mu(n,e,t){return{name:Yo(n,e),fields:t.value.mapValue.fields}}function kw(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:H(39313,{state:f})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(f,m){return f.useProto3Json?(oe(m===void 0||typeof m=="string",58123),Oe.fromBase64String(m||"")):(oe(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Oe.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,l=c&&(function(f){const m=f.code===void 0?S.UNKNOWN:Xd(f.code);return new L(m,f.message||"")})(c);t=new ef(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=wo(n,s.document.name),i=wt(s.document.updateTime),c=s.document.createTime?wt(s.document.createTime):G.min(),l=new Xe({mapValue:{fields:s.document.fields}}),h=qe.newFoundDocument(r,i,c,l),f=s.targetIds||[],m=s.removedTargetIds||[];t=new Br(f,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=wo(n,s.document),i=s.readTime?wt(s.readTime):G.min(),c=qe.newNoDocument(r,i),l=s.removedTargetIds||[];t=new Br([],l,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=wo(n,s.document),i=s.removedTargetIds||[];t=new Br([],i,r,null)}else{if(!("filter"in e))return H(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,c=new xw(r,i),l=s.targetId;t=new Zd(l,c)}}return t}function Cw(n,e){let t;if(e instanceof ji)t={update:mu(n,e.key,e.value)};else if(e instanceof Jd)t={delete:Yo(n,e.key)};else if(e instanceof kn)t={update:mu(n,e.key,e.data),updateMask:Uw(e.fieldMask)};else{if(!(e instanceof gw))return H(16599,{Vt:e.type});t={verify:Yo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,c){const l=c.transform;if(l instanceof er)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof tr)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof nr)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ai)return{fieldPath:c.field.canonicalString(),increment:l.Ae};throw H(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:Sw(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H(27497)})(n,e.precondition)),t}function Pw(n,e){return n&&n.length>0?(oe(e!==void 0,14353),n.map((t=>(function(r,i){let c=r.updateTime?wt(r.updateTime):wt(i);return c.isEqual(G.min())&&(c=wt(i)),new fw(c,r.transformResults||[])})(t,e)))):[]}function jw(n,e){return{documents:[sf(n,e.path)]}}function Dw(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=sf(n,r);const i=(function(f){if(f.length!==0)return af(dt.create(f,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const c=(function(f){if(f.length!==0)return f.map((m=>(function(w){return{field:Ln(w.field),direction:Mw(w.dir)}})(m)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const l=Ko(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(e.endAt)),{ft:t,parent:r}}function Vw(n){let e=Rw(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){oe(s===1,65062);const m=t.from[0];m.allDescendants?r=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(y){const w=of(y);return w instanceof dt&&Dd(w)?w.getFilters():[w]})(t.where));let c=[];t.orderBy&&(c=(function(y){return y.map((w=>(function(C){return new Zs(Fn(C.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(w)))})(t.orderBy));let l=null;t.limit&&(l=(function(y){let w;return w=typeof y=="object"?y.value:y,Ni(w)?null:w})(t.limit));let h=null;t.startAt&&(h=(function(y){const w=!!y.before,T=y.values||[];return new oi(T,w)})(t.startAt));let f=null;return t.endAt&&(f=(function(y){const w=!y.before,T=y.values||[];return new oi(T,w)})(t.endAt)),Z0(e,r,c,i,l,"F",h,f)}function Ow(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function of(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Fn(t.unaryFilter.field);return ve.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Fn(t.unaryFilter.field);return ve.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fn(t.unaryFilter.field);return ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Fn(t.unaryFilter.field);return ve.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return H(61313);default:return H(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ve.create(Fn(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return H(58110);default:return H(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return dt.create(t.compositeFilter.filters.map((s=>of(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return H(1026)}})(t.compositeFilter.op))})(n):H(30097,{filter:n})}function Mw(n){return Iw[n]}function Lw(n){return Tw[n]}function Fw(n){return Aw[n]}function Ln(n){return{fieldPath:n.canonicalString()}}function Fn(n){return De.fromServerFormat(n.fieldPath)}function af(n){return n instanceof ve?(function(t){if(t.op==="=="){if(tu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NAN"}};if(eu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(tu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NAN"}};if(eu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(t.field),op:Lw(t.op),value:t.value}}})(n):n instanceof dt?(function(t){const s=t.getFilters().map((r=>af(r)));return s.length===1?s[0]:{compositeFilter:{op:Fw(t.op),filters:s}}})(n):H(54877,{filter:n})}function Uw(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function cf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,s,r,i=G.min(),c=G.min(),l=Oe.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new Wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.yt=e}}function qw(n){const e=Vw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Go(e,e.limit,"L"):e}/**
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
 */class $w{constructor(){this.Cn=new Ww}addToCollectionParentIndex(e,t){return this.Cn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Xt.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Xt.min())}updateCollectionGroup(e,t,s){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class Ww{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Ae(de.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ae(de.comparator)).toArray()}}/**
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
 */const pu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lf=41943040;class Ke{static withCacheSize(e){return new Ke(e,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke.DEFAULT_COLLECTION_PERCENTILE=10,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ke.DEFAULT=new Ke(lf,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ke.DISABLED=new Ke(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ts(0)}static cr(){return new ts(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="LruGarbageCollector",Hw=1048576;function yu([n,e],[t,s]){const r=ee(n,t);return r===0?ee(e,s):r}class zw{constructor(e){this.Ir=e,this.buffer=new Ae(yu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();yu(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Gw{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){F(gu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ls(t)?F(gu,"Ignoring IndexedDB error during garbage collection: ",t):await cs(t)}await this.Vr(3e5)}))}}class Kw{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Ai.ce);const s=new zw(t);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(pu)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pu):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,r,i,c,l,h,f;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),r=this.params.maximumSequenceNumbersToCollect):r=y,c=Date.now(),this.nthSequenceNumber(e,r)))).next((y=>(s=y,l=Date.now(),this.removeTargets(e,s,t)))).next((y=>(i=y,h=Date.now(),this.removeOrphanedDocuments(e,s)))).next((y=>(f=Date.now(),On()<=Z.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-m}ms
	Determined least recently used ${r} in `+(l-c)+`ms
	Removed ${i} targets in `+(h-l)+`ms
	Removed ${y} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:y}))))}}function Qw(n,e){return new Kw(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(){this.changes=new Rn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?k.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Ws(s.mutation,r,ct.empty(),me.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,te()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=te()){const r=yn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let c=Os();return i.forEach(((l,h)=>{c=c.insert(l,h.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=yn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,te())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((c,l)=>{t.set(c,l)}))}))}computeViews(e,t,s,r){let i=Pt();const c=$s(),l=(function(){return $s()})();return t.forEach(((h,f)=>{const m=s.get(f.key);r.has(f.key)&&(m===void 0||m.mutation instanceof kn)?i=i.insert(f.key,f):m!==void 0?(c.set(f.key,m.mutation.getFieldMask()),Ws(m.mutation,f,m.mutation.getFieldMask(),me.now())):c.set(f.key,ct.empty())})),this.recalculateAndSaveOverlays(e,i).next((h=>(h.forEach(((f,m)=>c.set(f,m))),t.forEach(((f,m)=>l.set(f,new Jw(m,c.get(f)??null)))),l)))}recalculateAndSaveOverlays(e,t){const s=$s();let r=new ge(((c,l)=>c-l)),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const l of c)l.keys().forEach((h=>{const f=t.get(h);if(f===null)return;let m=s.get(h)||ct.empty();m=l.applyToLocalView(f,m),s.set(h,m);const y=(r.get(l.batchId)||te()).add(h);r=r.insert(l.batchId,y)}))})).next((()=>{const c=[],l=r.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,m=h.value,y=$d();m.forEach((w=>{if(!i.has(w)){const T=Qd(t.get(w),s.get(w));T!==null&&y.set(w,T),i=i.add(w)}})),c.push(this.documentOverlayCache.saveOverlays(e,f,y))}return k.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return(function(c){return q.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ld(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const c=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):k.resolve(yn());let l=Qs,h=i;return c.next((f=>k.forEach(f,((m,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),i.get(m)?k.resolve():this.remoteDocumentCache.getEntry(e,m).next((w=>{h=h.insert(m,w)}))))).next((()=>this.populateOverlays(e,f,i))).next((()=>this.computeViews(e,h,f,te()))).next((m=>({batchId:l,changes:qd(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next((s=>{let r=Os();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let c=Os();return this.indexManager.getCollectionParents(e,i).next((l=>k.forEach(l,(h=>{const f=(function(y,w){return new us(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,h.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,s,r).next((m=>{m.forEach(((y,w)=>{c=c.insert(y,w)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(i=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((c=>{i.forEach(((h,f)=>{const m=f.getKey();c.get(m)===null&&(c=c.insert(m,qe.newInvalidDocument(m)))}));let l=Os();return c.forEach(((h,f)=>{const m=i.get(h);m!==void 0&&Ws(m.mutation,f,ct.empty(),me.now()),ki(t,f)&&(l=l.insert(h,f))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return k.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:wt(r.createTime)}})(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(r){return{name:r.name,query:qw(r.bundledQuery),readTime:wt(r.readTime)}})(t)),k.resolve()}}/**
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
 */class eb{constructor(){this.overlays=new ge(q.comparator),this.qr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const s=yn();return k.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.St(e,t,i)})),k.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(s)),k.resolve()}getOverlaysForCollection(e,t,s){const r=yn(),i=t.length+1,c=new q(t.child("")),l=this.overlays.getIteratorFrom(c);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===i&&h.largestBatchId>s&&r.set(h.getKey(),h)}return k.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new ge(((f,m)=>f-m));const c=this.overlays.getIterator();for(;c.hasNext();){const f=c.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>s){let m=i.get(f.largestBatchId);m===null&&(m=yn(),i=i.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const l=yn(),h=i.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,m)=>l.set(f,m))),!(l.size()>=r)););return k.resolve(l)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const c=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new _w(t,s));let i=this.qr.get(t);i===void 0&&(i=te(),this.qr.set(t,i)),this.qr.set(t,i.add(s.key))}}/**
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
 */class tb{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.Qr=new Ae(ke.$r),this.Ur=new Ae(ke.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new ke(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new ke(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new q(new de([])),s=new ke(t,e),r=new ke(t,e+1),i=[];return this.Ur.forEachInRange([s,r],(c=>{this.Gr(c),i.push(c.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new q(new de([])),s=new ke(t,e),r=new ke(t,e+1);let i=te();return this.Ur.forEachInRange([s,r],(c=>{i=i.add(c.key)})),i}containsKey(e){const t=new ke(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ke{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return q.comparator(e.key,t.key)||ee(e.Yr,t.Yr)}static Kr(e,t){return ee(e.Yr,t.Yr)||q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ae(ke.$r)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new yw(i,t,s,r);this.mutationQueue.push(c);for(const l of r)this.Zr=this.Zr.add(new ke(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(c)}lookupMutationBatch(e,t){return k.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ei(s),i=r<0?0:r;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?xa:this.tr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ke(t,0),r=new ke(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],(c=>{const l=this.Xr(c.Yr);i.push(l)})),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ae(ee);return t.forEach((r=>{const i=new ke(r,0),c=new ke(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,c],(l=>{s=s.add(l.Yr)}))})),k.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;q.isDocumentKey(i)||(i=i.child(""));const c=new ke(new q(i),0);let l=new Ae(ee);return this.Zr.forEachWhile((h=>{const f=h.key.path;return!!s.isPrefixOf(f)&&(f.length===r&&(l=l.add(h.Yr)),!0)}),c),k.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){oe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return k.forEach(t.mutations,(r=>{const i=new ke(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new ke(t,0),r=this.Zr.firstAfterOrEqual(s);return k.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.ri=e,this.docs=(function(){return new ge(q.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,c=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return k.resolve(s?s.document.mutableCopy():qe.newInvalidDocument(t))}getEntries(e,t){let s=Pt();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():qe.newInvalidDocument(r))})),k.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=Pt();const c=t.path,l=new q(c.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!c.isPrefixOf(f.path))break;f.path.length>c.length+1||C0(k0(m),s)<=0||(r.has(m.key)||ki(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,s,r){H(9500)}ii(e,t){return k.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new rb(this)}getSize(e){return k.resolve(this.size)}}class rb extends Yw{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),k.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.persistence=e,this.si=new Rn((t=>va(t)),Ea),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.oi=0,this._i=new Ra,this.targetCount=0,this.ai=ts.ur()}forEachTarget(e,t){return this.si.forEach(((s,r)=>t(r))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),k.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ts(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Pr(t),k.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.si.forEach(((c,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.si.delete(c),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),k.waitFor(i).next((()=>r))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return k.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),k.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((c=>{i.push(r.markPotentiallyOrphaned(e,c))})),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return k.resolve(s)}containsKey(e,t){return k.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ai(0),this.li=!1,this.li=!0,this.hi=new tb,this.referenceDelegate=e(this),this.Pi=new ib(this),this.indexManager=new $w,this.remoteDocumentCache=(function(r){return new sb(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new Bw(t),this.Ii=new Zw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new nb(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){F("MemoryPersistence","Starting transaction:",e);const r=new ob(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,t){return k.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class ob extends j0{constructor(e){super(),this.currentSequenceNumber=e}}class ka{constructor(e){this.persistence=e,this.Ri=new Ra,this.Vi=null}static mi(e){return new ka(e)}get fi(){if(this.Vi)return this.Vi;throw H(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),k.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.fi,(s=>{const r=q.fromPath(s);return this.gi(e,r).next((i=>{i||t.removeEntry(r,G.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return k.or([()=>k.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class li{constructor(e,t){this.persistence=e,this.pi=new Rn((s=>O0(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Qw(this,t)}static mi(e,t){return new li(e,t)}Ei(){}di(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return k.forEach(this.pi,((s,r)=>this.br(e,s,r).next((i=>i?k.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(c=>this.br(e,c,t).next((l=>{l||(s++,i.removeEntry(c,G.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),k.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),k.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Lr(e.data.value)),t}br(e,t,s){return k.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.pi.get(t);return k.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=r}static As(e,t){let s=te(),r=te();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ca(e,t.fromCache,s,r)}}/**
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
 */class ab{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cb{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Mg()?8:D0($e())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.ys(e,t).next((c=>{i.result=c})).next((()=>{if(!i.result)return this.ws(e,t,r,s).next((c=>{i.result=c}))})).next((()=>{if(i.result)return;const c=new ab;return this.Ss(e,t,c).next((l=>{if(i.result=l,this.Vs)return this.bs(e,t,c,l.size)}))})).next((()=>i.result))}bs(e,t,s,r){return s.documentReadCount<this.fs?(On()<=Z.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),k.resolve()):(On()<=Z.DEBUG&&F("QueryEngine","Query:",Mn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(On()<=Z.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xt(t))):k.resolve())}ys(e,t){if(iu(t))return k.resolve(null);let s=xt(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=Go(t,null,"F"),s=xt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const c=te(...i);return this.ps.getDocuments(e,c).next((l=>this.indexManager.getMinOffset(e,s).next((h=>{const f=this.Ds(t,l);return this.Cs(t,f,c,h.readTime)?this.ys(e,Go(t,null,"F")):this.vs(e,f,t,h)}))))})))))}ws(e,t,s,r){return iu(t)||r.isEqual(G.min())?k.resolve(null):this.ps.getDocuments(e,s).next((i=>{const c=this.Ds(t,i);return this.Cs(t,c,s,r)?k.resolve(null):(On()<=Z.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Mn(t)),this.vs(e,c,t,R0(r,Qs)).next((l=>l)))}))}Ds(e,t){let s=new Ae(Ud(e));return t.forEach(((r,i)=>{ki(e,i)&&(s=s.add(i))})),s}Cs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,s){return On()<=Z.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Mn(t)),this.ps.getDocumentsMatchingQuery(e,t,Xt.min(),s)}vs(e,t,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((c=>{i=i.insert(c.key,c)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="LocalStore",lb=3e8;class ub{constructor(e,t,s,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new ge(ee),this.xs=new Rn((i=>va(i)),Ea),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xw(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function hb(n,e,t,s){return new ub(n,e,t,s)}async function hf(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const c=[],l=[];let h=te();for(const f of r){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of i){l.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(s,h).next((f=>({Ls:f,removedBatchIds:c,addedBatchIds:l})))}))}))}function db(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,h,f,m){const y=f.batch,w=y.keys();let T=k.resolve();return w.forEach((C=>{T=T.next((()=>m.getEntry(h,C))).next((j=>{const P=f.docVersions.get(C);oe(P!==null,48541),j.version.compareTo(P)<0&&(y.applyToRemoteDocument(j,f),j.isValidDocument()&&(j.setReadTime(f.commitVersion),m.addEntry(j)))}))})),T.next((()=>l.mutationQueue.removeMutationBatch(h,y)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let h=te();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function df(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function fb(n,e){const t=K(n),s=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});r=t.Ms;const l=[];e.targetChanges.forEach(((m,y)=>{const w=r.get(y);if(!w)return;l.push(t.Pi.removeMatchingKeys(i,m.removedDocuments,y).next((()=>t.Pi.addMatchingKeys(i,m.addedDocuments,y))));let T=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?T=T.withResumeToken(Oe.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):m.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(m.resumeToken,s)),r=r.insert(y,T),(function(j,P,M){return j.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=lb?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0})(w,T,m)&&l.push(t.Pi.updateTargetData(i,T))}));let h=Pt(),f=te();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),l.push(mb(i,c,e.documentUpdates).next((m=>{h=m.ks,f=m.qs}))),!s.isEqual(G.min())){const m=t.Pi.getLastRemoteSnapshotVersion(i).next((y=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(m)}return k.waitFor(l).next((()=>c.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,h,f))).next((()=>h))})).then((i=>(t.Ms=r,i)))}function mb(n,e,t){let s=te(),r=te();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let c=Pt();return t.forEach(((l,h)=>{const f=i.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(r=r.add(l)),h.isNoDocument()&&h.version.isEqual(G.min())?(e.removeEntry(l,h.readTime),c=c.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(h),c=c.insert(l,h)):F(Pa,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)})),{ks:c,qs:r}}))}function pb(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=xa),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function gb(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.Pi.getTargetData(s,e).next((i=>i?(r=i,k.resolve(r)):t.Pi.allocateTargetId(s).next((c=>(r=new Wt(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Xo(n,e,t){const s=K(n),r=s.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(c=>s.persistence.referenceDelegate.removeTarget(c,r)))}catch(c){if(!ls(c))throw c;F(Pa,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function _u(n,e,t){const s=K(n);let r=G.min(),i=te();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(h,f,m){const y=K(h),w=y.xs.get(m);return w!==void 0?k.resolve(y.Ms.get(w)):y.Pi.getTargetData(f,m)})(s,c,xt(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(c,l.targetId).next((h=>{i=h}))})).next((()=>s.Fs.getDocumentsMatchingQuery(c,e,t?r:G.min(),t?i:te()))).next((l=>(yb(s,tw(e),l),{documents:l,Qs:i})))))}function yb(n,e,t){let s=n.Os.get(e)||G.min();t.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),n.Os.set(e,s)}class xu{constructor(){this.activeTargetIds=aw()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _b{constructor(){this.Mo=new xu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new xu,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xb{Oo(e){}shutdown(){}}/**
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
 */const wu="ConnectivityMonitor";class bu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){F(wu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){F(wu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pr=null;function Zo(){return Pr===null?Pr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Pr++,"0x"+Pr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="RestConnection",wb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===ri?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,t,s,r,i){const c=Zo(),l=this.zo(e,t.toUriEncodedString());F(bo,`Sending RPC '${e}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,r,i);const{host:f}=new URL(l),m=ss(f);return this.Jo(e,l,h,s,m).then((y=>(F(bo,`Received RPC '${e}' ${c}: `,y),y)),(y=>{throw Jn(bo,`RPC '${e}' ${c} failed with error: `,y,"url: ",l,"request:",s),y}))}Ho(e,t,s,r,i,c){return this.Go(e,t,s,r,i)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+as})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}zo(e,t){const s=wb[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="WebChannelConnection";class Eb extends bb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,r,i){const c=Zo();return new Promise(((l,h)=>{const f=new fd;f.setWithCredentials(!0),f.listenOnce(md.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case Mr.NO_ERROR:const y=f.getResponseJson();F(Ue,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(y)),l(y);break;case Mr.TIMEOUT:F(Ue,`RPC '${e}' ${c} timed out`),h(new L(S.DEADLINE_EXCEEDED,"Request time out"));break;case Mr.HTTP_ERROR:const w=f.getStatus();if(F(Ue,`RPC '${e}' ${c} failed with status:`,w,"response text:",f.getResponseText()),w>0){let T=f.getResponseJson();Array.isArray(T)&&(T=T[0]);const C=T==null?void 0:T.error;if(C&&C.status&&C.message){const j=(function(M){const D=M.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(D)>=0?D:S.UNKNOWN})(C.status);h(new L(j,C.message))}else h(new L(S.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new L(S.UNAVAILABLE,"Connection failed."));break;default:H(9055,{l_:e,streamId:c,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{F(Ue,`RPC '${e}' ${c} completed.`)}}));const m=JSON.stringify(r);F(Ue,`RPC '${e}' ${c} sending request:`,r),f.send(t,"POST",m,s,15)}))}T_(e,t,s){const r=Zo(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=yd(),l=gd(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,s),h.encodeInitMessageHeaders=!0;const m=i.join("");F(Ue,`Creating RPC '${e}' stream ${r}: ${m}`,h);const y=c.createWebChannel(m,h);this.I_(y);let w=!1,T=!1;const C=new vb({Yo:P=>{T?F(Ue,`Not sending because RPC '${e}' stream ${r} is closed:`,P):(w||(F(Ue,`Opening RPC '${e}' stream ${r} transport.`),y.open(),w=!0),F(Ue,`RPC '${e}' stream ${r} sending:`,P),y.send(P))},Zo:()=>y.close()}),j=(P,M,D)=>{P.listen(M,(U=>{try{D(U)}catch(Y){setTimeout((()=>{throw Y}),0)}}))};return j(y,Vs.EventType.OPEN,(()=>{T||(F(Ue,`RPC '${e}' stream ${r} transport opened.`),C.o_())})),j(y,Vs.EventType.CLOSE,(()=>{T||(T=!0,F(Ue,`RPC '${e}' stream ${r} transport closed`),C.a_(),this.E_(y))})),j(y,Vs.EventType.ERROR,(P=>{T||(T=!0,Jn(Ue,`RPC '${e}' stream ${r} transport errored. Name:`,P.name,"Message:",P.message),C.a_(new L(S.UNAVAILABLE,"The operation could not be completed")))})),j(y,Vs.EventType.MESSAGE,(P=>{var M;if(!T){const D=P.data[0];oe(!!D,16349);const U=D,Y=(U==null?void 0:U.error)||((M=U[0])==null?void 0:M.error);if(Y){F(Ue,`RPC '${e}' stream ${r} received error:`,Y);const ue=Y.status;let se=(function(g){const b=be[g];if(b!==void 0)return Xd(b)})(ue),E=Y.message;se===void 0&&(se=S.INTERNAL,E="Unknown error status: "+ue+" with message "+Y.message),T=!0,C.a_(new L(se,E)),y.close()}else F(Ue,`RPC '${e}' stream ${r} received:`,D),C.u_(D)}})),j(l,pd.STAT_EVENT,(P=>{P.stat===Uo.PROXY?F(Ue,`RPC '${e}' stream ${r} detected buffering proxy`):P.stat===Uo.NOPROXY&&F(Ue,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function vo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(n){return new Nw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="PersistentStream";class mf{constructor(e,t,s,r,i,c,l,h){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ff(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(Ct(t.toString()),Ct("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new L(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return F(vu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(F(vu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ib extends mf{constructor(e,t,s,r,i,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,c),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=kw(this.serializer,e),s=(function(i){if(!("targetChange"in i))return G.min();const c=i.targetChange;return c.targetIds&&c.targetIds.length?G.min():c.readTime?wt(c.readTime):G.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Jo(this.serializer),t.addTarget=(function(i,c){let l;const h=c.target;if(l=Ho(h)?{documents:jw(i,h)}:{query:Dw(i,h).ft},l.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){l.resumeToken=tf(i,c.resumeToken);const f=Ko(i,c.expectedCount);f!==null&&(l.expectedCount=f)}else if(c.snapshotVersion.compareTo(G.min())>0){l.readTime=ci(i,c.snapshotVersion.toTimestamp());const f=Ko(i,c.expectedCount);f!==null&&(l.expectedCount=f)}return l})(this.serializer,e);const s=Ow(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Jo(this.serializer),t.removeTarget=e,this.q_(t)}}class Tb extends mf{constructor(e,t,s,r,i,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,c),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Pw(e.writeResults,e.commitTime),s=wt(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Jo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Cw(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{}class Nb extends Ab{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new L(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,c])=>this.connection.Go(e,Qo(t,s),r,i,c))).catch((i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(S.UNKNOWN,i.toString())}))}Ho(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,l])=>this.connection.Ho(e,Qo(t,s),r,c,l,i))).catch((c=>{throw c.name==="FirebaseError"?(c.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new L(S.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Sb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ct(t),this.aa=!1):F("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="RemoteStore";class Rb{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((c=>{s.enqueueAndForget((async()=>{Cn(this)&&(F(En,"Restarting streams for network reachability change."),await(async function(h){const f=K(h);f.Ea.add(4),await ur(f),f.Ra.set("Unknown"),f.Ea.delete(4),await Oi(f)})(this))}))})),this.Ra=new Sb(s,r)}}async function Oi(n){if(Cn(n))for(const e of n.da)await e(!0)}async function ur(n){for(const e of n.da)await e(!1)}function pf(n,e){const t=K(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Oa(t)?Va(t):hs(t).O_()&&Da(t,e))}function ja(n,e){const t=K(n),s=hs(t);t.Ia.delete(e),s.O_()&&gf(t,e),t.Ia.size===0&&(s.O_()?s.L_():Cn(t)&&t.Ra.set("Unknown"))}function Da(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hs(n).Y_(e)}function gf(n,e){n.Va.Ue(e),hs(n).Z_(e)}function Va(n){n.Va=new Ew({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),hs(n).start(),n.Ra.ua()}function Oa(n){return Cn(n)&&!hs(n).x_()&&n.Ia.size>0}function Cn(n){return K(n).Ea.size===0}function yf(n){n.Va=void 0}async function kb(n){n.Ra.set("Online")}async function Cb(n){n.Ia.forEach(((e,t)=>{Da(n,e)}))}async function Pb(n,e){yf(n),Oa(n)?(n.Ra.ha(e),Va(n)):n.Ra.set("Unknown")}async function jb(n,e,t){if(n.Ra.set("Online"),e instanceof ef&&e.state===2&&e.cause)try{await(async function(r,i){const c=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,c),r.Ia.delete(l),r.Va.removeTarget(l))})(n,e)}catch(s){F(En,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ui(n,s)}else if(e instanceof Br?n.Va.Ze(e):e instanceof Zd?n.Va.st(e):n.Va.tt(e),!t.isEqual(G.min()))try{const s=await df(n.localStore);t.compareTo(s)>=0&&await(function(i,c){const l=i.Va.Tt(c);return l.targetChanges.forEach(((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=i.Ia.get(f);m&&i.Ia.set(f,m.withResumeToken(h.resumeToken,c))}})),l.targetMismatches.forEach(((h,f)=>{const m=i.Ia.get(h);if(!m)return;i.Ia.set(h,m.withResumeToken(Oe.EMPTY_BYTE_STRING,m.snapshotVersion)),gf(i,h);const y=new Wt(m.target,h,f,m.sequenceNumber);Da(i,y)})),i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(s){F(En,"Failed to raise snapshot:",s),await ui(n,s)}}async function ui(n,e,t){if(!ls(e))throw e;n.Ea.add(1),await ur(n),n.Ra.set("Offline"),t||(t=()=>df(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{F(En,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Oi(n)}))}function _f(n,e){return e().catch((t=>ui(n,t,e)))}async function Mi(n){const e=K(n),t=nn(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:xa;for(;Db(e);)try{const r=await pb(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,Vb(e,r)}catch(r){await ui(e,r)}xf(e)&&wf(e)}function Db(n){return Cn(n)&&n.Ta.length<10}function Vb(n,e){n.Ta.push(e);const t=nn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function xf(n){return Cn(n)&&!nn(n).x_()&&n.Ta.length>0}function wf(n){nn(n).start()}async function Ob(n){nn(n).ra()}async function Mb(n){const e=nn(n);for(const t of n.Ta)e.ea(t.mutations)}async function Lb(n,e,t){const s=n.Ta.shift(),r=Aa.from(s,e,t);await _f(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await Mi(n)}async function Fb(n,e){e&&nn(n).X_&&await(async function(s,r){if((function(c){return ww(c)&&c!==S.ABORTED})(r.code)){const i=s.Ta.shift();nn(s).B_(),await _f(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Mi(s)}})(n,e),xf(n)&&wf(n)}async function Eu(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),F(En,"RemoteStore received new credentials");const s=Cn(t);t.Ea.add(3),await ur(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Oi(t)}async function Ub(n,e){const t=K(n);e?(t.Ea.delete(2),await Oi(t)):e||(t.Ea.add(2),await ur(t),t.Ra.set("Unknown"))}function hs(n){return n.ma||(n.ma=(function(t,s,r){const i=K(t);return i.sa(),new Ib(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Xo:kb.bind(null,n),t_:Cb.bind(null,n),r_:Pb.bind(null,n),H_:jb.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Oa(n)?Va(n):n.Ra.set("Unknown")):(await n.ma.stop(),yf(n))}))),n.ma}function nn(n){return n.fa||(n.fa=(function(t,s,r){const i=K(t);return i.sa(),new Tb(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Ob.bind(null,n),r_:Fb.bind(null,n),ta:Mb.bind(null,n),na:Lb.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Mi(n)):(await n.fa.stop(),n.Ta.length>0&&(F(En,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const c=Date.now()+s,l=new Ma(e,t,c,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function La(n,e){if(Ct("AsyncQueue",`${e}: ${n}`),ls(n))return new L(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{static emptySet(e){return new Hn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||q.comparator(t.key,s.key):(t,s)=>q.comparator(t.key,s.key),this.keyedMap=Os(),this.sortedSet=new ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Hn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Hn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(){this.ga=new ge(q.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):H(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class ns{constructor(e,t,s,r,i,c,l,h,f){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=c,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(e,t,s,r,i){const c=[];return t.forEach((l=>{c.push({type:0,doc:l})})),new ns(e,t,Hn.emptySet(t),c,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ri(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class qb{constructor(){this.queries=Tu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=K(t),i=r.queries;r.queries=Tu(),i.forEach(((c,l)=>{for(const h of l.Sa)h.onError(s)}))})(this,new L(S.ABORTED,"Firestore shutting down"))}}function Tu(){return new Rn((n=>Fd(n)),Ri)}async function bf(n,e){const t=K(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new Bb,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(c){const l=La(c,`Initialization of query '${Mn(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Fa(t)}async function vf(n,e){const t=K(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const c=i.Sa.indexOf(e);c>=0&&(i.Sa.splice(c,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function $b(n,e){const t=K(n);let s=!1;for(const r of e){const i=r.query,c=t.queries.get(i);if(c){for(const l of c.Sa)l.Fa(r)&&(s=!0);c.wa=r}}s&&Fa(t)}function Wb(n,e,t){const s=K(n),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(t);s.queries.delete(e)}function Fa(n){n.Ca.forEach((e=>{e.next()}))}var ea,Au;(Au=ea||(ea={})).Ma="default",Au.Cache="cache";class Ef{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ns(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ea.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this.key=e}}class Tf{constructor(e){this.key=e}}class Hb{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=te(),this.mutatedKeys=te(),this.eu=Ud(e),this.tu=new Hn(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Iu,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,c=r,l=!1;const h=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,f=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((m,y)=>{const w=r.get(m),T=ki(this.query,y)?y:null,C=!!w&&this.mutatedKeys.has(w.key),j=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let P=!1;w&&T?w.data.isEqual(T.data)?C!==j&&(s.track({type:3,doc:T}),P=!0):this.su(w,T)||(s.track({type:2,doc:T}),P=!0,(h&&this.eu(T,h)>0||f&&this.eu(T,f)<0)&&(l=!0)):!w&&T?(s.track({type:0,doc:T}),P=!0):w&&!T&&(s.track({type:1,doc:w}),P=!0,(h||f)&&(l=!0)),P&&(T?(c=c.add(T),i=j?i.add(m):i.delete(m)):(c=c.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const m=this.query.limitType==="F"?c.last():c.first();c=c.delete(m.key),i=i.delete(m.key),s.track({type:1,doc:m})}return{tu:c,iu:s,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((m,y)=>(function(T,C){const j=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H(20277,{Rt:P})}};return j(T)-j(C)})(m.type,y.type)||this.eu(m.doc,y.doc))),this.ou(s),r=r??!1;const l=t&&!r?this._u():[],h=this.Xa.size===0&&this.current&&!r?1:0,f=h!==this.Za;return this.Za=h,c.length!==0||f?{snapshot:new ns(this.query,e.tu,i,c,e.mutatedKeys,h===0,f,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Iu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=te(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new Tf(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new If(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=te();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ns.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ua="SyncEngine";class zb{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Gb{constructor(e){this.key=e,this.hu=!1}}class Kb{constructor(e,t,s,r,i,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Rn((l=>Fd(l)),Ri),this.Iu=new Map,this.Eu=new Set,this.du=new ge(q.comparator),this.Au=new Map,this.Ru=new Ra,this.Vu={},this.mu=new Map,this.fu=ts.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Qb(n,e,t=!0){const s=Cf(n);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Af(s,e,t,!0),r}async function Yb(n,e){const t=Cf(n);await Af(t,e,!0,!1)}async function Af(n,e,t,s){const r=await gb(n.localStore,xt(e)),i=r.targetId,c=n.sharedClientState.addLocalQueryTarget(i,t);let l;return s&&(l=await Jb(n,e,i,c==="current",r.resumeToken)),n.isPrimaryClient&&t&&pf(n.remoteStore,r),l}async function Jb(n,e,t,s,r){n.pu=(y,w,T)=>(async function(j,P,M,D){let U=P.view.ru(M);U.Cs&&(U=await _u(j.localStore,P.query,!1).then((({documents:E})=>P.view.ru(E,U))));const Y=D&&D.targetChanges.get(P.targetId),ue=D&&D.targetMismatches.get(P.targetId)!=null,se=P.view.applyChanges(U,j.isPrimaryClient,Y,ue);return Su(j,P.targetId,se.au),se.snapshot})(n,y,w,T);const i=await _u(n.localStore,e,!0),c=new Hb(e,i.Qs),l=c.ru(i.documents),h=lr.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),f=c.applyChanges(l,n.isPrimaryClient,h);Su(n,t,f.au);const m=new zb(e,t,c);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),f.snapshot}async function Xb(n,e,t){const s=K(n),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter((c=>!Ri(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Xo(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&ja(s.remoteStore,r.targetId),ta(s,r.targetId)})).catch(cs)):(ta(s,r.targetId),await Xo(s.localStore,r.targetId,!0))}async function Zb(n,e){const t=K(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),ja(t.remoteStore,s.targetId))}async function ev(n,e,t){const s=av(n);try{const r=await(function(c,l){const h=K(c),f=me.now(),m=l.reduce(((T,C)=>T.add(C.key)),te());let y,w;return h.persistence.runTransaction("Locally write mutations","readwrite",(T=>{let C=Pt(),j=te();return h.Ns.getEntries(T,m).next((P=>{C=P,C.forEach(((M,D)=>{D.isValidDocument()||(j=j.add(M))}))})).next((()=>h.localDocuments.getOverlayedDocuments(T,C))).next((P=>{y=P;const M=[];for(const D of l){const U=pw(D,y.get(D.key).overlayedDocument);U!=null&&M.push(new kn(D.key,U,Cd(U.value.mapValue),St.exists(!0)))}return h.mutationQueue.addMutationBatch(T,f,M,l)})).next((P=>{w=P;const M=P.applyToLocalDocumentSet(y,j);return h.documentOverlayCache.saveOverlays(T,P.batchId,M)}))})).then((()=>({batchId:w.batchId,changes:qd(y)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(c,l,h){let f=c.Vu[c.currentUser.toKey()];f||(f=new ge(ee)),f=f.insert(l,h),c.Vu[c.currentUser.toKey()]=f})(s,r.batchId,t),await hr(s,r.changes),await Mi(s.remoteStore)}catch(r){const i=La(r,"Failed to persist write");t.reject(i)}}async function Nf(n,e){const t=K(n);try{const s=await fb(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const c=t.Au.get(i);c&&(oe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?c.hu=!0:r.modifiedDocuments.size>0?oe(c.hu,14607):r.removedDocuments.size>0&&(oe(c.hu,42227),c.hu=!1))})),await hr(t,s,e)}catch(s){await cs(s)}}function Nu(n,e,t){const s=K(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((i,c)=>{const l=c.view.va(e);l.snapshot&&r.push(l.snapshot)})),(function(c,l){const h=K(c);h.onlineState=l;let f=!1;h.queries.forEach(((m,y)=>{for(const w of y.Sa)w.va(l)&&(f=!0)})),f&&Fa(h)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function tv(n,e,t){const s=K(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),i=r&&r.key;if(i){let c=new ge(q.comparator);c=c.insert(i,qe.newNoDocument(i,G.min()));const l=te().add(i),h=new Di(G.min(),new Map,new ge(ee),c,l);await Nf(s,h),s.du=s.du.remove(i),s.Au.delete(e),Ba(s)}else await Xo(s.localStore,e,!1).then((()=>ta(s,e,t))).catch(cs)}async function nv(n,e){const t=K(n),s=e.batch.batchId;try{const r=await db(t.localStore,e);Rf(t,s,null),Sf(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await hr(t,r)}catch(r){await cs(r)}}async function sv(n,e,t){const s=K(n);try{const r=await(function(c,l){const h=K(c);return h.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let m;return h.mutationQueue.lookupMutationBatch(f,l).next((y=>(oe(y!==null,37113),m=y.keys(),h.mutationQueue.removeMutationBatch(f,y)))).next((()=>h.mutationQueue.performConsistencyCheck(f))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m))).next((()=>h.localDocuments.getDocuments(f,m)))}))})(s.localStore,e);Rf(s,e,t),Sf(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await hr(s,r)}catch(r){await cs(r)}}function Sf(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Rf(n,e,t){const s=K(n);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function ta(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||kf(n,s)}))}function kf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ja(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Ba(n))}function Su(n,e,t){for(const s of t)s instanceof If?(n.Ru.addReference(s.key,e),rv(n,s)):s instanceof Tf?(F(Ua,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||kf(n,s.key)):H(19791,{wu:s})}function rv(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(F(Ua,"New document in limbo: "+t),n.Eu.add(s),Ba(n))}function Ba(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new q(de.fromString(e)),s=n.fu.next();n.Au.set(s,new Gb(t)),n.du=n.du.insert(t,s),pf(n.remoteStore,new Wt(xt(Ia(t.path)),s,"TargetPurposeLimboResolution",Ai.ce))}}async function hr(n,e,t){const s=K(n),r=[],i=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,h)=>{c.push(s.pu(h,e,t).then((f=>{var m;if((f||t)&&s.isPrimaryClient){const y=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(f){r.push(f);const y=Ca.As(h.targetId,f);i.push(y)}})))})),await Promise.all(c),s.Pu.H_(r),await(async function(h,f){const m=K(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>k.forEach(f,(w=>k.forEach(w.Es,(T=>m.persistence.referenceDelegate.addReference(y,w.targetId,T))).next((()=>k.forEach(w.ds,(T=>m.persistence.referenceDelegate.removeReference(y,w.targetId,T)))))))))}catch(y){if(!ls(y))throw y;F(Pa,"Failed to update sequence numbers: "+y)}for(const y of f){const w=y.targetId;if(!y.fromCache){const T=m.Ms.get(w),C=T.snapshotVersion,j=T.withLastLimboFreeSnapshotVersion(C);m.Ms=m.Ms.insert(w,j)}}})(s.localStore,i))}async function iv(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){F(Ua,"User change. New user:",e.toKey());const s=await hf(t.localStore,e);t.currentUser=e,(function(i,c){i.mu.forEach((l=>{l.forEach((h=>{h.reject(new L(S.CANCELLED,c))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await hr(t,s.Ls)}}function ov(n,e){const t=K(n),s=t.Au.get(e);if(s&&s.hu)return te().add(s.key);{let r=te();const i=t.Iu.get(e);if(!i)return r;for(const c of i){const l=t.Tu.get(c);r=r.unionWith(l.view.nu)}return r}}function Cf(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ov.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tv.bind(null,e),e.Pu.H_=$b.bind(null,e.eventManager),e.Pu.yu=Wb.bind(null,e.eventManager),e}function av(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sv.bind(null,e),e}class hi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return hb(this.persistence,new cb,e.initialUser,this.serializer)}Cu(e){return new uf(ka.mi,this.serializer)}Du(e){return new _b}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hi.provider={build:()=>new hi};class cv extends hi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){oe(this.persistence.referenceDelegate instanceof li,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Gw(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ke.withCacheSize(this.cacheSizeBytes):Ke.DEFAULT;return new uf((s=>li.mi(s,t)),this.serializer)}}class na{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Nu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=iv.bind(null,this.syncEngine),await Ub(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new qb})()}createDatastore(e){const t=Vi(e.databaseInfo.databaseId),s=(function(i){return new Eb(i)})(e.databaseInfo);return(function(i,c,l,h){return new Nb(i,c,l,h)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,c,l){return new Rb(s,r,i,c,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Nu(this.syncEngine,t,0)),(function(){return bu.v()?new bu:new xb})())}createSyncEngine(e,t){return(function(r,i,c,l,h,f,m){const y=new Kb(r,i,c,l,h,f);return m&&(y.gu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=K(r);F(En,"RemoteStore shutting down."),i.Ea.add(5),await ur(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}na.provider={build:()=>new na};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ct("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="FirestoreClient";class lv{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Be.UNAUTHENTICATED,this.clientId=_a.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async c=>{F(sn,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(F(sn,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=La(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Eo(n,e){n.asyncQueue.verifyOperationInProgress(),F(sn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await hf(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Ru(n,e){n.asyncQueue.verifyOperationInProgress();const t=await uv(n);F(sn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Eu(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>Eu(e.remoteStore,r))),n._onlineComponents=e}async function uv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F(sn,"Using user provided OfflineComponentProvider");try{await Eo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===S.FAILED_PRECONDITION||r.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Jn("Error using user provided cache. Falling back to memory cache: "+t),await Eo(n,new hi)}}else F(sn,"Using default OfflineComponentProvider"),await Eo(n,new cv(void 0));return n._offlineComponents}async function jf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F(sn,"Using user provided OnlineComponentProvider"),await Ru(n,n._uninitializedComponentsProvider._online)):(F(sn,"Using default OnlineComponentProvider"),await Ru(n,new na))),n._onlineComponents}function hv(n){return jf(n).then((e=>e.syncEngine))}async function Df(n){const e=await jf(n),t=e.eventManager;return t.onListen=Qb.bind(null,e.syncEngine),t.onUnlisten=Xb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Yb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Zb.bind(null,e.syncEngine),t}function dv(n,e,t={}){const s=new Nt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,c,l,h,f){const m=new Pf({next:w=>{m.Nu(),c.enqueueAndForget((()=>vf(i,y)));const T=w.docs.has(l);!T&&w.fromCache?f.reject(new L(S.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&w.fromCache&&h&&h.source==="server"?f.reject(new L(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),y=new Ef(Ia(l.path),m,{includeMetadataChanges:!0,qa:!0});return bf(i,y)})(await Df(n),n.asyncQueue,e,t,s))),s.promise}function fv(n,e,t={}){const s=new Nt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,c,l,h,f){const m=new Pf({next:w=>{m.Nu(),c.enqueueAndForget((()=>vf(i,y))),w.fromCache&&h.source==="server"?f.reject(new L(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),y=new Ef(l,m,{includeMetadataChanges:!0,qa:!0});return bf(i,y)})(await Df(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function Vf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="firestore.googleapis.com",Cu=!0;class Pu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new L(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Of,this.ssl=Cu}else this.host=e.host,this.ssl=e.ssl??Cu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Hw)throw new L(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}S0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vf(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Li{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new _0;switch(s.type){case"firstParty":return new v0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new L(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=ku.get(t);s&&(F("ComponentProvider","Removing Datastore"),ku.delete(t),s.terminate())})(this),Promise.resolve()}}function mv(n,e,t,s={}){var f;n=vn(n,Li);const r=ss(e),i=n._getSettings(),c={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&(vh(`https://${l}`),Eh("Firestore",!0)),i.host!==Of&&i.host!==l&&Jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...i,host:l,ssl:r,emulatorOptions:s};if(!Jt(h,c)&&(n._setSettings(h),s.mockUserToken)){let m,y;if(typeof s.mockUserToken=="string")m=s.mockUserToken,y=Be.MOCK_USER;else{m=Rg(s.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new L(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Be(w)}n._authCredentials=new x0(new xd(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Pn(this.firestore,e,this._query)}}class Ie{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ie(this.firestore,e,this._key)}toJSON(){return{type:Ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(cr(t,Ie._jsonSchema))return new Ie(e,s||null,new q(de.fromString(t.referencePath)))}}Ie._jsonSchemaVersion="firestore/documentReference/1.0",Ie._jsonSchema={type:Ee("string",Ie._jsonSchemaVersion),referencePath:Ee("string")};class Yt extends Pn{constructor(e,t,s){super(e,t,Ia(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ie(this.firestore,null,new q(e))}withConverter(e){return new Yt(this.firestore,e,this._path)}}function sr(n,e,...t){if(n=we(n),wd("collection","path",e),n instanceof Li){const s=de.fromString(e,...t);return Hl(s),new Yt(n,null,s)}{if(!(n instanceof Ie||n instanceof Yt))throw new L(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(de.fromString(e,...t));return Hl(s),new Yt(n.firestore,null,s)}}function Ce(n,e,...t){if(n=we(n),arguments.length===1&&(e=_a.newId()),wd("doc","path",e),n instanceof Li){const s=de.fromString(e,...t);return Wl(s),new Ie(n,null,new q(s))}{if(!(n instanceof Ie||n instanceof Yt))throw new L(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(de.fromString(e,...t));return Wl(s),new Ie(n.firestore,n instanceof Yt?n.converter:null,new q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="AsyncQueue";class Du{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ff(this,"async_queue_retry"),this._c=()=>{const s=vo();s&&F(ju,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=vo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=vo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Nt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ls(e))throw e;F(ju,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Ct("INTERNAL UNHANDLED ERROR: ",Vu(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Ma.createAndSchedule(this,e,t,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&H(47125,{Pc:Vu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Vu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Fi extends Li{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Du,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Du(e),this._firestoreClient=void 0,await e}}}function pv(n,e){const t=typeof n=="object"?n:ca(),s=typeof n=="string"?n:ri,r=Nn(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Ng("firestore");i&&mv(r,...i)}return r}function qa(n){if(n._terminated)throw new L(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||gv(n),n._firestoreClient}function gv(n){var s,r,i;const e=n._freezeSettings(),t=(function(l,h,f,m){return new F0(l,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Vf(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new lv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nt(Oe.fromBase64String(e))}catch(t){throw new L(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new nt(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cr(e,nt._jsonSchema))return nt.fromBase64String(e.bytes)}}nt._jsonSchemaVersion="firestore/bytes/1.0",nt._jsonSchema={type:Ee("string",nt._jsonSchemaVersion),bytes:Ee("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bt._jsonSchemaVersion}}static fromJSON(e){if(cr(e,bt._jsonSchema))return new bt(e.latitude,e.longitude)}}bt._jsonSchemaVersion="firestore/geoPoint/1.0",bt._jsonSchema={type:Ee("string",bt._jsonSchemaVersion),latitude:Ee("number"),longitude:Ee("number")};/**
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
 */class vt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:vt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(cr(e,vt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new vt(e.vectorValues);throw new L(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vt._jsonSchemaVersion="firestore/vectorValue/1.0",vt._jsonSchema={type:Ee("string",vt._jsonSchemaVersion),vectorValues:Ee("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=/^__.*__$/;class Mf{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new kn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Lf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H(40011,{Ac:n})}}class $a{constructor(e,t,s,r,i,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new $a({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return di(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Lf(this.Ac)&&yv.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class _v{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Vi(e)}Cc(e,t,s,r=!1){return new $a({Ac:e,methodName:t,Dc:s,path:De.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ff(n){const e=n._freezeSettings(),t=Vi(n._databaseId);return new _v(n._databaseId,!!e.ignoreUndefinedProperties,t)}class qi extends Bi{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qi}}class Wa extends Bi{_toFieldTransform(e){return new hw(e.path,new er)}isEqual(e){return e instanceof Wa}}function xv(n,e,t,s){const r=n.Cc(1,e,t);Bf("Data must be an object, but it was:",r,s);const i=[],c=Xe.empty();cn(s,((h,f)=>{const m=Ha(e,h,t);f=we(f);const y=r.yc(m);if(f instanceof qi)i.push(m);else{const w=dr(f,y);w!=null&&(i.push(m),c.set(m,w))}}));const l=new ct(i);return new Mf(c,l,r.fieldTransforms)}function wv(n,e,t,s,r,i){const c=n.Cc(1,e,t),l=[Ou(e,s,t)],h=[r];if(i.length%2!=0)throw new L(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)l.push(Ou(e,i[w])),h.push(i[w+1]);const f=[],m=Xe.empty();for(let w=l.length-1;w>=0;--w)if(!Iv(f,l[w])){const T=l[w];let C=h[w];C=we(C);const j=c.yc(T);if(C instanceof qi)f.push(T);else{const P=dr(C,j);P!=null&&(f.push(T),m.set(T,P))}}const y=new ct(f);return new Mf(m,y,c.fieldTransforms)}function bv(n,e,t,s=!1){return dr(t,n.Cc(s?4:3,e))}function dr(n,e){if(Uf(n=we(n)))return Bf("Unsupported field value:",e,n),vv(n,e);if(n instanceof Bi)return(function(s,r){if(!Lf(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const i=[];let c=0;for(const l of s){let h=dr(l,r.wc(c));h==null&&(h={nullValue:"NULL_VALUE"}),i.push(h),c++}return{arrayValue:{values:i}}})(n,e)}return(function(s,r){if((s=we(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return cw(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=me.fromDate(s);return{timestampValue:ci(r.serializer,i)}}if(s instanceof me){const i=new me(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ci(r.serializer,i)}}if(s instanceof bt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof nt)return{bytesValue:tf(r.serializer,s._byteString)};if(s instanceof Ie){const i=r.databaseId,c=s.firestore._databaseId;if(!c.isEqual(i))throw r.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sa(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof vt)return(function(c,l){return{mapValue:{fields:{[Rd]:{stringValue:kd},[ii]:{arrayValue:{values:c.toArray().map((f=>{if(typeof f!="number")throw l.Sc("VectorValues must only contain numeric values.");return Ta(l.serializer,f)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${Ti(s)}`)})(n,e)}function vv(n,e){const t={};return Ed(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cn(n,((s,r)=>{const i=dr(r,e.mc(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function Uf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof me||n instanceof bt||n instanceof nt||n instanceof Ie||n instanceof Bi||n instanceof vt)}function Bf(n,e,t){if(!Uf(t)||!bd(t)){const s=Ti(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Ou(n,e,t){if((e=we(e))instanceof Ui)return e._internalPath;if(typeof e=="string")return Ha(n,e);throw di("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ev=new RegExp("[~\\*/\\[\\]]");function Ha(n,e,t){if(e.search(Ev)>=0)throw di(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ui(...e.split("."))._internalPath}catch{throw di(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function di(n,e,t,s,r){const i=s&&!s.isEmpty(),c=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(i||c)&&(h+=" (found",i&&(h+=` in field ${s}`),c&&(h+=` in document ${r}`),h+=")"),new L(S.INVALID_ARGUMENT,l+n+h)}function Iv(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Tv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($i("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Tv extends qf{data(){return super.data()}}function $i(n,e){return typeof e=="string"?Ha(n,e):e instanceof Ui?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class za{}class $f extends za{}function fi(n,e,...t){let s=[];e instanceof za&&s.push(e),s=s.concat(t),(function(i){const c=i.filter((h=>h instanceof Ga)).length,l=i.filter((h=>h instanceof Wi)).length;if(c>1||c>0&&l>0)throw new L(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class Wi extends $f{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Wi(e,t,s)}_apply(e){const t=this._parse(e);return Wf(e._query,t),new Pn(e.firestore,e.converter,zo(e._query,t))}_parse(e){const t=Ff(e.firestore);return(function(i,c,l,h,f,m,y){let w;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new L(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Lu(y,m);const C=[];for(const j of y)C.push(Mu(h,i,j));w={arrayValue:{values:C}}}else w=Mu(h,i,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Lu(y,m),w=bv(l,c,y,m==="in"||m==="not-in");return ve.create(f,m,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function mi(n,e,t){const s=e,r=$i("where",n);return Wi._create(r,s,t)}class Ga extends za{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ga(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:dt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let c=r;const l=i.getFlattenedFilters();for(const h of l)Wf(c,h),c=zo(c,h)})(e._query,t),new Pn(e.firestore,e.converter,zo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ka extends $f{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ka(e,t)}_apply(e){const t=(function(r,i,c){if(r.startAt!==null)throw new L(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new L(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Zs(i,c)})(e._query,this._field,this._direction);return new Pn(e.firestore,e.converter,(function(r,i){const c=r.explicitOrderBy.concat([i]);return new us(r.path,r.collectionGroup,c,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)})(e._query,t))}}function Nv(n,e="asc"){const t=e,s=$i("orderBy",n);return Ka._create(s,t)}function Mu(n,e,t){if(typeof(t=we(t))=="string"){if(t==="")throw new L(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ld(e)&&t.indexOf("/")!==-1)throw new L(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(de.fromString(t));if(!q.isDocumentKey(s))throw new L(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Zl(n,new q(s))}if(t instanceof Ie)return Zl(n,t._key);throw new L(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ti(t)}.`)}function Lu(n,e){if(!Array.isArray(n)||n.length===0)throw new L(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wf(n,e){const t=(function(r,i){for(const c of r)for(const l of c.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new L(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Sv{convertValue(e,t="none"){switch(tn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(en(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return cn(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[ii].arrayValue)==null?void 0:r.values)==null?void 0:i.map((c=>xe(c.doubleValue)));return new vt(t)}convertGeoPoint(e){return new bt(xe(e.latitude),xe(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Si(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ys(e));default:return null}}convertTimestamp(e){const t=Zt(e);return new me(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=de.fromString(e);oe(cf(s),9688,{name:e});const r=new Js(s.get(1),s.get(3)),i=new q(s.popFirst(5));return r.isEqual(t)||Ct(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}class Ls{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xn extends qf{constructor(e,t,s,r,i,c){super(e,t,s,r,c),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field($i("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=xn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}xn._jsonSchemaVersion="firestore/documentSnapshot/1.0",xn._jsonSchema={type:Ee("string",xn._jsonSchemaVersion),bundleSource:Ee("string","DocumentSnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class qr extends xn{data(e={}){return super.data(e)}}class zn{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ls(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new qr(this._firestore,this._userDataWriter,s.key,s,new Ls(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let c=0;return r._snapshot.docChanges.map((l=>{const h=new qr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Ls(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:c++}}))}{let c=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const h=new qr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Ls(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let f=-1,m=-1;return l.type!==0&&(f=c.indexOf(l.doc.key),c=c.delete(l.doc.key)),l.type!==1&&(c=c.add(l.doc),m=c.indexOf(l.doc.key)),{type:Rv(l.type),doc:h,oldIndex:f,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_a.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Rv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(n){n=vn(n,Ie);const e=vn(n.firestore,Fi);return dv(qa(e),n._key).then((t=>Cv(e,n,t)))}zn._jsonSchemaVersion="firestore/querySnapshot/1.0",zn._jsonSchema={type:Ee("string",zn._jsonSchemaVersion),bundleSource:Ee("string","QuerySnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class Hf extends Sv{constructor(e){super(),this.firestore=e}convertBytes(e){return new nt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ie(this.firestore,null,t)}}function pi(n){n=vn(n,Pn);const e=vn(n.firestore,Fi),t=qa(e),s=new Hf(e);return Av(n._query),fv(t,n._query).then((r=>new zn(e,s,n,r)))}function Fu(n,e,t,...s){n=vn(n,Ie);const r=vn(n.firestore,Fi),i=Ff(r);let c;return c=typeof(e=we(e))=="string"||e instanceof Ui?wv(i,"updateDoc",n._key,e,t,s):xv(i,"updateDoc",n._key,e),kv(r,[c.toMutation(n._key,St.exists(!0))])}function kv(n,e){return(function(s,r){const i=new Nt;return s.asyncQueue.enqueueAndForget((async()=>ev(await hv(s),r,i))),i.promise})(qa(n),e)}function Cv(n,e,t){const s=t.docs.get(e._key),r=new Hf(n);return new xn(n,r,e._key,s,new Ls(t.hasPendingWrites,t.fromCache),e.converter)}function Uu(){return new Wa("serverTimestamp")}(function(e,t=!0){(function(r){as=r})(rs),Et(new ut("firestore",((s,{instanceIdentifier:r,options:i})=>{const c=s.getProvider("app").getImmediate(),l=new Fi(new w0(s.getProvider("auth-internal")),new E0(c,s.getProvider("app-check-internal")),(function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new L(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Js(f.options.projectId,m)})(c,r),c);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),st(Ul,Bl,e),st(Ul,Bl,"esm2020")})();const zf="@firebase/installations",Qa="0.6.19";/**
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
 */const Gf=1e4,Kf=`w:${Qa}`,Qf="FIS_v2",Pv="https://firebaseinstallations.googleapis.com/v1",jv=3600*1e3,Dv="installations",Vv="Installations";/**
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
 */const Ov={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},In=new An(Dv,Vv,Ov);function Yf(n){return n instanceof ft&&n.code.includes("request-failed")}/**
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
 */function Jf({projectId:n}){return`${Pv}/projects/${n}/installations`}function Xf(n){return{token:n.token,requestStatus:2,expiresIn:Lv(n.expiresIn),creationTime:Date.now()}}async function Zf(n,e){const s=(await e.json()).error;return In.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function em({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Mv(n,{refreshToken:e}){const t=em(n);return t.append("Authorization",Fv(e)),t}async function tm(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Lv(n){return Number(n.replace("s","000"))}function Fv(n){return`${Qf} ${n}`}/**
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
 */async function Uv({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Jf(n),r=em(n),i=e.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&r.append("x-firebase-client",f)}const c={fid:t,authVersion:Qf,appId:n.appId,sdkVersion:Kf},l={method:"POST",headers:r,body:JSON.stringify(c)},h=await tm(()=>fetch(s,l));if(h.ok){const f=await h.json();return{fid:f.fid||t,registrationStatus:2,refreshToken:f.refreshToken,authToken:Xf(f.authToken)}}else throw await Zf("Create Installation",h)}/**
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
 */function nm(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Bv(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const qv=/^[cdef][\w-]{21}$/,sa="";function $v(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Wv(n);return qv.test(t)?t:sa}catch{return sa}}function Wv(n){return Bv(n).substr(0,22)}/**
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
 */function Hi(n){return`${n.appName}!${n.appId}`}/**
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
 */const sm=new Map;function rm(n,e){const t=Hi(n);im(t,e),Hv(t,e)}function im(n,e){const t=sm.get(n);if(t)for(const s of t)s(e)}function Hv(n,e){const t=zv();t&&t.postMessage({key:n,fid:e}),Gv()}let _n=null;function zv(){return!_n&&"BroadcastChannel"in self&&(_n=new BroadcastChannel("[Firebase] FID Change"),_n.onmessage=n=>{im(n.data.key,n.data.fid)}),_n}function Gv(){sm.size===0&&_n&&(_n.close(),_n=null)}/**
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
 */const Kv="firebase-installations-database",Qv=1,Tn="firebase-installations-store";let Io=null;function Ya(){return Io||(Io=Rh(Kv,Qv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Tn)}}})),Io}async function gi(n,e){const t=Hi(n),r=(await Ya()).transaction(Tn,"readwrite"),i=r.objectStore(Tn),c=await i.get(t);return await i.put(e,t),await r.done,(!c||c.fid!==e.fid)&&rm(n,e.fid),e}async function om(n){const e=Hi(n),s=(await Ya()).transaction(Tn,"readwrite");await s.objectStore(Tn).delete(e),await s.done}async function zi(n,e){const t=Hi(n),r=(await Ya()).transaction(Tn,"readwrite"),i=r.objectStore(Tn),c=await i.get(t),l=e(c);return l===void 0?await i.delete(t):await i.put(l,t),await r.done,l&&(!c||c.fid!==l.fid)&&rm(n,l.fid),l}/**
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
 */async function Ja(n){let e;const t=await zi(n.appConfig,s=>{const r=Yv(s),i=Jv(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===sa?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Yv(n){const e=n||{fid:$v(),registrationStatus:0};return am(e)}function Jv(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(In.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Xv(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Zv(n)}:{installationEntry:e}}async function Xv(n,e){try{const t=await Uv(n,e);return gi(n.appConfig,t)}catch(t){throw Yf(t)&&t.customData.serverCode===409?await om(n.appConfig):await gi(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Zv(n){let e=await Bu(n.appConfig);for(;e.registrationStatus===1;)await nm(100),e=await Bu(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Ja(n);return s||t}return e}function Bu(n){return zi(n,e=>{if(!e)throw In.create("installation-not-found");return am(e)})}function am(n){return eE(n)?{fid:n.fid,registrationStatus:0}:n}function eE(n){return n.registrationStatus===1&&n.registrationTime+Gf<Date.now()}/**
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
 */async function tE({appConfig:n,heartbeatServiceProvider:e},t){const s=nE(n,t),r=Mv(n,t),i=e.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&r.append("x-firebase-client",f)}const c={installation:{sdkVersion:Kf,appId:n.appId}},l={method:"POST",headers:r,body:JSON.stringify(c)},h=await tm(()=>fetch(s,l));if(h.ok){const f=await h.json();return Xf(f)}else throw await Zf("Generate Auth Token",h)}function nE(n,{fid:e}){return`${Jf(n)}/${e}/authTokens:generate`}/**
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
 */async function Xa(n,e=!1){let t;const s=await zi(n.appConfig,i=>{if(!cm(i))throw In.create("not-registered");const c=i.authToken;if(!e&&iE(c))return i;if(c.requestStatus===1)return t=sE(n,e),i;{if(!navigator.onLine)throw In.create("app-offline");const l=aE(i);return t=rE(n,l),l}});return t?await t:s.authToken}async function sE(n,e){let t=await qu(n.appConfig);for(;t.authToken.requestStatus===1;)await nm(100),t=await qu(n.appConfig);const s=t.authToken;return s.requestStatus===0?Xa(n,e):s}function qu(n){return zi(n,e=>{if(!cm(e))throw In.create("not-registered");const t=e.authToken;return cE(t)?{...e,authToken:{requestStatus:0}}:e})}async function rE(n,e){try{const t=await tE(n,e),s={...e,authToken:t};return await gi(n.appConfig,s),t}catch(t){if(Yf(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await om(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await gi(n.appConfig,s)}throw t}}function cm(n){return n!==void 0&&n.registrationStatus===2}function iE(n){return n.requestStatus===2&&!oE(n)}function oE(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+jv}function aE(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function cE(n){return n.requestStatus===1&&n.requestTime+Gf<Date.now()}/**
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
 */async function lE(n){const e=n,{installationEntry:t,registrationPromise:s}=await Ja(e);return s?s.catch(console.error):Xa(e).catch(console.error),t.fid}/**
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
 */async function uE(n,e=!1){const t=n;return await hE(t),(await Xa(t,e)).token}async function hE(n){const{registrationPromise:e}=await Ja(n);e&&await e}/**
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
 */function dE(n){if(!n||!n.options)throw To("App Configuration");if(!n.name)throw To("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw To(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function To(n){return In.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="installations",fE="installations-internal",mE=n=>{const e=n.getProvider("app").getImmediate(),t=dE(e),s=Nn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},pE=n=>{const e=n.getProvider("app").getImmediate(),t=Nn(e,lm).getImmediate();return{getId:()=>lE(t),getToken:r=>uE(t,r)}};function gE(){Et(new ut(lm,mE,"PUBLIC")),Et(new ut(fE,pE,"PRIVATE"))}gE();st(zf,Qa);st(zf,Qa,"esm2020");/**
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
 */const yi="analytics",yE="firebase_id",_E="origin",xE=60*1e3,wE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Za="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ge=new xi("@firebase/analytics");/**
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
 */const bE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ze=new An("analytics","Analytics",bE);/**
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
 */function vE(n){if(!n.startsWith(Za)){const e=Ze.create("invalid-gtag-resource",{gtagURL:n});return Ge.warn(e.message),""}return n}function um(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function EE(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function IE(n,e){const t=EE("firebase-js-sdk-policy",{createScriptURL:vE}),s=document.createElement("script"),r=`${Za}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function TE(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function AE(n,e,t,s,r,i){const c=s[r];try{if(c)await e[c];else{const h=(await um(t)).find(f=>f.measurementId===r);h&&await e[h.appId]}}catch(l){Ge.error(l)}n("config",r,i)}async function NE(n,e,t,s,r){try{let i=[];if(r&&r.send_to){let c=r.send_to;Array.isArray(c)||(c=[c]);const l=await um(t);for(const h of c){const f=l.find(y=>y.measurementId===h),m=f&&e[f.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",s,r||{})}catch(i){Ge.error(i)}}function SE(n,e,t,s){async function r(i,...c){try{if(i==="event"){const[l,h]=c;await NE(n,e,t,l,h)}else if(i==="config"){const[l,h]=c;await AE(n,e,t,s,l,h)}else if(i==="consent"){const[l,h]=c;n("consent",l,h)}else if(i==="get"){const[l,h,f]=c;n("get",l,h,f)}else if(i==="set"){const[l]=c;n("set",l)}else n(i,...c)}catch(l){Ge.error(l)}}return r}function RE(n,e,t,s,r){let i=function(...c){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=SE(i,n,e,t),{gtagCore:i,wrappedGtag:window[r]}}function kE(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Za)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=30,PE=1e3;class jE{constructor(e={},t=PE){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const hm=new jE;function DE(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function VE(n){var c;const{appId:e,apiKey:t}=n,s={method:"GET",headers:DE(t)},r=wE.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let l="";try{const h=await i.json();(c=h.error)!=null&&c.message&&(l=h.error.message)}catch{}throw Ze.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function OE(n,e=hm,t){const{appId:s,apiKey:r,measurementId:i}=n.options;if(!s)throw Ze.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Ze.create("no-api-key")}const c=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new FE;return setTimeout(async()=>{l.abort()},xE),dm({appId:s,apiKey:r,measurementId:i},c,l,e)}async function dm(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=hm){var l;const{appId:i,measurementId:c}=n;try{await ME(s,e)}catch(h){if(c)return Ge.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:i,measurementId:c};throw h}try{const h=await VE(n);return r.deleteThrottleMetadata(i),h}catch(h){const f=h;if(!LE(f)){if(r.deleteThrottleMetadata(i),c)return Ge.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:i,measurementId:c};throw h}const m=Number((l=f==null?void 0:f.customData)==null?void 0:l.httpStatus)===503?ul(t,r.intervalMillis,CE):ul(t,r.intervalMillis),y={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return r.setThrottleMetadata(i,y),Ge.debug(`Calling attemptFetch again in ${m} millis`),dm(n,y,s,r)}}function ME(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s(Ze.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function LE(n){if(!(n instanceof ft)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class FE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function UE(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const i=await e,c={...s,send_to:i};n("event",t,c)}}async function BE(n,e,t,s){if(s&&s.global){const r={};for(const i of Object.keys(t))r[`user_properties.${i}`]=t[i];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(){if(Th())try{await Ah()}catch(n){return Ge.warn(Ze.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ge.warn(Ze.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $E(n,e,t,s,r,i,c){const l=OE(n);l.then(w=>{t[w.measurementId]=w.appId,n.options.measurementId&&w.measurementId!==n.options.measurementId&&Ge.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>Ge.error(w)),e.push(l);const h=qE().then(w=>{if(w)return s.getId()}),[f,m]=await Promise.all([l,h]);kE(i)||IE(i,f.measurementId),r("js",new Date);const y=(c==null?void 0:c.config)??{};return y[_E]="firebase",y.update=!0,m!=null&&(y[yE]=m),r("config",f.measurementId,y),f.measurementId}/**
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
 */class WE{constructor(e){this.app=e}_delete(){return delete Gn[this.app.options.appId],Promise.resolve()}}let Gn={},$u=[];const Wu={};let Ao="dataLayer",HE="gtag",Hu,ec,zu=!1;function zE(){const n=[];if(Ih()&&n.push("This is a browser extension environment."),Lg()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=Ze.create("invalid-analytics-context",{errorInfo:e});Ge.warn(t.message)}}function GE(n,e,t){zE();const s=n.options.appId;if(!s)throw Ze.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ge.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ze.create("no-api-key");if(Gn[s]!=null)throw Ze.create("already-exists",{id:s});if(!zu){TE(Ao);const{wrappedGtag:i,gtagCore:c}=RE(Gn,$u,Wu,Ao,HE);ec=i,Hu=c,zu=!0}return Gn[s]=$E(n,$u,Wu,e,Hu,Ao,t),new WE(n)}function KE(n=ca()){n=we(n);const e=Nn(n,yi);return e.isInitialized()?e.getImmediate():QE(n)}function QE(n,e={}){const t=Nn(n,yi);if(t.isInitialized()){const r=t.getImmediate();if(Jt(e,t.getOptions()))return r;throw Ze.create("already-initialized")}return t.initialize({options:e})}function YE(n,e,t){n=we(n),BE(ec,Gn[n.app.options.appId],e,t).catch(s=>Ge.error(s))}function JE(n,e,t,s){n=we(n),UE(ec,Gn[n.app.options.appId],e,t,s).catch(r=>Ge.error(r))}const Gu="@firebase/analytics",Ku="0.10.19";function XE(){Et(new ut(yi,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return GE(s,r,t)},"PUBLIC")),Et(new ut("analytics-internal",n,"PRIVATE")),st(Gu,Ku),st(Gu,Ku,"esm2020");function n(e){try{const t=e.getProvider(yi).getImmediate();return{logEvent:(s,r,i)=>JE(t,s,r,i),setUserProperties:(s,r)=>YE(t,s,r)}}catch(t){throw Ze.create("interop-component-reg-failed",{reason:t})}}}XE();const ra={apiKey:"AIzaSyBkMktbTfBNIdhtBwCC_cRBEavKeuTyCGA",authDomain:"myschola-5ec1f.firebaseapp.com",projectId:"myschola-5ec1f",storageBucket:"myschola-5ec1f.appspot.com",messagingSenderId:"927860875256",appId:"1:927860875256:web:ce73f8eabd09cac6f3400d",measurementId:"G-XTC703H7RN"};if(!ra.apiKey||!ra.projectId)throw console.error("Firebase configuration is missing. Please check your .env file."),new Error("Firebase configuration error");const tc=kh(ra),rt=g0(tc),pe=pv(tc);KE(tc);function ZE(){const[n,e]=R.useState(""),[t,s]=R.useState(!1),[r,i]=R.useState(!0),c=rn(),l=on(),h=async m=>{var C,j;if((await Ve(Ce(pe,"admins",m))).exists())return c("/admin",{replace:!0}),!0;if((await Ve(Ce(pe,"teachers",m))).exists())return c("/admin",{replace:!0}),!0;if((await Ve(Ce(pe,"students",m))).exists()){const P=((j=(C=l.state)==null?void 0:C.from)==null?void 0:j.pathname)||"/app/dashboard";return c(P,{replace:!0}),!0}return!1};R.useEffect(()=>{(async()=>{try{await rt.signOut()}catch(y){console.error("Error signing out existing session:",y)}finally{i(!1)}})()},[]);const f=async m=>{m.preventDefault(),e(""),s(!0);const y=new FormData(m.currentTarget),w=y.get("email"),T=y.get("password");try{console.log("Attempting to sign in with email:",w);const j=(await nx(rt,w,T)).user;console.log("Sign in successful. User UID:",j.uid),await h(j.uid)||(console.error("No role document found for UID:",j.uid),await rt.signOut(),e("Profile not found. Please contact your administrator."))}catch(C){console.error(C),C.code==="auth/invalid-email"?e("Please enter a valid email address."):C.code==="auth/user-not-found"?e("No account found with this email. Please contact your teacher to create an account."):C.code==="auth/wrong-password"?e("Incorrect password. Please try again."):C.code==="auth/invalid-credential"?e("Invalid email or password. Please try again."):e(C.message||"Failed to sign in. Please try again.")}finally{s(!1)}};return r?a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),a.jsx("p",{className:"mt-4 text-gray-600",children:"Checking authentication..."})]})}):a.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[a.jsx("div",{className:"flex justify-center",children:a.jsxs(ze,{to:"/",className:"flex items-center",children:[a.jsx(Kn,{className:"h-12 w-12 text-blue-600"}),a.jsx("span",{className:"ml-2 text-3xl font-bold text-gray-900",children:"MySchola"})]})}),a.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"}),a.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Students: Use the email and password provided by your teacher"})]}),a.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:a.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[a.jsxs("form",{className:"space-y-6",onSubmit:f,children:[n&&a.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative",role:"alert",children:a.jsx("span",{className:"block sm:inline",children:n})}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),a.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[a.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:a.jsx(ah,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),a.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"you@example.com"})]})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),a.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[a.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:a.jsx(oa,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),a.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"********"})]})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),a.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),a.jsx("div",{className:"text-sm",children:a.jsx("a",{href:"#",className:"font-medium text-blue-600 hover:text-blue-500",children:"Forgot your password?"})})]}),a.jsx("div",{children:a.jsx("button",{type:"submit",disabled:t,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed",children:t?"Please wait...":"Sign in"})})]}),a.jsx("div",{className:"mt-6",children:a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"absolute inset-0 flex items-center",children:a.jsx("div",{className:"w-full border-t border-gray-300"})}),a.jsx("div",{className:"relative flex justify-center text-sm",children:a.jsx("span",{className:"px-2 bg-white text-gray-500",children:a.jsxs(ze,{to:"/",className:"flex items-center hover:text-gray-900 transition",children:[a.jsx(lt,{className:"h-4 w-4 mr-1"}),"Back to Home"]})})})]})})]})})]})}function No({children:n}){const[e,t]=R.useState(!0),[s,r]=R.useState(!1),[i,c]=R.useState(!1),l=on();return R.useEffect(()=>{const h=vi(rt,async f=>{if(f)try{(await Ve(Ce(pe,"students",f.uid))).exists()?(r(!0),c(!0)):(r(!1),c(!1))}catch(m){console.error("Error checking student status:",m),r(!1),c(!1)}else r(!1),c(!1);t(!1)});return()=>h()},[]),e?a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),a.jsx("p",{className:"mt-4 text-gray-600",children:"Loading..."})]})}):!s||!i?a.jsx(Hm,{to:"/login",state:{from:l},replace:!0}):n}const eI=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?pp:e.includes("english")||e.includes("literature")||e.includes("language")?dp:e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?kp:e.includes("geography")||e.includes("geography")?Pp:e.includes("history")?Vp:e.includes("music")?zp:e.includes("art")||e.includes("design")?Kp:e.includes("language")||e.includes("french")||e.includes("spanish")||e.includes("german")?Mp:e.includes("computer")||e.includes("ict")||e.includes("it")?op:Kn},tI=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?"bg-blue-50 border-blue-200 text-blue-700":e.includes("english")||e.includes("literature")||e.includes("language")?"bg-purple-50 border-purple-200 text-purple-700":e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?"bg-green-50 border-green-200 text-green-700":e.includes("geography")?"bg-cyan-50 border-cyan-200 text-cyan-700":e.includes("history")?"bg-amber-50 border-amber-200 text-amber-700":e.includes("music")?"bg-pink-50 border-pink-200 text-pink-700":e.includes("art")||e.includes("design")?"bg-rose-50 border-rose-200 text-rose-700":"bg-gray-50 border-gray-200 text-gray-700"},fm="subjectAccess",nI=()=>{try{const n=localStorage.getItem(fm),e=n?JSON.parse(n):[];return Array.isArray(e)?e:[]}catch{return[]}},sI=n=>{localStorage.setItem(fm,JSON.stringify(n))},Qu=n=>(n==null?void 0:n.pin)||(n==null?void 0:n.accessPin)||"";function rI(){const n=rn(),[e,t]=R.useState(null),[s,r]=R.useState([]),[i,c]=R.useState(!0),[l,h]=R.useState(""),[f,m]=R.useState(null),[y,w]=R.useState(nI()),[T,C]=R.useState(null),[j,P]=R.useState(""),[M,D]=R.useState("");R.useEffect(()=>{(async()=>{try{const g=rt.currentUser;if(!g){n("/login");return}const b=await Ve(Ce(pe,"students",g.uid));if(!b.exists()){h("Student profile not found"),c(!1);return}const v=b.data();if(t(v),console.log("Student data:",v),console.log("Student subjects array:",v.subjects),v.subjects&&v.subjects.length>0){const x=(await Promise.all(v.subjects.map(async $=>{try{const X=await Ve(Ce(pe,"subjects",$));return X.exists()?{id:X.id,...X.data()}:(console.warn(`Subject document not found for ID: ${$}`),null)}catch(X){return console.error(`Error fetching subject ${$}:`,X),null}}))).filter($=>$!==null);console.log("Loaded subjects:",x),console.log("Expected subjects:",v.subjects),console.log("Missing subjects:",v.subjects.filter($=>!x.some(X=>X.id===$))),r(x),x.length!==v.subjects.length&&m({expected:v.subjects.length,loaded:x.length,missing:v.subjects.filter($=>!x.some(X=>X.id===$))})}else console.log("No subjects array found in student data");c(!1)}catch(g){console.error("Error loading student data:",g),h("Failed to load dashboard data"),c(!1)}})()},[n]);const U=_=>!String(Qu(_)||"").trim()||y.includes(_.id),Y=_=>{C(_),P(""),D("")},ue=_=>{const g=String(Qu(_)||"").trim();if(g&&j.trim()!==g){D("Incorrect PIN");return}const b=Array.from(new Set([...y,_.id]));w(b),sI(b),C(null),P(""),D("")},se=()=>{C(null),P(""),D("")},E=async()=>{try{await ix(rt),n("/login",{replace:!0})}catch(_){console.error("Error signing out:",_)}};return i?a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",role:"status","aria-live":"polite",children:a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto","aria-hidden":"true"}),a.jsx("p",{className:"mt-4 text-gray-600","aria-label":"Loading dashboard",children:"Loading your dashboard..."})]})}):l?a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"text-red-600 mb-4",children:l}),a.jsx("button",{onClick:E,className:"text-blue-600 hover:text-blue-700 underline",children:"Sign out and try again"})]})}):a.jsxs("div",{className:"min-h-screen bg-gray-50",children:[a.jsx("header",{className:"bg-white shadow-sm",role:"banner",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx($r,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"MySchola Student Dashboard"}),a.jsxs("p",{className:"text-sm text-gray-500",children:["Hi, ",a.jsx("span",{className:"font-medium",children:(e==null?void 0:e.name)||"Student"})]})]})]}),a.jsxs("nav",{className:"flex items-center gap-3","aria-label":"Dashboard navigation",children:[a.jsx(ze,{to:"/",className:"text-sm text-gray-600 hover:text-gray-900 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition","aria-label":"Return to homepage",children:"Back to site"}),a.jsxs("button",{onClick:E,className:"inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition","aria-label":"Sign out of your account",children:[a.jsx(Up,{className:"h-4 w-4","aria-hidden":"true"}),"Sign out"]})]})]})}),a.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[a.jsxs("div",{className:"mb-8",children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Your Subjects"}),a.jsx("p",{className:"text-gray-600",children:"Select a subject to join Zoom sessions, watch recordings, or download homework."})]}),f&&a.jsxs("div",{className:"mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4",role:"alert","aria-live":"polite",children:[a.jsx("p",{className:"text-sm text-yellow-800 font-medium mb-1",children:"Some subjects may not be loading correctly"}),a.jsxs("p",{className:"text-xs text-yellow-700",children:["Expected ",f.expected," subject(s), loaded ",f.loaded,". Please check the browser console for details."]})]}),s.length===0?a.jsxs("div",{className:"bg-white rounded-lg shadow p-8 text-center",role:"region","aria-labelledby":"no-subjects-heading",children:[a.jsx($r,{className:"h-12 w-12 text-gray-400 mx-auto mb-4","aria-hidden":"true"}),a.jsx("h3",{id:"no-subjects-heading",className:"text-lg font-semibold text-gray-900 mb-2",children:"No Subjects Enrolled"}),a.jsx("p",{className:"text-gray-600 mb-2",children:"You're not enrolled in any subjects yet."}),a.jsx("p",{className:"text-sm text-gray-500",children:"Please contact your teacher to get enrolled."})]}):a.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",role:"list","aria-label":"Enrolled subjects",children:s.map(_=>{const g=eI(_.name),b=tI(_.name);return a.jsxs("article",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",role:"listitem",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[a.jsx("div",{className:`p-2 rounded-lg ${b}`,children:a.jsx(g,{className:"h-6 w-6","aria-hidden":"true"})}),a.jsx("h3",{className:"text-xl font-semibold text-gray-900 flex-1",children:_.name})]}),a.jsx("div",{className:"space-y-3",children:U(_)?a.jsxs(a.Fragment,{children:[_.zoomLink&&a.jsxs("a",{href:_.zoomLink,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`Join Zoom session for ${_.name}`,children:[a.jsx(Np,{className:"h-4 w-4","aria-hidden":"true"}),"Join Zoom"]}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsxs(ze,{to:`/app/subject/${_.id}/recordings`,className:"flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`View recordings for ${_.name}`,children:[a.jsx(Qn,{className:"h-4 w-4","aria-hidden":"true"}),"Recordings"]}),a.jsxs(ze,{to:`/app/subject/${_.id}/homework`,className:"flex items-center justify-center gap-2 text-green-600 hover:text-green-700 px-4 py-2 border border-green-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition font-medium","aria-label":`View homework for ${_.name}`,children:[a.jsx(Hs,{className:"h-4 w-4","aria-hidden":"true"}),"Homework"]})]})]}):a.jsxs("div",{className:"space-y-3",children:[a.jsx("p",{className:"text-sm text-gray-600",children:"This subject is locked. Enter the PIN to unlock."}),T===_.id?a.jsxs("div",{className:"space-y-2",children:[a.jsx("input",{type:"password",value:j,onChange:v=>P(v.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Subject PIN"}),M&&a.jsx("p",{className:"text-sm text-red-600",children:M}),a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsx("button",{type:"button",onClick:()=>ue(_),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Unlock"}),a.jsx("button",{type:"button",onClick:se,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Cancel"})]})]}):a.jsx("button",{type:"button",onClick:()=>Y(_.id),className:"w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Enter PIN"})]})})]},_.id)})})]})]})}const mm="subjectAccess",iI=()=>{try{const n=localStorage.getItem(mm),e=n?JSON.parse(n):[];return Array.isArray(e)?e:[]}catch{return[]}},oI=n=>{localStorage.setItem(mm,JSON.stringify(n))},aI=n=>(n==null?void 0:n.pin)||(n==null?void 0:n.accessPin)||"";function cI(){const{subjectId:n}=ih(),e=rn(),[t,s]=R.useState([]),[r,i]=R.useState([]),[c,l]=R.useState(null),[h,f]=R.useState(!0),[m,y]=R.useState(""),[w,T]=R.useState(!1),[C,j]=R.useState(""),[P,M]=R.useState(""),[D,U]=R.useState(""),[Y,ue]=R.useState(iI()),[se,E]=R.useState(0);R.useEffect(()=>{const I=async()=>{try{if(!rt.currentUser){e("/login");return}const $=Ce(pe,"subjects",n),X=await Ve($);if(X.exists()){const ae={id:n,...X.data()};l(ae);const Pe=aI(ae);if(U(Pe),!(!Pe||Y.includes(n))){T(!0),f(!1);return}}let O;try{O=fi(sr(pe,"recordings"),mi("subjectId","==",n),Nv("date","desc"))}catch(ae){console.warn("OrderBy failed, using simple query:",ae),O=fi(sr(pe,"recordings"),mi("subjectId","==",n))}const Ne=(await pi(O)).docs.map(ae=>({id:ae.id,...ae.data()})).filter(ae=>ae.approvalStatus==="approved"||!ae.approvalStatus).sort((ae,Pe)=>{var Qe,et;const it=(Qe=ae.date)!=null&&Qe.toDate?ae.date.toDate():ae.date?new Date(ae.date):new Date(0);return((et=Pe.date)!=null&&et.toDate?Pe.date.toDate():Pe.date?new Date(Pe.date):new Date(0))-it});s(Ne),i(Ne),T(!1),f(!1)}catch(x){console.error("Error loading recordings:",x),y("Failed to load recordings"),f(!1)}};n&&(f(!0),y(""),I())},[n,e,Y,se]);const _=I=>{I.preventDefault();const x=String(D||"").trim();if(!x){T(!1);return}if(C.trim()!==x){M("Incorrect PIN");return}const $=Array.from(new Set([...Y,n]));ue($),oI($),j(""),M(""),T(!1),E(X=>X+1)},g=()=>{var x;return c?(((x=c.name)==null?void 0:x.toLowerCase())||"").includes("english"):!1},b=()=>{const I={};return r.forEach(x=>{const $=x.examBoard||"Other",X=x.tier||(g()?"General":"Other"),O=`${$}_${X}`;I[O]||(I[O]={examBoard:$,tier:X,recordings:[]}),I[O].recordings.push(x)}),Object.values(I).sort((x,$)=>x.examBoard!==$.examBoard?x.examBoard==="AQA"?-1:$.examBoard==="AQA"?1:x.examBoard==="Edexcel"?-1:$.examBoard==="Edexcel"?1:x.examBoard.localeCompare($.examBoard):x.tier==="Foundation"?-1:$.tier==="Foundation"?1:x.tier==="Higher"?-1:$.tier==="Higher"?1:x.tier.localeCompare($.tier))},v=I=>I?(I.toDate?I.toDate():new Date(I)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"Date not available";return h?a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),a.jsx("p",{className:"mt-4 text-gray-600",children:"Loading recordings..."})]})}):w?a.jsx("div",{className:"min-h-screen bg-gray-50",children:a.jsxs("div",{className:"max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[a.jsxs(ze,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[a.jsx(lt,{className:"h-4 w-4"}),"Back to Dashboard"]}),a.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[a.jsx("h1",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Enter Subject PIN"}),a.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"This subject is locked. Enter the PIN to access recordings."}),a.jsxs("form",{onSubmit:_,className:"space-y-4",children:[a.jsx("input",{type:"password",value:C,onChange:I=>j(I.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Subject PIN",autoFocus:!0}),P&&a.jsx("div",{className:"text-sm text-red-600",children:P}),a.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"Unlock Subject"})]})]})]})}):a.jsx("div",{className:"min-h-screen bg-gray-50",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[a.jsxs(ze,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[a.jsx(lt,{className:"h-4 w-4"}),"Back to Dashboard"]}),a.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[a.jsx(Qn,{className:"h-6 w-6 text-blue-600"}),a.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Recordings - ",(c==null?void 0:c.name)||"Subject"]})]}),a.jsx("p",{className:"text-gray-600",children:"Watch past lesson recordings for this subject."})]}),m&&a.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6",children:m}),r.length===0?a.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[a.jsx(Qn,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),a.jsx("p",{className:"text-gray-600",children:"No recordings available yet."}),a.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Check back later for new recordings."})]}):a.jsx("div",{className:"space-y-6",children:b().map((I,x)=>a.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",children:[a.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 px-6 py-4",children:a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx($r,{className:"h-5 w-5 text-blue-600"}),a.jsxs("div",{children:[a.jsxs("h3",{className:"text-lg font-semibold text-gray-900",children:[I.examBoard,!g()&&I.tier&&a.jsxs("span",{className:"ml-2 text-base font-normal text-gray-600",children:["- ",I.tier]})]}),a.jsxs("p",{className:"text-sm text-gray-600",children:[I.recordings.length," recording",I.recordings.length!==1?"s":""]})]})]})}),a.jsx("div",{className:"p-6 space-y-4",children:I.recordings.map($=>a.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:a.jsxs("div",{className:"flex items-start justify-between",children:[a.jsxs("div",{className:"flex-1",children:[a.jsx("h4",{className:"text-base font-semibold text-gray-900 mb-2",children:$.title}),a.jsx("p",{className:"text-sm text-gray-500",children:v($.date)})]}),a.jsxs("a",{href:$.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"ml-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap",children:[a.jsx(Xp,{className:"h-4 w-4"}),"Watch"]})]})},$.id))})]},x))})]})})}function lI(){const{subjectId:n}=ih(),[e,t]=R.useState([]),[s,r]=R.useState(null),[i,c]=R.useState(!0),[l,h]=R.useState(null);R.useEffect(()=>{n&&(async()=>{try{const w=Ce(pe,"subjects",n),T=await Ve(w);T.exists()&&r({id:n,...T.data()});const C=fi(sr(pe,"homeworks"),mi("subjectId","==",n)),P=(await pi(C)).docs.map(M=>({id:M.id,...M.data()}));t(P),c(!1)}catch(w){console.error("Error loading homework:",w),c(!1)}})()},[n]);const f=y=>y?(y.toDate?y.toDate():new Date(y)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"No due date",m=y=>y?(y.toDate?y.toDate():new Date(y))<new Date:!1;return i?a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),a.jsx("p",{className:"mt-4 text-gray-600",children:"Loading homework..."})]})}):a.jsx("div",{className:"min-h-screen bg-gray-50",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[a.jsxs(ze,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[a.jsx(lt,{className:"h-4 w-4"}),"Back to Dashboard"]}),a.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[a.jsx(Hs,{className:"h-6 w-6 text-green-600"}),a.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Homework - ",(s==null?void 0:s.name)||"Subject"]})]}),a.jsx("p",{className:"text-gray-600",children:"Download your homework assignments."})]}),l?a.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[a.jsxs("div",{className:"flex items-center justify-between mb-6",children:[a.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:l.title}),a.jsx("button",{onClick:()=>{h(null)},className:"text-gray-600 hover:text-gray-900",children:"Close"})]}),l.description&&a.jsx("p",{className:"text-gray-600 mb-6",children:l.description}),a.jsxs("p",{className:"text-sm text-gray-500 mb-6",children:["Due: ",f(l.dueDate)]}),l.attachmentUrl&&a.jsxs("a",{href:l.attachmentUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6",children:[a.jsx(tl,{className:"h-5 w-5"}),"Download ",l.attachmentName||"homework file"]}),!l.attachmentUrl&&a.jsx("p",{className:"text-gray-600",children:"No homework file attached."})]}):a.jsx("div",{className:"space-y-4",children:e.length===0?a.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[a.jsx(Hs,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),a.jsx("p",{className:"text-gray-600",children:"No homework assignments available yet."})]}):e.map(y=>{const w=m(y.dueDate);return a.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:a.jsxs("div",{className:"flex items-start justify-between mb-4",children:[a.jsxs("div",{className:"flex-1",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:y.title}),y.description&&a.jsx("p",{className:"text-gray-600 mb-2",children:y.description}),y.attachmentUrl&&a.jsxs("a",{href:y.attachmentUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-2",children:[a.jsx(tl,{className:"h-4 w-4"}),"Download ",y.attachmentName||"homework file"]}),a.jsx("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx(ia,{className:"h-4 w-4"}),"Due: ",f(y.dueDate)]})}),w&&a.jsx("div",{className:"mt-3 text-red-600 text-sm font-medium",children:"Overdue"})]}),a.jsx("button",{onClick:()=>h(y),className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"View Details"})]})},y.id)})})]})})}const uI="myschola-5ec1f",hI=`https://us-central1-${uI}.cloudfunctions.net`,Yu=hI,dI=async()=>{const n=rt.currentUser;if(!n)throw new Error("User is not authenticated");return n.getIdToken()},nc=async(n,e)=>{if(!Yu)throw new Error("Functions base URL is not configured");const t=await dI(),s=await fetch(`${Yu}/${n}`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(e||{})});if(!s.ok){const r=await s.text();throw new Error(r||`Request failed (${s.status})`)}return s.json()},Ju=n=>nc("createHidriveUpload",n),fI=n=>nc("createRecording",n),mI=n=>nc("createHomework",n);function pI(){const n=rn(),[e,t]=R.useState(!1),[s,r]=R.useState(!0),[i,c]=R.useState([]),[l,h]=R.useState(""),[f,m]=R.useState(null),[y,w]=R.useState("recording"),[T,C]=R.useState(""),[j,P]=R.useState(null),[M,D]=R.useState(0),[U,Y]=R.useState(""),[ue,se]=R.useState(""),[E,_]=R.useState([]),[g,b]=R.useState(""),[v,I]=R.useState(""),[x,$]=R.useState(""),[X,O]=R.useState(null),[re,Ne]=R.useState(0),[ae,Pe]=R.useState(!1),[it,_e]=R.useState("");R.useEffect(()=>{const B=vi(rt,async z=>{if(!z){t(!1),r(!1),n("/login",{replace:!0});return}try{const ie=await Ve(Ce(pe,"admins",z.uid)),ce=ie.exists()?null:await Ve(Ce(pe,"teachers",z.uid));ie.exists()||ce!=null&&ce.exists()?t(!0):(t(!1),n("/login",{replace:!0}))}catch(ie){console.error("Error verifying role:",ie),t(!1),n("/login",{replace:!0})}finally{r(!1)}});return()=>B()},[n]),R.useEffect(()=>{e&&(async()=>{try{const ie=(await pi(sr(pe,"subjects"))).docs.map(ce=>({id:ce.id,...ce.data()}));if(c(ie),ie.length>0){const ce=ie[0];h(ce.id),m(ce)}}catch(z){console.error("Error loading subjects:",z)}})()},[e]),R.useEffect(()=>{(async()=>{if(y==="approve"&&e)try{const z=fi(sr(pe,"recordings"),mi("approvalStatus","==","pending")),ie=await pi(z),ce=await Promise.all(ie.docs.map(async Me=>{const he=Me.data();let Se="Unknown";if(he.subjectId)try{const Le=await Ve(Me(pe,"subjects",he.subjectId));Le.exists()&&(Se=Le.data().name)}catch(Le){console.error("Error fetching subject:",Le)}return{id:Me.id,...he,subjectName:Se}}));_(ce)}catch(z){console.error("Error loading pending recordings:",z)}})()},[y,e]),R.useEffect(()=>{const B=i.find(z=>z.id===l);m(B||null),Y(""),se("")},[l,i]);const Qe=()=>{var z;return f?(((z=f.name)==null?void 0:z.toLowerCase())||"").includes("english"):!1},et=(B,z,ie)=>new Promise((ce,Me)=>{if(!(z!=null&&z.uploadUrl)){Me(new Error("Upload URL is missing"));return}const he=new XMLHttpRequest;he.open(z.method||"PUT",z.uploadUrl,!0),he.responseType="json",z.headers&&Object.entries(z.headers).forEach(([Se,Le])=>{Le&&he.setRequestHeader(Se,Le)}),he.upload.onprogress=Se=>{if(Se.lengthComputable){const Le=Math.round(Se.loaded/Se.total*100);ie&&ie(Le)}},he.onload=()=>{if(he.status>=200&&he.status<300){ie&&ie(100);let Se=he.response;if(!Se&&he.responseText)try{Se=JSON.parse(he.responseText)}catch{Se=null}ce({response:Se})}else Me(new Error(`Upload failed (${he.status})`))},he.onerror=()=>{Me(new Error("Upload failed"))},he.send(B)}),ds=async B=>{if(B.preventDefault(),!l||!T||!U){_e("Please fill in all required fields");return}if(!j){_e("Please upload a video file to continue");return}if(!Qe()&&!ue){_e("Please select a tier (Foundation or Higher)");return}Pe(!0),_e("");try{D(0);const z=await Ju({subjectId:l,fileName:j.name,contentType:j.type,uploadType:"recording"}),ie=await et(j,z,D),ce=ie==null?void 0:ie.response,Me=(ce==null?void 0:ce.id)||(ce==null?void 0:ce.pid)||(ce==null?void 0:ce.file_id)||null,he={subjectId:l,title:T,examBoard:U,tier:Qe()?null:ue,hidrivePath:z.hidrivePath,hidriveFileId:Me,fileName:j.name};sessionStorage.setItem("pendingRecording",JSON.stringify(he)),C(""),P(null),D(0),Y(""),se(""),n("/admin/share-link",{state:{pendingRecording:he}})}catch(z){console.error("Error adding recording:",z),_e("Failed to upload recording"),D(0)}finally{Pe(!1)}},fs=async B=>{try{await Fu(Ce(pe,"recordings",B),{approvalStatus:"approved",approvedAt:Uu()}),_(E.filter(z=>z.id!==B)),_e("Recording approved successfully!"),setTimeout(()=>_e(""),3e3)}catch(z){console.error("Error approving recording:",z),_e("Failed to approve recording")}},ms=async B=>{try{await Fu(Ce(pe,"recordings",B),{approvalStatus:"rejected",rejectedAt:Uu()}),_(E.filter(z=>z.id!==B)),_e("Recording rejected"),setTimeout(()=>_e(""),3e3)}catch(z){console.error("Error rejecting recording:",z),_e("Failed to reject recording")}},ps=async B=>{if(B.preventDefault(),!l||!g){_e("Please fill in all required fields");return}if(!X){_e("Please upload a homework file");return}Pe(!0),_e("");try{let z=null,ie=null,ce=null,Me=null,he=null;if(X){Ne(0);const Le=await Ju({subjectId:l,fileName:X.name,contentType:X.type,uploadType:"homework"}),ln=await et(X,Le,Ne),tt=ln==null?void 0:ln.response;ie=(tt==null?void 0:tt.id)||(tt==null?void 0:tt.pid)||(tt==null?void 0:tt.file_id)||null,z=Le.hidrivePath,ce=X.name,Me=X.type,he=X.size}const Se={subjectId:l,title:g,description:v,dueDate:x?new Date(x).toISOString():null,attachmentName:ce,attachmentContentType:Me,attachmentSize:he,hidrivePath:z,hidriveFileId:ie,fileName:X.name};sessionStorage.setItem("pendingHomework",JSON.stringify(Se)),b(""),I(""),$(""),O(null),Ne(0),n("/admin/homework-share-link",{state:{pendingHomework:Se}})}catch(z){console.error("Error adding homework:",z),_e("Failed to add homework")}finally{Pe(!1)}};return s?a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),a.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):e?a.jsx("div",{className:"min-h-screen bg-gray-50",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[a.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Admin Panel"}),a.jsx("button",{onClick:async()=>{await rt.signOut(),n("/login",{replace:!0})},className:"text-gray-600 hover:text-gray-900 underline text-sm",children:"Sign out"})]})}),a.jsxs("div",{className:"flex gap-2 mb-6 flex-wrap",children:[a.jsxs("button",{onClick:()=>w("recording"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${y==="recording"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[a.jsx(Qn,{className:"h-4 w-4"}),"Add Recording"]}),a.jsxs("button",{onClick:()=>w("homework"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${y==="homework"?"bg-green-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[a.jsx(Hs,{className:"h-4 w-4"}),"Add Homework"]}),a.jsxs("button",{onClick:()=>w("approve"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition relative ${y==="approve"?"bg-purple-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[a.jsx(Ht,{className:"h-4 w-4"}),"Approve Recordings",E.length>0&&a.jsx("span",{className:"ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5",children:E.length})]})]}),it&&a.jsx("div",{className:`mb-6 p-4 rounded-lg ${it.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:it}),a.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Select Subject"}),a.jsx("select",{value:l,onChange:B=>h(B.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:i.map(B=>a.jsx("option",{value:B.id,children:B.name},B.id))})]}),y==="recording"&&a.jsxs("form",{onSubmit:ds,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[a.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Recording"}),a.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Recordings will be pending approval before students can view them."}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),a.jsx("input",{type:"text",value:T,onChange:B=>C(B.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"e.g., Algebra Basics - Lesson 1",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Exam Board *"}),a.jsxs("select",{value:U,onChange:B=>Y(B.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[a.jsx("option",{value:"",children:"Select Exam Board"}),a.jsx("option",{value:"AQA",children:"AQA"}),a.jsx("option",{value:"Edexcel",children:"Edexcel"})]})]}),!Qe()&&a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Tier *"}),a.jsxs("select",{value:ue,onChange:B=>se(B.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[a.jsx("option",{value:"",children:"Select Tier"}),a.jsx("option",{value:"Foundation",children:"Foundation"}),a.jsx("option",{value:"Higher",children:"Higher"})]})]}),Qe()&&a.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:a.jsx("p",{className:"text-sm text-blue-800",children:"English subjects do not have Foundation/Higher tiers."})}),a.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700",children:"After upload, you will be taken to a new page to paste the HiDrive share link."}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Upload Video File"}),a.jsx("input",{type:"file",accept:"video/*",onChange:B=>{var ie;const z=((ie=B.target.files)==null?void 0:ie[0])||null;P(z),D(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),M>0&&M<100&&a.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",M,"%"]})]})]}),a.jsxs("button",{type:"submit",disabled:ae,className:"mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[a.jsx(nl,{className:"h-4 w-4"}),ae?"Adding...":"Add Recording (Pending Approval)"]})]}),y==="approve"&&a.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[a.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Approve Recordings"}),a.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Review and approve pending recordings. Only approved recordings will be visible to students."}),E.length===0?a.jsxs("div",{className:"text-center py-8",children:[a.jsx(Ht,{className:"h-12 w-12 text-green-500 mx-auto mb-4"}),a.jsx("p",{className:"text-gray-600",children:"No pending recordings to approve."})]}):a.jsx("div",{className:"space-y-4",children:E.map(B=>a.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:a.jsxs("div",{className:"flex items-start justify-between",children:[a.jsxs("div",{className:"flex-1",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:B.title}),a.jsxs("div",{className:"space-y-1 text-sm text-gray-600",children:[a.jsxs("p",{children:[a.jsx("span",{className:"font-medium",children:"Subject:"})," ",B.subjectName]}),a.jsxs("p",{children:[a.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",B.examBoard]}),B.tier&&a.jsxs("p",{children:[a.jsx("span",{className:"font-medium",children:"Tier:"})," ",B.tier]}),B.date&&a.jsxs("p",{children:[a.jsx("span",{className:"font-medium",children:"Date:"})," ",B.date.toDate?B.date.toDate().toLocaleDateString("en-GB"):"N/A"]})]}),a.jsxs("a",{href:B.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm mt-2",children:[a.jsx(Qn,{className:"h-4 w-4"}),"Preview Video"]})]}),a.jsxs("div",{className:"flex gap-2 ml-4",children:[a.jsxs("button",{onClick:()=>fs(B.id),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2",children:[a.jsx(Ht,{className:"h-4 w-4"}),"Approve"]}),a.jsx("button",{onClick:()=>ms(B.id),className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition",children:"Reject"})]})]})},B.id))})]}),y==="homework"&&a.jsxs("form",{onSubmit:ps,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[a.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Homework"}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),a.jsx("input",{type:"text",value:g,onChange:B=>b(B.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Description"}),a.jsx("textarea",{value:v,onChange:B=>I(B.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",rows:"3"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Due Date"}),a.jsx("input",{type:"datetime-local",value:x,onChange:B=>$(B.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Homework File *"}),a.jsx("input",{type:"file",required:!0,onChange:B=>{var ie;const z=((ie=B.target.files)==null?void 0:ie[0])||null;O(z),Ne(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"}),re>0&&re<100&&a.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",re,"%"]})]}),a.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700",children:"After upload, you will be taken to a new page to paste the HiDrive share link."})]}),a.jsxs("button",{type:"submit",disabled:ae,className:"mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[a.jsx(nl,{className:"h-4 w-4"}),ae?"Adding...":"Add Homework"]})]})]})}):null}const So="pendingRecording";function gI(){const n=rn(),e=on(),[t,s]=R.useState(!0),[r,i]=R.useState(!1),[c,l]=R.useState(null),[h,f]=R.useState(""),[m,y]=R.useState(""),[w,T]=R.useState(""),[C,j]=R.useState(!1);R.useEffect(()=>{const M=vi(rt,async D=>{if(!D){i(!1),s(!1),n("/login",{replace:!0});return}try{const U=await Ve(Ce(pe,"admins",D.uid)),Y=U.exists()?null:await Ve(Ce(pe,"teachers",D.uid));U.exists()||Y!=null&&Y.exists()?i(!0):(i(!1),n("/login",{replace:!0}))}catch(U){console.error("Error verifying role:",U),i(!1),n("/login",{replace:!0})}finally{s(!1)}});return()=>M()},[n]),R.useEffect(()=>{var U;const M=(U=e.state)==null?void 0:U.pendingRecording;if(M){sessionStorage.setItem(So,JSON.stringify(M)),l(M);return}const D=sessionStorage.getItem(So);if(D)try{l(JSON.parse(D))}catch{l(null)}},[e.state]),R.useEffect(()=>{(async()=>{if(c!=null&&c.subjectId)try{const D=await Ve(Ce(pe,"subjects",c.subjectId));D.exists()&&f(D.data().name||"")}catch(D){console.error("Error loading subject:",D)}})()},[c]);const P=async M=>{if(M.preventDefault(),!c){T("No pending upload found. Go back and upload again.");return}if(!m){T("Paste the HiDrive share link to continue.");return}j(!0),T("");try{const D=await fI({subjectId:c.subjectId,title:c.title,examBoard:c.examBoard,tier:c.tier,videoUrl:m,hidrivePath:c.hidrivePath,hidriveFileId:c.hidriveFileId});sessionStorage.removeItem(So);const U=(D==null?void 0:D.approvalStatus)==="approved"?"Recording added and approved!":"Recording added successfully! It will be visible to students after approval.";T(U)}catch(D){console.error("Error saving recording:",D),T("Failed to save recording")}finally{j(!1)}};return t?a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),a.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):r?c?a.jsx("div",{className:"min-h-screen bg-gray-50",children:a.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[a.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[a.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Paste HiDrive Share Link"}),a.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Your upload is complete. Create a share link in HiDrive and paste it below."})]}),a.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[a.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Recording Details"}),a.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[a.jsxs("p",{children:[a.jsx("span",{className:"font-medium",children:"Title:"})," ",c.title]}),a.jsxs("p",{children:[a.jsx("span",{className:"font-medium",children:"Subject:"})," ",h||c.subjectId]}),a.jsxs("p",{children:[a.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",c.examBoard]}),c.tier&&a.jsxs("p",{children:[a.jsx("span",{className:"font-medium",children:"Tier:"})," ",c.tier]}),c.fileName&&a.jsxs("p",{children:[a.jsx("span",{className:"font-medium",children:"File:"})," ",c.fileName]})]})]}),a.jsxs("form",{onSubmit:P,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[a.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4",children:[a.jsx("p",{children:"1) Open HiDrive and find the uploaded file."}),a.jsx("p",{children:"2) Click Share -> Create link -> Copy link."}),a.jsx("p",{children:"3) Paste the link below and click Save Recording."})]}),a.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HiDrive Share Link"}),a.jsx("input",{type:"url",value:m,onChange:M=>y(M.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://hidrive.ionos.com/lnk/...",required:!0}),w&&a.jsx("div",{className:`mt-4 p-3 rounded-md text-sm ${w.includes("successfully")||w.includes("approved")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:w}),a.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[a.jsx("button",{type:"submit",disabled:C,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:C?"Saving...":"Save Recording"}),a.jsx("button",{type:"button",onClick:()=>n("/admin"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Back to Admin"})]})]})]})}):a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:a.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center",children:[a.jsx("p",{className:"text-gray-700 mb-4",children:"No pending upload found. Please upload a file first."}),a.jsx("button",{onClick:()=>n("/admin",{replace:!0}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Back to Admin"})]})}):null}const Ro="pendingHomework";function yI(){const n=rn(),e=on(),[t,s]=R.useState(!0),[r,i]=R.useState(!1),[c,l]=R.useState(null),[h,f]=R.useState(""),[m,y]=R.useState(""),[w,T]=R.useState(""),[C,j]=R.useState(!1);R.useEffect(()=>{const M=vi(rt,async D=>{if(!D){i(!1),s(!1),n("/login",{replace:!0});return}try{const U=await Ve(Ce(pe,"admins",D.uid)),Y=U.exists()?null:await Ve(Ce(pe,"teachers",D.uid));U.exists()||Y!=null&&Y.exists()?i(!0):(i(!1),n("/login",{replace:!0}))}catch(U){console.error("Error verifying role:",U),i(!1),n("/login",{replace:!0})}finally{s(!1)}});return()=>M()},[n]),R.useEffect(()=>{var U;const M=(U=e.state)==null?void 0:U.pendingHomework;if(M){sessionStorage.setItem(Ro,JSON.stringify(M)),l(M);return}const D=sessionStorage.getItem(Ro);if(D)try{l(JSON.parse(D))}catch{l(null)}},[e.state]),R.useEffect(()=>{(async()=>{if(c!=null&&c.subjectId)try{const D=await Ve(Ce(pe,"subjects",c.subjectId));D.exists()&&f(D.data().name||"")}catch(D){console.error("Error loading subject:",D)}})()},[c]);const P=async M=>{if(M.preventDefault(),!c){T("No pending upload found. Go back and upload again.");return}if(!m){T("Paste the HiDrive share link to continue.");return}j(!0),T("");try{await mI({subjectId:c.subjectId,title:c.title,description:c.description,dueDate:c.dueDate||null,attachmentUrl:m,attachmentName:c.attachmentName||c.fileName||null,attachmentContentType:c.attachmentContentType||null,attachmentSize:c.attachmentSize||null,hidrivePath:c.hidrivePath,hidriveFileId:c.hidriveFileId}),sessionStorage.removeItem(Ro),T("Homework added successfully!")}catch(D){console.error("Error saving homework:",D),T("Failed to save homework")}finally{j(!1)}};return t?a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),a.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):r?c?a.jsx("div",{className:"min-h-screen bg-gray-50",children:a.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[a.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[a.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Paste HiDrive Share Link"}),a.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Your upload is complete. Create a share link in HiDrive and paste it below."})]}),a.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[a.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Homework Details"}),a.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[a.jsxs("p",{children:[a.jsx("span",{className:"font-medium",children:"Title:"})," ",c.title]}),a.jsxs("p",{children:[a.jsx("span",{className:"font-medium",children:"Subject:"})," ",h||c.subjectId]}),c.dueDate&&a.jsxs("p",{children:[a.jsx("span",{className:"font-medium",children:"Due:"})," ",new Date(c.dueDate).toLocaleString("en-GB")]}),c.fileName&&a.jsxs("p",{children:[a.jsx("span",{className:"font-medium",children:"File:"})," ",c.fileName]})]})]}),a.jsxs("form",{onSubmit:P,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[a.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4",children:[a.jsx("p",{children:"1) Open HiDrive and find the uploaded file."}),a.jsx("p",{children:"2) Click Share -> Create link -> Copy link."}),a.jsx("p",{children:"3) Paste the link below and click Save Homework."})]}),a.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HiDrive Share Link"}),a.jsx("input",{type:"url",value:m,onChange:M=>y(M.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://hidrive.ionos.com/lnk/...",required:!0}),w&&a.jsx("div",{className:`mt-4 p-3 rounded-md text-sm ${w.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:w}),a.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[a.jsx("button",{type:"submit",disabled:C,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:C?"Saving...":"Save Homework"}),a.jsx("button",{type:"button",onClick:()=>n("/admin"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Back to Admin"})]})]})]})}):a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:a.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center",children:[a.jsx("p",{className:"text-gray-700 mb-4",children:"No pending upload found. Please upload a file first."}),a.jsx("button",{onClick:()=>n("/admin",{replace:!0}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Back to Admin"})]})}):null}function _I(){return R.useEffect(()=>{fg()},[]),a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center px-4",children:a.jsxs("div",{className:"max-w-md w-full text-center",children:[a.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 md:p-10",children:[a.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:a.jsx(Ht,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})}),a.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Payment confirmed"}),a.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for your purchase. You will receive a confirmation email shortly with your receipt and next steps."}),a.jsxs(ze,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",children:[a.jsx(lt,{className:"h-5 w-5","aria-hidden":"true"}),"Back to home"]})]}),a.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-gray-500",children:[a.jsx(Kn,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),a.jsx("span",{className:"text-sm",children:"MySchola"})]})]})})}function xI(){return R.useEffect(()=>{mg(),pg()},[]),a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center px-4",children:a.jsxs("div",{className:"max-w-md w-full text-center",children:[a.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 md:p-10",children:[a.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:a.jsx(yp,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})}),a.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Booking confirmed"}),a.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for booking your free consultation. You will receive a confirmation email shortly with the meeting link and next steps."}),a.jsxs(ze,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",children:[a.jsx(lt,{className:"h-5 w-5","aria-hidden":"true"}),"Back to home"]})]}),a.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-gray-500",children:[a.jsx(Kn,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),a.jsx("span",{className:"text-sm",children:"MySchola"})]})]})})}const wI=[6],bI=16,vI=0,Xu=60,pm="Join our Free Flagship Live Webinar!",gm="Live GCSE strategy session for Maths, English, and Science — leave with a clear plan to raise grades fast.",EI="Google Meet link shared after registration.",II="447344193804",Zu=`https://wa.me/${II}`,eh="https://calendly.com/myscholaukwebinar/free-live-webinar";function TI({src:n,className:e}){const t=R.useRef(null);return R.useEffect(()=>{const s=t.current;if(!s)return;const r=()=>{s.readyState>=2&&(s.currentTime=.01,s.pause())};return s.addEventListener("loadedmetadata",r),s.readyState<2?s.load():r(),()=>{s.removeEventListener("loadedmetadata",r)}},[n]),a.jsxs("video",{ref:t,className:e,controls:!0,playsInline:!0,preload:"metadata",children:[a.jsx("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]})}function ko(n=new Date){const e=[],t=[];wI.forEach(f=>{const m=new Date(n),y=(f-m.getDay()+7)%7;m.setDate(m.getDate()+y),m.setHours(bI,vI,0,0);const w=new Date(m);y===0&&m<=n&&w.setDate(w.getDate()+7),e.push(w);const T=new Date(m);m>n&&T.setDate(T.getDate()-7),t.push(T)});const s=e.reduce((f,m)=>m<f?m:f),r=t.reduce((f,m)=>m>f?m:f),i=new Date(r.getTime()+Xu*6e4),c=n>=r&&n<i,l=c?r:s,h=new Date(l.getTime()+Xu*6e4);return{start:l,end:h,isLive:c}}function th(n){const e=Math.max(n-new Date,0),t=Math.floor(e/1e3),s=Math.floor(t/86400),r=Math.floor(t%86400/3600),i=Math.floor(t%3600/60),c=t%60;return{days:s,hours:r,minutes:i,seconds:c}}function AI(n){return String(n).padStart(2,"0")}function nh(n){return n.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}Z$/,"Z")}function NI(n,e){return`https://calendar.google.com/calendar/render?${new URLSearchParams({action:"TEMPLATE",text:pm,details:gm,location:EI,dates:`${nh(n)}/${nh(e)}`}).toString()}`}function SI(){const[n,e]=R.useState(()=>ko()),[t,s]=R.useState(()=>{const O=ko();return th(O.start)}),[r,i]=R.useState(()=>typeof window>"u"?!1:window.localStorage.getItem("webinarReminder")==="true"),[c,l]=R.useState(0),h=[{src:ph,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:mh,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:fh,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:dh,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:hh,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],f=h.length,m=[...h,...h,...h],y=f,w=f*2,[T,C]=R.useState(y),[j,P]=R.useState(!0),[M,D]=R.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),[U,Y]=R.useState(()=>typeof window>"u"?97:0);R.useEffect(()=>{const O=setInterval(()=>{const re=ko(),Ne=re.isLive?re.end:re.start;e(re),s(th(Ne))},1e3);return()=>clearInterval(O)},[]),R.useEffect(()=>{typeof window>"u"||window.localStorage.setItem("webinarReminder",r?"true":"false")},[r]),R.useEffect(()=>{const O=()=>{const re=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;D(re)};return O(),window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)},[]),R.useEffect(()=>{if(T<y||T>=w){P(!1);const O=T<y?T+f:T-f;C(O),requestAnimationFrame(()=>{requestAnimationFrame(()=>P(!0))})}},[T,y,w,f]),R.useEffect(()=>{if(typeof window>"u")return;let O;const re=2800,Ne=97,ae=window.performance?window.performance.now():Date.now(),Pe=it=>{const _e=it||Date.now(),Qe=Math.min((_e-ae)/re,1),et=Math.floor(Qe*Ne);Y(et),Qe<1&&(O=window.requestAnimationFrame(Pe))};return O=window.requestAnimationFrame(Pe),()=>{O&&window.cancelAnimationFrame(O)}},[]);const ue=n.start.toLocaleString(void 0,{weekday:"long",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"}),se=NI(n.start,n.end),E=`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(Zu)}`,_=O=>O===1?"Improved by 1 grade":`Improved by ${O} grades`,g=[{value:"95%",label:"Students improve grades",className:"bg-blue-600 text-blue-100"},{value:"2-3",label:"Grade improvement average",className:"bg-green-600 text-green-100"},{value:"300+",label:"Successful students",className:"bg-purple-600 text-purple-100"}],b=[{title:"One-to-One Support",description:"Personalised lessons where your child only sees the tutor. Privacy-first, focus-first.",icon:lh},{title:"Via Zoom",description:"High-quality video, interactive whiteboard, and chat support for fast progress.",icon:uh},{title:"Student Privacy",description:"Webcam and microphone are optional. Parents can monitor engagement for peace of mind.",icon:oa}],v=[{step:"01",title:"Edexcel + AQA tracker",description:"Structured amber-light tracker to pinpoint strengths and gaps fast."},{step:"02",title:"Exemplar answers",description:"Techniques aligned directly to mark schemes so students know what earns marks and how to reach Grade 9."},{step:"03",title:"Exam practice + parent evenings",description:"Regular practice, progress reviews, and clear next steps to keep improvement steady."}],I=()=>{C(O=>O-1)},x=()=>{C(O=>O+1)},$=()=>{if(window.Calendly){window.Calendly.initPopupWidget({url:eh});return}const O=document.createElement("script");O.src="https://assets.calendly.com/assets/external/widget.js",O.async=!0,O.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:eh})},document.body.appendChild(O)},X=[{q:"Who is this webinar for?",a:"Students in Years 9-11 and parents who want a clear GCSE improvement plan."},{q:"How do I get the Google Meet link?",a:"Register above and we will send the private Google Meet link by email or WhatsApp."},{q:"Will there be a recording?",a:"Yes. A private recording link is shared after the session."}];return a.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50",children:[a.jsx("div",{className:"w-full bg-[#0B3D91] text-white py-3 px-4 shadow-md relative overflow-hidden",children:a.jsx("div",{className:"relative overflow-hidden",children:a.jsx("div",{className:"flex items-center gap-6 whitespace-nowrap animate-marquee-reverse text-sm sm:text-base md:text-lg font-bold",children:Array.from({length:3}).map((O,re)=>a.jsxs("div",{className:"flex items-center gap-3 pr-6",children:[a.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs sm:text-sm uppercase tracking-wide",children:[a.jsxs("span",{className:"relative inline-flex h-2 w-2",children:[a.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75"}),a.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-white"})]}),"Attention"]}),a.jsx("span",{children:"Parents of GCSE Years 9, 10 & 11 students"}),a.jsx("span",{className:"text-white/80",children:"•"}),a.jsx("span",{className:"text-white/90",children:"Spaces are running out — join our February cohort"})]},`banner-${re}`))})})}),a.jsx("div",{className:"max-w-6xl mx-auto px-4 py-16 sm:py-20",children:a.jsxs("div",{className:"bg-white/90 rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden",children:[a.jsx("div",{className:"pointer-events-none absolute -top-32 -right-24 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl"}),a.jsx("div",{className:"pointer-events-none absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"}),a.jsxs("div",{className:"relative z-10",children:[a.jsx("div",{className:"flex flex-wrap items-center gap-3 text-blue-700 font-semibold text-sm uppercase tracking-wide",children:a.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-3 py-1",children:[a.jsx(Co,{className:"h-4 w-4","aria-hidden":"true"}),"Private Webinar Registration"]})}),a.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mt-4",children:pm}),a.jsxs("div",{className:"mt-4 w-full rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-amber-100/60 p-8 sm:p-10 shadow-sm",children:[a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("span",{className:"inline-flex w-fit items-center gap-2 rounded-full bg-red-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-red-700",children:[a.jsxs("span",{className:"relative inline-flex h-2 w-2",children:[a.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"}),a.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-red-600"})]}),"Limited seats"]}),a.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-red-700",children:gm}),a.jsx("p",{className:"text-lg sm:text-xl font-semibold text-gray-700",children:"Get a step-by-step GCSE improvement roadmap, proven exam techniques, and a clear weekly plan. Book today to secure a place for your child and receive the private Google Meet link instantly."})]}),a.jsxs("div",{className:"mt-4 flex items-center gap-2 text-sm font-semibold text-red-700",children:[a.jsx(Ht,{className:"h-4 w-4","aria-hidden":"true"}),"Only a few seats left this week"]}),a.jsx("div",{className:"mt-6 flex justify-center",children:a.jsxs("button",{type:"button",onClick:$,className:"group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 px-12 py-6 text-white text-2xl font-extrabold ring-2 ring-blue-300/40 hover:shadow-2xl hover:-translate-y-0.5 transition overflow-hidden cta-button",children:[a.jsx("span",{className:"cta-shimmer","aria-hidden":"true"}),a.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition","aria-hidden":"true"}),a.jsxs("span",{className:"relative inline-flex items-center gap-2",children:[a.jsx(sl,{className:"h-5 w-5 text-white/90","aria-hidden":"true"}),"Register for the webinar"]})]})})]}),a.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-3",children:g.map(O=>a.jsxs("div",{className:`rounded-2xl p-5 text-center shadow-md ${O.className}`,children:[a.jsx("div",{className:"text-3xl sm:text-4xl font-bold text-white",children:O.value}),a.jsx("div",{className:"mt-2 text-sm font-semibold",children:O.label})]},O.value))}),a.jsx("p",{className:"text-xs text-gray-500 mt-3",children:"Results based on historical performance. Individual outcomes vary."}),a.jsx("div",{className:"mt-8",children:a.jsxs("div",{className:"w-full rounded-2xl border border-blue-100 bg-blue-50/60 p-8 md:p-10",children:[a.jsxs("div",{className:"flex items-center justify-between gap-4",children:[a.jsxs("div",{className:"flex items-center gap-2 text-blue-700 font-semibold",children:[a.jsx(ia,{className:"h-5 w-5","aria-hidden":"true"}),n.isLive?"Live now - ends in":"Starts in"]}),n.isLive&&a.jsxs("span",{className:"inline-flex items-center gap-2 text-sm font-semibold text-red-600",children:[a.jsx("span",{className:"h-2 w-2 rounded-full bg-red-500 animate-pulse"}),"LIVE"]})]}),a.jsx("div",{className:"mt-6 grid grid-cols-4 gap-3 text-center",children:[{label:"Days",value:t.days},{label:"Hours",value:t.hours},{label:"Minutes",value:t.minutes},{label:"Seconds",value:t.seconds}].map(O=>a.jsxs("div",{className:"rounded-xl bg-white border border-blue-100 px-3 py-4 shadow-sm",children:[a.jsx("div",{className:"text-3xl sm:text-4xl font-bold text-gray-900",children:AI(O.value)}),a.jsx("div",{className:"text-xs uppercase tracking-wide text-gray-500 mt-1",children:O.label})]},O.label))}),a.jsxs("p",{className:"text-sm text-gray-600 mt-5",children:["Next webinar: ",a.jsx("span",{className:"font-semibold text-gray-900",children:ue})]}),a.jsx("p",{className:"text-sm font-semibold text-red-600 mt-2",children:"Spaces are filling up - register soon."}),a.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Time shown in your local timezone."})]})}),a.jsxs("div",{className:"mt-8 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/60 p-8 sm:p-10 shadow-sm",children:[a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx("span",{className:"inline-flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700",children:"What to expect"}),a.jsxs("h3",{className:"text-3xl sm:text-4xl font-bold text-gray-900",children:["A clear plan for measurable GCSE gains to",a.jsx("span",{className:"ml-2 text-emerald-600 text-3xl sm:text-4xl font-extrabold underline decoration-emerald-300 decoration-4 underline-offset-4 animate-soft-glow",children:"Grade 9"})]}),a.jsx("p",{className:"text-lg sm:text-xl text-gray-700 max-w-2xl",children:"Three focused steps we deliver in the webinar so families leave with a concrete action plan."})]}),a.jsx("div",{className:"mt-6 grid gap-4 md:grid-cols-3",children:v.map(O=>a.jsxs("div",{className:"rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white",children:O.step}),a.jsx("h4",{className:"text-lg sm:text-xl font-semibold text-gray-900",children:O.title})]}),a.jsx("p",{className:"mt-3 text-base sm:text-lg text-gray-700",children:O.description})]},O.step))}),a.jsxs("div",{className:"mt-6 flex items-center gap-2 text-base sm:text-lg font-semibold text-emerald-700",children:[a.jsx(Ht,{className:"h-5 w-5","aria-hidden":"true"}),"Live examples and Q&A included"]})]}),a.jsxs("div",{className:"mt-10 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-10 shadow-lg",children:[a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700",children:[a.jsx(sl,{className:"h-3.5 w-3.5","aria-hidden":"true"}),"Parents love this session"]}),a.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-gray-900 mt-3",children:"Reserve your spot now"}),a.jsx("p",{className:"text-gray-700 mt-2 max-w-2xl text-base sm:text-lg",children:"Book in under a minute and get the private Google Meet link plus the follow-up resources."})]}),a.jsx("div",{className:"flex items-center justify-center",children:a.jsx("div",{className:"relative rounded-3xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 p-[2px] shadow-lg",children:a.jsxs("div",{className:"relative flex items-center gap-4 rounded-[22px] bg-white px-7 py-5 overflow-hidden",children:[a.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-60",children:a.jsx("div",{className:"absolute -left-1/3 top-0 h-full w-1/2 rotate-6 bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent animate-pulse"})}),a.jsxs("span",{className:"absolute -top-2 -right-2 inline-flex h-4 w-4",children:[a.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),a.jsx("span",{className:"relative inline-flex h-4 w-4 rounded-full bg-emerald-500"})]}),a.jsxs("div",{className:"relative text-4xl sm:text-5xl font-extrabold text-emerald-600 tracking-tight drop-shadow-sm animate-pulse",children:[U,"%"]}),a.jsx("div",{className:"relative text-base sm:text-lg font-semibold text-gray-800",children:"Parents recommend this webinar"})]})})})]}),a.jsx("div",{className:"mt-6 grid gap-3 sm:grid-cols-3",children:["Live, interactive webinar with real examples","Action plan you can use immediately"].map(O=>a.jsxs("div",{className:"flex items-start gap-2 rounded-xl bg-white/80 px-4 py-3 text-sm font-semibold text-gray-700",children:[a.jsx(Ht,{className:"mt-0.5 h-4 w-4 text-emerald-600","aria-hidden":"true"}),a.jsx("span",{children:O})]},O))}),a.jsxs("div",{className:"mt-8",children:[a.jsx("button",{type:"button",onClick:$,className:"inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-8 py-5 text-white text-xl font-bold shadow-xl hover:bg-blue-700 transition",children:"Register for the webinar"}),a.jsx("p",{className:"text-xs text-gray-500 mt-3 text-center",children:"Secure Calendly pop-up. No card required."})]}),a.jsxs("div",{className:"mt-6 flex flex-wrap gap-3",children:[a.jsxs("a",{href:se,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition",children:[a.jsx(Co,{className:"h-4 w-4","aria-hidden":"true"}),"Add to Google Calendar"]}),a.jsxs("button",{type:"button",onClick:()=>i(O=>!O),className:`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${r?"border-green-200 text-green-700 bg-green-50":"border-gray-200 text-gray-700 hover:bg-gray-50"}`,children:[a.jsx(up,{className:"h-4 w-4","aria-hidden":"true"}),r?"Reminder set":"Set a reminder"]})]})]}),a.jsxs("div",{className:"mt-12 rounded-3xl border border-gray-200 bg-white p-8",children:[a.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700",children:[a.jsx(ch,{className:"h-4 w-4","aria-hidden":"true"}),"From our main tutoring programme"]}),a.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-900 mt-4",children:"How MySchola lessons work"}),a.jsx("p",{className:"text-gray-600 mt-2",children:"These are the same methods used in our full tutoring programme, adapted for this webinar."})]}),a.jsx("div",{className:"mt-8 grid gap-6 md:grid-cols-3",children:b.map(O=>{const re=O.icon;return a.jsxs("div",{className:"rounded-2xl border border-blue-100 bg-blue-50/60 p-6 text-left shadow-sm",children:[a.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white",children:a.jsx(re,{className:"h-6 w-6","aria-hidden":"true"})}),a.jsx("h3",{className:"mt-4 text-lg font-semibold text-gray-900",children:O.title}),a.jsx("p",{className:"mt-2 text-sm text-gray-600",children:O.description})]},O.title)})})]}),a.jsxs("div",{className:"mt-12 rounded-3xl border border-gray-200 bg-white p-8",children:[a.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[a.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-900",children:"Our tutors study at the UK's most prestigious universities"}),a.jsx("p",{className:"text-gray-600 mt-2 max-w-3xl mx-auto",children:"Learn from the best to achieve your best."})]}),a.jsx("div",{className:"relative overflow-hidden mt-8",children:a.jsxs("div",{className:"flex animate-marquee",children:[[{src:Wr,alt:"University of Nottingham",name:"Nottingham"},{src:Hr,alt:"King's College London",name:"King's College"},{src:zr,alt:"University of Cambridge",name:"Cambridge"},{src:Gr,alt:"Imperial College London",name:"Imperial"},{src:Kr,alt:"University of Warwick",name:"Warwick"}].map((O,re)=>a.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:a.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-32 sm:h-40 lg:h-44 w-56 sm:w-64 lg:w-72 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:a.jsx("img",{src:O.src,alt:O.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`first-${re}`)),[{src:Wr,alt:"University of Nottingham",name:"Nottingham"},{src:Hr,alt:"King's College London",name:"King's College"},{src:zr,alt:"University of Cambridge",name:"Cambridge"},{src:Gr,alt:"Imperial College London",name:"Imperial"},{src:Kr,alt:"University of Warwick",name:"Warwick"}].map((O,re)=>a.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:a.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-32 sm:h-40 lg:h-44 w-56 sm:w-64 lg:w-72 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:a.jsx("img",{src:O.src,alt:O.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`second-${re}`))]})})]}),a.jsx("div",{className:"mt-12 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-blue-50/70 p-8",children:a.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[a.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-900",children:"Video testimonials"}),a.jsx("p",{className:"text-gray-600 mt-2",children:"Hear directly from students and parents about their progress."}),a.jsxs("div",{className:"relative mt-10 sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[a.jsx("button",{type:"button",onClick:I,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:a.jsx(lt,{className:"h-5 w-5","aria-hidden":"true"})}),a.jsx("div",{className:"overflow-hidden sm:col-start-2",children:a.jsx("div",{className:`flex ${j?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${T*(100/M)}%)`},children:m.map((O,re)=>{const Ne=Math.floor(M/2),ae=re===T+Ne;return a.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/M}%`},children:a.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${ae?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[a.jsx(TI,{src:O.src,className:"w-full h-auto rounded-t-2xl"}),a.jsxs("div",{className:"p-4 text-center",children:[a.jsx("p",{className:"text-lg font-semibold text-gray-900",children:O.name}),a.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[a.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:O.subjects.join(" / ")}),a.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:_(O.improvedBy)})]})]})]})},`${O.id}-${re}`)})})}),a.jsx("button",{type:"button",onClick:x,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:a.jsx(Un,{className:"h-5 w-5","aria-hidden":"true"})}),a.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[a.jsx("button",{type:"button",onClick:I,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:a.jsx(lt,{className:"h-5 w-5","aria-hidden":"true"})}),a.jsx("button",{type:"button",onClick:x,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:a.jsx(Un,{className:"h-5 w-5","aria-hidden":"true"})})]})]})]})}),a.jsxs("div",{className:"mt-10 rounded-2xl border border-gray-200 p-6",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Quick FAQ"}),a.jsx("div",{className:"space-y-3",children:X.map((O,re)=>a.jsxs("div",{className:"border border-gray-100 rounded-xl",children:[a.jsxs("button",{type:"button",onClick:()=>l(c===re?-1:re),className:"w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-gray-900","aria-expanded":c===re,children:[O.q,a.jsx("span",{className:"text-blue-600",children:c===re?"-":"+"})]}),c===re&&a.jsx("div",{className:"px-4 pb-4 text-sm text-gray-600",children:O.a})]},O.q))})]}),a.jsxs("div",{className:"mt-10 rounded-2xl border border-gray-200 p-6 text-center",children:[a.jsxs("div",{className:"flex items-center justify-center gap-2 text-gray-900 font-semibold",children:[a.jsx(gn,{className:"h-5 w-5 text-green-600","aria-hidden":"true"}),"WhatsApp QR code"]}),a.jsx("p",{className:"text-gray-600 mt-3",children:"Scan to message us on WhatsApp if you have any questions."}),a.jsx("img",{src:E,alt:"WhatsApp QR code for MySchola",className:"mx-auto mt-4 h-44 w-44 rounded-lg border border-gray-100",loading:"lazy"}),a.jsx("a",{href:Zu,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-green-200 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-50 transition",children:"Open WhatsApp chat"})]}),a.jsx("div",{className:"mt-10",children:a.jsxs(ze,{to:"/",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold",children:[a.jsx(lt,{className:"h-4 w-4","aria-hidden":"true"}),"Back to home"]})})]})]})})]})}const RI=[6],kI=16,CI=0,sh=60,PI="Weekend GCSE Boost",jI="https://meet.google.com/your-meet-code",rh="https://chat.whatsapp.com/your-group-invite";function DI(n=new Date){const e=[],t=[];RI.forEach(f=>{const m=new Date(n),y=(f-m.getDay()+7)%7;m.setDate(m.getDate()+y),m.setHours(kI,CI,0,0);const w=new Date(m);y===0&&m<=n&&w.setDate(w.getDate()+7),e.push(w);const T=new Date(m);m>n&&T.setDate(T.getDate()-7),t.push(T)});const s=e.reduce((f,m)=>m<f?m:f),r=t.reduce((f,m)=>m>f?m:f),i=new Date(r.getTime()+sh*6e4),c=n>=r&&n<i,l=c?r:s,h=new Date(l.getTime()+sh*6e4);return{start:l,end:h,isLive:c}}function VI(){const n=on(),e=n.state&&n.state.fromRegistration,t=typeof window<"u"&&window.sessionStorage.getItem("webinarRegistered")==="true",s=!!(e||t),i=DI().start.toLocaleString(void 0,{weekday:"long",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"}),c=Intl.DateTimeFormat().resolvedOptions().timeZone,l=`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(rh)}`;return a.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50",children:a.jsx("div",{className:"max-w-4xl mx-auto px-4 py-16 sm:py-20",children:a.jsxs("div",{className:"bg-white/90 rounded-3xl shadow-xl p-8 sm:p-12",children:[a.jsxs("div",{className:"flex items-center gap-3 text-blue-700 font-semibold",children:[a.jsx(Ht,{className:"h-6 w-6","aria-hidden":"true"}),"Registration confirmed"]}),a.jsxs("h1",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mt-4",children:["Thanks for registering for ",PI]}),a.jsx("p",{className:"text-gray-600 mt-3",children:"We will send reminders before the webinar. Your local time is shown below."}),a.jsxs("div",{className:"mt-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-6",children:[a.jsxs("div",{className:"flex items-center gap-2 text-blue-700 font-semibold",children:[a.jsx(Co,{className:"h-5 w-5","aria-hidden":"true"}),"Next session time"]}),a.jsx("p",{className:"text-lg font-semibold text-gray-900 mt-3",children:i}),a.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Timezone: ",c]})]}),s?a.jsxs("div",{className:"mt-8 grid gap-6 md:grid-cols-2",children:[a.jsxs("div",{className:"rounded-2xl border border-gray-200 p-6",children:[a.jsxs("div",{className:"flex items-center gap-2 text-gray-900 font-semibold",children:[a.jsx(Qn,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),"Google Meet link for this week"]}),a.jsx("p",{className:"text-gray-600 mt-3",children:"Use this link at the session time. Please do not share it publicly."}),a.jsx("a",{href:jI,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition",children:"Join Google Meet session"}),a.jsx("p",{className:"text-xs text-gray-500 mt-3",children:"Update the link in `src/pages/WebinarThanks.jsx`."})]}),a.jsxs("div",{className:"rounded-2xl border border-gray-200 p-6 text-center",children:[a.jsxs("div",{className:"flex items-center justify-center gap-2 text-gray-900 font-semibold",children:[a.jsx(gn,{className:"h-5 w-5 text-green-600","aria-hidden":"true"}),"WhatsApp group chat"]}),a.jsx("p",{className:"text-gray-600 mt-3",children:"Scan to join the WhatsApp group chat for updates."}),a.jsx("img",{src:l,alt:"WhatsApp group chat QR code",className:"mx-auto mt-4 h-44 w-44 rounded-lg border border-gray-100",loading:"lazy"}),a.jsx("a",{href:rh,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-green-200 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-50 transition",children:"Open WhatsApp group"})]})]}):a.jsx("div",{className:"mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6",children:a.jsx("p",{className:"text-sm text-amber-900",children:"Please register on the webinar page to access the Google Meet link and WhatsApp group."})}),a.jsxs("div",{className:"mt-10 flex flex-wrap gap-4",children:[a.jsx(ze,{to:"/webinar",className:"inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition",children:"Back to webinar page"}),a.jsx(ze,{to:"/",className:"inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition",children:"Back to home"})]})]})})})}function OI(n){var e;return((e=n==null?void 0:n.data)==null?void 0:e.event)&&n.data.event.indexOf("calendly")===0&&n.data.event==="calendly.event_scheduled"}function MI(){const{pathname:n}=on();return R.useEffect(()=>{dg()},[n]),null}function LI(){const n=rn(),{pathname:e}=on();return R.useEffect(()=>{const t=s=>{OI(s)&&(e.startsWith("/webinar")?(typeof window<"u"&&window.sessionStorage.setItem("webinarRegistered","true"),n("/webinar/thanks",{replace:!0})):n("/booking-success",{replace:!0}))};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)},[n,e]),null}function FI(){return a.jsxs(zm,{children:[a.jsx(MI,{}),a.jsx(LI,{}),a.jsxs(Gm,{children:[a.jsx(Je,{path:"/",element:a.jsx(ol,{})}),a.jsx(Je,{path:"/booking",element:a.jsx(ol,{})}),a.jsx(Je,{path:"/login",element:a.jsx(ZE,{})}),a.jsx(Je,{path:"/payment-success",element:a.jsx(_I,{})}),a.jsx(Je,{path:"/booking-success",element:a.jsx(xI,{})}),a.jsx(Je,{path:"/admin",element:a.jsx(pI,{})}),a.jsx(Je,{path:"/admin/share-link",element:a.jsx(gI,{})}),a.jsx(Je,{path:"/admin/homework-share-link",element:a.jsx(yI,{})}),a.jsx(Je,{path:"/webinar",element:a.jsx(SI,{})}),a.jsx(Je,{path:"/webinar/thanks",element:a.jsx(VI,{})}),a.jsx(Je,{path:"/app/dashboard",element:a.jsx(No,{children:a.jsx(rI,{})})}),a.jsx(Je,{path:"/app/subject/:subjectId/recordings",element:a.jsx(No,{children:a.jsx(cI,{})})}),a.jsx(Je,{path:"/app/subject/:subjectId/homework",element:a.jsx(No,{children:a.jsx(lI,{})})})]})]})}Jm.createRoot(document.getElementById("root")).render(a.jsx(R.StrictMode,{children:a.jsx(FI,{})}));
