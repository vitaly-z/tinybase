var e,t;e=this,t=function(e,t,l){"use strict";const a=e=>typeof e,n=a(""),o=a(!0),r=a(0),s="Value",i="currentTarget",d="value",u=isFinite,m=e=>null==e,{createElement:c,Fragment:h,useCallback:b,useLayoutEffect:g,useRef:p,useState:f}=t,w=(e,...t)=>m(e)?{}:e(...t),I=(e,t)=>e.map(t),C=Object,y=(e=[])=>C.fromEntries(e),k=(e,t)=>I(C.entries(e),(([e,l])=>t(l,e))),v="tinybaseStoreInspector",x="M20 80l5-15l40-40l10 10l-40 40l-15 5m5-15l10 10",R='content:url("',T=R+"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' stroke-width='4' stroke='white' fill='none'>",S='</svg>")',N=R+"data:image/svg+xml,%3csvg viewBox='0 0 680 680' xmlns='http://www.w3.org/2000/svg' style='width:680px%3bheight:680px'%3e %3cpath stroke='white' stroke-width='80' fill='none' d='M340 617a84 241 90 11.01 0zM131 475a94 254 70 10428-124 114 286 70 01-428 124zm0-140a94 254 70 10428-124 114 286 70 01-428 124zm-12-127a94 254 70 00306 38 90 260 90 01-306-38zm221 3a74 241 90 11.01 0z' /%3e %3cpath fill='%23d81b60' d='M131 475a94 254 70 10428-124 114 286 70 01-428 124zm0-140a94 254 70 10428-124 114 286 70 01-428 124z' /%3e %3cpath d='M249 619a94 240 90 00308-128 114 289 70 01-308 128zM119 208a94 254 70 00306 38 90 260 90 01-306-38zm221 3a74 241 90 11.01 0z' /%3e%3c/svg%3e\")",V=I([[20,20,20,60],[20,20,60,20],[20,60,60,20],[60,20,20,60],[30,30,40,40]],(([e,t,l,a])=>T+`<rect x='20' y='20' width='60' height='60' fill='grey'/><rect x='${e}' y='${t}' width='${l}' height='${a}' fill='white'/>`+S)),z=T+"<path d='M20 20l60 60M20 80l60-60' />"+S,$=T+`<path d='${x}' />`+S,M=T+`<path d='${x}M20 20l60 60' />`+S,q="*::-webkit-scrollbar";((e,t="")=>{e.join(t)})(k({"":"all:initial;font-family:sans-serif;font-size:0.75rem;position:fixed;z-index:999999","*":"all:revert","*::before":"all:revert","*::after":"all:revert",[q]:"width:0.5rem;height:0.5rem;",[q+"-track"]:"background:#111",[q+"-thumb"]:"background:#999;border:1px solid #111",[q+"-thumb:hover"]:"background:#fff",[q+"-corner"]:"background:#111",img:"width:1rem;height:1rem;background:#111;border:0;vertical-align:text-bottom",">img":"padding:0.25rem;bottom:0;right:0;position:fixed;"+N,...y(I(["bottom:0;left:0","top:0;right:0"],((e,t)=>[`>img[data-position='${t}']`,e]))),main:"display:flex;flex-direction:column;background:#111d;color:#fff;position:fixed;",...y(I(["bottom:0;left:0;width:35vw;height:100vh","top:0;right:0;width:100vw;height:30vh","bottom:0;left:0;width:100vw;height:30vh","top:0;right:0;width:35vw;height:100vh","top:0;right:0;width:100vw;height:100vh"],((e,t)=>[`main[data-position='${t}']`,e]))),header:"display:flex;padding:0.25rem;background:#000;align-items:center","header>img:nth-of-type(1)":N,"header>img:nth-of-type(6)":z,...y(I(V,((e,t)=>[`header>img[data-id='${t}']`,e]))),"header>span":"flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left:0.25rem",article:"padding:0.25rem 0.25rem 0.25rem 0.5rem;overflow:auto;flex:1",details:"margin-left:0.75rem;width:fit-content;","details img":"display:none","details[open]>summary img":"display:unset;background:none;margin-left:0.25rem","details[open]>summary img.edit":$,"details[open]>summary img.done":M,summary:"margin-left:-0.75rem;line-height:1.25rem;user-select:none;width:fit-content",table:"border-collapse:collapse;table-layout:fixed;margin-bottom:0.5rem","table input":"background:#111;color:unset;padding:0 0.25rem;border:0;font-size:unset;vertical-align:top;margin:0",'table input[type="number"]':"width:4rem","table tbody button":"font-size:0;background:#fff;border-radius:50%;margin:0 0.125rem 0 0;width:0.85rem;color:#111","table button:first-letter":"font-size:0.75rem",thead:"background:#222","th:nth-of-type(1)":"min-width:2rem;","th.sorted":"background:#000","table caption":"text-align:left;white-space:nowrap;line-height:1.25rem",button:"width:1.5rem;border:none;background:none;color:#fff;padding:0","button[disabled]":"color:#777","button.next":"margin-right:0.5rem",[`th,#${v} td`]:"overflow:hidden;text-overflow:ellipsis;padding:0.25rem 0.5rem;max-width:12rem;white-space:nowrap;border-width:1px 0;border-style:solid;border-color:#777;text-align:left"},((e,t)=>e?`#${v} ${t}{${e}}`:"")));const B=(e,t,l,a)=>e==n?t:e==r?l:a,{useCallback:H,useMemo:O,useState:F}=t,E="editable",P=(e,t)=>I(l.useTableCellIds(e,t),(t=>e+"."+t)),j=(e,t,l)=>{const a=H(e,t);return l?a:void 0},A=(...e)=>O((()=>e),e),L=(e,t)=>O((()=>({store:e,tableId:t})),[e,t]),U=(e,t)=>O((()=>({queries:e,queryId:t})),[e,t]),D=(e,t=!1,l,a=0,n,o,r,s)=>{const[[i,d,u],m]=F([e,t,a]),h=H((e=>{m(e),s?.(e)}),[s]),b=j((e=>h([e,e==i&&!d,u])),[h,i,d,u],l),g=H((e=>h([i,d,e])),[h,i,d]),p=!0===r?Z:r;return[[i,d,u],b,O((()=>!1===r?null:c(p,{offset:u,limit:n,total:o,onChange:g})),[r,p,u,n,o,g])]},G=(e,t,l)=>O((()=>{const o=t??e;return y(k(Array.isArray(o)?y(I(o,(e=>[e,e]))):o,((e,t)=>{return[t,{label:t,component:l,...(o=e,a(o)==n?{label:e}:e)}];var o})))}),[t,l,e]),J=({className:e,headerRow:t,idColumn:l,params:[a,n,o,r,s,i]})=>c("table",{className:e},i?c("caption",null,i):null,!1===t?null:c("thead",null,c("tr",null,!1===l?null:c(K,{sort:r??[],label:"Id",onClick:s}),k(a,(({label:e},t)=>c(K,{key:t,cellId:t,label:e,sort:r??[],onClick:s}))))),c("tbody",null,I(o,(e=>c("tr",{key:e},!1===l?null:c("th",null,e),k(a,(({component:t,getComponentProps:l},a)=>c("td",{key:a},c(t,{...w(l,e,a),...n,rowId:e,cellId:a}))))))))),K=({cellId:e,sort:[t,l],label:a=e??"",onClick:n})=>c("th",{onClick:j((()=>n?.(e)),[n,e],n),className:m(l)||t!=e?void 0:`sorted ${l?"de":"a"}scending`},m(l)||t!=e?null:(l?"↓":"↑")+" ",a),Q=({localRowId:e,params:[a,n,o,r,s,i,d]})=>{const u=l.useRemoteRowId(s,e,i);return c("tr",null,!1===a?null:c(t.Fragment,null,c("th",null,e),c("th",null,u)),k(n,(({component:t,getComponentProps:l},a)=>{const[n,s]=a.split(".",2),i=n===o?e:n===r?u:null;return m(i)?null:c("td",{key:a},c(t,{...w(l,i,s),store:d,tableId:n,rowId:i,cellId:s}))})))},W=({thing:e,onThingChange:t,className:l,hasSchema:s})=>{const[m,h]=F(),[b,g]=F(),[p,f]=F(),[w,I]=F(),[C,y]=F();b!==e&&(h((e=>{const t=a(e);return(e=>e==n||e==o)(t)||t==r&&u(e)?t:void 0})(e)),g(e),f(e+""),I(Number(e)||0),y(!!e));const k=H(((e,l)=>{l(e),g(e),t(e)}),[t]);return c("div",{className:l},c("button",{className:m,onClick:H((()=>{if(!s?.()){const e=B(m,r,o,n),l=B(e,p,w,C);h(e),g(l),t(l)}}),[s,t,p,w,C,m])},m),B(m,c("input",{key:m,value:p,onChange:H((e=>k(e[i][d]+"",f)),[k])}),c("input",{key:m,type:"number",value:w,onChange:H((e=>k(Number(e[i][d]||0),I)),[k])}),c("input",{key:m,type:"checkbox",checked:C,onChange:H((e=>k(!!e[i].checked,y)),[k])})))},X=({tableId:e,rowId:t,cellId:a,store:n,className:o})=>c(W,{thing:l.useCell(e,t,a,n),onThingChange:l.useSetCellCallback(e,t,a,(e=>e),[],n),className:o??E+"Cell",hasSchema:l.useStoreOrStoreById(n)?.hasTablesSchema}),Y=({valueId:e,store:t,className:a})=>c(W,{thing:l.useValue(e,t),onThingChange:l.useSetValueCallback(e,(e=>e),[],t),className:a??E+s,hasSchema:l.useStoreOrStoreById(t)?.hasValuesSchema}),Z=({onChange:e,total:l,offset:a=0,limit:n=l,singular:o="row",plural:r=o+"s"})=>{(a>l||a<0)&&(a=0,e(0));const s=j((()=>e(a-n)),[e,a,n],a>0),i=j((()=>e(a+n)),[e,a,n],a+n<l);return c(t.Fragment,null,l>n&&c(t.Fragment,null,c("button",{className:"previous",disabled:0==a,onClick:s},"←"),c("button",{className:"next",disabled:a+n>=l,onClick:i},"→"),a+1," to ",Math.min(l,a+n)," of "),l," ",1!=l?r:o)},_=e=>new Map(e);_(),_(),e.EditableCellView=X,e.EditableValueView=Y,e.RelationshipInHtmlTable=({relationshipId:e,relationships:a,editable:n,customCells:o,className:r,headerRow:s,idColumn:i=!0})=>{const[d,u,m,h]=((e,t)=>[e,e?.getStore(),e?.getLocalTableId(t),e?.getRemoteTableId(t)])(l.useRelationshipsOrRelationshipsById(a),e),b=G([...P(m,u),...P(h,u)],o,n?X:l.CellView),g=A(i,b,m,h,e,d,u);return c("table",{className:r},!1===s?null:c("thead",null,c("tr",null,!1===i?null:c(t.Fragment,null,c("th",null,m,".Id"),c("th",null,h,".Id")),k(b,(({label:e},t)=>c("th",{key:t},e))))),c("tbody",null,I(l.useRowIds(m,u),(e=>c(Q,{key:e,localRowId:e,params:g})))))},e.ResultSortedTableInHtmlTable=({queryId:e,cellId:t,descending:a,offset:n,limit:o,queries:r,sortOnClick:s,paginator:i=!1,customCells:d,onChange:u,...m})=>{const[h,b,g]=D(t,a,s,n,o,l.useResultRowCount(e,r),i,u);return c(J,{...m,params:A(G(l.useResultTableCellIds(e,r),d,l.ResultCellView),U(r,e),l.useResultSortedRowIds(e,...h,o,r),h,b,g)})},e.ResultTableInHtmlTable=({queryId:e,queries:t,customCells:a,...n})=>c(J,{...n,params:A(G(l.useResultTableCellIds(e,t),a,l.ResultCellView),U(t,e),l.useResultRowIds(e,t))}),e.SliceInHtmlTable=({indexId:e,sliceId:t,indexes:a,editable:n,customCells:o,...r})=>{const[s,i,d]=((e,t)=>[e,e?.getStore(),e?.getTableId(t)])(l.useIndexesOrIndexesById(a),e);return c(J,{...r,params:A(G(l.useTableCellIds(d,i),o,n?X:l.CellView),L(i,d),l.useSliceRowIds(e,t,s))})},e.SortedTableInHtmlTable=({tableId:e,cellId:t,descending:a,offset:n,limit:o,store:r,editable:s,sortOnClick:i,paginator:d=!1,onChange:u,customCells:m,...h})=>{const[b,g,p]=D(t,a,i,n,o,l.useRowCount(e,r),d,u);return c(J,{...h,params:A(G(l.useTableCellIds(e,r),m,s?X:l.CellView),L(r,e),l.useSortedRowIds(e,...b,o,r),b,g,p)})},e.SortedTablePaginator=Z,e.StoreInspector=e=>null,e.TableInHtmlTable=({tableId:e,store:t,editable:a,customCells:n,...o})=>c(J,{...o,params:A(G(l.useTableCellIds(e,t),n,a?X:l.CellView),L(t,e),l.useRowIds(e,t))}),e.ValuesInHtmlTable=({store:e,editable:t=!1,valueComponent:a=(t?Y:l.ValueView),getValueComponentProps:n,className:o,headerRow:r,idColumn:i})=>c("table",{className:o},!1===r?null:c("thead",null,c("tr",null,!1===i?null:c("th",null,"Id"),c("th",null,s))),c("tbody",null,I(l.useValueIds(e),(t=>c("tr",{key:t},!1===i?null:c("th",null,t),c("td",null,c(a,{...w(n,t),valueId:t,store:e})))))))},"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("./ui-react")):"function"==typeof define&&define.amd?define(["exports","react","./ui-react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseUiReactDom={},e.React,e.TinyBaseUiReact);
