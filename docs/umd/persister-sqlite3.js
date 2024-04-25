var a,t;a=this,t=function(a){"use strict";const t=a=>typeof a,e="tinybase",n="",s=",",i=t(n),r=(a,t)=>a.repeat(t),o=Promise,c=clearInterval,l=a=>null==a,y=(a,t,e)=>l(a)?e?.():t(a),w=a=>t(a)==i,u=a=>Array.isArray(a),d=(a,t,e)=>a.slice(t,e),E=a=>a.length,f=async a=>o.all(a),p=(a,t="")=>a.join(t),g=(a,t)=>a.map(t),v=a=>0==E(a),m=(a,t)=>a.filter(t),T=(a,...t)=>a.push(...t),C=(a,t)=>a?.has(t)??!1,h=a=>[...a?.values()??[]],A=(a,t)=>a?.delete(t),O=Object,N=a=>O.getPrototypeOf(a),b=O.entries,R=O.keys,S=O.freeze,L=(a=[])=>O.fromEntries(a),D=(...a)=>O.assign({},...a),I=(a,t)=>t in a,M=(a,t)=>g(b(a),(([a,e])=>t(e,a))),P=a=>O.values(a),$=a=>E(R(a)),_=a=>(a=>!l(a)&&y(N(a),(a=>a==O.prototype||l(N(a))),(()=>!0)))(a)&&0==$(a),F=a=>new Map(a),j=a=>[...a?.keys()??[]],x=(a,t)=>a?.get(t),B=(a,t)=>g([...a?.entries()??[]],(([a,e])=>t(e,a))),H=(a,t,e)=>l(e)?(A(a,t),a):a?.set(t,e),J=(a,t,e,n)=>(C(a,t)||H(a,t,e()),x(a,t)),Y=(a,t,e,n=H)=>(M(t,((t,n)=>e(a,n,t))),((a,t)=>{((a,t)=>{a?.forEach(t)})(a,((a,e)=>t(e)))})(a,(e=>I(t,e)?0:n(a,e))),a),k="_",q="_id",G=a=>`"${a.replace(/"/g,'""')}"`,U="SELECT",W=a=>new Set(u(a)||l(a)?a:[a]),z=(a,t)=>a?.add(t),K="TABLE",V="ALTER "+K,Q="DELETE FROM",X=U+"*FROM",Z="FROM pragma_table_",aa="WHERE",ta=(a,t,e,i)=>{const r=F();return[async()=>Y(r,L(await f(g(await a("SELECT name "+Z+"list WHERE schema='main'AND(type='table'OR type='view')AND name IN("+na(t)+")ORDER BY name",t),(async({name:t})=>[t,L(g(await a(U+" name,type "+Z+"info(?)",[t]),(({name:a,type:t})=>[a,t])))])))),((a,t,e)=>H(r,t,Y(J(r,t,F),e,((a,t,e)=>{e!=x(a,t)&&H(a,t,e)}),((a,t)=>H(a,t))))),((a,t)=>H(r,t))),async(t,e)=>((a,t)=>!l(x(x(r,a),t)))(t,e)?L(m(g(await a(X+G(t)),(a=>{return[a[e],(t={...a},n=e,delete t[n],t)];var t,n})),(([a,t])=>!l(a)&&!_(t)))):{},async(t,e,o,c,y,w=!1)=>{const u=W();M(o??{},(a=>g(R(a??{}),(a=>z(u,a)))));const d=h(u);if(!w&&y&&v(d)&&C(r,t))return await a("DROP "+K+G(t)),void H(r,t);if(v(d)||C(r,t)){const s=x(r,t),i=W(j(s));await f([...g(d,(async e=>{A(i,e)||(await a(V+G(t)+"ADD"+G(e)),H(s,e,n))})),...!w&&c?g(h(i),(async n=>{n!=e&&(await a(V+G(t)+"DROP"+G(n)),H(s,n))})):[]])}else await a("CREATE "+K+G(t)+"("+G(e)+` PRIMARY KEY ON CONFLICT REPLACE${p(g(d,(a=>s+G(a))))});`),H(r,t,F([[e,n],...g(d,(a=>[a,n]))]));if(w)l(o)?await a(Q+G(t)+aa+" 1"):await f(M(o,(async(n,s)=>{l(n)?await a(Q+G(t)+aa+G(e)+"=?",[s]):v(d)||await ea(a,t,e,R(n),[s,...P(n)],i)})));else if(v(d))C(r,t)&&await a(Q+G(t)+aa+" 1");else{const n=m(j(x(r,t)),(a=>a!=e)),s=[],c=[];M(o??{},((a,t)=>{T(s,t,...g(n,(t=>a?.[t]))),T(c,t)})),await ea(a,t,e,n,s,i),await a(Q+G(t)+aa+G(e)+"NOT IN("+na(c)+")",c)}},async t=>{let n;await a("BEGIN");try{n=await t()}catch(a){e?.(a)}return await a("END"),n}]},ea=async(a,t,e,i,o,c=!0)=>await a("INSERT "+(c?n:"OR REPLACE ")+"INTO"+G(t)+"("+G(e)+p(g(i,(a=>s+G(a))))+")VALUES"+d(r(`,(?${r(",?",E(i))})`,E(o)/(E(i)+1)),1)+(c?"ON CONFLICT("+G(e)+")DO UPDATE SET"+p(g(i,(a=>G(a)+"=excluded."+G(a))),s):n),g(o,(a=>a??null))),na=a=>p(g(a,(()=>"?")),s),sa=JSON.parse,ia=F(),ra=F(),oa=(a,t,e,n,s,i,r,o={},c=[])=>{let w,d,E,f=0;J(ia,c,(()=>0)),J(ra,c,(()=>[]));const[p,g,v,m,C]=((a=1,t)=>a>1&&"getMergeableContent"in t?[1,t.getMergeableContent,t.getTransactionMergeableChanges,([[a],[t]])=>!_(a)||!_(t),t.setDefaultContent]:2!=a?[0,t.getContent,t.getTransactionChanges,([a,t])=>!_(a)||!_(t),t.setContent]:0)(r,a),h=t=>{(p&&u(t?.[0])?1===t?.[2]?a.applyMergeableChanges:a.setMergeableContent:1===t?.[2]?a.applyChanges:a.setContent)(t)},A=async a=>(2!=f&&(f=1,await R((async()=>{try{h(await t())}catch(t){i?.(t),a&&C(a)}f=0}))),L),O=()=>(d&&(s(d),d=void 0),L),N=async a=>(1!=f&&(f=2,await R((async()=>{try{await e(g,a)}catch(a){i?.(a)}f=0}))),L),b=()=>(y(E,a.delListener),E=void 0,L),R=async(...a)=>(T(x(ra,c),...a),await(async()=>{if(!x(ia,c)){for(H(ia,c,1);!l((a=x(ra,c),w=a.shift()));)try{await w()}catch(a){i?.(a)}H(ia,c,0)}var a})(),L),L={load:A,startAutoLoad:async a=>(await O().load(a),d=n((async(a,t)=>{t||a?2!=f&&(f=1,h(t??a),f=0):await A()})),L),stopAutoLoad:O,isAutoLoading:()=>!l(d),save:N,startAutoSave:async()=>(await b().save(),E=a.addDidFinishTransactionListener((()=>{const a=v();m(a)&&N(a)})),L),stopAutoSave:b,isAutoSaving:()=>!l(E),schedule:R,getStore:()=>a,destroy:()=>O().stopAutoSave(),getStats:()=>({}),...o};return S(L)},ca="store",la=(a,t,e,n,s,[i],r,o,c,l)=>{const[y,w,u,d]=ta(t,r,s,l);return oa(a,(async()=>await d((async()=>(await y(),sa((await w(i,q))[k]?.[ca]??"null"))))),(async a=>await d((async()=>{var t;await y(),await u(i,q,{[k]:{[ca]:(t=a()??null,JSON.stringify(t,((a,t)=>t instanceof Map?O.fromEntries([...t]):t)))}},!0,!0)}))),e,n,s,1,{[c]:()=>o},o)},ya=(a,t,e,n,s,[i,r,[o,c,y]],w,u,d,E)=>{const[p,g,v,T]=ta(t,w,s,E),C=async(a,t)=>await f(B(r,(async([e,n,s,i],r)=>{t&&!I(a,r)||await v(e,n,a[r],s,i,t)}))),h=async(a,t)=>c?await v(y,q,{[k]:a},!0,!0,t):null;return oa(a,(async()=>await T((async()=>{await p();const a=await(async()=>L(m(await f(B(i,(async([a,t],e)=>[a,await g(e,t)]))),(a=>!_(a[1])))))(),t=await(async()=>o?(await g(y,q))[k]:{})();return _(a)&&l(t)?void 0:[a,t]}))),(async(a,t)=>await T((async()=>{if(await p(),l(t)){const[t,e]=a();await C(t),await h(e)}else await C(t[0],!0),await h(t[1],!0)}))),e,n,s,1,{[d]:()=>u},u)},wa="json",ua="autoLoadIntervalSeconds",da="storeTableName",Ea="rowIdColumnName",fa="tableId",pa="tableName",ga="deleteEmptyColumns",va="deleteEmptyTable",ma={mode:wa,[ua]:1},Ta={load:0,save:0,[pa]:e+"_values"},Ca=(a,t,e,n)=>{const s=F();return M(a,((a,i)=>{const r=d(P(D(t,w(a)?{[e]:a}:a)),0,$(t));l(r[0])||n(i,r[0])||H(s,i,r)})),s},ha="pragma_",Aa="data_version",Oa="schema_version",Na=(a,t,n,s,i,r,o,l,y="getDb",u)=>{let E,f,p;const[g,v,m,T]=(a=>{const t=(a=>D(ma,w(a)?{[da]:a}:a??{}))(a),n=t[ua];if(t.mode==wa){const{storeTableName:a=e}=t;return[1,n,[a],W(a)]}const{tables:{load:s={},save:i={}}={},values:r={}}=t,o=d(P(D(Ta,r)),0,$(Ta)),c=o[2],l=W(c);return[0,n,[Ca(s,{[fa]:null,[Ea]:q},fa,(a=>z(l,a)&&a==c)),Ca(i,{[pa]:null,[Ea]:q,[ga]:0,[va]:0},pa,((a,t)=>z(l,t)&&t==c)),o],l]})(t);return(g?la:ya)(a,r?async(a,t)=>(r(a,t),await n(a,t)):n,(a=>{return[(t=async()=>{try{const[{d:t,s:e,c:s}]=await n(`SELECT ${Aa} d,${Oa} s,TOTAL_CHANGES() c FROM ${ha}${Aa} JOIN ${ha}${Oa}`);t==(E??=t)&&e==(f??=e)&&s==(p??=s)||(a(),E=t,f=e)}catch{}},e=v,t(),setInterval(t,1e3*e)),s((t=>T.has(t)?a():0))];var t,e}),(([a,t])=>{c(a),E=f=p=null,i(t)}),o,m,h(T),l,y,u)},ba="change";a.createSqlite3Persister=(a,t,e,n,s)=>Na(a,e,(async(a,e=[])=>{return await(n=(n,s)=>t.all(a,e,((a,t)=>a?s(a):n(t))),new o(n));var n}),(a=>{const e=(t,e,n)=>a(n);return t.on(ba,e),e}),(a=>t.off(ba,a)),n,s,t)},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((a="undefined"!=typeof globalThis?globalThis:a||self).TinyBasePersisterSqlite3={});
