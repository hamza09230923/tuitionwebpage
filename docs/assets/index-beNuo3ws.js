import{r as Yf,a as Jf,b as j,u as Mt,c as un,L as he,N as Xf,d as gh,e as Zf,B as ep,R as tp,f as Qe}from"./react-vendor-CbjYftdW.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var ya={exports:{}},Ps={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lc;function np(){if(lc)return Ps;lc=1;var n=Yf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(c,h,d){var f,g={},_=null,T=null;d!==void 0&&(_=""+d),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(T=h.ref);for(f in h)s.call(h,f)&&!a.hasOwnProperty(f)&&(g[f]=h[f]);if(c&&c.defaultProps)for(f in h=c.defaultProps,h)g[f]===void 0&&(g[f]=h[f]);return{$$typeof:e,type:c,key:_,ref:T,props:g,_owner:r.current}}return Ps.Fragment=t,Ps.jsx=l,Ps.jsxs=l,Ps}var cc;function sp(){return cc||(cc=1,ya.exports=np()),ya.exports}var i=sp(),Nr={},uc;function rp(){if(uc)return Nr;uc=1;var n=Jf();return Nr.createRoot=n.createRoot,Nr.hydrateRoot=n.hydrateRoot,Nr}var ip=rp();/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),op=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),hc=n=>{const e=op(n);return e.charAt(0).toUpperCase()+e.slice(1)},yh=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),lp=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=j.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:r="",children:a,iconNode:l,...c},h)=>j.createElement("svg",{ref:h,...cp,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:yh("lucide",r),...!a&&!lp(c)&&{"aria-hidden":"true"},...c},[...l.map(([d,f])=>j.createElement(d,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=(n,e)=>{const t=j.forwardRef(({className:s,...r},a)=>j.createElement(up,{ref:a,iconNode:e,className:yh(`lucide-${ap(hc(n))}`,`lucide-${n}`,s),...r}));return t.displayName=hc(n),t};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],He=X("arrow-left",hp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],xt=X("arrow-right",dp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],fp=X("atom",mp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],gp=X("award",pp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],xp=X("bell",yp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],wp=X("book-marked",bp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Hr=X("book-open",_p);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Ep=X("calculator",vp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],Tp=X("calendar-check",Ip);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],La=X("calendar",Np);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],jp=X("chart-column",Ap);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Oa=X("check",Sp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Yt=X("circle-check-big",kp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Rp=X("circle-play",Cp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Dp=X("circle-question-mark",Pp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],fo=X("clock",Vp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],dc=X("download",Mp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Op=X("external-link",Lp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],zs=X("file-text",Fp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Bp=X("flask-conical",Up);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],$p=X("globe",qp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Tt=X("graduation-cap",Wp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],zp=X("history",Hp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],Kp=X("languages",Gp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],po=X("lock",Qp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Jp=X("log-out",Yp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],xh=X("mail",Xp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],go=X("menu",Zp);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Ye=X("message-circle",eg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],ng=X("monitor",tg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],rg=X("music",sg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],ag=X("palette",ig);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],lg=X("phone",og);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],ug=X("play",cg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],mc=X("save",hg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],fc=X("sparkles",dg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],fg=X("star",mg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],bh=X("target",pg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],wh=X("trending-up",gg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],_h=X("user-check",yg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],pc=X("users",xg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Yn=X("video",bg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],yo=X("x",wg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],vh=X("zoom-in",_g),wi="/assets/testimonial1-5gwMtUAO-5gwMtUAO.mp4",_i="/assets/testimonial2-D0fw-lJA.mp4",vi="/assets/testmonial3-CD7BqzK1.mp4",Ei="/assets/testimonial4-DLVnnJv5.mp4",Ii="/assets/testimonial5-CpY5IMND.mp4",vg="/assets/checklist-B5UU8CL1.jpeg";function Eg(){typeof window<"u"&&window.fbq&&window.fbq("track","PageView")}function Fa(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booking",content_category:"GCSE Tuition"})}function Kt(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"WhatsApp Inquiry",content_category:"GCSE Tuition"})}function Ig(){typeof window<"u"&&window.fbq&&window.fbq("track","Purchase",{currency:"GBP"})}function Tg(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booked",content_category:"GCSE Tuition"})}function Ng(){typeof window<"u"&&window.fbq&&window.fbq("track","BOOK NOW",{value:0,currency:"GBP"})}const zr="/assets/nottingham-university-logo-Bvc07xhs.png",Gr="/assets/King's_College_London_logo-XbRZheqd.svg",Kr="/assets/cambridge-64gH2uf-.jpg",Qr="/assets/Imperial-College-Logo-CiZ74UPN.png",Yr="/assets/warwick-DzXBUNN5.svg",Ag="/assets/aqa-R9eUC-1Y.jpg",jg="/assets/edexcel-vector-logo-BkmWVkxU.png";function Sg({src:n,className:e,showControls:t=!0}){const s=j.useRef(null);return j.useEffect(()=>{const r=s.current;if(!r)return;const a=()=>{r.readyState>=2&&(r.currentTime=.01,r.pause())};return r.addEventListener("loadedmetadata",a),r.readyState<2?r.load():a(),()=>{r.removeEventListener("loadedmetadata",a)}},[n]),i.jsxs("video",{ref:s,className:e,controls:t,playsInline:!0,preload:"metadata",children:[i.jsx("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]})}function gc(){const n=Mt(),e=un(),t=[{src:Ii,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:Ei,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:vi,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:_i,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:wi,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],s=t.length,r=[...t,...t,...t],a=s,l=s*2,[c,h]=j.useState(!1),[d,f]=j.useState(null),[g,_]=j.useState(!1),[T,k]=j.useState(a),[P,R]=j.useState(!0),[M,D]=j.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),B=y=>y===1?"Improved by 1 grade":`Improved by ${y} grades`;j.useEffect(()=>{const y=()=>{const w=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;D(w)};return y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]),j.useEffect(()=>{if(T<a||T>=l){R(!1);const y=T<a?T+s:T-s;k(y),requestAnimationFrame(()=>{requestAnimationFrame(()=>R(!0))})}},[T,a,l,s]);const Y=y=>{f(d===y?null:y)},oe=()=>{k(y=>y-1)},te=()=>{k(y=>y+1)},E=()=>{const y="https://calendly.com/admin-myschola/30min",w=window.innerWidth<768;if(window.Calendly)window.Calendly.initPopupWidget({url:y,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0});else{const v=document.createElement("script");v.src="https://assets.calendly.com/assets/external/widget.js",v.async=!0,v.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:y,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0})},document.body.appendChild(v),setTimeout(()=>{window.Calendly||window.open(y,"_blank","noopener,noreferrer")},1e3)}},x=()=>{Fa(),n("/booking",{replace:!1}),E()};return j.useEffect(()=>{if(e.pathname==="/booking"&&!g){Fa(),_(!0);const y=setTimeout(()=>{E()},300);return()=>clearTimeout(y)}else e.pathname!=="/booking"&&_(!1)},[e.pathname]),i.jsxs("div",{className:"min-h-screen bg-white",children:[i.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),i.jsx("div",{className:"w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md",children:"Join our March cohort as soon as possible — spaces are running out!"}),i.jsxs("nav",{className:"sticky top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center h-16",children:[i.jsxs("div",{className:"flex items-center",children:[i.jsx(Tt,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),i.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),i.jsx("div",{className:"hidden md:flex justify-center",children:i.jsxs("div",{className:"flex items-center space-x-8",children:[i.jsx("a",{href:"#home",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),i.jsx("a",{href:"#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),i.jsx("a",{href:"#subjects",className:"text-gray-700 hover:text-blue-600 transition",children:"Subjects"}),i.jsx("a",{href:"#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),i.jsx("a",{href:"#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"})]})}),i.jsxs("div",{className:"flex items-center justify-end",children:[i.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[i.jsx(he,{to:"/login",className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center","aria-label":"Log in",children:"Log In"}),i.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Kt,className:"bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2","aria-label":"Contact us on WhatsApp",children:[i.jsx(Ye,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})]}),i.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>h(!c),"aria-label":c?"Close menu":"Open menu","aria-expanded":c,"aria-controls":"mobile-menu",children:c?i.jsx(yo,{className:"h-6 w-6","aria-hidden":"true"}):i.jsx(go,{className:"h-6 w-6","aria-hidden":"true"})})]})]})}),c&&i.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:i.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[i.jsx("a",{href:"#home",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),i.jsx("a",{href:"#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),i.jsx("a",{href:"#subjects",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Subjects"}),i.jsx("a",{href:"#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),i.jsx("a",{href:"#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),i.jsx(he,{to:"/login",className:"block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",role:"menuitem",children:"Log In"}),i.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Kt,className:"block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2","aria-label":"Contact us on WhatsApp",role:"menuitem",children:i.jsxs("span",{className:"inline-flex items-center gap-2",children:[i.jsx(Ye,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})})]})})]}),i.jsxs("main",{id:"main-content",children:[i.jsx("section",{id:"home",className:"pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Hero section",children:i.jsx("div",{className:"max-w-7xl mx-auto",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"relative inline-block px-2",children:i.jsxs("h1",{className:"relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6",children:["MySchola: #1 GCSE Tutoring Platform for",i.jsx("span",{className:"text-blue-600",children:" Years 9-11"})]})}),i.jsxs("p",{className:"text-lg sm:text-xl text-gray-600 mb-3 sm:mb-4 max-w-3xl mx-auto px-2",children:[i.jsx("strong",{children:"GCSE Maths, English & Science"})," via Zoom"]}),i.jsx("p",{className:"text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2",children:"Personalised lessons with one-to-one support from expert tutors. Your child only sees the teacher - no distractions, maximum focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons."}),i.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:i.jsxs("button",{type:"button",onClick:x,className:"bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation","aria-label":"Book a free consultation",children:["Book Free Consultation",i.jsx(xt,{className:"ml-2 h-5 w-5 flex-shrink-0","aria-hidden":"true"})]})})]})})}),i.jsx("section",{id:"how-it-works",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"how-it-works-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsx("h2",{id:"how-it-works-heading",className:"text-4xl font-bold text-center mb-12",children:"How Our Lessons Work"}),i.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-3xl mx-auto",children:"A clear, supportive structure that keeps students confident and parents fully in the loop."}),i.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[i.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[i.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:i.jsx(_h,{className:"h-8 w-8 text-white"})}),i.jsx("h3",{className:"text-xl font-semibold mb-2",children:"One-to-One Support"}),i.jsx("p",{className:"text-gray-600",children:"Personalised lessons with one-to-one support. Your child only sees the teacher, ensuring privacy and focus."})]}),i.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[i.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:i.jsx(vh,{className:"h-8 w-8 text-white"})}),i.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Via Zoom"}),i.jsx("p",{className:"text-gray-600",children:"Convenient online lessons from the comfort of your home. High-quality video and interactive whiteboard. Webcam and microphone are optional - we use Zoom chat to check engagement, and parents can monitor participation for privacy."})]}),i.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[i.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:i.jsx(po,{className:"h-8 w-8 text-white"})}),i.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Student Privacy"}),i.jsx("p",{className:"text-gray-600",children:"Your child only sees the teacher. Private, secure sessions designed for maximum learning focus. Webcam and mic are optional - we use Zoom chat for communication, and parents can check engagement for privacy reasons."})]}),i.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[i.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:i.jsx(Ye,{className:"h-8 w-8 text-white"})}),i.jsx("h3",{className:"text-xl font-semibold mb-2",children:"24/7 Personalised Support"}),i.jsx("p",{className:"text-gray-600",children:"Students can ask questions anytime between lessons. Tutors respond with personalised explanations, feedback, and next-step guidance."})]}),i.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[i.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:i.jsx(pc,{className:"h-8 w-8 text-white"})}),i.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Parent Evenings"}),i.jsx("p",{className:"text-gray-600",children:"Regular parent evenings to review progress, share targets, and agree on the next steps for maximum grade improvement."})]}),i.jsxs("div",{className:"text-center p-6 bg-blue-50 rounded-lg",children:[i.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4","aria-hidden":"true",children:i.jsx(zs,{className:"h-8 w-8 text-white"})}),i.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Regular Exam-Style Tests"}),i.jsx("p",{className:"text-gray-600",children:"We set regular exams and topic checks to track progress, build exam technique, and close gaps quickly."})]})]})]})}),i.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"benefits-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsx("h2",{id:"benefits-heading",className:"text-4xl font-bold text-center mb-4",children:"Benefits for Parents & Students"}),i.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Why thousands of families choose MySchola for GCSE success"}),i.jsx("div",{className:"mb-12 flex justify-center",children:i.jsx("img",{src:vg,alt:"Comparison table showing MySchola benefits against other providers and one-to-one home tutors",className:"w-full max-w-6xl h-auto rounded-2xl border border-gray-200 shadow-sm object-contain",loading:"lazy"})}),i.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsxs("div",{className:"flex items-center mb-3",children:[i.jsx(wh,{className:"h-6 w-6 text-green-500 mr-2","aria-hidden":"true"}),i.jsx("h3",{className:"text-xl font-semibold",children:"Grade Improvement"})]}),i.jsx("p",{className:"text-gray-600",children:"Students consistently improve by 2-3 grades with our proven teaching methods and personalised approach."})]}),i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsxs("div",{className:"flex items-center mb-3",children:[i.jsx(gp,{className:"h-6 w-6 text-blue-500 mr-2","aria-hidden":"true"}),i.jsx("h3",{className:"text-xl font-semibold",children:"Confidence Building"})]}),i.jsx("p",{className:"text-gray-600",children:"Watch your child's confidence soar as they master difficult concepts and see their progress week by week."})]}),i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsxs("div",{className:"flex items-center mb-3",children:[i.jsx(bh,{className:"h-6 w-6 text-red-500 mr-2","aria-hidden":"true"}),i.jsx("h3",{className:"text-xl font-semibold",children:"Exam Focus"})]}),i.jsx("p",{className:"text-gray-600",children:"Targeted exam preparation with past papers, exam techniques, and strategies tailored to GCSE requirements."})]}),i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsxs("div",{className:"flex items-center mb-3",children:[i.jsx(fo,{className:"h-6 w-6 text-purple-500 mr-2","aria-hidden":"true"}),i.jsx("h3",{className:"text-xl font-semibold",children:"Flexible Scheduling"})]}),i.jsx("p",{className:"text-gray-600",children:"Choose times that work around your family's schedule. Evening and weekend slots available."})]}),i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsxs("div",{className:"flex items-center mb-3",children:[i.jsx(pc,{className:"h-6 w-6 text-orange-500 mr-2","aria-hidden":"true"}),i.jsx("h3",{className:"text-xl font-semibold",children:"Expert Tutors"})]}),i.jsx("p",{className:"text-gray-600",children:"Qualified UK teachers with DBS checks and proven track records of GCSE success."})]}),i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsxs("div",{className:"flex items-center mb-3",children:[i.jsx(Hr,{className:"h-6 w-6 text-indigo-500 mr-2","aria-hidden":"true"}),i.jsx("h3",{className:"text-xl font-semibold",children:"Personalised Curriculum"})]}),i.jsx("p",{className:"text-gray-600",children:"Lessons tailored to your child's learning style, pace, and specific areas that need improvement."})]})]})]})}),i.jsx("section",{id:"testimonials",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"video-testimonials-heading",children:i.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[i.jsx("h2",{id:"video-testimonials-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Video Testimonials"}),i.jsx("p",{className:"text-gray-600 mb-12",children:"Short clips from students, with the subject and grade improvements below."}),i.jsxs("div",{className:"relative sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[i.jsx("button",{type:"button",onClick:oe,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:i.jsx(He,{className:"h-5 w-5","aria-hidden":"true"})}),i.jsx("div",{className:"overflow-hidden sm:col-start-2",children:i.jsx("div",{className:`flex ${P?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${T*(100/M)}%)`},children:r.map((y,w)=>{const v=Math.floor(M/2),I=w===T+v;return i.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/M}%`},children:i.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${I?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[i.jsx(Sg,{src:y.src,className:"w-full h-auto rounded-t-2xl"}),i.jsxs("div",{className:"p-4 text-center",children:[i.jsx("p",{className:"text-lg font-semibold text-gray-900",children:y.name}),i.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[i.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:y.subjects.join(" / ")}),i.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:B(y.improvedBy)})]})]})]})},`${y.id}-${w}`)})})}),i.jsx("button",{type:"button",onClick:te,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:i.jsx(xt,{className:"h-5 w-5","aria-hidden":"true"})}),i.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[i.jsx("button",{type:"button",onClick:oe,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:i.jsx(He,{className:"h-5 w-5","aria-hidden":"true"})}),i.jsx("button",{type:"button",onClick:te,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:i.jsx(xt,{className:"h-5 w-5","aria-hidden":"true"})})]})]})]})}),i.jsx("section",{id:"text-testimonials",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"testimonials-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold text-center mb-4",children:"What Parents & Students Say"}),i.jsx("p",{className:"text-center text-gray-600 mb-12",children:"Real results from real families"}),i.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-12",children:[i.jsxs("div",{className:"bg-blue-600 text-white p-6 rounded-lg text-center",children:[i.jsx("div",{className:"text-4xl font-bold mb-2",children:"95%"}),i.jsx("div",{className:"text-blue-100",children:"Students improve grades"})]}),i.jsxs("div",{className:"bg-green-600 text-white p-6 rounded-lg text-center",children:[i.jsx("div",{className:"text-4xl font-bold mb-2",children:"2-3"}),i.jsx("div",{className:"text-green-100",children:"Grade improvement average"})]}),i.jsxs("div",{className:"bg-purple-600 text-white p-6 rounded-lg text-center",children:[i.jsx("div",{className:"text-4xl font-bold mb-2",children:"300+"}),i.jsx("div",{className:"text-purple-100",children:"Successful students"})]})]}),i.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{name:"Aisha K, Parent",text:"My son started the term lacking confidence in Maths and was sitting at a Grade 5. After weekly Zoom lessons with MySchola, his understanding improved steadily and he finished the term with a Grade 7.",rating:5,result:"Maths: Grade 5 → Grade 7"},{name:"Rahul P, Parent",text:"MySchola was patient and explained the Poetry Anthology texts in a way my daughter could finally understand. Her confidence grew each week and her English grade jumped from a 5 to an 8.",rating:5,result:"English Lit: Grade 5 → Grade 8"},{name:"Emma L., Parent",text:"The confidence my son gained was incredible. He went from hating Chemistry especially Organic Chemistry to loving it. His Chemistry grade improved from 5 to 8. Worth every penny!",rating:5,result:"Chemistry: Grade 5 → Grade 8"},{name:"Michael R., Student",text:"Going through past papers and custom exam style questions with Isam and Hamza made a huge difference. Physics finally started to make sense, and I learned how to approach exam questions properly.",rating:5,result:"Physics: Grade 6 → Grade 9"},{name:"Jasmin K., Parent",text:"As a working parent, the flexible scheduling in the evenings was a lifesaver. My daughter could do sessions that fit around school and activities. Highly recommend!",rating:4,result:"Maths: Grade 6 → Grade 8"},{name:"Emmanuel P., Parent",text:"The privacy of the sessions meant my son felt comfortable making mistakes and asking for help. His confidence has grown so much, and his grades show it!",rating:5,result:"English: Grade 5 → Grade 7"}].map((y,w)=>i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsx("div",{className:"flex mb-4",children:[...Array(y.rating)].map((v,I)=>i.jsx(fg,{className:"h-5 w-5 text-yellow-400 fill-current","aria-hidden":"true"},I))}),i.jsxs("p",{className:"text-gray-600 mb-4 italic",children:['"',y.text,'"']}),i.jsxs("div",{className:"border-t pt-4",children:[i.jsxs("p",{className:"font-semibold text-gray-900",children:["— ",y.name]}),i.jsx("p",{className:"text-sm text-blue-600 font-medium mt-1",children:y.result})]})]},w))})]})}),i.jsx("section",{id:"subjects",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"subjects-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsx("h2",{id:"subjects-heading",className:"text-4xl font-bold text-center mb-4",children:"Subjects We Offer"}),i.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Comprehensive GCSE support for Years 9-11"}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{name:"Maths",description:"GCSE Maths (Foundation & Higher)"},{name:"Combined Science",description:"Trilogy and Synergy pathways"},{name:"Triple Science",description:"Biology, Chemistry, and Physics"},{name:"English Language",description:"Reading, writing, and language skills"},{name:"English Literature",description:"Poetry, prose, and drama analysis"}].map(y=>i.jsx("div",{className:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600",children:i.jsxs("div",{className:"flex items-start mb-2",children:[i.jsx(Oa,{className:"h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0","aria-hidden":"true"}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-lg font-semibold mb-1",children:y.name}),i.jsx("p",{className:"text-gray-600 text-sm",children:y.description})]})]})},y.name))})]})}),i.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-white","aria-labelledby":"universities-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h2",{id:"universities-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Our tutors study at the UK's most prestigious universities"}),i.jsx("p",{className:"text-gray-600 max-w-3xl mx-auto",children:"Your education is everything. That's why we only hire the best in class. All of our tutors have stellar academic backgrounds and have first-hand experience with the rigorous exam process. Learn from the best to achieve your best."})]}),i.jsx("div",{className:"relative overflow-hidden",children:i.jsxs("div",{className:"flex animate-marquee",children:[[{src:zr,alt:"University of Nottingham",name:"Nottingham"},{src:Gr,alt:"King's College London",name:"King's College"},{src:Kr,alt:"University of Cambridge",name:"Cambridge"},{src:Qr,alt:"Imperial College London",name:"Imperial"},{src:Yr,alt:"University of Warwick",name:"Warwick"}].map((y,w)=>i.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:i.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-40 sm:h-48 lg:h-56 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:i.jsx("img",{src:y.src,alt:y.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`first-${w}`)),[{src:zr,alt:"University of Nottingham",name:"Nottingham"},{src:Gr,alt:"King's College London",name:"King's College"},{src:Kr,alt:"University of Cambridge",name:"Cambridge"},{src:Qr,alt:"Imperial College London",name:"Imperial"},{src:Yr,alt:"University of Warwick",name:"Warwick"}].map((y,w)=>i.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:i.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-40 sm:h-48 lg:h-56 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:i.jsx("img",{src:y.src,alt:y.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`second-${w}`))]})})]})}),i.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"exam-boards-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h2",{id:"exam-boards-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Expert tuition for every exam board"}),i.jsx("p",{className:"text-gray-600 max-w-3xl mx-auto",children:"Unlock academic success with tailored support across every exam board. Our team of expert tutors knows the ins and outs of each curriculum, offering customized guidance that fits your exact syllabus."})]}),i.jsx("div",{className:"relative overflow-hidden",children:i.jsx("div",{className:"flex animate-marquee-reverse",children:[...Array(3)].map((y,w)=>[{src:Ag,alt:"AQA",name:"AQA"},{src:jg,alt:"Edexcel",name:"Edexcel"}].map((v,I)=>i.jsx("div",{className:"flex-shrink-0 mx-6 sm:mx-8 lg:mx-10",children:i.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-8 sm:p-10 lg:p-12 h-44 sm:h-52 lg:h-60 w-64 sm:w-72 lg:w-80 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:i.jsx("img",{src:v.src,alt:v.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`set-${w}-${I}`)))})})]})}),i.jsx("section",{id:"book-call",className:"py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600","aria-labelledby":"book-call-heading",children:i.jsxs("div",{className:"max-w-4xl mx-auto text-center text-white",children:[i.jsx("h2",{id:"book-call-heading",className:"text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 px-2",children:"Ready to Start Your Child's GCSE Success Journey?"}),i.jsx("p",{className:"text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-2",children:"Book a free consultation to discuss your child's needs and see how we can help them achieve their goals."}),i.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:i.jsxs("button",{type:"button",onClick:x,className:"bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 active:bg-gray-200 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation","aria-label":"Book a free consultation",children:["Book Free Consultation",i.jsx(xt,{className:"ml-2 h-5 w-5 flex-shrink-0","aria-hidden":"true"})]})}),i.jsx("p",{className:"text-blue-100 text-sm mt-6",children:"No card required • Free 15-minute consultation"})]})}),i.jsx("section",{id:"faq",className:"py-20 px-4 sm:px-6 lg:px-8","aria-labelledby":"faq-heading",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsx("h2",{id:"faq-heading",className:"text-4xl font-bold text-center mb-12",children:"Frequently Asked Questions"}),i.jsx("div",{className:"space-y-4",children:[{q:"How do the Zoom lessons work?",a:"Each lesson feels one-to-one via Zoom. Your child will see only the teacher, ensuring privacy and focus. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We use interactive whiteboards and screen sharing to make lessons engaging and effective. All sessions are recorded for your child to review later."},{q:"What equipment do we need?",a:"You just need a computer, tablet, or laptop with a stable internet connection. Webcam and microphone are optional - not needed. We use Zoom chat to check if students are active, and parents can monitor engagement for privacy reasons. We recommend using a desktop or laptop for the best experience with the interactive whiteboard."},{q:"How long are the sessions?",a:"All lessons are 60 minutes and this duration is fixed."},{q:"Can I choose the tutor?",a:"Yes! During your consultation, we'll discuss your child's learning style and match them with the best tutor. You can also request specific tutors based on availability."},{q:"What if my child misses a session?",a:"All sessions are recorded and uploaded. If your child misses a lesson, they can watch the recording at their convenience. You can ask any questions through our WhatsApp support, available 24/7."},{q:"Do you provide homework and practice materials?",a:"Absolutely! Each tutor provides tailored homework assignments, practice papers, and additional resources to reinforce learning between sessions. All materials are included in the lesson price."},{q:"How quickly will we see results?",a:"Most students see improvement within 4-6 weeks of regular sessions. However, every child is different. We track progress regularly and adjust our approach to ensure maximum effectiveness."},{q:"What age groups do you teach?",a:"We specialize in Years 9-11, preparing students for GCSEs. This includes both Foundation and Higher tier courses across all major GCSE subjects."}].map((y,w)=>i.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg overflow-hidden",children:[i.jsxs("button",{className:"w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",onClick:()=>Y(w),"aria-expanded":d===w,"aria-controls":`faq-answer-${w}`,id:`faq-question-${w}`,children:[i.jsxs("span",{className:"font-semibold text-gray-900 flex items-center",children:[i.jsx(Dp,{className:"h-5 w-5 text-blue-600 mr-2","aria-hidden":"true"}),y.q]}),i.jsx("span",{className:"text-blue-600","aria-hidden":"true","aria-label":d===w?"Collapse answer":"Expand answer",children:d===w?"−":"+"})]}),d===w&&i.jsx("div",{id:`faq-answer-${w}`,className:"px-6 pb-4 text-gray-600",role:"region","aria-labelledby":`faq-question-${w}`,children:y.a})]},w))})]})}),i.jsx("section",{id:"contact",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"contact-heading",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsx("h2",{id:"contact-heading",className:"text-4xl font-bold text-center mb-12",children:"Get in Touch"}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsx(xh,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),i.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Email Us"}),i.jsx("a",{href:"mailto:support@myschola.uk",className:"text-gray-600 hover:text-blue-600 transition",children:"support@myschola.uk"})]}),i.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[i.jsx(lg,{className:"h-6 w-6 text-blue-600 mb-3","aria-hidden":"true"}),i.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Call Us"}),i.jsx("a",{href:"tel:+447344193804",className:"text-gray-600 hover:text-blue-600 transition",children:"+44 7344 193804"}),i.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Mon-Fri 9am-6pm"})]})]})]})}),i.jsx("section",{id:"privacy-policy",className:"py-20 px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Privacy Policy"}),i.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Information We Collect"}),i.jsx("p",{children:"We collect information that you provide directly to us, including your name, email address, phone number, and information about your child's educational needs. We also collect information automatically when you use our services, such as session recordings and progress data."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. How We Use Your Information"}),i.jsx("p",{children:"We use the information we collect to provide, maintain, and improve our tutoring services, process your bookings, communicate with you, and ensure the safety and security of our platform."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. Data Security"}),i.jsx("p",{children:"We implement appropriate technical and organizational measures to protect your personal information. All tutors are DBS checked, and all Zoom sessions are encrypted and secure."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Session Recordings"}),i.jsx("p",{children:"Lessons may be recorded for educational purposes and quality assurance. Recordings are stored securely and are accessible only to authorized personnel and the student's account."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. Your Rights"}),i.jsx("p",{children:"You have the right to access, update, or delete your personal information at any time. You can also request a copy of your data or withdraw consent for data processing."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Children's Privacy"}),i.jsx("p",{children:"We take children's privacy seriously. We only collect information necessary to provide our services, and all data handling complies with UK GDPR and Children's Code requirements."})]}),i.jsx("div",{children:i.jsxs("p",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleDateString("en-GB")]})})]})]})}),i.jsx("section",{id:"terms-of-service",className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50",children:i.jsxs("div",{className:"max-w-4xl mx-auto",children:[i.jsx("h2",{className:"text-4xl font-bold text-center mb-4",children:"Refund & Cancellation Policy"}),i.jsx("p",{className:"text-center text-gray-500 mb-12",children:"MySchola - Last updated: 9 March 2026"}),i.jsxs("div",{className:"prose max-w-none text-gray-600 space-y-6",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"1. Overview"}),i.jsx("p",{children:"This Refund & Cancellation Policy explains how refunds, cancellations, and subscription changes work for services provided by MySchola."}),i.jsx("p",{children:"By purchasing or subscribing to any MySchola service, you agree to this policy in addition to our Terms of Service."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"2. Subscription Payments"}),i.jsx("p",{children:"MySchola provides tutoring and educational services on a weekly or monthly subscription basis."}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsx("li",{children:"Payments are processed automatically through Stripe or other secure payment providers."}),i.jsx("li",{children:"Subscription fees vary depending on the subjects, number of sessions, and selected package."}),i.jsx("li",{children:"Subscriptions renew automatically at the end of each billing cycle unless cancelled beforehand."})]})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"3. 7-Day Money-Back Guarantee"}),i.jsx("p",{children:"We offer a 7-day money-back guarantee from the date of your first payment."}),i.jsx("p",{children:"You may request a full refund within 7 calendar days if:"}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsx("li",{children:"The request is made within 7 days of the initial purchase."}),i.jsx("li",{children:"The request is submitted in writing."}),i.jsx("li",{children:"There has been no excessive or abusive use of the service."})]}),i.jsx("p",{children:"This guarantee allows parents and students to determine whether the service is suitable for their needs."}),i.jsx("p",{children:"Refunds are not intended for customers who primarily consume a significant portion of the service and then request a refund."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"4. Partial Refunds"}),i.jsx("p",{children:"In certain situations, partial refunds may be offered at MySchola's discretion, including but not limited to:"}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsx("li",{children:"Removing one subject from a multi-subject subscription."}),i.jsx("li",{children:"Downgrading to a smaller tutoring package."}),i.jsx("li",{children:"Reduction in services during an active billing period."})]})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"5. No Refunds After 7 Days"}),i.jsx("p",{children:"After the 7-day money-back guarantee period has passed:"}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsx("li",{children:"No refunds will be issued for time already used."}),i.jsx("li",{children:"Missed lessons, unused sessions, or lack of attendance do not qualify for refunds."}),i.jsx("li",{children:"Refunds are not issued for failure to attend or engage with lessons."})]}),i.jsx("p",{children:"If a subscription is cancelled after this period, the cancellation will only prevent future charges."}),i.jsx("p",{children:"Any partial refund will be calculated proportionally based on the remaining value of the unused service."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"6. Cancellation Policy"}),i.jsx("p",{children:"You may cancel your subscription at any time."}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsx("li",{children:"Cancellations apply to future billing periods only."}),i.jsx("li",{children:"Access to tutoring sessions and learning resources will remain active until the end of the current paid billing period."}),i.jsx("li",{children:"Once a billing cycle has begun, it is considered earned and non-refundable after the 7-day guarantee period."})]})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"7. How to Cancel or Request a Refund"}),i.jsx("p",{children:"All cancellation or refund requests must be submitted in writing."}),i.jsx("p",{children:"You can contact us via WhatsApp or SMS: +44 7344 193804."}),i.jsx("p",{children:"Your request should include:"}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsx("li",{children:"The student's full name."}),i.jsx("li",{children:"The email address or phone number used during registration."}),i.jsx("li",{children:"A clear request to cancel or request a refund."})]}),i.jsx("p",{children:"Our support team will review and respond to requests as quickly as possible."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"8. Immediate Access to Digital Services"}),i.jsx("p",{children:"Access to MySchola's digital platform, tutoring sessions, recordings, and learning resources is typically provided within minutes of successful payment."}),i.jsx("p",{children:"By accessing the service immediately, you acknowledge that:"}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsx("li",{children:"Digital educational services begin immediately after purchase."}),i.jsx("li",{children:"Your subscription is considered active once access has been granted."})]}),i.jsx("p",{children:"This does not affect your statutory rights or the 7-day money-back guarantee, but it helps prevent misuse of the refund policy."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"9. Abuse of the Refund Policy"}),i.jsx("p",{children:"To ensure fairness for all students and families, MySchola reserves the right to:"}),i.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[i.jsx("li",{children:"Refuse refund requests where there is evidence of repeated or abusive refund behaviour."}),i.jsx("li",{children:"Suspend or terminate accounts in cases of misuse, fraudulent activity, or bad-faith use of the service."})]})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"10. Changes to This Policy"}),i.jsx("p",{children:"MySchola may update this Refund & Cancellation Policy from time to time."}),i.jsx("p",{children:"The most current version will always be available on our website."})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:"11. Contact"}),i.jsx("p",{children:"MySchola"}),i.jsx("p",{children:"For support, refunds, or cancellations:"}),i.jsx("p",{children:"WhatsApp / SMS: +44 7344 193804"})]})]})]})})]}),i.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center mb-4",children:[i.jsx(Tt,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),i.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),i.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 9-11 via Zoom."})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"#home",className:"hover:text-white transition",children:"Home"})}),i.jsx("li",{children:i.jsx("a",{href:"#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),i.jsx("li",{children:i.jsx("a",{href:"#subjects",className:"hover:text-white transition",children:"Subjects"})}),i.jsx("li",{children:i.jsx("a",{href:"#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),i.jsx("li",{children:i.jsx("a",{href:"#terms-of-service",className:"hover:text-white transition",children:"Refund & Cancellation Policy"})}),i.jsx("li",{children:i.jsx("a",{href:"#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"mailto:support@myschola.uk",className:"hover:text-white transition",children:"support@myschola.uk"})}),i.jsx("li",{children:i.jsx("a",{href:"tel:+447344193804",className:"hover:text-white transition",children:"+44 7344 193804"})}),i.jsx("li",{children:i.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Kt,className:"text-green-400 hover:text-green-300 transition inline-flex items-center gap-2",children:[i.jsx(Ye,{className:"h-4 w-4","aria-hidden":"true"}),"Contact Us on WhatsApp"]})}),i.jsx("li",{children:i.jsx("button",{type:"button",onClick:x,className:"bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation text-sm sm:text-base","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),i.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:i.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 9-11."]})})]})}),i.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Kt,className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation","aria-label":"Contact us on WhatsApp",children:i.jsx(Ye,{className:"h-5 w-5 sm:h-6 sm:w-6","aria-hidden":"true"})})]})}const kg=()=>{};var yc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Cg=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const a=n[t++];e[s++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=n[t++],l=n[t++],c=n[t++],h=((r&7)<<18|(a&63)<<12|(l&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const a=n[t++],l=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(a&63)<<6|l&63)}}return e.join("")},Ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const a=n[r],l=r+1<n.length,c=l?n[r+1]:0,h=r+2<n.length,d=h?n[r+2]:0,f=a>>2,g=(a&3)<<4|c>>4;let _=(c&15)<<2|d>>6,T=d&63;h||(T=64,l||(_=64)),s.push(t[f],t[g],t[_],t[T])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Eh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const a=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const g=r<n.length?t[n.charAt(r)]:64;if(++r,a==null||c==null||d==null||g==null)throw new Rg;const _=a<<2|c>>4;if(s.push(_),d!==64){const T=c<<4&240|d>>2;if(s.push(T),g!==64){const k=d<<6&192|g;s.push(k)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Rg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pg=function(n){const e=Eh(n);return Ih.encodeByteArray(e,!0)},Jr=function(n){return Pg(n).replace(/\./g,"")},Th=function(n){try{return Ih.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vg=()=>Dg().__FIREBASE_DEFAULTS__,Mg=()=>{if(typeof process>"u"||typeof yc>"u")return;const n=yc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Lg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Th(n[1]);return e&&JSON.parse(e)},Ti=()=>{try{return kg()||Vg()||Mg()||Lg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nh=n=>{var e,t;return(t=(e=Ti())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Og=n=>{const e=Nh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ah=()=>{var n;return(n=Ti())==null?void 0:n.config},jh=n=>{var e;return(e=Ti())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function rs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Sh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Ug(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Jr(JSON.stringify(t)),Jr(JSON.stringify(l)),""].join(".")}const Us={};function Bg(){const n={prod:[],emulator:[]};for(const e of Object.keys(Us))Us[e]?n.emulator.push(e):n.prod.push(e);return n}function qg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let xc=!1;function kh(n,e){if(typeof window>"u"||typeof document>"u"||!rs(window.location.host)||Us[n]===e||Us[n]||xc)return;Us[n]=e;function t(_){return`__firebase__banner__${_}`}const s="__firebase__banner",a=Bg().prod.length>0;function l(){const _=document.getElementById(s);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function h(_,T){_.setAttribute("width","24"),_.setAttribute("id",T),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function d(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{xc=!0,l()},_}function f(_,T){_.setAttribute("id",T),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function g(){const _=qg(s),T=t("text"),k=document.getElementById(T)||document.createElement("span"),P=t("learnmore"),R=document.getElementById(P)||document.createElement("a"),M=t("preprendIcon"),D=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const B=_.element;c(B),f(R,P);const Y=d();h(D,M),B.append(D,k,R,Y),document.body.appendChild(B)}a?(k.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $g(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Wg(){var e;const n=(e=Ti())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ch(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function zg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gg(){const n=ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Kg(){return!Wg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rh(){try{return typeof indexedDB=="object"}catch{return!1}}function Ph(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var a;e(((a=r.error)==null?void 0:a.message)||"")}}catch(t){e(t)}})}function Qg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="FirebaseError";class ft extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Yg,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sn.prototype.create)}}class Sn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],l=a?Jg(a,s):"Error",c=`${this.serviceName}: ${l} (${r}).`;return new ft(r,c,s)}}function Jg(n,e){return n.replace(Xg,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Xg=/\{\$([^}]+)}/g;function Zg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function nn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const a=n[r],l=e[r];if(bc(a)&&bc(l)){if(!nn(a,l))return!1}else if(a!==l)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function bc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ds(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,a]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(a)}}),e}function Vs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function ey(n,e){const t=new ty(n,e);return t.subscribe.bind(t)}class ty{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");ny(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=xa),r.error===void 0&&(r.error=xa),r.complete===void 0&&(r.complete=xa);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ny(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xa(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=1e3,ry=2,iy=14400*1e3,ay=.5;function wc(n,e=sy,t=ry){const s=e*Math.pow(t,n),r=Math.round(ay*s*(Math.random()-.5)*2);return Math.min(iy,s+r)}/**
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
 */function Ee(n){return n&&n._delegate?n._delegate:n}class ht{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Fg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cy(e))try{this.getOrInitializeService({instanceIdentifier:bn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:r});s.resolve(a)}catch{}}}}clearInstance(e=bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bn){return this.instances.has(e)}getOptions(e=bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[a,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(a);s===c&&l.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ly(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=bn){return this.component?this.component.multipleInstances?e:bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ly(n){return n===bn?void 0:n}function cy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new oy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const hy={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},dy=ne.INFO,my={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},fy=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=my[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ni{constructor(e){this.name=e,this._logLevel=dy,this._logHandler=fy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const py=(n,e)=>e.some(t=>n instanceof t);let _c,vc;function gy(){return _c||(_c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yy(){return vc||(vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dh=new WeakMap,Ua=new WeakMap,Vh=new WeakMap,ba=new WeakMap,xo=new WeakMap;function xy(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",a),n.removeEventListener("error",l)},a=()=>{t(Jt(n.result)),r()},l=()=>{s(n.error),r()};n.addEventListener("success",a),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&Dh.set(t,n)}).catch(()=>{}),xo.set(e,n),e}function by(n){if(Ua.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",l),n.removeEventListener("abort",l)},a=()=>{t(),r()},l=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",a),n.addEventListener("error",l),n.addEventListener("abort",l)});Ua.set(n,e)}let Ba={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ua.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Vh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Jt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function wy(n){Ba=n(Ba)}function _y(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(wa(this),e,...t);return Vh.set(s,e.sort?e.sort():[e]),Jt(s)}:yy().includes(n)?function(...e){return n.apply(wa(this),e),Jt(Dh.get(this))}:function(...e){return Jt(n.apply(wa(this),e))}}function vy(n){return typeof n=="function"?_y(n):(n instanceof IDBTransaction&&by(n),py(n,gy())?new Proxy(n,Ba):n)}function Jt(n){if(n instanceof IDBRequest)return xy(n);if(ba.has(n))return ba.get(n);const e=vy(n);return e!==n&&(ba.set(n,e),xo.set(e,n)),e}const wa=n=>xo.get(n);function Mh(n,e,{blocked:t,upgrade:s,blocking:r,terminated:a}={}){const l=indexedDB.open(n,e),c=Jt(l);return s&&l.addEventListener("upgradeneeded",h=>{s(Jt(l.result),h.oldVersion,h.newVersion,Jt(l.transaction),h)}),t&&l.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{a&&h.addEventListener("close",()=>a()),r&&h.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Ey=["get","getKey","getAll","getAllKeys","count"],Iy=["put","add","delete","clear"],_a=new Map;function Ec(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(_a.get(e))return _a.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Iy.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Ey.includes(t)))return;const a=async function(l,...c){const h=this.transaction(l,r?"readwrite":"readonly");let d=h.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),r&&h.done]))[0]};return _a.set(e,a),a}wy(n=>({...n,get:(e,t,s)=>Ec(e,t)||n.get(e,t,s),has:(e,t)=>!!Ec(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ny(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Ny(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qa="@firebase/app",Ic="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new Ni("@firebase/app"),Ay="@firebase/app-compat",jy="@firebase/analytics-compat",Sy="@firebase/analytics",ky="@firebase/app-check-compat",Cy="@firebase/app-check",Ry="@firebase/auth",Py="@firebase/auth-compat",Dy="@firebase/database",Vy="@firebase/data-connect",My="@firebase/database-compat",Ly="@firebase/functions",Oy="@firebase/functions-compat",Fy="@firebase/installations",Uy="@firebase/installations-compat",By="@firebase/messaging",qy="@firebase/messaging-compat",$y="@firebase/performance",Wy="@firebase/performance-compat",Hy="@firebase/remote-config",zy="@firebase/remote-config-compat",Gy="@firebase/storage",Ky="@firebase/storage-compat",Qy="@firebase/firestore",Yy="@firebase/ai",Jy="@firebase/firestore-compat",Xy="firebase",Zy="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="[DEFAULT]",ex={[qa]:"fire-core",[Ay]:"fire-core-compat",[Sy]:"fire-analytics",[jy]:"fire-analytics-compat",[Cy]:"fire-app-check",[ky]:"fire-app-check-compat",[Ry]:"fire-auth",[Py]:"fire-auth-compat",[Dy]:"fire-rtdb",[Vy]:"fire-data-connect",[My]:"fire-rtdb-compat",[Ly]:"fire-fn",[Oy]:"fire-fn-compat",[Fy]:"fire-iid",[Uy]:"fire-iid-compat",[By]:"fire-fcm",[qy]:"fire-fcm-compat",[$y]:"fire-perf",[Wy]:"fire-perf-compat",[Hy]:"fire-rc",[zy]:"fire-rc-compat",[Gy]:"fire-gcs",[Ky]:"fire-gcs-compat",[Qy]:"fire-fst",[Jy]:"fire-fst-compat",[Yy]:"fire-vertex","fire-js":"fire-js",[Xy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Map,tx=new Map,Wa=new Map;function Tc(n,e){try{n.container.addComponent(e)}catch(t){Rt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nt(n){const e=n.name;if(Wa.has(e))return Rt.debug(`There were multiple attempts to register component ${e}.`),!1;Wa.set(e,n);for(const t of Xr.values())Tc(t,n);for(const t of tx.values())Tc(t,n);return!0}function kn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function lt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new Sn("app","Firebase",nx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=Zy;function Lh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:$a,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Xt.create("bad-app-name",{appName:String(r)});if(t||(t=Ah()),!t)throw Xt.create("no-options");const a=Xr.get(r);if(a){if(nn(t,a.options)&&nn(s,a.config))return a;throw Xt.create("duplicate-app",{appName:r})}const l=new uy(r);for(const h of Wa.values())l.addComponent(h);const c=new sx(t,s,l);return Xr.set(r,c),c}function bo(n=$a){const e=Xr.get(n);if(!e&&n===$a&&Ah())return Lh();if(!e)throw Xt.create("no-app",{appName:n});return e}function at(n,e,t){let s=ex[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rt.warn(l.join(" "));return}Nt(new ht(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const rx="firebase-heartbeat-database",ix=1,Gs="firebase-heartbeat-store";let va=null;function Oh(){return va||(va=Mh(rx,ix,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Gs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Xt.create("idb-open",{originalErrorMessage:n.message})})),va}async function ax(n){try{const t=(await Oh()).transaction(Gs),s=await t.objectStore(Gs).get(Fh(n));return await t.done,s}catch(e){if(e instanceof ft)Rt.warn(e.message);else{const t=Xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rt.warn(t.message)}}}async function Nc(n,e){try{const s=(await Oh()).transaction(Gs,"readwrite");await s.objectStore(Gs).put(e,Fh(n)),await s.done}catch(t){if(t instanceof ft)Rt.warn(t.message);else{const s=Xt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rt.warn(s.message)}}}function Fh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ox=1024,lx=30;class cx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hx(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Ac();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:r}),this._heartbeatsCache.heartbeats.length>lx){const l=dx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Rt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ac(),{heartbeatsToSend:s,unsentEntries:r}=ux(this._heartbeatsCache.heartbeats),a=Jr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Rt.warn(t),""}}}function Ac(){return new Date().toISOString().substring(0,10)}function ux(n,e=ox){const t=[];let s=n.slice();for(const r of n){const a=t.find(l=>l.agent===r.agent);if(a){if(a.dates.push(r.date),jc(t)>e){a.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),jc(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class hx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rh()?Ph().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ax(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Nc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Nc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function jc(n){return Jr(JSON.stringify({version:2,heartbeats:n})).length}function dx(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(n){Nt(new ht("platform-logger",e=>new Ty(e),"PRIVATE")),Nt(new ht("heartbeat",e=>new cx(e),"PRIVATE")),at(qa,Ic,n),at(qa,Ic,"esm2020"),at("fire-js","")}mx("");var fx="firebase",px="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */at(fx,px,"app");function Uh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gx=Uh,Bh=new Sn("auth","Firebase",Uh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new Ni("@firebase/auth");function yx(n,...e){Zr.logLevel<=ne.WARN&&Zr.warn(`Auth (${is}): ${n}`,...e)}function Vr(n,...e){Zr.logLevel<=ne.ERROR&&Zr.error(`Auth (${is}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,...e){throw wo(n,...e)}function bt(n,...e){return wo(n,...e)}function qh(n,e,t){const s={...gx(),[e]:t};return new Sn("auth","Firebase",s).create(e,{appName:n.name})}function Zt(n){return qh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wo(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Bh.create(n,...e)}function H(n,e,...t){if(!n)throw wo(e,...t)}function jt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Vr(e),new Error(e)}function Pt(n,e){n||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function xx(){return Sc()==="http:"||Sc()==="https:"}function Sc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xx()||Ch()||"connection"in navigator)?navigator.onLine:!0}function wx(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pt(t>e,"Short delay should be less than long delay!"),this.isMobile=$g()||zg()}get(){return bx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(n,e){Pt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ex=new ar(3e4,6e4);function Cn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function hn(n,e,t,s,r={}){return Wh(n,r,async()=>{let a={},l={};s&&(e==="GET"?l=s:a={body:JSON.stringify(s)});const c=ir({key:n.config.apiKey,...l}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:h,...a};return Hg()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&rs(n.emulatorConfig.host)&&(d.credentials="include"),$h.fetch()(await Hh(n,n.config.apiHost,t,c),d)})}async function Wh(n,e,t){n._canInitEmulator=!1;const s={..._x,...e};try{const r=new Tx(n),a=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw Ar(n,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const c=a.ok?l.errorMessage:l.error.message,[h,d]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ar(n,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw Ar(n,"email-already-in-use",l);if(h==="USER_DISABLED")throw Ar(n,"user-disabled",l);const f=s[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw qh(n,f,d);dt(n,f)}}catch(r){if(r instanceof ft)throw r;dt(n,"network-request-failed",{message:String(r)})}}async function Ai(n,e,t,s,r={}){const a=await hn(n,e,t,s,r);return"mfaPendingCredential"in a&&dt(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Hh(n,e,t,s){const r=`${e}${t}?${s}`,a=n,l=a.config.emulator?_o(n.config,r):`${n.config.apiScheme}://${r}`;return vx.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}function Ix(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Tx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(bt(this.auth,"network-request-failed")),Ex.get())})}}function Ar(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=bt(n,e,s);return r.customData._tokenResponse=t,r}function kc(n){return n!==void 0&&n.enterprise!==void 0}class Nx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ix(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ax(n,e){return hn(n,"GET","/v2/recaptchaConfig",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jx(n,e){return hn(n,"POST","/v1/accounts:delete",e)}async function ei(n,e){return hn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sx(n,e=!1){const t=Ee(n),s=await t.getIdToken(e),r=vo(s);H(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const a=typeof r.firebase=="object"?r.firebase:void 0,l=a==null?void 0:a.sign_in_provider;return{claims:r,token:s,authTime:Bs(Ea(r.auth_time)),issuedAtTime:Bs(Ea(r.iat)),expirationTime:Bs(Ea(r.exp)),signInProvider:l||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Ea(n){return Number(n)*1e3}function vo(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Vr("JWT malformed, contained fewer than 3 sections"),null;try{const r=Th(t);return r?JSON.parse(r):(Vr("Failed to decode base64 JWT payload"),null)}catch(r){return Vr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Cc(n){const e=vo(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ft&&kx(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function kx({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bs(this.lastLoginAt),this.creationTime=Bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(n){var g;const e=n.auth,t=await n.getIdToken(),s=await Ks(n,ei(e,{idToken:t}));H(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const a=(g=r.providerUserInfo)!=null&&g.length?zh(r.providerUserInfo):[],l=Px(n.providerData,a),c=n.isAnonymous,h=!(n.email&&r.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new za(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function Rx(n){const e=Ee(n);await ti(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Px(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function zh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dx(n,e){const t=await Wh(n,{},async()=>{const s=ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:a}=n.config,l=await Hh(n,r,"/v1/token",`key=${a}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:c,body:s};return n.emulatorConfig&&rs(n.emulatorConfig.host)&&(h.credentials="include"),$h.fetch()(l,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Vx(n,e){return hn(n,"POST","/v2/accounts:revokeToken",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=Cc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:a}=await Dx(e,t);this.updateTokensAndExpiration(s,r,Number(a))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:a}=t,l=new Wn;return s&&(H(typeof s=="string","internal-error",{appName:e}),l.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),l.accessToken=r),a&&(H(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ct{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Cx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new za(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ks(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Sx(this,e)}reload(){return Rx(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ct({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ti(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(Zt(this.auth));const e=await this.getIdToken();return await Ks(this,jx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,a=t.phoneNumber??void 0,l=t.photoURL??void 0,c=t.tenantId??void 0,h=t._redirectEventId??void 0,d=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:g,emailVerified:_,isAnonymous:T,providerData:k,stsTokenManager:P}=t;H(g&&P,e,"internal-error");const R=Wn.fromJSON(this.name,P);H(typeof g=="string",e,"internal-error"),$t(s,e.name),$t(r,e.name),H(typeof _=="boolean",e,"internal-error"),H(typeof T=="boolean",e,"internal-error"),$t(a,e.name),$t(l,e.name),$t(c,e.name),$t(h,e.name),$t(d,e.name),$t(f,e.name);const M=new ct({uid:g,auth:e,email:r,emailVerified:_,displayName:s,isAnonymous:T,photoURL:l,phoneNumber:a,tenantId:c,stsTokenManager:R,createdAt:d,lastLoginAt:f});return k&&Array.isArray(k)&&(M.providerData=k.map(D=>({...D}))),h&&(M._redirectEventId=h),M}static async _fromIdTokenResponse(e,t,s=!1){const r=new Wn;r.updateFromServerResponse(t);const a=new ct({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ti(a),a}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];H(r.localId!==void 0,"internal-error");const a=r.providerUserInfo!==void 0?zh(r.providerUserInfo):[],l=!(r.email&&r.passwordHash)&&!(a!=null&&a.length),c=new Wn;c.updateFromIdToken(s);const h=new ct({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:l}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new za(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(a!=null&&a.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new Map;function St(n){Pt(n instanceof Function,"Expected a class definition");let e=Rc.get(n);return e?(Pt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Rc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gh.type="NONE";const Pc=Gh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n,e,t){return`firebase:${n}:${e}:${t}`}class Hn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:a}=this.auth;this.fullUserKey=Mr(this.userKey,r.apiKey,a),this.fullPersistenceKey=Mr("persistence",r.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ei(this.auth,{idToken:e}).catch(()=>{});return t?ct._fromGetAccountInfoResponse(this.auth,t,e):null}return ct._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Hn(St(Pc),e,s);const r=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let a=r[0]||St(Pc);const l=Mr(s,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(l);if(f){let g;if(typeof f=="string"){const _=await ei(e,{idToken:f}).catch(()=>{});if(!_)break;g=await ct._fromGetAccountInfoResponse(e,_,f)}else g=ct._fromJSON(e,f);d!==a&&(c=g),a=d;break}}catch{}const h=r.filter(d=>d._shouldAllowMigration);return!a._shouldAllowMigration||!h.length?new Hn(a,e,s):(a=h[0],c&&await a._set(l,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==a)try{await d._remove(l)}catch{}})),new Hn(a,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zh(e))return"Blackberry";if(ed(e))return"Webos";if(Qh(e))return"Safari";if((e.includes("chrome/")||Yh(e))&&!e.includes("edge/"))return"Chrome";if(Xh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Kh(n=ze()){return/firefox\//i.test(n)}function Qh(n=ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yh(n=ze()){return/crios\//i.test(n)}function Jh(n=ze()){return/iemobile/i.test(n)}function Xh(n=ze()){return/android/i.test(n)}function Zh(n=ze()){return/blackberry/i.test(n)}function ed(n=ze()){return/webos/i.test(n)}function Eo(n=ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Mx(n=ze()){var e;return Eo(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Lx(){return Gg()&&document.documentMode===10}function td(n=ze()){return Eo(n)||Xh(n)||ed(n)||Zh(n)||/windows phone/i.test(n)||Jh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n,e=[]){let t;switch(n){case"Browser":t=Dc(ze());break;case"Worker":t=`${Dc(ze())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${is}/${s}`}/**
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
 */class Ox{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=a=>new Promise((l,c)=>{try{const h=e(a);l(h)}catch(h){c(h)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Fx(n,e={}){return hn(n,"GET","/v2/passwordPolicy",Cn(n,e))}/**
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
 */const Ux=6;class Bx{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Ux,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vc(this),this.idTokenSubscription=new Vc(this),this.beforeStateQueue=new Ox(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=St(t)),this._initializationPromise=this.queue(async()=>{var s,r,a;if(!this._deleted&&(this.persistenceManager=await Hn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ei(this,{idToken:e}),s=await ct._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var a;if(lt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(a=this.redirectUser)==null?void 0:a._redirectEventId,c=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===c)&&(h!=null&&h.user)&&(s=h.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ti(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lt(this.app))return Promise.reject(Zt(this));const t=e?Ee(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(Zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lt(this.app)?Promise.reject(Zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fx(this),t=new Bx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Sn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Vx(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&St(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await Hn.create(this,[St(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,s,r);return()=>{l=!0,h()}}else{const h=e.addObserver(t);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&yx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function as(n){return Ee(n)}class Vc{constructor(e){this.auth=e,this.observer=null,this.addObserver=ey(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $x(n){ji=n}function sd(n){return ji.loadJS(n)}function Wx(){return ji.recaptchaEnterpriseScript}function Hx(){return ji.gapiScript}function zx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Gx{constructor(){this.enterprise=new Kx}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Kx{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Qx="recaptcha-enterprise",rd="NO_RECAPTCHA";class Yx{constructor(e){this.type=Qx,this.auth=as(e)}async verify(e="verify",t=!1){async function s(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,c)=>{Ax(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Nx(h);return a.tenantId==null?a._agentRecaptchaConfig=d:a._tenantRecaptchaConfigs[a.tenantId]=d,l(d.siteKey)}}).catch(h=>{c(h)})})}function r(a,l,c){const h=window.grecaptcha;kc(h)?h.enterprise.ready(()=>{h.enterprise.execute(a,{action:e}).then(d=>{l(d)}).catch(()=>{l(rd)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Gx().execute("siteKey",{action:"verify"}):new Promise((a,l)=>{s(this.auth).then(c=>{if(!t&&kc(window.grecaptcha))r(c,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Wx();h.length!==0&&(h+=c),sd(h).then(()=>{r(c,a,l)}).catch(d=>{l(d)})}}).catch(c=>{l(c)})})}}async function Mc(n,e,t,s=!1,r=!1){const a=new Yx(n);let l;if(r)l=rd;else try{l=await a.verify(t)}catch{l=await a.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const h=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:d,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const h=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Lc(n,e,t,s,r){var a;if((a=n._getRecaptchaConfig())!=null&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Mc(n,e,t,t==="getOobCode");return s(n,l)}else return s(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Mc(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(n,e){const t=kn(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),a=t.getOptions();if(nn(a,e??{}))return r;dt(r,"already-initialized")}return t.initialize({options:e})}function Xx(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(St);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Zx(n,e,t){const s=as(n);H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,a=id(e),{host:l,port:c}=e0(e),h=c===null?"":`:${c}`,d={url:`${a}//${l}${h}/`},f=Object.freeze({host:l,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){H(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),H(nn(d,s.config.emulator)&&nn(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,rs(l)?(Sh(`${a}//${l}${h}`),kh("Auth",!0)):t0()}function id(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function e0(n){const e=id(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const a=r[1];return{host:a,port:Oc(s.substr(a.length+1))}}else{const[a,l]=s.split(":");return{host:a,port:Oc(l)}}}function Oc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function t0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,t){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function n0(n,e){return hn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(n,e){return Ai(n,"POST","/v1/accounts:signInWithPassword",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(n,e){return Ai(n,"POST","/v1/accounts:signInWithEmailLink",Cn(n,e))}async function i0(n,e){return Ai(n,"POST","/v1/accounts:signInWithEmailLink",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends Io{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Qs(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Qs(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lc(e,t,"signInWithPassword",s0);case"emailLink":return r0(e,{email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lc(e,s,"signUpPassword",n0);case"emailLink":return i0(e,{idToken:t,email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(n,e){return Ai(n,"POST","/v1/accounts:signInWithIdp",Cn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="http://localhost";class En extends Io{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new En(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...a}=t;if(!s||!r)return null;const l=new En(s,r);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return zn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,zn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zn(e,t)}buildRequest(){const e={requestUri:a0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ir(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function l0(n){const e=Ds(Vs(n)).link,t=e?Ds(Vs(e)).deep_link_id:null,s=Ds(Vs(n)).deep_link_id;return(s?Ds(Vs(s)).link:null)||s||t||e||n}class To{constructor(e){const t=Ds(Vs(e)),s=t.apiKey??null,r=t.oobCode??null,a=o0(t.mode??null);H(s&&r&&a,"argument-error"),this.apiKey=s,this.operation=a,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=l0(e);try{return new To(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.providerId=os.PROVIDER_ID}static credential(e,t){return Qs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=To.parseLink(t);return H(s,"argument-error"),Qs._fromEmailAndCode(e,s.code,s.tenantId)}}os.PROVIDER_ID="password";os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class or extends ad{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends or{constructor(){super("facebook.com")}static credential(e){return En._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends or{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return En._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ht.credential(t,s)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends or{constructor(){super("github.com")}static credential(e){return En._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.GITHUB_SIGN_IN_METHOD="github.com";zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends or{constructor(){super("twitter.com")}static credential(e,t){return En._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Gt.credential(t,s)}catch{return null}}}Gt.TWITTER_SIGN_IN_METHOD="twitter.com";Gt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const a=await ct._fromIdTokenResponse(e,s,r),l=Fc(s);return new Jn({user:a,providerId:l,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Fc(s);return new Jn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Fc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends ft{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ni.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new ni(e,t,s,r)}}function od(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ni._fromErrorAndOperation(n,a,e,s):a})}async function c0(n,e,t=!1){const s=await Ks(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Jn._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(n,e,t=!1){const{auth:s}=n;if(lt(s.app))return Promise.reject(Zt(s));const r="reauthenticate";try{const a=await Ks(n,od(s,r,e,n),t);H(a.idToken,s,"internal-error");const l=vo(a.idToken);H(l,s,"internal-error");const{sub:c}=l;return H(n.uid===c,s,"user-mismatch"),Jn._forOperation(n,r,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&dt(s,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld(n,e,t=!1){if(lt(n.app))return Promise.reject(Zt(n));const s="signIn",r=await od(n,s,e),a=await Jn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(a.user),a}async function h0(n,e){return ld(as(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(n){const e=as(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function m0(n,e,t){return lt(n.app)?Promise.reject(Zt(n)):h0(Ee(n),os.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&d0(n),s})}function f0(n,e,t,s){return Ee(n).onIdTokenChanged(e,t,s)}function p0(n,e,t){return Ee(n).beforeAuthStateChanged(e,t)}function Si(n,e,t,s){return Ee(n).onAuthStateChanged(e,t,s)}function g0(n){return Ee(n).signOut()}const si="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(si,"1"),this.storage.removeItem(si),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=1e3,x0=10;class ud extends cd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=td(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,c,h)=>{this.notifyListeners(l,h)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const l=this.storage.getItem(s);!t&&this.localCache[s]===l||this.notifyListeners(s,l)},a=this.storage.getItem(s);Lx()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,x0):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},y0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ud.type="LOCAL";const b0=ud;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function w0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new ki(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:a}=t.data,l=this.handlersMap[r];if(!(l!=null&&l.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(l).map(async d=>d(t.origin,a)),h=await w0(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ki.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,l;return new Promise((c,h)=>{const d=No("",20);r.port1.start();const f=setTimeout(()=>{h(new Error("unsupported_event"))},s);l={messageChannel:r,onMessage(g){const _=g;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(f),a=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),c(_.data.response);break;default:clearTimeout(f),clearTimeout(a),h(new Error("invalid_response"));break}}},this.handlers.add(l),r.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function v0(n){wt().location.href=n}/**
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
 */function md(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function E0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function I0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function T0(){return md()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="firebaseLocalStorageDb",N0=1,ri="firebaseLocalStorage",pd="fbase_key";class lr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ci(n,e){return n.transaction([ri],e?"readwrite":"readonly").objectStore(ri)}function A0(){const n=indexedDB.deleteDatabase(fd);return new lr(n).toPromise()}function Ga(){const n=indexedDB.open(fd,N0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ri,{keyPath:pd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ri)?e(s):(s.close(),await A0(),e(await Ga()))})})}async function Uc(n,e,t){const s=Ci(n,!0).put({[pd]:e,value:t});return new lr(s).toPromise()}async function j0(n,e){const t=Ci(n,!1).get(e),s=await new lr(t).toPromise();return s===void 0?null:s.value}function Bc(n,e){const t=Ci(n,!0).delete(e);return new lr(t).toPromise()}const S0=800,k0=3;class gd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ga(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>k0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return md()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ki._getInstance(T0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await E0(),!this.activeServiceWorker)return;this.sender=new _0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||I0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ga();return await Uc(e,si,"1"),await Bc(e,si),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Uc(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>j0(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const a=Ci(r,!1).getAll();return new lr(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:a}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(a)&&(this.notifyListeners(r,a),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gd.type="LOCAL";const C0=gd;new ar(3e4,6e4);/**
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
 */function R0(n,e){return e?St(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Io{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function P0(n){return ld(n.auth,new Ao(n),n.bypassAuthState)}function D0(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),u0(t,new Ao(n),n.bypassAuthState)}async function V0(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),c0(t,new Ao(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t,s,r,a=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:a,error:l,type:c}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:t,sessionId:s,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return P0;case"linkViaPopup":case"linkViaRedirect":return V0;case"reauthViaPopup":case"reauthViaRedirect":return D0;default:dt(this.auth,"internal-error")}}resolve(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=new ar(2e3,1e4);class $n extends yd{constructor(e,t,s,r,a){super(e,t,r,a),this.provider=s,this.authWindow=null,this.pollId=null,$n.currentPopupAction&&$n.currentPopupAction.cancel(),$n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Pt(this.filter.length===1,"Popup operations only handle one event");const e=No();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,M0.get())};e()}}$n.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="pendingRedirect",Lr=new Map;class O0 extends yd{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Lr.get(this.auth._key());if(!e){try{const s=await F0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Lr.set(this.auth._key(),e)}return this.bypassAuthState||Lr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function F0(n,e){const t=q0(e),s=B0(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function U0(n,e){Lr.set(n._key(),e)}function B0(n){return St(n._redirectPersistence)}function q0(n){return Mr(L0,n.config.apiKey,n.name)}async function $0(n,e,t=!1){if(lt(n.app))return Promise.reject(Zt(n));const s=as(n),r=R0(s,e),l=await new O0(s,r,t).execute();return l&&!t&&(delete l.user._redirectEventId,await s._persistUserIfCurrent(l.user),await s._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=600*1e3;class H0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!z0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!xd(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(bt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=W0&&this.cachedEventUids.clear(),this.cachedEventUids.has(qc(e))}saveEventToCache(e){this.cachedEventUids.add(qc(e)),this.lastProcessedEventTime=Date.now()}}function qc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function xd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function z0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G0(n,e={}){return hn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Q0=/^https?/;async function Y0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await G0(n);for(const t of e)try{if(J0(t))return}catch{}dt(n,"unauthorized-domain")}function J0(n){const e=Ha(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===s}if(!Q0.test(t))return!1;if(K0.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const X0=new ar(3e4,6e4);function $c(){const n=wt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Z0(n){return new Promise((e,t)=>{var r,a,l;function s(){$c(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$c(),t(bt(n,"network-request-failed"))},timeout:X0.get()})}if((a=(r=wt().gapi)==null?void 0:r.iframes)!=null&&a.Iframe)e(gapi.iframes.getContext());else if((l=wt().gapi)!=null&&l.load)s();else{const c=zx("iframefcb");return wt()[c]=()=>{gapi.load?s():t(bt(n,"network-request-failed"))},sd(`${Hx()}?onload=${c}`).catch(h=>t(h))}}).catch(e=>{throw Or=null,e})}let Or=null;function eb(n){return Or=Or||Z0(n),Or}/**
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
 */const tb=new ar(5e3,15e3),nb="__/auth/iframe",sb="emulator/auth/iframe",rb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ib=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ab(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_o(e,sb):`https://${n.config.authDomain}/${nb}`,s={apiKey:e.apiKey,appName:n.name,v:is},r=ib.get(n.config.apiHost);r&&(s.eid=r);const a=n._getFrameworks();return a.length&&(s.fw=a.join(",")),`${t}?${ir(s).slice(1)}`}async function ob(n){const e=await eb(n),t=wt().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:ab(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rb,dontclear:!0},s=>new Promise(async(r,a)=>{await s.restyle({setHideOnLeave:!1});const l=bt(n,"network-request-failed"),c=wt().setTimeout(()=>{a(l)},tb.get());function h(){wt().clearTimeout(c),r(s)}s.ping(h).then(h,()=>{a(l)})}))}/**
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
 */const lb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cb=500,ub=600,hb="_blank",db="http://localhost";class Wc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mb(n,e,t,s=cb,r=ub){const a=Math.max((window.screen.availHeight-r)/2,0).toString(),l=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const h={...lb,width:s.toString(),height:r.toString(),top:a,left:l},d=ze().toLowerCase();t&&(c=Yh(d)?hb:t),Kh(d)&&(e=e||db,h.scrollbars="yes");const f=Object.entries(h).reduce((_,[T,k])=>`${_}${T}=${k},`,"");if(Mx(d)&&c!=="_self")return fb(e||"",c),new Wc(null);const g=window.open(e||"",c,f);H(g,n,"popup-blocked");try{g.focus()}catch{}return new Wc(g)}function fb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const pb="__/auth/handler",gb="emulator/auth/handler",yb=encodeURIComponent("fac");async function Hc(n,e,t,s,r,a){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:is,eventId:r};if(e instanceof ad){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",Zg(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))l[f]=g}if(e instanceof or){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(l.scopes=f.join(","))}n.tenantId&&(l.tid=n.tenantId);const c=l;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const h=await n._getAppCheckToken(),d=h?`#${yb}=${encodeURIComponent(h)}`:"";return`${xb(n)}?${ir(c).slice(1)}${d}`}function xb({config:n}){return n.emulator?_o(n,gb):`https://${n.authDomain}/${pb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="webStorageSupport";class bb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dd,this._completeRedirectFn=$0,this._overrideRedirectResult=U0}async _openPopup(e,t,s,r){var l;Pt((l=this.eventManagers[e._key()])==null?void 0:l.manager,"_initialize() not called before _openPopup()");const a=await Hc(e,t,s,Ha(),r);return mb(e,a,No())}async _openRedirect(e,t,s,r){await this._originValidation(e);const a=await Hc(e,t,s,Ha(),r);return v0(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:a}=this.eventManagers[t];return r?Promise.resolve(r):(Pt(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await ob(e),s=new H0(e);return t.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ia,{type:Ia},r=>{var l;const a=(l=r==null?void 0:r[0])==null?void 0:l[Ia];a!==void 0&&t(!!a),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Y0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return td()||Qh()||Eo()}}const wb=bb;var zc="@firebase/auth",Gc="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Eb(n){Nt(new ht("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=s.options;H(l&&!l.includes(":"),"invalid-api-key",{appName:s.name});const h={apiKey:l,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nd(n)},d=new qx(s,r,a,h);return Xx(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Nt(new ht("auth-internal",e=>{const t=as(e.getProvider("auth").getImmediate());return(s=>new _b(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(zc,Gc,vb(n)),at(zc,Gc,"esm2020")}/**
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
 */const Ib=300,Tb=jh("authIdTokenMaxAge")||Ib;let Kc=null;const Nb=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Tb)return;const r=t==null?void 0:t.token;Kc!==r&&(Kc=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ab(n=bo()){const e=kn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Jx(n,{popupRedirectResolver:wb,persistence:[C0,b0,dd]}),s=jh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(s,location.origin);if(location.origin===a.origin){const l=Nb(a.toString());p0(t,l,()=>l(t.currentUser)),f0(t,c=>l(c))}}const r=Nh("auth");return r&&Zx(t,`http://${r}`),t}function jb(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}$x({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const a=bt("internal-error");a.customData=r,t(a)},s.type="text/javascript",s.charset="UTF-8",jb().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Eb("Browser");var Qc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var en,bd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,x){function y(){}y.prototype=x.prototype,E.F=x.prototype,E.prototype=new y,E.prototype.constructor=E,E.D=function(w,v,I){for(var b=Array(arguments.length-2),W=2;W<arguments.length;W++)b[W-2]=arguments[W];return x.prototype[v].apply(w,b)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,x,y){y||(y=0);const w=Array(16);if(typeof x=="string")for(var v=0;v<16;++v)w[v]=x.charCodeAt(y++)|x.charCodeAt(y++)<<8|x.charCodeAt(y++)<<16|x.charCodeAt(y++)<<24;else for(v=0;v<16;++v)w[v]=x[y++]|x[y++]<<8|x[y++]<<16|x[y++]<<24;x=E.g[0],y=E.g[1],v=E.g[2];let I=E.g[3],b;b=x+(I^y&(v^I))+w[0]+3614090360&4294967295,x=y+(b<<7&4294967295|b>>>25),b=I+(v^x&(y^v))+w[1]+3905402710&4294967295,I=x+(b<<12&4294967295|b>>>20),b=v+(y^I&(x^y))+w[2]+606105819&4294967295,v=I+(b<<17&4294967295|b>>>15),b=y+(x^v&(I^x))+w[3]+3250441966&4294967295,y=v+(b<<22&4294967295|b>>>10),b=x+(I^y&(v^I))+w[4]+4118548399&4294967295,x=y+(b<<7&4294967295|b>>>25),b=I+(v^x&(y^v))+w[5]+1200080426&4294967295,I=x+(b<<12&4294967295|b>>>20),b=v+(y^I&(x^y))+w[6]+2821735955&4294967295,v=I+(b<<17&4294967295|b>>>15),b=y+(x^v&(I^x))+w[7]+4249261313&4294967295,y=v+(b<<22&4294967295|b>>>10),b=x+(I^y&(v^I))+w[8]+1770035416&4294967295,x=y+(b<<7&4294967295|b>>>25),b=I+(v^x&(y^v))+w[9]+2336552879&4294967295,I=x+(b<<12&4294967295|b>>>20),b=v+(y^I&(x^y))+w[10]+4294925233&4294967295,v=I+(b<<17&4294967295|b>>>15),b=y+(x^v&(I^x))+w[11]+2304563134&4294967295,y=v+(b<<22&4294967295|b>>>10),b=x+(I^y&(v^I))+w[12]+1804603682&4294967295,x=y+(b<<7&4294967295|b>>>25),b=I+(v^x&(y^v))+w[13]+4254626195&4294967295,I=x+(b<<12&4294967295|b>>>20),b=v+(y^I&(x^y))+w[14]+2792965006&4294967295,v=I+(b<<17&4294967295|b>>>15),b=y+(x^v&(I^x))+w[15]+1236535329&4294967295,y=v+(b<<22&4294967295|b>>>10),b=x+(v^I&(y^v))+w[1]+4129170786&4294967295,x=y+(b<<5&4294967295|b>>>27),b=I+(y^v&(x^y))+w[6]+3225465664&4294967295,I=x+(b<<9&4294967295|b>>>23),b=v+(x^y&(I^x))+w[11]+643717713&4294967295,v=I+(b<<14&4294967295|b>>>18),b=y+(I^x&(v^I))+w[0]+3921069994&4294967295,y=v+(b<<20&4294967295|b>>>12),b=x+(v^I&(y^v))+w[5]+3593408605&4294967295,x=y+(b<<5&4294967295|b>>>27),b=I+(y^v&(x^y))+w[10]+38016083&4294967295,I=x+(b<<9&4294967295|b>>>23),b=v+(x^y&(I^x))+w[15]+3634488961&4294967295,v=I+(b<<14&4294967295|b>>>18),b=y+(I^x&(v^I))+w[4]+3889429448&4294967295,y=v+(b<<20&4294967295|b>>>12),b=x+(v^I&(y^v))+w[9]+568446438&4294967295,x=y+(b<<5&4294967295|b>>>27),b=I+(y^v&(x^y))+w[14]+3275163606&4294967295,I=x+(b<<9&4294967295|b>>>23),b=v+(x^y&(I^x))+w[3]+4107603335&4294967295,v=I+(b<<14&4294967295|b>>>18),b=y+(I^x&(v^I))+w[8]+1163531501&4294967295,y=v+(b<<20&4294967295|b>>>12),b=x+(v^I&(y^v))+w[13]+2850285829&4294967295,x=y+(b<<5&4294967295|b>>>27),b=I+(y^v&(x^y))+w[2]+4243563512&4294967295,I=x+(b<<9&4294967295|b>>>23),b=v+(x^y&(I^x))+w[7]+1735328473&4294967295,v=I+(b<<14&4294967295|b>>>18),b=y+(I^x&(v^I))+w[12]+2368359562&4294967295,y=v+(b<<20&4294967295|b>>>12),b=x+(y^v^I)+w[5]+4294588738&4294967295,x=y+(b<<4&4294967295|b>>>28),b=I+(x^y^v)+w[8]+2272392833&4294967295,I=x+(b<<11&4294967295|b>>>21),b=v+(I^x^y)+w[11]+1839030562&4294967295,v=I+(b<<16&4294967295|b>>>16),b=y+(v^I^x)+w[14]+4259657740&4294967295,y=v+(b<<23&4294967295|b>>>9),b=x+(y^v^I)+w[1]+2763975236&4294967295,x=y+(b<<4&4294967295|b>>>28),b=I+(x^y^v)+w[4]+1272893353&4294967295,I=x+(b<<11&4294967295|b>>>21),b=v+(I^x^y)+w[7]+4139469664&4294967295,v=I+(b<<16&4294967295|b>>>16),b=y+(v^I^x)+w[10]+3200236656&4294967295,y=v+(b<<23&4294967295|b>>>9),b=x+(y^v^I)+w[13]+681279174&4294967295,x=y+(b<<4&4294967295|b>>>28),b=I+(x^y^v)+w[0]+3936430074&4294967295,I=x+(b<<11&4294967295|b>>>21),b=v+(I^x^y)+w[3]+3572445317&4294967295,v=I+(b<<16&4294967295|b>>>16),b=y+(v^I^x)+w[6]+76029189&4294967295,y=v+(b<<23&4294967295|b>>>9),b=x+(y^v^I)+w[9]+3654602809&4294967295,x=y+(b<<4&4294967295|b>>>28),b=I+(x^y^v)+w[12]+3873151461&4294967295,I=x+(b<<11&4294967295|b>>>21),b=v+(I^x^y)+w[15]+530742520&4294967295,v=I+(b<<16&4294967295|b>>>16),b=y+(v^I^x)+w[2]+3299628645&4294967295,y=v+(b<<23&4294967295|b>>>9),b=x+(v^(y|~I))+w[0]+4096336452&4294967295,x=y+(b<<6&4294967295|b>>>26),b=I+(y^(x|~v))+w[7]+1126891415&4294967295,I=x+(b<<10&4294967295|b>>>22),b=v+(x^(I|~y))+w[14]+2878612391&4294967295,v=I+(b<<15&4294967295|b>>>17),b=y+(I^(v|~x))+w[5]+4237533241&4294967295,y=v+(b<<21&4294967295|b>>>11),b=x+(v^(y|~I))+w[12]+1700485571&4294967295,x=y+(b<<6&4294967295|b>>>26),b=I+(y^(x|~v))+w[3]+2399980690&4294967295,I=x+(b<<10&4294967295|b>>>22),b=v+(x^(I|~y))+w[10]+4293915773&4294967295,v=I+(b<<15&4294967295|b>>>17),b=y+(I^(v|~x))+w[1]+2240044497&4294967295,y=v+(b<<21&4294967295|b>>>11),b=x+(v^(y|~I))+w[8]+1873313359&4294967295,x=y+(b<<6&4294967295|b>>>26),b=I+(y^(x|~v))+w[15]+4264355552&4294967295,I=x+(b<<10&4294967295|b>>>22),b=v+(x^(I|~y))+w[6]+2734768916&4294967295,v=I+(b<<15&4294967295|b>>>17),b=y+(I^(v|~x))+w[13]+1309151649&4294967295,y=v+(b<<21&4294967295|b>>>11),b=x+(v^(y|~I))+w[4]+4149444226&4294967295,x=y+(b<<6&4294967295|b>>>26),b=I+(y^(x|~v))+w[11]+3174756917&4294967295,I=x+(b<<10&4294967295|b>>>22),b=v+(x^(I|~y))+w[2]+718787259&4294967295,v=I+(b<<15&4294967295|b>>>17),b=y+(I^(v|~x))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+x&4294967295,E.g[1]=E.g[1]+(v+(b<<21&4294967295|b>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+I&4294967295}s.prototype.v=function(E,x){x===void 0&&(x=E.length);const y=x-this.blockSize,w=this.C;let v=this.h,I=0;for(;I<x;){if(v==0)for(;I<=y;)r(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<x;)if(w[v++]=E.charCodeAt(I++),v==this.blockSize){r(this,w),v=0;break}}else for(;I<x;)if(w[v++]=E[I++],v==this.blockSize){r(this,w),v=0;break}}this.h=v,this.o+=x},s.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var x=1;x<E.length-8;++x)E[x]=0;x=this.o*8;for(var y=E.length-8;y<E.length;++y)E[y]=x&255,x/=256;for(this.v(E),E=Array(16),x=0,y=0;y<4;++y)for(let w=0;w<32;w+=8)E[x++]=this.g[y]>>>w&255;return E};function a(E,x){var y=c;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=x(E)}function l(E,x){this.h=x;const y=[];let w=!0;for(let v=E.length-1;v>=0;v--){const I=E[v]|0;w&&I==x||(y[v]=I,w=!1)}this.g=y}var c={};function h(E){return-128<=E&&E<128?a(E,function(x){return new l([x|0],x<0?-1:0)}):new l([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return g;if(E<0)return R(d(-E));const x=[];let y=1;for(let w=0;E>=y;w++)x[w]=E/y|0,y*=4294967296;return new l(x,0)}function f(E,x){if(E.length==0)throw Error("number format error: empty string");if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(E.charAt(0)=="-")return R(f(E.substring(1),x));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(x,8));let w=g;for(let I=0;I<E.length;I+=8){var v=Math.min(8,E.length-I);const b=parseInt(E.substring(I,I+v),x);v<8?(v=d(Math.pow(x,v)),w=w.j(v).add(d(b))):(w=w.j(y),w=w.add(d(b)))}return w}var g=h(0),_=h(1),T=h(16777216);n=l.prototype,n.m=function(){if(P(this))return-R(this).m();let E=0,x=1;for(let y=0;y<this.g.length;y++){const w=this.i(y);E+=(w>=0?w:4294967296+w)*x,x*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(P(this))return"-"+R(this).toString(E);const x=d(Math.pow(E,6));var y=this;let w="";for(;;){const v=Y(y,x).g;y=M(y,v.j(x));let I=((y.g.length>0?y.g[0]:y.h)>>>0).toString(E);if(y=v,k(y))return I+w;for(;I.length<6;)I="0"+I;w=I+w}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(let x=0;x<E.g.length;x++)if(E.g[x]!=0)return!1;return!0}function P(E){return E.h==-1}n.l=function(E){return E=M(this,E),P(E)?-1:k(E)?0:1};function R(E){const x=E.g.length,y=[];for(let w=0;w<x;w++)y[w]=~E.g[w];return new l(y,~E.h).add(_)}n.abs=function(){return P(this)?R(this):this},n.add=function(E){const x=Math.max(this.g.length,E.g.length),y=[];let w=0;for(let v=0;v<=x;v++){let I=w+(this.i(v)&65535)+(E.i(v)&65535),b=(I>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);w=b>>>16,I&=65535,b&=65535,y[v]=b<<16|I}return new l(y,y[y.length-1]&-2147483648?-1:0)};function M(E,x){return E.add(R(x))}n.j=function(E){if(k(this)||k(E))return g;if(P(this))return P(E)?R(this).j(R(E)):R(R(this).j(E));if(P(E))return R(this.j(R(E)));if(this.l(T)<0&&E.l(T)<0)return d(this.m()*E.m());const x=this.g.length+E.g.length,y=[];for(var w=0;w<2*x;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(let v=0;v<E.g.length;v++){const I=this.i(w)>>>16,b=this.i(w)&65535,W=E.i(v)>>>16,Z=E.i(v)&65535;y[2*w+2*v]+=b*Z,D(y,2*w+2*v),y[2*w+2*v+1]+=I*Z,D(y,2*w+2*v+1),y[2*w+2*v+1]+=b*W,D(y,2*w+2*v+1),y[2*w+2*v+2]+=I*W,D(y,2*w+2*v+2)}for(E=0;E<x;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=x;E<2*x;E++)y[E]=0;return new l(y,0)};function D(E,x){for(;(E[x]&65535)!=E[x];)E[x+1]+=E[x]>>>16,E[x]&=65535,x++}function B(E,x){this.g=E,this.h=x}function Y(E,x){if(k(x))throw Error("division by zero");if(k(E))return new B(g,g);if(P(E))return x=Y(R(E),x),new B(R(x.g),R(x.h));if(P(x))return x=Y(E,R(x)),new B(R(x.g),x.h);if(E.g.length>30){if(P(E)||P(x))throw Error("slowDivide_ only works with positive integers.");for(var y=_,w=x;w.l(E)<=0;)y=oe(y),w=oe(w);var v=te(y,1),I=te(w,1);for(w=te(w,2),y=te(y,2);!k(w);){var b=I.add(w);b.l(E)<=0&&(v=v.add(y),I=b),w=te(w,1),y=te(y,1)}return x=M(E,v.j(x)),new B(v,x)}for(v=g;E.l(x)>=0;){for(y=Math.max(1,Math.floor(E.m()/x.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),I=d(y),b=I.j(x);P(b)||b.l(E)>0;)y-=w,I=d(y),b=I.j(x);k(I)&&(I=_),v=v.add(I),E=M(E,b)}return new B(v,E)}n.B=function(E){return Y(this,E).h},n.and=function(E){const x=Math.max(this.g.length,E.g.length),y=[];for(let w=0;w<x;w++)y[w]=this.i(w)&E.i(w);return new l(y,this.h&E.h)},n.or=function(E){const x=Math.max(this.g.length,E.g.length),y=[];for(let w=0;w<x;w++)y[w]=this.i(w)|E.i(w);return new l(y,this.h|E.h)},n.xor=function(E){const x=Math.max(this.g.length,E.g.length),y=[];for(let w=0;w<x;w++)y[w]=this.i(w)^E.i(w);return new l(y,this.h^E.h)};function oe(E){const x=E.g.length+1,y=[];for(let w=0;w<x;w++)y[w]=E.i(w)<<1|E.i(w-1)>>>31;return new l(y,E.h)}function te(E,x){const y=x>>5;x%=32;const w=E.g.length-y,v=[];for(let I=0;I<w;I++)v[I]=x>0?E.i(I+y)>>>x|E.i(I+y+1)<<32-x:E.i(I+y);return new l(v,E.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,bd=s,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=d,l.fromString=f,en=l}).apply(typeof Qc<"u"?Qc:typeof self<"u"?self:typeof window<"u"?window:{});var jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wd,Ms,_d,Fr,Ka,vd,Ed,Id;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof jr=="object"&&jr];for(var u=0;u<o.length;++u){var m=o[u];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=t(this);function r(o,u){if(u)e:{var m=s;o=o.split(".");for(var p=0;p<o.length-1;p++){var N=o[p];if(!(N in m))break e;m=m[N]}o=o[o.length-1],p=m[o],u=u(p),u!=p&&u!=null&&e(m,o,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(u){var m=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&m.push([p,u[p]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function h(o,u,m){return o.call.apply(o.bind,arguments)}function d(o,u,m){return d=h,d.apply(null,arguments)}function f(o,u){var m=Array.prototype.slice.call(arguments,1);return function(){var p=m.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function g(o,u){function m(){}m.prototype=u.prototype,o.Z=u.prototype,o.prototype=new m,o.prototype.constructor=o,o.Ob=function(p,N,A){for(var L=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)L[ee-2]=arguments[ee];return u.prototype[N].apply(p,L)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function T(o){const u=o.length;if(u>0){const m=Array(u);for(let p=0;p<u;p++)m[p]=o[p];return m}return[]}function k(o,u){for(let p=1;p<arguments.length;p++){const N=arguments[p];var m=typeof N;if(m=m!="object"?m:N?Array.isArray(N)?"array":m:"null",m=="array"||m=="object"&&typeof N.length=="number"){m=o.length||0;const A=N.length||0;o.length=m+A;for(let L=0;L<A;L++)o[m+L]=N[L]}else o.push(N)}}class P{constructor(u,m){this.i=u,this.j=m,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function R(o){l.setTimeout(()=>{throw o},0)}function M(){var o=E;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class D{constructor(){this.h=this.g=null}add(u,m){const p=B.get();p.set(u,m),this.h?this.h.next=p:this.g=p,this.h=p}}var B=new P(()=>new Y,o=>o.reset());class Y{constructor(){this.next=this.g=this.h=null}set(u,m){this.h=u,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,te=!1,E=new D,x=()=>{const o=Promise.resolve(void 0);oe=()=>{o.then(y)}};function y(){for(var o;o=M();){try{o.h.call(o.g)}catch(m){R(m)}var u=B;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}te=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const m=()=>{};l.addEventListener("test",m,u),l.removeEventListener("test",m,u)}catch{}return o})();function b(o){return/^[\s\xa0]*$/.test(o)}function W(o,u){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}g(W,v),W.prototype.init=function(o,u){const m=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(m=="mouseover"?u=o.fromElement:m=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&W.Z.h.call(this)},W.prototype.h=function(){W.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Z="closure_listenable_"+(Math.random()*1e6|0),V=0;function ie(o,u,m,p,N){this.listener=o,this.proxy=null,this.src=u,this.type=m,this.capture=!!p,this.ha=N,this.key=++V,this.da=this.fa=!1}function O(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function K(o,u,m){for(const p in o)u.call(m,o[p],p,o)}function me(o,u){for(const m in o)u.call(void 0,o[m],m,o)}function De(o){const u={};for(const m in o)u[m]=o[m];return u}const _e="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ze(o,u){let m,p;for(let N=1;N<arguments.length;N++){p=arguments[N];for(m in p)o[m]=p[m];for(let A=0;A<_e.length;A++)m=_e[A],Object.prototype.hasOwnProperty.call(p,m)&&(o[m]=p[m])}}function st(o){this.src=o,this.g={},this.h=0}st.prototype.add=function(o,u,m,p,N){const A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);const L=fs(o,u,p,N);return L>-1?(u=o[L],m||(u.fa=!1)):(u=new ie(u,this.src,A,!!p,N),u.fa=m,o.push(u)),u};function ms(o,u){const m=u.type;if(m in o.g){var p=o.g[m],N=Array.prototype.indexOf.call(p,u,void 0),A;(A=N>=0)&&Array.prototype.splice.call(p,N,1),A&&(O(u),o.g[m].length==0&&(delete o.g[m],o.h--))}}function fs(o,u,m,p){for(let N=0;N<o.length;++N){const A=o[N];if(!A.da&&A.listener==u&&A.capture==!!m&&A.ha==p)return N}return-1}var ps="closure_lm_"+(Math.random()*1e6|0),gs={};function q(o,u,m,p,N){if(Array.isArray(u)){for(let A=0;A<u.length;A++)q(o,u[A],m,p,N);return null}return m=rt(m),o&&o[Z]?o.J(u,m,c(p)?!!p.capture:!1,N):G(o,u,m,!1,p,N)}function G(o,u,m,p,N,A){if(!u)throw Error("Invalid event type");const L=c(N)?!!N.capture:!!N;let ee=Ue(o);if(ee||(o[ps]=ee=new st(o)),m=ee.add(u,m,p,L,A),m.proxy)return m;if(p=le(),m.proxy=p,p.src=o,p.listener=m,o.addEventListener)I||(N=L),N===void 0&&(N=!1),o.addEventListener(u.toString(),p,N);else if(o.attachEvent)o.attachEvent(fe(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return m}function le(){function o(m){return u.call(o.src,o.listener,m)}const u=ke;return o}function ue(o,u,m,p,N){if(Array.isArray(u))for(var A=0;A<u.length;A++)ue(o,u[A],m,p,N);else p=c(p)?!!p.capture:!!p,m=rt(m),o&&o[Z]?(o=o.i,A=String(u).toString(),A in o.g&&(u=o.g[A],m=fs(u,m,p,N),m>-1&&(O(u[m]),Array.prototype.splice.call(u,m,1),u.length==0&&(delete o.g[A],o.h--)))):o&&(o=Ue(o))&&(u=o.g[u.toString()],o=-1,u&&(o=fs(u,m,p,N)),(m=o>-1?u[o]:null)&&Fe(m))}function Fe(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Z])ms(u.i,o);else{var m=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(m,p,o.capture):u.detachEvent?u.detachEvent(fe(m),p):u.addListener&&u.removeListener&&u.removeListener(p),(m=Ue(u))?(ms(m,o),m.h==0&&(m.src=null,u[ps]=null)):O(o)}}}function fe(o){return o in gs?gs[o]:gs[o]="on"+o}function ke(o,u){if(o.da)o=!0;else{u=new W(u,this);const m=o.listener,p=o.ha||o.src;o.fa&&Fe(o),o=m.call(p,u)}return o}function Ue(o){return o=o[ps],o instanceof st?o:null}var mn="__closure_events_fn_"+(Math.random()*1e9>>>0);function rt(o){return typeof o=="function"?o:(o[mn]||(o[mn]=function(u){return o.handleEvent(u)}),o[mn])}function Be(){w.call(this),this.i=new st(this),this.M=this,this.G=null}g(Be,w),Be.prototype[Z]=!0,Be.prototype.removeEventListener=function(o,u,m,p){ue(this,o,u,m,p)};function Ge(o,u){var m,p=o.G;if(p)for(m=[];p;p=p.G)m.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new v(u,o);else if(u instanceof v)u.target=u.target||o;else{var N=u;u=new v(p,o),Ze(u,N)}N=!0;let A,L;if(m)for(L=m.length-1;L>=0;L--)A=u.g=m[L],N=fr(A,p,!0,u)&&N;if(A=u.g=o,N=fr(A,p,!0,u)&&N,N=fr(A,p,!1,u)&&N,m)for(L=0;L<m.length;L++)A=u.g=m[L],N=fr(A,p,!1,u)&&N}Be.prototype.N=function(){if(Be.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const m=o.g[u];for(let p=0;p<m.length;p++)O(m[p]);delete o.g[u],o.h--}}this.G=null},Be.prototype.J=function(o,u,m,p){return this.i.add(String(o),u,!1,m,p)},Be.prototype.K=function(o,u,m,p){return this.i.add(String(o),u,!0,m,p)};function fr(o,u,m,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let N=!0;for(let A=0;A<u.length;++A){const L=u[A];if(L&&!L.da&&L.capture==m){const ee=L.listener,je=L.ha||L.src;L.fa&&ms(o.i,L),N=ee.call(je,p)!==!1&&N}}return N&&!p.defaultPrevented}function If(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:l.setTimeout(o,u||0)}function fl(o){o.g=If(()=>{o.g=null,o.i&&(o.i=!1,fl(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Tf extends w{constructor(u,m){super(),this.m=u,this.l=m,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:fl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(o){w.call(this),this.h=o,this.g={}}g(ys,w);var pl=[];function gl(o){K(o.g,function(u,m){this.g.hasOwnProperty(m)&&Fe(u)},o),o.g={}}ys.prototype.N=function(){ys.Z.N.call(this),gl(this)},ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ea=l.JSON.stringify,Nf=l.JSON.parse,Af=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function yl(){}function xl(){}var xs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ta(){v.call(this,"d")}g(ta,v);function na(){v.call(this,"c")}g(na,v);var fn={},bl=null;function pr(){return bl=bl||new Be}fn.Ia="serverreachability";function wl(o){v.call(this,fn.Ia,o)}g(wl,v);function bs(o){const u=pr();Ge(u,new wl(u))}fn.STAT_EVENT="statevent";function _l(o,u){v.call(this,fn.STAT_EVENT,o),this.stat=u}g(_l,v);function Ke(o){const u=pr();Ge(u,new _l(u,o))}fn.Ja="timingevent";function vl(o,u){v.call(this,fn.Ja,o),this.size=u}g(vl,v);function ws(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function _s(){this.g=!0}_s.prototype.ua=function(){this.g=!1};function jf(o,u,m,p,N,A){o.info(function(){if(o.g)if(A){var L="",ee=A.split("&");for(let de=0;de<ee.length;de++){var je=ee[de].split("=");if(je.length>1){const Ce=je[0];je=je[1];const gt=Ce.split("_");L=gt.length>=2&&gt[1]=="type"?L+(Ce+"="+je+"&"):L+(Ce+"=redacted&")}}}else L=null;else L=A;return"XMLHTTP REQ ("+p+") [attempt "+N+"]: "+u+`
`+m+`
`+L})}function Sf(o,u,m,p,N,A,L){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+N+"]: "+u+`
`+m+`
`+A+" "+L})}function Mn(o,u,m,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Cf(o,m)+(p?" "+p:"")})}function kf(o,u){o.info(function(){return"TIMEOUT: "+u})}_s.prototype.info=function(){};function Cf(o,u){if(!o.g)return u;if(!u)return null;try{const A=JSON.parse(u);if(A){for(o=0;o<A.length;o++)if(Array.isArray(A[o])){var m=A[o];if(!(m.length<2)){var p=m[1];if(Array.isArray(p)&&!(p.length<1)){var N=p[0];if(N!="noop"&&N!="stop"&&N!="close")for(let L=1;L<p.length;L++)p[L]=""}}}}return ea(A)}catch{return u}}var gr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},El={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Il;function sa(){}g(sa,yl),sa.prototype.g=function(){return new XMLHttpRequest},Il=new sa;function vs(o){return encodeURIComponent(String(o))}function Rf(o){var u=1;o=o.split(":");const m=[];for(;u>0&&o.length;)m.push(o.shift()),u--;return o.length&&m.push(o.join(":")),m}function Lt(o,u,m,p){this.j=o,this.i=u,this.l=m,this.S=p||1,this.V=new ys(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Tl}function Tl(){this.i=null,this.g="",this.h=!1}var Nl={},ra={};function ia(o,u,m){o.M=1,o.A=xr(pt(u)),o.u=m,o.R=!0,Al(o,null)}function Al(o,u){o.F=Date.now(),yr(o),o.B=pt(o.A);var m=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Ul(m.i,"t",p),o.C=0,m=o.j.L,o.h=new Tl,o.g=rc(o.j,m?u:null,!o.u),o.P>0&&(o.O=new Tf(d(o.Y,o,o.g),o.P)),u=o.V,m=o.g,p=o.ba;var N="readystatechange";Array.isArray(N)||(N&&(pl[0]=N.toString()),N=pl);for(let A=0;A<N.length;A++){const L=q(m,N[A],p||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=o.J?De(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),bs(),jf(o.i,o.v,o.B,o.l,o.S,o.u)}Lt.prototype.ba=function(o){o=o.target;const u=this.O;u&&Ut(o)==3?u.j():this.Y(o)},Lt.prototype.Y=function(o){try{if(o==this.g)e:{const ee=Ut(this.g),je=this.g.ya(),de=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||Gl(this.g)))){this.K||ee!=4||je==7||(je==8||de<=0?bs(3):bs(2)),aa(this);var u=this.g.ca();this.X=u;var m=Pf(this);if(this.o=u==200,Sf(this.i,this.v,this.B,this.l,this.S,ee,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,N=this.g;if((p=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(p)){var A=p;break t}}A=null}if(o=A)Mn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,oa(this,o);else{this.o=!1,this.m=3,Ke(12),pn(this),Es(this);break e}}if(this.R){o=!0;let Ce;for(;!this.K&&this.C<m.length;)if(Ce=Df(this,m),Ce==ra){ee==4&&(this.m=4,Ke(14),o=!1),Mn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ce==Nl){this.m=4,Ke(15),Mn(this.i,this.l,m,"[Invalid Chunk]"),o=!1;break}else Mn(this.i,this.l,Ce,null),oa(this,Ce);if(jl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||m.length!=0||this.h.h||(this.m=1,Ke(16),o=!1),this.o=this.o&&o,!o)Mn(this.i,this.l,m,"[Invalid Chunked Response]"),pn(this),Es(this);else if(m.length>0&&!this.W){this.W=!0;var L=this.j;L.g==this&&L.aa&&!L.P&&(L.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),pa(L),L.P=!0,Ke(11))}}else Mn(this.i,this.l,m,null),oa(this,m);ee==4&&pn(this),this.o&&!this.K&&(ee==4?ec(this.j,this):(this.o=!1,yr(this)))}else Kf(this.g),u==400&&m.indexOf("Unknown SID")>0?(this.m=3,Ke(12)):(this.m=0,Ke(13)),pn(this),Es(this)}}}catch{}finally{}};function Pf(o){if(!jl(o))return o.g.la();const u=Gl(o.g);if(u==="")return"";let m="";const p=u.length,N=Ut(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return pn(o),Es(o),"";o.h.i=new l.TextDecoder}for(let A=0;A<p;A++)o.h.h=!0,m+=o.h.i.decode(u[A],{stream:!(N&&A==p-1)});return u.length=0,o.h.g+=m,o.C=0,o.h.g}function jl(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Df(o,u){var m=o.C,p=u.indexOf(`
`,m);return p==-1?ra:(m=Number(u.substring(m,p)),isNaN(m)?Nl:(p+=1,p+m>u.length?ra:(u=u.slice(p,p+m),o.C=p+m,u)))}Lt.prototype.cancel=function(){this.K=!0,pn(this)};function yr(o){o.T=Date.now()+o.H,Sl(o,o.H)}function Sl(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ws(d(o.aa,o),u)}function aa(o){o.D&&(l.clearTimeout(o.D),o.D=null)}Lt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(kf(this.i,this.B),this.M!=2&&(bs(),Ke(17)),pn(this),this.m=2,Es(this)):Sl(this,this.T-o)};function Es(o){o.j.I==0||o.K||ec(o.j,o)}function pn(o){aa(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,gl(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function oa(o,u){try{var m=o.j;if(m.I!=0&&(m.g==o||la(m.h,o))){if(!o.L&&la(m.h,o)&&m.I==3){try{var p=m.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var N=p;if(N[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<o.F)Er(m),_r(m);else break e;fa(m),Ke(18)}}else m.xa=N[1],0<m.xa-m.K&&N[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=ws(d(m.Va,m),6e3));Rl(m.h)<=1&&m.ta&&(m.ta=void 0)}else yn(m,11)}else if((o.L||m.g==o)&&Er(m),!b(u))for(N=m.Ba.g.parse(u),u=0;u<N.length;u++){let de=N[u];const Ce=de[0];if(!(Ce<=m.K))if(m.K=Ce,de=de[1],m.I==2)if(de[0]=="c"){m.M=de[1],m.ba=de[2];const gt=de[3];gt!=null&&(m.ka=gt,m.j.info("VER="+m.ka));const xn=de[4];xn!=null&&(m.za=xn,m.j.info("SVER="+m.za));const Bt=de[5];Bt!=null&&typeof Bt=="number"&&Bt>0&&(p=1.5*Bt,m.O=p,m.j.info("backChannelRequestTimeoutMs_="+p)),p=m;const qt=o.g;if(qt){const Tr=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tr){var A=p.h;A.g||Tr.indexOf("spdy")==-1&&Tr.indexOf("quic")==-1&&Tr.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(ca(A,A.h),A.h=null))}if(p.G){const ga=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;ga&&(p.wa=ga,ge(p.J,p.G,ga))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-o.F,m.j.info("Handshake RTT: "+m.T+"ms")),p=m;var L=o;if(p.na=sc(p,p.L?p.ba:null,p.W),L.L){Pl(p.h,L);var ee=L,je=p.O;je&&(ee.H=je),ee.D&&(aa(ee),yr(ee)),p.g=L}else Xl(p);m.i.length>0&&vr(m)}else de[0]!="stop"&&de[0]!="close"||yn(m,7);else m.I==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?yn(m,7):ma(m):de[0]!="noop"&&m.l&&m.l.qa(de),m.A=0)}}bs(4)}catch{}}var Vf=class{constructor(o,u){this.g=o,this.map=u}};function kl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Cl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Rl(o){return o.h?1:o.g?o.g.size:0}function la(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ca(o,u){o.g?o.g.add(u):o.h=u}function Pl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}kl.prototype.cancel=function(){if(this.i=Dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Dl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const m of o.g.values())u=u.concat(m.G);return u}return T(o.i)}var Vl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mf(o,u){if(o){o=o.split("&");for(let m=0;m<o.length;m++){const p=o[m].indexOf("=");let N,A=null;p>=0?(N=o[m].substring(0,p),A=o[m].substring(p+1)):N=o[m],u(N,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ot(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Ot?(this.l=o.l,Is(this,o.j),this.o=o.o,this.g=o.g,Ts(this,o.u),this.h=o.h,ua(this,Bl(o.i)),this.m=o.m):o&&(u=String(o).match(Vl))?(this.l=!1,Is(this,u[1]||"",!0),this.o=Ns(u[2]||""),this.g=Ns(u[3]||"",!0),Ts(this,u[4]),this.h=Ns(u[5]||"",!0),ua(this,u[6]||"",!0),this.m=Ns(u[7]||"")):(this.l=!1,this.i=new js(null,this.l))}Ot.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(As(u,Ml,!0),":");var m=this.g;return(m||u=="file")&&(o.push("//"),(u=this.o)&&o.push(As(u,Ml,!0),"@"),o.push(vs(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&o.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&o.push("/"),o.push(As(m,m.charAt(0)=="/"?Ff:Of,!0))),(m=this.i.toString())&&o.push("?",m),(m=this.m)&&o.push("#",As(m,Bf)),o.join("")},Ot.prototype.resolve=function(o){const u=pt(this);let m=!!o.j;m?Is(u,o.j):m=!!o.o,m?u.o=o.o:m=!!o.g,m?u.g=o.g:m=o.u!=null;var p=o.h;if(m)Ts(u,o.u);else if(m=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var N=u.h.lastIndexOf("/");N!=-1&&(p=u.h.slice(0,N+1)+p)}if(N=p,N==".."||N==".")p="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){p=N.lastIndexOf("/",0)==0,N=N.split("/");const A=[];for(let L=0;L<N.length;){const ee=N[L++];ee=="."?p&&L==N.length&&A.push(""):ee==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),p&&L==N.length&&A.push("")):(A.push(ee),p=!0)}p=A.join("/")}else p=N}return m?u.h=p:m=o.i.toString()!=="",m?ua(u,Bl(o.i)):m=!!o.m,m&&(u.m=o.m),u};function pt(o){return new Ot(o)}function Is(o,u,m){o.j=m?Ns(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ts(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function ua(o,u,m){u instanceof js?(o.i=u,qf(o.i,o.l)):(m||(u=As(u,Uf)),o.i=new js(u,o.l))}function ge(o,u,m){o.i.set(u,m)}function xr(o){return ge(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Ns(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function As(o,u,m){return typeof o=="string"?(o=encodeURI(o).replace(u,Lf),m&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Lf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ml=/[#\/\?@]/g,Of=/[#\?:]/g,Ff=/[#\?]/g,Uf=/[#\?@]/g,Bf=/#/g;function js(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function gn(o){o.g||(o.g=new Map,o.h=0,o.i&&Mf(o.i,function(u,m){o.add(decodeURIComponent(u.replace(/\+/g," ")),m)}))}n=js.prototype,n.add=function(o,u){gn(this),this.i=null,o=Ln(this,o);let m=this.g.get(o);return m||this.g.set(o,m=[]),m.push(u),this.h+=1,this};function Ll(o,u){gn(o),u=Ln(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Ol(o,u){return gn(o),u=Ln(o,u),o.g.has(u)}n.forEach=function(o,u){gn(this),this.g.forEach(function(m,p){m.forEach(function(N){o.call(u,N,p,this)},this)},this)};function Fl(o,u){gn(o);let m=[];if(typeof u=="string")Ol(o,u)&&(m=m.concat(o.g.get(Ln(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)m=m.concat(o[u]);return m}n.set=function(o,u){return gn(this),this.i=null,o=Ln(this,o),Ol(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Fl(this,o),o.length>0?String(o[0]):u):u};function Ul(o,u,m){Ll(o,u),m.length>0&&(o.i=null,o.g.set(Ln(o,u),T(m)),o.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var m=u[p];const N=vs(m);m=Fl(this,m);for(let A=0;A<m.length;A++){let L=N;m[A]!==""&&(L+="="+vs(m[A])),o.push(L)}}return this.i=o.join("&")};function Bl(o){const u=new js;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Ln(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function qf(o,u){u&&!o.j&&(gn(o),o.i=null,o.g.forEach(function(m,p){const N=p.toLowerCase();p!=N&&(Ll(this,p),Ul(this,N,m))},o)),o.j=u}function $f(o,u){const m=new _s;if(l.Image){const p=new Image;p.onload=f(Ft,m,"TestLoadImage: loaded",!0,u,p),p.onerror=f(Ft,m,"TestLoadImage: error",!1,u,p),p.onabort=f(Ft,m,"TestLoadImage: abort",!1,u,p),p.ontimeout=f(Ft,m,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Wf(o,u){const m=new _s,p=new AbortController,N=setTimeout(()=>{p.abort(),Ft(m,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(A=>{clearTimeout(N),A.ok?Ft(m,"TestPingServer: ok",!0,u):Ft(m,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(N),Ft(m,"TestPingServer: error",!1,u)})}function Ft(o,u,m,p,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),p(m)}catch{}}function Hf(){this.g=new Af}function ha(o){this.i=o.Sb||null,this.h=o.ab||!1}g(ha,yl),ha.prototype.g=function(){return new br(this.i,this.h)};function br(o,u){Be.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(br,Be),n=br.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,ks(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||l).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ks(this)),this.g&&(this.readyState=3,ks(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ql(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function ql(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ss(this):ks(this),this.readyState==3&&ql(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Ss(this))},n.Na=function(o){this.g&&(this.response=o,Ss(this))},n.ga=function(){this.g&&Ss(this)};function Ss(o){o.readyState=4,o.l=null,o.j=null,o.B=null,ks(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var m=u.next();!m.done;)m=m.value,o.push(m[0]+": "+m[1]),m=u.next();return o.join(`\r
`)};function ks(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(br.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function $l(o){let u="";return K(o,function(m,p){u+=p,u+=":",u+=m,u+=`\r
`}),u}function da(o,u,m){e:{for(p in m){var p=!1;break e}p=!0}p||(m=$l(m),typeof o=="string"?m!=null&&vs(m):ge(o,u,m))}function we(o){Be.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(we,Be);var zf=/^https?$/i,Gf=["POST","PUT"];n=we.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,m,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Il.g(),this.g.onreadystatechange=_(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(A){Wl(this,A);return}if(o=m||"",m=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var N in p)m.set(N,p[N]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const A of p.keys())m.set(A,p.get(A));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(m.keys()).find(A=>A.toLowerCase()=="content-type"),N=l.FormData&&o instanceof l.FormData,!(Array.prototype.indexOf.call(Gf,u,void 0)>=0)||p||N||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,L]of m)this.g.setRequestHeader(A,L);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(A){Wl(this,A)}};function Wl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Hl(o),wr(o)}function Hl(o){o.A||(o.A=!0,Ge(o,"complete"),Ge(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ge(this,"complete"),Ge(this,"abort"),wr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wr(this,!0)),we.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?zl(this):this.Xa())},n.Xa=function(){zl(this)};function zl(o){if(o.h&&typeof a<"u"){if(o.v&&Ut(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ge(o,"readystatechange"),Ut(o)==4){o.h=!1;try{const A=o.ca();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var m;if(!(m=u)){var p;if(p=A===0){let L=String(o.D).match(Vl)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),p=!zf.test(L?L.toLowerCase():"")}m=p}if(m)Ge(o,"complete"),Ge(o,"success");else{o.o=6;try{var N=Ut(o)>2?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.ca()+"]",Hl(o)}}finally{wr(o)}}}}function wr(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const m=o.g;o.g=null,u||Ge(o,"ready");try{m.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ut(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Ut(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Nf(u)}};function Gl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Kf(o){const u={};o=(o.g&&Ut(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(b(o[p]))continue;var m=Rf(o[p]);const N=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const A=u[N]||[];u[N]=A,A.push(m)}me(u,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cs(o,u,m){return m&&m.internalChannelParams&&m.internalChannelParams[o]||u}function Kl(o){this.za=0,this.i=[],this.j=new _s,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Cs("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Cs("baseRetryDelayMs",5e3,o),this.Za=Cs("retryDelaySeedMs",1e4,o),this.Ta=Cs("forwardChannelMaxRetries",2,o),this.va=Cs("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new kl(o&&o.concurrentRequestLimit),this.Ba=new Hf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Kl.prototype,n.ka=8,n.I=1,n.connect=function(o,u,m,p){Ke(0),this.W=o,this.H=u||{},m&&p!==void 0&&(this.H.OSID=m,this.H.OAID=p),this.F=this.X,this.J=sc(this,null,this.W),vr(this)};function ma(o){if(Ql(o),o.I==3){var u=o.V++,m=pt(o.J);if(ge(m,"SID",o.M),ge(m,"RID",u),ge(m,"TYPE","terminate"),Rs(o,m),u=new Lt(o,o.j,u),u.M=2,u.A=xr(pt(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(u.A.toString(),"")}catch{}!m&&l.Image&&(new Image().src=u.A,m=!0),m||(u.g=rc(u.j,null),u.g.ea(u.A)),u.F=Date.now(),yr(u)}nc(o)}function _r(o){o.g&&(pa(o),o.g.cancel(),o.g=null)}function Ql(o){_r(o),o.v&&(l.clearTimeout(o.v),o.v=null),Er(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&l.clearTimeout(o.m),o.m=null)}function vr(o){if(!Cl(o.h)&&!o.m){o.m=!0;var u=o.Ea;oe||x(),te||(oe(),te=!0),E.add(u,o),o.D=0}}function Qf(o,u){return Rl(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ws(d(o.Ea,o,u),tc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const N=new Lt(this,this.j,o);let A=this.o;if(this.U&&(A?(A=De(A),Ze(A,this.U)):A=this.U),this.u!==null||this.R||(N.J=A,A=null),this.S)e:{for(var u=0,m=0;m<this.i.length;m++){t:{var p=this.i[m];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=m;break e}if(u===4096||m===this.i.length-1){u=m+1;break e}}u=1e3}else u=1e3;u=Jl(this,N,u),m=pt(this.J),ge(m,"RID",o),ge(m,"CVER",22),this.G&&ge(m,"X-HTTP-Session-Id",this.G),Rs(this,m),A&&(this.R?u="headers="+vs($l(A))+"&"+u:this.u&&da(m,this.u,A)),ca(this.h,N),this.Ra&&ge(m,"TYPE","init"),this.S?(ge(m,"$req",u),ge(m,"SID","null"),N.U=!0,ia(N,m,null)):ia(N,m,u),this.I=2}}else this.I==3&&(o?Yl(this,o):this.i.length==0||Cl(this.h)||Yl(this))};function Yl(o,u){var m;u?m=u.l:m=o.V++;const p=pt(o.J);ge(p,"SID",o.M),ge(p,"RID",m),ge(p,"AID",o.K),Rs(o,p),o.u&&o.o&&da(p,o.u,o.o),m=new Lt(o,o.j,m,o.D+1),o.u===null&&(m.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Jl(o,m,1e3),m.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),ca(o.h,m),ia(m,p,u)}function Rs(o,u){o.H&&K(o.H,function(m,p){ge(u,p,m)}),o.l&&K({},function(m,p){ge(u,p,m)})}function Jl(o,u,m){m=Math.min(o.i.length,m);const p=o.l?d(o.l.Ka,o.l,o):null;e:{var N=o.i;let ee=-1;for(;;){const je=["count="+m];ee==-1?m>0?(ee=N[0].g,je.push("ofs="+ee)):ee=0:je.push("ofs="+ee);let de=!0;for(let Ce=0;Ce<m;Ce++){var A=N[Ce].g;const gt=N[Ce].map;if(A-=ee,A<0)ee=Math.max(0,N[Ce].g-100),de=!1;else try{A="req"+A+"_"||"";try{var L=gt instanceof Map?gt:Object.entries(gt);for(const[xn,Bt]of L){let qt=Bt;c(Bt)&&(qt=ea(Bt)),je.push(A+xn+"="+encodeURIComponent(qt))}}catch(xn){throw je.push(A+"type="+encodeURIComponent("_badmap")),xn}}catch{p&&p(gt)}}if(de){L=je.join("&");break e}}L=void 0}return o=o.i.splice(0,m),u.G=o,L}function Xl(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;oe||x(),te||(oe(),te=!0),E.add(u,o),o.A=0}}function fa(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ws(d(o.Da,o),tc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Zl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ws(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ke(10),_r(this),Zl(this))};function pa(o){o.B!=null&&(l.clearTimeout(o.B),o.B=null)}function Zl(o){o.g=new Lt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=pt(o.na);ge(u,"RID","rpc"),ge(u,"SID",o.M),ge(u,"AID",o.K),ge(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&ge(u,"TO",o.ia),ge(u,"TYPE","xmlhttp"),Rs(o,u),o.u&&o.o&&da(u,o.u,o.o),o.O&&(o.g.H=o.O);var m=o.g;o=o.ba,m.M=1,m.A=xr(pt(u)),m.u=null,m.R=!0,Al(m,o)}n.Va=function(){this.C!=null&&(this.C=null,_r(this),fa(this),Ke(19))};function Er(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function ec(o,u){var m=null;if(o.g==u){Er(o),pa(o),o.g=null;var p=2}else if(la(o.h,u))m=u.G,Pl(o.h,u),p=1;else return;if(o.I!=0){if(u.o)if(p==1){m=u.u?u.u.length:0,u=Date.now()-u.F;var N=o.D;p=pr(),Ge(p,new vl(p,m)),vr(o)}else Xl(o);else if(N=u.m,N==3||N==0&&u.X>0||!(p==1&&Qf(o,u)||p==2&&fa(o)))switch(m&&m.length>0&&(u=o.h,u.i=u.i.concat(m)),N){case 1:yn(o,5);break;case 4:yn(o,10);break;case 3:yn(o,6);break;default:yn(o,2)}}}function tc(o,u){let m=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(m*=2),m*u}function yn(o,u){if(o.j.info("Error code "+u),u==2){var m=d(o.bb,o),p=o.Ua;const N=!p;p=new Ot(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Is(p,"https"),xr(p),N?$f(p.toString(),m):Wf(p.toString(),m)}else Ke(2);o.I=0,o.l&&o.l.pa(u),nc(o),Ql(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function nc(o){if(o.I=0,o.ja=[],o.l){const u=Dl(o.h);(u.length!=0||o.i.length!=0)&&(k(o.ja,u),k(o.ja,o.i),o.h.i.length=0,T(o.i),o.i.length=0),o.l.oa()}}function sc(o,u,m){var p=m instanceof Ot?pt(m):new Ot(m);if(p.g!="")u&&(p.g=u+"."+p.g),Ts(p,p.u);else{var N=l.location;p=N.protocol,u=u?u+"."+N.hostname:N.hostname,N=+N.port;const A=new Ot(null);p&&Is(A,p),u&&(A.g=u),N&&Ts(A,N),m&&(A.h=m),p=A}return m=o.G,u=o.wa,m&&u&&ge(p,m,u),ge(p,"VER",o.ka),Rs(o,p),p}function rc(o,u,m){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new we(new ha({ab:m})):new we(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ic(){}n=ic.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ir(){}Ir.prototype.g=function(o,u){return new et(o,u)};function et(o,u){Be.call(this),this.g=new Kl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!b(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!b(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new On(this)}g(et,Be),et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){ma(this.g)},et.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var m={};m.__data__=o,o=m}else this.v&&(m={},m.__data__=ea(o),o=m);u.i.push(new Vf(u.Ya++,o)),u.I==3&&vr(u)},et.prototype.N=function(){this.g.l=null,delete this.j,ma(this.g),delete this.g,et.Z.N.call(this)};function ac(o){ta.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const m in u){o=m;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}g(ac,ta);function oc(){na.call(this),this.status=1}g(oc,na);function On(o){this.g=o}g(On,ic),On.prototype.ra=function(){Ge(this.g,"a")},On.prototype.qa=function(o){Ge(this.g,new ac(o))},On.prototype.pa=function(o){Ge(this.g,new oc)},On.prototype.oa=function(){Ge(this.g,"b")},Ir.prototype.createWebChannel=Ir.prototype.g,et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,Id=function(){return new Ir},Ed=function(){return pr()},vd=fn,Ka={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},gr.NO_ERROR=0,gr.TIMEOUT=8,gr.HTTP_ERROR=6,Fr=gr,El.COMPLETE="complete",_d=El,xl.EventType=xs,xs.OPEN="a",xs.CLOSE="b",xs.ERROR="c",xs.MESSAGE="d",Be.prototype.listen=Be.prototype.J,Ms=xl,we.prototype.listenOnce=we.prototype.K,we.prototype.getLastError=we.prototype.Ha,we.prototype.getLastErrorCode=we.prototype.ya,we.prototype.getStatus=we.prototype.ca,we.prototype.getResponseJson=we.prototype.La,we.prototype.getResponseText=we.prototype.la,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Fa,wd=we}).apply(typeof jr<"u"?jr:typeof self<"u"?self:typeof window<"u"?window:{});const Yc="@firebase/firestore",Jc="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new Ni("@firebase/firestore");function Fn(){return In.logLevel}function U(n,...e){if(In.logLevel<=ne.DEBUG){const t=e.map(jo);In.debug(`Firestore (${ls}): ${n}`,...t)}}function Dt(n,...e){if(In.logLevel<=ne.ERROR){const t=e.map(jo);In.error(`Firestore (${ls}): ${n}`,...t)}}function Xn(n,...e){if(In.logLevel<=ne.WARN){const t=e.map(jo);In.warn(`Firestore (${ls}): ${n}`,...t)}}function jo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function z(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Td(n,s,t)}function Td(n,e,t){let s=`FIRESTORE (${ls}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Dt(s),new Error(s)}function ce(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Td(e,r,s)}function J(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends ft{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t($e.UNAUTHENTICATED)))}shutdown(){}}class kb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Cb{constructor(e){this.t=e,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ce(this.o===void 0,42304);let s=this.i;const r=h=>this.i!==s?(s=this.i,t(h)):Promise.resolve();let a=new kt;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new kt,e.enqueueRetryable((()=>r(this.currentUser)))};const l=()=>{const h=a;e.enqueueRetryable((async()=>{await h.promise,await r(this.currentUser)}))},c=h=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new kt)}}),0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ce(typeof s.accessToken=="string",31837,{l:s}),new Nd(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new $e(e)}}class Rb{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Pb{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Rb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t($e.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Xc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Db{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,lt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ce(this.o===void 0,3512);const s=a=>{a.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,U("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>s(a)))};const r=a=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>r(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?r(a):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Xc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ce(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Xc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Vb(40);for(let a=0;a<r.length;++a)s.length<20&&r[a]<t&&(s+=e.charAt(r[a]%62))}return s}}function se(n,e){return n<e?-1:n>e?1:0}function Qa(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),a=e.charAt(s);if(r!==a)return Ta(r)===Ta(a)?se(r,a):Ta(r)?1:-1}return se(n.length,e.length)}const Mb=55296,Lb=57343;function Ta(n){const e=n.charCodeAt(0);return e>=Mb&&e<=Lb}function Zn(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="__name__";class yt{constructor(e,t,s){t===void 0?t=0:t>e.length&&z(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&z(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return yt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof yt?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const a=yt.compareSegments(e.get(r),t.get(r));if(a!==0)return a}return se(e.length,t.length)}static compareSegments(e,t){const s=yt.isNumericId(e),r=yt.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?yt.extractNumericId(e).compare(yt.extractNumericId(t)):Qa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return en.fromString(e.substring(4,e.length-2))}}class pe extends yt{construct(e,t,s){return new pe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new pe(t)}static emptyPath(){return new pe([])}}const Ob=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends yt{construct(e,t,s){return new Me(e,t,s)}static isValidIdentifier(e){return Ob.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zc}static keyField(){return new Me([Zc])}static fromServerFormat(e){const t=[];let s="",r=0;const a=()=>{if(s.length===0)throw new F(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let l=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new F(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new F(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=h,r+=2}else c==="`"?(l=!l,r++):c!=="."||l?(s+=c,r++):(a(),r++)}if(a(),l)throw new F(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(t)}static emptyPath(){return new Me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ad(n,e,t){if(!t)throw new F(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Fb(n,e,t,s){if(e===!0&&s===!0)throw new F(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function eu(n){if(!$.isDocumentKey(n))throw new F(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function tu(n){if($.isDocumentKey(n))throw new F(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function jd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ri(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z(12329,{type:typeof n})}function Tn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ri(n);throw new F(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ne(n,e){const t={typeString:n};return e&&(t.value=e),t}function cr(n,e){if(!jd(n))throw new F(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,a="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const l=n[s];if(r&&typeof l!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(a!==void 0&&l!==a.value){t=`Expected '${s}' field to equal '${a.value}'`;break}}if(t)throw new F(S.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=-62135596800,su=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*su);return new ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<nu)throw new F(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/su}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cr(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-nu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:Ne("string",ye._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ys=-1;function Ub(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=Q.fromTimestamp(s===1e9?new ye(t+1,0):new ye(t,s));return new sn(r,$.empty(),e)}function Bb(n){return new sn(n.readTime,n.key,Ys)}class sn{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new sn(Q.min(),$.empty(),Ys)}static max(){return new sn(Q.max(),$.empty(),Ys)}}function qb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:se(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==$b)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C(((s,r)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(s,r)},this.catchCallback=a=>{this.wrapFailure(t,a).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):C.reject(t)}static resolve(e){return new C(((t,s)=>{t(e)}))}static reject(e){return new C(((t,s)=>{s(e)}))}static waitFor(e){return new C(((t,s)=>{let r=0,a=0,l=!1;e.forEach((c=>{++r,c.next((()=>{++a,l&&a===r&&t()}),(h=>s(h)))})),l=!0,a===r&&t()}))}static or(e){let t=C.resolve(!1);for(const s of e)t=t.next((r=>r?C.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,a)=>{s.push(t.call(this,r,a))})),this.waitFor(s)}static mapArray(e,t){return new C(((s,r)=>{const a=e.length,l=new Array(a);let c=0;for(let h=0;h<a;h++){const d=h;t(e[d]).next((f=>{l[d]=f,++c,c===a&&s(l)}),(f=>r(f)))}}))}static doWhile(e,t){return new C(((s,r)=>{const a=()=>{e()===!0?t().next((()=>{a()}),r):s()};a()}))}}function Hb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function us(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Pi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Pi.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=-1;function Di(n){return n==null}function ii(n){return n===0&&1/n==-1/0}function zb(n){return typeof n=="number"&&Number.isInteger(n)&&!ii(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="";function Gb(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ru(e)),e=Kb(n.get(t),e);return ru(e)}function Kb(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const a=n.charAt(r);switch(a){case"\0":t+="";break;case Sd:t+="";break;default:t+=a}}return t}function ru(n){return n+Sd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function dn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function kd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t){this.comparator=e,this.root=t||Ve.EMPTY}insert(e,t){return new be(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sr(this.root,e,this.comparator,!0)}}class Sr{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?s(e.key,t):1,t&&r&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,t,s,r,a){this.key=e,this.value=t,this.color=s??Ve.RED,this.left=r??Ve.EMPTY,this.right=a??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,a){return new Ve(e??this.key,t??this.value,s??this.color,r??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const a=s(e,r.key);return r=a<0?r.copy(null,null,null,r.left.insert(e,t,s),null):a===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Ve.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw z(27949);return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(e,t,s,r,a){return this}insert(e,t,s){return new Ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new au(this.data.getIterator())}getIteratorFrom(e){return new au(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,a=s.getNext().key;if(this.comparator(r,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class au{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new ut([])}unionWith(e){let t=new Se(Me.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ut(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zn(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Cd("Invalid base64 string: "+a):a}})(e);return new Oe(t)}static fromUint8Array(e){const t=(function(r){let a="";for(let l=0;l<r.length;++l)a+=String.fromCharCode(r[l]);return a})(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const Qb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rn(n){if(ce(!!n,39018),typeof n=="string"){let e=0;const t=Qb.exec(n);if(ce(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="server_timestamp",Pd="__type__",Dd="__previous_value__",Vd="__local_write_time__";function Co(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Pd])==null?void 0:s.stringValue)===Rd}function Vi(n){const e=n.mapValue.fields[Dd];return Co(e)?Vi(e):e}function Js(n){const e=rn(n.mapValue.fields[Vd].timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,t,s,r,a,l,c,h,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=f}}const ai="(default)";class Xs{constructor(e,t){this.projectId=e,this.database=t||ai}static empty(){return new Xs("","")}get isDefaultDatabase(){return this.database===ai}isEqual(e){return e instanceof Xs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="__type__",Jb="__max__",kr={mapValue:{}},Ld="__vector__",oi="value";function on(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Co(n)?4:Zb(n)?9007199254740991:Xb(n)?10:11:z(28295,{value:n})}function At(n,e){if(n===e)return!0;const t=on(n);if(t!==on(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Js(n).isEqual(Js(e));case 3:return(function(r,a){if(typeof r.timestampValue=="string"&&typeof a.timestampValue=="string"&&r.timestampValue.length===a.timestampValue.length)return r.timestampValue===a.timestampValue;const l=rn(r.timestampValue),c=rn(a.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,a){return an(r.bytesValue).isEqual(an(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,a){return ve(r.geoPointValue.latitude)===ve(a.geoPointValue.latitude)&&ve(r.geoPointValue.longitude)===ve(a.geoPointValue.longitude)})(n,e);case 2:return(function(r,a){if("integerValue"in r&&"integerValue"in a)return ve(r.integerValue)===ve(a.integerValue);if("doubleValue"in r&&"doubleValue"in a){const l=ve(r.doubleValue),c=ve(a.doubleValue);return l===c?ii(l)===ii(c):isNaN(l)&&isNaN(c)}return!1})(n,e);case 9:return Zn(n.arrayValue.values||[],e.arrayValue.values||[],At);case 10:case 11:return(function(r,a){const l=r.mapValue.fields||{},c=a.mapValue.fields||{};if(iu(l)!==iu(c))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(c[h]===void 0||!At(l[h],c[h])))return!1;return!0})(n,e);default:return z(52216,{left:n})}}function Zs(n,e){return(n.values||[]).find((t=>At(t,e)))!==void 0}function es(n,e){if(n===e)return 0;const t=on(n),s=on(e);if(t!==s)return se(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(n.booleanValue,e.booleanValue);case 2:return(function(a,l){const c=ve(a.integerValue||a.doubleValue),h=ve(l.integerValue||l.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(n,e);case 3:return ou(n.timestampValue,e.timestampValue);case 4:return ou(Js(n),Js(e));case 5:return Qa(n.stringValue,e.stringValue);case 6:return(function(a,l){const c=an(a),h=an(l);return c.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(a,l){const c=a.split("/"),h=l.split("/");for(let d=0;d<c.length&&d<h.length;d++){const f=se(c[d],h[d]);if(f!==0)return f}return se(c.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,l){const c=se(ve(a.latitude),ve(l.latitude));return c!==0?c:se(ve(a.longitude),ve(l.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return lu(n.arrayValue,e.arrayValue);case 10:return(function(a,l){var _,T,k,P;const c=a.fields||{},h=l.fields||{},d=(_=c[oi])==null?void 0:_.arrayValue,f=(T=h[oi])==null?void 0:T.arrayValue,g=se(((k=d==null?void 0:d.values)==null?void 0:k.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return g!==0?g:lu(d,f)})(n.mapValue,e.mapValue);case 11:return(function(a,l){if(a===kr.mapValue&&l===kr.mapValue)return 0;if(a===kr.mapValue)return 1;if(l===kr.mapValue)return-1;const c=a.fields||{},h=Object.keys(c),d=l.fields||{},f=Object.keys(d);h.sort(),f.sort();for(let g=0;g<h.length&&g<f.length;++g){const _=Qa(h[g],f[g]);if(_!==0)return _;const T=es(c[h[g]],d[f[g]]);if(T!==0)return T}return se(h.length,f.length)})(n.mapValue,e.mapValue);default:throw z(23264,{he:t})}}function ou(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return se(n,e);const t=rn(n),s=rn(e),r=se(t.seconds,s.seconds);return r!==0?r:se(t.nanos,s.nanos)}function lu(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const a=es(t[r],s[r]);if(a)return a}return se(t.length,s.length)}function ts(n){return Ya(n)}function Ya(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=rn(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return an(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return $.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const a of t.values||[])r?r=!1:s+=",",s+=Ya(a);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",a=!0;for(const l of s)a?a=!1:r+=",",r+=`${l}:${Ya(t.fields[l])}`;return r+"}"})(n.mapValue):z(61005,{value:n})}function Ur(n){switch(on(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vi(n);return e?16+Ur(e):16;case 5:return 2*n.stringValue.length;case 6:return an(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,a)=>r+Ur(a)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return dn(s.fields,((a,l)=>{r+=a.length+Ur(l)})),r})(n.mapValue);default:throw z(13486,{value:n})}}function cu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ja(n){return!!n&&"integerValue"in n}function Ro(n){return!!n&&"arrayValue"in n}function uu(n){return!!n&&"nullValue"in n}function hu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Br(n){return!!n&&"mapValue"in n}function Xb(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Md])==null?void 0:s.stringValue)===Ld}function qs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return dn(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=qs(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qs(n.arrayValue.values[t]);return e}return{...n}}function Zb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Jb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Br(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(t)}setAll(e){let t=Me.emptyPath(),s={},r=[];e.forEach(((l,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,s,r),s={},r=[],t=c.popLast()}l?s[c.lastSegment()]=qs(l):r.push(c.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,s,r)}delete(e){const t=this.field(e.popLast());Br(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return At(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Br(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){dn(t,((r,a)=>e[r]=a));for(const r of s)delete e[r]}clone(){return new tt(qs(this.value))}}function Od(n){const e=[];return dn(n.fields,((t,s)=>{const r=new Me([t]);if(Br(s)){const a=Od(s.mapValue).fields;if(a.length===0)e.push(r);else for(const l of a)e.push(r.child(l))}else e.push(r)})),new ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t,s,r,a,l,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=a,this.data=l,this.documentState=c}static newInvalidDocument(e){return new We(e,0,Q.min(),Q.min(),Q.min(),tt.empty(),0)}static newFoundDocument(e,t,s,r){return new We(e,1,t,Q.min(),s,r,0)}static newNoDocument(e,t){return new We(e,2,t,Q.min(),Q.min(),tt.empty(),0)}static newUnknownDocument(e,t){return new We(e,3,t,Q.min(),Q.min(),tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof We&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class li{constructor(e,t){this.position=e,this.inclusive=t}}function du(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const a=e[r],l=n.position[r];if(a.field.isKeyField()?s=$.comparator($.fromName(l.referenceValue),t.key):s=es(l,t.data.field(a.field)),a.dir==="desc"&&(s*=-1),s!==0)break}return s}function mu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!At(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class er{constructor(e,t="asc"){this.field=e,this.dir=t}}function ew(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Fd{}class Te extends Fd{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new nw(e,t,s):t==="array-contains"?new iw(e,s):t==="in"?new aw(e,s):t==="not-in"?new ow(e,s):t==="array-contains-any"?new lw(e,s):new Te(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new sw(e,s):new rw(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(es(t,this.value)):t!==null&&on(this.value)===on(t)&&this.matchesComparison(es(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mt extends Fd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new mt(e,t)}matches(e){return Ud(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ud(n){return n.op==="and"}function Bd(n){return tw(n)&&Ud(n)}function tw(n){for(const e of n.filters)if(e instanceof mt)return!1;return!0}function Xa(n){if(n instanceof Te)return n.field.canonicalString()+n.op.toString()+ts(n.value);if(Bd(n))return n.filters.map((e=>Xa(e))).join(",");{const e=n.filters.map((t=>Xa(t))).join(",");return`${n.op}(${e})`}}function qd(n,e){return n instanceof Te?(function(s,r){return r instanceof Te&&s.op===r.op&&s.field.isEqual(r.field)&&At(s.value,r.value)})(n,e):n instanceof mt?(function(s,r){return r instanceof mt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((a,l,c)=>a&&qd(l,r.filters[c])),!0):!1})(n,e):void z(19439)}function $d(n){return n instanceof Te?(function(t){return`${t.field.canonicalString()} ${t.op} ${ts(t.value)}`})(n):n instanceof mt?(function(t){return t.op.toString()+" {"+t.getFilters().map($d).join(" ,")+"}"})(n):"Filter"}class nw extends Te{constructor(e,t,s){super(e,t,s),this.key=$.fromName(s.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class sw extends Te{constructor(e,t){super(e,"in",t),this.keys=Wd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class rw extends Te{constructor(e,t){super(e,"not-in",t),this.keys=Wd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Wd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>$.fromName(s.referenceValue)))}class iw extends Te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ro(t)&&Zs(t.arrayValue,this.value)}}class aw extends Te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Zs(this.value.arrayValue,t)}}class ow extends Te{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Zs(this.value.arrayValue,t)}}class lw extends Te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ro(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Zs(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,t=null,s=[],r=[],a=null,l=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=a,this.startAt=l,this.endAt=c,this.Te=null}}function fu(n,e=null,t=[],s=[],r=null,a=null,l=null){return new cw(n,e,t,s,r,a,l)}function Po(n){const e=J(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Xa(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(a){return a.field.canonicalString()+a.dir})(s))).join(","),Di(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>ts(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>ts(s))).join(",")),e.Te=t}return e.Te}function Do(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ew(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!qd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!mu(n.startAt,e.startAt)&&mu(n.endAt,e.endAt)}function Za(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t=null,s=[],r=[],a=null,l="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=a,this.limitType=l,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function uw(n,e,t,s,r,a,l,c){return new hs(n,e,t,s,r,a,l,c)}function Vo(n){return new hs(n)}function pu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hd(n){return n.collectionGroup!==null}function $s(n){const e=J(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new Se(Me.comparator);return l.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new er(a,s))})),t.has(Me.keyField().canonicalString())||e.Ie.push(new er(Me.keyField(),s))}return e.Ie}function _t(n){const e=J(n);return e.Ee||(e.Ee=hw(e,$s(n))),e.Ee}function hw(n,e){if(n.limitType==="F")return fu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const a=r.dir==="desc"?"asc":"desc";return new er(r.field,a)}));const t=n.endAt?new li(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new li(n.startAt.position,n.startAt.inclusive):null;return fu(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function eo(n,e){const t=n.filters.concat([e]);return new hs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function to(n,e,t){return new hs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Mi(n,e){return Do(_t(n),_t(e))&&n.limitType===e.limitType}function zd(n){return`${Po(_t(n))}|lt:${n.limitType}`}function Un(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>$d(r))).join(", ")}]`),Di(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(l){return`${l.field.canonicalString()} (${l.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>ts(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>ts(r))).join(",")),`Target(${s})`})(_t(n))}; limitType=${n.limitType})`}function Li(n,e){return e.isFoundDocument()&&(function(s,r){const a=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(a):$.isDocumentKey(s.path)?s.path.isEqual(a):s.path.isImmediateParentOf(a)})(n,e)&&(function(s,r){for(const a of $s(s))if(!a.field.isKeyField()&&r.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const a of s.filters)if(!a.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(l,c,h){const d=du(l,c,h);return l.inclusive?d<=0:d<0})(s.startAt,$s(s),r)||s.endAt&&!(function(l,c,h){const d=du(l,c,h);return l.inclusive?d>=0:d>0})(s.endAt,$s(s),r))})(n,e)}function dw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Gd(n){return(e,t)=>{let s=!1;for(const r of $s(n)){const a=mw(r,e,t);if(a!==0)return a;s=s||r.field.isKeyField()}return 0}}function mw(n,e,t){const s=n.field.isKeyField()?$.comparator(e.key,t.key):(function(a,l,c){const h=l.data.field(a),d=c.data.field(a);return h!==null&&d!==null?es(h,d):z(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return z(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,a]of s)if(this.equalsFn(r,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return void(r[a]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){dn(this.inner,((t,s)=>{for(const[r,a]of s)e(r,a)}))}isEmpty(){return kd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=new be($.comparator);function Vt(){return fw}const Kd=new be($.comparator);function Ls(...n){let e=Kd;for(const t of n)e=e.insert(t.key,t);return e}function Qd(n){let e=Kd;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function wn(){return Ws()}function Yd(){return Ws()}function Ws(){return new Rn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const pw=new be($.comparator),gw=new Se($.comparator);function re(...n){let e=gw;for(const t of n)e=e.add(t);return e}const yw=new Se(se);function xw(){return yw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ii(e)?"-0":e}}function Jd(n){return{integerValue:""+n}}function bw(n,e){return zb(e)?Jd(e):Mo(n,e)}/**
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
 */class Oi{constructor(){this._=void 0}}function ww(n,e,t){return n instanceof tr?(function(r,a){const l={fields:{[Pd]:{stringValue:Rd},[Vd]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return a&&Co(a)&&(a=Vi(a)),a&&(l.fields[Dd]=a),{mapValue:l}})(t,e):n instanceof nr?Zd(n,e):n instanceof sr?em(n,e):(function(r,a){const l=Xd(r,a),c=gu(l)+gu(r.Ae);return Ja(l)&&Ja(r.Ae)?Jd(c):Mo(r.serializer,c)})(n,e)}function _w(n,e,t){return n instanceof nr?Zd(n,e):n instanceof sr?em(n,e):t}function Xd(n,e){return n instanceof ci?(function(s){return Ja(s)||(function(a){return!!a&&"doubleValue"in a})(s)})(e)?e:{integerValue:0}:null}class tr extends Oi{}class nr extends Oi{constructor(e){super(),this.elements=e}}function Zd(n,e){const t=tm(e);for(const s of n.elements)t.some((r=>At(r,s)))||t.push(s);return{arrayValue:{values:t}}}class sr extends Oi{constructor(e){super(),this.elements=e}}function em(n,e){let t=tm(e);for(const s of n.elements)t=t.filter((r=>!At(r,s)));return{arrayValue:{values:t}}}class ci extends Oi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function gu(n){return ve(n.integerValue||n.doubleValue)}function tm(n){return Ro(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,t){this.field=e,this.transform=t}}function Ew(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof nr&&r instanceof nr||s instanceof sr&&r instanceof sr?Zn(s.elements,r.elements,At):s instanceof ci&&r instanceof ci?At(s.Ae,r.Ae):s instanceof tr&&r instanceof tr})(n.transform,e.transform)}class Iw{constructor(e,t){this.version=e,this.transformResults=t}}class Ct{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ct}static exists(e){return new Ct(void 0,e)}static updateTime(e){return new Ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fi{}function nm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new rm(n.key,Ct.none()):new Ui(n.key,n.data,Ct.none());{const t=n.data,s=tt.empty();let r=new Se(Me.comparator);for(let a of e.fields)if(!r.has(a)){let l=t.field(a);l===null&&a.length>1&&(a=a.popLast(),l=t.field(a)),l===null?s.delete(a):s.set(a,l),r=r.add(a)}return new Pn(n.key,s,new ut(r.toArray()),Ct.none())}}function Tw(n,e,t){n instanceof Ui?(function(r,a,l){const c=r.value.clone(),h=xu(r.fieldTransforms,a,l.transformResults);c.setAll(h),a.convertToFoundDocument(l.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Pn?(function(r,a,l){if(!qr(r.precondition,a))return void a.convertToUnknownDocument(l.version);const c=xu(r.fieldTransforms,a,l.transformResults),h=a.data;h.setAll(sm(r)),h.setAll(c),a.convertToFoundDocument(l.version,h).setHasCommittedMutations()})(n,e,t):(function(r,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()})(0,e,t)}function Hs(n,e,t,s){return n instanceof Ui?(function(a,l,c,h){if(!qr(a.precondition,l))return c;const d=a.value.clone(),f=bu(a.fieldTransforms,h,l);return d.setAll(f),l.convertToFoundDocument(l.version,d).setHasLocalMutations(),null})(n,e,t,s):n instanceof Pn?(function(a,l,c,h){if(!qr(a.precondition,l))return c;const d=bu(a.fieldTransforms,h,l),f=l.data;return f.setAll(sm(a)),f.setAll(d),l.convertToFoundDocument(l.version,f).setHasLocalMutations(),c===null?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((g=>g.field)))})(n,e,t,s):(function(a,l,c){return qr(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c})(n,e,t)}function Nw(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),a=Xd(s.transform,r||null);a!=null&&(t===null&&(t=tt.empty()),t.set(s.field,a))}return t||null}function yu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Zn(s,r,((a,l)=>Ew(a,l)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ui extends Fi{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Pn extends Fi{constructor(e,t,s,r,a=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function sm(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function xu(n,e,t){const s=new Map;ce(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let r=0;r<t.length;r++){const a=n[r],l=a.transform,c=e.data.field(a.field);s.set(a.field,_w(l,c,t[r]))}return s}function bu(n,e,t){const s=new Map;for(const r of n){const a=r.transform,l=t.data.field(r.field);s.set(r.field,ww(a,l,e))}return s}class rm extends Fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Aw extends Fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const a=this.mutations[r];a.key.isEqual(e.key)&&Tw(a,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Hs(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Hs(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Yd();return this.mutations.forEach((r=>{const a=e.get(r.key),l=a.overlayedDocument;let c=this.applyToLocalView(l,a.mutatedFields);c=t.has(r.key)?null:c;const h=nm(l,c);h!==null&&s.set(r.key,h),l.isValidDocument()||l.convertToNoDocument(Q.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),re())}isEqual(e){return this.batchId===e.batchId&&Zn(this.mutations,e.mutations,((t,s)=>yu(t,s)))&&Zn(this.baseMutations,e.baseMutations,((t,s)=>yu(t,s)))}}class Lo{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){ce(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return pw})();const a=e.mutations;for(let l=0;l<a.length;l++)r=r.insert(a[l].key,s[l].version);return new Lo(e,t,s,r)}}/**
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
 */class Sw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,ae;function Cw(n){switch(n){case S.OK:return z(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return z(15467,{code:n})}}function im(n){if(n===void 0)return Dt("GRPC error has no .code"),S.UNKNOWN;switch(n){case Ie.OK:return S.OK;case Ie.CANCELLED:return S.CANCELLED;case Ie.UNKNOWN:return S.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return S.INTERNAL;case Ie.UNAVAILABLE:return S.UNAVAILABLE;case Ie.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ie.NOT_FOUND:return S.NOT_FOUND;case Ie.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ie.ABORTED:return S.ABORTED;case Ie.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ie.DATA_LOSS:return S.DATA_LOSS;default:return z(39323,{code:n})}}(ae=Ie||(Ie={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Rw(){return new TextEncoder}/**
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
 */const Pw=new en([4294967295,4294967295],0);function wu(n){const e=Rw().encode(n),t=new bd;return t.update(e),new Uint8Array(t.digest())}function _u(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new en([t,s],0),new en([r,a],0)]}class Oo{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Os(`Invalid padding: ${t}`);if(s<0)throw new Os(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Os(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Os(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=en.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(en.fromNumber(s)));return r.compare(Pw)===1&&(r=new en([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=wu(e),[s,r]=_u(t);for(let a=0;a<this.hashCount;a++){const l=this.ye(s,r,a);if(!this.we(l))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),l=new Oo(a,r,t);return s.forEach((c=>l.insert(c))),l}insert(e){if(this.ge===0)return;const t=wu(e),[s,r]=_u(t);for(let a=0;a<this.hashCount;a++){const l=this.ye(s,r,a);this.Se(l)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,s,r,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,ur.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Bi(Q.min(),r,new be(se),Vt(),re())}}class ur{constructor(e,t,s,r,a){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ur(s,t,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class am{constructor(e,t){this.targetId=e,this.Ce=t}}class om{constructor(e,t,s=Oe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class vu{constructor(){this.ve=0,this.Fe=Eu(),this.Me=Oe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),t=re(),s=re();return this.Fe.forEach(((r,a)=>{switch(a){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:z(38017,{changeType:a})}})),new ur(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Eu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ce(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Dw{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vt(),this.Je=Cr(),this.He=Cr(),this.Ye=new be(se)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:z(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const a=r.target;if(Za(a))if(s===0){const l=new $(a.path);this.et(t,l,We.newNoDocument(l,Q.min()))}else ce(s===1,20013,{expectedCount:s});else{const l=this._t(t);if(l!==s){const c=this.ut(e),h=c?this.ct(c,e,l):1;if(h!==0){this.it(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:a=0}=t;let l,c;try{l=an(s).toUint8Array()}catch(h){if(h instanceof Cd)return Xn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Oo(l,r,a)}catch(h){return Xn(h instanceof Os?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((a=>{const l=this.Ge.ht(),c=`projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;e.mightContain(c)||(this.et(t,a,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((a,l)=>{const c=this.ot(l);if(c){if(a.current&&Za(c.target)){const h=new $(c.target.path);this.It(h).has(l)||this.Et(l,h)||this.et(l,h,We.newNoDocument(h,e))}a.Be&&(t.set(l,a.ke()),a.qe())}}));let s=re();this.He.forEach(((a,l)=>{let c=!0;l.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(a))})),this.je.forEach(((a,l)=>l.setReadTime(e)));const r=new Bi(e,t,this.Ye,this.je,s);return this.je=Vt(),this.Je=Cr(),this.He=Cr(),this.Ye=new be(se),r}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new vu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Se(se),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Se(se),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new vu),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Cr(){return new be($.comparator)}function Eu(){return new be($.comparator)}const Vw={asc:"ASCENDING",desc:"DESCENDING"},Mw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Lw={and:"AND",or:"OR"};class Ow{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function no(n,e){return n.useProto3Json||Di(e)?e:{value:e}}function ui(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Fw(n,e){return ui(n,e.toTimestamp())}function vt(n){return ce(!!n,49232),Q.fromTimestamp((function(t){const s=rn(t);return new ye(s.seconds,s.nanos)})(n))}function Fo(n,e){return so(n,e).canonicalString()}function so(n,e){const t=(function(r){return new pe(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function cm(n){const e=pe.fromString(n);return ce(fm(e),10190,{key:e.toString()}),e}function ro(n,e){return Fo(n.databaseId,e.path)}function Na(n,e){const t=cm(e);if(t.get(1)!==n.databaseId.projectId)throw new F(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(hm(t))}function um(n,e){return Fo(n.databaseId,e)}function Uw(n){const e=cm(n);return e.length===4?pe.emptyPath():hm(e)}function io(n){return new pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function hm(n){return ce(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Iu(n,e,t){return{name:ro(n,e),fields:t.value.mapValue.fields}}function Bw(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:z(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],a=(function(d,f){return d.useProto3Json?(ce(f===void 0||typeof f=="string",58123),Oe.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Oe.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),l=e.targetChange.cause,c=l&&(function(d){const f=d.code===void 0?S.UNKNOWN:im(d.code);return new F(f,d.message||"")})(l);t=new om(s,r,a,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Na(n,s.document.name),a=vt(s.document.updateTime),l=s.document.createTime?vt(s.document.createTime):Q.min(),c=new tt({mapValue:{fields:s.document.fields}}),h=We.newFoundDocument(r,a,l,c),d=s.targetIds||[],f=s.removedTargetIds||[];t=new $r(d,f,h.key,h)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Na(n,s.document),a=s.readTime?vt(s.readTime):Q.min(),l=We.newNoDocument(r,a),c=s.removedTargetIds||[];t=new $r([],c,l.key,l)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Na(n,s.document),a=s.removedTargetIds||[];t=new $r([],a,r,null)}else{if(!("filter"in e))return z(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:a}=s,l=new kw(r,a),c=s.targetId;t=new am(c,l)}}return t}function qw(n,e){let t;if(e instanceof Ui)t={update:Iu(n,e.key,e.value)};else if(e instanceof rm)t={delete:ro(n,e.key)};else if(e instanceof Pn)t={update:Iu(n,e.key,e.data),updateMask:Jw(e.fieldMask)};else{if(!(e instanceof Aw))return z(16599,{Vt:e.type});t={verify:ro(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(a,l){const c=l.transform;if(c instanceof tr)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof nr)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof sr)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ci)return{fieldPath:l.field.canonicalString(),increment:c.Ae};throw z(20930,{transform:l.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,a){return a.updateTime!==void 0?{updateTime:Fw(r,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:z(27497)})(n,e.precondition)),t}function $w(n,e){return n&&n.length>0?(ce(e!==void 0,14353),n.map((t=>(function(r,a){let l=r.updateTime?vt(r.updateTime):vt(a);return l.isEqual(Q.min())&&(l=vt(a)),new Iw(l,r.transformResults||[])})(t,e)))):[]}function Ww(n,e){return{documents:[um(n,e.path)]}}function Hw(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=um(n,r);const a=(function(d){if(d.length!==0)return mm(mt.create(d,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const l=(function(d){if(d.length!==0)return d.map((f=>(function(_){return{field:Bn(_.field),direction:Kw(_.dir)}})(f)))})(e.orderBy);l&&(t.structuredQuery.orderBy=l);const c=no(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:r}}function zw(n){let e=Uw(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){ce(s===1,65062);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let a=[];t.where&&(a=(function(g){const _=dm(g);return _ instanceof mt&&Bd(_)?_.getFilters():[_]})(t.where));let l=[];t.orderBy&&(l=(function(g){return g.map((_=>(function(k){return new er(qn(k.field),(function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(_)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let _;return _=typeof g=="object"?g.value:g,Di(_)?null:_})(t.limit));let h=null;t.startAt&&(h=(function(g){const _=!!g.before,T=g.values||[];return new li(T,_)})(t.startAt));let d=null;return t.endAt&&(d=(function(g){const _=!g.before,T=g.values||[];return new li(T,_)})(t.endAt)),uw(e,r,l,a,c,"F",h,d)}function Gw(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dm(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=qn(t.unaryFilter.field);return Te.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=qn(t.unaryFilter.field);return Te.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=qn(t.unaryFilter.field);return Te.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=qn(t.unaryFilter.field);return Te.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Te.create(qn(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return mt.create(t.compositeFilter.filters.map((s=>dm(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return z(1026)}})(t.compositeFilter.op))})(n):z(30097,{filter:n})}function Kw(n){return Vw[n]}function Qw(n){return Mw[n]}function Yw(n){return Lw[n]}function Bn(n){return{fieldPath:n.canonicalString()}}function qn(n){return Me.fromServerFormat(n.fieldPath)}function mm(n){return n instanceof Te?(function(t){if(t.op==="=="){if(hu(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NAN"}};if(uu(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(hu(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NAN"}};if(uu(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bn(t.field),op:Qw(t.op),value:t.value}}})(n):n instanceof mt?(function(t){const s=t.getFilters().map((r=>mm(r)));return s.length===1?s[0]:{compositeFilter:{op:Yw(t.op),filters:s}}})(n):z(54877,{filter:n})}function Jw(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function fm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t,s,r,a=Q.min(),l=Q.min(),c=Oe.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new Qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.yt=e}}function Zw(n){const e=zw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?to(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.Cn=new t_}addToCollectionParentIndex(e,t){return this.Cn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(sn.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(sn.min())}updateCollectionGroup(e,t,s){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class t_{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Se(pe.comparator),a=!r.has(s);return this.index[t]=r.add(s),a}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Se(pe.comparator)).toArray()}}/**
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
 */const Tu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pm=41943040;class Xe{static withCacheSize(e){return new Xe(e,Xe.DEFAULT_COLLECTION_PERCENTILE,Xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ns{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ns(0)}static cr(){return new ns(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="LruGarbageCollector",n_=1048576;function Au([n,e],[t,s]){const r=se(n,t);return r===0?se(e,s):r}class s_{constructor(e){this.Ir=e,this.buffer=new Se(Au),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Au(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class r_{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){U(Nu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){us(t)?U(Nu,"Ignoring IndexedDB error during garbage collection: ",t):await cs(t)}await this.Vr(3e5)}))}}class i_{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Pi.ce);const s=new s_(t);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Tu)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tu):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,r,a,l,c,h,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),r=this.params.maximumSequenceNumbersToCollect):r=g,l=Date.now(),this.nthSequenceNumber(e,r)))).next((g=>(s=g,c=Date.now(),this.removeTargets(e,s,t)))).next((g=>(a=g,h=Date.now(),this.removeOrphanedDocuments(e,s)))).next((g=>(d=Date.now(),Fn()<=ne.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-f}ms
	Determined least recently used ${r} in `+(c-l)+`ms
	Removed ${a} targets in `+(h-c)+`ms
	Removed ${g} documents in `+(d-h)+`ms
Total Duration: ${d-f}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:a,documentsRemoved:g}))))}}function a_(n,e){return new i_(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(){this.changes=new Rn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,We.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?C.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class l_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Hs(s.mutation,r,ut.empty(),ye.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,re()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=re()){const r=wn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((a=>{let l=Ls();return a.forEach(((c,h)=>{l=l.insert(c,h.overlayedDocument)})),l}))))}getOverlayedDocuments(e,t){const s=wn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,re())))}populateOverlays(e,t,s){const r=[];return s.forEach((a=>{t.has(a)||r.push(a)})),this.documentOverlayCache.getOverlays(e,r).next((a=>{a.forEach(((l,c)=>{t.set(l,c)}))}))}computeViews(e,t,s,r){let a=Vt();const l=Ws(),c=(function(){return Ws()})();return t.forEach(((h,d)=>{const f=s.get(d.key);r.has(d.key)&&(f===void 0||f.mutation instanceof Pn)?a=a.insert(d.key,d):f!==void 0?(l.set(d.key,f.mutation.getFieldMask()),Hs(f.mutation,d,f.mutation.getFieldMask(),ye.now())):l.set(d.key,ut.empty())})),this.recalculateAndSaveOverlays(e,a).next((h=>(h.forEach(((d,f)=>l.set(d,f))),t.forEach(((d,f)=>c.set(d,new l_(f,l.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=Ws();let r=new be(((l,c)=>l-c)),a=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((l=>{for(const c of l)c.keys().forEach((h=>{const d=t.get(h);if(d===null)return;let f=s.get(h)||ut.empty();f=c.applyToLocalView(d,f),s.set(h,f);const g=(r.get(c.batchId)||re()).add(h);r=r.insert(c.batchId,g)}))})).next((()=>{const l=[],c=r.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,f=h.value,g=Yd();f.forEach((_=>{if(!a.has(_)){const T=nm(t.get(_),s.get(_));T!==null&&g.set(_,T),a=a.add(_)}})),l.push(this.documentOverlayCache.saveOverlays(e,d,g))}return C.waitFor(l)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return(function(l){return $.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((a=>{const l=r-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-a.size):C.resolve(wn());let c=Ys,h=a;return l.next((d=>C.forEach(d,((f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),a.get(f)?C.resolve():this.remoteDocumentCache.getEntry(e,f).next((_=>{h=h.insert(f,_)}))))).next((()=>this.populateOverlays(e,d,a))).next((()=>this.computeViews(e,h,d,re()))).next((f=>({batchId:c,changes:Qd(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next((s=>{let r=Ls();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const a=t.collectionGroup;let l=Ls();return this.indexManager.getCollectionParents(e,a).next((c=>C.forEach(c,(h=>{const d=(function(g,_){return new hs(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,h.child(a));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next((f=>{f.forEach(((g,_)=>{l=l.insert(g,_)}))}))})).next((()=>l))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,a,r)))).next((l=>{a.forEach(((h,d)=>{const f=d.getKey();l.get(f)===null&&(l=l.insert(f,We.newInvalidDocument(f)))}));let c=Ls();return l.forEach(((h,d)=>{const f=a.get(h);f!==void 0&&Hs(f.mutation,d,ut.empty(),ye.now()),Li(t,d)&&(c=c.insert(h,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return C.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:vt(r.createTime)}})(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(r){return{name:r.name,query:Zw(r.bundledQuery),readTime:vt(r.readTime)}})(t)),C.resolve()}}/**
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
 */class h_{constructor(){this.overlays=new be($.comparator),this.qr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const s=wn();return C.forEach(t,(r=>this.getOverlay(e,r).next((a=>{a!==null&&s.set(r,a)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,a)=>{this.St(e,t,a)})),C.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(s)),C.resolve()}getOverlaysForCollection(e,t,s){const r=wn(),a=t.length+1,l=new $(t.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===a&&h.largestBatchId>s&&r.set(h.getKey(),h)}return C.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let a=new be(((d,f)=>d-f));const l=this.overlays.getIterator();for(;l.hasNext();){const d=l.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let f=a.get(d.largestBatchId);f===null&&(f=wn(),a=a.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=wn(),h=a.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,f)=>c.set(d,f))),!(c.size()>=r)););return C.resolve(c)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const l=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,l)}this.overlays=this.overlays.insert(s.key,new Sw(t,s));let a=this.qr.get(t);a===void 0&&(a=re(),this.qr.set(t,a)),this.qr.set(t,a.add(s.key))}}/**
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
 */class d_{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.Qr=new Se(Re.$r),this.Ur=new Se(Re.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Re(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Re(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new $(new pe([])),s=new Re(t,e),r=new Re(t,e+1),a=[];return this.Ur.forEachInRange([s,r],(l=>{this.Gr(l),a.push(l.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new $(new pe([])),s=new Re(t,e),r=new Re(t,e+1);let a=re();return this.Ur.forEachInRange([s,r],(l=>{a=a.add(l.key)})),a}containsKey(e){const t=new Re(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Re{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return $.comparator(e.key,t.key)||se(e.Yr,t.Yr)}static Kr(e,t){return se(e.Yr,t.Yr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Se(Re.$r)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new jw(a,t,s,r);this.mutationQueue.push(l);for(const c of r)this.Zr=this.Zr.add(new Re(c.key,a)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(l)}lookupMutationBatch(e,t){return C.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ei(s),a=r<0?0:r;return C.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?ko:this.tr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Re(t,0),r=new Re(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([s,r],(l=>{const c=this.Xr(l.Yr);a.push(c)})),C.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Se(se);return t.forEach((r=>{const a=new Re(r,0),l=new Re(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,l],(c=>{s=s.add(c.Yr)}))})),C.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let a=s;$.isDocumentKey(a)||(a=a.child(""));const l=new Re(new $(a),0);let c=new Se(se);return this.Zr.forEachWhile((h=>{const d=h.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(c=c.add(h.Yr)),!0)}),l),C.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){ce(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return C.forEach(t.mutations,(r=>{const a=new Re(r.key,t.batchId);return s=s.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Re(t,0),r=this.Zr.firstAfterOrEqual(s);return C.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){this.ri=e,this.docs=(function(){return new be($.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),a=r?r.size:0,l=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return C.resolve(s?s.document.mutableCopy():We.newInvalidDocument(t))}getEntries(e,t){let s=Vt();return t.forEach((r=>{const a=this.docs.get(r);s=s.insert(r,a?a.document.mutableCopy():We.newInvalidDocument(r))})),C.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let a=Vt();const l=t.path,c=new $(l.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:f}}=h.getNext();if(!l.isPrefixOf(d.path))break;d.path.length>l.length+1||qb(Bb(f),s)<=0||(r.has(f.key)||Li(t,f))&&(a=a.insert(f.key,f.mutableCopy()))}return C.resolve(a)}getAllFromCollectionGroup(e,t,s,r){z(9500)}ii(e,t){return C.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new p_(this)}getSize(e){return C.resolve(this.size)}}class p_ extends o_{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),C.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.persistence=e,this.si=new Rn((t=>Po(t)),Do),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.oi=0,this._i=new Uo,this.targetCount=0,this.ai=ns.ur()}forEachTarget(e,t){return this.si.forEach(((s,r)=>t(r))),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),C.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ns(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Pr(t),C.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,s){let r=0;const a=[];return this.si.forEach(((l,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.si.delete(l),a.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),C.waitFor(a).next((()=>r))}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return C.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),C.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const r=this.persistence.referenceDelegate,a=[];return r&&t.forEach((l=>{a.push(r.markPotentiallyOrphaned(e,l))})),C.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return C.resolve(s)}containsKey(e,t){return C.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,t){this.ui={},this.overlays={},this.ci=new Pi(0),this.li=!1,this.li=!0,this.hi=new d_,this.referenceDelegate=e(this),this.Pi=new g_(this),this.indexManager=new e_,this.remoteDocumentCache=(function(r){return new f_(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new Xw(t),this.Ii=new u_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new h_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new m_(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){U("MemoryPersistence","Starting transaction:",e);const r=new y_(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((a=>this.referenceDelegate.di(r).next((()=>a)))).toPromise().then((a=>(r.raiseOnCommittedEvent(),a)))}Ai(e,t){return C.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class y_ extends Wb{constructor(e){super(),this.currentSequenceNumber=e}}class Bo{constructor(e){this.persistence=e,this.Ri=new Uo,this.Vi=null}static mi(e){return new Bo(e)}get fi(){if(this.Vi)return this.Vi;throw z(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),C.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((a=>this.fi.add(a.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.fi,(s=>{const r=$.fromPath(s);return this.gi(e,r).next((a=>{a||t.removeEntry(r,Q.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class hi{constructor(e,t){this.persistence=e,this.pi=new Rn((s=>Gb(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=a_(this,t)}static mi(e,t){return new hi(e,t)}Ei(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return C.forEach(this.pi,((s,r)=>this.br(e,s,r).next((a=>a?C.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),a=r.newChangeBuffer();return r.ii(e,(l=>this.br(e,l,t).next((c=>{c||(s++,a.removeEntry(l,Q.min()))})))).next((()=>a.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),C.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ur(e.data.value)),t}br(e,t,s){return C.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.pi.get(t);return C.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=r}static As(e,t){let s=re(),r=re();for(const a of t.docChanges)switch(a.type){case 0:s=s.add(a.doc.key);break;case 1:r=r.add(a.doc.key)}return new qo(e,t.fromCache,s,r)}}/**
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
 */class x_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Kg()?8:Hb(ze())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const a={result:null};return this.ys(e,t).next((l=>{a.result=l})).next((()=>{if(!a.result)return this.ws(e,t,r,s).next((l=>{a.result=l}))})).next((()=>{if(a.result)return;const l=new x_;return this.Ss(e,t,l).next((c=>{if(a.result=c,this.Vs)return this.bs(e,t,l,c.size)}))})).next((()=>a.result))}bs(e,t,s,r){return s.documentReadCount<this.fs?(Fn()<=ne.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Un(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),C.resolve()):(Fn()<=ne.DEBUG&&U("QueryEngine","Query:",Un(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(Fn()<=ne.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Un(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_t(t))):C.resolve())}ys(e,t){if(pu(t))return C.resolve(null);let s=_t(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=to(t,null,"F"),s=_t(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((a=>{const l=re(...a);return this.ps.getDocuments(e,l).next((c=>this.indexManager.getMinOffset(e,s).next((h=>{const d=this.Ds(t,c);return this.Cs(t,d,l,h.readTime)?this.ys(e,to(t,null,"F")):this.vs(e,d,t,h)}))))})))))}ws(e,t,s,r){return pu(t)||r.isEqual(Q.min())?C.resolve(null):this.ps.getDocuments(e,s).next((a=>{const l=this.Ds(t,a);return this.Cs(t,l,s,r)?C.resolve(null):(Fn()<=ne.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Un(t)),this.vs(e,l,t,Ub(r,Ys)).next((c=>c)))}))}Ds(e,t){let s=new Se(Gd(e));return t.forEach(((r,a)=>{Li(e,a)&&(s=s.add(a))})),s}Cs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(r)>0)}Ss(e,t,s){return Fn()<=ne.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Un(t)),this.ps.getDocumentsMatchingQuery(e,t,sn.min(),s)}vs(e,t,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((a=>(t.forEach((l=>{a=a.insert(l.key,l)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o="LocalStore",w_=3e8;class __{constructor(e,t,s,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new be(se),this.xs=new Rn((a=>Po(a)),Do),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new c_(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function v_(n,e,t,s){return new __(n,e,t,s)}async function ym(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((a=>(r=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((a=>{const l=[],c=[];let h=re();for(const d of r){l.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of a){c.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return t.localDocuments.getDocuments(s,h).next((d=>({Ls:d,removedBatchIds:l,addedBatchIds:c})))}))}))}function E_(n,e){const t=J(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,h,d,f){const g=d.batch,_=g.keys();let T=C.resolve();return _.forEach((k=>{T=T.next((()=>f.getEntry(h,k))).next((P=>{const R=d.docVersions.get(k);ce(R!==null,48541),P.version.compareTo(R)<0&&(g.applyToRemoteDocument(P,d),P.isValidDocument()&&(P.setReadTime(d.commitVersion),f.addEntry(P)))}))})),T.next((()=>c.mutationQueue.removeMutationBatch(h,g)))})(t,s,e,a).next((()=>a.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let h=re();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function xm(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function I_(n,e){const t=J(n),s=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const l=t.Ns.newChangeBuffer({trackRemovals:!0});r=t.Ms;const c=[];e.targetChanges.forEach(((f,g)=>{const _=r.get(g);if(!_)return;c.push(t.Pi.removeMatchingKeys(a,f.removedDocuments,g).next((()=>t.Pi.addMatchingKeys(a,f.addedDocuments,g))));let T=_.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(g)!==null?T=T.withResumeToken(Oe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,s)),r=r.insert(g,T),(function(P,R,M){return P.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=w_?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0})(_,T,f)&&c.push(t.Pi.updateTargetData(a,T))}));let h=Vt(),d=re();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(a,f))})),c.push(T_(a,l,e.documentUpdates).next((f=>{h=f.ks,d=f.qs}))),!s.isEqual(Q.min())){const f=t.Pi.getLastRemoteSnapshotVersion(a).next((g=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,s)));c.push(f)}return C.waitFor(c).next((()=>l.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,h,d))).next((()=>h))})).then((a=>(t.Ms=r,a)))}function T_(n,e,t){let s=re(),r=re();return t.forEach((a=>s=s.add(a))),e.getEntries(n,s).next((a=>{let l=Vt();return t.forEach(((c,h)=>{const d=a.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(c)),h.isNoDocument()&&h.version.isEqual(Q.min())?(e.removeEntry(c,h.readTime),l=l.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),l=l.insert(c,h)):U($o,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)})),{ks:l,qs:r}}))}function N_(n,e){const t=J(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=ko),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function A_(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.Pi.getTargetData(s,e).next((a=>a?(r=a,C.resolve(r)):t.Pi.allocateTargetId(s).next((l=>(r=new Qt(e,l,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function ao(n,e,t){const s=J(n),r=s.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",a,(l=>s.persistence.referenceDelegate.removeTarget(l,r)))}catch(l){if(!us(l))throw l;U($o,`Failed to update sequence numbers for target ${e}: ${l}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function ju(n,e,t){const s=J(n);let r=Q.min(),a=re();return s.persistence.runTransaction("Execute query","readwrite",(l=>(function(h,d,f){const g=J(h),_=g.xs.get(f);return _!==void 0?C.resolve(g.Ms.get(_)):g.Pi.getTargetData(d,f)})(s,l,_t(e)).next((c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(l,c.targetId).next((h=>{a=h}))})).next((()=>s.Fs.getDocumentsMatchingQuery(l,e,t?r:Q.min(),t?a:re()))).next((c=>(j_(s,dw(e),c),{documents:c,Qs:a})))))}function j_(n,e,t){let s=n.Os.get(e)||Q.min();t.forEach(((r,a)=>{a.readTime.compareTo(s)>0&&(s=a.readTime)})),n.Os.set(e,s)}class Su{constructor(){this.activeTargetIds=xw()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class S_{constructor(){this.Mo=new Su,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Su,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="ConnectivityMonitor";class Cu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){U(ku,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){U(ku,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rr=null;function oo(){return Rr===null?Rr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Rr++,"0x"+Rr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="RestConnection",C_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class R_{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===ai?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,t,s,r,a){const l=oo(),c=this.zo(e,t.toUriEncodedString());U(Aa,`Sending RPC '${e}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,r,a);const{host:d}=new URL(c),f=rs(d);return this.Jo(e,c,h,s,f).then((g=>(U(Aa,`Received RPC '${e}' ${l}: `,g),g)),(g=>{throw Xn(Aa,`RPC '${e}' ${l} failed with error: `,g,"url: ",c,"request:",s),g}))}Ho(e,t,s,r,a,l){return this.Go(e,t,s,r,a)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ls})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,a)=>e[a]=r)),s&&s.headers.forEach(((r,a)=>e[a]=r))}zo(e,t){const s=C_[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="WebChannelConnection";class D_ extends R_{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,r,a){const l=oo();return new Promise(((c,h)=>{const d=new wd;d.setWithCredentials(!0),d.listenOnce(_d.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Fr.NO_ERROR:const g=d.getResponseJson();U(qe,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(g)),c(g);break;case Fr.TIMEOUT:U(qe,`RPC '${e}' ${l} timed out`),h(new F(S.DEADLINE_EXCEEDED,"Request time out"));break;case Fr.HTTP_ERROR:const _=d.getStatus();if(U(qe,`RPC '${e}' ${l} failed with status:`,_,"response text:",d.getResponseText()),_>0){let T=d.getResponseJson();Array.isArray(T)&&(T=T[0]);const k=T==null?void 0:T.error;if(k&&k.status&&k.message){const P=(function(M){const D=M.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(D)>=0?D:S.UNKNOWN})(k.status);h(new F(P,k.message))}else h(new F(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new F(S.UNAVAILABLE,"Connection failed."));break;default:z(9055,{l_:e,streamId:l,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{U(qe,`RPC '${e}' ${l} completed.`)}}));const f=JSON.stringify(r);U(qe,`RPC '${e}' ${l} sending request:`,r),d.send(t,"POST",f,s,15)}))}T_(e,t,s){const r=oo(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=Id(),c=Ed(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,s),h.encodeInitMessageHeaders=!0;const f=a.join("");U(qe,`Creating RPC '${e}' stream ${r}: ${f}`,h);const g=l.createWebChannel(f,h);this.I_(g);let _=!1,T=!1;const k=new P_({Yo:R=>{T?U(qe,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(_||(U(qe,`Opening RPC '${e}' stream ${r} transport.`),g.open(),_=!0),U(qe,`RPC '${e}' stream ${r} sending:`,R),g.send(R))},Zo:()=>g.close()}),P=(R,M,D)=>{R.listen(M,(B=>{try{D(B)}catch(Y){setTimeout((()=>{throw Y}),0)}}))};return P(g,Ms.EventType.OPEN,(()=>{T||(U(qe,`RPC '${e}' stream ${r} transport opened.`),k.o_())})),P(g,Ms.EventType.CLOSE,(()=>{T||(T=!0,U(qe,`RPC '${e}' stream ${r} transport closed`),k.a_(),this.E_(g))})),P(g,Ms.EventType.ERROR,(R=>{T||(T=!0,Xn(qe,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),k.a_(new F(S.UNAVAILABLE,"The operation could not be completed")))})),P(g,Ms.EventType.MESSAGE,(R=>{var M;if(!T){const D=R.data[0];ce(!!D,16349);const B=D,Y=(B==null?void 0:B.error)||((M=B[0])==null?void 0:M.error);if(Y){U(qe,`RPC '${e}' stream ${r} received error:`,Y);const oe=Y.status;let te=(function(y){const w=Ie[y];if(w!==void 0)return im(w)})(oe),E=Y.message;te===void 0&&(te=S.INTERNAL,E="Unknown error status: "+oe+" with message "+Y.message),T=!0,k.a_(new F(te,E)),g.close()}else U(qe,`RPC '${e}' stream ${r} received:`,D),k.u_(D)}})),P(c,vd.STAT_EVENT,(R=>{R.stat===Ka.PROXY?U(qe,`RPC '${e}' stream ${r} detected buffering proxy`):R.stat===Ka.NOPROXY&&U(qe,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{k.__()}),0),k}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function ja(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(n){return new Ow(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,t,s=1e3,r=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=r,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="PersistentStream";class wm{constructor(e,t,s,r,a,l,c,h){this.Mi=e,this.S_=s,this.b_=r,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new bm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(Dt(t.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new F(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return U(Ru,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(U(Ru,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class V_ extends wm{constructor(e,t,s,r,a,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,l),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Bw(this.serializer,e),s=(function(a){if(!("targetChange"in a))return Q.min();const l=a.targetChange;return l.targetIds&&l.targetIds.length?Q.min():l.readTime?vt(l.readTime):Q.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=io(this.serializer),t.addTarget=(function(a,l){let c;const h=l.target;if(c=Za(h)?{documents:Ww(a,h)}:{query:Hw(a,h).ft},c.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){c.resumeToken=lm(a,l.resumeToken);const d=no(a,l.expectedCount);d!==null&&(c.expectedCount=d)}else if(l.snapshotVersion.compareTo(Q.min())>0){c.readTime=ui(a,l.snapshotVersion.toTimestamp());const d=no(a,l.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const s=Gw(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=io(this.serializer),t.removeTarget=e,this.q_(t)}}class M_ extends wm{constructor(e,t,s,r,a,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,l),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=$w(e.writeResults,e.commitTime),s=vt(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=io(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>qw(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{}class O_ extends L_{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new F(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Go(e,so(t,s),r,a,l))).catch((a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(S.UNKNOWN,a.toString())}))}Ho(e,t,s,r,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Ho(e,so(t,s),r,l,c,a))).catch((l=>{throw l.name==="FirebaseError"?(l.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new F(S.UNKNOWN,l.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class F_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Dt(t),this.aa=!1):U("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn="RemoteStore";class U_{constructor(e,t,s,r,a){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((l=>{s.enqueueAndForget((async()=>{Dn(this)&&(U(Nn,"Restarting streams for network reachability change."),await(async function(h){const d=J(h);d.Ea.add(4),await hr(d),d.Ra.set("Unknown"),d.Ea.delete(4),await $i(d)})(this))}))})),this.Ra=new F_(s,r)}}async function $i(n){if(Dn(n))for(const e of n.da)await e(!0)}async function hr(n){for(const e of n.da)await e(!1)}function _m(n,e){const t=J(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Go(t)?zo(t):ds(t).O_()&&Ho(t,e))}function Wo(n,e){const t=J(n),s=ds(t);t.Ia.delete(e),s.O_()&&vm(t,e),t.Ia.size===0&&(s.O_()?s.L_():Dn(t)&&t.Ra.set("Unknown"))}function Ho(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ds(n).Y_(e)}function vm(n,e){n.Va.Ue(e),ds(n).Z_(e)}function zo(n){n.Va=new Dw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ds(n).start(),n.Ra.ua()}function Go(n){return Dn(n)&&!ds(n).x_()&&n.Ia.size>0}function Dn(n){return J(n).Ea.size===0}function Em(n){n.Va=void 0}async function B_(n){n.Ra.set("Online")}async function q_(n){n.Ia.forEach(((e,t)=>{Ho(n,e)}))}async function $_(n,e){Em(n),Go(n)?(n.Ra.ha(e),zo(n)):n.Ra.set("Unknown")}async function W_(n,e,t){if(n.Ra.set("Online"),e instanceof om&&e.state===2&&e.cause)try{await(async function(r,a){const l=a.cause;for(const c of a.targetIds)r.Ia.has(c)&&(await r.remoteSyncer.rejectListen(c,l),r.Ia.delete(c),r.Va.removeTarget(c))})(n,e)}catch(s){U(Nn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await di(n,s)}else if(e instanceof $r?n.Va.Ze(e):e instanceof am?n.Va.st(e):n.Va.tt(e),!t.isEqual(Q.min()))try{const s=await xm(n.localStore);t.compareTo(s)>=0&&await(function(a,l){const c=a.Va.Tt(l);return c.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const f=a.Ia.get(d);f&&a.Ia.set(d,f.withResumeToken(h.resumeToken,l))}})),c.targetMismatches.forEach(((h,d)=>{const f=a.Ia.get(h);if(!f)return;a.Ia.set(h,f.withResumeToken(Oe.EMPTY_BYTE_STRING,f.snapshotVersion)),vm(a,h);const g=new Qt(f.target,h,d,f.sequenceNumber);Ho(a,g)})),a.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){U(Nn,"Failed to raise snapshot:",s),await di(n,s)}}async function di(n,e,t){if(!us(e))throw e;n.Ea.add(1),await hr(n),n.Ra.set("Offline"),t||(t=()=>xm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{U(Nn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await $i(n)}))}function Im(n,e){return e().catch((t=>di(n,t,e)))}async function Wi(n){const e=J(n),t=ln(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ko;for(;H_(e);)try{const r=await N_(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,z_(e,r)}catch(r){await di(e,r)}Tm(e)&&Nm(e)}function H_(n){return Dn(n)&&n.Ta.length<10}function z_(n,e){n.Ta.push(e);const t=ln(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Tm(n){return Dn(n)&&!ln(n).x_()&&n.Ta.length>0}function Nm(n){ln(n).start()}async function G_(n){ln(n).ra()}async function K_(n){const e=ln(n);for(const t of n.Ta)e.ea(t.mutations)}async function Q_(n,e,t){const s=n.Ta.shift(),r=Lo.from(s,e,t);await Im(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await Wi(n)}async function Y_(n,e){e&&ln(n).X_&&await(async function(s,r){if((function(l){return Cw(l)&&l!==S.ABORTED})(r.code)){const a=s.Ta.shift();ln(s).B_(),await Im(s,(()=>s.remoteSyncer.rejectFailedWrite(a.batchId,r))),await Wi(s)}})(n,e),Tm(n)&&Nm(n)}async function Pu(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),U(Nn,"RemoteStore received new credentials");const s=Dn(t);t.Ea.add(3),await hr(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await $i(t)}async function J_(n,e){const t=J(n);e?(t.Ea.delete(2),await $i(t)):e||(t.Ea.add(2),await hr(t),t.Ra.set("Unknown"))}function ds(n){return n.ma||(n.ma=(function(t,s,r){const a=J(t);return a.sa(),new V_(s,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,r)})(n.datastore,n.asyncQueue,{Xo:B_.bind(null,n),t_:q_.bind(null,n),r_:$_.bind(null,n),H_:W_.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Go(n)?zo(n):n.Ra.set("Unknown")):(await n.ma.stop(),Em(n))}))),n.ma}function ln(n){return n.fa||(n.fa=(function(t,s,r){const a=J(t);return a.sa(),new M_(s,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,r)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:G_.bind(null,n),r_:Y_.bind(null,n),ta:K_.bind(null,n),na:Q_.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Wi(n)):(await n.fa.stop(),n.Ta.length>0&&(U(Nn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t,s,r,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=a,this.deferred=new kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,a){const l=Date.now()+s,c=new Ko(e,t,l,r,a);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qo(n,e){if(Dt("AsyncQueue",`${e}: ${n}`),us(n))return new F(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{static emptySet(e){return new Gn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||$.comparator(t.key,s.key):(t,s)=>$.comparator(t.key,s.key),this.keyedMap=Ls(),this.sortedSet=new be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,a=s.getNext().key;if(!r.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Gn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this.ga=new be($.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):z(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class ss{constructor(e,t,s,r,a,l,c,h,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=a,this.fromCache=l,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,r,a){const l=[];return t.forEach((c=>{l.push({type:0,doc:c})})),new ss(e,t,Gn.emptySet(t),l,s,r,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Z_{constructor(){this.queries=Vu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=J(t),a=r.queries;r.queries=Vu(),a.forEach(((l,c)=>{for(const h of c.Sa)h.onError(s)}))})(this,new F(S.ABORTED,"Firestore shutting down"))}}function Vu(){return new Rn((n=>zd(n)),Mi)}async function Am(n,e){const t=J(n);let s=3;const r=e.query;let a=t.queries.get(r);a?!a.ba()&&e.Da()&&(s=2):(a=new X_,s=e.Da()?0:1);try{switch(s){case 0:a.wa=await t.onListen(r,!0);break;case 1:a.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(l){const c=Qo(l,`Initialization of query '${Un(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&Yo(t)}async function jm(n,e){const t=J(n),s=e.query;let r=3;const a=t.queries.get(s);if(a){const l=a.Sa.indexOf(e);l>=0&&(a.Sa.splice(l,1),a.Sa.length===0?r=e.Da()?0:1:!a.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function ev(n,e){const t=J(n);let s=!1;for(const r of e){const a=r.query,l=t.queries.get(a);if(l){for(const c of l.Sa)c.Fa(r)&&(s=!0);l.wa=r}}s&&Yo(t)}function tv(n,e,t){const s=J(n),r=s.queries.get(e);if(r)for(const a of r.Sa)a.onError(t);s.queries.delete(e)}function Yo(n){n.Ca.forEach((e=>{e.next()}))}var lo,Mu;(Mu=lo||(lo={})).Ma="default",Mu.Cache="cache";class Sm{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ss(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==lo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.key=e}}class Cm{constructor(e){this.key=e}}class nv{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=re(),this.mutatedKeys=re(),this.eu=Gd(e),this.tu=new Gn(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Du,r=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,l=r,c=!1;const h=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((f,g)=>{const _=r.get(f),T=Li(this.query,g)?g:null,k=!!_&&this.mutatedKeys.has(_.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let R=!1;_&&T?_.data.isEqual(T.data)?k!==P&&(s.track({type:3,doc:T}),R=!0):this.su(_,T)||(s.track({type:2,doc:T}),R=!0,(h&&this.eu(T,h)>0||d&&this.eu(T,d)<0)&&(c=!0)):!_&&T?(s.track({type:0,doc:T}),R=!0):_&&!T&&(s.track({type:1,doc:_}),R=!0,(h||d)&&(c=!0)),R&&(T?(l=l.add(T),a=P?a.add(f):a.delete(f)):(l=l.delete(f),a=a.delete(f)))})),this.query.limit!==null)for(;l.size>this.query.limit;){const f=this.query.limitType==="F"?l.last():l.first();l=l.delete(f.key),a=a.delete(f.key),s.track({type:1,doc:f})}return{tu:l,iu:s,Cs:c,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const l=e.iu.ya();l.sort(((f,g)=>(function(T,k){const P=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{Rt:R})}};return P(T)-P(k)})(f.type,g.type)||this.eu(f.doc,g.doc))),this.ou(s),r=r??!1;const c=t&&!r?this._u():[],h=this.Xa.size===0&&this.current&&!r?1:0,d=h!==this.Za;return this.Za=h,l.length!==0||d?{snapshot:new ss(this.query,e.tu,a,l,e.mutatedKeys,h===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Du,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=re(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new Cm(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new km(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=re();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ss.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Jo="SyncEngine";class sv{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class rv{constructor(e){this.key=e,this.hu=!1}}class iv{constructor(e,t,s,r,a,l){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new Rn((c=>zd(c)),Mi),this.Iu=new Map,this.Eu=new Set,this.du=new be($.comparator),this.Au=new Map,this.Ru=new Uo,this.Vu={},this.mu=new Map,this.fu=ns.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function av(n,e,t=!0){const s=Lm(n);let r;const a=s.Tu.get(e);return a?(s.sharedClientState.addLocalQueryTarget(a.targetId),r=a.view.lu()):r=await Rm(s,e,t,!0),r}async function ov(n,e){const t=Lm(n);await Rm(t,e,!0,!1)}async function Rm(n,e,t,s){const r=await A_(n.localStore,_t(e)),a=r.targetId,l=n.sharedClientState.addLocalQueryTarget(a,t);let c;return s&&(c=await lv(n,e,a,l==="current",r.resumeToken)),n.isPrimaryClient&&t&&_m(n.remoteStore,r),c}async function lv(n,e,t,s,r){n.pu=(g,_,T)=>(async function(P,R,M,D){let B=R.view.ru(M);B.Cs&&(B=await ju(P.localStore,R.query,!1).then((({documents:E})=>R.view.ru(E,B))));const Y=D&&D.targetChanges.get(R.targetId),oe=D&&D.targetMismatches.get(R.targetId)!=null,te=R.view.applyChanges(B,P.isPrimaryClient,Y,oe);return Ou(P,R.targetId,te.au),te.snapshot})(n,g,_,T);const a=await ju(n.localStore,e,!0),l=new nv(e,a.Qs),c=l.ru(a.documents),h=ur.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),d=l.applyChanges(c,n.isPrimaryClient,h);Ou(n,t,d.au);const f=new sv(e,t,l);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function cv(n,e,t){const s=J(n),r=s.Tu.get(e),a=s.Iu.get(r.targetId);if(a.length>1)return s.Iu.set(r.targetId,a.filter((l=>!Mi(l,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await ao(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Wo(s.remoteStore,r.targetId),co(s,r.targetId)})).catch(cs)):(co(s,r.targetId),await ao(s.localStore,r.targetId,!0))}async function uv(n,e){const t=J(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Wo(t.remoteStore,s.targetId))}async function hv(n,e,t){const s=xv(n);try{const r=await(function(l,c){const h=J(l),d=ye.now(),f=c.reduce(((T,k)=>T.add(k.key)),re());let g,_;return h.persistence.runTransaction("Locally write mutations","readwrite",(T=>{let k=Vt(),P=re();return h.Ns.getEntries(T,f).next((R=>{k=R,k.forEach(((M,D)=>{D.isValidDocument()||(P=P.add(M))}))})).next((()=>h.localDocuments.getOverlayedDocuments(T,k))).next((R=>{g=R;const M=[];for(const D of c){const B=Nw(D,g.get(D.key).overlayedDocument);B!=null&&M.push(new Pn(D.key,B,Od(B.value.mapValue),Ct.exists(!0)))}return h.mutationQueue.addMutationBatch(T,d,M,c)})).next((R=>{_=R;const M=R.applyToLocalDocumentSet(g,P);return h.documentOverlayCache.saveOverlays(T,R.batchId,M)}))})).then((()=>({batchId:_.batchId,changes:Qd(g)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(l,c,h){let d=l.Vu[l.currentUser.toKey()];d||(d=new be(se)),d=d.insert(c,h),l.Vu[l.currentUser.toKey()]=d})(s,r.batchId,t),await dr(s,r.changes),await Wi(s.remoteStore)}catch(r){const a=Qo(r,"Failed to persist write");t.reject(a)}}async function Pm(n,e){const t=J(n);try{const s=await I_(t.localStore,e);e.targetChanges.forEach(((r,a)=>{const l=t.Au.get(a);l&&(ce(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?l.hu=!0:r.modifiedDocuments.size>0?ce(l.hu,14607):r.removedDocuments.size>0&&(ce(l.hu,42227),l.hu=!1))})),await dr(t,s,e)}catch(s){await cs(s)}}function Lu(n,e,t){const s=J(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((a,l)=>{const c=l.view.va(e);c.snapshot&&r.push(c.snapshot)})),(function(l,c){const h=J(l);h.onlineState=c;let d=!1;h.queries.forEach(((f,g)=>{for(const _ of g.Sa)_.va(c)&&(d=!0)})),d&&Yo(h)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function dv(n,e,t){const s=J(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),a=r&&r.key;if(a){let l=new be($.comparator);l=l.insert(a,We.newNoDocument(a,Q.min()));const c=re().add(a),h=new Bi(Q.min(),new Map,new be(se),l,c);await Pm(s,h),s.du=s.du.remove(a),s.Au.delete(e),Xo(s)}else await ao(s.localStore,e,!1).then((()=>co(s,e,t))).catch(cs)}async function mv(n,e){const t=J(n),s=e.batch.batchId;try{const r=await E_(t.localStore,e);Vm(t,s,null),Dm(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await dr(t,r)}catch(r){await cs(r)}}async function fv(n,e,t){const s=J(n);try{const r=await(function(l,c){const h=J(l);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let f;return h.mutationQueue.lookupMutationBatch(d,c).next((g=>(ce(g!==null,37113),f=g.keys(),h.mutationQueue.removeMutationBatch(d,g)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,f,c))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f))).next((()=>h.localDocuments.getDocuments(d,f)))}))})(s.localStore,e);Vm(s,e,t),Dm(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await dr(s,r)}catch(r){await cs(r)}}function Dm(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Vm(n,e,t){const s=J(n);let r=s.Vu[s.currentUser.toKey()];if(r){const a=r.get(e);a&&(t?a.reject(t):a.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function co(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||Mm(n,s)}))}function Mm(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Wo(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Xo(n))}function Ou(n,e,t){for(const s of t)s instanceof km?(n.Ru.addReference(s.key,e),pv(n,s)):s instanceof Cm?(U(Jo,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||Mm(n,s.key)):z(19791,{wu:s})}function pv(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(U(Jo,"New document in limbo: "+t),n.Eu.add(s),Xo(n))}function Xo(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new $(pe.fromString(e)),s=n.fu.next();n.Au.set(s,new rv(t)),n.du=n.du.insert(t,s),_m(n.remoteStore,new Qt(_t(Vo(t.path)),s,"TargetPurposeLimboResolution",Pi.ce))}}async function dr(n,e,t){const s=J(n),r=[],a=[],l=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,h)=>{l.push(s.pu(h,e,t).then((d=>{var f;if((d||t)&&s.isPrimaryClient){const g=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:f.current;s.sharedClientState.updateQueryState(h.targetId,g?"current":"not-current")}if(d){r.push(d);const g=qo.As(h.targetId,d);a.push(g)}})))})),await Promise.all(l),s.Pu.H_(r),await(async function(h,d){const f=J(h);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>C.forEach(d,(_=>C.forEach(_.Es,(T=>f.persistence.referenceDelegate.addReference(g,_.targetId,T))).next((()=>C.forEach(_.ds,(T=>f.persistence.referenceDelegate.removeReference(g,_.targetId,T)))))))))}catch(g){if(!us(g))throw g;U($o,"Failed to update sequence numbers: "+g)}for(const g of d){const _=g.targetId;if(!g.fromCache){const T=f.Ms.get(_),k=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(k);f.Ms=f.Ms.insert(_,P)}}})(s.localStore,a))}async function gv(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){U(Jo,"User change. New user:",e.toKey());const s=await ym(t.localStore,e);t.currentUser=e,(function(a,l){a.mu.forEach((c=>{c.forEach((h=>{h.reject(new F(S.CANCELLED,l))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await dr(t,s.Ls)}}function yv(n,e){const t=J(n),s=t.Au.get(e);if(s&&s.hu)return re().add(s.key);{let r=re();const a=t.Iu.get(e);if(!a)return r;for(const l of a){const c=t.Tu.get(l);r=r.unionWith(c.view.nu)}return r}}function Lm(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dv.bind(null,e),e.Pu.H_=ev.bind(null,e.eventManager),e.Pu.yu=tv.bind(null,e.eventManager),e}function xv(n){const e=J(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fv.bind(null,e),e}class mi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return v_(this.persistence,new b_,e.initialUser,this.serializer)}Cu(e){return new gm(Bo.mi,this.serializer)}Du(e){return new S_}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mi.provider={build:()=>new mi};class bv extends mi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ce(this.persistence.referenceDelegate instanceof hi,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new r_(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Xe.withCacheSize(this.cacheSizeBytes):Xe.DEFAULT;return new gm((s=>hi.mi(s,t)),this.serializer)}}class uo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Lu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=gv.bind(null,this.syncEngine),await J_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Z_})()}createDatastore(e){const t=qi(e.databaseInfo.databaseId),s=(function(a){return new D_(a)})(e.databaseInfo);return(function(a,l,c,h){return new O_(a,l,c,h)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,a,l,c){return new U_(s,r,a,l,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Lu(this.syncEngine,t,0)),(function(){return Cu.v()?new Cu:new k_})())}createSyncEngine(e,t){return(function(r,a,l,c,h,d,f){const g=new iv(r,a,l,c,h,d);return f&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const a=J(r);U(Nn,"RemoteStore shutting down."),a.Ea.add(5),await hr(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}uo.provider={build:()=>new uo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Om{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="FirestoreClient";class wv{constructor(e,t,s,r,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=$e.UNAUTHENTICATED,this.clientId=So.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(s,(async l=>{U(cn,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l})),this.appCheckCredentials.start(s,(l=>(U(cn,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Qo(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Sa(n,e){n.asyncQueue.verifyOperationInProgress(),U(cn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await ym(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Fu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await _v(n);U(cn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Pu(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>Pu(e.remoteStore,r))),n._onlineComponents=e}async function _v(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(cn,"Using user provided OfflineComponentProvider");try{await Sa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===S.FAILED_PRECONDITION||r.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Xn("Error using user provided cache. Falling back to memory cache: "+t),await Sa(n,new mi)}}else U(cn,"Using default OfflineComponentProvider"),await Sa(n,new bv(void 0));return n._offlineComponents}async function Fm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(cn,"Using user provided OnlineComponentProvider"),await Fu(n,n._uninitializedComponentsProvider._online)):(U(cn,"Using default OnlineComponentProvider"),await Fu(n,new uo))),n._onlineComponents}function vv(n){return Fm(n).then((e=>e.syncEngine))}async function Um(n){const e=await Fm(n),t=e.eventManager;return t.onListen=av.bind(null,e.syncEngine),t.onUnlisten=cv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ov.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uv.bind(null,e.syncEngine),t}function Ev(n,e,t={}){const s=new kt;return n.asyncQueue.enqueueAndForget((async()=>(function(a,l,c,h,d){const f=new Om({next:_=>{f.Nu(),l.enqueueAndForget((()=>jm(a,g)));const T=_.docs.has(c);!T&&_.fromCache?d.reject(new F(S.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&_.fromCache&&h&&h.source==="server"?d.reject(new F(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),g=new Sm(Vo(c.path),f,{includeMetadataChanges:!0,qa:!0});return Am(a,g)})(await Um(n),n.asyncQueue,e,t,s))),s.promise}function Iv(n,e,t={}){const s=new kt;return n.asyncQueue.enqueueAndForget((async()=>(function(a,l,c,h,d){const f=new Om({next:_=>{f.Nu(),l.enqueueAndForget((()=>jm(a,g))),_.fromCache&&h.source==="server"?d.reject(new F(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),g=new Sm(c,f,{includeMetadataChanges:!0,qa:!0});return Am(a,g)})(await Um(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function Bm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="firestore.googleapis.com",Bu=!0;class qu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qm,this.ssl=Bu}else this.host=e.host,this.ssl=e.ssl??Bu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<n_)throw new F(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Fb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bm(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hi{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Sb;switch(s.type){case"firstParty":return new Pb(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new F(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Uu.get(t);s&&(U("ComponentProvider","Removing Datastore"),Uu.delete(t),s.terminate())})(this),Promise.resolve()}}function Tv(n,e,t,s={}){var d;n=Tn(n,Hi);const r=rs(e),a=n._getSettings(),l={...a,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;r&&(Sh(`https://${c}`),kh("Firestore",!0)),a.host!==qm&&a.host!==c&&Xn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...a,host:c,ssl:r,emulatorOptions:s};if(!nn(h,l)&&(n._setSettings(h),s.mockUserToken)){let f,g;if(typeof s.mockUserToken=="string")f=s.mockUserToken,g=$e.MOCK_USER;else{f=Ug(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new F(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new $e(_)}n._authCredentials=new kb(new Nd(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Vn(this.firestore,e,this._query)}}class Ae{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ae(this.firestore,e,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(cr(t,Ae._jsonSchema))return new Ae(e,s||null,new $(pe.fromString(t.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:Ne("string",Ae._jsonSchemaVersion),referencePath:Ne("string")};class tn extends Vn{constructor(e,t,s){super(e,t,Vo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new $(e))}withConverter(e){return new tn(this.firestore,e,this._path)}}function rr(n,e,...t){if(n=Ee(n),Ad("collection","path",e),n instanceof Hi){const s=pe.fromString(e,...t);return tu(s),new tn(n,null,s)}{if(!(n instanceof Ae||n instanceof tn))throw new F(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(pe.fromString(e,...t));return tu(s),new tn(n.firestore,null,s)}}function Pe(n,e,...t){if(n=Ee(n),arguments.length===1&&(e=So.newId()),Ad("doc","path",e),n instanceof Hi){const s=pe.fromString(e,...t);return eu(s),new Ae(n,null,new $(s))}{if(!(n instanceof Ae||n instanceof tn))throw new F(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(pe.fromString(e,...t));return eu(s),new Ae(n.firestore,n instanceof tn?n.converter:null,new $(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="AsyncQueue";class Wu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bm(this,"async_queue_retry"),this._c=()=>{const s=ja();s&&U($u,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=ja();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ja();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new kt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!us(e))throw e;U($u,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Dt("INTERNAL UNHANDLED ERROR: ",Hu(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Ko.createAndSchedule(this,e,t,s,(a=>this.hc(a)));return this.tc.push(r),r}uc(){this.nc&&z(47125,{Pc:Hu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Hu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class zi extends Hi{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Wu,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wu(e),this._firestoreClient=void 0,await e}}}function Nv(n,e){const t=typeof n=="object"?n:bo(),s=typeof n=="string"?n:ai,r=kn(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const a=Og("firestore");a&&Tv(r,...a)}return r}function Zo(n){if(n._terminated)throw new F(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Av(n),n._firestoreClient}function Av(n){var s,r,a;const e=n._freezeSettings(),t=(function(c,h,d,f){return new Yb(c,h,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Bm(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new wv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this._byteString=e}static fromBase64String(e){try{return new it(Oe.fromBase64String(e))}catch(t){throw new F(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new it(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:it._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cr(e,it._jsonSchema))return it.fromBase64String(e.bytes)}}it._jsonSchemaVersion="firestore/bytes/1.0",it._jsonSchema={type:Ne("string",it._jsonSchemaVersion),bytes:Ne("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Et._jsonSchemaVersion}}static fromJSON(e){if(cr(e,Et._jsonSchema))return new Et(e.latitude,e.longitude)}}Et._jsonSchemaVersion="firestore/geoPoint/1.0",Et._jsonSchema={type:Ne("string",Et._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
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
 */class It{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let a=0;a<s.length;++a)if(s[a]!==r[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:It._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(cr(e,It._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new It(e.vectorValues);throw new F(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}It._jsonSchemaVersion="firestore/vectorValue/1.0",It._jsonSchema={type:Ne("string",It._jsonSchemaVersion),vectorValues:Ne("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=/^__.*__$/;class $m{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Pn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Wm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{Ac:n})}}class el{constructor(e,t,s,r,a,l){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new el({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return fi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Wm(this.Ac)&&jv.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Sv{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||qi(e)}Cc(e,t,s,r=!1){return new el({Ac:e,methodName:t,Dc:s,path:Me.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hm(n){const e=n._freezeSettings(),t=qi(n._databaseId);return new Sv(n._databaseId,!!e.ignoreUndefinedProperties,t)}class Qi extends Ki{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qi}}class tl extends Ki{_toFieldTransform(e){return new vw(e.path,new tr)}isEqual(e){return e instanceof tl}}function kv(n,e,t,s){const r=n.Cc(1,e,t);Gm("Data must be an object, but it was:",r,s);const a=[],l=tt.empty();dn(s,((h,d)=>{const f=nl(e,h,t);d=Ee(d);const g=r.yc(f);if(d instanceof Qi)a.push(f);else{const _=mr(d,g);_!=null&&(a.push(f),l.set(f,_))}}));const c=new ut(a);return new $m(l,c,r.fieldTransforms)}function Cv(n,e,t,s,r,a){const l=n.Cc(1,e,t),c=[zu(e,s,t)],h=[r];if(a.length%2!=0)throw new F(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<a.length;_+=2)c.push(zu(e,a[_])),h.push(a[_+1]);const d=[],f=tt.empty();for(let _=c.length-1;_>=0;--_)if(!Vv(d,c[_])){const T=c[_];let k=h[_];k=Ee(k);const P=l.yc(T);if(k instanceof Qi)d.push(T);else{const R=mr(k,P);R!=null&&(d.push(T),f.set(T,R))}}const g=new ut(d);return new $m(f,g,l.fieldTransforms)}function Rv(n,e,t,s=!1){return mr(t,n.Cc(s?4:3,e))}function mr(n,e){if(zm(n=Ee(n)))return Gm("Unsupported field value:",e,n),Pv(n,e);if(n instanceof Ki)return(function(s,r){if(!Wm(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(r);a&&r.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const a=[];let l=0;for(const c of s){let h=mr(c,r.wc(l));h==null&&(h={nullValue:"NULL_VALUE"}),a.push(h),l++}return{arrayValue:{values:a}}})(n,e)}return(function(s,r){if((s=Ee(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return bw(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const a=ye.fromDate(s);return{timestampValue:ui(r.serializer,a)}}if(s instanceof ye){const a=new ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ui(r.serializer,a)}}if(s instanceof Et)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof it)return{bytesValue:lm(r.serializer,s._byteString)};if(s instanceof Ae){const a=r.databaseId,l=s.firestore._databaseId;if(!l.isEqual(a))throw r.Sc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Fo(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof It)return(function(l,c){return{mapValue:{fields:{[Md]:{stringValue:Ld},[oi]:{arrayValue:{values:l.toArray().map((d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return Mo(c.serializer,d)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${Ri(s)}`)})(n,e)}function Pv(n,e){const t={};return kd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):dn(n,((s,r)=>{const a=mr(r,e.mc(s));a!=null&&(t[s]=a)})),{mapValue:{fields:t}}}function zm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ye||n instanceof Et||n instanceof it||n instanceof Ae||n instanceof Ki||n instanceof It)}function Gm(n,e,t){if(!zm(t)||!jd(t)){const s=Ri(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function zu(n,e,t){if((e=Ee(e))instanceof Gi)return e._internalPath;if(typeof e=="string")return nl(n,e);throw fi("Field path arguments must be of type string or ",n,!1,void 0,t)}const Dv=new RegExp("[~\\*/\\[\\]]");function nl(n,e,t){if(e.search(Dv)>=0)throw fi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Gi(...e.split("."))._internalPath}catch{throw fi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function fi(n,e,t,s,r){const a=s&&!s.isEmpty(),l=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(a||l)&&(h+=" (found",a&&(h+=` in field ${s}`),l&&(h+=` in document ${r}`),h+=")"),new F(S.INVALID_ARGUMENT,c+n+h)}function Vv(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,t,s,r,a){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Mv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Mv extends Km{data(){return super.data()}}function Yi(n,e){return typeof e=="string"?nl(n,e):e instanceof Gi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sl{}class Qm extends sl{}function pi(n,e,...t){let s=[];e instanceof sl&&s.push(e),s=s.concat(t),(function(a){const l=a.filter((h=>h instanceof rl)).length,c=a.filter((h=>h instanceof Ji)).length;if(l>1||l>0&&c>0)throw new F(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class Ji extends Qm{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Ji(e,t,s)}_apply(e){const t=this._parse(e);return Ym(e._query,t),new Vn(e.firestore,e.converter,eo(e._query,t))}_parse(e){const t=Hm(e.firestore);return(function(a,l,c,h,d,f,g){let _;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ku(g,f);const k=[];for(const P of g)k.push(Gu(h,a,P));_={arrayValue:{values:k}}}else _=Gu(h,a,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ku(g,f),_=Rv(c,l,g,f==="in"||f==="not-in");return Te.create(d,f,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function gi(n,e,t){const s=e,r=Yi("where",n);return Ji._create(r,s,t)}class rl extends sl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new rl(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:mt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,a){let l=r;const c=a.getFlattenedFilters();for(const h of c)Ym(l,h),l=eo(l,h)})(e._query,t),new Vn(e.firestore,e.converter,eo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class il extends Qm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new il(e,t)}_apply(e){const t=(function(r,a,l){if(r.startAt!==null)throw new F(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new F(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new er(a,l)})(e._query,this._field,this._direction);return new Vn(e.firestore,e.converter,(function(r,a){const l=r.explicitOrderBy.concat([a]);return new hs(r.path,r.collectionGroup,l,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)})(e._query,t))}}function Ov(n,e="asc"){const t=e,s=Yi("orderBy",n);return il._create(s,t)}function Gu(n,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new F(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hd(e)&&t.indexOf("/")!==-1)throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(pe.fromString(t));if(!$.isDocumentKey(s))throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return cu(n,new $(s))}if(t instanceof Ae)return cu(n,t._key);throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ri(t)}.`)}function Ku(n,e){if(!Array.isArray(n)||n.length===0)throw new F(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ym(n,e){const t=(function(r,a){for(const l of r)for(const c of l.getFlattenedFilters())if(a.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new F(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Fv{convertValue(e,t="none"){switch(on(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(an(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return dn(e,((r,a)=>{s[r]=this.convertValue(a,t)})),s}convertVectorValue(e){var s,r,a;const t=(a=(r=(s=e.fields)==null?void 0:s[oi].arrayValue)==null?void 0:r.values)==null?void 0:a.map((l=>ve(l.doubleValue)));return new It(t)}convertGeoPoint(e){return new Et(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Vi(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Js(e));default:return null}}convertTimestamp(e){const t=rn(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=pe.fromString(e);ce(fm(s),9688,{name:e});const r=new Xs(s.get(1),s.get(3)),a=new $(s.popFirst(5));return r.isEqual(t)||Dt(`Document ${a} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}class Fs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vn extends Km{constructor(e,t,s,r,a,l){super(e,t,s,r,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Yi("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=vn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}vn._jsonSchemaVersion="firestore/documentSnapshot/1.0",vn._jsonSchema={type:Ne("string",vn._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class Wr extends vn{data(e={}){return super.data(e)}}class Kn{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Fs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Wr(this._firestore,this._userDataWriter,s.key,s,new Fs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,a){if(r._snapshot.oldDocs.isEmpty()){let l=0;return r._snapshot.docChanges.map((c=>{const h=new Wr(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Fs(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:l++}}))}{let l=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>a||c.type!==3)).map((c=>{const h=new Wr(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Fs(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,f=-1;return c.type!==0&&(d=l.indexOf(c.doc.key),l=l.delete(c.doc.key)),c.type!==1&&(l=l.add(c.doc),f=l.indexOf(c.doc.key)),{type:Uv(c.type),doc:h,oldIndex:d,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Kn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=So.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),s.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),r.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Uv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n){n=Tn(n,Ae);const e=Tn(n.firestore,zi);return Ev(Zo(e),n._key).then((t=>qv(e,n,t)))}Kn._jsonSchemaVersion="firestore/querySnapshot/1.0",Kn._jsonSchema={type:Ne("string",Kn._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class Jm extends Fv{constructor(e){super(),this.firestore=e}convertBytes(e){return new it(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,t)}}function yi(n){n=Tn(n,Vn);const e=Tn(n.firestore,zi),t=Zo(e),s=new Jm(e);return Lv(n._query),Iv(t,n._query).then((r=>new Kn(e,s,n,r)))}function Qu(n,e,t,...s){n=Tn(n,Ae);const r=Tn(n.firestore,zi),a=Hm(r);let l;return l=typeof(e=Ee(e))=="string"||e instanceof Gi?Cv(a,"updateDoc",n._key,e,t,s):kv(a,"updateDoc",n._key,e),Bv(r,[l.toMutation(n._key,Ct.exists(!0))])}function Bv(n,e){return(function(s,r){const a=new kt;return s.asyncQueue.enqueueAndForget((async()=>hv(await vv(s),r,a))),a.promise})(Zo(n),e)}function qv(n,e,t){const s=t.docs.get(e._key),r=new Jm(n);return new vn(n,r,e._key,s,new Fs(t.hasPendingWrites,t.fromCache),e.converter)}function Yu(){return new tl("serverTimestamp")}(function(e,t=!0){(function(r){ls=r})(is),Nt(new ht("firestore",((s,{instanceIdentifier:r,options:a})=>{const l=s.getProvider("app").getImmediate(),c=new zi(new Cb(s.getProvider("auth-internal")),new Db(l,s.getProvider("app-check-internal")),(function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new F(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xs(d.options.projectId,f)})(l,r),l);return a={useFetchStreams:t,...a},c._setSettings(a),c}),"PUBLIC").setMultipleInstances(!0)),at(Yc,Jc,e),at(Yc,Jc,"esm2020")})();const Xm="@firebase/installations",al="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=1e4,ef=`w:${al}`,tf="FIS_v2",$v="https://firebaseinstallations.googleapis.com/v1",Wv=3600*1e3,Hv="installations",zv="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},An=new Sn(Hv,zv,Gv);function nf(n){return n instanceof ft&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf({projectId:n}){return`${$v}/projects/${n}/installations`}function rf(n){return{token:n.token,requestStatus:2,expiresIn:Qv(n.expiresIn),creationTime:Date.now()}}async function af(n,e){const s=(await e.json()).error;return An.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function of({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Kv(n,{refreshToken:e}){const t=of(n);return t.append("Authorization",Yv(e)),t}async function lf(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Qv(n){return Number(n.replace("s","000"))}function Yv(n){return`${tf} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=sf(n),r=of(n),a=e.getImmediate({optional:!0});if(a){const d=await a.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const l={fid:t,authVersion:tf,appId:n.appId,sdkVersion:ef},c={method:"POST",headers:r,body:JSON.stringify(l)},h=await lf(()=>fetch(s,c));if(h.ok){const d=await h.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:rf(d.authToken)}}else throw await af("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=/^[cdef][\w-]{21}$/,ho="";function eE(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=tE(n);return Zv.test(t)?t:ho}catch{return ho}}function tE(n){return Xv(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=new Map;function hf(n,e){const t=Xi(n);df(t,e),nE(t,e)}function df(n,e){const t=uf.get(n);if(t)for(const s of t)s(e)}function nE(n,e){const t=sE();t&&t.postMessage({key:n,fid:e}),rE()}let _n=null;function sE(){return!_n&&"BroadcastChannel"in self&&(_n=new BroadcastChannel("[Firebase] FID Change"),_n.onmessage=n=>{df(n.data.key,n.data.fid)}),_n}function rE(){uf.size===0&&_n&&(_n.close(),_n=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="firebase-installations-database",aE=1,jn="firebase-installations-store";let ka=null;function ol(){return ka||(ka=Mh(iE,aE,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(jn)}}})),ka}async function xi(n,e){const t=Xi(n),r=(await ol()).transaction(jn,"readwrite"),a=r.objectStore(jn),l=await a.get(t);return await a.put(e,t),await r.done,(!l||l.fid!==e.fid)&&hf(n,e.fid),e}async function mf(n){const e=Xi(n),s=(await ol()).transaction(jn,"readwrite");await s.objectStore(jn).delete(e),await s.done}async function Zi(n,e){const t=Xi(n),r=(await ol()).transaction(jn,"readwrite"),a=r.objectStore(jn),l=await a.get(t),c=e(l);return c===void 0?await a.delete(t):await a.put(c,t),await r.done,c&&(!l||l.fid!==c.fid)&&hf(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(n){let e;const t=await Zi(n.appConfig,s=>{const r=oE(s),a=lE(n,r);return e=a.registrationPromise,a.installationEntry});return t.fid===ho?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function oE(n){const e=n||{fid:eE(),registrationStatus:0};return ff(e)}function lE(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(An.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=cE(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:uE(n)}:{installationEntry:e}}async function cE(n,e){try{const t=await Jv(n,e);return xi(n.appConfig,t)}catch(t){throw nf(t)&&t.customData.serverCode===409?await mf(n.appConfig):await xi(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function uE(n){let e=await Ju(n.appConfig);for(;e.registrationStatus===1;)await cf(100),e=await Ju(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await ll(n);return s||t}return e}function Ju(n){return Zi(n,e=>{if(!e)throw An.create("installation-not-found");return ff(e)})}function ff(n){return hE(n)?{fid:n.fid,registrationStatus:0}:n}function hE(n){return n.registrationStatus===1&&n.registrationTime+Zm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dE({appConfig:n,heartbeatServiceProvider:e},t){const s=mE(n,t),r=Kv(n,t),a=e.getImmediate({optional:!0});if(a){const d=await a.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const l={installation:{sdkVersion:ef,appId:n.appId}},c={method:"POST",headers:r,body:JSON.stringify(l)},h=await lf(()=>fetch(s,c));if(h.ok){const d=await h.json();return rf(d)}else throw await af("Generate Auth Token",h)}function mE(n,{fid:e}){return`${sf(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(n,e=!1){let t;const s=await Zi(n.appConfig,a=>{if(!pf(a))throw An.create("not-registered");const l=a.authToken;if(!e&&gE(l))return a;if(l.requestStatus===1)return t=fE(n,e),a;{if(!navigator.onLine)throw An.create("app-offline");const c=xE(a);return t=pE(n,c),c}});return t?await t:s.authToken}async function fE(n,e){let t=await Xu(n.appConfig);for(;t.authToken.requestStatus===1;)await cf(100),t=await Xu(n.appConfig);const s=t.authToken;return s.requestStatus===0?cl(n,e):s}function Xu(n){return Zi(n,e=>{if(!pf(e))throw An.create("not-registered");const t=e.authToken;return bE(t)?{...e,authToken:{requestStatus:0}}:e})}async function pE(n,e){try{const t=await dE(n,e),s={...e,authToken:t};return await xi(n.appConfig,s),t}catch(t){if(nf(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await mf(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await xi(n.appConfig,s)}throw t}}function pf(n){return n!==void 0&&n.registrationStatus===2}function gE(n){return n.requestStatus===2&&!yE(n)}function yE(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Wv}function xE(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function bE(n){return n.requestStatus===1&&n.requestTime+Zm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(n){const e=n,{installationEntry:t,registrationPromise:s}=await ll(e);return s?s.catch(console.error):cl(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _E(n,e=!1){const t=n;return await vE(t),(await cl(t,e)).token}async function vE(n){const{registrationPromise:e}=await ll(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(n){if(!n||!n.options)throw Ca("App Configuration");if(!n.name)throw Ca("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ca(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ca(n){return An.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="installations",IE="installations-internal",TE=n=>{const e=n.getProvider("app").getImmediate(),t=EE(e),s=kn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},NE=n=>{const e=n.getProvider("app").getImmediate(),t=kn(e,gf).getImmediate();return{getId:()=>wE(t),getToken:r=>_E(t,r)}};function AE(){Nt(new ht(gf,TE,"PUBLIC")),Nt(new ht(IE,NE,"PRIVATE"))}AE();at(Xm,al);at(Xm,al,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="analytics",jE="firebase_id",SE="origin",kE=60*1e3,CE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ul="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new Ni("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},nt=new Sn("analytics","Analytics",RE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(n){if(!n.startsWith(ul)){const e=nt.create("invalid-gtag-resource",{gtagURL:n});return Je.warn(e.message),""}return n}function yf(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function DE(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function VE(n,e){const t=DE("firebase-js-sdk-policy",{createScriptURL:PE}),s=document.createElement("script"),r=`${ul}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function ME(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function LE(n,e,t,s,r,a){const l=s[r];try{if(l)await e[l];else{const h=(await yf(t)).find(d=>d.measurementId===r);h&&await e[h.appId]}}catch(c){Je.error(c)}n("config",r,a)}async function OE(n,e,t,s,r){try{let a=[];if(r&&r.send_to){let l=r.send_to;Array.isArray(l)||(l=[l]);const c=await yf(t);for(const h of l){const d=c.find(g=>g.measurementId===h),f=d&&e[d.appId];if(f)a.push(f);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),n("event",s,r||{})}catch(a){Je.error(a)}}function FE(n,e,t,s){async function r(a,...l){try{if(a==="event"){const[c,h]=l;await OE(n,e,t,c,h)}else if(a==="config"){const[c,h]=l;await LE(n,e,t,s,c,h)}else if(a==="consent"){const[c,h]=l;n("consent",c,h)}else if(a==="get"){const[c,h,d]=l;n("get",c,h,d)}else if(a==="set"){const[c]=l;n("set",c)}else n(a,...l)}catch(c){Je.error(c)}}return r}function UE(n,e,t,s,r){let a=function(...l){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(a=window[r]),window[r]=FE(a,n,e,t),{gtagCore:a,wrappedGtag:window[r]}}function BE(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ul)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=30,$E=1e3;class WE{constructor(e={},t=$E){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const xf=new WE;function HE(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function zE(n){var l;const{appId:e,apiKey:t}=n,s={method:"GET",headers:HE(t)},r=CE.replace("{app-id}",e),a=await fetch(r,s);if(a.status!==200&&a.status!==304){let c="";try{const h=await a.json();(l=h.error)!=null&&l.message&&(c=h.error.message)}catch{}throw nt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function GE(n,e=xf,t){const{appId:s,apiKey:r,measurementId:a}=n.options;if(!s)throw nt.create("no-app-id");if(!r){if(a)return{measurementId:a,appId:s};throw nt.create("no-api-key")}const l=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new YE;return setTimeout(async()=>{c.abort()},kE),bf({appId:s,apiKey:r,measurementId:a},l,c,e)}async function bf(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=xf){var c;const{appId:a,measurementId:l}=n;try{await KE(s,e)}catch(h){if(l)return Je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw h}try{const h=await zE(n);return r.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!QE(d)){if(r.deleteThrottleMetadata(a),l)return Je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:l};throw h}const f=Number((c=d==null?void 0:d.customData)==null?void 0:c.httpStatus)===503?wc(t,r.intervalMillis,qE):wc(t,r.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return r.setThrottleMetadata(a,g),Je.debug(`Calling attemptFetch again in ${f} millis`),bf(n,g,s,r)}}function KE(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),a=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(a),s(nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function QE(n){if(!(n instanceof ft)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class YE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function JE(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const a=await e,l={...s,send_to:a};n("event",t,l)}}async function XE(n,e,t,s){if(s&&s.global){const r={};for(const a of Object.keys(t))r[`user_properties.${a}`]=t[a];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(){if(Rh())try{await Ph()}catch(n){return Je.warn(nt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Je.warn(nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function eI(n,e,t,s,r,a,l){const c=GE(n);c.then(_=>{t[_.measurementId]=_.appId,n.options.measurementId&&_.measurementId!==n.options.measurementId&&Je.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Je.error(_)),e.push(c);const h=ZE().then(_=>{if(_)return s.getId()}),[d,f]=await Promise.all([c,h]);BE(a)||VE(a,d.measurementId),r("js",new Date);const g=(l==null?void 0:l.config)??{};return g[SE]="firebase",g.update=!0,f!=null&&(g[jE]=f),r("config",d.measurementId,g),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.app=e}_delete(){return delete Qn[this.app.options.appId],Promise.resolve()}}let Qn={},Zu=[];const eh={};let Ra="dataLayer",nI="gtag",th,hl,nh=!1;function sI(){const n=[];if(Ch()&&n.push("This is a browser extension environment."),Qg()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=nt.create("invalid-analytics-context",{errorInfo:e});Je.warn(t.message)}}function rI(n,e,t){sI();const s=n.options.appId;if(!s)throw nt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw nt.create("no-api-key");if(Qn[s]!=null)throw nt.create("already-exists",{id:s});if(!nh){ME(Ra);const{wrappedGtag:a,gtagCore:l}=UE(Qn,Zu,eh,Ra,nI);hl=a,th=l,nh=!0}return Qn[s]=eI(n,Zu,eh,e,th,Ra,t),new tI(n)}function iI(n=bo()){n=Ee(n);const e=kn(n,bi);return e.isInitialized()?e.getImmediate():aI(n)}function aI(n,e={}){const t=kn(n,bi);if(t.isInitialized()){const r=t.getImmediate();if(nn(e,t.getOptions()))return r;throw nt.create("already-initialized")}return t.initialize({options:e})}function oI(n,e,t){n=Ee(n),XE(hl,Qn[n.app.options.appId],e,t).catch(s=>Je.error(s))}function lI(n,e,t,s){n=Ee(n),JE(hl,Qn[n.app.options.appId],e,t,s).catch(r=>Je.error(r))}const sh="@firebase/analytics",rh="0.10.19";function cI(){Nt(new ht(bi,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return rI(s,r,t)},"PUBLIC")),Nt(new ht("analytics-internal",n,"PRIVATE")),at(sh,rh),at(sh,rh,"esm2020");function n(e){try{const t=e.getProvider(bi).getImmediate();return{logEvent:(s,r,a)=>lI(t,s,r,a),setUserProperties:(s,r)=>oI(t,s,r)}}catch(t){throw nt.create("interop-component-reg-failed",{reason:t})}}}cI();const mo={apiKey:"AIzaSyBkMktbTfBNIdhtBwCC_cRBEavKeuTyCGA",authDomain:"myschola-5ec1f.firebaseapp.com",projectId:"myschola-5ec1f",storageBucket:"myschola-5ec1f.appspot.com",messagingSenderId:"927860875256",appId:"1:927860875256:web:ce73f8eabd09cac6f3400d",measurementId:"G-XTC703H7RN"};if(!mo.apiKey||!mo.projectId)throw console.error("Firebase configuration is missing. Please check your .env file."),new Error("Firebase configuration error");const dl=Lh(mo),ot=Ab(dl),xe=Nv(dl);iI(dl);function uI(){const[n,e]=j.useState(""),[t,s]=j.useState(!1),[r,a]=j.useState(!0),l=Mt(),c=un(),h=async f=>{var k,P;if((await Le(Pe(xe,"admins",f))).exists())return l("/admin",{replace:!0}),!0;if((await Le(Pe(xe,"teachers",f))).exists())return l("/admin",{replace:!0}),!0;if((await Le(Pe(xe,"students",f))).exists()){const R=((P=(k=c.state)==null?void 0:k.from)==null?void 0:P.pathname)||"/app/dashboard";return l(R,{replace:!0}),!0}return!1};j.useEffect(()=>{(async()=>{try{await ot.signOut()}catch(g){console.error("Error signing out existing session:",g)}finally{a(!1)}})()},[]);const d=async f=>{f.preventDefault(),e(""),s(!0);const g=new FormData(f.currentTarget),_=g.get("email"),T=g.get("password");try{console.log("Attempting to sign in with email:",_);const P=(await m0(ot,_,T)).user;console.log("Sign in successful. User UID:",P.uid),await h(P.uid)||(console.error("No role document found for UID:",P.uid),await ot.signOut(),e("Profile not found. Please contact your administrator."))}catch(k){console.error(k),k.code==="auth/invalid-email"?e("Please enter a valid email address."):k.code==="auth/user-not-found"?e("No account found with this email. Please contact your teacher to create an account."):k.code==="auth/wrong-password"?e("Incorrect password. Please try again."):k.code==="auth/invalid-credential"?e("Invalid email or password. Please try again."):e(k.message||"Failed to sign in. Please try again.")}finally{s(!1)}};return r?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),i.jsx("p",{className:"mt-4 text-gray-600",children:"Checking authentication..."})]})}):i.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[i.jsx("div",{className:"flex justify-center",children:i.jsxs(he,{to:"/",className:"flex items-center",children:[i.jsx(Tt,{className:"h-12 w-12 text-blue-600"}),i.jsx("span",{className:"ml-2 text-3xl font-bold text-gray-900",children:"MySchola"})]})}),i.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"}),i.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Students: Use the email and password provided by your teacher"})]}),i.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:i.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[i.jsxs("form",{className:"space-y-6",onSubmit:d,children:[n&&i.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative",role:"alert",children:i.jsx("span",{className:"block sm:inline",children:n})}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),i.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[i.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:i.jsx(xh,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),i.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"you@example.com"})]})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),i.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[i.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:i.jsx(po,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),i.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"********"})]})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center",children:[i.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),i.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),i.jsx("div",{className:"text-sm",children:i.jsx("a",{href:"#",className:"font-medium text-blue-600 hover:text-blue-500",children:"Forgot your password?"})})]}),i.jsx("div",{children:i.jsx("button",{type:"submit",disabled:t,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed",children:t?"Please wait...":"Sign in"})})]}),i.jsx("div",{className:"mt-6",children:i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"absolute inset-0 flex items-center",children:i.jsx("div",{className:"w-full border-t border-gray-300"})}),i.jsx("div",{className:"relative flex justify-center text-sm",children:i.jsx("span",{className:"px-2 bg-white text-gray-500",children:i.jsxs(he,{to:"/",className:"flex items-center hover:text-gray-900 transition",children:[i.jsx(He,{className:"h-4 w-4 mr-1"}),"Back to Home"]})})})]})})]})})]})}function Pa({children:n}){const[e,t]=j.useState(!0),[s,r]=j.useState(!1),[a,l]=j.useState(!1),c=un();return j.useEffect(()=>{const h=Si(ot,async d=>{if(d)try{(await Le(Pe(xe,"students",d.uid))).exists()?(r(!0),l(!0)):(r(!1),l(!1))}catch(f){console.error("Error checking student status:",f),r(!1),l(!1)}else r(!1),l(!1);t(!1)});return()=>h()},[]),e?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),i.jsx("p",{className:"mt-4 text-gray-600",children:"Loading..."})]})}):!s||!a?i.jsx(Xf,{to:"/login",state:{from:c},replace:!0}):n}const hI=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?Ep:e.includes("english")||e.includes("literature")||e.includes("language")?wp:e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?Bp:e.includes("geography")||e.includes("geography")?$p:e.includes("history")?zp:e.includes("music")?rg:e.includes("art")||e.includes("design")?ag:e.includes("language")||e.includes("french")||e.includes("spanish")||e.includes("german")?Kp:e.includes("computer")||e.includes("ict")||e.includes("it")?fp:Tt},dI=n=>{const e=(n==null?void 0:n.toLowerCase())||"";return e.includes("math")||e.includes("maths")?"bg-blue-50 border-blue-200 text-blue-700":e.includes("english")||e.includes("literature")||e.includes("language")?"bg-purple-50 border-purple-200 text-purple-700":e.includes("science")||e.includes("physics")||e.includes("chemistry")||e.includes("biology")?"bg-green-50 border-green-200 text-green-700":e.includes("geography")?"bg-cyan-50 border-cyan-200 text-cyan-700":e.includes("history")?"bg-amber-50 border-amber-200 text-amber-700":e.includes("music")?"bg-pink-50 border-pink-200 text-pink-700":e.includes("art")||e.includes("design")?"bg-rose-50 border-rose-200 text-rose-700":"bg-gray-50 border-gray-200 text-gray-700"},wf="subjectAccess",mI=()=>{try{const n=localStorage.getItem(wf),e=n?JSON.parse(n):[];return Array.isArray(e)?e:[]}catch{return[]}},fI=n=>{localStorage.setItem(wf,JSON.stringify(n))},ih=n=>(n==null?void 0:n.pin)||(n==null?void 0:n.accessPin)||"";function pI(){const n=Mt(),[e,t]=j.useState(null),[s,r]=j.useState([]),[a,l]=j.useState(!0),[c,h]=j.useState(""),[d,f]=j.useState(null),[g,_]=j.useState(mI()),[T,k]=j.useState(null),[P,R]=j.useState(""),[M,D]=j.useState("");j.useEffect(()=>{(async()=>{try{const y=ot.currentUser;if(!y){n("/login");return}const w=await Le(Pe(xe,"students",y.uid));if(!w.exists()){h("Student profile not found"),l(!1);return}const v=w.data();if(t(v),console.log("Student data:",v),console.log("Student subjects array:",v.subjects),v.subjects&&v.subjects.length>0){const b=(await Promise.all(v.subjects.map(async W=>{try{const Z=await Le(Pe(xe,"subjects",W));return Z.exists()?{id:Z.id,...Z.data()}:(console.warn(`Subject document not found for ID: ${W}`),null)}catch(Z){return console.error(`Error fetching subject ${W}:`,Z),null}}))).filter(W=>W!==null);console.log("Loaded subjects:",b),console.log("Expected subjects:",v.subjects),console.log("Missing subjects:",v.subjects.filter(W=>!b.some(Z=>Z.id===W))),r(b),b.length!==v.subjects.length&&f({expected:v.subjects.length,loaded:b.length,missing:v.subjects.filter(W=>!b.some(Z=>Z.id===W))})}else console.log("No subjects array found in student data");l(!1)}catch(y){console.error("Error loading student data:",y),h("Failed to load dashboard data"),l(!1)}})()},[n]);const B=x=>!String(ih(x)||"").trim()||g.includes(x.id),Y=x=>{k(x),R(""),D("")},oe=x=>{const y=String(ih(x)||"").trim();if(y&&P.trim()!==y){D("Incorrect PIN");return}const w=Array.from(new Set([...g,x.id]));_(w),fI(w),k(null),R(""),D("")},te=()=>{k(null),R(""),D("")},E=async()=>{try{await g0(ot),n("/login",{replace:!0})}catch(x){console.error("Error signing out:",x)}};return a?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",role:"status","aria-live":"polite",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto","aria-hidden":"true"}),i.jsx("p",{className:"mt-4 text-gray-600","aria-label":"Loading dashboard",children:"Loading your dashboard..."})]})}):c?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-red-600 mb-4",children:c}),i.jsx("button",{onClick:E,className:"text-blue-600 hover:text-blue-700 underline",children:"Sign out and try again"})]})}):i.jsxs("div",{className:"min-h-screen bg-gray-50",children:[i.jsx("header",{className:"bg-white shadow-sm",role:"banner",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Hr,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"MySchola Student Dashboard"}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Hi, ",i.jsx("span",{className:"font-medium",children:(e==null?void 0:e.name)||"Student"})]})]})]}),i.jsxs("nav",{className:"flex items-center gap-3","aria-label":"Dashboard navigation",children:[i.jsx(he,{to:"/",className:"text-sm text-gray-600 hover:text-gray-900 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition","aria-label":"Return to homepage",children:"Back to site"}),i.jsxs("button",{onClick:E,className:"inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition","aria-label":"Sign out of your account",children:[i.jsx(Jp,{className:"h-4 w-4","aria-hidden":"true"}),"Sign out"]})]})]})}),i.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"mb-8",children:[i.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Your Subjects"}),i.jsx("p",{className:"text-gray-600",children:"Select a subject to join Zoom sessions, watch recordings, or download homework."})]}),d&&i.jsxs("div",{className:"mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4",role:"alert","aria-live":"polite",children:[i.jsx("p",{className:"text-sm text-yellow-800 font-medium mb-1",children:"Some subjects may not be loading correctly"}),i.jsxs("p",{className:"text-xs text-yellow-700",children:["Expected ",d.expected," subject(s), loaded ",d.loaded,". Please check the browser console for details."]})]}),s.length===0?i.jsxs("div",{className:"bg-white rounded-lg shadow p-8 text-center",role:"region","aria-labelledby":"no-subjects-heading",children:[i.jsx(Hr,{className:"h-12 w-12 text-gray-400 mx-auto mb-4","aria-hidden":"true"}),i.jsx("h3",{id:"no-subjects-heading",className:"text-lg font-semibold text-gray-900 mb-2",children:"No Subjects Enrolled"}),i.jsx("p",{className:"text-gray-600 mb-2",children:"You're not enrolled in any subjects yet."}),i.jsx("p",{className:"text-sm text-gray-500",children:"Please contact your teacher to get enrolled."})]}):i.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",role:"list","aria-label":"Enrolled subjects",children:s.map(x=>{const y=hI(x.name),w=dI(x.name);return i.jsxs("article",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",role:"listitem",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{className:`p-2 rounded-lg ${w}`,children:i.jsx(y,{className:"h-6 w-6","aria-hidden":"true"})}),i.jsx("h3",{className:"text-xl font-semibold text-gray-900 flex-1",children:x.name})]}),i.jsx("div",{className:"space-y-3",children:B(x)?i.jsxs(i.Fragment,{children:[x.zoomLink&&i.jsxs("a",{href:x.zoomLink,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`Join Zoom session for ${x.name}`,children:[i.jsx(Op,{className:"h-4 w-4","aria-hidden":"true"}),"Join Zoom"]}),i.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[i.jsxs(he,{to:`/app/subject/${x.id}/recordings`,className:"flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition font-medium","aria-label":`View recordings for ${x.name}`,children:[i.jsx(Yn,{className:"h-4 w-4","aria-hidden":"true"}),"Recordings"]}),i.jsxs(he,{to:`/app/subject/${x.id}/homework`,className:"flex items-center justify-center gap-2 text-green-600 hover:text-green-700 px-4 py-2 border border-green-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition font-medium","aria-label":`View homework for ${x.name}`,children:[i.jsx(zs,{className:"h-4 w-4","aria-hidden":"true"}),"Homework"]})]})]}):i.jsxs("div",{className:"space-y-3",children:[i.jsx("p",{className:"text-sm text-gray-600",children:"This subject is locked. Enter the PIN to unlock."}),T===x.id?i.jsxs("div",{className:"space-y-2",children:[i.jsx("input",{type:"password",value:P,onChange:v=>R(v.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Subject PIN"}),M&&i.jsx("p",{className:"text-sm text-red-600",children:M}),i.jsxs("div",{className:"flex flex-wrap gap-2",children:[i.jsx("button",{type:"button",onClick:()=>oe(x),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Unlock"}),i.jsx("button",{type:"button",onClick:te,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Cancel"})]})]}):i.jsx("button",{type:"button",onClick:()=>Y(x.id),className:"w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Enter PIN"})]})})]},x.id)})})]})]})}const _f="subjectAccess",gI=()=>{try{const n=localStorage.getItem(_f),e=n?JSON.parse(n):[];return Array.isArray(e)?e:[]}catch{return[]}},yI=n=>{localStorage.setItem(_f,JSON.stringify(n))},xI=n=>(n==null?void 0:n.pin)||(n==null?void 0:n.accessPin)||"";function bI(){const{subjectId:n}=gh(),e=Mt(),[t,s]=j.useState([]),[r,a]=j.useState([]),[l,c]=j.useState(null),[h,d]=j.useState(!0),[f,g]=j.useState(""),[_,T]=j.useState(!1),[k,P]=j.useState(""),[R,M]=j.useState(""),[D,B]=j.useState(""),[Y,oe]=j.useState(gI()),[te,E]=j.useState(0);j.useEffect(()=>{const I=async()=>{try{if(!ot.currentUser){e("/login");return}const W=Pe(xe,"subjects",n),Z=await Le(W);if(Z.exists()){const K={id:n,...Z.data()};c(K);const me=xI(K);if(B(me),!(!me||Y.includes(n))){T(!0),d(!1);return}}let V;try{V=pi(rr(xe,"recordings"),gi("subjectId","==",n),Ov("date","desc"))}catch(K){console.warn("OrderBy failed, using simple query:",K),V=pi(rr(xe,"recordings"),gi("subjectId","==",n))}const O=(await yi(V)).docs.map(K=>({id:K.id,...K.data()})).filter(K=>K.approvalStatus==="approved"||!K.approvalStatus).sort((K,me)=>{var Ze,st;const De=(Ze=K.date)!=null&&Ze.toDate?K.date.toDate():K.date?new Date(K.date):new Date(0);return((st=me.date)!=null&&st.toDate?me.date.toDate():me.date?new Date(me.date):new Date(0))-De});s(O),a(O),T(!1),d(!1)}catch(b){console.error("Error loading recordings:",b),g("Failed to load recordings"),d(!1)}};n&&(d(!0),g(""),I())},[n,e,Y,te]);const x=I=>{I.preventDefault();const b=String(D||"").trim();if(!b){T(!1);return}if(k.trim()!==b){M("Incorrect PIN");return}const W=Array.from(new Set([...Y,n]));oe(W),yI(W),P(""),M(""),T(!1),E(Z=>Z+1)},y=()=>{var b;return l?(((b=l.name)==null?void 0:b.toLowerCase())||"").includes("english"):!1},w=()=>{const I={};return r.forEach(b=>{const W=b.examBoard||"Other",Z=b.tier||(y()?"General":"Other"),V=`${W}_${Z}`;I[V]||(I[V]={examBoard:W,tier:Z,recordings:[]}),I[V].recordings.push(b)}),Object.values(I).sort((b,W)=>b.examBoard!==W.examBoard?b.examBoard==="AQA"?-1:W.examBoard==="AQA"?1:b.examBoard==="Edexcel"?-1:W.examBoard==="Edexcel"?1:b.examBoard.localeCompare(W.examBoard):b.tier==="Foundation"?-1:W.tier==="Foundation"?1:b.tier==="Higher"?-1:W.tier==="Higher"?1:b.tier.localeCompare(W.tier))},v=I=>I?(I.toDate?I.toDate():new Date(I)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"Date not available";return h?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),i.jsx("p",{className:"mt-4 text-gray-600",children:"Loading recordings..."})]})}):_?i.jsx("div",{className:"min-h-screen bg-gray-50",children:i.jsxs("div",{className:"max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs(he,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[i.jsx(He,{className:"h-4 w-4"}),"Back to Dashboard"]}),i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[i.jsx("h1",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Enter Subject PIN"}),i.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"This subject is locked. Enter the PIN to access recordings."}),i.jsxs("form",{onSubmit:x,className:"space-y-4",children:[i.jsx("input",{type:"password",value:k,onChange:I=>P(I.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Subject PIN",autoFocus:!0}),R&&i.jsx("div",{className:"text-sm text-red-600",children:R}),i.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"Unlock Subject"})]})]})]})}):i.jsx("div",{className:"min-h-screen bg-gray-50",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs(he,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[i.jsx(He,{className:"h-4 w-4"}),"Back to Dashboard"]}),i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[i.jsx(Yn,{className:"h-6 w-6 text-blue-600"}),i.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Recordings - ",(l==null?void 0:l.name)||"Subject"]})]}),i.jsx("p",{className:"text-gray-600",children:"Watch past lesson recordings for this subject."})]}),f&&i.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6",children:f}),r.length===0?i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[i.jsx(Yn,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),i.jsx("p",{className:"text-gray-600",children:"No recordings available yet."}),i.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Check back later for new recordings."})]}):i.jsx("div",{className:"space-y-6",children:w().map((I,b)=>i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",children:[i.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 px-6 py-4",children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Hr,{className:"h-5 w-5 text-blue-600"}),i.jsxs("div",{children:[i.jsxs("h3",{className:"text-lg font-semibold text-gray-900",children:[I.examBoard,!y()&&I.tier&&i.jsxs("span",{className:"ml-2 text-base font-normal text-gray-600",children:["- ",I.tier]})]}),i.jsxs("p",{className:"text-sm text-gray-600",children:[I.recordings.length," recording",I.recordings.length!==1?"s":""]})]})]})}),i.jsx("div",{className:"p-6 space-y-4",children:I.recordings.map(W=>i.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsxs("div",{className:"flex-1",children:[i.jsx("h4",{className:"text-base font-semibold text-gray-900 mb-2",children:W.title}),i.jsx("p",{className:"text-sm text-gray-500",children:v(W.date)})]}),i.jsxs("a",{href:W.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"ml-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap",children:[i.jsx(ug,{className:"h-4 w-4"}),"Watch"]})]})},W.id))})]},b))})]})})}function wI(){const{subjectId:n}=gh(),[e,t]=j.useState([]),[s,r]=j.useState(null),[a,l]=j.useState(!0),[c,h]=j.useState(null);j.useEffect(()=>{n&&(async()=>{try{const _=Pe(xe,"subjects",n),T=await Le(_);T.exists()&&r({id:n,...T.data()});const k=pi(rr(xe,"homeworks"),gi("subjectId","==",n)),R=(await yi(k)).docs.map(M=>({id:M.id,...M.data()}));t(R),l(!1)}catch(_){console.error("Error loading homework:",_),l(!1)}})()},[n]);const d=g=>g?(g.toDate?g.toDate():new Date(g)).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}):"No due date",f=g=>g?(g.toDate?g.toDate():new Date(g))<new Date:!1;return a?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),i.jsx("p",{className:"mt-4 text-gray-600",children:"Loading homework..."})]})}):i.jsx("div",{className:"min-h-screen bg-gray-50",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs(he,{to:"/app/dashboard",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6",children:[i.jsx(He,{className:"h-4 w-4"}),"Back to Dashboard"]}),i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[i.jsx(zs,{className:"h-6 w-6 text-green-600"}),i.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Homework - ",(s==null?void 0:s.name)||"Subject"]})]}),i.jsx("p",{className:"text-gray-600",children:"Download your homework assignments."})]}),c?i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[i.jsxs("div",{className:"flex items-center justify-between mb-6",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:c.title}),i.jsx("button",{onClick:()=>{h(null)},className:"text-gray-600 hover:text-gray-900",children:"Close"})]}),c.description&&i.jsx("p",{className:"text-gray-600 mb-6",children:c.description}),i.jsxs("p",{className:"text-sm text-gray-500 mb-6",children:["Due: ",d(c.dueDate)]}),c.attachmentUrl&&i.jsxs("a",{href:c.attachmentUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6",children:[i.jsx(dc,{className:"h-5 w-5"}),"Download ",c.attachmentName||"homework file"]}),!c.attachmentUrl&&i.jsx("p",{className:"text-gray-600",children:"No homework file attached."})]}):i.jsx("div",{className:"space-y-4",children:e.length===0?i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center",children:[i.jsx(zs,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),i.jsx("p",{className:"text-gray-600",children:"No homework assignments available yet."})]}):e.map(g=>{const _=f(g.dueDate);return i.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:i.jsxs("div",{className:"flex items-start justify-between mb-4",children:[i.jsxs("div",{className:"flex-1",children:[i.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:g.title}),g.description&&i.jsx("p",{className:"text-gray-600 mb-2",children:g.description}),g.attachmentUrl&&i.jsxs("a",{href:g.attachmentUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-2",children:[i.jsx(dc,{className:"h-4 w-4"}),"Download ",g.attachmentName||"homework file"]}),i.jsx("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:i.jsxs("div",{className:"flex items-center gap-1",children:[i.jsx(fo,{className:"h-4 w-4"}),"Due: ",d(g.dueDate)]})}),_&&i.jsx("div",{className:"mt-3 text-red-600 text-sm font-medium",children:"Overdue"})]}),i.jsx("button",{onClick:()=>h(g),className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:"View Details"})]})},g.id)})})]})})}const _I="myschola-5ec1f",vI=`https://us-central1-${_I}.cloudfunctions.net`,ah=vI,EI=async()=>{const n=ot.currentUser;if(!n)throw new Error("User is not authenticated");return n.getIdToken()},ml=async(n,e)=>{if(!ah)throw new Error("Functions base URL is not configured");const t=await EI(),s=await fetch(`${ah}/${n}`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(e||{})});if(!s.ok){const r=await s.text();throw new Error(r||`Request failed (${s.status})`)}return s.json()},oh=n=>ml("createHidriveUpload",n),II=n=>ml("createRecording",n),TI=n=>ml("createHomework",n);function NI(){const n=Mt(),[e,t]=j.useState(!1),[s,r]=j.useState(!0),[a,l]=j.useState([]),[c,h]=j.useState(""),[d,f]=j.useState(null),[g,_]=j.useState("recording"),[T,k]=j.useState(""),[P,R]=j.useState(null),[M,D]=j.useState(0),[B,Y]=j.useState(""),[oe,te]=j.useState(""),[E,x]=j.useState([]),[y,w]=j.useState(""),[v,I]=j.useState(""),[b,W]=j.useState(""),[Z,V]=j.useState(null),[ie,O]=j.useState(0),[K,me]=j.useState(!1),[De,_e]=j.useState("");j.useEffect(()=>{const q=Si(ot,async G=>{if(!G){t(!1),r(!1),n("/login",{replace:!0});return}try{const le=await Le(Pe(xe,"admins",G.uid)),ue=le.exists()?null:await Le(Pe(xe,"teachers",G.uid));le.exists()||ue!=null&&ue.exists()?t(!0):(t(!1),n("/login",{replace:!0}))}catch(le){console.error("Error verifying role:",le),t(!1),n("/login",{replace:!0})}finally{r(!1)}});return()=>q()},[n]),j.useEffect(()=>{e&&(async()=>{try{const le=(await yi(rr(xe,"subjects"))).docs.map(ue=>({id:ue.id,...ue.data()}));if(l(le),le.length>0){const ue=le[0];h(ue.id),f(ue)}}catch(G){console.error("Error loading subjects:",G)}})()},[e]),j.useEffect(()=>{(async()=>{if(g==="approve"&&e)try{const G=pi(rr(xe,"recordings"),gi("approvalStatus","==","pending")),le=await yi(G),ue=await Promise.all(le.docs.map(async Fe=>{const fe=Fe.data();let ke="Unknown";if(fe.subjectId)try{const Ue=await Le(Fe(xe,"subjects",fe.subjectId));Ue.exists()&&(ke=Ue.data().name)}catch(Ue){console.error("Error fetching subject:",Ue)}return{id:Fe.id,...fe,subjectName:ke}}));x(ue)}catch(G){console.error("Error loading pending recordings:",G)}})()},[g,e]),j.useEffect(()=>{const q=a.find(G=>G.id===c);f(q||null),Y(""),te("")},[c,a]);const Ze=()=>{var G;return d?(((G=d.name)==null?void 0:G.toLowerCase())||"").includes("english"):!1},st=(q,G,le)=>new Promise((ue,Fe)=>{if(!(G!=null&&G.uploadUrl)){Fe(new Error("Upload URL is missing"));return}const fe=new XMLHttpRequest;fe.open(G.method||"PUT",G.uploadUrl,!0),fe.responseType="json",G.headers&&Object.entries(G.headers).forEach(([ke,Ue])=>{Ue&&fe.setRequestHeader(ke,Ue)}),fe.upload.onprogress=ke=>{if(ke.lengthComputable){const Ue=Math.round(ke.loaded/ke.total*100);le&&le(Ue)}},fe.onload=()=>{if(fe.status>=200&&fe.status<300){le&&le(100);let ke=fe.response;if(!ke&&fe.responseText)try{ke=JSON.parse(fe.responseText)}catch{ke=null}ue({response:ke})}else Fe(new Error(`Upload failed (${fe.status})`))},fe.onerror=()=>{Fe(new Error("Upload failed"))},fe.send(q)}),ms=async q=>{if(q.preventDefault(),!c||!T||!B){_e("Please fill in all required fields");return}if(!P){_e("Please upload a video file to continue");return}if(!Ze()&&!oe){_e("Please select a tier (Foundation or Higher)");return}me(!0),_e("");try{D(0);const G=await oh({subjectId:c,fileName:P.name,contentType:P.type,uploadType:"recording"}),le=await st(P,G,D),ue=le==null?void 0:le.response,Fe=(ue==null?void 0:ue.id)||(ue==null?void 0:ue.pid)||(ue==null?void 0:ue.file_id)||null,fe={subjectId:c,title:T,examBoard:B,tier:Ze()?null:oe,hidrivePath:G.hidrivePath,hidriveFileId:Fe,fileName:P.name};sessionStorage.setItem("pendingRecording",JSON.stringify(fe)),k(""),R(null),D(0),Y(""),te(""),n("/admin/share-link",{state:{pendingRecording:fe}})}catch(G){console.error("Error adding recording:",G),_e("Failed to upload recording"),D(0)}finally{me(!1)}},fs=async q=>{try{await Qu(Pe(xe,"recordings",q),{approvalStatus:"approved",approvedAt:Yu()}),x(E.filter(G=>G.id!==q)),_e("Recording approved successfully!"),setTimeout(()=>_e(""),3e3)}catch(G){console.error("Error approving recording:",G),_e("Failed to approve recording")}},ps=async q=>{try{await Qu(Pe(xe,"recordings",q),{approvalStatus:"rejected",rejectedAt:Yu()}),x(E.filter(G=>G.id!==q)),_e("Recording rejected"),setTimeout(()=>_e(""),3e3)}catch(G){console.error("Error rejecting recording:",G),_e("Failed to reject recording")}},gs=async q=>{if(q.preventDefault(),!c||!y){_e("Please fill in all required fields");return}if(!Z){_e("Please upload a homework file");return}me(!0),_e("");try{let G=null,le=null,ue=null,Fe=null,fe=null;if(Z){O(0);const Ue=await oh({subjectId:c,fileName:Z.name,contentType:Z.type,uploadType:"homework"}),mn=await st(Z,Ue,O),rt=mn==null?void 0:mn.response;le=(rt==null?void 0:rt.id)||(rt==null?void 0:rt.pid)||(rt==null?void 0:rt.file_id)||null,G=Ue.hidrivePath,ue=Z.name,Fe=Z.type,fe=Z.size}const ke={subjectId:c,title:y,description:v,dueDate:b?new Date(b).toISOString():null,attachmentName:ue,attachmentContentType:Fe,attachmentSize:fe,hidrivePath:G,hidriveFileId:le,fileName:Z.name};sessionStorage.setItem("pendingHomework",JSON.stringify(ke)),w(""),I(""),W(""),V(null),O(0),n("/admin/homework-share-link",{state:{pendingHomework:ke}})}catch(G){console.error("Error adding homework:",G),_e("Failed to add homework")}finally{me(!1)}};return s?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),i.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):e?i.jsx("div",{className:"min-h-screen bg-gray-50",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Admin Panel"}),i.jsx("button",{onClick:async()=>{await ot.signOut(),n("/login",{replace:!0})},className:"text-gray-600 hover:text-gray-900 underline text-sm",children:"Sign out"})]})}),i.jsxs("div",{className:"flex gap-2 mb-6 flex-wrap",children:[i.jsxs("button",{onClick:()=>_("recording"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${g==="recording"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[i.jsx(Yn,{className:"h-4 w-4"}),"Add Recording"]}),i.jsxs("button",{onClick:()=>_("homework"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition ${g==="homework"?"bg-green-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[i.jsx(zs,{className:"h-4 w-4"}),"Add Homework"]}),i.jsxs("button",{onClick:()=>_("approve"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition relative ${g==="approve"?"bg-purple-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"}`,children:[i.jsx(Yt,{className:"h-4 w-4"}),"Approve Recordings",E.length>0&&i.jsx("span",{className:"ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5",children:E.length})]})]}),De&&i.jsx("div",{className:`mb-6 p-4 rounded-lg ${De.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:De}),i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Select Subject"}),i.jsx("select",{value:c,onChange:q=>h(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:a.map(q=>i.jsx("option",{value:q.id,children:q.name},q.id))})]}),g==="recording"&&i.jsxs("form",{onSubmit:ms,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Recording"}),i.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Recordings will be pending approval before students can view them."}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),i.jsx("input",{type:"text",value:T,onChange:q=>k(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"e.g., Algebra Basics - Lesson 1",required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Exam Board *"}),i.jsxs("select",{value:B,onChange:q=>Y(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[i.jsx("option",{value:"",children:"Select Exam Board"}),i.jsx("option",{value:"AQA",children:"AQA"}),i.jsx("option",{value:"Edexcel",children:"Edexcel"})]})]}),!Ze()&&i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Tier *"}),i.jsxs("select",{value:oe,onChange:q=>te(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[i.jsx("option",{value:"",children:"Select Tier"}),i.jsx("option",{value:"Foundation",children:"Foundation"}),i.jsx("option",{value:"Higher",children:"Higher"})]})]}),Ze()&&i.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:i.jsx("p",{className:"text-sm text-blue-800",children:"English subjects do not have Foundation/Higher tiers."})}),i.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700",children:"After upload, you will be taken to a new page to paste the HiDrive share link."}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Upload Video File"}),i.jsx("input",{type:"file",accept:"video/*",onChange:q=>{var le;const G=((le=q.target.files)==null?void 0:le[0])||null;R(G),D(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),M>0&&M<100&&i.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",M,"%"]})]})]}),i.jsxs("button",{type:"submit",disabled:K,className:"mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[i.jsx(mc,{className:"h-4 w-4"}),K?"Adding...":"Add Recording (Pending Approval)"]})]}),g==="approve"&&i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Approve Recordings"}),i.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Review and approve pending recordings. Only approved recordings will be visible to students."}),E.length===0?i.jsxs("div",{className:"text-center py-8",children:[i.jsx(Yt,{className:"h-12 w-12 text-green-500 mx-auto mb-4"}),i.jsx("p",{className:"text-gray-600",children:"No pending recordings to approve."})]}):i.jsx("div",{className:"space-y-4",children:E.map(q=>i.jsx("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition",children:i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsxs("div",{className:"flex-1",children:[i.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:q.title}),i.jsxs("div",{className:"space-y-1 text-sm text-gray-600",children:[i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Subject:"})," ",q.subjectName]}),i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",q.examBoard]}),q.tier&&i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Tier:"})," ",q.tier]}),q.date&&i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Date:"})," ",q.date.toDate?q.date.toDate().toLocaleDateString("en-GB"):"N/A"]})]}),i.jsxs("a",{href:q.videoUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm mt-2",children:[i.jsx(Yn,{className:"h-4 w-4"}),"Preview Video"]})]}),i.jsxs("div",{className:"flex gap-2 ml-4",children:[i.jsxs("button",{onClick:()=>fs(q.id),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2",children:[i.jsx(Yt,{className:"h-4 w-4"}),"Approve"]}),i.jsx("button",{onClick:()=>ps(q.id),className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition",children:"Reject"})]})]})},q.id))})]}),g==="homework"&&i.jsxs("form",{onSubmit:gs,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add New Homework"}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Title *"}),i.jsx("input",{type:"text",value:y,onChange:q=>w(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Description"}),i.jsx("textarea",{value:v,onChange:q=>I(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",rows:"3"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Due Date"}),i.jsx("input",{type:"datetime-local",value:b,onChange:q=>W(q.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Homework File *"}),i.jsx("input",{type:"file",required:!0,onChange:q=>{var le;const G=((le=q.target.files)==null?void 0:le[0])||null;V(G),O(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"}),ie>0&&ie<100&&i.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["Uploading... ",ie,"%"]})]}),i.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700",children:"After upload, you will be taken to a new page to paste the HiDrive share link."})]}),i.jsxs("button",{type:"submit",disabled:K,className:"mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 flex items-center justify-center gap-2",children:[i.jsx(mc,{className:"h-4 w-4"}),K?"Adding...":"Add Homework"]})]})]})}):null}const Da="pendingRecording";function AI(){const n=Mt(),e=un(),[t,s]=j.useState(!0),[r,a]=j.useState(!1),[l,c]=j.useState(null),[h,d]=j.useState(""),[f,g]=j.useState(""),[_,T]=j.useState(""),[k,P]=j.useState(!1);j.useEffect(()=>{const M=Si(ot,async D=>{if(!D){a(!1),s(!1),n("/login",{replace:!0});return}try{const B=await Le(Pe(xe,"admins",D.uid)),Y=B.exists()?null:await Le(Pe(xe,"teachers",D.uid));B.exists()||Y!=null&&Y.exists()?a(!0):(a(!1),n("/login",{replace:!0}))}catch(B){console.error("Error verifying role:",B),a(!1),n("/login",{replace:!0})}finally{s(!1)}});return()=>M()},[n]),j.useEffect(()=>{var B;const M=(B=e.state)==null?void 0:B.pendingRecording;if(M){sessionStorage.setItem(Da,JSON.stringify(M)),c(M);return}const D=sessionStorage.getItem(Da);if(D)try{c(JSON.parse(D))}catch{c(null)}},[e.state]),j.useEffect(()=>{(async()=>{if(l!=null&&l.subjectId)try{const D=await Le(Pe(xe,"subjects",l.subjectId));D.exists()&&d(D.data().name||"")}catch(D){console.error("Error loading subject:",D)}})()},[l]);const R=async M=>{if(M.preventDefault(),!l){T("No pending upload found. Go back and upload again.");return}if(!f){T("Paste the HiDrive share link to continue.");return}P(!0),T("");try{const D=await II({subjectId:l.subjectId,title:l.title,examBoard:l.examBoard,tier:l.tier,videoUrl:f,hidrivePath:l.hidrivePath,hidriveFileId:l.hidriveFileId});sessionStorage.removeItem(Da);const B=(D==null?void 0:D.approvalStatus)==="approved"?"Recording added and approved!":"Recording added successfully! It will be visible to students after approval.";T(B)}catch(D){console.error("Error saving recording:",D),T("Failed to save recording")}finally{P(!1)}};return t?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),i.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):r?l?i.jsx("div",{className:"min-h-screen bg-gray-50",children:i.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[i.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Paste HiDrive Share Link"}),i.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Your upload is complete. Create a share link in HiDrive and paste it below."})]}),i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[i.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Recording Details"}),i.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Title:"})," ",l.title]}),i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Subject:"})," ",h||l.subjectId]}),i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Exam Board:"})," ",l.examBoard]}),l.tier&&i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Tier:"})," ",l.tier]}),l.fileName&&i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"File:"})," ",l.fileName]})]})]}),i.jsxs("form",{onSubmit:R,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[i.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4",children:[i.jsx("p",{children:"1) Open HiDrive and find the uploaded file."}),i.jsx("p",{children:"2) Click Share -> Create link -> Copy link."}),i.jsx("p",{children:"3) Paste the link below and click Save Recording."})]}),i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HiDrive Share Link"}),i.jsx("input",{type:"url",value:f,onChange:M=>g(M.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://hidrive.ionos.com/lnk/...",required:!0}),_&&i.jsx("div",{className:`mt-4 p-3 rounded-md text-sm ${_.includes("successfully")||_.includes("approved")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:_}),i.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[i.jsx("button",{type:"submit",disabled:k,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:k?"Saving...":"Save Recording"}),i.jsx("button",{type:"button",onClick:()=>n("/admin"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Back to Admin"})]})]})]})}):i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center",children:[i.jsx("p",{className:"text-gray-700 mb-4",children:"No pending upload found. Please upload a file first."}),i.jsx("button",{onClick:()=>n("/admin",{replace:!0}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Back to Admin"})]})}):null}const Va="pendingHomework";function jI(){const n=Mt(),e=un(),[t,s]=j.useState(!0),[r,a]=j.useState(!1),[l,c]=j.useState(null),[h,d]=j.useState(""),[f,g]=j.useState(""),[_,T]=j.useState(""),[k,P]=j.useState(!1);j.useEffect(()=>{const M=Si(ot,async D=>{if(!D){a(!1),s(!1),n("/login",{replace:!0});return}try{const B=await Le(Pe(xe,"admins",D.uid)),Y=B.exists()?null:await Le(Pe(xe,"teachers",D.uid));B.exists()||Y!=null&&Y.exists()?a(!0):(a(!1),n("/login",{replace:!0}))}catch(B){console.error("Error verifying role:",B),a(!1),n("/login",{replace:!0})}finally{s(!1)}});return()=>M()},[n]),j.useEffect(()=>{var B;const M=(B=e.state)==null?void 0:B.pendingHomework;if(M){sessionStorage.setItem(Va,JSON.stringify(M)),c(M);return}const D=sessionStorage.getItem(Va);if(D)try{c(JSON.parse(D))}catch{c(null)}},[e.state]),j.useEffect(()=>{(async()=>{if(l!=null&&l.subjectId)try{const D=await Le(Pe(xe,"subjects",l.subjectId));D.exists()&&d(D.data().name||"")}catch(D){console.error("Error loading subject:",D)}})()},[l]);const R=async M=>{if(M.preventDefault(),!l){T("No pending upload found. Go back and upload again.");return}if(!f){T("Paste the HiDrive share link to continue.");return}P(!0),T("");try{await TI({subjectId:l.subjectId,title:l.title,description:l.description,dueDate:l.dueDate||null,attachmentUrl:f,attachmentName:l.attachmentName||l.fileName||null,attachmentContentType:l.attachmentContentType||null,attachmentSize:l.attachmentSize||null,hidrivePath:l.hidrivePath,hidriveFileId:l.hidriveFileId}),sessionStorage.removeItem(Va),T("Homework added successfully!")}catch(D){console.error("Error saving homework:",D),T("Failed to save homework")}finally{P(!1)}};return t?i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),i.jsx("p",{className:"mt-4 text-gray-600",children:"Verifying access..."})]})}):r?l?i.jsx("div",{className:"min-h-screen bg-gray-50",children:i.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[i.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Paste HiDrive Share Link"}),i.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Your upload is complete. Create a share link in HiDrive and paste it below."})]}),i.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6",children:[i.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Homework Details"}),i.jsxs("div",{className:"text-sm text-gray-700 space-y-1",children:[i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Title:"})," ",l.title]}),i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Subject:"})," ",h||l.subjectId]}),l.dueDate&&i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"Due:"})," ",new Date(l.dueDate).toLocaleString("en-GB")]}),l.fileName&&i.jsxs("p",{children:[i.jsx("span",{className:"font-medium",children:"File:"})," ",l.fileName]})]})]}),i.jsxs("form",{onSubmit:R,className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[i.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 space-y-2 mb-4",children:[i.jsx("p",{children:"1) Open HiDrive and find the uploaded file."}),i.jsx("p",{children:"2) Click Share -> Create link -> Copy link."}),i.jsx("p",{children:"3) Paste the link below and click Save Homework."})]}),i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"HiDrive Share Link"}),i.jsx("input",{type:"url",value:f,onChange:M=>g(M.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://hidrive.ionos.com/lnk/...",required:!0}),_&&i.jsx("div",{className:`mt-4 p-3 rounded-md text-sm ${_.includes("successfully")?"bg-green-50 text-green-700 border border-green-200":"bg-red-50 text-red-700 border border-red-200"}`,children:_}),i.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[i.jsx("button",{type:"submit",disabled:k,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",children:k?"Saving...":"Save Homework"}),i.jsx("button",{type:"button",onClick:()=>n("/admin"),className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",children:"Back to Admin"})]})]})]})}):i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-6 max-w-lg text-center",children:[i.jsx("p",{className:"text-gray-700 mb-4",children:"No pending upload found. Please upload a file first."}),i.jsx("button",{onClick:()=>n("/admin",{replace:!0}),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Back to Admin"})]})}):null}function SI(){return j.useEffect(()=>{Ig()},[]),i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center px-4",children:i.jsxs("div",{className:"max-w-md w-full text-center",children:[i.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 md:p-10",children:[i.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:i.jsx(Yt,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})}),i.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Payment confirmed"}),i.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for your purchase. You will receive a confirmation email shortly with your receipt and next steps."}),i.jsxs(he,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",children:[i.jsx(He,{className:"h-5 w-5","aria-hidden":"true"}),"Back to home"]})]}),i.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-gray-500",children:[i.jsx(Tt,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),i.jsx("span",{className:"text-sm",children:"MySchola"})]})]})})}function kI(){return j.useEffect(()=>{Tg(),Ng()},[]),i.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center px-4",children:i.jsxs("div",{className:"max-w-md w-full text-center",children:[i.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 md:p-10",children:[i.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",children:i.jsx(Tp,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})}),i.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Booking confirmed"}),i.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for booking your free consultation. You will receive a confirmation email shortly with the meeting link and next steps."}),i.jsxs(he,{to:"/",className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",children:[i.jsx(He,{className:"h-5 w-5","aria-hidden":"true"}),"Back to home"]})]}),i.jsxs("div",{className:"mt-6 flex items-center justify-center gap-2 text-gray-500",children:[i.jsx(Tt,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),i.jsx("span",{className:"text-sm",children:"MySchola"})]})]})})}const CI=[6],RI=12,PI=0,lh=60,vf="Join our Free Flagship Live Webinar!",Ef="Live GCSE strategy session for Maths, English, and Science — leave with a clear plan to raise grades fast.",DI="Google Meet link shared after registration.",VI="447344193804",ch=`https://wa.me/${VI}`,uh="https://calendly.com/myscholaukwebinar/free-live-webinar",MI="https://www.youtube-nocookie.com/embed/964lgRt8a_E?rel=0";function LI({src:n,className:e}){const t=j.useRef(null);return j.useEffect(()=>{const s=t.current;if(!s)return;const r=()=>{s.readyState>=2&&(s.currentTime=.01,s.pause())};return s.addEventListener("loadedmetadata",r),s.readyState<2?s.load():r(),()=>{s.removeEventListener("loadedmetadata",r)}},[n]),i.jsxs("video",{ref:t,className:e,controls:!0,playsInline:!0,preload:"metadata",children:[i.jsx("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]})}function Ma(n=new Date){const e=[],t=[];CI.forEach(d=>{const f=new Date(n),g=(d-f.getDay()+7)%7;f.setDate(f.getDate()+g),f.setHours(RI,PI,0,0);const _=new Date(f);g===0&&f<=n&&_.setDate(_.getDate()+7),e.push(_);const T=new Date(f);f>n&&T.setDate(T.getDate()-7),t.push(T)});const s=e.reduce((d,f)=>f<d?f:d),r=t.reduce((d,f)=>f>d?f:d),a=new Date(r.getTime()+lh*6e4),l=n>=r&&n<a,c=l?r:s,h=new Date(c.getTime()+lh*6e4);return{start:c,end:h,isLive:l}}function hh(n){const e=Math.max(n-new Date,0),t=Math.floor(e/1e3),s=Math.floor(t/86400),r=Math.floor(t%86400/3600),a=Math.floor(t%3600/60),l=t%60;return{days:s,hours:r,minutes:a,seconds:l}}function OI(n){return String(n).padStart(2,"0")}function dh(n){return n.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}Z$/,"Z")}function FI(n,e){return`https://calendar.google.com/calendar/render?${new URLSearchParams({action:"TEMPLATE",text:vf,details:Ef,location:DI,dates:`${dh(n)}/${dh(e)}`}).toString()}`}function UI(){const[n,e]=j.useState(()=>Ma()),[t,s]=j.useState(()=>{const V=Ma();return hh(V.start)}),[r,a]=j.useState(()=>typeof window>"u"?!1:window.localStorage.getItem("webinarReminder")==="true"),[l,c]=j.useState(0),h=[{src:Ii,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:Ei,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:vi,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:_i,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:wi,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],d=h.length,f=[...h,...h,...h],g=d,_=d*2,[T,k]=j.useState(g),[P,R]=j.useState(!0),[M,D]=j.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),[B,Y]=j.useState(()=>typeof window>"u"?97:0);j.useEffect(()=>{const V=setInterval(()=>{const ie=Ma(),O=ie.isLive?ie.end:ie.start;e(ie),s(hh(O))},1e3);return()=>clearInterval(V)},[]),j.useEffect(()=>{typeof window>"u"||window.localStorage.setItem("webinarReminder",r?"true":"false")},[r]),j.useEffect(()=>{const V=()=>{const ie=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;D(ie)};return V(),window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[]),j.useEffect(()=>{if(T<g||T>=_){R(!1);const V=T<g?T+d:T-d;k(V),requestAnimationFrame(()=>{requestAnimationFrame(()=>R(!0))})}},[T,g,_,d]),j.useEffect(()=>{if(typeof window>"u")return;let V;const ie=2800,O=97,K=window.performance?window.performance.now():Date.now(),me=De=>{const _e=De||Date.now(),Ze=Math.min((_e-K)/ie,1),st=Math.floor(Ze*O);Y(st),Ze<1&&(V=window.requestAnimationFrame(me))};return V=window.requestAnimationFrame(me),()=>{V&&window.cancelAnimationFrame(V)}},[]);const oe=n.start.toLocaleString(void 0,{weekday:"long",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"}),te=FI(n.start,n.end),E=`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(ch)}`,x=V=>V===1?"Improved by 1 grade":`Improved by ${V} grades`,y=[{value:"95%",label:"Students improve grades",className:"bg-blue-600 text-blue-100"},{value:"2-3",label:"Grade improvement average",className:"bg-green-600 text-green-100"},{value:"300+",label:"Successful students",className:"bg-purple-600 text-purple-100"}],w=[{title:"One-to-One Support",description:"Personalised lessons where your child only sees the tutor. Privacy-first, focus-first.",icon:_h},{title:"Via Zoom",description:"High-quality video, interactive whiteboard, and chat support for fast progress.",icon:vh},{title:"Student Privacy",description:"Webcam and microphone are optional. Parents can monitor engagement for peace of mind.",icon:po}],v=[{step:"01",title:"Edexcel + AQA tracker",description:"Structured amber-light tracker to pinpoint strengths and gaps fast."},{step:"02",title:"Exemplar answers",description:"Techniques aligned directly to mark schemes so students know what earns marks and how to reach Grade 9."},{step:"03",title:"Exam practice + parent evenings",description:"Regular practice, progress reviews, and clear next steps to keep improvement steady."}],I=()=>{k(V=>V-1)},b=()=>{k(V=>V+1)},W=()=>{if(window.Calendly){window.Calendly.initPopupWidget({url:uh});return}const V=document.createElement("script");V.src="https://assets.calendly.com/assets/external/widget.js",V.async=!0,V.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:uh})},document.body.appendChild(V)},Z=[{q:"Who is this webinar for?",a:"Students in Years 9-11 and parents who want a clear GCSE improvement plan."},{q:"How do I get the Google Meet link?",a:"Register above and we will send the private Google Meet link by email or WhatsApp."},{q:"Will there be a recording?",a:"Yes. A private recording link is shared after the session."}];return i.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50",children:[i.jsx("div",{className:"w-full bg-[#0B3D91] text-white py-3 px-4 shadow-md relative overflow-hidden",children:i.jsx("div",{className:"relative overflow-hidden",children:i.jsx("div",{className:"flex items-center gap-6 whitespace-nowrap animate-marquee-reverse text-sm sm:text-base md:text-lg font-bold",children:Array.from({length:3}).map((V,ie)=>i.jsxs("div",{className:"flex items-center gap-3 pr-6",children:[i.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs sm:text-sm uppercase tracking-wide",children:[i.jsxs("span",{className:"relative inline-flex h-2 w-2",children:[i.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75"}),i.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-white"})]}),"Attention"]}),i.jsx("span",{children:"Parents of GCSE Years 9, 10 & 11 students"}),i.jsx("span",{className:"text-white/80",children:"•"}),i.jsx("span",{className:"text-white/90",children:"Spaces are running out — join our March cohort"})]},`banner-${ie}`))})})}),i.jsx("div",{className:"max-w-6xl mx-auto px-4 py-16 sm:py-20",children:i.jsxs("div",{className:"bg-white/90 rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden",children:[i.jsx("div",{className:"pointer-events-none absolute -top-32 -right-24 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl"}),i.jsx("div",{className:"pointer-events-none absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"}),i.jsxs("div",{className:"relative z-10",children:[i.jsx("div",{className:"flex flex-wrap items-center gap-3 text-blue-700 font-semibold text-sm uppercase tracking-wide",children:i.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-3 py-1",children:[i.jsx(La,{className:"h-4 w-4","aria-hidden":"true"}),"Private Webinar Registration"]})}),i.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mt-4",children:vf}),i.jsxs("div",{className:"mt-4 w-full rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-amber-100/60 p-8 sm:p-10 shadow-sm",children:[i.jsxs("div",{className:"flex flex-col gap-3",children:[i.jsxs("span",{className:"inline-flex w-fit items-center gap-2 rounded-full bg-red-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-red-700",children:[i.jsxs("span",{className:"relative inline-flex h-2 w-2",children:[i.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"}),i.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-red-600"})]}),"Limited seats"]}),i.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-red-700",children:Ef}),i.jsx("p",{className:"text-lg sm:text-xl font-semibold text-gray-700",children:"Get a step-by-step GCSE improvement roadmap, proven exam techniques, and a clear weekly plan. Book today to secure a place for your child and receive the private Google Meet link instantly."})]}),i.jsxs("div",{className:"mt-4 flex items-center gap-2 text-sm font-semibold text-red-700",children:[i.jsx(Yt,{className:"h-4 w-4","aria-hidden":"true"}),"Only a few seats left this week"]})]}),i.jsxs("div",{className:"mt-6 rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm",children:[i.jsx("h3",{className:"text-lg sm:text-xl font-bold text-gray-900 text-center",children:"A welcome from our co-founders"}),i.jsx("p",{className:"mt-2 text-sm sm:text-base text-gray-600 text-center",children:"Watch this short introduction from our co-founder, Isam, before registering for the webinar."}),i.jsx("div",{className:"mt-4 overflow-hidden rounded-2xl border border-slate-100 bg-black",style:{aspectRatio:"16 / 9"},children:i.jsx("iframe",{className:"h-full w-full",src:MI,title:"Webinar welcome video",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})}),i.jsx("div",{className:"mt-6 flex justify-center",children:i.jsxs("button",{type:"button",onClick:W,className:"group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 px-12 py-6 text-white text-2xl font-extrabold ring-2 ring-blue-300/40 hover:shadow-2xl hover:-translate-y-0.5 transition overflow-hidden cta-button",children:[i.jsx("span",{className:"cta-shimmer","aria-hidden":"true"}),i.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition","aria-hidden":"true"}),i.jsxs("span",{className:"relative inline-flex items-center gap-2",children:[i.jsx(fc,{className:"h-5 w-5 text-white/90","aria-hidden":"true"}),"Register for the webinar"]})]})})]}),i.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-3",children:y.map(V=>i.jsxs("div",{className:`rounded-2xl p-5 text-center shadow-md ${V.className}`,children:[i.jsx("div",{className:"text-3xl sm:text-4xl font-bold text-white",children:V.value}),i.jsx("div",{className:"mt-2 text-sm font-semibold",children:V.label})]},V.value))}),i.jsx("p",{className:"text-xs text-gray-500 mt-3",children:"Results based on historical performance. Individual outcomes vary."}),i.jsx("div",{className:"mt-8",children:i.jsxs("div",{className:"w-full rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-100/70 p-8 md:p-10 shadow-lg",children:[i.jsxs("div",{className:"flex items-center justify-between gap-4",children:[i.jsxs("div",{className:"flex items-center gap-2 text-blue-700 font-semibold",children:[i.jsx(fo,{className:"h-5 w-5","aria-hidden":"true"}),n.isLive?"Live now - ends in":"Starts in"]}),n.isLive&&i.jsxs("span",{className:"inline-flex items-center gap-2 text-sm font-semibold text-red-600",children:[i.jsx("span",{className:"h-2 w-2 rounded-full bg-red-500 animate-pulse"}),"LIVE"]})]}),i.jsx("div",{className:"mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center",children:[{label:"Days",value:t.days},{label:"Hours",value:t.hours},{label:"Minutes",value:t.minutes},{label:"Seconds",value:t.seconds}].map(V=>i.jsxs("div",{className:"rounded-2xl bg-white/90 border border-blue-100 px-4 py-5 shadow-md hover:shadow-lg transition",children:[i.jsx("div",{className:"text-4xl sm:text-5xl font-extrabold text-gray-900 drop-shadow-sm",children:OI(V.value)}),i.jsx("div",{className:"text-xs uppercase tracking-wide text-blue-600 mt-2 font-semibold",children:V.label})]},V.label))}),i.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold",children:[i.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-blue-700",children:["Next webinar: ",i.jsx("span",{className:"font-bold text-blue-900",children:oe})]}),i.jsx("span",{className:"inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-red-700",children:"Spaces are filling up — register soon."})]}),i.jsx("p",{className:"text-xs text-gray-500 mt-3",children:"Time shown in your local timezone."})]})}),i.jsxs("div",{className:"mt-8 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/60 p-8 sm:p-10 shadow-sm",children:[i.jsxs("div",{className:"flex flex-col gap-3",children:[i.jsx("span",{className:"inline-flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700",children:"What to expect"}),i.jsxs("h3",{className:"text-3xl sm:text-4xl font-bold text-gray-900",children:["A clear plan for measurable GCSE gains to",i.jsx("span",{className:"ml-2 text-emerald-600 text-3xl sm:text-4xl font-extrabold underline decoration-emerald-300 decoration-4 underline-offset-4 animate-soft-glow",children:"Grade 9"})]}),i.jsx("p",{className:"text-lg sm:text-xl text-gray-700 max-w-2xl",children:"Three focused steps we deliver in the webinar so families leave with a concrete action plan."})]}),i.jsx("div",{className:"mt-6 grid gap-4 md:grid-cols-3",children:v.map(V=>i.jsxs("div",{className:"rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white",children:V.step}),i.jsx("h4",{className:"text-lg sm:text-xl font-semibold text-gray-900",children:V.title})]}),i.jsx("p",{className:"mt-3 text-base sm:text-lg text-gray-700",children:V.description})]},V.step))}),i.jsxs("div",{className:"mt-6 flex items-center gap-2 text-base sm:text-lg font-semibold text-emerald-700",children:[i.jsx(Yt,{className:"h-5 w-5","aria-hidden":"true"}),"Live examples and Q&A included"]})]}),i.jsxs("div",{className:"mt-10 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-10 shadow-lg",children:[i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700",children:[i.jsx(fc,{className:"h-3.5 w-3.5","aria-hidden":"true"}),"Parents love this session"]}),i.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-gray-900 mt-3",children:"Reserve your spot now"}),i.jsx("p",{className:"text-gray-700 mt-2 max-w-2xl text-base sm:text-lg",children:"Book in under a minute and get the private Google Meet link plus the follow-up resources."})]}),i.jsx("div",{className:"flex items-center justify-center",children:i.jsx("div",{className:"relative rounded-3xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 p-[2px] shadow-lg",children:i.jsxs("div",{className:"relative flex items-center gap-4 rounded-[22px] bg-white px-7 py-5 overflow-hidden",children:[i.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-60",children:i.jsx("div",{className:"absolute -left-1/3 top-0 h-full w-1/2 rotate-6 bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent animate-pulse"})}),i.jsxs("span",{className:"absolute -top-2 -right-2 inline-flex h-4 w-4",children:[i.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),i.jsx("span",{className:"relative inline-flex h-4 w-4 rounded-full bg-emerald-500"})]}),i.jsxs("div",{className:"relative text-4xl sm:text-5xl font-extrabold text-emerald-600 tracking-tight drop-shadow-sm animate-pulse",children:[B,"%"]}),i.jsx("div",{className:"relative text-base sm:text-lg font-semibold text-gray-800",children:"Parents recommend this webinar"})]})})})]}),i.jsx("div",{className:"mt-6 grid gap-3 sm:grid-cols-3",children:["Live, interactive webinar with real examples","Action plan you can use immediately"].map(V=>i.jsxs("div",{className:"flex items-start gap-2 rounded-xl bg-white/80 px-4 py-3 text-sm font-semibold text-gray-700",children:[i.jsx(Yt,{className:"mt-0.5 h-4 w-4 text-emerald-600","aria-hidden":"true"}),i.jsx("span",{children:V})]},V))}),i.jsxs("div",{className:"mt-8",children:[i.jsx("button",{type:"button",onClick:W,className:"inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-8 py-5 text-white text-xl font-bold shadow-xl hover:bg-blue-700 transition",children:"Register for the webinar"}),i.jsx("p",{className:"text-xs text-gray-500 mt-3 text-center",children:"Secure Calendly pop-up. No card required."})]}),i.jsxs("div",{className:"mt-6 flex flex-wrap gap-3",children:[i.jsxs("a",{href:te,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition",children:[i.jsx(La,{className:"h-4 w-4","aria-hidden":"true"}),"Add to Google Calendar"]}),i.jsxs("button",{type:"button",onClick:()=>a(V=>!V),className:`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${r?"border-green-200 text-green-700 bg-green-50":"border-gray-200 text-gray-700 hover:bg-gray-50"}`,children:[i.jsx(xp,{className:"h-4 w-4","aria-hidden":"true"}),r?"Reminder set":"Set a reminder"]})]})]}),i.jsxs("div",{className:"mt-12 rounded-3xl border border-gray-200 bg-white p-8",children:[i.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[i.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700",children:[i.jsx(wh,{className:"h-4 w-4","aria-hidden":"true"}),"From our main tutoring programme"]}),i.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-900 mt-4",children:"How MySchola lessons work"}),i.jsx("p",{className:"text-gray-600 mt-2",children:"These are the same methods used in our full tutoring programme, adapted for this webinar."})]}),i.jsx("div",{className:"mt-8 grid gap-6 md:grid-cols-3",children:w.map(V=>{const ie=V.icon;return i.jsxs("div",{className:"rounded-2xl border border-blue-100 bg-blue-50/60 p-6 text-left shadow-sm",children:[i.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white",children:i.jsx(ie,{className:"h-6 w-6","aria-hidden":"true"})}),i.jsx("h3",{className:"mt-4 text-lg font-semibold text-gray-900",children:V.title}),i.jsx("p",{className:"mt-2 text-sm text-gray-600",children:V.description})]},V.title)})})]}),i.jsxs("div",{className:"mt-12 rounded-3xl border border-gray-200 bg-white p-8",children:[i.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[i.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-900",children:"Our tutors study at the UK's most prestigious universities"}),i.jsx("p",{className:"text-gray-600 mt-2 max-w-3xl mx-auto",children:"Learn from the best to achieve your best."})]}),i.jsx("div",{className:"relative overflow-hidden mt-8",children:i.jsxs("div",{className:"flex animate-marquee",children:[[{src:zr,alt:"University of Nottingham",name:"Nottingham"},{src:Gr,alt:"King's College London",name:"King's College"},{src:Kr,alt:"University of Cambridge",name:"Cambridge"},{src:Qr,alt:"Imperial College London",name:"Imperial"},{src:Yr,alt:"University of Warwick",name:"Warwick"}].map((V,ie)=>i.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:i.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-32 sm:h-40 lg:h-44 w-56 sm:w-64 lg:w-72 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:i.jsx("img",{src:V.src,alt:V.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`first-${ie}`)),[{src:zr,alt:"University of Nottingham",name:"Nottingham"},{src:Gr,alt:"King's College London",name:"King's College"},{src:Kr,alt:"University of Cambridge",name:"Cambridge"},{src:Qr,alt:"Imperial College London",name:"Imperial"},{src:Yr,alt:"University of Warwick",name:"Warwick"}].map((V,ie)=>i.jsx("div",{className:"flex-shrink-0 mx-4 sm:mx-6 lg:mx-8",children:i.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 h-32 sm:h-40 lg:h-44 w-56 sm:w-64 lg:w-72 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow",children:i.jsx("img",{src:V.src,alt:V.alt,className:"w-full h-full object-contain",loading:"lazy"})})},`second-${ie}`))]})})]}),i.jsx("div",{className:"mt-12 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-blue-50/70 p-8",children:i.jsxs("div",{className:"max-w-5xl mx-auto text-center",children:[i.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-900",children:"Video testimonials"}),i.jsx("p",{className:"text-gray-600 mt-2",children:"Hear directly from students and parents about their progress."}),i.jsxs("div",{className:"relative mt-10 sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[i.jsx("button",{type:"button",onClick:I,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:i.jsx(He,{className:"h-5 w-5","aria-hidden":"true"})}),i.jsx("div",{className:"overflow-hidden sm:col-start-2",children:i.jsx("div",{className:`flex ${P?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${T*(100/M)}%)`},children:f.map((V,ie)=>{const O=Math.floor(M/2),K=ie===T+O;return i.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/M}%`},children:i.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${K?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[i.jsx(LI,{src:V.src,className:"w-full h-auto rounded-t-2xl"}),i.jsxs("div",{className:"p-4 text-center",children:[i.jsx("p",{className:"text-lg font-semibold text-gray-900",children:V.name}),i.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[i.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:V.subjects.join(" / ")}),i.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:x(V.improvedBy)})]})]})]})},`${V.id}-${ie}`)})})}),i.jsx("button",{type:"button",onClick:b,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:i.jsx(xt,{className:"h-5 w-5","aria-hidden":"true"})}),i.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[i.jsx("button",{type:"button",onClick:I,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Previous testimonial videos",title:"Previous",children:i.jsx(He,{className:"h-5 w-5","aria-hidden":"true"})}),i.jsx("button",{type:"button",onClick:b,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40","aria-label":"Next testimonial videos",title:"Next",children:i.jsx(xt,{className:"h-5 w-5","aria-hidden":"true"})})]})]})]})}),i.jsxs("div",{className:"mt-10 rounded-2xl border border-gray-200 p-6",children:[i.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Quick FAQ"}),i.jsx("div",{className:"space-y-3",children:Z.map((V,ie)=>i.jsxs("div",{className:"border border-gray-100 rounded-xl",children:[i.jsxs("button",{type:"button",onClick:()=>c(l===ie?-1:ie),className:"w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-gray-900","aria-expanded":l===ie,children:[V.q,i.jsx("span",{className:"text-blue-600",children:l===ie?"-":"+"})]}),l===ie&&i.jsx("div",{className:"px-4 pb-4 text-sm text-gray-600",children:V.a})]},V.q))})]}),i.jsxs("div",{className:"mt-10 rounded-2xl border border-gray-200 p-6 text-center",children:[i.jsxs("div",{className:"flex items-center justify-center gap-2 text-gray-900 font-semibold",children:[i.jsx(Ye,{className:"h-5 w-5 text-green-600","aria-hidden":"true"}),"WhatsApp QR code"]}),i.jsx("p",{className:"text-gray-600 mt-3",children:"Scan to message us on WhatsApp if you have any questions."}),i.jsx("img",{src:E,alt:"WhatsApp QR code for MySchola",className:"mx-auto mt-4 h-44 w-44 rounded-lg border border-gray-100",loading:"lazy"}),i.jsx("a",{href:ch,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-green-200 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-50 transition",children:"Open WhatsApp chat"})]}),i.jsx("div",{className:"mt-10",children:i.jsxs(he,{to:"/",className:"inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold",children:[i.jsx(He,{className:"h-4 w-4","aria-hidden":"true"}),"Back to home"]})})]})]})})]})}const BI=[6],qI=12,$I=0,mh=60,fh="https://meet.google.com/vpo-sydu-rsh",ph="https://chat.whatsapp.com/your-group-invite";function WI(n=new Date){const e=[],t=[];BI.forEach(d=>{const f=new Date(n),g=(d-f.getDay()+7)%7;f.setDate(f.getDate()+g),f.setHours(qI,$I,0,0);const _=new Date(f);g===0&&f<=n&&_.setDate(_.getDate()+7),e.push(_);const T=new Date(f);f>n&&T.setDate(T.getDate()-7),t.push(T)});const s=e.reduce((d,f)=>f<d?f:d),r=t.reduce((d,f)=>f>d?f:d),a=new Date(r.getTime()+mh*6e4),l=n>=r&&n<a,c=l?r:s,h=new Date(c.getTime()+mh*6e4);return{start:c,end:h,isLive:l}}function HI(){const n=un(),e=n.state&&n.state.fromRegistration,t=typeof window<"u"&&window.sessionStorage.getItem("webinarRegistered")==="true",s=!!(e||t),a=WI().start.toLocaleString(void 0,{weekday:"long",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"}),l=Intl.DateTimeFormat().resolvedOptions().timeZone,c=`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(ph)}`;return i.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50",children:i.jsx("div",{className:"max-w-4xl mx-auto px-4 py-16 sm:py-20",children:i.jsxs("div",{className:"bg-white/90 rounded-3xl shadow-xl p-8 sm:p-12",children:[i.jsxs("div",{className:"flex items-center gap-3 text-blue-700 font-semibold",children:[i.jsx(Yt,{className:"h-6 w-6","aria-hidden":"true"}),"Registration confirmed"]}),i.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mt-4",children:"Thanks for registering for the Live Webinar!"}),i.jsx("p",{className:"text-gray-600 mt-3",children:"We will send reminders before the webinar. Your local time is shown below."}),i.jsxs("div",{className:"mt-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-6",children:[i.jsxs("div",{className:"flex items-center gap-2 text-blue-700 font-semibold",children:[i.jsx(La,{className:"h-5 w-5","aria-hidden":"true"}),"Next session time"]}),i.jsx("p",{className:"text-lg font-semibold text-gray-900 mt-3",children:a}),i.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Timezone: ",l]})]}),s?i.jsxs("div",{className:"mt-8 grid gap-6 md:grid-cols-2",children:[i.jsxs("div",{className:"rounded-2xl border border-gray-200 p-6",children:[i.jsxs("div",{className:"flex items-center gap-2 text-gray-900 font-semibold",children:[i.jsx(Yn,{className:"h-5 w-5 text-blue-600","aria-hidden":"true"}),"Google Meet link for this week"]}),i.jsx("p",{className:"text-gray-600 mt-3",children:"Use this link at the session time. Please do not share it publicly."}),i.jsxs("div",{className:"mt-4 text-sm text-gray-700",children:[i.jsx("span",{className:"font-semibold text-gray-900",children:"Meeting link:"})," ",i.jsx("a",{href:fh,target:"_blank",rel:"noopener noreferrer",className:"font-semibold text-blue-700 hover:text-blue-800 underline",children:fh})]})]}),i.jsxs("div",{className:"rounded-2xl border border-gray-200 p-6 text-center",children:[i.jsxs("div",{className:"flex items-center justify-center gap-2 text-gray-900 font-semibold",children:[i.jsx(Ye,{className:"h-5 w-5 text-green-600","aria-hidden":"true"}),"WhatsApp group chat"]}),i.jsx("p",{className:"text-gray-600 mt-3",children:"Scan to join the WhatsApp group chat for updates."}),i.jsx("img",{src:c,alt:"WhatsApp group chat QR code",className:"mx-auto mt-4 h-44 w-44 rounded-lg border border-gray-100",loading:"lazy"}),i.jsx("a",{href:ph,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-green-200 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-50 transition",children:"Open WhatsApp group"})]})]}):i.jsx("div",{className:"mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6",children:i.jsx("p",{className:"text-sm text-amber-900",children:"Please register on the webinar page to access the Google Meet link and WhatsApp group."})}),i.jsxs("div",{className:"mt-10 flex flex-wrap gap-4",children:[i.jsx(he,{to:"/webinar",className:"inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition",children:"Back to webinar page"}),i.jsx(he,{to:"/",className:"inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition",children:"Back to home"})]})]})})})}function zI({src:n,className:e}){const t=j.useRef(null);return j.useEffect(()=>{const s=t.current;if(!s)return;const r=()=>{s.readyState>=2&&(s.currentTime=.01,s.pause())};return s.addEventListener("loadedmetadata",r),s.readyState<2?s.load():r(),()=>{s.removeEventListener("loadedmetadata",r)}},[n]),i.jsxs("video",{ref:t,className:e,controls:!0,playsInline:!0,preload:"metadata",children:[i.jsx("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]})}function GI(){const n=Mt(),[e,t]=j.useState(!1),[s,r]=j.useState(9),[a,l]=j.useState(2),[c,h]=j.useState(!0),[d,f]=j.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),g=[{src:Ii,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:Ei,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:vi,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:_i,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:wi,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],_=g.length,T=[...g,...g,...g],k=_,P=_*2;j.useEffect(()=>{const w=()=>{const v=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;f(v)};return w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[]),j.useEffect(()=>{if(a<k||a>=P){h(!1);const w=a<k?a+_:a-_;l(w),requestAnimationFrame(()=>{requestAnimationFrame(()=>h(!0))})}},[a,k,P,_]);const R=w=>w===1?"Improved by 1 grade":`Improved by ${w} grades`,M=()=>{l(w=>w-1)},D=()=>{l(w=>w+1)},B=()=>{const w="https://calendly.com/admin-myschola/30min";if(window.Calendly)window.Calendly.initPopupWidget({url:w,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0});else{const v=document.createElement("script");v.src="https://assets.calendly.com/assets/external/widget.js",v.async=!0,v.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:w,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0})},document.body.appendChild(v),setTimeout(()=>{window.Calendly||window.open(w,"_blank","noopener,noreferrer")},1e3)}},Y=()=>{Fa(),n("/booking",{replace:!1}),B()},[oe,te]=j.useState(""),E="Building Strong Foundations for GCSE Success",x=80;j.useEffect(()=>{let w=0,v=!0;const I=setInterval(()=>{v?w<=E.length?(te(E.slice(0,w)),w++):(v=!1,setTimeout(()=>{},2e3)):w>0?(te(E.slice(0,w)),w--):v=!0},x);return()=>clearInterval(I)},[]);const y=w=>{n(`/package?year=${w}`)};return i.jsxs("div",{className:"min-h-screen bg-white",children:[i.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),i.jsx("div",{className:"w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md",children:"Join our March cohort as soon as possible — spaces are running out!"}),i.jsxs("nav",{className:"sticky top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center h-16",children:[i.jsxs("div",{className:"flex items-center",children:[i.jsx(Tt,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),i.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),i.jsx("div",{className:"hidden md:flex justify-center",children:i.jsxs("div",{className:"flex items-center space-x-8",children:[i.jsx(he,{to:"/",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),i.jsx(he,{to:"/courses",className:"text-blue-600 font-semibold",children:"Courses"}),i.jsx("a",{href:"/#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),i.jsx("a",{href:"/#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),i.jsx("a",{href:"/#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"})]})}),i.jsxs("div",{className:"flex items-center justify-end",children:[i.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[i.jsx(he,{to:"/login",className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center","aria-label":"Log in",children:"Log In"}),i.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Kt,className:"bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2","aria-label":"Contact us on WhatsApp",children:[i.jsx(Ye,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})]}),i.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>t(!e),"aria-label":e?"Close menu":"Open menu","aria-expanded":e,"aria-controls":"mobile-menu",children:e?i.jsx(yo,{className:"h-6 w-6","aria-hidden":"true"}):i.jsx(go,{className:"h-6 w-6","aria-hidden":"true"})})]})]})}),e&&i.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:i.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[i.jsx(he,{to:"/",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),i.jsx(he,{to:"/courses",className:"block px-3 py-2 text-blue-600 font-semibold bg-blue-50",role:"menuitem",children:"Courses"}),i.jsx("a",{href:"/#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),i.jsx("a",{href:"/#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),i.jsx("a",{href:"/#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),i.jsx(he,{to:"/login",className:"block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",role:"menuitem",children:"Log In"}),i.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Kt,className:"block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2","aria-label":"Contact us on WhatsApp",role:"menuitem",children:i.jsxs("span",{className:"inline-flex items-center gap-2",children:[i.jsx(Ye,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})})]})})]}),i.jsxs("main",{id:"main-content",children:[i.jsx("section",{className:"pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Courses hero section",children:i.jsxs("div",{className:"max-w-7xl mx-auto text-center",children:[i.jsxs("h1",{className:"text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-12 tracking-tight",children:["Select your ",i.jsx("span",{className:"text-blue-600",children:"year group"}),":"]}),i.jsx("div",{className:"flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8",children:[9,10,11].map(w=>i.jsxs("button",{onClick:()=>y(w),className:"w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-6 rounded-xl font-bold text-xl sm:text-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 bg-white text-gray-800 border-4 border-gray-200 hover:border-blue-500 hover:text-blue-600 hover:shadow-xl hover:scale-105 active:scale-95 focus:ring-blue-400 cursor-pointer touch-manipulation min-h-[80px] sm:min-h-[90px] flex items-center justify-center","aria-label":`Select Year ${w}`,children:["Year ",w]},w))}),i.jsxs("p",{className:"text-lg sm:text-xl text-blue-600 font-medium min-h-[1.75rem]",children:[oe,i.jsx("span",{className:"animate-pulse",children:"|"})]})]})}),i.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8","aria-labelledby":"course-content-heading",children:i.jsx("div",{className:"max-w-7xl mx-auto",children:i.jsxs("div",{className:"bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 sm:p-12 text-white",children:[i.jsx("h3",{className:"text-2xl sm:text-3xl font-bold mb-8 text-center",children:"What's included"}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[i.jsx("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6",children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"bg-white/20 rounded-lg p-3 flex-shrink-0",children:i.jsx(ng,{className:"h-6 w-6 text-white"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-xl font-semibold mb-2",children:"Live Online Small Group Lessons"}),i.jsxs("p",{className:"text-blue-100 leading-relaxed",children:["Our lessons cover the ",i.jsx("strong",{className:"text-white",children:"breadth of each topic"}),", methodically building on key concepts taught by our ",i.jsx("strong",{className:"text-white",children:"specialist teachers with at least 8 years of teaching experience"}),". Each lesson is ",i.jsx("strong",{className:"text-white",children:"1 hour long"}),"."]})]})]})}),i.jsx("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6",children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"bg-white/20 rounded-lg p-3 flex-shrink-0",children:i.jsx(jp,{className:"h-6 w-6 text-white"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-xl font-semibold mb-2",children:"Regular Parents Evening"}),i.jsxs("p",{className:"text-blue-100 leading-relaxed",children:[i.jsx("strong",{className:"text-white",children:"Regular parents evening information every month"})," to show progress of the student. We continuously monitor progress to ensure every student keeps pace with the curriculum."]})]})]})}),i.jsx("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6",children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"bg-white/20 rounded-lg p-3 flex-shrink-0",children:i.jsx(Rp,{className:"h-6 w-6 text-white"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-xl font-semibold mb-2",children:"Engaging Multimedia Teaching"}),i.jsxs("p",{className:"text-blue-100 leading-relaxed",children:["During the lesson, concepts are taught using ",i.jsx("strong",{className:"text-white",children:"illustration, animation and walkthroughs"}),". This ",i.jsx("strong",{className:"text-white",children:"multi-sensory approach"})," ensures concepts stick and students remain engaged throughout."]})]})]})}),i.jsx("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6",children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx("div",{className:"bg-white/20 rounded-lg p-3 flex-shrink-0",children:i.jsx(bh,{className:"h-6 w-6 text-white"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-xl font-semibold mb-2",children:"Detailed Exam Technique Training"}),i.jsxs("p",{className:"text-blue-100 leading-relaxed",children:["We ",i.jsx("strong",{className:"text-white",children:"explicitly teach detailed exam technique"})," in our lessons, going through ",i.jsx("strong",{className:"text-white",children:"several questions in each lesson"}),". Students learn exactly how to ",i.jsx("strong",{className:"text-white",children:"structure answers to maximise marks"}),"."]})]})]})})]})]})})}),i.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"testimonials-heading",children:i.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[i.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Testimonials from Students"}),i.jsx("p",{className:"text-gray-600 mb-12",children:"Short clips from students, with the subject and grade improvements below."}),i.jsxs("div",{className:"relative sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[i.jsx("button",{type:"button",onClick:M,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Previous testimonial videos",title:"Previous",children:i.jsx(He,{className:"h-5 w-5"})}),i.jsx("div",{className:"overflow-hidden sm:col-start-2",children:i.jsx("div",{className:`flex ${c?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${a*(100/d)}%)`},children:T.map((w,v)=>{const I=Math.floor(d/2),b=v===a+I;return i.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/d}%`},children:i.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${b?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[i.jsx(zI,{src:w.src,className:"w-full h-auto rounded-t-2xl"}),i.jsxs("div",{className:"p-4 text-center",children:[i.jsx("p",{className:"text-lg font-semibold text-gray-900",children:w.name}),i.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[i.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:w.subjects.join(" / ")}),i.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:R(w.improvedBy)})]})]})]})},`${w.id}-${v}`)})})}),i.jsx("button",{type:"button",onClick:D,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Next testimonial videos",title:"Next",children:i.jsx(xt,{className:"h-5 w-5"})}),i.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[i.jsx("button",{type:"button",onClick:M,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Previous testimonial videos",children:i.jsx(He,{className:"h-5 w-5"})}),i.jsx("button",{type:"button",onClick:D,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Next testimonial videos",children:i.jsx(xt,{className:"h-5 w-5"})})]})]})]})})]}),i.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center mb-4",children:[i.jsx(Tt,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),i.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),i.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 9-11 via Zoom."})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx(he,{to:"/",className:"hover:text-white transition",children:"Home"})}),i.jsx("li",{children:i.jsx(he,{to:"/courses",className:"hover:text-white transition",children:"Courses"})}),i.jsx("li",{children:i.jsx("a",{href:"/#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),i.jsx("li",{children:i.jsx("a",{href:"/#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"/#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),i.jsx("li",{children:i.jsx("a",{href:"/#terms-of-service",className:"hover:text-white transition",children:"Refund & Cancellation Policy"})}),i.jsx("li",{children:i.jsx("a",{href:"/#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"mailto:support@myschola.uk",className:"hover:text-white transition",children:"support@myschola.uk"})}),i.jsx("li",{children:i.jsx("a",{href:"tel:+447344193804",className:"hover:text-white transition",children:"+44 7344 193804"})}),i.jsx("li",{children:i.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Kt,className:"text-green-400 hover:text-green-300 transition inline-flex items-center gap-2",children:[i.jsx(Ye,{className:"h-4 w-4"}),"Contact Us on WhatsApp"]})}),i.jsx("li",{children:i.jsx("button",{type:"button",onClick:Y,className:"bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation text-sm sm:text-base","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),i.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:i.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 9-11."]})})]})}),i.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Kt,className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation","aria-label":"Contact us on WhatsApp",children:i.jsx(Ye,{className:"h-5 w-5 sm:h-6 sm:w-6"})})]})}function Pr(){window.gtag&&window.gtag("event","conversion",{send_to:"AW-11111111111/lead_whatsapp_QQQ"}),window.fbq&&window.fbq("track","Lead",{content_name:"WhatsApp Contact"})}function KI(){window.gtag&&window.gtag("event","conversion",{send_to:"AW-11111111111/lead_consultation_RRR"}),window.fbq&&window.fbq("track","Lead",{content_name:"Book Consultation"})}function QI({src:n,className:e=""}){const t=j.useRef(null);return j.useEffect(()=>{const s=t.current;if(!s)return;const r=()=>{s.readyState>=2&&(s.currentTime=.01,s.pause())};return s.addEventListener("loadedmetadata",r),s.readyState<2?s.load():r(),()=>{s.removeEventListener("loadedmetadata",r)}},[n]),i.jsxs("video",{ref:t,className:e,controls:!0,playsInline:!0,preload:"metadata",children:[i.jsx("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]})}const Dr=[{src:Ii,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:Ei,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:vi,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:_i,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:wi,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}];function YI(){const[n]=Zf(),e=n.get("year")||"9",[t,s]=j.useState(!1),[r,a]=j.useState(5),[l,c]=j.useState(!0),[h,d]=j.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),f=Dr.length,g=[...Dr,...Dr,...Dr],_=f,T=f*2;j.useEffect(()=>{const O=()=>{const K=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;d(K)};return O(),window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)},[]),j.useEffect(()=>{const O=setInterval(()=>{a(K=>{const me=K+1;return me>T?(c(!1),setTimeout(()=>{c(!0)},50),_):me})},4e3);return()=>clearInterval(O)},[T,_]),j.useEffect(()=>{if(r<_||r>=T){c(!1);const O=r<_?r+f:r-f;a(O),requestAnimationFrame(()=>{requestAnimationFrame(()=>c(!0))})}},[r,_,T,f]);const k=O=>O===1?"Improved by 1 grade":`Improved by ${O} grades`,P=()=>{a(O=>O-1)},R=()=>{a(O=>O+1)},M=()=>{switch(e){case"9":return"https://buy.stripe.com/7sY5kEgcn38Ec0b3CZcjS0d";case"10":return"https://buy.stripe.com/fZu5kE8JVaB63tFehDcjS0a";case"11":return"https://buy.stripe.com/7sY5kEgcn38Ec0b3CZcjS0d";default:return"https://buy.stripe.com/7sY5kEgcn38Ec0b3CZcjS0d"}},D=()=>{switch(e){case"9":return"https://buy.stripe.com/28EcN61ht38E2pBa1ncjS0f";case"10":return"https://buy.stripe.com/cNi8wQ4tFaB60htb5rcjS0g";case"11":return"https://buy.stripe.com/cNieVebW74cI3tF8XjcjS0h";default:return"https://buy.stripe.com/28EcN61ht38E2pBa1ncjS0f"}},B=()=>{switch(e){case"9":return"https://buy.stripe.com/dRm14obW7aB6d4f5L7cjS0i";case"10":return"https://buy.stripe.com/4gMaEY9NZ6kQe8j2yVcjS0j";case"11":return"https://buy.stripe.com/5kQcN66BN24A7JV8XjcjS0k";default:return"https://buy.stripe.com/dRm14obW7aB6d4f5L7cjS0i"}},Y=()=>{switch(e){case"9":return"https://buy.stripe.com/00w28s3pB7oU7JVehDcjS0l";case"10":return"https://buy.stripe.com/14A6oId0bbFa8NZ0qNcjS0m";case"11":return"https://buy.stripe.com/28EfZi7FR9x27JV1uRcjS0n";default:return"https://buy.stripe.com/00w28s3pB7oU7JVehDcjS0l"}},oe=()=>{switch(e){case"9":return"https://buy.stripe.com/00w28s3pB7oU7JVehDcjS0l";case"10":return"https://buy.stripe.com/14A6oId0bbFa8NZ0qNcjS0m";case"11":return"https://buy.stripe.com/28EfZi7FR9x27JV1uRcjS0n";default:return"https://buy.stripe.com/00w28s3pB7oU7JVehDcjS0l"}},te=()=>{switch(e){case"9":return"https://buy.stripe.com/3cIfZiaS3fVqe8j2yVcjS0o";case"10":return"https://buy.stripe.com/9B63cw5xJ9x24xJ7TfcjS0p";case"11":return"https://buy.stripe.com/aFa8wQd0b38E6FRgpLcjS0q";default:return"https://buy.stripe.com/3cIfZiaS3fVqe8j2yVcjS0o"}},E=()=>{switch(e){case"9":return"https://buy.stripe.com/7sYeVe8JV4cI2pBgpLcjS0r";case"10":return"https://buy.stripe.com/fZu14o5xJ10wfcnc9vcjS0s";case"11":return"https://buy.stripe.com/4gM14o6BNbFa7JV0qNcjS0t";default:return"https://buy.stripe.com/7sYeVe8JV4cI2pBgpLcjS0r"}},x=()=>{switch(e){case"9":return"https://buy.stripe.com/3cI9AU9NZcJe5BN2yVcjS0u";case"10":return"https://buy.stripe.com/5kQ6oId0b4cI6FRb5rcjS0v";case"11":return"https://buy.stripe.com/7sY4gA9NZgZue8j0qNcjS0w";default:return"https://buy.stripe.com/3cI9AU9NZcJe5BN2yVcjS0u"}},y=()=>{switch(e){case"9":return"https://buy.stripe.com/8x25kE1ht38EfcnehDcjS0x";case"10":return"https://buy.stripe.com/6oU28s3pB24A3tFb5rcjS0y";case"11":return"https://buy.stripe.com/7sY6oIe4f38E3tF1uRcjS0z";default:return"https://buy.stripe.com/8x25kE1ht38EfcnehDcjS0x"}},w=()=>{switch(e){case"9":return"https://buy.stripe.com/4gMfZi8JV7oU5BN8XjcjS0A";case"10":return"https://buy.stripe.com/00w9AUaS3dNi1lx7TfcjS0B";case"11":return"https://buy.stripe.com/9B6cN6f8j5gM2pB7TfcjS0D";default:return"https://buy.stripe.com/4gMfZi8JV7oU5BN8XjcjS0A"}},v=()=>{switch(e){case"9":return"https://buy.stripe.com/00w14o8JVcJe6FR6PbcjS0E";case"10":return"https://buy.stripe.com/fZu8wQd0bgZu8NZc9vcjS0F";case"11":return"https://buy.stripe.com/7sYbJ28JV10we8ja1ncjS0G";default:return"https://buy.stripe.com/00w14o8JVcJe6FR6PbcjS0E"}},I=O=>{switch(O){case"maths-science-english":window.location.href=M();break;case"maths-english":window.location.href=D();break;case"english-science":window.location.href=B();break;case"science-maths":window.location.href=Y();break;case"maths-science":window.location.href=x();break;default:Z()}},b=O=>{switch(O){case"science":window.location.href=oe();break;case"english-only":window.location.href=te();break;case"maths-only":window.location.href=E();break;case"chemistry":window.location.href=y();break;case"physics":window.location.href=w();break;case"biology":window.location.href=v();break;default:Z()}},W=()=>{const O="https://calendly.com/admin-myschola/30min";if(window.Calendly)window.Calendly.initPopupWidget({url:O,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0});else{const K=document.createElement("script");K.src="https://assets.calendly.com/assets/external/widget.js",K.async=!0,K.onload=()=>{window.Calendly&&window.Calendly.initPopupWidget({url:O,text:"Book Free Consultation",color:"#2563eb",textColor:"#ffffff",branding:!0})},document.body.appendChild(K)}},Z=()=>{KI(),navigate("/booking"),W()},V=[{id:"maths-science",name:"Maths + Science",subjects:"Mathematics & Science",price:"£120",period:"/month",billing:"Billed monthly",features:["16 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Bio, Chem & Phys","Year 11 Crash Course Included"]},{id:"maths-science-english",name:"Maths + Science + English",subjects:"Mathematics, Science & English",price:"£168",period:"/month",billing:"Billed monthly",popular:!0,features:["24 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Bio, Chem & Phys","Covers Lit & Lang","Year 11 Crash Course Included"]},{id:"maths-english",name:"Maths + English",subjects:"Mathematics & English",price:"£105",period:"/month",billing:"Billed monthly",features:["12 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Lit & Lang","Year 11 Crash Course Included"]},{id:"english-science",name:"English + Science",subjects:"English & Science",price:"£150",period:"/month",billing:"Billed monthly",features:["20 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Lit & Lang","Covers Bio, Chem & Phys","Year 11 Crash Course Included"]}],ie=[{id:"science",name:"Science",subjects:"Science (Bio, Chem, Phys)",price:"£89.99",period:"/month",billing:"Billed monthly, cancel anytime",features:["12 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Bio, Chem & Phys"]},{id:"english-only",name:"English Only",subjects:"English Language & Literature",price:"£89.99",period:"/month",billing:"Billed monthly, cancel anytime",features:["8 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers Lit & Lang"]},{id:"maths-only",name:"Maths Only",subjects:"Mathematics",price:"£59.99",period:"/month",billing:"Billed monthly, cancel anytime",features:["4 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback"]},{id:"chemistry",name:"Science - Chemistry",subjects:"Chemistry Only",price:"£59.99",period:"/month",billing:"Billed monthly, cancel anytime",features:["4 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers only Chemistry"]},{id:"physics",name:"Science - Physics",subjects:"Physics Only",price:"£59.99",period:"/month",billing:"Billed monthly, cancel anytime",features:["4 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers only Physics"]},{id:"biology",name:"Science - Biology",subjects:"Biology Only",price:"£59.99",period:"/month",billing:"Billed monthly, cancel anytime",features:["4 lessons per month","1-1 Strategy Call","Unlimited Platform Access","Assessments","Exam Mastermind Lessons","Detailed feedback","Covers only Biology"]}];return i.jsxs("div",{className:"min-h-screen bg-white",children:[i.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg",children:"Skip to main content"}),i.jsx("div",{className:"w-full bg-[#0B3D91] text-white text-center text-sm sm:text-base md:text-lg font-bold py-3 px-4 shadow-md",children:i.jsxs("span",{className:"inline-flex items-center gap-2 animate-pulse",children:[i.jsxs("span",{className:"relative flex h-3 w-3",children:[i.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),i.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-green-500"})]}),"Now Enrolling for New Cohort — Limited Spaces Available"]})}),i.jsxs("nav",{className:"sticky top-0 z-50 bg-white shadow-sm",role:"navigation","aria-label":"Main navigation",children:[i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center h-16",children:[i.jsxs("div",{className:"flex items-center",children:[i.jsx(Tt,{className:"h-8 w-8 text-blue-600","aria-hidden":"true"}),i.jsx("span",{className:"ml-2 text-2xl font-bold text-gray-900",children:"MySchola"})]}),i.jsx("div",{className:"hidden md:flex justify-center",children:i.jsxs("div",{className:"flex items-center space-x-8",children:[i.jsx("a",{href:"/",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),i.jsx("a",{href:"/#how-it-works",className:"text-gray-700 hover:text-blue-600 transition",children:"How It Works"}),i.jsx("a",{href:"/#subjects",className:"text-gray-700 hover:text-blue-600 transition",children:"Subjects"}),i.jsx("a",{href:"/#testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Testimonials"}),i.jsx("a",{href:"/#faq",className:"text-gray-700 hover:text-blue-600 transition",children:"FAQ"})]})}),i.jsxs("div",{className:"flex items-center justify-end",children:[i.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[i.jsx(he,{to:"/login",className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 inline-flex items-center","aria-label":"Log in",children:"Log In"}),i.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Pr,className:"bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2","aria-label":"Contact us on WhatsApp",children:[i.jsx(Ye,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})]}),i.jsx("button",{className:"md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded",onClick:()=>s(!t),"aria-label":t?"Close menu":"Open menu","aria-expanded":t,"aria-controls":"mobile-menu",children:t?i.jsx(yo,{className:"h-6 w-6","aria-hidden":"true"}):i.jsx(go,{className:"h-6 w-6","aria-hidden":"true"})})]})]})}),t&&i.jsx("div",{id:"mobile-menu",className:"md:hidden bg-white border-t",role:"menu","aria-label":"Mobile navigation menu",children:i.jsxs("div",{className:"px-4 pt-2 pb-3 space-y-1",children:[i.jsx("a",{href:"/",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Home"}),i.jsx("a",{href:"/#how-it-works",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"How It Works"}),i.jsx("a",{href:"/#subjects",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Subjects"}),i.jsx("a",{href:"/#testimonials",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"Testimonials"}),i.jsx("a",{href:"/#faq",className:"block px-3 py-2 text-gray-700 hover:bg-gray-50",role:"menuitem",children:"FAQ"}),i.jsx(he,{to:"/login",className:"block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",role:"menuitem",children:"Log In"}),i.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Pr,className:"block px-3 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2","aria-label":"Contact us on WhatsApp",role:"menuitem",children:i.jsxs("span",{className:"inline-flex items-center gap-2",children:[i.jsx(Ye,{className:"h-5 w-5","aria-hidden":"true"}),"Contact Us"]})})]})})]}),i.jsxs("main",{id:"main-content",children:[i.jsx("section",{className:"pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100","aria-label":"Package hero section",children:i.jsxs("div",{className:"max-w-7xl mx-auto text-center",children:[i.jsxs("p",{className:"text-lg sm:text-xl text-blue-600 font-semibold mb-4",children:["Year ",e," Course"]}),i.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight",children:["Choose Your ",i.jsx("span",{className:"text-blue-600",children:"Learning Package"})]}),i.jsxs("p",{className:"text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8",children:["Flexible pricing options tailored for Year ",e," students. All packages include expert tutoring, detailed feedback, and exam preparation."]}),i.jsxs(he,{to:"/courses",className:"inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition",children:[i.jsx(He,{className:"h-5 w-5"}),"Back to Year Selection"]})]})}),i.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8","aria-labelledby":"bundles-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsx("h2",{id:"bundles-heading",className:"text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12",children:"Bundle Packages"}),i.jsx("div",{className:"grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto",children:V.map((O,K)=>i.jsxs("div",{className:`relative rounded-2xl p-6 sm:p-8 flex flex-col ${O.popular?"bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl scale-105":"bg-white border-2 border-gray-200 text-gray-900 hover:border-blue-400"} transition-all duration-300`,children:[O.popular&&i.jsx("div",{className:"absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold",children:"MOST POPULAR"}),i.jsx("h3",{className:`text-xl font-bold mb-1 ${O.popular?"text-white":"text-gray-900"}`,children:O.name}),i.jsx("p",{className:`text-sm mb-4 ${O.popular?"text-blue-100":"text-gray-500"}`,children:O.subjects}),i.jsxs("div",{className:"mb-4",children:[i.jsx("span",{className:`text-4xl font-extrabold ${O.popular?"text-white":"text-gray-900"}`,children:O.price}),i.jsx("span",{className:`text-lg ${O.popular?"text-blue-200":"text-gray-500"}`,children:O.period})]}),i.jsx("p",{className:`text-sm mb-6 ${O.popular?"text-blue-100":"text-gray-500"}`,children:O.billing}),i.jsx("ul",{className:"space-y-3 mb-8 flex-grow",children:O.features.map((me,De)=>i.jsxs("li",{className:"flex items-start gap-3",children:[i.jsx(Oa,{className:`h-5 w-5 flex-shrink-0 mt-0.5 ${O.popular?"text-green-300":"text-green-500"}`}),i.jsx("span",{className:`text-sm ${O.popular?"text-blue-50":"text-gray-700"}`,children:me})]},De))}),i.jsx("button",{type:"button",onClick:()=>I(O.id),className:`w-full py-3 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px] touch-manipulation ${O.popular?"bg-white text-blue-600 hover:bg-gray-100 focus:ring-white":"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600"}`,children:"Enroll now"})]},K))})]})}),i.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8 bg-gray-50","aria-labelledby":"individual-heading",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsx("h2",{id:"individual-heading",className:"text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4",children:"Individual Subject Pricing"}),i.jsx("p",{className:"text-center text-gray-600 mb-12 max-w-2xl mx-auto",children:"Focus on a single subject with our dedicated individual packages."}),i.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:ie.map((O,K)=>i.jsxs("div",{className:"bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 flex flex-col",children:[i.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-1",children:O.name}),i.jsx("p",{className:"text-sm text-gray-500 mb-4",children:O.subjects}),i.jsxs("div",{className:"mb-4",children:[i.jsx("span",{className:"text-4xl font-extrabold text-gray-900",children:O.price}),i.jsx("span",{className:"text-lg text-gray-500",children:O.period})]}),i.jsx("p",{className:"text-sm text-gray-500 mb-6",children:O.billing}),i.jsx("ul",{className:"space-y-3 mb-8 flex-grow",children:O.features.map((me,De)=>i.jsxs("li",{className:"flex items-start gap-3",children:[i.jsx(Oa,{className:"h-5 w-5 text-green-500 flex-shrink-0 mt-0.5"}),i.jsx("span",{className:"text-sm text-gray-700",children:me})]},De))}),i.jsx("button",{type:"button",onClick:()=>O.id?b(O.id):Z,className:"w-full py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation",children:"Enroll now"})]},K))})]})}),i.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-white","aria-labelledby":"testimonials-heading",children:i.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[i.jsx("h2",{id:"testimonials-heading",className:"text-4xl font-bold mb-4 text-gray-900",children:"Testimonials from Students"}),i.jsx("p",{className:"text-gray-600 mb-12",children:"Short clips from students, with the subject and grade improvements below."}),i.jsxs("div",{className:"relative sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[i.jsx("button",{type:"button",onClick:P,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Previous testimonial videos",title:"Previous",children:i.jsx(He,{className:"h-5 w-5"})}),i.jsx("div",{className:"overflow-hidden sm:col-start-2",children:i.jsx("div",{className:`flex ${l?"transition-transform duration-500 ease-out":""} will-change-transform`,style:{transform:`translateX(-${r*(100/h)}%)`},children:g.map((O,K)=>{const me=Math.floor(h/2),De=K===r+me;return i.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/h}%`},children:i.jsxs("div",{className:`h-full rounded-2xl border border-slate-200 bg-white transition-all duration-500 ${De?"shadow-2xl scale-100 opacity-100":"shadow-md scale-95 opacity-60"}`,children:[i.jsx(QI,{src:O.src,className:"w-full h-auto rounded-t-2xl"}),i.jsxs("div",{className:"p-4 text-center",children:[i.jsx("p",{className:"text-lg font-semibold text-gray-900",children:O.name}),i.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[i.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:O.subjects.join(" / ")}),i.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:k(O.improvedBy)})]})]})]})},`${O.id}-${K}`)})})}),i.jsx("button",{type:"button",onClick:R,className:"hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Next testimonial videos",title:"Next",children:i.jsx(xt,{className:"h-5 w-5"})}),i.jsxs("div",{className:"flex items-center justify-between sm:hidden mt-4 px-2",children:[i.jsx("button",{type:"button",onClick:P,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Previous testimonial videos",children:i.jsx(He,{className:"h-5 w-5"})}),i.jsx("button",{type:"button",onClick:R,className:"flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2","aria-label":"Next testimonial videos",children:i.jsx(xt,{className:"h-5 w-5"})})]})]})]})})]}),i.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",role:"contentinfo",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center mb-4",children:[i.jsx(Tt,{className:"h-8 w-8 text-blue-400","aria-hidden":"true"}),i.jsx("span",{className:"ml-2 text-2xl font-bold",children:"MySchola"})]}),i.jsx("p",{className:"text-gray-400",children:"Expert GCSE tutoring for Years 9-11 via Zoom."})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Quick Links"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx(he,{to:"/",className:"hover:text-white transition",children:"Home"})}),i.jsx("li",{children:i.jsx(he,{to:"/courses",className:"hover:text-white transition",children:"Courses"})}),i.jsx("li",{children:i.jsx("a",{href:"/#how-it-works",className:"hover:text-white transition",children:"How It Works"})}),i.jsx("li",{children:i.jsx("a",{href:"/#testimonials",className:"hover:text-white transition",children:"Testimonials"})})]})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Legal"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"/#privacy-policy",className:"hover:text-white transition",children:"Privacy Policy"})}),i.jsx("li",{children:i.jsx("a",{href:"/#terms-of-service",className:"hover:text-white transition",children:"Refund & Cancellation Policy"})}),i.jsx("li",{children:i.jsx("a",{href:"/#faq",className:"hover:text-white transition",children:"FAQ"})})]})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold mb-4",children:"Contact"}),i.jsxs("ul",{className:"space-y-2 text-gray-400",role:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"mailto:support@myschola.uk",className:"hover:text-white transition",children:"support@myschola.uk"})}),i.jsx("li",{children:i.jsx("a",{href:"tel:+447344193804",className:"hover:text-white transition",children:"+44 7344 193804"})}),i.jsx("li",{children:i.jsxs("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Pr,className:"text-green-400 hover:text-green-300 transition inline-flex items-center gap-2",children:[i.jsx(Ye,{className:"h-4 w-4"}),"Contact Us on WhatsApp"]})}),i.jsx("li",{children:i.jsx("button",{type:"button",onClick:Z,className:"bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition inline-block mt-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-h-[44px] touch-manipulation text-sm sm:text-base","aria-label":"Book a consultation",children:"Book Consultation"})})]})]})]}),i.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:i.jsxs("p",{children:["© ",new Date().getFullYear()," MySchola. All rights reserved. Tutoring for Years 9-11."]})})]})}),i.jsx("a",{href:"https://wa.me/447344193804",target:"_blank",rel:"noopener noreferrer",onClick:Pr,className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 active:bg-green-700 transition-all duration-300 hover:scale-110 active:scale-95 z-50 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation","aria-label":"Contact us on WhatsApp",children:i.jsx(Ye,{className:"h-5 w-5 sm:h-6 sm:w-6"})})]})}function JI(n){var e;return((e=n==null?void 0:n.data)==null?void 0:e.event)&&n.data.event.indexOf("calendly")===0&&n.data.event==="calendly.event_scheduled"}function XI(){const{pathname:n}=un();return j.useEffect(()=>{Eg()},[n]),null}function ZI(){const n=Mt(),{pathname:e}=un();return j.useEffect(()=>{const t=s=>{JI(s)&&(e.startsWith("/webinar")?(typeof window<"u"&&window.sessionStorage.setItem("webinarRegistered","true"),n("/webinar/thanks",{replace:!0})):n("/booking-success",{replace:!0}))};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)},[n,e]),null}function eT(){return i.jsxs(ep,{children:[i.jsx(XI,{}),i.jsx(ZI,{}),i.jsxs(tp,{children:[i.jsx(Qe,{path:"/",element:i.jsx(gc,{})}),i.jsx(Qe,{path:"/booking",element:i.jsx(gc,{})}),i.jsx(Qe,{path:"/login",element:i.jsx(uI,{})}),i.jsx(Qe,{path:"/payment-success",element:i.jsx(SI,{})}),i.jsx(Qe,{path:"/booking-success",element:i.jsx(kI,{})}),i.jsx(Qe,{path:"/admin",element:i.jsx(NI,{})}),i.jsx(Qe,{path:"/admin/share-link",element:i.jsx(AI,{})}),i.jsx(Qe,{path:"/admin/homework-share-link",element:i.jsx(jI,{})}),i.jsx(Qe,{path:"/webinar",element:i.jsx(UI,{})}),i.jsx(Qe,{path:"/webinar/thanks",element:i.jsx(HI,{})}),i.jsx(Qe,{path:"/courses",element:i.jsx(GI,{})}),i.jsx(Qe,{path:"/package",element:i.jsx(YI,{})}),i.jsx(Qe,{path:"/app/dashboard",element:i.jsx(Pa,{children:i.jsx(pI,{})})}),i.jsx(Qe,{path:"/app/subject/:subjectId/recordings",element:i.jsx(Pa,{children:i.jsx(bI,{})})}),i.jsx(Qe,{path:"/app/subject/:subjectId/homework",element:i.jsx(Pa,{children:i.jsx(wI,{})})})]})]})}ip.createRoot(document.getElementById("root")).render(i.jsx(j.StrictMode,{children:i.jsx(eT,{})}));
