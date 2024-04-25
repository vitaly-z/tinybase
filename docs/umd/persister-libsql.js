var a,t;a=this,t=function(a){"use strict";const t=a=>typeof a,e="tinybase",n="",s=",",i=t(n),r=(a,t)=>a.repeat(t),o=Promise,c=clearInterval,l=a=>null==a,y=(a,t,e)=>l(a)?e?.():t(a),w=a=>t(a)==i,u=a=>Array.isArray(a),d=(a,t,e)=>a.slice(t,e),E=a=>a.length,p=async a=>o.all(a),f=(a,t="")=>a.join(t),g=(a,t)=>a.map(t),m=a=>0==E(a),v=(a,t)=>a.filter(t),C=(a,...t)=>a.push(...t),T=(a,t)=>a?.has(t)??!1,h=a=>[...a?.values()??[]],A=(a,t)=>a?.delete(t),O=Object,b=a=>O.getPrototypeOf(a),N=O.entries,L=O.keys,R=O.freeze,S=(a=[])=>O.fromEntries(a),D=(...a)=>O.assign({},...a),I=(a,t)=>t in a,M=(a,t)=>g(N(a),(([a,e])=>t(e,a))),P=a=>O.values(a),$=a=>E(L(a)),_=a=>(a=>!l(a)&&y(b(a),(a=>a==O.prototype||l(b(a))),(()=>!0)))(a)&&0==$(a),F=a=>new Map(a),x=a=>[...a?.keys()??[]],j=(a,t)=>a?.get(t),B=(a,t)=>g([...a?.entries()??[]],(([a,e])=>t(e,a))),q=(a,t,e)=>l(e)?(A(a,t),a):a?.set(t,e),H=(a,t,e,n)=>(T(a,t)||q(a,t,e()),j(a,t)),J=(a,t,e,n=q)=>(M(t,((t,n)=>e(a,n,t))),((a,t)=>{((a,t)=>{a?.forEach(t)})(a,((a,e)=>t(e)))})(a,(e=>I(t,e)?0:n(a,e))),a),Y="_",k="_id",G=a=>`"${a.replace(/"/g,'""')}"`,U="SELECT",W=a=>new Set(u(a)||l(a)?a:[a]),z=(a,t)=>a?.add(t),K="TABLE",V="ALTER "+K,Q="DELETE FROM",X=U+"*FROM",Z="FROM pragma_table_",aa="WHERE",ta=(a,t,e,i)=>{const r=F();return[async()=>J(r,S(await p(g(await a("SELECT name "+Z+"list WHERE schema='main'AND(type='table'OR type='view')AND name IN("+na(t)+")ORDER BY name",t),(async({name:t})=>[t,S(g(await a(U+" name,type "+Z+"info(?)",[t]),(({name:a,type:t})=>[a,t])))])))),((a,t,e)=>q(r,t,J(H(r,t,F),e,((a,t,e)=>{e!=j(a,t)&&q(a,t,e)}),((a,t)=>q(a,t))))),((a,t)=>q(r,t))),async(t,e)=>((a,t)=>!l(j(j(r,a),t)))(t,e)?S(v(g(await a(X+G(t)),(a=>{return[a[e],(t={...a},n=e,delete t[n],t)];var t,n})),(([a,t])=>!l(a)&&!_(t)))):{},async(t,e,o,c,y,w=!1)=>{const u=W();M(o??{},(a=>g(L(a??{}),(a=>z(u,a)))));const d=h(u);if(!w&&y&&m(d)&&T(r,t))return await a("DROP "+K+G(t)),void q(r,t);if(m(d)||T(r,t)){const s=j(r,t),i=W(x(s));await p([...g(d,(async e=>{A(i,e)||(await a(V+G(t)+"ADD"+G(e)),q(s,e,n))})),...!w&&c?g(h(i),(async n=>{n!=e&&(await a(V+G(t)+"DROP"+G(n)),q(s,n))})):[]])}else await a("CREATE "+K+G(t)+"("+G(e)+` PRIMARY KEY ON CONFLICT REPLACE${f(g(d,(a=>s+G(a))))});`),q(r,t,F([[e,n],...g(d,(a=>[a,n]))]));if(w)l(o)?await a(Q+G(t)+aa+" 1"):await p(M(o,(async(n,s)=>{l(n)?await a(Q+G(t)+aa+G(e)+"=?",[s]):m(d)||await ea(a,t,e,L(n),[s,...P(n)],i)})));else if(m(d))T(r,t)&&await a(Q+G(t)+aa+" 1");else{const n=v(x(j(r,t)),(a=>a!=e)),s=[],c=[];M(o??{},((a,t)=>{C(s,t,...g(n,(t=>a?.[t]))),C(c,t)})),await ea(a,t,e,n,s,i),await a(Q+G(t)+aa+G(e)+"NOT IN("+na(c)+")",c)}},async t=>{let n;await a("BEGIN");try{n=await t()}catch(a){e?.(a)}return await a("END"),n}]},ea=async(a,t,e,i,o,c=!0)=>await a("INSERT "+(c?n:"OR REPLACE ")+"INTO"+G(t)+"("+G(e)+f(g(i,(a=>s+G(a))))+")VALUES"+d(r(`,(?${r(",?",E(i))})`,E(o)/(E(i)+1)),1)+(c?"ON CONFLICT("+G(e)+")DO UPDATE SET"+f(g(i,(a=>G(a)+"=excluded."+G(a))),s):n),g(o,(a=>a??null))),na=a=>f(g(a,(()=>"?")),s),sa=JSON.parse,ia=F(),ra=F(),oa=(a,t,e,n,s,i,r,o={},c=[])=>{let w,d,E,p=0;H(ia,c,(()=>0)),H(ra,c,(()=>[]));const[f,g,m,v,T]=((a=1,t)=>a>1&&"getMergeableContent"in t?[1,t.getMergeableContent,t.getTransactionMergeableChanges,([[a],[t]])=>!_(a)||!_(t),t.setDefaultContent]:2!=a?[0,t.getContent,t.getTransactionChanges,([a,t])=>!_(a)||!_(t),t.setContent]:0)(r,a),h=t=>{(f&&u(t?.[0])?1===t?.[2]?a.applyMergeableChanges:a.setMergeableContent:1===t?.[2]?a.applyChanges:a.setContent)(t)},A=async a=>(2!=p&&(p=1,await L((async()=>{try{h(await t())}catch(t){i?.(t),a&&T(a)}p=0}))),S),O=()=>(d&&(s(d),d=void 0),S),b=async a=>(1!=p&&(p=2,await L((async()=>{try{await e(g,a)}catch(a){i?.(a)}p=0}))),S),N=()=>(y(E,a.delListener),E=void 0,S),L=async(...a)=>(C(j(ra,c),...a),await(async()=>{if(!j(ia,c)){for(q(ia,c,1);!l((a=j(ra,c),w=a.shift()));)try{await w()}catch(a){i?.(a)}q(ia,c,0)}var a})(),S),S={load:A,startAutoLoad:async a=>(await O().load(a),d=n((async(a,t)=>{t||a?2!=p&&(p=1,h(t??a),p=0):await A()})),S),stopAutoLoad:O,isAutoLoading:()=>!l(d),save:b,startAutoSave:async()=>(await N().save(),E=a.addDidFinishTransactionListener((()=>{const a=m();v(a)&&b(a)})),S),stopAutoSave:N,isAutoSaving:()=>!l(E),schedule:L,getStore:()=>a,destroy:()=>O().stopAutoSave(),getStats:()=>({}),...o};return R(S)},ca="store",la=(a,t,e,n,s,[i],r,o,c,l)=>{const[y,w,u,d]=ta(t,r,s,l);return oa(a,(async()=>await d((async()=>(await y(),sa((await w(i,k))[Y]?.[ca]??"null"))))),(async a=>await d((async()=>{var t;await y(),await u(i,k,{[Y]:{[ca]:(t=a()??null,JSON.stringify(t,((a,t)=>t instanceof Map?O.fromEntries([...t]):t)))}},!0,!0)}))),e,n,s,1,{[c]:()=>o},o)},ya=(a,t,e,n,s,[i,r,[o,c,y]],w,u,d,E)=>{const[f,g,m,C]=ta(t,w,s,E),T=async(a,t)=>await p(B(r,(async([e,n,s,i],r)=>{t&&!I(a,r)||await m(e,n,a[r],s,i,t)}))),h=async(a,t)=>c?await m(y,k,{[Y]:a},!0,!0,t):null;return oa(a,(async()=>await C((async()=>{await f();const a=await(async()=>S(v(await p(B(i,(async([a,t],e)=>[a,await g(e,t)]))),(a=>!_(a[1])))))(),t=await(async()=>o?(await g(y,k))[Y]:{})();return _(a)&&l(t)?void 0:[a,t]}))),(async(a,t)=>await C((async()=>{if(await f(),l(t)){const[t,e]=a();await T(t),await h(e)}else await T(t[0],!0),await h(t[1],!0)}))),e,n,s,1,{[d]:()=>u},u)},wa="json",ua="autoLoadIntervalSeconds",da="storeTableName",Ea="rowIdColumnName",pa="tableId",fa="tableName",ga="deleteEmptyColumns",ma="deleteEmptyTable",va={mode:wa,[ua]:1},Ca={load:0,save:0,[fa]:e+"_values"},Ta=(a,t,e,n)=>{const s=F();return M(a,((a,i)=>{const r=d(P(D(t,w(a)?{[e]:a}:a)),0,$(t));l(r[0])||n(i,r[0])||q(s,i,r)})),s},ha="pragma_",Aa="data_version",Oa="schema_version",ba=(a,t,n,s,i,r,o,l,y="getDb",u)=>{let E,p,f;const[g,m,v,C]=(a=>{const t=(a=>D(va,w(a)?{[da]:a}:a??{}))(a),n=t[ua];if(t.mode==wa){const{storeTableName:a=e}=t;return[1,n,[a],W(a)]}const{tables:{load:s={},save:i={}}={},values:r={}}=t,o=d(P(D(Ca,r)),0,$(Ca)),c=o[2],l=W(c);return[0,n,[Ta(s,{[pa]:null,[Ea]:k},pa,(a=>z(l,a)&&a==c)),Ta(i,{[fa]:null,[Ea]:k,[ga]:0,[ma]:0},fa,((a,t)=>z(l,t)&&t==c)),o],l]})(t);return(g?la:ya)(a,r?async(a,t)=>(r(a,t),await n(a,t)):n,(a=>{return[(t=async()=>{try{const[{d:t,s:e,c:s}]=await n(`SELECT ${Aa} d,${Oa} s,TOTAL_CHANGES() c FROM ${ha}${Aa} JOIN ${ha}${Oa}`);t==(E??=t)&&e==(p??=e)&&s==(f??=s)||(a(),E=t,p=e)}catch{}},e=m,t(),setInterval(t,1e3*e)),s((t=>C.has(t)?a():0))];var t,e}),(([a,t])=>{c(a),E=p=f=null,i(t)}),o,v,h(C),l,y,u)};a.createLibSqlPersister=(a,t,e,n,s)=>ba(a,e,(async(a,e=[])=>(await t.execute({sql:a,args:e})).rows),(()=>()=>0),(a=>a()),n,s,t,"getClient")},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((a="undefined"!=typeof globalThis?globalThis:a||self).TinyBasePersisterLibsql={});
