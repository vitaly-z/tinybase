var e,t;e=this,t=function(e){"use strict";const t="",n=(e,t)=>e.includes(t),o=(e,t)=>e.forEach(t),r=e=>e.length,s=e=>0==r(e),i=(e,...t)=>e.push(...t),c=e=>e.pop(),l=e=>e.shift(),d=e=>null==e,a=(e,t,n)=>d(e)?n?.():t(e),u=(e,t)=>e?.has(t)??!1,h=e=>d(e)||0==(e=>e.size)(e),p=(e,t)=>e?.forEach(t),f=(e,t)=>e?.delete(t),C=e=>new Map(e),g=(e,t)=>e?.get(t),k=(e,t,n)=>d(n)?(f(e,t),e):e?.set(t,n),y=(e,t,n)=>(u(e,t)||k(e,t,n()),g(e,t)),v=(e,t,n,o,s=0)=>a((n?y:g)(e,t[s],s>r(t)-2?n:C),(i=>{if(s>r(t)-2)return o?.(i)&&k(e,t[s]),i;const c=v(i,t,n,o,s+1);return h(i)&&k(e,t[s]),c})),L=e=>new Set(Array.isArray(e)||d(e)?e:[e]),w=/^\d+$/,b=e=>{let n;const[s,c]=(()=>{const e=[];let n=0;return[()=>l(e)??t+n++,t=>{w.test(t)&&r(e)<1e3&&i(e,t)}]})(),u=C();return[(o,r,i)=>{n??=e();const c=s();var l,d;return k(u,c,[o,r,i]),l=v(r,i??[t],L),d=c,l?.add(d),c},(e,s,...c)=>o(((e,n=[t])=>{const s=[],c=(e,t)=>t==r(n)?i(s,e):null===n[t]?p(e,(e=>c(e,t+1))):o([n[t],null],(n=>c(g(e,n),t+1)));return c(e,0),s})(e,s),(e=>p(e,(e=>g(u,e)[0](n,...s??[],...c))))),e=>a(g(u,e),(([,n,o])=>(v(n,o??[t],void 0,(t=>(f(t,e),h(t)?1:0))),k(u,e),c(e),o))),(e,t,s)=>a(g(u,e),(([e,,i=[]])=>{const c=(...l)=>{const a=r(l);a==r(i)?e(n,...l,...s(l)):d(i[a])?o(t[a](...l),(e=>c(...l,e))):c(...l,i[a])};c()}))]},S=Object.freeze,T=(e=>{const t=new WeakMap;return n=>(t.has(n)||t.set(n,e(n)),t.get(n))})((e=>{let f,v,L,w=100,T=C(),x=1;const z=C(),E=C(),[j,m,A]=b((()=>R)),B=C(),I=C(),M=[],F=[],O=(t,n)=>{x=0,e.transaction((()=>p(g(B,n),((n,o)=>p(n,((n,r)=>p(n,((n,s)=>((e,t,n,o,r)=>d(r)?e.delCell(t,n,o,!0):e.setCell(t,n,o,r))(e,o,r,s,n[t]))))))))),x=1},W=e=>{k(B,e),k(I,e),m(E,[e])},$=(e,t)=>o(((e,t)=>e.splice(0,t))(e,t??r(e)),W),q=()=>$(M,r(M)-w),D=e.addCellListener(null,null,null,((e,t,n,o,r,s)=>{if(x){a(f,(()=>{i(M,f),q(),$(F),f=void 0,L=1}));const e=y(T,t,C),l=y(e,n,C),d=y(l,o,(()=>[s,void 0]));d[1]=r,d[0]===r&&h(k(l,o))&&h(k(e,n))&&h(k(T,t))&&(f=c(M),L=1),K()}})),G=(e="")=>(d(f)&&(f=t+v++,k(B,f,T),P(f,e),T=C(),L=1),f),H=()=>{s(M)||(((e,...t)=>{e.unshift(...t)})(F,G()),O(0,f),f=c(M),L=1)},J=()=>{s(F)||(i(M,f),f=l(F),O(1,f),L=1)},K=()=>{L&&(m(z),L=0)},N=e=>{const t=G(e);return K(),t},P=(e,t)=>(Q(e)&&g(I,e)!==t&&(k(I,e,t),m(E,[e])),R),Q=e=>u(B,e),R={setSize:e=>(w=e,q(),R),addCheckpoint:N,setCheckpoint:P,getStore:()=>e,getCheckpointIds:()=>[[...M],f,[...F]],forEachCheckpoint:e=>{return t=e,p(I,((e,n)=>t(n,e)));var t},hasCheckpoint:Q,getCheckpoint:e=>g(I,e),goBackward:()=>(H(),K(),R),goForward:()=>(J(),K(),R),goTo:e=>{const t=n(M,e)?H:n(F,e)?J:null;for(;!d(t)&&e!=f;)t();return K(),R},addCheckpointIdsListener:e=>j(e,z),addCheckpointListener:(e,t)=>j(t,E,[e]),delListener:e=>(A(e),R),clear:()=>($(M),$(F),d(f)||W(f),f=void 0,v=0,N(),R),destroy:()=>{e.delListener(D)},getListenerStats:()=>({})};return S(R.clear())}));e.createCheckpoints=T},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseCheckpoints={});
