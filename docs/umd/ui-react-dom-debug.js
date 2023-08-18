var e,t;e=this,t=function(e,t,l){"use strict";const s=e=>typeof e,a="",n=s(a),o=s(!0),r=s(0),i=s(s),d="type",u="default",c="Ids",h="Table",m=h+"s",b=h+c,g="Row",I=g+"Count",p=g+c,f="Cell",w=f+c,y="Value",C=y+"s",v=y+c,T="currentTarget",k="value",S=e=>a+e,x=Math.floor,V=isFinite,R=(e,t)=>e instanceof t,q=e=>null==e,N=(e,t,l)=>q(e)?l?.():t(e),L=e=>e==n||e==o,M=e=>s(e)==i,E=e=>Array.isArray(e),{createElement:z,Fragment:$,useCallback:O,useLayoutEffect:A,useRef:J,useState:F}=t,B=(e,...t)=>q(e)?{}:e(...t),H=(e,t)=>e.forEach(t),P=(e,t)=>e.map(t),D=e=>e.length,Q=e=>0==D(e),j=(e,t,l)=>e.slice(t,l),W=(e,...t)=>e.push(...t),U=e=>e.shift(),G=Object,K=G.keys,X=G.isFrozen,Y=G.freeze,Z=e=>R(e,G)&&e.constructor==G,_=(e=[])=>G.fromEntries(e),ee=(e,t)=>!q(((e,t)=>N(e,(e=>e[t])))(e,t)),te=(e,t)=>(delete e[t],e),le=(e,t)=>P(G.entries(e),(([e,l])=>t(l,e))),se=e=>Z(e)&&0==(e=>D(K(e)))(e),ae=e=>JSON.stringify(e,((e,t)=>R(t,Map)?G.fromEntries([...t]):t)),ne=JSON.parse,oe="tinybaseStoreInspector",re="TinyBase Store Inspector",ie=["left","top","bottom","right","full"],de="state",ue="sort",ce="open",he="position",me=ce,be="editable",ge=(...e)=>ae(e),Ie=(e,t)=>P(e.sort(),t),pe=(e,t)=>[!!l.useCell(de,e,be,t),O((l=>{t.setCell(de,e,be,(e=>!e)),l.preventDefault()}),[t,e])],fe="M20 80l5-15l40-40l10 10l-40 40l-15 5m5-15l10 10",we='content:url("',ye=we+"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' stroke-width='4' stroke='white' fill='none'>",Ce='</svg>")',ve=we+"data:image/svg+xml,%3csvg viewBox='0 0 680 680' xmlns='http://www.w3.org/2000/svg' style='width:680px%3bheight:680px'%3e %3cpath stroke='white' stroke-width='80' fill='none' d='M340 617a84 241 90 11.01 0zM131 475a94 254 70 10428-124 114 286 70 01-428 124zm0-140a94 254 70 10428-124 114 286 70 01-428 124zm-12-127a94 254 70 00306 38 90 260 90 01-306-38zm221 3a74 241 90 11.01 0z' /%3e %3cpath fill='%23d81b60' d='M131 475a94 254 70 10428-124 114 286 70 01-428 124zm0-140a94 254 70 10428-124 114 286 70 01-428 124z' /%3e %3cpath d='M249 619a94 240 90 00308-128 114 289 70 01-308 128zM119 208a94 254 70 00306 38 90 260 90 01-306-38zm221 3a74 241 90 11.01 0z' /%3e%3c/svg%3e\")",Te=P([[20,20,20,60],[20,20,60,20],[20,60,60,20],[60,20,20,60],[30,30,40,40]],(([e,t,l,s])=>ye+`<rect x='20' y='20' width='60' height='60' fill='grey'/><rect x='${e}' y='${t}' width='${l}' height='${s}' fill='white'/>`+Ce)),ke=ye+"<path d='M20 20l60 60M20 80l60-60' />"+Ce,Se=ye+`<path d='${fe}' />`+Ce,xe=ye+`<path d='${fe}M20 20l60 60' />`+Ce,Ve="*::-webkit-scrollbar",Re=((e,t="")=>e.join(t))(le({"":"all:initial;font-family:sans-serif;font-size:0.75rem;position:fixed;z-index:999999","*":"all:revert","*::before":"all:revert","*::after":"all:revert",[Ve]:"width:0.5rem;height:0.5rem;",[Ve+"-track"]:"background:#111",[Ve+"-thumb"]:"background:#999;border:1px solid #111",[Ve+"-thumb:hover"]:"background:#fff",[Ve+"-corner"]:"background:#111",img:"width:1rem;height:1rem;background:#111;border:0;vertical-align:text-bottom",">img":"padding:0.25rem;bottom:0;right:0;position:fixed;"+ve,..._(P(["bottom:0;left:0","top:0;right:0"],((e,t)=>[`>img[data-position='${t}']`,e]))),main:"display:flex;flex-direction:column;background:#111d;color:#fff;position:fixed;",..._(P(["bottom:0;left:0;width:35vw;height:100vh","top:0;right:0;width:100vw;height:30vh","bottom:0;left:0;width:100vw;height:30vh","top:0;right:0;width:35vw;height:100vh","top:0;right:0;width:100vw;height:100vh"],((e,t)=>[`main[data-position='${t}']`,e]))),header:"display:flex;padding:0.25rem;background:#000;align-items:center","header>img:nth-of-type(1)":ve,"header>img:nth-of-type(6)":ke,..._(P(Te,((e,t)=>[`header>img[data-id='${t}']`,e]))),"header>span":"flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left:0.25rem",article:"padding:0.25rem 0.25rem 0.25rem 0.5rem;overflow:auto;flex:1",details:"margin-left:0.75rem;width:fit-content;","details img":"display:none","details[open]>summary img":"display:unset;background:none;margin-left:0.25rem","details[open]>summary img.edit":Se,"details[open]>summary img.done":xe,summary:"margin-left:-0.75rem;line-height:1.25rem;user-select:none;width:fit-content",table:"border-collapse:collapse;table-layout:fixed;margin-bottom:0.5rem","table input":"background:#111;color:unset;padding:0 0.25rem;border:0;font-size:unset;vertical-align:top;margin:0",'table input[type="number"]':"width:4rem","table tbody button":"font-size:0;background:#fff;border-radius:50%;margin:0 0.125rem 0 0;width:0.85rem;color:#111","table button:first-letter":"font-size:0.75rem",thead:"background:#222","th:nth-of-type(1)":"min-width:2rem;","th.sorted":"background:#000","table caption":"text-align:left;white-space:nowrap;line-height:1.25rem",button:"width:1.5rem;border:none;background:none;color:#fff;padding:0","button[disabled]":"color:#777","button.next":"margin-right:0.5rem",[`th,#${oe} td`]:"overflow:hidden;text-overflow:ellipsis;padding:0.25rem 0.5rem;max-width:12rem;white-space:nowrap;border-width:1px 0;border-style:solid;border-color:#777;text-align:left"},((e,t)=>e?`#${oe} ${t}{${e}}`:""))),qe=({s:e})=>{const t=l.useValue(he,e)??1,s=l.useSetValueCallback(me,(()=>!0),[],e);return l.useValue(me,e)?null:z("img",{onClick:s,title:re,"data-position":t})},Ne=({uniqueId:e,summary:t,editable:s,handleEditable:a,children:n,s:o})=>{const r=!!l.useCell(de,e,ce,o),i=l.useSetCellCallback(de,e,ce,(e=>e[T].open),[],o);return z("details",{open:r,onToggle:i},z("summary",null,t,a?z("img",{onClick:a,className:s?"done":"edit"}):null),n)},Le=e=>{const t=s(e);return L(t)||t==r&&V(e)?t:void 0},Me=(e,t,l,s,a)=>q(a)?e.delCell(t,l,s,!0):e.setCell(t,l,s,a),Ee=(e,t,l)=>q(l)?e.delValue(t):e.setValue(t,l),ze=(e,t,l,s)=>e==n?t:e==r?l:s,{useCallback:$e,useMemo:Oe,useState:Ae}=t,Je="editable",Fe=(e,t)=>P(l.useTableCellIds(e,t),(t=>e+"."+t)),Be=(e,t,l)=>{const s=$e(e,t);return l?s:void 0},He=(...e)=>Oe((()=>e),e),Pe=(e,t)=>Oe((()=>({store:e,tableId:t})),[e,t]),De=(e,t)=>Oe((()=>({queries:e,queryId:t})),[e,t]),Qe=(e,t=!1,l,s=0,a,n,o,r)=>{const[[i,d,u],c]=Ae([e,t,s]),h=$e((e=>{c(e),r?.(e)}),[r]),m=Be((e=>h([e,e==i&&!d,u])),[h,i,d,u],l),b=$e((e=>h([i,d,e])),[h,i,d]),g=!0===o?st:o;return[[i,d,u],m,Oe((()=>!1===o?null:z(g,{offset:u,limit:a,total:n,onChange:b})),[o,g,u,a,n,b])]},je=(e,t,l)=>Oe((()=>{const a=t??e;return _(le(E(a)?_(P(a,(e=>[e,e]))):a,((e,t)=>{return[t,{label:t,component:l,...(a=e,s(a)==n?{label:e}:e)}];var a})))}),[t,l,e]),We=({className:e,headerRow:t,idColumn:l,params:[s,a,n,o,r,i]})=>z("table",{className:e},i?z("caption",null,i):null,!1===t?null:z("thead",null,z("tr",null,!1===l?null:z(Ue,{sort:o??[],label:"Id",onClick:r}),le(s,(({label:e},t)=>z(Ue,{key:t,cellId:t,label:e,sort:o??[],onClick:r}))))),z("tbody",null,P(n,(e=>z("tr",{key:e},!1===l?null:z("th",null,e),le(s,(({component:t,getComponentProps:l},s)=>z("td",{key:s},z(t,{...B(l,e,s),...a,rowId:e,cellId:s}))))))))),Ue=({cellId:e,sort:[t,l],label:s=e??a,onClick:n})=>z("th",{onClick:Be((()=>n?.(e)),[n,e],n),className:q(l)||t!=e?void 0:`sorted ${l?"de":"a"}scending`},q(l)||t!=e?null:(l?"↓":"↑")+" ",s),Ge=({localRowId:e,params:[s,a,n,o,r,i,d]})=>{const u=l.useRemoteRowId(r,e,i);return z("tr",null,!1===s?null:z(t.Fragment,null,z("th",null,e),z("th",null,u)),le(a,(({component:t,getComponentProps:l},s)=>{const[a,r]=s.split(".",2),i=a===n?e:a===o?u:null;return q(i)?null:z("td",{key:s},z(t,{...B(l,i,r),store:d,tableId:a,rowId:i,cellId:r}))})))},Ke=({thing:e,onThingChange:t,className:l,hasSchema:s})=>{const[a,i]=Ae(),[d,u]=Ae(),[c,h]=Ae(),[m,b]=Ae(),[g,I]=Ae();d!==e&&(i(Le(e)),u(e),h(e+""),b(Number(e)||0),I(!!e));const p=$e(((e,l)=>{l(e),u(e),t(e)}),[t]);return z("div",{className:l},z("button",{className:a,onClick:$e((()=>{if(!s?.()){const e=ze(a,r,o,n),l=ze(e,c,m,g);i(e),u(l),t(l)}}),[s,t,c,m,g,a])},a),ze(a,z("input",{key:a,value:c,onChange:$e((e=>p(e[T][k]+"",h)),[p])}),z("input",{key:a,type:"number",value:m,onChange:$e((e=>p(Number(e[T][k]||0),b)),[p])}),z("input",{key:a,type:"checkbox",checked:g,onChange:$e((e=>p(!!e[T].checked,I)),[p])})))},Xe=({tableId:e,cellId:t,descending:s,offset:a,limit:n,store:o,editable:r,sortOnClick:i,paginator:d=!1,onChange:u,customCells:c,...h})=>{const[m,b,g]=Qe(t,s,i,a,n,l.useRowCount(e,o),d,u);return z(We,{...h,params:He(je(l.useTableCellIds(e,o),c,r?tt:l.CellView),Pe(o,e),l.useSortedRowIds(e,...m,n,o),m,b,g)})},Ye=({store:e,editable:t=!1,valueComponent:s=(t?lt:l.ValueView),getValueComponentProps:a,className:n,headerRow:o,idColumn:r})=>z("table",{className:n},!1===o?null:z("thead",null,z("tr",null,!1===r?null:z("th",null,"Id"),z("th",null,y))),z("tbody",null,P(l.useValueIds(e),(t=>z("tr",{key:t},!1===r?null:z("th",null,t),z("td",null,z(s,{...B(a,t),valueId:t,store:e}))))))),Ze=({indexId:e,sliceId:t,indexes:s,editable:a,customCells:n,...o})=>{const[r,i,d]=((e,t)=>[e,e?.getStore(),e?.getTableId(t)])(l.useIndexesOrIndexesById(s),e);return z(We,{...o,params:He(je(l.useTableCellIds(d,i),n,a?tt:l.CellView),Pe(i,d),l.useSliceRowIds(e,t,r))})},_e=({relationshipId:e,relationships:s,editable:a,customCells:n,className:o,headerRow:r,idColumn:i=!0})=>{const[d,u,c,h]=((e,t)=>[e,e?.getStore(),e?.getLocalTableId(t),e?.getRemoteTableId(t)])(l.useRelationshipsOrRelationshipsById(s),e),m=je([...Fe(c,u),...Fe(h,u)],n,a?tt:l.CellView),b=He(i,m,c,h,e,d,u);return z("table",{className:o},!1===r?null:z("thead",null,z("tr",null,!1===i?null:z(t.Fragment,null,z("th",null,c,".Id"),z("th",null,h,".Id")),le(m,(({label:e},t)=>z("th",{key:t},e))))),z("tbody",null,P(l.useRowIds(c,u),(e=>z(Ge,{key:e,localRowId:e,params:b})))))},et=({queryId:e,cellId:t,descending:s,offset:a,limit:n,queries:o,sortOnClick:r,paginator:i=!1,customCells:d,onChange:u,...c})=>{const[h,m,b]=Qe(t,s,r,a,n,l.useResultRowCount(e,o),i,u);return z(We,{...c,params:He(je(l.useResultTableCellIds(e,o),d,l.ResultCellView),De(o,e),l.useResultSortedRowIds(e,...h,n,o),h,m,b)})},tt=({tableId:e,rowId:t,cellId:s,store:a,className:n})=>z(Ke,{thing:l.useCell(e,t,s,a),onThingChange:l.useSetCellCallback(e,t,s,(e=>e),[],a),className:n??Je+f,hasSchema:l.useStoreOrStoreById(a)?.hasTablesSchema}),lt=({valueId:e,store:t,className:s})=>z(Ke,{thing:l.useValue(e,t),onThingChange:l.useSetValueCallback(e,(e=>e),[],t),className:s??Je+y,hasSchema:l.useStoreOrStoreById(t)?.hasValuesSchema}),st=({onChange:e,total:l,offset:s=0,limit:a=l,singular:n="row",plural:o=n+"s"})=>{(s>l||s<0)&&(s=0,e(0));const r=Be((()=>e(s-a)),[e,s,a],s>0),i=Be((()=>e(s+a)),[e,s,a],s+a<l);return z(t.Fragment,null,l>a&&z(t.Fragment,null,z("button",{className:"previous",disabled:0==s,onClick:r},"←"),z("button",{className:"next",disabled:s+a>=l,onClick:i},"→"),s+1," to ",Math.min(l,s+a)," of "),l," ",1!=l?o:n)},at=({indexes:e,indexesId:t,indexId:s,s:a})=>z(Ne,{uniqueId:ge("i",t,s),summary:"Index: "+s,s:a},P(l.useSliceIds(s,e),(l=>z(nt,{indexes:e,indexesId:t,indexId:s,sliceId:l,s:a})))),nt=({indexes:e,indexesId:t,indexId:l,sliceId:s,s:a})=>{const n=ge("i",t,l,s),[o,r]=pe(n,a);return z(Ne,{uniqueId:n,summary:"Slice: "+s,editable:o,handleEditable:r,s:a},z(Ze,{sliceId:s,indexId:l,indexes:e,editable:o}))},ot=({indexesId:e,s:t})=>{const s=l.useIndexes(e),a=l.useIndexIds(s);return q(s)?null:z(Ne,{uniqueId:ge("i",e),summary:"Indexes: "+(e??u),s:t},Q(a)?"No indexes defined":Ie(a,(l=>z(at,{indexes:s,indexesId:e,indexId:l,s:t}))))},rt=({metrics:e,metricId:t})=>z("tr",null,z("th",null,t),z("td",null,e?.getTableId(t)),z("td",null,l.useMetric(t,e))),it=({metricsId:e,s:t})=>{const s=l.useMetrics(e),a=l.useMetricIds(s);return q(s)?null:z(Ne,{uniqueId:ge("m",e),summary:"Metrics: "+(e??u),s:t},Q(a)?"No metrics defined":z("table",null,z("thead",null,z("th",null,"Metric Id"),z("th",null,"Table Id"),z("th",null,"Metric")),z("tbody",null,P(a,(e=>z(rt,{metrics:s,metricId:e}))))))},dt=({queries:e,queriesId:t,queryId:s,s:a})=>{const n=ge("q",t,s),[o,r,i]=ne(l.useCell(de,n,ue,a)??"[]"),d=l.useSetCellCallback(de,n,ue,ae,[],a);return z(Ne,{uniqueId:n,summary:"Query: "+s,s:a},z(et,{queryId:s,queries:e,cellId:o,descending:r,offset:i,limit:10,paginator:!0,sortOnClick:!0,onChange:d}))},ut=({queriesId:e,s:t})=>{const s=l.useQueries(e),a=l.useQueryIds(s);return q(s)?null:z(Ne,{uniqueId:ge("q",e),summary:"Queries: "+(e??u),s:t},Q(a)?"No queries defined":Ie(a,(l=>z(dt,{queries:s,queriesId:e,queryId:l,s:t}))))},ct=({relationships:e,relationshipsId:t,relationshipId:l,s:s})=>{const a=ge("r",t,l),[n,o]=pe(a,s);return z(Ne,{uniqueId:a,summary:"Relationship: "+l,editable:n,handleEditable:o,s:s},z(_e,{relationshipId:l,relationships:e,editable:n}))},ht=({relationshipsId:e,s:t})=>{const s=l.useRelationships(e),a=l.useRelationshipIds(s);return q(s)?null:z(Ne,{uniqueId:ge("r",e),summary:"Relationships: "+(e??u),s:t},Q(a)?"No relationships defined":Ie(a,(l=>z(ct,{relationships:s,relationshipsId:e,relationshipId:l,s:t}))))},mt=({tableId:e,store:t,storeId:s,s:a})=>{const n=ge("t",s,e),[o,r,i]=ne(l.useCell(de,n,ue,a)??"[]"),d=l.useSetCellCallback(de,n,ue,ae,[],a),[u,c]=pe(n,a);return z(Ne,{uniqueId:n,summary:h+": "+e,editable:u,handleEditable:c,s:a},z(Xe,{tableId:e,store:t,cellId:o,descending:r,offset:i,limit:10,paginator:!0,sortOnClick:!0,onChange:d,editable:u}))},bt=({store:e,storeId:t,s:s})=>{const a=ge("v",t),[n,o]=pe(a,s);return Q(l.useValueIds(e))?null:z(Ne,{uniqueId:a,summary:C,editable:n,handleEditable:o,s:s},z(Ye,{store:e,editable:n}))},gt=({storeId:e,s:t})=>{const s=l.useStore(e),a=l.useTableIds(s);return q(s)?null:z(Ne,{uniqueId:ge("s",e),summary:"Store: "+(e??u),s:t},z(bt,{storeId:e,store:s,s:t}),Ie(a,(l=>z(mt,{store:s,storeId:e,tableId:l,s:t}))))},It=({s:e})=>{const t=J(null),s=J(0),[a,n]=F(!1),{scrollLeft:o,scrollTop:r}=l.useValues(e);A((()=>{const e=t.current;if(e&&!a){const t=new MutationObserver((()=>{e.scrollWidth>=x(o)+e.clientWidth&&e.scrollHeight>=x(r)+e.clientHeight&&e.scrollTo(o,r)}));return t.observe(e,{childList:!0,subtree:!0}),()=>t.disconnect()}}),[a,o,r]);const i=O((t=>{const{scrollLeft:l,scrollTop:a}=t[T];cancelIdleCallback(s.current),s.current=requestIdleCallback((()=>{n(!0),e.setPartialValues({scrollLeft:l,scrollTop:a})}))}),[e]);return z("article",{ref:t,onScroll:i},z(gt,{s:e}),P(l.useStoreIds(),(t=>z(gt,{storeId:t,key:t,s:e}))),z(it,{s:e}),P(l.useMetricsIds(),(t=>z(it,{metricsId:t,key:t,s:e}))),z(ot,{s:e}),P(l.useIndexesIds(),(t=>z(ot,{indexesId:t,key:t,s:e}))),z(ht,{s:e}),P(l.useRelationshipsIds(),(t=>z(ht,{relationshipsId:t,key:t,s:e}))),z(ut,{s:e}),P(l.useQueriesIds(),(t=>z(ut,{queriesId:t,key:t,s:e}))))},pt=({s:e})=>{const t=l.useValue(he,e)??1,s=l.useSetValueCallback(me,(()=>!1),[],e),a=l.useSetValueCallback(he,(e=>Number(e[T].dataset.id)),[],e);return z("header",null,z("img",{title:re}),z("span",null,re),P(ie,((e,l)=>l==t?null:z("img",{onClick:a,"data-id":l,title:"Dock to "+e,key:l}))),z("img",{onClick:s,title:"Close"}))},ft=({s:e})=>{const t=l.useValue(he,e)??1;return l.useValue(me,e)?z("main",{"data-position":t},z(pt,{s:e}),z(It,{s:e})):null},wt=e=>t=>{return l=(t,l)=>t+e(l),xt(t).reduce(l,0);var l},yt=e=>e?.size??0,Ct=wt(yt),vt=wt(Ct),Tt=wt(vt),kt=(e,t)=>e?.has(t)??!1,St=e=>q(e)||0==yt(e),xt=e=>[...e?.values()??[]],Vt=e=>e.clear(),Rt=(e,t)=>e?.forEach(t),qt=(e,t)=>e?.delete(t),Nt=e=>new Map(e),Lt=e=>[...e?.keys()??[]],Mt=(e,t)=>e?.get(t),Et=(e,t)=>Rt(e,((e,l)=>t(l,e))),zt=(e,t,l)=>q(l)?(qt(e,t),e):e?.set(t,l),$t=(e,t,l)=>(kt(e,t)||zt(e,t,l()),Mt(e,t)),Ot=(e,t,l,s=zt)=>(le(t,((t,s)=>l(e,s,t))),Et(e,(l=>ee(t,l)?0:s(e,l))),e),At=(e,t,l)=>{const s={};return Rt(e,((e,a)=>{const n=t?t(e,a):e;!l?.(n,e)&&(s[a]=n)})),s},Jt=(e,t,l)=>At(e,(e=>At(e,t,l)),se),Ft=(e,t,l)=>At(e,(e=>Jt(e,t,l)),se),Bt=(e,t)=>{const l=Nt();return Rt(e,((e,s)=>l.set(s,t?.(e)??e))),l},Ht=e=>Bt(e,Bt),Pt=e=>Bt(e,Ht),Dt=(e,t,l,s,a=0)=>N((l?$t:Mt)(e,t[a],a>D(t)-2?l:Nt),(n=>{if(a>D(t)-2)return s?.(n)&&zt(e,t[a]),n;const o=Dt(n,t,l,s,a+1);return St(n)&&zt(e,t[a]),o})),Qt=Nt(),jt=Nt(),Wt="storage",Ut=globalThis.window,Gt=e=>new Set(E(e)||q(e)?e:[e]),Kt=(e,t)=>e?.add(t),Xt=/^\d+$/,Yt=()=>{const e=[];let t=0;return[l=>(l?U(e):null)??a+t++,t=>{Xt.test(t)&&D(e)<1e3&&W(e,t)}]},Zt=e=>[e,e],_t=(e,t=Ct)=>t(e[0])+t(e[1]),el=()=>[Nt(),Nt()],tl=e=>[...e],ll=([e,t])=>e===t,sl=(e,t,l)=>q(e)||!Z(e)||se(e)||X(e)?(l?.(),!1):(le(e,((l,s)=>{t(l,s)||te(e,s)})),!se(e)),al=(e,t,l)=>zt(e,t,Mt(e,t)==-l?void 0:l),nl=()=>{let e,t,l=!1,s=!1,n=0;const o=Nt(),i=Nt(),c=Nt(),T=Nt(),k=Nt(),x=Nt(),V=Nt(),R=Nt(),E=Nt(),z=Nt(),$=Nt(),O=Nt(),A=Nt(),J=Nt(),F=Gt(),B=Nt(),Q=Nt(),U=Nt(),G=Nt(),K=el(),X=el(),Z=el(),_=el(),oe=el(),re=el(),ie=el(),de=el(),ue=el(),ce=el(),he=el(),me=el(),be=el(),ge=el(),Ie=el(),pe=Nt(),fe=el(),[we,ye,Ce,ve]=(e=>{let t;const[l,s]=Yt(),n=Nt();return[(e,s,o,r=[],i=(()=>[]))=>{t??=wl;const d=l(1);return zt(n,d,[e,s,o,r,i]),Kt(Dt(s,o??[a],Gt),d),d},(e,l,...s)=>H(((e,t=[a])=>{const l=[],s=(e,a)=>a==D(t)?W(l,e):null===t[a]?Rt(e,(e=>s(e,a+1))):H([t[a],null],(t=>s(Mt(e,t),a+1)));return s(e,0),l})(e,l),(e=>Rt(e,(e=>Mt(n,e)[0](t,...l??[],...s))))),e=>N(Mt(n,e),(([,t,l])=>(Dt(t,l??[a],void 0,(t=>(qt(t,e),St(t)?1:0))),zt(n,e),s(e),l))),e=>N(Mt(n,e),(([e,,l=[],s,a])=>{const n=(...o)=>{const r=D(o);r==D(l)?e(t,...o,...a(o)):q(l[r])?H(s[r]?.(...o)??[],(e=>n(...o,e))):n(...o,l[r])};n()}))]})(),Te=e=>{if(!sl(e,((e,t)=>[d,u].includes(t))))return!1;const t=e[d];return!(!L(t)&&t!=r||(Le(e[u])!=t&&te(e,u),0))},ke=(t,l)=>(!e||kt($,l)||st(l))&&sl(t,((e,t)=>Se(l,t,e)),(()=>st(l))),Se=(e,t,l,s)=>sl(s?l:qe(l,e,t),((s,a)=>N(xe(e,t,a,s),(e=>(l[a]=e,!0)),(()=>!1))),(()=>st(e,t))),xe=(t,l,s,a)=>e?N(Mt(Mt($,t),s),(e=>Le(a)!=e[d]?st(t,l,s,a,e[u]):a),(()=>st(t,l,s,a))):q(Le(a))?st(t,l,s,a):a,Ve=(e,t)=>sl(t?e:Ne(e),((t,l)=>N(Re(l,t),(t=>(e[l]=t,!0)),(()=>!1))),(()=>at())),Re=(e,l)=>t?N(Mt(A,e),(t=>Le(l)!=t[d]?at(e,l,t[u]):l),(()=>at(e,l))):q(Le(l))?at(e,l):l,qe=(e,t,l)=>(N(Mt(O,t),(([s,a])=>{Rt(s,((t,l)=>{ee(e,l)||(e[l]=t)})),Rt(a,(s=>{ee(e,s)||st(t,l,s)}))})),e),Ne=e=>(t&&(Rt(J,((t,l)=>{ee(e,l)||(e[l]=t)})),Rt(F,(t=>{ee(e,t)||at(t)}))),e),ze=e=>Ot($,e,((e,t,l)=>{const s=Nt(),a=Gt();Ot($t($,t,Nt),l,((e,t,l)=>{zt(e,t,l),N(l[u],(e=>zt(s,t,e)),(()=>Kt(a,t)))})),zt(O,t,[s,a])}),((e,t)=>{zt($,t),zt(O,t)})),$e=e=>Ot(A,e,((e,t,l)=>{zt(A,t,l),N(l[u],(e=>zt(J,t,e)),(()=>Kt(F,t)))}),((e,t)=>{zt(A,t),zt(J,t),qt(F,t)})),Oe=e=>se(e)?ul():Xt(e),Ae=e=>Ot(U,e,((e,t,l)=>Je(t,l)),((e,t)=>Ue(t))),Je=(e,t)=>Ot($t(U,e,(()=>(Ye(e,1),zt(B,e,Yt()),zt(Q,e,Nt()),Nt()))),t,((t,l,s)=>Fe(e,t,l,s)),((t,l)=>Ge(e,t,l))),Fe=(e,t,l,s,a)=>Ot($t(t,l,(()=>(Ze(e,l,1),Nt()))),s,((t,s,a)=>Be(e,l,t,s,a)),((s,n)=>Ke(e,t,l,s,n,a))),Be=(e,t,l,s,a)=>{kt(l,s)||_e(e,t,s,1);const n=Mt(l,s);a!==n&&(et(e,t,s,n,a),zt(l,s,a))},He=(e,t,l,s,a)=>N(Mt(t,l),(t=>Be(e,l,t,s,a)),(()=>Fe(e,t,l,qe({[s]:a},e,l)))),Pe=e=>se(e)?ml():ol(e),De=e=>Ot(G,e,((e,t,l)=>Qe(t,l)),((e,t)=>Xe(t))),Qe=(e,t)=>{kt(G,e)||tt(e,1);const l=Mt(G,e);t!==l&&(lt(e,l,t),zt(G,e,t))},je=(e,t)=>{const[l]=Mt(B,e),s=l(t);return kt(Mt(U,e),s)?je(e,t):s},We=e=>Mt(U,e)??Je(e,{}),Ue=e=>Je(e,{}),Ge=(e,t,l)=>{const[,s]=Mt(B,e);s(l),Fe(e,t,l,{},!0)},Ke=(e,t,l,s,a,n)=>{const o=Mt(Mt(O,e)?.[0],a);if(!q(o)&&!n)return Be(e,l,s,a,o);const r=t=>{et(e,l,t,Mt(s,t)),_e(e,l,t,-1),zt(s,t)};q(o)?r(a):Et(s,r),St(s)&&(Ze(e,l,-1),St(zt(t,l))&&(Ye(e,-1),zt(U,e),zt(B,e),zt(Q,e)))},Xe=e=>{const t=Mt(J,e);if(!q(t))return Qe(e,t);lt(e,Mt(G,e)),tt(e,-1),zt(G,e)},Ye=(e,t)=>al(o,e,t),Ze=(e,t,l)=>al($t(T,e,Nt),t,l)&&zt(c,e,$t(c,e,(()=>0))+l),_e=(e,t,l,s)=>{const a=Mt(Q,e),n=Mt(a,l)??0;(0==n&&1==s||1==n&&-1==s)&&al($t(i,e,Nt),l,s),zt(a,l,n!=-s?n+s:null),al($t($t(k,e,Nt),t,Nt),l,s)},et=(e,t,l,s,a)=>$t($t($t(x,e,Nt),t,Nt),l,(()=>[s,0]))[1]=a,tt=(e,t)=>al(V,e,t),lt=(e,t,l)=>$t(R,e,(()=>[t,0]))[1]=l,st=(e,t,l,s,a)=>(W($t($t($t(E,e,Nt),t,Nt),l,(()=>[])),s),a),at=(e,t,l)=>(W($t(z,e,(()=>[])),t),l),nt=(e,t,l)=>N(Mt(Mt(Mt(x,e),t),l),(([e,t])=>[!0,e,t]),(()=>[!1,...Zt(Qt(e,t,l))])),ot=e=>N(Mt(R,e),(([e,t])=>[!0,e,t]),(()=>[!1,...Zt(Ut(e))])),rt=e=>St(E)||St(he[e])?0:Rt(e?Pt(E):E,((t,l)=>Rt(t,((t,s)=>Rt(t,((t,a)=>ye(he[e],[l,s,a],t))))))),it=e=>St(z)||St(me[e])?0:Rt(e?Bt(z):z,((t,l)=>ye(me[e],[l],t))),dt=(e,t,l)=>{if(!St(t))return ye(e,l,(()=>At(t))),1},ut=e=>{const t=St(ie[e]),l=St(ue[e])&&St(_[e])&&St(oe[e])&&St(re[e])&&t&&St(X[e]),s=St(ce[e])&&St(de[e])&&St(Z[e])&&St(K[e]);if(!l||!s){const a=e?[Bt(o),Ht(i),Bt(c),Ht(T),Pt(k),Pt(x)]:[o,i,c,T,k,x];if(!l){dt(X[e],a[0]),Rt(a[1],((t,l)=>dt(_[e],t,[l]))),Rt(a[2],((t,l)=>{0!=t&&ye(oe[e],[l],pt(l))}));const l=Gt();Rt(a[3],((s,a)=>{dt(re[e],s,[a])&&!t&&(ye(ie[e],[a,null]),Kt(l,a))})),t||Rt(a[5],((t,s)=>{if(!kt(l,s)){const l=Gt();Rt(t,(e=>Rt(e,(([t,s],a)=>s!==t?Kt(l,a):qt(e,a))))),Rt(l,(t=>ye(ie[e],[s,t])))}})),Rt(a[4],((t,l)=>Rt(t,((t,s)=>dt(ue[e],t,[l,s])))))}if(!s){let t;Rt(a[5],((l,s)=>{let a;Rt(l,((l,n)=>{let o;Rt(l,(([l,r],i)=>{r!==l&&(ye(ce[e],[s,n,i],r,l,nt),t=a=o=1)})),o&&ye(de[e],[s,n],nt)})),a&&ye(Z[e],[s],nt)})),t&&ye(K[e],void 0,nt)}}},ct=e=>{const t=St(ge[e]),l=St(Ie[e])&&St(be[e]);if(!t||!l){const s=e?[Bt(V),Bt(R)]:[V,R];if(t||dt(ge[e],s[0]),!l){let t;Rt(s[1],(([l,s],a)=>{s!==l&&(ye(Ie[e],[a],s,l,ot),t=1)})),t&&ye(be[e],void 0,ot)}}},ht=(e,...t)=>(Il((()=>e(...P(t,S)))),wl),mt=()=>[At(x,((e,t)=>-1===Mt(o,t)?null:At(e,((e,l)=>-1===Mt(Mt(T,t),l)?null:At(e,(([,e])=>e??null),((e,t)=>ll(t)))),se)),se),At(R,(([,e])=>e??null),((e,t)=>ll(t)))],bt=()=>({cellsTouched:l,valuesTouched:s,changedCells:Ft(x,tl,ll),invalidCells:Ft(E),changedValues:At(R,tl,ll),invalidValues:At(z),changedTableIds:At(o),changedRowIds:Jt(T),changedCellIds:Ft(k),changedValueIds:At(V)}),gt=()=>Ft(U),It=()=>Lt(U),pt=e=>yt(Mt(U,S(e))),ft=e=>Lt(Mt(U,S(e))),wt=(e,t,l,s=0,a)=>{return P(j((o=Mt(U,S(e)),r=(e,l)=>[q(t)?l:Mt(e,S(t)),l],n=([e],[t])=>((e??0)<(t??0)?-1:1)*(l?-1:1),P([...o?.entries()??[]],(([e,t])=>r(t,e))).sort(n)),s,q(a)?a:s+a),(([,e])=>e));var n,o,r},xt=(e,t)=>Lt(Mt(Mt(U,S(e)),S(t))),Qt=(e,t,l)=>Mt(Mt(Mt(U,S(e)),S(t)),S(l)),jt=()=>At(G),Wt=()=>Lt(G),Ut=e=>Mt(G,S(e)),Xt=e=>ht((()=>(e=>sl(e,ke,st))(e)?Ae(e):0)),ol=e=>ht((()=>Ve(e)?De(e):0)),rl=e=>{try{Oe(ne(e))}catch{}return wl},il=t=>ht((()=>{if((e=sl(t,(e=>sl(e,Te))))&&(ze(t),!St(U))){const e=gt();ul(),Xt(e)}})),dl=e=>ht((()=>{if(t=(e=>sl(e,Te))(e)){const l=jt();gl(),ml(),t=!0,$e(e),ol(l)}})),ul=()=>ht((()=>Ae({}))),cl=e=>ht((e=>kt(U,e)?Ue(e):0),e),hl=(e,t)=>ht(((e,t)=>N(Mt(U,e),(l=>kt(l,t)?Ge(e,l,t):0))),e,t),ml=()=>ht((()=>De({}))),bl=()=>ht((()=>{ze({}),e=!1})),gl=()=>ht((()=>{$e({}),t=!1})),Il=(e,t)=>{if(-1!=n){pl();const l=e();return fl(t),l}},pl=()=>(-1!=n&&n++,1==n&&ye(pe,void 0,mt,bt),wl),fl=e=>(n>0&&(n--,0==n&&(l=!St(x),s=!St(R),n=1,rt(1),l&&ut(1),it(1),s&&ct(1),e?.(mt,bt)&&(Rt(x,((e,t)=>Rt(e,((e,l)=>Rt(e,(([e],s)=>Me(wl,t,l,s,e))))))),Rt(R,(([e],t)=>Ee(wl,t,e))),l=s=!1),ye(fe[0],void 0,mt,bt),n=-1,rt(0),l&&ut(0),it(0),s&&ct(0),ye(fe[1],void 0,mt,bt),n=0,l=s=!1,H([o,i,c,T,k,x,E,V,R,z],Vt))),wl),wl={getContent:()=>[gt(),jt()],getTables:gt,getTableIds:It,getTable:e=>Jt(Mt(U,S(e))),getTableCellIds:e=>Lt(Mt(Q,S(e))),getRowCount:pt,getRowIds:ft,getSortedRowIds:wt,getRow:(e,t)=>At(Mt(Mt(U,S(e)),S(t))),getCellIds:xt,getCell:Qt,getValues:jt,getValueIds:Wt,getValue:Ut,hasTables:()=>!St(U),hasTable:e=>kt(U,S(e)),hasTableCell:(e,t)=>kt(Mt(Q,S(e)),S(t)),hasRow:(e,t)=>kt(Mt(U,S(e)),S(t)),hasCell:(e,t,l)=>kt(Mt(Mt(U,S(e)),S(t)),S(l)),hasValues:()=>!St(G),hasValue:e=>kt(G,S(e)),getTablesJson:()=>ae(U),getValuesJson:()=>ae(G),getJson:()=>ae([U,G]),getTablesSchemaJson:()=>ae($),getValuesSchemaJson:()=>ae(A),getSchemaJson:()=>ae([$,A]),hasTablesSchema:()=>e,hasValuesSchema:()=>t,setContent:([e,t])=>ht((()=>{(se(e)?ul:Xt)(e),(se(t)?ml:ol)(t)})),setTables:Xt,setTable:(e,t)=>ht((e=>ke(t,e)?Je(e,t):0),e),setRow:(e,t,l)=>ht(((e,t)=>Se(e,t,l)?Fe(e,We(e),t,l):0),e,t),addRow:(e,t,l=!0)=>Il((()=>{let s;return Se(e,s,t)&&(e=S(e),Fe(e,We(e),s=je(e,l?1:0),t)),s})),setPartialRow:(e,t,l)=>ht(((e,t)=>{if(Se(e,t,l,1)){const s=We(e);le(l,((l,a)=>He(e,s,t,a,l)))}}),e,t),setCell:(e,t,l,s)=>ht(((e,t,l)=>N(xe(e,t,l,M(s)?s(Qt(e,t,l)):s),(s=>He(e,We(e),t,l,s)))),e,t,l),setValues:ol,setPartialValues:e=>ht((()=>Ve(e,1)?le(e,((e,t)=>Qe(t,e))):0)),setValue:(e,t)=>ht((e=>N(Re(e,M(t)?t(Ut(e)):t),(t=>Qe(e,t)))),e),setTransactionChanges:e=>ht((()=>{le(e[0],((e,t)=>q(e)?cl(t):le(e,((e,l)=>q(e)?hl(t,l):le(e,((e,s)=>Me(wl,t,l,s,e))))))),le(e[1],((e,t)=>Ee(wl,t,e)))})),setTablesJson:rl,setValuesJson:e=>{try{Pe(ne(e))}catch{}return wl},setJson:e=>{try{const[t,l]=ne(e);Oe(t),Pe(l)}catch{rl(e)}return wl},setTablesSchema:il,setValuesSchema:dl,setSchema:(e,t)=>ht((()=>{il(e),dl(t)})),delTables:ul,delTable:cl,delRow:hl,delCell:(e,t,l,s)=>ht(((e,t,l)=>N(Mt(U,e),(a=>N(Mt(a,t),(n=>kt(n,l)?Ke(e,a,t,n,l,s):0))))),e,t,l),delValues:ml,delValue:e=>ht((e=>kt(G,e)?Xe(e):0),e),delTablesSchema:bl,delValuesSchema:gl,delSchema:()=>ht((()=>{bl(),gl()})),transaction:Il,startTransaction:pl,finishTransaction:fl,forEachTable:e=>Rt(U,((t,l)=>e(l,(e=>Rt(t,((t,l)=>e(l,(e=>Et(t,e))))))))),forEachTableCell:(e,t)=>Et(Mt(Q,S(e)),t),forEachRow:(e,t)=>Rt(Mt(U,S(e)),((e,l)=>t(l,(t=>Et(e,t))))),forEachCell:(e,t,l)=>Et(Mt(Mt(U,S(e)),S(t)),l),forEachValue:e=>Et(G,e),addSortedRowIdsListener:(e,t,l,s,a,n,o)=>{let r=wt(e,t,l,s,a);return we((()=>{const o=wt(e,t,l,s,a);var i,d,u;d=r,D(i=o)===D(d)&&(u=(e,t)=>d[t]===e,i.every(u))||(r=o,n(wl,e,t,l,s,a,r))}),ie[o?1:0],[e,t],[It])},addStartTransactionListener:e=>we(e,pe),addWillFinishTransactionListener:e=>we(e,fe[0]),addDidFinishTransactionListener:e=>we(e,fe[1]),callListener:e=>(ve(e),wl),delListener:e=>(Ce(e),wl),getListenerStats:()=>({tables:_t(K),tableIds:_t(X),tableCellIds:_t(_),table:_t(Z),rowCount:_t(oe),rowIds:_t(re),sortedRowIds:_t(ie),row:_t(de,vt),cellIds:_t(ue,vt),cell:_t(ce,Tt),invalidCell:_t(he,Tt),values:_t(be),valueIds:_t(ge),value:_t(Ie),invalidValue:_t(me),transaction:Ct(pe)+_t(fe)}),createStore:nl,addListener:we,callListeners:ye};return le({[m]:[0,K],[b]:[0,X],[h]:[1,Z,[It]],[h+w]:[1,_,[It]],[I]:[1,oe,[It]],[p]:[1,re,[It]],[g]:[2,de,[It,ft]],[w]:[2,ue,[It,ft]],[f]:[3,ce,[It,ft,xt],e=>Zt(Qt(...e))],InvalidCell:[3,he],[C]:[0,be],[v]:[0,ge],[y]:[1,Ie,[Wt],e=>Zt(Ut(e[0]))],InvalidValue:[1,me]},(([e,t,l,s],a)=>{wl["add"+a+"Listener"]=(...a)=>we(a[e],t[a[e+1]?1:0],e>0?j(a,0,e):void 0,l,s)})),Y(wl)},ol=({position:e="right",open:t=!1})=>{const s=l.useCreateStore(nl),a=ie.indexOf(e);return l.useCreatePersister(s,(e=>{return((e,t,l,s)=>((e,t,l,s,a,n,o=[])=>{let r,i,d,u=0,c=0,h=0,m=0;$t(Qt,o,(()=>0)),$t(jt,o,(()=>[]));const b=async e=>(2!=u&&(u=1,c++,await g.schedule((async()=>{await e(),u=0}))),g),g={load:async(l,s)=>await b((async()=>{try{e.setContent(await t())}catch{e.setContent([l,s])}})),startAutoLoad:async(l={},a={})=>(g.stopAutoLoad(),await g.load(l,a),m=1,d=s((async(l,s)=>{if(s){const t=s();await b((async()=>e.setTransactionChanges(t)))}else await b((async()=>{try{e.setContent(l?.()??await t())}catch(e){n?.(e)}}))})),g),stopAutoLoad:()=>(m&&(a(d),d=void 0,m=0),g),save:async t=>(1!=u&&(u=2,h++,await g.schedule((async()=>{try{await l(e.getContent,t)}catch(e){n?.(e)}u=0}))),g),startAutoSave:async()=>(await g.stopAutoSave().save(),r=e.addDidFinishTransactionListener(((e,t)=>{const[l,s]=t();se(l)&&se(s)||g.save((()=>[l,s]))})),g),stopAutoSave:()=>(N(r,e.delListener),g),schedule:async(...e)=>(W(Mt(jt,o),...e),await(async()=>{if(!Mt(Qt,o)){for(zt(Qt,o,1);!q(i=U(Mt(jt,o)));)try{await i()}catch(e){n?.(e)}zt(Qt,o,0)}})(),g),getStore:()=>e,destroy:()=>g.stopAutoLoad().stopAutoSave(),getStats:()=>({loads:c,saves:h})};return Y(g)})(e,(async()=>ne(l.getItem(t))),(async e=>l.setItem(t,ae(e()))),(e=>{const s=s=>{s.storageArea===l&&s.key===t&&e((()=>ne(s.newValue)))};return Ut.addEventListener(Wt,s),s}),(e=>Ut.removeEventListener(Wt,e)),s))(e,oe,sessionStorage,t);var t}),void 0,(async e=>{await e.load(void 0,{position:-1==a?1:a,open:!!t}),await e.startAutoSave()})),z($,null,z("aside",{id:oe},z(qe,{s:s}),z(ft,{s:s})),z("style",null,Re))};e.EditableCellView=tt,e.EditableValueView=lt,e.RelationshipInHtmlTable=_e,e.ResultSortedTableInHtmlTable=et,e.ResultTableInHtmlTable=({queryId:e,queries:t,customCells:s,...a})=>z(We,{...a,params:He(je(l.useResultTableCellIds(e,t),s,l.ResultCellView),De(t,e),l.useResultRowIds(e,t))}),e.SliceInHtmlTable=Ze,e.SortedTableInHtmlTable=Xe,e.SortedTablePaginator=st,e.StoreInspector=e=>z(ol,{...e}),e.TableInHtmlTable=({tableId:e,store:t,editable:s,customCells:a,...n})=>z(We,{...n,params:He(je(l.useTableCellIds(e,t),a,s?tt:l.CellView),Pe(t,e),l.useRowIds(e,t))}),e.ValuesInHtmlTable=Ye},"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("./ui-react")):"function"==typeof define&&define.amd?define(["exports","react","./ui-react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseUiReactDomDebug={},e.React,e.TinyBaseUiReact);
