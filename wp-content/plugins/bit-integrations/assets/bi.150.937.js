import{f as A,r as I,j as e,L as U}from"./main-183.js";import{u as N,x as v}from"./bi.554.440.js";import{e as D,_ as c}from"./bi.430.0.js";import{a as w}from"./bi.929.9.js";import{b as P}from"./bi.12.11.js";import{g as O,a as _,b as B,d as L}from"./bi.324.936.js";import{a as E,h as q}from"./bi.159.3.js";import{T as G}from"./bi.251.688.js";import{c as V,g as H}from"./bi.163.784.js";const $=(s,b,l)=>{l(n=>N(n,o=>{o.field_map.splice(s,0,{})}))},Y=(s,b,l)=>{l(n=>N(n,o=>{o.field_map.length>1&&o.field_map.splice(s,1)}))},R=(s,b,l,n)=>{const{name:o,value:p}=s.target;n(g=>N(g,r=>{r.field_map[b][o]=p,p==="custom"&&(r.field_map[b].customValue="")}))};function z({smartSuiteConf:s,setSmartSuiteConf:b,loading:l,setLoading:n}){var y,F,k,a,h;const o=A(D),{isPro:p}=o,[g,r]=I.useState({show:!1,action:()=>{}}),m=(t,i)=>{i==="assignedUser"&&O(s,b,n),r({show:i})},x=()=>{r({show:!1})},d=(t,i)=>{b(T=>N(T,u=>{u[i]=t}))};return e.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[s.actionName==="solution"&&e.jsx(P,{checked:((y=s==null?void 0:s.selectedLogoColor)==null?void 0:y.length)||!1,onChange:t=>m(t,"logoColor"),className:"wdt-200 mt-4 mr-2",value:"logoColor",title:c("Add Logo Color","bit-integrations"),subTitle:c("Logo Color for solutions","bit-integrations")}),p&&s.actionName==="record"&&e.jsxs(e.Fragment,{children:[e.jsx(P,{checked:((F=s==null?void 0:s.assigned_to)==null?void 0:F.length)||!1,onChange:t=>m(t,"assignedUser"),className:"wdt-200 mt-4 mr-2",value:"assigned",title:c("Assigned user","bit-integrations"),subTitle:c("Assigned user for record","bit-integrations")}),e.jsx(P,{checked:((k=s==null?void 0:s.priority)==null?void 0:k.length)||!1,onChange:t=>m(t,"priority"),className:"wdt-200 mt-4 mr-2",value:"priority",title:c("Add priority","bit-integrations"),subTitle:c("Priority for record","bit-integrations")}),e.jsx(P,{checked:((a=s==null?void 0:s.status)==null?void 0:a.length)||!1,onChange:t=>m(t,"status"),className:"wdt-200 mt-4 mr-2",value:"status",title:c("Add Status","bit-integrations"),subTitle:c("Stattus for record","bit-integrations")})]}),e.jsxs(w,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:c("Ok","bit-integrations"),show:g.show==="logoColor",close:x,action:x,title:c("Logo Color","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:c("Select Logo Color","bit-integrations")}),e.jsx("div",{className:"flx flx-between mt-2",children:e.jsx(v,{options:J.map(t=>({label:t.key,value:t.value})),className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedLogoColor,onChange:t=>d(t,"selectedLogoColor"),selectOnClose:!0,singleSelect:!0})})]}),p&&e.jsxs(e.Fragment,{children:[e.jsxs(w,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:c("Ok","bit-integrations"),show:g.show==="priority",close:x,action:x,title:c("Priority","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:c("Select Priority","bit-integrations")}),e.jsx("div",{className:"flx flx-between mt-2",children:e.jsx(v,{options:Q.map(t=>({label:t.key,value:t.value})),className:"msl-wrp-options",defaultValue:s==null?void 0:s.priority,onChange:t=>d(t,"priority"),selectOnClose:!0,singleSelect:!0})})]}),e.jsxs(w,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:c("Ok","bit-integrations"),show:g.show==="status",close:x,action:x,title:c("Status","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:c("Select Status","bit-integrations")}),e.jsx("div",{className:"flx flx-between mt-2",children:e.jsx(v,{options:K.map(t=>({label:t.key,value:t.value})),className:"msl-wrp-options",defaultValue:s==null?void 0:s.status,onChange:t=>d(t,"status"),selectOnClose:!0,singleSelect:!0})})]}),e.jsxs(w,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:c("Ok","bit-integrations"),show:g.show==="assignedUser",close:x,action:x,title:c("Assigned User","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:c("Select User","bit-integrations")}),l.assignedUser?e.jsx(U,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx mt-2",children:[e.jsx(v,{options:(h=s==null?void 0:s.assignedUser)==null?void 0:h.map(t=>({label:t.name,value:t.id})),className:"msl-wrp-options",defaultValue:s==null?void 0:s.assigned_to,onChange:t=>d(t,"assigned_to"),selectOnClose:!0,singleSelect:!0}),e.jsx("button",{onClick:()=>O(s,b,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh Users","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})]})}const J=[{key:"Primary Blue",value:"#3A86FF"},{key:"Primary Light Blue",value:"#4ECCFD"},{key:"Primary Green",value:"#3EAC40"},{key:"Primary Red",value:"#FF5757"},{key:"Primary Orange",value:"#FF9210"},{key:"Primary Yellow",value:"#FFB938"},{key:"Primary Purple",value:"#883CD0"},{key:"Primary Pink",value:"#EC506E"},{key:"Primary Teal",value:"#17C4C4"},{key:"Primary Grey",value:"#6A849B"},{key:"Dark Primary Blue",value:"#0C41F3"},{key:"Dark Primary Light Blue",value:"#00B3FA"},{key:"Dark Primary Green",value:"#199A27"},{key:"Dark Primary Red",value:"#F1273F"},{key:"Dark Primary Orange",value:"#FF702E"},{key:"Dark Primary Yellow",value:"#FDA80D"},{key:"Dark Primary Purple",value:"#673DB6"},{key:"Dark Primary Pink",value:"#CD286A"},{key:"Dark Primary Teal",value:"#00B2A8"},{key:"Dark Primary Grey",value:"#50515B"}],K=[{key:"Backlog",value:"backlog"},{key:"In Process",value:"in_progress"},{key:"Ready for Review",value:"ready_for_review"},{key:"Complete",value:"complete"}],Q=[{key:"Urgent",value:"urgent"},{key:"High",value:"high"},{key:"Normal",value:"normal"},{key:"Low",value:"Low"}];function W({i:s,formFields:b,field:l,smartSuiteConf:n,setSmartSuiteConf:o}){var x;const p=A(D),{isPro:g}=p,r=(n==null?void 0:n.smartSuiteFields.filter(d=>d.required===!0))||[],m=(n==null?void 0:n.smartSuiteFields.filter(d=>d.required===!1))||[];return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:d=>R(d,s,n,o),children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),e.jsx("optgroup",{label:c("Form Fields","bit-integrations"),children:b==null?void 0:b.map(d=>e.jsx("option",{value:d.name,children:d.label},`ff-rm-${d.name}`))}),e.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(c("General Smart Codes %s","bit-integrations"),g?"":`(${c("Pro","bit-integrations")})`),children:g&&((x=E)==null?void 0:x.map(d=>e.jsx("option",{value:d.name,children:d.label},`ff-rm-${d.name}`)))})]}),l.formField==="custom"&&e.jsx(G,{onChange:d=>q(d,s,n,o),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:c("Custom Value","bit-integrations"),formFields:b}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<r.length,name:"smartSuiteFormField",value:s<r.length?r[s].key||"":l.smartSuiteFormField||"",onChange:d=>R(d,s,n,o),children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),s<r.length?e.jsx("option",{value:r[s].key,children:r[s].label},r[s].key):m.map(({key:d,label:y})=>e.jsx("option",{value:d,children:y},d))]})]}),s>=r.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>$(s,n,o),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>Y(s,n,o),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function ae({formFields:s,handleInput:b,smartSuiteConf:l,setSmartSuiteConf:n,loading:o,setLoading:p,isLoading:g,setIsLoading:r,setSnackbar:m}){var k;const x=A(D),{isPro:d}=x,y=(a,h)=>{d&&(h==="selectedSolution"&&a!==""&&(l==null?void 0:l.actionName)==="record"&&B(l,n,a,p),n(t=>N(t,i=>{if(i[h]=a,h==="selectedTable"&&a!=""&&(i!=null&&i.selectedTable)&&(i==null?void 0:i.selectedTable)!=""){const T=i.tables.find(j=>j.id===a);let u=[];T.customFields.forEach(j=>{var M;X.includes(j.slug)||u.push({label:j.label,key:j.slug,required:((M=j==null?void 0:j.params)==null?void 0:M.required)||!1})}),i.smartSuiteFields=u,i.field_map=L(i.smartSuiteFields)}h==="selectedSolution"?(delete i.selectedTable,delete i.tables):h==="selectedTable"&&(delete i.priority,delete i.status,delete i.assigned_to)})))},F=(a,h)=>{n(t=>N(t,i=>{i.field_map=[{formField:"",smartSuiteFormField:""}],i!=null&&i.selectedSolution&&delete i.selectedSolution,i!=null&&i.selectedTable&&delete i.selectedTable,a!=""?i[h]=a:delete i[h],a==="solution"?i.smartSuiteFields=i==null?void 0:i.solutionFields:d&&a==="table"?(_(l,n,p),i.smartSuiteFields=i==null?void 0:i.tableFields):d&&a==="record"&&(_(l,n,p),delete i.priority,delete i.status,delete i.assigned_to),i.field_map=L(i.smartSuiteFields)}))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:c("Select Action:","bit-integrations")}),e.jsx(v,{defaultValue:l==null?void 0:l.actionName,value:l.actionName,disabled:o.solution||o.table,className:"mt-2 w-5",onChange:a=>F(a,"actionName"),options:(k=l==null?void 0:l.actionLists)==null?void 0:k.map(a=>({label:V(d,a.is_pro)?a.label:H(a.label),value:a.name,disabled:!V(d,a.is_pro)})),singleSelect:!0,closeOnSelect:!0})]}),l.actionName&&d&&(l.actionName==="table"||l.actionName==="record")&&!o.solution&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:c("Select Solution:","bit-integrations")}),e.jsx(v,{options:(l==null?void 0:l.solutions)&&l.solutions.map(a=>({label:a.name,value:`${a.id}`})),className:"msl-wrp-options dropdown-custom-width",defaultValue:l==null?void 0:l.selectedSolution,onChange:a=>y(a,"selectedSolution"),singleSelect:!0,closeOnSelect:!0,disabled:o.solution||o.table}),e.jsx("button",{onClick:()=>_(l,n,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh Solution","bit-integrations")}'`},type:"button",disabled:o.solution,children:"↻"})]})]}),(o.solution||o.table)&&e.jsx(U,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),l.actionName&&(l==null?void 0:l.selectedSolution)&&(l==null?void 0:l.selectedSolution)!=""&&!o.solution&&!o.table&&d&&l.actionName==="record"&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:c("Select Table:","bit-integrations")}),e.jsx(v,{options:(l==null?void 0:l.tables)&&l.tables.map(a=>({label:a.name,value:`${a.id}`})),className:"msl-wrp-options dropdown-custom-width",defaultValue:l==null?void 0:l.selectedTable,onChange:a=>y(a,"selectedTable"),singleSelect:!0,closeOnSelect:!0}),e.jsx("button",{onClick:()=>B(l,n,l==null?void 0:l.selectedSolution,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh Table","bit-integrations")}'`},type:"button",disabled:o.solution,children:"↻"})]})]}),(l.actionName==="record"&&l.selectedTable!=null&&l.selectedTable!=""||l.actionName==="solution"||l.actionName==="table")&&!g&&e.jsxs("div",{children:[e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:c("Field Map","bit-integrations")})}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("SmartSuite Fields","bit-integrations")})})]}),l==null?void 0:l.field_map.map((a,h)=>e.jsx(W,{i:h,field:a,smartSuiteConf:l,formFields:s,setSmartSuiteConf:n,setSnackbar:m},`rp-m-${h+9}`)),(l.actionName==="solution"||l.actionName==="record")&&e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>$(l.field_map.length,l,n),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),(l.actionName==="solution"||l.actionName==="record"&&(l==null?void 0:l.selectedTable)&&(l==null?void 0:l.selectedTable)!="")&&e.jsxs("div",{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:c("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(z,{smartSuiteConf:l,setSmartSuiteConf:n,formFields:s,loading:o,setLoading:p})]})]})]})}const X=["assigned_to","priority","status","first_created","last_updated","followed_by","comments_count","autonumber"];export{ae as S};
