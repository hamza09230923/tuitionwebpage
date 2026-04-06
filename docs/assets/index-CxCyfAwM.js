import{r as Xf,a as Zf,b as A,u as Lt,c as us,L as ae,N as ep,d as bh,e as tp,B as sp,R as np,f as Ve}from"./react-vendor-CbjYftdW.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var Ea={exports:{}},Vn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pc;function rp(){if(pc)return Vn;pc=1;var s=Xf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(c,h,m){var f,x={},v=null,I=null;m!==void 0&&(v=""+m),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(I=h.ref);for(f in h)n.call(h,f)&&!a.hasOwnProperty(f)&&(x[f]=h[f]);if(c&&c.defaultProps)for(f in h=c.defaultProps,h)x[f]===void 0&&(x[f]=h[f]);return{$$typeof:e,type:c,key:v,ref:I,props:x,_owner:i.current}}return Vn.Fragment=t,Vn.jsx=l,Vn.jsxs=l,Vn}var gc;function ip(){return gc||(gc=1,Ea.exports=rp()),Ea.exports}var r=ip(),Sr={},xc;function ap(){if(xc)return Sr;xc=1;var s=Zf();return Sr.createRoot=s.createRoot,Sr.hydrateRoot=s.hydrateRoot,Sr}var op=ap();/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cp=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),yc=s=>{const e=cp(s);return e.charAt(0).toUpperCase()+e.slice(1)},wh=(...s)=>s.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim(),up=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=A.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:i="",children:a,iconNode:l,...c},h)=>A.createElement("svg",{ref:h,...hp,width:e,height:e,stroke:s,strokeWidth:n?Number(t)*24/Number(e):t,className:wh("lucide",i),...!a&&!up(c)&&{"aria-hidden":"true"},...c},[...l.map(([m,f])=>A.createElement(m,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=(s,e)=>{const t=A.forwardRef(({className:n,...i},a)=>A.createElement(dp,{ref:a,iconNode:e,className:wh(`lucide-${lp(yc(s))}`,`lucide-${s}`,n),...i}));return t.displayName=yc(s),t};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ke=K("arrow-left",mp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],at=K("arrow-right",fp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],gp=K("atom",pp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],yp=K("award",xp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],wp=K("bell",bp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],_p=K("book-marked",vp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Kn=K("book-open",Np);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Ip=K("calculator",Ep);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],jp=K("calendar-check",Tp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Ha=K("calendar",Ap);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],vh=K("chart-column",Sp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],za=K("check",kp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Rp=K("chevron-right",Cp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],kt=K("circle-check-big",Pp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Vp=K("circle-play",Dp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Lp=K("circle-question-mark",Mp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Fp=K("circle-x",Op);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ht=K("clock",Up);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],bc=K("download",Bp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],$p=K("external-link",qp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Qn=K("file-text",Wp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],zp=K("flask-conical",Hp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Kp=K("globe",Gp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],ct=K("graduation-cap",Qp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Jp=K("history",Yp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],Zp=K("languages",Xp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Eo=K("lock",eg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],sg=K("log-out",tg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Qr=K("mail",ng);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ii=K("menu",rg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Ne=K("message-circle",ig);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],og=K("monitor",ag);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],cg=K("music",lg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],hg=K("palette",ug);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],mg=K("phone",dg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],pg=K("play",fg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],wc=K("save",gg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ws=K("sparkles",xg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],bg=K("star",yg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Yr=K("target",wg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Or=K("trending-up",vg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ga=K("user-check",_g);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ka=K("users",Ng);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Js=K("video",Eg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ti=K("x",Ig);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],_h=K("zoom-in",Tg),ji="/assets/testimonial1-5gwMtUAO-5gwMtUAO.mp4",Ai="/assets/testimonial2-D0fw-lJA.mp4",Si="/assets/testmonial3-CD7BqzK1.mp4",ki="/assets/testimonial4-DLVnnJv5.mp4",Ci="/assets/testimonial5-CpY5IMND.mp4",Nh="/assets/checklist-B5UU8CL1.jpeg";function jg(){typeof window<"u"&&window.fbq&&window.fbq("track","PageView")}function Qa(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booking",content_category:"GCSE Tuition"})}function Yt(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"WhatsApp Inquiry",content_category:"GCSE Tuition"})}function Ag(){typeof window<"u"&&window.fbq&&window.fbq("track","Purchase",{currency:"GBP"})}function Sg(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booked",content_category:"GCSE Tuition"})}function kg(){typeof window<"u"&&window.fbq&&window.fbq("track","BOOK NOW",{value:0,currency:"GBP"})}const Jr="/assets/nottingham-university-logo-Bvc07xhs.png",Xr="/assets/King's_College_London_logo-XbRZheqd.svg",Zr="/assets/cambridge-64gH2uf-.jpg",ei="/assets/Imperial-College-Logo-CiZ74UPN.png",ti="/assets/warwick-DzXBUNN5.svg",Cg="/assets/aqa-R9eUC-1Y.jpg",Rg="/assets/edexcel-vector-logo-BkmWVkxU.png";function Pg({src:s,className:e,showControls:t=!0}){const n=A.useRef(null);return A.useEffect(()=>{const i=n.current;if(!i)return;const a=()=>{i.readyState>=2&&(i.currentTime=.01,i.pause())};return i.addEventListener("loadedmetadata",a),i.readyState<2?i.load():a(),()=>{i.removeEventListener("loadedmetadata",a)}},[s]),r.jsxs("video",{ref:n,className:e,controls:t,playsInline:!0,preload:"metadata",width:640,height:360,children:[r.jsx("source",{src:s,type:"video/mp4"}),r.jsx("track",{kind:"captions",src:"",label:"English",srclang:"en"}),"Your browser does not support the video tag."]})}function vc(){const s=Lt(),e=us(),t=[{src:Ci,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:ki,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:Si,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:Ai,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:ji,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],n=t.length,i=[...t,...t,...t],a=n,l=n*2,[c,h]=A.useState(!1),[m,f]=A.useState(null),[x,v]=A.useState(!1),[I,S]=A.useState(a),[P,R]=A.useState(!0),[O,D]=A.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),B=g=>g===1?"Improved by 1 grade":`Improved by ${g} grades`;A.useEffect(()=>{const g=()=>{const w=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;D(w)};return g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]),A.useEffect(()=>{if(I<a||I>=l){R(!1);const g=I<a?I+n:I-n;S(g),requestAnimationFrame(()=>{requestAnimationFrame(()=>R(!0))})}},[I,a,l,n]);const Y=g=>{f(m===g?null:g)},le=()=>{S(g=>g-1)},ee=()=>{S(g=>g+1)},N=()=>{const g="https://calendly.com/admin-myschola/30min",w=window.innerWidth<768;if(window.Calendly)window.Calendly.initPopupWidget({url:g,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0});else{const _=document.createElement("script");_.src="https://assets.calendly.com/assets/external/widget.js",_.async=!0,_.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:g,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0})},document.body.appendChild(_),setTimeout(()=>{window.Calendly||window.open(g,"_blank","noopener,noreferrer")},1e3)}},y=()=>{Qa(),s("/booking",{replace:!1}),N()};return A.useEffect(()=>{if(e.pathname==="/booking"&&!x){Qa(),v(!0);const g=setTimeout(()=>{N()},300);return()=>clearTimeout(g)}else e.pathname!=="/booking"&&v(!1)},[e.pathname]),r.jsxs("div",{className:"min-h-screen bg-white",children:[r.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),r.jsx("div",{className:"w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md",children:"Join our March cohort as soon as possible — spaces are running out!"}),r.jsxs("nav",{className:"sticky top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center h-16",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx(ct,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),r.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),r.jsx("div",{className:"hidden md:flex justify-center",children:r.jsxs("div",{className:"flex items-center space-x-8",children:[r.jsx("a",{href:"#home",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),r.jsx("a",{href:"#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),r.jsx("a",{href:"#subjects",className:"text-gray-700 hover:text-blue-600 transition",children:"Subjects"}),r.jsx("a",{href:"#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),r.jsx("a",{href:"#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"})]})}),r.jsxs("div",{className:"flex items-center justify-end",children:[r.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[r.jsx(ae,{to:"/login",className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center","aria-label":"Log in",children:"Log In"}),r.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Yt,className:"bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2","aria-label":"Contact us on WhatsApp",children:[r.jsx(Ne,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})]}),r.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>h(!c),"aria-label":c?"Close menu":"Open menu","aria-expanded":c,"aria-controls":"mobile-menu",children:c?r.jsx(Ti,{className:"h-6 w-6","aria-hidden":"true"}):r.jsx(Ii,{className:"h-6 w-6","aria-hidden":"true"})})]})]})}),c&&r.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:r.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[r.jsx("a",{href:"#home",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),r.jsx("a",{href:"#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),r.jsx("a",{href:"#subjects",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Subjects"}),r.jsx("a",{href:"#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),r.jsx("a",{href:"#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),r.jsx(ae,{to:"/login",className:"block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",role:"menuitem",children:"Log In"}),r.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Yt,className:"block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2","aria-label":"Contact us on WhatsApp",role:"menuitem",children:r.jsxs("span",{className:"inline-flex items-center gap-2",children:[r.jsx(Ne,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})})]})})]}),r.jsxs("main",{id:"main-content",children:[r.jsx("section",{id:"home",className:"pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Hero section",children:r.jsx("div",{className:"max-w-7xl mx-auto",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"relative inline-block px-2",children:r.jsxs("h1",{className:"relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6",children:["MySchola: #1 GCSE Tutoring Platform for",r.jsx("span",{className:"text-blue-600",children:" Years 9-11"})]})}),r.jsxs("p",{className:"text-lg sm:text-xl text-gray-600 mb-3 sm:mb-4 max-w-3xl mx-auto px-2",children:[r.jsx("strong",{children:"GCSE Maths, English & Science"})," via Zoom"]}),r.jsx("p",{className:"text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2",children:"Personalised lessons with one-to-one support from expert tutors. Your child only sees the teacher - no distractions, maximum focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons."}),r.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:r.jsxs("button",{type:"button",onClick:y,className:"bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation","aria-label":"Book a free consultation",children:["Book Free Consultation",r.jsx(at,{className:"ml-2 h-5 w-5 flex-shrink-0","aria-hidden":"true"})]})})]})})}),r.jsx("section",{id:"how-it-works",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"how-it-works-heading",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsx("h2",{id:"how-it-works-heading",className:"text-4xl font-bold text-center mb-12",children:"How Our Lessons Work"}),r.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-3xl mx-auto",children:"A clear, supportive structure that keeps students confident and parents fully in the loop."}),r.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[r.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[r.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:r.jsx(Ga,{className:"h-8 w-8 text-white"})}),r.jsx("h3",{className:"text-xl font-semibold mb-2",children:"One-to-One Support"}),r.jsx("p",{className:"text-gray-600",children:"Personalised lessons with one-to-one support. Your child only sees the teacher, ensuring privacy and focus."})]}),r.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[r.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:r.jsx(_h,{className:"h-8 w-8 text-white"})}),r.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Via Zoom"}),r.jsx("p",{className:"text-gray-600",children:"Convenient online lessons from the comfort of your home. High-quality video and interactive whiteboard. Webcam and microphone are optional - we use Zoom chat to check engagement, and parents can monitor participation for privacy."})]}),r.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[r.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:r.jsx(Eo,{className:"h-8 w-8 text-white"})}),r.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Student Privacy"}),r.jsx("p",{className:"text-gray-600",children:"Your child only sees the teacher. Private, secure sessions designed for maximum learning focus. Webcam and mic are optional - we use Zoom chat for communication, and parents can check engagement for privacy reasons."})]}),r.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[r.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:r.jsx(Ne,{className:"h-8 w-8 text-white"})}),r.jsx("h3",{className:"text-xl font-semibold mb-2",children:"24/7 Personalised Support"}),r.jsx("p",{className:"text-gray-600",children:"Students can ask questions anytime between lessons. Tutors respond with personalised explanations, feedback, and next-step guidance."})]}),r.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[r.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:r.jsx(Ka,{className:"h-8 w-8 text-white"})}),r.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Parent Evenings"}),r.jsx("p",{className:"text-gray-600",children:"Regular parent evenings to review progress, share targets, and agree on the next steps for maximum grade improvement."})]}),r.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[r.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:r.jsx(Qn,{className:"h-8 w-8 text-white"})}),r.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Regular Exam-Style Tests"}),r.jsx("p",{className:"text-gray-600",children:"We set regular exams and topic checks to track progress, build exam technique, and close gaps quickly."})]})]})]})}),r.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"benefits-heading",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsx("h2",{id:"benefits-heading",className:"text-4xl font-bold text-center mb-4",children:"Benefits for Parents & Students"}),r.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Why thousands of families choose MySchola for GCSE success"}),r.jsx("div",{className:"mb-12 flex justify-center",children:r.jsx("img",{src:Nh,alt:"Comparison table showing MySchola benefits against other providers and one-to-one home tutors",className:"w-full max-w-6xl h-auto rounded-2xl border border-gray-200 shadow-sm object-contain",loading:"lazy",width:1152,height:768})}),r.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[r.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[r.jsxs("div",{className:"flex items-center mb-3",children:[r.jsx(Or,{className:"h-6 w-6 text-green-500 mr-2","aria-hidden":"true"}),r.jsx("h3",{className:"text-xl font-semibold",children:"Grade Improvement"})]}),r.jsx("p",{className:"text-gray-600",children:"Students consistently improve by 2-3 grades with our proven teaching methods and personalised approach."})]}),r.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[r.jsxs("div",{className:"flex items-center mb-3",children:[r.jsx(yp,{className:"h-6 w-6 text-blue-500 mr-2","aria-hidden":"true"}),r.jsx("h3",{className:"text-xl font-semibold",children:"Confidence Building"})]}),r.jsx("p",{className:"text-gray-600",children:"Watch your child's confidence soar as they master difficult concepts and see their progress week by week."})]}),r.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[r.jsxs("div",{className:"flex items-center mb-3",children:[r.jsx(Yr,{className:"h-6 w-6 text-red-500 mr-2","aria-hidden":"true"}),r.jsx("h3",{className:"text-xl font-semibold",children:"Exam Focus"})]}),r.jsx("p",{className:"text-gray-600",children:"Targeted exam preparation with past papers, exam techniques, and strategies tailored to GCSE requirements."})]}),r.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[r.jsxs("div",{className:"flex items-center mb-3",children:[r.jsx(Ht,{className:"h-6 w-6 text-purple-500 mr-2","aria-hidden":"true"}),r.jsx("h3",{className:"text-xl font-semibold",children:"Flexible Scheduling"})]}),r.jsx("p",{className:"text-gray-600",children:"Choose times that work around your family's schedule. Evening and weekend slots available."})]}),r.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[r.jsxs("div",{className:"flex items-center mb-3",children:[r.jsx(Ka,{className:"h-6 w-6 text-orange-500 mr-2","aria-hidden":"true"}),r.jsx("h3",{className:"text-xl font-semibold",children:"Expert Tutors"})]}),r.jsx("p",{className:"text-gray-600",children:"Qualified UK teachers with DBS checks and proven track records of GCSE success."})]}),r.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[r.jsxs("div",{className:"flex items-center mb-3",children:[r.jsx(Kn,{className:"h-6 w-6 text-indigo-500 mr-2","aria-hidden":"true"}),r.jsx("h3",{className:"text-xl font-semibold",children:"Personalised Curriculum"})]}),r.jsx("p",{className:"text-gray-600",children:"Lessons tailored to your child's learning style, pace, and specific areas that need improvement."})]})]})]})}),r.jsx("section",{id:"testimonials",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"video-testimonials-heading",children:r.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[r.jsx("h2",{id:"video-testimonials-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Video Testimonials"}),r.jsx("p",{className:"text-gray-600 mb-12",children:"Short clips from students, with the subject and grade improvements below."}),r.jsxs("div",{className:"relative sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[r.jsx("button",{type:"button",onClick:le,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:r.jsx(Ke,{className:"h-5 w-5","aria-hidden":"true"})}),r.jsx("div",{className:"overflow-hidden sm:col-start-2",children:r.jsx("div",{className:`flex ${P?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${I*(100/O)}%)`},children:i.map((g,w)=>{const _=Math.floor(O/2),E=w===I+_;return r.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/O}%`},children:r.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${E?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[r.jsx(Pg,{src:g.src,className:"w-full h-auto rounded-t-2xl"}),r.jsxs("div",{className:"p-4 text-center",children:[r.jsx("p",{className:"text-lg font-semibold text-gray-900",children:g.name}),r.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[r.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:g.subjects.join(" / ")}),r.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:B(g.improvedBy)})]})]})]})},`${g.id}-${w}`)})})}),r.jsx("button",{type:"button",onClick:ee,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:r.jsx(at,{className:"h-5 w-5","aria-hidden":"true"})}),r.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[r.jsx("button",{type:"button",onClick:le,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:r.jsx(Ke,{className:"h-5 w-5","aria-hidden":"true"})}),r.jsx("button",{type:"button",onClick:ee,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:r.jsx(at,{className:"h-5 w-5","aria-hidden":"true"})})]})]})]})}),r.jsx("section",{id:"text-testimonials",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"testimonials-heading",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold text-center mb-4",children:"What Parents & Students Say"}),r.jsx("p",{className:"text-center text-gray-600 mb-12",children:"Real results from real families"}),r.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-12",children:[r.jsxs("div",{className:"bg-blue-700 text-white p-6 rounded-lg text-center",children:[r.jsx("div",{className:"text-4xl font-bold mb-2",children:"95%"}),r.jsx("div",{className:"text-white",children:"Students improve grades"})]}),r.jsxs("div",{className:"bg-green-700 text-white p-6 rounded-lg text-center",children:[r.jsx("div",{className:"text-4xl font-bold mb-2",children:"2-3"}),r.jsx("div",{className:"text-white",children:"Grade improvement average"})]}),r.jsxs("div",{className:"bg-purple-700 text-white p-6 rounded-lg text-center",children:[r.jsx("div",{className:"text-4xl font-bold mb-2",children:"300+"}),r.jsx("div",{className:"text-white",children:"Successful students"})]})]}),r.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{name:"Aisha K, Parent",text:"My son started the term lacking confidence in Maths and was sitting at a Grade 5. After weekly Zoom lessons with MySchola, his understanding improved steadily and he finished the term with a Grade 7.",rating:5,result:"Maths: Grade 5 → Grade 7"},{name:"Rahul P, Parent",text:"MySchola was patient and explained the Poetry Anthology texts in a way my daughter could finally understand. Her confidence grew each week and her English grade jumped from a 5 to an 8.",rating:5,result:"English Lit: Grade 5 → Grade 8"},{name:"Emma L., Parent",text:"The confidence my son gained was incredible. He went from hating Chemistry especially Organic Chemistry to loving it. His Chemistry grade improved from 5 to 8. Worth every penny!",rating:5,result:"Chemistry: Grade 5 → Grade 8"},{name:"Michael R., Student",text:"Going through past papers and custom exam style questions with Isam and Hamza made a huge difference. Physics finally started to make sense, and I learned how to approach exam questions properly.",rating:5,result:"Physics: Grade 6 → Grade 9"},{name:"Jasmin K., Parent",text:"As a working parent, the flexible scheduling in the evenings was a lifesaver. My daughter could do sessions that fit around school and activities. Highly recommend!",rating:4,result:"Maths: Grade 6 → Grade 8"},{name:"Emmanuel P., Parent",text:"The privacy of the sessions meant my son felt comfortable making mistakes and asking for help. His confidence has grown so much, and his grades show it!",rating:5,result:"English: Grade 5 → Grade 7"}].map((g,w)=>r.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[r.jsx("div",{className:"flex mb-4",children:[...Array(g.rating)].map((_,E)=>r.jsx(bg,{className:"h-5 w-5 text-yellow-400 fill-current","aria-hidden":"true"},E))}),r.jsxs("p",{className:"text-gray-600 mb-4 italic",children:['"',g.text,'"']}),r.jsxs("div",{className:"border-t pt-4",children:[r.jsxs("p",{className:"font-semibold text-gray-900",children:["— ",g.name]}),r.jsx("p",{className:"text-sm text-blue-600 font-medium mt-1",children:g.result})]})]},w))})]})}),r.jsx("section",{id:"subjects",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"subjects-heading",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsx("h2",{id:"subjects-heading",className:"text-4xl font-bold text-center mb-4",children:"Subjects We Offer"}),r.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Comprehensive GCSE support for Years 9-11"}),r.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{name:"Maths",description:"GCSE Maths (Foundation & Higher)"},{name:"Combined Science",description:"Trilogy and Synergy pathways"},{name:"Triple Science",description:"Biology, Chemistry, and Physics"},{name:"English Language",description:"Reading, writing, and language skills"},{name:"English Literature",description:"Poetry, prose, and drama analysis"}].map(g=>r.jsx("div",{className:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600",children:r.jsxs("div",{className:"flex items-start mb-2",children:[r.jsx(za,{className:"h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0","aria-hidden":"true"}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold mb-1",children:g.name}),r.jsx("p",{className:"text-gray-600 text-sm",children:g.description})]})]})},g.name))})]})}),r.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-white","aria-labelledby":"universities-heading",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsxs("div",{className:"text-center mb-12",children:[r.jsx("h2",{id:"universities-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Our tutors study at the UK's most prestigious universities"}),r.jsx("p",{className:"text-gray-600 max-w-3xl mx-auto",children:"Your education is everything. That's why we only hire the best in class. All of our tutors have stellar academic backgrounds and have first-hand experience with the rigorous exam process. Learn from the best to achieve your best."})]}),r.jsx("div",{className:"relative overflow-hidden",children:r.jsxs("div",{className:"flex animate-marquee",children:[[{src:Jr,alt:"University of Nottingham",name:"Nottingham"},{src:Xr,alt:"King's College London",name:"King's College"},{src:Zr,alt:"University of Cambridge",name:"Cambridge"},{src:ei,alt:"Imperial College London",name:"Imperial"},{src:ti,alt:"University of Warwick",name:"Warwick"}].map((g,w)=>r.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:r.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-32 sm:h-40 lg:h-44 w-56 sm:w-64 lg:w-72 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:r.jsx("img",{src:g.src,alt:g.alt,className:"w-full h-full object-contain",loading:"lazy",width:288,height:176})})},`first-${w}`)),[{src:Jr,alt:"University of Nottingham",name:"Nottingham"},{src:Xr,alt:"King's College London",name:"King's College"},{src:Zr,alt:"University of Cambridge",name:"Cambridge"},{src:ei,alt:"Imperial College London",name:"Imperial"},{src:ti,alt:"University of Warwick",name:"Warwick"}].map((g,w)=>r.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:r.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-32 sm:h-40 lg:h-44 w-56 sm:w-64 lg:w-72 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:r.jsx("img",{src:g.src,alt:g.alt,className:"w-full h-full object-contain",loading:"lazy",width:288,height:176})})},`second-${w}`))]})})]})}),r.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"exam-boards-heading",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsxs("div",{className:"text-center mb-12",children:[r.jsx("h2",{id:"exam-boards-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Expert tuition for every exam board"}),r.jsx("p",{className:"text-gray-600 max-w-3xl mx-auto",children:"Unlock academic success with tailored support across every exam board. Our team of expert tutors knows the ins and outs of each curriculum, offering customized guidance that fits your exact syllabus."})]}),r.jsx("div",{className:"relative overflow-hidden",children:r.jsx("div",{className:"flex animate-marquee-reverse",children:[...Array(3)].map((g,w)=>[{src:Cg,alt:"AQA",name:"AQA"},{src:Rg,alt:"Edexcel",name:"Edexcel"}].map((_,E)=>r.jsx("div",{className:"flex-shrink-0 mx-6 sm:mx-8 lg:mx-10",children:r.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 h-44 sm:h-52 lg:h-60 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:r.jsx("img",{src:_.src,alt:_.alt,className:"w-full h-full object-contain",loading:"lazy",width:320,height:240})})},`set-${w}-${E}`)))})})]})}),r.jsx("section",{id:"book-call",className:"py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-indigo-700","aria-labelledby":"book-call-heading",children:r.jsxs("div",{className:"max-w-4xl mx-auto text-center text-white",children:[r.jsx("h2",{id:"book-call-heading",className:"text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 px-2",children:"Ready to Start Your Child's GCSE Success Journey?"}),r.jsx("p",{className:"text-lg sm:text-xl text-white mb-6 sm:mb-8 px-2",children:"Book a free consultation to discuss your child's needs and see how we can help them achieve their goals."}),r.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:r.jsxs("button",{type:"button",onClick:y,className:"bg-white text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 active:bg-gray-200 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 min-h-[44px] touch-manipulation","aria-label":"Book a free consultation",children:["Book Free Consultation",r.jsx(at,{className:"ml-2 h-5 w-5 flex-shrink-0","aria-hidden":"true"})]})}),r.jsx("p",{className:"text-white text-sm mt-6",children:"No card required • Free 15-minute consultation"})]})}),r.jsx("section",{id:"faq",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"faq-heading",children:r.jsxs("div",{className:"max-w-4xl mx-auto",children:[r.jsx("h2",{id:"faq-heading",className:"text-4xl font-bold text-center mb-12",children:"Frequently Asked Questions"}),r.jsx("div",{className:"space-y-4",children:[{q:"How do the Zoom lessons work?",a:"Each lesson feels one-to-one via Zoom. Your child will see only the teacher, ensuring privacy and focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We use interactive whiteboards and screen sharing to make lessons engaging and effective. All sessions are recorded for your child to review later."},{q:"What equipment do we need?",a:"You just need a computer, tablet, or laptop with a stable internet connection. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We recommend using a desktop or laptop for the best experience with the interactive whiteboard."},{q:"How long are the sessions?",a:"All lessons are 60 minutes and this duration is fixed."},{q:"Can I choose the tutor?",a:"Yes! During your consultation, we'll discuss your child's learning style and match them with the best tutor. You can also request specific tutors based on availability."},{q:"What if my child misses a session?",a:"All sessions are recorded and uploaded. If your child misses a lesson, they can watch the recording at their convenience. You can ask any questions through our WhatsApp support, available 24/7."},{q:"Do you provide homework and practice materials?",a:"Absolutely! Each tutor provides tailored homework assignments, practice papers, and additional resources to reinforce learning between sessions. All materials are included in the lesson price."},{q:"How quickly will we see results?",a:"Most students see improvement within 4-6 weeks of regular sessions. However, every child is different. We track progress regularly and adjust our approach to ensure maximum effectiveness."},{q:"What age groups do you teach?",a:"We specialize in Years 9-11, preparing students for GCSEs. This includes both Foundation and Higher tier courses across all major GCSE subjects."}].map((g,w)=>r.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[r.jsxs("button",{className:"w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",onClick:()=>Y(w),"aria-expanded":m===w,"aria-controls":`faq-answer-${w}`,id:`faq-question-${w}`,children:[r.jsxs("span",{className:"font-semibold text-gray-900 flex items-center",children:[r.jsx(Lp,{className:"h-5 w-5 text-blue-600 mr-2","aria-hidden":"true"}),g.q]}),r.jsx("span",{className:"text-blue-600","aria-hidden":"true","aria-label":m===w?"Collapse answer":"Expand answer",children:m===w?"−":"+"})]}),m===w&&r.jsx("div",{id:`faq-answer-${w}`,className:"px-6 pb-4 text-gray-600",role:"region","aria-labelledby":`faq-question-${w}`,children:g.a})]},w))})]})}),r.jsx("section",{id:"contact",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"contact-heading",children:r.jsxs("div",{className:"max-w-4xl mx-auto",children:[r.jsx("h2",{id:"contact-heading",className:"text-4xl font-bold text-center mb-12",children:"Get in Touch"}),r.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[r.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[r.jsx(Qr,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),r.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Email Us"}),r.jsx("a",{href:"mailto:myscholauk@gmail.com",className:"text-gray-600 hover:text-blue-600 transition",children:"myscholauk@gmail.com"})]}),r.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[r.jsx(mg,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),r.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Call Us"}),r.jsx("a",{href:"tel:+447344193804",className:"text-gray-600 hover:text-blue-600 transition",children:"+44 7344 193804"}),r.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Mon-Fri 9am-6pm"})]})]})]})}),r.jsx("section",{id:"privacy-policy",className:"py-20 px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"max-w-4xl mx-auto",children:[r.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Privacy Policy"}),r.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Information We Collect"}),r.jsx("p",{children:"We collect information that you provide directly to us, including your name, email address, phone number, and information about your child's educational needs. We also collect information automatically when you use our services, such as session recordings and progress data."})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. How We Use Your Information"}),r.jsx("p",{children:"We use the information we collect to provide, maintain, and improve our tutoring services, process your bookings, communicate with you, and ensure the safety and security of our platform."})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Data Security"}),r.jsx("p",{children:"We implement appropriate technical and organizational measures to protect your personal information. All tutors are DBS checked, and all Zoom sessions are encrypted and secure."})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Session Recordings"}),r.jsx("p",{children:"Lessons may be recorded for educational purposes and quality assurance. Recordings are stored securely and are accessible only to authorized personnel and the student's account."})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Your Rights"}),r.jsx("p",{children:"You have the right to access, update, or delete your personal information at any time. You can also request a copy of your data or withdraw consent for data processing."})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Children's Privacy"}),r.jsx("p",{children:"We take children's privacy seriously. We only collect information necessary to provide our services, and all data handling complies with UK GDPR and Children's Code requirements."})]}),r.jsx("div",{children:r.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})}),r.jsx("section",{id:"terms-of-service",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50",children:r.jsxs("div",{className:"max-w-4xl mx-auto",children:[r.jsx("h2",{className:"text-4xl font-bold text-center mb-4",children:"Refund & Cancellation Policy"}),r.jsx("p",{className:"text-center text-gray-500 mb-12",children:"MySchola - Last updated: 9 March 2026"}),r.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Overview"}),r.jsx("p",{children:"This Refund & Cancellation Policy explains how refunds, cancellations, and subscription changes work for services provided by MySchola."}),r.jsx("p",{children:"By purchasing or subscribing to any MySchola service, you agree to this policy in addition to our Terms of Service."})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. Subscription Payments"}),r.jsx("p",{children:"MySchola provides tutoring and educational services on a weekly or monthly subscription basis."}),r.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[r.jsx("li",{children:"Payments are processed automatically through Stripe or other secure payment providers."}),r.jsx("li",{children:"Subscription fees vary depending on the subjects, number of sessions, and selected package."}),r.jsx("li",{children:"Subscriptions renew automatically at the end of each billing cycle unless cancelled beforehand."})]})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. 7-Day Money-Back Guarantee"}),r.jsx("p",{children:"We offer a 7-day money-back guarantee from the date of your first payment."}),r.jsx("p",{children:"You may request a full refund within 7 calendar days if:"}),r.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[r.jsx("li",{children:"The request is made within 7 days of the initial purchase."}),r.jsx("li",{children:"The request is submitted in writing."}),r.jsx("li",{children:"There has been no excessive or abusive use of the service."})]}),r.jsx("p",{children:"This guarantee allows parents and students to determine whether the service is suitable for their needs."}),r.jsx("p",{children:"Refunds are not intended for customers who primarily consume a significant portion of the service and then request a refund."})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Partial Refunds"}),r.jsx("p",{children:"In certain situations, partial refunds may be offered at MySchola's discretion, including but not limited to:"}),r.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[r.jsx("li",{children:"Removing one subject from a multi-subject subscription."}),r.jsx("li",{children:"Downgrading to a smaller tutoring package."}),r.jsx("li",{children:"Reduction in services during an active billing period."})]})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. No Refunds After 7 Days"}),r.jsx("p",{children:"After the 7-day money-back guarantee period has passed:"}),r.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[r.jsx("li",{children:"No refunds will be issued for time already used."}),r.jsx("li",{children:"Missed lessons, unused sessions, or lack of attendance do not qualify for refunds."}),r.jsx("li",{children:"Refunds are not issued for failure to attend or engage with lessons."})]}),r.jsx("p",{children:"If a subscription is cancelled after this period, the cancellation will only prevent future charges."}),r.jsx("p",{children:"Any partial refund will be calculated proportionally based on the remaining value of the unused service."})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Cancellation Policy"}),r.jsx("p",{children:"You may cancel your subscription at any time."}),r.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[r.jsx("li",{children:"Cancellations apply to future billing periods only."}),r.jsx("li",{children:"Access to tutoring sessions and learning resources will remain active until the end of the current paid billing period."}),r.jsx("li",{children:"Once a billing cycle has begun, it is considered earned and non-refundable after the 7-day guarantee period."})]})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"7. How to Cancel or Request a Refund"}),r.jsx("p",{children:"All cancellation or refund requests must be submitted in writing."}),r.jsx("p",{children:"You can contact us via WhatsApp or SMS: +44 7344 193804."}),r.jsx("p",{children:"Your request should include:"}),r.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[r.jsx("li",{children:"The student's full name."}),r.jsx("li",{children:"The email address or phone number used during registration."}),r.jsx("li",{children:"A clear request to cancel or request a refund."})]}),r.jsx("p",{children:"Our support team will review and respond to requests as quickly as possible."})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"8. Immediate Access to Digital Services"}),r.jsx("p",{children:"Access to MySchola's digital platform, tutoring sessions, recordings, and learning resources is typically provided within minutes of successful payment."}),r.jsx("p",{children:"By accessing the service immediately, you acknowledge that:"}),r.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[r.jsx("li",{children:"Digital educational services begin immediately after purchase."}),r.jsx("li",{children:"Your subscription is considered active once access has been granted."})]}),r.jsx("p",{children:"This does not affect your statutory rights or the 7-day money-back guarantee, but it helps prevent misuse of the refund policy."})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"9. Abuse of the Refund Policy"}),r.jsx("p",{children:"To ensure fairness for all students and families, MySchola reserves the right to:"}),r.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[r.jsx("li",{children:"Refuse refund requests where there is evidence of repeated or abusive refund behaviour."}),r.jsx("li",{children:"Suspend or terminate accounts in cases of misuse, fraudulent activity, or bad-faith use of the service."})]})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"10. Changes to This Policy"}),r.jsx("p",{children:"MySchola may update this Refund & Cancellation Policy from time to time."}),r.jsx("p",{children:"The most current version will always be available on our website."})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"11. Contact"}),r.jsx("p",{children:"MySchola"}),r.jsx("p",{children:"For support, refunds, or cancellations:"}),r.jsx("p",{children:"WhatsApp / SMS: +44 7344 193804"})]})]})]})})]}),r.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center mb-4",children:[r.jsx(ct,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),r.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),r.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 9-11 via Zoom."})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),r.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[r.jsx("li",{children:r.jsx("a",{href:"#home",className:"hover:text-white transition",children:"Home"})}),r.jsx("li",{children:r.jsx("a",{href:"#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),r.jsx("li",{children:r.jsx("a",{href:"#subjects",className:"hover:text-white transition",children:"Subjects"})}),r.jsx("li",{children:r.jsx("a",{href:"#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),r.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[r.jsx("li",{children:r.jsx("a",{href:"#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),r.jsx("li",{children:r.jsx("a",{href:"#terms-of-service",className:"hover:text-white transition",children:"Refund & Cancellation Policy"})}),r.jsx("li",{children:r.jsx("a",{href:"#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),r.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[r.jsx("li",{children:r.jsx("a",{href:"mailto:myscholauk@gmail.com",className:"hover:text-white transition",children:"myscholauk@gmail.com"})}),r.jsx("li",{children:r.jsx("a",{href:"tel:+447344193804",className:"hover:text-white transition",children:"+44 7344 193804"})}),r.jsx("li",{children:r.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Yt,className:"text-green-400 hover:text-green-300 transition inline-flex items-center gap-2",children:[r.jsx(Ne,{className:"h-4 w-4","aria-hidden":"true"}),"Contact Us on WhatsApp"]})}),r.jsx("li",{children:r.jsx("button",{type:"button",onClick:y,className:"bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation text-sm sm:text-base","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),r.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:r.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 9-11."]})})]})}),r.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Yt,className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation","aria-label":"Contact us on WhatsApp",children:r.jsx(Ne,{className:"h-5 w-5 sm:h-6 sm:w-6","aria-hidden":"true"})})]})}const Dg=()=>{};var _c={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let i=s.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Vg=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const i=s[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const a=s[t++];e[n++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=s[t++],l=s[t++],c=s[t++],h=((i&7)<<18|(a&63)<<12|(l&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(h>>10)),e[n++]=String.fromCharCode(56320+(h&1023))}else{const a=s[t++],l=s[t++];e[n++]=String.fromCharCode((i&15)<<12|(a&63)<<6|l&63)}}return e.join("")},Ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<s.length;i+=3){const a=s[i],l=i+1<s.length,c=l?s[i+1]:0,h=i+2<s.length,m=h?s[i+2]:0,f=a>>2,x=(a&3)<<4|c>>4;let v=(c&15)<<2|m>>6,I=m&63;h||(I=64,l||(v=64)),n.push(t[f],t[x],t[v],t[I])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Eh(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):Vg(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<s.length;){const a=t[s.charAt(i++)],c=i<s.length?t[s.charAt(i)]:0;++i;const m=i<s.length?t[s.charAt(i)]:64;++i;const x=i<s.length?t[s.charAt(i)]:64;if(++i,a==null||c==null||m==null||x==null)throw new Mg;const v=a<<2|c>>4;if(n.push(v),m!==64){const I=c<<4&240|m>>2;if(n.push(I),x!==64){const S=m<<6&192|x;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Mg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lg=function(s){const e=Eh(s);return Ih.encodeByteArray(e,!0)},si=function(s){return Lg(s).replace(/\./g,"")},Th=function(s){try{return Ih.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Og(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fg=()=>Og().__FIREBASE_DEFAULTS__,Ug=()=>{if(typeof process>"u"||typeof _c>"u")return;const s=_c.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Bg=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Th(s[1]);return e&&JSON.parse(e)},Ri=()=>{try{return Dg()||Fg()||Ug()||Bg()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},jh=s=>{var e,t;return(t=(e=Ri())==null?void 0:e.emulatorHosts)==null?void 0:t[s]},qg=s=>{const e=jh(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Ah=()=>{var s;return(s=Ri())==null?void 0:s.config},Sh=s=>{var e;return(e=Ri())==null?void 0:e[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function an(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function kh(s){return(await fetch(s,{credentials:"include"})).ok}/**
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
 */function Wg(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=s.iat||0,a=s.sub||s.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...s};return[si(JSON.stringify(t)),si(JSON.stringify(l)),""].join(".")}const qn={};function Hg(){const s={prod:[],emulator:[]};for(const e of Object.keys(qn))qn[e]?s.emulator.push(e):s.prod.push(e);return s}function zg(s){let e=document.getElementById(s),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),t=!0),{created:t,element:e}}let Nc=!1;function Ch(s,e){if(typeof window>"u"||typeof document>"u"||!an(window.location.host)||qn[s]===e||qn[s]||Nc)return;qn[s]=e;function t(v){return`__firebase__banner__${v}`}const n="__firebase__banner",a=Hg().prod.length>0;function l(){const v=document.getElementById(n);v&&v.remove()}function c(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function h(v,I){v.setAttribute("width","24"),v.setAttribute("id",I),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function m(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Nc=!0,l()},v}function f(v,I){v.setAttribute("id",I),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function x(){const v=zg(n),I=t("text"),S=document.getElementById(I)||document.createElement("span"),P=t("learnmore"),R=document.getElementById(P)||document.createElement("a"),O=t("preprendIcon"),D=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const B=v.element;c(B),f(R,P);const Y=m();h(D,O),B.append(D,S,R,Y),document.body.appendChild(B)}a?(S.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function Kg(){var e;const s=(e=Ri())==null?void 0:e.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rh(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Yg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jg(){const s=Qe();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Xg(){return!Kg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ph(){try{return typeof indexedDB=="object"}catch{return!1}}function Dh(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var a;e(((a=i.error)==null?void 0:a.message)||"")}}catch(t){e(t)}})}function Zg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex="FirebaseError";class gt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=ex,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ks.prototype.create)}}class ks{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],l=a?tx(a,n):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new gt(i,c,n)}}function tx(s,e){return s.replace(sx,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const sx=/\{\$([^}]+)}/g;function nx(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function ns(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const a=s[i],l=e[i];if(Ec(a)&&Ec(l)){if(!ns(a,l))return!1}else if(a!==l)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function Ec(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Mn(s){const e={};return s.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,a]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function Ln(s){const e=s.indexOf("?");if(!e)return"";const t=s.indexOf("#",e);return s.substring(e,t>0?t:void 0)}function rx(s,e){const t=new ix(s,e);return t.subscribe.bind(t)}class ix{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");ax(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Ia),i.error===void 0&&(i.error=Ia),i.complete===void 0&&(i.complete=Ia);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ax(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function Ia(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=1e3,lx=2,cx=14400*1e3,ux=.5;function Ic(s,e=ox,t=lx){const n=e*Math.pow(t,s),i=Math.round(ux*n*(Math.random()-.5)*2);return Math.min(cx,n+i)}/**
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
 */function Ee(s){return s&&s._delegate?s._delegate:s}class mt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new $g;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mx(e))try{this.getOrInitializeService({instanceIdentifier:bs})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});n.resolve(a)}catch{}}}}clearInstance(e=bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bs){return this.instances.has(e)}getOptions(e=bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[a,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(a);n===c&&l.resolve(i)}return i}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(n)??new Set;i.add(e),this.onInitCallbacks.set(n,i);const a=this.instances.get(n);return a&&e(a,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:dx(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=bs){return this.component?this.component.multipleInstances?e:bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dx(s){return s===bs?void 0:s}function mx(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hx(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(se||(se={}));const px={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},gx=se.INFO,xx={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},yx=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),i=xx[e];if(i)console[i](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pi{constructor(e){this.name=e,this._logLevel=gx,this._logHandler=yx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?px[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const bx=(s,e)=>e.some(t=>s instanceof t);let Tc,jc;function wx(){return Tc||(Tc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vx(){return jc||(jc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vh=new WeakMap,Ya=new WeakMap,Mh=new WeakMap,Ta=new WeakMap,Io=new WeakMap;function _x(s){const e=new Promise((t,n)=>{const i=()=>{s.removeEventListener("success",a),s.removeEventListener("error",l)},a=()=>{t(Xt(s.result)),i()},l=()=>{n(s.error),i()};s.addEventListener("success",a),s.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&Vh.set(t,s)}).catch(()=>{}),Io.set(e,s),e}function Nx(s){if(Ya.has(s))return;const e=new Promise((t,n)=>{const i=()=>{s.removeEventListener("complete",a),s.removeEventListener("error",l),s.removeEventListener("abort",l)},a=()=>{t(),i()},l=()=>{n(s.error||new DOMException("AbortError","AbortError")),i()};s.addEventListener("complete",a),s.addEventListener("error",l),s.addEventListener("abort",l)});Ya.set(s,e)}let Ja={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return Ya.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Mh.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xt(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function Ex(s){Ja=s(Ja)}function Ix(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(ja(this),e,...t);return Mh.set(n,e.sort?e.sort():[e]),Xt(n)}:vx().includes(s)?function(...e){return s.apply(ja(this),e),Xt(Vh.get(this))}:function(...e){return Xt(s.apply(ja(this),e))}}function Tx(s){return typeof s=="function"?Ix(s):(s instanceof IDBTransaction&&Nx(s),bx(s,wx())?new Proxy(s,Ja):s)}function Xt(s){if(s instanceof IDBRequest)return _x(s);if(Ta.has(s))return Ta.get(s);const e=Tx(s);return e!==s&&(Ta.set(s,e),Io.set(e,s)),e}const ja=s=>Io.get(s);function Lh(s,e,{blocked:t,upgrade:n,blocking:i,terminated:a}={}){const l=indexedDB.open(s,e),c=Xt(l);return n&&l.addEventListener("upgradeneeded",h=>{n(Xt(l.result),h.oldVersion,h.newVersion,Xt(l.transaction),h)}),t&&l.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{a&&h.addEventListener("close",()=>a()),i&&h.addEventListener("versionchange",m=>i(m.oldVersion,m.newVersion,m))}).catch(()=>{}),c}const jx=["get","getKey","getAll","getAllKeys","count"],Ax=["put","add","delete","clear"],Aa=new Map;function Ac(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Aa.get(e))return Aa.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Ax.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||jx.includes(t)))return;const a=async function(l,...c){const h=this.transaction(l,i?"readwrite":"readonly");let m=h.store;return n&&(m=m.index(c.shift())),(await Promise.all([m[t](...c),i&&h.done]))[0]};return Aa.set(e,a),a}Ex(s=>({...s,get:(e,t,n)=>Ac(e,t)||s.get(e,t,n),has:(e,t)=>!!Ac(e,t)||s.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(kx(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function kx(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xa="@firebase/app",Sc="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new Pi("@firebase/app"),Cx="@firebase/app-compat",Rx="@firebase/analytics-compat",Px="@firebase/analytics",Dx="@firebase/app-check-compat",Vx="@firebase/app-check",Mx="@firebase/auth",Lx="@firebase/auth-compat",Ox="@firebase/database",Fx="@firebase/data-connect",Ux="@firebase/database-compat",Bx="@firebase/functions",qx="@firebase/functions-compat",$x="@firebase/installations",Wx="@firebase/installations-compat",Hx="@firebase/messaging",zx="@firebase/messaging-compat",Gx="@firebase/performance",Kx="@firebase/performance-compat",Qx="@firebase/remote-config",Yx="@firebase/remote-config-compat",Jx="@firebase/storage",Xx="@firebase/storage-compat",Zx="@firebase/firestore",ey="@firebase/ai",ty="@firebase/firestore-compat",sy="firebase",ny="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="[DEFAULT]",ry={[Xa]:"fire-core",[Cx]:"fire-core-compat",[Px]:"fire-analytics",[Rx]:"fire-analytics-compat",[Vx]:"fire-app-check",[Dx]:"fire-app-check-compat",[Mx]:"fire-auth",[Lx]:"fire-auth-compat",[Ox]:"fire-rtdb",[Fx]:"fire-data-connect",[Ux]:"fire-rtdb-compat",[Bx]:"fire-fn",[qx]:"fire-fn-compat",[$x]:"fire-iid",[Wx]:"fire-iid-compat",[Hx]:"fire-fcm",[zx]:"fire-fcm-compat",[Gx]:"fire-perf",[Kx]:"fire-perf-compat",[Qx]:"fire-rc",[Yx]:"fire-rc-compat",[Jx]:"fire-gcs",[Xx]:"fire-gcs-compat",[Zx]:"fire-fst",[ty]:"fire-fst-compat",[ey]:"fire-vertex","fire-js":"fire-js",[sy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Map,iy=new Map,eo=new Map;function kc(s,e){try{s.container.addComponent(e)}catch(t){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function Tt(s){const e=s.name;if(eo.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;eo.set(e,s);for(const t of ni.values())kc(t,s);for(const t of iy.values())kc(t,s);return!0}function Cs(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function ut(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new ks("app","Firebase",ay);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=ny;function Oh(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:Za,automaticDataCollectionEnabled:!0,...e},i=n.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(t||(t=Ah()),!t)throw Zt.create("no-options");const a=ni.get(i);if(a){if(ns(t,a.options)&&ns(n,a.config))return a;throw Zt.create("duplicate-app",{appName:i})}const l=new fx(i);for(const h of eo.values())l.addComponent(h);const c=new oy(t,n,l);return ni.set(i,c),c}function To(s=Za){const e=ni.get(s);if(!e&&s===Za&&Ah())return Oh();if(!e)throw Zt.create("no-app",{appName:s});return e}function ot(s,e,t){let n=ry[s]??s;t&&(n+=`-${t}`);const i=n.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${n}" with version "${e}":`];i&&l.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(l.join(" "));return}Tt(new mt(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const ly="firebase-heartbeat-database",cy=1,Yn="firebase-heartbeat-store";let Sa=null;function Fh(){return Sa||(Sa=Lh(ly,cy,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Yn)}catch(t){console.warn(t)}}}}).catch(s=>{throw Zt.create("idb-open",{originalErrorMessage:s.message})})),Sa}async function uy(s){try{const t=(await Fh()).transaction(Yn),n=await t.objectStore(Yn).get(Uh(s));return await t.done,n}catch(e){if(e instanceof gt)Pt.warn(e.message);else{const t=Zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pt.warn(t.message)}}}async function Cc(s,e){try{const n=(await Fh()).transaction(Yn,"readwrite");await n.objectStore(Yn).put(e,Uh(s)),await n.done}catch(t){if(t instanceof gt)Pt.warn(t.message);else{const n=Zt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pt.warn(n.message)}}}function Uh(s){return`${s.name}!${s.options.appId}`}/**
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
 */const hy=1024,dy=30;class my{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new py(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Rc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>dy){const l=gy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Pt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Rc(),{heartbeatsToSend:n,unsentEntries:i}=fy(this._heartbeatsCache.heartbeats),a=si(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Pt.warn(t),""}}}function Rc(){return new Date().toISOString().substring(0,10)}function fy(s,e=hy){const t=[];let n=s.slice();for(const i of s){const a=t.find(l=>l.agent===i.agent);if(a){if(a.dates.push(i.date),Pc(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Pc(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class py{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ph()?Dh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await uy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Cc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Cc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Pc(s){return si(JSON.stringify({version:2,heartbeats:s})).length}function gy(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(s){Tt(new mt("platform-logger",e=>new Sx(e),"PRIVATE")),Tt(new mt("heartbeat",e=>new my(e),"PRIVATE")),ot(Xa,Sc,s),ot(Xa,Sc,"esm2020"),ot("fire-js","")}xy("");var yy="firebase",by="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot(yy,by,"app");function Bh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wy=Bh,qh=new ks("auth","Firebase",Bh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new Pi("@firebase/auth");function vy(s,...e){ri.logLevel<=se.WARN&&ri.warn(`Auth (${on}): ${s}`,...e)}function Fr(s,...e){ri.logLevel<=se.ERROR&&ri.error(`Auth (${on}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(s,...e){throw jo(s,...e)}function wt(s,...e){return jo(s,...e)}function $h(s,e,t){const n={...wy(),[e]:t};return new ks("auth","Firebase",n).create(e,{appName:s.name})}function es(s){return $h(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jo(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return qh.create(s,...e)}function H(s,e,...t){if(!s)throw jo(e,...t)}function At(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Fr(e),new Error(e)}function Dt(s,e){s||At(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function _y(){return Dc()==="http:"||Dc()==="https:"}function Dc(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_y()||Rh()||"connection"in navigator)?navigator.onLine:!0}function Ey(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dt(t>e,"Short delay should be less than long delay!"),this.isMobile=Gg()||Yg()}get(){return Ny()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(s,e){Dt(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jy=new cr(3e4,6e4);function Rs(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function hs(s,e,t,n,i={}){return Hh(s,i,async()=>{let a={},l={};n&&(e==="GET"?l=n:a={body:JSON.stringify(n)});const c=lr({key:s.config.apiKey,...l}).slice(1),h=await s._getAdditionalHeaders();h["Content-Type"]="application/json",s.languageCode&&(h["X-Firebase-Locale"]=s.languageCode);const m={method:e,headers:h,...a};return Qg()||(m.referrerPolicy="no-referrer"),s.emulatorConfig&&an(s.emulatorConfig.host)&&(m.credentials="include"),Wh.fetch()(await zh(s,s.config.apiHost,t,c),m)})}async function Hh(s,e,t){s._canInitEmulator=!1;const n={...Iy,...e};try{const i=new Sy(s),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw kr(s,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const c=a.ok?l.errorMessage:l.error.message,[h,m]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw kr(s,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw kr(s,"email-already-in-use",l);if(h==="USER_DISABLED")throw kr(s,"user-disabled",l);const f=n[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw $h(s,f,m);ft(s,f)}}catch(i){if(i instanceof gt)throw i;ft(s,"network-request-failed",{message:String(i)})}}async function Di(s,e,t,n,i={}){const a=await hs(s,e,t,n,i);return"mfaPendingCredential"in a&&ft(s,"multi-factor-auth-required",{_serverResponse:a}),a}async function zh(s,e,t,n){const i=`${e}${t}?${n}`,a=s,l=a.config.emulator?Ao(s.config,i):`${s.config.apiScheme}://${i}`;return Ty.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}function Ay(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Sy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(wt(this.auth,"network-request-failed")),jy.get())})}}function kr(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=wt(s,e,n);return i.customData._tokenResponse=t,i}function Vc(s){return s!==void 0&&s.enterprise!==void 0}class ky{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ay(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Cy(s,e){return hs(s,"GET","/v2/recaptchaConfig",Rs(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(s,e){return hs(s,"POST","/v1/accounts:delete",e)}async function ii(s,e){return hs(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Py(s,e=!1){const t=Ee(s),n=await t.getIdToken(e),i=So(n);H(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,l=a==null?void 0:a.sign_in_provider;return{claims:i,token:n,authTime:$n(ka(i.auth_time)),issuedAtTime:$n(ka(i.iat)),expirationTime:$n(ka(i.exp)),signInProvider:l||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function ka(s){return Number(s)*1e3}function So(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return Fr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Th(t);return i?JSON.parse(i):(Fr("Failed to decode base64 JWT payload"),null)}catch(i){return Fr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Mc(s){const e=So(s);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof gt&&Dy(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function Dy({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$n(this.lastLoginAt),this.creationTime=$n(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(s){var x;const e=s.auth,t=await s.getIdToken(),n=await Jn(s,ii(e,{idToken:t}));H(n==null?void 0:n.users.length,e,"internal-error");const i=n.users[0];s._notifyReloadListener(i);const a=(x=i.providerUserInfo)!=null&&x.length?Gh(i.providerUserInfo):[],l=Ly(s.providerData,a),c=s.isAnonymous,h=!(s.email&&i.passwordHash)&&!(l!=null&&l.length),m=c?h:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new so(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(s,f)}async function My(s){const e=Ee(s);await ai(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ly(s,e){return[...s.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Gh(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oy(s,e){const t=await Hh(s,{},async()=>{const n=lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=s.config,l=await zh(s,i,"/v1/token",`key=${a}`),c=await s._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:c,body:n};return s.emulatorConfig&&an(s.emulatorConfig.host)&&(h.credentials="include"),Wh.fetch()(l,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Fy(s,e){return hs(s,"POST","/v2/accounts:revokeToken",Rs(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=Mc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:a}=await Oy(e,t);this.updateTokensAndExpiration(n,i,Number(a))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:a}=t,l=new Hs;return n&&(H(typeof n=="string","internal-error",{appName:e}),l.refreshToken=n),i&&(H(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),a&&(H(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hs,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(s,e){H(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class ht{constructor({uid:e,auth:t,stsTokenManager:n,...i}){this.providerId="firebase",this.proactiveRefresh=new Vy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new so(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Jn(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Py(this,e)}reload(){return My(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ht({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ai(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ut(this.auth.app))return Promise.reject(es(this.auth));const e=await this.getIdToken();return await Jn(this,Ry(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,i=t.email??void 0,a=t.phoneNumber??void 0,l=t.photoURL??void 0,c=t.tenantId??void 0,h=t._redirectEventId??void 0,m=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:x,emailVerified:v,isAnonymous:I,providerData:S,stsTokenManager:P}=t;H(x&&P,e,"internal-error");const R=Hs.fromJSON(this.name,P);H(typeof x=="string",e,"internal-error"),Wt(n,e.name),Wt(i,e.name),H(typeof v=="boolean",e,"internal-error"),H(typeof I=="boolean",e,"internal-error"),Wt(a,e.name),Wt(l,e.name),Wt(c,e.name),Wt(h,e.name),Wt(m,e.name),Wt(f,e.name);const O=new ht({uid:x,auth:e,email:i,emailVerified:v,displayName:n,isAnonymous:I,photoURL:l,phoneNumber:a,tenantId:c,stsTokenManager:R,createdAt:m,lastLoginAt:f});return S&&Array.isArray(S)&&(O.providerData=S.map(D=>({...D}))),h&&(O._redirectEventId=h),O}static async _fromIdTokenResponse(e,t,n=!1){const i=new Hs;i.updateFromServerResponse(t);const a=new ht({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ai(a),a}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];H(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Gh(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),c=new Hs;c.updateFromIdToken(n);const h=new ht({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:l}),m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new so(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(h,m),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new Map;function St(s){Dt(s instanceof Function,"Expected a class definition");let e=Lc.get(s);return e?(Dt(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,Lc.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Kh.type="NONE";const Oc=Kh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(s,e,t){return`firebase:${s}:${e}:${t}`}class zs{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:a}=this.auth;this.fullUserKey=Ur(this.userKey,i.apiKey,a),this.fullPersistenceKey=Ur("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ii(this.auth,{idToken:e}).catch(()=>{});return t?ht._fromGetAccountInfoResponse(this.auth,t,e):null}return ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new zs(St(Oc),e,n);const i=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=i[0]||St(Oc);const l=Ur(n,e.config.apiKey,e.name);let c=null;for(const m of t)try{const f=await m._get(l);if(f){let x;if(typeof f=="string"){const v=await ii(e,{idToken:f}).catch(()=>{});if(!v)break;x=await ht._fromGetAccountInfoResponse(e,v,f)}else x=ht._fromJSON(e,f);m!==a&&(c=x),a=m;break}}catch{}const h=i.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!h.length?new zs(a,e,n):(a=h[0],c&&await a._set(l,c.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(l)}catch{}})),new zs(a,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ed(e))return"Blackberry";if(td(e))return"Webos";if(Yh(e))return"Safari";if((e.includes("chrome/")||Jh(e))&&!e.includes("edge/"))return"Chrome";if(Zh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Qh(s=Qe()){return/firefox\//i.test(s)}function Yh(s=Qe()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jh(s=Qe()){return/crios\//i.test(s)}function Xh(s=Qe()){return/iemobile/i.test(s)}function Zh(s=Qe()){return/android/i.test(s)}function ed(s=Qe()){return/blackberry/i.test(s)}function td(s=Qe()){return/webos/i.test(s)}function ko(s=Qe()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Uy(s=Qe()){var e;return ko(s)&&!!((e=window.navigator)!=null&&e.standalone)}function By(){return Jg()&&document.documentMode===10}function sd(s=Qe()){return ko(s)||Zh(s)||td(s)||ed(s)||/windows phone/i.test(s)||Xh(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(s,e=[]){let t;switch(s){case"Browser":t=Fc(Qe());break;case"Worker":t=`${Fc(Qe())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${on}/${n}`}/**
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
 */class qy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=a=>new Promise((l,c)=>{try{const h=e(a);l(h)}catch(h){c(h)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function $y(s,e={}){return hs(s,"GET","/v2/passwordPolicy",Rs(s,e))}/**
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
 */const Wy=6;class Hy{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Wy,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uc(this),this.idTokenSubscription=new Uc(this),this.beforeStateQueue=new qy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=St(t)),this._initializationPromise=this.queue(async()=>{var n,i,a;if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ii(this,{idToken:e}),n=await ht._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var a;if(ut(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(a=this.redirectUser)==null?void 0:a._redirectEventId,c=n==null?void 0:n._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===c)&&(h!=null&&h.user)&&(n=h.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(l){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ai(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ey()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ut(this.app))return Promise.reject(es(this));const t=e?Ee(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ut(this.app)?Promise.reject(es(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ut(this.app)?Promise.reject(es(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $y(this),t=new Hy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ks("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Fy(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&St(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[St(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,n,i);return()=>{l=!0,h()}}else{const h=e.addObserver(t);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&vy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ln(s){return Ee(s)}class Uc{constructor(e){this.auth=e,this.observer=null,this.addObserver=rx(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Gy(s){Vi=s}function rd(s){return Vi.loadJS(s)}function Ky(){return Vi.recaptchaEnterpriseScript}function Qy(){return Vi.gapiScript}function Yy(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class Jy{constructor(){this.enterprise=new Xy}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Xy{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Zy="recaptcha-enterprise",id="NO_RECAPTCHA";class e0{constructor(e){this.type=Zy,this.auth=ln(e)}async verify(e="verify",t=!1){async function n(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,c)=>{Cy(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const m=new ky(h);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,l(m.siteKey)}}).catch(h=>{c(h)})})}function i(a,l,c){const h=window.grecaptcha;Vc(h)?h.enterprise.ready(()=>{h.enterprise.execute(a,{action:e}).then(m=>{l(m)}).catch(()=>{l(id)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Jy().execute("siteKey",{action:"verify"}):new Promise((a,l)=>{n(this.auth).then(c=>{if(!t&&Vc(window.grecaptcha))i(c,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Ky();h.length!==0&&(h+=c),rd(h).then(()=>{i(c,a,l)}).catch(m=>{l(m)})}}).catch(c=>{l(c)})})}}async function Bc(s,e,t,n=!1,i=!1){const a=new e0(s);let l;if(i)l=id;else try{l=await a.verify(t)}catch{l=await a.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const h=c.phoneEnrollmentInfo.phoneNumber,m=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:m,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const h=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return n?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function qc(s,e,t,n,i){var a;if((a=s._getRecaptchaConfig())!=null&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Bc(s,e,t,t==="getOobCode");return n(s,l)}else return n(s,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Bc(s,e,t,t==="getOobCode");return n(s,c)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(s,e){const t=Cs(s,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(ns(a,e??{}))return i;ft(i,"already-initialized")}return t.initialize({options:e})}function s0(s,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(St);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function n0(s,e,t){const n=ln(s);H(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,a=ad(e),{host:l,port:c}=r0(e),h=c===null?"":`:${c}`,m={url:`${a}//${l}${h}/`},f=Object.freeze({host:l,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){H(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),H(ns(m,n.config.emulator)&&ns(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=m,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,an(l)?(kh(`${a}//${l}${h}`),Ch("Auth",!0)):i0()}function ad(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function r0(s){const e=ad(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const a=i[1];return{host:a,port:$c(n.substr(a.length+1))}}else{const[a,l]=n.split(":");return{host:a,port:$c(l)}}}function $c(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function i0(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return At("not implemented")}_getIdTokenResponse(e){return At("not implemented")}_linkToIdToken(e,t){return At("not implemented")}_getReauthenticationResolver(e){return At("not implemented")}}async function a0(s,e){return hs(s,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(s,e){return Di(s,"POST","/v1/accounts:signInWithPassword",Rs(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(s,e){return Di(s,"POST","/v1/accounts:signInWithEmailLink",Rs(s,e))}async function c0(s,e){return Di(s,"POST","/v1/accounts:signInWithEmailLink",Rs(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Co{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Xn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Xn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qc(e,t,"signInWithPassword",o0);case"emailLink":return l0(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qc(e,n,"signUpPassword",a0);case"emailLink":return c0(e,{idToken:t,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(s,e){return Di(s,"POST","/v1/accounts:signInWithIdp",Rs(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="http://localhost";class Es extends Co{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ft("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,...a}=t;if(!n||!i)return null;const l=new Es(n,i);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return Gs(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Gs(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Gs(e,t)}buildRequest(){const e={requestUri:u0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=lr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function d0(s){const e=Mn(Ln(s)).link,t=e?Mn(Ln(e)).deep_link_id:null,n=Mn(Ln(s)).deep_link_id;return(n?Mn(Ln(n)).link:null)||n||t||e||s}class Ro{constructor(e){const t=Mn(Ln(e)),n=t.apiKey??null,i=t.oobCode??null,a=h0(t.mode??null);H(n&&i&&a,"argument-error"),this.apiKey=n,this.operation=a,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=d0(e);try{return new Ro(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.providerId=cn.PROVIDER_ID}static credential(e,t){return Xn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ro.parseLink(t);return H(n,"argument-error"),Xn._fromEmailAndCode(e,n.code,n.tenantId)}}cn.PROVIDER_ID="password";cn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ur extends od{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends ur{constructor(){super("facebook.com")}static credential(e){return Es._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends ur{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Es._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Gt.credential(t,n)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends ur{constructor(){super("github.com")}static credential(e){return Es._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com";Kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends ur{constructor(){super("twitter.com")}static credential(e,t){return Es._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qt.credential(t,n)}catch{return null}}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com";Qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const a=await ht._fromIdTokenResponse(e,n,i),l=Wc(n);return new Xs({user:a,providerId:l,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Wc(n);return new Xs({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Wc(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends gt{constructor(e,t,n,i){super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,oi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new oi(e,t,n,i)}}function ld(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?oi._fromErrorAndOperation(s,a,e,n):a})}async function m0(s,e,t=!1){const n=await Jn(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return Xs._forOperation(s,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0(s,e,t=!1){const{auth:n}=s;if(ut(n.app))return Promise.reject(es(n));const i="reauthenticate";try{const a=await Jn(s,ld(n,i,e,s),t);H(a.idToken,n,"internal-error");const l=So(a.idToken);H(l,n,"internal-error");const{sub:c}=l;return H(s.uid===c,n,"user-mismatch"),Xs._forOperation(s,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&ft(n,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(s,e,t=!1){if(ut(s.app))return Promise.reject(es(s));const n="signIn",i=await ld(s,n,e),a=await Xs._fromIdTokenResponse(s,n,i);return t||await s._updateCurrentUser(a.user),a}async function p0(s,e){return cd(ln(s),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g0(s){const e=ln(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function x0(s,e,t){return ut(s.app)?Promise.reject(es(s)):p0(Ee(s),cn.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&g0(s),n})}function y0(s,e,t,n){return Ee(s).onIdTokenChanged(e,t,n)}function b0(s,e,t){return Ee(s).beforeAuthStateChanged(e,t)}function Mi(s,e,t,n){return Ee(s).onAuthStateChanged(e,t,n)}function w0(s){return Ee(s).signOut()}const li="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(li,"1"),this.storage.removeItem(li),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=1e3,_0=10;class hd extends ud{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,c,h)=>{this.notifyListeners(l,h)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(n);!t&&this.localCache[n]===l||this.notifyListeners(n,l)},a=this.storage.getItem(n);By()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_0):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},v0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hd.type="LOCAL";const N0=hd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd extends ud{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dd.type="SESSION";const md=dd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new Li(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:a}=t.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(l).map(async m=>m(t.origin,a)),h=await E0(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Li.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,l;return new Promise((c,h)=>{const m=Po("",20);i.port1.start();const f=setTimeout(()=>{h(new Error("unsupported_event"))},n);l={messageChannel:i,onMessage(x){const v=x;if(v.data.eventId===m)switch(v.data.status){case"ack":clearTimeout(f),a=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),c(v.data.response);break;default:clearTimeout(f),clearTimeout(a),h(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return window}function T0(s){vt().location.href=s}/**
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
 */function fd(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function j0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function A0(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function S0(){return fd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="firebaseLocalStorageDb",k0=1,ci="firebaseLocalStorage",gd="fbase_key";class hr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Oi(s,e){return s.transaction([ci],e?"readwrite":"readonly").objectStore(ci)}function C0(){const s=indexedDB.deleteDatabase(pd);return new hr(s).toPromise()}function no(){const s=indexedDB.open(pd,k0);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(ci,{keyPath:gd})}catch(i){t(i)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(ci)?e(n):(n.close(),await C0(),e(await no()))})})}async function Hc(s,e,t){const n=Oi(s,!0).put({[gd]:e,value:t});return new hr(n).toPromise()}async function R0(s,e){const t=Oi(s,!1).get(e),n=await new hr(t).toPromise();return n===void 0?null:n.value}function zc(s,e){const t=Oi(s,!0).delete(e);return new hr(t).toPromise()}const P0=800,D0=3;class xd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await no(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>D0)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Li._getInstance(S0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await j0(),!this.activeServiceWorker)return;this.sender=new I0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||A0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await no();return await Hc(e,li,"1"),await zc(e,li),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hc(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>R0(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Oi(i,!1).getAll();return new hr(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),P0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xd.type="LOCAL";const V0=xd;new cr(3e4,6e4);/**
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
 */function M0(s,e){return e?St(e):(H(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends Co{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Gs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function L0(s){return cd(s.auth,new Do(s),s.bypassAuthState)}function O0(s){const{auth:e,user:t}=s;return H(t,e,"internal-error"),f0(t,new Do(s),s.bypassAuthState)}async function F0(s){const{auth:e,user:t}=s;return H(t,e,"internal-error"),m0(t,new Do(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t,n,i,a=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:a,error:l,type:c}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:t,sessionId:n,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return L0;case"linkViaPopup":case"linkViaRedirect":return F0;case"reauthViaPopup":case"reauthViaRedirect":return O0;default:ft(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=new cr(2e3,1e4);class Ws extends yd{constructor(e,t,n,i,a){super(e,t,i,a),this.provider=n,this.authWindow=null,this.pollId=null,Ws.currentPopupAction&&Ws.currentPopupAction.cancel(),Ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=Po();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,U0.get())};e()}}Ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="pendingRedirect",Br=new Map;class q0 extends yd{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Br.get(this.auth._key());if(!e){try{const n=await $0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Br.set(this.auth._key(),e)}return this.bypassAuthState||Br.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $0(s,e){const t=z0(e),n=H0(s);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function W0(s,e){Br.set(s._key(),e)}function H0(s){return St(s._redirectPersistence)}function z0(s){return Ur(B0,s.config.apiKey,s.name)}async function G0(s,e,t=!1){if(ut(s.app))return Promise.reject(es(s));const n=ln(s),i=M0(n,e),l=await new q0(n,i,t).execute();return l&&!t&&(delete l.user._redirectEventId,await n._persistUserIfCurrent(l.user),await n._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=600*1e3;class Q0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!bd(e)){const i=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(wt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=K0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gc(e))}saveEventToCache(e){this.cachedEventUids.add(Gc(e)),this.lastProcessedEventTime=Date.now()}}function Gc(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function bd({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y0(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bd(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J0(s,e={}){return hs(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z0=/^https?/;async function eb(s){if(s.config.emulator)return;const{authorizedDomains:e}=await J0(s);for(const t of e)try{if(tb(t))return}catch{}ft(s,"unauthorized-domain")}function tb(s){const e=to(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const l=new URL(s);return l.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===n}if(!Z0.test(t))return!1;if(X0.test(s))return n===s;const i=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const sb=new cr(3e4,6e4);function Kc(){const s=vt().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function nb(s){return new Promise((e,t)=>{var i,a,l;function n(){Kc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kc(),t(wt(s,"network-request-failed"))},timeout:sb.get()})}if((a=(i=vt().gapi)==null?void 0:i.iframes)!=null&&a.Iframe)e(gapi.iframes.getContext());else if((l=vt().gapi)!=null&&l.load)n();else{const c=Yy("iframefcb");return vt()[c]=()=>{gapi.load?n():t(wt(s,"network-request-failed"))},rd(`${Qy()}?onload=${c}`).catch(h=>t(h))}}).catch(e=>{throw qr=null,e})}let qr=null;function rb(s){return qr=qr||nb(s),qr}/**
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
 */const ib=new cr(5e3,15e3),ab="__/auth/iframe",ob="emulator/auth/iframe",lb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ub(s){const e=s.config;H(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?Ao(e,ob):`https://${s.config.authDomain}/${ab}`,n={apiKey:e.apiKey,appName:s.name,v:on},i=cb.get(s.config.apiHost);i&&(n.eid=i);const a=s._getFrameworks();return a.length&&(n.fw=a.join(",")),`${t}?${lr(n).slice(1)}`}async function hb(s){const e=await rb(s),t=vt().gapi;return H(t,s,"internal-error"),e.open({where:document.body,url:ub(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lb,dontclear:!0},n=>new Promise(async(i,a)=>{await n.restyle({setHideOnLeave:!1});const l=wt(s,"network-request-failed"),c=vt().setTimeout(()=>{a(l)},ib.get());function h(){vt().clearTimeout(c),i(n)}n.ping(h).then(h,()=>{a(l)})}))}/**
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
 */const db={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mb=500,fb=600,pb="_blank",gb="http://localhost";class Qc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xb(s,e,t,n=mb,i=fb){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const h={...db,width:n.toString(),height:i.toString(),top:a,left:l},m=Qe().toLowerCase();t&&(c=Jh(m)?pb:t),Qh(m)&&(e=e||gb,h.scrollbars="yes");const f=Object.entries(h).reduce((v,[I,S])=>`${v}${I}=${S},`,"");if(Uy(m)&&c!=="_self")return yb(e||"",c),new Qc(null);const x=window.open(e||"",c,f);H(x,s,"popup-blocked");try{x.focus()}catch{}return new Qc(x)}function yb(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const bb="__/auth/handler",wb="emulator/auth/handler",vb=encodeURIComponent("fac");async function Yc(s,e,t,n,i,a){H(s.config.authDomain,s,"auth-domain-config-required"),H(s.config.apiKey,s,"invalid-api-key");const l={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:on,eventId:i};if(e instanceof od){e.setDefaultLanguage(s.languageCode),l.providerId=e.providerId||"",nx(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,x]of Object.entries({}))l[f]=x}if(e instanceof ur){const f=e.getScopes().filter(x=>x!=="");f.length>0&&(l.scopes=f.join(","))}s.tenantId&&(l.tid=s.tenantId);const c=l;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const h=await s._getAppCheckToken(),m=h?`#${vb}=${encodeURIComponent(h)}`:"";return`${_b(s)}?${lr(c).slice(1)}${m}`}function _b({config:s}){return s.emulator?Ao(s,wb):`https://${s.authDomain}/${bb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="webStorageSupport";class Nb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=md,this._completeRedirectFn=G0,this._overrideRedirectResult=W0}async _openPopup(e,t,n,i){var l;Dt((l=this.eventManagers[e._key()])==null?void 0:l.manager,"_initialize() not called before _openPopup()");const a=await Yc(e,t,n,to(),i);return xb(e,a,Po())}async _openRedirect(e,t,n,i){await this._originValidation(e);const a=await Yc(e,t,n,to(),i);return T0(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(Dt(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await hb(e),n=new Q0(e);return t.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ca,{type:Ca},i=>{var l;const a=(l=i==null?void 0:i[0])==null?void 0:l[Ca];a!==void 0&&t(!!a),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sd()||Yh()||ko()}}const Eb=Nb;var Jc="@firebase/auth",Xc="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jb(s){Tt(new mt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=n.options;H(l&&!l.includes(":"),"invalid-api-key",{appName:n.name});const h={apiKey:l,authDomain:c,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nd(s)},m=new zy(n,i,a,h);return s0(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Tt(new mt("auth-internal",e=>{const t=ln(e.getProvider("auth").getImmediate());return(n=>new Ib(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ot(Jc,Xc,Tb(s)),ot(Jc,Xc,"esm2020")}/**
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
 */const Ab=300,Sb=Sh("authIdTokenMaxAge")||Ab;let Zc=null;const kb=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Sb)return;const i=t==null?void 0:t.token;Zc!==i&&(Zc=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Cb(s=To()){const e=Cs(s,"auth");if(e.isInitialized())return e.getImmediate();const t=t0(s,{popupRedirectResolver:Eb,persistence:[V0,N0,md]}),n=Sh("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(n,location.origin);if(location.origin===a.origin){const l=kb(a.toString());b0(t,l,()=>l(t.currentUser)),y0(t,c=>l(c))}}const i=jh("auth");return i&&n0(t,`http://${i}`),t}function Rb(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}Gy({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=i=>{const a=wt("internal-error");a.customData=i,t(a)},n.type="text/javascript",n.charset="UTF-8",Rb().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jb("Browser");var eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,wd;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,y){function g(){}g.prototype=y.prototype,N.F=y.prototype,N.prototype=new g,N.prototype.constructor=N,N.D=function(w,_,E){for(var b=Array(arguments.length-2),W=2;W<arguments.length;W++)b[W-2]=arguments[W];return y.prototype[_].apply(w,b)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(N,y,g){g||(g=0);const w=Array(16);if(typeof y=="string")for(var _=0;_<16;++_)w[_]=y.charCodeAt(g++)|y.charCodeAt(g++)<<8|y.charCodeAt(g++)<<16|y.charCodeAt(g++)<<24;else for(_=0;_<16;++_)w[_]=y[g++]|y[g++]<<8|y[g++]<<16|y[g++]<<24;y=N.g[0],g=N.g[1],_=N.g[2];let E=N.g[3],b;b=y+(E^g&(_^E))+w[0]+3614090360&4294967295,y=g+(b<<7&4294967295|b>>>25),b=E+(_^y&(g^_))+w[1]+3905402710&4294967295,E=y+(b<<12&4294967295|b>>>20),b=_+(g^E&(y^g))+w[2]+606105819&4294967295,_=E+(b<<17&4294967295|b>>>15),b=g+(y^_&(E^y))+w[3]+3250441966&4294967295,g=_+(b<<22&4294967295|b>>>10),b=y+(E^g&(_^E))+w[4]+4118548399&4294967295,y=g+(b<<7&4294967295|b>>>25),b=E+(_^y&(g^_))+w[5]+1200080426&4294967295,E=y+(b<<12&4294967295|b>>>20),b=_+(g^E&(y^g))+w[6]+2821735955&4294967295,_=E+(b<<17&4294967295|b>>>15),b=g+(y^_&(E^y))+w[7]+4249261313&4294967295,g=_+(b<<22&4294967295|b>>>10),b=y+(E^g&(_^E))+w[8]+1770035416&4294967295,y=g+(b<<7&4294967295|b>>>25),b=E+(_^y&(g^_))+w[9]+2336552879&4294967295,E=y+(b<<12&4294967295|b>>>20),b=_+(g^E&(y^g))+w[10]+4294925233&4294967295,_=E+(b<<17&4294967295|b>>>15),b=g+(y^_&(E^y))+w[11]+2304563134&4294967295,g=_+(b<<22&4294967295|b>>>10),b=y+(E^g&(_^E))+w[12]+1804603682&4294967295,y=g+(b<<7&4294967295|b>>>25),b=E+(_^y&(g^_))+w[13]+4254626195&4294967295,E=y+(b<<12&4294967295|b>>>20),b=_+(g^E&(y^g))+w[14]+2792965006&4294967295,_=E+(b<<17&4294967295|b>>>15),b=g+(y^_&(E^y))+w[15]+1236535329&4294967295,g=_+(b<<22&4294967295|b>>>10),b=y+(_^E&(g^_))+w[1]+4129170786&4294967295,y=g+(b<<5&4294967295|b>>>27),b=E+(g^_&(y^g))+w[6]+3225465664&4294967295,E=y+(b<<9&4294967295|b>>>23),b=_+(y^g&(E^y))+w[11]+643717713&4294967295,_=E+(b<<14&4294967295|b>>>18),b=g+(E^y&(_^E))+w[0]+3921069994&4294967295,g=_+(b<<20&4294967295|b>>>12),b=y+(_^E&(g^_))+w[5]+3593408605&4294967295,y=g+(b<<5&4294967295|b>>>27),b=E+(g^_&(y^g))+w[10]+38016083&4294967295,E=y+(b<<9&4294967295|b>>>23),b=_+(y^g&(E^y))+w[15]+3634488961&4294967295,_=E+(b<<14&4294967295|b>>>18),b=g+(E^y&(_^E))+w[4]+3889429448&4294967295,g=_+(b<<20&4294967295|b>>>12),b=y+(_^E&(g^_))+w[9]+568446438&4294967295,y=g+(b<<5&4294967295|b>>>27),b=E+(g^_&(y^g))+w[14]+3275163606&4294967295,E=y+(b<<9&4294967295|b>>>23),b=_+(y^g&(E^y))+w[3]+4107603335&4294967295,_=E+(b<<14&4294967295|b>>>18),b=g+(E^y&(_^E))+w[8]+1163531501&4294967295,g=_+(b<<20&4294967295|b>>>12),b=y+(_^E&(g^_))+w[13]+2850285829&4294967295,y=g+(b<<5&4294967295|b>>>27),b=E+(g^_&(y^g))+w[2]+4243563512&4294967295,E=y+(b<<9&4294967295|b>>>23),b=_+(y^g&(E^y))+w[7]+1735328473&4294967295,_=E+(b<<14&4294967295|b>>>18),b=g+(E^y&(_^E))+w[12]+2368359562&4294967295,g=_+(b<<20&4294967295|b>>>12),b=y+(g^_^E)+w[5]+4294588738&4294967295,y=g+(b<<4&4294967295|b>>>28),b=E+(y^g^_)+w[8]+2272392833&4294967295,E=y+(b<<11&4294967295|b>>>21),b=_+(E^y^g)+w[11]+1839030562&4294967295,_=E+(b<<16&4294967295|b>>>16),b=g+(_^E^y)+w[14]+4259657740&4294967295,g=_+(b<<23&4294967295|b>>>9),b=y+(g^_^E)+w[1]+2763975236&4294967295,y=g+(b<<4&4294967295|b>>>28),b=E+(y^g^_)+w[4]+1272893353&4294967295,E=y+(b<<11&4294967295|b>>>21),b=_+(E^y^g)+w[7]+4139469664&4294967295,_=E+(b<<16&4294967295|b>>>16),b=g+(_^E^y)+w[10]+3200236656&4294967295,g=_+(b<<23&4294967295|b>>>9),b=y+(g^_^E)+w[13]+681279174&4294967295,y=g+(b<<4&4294967295|b>>>28),b=E+(y^g^_)+w[0]+3936430074&4294967295,E=y+(b<<11&4294967295|b>>>21),b=_+(E^y^g)+w[3]+3572445317&4294967295,_=E+(b<<16&4294967295|b>>>16),b=g+(_^E^y)+w[6]+76029189&4294967295,g=_+(b<<23&4294967295|b>>>9),b=y+(g^_^E)+w[9]+3654602809&4294967295,y=g+(b<<4&4294967295|b>>>28),b=E+(y^g^_)+w[12]+3873151461&4294967295,E=y+(b<<11&4294967295|b>>>21),b=_+(E^y^g)+w[15]+530742520&4294967295,_=E+(b<<16&4294967295|b>>>16),b=g+(_^E^y)+w[2]+3299628645&4294967295,g=_+(b<<23&4294967295|b>>>9),b=y+(_^(g|~E))+w[0]+4096336452&4294967295,y=g+(b<<6&4294967295|b>>>26),b=E+(g^(y|~_))+w[7]+1126891415&4294967295,E=y+(b<<10&4294967295|b>>>22),b=_+(y^(E|~g))+w[14]+2878612391&4294967295,_=E+(b<<15&4294967295|b>>>17),b=g+(E^(_|~y))+w[5]+4237533241&4294967295,g=_+(b<<21&4294967295|b>>>11),b=y+(_^(g|~E))+w[12]+1700485571&4294967295,y=g+(b<<6&4294967295|b>>>26),b=E+(g^(y|~_))+w[3]+2399980690&4294967295,E=y+(b<<10&4294967295|b>>>22),b=_+(y^(E|~g))+w[10]+4293915773&4294967295,_=E+(b<<15&4294967295|b>>>17),b=g+(E^(_|~y))+w[1]+2240044497&4294967295,g=_+(b<<21&4294967295|b>>>11),b=y+(_^(g|~E))+w[8]+1873313359&4294967295,y=g+(b<<6&4294967295|b>>>26),b=E+(g^(y|~_))+w[15]+4264355552&4294967295,E=y+(b<<10&4294967295|b>>>22),b=_+(y^(E|~g))+w[6]+2734768916&4294967295,_=E+(b<<15&4294967295|b>>>17),b=g+(E^(_|~y))+w[13]+1309151649&4294967295,g=_+(b<<21&4294967295|b>>>11),b=y+(_^(g|~E))+w[4]+4149444226&4294967295,y=g+(b<<6&4294967295|b>>>26),b=E+(g^(y|~_))+w[11]+3174756917&4294967295,E=y+(b<<10&4294967295|b>>>22),b=_+(y^(E|~g))+w[2]+718787259&4294967295,_=E+(b<<15&4294967295|b>>>17),b=g+(E^(_|~y))+w[9]+3951481745&4294967295,N.g[0]=N.g[0]+y&4294967295,N.g[1]=N.g[1]+(_+(b<<21&4294967295|b>>>11))&4294967295,N.g[2]=N.g[2]+_&4294967295,N.g[3]=N.g[3]+E&4294967295}n.prototype.v=function(N,y){y===void 0&&(y=N.length);const g=y-this.blockSize,w=this.C;let _=this.h,E=0;for(;E<y;){if(_==0)for(;E<=g;)i(this,N,E),E+=this.blockSize;if(typeof N=="string"){for(;E<y;)if(w[_++]=N.charCodeAt(E++),_==this.blockSize){i(this,w),_=0;break}}else for(;E<y;)if(w[_++]=N[E++],_==this.blockSize){i(this,w),_=0;break}}this.h=_,this.o+=y},n.prototype.A=function(){var N=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);N[0]=128;for(var y=1;y<N.length-8;++y)N[y]=0;y=this.o*8;for(var g=N.length-8;g<N.length;++g)N[g]=y&255,y/=256;for(this.v(N),N=Array(16),y=0,g=0;g<4;++g)for(let w=0;w<32;w+=8)N[y++]=this.g[g]>>>w&255;return N};function a(N,y){var g=c;return Object.prototype.hasOwnProperty.call(g,N)?g[N]:g[N]=y(N)}function l(N,y){this.h=y;const g=[];let w=!0;for(let _=N.length-1;_>=0;_--){const E=N[_]|0;w&&E==y||(g[_]=E,w=!1)}this.g=g}var c={};function h(N){return-128<=N&&N<128?a(N,function(y){return new l([y|0],y<0?-1:0)}):new l([N|0],N<0?-1:0)}function m(N){if(isNaN(N)||!isFinite(N))return x;if(N<0)return R(m(-N));const y=[];let g=1;for(let w=0;N>=g;w++)y[w]=N/g|0,g*=4294967296;return new l(y,0)}function f(N,y){if(N.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(N.charAt(0)=="-")return R(f(N.substring(1),y));if(N.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=m(Math.pow(y,8));let w=x;for(let E=0;E<N.length;E+=8){var _=Math.min(8,N.length-E);const b=parseInt(N.substring(E,E+_),y);_<8?(_=m(Math.pow(y,_)),w=w.j(_).add(m(b))):(w=w.j(g),w=w.add(m(b)))}return w}var x=h(0),v=h(1),I=h(16777216);s=l.prototype,s.m=function(){if(P(this))return-R(this).m();let N=0,y=1;for(let g=0;g<this.g.length;g++){const w=this.i(g);N+=(w>=0?w:4294967296+w)*y,y*=4294967296}return N},s.toString=function(N){if(N=N||10,N<2||36<N)throw Error("radix out of range: "+N);if(S(this))return"0";if(P(this))return"-"+R(this).toString(N);const y=m(Math.pow(N,6));var g=this;let w="";for(;;){const _=Y(g,y).g;g=O(g,_.j(y));let E=((g.g.length>0?g.g[0]:g.h)>>>0).toString(N);if(g=_,S(g))return E+w;for(;E.length<6;)E="0"+E;w=E+w}},s.i=function(N){return N<0?0:N<this.g.length?this.g[N]:this.h};function S(N){if(N.h!=0)return!1;for(let y=0;y<N.g.length;y++)if(N.g[y]!=0)return!1;return!0}function P(N){return N.h==-1}s.l=function(N){return N=O(this,N),P(N)?-1:S(N)?0:1};function R(N){const y=N.g.length,g=[];for(let w=0;w<y;w++)g[w]=~N.g[w];return new l(g,~N.h).add(v)}s.abs=function(){return P(this)?R(this):this},s.add=function(N){const y=Math.max(this.g.length,N.g.length),g=[];let w=0;for(let _=0;_<=y;_++){let E=w+(this.i(_)&65535)+(N.i(_)&65535),b=(E>>>16)+(this.i(_)>>>16)+(N.i(_)>>>16);w=b>>>16,E&=65535,b&=65535,g[_]=b<<16|E}return new l(g,g[g.length-1]&-2147483648?-1:0)};function O(N,y){return N.add(R(y))}s.j=function(N){if(S(this)||S(N))return x;if(P(this))return P(N)?R(this).j(R(N)):R(R(this).j(N));if(P(N))return R(this.j(R(N)));if(this.l(I)<0&&N.l(I)<0)return m(this.m()*N.m());const y=this.g.length+N.g.length,g=[];for(var w=0;w<2*y;w++)g[w]=0;for(w=0;w<this.g.length;w++)for(let _=0;_<N.g.length;_++){const E=this.i(w)>>>16,b=this.i(w)&65535,W=N.i(_)>>>16,Z=N.i(_)&65535;g[2*w+2*_]+=b*Z,D(g,2*w+2*_),g[2*w+2*_+1]+=E*Z,D(g,2*w+2*_+1),g[2*w+2*_+1]+=b*W,D(g,2*w+2*_+1),g[2*w+2*_+2]+=E*W,D(g,2*w+2*_+2)}for(N=0;N<y;N++)g[N]=g[2*N+1]<<16|g[2*N];for(N=y;N<2*y;N++)g[N]=0;return new l(g,0)};function D(N,y){for(;(N[y]&65535)!=N[y];)N[y+1]+=N[y]>>>16,N[y]&=65535,y++}function B(N,y){this.g=N,this.h=y}function Y(N,y){if(S(y))throw Error("division by zero");if(S(N))return new B(x,x);if(P(N))return y=Y(R(N),y),new B(R(y.g),R(y.h));if(P(y))return y=Y(N,R(y)),new B(R(y.g),y.h);if(N.g.length>30){if(P(N)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var g=v,w=y;w.l(N)<=0;)g=le(g),w=le(w);var _=ee(g,1),E=ee(w,1);for(w=ee(w,2),g=ee(g,2);!S(w);){var b=E.add(w);b.l(N)<=0&&(_=_.add(g),E=b),w=ee(w,1),g=ee(g,1)}return y=O(N,_.j(y)),new B(_,y)}for(_=x;N.l(y)>=0;){for(g=Math.max(1,Math.floor(N.m()/y.m())),w=Math.ceil(Math.log(g)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),E=m(g),b=E.j(y);P(b)||b.l(N)>0;)g-=w,E=m(g),b=E.j(y);S(E)&&(E=v),_=_.add(E),N=O(N,b)}return new B(_,N)}s.B=function(N){return Y(this,N).h},s.and=function(N){const y=Math.max(this.g.length,N.g.length),g=[];for(let w=0;w<y;w++)g[w]=this.i(w)&N.i(w);return new l(g,this.h&N.h)},s.or=function(N){const y=Math.max(this.g.length,N.g.length),g=[];for(let w=0;w<y;w++)g[w]=this.i(w)|N.i(w);return new l(g,this.h|N.h)},s.xor=function(N){const y=Math.max(this.g.length,N.g.length),g=[];for(let w=0;w<y;w++)g[w]=this.i(w)^N.i(w);return new l(g,this.h^N.h)};function le(N){const y=N.g.length+1,g=[];for(let w=0;w<y;w++)g[w]=N.i(w)<<1|N.i(w-1)>>>31;return new l(g,N.h)}function ee(N,y){const g=y>>5;y%=32;const w=N.g.length-g,_=[];for(let E=0;E<w;E++)_[E]=y>0?N.i(E+g)>>>y|N.i(E+g+1)<<32-y:N.i(E+g);return new l(_,N.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,wd=n,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=m,l.fromString=f,ts=l}).apply(typeof eu<"u"?eu:typeof self<"u"?self:typeof window<"u"?window:{});var Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vd,On,_d,$r,ro,Nd,Ed,Id;(function(){var s,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cr=="object"&&Cr];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(o,u){if(u)e:{var d=n;o=o.split(".");for(var p=0;p<o.length-1;p++){var T=o[p];if(!(T in d))break e;d=d[T]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(u){var d=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&d.push([p,u[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function h(o,u,d){return o.call.apply(o.bind,arguments)}function m(o,u,d){return m=h,m.apply(null,arguments)}function f(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function x(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(p,T,j){for(var L=Array(arguments.length-2),X=2;X<arguments.length;X++)L[X-2]=arguments[X];return u.prototype[T].apply(p,L)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function I(o){const u=o.length;if(u>0){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function S(o,u){for(let p=1;p<arguments.length;p++){const T=arguments[p];var d=typeof T;if(d=d!="object"?d:T?Array.isArray(T)?"array":d:"null",d=="array"||d=="object"&&typeof T.length=="number"){d=o.length||0;const j=T.length||0;o.length=d+j;for(let L=0;L<j;L++)o[d+L]=T[L]}else o.push(T)}}class P{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function R(o){l.setTimeout(()=>{throw o},0)}function O(){var o=N;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class D{constructor(){this.h=this.g=null}add(u,d){const p=B.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var B=new P(()=>new Y,o=>o.reset());class Y{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let le,ee=!1,N=new D,y=()=>{const o=Promise.resolve(void 0);le=()=>{o.then(g)}};function g(){for(var o;o=O();){try{o.h.call(o.g)}catch(d){R(d)}var u=B;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}ee=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var E=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o})();function b(o){return/^[\s\xa0]*$/.test(o)}function W(o,u){_.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}x(W,_),W.prototype.init=function(o,u){const d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&W.Z.h.call(this)},W.prototype.h=function(){W.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Z="closure_listenable_"+(Math.random()*1e6|0),V=0;function te(o,u,d,p,T){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=T,this.key=++V,this.da=this.fa=!1}function Ie(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function oe(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function M(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function me(o){const u={};for(const d in o)u[d]=o[d];return u}const ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ke(o,u){let d,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(d in p)o[d]=p[d];for(let j=0;j<ce.length;j++)d=ce[j],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function nt(o){this.src=o,this.g={},this.h=0}nt.prototype.add=function(o,u,d,p,T){const j=o.toString();o=this.g[j],o||(o=this.g[j]=[],this.h++);const L=gn(o,u,p,T);return L>-1?(u=o[L],d||(u.fa=!1)):(u=new te(u,this.src,j,!!p,T),u.fa=d,o.push(u)),u};function pn(o,u){const d=u.type;if(d in o.g){var p=o.g[d],T=Array.prototype.indexOf.call(p,u,void 0),j;(j=T>=0)&&Array.prototype.splice.call(p,T,1),j&&(Ie(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function gn(o,u,d,p){for(let T=0;T<o.length;++T){const j=o[T];if(!j.da&&j.listener==u&&j.capture==!!d&&j.ha==p)return T}return-1}var xn="closure_lm_"+(Math.random()*1e6|0),yn={};function q(o,u,d,p,T){if(Array.isArray(u)){for(let j=0;j<u.length;j++)q(o,u[j],d,p,T);return null}return d=rt(d),o&&o[Z]?o.J(u,d,c(p)?!!p.capture:!1,T):G(o,u,d,!1,p,T)}function G(o,u,d,p,T,j){if(!u)throw Error("Invalid event type");const L=c(T)?!!T.capture:!!T;let X=$e(o);if(X||(o[xn]=X=new nt(o)),d=X.add(u,d,p,L,j),d.proxy)return d;if(p=ue(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)E||(T=L),T===void 0&&(T=!1),o.addEventListener(u.toString(),p,T);else if(o.attachEvent)o.attachEvent(pe(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ue(){function o(d){return u.call(o.src,o.listener,d)}const u=Pe;return o}function de(o,u,d,p,T){if(Array.isArray(u))for(var j=0;j<u.length;j++)de(o,u[j],d,p,T);else p=c(p)?!!p.capture:!!p,d=rt(d),o&&o[Z]?(o=o.i,j=String(u).toString(),j in o.g&&(u=o.g[j],d=gn(u,d,p,T),d>-1&&(Ie(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[j],o.h--)))):o&&(o=$e(o))&&(u=o.g[u.toString()],o=-1,u&&(o=gn(u,d,p,T)),(d=o>-1?u[o]:null)&&qe(d))}function qe(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Z])pn(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(pe(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=$e(u))?(pn(d,o),d.h==0&&(d.src=null,u[xn]=null)):Ie(o)}}}function pe(o){return o in yn?yn[o]:yn[o]="on"+o}function Pe(o,u){if(o.da)o=!0;else{u=new W(u,this);const d=o.listener,p=o.ha||o.src;o.fa&&qe(o),o=d.call(p,u)}return o}function $e(o){return o=o[xn],o instanceof nt?o:null}var ms="__closure_events_fn_"+(Math.random()*1e9>>>0);function rt(o){return typeof o=="function"?o:(o[ms]||(o[ms]=function(u){return o.handleEvent(u)}),o[ms])}function We(){w.call(this),this.i=new nt(this),this.M=this,this.G=null}x(We,w),We.prototype[Z]=!0,We.prototype.removeEventListener=function(o,u,d,p){de(this,o,u,d,p)};function Ye(o,u){var d,p=o.G;if(p)for(d=[];p;p=p.G)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new _(u,o);else if(u instanceof _)u.target=u.target||o;else{var T=u;u=new _(p,o),ke(u,T)}T=!0;let j,L;if(d)for(L=d.length-1;L>=0;L--)j=u.g=d[L],T=xr(j,p,!0,u)&&T;if(j=u.g=o,T=xr(j,p,!0,u)&&T,T=xr(j,p,!1,u)&&T,d)for(L=0;L<d.length;L++)j=u.g=d[L],T=xr(j,p,!1,u)&&T}We.prototype.N=function(){if(We.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let p=0;p<d.length;p++)Ie(d[p]);delete o.g[u],o.h--}}this.G=null},We.prototype.J=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},We.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function xr(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let T=!0;for(let j=0;j<u.length;++j){const L=u[j];if(L&&!L.da&&L.capture==d){const X=L.listener,Ce=L.ha||L.src;L.fa&&pn(o.i,L),T=X.call(Ce,p)!==!1&&T}}return T&&!p.defaultPrevented}function Tf(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:l.setTimeout(o,u||0)}function vl(o){o.g=Tf(()=>{o.g=null,o.i&&(o.i=!1,vl(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class jf extends w{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:vl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bn(o){w.call(this),this.h=o,this.g={}}x(bn,w);var _l=[];function Nl(o){oe(o.g,function(u,d){this.g.hasOwnProperty(d)&&qe(u)},o),o.g={}}bn.prototype.N=function(){bn.Z.N.call(this),Nl(this)},bn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oa=l.JSON.stringify,Af=l.JSON.parse,Sf=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function El(){}function Il(){}var wn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function la(){_.call(this,"d")}x(la,_);function ca(){_.call(this,"c")}x(ca,_);var fs={},Tl=null;function yr(){return Tl=Tl||new We}fs.Ia="serverreachability";function jl(o){_.call(this,fs.Ia,o)}x(jl,_);function vn(o){const u=yr();Ye(u,new jl(u))}fs.STAT_EVENT="statevent";function Al(o,u){_.call(this,fs.STAT_EVENT,o),this.stat=u}x(Al,_);function Je(o){const u=yr();Ye(u,new Al(u,o))}fs.Ja="timingevent";function Sl(o,u){_.call(this,fs.Ja,o),this.size=u}x(Sl,_);function _n(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Nn(){this.g=!0}Nn.prototype.ua=function(){this.g=!1};function kf(o,u,d,p,T,j){o.info(function(){if(o.g)if(j){var L="",X=j.split("&");for(let fe=0;fe<X.length;fe++){var Ce=X[fe].split("=");if(Ce.length>1){const De=Ce[0];Ce=Ce[1];const yt=De.split("_");L=yt.length>=2&&yt[1]=="type"?L+(De+"="+Ce+"&"):L+(De+"=redacted&")}}}else L=null;else L=j;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+u+`
`+d+`
`+L})}function Cf(o,u,d,p,T,j,L){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+u+`
`+d+`
`+j+" "+L})}function Ls(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Pf(o,d)+(p?" "+p:"")})}function Rf(o,u){o.info(function(){return"TIMEOUT: "+u})}Nn.prototype.info=function(){};function Pf(o,u){if(!o.g)return u;if(!u)return null;try{const j=JSON.parse(u);if(j){for(o=0;o<j.length;o++)if(Array.isArray(j[o])){var d=j[o];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var T=p[0];if(T!="noop"&&T!="stop"&&T!="close")for(let L=1;L<p.length;L++)p[L]=""}}}}return oa(j)}catch{return u}}var br={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},kl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Cl;function ua(){}x(ua,El),ua.prototype.g=function(){return new XMLHttpRequest},Cl=new ua;function En(o){return encodeURIComponent(String(o))}function Df(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function Ot(o,u,d,p){this.j=o,this.i=u,this.l=d,this.S=p||1,this.V=new bn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Rl}function Rl(){this.i=null,this.g="",this.h=!1}var Pl={},ha={};function da(o,u,d){o.M=1,o.A=vr(xt(u)),o.u=d,o.R=!0,Dl(o,null)}function Dl(o,u){o.F=Date.now(),wr(o),o.B=xt(o.A);var d=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Gl(d.i,"t",p),o.C=0,d=o.j.L,o.h=new Rl,o.g=hc(o.j,d?u:null,!o.u),o.P>0&&(o.O=new jf(m(o.Y,o,o.g),o.P)),u=o.V,d=o.g,p=o.ba;var T="readystatechange";Array.isArray(T)||(T&&(_l[0]=T.toString()),T=_l);for(let j=0;j<T.length;j++){const L=q(d,T[j],p||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=o.J?me(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),vn(),kf(o.i,o.v,o.B,o.l,o.S,o.u)}Ot.prototype.ba=function(o){o=o.target;const u=this.O;u&&Bt(o)==3?u.j():this.Y(o)},Ot.prototype.Y=function(o){try{if(o==this.g)e:{const X=Bt(this.g),Ce=this.g.ya(),fe=this.g.ca();if(!(X<3)&&(X!=3||this.g&&(this.h.h||this.g.la()||ec(this.g)))){this.K||X!=4||Ce==7||(Ce==8||fe<=0?vn(3):vn(2)),ma(this);var u=this.g.ca();this.X=u;var d=Vf(this);if(this.o=u==200,Cf(this.i,this.v,this.B,this.l,this.S,X,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,T=this.g;if((p=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(p)){var j=p;break t}}j=null}if(o=j)Ls(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,fa(this,o);else{this.o=!1,this.m=3,Je(12),ps(this),In(this);break e}}if(this.R){o=!0;let De;for(;!this.K&&this.C<d.length;)if(De=Mf(this,d),De==ha){X==4&&(this.m=4,Je(14),o=!1),Ls(this.i,this.l,null,"[Incomplete Response]");break}else if(De==Pl){this.m=4,Je(15),Ls(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else Ls(this.i,this.l,De,null),fa(this,De);if(Vl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),X!=4||d.length!=0||this.h.h||(this.m=1,Je(16),o=!1),this.o=this.o&&o,!o)Ls(this.i,this.l,d,"[Invalid Chunked Response]"),ps(this),In(this);else if(d.length>0&&!this.W){this.W=!0;var L=this.j;L.g==this&&L.aa&&!L.P&&(L.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),_a(L),L.P=!0,Je(11))}}else Ls(this.i,this.l,d,null),fa(this,d);X==4&&ps(this),this.o&&!this.K&&(X==4?oc(this.j,this):(this.o=!1,wr(this)))}else Yf(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,Je(12)):(this.m=0,Je(13)),ps(this),In(this)}}}catch{}finally{}};function Vf(o){if(!Vl(o))return o.g.la();const u=ec(o.g);if(u==="")return"";let d="";const p=u.length,T=Bt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return ps(o),In(o),"";o.h.i=new l.TextDecoder}for(let j=0;j<p;j++)o.h.h=!0,d+=o.h.i.decode(u[j],{stream:!(T&&j==p-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function Vl(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Mf(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?ha:(d=Number(u.substring(d,p)),isNaN(d)?Pl:(p+=1,p+d>u.length?ha:(u=u.slice(p,p+d),o.C=p+d,u)))}Ot.prototype.cancel=function(){this.K=!0,ps(this)};function wr(o){o.T=Date.now()+o.H,Ml(o,o.H)}function Ml(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=_n(m(o.aa,o),u)}function ma(o){o.D&&(l.clearTimeout(o.D),o.D=null)}Ot.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Rf(this.i,this.B),this.M!=2&&(vn(),Je(17)),ps(this),this.m=2,In(this)):Ml(this,this.T-o)};function In(o){o.j.I==0||o.K||oc(o.j,o)}function ps(o){ma(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Nl(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function fa(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||pa(d.h,o))){if(!o.L&&pa(d.h,o)&&d.I==3){try{var p=d.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)Tr(d),Er(d);else break e;va(d),Je(18)}}else d.xa=T[1],0<d.xa-d.K&&T[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=_n(m(d.Va,d),6e3));Fl(d.h)<=1&&d.ta&&(d.ta=void 0)}else xs(d,11)}else if((o.L||d.g==o)&&Tr(d),!b(u))for(T=d.Ba.g.parse(u),u=0;u<T.length;u++){let fe=T[u];const De=fe[0];if(!(De<=d.K))if(d.K=De,fe=fe[1],d.I==2)if(fe[0]=="c"){d.M=fe[1],d.ba=fe[2];const yt=fe[3];yt!=null&&(d.ka=yt,d.j.info("VER="+d.ka));const ys=fe[4];ys!=null&&(d.za=ys,d.j.info("SVER="+d.za));const qt=fe[5];qt!=null&&typeof qt=="number"&&qt>0&&(p=1.5*qt,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const $t=o.g;if($t){const Ar=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ar){var j=p.h;j.g||Ar.indexOf("spdy")==-1&&Ar.indexOf("quic")==-1&&Ar.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(ga(j,j.h),j.h=null))}if(p.G){const Na=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;Na&&(p.wa=Na,xe(p.J,p.G,Na))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var L=o;if(p.na=uc(p,p.L?p.ba:null,p.W),L.L){Ul(p.h,L);var X=L,Ce=p.O;Ce&&(X.H=Ce),X.D&&(ma(X),wr(X)),p.g=L}else ic(p);d.i.length>0&&Ir(d)}else fe[0]!="stop"&&fe[0]!="close"||xs(d,7);else d.I==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?xs(d,7):wa(d):fe[0]!="noop"&&d.l&&d.l.qa(fe),d.A=0)}}vn(4)}catch{}}var Lf=class{constructor(o,u){this.g=o,this.map=u}};function Ll(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ol(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Fl(o){return o.h?1:o.g?o.g.size:0}function pa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ga(o,u){o.g?o.g.add(u):o.h=u}function Ul(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Ll.prototype.cancel=function(){if(this.i=Bl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Bl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return I(o.i)}var ql=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Of(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const p=o[d].indexOf("=");let T,j=null;p>=0?(T=o[d].substring(0,p),j=o[d].substring(p+1)):T=o[d],u(T,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Ft(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Ft?(this.l=o.l,Tn(this,o.j),this.o=o.o,this.g=o.g,jn(this,o.u),this.h=o.h,xa(this,Kl(o.i)),this.m=o.m):o&&(u=String(o).match(ql))?(this.l=!1,Tn(this,u[1]||"",!0),this.o=An(u[2]||""),this.g=An(u[3]||"",!0),jn(this,u[4]),this.h=An(u[5]||"",!0),xa(this,u[6]||"",!0),this.m=An(u[7]||"")):(this.l=!1,this.i=new kn(null,this.l))}Ft.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(Sn(u,$l,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Sn(u,$l,!0),"@"),o.push(En(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Sn(d,d.charAt(0)=="/"?Bf:Uf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Sn(d,$f)),o.join("")},Ft.prototype.resolve=function(o){const u=xt(this);let d=!!o.j;d?Tn(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var p=o.h;if(d)jn(u,o.u);else if(d=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var T=u.h.lastIndexOf("/");T!=-1&&(p=u.h.slice(0,T+1)+p)}if(T=p,T==".."||T==".")p="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){p=T.lastIndexOf("/",0)==0,T=T.split("/");const j=[];for(let L=0;L<T.length;){const X=T[L++];X=="."?p&&L==T.length&&j.push(""):X==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),p&&L==T.length&&j.push("")):(j.push(X),p=!0)}p=j.join("/")}else p=T}return d?u.h=p:d=o.i.toString()!=="",d?xa(u,Kl(o.i)):d=!!o.m,d&&(u.m=o.m),u};function xt(o){return new Ft(o)}function Tn(o,u,d){o.j=d?An(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function jn(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function xa(o,u,d){u instanceof kn?(o.i=u,Wf(o.i,o.l)):(d||(u=Sn(u,qf)),o.i=new kn(u,o.l))}function xe(o,u,d){o.i.set(u,d)}function vr(o){return xe(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function An(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Sn(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Ff),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ff(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var $l=/[#\/\?@]/g,Uf=/[#\?:]/g,Bf=/[#\?]/g,qf=/[#\?@]/g,$f=/#/g;function kn(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function gs(o){o.g||(o.g=new Map,o.h=0,o.i&&Of(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}s=kn.prototype,s.add=function(o,u){gs(this),this.i=null,o=Os(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Wl(o,u){gs(o),u=Os(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Hl(o,u){return gs(o),u=Os(o,u),o.g.has(u)}s.forEach=function(o,u){gs(this),this.g.forEach(function(d,p){d.forEach(function(T){o.call(u,T,p,this)},this)},this)};function zl(o,u){gs(o);let d=[];if(typeof u=="string")Hl(o,u)&&(d=d.concat(o.g.get(Os(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}s.set=function(o,u){return gs(this),this.i=null,o=Os(this,o),Hl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},s.get=function(o,u){return o?(o=zl(this,o),o.length>0?String(o[0]):u):u};function Gl(o,u,d){Wl(o,u),d.length>0&&(o.i=null,o.g.set(Os(o,u),I(d)),o.h+=d.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var d=u[p];const T=En(d);d=zl(this,d);for(let j=0;j<d.length;j++){let L=T;d[j]!==""&&(L+="="+En(d[j])),o.push(L)}}return this.i=o.join("&")};function Kl(o){const u=new kn;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Os(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Wf(o,u){u&&!o.j&&(gs(o),o.i=null,o.g.forEach(function(d,p){const T=p.toLowerCase();p!=T&&(Wl(this,p),Gl(this,T,d))},o)),o.j=u}function Hf(o,u){const d=new Nn;if(l.Image){const p=new Image;p.onload=f(Ut,d,"TestLoadImage: loaded",!0,u,p),p.onerror=f(Ut,d,"TestLoadImage: error",!1,u,p),p.onabort=f(Ut,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=f(Ut,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function zf(o,u){const d=new Nn,p=new AbortController,T=setTimeout(()=>{p.abort(),Ut(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(j=>{clearTimeout(T),j.ok?Ut(d,"TestPingServer: ok",!0,u):Ut(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(T),Ut(d,"TestPingServer: error",!1,u)})}function Ut(o,u,d,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(d)}catch{}}function Gf(){this.g=new Sf}function ya(o){this.i=o.Sb||null,this.h=o.ab||!1}x(ya,El),ya.prototype.g=function(){return new _r(this.i,this.h)};function _r(o,u){We.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}x(_r,We),s=_r.prototype,s.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Rn(this)},s.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||l).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},s.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ql(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ql(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}s.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Cn(this):Rn(this),this.readyState==3&&Ql(this)}},s.Oa=function(o){this.g&&(this.response=this.responseText=o,Cn(this))},s.Na=function(o){this.g&&(this.response=o,Cn(this))},s.ga=function(){this.g&&Cn(this)};function Cn(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Rn(o)}s.setRequestHeader=function(o,u){this.A.append(o,u)},s.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Rn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(_r.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Yl(o){let u="";return oe(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function ba(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Yl(d),typeof o=="string"?d!=null&&En(d):xe(o,u,d))}function ve(o){We.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}x(ve,We);var Kf=/^https?$/i,Qf=["POST","PUT"];s=ve.prototype,s.Fa=function(o){this.H=o},s.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Cl.g(),this.g.onreadystatechange=v(m(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(j){Jl(this,j);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)d.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const j of p.keys())d.set(j,p.get(j));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(j=>j.toLowerCase()=="content-type"),T=l.FormData&&o instanceof l.FormData,!(Array.prototype.indexOf.call(Qf,u,void 0)>=0)||p||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,L]of d)this.g.setRequestHeader(j,L);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(j){Jl(this,j)}};function Jl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Xl(o),Nr(o)}function Xl(o){o.A||(o.A=!0,Ye(o,"complete"),Ye(o,"error"))}s.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ye(this,"complete"),Ye(this,"abort"),Nr(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Nr(this,!0)),ve.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Zl(this):this.Xa())},s.Xa=function(){Zl(this)};function Zl(o){if(o.h&&typeof a<"u"){if(o.v&&Bt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ye(o,"readystatechange"),Bt(o)==4){o.h=!1;try{const j=o.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=j===0){let L=String(o.D).match(ql)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),p=!Kf.test(L?L.toLowerCase():"")}d=p}if(d)Ye(o,"complete"),Ye(o,"success");else{o.o=6;try{var T=Bt(o)>2?o.g.statusText:""}catch{T=""}o.l=T+" ["+o.ca()+"]",Xl(o)}}finally{Nr(o)}}}}function Nr(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||Ye(o,"ready");try{d.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function Bt(o){return o.g?o.g.readyState:0}s.ca=function(){try{return Bt(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Af(u)}};function ec(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Yf(o){const u={};o=(o.g&&Bt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(b(o[p]))continue;var d=Df(o[p]);const T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const j=u[T]||[];u[T]=j,j.push(d)}M(u,function(p){return p.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pn(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function tc(o){this.za=0,this.i=[],this.j=new Nn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Pn("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Pn("baseRetryDelayMs",5e3,o),this.Za=Pn("retryDelaySeedMs",1e4,o),this.Ta=Pn("forwardChannelMaxRetries",2,o),this.va=Pn("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Ll(o&&o.concurrentRequestLimit),this.Ba=new Gf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=tc.prototype,s.ka=8,s.I=1,s.connect=function(o,u,d,p){Je(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=uc(this,null,this.W),Ir(this)};function wa(o){if(sc(o),o.I==3){var u=o.V++,d=xt(o.J);if(xe(d,"SID",o.M),xe(d,"RID",u),xe(d,"TYPE","terminate"),Dn(o,d),u=new Ot(o,o.j,u),u.M=2,u.A=vr(xt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.A,d=!0),d||(u.g=hc(u.j,null),u.g.ea(u.A)),u.F=Date.now(),wr(u)}cc(o)}function Er(o){o.g&&(_a(o),o.g.cancel(),o.g=null)}function sc(o){Er(o),o.v&&(l.clearTimeout(o.v),o.v=null),Tr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&l.clearTimeout(o.m),o.m=null)}function Ir(o){if(!Ol(o.h)&&!o.m){o.m=!0;var u=o.Ea;le||y(),ee||(le(),ee=!0),N.add(u,o),o.D=0}}function Jf(o,u){return Fl(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=_n(m(o.Ea,o,u),lc(o,o.D)),o.D++,!0)}s.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const T=new Ot(this,this.j,o);let j=this.o;if(this.U&&(j?(j=me(j),ke(j,this.U)):j=this.U),this.u!==null||this.R||(T.J=j,j=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=rc(this,T,u),d=xt(this.J),xe(d,"RID",o),xe(d,"CVER",22),this.G&&xe(d,"X-HTTP-Session-Id",this.G),Dn(this,d),j&&(this.R?u="headers="+En(Yl(j))+"&"+u:this.u&&ba(d,this.u,j)),ga(this.h,T),this.Ra&&xe(d,"TYPE","init"),this.S?(xe(d,"$req",u),xe(d,"SID","null"),T.U=!0,da(T,d,null)):da(T,d,u),this.I=2}}else this.I==3&&(o?nc(this,o):this.i.length==0||Ol(this.h)||nc(this))};function nc(o,u){var d;u?d=u.l:d=o.V++;const p=xt(o.J);xe(p,"SID",o.M),xe(p,"RID",d),xe(p,"AID",o.K),Dn(o,p),o.u&&o.o&&ba(p,o.u,o.o),d=new Ot(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=rc(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),ga(o.h,d),da(d,p,u)}function Dn(o,u){o.H&&oe(o.H,function(d,p){xe(u,p,d)}),o.l&&oe({},function(d,p){xe(u,p,d)})}function rc(o,u,d){d=Math.min(o.i.length,d);const p=o.l?m(o.l.Ka,o.l,o):null;e:{var T=o.i;let X=-1;for(;;){const Ce=["count="+d];X==-1?d>0?(X=T[0].g,Ce.push("ofs="+X)):X=0:Ce.push("ofs="+X);let fe=!0;for(let De=0;De<d;De++){var j=T[De].g;const yt=T[De].map;if(j-=X,j<0)X=Math.max(0,T[De].g-100),fe=!1;else try{j="req"+j+"_"||"";try{var L=yt instanceof Map?yt:Object.entries(yt);for(const[ys,qt]of L){let $t=qt;c(qt)&&($t=oa(qt)),Ce.push(j+ys+"="+encodeURIComponent($t))}}catch(ys){throw Ce.push(j+"type="+encodeURIComponent("_badmap")),ys}}catch{p&&p(yt)}}if(fe){L=Ce.join("&");break e}}L=void 0}return o=o.i.splice(0,d),u.G=o,L}function ic(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;le||y(),ee||(le(),ee=!0),N.add(u,o),o.A=0}}function va(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=_n(m(o.Da,o),lc(o,o.A)),o.A++,!0)}s.Da=function(){if(this.v=null,ac(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=_n(m(this.Wa,this),o)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Je(10),Er(this),ac(this))};function _a(o){o.B!=null&&(l.clearTimeout(o.B),o.B=null)}function ac(o){o.g=new Ot(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=xt(o.na);xe(u,"RID","rpc"),xe(u,"SID",o.M),xe(u,"AID",o.K),xe(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&xe(u,"TO",o.ia),xe(u,"TYPE","xmlhttp"),Dn(o,u),o.u&&o.o&&ba(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=vr(xt(u)),d.u=null,d.R=!0,Dl(d,o)}s.Va=function(){this.C!=null&&(this.C=null,Er(this),va(this),Je(19))};function Tr(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function oc(o,u){var d=null;if(o.g==u){Tr(o),_a(o),o.g=null;var p=2}else if(pa(o.h,u))d=u.G,Ul(o.h,u),p=1;else return;if(o.I!=0){if(u.o)if(p==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var T=o.D;p=yr(),Ye(p,new Sl(p,d)),Ir(o)}else ic(o);else if(T=u.m,T==3||T==0&&u.X>0||!(p==1&&Jf(o,u)||p==2&&va(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),T){case 1:xs(o,5);break;case 4:xs(o,10);break;case 3:xs(o,6);break;default:xs(o,2)}}}function lc(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function xs(o,u){if(o.j.info("Error code "+u),u==2){var d=m(o.bb,o),p=o.Ua;const T=!p;p=new Ft(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Tn(p,"https"),vr(p),T?Hf(p.toString(),d):zf(p.toString(),d)}else Je(2);o.I=0,o.l&&o.l.pa(u),cc(o),sc(o)}s.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function cc(o){if(o.I=0,o.ja=[],o.l){const u=Bl(o.h);(u.length!=0||o.i.length!=0)&&(S(o.ja,u),S(o.ja,o.i),o.h.i.length=0,I(o.i),o.i.length=0),o.l.oa()}}function uc(o,u,d){var p=d instanceof Ft?xt(d):new Ft(d);if(p.g!="")u&&(p.g=u+"."+p.g),jn(p,p.u);else{var T=l.location;p=T.protocol,u=u?u+"."+T.hostname:T.hostname,T=+T.port;const j=new Ft(null);p&&Tn(j,p),u&&(j.g=u),T&&jn(j,T),d&&(j.h=d),p=j}return d=o.G,u=o.wa,d&&u&&xe(p,d,u),xe(p,"VER",o.ka),Dn(o,p),p}function hc(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new ve(new ya({ab:d})):new ve(o.ma),u.Fa(o.L),u}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function dc(){}s=dc.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function jr(){}jr.prototype.g=function(o,u){return new et(o,u)};function et(o,u){We.call(this),this.g=new tc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!b(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!b(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Fs(this)}x(et,We),et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){wa(this.g)},et.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=oa(o),o=d);u.i.push(new Lf(u.Ya++,o)),u.I==3&&Ir(u)},et.prototype.N=function(){this.g.l=null,delete this.j,wa(this.g),delete this.g,et.Z.N.call(this)};function mc(o){la.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}x(mc,la);function fc(){ca.call(this),this.status=1}x(fc,ca);function Fs(o){this.g=o}x(Fs,dc),Fs.prototype.ra=function(){Ye(this.g,"a")},Fs.prototype.qa=function(o){Ye(this.g,new mc(o))},Fs.prototype.pa=function(o){Ye(this.g,new fc)},Fs.prototype.oa=function(){Ye(this.g,"b")},jr.prototype.createWebChannel=jr.prototype.g,et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,Id=function(){return new jr},Ed=function(){return yr()},Nd=fs,ro={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},br.NO_ERROR=0,br.TIMEOUT=8,br.HTTP_ERROR=6,$r=br,kl.COMPLETE="complete",_d=kl,Il.EventType=wn,wn.OPEN="a",wn.CLOSE="b",wn.ERROR="c",wn.MESSAGE="d",We.prototype.listen=We.prototype.J,On=Il,ve.prototype.listenOnce=ve.prototype.K,ve.prototype.getLastError=ve.prototype.Ha,ve.prototype.getLastErrorCode=ve.prototype.ya,ve.prototype.getStatus=ve.prototype.ca,ve.prototype.getResponseJson=ve.prototype.La,ve.prototype.getResponseText=ve.prototype.la,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Fa,vd=ve}).apply(typeof Cr<"u"?Cr:typeof self<"u"?self:typeof window<"u"?window:{});const tu="@firebase/firestore",su="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Pi("@firebase/firestore");function Us(){return Is.logLevel}function U(s,...e){if(Is.logLevel<=se.DEBUG){const t=e.map(Vo);Is.debug(`Firestore (${un}): ${s}`,...t)}}function Vt(s,...e){if(Is.logLevel<=se.ERROR){const t=e.map(Vo);Is.error(`Firestore (${un}): ${s}`,...t)}}function Zs(s,...e){if(Is.logLevel<=se.WARN){const t=e.map(Vo);Is.warn(`Firestore (${un}): ${s}`,...t)}}function Vo(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Td(s,n,t)}function Td(s,e,t){let n=`FIRESTORE (${un}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Vt(n),new Error(n)}function he(s,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,s||Td(e,i,n)}function J(s,e){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends gt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Pb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ze.UNAUTHENTICATED)))}shutdown(){}}class Db{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Vb{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){he(this.o===void 0,42304);let n=this.i;const i=h=>this.i!==n?(n=this.i,t(h)):Promise.resolve();let a=new Ct;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ct,e.enqueueRetryable((()=>i(this.currentUser)))};const l=()=>{const h=a;e.enqueueRetryable((async()=>{await h.promise,await i(this.currentUser)}))},c=h=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ct)}}),0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(he(typeof n.accessToken=="string",31837,{l:n}),new jd(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string",2055,{h:e}),new ze(e)}}class Mb{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Lb{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Mb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ze.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class nu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ob{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ut(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){he(this.o===void 0,3512);const n=a=>{a.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,U("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>n(a)))};const i=a=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>i(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new nu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(he(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new nu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=Fb(40);for(let a=0;a<i.length;++a)n.length<20&&i[a]<t&&(n+=e.charAt(i[a]%62))}return n}}function ne(s,e){return s<e?-1:s>e?1:0}function io(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const i=s.charAt(n),a=e.charAt(n);if(i!==a)return Ra(i)===Ra(a)?ne(i,a):Ra(i)?1:-1}return ne(s.length,e.length)}const Ub=55296,Bb=57343;function Ra(s){const e=s.charCodeAt(0);return e>=Ub&&e<=Bb}function en(s,e,t){return s.length===e.length&&s.every(((n,i)=>t(n,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="__name__";class bt{constructor(e,t,n){t===void 0?t=0:t>e.length&&z(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&z(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return bt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof bt?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const a=bt.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return ne(e.length,t.length)}static compareSegments(e,t){const n=bt.isNumericId(e),i=bt.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?bt.extractNumericId(e).compare(bt.extractNumericId(t)):io(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ts.fromString(e.substring(4,e.length-2))}}class ge extends bt{construct(e,t,n){return new ge(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new F(k.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((i=>i.length>0)))}return new ge(t)}static emptyPath(){return new ge([])}}const qb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends bt{construct(e,t,n){return new Fe(e,t,n)}static isValidIdentifier(e){return qb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ru}static keyField(){return new Fe([ru])}static fromServerFormat(e){const t=[];let n="",i=0;const a=()=>{if(n.length===0)throw new F(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let l=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new F(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new F(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=h,i+=2}else c==="`"?(l=!l,i++):c!=="."||l?(n+=c,i++):(a(),i++)}if(a(),l)throw new F(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(t)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ge.fromString(e))}static fromName(e){return new $(ge.fromString(e).popFirst(5))}static empty(){return new $(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(s,e,t){if(!t)throw new F(k.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function $b(s,e,t,n){if(e===!0&&n===!0)throw new F(k.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function iu(s){if(!$.isDocumentKey(s))throw new F(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function au(s){if($.isDocumentKey(s))throw new F(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function Sd(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function Fi(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":z(12329,{type:typeof s})}function Ts(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new F(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fi(s);throw new F(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
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
 */function Ae(s,e){const t={typeString:s};return e&&(t.value=e),t}function dr(s,e){if(!Sd(s))throw new F(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const i=e[n].typeString,a="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const l=s[n];if(i&&typeof l!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(a!==void 0&&l!==a.value){t=`Expected '${n}' field to equal '${a.value}'`;break}}if(t)throw new F(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=-62135596800,lu=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*lu);return new ye(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ou)throw new F(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lu}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(dr(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ou;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:Ae("string",ye._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ye(0,0))}static max(){return new Q(new ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Zn=-1;function Wb(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(n===1e9?new ye(t+1,0):new ye(t,n));return new rs(i,$.empty(),e)}function Hb(s){return new rs(s.readTime,s.key,Zn)}class rs{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new rs(Q.min(),$.empty(),Zn)}static max(){return new rs(Q.max(),$.empty(),Zn)}}function zb(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(s.documentKey,e.documentKey),t!==0?t:ne(s.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(s){if(s.code!==k.FAILED_PRECONDITION||s.message!==Gb)throw s;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C(((n,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(n,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):C.reject(t)}static resolve(e){return new C(((t,n)=>{t(e)}))}static reject(e){return new C(((t,n)=>{n(e)}))}static waitFor(e){return new C(((t,n)=>{let i=0,a=0,l=!1;e.forEach((c=>{++i,c.next((()=>{++a,l&&a===i&&t()}),(h=>n(h)))})),l=!0,a===i&&t()}))}static or(e){let t=C.resolve(!1);for(const n of e)t=t.next((i=>i?C.resolve(i):n()));return t}static forEach(e,t){const n=[];return e.forEach(((i,a)=>{n.push(t.call(this,i,a))})),this.waitFor(n)}static mapArray(e,t){return new C(((n,i)=>{const a=e.length,l=new Array(a);let c=0;for(let h=0;h<a;h++){const m=h;t(e[m]).next((f=>{l[m]=f,++c,c===a&&n(l)}),(f=>i(f)))}}))}static doWhile(e,t){return new C(((n,i)=>{const a=()=>{e()===!0?t().next((()=>{a()}),i):n()};a()}))}}function Qb(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function dn(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class Ui{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ui.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=-1;function Bi(s){return s==null}function ui(s){return s===0&&1/s==-1/0}function Yb(s){return typeof s=="number"&&Number.isInteger(s)&&!ui(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="";function Jb(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=cu(e)),e=Xb(s.get(t),e);return cu(e)}function Xb(s,e){let t=e;const n=s.length;for(let i=0;i<n;i++){const a=s.charAt(i);switch(a){case"\0":t+="";break;case kd:t+="";break;default:t+=a}}return t}function cu(s){return s+kd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function ds(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function Cd(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t){this.comparator=e,this.root=t||Oe.EMPTY}insert(e,t){return new we(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rr(this.root,e,this.comparator,!0)}}class Rr{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?n(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,t,n,i,a){this.key=e,this.value=t,this.color=n??Oe.RED,this.left=i??Oe.EMPTY,this.right=a??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,a){return new Oe(e??this.key,t??this.value,n??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const a=n(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,n),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Oe.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw z(27949);return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(e,t,n,i,a){return this}insert(e,t,n){return new Oe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hu(this.data.getIterator())}getIteratorFrom(e){return new hu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=n.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Re(this.comparator);return t.data=e,t}}class hu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new dt([])}unionWith(e){let t=new Re(Fe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return en(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class Rd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Rd("Invalid base64 string: "+a):a}})(e);return new Be(t)}static fromUint8Array(e){const t=(function(i){let a="";for(let l=0;l<i.length;++l)a+=String.fromCharCode(i[l]);return a})(e);return new Be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const Zb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function is(s){if(he(!!s,39018),typeof s=="string"){let e=0;const t=Zb.exec(s);if(he(!!t,46558,{timestamp:s}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:_e(s.seconds),nanos:_e(s.nanos)}}function _e(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function as(s){return typeof s=="string"?Be.fromBase64String(s):Be.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="server_timestamp",Dd="__type__",Vd="__previous_value__",Md="__local_write_time__";function Oo(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[Dd])==null?void 0:n.stringValue)===Pd}function qi(s){const e=s.mapValue.fields[Vd];return Oo(e)?qi(e):e}function er(s){const e=is(s.mapValue.fields[Md].timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,t,n,i,a,l,c,h,m,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=m,this.isUsingEmulator=f}}const hi="(default)";class tr{constructor(e,t){this.projectId=e,this.database=t||hi}static empty(){return new tr("","")}get isDefaultDatabase(){return this.database===hi}isEqual(e){return e instanceof tr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="__type__",tw="__max__",Pr={mapValue:{}},Od="__vector__",di="value";function os(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Oo(s)?4:nw(s)?9007199254740991:sw(s)?10:11:z(28295,{value:s})}function jt(s,e){if(s===e)return!0;const t=os(s);if(t!==os(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return er(s).isEqual(er(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const l=is(i.timestampValue),c=is(a.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(i,a){return as(i.bytesValue).isEqual(as(a.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(i,a){return _e(i.geoPointValue.latitude)===_e(a.geoPointValue.latitude)&&_e(i.geoPointValue.longitude)===_e(a.geoPointValue.longitude)})(s,e);case 2:return(function(i,a){if("integerValue"in i&&"integerValue"in a)return _e(i.integerValue)===_e(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const l=_e(i.doubleValue),c=_e(a.doubleValue);return l===c?ui(l)===ui(c):isNaN(l)&&isNaN(c)}return!1})(s,e);case 9:return en(s.arrayValue.values||[],e.arrayValue.values||[],jt);case 10:case 11:return(function(i,a){const l=i.mapValue.fields||{},c=a.mapValue.fields||{};if(uu(l)!==uu(c))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(c[h]===void 0||!jt(l[h],c[h])))return!1;return!0})(s,e);default:return z(52216,{left:s})}}function sr(s,e){return(s.values||[]).find((t=>jt(t,e)))!==void 0}function tn(s,e){if(s===e)return 0;const t=os(s),n=os(e);if(t!==n)return ne(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(s.booleanValue,e.booleanValue);case 2:return(function(a,l){const c=_e(a.integerValue||a.doubleValue),h=_e(l.integerValue||l.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(s,e);case 3:return du(s.timestampValue,e.timestampValue);case 4:return du(er(s),er(e));case 5:return io(s.stringValue,e.stringValue);case 6:return(function(a,l){const c=as(a),h=as(l);return c.compareTo(h)})(s.bytesValue,e.bytesValue);case 7:return(function(a,l){const c=a.split("/"),h=l.split("/");for(let m=0;m<c.length&&m<h.length;m++){const f=ne(c[m],h[m]);if(f!==0)return f}return ne(c.length,h.length)})(s.referenceValue,e.referenceValue);case 8:return(function(a,l){const c=ne(_e(a.latitude),_e(l.latitude));return c!==0?c:ne(_e(a.longitude),_e(l.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return mu(s.arrayValue,e.arrayValue);case 10:return(function(a,l){var v,I,S,P;const c=a.fields||{},h=l.fields||{},m=(v=c[di])==null?void 0:v.arrayValue,f=(I=h[di])==null?void 0:I.arrayValue,x=ne(((S=m==null?void 0:m.values)==null?void 0:S.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return x!==0?x:mu(m,f)})(s.mapValue,e.mapValue);case 11:return(function(a,l){if(a===Pr.mapValue&&l===Pr.mapValue)return 0;if(a===Pr.mapValue)return 1;if(l===Pr.mapValue)return-1;const c=a.fields||{},h=Object.keys(c),m=l.fields||{},f=Object.keys(m);h.sort(),f.sort();for(let x=0;x<h.length&&x<f.length;++x){const v=io(h[x],f[x]);if(v!==0)return v;const I=tn(c[h[x]],m[f[x]]);if(I!==0)return I}return ne(h.length,f.length)})(s.mapValue,e.mapValue);default:throw z(23264,{he:t})}}function du(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return ne(s,e);const t=is(s),n=is(e),i=ne(t.seconds,n.seconds);return i!==0?i:ne(t.nanos,n.nanos)}function mu(s,e){const t=s.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const a=tn(t[i],n[i]);if(a)return a}return ne(t.length,n.length)}function sn(s){return ao(s)}function ao(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(t){const n=is(t);return`time(${n.seconds},${n.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(t){return as(t).toBase64()})(s.bytesValue):"referenceValue"in s?(function(t){return $.fromName(t).toString()})(s.referenceValue):"geoPointValue"in s?(function(t){return`geo(${t.latitude},${t.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(t){let n="[",i=!0;for(const a of t.values||[])i?i=!1:n+=",",n+=ao(a);return n+"]"})(s.arrayValue):"mapValue"in s?(function(t){const n=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const l of n)a?a=!1:i+=",",i+=`${l}:${ao(t.fields[l])}`;return i+"}"})(s.mapValue):z(61005,{value:s})}function Wr(s){switch(os(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qi(s);return e?16+Wr(e):16;case 5:return 2*s.stringValue.length;case 6:return as(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,a)=>i+Wr(a)),0)})(s.arrayValue);case 10:case 11:return(function(n){let i=0;return ds(n.fields,((a,l)=>{i+=a.length+Wr(l)})),i})(s.mapValue);default:throw z(13486,{value:s})}}function fu(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function oo(s){return!!s&&"integerValue"in s}function Fo(s){return!!s&&"arrayValue"in s}function pu(s){return!!s&&"nullValue"in s}function gu(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function Hr(s){return!!s&&"mapValue"in s}function sw(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[Ld])==null?void 0:n.stringValue)===Od}function Wn(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return ds(s.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Wn(n))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wn(s.arrayValue.values[t]);return e}return{...s}}function nw(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===tw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Hr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wn(t)}setAll(e){let t=Fe.emptyPath(),n={},i=[];e.forEach(((l,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,n,i),n={},i=[],t=c.popLast()}l?n[c.lastSegment()]=Wn(l):i.push(c.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,n,i)}delete(e){const t=this.field(e.popLast());Hr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return jt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Hr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){ds(t,((i,a)=>e[i]=a));for(const i of n)delete e[i]}clone(){return new tt(Wn(this.value))}}function Fd(s){const e=[];return ds(s.fields,((t,n)=>{const i=new Fe([t]);if(Hr(n)){const a=Fd(n.mapValue).fields;if(a.length===0)e.push(i);else for(const l of a)e.push(i.child(l))}else e.push(i)})),new dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t,n,i,a,l,c){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=a,this.data=l,this.documentState=c}static newInvalidDocument(e){return new Ge(e,0,Q.min(),Q.min(),Q.min(),tt.empty(),0)}static newFoundDocument(e,t,n,i){return new Ge(e,1,t,Q.min(),n,i,0)}static newNoDocument(e,t){return new Ge(e,2,t,Q.min(),Q.min(),tt.empty(),0)}static newUnknownDocument(e,t){return new Ge(e,3,t,Q.min(),Q.min(),tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mi{constructor(e,t){this.position=e,this.inclusive=t}}function xu(s,e,t){let n=0;for(let i=0;i<s.position.length;i++){const a=e[i],l=s.position[i];if(a.field.isKeyField()?n=$.comparator($.fromName(l.referenceValue),t.key):n=tn(l,t.data.field(a.field)),a.dir==="desc"&&(n*=-1),n!==0)break}return n}function yu(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!jt(s.position[t],e.position[t]))return!1;return!0}/**
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
 */class nr{constructor(e,t="asc"){this.field=e,this.dir=t}}function rw(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
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
 */class Ud{}class je extends Ud{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new aw(e,t,n):t==="array-contains"?new cw(e,n):t==="in"?new uw(e,n):t==="not-in"?new hw(e,n):t==="array-contains-any"?new dw(e,n):new je(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new ow(e,n):new lw(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(tn(t,this.value)):t!==null&&os(this.value)===os(t)&&this.matchesComparison(tn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pt extends Ud{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new pt(e,t)}matches(e){return Bd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Bd(s){return s.op==="and"}function qd(s){return iw(s)&&Bd(s)}function iw(s){for(const e of s.filters)if(e instanceof pt)return!1;return!0}function lo(s){if(s instanceof je)return s.field.canonicalString()+s.op.toString()+sn(s.value);if(qd(s))return s.filters.map((e=>lo(e))).join(",");{const e=s.filters.map((t=>lo(t))).join(",");return`${s.op}(${e})`}}function $d(s,e){return s instanceof je?(function(n,i){return i instanceof je&&n.op===i.op&&n.field.isEqual(i.field)&&jt(n.value,i.value)})(s,e):s instanceof pt?(function(n,i){return i instanceof pt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((a,l,c)=>a&&$d(l,i.filters[c])),!0):!1})(s,e):void z(19439)}function Wd(s){return s instanceof je?(function(t){return`${t.field.canonicalString()} ${t.op} ${sn(t.value)}`})(s):s instanceof pt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Wd).join(" ,")+"}"})(s):"Filter"}class aw extends je{constructor(e,t,n){super(e,t,n),this.key=$.fromName(n.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class ow extends je{constructor(e,t){super(e,"in",t),this.keys=Hd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class lw extends je{constructor(e,t){super(e,"not-in",t),this.keys=Hd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Hd(s,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>$.fromName(n.referenceValue)))}class cw extends je{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Fo(t)&&sr(t.arrayValue,this.value)}}class uw extends je{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&sr(this.value.arrayValue,t)}}class hw extends je{constructor(e,t){super(e,"not-in",t)}matches(e){if(sr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!sr(this.value.arrayValue,t)}}class dw extends je{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Fo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>sr(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,t=null,n=[],i=[],a=null,l=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=a,this.startAt=l,this.endAt=c,this.Te=null}}function bu(s,e=null,t=[],n=[],i=null,a=null,l=null){return new mw(s,e,t,n,i,a,l)}function Uo(s){const e=J(s);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>lo(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(a){return a.field.canonicalString()+a.dir})(n))).join(","),Bi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>sn(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>sn(n))).join(",")),e.Te=t}return e.Te}function Bo(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!rw(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!$d(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!yu(s.startAt,e.startAt)&&yu(s.endAt,e.endAt)}function co(s){return $.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t=null,n=[],i=[],a=null,l="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=a,this.limitType=l,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function fw(s,e,t,n,i,a,l,c){return new mn(s,e,t,n,i,a,l,c)}function qo(s){return new mn(s)}function wu(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function zd(s){return s.collectionGroup!==null}function Hn(s){const e=J(s);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new Re(Fe.comparator);return l.filters.forEach((h=>{h.getFlattenedFilters().forEach((m=>{m.isInequality()&&(c=c.add(m.field))}))})),c})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new nr(a,n))})),t.has(Fe.keyField().canonicalString())||e.Ie.push(new nr(Fe.keyField(),n))}return e.Ie}function _t(s){const e=J(s);return e.Ee||(e.Ee=pw(e,Hn(s))),e.Ee}function pw(s,e){if(s.limitType==="F")return bu(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map((i=>{const a=i.dir==="desc"?"asc":"desc";return new nr(i.field,a)}));const t=s.endAt?new mi(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new mi(s.startAt.position,s.startAt.inclusive):null;return bu(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function uo(s,e){const t=s.filters.concat([e]);return new mn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}function ho(s,e,t){return new mn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function $i(s,e){return Bo(_t(s),_t(e))&&s.limitType===e.limitType}function Gd(s){return`${Uo(_t(s))}|lt:${s.limitType}`}function Bs(s){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((i=>Wd(i))).join(", ")}]`),Bi(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((i=>(function(l){return`${l.field.canonicalString()} (${l.dir})`})(i))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((i=>sn(i))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((i=>sn(i))).join(",")),`Target(${n})`})(_t(s))}; limitType=${s.limitType})`}function Wi(s,e){return e.isFoundDocument()&&(function(n,i){const a=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(a):$.isDocumentKey(n.path)?n.path.isEqual(a):n.path.isImmediateParentOf(a)})(s,e)&&(function(n,i){for(const a of Hn(n))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0})(s,e)&&(function(n,i){for(const a of n.filters)if(!a.matches(i))return!1;return!0})(s,e)&&(function(n,i){return!(n.startAt&&!(function(l,c,h){const m=xu(l,c,h);return l.inclusive?m<=0:m<0})(n.startAt,Hn(n),i)||n.endAt&&!(function(l,c,h){const m=xu(l,c,h);return l.inclusive?m>=0:m>0})(n.endAt,Hn(n),i))})(s,e)}function gw(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function Kd(s){return(e,t)=>{let n=!1;for(const i of Hn(s)){const a=xw(i,e,t);if(a!==0)return a;n=n||i.field.isKeyField()}return 0}}function xw(s,e,t){const n=s.field.isKeyField()?$.comparator(e.key,t.key):(function(a,l,c){const h=l.data.field(a),m=c.data.field(a);return h!==null&&m!==null?tn(h,m):z(42886)})(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return z(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,a]of n)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,((t,n)=>{for(const[i,a]of n)e(i,a)}))}isEmpty(){return Cd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=new we($.comparator);function Mt(){return yw}const Qd=new we($.comparator);function Fn(...s){let e=Qd;for(const t of s)e=e.insert(t.key,t);return e}function Yd(s){let e=Qd;return s.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function vs(){return zn()}function Jd(){return zn()}function zn(){return new Ps((s=>s.toString()),((s,e)=>s.isEqual(e)))}const bw=new we($.comparator),ww=new Re($.comparator);function re(...s){let e=ww;for(const t of s)e=e.add(t);return e}const vw=new Re(ne);function _w(){return vw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ui(e)?"-0":e}}function Xd(s){return{integerValue:""+s}}function Nw(s,e){return Yb(e)?Xd(e):$o(s,e)}/**
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
 */class Hi{constructor(){this._=void 0}}function Ew(s,e,t){return s instanceof rr?(function(i,a){const l={fields:{[Dd]:{stringValue:Pd},[Md]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&Oo(a)&&(a=qi(a)),a&&(l.fields[Vd]=a),{mapValue:l}})(t,e):s instanceof ir?em(s,e):s instanceof ar?tm(s,e):(function(i,a){const l=Zd(i,a),c=vu(l)+vu(i.Ae);return oo(l)&&oo(i.Ae)?Xd(c):$o(i.serializer,c)})(s,e)}function Iw(s,e,t){return s instanceof ir?em(s,e):s instanceof ar?tm(s,e):t}function Zd(s,e){return s instanceof fi?(function(n){return oo(n)||(function(a){return!!a&&"doubleValue"in a})(n)})(e)?e:{integerValue:0}:null}class rr extends Hi{}class ir extends Hi{constructor(e){super(),this.elements=e}}function em(s,e){const t=sm(e);for(const n of s.elements)t.some((i=>jt(i,n)))||t.push(n);return{arrayValue:{values:t}}}class ar extends Hi{constructor(e){super(),this.elements=e}}function tm(s,e){let t=sm(e);for(const n of s.elements)t=t.filter((i=>!jt(i,n)));return{arrayValue:{values:t}}}class fi extends Hi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function vu(s){return _e(s.integerValue||s.doubleValue)}function sm(s){return Fo(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,t){this.field=e,this.transform=t}}function jw(s,e){return s.field.isEqual(e.field)&&(function(n,i){return n instanceof ir&&i instanceof ir||n instanceof ar&&i instanceof ar?en(n.elements,i.elements,jt):n instanceof fi&&i instanceof fi?jt(n.Ae,i.Ae):n instanceof rr&&i instanceof rr})(s.transform,e.transform)}class Aw{constructor(e,t){this.version=e,this.transformResults=t}}class Rt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rt}static exists(e){return new Rt(void 0,e)}static updateTime(e){return new Rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zr(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class zi{}function nm(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new im(s.key,Rt.none()):new Gi(s.key,s.data,Rt.none());{const t=s.data,n=tt.empty();let i=new Re(Fe.comparator);for(let a of e.fields)if(!i.has(a)){let l=t.field(a);l===null&&a.length>1&&(a=a.popLast(),l=t.field(a)),l===null?n.delete(a):n.set(a,l),i=i.add(a)}return new Ds(s.key,n,new dt(i.toArray()),Rt.none())}}function Sw(s,e,t){s instanceof Gi?(function(i,a,l){const c=i.value.clone(),h=Nu(i.fieldTransforms,a,l.transformResults);c.setAll(h),a.convertToFoundDocument(l.version,c).setHasCommittedMutations()})(s,e,t):s instanceof Ds?(function(i,a,l){if(!zr(i.precondition,a))return void a.convertToUnknownDocument(l.version);const c=Nu(i.fieldTransforms,a,l.transformResults),h=a.data;h.setAll(rm(i)),h.setAll(c),a.convertToFoundDocument(l.version,h).setHasCommittedMutations()})(s,e,t):(function(i,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()})(0,e,t)}function Gn(s,e,t,n){return s instanceof Gi?(function(a,l,c,h){if(!zr(a.precondition,l))return c;const m=a.value.clone(),f=Eu(a.fieldTransforms,h,l);return m.setAll(f),l.convertToFoundDocument(l.version,m).setHasLocalMutations(),null})(s,e,t,n):s instanceof Ds?(function(a,l,c,h){if(!zr(a.precondition,l))return c;const m=Eu(a.fieldTransforms,h,l),f=l.data;return f.setAll(rm(a)),f.setAll(m),l.convertToFoundDocument(l.version,f).setHasLocalMutations(),c===null?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((x=>x.field)))})(s,e,t,n):(function(a,l,c){return zr(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c})(s,e,t)}function kw(s,e){let t=null;for(const n of s.fieldTransforms){const i=e.data.field(n.field),a=Zd(n.transform,i||null);a!=null&&(t===null&&(t=tt.empty()),t.set(n.field,a))}return t||null}function _u(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&en(n,i,((a,l)=>jw(a,l)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class Gi extends zi{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ds extends zi{constructor(e,t,n,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function rm(s){const e=new Map;return s.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}})),e}function Nu(s,e,t){const n=new Map;he(s.length===t.length,32656,{Re:t.length,Ve:s.length});for(let i=0;i<t.length;i++){const a=s[i],l=a.transform,c=e.data.field(a.field);n.set(a.field,Iw(l,c,t[i]))}return n}function Eu(s,e,t){const n=new Map;for(const i of s){const a=i.transform,l=t.data.field(i.field);n.set(i.field,Ew(a,l,e))}return n}class im extends zi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cw extends zi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&Sw(a,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Gn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Gn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Jd();return this.mutations.forEach((i=>{const a=e.get(i.key),l=a.overlayedDocument;let c=this.applyToLocalView(l,a.mutatedFields);c=t.has(i.key)?null:c;const h=nm(l,c);h!==null&&n.set(i.key,h),l.isValidDocument()||l.convertToNoDocument(Q.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),re())}isEqual(e){return this.batchId===e.batchId&&en(this.mutations,e.mutations,((t,n)=>_u(t,n)))&&en(this.baseMutations,e.baseMutations,((t,n)=>_u(t,n)))}}class Wo{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){he(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let i=(function(){return bw})();const a=e.mutations;for(let l=0;l<a.length;l++)i=i.insert(a[l].key,n[l].version);return new Wo(e,t,n,i)}}/**
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
 */class Pw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Dw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,ie;function Vw(s){switch(s){case k.OK:return z(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return z(15467,{code:s})}}function am(s){if(s===void 0)return Vt("GRPC error has no .code"),k.UNKNOWN;switch(s){case Te.OK:return k.OK;case Te.CANCELLED:return k.CANCELLED;case Te.UNKNOWN:return k.UNKNOWN;case Te.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Te.INTERNAL:return k.INTERNAL;case Te.UNAVAILABLE:return k.UNAVAILABLE;case Te.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Te.NOT_FOUND:return k.NOT_FOUND;case Te.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Te.ABORTED:return k.ABORTED;case Te.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Te.DATA_LOSS:return k.DATA_LOSS;default:return z(39323,{code:s})}}(ie=Te||(Te={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Mw(){return new TextEncoder}/**
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
 */const Lw=new ts([4294967295,4294967295],0);function Iu(s){const e=Mw().encode(s),t=new wd;return t.update(e),new Uint8Array(t.digest())}function Tu(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new ts([t,n],0),new ts([i,a],0)]}class Ho{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Un(`Invalid padding: ${t}`);if(n<0)throw new Un(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Un(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Un(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ts.fromNumber(this.ge)}ye(e,t,n){let i=e.add(t.multiply(ts.fromNumber(n)));return i.compare(Lw)===1&&(i=new ts([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Iu(e),[n,i]=Tu(t);for(let a=0;a<this.hashCount;a++){const l=this.ye(n,i,a);if(!this.we(l))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),l=new Ho(a,i,t);return n.forEach((c=>l.insert(c))),l}insert(e){if(this.ge===0)return;const t=Iu(e),[n,i]=Tu(t);for(let a=0;a<this.hashCount;a++){const l=this.ye(n,i,a);this.Se(l)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t,n,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,mr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ki(Q.min(),i,new we(ne),Mt(),re())}}class mr{constructor(e,t,n,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new mr(n,t,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t,n,i){this.be=e,this.removedTargetIds=t,this.key=n,this.De=i}}class om{constructor(e,t){this.targetId=e,this.Ce=t}}class lm{constructor(e,t,n=Be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class ju{constructor(){this.ve=0,this.Fe=Au(),this.Me=Be.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),t=re(),n=re();return this.Fe.forEach(((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:z(38017,{changeType:a})}})),new mr(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=Au()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,he(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Ow{constructor(e){this.Ge=e,this.ze=new Map,this.je=Mt(),this.Je=Dr(),this.He=Dr(),this.Ye=new we(ne)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:z(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,n=e.Ce.count,i=this.ot(t);if(i){const a=i.target;if(co(a))if(n===0){const l=new $(a.path);this.et(t,l,Ge.newNoDocument(l,Q.min()))}else he(n===1,20013,{expectedCount:n});else{const l=this._t(t);if(l!==n){const c=this.ut(e),h=c?this.ct(c,e,l):1;if(h!==0){this.it(t);const m=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,m)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:a=0}=t;let l,c;try{l=as(n).toUint8Array()}catch(h){if(h instanceof Rd)return Zs("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Ho(l,i,a)}catch(h){return Zs(h instanceof Un?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let i=0;return n.forEach((a=>{const l=this.Ge.ht(),c=`projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;e.mightContain(c)||(this.et(t,a,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((a,l)=>{const c=this.ot(l);if(c){if(a.current&&co(c.target)){const h=new $(c.target.path);this.It(h).has(l)||this.Et(l,h)||this.et(l,h,Ge.newNoDocument(h,e))}a.Be&&(t.set(l,a.ke()),a.qe())}}));let n=re();this.He.forEach(((a,l)=>{let c=!0;l.forEachWhile((h=>{const m=this.ot(h);return!m||m.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(n=n.add(a))})),this.je.forEach(((a,l)=>l.setReadTime(e)));const i=new Ki(e,t,this.Ye,this.je,n);return this.je=Mt(),this.Je=Dr(),this.He=Dr(),this.Ye=new we(ne),i}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new ju,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Re(ne),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Re(ne),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ju),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Dr(){return new we($.comparator)}function Au(){return new we($.comparator)}const Fw={asc:"ASCENDING",desc:"DESCENDING"},Uw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bw={and:"AND",or:"OR"};class qw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mo(s,e){return s.useProto3Json||Bi(e)?e:{value:e}}function pi(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cm(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function $w(s,e){return pi(s,e.toTimestamp())}function Nt(s){return he(!!s,49232),Q.fromTimestamp((function(t){const n=is(t);return new ye(n.seconds,n.nanos)})(s))}function zo(s,e){return fo(s,e).canonicalString()}function fo(s,e){const t=(function(i){return new ge(["projects",i.projectId,"databases",i.database])})(s).child("documents");return e===void 0?t:t.child(e)}function um(s){const e=ge.fromString(s);return he(pm(e),10190,{key:e.toString()}),e}function po(s,e){return zo(s.databaseId,e.path)}function Pa(s,e){const t=um(e);if(t.get(1)!==s.databaseId.projectId)throw new F(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new F(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new $(dm(t))}function hm(s,e){return zo(s.databaseId,e)}function Ww(s){const e=um(s);return e.length===4?ge.emptyPath():dm(e)}function go(s){return new ge(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function dm(s){return he(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function Su(s,e,t){return{name:po(s,e),fields:t.value.mapValue.fields}}function Hw(s,e){let t;if("targetChange"in e){e.targetChange;const n=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:z(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=(function(m,f){return m.useProto3Json?(he(f===void 0||typeof f=="string",58123),Be.fromBase64String(f||"")):(he(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Be.fromUint8Array(f||new Uint8Array))})(s,e.targetChange.resumeToken),l=e.targetChange.cause,c=l&&(function(m){const f=m.code===void 0?k.UNKNOWN:am(m.code);return new F(f,m.message||"")})(l);t=new lm(n,i,a,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=Pa(s,n.document.name),a=Nt(n.document.updateTime),l=n.document.createTime?Nt(n.document.createTime):Q.min(),c=new tt({mapValue:{fields:n.document.fields}}),h=Ge.newFoundDocument(i,a,l,c),m=n.targetIds||[],f=n.removedTargetIds||[];t=new Gr(m,f,h.key,h)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=Pa(s,n.document),a=n.readTime?Nt(n.readTime):Q.min(),l=Ge.newNoDocument(i,a),c=n.removedTargetIds||[];t=new Gr([],c,l.key,l)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=Pa(s,n.document),a=n.removedTargetIds||[];t=new Gr([],a,i,null)}else{if(!("filter"in e))return z(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:a}=n,l=new Dw(i,a),c=n.targetId;t=new om(c,l)}}return t}function zw(s,e){let t;if(e instanceof Gi)t={update:Su(s,e.key,e.value)};else if(e instanceof im)t={delete:po(s,e.key)};else if(e instanceof Ds)t={update:Su(s,e.key,e.data),updateMask:tv(e.fieldMask)};else{if(!(e instanceof Cw))return z(16599,{Vt:e.type});t={verify:po(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(a,l){const c=l.transform;if(c instanceof rr)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ir)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ar)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof fi)return{fieldPath:l.field.canonicalString(),increment:c.Ae};throw z(20930,{transform:l.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(i,a){return a.updateTime!==void 0?{updateTime:$w(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:z(27497)})(s,e.precondition)),t}function Gw(s,e){return s&&s.length>0?(he(e!==void 0,14353),s.map((t=>(function(i,a){let l=i.updateTime?Nt(i.updateTime):Nt(a);return l.isEqual(Q.min())&&(l=Nt(a)),new Aw(l,i.transformResults||[])})(t,e)))):[]}function Kw(s,e){return{documents:[hm(s,e.path)]}}function Qw(s,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=hm(s,i);const a=(function(m){if(m.length!==0)return fm(pt.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const l=(function(m){if(m.length!==0)return m.map((f=>(function(v){return{field:qs(v.field),direction:Xw(v.dir)}})(f)))})(e.orderBy);l&&(t.structuredQuery.orderBy=l);const c=mo(s,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{ft:t,parent:i}}function Yw(s){let e=Ww(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){he(n===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let a=[];t.where&&(a=(function(x){const v=mm(x);return v instanceof pt&&qd(v)?v.getFilters():[v]})(t.where));let l=[];t.orderBy&&(l=(function(x){return x.map((v=>(function(S){return new nr($s(S.field),(function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(v)))})(t.orderBy));let c=null;t.limit&&(c=(function(x){let v;return v=typeof x=="object"?x.value:x,Bi(v)?null:v})(t.limit));let h=null;t.startAt&&(h=(function(x){const v=!!x.before,I=x.values||[];return new mi(I,v)})(t.startAt));let m=null;return t.endAt&&(m=(function(x){const v=!x.before,I=x.values||[];return new mi(I,v)})(t.endAt)),fw(e,i,l,a,c,"F",h,m)}function Jw(s,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mm(s){return s.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=$s(t.unaryFilter.field);return je.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=$s(t.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=$s(t.unaryFilter.field);return je.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=$s(t.unaryFilter.field);return je.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}})(s):s.fieldFilter!==void 0?(function(t){return je.create($s(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(t){return pt.create(t.compositeFilter.filters.map((n=>mm(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return z(1026)}})(t.compositeFilter.op))})(s):z(30097,{filter:s})}function Xw(s){return Fw[s]}function Zw(s){return Uw[s]}function ev(s){return Bw[s]}function qs(s){return{fieldPath:s.canonicalString()}}function $s(s){return Fe.fromServerFormat(s.fieldPath)}function fm(s){return s instanceof je?(function(t){if(t.op==="=="){if(gu(t.value))return{unaryFilter:{field:qs(t.field),op:"IS_NAN"}};if(pu(t.value))return{unaryFilter:{field:qs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gu(t.value))return{unaryFilter:{field:qs(t.field),op:"IS_NOT_NAN"}};if(pu(t.value))return{unaryFilter:{field:qs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qs(t.field),op:Zw(t.op),value:t.value}}})(s):s instanceof pt?(function(t){const n=t.getFilters().map((i=>fm(i)));return n.length===1?n[0]:{compositeFilter:{op:ev(t.op),filters:n}}})(s):z(54877,{filter:s})}function tv(s){const e=[];return s.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function pm(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t,n,i,a=Q.min(),l=Q.min(),c=Be.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new Jt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.yt=e}}function nv(s){const e=Yw({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?ho(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(){this.Cn=new iv}addToCollectionParentIndex(e,t){return this.Cn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(rs.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(rs.min())}updateCollectionGroup(e,t,n){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class iv{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Re(ge.comparator),a=!i.has(n);return this.index[t]=i.add(n),a}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Re(ge.comparator)).toArray()}}/**
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
 */const ku={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gm=41943040;class Ze{static withCacheSize(e){return new Ze(e,Ze.DEFAULT_COLLECTION_PERCENTILE,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze.DEFAULT_COLLECTION_PERCENTILE=10,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ze.DEFAULT=new Ze(gm,Ze.DEFAULT_COLLECTION_PERCENTILE,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ze.DISABLED=new Ze(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new nn(0)}static cr(){return new nn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="LruGarbageCollector",av=1048576;function Ru([s,e],[t,n]){const i=ne(s,t);return i===0?ne(e,n):i}class ov{constructor(e){this.Ir=e,this.buffer=new Re(Ru),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Ru(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lv{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){U(Cu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){dn(t)?U(Cu,"Ignoring IndexedDB error during garbage collection: ",t):await hn(t)}await this.Vr(3e5)}))}}class cv{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Ui.ce);const n=new ov(t);return this.mr.forEachTarget(e,(i=>n.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>n.Ar(i))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(ku)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ku):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,i,a,l,c,h,m;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((x=>(x>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),i=this.params.maximumSequenceNumbersToCollect):i=x,l=Date.now(),this.nthSequenceNumber(e,i)))).next((x=>(n=x,c=Date.now(),this.removeTargets(e,n,t)))).next((x=>(a=x,h=Date.now(),this.removeOrphanedDocuments(e,n)))).next((x=>(m=Date.now(),Us()<=se.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-f}ms
	Determined least recently used ${i} in `+(c-l)+`ms
	Removed ${a} targets in `+(h-c)+`ms
	Removed ${x} documents in `+(m-h)+`ms
Total Duration: ${m-f}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:x}))))}}function uv(s,e){return new cv(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.changes=new Ps((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?C.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(n!==null&&Gn(n.mutation,i,dt.empty(),ye.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,re()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=re()){const i=vs();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((a=>{let l=Fn();return a.forEach(((c,h)=>{l=l.insert(c,h.overlayedDocument)})),l}))))}getOverlayedDocuments(e,t){const n=vs();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,re())))}populateOverlays(e,t,n){const i=[];return n.forEach((a=>{t.has(a)||i.push(a)})),this.documentOverlayCache.getOverlays(e,i).next((a=>{a.forEach(((l,c)=>{t.set(l,c)}))}))}computeViews(e,t,n,i){let a=Mt();const l=zn(),c=(function(){return zn()})();return t.forEach(((h,m)=>{const f=n.get(m.key);i.has(m.key)&&(f===void 0||f.mutation instanceof Ds)?a=a.insert(m.key,m):f!==void 0?(l.set(m.key,f.mutation.getFieldMask()),Gn(f.mutation,m,f.mutation.getFieldMask(),ye.now())):l.set(m.key,dt.empty())})),this.recalculateAndSaveOverlays(e,a).next((h=>(h.forEach(((m,f)=>l.set(m,f))),t.forEach(((m,f)=>c.set(m,new dv(f,l.get(m)??null)))),c)))}recalculateAndSaveOverlays(e,t){const n=zn();let i=new we(((l,c)=>l-c)),a=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((l=>{for(const c of l)c.keys().forEach((h=>{const m=t.get(h);if(m===null)return;let f=n.get(h)||dt.empty();f=c.applyToLocalView(m,f),n.set(h,f);const x=(i.get(c.batchId)||re()).add(h);i=i.insert(c.batchId,x)}))})).next((()=>{const l=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),m=h.key,f=h.value,x=Jd();f.forEach((v=>{if(!a.has(v)){const I=nm(t.get(v),n.get(v));I!==null&&x.set(v,I),a=a.add(v)}})),l.push(this.documentOverlayCache.saveOverlays(e,m,x))}return C.waitFor(l)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,i){return(function(l){return $.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((a=>{const l=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-a.size):C.resolve(vs());let c=Zn,h=a;return l.next((m=>C.forEach(m,((f,x)=>(c<x.largestBatchId&&(c=x.largestBatchId),a.get(f)?C.resolve():this.remoteDocumentCache.getEntry(e,f).next((v=>{h=h.insert(f,v)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,h,m,re()))).next((f=>({batchId:c,changes:Yd(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next((n=>{let i=Fn();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const a=t.collectionGroup;let l=Fn();return this.indexManager.getCollectionParents(e,a).next((c=>C.forEach(c,(h=>{const m=(function(x,v){return new mn(v,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(t,h.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,n,i).next((f=>{f.forEach(((x,v)=>{l=l.insert(x,v)}))}))})).next((()=>l))))}getDocumentsMatchingCollectionQuery(e,t,n,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,a,i)))).next((l=>{a.forEach(((h,m)=>{const f=m.getKey();l.get(f)===null&&(l=l.insert(f,Ge.newInvalidDocument(f)))}));let c=Fn();return l.forEach(((h,m)=>{const f=a.get(h);f!==void 0&&Gn(f.mutation,m,dt.empty(),ye.now()),Wi(t,m)&&(c=c.insert(h,m))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return C.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Nt(i.createTime)}})(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:nv(i.bundledQuery),readTime:Nt(i.readTime)}})(t)),C.resolve()}}/**
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
 */class pv{constructor(){this.overlays=new we($.comparator),this.qr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const n=vs();return C.forEach(t,(i=>this.getOverlay(e,i).next((a=>{a!==null&&n.set(i,a)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((i,a)=>{this.St(e,t,a)})),C.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.qr.get(n);return i!==void 0&&(i.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(n)),C.resolve()}getOverlaysForCollection(e,t,n){const i=vs(),a=t.length+1,l=new $(t.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const h=c.getNext().value,m=h.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&h.largestBatchId>n&&i.set(h.getKey(),h)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let a=new we(((m,f)=>m-f));const l=this.overlays.getIterator();for(;l.hasNext();){const m=l.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>n){let f=a.get(m.largestBatchId);f===null&&(f=vs(),a=a.insert(m.largestBatchId,f)),f.set(m.getKey(),m)}}const c=vs(),h=a.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((m,f)=>c.set(m,f))),!(c.size()>=i)););return C.resolve(c)}St(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const l=this.qr.get(i.largestBatchId).delete(n.key);this.qr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(n.key,new Pw(t,n));let a=this.qr.get(t);a===void 0&&(a=re(),this.qr.set(t,a)),this.qr.set(t,a.add(n.key))}}/**
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
 */class gv{constructor(){this.sessionToken=Be.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.Qr=new Re(Me.$r),this.Ur=new Re(Me.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new Me(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Gr(new Me(e,t))}zr(e,t){e.forEach((n=>this.removeReference(n,t)))}jr(e){const t=new $(new ge([])),n=new Me(t,e),i=new Me(t,e+1),a=[];return this.Ur.forEachInRange([n,i],(l=>{this.Gr(l),a.push(l.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new $(new ge([])),n=new Me(t,e),i=new Me(t,e+1);let a=re();return this.Ur.forEachInRange([n,i],(l=>{a=a.add(l.key)})),a}containsKey(e){const t=new Me(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Me{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return $.comparator(e.key,t.key)||ne(e.Yr,t.Yr)}static Kr(e,t){return ne(e.Yr,t.Yr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Re(Me.$r)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Rw(a,t,n,i);this.mutationQueue.push(l);for(const c of i)this.Zr=this.Zr.add(new Me(c.key,a)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(l)}lookupMutationBatch(e,t){return C.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ei(n),a=i<0?0:i;return C.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Lo:this.tr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Me(t,0),i=new Me(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([n,i],(l=>{const c=this.Xr(l.Yr);a.push(c)})),C.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Re(ne);return t.forEach((i=>{const a=new Me(i,0),l=new Me(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,l],(c=>{n=n.add(c.Yr)}))})),C.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let a=n;$.isDocumentKey(a)||(a=a.child(""));const l=new Me(new $(a),0);let c=new Re(ne);return this.Zr.forEachWhile((h=>{const m=h.key.path;return!!n.isPrefixOf(m)&&(m.length===i&&(c=c.add(h.Yr)),!0)}),l),C.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((n=>{const i=this.Xr(n);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){he(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return C.forEach(t.mutations,(i=>{const a=new Me(i.key,t.batchId);return n=n.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=n}))}ir(e){}containsKey(e,t){const n=new Me(t,0),i=this.Zr.firstAfterOrEqual(n);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this.ri=e,this.docs=(function(){return new we($.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),a=i?i.size:0,l=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return C.resolve(n?n.document.mutableCopy():Ge.newInvalidDocument(t))}getEntries(e,t){let n=Mt();return t.forEach((i=>{const a=this.docs.get(i);n=n.insert(i,a?a.document.mutableCopy():Ge.newInvalidDocument(i))})),C.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let a=Mt();const l=t.path,c=new $(l.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:m,value:{document:f}}=h.getNext();if(!l.isPrefixOf(m.path))break;m.path.length>l.length+1||zb(Hb(f),n)<=0||(i.has(f.key)||Wi(t,f))&&(a=a.insert(f.key,f.mutableCopy()))}return C.resolve(a)}getAllFromCollectionGroup(e,t,n,i){z(9500)}ii(e,t){return C.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new bv(this)}getSize(e){return C.resolve(this.size)}}class bv extends hv{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(n)})),C.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.persistence=e,this.si=new Ps((t=>Uo(t)),Bo),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.oi=0,this._i=new Go,this.targetCount=0,this.ai=nn.ur()}forEachTarget(e,t){return this.si.forEach(((n,i)=>t(i))),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),C.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new nn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Pr(t),C.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,n){let i=0;const a=[];return this.si.forEach(((l,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.si.delete(l),a.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),C.waitFor(a).next((()=>i))}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return C.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),C.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach((l=>{a.push(i.markPotentiallyOrphaned(e,l))})),C.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return C.resolve(n)}containsKey(e,t){return C.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ui(0),this.li=!1,this.li=!0,this.hi=new gv,this.referenceDelegate=e(this),this.Pi=new wv(this),this.indexManager=new rv,this.remoteDocumentCache=(function(i){return new yv(i)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new sv(t),this.Ii=new fv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new pv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new xv(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){U("MemoryPersistence","Starting transaction:",e);const i=new vv(this.ci.next());return this.referenceDelegate.Ei(),n(i).next((a=>this.referenceDelegate.di(i).next((()=>a)))).toPromise().then((a=>(i.raiseOnCommittedEvent(),a)))}Ai(e,t){return C.or(Object.values(this.ui).map((n=>()=>n.containsKey(e,t))))}}class vv extends Kb{constructor(e){super(),this.currentSequenceNumber=e}}class Ko{constructor(e){this.persistence=e,this.Ri=new Go,this.Vi=null}static mi(e){return new Ko(e)}get fi(){if(this.Vi)return this.Vi;throw z(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),C.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((a=>this.fi.add(a.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.fi,(n=>{const i=$.fromPath(n);return this.gi(e,i).next((a=>{a||t.removeEntry(i,Q.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class gi{constructor(e,t){this.persistence=e,this.pi=new Ps((n=>Jb(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=uv(this,t)}static mi(e,t){return new gi(e,t)}Ei(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((i=>n+i))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}pr(e,t){return C.forEach(this.pi,((n,i)=>this.br(e,n,i).next((a=>a?C.resolve():t(i)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ii(e,(l=>this.br(e,l,t).next((c=>{c||(n++,a.removeEntry(l,Q.min()))})))).next((()=>a.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),C.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Wr(e.data.value)),t}br(e,t,n){return C.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return C.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=i}static As(e,t){let n=re(),i=re();for(const a of t.docChanges)switch(a.type){case 0:n=n.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new Qo(e,t.fromCache,n,i)}}/**
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
 */class _v{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Xg()?8:Qb(Qe())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,i){const a={result:null};return this.ys(e,t).next((l=>{a.result=l})).next((()=>{if(!a.result)return this.ws(e,t,i,n).next((l=>{a.result=l}))})).next((()=>{if(a.result)return;const l=new _v;return this.Ss(e,t,l).next((c=>{if(a.result=c,this.Vs)return this.bs(e,t,l,c.size)}))})).next((()=>a.result))}bs(e,t,n,i){return n.documentReadCount<this.fs?(Us()<=se.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Bs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),C.resolve()):(Us()<=se.DEBUG&&U("QueryEngine","Query:",Bs(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.gs*i?(Us()<=se.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Bs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_t(t))):C.resolve())}ys(e,t){if(wu(t))return C.resolve(null);let n=_t(t);return this.indexManager.getIndexType(e,n).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=ho(t,null,"F"),n=_t(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((a=>{const l=re(...a);return this.ps.getDocuments(e,l).next((c=>this.indexManager.getMinOffset(e,n).next((h=>{const m=this.Ds(t,c);return this.Cs(t,m,l,h.readTime)?this.ys(e,ho(t,null,"F")):this.vs(e,m,t,h)}))))})))))}ws(e,t,n,i){return wu(t)||i.isEqual(Q.min())?C.resolve(null):this.ps.getDocuments(e,n).next((a=>{const l=this.Ds(t,a);return this.Cs(t,l,n,i)?C.resolve(null):(Us()<=se.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bs(t)),this.vs(e,l,t,Wb(i,Zn)).next((c=>c)))}))}Ds(e,t){let n=new Re(Kd(e));return t.forEach(((i,a)=>{Wi(e,a)&&(n=n.add(a))})),n}Cs(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}Ss(e,t,n){return Us()<=se.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Bs(t)),this.ps.getDocumentsMatchingQuery(e,t,rs.min(),n)}vs(e,t,n,i){return this.ps.getDocumentsMatchingQuery(e,n,i).next((a=>(t.forEach((l=>{a=a.insert(l.key,l)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="LocalStore",Ev=3e8;class Iv{constructor(e,t,n,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new we(ne),this.xs=new Ps((a=>Uo(a)),Bo),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mv(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Tv(s,e,t,n){return new Iv(s,e,t,n)}async function ym(s,e){const t=J(s);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next((a=>(i=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(n)))).next((a=>{const l=[],c=[];let h=re();for(const m of i){l.push(m.batchId);for(const f of m.mutations)h=h.add(f.key)}for(const m of a){c.push(m.batchId);for(const f of m.mutations)h=h.add(f.key)}return t.localDocuments.getDocuments(n,h).next((m=>({Ls:m,removedBatchIds:l,addedBatchIds:c})))}))}))}function jv(s,e){const t=J(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const i=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,h,m,f){const x=m.batch,v=x.keys();let I=C.resolve();return v.forEach((S=>{I=I.next((()=>f.getEntry(h,S))).next((P=>{const R=m.docVersions.get(S);he(R!==null,48541),P.version.compareTo(R)<0&&(x.applyToRemoteDocument(P,m),P.isValidDocument()&&(P.setReadTime(m.commitVersion),f.addEntry(P)))}))})),I.next((()=>c.mutationQueue.removeMutationBatch(h,x)))})(t,n,e,a).next((()=>a.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(c){let h=re();for(let m=0;m<c.mutationResults.length;++m)c.mutationResults[m].transformResults.length>0&&(h=h.add(c.batch.mutations[m].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(n,i)))}))}function bm(s){const e=J(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Av(s,e){const t=J(s),n=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const l=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const c=[];e.targetChanges.forEach(((f,x)=>{const v=i.get(x);if(!v)return;c.push(t.Pi.removeMatchingKeys(a,f.removedDocuments,x).next((()=>t.Pi.addMatchingKeys(a,f.addedDocuments,x))));let I=v.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(x)!==null?I=I.withResumeToken(Be.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,n)),i=i.insert(x,I),(function(P,R,O){return P.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=Ev?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0})(v,I,f)&&c.push(t.Pi.updateTargetData(a,I))}));let h=Mt(),m=re();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(a,f))})),c.push(Sv(a,l,e.documentUpdates).next((f=>{h=f.ks,m=f.qs}))),!n.isEqual(Q.min())){const f=t.Pi.getLastRemoteSnapshotVersion(a).next((x=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,n)));c.push(f)}return C.waitFor(c).next((()=>l.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,h,m))).next((()=>h))})).then((a=>(t.Ms=i,a)))}function Sv(s,e,t){let n=re(),i=re();return t.forEach((a=>n=n.add(a))),e.getEntries(s,n).next((a=>{let l=Mt();return t.forEach(((c,h)=>{const m=a.get(c);h.isFoundDocument()!==m.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(Q.min())?(e.removeEntry(c,h.readTime),l=l.insert(c,h)):!m.isValidDocument()||h.version.compareTo(m.version)>0||h.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(h),l=l.insert(c,h)):U(Yo,"Ignoring outdated watch update for ",c,". Current version:",m.version," Watch version:",h.version)})),{ks:l,qs:i}}))}function kv(s,e){const t=J(s);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Lo),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function Cv(s,e){const t=J(s);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return t.Pi.getTargetData(n,e).next((a=>a?(i=a,C.resolve(i)):t.Pi.allocateTargetId(n).next((l=>(i=new Jt(e,l,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=t.Ms.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n}))}async function xo(s,e,t){const n=J(s),i=n.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",a,(l=>n.persistence.referenceDelegate.removeTarget(l,i)))}catch(l){if(!dn(l))throw l;U(Yo,`Failed to update sequence numbers for target ${e}: ${l}`)}n.Ms=n.Ms.remove(e),n.xs.delete(i.target)}function Pu(s,e,t){const n=J(s);let i=Q.min(),a=re();return n.persistence.runTransaction("Execute query","readwrite",(l=>(function(h,m,f){const x=J(h),v=x.xs.get(f);return v!==void 0?C.resolve(x.Ms.get(v)):x.Pi.getTargetData(m,f)})(n,l,_t(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(l,c.targetId).next((h=>{a=h}))})).next((()=>n.Fs.getDocumentsMatchingQuery(l,e,t?i:Q.min(),t?a:re()))).next((c=>(Rv(n,gw(e),c),{documents:c,Qs:a})))))}function Rv(s,e,t){let n=s.Os.get(e)||Q.min();t.forEach(((i,a)=>{a.readTime.compareTo(n)>0&&(n=a.readTime)})),s.Os.set(e,n)}class Du{constructor(){this.activeTargetIds=_w()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Pv{constructor(){this.Mo=new Du,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Du,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="ConnectivityMonitor";class Mu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){U(Vu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){U(Vu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vr=null;function yo(){return Vr===null?Vr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Vr++,"0x"+Vr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="RestConnection",Vv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Mv{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${i}`,this.Wo=this.databaseId.database===hi?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Go(e,t,n,i,a){const l=yo(),c=this.zo(e,t.toUriEncodedString());U(Da,`Sending RPC '${e}' ${l}:`,c,n);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,i,a);const{host:m}=new URL(c),f=an(m);return this.Jo(e,c,h,n,f).then((x=>(U(Da,`Received RPC '${e}' ${l}: `,x),x)),(x=>{throw Zs(Da,`RPC '${e}' ${l} failed with error: `,x,"url: ",c,"request:",n),x}))}Ho(e,t,n,i,a,l){return this.Go(e,t,n,i,a)}jo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+un})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,a)=>e[a]=i)),n&&n.headers.forEach(((i,a)=>e[a]=i))}zo(e,t){const n=Vv[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="WebChannelConnection";class Ov extends Mv{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,i,a){const l=yo();return new Promise(((c,h)=>{const m=new vd;m.setWithCredentials(!0),m.listenOnce(_d.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case $r.NO_ERROR:const x=m.getResponseJson();U(He,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(x)),c(x);break;case $r.TIMEOUT:U(He,`RPC '${e}' ${l} timed out`),h(new F(k.DEADLINE_EXCEEDED,"Request time out"));break;case $r.HTTP_ERROR:const v=m.getStatus();if(U(He,`RPC '${e}' ${l} failed with status:`,v,"response text:",m.getResponseText()),v>0){let I=m.getResponseJson();Array.isArray(I)&&(I=I[0]);const S=I==null?void 0:I.error;if(S&&S.status&&S.message){const P=(function(O){const D=O.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(D)>=0?D:k.UNKNOWN})(S.status);h(new F(P,S.message))}else h(new F(k.UNKNOWN,"Server responded with status "+m.getStatus()))}else h(new F(k.UNAVAILABLE,"Connection failed."));break;default:z(9055,{l_:e,streamId:l,h_:m.getLastErrorCode(),P_:m.getLastError()})}}finally{U(He,`RPC '${e}' ${l} completed.`)}}));const f=JSON.stringify(i);U(He,`RPC '${e}' ${l} sending request:`,i),m.send(t,"POST",f,n,15)}))}T_(e,t,n){const i=yo(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=Id(),c=Ed(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(h.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,n),h.encodeInitMessageHeaders=!0;const f=a.join("");U(He,`Creating RPC '${e}' stream ${i}: ${f}`,h);const x=l.createWebChannel(f,h);this.I_(x);let v=!1,I=!1;const S=new Lv({Yo:R=>{I?U(He,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(v||(U(He,`Opening RPC '${e}' stream ${i} transport.`),x.open(),v=!0),U(He,`RPC '${e}' stream ${i} sending:`,R),x.send(R))},Zo:()=>x.close()}),P=(R,O,D)=>{R.listen(O,(B=>{try{D(B)}catch(Y){setTimeout((()=>{throw Y}),0)}}))};return P(x,On.EventType.OPEN,(()=>{I||(U(He,`RPC '${e}' stream ${i} transport opened.`),S.o_())})),P(x,On.EventType.CLOSE,(()=>{I||(I=!0,U(He,`RPC '${e}' stream ${i} transport closed`),S.a_(),this.E_(x))})),P(x,On.EventType.ERROR,(R=>{I||(I=!0,Zs(He,`RPC '${e}' stream ${i} transport errored. Name:`,R.name,"Message:",R.message),S.a_(new F(k.UNAVAILABLE,"The operation could not be completed")))})),P(x,On.EventType.MESSAGE,(R=>{var O;if(!I){const D=R.data[0];he(!!D,16349);const B=D,Y=(B==null?void 0:B.error)||((O=B[0])==null?void 0:O.error);if(Y){U(He,`RPC '${e}' stream ${i} received error:`,Y);const le=Y.status;let ee=(function(g){const w=Te[g];if(w!==void 0)return am(w)})(le),N=Y.message;ee===void 0&&(ee=k.INTERNAL,N="Unknown error status: "+le+" with message "+Y.message),I=!0,S.a_(new F(ee,N)),x.close()}else U(He,`RPC '${e}' stream ${i} received:`,D),S.u_(D)}})),P(c,Nd.STAT_EVENT,(R=>{R.stat===ro.PROXY?U(He,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===ro.NOPROXY&&U(He,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{S.__()}),0),S}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Va(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(s){return new qw(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t,n=1e3,i=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=i,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-n);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="PersistentStream";class vm{constructor(e,t,n,i,a,l,c,h){this.Mi=e,this.S_=n,this.b_=i,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new wm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.D_===t&&this.G_(n,i)}),(n=>{e((()=>{const i=new F(k.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(i)}))}))}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{n((()=>this.z_(i)))})),this.stream.onMessage((i=>{n((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return U(Lu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(U(Lu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Fv extends vm{constructor(e,t,n,i,a,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,l),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Hw(this.serializer,e),n=(function(a){if(!("targetChange"in a))return Q.min();const l=a.targetChange;return l.targetIds&&l.targetIds.length?Q.min():l.readTime?Nt(l.readTime):Q.min()})(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=go(this.serializer),t.addTarget=(function(a,l){let c;const h=l.target;if(c=co(h)?{documents:Kw(a,h)}:{query:Qw(a,h).ft},c.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){c.resumeToken=cm(a,l.resumeToken);const m=mo(a,l.expectedCount);m!==null&&(c.expectedCount=m)}else if(l.snapshotVersion.compareTo(Q.min())>0){c.readTime=pi(a,l.snapshotVersion.toTimestamp());const m=mo(a,l.expectedCount);m!==null&&(c.expectedCount=m)}return c})(this.serializer,e);const n=Jw(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=go(this.serializer),t.removeTarget=e,this.q_(t)}}class Uv extends vm{constructor(e,t,n,i,a,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,l),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return he(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){he(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Gw(e.writeResults,e.commitTime),n=Nt(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=go(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>zw(this.serializer,n)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{}class qv extends Bv{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new F(k.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Go(e,fo(t,n),i,a,l))).catch((a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(k.UNKNOWN,a.toString())}))}Ho(e,t,n,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Ho(e,fo(t,n),i,l,c,a))).catch((l=>{throw l.name==="FirebaseError"?(l.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new F(k.UNKNOWN,l.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class $v{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Vt(t),this.aa=!1):U("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="RemoteStore";class Wv{constructor(e,t,n,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((l=>{n.enqueueAndForget((async()=>{Vs(this)&&(U(js,"Restarting streams for network reachability change."),await(async function(h){const m=J(h);m.Ea.add(4),await fr(m),m.Ra.set("Unknown"),m.Ea.delete(4),await Yi(m)})(this))}))})),this.Ra=new $v(n,i)}}async function Yi(s){if(Vs(s))for(const e of s.da)await e(!0)}async function fr(s){for(const e of s.da)await e(!1)}function _m(s,e){const t=J(s);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),el(t)?Zo(t):fn(t).O_()&&Xo(t,e))}function Jo(s,e){const t=J(s),n=fn(t);t.Ia.delete(e),n.O_()&&Nm(t,e),t.Ia.size===0&&(n.O_()?n.L_():Vs(t)&&t.Ra.set("Unknown"))}function Xo(s,e){if(s.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fn(s).Y_(e)}function Nm(s,e){s.Va.Ue(e),fn(s).Z_(e)}function Zo(s){s.Va=new Ow({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),At:e=>s.Ia.get(e)||null,ht:()=>s.datastore.serializer.databaseId}),fn(s).start(),s.Ra.ua()}function el(s){return Vs(s)&&!fn(s).x_()&&s.Ia.size>0}function Vs(s){return J(s).Ea.size===0}function Em(s){s.Va=void 0}async function Hv(s){s.Ra.set("Online")}async function zv(s){s.Ia.forEach(((e,t)=>{Xo(s,e)}))}async function Gv(s,e){Em(s),el(s)?(s.Ra.ha(e),Zo(s)):s.Ra.set("Unknown")}async function Kv(s,e,t){if(s.Ra.set("Online"),e instanceof lm&&e.state===2&&e.cause)try{await(async function(i,a){const l=a.cause;for(const c of a.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,l),i.Ia.delete(c),i.Va.removeTarget(c))})(s,e)}catch(n){U(js,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await xi(s,n)}else if(e instanceof Gr?s.Va.Ze(e):e instanceof om?s.Va.st(e):s.Va.tt(e),!t.isEqual(Q.min()))try{const n=await bm(s.localStore);t.compareTo(n)>=0&&await(function(a,l){const c=a.Va.Tt(l);return c.targetChanges.forEach(((h,m)=>{if(h.resumeToken.approximateByteSize()>0){const f=a.Ia.get(m);f&&a.Ia.set(m,f.withResumeToken(h.resumeToken,l))}})),c.targetMismatches.forEach(((h,m)=>{const f=a.Ia.get(h);if(!f)return;a.Ia.set(h,f.withResumeToken(Be.EMPTY_BYTE_STRING,f.snapshotVersion)),Nm(a,h);const x=new Jt(f.target,h,m,f.sequenceNumber);Xo(a,x)})),a.remoteSyncer.applyRemoteEvent(c)})(s,t)}catch(n){U(js,"Failed to raise snapshot:",n),await xi(s,n)}}async function xi(s,e,t){if(!dn(e))throw e;s.Ea.add(1),await fr(s),s.Ra.set("Offline"),t||(t=()=>bm(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{U(js,"Retrying IndexedDB access"),await t(),s.Ea.delete(1),await Yi(s)}))}function Im(s,e){return e().catch((t=>xi(s,t,e)))}async function Ji(s){const e=J(s),t=ls(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Lo;for(;Qv(e);)try{const i=await kv(e.localStore,n);if(i===null){e.Ta.length===0&&t.L_();break}n=i.batchId,Yv(e,i)}catch(i){await xi(e,i)}Tm(e)&&jm(e)}function Qv(s){return Vs(s)&&s.Ta.length<10}function Yv(s,e){s.Ta.push(e);const t=ls(s);t.O_()&&t.X_&&t.ea(e.mutations)}function Tm(s){return Vs(s)&&!ls(s).x_()&&s.Ta.length>0}function jm(s){ls(s).start()}async function Jv(s){ls(s).ra()}async function Xv(s){const e=ls(s);for(const t of s.Ta)e.ea(t.mutations)}async function Zv(s,e,t){const n=s.Ta.shift(),i=Wo.from(n,e,t);await Im(s,(()=>s.remoteSyncer.applySuccessfulWrite(i))),await Ji(s)}async function e_(s,e){e&&ls(s).X_&&await(async function(n,i){if((function(l){return Vw(l)&&l!==k.ABORTED})(i.code)){const a=n.Ta.shift();ls(n).B_(),await Im(n,(()=>n.remoteSyncer.rejectFailedWrite(a.batchId,i))),await Ji(n)}})(s,e),Tm(s)&&jm(s)}async function Ou(s,e){const t=J(s);t.asyncQueue.verifyOperationInProgress(),U(js,"RemoteStore received new credentials");const n=Vs(t);t.Ea.add(3),await fr(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Yi(t)}async function t_(s,e){const t=J(s);e?(t.Ea.delete(2),await Yi(t)):e||(t.Ea.add(2),await fr(t),t.Ra.set("Unknown"))}function fn(s){return s.ma||(s.ma=(function(t,n,i){const a=J(t);return a.sa(),new Fv(n,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(s.datastore,s.asyncQueue,{Xo:Hv.bind(null,s),t_:zv.bind(null,s),r_:Gv.bind(null,s),H_:Kv.bind(null,s)}),s.da.push((async e=>{e?(s.ma.B_(),el(s)?Zo(s):s.Ra.set("Unknown")):(await s.ma.stop(),Em(s))}))),s.ma}function ls(s){return s.fa||(s.fa=(function(t,n,i){const a=J(t);return a.sa(),new Uv(n,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(s.datastore,s.asyncQueue,{Xo:()=>Promise.resolve(),t_:Jv.bind(null,s),r_:e_.bind(null,s),ta:Xv.bind(null,s),na:Zv.bind(null,s)}),s.da.push((async e=>{e?(s.fa.B_(),await Ji(s)):(await s.fa.stop(),s.Ta.length>0&&(U(js,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))}))),s.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t,n,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=a,this.deferred=new Ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,a){const l=Date.now()+n,c=new tl(e,t,l,i,a);return c.start(n),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sl(s,e){if(Vt("AsyncQueue",`${e}: ${s}`),dn(s))return new F(k.UNAVAILABLE,`${e}: ${s}`);throw s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{static emptySet(e){return new Ks(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||$.comparator(t.key,n.key):(t,n)=>$.comparator(t.key,n.key),this.keyedMap=Fn(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ks)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=n.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Ks;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this.ga=new we($.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):z(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class rn{constructor(e,t,n,i,a,l,c,h,m){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=a,this.fromCache=l,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=m}static fromInitialDocuments(e,t,n,i,a){const l=[];return t.forEach((c=>{l.push({type:0,doc:c})})),new rn(e,t,Ks.emptySet(t),l,n,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$i(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class n_{constructor(){this.queries=Uu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const i=J(t),a=i.queries;i.queries=Uu(),a.forEach(((l,c)=>{for(const h of c.Sa)h.onError(n)}))})(this,new F(k.ABORTED,"Firestore shutting down"))}}function Uu(){return new Ps((s=>Gd(s)),$i)}async function Am(s,e){const t=J(s);let n=3;const i=e.query;let a=t.queries.get(i);a?!a.ba()&&e.Da()&&(n=2):(a=new s_,n=e.Da()?0:1);try{switch(n){case 0:a.wa=await t.onListen(i,!0);break;case 1:a.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(l){const c=sl(l,`Initialization of query '${Bs(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&nl(t)}async function Sm(s,e){const t=J(s),n=e.query;let i=3;const a=t.queries.get(n);if(a){const l=a.Sa.indexOf(e);l>=0&&(a.Sa.splice(l,1),a.Sa.length===0?i=e.Da()?0:1:!a.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function r_(s,e){const t=J(s);let n=!1;for(const i of e){const a=i.query,l=t.queries.get(a);if(l){for(const c of l.Sa)c.Fa(i)&&(n=!0);l.wa=i}}n&&nl(t)}function i_(s,e,t){const n=J(s),i=n.queries.get(e);if(i)for(const a of i.Sa)a.onError(t);n.queries.delete(e)}function nl(s){s.Ca.forEach((e=>{e.next()}))}var bo,Bu;(Bu=bo||(bo={})).Ma="default",Bu.Cache="cache";class km{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new rn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=rn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==bo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e){this.key=e}}class Rm{constructor(e){this.key=e}}class a_{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=re(),this.mutatedKeys=re(),this.eu=Kd(e),this.tu=new Ks(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new Fu,i=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,l=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,m=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((f,x)=>{const v=i.get(f),I=Wi(this.query,x)?x:null,S=!!v&&this.mutatedKeys.has(v.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let R=!1;v&&I?v.data.isEqual(I.data)?S!==P&&(n.track({type:3,doc:I}),R=!0):this.su(v,I)||(n.track({type:2,doc:I}),R=!0,(h&&this.eu(I,h)>0||m&&this.eu(I,m)<0)&&(c=!0)):!v&&I?(n.track({type:0,doc:I}),R=!0):v&&!I&&(n.track({type:1,doc:v}),R=!0,(h||m)&&(c=!0)),R&&(I?(l=l.add(I),a=P?a.add(f):a.delete(f)):(l=l.delete(f),a=a.delete(f)))})),this.query.limit!==null)for(;l.size>this.query.limit;){const f=this.query.limitType==="F"?l.last():l.first();l=l.delete(f.key),a=a.delete(f.key),n.track({type:1,doc:f})}return{tu:l,iu:n,Cs:c,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const l=e.iu.ya();l.sort(((f,x)=>(function(I,S){const P=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{Rt:R})}};return P(I)-P(S)})(f.type,x.type)||this.eu(f.doc,x.doc))),this.ou(n),i=i??!1;const c=t&&!i?this._u():[],h=this.Xa.size===0&&this.current&&!i?1:0,m=h!==this.Za;return this.Za=h,l.length!==0||m?{snapshot:new rn(this.query,e.tu,a,l,e.mutatedKeys,h===0,m,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Fu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=re(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const t=[];return e.forEach((n=>{this.Xa.has(n)||t.push(new Rm(n))})),this.Xa.forEach((n=>{e.has(n)||t.push(new Cm(n))})),t}cu(e){this.Ya=e.Qs,this.Xa=re();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return rn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const rl="SyncEngine";class o_{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class l_{constructor(e){this.key=e,this.hu=!1}}class c_{constructor(e,t,n,i,a,l){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new Ps((c=>Gd(c)),$i),this.Iu=new Map,this.Eu=new Set,this.du=new we($.comparator),this.Au=new Map,this.Ru=new Go,this.Vu={},this.mu=new Map,this.fu=nn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function u_(s,e,t=!0){const n=Om(s);let i;const a=n.Tu.get(e);return a?(n.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await Pm(n,e,t,!0),i}async function h_(s,e){const t=Om(s);await Pm(t,e,!0,!1)}async function Pm(s,e,t,n){const i=await Cv(s.localStore,_t(e)),a=i.targetId,l=s.sharedClientState.addLocalQueryTarget(a,t);let c;return n&&(c=await d_(s,e,a,l==="current",i.resumeToken)),s.isPrimaryClient&&t&&_m(s.remoteStore,i),c}async function d_(s,e,t,n,i){s.pu=(x,v,I)=>(async function(P,R,O,D){let B=R.view.ru(O);B.Cs&&(B=await Pu(P.localStore,R.query,!1).then((({documents:N})=>R.view.ru(N,B))));const Y=D&&D.targetChanges.get(R.targetId),le=D&&D.targetMismatches.get(R.targetId)!=null,ee=R.view.applyChanges(B,P.isPrimaryClient,Y,le);return $u(P,R.targetId,ee.au),ee.snapshot})(s,x,v,I);const a=await Pu(s.localStore,e,!0),l=new a_(e,a.Qs),c=l.ru(a.documents),h=mr.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",i),m=l.applyChanges(c,s.isPrimaryClient,h);$u(s,t,m.au);const f=new o_(e,t,l);return s.Tu.set(e,f),s.Iu.has(t)?s.Iu.get(t).push(e):s.Iu.set(t,[e]),m.snapshot}async function m_(s,e,t){const n=J(s),i=n.Tu.get(e),a=n.Iu.get(i.targetId);if(a.length>1)return n.Iu.set(i.targetId,a.filter((l=>!$i(l,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await xo(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),t&&Jo(n.remoteStore,i.targetId),wo(n,i.targetId)})).catch(hn)):(wo(n,i.targetId),await xo(n.localStore,i.targetId,!0))}async function f_(s,e){const t=J(s),n=t.Tu.get(e),i=t.Iu.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Jo(t.remoteStore,n.targetId))}async function p_(s,e,t){const n=__(s);try{const i=await(function(l,c){const h=J(l),m=ye.now(),f=c.reduce(((I,S)=>I.add(S.key)),re());let x,v;return h.persistence.runTransaction("Locally write mutations","readwrite",(I=>{let S=Mt(),P=re();return h.Ns.getEntries(I,f).next((R=>{S=R,S.forEach(((O,D)=>{D.isValidDocument()||(P=P.add(O))}))})).next((()=>h.localDocuments.getOverlayedDocuments(I,S))).next((R=>{x=R;const O=[];for(const D of c){const B=kw(D,x.get(D.key).overlayedDocument);B!=null&&O.push(new Ds(D.key,B,Fd(B.value.mapValue),Rt.exists(!0)))}return h.mutationQueue.addMutationBatch(I,m,O,c)})).next((R=>{v=R;const O=R.applyToLocalDocumentSet(x,P);return h.documentOverlayCache.saveOverlays(I,R.batchId,O)}))})).then((()=>({batchId:v.batchId,changes:Yd(x)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),(function(l,c,h){let m=l.Vu[l.currentUser.toKey()];m||(m=new we(ne)),m=m.insert(c,h),l.Vu[l.currentUser.toKey()]=m})(n,i.batchId,t),await pr(n,i.changes),await Ji(n.remoteStore)}catch(i){const a=sl(i,"Failed to persist write");t.reject(a)}}async function Dm(s,e){const t=J(s);try{const n=await Av(t.localStore,e);e.targetChanges.forEach(((i,a)=>{const l=t.Au.get(a);l&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?l.hu=!0:i.modifiedDocuments.size>0?he(l.hu,14607):i.removedDocuments.size>0&&(he(l.hu,42227),l.hu=!1))})),await pr(t,n,e)}catch(n){await hn(n)}}function qu(s,e,t){const n=J(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Tu.forEach(((a,l)=>{const c=l.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(l,c){const h=J(l);h.onlineState=c;let m=!1;h.queries.forEach(((f,x)=>{for(const v of x.Sa)v.va(c)&&(m=!0)})),m&&nl(h)})(n.eventManager,e),i.length&&n.Pu.H_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function g_(s,e,t){const n=J(s);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Au.get(e),a=i&&i.key;if(a){let l=new we($.comparator);l=l.insert(a,Ge.newNoDocument(a,Q.min()));const c=re().add(a),h=new Ki(Q.min(),new Map,new we(ne),l,c);await Dm(n,h),n.du=n.du.remove(a),n.Au.delete(e),il(n)}else await xo(n.localStore,e,!1).then((()=>wo(n,e,t))).catch(hn)}async function x_(s,e){const t=J(s),n=e.batch.batchId;try{const i=await jv(t.localStore,e);Mm(t,n,null),Vm(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await pr(t,i)}catch(i){await hn(i)}}async function y_(s,e,t){const n=J(s);try{const i=await(function(l,c){const h=J(l);return h.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let f;return h.mutationQueue.lookupMutationBatch(m,c).next((x=>(he(x!==null,37113),f=x.keys(),h.mutationQueue.removeMutationBatch(m,x)))).next((()=>h.mutationQueue.performConsistencyCheck(m))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(m,f,c))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,f))).next((()=>h.localDocuments.getDocuments(m,f)))}))})(n.localStore,e);Mm(n,e,t),Vm(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await pr(n,i)}catch(i){await hn(i)}}function Vm(s,e){(s.mu.get(e)||[]).forEach((t=>{t.resolve()})),s.mu.delete(e)}function Mm(s,e,t){const n=J(s);let i=n.Vu[n.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),n.Vu[n.currentUser.toKey()]=i}}function wo(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Iu.get(e))s.Tu.delete(n),t&&s.Pu.yu(n,t);s.Iu.delete(e),s.isPrimaryClient&&s.Ru.jr(e).forEach((n=>{s.Ru.containsKey(n)||Lm(s,n)}))}function Lm(s,e){s.Eu.delete(e.path.canonicalString());const t=s.du.get(e);t!==null&&(Jo(s.remoteStore,t),s.du=s.du.remove(e),s.Au.delete(t),il(s))}function $u(s,e,t){for(const n of t)n instanceof Cm?(s.Ru.addReference(n.key,e),b_(s,n)):n instanceof Rm?(U(rl,"Document no longer in limbo: "+n.key),s.Ru.removeReference(n.key,e),s.Ru.containsKey(n.key)||Lm(s,n.key)):z(19791,{wu:n})}function b_(s,e){const t=e.key,n=t.path.canonicalString();s.du.get(t)||s.Eu.has(n)||(U(rl,"New document in limbo: "+t),s.Eu.add(n),il(s))}function il(s){for(;s.Eu.size>0&&s.du.size<s.maxConcurrentLimboResolutions;){const e=s.Eu.values().next().value;s.Eu.delete(e);const t=new $(ge.fromString(e)),n=s.fu.next();s.Au.set(n,new l_(t)),s.du=s.du.insert(t,n),_m(s.remoteStore,new Jt(_t(qo(t.path)),n,"TargetPurposeLimboResolution",Ui.ce))}}async function pr(s,e,t){const n=J(s),i=[],a=[],l=[];n.Tu.isEmpty()||(n.Tu.forEach(((c,h)=>{l.push(n.pu(h,e,t).then((m=>{var f;if((m||t)&&n.isPrimaryClient){const x=m?!m.fromCache:(f=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:f.current;n.sharedClientState.updateQueryState(h.targetId,x?"current":"not-current")}if(m){i.push(m);const x=Qo.As(h.targetId,m);a.push(x)}})))})),await Promise.all(l),n.Pu.H_(i),await(async function(h,m){const f=J(h);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>C.forEach(m,(v=>C.forEach(v.Es,(I=>f.persistence.referenceDelegate.addReference(x,v.targetId,I))).next((()=>C.forEach(v.ds,(I=>f.persistence.referenceDelegate.removeReference(x,v.targetId,I)))))))))}catch(x){if(!dn(x))throw x;U(Yo,"Failed to update sequence numbers: "+x)}for(const x of m){const v=x.targetId;if(!x.fromCache){const I=f.Ms.get(v),S=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(S);f.Ms=f.Ms.insert(v,P)}}})(n.localStore,a))}async function w_(s,e){const t=J(s);if(!t.currentUser.isEqual(e)){U(rl,"User change. New user:",e.toKey());const n=await ym(t.localStore,e);t.currentUser=e,(function(a,l){a.mu.forEach((c=>{c.forEach((h=>{h.reject(new F(k.CANCELLED,l))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await pr(t,n.Ls)}}function v_(s,e){const t=J(s),n=t.Au.get(e);if(n&&n.hu)return re().add(n.key);{let i=re();const a=t.Iu.get(e);if(!a)return i;for(const l of a){const c=t.Tu.get(l);i=i.unionWith(c.view.nu)}return i}}function Om(s){const e=J(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=v_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=g_.bind(null,e),e.Pu.H_=r_.bind(null,e.eventManager),e.Pu.yu=i_.bind(null,e.eventManager),e}function __(s){const e=J(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=x_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=y_.bind(null,e),e}class yi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Tv(this.persistence,new Nv,e.initialUser,this.serializer)}Cu(e){return new xm(Ko.mi,this.serializer)}Du(e){return new Pv}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yi.provider={build:()=>new yi};class N_ extends yi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){he(this.persistence.referenceDelegate instanceof gi,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new lv(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ze.withCacheSize(this.cacheSizeBytes):Ze.DEFAULT;return new xm((n=>gi.mi(n,t)),this.serializer)}}class vo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>qu(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=w_.bind(null,this.syncEngine),await t_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new n_})()}createDatastore(e){const t=Qi(e.databaseInfo.databaseId),n=(function(a){return new Ov(a)})(e.databaseInfo);return(function(a,l,c,h){return new qv(a,l,c,h)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,i,a,l,c){return new Wv(n,i,a,l,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>qu(this.syncEngine,t,0)),(function(){return Mu.v()?new Mu:new Dv})())}createSyncEngine(e,t){return(function(i,a,l,c,h,m,f){const x=new c_(i,a,l,c,h,m);return f&&(x.gu=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const a=J(i);U(js,"RemoteStore shutting down."),a.Ea.add(5),await fr(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}vo.provider={build:()=>new vo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="FirestoreClient";class E_{constructor(e,t,n,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=Mo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(n,(async l=>{U(cs,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l})),this.appCheckCredentials.start(n,(l=>(U(cs,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=sl(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Ma(s,e){s.asyncQueue.verifyOperationInProgress(),U(cs,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener((async i=>{n.isEqual(i)||(await ym(e.localStore,i),n=i)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function Wu(s,e){s.asyncQueue.verifyOperationInProgress();const t=await I_(s);U(cs,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener((n=>Ou(e.remoteStore,n))),s.setAppCheckTokenChangeListener(((n,i)=>Ou(e.remoteStore,i))),s._onlineComponents=e}async function I_(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){U(cs,"Using user provided OfflineComponentProvider");try{await Ma(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===k.FAILED_PRECONDITION||i.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Zs("Error using user provided cache. Falling back to memory cache: "+t),await Ma(s,new yi)}}else U(cs,"Using default OfflineComponentProvider"),await Ma(s,new N_(void 0));return s._offlineComponents}async function Um(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(U(cs,"Using user provided OnlineComponentProvider"),await Wu(s,s._uninitializedComponentsProvider._online)):(U(cs,"Using default OnlineComponentProvider"),await Wu(s,new vo))),s._onlineComponents}function T_(s){return Um(s).then((e=>e.syncEngine))}async function Bm(s){const e=await Um(s),t=e.eventManager;return t.onListen=u_.bind(null,e.syncEngine),t.onUnlisten=m_.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=h_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=f_.bind(null,e.syncEngine),t}function j_(s,e,t={}){const n=new Ct;return s.asyncQueue.enqueueAndForget((async()=>(function(a,l,c,h,m){const f=new Fm({next:v=>{f.Nu(),l.enqueueAndForget((()=>Sm(a,x)));const I=v.docs.has(c);!I&&v.fromCache?m.reject(new F(k.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&v.fromCache&&h&&h.source==="server"?m.reject(new F(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(v)},error:v=>m.reject(v)}),x=new km(qo(c.path),f,{includeMetadataChanges:!0,qa:!0});return Am(a,x)})(await Bm(s),s.asyncQueue,e,t,n))),n.promise}function A_(s,e,t={}){const n=new Ct;return s.asyncQueue.enqueueAndForget((async()=>(function(a,l,c,h,m){const f=new Fm({next:v=>{f.Nu(),l.enqueueAndForget((()=>Sm(a,x))),v.fromCache&&h.source==="server"?m.reject(new F(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(v)},error:v=>m.reject(v)}),x=new km(c,f,{includeMetadataChanges:!0,qa:!0});return Am(a,x)})(await Bm(s),s.asyncQueue,e,t,n))),n.promise}/**
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
 */function qm(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="firestore.googleapis.com",zu=!0;class Gu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$m,this.ssl=zu}else this.host=e.host,this.ssl=e.ssl??zu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<av)throw new F(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$b("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qm(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new F(k.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xi{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Pb;switch(n.type){case"firstParty":return new Lb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Hu.get(t);n&&(U("ComponentProvider","Removing Datastore"),Hu.delete(t),n.terminate())})(this),Promise.resolve()}}function S_(s,e,t,n={}){var m;s=Ts(s,Xi);const i=an(e),a=s._getSettings(),l={...a,emulatorOptions:s._getEmulatorOptions()},c=`${e}:${t}`;i&&(kh(`https://${c}`),Ch("Firestore",!0)),a.host!==$m&&a.host!==c&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...a,host:c,ssl:i,emulatorOptions:n};if(!ns(h,l)&&(s._setSettings(h),n.mockUserToken)){let f,x;if(typeof n.mockUserToken=="string")f=n.mockUserToken,x=ze.MOCK_USER;else{f=Wg(n.mockUserToken,(m=s._app)==null?void 0:m.options.projectId);const v=n.mockUserToken.sub||n.mockUserToken.user_id;if(!v)throw new F(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");x=new ze(v)}s._authCredentials=new Db(new jd(f,x))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ms(this.firestore,e,this._query)}}class Se{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ss(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Se(this.firestore,e,this._key)}toJSON(){return{type:Se._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(dr(t,Se._jsonSchema))return new Se(e,n||null,new $(ge.fromString(t.referencePath)))}}Se._jsonSchemaVersion="firestore/documentReference/1.0",Se._jsonSchema={type:Ae("string",Se._jsonSchemaVersion),referencePath:Ae("string")};class ss extends Ms{constructor(e,t,n){super(e,t,qo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Se(this.firestore,null,new $(e))}withConverter(e){return new ss(this.firestore,e,this._path)}}function or(s,e,...t){if(s=Ee(s),Ad("collection","path",e),s instanceof Xi){const n=ge.fromString(e,...t);return au(n),new ss(s,null,n)}{if(!(s instanceof Se||s instanceof ss))throw new F(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(ge.fromString(e,...t));return au(n),new ss(s.firestore,null,n)}}function Le(s,e,...t){if(s=Ee(s),arguments.length===1&&(e=Mo.newId()),Ad("doc","path",e),s instanceof Xi){const n=ge.fromString(e,...t);return iu(n),new Se(s,null,new $(n))}{if(!(s instanceof Se||s instanceof ss))throw new F(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(ge.fromString(e,...t));return iu(n),new Se(s.firestore,s instanceof ss?s.converter:null,new $(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="AsyncQueue";class Qu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new wm(this,"async_queue_retry"),this._c=()=>{const n=Va();n&&U(Ku,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Va();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Va();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ct;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!dn(e))throw e;U(Ku,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,Vt("INTERNAL UNHANDLED ERROR: ",Yu(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=tl.createAndSchedule(this,e,t,n,(a=>this.hc(a)));return this.tc.push(i),i}uc(){this.nc&&z(47125,{Pc:Yu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Yu(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class Zi extends Xi{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Qu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qu(e),this._firestoreClient=void 0,await e}}}function k_(s,e){const t=typeof s=="object"?s:To(),n=typeof s=="string"?s:hi,i=Cs(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const a=qg("firestore");a&&S_(i,...a)}return i}function al(s){if(s._terminated)throw new F(k.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||C_(s),s._firestoreClient}function C_(s){var n,i,a;const e=s._freezeSettings(),t=(function(c,h,m,f){return new ew(c,h,m,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,qm(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(s._databaseId,((n=s._app)==null?void 0:n.options.appId)||"",s._persistenceKey,e);s._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new E_(s._authCredentials,s._appCheckCredentials,s._queue,t,s._componentsProvider&&(function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}})(s._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this._byteString=e}static fromBase64String(e){try{return new it(Be.fromBase64String(e))}catch(t){throw new F(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new it(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:it._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(dr(e,it._jsonSchema))return it.fromBase64String(e.bytes)}}it._jsonSchemaVersion="firestore/bytes/1.0",it._jsonSchema={type:Ae("string",it._jsonSchemaVersion),bytes:Ae("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Et._jsonSchemaVersion}}static fromJSON(e){if(dr(e,Et._jsonSchema))return new Et(e.latitude,e.longitude)}}Et._jsonSchemaVersion="firestore/geoPoint/1.0",Et._jsonSchema={type:Ae("string",Et._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
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
 */class It{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,i){if(n.length!==i.length)return!1;for(let a=0;a<n.length;++a)if(n[a]!==i[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:It._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(dr(e,It._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new It(e.vectorValues);throw new F(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}It._jsonSchemaVersion="firestore/vectorValue/1.0",It._jsonSchema={type:Ae("string",It._jsonSchemaVersion),vectorValues:Ae("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=/^__.*__$/;class Wm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ds(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hm(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{Ac:s})}}class ol{constructor(e,t,n,i,a,l){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ol({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return bi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Hm(this.Ac)&&R_.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class P_{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Qi(e)}Cc(e,t,n,i=!1){return new ol({Ac:e,methodName:t,Dc:n,path:Fe.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zm(s){const e=s._freezeSettings(),t=Qi(s._databaseId);return new P_(s._databaseId,!!e.ignoreUndefinedProperties,t)}class sa extends ta{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sa}}class ll extends ta{_toFieldTransform(e){return new Tw(e.path,new rr)}isEqual(e){return e instanceof ll}}function D_(s,e,t,n){const i=s.Cc(1,e,t);Km("Data must be an object, but it was:",i,n);const a=[],l=tt.empty();ds(n,((h,m)=>{const f=cl(e,h,t);m=Ee(m);const x=i.yc(f);if(m instanceof sa)a.push(f);else{const v=gr(m,x);v!=null&&(a.push(f),l.set(f,v))}}));const c=new dt(a);return new Wm(l,c,i.fieldTransforms)}function V_(s,e,t,n,i,a){const l=s.Cc(1,e,t),c=[Ju(e,n,t)],h=[i];if(a.length%2!=0)throw new F(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<a.length;v+=2)c.push(Ju(e,a[v])),h.push(a[v+1]);const m=[],f=tt.empty();for(let v=c.length-1;v>=0;--v)if(!F_(m,c[v])){const I=c[v];let S=h[v];S=Ee(S);const P=l.yc(I);if(S instanceof sa)m.push(I);else{const R=gr(S,P);R!=null&&(m.push(I),f.set(I,R))}}const x=new dt(m);return new Wm(f,x,l.fieldTransforms)}function M_(s,e,t,n=!1){return gr(t,s.Cc(n?4:3,e))}function gr(s,e){if(Gm(s=Ee(s)))return Km("Unsupported field value:",e,s),L_(s,e);if(s instanceof ta)return(function(n,i){if(!Hm(i.Ac))throw i.Sc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${n._methodName}() is not currently supported inside arrays`);const a=n._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(n,i){const a=[];let l=0;for(const c of n){let h=gr(c,i.wc(l));h==null&&(h={nullValue:"NULL_VALUE"}),a.push(h),l++}return{arrayValue:{values:a}}})(s,e)}return(function(n,i){if((n=Ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Nw(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const a=ye.fromDate(n);return{timestampValue:pi(i.serializer,a)}}if(n instanceof ye){const a=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:pi(i.serializer,a)}}if(n instanceof Et)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof it)return{bytesValue:cm(i.serializer,n._byteString)};if(n instanceof Se){const a=i.databaseId,l=n.firestore._databaseId;if(!l.isEqual(a))throw i.Sc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:zo(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof It)return(function(l,c){return{mapValue:{fields:{[Ld]:{stringValue:Od},[di]:{arrayValue:{values:l.toArray().map((m=>{if(typeof m!="number")throw c.Sc("VectorValues must only contain numeric values.");return $o(c.serializer,m)}))}}}}}})(n,i);throw i.Sc(`Unsupported field value: ${Fi(n)}`)})(s,e)}function L_(s,e){const t={};return Cd(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(s,((n,i)=>{const a=gr(i,e.mc(n));a!=null&&(t[n]=a)})),{mapValue:{fields:t}}}function Gm(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof ye||s instanceof Et||s instanceof it||s instanceof Se||s instanceof ta||s instanceof It)}function Km(s,e,t){if(!Gm(t)||!Sd(t)){const n=Fi(t);throw n==="an object"?e.Sc(s+" a custom object"):e.Sc(s+" "+n)}}function Ju(s,e,t){if((e=Ee(e))instanceof ea)return e._internalPath;if(typeof e=="string")return cl(s,e);throw bi("Field path arguments must be of type string or ",s,!1,void 0,t)}const O_=new RegExp("[~\\*/\\[\\]]");function cl(s,e,t){if(e.search(O_)>=0)throw bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new ea(...e.split("."))._internalPath}catch{throw bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function bi(s,e,t,n,i){const a=n&&!n.isEmpty(),l=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(a||l)&&(h+=" (found",a&&(h+=` in field ${n}`),l&&(h+=` in document ${i}`),h+=")"),new F(k.INVALID_ARGUMENT,c+s+h)}function F_(s,e){return s.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,t,n,i,a){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new U_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(na("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class U_ extends Qm{data(){return super.data()}}function na(s,e){return typeof e=="string"?cl(s,e):e instanceof ea?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new F(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ul{}class Ym extends ul{}function wi(s,e,...t){let n=[];e instanceof ul&&n.push(e),n=n.concat(t),(function(a){const l=a.filter((h=>h instanceof hl)).length,c=a.filter((h=>h instanceof ra)).length;if(l>1||l>0&&c>0)throw new F(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const i of n)s=i._apply(s);return s}class ra extends Ym{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new ra(e,t,n)}_apply(e){const t=this._parse(e);return Jm(e._query,t),new Ms(e.firestore,e.converter,uo(e._query,t))}_parse(e){const t=zm(e.firestore);return(function(a,l,c,h,m,f,x){let v;if(m.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Zu(x,f);const S=[];for(const P of x)S.push(Xu(h,a,P));v={arrayValue:{values:S}}}else v=Xu(h,a,x)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Zu(x,f),v=M_(c,l,x,f==="in"||f==="not-in");return je.create(m,f,v)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function vi(s,e,t){const n=e,i=na("where",s);return ra._create(i,n,t)}class hl extends ul{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new hl(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:pt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,a){let l=i;const c=a.getFlattenedFilters();for(const h of c)Jm(l,h),l=uo(l,h)})(e._query,t),new Ms(e.firestore,e.converter,uo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dl extends Ym{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new dl(e,t)}_apply(e){const t=(function(i,a,l){if(i.startAt!==null)throw new F(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new F(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new nr(a,l)})(e._query,this._field,this._direction);return new Ms(e.firestore,e.converter,(function(i,a){const l=i.explicitOrderBy.concat([a]);return new mn(i.path,i.collectionGroup,l,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,t))}}function q_(s,e="asc"){const t=e,n=na("orderBy",s);return dl._create(n,t)}function Xu(s,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new F(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zd(e)&&t.indexOf("/")!==-1)throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ge.fromString(t));if(!$.isDocumentKey(n))throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return fu(s,new $(n))}if(t instanceof Se)return fu(s,t._key);throw new F(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fi(t)}.`)}function Zu(s,e){if(!Array.isArray(s)||s.length===0)throw new F(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Jm(s,e){const t=(function(i,a){for(const l of i)for(const c of l.getFlattenedFilters())if(a.indexOf(c.op)>=0)return c.op;return null})(s.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new F(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $_{convertValue(e,t="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(as(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return ds(e,((i,a)=>{n[i]=this.convertValue(a,t)})),n}convertVectorValue(e){var n,i,a;const t=(a=(i=(n=e.fields)==null?void 0:n[di].arrayValue)==null?void 0:i.values)==null?void 0:a.map((l=>_e(l.doubleValue)));return new It(t)}convertGeoPoint(e){return new Et(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=qi(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(er(e));default:return null}}convertTimestamp(e){const t=is(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ge.fromString(e);he(pm(n),9688,{name:e});const i=new tr(n.get(1),n.get(3)),a=new $(n.popFirst(5));return i.isEqual(t)||Vt(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}class Bn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ns extends Qm{constructor(e,t,n,i,a,l){super(e,t,n,i,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Kr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(na("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ns._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ns._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ns._jsonSchema={type:Ae("string",Ns._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class Kr extends Ns{data(e={}){return super.data(e)}}class Qs{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Bn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Kr(this._firestore,this._userDataWriter,n.key,n,new Bn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,a){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map((c=>{const h=new Kr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Bn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:l++}}))}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>a||c.type!==3)).map((c=>{const h=new Kr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Bn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let m=-1,f=-1;return c.type!==0&&(m=l.indexOf(c.doc.key),l=l.delete(c.doc.key)),c.type!==1&&(l=l.add(c.doc),f=l.indexOf(c.doc.key)),{type:W_(c.type),doc:h,oldIndex:m,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Qs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Mo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),n.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function W_(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(s){s=Ts(s,Se);const e=Ts(s.firestore,Zi);return j_(al(e),s._key).then((t=>z_(e,s,t)))}Qs._jsonSchemaVersion="firestore/querySnapshot/1.0",Qs._jsonSchema={type:Ae("string",Qs._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class Xm extends $_{constructor(e){super(),this.firestore=e}convertBytes(e){return new it(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Se(this.firestore,null,t)}}function _i(s){s=Ts(s,Ms);const e=Ts(s.firestore,Zi),t=al(e),n=new Xm(e);return B_(s._query),A_(t,s._query).then((i=>new Qs(e,n,s,i)))}function eh(s,e,t,...n){s=Ts(s,Se);const i=Ts(s.firestore,Zi),a=zm(i);let l;return l=typeof(e=Ee(e))=="string"||e instanceof ea?V_(a,"updateDoc",s._key,e,t,n):D_(a,"updateDoc",s._key,e),H_(i,[l.toMutation(s._key,Rt.exists(!0))])}function H_(s,e){return(function(n,i){const a=new Ct;return n.asyncQueue.enqueueAndForget((async()=>p_(await T_(n),i,a))),a.promise})(al(s),e)}function z_(s,e,t){const n=t.docs.get(e._key),i=new Xm(s);return new Ns(s,i,e._key,n,new Bn(t.hasPendingWrites,t.fromCache),e.converter)}function th(){return new ll("serverTimestamp")}(function(e,t=!0){(function(i){un=i})(on),Tt(new mt("firestore",((n,{instanceIdentifier:i,options:a})=>{const l=n.getProvider("app").getImmediate(),c=new Zi(new Vb(n.getProvider("auth-internal")),new Ob(l,n.getProvider("app-check-internal")),(function(m,f){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new F(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tr(m.options.projectId,f)})(l,i),l);return a={useFetchStreams:t,...a},c._setSettings(a),c}),"PUBLIC").setMultipleInstances(!0)),ot(tu,su,e),ot(tu,su,"esm2020")})();const Zm="@firebase/installations",ml="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=1e4,tf=`w:${ml}`,sf="FIS_v2",G_="https://firebaseinstallations.googleapis.com/v1",K_=3600*1e3,Q_="installations",Y_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},As=new ks(Q_,Y_,J_);function nf(s){return s instanceof gt&&s.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf({projectId:s}){return`${G_}/projects/${s}/installations`}function af(s){return{token:s.token,requestStatus:2,expiresIn:Z_(s.expiresIn),creationTime:Date.now()}}async function of(s,e){const n=(await e.json()).error;return As.create("request-failed",{requestName:s,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function lf({apiKey:s}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":s})}function X_(s,{refreshToken:e}){const t=lf(s);return t.append("Authorization",eN(e)),t}async function cf(s){const e=await s();return e.status>=500&&e.status<600?s():e}function Z_(s){return Number(s.replace("s","000"))}function eN(s){return`${sf} ${s}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN({appConfig:s,heartbeatServiceProvider:e},{fid:t}){const n=rf(s),i=lf(s),a=e.getImmediate({optional:!0});if(a){const m=await a.getHeartbeatsHeader();m&&i.append("x-firebase-client",m)}const l={fid:t,authVersion:sf,appId:s.appId,sdkVersion:tf},c={method:"POST",headers:i,body:JSON.stringify(l)},h=await cf(()=>fetch(n,c));if(h.ok){const m=await h.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:af(m.authToken)}}else throw await of("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(s){return new Promise(e=>{setTimeout(e,s)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(s){return btoa(String.fromCharCode(...s)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=/^[cdef][\w-]{21}$/,_o="";function rN(){try{const s=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(s),s[0]=112+s[0]%16;const t=iN(s);return nN.test(t)?t:_o}catch{return _o}}function iN(s){return sN(s).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(s){return`${s.appName}!${s.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map;function df(s,e){const t=ia(s);mf(t,e),aN(t,e)}function mf(s,e){const t=hf.get(s);if(t)for(const n of t)n(e)}function aN(s,e){const t=oN();t&&t.postMessage({key:s,fid:e}),lN()}let _s=null;function oN(){return!_s&&"BroadcastChannel"in self&&(_s=new BroadcastChannel("[Firebase] FID Change"),_s.onmessage=s=>{mf(s.data.key,s.data.fid)}),_s}function lN(){hf.size===0&&_s&&(_s.close(),_s=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN="firebase-installations-database",uN=1,Ss="firebase-installations-store";let La=null;function fl(){return La||(La=Lh(cN,uN,{upgrade:(s,e)=>{switch(e){case 0:s.createObjectStore(Ss)}}})),La}async function Ni(s,e){const t=ia(s),i=(await fl()).transaction(Ss,"readwrite"),a=i.objectStore(Ss),l=await a.get(t);return await a.put(e,t),await i.done,(!l||l.fid!==e.fid)&&df(s,e.fid),e}async function ff(s){const e=ia(s),n=(await fl()).transaction(Ss,"readwrite");await n.objectStore(Ss).delete(e),await n.done}async function aa(s,e){const t=ia(s),i=(await fl()).transaction(Ss,"readwrite"),a=i.objectStore(Ss),l=await a.get(t),c=e(l);return c===void 0?await a.delete(t):await a.put(c,t),await i.done,c&&(!l||l.fid!==c.fid)&&df(s,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(s){let e;const t=await aa(s.appConfig,n=>{const i=hN(n),a=dN(s,i);return e=a.registrationPromise,a.installationEntry});return t.fid===_o?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function hN(s){const e=s||{fid:rN(),registrationStatus:0};return pf(e)}function dN(s,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(As.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=mN(s,t);return{installationEntry:t,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fN(s)}:{installationEntry:e}}async function mN(s,e){try{const t=await tN(s,e);return Ni(s.appConfig,t)}catch(t){throw nf(t)&&t.customData.serverCode===409?await ff(s.appConfig):await Ni(s.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function fN(s){let e=await sh(s.appConfig);for(;e.registrationStatus===1;)await uf(100),e=await sh(s.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:n}=await pl(s);return n||t}return e}function sh(s){return aa(s,e=>{if(!e)throw As.create("installation-not-found");return pf(e)})}function pf(s){return pN(s)?{fid:s.fid,registrationStatus:0}:s}function pN(s){return s.registrationStatus===1&&s.registrationTime+ef<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN({appConfig:s,heartbeatServiceProvider:e},t){const n=xN(s,t),i=X_(s,t),a=e.getImmediate({optional:!0});if(a){const m=await a.getHeartbeatsHeader();m&&i.append("x-firebase-client",m)}const l={installation:{sdkVersion:tf,appId:s.appId}},c={method:"POST",headers:i,body:JSON.stringify(l)},h=await cf(()=>fetch(n,c));if(h.ok){const m=await h.json();return af(m)}else throw await of("Generate Auth Token",h)}function xN(s,{fid:e}){return`${rf(s)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(s,e=!1){let t;const n=await aa(s.appConfig,a=>{if(!gf(a))throw As.create("not-registered");const l=a.authToken;if(!e&&wN(l))return a;if(l.requestStatus===1)return t=yN(s,e),a;{if(!navigator.onLine)throw As.create("app-offline");const c=_N(a);return t=bN(s,c),c}});return t?await t:n.authToken}async function yN(s,e){let t=await nh(s.appConfig);for(;t.authToken.requestStatus===1;)await uf(100),t=await nh(s.appConfig);const n=t.authToken;return n.requestStatus===0?gl(s,e):n}function nh(s){return aa(s,e=>{if(!gf(e))throw As.create("not-registered");const t=e.authToken;return NN(t)?{...e,authToken:{requestStatus:0}}:e})}async function bN(s,e){try{const t=await gN(s,e),n={...e,authToken:t};return await Ni(s.appConfig,n),t}catch(t){if(nf(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await ff(s.appConfig);else{const n={...e,authToken:{requestStatus:0}};await Ni(s.appConfig,n)}throw t}}function gf(s){return s!==void 0&&s.registrationStatus===2}function wN(s){return s.requestStatus===2&&!vN(s)}function vN(s){const e=Date.now();return e<s.creationTime||s.creationTime+s.expiresIn<e+K_}function _N(s){const e={requestStatus:1,requestTime:Date.now()};return{...s,authToken:e}}function NN(s){return s.requestStatus===1&&s.requestTime+ef<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EN(s){const e=s,{installationEntry:t,registrationPromise:n}=await pl(e);return n?n.catch(console.error):gl(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IN(s,e=!1){const t=s;return await TN(t),(await gl(t,e)).token}async function TN(s){const{registrationPromise:e}=await pl(s);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(s){if(!s||!s.options)throw Oa("App Configuration");if(!s.name)throw Oa("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!s.options[t])throw Oa(t);return{appName:s.name,projectId:s.options.projectId,apiKey:s.options.apiKey,appId:s.options.appId}}function Oa(s){return As.create("missing-app-config-values",{valueName:s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="installations",AN="installations-internal",SN=s=>{const e=s.getProvider("app").getImmediate(),t=jN(e),n=Cs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},kN=s=>{const e=s.getProvider("app").getImmediate(),t=Cs(e,xf).getImmediate();return{getId:()=>EN(t),getToken:i=>IN(t,i)}};function CN(){Tt(new mt(xf,SN,"PUBLIC")),Tt(new mt(AN,kN,"PRIVATE"))}CN();ot(Zm,ml);ot(Zm,ml,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="analytics",RN="firebase_id",PN="origin",DN=60*1e3,VN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xl="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new Pi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},st=new ks("analytics","Analytics",MN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(s){if(!s.startsWith(xl)){const e=st.create("invalid-gtag-resource",{gtagURL:s});return Xe.warn(e.message),""}return s}function yf(s){return Promise.all(s.map(e=>e.catch(t=>t)))}function ON(s,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(s,e)),t}function FN(s,e){const t=ON("firebase-js-sdk-policy",{createScriptURL:LN}),n=document.createElement("script"),i=`${xl}?l=${s}&id=${e}`;n.src=t?t==null?void 0:t.createScriptURL(i):i,n.async=!0,document.head.appendChild(n)}function UN(s){let e=[];return Array.isArray(window[s])?e=window[s]:window[s]=e,e}async function BN(s,e,t,n,i,a){const l=n[i];try{if(l)await e[l];else{const h=(await yf(t)).find(m=>m.measurementId===i);h&&await e[h.appId]}}catch(c){Xe.error(c)}s("config",i,a)}async function qN(s,e,t,n,i){try{let a=[];if(i&&i.send_to){let l=i.send_to;Array.isArray(l)||(l=[l]);const c=await yf(t);for(const h of l){const m=c.find(x=>x.measurementId===h),f=m&&e[m.appId];if(f)a.push(f);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),s("event",n,i||{})}catch(a){Xe.error(a)}}function $N(s,e,t,n){async function i(a,...l){try{if(a==="event"){const[c,h]=l;await qN(s,e,t,c,h)}else if(a==="config"){const[c,h]=l;await BN(s,e,t,n,c,h)}else if(a==="consent"){const[c,h]=l;s("consent",c,h)}else if(a==="get"){const[c,h,m]=l;s("get",c,h,m)}else if(a==="set"){const[c]=l;s("set",c)}else s(a,...l)}catch(c){Xe.error(c)}}return i}function WN(s,e,t,n,i){let a=function(...l){window[n].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=$N(a,s,e,t),{gtagCore:a,wrappedGtag:window[i]}}function HN(s){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(xl)&&t.src.includes(s))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN=30,GN=1e3;class KN{constructor(e={},t=GN){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const bf=new KN;function QN(s){return new Headers({Accept:"application/json","x-goog-api-key":s})}async function YN(s){var l;const{appId:e,apiKey:t}=s,n={method:"GET",headers:QN(t)},i=VN.replace("{app-id}",e),a=await fetch(i,n);if(a.status!==200&&a.status!==304){let c="";try{const h=await a.json();(l=h.error)!=null&&l.message&&(c=h.error.message)}catch{}throw st.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function JN(s,e=bf,t){const{appId:n,apiKey:i,measurementId:a}=s.options;if(!n)throw st.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:n};throw st.create("no-api-key")}const l=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new eE;return setTimeout(async()=>{c.abort()},DN),wf({appId:n,apiKey:i,measurementId:a},l,c,e)}async function wf(s,{throttleEndTimeMillis:e,backoffCount:t},n,i=bf){var c;const{appId:a,measurementId:l}=s;try{await XN(n,e)}catch(h){if(l)return Xe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw h}try{const h=await YN(s);return i.deleteThrottleMetadata(a),h}catch(h){const m=h;if(!ZN(m)){if(i.deleteThrottleMetadata(a),l)return Xe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:a,measurementId:l};throw h}const f=Number((c=m==null?void 0:m.customData)==null?void 0:c.httpStatus)===503?Ic(t,i.intervalMillis,zN):Ic(t,i.intervalMillis),x={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return i.setThrottleMetadata(a,x),Xe.debug(`Calling attemptFetch again in ${f} millis`),wf(s,x,n,i)}}function XN(s,e){return new Promise((t,n)=>{const i=Math.max(e-Date.now(),0),a=setTimeout(t,i);s.addEventListener(()=>{clearTimeout(a),n(st.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ZN(s){if(!(s instanceof gt)||!s.customData)return!1;const e=Number(s.customData.httpStatus);return e===429||e===500||e===503||e===504}class eE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tE(s,e,t,n,i){if(i&&i.global){s("event",t,n);return}else{const a=await e,l={...n,send_to:a};s("event",t,l)}}async function sE(s,e,t,n){if(n&&n.global){const i={};for(const a of Object.keys(t))i[`user_properties.${a}`]=t[a];return s("set",i),Promise.resolve()}else{const i=await e;s("config",i,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE(){if(Ph())try{await Dh()}catch(s){return Xe.warn(st.create("indexeddb-unavailable",{errorInfo:s==null?void 0:s.toString()}).message),!1}else return Xe.warn(st.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function rE(s,e,t,n,i,a,l){const c=JN(s);c.then(v=>{t[v.measurementId]=v.appId,s.options.measurementId&&v.measurementId!==s.options.measurementId&&Xe.warn(`The measurement ID in the local Firebase config (${s.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Xe.error(v)),e.push(c);const h=nE().then(v=>{if(v)return n.getId()}),[m,f]=await Promise.all([c,h]);HN(a)||FN(a,m.measurementId),i("js",new Date);const x=(l==null?void 0:l.config)??{};return x[PN]="firebase",x.update=!0,f!=null&&(x[RN]=f),i("config",m.measurementId,x),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.app=e}_delete(){return delete Ys[this.app.options.appId],Promise.resolve()}}let Ys={},rh=[];const ih={};let Fa="dataLayer",aE="gtag",ah,yl,oh=!1;function oE(){const s=[];if(Rh()&&s.push("This is a browser extension environment."),Zg()||s.push("Cookies are not available."),s.length>0){const e=s.map((n,i)=>`(${i+1}) ${n}`).join(" "),t=st.create("invalid-analytics-context",{errorInfo:e});Xe.warn(t.message)}}function lE(s,e,t){oE();const n=s.options.appId;if(!n)throw st.create("no-app-id");if(!s.options.apiKey)if(s.options.measurementId)Xe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${s.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw st.create("no-api-key");if(Ys[n]!=null)throw st.create("already-exists",{id:n});if(!oh){UN(Fa);const{wrappedGtag:a,gtagCore:l}=WN(Ys,rh,ih,Fa,aE);yl=a,ah=l,oh=!0}return Ys[n]=rE(s,rh,ih,e,ah,Fa,t),new iE(s)}function cE(s=To()){s=Ee(s);const e=Cs(s,Ei);return e.isInitialized()?e.getImmediate():uE(s)}function uE(s,e={}){const t=Cs(s,Ei);if(t.isInitialized()){const i=t.getImmediate();if(ns(e,t.getOptions()))return i;throw st.create("already-initialized")}return t.initialize({options:e})}function hE(s,e,t){s=Ee(s),sE(yl,Ys[s.app.options.appId],e,t).catch(n=>Xe.error(n))}function dE(s,e,t,n){s=Ee(s),tE(yl,Ys[s.app.options.appId],e,t,n).catch(i=>Xe.error(i))}const lh="@firebase/analytics",ch="0.10.19";function mE(){Tt(new mt(Ei,(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return lE(n,i,t)},"PUBLIC")),Tt(new mt("analytics-internal",s,"PRIVATE")),ot(lh,ch),ot(lh,ch,"esm2020");function s(e){try{const t=e.getProvider(Ei).getImmediate();return{logEvent:(n,i,a)=>dE(t,n,i,a),setUserProperties:(n,i)=>hE(t,n,i)}}catch(t){throw st.create("interop-component-reg-failed",{reason:t})}}}mE();const No={apiKey:"AIzaSyBkMktbTfBNIdhtBwCC_cRBEavKeuTyCGA",authDomain:"myschola-5ec1f.firebaseapp.com",projectId:"myschola-5ec1f",storageBucket:"myschola-5ec1f.appspot.com",messagingSenderId:"927860875256",appId:"1:927860875256:web:ce73f8eabd09cac6f3400d",measurementId:"G-XTC703H7RN"};if(!No.apiKey||!No.projectId)throw console.error("Firebase configuration is missing. Please check your .env file."),new Error("Firebase configuration error");const bl=Oh(No),lt=Cb(bl),be=k_(bl);cE(bl);function fE(){const[s,e]=A.useState(""),[t,n]=A.useState(!1),[i,a]=A.useState(!0),l=Lt(),c=us(),h=async f=>{var S,P;if((await Ue(Le(be,"admins",f))).exists())return l("/admin",{replace:!0}),!0;if((await Ue(Le(be,"teachers",f))).exists())return l("/admin",{replace:!0}),!0;if((await Ue(Le(be,"students",f))).exists()){const R=((P=(S=c.state)==null?void 0:S.from)==null?void 0:P.pathname)||"/app/dashboard";return l(R,{replace:!0}),!0}return!1};A.useEffect(()=>{(async()=>{try{await lt.signOut()}catch(x){console.error("Error signing out existing session:",x)}finally{a(!1)}})()},[]);const m=async f=>{f.preventDefault(),e(""),n(!0);const x=new FormData(f.currentTarget),v=x.get("email"),I=x.get("password");try{console.log("Attempting to sign in with email:",v);const P=(await x0(lt,v,I)).user;console.log("Sign in successful. User UID:",P.uid),await h(P.uid)||(console.error("No role document found for UID:",P.uid),await lt.signOut(),e("Profile not found. Please contact your administrator."))}catch(S){console.error(S),S.code==="auth/invalid-email"?e("Please enter a valid email address."):S.code==="auth/user-not-found"?e("No account found with this email. Please contact your teacher to create an account."):S.code==="auth/wrong-password"?e("Incorrect password. Please try again."):S.code==="auth/invalid-credential"?e("Invalid email or password. Please try again."):e(S.message||"Failed to sign in. Please try again.")}finally{n(!1)}};return i?r.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),r.jsx("p",{className:"mt-4 text-gray-600",children:"Checking authentication..."})]})}):r.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[r.jsx("div",{className:"flex justify-center",children:r.jsxs(ae,{to:"/",className:"flex items-center",children:[r.jsx(ct,{className:"h-12 w-12 text-blue-600"}),r.jsx("span",{className:"ml-2 text-3xl font-bold text-gray-900",children:"MySchola"})]})}),r.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"}),r.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Students: Use the email and password provided by your teacher"})]}),r.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:r.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[r.jsxs("form",{className:"space-y-6",onSubmit:m,children:[s&&r.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative",role:"alert",children:r.jsx("span",{className:"block sm:inline",children:s})}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),r.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[r.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:r.jsx(Qr,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),r.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"you@example.com"})]})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),r.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[r.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:r.jsx(Eo,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),r.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"********"})]})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),r.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),r.jsx("div",{className:"text-sm",children:r.jsx("a",{href:"#",className:"font-medium text-blue-600 hover:text-blue-500",children:"Forgot your password?"})})]}),r.jsx("div",{children:r.jsx("button",{type:"submit",disabled:t,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed",children:t?"Please wait...":"Sign in"})})]}),r.jsx("div",{className:"mt-6",children:r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"absolute inset-0 flex items-center",children:r.jsx("div",{className:"w-full border-t border-gray-300"})}),r.jsx("div",{className:"relative flex justify-center text-sm",children:r.jsx("span",{className:"px-2 bg-white text-gray-500",children:r.jsxs(ae,{to:"/",className:"flex items-center hover:text-gray-900 transition",children:[r.jsx(Ke,{className:"h-4 w-4 mr-1"}),"Back to Home"]})})})]})})]})})]})}function Ua({children:s}){const[e,t]=A.useState(!0),[n,i]=A.useState(!1),[a,l]=A.useState(!1),c=us();return A.useEffect(()=>{const h=Mi(lt,async m=>{if(m)try{(await Ue(Le(be,"students",m.uid))).exists()?(i(!0),l(!0)):(i(!1),l(!1))}catch(f){console.error("Error checking student status:",f),i(!1),l(!1)}else i(!1),l(!1);t(!1)});return()=>h()},[]),e?r.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),r.jsx("p",{className:"mt-4 text-gray-600",children:"Loading..."})]})}):!n||!a?r.jsx(ep,{to:"/login",state:{from:c},replace:!0}):s}const pE=s=>{const e=(s==null?void 0:s.toLowerCase())||"";return e.includes("math")||e.includes("maths")?Ip:e.includes("english")||e.includes("literature")||e.includes("language")?_p:e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?zp:e.includes("geography")||e.includes("geography")?Kp:e.includes("history")?Jp:e.includes("music")?cg:e.includes("art")||e.includes("design")?hg:e.includes("language")||e.includes("french")||e.includes("spanish")||e.includes("german")?Zp:e.includes("computer")||e.includes("ict")||e.includes("it")?gp:ct},gE=s=>{const e=(s==null?void 0:s.toLowerCase())||"";return e.includes("math")||e.includes("maths")?"bg-blue-50 border-blue-200 text-blue-700":e.includes("english")||e.includes("literature")||e.includes("language")?"bg-purple-50 border-purple-200 text-purple-700":e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?"bg-green-50 border-green-200 text-green-700":e.includes("geography")?"bg-cyan-50 border-cyan-200 text-cyan-700":e.includes("history")?"bg-amber-50 border-amber-200 text-amber-700":e.includes("music")?"bg-pink-50 border-pink-200 text-pink-700":e.includes("art")||e.includes("design")?"bg-rose-50 border-rose-200 text-rose-700":"bg-gray-50 border-gray-200 text-gray-700"},vf="subjectAccess",xE=()=>{try{const s=localStorage.getItem(vf),e=s?JSON.parse(s):[];return Array.isArray(e)?e:[]}catch{return[]}},yE=s=>{localStorage.setItem(vf,JSON.stringify(s))},uh=s=>(s==null?void 0:s.pin)||(s==null?void 0:s.accessPin)||"";function bE(){const s=Lt(),[e,t]=A.useState(null),[n,i]=A.useState([]),[a,l]=A.useState(!0),[c,h]=A.useState(""),[m,f]=A.useState(null),[x,v]=A.useState(xE()),[I,S]=A.useState(null),[P,R]=A.useState(""),[O,D]=A.useState("");A.useEffect(()=>{(async()=>{try{const g=lt.currentUser;if(!g){s("/login");return}const w=await Ue(Le(be,"students",g.uid));if(!w.exists()){h("Student profile not found"),l(!1);return}const _=w.data();if(t(_),console.log("Student data:",_),console.log("Student subjects array:",_.subjects),_.subjects&&_.subjects.length>0){const b=(await Promise.all(_.subjects.map(async W=>{try{const Z=await Ue(Le(be,"subjects",W));return Z.exists()?{id:Z.id,...Z.data()}:(console.warn(`Subject document not found for ID: ${W}`),null)}catch(Z){return console.error(`Error fetching subject ${W}:`,Z),null}}))).filter(W=>W!==null);console.log("Loaded subjects:",b),console.log("Expected subjects:",_.subjects),console.log("Missing subjects:",_.subjects.filter(W=>!b.some(Z=>Z.id===W))),i(b),b.length!==_.subjects.length&&f({expected:_.subjects.length,loaded:b.length,missing:_.subjects.filter(W=>!b.some(Z=>Z.id===W))})}else console.log("No subjects array found in student data");l(!1)}catch(g){console.error("Error loading student data:",g),h("Failed to load dashboard data"),l(!1)}})()},[s]);const B=y=>!String(uh(y)||"").trim()||x.includes(y.id),Y=y=>{S(y),R(""),D("")},le=y=>{const g=String(uh(y)||"").trim();if(g&&P.trim()!==g){D("Incorrect PIN");return}const w=Array.from(new Set([...x,y.id]));v(w),yE(w),S(null),R(""),D("")},ee=()=>{S(null),R(""),D("")},N=async()=>{try{await w0(lt),s("/login",{replace:!0})}catch(y){console.error("Error signing out:",y)}};return a?r.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",role:"status","aria-live":"polite",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto","aria-hidden":"true"}),r.jsx("p",{className:"mt-4 text-gray-600","aria-label":"Loading dashboard",children:"Loading your dashboard..."})]})}):c?r.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("p",{className:"text-red-600 mb-4",children:c}),r.jsx("button",{onClick:N,className:"text-blue-600 hover:text-blue-700 underline",children:"Sign out and try again"})]})}):r.jsxs("div",{className:"min-h-screen bg-gray-50",children:[r.jsx("header",{className:"bg-white shadow-sm",role:"banner",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(Kn,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),r.jsxs("div",{children:[r.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"MySchola Student Dashboard"}),r.jsxs("p",{className:"text-sm text-gray-500",children:["Hi, ",r.jsx("span",{className:"font-medium",children:(e==null?void 0:e.name)||"Student"})]})]})]}),r.jsxs("nav",{className:"flex items-center gap-3","aria-label":"Dashboard navigation",children:[r.jsx(ae,{to:"/",className:"text-sm text-gray-600 hover:text-gray-900 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition","aria-label":"Return to homepage",children:"Back to site"}),r.jsxs("button",{onClick:N,className:"inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition","aria-label":"Sign out of your account",children:[r.jsx(sg,{className:"h-4 w-4","aria-hidden":"true"}),"Sign out"]})]})]})}),r.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[r.jsxs("div",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Your Subjects"}),r.jsx("p",{className:"text-gray-600",children:"Select a subject to join Zoom sessions, watch recordings, or download homework."})]}),m&&r.jsxs("div",{className:"mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4",role:"alert","aria-live":"polite",children:[r.jsx("p",{className:"text-sm text-yellow-800 font-medium mb-1",children:"Some subjects may not be loading correctly"}),r.jsxs("p",{className:"text-xs text-yellow-700",children:["Expected ",m.expected," subject(s), loaded ",m.loaded,". Please check the browser console for details."]})]}),n.length===0?r.jsxs("div",{className:"bg-white rounded-lg shadow p-8 text-center",role:"region","aria-labelledby":"no-subjects-heading",children:[r.jsx(Kn,{className:"h-12 w-12 text-gray-400 mx-auto mb-4","aria-hidden":"true"}),r.jsx("h3",{id:"no-subjects-heading",className:"text-lg font-semibold text-gray-900 mb-2",children:"No Subjects Enrolled"}),r.jsx("p",{className:"text-gray-600 mb-2",children:"You're not enrolled in any subjects yet."}),r.jsx("p",{className:"text-sm text-gray-500",children:"Please contact your teacher to get enrolled."})]}):r.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",role:"list","aria-label":"Enrolled subjects",children:n.map(y=>{const g=pE(y.name),w=gE(y.name);return r.jsxs("article",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",role:"listitem",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[r.jsx("div",{className:`p-2 rounded-lg ${w}`,children:r.jsx(g,{className:"h-6 w-6","aria-hidden":"true"})}),r.jsx("h3",{className:"text-xl font-semibold text-gray-900 flex-1",children:y.name})]}),r.jsx("div",{className:"space-y-3",children:B(y)?r.jsxs(r.Fragment,{children:[y.zoomLink&&r.jsxs("a",{href:y.zoomLink,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`Join Zoom session for ${y.name}`,children:[r.jsx($p,{className:"h-4 w-4","aria-hidden":"true"}),"Join Zoom"]}),r.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[r.jsxs(ae,{to:`/app/subject/${y.id}/recordings`,className:"flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`View recordings for ${y.name}`,children:[r.jsx(Js,{className:"h-4 w-4","aria-hidden":"true"}),"Recordings"]}),r.jsxs(ae,{to:`/app/subject/${y.id}/homework`,className:"flex items-center justify-center gap-2 text-green-600 hover:text-green-700 px-4 py-2 border border-green-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition font-medium","aria-label":`View homework for ${y.name}`,children:[r.jsx(Qn,{className:"h-4 w-4","aria-hidden":"true"}),"Homework"]})]})]}):r.jsxs("div",{className:"space-y-3",children:[r.jsx("p",{className:"text-sm text-gray-600",children:"This subject is locked. Enter the PIN to unlock."}),I===y.id?r.jsxs("div",{className:"space-y-2",children:[r.jsx("input",{type:"password",value:P,onChange:_=>R(_.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Subject PIN"}),O&&r.jsx("p",{className:"text-sm text-red-600",children:O}),r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx("button",{type:"button",onClick:()=>le(y),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Unlock"}),r.jsx("button",{type:"button",onClick:ee,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Cancel"})]})]}):r.jsx("button",{type:"button",onClick:()=>Y(y.id),className:"w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Enter PIN"})]})})]},y.id)})})]})]})}const _f="subjectAccess",wE=()=>{try{const s=localStorage.getItem(_f),e=s?JSON.parse(s):[];return Array.isArray(e)?e:[]}catch{return[]}},vE=s=>{localStorage.setItem(_f,JSON.stringify(s))},_E=s=>(s==null?void 0:s.pin)||(s==null?void 0:s.accessPin)||"";function NE(){const{subjectId:s}=bh(),e=Lt(),[t,n]=A.useState([]),[i,a]=A.useState([]),[l,c]=A.useState(null),[h,m]=A.useState(!0),[f,x]=A.useState(""),[v,I]=A.useState(!1),[S,P]=A.useState(""),[R,O]=A.useState(""),[D,B]=A.useState(""),[Y,le]=A.useState(wE()),[ee,N]=A.useState(0);A.useEffect(()=>{const E=async()=>{try{if(!lt.currentUser){e("/login");return}const W=Le(be,"subjects",s),Z=await Ue(W);if(Z.exists()){const oe={id:s,...Z.data()};c(oe);const M=_E(oe);if(B(M),!(!M||Y.includes(s))){I(!0),m(!1);return}}let V;try{V=wi(or(be,"recordings"),vi("subjectId","==",s),q_("date","desc"))}catch(oe){console.warn("OrderBy failed, using simple query:",oe),V=wi(or(be,"recordings"),vi("subjectId","==",s))}const Ie=(await _i(V)).docs.map(oe=>({id:oe.id,...oe.data()})).filter(oe=>oe.approvalStatus==="approved"||!oe.approvalStatus).sort((oe,M)=>{var ke,nt;const me=(ke=oe.date)!=null&&ke.toDate?oe.date.toDate():oe.date?new Date(oe.date):new Date(0);return((nt=M.date)!=null&&nt.toDate?M.date.toDate():M.date?new Date(M.date):new Date(0))-me});n(Ie),a(Ie),I(!1),m(!1)}catch(b){console.error("Error loading recordings:",b),x("Failed to load recordings"),m(!1)}};s&&(m(!0),x(""),E())},[s,e,Y,ee]);const y=E=>{E.preventDefault();const b=String(D||"").trim();if(!b){I(!1);return}if(S.trim()!==b){O("Incorrect PIN");return}const W=Array.from(new Set([...Y,s]));le(W),vE(W),P(""),O(""),I(!1),N(Z=>Z+1)},g=()=>{var b;return l?(((b=l.name)==null?void 0:b.toLowerCase())||"").includes("english"):!1},w=()=>{const E={};return i.forEach(b=>{const W=b.examBoard||"Other",Z=b.tier||(g()?"General":"Other"),V=`${W}_${Z}`;E[V]||(E[V]={examBoard:W,tier:Z,recordings:[]}),E[V].recordings.push(b)}),Object.values(E).sort((b,W)=>b.examBoard!==W.examBoard?b.examBoard==="AQA"?-1:W.examBoard==="AQA"?1:b.examBoard==="Edexcel"?-1:W.examBoard==="Edexcel"?1:b.examBoard.localeCompare(W.examBoard):b.tier==="Foundation"?-1:W.tier==="Foundation"?1:b.tier==="Higher"?-1:W.tier==="Higher"?1:b.tier.localeCompare(W.tier))},_=E=>E?(E.toDate?E.toDate():new Date(E)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"Date not available";return h?r.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),r.jsx("p",{className:"mt-4 text-gray-600",children:"Loading recordings..."})]})}):v?r.jsx("div",{className:"min-h-screen bg-gray-50",children:r.jsxs("div",{className:"max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[r.jsxs(ae,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[r.jsx(Ke,{className:"h-4 w-4"}),"Back to Dashboard"]}),r.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[r.jsx("h1",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Enter Subject PIN"}),r.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"This subject is locked. Enter the PIN to access recordings."}),r.jsxs("form",{onSubmit:y,className:"space-y-4",children:[r.jsx("input",{type:"password",value:S,onChange:E=>P(E.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Subject PIN",autoFocus:!0}),R&&r.jsx("div",{className:"text-sm text-red-600",children:R}),r.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"Unlock Subject"})]})]})]})}):r.jsx("div",{className:"min-h-screen bg-gray-50",children:r.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[r.jsxs(ae,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[r.jsx(Ke,{className:"h-4 w-4"}),"Back to Dashboard"]}),r.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[r.jsx(Js,{className:"h-6 w-6 text-blue-600"}),r.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Recordings - ",(l==null?void 0:l.name)||"Subject"]})]}),r.jsx("p",{className:"text-gray-600",children:"Watch past lesson recordings for this subject."})]}),f&&r.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6",children:f}),i.length===0?r.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[r.jsx(Js,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),r.jsx("p",{className:"text-gray-600",children:"No recordings available yet."}),r.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Check back later for new recordings."})]}):r.jsx("div",{className:"space-y-6",children:w().map((E,b)=>r.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",children:[r.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 px-6 py-4",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(Kn,{className:"h-5 w-5 text-blue-600"}),r.jsxs("div",{children:[r.jsxs("h3",{className:"text-lg font-semibold text-gray-900",children:[E.examBoard,!g()&&E.tier&&r.jsxs("span",{className:"ml-2 text-base font-normal text-gray-600",children:["- ",E.tier]})]}),r.jsxs("p",{className:"text-sm text-gray-600",children:[E.recordings.length," recording",E.recordings.length!==1?"s":""]})]})]})}),r.jsx("div",{className:"p-6 space-y-4",children:E.recordings.map(W=>r.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsxs("div",{className:"flex-1",children:[r.jsx("h4",{className:"text-base font-semibold text-gray-900 mb-2",children:W.title}),r.jsx("p",{className:"text-sm text-gray-500",children:_(W.date)})]}),r.jsxs("a",{href:W.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"ml-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap",children:[r.jsx(pg,{className:"h-4 w-4"}),"Watch"]})]})},W.id))})]},b))})]})})}function EE(){const{subjectId:s}=bh(),[e,t]=A.useState([]),[n,i]=A.useState(null),[a,l]=A.useState(!0),[c,h]=A.useState(null);A.useEffect(()=>{s&&(async()=>{try{const v=Le(be,"subjects",s),I=await Ue(v);I.exists()&&i({id:s,...I.data()});const S=wi(or(be,"homeworks"),vi("subjectId","==",s)),R=(await _i(S)).docs.map(O=>({id:O.id,...O.data()}));t(R),l(!1)}catch(v){console.error("Error loading homework:",v),l(!1)}})()},[s]);const m=x=>x?(x.toDate?x.toDate():new Date(x)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"No due date",f=x=>x?(x.toDate?x.toDate():new Date(x))<new Date:!1;return a?r.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),r.jsx("p",{className:"mt-4 text-gray-600",children:"Loading homework..."})]})}):r.jsx("div",{className:"min-h-screen bg-gray-50",children:r.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[r.jsxs(ae,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[r.jsx(Ke,{className:"h-4 w-4"}),"Back to Dashboard"]}),r.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[r.jsx(Qn,{className:"h-6 w-6 text-green-600"}),r.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Homework - ",(n==null?void 0:n.name)||"Subject"]})]}),r.jsx("p",{className:"text-gray-600",children:"Download your homework assignments."})]}),c?r.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[r.jsxs("div",{className:"flex items-center justify-between mb-6",children:[r.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:c.title}),r.jsx("button",{onClick:()=>{h(null)},className:"text-gray-600 hover:text-gray-900",children:"Close"})]}),c.description&&r.jsx("p",{className:"text-gray-600 mb-6",children:c.description}),r.jsxs("p",{className:"text-sm text-gray-500 mb-6",children:["Due: ",m(c.dueDate)]}),c.attachmentUrl&&r.jsxs("a",{href:c.attachmentUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6",children:[r.jsx(bc,{className:"h-5 w-5"}),"Download ",c.attachmentName||"homework file"]}),!c.attachmentUrl&&r.jsx("p",{className:"text-gray-600",children:"No homework file attached."})]}):r.jsx("div",{className:"space-y-4",children:e.length===0?r.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[r.jsx(Qn,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),r.jsx("p",{className:"text-gray-600",children:"No homework assignments available yet."})]}):e.map(x=>{const v=f(x.dueDate);return r.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:r.jsxs("div",{className:"flex items-start justify-between mb-4",children:[r.jsxs("div",{className:"flex-1",children:[r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:x.title}),x.description&&r.jsx("p",{className:"text-gray-600 mb-2",children:x.description}),x.attachmentUrl&&r.jsxs("a",{href:x.attachmentUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-2",children:[r.jsx(bc,{className:"h-4 w-4"}),"Download ",x.attachmentName||"homework file"]}),r.jsx("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx(Ht,{className:"h-4 w-4"}),"Due: ",m(x.dueDate)]})}),v&&r.jsx("div",{className:"mt-3 text-red-600 text-sm font-medium",children:"Overdue"})]}),r.jsx("button",{onClick:()=>h(x),className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"View Details"})]})},x.id)})})]})})}const IE="myschola-5ec1f",TE=`https://us-central1-${IE}.cloudfunctions.net`,hh=TE,jE=async()=>{const s=lt.currentUser;if(!s)throw new Error("User is not authenticated");return s.getIdToken()},wl=async(s,e)=>{if(!hh)throw new Error("Functions base URL is not configured");const t=await jE(),n=await fetch(`${hh}/${s}`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(e||{})});if(!n.ok){const i=await n.text();throw new Error(i||`Request failed (${n.status})`)}return n.json()},dh=s=>wl("createHidriveUpload",s),AE=s=>wl("createRecording",s),SE=s=>wl("createHomework",s);function kE(){const s=Lt(),[e,t]=A.useState(!1),[n,i]=A.useState(!0),[a,l]=A.useState([]),[c,h]=A.useState(""),[m,f]=A.useState(null),[x,v]=A.useState("recording"),[I,S]=A.useState(""),[P,R]=A.useState(null),[O,D]=A.useState(0),[B,Y]=A.useState(""),[le,ee]=A.useState(""),[N,y]=A.useState([]),[g,w]=A.useState(""),[_,E]=A.useState(""),[b,W]=A.useState(""),[Z,V]=A.useState(null),[te,Ie]=A.useState(0),[oe,M]=A.useState(!1),[me,ce]=A.useState("");A.useEffect(()=>{const q=Mi(lt,async G=>{if(!G){t(!1),i(!1),s("/login",{replace:!0});return}try{const ue=await Ue(Le(be,"admins",G.uid)),de=ue.exists()?null:await Ue(Le(be,"teachers",G.uid));ue.exists()||de!=null&&de.exists()?t(!0):(t(!1),s("/login",{replace:!0}))}catch(ue){console.error("Error verifying role:",ue),t(!1),s("/login",{replace:!0})}finally{i(!1)}});return()=>q()},[s]),A.useEffect(()=>{e&&(async()=>{try{const ue=(await _i(or(be,"subjects"))).docs.map(de=>({id:de.id,...de.data()}));if(l(ue),ue.length>0){const de=ue[0];h(de.id),f(de)}}catch(G){console.error("Error loading subjects:",G)}})()},[e]),A.useEffect(()=>{(async()=>{if(x==="approve"&&e)try{const G=wi(or(be,"recordings"),vi("approvalStatus","==","pending")),ue=await _i(G),de=await Promise.all(ue.docs.map(async qe=>{const pe=qe.data();let Pe="Unknown";if(pe.subjectId)try{const $e=await Ue(qe(be,"subjects",pe.subjectId));$e.exists()&&(Pe=$e.data().name)}catch($e){console.error("Error fetching subject:",$e)}return{id:qe.id,...pe,subjectName:Pe}}));y(de)}catch(G){console.error("Error loading pending recordings:",G)}})()},[x,e]),A.useEffect(()=>{const q=a.find(G=>G.id===c);f(q||null),Y(""),ee("")},[c,a]);const ke=()=>{var G;return m?(((G=m.name)==null?void 0:G.toLowerCase())||"").includes("english"):!1},nt=(q,G,ue)=>new Promise((de,qe)=>{if(!(G!=null&&G.uploadUrl)){qe(new Error("Upload URL is missing"));return}const pe=new XMLHttpRequest;pe.open(G.method||"PUT",G.uploadUrl,!0),pe.responseType="json",G.headers&&Object.entries(G.headers).forEach(([Pe,$e])=>{$e&&pe.setRequestHeader(Pe,$e)}),pe.upload.onprogress=Pe=>{if(Pe.lengthComputable){const $e=Math.round(Pe.loaded/Pe.total*100);ue&&ue($e)}},pe.onload=()=>{if(pe.status>=200&&pe.status<300){ue&&ue(100);let Pe=pe.response;if(!Pe&&pe.responseText)try{Pe=JSON.parse(pe.responseText)}catch{Pe=null}de({response:Pe})}else qe(new Error(`Upload failed (${pe.status})`))},pe.onerror=()=>{qe(new Error("Upload failed"))},pe.send(q)}),pn=async q=>{if(q.preventDefault(),!c||!I||!B){ce("Please fill in all required fields");return}if(!P){ce("Please upload a video file to continue");return}if(!ke()&&!le){ce("Please select a tier (Foundation or Higher)");return}M(!0),ce("");try{D(0);const G=await dh({subjectId:c,fileName:P.name,contentType:P.type,uploadType:"recording"}),ue=await nt(P,G,D),de=ue==null?void 0:ue.response,qe=(de==null?void 0:de.id)||(de==null?void 0:de.pid)||(de==null?void 0:de.file_id)||null,pe={subjectId:c,title:I,examBoard:B,tier:ke()?null:le,hidrivePath:G.hidrivePath,hidriveFileId:qe,fileName:P.name};sessionStorage.setItem("pendingRecording",JSON.stringify(pe)),S(""),R(null),D(0),Y(""),ee(""),s("/admin/share-link",{state:{pendingRecording:pe}})}catch(G){console.error("Error adding recording:",G),ce("Failed to upload recording"),D(0)}finally{M(!1)}},gn=async q=>{try{await eh(Le(be,"recordings",q),{approvalStatus:"approved",approvedAt:th()}),y(N.filter(G=>G.id!==q)),ce("Recording approved successfully!"),setTimeout(()=>ce(""),3e3)}catch(G){console.error("Error approving recording:",G),ce("Failed to approve recording")}},xn=async q=>{try{await eh(Le(be,"recordings",q),{approvalStatus:"rejected",rejectedAt:th()}),y(N.filter(G=>G.id!==q)),ce("Recording rejected"),setTimeout(()=>ce(""),3e3)}catch(G){console.error("Error rejecting recording:",G),ce("Failed to reject recording")}},yn=async q=>{if(q.preventDefault(),!c||!g){ce("Please fill in all required fields");return}if(!Z){ce("Please upload a homework file");return}M(!0),ce("");try{let G=null,ue=null,de=null,qe=null,pe=null;if(Z){Ie(0);const $e=await dh({subjectId:c,fileName:Z.name,contentType:Z.type,uploadType:"homework"}),ms=await nt(Z,$e,Ie),rt=ms==null?void 0:ms.response;ue=(rt==null?void 0:rt.id)||(rt==null?void 0:rt.pid)||(rt==null?void 0:rt.file_id)||null,G=$e.hidrivePath,de=Z.name,qe=Z.type,pe=Z.size}const Pe={subjectId:c,title:g,description:_,dueDate:b?new Date(b).toISOString():null,attachmentName:de,attachmentContentType:qe,attachmentSize:pe,hidrivePath:G,hidriveFileId:ue,fileName:Z.name};sessionStorage.setItem("pendingHomework",JSON.stringify(Pe)),w(""),E(""),W(""),V(null),Ie(0),s("/admin/homework-share-link",{state:{pendingHomework:Pe}})}catch(G){console.error("Error adding homework:",G),ce("Failed to add homework")}finally{M(!1)}};return n?r.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),r.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):e?r.jsx("div",{className:"min-h-screen bg-gray-50",children:r.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[r.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Admin Panel"}),r.jsx("button",{onClick:async()=>{await lt.signOut(),s("/login",{replace:!0})},className:"text-gray-600 hover:text-gray-900 underline text-sm",children:"Sign out"})]})}),r.jsxs("div",{className:"flex gap-2 mb-6 flex-wrap",children:[r.jsxs("button",{onClick:()=>v("recording"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${x==="recording"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[r.jsx(Js,{className:"h-4 w-4"}),"Add Recording"]}),r.jsxs("button",{onClick:()=>v("homework"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${x==="homework"?"bg-green-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[r.jsx(Qn,{className:"h-4 w-4"}),"Add Homework"]}),r.jsxs("button",{onClick:()=>v("approve"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition relative ${x==="approve"?"bg-purple-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[r.jsx(kt,{className:"h-4 w-4"}),"Approve Recordings",N.length>0&&r.jsx("span",{className:"ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5",children:N.length})]})]}),me&&r.jsx("div",{className:`mb-6 p-4 rounded-lg ${me.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:me}),r.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Select Subject"}),r.jsx("select",{value:c,onChange:q=>h(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:a.map(q=>r.jsx("option",{value:q.id,children:q.name},q.id))})]}),x==="recording"&&r.jsxs("form",{onSubmit:pn,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[r.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Recording"}),r.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Recordings will be pending approval before students can view them."}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),r.jsx("input",{type:"text",value:I,onChange:q=>S(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"e.g., Algebra Basics - Lesson 1",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Exam Board *"}),r.jsxs("select",{value:B,onChange:q=>Y(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[r.jsx("option",{value:"",children:"Select Exam Board"}),r.jsx("option",{value:"AQA",children:"AQA"}),r.jsx("option",{value:"Edexcel",children:"Edexcel"})]})]}),!ke()&&r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Tier *"}),r.jsxs("select",{value:le,onChange:q=>ee(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[r.jsx("option",{value:"",children:"Select Tier"}),r.jsx("option",{value:"Foundation",children:"Foundation"}),r.jsx("option",{value:"Higher",children:"Higher"})]})]}),ke()&&r.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:r.jsx("p",{className:"text-sm text-blue-800",children:"English subjects do not have Foundation/Higher tiers."})}),r.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700",children:"After upload, you will be taken to a new page to paste the HiDrive share link."}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Upload Video File"}),r.jsx("input",{type:"file",accept:"video/*",onChange:q=>{var ue;const G=((ue=q.target.files)==null?void 0:ue[0])||null;R(G),D(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),O>0&&O<100&&r.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",O,"%"]})]})]}),r.jsxs("button",{type:"submit",disabled:oe,className:"mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[r.jsx(wc,{className:"h-4 w-4"}),oe?"Adding...":"Add Recording (Pending Approval)"]})]}),x==="approve"&&r.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[r.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Approve Recordings"}),r.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Review and approve pending recordings. Only approved recordings will be visible to students."}),N.length===0?r.jsxs("div",{className:"text-center py-8",children:[r.jsx(kt,{className:"h-12 w-12 text-green-500 mx-auto mb-4"}),r.jsx("p",{className:"text-gray-600",children:"No pending recordings to approve."})]}):r.jsx("div",{className:"space-y-4",children:N.map(q=>r.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsxs("div",{className:"flex-1",children:[r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:q.title}),r.jsxs("div",{className:"space-y-1 text-sm text-gray-600",children:[r.jsxs("p",{children:[r.jsx("span",{className:"font-medium",children:"Subject:"})," ",q.subjectName]}),r.jsxs("p",{children:[r.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",q.examBoard]}),q.tier&&r.jsxs("p",{children:[r.jsx("span",{className:"font-medium",children:"Tier:"})," ",q.tier]}),q.date&&r.jsxs("p",{children:[r.jsx("span",{className:"font-medium",children:"Date:"})," ",q.date.toDate?q.date.toDate().toLocaleDateString("en-GB"):"N/A"]})]}),r.jsxs("a",{href:q.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm mt-2",children:[r.jsx(Js,{className:"h-4 w-4"}),"Preview Video"]})]}),r.jsxs("div",{className:"flex gap-2 ml-4",children:[r.jsxs("button",{onClick:()=>gn(q.id),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2",children:[r.jsx(kt,{className:"h-4 w-4"}),"Approve"]}),r.jsx("button",{onClick:()=>xn(q.id),className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition",children:"Reject"})]})]})},q.id))})]}),x==="homework"&&r.jsxs("form",{onSubmit:yn,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[r.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Homework"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),r.jsx("input",{type:"text",value:g,onChange:q=>w(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Description"}),r.jsx("textarea",{value:_,onChange:q=>E(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",rows:"3"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Due Date"}),r.jsx("input",{type:"datetime-local",value:b,onChange:q=>W(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Homework File *"}),r.jsx("input",{type:"file",required:!0,onChange:q=>{var ue;const G=((ue=q.target.files)==null?void 0:ue[0])||null;V(G),Ie(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"}),te>0&&te<100&&r.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",te,"%"]})]}),r.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700",children:"After upload, you will be taken to a new page to paste the HiDrive share link."})]}),r.jsxs("button",{type:"submit",disabled:oe,className:"mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[r.jsx(wc,{className:"h-4 w-4"}),oe?"Adding...":"Add Homework"]})]})]})}):null}const Ba="pendingRecording";function CE(){const s=Lt(),e=us(),[t,n]=A.useState(!0),[i,a]=A.useState(!1),[l,c]=A.useState(null),[h,m]=A.useState(""),[f,x]=A.useState(""),[v,I]=A.useState(""),[S,P]=A.useState(!1);A.useEffect(()=>{const O=Mi(lt,async D=>{if(!D){a(!1),n(!1),s("/login",{replace:!0});return}try{const B=await Ue(Le(be,"admins",D.uid)),Y=B.exists()?null:await Ue(Le(be,"teachers",D.uid));B.exists()||Y!=null&&Y.exists()?a(!0):(a(!1),s("/login",{replace:!0}))}catch(B){console.error("Error verifying role:",B),a(!1),s("/login",{replace:!0})}finally{n(!1)}});return()=>O()},[s]),A.useEffect(()=>{var B;const O=(B=e.state)==null?void 0:B.pendingRecording;if(O){sessionStorage.setItem(Ba,JSON.stringify(O)),c(O);return}const D=sessionStorage.getItem(Ba);if(D)try{c(JSON.parse(D))}catch{c(null)}},[e.state]),A.useEffect(()=>{(async()=>{if(l!=null&&l.subjectId)try{const D=await Ue(Le(be,"subjects",l.subjectId));D.exists()&&m(D.data().name||"")}catch(D){console.error("Error loading subject:",D)}})()},[l]);const R=async O=>{if(O.preventDefault(),!l){I("No pending upload found. Go back and upload again.");return}if(!f){I("Paste the HiDrive share link to continue.");return}P(!0),I("");try{const D=await AE({subjectId:l.subjectId,title:l.title,examBoard:l.examBoard,tier:l.tier,videoUrl:f,hidrivePath:l.hidrivePath,hidriveFileId:l.hidriveFileId});sessionStorage.removeItem(Ba);const B=(D==null?void 0:D.approvalStatus)==="approved"?"Recording added and approved!":"Recording added successfully! It will be visible to students after approval.";I(B)}catch(D){console.error("Error saving recording:",D),I("Failed to save recording")}finally{P(!1)}};return t?r.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),r.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):i?l?r.jsx("div",{className:"min-h-screen bg-gray-50",children:r.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[r.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[r.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Paste HiDrive Share Link"}),r.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Your upload is complete. Create a share link in HiDrive and paste it below."})]}),r.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[r.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Recording Details"}),r.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[r.jsxs("p",{children:[r.jsx("span",{className:"font-medium",children:"Title:"})," ",l.title]}),r.jsxs("p",{children:[r.jsx("span",{className:"font-medium",children:"Subject:"})," ",h||l.subjectId]}),r.jsxs("p",{children:[r.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",l.examBoard]}),l.tier&&r.jsxs("p",{children:[r.jsx("span",{className:"font-medium",children:"Tier:"})," ",l.tier]}),l.fileName&&r.jsxs("p",{children:[r.jsx("span",{className:"font-medium",children:"File:"})," ",l.fileName]})]})]}),r.jsxs("form",{onSubmit:R,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[r.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4",children:[r.jsx("p",{children:"1) Open HiDrive and find the uploaded file."}),r.jsx("p",{children:"2) Click Share -> Create link -> Copy link."}),r.jsx("p",{children:"3) Paste the link below and click Save Recording."})]}),r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HiDrive Share Link"}),r.jsx("input",{type:"url",value:f,onChange:O=>x(O.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://hidrive.ionos.com/lnk/...",required:!0}),v&&r.jsx("div",{className:`mt-4 p-3 rounded-md text-sm ${v.includes("successfully")||v.includes("approved")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:v}),r.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[r.jsx("button",{type:"submit",disabled:S,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:S?"Saving...":"Save Recording"}),r.jsx("button",{type:"button",onClick:()=>s("/admin"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Back to Admin"})]})]})]})}):r.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:r.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"No pending upload found. Please upload a file first."}),r.jsx("button",{onClick:()=>s("/admin",{replace:!0}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Back to Admin"})]})}):null}const qa="pendingHomework";function RE(){const s=Lt(),e=us(),[t,n]=A.useState(!0),[i,a]=A.useState(!1),[l,c]=A.useState(null),[h,m]=A.useState(""),[f,x]=A.useState(""),[v,I]=A.useState(""),[S,P]=A.useState(!1);A.useEffect(()=>{const O=Mi(lt,async D=>{if(!D){a(!1),n(!1),s("/login",{replace:!0});return}try{const B=await Ue(Le(be,"admins",D.uid)),Y=B.exists()?null:await Ue(Le(be,"teachers",D.uid));B.exists()||Y!=null&&Y.exists()?a(!0):(a(!1),s("/login",{replace:!0}))}catch(B){console.error("Error verifying role:",B),a(!1),s("/login",{replace:!0})}finally{n(!1)}});return()=>O()},[s]),A.useEffect(()=>{var B;const O=(B=e.state)==null?void 0:B.pendingHomework;if(O){sessionStorage.setItem(qa,JSON.stringify(O)),c(O);return}const D=sessionStorage.getItem(qa);if(D)try{c(JSON.parse(D))}catch{c(null)}},[e.state]),A.useEffect(()=>{(async()=>{if(l!=null&&l.subjectId)try{const D=await Ue(Le(be,"subjects",l.subjectId));D.exists()&&m(D.data().name||"")}catch(D){console.error("Error loading subject:",D)}})()},[l]);const R=async O=>{if(O.preventDefault(),!l){I("No pending upload found. Go back and upload again.");return}if(!f){I("Paste the HiDrive share link to continue.");return}P(!0),I("");try{await SE({subjectId:l.subjectId,title:l.title,description:l.description,dueDate:l.dueDate||null,attachmentUrl:f,attachmentName:l.attachmentName||l.fileName||null,attachmentContentType:l.attachmentContentType||null,attachmentSize:l.attachmentSize||null,hidrivePath:l.hidrivePath,hidriveFileId:l.hidriveFileId}),sessionStorage.removeItem(qa),I("Homework added successfully!")}catch(D){console.error("Error saving homework:",D),I("Failed to save homework")}finally{P(!1)}};return t?r.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),r.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):i?l?r.jsx("div",{className:"min-h-screen bg-gray-50",children:r.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[r.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[r.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Paste HiDrive Share Link"}),r.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Your upload is complete. Create a share link in HiDrive and paste it below."})]}),r.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[r.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Homework Details"}),r.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[r.jsxs("p",{children:[r.jsx("span",{className:"font-medium",children:"Title:"})," ",l.title]}),r.jsxs("p",{children:[r.jsx("span",{className:"font-medium",children:"Subject:"})," ",h||l.subjectId]}),l.dueDate&&r.jsxs("p",{children:[r.jsx("span",{className:"font-medium",children:"Due:"})," ",new Date(l.dueDate).toLocaleString("en-GB")]}),l.fileName&&r.jsxs("p",{children:[r.jsx("span",{className:"font-medium",children:"File:"})," ",l.fileName]})]})]}),r.jsxs("form",{onSubmit:R,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[r.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4",children:[r.jsx("p",{children:"1) Open HiDrive and find the uploaded file."}),r.jsx("p",{children:"2) Click Share -> Create link -> Copy link."}),r.jsx("p",{children:"3) Paste the link below and click Save Homework."})]}),r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HiDrive Share Link"}),r.jsx("input",{type:"url",value:f,onChange:O=>x(O.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://hidrive.ionos.com/lnk/...",required:!0}),v&&r.jsx("div",{className:`mt-4 p-3 rounded-md text-sm ${v.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:v}),r.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[r.jsx("button",{type:"submit",disabled:S,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:S?"Saving...":"Save Homework"}),r.jsx("button",{type:"button",onClick:()=>s("/admin"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Back to Admin"})]})]})]})}):r.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:r.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"No pending upload found. Please upload a file first."}),r.jsx("button",{onClick:()=>s("/admin",{replace:!0}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Back to Admin"})]})}):null}function PE(){return A.useEffect(()=>{Ag()},[]),r.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center px-4",children:r.jsxs("div",{className:"max-w-md w-full text-center",children:[r.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 md:p-10",children:[r.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:r.jsx(kt,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})}),r.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Payment confirmed"}),r.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for your purchase. You will receive a confirmation email shortly with your receipt and next steps."}),r.jsxs(ae,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",children:[r.jsx(Ke,{className:"h-5 w-5","aria-hidden":"true"}),"Back to home"]})]}),r.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-gray-500",children:[r.jsx(ct,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),r.jsx("span",{className:"text-sm",children:"MySchola"})]})]})})}function DE(){return A.useEffect(()=>{Sg(),kg()},[]),r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center px-4",children:r.jsxs("div",{className:"max-w-md w-full text-center",children:[r.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 md:p-10",children:[r.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:r.jsx(jp,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})}),r.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Booking Confirmed!"}),r.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for booking your free consultation. You will receive a confirmation email shortly with the meeting link and next steps."}),r.jsxs(ae,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 font-semibold min-h-[44px] touch-manipulation","aria-label":"Return to home page",children:[r.jsx(Ke,{className:"h-5 w-5","aria-hidden":"true"}),"Back to home"]})]}),r.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-gray-500",children:[r.jsx(ct,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),r.jsx("span",{className:"text-sm font-medium",children:"MySchola"})]})]})})}const VE=[0],ME=16,LE=0,mh=60,OE="Free GCSE Strategy Call",FE="Join our Free Flagship Live Webinar!",UE="Live GCSE strategy session for Maths, English, and Science â€” leave with a clear plan to raise grades fast.",BE="Zoom link shared after registration.",$a="https://calendly.com/myscholaukwebinar/new-meeting?month=2026-03",qE="https://www.youtube.com/embed/nTwfvwF0juo?rel=0";function $E({src:s,className:e}){const t=A.useRef(null);return A.useEffect(()=>{const n=t.current;if(!n)return;const i=()=>{n.readyState>=2&&(n.currentTime=.01,n.pause())};return n.addEventListener("loadedmetadata",i),n.readyState<2?n.load():i(),()=>{n.removeEventListener("loadedmetadata",i)}},[s]),r.jsxs("video",{ref:t,className:e,controls:!0,playsInline:!0,preload:"metadata",width:640,height:360,children:[r.jsx("source",{src:s,type:"video/mp4"}),r.jsx("track",{kind:"captions",src:"",label:"English",srclang:"en"}),"Your browser does not support the video tag."]})}function WE(s=new Date){const e=[],t=[];VE.forEach(m=>{const f=new Date(s),x=(m-f.getDay()+7)%7;f.setDate(f.getDate()+x),f.setHours(ME,LE,0,0);const v=new Date(f);x===0&&f<=s&&v.setDate(v.getDate()+7),e.push(v);const I=new Date(f);f>s&&I.setDate(I.getDate()-7),t.push(I)});const n=e.reduce((m,f)=>f<m?f:m),i=t.reduce((m,f)=>f>m?f:m),a=new Date(i.getTime()+mh*6e4),l=s>=i&&s<a,c=l?i:n,h=new Date(c.getTime()+mh*6e4);return{start:c,end:h,isLive:l}}function fh(s){return s.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}Z$/,"Z")}function HE(s,e){return`https://calendar.google.com/calendar/render?${new URLSearchParams({action:"TEMPLATE",text:FE,details:UE,location:BE,dates:`${fh(s)}/${fh(e)}`}).toString()}`}function ph(){const s=WE(),[e,t]=A.useState(()=>typeof window>"u"?!1:window.localStorage.getItem("webinarReminder")==="true"),[n,i]=A.useState(0),a=[{src:Ci,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:ki,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:Si,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:Ai,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:ji,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],l=a.length,c=[...a,...a,...a],h=l,m=l*2,[f,x]=A.useState(h),[v,I]=A.useState(!0),[S,P]=A.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),[R,O]=A.useState(()=>typeof window>"u"?97:0);A.useEffect(()=>{typeof window>"u"||window.localStorage.setItem("webinarReminder",e?"true":"false")},[e]),A.useEffect(()=>{const V=()=>{const te=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;P(te)};return V(),window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[]),A.useEffect(()=>{if(f<h||f>=m){I(!1);const V=f<h?f+l:f-l;x(V),requestAnimationFrame(()=>{requestAnimationFrame(()=>I(!0))})}},[f,h,m,l]),A.useEffect(()=>{if(typeof window>"u")return;let V;const te=2800,Ie=97,oe=window.performance?window.performance.now():Date.now(),M=me=>{const ce=me||Date.now(),ke=Math.min((ce-oe)/te,1),nt=Math.floor(ke*Ie);O(nt),ke<1&&(V=window.requestAnimationFrame(M))};return V=window.requestAnimationFrame(M),()=>{V&&window.cancelAnimationFrame(V)}},[]);const D=HE(s.start,s.end),B=V=>V===1?"Improved by 1 grade":`Improved by ${V} grades`,Y=[{value:"95%",label:"Students improve grades",className:"bg-blue-700 text-white"},{value:"2-3",label:"Grade improvement average",className:"bg-green-700 text-white"},{value:"300+",label:"Successful students",className:"bg-purple-700 text-white"}],le=[{stat:"5-10",statLabel:"hours a week",title:"Hours In",description:"Many students are already putting in serious revision time every single week.",icon:Ht,iconClass:"bg-blue-600 text-white",statClass:"text-blue-700"},{stat:"4-5",statLabel:"grade plateau",title:"Grades Stuck",description:"Despite the effort, many stay stuck at Grade 4 or 5 and cannot break through.",icon:vh,iconClass:"bg-amber-500 text-white",statClass:"text-amber-700"},{stat:"Lost",statLabel:"marks in the exam",title:"Marks Lost",description:"Students often know the content, but still drop marks through weak structure and poor exam technique.",icon:Fp,iconClass:"bg-rose-500 text-white",statClass:"text-rose-700"}],ee=[{title:"One-to-One Support",description:"Personalised lessons where your child only sees the tutor. Privacy-first, focus-first.",icon:Ga},{title:"Via Zoom",description:"High-quality video, interactive whiteboard, and chat support for fast progress.",icon:_h},{title:"Student Privacy",description:"Webcam and microphone are optional. Parents can monitor engagement for peace of mind.",icon:Eo}],N=[{step:"01",title:"Edexcel + AQA tracker",description:"Structured amber-light tracker to pinpoint strengths and gaps fast."},{step:"02",title:"Exemplar answers",description:"Techniques aligned directly to mark schemes so students know what earns marks and how to reach Grade 9."},{step:"03",title:"Exam practice + parent evenings",description:"Regular practice, progress reviews, and clear next steps to keep improvement steady."}],y="GCSE Strategy Call for Parents Who Want Faster Grade Growth",g="Exam technique. Clear diagnosis. Confidence. Results.",w=[{icon:Or,label:"Results-focused"},{icon:Yr,label:"Exam strategy"},{icon:Ga,label:"Parent clarity"},{icon:kt,label:"Action plan"}],_=[{eyebrow:"Pinpoint",title:"Why grades are stuck"},{eyebrow:"Plan",title:"What changes next"},{eyebrow:"Momentum",title:"How to move up faster"}],E=()=>{x(V=>V-1)},b=()=>{x(V=>V+1)},W=()=>{if(window.Calendly){window.Calendly.initPopupWidget({url:$a});return}const V=document.createElement("script");V.src="https://assets.calendly.com/assets/external/widget.js",V.async=!0,V.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:$a})},document.body.appendChild(V)},Z=[{q:"Who is this consultation call for?",a:"It is for parents of students in Years 9 to 11 who want clear support in GCSE Maths, English, or Science."},{q:"What happens on the consultation call?",a:"We talk through your child's current grade, the areas they are struggling with, how our lessons work, and the best next steps for improvement."},{q:"Do you offer a free trial lesson?",a:"Yes. If our tuition feels like the right fit after the consultation call, we can offer a free trial lesson so you can see how the teaching works before committing."}];return r.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50",children:[r.jsx("div",{className:"w-full bg-[#0B3D91] text-white py-3 px-4 shadow-md relative overflow-hidden",children:r.jsx("div",{className:"relative overflow-hidden",children:r.jsx("div",{className:"flex items-center gap-6 whitespace-nowrap animate-marquee-reverse text-sm sm:text-base md:text-lg font-bold",children:Array.from({length:3}).map((V,te)=>r.jsxs("div",{className:"flex items-center gap-3 pr-6",children:[r.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs sm:text-sm uppercase tracking-wide",children:[r.jsxs("span",{className:"relative inline-flex h-2 w-2",children:[r.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75"}),r.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-white"})]}),"Attention"]}),r.jsx("span",{children:"Parents of GCSE Years 9, 10 & 11 students"}),r.jsx("span",{className:"text-white/80",children:"|"}),r.jsx("span",{className:"text-white/90",children:"Spaces are running out - join this month's cohort"})]},`banner-${te}`))})})}),r.jsx("div",{className:"max-w-6xl mx-auto px-4 py-16 sm:py-20",children:r.jsxs("div",{className:"bg-white/90 rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden",children:[r.jsx("div",{className:"pointer-events-none absolute -top-32 -right-24 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl"}),r.jsx("div",{className:"pointer-events-none absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"}),r.jsxs("div",{className:"relative z-10",children:[r.jsx("div",{className:"flex justify-center",children:r.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-4 py-2 text-blue-700 font-semibold text-sm uppercase tracking-wide shadow-sm",children:[r.jsx(Ha,{className:"h-4 w-4","aria-hidden":"true"}),OE]})}),r.jsxs("div",{className:"mt-6 text-center",children:[r.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900",children:y}),r.jsx("p",{className:"mt-4 text-lg sm:text-xl font-semibold text-slate-600",children:g})]}),r.jsx("div",{className:"mt-8 flex flex-wrap items-center justify-center gap-3",children:w.map(({icon:V,label:te})=>r.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm",children:[r.jsx(V,{className:"h-4 w-4 text-blue-600","aria-hidden":"true"}),r.jsx("span",{children:te})]},te))}),r.jsx("div",{className:"mt-8 w-full rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-6 sm:p-8 shadow-[0_24px_60px_rgba(37,99,235,0.12)]",children:r.jsxs("div",{className:"flex flex-col items-center gap-5 text-center",children:[r.jsxs("span",{className:"inline-flex w-fit items-center gap-2 rounded-full bg-red-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700",children:[r.jsx(ws,{className:"h-4 w-4","aria-hidden":"true"}),"Limited spaces this month"]}),r.jsx("h3",{className:"max-w-4xl text-3xl leading-tight sm:text-4xl font-bold text-slate-900",children:"Short call. Sharp diagnosis. Clear next steps."}),r.jsx("p",{className:"max-w-3xl text-base sm:text-lg font-semibold text-slate-600",children:"We guarantee to boost your child's grades by 2-3 with the right strategy, structure, and support."}),r.jsx("div",{className:"w-full max-w-3xl rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-100 via-white to-lime-50 p-5 shadow-[0_20px_55px_rgba(16,185,129,0.18)]",children:r.jsxs("div",{className:"flex flex-col items-center gap-2",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white",children:[r.jsx(Or,{className:"h-4 w-4","aria-hidden":"true"}),"Money-back promise"]}),r.jsx("p",{className:"text-lg sm:text-2xl font-extrabold text-slate-900",children:"Follow the system. No improvement. Full refund."})]})}),r.jsxs("button",{type:"button",onClick:W,className:"group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 px-8 sm:px-12 py-4 sm:py-5 text-white text-lg sm:text-xl font-extrabold ring-2 ring-blue-300/40 hover:shadow-2xl hover:-translate-y-0.5 transition overflow-hidden cta-button",children:[r.jsx("span",{className:"cta-shimmer","aria-hidden":"true"}),r.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition","aria-hidden":"true"}),r.jsxs("span",{className:"relative inline-flex items-center gap-2",children:[r.jsx(ws,{className:"h-5 w-5 text-white/90","aria-hidden":"true"}),"Book Free Strategy Call"]})]})]})}),r.jsx("div",{className:"mt-6 grid gap-4 sm:grid-cols-3",children:_.map(V=>r.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white/90 p-5 text-center shadow-sm",children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-blue-700",children:V.eyebrow}),r.jsx("p",{className:"mt-2 text-lg font-semibold text-slate-900",children:V.title})]},V.title))}),r.jsxs("div",{className:"mt-6 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-5 sm:p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]",children:[r.jsxs("div",{className:"text-center",children:[r.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700",children:[r.jsx(ws,{className:"h-4 w-4","aria-hidden":"true"}),"Founder walkthrough"]}),r.jsx("h3",{className:"mt-4 text-2xl sm:text-3xl font-black tracking-tight text-slate-900 text-center",children:"See the MySchola method"}),r.jsx("p",{className:"mt-3 text-sm sm:text-base font-semibold text-slate-600 text-center",children:"Strategy. Structure. Grade momentum."}),r.jsxs("div",{className:"mt-4 flex flex-wrap items-center justify-center gap-2",children:[r.jsx("span",{className:"rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm",children:"Exam technique"}),r.jsx("span",{className:"rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm",children:"Parent clarity"}),r.jsx("span",{className:"rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm",children:"Grade growth"})]})]}),r.jsx("div",{className:"mt-4 overflow-hidden rounded-2xl border border-slate-100 bg-black",style:{aspectRatio:"16 / 9",width:"100%",maxWidth:"960px",margin:"0 auto"},children:r.jsx("iframe",{className:"h-full w-full",src:qE,title:"Tuition overview video",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0,width:960,height:540})}),r.jsx("div",{className:"mt-6 flex justify-center",children:r.jsxs("button",{type:"button",onClick:W,className:"group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 px-12 py-6 text-white text-2xl font-extrabold ring-2 ring-blue-300/40 hover:shadow-2xl hover:-translate-y-0.5 transition overflow-hidden cta-button",children:[r.jsx("span",{className:"cta-shimmer","aria-hidden":"true"}),r.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition","aria-hidden":"true"}),r.jsxs("span",{className:"relative inline-flex items-center gap-2",children:[r.jsx(ws,{className:"h-5 w-5 text-white/90","aria-hidden":"true"}),"Yes, I Want to Book a Call With MySchola"]})]})}),r.jsxs("div",{className:"mt-8",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("div",{className:"h-px flex-1 bg-slate-200"}),r.jsx("span",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wide",children:"Or book directly below"}),r.jsx("div",{className:"h-px flex-1 bg-slate-200"})]}),r.jsx("div",{className:"mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white",style:{minHeight:"700px",width:"100%",maxWidth:"800px",margin:"0 auto"},children:r.jsx("iframe",{src:`${$a}&embed_type=Inline`,className:"h-full w-full",style:{minHeight:"700px"},title:"Book your strategy call",frameBorder:"0",loading:"lazy",width:800,height:700})})]})]}),r.jsxs("div",{className:"mt-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 sm:p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]",children:[r.jsxs("div",{className:"grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_320px] lg:items-start",children:[r.jsxs("div",{children:[r.jsx("span",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700",children:"The gaps we fix"}),r.jsx("h3",{className:"mt-4 max-w-3xl text-2xl sm:text-3xl font-bold text-gray-900",children:"The three core problems we solve at MySchola:"}),r.jsx("p",{className:"mt-3 max-w-2xl text-base sm:text-lg text-gray-600",children:"Many students are already working hard. The real issue is that their effort is not translating into marks in the exam."})]}),r.jsxs("div",{className:"rounded-3xl border border-blue-100 bg-white p-5 shadow-lg",children:[r.jsx("div",{className:"text-xs font-semibold uppercase tracking-wide text-blue-700",children:"The real gap"}),r.jsx("p",{className:"mt-3 text-xl sm:text-2xl font-bold text-gray-900",children:"The jump from Grade 5 to Grade 9 usually comes down to strategy."}),r.jsx("p",{className:"mt-3 text-sm sm:text-base text-gray-600",children:"It is answer structure, exam technique, and knowing exactly how to turn subject knowledge into marks."})]})]}),r.jsx("div",{className:"mt-8 grid gap-4 md:grid-cols-3",children:le.map((V,te)=>{const Ie=V.icon;return r.jsxs("div",{className:"consultation-problem-card group rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl",style:{animationDelay:`${te*140}ms`},children:[r.jsxs("div",{className:"flex items-start justify-between gap-4",children:[r.jsx("div",{className:`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${V.iconClass} shadow-lg`,children:r.jsx(Ie,{className:"h-5 w-5","aria-hidden":"true"})}),r.jsxs("div",{className:"text-right",children:[r.jsx("div",{className:`text-3xl sm:text-4xl font-black tracking-tight ${V.statClass}`,children:V.stat}),r.jsx("div",{className:"text-xs font-semibold text-gray-500",children:V.statLabel})]})]}),r.jsx("h4",{className:"mt-6 text-lg sm:text-xl font-semibold text-gray-900",children:V.title}),r.jsx("p",{className:"mt-3 text-sm sm:text-base text-gray-600",children:V.description})]},V.title)})}),r.jsx("div",{className:"mt-6 rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-blue-50 p-5 sm:p-6",children:r.jsxs("div",{className:"flex items-start gap-4",children:[r.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg",children:r.jsx(Yr,{className:"h-5 w-5","aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-lg sm:text-xl font-bold text-gray-900",children:"Our tuition is built to solve the exact reasons students stay stuck."}),r.jsx("p",{className:"mt-2 text-sm sm:text-base text-gray-600",children:"We focus on exam technique, answer structure, and smarter revision habits so students can turn effort into measurable grade improvement."})]})]})})]}),r.jsxs("div",{className:"mt-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50/60 p-6 sm:p-8 shadow-sm",children:[r.jsxs("div",{className:"max-w-4xl",children:[r.jsx("span",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700",children:"What we do differently"}),r.jsx("h3",{className:"mt-4 text-2xl sm:text-3xl font-bold text-gray-900",children:"Why families choose our tuition over other options"}),r.jsx("p",{className:"mt-3 text-base sm:text-lg text-gray-600",children:"We combine strong teaching, progress tracking, homework support, and clear exam preparation in one structured programme."})]}),r.jsx("div",{className:"mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm",children:r.jsx("img",{src:Nh,alt:"Comparison table showing what MySchola does differently compared with other providers and one-to-one home tutors",className:"w-full h-auto object-contain",loading:"lazy",width:1152,height:768})})]}),r.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-3",children:Y.map(V=>r.jsxs("div",{className:`rounded-2xl p-5 text-center shadow-md ${V.className}`,children:[r.jsx("div",{className:"text-3xl sm:text-4xl font-bold text-white",children:V.value}),r.jsx("div",{className:"mt-2 text-sm font-semibold",children:V.label})]},V.value))}),r.jsx("p",{className:"text-xs text-gray-500 mt-3",children:"Results based on historical performance. Individual outcomes vary."}),!1,r.jsxs("div",{className:"mt-8 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/60 p-8 sm:p-10 shadow-sm",children:[r.jsxs("div",{className:"flex flex-col gap-3",children:[r.jsx("span",{className:"inline-flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700",children:"What to expect"}),r.jsxs("h3",{className:"text-3xl sm:text-4xl font-bold text-gray-900",children:["A clear plan for measurable GCSE gains to",r.jsx("span",{className:"ml-2 text-emerald-600 text-3xl sm:text-4xl font-extrabold underline decoration-emerald-300 decoration-4 underline-offset-4 animate-soft-glow",children:"Grade 9"})]}),r.jsx("p",{className:"text-lg sm:text-xl text-gray-700 max-w-2xl",children:"Three focused steps we deliver in our lessons so families leave with a concrete action plan."})]}),r.jsx("div",{className:"mt-6 grid gap-4 md:grid-cols-3",children:N.map(V=>r.jsxs("div",{className:"rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white",children:V.step}),r.jsx("h4",{className:"text-lg sm:text-xl font-semibold text-gray-900",children:V.title})]}),r.jsx("p",{className:"mt-3 text-base sm:text-lg text-gray-700",children:V.description})]},V.step))}),r.jsxs("div",{className:"mt-6 flex items-center gap-2 text-base sm:text-lg font-semibold text-emerald-700",children:[r.jsx(kt,{className:"h-5 w-5","aria-hidden":"true"}),"Live examples and Q&A included"]})]}),r.jsxs("div",{className:"mt-10 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-10 shadow-lg",children:[r.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700",children:[r.jsx(ws,{className:"h-3.5 w-3.5","aria-hidden":"true"}),"Parents love this session"]}),r.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-gray-900 mt-3",children:"Reserve your spot now"}),r.jsx("p",{className:"text-gray-700 mt-2 max-w-2xl text-base sm:text-lg",children:"Book in under a minute and get the private Zoom link plus the follow-up resources."})]}),r.jsx("div",{className:"flex items-center justify-center",children:r.jsx("div",{className:"relative rounded-3xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 p-[2px] shadow-lg",children:r.jsxs("div",{className:"relative flex items-center gap-4 rounded-[22px] bg-white px-7 py-5 overflow-hidden",children:[r.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-60",children:r.jsx("div",{className:"absolute -left-1/3 top-0 h-full w-1/2 rotate-6 bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent animate-pulse"})}),r.jsxs("span",{className:"absolute -top-2 -right-2 inline-flex h-4 w-4",children:[r.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),r.jsx("span",{className:"relative inline-flex h-4 w-4 rounded-full bg-emerald-500"})]}),r.jsxs("div",{className:"relative text-4xl sm:text-5xl font-extrabold text-emerald-600 tracking-tight drop-shadow-sm animate-pulse",children:[R,"%"]}),r.jsx("div",{className:"relative text-base sm:text-lg font-semibold text-gray-800",children:"of parents recommend us"})]})})})]}),r.jsx("div",{className:"mt-6 grid gap-3 sm:grid-cols-3",children:["Clear consultation with real examples","Action plan you can use immediately"].map(V=>r.jsxs("div",{className:"flex items-start gap-2 rounded-xl bg-white/80 px-4 py-3 text-sm font-semibold text-gray-700",children:[r.jsx(kt,{className:"mt-0.5 h-4 w-4 text-emerald-600","aria-hidden":"true"}),r.jsx("span",{children:V})]},V))}),r.jsxs("div",{className:"mt-8",children:[r.jsx("button",{type:"button",onClick:W,className:"inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-8 py-5 text-white text-xl font-bold shadow-xl hover:bg-blue-700 transition",children:"Yes, I Want to Book a Call With MySchola"}),r.jsx("p",{className:"text-xs text-gray-500 mt-3 text-center",children:"Secure Calendly pop-up. No card required."})]}),r.jsxs("div",{className:"mt-6 flex flex-wrap gap-3",children:[r.jsxs("a",{href:D,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition",children:[r.jsx(Ha,{className:"h-4 w-4","aria-hidden":"true"}),"Add to Google Calendar"]}),r.jsxs("button",{type:"button",onClick:()=>t(V=>!V),className:`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${e?"border-green-200 text-green-700 bg-green-50":"border-gray-200 text-gray-700 hover:bg-gray-50"}`,children:[r.jsx(wp,{className:"h-4 w-4","aria-hidden":"true"}),e?"Reminder set":"Set a reminder"]})]})]}),r.jsxs("div",{className:"mt-12 rounded-3xl border border-gray-200 bg-white p-8",children:[r.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700",children:[r.jsx(Or,{className:"h-4 w-4","aria-hidden":"true"}),"From our main tutoring programme"]}),r.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-900 mt-4",children:"How MySchola lessons work"}),r.jsx("p",{className:"text-gray-600 mt-2",children:"These are the same methods used in our full tutoring programme, adapted for this webinar."})]}),r.jsx("div",{className:"mt-8 grid gap-6 md:grid-cols-3",children:ee.map(V=>{const te=V.icon;return r.jsxs("div",{className:"rounded-2xl border border-blue-100 bg-blue-50/60 p-6 text-left shadow-sm",children:[r.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white",children:r.jsx(te,{className:"h-6 w-6","aria-hidden":"true"})}),r.jsx("h3",{className:"mt-4 text-lg font-semibold text-gray-900",children:V.title}),r.jsx("p",{className:"mt-2 text-sm text-gray-600",children:V.description})]},V.title)})})]}),r.jsxs("div",{className:"mt-12 rounded-3xl border border-gray-200 bg-white p-8",children:[r.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[r.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-900",children:"Our tutors study at the UK's most prestigious universities"}),r.jsx("p",{className:"text-gray-600 mt-2 max-w-3xl mx-auto",children:"Learn from the best to achieve your best."})]}),r.jsx("div",{className:"relative overflow-hidden mt-8",children:r.jsxs("div",{className:"flex animate-marquee",children:[[{src:Jr,alt:"University of Nottingham",name:"Nottingham"},{src:Xr,alt:"King's College London",name:"King's College"},{src:Zr,alt:"University of Cambridge",name:"Cambridge"},{src:ei,alt:"Imperial College London",name:"Imperial"},{src:ti,alt:"University of Warwick",name:"Warwick"}].map((V,te)=>r.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:r.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-32 sm:h-40 lg:h-44 w-56 sm:w-64 lg:w-72 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:r.jsx("img",{src:V.src,alt:V.alt,className:"w-full h-full object-contain",loading:"lazy",width:288,height:176})})},`first-${te}`)),[{src:Jr,alt:"University of Nottingham",name:"Nottingham"},{src:Xr,alt:"King's College London",name:"King's College"},{src:Zr,alt:"University of Cambridge",name:"Cambridge"},{src:ei,alt:"Imperial College London",name:"Imperial"},{src:ti,alt:"University of Warwick",name:"Warwick"}].map((V,te)=>r.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:r.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-32 sm:h-40 lg:h-44 w-56 sm:w-64 lg:w-72 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:r.jsx("img",{src:V.src,alt:V.alt,className:"w-full h-full object-contain",loading:"lazy",width:288,height:176})})},`second-${te}`))]})})]}),r.jsx("div",{className:"mt-12 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-blue-50/70 p-8",children:r.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[r.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-900",children:"Video testimonials"}),r.jsx("p",{className:"text-gray-600 mt-2",children:"Hear directly from students and parents about their progress."}),r.jsxs("div",{className:"relative mt-10 sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[r.jsx("button",{type:"button",onClick:E,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:r.jsx(Ke,{className:"h-5 w-5","aria-hidden":"true"})}),r.jsx("div",{className:"overflow-hidden sm:col-start-2",children:r.jsx("div",{className:`flex ${v?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${f*(100/S)}%)`},children:c.map((V,te)=>{const Ie=Math.floor(S/2),oe=te===f+Ie;return r.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/S}%`},children:r.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${oe?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[r.jsx($E,{src:V.src,className:"w-full h-auto rounded-t-2xl"}),r.jsxs("div",{className:"p-4 text-center",children:[r.jsx("p",{className:"text-lg font-semibold text-gray-900",children:V.name}),r.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[r.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:V.subjects.join(" / ")}),r.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:B(V.improvedBy)})]})]})]})},`${V.id}-${te}`)})})}),r.jsx("button",{type:"button",onClick:b,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:r.jsx(at,{className:"h-5 w-5","aria-hidden":"true"})}),r.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[r.jsx("button",{type:"button",onClick:E,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:r.jsx(Ke,{className:"h-5 w-5","aria-hidden":"true"})}),r.jsx("button",{type:"button",onClick:b,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:r.jsx(at,{className:"h-5 w-5","aria-hidden":"true"})})]})]})]})}),r.jsxs("div",{className:"mt-10 rounded-2xl border border-gray-200 p-6",children:[r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Quick FAQ"}),r.jsx("div",{className:"space-y-3",children:Z.map((V,te)=>r.jsxs("div",{className:"border border-gray-100 rounded-xl",children:[r.jsxs("button",{type:"button",onClick:()=>i(n===te?-1:te),className:"w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-gray-900","aria-expanded":n===te,children:[V.q,r.jsx("span",{className:"text-blue-600",children:n===te?"-":"+"})]}),n===te&&r.jsx("div",{className:"px-4 pb-4 text-sm text-gray-600",children:V.a})]},V.q))})]}),r.jsx("div",{className:"mt-10",children:r.jsxs(ae,{to:"/",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold",children:[r.jsx(Ke,{className:"h-4 w-4","aria-hidden":"true"}),"Back to home"]})})]})]})})]})}const zE="myscholauk@gmail.com",GE="447344193804",gh=`https://wa.me/${GE}`;function xh(){const s=us(),e=s.state&&s.state.fromRegistration,t=typeof window<"u"&&window.sessionStorage.getItem("strategyCallRegistered")==="true",n=!!(e||t),i=`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(gh)}`;return A.useEffect(()=>{var a,l;typeof window>"u"||(l=(a=window.Calendly)==null?void 0:a.closePopupWidget)==null||l.call(a)},[]),r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50",children:r.jsx("div",{className:"mx-auto max-w-5xl px-4 py-16 sm:py-20",children:r.jsxs("div",{className:"overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 shadow-[0_30px_80px_rgba(15,23,42,0.08)]",children:[r.jsxs("div",{className:"bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400 px-8 py-10 text-white sm:px-10",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-semibold",children:[r.jsx(kt,{className:"h-4 w-4","aria-hidden":"true"}),"Booking confirmed"]}),r.jsx("h1",{className:"mt-4 text-3xl font-bold sm:text-4xl",children:"Your MySchola strategy call is booked."}),r.jsx("p",{className:"mt-3 max-w-3xl text-base text-white/90 sm:text-lg",children:"Check the email you used to book. Your confirmation contains your scheduled time, your private Zoom link, and your reschedule options."})]}),r.jsxs("div",{className:"px-8 py-8 sm:px-10 sm:py-10",children:[n?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"grid gap-4 lg:grid-cols-3",children:[r.jsxs("div",{className:"rounded-3xl border border-slate-200 bg-slate-50 p-6",children:[r.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-600",children:[r.jsx(Qr,{className:"h-4 w-4 text-blue-600","aria-hidden":"true"}),"Confirmation email"]}),r.jsx("p",{className:"mt-3 text-lg font-bold text-gray-900",children:"Check your inbox first"}),r.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Search for your booking confirmation from MySchola or Calendly if it has not appeared yet."})]}),r.jsxs("div",{className:"rounded-3xl border border-blue-200 bg-blue-50 p-6",children:[r.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-blue-700",children:[r.jsx(Js,{className:"h-4 w-4","aria-hidden":"true"}),"Private Zoom link"]}),r.jsx("p",{className:"mt-3 text-lg font-bold text-gray-900",children:"Your Zoom link is in the confirmation email"}),r.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Use the private Zoom link in that email at your booked time. If you cannot find it, message us and we will resend the details."})]}),r.jsxs("div",{className:"rounded-3xl border border-emerald-200 bg-emerald-50 p-6",children:[r.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-700",children:[r.jsx(kt,{className:"h-4 w-4","aria-hidden":"true"}),"Before the call"]}),r.jsx("p",{className:"mt-3 text-lg font-bold text-gray-900",children:"Come ready with your child's current grades and main concerns"}),r.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"We will use the call to identify the main barriers, map out the right support, and show you exactly how our programme works."})]})]}),r.jsxs("div",{className:"mt-8 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 sm:p-8",children:[r.jsxs("div",{className:"max-w-3xl",children:[r.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.2em] text-blue-700",children:"Need the details quickly?"}),r.jsx("h2",{className:"mt-3 text-2xl font-bold text-gray-900 sm:text-3xl",children:"Everything you need for your strategy call is below."}),r.jsx("p",{className:"mt-3 text-base text-gray-600 sm:text-lg",children:"If you need help before the call, contact us on WhatsApp or email and we will get back to you as quickly as possible."})]}),r.jsxs("div",{className:"mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_320px]",children:[r.jsxs("div",{className:"grid gap-4",children:[r.jsxs("div",{className:"rounded-3xl border border-green-200 bg-white p-6 shadow-sm",children:[r.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-green-700",children:[r.jsx(Ne,{className:"h-4 w-4","aria-hidden":"true"}),"WhatsApp"]}),r.jsx("p",{className:"mt-3 text-xl font-bold text-gray-900",children:"Message us directly on WhatsApp"}),r.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Use WhatsApp if you need us to resend your booking details or help you locate the Zoom link before the call."}),r.jsxs("a",{href:gh,target:"_blank",rel:"noopener noreferrer",className:"mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700",children:["Open WhatsApp chat",r.jsx(at,{className:"h-4 w-4","aria-hidden":"true"})]}),r.jsx("p",{className:"mt-3 text-sm font-semibold text-gray-700",children:"WhatsApp: +44 7344 193804"})]}),r.jsxs("div",{className:"rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",children:[r.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-700",children:[r.jsx(Qr,{className:"h-4 w-4 text-blue-600","aria-hidden":"true"}),"Email"]}),r.jsx("p",{className:"mt-3 text-xl font-bold text-gray-900",children:"myscholauk@gmail.com"}),r.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"If you prefer email, contact us here and we can resend your confirmation details or answer any questions before the call."}),r.jsxs("a",{href:`mailto:${zE}`,className:"mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50",children:["Email MySchola",r.jsx(at,{className:"h-4 w-4","aria-hidden":"true"})]})]})]}),r.jsxs("div",{className:"rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-green-700",children:[r.jsx(Ne,{className:"h-4 w-4","aria-hidden":"true"}),"WhatsApp QR code"]}),r.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Scan this code on your phone to open a WhatsApp chat with MySchola."}),r.jsx("img",{src:i,alt:"WhatsApp QR code for MySchola",className:"mx-auto mt-5 h-52 w-52 rounded-2xl border border-slate-100",loading:"lazy"})]})]})]})]}):r.jsxs("div",{className:"rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8",children:[r.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.2em] text-amber-700",children:"No booking found"}),r.jsx("h2",{className:"mt-3 text-2xl font-bold text-gray-900",children:"Book your strategy call first to view the confirmation details."}),r.jsx("p",{className:"mt-3 max-w-2xl text-sm text-gray-700 sm:text-base",children:"Once you complete your booking, this page will show the next-step details for your Zoom call, along with the WhatsApp and email contact options."})]}),r.jsxs("div",{className:"mt-10 flex flex-wrap gap-4",children:[r.jsx(ae,{to:"/book-strategy-call",className:"inline-flex items-center justify-center rounded-full border border-gray-200 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50",children:"Back to strategy call page"}),r.jsx(ae,{to:"/",className:"inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700",children:"Back to home"})]})]})]})})})}function KE({src:s,className:e}){const t=A.useRef(null);return A.useEffect(()=>{const n=t.current;if(!n)return;const i=()=>{n.readyState>=2&&(n.currentTime=.01,n.pause())};return n.addEventListener("loadedmetadata",i),n.readyState<2?n.load():i(),()=>{n.removeEventListener("loadedmetadata",i)}},[s]),r.jsxs("video",{ref:t,className:e,controls:!0,playsInline:!0,preload:"metadata",children:[r.jsx("source",{src:s,type:"video/mp4"}),"Your browser does not support the video tag."]})}function QE(){const s=Lt(),[e,t]=A.useState(!1),[n,i]=A.useState(9),[a,l]=A.useState(2),[c,h]=A.useState(!0),[m,f]=A.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),x=[{src:Ci,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:ki,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:Si,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:Ai,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:ji,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],v=x.length,I=[...x,...x,...x],S=v,P=v*2;A.useEffect(()=>{const w=()=>{const _=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;f(_)};return w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[]),A.useEffect(()=>{if(a<S||a>=P){h(!1);const w=a<S?a+v:a-v;l(w),requestAnimationFrame(()=>{requestAnimationFrame(()=>h(!0))})}},[a,S,P,v]);const R=w=>w===1?"Improved by 1 grade":`Improved by ${w} grades`,O=()=>{l(w=>w-1)},D=()=>{l(w=>w+1)},B=()=>{const w="https://calendly.com/admin-myschola/30min";if(window.Calendly)window.Calendly.initPopupWidget({url:w,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0});else{const _=document.createElement("script");_.src="https://assets.calendly.com/assets/external/widget.js",_.async=!0,_.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:w,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0})},document.body.appendChild(_),setTimeout(()=>{window.Calendly||window.open(w,"_blank","noopener,noreferrer")},1e3)}},Y=()=>{Qa(),s("/booking",{replace:!1}),B()},[le,ee]=A.useState(""),N="Building Strong Foundations for GCSE Success",y=80;A.useEffect(()=>{let w=0,_=!0;const E=setInterval(()=>{_?w<=N.length?(ee(N.slice(0,w)),w++):(_=!1,setTimeout(()=>{},2e3)):w>0?(ee(N.slice(0,w)),w--):_=!0},y);return()=>clearInterval(E)},[]);const g=w=>{s(`/package?year=${w}`)};return r.jsxs("div",{className:"min-h-screen bg-white",children:[r.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),r.jsx("div",{className:"w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md",children:"Join our March cohort as soon as possible — spaces are running out!"}),r.jsxs("nav",{className:"sticky top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center h-16",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx(ct,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),r.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),r.jsx("div",{className:"hidden md:flex justify-center",children:r.jsxs("div",{className:"flex items-center space-x-8",children:[r.jsx(ae,{to:"/",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),r.jsx(ae,{to:"/courses",className:"text-blue-600 font-semibold",children:"Courses"}),r.jsx("a",{href:"/#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),r.jsx("a",{href:"/#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),r.jsx("a",{href:"/#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"})]})}),r.jsxs("div",{className:"flex items-center justify-end",children:[r.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[r.jsx(ae,{to:"/login",className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center","aria-label":"Log in",children:"Log In"}),r.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Yt,className:"bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2","aria-label":"Contact us on WhatsApp",children:[r.jsx(Ne,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})]}),r.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>t(!e),"aria-label":e?"Close menu":"Open menu","aria-expanded":e,"aria-controls":"mobile-menu",children:e?r.jsx(Ti,{className:"h-6 w-6","aria-hidden":"true"}):r.jsx(Ii,{className:"h-6 w-6","aria-hidden":"true"})})]})]})}),e&&r.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:r.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[r.jsx(ae,{to:"/",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),r.jsx(ae,{to:"/courses",className:"block px-3 py-2 text-blue-600 font-semibold bg-blue-50",role:"menuitem",children:"Courses"}),r.jsx("a",{href:"/#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),r.jsx("a",{href:"/#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),r.jsx("a",{href:"/#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),r.jsx(ae,{to:"/login",className:"block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",role:"menuitem",children:"Log In"}),r.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Yt,className:"block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2","aria-label":"Contact us on WhatsApp",role:"menuitem",children:r.jsxs("span",{className:"inline-flex items-center gap-2",children:[r.jsx(Ne,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})})]})})]}),r.jsxs("main",{id:"main-content",children:[r.jsx("section",{className:"pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Courses hero section",children:r.jsxs("div",{className:"max-w-7xl mx-auto text-center",children:[r.jsxs("h1",{className:"text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-12 tracking-tight",children:["Select your ",r.jsx("span",{className:"text-blue-600",children:"year group"}),":"]}),r.jsx("div",{className:"flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8",children:[9,10,11].map(w=>r.jsxs("button",{onClick:()=>g(w),className:"w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-6 rounded-xl font-bold text-xl sm:text-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 bg-white text-gray-800 border-4 border-gray-200 hover:border-blue-500 hover:text-blue-600 hover:shadow-xl hover:scale-105 active:scale-95 focus:ring-blue-400 cursor-pointer touch-manipulation min-h-[80px] sm:min-h-[90px] flex items-center justify-center","aria-label":`Select Year ${w}`,children:["Year ",w]},w))}),r.jsxs("p",{className:"text-lg sm:text-xl text-blue-600 font-medium min-h-[1.75rem]",children:[le,r.jsx("span",{className:"animate-pulse",children:"|"})]})]})}),r.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8","aria-labelledby":"course-content-heading",children:r.jsx("div",{className:"max-w-7xl mx-auto",children:r.jsxs("div",{className:"bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 sm:p-12 text-white",children:[r.jsx("h3",{className:"text-2xl sm:text-3xl font-bold mb-8 text-center",children:"What's included"}),r.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[r.jsx("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6",children:r.jsxs("div",{className:"flex items-start gap-4",children:[r.jsx("div",{className:"bg-white/20 rounded-lg p-3 flex-shrink-0",children:r.jsx(og,{className:"h-6 w-6 text-white"})}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-xl font-semibold mb-2",children:"Live Online Small Group Lessons"}),r.jsxs("p",{className:"text-blue-100 leading-relaxed",children:["Our lessons cover the ",r.jsx("strong",{className:"text-white",children:"breadth of each topic"}),", methodically building on key concepts taught by our ",r.jsx("strong",{className:"text-white",children:"specialist teachers with at least 8 years of teaching experience"}),". Each lesson is ",r.jsx("strong",{className:"text-white",children:"1 hour long"}),"."]})]})]})}),r.jsx("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6",children:r.jsxs("div",{className:"flex items-start gap-4",children:[r.jsx("div",{className:"bg-white/20 rounded-lg p-3 flex-shrink-0",children:r.jsx(vh,{className:"h-6 w-6 text-white"})}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-xl font-semibold mb-2",children:"Regular Parents Evening"}),r.jsxs("p",{className:"text-blue-100 leading-relaxed",children:[r.jsx("strong",{className:"text-white",children:"Regular parents evening information every month"})," to show progress of the student. We continuously monitor progress to ensure every student keeps pace with the curriculum."]})]})]})}),r.jsx("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6",children:r.jsxs("div",{className:"flex items-start gap-4",children:[r.jsx("div",{className:"bg-white/20 rounded-lg p-3 flex-shrink-0",children:r.jsx(Vp,{className:"h-6 w-6 text-white"})}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-xl font-semibold mb-2",children:"Engaging Multimedia Teaching"}),r.jsxs("p",{className:"text-blue-100 leading-relaxed",children:["During the lesson, concepts are taught using ",r.jsx("strong",{className:"text-white",children:"illustration, animation and walkthroughs"}),". This ",r.jsx("strong",{className:"text-white",children:"multi-sensory approach"})," ensures concepts stick and students remain engaged throughout."]})]})]})}),r.jsx("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6",children:r.jsxs("div",{className:"flex items-start gap-4",children:[r.jsx("div",{className:"bg-white/20 rounded-lg p-3 flex-shrink-0",children:r.jsx(Yr,{className:"h-6 w-6 text-white"})}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-xl font-semibold mb-2",children:"Detailed Exam Technique Training"}),r.jsxs("p",{className:"text-blue-100 leading-relaxed",children:["We ",r.jsx("strong",{className:"text-white",children:"explicitly teach detailed exam technique"})," in our lessons, going through ",r.jsx("strong",{className:"text-white",children:"several questions in each lesson"}),". Students learn exactly how to ",r.jsx("strong",{className:"text-white",children:"structure answers to maximise marks"}),"."]})]})]})})]})]})})}),r.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"testimonials-heading",children:r.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[r.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Testimonials from Students"}),r.jsx("p",{className:"text-gray-600 mb-12",children:"Short clips from students, with the subject and grade improvements below."}),r.jsxs("div",{className:"relative sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[r.jsx("button",{type:"button",onClick:O,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Previous testimonial videos",title:"Previous",children:r.jsx(Ke,{className:"h-5 w-5"})}),r.jsx("div",{className:"overflow-hidden sm:col-start-2",children:r.jsx("div",{className:`flex ${c?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${a*(100/m)}%)`},children:I.map((w,_)=>{const E=Math.floor(m/2),b=_===a+E;return r.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/m}%`},children:r.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${b?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[r.jsx(KE,{src:w.src,className:"w-full h-auto rounded-t-2xl"}),r.jsxs("div",{className:"p-4 text-center",children:[r.jsx("p",{className:"text-lg font-semibold text-gray-900",children:w.name}),r.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[r.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:w.subjects.join(" / ")}),r.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:R(w.improvedBy)})]})]})]})},`${w.id}-${_}`)})})}),r.jsx("button",{type:"button",onClick:D,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Next testimonial videos",title:"Next",children:r.jsx(at,{className:"h-5 w-5"})}),r.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[r.jsx("button",{type:"button",onClick:O,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Previous testimonial videos",children:r.jsx(Ke,{className:"h-5 w-5"})}),r.jsx("button",{type:"button",onClick:D,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Next testimonial videos",children:r.jsx(at,{className:"h-5 w-5"})})]})]})]})})]}),r.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center mb-4",children:[r.jsx(ct,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),r.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),r.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 9-11 via Zoom."})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),r.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[r.jsx("li",{children:r.jsx(ae,{to:"/",className:"hover:text-white transition",children:"Home"})}),r.jsx("li",{children:r.jsx(ae,{to:"/courses",className:"hover:text-white transition",children:"Courses"})}),r.jsx("li",{children:r.jsx("a",{href:"/#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),r.jsx("li",{children:r.jsx("a",{href:"/#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),r.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[r.jsx("li",{children:r.jsx("a",{href:"/#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),r.jsx("li",{children:r.jsx("a",{href:"/#terms-of-service",className:"hover:text-white transition",children:"Refund & Cancellation Policy"})}),r.jsx("li",{children:r.jsx("a",{href:"/#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),r.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[r.jsx("li",{children:r.jsx("a",{href:"mailto:support@myschola.uk",className:"hover:text-white transition",children:"support@myschola.uk"})}),r.jsx("li",{children:r.jsx("a",{href:"tel:+447344193804",className:"hover:text-white transition",children:"+44 7344 193804"})}),r.jsx("li",{children:r.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Yt,className:"text-green-400 hover:text-green-300 transition inline-flex items-center gap-2",children:[r.jsx(Ne,{className:"h-4 w-4"}),"Contact Us on WhatsApp"]})}),r.jsx("li",{children:r.jsx("button",{type:"button",onClick:Y,className:"bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation text-sm sm:text-base","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),r.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:r.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 9-11."]})})]})}),r.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Yt,className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation","aria-label":"Contact us on WhatsApp",children:r.jsx(Ne,{className:"h-5 w-5 sm:h-6 sm:w-6"})})]})}function Mr(){window.gtag&&window.gtag("event","conversion",{send_to:"AW-11111111111/lead_whatsapp_QQQ"}),window.fbq&&window.fbq("track","Lead",{content_name:"WhatsApp Contact"})}function YE(){window.gtag&&window.gtag("event","conversion",{send_to:"AW-11111111111/lead_consultation_RRR"}),window.fbq&&window.fbq("track","Lead",{content_name:"Book Consultation"})}function JE({src:s,className:e=""}){const t=A.useRef(null);return A.useEffect(()=>{const n=t.current;if(!n)return;const i=()=>{n.readyState>=2&&(n.currentTime=.01,n.pause())};return n.addEventListener("loadedmetadata",i),n.readyState<2?n.load():i(),()=>{n.removeEventListener("loadedmetadata",i)}},[s]),r.jsxs("video",{ref:t,className:e,controls:!0,playsInline:!0,preload:"metadata",children:[r.jsx("source",{src:s,type:"video/mp4"}),"Your browser does not support the video tag."]})}const Lr=[{src:Ci,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:ki,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:Si,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:Ai,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:ji,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}];function XE(){const[s]=tp(),e=s.get("year")||"9",[t,n]=A.useState(!1),[i,a]=A.useState(5),[l,c]=A.useState(!0),[h,m]=A.useState(()=>typeof window<"u"?window.innerWidth>=1024?3:window.innerWidth>=768?2:1:1),[f,x]=A.useState(e),v=Lr.length,I=[...Lr,...Lr,...Lr],S=v,P=v*2;A.useEffect(()=>{const M=()=>{const me=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;m(me)};return M(),window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]),A.useEffect(()=>{const M=setInterval(()=>{a(me=>{const ce=me+1;return ce>P?(c(!1),setTimeout(()=>{c(!0)},50),S):ce})},4e3);return()=>clearInterval(M)},[P,S]),A.useEffect(()=>{if(i<S||i>=P){c(!1);const M=i<S?i+v:i-v;a(M),requestAnimationFrame(()=>{requestAnimationFrame(()=>c(!0))})}},[i,S,P,v]);const R=M=>M===1?"Improved by 1 grade":`Improved by ${M} grades`,O=()=>{a(M=>M-1)},D=()=>{a(M=>M+1)},B=()=>{switch(e){case"9":return"https://buy.stripe.com/6oU14o8JV24Aggr6PbcjS19";case"10":return"https://buy.stripe.com/7sY6oIf8j10we8jflHcjS1a";case"11":return"https://buy.stripe.com/fZu5kE0dp6kQfcn0qNcjS1b";default:return"https://buy.stripe.com/6oU14o8JV24Aggr6PbcjS19"}},Y=()=>{switch(e){case"9":return"https://buy.stripe.com/eVq3cw6BN4cI3tF7TfcjS16";case"10":return"https://buy.stripe.com/5kQ5kE2lx8sY6FR3CZcjS17";case"11":return"https://buy.stripe.com/6oUaEY9NZ38Efcn4H3cjS18";default:return"https://buy.stripe.com/eVq3cw6BN4cI3tF7TfcjS16"}},le=()=>{switch(e){case"9":return"https://buy.stripe.com/dRm14of8jcJec0bgpLcjS12";case"10":return"https://buy.stripe.com/14A7sM4tFeRme8j3CZcjS14";case"11":return"https://buy.stripe.com/14A28sd0b24A4xJ0qNcjS15";default:return"https://buy.stripe.com/dRm14of8jcJec0bgpLcjS12"}},ee=()=>{switch(e){case"9":return"https://buy.stripe.com/00w28s3pB7oU7JVehDcjS0l";case"10":return"https://buy.stripe.com/14A6oId0bbFa8NZ0qNcjS0m";case"11":return"https://buy.stripe.com/28EfZi7FR9x27JV1uRcjS0n";default:return"https://buy.stripe.com/00w28s3pB7oU7JVehDcjS0l"}},N=()=>{switch(e){case"9":return"https://buy.stripe.com/14A3cwbW7dNi5BNb5rcjS0Z";case"10":return"https://buy.stripe.com/7sYfZi3pBdNi7JV3CZcjS10";case"11":return"https://buy.stripe.com/fZucN67FRcJe5BNgpLcjS11";default:return"https://buy.stripe.com/14A3cwbW7dNi5BNb5rcjS0Z"}},y=()=>{switch(e){case"9":return"https://buy.stripe.com/dRm7sM2lx38EggrehDcjS0U";case"10":return"https://buy.stripe.com/8x2dRagcncJe6FR2yVcjS0W";case"11":return"https://buy.stripe.com/aFa3cwgcnaB6ggrehDcjS0Y";default:return"https://buy.stripe.com/dRm7sM2lx38EggrehDcjS0U"}},g=()=>{switch(e){case"9":return"https://buy.stripe.com/14A00kaS3cJe6FR1uRcjS0S";case"10":return"https://buy.stripe.com/4gMfZid0b6kQ8NZb5rcjS0T";case"11":return"https://buy.stripe.com/dRm7sM2lx38EggrehDcjS0U";default:return"https://buy.stripe.com/14A00kaS3cJe6FR1uRcjS0S"}},w=()=>{switch(e){case"9":return"https://buy.stripe.com/dRmaEY5xJ10w8NZ6PbcjS1c";case"10":return"https://buy.stripe.com/dRm5kEbW76kQ1lx3CZcjS1d";case"11":return"https://buy.stripe.com/28E6oI2lxeRmd4fgpLcjS1e";default:return"https://buy.stripe.com/dRmaEY5xJ10w8NZ6PbcjS1c"}},_=()=>{switch(e){case"9":return"https://buy.stripe.com/fZu8wQ2lxbFa5BNflHcjS0P";case"10":return"https://buy.stripe.com/5kQ4gAe4faB62pBc9vcjS0Q";case"11":return"https://buy.stripe.com/dRmcN6f8j7oU7JV7TfcjS0R";default:return"https://buy.stripe.com/fZu8wQ2lxbFa5BNflHcjS0P"}},E=()=>{switch(e){case"9":return"https://buy.stripe.com/6oU00k1htaB64xJ6PbcjS0N";case"10":return"https://buy.stripe.com/eVq4gA4tF6kQd4fehDcjS0O";case"11":return"https://buy.stripe.com/fZu4gA1hteRm9S35L7cjS0M";default:return"https://buy.stripe.com/6oU00k1htaB64xJ6PbcjS0N"}},b=()=>{switch(e){case"9":return"https://buy.stripe.com/00w28sgcncJefcngpLcjS0H";case"10":return"https://buy.stripe.com/7sY5kE0dp38E9S30qNcjS0I";case"11":return"https://buy.stripe.com/4gM7sM8JV4cIc0bddzcjS0J";default:return"https://buy.stripe.com/00w28sgcncJefcngpLcjS0H"}},W=M=>{switch(M){case"maths-science-english":window.location.href=B();break;case"maths-english":window.location.href=Y();break;case"english-science":window.location.href=le();break;case"science-maths":window.location.href=ee();break;case"maths-science":window.location.href=w();break;case"crash-course":window.location.href="https://buy.stripe.com/bJe9AUbW79x25BN6PbcjS1f";break;default:te()}},Z=M=>{switch(M){case"science":window.location.href=N();break;case"english-only":window.location.href=y();break;case"maths-only":window.location.href=g();break;case"chemistry":window.location.href=_();break;case"physics":window.location.href=E();break;case"biology":window.location.href=b();break;default:te()}},V=()=>{const M="https://calendly.com/admin-myschola/30min";if(window.Calendly)window.Calendly.initPopupWidget({url:M,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0});else{const me=document.createElement("script");me.src="https://assets.calendly.com/assets/external/widget.js",me.async=!0,me.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:M,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0})},document.body.appendChild(me)}},te=()=>{YE(),navigate("/booking"),V()},Ie=[{id:"maths-science",name:"Maths + Science",subjects:"Mathematics & Science",price:"£128",originalPrice:"£150",savingsPercent:"15%",perLesson:"~£8 per hour",period:"/month",billing:"Billed monthly",features:["16 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Bio, Chem & Phys"]},{id:"maths-science-english",name:"Maths + Science + English",subjects:"Mathematics, Science & English",price:"£168",originalPrice:"£220",savingsPercent:"24%",perLesson:"~£7 per hour",period:"/month",billing:"Billed monthly",popular:!0,features:["24 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Bio, Chem & Phys","Covers Lit & Lang"]},{id:"maths-english",name:"Maths + English",subjects:"Mathematics & English",price:"£96",originalPrice:"£125",savingsPercent:"23%",perLesson:"~£8 per hour",period:"/month",billing:"Billed monthly",features:["12 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Lit & Lang"]},{id:"english-science",name:"English + Science",subjects:"English & Science",price:"£160",originalPrice:"£175",savingsPercent:"9%",perLesson:"~£8 per hour",period:"/month",billing:"Billed monthly",features:["20 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Lit & Lang","Covers Bio, Chem & Phys"]},{id:"crash-course",name:"Year 11 Crash Course",subjects:"Intensive Exam Preparation",price:"£299",originalPrice:"Last year was £455",savingsPercent:"34%",perLesson:"~£8 per hour",period:"",billing:"One-time payment",features:["36 hours teaching total","Maths, English & Science included","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Intensive Exam Prep"]}],oe=[{id:"science",name:"Science",subjects:"Science (Bio, Chem, Phys)",price:"£107.99",perLesson:"~£9 per lesson",period:"/month",billing:"Billed monthly, cancel anytime",features:["12 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Bio, Chem & Phys"]},{id:"english-only",name:"English Only",subjects:"English Language & Literature",price:"£79.99",perLesson:"~£10 per lesson",period:"/month",billing:"Billed monthly, cancel anytime",features:["8 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Lit & Lang"]},{id:"maths-only",name:"Maths Only",subjects:"Mathematics",price:"£59.99",perLesson:"~£15 per lesson",period:"/month",billing:"Billed monthly, cancel anytime",features:["4 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback"]},{id:"chemistry",name:"Science - Chemistry",subjects:"Chemistry Only",price:"£59.99",perLesson:"~£15 per lesson",period:"/month",billing:"Billed monthly, cancel anytime",features:["4 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers only Chemistry"]},{id:"physics",name:"Science - Physics",subjects:"Physics Only",price:"£59.99",perLesson:"~£15 per lesson",period:"/month",billing:"Billed monthly, cancel anytime",features:["4 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers only Physics"]},{id:"biology",name:"Science - Biology",subjects:"Biology Only",price:"£59.99",perLesson:"~£15 per lesson",period:"/month",billing:"Billed monthly, cancel anytime",features:["4 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers only Biology"]}];return r.jsxs("div",{className:"min-h-screen bg-white",children:[r.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),r.jsx("div",{className:"w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md",children:r.jsxs("span",{className:"inline-flex items-center gap-2 animate-pulse",children:[r.jsxs("span",{className:"relative flex h-3 w-3",children:[r.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),r.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-green-500"})]}),"Now Enrolling for New Cohort — Limited Spaces Available"]})}),r.jsxs("nav",{className:"sticky top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center h-16",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx(ct,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),r.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),r.jsx("div",{className:"hidden md:flex justify-center",children:r.jsxs("div",{className:"flex items-center space-x-8",children:[r.jsx("a",{href:"/",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),r.jsx("a",{href:"/#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),r.jsx("a",{href:"/#subjects",className:"text-gray-700 hover:text-blue-600 transition",children:"Subjects"}),r.jsx("a",{href:"/#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),r.jsx("a",{href:"/#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"})]})}),r.jsxs("div",{className:"flex items-center justify-end",children:[r.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[r.jsx(ae,{to:"/login",className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center","aria-label":"Log in",children:"Log In"}),r.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Mr,className:"bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2","aria-label":"Contact us on WhatsApp",children:[r.jsx(Ne,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})]}),r.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>n(!t),"aria-label":t?"Close menu":"Open menu","aria-expanded":t,"aria-controls":"mobile-menu",children:t?r.jsx(Ti,{className:"h-6 w-6","aria-hidden":"true"}):r.jsx(Ii,{className:"h-6 w-6","aria-hidden":"true"})})]})]})}),t&&r.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:r.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[r.jsx("a",{href:"/",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),r.jsx("a",{href:"/#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),r.jsx("a",{href:"/#subjects",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Subjects"}),r.jsx("a",{href:"/#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),r.jsx("a",{href:"/#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),r.jsx(ae,{to:"/login",className:"block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",role:"menuitem",children:"Log In"}),r.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Mr,className:"block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2","aria-label":"Contact us on WhatsApp",role:"menuitem",children:r.jsxs("span",{className:"inline-flex items-center gap-2",children:[r.jsx(Ne,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})})]})})]}),r.jsxs("main",{id:"main-content",children:[r.jsx("section",{className:"pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Package hero section",children:r.jsxs("div",{className:"max-w-7xl mx-auto text-center",children:[r.jsxs("p",{className:"text-lg sm:text-xl text-blue-600 font-semibold mb-4",children:["Year ",e," Course"]}),r.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight",children:["Choose Your ",r.jsx("span",{className:"text-blue-600",children:"Learning Package"})]}),r.jsxs("p",{className:"text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8",children:["Flexible pricing options tailored for Year ",e," students. All packages include expert tutoring, detailed feedback, and exam preparation."]}),r.jsxs(ae,{to:"/courses",className:"inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition",children:[r.jsx(Ke,{className:"h-5 w-5"}),"Back to Year Selection"]})]})}),r.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8","aria-labelledby":"bundles-heading",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsx("h2",{id:"bundles-heading",className:"text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12",children:"Bundle Packages"}),r.jsx("div",{className:"grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto",children:Ie.filter(M=>M.id!=="crash-course"||f==="11").map((M,me)=>r.jsxs("div",{className:`relative rounded-2xl p-6 sm:p-8 flex flex-col ${M.popular?"bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl scale-105":"bg-white border-2 border-gray-200 text-gray-900 hover:border-blue-400"} transition-all duration-300`,children:[M.popular&&r.jsx("div",{className:"absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold",children:"MOST POPULAR"}),r.jsx("h3",{className:`text-xl font-bold mb-1 ${M.popular?"text-white":"text-gray-900"}`,children:M.name}),r.jsx("p",{className:`text-sm mb-4 ${M.popular?"text-blue-100":"text-gray-500"}`,children:M.subjects}),r.jsxs("div",{className:"mb-2",children:[r.jsx("span",{className:`text-4xl font-extrabold ${M.popular?"text-white":"text-gray-900"}`,children:M.price}),r.jsx("span",{className:`text-lg ${M.popular?"text-blue-200":"text-gray-500"}`,children:M.period})]}),M.originalPrice&&r.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[M.originalPrice.startsWith("Last year")?r.jsxs("span",{className:`text-sm ${M.popular?"text-blue-100":"text-gray-500"}`,children:["Last year was ",r.jsx("span",{className:`line-through ${M.popular?"text-blue-200":"text-gray-400"}`,children:M.id==="crash-course"?"£455":"£249"})]}):r.jsx("span",{className:`text-sm line-through ${M.popular?"text-blue-200":"text-gray-400"}`,children:M.originalPrice}),r.jsxs("span",{className:"text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded",children:["SAVE ",M.savingsPercent]})]}),M.perLesson&&r.jsx("div",{className:`text-sm font-bold mb-2 ${M.popular?"text-green-300":"text-green-600"}`,children:M.perLesson}),r.jsx("p",{className:`text-sm mb-4 ${M.popular?"text-blue-100":"text-gray-500"}`,children:M.billing}),r.jsx("ul",{className:"space-y-3 mb-4 flex-grow",children:M.features.map((ce,ke)=>r.jsxs("li",{className:"flex items-start gap-3",children:[r.jsx(za,{className:`h-5 w-5 flex-shrink-0 mt-0.5 ${M.popular?"text-green-300":"text-green-500"}`}),r.jsx("span",{className:`text-sm ${M.popular?"text-blue-50":"text-gray-700"}`,children:ce})]},ke))}),r.jsx("button",{type:"button",onClick:()=>W(M.id),className:"w-full py-3 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px] touch-manipulation bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600",children:"Enroll now"})]},me))})]})}),r.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"individual-heading",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsx("h2",{id:"individual-heading",className:"text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4",children:"Individual Subject Pricing"}),r.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Focus on a single subject with our dedicated individual packages."}),r.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:oe.map((M,me)=>r.jsxs("div",{className:"bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 flex flex-col",children:[r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-1",children:M.name}),r.jsx("p",{className:"text-sm text-gray-500 mb-4",children:M.subjects}),r.jsxs("div",{className:"mb-2",children:[r.jsx("span",{className:"text-4xl font-extrabold text-gray-900",children:M.price}),r.jsx("span",{className:"text-lg text-gray-500",children:M.period})]}),M.perLesson&&r.jsx("div",{className:"text-sm font-bold text-green-600 mb-2",children:M.perLesson}),r.jsx("p",{className:"text-sm text-gray-500 mb-6",children:M.billing}),r.jsx("ul",{className:"space-y-3 mb-8 flex-grow",children:M.features.map((ce,ke)=>r.jsxs("li",{className:"flex items-start gap-3",children:[r.jsx(za,{className:"h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"}),r.jsx("span",{className:"text-sm text-gray-700",children:ce})]},ke))}),r.jsx("button",{type:"button",onClick:()=>M.id?Z(M.id):te,className:"w-full py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation",children:"Enroll now"})]},me))})]})}),r.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-white","aria-labelledby":"testimonials-heading",children:r.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[r.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Testimonials from Students"}),r.jsx("p",{className:"text-gray-600 mb-12",children:"Short clips from students, with the subject and grade improvements below."}),r.jsxs("div",{className:"relative sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[r.jsx("button",{type:"button",onClick:O,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Previous testimonial videos",title:"Previous",children:r.jsx(Ke,{className:"h-5 w-5"})}),r.jsx("div",{className:"overflow-hidden sm:col-start-2",children:r.jsx("div",{className:`flex ${l?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${i*(100/h)}%)`},children:I.map((M,me)=>{const ce=Math.floor(h/2),ke=me===i+ce;return r.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/h}%`},children:r.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${ke?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[r.jsx(JE,{src:M.src,className:"w-full h-auto rounded-t-2xl"}),r.jsxs("div",{className:"p-4 text-center",children:[r.jsx("p",{className:"text-lg font-semibold text-gray-900",children:M.name}),r.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[r.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:M.subjects.join(" / ")}),r.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:R(M.improvedBy)})]})]})]})},`${M.id}-${me}`)})})}),r.jsx("button",{type:"button",onClick:D,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Next testimonial videos",title:"Next",children:r.jsx(at,{className:"h-5 w-5"})}),r.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[r.jsx("button",{type:"button",onClick:O,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Previous testimonial videos",children:r.jsx(Ke,{className:"h-5 w-5"})}),r.jsx("button",{type:"button",onClick:D,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Next testimonial videos",children:r.jsx(at,{className:"h-5 w-5"})})]})]})]})})]}),r.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center mb-4",children:[r.jsx(ct,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),r.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),r.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 9-11 via Zoom."})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),r.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[r.jsx("li",{children:r.jsx(ae,{to:"/",className:"hover:text-white transition",children:"Home"})}),r.jsx("li",{children:r.jsx(ae,{to:"/courses",className:"hover:text-white transition",children:"Courses"})}),r.jsx("li",{children:r.jsx("a",{href:"/#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),r.jsx("li",{children:r.jsx("a",{href:"/#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),r.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[r.jsx("li",{children:r.jsx("a",{href:"/#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),r.jsx("li",{children:r.jsx("a",{href:"/#terms-of-service",className:"hover:text-white transition",children:"Refund & Cancellation Policy"})}),r.jsx("li",{children:r.jsx("a",{href:"/#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),r.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[r.jsx("li",{children:r.jsx("a",{href:"mailto:support@myschola.uk",className:"hover:text-white transition",children:"support@myschola.uk"})}),r.jsx("li",{children:r.jsx("a",{href:"tel:+447344193804",className:"hover:text-white transition",children:"+44 7344 193804"})}),r.jsx("li",{children:r.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Mr,className:"text-green-400 hover:text-green-300 transition inline-flex items-center gap-2",children:[r.jsx(Ne,{className:"h-4 w-4"}),"Contact Us on WhatsApp"]})}),r.jsx("li",{children:r.jsx("button",{type:"button",onClick:te,className:"bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation text-sm sm:text-base","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),r.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:r.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 9-11."]})})]})}),r.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Mr,className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation","aria-label":"Contact us on WhatsApp",children:r.jsx(Ne,{className:"h-5 w-5 sm:h-6 sm:w-6"})})]})}const Wa=[{day:"Monday",status:"off",subject:null,time:null,board:null},{day:"Tuesday",status:"active",subject:"English Literature",time:"7:00 PM - 8:00 PM",board:"AQA, Edexcel & OCR",level:"Foundation & Higher",color:"bg-red-500"},{day:"Wednesday",status:"active",subject:"English Language",time:"7:00 PM - 8:00 PM",board:"AQA, Edexcel & OCR",level:"Foundation & Higher",color:"bg-red-500"},{day:"Thursday",status:"active",subject:"Biology",time:"6:00 PM - 7:00 PM",board:"AQA, Edexcel & OCR",level:"Foundation & Higher",color:"bg-green-500"},{day:"Friday",status:"active",subject:"Chemistry",time:"6:00 PM - 7:00 PM",board:"AQA, Edexcel & OCR",level:"Foundation & Higher",color:"bg-green-500"},{day:"Saturday",status:"active",subject:"Mathematics",time:"11:00 AM - 12:00 PM",board:"AQA, Edexcel & OCR",level:"Foundation & Higher",color:"bg-blue-500"},{day:"Sunday",status:"active",subject:"Physics",time:"2:00 PM - 3:00 PM",board:"AQA, Edexcel & OCR",level:"Foundation & Higher",color:"bg-green-500"}];function ZE(){const[s,e]=A.useState(null),[t,n]=A.useState(""),[i,a]=A.useState(!1),l=new Date().toLocaleDateString("en-US",{weekday:"long"}),c=Wa.findIndex(f=>f.day===l);A.useEffect(()=>{n("MySchola GCSE Timetable page loaded. 6 days of live lessons available.")},[]);const h=f=>{e(f)},m=()=>{const f=Wa[c];return!f||f.status==="off"?"No classes today. Take a break!":`Today: ${f.subject} at ${f.time}`};return r.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50",children:[r.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),r.jsx("div",{role:"status","aria-live":"polite","aria-atomic":"true",className:"sr-only",children:t}),r.jsx("div",{className:"w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md",children:r.jsxs("span",{className:"inline-flex items-center gap-2 animate-pulse",children:[r.jsxs("span",{className:"relative flex h-3 w-3",children:[r.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),r.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-green-500"})]}),"Now Enrolling for New Cohort — Limited Spaces Available"]})}),r.jsxs("nav",{className:"sticky top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center h-16",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx(ct,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),r.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),r.jsx("div",{className:"hidden md:flex justify-center",children:r.jsxs("div",{className:"flex items-center space-x-8",children:[r.jsx("a",{href:"/",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),r.jsx("a",{href:"/#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),r.jsx("a",{href:"/courses",className:"text-gray-700 hover:text-blue-600 transition",children:"Courses"}),r.jsx("a",{href:"/package",className:"text-gray-700 hover:text-blue-600 transition",children:"Pricing"}),r.jsx("a",{href:"/#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"})]})}),r.jsxs("div",{className:"flex items-center justify-end",children:[r.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[r.jsx(ae,{to:"/login",className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center","aria-label":"Log in",children:"Log In"}),r.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",className:"bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2","aria-label":"Contact us on WhatsApp",children:[r.jsx(Ne,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})]}),r.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>a(!i),"aria-label":i?"Close menu":"Open menu","aria-expanded":i,"aria-controls":"mobile-menu",children:i?r.jsx(Ti,{className:"h-6 w-6","aria-hidden":"true"}):r.jsx(Ii,{className:"h-6 w-6","aria-hidden":"true"})})]})]})}),i&&r.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:r.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[r.jsx("a",{href:"/",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),r.jsx("a",{href:"/#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),r.jsx("a",{href:"/courses",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Courses"}),r.jsx("a",{href:"/package",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Pricing"}),r.jsx("a",{href:"/#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),r.jsx(ae,{to:"/login",className:"block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",role:"menuitem",children:"Log In"}),r.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",className:"block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2","aria-label":"Contact us on WhatsApp",role:"menuitem",children:r.jsxs("span",{className:"inline-flex items-center gap-2",children:[r.jsx(Ne,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})})]})})]}),r.jsxs("main",{id:"main-content",className:"max-w-6xl mx-auto px-4 py-8",children:[r.jsxs("div",{className:"text-center mb-8",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4",children:[r.jsx(ws,{className:"h-4 w-4 text-blue-600"}),r.jsx("span",{className:"text-sm font-semibold text-blue-700",children:"Weekly Live Lesson Schedule"})]}),r.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-slate-900 mb-3",children:"Your GCSE Learning Timetable"}),r.jsx("p",{className:"text-lg text-slate-600 max-w-2xl mx-auto",children:"Structured live sessions for Year 9-11 students. Click any day to hear details."})]}),r.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 mb-8 text-white shadow-lg",role:"region","aria-label":"Today\\'s schedule",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[r.jsx(Ha,{className:"h-5 w-5 text-blue-200"}),r.jsxs("span",{className:"text-sm font-semibold uppercase tracking-wide text-blue-100",children:["Today - ",l]})]}),r.jsx("p",{className:"text-xl font-semibold",children:m()})]}),r.jsx("div",{className:"grid gap-4",role:"list","aria-label":"Weekly timetable",children:Wa.map((f,x)=>r.jsxs("button",{onClick:()=>h(f),className:`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 ${(s==null?void 0:s.day)===f.day?"border-blue-500 shadow-lg ring-2 ring-blue-200":"border-slate-200 hover:border-blue-300 hover:shadow-md"} ${f.status==="off"?"bg-slate-50":"bg-white"}`,role:"listitem","aria-label":`${f.day}. ${f.status==="off"?"No classes":`${f.subject} at ${f.time}`}`,children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm ${f.status==="off"?"bg-slate-200 text-slate-500":`${f.color} text-white`}`,"aria-hidden":"true",children:f.day.slice(0,3)}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-bold text-slate-900 text-lg",children:f.day}),f.status==="off"?r.jsx("p",{className:"text-slate-500 font-medium",children:"Rest Day"}):r.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[r.jsx("span",{className:"font-semibold text-slate-700",children:f.subject}),r.jsx("span",{className:"text-slate-400",children:"|"}),r.jsxs("span",{className:"flex items-center gap-1 text-slate-600 text-sm",children:[r.jsx(Ht,{className:"h-3.5 w-3.5"}),f.time]})]})]})]}),f.status==="active"&&r.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[r.jsx("span",{className:"px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600",children:f.board}),r.jsx(Rp,{className:"h-5 w-5 text-slate-400"})]})]}),(s==null?void 0:s.day)===f.day&&f.status==="active"&&r.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-100 animate-fadeIn",role:"region","aria-label":`${f.day} details`,children:[r.jsxs("div",{className:"grid sm:grid-cols-4 gap-4",children:[r.jsxs("div",{className:"bg-slate-50 p-3 rounded-lg",children:[r.jsx("p",{className:"text-xs text-slate-500 uppercase font-semibold mb-1",children:"Subject"}),r.jsxs("p",{className:"font-semibold text-slate-900 flex items-center gap-2",children:[r.jsx(Kn,{className:"h-4 w-4 text-blue-600"}),f.subject]})]}),r.jsxs("div",{className:"bg-slate-50 p-3 rounded-lg",children:[r.jsx("p",{className:"text-xs text-slate-500 uppercase font-semibold mb-1",children:"Time"}),r.jsxs("p",{className:"font-semibold text-slate-900 flex items-center gap-2",children:[r.jsx(Ht,{className:"h-4 w-4 text-blue-600"}),f.time]})]}),r.jsxs("div",{className:"bg-slate-50 p-3 rounded-lg",children:[r.jsx("p",{className:"text-xs text-slate-500 uppercase font-semibold mb-1",children:"Exam Board"}),r.jsx("p",{className:"font-semibold text-slate-900",children:f.board})]}),r.jsxs("div",{className:"bg-slate-50 p-3 rounded-lg",children:[r.jsx("p",{className:"text-xs text-slate-500 uppercase font-semibold mb-1",children:"Level"}),r.jsx("p",{className:"font-semibold text-slate-900",children:f.level})]})]}),r.jsx("div",{className:"mt-4 flex gap-3",children:r.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:v=>v.stopPropagation(),className:"flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition text-sm",children:[r.jsx(Ne,{className:"h-4 w-4"}),"Ask on WhatsApp"]})})]})]},f.day))}),r.jsx("section",{className:"mt-12","aria-labelledby":"crash-course-heading",children:r.jsxs("div",{className:"bg-gradient-to-br from-orange-50 via-white to-red-50 rounded-2xl p-6 sm:p-8 border-2 border-orange-200 shadow-lg",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[r.jsx("div",{className:"bg-orange-500 p-2 rounded-lg",children:r.jsx(ws,{className:"h-6 w-6 text-white"})}),r.jsx("h2",{id:"crash-course-heading",className:"text-2xl sm:text-3xl font-bold text-slate-900",children:"Crash Course Timetable"})]}),r.jsx("p",{className:"text-slate-600 mb-6",children:"Intensive Year 11 masterclasses designed for exam success. All sessions are 2 hours with focused exam preparation."}),r.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[r.jsxs("div",{className:"bg-white rounded-xl p-5 border border-orange-200 shadow-sm",children:[r.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[r.jsx("div",{className:"w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center",children:r.jsx("span",{className:"font-bold text-orange-700",children:"Sat"})}),r.jsx("h3",{className:"text-lg font-bold text-slate-900",children:"Saturday"})]}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400",children:[r.jsx(Ht,{className:"h-5 w-5 text-red-500 mt-0.5 flex-shrink-0"}),r.jsxs("div",{children:[r.jsx("p",{className:"font-semibold text-slate-900",children:"9:00 – 11:00am"}),r.jsxs("p",{className:"text-slate-700",children:["Year 11 English Masterclass ",r.jsx("span",{className:"text-red-600 font-medium",children:"(2hrs)"})]})]})]}),r.jsxs("div",{className:"flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400",children:[r.jsx(Ht,{className:"h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"}),r.jsxs("div",{children:[r.jsx("p",{className:"font-semibold text-slate-900",children:"12:15 – 2:15pm"}),r.jsxs("p",{className:"text-slate-700",children:["Year 11 Maths Masterclass",r.jsx("span",{className:"text-blue-600 font-medium",children:" (2 hrs)"})]})]})]})]})]}),r.jsxs("div",{className:"bg-white rounded-xl p-5 border border-orange-200 shadow-sm",children:[r.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[r.jsx("div",{className:"w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center",children:r.jsx("span",{className:"font-bold text-orange-700",children:"Sun"})}),r.jsx("h3",{className:"text-lg font-bold text-slate-900",children:"Sunday"})]}),r.jsx("div",{className:"space-y-3",children:r.jsxs("div",{className:"flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-400",children:[r.jsx(Ht,{className:"h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"}),r.jsxs("div",{children:[r.jsx("p",{className:"font-semibold text-slate-900",children:"9:00 – 11:00am"}),r.jsxs("p",{className:"text-slate-700",children:["Year 11 Science Masterclass ",r.jsx("span",{className:"text-green-600 font-medium",children:"(2 hrs)"})]})]})]})})]})]})]})}),r.jsx("div",{className:"mt-8 bg-gradient-to-r from-emerald-50 via-white to-blue-50 rounded-2xl p-6 border border-emerald-200",children:r.jsxs("div",{className:"flex items-start gap-4",children:[r.jsx("div",{className:"bg-emerald-500 p-3 rounded-xl shrink-0",children:r.jsx(Ka,{className:"h-6 w-6 text-white"})}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-bold text-slate-900 mb-2",children:"Need Help or Have Questions?"}),r.jsx("p",{className:"text-slate-600 mb-4",children:"Our team is here to assist you. Whether you need accessibility support, have timetable questions, or want to discuss your learning plan."}),r.jsx("div",{className:"mt-4 flex flex-wrap gap-3",children:r.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition",children:[r.jsx(Ne,{className:"h-4 w-4"}),"Chat on WhatsApp"]})})]})]})})]}),r.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center mb-4",children:[r.jsx(ct,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),r.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),r.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 9-11 via Zoom."})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),r.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[r.jsx("li",{children:r.jsx("a",{href:"/",className:"hover:text-white transition",children:"Home"})}),r.jsx("li",{children:r.jsx(ae,{to:"/courses",className:"hover:text-white transition",children:"Courses"})}),r.jsx("li",{children:r.jsx(ae,{to:"/package",className:"hover:text-white transition",children:"Pricing"})}),r.jsx("li",{children:r.jsx("a",{href:"/timetable",className:"hover:text-white transition",children:"Timetable"})})]})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),r.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[r.jsx("li",{children:r.jsx("a",{href:"/#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),r.jsx("li",{children:r.jsx("a",{href:"/#terms-of-service",className:"hover:text-white transition",children:"Refund & Cancellation Policy"})}),r.jsx("li",{children:r.jsx("a",{href:"/#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),r.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[r.jsx("li",{children:r.jsx("a",{href:"mailto:support@myschola.uk",className:"hover:text-white transition",children:"support@myschola.uk"})}),r.jsx("li",{children:r.jsx("a",{href:"tel:+447344193804",className:"hover:text-white transition",children:"+44 7344 193804"})}),r.jsx("li",{children:r.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",className:"text-green-400 hover:text-green-300 transition inline-flex items-center gap-2",children:[r.jsx(Ne,{className:"h-4 w-4"}),"Contact Us on WhatsApp"]})})]})]})]}),r.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:r.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 9-11."]})})]})}),r.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation","aria-label":"Contact us on WhatsApp",children:r.jsx(Ne,{className:"h-5 w-5 sm:h-6 sm:w-6"})})]})}const Nf="/book-strategy-call",Ef="/book-strategy-call/thanks",If="/webinar",eI="/webinar/thanks";function yh(){var s,e;typeof window>"u"||(e=(s=window.Calendly)==null?void 0:s.closePopupWidget)==null||e.call(s)}function tI(s){var e;return((e=s==null?void 0:s.data)==null?void 0:e.event)&&s.data.event.indexOf("calendly")===0&&s.data.event==="calendly.event_scheduled"}function sI(){const{pathname:s}=us();return A.useEffect(()=>{jg()},[s]),null}function nI(){const s=Lt(),{pathname:e}=us();return A.useEffect(()=>{const t=n=>{tI(n)&&(e.startsWith(Nf)||e.startsWith(If)?(typeof window<"u"&&window.sessionStorage.setItem("strategyCallRegistered","true"),yh(),s(Ef,{replace:!0})):(yh(),s("/booking-success",{replace:!0})))};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)},[s,e]),null}function rI(){return r.jsxs(sp,{children:[r.jsx(sI,{}),r.jsx(nI,{}),r.jsxs(np,{children:[r.jsx(Ve,{path:"/",element:r.jsx(vc,{})}),r.jsx(Ve,{path:"/booking",element:r.jsx(vc,{})}),r.jsx(Ve,{path:"/login",element:r.jsx(fE,{})}),r.jsx(Ve,{path:"/payment-success",element:r.jsx(PE,{})}),r.jsx(Ve,{path:"/booking-success",element:r.jsx(DE,{})}),r.jsx(Ve,{path:"/admin",element:r.jsx(kE,{})}),r.jsx(Ve,{path:"/admin/share-link",element:r.jsx(CE,{})}),r.jsx(Ve,{path:"/admin/homework-share-link",element:r.jsx(RE,{})}),r.jsx(Ve,{path:Nf,element:r.jsx(ph,{})}),r.jsx(Ve,{path:Ef,element:r.jsx(xh,{})}),r.jsx(Ve,{path:If,element:r.jsx(ph,{})}),r.jsx(Ve,{path:eI,element:r.jsx(xh,{})}),r.jsx(Ve,{path:"/courses",element:r.jsx(QE,{})}),r.jsx(Ve,{path:"/package",element:r.jsx(XE,{})}),r.jsx(Ve,{path:"/timetable",element:r.jsx(ZE,{})}),r.jsx(Ve,{path:"/app/dashboard",element:r.jsx(Ua,{children:r.jsx(bE,{})})}),r.jsx(Ve,{path:"/app/subject/:subjectId/recordings",element:r.jsx(Ua,{children:r.jsx(NE,{})})}),r.jsx(Ve,{path:"/app/subject/:subjectId/homework",element:r.jsx(Ua,{children:r.jsx(EE,{})})})]})]})}op.createRoot(document.getElementById("root")).render(r.jsx(A.StrictMode,{children:r.jsx(rI,{})}));
