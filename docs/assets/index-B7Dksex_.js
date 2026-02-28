import{r as Fm,a as Um,b as R,u as nn,c as sn,L as qe,N as Bm,d as sh,B as qm,R as $m,e as Ge}from"./react-vendor-w9dygoMj.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var io={exports:{}},Ps={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc;function Wm(){if(Hc)return Ps;Hc=1;var n=Fm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(l,h,f){var m,y={},b=null,T=null;f!==void 0&&(b=""+f),h.key!==void 0&&(b=""+h.key),h.ref!==void 0&&(T=h.ref);for(m in h)s.call(h,m)&&!i.hasOwnProperty(m)&&(y[m]=h[m]);if(l&&l.defaultProps)for(m in h=l.defaultProps,h)y[m]===void 0&&(y[m]=h[m]);return{$$typeof:e,type:l,key:b,ref:T,props:y,_owner:r.current}}return Ps.Fragment=t,Ps.jsx=a,Ps.jsxs=a,Ps}var zc;function Hm(){return zc||(zc=1,io.exports=Wm()),io.exports}var c=Hm(),Tr={},Gc;function zm(){if(Gc)return Tr;Gc=1;var n=Um();return Tr.createRoot=n.createRoot,Tr.hydrateRoot=n.hydrateRoot,Tr}var Gm=zm();/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qm=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Kc=n=>{const e=Qm(n);return e.charAt(0).toUpperCase()+e.slice(1)},rh=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),Ym=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=R.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:r="",children:i,iconNode:a,...l},h)=>R.createElement("svg",{ref:h,...Jm,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:rh("lucide",r),...!i&&!Ym(l)&&{"aria-hidden":"true"},...l},[...a.map(([f,m])=>R.createElement(f,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=(n,e)=>{const t=R.forwardRef(({className:s,...r},i)=>R.createElement(Xm,{ref:i,iconNode:e,className:rh(`lucide-${Km(Kc(n))}`,`lucide-${n}`,s),...r}));return t.displayName=Kc(n),t};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],it=K("arrow-left",Zm);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Un=K("arrow-right",ep);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],np=K("atom",tp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],rp=K("award",sp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],op=K("bell",ip);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],cp=K("book-marked",ap);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],$r=K("book-open",lp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],hp=K("calculator",up);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],fp=K("calendar-check",dp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Ao=K("calendar",mp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],gp=K("check",pp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],yn=K("circle-check-big",yp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],xp=K("circle-question-mark",_p);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ea=K("clock",wp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Qc=K("download",bp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ep=K("external-link",vp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Hs=K("file-text",Ip);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Ap=K("flask-conical",Tp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Sp=K("globe",Np);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Kn=K("graduation-cap",Rp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Cp=K("history",kp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],jp=K("languages",Pp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ih=K("lock",Dp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Op=K("log-out",Vp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],oh=K("mail",Mp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Fp=K("menu",Lp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],mn=K("message-circle",Up);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],qp=K("music",Bp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Wp=K("palette",$p);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],zp=K("phone",Hp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Kp=K("play",Gp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Yc=K("save",Qp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Jp=K("sparkles",Yp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Zp=K("star",Xp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],tg=K("target",eg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],sg=K("trending-up",ng);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],ig=K("user-check",rg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Jc=K("users",og);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Qn=K("video",ag);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],lg=K("x",cg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],hg=K("zoom-in",ug),ah="/assets/testimonial1-5gwMtUAO-5gwMtUAO.mp4",ch="/assets/testimonial2-D0fw-lJA.mp4",lh="/assets/testmonial3-CD7BqzK1.mp4",uh="/assets/testimonial4-DLVnnJv5.mp4",hh="/assets/testimonial5-CpY5IMND.mp4";function dg(){typeof window<"u"&&window.fbq&&window.fbq("track","PageView")}function Xc(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booking",content_category:"GCSE Tuition"})}function Ar(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"WhatsApp Inquiry",content_category:"GCSE Tuition"})}function fg(){typeof window<"u"&&window.fbq&&window.fbq("track","Purchase",{currency:"GBP"})}function mg(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booked",content_category:"GCSE Tuition"})}function pg(){typeof window<"u"&&window.fbq&&window.fbq("track","BOOK NOW",{value:0,currency:"GBP"})}const Zc="/assets/nottingham-university-logo-Bvc07xhs.png",el="/assets/King's_College_London_logo-XbRZheqd.svg",tl="/assets/cambridge-64gH2uf-.jpg",nl="/assets/Imperial-College-Logo-CiZ74UPN.png",sl="/assets/warwick-DzXBUNN5.svg",gg="/assets/aqa-R9eUC-1Y.jpg",yg="/assets/edexcel-vector-logo-BkmWVkxU.png";function _g({src:n,className:e,showControls:t=!0}){const s=R.useRef(null);return R.useEffect(()=>{const r=s.current;if(!r)return;const i=()=>{r.readyState>=2&&(r.currentTime=.01,r.pause())};return r.addEventListener("loadedmetadata",i),r.readyState<2?r.load():i(),()=>{r.removeEventListener("loadedmetadata",i)}},[n]),c.jsxs("video",{ref:s,className:e,controls:t,playsInline:!0,preload:"metadata",children:[c.jsx("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]})}function rl(){const n=nn(),e=sn(),t=[{src:hh,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:uh,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:lh,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:ch,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:ah,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],s=t.length,r=[...t,...t,...t],i=s,a=s*2,[l,h]=R.useState(!1),[f,m]=R.useState(null),[y,b]=R.useState(!1),[T,C]=R.useState(i),[j,P]=R.useState(!0),[O,D]=R.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),F=g=>g===1?"Improved by 1 grade":`Improved by ${g} grades`;R.useEffect(()=>{const g=()=>{const v=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;D(v)};return g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]),R.useEffect(()=>{if(T<i||T>=a){P(!1);const g=T<i?T+s:T-s;C(g),requestAnimationFrame(()=>{requestAnimationFrame(()=>P(!0))})}},[T,i,a,s]);const Q=g=>{m(f===g?null:g)},ae=()=>{C(g=>g-1)},ne=()=>{C(g=>g+1)},I=()=>{const g="https://calendly.com/admin-myschola/30min",v=window.innerWidth<768;if(window.Calendly)window.Calendly.initPopupWidget({url:g,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0});else{const x=document.createElement("script");x.src="https://assets.calendly.com/assets/external/widget.js",x.async=!0,x.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:g,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0})},document.body.appendChild(x),setTimeout(()=>{window.Calendly||window.open(g,"_blank","noopener,noreferrer")},1e3)}},_=()=>{Xc(),n("/booking",{replace:!1}),I()};return R.useEffect(()=>{if(e.pathname==="/booking"&&!y){Xc(),b(!0);const g=setTimeout(()=>{I()},300);return()=>clearTimeout(g)}else e.pathname!=="/booking"&&b(!1)},[e.pathname]),c.jsxs("div",{className:"min-h-screen bg-white",children:[c.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),c.jsx("div",{className:"w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md",children:"Join our February cohort as soon as possible — spaces are running out!"}),c.jsxs("nav",{className:"sticky top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center h-16",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx(Kn,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),c.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),c.jsx("div",{className:"hidden md:flex justify-center",children:c.jsxs("div",{className:"flex items-center space-x-8",children:[c.jsx("a",{href:"#home",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),c.jsx("a",{href:"#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),c.jsx("a",{href:"#subjects",className:"text-gray-700 hover:text-blue-600 transition",children:"Subjects"}),c.jsx("a",{href:"#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),c.jsx("a",{href:"#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"})]})}),c.jsxs("div",{className:"flex items-center justify-end",children:[c.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[c.jsx(qe,{to:"/login",className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center","aria-label":"Log in",children:"Log In"}),c.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Ar,className:"bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2","aria-label":"Contact us on WhatsApp",children:[c.jsx(mn,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})]}),c.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>h(!l),"aria-label":l?"Close menu":"Open menu","aria-expanded":l,"aria-controls":"mobile-menu",children:l?c.jsx(lg,{className:"h-6 w-6","aria-hidden":"true"}):c.jsx(Fp,{className:"h-6 w-6","aria-hidden":"true"})})]})]})}),l&&c.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:c.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[c.jsx("a",{href:"#home",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),c.jsx("a",{href:"#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),c.jsx("a",{href:"#subjects",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Subjects"}),c.jsx("a",{href:"#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),c.jsx("a",{href:"#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),c.jsx(qe,{to:"/login",className:"block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",role:"menuitem",children:"Log In"}),c.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Ar,className:"block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2","aria-label":"Contact us on WhatsApp",role:"menuitem",children:c.jsxs("span",{className:"inline-flex items-center gap-2",children:[c.jsx(mn,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})})]})})]}),c.jsxs("main",{id:"main-content",children:[c.jsx("section",{id:"home",className:"pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Hero section",children:c.jsx("div",{className:"max-w-7xl mx-auto",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"relative inline-block px-2",children:c.jsxs("h1",{className:"relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6",children:["MySchola: #1 GCSE Tutoring Platform for",c.jsx("span",{className:"text-blue-600",children:" Years 9-11"})]})}),c.jsxs("p",{className:"text-lg sm:text-xl text-gray-600 mb-3 sm:mb-4 max-w-3xl mx-auto px-2",children:[c.jsx("strong",{children:"GCSE Maths, English & Science"})," via Zoom"]}),c.jsx("p",{className:"text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2",children:"Personalised lessons with one-to-one support from expert tutors. Your child only sees the teacher - no distractions, maximum focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons."}),c.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:c.jsxs("button",{type:"button",onClick:_,className:"bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation","aria-label":"Book a free consultation",children:["Book Free Consultation",c.jsx(Un,{className:"ml-2 h-5 w-5 flex-shrink-0","aria-hidden":"true"})]})})]})})}),c.jsx("section",{id:"how-it-works",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"how-it-works-heading",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsx("h2",{id:"how-it-works-heading",className:"text-4xl font-bold text-center mb-12",children:"How Our Lessons Work"}),c.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-3xl mx-auto",children:"A clear, supportive structure that keeps students confident and parents fully in the loop."}),c.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[c.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[c.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:c.jsx(ig,{className:"h-8 w-8 text-white"})}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"One-to-One Support"}),c.jsx("p",{className:"text-gray-600",children:"Personalised lessons with one-to-one support. Your child only sees the teacher, ensuring privacy and focus."})]}),c.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[c.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:c.jsx(hg,{className:"h-8 w-8 text-white"})}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Via Zoom"}),c.jsx("p",{className:"text-gray-600",children:"Convenient online lessons from the comfort of your home. High-quality video and interactive whiteboard. Webcam and microphone are optional - we use Zoom chat to check engagement, and parents can monitor participation for privacy."})]}),c.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[c.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:c.jsx(ih,{className:"h-8 w-8 text-white"})}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Student Privacy"}),c.jsx("p",{className:"text-gray-600",children:"Your child only sees the teacher. Private, secure sessions designed for maximum learning focus. Webcam and mic are optional - we use Zoom chat for communication, and parents can check engagement for privacy reasons."})]}),c.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[c.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:c.jsx(mn,{className:"h-8 w-8 text-white"})}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"24/7 Personalised Support"}),c.jsx("p",{className:"text-gray-600",children:"Students can ask questions anytime between lessons. Tutors respond with personalised explanations, feedback, and next-step guidance."})]}),c.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[c.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:c.jsx(Jc,{className:"h-8 w-8 text-white"})}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Parent Evenings"}),c.jsx("p",{className:"text-gray-600",children:"Regular parent evenings to review progress, share targets, and agree on the next steps for maximum grade improvement."})]}),c.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[c.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:c.jsx(Hs,{className:"h-8 w-8 text-white"})}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Regular Exam-Style Tests"}),c.jsx("p",{className:"text-gray-600",children:"We set regular exams and topic checks to track progress, build exam technique, and close gaps quickly."})]})]})]})}),c.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"benefits-heading",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsx("h2",{id:"benefits-heading",className:"text-4xl font-bold text-center mb-4",children:"Benefits for Parents & Students"}),c.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Why thousands of families choose MySchola for GCSE success"}),c.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx(sg,{className:"h-6 w-6 text-green-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Grade Improvement"})]}),c.jsx("p",{className:"text-gray-600",children:"Students consistently improve by 2-3 grades with our proven teaching methods and personalised approach."})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx(rp,{className:"h-6 w-6 text-blue-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Confidence Building"})]}),c.jsx("p",{className:"text-gray-600",children:"Watch your child's confidence soar as they master difficult concepts and see their progress week by week."})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx(tg,{className:"h-6 w-6 text-red-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Exam Focus"})]}),c.jsx("p",{className:"text-gray-600",children:"Targeted exam preparation with past papers, exam techniques, and strategies tailored to GCSE requirements."})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx(ea,{className:"h-6 w-6 text-purple-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Flexible Scheduling"})]}),c.jsx("p",{className:"text-gray-600",children:"Choose times that work around your family's schedule. Evening and weekend slots available."})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx(Jc,{className:"h-6 w-6 text-orange-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Expert Tutors"})]}),c.jsx("p",{className:"text-gray-600",children:"Qualified UK teachers with DBS checks and proven track records of GCSE success."})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsxs("div",{className:"flex items-center mb-3",children:[c.jsx($r,{className:"h-6 w-6 text-indigo-500 mr-2","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold",children:"Personalised Curriculum"})]}),c.jsx("p",{className:"text-gray-600",children:"Lessons tailored to your child's learning style, pace, and specific areas that need improvement."})]})]})]})}),c.jsx("section",{id:"testimonials",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"video-testimonials-heading",children:c.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[c.jsx("h2",{id:"video-testimonials-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Video Testimonials"}),c.jsx("p",{className:"text-gray-600 mb-12",children:"Short clips from students, with the subject and grade improvements below."}),c.jsxs("div",{className:"relative sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[c.jsx("button",{type:"button",onClick:ae,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:c.jsx(it,{className:"h-5 w-5","aria-hidden":"true"})}),c.jsx("div",{className:"overflow-hidden sm:col-start-2",children:c.jsx("div",{className:`flex ${j?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${T*(100/O)}%)`},children:r.map((g,v)=>{const x=Math.floor(O/2),E=v===T+x;return c.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/O}%`},children:c.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${E?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[c.jsx(_g,{src:g.src,className:"w-full h-auto rounded-t-2xl"}),c.jsxs("div",{className:"p-4 text-center",children:[c.jsx("p",{className:"text-lg font-semibold text-gray-900",children:g.name}),c.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[c.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:g.subjects.join(" / ")}),c.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:F(g.improvedBy)})]})]})]})},`${g.id}-${v}`)})})}),c.jsx("button",{type:"button",onClick:ne,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:c.jsx(Un,{className:"h-5 w-5","aria-hidden":"true"})}),c.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[c.jsx("button",{type:"button",onClick:ae,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:c.jsx(it,{className:"h-5 w-5","aria-hidden":"true"})}),c.jsx("button",{type:"button",onClick:ne,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:c.jsx(Un,{className:"h-5 w-5","aria-hidden":"true"})})]})]})]})}),c.jsx("section",{id:"text-testimonials",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"testimonials-heading",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold text-center mb-4",children:"What Parents & Students Say"}),c.jsx("p",{className:"text-center text-gray-600 mb-12",children:"Real results from real families"}),c.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-12",children:[c.jsxs("div",{className:"bg-blue-600 text-white p-6 rounded-lg text-center",children:[c.jsx("div",{className:"text-4xl font-bold mb-2",children:"95%"}),c.jsx("div",{className:"text-blue-100",children:"Students improve grades"})]}),c.jsxs("div",{className:"bg-green-600 text-white p-6 rounded-lg text-center",children:[c.jsx("div",{className:"text-4xl font-bold mb-2",children:"2-3"}),c.jsx("div",{className:"text-green-100",children:"Grade improvement average"})]}),c.jsxs("div",{className:"bg-purple-600 text-white p-6 rounded-lg text-center",children:[c.jsx("div",{className:"text-4xl font-bold mb-2",children:"300+"}),c.jsx("div",{className:"text-purple-100",children:"Successful students"})]})]}),c.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{name:"Aisha K, Parent",text:"My son started the term lacking confidence in Maths and was sitting at a Grade 5. After weekly Zoom lessons with MySchola, his understanding improved steadily and he finished the term with a Grade 7.",rating:5,result:"Maths: Grade 5 → Grade 7"},{name:"Rahul P, Parent",text:"MySchola was patient and explained the Poetry Anthology texts in a way my daughter could finally understand. Her confidence grew each week and her English grade jumped from a 5 to an 8.",rating:5,result:"English Lit: Grade 5 → Grade 8"},{name:"Emma L., Parent",text:"The confidence my son gained was incredible. He went from hating Chemistry especially Organic Chemistry to loving it. His Chemistry grade improved from 5 to 8. Worth every penny!",rating:5,result:"Chemistry: Grade 5 → Grade 8"},{name:"Michael R., Student",text:"Going through past papers and custom exam style questions with Isam and Hamza made a huge difference. Physics finally started to make sense, and I learned how to approach exam questions properly.",rating:5,result:"Physics: Grade 6 → Grade 9"},{name:"Jasmin K., Parent",text:"As a working parent, the flexible scheduling in the evenings was a lifesaver. My daughter could do sessions that fit around school and activities. Highly recommend!",rating:4,result:"Maths: Grade 6 → Grade 8"},{name:"Emmanuel P., Parent",text:"The privacy of the sessions meant my son felt comfortable making mistakes and asking for help. His confidence has grown so much, and his grades show it!",rating:5,result:"English: Grade 5 → Grade 7"}].map((g,v)=>c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsx("div",{className:"flex mb-4",children:[...Array(g.rating)].map((x,E)=>c.jsx(Zp,{className:"h-5 w-5 text-yellow-400 fill-current","aria-hidden":"true"},E))}),c.jsxs("p",{className:"text-gray-600 mb-4 italic",children:['"',g.text,'"']}),c.jsxs("div",{className:"border-t pt-4",children:[c.jsxs("p",{className:"font-semibold text-gray-900",children:["— ",g.name]}),c.jsx("p",{className:"text-sm text-blue-600 font-medium mt-1",children:g.result})]})]},v))})]})}),c.jsx("section",{id:"subjects",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"subjects-heading",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsx("h2",{id:"subjects-heading",className:"text-4xl font-bold text-center mb-4",children:"Subjects We Offer"}),c.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Comprehensive GCSE support for Years 9-11"}),c.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{name:"Maths",description:"GCSE Maths (Foundation & Higher)"},{name:"Combined Science",description:"Trilogy and Synergy pathways"},{name:"Triple Science",description:"Biology, Chemistry, and Physics"},{name:"English Language",description:"Reading, writing, and language skills"},{name:"English Literature",description:"Poetry, prose, and drama analysis"}].map(g=>c.jsx("div",{className:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600",children:c.jsxs("div",{className:"flex items-start mb-2",children:[c.jsx(gp,{className:"h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0","aria-hidden":"true"}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-semibold mb-1",children:g.name}),c.jsx("p",{className:"text-gray-600 text-sm",children:g.description})]})]})},g.name))})]})}),c.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-white","aria-labelledby":"universities-heading",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h2",{id:"universities-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Our tutors study at the UK's most prestigious universities"}),c.jsx("p",{className:"text-gray-600 max-w-3xl mx-auto",children:"Your education is everything. That's why we only hire the best in class. All of our tutors have stellar academic backgrounds and have first-hand experience with the rigorous exam process. Learn from the best to achieve your best."})]}),c.jsx("div",{className:"relative overflow-hidden",children:c.jsxs("div",{className:"flex animate-marquee",children:[[{src:Zc,alt:"University of Nottingham",name:"Nottingham"},{src:el,alt:"King's College London",name:"King's College"},{src:tl,alt:"University of Cambridge",name:"Cambridge"},{src:nl,alt:"Imperial College London",name:"Imperial"},{src:sl,alt:"University of Warwick",name:"Warwick"}].map((g,v)=>c.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:c.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-40 sm:h-48 lg:h-56 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:c.jsx("img",{src:g.src,alt:g.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`first-${v}`)),[{src:Zc,alt:"University of Nottingham",name:"Nottingham"},{src:el,alt:"King's College London",name:"King's College"},{src:tl,alt:"University of Cambridge",name:"Cambridge"},{src:nl,alt:"Imperial College London",name:"Imperial"},{src:sl,alt:"University of Warwick",name:"Warwick"}].map((g,v)=>c.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:c.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-40 sm:h-48 lg:h-56 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:c.jsx("img",{src:g.src,alt:g.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`second-${v}`))]})})]})}),c.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"exam-boards-heading",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h2",{id:"exam-boards-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Expert tuition for every exam board"}),c.jsx("p",{className:"text-gray-600 max-w-3xl mx-auto",children:"Unlock academic success with tailored support across every exam board. Our team of expert tutors knows the ins and outs of each curriculum, offering customized guidance that fits your exact syllabus."})]}),c.jsx("div",{className:"relative overflow-hidden",children:c.jsx("div",{className:"flex animate-marquee-reverse",children:[...Array(3)].map((g,v)=>[{src:gg,alt:"AQA",name:"AQA"},{src:yg,alt:"Edexcel",name:"Edexcel"}].map((x,E)=>c.jsx("div",{className:"flex-shrink-0 mx-6 sm:mx-8 lg:mx-10",children:c.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 h-44 sm:h-52 lg:h-60 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:c.jsx("img",{src:x.src,alt:x.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`set-${v}-${E}`)))})})]})}),c.jsx("section",{id:"book-call",className:"py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600","aria-labelledby":"book-call-heading",children:c.jsxs("div",{className:"max-w-4xl mx-auto text-center text-white",children:[c.jsx("h2",{id:"book-call-heading",className:"text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 px-2",children:"Ready to Start Your Child's GCSE Success Journey?"}),c.jsx("p",{className:"text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-2",children:"Book a free consultation to discuss your child's needs and see how we can help them achieve their goals."}),c.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:c.jsxs("button",{type:"button",onClick:_,className:"bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 active:bg-gray-200 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation","aria-label":"Book a free consultation",children:["Book Free Consultation",c.jsx(Un,{className:"ml-2 h-5 w-5 flex-shrink-0","aria-hidden":"true"})]})}),c.jsx("p",{className:"text-blue-100 text-sm mt-6",children:"No card required • Free 15-minute consultation"})]})}),c.jsx("section",{id:"faq",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"faq-heading",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h2",{id:"faq-heading",className:"text-4xl font-bold text-center mb-12",children:"Frequently Asked Questions"}),c.jsx("div",{className:"space-y-4",children:[{q:"How do the Zoom lessons work?",a:"Each lesson feels one-to-one via Zoom. Your child will see only the teacher, ensuring privacy and focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We use interactive whiteboards and screen sharing to make lessons engaging and effective. All sessions are recorded for your child to review later."},{q:"What equipment do we need?",a:"You just need a computer, tablet, or laptop with a stable internet connection. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We recommend using a desktop or laptop for the best experience with the interactive whiteboard."},{q:"How long are the sessions?",a:"All lessons are 60 minutes and this duration is fixed."},{q:"Can I choose the tutor?",a:"Yes! During your consultation, we'll discuss your child's learning style and match them with the best tutor. You can also request specific tutors based on availability."},{q:"What if my child misses a session?",a:"All sessions are recorded and uploaded. If your child misses a lesson, they can watch the recording at their convenience. You can ask any questions through our WhatsApp support, available 24/7."},{q:"Do you provide homework and practice materials?",a:"Absolutely! Each tutor provides tailored homework assignments, practice papers, and additional resources to reinforce learning between sessions. All materials are included in the lesson price."},{q:"How quickly will we see results?",a:"Most students see improvement within 4-6 weeks of regular sessions. However, every child is different. We track progress regularly and adjust our approach to ensure maximum effectiveness."},{q:"What age groups do you teach?",a:"We specialize in Years 9-11, preparing students for GCSEs. This includes both Foundation and Higher tier courses across all major GCSE subjects."}].map((g,v)=>c.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[c.jsxs("button",{className:"w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",onClick:()=>Q(v),"aria-expanded":f===v,"aria-controls":`faq-answer-${v}`,id:`faq-question-${v}`,children:[c.jsxs("span",{className:"font-semibold text-gray-900 flex items-center",children:[c.jsx(xp,{className:"h-5 w-5 text-blue-600 mr-2","aria-hidden":"true"}),g.q]}),c.jsx("span",{className:"text-blue-600","aria-hidden":"true","aria-label":f===v?"Collapse answer":"Expand answer",children:f===v?"−":"+"})]}),f===v&&c.jsx("div",{id:`faq-answer-${v}`,className:"px-6 pb-4 text-gray-600",role:"region","aria-labelledby":`faq-question-${v}`,children:g.a})]},v))})]})}),c.jsx("section",{id:"contact",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"contact-heading",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h2",{id:"contact-heading",className:"text-4xl font-bold text-center mb-12",children:"Get in Touch"}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsx(oh,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Email Us"}),c.jsx("a",{href:"mailto:support@myschola.uk",className:"text-gray-600 hover:text-blue-600 transition",children:"support@myschola.uk"})]}),c.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[c.jsx(zp,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),c.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Call Us"}),c.jsx("a",{href:"tel:+447344193804",className:"text-gray-600 hover:text-blue-600 transition",children:"+44 7344 193804"}),c.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Mon-Fri 9am-6pm"})]})]})]})}),c.jsx("section",{id:"privacy-policy",className:"py-20 px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Privacy Policy"}),c.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Information We Collect"}),c.jsx("p",{children:"We collect information that you provide directly to us, including your name, email address, phone number, and information about your child's educational needs. We also collect information automatically when you use our services, such as session recordings and progress data."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. How We Use Your Information"}),c.jsx("p",{children:"We use the information we collect to provide, maintain, and improve our tutoring services, process your bookings, communicate with you, and ensure the safety and security of our platform."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Data Security"}),c.jsx("p",{children:"We implement appropriate technical and organizational measures to protect your personal information. All tutors are DBS checked, and all Zoom sessions are encrypted and secure."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Session Recordings"}),c.jsx("p",{children:"Lessons may be recorded for educational purposes and quality assurance. Recordings are stored securely and are accessible only to authorized personnel and the student's account."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Your Rights"}),c.jsx("p",{children:"You have the right to access, update, or delete your personal information at any time. You can also request a copy of your data or withdraw consent for data processing."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Children's Privacy"}),c.jsx("p",{children:"We take children's privacy seriously. We only collect information necessary to provide our services, and all data handling complies with UK GDPR and Children's Code requirements."})]}),c.jsx("div",{children:c.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})}),c.jsx("section",{id:"terms-of-service",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Terms of Service"}),c.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Service Agreement"}),c.jsx("p",{children:"By booking a lesson or consultation with MySchola, you agree to these terms of service. Our services include feel one-to-one tutoring delivered via Zoom for students in Years 9-11."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. Booking and Cancellation"}),c.jsx("p",{children:"Lessons must be booked in advance. Cancellation policies only apply to pay-as-you-go bookings. For bundle purchases, if your child misses a lesson, they can watch the recorded video and ask any questions through our WhatsApp support, available 24/7."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Payment Terms"}),c.jsx("p",{children:"Payment is required in advance for lesson packages. We accept payment via Stripe. Refunds for unused lessons in a package will be calculated on a pro-rata basis, minus any applicable fees."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Tutor Matching"}),c.jsx("p",{children:"We strive to match students with the most suitable tutor. However, if you're not satisfied after the first session, we offer a free replacement tutor or full refund."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Student Conduct"}),c.jsx("p",{children:"Students are expected to attend lessons punctually, be respectful to tutors, and engage actively in learning. Any inappropriate behavior may result in session termination without refund."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Technical Requirements"}),c.jsx("p",{children:"You are responsible for ensuring you have adequate internet connection and equipment for Zoom sessions. Note that webcam and microphone are optional - not needed. We use Zoom chat to check engagement, and parents can monitor participation for privacy reasons. We are not liable for technical issues on your end, though we'll do our best to accommodate."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"7. Guarantees"}),c.jsx("p",{children:"While we work hard to help students achieve their goals, we cannot guarantee specific grade improvements as results depend on multiple factors including student effort, attendance, and engagement."})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"8. Intellectual Property"}),c.jsx("p",{children:"All teaching materials, resources, and session recordings are the intellectual property of MySchola and are for the personal use of the enrolled student only."})]}),c.jsx("div",{children:c.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})})]}),c.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center mb-4",children:[c.jsx(Kn,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),c.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),c.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 9-11 via Zoom."})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),c.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[c.jsx("li",{children:c.jsx("a",{href:"#home",className:"hover:text-white transition",children:"Home"})}),c.jsx("li",{children:c.jsx("a",{href:"#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),c.jsx("li",{children:c.jsx("a",{href:"#subjects",className:"hover:text-white transition",children:"Subjects"})}),c.jsx("li",{children:c.jsx("a",{href:"#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),c.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[c.jsx("li",{children:c.jsx("a",{href:"#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),c.jsx("li",{children:c.jsx("a",{href:"#terms-of-service",className:"hover:text-white transition",children:"Terms of Service"})}),c.jsx("li",{children:c.jsx("a",{href:"#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),c.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[c.jsx("li",{children:c.jsx("a",{href:"mailto:support@myschola.uk",className:"hover:text-white transition",children:"support@myschola.uk"})}),c.jsx("li",{children:c.jsx("a",{href:"tel:+447344193804",className:"hover:text-white transition",children:"+44 7344 193804"})}),c.jsx("li",{children:c.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Ar,className:"text-green-400 hover:text-green-300 transition inline-flex items-center gap-2",children:[c.jsx(mn,{className:"h-4 w-4","aria-hidden":"true"}),"Contact Us on WhatsApp"]})}),c.jsx("li",{children:c.jsx("button",{type:"button",onClick:_,className:"bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation text-sm sm:text-base","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),c.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:c.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 9-11."]})})]})}),c.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Ar,className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation","aria-label":"Contact us on WhatsApp",children:c.jsx(mn,{className:"h-5 w-5 sm:h-6 sm:w-6","aria-hidden":"true"})})]})}const xg=()=>{};var il={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},wg=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],l=n[t++],h=((r&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},fh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,l=a?n[r+1]:0,h=r+2<n.length,f=h?n[r+2]:0,m=i>>2,y=(i&3)<<4|l>>4;let b=(l&15)<<2|f>>6,T=f&63;h||(T=64,a||(b=64)),s.push(t[m],t[y],t[b],t[T])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(dh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const f=r<n.length?t[n.charAt(r)]:64;++r;const y=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||l==null||f==null||y==null)throw new bg;const b=i<<2|l>>4;if(s.push(b),f!==64){const T=l<<4&240|f>>2;if(s.push(T),y!==64){const C=f<<6&192|y;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vg=function(n){const e=dh(n);return fh.encodeByteArray(e,!0)},Wr=function(n){return vg(n).replace(/\./g,"")},mh=function(n){try{return fh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Ig=()=>Eg().__FIREBASE_DEFAULTS__,Tg=()=>{if(typeof process>"u"||typeof il>"u")return;const n=il.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ag=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&mh(n[1]);return e&&JSON.parse(e)},fi=()=>{try{return xg()||Ig()||Tg()||Ag()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ph=n=>{var e,t;return(t=(e=fi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Ng=n=>{const e=ph(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},gh=()=>{var n;return(n=fi())==null?void 0:n.config},yh=n=>{var e;return(e=fi())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function ss(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _h(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Rg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Wr(JSON.stringify(t)),Wr(JSON.stringify(a)),""].join(".")}const Fs={};function kg(){const n={prod:[],emulator:[]};for(const e of Object.keys(Fs))Fs[e]?n.emulator.push(e):n.prod.push(e);return n}function Cg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ol=!1;function xh(n,e){if(typeof window>"u"||typeof document>"u"||!ss(window.location.host)||Fs[n]===e||Fs[n]||ol)return;Fs[n]=e;function t(b){return`__firebase__banner__${b}`}const s="__firebase__banner",i=kg().prod.length>0;function a(){const b=document.getElementById(s);b&&b.remove()}function l(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function h(b,T){b.setAttribute("width","24"),b.setAttribute("id",T),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function f(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{ol=!0,a()},b}function m(b,T){b.setAttribute("id",T),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function y(){const b=Cg(s),T=t("text"),C=document.getElementById(T)||document.createElement("span"),j=t("learnmore"),P=document.getElementById(j)||document.createElement("a"),O=t("preprendIcon"),D=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const F=b.element;l(F),m(P,j);const Q=f();h(D,O),F.append(D,C,P,Q),document.body.appendChild(F)}i?(C.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function jg(){var e;const n=(e=fi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Og(){const n=Fe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Mg(){return!jg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bh(){try{return typeof indexedDB=="object"}catch{return!1}}function vh(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function Lg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="FirebaseError";class lt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Fg,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tn.prototype.create)}}class Tn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Ug(i,s):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new lt(r,l,s)}}function Ug(n,e){return n.replace(Bg,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Bg=/\{\$([^}]+)}/g;function qg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Qt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(al(i)&&al(a)){if(!Qt(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function al(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function js(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ds(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function $g(n,e){const t=new Wg(n,e);return t.subscribe.bind(t)}class Wg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Hg(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=oo),r.error===void 0&&(r.error=oo),r.complete===void 0&&(r.complete=oo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function oo(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=1e3,Gg=2,Kg=14400*1e3,Qg=.5;function cl(n,e=zg,t=Gg){const s=e*Math.pow(t,n),r=Math.round(Qg*s*(Math.random()-.5)*2);return Math.min(Kg,s+r)}/**
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
 */function ye(n){return n&&n._delegate?n._delegate:n}class ot{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Sg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xg(e))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fn){return this.instances.has(e)}getOptions(e=fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Jg(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fn){return this.component?this.component.multipleInstances?e:fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jg(n){return n===fn?void 0:n}function Xg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const ey={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},ty=J.INFO,ny={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},sy=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=ny[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mi{constructor(e){this.name=e,this._logLevel=ty,this._logHandler=sy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ey[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const ry=(n,e)=>e.some(t=>n instanceof t);let ll,ul;function iy(){return ll||(ll=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oy(){return ul||(ul=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eh=new WeakMap,No=new WeakMap,Ih=new WeakMap,ao=new WeakMap,ta=new WeakMap;function ay(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Wt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Eh.set(t,n)}).catch(()=>{}),ta.set(e,n),e}function cy(n){if(No.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});No.set(n,e)}let So={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return No.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ih.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ly(n){So=n(So)}function uy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(co(this),e,...t);return Ih.set(s,e.sort?e.sort():[e]),Wt(s)}:oy().includes(n)?function(...e){return n.apply(co(this),e),Wt(Eh.get(this))}:function(...e){return Wt(n.apply(co(this),e))}}function hy(n){return typeof n=="function"?uy(n):(n instanceof IDBTransaction&&cy(n),ry(n,iy())?new Proxy(n,So):n)}function Wt(n){if(n instanceof IDBRequest)return ay(n);if(ao.has(n))return ao.get(n);const e=hy(n);return e!==n&&(ao.set(n,e),ta.set(e,n)),e}const co=n=>ta.get(n);function Th(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),l=Wt(a);return s&&a.addEventListener("upgradeneeded",h=>{s(Wt(a.result),h.oldVersion,h.newVersion,Wt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{i&&h.addEventListener("close",()=>i()),r&&h.addEventListener("versionchange",f=>r(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const dy=["get","getKey","getAll","getAllKeys","count"],fy=["put","add","delete","clear"],lo=new Map;function hl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(lo.get(e))return lo.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=fy.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||dy.includes(t)))return;const i=async function(a,...l){const h=this.transaction(a,r?"readwrite":"readonly");let f=h.store;return s&&(f=f.index(l.shift())),(await Promise.all([f[t](...l),r&&h.done]))[0]};return lo.set(e,i),i}ly(n=>({...n,get:(e,t,s)=>hl(e,t)||n.get(e,t,s),has:(e,t)=>!!hl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(py(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function py(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ro="@firebase/app",dl="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new mi("@firebase/app"),gy="@firebase/app-compat",yy="@firebase/analytics-compat",_y="@firebase/analytics",xy="@firebase/app-check-compat",wy="@firebase/app-check",by="@firebase/auth",vy="@firebase/auth-compat",Ey="@firebase/database",Iy="@firebase/data-connect",Ty="@firebase/database-compat",Ay="@firebase/functions",Ny="@firebase/functions-compat",Sy="@firebase/installations",Ry="@firebase/installations-compat",ky="@firebase/messaging",Cy="@firebase/messaging-compat",Py="@firebase/performance",jy="@firebase/performance-compat",Dy="@firebase/remote-config",Vy="@firebase/remote-config-compat",Oy="@firebase/storage",My="@firebase/storage-compat",Ly="@firebase/firestore",Fy="@firebase/ai",Uy="@firebase/firestore-compat",By="firebase",qy="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="[DEFAULT]",$y={[Ro]:"fire-core",[gy]:"fire-core-compat",[_y]:"fire-analytics",[yy]:"fire-analytics-compat",[wy]:"fire-app-check",[xy]:"fire-app-check-compat",[by]:"fire-auth",[vy]:"fire-auth-compat",[Ey]:"fire-rtdb",[Iy]:"fire-data-connect",[Ty]:"fire-rtdb-compat",[Ay]:"fire-fn",[Ny]:"fire-fn-compat",[Sy]:"fire-iid",[Ry]:"fire-iid-compat",[ky]:"fire-fcm",[Cy]:"fire-fcm-compat",[Py]:"fire-perf",[jy]:"fire-perf-compat",[Dy]:"fire-rc",[Vy]:"fire-rc-compat",[Oy]:"fire-gcs",[My]:"fire-gcs-compat",[Ly]:"fire-fst",[Uy]:"fire-fst-compat",[Fy]:"fire-vertex","fire-js":"fire-js",[By]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Map,Wy=new Map,Co=new Map;function fl(n,e){try{n.container.addComponent(e)}catch(t){St.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bt(n){const e=n.name;if(Co.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;Co.set(e,n);for(const t of Hr.values())fl(t,n);for(const t of Wy.values())fl(t,n);return!0}function An(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function nt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new Tn("app","Firebase",Hy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=qy;function Ah(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:ko,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Ht.create("bad-app-name",{appName:String(r)});if(t||(t=gh()),!t)throw Ht.create("no-options");const i=Hr.get(r);if(i){if(Qt(t,i.options)&&Qt(s,i.config))return i;throw Ht.create("duplicate-app",{appName:r})}const a=new Zg(r);for(const h of Co.values())a.addComponent(h);const l=new zy(t,s,a);return Hr.set(r,l),l}function na(n=ko){const e=Hr.get(n);if(!e&&n===ko&&gh())return Ah();if(!e)throw Ht.create("no-app",{appName:n});return e}function et(n,e,t){let s=$y[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(a.join(" "));return}bt(new ot(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Gy="firebase-heartbeat-database",Ky=1,zs="firebase-heartbeat-store";let uo=null;function Nh(){return uo||(uo=Th(Gy,Ky,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),uo}async function Qy(n){try{const t=(await Nh()).transaction(zs),s=await t.objectStore(zs).get(Sh(n));return await t.done,s}catch(e){if(e instanceof lt)St.warn(e.message);else{const t=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(t.message)}}}async function ml(n,e){try{const s=(await Nh()).transaction(zs,"readwrite");await s.objectStore(zs).put(e,Sh(n)),await s.done}catch(t){if(t instanceof lt)St.warn(t.message);else{const s=Ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});St.warn(s.message)}}}function Sh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Yy=1024,Jy=30;class Xy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new e_(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Jy){const a=t_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){St.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=pl(),{heartbeatsToSend:s,unsentEntries:r}=Zy(this._heartbeatsCache.heartbeats),i=Wr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return St.warn(t),""}}}function pl(){return new Date().toISOString().substring(0,10)}function Zy(n,e=Yy){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),gl(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),gl(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class e_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bh()?vh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Qy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ml(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ml(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gl(n){return Wr(JSON.stringify({version:2,heartbeats:n})).length}function t_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(n){bt(new ot("platform-logger",e=>new my(e),"PRIVATE")),bt(new ot("heartbeat",e=>new Xy(e),"PRIVATE")),et(Ro,dl,n),et(Ro,dl,"esm2020"),et("fire-js","")}n_("");var s_="firebase",r_="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et(s_,r_,"app");function Rh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const i_=Rh,kh=new Tn("auth","Firebase",Rh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new mi("@firebase/auth");function o_(n,...e){zr.logLevel<=J.WARN&&zr.warn(`Auth (${rs}): ${n}`,...e)}function jr(n,...e){zr.logLevel<=J.ERROR&&zr.error(`Auth (${rs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n,...e){throw sa(n,...e)}function pt(n,...e){return sa(n,...e)}function Ch(n,e,t){const s={...i_(),[e]:t};return new Tn("auth","Firebase",s).create(e,{appName:n.name})}function zt(n){return Ch(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sa(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return kh.create(n,...e)}function $(n,e,...t){if(!n)throw sa(e,...t)}function It(n){const e="INTERNAL ASSERTION FAILED: "+n;throw jr(e),new Error(e)}function Rt(n,e){n||It(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function a_(){return yl()==="http:"||yl()==="https:"}function yl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(a_()||wh()||"connection"in navigator)?navigator.onLine:!0}function l_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rt(t>e,"Short delay should be less than long delay!"),this.isMobile=Pg()||Vg()}get(){return c_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n,e){Rt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const h_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],d_=new ir(3e4,6e4);function Nn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function rn(n,e,t,s,r={}){return jh(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const l=rr({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:h,...i};return Dg()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&ss(n.emulatorConfig.host)&&(f.credentials="include"),Ph.fetch()(await Dh(n,n.config.apiHost,t,l),f)})}async function jh(n,e,t){n._canInitEmulator=!1;const s={...u_,...e};try{const r=new m_(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Nr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[h,f]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Nr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Nr(n,"user-disabled",a);const m=s[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ch(n,m,f);at(n,m)}}catch(r){if(r instanceof lt)throw r;at(n,"network-request-failed",{message:String(r)})}}async function pi(n,e,t,s,r={}){const i=await rn(n,e,t,s,r);return"mfaPendingCredential"in i&&at(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Dh(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?ra(n.config,r):`${n.config.apiScheme}://${r}`;return h_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function f_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class m_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(pt(this.auth,"network-request-failed")),d_.get())})}}function Nr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=pt(n,e,s);return r.customData._tokenResponse=t,r}function _l(n){return n!==void 0&&n.enterprise!==void 0}class p_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return f_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function g_(n,e){return rn(n,"GET","/v2/recaptchaConfig",Nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(n,e){return rn(n,"POST","/v1/accounts:delete",e)}async function Gr(n,e){return rn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function __(n,e=!1){const t=ye(n),s=await t.getIdToken(e),r=ia(s);$(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Us(ho(r.auth_time)),issuedAtTime:Us(ho(r.iat)),expirationTime:Us(ho(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ho(n){return Number(n)*1e3}function ia(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return jr("JWT malformed, contained fewer than 3 sections"),null;try{const r=mh(t);return r?JSON.parse(r):(jr("Failed to decode base64 JWT payload"),null)}catch(r){return jr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function xl(n){const e=ia(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof lt&&x_(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function x_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(n){var y;const e=n.auth,t=await n.getIdToken(),s=await Gs(n,Gr(e,{idToken:t}));$(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(y=r.providerUserInfo)!=null&&y.length?Vh(r.providerUserInfo):[],a=v_(n.providerData,i),l=n.isAnonymous,h=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),f=l?h:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new jo(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function b_(n){const e=ye(n);await Kr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function v_(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Vh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E_(n,e){const t=await jh(n,{},async()=>{const s=rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await Dh(n,r,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:s};return n.emulatorConfig&&ss(n.emulatorConfig.host)&&(h.credentials="include"),Ph.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function I_(n,e){return rn(n,"POST","/v2/accounts:revokeToken",Nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=xl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await E_(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new qn;return s&&($(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&($(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&($(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qn,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class st{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new w_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new jo(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Gs(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return __(this,e)}reload(){return b_(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new st({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Kr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nt(this.auth.app))return Promise.reject(zt(this.auth));const e=await this.getIdToken();return await Gs(this,y_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,h=t._redirectEventId??void 0,f=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:y,emailVerified:b,isAnonymous:T,providerData:C,stsTokenManager:j}=t;$(y&&j,e,"internal-error");const P=qn.fromJSON(this.name,j);$(typeof y=="string",e,"internal-error"),Lt(s,e.name),Lt(r,e.name),$(typeof b=="boolean",e,"internal-error"),$(typeof T=="boolean",e,"internal-error"),Lt(i,e.name),Lt(a,e.name),Lt(l,e.name),Lt(h,e.name),Lt(f,e.name),Lt(m,e.name);const O=new st({uid:y,auth:e,email:r,emailVerified:b,displayName:s,isAnonymous:T,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:P,createdAt:f,lastLoginAt:m});return C&&Array.isArray(C)&&(O.providerData=C.map(D=>({...D}))),h&&(O._redirectEventId=h),O}static async _fromIdTokenResponse(e,t,s=!1){const r=new qn;r.updateFromServerResponse(t);const i=new st({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Kr(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];$(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Vh(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new qn;l.updateFromIdToken(s);const h=new st({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new jo(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new Map;function Tt(n){Rt(n instanceof Function,"Expected a class definition");let e=wl.get(n);return e?(Rt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,wl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Oh.type="NONE";const bl=Oh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n,e,t){return`firebase:${n}:${e}:${t}`}class $n{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Dr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Dr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Gr(this.auth,{idToken:e}).catch(()=>{});return t?st._fromGetAccountInfoResponse(this.auth,t,e):null}return st._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new $n(Tt(bl),e,s);const r=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=r[0]||Tt(bl);const a=Dr(s,e.config.apiKey,e.name);let l=null;for(const f of t)try{const m=await f._get(a);if(m){let y;if(typeof m=="string"){const b=await Gr(e,{idToken:m}).catch(()=>{});if(!b)break;y=await st._fromGetAccountInfoResponse(e,b,m)}else y=st._fromJSON(e,m);f!==i&&(l=y),i=f;break}}catch{}const h=r.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!h.length?new $n(i,e,s):(i=h[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async f=>{if(f!==i)try{await f._remove(a)}catch{}})),new $n(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qh(e))return"Blackberry";if($h(e))return"Webos";if(Lh(e))return"Safari";if((e.includes("chrome/")||Fh(e))&&!e.includes("edge/"))return"Chrome";if(Bh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Mh(n=Fe()){return/firefox\//i.test(n)}function Lh(n=Fe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fh(n=Fe()){return/crios\//i.test(n)}function Uh(n=Fe()){return/iemobile/i.test(n)}function Bh(n=Fe()){return/android/i.test(n)}function qh(n=Fe()){return/blackberry/i.test(n)}function $h(n=Fe()){return/webos/i.test(n)}function oa(n=Fe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function T_(n=Fe()){var e;return oa(n)&&!!((e=window.navigator)!=null&&e.standalone)}function A_(){return Og()&&document.documentMode===10}function Wh(n=Fe()){return oa(n)||Bh(n)||$h(n)||qh(n)||/windows phone/i.test(n)||Uh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(n,e=[]){let t;switch(n){case"Browser":t=vl(Fe());break;case"Worker":t=`${vl(Fe())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${rs}/${s}`}/**
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
 */class N_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,l)=>{try{const h=e(i);a(h)}catch(h){l(h)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function S_(n,e={}){return rn(n,"GET","/v2/passwordPolicy",Nn(n,e))}/**
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
 */class C_{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new El(this),this.idTokenSubscription=new El(this),this.beforeStateQueue=new N_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tt(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await $n.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gr(this,{idToken:e}),s=await st._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(nt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===l)&&(h!=null&&h.user)&&(s=h.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Kr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=l_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nt(this.app))return Promise.reject(zt(this));const t=e?ye(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nt(this.app)?Promise.reject(zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nt(this.app)?Promise.reject(zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await S_(this),t=new k_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Tn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await I_(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Tt(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await $n.create(this,[Tt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,s,r);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&o_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function is(n){return ye(n)}class El{constructor(e){this.auth=e,this.observer=null,this.addObserver=$g(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function P_(n){gi=n}function zh(n){return gi.loadJS(n)}function j_(){return gi.recaptchaEnterpriseScript}function D_(){return gi.gapiScript}function V_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class O_{constructor(){this.enterprise=new M_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class M_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const L_="recaptcha-enterprise",Gh="NO_RECAPTCHA";class F_{constructor(e){this.type=L_,this.auth=is(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{g_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new p_(h);return i.tenantId==null?i._agentRecaptchaConfig=f:i._tenantRecaptchaConfigs[i.tenantId]=f,a(f.siteKey)}}).catch(h=>{l(h)})})}function r(i,a,l){const h=window.grecaptcha;_l(h)?h.enterprise.ready(()=>{h.enterprise.execute(i,{action:e}).then(f=>{a(f)}).catch(()=>{a(Gh)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new O_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(l=>{if(!t&&_l(window.grecaptcha))r(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=j_();h.length!==0&&(h+=l),zh(h).then(()=>{r(l,i,a)}).catch(f=>{a(f)})}}).catch(l=>{a(l)})})}}async function Il(n,e,t,s=!1,r=!1){const i=new F_(n);let a;if(r)a=Gh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const h=l.phoneEnrollmentInfo.phoneNumber,f=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:f,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const h=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Tl(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Il(n,e,t,t==="getOobCode");return s(n,a)}else return s(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Il(n,e,t,t==="getOobCode");return s(n,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(n,e){const t=An(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Qt(i,e??{}))return r;at(r,"already-initialized")}return t.initialize({options:e})}function B_(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Tt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function q_(n,e,t){const s=is(n);$(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Kh(e),{host:a,port:l}=$_(e),h=l===null?"":`:${l}`,f={url:`${i}//${a}${h}/`},m=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){$(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),$(Qt(f,s.config.emulator)&&Qt(m,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=f,s.emulatorConfig=m,s.settings.appVerificationDisabledForTesting=!0,ss(a)?(_h(`${i}//${a}${h}`),xh("Auth",!0)):W_()}function Kh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function $_(n){const e=Kh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Al(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:Al(a)}}}function Al(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function W_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,t){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function H_(n,e){return rn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(n,e){return pi(n,"POST","/v1/accounts:signInWithPassword",Nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(n,e){return pi(n,"POST","/v1/accounts:signInWithEmailLink",Nn(n,e))}async function K_(n,e){return pi(n,"POST","/v1/accounts:signInWithEmailLink",Nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends aa{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ks(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ks(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tl(e,t,"signInWithPassword",z_);case"emailLink":return G_(e,{email:this._email,oobCode:this._password});default:at(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tl(e,s,"signUpPassword",H_);case"emailLink":return K_(e,{idToken:t,email:this._email,oobCode:this._password});default:at(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(n,e){return pi(n,"POST","/v1/accounts:signInWithIdp",Nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_="http://localhost";class xn extends aa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):at("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const a=new xn(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Wn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Wn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wn(e,t)}buildRequest(){const e={requestUri:Q_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function J_(n){const e=js(Ds(n)).link,t=e?js(Ds(e)).deep_link_id:null,s=js(Ds(n)).deep_link_id;return(s?js(Ds(s)).link:null)||s||t||e||n}class ca{constructor(e){const t=js(Ds(e)),s=t.apiKey??null,r=t.oobCode??null,i=Y_(t.mode??null);$(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=J_(e);try{return new ca(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.providerId=os.PROVIDER_ID}static credential(e,t){return Ks._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ca.parseLink(t);return $(s,"argument-error"),Ks._fromEmailAndCode(e,s.code,s.tenantId)}}os.PROVIDER_ID="password";os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Qh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends or{constructor(){super("facebook.com")}static credential(e){return xn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends or{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ut.credential(t,s)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends or{constructor(){super("github.com")}static credential(e){return xn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends or{constructor(){super("twitter.com")}static credential(e,t){return xn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return qt.credential(t,s)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await st._fromIdTokenResponse(e,s,r),a=Nl(s);return new Yn({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Nl(s);return new Yn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Nl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends lt{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Qr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Qr(e,t,s,r)}}function Yh(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qr._fromErrorAndOperation(n,i,e,s):i})}async function X_(n,e,t=!1){const s=await Gs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yn._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(n,e,t=!1){const{auth:s}=n;if(nt(s.app))return Promise.reject(zt(s));const r="reauthenticate";try{const i=await Gs(n,Yh(s,r,e,n),t);$(i.idToken,s,"internal-error");const a=ia(i.idToken);$(a,s,"internal-error");const{sub:l}=a;return $(n.uid===l,s,"user-mismatch"),Yn._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&at(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jh(n,e,t=!1){if(nt(n.app))return Promise.reject(zt(n));const s="signIn",r=await Yh(n,s,e),i=await Yn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function e0(n,e){return Jh(is(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(n){const e=is(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function n0(n,e,t){return nt(n.app)?Promise.reject(zt(n)):e0(ye(n),os.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&t0(n),s})}function s0(n,e,t,s){return ye(n).onIdTokenChanged(e,t,s)}function r0(n,e,t){return ye(n).beforeAuthStateChanged(e,t)}function yi(n,e,t,s){return ye(n).onAuthStateChanged(e,t,s)}function i0(n){return ye(n).signOut()}const Yr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yr,"1"),this.storage.removeItem(Yr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=1e3,a0=10;class Zh extends Xh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);A_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,a0):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},o0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zh.type="LOCAL";const c0=Zh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends Xh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ed.type="SESSION";const td=ed;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new _i(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(a).map(async f=>f(t.origin,i)),h=await l0(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_i.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((l,h)=>{const f=la("",20);r.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(y){const b=y;if(b.data.eventId===f)switch(b.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(b.data.response);break;default:clearTimeout(m),clearTimeout(i),h(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return window}function h0(n){gt().location.href=n}/**
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
 */function nd(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function d0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function m0(){return nd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="firebaseLocalStorageDb",p0=1,Jr="firebaseLocalStorage",rd="fbase_key";class ar{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xi(n,e){return n.transaction([Jr],e?"readwrite":"readonly").objectStore(Jr)}function g0(){const n=indexedDB.deleteDatabase(sd);return new ar(n).toPromise()}function Do(){const n=indexedDB.open(sd,p0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Jr,{keyPath:rd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Jr)?e(s):(s.close(),await g0(),e(await Do()))})})}async function Sl(n,e,t){const s=xi(n,!0).put({[rd]:e,value:t});return new ar(s).toPromise()}async function y0(n,e){const t=xi(n,!1).get(e),s=await new ar(t).toPromise();return s===void 0?null:s.value}function Rl(n,e){const t=xi(n,!0).delete(e);return new ar(t).toPromise()}const _0=800,x0=3;class id{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Do(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>x0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_i._getInstance(m0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await d0(),!this.activeServiceWorker)return;this.sender=new u0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||f0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Do();return await Sl(e,Yr,"1"),await Rl(e,Yr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Sl(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>y0(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Rl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=xi(r,!1).getAll();return new ar(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}id.type="LOCAL";const w0=id;new ir(3e4,6e4);/**
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
 */function b0(n,e){return e?Tt(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends aa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function v0(n){return Jh(n.auth,new ua(n),n.bypassAuthState)}function E0(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),Z_(t,new ua(n),n.bypassAuthState)}async function I0(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),X_(t,new ua(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return v0;case"linkViaPopup":case"linkViaRedirect":return I0;case"reauthViaPopup":case"reauthViaRedirect":return E0;default:at(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=new ir(2e3,1e4);class Bn extends od{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=la();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,T0.get())};e()}}Bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="pendingRedirect",Vr=new Map;class N0 extends od{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Vr.get(this.auth._key());if(!e){try{const s=await S0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Vr.set(this.auth._key(),e)}return this.bypassAuthState||Vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S0(n,e){const t=C0(e),s=k0(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function R0(n,e){Vr.set(n._key(),e)}function k0(n){return Tt(n._redirectPersistence)}function C0(n){return Dr(A0,n.config.apiKey,n.name)}async function P0(n,e,t=!1){if(nt(n.app))return Promise.reject(zt(n));const s=is(n),r=b0(s,e),a=await new N0(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=600*1e3;class D0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!V0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!ad(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(pt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=j0&&this.cachedEventUids.clear(),this.cachedEventUids.has(kl(e))}saveEventToCache(e){this.cachedEventUids.add(kl(e)),this.lastProcessedEventTime=Date.now()}}function kl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ad({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function V0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ad(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O0(n,e={}){return rn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,L0=/^https?/;async function F0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await O0(n);for(const t of e)try{if(U0(t))return}catch{}at(n,"unauthorized-domain")}function U0(n){const e=Po(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!L0.test(t))return!1;if(M0.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const B0=new ir(3e4,6e4);function Cl(){const n=gt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function q0(n){return new Promise((e,t)=>{var r,i,a;function s(){Cl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cl(),t(pt(n,"network-request-failed"))},timeout:B0.get()})}if((i=(r=gt().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=gt().gapi)!=null&&a.load)s();else{const l=V_("iframefcb");return gt()[l]=()=>{gapi.load?s():t(pt(n,"network-request-failed"))},zh(`${D_()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw Or=null,e})}let Or=null;function $0(n){return Or=Or||q0(n),Or}/**
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
 */const W0=new ir(5e3,15e3),H0="__/auth/iframe",z0="emulator/auth/iframe",G0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},K0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Q0(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ra(e,z0):`https://${n.config.authDomain}/${H0}`,s={apiKey:e.apiKey,appName:n.name,v:rs},r=K0.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${rr(s).slice(1)}`}async function Y0(n){const e=await $0(n),t=gt().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:Q0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:G0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=pt(n,"network-request-failed"),l=gt().setTimeout(()=>{i(a)},W0.get());function h(){gt().clearTimeout(l),r(s)}s.ping(h).then(h,()=>{i(a)})}))}/**
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
 */const J0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},X0=500,Z0=600,ex="_blank",tx="http://localhost";class Pl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nx(n,e,t,s=X0,r=Z0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const h={...J0,width:s.toString(),height:r.toString(),top:i,left:a},f=Fe().toLowerCase();t&&(l=Fh(f)?ex:t),Mh(f)&&(e=e||tx,h.scrollbars="yes");const m=Object.entries(h).reduce((b,[T,C])=>`${b}${T}=${C},`,"");if(T_(f)&&l!=="_self")return sx(e||"",l),new Pl(null);const y=window.open(e||"",l,m);$(y,n,"popup-blocked");try{y.focus()}catch{}return new Pl(y)}function sx(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const rx="__/auth/handler",ix="emulator/auth/handler",ox=encodeURIComponent("fac");async function jl(n,e,t,s,r,i){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:rs,eventId:r};if(e instanceof Qh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",qg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))a[m]=y}if(e instanceof or){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const h=await n._getAppCheckToken(),f=h?`#${ox}=${encodeURIComponent(h)}`:"";return`${ax(n)}?${rr(l).slice(1)}${f}`}function ax({config:n}){return n.emulator?ra(n,ix):`https://${n.authDomain}/${rx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="webStorageSupport";class cx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=td,this._completeRedirectFn=P0,this._overrideRedirectResult=R0}async _openPopup(e,t,s,r){var a;Rt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await jl(e,t,s,Po(),r);return nx(e,i,la())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await jl(e,t,s,Po(),r);return h0(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Rt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Y0(e),s=new D0(e);return t.register("authEvent",r=>($(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fo,{type:fo},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[fo];i!==void 0&&t(!!i),at(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=F0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wh()||Lh()||oa()}}const lx=cx;var Dl="@firebase/auth",Vl="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dx(n){bt(new ot("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=s.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hh(n)},f=new C_(s,r,i,h);return B_(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),bt(new ot("auth-internal",e=>{const t=is(e.getProvider("auth").getImmediate());return(s=>new ux(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(Dl,Vl,hx(n)),et(Dl,Vl,"esm2020")}/**
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
 */const fx=300,mx=yh("authIdTokenMaxAge")||fx;let Ol=null;const px=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>mx)return;const r=t==null?void 0:t.token;Ol!==r&&(Ol=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function gx(n=na()){const e=An(n,"auth");if(e.isInitialized())return e.getImmediate();const t=U_(n,{popupRedirectResolver:lx,persistence:[w0,c0,td]}),s=yh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=px(i.toString());r0(t,a,()=>a(t.currentUser)),s0(t,l=>a(l))}}const r=ph("auth");return r&&q_(t,`http://${r}`),t}function yx(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}P_({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=pt("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",yx().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dx("Browser");var Ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gt,cd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function g(){}g.prototype=_.prototype,I.F=_.prototype,I.prototype=new g,I.prototype.constructor=I,I.D=function(v,x,E){for(var w=Array(arguments.length-2),q=2;q<arguments.length;q++)w[q-2]=arguments[q];return _.prototype[x].apply(v,w)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,_,g){g||(g=0);const v=Array(16);if(typeof _=="string")for(var x=0;x<16;++x)v[x]=_.charCodeAt(g++)|_.charCodeAt(g++)<<8|_.charCodeAt(g++)<<16|_.charCodeAt(g++)<<24;else for(x=0;x<16;++x)v[x]=_[g++]|_[g++]<<8|_[g++]<<16|_[g++]<<24;_=I.g[0],g=I.g[1],x=I.g[2];let E=I.g[3],w;w=_+(E^g&(x^E))+v[0]+3614090360&4294967295,_=g+(w<<7&4294967295|w>>>25),w=E+(x^_&(g^x))+v[1]+3905402710&4294967295,E=_+(w<<12&4294967295|w>>>20),w=x+(g^E&(_^g))+v[2]+606105819&4294967295,x=E+(w<<17&4294967295|w>>>15),w=g+(_^x&(E^_))+v[3]+3250441966&4294967295,g=x+(w<<22&4294967295|w>>>10),w=_+(E^g&(x^E))+v[4]+4118548399&4294967295,_=g+(w<<7&4294967295|w>>>25),w=E+(x^_&(g^x))+v[5]+1200080426&4294967295,E=_+(w<<12&4294967295|w>>>20),w=x+(g^E&(_^g))+v[6]+2821735955&4294967295,x=E+(w<<17&4294967295|w>>>15),w=g+(_^x&(E^_))+v[7]+4249261313&4294967295,g=x+(w<<22&4294967295|w>>>10),w=_+(E^g&(x^E))+v[8]+1770035416&4294967295,_=g+(w<<7&4294967295|w>>>25),w=E+(x^_&(g^x))+v[9]+2336552879&4294967295,E=_+(w<<12&4294967295|w>>>20),w=x+(g^E&(_^g))+v[10]+4294925233&4294967295,x=E+(w<<17&4294967295|w>>>15),w=g+(_^x&(E^_))+v[11]+2304563134&4294967295,g=x+(w<<22&4294967295|w>>>10),w=_+(E^g&(x^E))+v[12]+1804603682&4294967295,_=g+(w<<7&4294967295|w>>>25),w=E+(x^_&(g^x))+v[13]+4254626195&4294967295,E=_+(w<<12&4294967295|w>>>20),w=x+(g^E&(_^g))+v[14]+2792965006&4294967295,x=E+(w<<17&4294967295|w>>>15),w=g+(_^x&(E^_))+v[15]+1236535329&4294967295,g=x+(w<<22&4294967295|w>>>10),w=_+(x^E&(g^x))+v[1]+4129170786&4294967295,_=g+(w<<5&4294967295|w>>>27),w=E+(g^x&(_^g))+v[6]+3225465664&4294967295,E=_+(w<<9&4294967295|w>>>23),w=x+(_^g&(E^_))+v[11]+643717713&4294967295,x=E+(w<<14&4294967295|w>>>18),w=g+(E^_&(x^E))+v[0]+3921069994&4294967295,g=x+(w<<20&4294967295|w>>>12),w=_+(x^E&(g^x))+v[5]+3593408605&4294967295,_=g+(w<<5&4294967295|w>>>27),w=E+(g^x&(_^g))+v[10]+38016083&4294967295,E=_+(w<<9&4294967295|w>>>23),w=x+(_^g&(E^_))+v[15]+3634488961&4294967295,x=E+(w<<14&4294967295|w>>>18),w=g+(E^_&(x^E))+v[4]+3889429448&4294967295,g=x+(w<<20&4294967295|w>>>12),w=_+(x^E&(g^x))+v[9]+568446438&4294967295,_=g+(w<<5&4294967295|w>>>27),w=E+(g^x&(_^g))+v[14]+3275163606&4294967295,E=_+(w<<9&4294967295|w>>>23),w=x+(_^g&(E^_))+v[3]+4107603335&4294967295,x=E+(w<<14&4294967295|w>>>18),w=g+(E^_&(x^E))+v[8]+1163531501&4294967295,g=x+(w<<20&4294967295|w>>>12),w=_+(x^E&(g^x))+v[13]+2850285829&4294967295,_=g+(w<<5&4294967295|w>>>27),w=E+(g^x&(_^g))+v[2]+4243563512&4294967295,E=_+(w<<9&4294967295|w>>>23),w=x+(_^g&(E^_))+v[7]+1735328473&4294967295,x=E+(w<<14&4294967295|w>>>18),w=g+(E^_&(x^E))+v[12]+2368359562&4294967295,g=x+(w<<20&4294967295|w>>>12),w=_+(g^x^E)+v[5]+4294588738&4294967295,_=g+(w<<4&4294967295|w>>>28),w=E+(_^g^x)+v[8]+2272392833&4294967295,E=_+(w<<11&4294967295|w>>>21),w=x+(E^_^g)+v[11]+1839030562&4294967295,x=E+(w<<16&4294967295|w>>>16),w=g+(x^E^_)+v[14]+4259657740&4294967295,g=x+(w<<23&4294967295|w>>>9),w=_+(g^x^E)+v[1]+2763975236&4294967295,_=g+(w<<4&4294967295|w>>>28),w=E+(_^g^x)+v[4]+1272893353&4294967295,E=_+(w<<11&4294967295|w>>>21),w=x+(E^_^g)+v[7]+4139469664&4294967295,x=E+(w<<16&4294967295|w>>>16),w=g+(x^E^_)+v[10]+3200236656&4294967295,g=x+(w<<23&4294967295|w>>>9),w=_+(g^x^E)+v[13]+681279174&4294967295,_=g+(w<<4&4294967295|w>>>28),w=E+(_^g^x)+v[0]+3936430074&4294967295,E=_+(w<<11&4294967295|w>>>21),w=x+(E^_^g)+v[3]+3572445317&4294967295,x=E+(w<<16&4294967295|w>>>16),w=g+(x^E^_)+v[6]+76029189&4294967295,g=x+(w<<23&4294967295|w>>>9),w=_+(g^x^E)+v[9]+3654602809&4294967295,_=g+(w<<4&4294967295|w>>>28),w=E+(_^g^x)+v[12]+3873151461&4294967295,E=_+(w<<11&4294967295|w>>>21),w=x+(E^_^g)+v[15]+530742520&4294967295,x=E+(w<<16&4294967295|w>>>16),w=g+(x^E^_)+v[2]+3299628645&4294967295,g=x+(w<<23&4294967295|w>>>9),w=_+(x^(g|~E))+v[0]+4096336452&4294967295,_=g+(w<<6&4294967295|w>>>26),w=E+(g^(_|~x))+v[7]+1126891415&4294967295,E=_+(w<<10&4294967295|w>>>22),w=x+(_^(E|~g))+v[14]+2878612391&4294967295,x=E+(w<<15&4294967295|w>>>17),w=g+(E^(x|~_))+v[5]+4237533241&4294967295,g=x+(w<<21&4294967295|w>>>11),w=_+(x^(g|~E))+v[12]+1700485571&4294967295,_=g+(w<<6&4294967295|w>>>26),w=E+(g^(_|~x))+v[3]+2399980690&4294967295,E=_+(w<<10&4294967295|w>>>22),w=x+(_^(E|~g))+v[10]+4293915773&4294967295,x=E+(w<<15&4294967295|w>>>17),w=g+(E^(x|~_))+v[1]+2240044497&4294967295,g=x+(w<<21&4294967295|w>>>11),w=_+(x^(g|~E))+v[8]+1873313359&4294967295,_=g+(w<<6&4294967295|w>>>26),w=E+(g^(_|~x))+v[15]+4264355552&4294967295,E=_+(w<<10&4294967295|w>>>22),w=x+(_^(E|~g))+v[6]+2734768916&4294967295,x=E+(w<<15&4294967295|w>>>17),w=g+(E^(x|~_))+v[13]+1309151649&4294967295,g=x+(w<<21&4294967295|w>>>11),w=_+(x^(g|~E))+v[4]+4149444226&4294967295,_=g+(w<<6&4294967295|w>>>26),w=E+(g^(_|~x))+v[11]+3174756917&4294967295,E=_+(w<<10&4294967295|w>>>22),w=x+(_^(E|~g))+v[2]+718787259&4294967295,x=E+(w<<15&4294967295|w>>>17),w=g+(E^(x|~_))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(x+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+x&4294967295,I.g[3]=I.g[3]+E&4294967295}s.prototype.v=function(I,_){_===void 0&&(_=I.length);const g=_-this.blockSize,v=this.C;let x=this.h,E=0;for(;E<_;){if(x==0)for(;E<=g;)r(this,I,E),E+=this.blockSize;if(typeof I=="string"){for(;E<_;)if(v[x++]=I.charCodeAt(E++),x==this.blockSize){r(this,v),x=0;break}}else for(;E<_;)if(v[x++]=I[E++],x==this.blockSize){r(this,v),x=0;break}}this.h=x,this.o+=_},s.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;_=this.o*8;for(var g=I.length-8;g<I.length;++g)I[g]=_&255,_/=256;for(this.v(I),I=Array(16),_=0,g=0;g<4;++g)for(let v=0;v<32;v+=8)I[_++]=this.g[g]>>>v&255;return I};function i(I,_){var g=l;return Object.prototype.hasOwnProperty.call(g,I)?g[I]:g[I]=_(I)}function a(I,_){this.h=_;const g=[];let v=!0;for(let x=I.length-1;x>=0;x--){const E=I[x]|0;v&&E==_||(g[x]=E,v=!1)}this.g=g}var l={};function h(I){return-128<=I&&I<128?i(I,function(_){return new a([_|0],_<0?-1:0)}):new a([I|0],I<0?-1:0)}function f(I){if(isNaN(I)||!isFinite(I))return y;if(I<0)return P(f(-I));const _=[];let g=1;for(let v=0;I>=g;v++)_[v]=I/g|0,g*=4294967296;return new a(_,0)}function m(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return P(m(I.substring(1),_));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=f(Math.pow(_,8));let v=y;for(let E=0;E<I.length;E+=8){var x=Math.min(8,I.length-E);const w=parseInt(I.substring(E,E+x),_);x<8?(x=f(Math.pow(_,x)),v=v.j(x).add(f(w))):(v=v.j(g),v=v.add(f(w)))}return v}var y=h(0),b=h(1),T=h(16777216);n=a.prototype,n.m=function(){if(j(this))return-P(this).m();let I=0,_=1;for(let g=0;g<this.g.length;g++){const v=this.i(g);I+=(v>=0?v:4294967296+v)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(j(this))return"-"+P(this).toString(I);const _=f(Math.pow(I,6));var g=this;let v="";for(;;){const x=Q(g,_).g;g=O(g,x.j(_));let E=((g.g.length>0?g.g[0]:g.h)>>>0).toString(I);if(g=x,C(g))return E+v;for(;E.length<6;)E="0"+E;v=E+v}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(let _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function j(I){return I.h==-1}n.l=function(I){return I=O(this,I),j(I)?-1:C(I)?0:1};function P(I){const _=I.g.length,g=[];for(let v=0;v<_;v++)g[v]=~I.g[v];return new a(g,~I.h).add(b)}n.abs=function(){return j(this)?P(this):this},n.add=function(I){const _=Math.max(this.g.length,I.g.length),g=[];let v=0;for(let x=0;x<=_;x++){let E=v+(this.i(x)&65535)+(I.i(x)&65535),w=(E>>>16)+(this.i(x)>>>16)+(I.i(x)>>>16);v=w>>>16,E&=65535,w&=65535,g[x]=w<<16|E}return new a(g,g[g.length-1]&-2147483648?-1:0)};function O(I,_){return I.add(P(_))}n.j=function(I){if(C(this)||C(I))return y;if(j(this))return j(I)?P(this).j(P(I)):P(P(this).j(I));if(j(I))return P(this.j(P(I)));if(this.l(T)<0&&I.l(T)<0)return f(this.m()*I.m());const _=this.g.length+I.g.length,g=[];for(var v=0;v<2*_;v++)g[v]=0;for(v=0;v<this.g.length;v++)for(let x=0;x<I.g.length;x++){const E=this.i(v)>>>16,w=this.i(v)&65535,q=I.i(x)>>>16,ee=I.i(x)&65535;g[2*v+2*x]+=w*ee,D(g,2*v+2*x),g[2*v+2*x+1]+=E*ee,D(g,2*v+2*x+1),g[2*v+2*x+1]+=w*q,D(g,2*v+2*x+1),g[2*v+2*x+2]+=E*q,D(g,2*v+2*x+2)}for(I=0;I<_;I++)g[I]=g[2*I+1]<<16|g[2*I];for(I=_;I<2*_;I++)g[I]=0;return new a(g,0)};function D(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function F(I,_){this.g=I,this.h=_}function Q(I,_){if(C(_))throw Error("division by zero");if(C(I))return new F(y,y);if(j(I))return _=Q(P(I),_),new F(P(_.g),P(_.h));if(j(_))return _=Q(I,P(_)),new F(P(_.g),_.h);if(I.g.length>30){if(j(I)||j(_))throw Error("slowDivide_ only works with positive integers.");for(var g=b,v=_;v.l(I)<=0;)g=ae(g),v=ae(v);var x=ne(g,1),E=ne(v,1);for(v=ne(v,2),g=ne(g,2);!C(v);){var w=E.add(v);w.l(I)<=0&&(x=x.add(g),E=w),v=ne(v,1),g=ne(g,1)}return _=O(I,x.j(_)),new F(x,_)}for(x=y;I.l(_)>=0;){for(g=Math.max(1,Math.floor(I.m()/_.m())),v=Math.ceil(Math.log(g)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),E=f(g),w=E.j(_);j(w)||w.l(I)>0;)g-=v,E=f(g),w=E.j(_);C(E)&&(E=b),x=x.add(E),I=O(I,w)}return new F(x,I)}n.B=function(I){return Q(this,I).h},n.and=function(I){const _=Math.max(this.g.length,I.g.length),g=[];for(let v=0;v<_;v++)g[v]=this.i(v)&I.i(v);return new a(g,this.h&I.h)},n.or=function(I){const _=Math.max(this.g.length,I.g.length),g=[];for(let v=0;v<_;v++)g[v]=this.i(v)|I.i(v);return new a(g,this.h|I.h)},n.xor=function(I){const _=Math.max(this.g.length,I.g.length),g=[];for(let v=0;v<_;v++)g[v]=this.i(v)^I.i(v);return new a(g,this.h^I.h)};function ae(I){const _=I.g.length+1,g=[];for(let v=0;v<_;v++)g[v]=I.i(v)<<1|I.i(v-1)>>>31;return new a(g,I.h)}function ne(I,_){const g=_>>5;_%=32;const v=I.g.length-g,x=[];for(let E=0;E<v;E++)x[E]=_>0?I.i(E+g)>>>_|I.i(E+g+1)<<32-_:I.i(E+g);return new a(x,I.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,cd=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,Gt=a}).apply(typeof Ml<"u"?Ml:typeof self<"u"?self:typeof window<"u"?window:{});var Sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ld,Vs,ud,Mr,Vo,hd,dd,fd;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sr=="object"&&Sr];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function r(o,u){if(u)e:{var d=s;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in d))break e;d=d[A]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(u){var d=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&d.push([p,u[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function h(o,u,d){return o.call.apply(o.bind,arguments)}function f(o,u,d){return f=h,f.apply(null,arguments)}function m(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function y(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(p,A,N){for(var V=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)V[Y-2]=arguments[Y];return u.prototype[A].apply(p,V)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function T(o){const u=o.length;if(u>0){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function C(o,u){for(let p=1;p<arguments.length;p++){const A=arguments[p];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=o.length||0;const N=A.length||0;o.length=d+N;for(let V=0;V<N;V++)o[d+V]=A[V]}else o.push(A)}}class j{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function P(o){a.setTimeout(()=>{throw o},0)}function O(){var o=I;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class D{constructor(){this.h=this.g=null}add(u,d){const p=F.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var F=new j(()=>new Q,o=>o.reset());class Q{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,ne=!1,I=new D,_=()=>{const o=Promise.resolve(void 0);ae=()=>{o.then(g)}};function g(){for(var o;o=O();){try{o.h.call(o.g)}catch(d){P(d)}var u=F;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}ne=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var E=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,u),a.removeEventListener("test",d,u)}catch{}return o})();function w(o){return/^[\s\xa0]*$/.test(o)}function q(o,u){x.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}y(q,x),q.prototype.init=function(o,u){const d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&q.Z.h.call(this)},q.prototype.h=function(){q.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ee="closure_listenable_"+(Math.random()*1e6|0),Ye=0;function Pn(o,u,d,p,A){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=A,this.key=++Ye,this.da=this.fa=!1}function Je(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ue(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function We(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function Et(o){const u={};for(const d in o)u[d]=o[d];return u}const ve="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ut(o,u){let d,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(d in p)o[d]=p[d];for(let N=0;N<ve.length;N++)d=ve[N],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function ht(o){this.src=o,this.g={},this.h=0}ht.prototype.add=function(o,u,d,p,A){const N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);const V=fs(o,u,p,A);return V>-1?(u=o[V],d||(u.fa=!1)):(u=new Pn(u,this.src,N,!!p,A),u.fa=d,o.push(u)),u};function ds(o,u){const d=u.type;if(d in o.g){var p=o.g[d],A=Array.prototype.indexOf.call(p,u,void 0),N;(N=A>=0)&&Array.prototype.splice.call(p,A,1),N&&(Je(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function fs(o,u,d,p){for(let A=0;A<o.length;++A){const N=o[A];if(!N.da&&N.listener==u&&N.capture==!!d&&N.ha==p)return A}return-1}var ms="closure_lm_"+(Math.random()*1e6|0),ps={};function U(o,u,d,p,A){if(Array.isArray(u)){for(let N=0;N<u.length;N++)U(o,u[N],d,p,A);return null}return d=Xe(d),o&&o[ee]?o.J(u,d,l(p)?!!p.capture:!1,A):H(o,u,d,!1,p,A)}function H(o,u,d,p,A,N){if(!u)throw Error("Invalid event type");const V=l(A)?!!A.capture:!!A;let Y=De(o);if(Y||(o[ms]=Y=new ht(o)),d=Y.add(u,d,p,V,N),d.proxy)return d;if(p=se(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)E||(A=V),A===void 0&&(A=!1),o.addEventListener(u.toString(),p,A);else if(o.attachEvent)o.attachEvent(ce(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function se(){function o(d){return u.call(o.src,o.listener,d)}const u=Te;return o}function ie(o,u,d,p,A){if(Array.isArray(u))for(var N=0;N<u.length;N++)ie(o,u[N],d,p,A);else p=l(p)?!!p.capture:!!p,d=Xe(d),o&&o[ee]?(o=o.i,N=String(u).toString(),N in o.g&&(u=o.g[N],d=fs(u,d,p,A),d>-1&&(Je(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[N],o.h--)))):o&&(o=De(o))&&(u=o.g[u.toString()],o=-1,u&&(o=fs(u,d,p,A)),(d=o>-1?u[o]:null)&&je(d))}function je(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ee])ds(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(ce(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=De(u))?(ds(d,o),d.h==0&&(d.src=null,u[ms]=null)):Je(o)}}}function ce(o){return o in ps?ps[o]:ps[o]="on"+o}function Te(o,u){if(o.da)o=!0;else{u=new q(u,this);const d=o.listener,p=o.ha||o.src;o.fa&&je(o),o=d.call(p,u)}return o}function De(o){return o=o[ms],o instanceof ht?o:null}var an="__closure_events_fn_"+(Math.random()*1e9>>>0);function Xe(o){return typeof o=="function"?o:(o[an]||(o[an]=function(u){return o.handleEvent(u)}),o[an])}function Ve(){v.call(this),this.i=new ht(this),this.M=this,this.G=null}y(Ve,v),Ve.prototype[ee]=!0,Ve.prototype.removeEventListener=function(o,u,d,p){ie(this,o,u,d,p)};function Ue(o,u){var d,p=o.G;if(p)for(d=[];p;p=p.G)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new x(u,o);else if(u instanceof x)u.target=u.target||o;else{var A=u;u=new x(p,o),ut(u,A)}A=!0;let N,V;if(d)for(V=d.length-1;V>=0;V--)N=u.g=d[V],A=fr(N,p,!0,u)&&A;if(N=u.g=o,A=fr(N,p,!0,u)&&A,A=fr(N,p,!1,u)&&A,d)for(V=0;V<d.length;V++)N=u.g=d[V],A=fr(N,p,!1,u)&&A}Ve.prototype.N=function(){if(Ve.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let p=0;p<d.length;p++)Je(d[p]);delete o.g[u],o.h--}}this.G=null},Ve.prototype.J=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},Ve.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function fr(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let A=!0;for(let N=0;N<u.length;++N){const V=u[N];if(V&&!V.da&&V.capture==d){const Y=V.listener,Ee=V.ha||V.src;V.fa&&ds(o.i,V),A=Y.call(Ee,p)!==!1&&A}}return A&&!p.defaultPrevented}function fm(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=f(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function Ja(o){o.g=fm(()=>{o.g=null,o.i&&(o.i=!1,Ja(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class mm extends v{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ja(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(o){v.call(this),this.h=o,this.g={}}y(gs,v);var Xa=[];function Za(o){ue(o.g,function(u,d){this.g.hasOwnProperty(d)&&je(u)},o),o.g={}}gs.prototype.N=function(){gs.Z.N.call(this),Za(this)},gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qi=a.JSON.stringify,pm=a.JSON.parse,gm=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function ec(){}function tc(){}var ys={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function $i(){x.call(this,"d")}y($i,x);function Wi(){x.call(this,"c")}y(Wi,x);var cn={},nc=null;function mr(){return nc=nc||new Ve}cn.Ia="serverreachability";function sc(o){x.call(this,cn.Ia,o)}y(sc,x);function _s(o){const u=mr();Ue(u,new sc(u))}cn.STAT_EVENT="statevent";function rc(o,u){x.call(this,cn.STAT_EVENT,o),this.stat=u}y(rc,x);function Be(o){const u=mr();Ue(u,new rc(u,o))}cn.Ja="timingevent";function ic(o,u){x.call(this,cn.Ja,o),this.size=u}y(ic,x);function xs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function ws(){this.g=!0}ws.prototype.ua=function(){this.g=!1};function ym(o,u,d,p,A,N){o.info(function(){if(o.g)if(N){var V="",Y=N.split("&");for(let oe=0;oe<Y.length;oe++){var Ee=Y[oe].split("=");if(Ee.length>1){const Ae=Ee[0];Ee=Ee[1];const ft=Ae.split("_");V=ft.length>=2&&ft[1]=="type"?V+(Ae+"="+Ee+"&"):V+(Ae+"=redacted&")}}}else V=null;else V=N;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+u+`
`+d+`
`+V})}function _m(o,u,d,p,A,N,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+u+`
`+d+`
`+N+" "+V})}function jn(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+wm(o,d)+(p?" "+p:"")})}function xm(o,u){o.info(function(){return"TIMEOUT: "+u})}ws.prototype.info=function(){};function wm(o,u){if(!o.g)return u;if(!u)return null;try{const N=JSON.parse(u);if(N){for(o=0;o<N.length;o++)if(Array.isArray(N[o])){var d=N[o];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var A=p[0];if(A!="noop"&&A!="stop"&&A!="close")for(let V=1;V<p.length;V++)p[V]=""}}}}return qi(N)}catch{return u}}var pr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},oc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ac;function Hi(){}y(Hi,ec),Hi.prototype.g=function(){return new XMLHttpRequest},ac=new Hi;function bs(o){return encodeURIComponent(String(o))}function bm(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function Pt(o,u,d,p){this.j=o,this.i=u,this.l=d,this.S=p||1,this.V=new gs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new cc}function cc(){this.i=null,this.g="",this.h=!1}var lc={},zi={};function Gi(o,u,d){o.M=1,o.A=yr(dt(u)),o.u=d,o.R=!0,uc(o,null)}function uc(o,u){o.F=Date.now(),gr(o),o.B=dt(o.A);var d=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Ec(d.i,"t",p),o.C=0,d=o.j.L,o.h=new cc,o.g=Bc(o.j,d?u:null,!o.u),o.P>0&&(o.O=new mm(f(o.Y,o,o.g),o.P)),u=o.V,d=o.g,p=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(Xa[0]=A.toString()),A=Xa);for(let N=0;N<A.length;N++){const V=U(d,A[N],p||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=o.J?Et(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),_s(),ym(o.i,o.v,o.B,o.l,o.S,o.u)}Pt.prototype.ba=function(o){o=o.target;const u=this.O;u&&Vt(o)==3?u.j():this.Y(o)},Pt.prototype.Y=function(o){try{if(o==this.g)e:{const Y=Vt(this.g),Ee=this.g.ya(),oe=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||kc(this.g)))){this.K||Y!=4||Ee==7||(Ee==8||oe<=0?_s(3):_s(2)),Ki(this);var u=this.g.ca();this.X=u;var d=vm(this);if(this.o=u==200,_m(this.i,this.v,this.B,this.l,this.S,Y,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,A=this.g;if((p=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(p)){var N=p;break t}}N=null}if(o=N)jn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qi(this,o);else{this.o=!1,this.m=3,Be(12),ln(this),vs(this);break e}}if(this.R){o=!0;let Ae;for(;!this.K&&this.C<d.length;)if(Ae=Em(this,d),Ae==zi){Y==4&&(this.m=4,Be(14),o=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ae==lc){this.m=4,Be(15),jn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else jn(this.i,this.l,Ae,null),Qi(this,Ae);if(hc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||d.length!=0||this.h.h||(this.m=1,Be(16),o=!1),this.o=this.o&&o,!o)jn(this.i,this.l,d,"[Invalid Chunked Response]"),ln(this),vs(this);else if(d.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),so(V),V.P=!0,Be(11))}}else jn(this.i,this.l,d,null),Qi(this,d);Y==4&&ln(this),this.o&&!this.K&&(Y==4?Mc(this.j,this):(this.o=!1,gr(this)))}else Mm(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,Be(12)):(this.m=0,Be(13)),ln(this),vs(this)}}}catch{}finally{}};function vm(o){if(!hc(o))return o.g.la();const u=kc(o.g);if(u==="")return"";let d="";const p=u.length,A=Vt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return ln(o),vs(o),"";o.h.i=new a.TextDecoder}for(let N=0;N<p;N++)o.h.h=!0,d+=o.h.i.decode(u[N],{stream:!(A&&N==p-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function hc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Em(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?zi:(d=Number(u.substring(d,p)),isNaN(d)?lc:(p+=1,p+d>u.length?zi:(u=u.slice(p,p+d),o.C=p+d,u)))}Pt.prototype.cancel=function(){this.K=!0,ln(this)};function gr(o){o.T=Date.now()+o.H,dc(o,o.H)}function dc(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=xs(f(o.aa,o),u)}function Ki(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Pt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(xm(this.i,this.B),this.M!=2&&(_s(),Be(17)),ln(this),this.m=2,vs(this)):dc(this,this.T-o)};function vs(o){o.j.I==0||o.K||Mc(o.j,o)}function ln(o){Ki(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Za(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Qi(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||Yi(d.h,o))){if(!o.L&&Yi(d.h,o)&&d.I==3){try{var p=d.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)vr(d),wr(d);else break e;no(d),Be(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=xs(f(d.Va,d),6e3));pc(d.h)<=1&&d.ta&&(d.ta=void 0)}else hn(d,11)}else if((o.L||d.g==o)&&vr(d),!w(u))for(A=d.Ba.g.parse(u),u=0;u<A.length;u++){let oe=A[u];const Ae=oe[0];if(!(Ae<=d.K))if(d.K=Ae,oe=oe[1],d.I==2)if(oe[0]=="c"){d.M=oe[1],d.ba=oe[2];const ft=oe[3];ft!=null&&(d.ka=ft,d.j.info("VER="+d.ka));const dn=oe[4];dn!=null&&(d.za=dn,d.j.info("SVER="+d.za));const Ot=oe[5];Ot!=null&&typeof Ot=="number"&&Ot>0&&(p=1.5*Ot,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Mt=o.g;if(Mt){const Ir=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ir){var N=p.h;N.g||Ir.indexOf("spdy")==-1&&Ir.indexOf("quic")==-1&&Ir.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Ji(N,N.h),N.h=null))}if(p.G){const ro=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;ro&&(p.wa=ro,he(p.J,p.G,ro))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var V=o;if(p.na=Uc(p,p.L?p.ba:null,p.W),V.L){gc(p.h,V);var Y=V,Ee=p.O;Ee&&(Y.H=Ee),Y.D&&(Ki(Y),gr(Y)),p.g=V}else Vc(p);d.i.length>0&&br(d)}else oe[0]!="stop"&&oe[0]!="close"||hn(d,7);else d.I==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?hn(d,7):to(d):oe[0]!="noop"&&d.l&&d.l.qa(oe),d.A=0)}}_s(4)}catch{}}var Im=class{constructor(o,u){this.g=o,this.map=u}};function fc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function mc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function pc(o){return o.h?1:o.g?o.g.size:0}function Yi(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ji(o,u){o.g?o.g.add(u):o.h=u}function gc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}fc.prototype.cancel=function(){if(this.i=yc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function yc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return T(o.i)}var _c=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tm(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const p=o[d].indexOf("=");let A,N=null;p>=0?(A=o[d].substring(0,p),N=o[d].substring(p+1)):A=o[d],u(A,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function jt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof jt?(this.l=o.l,Es(this,o.j),this.o=o.o,this.g=o.g,Is(this,o.u),this.h=o.h,Xi(this,Ic(o.i)),this.m=o.m):o&&(u=String(o).match(_c))?(this.l=!1,Es(this,u[1]||"",!0),this.o=Ts(u[2]||""),this.g=Ts(u[3]||"",!0),Is(this,u[4]),this.h=Ts(u[5]||"",!0),Xi(this,u[6]||"",!0),this.m=Ts(u[7]||"")):(this.l=!1,this.i=new Ns(null,this.l))}jt.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(As(u,xc,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(As(u,xc,!0),"@"),o.push(bs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(As(d,d.charAt(0)=="/"?Sm:Nm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",As(d,km)),o.join("")},jt.prototype.resolve=function(o){const u=dt(this);let d=!!o.j;d?Es(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var p=o.h;if(d)Is(u,o.u);else if(d=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var A=u.h.lastIndexOf("/");A!=-1&&(p=u.h.slice(0,A+1)+p)}if(A=p,A==".."||A==".")p="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){p=A.lastIndexOf("/",0)==0,A=A.split("/");const N=[];for(let V=0;V<A.length;){const Y=A[V++];Y=="."?p&&V==A.length&&N.push(""):Y==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),p&&V==A.length&&N.push("")):(N.push(Y),p=!0)}p=N.join("/")}else p=A}return d?u.h=p:d=o.i.toString()!=="",d?Xi(u,Ic(o.i)):d=!!o.m,d&&(u.m=o.m),u};function dt(o){return new jt(o)}function Es(o,u,d){o.j=d?Ts(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Is(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Xi(o,u,d){u instanceof Ns?(o.i=u,Cm(o.i,o.l)):(d||(u=As(u,Rm)),o.i=new Ns(u,o.l))}function he(o,u,d){o.i.set(u,d)}function yr(o){return he(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Ts(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function As(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Am),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Am(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var xc=/[#\/\?@]/g,Nm=/[#\?:]/g,Sm=/[#\?]/g,Rm=/[#\?@]/g,km=/#/g;function Ns(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function un(o){o.g||(o.g=new Map,o.h=0,o.i&&Tm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Ns.prototype,n.add=function(o,u){un(this),this.i=null,o=Dn(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function wc(o,u){un(o),u=Dn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function bc(o,u){return un(o),u=Dn(o,u),o.g.has(u)}n.forEach=function(o,u){un(this),this.g.forEach(function(d,p){d.forEach(function(A){o.call(u,A,p,this)},this)},this)};function vc(o,u){un(o);let d=[];if(typeof u=="string")bc(o,u)&&(d=d.concat(o.g.get(Dn(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}n.set=function(o,u){return un(this),this.i=null,o=Dn(this,o),bc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=vc(this,o),o.length>0?String(o[0]):u):u};function Ec(o,u,d){wc(o,u),d.length>0&&(o.i=null,o.g.set(Dn(o,u),T(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var d=u[p];const A=bs(d);d=vc(this,d);for(let N=0;N<d.length;N++){let V=A;d[N]!==""&&(V+="="+bs(d[N])),o.push(V)}}return this.i=o.join("&")};function Ic(o){const u=new Ns;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Dn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Cm(o,u){u&&!o.j&&(un(o),o.i=null,o.g.forEach(function(d,p){const A=p.toLowerCase();p!=A&&(wc(this,p),Ec(this,A,d))},o)),o.j=u}function Pm(o,u){const d=new ws;if(a.Image){const p=new Image;p.onload=m(Dt,d,"TestLoadImage: loaded",!0,u,p),p.onerror=m(Dt,d,"TestLoadImage: error",!1,u,p),p.onabort=m(Dt,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=m(Dt,d,"TestLoadImage: timeout",!1,u,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function jm(o,u){const d=new ws,p=new AbortController,A=setTimeout(()=>{p.abort(),Dt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(N=>{clearTimeout(A),N.ok?Dt(d,"TestPingServer: ok",!0,u):Dt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),Dt(d,"TestPingServer: error",!1,u)})}function Dt(o,u,d,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(d)}catch{}}function Dm(){this.g=new gm}function Zi(o){this.i=o.Sb||null,this.h=o.ab||!1}y(Zi,ec),Zi.prototype.g=function(){return new _r(this.i,this.h)};function _r(o,u){Ve.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(_r,Ve),n=_r.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Rs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Rs(this)),this.g&&(this.readyState=3,Rs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Tc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Tc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ss(this):Rs(this),this.readyState==3&&Tc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Ss(this))},n.Na=function(o){this.g&&(this.response=o,Ss(this))},n.ga=function(){this.g&&Ss(this)};function Ss(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Rs(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Rs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(_r.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ac(o){let u="";return ue(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function eo(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Ac(d),typeof o=="string"?d!=null&&bs(d):he(o,u,d))}function pe(o){Ve.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(pe,Ve);var Vm=/^https?$/i,Om=["POST","PUT"];n=pe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ac.g(),this.g.onreadystatechange=b(f(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(N){Nc(this,N);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)d.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Om,u,void 0)>=0)||p||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,V]of d)this.g.setRequestHeader(N,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(N){Nc(this,N)}};function Nc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Sc(o),xr(o)}function Sc(o){o.A||(o.A=!0,Ue(o,"complete"),Ue(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ue(this,"complete"),Ue(this,"abort"),xr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xr(this,!0)),pe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Rc(this):this.Xa())},n.Xa=function(){Rc(this)};function Rc(o){if(o.h&&typeof i<"u"){if(o.v&&Vt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ue(o,"readystatechange"),Vt(o)==4){o.h=!1;try{const N=o.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=N===0){let V=String(o.D).match(_c)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),p=!Vm.test(V?V.toLowerCase():"")}d=p}if(d)Ue(o,"complete"),Ue(o,"success");else{o.o=6;try{var A=Vt(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",Sc(o)}}finally{xr(o)}}}}function xr(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||Ue(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Vt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Vt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),pm(u)}};function kc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Mm(o){const u={};o=(o.g&&Vt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(w(o[p]))continue;var d=bm(o[p]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=u[A]||[];u[A]=N,N.push(d)}We(u,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ks(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Cc(o){this.za=0,this.i=[],this.j=new ws,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ks("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ks("baseRetryDelayMs",5e3,o),this.Za=ks("retryDelaySeedMs",1e4,o),this.Ta=ks("forwardChannelMaxRetries",2,o),this.va=ks("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new fc(o&&o.concurrentRequestLimit),this.Ba=new Dm,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Cc.prototype,n.ka=8,n.I=1,n.connect=function(o,u,d,p){Be(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=Uc(this,null,this.W),br(this)};function to(o){if(Pc(o),o.I==3){var u=o.V++,d=dt(o.J);if(he(d,"SID",o.M),he(d,"RID",u),he(d,"TYPE","terminate"),Cs(o,d),u=new Pt(o,o.j,u),u.M=2,u.A=yr(dt(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=u.A,d=!0),d||(u.g=Bc(u.j,null),u.g.ea(u.A)),u.F=Date.now(),gr(u)}Fc(o)}function wr(o){o.g&&(so(o),o.g.cancel(),o.g=null)}function Pc(o){wr(o),o.v&&(a.clearTimeout(o.v),o.v=null),vr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function br(o){if(!mc(o.h)&&!o.m){o.m=!0;var u=o.Ea;ae||_(),ne||(ae(),ne=!0),I.add(u,o),o.D=0}}function Lm(o,u){return pc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=xs(f(o.Ea,o,u),Lc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new Pt(this,this.j,o);let N=this.o;if(this.U&&(N?(N=Et(N),ut(N,this.U)):N=this.U),this.u!==null||this.R||(A.J=N,N=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Dc(this,A,u),d=dt(this.J),he(d,"RID",o),he(d,"CVER",22),this.G&&he(d,"X-HTTP-Session-Id",this.G),Cs(this,d),N&&(this.R?u="headers="+bs(Ac(N))+"&"+u:this.u&&eo(d,this.u,N)),Ji(this.h,A),this.Ra&&he(d,"TYPE","init"),this.S?(he(d,"$req",u),he(d,"SID","null"),A.U=!0,Gi(A,d,null)):Gi(A,d,u),this.I=2}}else this.I==3&&(o?jc(this,o):this.i.length==0||mc(this.h)||jc(this))};function jc(o,u){var d;u?d=u.l:d=o.V++;const p=dt(o.J);he(p,"SID",o.M),he(p,"RID",d),he(p,"AID",o.K),Cs(o,p),o.u&&o.o&&eo(p,o.u,o.o),d=new Pt(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Dc(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Ji(o.h,d),Gi(d,p,u)}function Cs(o,u){o.H&&ue(o.H,function(d,p){he(u,p,d)}),o.l&&ue({},function(d,p){he(u,p,d)})}function Dc(o,u,d){d=Math.min(o.i.length,d);const p=o.l?f(o.l.Ka,o.l,o):null;e:{var A=o.i;let Y=-1;for(;;){const Ee=["count="+d];Y==-1?d>0?(Y=A[0].g,Ee.push("ofs="+Y)):Y=0:Ee.push("ofs="+Y);let oe=!0;for(let Ae=0;Ae<d;Ae++){var N=A[Ae].g;const ft=A[Ae].map;if(N-=Y,N<0)Y=Math.max(0,A[Ae].g-100),oe=!1;else try{N="req"+N+"_"||"";try{var V=ft instanceof Map?ft:Object.entries(ft);for(const[dn,Ot]of V){let Mt=Ot;l(Ot)&&(Mt=qi(Ot)),Ee.push(N+dn+"="+encodeURIComponent(Mt))}}catch(dn){throw Ee.push(N+"type="+encodeURIComponent("_badmap")),dn}}catch{p&&p(ft)}}if(oe){V=Ee.join("&");break e}}V=void 0}return o=o.i.splice(0,d),u.G=o,V}function Vc(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;ae||_(),ne||(ae(),ne=!0),I.add(u,o),o.A=0}}function no(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=xs(f(o.Da,o),Lc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Oc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=xs(f(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Be(10),wr(this),Oc(this))};function so(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Oc(o){o.g=new Pt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=dt(o.na);he(u,"RID","rpc"),he(u,"SID",o.M),he(u,"AID",o.K),he(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&he(u,"TO",o.ia),he(u,"TYPE","xmlhttp"),Cs(o,u),o.u&&o.o&&eo(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=yr(dt(u)),d.u=null,d.R=!0,uc(d,o)}n.Va=function(){this.C!=null&&(this.C=null,wr(this),no(this),Be(19))};function vr(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Mc(o,u){var d=null;if(o.g==u){vr(o),so(o),o.g=null;var p=2}else if(Yi(o.h,u))d=u.G,gc(o.h,u),p=1;else return;if(o.I!=0){if(u.o)if(p==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var A=o.D;p=mr(),Ue(p,new ic(p,d)),br(o)}else Vc(o);else if(A=u.m,A==3||A==0&&u.X>0||!(p==1&&Lm(o,u)||p==2&&no(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),A){case 1:hn(o,5);break;case 4:hn(o,10);break;case 3:hn(o,6);break;default:hn(o,2)}}}function Lc(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function hn(o,u){if(o.j.info("Error code "+u),u==2){var d=f(o.bb,o),p=o.Ua;const A=!p;p=new jt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Es(p,"https"),yr(p),A?Pm(p.toString(),d):jm(p.toString(),d)}else Be(2);o.I=0,o.l&&o.l.pa(u),Fc(o),Pc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function Fc(o){if(o.I=0,o.ja=[],o.l){const u=yc(o.h);(u.length!=0||o.i.length!=0)&&(C(o.ja,u),C(o.ja,o.i),o.h.i.length=0,T(o.i),o.i.length=0),o.l.oa()}}function Uc(o,u,d){var p=d instanceof jt?dt(d):new jt(d);if(p.g!="")u&&(p.g=u+"."+p.g),Is(p,p.u);else{var A=a.location;p=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;const N=new jt(null);p&&Es(N,p),u&&(N.g=u),A&&Is(N,A),d&&(N.h=d),p=N}return d=o.G,u=o.wa,d&&u&&he(p,d,u),he(p,"VER",o.ka),Cs(o,p),p}function Bc(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new pe(new Zi({ab:d})):new pe(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function qc(){}n=qc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Er(){}Er.prototype.g=function(o,u){return new ze(o,u)};function ze(o,u){Ve.call(this),this.g=new Cc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!w(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!w(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Vn(this)}y(ze,Ve),ze.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ze.prototype.close=function(){to(this.g)},ze.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=qi(o),o=d);u.i.push(new Im(u.Ya++,o)),u.I==3&&br(u)},ze.prototype.N=function(){this.g.l=null,delete this.j,to(this.g),delete this.g,ze.Z.N.call(this)};function $c(o){$i.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}y($c,$i);function Wc(){Wi.call(this),this.status=1}y(Wc,Wi);function Vn(o){this.g=o}y(Vn,qc),Vn.prototype.ra=function(){Ue(this.g,"a")},Vn.prototype.qa=function(o){Ue(this.g,new $c(o))},Vn.prototype.pa=function(o){Ue(this.g,new Wc)},Vn.prototype.oa=function(){Ue(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,ze.prototype.send=ze.prototype.o,ze.prototype.open=ze.prototype.m,ze.prototype.close=ze.prototype.close,fd=function(){return new Er},dd=function(){return mr()},hd=cn,Vo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},pr.NO_ERROR=0,pr.TIMEOUT=8,pr.HTTP_ERROR=6,Mr=pr,oc.COMPLETE="complete",ud=oc,tc.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",Ve.prototype.listen=Ve.prototype.J,Vs=tc,pe.prototype.listenOnce=pe.prototype.K,pe.prototype.getLastError=pe.prototype.Ha,pe.prototype.getLastErrorCode=pe.prototype.ya,pe.prototype.getStatus=pe.prototype.ca,pe.prototype.getResponseJson=pe.prototype.La,pe.prototype.getResponseText=pe.prototype.la,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Fa,ld=pe}).apply(typeof Sr<"u"?Sr:typeof self<"u"?self:typeof window<"u"?window:{});const Ll="@firebase/firestore",Fl="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const wn=new mi("@firebase/firestore");function On(){return wn.logLevel}function L(n,...e){if(wn.logLevel<=J.DEBUG){const t=e.map(ha);wn.debug(`Firestore (${as}): ${n}`,...t)}}function kt(n,...e){if(wn.logLevel<=J.ERROR){const t=e.map(ha);wn.error(`Firestore (${as}): ${n}`,...t)}}function Jn(n,...e){if(wn.logLevel<=J.WARN){const t=e.map(ha);wn.warn(`Firestore (${as}): ${n}`,...t)}}function ha(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function W(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,md(n,s,t)}function md(n,e,t){let s=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw kt(s),new Error(s)}function re(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||md(e,r,s)}function G(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _x{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Me.UNAUTHENTICATED)))}shutdown(){}}class xx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class wx{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0,42304);let s=this.i;const r=h=>this.i!==s?(s=this.i,t(h)):Promise.resolve();let i=new At;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new At,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const h=i;e.enqueueRetryable((async()=>{await h.promise,await r(this.currentUser)}))},l=h=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new At)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string",31837,{l:s}),new pd(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string",2055,{h:e}),new Me(e)}}class bx{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class vx{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new bx(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Me.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ul{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ex{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){re(this.o===void 0,3512);const s=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ul(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ul(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Ix(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function X(n,e){return n<e?-1:n>e?1:0}function Oo(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return mo(r)===mo(i)?X(r,i):mo(r)?1:-1}return X(n.length,e.length)}const Tx=55296,Ax=57343;function mo(n){const e=n.charCodeAt(0);return e>=Tx&&e<=Ax}function Xn(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="__name__";class mt{constructor(e,t,s){t===void 0?t=0:t>e.length&&W(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&W(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return mt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof mt?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=mt.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return X(e.length,t.length)}static compareSegments(e,t){const s=mt.isNumericId(e),r=mt.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?mt.extractNumericId(e).compare(mt.extractNumericId(t)):Oo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gt.fromString(e.substring(4,e.length-2))}}class le extends mt{construct(e,t,s){return new le(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new le(t)}static emptyPath(){return new le([])}}const Nx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ke extends mt{construct(e,t,s){return new ke(e,t,s)}static isValidIdentifier(e){return Nx.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ke.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bl}static keyField(){return new ke([Bl])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new M(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new M(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=h,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(s+=l,r++):(i(),r++)}if(i(),a)throw new M(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ke(t)}static emptyPath(){return new ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function gd(n,e,t){if(!t)throw new M(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Sx(n,e,t,s){if(e===!0&&s===!0)throw new M(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ql(n){if(!B.isDocumentKey(n))throw new M(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $l(n){if(B.isDocumentKey(n))throw new M(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function yd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function wi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function bn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wi(n);throw new M(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function we(n,e){const t={typeString:n};return e&&(t.value=e),t}function cr(n,e){if(!yd(n))throw new M(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new M(S.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=-62135596800,Hl=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Hl);return new de(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Wl)throw new M(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hl}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cr(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Wl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:we("string",de._jsonSchemaVersion),seconds:we("number"),nanoseconds:we("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new de(0,0))}static max(){return new z(new de(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Qs=-1;function Rx(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=z.fromTimestamp(s===1e9?new de(t+1,0):new de(t,s));return new Yt(r,B.empty(),e)}function kx(n){return new Yt(n.readTime,n.key,Qs)}class Yt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Yt(z.min(),B.empty(),Qs)}static max(){return new Yt(z.max(),B.empty(),Qs)}}function Cx(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Px)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):k.reject(t)}static resolve(e){return new k(((t,s)=>{t(e)}))}static reject(e){return new k(((t,s)=>{s(e)}))}static waitFor(e){return new k(((t,s)=>{let r=0,i=0,a=!1;e.forEach((l=>{++r,l.next((()=>{++i,a&&i===r&&t()}),(h=>s(h)))})),a=!0,i===r&&t()}))}static or(e){let t=k.resolve(!1);for(const s of e)t=t.next((r=>r?k.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new k(((s,r)=>{const i=e.length,a=new Array(i);let l=0;for(let h=0;h<i;h++){const f=h;t(e[f]).next((m=>{a[f]=m,++l,l===i&&s(a)}),(m=>r(m)))}}))}static doWhile(e,t){return new k(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function Dx(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ls(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const fa=-1;function vi(n){return n==null}function Xr(n){return n===0&&1/n==-1/0}function Vx(n){return typeof n=="number"&&Number.isInteger(n)&&!Xr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="";function Ox(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=zl(e)),e=Mx(n.get(t),e);return zl(e)}function Mx(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case _d:t+="";break;default:t+=i}}return t}function zl(n){return n+_d+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function on(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function xd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){this.comparator=e,this.root=t||Re.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rr(this.root,e,this.comparator,!0)}}class Rr{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Re.RED,this.left=r??Re.EMPTY,this.right=i??Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new Re(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Re.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new Re(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Kl(this.data.getIterator())}getIteratorFrom(e){return new Kl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class Kl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.fields=e,e.sort(ke.comparator)}static empty(){return new rt([])}unionWith(e){let t=new Ie(ke.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new rt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xn(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class wd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wd("Invalid base64 string: "+i):i}})(e);return new Pe(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i})(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const Lx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(n){if(re(!!n,39018),typeof n=="string"){let e=0;const t=Lx.exec(n);if(re(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xt(n){return typeof n=="string"?Pe.fromBase64String(n):Pe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="server_timestamp",vd="__type__",Ed="__previous_value__",Id="__local_write_time__";function ma(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[vd])==null?void 0:s.stringValue)===bd}function Ei(n){const e=n.mapValue.fields[Ed];return ma(e)?Ei(e):e}function Ys(n){const e=Jt(n.mapValue.fields[Id].timestampValue);return new de(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,t,s,r,i,a,l,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m}}const Zr="(default)";class Js{constructor(e,t){this.projectId=e,this.database=t||Zr}static empty(){return new Js("","")}get isDefaultDatabase(){return this.database===Zr}isEqual(e){return e instanceof Js&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="__type__",Ux="__max__",kr={mapValue:{}},Ad="__vector__",ei="value";function Zt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ma(n)?4:qx(n)?9007199254740991:Bx(n)?10:11:W(28295,{value:n})}function vt(n,e){if(n===e)return!0;const t=Zt(n);if(t!==Zt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ys(n).isEqual(Ys(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Jt(r.timestampValue),l=Jt(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,i){return Xt(r.bytesValue).isEqual(Xt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,i){return ge(r.geoPointValue.latitude)===ge(i.geoPointValue.latitude)&&ge(r.geoPointValue.longitude)===ge(i.geoPointValue.longitude)})(n,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return ge(r.integerValue)===ge(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=ge(r.doubleValue),l=ge(i.doubleValue);return a===l?Xr(a)===Xr(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Xn(n.arrayValue.values||[],e.arrayValue.values||[],vt);case 10:case 11:return(function(r,i){const a=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Gl(a)!==Gl(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!vt(a[h],l[h])))return!1;return!0})(n,e);default:return W(52216,{left:n})}}function Xs(n,e){return(n.values||[]).find((t=>vt(t,e)))!==void 0}function Zn(n,e){if(n===e)return 0;const t=Zt(n),s=Zt(e);if(t!==s)return X(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=ge(i.integerValue||i.doubleValue),h=ge(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,e);case 3:return Ql(n.timestampValue,e.timestampValue);case 4:return Ql(Ys(n),Ys(e));case 5:return Oo(n.stringValue,e.stringValue);case 6:return(function(i,a){const l=Xt(i),h=Xt(a);return l.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const m=X(l[f],h[f]);if(m!==0)return m}return X(l.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=X(ge(i.latitude),ge(a.latitude));return l!==0?l:X(ge(i.longitude),ge(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Yl(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var b,T,C,j;const l=i.fields||{},h=a.fields||{},f=(b=l[ei])==null?void 0:b.arrayValue,m=(T=h[ei])==null?void 0:T.arrayValue,y=X(((C=f==null?void 0:f.values)==null?void 0:C.length)||0,((j=m==null?void 0:m.values)==null?void 0:j.length)||0);return y!==0?y:Yl(f,m)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===kr.mapValue&&a===kr.mapValue)return 0;if(i===kr.mapValue)return 1;if(a===kr.mapValue)return-1;const l=i.fields||{},h=Object.keys(l),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const b=Oo(h[y],m[y]);if(b!==0)return b;const T=Zn(l[h[y]],f[m[y]]);if(T!==0)return T}return X(h.length,m.length)})(n.mapValue,e.mapValue);default:throw W(23264,{he:t})}}function Ql(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=Jt(n),s=Jt(e),r=X(t.seconds,s.seconds);return r!==0?r:X(t.nanos,s.nanos)}function Yl(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Zn(t[r],s[r]);if(i)return i}return X(t.length,s.length)}function es(n){return Mo(n)}function Mo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Jt(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Xt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return B.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=Mo(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${Mo(t.fields[a])}`;return r+"}"})(n.mapValue):W(61005,{value:n})}function Lr(n){switch(Zt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ei(n);return e?16+Lr(e):16;case 5:return 2*n.stringValue.length;case 6:return Xt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Lr(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return on(s.fields,((i,a)=>{r+=i.length+Lr(a)})),r})(n.mapValue);default:throw W(13486,{value:n})}}function Jl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Lo(n){return!!n&&"integerValue"in n}function pa(n){return!!n&&"arrayValue"in n}function Xl(n){return!!n&&"nullValue"in n}function Zl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fr(n){return!!n&&"mapValue"in n}function Bx(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Td])==null?void 0:s.stringValue)===Ad}function Bs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return on(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Bs(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Bs(n.arrayValue.values[t]);return e}return{...n}}function qx(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ux}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Fr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bs(t)}setAll(e){let t=ke.emptyPath(),s={},r=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,s,r),s={},r=[],t=l.popLast()}a?s[l.lastSegment()]=Bs(a):r.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Fr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Fr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){on(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Ke(Bs(this.value))}}function Nd(n){const e=[];return on(n.fields,((t,s)=>{const r=new ke([t]);if(Fr(s)){const i=Nd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)})),new rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,s,r,i,a,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Le(e,0,z.min(),z.min(),z.min(),Ke.empty(),0)}static newFoundDocument(e,t,s,r){return new Le(e,1,t,z.min(),s,r,0)}static newNoDocument(e,t){return new Le(e,2,t,z.min(),z.min(),Ke.empty(),0)}static newUnknownDocument(e,t){return new Le(e,3,t,z.min(),z.min(),Ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ti{constructor(e,t){this.position=e,this.inclusive=t}}function eu(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=B.comparator(B.fromName(a.referenceValue),t.key):s=Zn(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function tu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!vt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Zs{constructor(e,t="asc"){this.field=e,this.dir=t}}function $x(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Sd{}class xe extends Sd{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Hx(e,t,s):t==="array-contains"?new Kx(e,s):t==="in"?new Qx(e,s):t==="not-in"?new Yx(e,s):t==="array-contains-any"?new Jx(e,s):new xe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new zx(e,s):new Gx(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Zn(t,this.value)):t!==null&&Zt(this.value)===Zt(t)&&this.matchesComparison(Zn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ct extends Sd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ct(e,t)}matches(e){return Rd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Rd(n){return n.op==="and"}function kd(n){return Wx(n)&&Rd(n)}function Wx(n){for(const e of n.filters)if(e instanceof ct)return!1;return!0}function Fo(n){if(n instanceof xe)return n.field.canonicalString()+n.op.toString()+es(n.value);if(kd(n))return n.filters.map((e=>Fo(e))).join(",");{const e=n.filters.map((t=>Fo(t))).join(",");return`${n.op}(${e})`}}function Cd(n,e){return n instanceof xe?(function(s,r){return r instanceof xe&&s.op===r.op&&s.field.isEqual(r.field)&&vt(s.value,r.value)})(n,e):n instanceof ct?(function(s,r){return r instanceof ct&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,a,l)=>i&&Cd(a,r.filters[l])),!0):!1})(n,e):void W(19439)}function Pd(n){return n instanceof xe?(function(t){return`${t.field.canonicalString()} ${t.op} ${es(t.value)}`})(n):n instanceof ct?(function(t){return t.op.toString()+" {"+t.getFilters().map(Pd).join(" ,")+"}"})(n):"Filter"}class Hx extends xe{constructor(e,t,s){super(e,t,s),this.key=B.fromName(s.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class zx extends xe{constructor(e,t){super(e,"in",t),this.keys=jd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Gx extends xe{constructor(e,t){super(e,"not-in",t),this.keys=jd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function jd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>B.fromName(s.referenceValue)))}class Kx extends xe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pa(t)&&Xs(t.arrayValue,this.value)}}class Qx extends xe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xs(this.value.arrayValue,t)}}class Yx extends xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Xs(this.value.arrayValue,t)}}class Jx extends xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pa(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Xs(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e,t=null,s=[],r=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function nu(n,e=null,t=[],s=[],r=null,i=null,a=null){return new Xx(n,e,t,s,r,i,a)}function ga(n){const e=G(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Fo(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),vi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>es(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>es(s))).join(",")),e.Te=t}return e.Te}function ya(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!$x(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Cd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!tu(n.startAt,e.startAt)&&tu(n.endAt,e.endAt)}function Uo(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t=null,s=[],r=[],i=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Zx(n,e,t,s,r,i,a,l){return new us(n,e,t,s,r,i,a,l)}function _a(n){return new us(n)}function su(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Dd(n){return n.collectionGroup!==null}function qs(n){const e=G(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ie(ke.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Zs(i,s))})),t.has(ke.keyField().canonicalString())||e.Ie.push(new Zs(ke.keyField(),s))}return e.Ie}function yt(n){const e=G(n);return e.Ee||(e.Ee=ew(e,qs(n))),e.Ee}function ew(n,e){if(n.limitType==="F")return nu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Zs(r.field,i)}));const t=n.endAt?new ti(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new ti(n.startAt.position,n.startAt.inclusive):null;return nu(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Bo(n,e){const t=n.filters.concat([e]);return new us(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function qo(n,e,t){return new us(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ii(n,e){return ya(yt(n),yt(e))&&n.limitType===e.limitType}function Vd(n){return`${ga(yt(n))}|lt:${n.limitType}`}function Mn(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>Pd(r))).join(", ")}]`),vi(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>es(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>es(r))).join(",")),`Target(${s})`})(yt(n))}; limitType=${n.limitType})`}function Ti(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):B.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of qs(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(a,l,h){const f=eu(a,l,h);return a.inclusive?f<=0:f<0})(s.startAt,qs(s),r)||s.endAt&&!(function(a,l,h){const f=eu(a,l,h);return a.inclusive?f>=0:f>0})(s.endAt,qs(s),r))})(n,e)}function tw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Od(n){return(e,t)=>{let s=!1;for(const r of qs(n)){const i=nw(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function nw(n,e,t){const s=n.field.isKeyField()?B.comparator(e.key,t.key):(function(i,a,l){const h=a.data.field(i),f=l.data.field(i);return h!==null&&f!==null?Zn(h,f):W(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return W(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){on(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return xd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=new me(B.comparator);function Ct(){return sw}const Md=new me(B.comparator);function Os(...n){let e=Md;for(const t of n)e=e.insert(t.key,t);return e}function Ld(n){let e=Md;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function pn(){return $s()}function Fd(){return $s()}function $s(){return new Sn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const rw=new me(B.comparator),iw=new Ie(B.comparator);function Z(...n){let e=iw;for(const t of n)e=e.add(t);return e}const ow=new Ie(X);function aw(){return ow}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xr(e)?"-0":e}}function Ud(n){return{integerValue:""+n}}function cw(n,e){return Vx(e)?Ud(e):xa(n,e)}/**
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
 */class Ai{constructor(){this._=void 0}}function lw(n,e,t){return n instanceof er?(function(r,i){const a={fields:{[vd]:{stringValue:bd},[Id]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ma(i)&&(i=Ei(i)),i&&(a.fields[Ed]=i),{mapValue:a}})(t,e):n instanceof tr?qd(n,e):n instanceof nr?$d(n,e):(function(r,i){const a=Bd(r,i),l=ru(a)+ru(r.Ae);return Lo(a)&&Lo(r.Ae)?Ud(l):xa(r.serializer,l)})(n,e)}function uw(n,e,t){return n instanceof tr?qd(n,e):n instanceof nr?$d(n,e):t}function Bd(n,e){return n instanceof ni?(function(s){return Lo(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class er extends Ai{}class tr extends Ai{constructor(e){super(),this.elements=e}}function qd(n,e){const t=Wd(e);for(const s of n.elements)t.some((r=>vt(r,s)))||t.push(s);return{arrayValue:{values:t}}}class nr extends Ai{constructor(e){super(),this.elements=e}}function $d(n,e){let t=Wd(e);for(const s of n.elements)t=t.filter((r=>!vt(r,s)));return{arrayValue:{values:t}}}class ni extends Ai{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ru(n){return ge(n.integerValue||n.doubleValue)}function Wd(n){return pa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,t){this.field=e,this.transform=t}}function dw(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof tr&&r instanceof tr||s instanceof nr&&r instanceof nr?Xn(s.elements,r.elements,vt):s instanceof ni&&r instanceof ni?vt(s.Ae,r.Ae):s instanceof er&&r instanceof er})(n.transform,e.transform)}class fw{constructor(e,t){this.version=e,this.transformResults=t}}class Nt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nt}static exists(e){return new Nt(void 0,e)}static updateTime(e){return new Nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ur(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ni{}function Hd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Gd(n.key,Nt.none()):new Si(n.key,n.data,Nt.none());{const t=n.data,s=Ke.empty();let r=new Ie(ke.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new Rn(n.key,s,new rt(r.toArray()),Nt.none())}}function mw(n,e,t){n instanceof Si?(function(r,i,a){const l=r.value.clone(),h=ou(r.fieldTransforms,i,a.transformResults);l.setAll(h),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof Rn?(function(r,i,a){if(!Ur(r.precondition,i))return void i.convertToUnknownDocument(a.version);const l=ou(r.fieldTransforms,i,a.transformResults),h=i.data;h.setAll(zd(r)),h.setAll(l),i.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,e,t):(function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Ws(n,e,t,s){return n instanceof Si?(function(i,a,l,h){if(!Ur(i.precondition,a))return l;const f=i.value.clone(),m=au(i.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(n,e,t,s):n instanceof Rn?(function(i,a,l,h){if(!Ur(i.precondition,a))return l;const f=au(i.fieldTransforms,h,a),m=a.data;return m.setAll(zd(i)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((y=>y.field)))})(n,e,t,s):(function(i,a,l){return Ur(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function pw(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Bd(s.transform,r||null);i!=null&&(t===null&&(t=Ke.empty()),t.set(s.field,i))}return t||null}function iu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Xn(s,r,((i,a)=>dw(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Si extends Ni{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Rn extends Ni{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function zd(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function ou(n,e,t){const s=new Map;re(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,l=e.data.field(i.field);s.set(i.field,uw(a,l,t[r]))}return s}function au(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,lw(i,a,e))}return s}class Gd extends Ni{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gw extends Ni{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&mw(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ws(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ws(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Fd();return this.mutations.forEach((r=>{const i=e.get(r.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(r.key)?null:l;const h=Hd(a,l);h!==null&&s.set(r.key,h),a.isValidDocument()||a.convertToNoDocument(z.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Z())}isEqual(e){return this.batchId===e.batchId&&Xn(this.mutations,e.mutations,((t,s)=>iu(t,s)))&&Xn(this.baseMutations,e.baseMutations,((t,s)=>iu(t,s)))}}class wa{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){re(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return rw})();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new wa(e,t,s,r)}}/**
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
 */var _e,te;function ww(n){switch(n){case S.OK:return W(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return W(15467,{code:n})}}function Kd(n){if(n===void 0)return kt("GRPC error has no .code"),S.UNKNOWN;switch(n){case _e.OK:return S.OK;case _e.CANCELLED:return S.CANCELLED;case _e.UNKNOWN:return S.UNKNOWN;case _e.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case _e.INTERNAL:return S.INTERNAL;case _e.UNAVAILABLE:return S.UNAVAILABLE;case _e.UNAUTHENTICATED:return S.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case _e.NOT_FOUND:return S.NOT_FOUND;case _e.ALREADY_EXISTS:return S.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return S.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case _e.ABORTED:return S.ABORTED;case _e.OUT_OF_RANGE:return S.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return S.UNIMPLEMENTED;case _e.DATA_LOSS:return S.DATA_LOSS;default:return W(39323,{code:n})}}(te=_e||(_e={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const vw=new Gt([4294967295,4294967295],0);function cu(n){const e=bw().encode(n),t=new cd;return t.update(e),new Uint8Array(t.digest())}function lu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gt([t,s],0),new Gt([r,i],0)]}class ba{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ms(`Invalid padding: ${t}`);if(s<0)throw new Ms(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Gt.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(Gt.fromNumber(s)));return r.compare(vw)===1&&(r=new Gt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=cu(e),[s,r]=lu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ba(i,r,t);return s.forEach((l=>a.insert(l))),a}insert(e){if(this.ge===0)return;const t=cu(e),[s,r]=lu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,lr.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ri(z.min(),r,new me(X),Ct(),Z())}}class lr{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new lr(s,t,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class Qd{constructor(e,t){this.targetId=e,this.Ce=t}}class Yd{constructor(e,t,s=Pe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class uu{constructor(){this.ve=0,this.Fe=hu(),this.Me=Pe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Z(),t=Z(),s=Z();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:W(38017,{changeType:i})}})),new lr(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=hu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,re(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Ew{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ct(),this.Je=Cr(),this.He=Cr(),this.Ye=new me(X)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:W(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(Uo(i))if(s===0){const a=new B(i.path);this.et(t,a,Le.newNoDocument(a,z.min()))}else re(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const l=this.ut(e),h=l?this.ct(l,e,a):1;if(h!==0){this.it(t);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,f)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,l;try{a=Xt(s).toUint8Array()}catch(h){if(h instanceof wd)return Jn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new ba(a,r,i)}catch(h){return Jn(h instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Uo(l.target)){const h=new B(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Le.newNoDocument(h,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let s=Z();this.He.forEach(((i,a)=>{let l=!0;a.forEachWhile((h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const r=new Ri(e,t,this.Ye,this.je,s);return this.je=Ct(),this.Je=Cr(),this.He=Cr(),this.Ye=new me(X),r}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new uu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ie(X),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ie(X),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new uu),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Cr(){return new me(B.comparator)}function hu(){return new me(B.comparator)}const Iw={asc:"ASCENDING",desc:"DESCENDING"},Tw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Aw={and:"AND",or:"OR"};class Nw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $o(n,e){return n.useProto3Json||vi(e)?e:{value:e}}function si(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Jd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Sw(n,e){return si(n,e.toTimestamp())}function _t(n){return re(!!n,49232),z.fromTimestamp((function(t){const s=Jt(t);return new de(s.seconds,s.nanos)})(n))}function va(n,e){return Wo(n,e).canonicalString()}function Wo(n,e){const t=(function(r){return new le(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Xd(n){const e=le.fromString(n);return re(sf(e),10190,{key:e.toString()}),e}function Ho(n,e){return va(n.databaseId,e.path)}function po(n,e){const t=Xd(e);if(t.get(1)!==n.databaseId.projectId)throw new M(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(ef(t))}function Zd(n,e){return va(n.databaseId,e)}function Rw(n){const e=Xd(n);return e.length===4?le.emptyPath():ef(e)}function zo(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ef(n){return re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function du(n,e,t){return{name:Ho(n,e),fields:t.value.mapValue.fields}}function kw(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:W(39313,{state:f})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(f,m){return f.useProto3Json?(re(m===void 0||typeof m=="string",58123),Pe.fromBase64String(m||"")):(re(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Pe.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(f){const m=f.code===void 0?S.UNKNOWN:Kd(f.code);return new M(m,f.message||"")})(a);t=new Yd(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=po(n,s.document.name),i=_t(s.document.updateTime),a=s.document.createTime?_t(s.document.createTime):z.min(),l=new Ke({mapValue:{fields:s.document.fields}}),h=Le.newFoundDocument(r,i,a,l),f=s.targetIds||[],m=s.removedTargetIds||[];t=new Br(f,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=po(n,s.document),i=s.readTime?_t(s.readTime):z.min(),a=Le.newNoDocument(r,i),l=s.removedTargetIds||[];t=new Br([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=po(n,s.document),i=s.removedTargetIds||[];t=new Br([],i,r,null)}else{if(!("filter"in e))return W(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new xw(r,i),l=s.targetId;t=new Qd(l,a)}}return t}function Cw(n,e){let t;if(e instanceof Si)t={update:du(n,e.key,e.value)};else if(e instanceof Gd)t={delete:Ho(n,e.key)};else if(e instanceof Rn)t={update:du(n,e.key,e.data),updateMask:Uw(e.fieldMask)};else{if(!(e instanceof gw))return W(16599,{Vt:e.type});t={verify:Ho(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,a){const l=a.transform;if(l instanceof er)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof tr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof nr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ni)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw W(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:Sw(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W(27497)})(n,e.precondition)),t}function Pw(n,e){return n&&n.length>0?(re(e!==void 0,14353),n.map((t=>(function(r,i){let a=r.updateTime?_t(r.updateTime):_t(i);return a.isEqual(z.min())&&(a=_t(i)),new fw(a,r.transformResults||[])})(t,e)))):[]}function jw(n,e){return{documents:[Zd(n,e.path)]}}function Dw(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Zd(n,r);const i=(function(f){if(f.length!==0)return nf(ct.create(f,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(f){if(f.length!==0)return f.map((m=>(function(b){return{field:Ln(b.field),direction:Mw(b.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=$o(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(e.endAt)),{ft:t,parent:r}}function Vw(n){let e=Rw(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){re(s===1,65062);const m=t.from[0];m.allDescendants?r=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(y){const b=tf(y);return b instanceof ct&&kd(b)?b.getFilters():[b]})(t.where));let a=[];t.orderBy&&(a=(function(y){return y.map((b=>(function(C){return new Zs(Fn(C.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(b)))})(t.orderBy));let l=null;t.limit&&(l=(function(y){let b;return b=typeof y=="object"?y.value:y,vi(b)?null:b})(t.limit));let h=null;t.startAt&&(h=(function(y){const b=!!y.before,T=y.values||[];return new ti(T,b)})(t.startAt));let f=null;return t.endAt&&(f=(function(y){const b=!y.before,T=y.values||[];return new ti(T,b)})(t.endAt)),Zx(e,r,a,i,l,"F",h,f)}function Ow(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function tf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Fn(t.unaryFilter.field);return xe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Fn(t.unaryFilter.field);return xe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fn(t.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Fn(t.unaryFilter.field);return xe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}})(n):n.fieldFilter!==void 0?(function(t){return xe.create(Fn(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ct.create(t.compositeFilter.filters.map((s=>tf(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return W(1026)}})(t.compositeFilter.op))})(n):W(30097,{filter:n})}function Mw(n){return Iw[n]}function Lw(n){return Tw[n]}function Fw(n){return Aw[n]}function Ln(n){return{fieldPath:n.canonicalString()}}function Fn(n){return ke.fromServerFormat(n.fieldPath)}function nf(n){return n instanceof xe?(function(t){if(t.op==="=="){if(Zl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NAN"}};if(Xl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NAN"}};if(Xl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(t.field),op:Lw(t.op),value:t.value}}})(n):n instanceof ct?(function(t){const s=t.getFilters().map((r=>nf(r)));return s.length===1?s[0]:{compositeFilter:{op:Fw(t.op),filters:s}}})(n):W(54877,{filter:n})}function Uw(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function sf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,s,r,i=z.min(),a=z.min(),l=Pe.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new $t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.yt=e}}function qw(n){const e=Vw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(){this.Cn=new Ww}addToCollectionParentIndex(e,t){return this.Cn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Yt.min())}updateCollectionGroup(e,t,s){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class Ww{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Ie(le.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ie(le.comparator)).toArray()}}/**
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
 */const fu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rf=41943040;class He{static withCacheSize(e){return new He(e,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He.DEFAULT_COLLECTION_PERCENTILE=10,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,He.DEFAULT=new He(rf,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),He.DISABLED=new He(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const mu="LruGarbageCollector",Hw=1048576;function pu([n,e],[t,s]){const r=X(n,t);return r===0?X(e,s):r}class zw{constructor(e){this.Ir=e,this.buffer=new Ie(pu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();pu(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Gw{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){L(mu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ls(t)?L(mu,"Ignoring IndexedDB error during garbage collection: ",t):await cs(t)}await this.Vr(3e5)}))}}class Kw{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return k.resolve(bi.ce);const s=new zw(t);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(fu)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fu):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,r,i,a,l,h,f;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),r=this.params.maximumSequenceNumbersToCollect):r=y,a=Date.now(),this.nthSequenceNumber(e,r)))).next((y=>(s=y,l=Date.now(),this.removeTargets(e,s,t)))).next((y=>(i=y,h=Date.now(),this.removeOrphanedDocuments(e,s)))).next((y=>(f=Date.now(),On()<=J.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${r} in `+(l-a)+`ms
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
 */class Yw{constructor(){this.changes=new Sn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?k.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xw{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Ws(s.mutation,r,rt.empty(),de.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Z()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Z()){const r=pn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let a=Os();return i.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=pn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Z())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,s,r){let i=Ct();const a=$s(),l=(function(){return $s()})();return t.forEach(((h,f)=>{const m=s.get(f.key);r.has(f.key)&&(m===void 0||m.mutation instanceof Rn)?i=i.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),Ws(m.mutation,f,m.mutation.getFieldMask(),de.now())):a.set(f.key,rt.empty())})),this.recalculateAndSaveOverlays(e,i).next((h=>(h.forEach(((f,m)=>a.set(f,m))),t.forEach(((f,m)=>l.set(f,new Jw(m,a.get(f)??null)))),l)))}recalculateAndSaveOverlays(e,t){const s=$s();let r=new me(((a,l)=>a-l)),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((h=>{const f=t.get(h);if(f===null)return;let m=s.get(h)||rt.empty();m=l.applyToLocalView(f,m),s.set(h,m);const y=(r.get(l.batchId)||Z()).add(h);r=r.insert(l.batchId,y)}))})).next((()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,m=h.value,y=Fd();m.forEach((b=>{if(!i.has(b)){const T=Hd(t.get(b),s.get(b));T!==null&&y.set(b,T),i=i.add(b)}})),a.push(this.documentOverlayCache.saveOverlays(e,f,y))}return k.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return(function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Dd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):k.resolve(pn());let l=Qs,h=i;return a.next((f=>k.forEach(f,((m,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),i.get(m)?k.resolve():this.remoteDocumentCache.getEntry(e,m).next((b=>{h=h.insert(m,b)}))))).next((()=>this.populateOverlays(e,f,i))).next((()=>this.computeViews(e,h,f,Z()))).next((m=>({batchId:l,changes:Ld(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next((s=>{let r=Os();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=Os();return this.indexManager.getCollectionParents(e,i).next((l=>k.forEach(l,(h=>{const f=(function(y,b){return new us(b,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,h.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,s,r).next((m=>{m.forEach(((y,b)=>{a=a.insert(y,b)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((a=>{i.forEach(((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,Le.newInvalidDocument(m)))}));let l=Os();return a.forEach(((h,f)=>{const m=i.get(h);m!==void 0&&Ws(m.mutation,f,rt.empty(),de.now()),Ti(t,f)&&(l=l.insert(h,f))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return k.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:_t(r.createTime)}})(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(r){return{name:r.name,query:qw(r.bundledQuery),readTime:_t(r.readTime)}})(t)),k.resolve()}}/**
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
 */class eb{constructor(){this.overlays=new me(B.comparator),this.qr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const s=pn();return k.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.St(e,t,i)})),k.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(s)),k.resolve()}getOverlaysForCollection(e,t,s){const r=pn(),i=t.length+1,a=new B(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===i&&h.largestBatchId>s&&r.set(h.getKey(),h)}return k.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new me(((f,m)=>f-m));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>s){let m=i.get(f.largestBatchId);m===null&&(m=pn(),i=i.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const l=pn(),h=i.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,m)=>l.set(f,m))),!(l.size()>=r)););return k.resolve(l)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new _w(t,s));let i=this.qr.get(t);i===void 0&&(i=Z(),this.qr.set(t,i)),this.qr.set(t,i.add(s.key))}}/**
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
 */class tb{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.Qr=new Ie(Ne.$r),this.Ur=new Ie(Ne.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Ne(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Ne(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new B(new le([])),s=new Ne(t,e),r=new Ne(t,e+1),i=[];return this.Ur.forEachInRange([s,r],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new B(new le([])),s=new Ne(t,e),r=new Ne(t,e+1);let i=Z();return this.Ur.forEachInRange([s,r],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Ne(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ne{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return B.comparator(e.key,t.key)||X(e.Yr,t.Yr)}static Kr(e,t){return X(e.Yr,t.Yr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ie(Ne.$r)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new yw(i,t,s,r);this.mutationQueue.push(a);for(const l of r)this.Zr=this.Zr.add(new Ne(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ei(s),i=r<0?0:r;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?fa:this.tr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ne(t,0),r=new Ne(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],(a=>{const l=this.Xr(a.Yr);i.push(l)})),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ie(X);return t.forEach((r=>{const i=new Ne(r,0),a=new Ne(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(l=>{s=s.add(l.Yr)}))})),k.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;B.isDocumentKey(i)||(i=i.child(""));const a=new Ne(new B(i),0);let l=new Ie(X);return this.Zr.forEachWhile((h=>{const f=h.key.path;return!!s.isPrefixOf(f)&&(f.length===r&&(l=l.add(h.Yr)),!0)}),a),k.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){re(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return k.forEach(t.mutations,(r=>{const i=new Ne(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Ne(t,0),r=this.Zr.firstAfterOrEqual(s);return k.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.ri=e,this.docs=(function(){return new me(B.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return k.resolve(s?s.document.mutableCopy():Le.newInvalidDocument(t))}getEntries(e,t){let s=Ct();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Le.newInvalidDocument(r))})),k.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=Ct();const a=t.path,l=new B(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Cx(kx(m),s)<=0||(r.has(m.key)||Ti(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,s,r){W(9500)}ii(e,t){return k.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new rb(this)}getSize(e){return k.resolve(this.size)}}class rb extends Yw{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),k.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.persistence=e,this.si=new Sn((t=>ga(t)),ya),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.oi=0,this._i=new Ea,this.targetCount=0,this.ai=ts.ur()}forEachTarget(e,t){return this.si.forEach(((s,r)=>t(r))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),k.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ts(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Pr(t),k.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),k.waitFor(i).next((()=>r))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return k.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),k.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((a=>{i.push(r.markPotentiallyOrphaned(e,a))})),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return k.resolve(s)}containsKey(e,t){return k.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t){this.ui={},this.overlays={},this.ci=new bi(0),this.li=!1,this.li=!0,this.hi=new tb,this.referenceDelegate=e(this),this.Pi=new ib(this),this.indexManager=new $w,this.remoteDocumentCache=(function(r){return new sb(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new Bw(t),this.Ii=new Zw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new nb(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){L("MemoryPersistence","Starting transaction:",e);const r=new ob(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,t){return k.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class ob extends jx{constructor(e){super(),this.currentSequenceNumber=e}}class Ia{constructor(e){this.persistence=e,this.Ri=new Ea,this.Vi=null}static mi(e){return new Ia(e)}get fi(){if(this.Vi)return this.Vi;throw W(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),k.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.fi,(s=>{const r=B.fromPath(s);return this.gi(e,r).next((i=>{i||t.removeEntry(r,z.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return k.or([()=>k.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ri{constructor(e,t){this.persistence=e,this.pi=new Sn((s=>Ox(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Qw(this,t)}static mi(e,t){return new ri(e,t)}Ei(){}di(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return k.forEach(this.pi,((s,r)=>this.br(e,s,r).next((i=>i?k.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(a=>this.br(e,a,t).next((l=>{l||(s++,i.removeEntry(a,z.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),k.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),k.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Lr(e.data.value)),t}br(e,t,s){return k.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.pi.get(t);return k.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=r}static As(e,t){let s=Z(),r=Z();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ta(e,t.fromCache,s,r)}}/**
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
 */class cb{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Mg()?8:Dx(Fe())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.ys(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,t,r,s).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new ab;return this.Ss(e,t,a).next((l=>{if(i.result=l,this.Vs)return this.bs(e,t,a,l.size)}))})).next((()=>i.result))}bs(e,t,s,r){return s.documentReadCount<this.fs?(On()<=J.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),k.resolve()):(On()<=J.DEBUG&&L("QueryEngine","Query:",Mn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(On()<=J.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yt(t))):k.resolve())}ys(e,t){if(su(t))return k.resolve(null);let s=yt(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=qo(t,null,"F"),s=yt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const a=Z(...i);return this.ps.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,s).next((h=>{const f=this.Ds(t,l);return this.Cs(t,f,a,h.readTime)?this.ys(e,qo(t,null,"F")):this.vs(e,f,t,h)}))))})))))}ws(e,t,s,r){return su(t)||r.isEqual(z.min())?k.resolve(null):this.ps.getDocuments(e,s).next((i=>{const a=this.Ds(t,i);return this.Cs(t,a,s,r)?k.resolve(null):(On()<=J.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Mn(t)),this.vs(e,a,t,Rx(r,Qs)).next((l=>l)))}))}Ds(e,t){let s=new Ie(Od(e));return t.forEach(((r,i)=>{Ti(e,i)&&(s=s.add(i))})),s}Cs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,s){return On()<=J.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Mn(t)),this.ps.getDocumentsMatchingQuery(e,t,Yt.min(),s)}vs(e,t,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="LocalStore",lb=3e8;class ub{constructor(e,t,s,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new me(X),this.xs=new Sn((i=>ga(i)),ya),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xw(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function hb(n,e,t,s){return new ub(n,e,t,s)}async function af(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const a=[],l=[];let h=Z();for(const f of r){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of i){l.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(s,h).next((f=>({Ls:f,removedBatchIds:a,addedBatchIds:l})))}))}))}function db(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,h,f,m){const y=f.batch,b=y.keys();let T=k.resolve();return b.forEach((C=>{T=T.next((()=>m.getEntry(h,C))).next((j=>{const P=f.docVersions.get(C);re(P!==null,48541),j.version.compareTo(P)<0&&(y.applyToRemoteDocument(j,f),j.isValidDocument()&&(j.setReadTime(f.commitVersion),m.addEntry(j)))}))})),T.next((()=>l.mutationQueue.removeMutationBatch(h,y)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let h=Z();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function cf(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function fb(n,e){const t=G(n),s=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});r=t.Ms;const l=[];e.targetChanges.forEach(((m,y)=>{const b=r.get(y);if(!b)return;l.push(t.Pi.removeMatchingKeys(i,m.removedDocuments,y).next((()=>t.Pi.addMatchingKeys(i,m.addedDocuments,y))));let T=b.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?T=T.withResumeToken(Pe.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):m.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(m.resumeToken,s)),r=r.insert(y,T),(function(j,P,O){return j.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=lb?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0})(b,T,m)&&l.push(t.Pi.updateTargetData(i,T))}));let h=Ct(),f=Z();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),l.push(mb(i,a,e.documentUpdates).next((m=>{h=m.ks,f=m.qs}))),!s.isEqual(z.min())){const m=t.Pi.getLastRemoteSnapshotVersion(i).next((y=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(m)}return k.waitFor(l).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,h,f))).next((()=>h))})).then((i=>(t.Ms=r,i)))}function mb(n,e,t){let s=Z(),r=Z();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let a=Ct();return t.forEach(((l,h)=>{const f=i.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(r=r.add(l)),h.isNoDocument()&&h.version.isEqual(z.min())?(e.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(h),a=a.insert(l,h)):L(Aa,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)})),{ks:a,qs:r}}))}function pb(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=fa),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function gb(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.Pi.getTargetData(s,e).next((i=>i?(r=i,k.resolve(r)):t.Pi.allocateTargetId(s).next((a=>(r=new $t(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Go(n,e,t){const s=G(n),r=s.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(a=>s.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!ls(a))throw a;L(Aa,`Failed to update sequence numbers for target ${e}: ${a}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function gu(n,e,t){const s=G(n);let r=z.min(),i=Z();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,f,m){const y=G(h),b=y.xs.get(m);return b!==void 0?k.resolve(y.Ms.get(b)):y.Pi.getTargetData(f,m)})(s,a,yt(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(a,l.targetId).next((h=>{i=h}))})).next((()=>s.Fs.getDocumentsMatchingQuery(a,e,t?r:z.min(),t?i:Z()))).next((l=>(yb(s,tw(e),l),{documents:l,Qs:i})))))}function yb(n,e,t){let s=n.Os.get(e)||z.min();t.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),n.Os.set(e,s)}class yu{constructor(){this.activeTargetIds=aw()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _b{constructor(){this.Mo=new yu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new yu,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _u="ConnectivityMonitor";class xu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){L(_u,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){L(_u,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pr=null;function Ko(){return Pr===null?Pr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Pr++,"0x"+Pr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="RestConnection",wb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===Zr?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,t,s,r,i){const a=Ko(),l=this.zo(e,t.toUriEncodedString());L(go,`Sending RPC '${e}' ${a}:`,l,s);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,r,i);const{host:f}=new URL(l),m=ss(f);return this.Jo(e,l,h,s,m).then((y=>(L(go,`Received RPC '${e}' ${a}: `,y),y)),(y=>{throw Jn(go,`RPC '${e}' ${a} failed with error: `,y,"url: ",l,"request:",s),y}))}Ho(e,t,s,r,i,a){return this.Go(e,t,s,r,i)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+as})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}zo(e,t){const s=wb[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Oe="WebChannelConnection";class Eb extends bb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,r,i){const a=Ko();return new Promise(((l,h)=>{const f=new ld;f.setWithCredentials(!0),f.listenOnce(ud.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case Mr.NO_ERROR:const y=f.getResponseJson();L(Oe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),l(y);break;case Mr.TIMEOUT:L(Oe,`RPC '${e}' ${a} timed out`),h(new M(S.DEADLINE_EXCEEDED,"Request time out"));break;case Mr.HTTP_ERROR:const b=f.getStatus();if(L(Oe,`RPC '${e}' ${a} failed with status:`,b,"response text:",f.getResponseText()),b>0){let T=f.getResponseJson();Array.isArray(T)&&(T=T[0]);const C=T==null?void 0:T.error;if(C&&C.status&&C.message){const j=(function(O){const D=O.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(D)>=0?D:S.UNKNOWN})(C.status);h(new M(j,C.message))}else h(new M(S.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new M(S.UNAVAILABLE,"Connection failed."));break;default:W(9055,{l_:e,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{L(Oe,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(r);L(Oe,`RPC '${e}' ${a} sending request:`,r),f.send(t,"POST",m,s,15)}))}T_(e,t,s){const r=Ko(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=fd(),l=dd(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,s),h.encodeInitMessageHeaders=!0;const m=i.join("");L(Oe,`Creating RPC '${e}' stream ${r}: ${m}`,h);const y=a.createWebChannel(m,h);this.I_(y);let b=!1,T=!1;const C=new vb({Yo:P=>{T?L(Oe,`Not sending because RPC '${e}' stream ${r} is closed:`,P):(b||(L(Oe,`Opening RPC '${e}' stream ${r} transport.`),y.open(),b=!0),L(Oe,`RPC '${e}' stream ${r} sending:`,P),y.send(P))},Zo:()=>y.close()}),j=(P,O,D)=>{P.listen(O,(F=>{try{D(F)}catch(Q){setTimeout((()=>{throw Q}),0)}}))};return j(y,Vs.EventType.OPEN,(()=>{T||(L(Oe,`RPC '${e}' stream ${r} transport opened.`),C.o_())})),j(y,Vs.EventType.CLOSE,(()=>{T||(T=!0,L(Oe,`RPC '${e}' stream ${r} transport closed`),C.a_(),this.E_(y))})),j(y,Vs.EventType.ERROR,(P=>{T||(T=!0,Jn(Oe,`RPC '${e}' stream ${r} transport errored. Name:`,P.name,"Message:",P.message),C.a_(new M(S.UNAVAILABLE,"The operation could not be completed")))})),j(y,Vs.EventType.MESSAGE,(P=>{var O;if(!T){const D=P.data[0];re(!!D,16349);const F=D,Q=(F==null?void 0:F.error)||((O=F[0])==null?void 0:O.error);if(Q){L(Oe,`RPC '${e}' stream ${r} received error:`,Q);const ae=Q.status;let ne=(function(g){const v=_e[g];if(v!==void 0)return Kd(v)})(ae),I=Q.message;ne===void 0&&(ne=S.INTERNAL,I="Unknown error status: "+ae+" with message "+Q.message),T=!0,C.a_(new M(ne,I)),y.close()}else L(Oe,`RPC '${e}' stream ${r} received:`,D),C.u_(D)}})),j(l,hd.STAT_EVENT,(P=>{P.stat===Vo.PROXY?L(Oe,`RPC '${e}' stream ${r} detected buffering proxy`):P.stat===Vo.NOPROXY&&L(Oe,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function yo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(n){return new Nw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&L("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="PersistentStream";class uf{constructor(e,t,s,r,i,a,l,h){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new lf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(kt(t.toString()),kt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new M(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return L(wu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(L(wu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ib extends uf{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=kw(this.serializer,e),s=(function(i){if(!("targetChange"in i))return z.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?_t(a.readTime):z.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=zo(this.serializer),t.addTarget=(function(i,a){let l;const h=a.target;if(l=Uo(h)?{documents:jw(i,h)}:{query:Dw(i,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Jd(i,a.resumeToken);const f=$o(i,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(z.min())>0){l.readTime=si(i,a.snapshotVersion.toTimestamp());const f=$o(i,a.expectedCount);f!==null&&(l.expectedCount=f)}return l})(this.serializer,e);const s=Ow(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=zo(this.serializer),t.removeTarget=e,this.q_(t)}}class Tb extends uf{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Pw(e.writeResults,e.commitTime),s=_t(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=zo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Cw(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{}class Nb extends Ab{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new M(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,Wo(t,s),r,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(S.UNKNOWN,i.toString())}))}Ho(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(e,Wo(t,s),r,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(S.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Sb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(kt(t),this.aa=!1):L("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="RemoteStore";class Rb{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{s.enqueueAndForget((async()=>{kn(this)&&(L(vn,"Restarting streams for network reachability change."),await(async function(h){const f=G(h);f.Ea.add(4),await ur(f),f.Ra.set("Unknown"),f.Ea.delete(4),await Ci(f)})(this))}))})),this.Ra=new Sb(s,r)}}async function Ci(n){if(kn(n))for(const e of n.da)await e(!0)}async function ur(n){for(const e of n.da)await e(!1)}function hf(n,e){const t=G(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ka(t)?Ra(t):hs(t).O_()&&Sa(t,e))}function Na(n,e){const t=G(n),s=hs(t);t.Ia.delete(e),s.O_()&&df(t,e),t.Ia.size===0&&(s.O_()?s.L_():kn(t)&&t.Ra.set("Unknown"))}function Sa(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hs(n).Y_(e)}function df(n,e){n.Va.Ue(e),hs(n).Z_(e)}function Ra(n){n.Va=new Ew({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),hs(n).start(),n.Ra.ua()}function ka(n){return kn(n)&&!hs(n).x_()&&n.Ia.size>0}function kn(n){return G(n).Ea.size===0}function ff(n){n.Va=void 0}async function kb(n){n.Ra.set("Online")}async function Cb(n){n.Ia.forEach(((e,t)=>{Sa(n,e)}))}async function Pb(n,e){ff(n),ka(n)?(n.Ra.ha(e),Ra(n)):n.Ra.set("Unknown")}async function jb(n,e,t){if(n.Ra.set("Online"),e instanceof Yd&&e.state===2&&e.cause)try{await(async function(r,i){const a=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,a),r.Ia.delete(l),r.Va.removeTarget(l))})(n,e)}catch(s){L(vn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ii(n,s)}else if(e instanceof Br?n.Va.Ze(e):e instanceof Qd?n.Va.st(e):n.Va.tt(e),!t.isEqual(z.min()))try{const s=await cf(n.localStore);t.compareTo(s)>=0&&await(function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach(((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=i.Ia.get(f);m&&i.Ia.set(f,m.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,f)=>{const m=i.Ia.get(h);if(!m)return;i.Ia.set(h,m.withResumeToken(Pe.EMPTY_BYTE_STRING,m.snapshotVersion)),df(i,h);const y=new $t(m.target,h,f,m.sequenceNumber);Sa(i,y)})),i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(s){L(vn,"Failed to raise snapshot:",s),await ii(n,s)}}async function ii(n,e,t){if(!ls(e))throw e;n.Ea.add(1),await ur(n),n.Ra.set("Offline"),t||(t=()=>cf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(vn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ci(n)}))}function mf(n,e){return e().catch((t=>ii(n,t,e)))}async function Pi(n){const e=G(n),t=en(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:fa;for(;Db(e);)try{const r=await pb(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,Vb(e,r)}catch(r){await ii(e,r)}pf(e)&&gf(e)}function Db(n){return kn(n)&&n.Ta.length<10}function Vb(n,e){n.Ta.push(e);const t=en(n);t.O_()&&t.X_&&t.ea(e.mutations)}function pf(n){return kn(n)&&!en(n).x_()&&n.Ta.length>0}function gf(n){en(n).start()}async function Ob(n){en(n).ra()}async function Mb(n){const e=en(n);for(const t of n.Ta)e.ea(t.mutations)}async function Lb(n,e,t){const s=n.Ta.shift(),r=wa.from(s,e,t);await mf(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await Pi(n)}async function Fb(n,e){e&&en(n).X_&&await(async function(s,r){if((function(a){return ww(a)&&a!==S.ABORTED})(r.code)){const i=s.Ta.shift();en(s).B_(),await mf(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Pi(s)}})(n,e),pf(n)&&gf(n)}async function bu(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),L(vn,"RemoteStore received new credentials");const s=kn(t);t.Ea.add(3),await ur(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ci(t)}async function Ub(n,e){const t=G(n);e?(t.Ea.delete(2),await Ci(t)):e||(t.Ea.add(2),await ur(t),t.Ra.set("Unknown"))}function hs(n){return n.ma||(n.ma=(function(t,s,r){const i=G(t);return i.sa(),new Ib(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Xo:kb.bind(null,n),t_:Cb.bind(null,n),r_:Pb.bind(null,n),H_:jb.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),ka(n)?Ra(n):n.Ra.set("Unknown")):(await n.ma.stop(),ff(n))}))),n.ma}function en(n){return n.fa||(n.fa=(function(t,s,r){const i=G(t);return i.sa(),new Tb(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Ob.bind(null,n),r_:Fb.bind(null,n),ta:Mb.bind(null,n),na:Lb.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Pi(n)):(await n.fa.stop(),n.Ta.length>0&&(L(vn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,l=new Ca(e,t,a,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pa(n,e){if(kt("AsyncQueue",`${e}: ${n}`),ls(n))return new M(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{static emptySet(e){return new Hn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||B.comparator(t.key,s.key):(t,s)=>B.comparator(t.key,s.key),this.keyedMap=Os(),this.sortedSet=new me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Hn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class vu{constructor(){this.ga=new me(B.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):W(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class ns{constructor(e,t,s,r,i,a,l,h,f){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new ns(e,t,Hn.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ii(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class qb{constructor(){this.queries=Eu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=G(t),i=r.queries;r.queries=Eu(),i.forEach(((a,l)=>{for(const h of l.Sa)h.onError(s)}))})(this,new M(S.ABORTED,"Firestore shutting down"))}}function Eu(){return new Sn((n=>Vd(n)),Ii)}async function yf(n,e){const t=G(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new Bb,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const l=Pa(a,`Initialization of query '${Mn(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&ja(t)}async function _f(n,e){const t=G(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function $b(n,e){const t=G(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(r)&&(s=!0);a.wa=r}}s&&ja(t)}function Wb(n,e,t){const s=G(n),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(t);s.queries.delete(e)}function ja(n){n.Ca.forEach((e=>{e.next()}))}var Qo,Iu;(Iu=Qo||(Qo={})).Ma="default",Iu.Cache="cache";class xf{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ns(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Qo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){this.key=e}}class bf{constructor(e){this.key=e}}class Hb{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Z(),this.mutatedKeys=Z(),this.eu=Od(e),this.tu=new Hn(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new vu,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,l=!1;const h=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,f=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((m,y)=>{const b=r.get(m),T=Ti(this.query,y)?y:null,C=!!b&&this.mutatedKeys.has(b.key),j=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let P=!1;b&&T?b.data.isEqual(T.data)?C!==j&&(s.track({type:3,doc:T}),P=!0):this.su(b,T)||(s.track({type:2,doc:T}),P=!0,(h&&this.eu(T,h)>0||f&&this.eu(T,f)<0)&&(l=!0)):!b&&T?(s.track({type:0,doc:T}),P=!0):b&&!T&&(s.track({type:1,doc:b}),P=!0,(h||f)&&(l=!0)),P&&(T?(a=a.add(T),i=j?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),s.track({type:1,doc:m})}return{tu:a,iu:s,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((m,y)=>(function(T,C){const j=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{Rt:P})}};return j(T)-j(C)})(m.type,y.type)||this.eu(m.doc,y.doc))),this.ou(s),r=r??!1;const l=t&&!r?this._u():[],h=this.Xa.size===0&&this.current&&!r?1:0,f=h!==this.Za;return this.Za=h,a.length!==0||f?{snapshot:new ns(this.query,e.tu,i,a,e.mutatedKeys,h===0,f,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new vu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Z(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new bf(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new wf(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ns.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Da="SyncEngine";class zb{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Gb{constructor(e){this.key=e,this.hu=!1}}class Kb{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Sn((l=>Vd(l)),Ii),this.Iu=new Map,this.Eu=new Set,this.du=new me(B.comparator),this.Au=new Map,this.Ru=new Ea,this.Vu={},this.mu=new Map,this.fu=ts.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Qb(n,e,t=!0){const s=Nf(n);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await vf(s,e,t,!0),r}async function Yb(n,e){const t=Nf(n);await vf(t,e,!0,!1)}async function vf(n,e,t,s){const r=await gb(n.localStore,yt(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return s&&(l=await Jb(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&hf(n.remoteStore,r),l}async function Jb(n,e,t,s,r){n.pu=(y,b,T)=>(async function(j,P,O,D){let F=P.view.ru(O);F.Cs&&(F=await gu(j.localStore,P.query,!1).then((({documents:I})=>P.view.ru(I,F))));const Q=D&&D.targetChanges.get(P.targetId),ae=D&&D.targetMismatches.get(P.targetId)!=null,ne=P.view.applyChanges(F,j.isPrimaryClient,Q,ae);return Au(j,P.targetId,ne.au),ne.snapshot})(n,y,b,T);const i=await gu(n.localStore,e,!0),a=new Hb(e,i.Qs),l=a.ru(i.documents),h=lr.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),f=a.applyChanges(l,n.isPrimaryClient,h);Au(n,t,f.au);const m=new zb(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),f.snapshot}async function Xb(n,e,t){const s=G(n),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter((a=>!Ii(a,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Go(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Na(s.remoteStore,r.targetId),Yo(s,r.targetId)})).catch(cs)):(Yo(s,r.targetId),await Go(s.localStore,r.targetId,!0))}async function Zb(n,e){const t=G(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Na(t.remoteStore,s.targetId))}async function ev(n,e,t){const s=av(n);try{const r=await(function(a,l){const h=G(a),f=de.now(),m=l.reduce(((T,C)=>T.add(C.key)),Z());let y,b;return h.persistence.runTransaction("Locally write mutations","readwrite",(T=>{let C=Ct(),j=Z();return h.Ns.getEntries(T,m).next((P=>{C=P,C.forEach(((O,D)=>{D.isValidDocument()||(j=j.add(O))}))})).next((()=>h.localDocuments.getOverlayedDocuments(T,C))).next((P=>{y=P;const O=[];for(const D of l){const F=pw(D,y.get(D.key).overlayedDocument);F!=null&&O.push(new Rn(D.key,F,Nd(F.value.mapValue),Nt.exists(!0)))}return h.mutationQueue.addMutationBatch(T,f,O,l)})).next((P=>{b=P;const O=P.applyToLocalDocumentSet(y,j);return h.documentOverlayCache.saveOverlays(T,P.batchId,O)}))})).then((()=>({batchId:b.batchId,changes:Ld(y)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,l,h){let f=a.Vu[a.currentUser.toKey()];f||(f=new me(X)),f=f.insert(l,h),a.Vu[a.currentUser.toKey()]=f})(s,r.batchId,t),await hr(s,r.changes),await Pi(s.remoteStore)}catch(r){const i=Pa(r,"Failed to persist write");t.reject(i)}}async function Ef(n,e){const t=G(n);try{const s=await fb(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const a=t.Au.get(i);a&&(re(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?re(a.hu,14607):r.removedDocuments.size>0&&(re(a.hu,42227),a.hu=!1))})),await hr(t,s,e)}catch(s){await cs(s)}}function Tu(n,e,t){const s=G(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&r.push(l.snapshot)})),(function(a,l){const h=G(a);h.onlineState=l;let f=!1;h.queries.forEach(((m,y)=>{for(const b of y.Sa)b.va(l)&&(f=!0)})),f&&ja(h)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function tv(n,e,t){const s=G(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),i=r&&r.key;if(i){let a=new me(B.comparator);a=a.insert(i,Le.newNoDocument(i,z.min()));const l=Z().add(i),h=new Ri(z.min(),new Map,new me(X),a,l);await Ef(s,h),s.du=s.du.remove(i),s.Au.delete(e),Va(s)}else await Go(s.localStore,e,!1).then((()=>Yo(s,e,t))).catch(cs)}async function nv(n,e){const t=G(n),s=e.batch.batchId;try{const r=await db(t.localStore,e);Tf(t,s,null),If(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await hr(t,r)}catch(r){await cs(r)}}async function sv(n,e,t){const s=G(n);try{const r=await(function(a,l){const h=G(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let m;return h.mutationQueue.lookupMutationBatch(f,l).next((y=>(re(y!==null,37113),m=y.keys(),h.mutationQueue.removeMutationBatch(f,y)))).next((()=>h.mutationQueue.performConsistencyCheck(f))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m))).next((()=>h.localDocuments.getDocuments(f,m)))}))})(s.localStore,e);Tf(s,e,t),If(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await hr(s,r)}catch(r){await cs(r)}}function If(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Tf(n,e,t){const s=G(n);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function Yo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||Af(n,s)}))}function Af(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Na(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Va(n))}function Au(n,e,t){for(const s of t)s instanceof wf?(n.Ru.addReference(s.key,e),rv(n,s)):s instanceof bf?(L(Da,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||Af(n,s.key)):W(19791,{wu:s})}function rv(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(L(Da,"New document in limbo: "+t),n.Eu.add(s),Va(n))}function Va(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new B(le.fromString(e)),s=n.fu.next();n.Au.set(s,new Gb(t)),n.du=n.du.insert(t,s),hf(n.remoteStore,new $t(yt(_a(t.path)),s,"TargetPurposeLimboResolution",bi.ce))}}async function hr(n,e,t){const s=G(n),r=[],i=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,h)=>{a.push(s.pu(h,e,t).then((f=>{var m;if((f||t)&&s.isPrimaryClient){const y=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(f){r.push(f);const y=Ta.As(h.targetId,f);i.push(y)}})))})),await Promise.all(a),s.Pu.H_(r),await(async function(h,f){const m=G(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>k.forEach(f,(b=>k.forEach(b.Es,(T=>m.persistence.referenceDelegate.addReference(y,b.targetId,T))).next((()=>k.forEach(b.ds,(T=>m.persistence.referenceDelegate.removeReference(y,b.targetId,T)))))))))}catch(y){if(!ls(y))throw y;L(Aa,"Failed to update sequence numbers: "+y)}for(const y of f){const b=y.targetId;if(!y.fromCache){const T=m.Ms.get(b),C=T.snapshotVersion,j=T.withLastLimboFreeSnapshotVersion(C);m.Ms=m.Ms.insert(b,j)}}})(s.localStore,i))}async function iv(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){L(Da,"User change. New user:",e.toKey());const s=await af(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((l=>{l.forEach((h=>{h.reject(new M(S.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await hr(t,s.Ls)}}function ov(n,e){const t=G(n),s=t.Au.get(e);if(s&&s.hu)return Z().add(s.key);{let r=Z();const i=t.Iu.get(e);if(!i)return r;for(const a of i){const l=t.Tu.get(a);r=r.unionWith(l.view.nu)}return r}}function Nf(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ef.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ov.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tv.bind(null,e),e.Pu.H_=$b.bind(null,e.eventManager),e.Pu.yu=Wb.bind(null,e.eventManager),e}function av(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sv.bind(null,e),e}class oi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ki(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return hb(this.persistence,new cb,e.initialUser,this.serializer)}Cu(e){return new of(Ia.mi,this.serializer)}Du(e){return new _b}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oi.provider={build:()=>new oi};class cv extends oi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){re(this.persistence.referenceDelegate instanceof ri,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Gw(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?He.withCacheSize(this.cacheSizeBytes):He.DEFAULT;return new of((s=>ri.mi(s,t)),this.serializer)}}class Jo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Tu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=iv.bind(null,this.syncEngine),await Ub(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new qb})()}createDatastore(e){const t=ki(e.databaseInfo.databaseId),s=(function(i){return new Eb(i)})(e.databaseInfo);return(function(i,a,l,h){return new Nb(i,a,l,h)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,a,l){return new Rb(s,r,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Tu(this.syncEngine,t,0)),(function(){return xu.v()?new xu:new xb})())}createSyncEngine(e,t){return(function(r,i,a,l,h,f,m){const y=new Kb(r,i,a,l,h,f);return m&&(y.gu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=G(r);L(vn,"RemoteStore shutting down."),i.Ea.add(5),await ur(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Jo.provider={build:()=>new Jo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):kt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="FirestoreClient";class lv{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Me.UNAUTHENTICATED,this.clientId=da.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async a=>{L(tn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(L(tn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new At;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Pa(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function _o(n,e){n.asyncQueue.verifyOperationInProgress(),L(tn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await af(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Nu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await uv(n);L(tn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>bu(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>bu(e.remoteStore,r))),n._onlineComponents=e}async function uv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(tn,"Using user provided OfflineComponentProvider");try{await _o(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===S.FAILED_PRECONDITION||r.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Jn("Error using user provided cache. Falling back to memory cache: "+t),await _o(n,new oi)}}else L(tn,"Using default OfflineComponentProvider"),await _o(n,new cv(void 0));return n._offlineComponents}async function Rf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(tn,"Using user provided OnlineComponentProvider"),await Nu(n,n._uninitializedComponentsProvider._online)):(L(tn,"Using default OnlineComponentProvider"),await Nu(n,new Jo))),n._onlineComponents}function hv(n){return Rf(n).then((e=>e.syncEngine))}async function kf(n){const e=await Rf(n),t=e.eventManager;return t.onListen=Qb.bind(null,e.syncEngine),t.onUnlisten=Xb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Yb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Zb.bind(null,e.syncEngine),t}function dv(n,e,t={}){const s=new At;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,h,f){const m=new Sf({next:b=>{m.Nu(),a.enqueueAndForget((()=>_f(i,y)));const T=b.docs.has(l);!T&&b.fromCache?f.reject(new M(S.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&b.fromCache&&h&&h.source==="server"?f.reject(new M(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(b)},error:b=>f.reject(b)}),y=new xf(_a(l.path),m,{includeMetadataChanges:!0,qa:!0});return yf(i,y)})(await kf(n),n.asyncQueue,e,t,s))),s.promise}function fv(n,e,t={}){const s=new At;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,h,f){const m=new Sf({next:b=>{m.Nu(),a.enqueueAndForget((()=>_f(i,y))),b.fromCache&&h.source==="server"?f.reject(new M(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(b)},error:b=>f.reject(b)}),y=new xf(l,m,{includeMetadataChanges:!0,qa:!0});return yf(i,y)})(await kf(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function Cf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="firestore.googleapis.com",Ru=!0;class ku{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new M(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Pf,this.ssl=Ru}else this.host=e.host,this.ssl=e.ssl??Ru;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Hw)throw new M(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cf(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ji{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ku({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ku(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new _x;switch(s.type){case"firstParty":return new vx(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new M(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Su.get(t);s&&(L("ComponentProvider","Removing Datastore"),Su.delete(t),s.terminate())})(this),Promise.resolve()}}function mv(n,e,t,s={}){var f;n=bn(n,ji);const r=ss(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&(_h(`https://${l}`),xh("Firestore",!0)),i.host!==Pf&&i.host!==l&&Jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...i,host:l,ssl:r,emulatorOptions:s};if(!Qt(h,a)&&(n._setSettings(h),s.mockUserToken)){let m,y;if(typeof s.mockUserToken=="string")m=s.mockUserToken,y=Me.MOCK_USER;else{m=Rg(s.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new M(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Me(b)}n._authCredentials=new xx(new pd(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Cn(this.firestore,e,this._query)}}class be{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(cr(t,be._jsonSchema))return new be(e,s||null,new B(le.fromString(t.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:we("string",be._jsonSchemaVersion),referencePath:we("string")};class Kt extends Cn{constructor(e,t,s){super(e,t,_a(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new B(e))}withConverter(e){return new Kt(this.firestore,e,this._path)}}function sr(n,e,...t){if(n=ye(n),gd("collection","path",e),n instanceof ji){const s=le.fromString(e,...t);return $l(s),new Kt(n,null,s)}{if(!(n instanceof be||n instanceof Kt))throw new M(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(le.fromString(e,...t));return $l(s),new Kt(n.firestore,null,s)}}function Se(n,e,...t){if(n=ye(n),arguments.length===1&&(e=da.newId()),gd("doc","path",e),n instanceof ji){const s=le.fromString(e,...t);return ql(s),new be(n,null,new B(s))}{if(!(n instanceof be||n instanceof Kt))throw new M(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(le.fromString(e,...t));return ql(s),new be(n.firestore,n instanceof Kt?n.converter:null,new B(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="AsyncQueue";class Pu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new lf(this,"async_queue_retry"),this._c=()=>{const s=yo();s&&L(Cu,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=yo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=yo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new At;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ls(e))throw e;L(Cu,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,kt("INTERNAL UNHANDLED ERROR: ",ju(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Ca.createAndSchedule(this,e,t,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&W(47125,{Pc:ju(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function ju(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Di extends ji{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Pu,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Pu(e),this._firestoreClient=void 0,await e}}}function pv(n,e){const t=typeof n=="object"?n:na(),s=typeof n=="string"?n:Zr,r=An(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Ng("firestore");i&&mv(r,...i)}return r}function Oa(n){if(n._terminated)throw new M(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||gv(n),n._firestoreClient}function gv(n){var s,r,i;const e=n._freezeSettings(),t=(function(l,h,f,m){return new Fx(l,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Cf(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new lv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ze(Pe.fromBase64String(e))}catch(t){throw new M(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ze(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ze._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cr(e,Ze._jsonSchema))return Ze.fromBase64String(e.bytes)}}Ze._jsonSchemaVersion="firestore/bytes/1.0",Ze._jsonSchema={type:we("string",Ze._jsonSchemaVersion),bytes:we("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xt._jsonSchemaVersion}}static fromJSON(e){if(cr(e,xt._jsonSchema))return new xt(e.latitude,e.longitude)}}xt._jsonSchemaVersion="firestore/geoPoint/1.0",xt._jsonSchema={type:we("string",xt._jsonSchemaVersion),latitude:we("number"),longitude:we("number")};/**
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
 */class wt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(cr(e,wt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new wt(e.vectorValues);throw new M(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wt._jsonSchemaVersion="firestore/vectorValue/1.0",wt._jsonSchema={type:we("string",wt._jsonSchemaVersion),vectorValues:we("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=/^__.*__$/;class jf{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Rn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Df(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ac:n})}}class Ma{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ma({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ai(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Df(this.Ac)&&yv.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class _v{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ki(e)}Cc(e,t,s,r=!1){return new Ma({Ac:e,methodName:t,Dc:s,path:ke.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vf(n){const e=n._freezeSettings(),t=ki(n._databaseId);return new _v(n._databaseId,!!e.ignoreUndefinedProperties,t)}class Mi extends Oi{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mi}}class La extends Oi{_toFieldTransform(e){return new hw(e.path,new er)}isEqual(e){return e instanceof La}}function xv(n,e,t,s){const r=n.Cc(1,e,t);Mf("Data must be an object, but it was:",r,s);const i=[],a=Ke.empty();on(s,((h,f)=>{const m=Fa(e,h,t);f=ye(f);const y=r.yc(m);if(f instanceof Mi)i.push(m);else{const b=dr(f,y);b!=null&&(i.push(m),a.set(m,b))}}));const l=new rt(i);return new jf(a,l,r.fieldTransforms)}function wv(n,e,t,s,r,i){const a=n.Cc(1,e,t),l=[Du(e,s,t)],h=[r];if(i.length%2!=0)throw new M(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<i.length;b+=2)l.push(Du(e,i[b])),h.push(i[b+1]);const f=[],m=Ke.empty();for(let b=l.length-1;b>=0;--b)if(!Iv(f,l[b])){const T=l[b];let C=h[b];C=ye(C);const j=a.yc(T);if(C instanceof Mi)f.push(T);else{const P=dr(C,j);P!=null&&(f.push(T),m.set(T,P))}}const y=new rt(f);return new jf(m,y,a.fieldTransforms)}function bv(n,e,t,s=!1){return dr(t,n.Cc(s?4:3,e))}function dr(n,e){if(Of(n=ye(n)))return Mf("Unsupported field value:",e,n),vv(n,e);if(n instanceof Oi)return(function(s,r){if(!Df(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const i=[];let a=0;for(const l of s){let h=dr(l,r.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),i.push(h),a++}return{arrayValue:{values:i}}})(n,e)}return(function(s,r){if((s=ye(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return cw(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=de.fromDate(s);return{timestampValue:si(r.serializer,i)}}if(s instanceof de){const i=new de(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:si(r.serializer,i)}}if(s instanceof xt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ze)return{bytesValue:Jd(r.serializer,s._byteString)};if(s instanceof be){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:va(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof wt)return(function(a,l){return{mapValue:{fields:{[Td]:{stringValue:Ad},[ei]:{arrayValue:{values:a.toArray().map((f=>{if(typeof f!="number")throw l.Sc("VectorValues must only contain numeric values.");return xa(l.serializer,f)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${wi(s)}`)})(n,e)}function vv(n,e){const t={};return xd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):on(n,((s,r)=>{const i=dr(r,e.mc(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function Of(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof xt||n instanceof Ze||n instanceof be||n instanceof Oi||n instanceof wt)}function Mf(n,e,t){if(!Of(t)||!yd(t)){const s=wi(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Du(n,e,t){if((e=ye(e))instanceof Vi)return e._internalPath;if(typeof e=="string")return Fa(n,e);throw ai("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ev=new RegExp("[~\\*/\\[\\]]");function Fa(n,e,t){if(e.search(Ev)>=0)throw ai(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vi(...e.split("."))._internalPath}catch{throw ai(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ai(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(i||a)&&(h+=" (found",i&&(h+=` in field ${s}`),a&&(h+=` in document ${r}`),h+=")"),new M(S.INVALID_ARGUMENT,l+n+h)}function Iv(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Tv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Li("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Tv extends Lf{data(){return super.data()}}function Li(n,e){return typeof e=="string"?Fa(n,e):e instanceof Vi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ua{}class Ff extends Ua{}function ci(n,e,...t){let s=[];e instanceof Ua&&s.push(e),s=s.concat(t),(function(i){const a=i.filter((h=>h instanceof Ba)).length,l=i.filter((h=>h instanceof Fi)).length;if(a>1||a>0&&l>0)throw new M(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class Fi extends Ff{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Fi(e,t,s)}_apply(e){const t=this._parse(e);return Uf(e._query,t),new Cn(e.firestore,e.converter,Bo(e._query,t))}_parse(e){const t=Vf(e.firestore);return(function(i,a,l,h,f,m,y){let b;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new M(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ou(y,m);const C=[];for(const j of y)C.push(Vu(h,i,j));b={arrayValue:{values:C}}}else b=Vu(h,i,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ou(y,m),b=bv(l,a,y,m==="in"||m==="not-in");return xe.create(f,m,b)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function li(n,e,t){const s=e,r=Li("where",n);return Fi._create(r,s,t)}class Ba extends Ua{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ba(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:ct.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let a=r;const l=i.getFlattenedFilters();for(const h of l)Uf(a,h),a=Bo(a,h)})(e._query,t),new Cn(e.firestore,e.converter,Bo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qa extends Ff{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new qa(e,t)}_apply(e){const t=(function(r,i,a){if(r.startAt!==null)throw new M(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new M(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Zs(i,a)})(e._query,this._field,this._direction);return new Cn(e.firestore,e.converter,(function(r,i){const a=r.explicitOrderBy.concat([i]);return new us(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)})(e._query,t))}}function Nv(n,e="asc"){const t=e,s=Li("orderBy",n);return qa._create(s,t)}function Vu(n,e,t){if(typeof(t=ye(t))=="string"){if(t==="")throw new M(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dd(e)&&t.indexOf("/")!==-1)throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(le.fromString(t));if(!B.isDocumentKey(s))throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Jl(n,new B(s))}if(t instanceof be)return Jl(n,t._key);throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wi(t)}.`)}function Ou(n,e){if(!Array.isArray(n)||n.length===0)throw new M(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Uf(n,e){const t=(function(r,i){for(const a of r)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new M(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Sv{convertValue(e,t="none"){switch(Zt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return on(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[ei].arrayValue)==null?void 0:r.values)==null?void 0:i.map((a=>ge(a.doubleValue)));return new wt(t)}convertGeoPoint(e){return new xt(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ei(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ys(e));default:return null}}convertTimestamp(e){const t=Jt(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=le.fromString(e);re(sf(s),9688,{name:e});const r=new Js(s.get(1),s.get(3)),i=new B(s.popFirst(5));return r.isEqual(t)||kt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}class Ls{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _n extends Lf{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Li("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_n._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_n._jsonSchemaVersion="firestore/documentSnapshot/1.0",_n._jsonSchema={type:we("string",_n._jsonSchemaVersion),bundleSource:we("string","DocumentSnapshot"),bundleName:we("string"),bundle:we("string")};class qr extends _n{data(e={}){return super.data(e)}}class zn{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ls(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new qr(this._firestore,this._userDataWriter,s.key,s,new Ls(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((l=>{const h=new qr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Ls(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const h=new qr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Ls(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let f=-1,m=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:Rv(l.type),doc:h,oldIndex:f,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=da.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Rv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n){n=bn(n,be);const e=bn(n.firestore,Di);return dv(Oa(e),n._key).then((t=>Cv(e,n,t)))}zn._jsonSchemaVersion="firestore/querySnapshot/1.0",zn._jsonSchema={type:we("string",zn._jsonSchemaVersion),bundleSource:we("string","QuerySnapshot"),bundleName:we("string"),bundle:we("string")};class Bf extends Sv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ze(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function ui(n){n=bn(n,Cn);const e=bn(n.firestore,Di),t=Oa(e),s=new Bf(e);return Av(n._query),fv(t,n._query).then((r=>new zn(e,s,n,r)))}function Mu(n,e,t,...s){n=bn(n,be);const r=bn(n.firestore,Di),i=Vf(r);let a;return a=typeof(e=ye(e))=="string"||e instanceof Vi?wv(i,"updateDoc",n._key,e,t,s):xv(i,"updateDoc",n._key,e),kv(r,[a.toMutation(n._key,Nt.exists(!0))])}function kv(n,e){return(function(s,r){const i=new At;return s.asyncQueue.enqueueAndForget((async()=>ev(await hv(s),r,i))),i.promise})(Oa(n),e)}function Cv(n,e,t){const s=t.docs.get(e._key),r=new Bf(n);return new _n(n,r,e._key,s,new Ls(t.hasPendingWrites,t.fromCache),e.converter)}function Lu(){return new La("serverTimestamp")}(function(e,t=!0){(function(r){as=r})(rs),bt(new ot("firestore",((s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),l=new Di(new wx(s.getProvider("auth-internal")),new Ex(a,s.getProvider("app-check-internal")),(function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new M(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Js(f.options.projectId,m)})(a,r),a);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),et(Ll,Fl,e),et(Ll,Fl,"esm2020")})();const qf="@firebase/installations",$a="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=1e4,Wf=`w:${$a}`,Hf="FIS_v2",Pv="https://firebaseinstallations.googleapis.com/v1",jv=3600*1e3,Dv="installations",Vv="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},En=new Tn(Dv,Vv,Ov);function zf(n){return n instanceof lt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf({projectId:n}){return`${Pv}/projects/${n}/installations`}function Kf(n){return{token:n.token,requestStatus:2,expiresIn:Lv(n.expiresIn),creationTime:Date.now()}}async function Qf(n,e){const s=(await e.json()).error;return En.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Yf({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Mv(n,{refreshToken:e}){const t=Yf(n);return t.append("Authorization",Fv(e)),t}async function Jf(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Lv(n){return Number(n.replace("s","000"))}function Fv(n){return`${Hf} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Gf(n),r=Yf(n),i=e.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&r.append("x-firebase-client",f)}const a={fid:t,authVersion:Hf,appId:n.appId,sdkVersion:Wf},l={method:"POST",headers:r,body:JSON.stringify(a)},h=await Jf(()=>fetch(s,l));if(h.ok){const f=await h.json();return{fid:f.fid||t,registrationStatus:2,refreshToken:f.refreshToken,authToken:Kf(f.authToken)}}else throw await Qf("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qv=/^[cdef][\w-]{21}$/,Xo="";function $v(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Wv(n);return qv.test(t)?t:Xo}catch{return Xo}}function Wv(n){return Bv(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Zf=new Map;function em(n,e){const t=Ui(n);tm(t,e),Hv(t,e)}function tm(n,e){const t=Zf.get(n);if(t)for(const s of t)s(e)}function Hv(n,e){const t=zv();t&&t.postMessage({key:n,fid:e}),Gv()}let gn=null;function zv(){return!gn&&"BroadcastChannel"in self&&(gn=new BroadcastChannel("[Firebase] FID Change"),gn.onmessage=n=>{tm(n.data.key,n.data.fid)}),gn}function Gv(){Zf.size===0&&gn&&(gn.close(),gn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv="firebase-installations-database",Qv=1,In="firebase-installations-store";let xo=null;function Wa(){return xo||(xo=Th(Kv,Qv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(In)}}})),xo}async function hi(n,e){const t=Ui(n),r=(await Wa()).transaction(In,"readwrite"),i=r.objectStore(In),a=await i.get(t);return await i.put(e,t),await r.done,(!a||a.fid!==e.fid)&&em(n,e.fid),e}async function nm(n){const e=Ui(n),s=(await Wa()).transaction(In,"readwrite");await s.objectStore(In).delete(e),await s.done}async function Bi(n,e){const t=Ui(n),r=(await Wa()).transaction(In,"readwrite"),i=r.objectStore(In),a=await i.get(t),l=e(a);return l===void 0?await i.delete(t):await i.put(l,t),await r.done,l&&(!a||a.fid!==l.fid)&&em(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(n){let e;const t=await Bi(n.appConfig,s=>{const r=Yv(s),i=Jv(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===Xo?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Yv(n){const e=n||{fid:$v(),registrationStatus:0};return sm(e)}function Jv(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(En.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Xv(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Zv(n)}:{installationEntry:e}}async function Xv(n,e){try{const t=await Uv(n,e);return hi(n.appConfig,t)}catch(t){throw zf(t)&&t.customData.serverCode===409?await nm(n.appConfig):await hi(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Zv(n){let e=await Fu(n.appConfig);for(;e.registrationStatus===1;)await Xf(100),e=await Fu(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Ha(n);return s||t}return e}function Fu(n){return Bi(n,e=>{if(!e)throw En.create("installation-not-found");return sm(e)})}function sm(n){return eE(n)?{fid:n.fid,registrationStatus:0}:n}function eE(n){return n.registrationStatus===1&&n.registrationTime+$f<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tE({appConfig:n,heartbeatServiceProvider:e},t){const s=nE(n,t),r=Mv(n,t),i=e.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&r.append("x-firebase-client",f)}const a={installation:{sdkVersion:Wf,appId:n.appId}},l={method:"POST",headers:r,body:JSON.stringify(a)},h=await Jf(()=>fetch(s,l));if(h.ok){const f=await h.json();return Kf(f)}else throw await Qf("Generate Auth Token",h)}function nE(n,{fid:e}){return`${Gf(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function za(n,e=!1){let t;const s=await Bi(n.appConfig,i=>{if(!rm(i))throw En.create("not-registered");const a=i.authToken;if(!e&&iE(a))return i;if(a.requestStatus===1)return t=sE(n,e),i;{if(!navigator.onLine)throw En.create("app-offline");const l=aE(i);return t=rE(n,l),l}});return t?await t:s.authToken}async function sE(n,e){let t=await Uu(n.appConfig);for(;t.authToken.requestStatus===1;)await Xf(100),t=await Uu(n.appConfig);const s=t.authToken;return s.requestStatus===0?za(n,e):s}function Uu(n){return Bi(n,e=>{if(!rm(e))throw En.create("not-registered");const t=e.authToken;return cE(t)?{...e,authToken:{requestStatus:0}}:e})}async function rE(n,e){try{const t=await tE(n,e),s={...e,authToken:t};return await hi(n.appConfig,s),t}catch(t){if(zf(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await nm(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await hi(n.appConfig,s)}throw t}}function rm(n){return n!==void 0&&n.registrationStatus===2}function iE(n){return n.requestStatus===2&&!oE(n)}function oE(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+jv}function aE(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function cE(n){return n.requestStatus===1&&n.requestTime+$f<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lE(n){const e=n,{installationEntry:t,registrationPromise:s}=await Ha(e);return s?s.catch(console.error):za(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uE(n,e=!1){const t=n;return await hE(t),(await za(t,e)).token}async function hE(n){const{registrationPromise:e}=await Ha(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(n){if(!n||!n.options)throw wo("App Configuration");if(!n.name)throw wo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw wo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function wo(n){return En.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="installations",fE="installations-internal",mE=n=>{const e=n.getProvider("app").getImmediate(),t=dE(e),s=An(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},pE=n=>{const e=n.getProvider("app").getImmediate(),t=An(e,im).getImmediate();return{getId:()=>lE(t),getToken:r=>uE(t,r)}};function gE(){bt(new ot(im,mE,"PUBLIC")),bt(new ot(fE,pE,"PRIVATE"))}gE();et(qf,$a);et(qf,$a,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="analytics",yE="firebase_id",_E="origin",xE=60*1e3,wE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ga="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new mi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qe=new Tn("analytics","Analytics",bE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(n){if(!n.startsWith(Ga)){const e=Qe.create("invalid-gtag-resource",{gtagURL:n});return $e.warn(e.message),""}return n}function om(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function EE(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function IE(n,e){const t=EE("firebase-js-sdk-policy",{createScriptURL:vE}),s=document.createElement("script"),r=`${Ga}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function TE(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function AE(n,e,t,s,r,i){const a=s[r];try{if(a)await e[a];else{const h=(await om(t)).find(f=>f.measurementId===r);h&&await e[h.appId]}}catch(l){$e.error(l)}n("config",r,i)}async function NE(n,e,t,s,r){try{let i=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const l=await om(t);for(const h of a){const f=l.find(y=>y.measurementId===h),m=f&&e[f.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",s,r||{})}catch(i){$e.error(i)}}function SE(n,e,t,s){async function r(i,...a){try{if(i==="event"){const[l,h]=a;await NE(n,e,t,l,h)}else if(i==="config"){const[l,h]=a;await AE(n,e,t,s,l,h)}else if(i==="consent"){const[l,h]=a;n("consent",l,h)}else if(i==="get"){const[l,h,f]=a;n("get",l,h,f)}else if(i==="set"){const[l]=a;n("set",l)}else n(i,...a)}catch(l){$e.error(l)}}return r}function RE(n,e,t,s,r){let i=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=SE(i,n,e,t),{gtagCore:i,wrappedGtag:window[r]}}function kE(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ga)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=30,PE=1e3;class jE{constructor(e={},t=PE){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const am=new jE;function DE(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function VE(n){var a;const{appId:e,apiKey:t}=n,s={method:"GET",headers:DE(t)},r=wE.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let l="";try{const h=await i.json();(a=h.error)!=null&&a.message&&(l=h.error.message)}catch{}throw Qe.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function OE(n,e=am,t){const{appId:s,apiKey:r,measurementId:i}=n.options;if(!s)throw Qe.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Qe.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new FE;return setTimeout(async()=>{l.abort()},xE),cm({appId:s,apiKey:r,measurementId:i},a,l,e)}async function cm(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=am){var l;const{appId:i,measurementId:a}=n;try{await ME(s,e)}catch(h){if(a)return $e.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:i,measurementId:a};throw h}try{const h=await VE(n);return r.deleteThrottleMetadata(i),h}catch(h){const f=h;if(!LE(f)){if(r.deleteThrottleMetadata(i),a)return $e.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:i,measurementId:a};throw h}const m=Number((l=f==null?void 0:f.customData)==null?void 0:l.httpStatus)===503?cl(t,r.intervalMillis,CE):cl(t,r.intervalMillis),y={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return r.setThrottleMetadata(i,y),$e.debug(`Calling attemptFetch again in ${m} millis`),cm(n,y,s,r)}}function ME(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s(Qe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function LE(n){if(!(n instanceof lt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class FE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function UE(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const i=await e,a={...s,send_to:i};n("event",t,a)}}async function BE(n,e,t,s){if(s&&s.global){const r={};for(const i of Object.keys(t))r[`user_properties.${i}`]=t[i];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(){if(bh())try{await vh()}catch(n){return $e.warn(Qe.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return $e.warn(Qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $E(n,e,t,s,r,i,a){const l=OE(n);l.then(b=>{t[b.measurementId]=b.appId,n.options.measurementId&&b.measurementId!==n.options.measurementId&&$e.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>$e.error(b)),e.push(l);const h=qE().then(b=>{if(b)return s.getId()}),[f,m]=await Promise.all([l,h]);kE(i)||IE(i,f.measurementId),r("js",new Date);const y=(a==null?void 0:a.config)??{};return y[_E]="firebase",y.update=!0,m!=null&&(y[yE]=m),r("config",f.measurementId,y),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.app=e}_delete(){return delete Gn[this.app.options.appId],Promise.resolve()}}let Gn={},Bu=[];const qu={};let bo="dataLayer",HE="gtag",$u,Ka,Wu=!1;function zE(){const n=[];if(wh()&&n.push("This is a browser extension environment."),Lg()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=Qe.create("invalid-analytics-context",{errorInfo:e});$e.warn(t.message)}}function GE(n,e,t){zE();const s=n.options.appId;if(!s)throw Qe.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)$e.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qe.create("no-api-key");if(Gn[s]!=null)throw Qe.create("already-exists",{id:s});if(!Wu){TE(bo);const{wrappedGtag:i,gtagCore:a}=RE(Gn,Bu,qu,bo,HE);Ka=i,$u=a,Wu=!0}return Gn[s]=$E(n,Bu,qu,e,$u,bo,t),new WE(n)}function KE(n=na()){n=ye(n);const e=An(n,di);return e.isInitialized()?e.getImmediate():QE(n)}function QE(n,e={}){const t=An(n,di);if(t.isInitialized()){const r=t.getImmediate();if(Qt(e,t.getOptions()))return r;throw Qe.create("already-initialized")}return t.initialize({options:e})}function YE(n,e,t){n=ye(n),BE(Ka,Gn[n.app.options.appId],e,t).catch(s=>$e.error(s))}function JE(n,e,t,s){n=ye(n),UE(Ka,Gn[n.app.options.appId],e,t,s).catch(r=>$e.error(r))}const Hu="@firebase/analytics",zu="0.10.19";function XE(){bt(new ot(di,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return GE(s,r,t)},"PUBLIC")),bt(new ot("analytics-internal",n,"PRIVATE")),et(Hu,zu),et(Hu,zu,"esm2020");function n(e){try{const t=e.getProvider(di).getImmediate();return{logEvent:(s,r,i)=>JE(t,s,r,i),setUserProperties:(s,r)=>YE(t,s,r)}}catch(t){throw Qe.create("interop-component-reg-failed",{reason:t})}}}XE();const Zo={apiKey:"AIzaSyBkMktbTfBNIdhtBwCC_cRBEavKeuTyCGA",authDomain:"myschola-5ec1f.firebaseapp.com",projectId:"myschola-5ec1f",storageBucket:"myschola-5ec1f.appspot.com",messagingSenderId:"927860875256",appId:"1:927860875256:web:ce73f8eabd09cac6f3400d",measurementId:"G-XTC703H7RN"};if(!Zo.apiKey||!Zo.projectId)throw console.error("Firebase configuration is missing. Please check your .env file."),new Error("Firebase configuration error");const Qa=Ah(Zo),tt=gx(Qa),fe=pv(Qa);KE(Qa);function ZE(){const[n,e]=R.useState(""),[t,s]=R.useState(!1),[r,i]=R.useState(!0),a=nn(),l=sn(),h=async m=>{var C,j;if((await Ce(Se(fe,"admins",m))).exists())return a("/admin",{replace:!0}),!0;if((await Ce(Se(fe,"teachers",m))).exists())return a("/admin",{replace:!0}),!0;if((await Ce(Se(fe,"students",m))).exists()){const P=((j=(C=l.state)==null?void 0:C.from)==null?void 0:j.pathname)||"/app/dashboard";return a(P,{replace:!0}),!0}return!1};R.useEffect(()=>{(async()=>{try{await tt.signOut()}catch(y){console.error("Error signing out existing session:",y)}finally{i(!1)}})()},[]);const f=async m=>{m.preventDefault(),e(""),s(!0);const y=new FormData(m.currentTarget),b=y.get("email"),T=y.get("password");try{console.log("Attempting to sign in with email:",b);const j=(await n0(tt,b,T)).user;console.log("Sign in successful. User UID:",j.uid),await h(j.uid)||(console.error("No role document found for UID:",j.uid),await tt.signOut(),e("Profile not found. Please contact your administrator."))}catch(C){console.error(C),C.code==="auth/invalid-email"?e("Please enter a valid email address."):C.code==="auth/user-not-found"?e("No account found with this email. Please contact your teacher to create an account."):C.code==="auth/wrong-password"?e("Incorrect password. Please try again."):C.code==="auth/invalid-credential"?e("Invalid email or password. Please try again."):e(C.message||"Failed to sign in. Please try again.")}finally{s(!1)}};return r?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Checking authentication..."})]})}):c.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[c.jsx("div",{className:"flex justify-center",children:c.jsxs(qe,{to:"/",className:"flex items-center",children:[c.jsx(Kn,{className:"h-12 w-12 text-blue-600"}),c.jsx("span",{className:"ml-2 text-3xl font-bold text-gray-900",children:"MySchola"})]})}),c.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"}),c.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Students: Use the email and password provided by your teacher"})]}),c.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:c.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[c.jsxs("form",{className:"space-y-6",onSubmit:f,children:[n&&c.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative",role:"alert",children:c.jsx("span",{className:"block sm:inline",children:n})}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),c.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:c.jsx(oh,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),c.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"you@example.com"})]})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),c.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[c.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:c.jsx(ih,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),c.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"********"})]})]}),c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),c.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),c.jsx("div",{className:"text-sm",children:c.jsx("a",{href:"#",className:"font-medium text-blue-600 hover:text-blue-500",children:"Forgot your password?"})})]}),c.jsx("div",{children:c.jsx("button",{type:"submit",disabled:t,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed",children:t?"Please wait...":"Sign in"})})]}),c.jsx("div",{className:"mt-6",children:c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"absolute inset-0 flex items-center",children:c.jsx("div",{className:"w-full border-t border-gray-300"})}),c.jsx("div",{className:"relative flex justify-center text-sm",children:c.jsx("span",{className:"px-2 bg-white text-gray-500",children:c.jsxs(qe,{to:"/",className:"flex items-center hover:text-gray-900 transition",children:[c.jsx(it,{className:"h-4 w-4 mr-1"}),"Back to Home"]})})})]})})]})})]})}function vo({children:n}){const[e,t]=R.useState(!0),[s,r]=R.useState(!1),[i,a]=R.useState(!1),l=sn();return R.useEffect(()=>{const h=yi(tt,async f=>{if(f)try{(await Ce(Se(fe,"students",f.uid))).exists()?(r(!0),a(!0)):(r(!1),a(!1))}catch(m){console.error("Error checking student status:",m),r(!1),a(!1)}else r(!1),a(!1);t(!1)});return()=>h()},[]),e?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Loading..."})]})}):!s||!i?c.jsx(Bm,{to:"/login",state:{from:l},replace:!0}):n}const eI=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?hp:e.includes("english")||e.includes("literature")||e.includes("language")?cp:e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?Ap:e.includes("geography")||e.includes("geography")?Sp:e.includes("history")?Cp:e.includes("music")?qp:e.includes("art")||e.includes("design")?Wp:e.includes("language")||e.includes("french")||e.includes("spanish")||e.includes("german")?jp:e.includes("computer")||e.includes("ict")||e.includes("it")?np:Kn},tI=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?"bg-blue-50 border-blue-200 text-blue-700":e.includes("english")||e.includes("literature")||e.includes("language")?"bg-purple-50 border-purple-200 text-purple-700":e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?"bg-green-50 border-green-200 text-green-700":e.includes("geography")?"bg-cyan-50 border-cyan-200 text-cyan-700":e.includes("history")?"bg-amber-50 border-amber-200 text-amber-700":e.includes("music")?"bg-pink-50 border-pink-200 text-pink-700":e.includes("art")||e.includes("design")?"bg-rose-50 border-rose-200 text-rose-700":"bg-gray-50 border-gray-200 text-gray-700"},lm="subjectAccess",nI=()=>{try{const n=localStorage.getItem(lm),e=n?JSON.parse(n):[];return Array.isArray(e)?e:[]}catch{return[]}},sI=n=>{localStorage.setItem(lm,JSON.stringify(n))},Gu=n=>(n==null?void 0:n.pin)||(n==null?void 0:n.accessPin)||"";function rI(){const n=nn(),[e,t]=R.useState(null),[s,r]=R.useState([]),[i,a]=R.useState(!0),[l,h]=R.useState(""),[f,m]=R.useState(null),[y,b]=R.useState(nI()),[T,C]=R.useState(null),[j,P]=R.useState(""),[O,D]=R.useState("");R.useEffect(()=>{(async()=>{try{const g=tt.currentUser;if(!g){n("/login");return}const v=await Ce(Se(fe,"students",g.uid));if(!v.exists()){h("Student profile not found"),a(!1);return}const x=v.data();if(t(x),console.log("Student data:",x),console.log("Student subjects array:",x.subjects),x.subjects&&x.subjects.length>0){const w=(await Promise.all(x.subjects.map(async q=>{try{const ee=await Ce(Se(fe,"subjects",q));return ee.exists()?{id:ee.id,...ee.data()}:(console.warn(`Subject document not found for ID: ${q}`),null)}catch(ee){return console.error(`Error fetching subject ${q}:`,ee),null}}))).filter(q=>q!==null);console.log("Loaded subjects:",w),console.log("Expected subjects:",x.subjects),console.log("Missing subjects:",x.subjects.filter(q=>!w.some(ee=>ee.id===q))),r(w),w.length!==x.subjects.length&&m({expected:x.subjects.length,loaded:w.length,missing:x.subjects.filter(q=>!w.some(ee=>ee.id===q))})}else console.log("No subjects array found in student data");a(!1)}catch(g){console.error("Error loading student data:",g),h("Failed to load dashboard data"),a(!1)}})()},[n]);const F=_=>!String(Gu(_)||"").trim()||y.includes(_.id),Q=_=>{C(_),P(""),D("")},ae=_=>{const g=String(Gu(_)||"").trim();if(g&&j.trim()!==g){D("Incorrect PIN");return}const v=Array.from(new Set([...y,_.id]));b(v),sI(v),C(null),P(""),D("")},ne=()=>{C(null),P(""),D("")},I=async()=>{try{await i0(tt),n("/login",{replace:!0})}catch(_){console.error("Error signing out:",_)}};return i?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",role:"status","aria-live":"polite",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto","aria-hidden":"true"}),c.jsx("p",{className:"mt-4 text-gray-600","aria-label":"Loading dashboard",children:"Loading your dashboard..."})]})}):l?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("p",{className:"text-red-600 mb-4",children:l}),c.jsx("button",{onClick:I,className:"text-blue-600 hover:text-blue-700 underline",children:"Sign out and try again"})]})}):c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx("header",{className:"bg-white shadow-sm",role:"banner",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx($r,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),c.jsxs("div",{children:[c.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"MySchola Student Dashboard"}),c.jsxs("p",{className:"text-sm text-gray-500",children:["Hi, ",c.jsx("span",{className:"font-medium",children:(e==null?void 0:e.name)||"Student"})]})]})]}),c.jsxs("nav",{className:"flex items-center gap-3","aria-label":"Dashboard navigation",children:[c.jsx(qe,{to:"/",className:"text-sm text-gray-600 hover:text-gray-900 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition","aria-label":"Return to homepage",children:"Back to site"}),c.jsxs("button",{onClick:I,className:"inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition","aria-label":"Sign out of your account",children:[c.jsx(Op,{className:"h-4 w-4","aria-hidden":"true"}),"Sign out"]})]})]})}),c.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"mb-8",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Your Subjects"}),c.jsx("p",{className:"text-gray-600",children:"Select a subject to join Zoom sessions, watch recordings, or download homework."})]}),f&&c.jsxs("div",{className:"mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4",role:"alert","aria-live":"polite",children:[c.jsx("p",{className:"text-sm text-yellow-800 font-medium mb-1",children:"Some subjects may not be loading correctly"}),c.jsxs("p",{className:"text-xs text-yellow-700",children:["Expected ",f.expected," subject(s), loaded ",f.loaded,". Please check the browser console for details."]})]}),s.length===0?c.jsxs("div",{className:"bg-white rounded-lg shadow p-8 text-center",role:"region","aria-labelledby":"no-subjects-heading",children:[c.jsx($r,{className:"h-12 w-12 text-gray-400 mx-auto mb-4","aria-hidden":"true"}),c.jsx("h3",{id:"no-subjects-heading",className:"text-lg font-semibold text-gray-900 mb-2",children:"No Subjects Enrolled"}),c.jsx("p",{className:"text-gray-600 mb-2",children:"You're not enrolled in any subjects yet."}),c.jsx("p",{className:"text-sm text-gray-500",children:"Please contact your teacher to get enrolled."})]}):c.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",role:"list","aria-label":"Enrolled subjects",children:s.map(_=>{const g=eI(_.name),v=tI(_.name);return c.jsxs("article",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",role:"listitem",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[c.jsx("div",{className:`p-2 rounded-lg ${v}`,children:c.jsx(g,{className:"h-6 w-6","aria-hidden":"true"})}),c.jsx("h3",{className:"text-xl font-semibold text-gray-900 flex-1",children:_.name})]}),c.jsx("div",{className:"space-y-3",children:F(_)?c.jsxs(c.Fragment,{children:[_.zoomLink&&c.jsxs("a",{href:_.zoomLink,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`Join Zoom session for ${_.name}`,children:[c.jsx(Ep,{className:"h-4 w-4","aria-hidden":"true"}),"Join Zoom"]}),c.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[c.jsxs(qe,{to:`/app/subject/${_.id}/recordings`,className:"flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`View recordings for ${_.name}`,children:[c.jsx(Qn,{className:"h-4 w-4","aria-hidden":"true"}),"Recordings"]}),c.jsxs(qe,{to:`/app/subject/${_.id}/homework`,className:"flex items-center justify-center gap-2 text-green-600 hover:text-green-700 px-4 py-2 border border-green-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition font-medium","aria-label":`View homework for ${_.name}`,children:[c.jsx(Hs,{className:"h-4 w-4","aria-hidden":"true"}),"Homework"]})]})]}):c.jsxs("div",{className:"space-y-3",children:[c.jsx("p",{className:"text-sm text-gray-600",children:"This subject is locked. Enter the PIN to unlock."}),T===_.id?c.jsxs("div",{className:"space-y-2",children:[c.jsx("input",{type:"password",value:j,onChange:x=>P(x.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Subject PIN"}),O&&c.jsx("p",{className:"text-sm text-red-600",children:O}),c.jsxs("div",{className:"flex flex-wrap gap-2",children:[c.jsx("button",{type:"button",onClick:()=>ae(_),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Unlock"}),c.jsx("button",{type:"button",onClick:ne,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Cancel"})]})]}):c.jsx("button",{type:"button",onClick:()=>Q(_.id),className:"w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Enter PIN"})]})})]},_.id)})})]})]})}const um="subjectAccess",iI=()=>{try{const n=localStorage.getItem(um),e=n?JSON.parse(n):[];return Array.isArray(e)?e:[]}catch{return[]}},oI=n=>{localStorage.setItem(um,JSON.stringify(n))},aI=n=>(n==null?void 0:n.pin)||(n==null?void 0:n.accessPin)||"";function cI(){const{subjectId:n}=sh(),e=nn(),[t,s]=R.useState([]),[r,i]=R.useState([]),[a,l]=R.useState(null),[h,f]=R.useState(!0),[m,y]=R.useState(""),[b,T]=R.useState(!1),[C,j]=R.useState(""),[P,O]=R.useState(""),[D,F]=R.useState(""),[Q,ae]=R.useState(iI()),[ne,I]=R.useState(0);R.useEffect(()=>{const E=async()=>{try{if(!tt.currentUser){e("/login");return}const q=Se(fe,"subjects",n),ee=await Ce(q);if(ee.exists()){const ue={id:n,...ee.data()};l(ue);const We=aI(ue);if(F(We),!(!We||Q.includes(n))){T(!0),f(!1);return}}let Ye;try{Ye=ci(sr(fe,"recordings"),li("subjectId","==",n),Nv("date","desc"))}catch(ue){console.warn("OrderBy failed, using simple query:",ue),Ye=ci(sr(fe,"recordings"),li("subjectId","==",n))}const Je=(await ui(Ye)).docs.map(ue=>({id:ue.id,...ue.data()})).filter(ue=>ue.approvalStatus==="approved"||!ue.approvalStatus).sort((ue,We)=>{var ut,ht;const Et=(ut=ue.date)!=null&&ut.toDate?ue.date.toDate():ue.date?new Date(ue.date):new Date(0);return((ht=We.date)!=null&&ht.toDate?We.date.toDate():We.date?new Date(We.date):new Date(0))-Et});s(Je),i(Je),T(!1),f(!1)}catch(w){console.error("Error loading recordings:",w),y("Failed to load recordings"),f(!1)}};n&&(f(!0),y(""),E())},[n,e,Q,ne]);const _=E=>{E.preventDefault();const w=String(D||"").trim();if(!w){T(!1);return}if(C.trim()!==w){O("Incorrect PIN");return}const q=Array.from(new Set([...Q,n]));ae(q),oI(q),j(""),O(""),T(!1),I(ee=>ee+1)},g=()=>{var w;return a?(((w=a.name)==null?void 0:w.toLowerCase())||"").includes("english"):!1},v=()=>{const E={};return r.forEach(w=>{const q=w.examBoard||"Other",ee=w.tier||(g()?"General":"Other"),Ye=`${q}_${ee}`;E[Ye]||(E[Ye]={examBoard:q,tier:ee,recordings:[]}),E[Ye].recordings.push(w)}),Object.values(E).sort((w,q)=>w.examBoard!==q.examBoard?w.examBoard==="AQA"?-1:q.examBoard==="AQA"?1:w.examBoard==="Edexcel"?-1:q.examBoard==="Edexcel"?1:w.examBoard.localeCompare(q.examBoard):w.tier==="Foundation"?-1:q.tier==="Foundation"?1:w.tier==="Higher"?-1:q.tier==="Higher"?1:w.tier.localeCompare(q.tier))},x=E=>E?(E.toDate?E.toDate():new Date(E)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"Date not available";return h?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Loading recordings..."})]})}):b?c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs(qe,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[c.jsx(it,{className:"h-4 w-4"}),"Back to Dashboard"]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsx("h1",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Enter Subject PIN"}),c.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"This subject is locked. Enter the PIN to access recordings."}),c.jsxs("form",{onSubmit:_,className:"space-y-4",children:[c.jsx("input",{type:"password",value:C,onChange:E=>j(E.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Subject PIN",autoFocus:!0}),P&&c.jsx("div",{className:"text-sm text-red-600",children:P}),c.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"Unlock Subject"})]})]})]})}):c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs(qe,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[c.jsx(it,{className:"h-4 w-4"}),"Back to Dashboard"]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[c.jsx(Qn,{className:"h-6 w-6 text-blue-600"}),c.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Recordings - ",(a==null?void 0:a.name)||"Subject"]})]}),c.jsx("p",{className:"text-gray-600",children:"Watch past lesson recordings for this subject."})]}),m&&c.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6",children:m}),r.length===0?c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[c.jsx(Qn,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),c.jsx("p",{className:"text-gray-600",children:"No recordings available yet."}),c.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Check back later for new recordings."})]}):c.jsx("div",{className:"space-y-6",children:v().map((E,w)=>c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",children:[c.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 px-6 py-4",children:c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx($r,{className:"h-5 w-5 text-blue-600"}),c.jsxs("div",{children:[c.jsxs("h3",{className:"text-lg font-semibold text-gray-900",children:[E.examBoard,!g()&&E.tier&&c.jsxs("span",{className:"ml-2 text-base font-normal text-gray-600",children:["- ",E.tier]})]}),c.jsxs("p",{className:"text-sm text-gray-600",children:[E.recordings.length," recording",E.recordings.length!==1?"s":""]})]})]})}),c.jsx("div",{className:"p-6 space-y-4",children:E.recordings.map(q=>c.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:c.jsxs("div",{className:"flex items-start justify-between",children:[c.jsxs("div",{className:"flex-1",children:[c.jsx("h4",{className:"text-base font-semibold text-gray-900 mb-2",children:q.title}),c.jsx("p",{className:"text-sm text-gray-500",children:x(q.date)})]}),c.jsxs("a",{href:q.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"ml-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap",children:[c.jsx(Kp,{className:"h-4 w-4"}),"Watch"]})]})},q.id))})]},w))})]})})}function lI(){const{subjectId:n}=sh(),[e,t]=R.useState([]),[s,r]=R.useState(null),[i,a]=R.useState(!0),[l,h]=R.useState(null);R.useEffect(()=>{n&&(async()=>{try{const b=Se(fe,"subjects",n),T=await Ce(b);T.exists()&&r({id:n,...T.data()});const C=ci(sr(fe,"homeworks"),li("subjectId","==",n)),P=(await ui(C)).docs.map(O=>({id:O.id,...O.data()}));t(P),a(!1)}catch(b){console.error("Error loading homework:",b),a(!1)}})()},[n]);const f=y=>y?(y.toDate?y.toDate():new Date(y)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"No due date",m=y=>y?(y.toDate?y.toDate():new Date(y))<new Date:!1;return i?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Loading homework..."})]})}):c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs(qe,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[c.jsx(it,{className:"h-4 w-4"}),"Back to Dashboard"]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[c.jsx(Hs,{className:"h-6 w-6 text-green-600"}),c.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Homework - ",(s==null?void 0:s.name)||"Subject"]})]}),c.jsx("p",{className:"text-gray-600",children:"Download your homework assignments."})]}),l?c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsxs("div",{className:"flex items-center justify-between mb-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:l.title}),c.jsx("button",{onClick:()=>{h(null)},className:"text-gray-600 hover:text-gray-900",children:"Close"})]}),l.description&&c.jsx("p",{className:"text-gray-600 mb-6",children:l.description}),c.jsxs("p",{className:"text-sm text-gray-500 mb-6",children:["Due: ",f(l.dueDate)]}),l.attachmentUrl&&c.jsxs("a",{href:l.attachmentUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6",children:[c.jsx(Qc,{className:"h-5 w-5"}),"Download ",l.attachmentName||"homework file"]}),!l.attachmentUrl&&c.jsx("p",{className:"text-gray-600",children:"No homework file attached."})]}):c.jsx("div",{className:"space-y-4",children:e.length===0?c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[c.jsx(Hs,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),c.jsx("p",{className:"text-gray-600",children:"No homework assignments available yet."})]}):e.map(y=>{const b=m(y.dueDate);return c.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:c.jsxs("div",{className:"flex items-start justify-between mb-4",children:[c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:y.title}),y.description&&c.jsx("p",{className:"text-gray-600 mb-2",children:y.description}),y.attachmentUrl&&c.jsxs("a",{href:y.attachmentUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-2",children:[c.jsx(Qc,{className:"h-4 w-4"}),"Download ",y.attachmentName||"homework file"]}),c.jsx("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsx(ea,{className:"h-4 w-4"}),"Due: ",f(y.dueDate)]})}),b&&c.jsx("div",{className:"mt-3 text-red-600 text-sm font-medium",children:"Overdue"})]}),c.jsx("button",{onClick:()=>h(y),className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"View Details"})]})},y.id)})})]})})}const uI="myschola-5ec1f",hI=`https://us-central1-${uI}.cloudfunctions.net`,Ku=hI,dI=async()=>{const n=tt.currentUser;if(!n)throw new Error("User is not authenticated");return n.getIdToken()},Ya=async(n,e)=>{if(!Ku)throw new Error("Functions base URL is not configured");const t=await dI(),s=await fetch(`${Ku}/${n}`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(e||{})});if(!s.ok){const r=await s.text();throw new Error(r||`Request failed (${s.status})`)}return s.json()},Qu=n=>Ya("createHidriveUpload",n),fI=n=>Ya("createRecording",n),mI=n=>Ya("createHomework",n);function pI(){const n=nn(),[e,t]=R.useState(!1),[s,r]=R.useState(!0),[i,a]=R.useState([]),[l,h]=R.useState(""),[f,m]=R.useState(null),[y,b]=R.useState("recording"),[T,C]=R.useState(""),[j,P]=R.useState(null),[O,D]=R.useState(0),[F,Q]=R.useState(""),[ae,ne]=R.useState(""),[I,_]=R.useState([]),[g,v]=R.useState(""),[x,E]=R.useState(""),[w,q]=R.useState(""),[ee,Ye]=R.useState(null),[Pn,Je]=R.useState(0),[ue,We]=R.useState(!1),[Et,ve]=R.useState("");R.useEffect(()=>{const U=yi(tt,async H=>{if(!H){t(!1),r(!1),n("/login",{replace:!0});return}try{const se=await Ce(Se(fe,"admins",H.uid)),ie=se.exists()?null:await Ce(Se(fe,"teachers",H.uid));se.exists()||ie!=null&&ie.exists()?t(!0):(t(!1),n("/login",{replace:!0}))}catch(se){console.error("Error verifying role:",se),t(!1),n("/login",{replace:!0})}finally{r(!1)}});return()=>U()},[n]),R.useEffect(()=>{e&&(async()=>{try{const se=(await ui(sr(fe,"subjects"))).docs.map(ie=>({id:ie.id,...ie.data()}));if(a(se),se.length>0){const ie=se[0];h(ie.id),m(ie)}}catch(H){console.error("Error loading subjects:",H)}})()},[e]),R.useEffect(()=>{(async()=>{if(y==="approve"&&e)try{const H=ci(sr(fe,"recordings"),li("approvalStatus","==","pending")),se=await ui(H),ie=await Promise.all(se.docs.map(async je=>{const ce=je.data();let Te="Unknown";if(ce.subjectId)try{const De=await Ce(je(fe,"subjects",ce.subjectId));De.exists()&&(Te=De.data().name)}catch(De){console.error("Error fetching subject:",De)}return{id:je.id,...ce,subjectName:Te}}));_(ie)}catch(H){console.error("Error loading pending recordings:",H)}})()},[y,e]),R.useEffect(()=>{const U=i.find(H=>H.id===l);m(U||null),Q(""),ne("")},[l,i]);const ut=()=>{var H;return f?(((H=f.name)==null?void 0:H.toLowerCase())||"").includes("english"):!1},ht=(U,H,se)=>new Promise((ie,je)=>{if(!(H!=null&&H.uploadUrl)){je(new Error("Upload URL is missing"));return}const ce=new XMLHttpRequest;ce.open(H.method||"PUT",H.uploadUrl,!0),ce.responseType="json",H.headers&&Object.entries(H.headers).forEach(([Te,De])=>{De&&ce.setRequestHeader(Te,De)}),ce.upload.onprogress=Te=>{if(Te.lengthComputable){const De=Math.round(Te.loaded/Te.total*100);se&&se(De)}},ce.onload=()=>{if(ce.status>=200&&ce.status<300){se&&se(100);let Te=ce.response;if(!Te&&ce.responseText)try{Te=JSON.parse(ce.responseText)}catch{Te=null}ie({response:Te})}else je(new Error(`Upload failed (${ce.status})`))},ce.onerror=()=>{je(new Error("Upload failed"))},ce.send(U)}),ds=async U=>{if(U.preventDefault(),!l||!T||!F){ve("Please fill in all required fields");return}if(!j){ve("Please upload a video file to continue");return}if(!ut()&&!ae){ve("Please select a tier (Foundation or Higher)");return}We(!0),ve("");try{D(0);const H=await Qu({subjectId:l,fileName:j.name,contentType:j.type,uploadType:"recording"}),se=await ht(j,H,D),ie=se==null?void 0:se.response,je=(ie==null?void 0:ie.id)||(ie==null?void 0:ie.pid)||(ie==null?void 0:ie.file_id)||null,ce={subjectId:l,title:T,examBoard:F,tier:ut()?null:ae,hidrivePath:H.hidrivePath,hidriveFileId:je,fileName:j.name};sessionStorage.setItem("pendingRecording",JSON.stringify(ce)),C(""),P(null),D(0),Q(""),ne(""),n("/admin/share-link",{state:{pendingRecording:ce}})}catch(H){console.error("Error adding recording:",H),ve("Failed to upload recording"),D(0)}finally{We(!1)}},fs=async U=>{try{await Mu(Se(fe,"recordings",U),{approvalStatus:"approved",approvedAt:Lu()}),_(I.filter(H=>H.id!==U)),ve("Recording approved successfully!"),setTimeout(()=>ve(""),3e3)}catch(H){console.error("Error approving recording:",H),ve("Failed to approve recording")}},ms=async U=>{try{await Mu(Se(fe,"recordings",U),{approvalStatus:"rejected",rejectedAt:Lu()}),_(I.filter(H=>H.id!==U)),ve("Recording rejected"),setTimeout(()=>ve(""),3e3)}catch(H){console.error("Error rejecting recording:",H),ve("Failed to reject recording")}},ps=async U=>{if(U.preventDefault(),!l||!g){ve("Please fill in all required fields");return}if(!ee){ve("Please upload a homework file");return}We(!0),ve("");try{let H=null,se=null,ie=null,je=null,ce=null;if(ee){Je(0);const De=await Qu({subjectId:l,fileName:ee.name,contentType:ee.type,uploadType:"homework"}),an=await ht(ee,De,Je),Xe=an==null?void 0:an.response;se=(Xe==null?void 0:Xe.id)||(Xe==null?void 0:Xe.pid)||(Xe==null?void 0:Xe.file_id)||null,H=De.hidrivePath,ie=ee.name,je=ee.type,ce=ee.size}const Te={subjectId:l,title:g,description:x,dueDate:w?new Date(w).toISOString():null,attachmentName:ie,attachmentContentType:je,attachmentSize:ce,hidrivePath:H,hidriveFileId:se,fileName:ee.name};sessionStorage.setItem("pendingHomework",JSON.stringify(Te)),v(""),E(""),q(""),Ye(null),Je(0),n("/admin/homework-share-link",{state:{pendingHomework:Te}})}catch(H){console.error("Error adding homework:",H),ve("Failed to add homework")}finally{We(!1)}};return s?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):e?c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Admin Panel"}),c.jsx("button",{onClick:async()=>{await tt.signOut(),n("/login",{replace:!0})},className:"text-gray-600 hover:text-gray-900 underline text-sm",children:"Sign out"})]})}),c.jsxs("div",{className:"flex gap-2 mb-6 flex-wrap",children:[c.jsxs("button",{onClick:()=>b("recording"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${y==="recording"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[c.jsx(Qn,{className:"h-4 w-4"}),"Add Recording"]}),c.jsxs("button",{onClick:()=>b("homework"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${y==="homework"?"bg-green-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[c.jsx(Hs,{className:"h-4 w-4"}),"Add Homework"]}),c.jsxs("button",{onClick:()=>b("approve"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition relative ${y==="approve"?"bg-purple-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[c.jsx(yn,{className:"h-4 w-4"}),"Approve Recordings",I.length>0&&c.jsx("span",{className:"ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5",children:I.length})]})]}),Et&&c.jsx("div",{className:`mb-6 p-4 rounded-lg ${Et.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:Et}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Select Subject"}),c.jsx("select",{value:l,onChange:U=>h(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:i.map(U=>c.jsx("option",{value:U.id,children:U.name},U.id))})]}),y==="recording"&&c.jsxs("form",{onSubmit:ds,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Recording"}),c.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Recordings will be pending approval before students can view them."}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),c.jsx("input",{type:"text",value:T,onChange:U=>C(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"e.g., Algebra Basics - Lesson 1",required:!0})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Exam Board *"}),c.jsxs("select",{value:F,onChange:U=>Q(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[c.jsx("option",{value:"",children:"Select Exam Board"}),c.jsx("option",{value:"AQA",children:"AQA"}),c.jsx("option",{value:"Edexcel",children:"Edexcel"})]})]}),!ut()&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Tier *"}),c.jsxs("select",{value:ae,onChange:U=>ne(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[c.jsx("option",{value:"",children:"Select Tier"}),c.jsx("option",{value:"Foundation",children:"Foundation"}),c.jsx("option",{value:"Higher",children:"Higher"})]})]}),ut()&&c.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:c.jsx("p",{className:"text-sm text-blue-800",children:"English subjects do not have Foundation/Higher tiers."})}),c.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700",children:"After upload, you will be taken to a new page to paste the HiDrive share link."}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Upload Video File"}),c.jsx("input",{type:"file",accept:"video/*",onChange:U=>{var se;const H=((se=U.target.files)==null?void 0:se[0])||null;P(H),D(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),O>0&&O<100&&c.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",O,"%"]})]})]}),c.jsxs("button",{type:"submit",disabled:ue,className:"mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[c.jsx(Yc,{className:"h-4 w-4"}),ue?"Adding...":"Add Recording (Pending Approval)"]})]}),y==="approve"&&c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Approve Recordings"}),c.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Review and approve pending recordings. Only approved recordings will be visible to students."}),I.length===0?c.jsxs("div",{className:"text-center py-8",children:[c.jsx(yn,{className:"h-12 w-12 text-green-500 mx-auto mb-4"}),c.jsx("p",{className:"text-gray-600",children:"No pending recordings to approve."})]}):c.jsx("div",{className:"space-y-4",children:I.map(U=>c.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:c.jsxs("div",{className:"flex items-start justify-between",children:[c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:U.title}),c.jsxs("div",{className:"space-y-1 text-sm text-gray-600",children:[c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Subject:"})," ",U.subjectName]}),c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",U.examBoard]}),U.tier&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Tier:"})," ",U.tier]}),U.date&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Date:"})," ",U.date.toDate?U.date.toDate().toLocaleDateString("en-GB"):"N/A"]})]}),c.jsxs("a",{href:U.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm mt-2",children:[c.jsx(Qn,{className:"h-4 w-4"}),"Preview Video"]})]}),c.jsxs("div",{className:"flex gap-2 ml-4",children:[c.jsxs("button",{onClick:()=>fs(U.id),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2",children:[c.jsx(yn,{className:"h-4 w-4"}),"Approve"]}),c.jsx("button",{onClick:()=>ms(U.id),className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition",children:"Reject"})]})]})},U.id))})]}),y==="homework"&&c.jsxs("form",{onSubmit:ps,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Homework"}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),c.jsx("input",{type:"text",value:g,onChange:U=>v(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",required:!0})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Description"}),c.jsx("textarea",{value:x,onChange:U=>E(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",rows:"3"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Due Date"}),c.jsx("input",{type:"datetime-local",value:w,onChange:U=>q(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Homework File *"}),c.jsx("input",{type:"file",required:!0,onChange:U=>{var se;const H=((se=U.target.files)==null?void 0:se[0])||null;Ye(H),Je(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"}),Pn>0&&Pn<100&&c.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",Pn,"%"]})]}),c.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700",children:"After upload, you will be taken to a new page to paste the HiDrive share link."})]}),c.jsxs("button",{type:"submit",disabled:ue,className:"mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[c.jsx(Yc,{className:"h-4 w-4"}),ue?"Adding...":"Add Homework"]})]})]})}):null}const Eo="pendingRecording";function gI(){const n=nn(),e=sn(),[t,s]=R.useState(!0),[r,i]=R.useState(!1),[a,l]=R.useState(null),[h,f]=R.useState(""),[m,y]=R.useState(""),[b,T]=R.useState(""),[C,j]=R.useState(!1);R.useEffect(()=>{const O=yi(tt,async D=>{if(!D){i(!1),s(!1),n("/login",{replace:!0});return}try{const F=await Ce(Se(fe,"admins",D.uid)),Q=F.exists()?null:await Ce(Se(fe,"teachers",D.uid));F.exists()||Q!=null&&Q.exists()?i(!0):(i(!1),n("/login",{replace:!0}))}catch(F){console.error("Error verifying role:",F),i(!1),n("/login",{replace:!0})}finally{s(!1)}});return()=>O()},[n]),R.useEffect(()=>{var F;const O=(F=e.state)==null?void 0:F.pendingRecording;if(O){sessionStorage.setItem(Eo,JSON.stringify(O)),l(O);return}const D=sessionStorage.getItem(Eo);if(D)try{l(JSON.parse(D))}catch{l(null)}},[e.state]),R.useEffect(()=>{(async()=>{if(a!=null&&a.subjectId)try{const D=await Ce(Se(fe,"subjects",a.subjectId));D.exists()&&f(D.data().name||"")}catch(D){console.error("Error loading subject:",D)}})()},[a]);const P=async O=>{if(O.preventDefault(),!a){T("No pending upload found. Go back and upload again.");return}if(!m){T("Paste the HiDrive share link to continue.");return}j(!0),T("");try{const D=await fI({subjectId:a.subjectId,title:a.title,examBoard:a.examBoard,tier:a.tier,videoUrl:m,hidrivePath:a.hidrivePath,hidriveFileId:a.hidriveFileId});sessionStorage.removeItem(Eo);const F=(D==null?void 0:D.approvalStatus)==="approved"?"Recording added and approved!":"Recording added successfully! It will be visible to students after approval.";T(F)}catch(D){console.error("Error saving recording:",D),T("Failed to save recording")}finally{j(!1)}};return t?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):r?a?c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Paste HiDrive Share Link"}),c.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Your upload is complete. Create a share link in HiDrive and paste it below."})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Recording Details"}),c.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Title:"})," ",a.title]}),c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Subject:"})," ",h||a.subjectId]}),c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",a.examBoard]}),a.tier&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Tier:"})," ",a.tier]}),a.fileName&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"File:"})," ",a.fileName]})]})]}),c.jsxs("form",{onSubmit:P,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4",children:[c.jsx("p",{children:"1) Open HiDrive and find the uploaded file."}),c.jsx("p",{children:"2) Click Share -> Create link -> Copy link."}),c.jsx("p",{children:"3) Paste the link below and click Save Recording."})]}),c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HiDrive Share Link"}),c.jsx("input",{type:"url",value:m,onChange:O=>y(O.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://hidrive.ionos.com/lnk/...",required:!0}),b&&c.jsx("div",{className:`mt-4 p-3 rounded-md text-sm ${b.includes("successfully")||b.includes("approved")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:b}),c.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[c.jsx("button",{type:"submit",disabled:C,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:C?"Saving...":"Save Recording"}),c.jsx("button",{type:"button",onClick:()=>n("/admin"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Back to Admin"})]})]})]})}):c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center",children:[c.jsx("p",{className:"text-gray-700 mb-4",children:"No pending upload found. Please upload a file first."}),c.jsx("button",{onClick:()=>n("/admin",{replace:!0}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Back to Admin"})]})}):null}const Io="pendingHomework";function yI(){const n=nn(),e=sn(),[t,s]=R.useState(!0),[r,i]=R.useState(!1),[a,l]=R.useState(null),[h,f]=R.useState(""),[m,y]=R.useState(""),[b,T]=R.useState(""),[C,j]=R.useState(!1);R.useEffect(()=>{const O=yi(tt,async D=>{if(!D){i(!1),s(!1),n("/login",{replace:!0});return}try{const F=await Ce(Se(fe,"admins",D.uid)),Q=F.exists()?null:await Ce(Se(fe,"teachers",D.uid));F.exists()||Q!=null&&Q.exists()?i(!0):(i(!1),n("/login",{replace:!0}))}catch(F){console.error("Error verifying role:",F),i(!1),n("/login",{replace:!0})}finally{s(!1)}});return()=>O()},[n]),R.useEffect(()=>{var F;const O=(F=e.state)==null?void 0:F.pendingHomework;if(O){sessionStorage.setItem(Io,JSON.stringify(O)),l(O);return}const D=sessionStorage.getItem(Io);if(D)try{l(JSON.parse(D))}catch{l(null)}},[e.state]),R.useEffect(()=>{(async()=>{if(a!=null&&a.subjectId)try{const D=await Ce(Se(fe,"subjects",a.subjectId));D.exists()&&f(D.data().name||"")}catch(D){console.error("Error loading subject:",D)}})()},[a]);const P=async O=>{if(O.preventDefault(),!a){T("No pending upload found. Go back and upload again.");return}if(!m){T("Paste the HiDrive share link to continue.");return}j(!0),T("");try{await mI({subjectId:a.subjectId,title:a.title,description:a.description,dueDate:a.dueDate||null,attachmentUrl:m,attachmentName:a.attachmentName||a.fileName||null,attachmentContentType:a.attachmentContentType||null,attachmentSize:a.attachmentSize||null,hidrivePath:a.hidrivePath,hidriveFileId:a.hidriveFileId}),sessionStorage.removeItem(Io),T("Homework added successfully!")}catch(D){console.error("Error saving homework:",D),T("Failed to save homework")}finally{j(!1)}};return t?c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),c.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):r?a?c.jsx("div",{className:"min-h-screen bg-gray-50",children:c.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Paste HiDrive Share Link"}),c.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Your upload is complete. Create a share link in HiDrive and paste it below."})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[c.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Homework Details"}),c.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Title:"})," ",a.title]}),c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Subject:"})," ",h||a.subjectId]}),a.dueDate&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Due:"})," ",new Date(a.dueDate).toLocaleString("en-GB")]}),a.fileName&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"File:"})," ",a.fileName]})]})]}),c.jsxs("form",{onSubmit:P,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[c.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4",children:[c.jsx("p",{children:"1) Open HiDrive and find the uploaded file."}),c.jsx("p",{children:"2) Click Share -> Create link -> Copy link."}),c.jsx("p",{children:"3) Paste the link below and click Save Homework."})]}),c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HiDrive Share Link"}),c.jsx("input",{type:"url",value:m,onChange:O=>y(O.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://hidrive.ionos.com/lnk/...",required:!0}),b&&c.jsx("div",{className:`mt-4 p-3 rounded-md text-sm ${b.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:b}),c.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[c.jsx("button",{type:"submit",disabled:C,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:C?"Saving...":"Save Homework"}),c.jsx("button",{type:"button",onClick:()=>n("/admin"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Back to Admin"})]})]})]})}):c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:c.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center",children:[c.jsx("p",{className:"text-gray-700 mb-4",children:"No pending upload found. Please upload a file first."}),c.jsx("button",{onClick:()=>n("/admin",{replace:!0}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Back to Admin"})]})}):null}function _I(){return R.useEffect(()=>{fg()},[]),c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center px-4",children:c.jsxs("div",{className:"max-w-md w-full text-center",children:[c.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 md:p-10",children:[c.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:c.jsx(yn,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})}),c.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Payment confirmed"}),c.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for your purchase. You will receive a confirmation email shortly with your receipt and next steps."}),c.jsxs(qe,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",children:[c.jsx(it,{className:"h-5 w-5","aria-hidden":"true"}),"Back to home"]})]}),c.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-gray-500",children:[c.jsx(Kn,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),c.jsx("span",{className:"text-sm",children:"MySchola"})]})]})})}function xI(){return R.useEffect(()=>{mg(),pg()},[]),c.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center px-4",children:c.jsxs("div",{className:"max-w-md w-full text-center",children:[c.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 md:p-10",children:[c.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:c.jsx(fp,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})}),c.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Booking confirmed"}),c.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for booking your free consultation. You will receive a confirmation email shortly with the meeting link and next steps."}),c.jsxs(qe,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",children:[c.jsx(it,{className:"h-5 w-5","aria-hidden":"true"}),"Back to home"]})]}),c.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-gray-500",children:[c.jsx(Kn,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),c.jsx("span",{className:"text-sm",children:"MySchola"})]})]})})}const wI=[6],bI=16,vI=0,Yu=60,hm="Weekend GCSE Boost",dm="Live GCSE strategy session for Maths, English, and Science.",EI="Google Meet link shared after registration.",II="447344193804",Ju=`https://wa.me/${II}`,Xu="https://calendly.com/myscholaukwebinar/30min";function TI({src:n,className:e}){const t=R.useRef(null);return R.useEffect(()=>{const s=t.current;if(!s)return;const r=()=>{s.readyState>=2&&(s.currentTime=.01,s.pause())};return s.addEventListener("loadedmetadata",r),s.readyState<2?s.load():r(),()=>{s.removeEventListener("loadedmetadata",r)}},[n]),c.jsxs("video",{ref:t,className:e,controls:!0,playsInline:!0,preload:"metadata",children:[c.jsx("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]})}function To(n=new Date){const e=[],t=[];wI.forEach(f=>{const m=new Date(n),y=(f-m.getDay()+7)%7;m.setDate(m.getDate()+y),m.setHours(bI,vI,0,0);const b=new Date(m);y===0&&m<=n&&b.setDate(b.getDate()+7),e.push(b);const T=new Date(m);m>n&&T.setDate(T.getDate()-7),t.push(T)});const s=e.reduce((f,m)=>m<f?m:f),r=t.reduce((f,m)=>m>f?m:f),i=new Date(r.getTime()+Yu*6e4),a=n>=r&&n<i,l=a?r:s,h=new Date(l.getTime()+Yu*6e4);return{start:l,end:h,isLive:a}}function Zu(n){const e=Math.max(n-new Date,0),t=Math.floor(e/1e3),s=Math.floor(t/86400),r=Math.floor(t%86400/3600),i=Math.floor(t%3600/60),a=t%60;return{days:s,hours:r,minutes:i,seconds:a}}function AI(n){return String(n).padStart(2,"0")}function eh(n){return n.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}Z$/,"Z")}function NI(n,e){return`https://calendar.google.com/calendar/render?${new URLSearchParams({action:"TEMPLATE",text:hm,details:dm,location:EI,dates:`${eh(n)}/${eh(e)}`}).toString()}`}function SI(){const[n,e]=R.useState(()=>To()),[t,s]=R.useState(()=>{const x=To();return Zu(x.start)}),[r,i]=R.useState(()=>typeof window>"u"?!1:window.localStorage.getItem("webinarReminder")==="true"),[a,l]=R.useState(0),h=[{src:hh,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:uh,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:lh,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:ch,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:ah,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],f=h.length,m=[...h,...h,...h],y=f,b=f*2,[T,C]=R.useState(y),[j,P]=R.useState(!0),[O,D]=R.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1);R.useEffect(()=>{const x=setInterval(()=>{const E=To(),w=E.isLive?E.end:E.start;e(E),s(Zu(w))},1e3);return()=>clearInterval(x)},[]),R.useEffect(()=>{typeof window>"u"||window.localStorage.setItem("webinarReminder",r?"true":"false")},[r]),R.useEffect(()=>{const x=()=>{const E=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;D(E)};return x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),R.useEffect(()=>{if(T<y||T>=b){P(!1);const x=T<y?T+f:T-f;C(x),requestAnimationFrame(()=>{requestAnimationFrame(()=>P(!0))})}},[T,y,b,f]);const F=n.start.toLocaleString(void 0,{weekday:"long",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"}),Q=NI(n.start,n.end),ae=`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(Ju)}`,ne=x=>x===1?"Improved by 1 grade":`Improved by ${x} grades`,I=()=>{C(x=>x-1)},_=()=>{C(x=>x+1)},g=()=>{if(window.Calendly){window.Calendly.initPopupWidget({url:Xu});return}const x=document.createElement("script");x.src="https://assets.calendly.com/assets/external/widget.js",x.async=!0,x.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:Xu})},document.body.appendChild(x)},v=[{q:"Who is this webinar for?",a:"Students in Years 9-11 and parents who want a clear GCSE improvement plan."},{q:"How do I get the Google Meet link?",a:"Register above and we will send the private Google Meet link by email or WhatsApp."},{q:"Will there be a recording?",a:"Yes. A private recording link is shared after the session."}];return c.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50",children:c.jsx("div",{className:"max-w-6xl mx-auto px-4 py-16 sm:py-20",children:c.jsxs("div",{className:"bg-white/90 rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden",children:[c.jsx("div",{className:"pointer-events-none absolute -top-32 -right-24 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl"}),c.jsx("div",{className:"pointer-events-none absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"}),c.jsxs("div",{className:"relative z-10",children:[c.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-blue-700 font-semibold text-sm uppercase tracking-wide",children:[c.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-3 py-1",children:[c.jsx(Ao,{className:"h-4 w-4","aria-hidden":"true"}),"Private Webinar Registration"]}),c.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-blue-200 px-3 py-1 text-xs text-blue-700",children:[c.jsx(Jp,{className:"h-3.5 w-3.5","aria-hidden":"true"}),"Limited seats"]})]}),c.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mt-4",children:hm}),c.jsxs("p",{className:"text-gray-600 mt-4 max-w-2xl",children:[dm,' Countdown updates automatically and switches to "Live now" during the session. We send the Google Meet link privately after registration.']}),c.jsx("div",{className:"mt-8",children:c.jsxs("div",{className:"w-full rounded-2xl border border-blue-100 bg-blue-50/60 p-8 md:p-10",children:[c.jsxs("div",{className:"flex items-center justify-between gap-4",children:[c.jsxs("div",{className:"flex items-center gap-2 text-blue-700 font-semibold",children:[c.jsx(ea,{className:"h-5 w-5","aria-hidden":"true"}),n.isLive?"Live now - ends in":"Starts in"]}),n.isLive&&c.jsxs("span",{className:"inline-flex items-center gap-2 text-sm font-semibold text-red-600",children:[c.jsx("span",{className:"h-2 w-2 rounded-full bg-red-500 animate-pulse"}),"LIVE"]})]}),c.jsx("div",{className:"mt-6 grid grid-cols-4 gap-3 text-center",children:[{label:"Days",value:t.days},{label:"Hours",value:t.hours},{label:"Minutes",value:t.minutes},{label:"Seconds",value:t.seconds}].map(x=>c.jsxs("div",{className:"rounded-xl bg-white border border-blue-100 px-3 py-4 shadow-sm",children:[c.jsx("div",{className:"text-3xl sm:text-4xl font-bold text-gray-900",children:AI(x.value)}),c.jsx("div",{className:"text-xs uppercase tracking-wide text-gray-500 mt-1",children:x.label})]},x.label))}),c.jsxs("p",{className:"text-sm text-gray-600 mt-5",children:["Next webinar: ",c.jsx("span",{className:"font-semibold text-gray-900",children:F})]}),c.jsx("p",{className:"text-sm font-semibold text-red-600 mt-2",children:"Spaces are filling up - register soon."}),c.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Time shown in your local timezone."})]})}),c.jsxs("div",{className:"mt-10 rounded-3xl border border-gray-200 bg-white p-6 sm:p-8",children:[c.jsxs("div",{className:"flex items-center gap-2 text-gray-900 font-semibold",children:[c.jsx(yn,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),"Reserve your spot"]}),c.jsx("p",{className:"text-gray-600 mt-3",children:"Click below to open the registration pop-up. After scheduling, you'll be redirected to a thank-you page with the Google Meet link and WhatsApp group."}),c.jsxs("div",{className:"mt-6",children:[c.jsx("button",{type:"button",onClick:g,className:"inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition",children:"Register for the webinar"}),c.jsx("p",{className:"text-xs text-gray-500 mt-3 text-center",children:"The booking window opens in a secure Calendly pop-up."})]}),c.jsxs("div",{className:"mt-6 flex flex-wrap gap-3",children:[c.jsxs("a",{href:Q,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition",children:[c.jsx(Ao,{className:"h-4 w-4","aria-hidden":"true"}),"Add to Google Calendar"]}),c.jsxs("button",{type:"button",onClick:()=>i(x=>!x),className:`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${r?"border-green-200 text-green-700 bg-green-50":"border-gray-200 text-gray-700 hover:bg-gray-50"}`,children:[c.jsx(op,{className:"h-4 w-4","aria-hidden":"true"}),r?"Reminder set":"Set a reminder"]})]})]}),c.jsx("div",{className:"mt-10 grid gap-6 md:grid-cols-2 justify-items-center",children:[{title:"What we cover",items:["Grade improvement strategy","Exam technique fixes","Weekly action plan"]},{title:"What to expect",items:["Live Q&A with a tutor","Actionable next steps","Follow-up resources"]}].map(x=>c.jsxs("div",{className:"w-full max-w-sm rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition",children:[c.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:x.title}),c.jsx("ul",{className:"space-y-2 text-sm text-gray-600",children:x.items.map(E=>c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx(yn,{className:"h-4 w-4 text-blue-600","aria-hidden":"true"}),E]},E))})]},x.title))}),c.jsx("div",{className:"mt-12 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-blue-50/70 p-8",children:c.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[c.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-900",children:"Video testimonials"}),c.jsx("p",{className:"text-gray-600 mt-2",children:"Hear directly from students and parents about their progress."}),c.jsxs("div",{className:"relative mt-10 sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[c.jsx("button",{type:"button",onClick:I,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:c.jsx(it,{className:"h-5 w-5","aria-hidden":"true"})}),c.jsx("div",{className:"overflow-hidden sm:col-start-2",children:c.jsx("div",{className:`flex ${j?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${T*(100/O)}%)`},children:m.map((x,E)=>{const w=Math.floor(O/2),q=E===T+w;return c.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/O}%`},children:c.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${q?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[c.jsx(TI,{src:x.src,className:"w-full h-auto rounded-t-2xl"}),c.jsxs("div",{className:"p-4 text-center",children:[c.jsx("p",{className:"text-lg font-semibold text-gray-900",children:x.name}),c.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[c.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:x.subjects.join(" / ")}),c.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:ne(x.improvedBy)})]})]})]})},`${x.id}-${E}`)})})}),c.jsx("button",{type:"button",onClick:_,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:c.jsx(Un,{className:"h-5 w-5","aria-hidden":"true"})}),c.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[c.jsx("button",{type:"button",onClick:I,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:c.jsx(it,{className:"h-5 w-5","aria-hidden":"true"})}),c.jsx("button",{type:"button",onClick:_,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:c.jsx(Un,{className:"h-5 w-5","aria-hidden":"true"})})]})]})]})}),c.jsxs("div",{className:"mt-10 rounded-2xl border border-gray-200 p-6",children:[c.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Quick FAQ"}),c.jsx("div",{className:"space-y-3",children:v.map((x,E)=>c.jsxs("div",{className:"border border-gray-100 rounded-xl",children:[c.jsxs("button",{type:"button",onClick:()=>l(a===E?-1:E),className:"w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-gray-900","aria-expanded":a===E,children:[x.q,c.jsx("span",{className:"text-blue-600",children:a===E?"-":"+"})]}),a===E&&c.jsx("div",{className:"px-4 pb-4 text-sm text-gray-600",children:x.a})]},x.q))})]}),c.jsxs("div",{className:"mt-10 rounded-2xl border border-gray-200 p-6 text-center",children:[c.jsxs("div",{className:"flex items-center justify-center gap-2 text-gray-900 font-semibold",children:[c.jsx(mn,{className:"h-5 w-5 text-green-600","aria-hidden":"true"}),"WhatsApp QR code"]}),c.jsx("p",{className:"text-gray-600 mt-3",children:"Scan to message us on WhatsApp if you have any questions."}),c.jsx("img",{src:ae,alt:"WhatsApp QR code for MySchola",className:"mx-auto mt-4 h-44 w-44 rounded-lg border border-gray-100",loading:"lazy"}),c.jsx("a",{href:Ju,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-green-200 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-50 transition",children:"Open WhatsApp chat"})]}),c.jsx("div",{className:"mt-10",children:c.jsxs(qe,{to:"/",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold",children:[c.jsx(it,{className:"h-4 w-4","aria-hidden":"true"}),"Back to home"]})})]})]})})})}const RI=[6],kI=16,CI=0,th=60,PI="Weekend GCSE Boost",jI="https://meet.google.com/your-meet-code",nh="https://chat.whatsapp.com/your-group-invite";function DI(n=new Date){const e=[],t=[];RI.forEach(f=>{const m=new Date(n),y=(f-m.getDay()+7)%7;m.setDate(m.getDate()+y),m.setHours(kI,CI,0,0);const b=new Date(m);y===0&&m<=n&&b.setDate(b.getDate()+7),e.push(b);const T=new Date(m);m>n&&T.setDate(T.getDate()-7),t.push(T)});const s=e.reduce((f,m)=>m<f?m:f),r=t.reduce((f,m)=>m>f?m:f),i=new Date(r.getTime()+th*6e4),a=n>=r&&n<i,l=a?r:s,h=new Date(l.getTime()+th*6e4);return{start:l,end:h,isLive:a}}function VI(){const n=sn(),e=n.state&&n.state.fromRegistration,t=typeof window<"u"&&window.sessionStorage.getItem("webinarRegistered")==="true",s=!!(e||t),i=DI().start.toLocaleString(void 0,{weekday:"long",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"}),a=Intl.DateTimeFormat().resolvedOptions().timeZone,l=`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(nh)}`;return c.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50",children:c.jsx("div",{className:"max-w-4xl mx-auto px-4 py-16 sm:py-20",children:c.jsxs("div",{className:"bg-white/90 rounded-3xl shadow-xl p-8 sm:p-12",children:[c.jsxs("div",{className:"flex items-center gap-3 text-blue-700 font-semibold",children:[c.jsx(yn,{className:"h-6 w-6","aria-hidden":"true"}),"Registration confirmed"]}),c.jsxs("h1",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mt-4",children:["Thanks for registering for ",PI]}),c.jsx("p",{className:"text-gray-600 mt-3",children:"We will send reminders before the webinar. Your local time is shown below."}),c.jsxs("div",{className:"mt-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-6",children:[c.jsxs("div",{className:"flex items-center gap-2 text-blue-700 font-semibold",children:[c.jsx(Ao,{className:"h-5 w-5","aria-hidden":"true"}),"Next session time"]}),c.jsx("p",{className:"text-lg font-semibold text-gray-900 mt-3",children:i}),c.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Timezone: ",a]})]}),s?c.jsxs("div",{className:"mt-8 grid gap-6 md:grid-cols-2",children:[c.jsxs("div",{className:"rounded-2xl border border-gray-200 p-6",children:[c.jsxs("div",{className:"flex items-center gap-2 text-gray-900 font-semibold",children:[c.jsx(Qn,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),"Google Meet link for this week"]}),c.jsx("p",{className:"text-gray-600 mt-3",children:"Use this link at the session time. Please do not share it publicly."}),c.jsx("a",{href:jI,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition",children:"Join Google Meet session"}),c.jsx("p",{className:"text-xs text-gray-500 mt-3",children:"Update the link in `src/pages/WebinarThanks.jsx`."})]}),c.jsxs("div",{className:"rounded-2xl border border-gray-200 p-6 text-center",children:[c.jsxs("div",{className:"flex items-center justify-center gap-2 text-gray-900 font-semibold",children:[c.jsx(mn,{className:"h-5 w-5 text-green-600","aria-hidden":"true"}),"WhatsApp group chat"]}),c.jsx("p",{className:"text-gray-600 mt-3",children:"Scan to join the WhatsApp group chat for updates."}),c.jsx("img",{src:l,alt:"WhatsApp group chat QR code",className:"mx-auto mt-4 h-44 w-44 rounded-lg border border-gray-100",loading:"lazy"}),c.jsx("a",{href:nh,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-green-200 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-50 transition",children:"Open WhatsApp group"})]})]}):c.jsx("div",{className:"mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6",children:c.jsx("p",{className:"text-sm text-amber-900",children:"Please register on the webinar page to access the Google Meet link and WhatsApp group."})}),c.jsxs("div",{className:"mt-10 flex flex-wrap gap-4",children:[c.jsx(qe,{to:"/webinar",className:"inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition",children:"Back to webinar page"}),c.jsx(qe,{to:"/",className:"inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition",children:"Back to home"})]})]})})})}function OI(n){var e;return((e=n==null?void 0:n.data)==null?void 0:e.event)&&n.data.event.indexOf("calendly")===0&&n.data.event==="calendly.event_scheduled"}function MI(){const{pathname:n}=sn();return R.useEffect(()=>{dg()},[n]),null}function LI(){const n=nn(),{pathname:e}=sn();return R.useEffect(()=>{const t=s=>{OI(s)&&(e.startsWith("/webinar")?(typeof window<"u"&&window.sessionStorage.setItem("webinarRegistered","true"),n("/webinar/thanks",{replace:!0})):n("/booking-success",{replace:!0}))};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)},[n,e]),null}function FI(){return c.jsxs(qm,{children:[c.jsx(MI,{}),c.jsx(LI,{}),c.jsxs($m,{children:[c.jsx(Ge,{path:"/",element:c.jsx(rl,{})}),c.jsx(Ge,{path:"/booking",element:c.jsx(rl,{})}),c.jsx(Ge,{path:"/login",element:c.jsx(ZE,{})}),c.jsx(Ge,{path:"/payment-success",element:c.jsx(_I,{})}),c.jsx(Ge,{path:"/booking-success",element:c.jsx(xI,{})}),c.jsx(Ge,{path:"/admin",element:c.jsx(pI,{})}),c.jsx(Ge,{path:"/admin/share-link",element:c.jsx(gI,{})}),c.jsx(Ge,{path:"/admin/homework-share-link",element:c.jsx(yI,{})}),c.jsx(Ge,{path:"/webinar",element:c.jsx(SI,{})}),c.jsx(Ge,{path:"/webinar/thanks",element:c.jsx(VI,{})}),c.jsx(Ge,{path:"/app/dashboard",element:c.jsx(vo,{children:c.jsx(rI,{})})}),c.jsx(Ge,{path:"/app/subject/:subjectId/recordings",element:c.jsx(vo,{children:c.jsx(cI,{})})}),c.jsx(Ge,{path:"/app/subject/:subjectId/homework",element:c.jsx(vo,{children:c.jsx(lI,{})})})]})]})}Gm.createRoot(document.getElementById("root")).render(c.jsx(R.StrictMode,{children:c.jsx(FI,{})}));
