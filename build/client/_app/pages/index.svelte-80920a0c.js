import{S as M,i as N,s as V,L as x,k as v,w as C,m as b,x as D,g as E,y as I,q as S,o as T,d as h,B as A,$ as P,M as U,e as w,c as $,a as k,b as j,K as q,v as Q,N as J,O as K,t as B,h as F,J as f,_ as G,P as O,Q as X,l as R,R as z,T as Y}from"../chunks/vendor-61d49866.js";var Z={"another-component":{name:"Another Component",description:"Quisque laoreet consectetur dui, at fermentum libero lobortis eget. Vivamus enim ante, commodo id blandit eget, dictum eget mauris. In eget massa at ligula aliquet egestas. Vivamus accumsan, tortor non venenatis euismod, neque eros eleifend velit, eget viverra eros risus at erat. Maecenas et ultricies massa. Donec sagittis ante eu mi dignissim, eget suscipit magna ultricies. Suspendisse sit amet lacus cursus, viverra ipsum vel, fringilla lorem. Curabitur sagittis interdum sem, nec sollicitudin sem dictum quis.",author:"hpe",version:"0.1",state:"active"},"tbsa-designer":{name:"TBS Automation Flow Designer",description:"Component to render a <b>drag-and-drop designer</b> to configure troubleshooting automation flows for specific technologies and/or catalog services.",author:"hpe",version:"0.1",state:"active"},"mobile-test":{name:"5G Mobile Test",description:"Component to render <b>5G Mobile Test</b> information.<br>It is instantiated receiving MSISDN and IMEI values for a mobile USIM, that are used to retrieve service state information from (Core and Voice) NW Domain Controllers and perform cross-check via Test & Diagnostic system.",author:"hpe",version:"0.1",state:"active"}};function ee(o){let e,a,i;return a=new x({props:{data:o[1],server:o[2],columns:o[0],search:!0,className:{paginationButton:"gridjs-pagination-button secondary outline"},pagination:o[3]}}),{c(){e=v(),C(a.$$.fragment)},l(n){e=b(n),D(a.$$.fragment,n)},m(n,l){E(n,e,l),I(a,n,l),i=!0},p(n,[l]){const r={};l&2&&(r.data=n[1]),l&4&&(r.server=n[2]),l&1&&(r.columns=n[0]),l&8&&(r.pagination=n[3]),a.$set(r)},i(n){i||(S(a.$$.fragment,n),i=!0)},o(n){T(a.$$.fragment,n),i=!1},d(n){n&&h(e),A(a,n)}}}function te(o,e,a){let{columns:i,data:n,server:l}=e,{pagination:r={enabled:!0,limit:2,summary:!0}}=e;i.forEach(t=>{switch(t.datatype){case"html":t.formatter=t.formatter?g=>P(t.formatter(g)):g=>P(g);break}});let{rowActions:s}=e;return s&&s.length>0&&i.push({id:"gridjs-row-actions",formatter:(t,g)=>U("div",{className:"gridjs-row-actions"},...s.map(m=>U("button",{id:m.id,className:"gridjs-row-action-button",onClick:()=>m.onClick(t,g)},m.value)))}),o.$$set=t=>{"columns"in t&&a(0,i=t.columns),"data"in t&&a(1,n=t.data),"server"in t&&a(2,l=t.server),"pagination"in t&&a(3,r=t.pagination),"rowActions"in t&&a(4,s=t.rowActions)},[i,n,l,r,s]}class ae extends M{constructor(e){super();N(this,e,te,ee,V,{columns:0,data:1,server:2,pagination:3,rowActions:4})}}function ne(o){let e;return{c(){e=w("div"),this.h()},l(a){e=$(a,"DIV",{id:!0,class:!0}),k(e).forEach(h),this.h()},h(){j(e,"id","flow-composer"),j(e,"class","svelte-1krktnn")},m(a,i){E(a,e,i)},p:q,i:q,o:q,d(a){a&&h(e)}}}function se(o,e,a){let{data:i}=e;return Q(()=>{J("#flow-composer").selectAll("div").data(i).enter().append("div").style("width",n=>n+"px").text(n=>n)}),o.$$set=n=>{"data"in n&&a(0,i=n.data)},[i]}class re extends M{constructor(e){super();N(this,e,se,ne,V,{data:0})}}function L(o,e,a){const i=o.slice();return i[6]=e[a],i}function W(o,e){let a,i,n,l=e[6].name+"",r,s,t,g=e[6].description+"",m;return{key:o,first:null,c(){a=w("article"),i=w("header"),n=w("b"),r=B(l),s=v(),t=new O,m=v(),this.h()},l(p){a=$(p,"ARTICLE",{});var u=k(a);i=$(u,"HEADER",{});var _=k(i);n=$(_,"B",{});var c=k(n);r=F(c,l),c.forEach(h),_.forEach(h),s=b(u),t=X(u),m=b(u),u.forEach(h),this.h()},h(){t.a=m,this.first=a},m(p,u){E(p,a,u),f(a,i),f(i,n),f(n,r),f(a,s),t.m(g,a),f(a,m)},p(p,u){e=p},d(p){p&&h(a)}}}function ie(o){let e=[],a=new Map,i,n=o[0];const l=r=>r[6].id;for(let r=0;r<n.length;r+=1){let s=L(o,n,r),t=l(s);a.set(t,e[r]=W(t,s))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();i=R()},l(r){for(let s=0;s<e.length;s+=1)e[s].l(r);i=R()},m(r,s){for(let t=0;t<e.length;t+=1)e[t].m(r,s);E(r,i,s)},p(r,s){s&1&&(n=r[0],e=z(e,s,l,1,r,n,a,i.parentNode,Y,W,i,L))},d(r){for(let s=0;s<e.length;s+=1)e[s].d(r);r&&h(i)}}}function oe(o){let e,a,i,n,l,r,s,t,g,m,p,u,_;return t=new K({props:{$$slots:{default:[ie]},$$scope:{ctx:o}}}),m=new ae({props:{data:o[1],server:o[4],columns:o[2],rowActions:o[3]}}),u=new re({props:{data:o[5]}}),{c(){e=w("main"),a=w("h1"),i=B("Welcome to SVUIP"),n=v(),l=w("h2"),r=B("SVelte User Interface Platform"),s=v(),C(t.$$.fragment),g=v(),C(m.$$.fragment),p=v(),C(u.$$.fragment),this.h()},l(c){e=$(c,"MAIN",{class:!0});var d=k(e);a=$(d,"H1",{});var y=k(a);i=F(y,"Welcome to SVUIP"),y.forEach(h),n=b(d),l=$(d,"H2",{});var H=k(l);r=F(H,"SVelte User Interface Platform"),H.forEach(h),s=b(d),D(t.$$.fragment,d),g=b(d),D(m.$$.fragment,d),p=b(d),D(u.$$.fragment,d),d.forEach(h),this.h()},h(){j(e,"class","container")},m(c,d){E(c,e,d),f(e,a),f(a,i),f(e,n),f(e,l),f(l,r),f(e,s),I(t,e,null),f(e,g),I(m,e,null),f(e,p),I(u,e,null),_=!0},p(c,[d]){const y={};d&512&&(y.$$scope={dirty:d,ctx:c}),t.$set(y)},i(c){_||(S(t.$$.fragment,c),S(m.$$.fragment,c),S(u.$$.fragment,c),_=!0)},o(c){T(t.$$.fragment,c),T(m.$$.fragment,c),T(u.$$.fragment,c),_=!1},d(c){c&&h(e),A(t),A(m),A(u)}}}const le="TBS_SELF";function ce(o){const e=G.map(Z,(s,t)=>G.assign(s,{id:t}));let a;const i=["class","status",{name:"intermediateXml",width:"80%"},"technology","service","cpeType","rgType","problemType"],n=[{id:"edit-action",value:"Edit",onClick:(s,t)=>alert(`Editing "${t.cells[0].data}" version "${t.cells[3].data}"`)},{id:"delete-action",value:"Delete",onClick:(s,t)=>alert(`Deleting "${t.cells[0].data}" version "${t.cells[3].data}"`)}],l={url:`api/ted/tbs/solution/${le}/pattern`,then:s=>s.patterns.map(t=>t),handle:s=>{if(s.status===404)return{patterns:[]};if(s.ok)return s.json();throw Error("oh no :(")}};return[e,a,i,n,l,[30,86,168,281,303,365]]}class ue extends M{constructor(e){super();N(this,e,ce,oe,V,{})}}export{ue as default};