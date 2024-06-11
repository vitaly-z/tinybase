var e,t;e=this,t=function(e){"use strict";const t=e=>null==e,a=(e,a,s)=>t(e)?s?.():a(e),s=Object,r=e=>s.getPrototypeOf(e),n=s.keys,o=s.freeze,i=e=>(e=>!t(e)&&a(r(e),(e=>e==s.prototype||t(r(e))),(()=>!0)))(e)&&0==(e=>n(e).length)(e),c=JSON.parse,y=e=>new Map(e),g=(e,t)=>e?.get(t),d=(e,a,s)=>{return t(s)?(r=e,n=a,r?.delete(n),e):e?.set(a,s);var r,n},l=(e,t,a,s)=>{var r,n;return r=e,n=t,r?.has(n)||d(e,t,a()),g(e,t)},u=y(),p=y(),f="storage",h=globalThis.window,v=(e,s,r,n)=>((e,s,r,n,c,y,f,h={},v=[])=>{let w,S,b,A=0;l(u,v,(()=>0)),l(p,v,(()=>[]));const[C,L,T,m,M]=((e=1,t)=>e>1&&t.isMergeable()?[1,t.getMergeableContent,t.getTransactionMergeableChanges,([[e],[t]])=>!i(e)||!i(t),t.setDefaultContent]:2!=e?[0,t.getContent,t.getTransactionChanges,([e,t])=>!i(e)||!i(t),t.setContent]:(e=>{throw Error("Store type not supported by this Persister")})())(f,e),O=t=>{var a;(C&&(a=t?.[0],Array.isArray(a))?1===t?.[2]?e.applyMergeableChanges:e.setMergeableContent:1===t?.[2]?e.applyChanges:e.setContent)(t)},P=async e=>(2!=A&&(A=1,await J((async()=>{try{O(await s())}catch(t){y?.(t),e&&M(e)}A=0}))),j),N=()=>(S&&(c(S),S=void 0),j),x=async e=>(1!=A&&(A=2,await J((async()=>{try{await r(L,e)}catch(e){y?.(e)}A=0}))),j),E=()=>(a(b,e.delListener),b=void 0,j),J=async(...e)=>(((e,...t)=>{e.push(...t)})(g(p,v),...e),await(async()=>{if(!g(u,v)){for(d(u,v,1);!t((e=g(p,v),w=e.shift()));)try{await w()}catch(e){y?.(e)}d(u,v,0)}var e})(),j),j={load:P,startAutoLoad:async e=>(await N().load(e),S=n((async(e,t)=>{t||e?2!=A&&(A=1,O(t??e),A=0):await P()})),j),stopAutoLoad:N,isAutoLoading:()=>!t(S),save:x,startAutoSave:async()=>(await E().save(),b=e.addDidFinishTransactionListener((()=>{const e=T();m(e)&&x(e)})),j),stopAutoSave:E,isAutoSaving:()=>!t(b),schedule:J,getStore:()=>e,destroy:()=>N().stopAutoSave(),getStats:()=>({}),...h};return o(j)})(e,(async()=>{return e=r.getItem(s),JSON.parse(e,((e,t)=>"￼"===t?void 0:t));var e}),(async e=>{return r.setItem(s,(t=e(),JSON.stringify(t,((e,t)=>void 0===t?"￼":t))));var t}),(e=>{const t=t=>{if(t.storageArea===r&&t.key===s)try{e(c(t.newValue))}catch{e()}};return h.addEventListener(f,t),t}),(e=>h.removeEventListener(f,e)),n,3,{getStorageName:()=>s});e.createLocalPersister=(e,t,a)=>v(e,t,localStorage,a),e.createSessionPersister=(e,t,a)=>v(e,t,sessionStorage,a)},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBasePersisterBrowser={});