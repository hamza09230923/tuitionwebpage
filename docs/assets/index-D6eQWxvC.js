import{r as Jf,a as Xf,b as A,u as Lt,c as cs,L as he,N as Zf,d as xh,e as ep,B as tp,R as sp,f as Ve}from"./react-vendor-CbjYftdW.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var _a={exports:{}},Pn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc;function np(){if(dc)return Pn;dc=1;var s=Jf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(c,h,m){var f,y={},v=null,N=null;m!==void 0&&(v=""+m),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(N=h.ref);for(f in h)n.call(h,f)&&!a.hasOwnProperty(f)&&(y[f]=h[f]);if(c&&c.defaultProps)for(f in h=c.defaultProps,h)y[f]===void 0&&(y[f]=h[f]);return{$$typeof:e,type:c,key:v,ref:N,props:y,_owner:r.current}}return Pn.Fragment=t,Pn.jsx=l,Pn.jsxs=l,Pn}var mc;function rp(){return mc||(mc=1,_a.exports=np()),_a.exports}var i=rp(),jr={},fc;function ip(){if(fc)return jr;fc=1;var s=Xf();return jr.createRoot=s.createRoot,jr.hydrateRoot=s.hydrateRoot,jr}var ap=ip();/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lp=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),pc=s=>{const e=lp(s);return e.charAt(0).toUpperCase()+e.slice(1)},bh=(...s)=>s.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim(),cp=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var up={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=A.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:r="",children:a,iconNode:l,...c},h)=>A.createElement("svg",{ref:h,...up,width:e,height:e,stroke:s,strokeWidth:n?Number(t)*24/Number(e):t,className:bh("lucide",r),...!a&&!cp(c)&&{"aria-hidden":"true"},...c},[...l.map(([m,f])=>A.createElement(m,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=(s,e)=>{const t=A.forwardRef(({className:n,...r},a)=>A.createElement(hp,{ref:a,iconNode:e,className:bh(`lucide-${op(pc(s))}`,`lucide-${s}`,n),...r}));return t.displayName=pc(s),t};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ze=K("arrow-left",dp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],at=K("arrow-right",mp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],pp=K("atom",fp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],yp=K("award",gp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],bp=K("bell",xp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],_p=K("book-marked",wp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Gr=K("book-open",vp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Ip=K("calculator",Ep);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],Tp=K("calendar-check",Np);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],gc=K("calendar",jp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],wh=K("chart-column",Ap);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ba=K("check",Sp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],kt=K("circle-check-big",kp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Rp=K("circle-play",Cp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Dp=K("circle-question-mark",Pp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Mp=K("circle-x",Vp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],xo=K("clock",Lp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],yc=K("download",Op);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Up=K("external-link",Fp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Gn=K("file-text",Bp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],$p=K("flask-conical",qp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Hp=K("globe",Wp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Nt=K("graduation-cap",zp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Kp=K("history",Gp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],Yp=K("languages",Qp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],bo=K("lock",Jp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Zp=K("log-out",Xp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Kr=K("mail",eg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],wo=K("menu",tg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Ye=K("message-circle",sg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],rg=K("monitor",ng);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],ag=K("music",ig);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],lg=K("palette",og);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],ug=K("phone",cg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],dg=K("play",hg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],xc=K("save",mg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Dn=K("sparkles",fg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],gg=K("star",pg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Qr=K("target",yg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Mr=K("trending-up",xg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],qa=K("user-check",bg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],bc=K("users",wg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Qs=K("video",_g);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_o=K("x",vg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],_h=K("zoom-in",Eg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ng=K("zap",Ig),Ii="/assets/testimonial1-5gwMtUAO-5gwMtUAO.mp4",Ni="/assets/testimonial2-D0fw-lJA.mp4",Ti="/assets/testmonial3-CD7BqzK1.mp4",ji="/assets/testimonial4-DLVnnJv5.mp4",Ai="/assets/testimonial5-CpY5IMND.mp4",vh="/assets/checklist-B5UU8CL1.jpeg";function Tg(){typeof window<"u"&&window.fbq&&window.fbq("track","PageView")}function $a(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booking",content_category:"GCSE Tuition"})}function Qt(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"WhatsApp Inquiry",content_category:"GCSE Tuition"})}function jg(){typeof window<"u"&&window.fbq&&window.fbq("track","Purchase",{currency:"GBP"})}function Ag(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booked",content_category:"GCSE Tuition"})}function Sg(){typeof window<"u"&&window.fbq&&window.fbq("track","BOOK NOW",{value:0,currency:"GBP"})}const Yr="/assets/nottingham-university-logo-Bvc07xhs.png",Jr="/assets/King's_College_London_logo-XbRZheqd.svg",Xr="/assets/cambridge-64gH2uf-.jpg",Zr="/assets/Imperial-College-Logo-CiZ74UPN.png",ei="/assets/warwick-DzXBUNN5.svg",kg="/assets/aqa-R9eUC-1Y.jpg",Cg="/assets/edexcel-vector-logo-BkmWVkxU.png";function Rg({src:s,className:e,showControls:t=!0}){const n=A.useRef(null);return A.useEffect(()=>{const r=n.current;if(!r)return;const a=()=>{r.readyState>=2&&(r.currentTime=.01,r.pause())};return r.addEventListener("loadedmetadata",a),r.readyState<2?r.load():a(),()=>{r.removeEventListener("loadedmetadata",a)}},[s]),i.jsxs("video",{ref:n,className:e,controls:t,playsInline:!0,preload:"metadata",children:[i.jsx("source",{src:s,type:"video/mp4"}),"Your browser does not support the video tag."]})}function wc(){const s=Lt(),e=cs(),t=[{src:Ai,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:ji,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:Ti,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:Ni,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:Ii,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],n=t.length,r=[...t,...t,...t],a=n,l=n*2,[c,h]=A.useState(!1),[m,f]=A.useState(null),[y,v]=A.useState(!1),[N,k]=A.useState(a),[P,R]=A.useState(!0),[O,D]=A.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),B=g=>g===1?"Improved by 1 grade":`Improved by ${g} grades`;A.useEffect(()=>{const g=()=>{const w=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;D(w)};return g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]),A.useEffect(()=>{if(N<a||N>=l){R(!1);const g=N<a?N+n:N-n;k(g),requestAnimationFrame(()=>{requestAnimationFrame(()=>R(!0))})}},[N,a,l,n]);const J=g=>{f(m===g?null:g)},oe=()=>{k(g=>g-1)},te=()=>{k(g=>g+1)},E=()=>{const g="https://calendly.com/admin-myschola/30min",w=window.innerWidth<768;if(window.Calendly)window.Calendly.initPopupWidget({url:g,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0});else{const _=document.createElement("script");_.src="https://assets.calendly.com/assets/external/widget.js",_.async=!0,_.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:g,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0})},document.body.appendChild(_),setTimeout(()=>{window.Calendly||window.open(g,"_blank","noopener,noreferrer")},1e3)}},x=()=>{$a(),s("/booking",{replace:!1}),E()};return A.useEffect(()=>{if(e.pathname==="/booking"&&!y){$a(),v(!0);const g=setTimeout(()=>{E()},300);return()=>clearTimeout(g)}else e.pathname!=="/booking"&&v(!1)},[e.pathname]),i.jsxs("div",{className:"min-h-screen bg-white",children:[i.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),i.jsx("div",{className:"w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md",children:"Join our March cohort as soon as possible — spaces are running out!"}),i.jsxs("nav",{className:"sticky top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center h-16",children:[i.jsxs("div",{className:"flex items-center",children:[i.jsx(Nt,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),i.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),i.jsx("div",{className:"hidden md:flex justify-center",children:i.jsxs("div",{className:"flex items-center space-x-8",children:[i.jsx("a",{href:"#home",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),i.jsx("a",{href:"#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),i.jsx("a",{href:"#subjects",className:"text-gray-700 hover:text-blue-600 transition",children:"Subjects"}),i.jsx("a",{href:"#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),i.jsx("a",{href:"#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"})]})}),i.jsxs("div",{className:"flex items-center justify-end",children:[i.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[i.jsx(he,{to:"/login",className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center","aria-label":"Log in",children:"Log In"}),i.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Qt,className:"bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2","aria-label":"Contact us on WhatsApp",children:[i.jsx(Ye,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})]}),i.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>h(!c),"aria-label":c?"Close menu":"Open menu","aria-expanded":c,"aria-controls":"mobile-menu",children:c?i.jsx(_o,{className:"h-6 w-6","aria-hidden":"true"}):i.jsx(wo,{className:"h-6 w-6","aria-hidden":"true"})})]})]})}),c&&i.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:i.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[i.jsx("a",{href:"#home",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),i.jsx("a",{href:"#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),i.jsx("a",{href:"#subjects",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Subjects"}),i.jsx("a",{href:"#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),i.jsx("a",{href:"#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),i.jsx(he,{to:"/login",className:"block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",role:"menuitem",children:"Log In"}),i.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Qt,className:"block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2","aria-label":"Contact us on WhatsApp",role:"menuitem",children:i.jsxs("span",{className:"inline-flex items-center gap-2",children:[i.jsx(Ye,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})})]})})]}),i.jsxs("main",{id:"main-content",children:[i.jsx("section",{id:"home",className:"pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Hero section",children:i.jsx("div",{className:"max-w-7xl mx-auto",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"relative inline-block px-2",children:i.jsxs("h1",{className:"relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6",children:["MySchola: #1 GCSE Tutoring Platform for",i.jsx("span",{className:"text-blue-600",children:" Years 9-11"})]})}),i.jsxs("p",{className:"text-lg sm:text-xl text-gray-600 mb-3 sm:mb-4 max-w-3xl mx-auto px-2",children:[i.jsx("strong",{children:"GCSE Maths, English & Science"})," via Zoom"]}),i.jsx("p",{className:"text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2",children:"Personalised lessons with one-to-one support from expert tutors. Your child only sees the teacher - no distractions, maximum focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons."}),i.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:i.jsxs("button",{type:"button",onClick:x,className:"bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation","aria-label":"Book a free consultation",children:["Book Free Consultation",i.jsx(at,{className:"ml-2 h-5 w-5 flex-shrink-0","aria-hidden":"true"})]})})]})})}),i.jsx("section",{id:"how-it-works",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"how-it-works-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsx("h2",{id:"how-it-works-heading",className:"text-4xl font-bold text-center mb-12",children:"How Our Lessons Work"}),i.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-3xl mx-auto",children:"A clear, supportive structure that keeps students confident and parents fully in the loop."}),i.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[i.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[i.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:i.jsx(qa,{className:"h-8 w-8 text-white"})}),i.jsx("h3",{className:"text-xl font-semibold mb-2",children:"One-to-One Support"}),i.jsx("p",{className:"text-gray-600",children:"Personalised lessons with one-to-one support. Your child only sees the teacher, ensuring privacy and focus."})]}),i.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[i.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:i.jsx(_h,{className:"h-8 w-8 text-white"})}),i.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Via Zoom"}),i.jsx("p",{className:"text-gray-600",children:"Convenient online lessons from the comfort of your home. High-quality video and interactive whiteboard. Webcam and microphone are optional - we use Zoom chat to check engagement, and parents can monitor participation for privacy."})]}),i.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[i.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:i.jsx(bo,{className:"h-8 w-8 text-white"})}),i.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Student Privacy"}),i.jsx("p",{className:"text-gray-600",children:"Your child only sees the teacher. Private, secure sessions designed for maximum learning focus. Webcam and mic are optional - we use Zoom chat for communication, and parents can check engagement for privacy reasons."})]}),i.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[i.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:i.jsx(Ye,{className:"h-8 w-8 text-white"})}),i.jsx("h3",{className:"text-xl font-semibold mb-2",children:"24/7 Personalised Support"}),i.jsx("p",{className:"text-gray-600",children:"Students can ask questions anytime between lessons. Tutors respond with personalised explanations, feedback, and next-step guidance."})]}),i.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[i.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:i.jsx(bc,{className:"h-8 w-8 text-white"})}),i.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Parent Evenings"}),i.jsx("p",{className:"text-gray-600",children:"Regular parent evenings to review progress, share targets, and agree on the next steps for maximum grade improvement."})]}),i.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[i.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:i.jsx(Gn,{className:"h-8 w-8 text-white"})}),i.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Regular Exam-Style Tests"}),i.jsx("p",{className:"text-gray-600",children:"We set regular exams and topic checks to track progress, build exam technique, and close gaps quickly."})]})]})]})}),i.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"benefits-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsx("h2",{id:"benefits-heading",className:"text-4xl font-bold text-center mb-4",children:"Benefits for Parents & Students"}),i.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Why thousands of families choose MySchola for GCSE success"}),i.jsx("div",{className:"mb-12 flex justify-center",children:i.jsx("img",{src:vh,alt:"Comparison table showing MySchola benefits against other providers and one-to-one home tutors",className:"w-full max-w-6xl h-auto rounded-2xl border border-gray-200 shadow-sm object-contain",loading:"lazy"})}),i.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsxs("div",{className:"flex items-center mb-3",children:[i.jsx(Mr,{className:"h-6 w-6 text-green-500 mr-2","aria-hidden":"true"}),i.jsx("h3",{className:"text-xl font-semibold",children:"Grade Improvement"})]}),i.jsx("p",{className:"text-gray-600",children:"Students consistently improve by 2-3 grades with our proven teaching methods and personalised approach."})]}),i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsxs("div",{className:"flex items-center mb-3",children:[i.jsx(yp,{className:"h-6 w-6 text-blue-500 mr-2","aria-hidden":"true"}),i.jsx("h3",{className:"text-xl font-semibold",children:"Confidence Building"})]}),i.jsx("p",{className:"text-gray-600",children:"Watch your child's confidence soar as they master difficult concepts and see their progress week by week."})]}),i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsxs("div",{className:"flex items-center mb-3",children:[i.jsx(Qr,{className:"h-6 w-6 text-red-500 mr-2","aria-hidden":"true"}),i.jsx("h3",{className:"text-xl font-semibold",children:"Exam Focus"})]}),i.jsx("p",{className:"text-gray-600",children:"Targeted exam preparation with past papers, exam techniques, and strategies tailored to GCSE requirements."})]}),i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsxs("div",{className:"flex items-center mb-3",children:[i.jsx(xo,{className:"h-6 w-6 text-purple-500 mr-2","aria-hidden":"true"}),i.jsx("h3",{className:"text-xl font-semibold",children:"Flexible Scheduling"})]}),i.jsx("p",{className:"text-gray-600",children:"Choose times that work around your family's schedule. Evening and weekend slots available."})]}),i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsxs("div",{className:"flex items-center mb-3",children:[i.jsx(bc,{className:"h-6 w-6 text-orange-500 mr-2","aria-hidden":"true"}),i.jsx("h3",{className:"text-xl font-semibold",children:"Expert Tutors"})]}),i.jsx("p",{className:"text-gray-600",children:"Qualified UK teachers with DBS checks and proven track records of GCSE success."})]}),i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsxs("div",{className:"flex items-center mb-3",children:[i.jsx(Gr,{className:"h-6 w-6 text-indigo-500 mr-2","aria-hidden":"true"}),i.jsx("h3",{className:"text-xl font-semibold",children:"Personalised Curriculum"})]}),i.jsx("p",{className:"text-gray-600",children:"Lessons tailored to your child's learning style, pace, and specific areas that need improvement."})]})]})]})}),i.jsx("section",{id:"testimonials",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"video-testimonials-heading",children:i.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[i.jsx("h2",{id:"video-testimonials-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Video Testimonials"}),i.jsx("p",{className:"text-gray-600 mb-12",children:"Short clips from students, with the subject and grade improvements below."}),i.jsxs("div",{className:"relative sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[i.jsx("button",{type:"button",onClick:oe,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:i.jsx(ze,{className:"h-5 w-5","aria-hidden":"true"})}),i.jsx("div",{className:"overflow-hidden sm:col-start-2",children:i.jsx("div",{className:`flex ${P?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${N*(100/O)}%)`},children:r.map((g,w)=>{const _=Math.floor(O/2),I=w===N+_;return i.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/O}%`},children:i.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${I?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[i.jsx(Rg,{src:g.src,className:"w-full h-auto rounded-t-2xl"}),i.jsxs("div",{className:"p-4 text-center",children:[i.jsx("p",{className:"text-lg font-semibold text-gray-900",children:g.name}),i.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[i.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:g.subjects.join(" / ")}),i.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:B(g.improvedBy)})]})]})]})},`${g.id}-${w}`)})})}),i.jsx("button",{type:"button",onClick:te,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:i.jsx(at,{className:"h-5 w-5","aria-hidden":"true"})}),i.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[i.jsx("button",{type:"button",onClick:oe,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:i.jsx(ze,{className:"h-5 w-5","aria-hidden":"true"})}),i.jsx("button",{type:"button",onClick:te,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:i.jsx(at,{className:"h-5 w-5","aria-hidden":"true"})})]})]})]})}),i.jsx("section",{id:"text-testimonials",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"testimonials-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold text-center mb-4",children:"What Parents & Students Say"}),i.jsx("p",{className:"text-center text-gray-600 mb-12",children:"Real results from real families"}),i.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-12",children:[i.jsxs("div",{className:"bg-blue-600 text-white p-6 rounded-lg text-center",children:[i.jsx("div",{className:"text-4xl font-bold mb-2",children:"95%"}),i.jsx("div",{className:"text-blue-100",children:"Students improve grades"})]}),i.jsxs("div",{className:"bg-green-600 text-white p-6 rounded-lg text-center",children:[i.jsx("div",{className:"text-4xl font-bold mb-2",children:"2-3"}),i.jsx("div",{className:"text-green-100",children:"Grade improvement average"})]}),i.jsxs("div",{className:"bg-purple-600 text-white p-6 rounded-lg text-center",children:[i.jsx("div",{className:"text-4xl font-bold mb-2",children:"300+"}),i.jsx("div",{className:"text-purple-100",children:"Successful students"})]})]}),i.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{name:"Aisha K, Parent",text:"My son started the term lacking confidence in Maths and was sitting at a Grade 5. After weekly Zoom lessons with MySchola, his understanding improved steadily and he finished the term with a Grade 7.",rating:5,result:"Maths: Grade 5 → Grade 7"},{name:"Rahul P, Parent",text:"MySchola was patient and explained the Poetry Anthology texts in a way my daughter could finally understand. Her confidence grew each week and her English grade jumped from a 5 to an 8.",rating:5,result:"English Lit: Grade 5 → Grade 8"},{name:"Emma L., Parent",text:"The confidence my son gained was incredible. He went from hating Chemistry especially Organic Chemistry to loving it. His Chemistry grade improved from 5 to 8. Worth every penny!",rating:5,result:"Chemistry: Grade 5 → Grade 8"},{name:"Michael R., Student",text:"Going through past papers and custom exam style questions with Isam and Hamza made a huge difference. Physics finally started to make sense, and I learned how to approach exam questions properly.",rating:5,result:"Physics: Grade 6 → Grade 9"},{name:"Jasmin K., Parent",text:"As a working parent, the flexible scheduling in the evenings was a lifesaver. My daughter could do sessions that fit around school and activities. Highly recommend!",rating:4,result:"Maths: Grade 6 → Grade 8"},{name:"Emmanuel P., Parent",text:"The privacy of the sessions meant my son felt comfortable making mistakes and asking for help. His confidence has grown so much, and his grades show it!",rating:5,result:"English: Grade 5 → Grade 7"}].map((g,w)=>i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsx("div",{className:"flex mb-4",children:[...Array(g.rating)].map((_,I)=>i.jsx(gg,{className:"h-5 w-5 text-yellow-400 fill-current","aria-hidden":"true"},I))}),i.jsxs("p",{className:"text-gray-600 mb-4 italic",children:['"',g.text,'"']}),i.jsxs("div",{className:"border-t pt-4",children:[i.jsxs("p",{className:"font-semibold text-gray-900",children:["— ",g.name]}),i.jsx("p",{className:"text-sm text-blue-600 font-medium mt-1",children:g.result})]})]},w))})]})}),i.jsx("section",{id:"subjects",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"subjects-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsx("h2",{id:"subjects-heading",className:"text-4xl font-bold text-center mb-4",children:"Subjects We Offer"}),i.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Comprehensive GCSE support for Years 9-11"}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{name:"Maths",description:"GCSE Maths (Foundation & Higher)"},{name:"Combined Science",description:"Trilogy and Synergy pathways"},{name:"Triple Science",description:"Biology, Chemistry, and Physics"},{name:"English Language",description:"Reading, writing, and language skills"},{name:"English Literature",description:"Poetry, prose, and drama analysis"}].map(g=>i.jsx("div",{className:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600",children:i.jsxs("div",{className:"flex items-start mb-2",children:[i.jsx(Ba,{className:"h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0","aria-hidden":"true"}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-lg font-semibold mb-1",children:g.name}),i.jsx("p",{className:"text-gray-600 text-sm",children:g.description})]})]})},g.name))})]})}),i.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-white","aria-labelledby":"universities-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h2",{id:"universities-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Our tutors study at the UK's most prestigious universities"}),i.jsx("p",{className:"text-gray-600 max-w-3xl mx-auto",children:"Your education is everything. That's why we only hire the best in class. All of our tutors have stellar academic backgrounds and have first-hand experience with the rigorous exam process. Learn from the best to achieve your best."})]}),i.jsx("div",{className:"relative overflow-hidden",children:i.jsxs("div",{className:"flex animate-marquee",children:[[{src:Yr,alt:"University of Nottingham",name:"Nottingham"},{src:Jr,alt:"King's College London",name:"King's College"},{src:Xr,alt:"University of Cambridge",name:"Cambridge"},{src:Zr,alt:"Imperial College London",name:"Imperial"},{src:ei,alt:"University of Warwick",name:"Warwick"}].map((g,w)=>i.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:i.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-40 sm:h-48 lg:h-56 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:i.jsx("img",{src:g.src,alt:g.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`first-${w}`)),[{src:Yr,alt:"University of Nottingham",name:"Nottingham"},{src:Jr,alt:"King's College London",name:"King's College"},{src:Xr,alt:"University of Cambridge",name:"Cambridge"},{src:Zr,alt:"Imperial College London",name:"Imperial"},{src:ei,alt:"University of Warwick",name:"Warwick"}].map((g,w)=>i.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:i.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-40 sm:h-48 lg:h-56 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:i.jsx("img",{src:g.src,alt:g.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`second-${w}`))]})})]})}),i.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"exam-boards-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h2",{id:"exam-boards-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Expert tuition for every exam board"}),i.jsx("p",{className:"text-gray-600 max-w-3xl mx-auto",children:"Unlock academic success with tailored support across every exam board. Our team of expert tutors knows the ins and outs of each curriculum, offering customized guidance that fits your exact syllabus."})]}),i.jsx("div",{className:"relative overflow-hidden",children:i.jsx("div",{className:"flex animate-marquee-reverse",children:[...Array(3)].map((g,w)=>[{src:kg,alt:"AQA",name:"AQA"},{src:Cg,alt:"Edexcel",name:"Edexcel"}].map((_,I)=>i.jsx("div",{className:"flex-shrink-0 mx-6 sm:mx-8 lg:mx-10",children:i.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 h-44 sm:h-52 lg:h-60 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:i.jsx("img",{src:_.src,alt:_.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`set-${w}-${I}`)))})})]})}),i.jsx("section",{id:"book-call",className:"py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600","aria-labelledby":"book-call-heading",children:i.jsxs("div",{className:"max-w-4xl mx-auto text-center text-white",children:[i.jsx("h2",{id:"book-call-heading",className:"text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 px-2",children:"Ready to Start Your Child's GCSE Success Journey?"}),i.jsx("p",{className:"text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-2",children:"Book a free consultation to discuss your child's needs and see how we can help them achieve their goals."}),i.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:i.jsxs("button",{type:"button",onClick:x,className:"bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 active:bg-gray-200 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation","aria-label":"Book a free consultation",children:["Book Free Consultation",i.jsx(at,{className:"ml-2 h-5 w-5 flex-shrink-0","aria-hidden":"true"})]})}),i.jsx("p",{className:"text-blue-100 text-sm mt-6",children:"No card required • Free 15-minute consultation"})]})}),i.jsx("section",{id:"faq",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"faq-heading",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsx("h2",{id:"faq-heading",className:"text-4xl font-bold text-center mb-12",children:"Frequently Asked Questions"}),i.jsx("div",{className:"space-y-4",children:[{q:"How do the Zoom lessons work?",a:"Each lesson feels one-to-one via Zoom. Your child will see only the teacher, ensuring privacy and focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We use interactive whiteboards and screen sharing to make lessons engaging and effective. All sessions are recorded for your child to review later."},{q:"What equipment do we need?",a:"You just need a computer, tablet, or laptop with a stable internet connection. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We recommend using a desktop or laptop for the best experience with the interactive whiteboard."},{q:"How long are the sessions?",a:"All lessons are 60 minutes and this duration is fixed."},{q:"Can I choose the tutor?",a:"Yes! During your consultation, we'll discuss your child's learning style and match them with the best tutor. You can also request specific tutors based on availability."},{q:"What if my child misses a session?",a:"All sessions are recorded and uploaded. If your child misses a lesson, they can watch the recording at their convenience. You can ask any questions through our WhatsApp support, available 24/7."},{q:"Do you provide homework and practice materials?",a:"Absolutely! Each tutor provides tailored homework assignments, practice papers, and additional resources to reinforce learning between sessions. All materials are included in the lesson price."},{q:"How quickly will we see results?",a:"Most students see improvement within 4-6 weeks of regular sessions. However, every child is different. We track progress regularly and adjust our approach to ensure maximum effectiveness."},{q:"What age groups do you teach?",a:"We specialize in Years 9-11, preparing students for GCSEs. This includes both Foundation and Higher tier courses across all major GCSE subjects."}].map((g,w)=>i.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[i.jsxs("button",{className:"w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",onClick:()=>J(w),"aria-expanded":m===w,"aria-controls":`faq-answer-${w}`,id:`faq-question-${w}`,children:[i.jsxs("span",{className:"font-semibold text-gray-900 flex items-center",children:[i.jsx(Dp,{className:"h-5 w-5 text-blue-600 mr-2","aria-hidden":"true"}),g.q]}),i.jsx("span",{className:"text-blue-600","aria-hidden":"true","aria-label":m===w?"Collapse answer":"Expand answer",children:m===w?"−":"+"})]}),m===w&&i.jsx("div",{id:`faq-answer-${w}`,className:"px-6 pb-4 text-gray-600",role:"region","aria-labelledby":`faq-question-${w}`,children:g.a})]},w))})]})}),i.jsx("section",{id:"contact",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"contact-heading",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsx("h2",{id:"contact-heading",className:"text-4xl font-bold text-center mb-12",children:"Get in Touch"}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsx(Kr,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),i.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Email Us"}),i.jsx("a",{href:"mailto:myscholauk@gmail.com",className:"text-gray-600 hover:text-blue-600 transition",children:"myscholauk@gmail.com"})]}),i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsx(ug,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),i.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Call Us"}),i.jsx("a",{href:"tel:+447344193804",className:"text-gray-600 hover:text-blue-600 transition",children:"+44 7344 193804"}),i.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Mon-Fri 9am-6pm"})]})]})]})}),i.jsx("section",{id:"privacy-policy",className:"py-20 px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Privacy Policy"}),i.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Information We Collect"}),i.jsx("p",{children:"We collect information that you provide directly to us, including your name, email address, phone number, and information about your child's educational needs. We also collect information automatically when you use our services, such as session recordings and progress data."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. How We Use Your Information"}),i.jsx("p",{children:"We use the information we collect to provide, maintain, and improve our tutoring services, process your bookings, communicate with you, and ensure the safety and security of our platform."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Data Security"}),i.jsx("p",{children:"We implement appropriate technical and organizational measures to protect your personal information. All tutors are DBS checked, and all Zoom sessions are encrypted and secure."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Session Recordings"}),i.jsx("p",{children:"Lessons may be recorded for educational purposes and quality assurance. Recordings are stored securely and are accessible only to authorized personnel and the student's account."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Your Rights"}),i.jsx("p",{children:"You have the right to access, update, or delete your personal information at any time. You can also request a copy of your data or withdraw consent for data processing."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Children's Privacy"}),i.jsx("p",{children:"We take children's privacy seriously. We only collect information necessary to provide our services, and all data handling complies with UK GDPR and Children's Code requirements."})]}),i.jsx("div",{children:i.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})}),i.jsx("section",{id:"terms-of-service",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsx("h2",{className:"text-4xl font-bold text-center mb-4",children:"Refund & Cancellation Policy"}),i.jsx("p",{className:"text-center text-gray-500 mb-12",children:"MySchola - Last updated: 9 March 2026"}),i.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Overview"}),i.jsx("p",{children:"This Refund & Cancellation Policy explains how refunds, cancellations, and subscription changes work for services provided by MySchola."}),i.jsx("p",{children:"By purchasing or subscribing to any MySchola service, you agree to this policy in addition to our Terms of Service."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. Subscription Payments"}),i.jsx("p",{children:"MySchola provides tutoring and educational services on a weekly or monthly subscription basis."}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsx("li",{children:"Payments are processed automatically through Stripe or other secure payment providers."}),i.jsx("li",{children:"Subscription fees vary depending on the subjects, number of sessions, and selected package."}),i.jsx("li",{children:"Subscriptions renew automatically at the end of each billing cycle unless cancelled beforehand."})]})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. 7-Day Money-Back Guarantee"}),i.jsx("p",{children:"We offer a 7-day money-back guarantee from the date of your first payment."}),i.jsx("p",{children:"You may request a full refund within 7 calendar days if:"}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsx("li",{children:"The request is made within 7 days of the initial purchase."}),i.jsx("li",{children:"The request is submitted in writing."}),i.jsx("li",{children:"There has been no excessive or abusive use of the service."})]}),i.jsx("p",{children:"This guarantee allows parents and students to determine whether the service is suitable for their needs."}),i.jsx("p",{children:"Refunds are not intended for customers who primarily consume a significant portion of the service and then request a refund."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Partial Refunds"}),i.jsx("p",{children:"In certain situations, partial refunds may be offered at MySchola's discretion, including but not limited to:"}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsx("li",{children:"Removing one subject from a multi-subject subscription."}),i.jsx("li",{children:"Downgrading to a smaller tutoring package."}),i.jsx("li",{children:"Reduction in services during an active billing period."})]})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. No Refunds After 7 Days"}),i.jsx("p",{children:"After the 7-day money-back guarantee period has passed:"}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsx("li",{children:"No refunds will be issued for time already used."}),i.jsx("li",{children:"Missed lessons, unused sessions, or lack of attendance do not qualify for refunds."}),i.jsx("li",{children:"Refunds are not issued for failure to attend or engage with lessons."})]}),i.jsx("p",{children:"If a subscription is cancelled after this period, the cancellation will only prevent future charges."}),i.jsx("p",{children:"Any partial refund will be calculated proportionally based on the remaining value of the unused service."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Cancellation Policy"}),i.jsx("p",{children:"You may cancel your subscription at any time."}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsx("li",{children:"Cancellations apply to future billing periods only."}),i.jsx("li",{children:"Access to tutoring sessions and learning resources will remain active until the end of the current paid billing period."}),i.jsx("li",{children:"Once a billing cycle has begun, it is considered earned and non-refundable after the 7-day guarantee period."})]})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"7. How to Cancel or Request a Refund"}),i.jsx("p",{children:"All cancellation or refund requests must be submitted in writing."}),i.jsx("p",{children:"You can contact us via WhatsApp or SMS: +44 7344 193804."}),i.jsx("p",{children:"Your request should include:"}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsx("li",{children:"The student's full name."}),i.jsx("li",{children:"The email address or phone number used during registration."}),i.jsx("li",{children:"A clear request to cancel or request a refund."})]}),i.jsx("p",{children:"Our support team will review and respond to requests as quickly as possible."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"8. Immediate Access to Digital Services"}),i.jsx("p",{children:"Access to MySchola's digital platform, tutoring sessions, recordings, and learning resources is typically provided within minutes of successful payment."}),i.jsx("p",{children:"By accessing the service immediately, you acknowledge that:"}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsx("li",{children:"Digital educational services begin immediately after purchase."}),i.jsx("li",{children:"Your subscription is considered active once access has been granted."})]}),i.jsx("p",{children:"This does not affect your statutory rights or the 7-day money-back guarantee, but it helps prevent misuse of the refund policy."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"9. Abuse of the Refund Policy"}),i.jsx("p",{children:"To ensure fairness for all students and families, MySchola reserves the right to:"}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsx("li",{children:"Refuse refund requests where there is evidence of repeated or abusive refund behaviour."}),i.jsx("li",{children:"Suspend or terminate accounts in cases of misuse, fraudulent activity, or bad-faith use of the service."})]})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"10. Changes to This Policy"}),i.jsx("p",{children:"MySchola may update this Refund & Cancellation Policy from time to time."}),i.jsx("p",{children:"The most current version will always be available on our website."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"11. Contact"}),i.jsx("p",{children:"MySchola"}),i.jsx("p",{children:"For support, refunds, or cancellations:"}),i.jsx("p",{children:"WhatsApp / SMS: +44 7344 193804"})]})]})]})})]}),i.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center mb-4",children:[i.jsx(Nt,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),i.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),i.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 9-11 via Zoom."})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"#home",className:"hover:text-white transition",children:"Home"})}),i.jsx("li",{children:i.jsx("a",{href:"#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),i.jsx("li",{children:i.jsx("a",{href:"#subjects",className:"hover:text-white transition",children:"Subjects"})}),i.jsx("li",{children:i.jsx("a",{href:"#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),i.jsx("li",{children:i.jsx("a",{href:"#terms-of-service",className:"hover:text-white transition",children:"Refund & Cancellation Policy"})}),i.jsx("li",{children:i.jsx("a",{href:"#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"mailto:myscholauk@gmail.com",className:"hover:text-white transition",children:"myscholauk@gmail.com"})}),i.jsx("li",{children:i.jsx("a",{href:"tel:+447344193804",className:"hover:text-white transition",children:"+44 7344 193804"})}),i.jsx("li",{children:i.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Qt,className:"text-green-400 hover:text-green-300 transition inline-flex items-center gap-2",children:[i.jsx(Ye,{className:"h-4 w-4","aria-hidden":"true"}),"Contact Us on WhatsApp"]})}),i.jsx("li",{children:i.jsx("button",{type:"button",onClick:x,className:"bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation text-sm sm:text-base","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),i.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:i.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 9-11."]})})]})}),i.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Qt,className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation","aria-label":"Contact us on WhatsApp",children:i.jsx(Ye,{className:"h-5 w-5 sm:h-6 sm:w-6","aria-hidden":"true"})})]})}const Pg=()=>{};var _c={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Dg=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const r=s[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const a=s[t++];e[n++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=s[t++],l=s[t++],c=s[t++],h=((r&7)<<18|(a&63)<<12|(l&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(h>>10)),e[n++]=String.fromCharCode(56320+(h&1023))}else{const a=s[t++],l=s[t++];e[n++]=String.fromCharCode((r&15)<<12|(a&63)<<6|l&63)}}return e.join("")},Ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<s.length;r+=3){const a=s[r],l=r+1<s.length,c=l?s[r+1]:0,h=r+2<s.length,m=h?s[r+2]:0,f=a>>2,y=(a&3)<<4|c>>4;let v=(c&15)<<2|m>>6,N=m&63;h||(N=64,l||(v=64)),n.push(t[f],t[y],t[v],t[N])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Eh(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):Dg(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<s.length;){const a=t[s.charAt(r++)],c=r<s.length?t[s.charAt(r)]:0;++r;const m=r<s.length?t[s.charAt(r)]:64;++r;const y=r<s.length?t[s.charAt(r)]:64;if(++r,a==null||c==null||m==null||y==null)throw new Vg;const v=a<<2|c>>4;if(n.push(v),m!==64){const N=c<<4&240|m>>2;if(n.push(N),y!==64){const k=m<<6&192|y;n.push(k)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Vg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mg=function(s){const e=Eh(s);return Ih.encodeByteArray(e,!0)},ti=function(s){return Mg(s).replace(/\./g,"")},Nh=function(s){try{return Ih.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Og=()=>Lg().__FIREBASE_DEFAULTS__,Fg=()=>{if(typeof process>"u"||typeof _c>"u")return;const s=_c.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Ug=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Nh(s[1]);return e&&JSON.parse(e)},Si=()=>{try{return Pg()||Og()||Fg()||Ug()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Th=s=>{var e,t;return(t=(e=Si())==null?void 0:e.emulatorHosts)==null?void 0:t[s]},Bg=s=>{const e=Th(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},jh=()=>{var s;return(s=Si())==null?void 0:s.config},Ah=s=>{var e;return(e=Si())==null?void 0:e[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function nn(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Sh(s){return(await fetch(s,{credentials:"include"})).ok}/**
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
 */function $g(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=s.iat||0,a=s.sub||s.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...s};return[ti(JSON.stringify(t)),ti(JSON.stringify(l)),""].join(".")}const Bn={};function Wg(){const s={prod:[],emulator:[]};for(const e of Object.keys(Bn))Bn[e]?s.emulator.push(e):s.prod.push(e);return s}function Hg(s){let e=document.getElementById(s),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),t=!0),{created:t,element:e}}let vc=!1;function kh(s,e){if(typeof window>"u"||typeof document>"u"||!nn(window.location.host)||Bn[s]===e||Bn[s]||vc)return;Bn[s]=e;function t(v){return`__firebase__banner__${v}`}const n="__firebase__banner",a=Wg().prod.length>0;function l(){const v=document.getElementById(n);v&&v.remove()}function c(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function h(v,N){v.setAttribute("width","24"),v.setAttribute("id",N),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function m(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{vc=!0,l()},v}function f(v,N){v.setAttribute("id",N),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function y(){const v=Hg(n),N=t("text"),k=document.getElementById(N)||document.createElement("span"),P=t("learnmore"),R=document.getElementById(P)||document.createElement("a"),O=t("preprendIcon"),D=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const B=v.element;c(B),f(R,P);const J=m();h(D,O),B.append(D,k,R,J),document.body.appendChild(B)}a?(k.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function Gg(){var e;const s=(e=Si())==null?void 0:e.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Kg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ch(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Qg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yg(){const s=Ge();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Jg(){return!Gg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rh(){try{return typeof indexedDB=="object"}catch{return!1}}function Ph(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var a;e(((a=r.error)==null?void 0:a.message)||"")}}catch(t){e(t)}})}function Xg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="FirebaseError";class pt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Zg,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,As.prototype.create)}}class As{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],l=a?ey(a,n):"Error",c=`${this.serviceName}: ${l} (${r}).`;return new pt(r,c,n)}}function ey(s,e){return s.replace(ty,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const ty=/\{\$([^}]+)}/g;function sy(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function ss(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const a=s[r],l=e[r];if(Ec(a)&&Ec(l)){if(!ss(a,l))return!1}else if(a!==l)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function Ec(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Vn(s){const e={};return s.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[r,a]=n.split("=");e[decodeURIComponent(r)]=decodeURIComponent(a)}}),e}function Mn(s){const e=s.indexOf("?");if(!e)return"";const t=s.indexOf("#",e);return s.substring(e,t>0?t:void 0)}function ny(s,e){const t=new ry(s,e);return t.subscribe.bind(t)}class ry{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");iy(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=va),r.error===void 0&&(r.error=va),r.complete===void 0&&(r.complete=va);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iy(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function va(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=1e3,oy=2,ly=14400*1e3,cy=.5;function Ic(s,e=ay,t=oy){const n=e*Math.pow(t,s),r=Math.round(cy*n*(Math.random()-.5)*2);return Math.min(ly,n+r)}/**
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
 */function Ee(s){return s&&s._delegate?s._delegate:s}class dt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new qg;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dy(e))try{this.getOrInitializeService({instanceIdentifier:xs})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:r});n.resolve(a)}catch{}}}}clearInstance(e=xs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xs){return this.instances.has(e)}getOptions(e=xs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[a,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(a);n===c&&l.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const a=this.instances.get(n);return a&&e(a,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:hy(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=xs){return this.component?this.component.multipleInstances?e:xs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hy(s){return s===xs?void 0:s}function dy(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new uy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(se||(se={}));const fy={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},py=se.INFO,gy={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},yy=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),r=gy[e];if(r)console[r](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ki{constructor(e){this.name=e,this._logLevel=py,this._logHandler=yy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const xy=(s,e)=>e.some(t=>s instanceof t);let Nc,Tc;function by(){return Nc||(Nc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wy(){return Tc||(Tc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dh=new WeakMap,Wa=new WeakMap,Vh=new WeakMap,Ea=new WeakMap,vo=new WeakMap;function _y(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",a),s.removeEventListener("error",l)},a=()=>{t(Jt(s.result)),r()},l=()=>{n(s.error),r()};s.addEventListener("success",a),s.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&Dh.set(t,s)}).catch(()=>{}),vo.set(e,s),e}function vy(s){if(Wa.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",a),s.removeEventListener("error",l),s.removeEventListener("abort",l)},a=()=>{t(),r()},l=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",a),s.addEventListener("error",l),s.addEventListener("abort",l)});Wa.set(s,e)}let Ha={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return Wa.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Vh.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Jt(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function Ey(s){Ha=s(Ha)}function Iy(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(Ia(this),e,...t);return Vh.set(n,e.sort?e.sort():[e]),Jt(n)}:wy().includes(s)?function(...e){return s.apply(Ia(this),e),Jt(Dh.get(this))}:function(...e){return Jt(s.apply(Ia(this),e))}}function Ny(s){return typeof s=="function"?Iy(s):(s instanceof IDBTransaction&&vy(s),xy(s,by())?new Proxy(s,Ha):s)}function Jt(s){if(s instanceof IDBRequest)return _y(s);if(Ea.has(s))return Ea.get(s);const e=Ny(s);return e!==s&&(Ea.set(s,e),vo.set(e,s)),e}const Ia=s=>vo.get(s);function Mh(s,e,{blocked:t,upgrade:n,blocking:r,terminated:a}={}){const l=indexedDB.open(s,e),c=Jt(l);return n&&l.addEventListener("upgradeneeded",h=>{n(Jt(l.result),h.oldVersion,h.newVersion,Jt(l.transaction),h)}),t&&l.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{a&&h.addEventListener("close",()=>a()),r&&h.addEventListener("versionchange",m=>r(m.oldVersion,m.newVersion,m))}).catch(()=>{}),c}const Ty=["get","getKey","getAll","getAllKeys","count"],jy=["put","add","delete","clear"],Na=new Map;function jc(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Na.get(e))return Na.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=jy.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||Ty.includes(t)))return;const a=async function(l,...c){const h=this.transaction(l,r?"readwrite":"readonly");let m=h.store;return n&&(m=m.index(c.shift())),(await Promise.all([m[t](...c),r&&h.done]))[0]};return Na.set(e,a),a}Ey(s=>({...s,get:(e,t,n)=>jc(e,t)||s.get(e,t,n),has:(e,t)=>!!jc(e,t)||s.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Sy(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Sy(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const za="@firebase/app",Ac="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new ki("@firebase/app"),ky="@firebase/app-compat",Cy="@firebase/analytics-compat",Ry="@firebase/analytics",Py="@firebase/app-check-compat",Dy="@firebase/app-check",Vy="@firebase/auth",My="@firebase/auth-compat",Ly="@firebase/database",Oy="@firebase/data-connect",Fy="@firebase/database-compat",Uy="@firebase/functions",By="@firebase/functions-compat",qy="@firebase/installations",$y="@firebase/installations-compat",Wy="@firebase/messaging",Hy="@firebase/messaging-compat",zy="@firebase/performance",Gy="@firebase/performance-compat",Ky="@firebase/remote-config",Qy="@firebase/remote-config-compat",Yy="@firebase/storage",Jy="@firebase/storage-compat",Xy="@firebase/firestore",Zy="@firebase/ai",ex="@firebase/firestore-compat",tx="firebase",sx="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="[DEFAULT]",nx={[za]:"fire-core",[ky]:"fire-core-compat",[Ry]:"fire-analytics",[Cy]:"fire-analytics-compat",[Dy]:"fire-app-check",[Py]:"fire-app-check-compat",[Vy]:"fire-auth",[My]:"fire-auth-compat",[Ly]:"fire-rtdb",[Oy]:"fire-data-connect",[Fy]:"fire-rtdb-compat",[Uy]:"fire-fn",[By]:"fire-fn-compat",[qy]:"fire-iid",[$y]:"fire-iid-compat",[Wy]:"fire-fcm",[Hy]:"fire-fcm-compat",[zy]:"fire-perf",[Gy]:"fire-perf-compat",[Ky]:"fire-rc",[Qy]:"fire-rc-compat",[Yy]:"fire-gcs",[Jy]:"fire-gcs-compat",[Xy]:"fire-fst",[ex]:"fire-fst-compat",[Zy]:"fire-vertex","fire-js":"fire-js",[tx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new Map,rx=new Map,Ka=new Map;function Sc(s,e){try{s.container.addComponent(e)}catch(t){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function Tt(s){const e=s.name;if(Ka.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;Ka.set(e,s);for(const t of si.values())Sc(t,s);for(const t of rx.values())Sc(t,s);return!0}function Ss(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function ct(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new As("app","Firebase",ix);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=sx;function Lh(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:Ga,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw Xt.create("bad-app-name",{appName:String(r)});if(t||(t=jh()),!t)throw Xt.create("no-options");const a=si.get(r);if(a){if(ss(t,a.options)&&ss(n,a.config))return a;throw Xt.create("duplicate-app",{appName:r})}const l=new my(r);for(const h of Ka.values())l.addComponent(h);const c=new ax(t,n,l);return si.set(r,c),c}function Eo(s=Ga){const e=si.get(s);if(!e&&s===Ga&&jh())return Lh();if(!e)throw Xt.create("no-app",{appName:s});return e}function ot(s,e,t){let n=nx[s]??s;t&&(n+=`-${t}`);const r=n.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const l=[`Unable to register library "${n}" with version "${e}":`];r&&l.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(l.join(" "));return}Tt(new dt(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const ox="firebase-heartbeat-database",lx=1,Kn="firebase-heartbeat-store";let Ta=null;function Oh(){return Ta||(Ta=Mh(ox,lx,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Kn)}catch(t){console.warn(t)}}}}).catch(s=>{throw Xt.create("idb-open",{originalErrorMessage:s.message})})),Ta}async function cx(s){try{const t=(await Oh()).transaction(Kn),n=await t.objectStore(Kn).get(Fh(s));return await t.done,n}catch(e){if(e instanceof pt)Pt.warn(e.message);else{const t=Xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pt.warn(t.message)}}}async function kc(s,e){try{const n=(await Oh()).transaction(Kn,"readwrite");await n.objectStore(Kn).put(e,Fh(s)),await n.done}catch(t){if(t instanceof pt)Pt.warn(t.message);else{const n=Xt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pt.warn(n.message)}}}function Fh(s){return`${s.name}!${s.options.appId}`}/**
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
 */const ux=1024,hx=30;class dx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fx(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Cc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:r}),this._heartbeatsCache.heartbeats.length>hx){const l=px(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Pt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Cc(),{heartbeatsToSend:n,unsentEntries:r}=mx(this._heartbeatsCache.heartbeats),a=ti(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Pt.warn(t),""}}}function Cc(){return new Date().toISOString().substring(0,10)}function mx(s,e=ux){const t=[];let n=s.slice();for(const r of s){const a=t.find(l=>l.agent===r.agent);if(a){if(a.dates.push(r.date),Rc(t)>e){a.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Rc(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class fx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rh()?Ph().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cx(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return kc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return kc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Rc(s){return ti(JSON.stringify({version:2,heartbeats:s})).length}function px(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(s){Tt(new dt("platform-logger",e=>new Ay(e),"PRIVATE")),Tt(new dt("heartbeat",e=>new dx(e),"PRIVATE")),ot(za,Ac,s),ot(za,Ac,"esm2020"),ot("fire-js","")}gx("");var yx="firebase",xx="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot(yx,xx,"app");function Uh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bx=Uh,Bh=new As("auth","Firebase",Uh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new ki("@firebase/auth");function wx(s,...e){ni.logLevel<=se.WARN&&ni.warn(`Auth (${rn}): ${s}`,...e)}function Lr(s,...e){ni.logLevel<=se.ERROR&&ni.error(`Auth (${rn}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(s,...e){throw Io(s,...e)}function bt(s,...e){return Io(s,...e)}function qh(s,e,t){const n={...bx(),[e]:t};return new As("auth","Firebase",n).create(e,{appName:s.name})}function Zt(s){return qh(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Io(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return Bh.create(s,...e)}function H(s,e,...t){if(!s)throw Io(e,...t)}function At(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Lr(e),new Error(e)}function Dt(s,e){s||At(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function _x(){return Pc()==="http:"||Pc()==="https:"}function Pc(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_x()||Ch()||"connection"in navigator)?navigator.onLine:!0}function Ex(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dt(t>e,"Short delay should be less than long delay!"),this.isMobile=zg()||Qg()}get(){return vx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(s,e){Dt(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Tx=new or(3e4,6e4);function ks(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function us(s,e,t,n,r={}){return Wh(s,r,async()=>{let a={},l={};n&&(e==="GET"?l=n:a={body:JSON.stringify(n)});const c=ar({key:s.config.apiKey,...l}).slice(1),h=await s._getAdditionalHeaders();h["Content-Type"]="application/json",s.languageCode&&(h["X-Firebase-Locale"]=s.languageCode);const m={method:e,headers:h,...a};return Kg()||(m.referrerPolicy="no-referrer"),s.emulatorConfig&&nn(s.emulatorConfig.host)&&(m.credentials="include"),$h.fetch()(await Hh(s,s.config.apiHost,t,c),m)})}async function Wh(s,e,t){s._canInitEmulator=!1;const n={...Ix,...e};try{const r=new Ax(s),a=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw Ar(s,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const c=a.ok?l.errorMessage:l.error.message,[h,m]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ar(s,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw Ar(s,"email-already-in-use",l);if(h==="USER_DISABLED")throw Ar(s,"user-disabled",l);const f=n[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw qh(s,f,m);mt(s,f)}}catch(r){if(r instanceof pt)throw r;mt(s,"network-request-failed",{message:String(r)})}}async function Ci(s,e,t,n,r={}){const a=await us(s,e,t,n,r);return"mfaPendingCredential"in a&&mt(s,"multi-factor-auth-required",{_serverResponse:a}),a}async function Hh(s,e,t,n){const r=`${e}${t}?${n}`,a=s,l=a.config.emulator?No(s.config,r):`${s.config.apiScheme}://${r}`;return Nx.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}function jx(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ax{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(bt(this.auth,"network-request-failed")),Tx.get())})}}function Ar(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=bt(s,e,n);return r.customData._tokenResponse=t,r}function Dc(s){return s!==void 0&&s.enterprise!==void 0}class Sx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return jx(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function kx(s,e){return us(s,"GET","/v2/recaptchaConfig",ks(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cx(s,e){return us(s,"POST","/v1/accounts:delete",e)}async function ri(s,e){return us(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rx(s,e=!1){const t=Ee(s),n=await t.getIdToken(e),r=To(n);H(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const a=typeof r.firebase=="object"?r.firebase:void 0,l=a==null?void 0:a.sign_in_provider;return{claims:r,token:n,authTime:qn(ja(r.auth_time)),issuedAtTime:qn(ja(r.iat)),expirationTime:qn(ja(r.exp)),signInProvider:l||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function ja(s){return Number(s)*1e3}function To(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return Lr("JWT malformed, contained fewer than 3 sections"),null;try{const r=Nh(t);return r?JSON.parse(r):(Lr("Failed to decode base64 JWT payload"),null)}catch(r){return Lr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Vc(s){const e=To(s);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof pt&&Px(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function Px({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qn(this.lastLoginAt),this.creationTime=qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(s){var y;const e=s.auth,t=await s.getIdToken(),n=await Qn(s,ri(e,{idToken:t}));H(n==null?void 0:n.users.length,e,"internal-error");const r=n.users[0];s._notifyReloadListener(r);const a=(y=r.providerUserInfo)!=null&&y.length?zh(r.providerUserInfo):[],l=Mx(s.providerData,a),c=s.isAnonymous,h=!(s.email&&r.passwordHash)&&!(l!=null&&l.length),m=c?h:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Ya(r.createdAt,r.lastLoginAt),isAnonymous:m};Object.assign(s,f)}async function Vx(s){const e=Ee(s);await ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mx(s,e){return[...s.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function zh(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lx(s,e){const t=await Wh(s,{},async()=>{const n=ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:a}=s.config,l=await Hh(s,r,"/v1/token",`key=${a}`),c=await s._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:c,body:n};return s.emulatorConfig&&nn(s.emulatorConfig.host)&&(h.credentials="include"),$h.fetch()(l,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ox(s,e){return us(s,"POST","/v2/accounts:revokeToken",ks(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=Vc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:a}=await Lx(e,t);this.updateTokensAndExpiration(n,r,Number(a))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:a}=t,l=new $s;return n&&(H(typeof n=="string","internal-error",{appName:e}),l.refreshToken=n),r&&(H(typeof r=="string","internal-error",{appName:e}),l.accessToken=r),a&&(H(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $s,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(s,e){H(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class ut{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new Dx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ya(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Qn(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Rx(this,e)}reload(){return Vx(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ut({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ii(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(Zt(this.auth));const e=await this.getIdToken();return await Qn(this,Cx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,a=t.phoneNumber??void 0,l=t.photoURL??void 0,c=t.tenantId??void 0,h=t._redirectEventId??void 0,m=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:y,emailVerified:v,isAnonymous:N,providerData:k,stsTokenManager:P}=t;H(y&&P,e,"internal-error");const R=$s.fromJSON(this.name,P);H(typeof y=="string",e,"internal-error"),Wt(n,e.name),Wt(r,e.name),H(typeof v=="boolean",e,"internal-error"),H(typeof N=="boolean",e,"internal-error"),Wt(a,e.name),Wt(l,e.name),Wt(c,e.name),Wt(h,e.name),Wt(m,e.name),Wt(f,e.name);const O=new ut({uid:y,auth:e,email:r,emailVerified:v,displayName:n,isAnonymous:N,photoURL:l,phoneNumber:a,tenantId:c,stsTokenManager:R,createdAt:m,lastLoginAt:f});return k&&Array.isArray(k)&&(O.providerData=k.map(D=>({...D}))),h&&(O._redirectEventId=h),O}static async _fromIdTokenResponse(e,t,n=!1){const r=new $s;r.updateFromServerResponse(t);const a=new ut({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ii(a),a}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];H(r.localId!==void 0,"internal-error");const a=r.providerUserInfo!==void 0?zh(r.providerUserInfo):[],l=!(r.email&&r.passwordHash)&&!(a!=null&&a.length),c=new $s;c.updateFromIdToken(n);const h=new ut({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:l}),m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ya(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(a!=null&&a.length)};return Object.assign(h,m),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Map;function St(s){Dt(s instanceof Function,"Expected a class definition");let e=Mc.get(s);return e?(Dt(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,Mc.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gh.type="NONE";const Lc=Gh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(s,e,t){return`firebase:${s}:${e}:${t}`}class Ws{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:a}=this.auth;this.fullUserKey=Or(this.userKey,r.apiKey,a),this.fullPersistenceKey=Or("persistence",r.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ri(this.auth,{idToken:e}).catch(()=>{});return t?ut._fromGetAccountInfoResponse(this.auth,t,e):null}return ut._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ws(St(Lc),e,n);const r=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=r[0]||St(Lc);const l=Or(n,e.config.apiKey,e.name);let c=null;for(const m of t)try{const f=await m._get(l);if(f){let y;if(typeof f=="string"){const v=await ri(e,{idToken:f}).catch(()=>{});if(!v)break;y=await ut._fromGetAccountInfoResponse(e,v,f)}else y=ut._fromJSON(e,f);m!==a&&(c=y),a=m;break}}catch{}const h=r.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!h.length?new Ws(a,e,n):(a=h[0],c&&await a._set(l,c.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(l)}catch{}})),new Ws(a,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zh(e))return"Blackberry";if(ed(e))return"Webos";if(Qh(e))return"Safari";if((e.includes("chrome/")||Yh(e))&&!e.includes("edge/"))return"Chrome";if(Xh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Kh(s=Ge()){return/firefox\//i.test(s)}function Qh(s=Ge()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yh(s=Ge()){return/crios\//i.test(s)}function Jh(s=Ge()){return/iemobile/i.test(s)}function Xh(s=Ge()){return/android/i.test(s)}function Zh(s=Ge()){return/blackberry/i.test(s)}function ed(s=Ge()){return/webos/i.test(s)}function jo(s=Ge()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Fx(s=Ge()){var e;return jo(s)&&!!((e=window.navigator)!=null&&e.standalone)}function Ux(){return Yg()&&document.documentMode===10}function td(s=Ge()){return jo(s)||Xh(s)||ed(s)||Zh(s)||/windows phone/i.test(s)||Jh(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(s,e=[]){let t;switch(s){case"Browser":t=Oc(Ge());break;case"Worker":t=`${Oc(Ge())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${rn}/${n}`}/**
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
 */class Bx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=a=>new Promise((l,c)=>{try{const h=e(a);l(h)}catch(h){c(h)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function qx(s,e={}){return us(s,"GET","/v2/passwordPolicy",ks(s,e))}/**
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
 */const $x=6;class Wx{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??$x,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fc(this),this.idTokenSubscription=new Fc(this),this.beforeStateQueue=new Bx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=St(t)),this._initializationPromise=this.queue(async()=>{var n,r,a;if(!this._deleted&&(this.persistenceManager=await Ws.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ri(this,{idToken:e}),n=await ut._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var a;if(ct(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(a=this.redirectUser)==null?void 0:a._redirectEventId,c=n==null?void 0:n._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===c)&&(h!=null&&h.user)&&(n=h.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(l){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ii(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ex()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ct(this.app))return Promise.reject(Zt(this));const t=e?Ee(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(Zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ct(this.app)?Promise.reject(Zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qx(this),t=new Wx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new As("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Ox(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&St(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await Ws.create(this,[St(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,n,r);return()=>{l=!0,h()}}else{const h=e.addObserver(t);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&wx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function an(s){return Ee(s)}class Fc{constructor(e){this.auth=e,this.observer=null,this.addObserver=ny(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zx(s){Ri=s}function nd(s){return Ri.loadJS(s)}function Gx(){return Ri.recaptchaEnterpriseScript}function Kx(){return Ri.gapiScript}function Qx(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class Yx{constructor(){this.enterprise=new Jx}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Jx{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Xx="recaptcha-enterprise",rd="NO_RECAPTCHA";class Zx{constructor(e){this.type=Xx,this.auth=an(e)}async verify(e="verify",t=!1){async function n(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,c)=>{kx(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const m=new Sx(h);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,l(m.siteKey)}}).catch(h=>{c(h)})})}function r(a,l,c){const h=window.grecaptcha;Dc(h)?h.enterprise.ready(()=>{h.enterprise.execute(a,{action:e}).then(m=>{l(m)}).catch(()=>{l(rd)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Yx().execute("siteKey",{action:"verify"}):new Promise((a,l)=>{n(this.auth).then(c=>{if(!t&&Dc(window.grecaptcha))r(c,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Gx();h.length!==0&&(h+=c),nd(h).then(()=>{r(c,a,l)}).catch(m=>{l(m)})}}).catch(c=>{l(c)})})}}async function Uc(s,e,t,n=!1,r=!1){const a=new Zx(s);let l;if(r)l=rd;else try{l=await a.verify(t)}catch{l=await a.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const h=c.phoneEnrollmentInfo.phoneNumber,m=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:m,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const h=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return n?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Bc(s,e,t,n,r){var a;if((a=s._getRecaptchaConfig())!=null&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Uc(s,e,t,t==="getOobCode");return n(s,l)}else return n(s,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Uc(s,e,t,t==="getOobCode");return n(s,c)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(s,e){const t=Ss(s,"auth");if(t.isInitialized()){const r=t.getImmediate(),a=t.getOptions();if(ss(a,e??{}))return r;mt(r,"already-initialized")}return t.initialize({options:e})}function t0(s,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(St);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function s0(s,e,t){const n=an(s);H(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!1,a=id(e),{host:l,port:c}=n0(e),h=c===null?"":`:${c}`,m={url:`${a}//${l}${h}/`},f=Object.freeze({host:l,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){H(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),H(ss(m,n.config.emulator)&&ss(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=m,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,nn(l)?(Sh(`${a}//${l}${h}`),kh("Auth",!0)):r0()}function id(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function n0(s){const e=id(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const a=r[1];return{host:a,port:qc(n.substr(a.length+1))}}else{const[a,l]=n.split(":");return{host:a,port:qc(l)}}}function qc(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function r0(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return At("not implemented")}_getIdTokenResponse(e){return At("not implemented")}_linkToIdToken(e,t){return At("not implemented")}_getReauthenticationResolver(e){return At("not implemented")}}async function i0(s,e){return us(s,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(s,e){return Ci(s,"POST","/v1/accounts:signInWithPassword",ks(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(s,e){return Ci(s,"POST","/v1/accounts:signInWithEmailLink",ks(s,e))}async function l0(s,e){return Ci(s,"POST","/v1/accounts:signInWithEmailLink",ks(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Ao{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Yn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Yn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bc(e,t,"signInWithPassword",a0);case"emailLink":return o0(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bc(e,n,"signUpPassword",i0);case"emailLink":return l0(e,{idToken:t,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(s,e){return Ci(s,"POST","/v1/accounts:signInWithIdp",ks(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0="http://localhost";class vs extends Ao{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,...a}=t;if(!n||!r)return null;const l=new vs(n,r);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return Hs(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Hs(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Hs(e,t)}buildRequest(){const e={requestUri:c0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ar(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function h0(s){const e=Vn(Mn(s)).link,t=e?Vn(Mn(e)).deep_link_id:null,n=Vn(Mn(s)).deep_link_id;return(n?Vn(Mn(n)).link:null)||n||t||e||s}class So{constructor(e){const t=Vn(Mn(e)),n=t.apiKey??null,r=t.oobCode??null,a=u0(t.mode??null);H(n&&r&&a,"argument-error"),this.apiKey=n,this.operation=a,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=h0(e);try{return new So(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.providerId=on.PROVIDER_ID}static credential(e,t){return Yn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=So.parseLink(t);return H(n,"argument-error"),Yn._fromEmailAndCode(e,n.code,n.tenantId)}}on.PROVIDER_ID="password";on.EMAIL_PASSWORD_SIGN_IN_METHOD="password";on.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends ad{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends lr{constructor(){super("facebook.com")}static credential(e){return vs._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends lr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vs._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return zt.credential(t,n)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends lr{constructor(){super("github.com")}static credential(e){return vs._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends lr{constructor(){super("twitter.com")}static credential(e,t){return vs._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Kt.credential(t,n)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const a=await ut._fromIdTokenResponse(e,n,r),l=$c(n);return new Ys({user:a,providerId:l,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=$c(n);return new Ys({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function $c(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends pt{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ai.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ai(e,t,n,r)}}function od(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ai._fromErrorAndOperation(s,a,e,n):a})}async function d0(s,e,t=!1){const n=await Qn(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return Ys._forOperation(s,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(s,e,t=!1){const{auth:n}=s;if(ct(n.app))return Promise.reject(Zt(n));const r="reauthenticate";try{const a=await Qn(s,od(n,r,e,s),t);H(a.idToken,n,"internal-error");const l=To(a.idToken);H(l,n,"internal-error");const{sub:c}=l;return H(s.uid===c,n,"user-mismatch"),Ys._forOperation(s,r,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&mt(n,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld(s,e,t=!1){if(ct(s.app))return Promise.reject(Zt(s));const n="signIn",r=await od(s,n,e),a=await Ys._fromIdTokenResponse(s,n,r);return t||await s._updateCurrentUser(a.user),a}async function f0(s,e){return ld(an(s),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(s){const e=an(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function g0(s,e,t){return ct(s.app)?Promise.reject(Zt(s)):f0(Ee(s),on.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&p0(s),n})}function y0(s,e,t,n){return Ee(s).onIdTokenChanged(e,t,n)}function x0(s,e,t){return Ee(s).beforeAuthStateChanged(e,t)}function Pi(s,e,t,n){return Ee(s).onAuthStateChanged(e,t,n)}function b0(s){return Ee(s).signOut()}const oi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(oi,"1"),this.storage.removeItem(oi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=1e3,_0=10;class ud extends cd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=td(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,c,h)=>{this.notifyListeners(l,h)});return}const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const l=this.storage.getItem(n);!t&&this.localCache[n]===l||this.notifyListeners(n,l)},a=this.storage.getItem(n);Ux()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,_0):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},w0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ud.type="LOCAL";const v0=ud;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd extends cd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hd.type="SESSION";const dd=hd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Di{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new Di(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:a}=t.data,l=this.handlersMap[r];if(!(l!=null&&l.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const c=Array.from(l).map(async m=>m(t.origin,a)),h=await E0(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Di.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,l;return new Promise((c,h)=>{const m=ko("",20);r.port1.start();const f=setTimeout(()=>{h(new Error("unsupported_event"))},n);l={messageChannel:r,onMessage(y){const v=y;if(v.data.eventId===m)switch(v.data.status){case"ack":clearTimeout(f),a=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),c(v.data.response);break;default:clearTimeout(f),clearTimeout(a),h(new Error("invalid_response"));break}}},this.handlers.add(l),r.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[r.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function N0(s){wt().location.href=s}/**
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
 */function md(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function T0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function j0(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function A0(){return md()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="firebaseLocalStorageDb",S0=1,li="firebaseLocalStorage",pd="fbase_key";class cr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vi(s,e){return s.transaction([li],e?"readwrite":"readonly").objectStore(li)}function k0(){const s=indexedDB.deleteDatabase(fd);return new cr(s).toPromise()}function Ja(){const s=indexedDB.open(fd,S0);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(li,{keyPath:pd})}catch(r){t(r)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(li)?e(n):(n.close(),await k0(),e(await Ja()))})})}async function Wc(s,e,t){const n=Vi(s,!0).put({[pd]:e,value:t});return new cr(n).toPromise()}async function C0(s,e){const t=Vi(s,!1).get(e),n=await new cr(t).toPromise();return n===void 0?null:n.value}function Hc(s,e){const t=Vi(s,!0).delete(e);return new cr(t).toPromise()}const R0=800,P0=3;class gd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ja(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>P0)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return md()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Di._getInstance(A0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await T0(),!this.activeServiceWorker)return;this.sender=new I0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||j0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ja();return await Wc(e,oi,"1"),await Hc(e,oi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wc(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>C0(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const a=Vi(r,!1).getAll();return new cr(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:a}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(a)&&(this.notifyListeners(r,a),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gd.type="LOCAL";const D0=gd;new or(3e4,6e4);/**
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
 */function V0(s,e){return e?St(e):(H(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends Ao{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Hs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function M0(s){return ld(s.auth,new Co(s),s.bypassAuthState)}function L0(s){const{auth:e,user:t}=s;return H(t,e,"internal-error"),m0(t,new Co(s),s.bypassAuthState)}async function O0(s){const{auth:e,user:t}=s;return H(t,e,"internal-error"),d0(t,new Co(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t,n,r,a=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:a,error:l,type:c}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:t,sessionId:n,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M0;case"linkViaPopup":case"linkViaRedirect":return O0;case"reauthViaPopup":case"reauthViaRedirect":return L0;default:mt(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=new or(2e3,1e4);class qs extends yd{constructor(e,t,n,r,a){super(e,t,r,a),this.provider=n,this.authWindow=null,this.pollId=null,qs.currentPopupAction&&qs.currentPopupAction.cancel(),qs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=ko();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,F0.get())};e()}}qs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0="pendingRedirect",Fr=new Map;class B0 extends yd{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Fr.get(this.auth._key());if(!e){try{const n=await q0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Fr.set(this.auth._key(),e)}return this.bypassAuthState||Fr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function q0(s,e){const t=H0(e),n=W0(s);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}function $0(s,e){Fr.set(s._key(),e)}function W0(s){return St(s._redirectPersistence)}function H0(s){return Or(U0,s.config.apiKey,s.name)}async function z0(s,e,t=!1){if(ct(s.app))return Promise.reject(Zt(s));const n=an(s),r=V0(n,e),l=await new B0(n,r,t).execute();return l&&!t&&(delete l.user._redirectEventId,await n._persistUserIfCurrent(l.user),await n._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=600*1e3;class K0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Q0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!xd(e)){const r=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(bt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=G0&&this.cachedEventUids.clear(),this.cachedEventUids.has(zc(e))}saveEventToCache(e){this.cachedEventUids.add(zc(e)),this.lastProcessedEventTime=Date.now()}}function zc(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function xd({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Q0(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xd(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y0(s,e={}){return us(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,X0=/^https?/;async function Z0(s){if(s.config.emulator)return;const{authorizedDomains:e}=await Y0(s);for(const t of e)try{if(eb(t))return}catch{}mt(s,"unauthorized-domain")}function eb(s){const e=Qa(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const l=new URL(s);return l.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===n}if(!X0.test(t))return!1;if(J0.test(s))return n===s;const r=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
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
 */const tb=new or(3e4,6e4);function Gc(){const s=wt().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function sb(s){return new Promise((e,t)=>{var r,a,l;function n(){Gc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gc(),t(bt(s,"network-request-failed"))},timeout:tb.get()})}if((a=(r=wt().gapi)==null?void 0:r.iframes)!=null&&a.Iframe)e(gapi.iframes.getContext());else if((l=wt().gapi)!=null&&l.load)n();else{const c=Qx("iframefcb");return wt()[c]=()=>{gapi.load?n():t(bt(s,"network-request-failed"))},nd(`${Kx()}?onload=${c}`).catch(h=>t(h))}}).catch(e=>{throw Ur=null,e})}let Ur=null;function nb(s){return Ur=Ur||sb(s),Ur}/**
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
 */const rb=new or(5e3,15e3),ib="__/auth/iframe",ab="emulator/auth/iframe",ob={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cb(s){const e=s.config;H(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?No(e,ab):`https://${s.config.authDomain}/${ib}`,n={apiKey:e.apiKey,appName:s.name,v:rn},r=lb.get(s.config.apiHost);r&&(n.eid=r);const a=s._getFrameworks();return a.length&&(n.fw=a.join(",")),`${t}?${ar(n).slice(1)}`}async function ub(s){const e=await nb(s),t=wt().gapi;return H(t,s,"internal-error"),e.open({where:document.body,url:cb(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ob,dontclear:!0},n=>new Promise(async(r,a)=>{await n.restyle({setHideOnLeave:!1});const l=bt(s,"network-request-failed"),c=wt().setTimeout(()=>{a(l)},rb.get());function h(){wt().clearTimeout(c),r(n)}n.ping(h).then(h,()=>{a(l)})}))}/**
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
 */const hb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},db=500,mb=600,fb="_blank",pb="http://localhost";class Kc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gb(s,e,t,n=db,r=mb){const a=Math.max((window.screen.availHeight-r)/2,0).toString(),l=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const h={...hb,width:n.toString(),height:r.toString(),top:a,left:l},m=Ge().toLowerCase();t&&(c=Yh(m)?fb:t),Kh(m)&&(e=e||pb,h.scrollbars="yes");const f=Object.entries(h).reduce((v,[N,k])=>`${v}${N}=${k},`,"");if(Fx(m)&&c!=="_self")return yb(e||"",c),new Kc(null);const y=window.open(e||"",c,f);H(y,s,"popup-blocked");try{y.focus()}catch{}return new Kc(y)}function yb(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const xb="__/auth/handler",bb="emulator/auth/handler",wb=encodeURIComponent("fac");async function Qc(s,e,t,n,r,a){H(s.config.authDomain,s,"auth-domain-config-required"),H(s.config.apiKey,s,"invalid-api-key");const l={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:rn,eventId:r};if(e instanceof ad){e.setDefaultLanguage(s.languageCode),l.providerId=e.providerId||"",sy(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,y]of Object.entries({}))l[f]=y}if(e instanceof lr){const f=e.getScopes().filter(y=>y!=="");f.length>0&&(l.scopes=f.join(","))}s.tenantId&&(l.tid=s.tenantId);const c=l;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const h=await s._getAppCheckToken(),m=h?`#${wb}=${encodeURIComponent(h)}`:"";return`${_b(s)}?${ar(c).slice(1)}${m}`}function _b({config:s}){return s.emulator?No(s,bb):`https://${s.authDomain}/${xb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="webStorageSupport";class vb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dd,this._completeRedirectFn=z0,this._overrideRedirectResult=$0}async _openPopup(e,t,n,r){var l;Dt((l=this.eventManagers[e._key()])==null?void 0:l.manager,"_initialize() not called before _openPopup()");const a=await Qc(e,t,n,Qa(),r);return gb(e,a,ko())}async _openRedirect(e,t,n,r){await this._originValidation(e);const a=await Qc(e,t,n,Qa(),r);return N0(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:a}=this.eventManagers[t];return r?Promise.resolve(r):(Dt(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await ub(e),n=new K0(e);return t.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Aa,{type:Aa},r=>{var l;const a=(l=r==null?void 0:r[0])==null?void 0:l[Aa];a!==void 0&&t(!!a),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Z0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return td()||Qh()||jo()}}const Eb=vb;var Yc="@firebase/auth",Jc="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Nb(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Tb(s){Tt(new dt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=n.options;H(l&&!l.includes(":"),"invalid-api-key",{appName:n.name});const h={apiKey:l,authDomain:c,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sd(s)},m=new Hx(n,r,a,h);return t0(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Tt(new dt("auth-internal",e=>{const t=an(e.getProvider("auth").getImmediate());return(n=>new Ib(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ot(Yc,Jc,Nb(s)),ot(Yc,Jc,"esm2020")}/**
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
 */const jb=300,Ab=Ah("authIdTokenMaxAge")||jb;let Xc=null;const Sb=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ab)return;const r=t==null?void 0:t.token;Xc!==r&&(Xc=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function kb(s=Eo()){const e=Ss(s,"auth");if(e.isInitialized())return e.getImmediate();const t=e0(s,{popupRedirectResolver:Eb,persistence:[D0,v0,dd]}),n=Ah("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(n,location.origin);if(location.origin===a.origin){const l=Sb(a.toString());x0(t,l,()=>l(t.currentUser)),y0(t,c=>l(c))}}const r=Th("auth");return r&&s0(t,`http://${r}`),t}function Cb(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}zx({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=r=>{const a=bt("internal-error");a.customData=r,t(a)},n.type="text/javascript",n.charset="UTF-8",Cb().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Tb("Browser");var Zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,bd;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,x){function g(){}g.prototype=x.prototype,E.F=x.prototype,E.prototype=new g,E.prototype.constructor=E,E.D=function(w,_,I){for(var b=Array(arguments.length-2),W=2;W<arguments.length;W++)b[W-2]=arguments[W];return x.prototype[_].apply(w,b)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,x,g){g||(g=0);const w=Array(16);if(typeof x=="string")for(var _=0;_<16;++_)w[_]=x.charCodeAt(g++)|x.charCodeAt(g++)<<8|x.charCodeAt(g++)<<16|x.charCodeAt(g++)<<24;else for(_=0;_<16;++_)w[_]=x[g++]|x[g++]<<8|x[g++]<<16|x[g++]<<24;x=E.g[0],g=E.g[1],_=E.g[2];let I=E.g[3],b;b=x+(I^g&(_^I))+w[0]+3614090360&4294967295,x=g+(b<<7&4294967295|b>>>25),b=I+(_^x&(g^_))+w[1]+3905402710&4294967295,I=x+(b<<12&4294967295|b>>>20),b=_+(g^I&(x^g))+w[2]+606105819&4294967295,_=I+(b<<17&4294967295|b>>>15),b=g+(x^_&(I^x))+w[3]+3250441966&4294967295,g=_+(b<<22&4294967295|b>>>10),b=x+(I^g&(_^I))+w[4]+4118548399&4294967295,x=g+(b<<7&4294967295|b>>>25),b=I+(_^x&(g^_))+w[5]+1200080426&4294967295,I=x+(b<<12&4294967295|b>>>20),b=_+(g^I&(x^g))+w[6]+2821735955&4294967295,_=I+(b<<17&4294967295|b>>>15),b=g+(x^_&(I^x))+w[7]+4249261313&4294967295,g=_+(b<<22&4294967295|b>>>10),b=x+(I^g&(_^I))+w[8]+1770035416&4294967295,x=g+(b<<7&4294967295|b>>>25),b=I+(_^x&(g^_))+w[9]+2336552879&4294967295,I=x+(b<<12&4294967295|b>>>20),b=_+(g^I&(x^g))+w[10]+4294925233&4294967295,_=I+(b<<17&4294967295|b>>>15),b=g+(x^_&(I^x))+w[11]+2304563134&4294967295,g=_+(b<<22&4294967295|b>>>10),b=x+(I^g&(_^I))+w[12]+1804603682&4294967295,x=g+(b<<7&4294967295|b>>>25),b=I+(_^x&(g^_))+w[13]+4254626195&4294967295,I=x+(b<<12&4294967295|b>>>20),b=_+(g^I&(x^g))+w[14]+2792965006&4294967295,_=I+(b<<17&4294967295|b>>>15),b=g+(x^_&(I^x))+w[15]+1236535329&4294967295,g=_+(b<<22&4294967295|b>>>10),b=x+(_^I&(g^_))+w[1]+4129170786&4294967295,x=g+(b<<5&4294967295|b>>>27),b=I+(g^_&(x^g))+w[6]+3225465664&4294967295,I=x+(b<<9&4294967295|b>>>23),b=_+(x^g&(I^x))+w[11]+643717713&4294967295,_=I+(b<<14&4294967295|b>>>18),b=g+(I^x&(_^I))+w[0]+3921069994&4294967295,g=_+(b<<20&4294967295|b>>>12),b=x+(_^I&(g^_))+w[5]+3593408605&4294967295,x=g+(b<<5&4294967295|b>>>27),b=I+(g^_&(x^g))+w[10]+38016083&4294967295,I=x+(b<<9&4294967295|b>>>23),b=_+(x^g&(I^x))+w[15]+3634488961&4294967295,_=I+(b<<14&4294967295|b>>>18),b=g+(I^x&(_^I))+w[4]+3889429448&4294967295,g=_+(b<<20&4294967295|b>>>12),b=x+(_^I&(g^_))+w[9]+568446438&4294967295,x=g+(b<<5&4294967295|b>>>27),b=I+(g^_&(x^g))+w[14]+3275163606&4294967295,I=x+(b<<9&4294967295|b>>>23),b=_+(x^g&(I^x))+w[3]+4107603335&4294967295,_=I+(b<<14&4294967295|b>>>18),b=g+(I^x&(_^I))+w[8]+1163531501&4294967295,g=_+(b<<20&4294967295|b>>>12),b=x+(_^I&(g^_))+w[13]+2850285829&4294967295,x=g+(b<<5&4294967295|b>>>27),b=I+(g^_&(x^g))+w[2]+4243563512&4294967295,I=x+(b<<9&4294967295|b>>>23),b=_+(x^g&(I^x))+w[7]+1735328473&4294967295,_=I+(b<<14&4294967295|b>>>18),b=g+(I^x&(_^I))+w[12]+2368359562&4294967295,g=_+(b<<20&4294967295|b>>>12),b=x+(g^_^I)+w[5]+4294588738&4294967295,x=g+(b<<4&4294967295|b>>>28),b=I+(x^g^_)+w[8]+2272392833&4294967295,I=x+(b<<11&4294967295|b>>>21),b=_+(I^x^g)+w[11]+1839030562&4294967295,_=I+(b<<16&4294967295|b>>>16),b=g+(_^I^x)+w[14]+4259657740&4294967295,g=_+(b<<23&4294967295|b>>>9),b=x+(g^_^I)+w[1]+2763975236&4294967295,x=g+(b<<4&4294967295|b>>>28),b=I+(x^g^_)+w[4]+1272893353&4294967295,I=x+(b<<11&4294967295|b>>>21),b=_+(I^x^g)+w[7]+4139469664&4294967295,_=I+(b<<16&4294967295|b>>>16),b=g+(_^I^x)+w[10]+3200236656&4294967295,g=_+(b<<23&4294967295|b>>>9),b=x+(g^_^I)+w[13]+681279174&4294967295,x=g+(b<<4&4294967295|b>>>28),b=I+(x^g^_)+w[0]+3936430074&4294967295,I=x+(b<<11&4294967295|b>>>21),b=_+(I^x^g)+w[3]+3572445317&4294967295,_=I+(b<<16&4294967295|b>>>16),b=g+(_^I^x)+w[6]+76029189&4294967295,g=_+(b<<23&4294967295|b>>>9),b=x+(g^_^I)+w[9]+3654602809&4294967295,x=g+(b<<4&4294967295|b>>>28),b=I+(x^g^_)+w[12]+3873151461&4294967295,I=x+(b<<11&4294967295|b>>>21),b=_+(I^x^g)+w[15]+530742520&4294967295,_=I+(b<<16&4294967295|b>>>16),b=g+(_^I^x)+w[2]+3299628645&4294967295,g=_+(b<<23&4294967295|b>>>9),b=x+(_^(g|~I))+w[0]+4096336452&4294967295,x=g+(b<<6&4294967295|b>>>26),b=I+(g^(x|~_))+w[7]+1126891415&4294967295,I=x+(b<<10&4294967295|b>>>22),b=_+(x^(I|~g))+w[14]+2878612391&4294967295,_=I+(b<<15&4294967295|b>>>17),b=g+(I^(_|~x))+w[5]+4237533241&4294967295,g=_+(b<<21&4294967295|b>>>11),b=x+(_^(g|~I))+w[12]+1700485571&4294967295,x=g+(b<<6&4294967295|b>>>26),b=I+(g^(x|~_))+w[3]+2399980690&4294967295,I=x+(b<<10&4294967295|b>>>22),b=_+(x^(I|~g))+w[10]+4293915773&4294967295,_=I+(b<<15&4294967295|b>>>17),b=g+(I^(_|~x))+w[1]+2240044497&4294967295,g=_+(b<<21&4294967295|b>>>11),b=x+(_^(g|~I))+w[8]+1873313359&4294967295,x=g+(b<<6&4294967295|b>>>26),b=I+(g^(x|~_))+w[15]+4264355552&4294967295,I=x+(b<<10&4294967295|b>>>22),b=_+(x^(I|~g))+w[6]+2734768916&4294967295,_=I+(b<<15&4294967295|b>>>17),b=g+(I^(_|~x))+w[13]+1309151649&4294967295,g=_+(b<<21&4294967295|b>>>11),b=x+(_^(g|~I))+w[4]+4149444226&4294967295,x=g+(b<<6&4294967295|b>>>26),b=I+(g^(x|~_))+w[11]+3174756917&4294967295,I=x+(b<<10&4294967295|b>>>22),b=_+(x^(I|~g))+w[2]+718787259&4294967295,_=I+(b<<15&4294967295|b>>>17),b=g+(I^(_|~x))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+x&4294967295,E.g[1]=E.g[1]+(_+(b<<21&4294967295|b>>>11))&4294967295,E.g[2]=E.g[2]+_&4294967295,E.g[3]=E.g[3]+I&4294967295}n.prototype.v=function(E,x){x===void 0&&(x=E.length);const g=x-this.blockSize,w=this.C;let _=this.h,I=0;for(;I<x;){if(_==0)for(;I<=g;)r(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<x;)if(w[_++]=E.charCodeAt(I++),_==this.blockSize){r(this,w),_=0;break}}else for(;I<x;)if(w[_++]=E[I++],_==this.blockSize){r(this,w),_=0;break}}this.h=_,this.o+=x},n.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var x=1;x<E.length-8;++x)E[x]=0;x=this.o*8;for(var g=E.length-8;g<E.length;++g)E[g]=x&255,x/=256;for(this.v(E),E=Array(16),x=0,g=0;g<4;++g)for(let w=0;w<32;w+=8)E[x++]=this.g[g]>>>w&255;return E};function a(E,x){var g=c;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=x(E)}function l(E,x){this.h=x;const g=[];let w=!0;for(let _=E.length-1;_>=0;_--){const I=E[_]|0;w&&I==x||(g[_]=I,w=!1)}this.g=g}var c={};function h(E){return-128<=E&&E<128?a(E,function(x){return new l([x|0],x<0?-1:0)}):new l([E|0],E<0?-1:0)}function m(E){if(isNaN(E)||!isFinite(E))return y;if(E<0)return R(m(-E));const x=[];let g=1;for(let w=0;E>=g;w++)x[w]=E/g|0,g*=4294967296;return new l(x,0)}function f(E,x){if(E.length==0)throw Error("number format error: empty string");if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(E.charAt(0)=="-")return R(f(E.substring(1),x));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=m(Math.pow(x,8));let w=y;for(let I=0;I<E.length;I+=8){var _=Math.min(8,E.length-I);const b=parseInt(E.substring(I,I+_),x);_<8?(_=m(Math.pow(x,_)),w=w.j(_).add(m(b))):(w=w.j(g),w=w.add(m(b)))}return w}var y=h(0),v=h(1),N=h(16777216);s=l.prototype,s.m=function(){if(P(this))return-R(this).m();let E=0,x=1;for(let g=0;g<this.g.length;g++){const w=this.i(g);E+=(w>=0?w:4294967296+w)*x,x*=4294967296}return E},s.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(P(this))return"-"+R(this).toString(E);const x=m(Math.pow(E,6));var g=this;let w="";for(;;){const _=J(g,x).g;g=O(g,_.j(x));let I=((g.g.length>0?g.g[0]:g.h)>>>0).toString(E);if(g=_,k(g))return I+w;for(;I.length<6;)I="0"+I;w=I+w}},s.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(let x=0;x<E.g.length;x++)if(E.g[x]!=0)return!1;return!0}function P(E){return E.h==-1}s.l=function(E){return E=O(this,E),P(E)?-1:k(E)?0:1};function R(E){const x=E.g.length,g=[];for(let w=0;w<x;w++)g[w]=~E.g[w];return new l(g,~E.h).add(v)}s.abs=function(){return P(this)?R(this):this},s.add=function(E){const x=Math.max(this.g.length,E.g.length),g=[];let w=0;for(let _=0;_<=x;_++){let I=w+(this.i(_)&65535)+(E.i(_)&65535),b=(I>>>16)+(this.i(_)>>>16)+(E.i(_)>>>16);w=b>>>16,I&=65535,b&=65535,g[_]=b<<16|I}return new l(g,g[g.length-1]&-2147483648?-1:0)};function O(E,x){return E.add(R(x))}s.j=function(E){if(k(this)||k(E))return y;if(P(this))return P(E)?R(this).j(R(E)):R(R(this).j(E));if(P(E))return R(this.j(R(E)));if(this.l(N)<0&&E.l(N)<0)return m(this.m()*E.m());const x=this.g.length+E.g.length,g=[];for(var w=0;w<2*x;w++)g[w]=0;for(w=0;w<this.g.length;w++)for(let _=0;_<E.g.length;_++){const I=this.i(w)>>>16,b=this.i(w)&65535,W=E.i(_)>>>16,Z=E.i(_)&65535;g[2*w+2*_]+=b*Z,D(g,2*w+2*_),g[2*w+2*_+1]+=I*Z,D(g,2*w+2*_+1),g[2*w+2*_+1]+=b*W,D(g,2*w+2*_+1),g[2*w+2*_+2]+=I*W,D(g,2*w+2*_+2)}for(E=0;E<x;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=x;E<2*x;E++)g[E]=0;return new l(g,0)};function D(E,x){for(;(E[x]&65535)!=E[x];)E[x+1]+=E[x]>>>16,E[x]&=65535,x++}function B(E,x){this.g=E,this.h=x}function J(E,x){if(k(x))throw Error("division by zero");if(k(E))return new B(y,y);if(P(E))return x=J(R(E),x),new B(R(x.g),R(x.h));if(P(x))return x=J(E,R(x)),new B(R(x.g),x.h);if(E.g.length>30){if(P(E)||P(x))throw Error("slowDivide_ only works with positive integers.");for(var g=v,w=x;w.l(E)<=0;)g=oe(g),w=oe(w);var _=te(g,1),I=te(w,1);for(w=te(w,2),g=te(g,2);!k(w);){var b=I.add(w);b.l(E)<=0&&(_=_.add(g),I=b),w=te(w,1),g=te(g,1)}return x=O(E,_.j(x)),new B(_,x)}for(_=y;E.l(x)>=0;){for(g=Math.max(1,Math.floor(E.m()/x.m())),w=Math.ceil(Math.log(g)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),I=m(g),b=I.j(x);P(b)||b.l(E)>0;)g-=w,I=m(g),b=I.j(x);k(I)&&(I=v),_=_.add(I),E=O(E,b)}return new B(_,E)}s.B=function(E){return J(this,E).h},s.and=function(E){const x=Math.max(this.g.length,E.g.length),g=[];for(let w=0;w<x;w++)g[w]=this.i(w)&E.i(w);return new l(g,this.h&E.h)},s.or=function(E){const x=Math.max(this.g.length,E.g.length),g=[];for(let w=0;w<x;w++)g[w]=this.i(w)|E.i(w);return new l(g,this.h|E.h)},s.xor=function(E){const x=Math.max(this.g.length,E.g.length),g=[];for(let w=0;w<x;w++)g[w]=this.i(w)^E.i(w);return new l(g,this.h^E.h)};function oe(E){const x=E.g.length+1,g=[];for(let w=0;w<x;w++)g[w]=E.i(w)<<1|E.i(w-1)>>>31;return new l(g,E.h)}function te(E,x){const g=x>>5;x%=32;const w=E.g.length-g,_=[];for(let I=0;I<w;I++)_[I]=x>0?E.i(I+g)>>>x|E.i(I+g+1)<<32-x:E.i(I+g);return new l(_,E.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,bd=n,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=m,l.fromString=f,es=l}).apply(typeof Zc<"u"?Zc:typeof self<"u"?self:typeof window<"u"?window:{});var Sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wd,Ln,_d,Br,Xa,vd,Ed,Id;(function(){var s,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sr=="object"&&Sr];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function r(o,u){if(u)e:{var d=n;o=o.split(".");for(var p=0;p<o.length-1;p++){var T=o[p];if(!(T in d))break e;d=d[T]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(u){var d=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&d.push([p,u[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function h(o,u,d){return o.call.apply(o.bind,arguments)}function m(o,u,d){return m=h,m.apply(null,arguments)}function f(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function y(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(p,T,j){for(var L=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)L[ee-2]=arguments[ee];return u.prototype[T].apply(p,L)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function N(o){const u=o.length;if(u>0){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function k(o,u){for(let p=1;p<arguments.length;p++){const T=arguments[p];var d=typeof T;if(d=d!="object"?d:T?Array.isArray(T)?"array":d:"null",d=="array"||d=="object"&&typeof T.length=="number"){d=o.length||0;const j=T.length||0;o.length=d+j;for(let L=0;L<j;L++)o[d+L]=T[L]}else o.push(T)}}class P{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function R(o){l.setTimeout(()=>{throw o},0)}function O(){var o=E;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class D{constructor(){this.h=this.g=null}add(u,d){const p=B.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var B=new P(()=>new J,o=>o.reset());class J{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,te=!1,E=new D,x=()=>{const o=Promise.resolve(void 0);oe=()=>{o.then(g)}};function g(){for(var o;o=O();){try{o.h.call(o.g)}catch(d){R(d)}var u=B;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}te=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o})();function b(o){return/^[\s\xa0]*$/.test(o)}function W(o,u){_.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}y(W,_),W.prototype.init=function(o,u){const d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&W.Z.h.call(this)},W.prototype.h=function(){W.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Z="closure_listenable_"+(Math.random()*1e6|0),V=0;function ie(o,u,d,p,T){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=T,this.key=++V,this.da=this.fa=!1}function M(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Q(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function me(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function De(o){const u={};for(const d in o)u[d]=o[d];return u}const _e="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ze(o,u){let d,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(d in p)o[d]=p[d];for(let j=0;j<_e.length;j++)d=_e[j],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function nt(o){this.src=o,this.g={},this.h=0}nt.prototype.add=function(o,u,d,p,T){const j=o.toString();o=this.g[j],o||(o=this.g[j]=[],this.h++);const L=fn(o,u,p,T);return L>-1?(u=o[L],d||(u.fa=!1)):(u=new ie(u,this.src,j,!!p,T),u.fa=d,o.push(u)),u};function mn(o,u){const d=u.type;if(d in o.g){var p=o.g[d],T=Array.prototype.indexOf.call(p,u,void 0),j;(j=T>=0)&&Array.prototype.splice.call(p,T,1),j&&(M(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function fn(o,u,d,p){for(let T=0;T<o.length;++T){const j=o[T];if(!j.da&&j.listener==u&&j.capture==!!d&&j.ha==p)return T}return-1}var pn="closure_lm_"+(Math.random()*1e6|0),gn={};function q(o,u,d,p,T){if(Array.isArray(u)){for(let j=0;j<u.length;j++)q(o,u[j],d,p,T);return null}return d=rt(d),o&&o[Z]?o.J(u,d,c(p)?!!p.capture:!1,T):G(o,u,d,!1,p,T)}function G(o,u,d,p,T,j){if(!u)throw Error("Invalid event type");const L=c(T)?!!T.capture:!!T;let ee=Be(o);if(ee||(o[pn]=ee=new nt(o)),d=ee.add(u,d,p,L,j),d.proxy)return d;if(p=le(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)I||(T=L),T===void 0&&(T=!1),o.addEventListener(u.toString(),p,T);else if(o.attachEvent)o.attachEvent(fe(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function le(){function o(d){return u.call(o.src,o.listener,d)}const u=ke;return o}function ue(o,u,d,p,T){if(Array.isArray(u))for(var j=0;j<u.length;j++)ue(o,u[j],d,p,T);else p=c(p)?!!p.capture:!!p,d=rt(d),o&&o[Z]?(o=o.i,j=String(u).toString(),j in o.g&&(u=o.g[j],d=fn(u,d,p,T),d>-1&&(M(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[j],o.h--)))):o&&(o=Be(o))&&(u=o.g[u.toString()],o=-1,u&&(o=fn(u,d,p,T)),(d=o>-1?u[o]:null)&&Ue(d))}function Ue(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Z])mn(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(fe(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=Be(u))?(mn(d,o),d.h==0&&(d.src=null,u[pn]=null)):M(o)}}}function fe(o){return o in gn?gn[o]:gn[o]="on"+o}function ke(o,u){if(o.da)o=!0;else{u=new W(u,this);const d=o.listener,p=o.ha||o.src;o.fa&&Ue(o),o=d.call(p,u)}return o}function Be(o){return o=o[pn],o instanceof nt?o:null}var ds="__closure_events_fn_"+(Math.random()*1e9>>>0);function rt(o){return typeof o=="function"?o:(o[ds]||(o[ds]=function(u){return o.handleEvent(u)}),o[ds])}function qe(){w.call(this),this.i=new nt(this),this.M=this,this.G=null}y(qe,w),qe.prototype[Z]=!0,qe.prototype.removeEventListener=function(o,u,d,p){ue(this,o,u,d,p)};function Ke(o,u){var d,p=o.G;if(p)for(d=[];p;p=p.G)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new _(u,o);else if(u instanceof _)u.target=u.target||o;else{var T=u;u=new _(p,o),Ze(u,T)}T=!0;let j,L;if(d)for(L=d.length-1;L>=0;L--)j=u.g=d[L],T=pr(j,p,!0,u)&&T;if(j=u.g=o,T=pr(j,p,!0,u)&&T,T=pr(j,p,!1,u)&&T,d)for(L=0;L<d.length;L++)j=u.g=d[L],T=pr(j,p,!1,u)&&T}qe.prototype.N=function(){if(qe.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let p=0;p<d.length;p++)M(d[p]);delete o.g[u],o.h--}}this.G=null},qe.prototype.J=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},qe.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function pr(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let T=!0;for(let j=0;j<u.length;++j){const L=u[j];if(L&&!L.da&&L.capture==d){const ee=L.listener,Ae=L.ha||L.src;L.fa&&mn(o.i,L),T=ee.call(Ae,p)!==!1&&T}}return T&&!p.defaultPrevented}function Nf(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:l.setTimeout(o,u||0)}function xl(o){o.g=Nf(()=>{o.g=null,o.i&&(o.i=!1,xl(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Tf extends w{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:xl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yn(o){w.call(this),this.h=o,this.g={}}y(yn,w);var bl=[];function wl(o){Q(o.g,function(u,d){this.g.hasOwnProperty(d)&&Ue(u)},o),o.g={}}yn.prototype.N=function(){yn.Z.N.call(this),wl(this)},yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ra=l.JSON.stringify,jf=l.JSON.parse,Af=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function _l(){}function vl(){}var xn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ia(){_.call(this,"d")}y(ia,_);function aa(){_.call(this,"c")}y(aa,_);var ms={},El=null;function gr(){return El=El||new qe}ms.Ia="serverreachability";function Il(o){_.call(this,ms.Ia,o)}y(Il,_);function bn(o){const u=gr();Ke(u,new Il(u))}ms.STAT_EVENT="statevent";function Nl(o,u){_.call(this,ms.STAT_EVENT,o),this.stat=u}y(Nl,_);function Qe(o){const u=gr();Ke(u,new Nl(u,o))}ms.Ja="timingevent";function Tl(o,u){_.call(this,ms.Ja,o),this.size=u}y(Tl,_);function wn(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function _n(){this.g=!0}_n.prototype.ua=function(){this.g=!1};function Sf(o,u,d,p,T,j){o.info(function(){if(o.g)if(j){var L="",ee=j.split("&");for(let de=0;de<ee.length;de++){var Ae=ee[de].split("=");if(Ae.length>1){const Ce=Ae[0];Ae=Ae[1];const yt=Ce.split("_");L=yt.length>=2&&yt[1]=="type"?L+(Ce+"="+Ae+"&"):L+(Ce+"=redacted&")}}}else L=null;else L=j;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+u+`
`+d+`
`+L})}function kf(o,u,d,p,T,j,L){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+u+`
`+d+`
`+j+" "+L})}function Vs(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Rf(o,d)+(p?" "+p:"")})}function Cf(o,u){o.info(function(){return"TIMEOUT: "+u})}_n.prototype.info=function(){};function Rf(o,u){if(!o.g)return u;if(!u)return null;try{const j=JSON.parse(u);if(j){for(o=0;o<j.length;o++)if(Array.isArray(j[o])){var d=j[o];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var T=p[0];if(T!="noop"&&T!="stop"&&T!="close")for(let L=1;L<p.length;L++)p[L]=""}}}}return ra(j)}catch{return u}}var yr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},jl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Al;function oa(){}y(oa,_l),oa.prototype.g=function(){return new XMLHttpRequest},Al=new oa;function vn(o){return encodeURIComponent(String(o))}function Pf(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function Ot(o,u,d,p){this.j=o,this.i=u,this.l=d,this.S=p||1,this.V=new yn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Sl}function Sl(){this.i=null,this.g="",this.h=!1}var kl={},la={};function ca(o,u,d){o.M=1,o.A=br(gt(u)),o.u=d,o.R=!0,Cl(o,null)}function Cl(o,u){o.F=Date.now(),xr(o),o.B=gt(o.A);var d=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Wl(d.i,"t",p),o.C=0,d=o.j.L,o.h=new Sl,o.g=lc(o.j,d?u:null,!o.u),o.P>0&&(o.O=new Tf(m(o.Y,o,o.g),o.P)),u=o.V,d=o.g,p=o.ba;var T="readystatechange";Array.isArray(T)||(T&&(bl[0]=T.toString()),T=bl);for(let j=0;j<T.length;j++){const L=q(d,T[j],p||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=o.J?De(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),bn(),Sf(o.i,o.v,o.B,o.l,o.S,o.u)}Ot.prototype.ba=function(o){o=o.target;const u=this.O;u&&Bt(o)==3?u.j():this.Y(o)},Ot.prototype.Y=function(o){try{if(o==this.g)e:{const ee=Bt(this.g),Ae=this.g.ya(),de=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||Jl(this.g)))){this.K||ee!=4||Ae==7||(Ae==8||de<=0?bn(3):bn(2)),ua(this);var u=this.g.ca();this.X=u;var d=Df(this);if(this.o=u==200,kf(this.i,this.v,this.B,this.l,this.S,ee,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,T=this.g;if((p=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(p)){var j=p;break t}}j=null}if(o=j)Vs(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ha(this,o);else{this.o=!1,this.m=3,Qe(12),fs(this),En(this);break e}}if(this.R){o=!0;let Ce;for(;!this.K&&this.C<d.length;)if(Ce=Vf(this,d),Ce==la){ee==4&&(this.m=4,Qe(14),o=!1),Vs(this.i,this.l,null,"[Incomplete Response]");break}else if(Ce==kl){this.m=4,Qe(15),Vs(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else Vs(this.i,this.l,Ce,null),ha(this,Ce);if(Rl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||d.length!=0||this.h.h||(this.m=1,Qe(16),o=!1),this.o=this.o&&o,!o)Vs(this.i,this.l,d,"[Invalid Chunked Response]"),fs(this),En(this);else if(d.length>0&&!this.W){this.W=!0;var L=this.j;L.g==this&&L.aa&&!L.P&&(L.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),ba(L),L.P=!0,Qe(11))}}else Vs(this.i,this.l,d,null),ha(this,d);ee==4&&fs(this),this.o&&!this.K&&(ee==4?rc(this.j,this):(this.o=!1,xr(this)))}else Qf(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,Qe(12)):(this.m=0,Qe(13)),fs(this),En(this)}}}catch{}finally{}};function Df(o){if(!Rl(o))return o.g.la();const u=Jl(o.g);if(u==="")return"";let d="";const p=u.length,T=Bt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return fs(o),En(o),"";o.h.i=new l.TextDecoder}for(let j=0;j<p;j++)o.h.h=!0,d+=o.h.i.decode(u[j],{stream:!(T&&j==p-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function Rl(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Vf(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?la:(d=Number(u.substring(d,p)),isNaN(d)?kl:(p+=1,p+d>u.length?la:(u=u.slice(p,p+d),o.C=p+d,u)))}Ot.prototype.cancel=function(){this.K=!0,fs(this)};function xr(o){o.T=Date.now()+o.H,Pl(o,o.H)}function Pl(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=wn(m(o.aa,o),u)}function ua(o){o.D&&(l.clearTimeout(o.D),o.D=null)}Ot.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Cf(this.i,this.B),this.M!=2&&(bn(),Qe(17)),fs(this),this.m=2,En(this)):Pl(this,this.T-o)};function En(o){o.j.I==0||o.K||rc(o.j,o)}function fs(o){ua(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,wl(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function ha(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||da(d.h,o))){if(!o.L&&da(d.h,o)&&d.I==3){try{var p=d.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)Ir(d),vr(d);else break e;xa(d),Qe(18)}}else d.xa=T[1],0<d.xa-d.K&&T[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=wn(m(d.Va,d),6e3));Ml(d.h)<=1&&d.ta&&(d.ta=void 0)}else gs(d,11)}else if((o.L||d.g==o)&&Ir(d),!b(u))for(T=d.Ba.g.parse(u),u=0;u<T.length;u++){let de=T[u];const Ce=de[0];if(!(Ce<=d.K))if(d.K=Ce,de=de[1],d.I==2)if(de[0]=="c"){d.M=de[1],d.ba=de[2];const yt=de[3];yt!=null&&(d.ka=yt,d.j.info("VER="+d.ka));const ys=de[4];ys!=null&&(d.za=ys,d.j.info("SVER="+d.za));const qt=de[5];qt!=null&&typeof qt=="number"&&qt>0&&(p=1.5*qt,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const $t=o.g;if($t){const Tr=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tr){var j=p.h;j.g||Tr.indexOf("spdy")==-1&&Tr.indexOf("quic")==-1&&Tr.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(ma(j,j.h),j.h=null))}if(p.G){const wa=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;wa&&(p.wa=wa,ge(p.J,p.G,wa))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var L=o;if(p.na=oc(p,p.L?p.ba:null,p.W),L.L){Ll(p.h,L);var ee=L,Ae=p.O;Ae&&(ee.H=Ae),ee.D&&(ua(ee),xr(ee)),p.g=L}else sc(p);d.i.length>0&&Er(d)}else de[0]!="stop"&&de[0]!="close"||gs(d,7);else d.I==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?gs(d,7):ya(d):de[0]!="noop"&&d.l&&d.l.qa(de),d.A=0)}}bn(4)}catch{}}var Mf=class{constructor(o,u){this.g=o,this.map=u}};function Dl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Vl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ml(o){return o.h?1:o.g?o.g.size:0}function da(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ma(o,u){o.g?o.g.add(u):o.h=u}function Ll(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Dl.prototype.cancel=function(){if(this.i=Ol(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ol(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return N(o.i)}var Fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Lf(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const p=o[d].indexOf("=");let T,j=null;p>=0?(T=o[d].substring(0,p),j=o[d].substring(p+1)):T=o[d],u(T,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Ft(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Ft?(this.l=o.l,In(this,o.j),this.o=o.o,this.g=o.g,Nn(this,o.u),this.h=o.h,fa(this,Hl(o.i)),this.m=o.m):o&&(u=String(o).match(Fl))?(this.l=!1,In(this,u[1]||"",!0),this.o=Tn(u[2]||""),this.g=Tn(u[3]||"",!0),Nn(this,u[4]),this.h=Tn(u[5]||"",!0),fa(this,u[6]||"",!0),this.m=Tn(u[7]||"")):(this.l=!1,this.i=new An(null,this.l))}Ft.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(jn(u,Ul,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(jn(u,Ul,!0),"@"),o.push(vn(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(jn(d,d.charAt(0)=="/"?Uf:Ff,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",jn(d,qf)),o.join("")},Ft.prototype.resolve=function(o){const u=gt(this);let d=!!o.j;d?In(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var p=o.h;if(d)Nn(u,o.u);else if(d=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var T=u.h.lastIndexOf("/");T!=-1&&(p=u.h.slice(0,T+1)+p)}if(T=p,T==".."||T==".")p="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){p=T.lastIndexOf("/",0)==0,T=T.split("/");const j=[];for(let L=0;L<T.length;){const ee=T[L++];ee=="."?p&&L==T.length&&j.push(""):ee==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),p&&L==T.length&&j.push("")):(j.push(ee),p=!0)}p=j.join("/")}else p=T}return d?u.h=p:d=o.i.toString()!=="",d?fa(u,Hl(o.i)):d=!!o.m,d&&(u.m=o.m),u};function gt(o){return new Ft(o)}function In(o,u,d){o.j=d?Tn(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Nn(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function fa(o,u,d){u instanceof An?(o.i=u,$f(o.i,o.l)):(d||(u=jn(u,Bf)),o.i=new An(u,o.l))}function ge(o,u,d){o.i.set(u,d)}function br(o){return ge(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Tn(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function jn(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Of),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Of(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ul=/[#\/\?@]/g,Ff=/[#\?:]/g,Uf=/[#\?]/g,Bf=/[#\?@]/g,qf=/#/g;function An(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function ps(o){o.g||(o.g=new Map,o.h=0,o.i&&Lf(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}s=An.prototype,s.add=function(o,u){ps(this),this.i=null,o=Ms(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Bl(o,u){ps(o),u=Ms(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function ql(o,u){return ps(o),u=Ms(o,u),o.g.has(u)}s.forEach=function(o,u){ps(this),this.g.forEach(function(d,p){d.forEach(function(T){o.call(u,T,p,this)},this)},this)};function $l(o,u){ps(o);let d=[];if(typeof u=="string")ql(o,u)&&(d=d.concat(o.g.get(Ms(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}s.set=function(o,u){return ps(this),this.i=null,o=Ms(this,o),ql(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},s.get=function(o,u){return o?(o=$l(this,o),o.length>0?String(o[0]):u):u};function Wl(o,u,d){Bl(o,u),d.length>0&&(o.i=null,o.g.set(Ms(o,u),N(d)),o.h+=d.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var d=u[p];const T=vn(d);d=$l(this,d);for(let j=0;j<d.length;j++){let L=T;d[j]!==""&&(L+="="+vn(d[j])),o.push(L)}}return this.i=o.join("&")};function Hl(o){const u=new An;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Ms(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function $f(o,u){u&&!o.j&&(ps(o),o.i=null,o.g.forEach(function(d,p){const T=p.toLowerCase();p!=T&&(Bl(this,p),Wl(this,T,d))},o)),o.j=u}function Wf(o,u){const d=new _n;if(l.Image){const p=new Image;p.onload=f(Ut,d,"TestLoadImage: loaded",!0,u,p),p.onerror=f(Ut,d,"TestLoadImage: error",!1,u,p),p.onabort=f(Ut,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=f(Ut,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Hf(o,u){const d=new _n,p=new AbortController,T=setTimeout(()=>{p.abort(),Ut(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(j=>{clearTimeout(T),j.ok?Ut(d,"TestPingServer: ok",!0,u):Ut(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(T),Ut(d,"TestPingServer: error",!1,u)})}function Ut(o,u,d,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(d)}catch{}}function zf(){this.g=new Af}function pa(o){this.i=o.Sb||null,this.h=o.ab||!1}y(pa,_l),pa.prototype.g=function(){return new wr(this.i,this.h)};function wr(o,u){qe.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(wr,qe),s=wr.prototype,s.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,kn(this)},s.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||l).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=0},s.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;zl(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function zl(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}s.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Sn(this):kn(this),this.readyState==3&&zl(this)}},s.Oa=function(o){this.g&&(this.response=this.responseText=o,Sn(this))},s.Na=function(o){this.g&&(this.response=o,Sn(this))},s.ga=function(){this.g&&Sn(this)};function Sn(o){o.readyState=4,o.l=null,o.j=null,o.B=null,kn(o)}s.setRequestHeader=function(o,u){this.A.append(o,u)},s.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function kn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Gl(o){let u="";return Q(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function ga(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Gl(d),typeof o=="string"?d!=null&&vn(d):ge(o,u,d))}function we(o){qe.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(we,qe);var Gf=/^https?$/i,Kf=["POST","PUT"];s=we.prototype,s.Fa=function(o){this.H=o},s.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Al.g(),this.g.onreadystatechange=v(m(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(j){Kl(this,j);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)d.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const j of p.keys())d.set(j,p.get(j));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(j=>j.toLowerCase()=="content-type"),T=l.FormData&&o instanceof l.FormData,!(Array.prototype.indexOf.call(Kf,u,void 0)>=0)||p||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,L]of d)this.g.setRequestHeader(j,L);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(j){Kl(this,j)}};function Kl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Ql(o),_r(o)}function Ql(o){o.A||(o.A=!0,Ke(o,"complete"),Ke(o,"error"))}s.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ke(this,"complete"),Ke(this,"abort"),_r(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_r(this,!0)),we.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Yl(this):this.Xa())},s.Xa=function(){Yl(this)};function Yl(o){if(o.h&&typeof a<"u"){if(o.v&&Bt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ke(o,"readystatechange"),Bt(o)==4){o.h=!1;try{const j=o.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=j===0){let L=String(o.D).match(Fl)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),p=!Gf.test(L?L.toLowerCase():"")}d=p}if(d)Ke(o,"complete"),Ke(o,"success");else{o.o=6;try{var T=Bt(o)>2?o.g.statusText:""}catch{T=""}o.l=T+" ["+o.ca()+"]",Ql(o)}}finally{_r(o)}}}}function _r(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||Ke(o,"ready");try{d.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function Bt(o){return o.g?o.g.readyState:0}s.ca=function(){try{return Bt(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),jf(u)}};function Jl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Qf(o){const u={};o=(o.g&&Bt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(b(o[p]))continue;var d=Pf(o[p]);const T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const j=u[T]||[];u[T]=j,j.push(d)}me(u,function(p){return p.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cn(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Xl(o){this.za=0,this.i=[],this.j=new _n,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Cn("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Cn("baseRetryDelayMs",5e3,o),this.Za=Cn("retryDelaySeedMs",1e4,o),this.Ta=Cn("forwardChannelMaxRetries",2,o),this.va=Cn("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Dl(o&&o.concurrentRequestLimit),this.Ba=new zf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Xl.prototype,s.ka=8,s.I=1,s.connect=function(o,u,d,p){Qe(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=oc(this,null,this.W),Er(this)};function ya(o){if(Zl(o),o.I==3){var u=o.V++,d=gt(o.J);if(ge(d,"SID",o.M),ge(d,"RID",u),ge(d,"TYPE","terminate"),Rn(o,d),u=new Ot(o,o.j,u),u.M=2,u.A=br(gt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.A,d=!0),d||(u.g=lc(u.j,null),u.g.ea(u.A)),u.F=Date.now(),xr(u)}ac(o)}function vr(o){o.g&&(ba(o),o.g.cancel(),o.g=null)}function Zl(o){vr(o),o.v&&(l.clearTimeout(o.v),o.v=null),Ir(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&l.clearTimeout(o.m),o.m=null)}function Er(o){if(!Vl(o.h)&&!o.m){o.m=!0;var u=o.Ea;oe||x(),te||(oe(),te=!0),E.add(u,o),o.D=0}}function Yf(o,u){return Ml(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=wn(m(o.Ea,o,u),ic(o,o.D)),o.D++,!0)}s.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const T=new Ot(this,this.j,o);let j=this.o;if(this.U&&(j?(j=De(j),Ze(j,this.U)):j=this.U),this.u!==null||this.R||(T.J=j,j=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=tc(this,T,u),d=gt(this.J),ge(d,"RID",o),ge(d,"CVER",22),this.G&&ge(d,"X-HTTP-Session-Id",this.G),Rn(this,d),j&&(this.R?u="headers="+vn(Gl(j))+"&"+u:this.u&&ga(d,this.u,j)),ma(this.h,T),this.Ra&&ge(d,"TYPE","init"),this.S?(ge(d,"$req",u),ge(d,"SID","null"),T.U=!0,ca(T,d,null)):ca(T,d,u),this.I=2}}else this.I==3&&(o?ec(this,o):this.i.length==0||Vl(this.h)||ec(this))};function ec(o,u){var d;u?d=u.l:d=o.V++;const p=gt(o.J);ge(p,"SID",o.M),ge(p,"RID",d),ge(p,"AID",o.K),Rn(o,p),o.u&&o.o&&ga(p,o.u,o.o),d=new Ot(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=tc(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),ma(o.h,d),ca(d,p,u)}function Rn(o,u){o.H&&Q(o.H,function(d,p){ge(u,p,d)}),o.l&&Q({},function(d,p){ge(u,p,d)})}function tc(o,u,d){d=Math.min(o.i.length,d);const p=o.l?m(o.l.Ka,o.l,o):null;e:{var T=o.i;let ee=-1;for(;;){const Ae=["count="+d];ee==-1?d>0?(ee=T[0].g,Ae.push("ofs="+ee)):ee=0:Ae.push("ofs="+ee);let de=!0;for(let Ce=0;Ce<d;Ce++){var j=T[Ce].g;const yt=T[Ce].map;if(j-=ee,j<0)ee=Math.max(0,T[Ce].g-100),de=!1;else try{j="req"+j+"_"||"";try{var L=yt instanceof Map?yt:Object.entries(yt);for(const[ys,qt]of L){let $t=qt;c(qt)&&($t=ra(qt)),Ae.push(j+ys+"="+encodeURIComponent($t))}}catch(ys){throw Ae.push(j+"type="+encodeURIComponent("_badmap")),ys}}catch{p&&p(yt)}}if(de){L=Ae.join("&");break e}}L=void 0}return o=o.i.splice(0,d),u.G=o,L}function sc(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;oe||x(),te||(oe(),te=!0),E.add(u,o),o.A=0}}function xa(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=wn(m(o.Da,o),ic(o,o.A)),o.A++,!0)}s.Da=function(){if(this.v=null,nc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=wn(m(this.Wa,this),o)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Qe(10),vr(this),nc(this))};function ba(o){o.B!=null&&(l.clearTimeout(o.B),o.B=null)}function nc(o){o.g=new Ot(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=gt(o.na);ge(u,"RID","rpc"),ge(u,"SID",o.M),ge(u,"AID",o.K),ge(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&ge(u,"TO",o.ia),ge(u,"TYPE","xmlhttp"),Rn(o,u),o.u&&o.o&&ga(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=br(gt(u)),d.u=null,d.R=!0,Cl(d,o)}s.Va=function(){this.C!=null&&(this.C=null,vr(this),xa(this),Qe(19))};function Ir(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function rc(o,u){var d=null;if(o.g==u){Ir(o),ba(o),o.g=null;var p=2}else if(da(o.h,u))d=u.G,Ll(o.h,u),p=1;else return;if(o.I!=0){if(u.o)if(p==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var T=o.D;p=gr(),Ke(p,new Tl(p,d)),Er(o)}else sc(o);else if(T=u.m,T==3||T==0&&u.X>0||!(p==1&&Yf(o,u)||p==2&&xa(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),T){case 1:gs(o,5);break;case 4:gs(o,10);break;case 3:gs(o,6);break;default:gs(o,2)}}}function ic(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function gs(o,u){if(o.j.info("Error code "+u),u==2){var d=m(o.bb,o),p=o.Ua;const T=!p;p=new Ft(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||In(p,"https"),br(p),T?Wf(p.toString(),d):Hf(p.toString(),d)}else Qe(2);o.I=0,o.l&&o.l.pa(u),ac(o),Zl(o)}s.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Qe(2)):(this.j.info("Failed to ping google.com"),Qe(1))};function ac(o){if(o.I=0,o.ja=[],o.l){const u=Ol(o.h);(u.length!=0||o.i.length!=0)&&(k(o.ja,u),k(o.ja,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.oa()}}function oc(o,u,d){var p=d instanceof Ft?gt(d):new Ft(d);if(p.g!="")u&&(p.g=u+"."+p.g),Nn(p,p.u);else{var T=l.location;p=T.protocol,u=u?u+"."+T.hostname:T.hostname,T=+T.port;const j=new Ft(null);p&&In(j,p),u&&(j.g=u),T&&Nn(j,T),d&&(j.h=d),p=j}return d=o.G,u=o.wa,d&&u&&ge(p,d,u),ge(p,"VER",o.ka),Rn(o,p),p}function lc(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new we(new pa({ab:d})):new we(o.ma),u.Fa(o.L),u}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function cc(){}s=cc.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function Nr(){}Nr.prototype.g=function(o,u){return new et(o,u)};function et(o,u){qe.call(this),this.g=new Xl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!b(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!b(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Ls(this)}y(et,qe),et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){ya(this.g)},et.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=ra(o),o=d);u.i.push(new Mf(u.Ya++,o)),u.I==3&&Er(u)},et.prototype.N=function(){this.g.l=null,delete this.j,ya(this.g),delete this.g,et.Z.N.call(this)};function uc(o){ia.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}y(uc,ia);function hc(){aa.call(this),this.status=1}y(hc,aa);function Ls(o){this.g=o}y(Ls,cc),Ls.prototype.ra=function(){Ke(this.g,"a")},Ls.prototype.qa=function(o){Ke(this.g,new uc(o))},Ls.prototype.pa=function(o){Ke(this.g,new hc)},Ls.prototype.oa=function(){Ke(this.g,"b")},Nr.prototype.createWebChannel=Nr.prototype.g,et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,Id=function(){return new Nr},Ed=function(){return gr()},vd=ms,Xa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},yr.NO_ERROR=0,yr.TIMEOUT=8,yr.HTTP_ERROR=6,Br=yr,jl.COMPLETE="complete",_d=jl,vl.EventType=xn,xn.OPEN="a",xn.CLOSE="b",xn.ERROR="c",xn.MESSAGE="d",qe.prototype.listen=qe.prototype.J,Ln=vl,we.prototype.listenOnce=we.prototype.K,we.prototype.getLastError=we.prototype.Ha,we.prototype.getLastErrorCode=we.prototype.ya,we.prototype.getStatus=we.prototype.ca,we.prototype.getResponseJson=we.prototype.La,we.prototype.getResponseText=we.prototype.la,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Fa,wd=we}).apply(typeof Sr<"u"?Sr:typeof self<"u"?self:typeof window<"u"?window:{});const eu="@firebase/firestore",tu="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new ki("@firebase/firestore");function Os(){return Es.logLevel}function U(s,...e){if(Es.logLevel<=se.DEBUG){const t=e.map(Ro);Es.debug(`Firestore (${ln}): ${s}`,...t)}}function Vt(s,...e){if(Es.logLevel<=se.ERROR){const t=e.map(Ro);Es.error(`Firestore (${ln}): ${s}`,...t)}}function Js(s,...e){if(Es.logLevel<=se.WARN){const t=e.map(Ro);Es.warn(`Firestore (${ln}): ${s}`,...t)}}function Ro(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function z(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Nd(s,n,t)}function Nd(s,e,t){let n=`FIRESTORE (${ln}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Vt(n),new Error(n)}function ce(s,e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,s||Nd(e,r,n)}function X(s,e){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Td{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(We.UNAUTHENTICATED)))}shutdown(){}}class Pb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Db{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ce(this.o===void 0,42304);let n=this.i;const r=h=>this.i!==n?(n=this.i,t(h)):Promise.resolve();let a=new Ct;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ct,e.enqueueRetryable((()=>r(this.currentUser)))};const l=()=>{const h=a;e.enqueueRetryable((async()=>{await h.promise,await r(this.currentUser)}))},c=h=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ct)}}),0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(ce(typeof n.accessToken=="string",31837,{l:n}),new Td(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new We(e)}}class Vb{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=We.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Mb{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Vb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(We.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class su{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lb{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ct(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ce(this.o===void 0,3512);const n=a=>{a.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,U("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>n(a)))};const r=a=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>r(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?r(a):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new su(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ce(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new su(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=Ob(40);for(let a=0;a<r.length;++a)n.length<20&&r[a]<t&&(n+=e.charAt(r[a]%62))}return n}}function ne(s,e){return s<e?-1:s>e?1:0}function Za(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const r=s.charAt(n),a=e.charAt(n);if(r!==a)return Sa(r)===Sa(a)?ne(r,a):Sa(r)?1:-1}return ne(s.length,e.length)}const Fb=55296,Ub=57343;function Sa(s){const e=s.charCodeAt(0);return e>=Fb&&e<=Ub}function Xs(s,e,t){return s.length===e.length&&s.every(((n,r)=>t(n,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="__name__";class xt{constructor(e,t,n){t===void 0?t=0:t>e.length&&z(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&z(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return xt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xt?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const a=xt.compareSegments(e.get(r),t.get(r));if(a!==0)return a}return ne(e.length,t.length)}static compareSegments(e,t){const n=xt.isNumericId(e),r=xt.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?xt.extractNumericId(e).compare(xt.extractNumericId(t)):Za(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return es.fromString(e.substring(4,e.length-2))}}class pe extends xt{construct(e,t,n){return new pe(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new F(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((r=>r.length>0)))}return new pe(t)}static emptyPath(){return new pe([])}}const Bb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends xt{construct(e,t,n){return new Le(e,t,n)}static isValidIdentifier(e){return Bb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===nu}static keyField(){return new Le([nu])}static fromServerFormat(e){const t=[];let n="",r=0;const a=()=>{if(n.length===0)throw new F(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let l=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new F(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new F(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=h,r+=2}else c==="`"?(l=!l,r++):c!=="."||l?(n+=c,r++):(a(),r++)}if(a(),l)throw new F(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Le(t)}static emptyPath(){return new Le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(pe.fromString(e))}static fromName(e){return new $(pe.fromString(e).popFirst(5))}static empty(){return new $(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new pe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(s,e,t){if(!t)throw new F(S.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function qb(s,e,t,n){if(e===!0&&n===!0)throw new F(S.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function ru(s){if(!$.isDocumentKey(s))throw new F(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function iu(s){if($.isDocumentKey(s))throw new F(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function Ad(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function Mi(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":z(12329,{type:typeof s})}function Is(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new F(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Mi(s);throw new F(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
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
 */function Te(s,e){const t={typeString:s};return e&&(t.value=e),t}function ur(s,e){if(!Ad(s))throw new F(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const r=e[n].typeString,a="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const l=s[n];if(r&&typeof l!==r){t=`JSON field '${n}' must be a ${r}.`;break}if(a!==void 0&&l!==a.value){t=`Expected '${n}' field to equal '${a.value}'`;break}}if(t)throw new F(S.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=-62135596800,ou=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*ou);return new ye(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<au)throw new F(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ou}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ur(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-au;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:Te("string",ye._jsonSchemaVersion),seconds:Te("number"),nanoseconds:Te("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new ye(0,0))}static max(){return new Y(new ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Jn=-1;function $b(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=Y.fromTimestamp(n===1e9?new ye(t+1,0):new ye(t,n));return new ns(r,$.empty(),e)}function Wb(s){return new ns(s.readTime,s.key,Jn)}class ns{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ns(Y.min(),$.empty(),Jn)}static max(){return new ns(Y.max(),$.empty(),Jn)}}function Hb(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(s.documentKey,e.documentKey),t!==0?t:ne(s.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(s){if(s.code!==S.FAILED_PRECONDITION||s.message!==zb)throw s;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C(((n,r)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(n,r)},this.catchCallback=a=>{this.wrapFailure(t,a).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):C.reject(t)}static resolve(e){return new C(((t,n)=>{t(e)}))}static reject(e){return new C(((t,n)=>{n(e)}))}static waitFor(e){return new C(((t,n)=>{let r=0,a=0,l=!1;e.forEach((c=>{++r,c.next((()=>{++a,l&&a===r&&t()}),(h=>n(h)))})),l=!0,a===r&&t()}))}static or(e){let t=C.resolve(!1);for(const n of e)t=t.next((r=>r?C.resolve(r):n()));return t}static forEach(e,t){const n=[];return e.forEach(((r,a)=>{n.push(t.call(this,r,a))})),this.waitFor(n)}static mapArray(e,t){return new C(((n,r)=>{const a=e.length,l=new Array(a);let c=0;for(let h=0;h<a;h++){const m=h;t(e[m]).next((f=>{l[m]=f,++c,c===a&&n(l)}),(f=>r(f)))}}))}static doWhile(e,t){return new C(((n,r)=>{const a=()=>{e()===!0?t().next((()=>{a()}),r):n()};a()}))}}function Kb(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function un(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class Li{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Li.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=-1;function Oi(s){return s==null}function ci(s){return s===0&&1/s==-1/0}function Qb(s){return typeof s=="number"&&Number.isInteger(s)&&!ci(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="";function Yb(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=lu(e)),e=Jb(s.get(t),e);return lu(e)}function Jb(s,e){let t=e;const n=s.length;for(let r=0;r<n;r++){const a=s.charAt(r);switch(a){case"\0":t+="";break;case Sd:t+="";break;default:t+=a}}return t}function lu(s){return s+Sd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function hs(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function kd(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t){this.comparator=e,this.root=t||Me.EMPTY}insert(e,t){return new be(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kr(this.root,e,this.comparator,!1)}getReverseIterator(){return new kr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kr(this.root,e,this.comparator,!0)}}class kr{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?n(e.key,t):1,t&&r&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,t,n,r,a){this.key=e,this.value=t,this.color=n??Me.RED,this.left=r??Me.EMPTY,this.right=a??Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,a){return new Me(e??this.key,t??this.value,n??this.color,r??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const a=n(e,r.key);return r=a<0?r.copy(null,null,null,r.left.insert(e,t,n),null):a===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Me.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw z(27949);return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(e,t,n,r,a){return this}insert(e,t,n){return new Me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uu(this.data.getIterator())}getIteratorFrom(e){return new uu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,a=n.getNext().key;if(this.comparator(r,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class uu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new ht([])}unionWith(e){let t=new Se(Le.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ht(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xs(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class Cd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Cd("Invalid base64 string: "+a):a}})(e);return new Fe(t)}static fromUint8Array(e){const t=(function(r){let a="";for(let l=0;l<r.length;++l)a+=String.fromCharCode(r[l]);return a})(e);return new Fe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const Xb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(s){if(ce(!!s,39018),typeof s=="string"){let e=0;const t=Xb.exec(s);if(ce(!!t,46558,{timestamp:s}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ve(s.seconds),nanos:ve(s.nanos)}}function ve(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function is(s){return typeof s=="string"?Fe.fromBase64String(s):Fe.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="server_timestamp",Pd="__type__",Dd="__previous_value__",Vd="__local_write_time__";function Vo(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[Pd])==null?void 0:n.stringValue)===Rd}function Fi(s){const e=s.mapValue.fields[Dd];return Vo(e)?Fi(e):e}function Xn(s){const e=rs(s.mapValue.fields[Vd].timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,t,n,r,a,l,c,h,m,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=m,this.isUsingEmulator=f}}const ui="(default)";class Zn{constructor(e,t){this.projectId=e,this.database=t||ui}static empty(){return new Zn("","")}get isDefaultDatabase(){return this.database===ui}isEqual(e){return e instanceof Zn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="__type__",ew="__max__",Cr={mapValue:{}},Ld="__vector__",hi="value";function as(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Vo(s)?4:sw(s)?9007199254740991:tw(s)?10:11:z(28295,{value:s})}function jt(s,e){if(s===e)return!0;const t=as(s);if(t!==as(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return Xn(s).isEqual(Xn(e));case 3:return(function(r,a){if(typeof r.timestampValue=="string"&&typeof a.timestampValue=="string"&&r.timestampValue.length===a.timestampValue.length)return r.timestampValue===a.timestampValue;const l=rs(r.timestampValue),c=rs(a.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(r,a){return is(r.bytesValue).isEqual(is(a.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(r,a){return ve(r.geoPointValue.latitude)===ve(a.geoPointValue.latitude)&&ve(r.geoPointValue.longitude)===ve(a.geoPointValue.longitude)})(s,e);case 2:return(function(r,a){if("integerValue"in r&&"integerValue"in a)return ve(r.integerValue)===ve(a.integerValue);if("doubleValue"in r&&"doubleValue"in a){const l=ve(r.doubleValue),c=ve(a.doubleValue);return l===c?ci(l)===ci(c):isNaN(l)&&isNaN(c)}return!1})(s,e);case 9:return Xs(s.arrayValue.values||[],e.arrayValue.values||[],jt);case 10:case 11:return(function(r,a){const l=r.mapValue.fields||{},c=a.mapValue.fields||{};if(cu(l)!==cu(c))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(c[h]===void 0||!jt(l[h],c[h])))return!1;return!0})(s,e);default:return z(52216,{left:s})}}function er(s,e){return(s.values||[]).find((t=>jt(t,e)))!==void 0}function Zs(s,e){if(s===e)return 0;const t=as(s),n=as(e);if(t!==n)return ne(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(s.booleanValue,e.booleanValue);case 2:return(function(a,l){const c=ve(a.integerValue||a.doubleValue),h=ve(l.integerValue||l.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(s,e);case 3:return hu(s.timestampValue,e.timestampValue);case 4:return hu(Xn(s),Xn(e));case 5:return Za(s.stringValue,e.stringValue);case 6:return(function(a,l){const c=is(a),h=is(l);return c.compareTo(h)})(s.bytesValue,e.bytesValue);case 7:return(function(a,l){const c=a.split("/"),h=l.split("/");for(let m=0;m<c.length&&m<h.length;m++){const f=ne(c[m],h[m]);if(f!==0)return f}return ne(c.length,h.length)})(s.referenceValue,e.referenceValue);case 8:return(function(a,l){const c=ne(ve(a.latitude),ve(l.latitude));return c!==0?c:ne(ve(a.longitude),ve(l.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return du(s.arrayValue,e.arrayValue);case 10:return(function(a,l){var v,N,k,P;const c=a.fields||{},h=l.fields||{},m=(v=c[hi])==null?void 0:v.arrayValue,f=(N=h[hi])==null?void 0:N.arrayValue,y=ne(((k=m==null?void 0:m.values)==null?void 0:k.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return y!==0?y:du(m,f)})(s.mapValue,e.mapValue);case 11:return(function(a,l){if(a===Cr.mapValue&&l===Cr.mapValue)return 0;if(a===Cr.mapValue)return 1;if(l===Cr.mapValue)return-1;const c=a.fields||{},h=Object.keys(c),m=l.fields||{},f=Object.keys(m);h.sort(),f.sort();for(let y=0;y<h.length&&y<f.length;++y){const v=Za(h[y],f[y]);if(v!==0)return v;const N=Zs(c[h[y]],m[f[y]]);if(N!==0)return N}return ne(h.length,f.length)})(s.mapValue,e.mapValue);default:throw z(23264,{he:t})}}function hu(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return ne(s,e);const t=rs(s),n=rs(e),r=ne(t.seconds,n.seconds);return r!==0?r:ne(t.nanos,n.nanos)}function du(s,e){const t=s.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const a=Zs(t[r],n[r]);if(a)return a}return ne(t.length,n.length)}function en(s){return eo(s)}function eo(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(t){const n=rs(t);return`time(${n.seconds},${n.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(t){return is(t).toBase64()})(s.bytesValue):"referenceValue"in s?(function(t){return $.fromName(t).toString()})(s.referenceValue):"geoPointValue"in s?(function(t){return`geo(${t.latitude},${t.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(t){let n="[",r=!0;for(const a of t.values||[])r?r=!1:n+=",",n+=eo(a);return n+"]"})(s.arrayValue):"mapValue"in s?(function(t){const n=Object.keys(t.fields||{}).sort();let r="{",a=!0;for(const l of n)a?a=!1:r+=",",r+=`${l}:${eo(t.fields[l])}`;return r+"}"})(s.mapValue):z(61005,{value:s})}function qr(s){switch(as(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fi(s);return e?16+qr(e):16;case 5:return 2*s.stringValue.length;case 6:return is(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((r,a)=>r+qr(a)),0)})(s.arrayValue);case 10:case 11:return(function(n){let r=0;return hs(n.fields,((a,l)=>{r+=a.length+qr(l)})),r})(s.mapValue);default:throw z(13486,{value:s})}}function mu(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function to(s){return!!s&&"integerValue"in s}function Mo(s){return!!s&&"arrayValue"in s}function fu(s){return!!s&&"nullValue"in s}function pu(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function $r(s){return!!s&&"mapValue"in s}function tw(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[Md])==null?void 0:n.stringValue)===Ld}function $n(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return hs(s.mapValue.fields,((t,n)=>e.mapValue.fields[t]=$n(n))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=$n(s.arrayValue.values[t]);return e}return{...s}}function sw(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===ew}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!$r(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$n(t)}setAll(e){let t=Le.emptyPath(),n={},r=[];e.forEach(((l,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,n,r),n={},r=[],t=c.popLast()}l?n[c.lastSegment()]=$n(l):r.push(c.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,n,r)}delete(e){const t=this.field(e.popLast());$r(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return jt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];$r(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){hs(t,((r,a)=>e[r]=a));for(const r of n)delete e[r]}clone(){return new tt($n(this.value))}}function Od(s){const e=[];return hs(s.fields,((t,n)=>{const r=new Le([t]);if($r(n)){const a=Od(n.mapValue).fields;if(a.length===0)e.push(r);else for(const l of a)e.push(r.child(l))}else e.push(r)})),new ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t,n,r,a,l,c){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=a,this.data=l,this.documentState=c}static newInvalidDocument(e){return new He(e,0,Y.min(),Y.min(),Y.min(),tt.empty(),0)}static newFoundDocument(e,t,n,r){return new He(e,1,t,Y.min(),n,r,0)}static newNoDocument(e,t){return new He(e,2,t,Y.min(),Y.min(),tt.empty(),0)}static newUnknownDocument(e,t){return new He(e,3,t,Y.min(),Y.min(),tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class di{constructor(e,t){this.position=e,this.inclusive=t}}function gu(s,e,t){let n=0;for(let r=0;r<s.position.length;r++){const a=e[r],l=s.position[r];if(a.field.isKeyField()?n=$.comparator($.fromName(l.referenceValue),t.key):n=Zs(l,t.data.field(a.field)),a.dir==="desc"&&(n*=-1),n!==0)break}return n}function yu(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!jt(s.position[t],e.position[t]))return!1;return!0}/**
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
 */class tr{constructor(e,t="asc"){this.field=e,this.dir=t}}function nw(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
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
 */class Fd{}class Ne extends Fd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new iw(e,t,n):t==="array-contains"?new lw(e,n):t==="in"?new cw(e,n):t==="not-in"?new uw(e,n):t==="array-contains-any"?new hw(e,n):new Ne(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new aw(e,n):new ow(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Zs(t,this.value)):t!==null&&as(this.value)===as(t)&&this.matchesComparison(Zs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ft extends Fd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ft(e,t)}matches(e){return Ud(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ud(s){return s.op==="and"}function Bd(s){return rw(s)&&Ud(s)}function rw(s){for(const e of s.filters)if(e instanceof ft)return!1;return!0}function so(s){if(s instanceof Ne)return s.field.canonicalString()+s.op.toString()+en(s.value);if(Bd(s))return s.filters.map((e=>so(e))).join(",");{const e=s.filters.map((t=>so(t))).join(",");return`${s.op}(${e})`}}function qd(s,e){return s instanceof Ne?(function(n,r){return r instanceof Ne&&n.op===r.op&&n.field.isEqual(r.field)&&jt(n.value,r.value)})(s,e):s instanceof ft?(function(n,r){return r instanceof ft&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce(((a,l,c)=>a&&qd(l,r.filters[c])),!0):!1})(s,e):void z(19439)}function $d(s){return s instanceof Ne?(function(t){return`${t.field.canonicalString()} ${t.op} ${en(t.value)}`})(s):s instanceof ft?(function(t){return t.op.toString()+" {"+t.getFilters().map($d).join(" ,")+"}"})(s):"Filter"}class iw extends Ne{constructor(e,t,n){super(e,t,n),this.key=$.fromName(n.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class aw extends Ne{constructor(e,t){super(e,"in",t),this.keys=Wd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ow extends Ne{constructor(e,t){super(e,"not-in",t),this.keys=Wd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Wd(s,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>$.fromName(n.referenceValue)))}class lw extends Ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mo(t)&&er(t.arrayValue,this.value)}}class cw extends Ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&er(this.value.arrayValue,t)}}class uw extends Ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!er(this.value.arrayValue,t)}}class hw extends Ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>er(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,t=null,n=[],r=[],a=null,l=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=a,this.startAt=l,this.endAt=c,this.Te=null}}function xu(s,e=null,t=[],n=[],r=null,a=null,l=null){return new dw(s,e,t,n,r,a,l)}function Lo(s){const e=X(s);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>so(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(a){return a.field.canonicalString()+a.dir})(n))).join(","),Oi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>en(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>en(n))).join(",")),e.Te=t}return e.Te}function Oo(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!nw(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!qd(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!yu(s.startAt,e.startAt)&&yu(s.endAt,e.endAt)}function no(s){return $.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t=null,n=[],r=[],a=null,l="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=a,this.limitType=l,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function mw(s,e,t,n,r,a,l,c){return new hn(s,e,t,n,r,a,l,c)}function Fo(s){return new hn(s)}function bu(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function Hd(s){return s.collectionGroup!==null}function Wn(s){const e=X(s);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new Se(Le.comparator);return l.filters.forEach((h=>{h.getFlattenedFilters().forEach((m=>{m.isInequality()&&(c=c.add(m.field))}))})),c})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new tr(a,n))})),t.has(Le.keyField().canonicalString())||e.Ie.push(new tr(Le.keyField(),n))}return e.Ie}function _t(s){const e=X(s);return e.Ee||(e.Ee=fw(e,Wn(s))),e.Ee}function fw(s,e){if(s.limitType==="F")return xu(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map((r=>{const a=r.dir==="desc"?"asc":"desc";return new tr(r.field,a)}));const t=s.endAt?new di(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new di(s.startAt.position,s.startAt.inclusive):null;return xu(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function ro(s,e){const t=s.filters.concat([e]);return new hn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}function io(s,e,t){return new hn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function Ui(s,e){return Oo(_t(s),_t(e))&&s.limitType===e.limitType}function zd(s){return`${Lo(_t(s))}|lt:${s.limitType}`}function Fs(s){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((r=>$d(r))).join(", ")}]`),Oi(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((r=>(function(l){return`${l.field.canonicalString()} (${l.dir})`})(r))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>en(r))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>en(r))).join(",")),`Target(${n})`})(_t(s))}; limitType=${s.limitType})`}function Bi(s,e){return e.isFoundDocument()&&(function(n,r){const a=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(a):$.isDocumentKey(n.path)?n.path.isEqual(a):n.path.isImmediateParentOf(a)})(s,e)&&(function(n,r){for(const a of Wn(n))if(!a.field.isKeyField()&&r.data.field(a.field)===null)return!1;return!0})(s,e)&&(function(n,r){for(const a of n.filters)if(!a.matches(r))return!1;return!0})(s,e)&&(function(n,r){return!(n.startAt&&!(function(l,c,h){const m=gu(l,c,h);return l.inclusive?m<=0:m<0})(n.startAt,Wn(n),r)||n.endAt&&!(function(l,c,h){const m=gu(l,c,h);return l.inclusive?m>=0:m>0})(n.endAt,Wn(n),r))})(s,e)}function pw(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function Gd(s){return(e,t)=>{let n=!1;for(const r of Wn(s)){const a=gw(r,e,t);if(a!==0)return a;n=n||r.field.isKeyField()}return 0}}function gw(s,e,t){const n=s.field.isKeyField()?$.comparator(e.key,t.key):(function(a,l,c){const h=l.data.field(a),m=c.data.field(a);return h!==null&&m!==null?Zs(h,m):z(42886)})(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return z(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,a]of n)if(this.equalsFn(r,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return void(r[a]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){hs(this.inner,((t,n)=>{for(const[r,a]of n)e(r,a)}))}isEmpty(){return kd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=new be($.comparator);function Mt(){return yw}const Kd=new be($.comparator);function On(...s){let e=Kd;for(const t of s)e=e.insert(t.key,t);return e}function Qd(s){let e=Kd;return s.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function bs(){return Hn()}function Yd(){return Hn()}function Hn(){return new Cs((s=>s.toString()),((s,e)=>s.isEqual(e)))}const xw=new be($.comparator),bw=new Se($.comparator);function re(...s){let e=bw;for(const t of s)e=e.add(t);return e}const ww=new Se(ne);function _w(){return ww}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ci(e)?"-0":e}}function Jd(s){return{integerValue:""+s}}function vw(s,e){return Qb(e)?Jd(e):Uo(s,e)}/**
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
 */class qi{constructor(){this._=void 0}}function Ew(s,e,t){return s instanceof sr?(function(r,a){const l={fields:{[Pd]:{stringValue:Rd},[Vd]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return a&&Vo(a)&&(a=Fi(a)),a&&(l.fields[Dd]=a),{mapValue:l}})(t,e):s instanceof nr?Zd(s,e):s instanceof rr?em(s,e):(function(r,a){const l=Xd(r,a),c=wu(l)+wu(r.Ae);return to(l)&&to(r.Ae)?Jd(c):Uo(r.serializer,c)})(s,e)}function Iw(s,e,t){return s instanceof nr?Zd(s,e):s instanceof rr?em(s,e):t}function Xd(s,e){return s instanceof mi?(function(n){return to(n)||(function(a){return!!a&&"doubleValue"in a})(n)})(e)?e:{integerValue:0}:null}class sr extends qi{}class nr extends qi{constructor(e){super(),this.elements=e}}function Zd(s,e){const t=tm(e);for(const n of s.elements)t.some((r=>jt(r,n)))||t.push(n);return{arrayValue:{values:t}}}class rr extends qi{constructor(e){super(),this.elements=e}}function em(s,e){let t=tm(e);for(const n of s.elements)t=t.filter((r=>!jt(r,n)));return{arrayValue:{values:t}}}class mi extends qi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function wu(s){return ve(s.integerValue||s.doubleValue)}function tm(s){return Mo(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,t){this.field=e,this.transform=t}}function Tw(s,e){return s.field.isEqual(e.field)&&(function(n,r){return n instanceof nr&&r instanceof nr||n instanceof rr&&r instanceof rr?Xs(n.elements,r.elements,jt):n instanceof mi&&r instanceof mi?jt(n.Ae,r.Ae):n instanceof sr&&r instanceof sr})(s.transform,e.transform)}class jw{constructor(e,t){this.version=e,this.transformResults=t}}class Rt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rt}static exists(e){return new Rt(void 0,e)}static updateTime(e){return new Rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wr(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class $i{}function sm(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new rm(s.key,Rt.none()):new Wi(s.key,s.data,Rt.none());{const t=s.data,n=tt.empty();let r=new Se(Le.comparator);for(let a of e.fields)if(!r.has(a)){let l=t.field(a);l===null&&a.length>1&&(a=a.popLast(),l=t.field(a)),l===null?n.delete(a):n.set(a,l),r=r.add(a)}return new Rs(s.key,n,new ht(r.toArray()),Rt.none())}}function Aw(s,e,t){s instanceof Wi?(function(r,a,l){const c=r.value.clone(),h=vu(r.fieldTransforms,a,l.transformResults);c.setAll(h),a.convertToFoundDocument(l.version,c).setHasCommittedMutations()})(s,e,t):s instanceof Rs?(function(r,a,l){if(!Wr(r.precondition,a))return void a.convertToUnknownDocument(l.version);const c=vu(r.fieldTransforms,a,l.transformResults),h=a.data;h.setAll(nm(r)),h.setAll(c),a.convertToFoundDocument(l.version,h).setHasCommittedMutations()})(s,e,t):(function(r,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()})(0,e,t)}function zn(s,e,t,n){return s instanceof Wi?(function(a,l,c,h){if(!Wr(a.precondition,l))return c;const m=a.value.clone(),f=Eu(a.fieldTransforms,h,l);return m.setAll(f),l.convertToFoundDocument(l.version,m).setHasLocalMutations(),null})(s,e,t,n):s instanceof Rs?(function(a,l,c,h){if(!Wr(a.precondition,l))return c;const m=Eu(a.fieldTransforms,h,l),f=l.data;return f.setAll(nm(a)),f.setAll(m),l.convertToFoundDocument(l.version,f).setHasLocalMutations(),c===null?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((y=>y.field)))})(s,e,t,n):(function(a,l,c){return Wr(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c})(s,e,t)}function Sw(s,e){let t=null;for(const n of s.fieldTransforms){const r=e.data.field(n.field),a=Xd(n.transform,r||null);a!=null&&(t===null&&(t=tt.empty()),t.set(n.field,a))}return t||null}function _u(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Xs(n,r,((a,l)=>Tw(a,l)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class Wi extends $i{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Rs extends $i{constructor(e,t,n,r,a=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function nm(s){const e=new Map;return s.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}})),e}function vu(s,e,t){const n=new Map;ce(s.length===t.length,32656,{Re:t.length,Ve:s.length});for(let r=0;r<t.length;r++){const a=s[r],l=a.transform,c=e.data.field(a.field);n.set(a.field,Iw(l,c,t[r]))}return n}function Eu(s,e,t){const n=new Map;for(const r of s){const a=r.transform,l=t.data.field(r.field);n.set(r.field,Ew(a,l,e))}return n}class rm extends $i{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kw extends $i{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const a=this.mutations[r];a.key.isEqual(e.key)&&Aw(a,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=zn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=zn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Yd();return this.mutations.forEach((r=>{const a=e.get(r.key),l=a.overlayedDocument;let c=this.applyToLocalView(l,a.mutatedFields);c=t.has(r.key)?null:c;const h=sm(l,c);h!==null&&n.set(r.key,h),l.isValidDocument()||l.convertToNoDocument(Y.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),re())}isEqual(e){return this.batchId===e.batchId&&Xs(this.mutations,e.mutations,((t,n)=>_u(t,n)))&&Xs(this.baseMutations,e.baseMutations,((t,n)=>_u(t,n)))}}class Bo{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ce(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=(function(){return xw})();const a=e.mutations;for(let l=0;l<a.length;l++)r=r.insert(a[l].key,n[l].version);return new Bo(e,t,n,r)}}/**
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
 */class Rw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Pw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,ae;function Dw(s){switch(s){case S.OK:return z(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return z(15467,{code:s})}}function im(s){if(s===void 0)return Vt("GRPC error has no .code"),S.UNKNOWN;switch(s){case Ie.OK:return S.OK;case Ie.CANCELLED:return S.CANCELLED;case Ie.UNKNOWN:return S.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return S.INTERNAL;case Ie.UNAVAILABLE:return S.UNAVAILABLE;case Ie.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ie.NOT_FOUND:return S.NOT_FOUND;case Ie.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ie.ABORTED:return S.ABORTED;case Ie.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ie.DATA_LOSS:return S.DATA_LOSS;default:return z(39323,{code:s})}}(ae=Ie||(Ie={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Vw(){return new TextEncoder}/**
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
 */const Mw=new es([4294967295,4294967295],0);function Iu(s){const e=Vw().encode(s),t=new bd;return t.update(e),new Uint8Array(t.digest())}function Nu(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new es([t,n],0),new es([r,a],0)]}class qo{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Fn(`Invalid padding: ${t}`);if(n<0)throw new Fn(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Fn(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Fn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=es.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(es.fromNumber(n)));return r.compare(Mw)===1&&(r=new es([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Iu(e),[n,r]=Nu(t);for(let a=0;a<this.hashCount;a++){const l=this.ye(n,r,a);if(!this.we(l))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),l=new qo(a,r,t);return n.forEach((c=>l.insert(c))),l}insert(e){if(this.ge===0)return;const t=Iu(e),[n,r]=Nu(t);for(let a=0;a<this.hashCount;a++){const l=this.ye(n,r,a);this.Se(l)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Fn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t,n,r,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,hr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Hi(Y.min(),r,new be(ne),Mt(),re())}}class hr{constructor(e,t,n,r,a){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new hr(n,t,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class am{constructor(e,t){this.targetId=e,this.Ce=t}}class om{constructor(e,t,n=Fe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Tu{constructor(){this.ve=0,this.Fe=ju(),this.Me=Fe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),t=re(),n=re();return this.Fe.forEach(((r,a)=>{switch(a){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:z(38017,{changeType:a})}})),new hr(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=ju()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ce(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Lw{constructor(e){this.Ge=e,this.ze=new Map,this.je=Mt(),this.Je=Rr(),this.He=Rr(),this.Ye=new be(ne)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:z(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const a=r.target;if(no(a))if(n===0){const l=new $(a.path);this.et(t,l,He.newNoDocument(l,Y.min()))}else ce(n===1,20013,{expectedCount:n});else{const l=this._t(t);if(l!==n){const c=this.ut(e),h=c?this.ct(c,e,l):1;if(h!==0){this.it(t);const m=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,m)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:a=0}=t;let l,c;try{l=is(n).toUint8Array()}catch(h){if(h instanceof Cd)return Js("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new qo(l,r,a)}catch(h){return Js(h instanceof Fn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach((a=>{const l=this.Ge.ht(),c=`projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;e.mightContain(c)||(this.et(t,a,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((a,l)=>{const c=this.ot(l);if(c){if(a.current&&no(c.target)){const h=new $(c.target.path);this.It(h).has(l)||this.Et(l,h)||this.et(l,h,He.newNoDocument(h,e))}a.Be&&(t.set(l,a.ke()),a.qe())}}));let n=re();this.He.forEach(((a,l)=>{let c=!0;l.forEachWhile((h=>{const m=this.ot(h);return!m||m.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(n=n.add(a))})),this.je.forEach(((a,l)=>l.setReadTime(e)));const r=new Hi(e,t,this.Ye,this.je,n);return this.je=Mt(),this.Je=Rr(),this.He=Rr(),this.Ye=new be(ne),r}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Tu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Se(ne),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Se(ne),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Tu),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Rr(){return new be($.comparator)}function ju(){return new be($.comparator)}const Ow={asc:"ASCENDING",desc:"DESCENDING"},Fw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Uw={and:"AND",or:"OR"};class Bw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ao(s,e){return s.useProto3Json||Oi(e)?e:{value:e}}function fi(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lm(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function qw(s,e){return fi(s,e.toTimestamp())}function vt(s){return ce(!!s,49232),Y.fromTimestamp((function(t){const n=rs(t);return new ye(n.seconds,n.nanos)})(s))}function $o(s,e){return oo(s,e).canonicalString()}function oo(s,e){const t=(function(r){return new pe(["projects",r.projectId,"databases",r.database])})(s).child("documents");return e===void 0?t:t.child(e)}function cm(s){const e=pe.fromString(s);return ce(fm(e),10190,{key:e.toString()}),e}function lo(s,e){return $o(s.databaseId,e.path)}function ka(s,e){const t=cm(e);if(t.get(1)!==s.databaseId.projectId)throw new F(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new F(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new $(hm(t))}function um(s,e){return $o(s.databaseId,e)}function $w(s){const e=cm(s);return e.length===4?pe.emptyPath():hm(e)}function co(s){return new pe(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function hm(s){return ce(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function Au(s,e,t){return{name:lo(s,e),fields:t.value.mapValue.fields}}function Ww(s,e){let t;if("targetChange"in e){e.targetChange;const n=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:z(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],a=(function(m,f){return m.useProto3Json?(ce(f===void 0||typeof f=="string",58123),Fe.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Fe.fromUint8Array(f||new Uint8Array))})(s,e.targetChange.resumeToken),l=e.targetChange.cause,c=l&&(function(m){const f=m.code===void 0?S.UNKNOWN:im(m.code);return new F(f,m.message||"")})(l);t=new om(n,r,a,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=ka(s,n.document.name),a=vt(n.document.updateTime),l=n.document.createTime?vt(n.document.createTime):Y.min(),c=new tt({mapValue:{fields:n.document.fields}}),h=He.newFoundDocument(r,a,l,c),m=n.targetIds||[],f=n.removedTargetIds||[];t=new Hr(m,f,h.key,h)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=ka(s,n.document),a=n.readTime?vt(n.readTime):Y.min(),l=He.newNoDocument(r,a),c=n.removedTargetIds||[];t=new Hr([],c,l.key,l)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=ka(s,n.document),a=n.removedTargetIds||[];t=new Hr([],a,r,null)}else{if(!("filter"in e))return z(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:a}=n,l=new Pw(r,a),c=n.targetId;t=new am(c,l)}}return t}function Hw(s,e){let t;if(e instanceof Wi)t={update:Au(s,e.key,e.value)};else if(e instanceof rm)t={delete:lo(s,e.key)};else if(e instanceof Rs)t={update:Au(s,e.key,e.data),updateMask:e_(e.fieldMask)};else{if(!(e instanceof kw))return z(16599,{Vt:e.type});t={verify:lo(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(a,l){const c=l.transform;if(c instanceof sr)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof nr)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof rr)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof mi)return{fieldPath:l.field.canonicalString(),increment:c.Ae};throw z(20930,{transform:l.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(r,a){return a.updateTime!==void 0?{updateTime:qw(r,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:z(27497)})(s,e.precondition)),t}function zw(s,e){return s&&s.length>0?(ce(e!==void 0,14353),s.map((t=>(function(r,a){let l=r.updateTime?vt(r.updateTime):vt(a);return l.isEqual(Y.min())&&(l=vt(a)),new jw(l,r.transformResults||[])})(t,e)))):[]}function Gw(s,e){return{documents:[um(s,e.path)]}}function Kw(s,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=um(s,r);const a=(function(m){if(m.length!==0)return mm(ft.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const l=(function(m){if(m.length!==0)return m.map((f=>(function(v){return{field:Us(v.field),direction:Jw(v.dir)}})(f)))})(e.orderBy);l&&(t.structuredQuery.orderBy=l);const c=ao(s,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{ft:t,parent:r}}function Qw(s){let e=$w(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){ce(n===1,65062);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let a=[];t.where&&(a=(function(y){const v=dm(y);return v instanceof ft&&Bd(v)?v.getFilters():[v]})(t.where));let l=[];t.orderBy&&(l=(function(y){return y.map((v=>(function(k){return new tr(Bs(k.field),(function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(v)))})(t.orderBy));let c=null;t.limit&&(c=(function(y){let v;return v=typeof y=="object"?y.value:y,Oi(v)?null:v})(t.limit));let h=null;t.startAt&&(h=(function(y){const v=!!y.before,N=y.values||[];return new di(N,v)})(t.startAt));let m=null;return t.endAt&&(m=(function(y){const v=!y.before,N=y.values||[];return new di(N,v)})(t.endAt)),mw(e,r,l,a,c,"F",h,m)}function Yw(s,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dm(s){return s.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Bs(t.unaryFilter.field);return Ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Bs(t.unaryFilter.field);return Ne.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Bs(t.unaryFilter.field);return Ne.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Bs(t.unaryFilter.field);return Ne.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}})(s):s.fieldFilter!==void 0?(function(t){return Ne.create(Bs(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(t){return ft.create(t.compositeFilter.filters.map((n=>dm(n))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return z(1026)}})(t.compositeFilter.op))})(s):z(30097,{filter:s})}function Jw(s){return Ow[s]}function Xw(s){return Fw[s]}function Zw(s){return Uw[s]}function Us(s){return{fieldPath:s.canonicalString()}}function Bs(s){return Le.fromServerFormat(s.fieldPath)}function mm(s){return s instanceof Ne?(function(t){if(t.op==="=="){if(pu(t.value))return{unaryFilter:{field:Us(t.field),op:"IS_NAN"}};if(fu(t.value))return{unaryFilter:{field:Us(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(pu(t.value))return{unaryFilter:{field:Us(t.field),op:"IS_NOT_NAN"}};if(fu(t.value))return{unaryFilter:{field:Us(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Us(t.field),op:Xw(t.op),value:t.value}}})(s):s instanceof ft?(function(t){const n=t.getFilters().map((r=>mm(r)));return n.length===1?n[0]:{compositeFilter:{op:Zw(t.op),filters:n}}})(s):z(54877,{filter:s})}function e_(s){const e=[];return s.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function fm(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t,n,r,a=Y.min(),l=Y.min(),c=Fe.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new Yt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.yt=e}}function s_(s){const e=Qw({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?io(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(){this.Cn=new r_}addToCollectionParentIndex(e,t){return this.Cn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(ns.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(ns.min())}updateCollectionGroup(e,t,n){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class r_{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Se(pe.comparator),a=!r.has(n);return this.index[t]=r.add(n),a}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Se(pe.comparator)).toArray()}}/**
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
 */const Su={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pm=41943040;class Xe{static withCacheSize(e){return new Xe(e,Xe.DEFAULT_COLLECTION_PERCENTILE,Xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe.DEFAULT_COLLECTION_PERCENTILE=10,Xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xe.DEFAULT=new Xe(pm,Xe.DEFAULT_COLLECTION_PERCENTILE,Xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xe.DISABLED=new Xe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new tn(0)}static cr(){return new tn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="LruGarbageCollector",i_=1048576;function Cu([s,e],[t,n]){const r=ne(s,t);return r===0?ne(e,n):r}class a_{constructor(e){this.Ir=e,this.buffer=new Se(Cu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Cu(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class o_{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){U(ku,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){un(t)?U(ku,"Ignoring IndexedDB error during garbage collection: ",t):await cn(t)}await this.Vr(3e5)}))}}class l_{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Li.ce);const n=new a_(t);return this.mr.forEachTarget(e,(r=>n.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>n.Ar(r))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Su)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Su):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,r,a,l,c,h,m;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),r=this.params.maximumSequenceNumbersToCollect):r=y,l=Date.now(),this.nthSequenceNumber(e,r)))).next((y=>(n=y,c=Date.now(),this.removeTargets(e,n,t)))).next((y=>(a=y,h=Date.now(),this.removeOrphanedDocuments(e,n)))).next((y=>(m=Date.now(),Os()<=se.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-f}ms
	Determined least recently used ${r} in `+(c-l)+`ms
	Removed ${a} targets in `+(h-c)+`ms
	Removed ${y} documents in `+(m-h)+`ms
Total Duration: ${m-f}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:a,documentsRemoved:y}))))}}function c_(s,e){return new l_(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.changes=new Cs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?C.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class h_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(n!==null&&zn(n.mutation,r,ht.empty(),ye.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,re()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=re()){const r=bs();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((a=>{let l=On();return a.forEach(((c,h)=>{l=l.insert(c,h.overlayedDocument)})),l}))))}getOverlayedDocuments(e,t){const n=bs();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,re())))}populateOverlays(e,t,n){const r=[];return n.forEach((a=>{t.has(a)||r.push(a)})),this.documentOverlayCache.getOverlays(e,r).next((a=>{a.forEach(((l,c)=>{t.set(l,c)}))}))}computeViews(e,t,n,r){let a=Mt();const l=Hn(),c=(function(){return Hn()})();return t.forEach(((h,m)=>{const f=n.get(m.key);r.has(m.key)&&(f===void 0||f.mutation instanceof Rs)?a=a.insert(m.key,m):f!==void 0?(l.set(m.key,f.mutation.getFieldMask()),zn(f.mutation,m,f.mutation.getFieldMask(),ye.now())):l.set(m.key,ht.empty())})),this.recalculateAndSaveOverlays(e,a).next((h=>(h.forEach(((m,f)=>l.set(m,f))),t.forEach(((m,f)=>c.set(m,new h_(f,l.get(m)??null)))),c)))}recalculateAndSaveOverlays(e,t){const n=Hn();let r=new be(((l,c)=>l-c)),a=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((l=>{for(const c of l)c.keys().forEach((h=>{const m=t.get(h);if(m===null)return;let f=n.get(h)||ht.empty();f=c.applyToLocalView(m,f),n.set(h,f);const y=(r.get(c.batchId)||re()).add(h);r=r.insert(c.batchId,y)}))})).next((()=>{const l=[],c=r.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),m=h.key,f=h.value,y=Yd();f.forEach((v=>{if(!a.has(v)){const N=sm(t.get(v),n.get(v));N!==null&&y.set(v,N),a=a.add(v)}})),l.push(this.documentOverlayCache.saveOverlays(e,m,y))}return C.waitFor(l)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,r){return(function(l){return $.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((a=>{const l=r-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-a.size):C.resolve(bs());let c=Jn,h=a;return l.next((m=>C.forEach(m,((f,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),a.get(f)?C.resolve():this.remoteDocumentCache.getEntry(e,f).next((v=>{h=h.insert(f,v)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,h,m,re()))).next((f=>({batchId:c,changes:Qd(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next((n=>{let r=On();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const a=t.collectionGroup;let l=On();return this.indexManager.getCollectionParents(e,a).next((c=>C.forEach(c,(h=>{const m=(function(y,v){return new hn(v,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,h.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,n,r).next((f=>{f.forEach(((y,v)=>{l=l.insert(y,v)}))}))})).next((()=>l))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,a,r)))).next((l=>{a.forEach(((h,m)=>{const f=m.getKey();l.get(f)===null&&(l=l.insert(f,He.newInvalidDocument(f)))}));let c=On();return l.forEach(((h,m)=>{const f=a.get(h);f!==void 0&&zn(f.mutation,m,ht.empty(),ye.now()),Bi(t,m)&&(c=c.insert(h,m))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return C.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:vt(r.createTime)}})(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(r){return{name:r.name,query:s_(r.bundledQuery),readTime:vt(r.readTime)}})(t)),C.resolve()}}/**
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
 */class f_{constructor(){this.overlays=new be($.comparator),this.qr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const n=bs();return C.forEach(t,(r=>this.getOverlay(e,r).next((a=>{a!==null&&n.set(r,a)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((r,a)=>{this.St(e,t,a)})),C.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.qr.get(n);return r!==void 0&&(r.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(n)),C.resolve()}getOverlaysForCollection(e,t,n){const r=bs(),a=t.length+1,l=new $(t.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const h=c.getNext().value,m=h.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&h.largestBatchId>n&&r.set(h.getKey(),h)}return C.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let a=new be(((m,f)=>m-f));const l=this.overlays.getIterator();for(;l.hasNext();){const m=l.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>n){let f=a.get(m.largestBatchId);f===null&&(f=bs(),a=a.insert(m.largestBatchId,f)),f.set(m.getKey(),m)}}const c=bs(),h=a.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((m,f)=>c.set(m,f))),!(c.size()>=r)););return C.resolve(c)}St(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const l=this.qr.get(r.largestBatchId).delete(n.key);this.qr.set(r.largestBatchId,l)}this.overlays=this.overlays.insert(n.key,new Rw(t,n));let a=this.qr.get(t);a===void 0&&(a=re(),this.qr.set(t,a)),this.qr.set(t,a.add(n.key))}}/**
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
 */class p_{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this.Qr=new Se(Re.$r),this.Ur=new Se(Re.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new Re(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Gr(new Re(e,t))}zr(e,t){e.forEach((n=>this.removeReference(n,t)))}jr(e){const t=new $(new pe([])),n=new Re(t,e),r=new Re(t,e+1),a=[];return this.Ur.forEachInRange([n,r],(l=>{this.Gr(l),a.push(l.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new $(new pe([])),n=new Re(t,e),r=new Re(t,e+1);let a=re();return this.Ur.forEachInRange([n,r],(l=>{a=a.add(l.key)})),a}containsKey(e){const t=new Re(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Re{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return $.comparator(e.key,t.key)||ne(e.Yr,t.Yr)}static Kr(e,t){return ne(e.Yr,t.Yr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Se(Re.$r)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Cw(a,t,n,r);this.mutationQueue.push(l);for(const c of r)this.Zr=this.Zr.add(new Re(c.key,a)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(l)}lookupMutationBatch(e,t){return C.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ei(n),a=r<0?0:r;return C.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Do:this.tr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Re(t,0),r=new Re(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([n,r],(l=>{const c=this.Xr(l.Yr);a.push(c)})),C.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Se(ne);return t.forEach((r=>{const a=new Re(r,0),l=new Re(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,l],(c=>{n=n.add(c.Yr)}))})),C.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let a=n;$.isDocumentKey(a)||(a=a.child(""));const l=new Re(new $(a),0);let c=new Se(ne);return this.Zr.forEachWhile((h=>{const m=h.key.path;return!!n.isPrefixOf(m)&&(m.length===r&&(c=c.add(h.Yr)),!0)}),l),C.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((n=>{const r=this.Xr(n);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){ce(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return C.forEach(t.mutations,(r=>{const a=new Re(r.key,t.batchId);return n=n.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=n}))}ir(e){}containsKey(e,t){const n=new Re(t,0),r=this.Zr.firstAfterOrEqual(n);return C.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.ri=e,this.docs=(function(){return new be($.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),a=r?r.size:0,l=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return C.resolve(n?n.document.mutableCopy():He.newInvalidDocument(t))}getEntries(e,t){let n=Mt();return t.forEach((r=>{const a=this.docs.get(r);n=n.insert(r,a?a.document.mutableCopy():He.newInvalidDocument(r))})),C.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let a=Mt();const l=t.path,c=new $(l.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:m,value:{document:f}}=h.getNext();if(!l.isPrefixOf(m.path))break;m.path.length>l.length+1||Hb(Wb(f),n)<=0||(r.has(f.key)||Bi(t,f))&&(a=a.insert(f.key,f.mutableCopy()))}return C.resolve(a)}getAllFromCollectionGroup(e,t,n,r){z(9500)}ii(e,t){return C.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new x_(this)}getSize(e){return C.resolve(this.size)}}class x_ extends u_{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(n)})),C.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.persistence=e,this.si=new Cs((t=>Lo(t)),Oo),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.oi=0,this._i=new Wo,this.targetCount=0,this.ai=tn.ur()}forEachTarget(e,t){return this.si.forEach(((n,r)=>t(r))),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),C.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new tn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Pr(t),C.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,n){let r=0;const a=[];return this.si.forEach(((l,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.si.delete(l),a.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),C.waitFor(a).next((()=>r))}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return C.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),C.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const r=this.persistence.referenceDelegate,a=[];return r&&t.forEach((l=>{a.push(r.markPotentiallyOrphaned(e,l))})),C.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return C.resolve(n)}containsKey(e,t){return C.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,t){this.ui={},this.overlays={},this.ci=new Li(0),this.li=!1,this.li=!0,this.hi=new p_,this.referenceDelegate=e(this),this.Pi=new b_(this),this.indexManager=new n_,this.remoteDocumentCache=(function(r){return new y_(r)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new t_(t),this.Ii=new m_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new f_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new g_(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){U("MemoryPersistence","Starting transaction:",e);const r=new w_(this.ci.next());return this.referenceDelegate.Ei(),n(r).next((a=>this.referenceDelegate.di(r).next((()=>a)))).toPromise().then((a=>(r.raiseOnCommittedEvent(),a)))}Ai(e,t){return C.or(Object.values(this.ui).map((n=>()=>n.containsKey(e,t))))}}class w_ extends Gb{constructor(e){super(),this.currentSequenceNumber=e}}class Ho{constructor(e){this.persistence=e,this.Ri=new Wo,this.Vi=null}static mi(e){return new Ho(e)}get fi(){if(this.Vi)return this.Vi;throw z(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),C.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((r=>this.fi.add(r.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((a=>this.fi.add(a.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.fi,(n=>{const r=$.fromPath(n);return this.gi(e,r).next((a=>{a||t.removeEntry(r,Y.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class pi{constructor(e,t){this.persistence=e,this.pi=new Cs((n=>Yb(n.path)),((n,r)=>n.isEqual(r))),this.garbageCollector=c_(this,t)}static mi(e,t){return new pi(e,t)}Ei(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((r=>n+r))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}pr(e,t){return C.forEach(this.pi,((n,r)=>this.br(e,n,r).next((a=>a?C.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),a=r.newChangeBuffer();return r.ii(e,(l=>this.br(e,l,t).next((c=>{c||(n++,a.removeEntry(l,Y.min()))})))).next((()=>a.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),C.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=qr(e.data.value)),t}br(e,t,n){return C.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.pi.get(t);return C.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=r}static As(e,t){let n=re(),r=re();for(const a of t.docChanges)switch(a.type){case 0:n=n.add(a.doc.key);break;case 1:r=r.add(a.doc.key)}return new zo(e,t.fromCache,n,r)}}/**
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
 */class __{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Jg()?8:Kb(Ge())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const a={result:null};return this.ys(e,t).next((l=>{a.result=l})).next((()=>{if(!a.result)return this.ws(e,t,r,n).next((l=>{a.result=l}))})).next((()=>{if(a.result)return;const l=new __;return this.Ss(e,t,l).next((c=>{if(a.result=c,this.Vs)return this.bs(e,t,l,c.size)}))})).next((()=>a.result))}bs(e,t,n,r){return n.documentReadCount<this.fs?(Os()<=se.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Fs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),C.resolve()):(Os()<=se.DEBUG&&U("QueryEngine","Query:",Fs(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.gs*r?(Os()<=se.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Fs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_t(t))):C.resolve())}ys(e,t){if(bu(t))return C.resolve(null);let n=_t(t);return this.indexManager.getIndexType(e,n).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=io(t,null,"F"),n=_t(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((a=>{const l=re(...a);return this.ps.getDocuments(e,l).next((c=>this.indexManager.getMinOffset(e,n).next((h=>{const m=this.Ds(t,c);return this.Cs(t,m,l,h.readTime)?this.ys(e,io(t,null,"F")):this.vs(e,m,t,h)}))))})))))}ws(e,t,n,r){return bu(t)||r.isEqual(Y.min())?C.resolve(null):this.ps.getDocuments(e,n).next((a=>{const l=this.Ds(t,a);return this.Cs(t,l,n,r)?C.resolve(null):(Os()<=se.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Fs(t)),this.vs(e,l,t,$b(r,Jn)).next((c=>c)))}))}Ds(e,t){let n=new Se(Gd(e));return t.forEach(((r,a)=>{Bi(e,a)&&(n=n.add(a))})),n}Cs(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(r)>0)}Ss(e,t,n){return Os()<=se.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Fs(t)),this.ps.getDocumentsMatchingQuery(e,t,ns.min(),n)}vs(e,t,n,r){return this.ps.getDocumentsMatchingQuery(e,n,r).next((a=>(t.forEach((l=>{a=a.insert(l.key,l)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="LocalStore",E_=3e8;class I_{constructor(e,t,n,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new be(ne),this.xs=new Cs((a=>Lo(a)),Oo),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new d_(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function N_(s,e,t,n){return new I_(s,e,t,n)}async function ym(s,e){const t=X(s);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next((a=>(r=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(n)))).next((a=>{const l=[],c=[];let h=re();for(const m of r){l.push(m.batchId);for(const f of m.mutations)h=h.add(f.key)}for(const m of a){c.push(m.batchId);for(const f of m.mutations)h=h.add(f.key)}return t.localDocuments.getDocuments(n,h).next((m=>({Ls:m,removedBatchIds:l,addedBatchIds:c})))}))}))}function T_(s,e){const t=X(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const r=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,h,m,f){const y=m.batch,v=y.keys();let N=C.resolve();return v.forEach((k=>{N=N.next((()=>f.getEntry(h,k))).next((P=>{const R=m.docVersions.get(k);ce(R!==null,48541),P.version.compareTo(R)<0&&(y.applyToRemoteDocument(P,m),P.isValidDocument()&&(P.setReadTime(m.commitVersion),f.addEntry(P)))}))})),N.next((()=>c.mutationQueue.removeMutationBatch(h,y)))})(t,n,e,a).next((()=>a.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(c){let h=re();for(let m=0;m<c.mutationResults.length;++m)c.mutationResults[m].transformResults.length>0&&(h=h.add(c.batch.mutations[m].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(n,r)))}))}function xm(s){const e=X(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function j_(s,e){const t=X(s),n=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const l=t.Ns.newChangeBuffer({trackRemovals:!0});r=t.Ms;const c=[];e.targetChanges.forEach(((f,y)=>{const v=r.get(y);if(!v)return;c.push(t.Pi.removeMatchingKeys(a,f.removedDocuments,y).next((()=>t.Pi.addMatchingKeys(a,f.addedDocuments,y))));let N=v.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(y)!==null?N=N.withResumeToken(Fe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(f.resumeToken,n)),r=r.insert(y,N),(function(P,R,O){return P.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=E_?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0})(v,N,f)&&c.push(t.Pi.updateTargetData(a,N))}));let h=Mt(),m=re();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(a,f))})),c.push(A_(a,l,e.documentUpdates).next((f=>{h=f.ks,m=f.qs}))),!n.isEqual(Y.min())){const f=t.Pi.getLastRemoteSnapshotVersion(a).next((y=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,n)));c.push(f)}return C.waitFor(c).next((()=>l.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,h,m))).next((()=>h))})).then((a=>(t.Ms=r,a)))}function A_(s,e,t){let n=re(),r=re();return t.forEach((a=>n=n.add(a))),e.getEntries(s,n).next((a=>{let l=Mt();return t.forEach(((c,h)=>{const m=a.get(c);h.isFoundDocument()!==m.isFoundDocument()&&(r=r.add(c)),h.isNoDocument()&&h.version.isEqual(Y.min())?(e.removeEntry(c,h.readTime),l=l.insert(c,h)):!m.isValidDocument()||h.version.compareTo(m.version)>0||h.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(h),l=l.insert(c,h)):U(Go,"Ignoring outdated watch update for ",c,". Current version:",m.version," Watch version:",h.version)})),{ks:l,qs:r}}))}function S_(s,e){const t=X(s);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Do),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function k_(s,e){const t=X(s);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let r;return t.Pi.getTargetData(n,e).next((a=>a?(r=a,C.resolve(r)):t.Pi.allocateTargetId(n).next((l=>(r=new Yt(e,l,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,r).next((()=>r)))))))})).then((n=>{const r=t.Ms.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n}))}async function uo(s,e,t){const n=X(s),r=n.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",a,(l=>n.persistence.referenceDelegate.removeTarget(l,r)))}catch(l){if(!un(l))throw l;U(Go,`Failed to update sequence numbers for target ${e}: ${l}`)}n.Ms=n.Ms.remove(e),n.xs.delete(r.target)}function Ru(s,e,t){const n=X(s);let r=Y.min(),a=re();return n.persistence.runTransaction("Execute query","readwrite",(l=>(function(h,m,f){const y=X(h),v=y.xs.get(f);return v!==void 0?C.resolve(y.Ms.get(v)):y.Pi.getTargetData(m,f)})(n,l,_t(e)).next((c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(l,c.targetId).next((h=>{a=h}))})).next((()=>n.Fs.getDocumentsMatchingQuery(l,e,t?r:Y.min(),t?a:re()))).next((c=>(C_(n,pw(e),c),{documents:c,Qs:a})))))}function C_(s,e,t){let n=s.Os.get(e)||Y.min();t.forEach(((r,a)=>{a.readTime.compareTo(n)>0&&(n=a.readTime)})),s.Os.set(e,n)}class Pu{constructor(){this.activeTargetIds=_w()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class R_{constructor(){this.Mo=new Pu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Pu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="ConnectivityMonitor";class Vu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){U(Du,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){U(Du,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pr=null;function ho(){return Pr===null?Pr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Pr++,"0x"+Pr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="RestConnection",D_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class V_{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Wo=this.databaseId.database===ui?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Go(e,t,n,r,a){const l=ho(),c=this.zo(e,t.toUriEncodedString());U(Ca,`Sending RPC '${e}' ${l}:`,c,n);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,r,a);const{host:m}=new URL(c),f=nn(m);return this.Jo(e,c,h,n,f).then((y=>(U(Ca,`Received RPC '${e}' ${l}: `,y),y)),(y=>{throw Js(Ca,`RPC '${e}' ${l} failed with error: `,y,"url: ",c,"request:",n),y}))}Ho(e,t,n,r,a,l){return this.Go(e,t,n,r,a)}jo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ln})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,a)=>e[a]=r)),n&&n.headers.forEach(((r,a)=>e[a]=r))}zo(e,t){const n=D_[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="WebChannelConnection";class L_ extends V_{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,r,a){const l=ho();return new Promise(((c,h)=>{const m=new wd;m.setWithCredentials(!0),m.listenOnce(_d.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case Br.NO_ERROR:const y=m.getResponseJson();U($e,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(y)),c(y);break;case Br.TIMEOUT:U($e,`RPC '${e}' ${l} timed out`),h(new F(S.DEADLINE_EXCEEDED,"Request time out"));break;case Br.HTTP_ERROR:const v=m.getStatus();if(U($e,`RPC '${e}' ${l} failed with status:`,v,"response text:",m.getResponseText()),v>0){let N=m.getResponseJson();Array.isArray(N)&&(N=N[0]);const k=N==null?void 0:N.error;if(k&&k.status&&k.message){const P=(function(O){const D=O.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(D)>=0?D:S.UNKNOWN})(k.status);h(new F(P,k.message))}else h(new F(S.UNKNOWN,"Server responded with status "+m.getStatus()))}else h(new F(S.UNAVAILABLE,"Connection failed."));break;default:z(9055,{l_:e,streamId:l,h_:m.getLastErrorCode(),P_:m.getLastError()})}}finally{U($e,`RPC '${e}' ${l} completed.`)}}));const f=JSON.stringify(r);U($e,`RPC '${e}' ${l} sending request:`,r),m.send(t,"POST",f,n,15)}))}T_(e,t,n){const r=ho(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=Id(),c=Ed(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(h.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,n),h.encodeInitMessageHeaders=!0;const f=a.join("");U($e,`Creating RPC '${e}' stream ${r}: ${f}`,h);const y=l.createWebChannel(f,h);this.I_(y);let v=!1,N=!1;const k=new M_({Yo:R=>{N?U($e,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(v||(U($e,`Opening RPC '${e}' stream ${r} transport.`),y.open(),v=!0),U($e,`RPC '${e}' stream ${r} sending:`,R),y.send(R))},Zo:()=>y.close()}),P=(R,O,D)=>{R.listen(O,(B=>{try{D(B)}catch(J){setTimeout((()=>{throw J}),0)}}))};return P(y,Ln.EventType.OPEN,(()=>{N||(U($e,`RPC '${e}' stream ${r} transport opened.`),k.o_())})),P(y,Ln.EventType.CLOSE,(()=>{N||(N=!0,U($e,`RPC '${e}' stream ${r} transport closed`),k.a_(),this.E_(y))})),P(y,Ln.EventType.ERROR,(R=>{N||(N=!0,Js($e,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),k.a_(new F(S.UNAVAILABLE,"The operation could not be completed")))})),P(y,Ln.EventType.MESSAGE,(R=>{var O;if(!N){const D=R.data[0];ce(!!D,16349);const B=D,J=(B==null?void 0:B.error)||((O=B[0])==null?void 0:O.error);if(J){U($e,`RPC '${e}' stream ${r} received error:`,J);const oe=J.status;let te=(function(g){const w=Ie[g];if(w!==void 0)return im(w)})(oe),E=J.message;te===void 0&&(te=S.INTERNAL,E="Unknown error status: "+oe+" with message "+J.message),N=!0,k.a_(new F(te,E)),y.close()}else U($e,`RPC '${e}' stream ${r} received:`,D),k.u_(D)}})),P(c,vd.STAT_EVENT,(R=>{R.stat===Xa.PROXY?U($e,`RPC '${e}' stream ${r} detected buffering proxy`):R.stat===Xa.NOPROXY&&U($e,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{k.__()}),0),k}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Ra(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(s){return new Bw(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,t,n=1e3,r=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=r,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="PersistentStream";class wm{constructor(e,t,n,r,a,l,c,h){this.Mi=e,this.S_=n,this.b_=r,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new bm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,r])=>{this.D_===t&&this.G_(n,r)}),(n=>{e((()=>{const r=new F(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(r)}))}))}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{n((()=>this.z_(r)))})),this.stream.onMessage((r=>{n((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return U(Mu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(U(Mu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class O_ extends wm{constructor(e,t,n,r,a,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,l),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Ww(this.serializer,e),n=(function(a){if(!("targetChange"in a))return Y.min();const l=a.targetChange;return l.targetIds&&l.targetIds.length?Y.min():l.readTime?vt(l.readTime):Y.min()})(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=co(this.serializer),t.addTarget=(function(a,l){let c;const h=l.target;if(c=no(h)?{documents:Gw(a,h)}:{query:Kw(a,h).ft},c.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){c.resumeToken=lm(a,l.resumeToken);const m=ao(a,l.expectedCount);m!==null&&(c.expectedCount=m)}else if(l.snapshotVersion.compareTo(Y.min())>0){c.readTime=fi(a,l.snapshotVersion.toTimestamp());const m=ao(a,l.expectedCount);m!==null&&(c.expectedCount=m)}return c})(this.serializer,e);const n=Yw(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=co(this.serializer),t.removeTarget=e,this.q_(t)}}class F_ extends wm{constructor(e,t,n,r,a,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,l),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=zw(e.writeResults,e.commitTime),n=vt(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=co(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>Hw(this.serializer,n)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{}class B_ extends U_{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new F(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Go(e,oo(t,n),r,a,l))).catch((a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(S.UNKNOWN,a.toString())}))}Ho(e,t,n,r,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Ho(e,oo(t,n),r,l,c,a))).catch((l=>{throw l.name==="FirebaseError"?(l.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new F(S.UNKNOWN,l.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class q_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const Ns="RemoteStore";class $_{constructor(e,t,n,r,a){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((l=>{n.enqueueAndForget((async()=>{Ps(this)&&(U(Ns,"Restarting streams for network reachability change."),await(async function(h){const m=X(h);m.Ea.add(4),await dr(m),m.Ra.set("Unknown"),m.Ea.delete(4),await Gi(m)})(this))}))})),this.Ra=new q_(n,r)}}async function Gi(s){if(Ps(s))for(const e of s.da)await e(!0)}async function dr(s){for(const e of s.da)await e(!1)}function _m(s,e){const t=X(s);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Jo(t)?Yo(t):dn(t).O_()&&Qo(t,e))}function Ko(s,e){const t=X(s),n=dn(t);t.Ia.delete(e),n.O_()&&vm(t,e),t.Ia.size===0&&(n.O_()?n.L_():Ps(t)&&t.Ra.set("Unknown"))}function Qo(s,e){if(s.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}dn(s).Y_(e)}function vm(s,e){s.Va.Ue(e),dn(s).Z_(e)}function Yo(s){s.Va=new Lw({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),At:e=>s.Ia.get(e)||null,ht:()=>s.datastore.serializer.databaseId}),dn(s).start(),s.Ra.ua()}function Jo(s){return Ps(s)&&!dn(s).x_()&&s.Ia.size>0}function Ps(s){return X(s).Ea.size===0}function Em(s){s.Va=void 0}async function W_(s){s.Ra.set("Online")}async function H_(s){s.Ia.forEach(((e,t)=>{Qo(s,e)}))}async function z_(s,e){Em(s),Jo(s)?(s.Ra.ha(e),Yo(s)):s.Ra.set("Unknown")}async function G_(s,e,t){if(s.Ra.set("Online"),e instanceof om&&e.state===2&&e.cause)try{await(async function(r,a){const l=a.cause;for(const c of a.targetIds)r.Ia.has(c)&&(await r.remoteSyncer.rejectListen(c,l),r.Ia.delete(c),r.Va.removeTarget(c))})(s,e)}catch(n){U(Ns,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await gi(s,n)}else if(e instanceof Hr?s.Va.Ze(e):e instanceof am?s.Va.st(e):s.Va.tt(e),!t.isEqual(Y.min()))try{const n=await xm(s.localStore);t.compareTo(n)>=0&&await(function(a,l){const c=a.Va.Tt(l);return c.targetChanges.forEach(((h,m)=>{if(h.resumeToken.approximateByteSize()>0){const f=a.Ia.get(m);f&&a.Ia.set(m,f.withResumeToken(h.resumeToken,l))}})),c.targetMismatches.forEach(((h,m)=>{const f=a.Ia.get(h);if(!f)return;a.Ia.set(h,f.withResumeToken(Fe.EMPTY_BYTE_STRING,f.snapshotVersion)),vm(a,h);const y=new Yt(f.target,h,m,f.sequenceNumber);Qo(a,y)})),a.remoteSyncer.applyRemoteEvent(c)})(s,t)}catch(n){U(Ns,"Failed to raise snapshot:",n),await gi(s,n)}}async function gi(s,e,t){if(!un(e))throw e;s.Ea.add(1),await dr(s),s.Ra.set("Offline"),t||(t=()=>xm(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{U(Ns,"Retrying IndexedDB access"),await t(),s.Ea.delete(1),await Gi(s)}))}function Im(s,e){return e().catch((t=>gi(s,t,e)))}async function Ki(s){const e=X(s),t=os(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Do;for(;K_(e);)try{const r=await S_(e.localStore,n);if(r===null){e.Ta.length===0&&t.L_();break}n=r.batchId,Q_(e,r)}catch(r){await gi(e,r)}Nm(e)&&Tm(e)}function K_(s){return Ps(s)&&s.Ta.length<10}function Q_(s,e){s.Ta.push(e);const t=os(s);t.O_()&&t.X_&&t.ea(e.mutations)}function Nm(s){return Ps(s)&&!os(s).x_()&&s.Ta.length>0}function Tm(s){os(s).start()}async function Y_(s){os(s).ra()}async function J_(s){const e=os(s);for(const t of s.Ta)e.ea(t.mutations)}async function X_(s,e,t){const n=s.Ta.shift(),r=Bo.from(n,e,t);await Im(s,(()=>s.remoteSyncer.applySuccessfulWrite(r))),await Ki(s)}async function Z_(s,e){e&&os(s).X_&&await(async function(n,r){if((function(l){return Dw(l)&&l!==S.ABORTED})(r.code)){const a=n.Ta.shift();os(n).B_(),await Im(n,(()=>n.remoteSyncer.rejectFailedWrite(a.batchId,r))),await Ki(n)}})(s,e),Nm(s)&&Tm(s)}async function Lu(s,e){const t=X(s);t.asyncQueue.verifyOperationInProgress(),U(Ns,"RemoteStore received new credentials");const n=Ps(t);t.Ea.add(3),await dr(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Gi(t)}async function ev(s,e){const t=X(s);e?(t.Ea.delete(2),await Gi(t)):e||(t.Ea.add(2),await dr(t),t.Ra.set("Unknown"))}function dn(s){return s.ma||(s.ma=(function(t,n,r){const a=X(t);return a.sa(),new O_(n,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,r)})(s.datastore,s.asyncQueue,{Xo:W_.bind(null,s),t_:H_.bind(null,s),r_:z_.bind(null,s),H_:G_.bind(null,s)}),s.da.push((async e=>{e?(s.ma.B_(),Jo(s)?Yo(s):s.Ra.set("Unknown")):(await s.ma.stop(),Em(s))}))),s.ma}function os(s){return s.fa||(s.fa=(function(t,n,r){const a=X(t);return a.sa(),new F_(n,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,r)})(s.datastore,s.asyncQueue,{Xo:()=>Promise.resolve(),t_:Y_.bind(null,s),r_:Z_.bind(null,s),ta:J_.bind(null,s),na:X_.bind(null,s)}),s.da.push((async e=>{e?(s.fa.B_(),await Ki(s)):(await s.fa.stop(),s.Ta.length>0&&(U(Ns,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))}))),s.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,n,r,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=a,this.deferred=new Ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,a){const l=Date.now()+n,c=new Xo(e,t,l,r,a);return c.start(n),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zo(s,e){if(Vt("AsyncQueue",`${e}: ${s}`),un(s))return new F(S.UNAVAILABLE,`${e}: ${s}`);throw s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{static emptySet(e){return new zs(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||$.comparator(t.key,n.key):(t,n)=>$.comparator(t.key,n.key),this.keyedMap=On(),this.sortedSet=new be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,a=n.getNext().key;if(!r.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new zs;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(){this.ga=new be($.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):z(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class sn{constructor(e,t,n,r,a,l,c,h,m){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=a,this.fromCache=l,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=m}static fromInitialDocuments(e,t,n,r,a){const l=[];return t.forEach((c=>{l.push({type:0,doc:c})})),new sn(e,t,zs.emptySet(t),l,n,r,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ui(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class sv{constructor(){this.queries=Fu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const r=X(t),a=r.queries;r.queries=Fu(),a.forEach(((l,c)=>{for(const h of c.Sa)h.onError(n)}))})(this,new F(S.ABORTED,"Firestore shutting down"))}}function Fu(){return new Cs((s=>zd(s)),Ui)}async function jm(s,e){const t=X(s);let n=3;const r=e.query;let a=t.queries.get(r);a?!a.ba()&&e.Da()&&(n=2):(a=new tv,n=e.Da()?0:1);try{switch(n){case 0:a.wa=await t.onListen(r,!0);break;case 1:a.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(l){const c=Zo(l,`Initialization of query '${Fs(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&el(t)}async function Am(s,e){const t=X(s),n=e.query;let r=3;const a=t.queries.get(n);if(a){const l=a.Sa.indexOf(e);l>=0&&(a.Sa.splice(l,1),a.Sa.length===0?r=e.Da()?0:1:!a.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function nv(s,e){const t=X(s);let n=!1;for(const r of e){const a=r.query,l=t.queries.get(a);if(l){for(const c of l.Sa)c.Fa(r)&&(n=!0);l.wa=r}}n&&el(t)}function rv(s,e,t){const n=X(s),r=n.queries.get(e);if(r)for(const a of r.Sa)a.onError(t);n.queries.delete(e)}function el(s){s.Ca.forEach((e=>{e.next()}))}var mo,Uu;(Uu=mo||(mo={})).Ma="default",Uu.Cache="cache";class Sm{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new sn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=sn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==mo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.key=e}}class Cm{constructor(e){this.key=e}}class iv{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=re(),this.mutatedKeys=re(),this.eu=Gd(e),this.tu=new zs(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new Ou,r=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,l=r,c=!1;const h=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,m=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((f,y)=>{const v=r.get(f),N=Bi(this.query,y)?y:null,k=!!v&&this.mutatedKeys.has(v.key),P=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let R=!1;v&&N?v.data.isEqual(N.data)?k!==P&&(n.track({type:3,doc:N}),R=!0):this.su(v,N)||(n.track({type:2,doc:N}),R=!0,(h&&this.eu(N,h)>0||m&&this.eu(N,m)<0)&&(c=!0)):!v&&N?(n.track({type:0,doc:N}),R=!0):v&&!N&&(n.track({type:1,doc:v}),R=!0,(h||m)&&(c=!0)),R&&(N?(l=l.add(N),a=P?a.add(f):a.delete(f)):(l=l.delete(f),a=a.delete(f)))})),this.query.limit!==null)for(;l.size>this.query.limit;){const f=this.query.limitType==="F"?l.last():l.first();l=l.delete(f.key),a=a.delete(f.key),n.track({type:1,doc:f})}return{tu:l,iu:n,Cs:c,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const l=e.iu.ya();l.sort(((f,y)=>(function(N,k){const P=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{Rt:R})}};return P(N)-P(k)})(f.type,y.type)||this.eu(f.doc,y.doc))),this.ou(n),r=r??!1;const c=t&&!r?this._u():[],h=this.Xa.size===0&&this.current&&!r?1:0,m=h!==this.Za;return this.Za=h,l.length!==0||m?{snapshot:new sn(this.query,e.tu,a,l,e.mutatedKeys,h===0,m,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ou,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=re(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const t=[];return e.forEach((n=>{this.Xa.has(n)||t.push(new Cm(n))})),this.Xa.forEach((n=>{e.has(n)||t.push(new km(n))})),t}cu(e){this.Ya=e.Qs,this.Xa=re();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return sn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const tl="SyncEngine";class av{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ov{constructor(e){this.key=e,this.hu=!1}}class lv{constructor(e,t,n,r,a,l){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new Cs((c=>zd(c)),Ui),this.Iu=new Map,this.Eu=new Set,this.du=new be($.comparator),this.Au=new Map,this.Ru=new Wo,this.Vu={},this.mu=new Map,this.fu=tn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function cv(s,e,t=!0){const n=Lm(s);let r;const a=n.Tu.get(e);return a?(n.sharedClientState.addLocalQueryTarget(a.targetId),r=a.view.lu()):r=await Rm(n,e,t,!0),r}async function uv(s,e){const t=Lm(s);await Rm(t,e,!0,!1)}async function Rm(s,e,t,n){const r=await k_(s.localStore,_t(e)),a=r.targetId,l=s.sharedClientState.addLocalQueryTarget(a,t);let c;return n&&(c=await hv(s,e,a,l==="current",r.resumeToken)),s.isPrimaryClient&&t&&_m(s.remoteStore,r),c}async function hv(s,e,t,n,r){s.pu=(y,v,N)=>(async function(P,R,O,D){let B=R.view.ru(O);B.Cs&&(B=await Ru(P.localStore,R.query,!1).then((({documents:E})=>R.view.ru(E,B))));const J=D&&D.targetChanges.get(R.targetId),oe=D&&D.targetMismatches.get(R.targetId)!=null,te=R.view.applyChanges(B,P.isPrimaryClient,J,oe);return qu(P,R.targetId,te.au),te.snapshot})(s,y,v,N);const a=await Ru(s.localStore,e,!0),l=new iv(e,a.Qs),c=l.ru(a.documents),h=hr.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",r),m=l.applyChanges(c,s.isPrimaryClient,h);qu(s,t,m.au);const f=new av(e,t,l);return s.Tu.set(e,f),s.Iu.has(t)?s.Iu.get(t).push(e):s.Iu.set(t,[e]),m.snapshot}async function dv(s,e,t){const n=X(s),r=n.Tu.get(e),a=n.Iu.get(r.targetId);if(a.length>1)return n.Iu.set(r.targetId,a.filter((l=>!Ui(l,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await uo(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),t&&Ko(n.remoteStore,r.targetId),fo(n,r.targetId)})).catch(cn)):(fo(n,r.targetId),await uo(n.localStore,r.targetId,!0))}async function mv(s,e){const t=X(s),n=t.Tu.get(e),r=t.Iu.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Ko(t.remoteStore,n.targetId))}async function fv(s,e,t){const n=_v(s);try{const r=await(function(l,c){const h=X(l),m=ye.now(),f=c.reduce(((N,k)=>N.add(k.key)),re());let y,v;return h.persistence.runTransaction("Locally write mutations","readwrite",(N=>{let k=Mt(),P=re();return h.Ns.getEntries(N,f).next((R=>{k=R,k.forEach(((O,D)=>{D.isValidDocument()||(P=P.add(O))}))})).next((()=>h.localDocuments.getOverlayedDocuments(N,k))).next((R=>{y=R;const O=[];for(const D of c){const B=Sw(D,y.get(D.key).overlayedDocument);B!=null&&O.push(new Rs(D.key,B,Od(B.value.mapValue),Rt.exists(!0)))}return h.mutationQueue.addMutationBatch(N,m,O,c)})).next((R=>{v=R;const O=R.applyToLocalDocumentSet(y,P);return h.documentOverlayCache.saveOverlays(N,R.batchId,O)}))})).then((()=>({batchId:v.batchId,changes:Qd(y)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),(function(l,c,h){let m=l.Vu[l.currentUser.toKey()];m||(m=new be(ne)),m=m.insert(c,h),l.Vu[l.currentUser.toKey()]=m})(n,r.batchId,t),await mr(n,r.changes),await Ki(n.remoteStore)}catch(r){const a=Zo(r,"Failed to persist write");t.reject(a)}}async function Pm(s,e){const t=X(s);try{const n=await j_(t.localStore,e);e.targetChanges.forEach(((r,a)=>{const l=t.Au.get(a);l&&(ce(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?l.hu=!0:r.modifiedDocuments.size>0?ce(l.hu,14607):r.removedDocuments.size>0&&(ce(l.hu,42227),l.hu=!1))})),await mr(t,n,e)}catch(n){await cn(n)}}function Bu(s,e,t){const n=X(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.Tu.forEach(((a,l)=>{const c=l.view.va(e);c.snapshot&&r.push(c.snapshot)})),(function(l,c){const h=X(l);h.onlineState=c;let m=!1;h.queries.forEach(((f,y)=>{for(const v of y.Sa)v.va(c)&&(m=!0)})),m&&el(h)})(n.eventManager,e),r.length&&n.Pu.H_(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function pv(s,e,t){const n=X(s);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.Au.get(e),a=r&&r.key;if(a){let l=new be($.comparator);l=l.insert(a,He.newNoDocument(a,Y.min()));const c=re().add(a),h=new Hi(Y.min(),new Map,new be(ne),l,c);await Pm(n,h),n.du=n.du.remove(a),n.Au.delete(e),sl(n)}else await uo(n.localStore,e,!1).then((()=>fo(n,e,t))).catch(cn)}async function gv(s,e){const t=X(s),n=e.batch.batchId;try{const r=await T_(t.localStore,e);Vm(t,n,null),Dm(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await mr(t,r)}catch(r){await cn(r)}}async function yv(s,e,t){const n=X(s);try{const r=await(function(l,c){const h=X(l);return h.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let f;return h.mutationQueue.lookupMutationBatch(m,c).next((y=>(ce(y!==null,37113),f=y.keys(),h.mutationQueue.removeMutationBatch(m,y)))).next((()=>h.mutationQueue.performConsistencyCheck(m))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(m,f,c))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,f))).next((()=>h.localDocuments.getDocuments(m,f)))}))})(n.localStore,e);Vm(n,e,t),Dm(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await mr(n,r)}catch(r){await cn(r)}}function Dm(s,e){(s.mu.get(e)||[]).forEach((t=>{t.resolve()})),s.mu.delete(e)}function Vm(s,e,t){const n=X(s);let r=n.Vu[n.currentUser.toKey()];if(r){const a=r.get(e);a&&(t?a.reject(t):a.resolve(),r=r.remove(e)),n.Vu[n.currentUser.toKey()]=r}}function fo(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Iu.get(e))s.Tu.delete(n),t&&s.Pu.yu(n,t);s.Iu.delete(e),s.isPrimaryClient&&s.Ru.jr(e).forEach((n=>{s.Ru.containsKey(n)||Mm(s,n)}))}function Mm(s,e){s.Eu.delete(e.path.canonicalString());const t=s.du.get(e);t!==null&&(Ko(s.remoteStore,t),s.du=s.du.remove(e),s.Au.delete(t),sl(s))}function qu(s,e,t){for(const n of t)n instanceof km?(s.Ru.addReference(n.key,e),xv(s,n)):n instanceof Cm?(U(tl,"Document no longer in limbo: "+n.key),s.Ru.removeReference(n.key,e),s.Ru.containsKey(n.key)||Mm(s,n.key)):z(19791,{wu:n})}function xv(s,e){const t=e.key,n=t.path.canonicalString();s.du.get(t)||s.Eu.has(n)||(U(tl,"New document in limbo: "+t),s.Eu.add(n),sl(s))}function sl(s){for(;s.Eu.size>0&&s.du.size<s.maxConcurrentLimboResolutions;){const e=s.Eu.values().next().value;s.Eu.delete(e);const t=new $(pe.fromString(e)),n=s.fu.next();s.Au.set(n,new ov(t)),s.du=s.du.insert(t,n),_m(s.remoteStore,new Yt(_t(Fo(t.path)),n,"TargetPurposeLimboResolution",Li.ce))}}async function mr(s,e,t){const n=X(s),r=[],a=[],l=[];n.Tu.isEmpty()||(n.Tu.forEach(((c,h)=>{l.push(n.pu(h,e,t).then((m=>{var f;if((m||t)&&n.isPrimaryClient){const y=m?!m.fromCache:(f=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:f.current;n.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(m){r.push(m);const y=zo.As(h.targetId,m);a.push(y)}})))})),await Promise.all(l),n.Pu.H_(r),await(async function(h,m){const f=X(h);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>C.forEach(m,(v=>C.forEach(v.Es,(N=>f.persistence.referenceDelegate.addReference(y,v.targetId,N))).next((()=>C.forEach(v.ds,(N=>f.persistence.referenceDelegate.removeReference(y,v.targetId,N)))))))))}catch(y){if(!un(y))throw y;U(Go,"Failed to update sequence numbers: "+y)}for(const y of m){const v=y.targetId;if(!y.fromCache){const N=f.Ms.get(v),k=N.snapshotVersion,P=N.withLastLimboFreeSnapshotVersion(k);f.Ms=f.Ms.insert(v,P)}}})(n.localStore,a))}async function bv(s,e){const t=X(s);if(!t.currentUser.isEqual(e)){U(tl,"User change. New user:",e.toKey());const n=await ym(t.localStore,e);t.currentUser=e,(function(a,l){a.mu.forEach((c=>{c.forEach((h=>{h.reject(new F(S.CANCELLED,l))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await mr(t,n.Ls)}}function wv(s,e){const t=X(s),n=t.Au.get(e);if(n&&n.hu)return re().add(n.key);{let r=re();const a=t.Iu.get(e);if(!a)return r;for(const l of a){const c=t.Tu.get(l);r=r.unionWith(c.view.nu)}return r}}function Lm(s){const e=X(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pv.bind(null,e),e.Pu.H_=nv.bind(null,e.eventManager),e.Pu.yu=rv.bind(null,e.eventManager),e}function _v(s){const e=X(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yv.bind(null,e),e}class yi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return N_(this.persistence,new v_,e.initialUser,this.serializer)}Cu(e){return new gm(Ho.mi,this.serializer)}Du(e){return new R_}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yi.provider={build:()=>new yi};class vv extends yi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ce(this.persistence.referenceDelegate instanceof pi,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new o_(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Xe.withCacheSize(this.cacheSizeBytes):Xe.DEFAULT;return new gm((n=>pi.mi(n,t)),this.serializer)}}class po{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Bu(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=bv.bind(null,this.syncEngine),await ev(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new sv})()}createDatastore(e){const t=zi(e.databaseInfo.databaseId),n=(function(a){return new L_(a)})(e.databaseInfo);return(function(a,l,c,h){return new B_(a,l,c,h)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,r,a,l,c){return new $_(n,r,a,l,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Bu(this.syncEngine,t,0)),(function(){return Vu.v()?new Vu:new P_})())}createSyncEngine(e,t){return(function(r,a,l,c,h,m,f){const y=new lv(r,a,l,c,h,m);return f&&(y.gu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const a=X(r);U(Ns,"RemoteStore shutting down."),a.Ea.add(5),await dr(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}po.provider={build:()=>new po};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Om{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="FirestoreClient";class Ev{constructor(e,t,n,r,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=We.UNAUTHENTICATED,this.clientId=Po.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(n,(async l=>{U(ls,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l})),this.appCheckCredentials.start(n,(l=>(U(ls,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Zo(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Pa(s,e){s.asyncQueue.verifyOperationInProgress(),U(ls,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener((async r=>{n.isEqual(r)||(await ym(e.localStore,r),n=r)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function $u(s,e){s.asyncQueue.verifyOperationInProgress();const t=await Iv(s);U(ls,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener((n=>Lu(e.remoteStore,n))),s.setAppCheckTokenChangeListener(((n,r)=>Lu(e.remoteStore,r))),s._onlineComponents=e}async function Iv(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){U(ls,"Using user provided OfflineComponentProvider");try{await Pa(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===S.FAILED_PRECONDITION||r.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Js("Error using user provided cache. Falling back to memory cache: "+t),await Pa(s,new yi)}}else U(ls,"Using default OfflineComponentProvider"),await Pa(s,new vv(void 0));return s._offlineComponents}async function Fm(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(U(ls,"Using user provided OnlineComponentProvider"),await $u(s,s._uninitializedComponentsProvider._online)):(U(ls,"Using default OnlineComponentProvider"),await $u(s,new po))),s._onlineComponents}function Nv(s){return Fm(s).then((e=>e.syncEngine))}async function Um(s){const e=await Fm(s),t=e.eventManager;return t.onListen=cv.bind(null,e.syncEngine),t.onUnlisten=dv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=uv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=mv.bind(null,e.syncEngine),t}function Tv(s,e,t={}){const n=new Ct;return s.asyncQueue.enqueueAndForget((async()=>(function(a,l,c,h,m){const f=new Om({next:v=>{f.Nu(),l.enqueueAndForget((()=>Am(a,y)));const N=v.docs.has(c);!N&&v.fromCache?m.reject(new F(S.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&v.fromCache&&h&&h.source==="server"?m.reject(new F(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(v)},error:v=>m.reject(v)}),y=new Sm(Fo(c.path),f,{includeMetadataChanges:!0,qa:!0});return jm(a,y)})(await Um(s),s.asyncQueue,e,t,n))),n.promise}function jv(s,e,t={}){const n=new Ct;return s.asyncQueue.enqueueAndForget((async()=>(function(a,l,c,h,m){const f=new Om({next:v=>{f.Nu(),l.enqueueAndForget((()=>Am(a,y))),v.fromCache&&h.source==="server"?m.reject(new F(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(v)},error:v=>m.reject(v)}),y=new Sm(c,f,{includeMetadataChanges:!0,qa:!0});return jm(a,y)})(await Um(s),s.asyncQueue,e,t,n))),n.promise}/**
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
 */function Bm(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="firestore.googleapis.com",Hu=!0;class zu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qm,this.ssl=Hu}else this.host=e.host,this.ssl=e.ssl??Hu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<i_)throw new F(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bm(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,r){return n.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qi{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Rb;switch(n.type){case"firstParty":return new Mb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Wu.get(t);n&&(U("ComponentProvider","Removing Datastore"),Wu.delete(t),n.terminate())})(this),Promise.resolve()}}function Av(s,e,t,n={}){var m;s=Is(s,Qi);const r=nn(e),a=s._getSettings(),l={...a,emulatorOptions:s._getEmulatorOptions()},c=`${e}:${t}`;r&&(Sh(`https://${c}`),kh("Firestore",!0)),a.host!==qm&&a.host!==c&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...a,host:c,ssl:r,emulatorOptions:n};if(!ss(h,l)&&(s._setSettings(h),n.mockUserToken)){let f,y;if(typeof n.mockUserToken=="string")f=n.mockUserToken,y=We.MOCK_USER;else{f=$g(n.mockUserToken,(m=s._app)==null?void 0:m.options.projectId);const v=n.mockUserToken.sub||n.mockUserToken.user_id;if(!v)throw new F(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new We(v)}s._authCredentials=new Pb(new Td(f,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ds(this.firestore,e,this._query)}}class je{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}toJSON(){return{type:je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(ur(t,je._jsonSchema))return new je(e,n||null,new $(pe.fromString(t.referencePath)))}}je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:Te("string",je._jsonSchemaVersion),referencePath:Te("string")};class ts extends Ds{constructor(e,t,n){super(e,t,Fo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new $(e))}withConverter(e){return new ts(this.firestore,e,this._path)}}function ir(s,e,...t){if(s=Ee(s),jd("collection","path",e),s instanceof Qi){const n=pe.fromString(e,...t);return iu(n),new ts(s,null,n)}{if(!(s instanceof je||s instanceof ts))throw new F(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(pe.fromString(e,...t));return iu(n),new ts(s.firestore,null,n)}}function Pe(s,e,...t){if(s=Ee(s),arguments.length===1&&(e=Po.newId()),jd("doc","path",e),s instanceof Qi){const n=pe.fromString(e,...t);return ru(n),new je(s,null,new $(n))}{if(!(s instanceof je||s instanceof ts))throw new F(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(pe.fromString(e,...t));return ru(n),new je(s.firestore,s instanceof ts?s.converter:null,new $(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="AsyncQueue";class Ku{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bm(this,"async_queue_retry"),this._c=()=>{const n=Ra();n&&U(Gu,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Ra();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ra();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ct;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!un(e))throw e;U(Gu,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,Vt("INTERNAL UNHANDLED ERROR: ",Qu(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Xo.createAndSchedule(this,e,t,n,(a=>this.hc(a)));return this.tc.push(r),r}uc(){this.nc&&z(47125,{Pc:Qu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Qu(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class Yi extends Qi{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Ku,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ku(e),this._firestoreClient=void 0,await e}}}function Sv(s,e){const t=typeof s=="object"?s:Eo(),n=typeof s=="string"?s:ui,r=Ss(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const a=Bg("firestore");a&&Av(r,...a)}return r}function nl(s){if(s._terminated)throw new F(S.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||kv(s),s._firestoreClient}function kv(s){var n,r,a;const e=s._freezeSettings(),t=(function(c,h,m,f){return new Zb(c,h,m,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Bm(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(s._databaseId,((n=s._app)==null?void 0:n.options.appId)||"",s._persistenceKey,e);s._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new Ev(s._authCredentials,s._appCheckCredentials,s._queue,t,s._componentsProvider&&(function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}})(s._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this._byteString=e}static fromBase64String(e){try{return new it(Fe.fromBase64String(e))}catch(t){throw new F(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new it(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:it._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ur(e,it._jsonSchema))return it.fromBase64String(e.bytes)}}it._jsonSchemaVersion="firestore/bytes/1.0",it._jsonSchema={type:Te("string",it._jsonSchemaVersion),bytes:Te("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Et._jsonSchemaVersion}}static fromJSON(e){if(ur(e,Et._jsonSchema))return new Et(e.latitude,e.longitude)}}Et._jsonSchemaVersion="firestore/geoPoint/1.0",Et._jsonSchema={type:Te("string",Et._jsonSchemaVersion),latitude:Te("number"),longitude:Te("number")};/**
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
 */class It{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,r){if(n.length!==r.length)return!1;for(let a=0;a<n.length;++a)if(n[a]!==r[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:It._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ur(e,It._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new It(e.vectorValues);throw new F(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}It._jsonSchemaVersion="firestore/vectorValue/1.0",It._jsonSchema={type:Te("string",It._jsonSchemaVersion),vectorValues:Te("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=/^__.*__$/;class $m{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Rs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Wm(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{Ac:s})}}class rl{constructor(e,t,n,r,a,l){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new rl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return xi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Wm(this.Ac)&&Cv.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Rv{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||zi(e)}Cc(e,t,n,r=!1){return new rl({Ac:e,methodName:t,Dc:n,path:Le.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hm(s){const e=s._freezeSettings(),t=zi(s._databaseId);return new Rv(s._databaseId,!!e.ignoreUndefinedProperties,t)}class Zi extends Xi{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zi}}class il extends Xi{_toFieldTransform(e){return new Nw(e.path,new sr)}isEqual(e){return e instanceof il}}function Pv(s,e,t,n){const r=s.Cc(1,e,t);Gm("Data must be an object, but it was:",r,n);const a=[],l=tt.empty();hs(n,((h,m)=>{const f=al(e,h,t);m=Ee(m);const y=r.yc(f);if(m instanceof Zi)a.push(f);else{const v=fr(m,y);v!=null&&(a.push(f),l.set(f,v))}}));const c=new ht(a);return new $m(l,c,r.fieldTransforms)}function Dv(s,e,t,n,r,a){const l=s.Cc(1,e,t),c=[Yu(e,n,t)],h=[r];if(a.length%2!=0)throw new F(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<a.length;v+=2)c.push(Yu(e,a[v])),h.push(a[v+1]);const m=[],f=tt.empty();for(let v=c.length-1;v>=0;--v)if(!Ov(m,c[v])){const N=c[v];let k=h[v];k=Ee(k);const P=l.yc(N);if(k instanceof Zi)m.push(N);else{const R=fr(k,P);R!=null&&(m.push(N),f.set(N,R))}}const y=new ht(m);return new $m(f,y,l.fieldTransforms)}function Vv(s,e,t,n=!1){return fr(t,s.Cc(n?4:3,e))}function fr(s,e){if(zm(s=Ee(s)))return Gm("Unsupported field value:",e,s),Mv(s,e);if(s instanceof Xi)return(function(n,r){if(!Wm(r.Ac))throw r.Sc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${n._methodName}() is not currently supported inside arrays`);const a=n._toFieldTransform(r);a&&r.fieldTransforms.push(a)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(n,r){const a=[];let l=0;for(const c of n){let h=fr(c,r.wc(l));h==null&&(h={nullValue:"NULL_VALUE"}),a.push(h),l++}return{arrayValue:{values:a}}})(s,e)}return(function(n,r){if((n=Ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return vw(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const a=ye.fromDate(n);return{timestampValue:fi(r.serializer,a)}}if(n instanceof ye){const a=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:fi(r.serializer,a)}}if(n instanceof Et)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof it)return{bytesValue:lm(r.serializer,n._byteString)};if(n instanceof je){const a=r.databaseId,l=n.firestore._databaseId;if(!l.isEqual(a))throw r.Sc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:$o(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof It)return(function(l,c){return{mapValue:{fields:{[Md]:{stringValue:Ld},[hi]:{arrayValue:{values:l.toArray().map((m=>{if(typeof m!="number")throw c.Sc("VectorValues must only contain numeric values.");return Uo(c.serializer,m)}))}}}}}})(n,r);throw r.Sc(`Unsupported field value: ${Mi(n)}`)})(s,e)}function Mv(s,e){const t={};return kd(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hs(s,((n,r)=>{const a=fr(r,e.mc(n));a!=null&&(t[n]=a)})),{mapValue:{fields:t}}}function zm(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof ye||s instanceof Et||s instanceof it||s instanceof je||s instanceof Xi||s instanceof It)}function Gm(s,e,t){if(!zm(t)||!Ad(t)){const n=Mi(t);throw n==="an object"?e.Sc(s+" a custom object"):e.Sc(s+" "+n)}}function Yu(s,e,t){if((e=Ee(e))instanceof Ji)return e._internalPath;if(typeof e=="string")return al(s,e);throw xi("Field path arguments must be of type string or ",s,!1,void 0,t)}const Lv=new RegExp("[~\\*/\\[\\]]");function al(s,e,t){if(e.search(Lv)>=0)throw xi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new Ji(...e.split("."))._internalPath}catch{throw xi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function xi(s,e,t,n,r){const a=n&&!n.isEmpty(),l=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(a||l)&&(h+=" (found",a&&(h+=` in field ${n}`),l&&(h+=` in document ${r}`),h+=")"),new F(S.INVALID_ARGUMENT,c+s+h)}function Ov(s,e){return s.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,t,n,r,a){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ea("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Fv extends Km{data(){return super.data()}}function ea(s,e){return typeof e=="string"?al(s,e):e instanceof Ji?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new F(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ol{}class Qm extends ol{}function bi(s,e,...t){let n=[];e instanceof ol&&n.push(e),n=n.concat(t),(function(a){const l=a.filter((h=>h instanceof ll)).length,c=a.filter((h=>h instanceof ta)).length;if(l>1||l>0&&c>0)throw new F(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const r of n)s=r._apply(s);return s}class ta extends Qm{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new ta(e,t,n)}_apply(e){const t=this._parse(e);return Ym(e._query,t),new Ds(e.firestore,e.converter,ro(e._query,t))}_parse(e){const t=Hm(e.firestore);return(function(a,l,c,h,m,f,y){let v;if(m.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Xu(y,f);const k=[];for(const P of y)k.push(Ju(h,a,P));v={arrayValue:{values:k}}}else v=Ju(h,a,y)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Xu(y,f),v=Vv(c,l,y,f==="in"||f==="not-in");return Ne.create(m,f,v)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function wi(s,e,t){const n=e,r=ea("where",s);return ta._create(r,n,t)}class ll extends ol{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ll(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:ft.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,a){let l=r;const c=a.getFlattenedFilters();for(const h of c)Ym(l,h),l=ro(l,h)})(e._query,t),new Ds(e.firestore,e.converter,ro(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class cl extends Qm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new cl(e,t)}_apply(e){const t=(function(r,a,l){if(r.startAt!==null)throw new F(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new F(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new tr(a,l)})(e._query,this._field,this._direction);return new Ds(e.firestore,e.converter,(function(r,a){const l=r.explicitOrderBy.concat([a]);return new hn(r.path,r.collectionGroup,l,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)})(e._query,t))}}function Bv(s,e="asc"){const t=e,n=ea("orderBy",s);return cl._create(n,t)}function Ju(s,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new F(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hd(e)&&t.indexOf("/")!==-1)throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(pe.fromString(t));if(!$.isDocumentKey(n))throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return mu(s,new $(n))}if(t instanceof je)return mu(s,t._key);throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mi(t)}.`)}function Xu(s,e){if(!Array.isArray(s)||s.length===0)throw new F(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ym(s,e){const t=(function(r,a){for(const l of r)for(const c of l.getFlattenedFilters())if(a.indexOf(c.op)>=0)return c.op;return null})(s.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new F(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class qv{convertValue(e,t="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return hs(e,((r,a)=>{n[r]=this.convertValue(a,t)})),n}convertVectorValue(e){var n,r,a;const t=(a=(r=(n=e.fields)==null?void 0:n[hi].arrayValue)==null?void 0:r.values)==null?void 0:a.map((l=>ve(l.doubleValue)));return new It(t)}convertGeoPoint(e){return new Et(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Fi(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Xn(e));default:return null}}convertTimestamp(e){const t=rs(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=pe.fromString(e);ce(fm(n),9688,{name:e});const r=new Zn(n.get(1),n.get(3)),a=new $(n.popFirst(5));return r.isEqual(t)||Vt(`Document ${a} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}class Un{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _s extends Km{constructor(e,t,n,r,a,l){super(e,t,n,r,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ea("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_s._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_s._jsonSchemaVersion="firestore/documentSnapshot/1.0",_s._jsonSchema={type:Te("string",_s._jsonSchemaVersion),bundleSource:Te("string","DocumentSnapshot"),bundleName:Te("string"),bundle:Te("string")};class zr extends _s{data(e={}){return super.data(e)}}class Gs{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Un(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new zr(this._firestore,this._userDataWriter,n.key,n,new Un(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,a){if(r._snapshot.oldDocs.isEmpty()){let l=0;return r._snapshot.docChanges.map((c=>{const h=new zr(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Un(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:l++}}))}{let l=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>a||c.type!==3)).map((c=>{const h=new zr(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Un(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let m=-1,f=-1;return c.type!==0&&(m=l.indexOf(c.doc.key),l=l.delete(c.doc.key)),c.type!==1&&(l=l.add(c.doc),f=l.indexOf(c.doc.key)),{type:$v(c.type),doc:h,oldIndex:m,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Gs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Po.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),n.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),r.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $v(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(s){s=Is(s,je);const e=Is(s.firestore,Yi);return Tv(nl(e),s._key).then((t=>Hv(e,s,t)))}Gs._jsonSchemaVersion="firestore/querySnapshot/1.0",Gs._jsonSchema={type:Te("string",Gs._jsonSchemaVersion),bundleSource:Te("string","QuerySnapshot"),bundleName:Te("string"),bundle:Te("string")};class Jm extends qv{constructor(e){super(),this.firestore=e}convertBytes(e){return new it(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,t)}}function _i(s){s=Is(s,Ds);const e=Is(s.firestore,Yi),t=nl(e),n=new Jm(e);return Uv(s._query),jv(t,s._query).then((r=>new Gs(e,n,s,r)))}function Zu(s,e,t,...n){s=Is(s,je);const r=Is(s.firestore,Yi),a=Hm(r);let l;return l=typeof(e=Ee(e))=="string"||e instanceof Ji?Dv(a,"updateDoc",s._key,e,t,n):Pv(a,"updateDoc",s._key,e),Wv(r,[l.toMutation(s._key,Rt.exists(!0))])}function Wv(s,e){return(function(n,r){const a=new Ct;return n.asyncQueue.enqueueAndForget((async()=>fv(await Nv(n),r,a))),a.promise})(nl(s),e)}function Hv(s,e,t){const n=t.docs.get(e._key),r=new Jm(s);return new _s(s,r,e._key,n,new Un(t.hasPendingWrites,t.fromCache),e.converter)}function eh(){return new il("serverTimestamp")}(function(e,t=!0){(function(r){ln=r})(rn),Tt(new dt("firestore",((n,{instanceIdentifier:r,options:a})=>{const l=n.getProvider("app").getImmediate(),c=new Yi(new Db(n.getProvider("auth-internal")),new Lb(l,n.getProvider("app-check-internal")),(function(m,f){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new F(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zn(m.options.projectId,f)})(l,r),l);return a={useFetchStreams:t,...a},c._setSettings(a),c}),"PUBLIC").setMultipleInstances(!0)),ot(eu,tu,e),ot(eu,tu,"esm2020")})();const Xm="@firebase/installations",ul="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=1e4,ef=`w:${ul}`,tf="FIS_v2",zv="https://firebaseinstallations.googleapis.com/v1",Gv=3600*1e3,Kv="installations",Qv="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ts=new As(Kv,Qv,Yv);function sf(s){return s instanceof pt&&s.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf({projectId:s}){return`${zv}/projects/${s}/installations`}function rf(s){return{token:s.token,requestStatus:2,expiresIn:Xv(s.expiresIn),creationTime:Date.now()}}async function af(s,e){const n=(await e.json()).error;return Ts.create("request-failed",{requestName:s,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function of({apiKey:s}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":s})}function Jv(s,{refreshToken:e}){const t=of(s);return t.append("Authorization",Zv(e)),t}async function lf(s){const e=await s();return e.status>=500&&e.status<600?s():e}function Xv(s){return Number(s.replace("s","000"))}function Zv(s){return`${tf} ${s}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE({appConfig:s,heartbeatServiceProvider:e},{fid:t}){const n=nf(s),r=of(s),a=e.getImmediate({optional:!0});if(a){const m=await a.getHeartbeatsHeader();m&&r.append("x-firebase-client",m)}const l={fid:t,authVersion:tf,appId:s.appId,sdkVersion:ef},c={method:"POST",headers:r,body:JSON.stringify(l)},h=await lf(()=>fetch(n,c));if(h.ok){const m=await h.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:rf(m.authToken)}}else throw await af("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(s){return new Promise(e=>{setTimeout(e,s)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(s){return btoa(String.fromCharCode(...s)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=/^[cdef][\w-]{21}$/,go="";function nE(){try{const s=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(s),s[0]=112+s[0]%16;const t=rE(s);return sE.test(t)?t:go}catch{return go}}function rE(s){return tE(s).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(s){return`${s.appName}!${s.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=new Map;function hf(s,e){const t=sa(s);df(t,e),iE(t,e)}function df(s,e){const t=uf.get(s);if(t)for(const n of t)n(e)}function iE(s,e){const t=aE();t&&t.postMessage({key:s,fid:e}),oE()}let ws=null;function aE(){return!ws&&"BroadcastChannel"in self&&(ws=new BroadcastChannel("[Firebase] FID Change"),ws.onmessage=s=>{df(s.data.key,s.data.fid)}),ws}function oE(){uf.size===0&&ws&&(ws.close(),ws=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="firebase-installations-database",cE=1,js="firebase-installations-store";let Da=null;function hl(){return Da||(Da=Mh(lE,cE,{upgrade:(s,e)=>{switch(e){case 0:s.createObjectStore(js)}}})),Da}async function vi(s,e){const t=sa(s),r=(await hl()).transaction(js,"readwrite"),a=r.objectStore(js),l=await a.get(t);return await a.put(e,t),await r.done,(!l||l.fid!==e.fid)&&hf(s,e.fid),e}async function mf(s){const e=sa(s),n=(await hl()).transaction(js,"readwrite");await n.objectStore(js).delete(e),await n.done}async function na(s,e){const t=sa(s),r=(await hl()).transaction(js,"readwrite"),a=r.objectStore(js),l=await a.get(t),c=e(l);return c===void 0?await a.delete(t):await a.put(c,t),await r.done,c&&(!l||l.fid!==c.fid)&&hf(s,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(s){let e;const t=await na(s.appConfig,n=>{const r=uE(n),a=hE(s,r);return e=a.registrationPromise,a.installationEntry});return t.fid===go?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function uE(s){const e=s||{fid:nE(),registrationStatus:0};return ff(e)}function hE(s,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Ts.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=dE(s,t);return{installationEntry:t,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mE(s)}:{installationEntry:e}}async function dE(s,e){try{const t=await eE(s,e);return vi(s.appConfig,t)}catch(t){throw sf(t)&&t.customData.serverCode===409?await mf(s.appConfig):await vi(s.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function mE(s){let e=await th(s.appConfig);for(;e.registrationStatus===1;)await cf(100),e=await th(s.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:n}=await dl(s);return n||t}return e}function th(s){return na(s,e=>{if(!e)throw Ts.create("installation-not-found");return ff(e)})}function ff(s){return fE(s)?{fid:s.fid,registrationStatus:0}:s}function fE(s){return s.registrationStatus===1&&s.registrationTime+Zm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pE({appConfig:s,heartbeatServiceProvider:e},t){const n=gE(s,t),r=Jv(s,t),a=e.getImmediate({optional:!0});if(a){const m=await a.getHeartbeatsHeader();m&&r.append("x-firebase-client",m)}const l={installation:{sdkVersion:ef,appId:s.appId}},c={method:"POST",headers:r,body:JSON.stringify(l)},h=await lf(()=>fetch(n,c));if(h.ok){const m=await h.json();return rf(m)}else throw await af("Generate Auth Token",h)}function gE(s,{fid:e}){return`${nf(s)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(s,e=!1){let t;const n=await na(s.appConfig,a=>{if(!pf(a))throw Ts.create("not-registered");const l=a.authToken;if(!e&&bE(l))return a;if(l.requestStatus===1)return t=yE(s,e),a;{if(!navigator.onLine)throw Ts.create("app-offline");const c=_E(a);return t=xE(s,c),c}});return t?await t:n.authToken}async function yE(s,e){let t=await sh(s.appConfig);for(;t.authToken.requestStatus===1;)await cf(100),t=await sh(s.appConfig);const n=t.authToken;return n.requestStatus===0?ml(s,e):n}function sh(s){return na(s,e=>{if(!pf(e))throw Ts.create("not-registered");const t=e.authToken;return vE(t)?{...e,authToken:{requestStatus:0}}:e})}async function xE(s,e){try{const t=await pE(s,e),n={...e,authToken:t};return await vi(s.appConfig,n),t}catch(t){if(sf(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await mf(s.appConfig);else{const n={...e,authToken:{requestStatus:0}};await vi(s.appConfig,n)}throw t}}function pf(s){return s!==void 0&&s.registrationStatus===2}function bE(s){return s.requestStatus===2&&!wE(s)}function wE(s){const e=Date.now();return e<s.creationTime||s.creationTime+s.expiresIn<e+Gv}function _E(s){const e={requestStatus:1,requestTime:Date.now()};return{...s,authToken:e}}function vE(s){return s.requestStatus===1&&s.requestTime+Zm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(s){const e=s,{installationEntry:t,registrationPromise:n}=await dl(e);return n?n.catch(console.error):ml(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(s,e=!1){const t=s;return await NE(t),(await ml(t,e)).token}async function NE(s){const{registrationPromise:e}=await dl(s);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(s){if(!s||!s.options)throw Va("App Configuration");if(!s.name)throw Va("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!s.options[t])throw Va(t);return{appName:s.name,projectId:s.options.projectId,apiKey:s.options.apiKey,appId:s.options.appId}}function Va(s){return Ts.create("missing-app-config-values",{valueName:s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="installations",jE="installations-internal",AE=s=>{const e=s.getProvider("app").getImmediate(),t=TE(e),n=Ss(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},SE=s=>{const e=s.getProvider("app").getImmediate(),t=Ss(e,gf).getImmediate();return{getId:()=>EE(t),getToken:r=>IE(t,r)}};function kE(){Tt(new dt(gf,AE,"PUBLIC")),Tt(new dt(jE,SE,"PRIVATE"))}kE();ot(Xm,ul);ot(Xm,ul,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="analytics",CE="firebase_id",RE="origin",PE=60*1e3,DE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fl="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new ki("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},st=new As("analytics","Analytics",VE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(s){if(!s.startsWith(fl)){const e=st.create("invalid-gtag-resource",{gtagURL:s});return Je.warn(e.message),""}return s}function yf(s){return Promise.all(s.map(e=>e.catch(t=>t)))}function LE(s,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(s,e)),t}function OE(s,e){const t=LE("firebase-js-sdk-policy",{createScriptURL:ME}),n=document.createElement("script"),r=`${fl}?l=${s}&id=${e}`;n.src=t?t==null?void 0:t.createScriptURL(r):r,n.async=!0,document.head.appendChild(n)}function FE(s){let e=[];return Array.isArray(window[s])?e=window[s]:window[s]=e,e}async function UE(s,e,t,n,r,a){const l=n[r];try{if(l)await e[l];else{const h=(await yf(t)).find(m=>m.measurementId===r);h&&await e[h.appId]}}catch(c){Je.error(c)}s("config",r,a)}async function BE(s,e,t,n,r){try{let a=[];if(r&&r.send_to){let l=r.send_to;Array.isArray(l)||(l=[l]);const c=await yf(t);for(const h of l){const m=c.find(y=>y.measurementId===h),f=m&&e[m.appId];if(f)a.push(f);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),s("event",n,r||{})}catch(a){Je.error(a)}}function qE(s,e,t,n){async function r(a,...l){try{if(a==="event"){const[c,h]=l;await BE(s,e,t,c,h)}else if(a==="config"){const[c,h]=l;await UE(s,e,t,n,c,h)}else if(a==="consent"){const[c,h]=l;s("consent",c,h)}else if(a==="get"){const[c,h,m]=l;s("get",c,h,m)}else if(a==="set"){const[c]=l;s("set",c)}else s(a,...l)}catch(c){Je.error(c)}}return r}function $E(s,e,t,n,r){let a=function(...l){window[n].push(arguments)};return window[r]&&typeof window[r]=="function"&&(a=window[r]),window[r]=qE(a,s,e,t),{gtagCore:a,wrappedGtag:window[r]}}function WE(s){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(fl)&&t.src.includes(s))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=30,zE=1e3;class GE{constructor(e={},t=zE){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const xf=new GE;function KE(s){return new Headers({Accept:"application/json","x-goog-api-key":s})}async function QE(s){var l;const{appId:e,apiKey:t}=s,n={method:"GET",headers:KE(t)},r=DE.replace("{app-id}",e),a=await fetch(r,n);if(a.status!==200&&a.status!==304){let c="";try{const h=await a.json();(l=h.error)!=null&&l.message&&(c=h.error.message)}catch{}throw st.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function YE(s,e=xf,t){const{appId:n,apiKey:r,measurementId:a}=s.options;if(!n)throw st.create("no-app-id");if(!r){if(a)return{measurementId:a,appId:n};throw st.create("no-api-key")}const l=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new ZE;return setTimeout(async()=>{c.abort()},PE),bf({appId:n,apiKey:r,measurementId:a},l,c,e)}async function bf(s,{throttleEndTimeMillis:e,backoffCount:t},n,r=xf){var c;const{appId:a,measurementId:l}=s;try{await JE(n,e)}catch(h){if(l)return Je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw h}try{const h=await QE(s);return r.deleteThrottleMetadata(a),h}catch(h){const m=h;if(!XE(m)){if(r.deleteThrottleMetadata(a),l)return Je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:a,measurementId:l};throw h}const f=Number((c=m==null?void 0:m.customData)==null?void 0:c.httpStatus)===503?Ic(t,r.intervalMillis,HE):Ic(t,r.intervalMillis),y={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return r.setThrottleMetadata(a,y),Je.debug(`Calling attemptFetch again in ${f} millis`),bf(s,y,n,r)}}function JE(s,e){return new Promise((t,n)=>{const r=Math.max(e-Date.now(),0),a=setTimeout(t,r);s.addEventListener(()=>{clearTimeout(a),n(st.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function XE(s){if(!(s instanceof pt)||!s.customData)return!1;const e=Number(s.customData.httpStatus);return e===429||e===500||e===503||e===504}class ZE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function eI(s,e,t,n,r){if(r&&r.global){s("event",t,n);return}else{const a=await e,l={...n,send_to:a};s("event",t,l)}}async function tI(s,e,t,n){if(n&&n.global){const r={};for(const a of Object.keys(t))r[`user_properties.${a}`]=t[a];return s("set",r),Promise.resolve()}else{const r=await e;s("config",r,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(){if(Rh())try{await Ph()}catch(s){return Je.warn(st.create("indexeddb-unavailable",{errorInfo:s==null?void 0:s.toString()}).message),!1}else return Je.warn(st.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function nI(s,e,t,n,r,a,l){const c=YE(s);c.then(v=>{t[v.measurementId]=v.appId,s.options.measurementId&&v.measurementId!==s.options.measurementId&&Je.warn(`The measurement ID in the local Firebase config (${s.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Je.error(v)),e.push(c);const h=sI().then(v=>{if(v)return n.getId()}),[m,f]=await Promise.all([c,h]);WE(a)||OE(a,m.measurementId),r("js",new Date);const y=(l==null?void 0:l.config)??{};return y[RE]="firebase",y.update=!0,f!=null&&(y[CE]=f),r("config",m.measurementId,y),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.app=e}_delete(){return delete Ks[this.app.options.appId],Promise.resolve()}}let Ks={},nh=[];const rh={};let Ma="dataLayer",iI="gtag",ih,pl,ah=!1;function aI(){const s=[];if(Ch()&&s.push("This is a browser extension environment."),Xg()||s.push("Cookies are not available."),s.length>0){const e=s.map((n,r)=>`(${r+1}) ${n}`).join(" "),t=st.create("invalid-analytics-context",{errorInfo:e});Je.warn(t.message)}}function oI(s,e,t){aI();const n=s.options.appId;if(!n)throw st.create("no-app-id");if(!s.options.apiKey)if(s.options.measurementId)Je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${s.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw st.create("no-api-key");if(Ks[n]!=null)throw st.create("already-exists",{id:n});if(!ah){FE(Ma);const{wrappedGtag:a,gtagCore:l}=$E(Ks,nh,rh,Ma,iI);pl=a,ih=l,ah=!0}return Ks[n]=nI(s,nh,rh,e,ih,Ma,t),new rI(s)}function lI(s=Eo()){s=Ee(s);const e=Ss(s,Ei);return e.isInitialized()?e.getImmediate():cI(s)}function cI(s,e={}){const t=Ss(s,Ei);if(t.isInitialized()){const r=t.getImmediate();if(ss(e,t.getOptions()))return r;throw st.create("already-initialized")}return t.initialize({options:e})}function uI(s,e,t){s=Ee(s),tI(pl,Ks[s.app.options.appId],e,t).catch(n=>Je.error(n))}function hI(s,e,t,n){s=Ee(s),eI(pl,Ks[s.app.options.appId],e,t,n).catch(r=>Je.error(r))}const oh="@firebase/analytics",lh="0.10.19";function dI(){Tt(new dt(Ei,(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return oI(n,r,t)},"PUBLIC")),Tt(new dt("analytics-internal",s,"PRIVATE")),ot(oh,lh),ot(oh,lh,"esm2020");function s(e){try{const t=e.getProvider(Ei).getImmediate();return{logEvent:(n,r,a)=>hI(t,n,r,a),setUserProperties:(n,r)=>uI(t,n,r)}}catch(t){throw st.create("interop-component-reg-failed",{reason:t})}}}dI();const yo={apiKey:"AIzaSyBkMktbTfBNIdhtBwCC_cRBEavKeuTyCGA",authDomain:"myschola-5ec1f.firebaseapp.com",projectId:"myschola-5ec1f",storageBucket:"myschola-5ec1f.appspot.com",messagingSenderId:"927860875256",appId:"1:927860875256:web:ce73f8eabd09cac6f3400d",measurementId:"G-XTC703H7RN"};if(!yo.apiKey||!yo.projectId)throw console.error("Firebase configuration is missing. Please check your .env file."),new Error("Firebase configuration error");const gl=Lh(yo),lt=kb(gl),xe=Sv(gl);lI(gl);function mI(){const[s,e]=A.useState(""),[t,n]=A.useState(!1),[r,a]=A.useState(!0),l=Lt(),c=cs(),h=async f=>{var k,P;if((await Oe(Pe(xe,"admins",f))).exists())return l("/admin",{replace:!0}),!0;if((await Oe(Pe(xe,"teachers",f))).exists())return l("/admin",{replace:!0}),!0;if((await Oe(Pe(xe,"students",f))).exists()){const R=((P=(k=c.state)==null?void 0:k.from)==null?void 0:P.pathname)||"/app/dashboard";return l(R,{replace:!0}),!0}return!1};A.useEffect(()=>{(async()=>{try{await lt.signOut()}catch(y){console.error("Error signing out existing session:",y)}finally{a(!1)}})()},[]);const m=async f=>{f.preventDefault(),e(""),n(!0);const y=new FormData(f.currentTarget),v=y.get("email"),N=y.get("password");try{console.log("Attempting to sign in with email:",v);const P=(await g0(lt,v,N)).user;console.log("Sign in successful. User UID:",P.uid),await h(P.uid)||(console.error("No role document found for UID:",P.uid),await lt.signOut(),e("Profile not found. Please contact your administrator."))}catch(k){console.error(k),k.code==="auth/invalid-email"?e("Please enter a valid email address."):k.code==="auth/user-not-found"?e("No account found with this email. Please contact your teacher to create an account."):k.code==="auth/wrong-password"?e("Incorrect password. Please try again."):k.code==="auth/invalid-credential"?e("Invalid email or password. Please try again."):e(k.message||"Failed to sign in. Please try again.")}finally{n(!1)}};return r?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),i.jsx("p",{className:"mt-4 text-gray-600",children:"Checking authentication..."})]})}):i.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[i.jsx("div",{className:"flex justify-center",children:i.jsxs(he,{to:"/",className:"flex items-center",children:[i.jsx(Nt,{className:"h-12 w-12 text-blue-600"}),i.jsx("span",{className:"ml-2 text-3xl font-bold text-gray-900",children:"MySchola"})]})}),i.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"}),i.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Students: Use the email and password provided by your teacher"})]}),i.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:i.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[i.jsxs("form",{className:"space-y-6",onSubmit:m,children:[s&&i.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative",role:"alert",children:i.jsx("span",{className:"block sm:inline",children:s})}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),i.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[i.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:i.jsx(Kr,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),i.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"you@example.com"})]})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),i.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[i.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:i.jsx(bo,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),i.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"********"})]})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center",children:[i.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),i.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),i.jsx("div",{className:"text-sm",children:i.jsx("a",{href:"#",className:"font-medium text-blue-600 hover:text-blue-500",children:"Forgot your password?"})})]}),i.jsx("div",{children:i.jsx("button",{type:"submit",disabled:t,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed",children:t?"Please wait...":"Sign in"})})]}),i.jsx("div",{className:"mt-6",children:i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"absolute inset-0 flex items-center",children:i.jsx("div",{className:"w-full border-t border-gray-300"})}),i.jsx("div",{className:"relative flex justify-center text-sm",children:i.jsx("span",{className:"px-2 bg-white text-gray-500",children:i.jsxs(he,{to:"/",className:"flex items-center hover:text-gray-900 transition",children:[i.jsx(ze,{className:"h-4 w-4 mr-1"}),"Back to Home"]})})})]})})]})})]})}function La({children:s}){const[e,t]=A.useState(!0),[n,r]=A.useState(!1),[a,l]=A.useState(!1),c=cs();return A.useEffect(()=>{const h=Pi(lt,async m=>{if(m)try{(await Oe(Pe(xe,"students",m.uid))).exists()?(r(!0),l(!0)):(r(!1),l(!1))}catch(f){console.error("Error checking student status:",f),r(!1),l(!1)}else r(!1),l(!1);t(!1)});return()=>h()},[]),e?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),i.jsx("p",{className:"mt-4 text-gray-600",children:"Loading..."})]})}):!n||!a?i.jsx(Zf,{to:"/login",state:{from:c},replace:!0}):s}const fI=s=>{const e=(s==null?void 0:s.toLowerCase())||"";return e.includes("math")||e.includes("maths")?Ip:e.includes("english")||e.includes("literature")||e.includes("language")?_p:e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?$p:e.includes("geography")||e.includes("geography")?Hp:e.includes("history")?Kp:e.includes("music")?ag:e.includes("art")||e.includes("design")?lg:e.includes("language")||e.includes("french")||e.includes("spanish")||e.includes("german")?Yp:e.includes("computer")||e.includes("ict")||e.includes("it")?pp:Nt},pI=s=>{const e=(s==null?void 0:s.toLowerCase())||"";return e.includes("math")||e.includes("maths")?"bg-blue-50 border-blue-200 text-blue-700":e.includes("english")||e.includes("literature")||e.includes("language")?"bg-purple-50 border-purple-200 text-purple-700":e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?"bg-green-50 border-green-200 text-green-700":e.includes("geography")?"bg-cyan-50 border-cyan-200 text-cyan-700":e.includes("history")?"bg-amber-50 border-amber-200 text-amber-700":e.includes("music")?"bg-pink-50 border-pink-200 text-pink-700":e.includes("art")||e.includes("design")?"bg-rose-50 border-rose-200 text-rose-700":"bg-gray-50 border-gray-200 text-gray-700"},wf="subjectAccess",gI=()=>{try{const s=localStorage.getItem(wf),e=s?JSON.parse(s):[];return Array.isArray(e)?e:[]}catch{return[]}},yI=s=>{localStorage.setItem(wf,JSON.stringify(s))},ch=s=>(s==null?void 0:s.pin)||(s==null?void 0:s.accessPin)||"";function xI(){const s=Lt(),[e,t]=A.useState(null),[n,r]=A.useState([]),[a,l]=A.useState(!0),[c,h]=A.useState(""),[m,f]=A.useState(null),[y,v]=A.useState(gI()),[N,k]=A.useState(null),[P,R]=A.useState(""),[O,D]=A.useState("");A.useEffect(()=>{(async()=>{try{const g=lt.currentUser;if(!g){s("/login");return}const w=await Oe(Pe(xe,"students",g.uid));if(!w.exists()){h("Student profile not found"),l(!1);return}const _=w.data();if(t(_),console.log("Student data:",_),console.log("Student subjects array:",_.subjects),_.subjects&&_.subjects.length>0){const b=(await Promise.all(_.subjects.map(async W=>{try{const Z=await Oe(Pe(xe,"subjects",W));return Z.exists()?{id:Z.id,...Z.data()}:(console.warn(`Subject document not found for ID: ${W}`),null)}catch(Z){return console.error(`Error fetching subject ${W}:`,Z),null}}))).filter(W=>W!==null);console.log("Loaded subjects:",b),console.log("Expected subjects:",_.subjects),console.log("Missing subjects:",_.subjects.filter(W=>!b.some(Z=>Z.id===W))),r(b),b.length!==_.subjects.length&&f({expected:_.subjects.length,loaded:b.length,missing:_.subjects.filter(W=>!b.some(Z=>Z.id===W))})}else console.log("No subjects array found in student data");l(!1)}catch(g){console.error("Error loading student data:",g),h("Failed to load dashboard data"),l(!1)}})()},[s]);const B=x=>!String(ch(x)||"").trim()||y.includes(x.id),J=x=>{k(x),R(""),D("")},oe=x=>{const g=String(ch(x)||"").trim();if(g&&P.trim()!==g){D("Incorrect PIN");return}const w=Array.from(new Set([...y,x.id]));v(w),yI(w),k(null),R(""),D("")},te=()=>{k(null),R(""),D("")},E=async()=>{try{await b0(lt),s("/login",{replace:!0})}catch(x){console.error("Error signing out:",x)}};return a?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",role:"status","aria-live":"polite",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto","aria-hidden":"true"}),i.jsx("p",{className:"mt-4 text-gray-600","aria-label":"Loading dashboard",children:"Loading your dashboard..."})]})}):c?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-red-600 mb-4",children:c}),i.jsx("button",{onClick:E,className:"text-blue-600 hover:text-blue-700 underline",children:"Sign out and try again"})]})}):i.jsxs("div",{className:"min-h-screen bg-gray-50",children:[i.jsx("header",{className:"bg-white shadow-sm",role:"banner",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Gr,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"MySchola Student Dashboard"}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Hi, ",i.jsx("span",{className:"font-medium",children:(e==null?void 0:e.name)||"Student"})]})]})]}),i.jsxs("nav",{className:"flex items-center gap-3","aria-label":"Dashboard navigation",children:[i.jsx(he,{to:"/",className:"text-sm text-gray-600 hover:text-gray-900 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition","aria-label":"Return to homepage",children:"Back to site"}),i.jsxs("button",{onClick:E,className:"inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition","aria-label":"Sign out of your account",children:[i.jsx(Zp,{className:"h-4 w-4","aria-hidden":"true"}),"Sign out"]})]})]})}),i.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"mb-8",children:[i.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Your Subjects"}),i.jsx("p",{className:"text-gray-600",children:"Select a subject to join Zoom sessions, watch recordings, or download homework."})]}),m&&i.jsxs("div",{className:"mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4",role:"alert","aria-live":"polite",children:[i.jsx("p",{className:"text-sm text-yellow-800 font-medium mb-1",children:"Some subjects may not be loading correctly"}),i.jsxs("p",{className:"text-xs text-yellow-700",children:["Expected ",m.expected," subject(s), loaded ",m.loaded,". Please check the browser console for details."]})]}),n.length===0?i.jsxs("div",{className:"bg-white rounded-lg shadow p-8 text-center",role:"region","aria-labelledby":"no-subjects-heading",children:[i.jsx(Gr,{className:"h-12 w-12 text-gray-400 mx-auto mb-4","aria-hidden":"true"}),i.jsx("h3",{id:"no-subjects-heading",className:"text-lg font-semibold text-gray-900 mb-2",children:"No Subjects Enrolled"}),i.jsx("p",{className:"text-gray-600 mb-2",children:"You're not enrolled in any subjects yet."}),i.jsx("p",{className:"text-sm text-gray-500",children:"Please contact your teacher to get enrolled."})]}):i.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",role:"list","aria-label":"Enrolled subjects",children:n.map(x=>{const g=fI(x.name),w=pI(x.name);return i.jsxs("article",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",role:"listitem",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{className:`p-2 rounded-lg ${w}`,children:i.jsx(g,{className:"h-6 w-6","aria-hidden":"true"})}),i.jsx("h3",{className:"text-xl font-semibold text-gray-900 flex-1",children:x.name})]}),i.jsx("div",{className:"space-y-3",children:B(x)?i.jsxs(i.Fragment,{children:[x.zoomLink&&i.jsxs("a",{href:x.zoomLink,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`Join Zoom session for ${x.name}`,children:[i.jsx(Up,{className:"h-4 w-4","aria-hidden":"true"}),"Join Zoom"]}),i.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[i.jsxs(he,{to:`/app/subject/${x.id}/recordings`,className:"flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`View recordings for ${x.name}`,children:[i.jsx(Qs,{className:"h-4 w-4","aria-hidden":"true"}),"Recordings"]}),i.jsxs(he,{to:`/app/subject/${x.id}/homework`,className:"flex items-center justify-center gap-2 text-green-600 hover:text-green-700 px-4 py-2 border border-green-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition font-medium","aria-label":`View homework for ${x.name}`,children:[i.jsx(Gn,{className:"h-4 w-4","aria-hidden":"true"}),"Homework"]})]})]}):i.jsxs("div",{className:"space-y-3",children:[i.jsx("p",{className:"text-sm text-gray-600",children:"This subject is locked. Enter the PIN to unlock."}),N===x.id?i.jsxs("div",{className:"space-y-2",children:[i.jsx("input",{type:"password",value:P,onChange:_=>R(_.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Subject PIN"}),O&&i.jsx("p",{className:"text-sm text-red-600",children:O}),i.jsxs("div",{className:"flex flex-wrap gap-2",children:[i.jsx("button",{type:"button",onClick:()=>oe(x),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Unlock"}),i.jsx("button",{type:"button",onClick:te,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Cancel"})]})]}):i.jsx("button",{type:"button",onClick:()=>J(x.id),className:"w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Enter PIN"})]})})]},x.id)})})]})]})}const _f="subjectAccess",bI=()=>{try{const s=localStorage.getItem(_f),e=s?JSON.parse(s):[];return Array.isArray(e)?e:[]}catch{return[]}},wI=s=>{localStorage.setItem(_f,JSON.stringify(s))},_I=s=>(s==null?void 0:s.pin)||(s==null?void 0:s.accessPin)||"";function vI(){const{subjectId:s}=xh(),e=Lt(),[t,n]=A.useState([]),[r,a]=A.useState([]),[l,c]=A.useState(null),[h,m]=A.useState(!0),[f,y]=A.useState(""),[v,N]=A.useState(!1),[k,P]=A.useState(""),[R,O]=A.useState(""),[D,B]=A.useState(""),[J,oe]=A.useState(bI()),[te,E]=A.useState(0);A.useEffect(()=>{const I=async()=>{try{if(!lt.currentUser){e("/login");return}const W=Pe(xe,"subjects",s),Z=await Oe(W);if(Z.exists()){const Q={id:s,...Z.data()};c(Q);const me=_I(Q);if(B(me),!(!me||J.includes(s))){N(!0),m(!1);return}}let V;try{V=bi(ir(xe,"recordings"),wi("subjectId","==",s),Bv("date","desc"))}catch(Q){console.warn("OrderBy failed, using simple query:",Q),V=bi(ir(xe,"recordings"),wi("subjectId","==",s))}const M=(await _i(V)).docs.map(Q=>({id:Q.id,...Q.data()})).filter(Q=>Q.approvalStatus==="approved"||!Q.approvalStatus).sort((Q,me)=>{var Ze,nt;const De=(Ze=Q.date)!=null&&Ze.toDate?Q.date.toDate():Q.date?new Date(Q.date):new Date(0);return((nt=me.date)!=null&&nt.toDate?me.date.toDate():me.date?new Date(me.date):new Date(0))-De});n(M),a(M),N(!1),m(!1)}catch(b){console.error("Error loading recordings:",b),y("Failed to load recordings"),m(!1)}};s&&(m(!0),y(""),I())},[s,e,J,te]);const x=I=>{I.preventDefault();const b=String(D||"").trim();if(!b){N(!1);return}if(k.trim()!==b){O("Incorrect PIN");return}const W=Array.from(new Set([...J,s]));oe(W),wI(W),P(""),O(""),N(!1),E(Z=>Z+1)},g=()=>{var b;return l?(((b=l.name)==null?void 0:b.toLowerCase())||"").includes("english"):!1},w=()=>{const I={};return r.forEach(b=>{const W=b.examBoard||"Other",Z=b.tier||(g()?"General":"Other"),V=`${W}_${Z}`;I[V]||(I[V]={examBoard:W,tier:Z,recordings:[]}),I[V].recordings.push(b)}),Object.values(I).sort((b,W)=>b.examBoard!==W.examBoard?b.examBoard==="AQA"?-1:W.examBoard==="AQA"?1:b.examBoard==="Edexcel"?-1:W.examBoard==="Edexcel"?1:b.examBoard.localeCompare(W.examBoard):b.tier==="Foundation"?-1:W.tier==="Foundation"?1:b.tier==="Higher"?-1:W.tier==="Higher"?1:b.tier.localeCompare(W.tier))},_=I=>I?(I.toDate?I.toDate():new Date(I)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"Date not available";return h?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),i.jsx("p",{className:"mt-4 text-gray-600",children:"Loading recordings..."})]})}):v?i.jsx("div",{className:"min-h-screen bg-gray-50",children:i.jsxs("div",{className:"max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs(he,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[i.jsx(ze,{className:"h-4 w-4"}),"Back to Dashboard"]}),i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[i.jsx("h1",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Enter Subject PIN"}),i.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"This subject is locked. Enter the PIN to access recordings."}),i.jsxs("form",{onSubmit:x,className:"space-y-4",children:[i.jsx("input",{type:"password",value:k,onChange:I=>P(I.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Subject PIN",autoFocus:!0}),R&&i.jsx("div",{className:"text-sm text-red-600",children:R}),i.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"Unlock Subject"})]})]})]})}):i.jsx("div",{className:"min-h-screen bg-gray-50",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs(he,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[i.jsx(ze,{className:"h-4 w-4"}),"Back to Dashboard"]}),i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[i.jsx(Qs,{className:"h-6 w-6 text-blue-600"}),i.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Recordings - ",(l==null?void 0:l.name)||"Subject"]})]}),i.jsx("p",{className:"text-gray-600",children:"Watch past lesson recordings for this subject."})]}),f&&i.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6",children:f}),r.length===0?i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[i.jsx(Qs,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),i.jsx("p",{className:"text-gray-600",children:"No recordings available yet."}),i.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Check back later for new recordings."})]}):i.jsx("div",{className:"space-y-6",children:w().map((I,b)=>i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",children:[i.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 px-6 py-4",children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Gr,{className:"h-5 w-5 text-blue-600"}),i.jsxs("div",{children:[i.jsxs("h3",{className:"text-lg font-semibold text-gray-900",children:[I.examBoard,!g()&&I.tier&&i.jsxs("span",{className:"ml-2 text-base font-normal text-gray-600",children:["- ",I.tier]})]}),i.jsxs("p",{className:"text-sm text-gray-600",children:[I.recordings.length," recording",I.recordings.length!==1?"s":""]})]})]})}),i.jsx("div",{className:"p-6 space-y-4",children:I.recordings.map(W=>i.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsxs("div",{className:"flex-1",children:[i.jsx("h4",{className:"text-base font-semibold text-gray-900 mb-2",children:W.title}),i.jsx("p",{className:"text-sm text-gray-500",children:_(W.date)})]}),i.jsxs("a",{href:W.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"ml-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap",children:[i.jsx(dg,{className:"h-4 w-4"}),"Watch"]})]})},W.id))})]},b))})]})})}function EI(){const{subjectId:s}=xh(),[e,t]=A.useState([]),[n,r]=A.useState(null),[a,l]=A.useState(!0),[c,h]=A.useState(null);A.useEffect(()=>{s&&(async()=>{try{const v=Pe(xe,"subjects",s),N=await Oe(v);N.exists()&&r({id:s,...N.data()});const k=bi(ir(xe,"homeworks"),wi("subjectId","==",s)),R=(await _i(k)).docs.map(O=>({id:O.id,...O.data()}));t(R),l(!1)}catch(v){console.error("Error loading homework:",v),l(!1)}})()},[s]);const m=y=>y?(y.toDate?y.toDate():new Date(y)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"No due date",f=y=>y?(y.toDate?y.toDate():new Date(y))<new Date:!1;return a?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),i.jsx("p",{className:"mt-4 text-gray-600",children:"Loading homework..."})]})}):i.jsx("div",{className:"min-h-screen bg-gray-50",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs(he,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[i.jsx(ze,{className:"h-4 w-4"}),"Back to Dashboard"]}),i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[i.jsx(Gn,{className:"h-6 w-6 text-green-600"}),i.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Homework - ",(n==null?void 0:n.name)||"Subject"]})]}),i.jsx("p",{className:"text-gray-600",children:"Download your homework assignments."})]}),c?i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[i.jsxs("div",{className:"flex items-center justify-between mb-6",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:c.title}),i.jsx("button",{onClick:()=>{h(null)},className:"text-gray-600 hover:text-gray-900",children:"Close"})]}),c.description&&i.jsx("p",{className:"text-gray-600 mb-6",children:c.description}),i.jsxs("p",{className:"text-sm text-gray-500 mb-6",children:["Due: ",m(c.dueDate)]}),c.attachmentUrl&&i.jsxs("a",{href:c.attachmentUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6",children:[i.jsx(yc,{className:"h-5 w-5"}),"Download ",c.attachmentName||"homework file"]}),!c.attachmentUrl&&i.jsx("p",{className:"text-gray-600",children:"No homework file attached."})]}):i.jsx("div",{className:"space-y-4",children:e.length===0?i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[i.jsx(Gn,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),i.jsx("p",{className:"text-gray-600",children:"No homework assignments available yet."})]}):e.map(y=>{const v=f(y.dueDate);return i.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:i.jsxs("div",{className:"flex items-start justify-between mb-4",children:[i.jsxs("div",{className:"flex-1",children:[i.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:y.title}),y.description&&i.jsx("p",{className:"text-gray-600 mb-2",children:y.description}),y.attachmentUrl&&i.jsxs("a",{href:y.attachmentUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-2",children:[i.jsx(yc,{className:"h-4 w-4"}),"Download ",y.attachmentName||"homework file"]}),i.jsx("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:i.jsxs("div",{className:"flex items-center gap-1",children:[i.jsx(xo,{className:"h-4 w-4"}),"Due: ",m(y.dueDate)]})}),v&&i.jsx("div",{className:"mt-3 text-red-600 text-sm font-medium",children:"Overdue"})]}),i.jsx("button",{onClick:()=>h(y),className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"View Details"})]})},y.id)})})]})})}const II="myschola-5ec1f",NI=`https://us-central1-${II}.cloudfunctions.net`,uh=NI,TI=async()=>{const s=lt.currentUser;if(!s)throw new Error("User is not authenticated");return s.getIdToken()},yl=async(s,e)=>{if(!uh)throw new Error("Functions base URL is not configured");const t=await TI(),n=await fetch(`${uh}/${s}`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(e||{})});if(!n.ok){const r=await n.text();throw new Error(r||`Request failed (${n.status})`)}return n.json()},hh=s=>yl("createHidriveUpload",s),jI=s=>yl("createRecording",s),AI=s=>yl("createHomework",s);function SI(){const s=Lt(),[e,t]=A.useState(!1),[n,r]=A.useState(!0),[a,l]=A.useState([]),[c,h]=A.useState(""),[m,f]=A.useState(null),[y,v]=A.useState("recording"),[N,k]=A.useState(""),[P,R]=A.useState(null),[O,D]=A.useState(0),[B,J]=A.useState(""),[oe,te]=A.useState(""),[E,x]=A.useState([]),[g,w]=A.useState(""),[_,I]=A.useState(""),[b,W]=A.useState(""),[Z,V]=A.useState(null),[ie,M]=A.useState(0),[Q,me]=A.useState(!1),[De,_e]=A.useState("");A.useEffect(()=>{const q=Pi(lt,async G=>{if(!G){t(!1),r(!1),s("/login",{replace:!0});return}try{const le=await Oe(Pe(xe,"admins",G.uid)),ue=le.exists()?null:await Oe(Pe(xe,"teachers",G.uid));le.exists()||ue!=null&&ue.exists()?t(!0):(t(!1),s("/login",{replace:!0}))}catch(le){console.error("Error verifying role:",le),t(!1),s("/login",{replace:!0})}finally{r(!1)}});return()=>q()},[s]),A.useEffect(()=>{e&&(async()=>{try{const le=(await _i(ir(xe,"subjects"))).docs.map(ue=>({id:ue.id,...ue.data()}));if(l(le),le.length>0){const ue=le[0];h(ue.id),f(ue)}}catch(G){console.error("Error loading subjects:",G)}})()},[e]),A.useEffect(()=>{(async()=>{if(y==="approve"&&e)try{const G=bi(ir(xe,"recordings"),wi("approvalStatus","==","pending")),le=await _i(G),ue=await Promise.all(le.docs.map(async Ue=>{const fe=Ue.data();let ke="Unknown";if(fe.subjectId)try{const Be=await Oe(Ue(xe,"subjects",fe.subjectId));Be.exists()&&(ke=Be.data().name)}catch(Be){console.error("Error fetching subject:",Be)}return{id:Ue.id,...fe,subjectName:ke}}));x(ue)}catch(G){console.error("Error loading pending recordings:",G)}})()},[y,e]),A.useEffect(()=>{const q=a.find(G=>G.id===c);f(q||null),J(""),te("")},[c,a]);const Ze=()=>{var G;return m?(((G=m.name)==null?void 0:G.toLowerCase())||"").includes("english"):!1},nt=(q,G,le)=>new Promise((ue,Ue)=>{if(!(G!=null&&G.uploadUrl)){Ue(new Error("Upload URL is missing"));return}const fe=new XMLHttpRequest;fe.open(G.method||"PUT",G.uploadUrl,!0),fe.responseType="json",G.headers&&Object.entries(G.headers).forEach(([ke,Be])=>{Be&&fe.setRequestHeader(ke,Be)}),fe.upload.onprogress=ke=>{if(ke.lengthComputable){const Be=Math.round(ke.loaded/ke.total*100);le&&le(Be)}},fe.onload=()=>{if(fe.status>=200&&fe.status<300){le&&le(100);let ke=fe.response;if(!ke&&fe.responseText)try{ke=JSON.parse(fe.responseText)}catch{ke=null}ue({response:ke})}else Ue(new Error(`Upload failed (${fe.status})`))},fe.onerror=()=>{Ue(new Error("Upload failed"))},fe.send(q)}),mn=async q=>{if(q.preventDefault(),!c||!N||!B){_e("Please fill in all required fields");return}if(!P){_e("Please upload a video file to continue");return}if(!Ze()&&!oe){_e("Please select a tier (Foundation or Higher)");return}me(!0),_e("");try{D(0);const G=await hh({subjectId:c,fileName:P.name,contentType:P.type,uploadType:"recording"}),le=await nt(P,G,D),ue=le==null?void 0:le.response,Ue=(ue==null?void 0:ue.id)||(ue==null?void 0:ue.pid)||(ue==null?void 0:ue.file_id)||null,fe={subjectId:c,title:N,examBoard:B,tier:Ze()?null:oe,hidrivePath:G.hidrivePath,hidriveFileId:Ue,fileName:P.name};sessionStorage.setItem("pendingRecording",JSON.stringify(fe)),k(""),R(null),D(0),J(""),te(""),s("/admin/share-link",{state:{pendingRecording:fe}})}catch(G){console.error("Error adding recording:",G),_e("Failed to upload recording"),D(0)}finally{me(!1)}},fn=async q=>{try{await Zu(Pe(xe,"recordings",q),{approvalStatus:"approved",approvedAt:eh()}),x(E.filter(G=>G.id!==q)),_e("Recording approved successfully!"),setTimeout(()=>_e(""),3e3)}catch(G){console.error("Error approving recording:",G),_e("Failed to approve recording")}},pn=async q=>{try{await Zu(Pe(xe,"recordings",q),{approvalStatus:"rejected",rejectedAt:eh()}),x(E.filter(G=>G.id!==q)),_e("Recording rejected"),setTimeout(()=>_e(""),3e3)}catch(G){console.error("Error rejecting recording:",G),_e("Failed to reject recording")}},gn=async q=>{if(q.preventDefault(),!c||!g){_e("Please fill in all required fields");return}if(!Z){_e("Please upload a homework file");return}me(!0),_e("");try{let G=null,le=null,ue=null,Ue=null,fe=null;if(Z){M(0);const Be=await hh({subjectId:c,fileName:Z.name,contentType:Z.type,uploadType:"homework"}),ds=await nt(Z,Be,M),rt=ds==null?void 0:ds.response;le=(rt==null?void 0:rt.id)||(rt==null?void 0:rt.pid)||(rt==null?void 0:rt.file_id)||null,G=Be.hidrivePath,ue=Z.name,Ue=Z.type,fe=Z.size}const ke={subjectId:c,title:g,description:_,dueDate:b?new Date(b).toISOString():null,attachmentName:ue,attachmentContentType:Ue,attachmentSize:fe,hidrivePath:G,hidriveFileId:le,fileName:Z.name};sessionStorage.setItem("pendingHomework",JSON.stringify(ke)),w(""),I(""),W(""),V(null),M(0),s("/admin/homework-share-link",{state:{pendingHomework:ke}})}catch(G){console.error("Error adding homework:",G),_e("Failed to add homework")}finally{me(!1)}};return n?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),i.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):e?i.jsx("div",{className:"min-h-screen bg-gray-50",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Admin Panel"}),i.jsx("button",{onClick:async()=>{await lt.signOut(),s("/login",{replace:!0})},className:"text-gray-600 hover:text-gray-900 underline text-sm",children:"Sign out"})]})}),i.jsxs("div",{className:"flex gap-2 mb-6 flex-wrap",children:[i.jsxs("button",{onClick:()=>v("recording"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${y==="recording"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[i.jsx(Qs,{className:"h-4 w-4"}),"Add Recording"]}),i.jsxs("button",{onClick:()=>v("homework"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${y==="homework"?"bg-green-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[i.jsx(Gn,{className:"h-4 w-4"}),"Add Homework"]}),i.jsxs("button",{onClick:()=>v("approve"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition relative ${y==="approve"?"bg-purple-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[i.jsx(kt,{className:"h-4 w-4"}),"Approve Recordings",E.length>0&&i.jsx("span",{className:"ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5",children:E.length})]})]}),De&&i.jsx("div",{className:`mb-6 p-4 rounded-lg ${De.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:De}),i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Select Subject"}),i.jsx("select",{value:c,onChange:q=>h(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:a.map(q=>i.jsx("option",{value:q.id,children:q.name},q.id))})]}),y==="recording"&&i.jsxs("form",{onSubmit:mn,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Recording"}),i.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Recordings will be pending approval before students can view them."}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),i.jsx("input",{type:"text",value:N,onChange:q=>k(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"e.g., Algebra Basics - Lesson 1",required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Exam Board *"}),i.jsxs("select",{value:B,onChange:q=>J(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[i.jsx("option",{value:"",children:"Select Exam Board"}),i.jsx("option",{value:"AQA",children:"AQA"}),i.jsx("option",{value:"Edexcel",children:"Edexcel"})]})]}),!Ze()&&i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Tier *"}),i.jsxs("select",{value:oe,onChange:q=>te(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[i.jsx("option",{value:"",children:"Select Tier"}),i.jsx("option",{value:"Foundation",children:"Foundation"}),i.jsx("option",{value:"Higher",children:"Higher"})]})]}),Ze()&&i.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:i.jsx("p",{className:"text-sm text-blue-800",children:"English subjects do not have Foundation/Higher tiers."})}),i.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700",children:"After upload, you will be taken to a new page to paste the HiDrive share link."}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Upload Video File"}),i.jsx("input",{type:"file",accept:"video/*",onChange:q=>{var le;const G=((le=q.target.files)==null?void 0:le[0])||null;R(G),D(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),O>0&&O<100&&i.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",O,"%"]})]})]}),i.jsxs("button",{type:"submit",disabled:Q,className:"mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[i.jsx(xc,{className:"h-4 w-4"}),Q?"Adding...":"Add Recording (Pending Approval)"]})]}),y==="approve"&&i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Approve Recordings"}),i.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Review and approve pending recordings. Only approved recordings will be visible to students."}),E.length===0?i.jsxs("div",{className:"text-center py-8",children:[i.jsx(kt,{className:"h-12 w-12 text-green-500 mx-auto mb-4"}),i.jsx("p",{className:"text-gray-600",children:"No pending recordings to approve."})]}):i.jsx("div",{className:"space-y-4",children:E.map(q=>i.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsxs("div",{className:"flex-1",children:[i.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:q.title}),i.jsxs("div",{className:"space-y-1 text-sm text-gray-600",children:[i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Subject:"})," ",q.subjectName]}),i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",q.examBoard]}),q.tier&&i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Tier:"})," ",q.tier]}),q.date&&i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Date:"})," ",q.date.toDate?q.date.toDate().toLocaleDateString("en-GB"):"N/A"]})]}),i.jsxs("a",{href:q.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm mt-2",children:[i.jsx(Qs,{className:"h-4 w-4"}),"Preview Video"]})]}),i.jsxs("div",{className:"flex gap-2 ml-4",children:[i.jsxs("button",{onClick:()=>fn(q.id),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2",children:[i.jsx(kt,{className:"h-4 w-4"}),"Approve"]}),i.jsx("button",{onClick:()=>pn(q.id),className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition",children:"Reject"})]})]})},q.id))})]}),y==="homework"&&i.jsxs("form",{onSubmit:gn,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Homework"}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),i.jsx("input",{type:"text",value:g,onChange:q=>w(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Description"}),i.jsx("textarea",{value:_,onChange:q=>I(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",rows:"3"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Due Date"}),i.jsx("input",{type:"datetime-local",value:b,onChange:q=>W(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Homework File *"}),i.jsx("input",{type:"file",required:!0,onChange:q=>{var le;const G=((le=q.target.files)==null?void 0:le[0])||null;V(G),M(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"}),ie>0&&ie<100&&i.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",ie,"%"]})]}),i.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700",children:"After upload, you will be taken to a new page to paste the HiDrive share link."})]}),i.jsxs("button",{type:"submit",disabled:Q,className:"mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[i.jsx(xc,{className:"h-4 w-4"}),Q?"Adding...":"Add Homework"]})]})]})}):null}const Oa="pendingRecording";function kI(){const s=Lt(),e=cs(),[t,n]=A.useState(!0),[r,a]=A.useState(!1),[l,c]=A.useState(null),[h,m]=A.useState(""),[f,y]=A.useState(""),[v,N]=A.useState(""),[k,P]=A.useState(!1);A.useEffect(()=>{const O=Pi(lt,async D=>{if(!D){a(!1),n(!1),s("/login",{replace:!0});return}try{const B=await Oe(Pe(xe,"admins",D.uid)),J=B.exists()?null:await Oe(Pe(xe,"teachers",D.uid));B.exists()||J!=null&&J.exists()?a(!0):(a(!1),s("/login",{replace:!0}))}catch(B){console.error("Error verifying role:",B),a(!1),s("/login",{replace:!0})}finally{n(!1)}});return()=>O()},[s]),A.useEffect(()=>{var B;const O=(B=e.state)==null?void 0:B.pendingRecording;if(O){sessionStorage.setItem(Oa,JSON.stringify(O)),c(O);return}const D=sessionStorage.getItem(Oa);if(D)try{c(JSON.parse(D))}catch{c(null)}},[e.state]),A.useEffect(()=>{(async()=>{if(l!=null&&l.subjectId)try{const D=await Oe(Pe(xe,"subjects",l.subjectId));D.exists()&&m(D.data().name||"")}catch(D){console.error("Error loading subject:",D)}})()},[l]);const R=async O=>{if(O.preventDefault(),!l){N("No pending upload found. Go back and upload again.");return}if(!f){N("Paste the HiDrive share link to continue.");return}P(!0),N("");try{const D=await jI({subjectId:l.subjectId,title:l.title,examBoard:l.examBoard,tier:l.tier,videoUrl:f,hidrivePath:l.hidrivePath,hidriveFileId:l.hidriveFileId});sessionStorage.removeItem(Oa);const B=(D==null?void 0:D.approvalStatus)==="approved"?"Recording added and approved!":"Recording added successfully! It will be visible to students after approval.";N(B)}catch(D){console.error("Error saving recording:",D),N("Failed to save recording")}finally{P(!1)}};return t?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),i.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):r?l?i.jsx("div",{className:"min-h-screen bg-gray-50",children:i.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[i.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Paste HiDrive Share Link"}),i.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Your upload is complete. Create a share link in HiDrive and paste it below."})]}),i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[i.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Recording Details"}),i.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Title:"})," ",l.title]}),i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Subject:"})," ",h||l.subjectId]}),i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",l.examBoard]}),l.tier&&i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Tier:"})," ",l.tier]}),l.fileName&&i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"File:"})," ",l.fileName]})]})]}),i.jsxs("form",{onSubmit:R,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[i.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4",children:[i.jsx("p",{children:"1) Open HiDrive and find the uploaded file."}),i.jsx("p",{children:"2) Click Share -> Create link -> Copy link."}),i.jsx("p",{children:"3) Paste the link below and click Save Recording."})]}),i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HiDrive Share Link"}),i.jsx("input",{type:"url",value:f,onChange:O=>y(O.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://hidrive.ionos.com/lnk/...",required:!0}),v&&i.jsx("div",{className:`mt-4 p-3 rounded-md text-sm ${v.includes("successfully")||v.includes("approved")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:v}),i.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[i.jsx("button",{type:"submit",disabled:k,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:k?"Saving...":"Save Recording"}),i.jsx("button",{type:"button",onClick:()=>s("/admin"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Back to Admin"})]})]})]})}):i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center",children:[i.jsx("p",{className:"text-gray-700 mb-4",children:"No pending upload found. Please upload a file first."}),i.jsx("button",{onClick:()=>s("/admin",{replace:!0}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Back to Admin"})]})}):null}const Fa="pendingHomework";function CI(){const s=Lt(),e=cs(),[t,n]=A.useState(!0),[r,a]=A.useState(!1),[l,c]=A.useState(null),[h,m]=A.useState(""),[f,y]=A.useState(""),[v,N]=A.useState(""),[k,P]=A.useState(!1);A.useEffect(()=>{const O=Pi(lt,async D=>{if(!D){a(!1),n(!1),s("/login",{replace:!0});return}try{const B=await Oe(Pe(xe,"admins",D.uid)),J=B.exists()?null:await Oe(Pe(xe,"teachers",D.uid));B.exists()||J!=null&&J.exists()?a(!0):(a(!1),s("/login",{replace:!0}))}catch(B){console.error("Error verifying role:",B),a(!1),s("/login",{replace:!0})}finally{n(!1)}});return()=>O()},[s]),A.useEffect(()=>{var B;const O=(B=e.state)==null?void 0:B.pendingHomework;if(O){sessionStorage.setItem(Fa,JSON.stringify(O)),c(O);return}const D=sessionStorage.getItem(Fa);if(D)try{c(JSON.parse(D))}catch{c(null)}},[e.state]),A.useEffect(()=>{(async()=>{if(l!=null&&l.subjectId)try{const D=await Oe(Pe(xe,"subjects",l.subjectId));D.exists()&&m(D.data().name||"")}catch(D){console.error("Error loading subject:",D)}})()},[l]);const R=async O=>{if(O.preventDefault(),!l){N("No pending upload found. Go back and upload again.");return}if(!f){N("Paste the HiDrive share link to continue.");return}P(!0),N("");try{await AI({subjectId:l.subjectId,title:l.title,description:l.description,dueDate:l.dueDate||null,attachmentUrl:f,attachmentName:l.attachmentName||l.fileName||null,attachmentContentType:l.attachmentContentType||null,attachmentSize:l.attachmentSize||null,hidrivePath:l.hidrivePath,hidriveFileId:l.hidriveFileId}),sessionStorage.removeItem(Fa),N("Homework added successfully!")}catch(D){console.error("Error saving homework:",D),N("Failed to save homework")}finally{P(!1)}};return t?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),i.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):r?l?i.jsx("div",{className:"min-h-screen bg-gray-50",children:i.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[i.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Paste HiDrive Share Link"}),i.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Your upload is complete. Create a share link in HiDrive and paste it below."})]}),i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[i.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Homework Details"}),i.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Title:"})," ",l.title]}),i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Subject:"})," ",h||l.subjectId]}),l.dueDate&&i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Due:"})," ",new Date(l.dueDate).toLocaleString("en-GB")]}),l.fileName&&i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"File:"})," ",l.fileName]})]})]}),i.jsxs("form",{onSubmit:R,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[i.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4",children:[i.jsx("p",{children:"1) Open HiDrive and find the uploaded file."}),i.jsx("p",{children:"2) Click Share -> Create link -> Copy link."}),i.jsx("p",{children:"3) Paste the link below and click Save Homework."})]}),i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HiDrive Share Link"}),i.jsx("input",{type:"url",value:f,onChange:O=>y(O.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://hidrive.ionos.com/lnk/...",required:!0}),v&&i.jsx("div",{className:`mt-4 p-3 rounded-md text-sm ${v.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:v}),i.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[i.jsx("button",{type:"submit",disabled:k,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:k?"Saving...":"Save Homework"}),i.jsx("button",{type:"button",onClick:()=>s("/admin"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Back to Admin"})]})]})]})}):i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center",children:[i.jsx("p",{className:"text-gray-700 mb-4",children:"No pending upload found. Please upload a file first."}),i.jsx("button",{onClick:()=>s("/admin",{replace:!0}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Back to Admin"})]})}):null}function RI(){return A.useEffect(()=>{jg()},[]),i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center px-4",children:i.jsxs("div",{className:"max-w-md w-full text-center",children:[i.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 md:p-10",children:[i.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:i.jsx(kt,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})}),i.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Payment confirmed"}),i.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for your purchase. You will receive a confirmation email shortly with your receipt and next steps."}),i.jsxs(he,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",children:[i.jsx(ze,{className:"h-5 w-5","aria-hidden":"true"}),"Back to home"]})]}),i.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-gray-500",children:[i.jsx(Nt,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),i.jsx("span",{className:"text-sm",children:"MySchola"})]})]})})}function PI(){return A.useEffect(()=>{Ag(),Sg()},[]),i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center px-4",children:i.jsxs("div",{className:"max-w-md w-full text-center",children:[i.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 md:p-10",children:[i.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:i.jsx(Tp,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})}),i.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Booking confirmed"}),i.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for booking your free consultation. You will receive a confirmation email shortly with the meeting link and next steps."}),i.jsxs(he,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",children:[i.jsx(ze,{className:"h-5 w-5","aria-hidden":"true"}),"Back to home"]})]}),i.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-gray-500",children:[i.jsx(Nt,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),i.jsx("span",{className:"text-sm",children:"MySchola"})]})]})})}const DI=[0],VI=16,MI=0,dh=60,LI="Free GCSE Strategy Call",OI="Join our Free Flagship Live Webinar!",FI="Live GCSE strategy session for Maths, English, and Science â€” leave with a clear plan to raise grades fast.",UI="Zoom link shared after registration.",Ua="https://calendly.com/myscholaukwebinar/new-meeting?month=2026-03",BI="https://www.youtube.com/embed/nTwfvwF0juo?rel=0";function qI({src:s,className:e}){const t=A.useRef(null);return A.useEffect(()=>{const n=t.current;if(!n)return;const r=()=>{n.readyState>=2&&(n.currentTime=.01,n.pause())};return n.addEventListener("loadedmetadata",r),n.readyState<2?n.load():r(),()=>{n.removeEventListener("loadedmetadata",r)}},[s]),i.jsxs("video",{ref:t,className:e,controls:!0,playsInline:!0,preload:"metadata",children:[i.jsx("source",{src:s,type:"video/mp4"}),"Your browser does not support the video tag."]})}function $I(s=new Date){const e=[],t=[];DI.forEach(m=>{const f=new Date(s),y=(m-f.getDay()+7)%7;f.setDate(f.getDate()+y),f.setHours(VI,MI,0,0);const v=new Date(f);y===0&&f<=s&&v.setDate(v.getDate()+7),e.push(v);const N=new Date(f);f>s&&N.setDate(N.getDate()-7),t.push(N)});const n=e.reduce((m,f)=>f<m?f:m),r=t.reduce((m,f)=>f>m?f:m),a=new Date(r.getTime()+dh*6e4),l=s>=r&&s<a,c=l?r:n,h=new Date(c.getTime()+dh*6e4);return{start:c,end:h,isLive:l}}function mh(s){return s.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}Z$/,"Z")}function WI(s,e){return`https://calendar.google.com/calendar/render?${new URLSearchParams({action:"TEMPLATE",text:OI,details:FI,location:UI,dates:`${mh(s)}/${mh(e)}`}).toString()}`}function fh(){const s=$I(),[e,t]=A.useState(()=>typeof window>"u"?!1:window.localStorage.getItem("webinarReminder")==="true"),[n,r]=A.useState(0),a=[{src:Ai,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:ji,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:Ti,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:Ni,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:Ii,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],l=a.length,c=[...a,...a,...a],h=l,m=l*2,[f,y]=A.useState(h),[v,N]=A.useState(!0),[k,P]=A.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),[R,O]=A.useState(()=>typeof window>"u"?97:0);A.useEffect(()=>{typeof window>"u"||window.localStorage.setItem("webinarReminder",e?"true":"false")},[e]),A.useEffect(()=>{const V=()=>{const ie=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;P(ie)};return V(),window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[]),A.useEffect(()=>{if(f<h||f>=m){N(!1);const V=f<h?f+l:f-l;y(V),requestAnimationFrame(()=>{requestAnimationFrame(()=>N(!0))})}},[f,h,m,l]),A.useEffect(()=>{if(typeof window>"u")return;let V;const ie=2800,M=97,Q=window.performance?window.performance.now():Date.now(),me=De=>{const _e=De||Date.now(),Ze=Math.min((_e-Q)/ie,1),nt=Math.floor(Ze*M);O(nt),Ze<1&&(V=window.requestAnimationFrame(me))};return V=window.requestAnimationFrame(me),()=>{V&&window.cancelAnimationFrame(V)}},[]);const D=WI(s.start,s.end),B=V=>V===1?"Improved by 1 grade":`Improved by ${V} grades`,J=[{value:"95%",label:"Students improve grades",className:"bg-blue-600 text-blue-100"},{value:"2-3",label:"Grade improvement average",className:"bg-green-600 text-green-100"},{value:"300+",label:"Successful students",className:"bg-purple-600 text-purple-100"}],oe=[{stat:"5-10",statLabel:"hours a week",title:"Hours In",description:"Many students are already putting in serious revision time every single week.",icon:xo,iconClass:"bg-blue-600 text-white",statClass:"text-blue-700"},{stat:"4-5",statLabel:"grade plateau",title:"Grades Stuck",description:"Despite the effort, many stay stuck at Grade 4 or 5 and cannot break through.",icon:wh,iconClass:"bg-amber-500 text-white",statClass:"text-amber-700"},{stat:"Lost",statLabel:"marks in the exam",title:"Marks Lost",description:"Students often know the content, but still drop marks through weak structure and poor exam technique.",icon:Mp,iconClass:"bg-rose-500 text-white",statClass:"text-rose-700"}],te=[{title:"One-to-One Support",description:"Personalised lessons where your child only sees the tutor. Privacy-first, focus-first.",icon:qa},{title:"Via Zoom",description:"High-quality video, interactive whiteboard, and chat support for fast progress.",icon:_h},{title:"Student Privacy",description:"Webcam and microphone are optional. Parents can monitor engagement for peace of mind.",icon:bo}],E=[{step:"01",title:"Edexcel + AQA tracker",description:"Structured amber-light tracker to pinpoint strengths and gaps fast."},{step:"02",title:"Exemplar answers",description:"Techniques aligned directly to mark schemes so students know what earns marks and how to reach Grade 9."},{step:"03",title:"Exam practice + parent evenings",description:"Regular practice, progress reviews, and clear next steps to keep improvement steady."}],x="GCSE Strategy Call for Parents Who Want Faster Grade Growth",g="Exam technique. Clear diagnosis. Confidence. Results.",w=[{icon:Mr,label:"Results-focused"},{icon:Qr,label:"Exam strategy"},{icon:qa,label:"Parent clarity"},{icon:kt,label:"Action plan"}],_=[{eyebrow:"Pinpoint",title:"Why grades are stuck"},{eyebrow:"Plan",title:"What changes next"},{eyebrow:"Momentum",title:"How to move up faster"}],I=()=>{y(V=>V-1)},b=()=>{y(V=>V+1)},W=()=>{if(window.Calendly){window.Calendly.initPopupWidget({url:Ua});return}const V=document.createElement("script");V.src="https://assets.calendly.com/assets/external/widget.js",V.async=!0,V.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:Ua})},document.body.appendChild(V)},Z=[{q:"Who is this consultation call for?",a:"It is for parents of students in Years 9 to 11 who want clear support in GCSE Maths, English, or Science."},{q:"What happens on the consultation call?",a:"We talk through your child's current grade, the areas they are struggling with, how our lessons work, and the best next steps for improvement."},{q:"Do you offer a free trial lesson?",a:"Yes. If our tuition feels like the right fit after the consultation call, we can offer a free trial lesson so you can see how the teaching works before committing."}];return i.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50",children:[i.jsx("div",{className:"w-full bg-[#0B3D91] text-white py-3 px-4 shadow-md relative overflow-hidden",children:i.jsx("div",{className:"relative overflow-hidden",children:i.jsx("div",{className:"flex items-center gap-6 whitespace-nowrap animate-marquee-reverse text-sm sm:text-base md:text-lg font-bold",children:Array.from({length:3}).map((V,ie)=>i.jsxs("div",{className:"flex items-center gap-3 pr-6",children:[i.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs sm:text-sm uppercase tracking-wide",children:[i.jsxs("span",{className:"relative inline-flex h-2 w-2",children:[i.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75"}),i.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-white"})]}),"Attention"]}),i.jsx("span",{children:"Parents of GCSE Years 9, 10 & 11 students"}),i.jsx("span",{className:"text-white/80",children:"|"}),i.jsx("span",{className:"text-white/90",children:"Spaces are running out - join this month's cohort"})]},`banner-${ie}`))})})}),i.jsx("div",{className:"max-w-6xl mx-auto px-4 py-16 sm:py-20",children:i.jsxs("div",{className:"bg-white/90 rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden",children:[i.jsx("div",{className:"pointer-events-none absolute -top-32 -right-24 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl"}),i.jsx("div",{className:"pointer-events-none absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"}),i.jsxs("div",{className:"relative z-10",children:[i.jsx("div",{className:"flex justify-center",children:i.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-4 py-2 text-blue-700 font-semibold text-sm uppercase tracking-wide shadow-sm",children:[i.jsx(gc,{className:"h-4 w-4","aria-hidden":"true"}),LI]})}),i.jsxs("div",{className:"mt-6 text-center",children:[i.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900",children:x}),i.jsx("p",{className:"mt-4 text-lg sm:text-xl font-semibold text-slate-600",children:g})]}),i.jsx("div",{className:"mt-8 flex flex-wrap items-center justify-center gap-3",children:w.map(({icon:V,label:ie})=>i.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm",children:[i.jsx(V,{className:"h-4 w-4 text-blue-600","aria-hidden":"true"}),i.jsx("span",{children:ie})]},ie))}),i.jsx("div",{className:"mt-8 w-full rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-6 sm:p-8 shadow-[0_24px_60px_rgba(37,99,235,0.12)]",children:i.jsxs("div",{className:"flex flex-col items-center gap-5 text-center",children:[i.jsxs("span",{className:"inline-flex w-fit items-center gap-2 rounded-full bg-red-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700",children:[i.jsx(Dn,{className:"h-4 w-4","aria-hidden":"true"}),"Limited spaces this month"]}),i.jsx("h3",{className:"max-w-4xl text-3xl leading-tight sm:text-4xl font-bold text-slate-900",children:"Short call. Sharp diagnosis. Clear next steps."}),i.jsx("p",{className:"max-w-3xl text-base sm:text-lg font-semibold text-slate-600",children:"We guarantee to boost your child's grades by 2-3 with the right strategy, structure, and support."}),i.jsx("div",{className:"w-full max-w-3xl rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-100 via-white to-lime-50 p-5 shadow-[0_20px_55px_rgba(16,185,129,0.18)]",children:i.jsxs("div",{className:"flex flex-col items-center gap-2",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white",children:[i.jsx(Mr,{className:"h-4 w-4","aria-hidden":"true"}),"Money-back promise"]}),i.jsx("p",{className:"text-lg sm:text-2xl font-extrabold text-slate-900",children:"Follow the system. No improvement. Full refund."})]})}),i.jsxs("button",{type:"button",onClick:W,className:"group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 px-8 sm:px-12 py-4 sm:py-5 text-white text-lg sm:text-xl font-extrabold ring-2 ring-blue-300/40 hover:shadow-2xl hover:-translate-y-0.5 transition overflow-hidden cta-button",children:[i.jsx("span",{className:"cta-shimmer","aria-hidden":"true"}),i.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition","aria-hidden":"true"}),i.jsxs("span",{className:"relative inline-flex items-center gap-2",children:[i.jsx(Dn,{className:"h-5 w-5 text-white/90","aria-hidden":"true"}),"Book Free Strategy Call"]})]})]})}),i.jsx("div",{className:"mt-6 grid gap-4 sm:grid-cols-3",children:_.map(V=>i.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white/90 p-5 text-center shadow-sm",children:[i.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-blue-700",children:V.eyebrow}),i.jsx("p",{className:"mt-2 text-lg font-semibold text-slate-900",children:V.title})]},V.title))}),i.jsxs("div",{className:"mt-6 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-5 sm:p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]",children:[i.jsxs("div",{className:"text-center",children:[i.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700",children:[i.jsx(Dn,{className:"h-4 w-4","aria-hidden":"true"}),"Founder walkthrough"]}),i.jsx("h3",{className:"mt-4 text-2xl sm:text-3xl font-black tracking-tight text-slate-900 text-center",children:"See the MySchola method"}),i.jsx("p",{className:"mt-3 text-sm sm:text-base font-semibold text-slate-600 text-center",children:"Strategy. Structure. Grade momentum."}),i.jsxs("div",{className:"mt-4 flex flex-wrap items-center justify-center gap-2",children:[i.jsx("span",{className:"rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm",children:"Exam technique"}),i.jsx("span",{className:"rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm",children:"Parent clarity"}),i.jsx("span",{className:"rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm",children:"Grade growth"})]})]}),i.jsx("div",{className:"mt-4 overflow-hidden rounded-2xl border border-slate-100 bg-black",style:{aspectRatio:"16 / 9"},children:i.jsx("iframe",{className:"h-full w-full",src:BI,title:"Tuition overview video",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})}),i.jsx("div",{className:"mt-6 flex justify-center",children:i.jsxs("button",{type:"button",onClick:W,className:"group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 px-12 py-6 text-white text-2xl font-extrabold ring-2 ring-blue-300/40 hover:shadow-2xl hover:-translate-y-0.5 transition overflow-hidden cta-button",children:[i.jsx("span",{className:"cta-shimmer","aria-hidden":"true"}),i.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition","aria-hidden":"true"}),i.jsxs("span",{className:"relative inline-flex items-center gap-2",children:[i.jsx(Dn,{className:"h-5 w-5 text-white/90","aria-hidden":"true"}),"Yes, I Want to Book a Call With MySchola"]})]})}),i.jsxs("div",{className:"mt-8",children:[i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx("div",{className:"h-px flex-1 bg-slate-200"}),i.jsx("span",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wide",children:"Or book directly below"}),i.jsx("div",{className:"h-px flex-1 bg-slate-200"})]}),i.jsx("div",{className:"mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white",style:{minHeight:"700px"},children:i.jsx("iframe",{src:`${Ua}&embed_type=Inline`,className:"h-full w-full",style:{minHeight:"700px"},title:"Book your strategy call",frameBorder:"0",loading:"lazy"})})]})]}),i.jsxs("div",{className:"mt-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 sm:p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]",children:[i.jsxs("div",{className:"grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_320px] lg:items-start",children:[i.jsxs("div",{children:[i.jsx("span",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700",children:"The gaps we fix"}),i.jsx("h3",{className:"mt-4 max-w-3xl text-2xl sm:text-3xl font-bold text-gray-900",children:"The three core problems we solve at MySchola:"}),i.jsx("p",{className:"mt-3 max-w-2xl text-base sm:text-lg text-gray-600",children:"Many students are already working hard. The real issue is that their effort is not translating into marks in the exam."})]}),i.jsxs("div",{className:"rounded-3xl border border-blue-100 bg-white p-5 shadow-lg",children:[i.jsx("div",{className:"text-xs font-semibold uppercase tracking-wide text-blue-700",children:"The real gap"}),i.jsx("p",{className:"mt-3 text-xl sm:text-2xl font-bold text-gray-900",children:"The jump from Grade 5 to Grade 9 usually comes down to strategy."}),i.jsx("p",{className:"mt-3 text-sm sm:text-base text-gray-600",children:"It is answer structure, exam technique, and knowing exactly how to turn subject knowledge into marks."})]})]}),i.jsx("div",{className:"mt-8 grid gap-4 md:grid-cols-3",children:oe.map((V,ie)=>{const M=V.icon;return i.jsxs("div",{className:"consultation-problem-card group rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl",style:{animationDelay:`${ie*140}ms`},children:[i.jsxs("div",{className:"flex items-start justify-between gap-4",children:[i.jsx("div",{className:`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${V.iconClass} shadow-lg`,children:i.jsx(M,{className:"h-5 w-5","aria-hidden":"true"})}),i.jsxs("div",{className:"text-right",children:[i.jsx("div",{className:`text-3xl sm:text-4xl font-black tracking-tight ${V.statClass}`,children:V.stat}),i.jsx("div",{className:"text-xs font-semibold text-gray-500",children:V.statLabel})]})]}),i.jsx("h4",{className:"mt-6 text-lg sm:text-xl font-semibold text-gray-900",children:V.title}),i.jsx("p",{className:"mt-3 text-sm sm:text-base text-gray-600",children:V.description})]},V.title)})}),i.jsx("div",{className:"mt-6 rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-blue-50 p-5 sm:p-6",children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg",children:i.jsx(Qr,{className:"h-5 w-5","aria-hidden":"true"})}),i.jsxs("div",{children:[i.jsx("p",{className:"text-lg sm:text-xl font-bold text-gray-900",children:"Our tuition is built to solve the exact reasons students stay stuck."}),i.jsx("p",{className:"mt-2 text-sm sm:text-base text-gray-600",children:"We focus on exam technique, answer structure, and smarter revision habits so students can turn effort into measurable grade improvement."})]})]})})]}),i.jsxs("div",{className:"mt-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50/60 p-6 sm:p-8 shadow-sm",children:[i.jsxs("div",{className:"max-w-4xl",children:[i.jsx("span",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700",children:"What we do differently"}),i.jsx("h3",{className:"mt-4 text-2xl sm:text-3xl font-bold text-gray-900",children:"Why families choose our tuition over other options"}),i.jsx("p",{className:"mt-3 text-base sm:text-lg text-gray-600",children:"We combine strong teaching, progress tracking, homework support, and clear exam preparation in one structured programme."})]}),i.jsx("div",{className:"mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm",children:i.jsx("img",{src:vh,alt:"Comparison table showing what MySchola does differently compared with other providers and one-to-one home tutors",className:"w-full h-auto object-contain",loading:"lazy"})})]}),i.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-3",children:J.map(V=>i.jsxs("div",{className:`rounded-2xl p-5 text-center shadow-md ${V.className}`,children:[i.jsx("div",{className:"text-3xl sm:text-4xl font-bold text-white",children:V.value}),i.jsx("div",{className:"mt-2 text-sm font-semibold",children:V.label})]},V.value))}),i.jsx("p",{className:"text-xs text-gray-500 mt-3",children:"Results based on historical performance. Individual outcomes vary."}),!1,i.jsxs("div",{className:"mt-8 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/60 p-8 sm:p-10 shadow-sm",children:[i.jsxs("div",{className:"flex flex-col gap-3",children:[i.jsx("span",{className:"inline-flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700",children:"What to expect"}),i.jsxs("h3",{className:"text-3xl sm:text-4xl font-bold text-gray-900",children:["A clear plan for measurable GCSE gains to",i.jsx("span",{className:"ml-2 text-emerald-600 text-3xl sm:text-4xl font-extrabold underline decoration-emerald-300 decoration-4 underline-offset-4 animate-soft-glow",children:"Grade 9"})]}),i.jsx("p",{className:"text-lg sm:text-xl text-gray-700 max-w-2xl",children:"Three focused steps we deliver in our lessons so families leave with a concrete action plan."})]}),i.jsx("div",{className:"mt-6 grid gap-4 md:grid-cols-3",children:E.map(V=>i.jsxs("div",{className:"rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white",children:V.step}),i.jsx("h4",{className:"text-lg sm:text-xl font-semibold text-gray-900",children:V.title})]}),i.jsx("p",{className:"mt-3 text-base sm:text-lg text-gray-700",children:V.description})]},V.step))}),i.jsxs("div",{className:"mt-6 flex items-center gap-2 text-base sm:text-lg font-semibold text-emerald-700",children:[i.jsx(kt,{className:"h-5 w-5","aria-hidden":"true"}),"Live examples and Q&A included"]})]}),i.jsxs("div",{className:"mt-10 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-10 shadow-lg",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700",children:[i.jsx(Dn,{className:"h-3.5 w-3.5","aria-hidden":"true"}),"Parents love this session"]}),i.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-gray-900 mt-3",children:"Reserve your spot now"}),i.jsx("p",{className:"text-gray-700 mt-2 max-w-2xl text-base sm:text-lg",children:"Book in under a minute and get the private Zoom link plus the follow-up resources."})]}),i.jsx("div",{className:"flex items-center justify-center",children:i.jsx("div",{className:"relative rounded-3xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 p-[2px] shadow-lg",children:i.jsxs("div",{className:"relative flex items-center gap-4 rounded-[22px] bg-white px-7 py-5 overflow-hidden",children:[i.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-60",children:i.jsx("div",{className:"absolute -left-1/3 top-0 h-full w-1/2 rotate-6 bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent animate-pulse"})}),i.jsxs("span",{className:"absolute -top-2 -right-2 inline-flex h-4 w-4",children:[i.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),i.jsx("span",{className:"relative inline-flex h-4 w-4 rounded-full bg-emerald-500"})]}),i.jsxs("div",{className:"relative text-4xl sm:text-5xl font-extrabold text-emerald-600 tracking-tight drop-shadow-sm animate-pulse",children:[R,"%"]}),i.jsx("div",{className:"relative text-base sm:text-lg font-semibold text-gray-800",children:"of parents recommend us"})]})})})]}),i.jsx("div",{className:"mt-6 grid gap-3 sm:grid-cols-3",children:["Clear consultation with real examples","Action plan you can use immediately"].map(V=>i.jsxs("div",{className:"flex items-start gap-2 rounded-xl bg-white/80 px-4 py-3 text-sm font-semibold text-gray-700",children:[i.jsx(kt,{className:"mt-0.5 h-4 w-4 text-emerald-600","aria-hidden":"true"}),i.jsx("span",{children:V})]},V))}),i.jsxs("div",{className:"mt-8",children:[i.jsx("button",{type:"button",onClick:W,className:"inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-8 py-5 text-white text-xl font-bold shadow-xl hover:bg-blue-700 transition",children:"Yes, I Want to Book a Call With MySchola"}),i.jsx("p",{className:"text-xs text-gray-500 mt-3 text-center",children:"Secure Calendly pop-up. No card required."})]}),i.jsxs("div",{className:"mt-6 flex flex-wrap gap-3",children:[i.jsxs("a",{href:D,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition",children:[i.jsx(gc,{className:"h-4 w-4","aria-hidden":"true"}),"Add to Google Calendar"]}),i.jsxs("button",{type:"button",onClick:()=>t(V=>!V),className:`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${e?"border-green-200 text-green-700 bg-green-50":"border-gray-200 text-gray-700 hover:bg-gray-50"}`,children:[i.jsx(bp,{className:"h-4 w-4","aria-hidden":"true"}),e?"Reminder set":"Set a reminder"]})]})]}),i.jsxs("div",{className:"mt-12 rounded-3xl border border-gray-200 bg-white p-8",children:[i.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700",children:[i.jsx(Mr,{className:"h-4 w-4","aria-hidden":"true"}),"From our main tutoring programme"]}),i.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-900 mt-4",children:"How MySchola lessons work"}),i.jsx("p",{className:"text-gray-600 mt-2",children:"These are the same methods used in our full tutoring programme, adapted for this webinar."})]}),i.jsx("div",{className:"mt-8 grid gap-6 md:grid-cols-3",children:te.map(V=>{const ie=V.icon;return i.jsxs("div",{className:"rounded-2xl border border-blue-100 bg-blue-50/60 p-6 text-left shadow-sm",children:[i.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white",children:i.jsx(ie,{className:"h-6 w-6","aria-hidden":"true"})}),i.jsx("h3",{className:"mt-4 text-lg font-semibold text-gray-900",children:V.title}),i.jsx("p",{className:"mt-2 text-sm text-gray-600",children:V.description})]},V.title)})})]}),i.jsxs("div",{className:"mt-12 rounded-3xl border border-gray-200 bg-white p-8",children:[i.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[i.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-900",children:"Our tutors study at the UK's most prestigious universities"}),i.jsx("p",{className:"text-gray-600 mt-2 max-w-3xl mx-auto",children:"Learn from the best to achieve your best."})]}),i.jsx("div",{className:"relative overflow-hidden mt-8",children:i.jsxs("div",{className:"flex animate-marquee",children:[[{src:Yr,alt:"University of Nottingham",name:"Nottingham"},{src:Jr,alt:"King's College London",name:"King's College"},{src:Xr,alt:"University of Cambridge",name:"Cambridge"},{src:Zr,alt:"Imperial College London",name:"Imperial"},{src:ei,alt:"University of Warwick",name:"Warwick"}].map((V,ie)=>i.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:i.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-32 sm:h-40 lg:h-44 w-56 sm:w-64 lg:w-72 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:i.jsx("img",{src:V.src,alt:V.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`first-${ie}`)),[{src:Yr,alt:"University of Nottingham",name:"Nottingham"},{src:Jr,alt:"King's College London",name:"King's College"},{src:Xr,alt:"University of Cambridge",name:"Cambridge"},{src:Zr,alt:"Imperial College London",name:"Imperial"},{src:ei,alt:"University of Warwick",name:"Warwick"}].map((V,ie)=>i.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:i.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-32 sm:h-40 lg:h-44 w-56 sm:w-64 lg:w-72 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:i.jsx("img",{src:V.src,alt:V.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`second-${ie}`))]})})]}),i.jsx("div",{className:"mt-12 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-blue-50/70 p-8",children:i.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[i.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-900",children:"Video testimonials"}),i.jsx("p",{className:"text-gray-600 mt-2",children:"Hear directly from students and parents about their progress."}),i.jsxs("div",{className:"relative mt-10 sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[i.jsx("button",{type:"button",onClick:I,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:i.jsx(ze,{className:"h-5 w-5","aria-hidden":"true"})}),i.jsx("div",{className:"overflow-hidden sm:col-start-2",children:i.jsx("div",{className:`flex ${v?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${f*(100/k)}%)`},children:c.map((V,ie)=>{const M=Math.floor(k/2),Q=ie===f+M;return i.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/k}%`},children:i.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${Q?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[i.jsx(qI,{src:V.src,className:"w-full h-auto rounded-t-2xl"}),i.jsxs("div",{className:"p-4 text-center",children:[i.jsx("p",{className:"text-lg font-semibold text-gray-900",children:V.name}),i.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[i.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:V.subjects.join(" / ")}),i.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:B(V.improvedBy)})]})]})]})},`${V.id}-${ie}`)})})}),i.jsx("button",{type:"button",onClick:b,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:i.jsx(at,{className:"h-5 w-5","aria-hidden":"true"})}),i.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[i.jsx("button",{type:"button",onClick:I,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:i.jsx(ze,{className:"h-5 w-5","aria-hidden":"true"})}),i.jsx("button",{type:"button",onClick:b,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:i.jsx(at,{className:"h-5 w-5","aria-hidden":"true"})})]})]})]})}),i.jsxs("div",{className:"mt-10 rounded-2xl border border-gray-200 p-6",children:[i.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Quick FAQ"}),i.jsx("div",{className:"space-y-3",children:Z.map((V,ie)=>i.jsxs("div",{className:"border border-gray-100 rounded-xl",children:[i.jsxs("button",{type:"button",onClick:()=>r(n===ie?-1:ie),className:"w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-gray-900","aria-expanded":n===ie,children:[V.q,i.jsx("span",{className:"text-blue-600",children:n===ie?"-":"+"})]}),n===ie&&i.jsx("div",{className:"px-4 pb-4 text-sm text-gray-600",children:V.a})]},V.q))})]}),i.jsx("div",{className:"mt-10",children:i.jsxs(he,{to:"/",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold",children:[i.jsx(ze,{className:"h-4 w-4","aria-hidden":"true"}),"Back to home"]})})]})]})})]})}const HI="myscholauk@gmail.com",zI="447344193804",ph=`https://wa.me/${zI}`;function gh(){const s=cs(),e=s.state&&s.state.fromRegistration,t=typeof window<"u"&&window.sessionStorage.getItem("strategyCallRegistered")==="true",n=!!(e||t),r=`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(ph)}`;return A.useEffect(()=>{var a,l;typeof window>"u"||(l=(a=window.Calendly)==null?void 0:a.closePopupWidget)==null||l.call(a)},[]),i.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50",children:i.jsx("div",{className:"mx-auto max-w-5xl px-4 py-16 sm:py-20",children:i.jsxs("div",{className:"overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 shadow-[0_30px_80px_rgba(15,23,42,0.08)]",children:[i.jsxs("div",{className:"bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400 px-8 py-10 text-white sm:px-10",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-semibold",children:[i.jsx(kt,{className:"h-4 w-4","aria-hidden":"true"}),"Booking confirmed"]}),i.jsx("h1",{className:"mt-4 text-3xl font-bold sm:text-4xl",children:"Your MySchola strategy call is booked."}),i.jsx("p",{className:"mt-3 max-w-3xl text-base text-white/90 sm:text-lg",children:"Check the email you used to book. Your confirmation contains your scheduled time, your private Zoom link, and your reschedule options."})]}),i.jsxs("div",{className:"px-8 py-8 sm:px-10 sm:py-10",children:[n?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"grid gap-4 lg:grid-cols-3",children:[i.jsxs("div",{className:"rounded-3xl border border-slate-200 bg-slate-50 p-6",children:[i.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-600",children:[i.jsx(Kr,{className:"h-4 w-4 text-blue-600","aria-hidden":"true"}),"Confirmation email"]}),i.jsx("p",{className:"mt-3 text-lg font-bold text-gray-900",children:"Check your inbox first"}),i.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Search for your booking confirmation from MySchola or Calendly if it has not appeared yet."})]}),i.jsxs("div",{className:"rounded-3xl border border-blue-200 bg-blue-50 p-6",children:[i.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-blue-700",children:[i.jsx(Qs,{className:"h-4 w-4","aria-hidden":"true"}),"Private Zoom link"]}),i.jsx("p",{className:"mt-3 text-lg font-bold text-gray-900",children:"Your Zoom link is in the confirmation email"}),i.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Use the private Zoom link in that email at your booked time. If you cannot find it, message us and we will resend the details."})]}),i.jsxs("div",{className:"rounded-3xl border border-emerald-200 bg-emerald-50 p-6",children:[i.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-700",children:[i.jsx(kt,{className:"h-4 w-4","aria-hidden":"true"}),"Before the call"]}),i.jsx("p",{className:"mt-3 text-lg font-bold text-gray-900",children:"Come ready with your child's current grades and main concerns"}),i.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"We will use the call to identify the main barriers, map out the right support, and show you exactly how our programme works."})]})]}),i.jsxs("div",{className:"mt-8 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 sm:p-8",children:[i.jsxs("div",{className:"max-w-3xl",children:[i.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.2em] text-blue-700",children:"Need the details quickly?"}),i.jsx("h2",{className:"mt-3 text-2xl font-bold text-gray-900 sm:text-3xl",children:"Everything you need for your strategy call is below."}),i.jsx("p",{className:"mt-3 text-base text-gray-600 sm:text-lg",children:"If you need help before the call, contact us on WhatsApp or email and we will get back to you as quickly as possible."})]}),i.jsxs("div",{className:"mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_320px]",children:[i.jsxs("div",{className:"grid gap-4",children:[i.jsxs("div",{className:"rounded-3xl border border-green-200 bg-white p-6 shadow-sm",children:[i.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-green-700",children:[i.jsx(Ye,{className:"h-4 w-4","aria-hidden":"true"}),"WhatsApp"]}),i.jsx("p",{className:"mt-3 text-xl font-bold text-gray-900",children:"Message us directly on WhatsApp"}),i.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Use WhatsApp if you need us to resend your booking details or help you locate the Zoom link before the call."}),i.jsxs("a",{href:ph,target:"_blank",rel:"noopener noreferrer",className:"mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700",children:["Open WhatsApp chat",i.jsx(at,{className:"h-4 w-4","aria-hidden":"true"})]}),i.jsx("p",{className:"mt-3 text-sm font-semibold text-gray-700",children:"WhatsApp: +44 7344 193804"})]}),i.jsxs("div",{className:"rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",children:[i.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-700",children:[i.jsx(Kr,{className:"h-4 w-4 text-blue-600","aria-hidden":"true"}),"Email"]}),i.jsx("p",{className:"mt-3 text-xl font-bold text-gray-900",children:"myscholauk@gmail.com"}),i.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"If you prefer email, contact us here and we can resend your confirmation details or answer any questions before the call."}),i.jsxs("a",{href:`mailto:${HI}`,className:"mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50",children:["Email MySchola",i.jsx(at,{className:"h-4 w-4","aria-hidden":"true"})]})]})]}),i.jsxs("div",{className:"rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-green-700",children:[i.jsx(Ye,{className:"h-4 w-4","aria-hidden":"true"}),"WhatsApp QR code"]}),i.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Scan this code on your phone to open a WhatsApp chat with MySchola."}),i.jsx("img",{src:r,alt:"WhatsApp QR code for MySchola",className:"mx-auto mt-5 h-52 w-52 rounded-2xl border border-slate-100",loading:"lazy"})]})]})]})]}):i.jsxs("div",{className:"rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8",children:[i.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.2em] text-amber-700",children:"No booking found"}),i.jsx("h2",{className:"mt-3 text-2xl font-bold text-gray-900",children:"Book your strategy call first to view the confirmation details."}),i.jsx("p",{className:"mt-3 max-w-2xl text-sm text-gray-700 sm:text-base",children:"Once you complete your booking, this page will show the next-step details for your Zoom call, along with the WhatsApp and email contact options."})]}),i.jsxs("div",{className:"mt-10 flex flex-wrap gap-4",children:[i.jsx(he,{to:"/book-strategy-call",className:"inline-flex items-center justify-center rounded-full border border-gray-200 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50",children:"Back to strategy call page"}),i.jsx(he,{to:"/",className:"inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700",children:"Back to home"})]})]})]})})})}function GI({src:s,className:e}){const t=A.useRef(null);return A.useEffect(()=>{const n=t.current;if(!n)return;const r=()=>{n.readyState>=2&&(n.currentTime=.01,n.pause())};return n.addEventListener("loadedmetadata",r),n.readyState<2?n.load():r(),()=>{n.removeEventListener("loadedmetadata",r)}},[s]),i.jsxs("video",{ref:t,className:e,controls:!0,playsInline:!0,preload:"metadata",children:[i.jsx("source",{src:s,type:"video/mp4"}),"Your browser does not support the video tag."]})}function KI(){const s=Lt(),[e,t]=A.useState(!1),[n,r]=A.useState(9),[a,l]=A.useState(2),[c,h]=A.useState(!0),[m,f]=A.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),y=[{src:Ai,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:ji,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:Ti,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:Ni,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:Ii,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],v=y.length,N=[...y,...y,...y],k=v,P=v*2;A.useEffect(()=>{const w=()=>{const _=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;f(_)};return w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[]),A.useEffect(()=>{if(a<k||a>=P){h(!1);const w=a<k?a+v:a-v;l(w),requestAnimationFrame(()=>{requestAnimationFrame(()=>h(!0))})}},[a,k,P,v]);const R=w=>w===1?"Improved by 1 grade":`Improved by ${w} grades`,O=()=>{l(w=>w-1)},D=()=>{l(w=>w+1)},B=()=>{const w="https://calendly.com/admin-myschola/30min";if(window.Calendly)window.Calendly.initPopupWidget({url:w,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0});else{const _=document.createElement("script");_.src="https://assets.calendly.com/assets/external/widget.js",_.async=!0,_.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:w,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0})},document.body.appendChild(_),setTimeout(()=>{window.Calendly||window.open(w,"_blank","noopener,noreferrer")},1e3)}},J=()=>{$a(),s("/booking",{replace:!1}),B()},[oe,te]=A.useState(""),E="Building Strong Foundations for GCSE Success",x=80;A.useEffect(()=>{let w=0,_=!0;const I=setInterval(()=>{_?w<=E.length?(te(E.slice(0,w)),w++):(_=!1,setTimeout(()=>{},2e3)):w>0?(te(E.slice(0,w)),w--):_=!0},x);return()=>clearInterval(I)},[]);const g=w=>{s(`/package?year=${w}`)};return i.jsxs("div",{className:"min-h-screen bg-white",children:[i.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),i.jsx("div",{className:"w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md",children:"Join our March cohort as soon as possible — spaces are running out!"}),i.jsxs("nav",{className:"sticky top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center h-16",children:[i.jsxs("div",{className:"flex items-center",children:[i.jsx(Nt,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),i.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),i.jsx("div",{className:"hidden md:flex justify-center",children:i.jsxs("div",{className:"flex items-center space-x-8",children:[i.jsx(he,{to:"/",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),i.jsx(he,{to:"/courses",className:"text-blue-600 font-semibold",children:"Courses"}),i.jsx("a",{href:"/#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),i.jsx("a",{href:"/#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),i.jsx("a",{href:"/#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"})]})}),i.jsxs("div",{className:"flex items-center justify-end",children:[i.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[i.jsx(he,{to:"/login",className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center","aria-label":"Log in",children:"Log In"}),i.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Qt,className:"bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2","aria-label":"Contact us on WhatsApp",children:[i.jsx(Ye,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})]}),i.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>t(!e),"aria-label":e?"Close menu":"Open menu","aria-expanded":e,"aria-controls":"mobile-menu",children:e?i.jsx(_o,{className:"h-6 w-6","aria-hidden":"true"}):i.jsx(wo,{className:"h-6 w-6","aria-hidden":"true"})})]})]})}),e&&i.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:i.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[i.jsx(he,{to:"/",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),i.jsx(he,{to:"/courses",className:"block px-3 py-2 text-blue-600 font-semibold bg-blue-50",role:"menuitem",children:"Courses"}),i.jsx("a",{href:"/#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),i.jsx("a",{href:"/#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),i.jsx("a",{href:"/#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),i.jsx(he,{to:"/login",className:"block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",role:"menuitem",children:"Log In"}),i.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Qt,className:"block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2","aria-label":"Contact us on WhatsApp",role:"menuitem",children:i.jsxs("span",{className:"inline-flex items-center gap-2",children:[i.jsx(Ye,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})})]})})]}),i.jsxs("main",{id:"main-content",children:[i.jsx("section",{className:"pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Courses hero section",children:i.jsxs("div",{className:"max-w-7xl mx-auto text-center",children:[i.jsxs("h1",{className:"text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-12 tracking-tight",children:["Select your ",i.jsx("span",{className:"text-blue-600",children:"year group"}),":"]}),i.jsx("div",{className:"flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8",children:[9,10,11].map(w=>i.jsxs("button",{onClick:()=>g(w),className:"w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-6 rounded-xl font-bold text-xl sm:text-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 bg-white text-gray-800 border-4 border-gray-200 hover:border-blue-500 hover:text-blue-600 hover:shadow-xl hover:scale-105 active:scale-95 focus:ring-blue-400 cursor-pointer touch-manipulation min-h-[80px] sm:min-h-[90px] flex items-center justify-center","aria-label":`Select Year ${w}`,children:["Year ",w]},w))}),i.jsxs("p",{className:"text-lg sm:text-xl text-blue-600 font-medium min-h-[1.75rem]",children:[oe,i.jsx("span",{className:"animate-pulse",children:"|"})]})]})}),i.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8","aria-labelledby":"course-content-heading",children:i.jsx("div",{className:"max-w-7xl mx-auto",children:i.jsxs("div",{className:"bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 sm:p-12 text-white",children:[i.jsx("h3",{className:"text-2xl sm:text-3xl font-bold mb-8 text-center",children:"What's included"}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[i.jsx("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6",children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"bg-white/20 rounded-lg p-3 flex-shrink-0",children:i.jsx(rg,{className:"h-6 w-6 text-white"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-xl font-semibold mb-2",children:"Live Online Small Group Lessons"}),i.jsxs("p",{className:"text-blue-100 leading-relaxed",children:["Our lessons cover the ",i.jsx("strong",{className:"text-white",children:"breadth of each topic"}),", methodically building on key concepts taught by our ",i.jsx("strong",{className:"text-white",children:"specialist teachers with at least 8 years of teaching experience"}),". Each lesson is ",i.jsx("strong",{className:"text-white",children:"1 hour long"}),"."]})]})]})}),i.jsx("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6",children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"bg-white/20 rounded-lg p-3 flex-shrink-0",children:i.jsx(wh,{className:"h-6 w-6 text-white"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-xl font-semibold mb-2",children:"Regular Parents Evening"}),i.jsxs("p",{className:"text-blue-100 leading-relaxed",children:[i.jsx("strong",{className:"text-white",children:"Regular parents evening information every month"})," to show progress of the student. We continuously monitor progress to ensure every student keeps pace with the curriculum."]})]})]})}),i.jsx("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6",children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"bg-white/20 rounded-lg p-3 flex-shrink-0",children:i.jsx(Rp,{className:"h-6 w-6 text-white"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-xl font-semibold mb-2",children:"Engaging Multimedia Teaching"}),i.jsxs("p",{className:"text-blue-100 leading-relaxed",children:["During the lesson, concepts are taught using ",i.jsx("strong",{className:"text-white",children:"illustration, animation and walkthroughs"}),". This ",i.jsx("strong",{className:"text-white",children:"multi-sensory approach"})," ensures concepts stick and students remain engaged throughout."]})]})]})}),i.jsx("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6",children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"bg-white/20 rounded-lg p-3 flex-shrink-0",children:i.jsx(Qr,{className:"h-6 w-6 text-white"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-xl font-semibold mb-2",children:"Detailed Exam Technique Training"}),i.jsxs("p",{className:"text-blue-100 leading-relaxed",children:["We ",i.jsx("strong",{className:"text-white",children:"explicitly teach detailed exam technique"})," in our lessons, going through ",i.jsx("strong",{className:"text-white",children:"several questions in each lesson"}),". Students learn exactly how to ",i.jsx("strong",{className:"text-white",children:"structure answers to maximise marks"}),"."]})]})]})})]})]})})}),i.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"testimonials-heading",children:i.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[i.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Testimonials from Students"}),i.jsx("p",{className:"text-gray-600 mb-12",children:"Short clips from students, with the subject and grade improvements below."}),i.jsxs("div",{className:"relative sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[i.jsx("button",{type:"button",onClick:O,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Previous testimonial videos",title:"Previous",children:i.jsx(ze,{className:"h-5 w-5"})}),i.jsx("div",{className:"overflow-hidden sm:col-start-2",children:i.jsx("div",{className:`flex ${c?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${a*(100/m)}%)`},children:N.map((w,_)=>{const I=Math.floor(m/2),b=_===a+I;return i.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/m}%`},children:i.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${b?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[i.jsx(GI,{src:w.src,className:"w-full h-auto rounded-t-2xl"}),i.jsxs("div",{className:"p-4 text-center",children:[i.jsx("p",{className:"text-lg font-semibold text-gray-900",children:w.name}),i.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[i.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:w.subjects.join(" / ")}),i.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:R(w.improvedBy)})]})]})]})},`${w.id}-${_}`)})})}),i.jsx("button",{type:"button",onClick:D,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Next testimonial videos",title:"Next",children:i.jsx(at,{className:"h-5 w-5"})}),i.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[i.jsx("button",{type:"button",onClick:O,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Previous testimonial videos",children:i.jsx(ze,{className:"h-5 w-5"})}),i.jsx("button",{type:"button",onClick:D,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Next testimonial videos",children:i.jsx(at,{className:"h-5 w-5"})})]})]})]})})]}),i.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center mb-4",children:[i.jsx(Nt,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),i.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),i.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 9-11 via Zoom."})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx(he,{to:"/",className:"hover:text-white transition",children:"Home"})}),i.jsx("li",{children:i.jsx(he,{to:"/courses",className:"hover:text-white transition",children:"Courses"})}),i.jsx("li",{children:i.jsx("a",{href:"/#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),i.jsx("li",{children:i.jsx("a",{href:"/#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"/#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),i.jsx("li",{children:i.jsx("a",{href:"/#terms-of-service",className:"hover:text-white transition",children:"Refund & Cancellation Policy"})}),i.jsx("li",{children:i.jsx("a",{href:"/#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"mailto:support@myschola.uk",className:"hover:text-white transition",children:"support@myschola.uk"})}),i.jsx("li",{children:i.jsx("a",{href:"tel:+447344193804",className:"hover:text-white transition",children:"+44 7344 193804"})}),i.jsx("li",{children:i.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Qt,className:"text-green-400 hover:text-green-300 transition inline-flex items-center gap-2",children:[i.jsx(Ye,{className:"h-4 w-4"}),"Contact Us on WhatsApp"]})}),i.jsx("li",{children:i.jsx("button",{type:"button",onClick:J,className:"bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation text-sm sm:text-base","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),i.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:i.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 9-11."]})})]})}),i.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Qt,className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation","aria-label":"Contact us on WhatsApp",children:i.jsx(Ye,{className:"h-5 w-5 sm:h-6 sm:w-6"})})]})}function Dr(){window.gtag&&window.gtag("event","conversion",{send_to:"AW-11111111111/lead_whatsapp_QQQ"}),window.fbq&&window.fbq("track","Lead",{content_name:"WhatsApp Contact"})}function QI(){window.gtag&&window.gtag("event","conversion",{send_to:"AW-11111111111/lead_consultation_RRR"}),window.fbq&&window.fbq("track","Lead",{content_name:"Book Consultation"})}function YI({src:s,className:e=""}){const t=A.useRef(null);return A.useEffect(()=>{const n=t.current;if(!n)return;const r=()=>{n.readyState>=2&&(n.currentTime=.01,n.pause())};return n.addEventListener("loadedmetadata",r),n.readyState<2?n.load():r(),()=>{n.removeEventListener("loadedmetadata",r)}},[s]),i.jsxs("video",{ref:t,className:e,controls:!0,playsInline:!0,preload:"metadata",children:[i.jsx("source",{src:s,type:"video/mp4"}),"Your browser does not support the video tag."]})}const Vr=[{src:Ai,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:ji,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:Ti,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:Ni,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:Ii,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}];function JI(){const[s]=ep(),e=s.get("year")||"9",[t,n]=A.useState(!1),[r,a]=A.useState(5),[l,c]=A.useState(!0),[h,m]=A.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),f=Vr.length,y=[...Vr,...Vr,...Vr],v=f,N=f*2;A.useEffect(()=>{const M=()=>{const Q=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;m(Q)};return M(),window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]),A.useEffect(()=>{const M=setInterval(()=>{a(Q=>{const me=Q+1;return me>N?(c(!1),setTimeout(()=>{c(!0)},50),v):me})},4e3);return()=>clearInterval(M)},[N,v]),A.useEffect(()=>{if(r<v||r>=N){c(!1);const M=r<v?r+f:r-f;a(M),requestAnimationFrame(()=>{requestAnimationFrame(()=>c(!0))})}},[r,v,N,f]);const k=M=>M===1?"Improved by 1 grade":`Improved by ${M} grades`,P=()=>{a(M=>M-1)},R=()=>{a(M=>M+1)},O=()=>{switch(e){case"9":return"https://buy.stripe.com/6oU14o8JV24Aggr6PbcjS19";case"10":return"https://buy.stripe.com/7sY6oIf8j10we8jflHcjS1a";case"11":return"https://buy.stripe.com/fZu5kE0dp6kQfcn0qNcjS1b";default:return"https://buy.stripe.com/6oU14o8JV24Aggr6PbcjS19"}},D=()=>{switch(e){case"9":return"https://buy.stripe.com/eVq3cw6BN4cI3tF7TfcjS16";case"10":return"https://buy.stripe.com/5kQ5kE2lx8sY6FR3CZcjS17";case"11":return"https://buy.stripe.com/6oUaEY9NZ38Efcn4H3cjS18";default:return"https://buy.stripe.com/eVq3cw6BN4cI3tF7TfcjS16"}},B=()=>{switch(e){case"9":return"https://buy.stripe.com/dRm14of8jcJec0bgpLcjS12";case"10":return"https://buy.stripe.com/14A7sM4tFeRme8j3CZcjS14";case"11":return"https://buy.stripe.com/14A28sd0b24A4xJ0qNcjS15";default:return"https://buy.stripe.com/dRm14of8jcJec0bgpLcjS12"}},J=()=>{switch(e){case"9":return"https://buy.stripe.com/00w28s3pB7oU7JVehDcjS0l";case"10":return"https://buy.stripe.com/14A6oId0bbFa8NZ0qNcjS0m";case"11":return"https://buy.stripe.com/28EfZi7FR9x27JV1uRcjS0n";default:return"https://buy.stripe.com/00w28s3pB7oU7JVehDcjS0l"}},oe=()=>{switch(e){case"9":return"https://buy.stripe.com/14A3cwbW7dNi5BNb5rcjS0Z";case"10":return"https://buy.stripe.com/7sYfZi3pBdNi7JV3CZcjS10";case"11":return"https://buy.stripe.com/fZucN67FRcJe5BNgpLcjS11";default:return"https://buy.stripe.com/14A3cwbW7dNi5BNb5rcjS0Z"}},te=()=>{switch(e){case"9":return"https://buy.stripe.com/dRm7sM2lx38EggrehDcjS0U";case"10":return"https://buy.stripe.com/8x2dRagcncJe6FR2yVcjS0W";case"11":return"https://buy.stripe.com/aFa3cwgcnaB6ggrehDcjS0Y";default:return"https://buy.stripe.com/dRm7sM2lx38EggrehDcjS0U"}},E=()=>{switch(e){case"9":return"https://buy.stripe.com/14A00kaS3cJe6FR1uRcjS0S";case"10":return"https://buy.stripe.com/4gMfZid0b6kQ8NZb5rcjS0T";case"11":return"https://buy.stripe.com/dRm7sM2lx38EggrehDcjS0U";default:return"https://buy.stripe.com/14A00kaS3cJe6FR1uRcjS0S"}},x=()=>{switch(e){case"9":return"https://buy.stripe.com/dRmaEY5xJ10w8NZ6PbcjS1c";case"10":return"https://buy.stripe.com/dRm5kEbW76kQ1lx3CZcjS1d";case"11":return"https://buy.stripe.com/28E6oI2lxeRmd4fgpLcjS1e";default:return"https://buy.stripe.com/dRmaEY5xJ10w8NZ6PbcjS1c"}},g=()=>{switch(e){case"9":return"https://buy.stripe.com/fZu8wQ2lxbFa5BNflHcjS0P";case"10":return"https://buy.stripe.com/5kQ4gAe4faB62pBc9vcjS0Q";case"11":return"https://buy.stripe.com/dRmcN6f8j7oU7JV7TfcjS0R";default:return"https://buy.stripe.com/fZu8wQ2lxbFa5BNflHcjS0P"}},w=()=>{switch(e){case"9":return"https://buy.stripe.com/6oU00k1htaB64xJ6PbcjS0N";case"10":return"https://buy.stripe.com/eVq4gA4tF6kQd4fehDcjS0O";case"11":return"https://buy.stripe.com/fZu4gA1hteRm9S35L7cjS0M";default:return"https://buy.stripe.com/6oU00k1htaB64xJ6PbcjS0N"}},_=()=>{switch(e){case"9":return"https://buy.stripe.com/00w28sgcncJefcngpLcjS0H";case"10":return"https://buy.stripe.com/7sY5kE0dp38E9S30qNcjS0I";case"11":return"https://buy.stripe.com/4gM7sM8JV4cIc0bddzcjS0J";default:return"https://buy.stripe.com/00w28sgcncJefcngpLcjS0H"}},I=M=>{switch(M){case"maths-science-english":window.location.href=O();break;case"maths-english":window.location.href=D();break;case"english-science":window.location.href=B();break;case"science-maths":window.location.href=J();break;case"maths-science":window.location.href=x();break;default:Z()}},b=M=>{switch(M){case"science":window.location.href=oe();break;case"english-only":window.location.href=te();break;case"maths-only":window.location.href=E();break;case"chemistry":window.location.href=g();break;case"physics":window.location.href=w();break;case"biology":window.location.href=_();break;default:Z()}},W=()=>{const M="https://calendly.com/admin-myschola/30min";if(window.Calendly)window.Calendly.initPopupWidget({url:M,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0});else{const Q=document.createElement("script");Q.src="https://assets.calendly.com/assets/external/widget.js",Q.async=!0,Q.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:M,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0})},document.body.appendChild(Q)}},Z=()=>{QI(),navigate("/booking"),W()},V=[{id:"maths-science",name:"Maths + Science",subjects:"Mathematics & Science",price:"£128",originalPrice:"£167.98",savingsPercent:"24%",perLesson:"~£8 per hour",period:"/month",billing:"Billed monthly",features:["16 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Bio, Chem & Phys","Year 11 Crash Course Included"]},{id:"maths-science-english",name:"Maths + Science + English",subjects:"Mathematics, Science & English",price:"£168",originalPrice:"£247.97",savingsPercent:"32%",perLesson:"~£7 per hour",period:"/month",billing:"Billed monthly",popular:!0,features:["24 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Bio, Chem & Phys","Covers Lit & Lang","Year 11 Crash Course Included"]},{id:"maths-english",name:"Maths + English",subjects:"Mathematics & English",price:"£96",originalPrice:"£139.98",savingsPercent:"31%",perLesson:"~£8 per hour",period:"/month",billing:"Billed monthly",features:["12 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Lit & Lang","Year 11 Crash Course Included"]},{id:"english-science",name:"English + Science",subjects:"English & Science",price:"£160",originalPrice:"£187.98",savingsPercent:"15%",perLesson:"~£8 per hour",period:"/month",billing:"Billed monthly",features:["20 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Lit & Lang","Covers Bio, Chem & Phys","Year 11 Crash Course Included"]}],ie=[{id:"science",name:"Science",subjects:"Science (Bio, Chem, Phys)",price:"£107.99",perLesson:"~£9 per lesson",period:"/month",billing:"Billed monthly, cancel anytime",features:["12 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Bio, Chem & Phys"]},{id:"english-only",name:"English Only",subjects:"English Language & Literature",price:"£79.99",perLesson:"~£10 per lesson",period:"/month",billing:"Billed monthly, cancel anytime",features:["8 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Lit & Lang"]},{id:"maths-only",name:"Maths Only",subjects:"Mathematics",price:"£59.99",perLesson:"~£15 per lesson",period:"/month",billing:"Billed monthly, cancel anytime",features:["4 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback"]},{id:"chemistry",name:"Science - Chemistry",subjects:"Chemistry Only",price:"£59.99",perLesson:"~£15 per lesson",period:"/month",billing:"Billed monthly, cancel anytime",features:["4 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers only Chemistry"]},{id:"physics",name:"Science - Physics",subjects:"Physics Only",price:"£59.99",perLesson:"~£15 per lesson",period:"/month",billing:"Billed monthly, cancel anytime",features:["4 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers only Physics"]},{id:"biology",name:"Science - Biology",subjects:"Biology Only",price:"£59.99",perLesson:"~£15 per lesson",period:"/month",billing:"Billed monthly, cancel anytime",features:["4 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers only Biology"]}];return i.jsxs("div",{className:"min-h-screen bg-white",children:[i.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),i.jsx("div",{className:"w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md",children:i.jsxs("span",{className:"inline-flex items-center gap-2 animate-pulse",children:[i.jsxs("span",{className:"relative flex h-3 w-3",children:[i.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),i.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-green-500"})]}),"Now Enrolling for New Cohort — Limited Spaces Available"]})}),i.jsxs("nav",{className:"sticky top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center h-16",children:[i.jsxs("div",{className:"flex items-center",children:[i.jsx(Nt,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),i.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),i.jsx("div",{className:"hidden md:flex justify-center",children:i.jsxs("div",{className:"flex items-center space-x-8",children:[i.jsx("a",{href:"/",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),i.jsx("a",{href:"/#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),i.jsx("a",{href:"/#subjects",className:"text-gray-700 hover:text-blue-600 transition",children:"Subjects"}),i.jsx("a",{href:"/#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),i.jsx("a",{href:"/#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"})]})}),i.jsxs("div",{className:"flex items-center justify-end",children:[i.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[i.jsx(he,{to:"/login",className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center","aria-label":"Log in",children:"Log In"}),i.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Dr,className:"bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2","aria-label":"Contact us on WhatsApp",children:[i.jsx(Ye,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})]}),i.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>n(!t),"aria-label":t?"Close menu":"Open menu","aria-expanded":t,"aria-controls":"mobile-menu",children:t?i.jsx(_o,{className:"h-6 w-6","aria-hidden":"true"}):i.jsx(wo,{className:"h-6 w-6","aria-hidden":"true"})})]})]})}),t&&i.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:i.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[i.jsx("a",{href:"/",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),i.jsx("a",{href:"/#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),i.jsx("a",{href:"/#subjects",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Subjects"}),i.jsx("a",{href:"/#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),i.jsx("a",{href:"/#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),i.jsx(he,{to:"/login",className:"block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",role:"menuitem",children:"Log In"}),i.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Dr,className:"block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2","aria-label":"Contact us on WhatsApp",role:"menuitem",children:i.jsxs("span",{className:"inline-flex items-center gap-2",children:[i.jsx(Ye,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})})]})})]}),i.jsxs("main",{id:"main-content",children:[i.jsx("section",{className:"pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Package hero section",children:i.jsxs("div",{className:"max-w-7xl mx-auto text-center",children:[i.jsxs("p",{className:"text-lg sm:text-xl text-blue-600 font-semibold mb-4",children:["Year ",e," Course"]}),i.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight",children:["Choose Your ",i.jsx("span",{className:"text-blue-600",children:"Learning Package"})]}),i.jsxs("p",{className:"text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8",children:["Flexible pricing options tailored for Year ",e," students. All packages include expert tutoring, detailed feedback, and exam preparation."]}),i.jsxs(he,{to:"/courses",className:"inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition",children:[i.jsx(ze,{className:"h-5 w-5"}),"Back to Year Selection"]})]})}),i.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8","aria-labelledby":"bundles-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsx("h2",{id:"bundles-heading",className:"text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12",children:"Bundle Packages"}),i.jsx("div",{className:"grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto",children:V.map((M,Q)=>i.jsxs("div",{className:`relative rounded-2xl p-6 sm:p-8 flex flex-col ${M.popular?"bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl scale-105":"bg-white border-2 border-gray-200 text-gray-900 hover:border-blue-400"} transition-all duration-300`,children:[M.popular&&i.jsx("div",{className:"absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold",children:"MOST POPULAR"}),i.jsx("h3",{className:`text-xl font-bold mb-1 ${M.popular?"text-white":"text-gray-900"}`,children:M.name}),i.jsx("p",{className:`text-sm mb-4 ${M.popular?"text-blue-100":"text-gray-500"}`,children:M.subjects}),i.jsxs("div",{className:"mb-2",children:[i.jsx("span",{className:`text-4xl font-extrabold ${M.popular?"text-white":"text-gray-900"}`,children:M.price}),i.jsx("span",{className:`text-lg ${M.popular?"text-blue-200":"text-gray-500"}`,children:M.period})]}),M.originalPrice&&i.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[i.jsx("span",{className:`text-sm line-through ${M.popular?"text-blue-200":"text-gray-400"}`,children:M.originalPrice}),i.jsxs("span",{className:"text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded",children:["SAVE ",M.savingsPercent]})]}),M.perLesson&&i.jsx("div",{className:`text-sm font-bold mb-2 ${M.popular?"text-green-300":"text-green-600"}`,children:M.perLesson}),i.jsx("p",{className:`text-sm mb-4 ${M.popular?"text-blue-100":"text-gray-500"}`,children:M.billing}),i.jsx("ul",{className:"space-y-3 mb-4 flex-grow",children:M.features.map((me,De)=>i.jsxs("li",{className:"flex items-start gap-3",children:[i.jsx(Ba,{className:`h-5 w-5 flex-shrink-0 mt-0.5 ${M.popular?"text-green-300":"text-green-500"}`}),i.jsx("span",{className:`text-sm ${M.popular?"text-blue-50":"text-gray-700"}`,children:me})]},De))}),i.jsxs("div",{className:"mt-auto mb-4 rounded-lg overflow-hidden bg-emerald-50 border border-emerald-200",children:[i.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-emerald-100/50 border-b border-emerald-200",children:[i.jsx("span",{className:"text-xs font-bold tracking-wider text-emerald-700",children:"YEAR 11"}),i.jsx(Ng,{className:"h-3 w-3 text-emerald-600"})]}),i.jsxs("div",{className:"px-3 py-3",children:[i.jsx("div",{className:"text-lg font-black uppercase leading-tight text-emerald-900 tracking-tight",children:"Crash Course"}),i.jsxs("div",{className:"mt-1 flex items-center gap-2",children:[i.jsx("span",{className:"inline-block text-xs font-bold text-emerald-700 bg-emerald-200/50 px-2 py-0.5 rounded",children:"INTENSIVE"}),i.jsx("span",{className:"text-xs text-emerald-600",children:"From April"})]})]})]}),i.jsx("button",{type:"button",onClick:()=>I(M.id),className:"w-full py-3 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px] touch-manipulation bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600",children:"Enroll now"})]},Q))})]})}),i.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"individual-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsx("h2",{id:"individual-heading",className:"text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4",children:"Individual Subject Pricing"}),i.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Focus on a single subject with our dedicated individual packages."}),i.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:ie.map((M,Q)=>i.jsxs("div",{className:"bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 flex flex-col",children:[i.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-1",children:M.name}),i.jsx("p",{className:"text-sm text-gray-500 mb-4",children:M.subjects}),i.jsxs("div",{className:"mb-2",children:[i.jsx("span",{className:"text-4xl font-extrabold text-gray-900",children:M.price}),i.jsx("span",{className:"text-lg text-gray-500",children:M.period})]}),M.perLesson&&i.jsx("div",{className:"text-sm font-bold text-green-600 mb-2",children:M.perLesson}),i.jsx("p",{className:"text-sm text-gray-500 mb-6",children:M.billing}),i.jsx("ul",{className:"space-y-3 mb-8 flex-grow",children:M.features.map((me,De)=>i.jsxs("li",{className:"flex items-start gap-3",children:[i.jsx(Ba,{className:"h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"}),i.jsx("span",{className:"text-sm text-gray-700",children:me})]},De))}),i.jsx("button",{type:"button",onClick:()=>M.id?b(M.id):Z,className:"w-full py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation",children:"Enroll now"})]},Q))})]})}),i.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-white","aria-labelledby":"testimonials-heading",children:i.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[i.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Testimonials from Students"}),i.jsx("p",{className:"text-gray-600 mb-12",children:"Short clips from students, with the subject and grade improvements below."}),i.jsxs("div",{className:"relative sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[i.jsx("button",{type:"button",onClick:P,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Previous testimonial videos",title:"Previous",children:i.jsx(ze,{className:"h-5 w-5"})}),i.jsx("div",{className:"overflow-hidden sm:col-start-2",children:i.jsx("div",{className:`flex ${l?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${r*(100/h)}%)`},children:y.map((M,Q)=>{const me=Math.floor(h/2),De=Q===r+me;return i.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/h}%`},children:i.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${De?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[i.jsx(YI,{src:M.src,className:"w-full h-auto rounded-t-2xl"}),i.jsxs("div",{className:"p-4 text-center",children:[i.jsx("p",{className:"text-lg font-semibold text-gray-900",children:M.name}),i.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[i.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:M.subjects.join(" / ")}),i.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:k(M.improvedBy)})]})]})]})},`${M.id}-${Q}`)})})}),i.jsx("button",{type:"button",onClick:R,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Next testimonial videos",title:"Next",children:i.jsx(at,{className:"h-5 w-5"})}),i.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[i.jsx("button",{type:"button",onClick:P,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Previous testimonial videos",children:i.jsx(ze,{className:"h-5 w-5"})}),i.jsx("button",{type:"button",onClick:R,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Next testimonial videos",children:i.jsx(at,{className:"h-5 w-5"})})]})]})]})})]}),i.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center mb-4",children:[i.jsx(Nt,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),i.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),i.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 9-11 via Zoom."})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx(he,{to:"/",className:"hover:text-white transition",children:"Home"})}),i.jsx("li",{children:i.jsx(he,{to:"/courses",className:"hover:text-white transition",children:"Courses"})}),i.jsx("li",{children:i.jsx("a",{href:"/#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),i.jsx("li",{children:i.jsx("a",{href:"/#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"/#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),i.jsx("li",{children:i.jsx("a",{href:"/#terms-of-service",className:"hover:text-white transition",children:"Refund & Cancellation Policy"})}),i.jsx("li",{children:i.jsx("a",{href:"/#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"mailto:support@myschola.uk",className:"hover:text-white transition",children:"support@myschola.uk"})}),i.jsx("li",{children:i.jsx("a",{href:"tel:+447344193804",className:"hover:text-white transition",children:"+44 7344 193804"})}),i.jsx("li",{children:i.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Dr,className:"text-green-400 hover:text-green-300 transition inline-flex items-center gap-2",children:[i.jsx(Ye,{className:"h-4 w-4"}),"Contact Us on WhatsApp"]})}),i.jsx("li",{children:i.jsx("button",{type:"button",onClick:Z,className:"bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation text-sm sm:text-base","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),i.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:i.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 9-11."]})})]})}),i.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Dr,className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation","aria-label":"Contact us on WhatsApp",children:i.jsx(Ye,{className:"h-5 w-5 sm:h-6 sm:w-6"})})]})}const vf="/book-strategy-call",Ef="/book-strategy-call/thanks",If="/webinar",XI="/webinar/thanks";function yh(){var s,e;typeof window>"u"||(e=(s=window.Calendly)==null?void 0:s.closePopupWidget)==null||e.call(s)}function ZI(s){var e;return((e=s==null?void 0:s.data)==null?void 0:e.event)&&s.data.event.indexOf("calendly")===0&&s.data.event==="calendly.event_scheduled"}function eN(){const{pathname:s}=cs();return A.useEffect(()=>{Tg()},[s]),null}function tN(){const s=Lt(),{pathname:e}=cs();return A.useEffect(()=>{const t=n=>{ZI(n)&&(e.startsWith(vf)||e.startsWith(If)?(typeof window<"u"&&window.sessionStorage.setItem("strategyCallRegistered","true"),yh(),s(Ef,{replace:!0})):(yh(),s("/booking-success",{replace:!0})))};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)},[s,e]),null}function sN(){return i.jsxs(tp,{children:[i.jsx(eN,{}),i.jsx(tN,{}),i.jsxs(sp,{children:[i.jsx(Ve,{path:"/",element:i.jsx(wc,{})}),i.jsx(Ve,{path:"/booking",element:i.jsx(wc,{})}),i.jsx(Ve,{path:"/login",element:i.jsx(mI,{})}),i.jsx(Ve,{path:"/payment-success",element:i.jsx(RI,{})}),i.jsx(Ve,{path:"/booking-success",element:i.jsx(PI,{})}),i.jsx(Ve,{path:"/admin",element:i.jsx(SI,{})}),i.jsx(Ve,{path:"/admin/share-link",element:i.jsx(kI,{})}),i.jsx(Ve,{path:"/admin/homework-share-link",element:i.jsx(CI,{})}),i.jsx(Ve,{path:vf,element:i.jsx(fh,{})}),i.jsx(Ve,{path:Ef,element:i.jsx(gh,{})}),i.jsx(Ve,{path:If,element:i.jsx(fh,{})}),i.jsx(Ve,{path:XI,element:i.jsx(gh,{})}),i.jsx(Ve,{path:"/courses",element:i.jsx(KI,{})}),i.jsx(Ve,{path:"/package",element:i.jsx(JI,{})}),i.jsx(Ve,{path:"/app/dashboard",element:i.jsx(La,{children:i.jsx(xI,{})})}),i.jsx(Ve,{path:"/app/subject/:subjectId/recordings",element:i.jsx(La,{children:i.jsx(vI,{})})}),i.jsx(Ve,{path:"/app/subject/:subjectId/homework",element:i.jsx(La,{children:i.jsx(EI,{})})})]})]})}ap.createRoot(document.getElementById("root")).render(i.jsx(A.StrictMode,{children:i.jsx(sN,{})}));
