var t,e;t=this,e=function(t){"use strict";const e=t=>typeof t,a="",s=e(a),o=t=>null==t,n=(t,e,a)=>o(t)?a?.():e(t),r=t=>e(t)==s,i=t=>t.length,c=Object,y=t=>c.getPrototypeOf(t),d=c.keys,p=c.freeze,l=t=>(t=>!o(t)&&n(y(t),(t=>t==c.prototype||o(y(t))),(()=>!0)))(t)&&0==(t=>i(d(t)))(t),g=t=>JSON.stringify(t,((t,e)=>e instanceof Map?c.fromEntries([...e]):e)),h=JSON.parse,f="/store",u=t=>new Map(t),v=(t,e)=>t?.get(e),w=(t,e,a)=>{return o(a)?(s=t,n=e,s?.delete(n),t):t?.set(e,a);var s,n},C=(t,e,a,s)=>{var o,n;return o=t,n=e,o?.has(n)||w(t,e,a()),v(t,e)},b=u(),P=u(),m="message";t.createPartyKitPersister=(t,e,s,c)=>{const{host:y,room:d}=e.partySocketOptions,{storeProtocol:u="https",storePath:S=f,messagePrefix:A=a}={...r(s)?{storeProtocol:s}:s},L=u+"://"+y+"/parties/"+e.name+"/"+d+S,M=async t=>await(await fetch(L,{...t?{method:"PUT",body:g(t)}:{},mode:"cors",cache:"no-store"})).json();return((t,e,a,s,r,i,c,y={},d=[])=>{let g,h,f,u=0;C(b,d,(()=>0)),C(P,d,(()=>[]));const[m,S,A,L,M]=((t=1,e)=>t>1&&e.isMergeable()?[1,e.getMergeableContent,e.getTransactionMergeableChanges,([[t],[e]])=>!l(t)||!l(e),e.setDefaultContent]:2!=t?[0,e.getContent,e.getTransactionChanges,([t,e])=>!l(t)||!l(e),e.setContent]:(t=>{throw Error("Store type not supported by this Persister")})())(c,t),T=e=>{var a;(m&&(a=e?.[0],Array.isArray(a))?1===e?.[2]?t.applyMergeableChanges:t.setMergeableContent:1===e?.[2]?t.applyChanges:t.setContent)(e)},O=async t=>(2!=u&&(u=1,await k((async()=>{try{T(await e())}catch(e){i?.(e),t&&M(t)}u=0}))),D),x=()=>(h&&(r(h),h=void 0),D),E=async t=>(1!=u&&(u=2,await k((async()=>{try{await a(S,t)}catch(t){i?.(t)}u=0}))),D),j=()=>(n(f,t.delListener),f=void 0,D),k=async(...t)=>(((t,...e)=>{t.push(...e)})(v(P,d),...t),await(async()=>{if(!v(b,d)){for(w(b,d,1);!o((t=v(P,d),g=t.shift()));)try{await g()}catch(t){i?.(t)}w(b,d,0)}var t})(),D),D={load:O,startAutoLoad:async t=>(await x().load(t),h=s((async(t,e)=>{e||t?2!=u&&(u=1,T(e??t),u=0):await O()})),D),stopAutoLoad:x,isAutoLoading:()=>!o(h),save:E,startAutoSave:async()=>(await j().save(),f=t.addDidFinishTransactionListener((()=>{const t=A();L(t)&&E(t)})),D),stopAutoSave:j,isAutoSaving:()=>!o(f),schedule:k,getStore:()=>t,destroy:()=>x().stopAutoSave(),getStats:()=>({}),...y};return p(D)})(t,(async()=>await M()),(async(t,a)=>{var s;a?e.send(A+"s"+(r(s=a)?s:g(s))):await M(t())}),(t=>{const a=e=>n(((t,e,a)=>{const s=i(t);return((t,e)=>t.startsWith(e))(e,t)?[e[s],h((o=e,n=s+1,o.slice(n,void 0)))]:void 0;var o,n})(A,e.data),(([e,a])=>{"s"==e&&t(void 0,a)}));return e.addEventListener(m,a),a}),(t=>{e.removeEventListener(m,t)}),c,1,{getConnection:()=>e})}},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).TinyBasePersisterPartyKitClient={});
