var e,t;e=this,t=function(e){"use strict";const t=e=>null==e,n=(e,n,r)=>t(e)?r?.():n(e),r=e=>e.length,o=(e,t)=>e.includes(t),s=(e,t)=>e.forEach(t),l=e=>0==r(e),i=(e,...t)=>e.push(...t),c=e=>e.pop(),d=e=>e.shift(),a=Object.freeze,u=(e,t)=>e?.has(t)??!1,h=e=>t(e)||0==(e=>e?.size??0)(e),p=(e,t)=>e?.forEach(t),f=(e,t)=>e?.delete(t),C=e=>new Map(e),g=(e,t)=>e?.get(t),k=(e,n,r)=>t(r)?(f(e,n),e):e?.set(n,r),v=(e,t,n)=>(u(e,t)||k(e,t,n()),g(e,t)),y=(e,t,o,s,l=0)=>n((o?v:g)(e,t[l],l>r(t)-2?o:C),(n=>{if(l>r(t)-2)return s?.(n)&&k(e,t[l]),n;const i=y(n,t,o,s,l+1);return h(n)&&k(e,t[l]),i})),L=e=>new Set(Array.isArray(e)||t(e)?e:[e]),w=/^\d+$/,b=(e=>{const b=new WeakMap;return e=>(b.has(e)||b.set(e,(e=>{let b,S,T,x=100,z=C(),E=C(),V=1;const j=C(),m=C(),[A,B,F]=(e=>{let o;const[l,c]=(()=>{const e=[];let t=0;return[n=>(n?d(e):null)??""+t++,t=>{w.test(t)&&r(e)<1e3&&i(e,t)}]})(),a=C();return[(e,t,n,r=[],s=(()=>[]))=>{o??=_;const i=l(1);var c,d;return k(a,i,[e,t,n,r,s]),c=y(t,n??[""],L),d=i,c?.add(d),i},(e,t,...n)=>s(((e,t=[""])=>{const n=[],o=(e,l)=>l==r(t)?i(n,e):null===t[l]?p(e,(e=>o(e,l+1))):s([t[l],null],(t=>o(g(e,t),l+1)));return o(e,0),n})(e,t),(e=>p(e,(e=>g(a,e)[0](o,...t??[],...n))))),e=>n(g(a,e),(([,t,n])=>(y(t,n??[""],void 0,(t=>(f(t,e),h(t)?1:0))),k(a,e),c(e),n))),e=>n(g(a,e),(([e,,n=[],l,i])=>{const c=(...d)=>{const a=r(d);a==r(n)?e(o,...d,...i(d)):t(n[a])?s(l[a]?.(...d)??[],(e=>c(...d,e))):c(...d,n[a])};c()}))]})(),I=C(),M=C(),O=[],W=[],$=(n,r)=>{V=0,e.transaction((()=>{const[o,s]=g(I,r);p(o,((r,o)=>p(r,((r,s)=>p(r,((r,l)=>((e,n,r,o,s)=>t(s)?e.delCell(n,r,o,!0):e.setCell(n,r,o,s))(e,o,s,l,r[n]))))))),p(s,((r,o)=>((e,n,r)=>t(r)?e.delValue(n):e.setValue(n,r))(e,o,r[n])))})),V=1},q=e=>{k(I,e),k(M,e),B(m,[e])},D=(e,t)=>s(((e,t)=>e.splice(0,t))(e,t??r(e)),q),G=()=>D(O,r(O)-x),H=()=>n(b,(()=>{i(O,b),G(),D(W),b=void 0,T=1})),J=()=>{b=c(O),T=1},K=e.addCellListener(null,null,null,((e,t,n,r,o,s)=>{if(V){H();const e=v(z,t,C),l=v(e,n,C),i=v(l,r,(()=>[s,void 0]));i[1]=o,i[0]===o&&h(k(l,r))&&h(k(e,n))&&h(k(z,t))&&J(),U()}})),N=e.addValueListener(null,((e,t,n,r)=>{if(V){H();const e=v(E,t,(()=>[r,void 0]));e[1]=n,e[0]===n&&h(k(E,t))&&J(),U()}})),P=(e="")=>(t(b)&&(b=""+S++,k(I,b,[z,E]),Y(b,e),z=C(),E=C(),T=1),b),Q=()=>{l(O)||(((e,...t)=>{e.unshift(...t)})(W,P()),$(0,b),b=c(O),T=1)},R=()=>{l(W)||(i(O,b),b=d(W),$(1,b),T=1)},U=()=>{T&&(B(j),T=0)},X=e=>{const t=P(e);return U(),t},Y=(e,t)=>(Z(e)&&g(M,e)!==t&&(k(M,e,t),B(m,[e])),_),Z=e=>u(I,e),_={setSize:e=>(x=e,G(),_),addCheckpoint:X,setCheckpoint:Y,getStore:()=>e,getCheckpointIds:()=>[[...O],b,[...W]],forEachCheckpoint:e=>{return t=e,p(M,((e,n)=>t(n,e)));var t},hasCheckpoint:Z,getCheckpoint:e=>g(M,e),goBackward:()=>(Q(),U(),_),goForward:()=>(R(),U(),_),goTo:e=>{const n=o(O,e)?Q:o(W,e)?R:null;for(;!t(n)&&e!=b;)n();return U(),_},addCheckpointIdsListener:e=>A(e,j),addCheckpointListener:(e,t)=>A(t,m,[e]),delListener:e=>(F(e),_),clear:()=>(D(O),D(W),t(b)||q(b),b=void 0,S=0,X(),_),clearForward:()=>(l(W)||(D(W),B(j)),_),destroy:()=>{e.delListener(K),e.delListener(N)},getListenerStats:()=>({})};return a(_.clear())})(e)),b.get(e))})();e.createCheckpoints=b},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseCheckpoints={});
