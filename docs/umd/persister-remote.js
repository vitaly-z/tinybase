var e,t;e=this,t=function(e){"use strict";const t=clearInterval,a=e=>null==e,n=(e,t,n)=>a(e)?n?.():t(e),s=Object,o=e=>s.getPrototypeOf(e),r=s.keys,i=s.freeze,c=e=>(e=>!a(e)&&n(o(e),(e=>e==s.prototype||a(o(e))),(()=>!0)))(e)&&0==(e=>r(e).length)(e),y=JSON.parse,l=e=>new Map(e),d=(e,t)=>e?.get(t),g=(e,t,n)=>{return a(n)?(s=e,o=t,s?.delete(o),e):e?.set(t,n);var s,o},f=(e,t,a,n)=>{var s,o;return s=e,o=t,s?.has(o)||g(e,t,a()),d(e,t)},p=l(),h=l(),u=e=>e.headers.get("ETag");e.createRemotePersister=(e,o,r,l=5,v)=>{let w;return((e,t,s,o,r,y,l,u={},v=[])=>{let w,C,b,A=0;f(p,v,(()=>0)),f(h,v,(()=>[]));const[S,T,m,M,L]=((e=1,t)=>e>1&&"getMergeableContent"in t?[1,t.getMergeableContent,t.getTransactionMergeableChanges,([[e],[t]])=>!c(e)||!c(t),t.setDefaultContent]:2!=e?[0,t.getContent,t.getTransactionChanges,([e,t])=>!c(e)||!c(t),t.setContent]:0)(l,e),O=t=>{var a;(S&&(a=t?.[0],Array.isArray(a))?1===t?.[2]?e.applyMergeableChanges:e.setMergeableContent:1===t?.[2]?e.applyChanges:e.setContent)(t)},x=async e=>(2!=A&&(A=1,await E((async()=>{try{O(await t())}catch(t){y?.(t),e&&L(e)}A=0}))),I),P=()=>(C&&(r(C),C=void 0),I),j=async e=>(1!=A&&(A=2,await E((async()=>{try{await s(T,e)}catch(e){y?.(e)}A=0}))),I),D=()=>(n(b,e.delListener),b=void 0,I),E=async(...e)=>(((e,...t)=>{e.push(...t)})(d(h,v),...e),await(async()=>{if(!d(p,v)){for(g(p,v,1);!a((e=d(h,v),w=e.shift()));)try{await w()}catch(e){y?.(e)}g(p,v,0)}var e})(),I),I={load:x,startAutoLoad:async e=>(await P().load(e),C=o((async(e,t)=>{t||e?2!=A&&(A=1,O(t??e),A=0):await x()})),I),stopAutoLoad:P,isAutoLoading:()=>!a(C),save:j,startAutoSave:async()=>(await D().save(),b=e.addDidFinishTransactionListener((()=>{const e=m();M(e)&&j(e)})),I),stopAutoSave:D,isAutoSaving:()=>!a(b),schedule:E,getStore:()=>e,destroy:()=>P().stopAutoSave(),getStats:()=>({}),...u};return i(I)})(e,(async()=>{const e=await fetch(o);return w=u(e),y(await e.text())}),(async e=>{return await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:(t=e(),JSON.stringify(t,((e,t)=>t instanceof Map?s.fromEntries([...t]):t)))});var t}),(e=>setInterval((async()=>{const t=await fetch(o,{method:"HEAD"}),n=u(t);a(w)||a(n)||n==w||(w=n,e())}),1e3*l)),(e=>t(e)),v,1,{getUrls:()=>[o,r]})}},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBasePersisterRemote={});
