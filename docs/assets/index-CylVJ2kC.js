const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-B4h7b_40.js","assets/react-vendor-BQYH7YVU.js","assets/icons-R0S0JZyI.js","assets/Login-DLo4PFNX.js","assets/StudentDashboard-DR2h8B15.js","assets/studentAccess-D7Sg5SLE.js","assets/subjectMetadata-Cnhvryyy.js","assets/Recordings-BuD7rvPm.js","assets/Homework-CPXzsF49.js","assets/Admin-DNxO0lHR.js","assets/functionsClient-DtAzNZPh.js","assets/ShareLink-Bfe3FSs7.js","assets/HomeworkShareLink-BMVmaYke.js","assets/PaymentSuccess-BvQu6Mag.js","assets/PaymentConfirmation-CQfzR81z.js","assets/BookingSuccess-DsxD7wZc.js","assets/Booking-ClSdgOcz.js","assets/Courses-DEQVLXBI.js","assets/Package-CZx91rt3.js","assets/Timetable-Cjj9Emw_.js"])))=>i.map(i=>d[i]);
import{a as em,b as tm,r as B,u as xs,N as nm,L as Tc,B as rm,R as sm,c as he,d as im}from"./react-vendor-BQYH7YVU.js";import{S as om,C as am,U as cm,B as lm,T as um,A as vc,a as us,b as Ac,M as bc,V as hm,c as Rc}from"./icons-R0S0JZyI.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Pi={exports:{}},tr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc;function dm(){if(Sc)return tr;Sc=1;var n=em(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(l,u,d){var m,g={},w=null,S=null;d!==void 0&&(w=""+d),u.key!==void 0&&(w=""+u.key),u.ref!==void 0&&(S=u.ref);for(m in u)r.call(u,m)&&!i.hasOwnProperty(m)&&(g[m]=u[m]);if(l&&l.defaultProps)for(m in u=l.defaultProps,u)g[m]===void 0&&(g[m]=u[m]);return{$$typeof:e,type:l,key:w,ref:S,props:g,_owner:s.current}}return tr.Fragment=t,tr.jsx=a,tr.jsxs=a,tr}var Pc;function fm(){return Pc||(Pc=1,Pi.exports=dm()),Pi.exports}var E=fm(),Gr={},Cc;function mm(){if(Cc)return Gr;Cc=1;var n=tm();return Gr.createRoot=n.createRoot,Gr.hydrateRoot=n.hydrateRoot,Gr}var pm=mm();const gm="modulepreload",_m=function(n){return"/"+n},kc={},Pe=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");s=a(t.map(d=>{if(d=_m(d),d in kc)return;kc[d]=!0;const m=d.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${g}`))return;const w=document.createElement("link");if(w.rel=m?"stylesheet":gm,m||(w.as="script"),w.crossOrigin="",w.href=d,u&&w.setAttribute("nonce",u),document.head.appendChild(w),m)return new Promise((S,V)=>{w.addEventListener("load",S),w.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},ym=()=>{};var xc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},wm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Tu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=i>>2,g=(i&3)<<4|l>>4;let w=(l&15)<<2|d>>6,S=d&63;u||(S=64,a||(w=64)),r.push(t[m],t[g],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Iu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||g==null)throw new Em;const w=i<<2|l>>4;if(r.push(w),d!==64){const S=l<<4&240|d>>2;if(r.push(S),g!==64){const V=d<<6&192|g;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Em extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Im=function(n){const e=Iu(n);return Tu.encodeByteArray(e,!0)},hs=function(n){return Im(n).replace(/\./g,"")},vu=function(n){try{return Tu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vm=()=>Tm().__FIREBASE_DEFAULTS__,Am=()=>{if(typeof process>"u"||typeof xc>"u")return;const n=xc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},bm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&vu(n[1]);return e&&JSON.parse(e)},Ns=()=>{try{return ym()||vm()||Am()||bm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Au=n=>Ns()?.emulatorHosts?.[n],Rm=n=>{const e=Au(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},bu=()=>Ns()?.config,Ru=n=>Ns()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Pn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Su(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Pm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[hs(JSON.stringify(t)),hs(JSON.stringify(a)),""].join(".")}const cr={};function Cm(){const n={prod:[],emulator:[]};for(const e of Object.keys(cr))cr[e]?n.emulator.push(e):n.prod.push(e);return n}function km(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Nc=!1;function Pu(n,e){if(typeof window>"u"||typeof document>"u"||!Pn(window.location.host)||cr[n]===e||cr[n]||Nc)return;cr[n]=e;function t(w){return`__firebase__banner__${w}`}const r="__firebase__banner",i=Cm().prod.length>0;function a(){const w=document.getElementById(r);w&&w.remove()}function l(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function u(w,S){w.setAttribute("width","24"),w.setAttribute("id",S),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Nc=!0,a()},w}function m(w,S){w.setAttribute("id",S),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=km(r),S=t("text"),V=document.getElementById(S)||document.createElement("span"),L=t("learnmore"),x=document.getElementById(L)||document.createElement("a"),W=t("preprendIcon"),O=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const $=w.element;l($),m(x,L);const le=d();u(O,W),$.append(O,V,x,le),document.body.appendChild($)}i?(V.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Nm(){const n=Ns()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Dm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Om(){const n=Ae();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Lm(){return!Nm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ku(){try{return typeof indexedDB=="object"}catch{return!1}}function xu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}function Mm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="FirebaseError";class $e extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Fm,Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jt.prototype.create)}}class Jt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Um(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new $e(s,l,r)}}function Um(n,e){return n.replace(jm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const jm=/\{\$([^}]+)}/g;function Bm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ze(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Vc(i)&&Vc(a)){if(!Ze(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Vc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function rr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function qm(n,e){const t=new $m(n,e);return t.subscribe.bind(t)}class $m{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");zm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ci),s.error===void 0&&(s.error=Ci),s.complete===void 0&&(s.complete=Ci);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ci(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=1e3,Hm=2,Gm=14400*1e3,Km=.5;function Dc(n,e=Wm,t=Hm){const r=e*Math.pow(t,n),s=Math.round(Km*r*(Math.random()-.5)*2);return Math.min(Gm,r+s)}/**
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
 */function se(n){return n&&n._delegate?n._delegate:n}class je{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Sm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jm(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ym(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ym(n){return n===qt?void 0:n}function Jm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Qm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const Zm={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},ep=H.INFO,tp={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},np=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=tp[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vs{constructor(e){this.name=e,this._logLevel=ep,this._logHandler=np,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const rp=(n,e)=>e.some(t=>n instanceof t);let Oc,Lc;function sp(){return Oc||(Oc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ip(){return Lc||(Lc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nu=new WeakMap,Wi=new WeakMap,Vu=new WeakMap,ki=new WeakMap,Eo=new WeakMap;function op(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Tt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Nu.set(t,n)}).catch(()=>{}),Eo.set(e,n),e}function ap(n){if(Wi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Wi.set(n,e)}let Hi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Vu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Tt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cp(n){Hi=n(Hi)}function lp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(xi(this),e,...t);return Vu.set(r,e.sort?e.sort():[e]),Tt(r)}:ip().includes(n)?function(...e){return n.apply(xi(this),e),Tt(Nu.get(this))}:function(...e){return Tt(n.apply(xi(this),e))}}function up(n){return typeof n=="function"?lp(n):(n instanceof IDBTransaction&&ap(n),rp(n,sp())?new Proxy(n,Hi):n)}function Tt(n){if(n instanceof IDBRequest)return op(n);if(ki.has(n))return ki.get(n);const e=up(n);return e!==n&&(ki.set(n,e),Eo.set(e,n)),e}const xi=n=>Eo.get(n);function Du(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Tt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Tt(a.result),u.oldVersion,u.newVersion,Tt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const hp=["get","getKey","getAll","getAllKeys","count"],dp=["put","add","delete","clear"],Ni=new Map;function Mc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ni.get(e))return Ni.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=dp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hp.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return Ni.set(e,i),i}cp(n=>({...n,get:(e,t,r)=>Mc(e,t)||n.get(e,t,r),has:(e,t)=>!!Mc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(mp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function mp(n){return n.getComponent()?.type==="VERSION"}const Gi="@firebase/app",Fc="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new Vs("@firebase/app"),pp="@firebase/app-compat",gp="@firebase/analytics-compat",_p="@firebase/analytics",yp="@firebase/app-check-compat",wp="@firebase/app-check",Ep="@firebase/auth",Ip="@firebase/auth-compat",Tp="@firebase/database",vp="@firebase/data-connect",Ap="@firebase/database-compat",bp="@firebase/functions",Rp="@firebase/functions-compat",Sp="@firebase/installations",Pp="@firebase/installations-compat",Cp="@firebase/messaging",kp="@firebase/messaging-compat",xp="@firebase/performance",Np="@firebase/performance-compat",Vp="@firebase/remote-config",Dp="@firebase/remote-config-compat",Op="@firebase/storage",Lp="@firebase/storage-compat",Mp="@firebase/firestore",Fp="@firebase/ai",Up="@firebase/firestore-compat",jp="firebase",Bp="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="[DEFAULT]",qp={[Gi]:"fire-core",[pp]:"fire-core-compat",[_p]:"fire-analytics",[gp]:"fire-analytics-compat",[wp]:"fire-app-check",[yp]:"fire-app-check-compat",[Ep]:"fire-auth",[Ip]:"fire-auth-compat",[Tp]:"fire-rtdb",[vp]:"fire-data-connect",[Ap]:"fire-rtdb-compat",[bp]:"fire-fn",[Rp]:"fire-fn-compat",[Sp]:"fire-iid",[Pp]:"fire-iid-compat",[Cp]:"fire-fcm",[kp]:"fire-fcm-compat",[xp]:"fire-perf",[Np]:"fire-perf-compat",[Vp]:"fire-rc",[Dp]:"fire-rc-compat",[Op]:"fire-gcs",[Lp]:"fire-gcs-compat",[Mp]:"fire-fst",[Up]:"fire-fst-compat",[Fp]:"fire-vertex","fire-js":"fire-js",[jp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new Map,$p=new Map,Qi=new Map;function Uc(n,e){try{n.container.addComponent(e)}catch(t){it.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function et(n){const e=n.name;if(Qi.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;Qi.set(e,n);for(const t of ds.values())Uc(t,n);for(const t of $p.values())Uc(t,n);return!0}function Xt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Me(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vt=new Jt("app","Firebase",zp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=Bp;function Ou(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ki,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw vt.create("bad-app-name",{appName:String(s)});if(t||(t=bu()),!t)throw vt.create("no-options");const i=ds.get(s);if(i){if(Ze(t,i.options)&&Ze(r,i.config))return i;throw vt.create("duplicate-app",{appName:s})}const a=new Xm(s);for(const u of Qi.values())a.addComponent(u);const l=new Wp(t,r,a);return ds.set(s,l),l}function Io(n=Ki){const e=ds.get(n);if(!e&&n===Ki&&bu())return Ou();if(!e)throw vt.create("no-app",{appName:n});return e}function Le(n,e,t){let r=qp[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(a.join(" "));return}et(new je(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Hp="firebase-heartbeat-database",Gp=1,mr="firebase-heartbeat-store";let Vi=null;function Lu(){return Vi||(Vi=Du(Hp,Gp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(mr)}catch(t){console.warn(t)}}}}).catch(n=>{throw vt.create("idb-open",{originalErrorMessage:n.message})})),Vi}async function Kp(n){try{const t=(await Lu()).transaction(mr),r=await t.objectStore(mr).get(Mu(n));return await t.done,r}catch(e){if(e instanceof $e)it.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:e?.message});it.warn(t.message)}}}async function jc(n,e){try{const r=(await Lu()).transaction(mr,"readwrite");await r.objectStore(mr).put(e,Mu(n)),await r.done}catch(t){if(t instanceof $e)it.warn(t.message);else{const r=vt.create("idb-set",{originalErrorMessage:t?.message});it.warn(r.message)}}}function Mu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Qp=1024,Yp=30;class Jp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Yp){const s=eg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){it.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bc(),{heartbeatsToSend:t,unsentEntries:r}=Xp(this._heartbeatsCache.heartbeats),s=hs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return it.warn(e),""}}}function Bc(){return new Date().toISOString().substring(0,10)}function Xp(n,e=Qp){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),qc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),qc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Zp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ku()?xu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Kp(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function qc(n){return hs(JSON.stringify({version:2,heartbeats:n})).length}function eg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n){et(new je("platform-logger",e=>new fp(e),"PRIVATE")),et(new je("heartbeat",e=>new Jp(e),"PRIVATE")),Le(Gi,Fc,n),Le(Gi,Fc,"esm2020"),Le("fire-js","")}tg("");function Fu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ng=Fu,Uu=new Jt("auth","Firebase",Fu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new Vs("@firebase/auth");function rg(n,...e){fs.logLevel<=H.WARN&&fs.warn(`Auth (${Cn}): ${n}`,...e)}function es(n,...e){fs.logLevel<=H.ERROR&&fs.error(`Auth (${Cn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n,...e){throw To(n,...e)}function Ge(n,...e){return To(n,...e)}function ju(n,e,t){const r={...ng(),[e]:t};return new Jt("auth","Firebase",r).create(e,{appName:n.name})}function At(n){return ju(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function To(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Uu.create(n,...e)}function F(n,e,...t){if(!n)throw To(e,...t)}function nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw es(e),new Error(e)}function ot(n,e){n||nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){return typeof self<"u"&&self.location?.href||""}function sg(){return $c()==="http:"||$c()==="https:"}function $c(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sg()||Cu()||"connection"in navigator)?navigator.onLine:!0}function og(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t){this.shortDelay=e,this.longDelay=t,ot(t>e,"Short delay should be less than long delay!"),this.isMobile=xm()||Dm()}get(){return ig()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(n,e){ot(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lg=new Ar(3e4,6e4);function Zt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Vt(n,e,t,r,s={}){return qu(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=vr({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return Vm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Pn(n.emulatorConfig.host)&&(d.credentials="include"),Bu.fetch()(await $u(n,n.config.apiHost,t,l),d)})}async function qu(n,e,t){n._canInitEmulator=!1;const r={...ag,...e};try{const s=new hg(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Kr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Kr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Kr(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ju(n,m,d);Be(n,m)}}catch(s){if(s instanceof $e)throw s;Be(n,"network-request-failed",{message:String(s)})}}async function Ds(n,e,t,r,s={}){const i=await Vt(n,e,t,r,s);return"mfaPendingCredential"in i&&Be(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function $u(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?vo(n.config,s):`${n.config.apiScheme}://${s}`;return cg.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function ug(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),lg.get())})}}function Kr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ge(n,e,r);return s.customData._tokenResponse=t,s}function zc(n){return n!==void 0&&n.enterprise!==void 0}class dg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ug(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fg(n,e){return Vt(n,"GET","/v2/recaptchaConfig",Zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(n,e){return Vt(n,"POST","/v1/accounts:delete",e)}async function ms(n,e){return Vt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pg(n,e=!1){const t=se(n),r=await t.getIdToken(e),s=Ao(r);F(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:lr(Di(s.auth_time)),issuedAtTime:lr(Di(s.iat)),expirationTime:lr(Di(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Di(n){return Number(n)*1e3}function Ao(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return es("JWT malformed, contained fewer than 3 sections"),null;try{const s=vu(t);return s?JSON.parse(s):(es("Failed to decode base64 JWT payload"),null)}catch(s){return es("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Wc(n){const e=Ao(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof $e&&gg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function gg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=lr(this.lastLoginAt),this.creationTime=lr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(n){const e=n.auth,t=await n.getIdToken(),r=await pr(n,ms(e,{idToken:t}));F(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?zu(s.providerUserInfo):[],a=wg(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,d=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ji(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function yg(n){const e=se(n);await ps(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wg(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zu(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(n,e){const t=await qu(n,{},async()=>{const r=vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await $u(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Pn(n.emulatorConfig.host)&&(u.credentials="include"),Bu.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ig(n,e){return Vt(n,"POST","/v2/accounts:revokeToken",Zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=Wc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Eg(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new fn;return r&&(F(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fn,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Fe{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new _g(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ji(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await pr(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pg(this,e)}reload(){return yg(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ps(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(At(this.auth));const e=await this.getIdToken();return await pr(this,mg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:g,emailVerified:w,isAnonymous:S,providerData:V,stsTokenManager:L}=t;F(g&&L,e,"internal-error");const x=fn.fromJSON(this.name,L);F(typeof g=="string",e,"internal-error"),gt(r,e.name),gt(s,e.name),F(typeof w=="boolean",e,"internal-error"),F(typeof S=="boolean",e,"internal-error"),gt(i,e.name),gt(a,e.name),gt(l,e.name),gt(u,e.name),gt(d,e.name),gt(m,e.name);const W=new Fe({uid:g,auth:e,email:s,emailVerified:w,displayName:r,isAnonymous:S,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:x,createdAt:d,lastLoginAt:m});return V&&Array.isArray(V)&&(W.providerData=V.map(O=>({...O}))),u&&(W._redirectEventId=u),W}static async _fromIdTokenResponse(e,t,r=!1){const s=new fn;s.updateFromServerResponse(t);const i=new Fe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ps(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];F(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?zu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new fn;l.updateFromIdToken(r);const u=new Fe({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ji(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=new Map;function rt(n){ot(n instanceof Function,"Expected a class definition");let e=Hc.get(n);return e?(ot(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Hc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Wu.type="NONE";const Gc=Wu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(n,e,t){return`firebase:${n}:${e}:${t}`}class mn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ts(this.userKey,s.apiKey,i),this.fullPersistenceKey=ts("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ms(this.auth,{idToken:e}).catch(()=>{});return t?Fe._fromGetAccountInfoResponse(this.auth,t,e):null}return Fe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new mn(rt(Gc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||rt(Gc);const a=ts(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const m=await d._get(a);if(m){let g;if(typeof m=="string"){const w=await ms(e,{idToken:m}).catch(()=>{});if(!w)break;g=await Fe._fromGetAccountInfoResponse(e,w,m)}else g=Fe._fromJSON(e,m);d!==i&&(l=g),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new mn(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new mn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ju(e))return"Blackberry";if(Xu(e))return"Webos";if(Gu(e))return"Safari";if((e.includes("chrome/")||Ku(e))&&!e.includes("edge/"))return"Chrome";if(Yu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Hu(n=Ae()){return/firefox\//i.test(n)}function Gu(n=Ae()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ku(n=Ae()){return/crios\//i.test(n)}function Qu(n=Ae()){return/iemobile/i.test(n)}function Yu(n=Ae()){return/android/i.test(n)}function Ju(n=Ae()){return/blackberry/i.test(n)}function Xu(n=Ae()){return/webos/i.test(n)}function bo(n=Ae()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Tg(n=Ae()){return bo(n)&&!!window.navigator?.standalone}function vg(){return Om()&&document.documentMode===10}function Zu(n=Ae()){return bo(n)||Yu(n)||Xu(n)||Ju(n)||/windows phone/i.test(n)||Qu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(n,e=[]){let t;switch(n){case"Browser":t=Kc(Ae());break;case"Worker":t=`${Kc(Ae())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Cn}/${r}`}/**
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
 */class Ag{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function bg(n,e={}){return Vt(n,"GET","/v2/passwordPolicy",Zt(n,e))}/**
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
 */const Rg=6;class Sg{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Rg,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qc(this),this.idTokenSubscription=new Qc(this),this.beforeStateQueue=new Ag(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await mn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ms(this,{idToken:e}),r=await Fe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Me(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ps(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=og()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(At(this));const t=e?se(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(At(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(At(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bg(this),t=new Sg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Jt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ig(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rt(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await mn.create(this,[rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&rg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function kn(n){return se(n)}class Qc{constructor(e){this.auth=e,this.observer=null,this.addObserver=qm(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cg(n){Os=n}function th(n){return Os.loadJS(n)}function kg(){return Os.recaptchaEnterpriseScript}function xg(){return Os.gapiScript}function Ng(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Vg{constructor(){this.enterprise=new Dg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Dg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Og="recaptcha-enterprise",nh="NO_RECAPTCHA";class Lg{constructor(e){this.type=Og,this.auth=kn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{fg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new dg(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;zc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(nh)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Vg().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&zc(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=kg();u.length!==0&&(u+=l),th(u).then(()=>{s(l,i,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function Yc(n,e,t,r=!1,s=!1){const i=new Lg(n);let a;if(s)a=nh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Jc(n,e,t,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Yc(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Yc(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(n,e){const t=Xt(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ze(i,e??{}))return s;Be(s,"already-initialized")}return t.initialize({options:e})}function Fg(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(rt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Ug(n,e,t){const r=kn(n);F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=rh(e),{host:a,port:l}=jg(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},m=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){F(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),F(Ze(d,r.config.emulator)&&Ze(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,Pn(a)?(Su(`${i}//${a}${u}`),Pu("Auth",!0)):Bg()}function rh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function jg(n){const e=rh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Xc(a)}}}function Xc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Bg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,t){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function qg(n,e){return Vt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(n,e){return Ds(n,"POST","/v1/accounts:signInWithPassword",Zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zg(n,e){return Ds(n,"POST","/v1/accounts:signInWithEmailLink",Zt(n,e))}async function Wg(n,e){return Ds(n,"POST","/v1/accounts:signInWithEmailLink",Zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Ro{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new gr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new gr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jc(e,t,"signInWithPassword",$g);case"emailLink":return zg(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jc(e,r,"signUpPassword",qg);case"emailLink":return Wg(e,{idToken:t,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(n,e){return Ds(n,"POST","/v1/accounts:signInWithIdp",Zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="http://localhost";class Ht extends Ro{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Ht(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return pn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,pn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pn(e,t)}buildRequest(){const e={requestUri:Hg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Kg(n){const e=nr(rr(n)).link,t=e?nr(rr(e)).deep_link_id:null,r=nr(rr(n)).deep_link_id;return(r?nr(rr(r)).link:null)||r||t||e||n}class So{constructor(e){const t=nr(rr(e)),r=t.apiKey??null,s=t.oobCode??null,i=Gg(t.mode??null);F(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Kg(e);try{return new So(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.providerId=xn.PROVIDER_ID}static credential(e,t){return gr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=So.parseLink(t);return F(r,"argument-error"),gr._fromEmailAndCode(e,r.code,r.tenantId)}}xn.PROVIDER_ID="password";xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends sh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends br{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends br{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ht._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return yt.credential(t,r)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends br{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.GITHUB_SIGN_IN_METHOD="github.com";wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends br{constructor(){super("twitter.com")}static credential(e,t){return Ht._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Et.credential(t,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Fe._fromIdTokenResponse(e,r,s),a=Zc(r);return new wn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Zc(r);return new wn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Zc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends $e{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,gs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new gs(e,t,r,s)}}function ih(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?gs._fromErrorAndOperation(n,i,e,r):i})}async function Qg(n,e,t=!1){const r=await pr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return wn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(n,e,t=!1){const{auth:r}=n;if(Me(r.app))return Promise.reject(At(r));const s="reauthenticate";try{const i=await pr(n,ih(r,s,e,n),t);F(i.idToken,r,"internal-error");const a=Ao(i.idToken);F(a,r,"internal-error");const{sub:l}=a;return F(n.uid===l,r,"user-mismatch"),wn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Be(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oh(n,e,t=!1){if(Me(n.app))return Promise.reject(At(n));const r="signIn",s=await ih(n,r,e),i=await wn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Jg(n,e){return oh(kn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(n){const e=kn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function jv(n,e,t){return Me(n.app)?Promise.reject(At(n)):Jg(se(n),xn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Xg(n),r})}function Zg(n,e,t,r){return se(n).onIdTokenChanged(e,t,r)}function e_(n,e,t){return se(n).beforeAuthStateChanged(e,t)}function t_(n,e,t,r){return se(n).onAuthStateChanged(e,t,r)}function Bv(n){return se(n).signOut()}const _s="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_s,"1"),this.storage.removeItem(_s),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=1e3,r_=10;class ch extends ah{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);vg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,r_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},n_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ch.type="LOCAL";const s_=ch;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends ah{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lh.type="SESSION";const uh=lh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ls(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await i_(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ls.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=Po("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(w.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function a_(n){Ke().location.href=n}/**
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
 */function hh(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function c_(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function l_(){return navigator?.serviceWorker?.controller||null}function u_(){return hh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="firebaseLocalStorageDb",h_=1,ys="firebaseLocalStorage",fh="fbase_key";class Rr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ms(n,e){return n.transaction([ys],e?"readwrite":"readonly").objectStore(ys)}function d_(){const n=indexedDB.deleteDatabase(dh);return new Rr(n).toPromise()}function Xi(){const n=indexedDB.open(dh,h_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ys,{keyPath:fh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ys)?e(r):(r.close(),await d_(),e(await Xi()))})})}async function el(n,e,t){const r=Ms(n,!0).put({[fh]:e,value:t});return new Rr(r).toPromise()}async function f_(n,e){const t=Ms(n,!1).get(e),r=await new Rr(t).toPromise();return r===void 0?null:r.value}function tl(n,e){const t=Ms(n,!0).delete(e);return new Rr(t).toPromise()}const m_=800,p_=3;class mh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>p_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ls._getInstance(u_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await c_(),!this.activeServiceWorker)return;this.sender=new o_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||l_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xi();return await el(e,_s,"1"),await tl(e,_s),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>el(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>f_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ms(s,!1).getAll();return new Rr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),m_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mh.type="LOCAL";const g_=mh;new Ar(3e4,6e4);/**
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
 */function __(n,e){return e?rt(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends Ro{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function y_(n){return oh(n.auth,new Co(n),n.bypassAuthState)}function w_(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Yg(t,new Co(n),n.bypassAuthState)}async function E_(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Qg(t,new Co(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return y_;case"linkViaPopup":case"linkViaRedirect":return E_;case"reauthViaPopup":case"reauthViaRedirect":return w_;default:Be(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=new Ar(2e3,1e4);class dn extends ph{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=Po();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,I_.get())};e()}}dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="pendingRedirect",ns=new Map;class v_ extends ph{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ns.get(this.auth._key());if(!e){try{const r=await A_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ns.set(this.auth._key(),e)}return this.bypassAuthState||ns.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function A_(n,e){const t=S_(e),r=R_(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function b_(n,e){ns.set(n._key(),e)}function R_(n){return rt(n._redirectPersistence)}function S_(n){return ts(T_,n.config.apiKey,n.name)}async function P_(n,e,t=!1){if(Me(n.app))return Promise.reject(At(n));const r=kn(n),s=__(r,e),a=await new v_(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=600*1e3;class k_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!x_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!gh(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Ge(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=C_&&this.cachedEventUids.clear(),this.cachedEventUids.has(nl(e))}saveEventToCache(e){this.cachedEventUids.add(nl(e)),this.lastProcessedEventTime=Date.now()}}function nl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function x_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N_(n,e={}){return Vt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,D_=/^https?/;async function O_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await N_(n);for(const t of e)try{if(L_(t))return}catch{}Be(n,"unauthorized-domain")}function L_(n){const e=Yi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!D_.test(t))return!1;if(V_.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const M_=new Ar(3e4,6e4);function rl(){const n=Ke().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function F_(n){return new Promise((e,t)=>{function r(){rl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rl(),t(Ge(n,"network-request-failed"))},timeout:M_.get()})}if(Ke().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ke().gapi?.load)r();else{const s=Ng("iframefcb");return Ke()[s]=()=>{gapi.load?r():t(Ge(n,"network-request-failed"))},th(`${xg()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw rs=null,e})}let rs=null;function U_(n){return rs=rs||F_(n),rs}/**
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
 */const j_=new Ar(5e3,15e3),B_="__/auth/iframe",q_="emulator/auth/iframe",$_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},z_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function W_(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?vo(e,q_):`https://${n.config.authDomain}/${B_}`,r={apiKey:e.apiKey,appName:n.name,v:Cn},s=z_.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${vr(r).slice(1)}`}async function H_(n){const e=await U_(n),t=Ke().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:W_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ge(n,"network-request-failed"),l=Ke().setTimeout(()=>{i(a)},j_.get());function u(){Ke().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const G_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},K_=500,Q_=600,Y_="_blank",J_="http://localhost";class sl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function X_(n,e,t,r=K_,s=Q_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...G_,width:r.toString(),height:s.toString(),top:i,left:a},d=Ae().toLowerCase();t&&(l=Ku(d)?Y_:t),Hu(d)&&(e=e||J_,u.scrollbars="yes");const m=Object.entries(u).reduce((w,[S,V])=>`${w}${S}=${V},`,"");if(Tg(d)&&l!=="_self")return Z_(e||"",l),new sl(null);const g=window.open(e||"",l,m);F(g,n,"popup-blocked");try{g.focus()}catch{}return new sl(g)}function Z_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const ey="__/auth/handler",ty="emulator/auth/handler",ny=encodeURIComponent("fac");async function il(n,e,t,r,s,i){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Cn,eventId:s};if(e instanceof sh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Bm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))a[m]=g}if(e instanceof br){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await n._getAppCheckToken(),d=u?`#${ny}=${encodeURIComponent(u)}`:"";return`${ry(n)}?${vr(l).slice(1)}${d}`}function ry({config:n}){return n.emulator?vo(n,ty):`https://${n.authDomain}/${ey}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="webStorageSupport";class sy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uh,this._completeRedirectFn=P_,this._overrideRedirectResult=b_}async _openPopup(e,t,r,s){ot(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await il(e,t,r,Yi(),s);return X_(e,i,Po())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await il(e,t,r,Yi(),s);return a_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await H_(e),r=new k_(e);return t.register("authEvent",s=>(F(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oi,{type:Oi},s=>{const i=s?.[0]?.[Oi];i!==void 0&&t(!!i),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=O_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Zu()||Gu()||bo()}}const iy=sy;var ol="@firebase/auth",al="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cy(n){et(new je("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eh(n)},d=new Pg(r,s,i,u);return Fg(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),et(new je("auth-internal",e=>{const t=kn(e.getProvider("auth").getImmediate());return(r=>new oy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Le(ol,al,ay(n)),Le(ol,al,"esm2020")}/**
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
 */const ly=300,uy=Ru("authIdTokenMaxAge")||ly;let cl=null;const hy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>uy)return;const s=t?.token;cl!==s&&(cl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dy(n=Io()){const e=Xt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Mg(n,{popupRedirectResolver:iy,persistence:[g_,s_,uh]}),r=Ru("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=hy(i.toString());e_(t,a,()=>a(t.currentUser)),Zg(t,l=>a(l))}}const s=Au("auth");return s&&Ug(t,`http://${s}`),t}function fy(){return document.getElementsByTagName("head")?.[0]??document}Cg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ge("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",fy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cy("Browser");var my="firebase",py="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le(my,py,"app");var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bt,_h;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,p){function y(){}y.prototype=p.prototype,T.F=p.prototype,T.prototype=new y,T.prototype.constructor=T,T.D=function(v,I,b){for(var _=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)_[Ce-2]=arguments[Ce];return p.prototype[I].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,y){y||(y=0);const v=Array(16);if(typeof p=="string")for(var I=0;I<16;++I)v[I]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(I=0;I<16;++I)v[I]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=T.g[0],y=T.g[1],I=T.g[2];let b=T.g[3],_;_=p+(b^y&(I^b))+v[0]+3614090360&4294967295,p=y+(_<<7&4294967295|_>>>25),_=b+(I^p&(y^I))+v[1]+3905402710&4294967295,b=p+(_<<12&4294967295|_>>>20),_=I+(y^b&(p^y))+v[2]+606105819&4294967295,I=b+(_<<17&4294967295|_>>>15),_=y+(p^I&(b^p))+v[3]+3250441966&4294967295,y=I+(_<<22&4294967295|_>>>10),_=p+(b^y&(I^b))+v[4]+4118548399&4294967295,p=y+(_<<7&4294967295|_>>>25),_=b+(I^p&(y^I))+v[5]+1200080426&4294967295,b=p+(_<<12&4294967295|_>>>20),_=I+(y^b&(p^y))+v[6]+2821735955&4294967295,I=b+(_<<17&4294967295|_>>>15),_=y+(p^I&(b^p))+v[7]+4249261313&4294967295,y=I+(_<<22&4294967295|_>>>10),_=p+(b^y&(I^b))+v[8]+1770035416&4294967295,p=y+(_<<7&4294967295|_>>>25),_=b+(I^p&(y^I))+v[9]+2336552879&4294967295,b=p+(_<<12&4294967295|_>>>20),_=I+(y^b&(p^y))+v[10]+4294925233&4294967295,I=b+(_<<17&4294967295|_>>>15),_=y+(p^I&(b^p))+v[11]+2304563134&4294967295,y=I+(_<<22&4294967295|_>>>10),_=p+(b^y&(I^b))+v[12]+1804603682&4294967295,p=y+(_<<7&4294967295|_>>>25),_=b+(I^p&(y^I))+v[13]+4254626195&4294967295,b=p+(_<<12&4294967295|_>>>20),_=I+(y^b&(p^y))+v[14]+2792965006&4294967295,I=b+(_<<17&4294967295|_>>>15),_=y+(p^I&(b^p))+v[15]+1236535329&4294967295,y=I+(_<<22&4294967295|_>>>10),_=p+(I^b&(y^I))+v[1]+4129170786&4294967295,p=y+(_<<5&4294967295|_>>>27),_=b+(y^I&(p^y))+v[6]+3225465664&4294967295,b=p+(_<<9&4294967295|_>>>23),_=I+(p^y&(b^p))+v[11]+643717713&4294967295,I=b+(_<<14&4294967295|_>>>18),_=y+(b^p&(I^b))+v[0]+3921069994&4294967295,y=I+(_<<20&4294967295|_>>>12),_=p+(I^b&(y^I))+v[5]+3593408605&4294967295,p=y+(_<<5&4294967295|_>>>27),_=b+(y^I&(p^y))+v[10]+38016083&4294967295,b=p+(_<<9&4294967295|_>>>23),_=I+(p^y&(b^p))+v[15]+3634488961&4294967295,I=b+(_<<14&4294967295|_>>>18),_=y+(b^p&(I^b))+v[4]+3889429448&4294967295,y=I+(_<<20&4294967295|_>>>12),_=p+(I^b&(y^I))+v[9]+568446438&4294967295,p=y+(_<<5&4294967295|_>>>27),_=b+(y^I&(p^y))+v[14]+3275163606&4294967295,b=p+(_<<9&4294967295|_>>>23),_=I+(p^y&(b^p))+v[3]+4107603335&4294967295,I=b+(_<<14&4294967295|_>>>18),_=y+(b^p&(I^b))+v[8]+1163531501&4294967295,y=I+(_<<20&4294967295|_>>>12),_=p+(I^b&(y^I))+v[13]+2850285829&4294967295,p=y+(_<<5&4294967295|_>>>27),_=b+(y^I&(p^y))+v[2]+4243563512&4294967295,b=p+(_<<9&4294967295|_>>>23),_=I+(p^y&(b^p))+v[7]+1735328473&4294967295,I=b+(_<<14&4294967295|_>>>18),_=y+(b^p&(I^b))+v[12]+2368359562&4294967295,y=I+(_<<20&4294967295|_>>>12),_=p+(y^I^b)+v[5]+4294588738&4294967295,p=y+(_<<4&4294967295|_>>>28),_=b+(p^y^I)+v[8]+2272392833&4294967295,b=p+(_<<11&4294967295|_>>>21),_=I+(b^p^y)+v[11]+1839030562&4294967295,I=b+(_<<16&4294967295|_>>>16),_=y+(I^b^p)+v[14]+4259657740&4294967295,y=I+(_<<23&4294967295|_>>>9),_=p+(y^I^b)+v[1]+2763975236&4294967295,p=y+(_<<4&4294967295|_>>>28),_=b+(p^y^I)+v[4]+1272893353&4294967295,b=p+(_<<11&4294967295|_>>>21),_=I+(b^p^y)+v[7]+4139469664&4294967295,I=b+(_<<16&4294967295|_>>>16),_=y+(I^b^p)+v[10]+3200236656&4294967295,y=I+(_<<23&4294967295|_>>>9),_=p+(y^I^b)+v[13]+681279174&4294967295,p=y+(_<<4&4294967295|_>>>28),_=b+(p^y^I)+v[0]+3936430074&4294967295,b=p+(_<<11&4294967295|_>>>21),_=I+(b^p^y)+v[3]+3572445317&4294967295,I=b+(_<<16&4294967295|_>>>16),_=y+(I^b^p)+v[6]+76029189&4294967295,y=I+(_<<23&4294967295|_>>>9),_=p+(y^I^b)+v[9]+3654602809&4294967295,p=y+(_<<4&4294967295|_>>>28),_=b+(p^y^I)+v[12]+3873151461&4294967295,b=p+(_<<11&4294967295|_>>>21),_=I+(b^p^y)+v[15]+530742520&4294967295,I=b+(_<<16&4294967295|_>>>16),_=y+(I^b^p)+v[2]+3299628645&4294967295,y=I+(_<<23&4294967295|_>>>9),_=p+(I^(y|~b))+v[0]+4096336452&4294967295,p=y+(_<<6&4294967295|_>>>26),_=b+(y^(p|~I))+v[7]+1126891415&4294967295,b=p+(_<<10&4294967295|_>>>22),_=I+(p^(b|~y))+v[14]+2878612391&4294967295,I=b+(_<<15&4294967295|_>>>17),_=y+(b^(I|~p))+v[5]+4237533241&4294967295,y=I+(_<<21&4294967295|_>>>11),_=p+(I^(y|~b))+v[12]+1700485571&4294967295,p=y+(_<<6&4294967295|_>>>26),_=b+(y^(p|~I))+v[3]+2399980690&4294967295,b=p+(_<<10&4294967295|_>>>22),_=I+(p^(b|~y))+v[10]+4293915773&4294967295,I=b+(_<<15&4294967295|_>>>17),_=y+(b^(I|~p))+v[1]+2240044497&4294967295,y=I+(_<<21&4294967295|_>>>11),_=p+(I^(y|~b))+v[8]+1873313359&4294967295,p=y+(_<<6&4294967295|_>>>26),_=b+(y^(p|~I))+v[15]+4264355552&4294967295,b=p+(_<<10&4294967295|_>>>22),_=I+(p^(b|~y))+v[6]+2734768916&4294967295,I=b+(_<<15&4294967295|_>>>17),_=y+(b^(I|~p))+v[13]+1309151649&4294967295,y=I+(_<<21&4294967295|_>>>11),_=p+(I^(y|~b))+v[4]+4149444226&4294967295,p=y+(_<<6&4294967295|_>>>26),_=b+(y^(p|~I))+v[11]+3174756917&4294967295,b=p+(_<<10&4294967295|_>>>22),_=I+(p^(b|~y))+v[2]+718787259&4294967295,I=b+(_<<15&4294967295|_>>>17),_=y+(b^(I|~p))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.v=function(T,p){p===void 0&&(p=T.length);const y=p-this.blockSize,v=this.C;let I=this.h,b=0;for(;b<p;){if(I==0)for(;b<=y;)s(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<p;)if(v[I++]=T.charCodeAt(b++),I==this.blockSize){s(this,v),I=0;break}}else for(;b<p;)if(v[I++]=T[b++],I==this.blockSize){s(this,v),I=0;break}}this.h=I,this.o+=p},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;p=this.o*8;for(var y=T.length-8;y<T.length;++y)T[y]=p&255,p/=256;for(this.v(T),T=Array(16),p=0,y=0;y<4;++y)for(let v=0;v<32;v+=8)T[p++]=this.g[y]>>>v&255;return T};function i(T,p){var y=l;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=p(T)}function a(T,p){this.h=p;const y=[];let v=!0;for(let I=T.length-1;I>=0;I--){const b=T[I]|0;v&&b==p||(y[I]=b,v=!1)}this.g=y}var l={};function u(T){return-128<=T&&T<128?i(T,function(p){return new a([p|0],p<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(T<0)return x(d(-T));const p=[];let y=1;for(let v=0;T>=y;v++)p[v]=T/y|0,y*=4294967296;return new a(p,0)}function m(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return x(m(T.substring(1),p));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(p,8));let v=g;for(let b=0;b<T.length;b+=8){var I=Math.min(8,T.length-b);const _=parseInt(T.substring(b,b+I),p);I<8?(I=d(Math.pow(p,I)),v=v.j(I).add(d(_))):(v=v.j(y),v=v.add(d(_)))}return v}var g=u(0),w=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(L(this))return-x(this).m();let T=0,p=1;for(let y=0;y<this.g.length;y++){const v=this.i(y);T+=(v>=0?v:4294967296+v)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(V(this))return"0";if(L(this))return"-"+x(this).toString(T);const p=d(Math.pow(T,6));var y=this;let v="";for(;;){const I=le(y,p).g;y=W(y,I.j(p));let b=((y.g.length>0?y.g[0]:y.h)>>>0).toString(T);if(y=I,V(y))return b+v;for(;b.length<6;)b="0"+b;v=b+v}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function V(T){if(T.h!=0)return!1;for(let p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function L(T){return T.h==-1}n.l=function(T){return T=W(this,T),L(T)?-1:V(T)?0:1};function x(T){const p=T.g.length,y=[];for(let v=0;v<p;v++)y[v]=~T.g[v];return new a(y,~T.h).add(w)}n.abs=function(){return L(this)?x(this):this},n.add=function(T){const p=Math.max(this.g.length,T.g.length),y=[];let v=0;for(let I=0;I<=p;I++){let b=v+(this.i(I)&65535)+(T.i(I)&65535),_=(b>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);v=_>>>16,b&=65535,_&=65535,y[I]=_<<16|b}return new a(y,y[y.length-1]&-2147483648?-1:0)};function W(T,p){return T.add(x(p))}n.j=function(T){if(V(this)||V(T))return g;if(L(this))return L(T)?x(this).j(x(T)):x(x(this).j(T));if(L(T))return x(this.j(x(T)));if(this.l(S)<0&&T.l(S)<0)return d(this.m()*T.m());const p=this.g.length+T.g.length,y=[];for(var v=0;v<2*p;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(let I=0;I<T.g.length;I++){const b=this.i(v)>>>16,_=this.i(v)&65535,Ce=T.i(I)>>>16,Lt=T.i(I)&65535;y[2*v+2*I]+=_*Lt,O(y,2*v+2*I),y[2*v+2*I+1]+=b*Lt,O(y,2*v+2*I+1),y[2*v+2*I+1]+=_*Ce,O(y,2*v+2*I+1),y[2*v+2*I+2]+=b*Ce,O(y,2*v+2*I+2)}for(T=0;T<p;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=p;T<2*p;T++)y[T]=0;return new a(y,0)};function O(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function $(T,p){this.g=T,this.h=p}function le(T,p){if(V(p))throw Error("division by zero");if(V(T))return new $(g,g);if(L(T))return p=le(x(T),p),new $(x(p.g),x(p.h));if(L(p))return p=le(T,x(p)),new $(x(p.g),p.h);if(T.g.length>30){if(L(T)||L(p))throw Error("slowDivide_ only works with positive integers.");for(var y=w,v=p;v.l(T)<=0;)y=we(y),v=we(v);var I=fe(y,1),b=fe(v,1);for(v=fe(v,2),y=fe(y,2);!V(v);){var _=b.add(v);_.l(T)<=0&&(I=I.add(y),b=_),v=fe(v,1),y=fe(y,1)}return p=W(T,I.j(p)),new $(I,p)}for(I=g;T.l(p)>=0;){for(y=Math.max(1,Math.floor(T.m()/p.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),b=d(y),_=b.j(p);L(_)||_.l(T)>0;)y-=v,b=d(y),_=b.j(p);V(b)&&(b=w),I=I.add(b),T=W(T,_)}return new $(I,T)}n.B=function(T){return le(this,T).h},n.and=function(T){const p=Math.max(this.g.length,T.g.length),y=[];for(let v=0;v<p;v++)y[v]=this.i(v)&T.i(v);return new a(y,this.h&T.h)},n.or=function(T){const p=Math.max(this.g.length,T.g.length),y=[];for(let v=0;v<p;v++)y[v]=this.i(v)|T.i(v);return new a(y,this.h|T.h)},n.xor=function(T){const p=Math.max(this.g.length,T.g.length),y=[];for(let v=0;v<p;v++)y[v]=this.i(v)^T.i(v);return new a(y,this.h^T.h)};function we(T){const p=T.g.length+1,y=[];for(let v=0;v<p;v++)y[v]=T.i(v)<<1|T.i(v-1)>>>31;return new a(y,T.h)}function fe(T,p){const y=p>>5;p%=32;const v=T.g.length-y,I=[];for(let b=0;b<v;b++)I[b]=p>0?T.i(b+y)>>>p|T.i(b+y+1)<<32-p:T.i(b+y);return new a(I,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,_h=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,bt=a}).apply(typeof ll<"u"?ll:typeof self<"u"?self:typeof window<"u"?window:{});var Qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yh,sr,wh,ss,Zi,Eh,Ih,Th;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qr=="object"&&Qr];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var A=o[f];if(!(A in h))break e;h=h[A]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var h=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&h.push([f,c[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,h){return o.call.apply(o.bind,arguments)}function d(o,c,h){return d=u,d.apply(null,arguments)}function m(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function g(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(f,A,R){for(var k=Array(arguments.length-2),z=2;z<arguments.length;z++)k[z-2]=arguments[z];return c.prototype[A].apply(f,k)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const c=o.length;if(c>0){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function V(o,c){for(let f=1;f<arguments.length;f++){const A=arguments[f];var h=typeof A;if(h=h!="object"?h:A?Array.isArray(A)?"array":h:"null",h=="array"||h=="object"&&typeof A.length=="number"){h=o.length||0;const R=A.length||0;o.length=h+R;for(let k=0;k<R;k++)o[h+k]=A[k]}else o.push(A)}}class L{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function x(o){a.setTimeout(()=>{throw o},0)}function W(){var o=T;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class O{constructor(){this.h=this.g=null}add(c,h){const f=$.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var $=new L(()=>new le,o=>o.reset());class le{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let we,fe=!1,T=new O,p=()=>{const o=Promise.resolve(void 0);we=()=>{o.then(y)}};function y(){for(var o;o=W();){try{o.h.call(o.g)}catch(h){x(h)}var c=$;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}fe=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o})();function _(o){return/^[\s\xa0]*$/.test(o)}function Ce(o,c){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}g(Ce,I),Ce.prototype.init=function(o,c){const h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ce.Z.h.call(this)},Ce.prototype.h=function(){Ce.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Lt="closure_listenable_"+(Math.random()*1e6|0),Tf=0;function vf(o,c,h,f,A){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=A,this.key=++Tf,this.da=this.fa=!1}function Nr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Vr(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function Af(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function Ia(o){const c={};for(const h in o)c[h]=o[h];return c}const Ta="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function va(o,c){let h,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(h in f)o[h]=f[h];for(let R=0;R<Ta.length;R++)h=Ta[R],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function Dr(o){this.src=o,this.g={},this.h=0}Dr.prototype.add=function(o,c,h,f,A){const R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);const k=ii(o,c,f,A);return k>-1?(c=o[k],h||(c.fa=!1)):(c=new vf(c,this.src,R,!!f,A),c.fa=h,o.push(c)),c};function si(o,c){const h=c.type;if(h in o.g){var f=o.g[h],A=Array.prototype.indexOf.call(f,c,void 0),R;(R=A>=0)&&Array.prototype.splice.call(f,A,1),R&&(Nr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ii(o,c,h,f){for(let A=0;A<o.length;++A){const R=o[A];if(!R.da&&R.listener==c&&R.capture==!!h&&R.ha==f)return A}return-1}var oi="closure_lm_"+(Math.random()*1e6|0),ai={};function Aa(o,c,h,f,A){if(Array.isArray(c)){for(let R=0;R<c.length;R++)Aa(o,c[R],h,f,A);return null}return h=Sa(h),o&&o[Lt]?o.J(c,h,l(f)?!!f.capture:!1,A):bf(o,c,h,!1,f,A)}function bf(o,c,h,f,A,R){if(!c)throw Error("Invalid event type");const k=l(A)?!!A.capture:!!A;let z=li(o);if(z||(o[oi]=z=new Dr(o)),h=z.add(c,h,f,k,R),h.proxy)return h;if(f=Rf(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)b||(A=k),A===void 0&&(A=!1),o.addEventListener(c.toString(),f,A);else if(o.attachEvent)o.attachEvent(Ra(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Rf(){function o(h){return c.call(o.src,o.listener,h)}const c=Sf;return o}function ba(o,c,h,f,A){if(Array.isArray(c))for(var R=0;R<c.length;R++)ba(o,c[R],h,f,A);else f=l(f)?!!f.capture:!!f,h=Sa(h),o&&o[Lt]?(o=o.i,R=String(c).toString(),R in o.g&&(c=o.g[R],h=ii(c,h,f,A),h>-1&&(Nr(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[R],o.h--)))):o&&(o=li(o))&&(c=o.g[c.toString()],o=-1,c&&(o=ii(c,h,f,A)),(h=o>-1?c[o]:null)&&ci(h))}function ci(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Lt])si(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(Ra(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=li(c))?(si(h,o),h.h==0&&(h.src=null,c[oi]=null)):Nr(o)}}}function Ra(o){return o in ai?ai[o]:ai[o]="on"+o}function Sf(o,c){if(o.da)o=!0;else{c=new Ce(c,this);const h=o.listener,f=o.ha||o.src;o.fa&&ci(o),o=h.call(f,c)}return o}function li(o){return o=o[oi],o instanceof Dr?o:null}var ui="__closure_events_fn_"+(Math.random()*1e9>>>0);function Sa(o){return typeof o=="function"?o:(o[ui]||(o[ui]=function(c){return o.handleEvent(c)}),o[ui])}function Ee(){v.call(this),this.i=new Dr(this),this.M=this,this.G=null}g(Ee,v),Ee.prototype[Lt]=!0,Ee.prototype.removeEventListener=function(o,c,h,f){ba(this,o,c,h,f)};function be(o,c){var h,f=o.G;if(f)for(h=[];f;f=f.G)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new I(c,o);else if(c instanceof I)c.target=c.target||o;else{var A=c;c=new I(f,o),va(c,A)}A=!0;let R,k;if(h)for(k=h.length-1;k>=0;k--)R=c.g=h[k],A=Or(R,f,!0,c)&&A;if(R=c.g=o,A=Or(R,f,!0,c)&&A,A=Or(R,f,!1,c)&&A,h)for(k=0;k<h.length;k++)R=c.g=h[k],A=Or(R,f,!1,c)&&A}Ee.prototype.N=function(){if(Ee.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let f=0;f<h.length;f++)Nr(h[f]);delete o.g[c],o.h--}}this.G=null},Ee.prototype.J=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Ee.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Or(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let A=!0;for(let R=0;R<c.length;++R){const k=c[R];if(k&&!k.da&&k.capture==h){const z=k.listener,ue=k.ha||k.src;k.fa&&si(o.i,k),A=z.call(ue,f)!==!1&&A}}return A&&!f.defaultPrevented}function Pf(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function Pa(o){o.g=Pf(()=>{o.g=null,o.i&&(o.i=!1,Pa(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Cf extends v{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Pa(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Un(o){v.call(this),this.h=o,this.g={}}g(Un,v);var Ca=[];function ka(o){Vr(o.g,function(c,h){this.g.hasOwnProperty(h)&&ci(c)},o),o.g={}}Un.prototype.N=function(){Un.Z.N.call(this),ka(this)},Un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hi=a.JSON.stringify,kf=a.JSON.parse,xf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function xa(){}function Na(){}var jn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function di(){I.call(this,"d")}g(di,I);function fi(){I.call(this,"c")}g(fi,I);var Mt={},Va=null;function Lr(){return Va=Va||new Ee}Mt.Ia="serverreachability";function Da(o){I.call(this,Mt.Ia,o)}g(Da,I);function Bn(o){const c=Lr();be(c,new Da(c))}Mt.STAT_EVENT="statevent";function Oa(o,c){I.call(this,Mt.STAT_EVENT,o),this.stat=c}g(Oa,I);function Re(o){const c=Lr();be(c,new Oa(c,o))}Mt.Ja="timingevent";function La(o,c){I.call(this,Mt.Ja,o),this.size=c}g(La,I);function qn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function $n(){this.g=!0}$n.prototype.ua=function(){this.g=!1};function Nf(o,c,h,f,A,R){o.info(function(){if(o.g)if(R){var k="",z=R.split("&");for(let J=0;J<z.length;J++){var ue=z[J].split("=");if(ue.length>1){const me=ue[0];ue=ue[1];const We=me.split("_");k=We.length>=2&&We[1]=="type"?k+(me+"="+ue+"&"):k+(me+"=redacted&")}}}else k=null;else k=R;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+h+`
`+k})}function Vf(o,c,h,f,A,R,k){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+h+`
`+R+" "+k})}function sn(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Of(o,h)+(f?" "+f:"")})}function Df(o,c){o.info(function(){return"TIMEOUT: "+c})}$n.prototype.info=function(){};function Of(o,c){if(!o.g)return c;if(!c)return null;try{const R=JSON.parse(c);if(R){for(o=0;o<R.length;o++)if(Array.isArray(R[o])){var h=R[o];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var A=f[0];if(A!="noop"&&A!="stop"&&A!="close")for(let k=1;k<f.length;k++)f[k]=""}}}}return hi(R)}catch{return c}}var Mr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ma={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Fa;function mi(){}g(mi,xa),mi.prototype.g=function(){return new XMLHttpRequest},Fa=new mi;function zn(o){return encodeURIComponent(String(o))}function Lf(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function ut(o,c,h,f){this.j=o,this.i=c,this.l=h,this.S=f||1,this.V=new Un(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ua}function Ua(){this.i=null,this.g="",this.h=!1}var ja={},pi={};function gi(o,c,h){o.M=1,o.A=Ur(ze(c)),o.u=h,o.R=!0,Ba(o,null)}function Ba(o,c){o.F=Date.now(),Fr(o),o.B=ze(o.A);var h=o.B,f=o.S;Array.isArray(f)||(f=[String(f)]),ec(h.i,"t",f),o.C=0,h=o.j.L,o.h=new Ua,o.g=yc(o.j,h?c:null,!o.u),o.P>0&&(o.O=new Cf(d(o.Y,o,o.g),o.P)),c=o.V,h=o.g,f=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(Ca[0]=A.toString()),A=Ca);for(let R=0;R<A.length;R++){const k=Aa(h,A[R],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=o.J?Ia(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Bn(),Nf(o.i,o.v,o.B,o.l,o.S,o.u)}ut.prototype.ba=function(o){o=o.target;const c=this.O;c&&ft(o)==3?c.j():this.Y(o)},ut.prototype.Y=function(o){try{if(o==this.g)e:{const z=ft(this.g),ue=this.g.ya(),J=this.g.ca();if(!(z<3)&&(z!=3||this.g&&(this.h.h||this.g.la()||ac(this.g)))){this.K||z!=4||ue==7||(ue==8||J<=0?Bn(3):Bn(2)),_i(this);var c=this.g.ca();this.X=c;var h=Mf(this);if(this.o=c==200,Vf(this.i,this.v,this.B,this.l,this.S,z,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,A=this.g;if((f=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(f)){var R=f;break t}}R=null}if(o=R)sn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,yi(this,o);else{this.o=!1,this.m=3,Re(12),Ft(this),Wn(this);break e}}if(this.R){o=!0;let me;for(;!this.K&&this.C<h.length;)if(me=Ff(this,h),me==pi){z==4&&(this.m=4,Re(14),o=!1),sn(this.i,this.l,null,"[Incomplete Response]");break}else if(me==ja){this.m=4,Re(15),sn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else sn(this.i,this.l,me,null),yi(this,me);if(qa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),z!=4||h.length!=0||this.h.h||(this.m=1,Re(16),o=!1),this.o=this.o&&o,!o)sn(this.i,this.l,h,"[Invalid Chunked Response]"),Ft(this),Wn(this);else if(h.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Ri(k),k.P=!0,Re(11))}}else sn(this.i,this.l,h,null),yi(this,h);z==4&&Ft(this),this.o&&!this.K&&(z==4?mc(this.j,this):(this.o=!1,Fr(this)))}else Xf(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Re(12)):(this.m=0,Re(13)),Ft(this),Wn(this)}}}catch{}finally{}};function Mf(o){if(!qa(o))return o.g.la();const c=ac(o.g);if(c==="")return"";let h="";const f=c.length,A=ft(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Ft(o),Wn(o),"";o.h.i=new a.TextDecoder}for(let R=0;R<f;R++)o.h.h=!0,h+=o.h.i.decode(c[R],{stream:!(A&&R==f-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function qa(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Ff(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?pi:(h=Number(c.substring(h,f)),isNaN(h)?ja:(f+=1,f+h>c.length?pi:(c=c.slice(f,f+h),o.C=f+h,c)))}ut.prototype.cancel=function(){this.K=!0,Ft(this)};function Fr(o){o.T=Date.now()+o.H,$a(o,o.H)}function $a(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=qn(d(o.aa,o),c)}function _i(o){o.D&&(a.clearTimeout(o.D),o.D=null)}ut.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Df(this.i,this.B),this.M!=2&&(Bn(),Re(17)),Ft(this),this.m=2,Wn(this)):$a(this,this.T-o)};function Wn(o){o.j.I==0||o.K||mc(o.j,o)}function Ft(o){_i(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,ka(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function yi(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||wi(h.h,o))){if(!o.L&&wi(h.h,o)&&h.I==3){try{var f=h.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)zr(h),qr(h);else break e;bi(h),Re(18)}}else h.xa=A[1],0<h.xa-h.K&&A[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=qn(d(h.Va,h),6e3));Ha(h.h)<=1&&h.ta&&(h.ta=void 0)}else jt(h,11)}else if((o.L||h.g==o)&&zr(h),!_(c))for(A=h.Ba.g.parse(c),c=0;c<A.length;c++){let J=A[c];const me=J[0];if(!(me<=h.K))if(h.K=me,J=J[1],h.I==2)if(J[0]=="c"){h.M=J[1],h.ba=J[2];const We=J[3];We!=null&&(h.ka=We,h.j.info("VER="+h.ka));const Bt=J[4];Bt!=null&&(h.za=Bt,h.j.info("SVER="+h.za));const mt=J[5];mt!=null&&typeof mt=="number"&&mt>0&&(f=1.5*mt,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const pt=o.g;if(pt){const Hr=pt.g?pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hr){var R=f.h;R.g||Hr.indexOf("spdy")==-1&&Hr.indexOf("quic")==-1&&Hr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ei(R,R.h),R.h=null))}if(f.G){const Si=pt.g?pt.g.getResponseHeader("X-HTTP-Session-Id"):null;Si&&(f.wa=Si,Z(f.J,f.G,Si))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var k=o;if(f.na=_c(f,f.L?f.ba:null,f.W),k.L){Ga(f.h,k);var z=k,ue=f.O;ue&&(z.H=ue),z.D&&(_i(z),Fr(z)),f.g=k}else dc(f);h.i.length>0&&$r(h)}else J[0]!="stop"&&J[0]!="close"||jt(h,7);else h.I==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?jt(h,7):Ai(h):J[0]!="noop"&&h.l&&h.l.qa(J),h.A=0)}}Bn(4)}catch{}}var Uf=class{constructor(o,c){this.g=o,this.map=c}};function za(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Wa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ha(o){return o.h?1:o.g?o.g.size:0}function wi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ei(o,c){o.g?o.g.add(c):o.h=c}function Ga(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}za.prototype.cancel=function(){if(this.i=Ka(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ka(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return S(o.i)}var Qa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jf(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const f=o[h].indexOf("=");let A,R=null;f>=0?(A=o[h].substring(0,f),R=o[h].substring(f+1)):A=o[h],c(A,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ht(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof ht?(this.l=o.l,Hn(this,o.j),this.o=o.o,this.g=o.g,Gn(this,o.u),this.h=o.h,Ii(this,tc(o.i)),this.m=o.m):o&&(c=String(o).match(Qa))?(this.l=!1,Hn(this,c[1]||"",!0),this.o=Kn(c[2]||""),this.g=Kn(c[3]||"",!0),Gn(this,c[4]),this.h=Kn(c[5]||"",!0),Ii(this,c[6]||"",!0),this.m=Kn(c[7]||"")):(this.l=!1,this.i=new Yn(null,this.l))}ht.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Qn(c,Ya,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Qn(c,Ya,!0),"@"),o.push(zn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Qn(h,h.charAt(0)=="/"?$f:qf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Qn(h,Wf)),o.join("")},ht.prototype.resolve=function(o){const c=ze(this);let h=!!o.j;h?Hn(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var f=o.h;if(h)Gn(c,o.u);else if(h=!!o.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var A=c.h.lastIndexOf("/");A!=-1&&(f=c.h.slice(0,A+1)+f)}if(A=f,A==".."||A==".")f="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){f=A.lastIndexOf("/",0)==0,A=A.split("/");const R=[];for(let k=0;k<A.length;){const z=A[k++];z=="."?f&&k==A.length&&R.push(""):z==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),f&&k==A.length&&R.push("")):(R.push(z),f=!0)}f=R.join("/")}else f=A}return h?c.h=f:h=o.i.toString()!=="",h?Ii(c,tc(o.i)):h=!!o.m,h&&(c.m=o.m),c};function ze(o){return new ht(o)}function Hn(o,c,h){o.j=h?Kn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Gn(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function Ii(o,c,h){c instanceof Yn?(o.i=c,Hf(o.i,o.l)):(h||(c=Qn(c,zf)),o.i=new Yn(c,o.l))}function Z(o,c,h){o.i.set(c,h)}function Ur(o){return Z(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Kn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Qn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Bf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Bf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ya=/[#\/\?@]/g,qf=/[#\?:]/g,$f=/[#\?]/g,zf=/[#\?@]/g,Wf=/#/g;function Yn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Ut(o){o.g||(o.g=new Map,o.h=0,o.i&&jf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Yn.prototype,n.add=function(o,c){Ut(this),this.i=null,o=on(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Ja(o,c){Ut(o),c=on(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Xa(o,c){return Ut(o),c=on(o,c),o.g.has(c)}n.forEach=function(o,c){Ut(this),this.g.forEach(function(h,f){h.forEach(function(A){o.call(c,A,f,this)},this)},this)};function Za(o,c){Ut(o);let h=[];if(typeof c=="string")Xa(o,c)&&(h=h.concat(o.g.get(on(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}n.set=function(o,c){return Ut(this),this.i=null,o=on(this,o),Xa(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=Za(this,o),o.length>0?String(o[0]):c):c};function ec(o,c,h){Ja(o,c),h.length>0&&(o.i=null,o.g.set(on(o,c),S(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var h=c[f];const A=zn(h);h=Za(this,h);for(let R=0;R<h.length;R++){let k=A;h[R]!==""&&(k+="="+zn(h[R])),o.push(k)}}return this.i=o.join("&")};function tc(o){const c=new Yn;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function on(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Hf(o,c){c&&!o.j&&(Ut(o),o.i=null,o.g.forEach(function(h,f){const A=f.toLowerCase();f!=A&&(Ja(this,f),ec(this,A,h))},o)),o.j=c}function Gf(o,c){const h=new $n;if(a.Image){const f=new Image;f.onload=m(dt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=m(dt,h,"TestLoadImage: error",!1,c,f),f.onabort=m(dt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=m(dt,h,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function Kf(o,c){const h=new $n,f=new AbortController,A=setTimeout(()=>{f.abort(),dt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(R=>{clearTimeout(A),R.ok?dt(h,"TestPingServer: ok",!0,c):dt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),dt(h,"TestPingServer: error",!1,c)})}function dt(o,c,h,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(h)}catch{}}function Qf(){this.g=new xf}function Ti(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Ti,xa),Ti.prototype.g=function(){return new jr(this.i,this.h)};function jr(o,c){Ee.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(jr,Ee),n=jr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,Xn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Jn(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Xn(this)),this.g&&(this.readyState=3,Xn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;nc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function nc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Jn(this):Xn(this),this.readyState==3&&nc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Jn(this))},n.Na=function(o){this.g&&(this.response=o,Jn(this))},n.ga=function(){this.g&&Jn(this)};function Jn(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Xn(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Xn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(jr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function rc(o){let c="";return Vr(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function vi(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=rc(h),typeof o=="string"?h!=null&&zn(h):Z(o,c,h))}function ne(o){Ee.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ne,Ee);var Yf=/^https?$/i,Jf=["POST","PUT"];n=ne.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Fa.g(),this.g.onreadystatechange=w(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){sc(this,R);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)h.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Jf,c,void 0)>=0)||f||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,k]of h)this.g.setRequestHeader(R,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(R){sc(this,R)}};function sc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,ic(o),Br(o)}function ic(o){o.A||(o.A=!0,be(o,"complete"),be(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,be(this,"complete"),be(this,"abort"),Br(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Br(this,!0)),ne.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?oc(this):this.Xa())},n.Xa=function(){oc(this)};function oc(o){if(o.h&&typeof i<"u"){if(o.v&&ft(o)==4)setTimeout(o.Ca.bind(o),0);else if(be(o,"readystatechange"),ft(o)==4){o.h=!1;try{const R=o.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=R===0){let k=String(o.D).match(Qa)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),f=!Yf.test(k?k.toLowerCase():"")}h=f}if(h)be(o,"complete"),be(o,"success");else{o.o=6;try{var A=ft(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",ic(o)}}finally{Br(o)}}}}function Br(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||be(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ft(o){return o.g?o.g.readyState:0}n.ca=function(){try{return ft(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),kf(c)}};function ac(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Xf(o){const c={};o=(o.g&&ft(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(_(o[f]))continue;var h=Lf(o[f]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=c[A]||[];c[A]=R,R.push(h)}Af(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function cc(o){this.za=0,this.i=[],this.j=new $n,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Zn("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Zn("baseRetryDelayMs",5e3,o),this.Za=Zn("retryDelaySeedMs",1e4,o),this.Ta=Zn("forwardChannelMaxRetries",2,o),this.va=Zn("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new za(o&&o.concurrentRequestLimit),this.Ba=new Qf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=cc.prototype,n.ka=8,n.I=1,n.connect=function(o,c,h,f){Re(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=_c(this,null,this.W),$r(this)};function Ai(o){if(lc(o),o.I==3){var c=o.V++,h=ze(o.J);if(Z(h,"SID",o.M),Z(h,"RID",c),Z(h,"TYPE","terminate"),er(o,h),c=new ut(o,o.j,c),c.M=2,c.A=Ur(ze(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=yc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Fr(c)}gc(o)}function qr(o){o.g&&(Ri(o),o.g.cancel(),o.g=null)}function lc(o){qr(o),o.v&&(a.clearTimeout(o.v),o.v=null),zr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function $r(o){if(!Wa(o.h)&&!o.m){o.m=!0;var c=o.Ea;we||p(),fe||(we(),fe=!0),T.add(c,o),o.D=0}}function Zf(o,c){return Ha(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=qn(d(o.Ea,o,c),pc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new ut(this,this.j,o);let R=this.o;if(this.U&&(R?(R=Ia(R),va(R,this.U)):R=this.U),this.u!==null||this.R||(A.J=R,R=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=hc(this,A,c),h=ze(this.J),Z(h,"RID",o),Z(h,"CVER",22),this.G&&Z(h,"X-HTTP-Session-Id",this.G),er(this,h),R&&(this.R?c="headers="+zn(rc(R))+"&"+c:this.u&&vi(h,this.u,R)),Ei(this.h,A),this.Ra&&Z(h,"TYPE","init"),this.S?(Z(h,"$req",c),Z(h,"SID","null"),A.U=!0,gi(A,h,null)):gi(A,h,c),this.I=2}}else this.I==3&&(o?uc(this,o):this.i.length==0||Wa(this.h)||uc(this))};function uc(o,c){var h;c?h=c.l:h=o.V++;const f=ze(o.J);Z(f,"SID",o.M),Z(f,"RID",h),Z(f,"AID",o.K),er(o,f),o.u&&o.o&&vi(f,o.u,o.o),h=new ut(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=hc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Ei(o.h,h),gi(h,f,c)}function er(o,c){o.H&&Vr(o.H,function(h,f){Z(c,f,h)}),o.l&&Vr({},function(h,f){Z(c,f,h)})}function hc(o,c,h){h=Math.min(o.i.length,h);const f=o.l?d(o.l.Ka,o.l,o):null;e:{var A=o.i;let z=-1;for(;;){const ue=["count="+h];z==-1?h>0?(z=A[0].g,ue.push("ofs="+z)):z=0:ue.push("ofs="+z);let J=!0;for(let me=0;me<h;me++){var R=A[me].g;const We=A[me].map;if(R-=z,R<0)z=Math.max(0,A[me].g-100),J=!1;else try{R="req"+R+"_"||"";try{var k=We instanceof Map?We:Object.entries(We);for(const[Bt,mt]of k){let pt=mt;l(mt)&&(pt=hi(mt)),ue.push(R+Bt+"="+encodeURIComponent(pt))}}catch(Bt){throw ue.push(R+"type="+encodeURIComponent("_badmap")),Bt}}catch{f&&f(We)}}if(J){k=ue.join("&");break e}}k=void 0}return o=o.i.splice(0,h),c.G=o,k}function dc(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;we||p(),fe||(we(),fe=!0),T.add(c,o),o.A=0}}function bi(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=qn(d(o.Da,o),pc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,fc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=qn(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Re(10),qr(this),fc(this))};function Ri(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function fc(o){o.g=new ut(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=ze(o.na);Z(c,"RID","rpc"),Z(c,"SID",o.M),Z(c,"AID",o.K),Z(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&Z(c,"TO",o.ia),Z(c,"TYPE","xmlhttp"),er(o,c),o.u&&o.o&&vi(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Ur(ze(c)),h.u=null,h.R=!0,Ba(h,o)}n.Va=function(){this.C!=null&&(this.C=null,qr(this),bi(this),Re(19))};function zr(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function mc(o,c){var h=null;if(o.g==c){zr(o),Ri(o),o.g=null;var f=2}else if(wi(o.h,c))h=c.G,Ga(o.h,c),f=1;else return;if(o.I!=0){if(c.o)if(f==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var A=o.D;f=Lr(),be(f,new La(f,h)),$r(o)}else dc(o);else if(A=c.m,A==3||A==0&&c.X>0||!(f==1&&Zf(o,c)||f==2&&bi(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),A){case 1:jt(o,5);break;case 4:jt(o,10);break;case 3:jt(o,6);break;default:jt(o,2)}}}function pc(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function jt(o,c){if(o.j.info("Error code "+c),c==2){var h=d(o.bb,o),f=o.Ua;const A=!f;f=new ht(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Hn(f,"https"),Ur(f),A?Gf(f.toString(),h):Kf(f.toString(),h)}else Re(2);o.I=0,o.l&&o.l.pa(c),gc(o),lc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function gc(o){if(o.I=0,o.ja=[],o.l){const c=Ka(o.h);(c.length!=0||o.i.length!=0)&&(V(o.ja,c),V(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function _c(o,c,h){var f=h instanceof ht?ze(h):new ht(h);if(f.g!="")c&&(f.g=c+"."+f.g),Gn(f,f.u);else{var A=a.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;const R=new ht(null);f&&Hn(R,f),c&&(R.g=c),A&&Gn(R,A),h&&(R.h=h),f=R}return h=o.G,c=o.wa,h&&c&&Z(f,h,c),Z(f,"VER",o.ka),er(o,f),f}function yc(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new ne(new Ti({ab:h})):new ne(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wc(){}n=wc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Wr(){}Wr.prototype.g=function(o,c){return new Ne(o,c)};function Ne(o,c){Ee.call(this),this.g=new cc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!_(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new an(this)}g(Ne,Ee),Ne.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ne.prototype.close=function(){Ai(this.g)},Ne.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=hi(o),o=h);c.i.push(new Uf(c.Ya++,o)),c.I==3&&$r(c)},Ne.prototype.N=function(){this.g.l=null,delete this.j,Ai(this.g),delete this.g,Ne.Z.N.call(this)};function Ec(o){di.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}g(Ec,di);function Ic(){fi.call(this),this.status=1}g(Ic,fi);function an(o){this.g=o}g(an,wc),an.prototype.ra=function(){be(this.g,"a")},an.prototype.qa=function(o){be(this.g,new Ec(o))},an.prototype.pa=function(o){be(this.g,new Ic)},an.prototype.oa=function(){be(this.g,"b")},Wr.prototype.createWebChannel=Wr.prototype.g,Ne.prototype.send=Ne.prototype.o,Ne.prototype.open=Ne.prototype.m,Ne.prototype.close=Ne.prototype.close,Th=function(){return new Wr},Ih=function(){return Lr()},Eh=Mt,Zi={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Mr.NO_ERROR=0,Mr.TIMEOUT=8,Mr.HTTP_ERROR=6,ss=Mr,Ma.COMPLETE="complete",wh=Ma,Na.EventType=jn,jn.OPEN="a",jn.CLOSE="b",jn.ERROR="c",jn.MESSAGE="d",Ee.prototype.listen=Ee.prototype.J,sr=Na,ne.prototype.listenOnce=ne.prototype.K,ne.prototype.getLastError=ne.prototype.Ha,ne.prototype.getLastErrorCode=ne.prototype.ya,ne.prototype.getStatus=ne.prototype.ca,ne.prototype.getResponseJson=ne.prototype.La,ne.prototype.getResponseText=ne.prototype.la,ne.prototype.send=ne.prototype.ea,ne.prototype.setWithCredentials=ne.prototype.Fa,yh=ne}).apply(typeof Qr<"u"?Qr:typeof self<"u"?self:typeof window<"u"?window:{});const ul="@firebase/firestore",hl="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new Vs("@firebase/firestore");function cn(){return Gt.logLevel}function D(n,...e){if(Gt.logLevel<=H.DEBUG){const t=e.map(ko);Gt.debug(`Firestore (${Nn}): ${n}`,...t)}}function at(n,...e){if(Gt.logLevel<=H.ERROR){const t=e.map(ko);Gt.error(`Firestore (${Nn}): ${n}`,...t)}}function En(n,...e){if(Gt.logLevel<=H.WARN){const t=e.map(ko);Gt.warn(`Firestore (${Nn}): ${n}`,...t)}}function ko(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function U(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,vh(n,r,t)}function vh(n,e,t){let r=`FIRESTORE (${Nn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw at(r),new Error(r)}function Y(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||vh(e,s,r)}function q(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends $e{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Te.UNAUTHENTICATED)))}shutdown(){}}class _y{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class yy{constructor(e){this.t=e,this.currentUser=Te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Y(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new st;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new st,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},l=u=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new st)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string",31837,{l:r}),new Ah(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string",2055,{h:e}),new Te(e)}}class wy{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ey{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new wy(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Te.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class dl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Iy{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Me(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Y(this.o===void 0,3512);const r=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new dl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Y(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new dl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Ty(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function G(n,e){return n<e?-1:n>e?1:0}function eo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Li(s)===Li(i)?G(s,i):Li(s)?1:-1}return G(n.length,e.length)}const vy=55296,Ay=57343;function Li(n){const e=n.charCodeAt(0);return e>=vy&&e<=Ay}function In(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="__name__";class He{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&U(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return He.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof He?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=He.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return G(e.length,t.length)}static compareSegments(e,t){const r=He.isNumericId(e),s=He.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?He.extractNumericId(e).compare(He.extractNumericId(t)):eo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return bt.fromString(e.substring(4,e.length-2))}}class X extends He{construct(e,t,r){return new X(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new X(t)}static emptyPath(){return new X([])}}const by=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends He{construct(e,t,r){return new _e(e,t,r)}static isValidIdentifier(e){return by.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fl}static keyField(){return new _e([fl])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(t)}static emptyPath(){return new _e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(X.fromString(e))}static fromName(e){return new M(X.fromString(e).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new X(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(n,e,t){if(!t)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ry(n,e,t,r){if(e===!0&&r===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ml(n){if(!M.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pl(n){if(M.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Rh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Fs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function ct(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fs(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ae(n,e){const t={typeString:n};return e&&(t.value=e),t}function Sr(n,e){if(!Rh(n))throw new N(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new N(P.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=-62135596800,_l=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*_l);return new ee(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<gl)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_l}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Sr(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-gl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:ae("string",ee._jsonSchemaVersion),seconds:ae("number"),nanoseconds:ae("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static fromTimestamp(e){return new j(e)}static min(){return new j(new ee(0,0))}static max(){return new j(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const _r=-1;function Sy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=j.fromTimestamp(r===1e9?new ee(t+1,0):new ee(t,r));return new St(s,M.empty(),e)}function Py(n){return new St(n.readTime,n.key,_r)}class St{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new St(j.min(),M.empty(),_r)}static max(){return new St(j.max(),M.empty(),_r)}}function Cy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:G(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==ky)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):C.reject(t)}static resolve(e){return new C(((t,r)=>{t(e)}))}static reject(e){return new C(((t,r)=>{r(e)}))}static waitFor(e){return new C(((t,r)=>{let s=0,i=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next((s=>s?C.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new C(((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next((m=>{a[d]=m,++l,l===i&&r(a)}),(m=>s(m)))}}))}static doWhile(e,t){return new C(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function Ny(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Dn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Us{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Us.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=-1;function js(n){return n==null}function ws(n){return n===0&&1/n==-1/0}function Vy(n){return typeof n=="number"&&Number.isInteger(n)&&!ws(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="";function Dy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=yl(e)),e=Oy(n.get(t),e);return yl(e)}function Oy(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Sh:t+="";break;default:t+=i}}return t}function yl(n){return n+Sh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Dt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ph(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t){this.comparator=e,this.root=t||ge.EMPTY}insert(e,t){return new te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yr(this.root,e,this.comparator,!0)}}class Yr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ge.RED,this.left=s??ge.EMPTY,this.right=i??ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ge(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1;ge.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new El(this.data.getIterator())}getIteratorFrom(e){return new El(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class El{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new Ve([])}unionWith(e){let t=new de(_e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ve(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return In(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Ch extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ch("Invalid base64 string: "+i):i}})(e);return new ye(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const Ly=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pt(n){if(Y(!!n,39018),typeof n=="string"){let e=0;const t=Ly.exec(n);if(Y(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:re(n.seconds),nanos:re(n.nanos)}}function re(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ct(n){return typeof n=="string"?ye.fromBase64String(n):ye.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="server_timestamp",xh="__type__",Nh="__previous_value__",Vh="__local_write_time__";function Vo(n){return(n?.mapValue?.fields||{})[xh]?.stringValue===kh}function Bs(n){const e=n.mapValue.fields[Nh];return Vo(e)?Bs(e):e}function yr(n){const e=Pt(n.mapValue.fields[Vh].timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,t,r,s,i,a,l,u,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m}}const Es="(default)";class wr{constructor(e,t){this.projectId=e,this.database=t||Es}static empty(){return new wr("","")}get isDefaultDatabase(){return this.database===Es}isEqual(e){return e instanceof wr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="__type__",Fy="__max__",Jr={mapValue:{}},Oh="__vector__",Is="value";function kt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vo(n)?4:jy(n)?9007199254740991:Uy(n)?10:11:U(28295,{value:n})}function tt(n,e){if(n===e)return!0;const t=kt(n);if(t!==kt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return yr(n).isEqual(yr(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Pt(s.timestampValue),l=Pt(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Ct(s.bytesValue).isEqual(Ct(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return re(s.geoPointValue.latitude)===re(i.geoPointValue.latitude)&&re(s.geoPointValue.longitude)===re(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return re(s.integerValue)===re(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=re(s.doubleValue),l=re(i.doubleValue);return a===l?ws(a)===ws(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return In(n.arrayValue.values||[],e.arrayValue.values||[],tt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(wl(a)!==wl(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!tt(a[u],l[u])))return!1;return!0})(n,e);default:return U(52216,{left:n})}}function Er(n,e){return(n.values||[]).find((t=>tt(t,e)))!==void 0}function Tn(n,e){if(n===e)return 0;const t=kt(n),r=kt(e);if(t!==r)return G(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=re(i.integerValue||i.doubleValue),u=re(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(n,e);case 3:return Il(n.timestampValue,e.timestampValue);case 4:return Il(yr(n),yr(e));case 5:return eo(n.stringValue,e.stringValue);case 6:return(function(i,a){const l=Ct(i),u=Ct(a);return l.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const m=G(l[d],u[d]);if(m!==0)return m}return G(l.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=G(re(i.latitude),re(a.latitude));return l!==0?l:G(re(i.longitude),re(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Tl(n.arrayValue,e.arrayValue);case 10:return(function(i,a){const l=i.fields||{},u=a.fields||{},d=l[Is]?.arrayValue,m=u[Is]?.arrayValue,g=G(d?.values?.length||0,m?.values?.length||0);return g!==0?g:Tl(d,m)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Jr.mapValue&&a===Jr.mapValue)return 0;if(i===Jr.mapValue)return 1;if(a===Jr.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let g=0;g<u.length&&g<m.length;++g){const w=eo(u[g],m[g]);if(w!==0)return w;const S=Tn(l[u[g]],d[m[g]]);if(S!==0)return S}return G(u.length,m.length)})(n.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function Il(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return G(n,e);const t=Pt(n),r=Pt(e),s=G(t.seconds,r.seconds);return s!==0?s:G(t.nanos,r.nanos)}function Tl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Tn(t[s],r[s]);if(i)return i}return G(t.length,r.length)}function vn(n){return to(n)}function to(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Pt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ct(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return M.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=to(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${to(t.fields[a])}`;return s+"}"})(n.mapValue):U(61005,{value:n})}function is(n){switch(kt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bs(n);return e?16+is(e):16;case 5:return 2*n.stringValue.length;case 6:return Ct(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+is(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Dt(r.fields,((i,a)=>{s+=i.length+is(a)})),s})(n.mapValue);default:throw U(13486,{value:n})}}function vl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function no(n){return!!n&&"integerValue"in n}function Do(n){return!!n&&"arrayValue"in n}function Al(n){return!!n&&"nullValue"in n}function bl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function os(n){return!!n&&"mapValue"in n}function Uy(n){return(n?.mapValue?.fields||{})[Dh]?.stringValue===Oh}function ur(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Dt(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=ur(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ur(n.arrayValue.values[t]);return e}return{...n}}function jy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Fy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.value=e}static empty(){return new xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!os(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ur(t)}setAll(e){let t=_e.emptyPath(),r={},s=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=ur(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());os(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];os(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Dt(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new xe(ur(this.value))}}function Lh(n){const e=[];return Dt(n.fields,((t,r)=>{const s=new _e([t]);if(os(r)){const i=Lh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Ve(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ve(e,0,j.min(),j.min(),j.min(),xe.empty(),0)}static newFoundDocument(e,t,r,s){return new ve(e,1,t,j.min(),r,s,0)}static newNoDocument(e,t){return new ve(e,2,t,j.min(),j.min(),xe.empty(),0)}static newUnknownDocument(e,t){return new ve(e,3,t,j.min(),j.min(),xe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ts{constructor(e,t){this.position=e,this.inclusive=t}}function Rl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=Tn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!tt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ir{constructor(e,t="asc"){this.field=e,this.dir=t}}function By(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Mh{}class oe extends Mh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new $y(e,t,r):t==="array-contains"?new Hy(e,r):t==="in"?new Gy(e,r):t==="not-in"?new Ky(e,r):t==="array-contains-any"?new Qy(e,r):new oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new zy(e,r):new Wy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Tn(t,this.value)):t!==null&&kt(this.value)===kt(t)&&this.matchesComparison(Tn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qe extends Mh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new qe(e,t)}matches(e){return Fh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Fh(n){return n.op==="and"}function Uh(n){return qy(n)&&Fh(n)}function qy(n){for(const e of n.filters)if(e instanceof qe)return!1;return!0}function ro(n){if(n instanceof oe)return n.field.canonicalString()+n.op.toString()+vn(n.value);if(Uh(n))return n.filters.map((e=>ro(e))).join(",");{const e=n.filters.map((t=>ro(t))).join(",");return`${n.op}(${e})`}}function jh(n,e){return n instanceof oe?(function(r,s){return s instanceof oe&&r.op===s.op&&r.field.isEqual(s.field)&&tt(r.value,s.value)})(n,e):n instanceof qe?(function(r,s){return s instanceof qe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&jh(a,s.filters[l])),!0):!1})(n,e):void U(19439)}function Bh(n){return n instanceof oe?(function(t){return`${t.field.canonicalString()} ${t.op} ${vn(t.value)}`})(n):n instanceof qe?(function(t){return t.op.toString()+" {"+t.getFilters().map(Bh).join(" ,")+"}"})(n):"Filter"}class $y extends oe{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class zy extends oe{constructor(e,t){super(e,"in",t),this.keys=qh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Wy extends oe{constructor(e,t){super(e,"not-in",t),this.keys=qh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function qh(n,e){return(e.arrayValue?.values||[]).map((t=>M.fromName(t.referenceValue)))}class Hy extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Do(t)&&Er(t.arrayValue,this.value)}}class Gy extends oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Er(this.value.arrayValue,t)}}class Ky extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Er(this.value.arrayValue,t)}}class Qy extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Do(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Er(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Pl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Yy(n,e,t,r,s,i,a)}function Oo(n){const e=q(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>ro(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),js(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>vn(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>vn(r))).join(",")),e.Te=t}return e.Te}function Lo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!By(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!jh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Sl(n.startAt,e.startAt)&&Sl(n.endAt,e.endAt)}function so(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Jy(n,e,t,r,s,i,a,l){return new On(n,e,t,r,s,i,a,l)}function Mo(n){return new On(n)}function Cl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $h(n){return n.collectionGroup!==null}function hr(n){const e=q(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new de(_e.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ir(i,r))})),t.has(_e.keyField().canonicalString())||e.Ie.push(new Ir(_e.keyField(),r))}return e.Ie}function Qe(n){const e=q(n);return e.Ee||(e.Ee=Xy(e,hr(n))),e.Ee}function Xy(n,e){if(n.limitType==="F")return Pl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ir(s.field,i)}));const t=n.endAt?new Ts(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ts(n.startAt.position,n.startAt.inclusive):null;return Pl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function io(n,e){const t=n.filters.concat([e]);return new On(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function oo(n,e,t){return new On(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qs(n,e){return Lo(Qe(n),Qe(e))&&n.limitType===e.limitType}function zh(n){return`${Oo(Qe(n))}|lt:${n.limitType}`}function ln(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Bh(s))).join(", ")}]`),js(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>vn(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>vn(s))).join(",")),`Target(${r})`})(Qe(n))}; limitType=${n.limitType})`}function $s(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):M.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of hr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,l,u){const d=Rl(a,l,u);return a.inclusive?d<=0:d<0})(r.startAt,hr(r),s)||r.endAt&&!(function(a,l,u){const d=Rl(a,l,u);return a.inclusive?d>=0:d>0})(r.endAt,hr(r),s))})(n,e)}function Zy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Wh(n){return(e,t)=>{let r=!1;for(const s of hr(n)){const i=ew(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ew(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):(function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?Tn(u,d):U(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Dt(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Ph(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=new te(M.comparator);function lt(){return tw}const Hh=new te(M.comparator);function ir(...n){let e=Hh;for(const t of n)e=e.insert(t.key,t);return e}function Gh(n){let e=Hh;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function $t(){return dr()}function Kh(){return dr()}function dr(){return new en((n=>n.toString()),((n,e)=>n.isEqual(e)))}const nw=new te(M.comparator),rw=new de(M.comparator);function K(...n){let e=rw;for(const t of n)e=e.add(t);return e}const sw=new de(G);function iw(){return sw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ws(e)?"-0":e}}function Qh(n){return{integerValue:""+n}}function ow(n,e){return Vy(e)?Qh(e):Fo(n,e)}/**
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
 */class zs{constructor(){this._=void 0}}function aw(n,e,t){return n instanceof Tr?(function(s,i){const a={fields:{[xh]:{stringValue:kh},[Vh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Vo(i)&&(i=Bs(i)),i&&(a.fields[Nh]=i),{mapValue:a}})(t,e):n instanceof An?Jh(n,e):n instanceof bn?Xh(n,e):(function(s,i){const a=Yh(s,i),l=kl(a)+kl(s.Ae);return no(a)&&no(s.Ae)?Qh(l):Fo(s.serializer,l)})(n,e)}function cw(n,e,t){return n instanceof An?Jh(n,e):n instanceof bn?Xh(n,e):t}function Yh(n,e){return n instanceof vs?(function(r){return no(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Tr extends zs{}class An extends zs{constructor(e){super(),this.elements=e}}function Jh(n,e){const t=Zh(e);for(const r of n.elements)t.some((s=>tt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class bn extends zs{constructor(e){super(),this.elements=e}}function Xh(n,e){let t=Zh(e);for(const r of n.elements)t=t.filter((s=>!tt(s,r)));return{arrayValue:{values:t}}}class vs extends zs{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function kl(n){return re(n.integerValue||n.doubleValue)}function Zh(n){return Do(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t){this.field=e,this.transform=t}}function lw(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof An&&s instanceof An||r instanceof bn&&s instanceof bn?In(r.elements,s.elements,tt):r instanceof vs&&s instanceof vs?tt(r.Ae,s.Ae):r instanceof Tr&&s instanceof Tr})(n.transform,e.transform)}class uw{constructor(e,t){this.version=e,this.transformResults=t}}class Ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function as(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ws{}function ed(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new jo(n.key,Ue.none()):new Pr(n.key,n.data,Ue.none());{const t=n.data,r=xe.empty();let s=new de(_e.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Ot(n.key,r,new Ve(s.toArray()),Ue.none())}}function hw(n,e,t){n instanceof Pr?(function(s,i,a){const l=s.value.clone(),u=Nl(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof Ot?(function(s,i,a){if(!as(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Nl(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(td(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function fr(n,e,t,r){return n instanceof Pr?(function(i,a,l,u){if(!as(i.precondition,a))return l;const d=i.value.clone(),m=Vl(i.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof Ot?(function(i,a,l,u){if(!as(i.precondition,a))return l;const d=Vl(i.fieldTransforms,u,a),m=a.data;return m.setAll(td(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,e,t,r):(function(i,a,l){return as(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function dw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Yh(r.transform,s||null);i!=null&&(t===null&&(t=xe.empty()),t.set(r.field,i))}return t||null}function xl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&In(r,s,((i,a)=>lw(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Pr extends Ws{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ot extends Ws{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function td(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Nl(n,e,t){const r=new Map;Y(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,cw(a,l,t[s]))}return r}function Vl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,aw(i,a,e))}return r}class jo extends Ws{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fw extends Ws{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&hw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=fr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=fr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Kh();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=ed(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(j.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),K())}isEqual(e){return this.batchId===e.batchId&&In(this.mutations,e.mutations,((t,r)=>xl(t,r)))&&In(this.baseMutations,e.baseMutations,((t,r)=>xl(t,r)))}}class Bo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Y(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return nw})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Bo(e,t,r,s)}}/**
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
 */class pw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie,Q;function _w(n){switch(n){case P.OK:return U(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return U(15467,{code:n})}}function nd(n){if(n===void 0)return at("GRPC error has no .code"),P.UNKNOWN;switch(n){case ie.OK:return P.OK;case ie.CANCELLED:return P.CANCELLED;case ie.UNKNOWN:return P.UNKNOWN;case ie.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ie.INTERNAL:return P.INTERNAL;case ie.UNAVAILABLE:return P.UNAVAILABLE;case ie.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ie.NOT_FOUND:return P.NOT_FOUND;case ie.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ie.ABORTED:return P.ABORTED;case ie.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ie.DATA_LOSS:return P.DATA_LOSS;default:return U(39323,{code:n})}}(Q=ie||(ie={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function yw(){return new TextEncoder}/**
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
 */const ww=new bt([4294967295,4294967295],0);function Dl(n){const e=yw().encode(n),t=new _h;return t.update(e),new Uint8Array(t.digest())}function Ol(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new bt([t,r],0),new bt([s,i],0)]}class qo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new or(`Invalid padding: ${t}`);if(r<0)throw new or(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new or(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new or(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=bt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(bt.fromNumber(r)));return s.compare(ww)===1&&(s=new bt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Dl(e),[r,s]=Ol(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new qo(i,s,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.ge===0)return;const t=Dl(e),[r,s]=Ol(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Cr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Hs(j.min(),s,new te(G),lt(),K())}}class Cr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Cr(r,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class rd{constructor(e,t){this.targetId=e,this.Ce=t}}class sd{constructor(e,t,r=ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ll{constructor(){this.ve=0,this.Fe=Ml(),this.Me=ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=K(),t=K(),r=K();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:U(38017,{changeType:i})}})),new Cr(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Ml()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Y(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Ew{constructor(e){this.Ge=e,this.ze=new Map,this.je=lt(),this.Je=Xr(),this.He=Xr(),this.Ye=new te(G)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:U(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(so(i))if(r===0){const a=new M(i.path);this.et(t,a,ve.newNoDocument(a,j.min()))}else Y(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Ct(r).toUint8Array()}catch(u){if(u instanceof Ch)return En("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new qo(a,s,i)}catch(u){return En(u instanceof or?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const l=this.ot(a);if(l){if(i.current&&so(l.target)){const u=new M(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,ve.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let r=K();this.He.forEach(((i,a)=>{let l=!0;a.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new Hs(e,t,this.Ye,this.je,r);return this.je=lt(),this.Je=Xr(),this.He=Xr(),this.Ye=new te(G),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Ll,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new de(G),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new de(G),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ll),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Xr(){return new te(M.comparator)}function Ml(){return new te(M.comparator)}const Iw={asc:"ASCENDING",desc:"DESCENDING"},Tw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vw={and:"AND",or:"OR"};class Aw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ao(n,e){return n.useProto3Json||js(e)?e:{value:e}}function As(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function id(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function bw(n,e){return As(n,e.toTimestamp())}function Ye(n){return Y(!!n,49232),j.fromTimestamp((function(t){const r=Pt(t);return new ee(r.seconds,r.nanos)})(n))}function $o(n,e){return co(n,e).canonicalString()}function co(n,e){const t=(function(s){return new X(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function od(n){const e=X.fromString(n);return Y(hd(e),10190,{key:e.toString()}),e}function lo(n,e){return $o(n.databaseId,e.path)}function Mi(n,e){const t=od(e);if(t.get(1)!==n.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(cd(t))}function ad(n,e){return $o(n.databaseId,e)}function Rw(n){const e=od(n);return e.length===4?X.emptyPath():cd(e)}function uo(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function cd(n){return Y(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Fl(n,e,t){return{name:lo(n,e),fields:t.value.mapValue.fields}}function Sw(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(d,m){return d.useProto3Json?(Y(m===void 0||typeof m=="string",58123),ye.fromBase64String(m||"")):(Y(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ye.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(d){const m=d.code===void 0?P.UNKNOWN:nd(d.code);return new N(m,d.message||"")})(a);t=new sd(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Mi(n,r.document.name),i=Ye(r.document.updateTime),a=r.document.createTime?Ye(r.document.createTime):j.min(),l=new xe({mapValue:{fields:r.document.fields}}),u=ve.newFoundDocument(s,i,a,l),d=r.targetIds||[],m=r.removedTargetIds||[];t=new cs(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Mi(n,r.document),i=r.readTime?Ye(r.readTime):j.min(),a=ve.newNoDocument(s,i),l=r.removedTargetIds||[];t=new cs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Mi(n,r.document),i=r.removedTargetIds||[];t=new cs([],i,s,null)}else{if(!("filter"in e))return U(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new gw(s,i),l=r.targetId;t=new rd(l,a)}}return t}function Pw(n,e){let t;if(e instanceof Pr)t={update:Fl(n,e.key,e.value)};else if(e instanceof jo)t={delete:lo(n,e.key)};else if(e instanceof Ot)t={update:Fl(n,e.key,e.data),updateMask:Mw(e.fieldMask)};else{if(!(e instanceof fw))return U(16599,{Vt:e.type});t={verify:lo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const l=a.transform;if(l instanceof Tr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof An)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof bn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof vs)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw U(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:bw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U(27497)})(n,e.precondition)),t}function Cw(n,e){return n&&n.length>0?(Y(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Ye(s.updateTime):Ye(i);return a.isEqual(j.min())&&(a=Ye(i)),new uw(a,s.transformResults||[])})(t,e)))):[]}function kw(n,e){return{documents:[ad(n,e.path)]}}function xw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ad(n,s);const i=(function(d){if(d.length!==0)return ud(qe.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((m=>(function(w){return{field:un(w.field),direction:Dw(w.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ao(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:s}}function Nw(n){let e=Rw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Y(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(g){const w=ld(g);return w instanceof qe&&Uh(w)?w.getFilters():[w]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((w=>(function(V){return new Ir(hn(V.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(w)))})(t.orderBy));let l=null;t.limit&&(l=(function(g){let w;return w=typeof g=="object"?g.value:g,js(w)?null:w})(t.limit));let u=null;t.startAt&&(u=(function(g){const w=!!g.before,S=g.values||[];return new Ts(S,w)})(t.startAt));let d=null;return t.endAt&&(d=(function(g){const w=!g.before,S=g.values||[];return new Ts(S,w)})(t.endAt)),Jy(e,s,a,i,l,"F",u,d)}function Vw(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ld(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=hn(t.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hn(t.unaryFilter.field);return oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hn(t.unaryFilter.field);return oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=hn(t.unaryFilter.field);return oe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}})(n):n.fieldFilter!==void 0?(function(t){return oe.create(hn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return qe.create(t.compositeFilter.filters.map((r=>ld(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U(1026)}})(t.compositeFilter.op))})(n):U(30097,{filter:n})}function Dw(n){return Iw[n]}function Ow(n){return Tw[n]}function Lw(n){return vw[n]}function un(n){return{fieldPath:n.canonicalString()}}function hn(n){return _e.fromServerFormat(n.fieldPath)}function ud(n){return n instanceof oe?(function(t){if(t.op==="=="){if(bl(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NAN"}};if(Al(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bl(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NOT_NAN"}};if(Al(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:un(t.field),op:Ow(t.op),value:t.value}}})(n):n instanceof qe?(function(t){const r=t.getFilters().map((s=>ud(s)));return r.length===1?r[0]:{compositeFilter:{op:Lw(t.op),filters:r}}})(n):U(54877,{filter:n})}function Mw(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function hd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t,r,s,i=j.min(),a=j.min(),l=ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new It(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.yt=e}}function Uw(n){const e=Nw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?oo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.Cn=new Bw}addToCollectionParentIndex(e,t){return this.Cn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(St.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(St.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class Bw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new de(X.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new de(X.comparator)).toArray()}}/**
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
 */const Ul={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},dd=41943040;class ke{static withCacheSize(e){return new ke(e,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke.DEFAULT_COLLECTION_PERCENTILE=10,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ke.DEFAULT=new ke(dd,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ke.DISABLED=new ke(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Rn(0)}static cr(){return new Rn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="LruGarbageCollector",qw=1048576;function Bl([n,e],[t,r]){const s=G(n,t);return s===0?G(e,r):s}class $w{constructor(e){this.Ir=e,this.buffer=new de(Bl),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Bl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class zw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){D(jl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Dn(t)?D(jl,"Ignoring IndexedDB error during garbage collection: ",t):await Vn(t)}await this.Vr(3e5)}))}}class Ww{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Us.ce);const r=new $w(t);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Ul)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ul):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,l,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(r=g,l=Date.now(),this.removeTargets(e,r,t)))).next((g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(d=Date.now(),cn()<=H.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function Hw(n,e){return new Ww(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(){this.changes=new en((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&fr(r.mutation,s,Ve.empty(),ee.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,K()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=K()){const s=$t();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=ir();return i.forEach(((l,u)=>{a=a.insert(l,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=$t();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,K())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,s){let i=lt();const a=dr(),l=(function(){return dr()})();return t.forEach(((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Ot)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),fr(m.mutation,d,m.mutation.getFieldMask(),ee.now())):a.set(d.key,Ve.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((d,m)=>a.set(d,m))),t.forEach(((d,m)=>l.set(d,new Kw(m,a.get(d)??null)))),l)))}recalculateAndSaveOverlays(e,t){const r=dr();let s=new te(((a,l)=>a-l)),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||Ve.empty();m=l.applyToLocalView(d,m),r.set(u,m);const g=(s.get(l.batchId)||K()).add(u);s=s.insert(l.batchId,g)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,m=u.value,g=Kh();m.forEach((w=>{if(!i.has(w)){const S=ed(t.get(w),r.get(w));S!==null&&g.set(w,S),i=i.add(w)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return C.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):$h(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):C.resolve($t());let l=_r,u=i;return a.next((d=>C.forEach(d,((m,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(m)?C.resolve():this.remoteDocumentCache.getEntry(e,m).next((w=>{u=u.insert(m,w)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,u,d,K()))).next((m=>({batchId:l,changes:Gh(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next((r=>{let s=ir();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=ir();return this.indexManager.getCollectionParents(e,i).next((l=>C.forEach(l,(u=>{const d=(function(g,w){return new On(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((m=>{m.forEach(((g,w)=>{a=a.insert(g,w)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,ve.newInvalidDocument(m)))}));let l=ir();return a.forEach(((u,d)=>{const m=i.get(u);m!==void 0&&fr(m.mutation,d,Ve.empty(),ee.now()),$s(t,d)&&(l=l.insert(u,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return C.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Ye(s.createTime)}})(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:Uw(s.bundledQuery),readTime:Ye(s.readTime)}})(t)),C.resolve()}}/**
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
 */class Jw{constructor(){this.overlays=new te(M.comparator),this.qr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=$t();return C.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.St(e,t,i)})),C.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const s=$t(),i=t.length+1,a=new M(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new te(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=$t(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=$t(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,m)=>l.set(d,m))),!(l.size()>=s)););return C.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new pw(t,r));let i=this.qr.get(t);i===void 0&&(i=K(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class Xw{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.Qr=new de(pe.$r),this.Ur=new de(pe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new pe(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new pe(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new M(new X([])),r=new pe(t,e),s=new pe(t,e+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new M(new X([])),r=new pe(t,e),s=new pe(t,e+1);let i=K();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new pe(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return M.comparator(e.key,t.key)||G(e.Yr,t.Yr)}static Kr(e,t){return G(e.Yr,t.Yr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new de(pe.$r)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new mw(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new pe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?No:this.tr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pe(t,0),s=new pe(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const l=this.Xr(a.Yr);i.push(l)})),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new de(G);return t.forEach((s=>{const i=new pe(s,0),a=new pe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(l=>{r=r.add(l.Yr)}))})),C.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;M.isDocumentKey(i)||(i=i.child(""));const a=new pe(new M(i),0);let l=new de(G);return this.Zr.forEachWhile((u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Yr)),!0)}),a),C.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Y(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return C.forEach(t.mutations,(s=>{const i=new pe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new pe(t,0),s=this.Zr.firstAfterOrEqual(r);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.ri=e,this.docs=(function(){return new te(M.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():ve.newInvalidDocument(t))}getEntries(e,t){let r=lt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ve.newInvalidDocument(s))})),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=lt();const a=t.path,l=new M(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Cy(Py(m),r)<=0||(s.has(m.key)||$s(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,r,s){U(9500)}ii(e,t){return C.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new tE(this)}getSize(e){return C.resolve(this.size)}}class tE extends Gw{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),C.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.persistence=e,this.si=new en((t=>Oo(t)),Lo),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.oi=0,this._i=new zo,this.targetCount=0,this.ai=Rn.ur()}forEachTarget(e,t){return this.si.forEach(((r,s)=>t(s))),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),C.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Rn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Pr(t),C.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),C.waitFor(i).next((()=>s))}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,t){this.ui={},this.overlays={},this.ci=new Us(0),this.li=!1,this.li=!0,this.hi=new Xw,this.referenceDelegate=e(this),this.Pi=new nE(this),this.indexManager=new jw,this.remoteDocumentCache=(function(s){return new eE(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Fw(t),this.Ii=new Yw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Jw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new Zw(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){D("MemoryPersistence","Starting transaction:",e);const s=new rE(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,t){return C.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class rE extends xy{constructor(e){super(),this.currentSequenceNumber=e}}class Wo{constructor(e){this.persistence=e,this.Ri=new zo,this.Vi=null}static mi(e){return new Wo(e)}get fi(){if(this.Vi)return this.Vi;throw U(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.fi,(r=>{const s=M.fromPath(r);return this.gi(e,s).next((i=>{i||t.removeEntry(s,j.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class bs{constructor(e,t){this.persistence=e,this.pi=new en((r=>Dy(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Hw(this,t)}static mi(e,t){return new bs(e,t)}Ei(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return C.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?C.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,t).next((l=>{l||(r++,i.removeEntry(a,j.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=is(e.data.value)),t}br(e,t,r){return C.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=K(),s=K();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ho(e,t.fromCache,r,s)}}/**
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
 */class sE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Lm()?8:Ny(Ae())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new sE;return this.Ss(e,t,a).next((l=>{if(i.result=l,this.Vs)return this.bs(e,t,a,l.size)}))})).next((()=>i.result))}bs(e,t,r,s){return r.documentReadCount<this.fs?(cn()<=H.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",ln(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),C.resolve()):(cn()<=H.DEBUG&&D("QueryEngine","Query:",ln(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(cn()<=H.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",ln(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qe(t))):C.resolve())}ys(e,t){if(Cl(t))return C.resolve(null);let r=Qe(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=oo(t,null,"F"),r=Qe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=K(...i);return this.ps.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((u=>{const d=this.Ds(t,l);return this.Cs(t,d,a,u.readTime)?this.ys(e,oo(t,null,"F")):this.vs(e,d,t,u)}))))})))))}ws(e,t,r,s){return Cl(t)||s.isEqual(j.min())?C.resolve(null):this.ps.getDocuments(e,r).next((i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?C.resolve(null):(cn()<=H.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ln(t)),this.vs(e,a,t,Sy(s,_r)).next((l=>l)))}))}Ds(e,t){let r=new de(Wh(e));return t.forEach(((s,i)=>{$s(e,i)&&(r=r.add(i))})),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return cn()<=H.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",ln(t)),this.ps.getDocumentsMatchingQuery(e,t,St.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="LocalStore",oE=3e8;class aE{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new te(G),this.xs=new en((i=>Oo(i)),Lo),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qw(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function cE(n,e,t,r){return new aE(n,e,t,r)}async function md(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let u=K();for(const d of s){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){l.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function lE(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,u,d,m){const g=d.batch,w=g.keys();let S=C.resolve();return w.forEach((V=>{S=S.next((()=>m.getEntry(u,V))).next((L=>{const x=d.docVersions.get(V);Y(x!==null,48541),L.version.compareTo(x)<0&&(g.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),m.addEntry(L)))}))})),S.next((()=>l.mutationQueue.removeMutationBatch(u,g)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let u=K();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function pd(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function uE(n,e){const t=q(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach(((m,g)=>{const w=s.get(g);if(!w)return;l.push(t.Pi.removeMatchingKeys(i,m.removedDocuments,g).next((()=>t.Pi.addMatchingKeys(i,m.addedDocuments,g))));let S=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(ye.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),s=s.insert(g,S),(function(L,x,W){return L.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=oE?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0})(w,S,m)&&l.push(t.Pi.updateTargetData(i,S))}));let u=lt(),d=K();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),l.push(hE(i,a,e.documentUpdates).next((m=>{u=m.ks,d=m.qs}))),!r.isEqual(j.min())){const m=t.Pi.getLastRemoteSnapshotVersion(i).next((g=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(m)}return C.waitFor(l).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,d))).next((()=>u))})).then((i=>(t.Ms=s,i)))}function hE(n,e,t){let r=K(),s=K();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=lt();return t.forEach(((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):D(Go,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)})),{ks:a,qs:s}}))}function dE(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=No),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function fE(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.Pi.getTargetData(r,e).next((i=>i?(s=i,C.resolve(s)):t.Pi.allocateTargetId(r).next((a=>(s=new It(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function ho(n,e,t){const r=q(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Dn(a))throw a;D(Go,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function ql(n,e,t){const r=q(n);let s=j.min(),i=K();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,m){const g=q(u),w=g.xs.get(m);return w!==void 0?C.resolve(g.Ms.get(w)):g.Pi.getTargetData(d,m)})(r,a,Qe(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((u=>{i=u}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:j.min(),t?i:K()))).next((l=>(mE(r,Zy(e),l),{documents:l,Qs:i})))))}function mE(n,e,t){let r=n.Os.get(e)||j.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Os.set(e,r)}class $l{constructor(){this.activeTargetIds=iw()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pE{constructor(){this.Mo=new $l,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new $l,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="ConnectivityMonitor";class Wl{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){D(zl,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){D(zl,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zr=null;function fo(){return Zr===null?Zr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Zr++,"0x"+Zr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="RestConnection",_E={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yE{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Es?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=fo(),l=this.zo(e,t.toUriEncodedString());D(Fi,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(l),m=Pn(d);return this.Jo(e,l,u,r,m).then((g=>(D(Fi,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw En(Fi,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g}))}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Nn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,t){const r=_E[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="WebChannelConnection";class EE extends yE{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=fo();return new Promise(((l,u)=>{const d=new yh;d.setWithCredentials(!0),d.listenOnce(wh.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case ss.NO_ERROR:const g=d.getResponseJson();D(Ie,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case ss.TIMEOUT:D(Ie,`RPC '${e}' ${a} timed out`),u(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case ss.HTTP_ERROR:const w=d.getStatus();if(D(Ie,`RPC '${e}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const V=S?.error;if(V&&V.status&&V.message){const L=(function(W){const O=W.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(O)>=0?O:P.UNKNOWN})(V.status);u(new N(L,V.message))}else u(new N(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new N(P.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{D(Ie,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(s);D(Ie,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",m,r,15)}))}T_(e,t,r){const s=fo(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Th(),l=Ih(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");D(Ie,`Creating RPC '${e}' stream ${s}: ${m}`,u);const g=a.createWebChannel(m,u);this.I_(g);let w=!1,S=!1;const V=new wE({Yo:x=>{S?D(Ie,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(w||(D(Ie,`Opening RPC '${e}' stream ${s} transport.`),g.open(),w=!0),D(Ie,`RPC '${e}' stream ${s} sending:`,x),g.send(x))},Zo:()=>g.close()}),L=(x,W,O)=>{x.listen(W,($=>{try{O($)}catch(le){setTimeout((()=>{throw le}),0)}}))};return L(g,sr.EventType.OPEN,(()=>{S||(D(Ie,`RPC '${e}' stream ${s} transport opened.`),V.o_())})),L(g,sr.EventType.CLOSE,(()=>{S||(S=!0,D(Ie,`RPC '${e}' stream ${s} transport closed`),V.a_(),this.E_(g))})),L(g,sr.EventType.ERROR,(x=>{S||(S=!0,En(Ie,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),V.a_(new N(P.UNAVAILABLE,"The operation could not be completed")))})),L(g,sr.EventType.MESSAGE,(x=>{if(!S){const W=x.data[0];Y(!!W,16349);const O=W,$=O?.error||O[0]?.error;if($){D(Ie,`RPC '${e}' stream ${s} received error:`,$);const le=$.status;let we=(function(p){const y=ie[p];if(y!==void 0)return nd(y)})(le),fe=$.message;we===void 0&&(we=P.INTERNAL,fe="Unknown error status: "+le+" with message "+$.message),S=!0,V.a_(new N(we,fe)),g.close()}else D(Ie,`RPC '${e}' stream ${s} received:`,W),V.u_(W)}})),L(l,Eh.STAT_EVENT,(x=>{x.stat===Zi.PROXY?D(Ie,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Zi.NOPROXY&&D(Ie,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.__()}),0),V}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Ui(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(n){return new Aw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="PersistentStream";class _d{constructor(e,t,r,s,i,a,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new gd(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(at(t.toString()),at("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new N(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return D(Hl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(D(Hl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class IE extends _d{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Sw(this.serializer,e),r=(function(i){if(!("targetChange"in i))return j.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?j.min():a.readTime?Ye(a.readTime):j.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=uo(this.serializer),t.addTarget=(function(i,a){let l;const u=a.target;if(l=so(u)?{documents:kw(i,u)}:{query:xw(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=id(i,a.resumeToken);const d=ao(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(j.min())>0){l.readTime=As(i,a.snapshotVersion.toTimestamp());const d=ao(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,e);const r=Vw(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=uo(this.serializer),t.removeTarget=e,this.q_(t)}}class TE extends _d{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Y(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Y(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Cw(e.writeResults,e.commitTime),r=Ye(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=uo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Pw(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{}class AE extends vE{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,co(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(P.UNKNOWN,i.toString())}))}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(e,co(t,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(P.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class bE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(at(t),this.aa=!1):D("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="RemoteStore";class RE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{tn(this)&&(D(Kt,"Restarting streams for network reachability change."),await(async function(u){const d=q(u);d.Ea.add(4),await kr(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Ks(d)})(this))}))})),this.Ra=new bE(r,s)}}async function Ks(n){if(tn(n))for(const e of n.da)await e(!0)}async function kr(n){for(const e of n.da)await e(!1)}function yd(n,e){const t=q(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Jo(t)?Yo(t):Ln(t).O_()&&Qo(t,e))}function Ko(n,e){const t=q(n),r=Ln(t);t.Ia.delete(e),r.O_()&&wd(t,e),t.Ia.size===0&&(r.O_()?r.L_():tn(t)&&t.Ra.set("Unknown"))}function Qo(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ln(n).Y_(e)}function wd(n,e){n.Va.Ue(e),Ln(n).Z_(e)}function Yo(n){n.Va=new Ew({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ln(n).start(),n.Ra.ua()}function Jo(n){return tn(n)&&!Ln(n).x_()&&n.Ia.size>0}function tn(n){return q(n).Ea.size===0}function Ed(n){n.Va=void 0}async function SE(n){n.Ra.set("Online")}async function PE(n){n.Ia.forEach(((e,t)=>{Qo(n,e)}))}async function CE(n,e){Ed(n),Jo(n)?(n.Ra.ha(e),Yo(n)):n.Ra.set("Unknown")}async function kE(n,e,t){if(n.Ra.set("Online"),e instanceof sd&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))})(n,e)}catch(r){D(Kt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rs(n,r)}else if(e instanceof cs?n.Va.Ze(e):e instanceof rd?n.Va.st(e):n.Va.tt(e),!t.isEqual(j.min()))try{const r=await pd(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ia.get(d);m&&i.Ia.set(d,m.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,d)=>{const m=i.Ia.get(u);if(!m)return;i.Ia.set(u,m.withResumeToken(ye.EMPTY_BYTE_STRING,m.snapshotVersion)),wd(i,u);const g=new It(m.target,u,d,m.sequenceNumber);Qo(i,g)})),i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){D(Kt,"Failed to raise snapshot:",r),await Rs(n,r)}}async function Rs(n,e,t){if(!Dn(e))throw e;n.Ea.add(1),await kr(n),n.Ra.set("Offline"),t||(t=()=>pd(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{D(Kt,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ks(n)}))}function Id(n,e){return e().catch((t=>Rs(n,t,e)))}async function Qs(n){const e=q(n),t=xt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:No;for(;xE(e);)try{const s=await dE(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,NE(e,s)}catch(s){await Rs(e,s)}Td(e)&&vd(e)}function xE(n){return tn(n)&&n.Ta.length<10}function NE(n,e){n.Ta.push(e);const t=xt(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Td(n){return tn(n)&&!xt(n).x_()&&n.Ta.length>0}function vd(n){xt(n).start()}async function VE(n){xt(n).ra()}async function DE(n){const e=xt(n);for(const t of n.Ta)e.ea(t.mutations)}async function OE(n,e,t){const r=n.Ta.shift(),s=Bo.from(r,e,t);await Id(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Qs(n)}async function LE(n,e){e&&xt(n).X_&&await(async function(r,s){if((function(a){return _w(a)&&a!==P.ABORTED})(s.code)){const i=r.Ta.shift();xt(r).B_(),await Id(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Qs(r)}})(n,e),Td(n)&&vd(n)}async function Gl(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),D(Kt,"RemoteStore received new credentials");const r=tn(t);t.Ea.add(3),await kr(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ks(t)}async function ME(n,e){const t=q(n);e?(t.Ea.delete(2),await Ks(t)):e||(t.Ea.add(2),await kr(t),t.Ra.set("Unknown"))}function Ln(n){return n.ma||(n.ma=(function(t,r,s){const i=q(t);return i.sa(),new IE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:SE.bind(null,n),t_:PE.bind(null,n),r_:CE.bind(null,n),H_:kE.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Jo(n)?Yo(n):n.Ra.set("Unknown")):(await n.ma.stop(),Ed(n))}))),n.ma}function xt(n){return n.fa||(n.fa=(function(t,r,s){const i=q(t);return i.sa(),new TE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:VE.bind(null,n),r_:LE.bind(null,n),ta:DE.bind(null,n),na:OE.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Qs(n)):(await n.fa.stop(),n.Ta.length>0&&(D(Kt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Xo(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zo(n,e){if(at("AsyncQueue",`${e}: ${n}`),Dn(n))return new N(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{static emptySet(e){return new gn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=ir(),this.sortedSet=new te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new gn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.ga=new te(M.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):U(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Sn{constructor(e,t,r,s,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Sn(e,t,gn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class UE{constructor(){this.queries=Ql(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=q(t),i=s.queries;s.queries=Ql(),i.forEach(((a,l)=>{for(const u of l.Sa)u.onError(r)}))})(this,new N(P.ABORTED,"Firestore shutting down"))}}function Ql(){return new en((n=>zh(n)),qs)}async function Ad(n,e){const t=q(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new FE,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Zo(a,`Initialization of query '${ln(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&ea(t)}async function bd(n,e){const t=q(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function jE(n,e){const t=q(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&ea(t)}function BE(n,e,t){const r=q(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function ea(n){n.Ca.forEach((e=>{e.next()}))}var mo,Yl;(Yl=mo||(mo={})).Ma="default",Yl.Cache="cache";class Rd{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Sn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Sn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==mo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.key=e}}class Pd{constructor(e){this.key=e}}class qE{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=K(),this.mutatedKeys=K(),this.eu=Wh(e),this.tu=new gn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Kl,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,g)=>{const w=s.get(m),S=$s(this.query,g)?g:null,V=!!w&&this.mutatedKeys.has(w.key),L=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let x=!1;w&&S?w.data.isEqual(S.data)?V!==L&&(r.track({type:3,doc:S}),x=!0):this.su(w,S)||(r.track({type:2,doc:S}),x=!0,(u&&this.eu(S,u)>0||d&&this.eu(S,d)<0)&&(l=!0)):!w&&S?(r.track({type:0,doc:S}),x=!0):w&&!S&&(r.track({type:1,doc:w}),x=!0,(u||d)&&(l=!0)),x&&(S?(a=a.add(S),i=L?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((m,g)=>(function(S,V){const L=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Rt:x})}};return L(S)-L(V)})(m.type,g.type)||this.eu(m.doc,g.doc))),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,a.length!==0||d?{snapshot:new Sn(this.query,e.tu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Kl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=K(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new Pd(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new Sd(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=K();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Sn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ta="SyncEngine";class $E{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class zE{constructor(e){this.key=e,this.hu=!1}}class WE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new en((l=>zh(l)),qs),this.Iu=new Map,this.Eu=new Set,this.du=new te(M.comparator),this.Au=new Map,this.Ru=new zo,this.Vu={},this.mu=new Map,this.fu=Rn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function HE(n,e,t=!0){const r=Dd(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Cd(r,e,t,!0),s}async function GE(n,e){const t=Dd(n);await Cd(t,e,!0,!1)}async function Cd(n,e,t,r){const s=await fE(n.localStore,Qe(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await KE(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&yd(n.remoteStore,s),l}async function KE(n,e,t,r,s){n.pu=(g,w,S)=>(async function(L,x,W,O){let $=x.view.ru(W);$.Cs&&($=await ql(L.localStore,x.query,!1).then((({documents:T})=>x.view.ru(T,$))));const le=O&&O.targetChanges.get(x.targetId),we=O&&O.targetMismatches.get(x.targetId)!=null,fe=x.view.applyChanges($,L.isPrimaryClient,le,we);return Xl(L,x.targetId,fe.au),fe.snapshot})(n,g,w,S);const i=await ql(n.localStore,e,!0),a=new qE(e,i.Qs),l=a.ru(i.documents),u=Cr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);Xl(n,t,d.au);const m=new $E(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function QE(n,e,t){const r=q(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!qs(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ho(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ko(r.remoteStore,s.targetId),po(r,s.targetId)})).catch(Vn)):(po(r,s.targetId),await ho(r.localStore,s.targetId,!0))}async function YE(n,e){const t=q(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ko(t.remoteStore,r.targetId))}async function JE(n,e,t){const r=sI(n);try{const s=await(function(a,l){const u=q(a),d=ee.now(),m=l.reduce(((S,V)=>S.add(V.key)),K());let g,w;return u.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let V=lt(),L=K();return u.Ns.getEntries(S,m).next((x=>{V=x,V.forEach(((W,O)=>{O.isValidDocument()||(L=L.add(W))}))})).next((()=>u.localDocuments.getOverlayedDocuments(S,V))).next((x=>{g=x;const W=[];for(const O of l){const $=dw(O,g.get(O.key).overlayedDocument);$!=null&&W.push(new Ot(O.key,$,Lh($.value.mapValue),Ue.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,W,l)})).next((x=>{w=x;const W=x.applyToLocalDocumentSet(g,L);return u.documentOverlayCache.saveOverlays(S,x.batchId,W)}))})).then((()=>({batchId:w.batchId,changes:Gh(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,u){let d=a.Vu[a.currentUser.toKey()];d||(d=new te(G)),d=d.insert(l,u),a.Vu[a.currentUser.toKey()]=d})(r,s.batchId,t),await xr(r,s.changes),await Qs(r.remoteStore)}catch(s){const i=Zo(s,"Failed to persist write");t.reject(i)}}async function kd(n,e){const t=q(n);try{const r=await uE(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Au.get(i);a&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Y(a.hu,14607):s.removedDocuments.size>0&&(Y(a.hu,42227),a.hu=!1))})),await xr(t,r,e)}catch(r){await Vn(r)}}function Jl(n,e,t){const r=q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const u=q(a);u.onlineState=l;let d=!1;u.queries.forEach(((m,g)=>{for(const w of g.Sa)w.va(l)&&(d=!0)})),d&&ea(u)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XE(n,e,t){const r=q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new te(M.comparator);a=a.insert(i,ve.newNoDocument(i,j.min()));const l=K().add(i),u=new Hs(j.min(),new Map,new te(G),a,l);await kd(r,u),r.du=r.du.remove(i),r.Au.delete(e),na(r)}else await ho(r.localStore,e,!1).then((()=>po(r,e,t))).catch(Vn)}async function ZE(n,e){const t=q(n),r=e.batch.batchId;try{const s=await lE(t.localStore,e);Nd(t,r,null),xd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await xr(t,s)}catch(s){await Vn(s)}}async function eI(n,e,t){const r=q(n);try{const s=await(function(a,l){const u=q(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return u.mutationQueue.lookupMutationBatch(d,l).next((g=>(Y(g!==null,37113),m=g.keys(),u.mutationQueue.removeMutationBatch(d,g)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>u.localDocuments.getDocuments(d,m)))}))})(r.localStore,e);Nd(r,e,t),xd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await xr(r,s)}catch(s){await Vn(s)}}function xd(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Nd(n,e,t){const r=q(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function po(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||Vd(n,r)}))}function Vd(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ko(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),na(n))}function Xl(n,e,t){for(const r of t)r instanceof Sd?(n.Ru.addReference(r.key,e),tI(n,r)):r instanceof Pd?(D(ta,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Vd(n,r.key)):U(19791,{wu:r})}function tI(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(D(ta,"New document in limbo: "+t),n.Eu.add(r),na(n))}function na(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new M(X.fromString(e)),r=n.fu.next();n.Au.set(r,new zE(t)),n.du=n.du.insert(t,r),yd(n.remoteStore,new It(Qe(Mo(t.path)),r,"TargetPurposeLimboResolution",Us.ce))}}async function xr(n,e,t){const r=q(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,u)=>{a.push(r.pu(u,e,t).then((d=>{if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Ho.As(u.targetId,d);i.push(m)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(u,d){const m=q(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>C.forEach(d,(w=>C.forEach(w.Es,(S=>m.persistence.referenceDelegate.addReference(g,w.targetId,S))).next((()=>C.forEach(w.ds,(S=>m.persistence.referenceDelegate.removeReference(g,w.targetId,S)))))))))}catch(g){if(!Dn(g))throw g;D(Go,"Failed to update sequence numbers: "+g)}for(const g of d){const w=g.targetId;if(!g.fromCache){const S=m.Ms.get(w),V=S.snapshotVersion,L=S.withLastLimboFreeSnapshotVersion(V);m.Ms=m.Ms.insert(w,L)}}})(r.localStore,i))}async function nI(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){D(ta,"User change. New user:",e.toKey());const r=await md(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((l=>{l.forEach((u=>{u.reject(new N(P.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xr(t,r.Ls)}}function rI(n,e){const t=q(n),r=t.Au.get(e);if(r&&r.hu)return K().add(r.key);{let s=K();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Dd(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=kd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XE.bind(null,e),e.Pu.H_=jE.bind(null,e.eventManager),e.Pu.yu=BE.bind(null,e.eventManager),e}function sI(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eI.bind(null,e),e}class Ss{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gs(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return cE(this.persistence,new iE,e.initialUser,this.serializer)}Cu(e){return new fd(Wo.mi,this.serializer)}Du(e){return new pE}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ss.provider={build:()=>new Ss};class iI extends Ss{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Y(this.persistence.referenceDelegate instanceof bs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new zw(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ke.withCacheSize(this.cacheSizeBytes):ke.DEFAULT;return new fd((r=>bs.mi(r,t)),this.serializer)}}class go{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nI.bind(null,this.syncEngine),await ME(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new UE})()}createDatastore(e){const t=Gs(e.databaseInfo.databaseId),r=(function(i){return new EE(i)})(e.databaseInfo);return(function(i,a,l,u){return new AE(i,a,l,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,l){return new RE(r,s,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Jl(this.syncEngine,t,0)),(function(){return Wl.v()?new Wl:new gE})())}createSyncEngine(e,t){return(function(s,i,a,l,u,d,m){const g=new WE(s,i,a,l,u,d);return m&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=q(t);D(Kt,"RemoteStore shutting down."),r.Ea.add(5),await kr(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}go.provider={build:()=>new go};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Od{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):at("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="FirestoreClient";class oI{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Te.UNAUTHENTICATED,this.clientId=xo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{D(Nt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(D(Nt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Zo(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ji(n,e){n.asyncQueue.verifyOperationInProgress(),D(Nt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await md(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Zl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await aI(n);D(Nt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Gl(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Gl(e.remoteStore,s))),n._onlineComponents=e}async function aI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(Nt,"Using user provided OfflineComponentProvider");try{await ji(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;En("Error using user provided cache. Falling back to memory cache: "+t),await ji(n,new Ss)}}else D(Nt,"Using default OfflineComponentProvider"),await ji(n,new iI(void 0));return n._offlineComponents}async function Ld(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(Nt,"Using user provided OnlineComponentProvider"),await Zl(n,n._uninitializedComponentsProvider._online)):(D(Nt,"Using default OnlineComponentProvider"),await Zl(n,new go))),n._onlineComponents}function cI(n){return Ld(n).then((e=>e.syncEngine))}async function Md(n){const e=await Ld(n),t=e.eventManager;return t.onListen=HE.bind(null,e.syncEngine),t.onUnlisten=QE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=GE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=YE.bind(null,e.syncEngine),t}function lI(n,e,t={}){const r=new st;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,u,d){const m=new Od({next:w=>{m.Nu(),a.enqueueAndForget((()=>bd(i,g)));const S=w.docs.has(l);!S&&w.fromCache?d.reject(new N(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&u&&u.source==="server"?d.reject(new N(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),g=new Rd(Mo(l.path),m,{includeMetadataChanges:!0,qa:!0});return Ad(i,g)})(await Md(n),n.asyncQueue,e,t,r))),r.promise}function uI(n,e,t={}){const r=new st;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,u,d){const m=new Od({next:w=>{m.Nu(),a.enqueueAndForget((()=>bd(i,g))),w.fromCache&&u.source==="server"?d.reject(new N(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),g=new Rd(l,m,{includeMetadataChanges:!0,qa:!0});return Ad(i,g)})(await Md(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function Fd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="firestore.googleapis.com",tu=!0;class nu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ud,this.ssl=tu}else this.host=e.host,this.ssl=e.ssl??tu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=dd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<qw)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ry("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fd(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ys{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new gy;switch(r.type){case"firstParty":return new Ey(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=eu.get(t);r&&(D("ComponentProvider","Removing Datastore"),eu.delete(t),r.terminate())})(this),Promise.resolve()}}function hI(n,e,t,r={}){n=ct(n,Ys);const s=Pn(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(Su(`https://${l}`),Pu("Firestore",!0)),i.host!==Ud&&i.host!==l&&En("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Ze(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=Te.MOCK_USER;else{d=Pm(r.mockUserToken,n._app?.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Te(g)}n._authCredentials=new _y(new Ah(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nn(this.firestore,e,this._query)}}class ce{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ce(this.firestore,e,this._key)}toJSON(){return{type:ce._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Sr(t,ce._jsonSchema))return new ce(e,r||null,new M(X.fromString(t.referencePath)))}}ce._jsonSchemaVersion="firestore/documentReference/1.0",ce._jsonSchema={type:ae("string",ce._jsonSchemaVersion),referencePath:ae("string")};class Rt extends nn{constructor(e,t,r){super(e,t,Mo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ce(this.firestore,null,new M(e))}withConverter(e){return new Rt(this.firestore,e,this._path)}}function $v(n,e,...t){if(n=se(n),bh("collection","path",e),n instanceof Ys){const r=X.fromString(e,...t);return pl(r),new Rt(n,null,r)}{if(!(n instanceof ce||n instanceof Rt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return pl(r),new Rt(n.firestore,null,r)}}function jd(n,e,...t){if(n=se(n),arguments.length===1&&(e=xo.newId()),bh("doc","path",e),n instanceof Ys){const r=X.fromString(e,...t);return ml(r),new ce(n,null,new M(r))}{if(!(n instanceof ce||n instanceof Rt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return ml(r),new ce(n.firestore,n instanceof Rt?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="AsyncQueue";class su{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new gd(this,"async_queue_retry"),this._c=()=>{const r=Ui();r&&D(ru,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Ui();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ui();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new st;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Dn(e))throw e;D(ru,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,at("INTERNAL UNHANDLED ERROR: ",iu(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Xo.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&U(47125,{Pc:iu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function iu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Mn extends Ys{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new su,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new su(e),this._firestoreClient=void 0,await e}}}function dI(n,e){const t=typeof n=="object"?n:Io(),r=typeof n=="string"?n:Es,s=Xt(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Rm("firestore");i&&hI(s,...i)}return s}function ra(n){if(n._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||fI(n),n._firestoreClient}function fI(n){const e=n._freezeSettings(),t=(function(s,i,a,l){return new My(s,i,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Fd(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new oI(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oe(ye.fromBase64String(e))}catch(t){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Oe(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Oe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Sr(e,Oe._jsonSchema))return Oe.fromBase64String(e.bytes)}}Oe._jsonSchemaVersion="firestore/bytes/1.0",Oe._jsonSchema={type:ae("string",Oe._jsonSchemaVersion),bytes:ae("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Je._jsonSchemaVersion}}static fromJSON(e){if(Sr(e,Je._jsonSchema))return new Je(e.latitude,e.longitude)}}Je._jsonSchemaVersion="firestore/geoPoint/1.0",Je._jsonSchema={type:ae("string",Je._jsonSchemaVersion),latitude:ae("number"),longitude:ae("number")};/**
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
 */class Xe{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Xe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Sr(e,Xe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Xe(e.vectorValues);throw new N(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xe._jsonSchemaVersion="firestore/vectorValue/1.0",Xe._jsonSchema={type:ae("string",Xe._jsonSchemaVersion),vectorValues:ae("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=/^__.*__$/;class pI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ot(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pr(e,this.data,t,this.fieldTransforms)}}class Bd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ot(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function qd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{Ac:n})}}class Xs{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Xs({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ps(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(qd(this.Ac)&&mI.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class gI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Gs(e)}Cc(e,t,r,s=!1){return new Xs({Ac:e,methodName:t,Dc:r,path:_e.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sa(n){const e=n._freezeSettings(),t=Gs(n._databaseId);return new gI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function _I(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);ca("Data must be an object, but it was:",a,r);const l=zd(r,a);let u,d;if(i.merge)u=new Ve(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const w=_o(e,g,t);if(!a.contains(w))throw new N(P.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Hd(m,w)||m.push(w)}u=new Ve(m),d=a.fieldTransforms.filter((g=>u.covers(g.field)))}else u=null,d=a.fieldTransforms;return new pI(new xe(l),u,d)}class Zs extends Fn{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zs}}function $d(n,e,t){return new Xs({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ia extends Fn{_toFieldTransform(e){return new Uo(e.path,new Tr)}isEqual(e){return e instanceof ia}}class oa extends Fn{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=$d(this,e,!0),r=this.vc.map((i=>rn(i,t))),s=new An(r);return new Uo(e.path,s)}isEqual(e){return e instanceof oa&&Ze(this.vc,e.vc)}}class aa extends Fn{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=$d(this,e,!0),r=this.vc.map((i=>rn(i,t))),s=new bn(r);return new Uo(e.path,s)}isEqual(e){return e instanceof aa&&Ze(this.vc,e.vc)}}function yI(n,e,t,r){const s=n.Cc(1,e,t);ca("Data must be an object, but it was:",s,r);const i=[],a=xe.empty();Dt(r,((u,d)=>{const m=la(e,u,t);d=se(d);const g=s.yc(m);if(d instanceof Zs)i.push(m);else{const w=rn(d,g);w!=null&&(i.push(m),a.set(m,w))}}));const l=new Ve(i);return new Bd(a,l,s.fieldTransforms)}function wI(n,e,t,r,s,i){const a=n.Cc(1,e,t),l=[_o(e,r,t)],u=[s];if(i.length%2!=0)throw new N(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)l.push(_o(e,i[w])),u.push(i[w+1]);const d=[],m=xe.empty();for(let w=l.length-1;w>=0;--w)if(!Hd(d,l[w])){const S=l[w];let V=u[w];V=se(V);const L=a.yc(S);if(V instanceof Zs)d.push(S);else{const x=rn(V,L);x!=null&&(d.push(S),m.set(S,x))}}const g=new Ve(d);return new Bd(m,g,a.fieldTransforms)}function EI(n,e,t,r=!1){return rn(t,n.Cc(r?4:3,e))}function rn(n,e){if(Wd(n=se(n)))return ca("Unsupported field value:",e,n),zd(n,e);if(n instanceof Fn)return(function(r,s){if(!qd(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const l of r){let u=rn(l,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ow(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ee.fromDate(r);return{timestampValue:As(s.serializer,i)}}if(r instanceof ee){const i=new ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:As(s.serializer,i)}}if(r instanceof Je)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Oe)return{bytesValue:id(s.serializer,r._byteString)};if(r instanceof ce){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$o(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xe)return(function(a,l){return{mapValue:{fields:{[Dh]:{stringValue:Oh},[Is]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return Fo(l.serializer,d)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Fs(r)}`)})(n,e)}function zd(n,e){const t={};return Ph(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dt(n,((r,s)=>{const i=rn(s,e.mc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Wd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ee||n instanceof Je||n instanceof Oe||n instanceof ce||n instanceof Fn||n instanceof Xe)}function ca(n,e,t){if(!Wd(t)||!Rh(t)){const r=Fs(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function _o(n,e,t){if((e=se(e))instanceof Js)return e._internalPath;if(typeof e=="string")return la(n,e);throw Ps("Field path arguments must be of type string or ",n,!1,void 0,t)}const II=new RegExp("[~\\*/\\[\\]]");function la(n,e,t){if(e.search(II)>=0)throw Ps(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Js(...e.split("."))._internalPath}catch{throw Ps(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ps(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new N(P.INVALID_ARGUMENT,l+n+u)}function Hd(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ei("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class TI extends Gd{data(){return super.data()}}function ei(n,e){return typeof e=="string"?la(n,e):e instanceof Js?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ua{}class Kd extends ua{}function zv(n,e,...t){let r=[];e instanceof ua&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((u=>u instanceof ha)).length,l=i.filter((u=>u instanceof ti)).length;if(a>1||a>0&&l>0)throw new N(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class ti extends Kd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ti(e,t,r)}_apply(e){const t=this._parse(e);return Qd(e._query,t),new nn(e.firestore,e.converter,io(e._query,t))}_parse(e){const t=sa(e.firestore);return(function(i,a,l,u,d,m,g){let w;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new N(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){au(g,m);const V=[];for(const L of g)V.push(ou(u,i,L));w={arrayValue:{values:V}}}else w=ou(u,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||au(g,m),w=EI(l,a,g,m==="in"||m==="not-in");return oe.create(d,m,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Wv(n,e,t){const r=e,s=ei("where",n);return ti._create(s,r,t)}class ha extends ua{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ha(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:qe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)Qd(a,u),a=io(a,u)})(e._query,t),new nn(e.firestore,e.converter,io(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class da extends Kd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new da(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ir(i,a)})(e._query,this._field,this._direction);return new nn(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new On(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Hv(n,e="asc"){const t=e,r=ei("orderBy",n);return da._create(r,t)}function ou(n,e,t){if(typeof(t=se(t))=="string"){if(t==="")throw new N(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$h(e)&&t.indexOf("/")!==-1)throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(X.fromString(t));if(!M.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vl(n,new M(r))}if(t instanceof ce)return vl(n,t._key);throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fs(t)}.`)}function au(n,e){if(!Array.isArray(n)||n.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qd(n,e){const t=(function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class AI{convertValue(e,t="none"){switch(kt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ct(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Dt(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){const t=e.fields?.[Is].arrayValue?.values?.map((r=>re(r.doubleValue)));return new Xe(t)}convertGeoPoint(e){return new Je(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Bs(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(yr(e));default:return null}}convertTimestamp(e){const t=Pt(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=X.fromString(e);Y(hd(r),9688,{name:e});const s=new wr(r.get(1),r.get(3)),i=new M(r.popFirst(5));return s.isEqual(t)||at(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class ar{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wt extends Gd{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ls(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ei("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Wt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Wt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Wt._jsonSchema={type:ae("string",Wt._jsonSchemaVersion),bundleSource:ae("string","DocumentSnapshot"),bundleName:ae("string"),bundle:ae("string")};class ls extends Wt{data(e={}){return super.data(e)}}class _n{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ar(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new ls(this._firestore,this._userDataWriter,r.key,r,new ar(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const u=new ls(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ar(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const u=new ls(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ar(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:RI(l.type),doc:u,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_n._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function RI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(n){n=ct(n,ce);const e=ct(n.firestore,Mn);return lI(ra(e),n._key).then((t=>PI(e,n,t)))}_n._jsonSchemaVersion="firestore/querySnapshot/1.0",_n._jsonSchema={type:ae("string",_n._jsonSchemaVersion),bundleSource:ae("string","QuerySnapshot"),bundleName:ae("string"),bundle:ae("string")};class Yd extends AI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ce(this.firestore,null,t)}}function Gv(n){n=ct(n,nn);const e=ct(n.firestore,Mn),t=ra(e),r=new Yd(e);return vI(n._query),uI(t,n._query).then((s=>new _n(e,r,n,s)))}function Kv(n,e,t,...r){n=ct(n,ce);const s=ct(n.firestore,Mn),i=sa(s);let a;return a=typeof(e=se(e))=="string"||e instanceof Js?wI(i,"updateDoc",n._key,e,t,r):yI(i,"updateDoc",n._key,e),fa(s,[a.toMutation(n._key,Ue.exists(!0))])}function Qv(n){return fa(ct(n.firestore,Mn),[new jo(n._key,Ue.none())])}function Yv(n,e){const t=ct(n.firestore,Mn),r=jd(n),s=bI(n.converter,e);return fa(t,[_I(sa(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ue.exists(!1))]).then((()=>r))}function fa(n,e){return(function(r,s){const i=new st;return r.asyncQueue.enqueueAndForget((async()=>JE(await cI(r),s,i))),i.promise})(ra(n),e)}function PI(n,e,t){const r=t.docs.get(e._key),s=new Yd(n);return new Wt(n,s,e._key,r,new ar(t.hasPendingWrites,t.fromCache),e.converter)}function Jv(){return new ia("serverTimestamp")}function Xv(...n){return new oa("arrayUnion",n)}function Zv(...n){return new aa("arrayRemove",n)}(function(e,t=!0){(function(s){Nn=s})(Cn),et(new je("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Mn(new yy(r.getProvider("auth-internal")),new Iy(a,r.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wr(d.options.projectId,m)})(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Le(ul,hl,e),Le(ul,hl,"esm2020")})();const Jd="@firebase/installations",ma="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=1e4,Zd=`w:${ma}`,ef="FIS_v2",CI="https://firebaseinstallations.googleapis.com/v1",kI=3600*1e3,xI="installations",NI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qt=new Jt(xI,NI,VI);function tf(n){return n instanceof $e&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf({projectId:n}){return`${CI}/projects/${n}/installations`}function rf(n){return{token:n.token,requestStatus:2,expiresIn:OI(n.expiresIn),creationTime:Date.now()}}async function sf(n,e){const r=(await e.json()).error;return Qt.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function of({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function DI(n,{refreshToken:e}){const t=of(n);return t.append("Authorization",LI(e)),t}async function af(n){const e=await n();return e.status>=500&&e.status<600?n():e}function OI(n){return Number(n.replace("s","000"))}function LI(n){return`${ef} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=nf(n),s=of(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:t,authVersion:ef,appId:n.appId,sdkVersion:Zd},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await af(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:rf(d.authToken)}}else throw await sf("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function FI(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=/^[cdef][\w-]{21}$/,yo="";function jI(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=BI(n);return UI.test(t)?t:yo}catch{return yo}}function BI(n){return FI(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=new Map;function uf(n,e){const t=ni(n);hf(t,e),qI(t,e)}function hf(n,e){const t=lf.get(n);if(t)for(const r of t)r(e)}function qI(n,e){const t=$I();t&&t.postMessage({key:n,fid:e}),zI()}let zt=null;function $I(){return!zt&&"BroadcastChannel"in self&&(zt=new BroadcastChannel("[Firebase] FID Change"),zt.onmessage=n=>{hf(n.data.key,n.data.fid)}),zt}function zI(){lf.size===0&&zt&&(zt.close(),zt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="firebase-installations-database",HI=1,Yt="firebase-installations-store";let Bi=null;function pa(){return Bi||(Bi=Du(WI,HI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Yt)}}})),Bi}async function Cs(n,e){const t=ni(n),s=(await pa()).transaction(Yt,"readwrite"),i=s.objectStore(Yt),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&uf(n,e.fid),e}async function df(n){const e=ni(n),r=(await pa()).transaction(Yt,"readwrite");await r.objectStore(Yt).delete(e),await r.done}async function ri(n,e){const t=ni(n),s=(await pa()).transaction(Yt,"readwrite"),i=s.objectStore(Yt),a=await i.get(t),l=e(a);return l===void 0?await i.delete(t):await i.put(l,t),await s.done,l&&(!a||a.fid!==l.fid)&&uf(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(n){let e;const t=await ri(n.appConfig,r=>{const s=GI(r),i=KI(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===yo?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function GI(n){const e=n||{fid:jI(),registrationStatus:0};return ff(e)}function KI(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Qt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=QI(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:YI(n)}:{installationEntry:e}}async function QI(n,e){try{const t=await MI(n,e);return Cs(n.appConfig,t)}catch(t){throw tf(t)&&t.customData.serverCode===409?await df(n.appConfig):await Cs(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function YI(n){let e=await cu(n.appConfig);for(;e.registrationStatus===1;)await cf(100),e=await cu(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await ga(n);return r||t}return e}function cu(n){return ri(n,e=>{if(!e)throw Qt.create("installation-not-found");return ff(e)})}function ff(n){return JI(n)?{fid:n.fid,registrationStatus:0}:n}function JI(n){return n.registrationStatus===1&&n.registrationTime+Xd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI({appConfig:n,heartbeatServiceProvider:e},t){const r=ZI(n,t),s=DI(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Zd,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await af(()=>fetch(r,l));if(u.ok){const d=await u.json();return rf(d)}else throw await sf("Generate Auth Token",u)}function ZI(n,{fid:e}){return`${nf(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(n,e=!1){let t;const r=await ri(n.appConfig,i=>{if(!mf(i))throw Qt.create("not-registered");const a=i.authToken;if(!e&&nT(a))return i;if(a.requestStatus===1)return t=eT(n,e),i;{if(!navigator.onLine)throw Qt.create("app-offline");const l=sT(i);return t=tT(n,l),l}});return t?await t:r.authToken}async function eT(n,e){let t=await lu(n.appConfig);for(;t.authToken.requestStatus===1;)await cf(100),t=await lu(n.appConfig);const r=t.authToken;return r.requestStatus===0?_a(n,e):r}function lu(n){return ri(n,e=>{if(!mf(e))throw Qt.create("not-registered");const t=e.authToken;return iT(t)?{...e,authToken:{requestStatus:0}}:e})}async function tT(n,e){try{const t=await XI(n,e),r={...e,authToken:t};return await Cs(n.appConfig,r),t}catch(t){if(tf(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await df(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Cs(n.appConfig,r)}throw t}}function mf(n){return n!==void 0&&n.registrationStatus===2}function nT(n){return n.requestStatus===2&&!rT(n)}function rT(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+kI}function sT(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function iT(n){return n.requestStatus===1&&n.requestTime+Xd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oT(n){const e=n,{installationEntry:t,registrationPromise:r}=await ga(e);return r?r.catch(console.error):_a(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aT(n,e=!1){const t=n;return await cT(t),(await _a(t,e)).token}async function cT(n){const{registrationPromise:e}=await ga(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(n){if(!n||!n.options)throw qi("App Configuration");if(!n.name)throw qi("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw qi(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function qi(n){return Qt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="installations",uT="installations-internal",hT=n=>{const e=n.getProvider("app").getImmediate(),t=lT(e),r=Xt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},dT=n=>{const e=n.getProvider("app").getImmediate(),t=Xt(e,pf).getImmediate();return{getId:()=>oT(t),getToken:s=>aT(t,s)}};function fT(){et(new je(pf,hT,"PUBLIC")),et(new je(uT,dT,"PRIVATE"))}fT();Le(Jd,ma);Le(Jd,ma,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="analytics",mT="firebase_id",pT="origin",gT=60*1e3,_T="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ya="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=new Vs("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},De=new Jt("analytics","Analytics",yT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(n){if(!n.startsWith(ya)){const e=De.create("invalid-gtag-resource",{gtagURL:n});return Se.warn(e.message),""}return n}function gf(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function ET(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function IT(n,e){const t=ET("firebase-js-sdk-policy",{createScriptURL:wT}),r=document.createElement("script"),s=`${ya}?l=${n}&id=${e}`;r.src=t?t?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function TT(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function vT(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const u=(await gf(t)).find(d=>d.measurementId===s);u&&await e[u.appId]}}catch(l){Se.error(l)}n("config",s,i)}async function AT(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await gf(t);for(const u of a){const d=l.find(g=>g.measurementId===u),m=d&&e[d.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){Se.error(i)}}function bT(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[l,u]=a;await AT(n,e,t,l,u)}else if(i==="config"){const[l,u]=a;await vT(n,e,t,r,l,u)}else if(i==="consent"){const[l,u]=a;n("consent",l,u)}else if(i==="get"){const[l,u,d]=a;n("get",l,u,d)}else if(i==="set"){const[l]=a;n("set",l)}else n(i,...a)}catch(l){Se.error(l)}}return s}function RT(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=bT(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function ST(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ya)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=30,CT=1e3;class kT{constructor(e={},t=CT){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const _f=new kT;function xT(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function NT(n){const{appId:e,apiKey:t}=n,r={method:"GET",headers:xT(t)},s=_T.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let a="";try{const l=await i.json();l.error?.message&&(a=l.error.message)}catch{}throw De.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function VT(n,e=_f,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw De.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw De.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new LT;return setTimeout(async()=>{l.abort()},gT),yf({appId:r,apiKey:s,measurementId:i},a,l,e)}async function yf(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=_f){const{appId:i,measurementId:a}=n;try{await DT(r,e)}catch(l){if(a)return Se.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:a};throw l}try{const l=await NT(n);return s.deleteThrottleMetadata(i),l}catch(l){const u=l;if(!OT(u)){if(s.deleteThrottleMetadata(i),a)return Se.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`),{appId:i,measurementId:a};throw l}const d=Number(u?.customData?.httpStatus)===503?Dc(t,s.intervalMillis,PT):Dc(t,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return s.setThrottleMetadata(i,m),Se.debug(`Calling attemptFetch again in ${d} millis`),yf(n,m,r,s)}}function DT(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(De.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function OT(n){if(!(n instanceof $e)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class LT{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function MT(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a={...r,send_to:i};n("event",t,a)}}async function FT(n,e,t,r){if(r&&r.global){const s={};for(const i of Object.keys(t))s[`user_properties.${i}`]=t[i];return n("set",s),Promise.resolve()}else{const s=await e;n("config",s,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(){if(ku())try{await xu()}catch(n){return Se.warn(De.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return Se.warn(De.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function jT(n,e,t,r,s,i,a){const l=VT(n);l.then(w=>{t[w.measurementId]=w.appId,n.options.measurementId&&w.measurementId!==n.options.measurementId&&Se.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>Se.error(w)),e.push(l);const u=UT().then(w=>{if(w)return r.getId()}),[d,m]=await Promise.all([l,u]);ST(i)||IT(i,d.measurementId),s("js",new Date);const g=a?.config??{};return g[pT]="firebase",g.update=!0,m!=null&&(g[mT]=m),s("config",d.measurementId,g),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.app=e}_delete(){return delete yn[this.app.options.appId],Promise.resolve()}}let yn={},uu=[];const hu={};let $i="dataLayer",qT="gtag",du,wa,fu=!1;function $T(){const n=[];if(Cu()&&n.push("This is a browser extension environment."),Mm()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=De.create("invalid-analytics-context",{errorInfo:e});Se.warn(t.message)}}function zT(n,e,t){$T();const r=n.options.appId;if(!r)throw De.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Se.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw De.create("no-api-key");if(yn[r]!=null)throw De.create("already-exists",{id:r});if(!fu){TT($i);const{wrappedGtag:i,gtagCore:a}=RT(yn,uu,hu,$i,qT);wa=i,du=a,fu=!0}return yn[r]=jT(n,uu,hu,e,du,$i,t),new BT(n)}function WT(n=Io()){n=se(n);const e=Xt(n,ks);return e.isInitialized()?e.getImmediate():HT(n)}function HT(n,e={}){const t=Xt(n,ks);if(t.isInitialized()){const s=t.getImmediate();if(Ze(e,t.getOptions()))return s;throw De.create("already-initialized")}return t.initialize({options:e})}function GT(n,e,t){n=se(n),FT(wa,yn[n.app.options.appId],e,t).catch(r=>Se.error(r))}function KT(n,e,t,r){n=se(n),MT(wa,yn[n.app.options.appId],e,t,r).catch(s=>Se.error(s))}const mu="@firebase/analytics",pu="0.10.19";function QT(){et(new je(ks,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return zT(r,s,t)},"PUBLIC")),et(new je("analytics-internal",n,"PRIVATE")),Le(mu,pu),Le(mu,pu,"esm2020");function n(e){try{const t=e.getProvider(ks).getImmediate();return{logEvent:(r,s,i)=>KT(t,r,s,i),setUserProperties:(r,s)=>GT(t,r,s)}}catch(t){throw De.create("interop-component-reg-failed",{reason:t})}}}QT();const wo={apiKey:"AIzaSyBkMktbTfBNIdhtBwCC_cRBEavKeuTyCGA",authDomain:"myschola-5ec1f.firebaseapp.com",projectId:"myschola-5ec1f",storageBucket:"myschola-5ec1f.appspot.com",messagingSenderId:"927860875256",appId:"1:927860875256:web:ce73f8eabd09cac6f3400d",measurementId:"G-XTC703H7RN"};if(!wo.apiKey||!wo.projectId)throw console.error("Firebase configuration is missing. Please check your .env file."),new Error("Firebase configuration error");const Ea=Ou(wo),YT=dy(Ea),JT=dI(Ea);WT(Ea);function zi({children:n}){const[e,t]=B.useState(!0),[r,s]=B.useState(!1),[i,a]=B.useState(!1),l=xs();return B.useEffect(()=>{const u=t_(YT,async d=>{if(d)try{(await SI(jd(JT,"students",d.uid))).exists()?(s(!0),a(!0)):(s(!1),a(!1))}catch(m){console.error("Error checking student status:",m),s(!1),a(!1)}else s(!1),a(!1);t(!1)});return()=>u()},[]),e?E.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:E.jsxs("div",{className:"text-center",children:[E.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"}),E.jsx("p",{className:"mt-4 text-gray-600",children:"Loading..."})]})}):!r||!i?E.jsx(nm,{to:"/login",state:{from:l},replace:!0}):n}function XT(){typeof window<"u"&&window.fbq&&window.fbq("track","PageView")}function eA(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booking",content_category:"GCSE Tuition"})}function tA(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"WhatsApp Inquiry",content_category:"GCSE Tuition"})}function nA(){typeof window<"u"&&window.fbq&&window.fbq("track","Purchase",{currency:"GBP"})}function rA(){typeof window<"u"&&window.fbq&&window.fbq("track","Lead",{content_name:"Consultation Booked",content_category:"GCSE Tuition"})}function sA(){typeof window<"u"&&window.fbq&&window.fbq("track","BOOK NOW",{value:0,currency:"GBP"})}const ZT="/assets/testimonial1-5gwMtUAO-5gwMtUAO.mp4",ev="/assets/testimonial2-D0fw-lJA.mp4",tv="/assets/testmonial3-CD7BqzK1.mp4",nv="/assets/testimonial4-DLVnnJv5.mp4",rv="/assets/testimonial5-CpY5IMND.mp4",sv="/assets/nottingham-university-logo-Bvc07xhs.png",iv="/assets/King's_College_London_logo-XbRZheqd.svg",ov="/assets/cambridge-64gH2uf-.jpg",av="/assets/Imperial-College-Logo-CiZ74UPN.png",cv="/assets/warwick-DzXBUNN5.svg",lv="Free GCSE Strategy Call",uv="t8R7tYIlOf4",hv=1500,dv=(()=>{const n="https://calendly.com/myscholaukwebinar/new-meeting?month=2026-03";return typeof window>"u"?n:`${n}&embed_domain=${encodeURIComponent(window.location.hostname)}&embed_type=Inline`})();function fv({url:n,title:e}){const[t,r]=B.useState(!1),s=B.useRef(null);return B.useEffect(()=>{if(!s.current||t)return;const i=new IntersectionObserver(a=>{a.forEach(l=>{l.isIntersecting&&r(!0)})},{rootMargin:"50px",threshold:.01});return i.observe(s.current),()=>i.disconnect()},[t]),E.jsx("div",{ref:s,className:"h-full w-full",children:t?E.jsx("iframe",{src:n,className:"h-full w-full",style:{minHeight:"690px"},title:e,frameBorder:"0",loading:"lazy"}):E.jsxs("div",{className:"flex min-h-[420px] w-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50",children:[E.jsx("div",{className:"mb-4 h-11 w-11 animate-spin rounded-full border-b-2 border-blue-600"}),E.jsx("p",{className:"text-sm font-semibold text-slate-600",children:"Loading booking times..."})]})})}function mv({src:n,className:e}){const t=B.useRef(null),[r,s]=B.useState(!1),i=B.useRef(null);return B.useEffect(()=>{if(!i.current||r)return;const a=new IntersectionObserver(l=>{l.forEach(u=>{u.isIntersecting&&s(!0)})},{rootMargin:"100px",threshold:.1});return a.observe(i.current),()=>a.disconnect()},[r]),B.useEffect(()=>{const a=t.current;if(!a||!r)return;const l=()=>{a.readyState>=2&&(a.currentTime=.01,a.pause())};return a.addEventListener("loadedmetadata",l),a.readyState<2?a.load():l(),()=>{a.removeEventListener("loadedmetadata",l)}},[n,r]),E.jsx("div",{ref:i,className:e,children:r?E.jsxs("video",{ref:t,className:"w-full h-auto",controls:!0,playsInline:!0,preload:"metadata",width:640,height:360,children:[E.jsx("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]}):E.jsx("div",{className:"flex aspect-video w-full items-center justify-center bg-slate-900",children:E.jsx("div",{className:"h-12 w-12 animate-pulse rounded-full bg-white/10"})})})}function pv({target:n,suffix:e=""}){const t=B.useRef(null),[r,s]=B.useState(!1),[i,a]=B.useState(0);return B.useEffect(()=>{if(!t.current||r)return;if(typeof window>"u"||!("IntersectionObserver"in window)){s(!0);return}const l=new IntersectionObserver(u=>{u.forEach(d=>{d.isIntersecting&&(s(!0),l.disconnect())})},{threshold:.35});return l.observe(t.current),()=>l.disconnect()},[r]),B.useEffect(()=>{if(!r)return;if(typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){a(n);return}const l=window.performance?window.performance.now():Date.now();let u;const d=m=>{const g=m||Date.now(),w=Math.min((g-l)/hv,1),S=1-Math.pow(1-w,3);a(Math.round(n*S)),w<1&&(u=window.requestAnimationFrame(d))};return u=window.requestAnimationFrame(d),()=>window.cancelAnimationFrame(u)},[r,n]),E.jsxs("span",{ref:t,children:[i.toLocaleString("en-GB"),e]})}function gv({videoId:n,title:e}){const[t,r]=B.useState(!1);return t?E.jsx("iframe",{className:"h-full w-full",src:`https://www.youtube.com/embed/${n}?rel=0&autoplay=1`,title:e,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0}):E.jsxs("button",{type:"button",className:"relative block h-full w-full cursor-pointer border-0 p-0",style:{touchAction:"manipulation"},onClick:()=>r(!0),"aria-label":`Play: ${e}`,children:[E.jsx("img",{src:`https://i.ytimg.com/vi/${n}/sddefault.jpg`,alt:e,className:"h-full w-full object-cover",width:640,height:480,fetchpriority:"high",decoding:"async",onError:s=>{s.currentTarget.src=`https://i.ytimg.com/vi/${n}/mqdefault.jpg`}}),E.jsx("span",{className:"absolute inset-0 flex items-center justify-center",children:E.jsx("span",{className:"flex h-16 w-16 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm sm:h-20 sm:w-20",children:E.jsx("svg",{className:"ml-1 h-7 w-7 text-white sm:h-9 sm:w-9",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:E.jsx("path",{d:"M8 5v14l11-7z"})})})})]})}function gu(){const n=[{src:rv,id:5,name:"Labib",subjects:["English Literature"],improvedBy:3},{src:nv,id:4,name:"Mia",subjects:["English Literature"],improvedBy:3},{src:tv,id:3,name:"Eyaad",subjects:["Physics"],improvedBy:2},{src:ev,id:2,name:"Atiya",subjects:["Maths","English Literature"],improvedBy:2},{src:ZT,id:1,name:"Nihal",subjects:["Maths","English Literature"],improvedBy:1}],e=[{src:sv,alt:"University of Nottingham"},{src:iv,alt:"King's College London"},{src:ov,alt:"University of Cambridge"},{src:av,alt:"Imperial College London"},{src:cv,alt:"University of Warwick"}],t=[{target:500,suffix:"+",label:"Students taught",icon:cm},{target:3e3,suffix:"+",label:"Lessons delivered",icon:lm},{target:1e3,suffix:"+",label:"Grade 7-9 results",icon:um}],r=n.length,s=[...n,...n,...n],i=r,a=r*2,[l,u]=B.useState(i),[d,m]=B.useState(!0),[g,w]=B.useState(()=>typeof window>"u"||window.innerWidth>=1280?3:window.innerWidth>=768?2:1),S=B.useRef(null);B.useEffect(()=>{const O=()=>{const le=window.innerWidth>=1280?3:window.innerWidth>=768?2:1;w(le)},$=()=>{S.current&&clearTimeout(S.current),S.current=setTimeout(O,150)};return O(),window.addEventListener("resize",$,{passive:!0}),()=>{window.removeEventListener("resize",$),S.current&&clearTimeout(S.current)}},[]),B.useEffect(()=>{if(l<i||l>=a){m(!1);const O=l<i?l+r:l-r;u(O),requestAnimationFrame(()=>{requestAnimationFrame(()=>m(!0))})}},[l,i,a,r]);const V=B.useMemo(()=>({transform:`translateX(calc(-${l} * (100% / ${g})))`}),[l,g]),L=O=>O===1?"Improved by 1 grade":`Improved by ${O} grades`,x=()=>{u(O=>O-1)},W=()=>{u(O=>O+1)};return E.jsx("div",{className:"min-h-screen bg-slate-950 text-white",children:E.jsxs("main",{className:"mx-auto max-w-6xl px-4 py-6 sm:py-8",children:[E.jsxs("section",{className:"mx-auto max-w-5xl text-center",children:[E.jsx("h1",{className:"mx-auto mb-5 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl",children:"Every test they take without fixing this costs them marks - watch this now."}),E.jsx("div",{className:"overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl",children:E.jsx("div",{className:"aspect-video w-full",children:E.jsx(gv,{videoId:uv,title:"MySchola GCSE strategy video"})})}),E.jsxs("div",{className:"mt-6",children:[E.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-blue-500/15 px-4 py-2 text-sm font-bold uppercase tracking-wide text-blue-100 ring-1 ring-blue-300/30",children:[E.jsx(om,{className:"h-4 w-4","aria-hidden":"true"}),lv]}),E.jsx("p",{className:"mx-auto mt-4 max-w-3xl text-base font-semibold leading-7 text-slate-300 sm:text-xl sm:leading-8",children:"Watch this video to see why GCSE students stay stuck, then book your free strategy call before the same mistakes cost them again."}),E.jsxs("a",{href:"#booking",className:"mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-8 py-4 text-lg font-black text-white shadow-[0_18px_45px_rgba(59,130,246,0.45)] transition hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300/50",children:[E.jsx(am,{className:"h-5 w-5","aria-hidden":"true"}),"Book Free Strategy Call for More Information"]}),E.jsx("div",{className:"mx-auto mt-7 grid max-w-5xl gap-5 rounded-2xl bg-black/25 px-4 py-5 sm:grid-cols-3",children:t.map(O=>{const $=O.icon;return E.jsxs("div",{className:"flex items-center justify-center gap-3 text-center",children:[E.jsx($,{className:"h-9 w-9 shrink-0 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.45)]","aria-hidden":"true"}),E.jsxs("div",{children:[E.jsx("div",{className:"text-3xl font-black leading-none text-white sm:text-4xl",children:E.jsx(pv,{target:O.target,suffix:O.suffix})}),E.jsx("div",{className:"mt-1 text-xs font-black uppercase tracking-wide text-slate-200",children:O.label})]})]},O.label)})}),E.jsx("p",{className:"mx-auto mt-4 max-w-2xl rounded-full border border-amber-300/25 bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-100",children:"We only have a limited number of students we are taking on this month."})]})]}),E.jsxs("section",{className:"mx-auto mt-10 max-w-5xl",style:{contentVisibility:"auto",containIntrinsicSize:"auto 300px"},children:[E.jsxs("div",{className:"text-center",children:[E.jsx("h2",{className:"text-2xl font-black text-white sm:text-3xl",children:"Our students have gone on to these universities"}),E.jsx("p",{className:"mt-2 text-sm font-semibold text-slate-300",children:"Proof that the right GCSE strategy can create real academic momentum."})]}),E.jsx("div",{className:"relative mt-6 overflow-hidden",children:E.jsx("div",{className:"flex animate-marquee",children:[...e,...e].map((O,$)=>E.jsx("div",{className:"mx-3 flex-shrink-0 sm:mx-4",children:E.jsx("div",{className:"flex h-24 w-44 items-center justify-center rounded-xl bg-white p-5 shadow-sm sm:h-28 sm:w-56",children:E.jsx("img",{src:O.src,alt:O.alt,className:"h-full w-full object-contain",loading:"lazy",width:224,height:112})})},`${O.alt}-${$}`))})})]}),E.jsxs("section",{className:"mx-auto mt-12 max-w-5xl",style:{contentVisibility:"auto",containIntrinsicSize:"auto 500px"},children:[E.jsxs("div",{className:"text-center",children:[E.jsx("h2",{className:"text-2xl font-black text-white sm:text-3xl",children:"Watch students explain the results"}),E.jsx("p",{className:"mt-2 text-sm font-semibold text-slate-300",children:"Real GCSE students sharing how their marks moved after structured support."})]}),E.jsxs("div",{className:"relative mt-8 sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-4",children:[E.jsx("button",{type:"button",onClick:x,className:"hidden h-12 w-12 items-center justify-center rounded-full bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950 sm:flex","aria-label":"Previous testimonial videos",title:"Previous",children:E.jsx(vc,{className:"h-5 w-5","aria-hidden":"true"})}),E.jsx("div",{className:"overflow-hidden sm:col-start-2",children:E.jsx("div",{className:`flex ${d?"transition-transform duration-500 ease-out":""}`,style:V,children:s.map((O,$)=>{const le=Math.floor(g/2),we=$===l+le;return E.jsx("div",{className:"flex-shrink-0 px-3",style:{width:`${100/g}%`},children:E.jsxs("div",{className:`h-full overflow-hidden rounded-2xl bg-white text-slate-900 transition-all duration-500 ${we?"scale-100 opacity-100 shadow-2xl":"scale-95 opacity-70 shadow-md"}`,children:[E.jsx(mv,{src:O.src,className:"w-full h-auto"}),E.jsxs("div",{className:"p-4 text-center",children:[E.jsx("p",{className:"text-lg font-bold text-slate-900",children:O.name}),E.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold",children:[E.jsx("span",{className:"inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700",children:O.subjects.join(" / ")}),E.jsx("span",{className:"inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700",children:L(O.improvedBy)})]})]})]})},`${O.id}-${$}`)})})}),E.jsx("button",{type:"button",onClick:W,className:"hidden h-12 w-12 items-center justify-center rounded-full bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950 sm:flex","aria-label":"Next testimonial videos",title:"Next",children:E.jsx(us,{className:"h-5 w-5","aria-hidden":"true"})}),E.jsxs("div",{className:"mt-4 flex items-center justify-between px-2 sm:hidden",children:[E.jsx("button",{type:"button",onClick:x,className:"flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950","aria-label":"Previous testimonial videos",title:"Previous",children:E.jsx(vc,{className:"h-5 w-5","aria-hidden":"true"})}),E.jsx("button",{type:"button",onClick:W,className:"flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-blue-700 shadow-lg transition hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950","aria-label":"Next testimonial videos",title:"Next",children:E.jsx(us,{className:"h-5 w-5","aria-hidden":"true"})})]})]})]}),E.jsxs("section",{id:"booking",className:"mx-auto mt-10 max-w-5xl rounded-2xl border border-white/10 bg-white p-4 text-slate-900 shadow-2xl sm:p-5",style:{contentVisibility:"auto",containIntrinsicSize:"auto 700px"},children:[E.jsxs("div",{className:"mb-4 text-center",children:[E.jsx("h2",{className:"text-2xl font-black text-slate-900",children:"Choose your strategy call time"}),E.jsx("p",{className:"mt-1 text-sm font-semibold text-slate-600",children:"Select a slot below and Calendly will send the confirmation."})]}),E.jsx("div",{className:"overflow-hidden rounded-xl border border-slate-100",children:E.jsx(fv,{url:dv,title:"Book your GCSE strategy call"})})]})]})})}const _v="myscholauk@gmail.com",yv="447344193804",_u=`https://wa.me/${yv}`;function yu(){const n=xs(),e=n.state&&n.state.fromRegistration,t=typeof window<"u"&&window.sessionStorage.getItem("strategyCallRegistered")==="true",r=!!(e||t),s=`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(_u)}`;return B.useEffect(()=>{typeof window>"u"||window.Calendly?.closePopupWidget?.()},[]),E.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50",children:E.jsx("div",{className:"mx-auto max-w-5xl px-4 py-16 sm:py-20",children:E.jsxs("div",{className:"overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 shadow-[0_30px_80px_rgba(15,23,42,0.08)]",children:[E.jsxs("div",{className:"bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400 px-8 py-10 text-white sm:px-10",children:[E.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-semibold",children:[E.jsx(Ac,{className:"h-4 w-4","aria-hidden":"true"}),"Booking confirmed"]}),E.jsx("h1",{className:"mt-4 text-3xl font-bold sm:text-4xl",children:"Your MySchola strategy call is booked."}),E.jsx("p",{className:"mt-3 max-w-3xl text-base text-white/90 sm:text-lg",children:"Check the email you used to book. Your confirmation contains your scheduled time, your private Zoom link, and your reschedule options."})]}),E.jsxs("div",{className:"px-8 py-8 sm:px-10 sm:py-10",children:[r?E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"grid gap-4 lg:grid-cols-3",children:[E.jsxs("div",{className:"rounded-3xl border border-slate-200 bg-slate-50 p-6",children:[E.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-600",children:[E.jsx(bc,{className:"h-4 w-4 text-blue-600","aria-hidden":"true"}),"Confirmation email"]}),E.jsx("p",{className:"mt-3 text-lg font-bold text-gray-900",children:"Check your inbox first"}),E.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Search for your booking confirmation from MySchola or Calendly if it has not appeared yet."})]}),E.jsxs("div",{className:"rounded-3xl border border-blue-200 bg-blue-50 p-6",children:[E.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-blue-700",children:[E.jsx(hm,{className:"h-4 w-4","aria-hidden":"true"}),"Private Zoom link"]}),E.jsx("p",{className:"mt-3 text-lg font-bold text-gray-900",children:"Your Zoom link is in the confirmation email"}),E.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Use the private Zoom link in that email at your booked time. If you cannot find it, message us and we will resend the details."})]}),E.jsxs("div",{className:"rounded-3xl border border-emerald-200 bg-emerald-50 p-6",children:[E.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-700",children:[E.jsx(Ac,{className:"h-4 w-4","aria-hidden":"true"}),"Before the call"]}),E.jsx("p",{className:"mt-3 text-lg font-bold text-gray-900",children:"Come ready with your child's current grades and main concerns"}),E.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"We will use the call to identify the main barriers, map out the right support, and show you exactly how our programme works."})]})]}),E.jsxs("div",{className:"mt-8 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 sm:p-8",children:[E.jsxs("div",{className:"max-w-3xl",children:[E.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.2em] text-blue-700",children:"Need the details quickly?"}),E.jsx("h2",{className:"mt-3 text-2xl font-bold text-gray-900 sm:text-3xl",children:"Everything you need for your strategy call is below."}),E.jsx("p",{className:"mt-3 text-base text-gray-600 sm:text-lg",children:"If you need help before the call, contact us on WhatsApp or email and we will get back to you as quickly as possible."})]}),E.jsxs("div",{className:"mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_320px]",children:[E.jsxs("div",{className:"grid gap-4",children:[E.jsxs("div",{className:"rounded-3xl border border-green-200 bg-white p-6 shadow-sm",children:[E.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-green-700",children:[E.jsx(Rc,{className:"h-4 w-4","aria-hidden":"true"}),"WhatsApp"]}),E.jsx("p",{className:"mt-3 text-xl font-bold text-gray-900",children:"Message us directly on WhatsApp"}),E.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Use WhatsApp if you need us to resend your booking details or help you locate the Zoom link before the call."}),E.jsxs("a",{href:_u,target:"_blank",rel:"noopener noreferrer",className:"mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700",children:["Open WhatsApp chat",E.jsx(us,{className:"h-4 w-4","aria-hidden":"true"})]}),E.jsx("p",{className:"mt-3 text-sm font-semibold text-gray-700",children:"WhatsApp: +44 7344 193804"})]}),E.jsxs("div",{className:"rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",children:[E.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-700",children:[E.jsx(bc,{className:"h-4 w-4 text-blue-600","aria-hidden":"true"}),"Email"]}),E.jsx("p",{className:"mt-3 text-xl font-bold text-gray-900",children:"myscholauk@gmail.com"}),E.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"If you prefer email, contact us here and we can resend your confirmation details or answer any questions before the call."}),E.jsxs("a",{href:`mailto:${_v}`,className:"mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50",children:["Email MySchola",E.jsx(us,{className:"h-4 w-4","aria-hidden":"true"})]})]})]}),E.jsxs("div",{className:"rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm",children:[E.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-green-700",children:[E.jsx(Rc,{className:"h-4 w-4","aria-hidden":"true"}),"WhatsApp QR code"]}),E.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Scan this code on your phone to open a WhatsApp chat with MySchola."}),E.jsx("img",{src:s,alt:"WhatsApp QR code for MySchola",className:"mx-auto mt-5 h-52 w-52 rounded-2xl border border-slate-100",loading:"lazy"})]})]})]})]}):E.jsxs("div",{className:"rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8",children:[E.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.2em] text-amber-700",children:"No booking found"}),E.jsx("h2",{className:"mt-3 text-2xl font-bold text-gray-900",children:"Book your strategy call first to view the confirmation details."}),E.jsx("p",{className:"mt-3 max-w-2xl text-sm text-gray-700 sm:text-base",children:"Once you complete your booking, this page will show the next-step details for your Zoom call, along with the WhatsApp and email contact options."})]}),E.jsxs("div",{className:"mt-10 flex flex-wrap gap-4",children:[E.jsx(Tc,{to:"/book-strategy-call",className:"inline-flex items-center justify-center rounded-full border border-gray-200 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50",children:"Back to strategy call page"}),E.jsx(Tc,{to:"/",className:"inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700",children:"Back to home"})]})]})]})})})}const wu=B.lazy(()=>Pe(()=>import("./Home-B4h7b_40.js"),__vite__mapDeps([0,1,2]))),wv=B.lazy(()=>Pe(()=>import("./Login-DLo4PFNX.js"),__vite__mapDeps([3,1,2]))),Ev=B.lazy(()=>Pe(()=>import("./StudentDashboard-DR2h8B15.js"),__vite__mapDeps([4,1,5,6,2]))),Iv=B.lazy(()=>Pe(()=>import("./Recordings-BuD7rvPm.js"),__vite__mapDeps([7,1,5,6,2]))),Tv=B.lazy(()=>Pe(()=>import("./Homework-CPXzsF49.js"),__vite__mapDeps([8,1,5,6,2]))),vv=B.lazy(()=>Pe(()=>import("./Admin-DNxO0lHR.js"),__vite__mapDeps([9,1,10,6,2]))),Av=B.lazy(()=>Pe(()=>import("./ShareLink-Bfe3FSs7.js"),__vite__mapDeps([11,1,10,2]))),bv=B.lazy(()=>Pe(()=>import("./HomeworkShareLink-BMVmaYke.js"),__vite__mapDeps([12,1,10,2]))),Rv=B.lazy(()=>Pe(()=>import("./PaymentSuccess-BvQu6Mag.js"),__vite__mapDeps([13,1,2]))),Sv=B.lazy(()=>Pe(()=>import("./PaymentConfirmation-CQfzR81z.js"),__vite__mapDeps([14,1,2]))),Pv=B.lazy(()=>Pe(()=>import("./BookingSuccess-DsxD7wZc.js"),__vite__mapDeps([15,1,2])));B.lazy(()=>Pe(()=>import("./Booking-ClSdgOcz.js"),__vite__mapDeps([16,1,2])));const Cv=B.lazy(()=>Pe(()=>import("./Courses-DEQVLXBI.js"),__vite__mapDeps([17,1,2]))),kv=B.lazy(()=>Pe(()=>import("./Package-CZx91rt3.js"),__vite__mapDeps([18,1,2]))),xv=B.lazy(()=>Pe(()=>import("./Timetable-Cjj9Emw_.js"),__vite__mapDeps([19,1,2])));function Nv(){return E.jsx("div",{className:"flex min-h-screen items-center justify-center bg-slate-950",children:E.jsx("div",{className:"h-10 w-10 animate-spin rounded-full border-b-2 border-blue-500"})})}const wf="/book-strategy-call",Ef="/book-strategy-call/thanks",If="/webinar",Vv="/webinar/thanks";function Eu(){typeof window>"u"||window.Calendly?.closePopupWidget?.()}function Dv(n){return n?.data?.event&&n.data.event.indexOf("calendly")===0&&n.data.event==="calendly.event_scheduled"}function Ov(){const{pathname:n}=xs();return B.useEffect(()=>{XT()},[n]),null}function Lv(){const n=im(),{pathname:e}=xs();return B.useEffect(()=>{const t=r=>{Dv(r)&&(e.startsWith(wf)||e.startsWith(If)?(typeof window<"u"&&window.sessionStorage.setItem("strategyCallRegistered","true"),Eu(),n(Ef,{replace:!0})):(Eu(),n("/booking-success",{replace:!0})))};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)},[n,e]),null}function Mv(){return E.jsxs(rm,{children:[E.jsx(Ov,{}),E.jsx(Lv,{}),E.jsx(B.Suspense,{fallback:E.jsx(Nv,{}),children:E.jsxs(sm,{children:[E.jsx(he,{path:"/",element:E.jsx(wu,{})}),E.jsx(he,{path:"/booking",element:E.jsx(wu,{})}),E.jsx(he,{path:"/login",element:E.jsx(wv,{})}),E.jsx(he,{path:"/payment-success",element:E.jsx(Rv,{})}),E.jsx(he,{path:"/payment-confirmation",element:E.jsx(Sv,{})}),E.jsx(he,{path:"/booking-success",element:E.jsx(Pv,{})}),E.jsx(he,{path:"/admin",element:E.jsx(vv,{})}),E.jsx(he,{path:"/admin/share-link",element:E.jsx(Av,{})}),E.jsx(he,{path:"/admin/homework-share-link",element:E.jsx(bv,{})}),E.jsx(he,{path:wf,element:E.jsx(gu,{})}),E.jsx(he,{path:Ef,element:E.jsx(yu,{})}),E.jsx(he,{path:If,element:E.jsx(gu,{})}),E.jsx(he,{path:Vv,element:E.jsx(yu,{})}),E.jsx(he,{path:"/courses",element:E.jsx(Cv,{})}),E.jsx(he,{path:"/package",element:E.jsx(kv,{})}),E.jsx(he,{path:"/timetable",element:E.jsx(xv,{})}),E.jsx(he,{path:"/app/dashboard",element:E.jsx(zi,{children:E.jsx(Ev,{})})}),E.jsx(he,{path:"/app/subject/:subjectId/recordings",element:E.jsx(zi,{children:E.jsx(Iv,{})})}),E.jsx(he,{path:"/app/subject/:subjectId/homework",element:E.jsx(zi,{children:E.jsx(Tv,{})})})]})})]})}pm.createRoot(document.getElementById("root")).render(E.jsx(B.StrictMode,{children:E.jsx(Mv,{})}));export{Yv as A,t_ as B,Qv as C,Xv as D,Zv as E,nA as F,rA as G,sA as H,nv as a,tv as b,ev as c,ZT as d,eA as e,tA as f,ov as g,YT as h,av as i,E as j,iv as k,SI as l,jd as m,sv as n,JT as o,Bv as p,zv as q,$v as r,jv as s,rv as t,Wv as u,Hv as v,cv as w,Gv as x,Kv as y,Jv as z};
