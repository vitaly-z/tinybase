var e,t;e=this,t=function(e){"use strict";const t=Promise,a=clearInterval,n=e=>null==e,s=(e,t,a)=>n(e)?a?.():t(e),r=e=>new t(e),o=async e=>t.all(e),c=(e,t)=>e.map(t),i=(e,...t)=>e.push(...t),l=Object,d=e=>l.getPrototypeOf(e),y=l.entries,u=l.keys,g=l.freeze,p=e=>(e=>!n(e)&&s(d(e),(e=>e==l.prototype||n(d(e))),(()=>!0)))(e)&&0==(e=>u(e).length)(e),w=e=>new Map(e),h=(e,t)=>e?.get(t),f=(e,t,a)=>{return n(a)?(s=e,r=t,s?.delete(r),e):e?.set(t,a);var s,r},v=(e,t,a,n)=>{var s,r;return s=e,r=t,s?.has(r)||f(e,t,a()),h(e,t)},b=w(),A=w(),C=globalThis.window,S=["t","v"],x={keyPath:"k"},D=async(e,t)=>{const a=((t,a)=>c(y(t),(([t,a])=>M(e,"put",{k:t,v:a}))))(t);c(await M(e,"getAllKeys"),(n=>((e,t)=>t in e)(t,n)?0:i(a,M(e,"delete",n)))),await o(a)},M=async(e,t,a)=>r(((n,s)=>{const r=e[t](a);r.onsuccess=()=>n(r.result),r.onerror=()=>s(`objectStore.${t} error`)}));e.createIndexedDbPersister=(e,t,d=1,y)=>{const u=async(e,a=[],n=0)=>r(((s,r)=>{const i=(C?C.indexedDB:indexedDB).open(t,n?2:void 0);i.onupgradeneeded=()=>n&&c(S,(e=>{try{i.result.createObjectStore(e,x)}catch{}})),i.onsuccess=async()=>{try{const t=i.result.transaction(S,"readwrite"),n=await o(c(S,(async(n,s)=>await e(t.objectStore(n),a[s]))));i.result.close(),s(n)}catch(e){i.result.close(),r(e)}},i.onerror=()=>r("indexedDB.open error")}));return((e,t,a,r,o,c,l,d={},y=[])=>{let u,w,C,S=0;v(b,y,(()=>0)),v(A,y,(()=>[]));const[x,D,M,T,j]=((e=1,t)=>e>1&&"getMergeableContent"in t?[1,t.getMergeableContent,t.getTransactionMergeableChanges,([[e],[t]])=>!p(e)||!p(t),t.setDefaultContent]:2!=e?[0,t.getContent,t.getTransactionChanges,([e,t])=>!p(e)||!p(t),t.setContent]:0)(l,e),m=t=>{var a;(x&&(a=t?.[0],Array.isArray(a))?1===t?.[2]?e.applyMergeableChanges:e.setMergeableContent:1===t?.[2]?e.applyChanges:e.setContent)(t)},k=async e=>(2!=S&&(S=1,await I((async()=>{try{m(await t())}catch(t){c?.(t),e&&j(e)}S=0}))),O),L=()=>(w&&(o(w),w=void 0),O),P=async e=>(1!=S&&(S=2,await I((async()=>{try{await a(D,e)}catch(e){c?.(e)}S=0}))),O),B=()=>(s(C,e.delListener),C=void 0,O),I=async(...e)=>(i(h(A,y),...e),await(async()=>{if(!h(b,y)){for(f(b,y,1);!n((e=h(A,y),u=e.shift()));)try{await u()}catch(e){c?.(e)}f(b,y,0)}var e})(),O),O={load:k,startAutoLoad:async e=>(await L().load(e),w=r((async(e,t)=>{t||e?2!=S&&(S=1,m(t??e),S=0):await k()})),O),stopAutoLoad:L,isAutoLoading:()=>!n(w),save:P,startAutoSave:async()=>(await B().save(),C=e.addDidFinishTransactionListener((()=>{const e=M();T(e)&&P(e)})),O),stopAutoSave:B,isAutoSaving:()=>!n(C),schedule:I,getStore:()=>e,destroy:()=>L().stopAutoSave(),getStats:()=>({}),...d};return g(O)})(e,(async()=>await u((async e=>((e=[])=>l.fromEntries(e))(c(await M(e,"getAll"),(({k:e,v:t})=>[e,t])))))),(async e=>await u((async(e,t)=>await D(e,t)),e(),1)),(e=>setInterval(e,1e3*d)),(e=>a(e)),y,1,{getDbName:()=>t})},e.objectStoreMatch=D},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBasePersisterIndexedDb={});
