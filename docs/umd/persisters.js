var t,e;t=this,e=function(t){"use strict";const e=t=>typeof t,a=e(""),s=t=>null==t,n=(t,e,a)=>s(t)?a?.():e(t),o=Object,i=t=>o.getPrototypeOf(t),r=o.keys,c=o.freeze,y=t=>(t=>!s(t)&&n(i(t),(t=>t==o.prototype||s(i(t))),(()=>!0)))(t)&&0==(t=>r(t).length)(t),d=t=>new Map(t),u=(t,e)=>t?.get(e),l=(t,e,a)=>{return s(a)?(n=t,o=e,n?.delete(o),t):t?.set(e,a);var n,o},g=(t,e,a,s)=>{var n,o;return n=t,o=e,n?.has(o)||l(t,e,a()),u(t,e)},p=d(),f=d();t.createCustomPersister=(t,o,i,r,d,h,v,w={},C=[])=>{let A,b,L,S=0;g(p,C,(()=>0)),g(f,C,(()=>[]));const[M,T,m,x,P]=((t,e)=>!t||s(e.getMergeableContent)?[0,e.getContent,e.getTransactionChanges,([t,e])=>!y(t)||!y(e),e.setContent]:[1,e.getMergeableContent,e.getTransactionMergeableChanges,([,[[,t],[,e]]])=>!y(t)||!y(e),e.setDefaultContent])(v,t),j=async t=>(2!=S&&(S=1,await O.schedule((async()=>{await t(),S=0}))),O),D=s=>{var n;(M&&(n=s?.[0],e(n)==a)?1===s?.[1][2]?t.applyMergeableChanges:t.setMergeableContent:1===s?.[2]?t.applyChanges:t.setContent)(s)},O={load:async t=>await j((async()=>{try{D(await o())}catch(e){h?.(e),t&&P(t)}})),startAutoLoad:async t=>(await O.stopAutoLoad().load(t),b=r((async(t,e)=>{const a=e?.();await j((async()=>{try{D(a??t?.()??await o())}catch(t){h?.(t)}}))})),O),stopAutoLoad:()=>(b&&(d(b),b=void 0),O),isAutoLoading:()=>!s(b),save:async t=>(1!=S&&(S=2,await O.schedule((async()=>{try{await i(T,t)}catch(t){h?.(t)}S=0}))),O),startAutoSave:async()=>(await O.stopAutoSave().save(),L=t.addDidFinishTransactionListener((()=>{const t=m();x(t)&&O.save((()=>t))})),O),stopAutoSave:()=>(n(L,t.delListener),L=void 0,O),isAutoSaving:()=>!s(L),schedule:async(...t)=>(((t,...e)=>{t.push(...e)})(u(f,C),...t),await(async()=>{if(!u(p,C)){for(l(p,C,1);!s((t=u(f,C),A=t.shift()));)try{await A()}catch(t){h?.(t)}l(p,C,0)}var t})(),O),getStore:()=>t,destroy:()=>O.stopAutoLoad().stopAutoSave(),getStats:()=>({}),...w};return c(O)}},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).TinyBasePersisters={});
