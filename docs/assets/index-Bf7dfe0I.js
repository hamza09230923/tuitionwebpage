import{r as zf,a as Gf,b as k,u as an,c as on,L as He,N as Kf,d as ch,B as Qf,R as Yf,e as We}from"./react-vendor-w9dygoMj.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var ha={exports:{}},js={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc;function Jf(){if(Xc)return js;Xc=1;var n=zf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(l,h,m){var f,x={},b=null,N=null;m!==void 0&&(b=""+m),h.key!==void 0&&(b=""+h.key),h.ref!==void 0&&(N=h.ref);for(f in h)s.call(h,f)&&!i.hasOwnProperty(f)&&(x[f]=h[f]);if(l&&l.defaultProps)for(f in h=l.defaultProps,h)x[f]===void 0&&(x[f]=h[f]);return{$$typeof:e,type:l,key:b,ref:N,props:x,_owner:r.current}}return js.Fragment=t,js.jsx=c,js.jsxs=c,js}var Zc;function Xf(){return Zc||(Zc=1,ha.exports=Jf()),ha.exports}var o=Xf(),Tr={},el;function Zf(){if(el)return Tr;el=1;var n=Gf();return Tr.createRoot=n.createRoot,Tr.hydrateRoot=n.hydrateRoot,Tr}var ep=Zf();/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),np=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),tl=n=>{const e=np(n);return e.charAt(0).toUpperCase()+e.slice(1)},lh=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),sp=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=k.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:r="",children:i,iconNode:c,...l},h)=>k.createElement("svg",{ref:h,...rp,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:lh("lucide",r),...!i&&!sp(l)&&{"aria-hidden":"true"},...l},[...c.map(([m,f])=>k.createElement(m,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=(n,e)=>{const t=k.forwardRef(({className:s,...r},i)=>k.createElement(ip,{ref:i,iconNode:e,className:lh(`lucide-${tp(tl(n))}`,`lucide-${n}`,s),...r}));return t.displayName=tl(n),t};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],it=K("arrow-left",ap);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ht=K("arrow-right",op);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],lp=K("atom",cp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],hp=K("award",up);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],mp=K("bell",dp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],pp=K("book-marked",fp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],$r=K("book-open",gp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],xp=K("calculator",yp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],wp=K("calendar-check",_p);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],nl=K("calendar",bp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Ep=K("chart-column",vp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Tp=K("check",Ip);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Nt=K("circle-check-big",Np);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Sp=K("circle-question-mark",Ap);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],sl=K("circle-x",kp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],io=K("clock",Rp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],rl=K("download",Cp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Pp=K("external-link",jp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Hs=K("file-text",Dp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Op=K("flask-conical",Vp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Lp=K("globe",Mp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Kn=K("graduation-cap",Fp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Bp=K("history",Up);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],$p=K("languages",qp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ao=K("lock",Wp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],zp=K("log-out",Hp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Wr=K("mail",Gp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Qp=K("menu",Kp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],yn=K("message-circle",Yp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Xp=K("music",Jp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],eg=K("palette",Zp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],ng=K("phone",tg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],rg=K("play",sg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],il=K("save",ig);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],al=K("sparkles",ag);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],cg=K("star",og);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Ra=K("target",lg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Ca=K("trending-up",ug);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],uh=K("user-check",hg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],ol=K("users",dg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Qn=K("video",mg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],pg=K("x",fg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],hh=K("zoom-in",gg),dh="/assets/testimonial1-5gwMtUAO-5gwMtUAO.mp4",mh="/assets/testimonial2-D0fw-lJA.mp4",fh="/assets/testmonial3-CD7BqzK1.mp4",ph="/assets/testimonial4-DLVnnJv5.mp4",gh="/assets/testimonial5-CpY5IMND.mp4",yh="/assets/checklist-B5UU8CL1.jpeg";function yg(){typeof window<"u"&&window.fbq&&window.fbq("track","PageView")}function cl(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booking",content_category:"GCSE Tuition"})}function Nr(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"WhatsApp Inquiry",content_category:"GCSE Tuition"})}function xg(){typeof window<"u"&&window.fbq&&window.fbq("track","Purchase",{currency:"GBP"})}function _g(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booked",content_category:"GCSE Tuition"})}function wg(){typeof window<"u"&&window.fbq&&window.fbq("track","BOOK NOW",{value:0,currency:"GBP"})}const Hr="/assets/nottingham-university-logo-Bvc07xhs.png",zr="/assets/King's_College_London_logo-XbRZheqd.svg",Gr="/assets/cambridge-64gH2uf-.jpg",Kr="/assets/Imperial-College-Logo-CiZ74UPN.png",Qr="/assets/warwick-DzXBUNN5.svg",bg="/assets/aqa-R9eUC-1Y.jpg",vg="/assets/edexcel-vector-logo-BkmWVkxU.png";function Eg({src:n,className:e,showControls:t=!0}){const s=k.useRef(null);return k.useEffect(()=>{const r=s.current;if(!r)return;const i=()=>{r.readyState>=2&&(r.currentTime=.01,r.pause())};return r.addEventListener("loadedmetadata",i),r.readyState<2?r.load():i(),()=>{r.removeEventListener("loadedmetadata",i)}},[n]),o.jsxs("video",{ref:s,className:e,controls:t,playsInline:!0,preload:"metadata",children:[o.jsx("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]})}function ll(){const n=an(),e=on(),t=[{src:gh,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:ph,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:fh,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:mh,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:dh,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],s=t.length,r=[...t,...t,...t],i=s,c=s*2,[l,h]=k.useState(!1),[m,f]=k.useState(null),[x,b]=k.useState(!1),[N,C]=k.useState(i),[P,j]=k.useState(!0),[O,D]=k.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),F=g=>g===1?"Improved by 1 grade":`Improved by ${g} grades`;k.useEffect(()=>{const g=()=>{const v=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;D(v)};return g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]),k.useEffect(()=>{if(N<i||N>=c){j(!1);const g=N<i?N+s:N-s;C(g),requestAnimationFrame(()=>{requestAnimationFrame(()=>j(!0))})}},[N,i,c,s]);const Q=g=>{f(m===g?null:g)},ce=()=>{C(g=>g-1)},ne=()=>{C(g=>g+1)},I=()=>{const g="https://calendly.com/admin-myschola/30min",v=window.innerWidth<768;if(window.Calendly)window.Calendly.initPopupWidget({url:g,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0});else{const E=document.createElement("script");E.src="https://assets.calendly.com/assets/external/widget.js",E.async=!0,E.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:g,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0})},document.body.appendChild(E),setTimeout(()=>{window.Calendly||window.open(g,"_blank","noopener,noreferrer")},1e3)}},_=()=>{cl(),n("/booking",{replace:!1}),I()};return k.useEffect(()=>{if(e.pathname==="/booking"&&!x){cl(),b(!0);const g=setTimeout(()=>{I()},300);return()=>clearTimeout(g)}else e.pathname!=="/booking"&&b(!1)},[e.pathname]),o.jsxs("div",{className:"min-h-screen bg-white",children:[o.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),o.jsx("div",{className:"w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md",children:"Join our March cohort as soon as possible — spaces are running out!"}),o.jsxs("nav",{className:"sticky top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center h-16",children:[o.jsxs("div",{className:"flex items-center",children:[o.jsx(Kn,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),o.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),o.jsx("div",{className:"hidden md:flex justify-center",children:o.jsxs("div",{className:"flex items-center space-x-8",children:[o.jsx("a",{href:"#home",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),o.jsx("a",{href:"#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),o.jsx("a",{href:"#subjects",className:"text-gray-700 hover:text-blue-600 transition",children:"Subjects"}),o.jsx("a",{href:"#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),o.jsx("a",{href:"#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"})]})}),o.jsxs("div",{className:"flex items-center justify-end",children:[o.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[o.jsx(He,{to:"/login",className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center","aria-label":"Log in",children:"Log In"}),o.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Nr,className:"bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2","aria-label":"Contact us on WhatsApp",children:[o.jsx(yn,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})]}),o.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>h(!l),"aria-label":l?"Close menu":"Open menu","aria-expanded":l,"aria-controls":"mobile-menu",children:l?o.jsx(pg,{className:"h-6 w-6","aria-hidden":"true"}):o.jsx(Qp,{className:"h-6 w-6","aria-hidden":"true"})})]})]})}),l&&o.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:o.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[o.jsx("a",{href:"#home",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),o.jsx("a",{href:"#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),o.jsx("a",{href:"#subjects",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Subjects"}),o.jsx("a",{href:"#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),o.jsx("a",{href:"#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),o.jsx(He,{to:"/login",className:"block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",role:"menuitem",children:"Log In"}),o.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Nr,className:"block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2","aria-label":"Contact us on WhatsApp",role:"menuitem",children:o.jsxs("span",{className:"inline-flex items-center gap-2",children:[o.jsx(yn,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})})]})})]}),o.jsxs("main",{id:"main-content",children:[o.jsx("section",{id:"home",className:"pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Hero section",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"relative inline-block px-2",children:o.jsxs("h1",{className:"relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6",children:["MySchola: #1 GCSE Tutoring Platform for",o.jsx("span",{className:"text-blue-600",children:" Years 9-11"})]})}),o.jsxs("p",{className:"text-lg sm:text-xl text-gray-600 mb-3 sm:mb-4 max-w-3xl mx-auto px-2",children:[o.jsx("strong",{children:"GCSE Maths, English & Science"})," via Zoom"]}),o.jsx("p",{className:"text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2",children:"Personalised lessons with one-to-one support from expert tutors. Your child only sees the teacher - no distractions, maximum focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons."}),o.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:o.jsxs("button",{type:"button",onClick:_,className:"bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation","aria-label":"Book a free consultation",children:["Book Free Consultation",o.jsx(Ht,{className:"ml-2 h-5 w-5 flex-shrink-0","aria-hidden":"true"})]})})]})})}),o.jsx("section",{id:"how-it-works",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"how-it-works-heading",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx("h2",{id:"how-it-works-heading",className:"text-4xl font-bold text-center mb-12",children:"How Our Lessons Work"}),o.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-3xl mx-auto",children:"A clear, supportive structure that keeps students confident and parents fully in the loop."}),o.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[o.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[o.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:o.jsx(uh,{className:"h-8 w-8 text-white"})}),o.jsx("h3",{className:"text-xl font-semibold mb-2",children:"One-to-One Support"}),o.jsx("p",{className:"text-gray-600",children:"Personalised lessons with one-to-one support. Your child only sees the teacher, ensuring privacy and focus."})]}),o.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[o.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:o.jsx(hh,{className:"h-8 w-8 text-white"})}),o.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Via Zoom"}),o.jsx("p",{className:"text-gray-600",children:"Convenient online lessons from the comfort of your home. High-quality video and interactive whiteboard. Webcam and microphone are optional - we use Zoom chat to check engagement, and parents can monitor participation for privacy."})]}),o.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[o.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:o.jsx(ao,{className:"h-8 w-8 text-white"})}),o.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Student Privacy"}),o.jsx("p",{className:"text-gray-600",children:"Your child only sees the teacher. Private, secure sessions designed for maximum learning focus. Webcam and mic are optional - we use Zoom chat for communication, and parents can check engagement for privacy reasons."})]}),o.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[o.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:o.jsx(yn,{className:"h-8 w-8 text-white"})}),o.jsx("h3",{className:"text-xl font-semibold mb-2",children:"24/7 Personalised Support"}),o.jsx("p",{className:"text-gray-600",children:"Students can ask questions anytime between lessons. Tutors respond with personalised explanations, feedback, and next-step guidance."})]}),o.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[o.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:o.jsx(ol,{className:"h-8 w-8 text-white"})}),o.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Parent Evenings"}),o.jsx("p",{className:"text-gray-600",children:"Regular parent evenings to review progress, share targets, and agree on the next steps for maximum grade improvement."})]}),o.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[o.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:o.jsx(Hs,{className:"h-8 w-8 text-white"})}),o.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Regular Exam-Style Tests"}),o.jsx("p",{className:"text-gray-600",children:"We set regular exams and topic checks to track progress, build exam technique, and close gaps quickly."})]})]})]})}),o.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"benefits-heading",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx("h2",{id:"benefits-heading",className:"text-4xl font-bold text-center mb-4",children:"Benefits for Parents & Students"}),o.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Why thousands of families choose MySchola for GCSE success"}),o.jsx("div",{className:"mb-12 flex justify-center",children:o.jsx("img",{src:yh,alt:"Comparison table showing MySchola benefits against other providers and one-to-one home tutors",className:"w-full max-w-6xl h-auto rounded-2xl border border-gray-200 shadow-sm object-contain",loading:"lazy"})}),o.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[o.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[o.jsxs("div",{className:"flex items-center mb-3",children:[o.jsx(Ca,{className:"h-6 w-6 text-green-500 mr-2","aria-hidden":"true"}),o.jsx("h3",{className:"text-xl font-semibold",children:"Grade Improvement"})]}),o.jsx("p",{className:"text-gray-600",children:"Students consistently improve by 2-3 grades with our proven teaching methods and personalised approach."})]}),o.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[o.jsxs("div",{className:"flex items-center mb-3",children:[o.jsx(hp,{className:"h-6 w-6 text-blue-500 mr-2","aria-hidden":"true"}),o.jsx("h3",{className:"text-xl font-semibold",children:"Confidence Building"})]}),o.jsx("p",{className:"text-gray-600",children:"Watch your child's confidence soar as they master difficult concepts and see their progress week by week."})]}),o.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[o.jsxs("div",{className:"flex items-center mb-3",children:[o.jsx(Ra,{className:"h-6 w-6 text-red-500 mr-2","aria-hidden":"true"}),o.jsx("h3",{className:"text-xl font-semibold",children:"Exam Focus"})]}),o.jsx("p",{className:"text-gray-600",children:"Targeted exam preparation with past papers, exam techniques, and strategies tailored to GCSE requirements."})]}),o.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[o.jsxs("div",{className:"flex items-center mb-3",children:[o.jsx(io,{className:"h-6 w-6 text-purple-500 mr-2","aria-hidden":"true"}),o.jsx("h3",{className:"text-xl font-semibold",children:"Flexible Scheduling"})]}),o.jsx("p",{className:"text-gray-600",children:"Choose times that work around your family's schedule. Evening and weekend slots available."})]}),o.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[o.jsxs("div",{className:"flex items-center mb-3",children:[o.jsx(ol,{className:"h-6 w-6 text-orange-500 mr-2","aria-hidden":"true"}),o.jsx("h3",{className:"text-xl font-semibold",children:"Expert Tutors"})]}),o.jsx("p",{className:"text-gray-600",children:"Qualified UK teachers with DBS checks and proven track records of GCSE success."})]}),o.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[o.jsxs("div",{className:"flex items-center mb-3",children:[o.jsx($r,{className:"h-6 w-6 text-indigo-500 mr-2","aria-hidden":"true"}),o.jsx("h3",{className:"text-xl font-semibold",children:"Personalised Curriculum"})]}),o.jsx("p",{className:"text-gray-600",children:"Lessons tailored to your child's learning style, pace, and specific areas that need improvement."})]})]})]})}),o.jsx("section",{id:"testimonials",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"video-testimonials-heading",children:o.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[o.jsx("h2",{id:"video-testimonials-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Video Testimonials"}),o.jsx("p",{className:"text-gray-600 mb-12",children:"Short clips from students, with the subject and grade improvements below."}),o.jsxs("div",{className:"relative sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[o.jsx("button",{type:"button",onClick:ce,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:o.jsx(it,{className:"h-5 w-5","aria-hidden":"true"})}),o.jsx("div",{className:"overflow-hidden sm:col-start-2",children:o.jsx("div",{className:`flex ${P?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${N*(100/O)}%)`},children:r.map((g,v)=>{const E=Math.floor(O/2),w=v===N+E;return o.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/O}%`},children:o.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${w?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[o.jsx(Eg,{src:g.src,className:"w-full h-auto rounded-t-2xl"}),o.jsxs("div",{className:"p-4 text-center",children:[o.jsx("p",{className:"text-lg font-semibold text-gray-900",children:g.name}),o.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[o.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:g.subjects.join(" / ")}),o.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:F(g.improvedBy)})]})]})]})},`${g.id}-${v}`)})})}),o.jsx("button",{type:"button",onClick:ne,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:o.jsx(Ht,{className:"h-5 w-5","aria-hidden":"true"})}),o.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[o.jsx("button",{type:"button",onClick:ce,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:o.jsx(it,{className:"h-5 w-5","aria-hidden":"true"})}),o.jsx("button",{type:"button",onClick:ne,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:o.jsx(Ht,{className:"h-5 w-5","aria-hidden":"true"})})]})]})]})}),o.jsx("section",{id:"text-testimonials",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"testimonials-heading",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold text-center mb-4",children:"What Parents & Students Say"}),o.jsx("p",{className:"text-center text-gray-600 mb-12",children:"Real results from real families"}),o.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-12",children:[o.jsxs("div",{className:"bg-blue-600 text-white p-6 rounded-lg text-center",children:[o.jsx("div",{className:"text-4xl font-bold mb-2",children:"95%"}),o.jsx("div",{className:"text-blue-100",children:"Students improve grades"})]}),o.jsxs("div",{className:"bg-green-600 text-white p-6 rounded-lg text-center",children:[o.jsx("div",{className:"text-4xl font-bold mb-2",children:"2-3"}),o.jsx("div",{className:"text-green-100",children:"Grade improvement average"})]}),o.jsxs("div",{className:"bg-purple-600 text-white p-6 rounded-lg text-center",children:[o.jsx("div",{className:"text-4xl font-bold mb-2",children:"300+"}),o.jsx("div",{className:"text-purple-100",children:"Successful students"})]})]}),o.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{name:"Aisha K, Parent",text:"My son started the term lacking confidence in Maths and was sitting at a Grade 5. After weekly Zoom lessons with MySchola, his understanding improved steadily and he finished the term with a Grade 7.",rating:5,result:"Maths: Grade 5 → Grade 7"},{name:"Rahul P, Parent",text:"MySchola was patient and explained the Poetry Anthology texts in a way my daughter could finally understand. Her confidence grew each week and her English grade jumped from a 5 to an 8.",rating:5,result:"English Lit: Grade 5 → Grade 8"},{name:"Emma L., Parent",text:"The confidence my son gained was incredible. He went from hating Chemistry especially Organic Chemistry to loving it. His Chemistry grade improved from 5 to 8. Worth every penny!",rating:5,result:"Chemistry: Grade 5 → Grade 8"},{name:"Michael R., Student",text:"Going through past papers and custom exam style questions with Isam and Hamza made a huge difference. Physics finally started to make sense, and I learned how to approach exam questions properly.",rating:5,result:"Physics: Grade 6 → Grade 9"},{name:"Jasmin K., Parent",text:"As a working parent, the flexible scheduling in the evenings was a lifesaver. My daughter could do sessions that fit around school and activities. Highly recommend!",rating:4,result:"Maths: Grade 6 → Grade 8"},{name:"Emmanuel P., Parent",text:"The privacy of the sessions meant my son felt comfortable making mistakes and asking for help. His confidence has grown so much, and his grades show it!",rating:5,result:"English: Grade 5 → Grade 7"}].map((g,v)=>o.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[o.jsx("div",{className:"flex mb-4",children:[...Array(g.rating)].map((E,w)=>o.jsx(cg,{className:"h-5 w-5 text-yellow-400 fill-current","aria-hidden":"true"},w))}),o.jsxs("p",{className:"text-gray-600 mb-4 italic",children:['"',g.text,'"']}),o.jsxs("div",{className:"border-t pt-4",children:[o.jsxs("p",{className:"font-semibold text-gray-900",children:["— ",g.name]}),o.jsx("p",{className:"text-sm text-blue-600 font-medium mt-1",children:g.result})]})]},v))})]})}),o.jsx("section",{id:"subjects",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"subjects-heading",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx("h2",{id:"subjects-heading",className:"text-4xl font-bold text-center mb-4",children:"Subjects We Offer"}),o.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Comprehensive GCSE support for Years 9-11"}),o.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{name:"Maths",description:"GCSE Maths (Foundation & Higher)"},{name:"Combined Science",description:"Trilogy and Synergy pathways"},{name:"Triple Science",description:"Biology, Chemistry, and Physics"},{name:"English Language",description:"Reading, writing, and language skills"},{name:"English Literature",description:"Poetry, prose, and drama analysis"}].map(g=>o.jsx("div",{className:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600",children:o.jsxs("div",{className:"flex items-start mb-2",children:[o.jsx(Tp,{className:"h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0","aria-hidden":"true"}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-semibold mb-1",children:g.name}),o.jsx("p",{className:"text-gray-600 text-sm",children:g.description})]})]})},g.name))})]})}),o.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-white","aria-labelledby":"universities-heading",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsx("h2",{id:"universities-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Our tutors study at the UK's most prestigious universities"}),o.jsx("p",{className:"text-gray-600 max-w-3xl mx-auto",children:"Your education is everything. That's why we only hire the best in class. All of our tutors have stellar academic backgrounds and have first-hand experience with the rigorous exam process. Learn from the best to achieve your best."})]}),o.jsx("div",{className:"relative overflow-hidden",children:o.jsxs("div",{className:"flex animate-marquee",children:[[{src:Hr,alt:"University of Nottingham",name:"Nottingham"},{src:zr,alt:"King's College London",name:"King's College"},{src:Gr,alt:"University of Cambridge",name:"Cambridge"},{src:Kr,alt:"Imperial College London",name:"Imperial"},{src:Qr,alt:"University of Warwick",name:"Warwick"}].map((g,v)=>o.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:o.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-40 sm:h-48 lg:h-56 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:o.jsx("img",{src:g.src,alt:g.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`first-${v}`)),[{src:Hr,alt:"University of Nottingham",name:"Nottingham"},{src:zr,alt:"King's College London",name:"King's College"},{src:Gr,alt:"University of Cambridge",name:"Cambridge"},{src:Kr,alt:"Imperial College London",name:"Imperial"},{src:Qr,alt:"University of Warwick",name:"Warwick"}].map((g,v)=>o.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:o.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-40 sm:h-48 lg:h-56 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:o.jsx("img",{src:g.src,alt:g.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`second-${v}`))]})})]})}),o.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"exam-boards-heading",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsx("h2",{id:"exam-boards-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Expert tuition for every exam board"}),o.jsx("p",{className:"text-gray-600 max-w-3xl mx-auto",children:"Unlock academic success with tailored support across every exam board. Our team of expert tutors knows the ins and outs of each curriculum, offering customized guidance that fits your exact syllabus."})]}),o.jsx("div",{className:"relative overflow-hidden",children:o.jsx("div",{className:"flex animate-marquee-reverse",children:[...Array(3)].map((g,v)=>[{src:bg,alt:"AQA",name:"AQA"},{src:vg,alt:"Edexcel",name:"Edexcel"}].map((E,w)=>o.jsx("div",{className:"flex-shrink-0 mx-6 sm:mx-8 lg:mx-10",children:o.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 h-44 sm:h-52 lg:h-60 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:o.jsx("img",{src:E.src,alt:E.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`set-${v}-${w}`)))})})]})}),o.jsx("section",{id:"book-call",className:"py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600","aria-labelledby":"book-call-heading",children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center text-white",children:[o.jsx("h2",{id:"book-call-heading",className:"text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 px-2",children:"Ready to Start Your Child's GCSE Success Journey?"}),o.jsx("p",{className:"text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-2",children:"Book a free consultation to discuss your child's needs and see how we can help them achieve their goals."}),o.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:o.jsxs("button",{type:"button",onClick:_,className:"bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 active:bg-gray-200 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation","aria-label":"Book a free consultation",children:["Book Free Consultation",o.jsx(Ht,{className:"ml-2 h-5 w-5 flex-shrink-0","aria-hidden":"true"})]})}),o.jsx("p",{className:"text-blue-100 text-sm mt-6",children:"No card required • Free 15-minute consultation"})]})}),o.jsx("section",{id:"faq",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"faq-heading",children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsx("h2",{id:"faq-heading",className:"text-4xl font-bold text-center mb-12",children:"Frequently Asked Questions"}),o.jsx("div",{className:"space-y-4",children:[{q:"How do the Zoom lessons work?",a:"Each lesson feels one-to-one via Zoom. Your child will see only the teacher, ensuring privacy and focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We use interactive whiteboards and screen sharing to make lessons engaging and effective. All sessions are recorded for your child to review later."},{q:"What equipment do we need?",a:"You just need a computer, tablet, or laptop with a stable internet connection. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We recommend using a desktop or laptop for the best experience with the interactive whiteboard."},{q:"How long are the sessions?",a:"All lessons are 60 minutes and this duration is fixed."},{q:"Can I choose the tutor?",a:"Yes! During your consultation, we'll discuss your child's learning style and match them with the best tutor. You can also request specific tutors based on availability."},{q:"What if my child misses a session?",a:"All sessions are recorded and uploaded. If your child misses a lesson, they can watch the recording at their convenience. You can ask any questions through our WhatsApp support, available 24/7."},{q:"Do you provide homework and practice materials?",a:"Absolutely! Each tutor provides tailored homework assignments, practice papers, and additional resources to reinforce learning between sessions. All materials are included in the lesson price."},{q:"How quickly will we see results?",a:"Most students see improvement within 4-6 weeks of regular sessions. However, every child is different. We track progress regularly and adjust our approach to ensure maximum effectiveness."},{q:"What age groups do you teach?",a:"We specialize in Years 9-11, preparing students for GCSEs. This includes both Foundation and Higher tier courses across all major GCSE subjects."}].map((g,v)=>o.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[o.jsxs("button",{className:"w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",onClick:()=>Q(v),"aria-expanded":m===v,"aria-controls":`faq-answer-${v}`,id:`faq-question-${v}`,children:[o.jsxs("span",{className:"font-semibold text-gray-900 flex items-center",children:[o.jsx(Sp,{className:"h-5 w-5 text-blue-600 mr-2","aria-hidden":"true"}),g.q]}),o.jsx("span",{className:"text-blue-600","aria-hidden":"true","aria-label":m===v?"Collapse answer":"Expand answer",children:m===v?"−":"+"})]}),m===v&&o.jsx("div",{id:`faq-answer-${v}`,className:"px-6 pb-4 text-gray-600",role:"region","aria-labelledby":`faq-question-${v}`,children:g.a})]},v))})]})}),o.jsx("section",{id:"contact",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"contact-heading",children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsx("h2",{id:"contact-heading",className:"text-4xl font-bold text-center mb-12",children:"Get in Touch"}),o.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[o.jsx(Wr,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),o.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Email Us"}),o.jsx("a",{href:"mailto:myscholauk@gmail.com",className:"text-gray-600 hover:text-blue-600 transition",children:"myscholauk@gmail.com"})]}),o.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[o.jsx(ng,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),o.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Call Us"}),o.jsx("a",{href:"tel:+447344193804",className:"text-gray-600 hover:text-blue-600 transition",children:"+44 7344 193804"}),o.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Mon-Fri 9am-6pm"})]})]})]})}),o.jsx("section",{id:"privacy-policy",className:"py-20 px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Privacy Policy"}),o.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Information We Collect"}),o.jsx("p",{children:"We collect information that you provide directly to us, including your name, email address, phone number, and information about your child's educational needs. We also collect information automatically when you use our services, such as session recordings and progress data."})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. How We Use Your Information"}),o.jsx("p",{children:"We use the information we collect to provide, maintain, and improve our tutoring services, process your bookings, communicate with you, and ensure the safety and security of our platform."})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Data Security"}),o.jsx("p",{children:"We implement appropriate technical and organizational measures to protect your personal information. All tutors are DBS checked, and all Zoom sessions are encrypted and secure."})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Session Recordings"}),o.jsx("p",{children:"Lessons may be recorded for educational purposes and quality assurance. Recordings are stored securely and are accessible only to authorized personnel and the student's account."})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Your Rights"}),o.jsx("p",{children:"You have the right to access, update, or delete your personal information at any time. You can also request a copy of your data or withdraw consent for data processing."})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Children's Privacy"}),o.jsx("p",{children:"We take children's privacy seriously. We only collect information necessary to provide our services, and all data handling complies with UK GDPR and Children's Code requirements."})]}),o.jsx("div",{children:o.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})}),o.jsx("section",{id:"terms-of-service",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50",children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsx("h2",{className:"text-4xl font-bold text-center mb-4",children:"Refund & Cancellation Policy"}),o.jsx("p",{className:"text-center text-gray-500 mb-12",children:"MySchola - Last updated: 9 March 2026"}),o.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Overview"}),o.jsx("p",{children:"This Refund & Cancellation Policy explains how refunds, cancellations, and subscription changes work for services provided by MySchola."}),o.jsx("p",{children:"By purchasing or subscribing to any MySchola service, you agree to this policy in addition to our Terms of Service."})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. Subscription Payments"}),o.jsx("p",{children:"MySchola provides tutoring and educational services on a weekly or monthly subscription basis."}),o.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[o.jsx("li",{children:"Payments are processed automatically through Stripe or other secure payment providers."}),o.jsx("li",{children:"Subscription fees vary depending on the subjects, number of sessions, and selected package."}),o.jsx("li",{children:"Subscriptions renew automatically at the end of each billing cycle unless cancelled beforehand."})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. 7-Day Money-Back Guarantee"}),o.jsx("p",{children:"We offer a 7-day money-back guarantee from the date of your first payment."}),o.jsx("p",{children:"You may request a full refund within 7 calendar days if:"}),o.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[o.jsx("li",{children:"The request is made within 7 days of the initial purchase."}),o.jsx("li",{children:"The request is submitted in writing."}),o.jsx("li",{children:"There has been no excessive or abusive use of the service."})]}),o.jsx("p",{children:"This guarantee allows parents and students to determine whether the service is suitable for their needs."}),o.jsx("p",{children:"Refunds are not intended for customers who primarily consume a significant portion of the service and then request a refund."})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Partial Refunds"}),o.jsx("p",{children:"In certain situations, partial refunds may be offered at MySchola's discretion, including but not limited to:"}),o.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[o.jsx("li",{children:"Removing one subject from a multi-subject subscription."}),o.jsx("li",{children:"Downgrading to a smaller tutoring package."}),o.jsx("li",{children:"Reduction in services during an active billing period."})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. No Refunds After 7 Days"}),o.jsx("p",{children:"After the 7-day money-back guarantee period has passed:"}),o.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[o.jsx("li",{children:"No refunds will be issued for time already used."}),o.jsx("li",{children:"Missed lessons, unused sessions, or lack of attendance do not qualify for refunds."}),o.jsx("li",{children:"Refunds are not issued for failure to attend or engage with lessons."})]}),o.jsx("p",{children:"If a subscription is cancelled after this period, the cancellation will only prevent future charges."}),o.jsx("p",{children:"Any partial refund will be calculated proportionally based on the remaining value of the unused service."})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Cancellation Policy"}),o.jsx("p",{children:"You may cancel your subscription at any time."}),o.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[o.jsx("li",{children:"Cancellations apply to future billing periods only."}),o.jsx("li",{children:"Access to tutoring sessions and learning resources will remain active until the end of the current paid billing period."}),o.jsx("li",{children:"Once a billing cycle has begun, it is considered earned and non-refundable after the 7-day guarantee period."})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"7. How to Cancel or Request a Refund"}),o.jsx("p",{children:"All cancellation or refund requests must be submitted in writing."}),o.jsx("p",{children:"You can contact us via WhatsApp or SMS: +44 7344 193804."}),o.jsx("p",{children:"Your request should include:"}),o.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[o.jsx("li",{children:"The student's full name."}),o.jsx("li",{children:"The email address or phone number used during registration."}),o.jsx("li",{children:"A clear request to cancel or request a refund."})]}),o.jsx("p",{children:"Our support team will review and respond to requests as quickly as possible."})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"8. Immediate Access to Digital Services"}),o.jsx("p",{children:"Access to MySchola's digital platform, tutoring sessions, recordings, and learning resources is typically provided within minutes of successful payment."}),o.jsx("p",{children:"By accessing the service immediately, you acknowledge that:"}),o.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[o.jsx("li",{children:"Digital educational services begin immediately after purchase."}),o.jsx("li",{children:"Your subscription is considered active once access has been granted."})]}),o.jsx("p",{children:"This does not affect your statutory rights or the 7-day money-back guarantee, but it helps prevent misuse of the refund policy."})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"9. Abuse of the Refund Policy"}),o.jsx("p",{children:"To ensure fairness for all students and families, MySchola reserves the right to:"}),o.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[o.jsx("li",{children:"Refuse refund requests where there is evidence of repeated or abusive refund behaviour."}),o.jsx("li",{children:"Suspend or terminate accounts in cases of misuse, fraudulent activity, or bad-faith use of the service."})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"10. Changes to This Policy"}),o.jsx("p",{children:"MySchola may update this Refund & Cancellation Policy from time to time."}),o.jsx("p",{children:"The most current version will always be available on our website."})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"11. Contact"}),o.jsx("p",{children:"MySchola"}),o.jsx("p",{children:"For support, refunds, or cancellations:"}),o.jsx("p",{children:"WhatsApp / SMS: +44 7344 193804"})]})]})]})})]}),o.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center mb-4",children:[o.jsx(Kn,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),o.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),o.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 9-11 via Zoom."})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),o.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[o.jsx("li",{children:o.jsx("a",{href:"#home",className:"hover:text-white transition",children:"Home"})}),o.jsx("li",{children:o.jsx("a",{href:"#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),o.jsx("li",{children:o.jsx("a",{href:"#subjects",className:"hover:text-white transition",children:"Subjects"})}),o.jsx("li",{children:o.jsx("a",{href:"#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),o.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[o.jsx("li",{children:o.jsx("a",{href:"#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),o.jsx("li",{children:o.jsx("a",{href:"#terms-of-service",className:"hover:text-white transition",children:"Refund & Cancellation Policy"})}),o.jsx("li",{children:o.jsx("a",{href:"#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),o.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[o.jsx("li",{children:o.jsx("a",{href:"mailto:myscholauk@gmail.com",className:"hover:text-white transition",children:"myscholauk@gmail.com"})}),o.jsx("li",{children:o.jsx("a",{href:"tel:+447344193804",className:"hover:text-white transition",children:"+44 7344 193804"})}),o.jsx("li",{children:o.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Nr,className:"text-green-400 hover:text-green-300 transition inline-flex items-center gap-2",children:[o.jsx(yn,{className:"h-4 w-4","aria-hidden":"true"}),"Contact Us on WhatsApp"]})}),o.jsx("li",{children:o.jsx("button",{type:"button",onClick:_,className:"bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation text-sm sm:text-base","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),o.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:o.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 9-11."]})})]})}),o.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Nr,className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation","aria-label":"Contact us on WhatsApp",children:o.jsx(yn,{className:"h-5 w-5 sm:h-6 sm:w-6","aria-hidden":"true"})})]})}const Ig=()=>{};var ul={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Tg=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],c=n[t++],l=n[t++],h=((r&7)<<18|(i&63)<<12|(c&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const i=n[t++],c=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|c&63)}}return e.join("")},_h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],c=r+1<n.length,l=c?n[r+1]:0,h=r+2<n.length,m=h?n[r+2]:0,f=i>>2,x=(i&3)<<4|l>>4;let b=(l&15)<<2|m>>6,N=m&63;h||(N=64,c||(b=64)),s.push(t[f],t[x],t[b],t[N])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Tg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const m=r<n.length?t[n.charAt(r)]:64;++r;const x=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||l==null||m==null||x==null)throw new Ng;const b=i<<2|l>>4;if(s.push(b),m!==64){const N=l<<4&240|m>>2;if(s.push(N),x!==64){const C=m<<6&192|x;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ng extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ag=function(n){const e=xh(n);return _h.encodeByteArray(e,!0)},Yr=function(n){return Ag(n).replace(/\./g,"")},wh=function(n){try{return _h.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Sg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kg=()=>Sg().__FIREBASE_DEFAULTS__,Rg=()=>{if(typeof process>"u"||typeof ul>"u")return;const n=ul.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&wh(n[1]);return e&&JSON.parse(e)},_i=()=>{try{return Ig()||kg()||Rg()||Cg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bh=n=>{var e,t;return(t=(e=_i())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},jg=n=>{const e=bh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},vh=()=>{var n;return(n=_i())==null?void 0:n.config},Eh=n=>{var e;return(e=_i())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function ss(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ih(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Dg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Yr(JSON.stringify(t)),Yr(JSON.stringify(c)),""].join(".")}const Fs={};function Vg(){const n={prod:[],emulator:[]};for(const e of Object.keys(Fs))Fs[e]?n.emulator.push(e):n.prod.push(e);return n}function Og(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let hl=!1;function Th(n,e){if(typeof window>"u"||typeof document>"u"||!ss(window.location.host)||Fs[n]===e||Fs[n]||hl)return;Fs[n]=e;function t(b){return`__firebase__banner__${b}`}const s="__firebase__banner",i=Vg().prod.length>0;function c(){const b=document.getElementById(s);b&&b.remove()}function l(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function h(b,N){b.setAttribute("width","24"),b.setAttribute("id",N),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function m(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{hl=!0,c()},b}function f(b,N){b.setAttribute("id",N),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function x(){const b=Og(s),N=t("text"),C=document.getElementById(N)||document.createElement("span"),P=t("learnmore"),j=document.getElementById(P)||document.createElement("a"),O=t("preprendIcon"),D=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const F=b.element;l(F),f(j,P);const Q=m();h(D,O),F.append(D,C,j,Q),document.body.appendChild(F)}i?(C.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function Lg(){var e;const n=(e=_i())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Nh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ug(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bg(){const n=Ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qg(){return!Lg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ah(){try{return typeof indexedDB=="object"}catch{return!1}}function Sh(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function $g(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="FirebaseError";class lt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Wg,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,An.prototype.create)}}class An{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],c=i?Hg(i,s):"Error",l=`${this.serviceName}: ${c} (${r}).`;return new lt(r,l,s)}}function Hg(n,e){return n.replace(zg,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const zg=/\{\$([^}]+)}/g;function Gg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],c=e[r];if(dl(i)&&dl(c)){if(!Xt(i,c))return!1}else if(i!==c)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function dl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ps(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ds(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Kg(n,e){const t=new Qg(n,e);return t.subscribe.bind(t)}class Qg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Yg(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=da),r.error===void 0&&(r.error=da),r.complete===void 0&&(r.complete=da);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function da(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=1e3,Xg=2,Zg=14400*1e3,ey=.5;function ml(n,e=Jg,t=Xg){const s=e*Math.pow(t,n),r=Math.round(ey*s*(Math.random()-.5)*2);return Math.min(Zg,s+r)}/**
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
 */function ye(n){return n&&n._delegate?n._delegate:n}class at{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Pg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sy(e))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gn){return this.instances.has(e)}getOptions(e=gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&c.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ny(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=gn){return this.component?this.component.multipleInstances?e:gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ny(n){return n===gn?void 0:n}function sy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ty(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const iy={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},ay=X.INFO,oy={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},cy=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=oy[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wi{constructor(e){this.name=e,this._logLevel=ay,this._logHandler=cy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const ly=(n,e)=>e.some(t=>n instanceof t);let fl,pl;function uy(){return fl||(fl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hy(){return pl||(pl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kh=new WeakMap,ja=new WeakMap,Rh=new WeakMap,ma=new WeakMap,oo=new WeakMap;function dy(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",c)},i=()=>{t(Gt(n.result)),r()},c=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&kh.set(t,n)}).catch(()=>{}),oo.set(e,n),e}function my(n){if(ja.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",c),n.removeEventListener("abort",c)},i=()=>{t(),r()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",c),n.addEventListener("abort",c)});ja.set(n,e)}let Pa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ja.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Rh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Gt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function fy(n){Pa=n(Pa)}function py(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(fa(this),e,...t);return Rh.set(s,e.sort?e.sort():[e]),Gt(s)}:hy().includes(n)?function(...e){return n.apply(fa(this),e),Gt(kh.get(this))}:function(...e){return Gt(n.apply(fa(this),e))}}function gy(n){return typeof n=="function"?py(n):(n instanceof IDBTransaction&&my(n),ly(n,uy())?new Proxy(n,Pa):n)}function Gt(n){if(n instanceof IDBRequest)return dy(n);if(ma.has(n))return ma.get(n);const e=gy(n);return e!==n&&(ma.set(n,e),oo.set(e,n)),e}const fa=n=>oo.get(n);function Ch(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const c=indexedDB.open(n,e),l=Gt(c);return s&&c.addEventListener("upgradeneeded",h=>{s(Gt(c.result),h.oldVersion,h.newVersion,Gt(c.transaction),h)}),t&&c.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{i&&h.addEventListener("close",()=>i()),r&&h.addEventListener("versionchange",m=>r(m.oldVersion,m.newVersion,m))}).catch(()=>{}),l}const yy=["get","getKey","getAll","getAllKeys","count"],xy=["put","add","delete","clear"],pa=new Map;function gl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(pa.get(e))return pa.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=xy.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||yy.includes(t)))return;const i=async function(c,...l){const h=this.transaction(c,r?"readwrite":"readonly");let m=h.store;return s&&(m=m.index(l.shift())),(await Promise.all([m[t](...l),r&&h.done]))[0]};return pa.set(e,i),i}fy(n=>({...n,get:(e,t,s)=>gl(e,t)||n.get(e,t,s),has:(e,t)=>!!gl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wy(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function wy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Da="@firebase/app",yl="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new wi("@firebase/app"),by="@firebase/app-compat",vy="@firebase/analytics-compat",Ey="@firebase/analytics",Iy="@firebase/app-check-compat",Ty="@firebase/app-check",Ny="@firebase/auth",Ay="@firebase/auth-compat",Sy="@firebase/database",ky="@firebase/data-connect",Ry="@firebase/database-compat",Cy="@firebase/functions",jy="@firebase/functions-compat",Py="@firebase/installations",Dy="@firebase/installations-compat",Vy="@firebase/messaging",Oy="@firebase/messaging-compat",My="@firebase/performance",Ly="@firebase/performance-compat",Fy="@firebase/remote-config",Uy="@firebase/remote-config-compat",By="@firebase/storage",qy="@firebase/storage-compat",$y="@firebase/firestore",Wy="@firebase/ai",Hy="@firebase/firestore-compat",zy="firebase",Gy="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="[DEFAULT]",Ky={[Da]:"fire-core",[by]:"fire-core-compat",[Ey]:"fire-analytics",[vy]:"fire-analytics-compat",[Ty]:"fire-app-check",[Iy]:"fire-app-check-compat",[Ny]:"fire-auth",[Ay]:"fire-auth-compat",[Sy]:"fire-rtdb",[ky]:"fire-data-connect",[Ry]:"fire-rtdb-compat",[Cy]:"fire-fn",[jy]:"fire-fn-compat",[Py]:"fire-iid",[Dy]:"fire-iid-compat",[Vy]:"fire-fcm",[Oy]:"fire-fcm-compat",[My]:"fire-perf",[Ly]:"fire-perf-compat",[Fy]:"fire-rc",[Uy]:"fire-rc-compat",[By]:"fire-gcs",[qy]:"fire-gcs-compat",[$y]:"fire-fst",[Hy]:"fire-fst-compat",[Wy]:"fire-vertex","fire-js":"fire-js",[zy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new Map,Qy=new Map,Oa=new Map;function xl(n,e){try{n.container.addComponent(e)}catch(t){kt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bt(n){const e=n.name;if(Oa.has(e))return kt.debug(`There were multiple attempts to register component ${e}.`),!1;Oa.set(e,n);for(const t of Jr.values())xl(t,n);for(const t of Qy.values())xl(t,n);return!0}function Sn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function nt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new An("app","Firebase",Yy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=Gy;function jh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Va,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Kt.create("bad-app-name",{appName:String(r)});if(t||(t=vh()),!t)throw Kt.create("no-options");const i=Jr.get(r);if(i){if(Xt(t,i.options)&&Xt(s,i.config))return i;throw Kt.create("duplicate-app",{appName:r})}const c=new ry(r);for(const h of Oa.values())c.addComponent(h);const l=new Jy(t,s,c);return Jr.set(r,l),l}function co(n=Va){const e=Jr.get(n);if(!e&&n===Va&&vh())return jh();if(!e)throw Kt.create("no-app",{appName:n});return e}function et(n,e,t){let s=Ky[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const c=[`Unable to register library "${s}" with version "${e}":`];r&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&c.push("and"),i&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kt.warn(c.join(" "));return}bt(new at(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Xy="firebase-heartbeat-database",Zy=1,zs="firebase-heartbeat-store";let ga=null;function Ph(){return ga||(ga=Ch(Xy,Zy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Kt.create("idb-open",{originalErrorMessage:n.message})})),ga}async function ex(n){try{const t=(await Ph()).transaction(zs),s=await t.objectStore(zs).get(Dh(n));return await t.done,s}catch(e){if(e instanceof lt)kt.warn(e.message);else{const t=Kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kt.warn(t.message)}}}async function _l(n,e){try{const s=(await Ph()).transaction(zs,"readwrite");await s.objectStore(zs).put(e,Dh(n)),await s.done}catch(t){if(t instanceof lt)kt.warn(t.message);else{const s=Kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});kt.warn(s.message)}}}function Dh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const tx=1024,nx=30;class sx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ix(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(c=>c.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>nx){const c=ax(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){kt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wl(),{heartbeatsToSend:s,unsentEntries:r}=rx(this._heartbeatsCache.heartbeats),i=Yr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return kt.warn(t),""}}}function wl(){return new Date().toISOString().substring(0,10)}function rx(n,e=tx){const t=[];let s=n.slice();for(const r of n){const i=t.find(c=>c.agent===r.agent);if(i){if(i.dates.push(r.date),bl(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),bl(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class ix{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ah()?Sh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ex(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return _l(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return _l(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bl(n){return Yr(JSON.stringify({version:2,heartbeats:n})).length}function ax(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(n){bt(new at("platform-logger",e=>new _y(e),"PRIVATE")),bt(new at("heartbeat",e=>new sx(e),"PRIVATE")),et(Da,yl,n),et(Da,yl,"esm2020"),et("fire-js","")}ox("");var cx="firebase",lx="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et(cx,lx,"app");function Vh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ux=Vh,Oh=new An("auth","Firebase",Vh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new wi("@firebase/auth");function hx(n,...e){Xr.logLevel<=X.WARN&&Xr.warn(`Auth (${rs}): ${n}`,...e)}function Pr(n,...e){Xr.logLevel<=X.ERROR&&Xr.error(`Auth (${rs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(n,...e){throw lo(n,...e)}function pt(n,...e){return lo(n,...e)}function Mh(n,e,t){const s={...ux(),[e]:t};return new An("auth","Firebase",s).create(e,{appName:n.name})}function Qt(n){return Mh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lo(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Oh.create(n,...e)}function $(n,e,...t){if(!n)throw lo(e,...t)}function It(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Pr(e),new Error(e)}function Rt(n,e){n||It(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function dx(){return vl()==="http:"||vl()==="https:"}function vl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dx()||Nh()||"connection"in navigator)?navigator.onLine:!0}function fx(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rt(t>e,"Short delay should be less than long delay!"),this.isMobile=Mg()||Ug()}get(){return mx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(n,e){Rt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yx=new ir(3e4,6e4);function kn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function cn(n,e,t,s,r={}){return Fh(n,r,async()=>{let i={},c={};s&&(e==="GET"?c=s:i={body:JSON.stringify(s)});const l=rr({key:n.config.apiKey,...c}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const m={method:e,headers:h,...i};return Fg()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&ss(n.emulatorConfig.host)&&(m.credentials="include"),Lh.fetch()(await Uh(n,n.config.apiHost,t,l),m)})}async function Fh(n,e,t){n._canInitEmulator=!1;const s={...px,...e};try{const r=new _x(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const c=await i.json();if("needConfirmation"in c)throw Ar(n,"account-exists-with-different-credential",c);if(i.ok&&!("errorMessage"in c))return c;{const l=i.ok?c.errorMessage:c.error.message,[h,m]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ar(n,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw Ar(n,"email-already-in-use",c);if(h==="USER_DISABLED")throw Ar(n,"user-disabled",c);const f=s[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Mh(n,f,m);ot(n,f)}}catch(r){if(r instanceof lt)throw r;ot(n,"network-request-failed",{message:String(r)})}}async function bi(n,e,t,s,r={}){const i=await cn(n,e,t,s,r);return"mfaPendingCredential"in i&&ot(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Uh(n,e,t,s){const r=`${e}${t}?${s}`,i=n,c=i.config.emulator?uo(n.config,r):`${n.config.apiScheme}://${r}`;return gx.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(c).toString():c}function xx(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _x{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(pt(this.auth,"network-request-failed")),yx.get())})}}function Ar(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=pt(n,e,s);return r.customData._tokenResponse=t,r}function El(n){return n!==void 0&&n.enterprise!==void 0}class wx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return xx(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bx(n,e){return cn(n,"GET","/v2/recaptchaConfig",kn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vx(n,e){return cn(n,"POST","/v1/accounts:delete",e)}async function Zr(n,e){return cn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ex(n,e=!1){const t=ye(n),s=await t.getIdToken(e),r=ho(s);$(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,c=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Us(ya(r.auth_time)),issuedAtTime:Us(ya(r.iat)),expirationTime:Us(ya(r.exp)),signInProvider:c||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ya(n){return Number(n)*1e3}function ho(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Pr("JWT malformed, contained fewer than 3 sections"),null;try{const r=wh(t);return r?JSON.parse(r):(Pr("Failed to decode base64 JWT payload"),null)}catch(r){return Pr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Il(n){const e=ho(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof lt&&Ix(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Ix({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(n){var x;const e=n.auth,t=await n.getIdToken(),s=await Gs(n,Zr(e,{idToken:t}));$(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(x=r.providerUserInfo)!=null&&x.length?Bh(r.providerUserInfo):[],c=Ax(n.providerData,i),l=n.isAnonymous,h=!(n.email&&r.passwordHash)&&!(c!=null&&c.length),m=l?h:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:c,metadata:new La(r.createdAt,r.lastLoginAt),isAnonymous:m};Object.assign(n,f)}async function Nx(n){const e=ye(n);await ei(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ax(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Bh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sx(n,e){const t=await Fh(n,{},async()=>{const s=rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,c=await Uh(n,r,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:s};return n.emulatorConfig&&ss(n.emulatorConfig.host)&&(h.credentials="include"),Lh.fetch()(c,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kx(n,e){return cn(n,"POST","/v2/accounts:revokeToken",kn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Il(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=Il(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Sx(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,c=new qn;return s&&($(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),r&&($(typeof r=="string","internal-error",{appName:e}),c.accessToken=r),i&&($(typeof i=="number","internal-error",{appName:e}),c.expirationTime=i),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qn,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class st{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Tx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new La(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Gs(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ex(this,e)}reload(){return Nx(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new st({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ei(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nt(this.auth.app))return Promise.reject(Qt(this.auth));const e=await this.getIdToken();return await Gs(this,vx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,c=t.photoURL??void 0,l=t.tenantId??void 0,h=t._redirectEventId??void 0,m=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:x,emailVerified:b,isAnonymous:N,providerData:C,stsTokenManager:P}=t;$(x&&P,e,"internal-error");const j=qn.fromJSON(this.name,P);$(typeof x=="string",e,"internal-error"),Ut(s,e.name),Ut(r,e.name),$(typeof b=="boolean",e,"internal-error"),$(typeof N=="boolean",e,"internal-error"),Ut(i,e.name),Ut(c,e.name),Ut(l,e.name),Ut(h,e.name),Ut(m,e.name),Ut(f,e.name);const O=new st({uid:x,auth:e,email:r,emailVerified:b,displayName:s,isAnonymous:N,photoURL:c,phoneNumber:i,tenantId:l,stsTokenManager:j,createdAt:m,lastLoginAt:f});return C&&Array.isArray(C)&&(O.providerData=C.map(D=>({...D}))),h&&(O._redirectEventId=h),O}static async _fromIdTokenResponse(e,t,s=!1){const r=new qn;r.updateFromServerResponse(t);const i=new st({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ei(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];$(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Bh(r.providerUserInfo):[],c=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new qn;l.updateFromIdToken(s);const h=new st({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:c}),m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new La(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(h,m),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Map;function Tt(n){Rt(n instanceof Function,"Expected a class definition");let e=Tl.get(n);return e?(Rt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Tl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}qh.type="NONE";const Nl=qh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n,e,t){return`firebase:${n}:${e}:${t}`}class $n{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Dr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Dr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Zr(this.auth,{idToken:e}).catch(()=>{});return t?st._fromGetAccountInfoResponse(this.auth,t,e):null}return st._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new $n(Tt(Nl),e,s);const r=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let i=r[0]||Tt(Nl);const c=Dr(s,e.config.apiKey,e.name);let l=null;for(const m of t)try{const f=await m._get(c);if(f){let x;if(typeof f=="string"){const b=await Zr(e,{idToken:f}).catch(()=>{});if(!b)break;x=await st._fromGetAccountInfoResponse(e,b,f)}else x=st._fromJSON(e,f);m!==i&&(l=x),i=m;break}}catch{}const h=r.filter(m=>m._shouldAllowMigration);return!i._shouldAllowMigration||!h.length?new $n(i,e,s):(i=h[0],l&&await i._set(c,l.toJSON()),await Promise.all(t.map(async m=>{if(m!==i)try{await m._remove(c)}catch{}})),new $n(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($h(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kh(e))return"Blackberry";if(Qh(e))return"Webos";if(Wh(e))return"Safari";if((e.includes("chrome/")||Hh(e))&&!e.includes("edge/"))return"Chrome";if(Gh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function $h(n=Ue()){return/firefox\//i.test(n)}function Wh(n=Ue()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hh(n=Ue()){return/crios\//i.test(n)}function zh(n=Ue()){return/iemobile/i.test(n)}function Gh(n=Ue()){return/android/i.test(n)}function Kh(n=Ue()){return/blackberry/i.test(n)}function Qh(n=Ue()){return/webos/i.test(n)}function mo(n=Ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Rx(n=Ue()){var e;return mo(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Cx(){return Bg()&&document.documentMode===10}function Yh(n=Ue()){return mo(n)||Gh(n)||Qh(n)||Kh(n)||/windows phone/i.test(n)||zh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(n,e=[]){let t;switch(n){case"Browser":t=Al(Ue());break;case"Worker":t=`${Al(Ue())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${rs}/${s}`}/**
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
 */class jx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((c,l)=>{try{const h=e(i);c(h)}catch(h){l(h)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Px(n,e={}){return cn(n,"GET","/v2/passwordPolicy",kn(n,e))}/**
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
 */const Dx=6;class Vx{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Dx,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sl(this),this.idTokenSubscription=new Sl(this),this.beforeStateQueue=new jx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tt(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await $n.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Zr(this,{idToken:e}),s=await st._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(nt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===l)&&(h!=null&&h.user)&&(s=h.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ei(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nt(this.app))return Promise.reject(Qt(this));const t=e?ye(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nt(this.app)?Promise.reject(Qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nt(this.app)?Promise.reject(Qt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Px(this),t=new Vx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new An("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await kx(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Tt(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await $n.create(this,[Tt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let c=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{c||i(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,s,r);return()=>{c=!0,h()}}else{const h=e.addObserver(t);return()=>{c=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&hx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function is(n){return ye(n)}class Sl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kg(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mx(n){vi=n}function Xh(n){return vi.loadJS(n)}function Lx(){return vi.recaptchaEnterpriseScript}function Fx(){return vi.gapiScript}function Ux(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Bx{constructor(){this.enterprise=new qx}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class qx{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const $x="recaptcha-enterprise",Zh="NO_RECAPTCHA";class Wx{constructor(e){this.type=$x,this.auth=is(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(c,l)=>{bx(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const m=new wx(h);return i.tenantId==null?i._agentRecaptchaConfig=m:i._tenantRecaptchaConfigs[i.tenantId]=m,c(m.siteKey)}}).catch(h=>{l(h)})})}function r(i,c,l){const h=window.grecaptcha;El(h)?h.enterprise.ready(()=>{h.enterprise.execute(i,{action:e}).then(m=>{c(m)}).catch(()=>{c(Zh)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Bx().execute("siteKey",{action:"verify"}):new Promise((i,c)=>{s(this.auth).then(l=>{if(!t&&El(window.grecaptcha))r(l,i,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Lx();h.length!==0&&(h+=l),Xh(h).then(()=>{r(l,i,c)}).catch(m=>{c(m)})}}).catch(l=>{c(l)})})}}async function kl(n,e,t,s=!1,r=!1){const i=new Wx(n);let c;if(r)c=Zh;else try{c=await i.verify(t)}catch{c=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const h=l.phoneEnrollmentInfo.phoneNumber,m=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const h=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:c}):Object.assign(l,{captchaResponse:c}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Rl(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await kl(n,e,t,t==="getOobCode");return s(n,c)}else return s(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await kl(n,e,t,t==="getOobCode");return s(n,l)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(n,e){const t=Sn(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Xt(i,e??{}))return r;ot(r,"already-initialized")}return t.initialize({options:e})}function zx(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Tt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Gx(n,e,t){const s=is(n);$(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=ed(e),{host:c,port:l}=Kx(e),h=l===null?"":`:${l}`,m={url:`${i}//${c}${h}/`},f=Object.freeze({host:c,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){$(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),$(Xt(m,s.config.emulator)&&Xt(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=m,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,ss(c)?(Ih(`${i}//${c}${h}`),Th("Auth",!0)):Qx()}function ed(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Kx(n){const e=ed(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Cl(s.substr(i.length+1))}}else{const[i,c]=s.split(":");return{host:i,port:Cl(c)}}}function Cl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Qx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,t){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function Yx(n,e){return cn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jx(n,e){return bi(n,"POST","/v1/accounts:signInWithPassword",kn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xx(n,e){return bi(n,"POST","/v1/accounts:signInWithEmailLink",kn(n,e))}async function Zx(n,e){return bi(n,"POST","/v1/accounts:signInWithEmailLink",kn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends fo{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ks(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ks(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rl(e,t,"signInWithPassword",Jx);case"emailLink":return Xx(e,{email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rl(e,s,"signUpPassword",Yx);case"emailLink":return Zx(e,{idToken:t,email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(n,e){return bi(n,"POST","/v1/accounts:signInWithIdp",kn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0="http://localhost";class bn extends fo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ot("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const c=new bn(s,r);return c.idToken=i.idToken||void 0,c.accessToken=i.accessToken||void 0,c.secret=i.secret,c.nonce=i.nonce,c.pendingToken=i.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Wn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Wn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wn(e,t)}buildRequest(){const e={requestUri:e0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function n0(n){const e=Ps(Ds(n)).link,t=e?Ps(Ds(e)).deep_link_id:null,s=Ps(Ds(n)).deep_link_id;return(s?Ps(Ds(s)).link:null)||s||t||e||n}class po{constructor(e){const t=Ps(Ds(e)),s=t.apiKey??null,r=t.oobCode??null,i=t0(t.mode??null);$(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=n0(e);try{return new po(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.providerId=as.PROVIDER_ID}static credential(e,t){return Ks._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=po.parseLink(t);return $(s,"argument-error"),Ks._fromEmailAndCode(e,s.code,s.tenantId)}}as.PROVIDER_ID="password";as.EMAIL_PASSWORD_SIGN_IN_METHOD="password";as.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends td{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends ar{constructor(){super("facebook.com")}static credential(e){return bn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends ar{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return bn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return qt.credential(t,s)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends ar{constructor(){super("github.com")}static credential(e){return bn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends ar{constructor(){super("twitter.com")}static credential(e,t){return bn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Wt.credential(t,s)}catch{return null}}}Wt.TWITTER_SIGN_IN_METHOD="twitter.com";Wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await st._fromIdTokenResponse(e,s,r),c=jl(s);return new Yn({user:i,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=jl(s);return new Yn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function jl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends lt{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ti.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new ti(e,t,s,r)}}function nd(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ti._fromErrorAndOperation(n,i,e,s):i})}async function s0(n,e,t=!1){const s=await Gs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yn._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(n,e,t=!1){const{auth:s}=n;if(nt(s.app))return Promise.reject(Qt(s));const r="reauthenticate";try{const i=await Gs(n,nd(s,r,e,n),t);$(i.idToken,s,"internal-error");const c=ho(i.idToken);$(c,s,"internal-error");const{sub:l}=c;return $(n.uid===l,s,"user-mismatch"),Yn._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ot(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sd(n,e,t=!1){if(nt(n.app))return Promise.reject(Qt(n));const s="signIn",r=await nd(n,s,e),i=await Yn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function i0(n,e){return sd(is(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(n){const e=is(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function o0(n,e,t){return nt(n.app)?Promise.reject(Qt(n)):i0(ye(n),as.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&a0(n),s})}function c0(n,e,t,s){return ye(n).onIdTokenChanged(e,t,s)}function l0(n,e,t){return ye(n).beforeAuthStateChanged(e,t)}function Ei(n,e,t,s){return ye(n).onAuthStateChanged(e,t,s)}function u0(n){return ye(n).signOut()}const ni="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ni,"1"),this.storage.removeItem(ni),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=1e3,d0=10;class id extends rd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,l,h)=>{this.notifyListeners(c,h)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},i=this.storage.getItem(s);Cx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,d0):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},h0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}id.type="LOCAL";const m0=id;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends rd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ad.type="SESSION";const od=ad;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Ii(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,c=this.handlersMap[r];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(c).map(async m=>m(t.origin,i)),h=await f0(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ii.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,c;return new Promise((l,h)=>{const m=go("",20);r.port1.start();const f=setTimeout(()=>{h(new Error("unsupported_event"))},s);c={messageChannel:r,onMessage(x){const b=x;if(b.data.eventId===m)switch(b.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(b.data.response);break;default:clearTimeout(f),clearTimeout(i),h(new Error("invalid_response"));break}}},this.handlers.add(c),r.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[r.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return window}function g0(n){gt().location.href=n}/**
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
 */function cd(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function y0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function x0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function _0(){return cd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="firebaseLocalStorageDb",w0=1,si="firebaseLocalStorage",ud="fbase_key";class or{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ti(n,e){return n.transaction([si],e?"readwrite":"readonly").objectStore(si)}function b0(){const n=indexedDB.deleteDatabase(ld);return new or(n).toPromise()}function Fa(){const n=indexedDB.open(ld,w0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(si,{keyPath:ud})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(si)?e(s):(s.close(),await b0(),e(await Fa()))})})}async function Pl(n,e,t){const s=Ti(n,!0).put({[ud]:e,value:t});return new or(s).toPromise()}async function v0(n,e){const t=Ti(n,!1).get(e),s=await new or(t).toPromise();return s===void 0?null:s.value}function Dl(n,e){const t=Ti(n,!0).delete(e);return new or(t).toPromise()}const E0=800,I0=3;class hd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>I0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ii._getInstance(_0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await y0(),!this.activeServiceWorker)return;this.sender=new p0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||x0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fa();return await Pl(e,ni,"1"),await Dl(e,ni),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Pl(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>v0(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ti(r,!1).getAll();return new or(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),E0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hd.type="LOCAL";const T0=hd;new ir(3e4,6e4);/**
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
 */function N0(n,e){return e?Tt(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends fo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function A0(n){return sd(n.auth,new yo(n),n.bypassAuthState)}function S0(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),r0(t,new yo(n),n.bypassAuthState)}async function k0(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),s0(t,new yo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:c,type:l}=e;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return A0;case"linkViaPopup":case"linkViaRedirect":return k0;case"reauthViaPopup":case"reauthViaRedirect":return S0;default:ot(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new ir(2e3,1e4);class Bn extends dd{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=go();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,R0.get())};e()}}Bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="pendingRedirect",Vr=new Map;class j0 extends dd{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Vr.get(this.auth._key());if(!e){try{const s=await P0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Vr.set(this.auth._key(),e)}return this.bypassAuthState||Vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function P0(n,e){const t=O0(e),s=V0(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function D0(n,e){Vr.set(n._key(),e)}function V0(n){return Tt(n._redirectPersistence)}function O0(n){return Dr(C0,n.config.apiKey,n.name)}async function M0(n,e,t=!1){if(nt(n.app))return Promise.reject(Qt(n));const s=is(n),r=N0(s,e),c=await new j0(s,r,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=600*1e3;class F0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!U0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!md(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(pt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=L0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vl(e))}saveEventToCache(e){this.cachedEventUids.add(Vl(e)),this.lastProcessedEventTime=Date.now()}}function Vl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function md({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function U0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return md(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B0(n,e={}){return cn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$0=/^https?/;async function W0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await B0(n);for(const t of e)try{if(H0(t))return}catch{}ot(n,"unauthorized-domain")}function H0(n){const e=Ma(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!$0.test(t))return!1;if(q0.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const z0=new ir(3e4,6e4);function Ol(){const n=gt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function G0(n){return new Promise((e,t)=>{var r,i,c;function s(){Ol(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ol(),t(pt(n,"network-request-failed"))},timeout:z0.get()})}if((i=(r=gt().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((c=gt().gapi)!=null&&c.load)s();else{const l=Ux("iframefcb");return gt()[l]=()=>{gapi.load?s():t(pt(n,"network-request-failed"))},Xh(`${Fx()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw Or=null,e})}let Or=null;function K0(n){return Or=Or||G0(n),Or}/**
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
 */const Q0=new ir(5e3,15e3),Y0="__/auth/iframe",J0="emulator/auth/iframe",X0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Z0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function e_(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?uo(e,J0):`https://${n.config.authDomain}/${Y0}`,s={apiKey:e.apiKey,appName:n.name,v:rs},r=Z0.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${rr(s).slice(1)}`}async function t_(n){const e=await K0(n),t=gt().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:e_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:X0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const c=pt(n,"network-request-failed"),l=gt().setTimeout(()=>{i(c)},Q0.get());function h(){gt().clearTimeout(l),r(s)}s.ping(h).then(h,()=>{i(c)})}))}/**
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
 */const n_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},s_=500,r_=600,i_="_blank",a_="http://localhost";class Ml{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function o_(n,e,t,s=s_,r=r_){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const h={...n_,width:s.toString(),height:r.toString(),top:i,left:c},m=Ue().toLowerCase();t&&(l=Hh(m)?i_:t),$h(m)&&(e=e||a_,h.scrollbars="yes");const f=Object.entries(h).reduce((b,[N,C])=>`${b}${N}=${C},`,"");if(Rx(m)&&l!=="_self")return c_(e||"",l),new Ml(null);const x=window.open(e||"",l,f);$(x,n,"popup-blocked");try{x.focus()}catch{}return new Ml(x)}function c_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const l_="__/auth/handler",u_="emulator/auth/handler",h_=encodeURIComponent("fac");async function Ll(n,e,t,s,r,i){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:rs,eventId:r};if(e instanceof td){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Gg(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,x]of Object.entries({}))c[f]=x}if(e instanceof ar){const f=e.getScopes().filter(x=>x!=="");f.length>0&&(c.scopes=f.join(","))}n.tenantId&&(c.tid=n.tenantId);const l=c;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const h=await n._getAppCheckToken(),m=h?`#${h_}=${encodeURIComponent(h)}`:"";return`${d_(n)}?${rr(l).slice(1)}${m}`}function d_({config:n}){return n.emulator?uo(n,u_):`https://${n.authDomain}/${l_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="webStorageSupport";class m_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=od,this._completeRedirectFn=M0,this._overrideRedirectResult=D0}async _openPopup(e,t,s,r){var c;Rt((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const i=await Ll(e,t,s,Ma(),r);return o_(e,i,go())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Ll(e,t,s,Ma(),r);return g0(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Rt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await t_(e),s=new F0(e);return t.register("authEvent",r=>($(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xa,{type:xa},r=>{var c;const i=(c=r==null?void 0:r[0])==null?void 0:c[xa];i!==void 0&&t(!!i),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=W0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Yh()||Wh()||mo()}}const f_=m_;var Fl="@firebase/auth",Ul="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function y_(n){bt(new at("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:c,authDomain:l}=s.options;$(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const h={apiKey:c,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jh(n)},m=new Ox(s,r,i,h);return zx(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),bt(new at("auth-internal",e=>{const t=is(e.getProvider("auth").getImmediate());return(s=>new p_(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(Fl,Ul,g_(n)),et(Fl,Ul,"esm2020")}/**
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
 */const x_=300,__=Eh("authIdTokenMaxAge")||x_;let Bl=null;const w_=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>__)return;const r=t==null?void 0:t.token;Bl!==r&&(Bl=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function b_(n=co()){const e=Sn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Hx(n,{popupRedirectResolver:f_,persistence:[T0,m0,od]}),s=Eh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const c=w_(i.toString());l0(t,c,()=>c(t.currentUser)),c0(t,l=>c(l))}}const r=bh("auth");return r&&Gx(t,`http://${r}`),t}function v_(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Mx({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=pt("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",v_().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});y_("Browser");var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yt,fd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function g(){}g.prototype=_.prototype,I.F=_.prototype,I.prototype=new g,I.prototype.constructor=I,I.D=function(v,E,w){for(var y=Array(arguments.length-2),q=2;q<arguments.length;q++)y[q-2]=arguments[q];return _.prototype[E].apply(v,y)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,_,g){g||(g=0);const v=Array(16);if(typeof _=="string")for(var E=0;E<16;++E)v[E]=_.charCodeAt(g++)|_.charCodeAt(g++)<<8|_.charCodeAt(g++)<<16|_.charCodeAt(g++)<<24;else for(E=0;E<16;++E)v[E]=_[g++]|_[g++]<<8|_[g++]<<16|_[g++]<<24;_=I.g[0],g=I.g[1],E=I.g[2];let w=I.g[3],y;y=_+(w^g&(E^w))+v[0]+3614090360&4294967295,_=g+(y<<7&4294967295|y>>>25),y=w+(E^_&(g^E))+v[1]+3905402710&4294967295,w=_+(y<<12&4294967295|y>>>20),y=E+(g^w&(_^g))+v[2]+606105819&4294967295,E=w+(y<<17&4294967295|y>>>15),y=g+(_^E&(w^_))+v[3]+3250441966&4294967295,g=E+(y<<22&4294967295|y>>>10),y=_+(w^g&(E^w))+v[4]+4118548399&4294967295,_=g+(y<<7&4294967295|y>>>25),y=w+(E^_&(g^E))+v[5]+1200080426&4294967295,w=_+(y<<12&4294967295|y>>>20),y=E+(g^w&(_^g))+v[6]+2821735955&4294967295,E=w+(y<<17&4294967295|y>>>15),y=g+(_^E&(w^_))+v[7]+4249261313&4294967295,g=E+(y<<22&4294967295|y>>>10),y=_+(w^g&(E^w))+v[8]+1770035416&4294967295,_=g+(y<<7&4294967295|y>>>25),y=w+(E^_&(g^E))+v[9]+2336552879&4294967295,w=_+(y<<12&4294967295|y>>>20),y=E+(g^w&(_^g))+v[10]+4294925233&4294967295,E=w+(y<<17&4294967295|y>>>15),y=g+(_^E&(w^_))+v[11]+2304563134&4294967295,g=E+(y<<22&4294967295|y>>>10),y=_+(w^g&(E^w))+v[12]+1804603682&4294967295,_=g+(y<<7&4294967295|y>>>25),y=w+(E^_&(g^E))+v[13]+4254626195&4294967295,w=_+(y<<12&4294967295|y>>>20),y=E+(g^w&(_^g))+v[14]+2792965006&4294967295,E=w+(y<<17&4294967295|y>>>15),y=g+(_^E&(w^_))+v[15]+1236535329&4294967295,g=E+(y<<22&4294967295|y>>>10),y=_+(E^w&(g^E))+v[1]+4129170786&4294967295,_=g+(y<<5&4294967295|y>>>27),y=w+(g^E&(_^g))+v[6]+3225465664&4294967295,w=_+(y<<9&4294967295|y>>>23),y=E+(_^g&(w^_))+v[11]+643717713&4294967295,E=w+(y<<14&4294967295|y>>>18),y=g+(w^_&(E^w))+v[0]+3921069994&4294967295,g=E+(y<<20&4294967295|y>>>12),y=_+(E^w&(g^E))+v[5]+3593408605&4294967295,_=g+(y<<5&4294967295|y>>>27),y=w+(g^E&(_^g))+v[10]+38016083&4294967295,w=_+(y<<9&4294967295|y>>>23),y=E+(_^g&(w^_))+v[15]+3634488961&4294967295,E=w+(y<<14&4294967295|y>>>18),y=g+(w^_&(E^w))+v[4]+3889429448&4294967295,g=E+(y<<20&4294967295|y>>>12),y=_+(E^w&(g^E))+v[9]+568446438&4294967295,_=g+(y<<5&4294967295|y>>>27),y=w+(g^E&(_^g))+v[14]+3275163606&4294967295,w=_+(y<<9&4294967295|y>>>23),y=E+(_^g&(w^_))+v[3]+4107603335&4294967295,E=w+(y<<14&4294967295|y>>>18),y=g+(w^_&(E^w))+v[8]+1163531501&4294967295,g=E+(y<<20&4294967295|y>>>12),y=_+(E^w&(g^E))+v[13]+2850285829&4294967295,_=g+(y<<5&4294967295|y>>>27),y=w+(g^E&(_^g))+v[2]+4243563512&4294967295,w=_+(y<<9&4294967295|y>>>23),y=E+(_^g&(w^_))+v[7]+1735328473&4294967295,E=w+(y<<14&4294967295|y>>>18),y=g+(w^_&(E^w))+v[12]+2368359562&4294967295,g=E+(y<<20&4294967295|y>>>12),y=_+(g^E^w)+v[5]+4294588738&4294967295,_=g+(y<<4&4294967295|y>>>28),y=w+(_^g^E)+v[8]+2272392833&4294967295,w=_+(y<<11&4294967295|y>>>21),y=E+(w^_^g)+v[11]+1839030562&4294967295,E=w+(y<<16&4294967295|y>>>16),y=g+(E^w^_)+v[14]+4259657740&4294967295,g=E+(y<<23&4294967295|y>>>9),y=_+(g^E^w)+v[1]+2763975236&4294967295,_=g+(y<<4&4294967295|y>>>28),y=w+(_^g^E)+v[4]+1272893353&4294967295,w=_+(y<<11&4294967295|y>>>21),y=E+(w^_^g)+v[7]+4139469664&4294967295,E=w+(y<<16&4294967295|y>>>16),y=g+(E^w^_)+v[10]+3200236656&4294967295,g=E+(y<<23&4294967295|y>>>9),y=_+(g^E^w)+v[13]+681279174&4294967295,_=g+(y<<4&4294967295|y>>>28),y=w+(_^g^E)+v[0]+3936430074&4294967295,w=_+(y<<11&4294967295|y>>>21),y=E+(w^_^g)+v[3]+3572445317&4294967295,E=w+(y<<16&4294967295|y>>>16),y=g+(E^w^_)+v[6]+76029189&4294967295,g=E+(y<<23&4294967295|y>>>9),y=_+(g^E^w)+v[9]+3654602809&4294967295,_=g+(y<<4&4294967295|y>>>28),y=w+(_^g^E)+v[12]+3873151461&4294967295,w=_+(y<<11&4294967295|y>>>21),y=E+(w^_^g)+v[15]+530742520&4294967295,E=w+(y<<16&4294967295|y>>>16),y=g+(E^w^_)+v[2]+3299628645&4294967295,g=E+(y<<23&4294967295|y>>>9),y=_+(E^(g|~w))+v[0]+4096336452&4294967295,_=g+(y<<6&4294967295|y>>>26),y=w+(g^(_|~E))+v[7]+1126891415&4294967295,w=_+(y<<10&4294967295|y>>>22),y=E+(_^(w|~g))+v[14]+2878612391&4294967295,E=w+(y<<15&4294967295|y>>>17),y=g+(w^(E|~_))+v[5]+4237533241&4294967295,g=E+(y<<21&4294967295|y>>>11),y=_+(E^(g|~w))+v[12]+1700485571&4294967295,_=g+(y<<6&4294967295|y>>>26),y=w+(g^(_|~E))+v[3]+2399980690&4294967295,w=_+(y<<10&4294967295|y>>>22),y=E+(_^(w|~g))+v[10]+4293915773&4294967295,E=w+(y<<15&4294967295|y>>>17),y=g+(w^(E|~_))+v[1]+2240044497&4294967295,g=E+(y<<21&4294967295|y>>>11),y=_+(E^(g|~w))+v[8]+1873313359&4294967295,_=g+(y<<6&4294967295|y>>>26),y=w+(g^(_|~E))+v[15]+4264355552&4294967295,w=_+(y<<10&4294967295|y>>>22),y=E+(_^(w|~g))+v[6]+2734768916&4294967295,E=w+(y<<15&4294967295|y>>>17),y=g+(w^(E|~_))+v[13]+1309151649&4294967295,g=E+(y<<21&4294967295|y>>>11),y=_+(E^(g|~w))+v[4]+4149444226&4294967295,_=g+(y<<6&4294967295|y>>>26),y=w+(g^(_|~E))+v[11]+3174756917&4294967295,w=_+(y<<10&4294967295|y>>>22),y=E+(_^(w|~g))+v[2]+718787259&4294967295,E=w+(y<<15&4294967295|y>>>17),y=g+(w^(E|~_))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+w&4294967295}s.prototype.v=function(I,_){_===void 0&&(_=I.length);const g=_-this.blockSize,v=this.C;let E=this.h,w=0;for(;w<_;){if(E==0)for(;w<=g;)r(this,I,w),w+=this.blockSize;if(typeof I=="string"){for(;w<_;)if(v[E++]=I.charCodeAt(w++),E==this.blockSize){r(this,v),E=0;break}}else for(;w<_;)if(v[E++]=I[w++],E==this.blockSize){r(this,v),E=0;break}}this.h=E,this.o+=_},s.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;_=this.o*8;for(var g=I.length-8;g<I.length;++g)I[g]=_&255,_/=256;for(this.v(I),I=Array(16),_=0,g=0;g<4;++g)for(let v=0;v<32;v+=8)I[_++]=this.g[g]>>>v&255;return I};function i(I,_){var g=l;return Object.prototype.hasOwnProperty.call(g,I)?g[I]:g[I]=_(I)}function c(I,_){this.h=_;const g=[];let v=!0;for(let E=I.length-1;E>=0;E--){const w=I[E]|0;v&&w==_||(g[E]=w,v=!1)}this.g=g}var l={};function h(I){return-128<=I&&I<128?i(I,function(_){return new c([_|0],_<0?-1:0)}):new c([I|0],I<0?-1:0)}function m(I){if(isNaN(I)||!isFinite(I))return x;if(I<0)return j(m(-I));const _=[];let g=1;for(let v=0;I>=g;v++)_[v]=I/g|0,g*=4294967296;return new c(_,0)}function f(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return j(f(I.substring(1),_));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=m(Math.pow(_,8));let v=x;for(let w=0;w<I.length;w+=8){var E=Math.min(8,I.length-w);const y=parseInt(I.substring(w,w+E),_);E<8?(E=m(Math.pow(_,E)),v=v.j(E).add(m(y))):(v=v.j(g),v=v.add(m(y)))}return v}var x=h(0),b=h(1),N=h(16777216);n=c.prototype,n.m=function(){if(P(this))return-j(this).m();let I=0,_=1;for(let g=0;g<this.g.length;g++){const v=this.i(g);I+=(v>=0?v:4294967296+v)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(P(this))return"-"+j(this).toString(I);const _=m(Math.pow(I,6));var g=this;let v="";for(;;){const E=Q(g,_).g;g=O(g,E.j(_));let w=((g.g.length>0?g.g[0]:g.h)>>>0).toString(I);if(g=E,C(g))return w+v;for(;w.length<6;)w="0"+w;v=w+v}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(let _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function P(I){return I.h==-1}n.l=function(I){return I=O(this,I),P(I)?-1:C(I)?0:1};function j(I){const _=I.g.length,g=[];for(let v=0;v<_;v++)g[v]=~I.g[v];return new c(g,~I.h).add(b)}n.abs=function(){return P(this)?j(this):this},n.add=function(I){const _=Math.max(this.g.length,I.g.length),g=[];let v=0;for(let E=0;E<=_;E++){let w=v+(this.i(E)&65535)+(I.i(E)&65535),y=(w>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);v=y>>>16,w&=65535,y&=65535,g[E]=y<<16|w}return new c(g,g[g.length-1]&-2147483648?-1:0)};function O(I,_){return I.add(j(_))}n.j=function(I){if(C(this)||C(I))return x;if(P(this))return P(I)?j(this).j(j(I)):j(j(this).j(I));if(P(I))return j(this.j(j(I)));if(this.l(N)<0&&I.l(N)<0)return m(this.m()*I.m());const _=this.g.length+I.g.length,g=[];for(var v=0;v<2*_;v++)g[v]=0;for(v=0;v<this.g.length;v++)for(let E=0;E<I.g.length;E++){const w=this.i(v)>>>16,y=this.i(v)&65535,q=I.i(E)>>>16,J=I.i(E)&65535;g[2*v+2*E]+=y*J,D(g,2*v+2*E),g[2*v+2*E+1]+=w*J,D(g,2*v+2*E+1),g[2*v+2*E+1]+=y*q,D(g,2*v+2*E+1),g[2*v+2*E+2]+=w*q,D(g,2*v+2*E+2)}for(I=0;I<_;I++)g[I]=g[2*I+1]<<16|g[2*I];for(I=_;I<2*_;I++)g[I]=0;return new c(g,0)};function D(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function F(I,_){this.g=I,this.h=_}function Q(I,_){if(C(_))throw Error("division by zero");if(C(I))return new F(x,x);if(P(I))return _=Q(j(I),_),new F(j(_.g),j(_.h));if(P(_))return _=Q(I,j(_)),new F(j(_.g),_.h);if(I.g.length>30){if(P(I)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var g=b,v=_;v.l(I)<=0;)g=ce(g),v=ce(v);var E=ne(g,1),w=ne(v,1);for(v=ne(v,2),g=ne(g,2);!C(v);){var y=w.add(v);y.l(I)<=0&&(E=E.add(g),w=y),v=ne(v,1),g=ne(g,1)}return _=O(I,E.j(_)),new F(E,_)}for(E=x;I.l(_)>=0;){for(g=Math.max(1,Math.floor(I.m()/_.m())),v=Math.ceil(Math.log(g)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),w=m(g),y=w.j(_);P(y)||y.l(I)>0;)g-=v,w=m(g),y=w.j(_);C(w)&&(w=b),E=E.add(w),I=O(I,y)}return new F(E,I)}n.B=function(I){return Q(this,I).h},n.and=function(I){const _=Math.max(this.g.length,I.g.length),g=[];for(let v=0;v<_;v++)g[v]=this.i(v)&I.i(v);return new c(g,this.h&I.h)},n.or=function(I){const _=Math.max(this.g.length,I.g.length),g=[];for(let v=0;v<_;v++)g[v]=this.i(v)|I.i(v);return new c(g,this.h|I.h)},n.xor=function(I){const _=Math.max(this.g.length,I.g.length),g=[];for(let v=0;v<_;v++)g[v]=this.i(v)^I.i(v);return new c(g,this.h^I.h)};function ce(I){const _=I.g.length+1,g=[];for(let v=0;v<_;v++)g[v]=I.i(v)<<1|I.i(v-1)>>>31;return new c(g,I.h)}function ne(I,_){const g=_>>5;_%=32;const v=I.g.length-g,E=[];for(let w=0;w<v;w++)E[w]=_>0?I.i(w+g)>>>_|I.i(w+g+1)<<32-_:I.i(w+g);return new c(E,I.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,fd=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=m,c.fromString=f,Yt=c}).apply(typeof ql<"u"?ql:typeof self<"u"?self:typeof window<"u"?window:{});var Sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pd,Vs,gd,Mr,Ua,yd,xd,_d;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sr=="object"&&Sr];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function r(a,u){if(u)e:{var d=s;a=a.split(".");for(var p=0;p<a.length-1;p++){var T=a[p];if(!(T in d))break e;d=d[T]}a=a[a.length-1],p=d[a],u=u(p),u!=p&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(u){var d=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&d.push([p,u[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},c=this||self;function l(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function h(a,u,d){return a.call.apply(a.bind,arguments)}function m(a,u,d){return m=h,m.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function x(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(p,T,A){for(var V=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)V[Y-2]=arguments[Y];return u.prototype[T].apply(p,V)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function N(a){const u=a.length;if(u>0){const d=Array(u);for(let p=0;p<u;p++)d[p]=a[p];return d}return[]}function C(a,u){for(let p=1;p<arguments.length;p++){const T=arguments[p];var d=typeof T;if(d=d!="object"?d:T?Array.isArray(T)?"array":d:"null",d=="array"||d=="object"&&typeof T.length=="number"){d=a.length||0;const A=T.length||0;a.length=d+A;for(let V=0;V<A;V++)a[d+V]=T[V]}else a.push(T)}}class P{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(a){c.setTimeout(()=>{throw a},0)}function O(){var a=I;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class D{constructor(){this.h=this.g=null}add(u,d){const p=F.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var F=new P(()=>new Q,a=>a.reset());class Q{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,ne=!1,I=new D,_=()=>{const a=Promise.resolve(void 0);ce=()=>{a.then(g)}};function g(){for(var a;a=O();){try{a.h.call(a.g)}catch(d){j(d)}var u=F;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}ne=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var w=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a})();function y(a){return/^[\s\xa0]*$/.test(a)}function q(a,u){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}x(q,E),q.prototype.init=function(a,u){const d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&q.Z.h.call(this)},q.prototype.h=function(){q.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var J="closure_listenable_"+(Math.random()*1e6|0),Be=0;function Pt(a,u,d,p,T){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=T,this.key=++Be,this.da=this.fa=!1}function Ge(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ae(a,u,d){for(const p in a)u.call(d,a[p],p,a)}function Pe(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function Et(a){const u={};for(const d in a)u[d]=a[d];return u}const ve="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ut(a,u){let d,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(d in p)a[d]=p[d];for(let A=0;A<ve.length;A++)d=ve[A],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function ht(a){this.src=a,this.g={},this.h=0}ht.prototype.add=function(a,u,d,p,T){const A=a.toString();a=this.g[A],a||(a=this.g[A]=[],this.h++);const V=ms(a,u,p,T);return V>-1?(u=a[V],d||(u.fa=!1)):(u=new Pt(u,this.src,A,!!p,T),u.fa=d,a.push(u)),u};function ds(a,u){const d=u.type;if(d in a.g){var p=a.g[d],T=Array.prototype.indexOf.call(p,u,void 0),A;(A=T>=0)&&Array.prototype.splice.call(p,T,1),A&&(Ge(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ms(a,u,d,p){for(let T=0;T<a.length;++T){const A=a[T];if(!A.da&&A.listener==u&&A.capture==!!d&&A.ha==p)return T}return-1}var fs="closure_lm_"+(Math.random()*1e6|0),ps={};function U(a,u,d,p,T){if(Array.isArray(u)){for(let A=0;A<u.length;A++)U(a,u[A],d,p,T);return null}return d=Xe(d),a&&a[J]?a.J(u,d,l(p)?!!p.capture:!1,T):H(a,u,d,!1,p,T)}function H(a,u,d,p,T,A){if(!u)throw Error("Invalid event type");const V=l(T)?!!T.capture:!!T;let Y=Ve(a);if(Y||(a[fs]=Y=new ht(a)),d=Y.add(u,d,p,V,A),d.proxy)return d;if(p=se(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)w||(T=V),T===void 0&&(T=!1),a.addEventListener(u.toString(),p,T);else if(a.attachEvent)a.attachEvent(le(u.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function se(){function a(d){return u.call(a.src,a.listener,d)}const u=Te;return a}function ie(a,u,d,p,T){if(Array.isArray(u))for(var A=0;A<u.length;A++)ie(a,u[A],d,p,T);else p=l(p)?!!p.capture:!!p,d=Xe(d),a&&a[J]?(a=a.i,A=String(u).toString(),A in a.g&&(u=a.g[A],d=ms(u,d,p,T),d>-1&&(Ge(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[A],a.h--)))):a&&(a=Ve(a))&&(u=a.g[u.toString()],a=-1,u&&(a=ms(u,d,p,T)),(d=a>-1?u[a]:null)&&De(d))}function De(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[J])ds(u.i,a);else{var d=a.type,p=a.proxy;u.removeEventListener?u.removeEventListener(d,p,a.capture):u.detachEvent?u.detachEvent(le(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=Ve(u))?(ds(d,a),d.h==0&&(d.src=null,u[fs]=null)):Ge(a)}}}function le(a){return a in ps?ps[a]:ps[a]="on"+a}function Te(a,u){if(a.da)a=!0;else{u=new q(u,this);const d=a.listener,p=a.ha||a.src;a.fa&&De(a),a=d.call(p,u)}return a}function Ve(a){return a=a[fs],a instanceof ht?a:null}var un="__closure_events_fn_"+(Math.random()*1e9>>>0);function Xe(a){return typeof a=="function"?a:(a[un]||(a[un]=function(u){return a.handleEvent(u)}),a[un])}function Oe(){v.call(this),this.i=new ht(this),this.M=this,this.G=null}x(Oe,v),Oe.prototype[J]=!0,Oe.prototype.removeEventListener=function(a,u,d,p){ie(this,a,u,d,p)};function qe(a,u){var d,p=a.G;if(p)for(d=[];p;p=p.G)d.push(p);if(a=a.M,p=u.type||u,typeof u=="string")u=new E(u,a);else if(u instanceof E)u.target=u.target||a;else{var T=u;u=new E(p,a),ut(u,T)}T=!0;let A,V;if(d)for(V=d.length-1;V>=0;V--)A=u.g=d[V],T=mr(A,p,!0,u)&&T;if(A=u.g=a,T=mr(A,p,!0,u)&&T,T=mr(A,p,!1,u)&&T,d)for(V=0;V<d.length;V++)A=u.g=d[V],T=mr(A,p,!1,u)&&T}Oe.prototype.N=function(){if(Oe.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let p=0;p<d.length;p++)Ge(d[p]);delete a.g[u],a.h--}}this.G=null},Oe.prototype.J=function(a,u,d,p){return this.i.add(String(a),u,!1,d,p)},Oe.prototype.K=function(a,u,d,p){return this.i.add(String(a),u,!0,d,p)};function mr(a,u,d,p){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let T=!0;for(let A=0;A<u.length;++A){const V=u[A];if(V&&!V.da&&V.capture==d){const Y=V.listener,Ee=V.ha||V.src;V.fa&&ds(a.i,V),T=Y.call(Ee,p)!==!1&&T}}return T&&!p.defaultPrevented}function wf(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:c.setTimeout(a,u||0)}function rc(a){a.g=wf(()=>{a.g=null,a.i&&(a.i=!1,rc(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class bf extends v{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:rc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(a){v.call(this),this.h=a,this.g={}}x(gs,v);var ic=[];function ac(a){ae(a.g,function(u,d){this.g.hasOwnProperty(d)&&De(u)},a),a.g={}}gs.prototype.N=function(){gs.Z.N.call(this),ac(this)},gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ki=c.JSON.stringify,vf=c.JSON.parse,Ef=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function oc(){}function cc(){}var ys={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Qi(){E.call(this,"d")}x(Qi,E);function Yi(){E.call(this,"c")}x(Yi,E);var hn={},lc=null;function fr(){return lc=lc||new Oe}hn.Ia="serverreachability";function uc(a){E.call(this,hn.Ia,a)}x(uc,E);function xs(a){const u=fr();qe(u,new uc(u))}hn.STAT_EVENT="statevent";function hc(a,u){E.call(this,hn.STAT_EVENT,a),this.stat=u}x(hc,E);function $e(a){const u=fr();qe(u,new hc(u,a))}hn.Ja="timingevent";function dc(a,u){E.call(this,hn.Ja,a),this.size=u}x(dc,E);function _s(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function ws(){this.g=!0}ws.prototype.ua=function(){this.g=!1};function If(a,u,d,p,T,A){a.info(function(){if(a.g)if(A){var V="",Y=A.split("&");for(let oe=0;oe<Y.length;oe++){var Ee=Y[oe].split("=");if(Ee.length>1){const Ne=Ee[0];Ee=Ee[1];const mt=Ne.split("_");V=mt.length>=2&&mt[1]=="type"?V+(Ne+"="+Ee+"&"):V+(Ne+"=redacted&")}}}else V=null;else V=A;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+u+`
`+d+`
`+V})}function Tf(a,u,d,p,T,A,V){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+u+`
`+d+`
`+A+" "+V})}function Dn(a,u,d,p){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Af(a,d)+(p?" "+p:"")})}function Nf(a,u){a.info(function(){return"TIMEOUT: "+u})}ws.prototype.info=function(){};function Af(a,u){if(!a.g)return u;if(!u)return null;try{const A=JSON.parse(u);if(A){for(a=0;a<A.length;a++)if(Array.isArray(A[a])){var d=A[a];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var T=p[0];if(T!="noop"&&T!="stop"&&T!="close")for(let V=1;V<p.length;V++)p[V]=""}}}}return Ki(A)}catch{return u}}var pr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},mc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},fc;function Ji(){}x(Ji,oc),Ji.prototype.g=function(){return new XMLHttpRequest},fc=new Ji;function bs(a){return encodeURIComponent(String(a))}function Sf(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function Dt(a,u,d,p){this.j=a,this.i=u,this.l=d,this.S=p||1,this.V=new gs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new pc}function pc(){this.i=null,this.g="",this.h=!1}var gc={},Xi={};function Zi(a,u,d){a.M=1,a.A=yr(dt(u)),a.u=d,a.R=!0,yc(a,null)}function yc(a,u){a.F=Date.now(),gr(a),a.B=dt(a.A);var d=a.B,p=a.S;Array.isArray(p)||(p=[String(p)]),Rc(d.i,"t",p),a.C=0,d=a.j.L,a.h=new pc,a.g=Kc(a.j,d?u:null,!a.u),a.P>0&&(a.O=new bf(m(a.Y,a,a.g),a.P)),u=a.V,d=a.g,p=a.ba;var T="readystatechange";Array.isArray(T)||(T&&(ic[0]=T.toString()),T=ic);for(let A=0;A<T.length;A++){const V=U(d,T[A],p||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=a.J?Et(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),xs(),If(a.i,a.v,a.B,a.l,a.S,a.u)}Dt.prototype.ba=function(a){a=a.target;const u=this.O;u&&Mt(a)==3?u.j():this.Y(a)},Dt.prototype.Y=function(a){try{if(a==this.g)e:{const Y=Mt(this.g),Ee=this.g.ya(),oe=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||Mc(this.g)))){this.K||Y!=4||Ee==7||(Ee==8||oe<=0?xs(3):xs(2)),ea(this);var u=this.g.ca();this.X=u;var d=kf(this);if(this.o=u==200,Tf(this.i,this.v,this.B,this.l,this.S,Y,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,T=this.g;if((p=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(p)){var A=p;break t}}A=null}if(a=A)Dn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ta(this,a);else{this.o=!1,this.m=3,$e(12),dn(this),vs(this);break e}}if(this.R){a=!0;let Ne;for(;!this.K&&this.C<d.length;)if(Ne=Rf(this,d),Ne==Xi){Y==4&&(this.m=4,$e(14),a=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==gc){this.m=4,$e(15),Dn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Dn(this.i,this.l,Ne,null),ta(this,Ne);if(xc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||d.length!=0||this.h.h||(this.m=1,$e(16),a=!1),this.o=this.o&&a,!a)Dn(this.i,this.l,d,"[Invalid Chunked Response]"),dn(this),vs(this);else if(d.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),la(V),V.P=!0,$e(11))}}else Dn(this.i,this.l,d,null),ta(this,d);Y==4&&dn(this),this.o&&!this.K&&(Y==4?Wc(this.j,this):(this.o=!1,gr(this)))}else Wf(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,$e(12)):(this.m=0,$e(13)),dn(this),vs(this)}}}catch{}finally{}};function kf(a){if(!xc(a))return a.g.la();const u=Mc(a.g);if(u==="")return"";let d="";const p=u.length,T=Mt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return dn(a),vs(a),"";a.h.i=new c.TextDecoder}for(let A=0;A<p;A++)a.h.h=!0,d+=a.h.i.decode(u[A],{stream:!(T&&A==p-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function xc(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Rf(a,u){var d=a.C,p=u.indexOf(`
`,d);return p==-1?Xi:(d=Number(u.substring(d,p)),isNaN(d)?gc:(p+=1,p+d>u.length?Xi:(u=u.slice(p,p+d),a.C=p+d,u)))}Dt.prototype.cancel=function(){this.K=!0,dn(this)};function gr(a){a.T=Date.now()+a.H,_c(a,a.H)}function _c(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=_s(m(a.aa,a),u)}function ea(a){a.D&&(c.clearTimeout(a.D),a.D=null)}Dt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Nf(this.i,this.B),this.M!=2&&(xs(),$e(17)),dn(this),this.m=2,vs(this)):_c(this,this.T-a)};function vs(a){a.j.I==0||a.K||Wc(a.j,a)}function dn(a){ea(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,ac(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function ta(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||na(d.h,a))){if(!a.L&&na(d.h,a)&&d.I==3){try{var p=d.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)vr(d),wr(d);else break e;ca(d),$e(18)}}else d.xa=T[1],0<d.xa-d.K&&T[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=_s(m(d.Va,d),6e3));vc(d.h)<=1&&d.ta&&(d.ta=void 0)}else fn(d,11)}else if((a.L||d.g==a)&&vr(d),!y(u))for(T=d.Ba.g.parse(u),u=0;u<T.length;u++){let oe=T[u];const Ne=oe[0];if(!(Ne<=d.K))if(d.K=Ne,oe=oe[1],d.I==2)if(oe[0]=="c"){d.M=oe[1],d.ba=oe[2];const mt=oe[3];mt!=null&&(d.ka=mt,d.j.info("VER="+d.ka));const pn=oe[4];pn!=null&&(d.za=pn,d.j.info("SVER="+d.za));const Lt=oe[5];Lt!=null&&typeof Lt=="number"&&Lt>0&&(p=1.5*Lt,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ft=a.g;if(Ft){const Ir=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ir){var A=p.h;A.g||Ir.indexOf("spdy")==-1&&Ir.indexOf("quic")==-1&&Ir.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(sa(A,A.h),A.h=null))}if(p.G){const ua=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;ua&&(p.wa=ua,he(p.J,p.G,ua))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var V=a;if(p.na=Gc(p,p.L?p.ba:null,p.W),V.L){Ec(p.h,V);var Y=V,Ee=p.O;Ee&&(Y.H=Ee),Y.D&&(ea(Y),gr(Y)),p.g=V}else qc(p);d.i.length>0&&br(d)}else oe[0]!="stop"&&oe[0]!="close"||fn(d,7);else d.I==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?fn(d,7):oa(d):oe[0]!="noop"&&d.l&&d.l.qa(oe),d.A=0)}}xs(4)}catch{}}var Cf=class{constructor(a,u){this.g=a,this.map=u}};function wc(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function bc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vc(a){return a.h?1:a.g?a.g.size:0}function na(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function sa(a,u){a.g?a.g.add(u):a.h=u}function Ec(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}wc.prototype.cancel=function(){if(this.i=Ic(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ic(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return N(a.i)}var Tc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jf(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const p=a[d].indexOf("=");let T,A=null;p>=0?(T=a[d].substring(0,p),A=a[d].substring(p+1)):T=a[d],u(T,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Vt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Vt?(this.l=a.l,Es(this,a.j),this.o=a.o,this.g=a.g,Is(this,a.u),this.h=a.h,ra(this,Cc(a.i)),this.m=a.m):a&&(u=String(a).match(Tc))?(this.l=!1,Es(this,u[1]||"",!0),this.o=Ts(u[2]||""),this.g=Ts(u[3]||"",!0),Is(this,u[4]),this.h=Ts(u[5]||"",!0),ra(this,u[6]||"",!0),this.m=Ts(u[7]||"")):(this.l=!1,this.i=new As(null,this.l))}Vt.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Ns(u,Nc,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ns(u,Nc,!0),"@"),a.push(bs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ns(d,d.charAt(0)=="/"?Vf:Df,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ns(d,Mf)),a.join("")},Vt.prototype.resolve=function(a){const u=dt(this);let d=!!a.j;d?Es(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var p=a.h;if(d)Is(u,a.u);else if(d=!!a.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var T=u.h.lastIndexOf("/");T!=-1&&(p=u.h.slice(0,T+1)+p)}if(T=p,T==".."||T==".")p="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){p=T.lastIndexOf("/",0)==0,T=T.split("/");const A=[];for(let V=0;V<T.length;){const Y=T[V++];Y=="."?p&&V==T.length&&A.push(""):Y==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),p&&V==T.length&&A.push("")):(A.push(Y),p=!0)}p=A.join("/")}else p=T}return d?u.h=p:d=a.i.toString()!=="",d?ra(u,Cc(a.i)):d=!!a.m,d&&(u.m=a.m),u};function dt(a){return new Vt(a)}function Es(a,u,d){a.j=d?Ts(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Is(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function ra(a,u,d){u instanceof As?(a.i=u,Lf(a.i,a.l)):(d||(u=Ns(u,Of)),a.i=new As(u,a.l))}function he(a,u,d){a.i.set(u,d)}function yr(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ts(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ns(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Pf),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Pf(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Nc=/[#\/\?@]/g,Df=/[#\?:]/g,Vf=/[#\?]/g,Of=/[#\?@]/g,Mf=/#/g;function As(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function mn(a){a.g||(a.g=new Map,a.h=0,a.i&&jf(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=As.prototype,n.add=function(a,u){mn(this),this.i=null,a=Vn(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Ac(a,u){mn(a),u=Vn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Sc(a,u){return mn(a),u=Vn(a,u),a.g.has(u)}n.forEach=function(a,u){mn(this),this.g.forEach(function(d,p){d.forEach(function(T){a.call(u,T,p,this)},this)},this)};function kc(a,u){mn(a);let d=[];if(typeof u=="string")Sc(a,u)&&(d=d.concat(a.g.get(Vn(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}n.set=function(a,u){return mn(this),this.i=null,a=Vn(this,a),Sc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=kc(this,a),a.length>0?String(a[0]):u):u};function Rc(a,u,d){Ac(a,u),d.length>0&&(a.i=null,a.g.set(Vn(a,u),N(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var d=u[p];const T=bs(d);d=kc(this,d);for(let A=0;A<d.length;A++){let V=T;d[A]!==""&&(V+="="+bs(d[A])),a.push(V)}}return this.i=a.join("&")};function Cc(a){const u=new As;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function Vn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Lf(a,u){u&&!a.j&&(mn(a),a.i=null,a.g.forEach(function(d,p){const T=p.toLowerCase();p!=T&&(Ac(this,p),Rc(this,T,d))},a)),a.j=u}function Ff(a,u){const d=new ws;if(c.Image){const p=new Image;p.onload=f(Ot,d,"TestLoadImage: loaded",!0,u,p),p.onerror=f(Ot,d,"TestLoadImage: error",!1,u,p),p.onabort=f(Ot,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=f(Ot,d,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else u(!1)}function Uf(a,u){const d=new ws,p=new AbortController,T=setTimeout(()=>{p.abort(),Ot(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:p.signal}).then(A=>{clearTimeout(T),A.ok?Ot(d,"TestPingServer: ok",!0,u):Ot(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(T),Ot(d,"TestPingServer: error",!1,u)})}function Ot(a,u,d,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(d)}catch{}}function Bf(){this.g=new Ef}function ia(a){this.i=a.Sb||null,this.h=a.ab||!1}x(ia,oc),ia.prototype.g=function(){return new xr(this.i,this.h)};function xr(a,u){Oe.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}x(xr,Oe),n=xr.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,ks(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||c).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ks(this)),this.g&&(this.readyState=3,ks(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;jc(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function jc(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ss(this):ks(this),this.readyState==3&&jc(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Ss(this))},n.Na=function(a){this.g&&(this.response=a,Ss(this))},n.ga=function(){this.g&&Ss(this)};function Ss(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ks(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function ks(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Pc(a){let u="";return ae(a,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function aa(a,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Pc(d),typeof a=="string"?d!=null&&bs(d):he(a,u,d))}function pe(a){Oe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}x(pe,Oe);var qf=/^https?$/i,$f=["POST","PUT"];n=pe.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():fc.g(),this.g.onreadystatechange=b(m(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(A){Dc(this,A);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)d.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const A of p.keys())d.set(A,p.get(A));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(A=>A.toLowerCase()=="content-type"),T=c.FormData&&a instanceof c.FormData,!(Array.prototype.indexOf.call($f,u,void 0)>=0)||p||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,V]of d)this.g.setRequestHeader(A,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(A){Dc(this,A)}};function Dc(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,Vc(a),_r(a)}function Vc(a){a.A||(a.A=!0,qe(a,"complete"),qe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,qe(this,"complete"),qe(this,"abort"),_r(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_r(this,!0)),pe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Oc(this):this.Xa())},n.Xa=function(){Oc(this)};function Oc(a){if(a.h&&typeof i<"u"){if(a.v&&Mt(a)==4)setTimeout(a.Ca.bind(a),0);else if(qe(a,"readystatechange"),Mt(a)==4){a.h=!1;try{const A=a.ca();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=A===0){let V=String(a.D).match(Tc)[1]||null;!V&&c.self&&c.self.location&&(V=c.self.location.protocol.slice(0,-1)),p=!qf.test(V?V.toLowerCase():"")}d=p}if(d)qe(a,"complete"),qe(a,"success");else{a.o=6;try{var T=Mt(a)>2?a.g.statusText:""}catch{T=""}a.l=T+" ["+a.ca()+"]",Vc(a)}}finally{_r(a)}}}}function _r(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||qe(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Mt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Mt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),vf(u)}};function Mc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Wf(a){const u={};a=(a.g&&Mt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(y(a[p]))continue;var d=Sf(a[p]);const T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const A=u[T]||[];u[T]=A,A.push(d)}Pe(u,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rs(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Lc(a){this.za=0,this.i=[],this.j=new ws,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Rs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Rs("baseRetryDelayMs",5e3,a),this.Za=Rs("retryDelaySeedMs",1e4,a),this.Ta=Rs("forwardChannelMaxRetries",2,a),this.va=Rs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new wc(a&&a.concurrentRequestLimit),this.Ba=new Bf,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Lc.prototype,n.ka=8,n.I=1,n.connect=function(a,u,d,p){$e(0),this.W=a,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=Gc(this,null,this.W),br(this)};function oa(a){if(Fc(a),a.I==3){var u=a.V++,d=dt(a.J);if(he(d,"SID",a.M),he(d,"RID",u),he(d,"TYPE","terminate"),Cs(a,d),u=new Dt(a,a.j,u),u.M=2,u.A=yr(dt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.A,d=!0),d||(u.g=Kc(u.j,null),u.g.ea(u.A)),u.F=Date.now(),gr(u)}zc(a)}function wr(a){a.g&&(la(a),a.g.cancel(),a.g=null)}function Fc(a){wr(a),a.v&&(c.clearTimeout(a.v),a.v=null),vr(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&c.clearTimeout(a.m),a.m=null)}function br(a){if(!bc(a.h)&&!a.m){a.m=!0;var u=a.Ea;ce||_(),ne||(ce(),ne=!0),I.add(u,a),a.D=0}}function Hf(a,u){return vc(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=_s(m(a.Ea,a,u),Hc(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const T=new Dt(this,this.j,a);let A=this.o;if(this.U&&(A?(A=Et(A),ut(A,this.U)):A=this.U),this.u!==null||this.R||(T.J=A,A=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Bc(this,T,u),d=dt(this.J),he(d,"RID",a),he(d,"CVER",22),this.G&&he(d,"X-HTTP-Session-Id",this.G),Cs(this,d),A&&(this.R?u="headers="+bs(Pc(A))+"&"+u:this.u&&aa(d,this.u,A)),sa(this.h,T),this.Ra&&he(d,"TYPE","init"),this.S?(he(d,"$req",u),he(d,"SID","null"),T.U=!0,Zi(T,d,null)):Zi(T,d,u),this.I=2}}else this.I==3&&(a?Uc(this,a):this.i.length==0||bc(this.h)||Uc(this))};function Uc(a,u){var d;u?d=u.l:d=a.V++;const p=dt(a.J);he(p,"SID",a.M),he(p,"RID",d),he(p,"AID",a.K),Cs(a,p),a.u&&a.o&&aa(p,a.u,a.o),d=new Dt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Bc(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),sa(a.h,d),Zi(d,p,u)}function Cs(a,u){a.H&&ae(a.H,function(d,p){he(u,p,d)}),a.l&&ae({},function(d,p){he(u,p,d)})}function Bc(a,u,d){d=Math.min(a.i.length,d);const p=a.l?m(a.l.Ka,a.l,a):null;e:{var T=a.i;let Y=-1;for(;;){const Ee=["count="+d];Y==-1?d>0?(Y=T[0].g,Ee.push("ofs="+Y)):Y=0:Ee.push("ofs="+Y);let oe=!0;for(let Ne=0;Ne<d;Ne++){var A=T[Ne].g;const mt=T[Ne].map;if(A-=Y,A<0)Y=Math.max(0,T[Ne].g-100),oe=!1;else try{A="req"+A+"_"||"";try{var V=mt instanceof Map?mt:Object.entries(mt);for(const[pn,Lt]of V){let Ft=Lt;l(Lt)&&(Ft=Ki(Lt)),Ee.push(A+pn+"="+encodeURIComponent(Ft))}}catch(pn){throw Ee.push(A+"type="+encodeURIComponent("_badmap")),pn}}catch{p&&p(mt)}}if(oe){V=Ee.join("&");break e}}V=void 0}return a=a.i.splice(0,d),u.G=a,V}function qc(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;ce||_(),ne||(ce(),ne=!0),I.add(u,a),a.A=0}}function ca(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=_s(m(a.Da,a),Hc(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,$c(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=_s(m(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,$e(10),wr(this),$c(this))};function la(a){a.B!=null&&(c.clearTimeout(a.B),a.B=null)}function $c(a){a.g=new Dt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=dt(a.na);he(u,"RID","rpc"),he(u,"SID",a.M),he(u,"AID",a.K),he(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(u,"TO",a.ia),he(u,"TYPE","xmlhttp"),Cs(a,u),a.u&&a.o&&aa(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=yr(dt(u)),d.u=null,d.R=!0,yc(d,a)}n.Va=function(){this.C!=null&&(this.C=null,wr(this),ca(this),$e(19))};function vr(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Wc(a,u){var d=null;if(a.g==u){vr(a),la(a),a.g=null;var p=2}else if(na(a.h,u))d=u.G,Ec(a.h,u),p=1;else return;if(a.I!=0){if(u.o)if(p==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var T=a.D;p=fr(),qe(p,new dc(p,d)),br(a)}else qc(a);else if(T=u.m,T==3||T==0&&u.X>0||!(p==1&&Hf(a,u)||p==2&&ca(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),T){case 1:fn(a,5);break;case 4:fn(a,10);break;case 3:fn(a,6);break;default:fn(a,2)}}}function Hc(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function fn(a,u){if(a.j.info("Error code "+u),u==2){var d=m(a.bb,a),p=a.Ua;const T=!p;p=new Vt(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Es(p,"https"),yr(p),T?Ff(p.toString(),d):Uf(p.toString(),d)}else $e(2);a.I=0,a.l&&a.l.pa(u),zc(a),Fc(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function zc(a){if(a.I=0,a.ja=[],a.l){const u=Ic(a.h);(u.length!=0||a.i.length!=0)&&(C(a.ja,u),C(a.ja,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.oa()}}function Gc(a,u,d){var p=d instanceof Vt?dt(d):new Vt(d);if(p.g!="")u&&(p.g=u+"."+p.g),Is(p,p.u);else{var T=c.location;p=T.protocol,u=u?u+"."+T.hostname:T.hostname,T=+T.port;const A=new Vt(null);p&&Es(A,p),u&&(A.g=u),T&&Is(A,T),d&&(A.h=d),p=A}return d=a.G,u=a.wa,d&&u&&he(p,d,u),he(p,"VER",a.ka),Cs(a,p),p}function Kc(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new pe(new ia({ab:d})):new pe(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qc(){}n=Qc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Er(){}Er.prototype.g=function(a,u){return new Qe(a,u)};function Qe(a,u){Oe.call(this),this.g=new Lc(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!y(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!y(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new On(this)}x(Qe,Oe),Qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){oa(this.g)},Qe.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Ki(a),a=d);u.i.push(new Cf(u.Ya++,a)),u.I==3&&br(u)},Qe.prototype.N=function(){this.g.l=null,delete this.j,oa(this.g),delete this.g,Qe.Z.N.call(this)};function Yc(a){Qi.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}x(Yc,Qi);function Jc(){Yi.call(this),this.status=1}x(Jc,Yi);function On(a){this.g=a}x(On,Qc),On.prototype.ra=function(){qe(this.g,"a")},On.prototype.qa=function(a){qe(this.g,new Yc(a))},On.prototype.pa=function(a){qe(this.g,new Jc)},On.prototype.oa=function(){qe(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,_d=function(){return new Er},xd=function(){return fr()},yd=hn,Ua={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},pr.NO_ERROR=0,pr.TIMEOUT=8,pr.HTTP_ERROR=6,Mr=pr,mc.COMPLETE="complete",gd=mc,cc.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",Oe.prototype.listen=Oe.prototype.J,Vs=cc,pe.prototype.listenOnce=pe.prototype.K,pe.prototype.getLastError=pe.prototype.Ha,pe.prototype.getLastErrorCode=pe.prototype.ya,pe.prototype.getStatus=pe.prototype.ca,pe.prototype.getResponseJson=pe.prototype.La,pe.prototype.getResponseText=pe.prototype.la,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Fa,pd=pe}).apply(typeof Sr<"u"?Sr:typeof self<"u"?self:typeof window<"u"?window:{});const $l="@firebase/firestore",Wl="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new wi("@firebase/firestore");function Mn(){return vn.logLevel}function L(n,...e){if(vn.logLevel<=X.DEBUG){const t=e.map(xo);vn.debug(`Firestore (${os}): ${n}`,...t)}}function Ct(n,...e){if(vn.logLevel<=X.ERROR){const t=e.map(xo);vn.error(`Firestore (${os}): ${n}`,...t)}}function Jn(n,...e){if(vn.logLevel<=X.WARN){const t=e.map(xo);vn.warn(`Firestore (${os}): ${n}`,...t)}}function xo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function W(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,wd(n,s,t)}function wd(n,e,t){let s=`FIRESTORE (${os}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ct(s),new Error(s)}function re(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||wd(e,r,s)}function G(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class E_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Le.UNAUTHENTICATED)))}shutdown(){}}class I_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class T_{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0,42304);let s=this.i;const r=h=>this.i!==s?(s=this.i,t(h)):Promise.resolve();let i=new At;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new At,e.enqueueRetryable((()=>r(this.currentUser)))};const c=()=>{const h=i;e.enqueueRetryable((async()=>{await h.promise,await r(this.currentUser)}))},l=h=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new At)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string",31837,{l:s}),new bd(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string",2055,{h:e}),new Le(e)}}class N_{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class A_{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new N_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Le.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class S_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){re(this.o===void 0,3512);const s=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const c=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Hl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Hl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=k_(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function Z(n,e){return n<e?-1:n>e?1:0}function Ba(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return _a(r)===_a(i)?Z(r,i):_a(r)?1:-1}return Z(n.length,e.length)}const R_=55296,C_=57343;function _a(n){const e=n.charCodeAt(0);return e>=R_&&e<=C_}function Xn(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="__name__";class ft{constructor(e,t,s){t===void 0?t=0:t>e.length&&W(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&W(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ft.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ft?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=ft.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return Z(e.length,t.length)}static compareSegments(e,t){const s=ft.isNumericId(e),r=ft.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?ft.extractNumericId(e).compare(ft.extractNumericId(t)):Ba(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yt.fromString(e.substring(4,e.length-2))}}class ue extends ft{construct(e,t,s){return new ue(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new ue(t)}static emptyPath(){return new ue([])}}const j_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends ft{construct(e,t,s){return new Re(e,t,s)}static isValidIdentifier(e){return j_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zl}static keyField(){return new Re([zl])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new M(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new M(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=h,r+=2}else l==="`"?(c=!c,r++):l!=="."||c?(s+=l,r++):(i(),r++)}if(i(),c)throw new M(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(t)}static emptyPath(){return new Re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ue.fromString(e))}static fromName(e){return new B(ue.fromString(e).popFirst(5))}static empty(){return new B(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ue(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(n,e,t){if(!t)throw new M(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function P_(n,e,t,s){if(e===!0&&s===!0)throw new M(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gl(n){if(!B.isDocumentKey(n))throw new M(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Kl(n){if(B.isDocumentKey(n))throw new M(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ed(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ni(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function En(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ni(n);throw new M(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function we(n,e){const t={typeString:n};return e&&(t.value=e),t}function cr(n,e){if(!Ed(n))throw new M(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(r&&typeof c!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&c!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new M(S.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=-62135596800,Yl=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Yl);return new de(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ql)throw new M(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yl}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cr(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ql;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:we("string",de._jsonSchemaVersion),seconds:we("number"),nanoseconds:we("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Qs=-1;function D_(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=z.fromTimestamp(s===1e9?new de(t+1,0):new de(t,s));return new Zt(r,B.empty(),e)}function V_(n){return new Zt(n.readTime,n.key,Qs)}class Zt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Zt(z.min(),B.empty(),Qs)}static max(){return new Zt(z.max(),B.empty(),Qs)}}function O_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class L_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==M_)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,s)=>{t(e)}))}static reject(e){return new R(((t,s)=>{s(e)}))}static waitFor(e){return new R(((t,s)=>{let r=0,i=0,c=!1;e.forEach((l=>{++r,l.next((()=>{++i,c&&i===r&&t()}),(h=>s(h)))})),c=!0,i===r&&t()}))}static or(e){let t=R.resolve(!1);for(const s of e)t=t.next((r=>r?R.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new R(((s,r)=>{const i=e.length,c=new Array(i);let l=0;for(let h=0;h<i;h++){const m=h;t(e[m]).next((f=>{c[m]=f,++l,l===i&&s(c)}),(f=>r(f)))}}))}static doWhile(e,t){return new R(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function F_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ls(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const wo=-1;function Si(n){return n==null}function ri(n){return n===0&&1/n==-1/0}function U_(n){return typeof n=="number"&&Number.isInteger(n)&&!ri(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="";function B_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Jl(e)),e=q_(n.get(t),e);return Jl(e)}function q_(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Id:t+="";break;default:t+=i}}return t}function Jl(n){return n+Id+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ln(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Td(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t){this.comparator=e,this.root=t||ke.EMPTY}insert(e,t){return new fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kr(this.root,e,this.comparator,!1)}getReverseIterator(){return new kr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kr(this.root,e,this.comparator,!0)}}class kr{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??ke.RED,this.left=r??ke.EMPTY,this.right=i??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new ke(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ke.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new ke(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.comparator=e,this.data=new fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zl(this.data.getIterator())}getIteratorFrom(e){return new Zl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class Zl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new rt([])}unionWith(e){let t=new Ie(Re.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new rt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xn(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Nd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Nd("Invalid base64 string: "+i):i}})(e);return new je(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let c=0;c<r.length;++c)i+=String.fromCharCode(r[c]);return i})(e);return new je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const $_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function en(n){if(re(!!n,39018),typeof n=="string"){let e=0;const t=$_.exec(n);if(re(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function tn(n){return typeof n=="string"?je.fromBase64String(n):je.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="server_timestamp",Sd="__type__",kd="__previous_value__",Rd="__local_write_time__";function bo(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Sd])==null?void 0:s.stringValue)===Ad}function ki(n){const e=n.mapValue.fields[kd];return bo(e)?ki(e):e}function Ys(n){const e=en(n.mapValue.fields[Rd].timestampValue);return new de(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,t,s,r,i,c,l,h,m,f){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=c,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=m,this.isUsingEmulator=f}}const ii="(default)";class Js{constructor(e,t){this.projectId=e,this.database=t||ii}static empty(){return new Js("","")}get isDefaultDatabase(){return this.database===ii}isEqual(e){return e instanceof Js&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="__type__",H_="__max__",Rr={mapValue:{}},jd="__vector__",ai="value";function nn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bo(n)?4:G_(n)?9007199254740991:z_(n)?10:11:W(28295,{value:n})}function vt(n,e){if(n===e)return!0;const t=nn(n);if(t!==nn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ys(n).isEqual(Ys(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const c=en(r.timestampValue),l=en(i.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,i){return tn(r.bytesValue).isEqual(tn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,i){return ge(r.geoPointValue.latitude)===ge(i.geoPointValue.latitude)&&ge(r.geoPointValue.longitude)===ge(i.geoPointValue.longitude)})(n,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return ge(r.integerValue)===ge(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const c=ge(r.doubleValue),l=ge(i.doubleValue);return c===l?ri(c)===ri(l):isNaN(c)&&isNaN(l)}return!1})(n,e);case 9:return Xn(n.arrayValue.values||[],e.arrayValue.values||[],vt);case 10:case 11:return(function(r,i){const c=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Xl(c)!==Xl(l))return!1;for(const h in c)if(c.hasOwnProperty(h)&&(l[h]===void 0||!vt(c[h],l[h])))return!1;return!0})(n,e);default:return W(52216,{left:n})}}function Xs(n,e){return(n.values||[]).find((t=>vt(t,e)))!==void 0}function Zn(n,e){if(n===e)return 0;const t=nn(n),s=nn(e);if(t!==s)return Z(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return(function(i,c){const l=ge(i.integerValue||i.doubleValue),h=ge(c.integerValue||c.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,e);case 3:return eu(n.timestampValue,e.timestampValue);case 4:return eu(Ys(n),Ys(e));case 5:return Ba(n.stringValue,e.stringValue);case 6:return(function(i,c){const l=tn(i),h=tn(c);return l.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(i,c){const l=i.split("/"),h=c.split("/");for(let m=0;m<l.length&&m<h.length;m++){const f=Z(l[m],h[m]);if(f!==0)return f}return Z(l.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,c){const l=Z(ge(i.latitude),ge(c.latitude));return l!==0?l:Z(ge(i.longitude),ge(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return tu(n.arrayValue,e.arrayValue);case 10:return(function(i,c){var b,N,C,P;const l=i.fields||{},h=c.fields||{},m=(b=l[ai])==null?void 0:b.arrayValue,f=(N=h[ai])==null?void 0:N.arrayValue,x=Z(((C=m==null?void 0:m.values)==null?void 0:C.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return x!==0?x:tu(m,f)})(n.mapValue,e.mapValue);case 11:return(function(i,c){if(i===Rr.mapValue&&c===Rr.mapValue)return 0;if(i===Rr.mapValue)return 1;if(c===Rr.mapValue)return-1;const l=i.fields||{},h=Object.keys(l),m=c.fields||{},f=Object.keys(m);h.sort(),f.sort();for(let x=0;x<h.length&&x<f.length;++x){const b=Ba(h[x],f[x]);if(b!==0)return b;const N=Zn(l[h[x]],m[f[x]]);if(N!==0)return N}return Z(h.length,f.length)})(n.mapValue,e.mapValue);default:throw W(23264,{he:t})}}function eu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=en(n),s=en(e),r=Z(t.seconds,s.seconds);return r!==0?r:Z(t.nanos,s.nanos)}function tu(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Zn(t[r],s[r]);if(i)return i}return Z(t.length,s.length)}function es(n){return qa(n)}function qa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=en(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return tn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return B.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=qa(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const c of s)i?i=!1:r+=",",r+=`${c}:${qa(t.fields[c])}`;return r+"}"})(n.mapValue):W(61005,{value:n})}function Lr(n){switch(nn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ki(n);return e?16+Lr(e):16;case 5:return 2*n.stringValue.length;case 6:return tn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Lr(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return ln(s.fields,((i,c)=>{r+=i.length+Lr(c)})),r})(n.mapValue);default:throw W(13486,{value:n})}}function nu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function $a(n){return!!n&&"integerValue"in n}function vo(n){return!!n&&"arrayValue"in n}function su(n){return!!n&&"nullValue"in n}function ru(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fr(n){return!!n&&"mapValue"in n}function z_(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Cd])==null?void 0:s.stringValue)===jd}function Bs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return ln(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Bs(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Bs(n.arrayValue.values[t]);return e}return{...n}}function G_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===H_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.value=e}static empty(){return new Ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Fr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bs(t)}setAll(e){let t=Re.emptyPath(),s={},r=[];e.forEach(((c,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,s,r),s={},r=[],t=l.popLast()}c?s[l.lastSegment()]=Bs(c):r.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Fr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Fr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){ln(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Ye(Bs(this.value))}}function Pd(n){const e=[];return ln(n.fields,((t,s)=>{const r=new Re([t]);if(Fr(s)){const i=Pd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const c of i)e.push(r.child(c))}else e.push(r)})),new rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t,s,r,i,c,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=c,this.documentState=l}static newInvalidDocument(e){return new Fe(e,0,z.min(),z.min(),z.min(),Ye.empty(),0)}static newFoundDocument(e,t,s,r){return new Fe(e,1,t,z.min(),s,r,0)}static newNoDocument(e,t){return new Fe(e,2,t,z.min(),z.min(),Ye.empty(),0)}static newUnknownDocument(e,t){return new Fe(e,3,t,z.min(),z.min(),Ye.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class oi{constructor(e,t){this.position=e,this.inclusive=t}}function iu(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],c=n.position[r];if(i.field.isKeyField()?s=B.comparator(B.fromName(c.referenceValue),t.key):s=Zn(c,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function au(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!vt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Zs{constructor(e,t="asc"){this.field=e,this.dir=t}}function K_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Dd{}class _e extends Dd{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Y_(e,t,s):t==="array-contains"?new Z_(e,s):t==="in"?new ew(e,s):t==="not-in"?new tw(e,s):t==="array-contains-any"?new nw(e,s):new _e(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new J_(e,s):new X_(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Zn(t,this.value)):t!==null&&nn(this.value)===nn(t)&&this.matchesComparison(Zn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ct extends Dd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ct(e,t)}matches(e){return Vd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Vd(n){return n.op==="and"}function Od(n){return Q_(n)&&Vd(n)}function Q_(n){for(const e of n.filters)if(e instanceof ct)return!1;return!0}function Wa(n){if(n instanceof _e)return n.field.canonicalString()+n.op.toString()+es(n.value);if(Od(n))return n.filters.map((e=>Wa(e))).join(",");{const e=n.filters.map((t=>Wa(t))).join(",");return`${n.op}(${e})`}}function Md(n,e){return n instanceof _e?(function(s,r){return r instanceof _e&&s.op===r.op&&s.field.isEqual(r.field)&&vt(s.value,r.value)})(n,e):n instanceof ct?(function(s,r){return r instanceof ct&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,c,l)=>i&&Md(c,r.filters[l])),!0):!1})(n,e):void W(19439)}function Ld(n){return n instanceof _e?(function(t){return`${t.field.canonicalString()} ${t.op} ${es(t.value)}`})(n):n instanceof ct?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ld).join(" ,")+"}"})(n):"Filter"}class Y_ extends _e{constructor(e,t,s){super(e,t,s),this.key=B.fromName(s.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class J_ extends _e{constructor(e,t){super(e,"in",t),this.keys=Fd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class X_ extends _e{constructor(e,t){super(e,"not-in",t),this.keys=Fd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Fd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>B.fromName(s.referenceValue)))}class Z_ extends _e{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return vo(t)&&Xs(t.arrayValue,this.value)}}class ew extends _e{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xs(this.value.arrayValue,t)}}class tw extends _e{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Xs(this.value.arrayValue,t)}}class nw extends _e{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!vo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Xs(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t=null,s=[],r=[],i=null,c=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=c,this.endAt=l,this.Te=null}}function ou(n,e=null,t=[],s=[],r=null,i=null,c=null){return new sw(n,e,t,s,r,i,c)}function Eo(n){const e=G(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Wa(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Si(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>es(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>es(s))).join(",")),e.Te=t}return e.Te}function Io(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!K_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Md(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!au(n.startAt,e.startAt)&&au(n.endAt,e.endAt)}function Ha(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t=null,s=[],r=[],i=null,c="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=c,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function rw(n,e,t,s,r,i,c,l){return new us(n,e,t,s,r,i,c,l)}function To(n){return new us(n)}function cu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ud(n){return n.collectionGroup!==null}function qs(n){const e=G(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let l=new Ie(Re.comparator);return c.filters.forEach((h=>{h.getFlattenedFilters().forEach((m=>{m.isInequality()&&(l=l.add(m.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Zs(i,s))})),t.has(Re.keyField().canonicalString())||e.Ie.push(new Zs(Re.keyField(),s))}return e.Ie}function yt(n){const e=G(n);return e.Ee||(e.Ee=iw(e,qs(n))),e.Ee}function iw(n,e){if(n.limitType==="F")return ou(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Zs(r.field,i)}));const t=n.endAt?new oi(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new oi(n.startAt.position,n.startAt.inclusive):null;return ou(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function za(n,e){const t=n.filters.concat([e]);return new us(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ga(n,e,t){return new us(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ri(n,e){return Io(yt(n),yt(e))&&n.limitType===e.limitType}function Bd(n){return`${Eo(yt(n))}|lt:${n.limitType}`}function Ln(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>Ld(r))).join(", ")}]`),Si(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>es(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>es(r))).join(",")),`Target(${s})`})(yt(n))}; limitType=${n.limitType})`}function Ci(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):B.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of qs(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(c,l,h){const m=iu(c,l,h);return c.inclusive?m<=0:m<0})(s.startAt,qs(s),r)||s.endAt&&!(function(c,l,h){const m=iu(c,l,h);return c.inclusive?m>=0:m>0})(s.endAt,qs(s),r))})(n,e)}function aw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function qd(n){return(e,t)=>{let s=!1;for(const r of qs(n)){const i=ow(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function ow(n,e,t){const s=n.field.isKeyField()?B.comparator(e.key,t.key):(function(i,c,l){const h=c.data.field(i),m=l.data.field(i);return h!==null&&m!==null?Zn(h,m):W(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return W(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ln(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return Td(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=new fe(B.comparator);function jt(){return cw}const $d=new fe(B.comparator);function Os(...n){let e=$d;for(const t of n)e=e.insert(t.key,t);return e}function Wd(n){let e=$d;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function xn(){return $s()}function Hd(){return $s()}function $s(){return new Rn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const lw=new fe(B.comparator),uw=new Ie(B.comparator);function ee(...n){let e=uw;for(const t of n)e=e.add(t);return e}const hw=new Ie(Z);function dw(){return hw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ri(e)?"-0":e}}function zd(n){return{integerValue:""+n}}function mw(n,e){return U_(e)?zd(e):No(n,e)}/**
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
 */class ji{constructor(){this._=void 0}}function fw(n,e,t){return n instanceof er?(function(r,i){const c={fields:{[Sd]:{stringValue:Ad},[Rd]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&bo(i)&&(i=ki(i)),i&&(c.fields[kd]=i),{mapValue:c}})(t,e):n instanceof tr?Kd(n,e):n instanceof nr?Qd(n,e):(function(r,i){const c=Gd(r,i),l=lu(c)+lu(r.Ae);return $a(c)&&$a(r.Ae)?zd(l):No(r.serializer,l)})(n,e)}function pw(n,e,t){return n instanceof tr?Kd(n,e):n instanceof nr?Qd(n,e):t}function Gd(n,e){return n instanceof ci?(function(s){return $a(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class er extends ji{}class tr extends ji{constructor(e){super(),this.elements=e}}function Kd(n,e){const t=Yd(e);for(const s of n.elements)t.some((r=>vt(r,s)))||t.push(s);return{arrayValue:{values:t}}}class nr extends ji{constructor(e){super(),this.elements=e}}function Qd(n,e){let t=Yd(e);for(const s of n.elements)t=t.filter((r=>!vt(r,s)));return{arrayValue:{values:t}}}class ci extends ji{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function lu(n){return ge(n.integerValue||n.doubleValue)}function Yd(n){return vo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,t){this.field=e,this.transform=t}}function yw(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof tr&&r instanceof tr||s instanceof nr&&r instanceof nr?Xn(s.elements,r.elements,vt):s instanceof ci&&r instanceof ci?vt(s.Ae,r.Ae):s instanceof er&&r instanceof er})(n.transform,e.transform)}class xw{constructor(e,t){this.version=e,this.transformResults=t}}class St{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new St}static exists(e){return new St(void 0,e)}static updateTime(e){return new St(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ur(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Pi{}function Jd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Zd(n.key,St.none()):new Di(n.key,n.data,St.none());{const t=n.data,s=Ye.empty();let r=new Ie(Re.comparator);for(let i of e.fields)if(!r.has(i)){let c=t.field(i);c===null&&i.length>1&&(i=i.popLast(),c=t.field(i)),c===null?s.delete(i):s.set(i,c),r=r.add(i)}return new Cn(n.key,s,new rt(r.toArray()),St.none())}}function _w(n,e,t){n instanceof Di?(function(r,i,c){const l=r.value.clone(),h=hu(r.fieldTransforms,i,c.transformResults);l.setAll(h),i.convertToFoundDocument(c.version,l).setHasCommittedMutations()})(n,e,t):n instanceof Cn?(function(r,i,c){if(!Ur(r.precondition,i))return void i.convertToUnknownDocument(c.version);const l=hu(r.fieldTransforms,i,c.transformResults),h=i.data;h.setAll(Xd(r)),h.setAll(l),i.convertToFoundDocument(c.version,h).setHasCommittedMutations()})(n,e,t):(function(r,i,c){i.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Ws(n,e,t,s){return n instanceof Di?(function(i,c,l,h){if(!Ur(i.precondition,c))return l;const m=i.value.clone(),f=du(i.fieldTransforms,h,c);return m.setAll(f),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),null})(n,e,t,s):n instanceof Cn?(function(i,c,l,h){if(!Ur(i.precondition,c))return l;const m=du(i.fieldTransforms,h,c),f=c.data;return f.setAll(Xd(i)),f.setAll(m),c.convertToFoundDocument(c.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((x=>x.field)))})(n,e,t,s):(function(i,c,l){return Ur(i.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):l})(n,e,t)}function ww(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Gd(s.transform,r||null);i!=null&&(t===null&&(t=Ye.empty()),t.set(s.field,i))}return t||null}function uu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Xn(s,r,((i,c)=>yw(i,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Di extends Pi{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Cn extends Pi{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xd(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function hu(n,e,t){const s=new Map;re(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let r=0;r<t.length;r++){const i=n[r],c=i.transform,l=e.data.field(i.field);s.set(i.field,pw(c,l,t[r]))}return s}function du(n,e,t){const s=new Map;for(const r of n){const i=r.transform,c=t.data.field(r.field);s.set(r.field,fw(i,c,e))}return s}class Zd extends Pi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bw extends Pi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&_w(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ws(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ws(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Hd();return this.mutations.forEach((r=>{const i=e.get(r.key),c=i.overlayedDocument;let l=this.applyToLocalView(c,i.mutatedFields);l=t.has(r.key)?null:l;const h=Jd(c,l);h!==null&&s.set(r.key,h),c.isValidDocument()||c.convertToNoDocument(z.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ee())}isEqual(e){return this.batchId===e.batchId&&Xn(this.mutations,e.mutations,((t,s)=>uu(t,s)))&&Xn(this.baseMutations,e.baseMutations,((t,s)=>uu(t,s)))}}class Ao{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){re(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return lw})();const i=e.mutations;for(let c=0;c<i.length;c++)r=r.insert(i[c].key,s[c].version);return new Ao(e,t,s,r)}}/**
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
 */class Ew{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Iw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,te;function Tw(n){switch(n){case S.OK:return W(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return W(15467,{code:n})}}function em(n){if(n===void 0)return Ct("GRPC error has no .code"),S.UNKNOWN;switch(n){case xe.OK:return S.OK;case xe.CANCELLED:return S.CANCELLED;case xe.UNKNOWN:return S.UNKNOWN;case xe.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case xe.INTERNAL:return S.INTERNAL;case xe.UNAVAILABLE:return S.UNAVAILABLE;case xe.UNAUTHENTICATED:return S.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case xe.NOT_FOUND:return S.NOT_FOUND;case xe.ALREADY_EXISTS:return S.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return S.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case xe.ABORTED:return S.ABORTED;case xe.OUT_OF_RANGE:return S.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return S.UNIMPLEMENTED;case xe.DATA_LOSS:return S.DATA_LOSS;default:return W(39323,{code:n})}}(te=xe||(xe={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Nw(){return new TextEncoder}/**
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
 */const Aw=new Yt([4294967295,4294967295],0);function mu(n){const e=Nw().encode(n),t=new fd;return t.update(e),new Uint8Array(t.digest())}function fu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Yt([t,s],0),new Yt([r,i],0)]}class So{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ms(`Invalid padding: ${t}`);if(s<0)throw new Ms(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Yt.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(Yt.fromNumber(s)));return r.compare(Aw)===1&&(r=new Yt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=mu(e),[s,r]=fu(t);for(let i=0;i<this.hashCount;i++){const c=this.ye(s,r,i);if(!this.we(c))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),c=new So(i,r,t);return s.forEach((l=>c.insert(l))),c}insert(e){if(this.ge===0)return;const t=mu(e),[s,r]=fu(t);for(let i=0;i<this.hashCount;i++){const c=this.ye(s,r,i);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,lr.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Vi(z.min(),r,new fe(Z),jt(),ee())}}class lr{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new lr(s,t,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class tm{constructor(e,t){this.targetId=e,this.Ce=t}}class nm{constructor(e,t,s=je.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class pu{constructor(){this.ve=0,this.Fe=gu(),this.Me=je.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ee(),t=ee(),s=ee();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:W(38017,{changeType:i})}})),new lr(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=gu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,re(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Sw{constructor(e){this.Ge=e,this.ze=new Map,this.je=jt(),this.Je=Cr(),this.He=Cr(),this.Ye=new fe(Z)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:W(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(Ha(i))if(s===0){const c=new B(i.path);this.et(t,c,Fe.newNoDocument(c,z.min()))}else re(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const l=this.ut(e),h=l?this.ct(l,e,c):1;if(h!==0){this.it(t);const m=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,m)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let c,l;try{c=tn(s).toUint8Array()}catch(h){if(h instanceof Nd)return Jn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new So(c,r,i)}catch(h){return Jn(h instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const c=this.Ge.ht(),l=`projects/${c.projectId}/databases/${c.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,c)=>{const l=this.ot(c);if(l){if(i.current&&Ha(l.target)){const h=new B(l.target.path);this.It(h).has(c)||this.Et(c,h)||this.et(c,h,Fe.newNoDocument(h,e))}i.Be&&(t.set(c,i.ke()),i.qe())}}));let s=ee();this.He.forEach(((i,c)=>{let l=!0;c.forEachWhile((h=>{const m=this.ot(h);return!m||m.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.je.forEach(((i,c)=>c.setReadTime(e)));const r=new Vi(e,t,this.Ye,this.je,s);return this.je=jt(),this.Je=Cr(),this.He=Cr(),this.Ye=new fe(Z),r}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new pu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ie(Z),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ie(Z),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new pu),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Cr(){return new fe(B.comparator)}function gu(){return new fe(B.comparator)}const kw={asc:"ASCENDING",desc:"DESCENDING"},Rw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cw={and:"AND",or:"OR"};class jw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ka(n,e){return n.useProto3Json||Si(e)?e:{value:e}}function li(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Pw(n,e){return li(n,e.toTimestamp())}function xt(n){return re(!!n,49232),z.fromTimestamp((function(t){const s=en(t);return new de(s.seconds,s.nanos)})(n))}function ko(n,e){return Qa(n,e).canonicalString()}function Qa(n,e){const t=(function(r){return new ue(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function rm(n){const e=ue.fromString(n);return re(lm(e),10190,{key:e.toString()}),e}function Ya(n,e){return ko(n.databaseId,e.path)}function wa(n,e){const t=rm(e);if(t.get(1)!==n.databaseId.projectId)throw new M(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(am(t))}function im(n,e){return ko(n.databaseId,e)}function Dw(n){const e=rm(n);return e.length===4?ue.emptyPath():am(e)}function Ja(n){return new ue(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function am(n){return re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function yu(n,e,t){return{name:Ya(n,e),fields:t.value.mapValue.fields}}function Vw(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:W(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(m,f){return m.useProto3Json?(re(f===void 0||typeof f=="string",58123),je.fromBase64String(f||"")):(re(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),je.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,l=c&&(function(m){const f=m.code===void 0?S.UNKNOWN:em(m.code);return new M(f,m.message||"")})(c);t=new nm(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=wa(n,s.document.name),i=xt(s.document.updateTime),c=s.document.createTime?xt(s.document.createTime):z.min(),l=new Ye({mapValue:{fields:s.document.fields}}),h=Fe.newFoundDocument(r,i,c,l),m=s.targetIds||[],f=s.removedTargetIds||[];t=new Br(m,f,h.key,h)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=wa(n,s.document),i=s.readTime?xt(s.readTime):z.min(),c=Fe.newNoDocument(r,i),l=s.removedTargetIds||[];t=new Br([],l,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=wa(n,s.document),i=s.removedTargetIds||[];t=new Br([],i,r,null)}else{if(!("filter"in e))return W(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,c=new Iw(r,i),l=s.targetId;t=new tm(l,c)}}return t}function Ow(n,e){let t;if(e instanceof Di)t={update:yu(n,e.key,e.value)};else if(e instanceof Zd)t={delete:Ya(n,e.key)};else if(e instanceof Cn)t={update:yu(n,e.key,e.data),updateMask:Hw(e.fieldMask)};else{if(!(e instanceof bw))return W(16599,{Vt:e.type});t={verify:Ya(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,c){const l=c.transform;if(l instanceof er)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof tr)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof nr)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ci)return{fieldPath:c.field.canonicalString(),increment:l.Ae};throw W(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:Pw(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W(27497)})(n,e.precondition)),t}function Mw(n,e){return n&&n.length>0?(re(e!==void 0,14353),n.map((t=>(function(r,i){let c=r.updateTime?xt(r.updateTime):xt(i);return c.isEqual(z.min())&&(c=xt(i)),new xw(c,r.transformResults||[])})(t,e)))):[]}function Lw(n,e){return{documents:[im(n,e.path)]}}function Fw(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=im(n,r);const i=(function(m){if(m.length!==0)return cm(ct.create(m,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const c=(function(m){if(m.length!==0)return m.map((f=>(function(b){return{field:Fn(b.field),direction:qw(b.dir)}})(f)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const l=Ka(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{ft:t,parent:r}}function Uw(n){let e=Dw(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){re(s===1,65062);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(x){const b=om(x);return b instanceof ct&&Od(b)?b.getFilters():[b]})(t.where));let c=[];t.orderBy&&(c=(function(x){return x.map((b=>(function(C){return new Zs(Un(C.field),(function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(b)))})(t.orderBy));let l=null;t.limit&&(l=(function(x){let b;return b=typeof x=="object"?x.value:x,Si(b)?null:b})(t.limit));let h=null;t.startAt&&(h=(function(x){const b=!!x.before,N=x.values||[];return new oi(N,b)})(t.startAt));let m=null;return t.endAt&&(m=(function(x){const b=!x.before,N=x.values||[];return new oi(N,b)})(t.endAt)),rw(e,r,c,i,l,"F",h,m)}function Bw(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function om(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Un(t.unaryFilter.field);return _e.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Un(t.unaryFilter.field);return _e.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Un(t.unaryFilter.field);return _e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Un(t.unaryFilter.field);return _e.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}})(n):n.fieldFilter!==void 0?(function(t){return _e.create(Un(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ct.create(t.compositeFilter.filters.map((s=>om(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return W(1026)}})(t.compositeFilter.op))})(n):W(30097,{filter:n})}function qw(n){return kw[n]}function $w(n){return Rw[n]}function Ww(n){return Cw[n]}function Fn(n){return{fieldPath:n.canonicalString()}}function Un(n){return Re.fromServerFormat(n.fieldPath)}function cm(n){return n instanceof _e?(function(t){if(t.op==="=="){if(ru(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NAN"}};if(su(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ru(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NAN"}};if(su(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fn(t.field),op:$w(t.op),value:t.value}}})(n):n instanceof ct?(function(t){const s=t.getFilters().map((r=>cm(r)));return s.length===1?s[0]:{compositeFilter:{op:Ww(t.op),filters:s}}})(n):W(54877,{filter:n})}function Hw(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function lm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,s,r,i=z.min(),c=z.min(),l=je.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new zt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.yt=e}}function Gw(n){const e=Uw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ga(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.Cn=new Qw}addToCollectionParentIndex(e,t){return this.Cn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Zt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Zt.min())}updateCollectionGroup(e,t,s){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Qw{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Ie(ue.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ie(ue.comparator)).toArray()}}/**
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
 */const xu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},um=41943040;class Ke{static withCacheSize(e){return new Ke(e,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke.DEFAULT_COLLECTION_PERCENTILE=10,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ke.DEFAULT=new Ke(um,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ke.DISABLED=new Ke(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _u="LruGarbageCollector",Yw=1048576;function wu([n,e],[t,s]){const r=Z(n,t);return r===0?Z(e,s):r}class Jw{constructor(e){this.Ir=e,this.buffer=new Ie(wu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();wu(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Xw{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){L(_u,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ls(t)?L(_u,"Ignoring IndexedDB error during garbage collection: ",t):await cs(t)}await this.Vr(3e5)}))}}class Zw{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Ai.ce);const s=new Jw(t);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(xu)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xu):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,r,i,c,l,h,m;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((x=>(x>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),r=this.params.maximumSequenceNumbersToCollect):r=x,c=Date.now(),this.nthSequenceNumber(e,r)))).next((x=>(s=x,l=Date.now(),this.removeTargets(e,s,t)))).next((x=>(i=x,h=Date.now(),this.removeOrphanedDocuments(e,s)))).next((x=>(m=Date.now(),Mn()<=X.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-f}ms
	Determined least recently used ${r} in `+(l-c)+`ms
	Removed ${i} targets in `+(h-l)+`ms
	Removed ${x} documents in `+(m-h)+`ms
Total Duration: ${m-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:x}))))}}function eb(n,e){return new Zw(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.changes=new Rn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?R.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Ws(s.mutation,r,rt.empty(),de.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,ee()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=ee()){const r=xn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let c=Os();return i.forEach(((l,h)=>{c=c.insert(l,h.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=xn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,ee())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((c,l)=>{t.set(c,l)}))}))}computeViews(e,t,s,r){let i=jt();const c=$s(),l=(function(){return $s()})();return t.forEach(((h,m)=>{const f=s.get(m.key);r.has(m.key)&&(f===void 0||f.mutation instanceof Cn)?i=i.insert(m.key,m):f!==void 0?(c.set(m.key,f.mutation.getFieldMask()),Ws(f.mutation,m,f.mutation.getFieldMask(),de.now())):c.set(m.key,rt.empty())})),this.recalculateAndSaveOverlays(e,i).next((h=>(h.forEach(((m,f)=>c.set(m,f))),t.forEach(((m,f)=>l.set(m,new nb(f,c.get(m)??null)))),l)))}recalculateAndSaveOverlays(e,t){const s=$s();let r=new fe(((c,l)=>c-l)),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const l of c)l.keys().forEach((h=>{const m=t.get(h);if(m===null)return;let f=s.get(h)||rt.empty();f=l.applyToLocalView(m,f),s.set(h,f);const x=(r.get(l.batchId)||ee()).add(h);r=r.insert(l.batchId,x)}))})).next((()=>{const c=[],l=r.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),m=h.key,f=h.value,x=Hd();f.forEach((b=>{if(!i.has(b)){const N=Jd(t.get(b),s.get(b));N!==null&&x.set(b,N),i=i.add(b)}})),c.push(this.documentOverlayCache.saveOverlays(e,m,x))}return R.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return(function(c){return B.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ud(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const c=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):R.resolve(xn());let l=Qs,h=i;return c.next((m=>R.forEach(m,((f,x)=>(l<x.largestBatchId&&(l=x.largestBatchId),i.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next((b=>{h=h.insert(f,b)}))))).next((()=>this.populateOverlays(e,m,i))).next((()=>this.computeViews(e,h,m,ee()))).next((f=>({batchId:l,changes:Wd(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next((s=>{let r=Os();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let c=Os();return this.indexManager.getCollectionParents(e,i).next((l=>R.forEach(l,(h=>{const m=(function(x,b){return new us(b,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(t,h.child(i));return this.getDocumentsMatchingCollectionQuery(e,m,s,r).next((f=>{f.forEach(((x,b)=>{c=c.insert(x,b)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(i=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((c=>{i.forEach(((h,m)=>{const f=m.getKey();c.get(f)===null&&(c=c.insert(f,Fe.newInvalidDocument(f)))}));let l=Os();return c.forEach(((h,m)=>{const f=i.get(h);f!==void 0&&Ws(f.mutation,m,rt.empty(),de.now()),Ci(t,m)&&(l=l.insert(h,m))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return R.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:xt(r.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(r){return{name:r.name,query:Gw(r.bundledQuery),readTime:xt(r.readTime)}})(t)),R.resolve()}}/**
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
 */class ib{constructor(){this.overlays=new fe(B.comparator),this.qr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const s=xn();return R.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.St(e,t,i)})),R.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(s)),R.resolve()}getOverlaysForCollection(e,t,s){const r=xn(),i=t.length+1,c=new B(t.child("")),l=this.overlays.getIteratorFrom(c);for(;l.hasNext();){const h=l.getNext().value,m=h.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===i&&h.largestBatchId>s&&r.set(h.getKey(),h)}return R.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new fe(((m,f)=>m-f));const c=this.overlays.getIterator();for(;c.hasNext();){const m=c.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>s){let f=i.get(m.largestBatchId);f===null&&(f=xn(),i=i.insert(m.largestBatchId,f)),f.set(m.getKey(),m)}}const l=xn(),h=i.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((m,f)=>l.set(m,f))),!(l.size()>=r)););return R.resolve(l)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const c=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new Ew(t,s));let i=this.qr.get(t);i===void 0&&(i=ee(),this.qr.set(t,i)),this.qr.set(t,i.add(s.key))}}/**
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
 */class ab{constructor(){this.sessionToken=je.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.Qr=new Ie(Ae.$r),this.Ur=new Ie(Ae.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Ae(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Ae(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new B(new ue([])),s=new Ae(t,e),r=new Ae(t,e+1),i=[];return this.Ur.forEachInRange([s,r],(c=>{this.Gr(c),i.push(c.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new B(new ue([])),s=new Ae(t,e),r=new Ae(t,e+1);let i=ee();return this.Ur.forEachInRange([s,r],(c=>{i=i.add(c.key)})),i}containsKey(e){const t=new Ae(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ae{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return B.comparator(e.key,t.key)||Z(e.Yr,t.Yr)}static Kr(e,t){return Z(e.Yr,t.Yr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ie(Ae.$r)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new vw(i,t,s,r);this.mutationQueue.push(c);for(const l of r)this.Zr=this.Zr.add(new Ae(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return R.resolve(c)}lookupMutationBatch(e,t){return R.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ei(s),i=r<0?0:r;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?wo:this.tr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ae(t,0),r=new Ae(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],(c=>{const l=this.Xr(c.Yr);i.push(l)})),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ie(Z);return t.forEach((r=>{const i=new Ae(r,0),c=new Ae(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,c],(l=>{s=s.add(l.Yr)}))})),R.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;B.isDocumentKey(i)||(i=i.child(""));const c=new Ae(new B(i),0);let l=new Ie(Z);return this.Zr.forEachWhile((h=>{const m=h.key.path;return!!s.isPrefixOf(m)&&(m.length===r&&(l=l.add(h.Yr)),!0)}),c),R.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){re(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return R.forEach(t.mutations,(r=>{const i=new Ae(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Ae(t,0),r=this.Zr.firstAfterOrEqual(s);return R.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.ri=e,this.docs=(function(){return new fe(B.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,c=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return R.resolve(s?s.document.mutableCopy():Fe.newInvalidDocument(t))}getEntries(e,t){let s=jt();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Fe.newInvalidDocument(r))})),R.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=jt();const c=t.path,l=new B(c.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:m,value:{document:f}}=h.getNext();if(!c.isPrefixOf(m.path))break;m.path.length>c.length+1||O_(V_(f),s)<=0||(r.has(f.key)||Ci(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,s,r){W(9500)}ii(e,t){return R.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new lb(this)}getSize(e){return R.resolve(this.size)}}class lb extends tb{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),R.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.persistence=e,this.si=new Rn((t=>Eo(t)),Io),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.oi=0,this._i=new Ro,this.targetCount=0,this.ai=ts.ur()}forEachTarget(e,t){return this.si.forEach(((s,r)=>t(r))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),R.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ts(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Pr(t),R.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.si.forEach(((c,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.si.delete(c),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),R.waitFor(i).next((()=>r))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return R.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),R.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((c=>{i.push(r.markPotentiallyOrphaned(e,c))})),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return R.resolve(s)}containsKey(e,t){return R.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ai(0),this.li=!1,this.li=!0,this.hi=new ab,this.referenceDelegate=e(this),this.Pi=new ub(this),this.indexManager=new Kw,this.remoteDocumentCache=(function(r){return new cb(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new zw(t),this.Ii=new rb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ib,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new ob(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){L("MemoryPersistence","Starting transaction:",e);const r=new hb(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,t){return R.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class hb extends L_{constructor(e){super(),this.currentSequenceNumber=e}}class Co{constructor(e){this.persistence=e,this.Ri=new Ro,this.Vi=null}static mi(e){return new Co(e)}get fi(){if(this.Vi)return this.Vi;throw W(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),R.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(s=>{const r=B.fromPath(s);return this.gi(e,r).next((i=>{i||t.removeEntry(r,z.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ui{constructor(e,t){this.persistence=e,this.pi=new Rn((s=>B_(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=eb(this,t)}static mi(e,t){return new ui(e,t)}Ei(){}di(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return R.forEach(this.pi,((s,r)=>this.br(e,s,r).next((i=>i?R.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(c=>this.br(e,c,t).next((l=>{l||(s++,i.removeEntry(c,z.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),R.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Lr(e.data.value)),t}br(e,t,s){return R.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.pi.get(t);return R.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=r}static As(e,t){let s=ee(),r=ee();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new jo(e,t.fromCache,s,r)}}/**
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
 */class db{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return qg()?8:F_(Ue())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.ys(e,t).next((c=>{i.result=c})).next((()=>{if(!i.result)return this.ws(e,t,r,s).next((c=>{i.result=c}))})).next((()=>{if(i.result)return;const c=new db;return this.Ss(e,t,c).next((l=>{if(i.result=l,this.Vs)return this.bs(e,t,c,l.size)}))})).next((()=>i.result))}bs(e,t,s,r){return s.documentReadCount<this.fs?(Mn()<=X.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Ln(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(Mn()<=X.DEBUG&&L("QueryEngine","Query:",Ln(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(Mn()<=X.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Ln(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yt(t))):R.resolve())}ys(e,t){if(cu(t))return R.resolve(null);let s=yt(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=Ga(t,null,"F"),s=yt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const c=ee(...i);return this.ps.getDocuments(e,c).next((l=>this.indexManager.getMinOffset(e,s).next((h=>{const m=this.Ds(t,l);return this.Cs(t,m,c,h.readTime)?this.ys(e,Ga(t,null,"F")):this.vs(e,m,t,h)}))))})))))}ws(e,t,s,r){return cu(t)||r.isEqual(z.min())?R.resolve(null):this.ps.getDocuments(e,s).next((i=>{const c=this.Ds(t,i);return this.Cs(t,c,s,r)?R.resolve(null):(Mn()<=X.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ln(t)),this.vs(e,c,t,D_(r,Qs)).next((l=>l)))}))}Ds(e,t){let s=new Ie(qd(e));return t.forEach(((r,i)=>{Ci(e,i)&&(s=s.add(i))})),s}Cs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,s){return Mn()<=X.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Ln(t)),this.ps.getDocumentsMatchingQuery(e,t,Zt.min(),s)}vs(e,t,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((c=>{i=i.insert(c.key,c)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="LocalStore",fb=3e8;class pb{constructor(e,t,s,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new fe(Z),this.xs=new Rn((i=>Eo(i)),Io),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function gb(n,e,t,s){return new pb(n,e,t,s)}async function dm(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const c=[],l=[];let h=ee();for(const m of r){c.push(m.batchId);for(const f of m.mutations)h=h.add(f.key)}for(const m of i){l.push(m.batchId);for(const f of m.mutations)h=h.add(f.key)}return t.localDocuments.getDocuments(s,h).next((m=>({Ls:m,removedBatchIds:c,addedBatchIds:l})))}))}))}function yb(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,h,m,f){const x=m.batch,b=x.keys();let N=R.resolve();return b.forEach((C=>{N=N.next((()=>f.getEntry(h,C))).next((P=>{const j=m.docVersions.get(C);re(j!==null,48541),P.version.compareTo(j)<0&&(x.applyToRemoteDocument(P,m),P.isValidDocument()&&(P.setReadTime(m.commitVersion),f.addEntry(P)))}))})),N.next((()=>l.mutationQueue.removeMutationBatch(h,x)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let h=ee();for(let m=0;m<l.mutationResults.length;++m)l.mutationResults[m].transformResults.length>0&&(h=h.add(l.batch.mutations[m].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function mm(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function xb(n,e){const t=G(n),s=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});r=t.Ms;const l=[];e.targetChanges.forEach(((f,x)=>{const b=r.get(x);if(!b)return;l.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,x).next((()=>t.Pi.addMatchingKeys(i,f.addedDocuments,x))));let N=b.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(x)!==null?N=N.withResumeToken(je.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):f.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(f.resumeToken,s)),r=r.insert(x,N),(function(P,j,O){return P.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=fb?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0})(b,N,f)&&l.push(t.Pi.updateTargetData(i,N))}));let h=jt(),m=ee();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(_b(i,c,e.documentUpdates).next((f=>{h=f.ks,m=f.qs}))),!s.isEqual(z.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next((x=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(f)}return R.waitFor(l).next((()=>c.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,h,m))).next((()=>h))})).then((i=>(t.Ms=r,i)))}function _b(n,e,t){let s=ee(),r=ee();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let c=jt();return t.forEach(((l,h)=>{const m=i.get(l);h.isFoundDocument()!==m.isFoundDocument()&&(r=r.add(l)),h.isNoDocument()&&h.version.isEqual(z.min())?(e.removeEntry(l,h.readTime),c=c.insert(l,h)):!m.isValidDocument()||h.version.compareTo(m.version)>0||h.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(h),c=c.insert(l,h)):L(Po,"Ignoring outdated watch update for ",l,". Current version:",m.version," Watch version:",h.version)})),{ks:c,qs:r}}))}function wb(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=wo),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function bb(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.Pi.getTargetData(s,e).next((i=>i?(r=i,R.resolve(r)):t.Pi.allocateTargetId(s).next((c=>(r=new zt(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Xa(n,e,t){const s=G(n),r=s.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(c=>s.persistence.referenceDelegate.removeTarget(c,r)))}catch(c){if(!ls(c))throw c;L(Po,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function bu(n,e,t){const s=G(n);let r=z.min(),i=ee();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(h,m,f){const x=G(h),b=x.xs.get(f);return b!==void 0?R.resolve(x.Ms.get(b)):x.Pi.getTargetData(m,f)})(s,c,yt(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(c,l.targetId).next((h=>{i=h}))})).next((()=>s.Fs.getDocumentsMatchingQuery(c,e,t?r:z.min(),t?i:ee()))).next((l=>(vb(s,aw(e),l),{documents:l,Qs:i})))))}function vb(n,e,t){let s=n.Os.get(e)||z.min();t.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),n.Os.set(e,s)}class vu{constructor(){this.activeTargetIds=dw()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Eb{constructor(){this.Mo=new vu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new vu,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="ConnectivityMonitor";class Iu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){L(Eu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){L(Eu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let jr=null;function Za(){return jr===null?jr=(function(){return 268435456+Math.round(2147483648*Math.random())})():jr++,"0x"+jr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="RestConnection",Tb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Nb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===ii?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,t,s,r,i){const c=Za(),l=this.zo(e,t.toUriEncodedString());L(ba,`Sending RPC '${e}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,r,i);const{host:m}=new URL(l),f=ss(m);return this.Jo(e,l,h,s,f).then((x=>(L(ba,`Received RPC '${e}' ${c}: `,x),x)),(x=>{throw Jn(ba,`RPC '${e}' ${c} failed with error: `,x,"url: ",l,"request:",s),x}))}Ho(e,t,s,r,i,c){return this.Go(e,t,s,r,i)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+os})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}zo(e,t){const s=Tb[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection";class Sb extends Nb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,r,i){const c=Za();return new Promise(((l,h)=>{const m=new pd;m.setWithCredentials(!0),m.listenOnce(gd.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case Mr.NO_ERROR:const x=m.getResponseJson();L(Me,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(x)),l(x);break;case Mr.TIMEOUT:L(Me,`RPC '${e}' ${c} timed out`),h(new M(S.DEADLINE_EXCEEDED,"Request time out"));break;case Mr.HTTP_ERROR:const b=m.getStatus();if(L(Me,`RPC '${e}' ${c} failed with status:`,b,"response text:",m.getResponseText()),b>0){let N=m.getResponseJson();Array.isArray(N)&&(N=N[0]);const C=N==null?void 0:N.error;if(C&&C.status&&C.message){const P=(function(O){const D=O.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(D)>=0?D:S.UNKNOWN})(C.status);h(new M(P,C.message))}else h(new M(S.UNKNOWN,"Server responded with status "+m.getStatus()))}else h(new M(S.UNAVAILABLE,"Connection failed."));break;default:W(9055,{l_:e,streamId:c,h_:m.getLastErrorCode(),P_:m.getLastError()})}}finally{L(Me,`RPC '${e}' ${c} completed.`)}}));const f=JSON.stringify(r);L(Me,`RPC '${e}' ${c} sending request:`,r),m.send(t,"POST",f,s,15)}))}T_(e,t,s){const r=Za(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=_d(),l=xd(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(h.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,s),h.encodeInitMessageHeaders=!0;const f=i.join("");L(Me,`Creating RPC '${e}' stream ${r}: ${f}`,h);const x=c.createWebChannel(f,h);this.I_(x);let b=!1,N=!1;const C=new Ab({Yo:j=>{N?L(Me,`Not sending because RPC '${e}' stream ${r} is closed:`,j):(b||(L(Me,`Opening RPC '${e}' stream ${r} transport.`),x.open(),b=!0),L(Me,`RPC '${e}' stream ${r} sending:`,j),x.send(j))},Zo:()=>x.close()}),P=(j,O,D)=>{j.listen(O,(F=>{try{D(F)}catch(Q){setTimeout((()=>{throw Q}),0)}}))};return P(x,Vs.EventType.OPEN,(()=>{N||(L(Me,`RPC '${e}' stream ${r} transport opened.`),C.o_())})),P(x,Vs.EventType.CLOSE,(()=>{N||(N=!0,L(Me,`RPC '${e}' stream ${r} transport closed`),C.a_(),this.E_(x))})),P(x,Vs.EventType.ERROR,(j=>{N||(N=!0,Jn(Me,`RPC '${e}' stream ${r} transport errored. Name:`,j.name,"Message:",j.message),C.a_(new M(S.UNAVAILABLE,"The operation could not be completed")))})),P(x,Vs.EventType.MESSAGE,(j=>{var O;if(!N){const D=j.data[0];re(!!D,16349);const F=D,Q=(F==null?void 0:F.error)||((O=F[0])==null?void 0:O.error);if(Q){L(Me,`RPC '${e}' stream ${r} received error:`,Q);const ce=Q.status;let ne=(function(g){const v=xe[g];if(v!==void 0)return em(v)})(ce),I=Q.message;ne===void 0&&(ne=S.INTERNAL,I="Unknown error status: "+ce+" with message "+Q.message),N=!0,C.a_(new M(ne,I)),x.close()}else L(Me,`RPC '${e}' stream ${r} received:`,D),C.u_(D)}})),P(l,yd.STAT_EVENT,(j=>{j.stat===Ua.PROXY?L(Me,`RPC '${e}' stream ${r} detected buffering proxy`):j.stat===Ua.NOPROXY&&L(Me,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function va(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(n){return new jw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&L("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="PersistentStream";class pm{constructor(e,t,s,r,i,c,l,h){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new fm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(Ct(t.toString()),Ct("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new M(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return L(Tu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(L(Tu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class kb extends pm{constructor(e,t,s,r,i,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,c),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Vw(this.serializer,e),s=(function(i){if(!("targetChange"in i))return z.min();const c=i.targetChange;return c.targetIds&&c.targetIds.length?z.min():c.readTime?xt(c.readTime):z.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Ja(this.serializer),t.addTarget=(function(i,c){let l;const h=c.target;if(l=Ha(h)?{documents:Lw(i,h)}:{query:Fw(i,h).ft},l.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){l.resumeToken=sm(i,c.resumeToken);const m=Ka(i,c.expectedCount);m!==null&&(l.expectedCount=m)}else if(c.snapshotVersion.compareTo(z.min())>0){l.readTime=li(i,c.snapshotVersion.toTimestamp());const m=Ka(i,c.expectedCount);m!==null&&(l.expectedCount=m)}return l})(this.serializer,e);const s=Bw(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Ja(this.serializer),t.removeTarget=e,this.q_(t)}}class Rb extends pm{constructor(e,t,s,r,i,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,c),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Mw(e.writeResults,e.commitTime),s=xt(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Ja(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Ow(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{}class jb extends Cb{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new M(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,c])=>this.connection.Go(e,Qa(t,s),r,i,c))).catch((i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(S.UNKNOWN,i.toString())}))}Ho(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,l])=>this.connection.Ho(e,Qa(t,s),r,c,l,i))).catch((c=>{throw c.name==="FirebaseError"?(c.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new M(S.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Pb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ct(t),this.aa=!1):L("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="RemoteStore";class Db{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((c=>{s.enqueueAndForget((async()=>{jn(this)&&(L(In,"Restarting streams for network reachability change."),await(async function(h){const m=G(h);m.Ea.add(4),await ur(m),m.Ra.set("Unknown"),m.Ea.delete(4),await Mi(m)})(this))}))})),this.Ra=new Pb(s,r)}}async function Mi(n){if(jn(n))for(const e of n.da)await e(!0)}async function ur(n){for(const e of n.da)await e(!1)}function gm(n,e){const t=G(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Mo(t)?Oo(t):hs(t).O_()&&Vo(t,e))}function Do(n,e){const t=G(n),s=hs(t);t.Ia.delete(e),s.O_()&&ym(t,e),t.Ia.size===0&&(s.O_()?s.L_():jn(t)&&t.Ra.set("Unknown"))}function Vo(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hs(n).Y_(e)}function ym(n,e){n.Va.Ue(e),hs(n).Z_(e)}function Oo(n){n.Va=new Sw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),hs(n).start(),n.Ra.ua()}function Mo(n){return jn(n)&&!hs(n).x_()&&n.Ia.size>0}function jn(n){return G(n).Ea.size===0}function xm(n){n.Va=void 0}async function Vb(n){n.Ra.set("Online")}async function Ob(n){n.Ia.forEach(((e,t)=>{Vo(n,e)}))}async function Mb(n,e){xm(n),Mo(n)?(n.Ra.ha(e),Oo(n)):n.Ra.set("Unknown")}async function Lb(n,e,t){if(n.Ra.set("Online"),e instanceof nm&&e.state===2&&e.cause)try{await(async function(r,i){const c=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,c),r.Ia.delete(l),r.Va.removeTarget(l))})(n,e)}catch(s){L(In,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await hi(n,s)}else if(e instanceof Br?n.Va.Ze(e):e instanceof tm?n.Va.st(e):n.Va.tt(e),!t.isEqual(z.min()))try{const s=await mm(n.localStore);t.compareTo(s)>=0&&await(function(i,c){const l=i.Va.Tt(c);return l.targetChanges.forEach(((h,m)=>{if(h.resumeToken.approximateByteSize()>0){const f=i.Ia.get(m);f&&i.Ia.set(m,f.withResumeToken(h.resumeToken,c))}})),l.targetMismatches.forEach(((h,m)=>{const f=i.Ia.get(h);if(!f)return;i.Ia.set(h,f.withResumeToken(je.EMPTY_BYTE_STRING,f.snapshotVersion)),ym(i,h);const x=new zt(f.target,h,m,f.sequenceNumber);Vo(i,x)})),i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(s){L(In,"Failed to raise snapshot:",s),await hi(n,s)}}async function hi(n,e,t){if(!ls(e))throw e;n.Ea.add(1),await ur(n),n.Ra.set("Offline"),t||(t=()=>mm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(In,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Mi(n)}))}function _m(n,e){return e().catch((t=>hi(n,t,e)))}async function Li(n){const e=G(n),t=sn(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:wo;for(;Fb(e);)try{const r=await wb(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,Ub(e,r)}catch(r){await hi(e,r)}wm(e)&&bm(e)}function Fb(n){return jn(n)&&n.Ta.length<10}function Ub(n,e){n.Ta.push(e);const t=sn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function wm(n){return jn(n)&&!sn(n).x_()&&n.Ta.length>0}function bm(n){sn(n).start()}async function Bb(n){sn(n).ra()}async function qb(n){const e=sn(n);for(const t of n.Ta)e.ea(t.mutations)}async function $b(n,e,t){const s=n.Ta.shift(),r=Ao.from(s,e,t);await _m(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await Li(n)}async function Wb(n,e){e&&sn(n).X_&&await(async function(s,r){if((function(c){return Tw(c)&&c!==S.ABORTED})(r.code)){const i=s.Ta.shift();sn(s).B_(),await _m(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Li(s)}})(n,e),wm(n)&&bm(n)}async function Nu(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),L(In,"RemoteStore received new credentials");const s=jn(t);t.Ea.add(3),await ur(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Mi(t)}async function Hb(n,e){const t=G(n);e?(t.Ea.delete(2),await Mi(t)):e||(t.Ea.add(2),await ur(t),t.Ra.set("Unknown"))}function hs(n){return n.ma||(n.ma=(function(t,s,r){const i=G(t);return i.sa(),new kb(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Xo:Vb.bind(null,n),t_:Ob.bind(null,n),r_:Mb.bind(null,n),H_:Lb.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Mo(n)?Oo(n):n.Ra.set("Unknown")):(await n.ma.stop(),xm(n))}))),n.ma}function sn(n){return n.fa||(n.fa=(function(t,s,r){const i=G(t);return i.sa(),new Rb(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Bb.bind(null,n),r_:Wb.bind(null,n),ta:qb.bind(null,n),na:$b.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Li(n)):(await n.fa.stop(),n.Ta.length>0&&(L(In,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const c=Date.now()+s,l=new Lo(e,t,c,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fo(n,e){if(Ct("AsyncQueue",`${e}: ${n}`),ls(n))return new M(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{static emptySet(e){return new Hn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||B.comparator(t.key,s.key):(t,s)=>B.comparator(t.key,s.key),this.keyedMap=Os(),this.sortedSet=new fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Hn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Au{constructor(){this.ga=new fe(B.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):W(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class ns{constructor(e,t,s,r,i,c,l,h,m){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=c,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=m}static fromInitialDocuments(e,t,s,r,i){const c=[];return t.forEach((l=>{c.push({type:0,doc:l})})),new ns(e,t,Hn.emptySet(t),c,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ri(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Gb{constructor(){this.queries=Su(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=G(t),i=r.queries;r.queries=Su(),i.forEach(((c,l)=>{for(const h of l.Sa)h.onError(s)}))})(this,new M(S.ABORTED,"Firestore shutting down"))}}function Su(){return new Rn((n=>Bd(n)),Ri)}async function vm(n,e){const t=G(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new zb,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(c){const l=Fo(c,`Initialization of query '${Ln(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Uo(t)}async function Em(n,e){const t=G(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const c=i.Sa.indexOf(e);c>=0&&(i.Sa.splice(c,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Kb(n,e){const t=G(n);let s=!1;for(const r of e){const i=r.query,c=t.queries.get(i);if(c){for(const l of c.Sa)l.Fa(r)&&(s=!0);c.wa=r}}s&&Uo(t)}function Qb(n,e,t){const s=G(n),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(t);s.queries.delete(e)}function Uo(n){n.Ca.forEach((e=>{e.next()}))}var eo,ku;(ku=eo||(eo={})).Ma="default",ku.Cache="cache";class Im{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ns(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==eo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.key=e}}class Nm{constructor(e){this.key=e}}class Yb{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ee(),this.mutatedKeys=ee(),this.eu=qd(e),this.tu=new Hn(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Au,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,c=r,l=!1;const h=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,m=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((f,x)=>{const b=r.get(f),N=Ci(this.query,x)?x:null,C=!!b&&this.mutatedKeys.has(b.key),P=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let j=!1;b&&N?b.data.isEqual(N.data)?C!==P&&(s.track({type:3,doc:N}),j=!0):this.su(b,N)||(s.track({type:2,doc:N}),j=!0,(h&&this.eu(N,h)>0||m&&this.eu(N,m)<0)&&(l=!0)):!b&&N?(s.track({type:0,doc:N}),j=!0):b&&!N&&(s.track({type:1,doc:b}),j=!0,(h||m)&&(l=!0)),j&&(N?(c=c.add(N),i=P?i.add(f):i.delete(f)):(c=c.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const f=this.query.limitType==="F"?c.last():c.first();c=c.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{tu:c,iu:s,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((f,x)=>(function(N,C){const P=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{Rt:j})}};return P(N)-P(C)})(f.type,x.type)||this.eu(f.doc,x.doc))),this.ou(s),r=r??!1;const l=t&&!r?this._u():[],h=this.Xa.size===0&&this.current&&!r?1:0,m=h!==this.Za;return this.Za=h,c.length!==0||m?{snapshot:new ns(this.query,e.tu,i,c,e.mutatedKeys,h===0,m,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Au,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ee(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new Nm(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new Tm(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=ee();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ns.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Bo="SyncEngine";class Jb{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Xb{constructor(e){this.key=e,this.hu=!1}}class Zb{constructor(e,t,s,r,i,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Rn((l=>Bd(l)),Ri),this.Iu=new Map,this.Eu=new Set,this.du=new fe(B.comparator),this.Au=new Map,this.Ru=new Ro,this.Vu={},this.mu=new Map,this.fu=ts.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ev(n,e,t=!0){const s=jm(n);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Am(s,e,t,!0),r}async function tv(n,e){const t=jm(n);await Am(t,e,!0,!1)}async function Am(n,e,t,s){const r=await bb(n.localStore,yt(e)),i=r.targetId,c=n.sharedClientState.addLocalQueryTarget(i,t);let l;return s&&(l=await nv(n,e,i,c==="current",r.resumeToken)),n.isPrimaryClient&&t&&gm(n.remoteStore,r),l}async function nv(n,e,t,s,r){n.pu=(x,b,N)=>(async function(P,j,O,D){let F=j.view.ru(O);F.Cs&&(F=await bu(P.localStore,j.query,!1).then((({documents:I})=>j.view.ru(I,F))));const Q=D&&D.targetChanges.get(j.targetId),ce=D&&D.targetMismatches.get(j.targetId)!=null,ne=j.view.applyChanges(F,P.isPrimaryClient,Q,ce);return Cu(P,j.targetId,ne.au),ne.snapshot})(n,x,b,N);const i=await bu(n.localStore,e,!0),c=new Yb(e,i.Qs),l=c.ru(i.documents),h=lr.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),m=c.applyChanges(l,n.isPrimaryClient,h);Cu(n,t,m.au);const f=new Jb(e,t,c);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),m.snapshot}async function sv(n,e,t){const s=G(n),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter((c=>!Ri(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Xa(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Do(s.remoteStore,r.targetId),to(s,r.targetId)})).catch(cs)):(to(s,r.targetId),await Xa(s.localStore,r.targetId,!0))}async function rv(n,e){const t=G(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Do(t.remoteStore,s.targetId))}async function iv(n,e,t){const s=dv(n);try{const r=await(function(c,l){const h=G(c),m=de.now(),f=l.reduce(((N,C)=>N.add(C.key)),ee());let x,b;return h.persistence.runTransaction("Locally write mutations","readwrite",(N=>{let C=jt(),P=ee();return h.Ns.getEntries(N,f).next((j=>{C=j,C.forEach(((O,D)=>{D.isValidDocument()||(P=P.add(O))}))})).next((()=>h.localDocuments.getOverlayedDocuments(N,C))).next((j=>{x=j;const O=[];for(const D of l){const F=ww(D,x.get(D.key).overlayedDocument);F!=null&&O.push(new Cn(D.key,F,Pd(F.value.mapValue),St.exists(!0)))}return h.mutationQueue.addMutationBatch(N,m,O,l)})).next((j=>{b=j;const O=j.applyToLocalDocumentSet(x,P);return h.documentOverlayCache.saveOverlays(N,j.batchId,O)}))})).then((()=>({batchId:b.batchId,changes:Wd(x)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(c,l,h){let m=c.Vu[c.currentUser.toKey()];m||(m=new fe(Z)),m=m.insert(l,h),c.Vu[c.currentUser.toKey()]=m})(s,r.batchId,t),await hr(s,r.changes),await Li(s.remoteStore)}catch(r){const i=Fo(r,"Failed to persist write");t.reject(i)}}async function Sm(n,e){const t=G(n);try{const s=await xb(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const c=t.Au.get(i);c&&(re(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?c.hu=!0:r.modifiedDocuments.size>0?re(c.hu,14607):r.removedDocuments.size>0&&(re(c.hu,42227),c.hu=!1))})),await hr(t,s,e)}catch(s){await cs(s)}}function Ru(n,e,t){const s=G(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((i,c)=>{const l=c.view.va(e);l.snapshot&&r.push(l.snapshot)})),(function(c,l){const h=G(c);h.onlineState=l;let m=!1;h.queries.forEach(((f,x)=>{for(const b of x.Sa)b.va(l)&&(m=!0)})),m&&Uo(h)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function av(n,e,t){const s=G(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),i=r&&r.key;if(i){let c=new fe(B.comparator);c=c.insert(i,Fe.newNoDocument(i,z.min()));const l=ee().add(i),h=new Vi(z.min(),new Map,new fe(Z),c,l);await Sm(s,h),s.du=s.du.remove(i),s.Au.delete(e),qo(s)}else await Xa(s.localStore,e,!1).then((()=>to(s,e,t))).catch(cs)}async function ov(n,e){const t=G(n),s=e.batch.batchId;try{const r=await yb(t.localStore,e);Rm(t,s,null),km(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await hr(t,r)}catch(r){await cs(r)}}async function cv(n,e,t){const s=G(n);try{const r=await(function(c,l){const h=G(c);return h.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let f;return h.mutationQueue.lookupMutationBatch(m,l).next((x=>(re(x!==null,37113),f=x.keys(),h.mutationQueue.removeMutationBatch(m,x)))).next((()=>h.mutationQueue.performConsistencyCheck(m))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(m,f,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,f))).next((()=>h.localDocuments.getDocuments(m,f)))}))})(s.localStore,e);Rm(s,e,t),km(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await hr(s,r)}catch(r){await cs(r)}}function km(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Rm(n,e,t){const s=G(n);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function to(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||Cm(n,s)}))}function Cm(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Do(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),qo(n))}function Cu(n,e,t){for(const s of t)s instanceof Tm?(n.Ru.addReference(s.key,e),lv(n,s)):s instanceof Nm?(L(Bo,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||Cm(n,s.key)):W(19791,{wu:s})}function lv(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(L(Bo,"New document in limbo: "+t),n.Eu.add(s),qo(n))}function qo(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new B(ue.fromString(e)),s=n.fu.next();n.Au.set(s,new Xb(t)),n.du=n.du.insert(t,s),gm(n.remoteStore,new zt(yt(To(t.path)),s,"TargetPurposeLimboResolution",Ai.ce))}}async function hr(n,e,t){const s=G(n),r=[],i=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,h)=>{c.push(s.pu(h,e,t).then((m=>{var f;if((m||t)&&s.isPrimaryClient){const x=m?!m.fromCache:(f=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:f.current;s.sharedClientState.updateQueryState(h.targetId,x?"current":"not-current")}if(m){r.push(m);const x=jo.As(h.targetId,m);i.push(x)}})))})),await Promise.all(c),s.Pu.H_(r),await(async function(h,m){const f=G(h);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>R.forEach(m,(b=>R.forEach(b.Es,(N=>f.persistence.referenceDelegate.addReference(x,b.targetId,N))).next((()=>R.forEach(b.ds,(N=>f.persistence.referenceDelegate.removeReference(x,b.targetId,N)))))))))}catch(x){if(!ls(x))throw x;L(Po,"Failed to update sequence numbers: "+x)}for(const x of m){const b=x.targetId;if(!x.fromCache){const N=f.Ms.get(b),C=N.snapshotVersion,P=N.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(b,P)}}})(s.localStore,i))}async function uv(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){L(Bo,"User change. New user:",e.toKey());const s=await dm(t.localStore,e);t.currentUser=e,(function(i,c){i.mu.forEach((l=>{l.forEach((h=>{h.reject(new M(S.CANCELLED,c))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await hr(t,s.Ls)}}function hv(n,e){const t=G(n),s=t.Au.get(e);if(s&&s.hu)return ee().add(s.key);{let r=ee();const i=t.Iu.get(e);if(!i)return r;for(const c of i){const l=t.Tu.get(c);r=r.unionWith(l.view.nu)}return r}}function jm(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=av.bind(null,e),e.Pu.H_=Kb.bind(null,e.eventManager),e.Pu.yu=Qb.bind(null,e.eventManager),e}function dv(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ov.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cv.bind(null,e),e}class di{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Oi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return gb(this.persistence,new mb,e.initialUser,this.serializer)}Cu(e){return new hm(Co.mi,this.serializer)}Du(e){return new Eb}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}di.provider={build:()=>new di};class mv extends di{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){re(this.persistence.referenceDelegate instanceof ui,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Xw(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ke.withCacheSize(this.cacheSizeBytes):Ke.DEFAULT;return new hm((s=>ui.mi(s,t)),this.serializer)}}class no{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ru(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=uv.bind(null,this.syncEngine),await Hb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Gb})()}createDatastore(e){const t=Oi(e.databaseInfo.databaseId),s=(function(i){return new Sb(i)})(e.databaseInfo);return(function(i,c,l,h){return new jb(i,c,l,h)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,c,l){return new Db(s,r,i,c,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ru(this.syncEngine,t,0)),(function(){return Iu.v()?new Iu:new Ib})())}createSyncEngine(e,t){return(function(r,i,c,l,h,m,f){const x=new Zb(r,i,c,l,h,m);return f&&(x.gu=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=G(r);L(In,"RemoteStore shutting down."),i.Ea.add(5),await ur(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}no.provider={build:()=>new no};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ct("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="FirestoreClient";class fv{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Le.UNAUTHENTICATED,this.clientId=_o.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async c=>{L(rn,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(L(rn,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new At;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Fo(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Ea(n,e){n.asyncQueue.verifyOperationInProgress(),L(rn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await dm(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function ju(n,e){n.asyncQueue.verifyOperationInProgress();const t=await pv(n);L(rn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Nu(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>Nu(e.remoteStore,r))),n._onlineComponents=e}async function pv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(rn,"Using user provided OfflineComponentProvider");try{await Ea(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===S.FAILED_PRECONDITION||r.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Jn("Error using user provided cache. Falling back to memory cache: "+t),await Ea(n,new di)}}else L(rn,"Using default OfflineComponentProvider"),await Ea(n,new mv(void 0));return n._offlineComponents}async function Dm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(rn,"Using user provided OnlineComponentProvider"),await ju(n,n._uninitializedComponentsProvider._online)):(L(rn,"Using default OnlineComponentProvider"),await ju(n,new no))),n._onlineComponents}function gv(n){return Dm(n).then((e=>e.syncEngine))}async function Vm(n){const e=await Dm(n),t=e.eventManager;return t.onListen=ev.bind(null,e.syncEngine),t.onUnlisten=sv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=tv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=rv.bind(null,e.syncEngine),t}function yv(n,e,t={}){const s=new At;return n.asyncQueue.enqueueAndForget((async()=>(function(i,c,l,h,m){const f=new Pm({next:b=>{f.Nu(),c.enqueueAndForget((()=>Em(i,x)));const N=b.docs.has(l);!N&&b.fromCache?m.reject(new M(S.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&b.fromCache&&h&&h.source==="server"?m.reject(new M(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(b)},error:b=>m.reject(b)}),x=new Im(To(l.path),f,{includeMetadataChanges:!0,qa:!0});return vm(i,x)})(await Vm(n),n.asyncQueue,e,t,s))),s.promise}function xv(n,e,t={}){const s=new At;return n.asyncQueue.enqueueAndForget((async()=>(function(i,c,l,h,m){const f=new Pm({next:b=>{f.Nu(),c.enqueueAndForget((()=>Em(i,x))),b.fromCache&&h.source==="server"?m.reject(new M(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(b)},error:b=>m.reject(b)}),x=new Im(l,f,{includeMetadataChanges:!0,qa:!0});return vm(i,x)})(await Vm(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function Om(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="firestore.googleapis.com",Du=!0;class Vu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new M(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mm,this.ssl=Du}else this.host=e.host,this.ssl=e.ssl??Du;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=um;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Yw)throw new M(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}P_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Om(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fi{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new E_;switch(s.type){case"firstParty":return new A_(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new M(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Pu.get(t);s&&(L("ComponentProvider","Removing Datastore"),Pu.delete(t),s.terminate())})(this),Promise.resolve()}}function _v(n,e,t,s={}){var m;n=En(n,Fi);const r=ss(e),i=n._getSettings(),c={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&(Ih(`https://${l}`),Th("Firestore",!0)),i.host!==Mm&&i.host!==l&&Jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...i,host:l,ssl:r,emulatorOptions:s};if(!Xt(h,c)&&(n._setSettings(h),s.mockUserToken)){let f,x;if(typeof s.mockUserToken=="string")f=s.mockUserToken,x=Le.MOCK_USER;else{f=Dg(s.mockUserToken,(m=n._app)==null?void 0:m.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new M(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");x=new Le(b)}n._authCredentials=new I_(new bd(f,x))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Pn(this.firestore,e,this._query)}}class be{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(cr(t,be._jsonSchema))return new be(e,s||null,new B(ue.fromString(t.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:we("string",be._jsonSchemaVersion),referencePath:we("string")};class Jt extends Pn{constructor(e,t,s){super(e,t,To(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new B(e))}withConverter(e){return new Jt(this.firestore,e,this._path)}}function sr(n,e,...t){if(n=ye(n),vd("collection","path",e),n instanceof Fi){const s=ue.fromString(e,...t);return Kl(s),new Jt(n,null,s)}{if(!(n instanceof be||n instanceof Jt))throw new M(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ue.fromString(e,...t));return Kl(s),new Jt(n.firestore,null,s)}}function Se(n,e,...t){if(n=ye(n),arguments.length===1&&(e=_o.newId()),vd("doc","path",e),n instanceof Fi){const s=ue.fromString(e,...t);return Gl(s),new be(n,null,new B(s))}{if(!(n instanceof be||n instanceof Jt))throw new M(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ue.fromString(e,...t));return Gl(s),new be(n.firestore,n instanceof Jt?n.converter:null,new B(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="AsyncQueue";class Mu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new fm(this,"async_queue_retry"),this._c=()=>{const s=va();s&&L(Ou,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=va();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=va();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new At;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ls(e))throw e;L(Ou,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Ct("INTERNAL UNHANDLED ERROR: ",Lu(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Lo.createAndSchedule(this,e,t,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&W(47125,{Pc:Lu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Lu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ui extends Fi{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Mu,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mu(e),this._firestoreClient=void 0,await e}}}function wv(n,e){const t=typeof n=="object"?n:co(),s=typeof n=="string"?n:ii,r=Sn(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=jg("firestore");i&&_v(r,...i)}return r}function $o(n){if(n._terminated)throw new M(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||bv(n),n._firestoreClient}function bv(n){var s,r,i;const e=n._freezeSettings(),t=(function(l,h,m,f){return new W_(l,h,m,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Om(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new fv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ze(je.fromBase64String(e))}catch(t){throw new M(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ze(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ze._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cr(e,Ze._jsonSchema))return Ze.fromBase64String(e.bytes)}}Ze._jsonSchemaVersion="firestore/bytes/1.0",Ze._jsonSchema={type:we("string",Ze._jsonSchemaVersion),bytes:we("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_t._jsonSchemaVersion}}static fromJSON(e){if(cr(e,_t._jsonSchema))return new _t(e.latitude,e.longitude)}}_t._jsonSchemaVersion="firestore/geoPoint/1.0",_t._jsonSchema={type:we("string",_t._jsonSchemaVersion),latitude:we("number"),longitude:we("number")};/**
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
 */const vv=/^__.*__$/;class Lm{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Cn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Fm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ac:n})}}class Wo{constructor(e,t,s,r,i,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Wo({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return mi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Fm(this.Ac)&&vv.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Ev{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Oi(e)}Cc(e,t,s,r=!1){return new Wo({Ac:e,methodName:t,Dc:s,path:Re.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Um(n){const e=n._freezeSettings(),t=Oi(n._databaseId);return new Ev(n._databaseId,!!e.ignoreUndefinedProperties,t)}class $i extends qi{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $i}}class Ho extends qi{_toFieldTransform(e){return new gw(e.path,new er)}isEqual(e){return e instanceof Ho}}function Iv(n,e,t,s){const r=n.Cc(1,e,t);qm("Data must be an object, but it was:",r,s);const i=[],c=Ye.empty();ln(s,((h,m)=>{const f=zo(e,h,t);m=ye(m);const x=r.yc(f);if(m instanceof $i)i.push(f);else{const b=dr(m,x);b!=null&&(i.push(f),c.set(f,b))}}));const l=new rt(i);return new Lm(c,l,r.fieldTransforms)}function Tv(n,e,t,s,r,i){const c=n.Cc(1,e,t),l=[Fu(e,s,t)],h=[r];if(i.length%2!=0)throw new M(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<i.length;b+=2)l.push(Fu(e,i[b])),h.push(i[b+1]);const m=[],f=Ye.empty();for(let b=l.length-1;b>=0;--b)if(!kv(m,l[b])){const N=l[b];let C=h[b];C=ye(C);const P=c.yc(N);if(C instanceof $i)m.push(N);else{const j=dr(C,P);j!=null&&(m.push(N),f.set(N,j))}}const x=new rt(m);return new Lm(f,x,c.fieldTransforms)}function Nv(n,e,t,s=!1){return dr(t,n.Cc(s?4:3,e))}function dr(n,e){if(Bm(n=ye(n)))return qm("Unsupported field value:",e,n),Av(n,e);if(n instanceof qi)return(function(s,r){if(!Fm(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const i=[];let c=0;for(const l of s){let h=dr(l,r.wc(c));h==null&&(h={nullValue:"NULL_VALUE"}),i.push(h),c++}return{arrayValue:{values:i}}})(n,e)}return(function(s,r){if((s=ye(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return mw(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=de.fromDate(s);return{timestampValue:li(r.serializer,i)}}if(s instanceof de){const i=new de(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:li(r.serializer,i)}}if(s instanceof _t)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ze)return{bytesValue:sm(r.serializer,s._byteString)};if(s instanceof be){const i=r.databaseId,c=s.firestore._databaseId;if(!c.isEqual(i))throw r.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ko(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof wt)return(function(c,l){return{mapValue:{fields:{[Cd]:{stringValue:jd},[ai]:{arrayValue:{values:c.toArray().map((m=>{if(typeof m!="number")throw l.Sc("VectorValues must only contain numeric values.");return No(l.serializer,m)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${Ni(s)}`)})(n,e)}function Av(n,e){const t={};return Td(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ln(n,((s,r)=>{const i=dr(r,e.mc(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function Bm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof _t||n instanceof Ze||n instanceof be||n instanceof qi||n instanceof wt)}function qm(n,e,t){if(!Bm(t)||!Ed(t)){const s=Ni(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Fu(n,e,t){if((e=ye(e))instanceof Bi)return e._internalPath;if(typeof e=="string")return zo(n,e);throw mi("Field path arguments must be of type string or ",n,!1,void 0,t)}const Sv=new RegExp("[~\\*/\\[\\]]");function zo(n,e,t){if(e.search(Sv)>=0)throw mi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Bi(...e.split("."))._internalPath}catch{throw mi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function mi(n,e,t,s,r){const i=s&&!s.isEmpty(),c=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(i||c)&&(h+=" (found",i&&(h+=` in field ${s}`),c&&(h+=` in document ${r}`),h+=")"),new M(S.INVALID_ARGUMENT,l+n+h)}function kv(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Rv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Rv extends $m{data(){return super.data()}}function Wi(n,e){return typeof e=="string"?zo(n,e):e instanceof Bi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Go{}class Wm extends Go{}function fi(n,e,...t){let s=[];e instanceof Go&&s.push(e),s=s.concat(t),(function(i){const c=i.filter((h=>h instanceof Ko)).length,l=i.filter((h=>h instanceof Hi)).length;if(c>1||c>0&&l>0)throw new M(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class Hi extends Wm{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Hi(e,t,s)}_apply(e){const t=this._parse(e);return Hm(e._query,t),new Pn(e.firestore,e.converter,za(e._query,t))}_parse(e){const t=Um(e.firestore);return(function(i,c,l,h,m,f,x){let b;if(m.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new M(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Bu(x,f);const C=[];for(const P of x)C.push(Uu(h,i,P));b={arrayValue:{values:C}}}else b=Uu(h,i,x)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Bu(x,f),b=Nv(l,c,x,f==="in"||f==="not-in");return _e.create(m,f,b)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function pi(n,e,t){const s=e,r=Wi("where",n);return Hi._create(r,s,t)}class Ko extends Go{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ko(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:ct.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let c=r;const l=i.getFlattenedFilters();for(const h of l)Hm(c,h),c=za(c,h)})(e._query,t),new Pn(e.firestore,e.converter,za(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qo extends Wm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Qo(e,t)}_apply(e){const t=(function(r,i,c){if(r.startAt!==null)throw new M(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new M(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Zs(i,c)})(e._query,this._field,this._direction);return new Pn(e.firestore,e.converter,(function(r,i){const c=r.explicitOrderBy.concat([i]);return new us(r.path,r.collectionGroup,c,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)})(e._query,t))}}function jv(n,e="asc"){const t=e,s=Wi("orderBy",n);return Qo._create(s,t)}function Uu(n,e,t){if(typeof(t=ye(t))=="string"){if(t==="")throw new M(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ud(e)&&t.indexOf("/")!==-1)throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ue.fromString(t));if(!B.isDocumentKey(s))throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return nu(n,new B(s))}if(t instanceof be)return nu(n,t._key);throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ni(t)}.`)}function Bu(n,e){if(!Array.isArray(n)||n.length===0)throw new M(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Hm(n,e){const t=(function(r,i){for(const c of r)for(const l of c.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new M(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Pv{convertValue(e,t="none"){switch(nn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(tn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ln(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[ai].arrayValue)==null?void 0:r.values)==null?void 0:i.map((c=>ge(c.doubleValue)));return new wt(t)}convertGeoPoint(e){return new _t(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ki(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ys(e));default:return null}}convertTimestamp(e){const t=en(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ue.fromString(e);re(lm(s),9688,{name:e});const r=new Js(s.get(1),s.get(3)),i=new B(s.popFirst(5));return r.isEqual(t)||Ct(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}class Ls{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wn extends $m{constructor(e,t,s,r,i,c){super(e,t,s,r,c),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Wi("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=wn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}wn._jsonSchemaVersion="firestore/documentSnapshot/1.0",wn._jsonSchema={type:we("string",wn._jsonSchemaVersion),bundleSource:we("string","DocumentSnapshot"),bundleName:we("string"),bundle:we("string")};class qr extends wn{data(e={}){return super.data(e)}}class zn{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ls(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new qr(this._firestore,this._userDataWriter,s.key,s,new Ls(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let c=0;return r._snapshot.docChanges.map((l=>{const h=new qr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Ls(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:c++}}))}{let c=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const h=new qr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Ls(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let m=-1,f=-1;return l.type!==0&&(m=c.indexOf(l.doc.key),c=c.delete(l.doc.key)),l.type!==1&&(c=c.add(l.doc),f=c.indexOf(l.doc.key)),{type:Dv(l.type),doc:h,oldIndex:m,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_o.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Dv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n){n=En(n,be);const e=En(n.firestore,Ui);return yv($o(e),n._key).then((t=>Ov(e,n,t)))}zn._jsonSchemaVersion="firestore/querySnapshot/1.0",zn._jsonSchema={type:we("string",zn._jsonSchemaVersion),bundleSource:we("string","QuerySnapshot"),bundleName:we("string"),bundle:we("string")};class zm extends Pv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ze(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function gi(n){n=En(n,Pn);const e=En(n.firestore,Ui),t=$o(e),s=new zm(e);return Cv(n._query),xv(t,n._query).then((r=>new zn(e,s,n,r)))}function qu(n,e,t,...s){n=En(n,be);const r=En(n.firestore,Ui),i=Um(r);let c;return c=typeof(e=ye(e))=="string"||e instanceof Bi?Tv(i,"updateDoc",n._key,e,t,s):Iv(i,"updateDoc",n._key,e),Vv(r,[c.toMutation(n._key,St.exists(!0))])}function Vv(n,e){return(function(s,r){const i=new At;return s.asyncQueue.enqueueAndForget((async()=>iv(await gv(s),r,i))),i.promise})($o(n),e)}function Ov(n,e,t){const s=t.docs.get(e._key),r=new zm(n);return new wn(n,r,e._key,s,new Ls(t.hasPendingWrites,t.fromCache),e.converter)}function $u(){return new Ho("serverTimestamp")}(function(e,t=!0){(function(r){os=r})(rs),bt(new at("firestore",((s,{instanceIdentifier:r,options:i})=>{const c=s.getProvider("app").getImmediate(),l=new Ui(new T_(s.getProvider("auth-internal")),new S_(c,s.getProvider("app-check-internal")),(function(m,f){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new M(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Js(m.options.projectId,f)})(c,r),c);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),et($l,Wl,e),et($l,Wl,"esm2020")})();const Gm="@firebase/installations",Yo="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=1e4,Qm=`w:${Yo}`,Ym="FIS_v2",Mv="https://firebaseinstallations.googleapis.com/v1",Lv=3600*1e3,Fv="installations",Uv="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Tn=new An(Fv,Uv,Bv);function Jm(n){return n instanceof lt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm({projectId:n}){return`${Mv}/projects/${n}/installations`}function Zm(n){return{token:n.token,requestStatus:2,expiresIn:$v(n.expiresIn),creationTime:Date.now()}}async function ef(n,e){const s=(await e.json()).error;return Tn.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function tf({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function qv(n,{refreshToken:e}){const t=tf(n);return t.append("Authorization",Wv(e)),t}async function nf(n){const e=await n();return e.status>=500&&e.status<600?n():e}function $v(n){return Number(n.replace("s","000"))}function Wv(n){return`${Ym} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Xm(n),r=tf(n),i=e.getImmediate({optional:!0});if(i){const m=await i.getHeartbeatsHeader();m&&r.append("x-firebase-client",m)}const c={fid:t,authVersion:Ym,appId:n.appId,sdkVersion:Qm},l={method:"POST",headers:r,body:JSON.stringify(c)},h=await nf(()=>fetch(s,l));if(h.ok){const m=await h.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:Zm(m.authToken)}}else throw await ef("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=/^[cdef][\w-]{21}$/,so="";function Kv(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Qv(n);return Gv.test(t)?t:so}catch{return so}}function Qv(n){return zv(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=new Map;function af(n,e){const t=zi(n);of(t,e),Yv(t,e)}function of(n,e){const t=rf.get(n);if(t)for(const s of t)s(e)}function Yv(n,e){const t=Jv();t&&t.postMessage({key:n,fid:e}),Xv()}let _n=null;function Jv(){return!_n&&"BroadcastChannel"in self&&(_n=new BroadcastChannel("[Firebase] FID Change"),_n.onmessage=n=>{of(n.data.key,n.data.fid)}),_n}function Xv(){rf.size===0&&_n&&(_n.close(),_n=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="firebase-installations-database",eE=1,Nn="firebase-installations-store";let Ia=null;function Jo(){return Ia||(Ia=Ch(Zv,eE,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Nn)}}})),Ia}async function yi(n,e){const t=zi(n),r=(await Jo()).transaction(Nn,"readwrite"),i=r.objectStore(Nn),c=await i.get(t);return await i.put(e,t),await r.done,(!c||c.fid!==e.fid)&&af(n,e.fid),e}async function cf(n){const e=zi(n),s=(await Jo()).transaction(Nn,"readwrite");await s.objectStore(Nn).delete(e),await s.done}async function Gi(n,e){const t=zi(n),r=(await Jo()).transaction(Nn,"readwrite"),i=r.objectStore(Nn),c=await i.get(t),l=e(c);return l===void 0?await i.delete(t):await i.put(l,t),await r.done,l&&(!c||c.fid!==l.fid)&&af(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(n){let e;const t=await Gi(n.appConfig,s=>{const r=tE(s),i=nE(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===so?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function tE(n){const e=n||{fid:Kv(),registrationStatus:0};return lf(e)}function nE(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Tn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=sE(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:rE(n)}:{installationEntry:e}}async function sE(n,e){try{const t=await Hv(n,e);return yi(n.appConfig,t)}catch(t){throw Jm(t)&&t.customData.serverCode===409?await cf(n.appConfig):await yi(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function rE(n){let e=await Wu(n.appConfig);for(;e.registrationStatus===1;)await sf(100),e=await Wu(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Xo(n);return s||t}return e}function Wu(n){return Gi(n,e=>{if(!e)throw Tn.create("installation-not-found");return lf(e)})}function lf(n){return iE(n)?{fid:n.fid,registrationStatus:0}:n}function iE(n){return n.registrationStatus===1&&n.registrationTime+Km<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE({appConfig:n,heartbeatServiceProvider:e},t){const s=oE(n,t),r=qv(n,t),i=e.getImmediate({optional:!0});if(i){const m=await i.getHeartbeatsHeader();m&&r.append("x-firebase-client",m)}const c={installation:{sdkVersion:Qm,appId:n.appId}},l={method:"POST",headers:r,body:JSON.stringify(c)},h=await nf(()=>fetch(s,l));if(h.ok){const m=await h.json();return Zm(m)}else throw await ef("Generate Auth Token",h)}function oE(n,{fid:e}){return`${Xm(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(n,e=!1){let t;const s=await Gi(n.appConfig,i=>{if(!uf(i))throw Tn.create("not-registered");const c=i.authToken;if(!e&&uE(c))return i;if(c.requestStatus===1)return t=cE(n,e),i;{if(!navigator.onLine)throw Tn.create("app-offline");const l=dE(i);return t=lE(n,l),l}});return t?await t:s.authToken}async function cE(n,e){let t=await Hu(n.appConfig);for(;t.authToken.requestStatus===1;)await sf(100),t=await Hu(n.appConfig);const s=t.authToken;return s.requestStatus===0?Zo(n,e):s}function Hu(n){return Gi(n,e=>{if(!uf(e))throw Tn.create("not-registered");const t=e.authToken;return mE(t)?{...e,authToken:{requestStatus:0}}:e})}async function lE(n,e){try{const t=await aE(n,e),s={...e,authToken:t};return await yi(n.appConfig,s),t}catch(t){if(Jm(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await cf(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await yi(n.appConfig,s)}throw t}}function uf(n){return n!==void 0&&n.registrationStatus===2}function uE(n){return n.requestStatus===2&&!hE(n)}function hE(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Lv}function dE(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function mE(n){return n.requestStatus===1&&n.requestTime+Km<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(n){const e=n,{installationEntry:t,registrationPromise:s}=await Xo(e);return s?s.catch(console.error):Zo(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pE(n,e=!1){const t=n;return await gE(t),(await Zo(t,e)).token}async function gE(n){const{registrationPromise:e}=await Xo(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(n){if(!n||!n.options)throw Ta("App Configuration");if(!n.name)throw Ta("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ta(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ta(n){return Tn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="installations",xE="installations-internal",_E=n=>{const e=n.getProvider("app").getImmediate(),t=yE(e),s=Sn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},wE=n=>{const e=n.getProvider("app").getImmediate(),t=Sn(e,hf).getImmediate();return{getId:()=>fE(t),getToken:r=>pE(t,r)}};function bE(){bt(new at(hf,_E,"PUBLIC")),bt(new at(xE,wE,"PRIVATE"))}bE();et(Gm,Yo);et(Gm,Yo,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="analytics",vE="firebase_id",EE="origin",IE=60*1e3,TE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ec="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new wi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Je=new An("analytics","Analytics",NE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(n){if(!n.startsWith(ec)){const e=Je.create("invalid-gtag-resource",{gtagURL:n});return ze.warn(e.message),""}return n}function df(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function SE(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function kE(n,e){const t=SE("firebase-js-sdk-policy",{createScriptURL:AE}),s=document.createElement("script"),r=`${ec}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function RE(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function CE(n,e,t,s,r,i){const c=s[r];try{if(c)await e[c];else{const h=(await df(t)).find(m=>m.measurementId===r);h&&await e[h.appId]}}catch(l){ze.error(l)}n("config",r,i)}async function jE(n,e,t,s,r){try{let i=[];if(r&&r.send_to){let c=r.send_to;Array.isArray(c)||(c=[c]);const l=await df(t);for(const h of c){const m=l.find(x=>x.measurementId===h),f=m&&e[m.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",s,r||{})}catch(i){ze.error(i)}}function PE(n,e,t,s){async function r(i,...c){try{if(i==="event"){const[l,h]=c;await jE(n,e,t,l,h)}else if(i==="config"){const[l,h]=c;await CE(n,e,t,s,l,h)}else if(i==="consent"){const[l,h]=c;n("consent",l,h)}else if(i==="get"){const[l,h,m]=c;n("get",l,h,m)}else if(i==="set"){const[l]=c;n("set",l)}else n(i,...c)}catch(l){ze.error(l)}}return r}function DE(n,e,t,s,r){let i=function(...c){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=PE(i,n,e,t),{gtagCore:i,wrappedGtag:window[r]}}function VE(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ec)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=30,ME=1e3;class LE{constructor(e={},t=ME){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const mf=new LE;function FE(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function UE(n){var c;const{appId:e,apiKey:t}=n,s={method:"GET",headers:FE(t)},r=TE.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let l="";try{const h=await i.json();(c=h.error)!=null&&c.message&&(l=h.error.message)}catch{}throw Je.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function BE(n,e=mf,t){const{appId:s,apiKey:r,measurementId:i}=n.options;if(!s)throw Je.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Je.create("no-api-key")}const c=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new WE;return setTimeout(async()=>{l.abort()},IE),ff({appId:s,apiKey:r,measurementId:i},c,l,e)}async function ff(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=mf){var l;const{appId:i,measurementId:c}=n;try{await qE(s,e)}catch(h){if(c)return ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:i,measurementId:c};throw h}try{const h=await UE(n);return r.deleteThrottleMetadata(i),h}catch(h){const m=h;if(!$E(m)){if(r.deleteThrottleMetadata(i),c)return ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:i,measurementId:c};throw h}const f=Number((l=m==null?void 0:m.customData)==null?void 0:l.httpStatus)===503?ml(t,r.intervalMillis,OE):ml(t,r.intervalMillis),x={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return r.setThrottleMetadata(i,x),ze.debug(`Calling attemptFetch again in ${f} millis`),ff(n,x,s,r)}}function qE(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s(Je.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $E(n){if(!(n instanceof lt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class WE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function HE(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const i=await e,c={...s,send_to:i};n("event",t,c)}}async function zE(n,e,t,s){if(s&&s.global){const r={};for(const i of Object.keys(t))r[`user_properties.${i}`]=t[i];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GE(){if(Ah())try{await Sh()}catch(n){return ze.warn(Je.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return ze.warn(Je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function KE(n,e,t,s,r,i,c){const l=BE(n);l.then(b=>{t[b.measurementId]=b.appId,n.options.measurementId&&b.measurementId!==n.options.measurementId&&ze.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>ze.error(b)),e.push(l);const h=GE().then(b=>{if(b)return s.getId()}),[m,f]=await Promise.all([l,h]);VE(i)||kE(i,m.measurementId),r("js",new Date);const x=(c==null?void 0:c.config)??{};return x[EE]="firebase",x.update=!0,f!=null&&(x[vE]=f),r("config",m.measurementId,x),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.app=e}_delete(){return delete Gn[this.app.options.appId],Promise.resolve()}}let Gn={},zu=[];const Gu={};let Na="dataLayer",YE="gtag",Ku,tc,Qu=!1;function JE(){const n=[];if(Nh()&&n.push("This is a browser extension environment."),$g()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=Je.create("invalid-analytics-context",{errorInfo:e});ze.warn(t.message)}}function XE(n,e,t){JE();const s=n.options.appId;if(!s)throw Je.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Je.create("no-api-key");if(Gn[s]!=null)throw Je.create("already-exists",{id:s});if(!Qu){RE(Na);const{wrappedGtag:i,gtagCore:c}=DE(Gn,zu,Gu,Na,YE);tc=i,Ku=c,Qu=!0}return Gn[s]=KE(n,zu,Gu,e,Ku,Na,t),new QE(n)}function ZE(n=co()){n=ye(n);const e=Sn(n,xi);return e.isInitialized()?e.getImmediate():eI(n)}function eI(n,e={}){const t=Sn(n,xi);if(t.isInitialized()){const r=t.getImmediate();if(Xt(e,t.getOptions()))return r;throw Je.create("already-initialized")}return t.initialize({options:e})}function tI(n,e,t){n=ye(n),zE(tc,Gn[n.app.options.appId],e,t).catch(s=>ze.error(s))}function nI(n,e,t,s){n=ye(n),HE(tc,Gn[n.app.options.appId],e,t,s).catch(r=>ze.error(r))}const Yu="@firebase/analytics",Ju="0.10.19";function sI(){bt(new at(xi,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return XE(s,r,t)},"PUBLIC")),bt(new at("analytics-internal",n,"PRIVATE")),et(Yu,Ju),et(Yu,Ju,"esm2020");function n(e){try{const t=e.getProvider(xi).getImmediate();return{logEvent:(s,r,i)=>nI(t,s,r,i),setUserProperties:(s,r)=>tI(t,s,r)}}catch(t){throw Je.create("interop-component-reg-failed",{reason:t})}}}sI();const ro={apiKey:"AIzaSyBkMktbTfBNIdhtBwCC_cRBEavKeuTyCGA",authDomain:"myschola-5ec1f.firebaseapp.com",projectId:"myschola-5ec1f",storageBucket:"myschola-5ec1f.appspot.com",messagingSenderId:"927860875256",appId:"1:927860875256:web:ce73f8eabd09cac6f3400d",measurementId:"G-XTC703H7RN"};if(!ro.apiKey||!ro.projectId)throw console.error("Firebase configuration is missing. Please check your .env file."),new Error("Firebase configuration error");const nc=jh(ro),tt=b_(nc),me=wv(nc);ZE(nc);function rI(){const[n,e]=k.useState(""),[t,s]=k.useState(!1),[r,i]=k.useState(!0),c=an(),l=on(),h=async f=>{var C,P;if((await Ce(Se(me,"admins",f))).exists())return c("/admin",{replace:!0}),!0;if((await Ce(Se(me,"teachers",f))).exists())return c("/admin",{replace:!0}),!0;if((await Ce(Se(me,"students",f))).exists()){const j=((P=(C=l.state)==null?void 0:C.from)==null?void 0:P.pathname)||"/app/dashboard";return c(j,{replace:!0}),!0}return!1};k.useEffect(()=>{(async()=>{try{await tt.signOut()}catch(x){console.error("Error signing out existing session:",x)}finally{i(!1)}})()},[]);const m=async f=>{f.preventDefault(),e(""),s(!0);const x=new FormData(f.currentTarget),b=x.get("email"),N=x.get("password");try{console.log("Attempting to sign in with email:",b);const P=(await o0(tt,b,N)).user;console.log("Sign in successful. User UID:",P.uid),await h(P.uid)||(console.error("No role document found for UID:",P.uid),await tt.signOut(),e("Profile not found. Please contact your administrator."))}catch(C){console.error(C),C.code==="auth/invalid-email"?e("Please enter a valid email address."):C.code==="auth/user-not-found"?e("No account found with this email. Please contact your teacher to create an account."):C.code==="auth/wrong-password"?e("Incorrect password. Please try again."):C.code==="auth/invalid-credential"?e("Invalid email or password. Please try again."):e(C.message||"Failed to sign in. Please try again.")}finally{s(!1)}};return r?o.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),o.jsx("p",{className:"mt-4 text-gray-600",children:"Checking authentication..."})]})}):o.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[o.jsx("div",{className:"flex justify-center",children:o.jsxs(He,{to:"/",className:"flex items-center",children:[o.jsx(Kn,{className:"h-12 w-12 text-blue-600"}),o.jsx("span",{className:"ml-2 text-3xl font-bold text-gray-900",children:"MySchola"})]})}),o.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"}),o.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Students: Use the email and password provided by your teacher"})]}),o.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:o.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[o.jsxs("form",{className:"space-y-6",onSubmit:m,children:[n&&o.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative",role:"alert",children:o.jsx("span",{className:"block sm:inline",children:n})}),o.jsxs("div",{children:[o.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),o.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[o.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:o.jsx(Wr,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),o.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"you@example.com"})]})]}),o.jsxs("div",{children:[o.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),o.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[o.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:o.jsx(ao,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),o.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"********"})]})]}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center",children:[o.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),o.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),o.jsx("div",{className:"text-sm",children:o.jsx("a",{href:"#",className:"font-medium text-blue-600 hover:text-blue-500",children:"Forgot your password?"})})]}),o.jsx("div",{children:o.jsx("button",{type:"submit",disabled:t,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed",children:t?"Please wait...":"Sign in"})})]}),o.jsx("div",{className:"mt-6",children:o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"absolute inset-0 flex items-center",children:o.jsx("div",{className:"w-full border-t border-gray-300"})}),o.jsx("div",{className:"relative flex justify-center text-sm",children:o.jsx("span",{className:"px-2 bg-white text-gray-500",children:o.jsxs(He,{to:"/",className:"flex items-center hover:text-gray-900 transition",children:[o.jsx(it,{className:"h-4 w-4 mr-1"}),"Back to Home"]})})})]})})]})})]})}function Aa({children:n}){const[e,t]=k.useState(!0),[s,r]=k.useState(!1),[i,c]=k.useState(!1),l=on();return k.useEffect(()=>{const h=Ei(tt,async m=>{if(m)try{(await Ce(Se(me,"students",m.uid))).exists()?(r(!0),c(!0)):(r(!1),c(!1))}catch(f){console.error("Error checking student status:",f),r(!1),c(!1)}else r(!1),c(!1);t(!1)});return()=>h()},[]),e?o.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),o.jsx("p",{className:"mt-4 text-gray-600",children:"Loading..."})]})}):!s||!i?o.jsx(Kf,{to:"/login",state:{from:l},replace:!0}):n}const iI=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?xp:e.includes("english")||e.includes("literature")||e.includes("language")?pp:e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?Op:e.includes("geography")||e.includes("geography")?Lp:e.includes("history")?Bp:e.includes("music")?Xp:e.includes("art")||e.includes("design")?eg:e.includes("language")||e.includes("french")||e.includes("spanish")||e.includes("german")?$p:e.includes("computer")||e.includes("ict")||e.includes("it")?lp:Kn},aI=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?"bg-blue-50 border-blue-200 text-blue-700":e.includes("english")||e.includes("literature")||e.includes("language")?"bg-purple-50 border-purple-200 text-purple-700":e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?"bg-green-50 border-green-200 text-green-700":e.includes("geography")?"bg-cyan-50 border-cyan-200 text-cyan-700":e.includes("history")?"bg-amber-50 border-amber-200 text-amber-700":e.includes("music")?"bg-pink-50 border-pink-200 text-pink-700":e.includes("art")||e.includes("design")?"bg-rose-50 border-rose-200 text-rose-700":"bg-gray-50 border-gray-200 text-gray-700"},pf="subjectAccess",oI=()=>{try{const n=localStorage.getItem(pf),e=n?JSON.parse(n):[];return Array.isArray(e)?e:[]}catch{return[]}},cI=n=>{localStorage.setItem(pf,JSON.stringify(n))},Xu=n=>(n==null?void 0:n.pin)||(n==null?void 0:n.accessPin)||"";function lI(){const n=an(),[e,t]=k.useState(null),[s,r]=k.useState([]),[i,c]=k.useState(!0),[l,h]=k.useState(""),[m,f]=k.useState(null),[x,b]=k.useState(oI()),[N,C]=k.useState(null),[P,j]=k.useState(""),[O,D]=k.useState("");k.useEffect(()=>{(async()=>{try{const g=tt.currentUser;if(!g){n("/login");return}const v=await Ce(Se(me,"students",g.uid));if(!v.exists()){h("Student profile not found"),c(!1);return}const E=v.data();if(t(E),console.log("Student data:",E),console.log("Student subjects array:",E.subjects),E.subjects&&E.subjects.length>0){const y=(await Promise.all(E.subjects.map(async q=>{try{const J=await Ce(Se(me,"subjects",q));return J.exists()?{id:J.id,...J.data()}:(console.warn(`Subject document not found for ID: ${q}`),null)}catch(J){return console.error(`Error fetching subject ${q}:`,J),null}}))).filter(q=>q!==null);console.log("Loaded subjects:",y),console.log("Expected subjects:",E.subjects),console.log("Missing subjects:",E.subjects.filter(q=>!y.some(J=>J.id===q))),r(y),y.length!==E.subjects.length&&f({expected:E.subjects.length,loaded:y.length,missing:E.subjects.filter(q=>!y.some(J=>J.id===q))})}else console.log("No subjects array found in student data");c(!1)}catch(g){console.error("Error loading student data:",g),h("Failed to load dashboard data"),c(!1)}})()},[n]);const F=_=>!String(Xu(_)||"").trim()||x.includes(_.id),Q=_=>{C(_),j(""),D("")},ce=_=>{const g=String(Xu(_)||"").trim();if(g&&P.trim()!==g){D("Incorrect PIN");return}const v=Array.from(new Set([...x,_.id]));b(v),cI(v),C(null),j(""),D("")},ne=()=>{C(null),j(""),D("")},I=async()=>{try{await u0(tt),n("/login",{replace:!0})}catch(_){console.error("Error signing out:",_)}};return i?o.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",role:"status","aria-live":"polite",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto","aria-hidden":"true"}),o.jsx("p",{className:"mt-4 text-gray-600","aria-label":"Loading dashboard",children:"Loading your dashboard..."})]})}):l?o.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:o.jsxs("div",{className:"text-center",children:[o.jsx("p",{className:"text-red-600 mb-4",children:l}),o.jsx("button",{onClick:I,className:"text-blue-600 hover:text-blue-700 underline",children:"Sign out and try again"})]})}):o.jsxs("div",{className:"min-h-screen bg-gray-50",children:[o.jsx("header",{className:"bg-white shadow-sm",role:"banner",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx($r,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"MySchola Student Dashboard"}),o.jsxs("p",{className:"text-sm text-gray-500",children:["Hi, ",o.jsx("span",{className:"font-medium",children:(e==null?void 0:e.name)||"Student"})]})]})]}),o.jsxs("nav",{className:"flex items-center gap-3","aria-label":"Dashboard navigation",children:[o.jsx(He,{to:"/",className:"text-sm text-gray-600 hover:text-gray-900 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition","aria-label":"Return to homepage",children:"Back to site"}),o.jsxs("button",{onClick:I,className:"inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition","aria-label":"Sign out of your account",children:[o.jsx(zp,{className:"h-4 w-4","aria-hidden":"true"}),"Sign out"]})]})]})}),o.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[o.jsxs("div",{className:"mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Your Subjects"}),o.jsx("p",{className:"text-gray-600",children:"Select a subject to join Zoom sessions, watch recordings, or download homework."})]}),m&&o.jsxs("div",{className:"mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4",role:"alert","aria-live":"polite",children:[o.jsx("p",{className:"text-sm text-yellow-800 font-medium mb-1",children:"Some subjects may not be loading correctly"}),o.jsxs("p",{className:"text-xs text-yellow-700",children:["Expected ",m.expected," subject(s), loaded ",m.loaded,". Please check the browser console for details."]})]}),s.length===0?o.jsxs("div",{className:"bg-white rounded-lg shadow p-8 text-center",role:"region","aria-labelledby":"no-subjects-heading",children:[o.jsx($r,{className:"h-12 w-12 text-gray-400 mx-auto mb-4","aria-hidden":"true"}),o.jsx("h3",{id:"no-subjects-heading",className:"text-lg font-semibold text-gray-900 mb-2",children:"No Subjects Enrolled"}),o.jsx("p",{className:"text-gray-600 mb-2",children:"You're not enrolled in any subjects yet."}),o.jsx("p",{className:"text-sm text-gray-500",children:"Please contact your teacher to get enrolled."})]}):o.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",role:"list","aria-label":"Enrolled subjects",children:s.map(_=>{const g=iI(_.name),v=aI(_.name);return o.jsxs("article",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",role:"listitem",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx("div",{className:`p-2 rounded-lg ${v}`,children:o.jsx(g,{className:"h-6 w-6","aria-hidden":"true"})}),o.jsx("h3",{className:"text-xl font-semibold text-gray-900 flex-1",children:_.name})]}),o.jsx("div",{className:"space-y-3",children:F(_)?o.jsxs(o.Fragment,{children:[_.zoomLink&&o.jsxs("a",{href:_.zoomLink,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`Join Zoom session for ${_.name}`,children:[o.jsx(Pp,{className:"h-4 w-4","aria-hidden":"true"}),"Join Zoom"]}),o.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[o.jsxs(He,{to:`/app/subject/${_.id}/recordings`,className:"flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`View recordings for ${_.name}`,children:[o.jsx(Qn,{className:"h-4 w-4","aria-hidden":"true"}),"Recordings"]}),o.jsxs(He,{to:`/app/subject/${_.id}/homework`,className:"flex items-center justify-center gap-2 text-green-600 hover:text-green-700 px-4 py-2 border border-green-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition font-medium","aria-label":`View homework for ${_.name}`,children:[o.jsx(Hs,{className:"h-4 w-4","aria-hidden":"true"}),"Homework"]})]})]}):o.jsxs("div",{className:"space-y-3",children:[o.jsx("p",{className:"text-sm text-gray-600",children:"This subject is locked. Enter the PIN to unlock."}),N===_.id?o.jsxs("div",{className:"space-y-2",children:[o.jsx("input",{type:"password",value:P,onChange:E=>j(E.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Subject PIN"}),O&&o.jsx("p",{className:"text-sm text-red-600",children:O}),o.jsxs("div",{className:"flex flex-wrap gap-2",children:[o.jsx("button",{type:"button",onClick:()=>ce(_),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Unlock"}),o.jsx("button",{type:"button",onClick:ne,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Cancel"})]})]}):o.jsx("button",{type:"button",onClick:()=>Q(_.id),className:"w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Enter PIN"})]})})]},_.id)})})]})]})}const gf="subjectAccess",uI=()=>{try{const n=localStorage.getItem(gf),e=n?JSON.parse(n):[];return Array.isArray(e)?e:[]}catch{return[]}},hI=n=>{localStorage.setItem(gf,JSON.stringify(n))},dI=n=>(n==null?void 0:n.pin)||(n==null?void 0:n.accessPin)||"";function mI(){const{subjectId:n}=ch(),e=an(),[t,s]=k.useState([]),[r,i]=k.useState([]),[c,l]=k.useState(null),[h,m]=k.useState(!0),[f,x]=k.useState(""),[b,N]=k.useState(!1),[C,P]=k.useState(""),[j,O]=k.useState(""),[D,F]=k.useState(""),[Q,ce]=k.useState(uI()),[ne,I]=k.useState(0);k.useEffect(()=>{const w=async()=>{try{if(!tt.currentUser){e("/login");return}const q=Se(me,"subjects",n),J=await Ce(q);if(J.exists()){const ae={id:n,...J.data()};l(ae);const Pe=dI(ae);if(F(Pe),!(!Pe||Q.includes(n))){N(!0),m(!1);return}}let Be;try{Be=fi(sr(me,"recordings"),pi("subjectId","==",n),jv("date","desc"))}catch(ae){console.warn("OrderBy failed, using simple query:",ae),Be=fi(sr(me,"recordings"),pi("subjectId","==",n))}const Ge=(await gi(Be)).docs.map(ae=>({id:ae.id,...ae.data()})).filter(ae=>ae.approvalStatus==="approved"||!ae.approvalStatus).sort((ae,Pe)=>{var ut,ht;const Et=(ut=ae.date)!=null&&ut.toDate?ae.date.toDate():ae.date?new Date(ae.date):new Date(0);return((ht=Pe.date)!=null&&ht.toDate?Pe.date.toDate():Pe.date?new Date(Pe.date):new Date(0))-Et});s(Ge),i(Ge),N(!1),m(!1)}catch(y){console.error("Error loading recordings:",y),x("Failed to load recordings"),m(!1)}};n&&(m(!0),x(""),w())},[n,e,Q,ne]);const _=w=>{w.preventDefault();const y=String(D||"").trim();if(!y){N(!1);return}if(C.trim()!==y){O("Incorrect PIN");return}const q=Array.from(new Set([...Q,n]));ce(q),hI(q),P(""),O(""),N(!1),I(J=>J+1)},g=()=>{var y;return c?(((y=c.name)==null?void 0:y.toLowerCase())||"").includes("english"):!1},v=()=>{const w={};return r.forEach(y=>{const q=y.examBoard||"Other",J=y.tier||(g()?"General":"Other"),Be=`${q}_${J}`;w[Be]||(w[Be]={examBoard:q,tier:J,recordings:[]}),w[Be].recordings.push(y)}),Object.values(w).sort((y,q)=>y.examBoard!==q.examBoard?y.examBoard==="AQA"?-1:q.examBoard==="AQA"?1:y.examBoard==="Edexcel"?-1:q.examBoard==="Edexcel"?1:y.examBoard.localeCompare(q.examBoard):y.tier==="Foundation"?-1:q.tier==="Foundation"?1:y.tier==="Higher"?-1:q.tier==="Higher"?1:y.tier.localeCompare(q.tier))},E=w=>w?(w.toDate?w.toDate():new Date(w)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"Date not available";return h?o.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),o.jsx("p",{className:"mt-4 text-gray-600",children:"Loading recordings..."})]})}):b?o.jsx("div",{className:"min-h-screen bg-gray-50",children:o.jsxs("div",{className:"max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[o.jsxs(He,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[o.jsx(it,{className:"h-4 w-4"}),"Back to Dashboard"]}),o.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[o.jsx("h1",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Enter Subject PIN"}),o.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"This subject is locked. Enter the PIN to access recordings."}),o.jsxs("form",{onSubmit:_,className:"space-y-4",children:[o.jsx("input",{type:"password",value:C,onChange:w=>P(w.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Subject PIN",autoFocus:!0}),j&&o.jsx("div",{className:"text-sm text-red-600",children:j}),o.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"Unlock Subject"})]})]})]})}):o.jsx("div",{className:"min-h-screen bg-gray-50",children:o.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[o.jsxs(He,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[o.jsx(it,{className:"h-4 w-4"}),"Back to Dashboard"]}),o.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[o.jsx(Qn,{className:"h-6 w-6 text-blue-600"}),o.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Recordings - ",(c==null?void 0:c.name)||"Subject"]})]}),o.jsx("p",{className:"text-gray-600",children:"Watch past lesson recordings for this subject."})]}),f&&o.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6",children:f}),r.length===0?o.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[o.jsx(Qn,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),o.jsx("p",{className:"text-gray-600",children:"No recordings available yet."}),o.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Check back later for new recordings."})]}):o.jsx("div",{className:"space-y-6",children:v().map((w,y)=>o.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",children:[o.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 px-6 py-4",children:o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx($r,{className:"h-5 w-5 text-blue-600"}),o.jsxs("div",{children:[o.jsxs("h3",{className:"text-lg font-semibold text-gray-900",children:[w.examBoard,!g()&&w.tier&&o.jsxs("span",{className:"ml-2 text-base font-normal text-gray-600",children:["- ",w.tier]})]}),o.jsxs("p",{className:"text-sm text-gray-600",children:[w.recordings.length," recording",w.recordings.length!==1?"s":""]})]})]})}),o.jsx("div",{className:"p-6 space-y-4",children:w.recordings.map(q=>o.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:o.jsxs("div",{className:"flex items-start justify-between",children:[o.jsxs("div",{className:"flex-1",children:[o.jsx("h4",{className:"text-base font-semibold text-gray-900 mb-2",children:q.title}),o.jsx("p",{className:"text-sm text-gray-500",children:E(q.date)})]}),o.jsxs("a",{href:q.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"ml-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap",children:[o.jsx(rg,{className:"h-4 w-4"}),"Watch"]})]})},q.id))})]},y))})]})})}function fI(){const{subjectId:n}=ch(),[e,t]=k.useState([]),[s,r]=k.useState(null),[i,c]=k.useState(!0),[l,h]=k.useState(null);k.useEffect(()=>{n&&(async()=>{try{const b=Se(me,"subjects",n),N=await Ce(b);N.exists()&&r({id:n,...N.data()});const C=fi(sr(me,"homeworks"),pi("subjectId","==",n)),j=(await gi(C)).docs.map(O=>({id:O.id,...O.data()}));t(j),c(!1)}catch(b){console.error("Error loading homework:",b),c(!1)}})()},[n]);const m=x=>x?(x.toDate?x.toDate():new Date(x)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"No due date",f=x=>x?(x.toDate?x.toDate():new Date(x))<new Date:!1;return i?o.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),o.jsx("p",{className:"mt-4 text-gray-600",children:"Loading homework..."})]})}):o.jsx("div",{className:"min-h-screen bg-gray-50",children:o.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[o.jsxs(He,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[o.jsx(it,{className:"h-4 w-4"}),"Back to Dashboard"]}),o.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[o.jsx(Hs,{className:"h-6 w-6 text-green-600"}),o.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Homework - ",(s==null?void 0:s.name)||"Subject"]})]}),o.jsx("p",{className:"text-gray-600",children:"Download your homework assignments."})]}),l?o.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[o.jsxs("div",{className:"flex items-center justify-between mb-6",children:[o.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:l.title}),o.jsx("button",{onClick:()=>{h(null)},className:"text-gray-600 hover:text-gray-900",children:"Close"})]}),l.description&&o.jsx("p",{className:"text-gray-600 mb-6",children:l.description}),o.jsxs("p",{className:"text-sm text-gray-500 mb-6",children:["Due: ",m(l.dueDate)]}),l.attachmentUrl&&o.jsxs("a",{href:l.attachmentUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6",children:[o.jsx(rl,{className:"h-5 w-5"}),"Download ",l.attachmentName||"homework file"]}),!l.attachmentUrl&&o.jsx("p",{className:"text-gray-600",children:"No homework file attached."})]}):o.jsx("div",{className:"space-y-4",children:e.length===0?o.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[o.jsx(Hs,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),o.jsx("p",{className:"text-gray-600",children:"No homework assignments available yet."})]}):e.map(x=>{const b=f(x.dueDate);return o.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:o.jsxs("div",{className:"flex items-start justify-between mb-4",children:[o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:x.title}),x.description&&o.jsx("p",{className:"text-gray-600 mb-2",children:x.description}),x.attachmentUrl&&o.jsxs("a",{href:x.attachmentUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-2",children:[o.jsx(rl,{className:"h-4 w-4"}),"Download ",x.attachmentName||"homework file"]}),o.jsx("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx(io,{className:"h-4 w-4"}),"Due: ",m(x.dueDate)]})}),b&&o.jsx("div",{className:"mt-3 text-red-600 text-sm font-medium",children:"Overdue"})]}),o.jsx("button",{onClick:()=>h(x),className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"View Details"})]})},x.id)})})]})})}const pI="myschola-5ec1f",gI=`https://us-central1-${pI}.cloudfunctions.net`,Zu=gI,yI=async()=>{const n=tt.currentUser;if(!n)throw new Error("User is not authenticated");return n.getIdToken()},sc=async(n,e)=>{if(!Zu)throw new Error("Functions base URL is not configured");const t=await yI(),s=await fetch(`${Zu}/${n}`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(e||{})});if(!s.ok){const r=await s.text();throw new Error(r||`Request failed (${s.status})`)}return s.json()},eh=n=>sc("createHidriveUpload",n),xI=n=>sc("createRecording",n),_I=n=>sc("createHomework",n);function wI(){const n=an(),[e,t]=k.useState(!1),[s,r]=k.useState(!0),[i,c]=k.useState([]),[l,h]=k.useState(""),[m,f]=k.useState(null),[x,b]=k.useState("recording"),[N,C]=k.useState(""),[P,j]=k.useState(null),[O,D]=k.useState(0),[F,Q]=k.useState(""),[ce,ne]=k.useState(""),[I,_]=k.useState([]),[g,v]=k.useState(""),[E,w]=k.useState(""),[y,q]=k.useState(""),[J,Be]=k.useState(null),[Pt,Ge]=k.useState(0),[ae,Pe]=k.useState(!1),[Et,ve]=k.useState("");k.useEffect(()=>{const U=Ei(tt,async H=>{if(!H){t(!1),r(!1),n("/login",{replace:!0});return}try{const se=await Ce(Se(me,"admins",H.uid)),ie=se.exists()?null:await Ce(Se(me,"teachers",H.uid));se.exists()||ie!=null&&ie.exists()?t(!0):(t(!1),n("/login",{replace:!0}))}catch(se){console.error("Error verifying role:",se),t(!1),n("/login",{replace:!0})}finally{r(!1)}});return()=>U()},[n]),k.useEffect(()=>{e&&(async()=>{try{const se=(await gi(sr(me,"subjects"))).docs.map(ie=>({id:ie.id,...ie.data()}));if(c(se),se.length>0){const ie=se[0];h(ie.id),f(ie)}}catch(H){console.error("Error loading subjects:",H)}})()},[e]),k.useEffect(()=>{(async()=>{if(x==="approve"&&e)try{const H=fi(sr(me,"recordings"),pi("approvalStatus","==","pending")),se=await gi(H),ie=await Promise.all(se.docs.map(async De=>{const le=De.data();let Te="Unknown";if(le.subjectId)try{const Ve=await Ce(De(me,"subjects",le.subjectId));Ve.exists()&&(Te=Ve.data().name)}catch(Ve){console.error("Error fetching subject:",Ve)}return{id:De.id,...le,subjectName:Te}}));_(ie)}catch(H){console.error("Error loading pending recordings:",H)}})()},[x,e]),k.useEffect(()=>{const U=i.find(H=>H.id===l);f(U||null),Q(""),ne("")},[l,i]);const ut=()=>{var H;return m?(((H=m.name)==null?void 0:H.toLowerCase())||"").includes("english"):!1},ht=(U,H,se)=>new Promise((ie,De)=>{if(!(H!=null&&H.uploadUrl)){De(new Error("Upload URL is missing"));return}const le=new XMLHttpRequest;le.open(H.method||"PUT",H.uploadUrl,!0),le.responseType="json",H.headers&&Object.entries(H.headers).forEach(([Te,Ve])=>{Ve&&le.setRequestHeader(Te,Ve)}),le.upload.onprogress=Te=>{if(Te.lengthComputable){const Ve=Math.round(Te.loaded/Te.total*100);se&&se(Ve)}},le.onload=()=>{if(le.status>=200&&le.status<300){se&&se(100);let Te=le.response;if(!Te&&le.responseText)try{Te=JSON.parse(le.responseText)}catch{Te=null}ie({response:Te})}else De(new Error(`Upload failed (${le.status})`))},le.onerror=()=>{De(new Error("Upload failed"))},le.send(U)}),ds=async U=>{if(U.preventDefault(),!l||!N||!F){ve("Please fill in all required fields");return}if(!P){ve("Please upload a video file to continue");return}if(!ut()&&!ce){ve("Please select a tier (Foundation or Higher)");return}Pe(!0),ve("");try{D(0);const H=await eh({subjectId:l,fileName:P.name,contentType:P.type,uploadType:"recording"}),se=await ht(P,H,D),ie=se==null?void 0:se.response,De=(ie==null?void 0:ie.id)||(ie==null?void 0:ie.pid)||(ie==null?void 0:ie.file_id)||null,le={subjectId:l,title:N,examBoard:F,tier:ut()?null:ce,hidrivePath:H.hidrivePath,hidriveFileId:De,fileName:P.name};sessionStorage.setItem("pendingRecording",JSON.stringify(le)),C(""),j(null),D(0),Q(""),ne(""),n("/admin/share-link",{state:{pendingRecording:le}})}catch(H){console.error("Error adding recording:",H),ve("Failed to upload recording"),D(0)}finally{Pe(!1)}},ms=async U=>{try{await qu(Se(me,"recordings",U),{approvalStatus:"approved",approvedAt:$u()}),_(I.filter(H=>H.id!==U)),ve("Recording approved successfully!"),setTimeout(()=>ve(""),3e3)}catch(H){console.error("Error approving recording:",H),ve("Failed to approve recording")}},fs=async U=>{try{await qu(Se(me,"recordings",U),{approvalStatus:"rejected",rejectedAt:$u()}),_(I.filter(H=>H.id!==U)),ve("Recording rejected"),setTimeout(()=>ve(""),3e3)}catch(H){console.error("Error rejecting recording:",H),ve("Failed to reject recording")}},ps=async U=>{if(U.preventDefault(),!l||!g){ve("Please fill in all required fields");return}if(!J){ve("Please upload a homework file");return}Pe(!0),ve("");try{let H=null,se=null,ie=null,De=null,le=null;if(J){Ge(0);const Ve=await eh({subjectId:l,fileName:J.name,contentType:J.type,uploadType:"homework"}),un=await ht(J,Ve,Ge),Xe=un==null?void 0:un.response;se=(Xe==null?void 0:Xe.id)||(Xe==null?void 0:Xe.pid)||(Xe==null?void 0:Xe.file_id)||null,H=Ve.hidrivePath,ie=J.name,De=J.type,le=J.size}const Te={subjectId:l,title:g,description:E,dueDate:y?new Date(y).toISOString():null,attachmentName:ie,attachmentContentType:De,attachmentSize:le,hidrivePath:H,hidriveFileId:se,fileName:J.name};sessionStorage.setItem("pendingHomework",JSON.stringify(Te)),v(""),w(""),q(""),Be(null),Ge(0),n("/admin/homework-share-link",{state:{pendingHomework:Te}})}catch(H){console.error("Error adding homework:",H),ve("Failed to add homework")}finally{Pe(!1)}};return s?o.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),o.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):e?o.jsx("div",{className:"min-h-screen bg-gray-50",children:o.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[o.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Admin Panel"}),o.jsx("button",{onClick:async()=>{await tt.signOut(),n("/login",{replace:!0})},className:"text-gray-600 hover:text-gray-900 underline text-sm",children:"Sign out"})]})}),o.jsxs("div",{className:"flex gap-2 mb-6 flex-wrap",children:[o.jsxs("button",{onClick:()=>b("recording"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${x==="recording"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[o.jsx(Qn,{className:"h-4 w-4"}),"Add Recording"]}),o.jsxs("button",{onClick:()=>b("homework"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${x==="homework"?"bg-green-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[o.jsx(Hs,{className:"h-4 w-4"}),"Add Homework"]}),o.jsxs("button",{onClick:()=>b("approve"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition relative ${x==="approve"?"bg-purple-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[o.jsx(Nt,{className:"h-4 w-4"}),"Approve Recordings",I.length>0&&o.jsx("span",{className:"ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5",children:I.length})]})]}),Et&&o.jsx("div",{className:`mb-6 p-4 rounded-lg ${Et.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:Et}),o.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Select Subject"}),o.jsx("select",{value:l,onChange:U=>h(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:i.map(U=>o.jsx("option",{value:U.id,children:U.name},U.id))})]}),x==="recording"&&o.jsxs("form",{onSubmit:ds,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[o.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Recording"}),o.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Recordings will be pending approval before students can view them."}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),o.jsx("input",{type:"text",value:N,onChange:U=>C(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"e.g., Algebra Basics - Lesson 1",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Exam Board *"}),o.jsxs("select",{value:F,onChange:U=>Q(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[o.jsx("option",{value:"",children:"Select Exam Board"}),o.jsx("option",{value:"AQA",children:"AQA"}),o.jsx("option",{value:"Edexcel",children:"Edexcel"})]})]}),!ut()&&o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Tier *"}),o.jsxs("select",{value:ce,onChange:U=>ne(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[o.jsx("option",{value:"",children:"Select Tier"}),o.jsx("option",{value:"Foundation",children:"Foundation"}),o.jsx("option",{value:"Higher",children:"Higher"})]})]}),ut()&&o.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:o.jsx("p",{className:"text-sm text-blue-800",children:"English subjects do not have Foundation/Higher tiers."})}),o.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700",children:"After upload, you will be taken to a new page to paste the HiDrive share link."}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Upload Video File"}),o.jsx("input",{type:"file",accept:"video/*",onChange:U=>{var se;const H=((se=U.target.files)==null?void 0:se[0])||null;j(H),D(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),O>0&&O<100&&o.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",O,"%"]})]})]}),o.jsxs("button",{type:"submit",disabled:ae,className:"mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[o.jsx(il,{className:"h-4 w-4"}),ae?"Adding...":"Add Recording (Pending Approval)"]})]}),x==="approve"&&o.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[o.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Approve Recordings"}),o.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Review and approve pending recordings. Only approved recordings will be visible to students."}),I.length===0?o.jsxs("div",{className:"text-center py-8",children:[o.jsx(Nt,{className:"h-12 w-12 text-green-500 mx-auto mb-4"}),o.jsx("p",{className:"text-gray-600",children:"No pending recordings to approve."})]}):o.jsx("div",{className:"space-y-4",children:I.map(U=>o.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:o.jsxs("div",{className:"flex items-start justify-between",children:[o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:U.title}),o.jsxs("div",{className:"space-y-1 text-sm text-gray-600",children:[o.jsxs("p",{children:[o.jsx("span",{className:"font-medium",children:"Subject:"})," ",U.subjectName]}),o.jsxs("p",{children:[o.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",U.examBoard]}),U.tier&&o.jsxs("p",{children:[o.jsx("span",{className:"font-medium",children:"Tier:"})," ",U.tier]}),U.date&&o.jsxs("p",{children:[o.jsx("span",{className:"font-medium",children:"Date:"})," ",U.date.toDate?U.date.toDate().toLocaleDateString("en-GB"):"N/A"]})]}),o.jsxs("a",{href:U.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm mt-2",children:[o.jsx(Qn,{className:"h-4 w-4"}),"Preview Video"]})]}),o.jsxs("div",{className:"flex gap-2 ml-4",children:[o.jsxs("button",{onClick:()=>ms(U.id),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2",children:[o.jsx(Nt,{className:"h-4 w-4"}),"Approve"]}),o.jsx("button",{onClick:()=>fs(U.id),className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition",children:"Reject"})]})]})},U.id))})]}),x==="homework"&&o.jsxs("form",{onSubmit:ps,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[o.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Homework"}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),o.jsx("input",{type:"text",value:g,onChange:U=>v(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Description"}),o.jsx("textarea",{value:E,onChange:U=>w(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",rows:"3"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Due Date"}),o.jsx("input",{type:"datetime-local",value:y,onChange:U=>q(U.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Homework File *"}),o.jsx("input",{type:"file",required:!0,onChange:U=>{var se;const H=((se=U.target.files)==null?void 0:se[0])||null;Be(H),Ge(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"}),Pt>0&&Pt<100&&o.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",Pt,"%"]})]}),o.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700",children:"After upload, you will be taken to a new page to paste the HiDrive share link."})]}),o.jsxs("button",{type:"submit",disabled:ae,className:"mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[o.jsx(il,{className:"h-4 w-4"}),ae?"Adding...":"Add Homework"]})]})]})}):null}const Sa="pendingRecording";function bI(){const n=an(),e=on(),[t,s]=k.useState(!0),[r,i]=k.useState(!1),[c,l]=k.useState(null),[h,m]=k.useState(""),[f,x]=k.useState(""),[b,N]=k.useState(""),[C,P]=k.useState(!1);k.useEffect(()=>{const O=Ei(tt,async D=>{if(!D){i(!1),s(!1),n("/login",{replace:!0});return}try{const F=await Ce(Se(me,"admins",D.uid)),Q=F.exists()?null:await Ce(Se(me,"teachers",D.uid));F.exists()||Q!=null&&Q.exists()?i(!0):(i(!1),n("/login",{replace:!0}))}catch(F){console.error("Error verifying role:",F),i(!1),n("/login",{replace:!0})}finally{s(!1)}});return()=>O()},[n]),k.useEffect(()=>{var F;const O=(F=e.state)==null?void 0:F.pendingRecording;if(O){sessionStorage.setItem(Sa,JSON.stringify(O)),l(O);return}const D=sessionStorage.getItem(Sa);if(D)try{l(JSON.parse(D))}catch{l(null)}},[e.state]),k.useEffect(()=>{(async()=>{if(c!=null&&c.subjectId)try{const D=await Ce(Se(me,"subjects",c.subjectId));D.exists()&&m(D.data().name||"")}catch(D){console.error("Error loading subject:",D)}})()},[c]);const j=async O=>{if(O.preventDefault(),!c){N("No pending upload found. Go back and upload again.");return}if(!f){N("Paste the HiDrive share link to continue.");return}P(!0),N("");try{const D=await xI({subjectId:c.subjectId,title:c.title,examBoard:c.examBoard,tier:c.tier,videoUrl:f,hidrivePath:c.hidrivePath,hidriveFileId:c.hidriveFileId});sessionStorage.removeItem(Sa);const F=(D==null?void 0:D.approvalStatus)==="approved"?"Recording added and approved!":"Recording added successfully! It will be visible to students after approval.";N(F)}catch(D){console.error("Error saving recording:",D),N("Failed to save recording")}finally{P(!1)}};return t?o.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),o.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):r?c?o.jsx("div",{className:"min-h-screen bg-gray-50",children:o.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[o.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[o.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Paste HiDrive Share Link"}),o.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Your upload is complete. Create a share link in HiDrive and paste it below."})]}),o.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[o.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Recording Details"}),o.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[o.jsxs("p",{children:[o.jsx("span",{className:"font-medium",children:"Title:"})," ",c.title]}),o.jsxs("p",{children:[o.jsx("span",{className:"font-medium",children:"Subject:"})," ",h||c.subjectId]}),o.jsxs("p",{children:[o.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",c.examBoard]}),c.tier&&o.jsxs("p",{children:[o.jsx("span",{className:"font-medium",children:"Tier:"})," ",c.tier]}),c.fileName&&o.jsxs("p",{children:[o.jsx("span",{className:"font-medium",children:"File:"})," ",c.fileName]})]})]}),o.jsxs("form",{onSubmit:j,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[o.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4",children:[o.jsx("p",{children:"1) Open HiDrive and find the uploaded file."}),o.jsx("p",{children:"2) Click Share -> Create link -> Copy link."}),o.jsx("p",{children:"3) Paste the link below and click Save Recording."})]}),o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HiDrive Share Link"}),o.jsx("input",{type:"url",value:f,onChange:O=>x(O.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://hidrive.ionos.com/lnk/...",required:!0}),b&&o.jsx("div",{className:`mt-4 p-3 rounded-md text-sm ${b.includes("successfully")||b.includes("approved")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:b}),o.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[o.jsx("button",{type:"submit",disabled:C,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:C?"Saving...":"Save Recording"}),o.jsx("button",{type:"button",onClick:()=>n("/admin"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Back to Admin"})]})]})]})}):o.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:o.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center",children:[o.jsx("p",{className:"text-gray-700 mb-4",children:"No pending upload found. Please upload a file first."}),o.jsx("button",{onClick:()=>n("/admin",{replace:!0}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Back to Admin"})]})}):null}const ka="pendingHomework";function vI(){const n=an(),e=on(),[t,s]=k.useState(!0),[r,i]=k.useState(!1),[c,l]=k.useState(null),[h,m]=k.useState(""),[f,x]=k.useState(""),[b,N]=k.useState(""),[C,P]=k.useState(!1);k.useEffect(()=>{const O=Ei(tt,async D=>{if(!D){i(!1),s(!1),n("/login",{replace:!0});return}try{const F=await Ce(Se(me,"admins",D.uid)),Q=F.exists()?null:await Ce(Se(me,"teachers",D.uid));F.exists()||Q!=null&&Q.exists()?i(!0):(i(!1),n("/login",{replace:!0}))}catch(F){console.error("Error verifying role:",F),i(!1),n("/login",{replace:!0})}finally{s(!1)}});return()=>O()},[n]),k.useEffect(()=>{var F;const O=(F=e.state)==null?void 0:F.pendingHomework;if(O){sessionStorage.setItem(ka,JSON.stringify(O)),l(O);return}const D=sessionStorage.getItem(ka);if(D)try{l(JSON.parse(D))}catch{l(null)}},[e.state]),k.useEffect(()=>{(async()=>{if(c!=null&&c.subjectId)try{const D=await Ce(Se(me,"subjects",c.subjectId));D.exists()&&m(D.data().name||"")}catch(D){console.error("Error loading subject:",D)}})()},[c]);const j=async O=>{if(O.preventDefault(),!c){N("No pending upload found. Go back and upload again.");return}if(!f){N("Paste the HiDrive share link to continue.");return}P(!0),N("");try{await _I({subjectId:c.subjectId,title:c.title,description:c.description,dueDate:c.dueDate||null,attachmentUrl:f,attachmentName:c.attachmentName||c.fileName||null,attachmentContentType:c.attachmentContentType||null,attachmentSize:c.attachmentSize||null,hidrivePath:c.hidrivePath,hidriveFileId:c.hidriveFileId}),sessionStorage.removeItem(ka),N("Homework added successfully!")}catch(D){console.error("Error saving homework:",D),N("Failed to save homework")}finally{P(!1)}};return t?o.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),o.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):r?c?o.jsx("div",{className:"min-h-screen bg-gray-50",children:o.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[o.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[o.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Paste HiDrive Share Link"}),o.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Your upload is complete. Create a share link in HiDrive and paste it below."})]}),o.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[o.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Homework Details"}),o.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[o.jsxs("p",{children:[o.jsx("span",{className:"font-medium",children:"Title:"})," ",c.title]}),o.jsxs("p",{children:[o.jsx("span",{className:"font-medium",children:"Subject:"})," ",h||c.subjectId]}),c.dueDate&&o.jsxs("p",{children:[o.jsx("span",{className:"font-medium",children:"Due:"})," ",new Date(c.dueDate).toLocaleString("en-GB")]}),c.fileName&&o.jsxs("p",{children:[o.jsx("span",{className:"font-medium",children:"File:"})," ",c.fileName]})]})]}),o.jsxs("form",{onSubmit:j,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[o.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4",children:[o.jsx("p",{children:"1) Open HiDrive and find the uploaded file."}),o.jsx("p",{children:"2) Click Share -> Create link -> Copy link."}),o.jsx("p",{children:"3) Paste the link below and click Save Homework."})]}),o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HiDrive Share Link"}),o.jsx("input",{type:"url",value:f,onChange:O=>x(O.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://hidrive.ionos.com/lnk/...",required:!0}),b&&o.jsx("div",{className:`mt-4 p-3 rounded-md text-sm ${b.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:b}),o.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[o.jsx("button",{type:"submit",disabled:C,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:C?"Saving...":"Save Homework"}),o.jsx("button",{type:"button",onClick:()=>n("/admin"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Back to Admin"})]})]})]})}):o.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:o.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center",children:[o.jsx("p",{className:"text-gray-700 mb-4",children:"No pending upload found. Please upload a file first."}),o.jsx("button",{onClick:()=>n("/admin",{replace:!0}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Back to Admin"})]})}):null}function EI(){return k.useEffect(()=>{xg()},[]),o.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center px-4",children:o.jsxs("div",{className:"max-w-md w-full text-center",children:[o.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 md:p-10",children:[o.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:o.jsx(Nt,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})}),o.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Payment confirmed"}),o.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for your purchase. You will receive a confirmation email shortly with your receipt and next steps."}),o.jsxs(He,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",children:[o.jsx(it,{className:"h-5 w-5","aria-hidden":"true"}),"Back to home"]})]}),o.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-gray-500",children:[o.jsx(Kn,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),o.jsx("span",{className:"text-sm",children:"MySchola"})]})]})})}function II(){return k.useEffect(()=>{_g(),wg()},[]),o.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center px-4",children:o.jsxs("div",{className:"max-w-md w-full text-center",children:[o.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 md:p-10",children:[o.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:o.jsx(wp,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})}),o.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Booking confirmed"}),o.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for booking your free consultation. You will receive a confirmation email shortly with the meeting link and next steps."}),o.jsxs(He,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",children:[o.jsx(it,{className:"h-5 w-5","aria-hidden":"true"}),"Back to home"]})]}),o.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-gray-500",children:[o.jsx(Kn,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),o.jsx("span",{className:"text-sm",children:"MySchola"})]})]})})}const TI=[0],NI=16,AI=0,th=60,SI="Free GCSE Strategy Call",kI="Struggling to Improve Your Child’s Grades? Let’s Build a Plan",RI="If your child is working hard but not getting the grades they should,",CI="the problem is usually not effort.",jI="It is exam technique.",PI="Join our Free Flagship Live Webinar!",DI="Live GCSE strategy session for Maths, English, and Science — leave with a clear plan to raise grades fast.",VI="Zoom link shared after registration.",nh="https://calendly.com/myscholaukwebinar/new-meeting?month=2026-03",OI="https://www.youtube-nocookie.com/embed/ls5ti39_nU0?rel=0";function MI({src:n,className:e}){const t=k.useRef(null);return k.useEffect(()=>{const s=t.current;if(!s)return;const r=()=>{s.readyState>=2&&(s.currentTime=.01,s.pause())};return s.addEventListener("loadedmetadata",r),s.readyState<2?s.load():r(),()=>{s.removeEventListener("loadedmetadata",r)}},[n]),o.jsxs("video",{ref:t,className:e,controls:!0,playsInline:!0,preload:"metadata",children:[o.jsx("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]})}function LI(n=new Date){const e=[],t=[];TI.forEach(m=>{const f=new Date(n),x=(m-f.getDay()+7)%7;f.setDate(f.getDate()+x),f.setHours(NI,AI,0,0);const b=new Date(f);x===0&&f<=n&&b.setDate(b.getDate()+7),e.push(b);const N=new Date(f);f>n&&N.setDate(N.getDate()-7),t.push(N)});const s=e.reduce((m,f)=>f<m?f:m),r=t.reduce((m,f)=>f>m?f:m),i=new Date(r.getTime()+th*6e4),c=n>=r&&n<i,l=c?r:s,h=new Date(l.getTime()+th*6e4);return{start:l,end:h,isLive:c}}function sh(n){return n.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}Z$/,"Z")}function FI(n,e){return`https://calendar.google.com/calendar/render?${new URLSearchParams({action:"TEMPLATE",text:PI,details:DI,location:VI,dates:`${sh(n)}/${sh(e)}`}).toString()}`}function rh(){const n=LI(),[e,t]=k.useState(()=>typeof window>"u"?!1:window.localStorage.getItem("webinarReminder")==="true"),[s,r]=k.useState(0),i=[{src:gh,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:ph,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:fh,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:mh,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:dh,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],c=i.length,l=[...i,...i,...i],h=c,m=c*2,[f,x]=k.useState(h),[b,N]=k.useState(!0),[C,P]=k.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),[j,O]=k.useState(()=>typeof window>"u"?97:0);k.useEffect(()=>{typeof window>"u"||window.localStorage.setItem("webinarReminder",e?"true":"false")},[e]),k.useEffect(()=>{const w=()=>{const y=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;P(y)};return w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[]),k.useEffect(()=>{if(f<h||f>=m){N(!1);const w=f<h?f+c:f-c;x(w),requestAnimationFrame(()=>{requestAnimationFrame(()=>N(!0))})}},[f,h,m,c]),k.useEffect(()=>{if(typeof window>"u")return;let w;const y=2800,q=97,J=window.performance?window.performance.now():Date.now(),Be=Pt=>{const Ge=Pt||Date.now(),ae=Math.min((Ge-J)/y,1),Pe=Math.floor(ae*q);O(Pe),ae<1&&(w=window.requestAnimationFrame(Be))};return w=window.requestAnimationFrame(Be),()=>{w&&window.cancelAnimationFrame(w)}},[]);const D=FI(n.start,n.end),F=w=>w===1?"Improved by 1 grade":`Improved by ${w} grades`,Q=[{value:"95%",label:"Students improve grades",className:"bg-blue-600 text-blue-100"},{value:"2-3",label:"Grade improvement average",className:"bg-green-600 text-green-100"},{value:"300+",label:"Successful students",className:"bg-purple-600 text-purple-100"}],ce=[{stat:"5-10",statLabel:"hours a week",title:"Hours In",description:"Many students are already putting in serious revision time every single week.",icon:io,iconClass:"bg-blue-600 text-white",statClass:"text-blue-700"},{stat:"4-5",statLabel:"grade plateau",title:"Grades Stuck",description:"Despite the effort, many stay stuck at Grade 4 or 5 and cannot break through.",icon:Ep,iconClass:"bg-amber-500 text-white",statClass:"text-amber-700"},{stat:"Lost",statLabel:"marks in the exam",title:"Marks Lost",description:"Students often know the content, but still drop marks through weak structure and poor exam technique.",icon:sl,iconClass:"bg-rose-500 text-white",statClass:"text-rose-700"}],ne=[{title:"One-to-One Support",description:"Personalised lessons where your child only sees the tutor. Privacy-first, focus-first.",icon:uh},{title:"Via Zoom",description:"High-quality video, interactive whiteboard, and chat support for fast progress.",icon:hh},{title:"Student Privacy",description:"Webcam and microphone are optional. Parents can monitor engagement for peace of mind.",icon:ao}],I=[{step:"01",title:"Edexcel + AQA tracker",description:"Structured amber-light tracker to pinpoint strengths and gaps fast."},{step:"02",title:"Exemplar answers",description:"Techniques aligned directly to mark schemes so students know what earns marks and how to reach Grade 9."},{step:"03",title:"Exam practice + parent evenings",description:"Regular practice, progress reviews, and clear next steps to keep improvement steady."}],_=()=>{x(w=>w-1)},g=()=>{x(w=>w+1)},v=()=>{if(window.Calendly){window.Calendly.initPopupWidget({url:nh});return}const w=document.createElement("script");w.src="https://assets.calendly.com/assets/external/widget.js",w.async=!0,w.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:nh})},document.body.appendChild(w)},E=[{q:"Who is this consultation call for?",a:"It is for parents of students in Years 9 to 11 who want clear support in GCSE Maths, English, or Science."},{q:"What happens on the consultation call?",a:"We talk through your child's current grade, the areas they are struggling with, how our lessons work, and the best next steps for improvement."},{q:"Do you offer a free trial lesson?",a:"Yes. If our tuition feels like the right fit after the consultation call, we can offer a free trial lesson so you can see how the teaching works before committing."}];return o.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50",children:[o.jsx("div",{className:"w-full bg-[#0B3D91] text-white py-3 px-4 shadow-md relative overflow-hidden",children:o.jsx("div",{className:"relative overflow-hidden",children:o.jsx("div",{className:"flex items-center gap-6 whitespace-nowrap animate-marquee-reverse text-sm sm:text-base md:text-lg font-bold",children:Array.from({length:3}).map((w,y)=>o.jsxs("div",{className:"flex items-center gap-3 pr-6",children:[o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs sm:text-sm uppercase tracking-wide",children:[o.jsxs("span",{className:"relative inline-flex h-2 w-2",children:[o.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75"}),o.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-white"})]}),"Attention"]}),o.jsx("span",{children:"Parents of GCSE Years 9, 10 & 11 students"}),o.jsx("span",{className:"text-white/80",children:"•"}),o.jsx("span",{className:"text-white/90",children:"Spaces are running out — join our March cohort"})]},`banner-${y}`))})})}),o.jsx("div",{className:"max-w-6xl mx-auto px-4 py-16 sm:py-20",children:o.jsxs("div",{className:"bg-white/90 rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden",children:[o.jsx("div",{className:"pointer-events-none absolute -top-32 -right-24 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl"}),o.jsx("div",{className:"pointer-events-none absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"}),o.jsxs("div",{className:"relative z-10",children:[o.jsx("div",{className:"flex flex-wrap items-center gap-3 text-blue-700 font-semibold text-sm uppercase tracking-wide",children:o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-3 py-1",children:[o.jsx(nl,{className:"h-4 w-4","aria-hidden":"true"}),SI]})}),o.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mt-4",children:kI}),o.jsx("div",{className:"mt-4 w-full rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-amber-100/60 p-8 sm:p-10 shadow-[0_24px_60px_rgba(153,27,27,0.12)]",children:o.jsxs("div",{className:"flex flex-col items-center gap-4 text-center",children:[o.jsxs("span",{className:"inline-flex w-fit items-center gap-2 rounded-full bg-red-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-red-700",children:[o.jsxs("span",{className:"relative inline-flex h-2 w-2",children:[o.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"}),o.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-red-600"})]}),"Your Child’s Grade Plan"]}),o.jsxs("h3",{className:"mx-auto max-w-4xl text-3xl leading-tight sm:text-4xl font-bold text-gray-900",children:[o.jsx("span",{className:"block text-balance",children:RI}),o.jsx("span",{className:"mt-3 block text-balance text-red-700",children:CI}),o.jsx("span",{className:"mt-4 inline-flex w-fit rounded-2xl bg-red-700 px-5 py-3 text-white shadow-[0_16px_40px_rgba(185,28,28,0.30)]",children:jI})]}),o.jsx("div",{className:"w-full max-w-3xl rounded-3xl border-2 border-emerald-400 bg-gradient-to-r from-emerald-200 via-white to-lime-100 p-6 text-center shadow-[0_20px_55px_rgba(16,185,129,0.22)]",children:o.jsxs("div",{className:"flex flex-col items-center gap-3",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white",children:[o.jsx(Ca,{className:"h-4 w-4","aria-hidden":"true"}),"Refund guarantee"]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-lg sm:text-2xl font-extrabold text-gray-900",children:"If your child follows our system properly and does not improve, we will refund you."}),o.jsx("p",{className:"mt-2 text-sm sm:text-base font-semibold text-emerald-900",children:"No vague promise. No chasing support. A clear result or your money back."})]})]})}),o.jsx("p",{className:"max-w-3xl text-lg sm:text-xl font-semibold text-gray-700",children:"More revision on its own will not change their grade. We fix the exact mistakes that cost students marks and help them move up 1 to 2 grades with focused teaching, tailored homework, and clear progress tracking."}),o.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[o.jsx("div",{className:"rounded-2xl border border-white/80 bg-white/85 p-4 shadow-sm",children:o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx(sl,{className:"mt-0.5 h-5 w-5 text-red-600","aria-hidden":"true"}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-red-700",children:"Why grades stay stuck"}),o.jsx("p",{className:"mt-1 text-sm sm:text-base font-semibold text-gray-800",children:"Effort is not usually the issue. Missing exam technique is."})]})]})}),o.jsx("div",{className:"rounded-2xl border border-white/80 bg-white/85 p-4 shadow-sm",children:o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx(Ra,{className:"mt-0.5 h-5 w-5 text-red-600","aria-hidden":"true"}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-red-700",children:"What happens on the call"}),o.jsx("p",{className:"mt-1 text-sm sm:text-base font-semibold text-gray-800",children:"We break down exactly where your child is losing marks and what must change."})]})]})})]}),o.jsxs("div",{className:"relative w-full max-w-3xl overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-white via-amber-50 to-red-50 p-6 shadow-[0_20px_50px_rgba(217,119,6,0.14)]",children:[o.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-red-100/60 to-transparent"}),o.jsxs("div",{className:"relative flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left",children:[o.jsxs("div",{className:"flex flex-col items-center gap-4 sm:flex-row",children:[o.jsxs("div",{className:"rounded-[28px] bg-white px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] ring-1 ring-amber-100",children:[o.jsx("div",{className:"text-[11px] font-black uppercase tracking-[0.28em] text-amber-700",children:"Only"}),o.jsxs("div",{className:"animate-spot-flash mt-1 flex items-end justify-center leading-none text-red-600",children:[o.jsx("span",{className:"text-5xl sm:text-6xl font-black tracking-tight",children:"1"}),o.jsx("span",{className:"text-5xl sm:text-6xl font-black tracking-tight",children:"0"})]}),o.jsx("div",{className:"mt-1 text-[11px] font-black uppercase tracking-[0.26em] text-gray-500",children:"student spaces"})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xs font-black uppercase tracking-[0.24em] text-red-600",children:"Limited availability"}),o.jsx("p",{className:"mt-2 text-lg sm:text-2xl font-extrabold text-gray-900",children:"Only 10 student spaces available this month."}),o.jsx("p",{className:"mt-1 text-sm sm:text-base font-semibold text-gray-600",children:"Once those places are filled, we close new enrolment until next month."})]})]}),o.jsxs("div",{className:"inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-red-700 ring-1 ring-red-200 shadow-sm",children:[o.jsx(Nt,{className:"h-4 w-4","aria-hidden":"true"}),"Book a call now"]})]})]})]})}),o.jsxs("div",{className:"mt-6 rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm",children:[o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-gray-900 text-center",children:"A quick look at our solution"}),o.jsx("p",{className:"mt-2 text-sm sm:text-base text-gray-600 text-center",children:"Watch this short introduction from our co-founder, Isam, before booking your consultation call."}),o.jsx("div",{className:"mt-4 overflow-hidden rounded-2xl border border-slate-100 bg-black",style:{aspectRatio:"16 / 9"},children:o.jsx("iframe",{className:"h-full w-full",src:OI,title:"Tuition overview video",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})}),o.jsx("div",{className:"mt-6 flex justify-center",children:o.jsxs("button",{type:"button",onClick:v,className:"group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 px-12 py-6 text-white text-2xl font-extrabold ring-2 ring-blue-300/40 hover:shadow-2xl hover:-translate-y-0.5 transition overflow-hidden cta-button",children:[o.jsx("span",{className:"cta-shimmer","aria-hidden":"true"}),o.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition","aria-hidden":"true"}),o.jsxs("span",{className:"relative inline-flex items-center gap-2",children:[o.jsx(al,{className:"h-5 w-5 text-white/90","aria-hidden":"true"}),"Yes, I Want to Book a Call With MySchola"]})]})})]}),o.jsxs("div",{className:"mt-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 sm:p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]",children:[o.jsxs("div",{className:"grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_320px] lg:items-start",children:[o.jsxs("div",{children:[o.jsx("span",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700",children:"The gaps we fix"}),o.jsx("h3",{className:"mt-4 max-w-3xl text-2xl sm:text-3xl font-bold text-gray-900",children:"The three core problems we solve at MySchola:"}),o.jsx("p",{className:"mt-3 max-w-2xl text-base sm:text-lg text-gray-600",children:"Many students are already working hard. The real issue is that their effort is not translating into marks in the exam."})]}),o.jsxs("div",{className:"rounded-3xl border border-blue-100 bg-white p-5 shadow-lg",children:[o.jsx("div",{className:"text-xs font-semibold uppercase tracking-wide text-blue-700",children:"The real gap"}),o.jsx("p",{className:"mt-3 text-xl sm:text-2xl font-bold text-gray-900",children:"The jump from Grade 5 to Grade 9 usually comes down to strategy."}),o.jsx("p",{className:"mt-3 text-sm sm:text-base text-gray-600",children:"It is answer structure, exam technique, and knowing exactly how to turn subject knowledge into marks."})]})]}),o.jsx("div",{className:"mt-8 grid gap-4 md:grid-cols-3",children:ce.map((w,y)=>{const q=w.icon;return o.jsxs("div",{className:"consultation-problem-card group rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl",style:{animationDelay:`${y*140}ms`},children:[o.jsxs("div",{className:"flex items-start justify-between gap-4",children:[o.jsx("div",{className:`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${w.iconClass} shadow-lg`,children:o.jsx(q,{className:"h-5 w-5","aria-hidden":"true"})}),o.jsxs("div",{className:"text-right",children:[o.jsx("div",{className:`text-3xl sm:text-4xl font-black tracking-tight ${w.statClass}`,children:w.stat}),o.jsx("div",{className:"text-xs font-semibold text-gray-500",children:w.statLabel})]})]}),o.jsx("h4",{className:"mt-6 text-lg sm:text-xl font-semibold text-gray-900",children:w.title}),o.jsx("p",{className:"mt-3 text-sm sm:text-base text-gray-600",children:w.description})]},w.title)})}),o.jsx("div",{className:"mt-6 rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-blue-50 p-5 sm:p-6",children:o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg",children:o.jsx(Ra,{className:"h-5 w-5","aria-hidden":"true"})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-lg sm:text-xl font-bold text-gray-900",children:"Our tuition is built to solve the exact reasons students stay stuck."}),o.jsx("p",{className:"mt-2 text-sm sm:text-base text-gray-600",children:"We focus on exam technique, answer structure, and smarter revision habits so students can turn effort into measurable grade improvement."})]})]})})]}),o.jsxs("div",{className:"mt-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50/60 p-6 sm:p-8 shadow-sm",children:[o.jsxs("div",{className:"max-w-4xl",children:[o.jsx("span",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700",children:"What we do differently"}),o.jsx("h3",{className:"mt-4 text-2xl sm:text-3xl font-bold text-gray-900",children:"Why families choose our tuition over other options"}),o.jsx("p",{className:"mt-3 text-base sm:text-lg text-gray-600",children:"We combine strong teaching, progress tracking, homework support, and clear exam preparation in one structured programme."})]}),o.jsx("div",{className:"mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm",children:o.jsx("img",{src:yh,alt:"Comparison table showing what MySchola does differently compared with other providers and one-to-one home tutors",className:"w-full h-auto object-contain",loading:"lazy"})})]}),o.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-3",children:Q.map(w=>o.jsxs("div",{className:`rounded-2xl p-5 text-center shadow-md ${w.className}`,children:[o.jsx("div",{className:"text-3xl sm:text-4xl font-bold text-white",children:w.value}),o.jsx("div",{className:"mt-2 text-sm font-semibold",children:w.label})]},w.value))}),o.jsx("p",{className:"text-xs text-gray-500 mt-3",children:"Results based on historical performance. Individual outcomes vary."}),!1,o.jsxs("div",{className:"mt-8 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/60 p-8 sm:p-10 shadow-sm",children:[o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx("span",{className:"inline-flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700",children:"What to expect"}),o.jsxs("h3",{className:"text-3xl sm:text-4xl font-bold text-gray-900",children:["A clear plan for measurable GCSE gains to",o.jsx("span",{className:"ml-2 text-emerald-600 text-3xl sm:text-4xl font-extrabold underline decoration-emerald-300 decoration-4 underline-offset-4 animate-soft-glow",children:"Grade 9"})]}),o.jsx("p",{className:"text-lg sm:text-xl text-gray-700 max-w-2xl",children:"Three focused steps we deliver in our lessons so families leave with a concrete action plan."})]}),o.jsx("div",{className:"mt-6 grid gap-4 md:grid-cols-3",children:I.map(w=>o.jsxs("div",{className:"rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white",children:w.step}),o.jsx("h4",{className:"text-lg sm:text-xl font-semibold text-gray-900",children:w.title})]}),o.jsx("p",{className:"mt-3 text-base sm:text-lg text-gray-700",children:w.description})]},w.step))}),o.jsxs("div",{className:"mt-6 flex items-center gap-2 text-base sm:text-lg font-semibold text-emerald-700",children:[o.jsx(Nt,{className:"h-5 w-5","aria-hidden":"true"}),"Live examples and Q&A included"]})]}),o.jsxs("div",{className:"mt-10 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-10 shadow-lg",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700",children:[o.jsx(al,{className:"h-3.5 w-3.5","aria-hidden":"true"}),"Parents love this session"]}),o.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-gray-900 mt-3",children:"Reserve your spot now"}),o.jsx("p",{className:"text-gray-700 mt-2 max-w-2xl text-base sm:text-lg",children:"Book in under a minute and get the private Zoom link plus the follow-up resources."})]}),o.jsx("div",{className:"flex items-center justify-center",children:o.jsx("div",{className:"relative rounded-3xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 p-[2px] shadow-lg",children:o.jsxs("div",{className:"relative flex items-center gap-4 rounded-[22px] bg-white px-7 py-5 overflow-hidden",children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-60",children:o.jsx("div",{className:"absolute -left-1/3 top-0 h-full w-1/2 rotate-6 bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent animate-pulse"})}),o.jsxs("span",{className:"absolute -top-2 -right-2 inline-flex h-4 w-4",children:[o.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),o.jsx("span",{className:"relative inline-flex h-4 w-4 rounded-full bg-emerald-500"})]}),o.jsxs("div",{className:"relative text-4xl sm:text-5xl font-extrabold text-emerald-600 tracking-tight drop-shadow-sm animate-pulse",children:[j,"%"]}),o.jsx("div",{className:"relative text-base sm:text-lg font-semibold text-gray-800",children:"of parents recommend us"})]})})})]}),o.jsx("div",{className:"mt-6 grid gap-3 sm:grid-cols-3",children:["Clear consultation with real examples","Action plan you can use immediately"].map(w=>o.jsxs("div",{className:"flex items-start gap-2 rounded-xl bg-white/80 px-4 py-3 text-sm font-semibold text-gray-700",children:[o.jsx(Nt,{className:"mt-0.5 h-4 w-4 text-emerald-600","aria-hidden":"true"}),o.jsx("span",{children:w})]},w))}),o.jsxs("div",{className:"mt-8",children:[o.jsx("button",{type:"button",onClick:v,className:"inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-8 py-5 text-white text-xl font-bold shadow-xl hover:bg-blue-700 transition",children:"Yes, I Want to Book a Call With MySchola"}),o.jsx("p",{className:"text-xs text-gray-500 mt-3 text-center",children:"Secure Calendly pop-up. No card required."})]}),o.jsxs("div",{className:"mt-6 flex flex-wrap gap-3",children:[o.jsxs("a",{href:D,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition",children:[o.jsx(nl,{className:"h-4 w-4","aria-hidden":"true"}),"Add to Google Calendar"]}),o.jsxs("button",{type:"button",onClick:()=>t(w=>!w),className:`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${e?"border-green-200 text-green-700 bg-green-50":"border-gray-200 text-gray-700 hover:bg-gray-50"}`,children:[o.jsx(mp,{className:"h-4 w-4","aria-hidden":"true"}),e?"Reminder set":"Set a reminder"]})]})]}),o.jsxs("div",{className:"mt-12 rounded-3xl border border-gray-200 bg-white p-8",children:[o.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700",children:[o.jsx(Ca,{className:"h-4 w-4","aria-hidden":"true"}),"From our main tutoring programme"]}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-900 mt-4",children:"How MySchola lessons work"}),o.jsx("p",{className:"text-gray-600 mt-2",children:"These are the same methods used in our full tutoring programme, adapted for this webinar."})]}),o.jsx("div",{className:"mt-8 grid gap-6 md:grid-cols-3",children:ne.map(w=>{const y=w.icon;return o.jsxs("div",{className:"rounded-2xl border border-blue-100 bg-blue-50/60 p-6 text-left shadow-sm",children:[o.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white",children:o.jsx(y,{className:"h-6 w-6","aria-hidden":"true"})}),o.jsx("h3",{className:"mt-4 text-lg font-semibold text-gray-900",children:w.title}),o.jsx("p",{className:"mt-2 text-sm text-gray-600",children:w.description})]},w.title)})})]}),o.jsxs("div",{className:"mt-12 rounded-3xl border border-gray-200 bg-white p-8",children:[o.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[o.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-900",children:"Our tutors study at the UK's most prestigious universities"}),o.jsx("p",{className:"text-gray-600 mt-2 max-w-3xl mx-auto",children:"Learn from the best to achieve your best."})]}),o.jsx("div",{className:"relative overflow-hidden mt-8",children:o.jsxs("div",{className:"flex animate-marquee",children:[[{src:Hr,alt:"University of Nottingham",name:"Nottingham"},{src:zr,alt:"King's College London",name:"King's College"},{src:Gr,alt:"University of Cambridge",name:"Cambridge"},{src:Kr,alt:"Imperial College London",name:"Imperial"},{src:Qr,alt:"University of Warwick",name:"Warwick"}].map((w,y)=>o.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:o.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-32 sm:h-40 lg:h-44 w-56 sm:w-64 lg:w-72 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:o.jsx("img",{src:w.src,alt:w.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`first-${y}`)),[{src:Hr,alt:"University of Nottingham",name:"Nottingham"},{src:zr,alt:"King's College London",name:"King's College"},{src:Gr,alt:"University of Cambridge",name:"Cambridge"},{src:Kr,alt:"Imperial College London",name:"Imperial"},{src:Qr,alt:"University of Warwick",name:"Warwick"}].map((w,y)=>o.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:o.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-32 sm:h-40 lg:h-44 w-56 sm:w-64 lg:w-72 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:o.jsx("img",{src:w.src,alt:w.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`second-${y}`))]})})]}),o.jsx("div",{className:"mt-12 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-blue-50/70 p-8",children:o.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[o.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-900",children:"Video testimonials"}),o.jsx("p",{className:"text-gray-600 mt-2",children:"Hear directly from students and parents about their progress."}),o.jsxs("div",{className:"relative mt-10 sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[o.jsx("button",{type:"button",onClick:_,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:o.jsx(it,{className:"h-5 w-5","aria-hidden":"true"})}),o.jsx("div",{className:"overflow-hidden sm:col-start-2",children:o.jsx("div",{className:`flex ${b?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${f*(100/C)}%)`},children:l.map((w,y)=>{const q=Math.floor(C/2),J=y===f+q;return o.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/C}%`},children:o.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${J?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[o.jsx(MI,{src:w.src,className:"w-full h-auto rounded-t-2xl"}),o.jsxs("div",{className:"p-4 text-center",children:[o.jsx("p",{className:"text-lg font-semibold text-gray-900",children:w.name}),o.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[o.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:w.subjects.join(" / ")}),o.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:F(w.improvedBy)})]})]})]})},`${w.id}-${y}`)})})}),o.jsx("button",{type:"button",onClick:g,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:o.jsx(Ht,{className:"h-5 w-5","aria-hidden":"true"})}),o.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[o.jsx("button",{type:"button",onClick:_,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:o.jsx(it,{className:"h-5 w-5","aria-hidden":"true"})}),o.jsx("button",{type:"button",onClick:g,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:o.jsx(Ht,{className:"h-5 w-5","aria-hidden":"true"})})]})]})]})}),o.jsxs("div",{className:"mt-10 rounded-2xl border border-gray-200 p-6",children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Quick FAQ"}),o.jsx("div",{className:"space-y-3",children:E.map((w,y)=>o.jsxs("div",{className:"border border-gray-100 rounded-xl",children:[o.jsxs("button",{type:"button",onClick:()=>r(s===y?-1:y),className:"w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-gray-900","aria-expanded":s===y,children:[w.q,o.jsx("span",{className:"text-blue-600",children:s===y?"-":"+"})]}),s===y&&o.jsx("div",{className:"px-4 pb-4 text-sm text-gray-600",children:w.a})]},w.q))})]}),o.jsx("div",{className:"mt-10",children:o.jsxs(He,{to:"/",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold",children:[o.jsx(it,{className:"h-4 w-4","aria-hidden":"true"}),"Back to home"]})})]})]})})]})}const UI="myscholauk@gmail.com",BI="447344193804",ih=`https://wa.me/${BI}`;function ah(){const n=on(),e=n.state&&n.state.fromRegistration,t=typeof window<"u"&&window.sessionStorage.getItem("strategyCallRegistered")==="true",s=!!(e||t),r=`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(ih)}`;return k.useEffect(()=>{var i,c;typeof window>"u"||(c=(i=window.Calendly)==null?void 0:i.closePopupWidget)==null||c.call(i)},[]),o.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50",children:o.jsx("div",{className:"mx-auto max-w-5xl px-4 py-16 sm:py-20",children:o.jsxs("div",{className:"overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 shadow-[0_30px_80px_rgba(15,23,42,0.08)]",children:[o.jsxs("div",{className:"bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400 px-8 py-10 text-white sm:px-10",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-semibold",children:[o.jsx(Nt,{className:"h-4 w-4","aria-hidden":"true"}),"Booking confirmed"]}),o.jsx("h1",{className:"mt-4 text-3xl font-bold sm:text-4xl",children:"Your MySchola strategy call is booked."}),o.jsx("p",{className:"mt-3 max-w-3xl text-base text-white/90 sm:text-lg",children:"Check the email you used to book. Your confirmation contains your scheduled time, your private Zoom link, and your reschedule options."})]}),o.jsxs("div",{className:"px-8 py-8 sm:px-10 sm:py-10",children:[s?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"grid gap-4 lg:grid-cols-3",children:[o.jsxs("div",{className:"rounded-3xl border border-slate-200 bg-slate-50 p-6",children:[o.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-600",children:[o.jsx(Wr,{className:"h-4 w-4 text-blue-600","aria-hidden":"true"}),"Confirmation email"]}),o.jsx("p",{className:"mt-3 text-lg font-bold text-gray-900",children:"Check your inbox first"}),o.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Search for your booking confirmation from MySchola or Calendly if it has not appeared yet."})]}),o.jsxs("div",{className:"rounded-3xl border border-blue-200 bg-blue-50 p-6",children:[o.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-blue-700",children:[o.jsx(Qn,{className:"h-4 w-4","aria-hidden":"true"}),"Private Zoom link"]}),o.jsx("p",{className:"mt-3 text-lg font-bold text-gray-900",children:"Your Zoom link is in the confirmation email"}),o.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Use the private Zoom link in that email at your booked time. If you cannot find it, message us and we will resend the details."})]}),o.jsxs("div",{className:"rounded-3xl border border-emerald-200 bg-emerald-50 p-6",children:[o.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-700",children:[o.jsx(Nt,{className:"h-4 w-4","aria-hidden":"true"}),"Before the call"]}),o.jsx("p",{className:"mt-3 text-lg font-bold text-gray-900",children:"Come ready with your child's current grades and main concerns"}),o.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"We will use the call to identify the main barriers, map out the right support, and show you exactly how our programme works."})]})]}),o.jsxs("div",{className:"mt-8 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 sm:p-8",children:[o.jsxs("div",{className:"max-w-3xl",children:[o.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.2em] text-blue-700",children:"Need the details quickly?"}),o.jsx("h2",{className:"mt-3 text-2xl font-bold text-gray-900 sm:text-3xl",children:"Everything you need for your strategy call is below."}),o.jsx("p",{className:"mt-3 text-base text-gray-600 sm:text-lg",children:"If you need help before the call, contact us on WhatsApp or email and we will get back to you as quickly as possible."})]}),o.jsxs("div",{className:"mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_320px]",children:[o.jsxs("div",{className:"grid gap-4",children:[o.jsxs("div",{className:"rounded-3xl border border-green-200 bg-white p-6 shadow-sm",children:[o.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-green-700",children:[o.jsx(yn,{className:"h-4 w-4","aria-hidden":"true"}),"WhatsApp"]}),o.jsx("p",{className:"mt-3 text-xl font-bold text-gray-900",children:"Message us directly on WhatsApp"}),o.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Use WhatsApp if you need us to resend your booking details or help you locate the Zoom link before the call."}),o.jsxs("a",{href:ih,target:"_blank",rel:"noopener noreferrer",className:"mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700",children:["Open WhatsApp chat",o.jsx(Ht,{className:"h-4 w-4","aria-hidden":"true"})]}),o.jsx("p",{className:"mt-3 text-sm font-semibold text-gray-700",children:"WhatsApp: +44 7344 193804"})]}),o.jsxs("div",{className:"rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",children:[o.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-700",children:[o.jsx(Wr,{className:"h-4 w-4 text-blue-600","aria-hidden":"true"}),"Email"]}),o.jsx("p",{className:"mt-3 text-xl font-bold text-gray-900",children:"myscholauk@gmail.com"}),o.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"If you prefer email, contact us here and we can resend your confirmation details or answer any questions before the call."}),o.jsxs("a",{href:`mailto:${UI}`,className:"mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50",children:["Email MySchola",o.jsx(Ht,{className:"h-4 w-4","aria-hidden":"true"})]})]})]}),o.jsxs("div",{className:"rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-green-700",children:[o.jsx(yn,{className:"h-4 w-4","aria-hidden":"true"}),"WhatsApp QR code"]}),o.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Scan this code on your phone to open a WhatsApp chat with MySchola."}),o.jsx("img",{src:r,alt:"WhatsApp QR code for MySchola",className:"mx-auto mt-5 h-52 w-52 rounded-2xl border border-slate-100",loading:"lazy"})]})]})]})]}):o.jsxs("div",{className:"rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8",children:[o.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.2em] text-amber-700",children:"No booking found"}),o.jsx("h2",{className:"mt-3 text-2xl font-bold text-gray-900",children:"Book your strategy call first to view the confirmation details."}),o.jsx("p",{className:"mt-3 max-w-2xl text-sm text-gray-700 sm:text-base",children:"Once you complete your booking, this page will show the next-step details for your Zoom call, along with the WhatsApp and email contact options."})]}),o.jsxs("div",{className:"mt-10 flex flex-wrap gap-4",children:[o.jsx(He,{to:"/book-strategy-call",className:"inline-flex items-center justify-center rounded-full border border-gray-200 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50",children:"Back to strategy call page"}),o.jsx(He,{to:"/",className:"inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700",children:"Back to home"})]})]})]})})})}const yf="/book-strategy-call",xf="/book-strategy-call/thanks",_f="/webinar",qI="/webinar/thanks";function oh(){var n,e;typeof window>"u"||(e=(n=window.Calendly)==null?void 0:n.closePopupWidget)==null||e.call(n)}function $I(n){var e;return((e=n==null?void 0:n.data)==null?void 0:e.event)&&n.data.event.indexOf("calendly")===0&&n.data.event==="calendly.event_scheduled"}function WI(){const{pathname:n}=on();return k.useEffect(()=>{yg()},[n]),null}function HI(){const n=an(),{pathname:e}=on();return k.useEffect(()=>{const t=s=>{$I(s)&&(e.startsWith(yf)||e.startsWith(_f)?(typeof window<"u"&&window.sessionStorage.setItem("strategyCallRegistered","true"),oh(),n(xf,{replace:!0})):(oh(),n("/booking-success",{replace:!0})))};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)},[n,e]),null}function zI(){return o.jsxs(Qf,{children:[o.jsx(WI,{}),o.jsx(HI,{}),o.jsxs(Yf,{children:[o.jsx(We,{path:"/",element:o.jsx(ll,{})}),o.jsx(We,{path:"/booking",element:o.jsx(ll,{})}),o.jsx(We,{path:"/login",element:o.jsx(rI,{})}),o.jsx(We,{path:"/payment-success",element:o.jsx(EI,{})}),o.jsx(We,{path:"/booking-success",element:o.jsx(II,{})}),o.jsx(We,{path:"/admin",element:o.jsx(wI,{})}),o.jsx(We,{path:"/admin/share-link",element:o.jsx(bI,{})}),o.jsx(We,{path:"/admin/homework-share-link",element:o.jsx(vI,{})}),o.jsx(We,{path:yf,element:o.jsx(rh,{})}),o.jsx(We,{path:xf,element:o.jsx(ah,{})}),o.jsx(We,{path:_f,element:o.jsx(rh,{})}),o.jsx(We,{path:qI,element:o.jsx(ah,{})}),o.jsx(We,{path:"/app/dashboard",element:o.jsx(Aa,{children:o.jsx(lI,{})})}),o.jsx(We,{path:"/app/subject/:subjectId/recordings",element:o.jsx(Aa,{children:o.jsx(mI,{})})}),o.jsx(We,{path:"/app/subject/:subjectId/homework",element:o.jsx(Aa,{children:o.jsx(fI,{})})})]})]})}ep.createRoot(document.getElementById("root")).render(o.jsx(k.StrictMode,{children:o.jsx(zI,{})}));
