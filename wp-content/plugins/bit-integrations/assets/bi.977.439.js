var T=Object.defineProperty;var j=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var k=(s,t,a)=>t in s?T(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,_=(s,t)=>{for(var a in t||(t={}))L.call(t,a)&&k(s,a,t[a]);if(j)for(var a of j(t))F.call(t,a)&&k(s,a,t[a]);return s};import{u as P,r,j as i}from"./main-183.js";import{_ as o,d as n}from"./bi.430.0.js";import"./bi.554.440.js";import{S as q}from"./bi.337.13.js";import{S as E}from"./bi.104.939.js";import{I as M,i as z}from"./bi.159.3.js";import A from"./bi.542.287.js";import{d as B,c as y}from"./bi.324.936.js";import{S as D}from"./bi.150.937.js";import"./bi.929.9.js";import"./bi.12.11.js";import"./bi.860.14.js";import"./bi.170.714.js";import"./bi.251.688.js";import"./bi.136.689.js";import"./bi.163.784.js";function re({formFields:s,setFlow:t,flow:a,allIntegURL:u}){const b=P(),[g,m]=r.useState(!1),[f,S]=r.useState({}),[c,x]=r.useState(1),[C,d]=r.useState({show:!1}),h=[],[e,p]=r.useState({name:"SmartSuite",type:"SmartSuite",workspaceId:"",apiToken:"",field_map:B(h),actionName:"",smartSuiteFields:h,solutionFields:R,tableFields:G,actionLists:H}),I=()=>{m(!0),z(a,t,u,e,b,"","",m).then(l=>{var v;l.success?(n.success((v=l.data)==null?void 0:v.msg),b(u)):n.error(l.data||l)})},w=N=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!y(e)){n.error(o("Please map mandatory fields","bit-integrations"));return}if((e.actionName==="table"||e.actionName==="record")&&!e.selectedSolution){n.error(o("Please select a solution","bit-integrations"));return}if(e.actionName==="record"&&!e.selectedTable){n.error(o("Please select a table","bit-integrations"));return}e.field_map.length>0&&x(N)};return i.jsxs("div",{children:[i.jsx(q,{snack:C,setSnackbar:d}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(E,{step:3,active:c})}),i.jsx(A,{smartSuiteConf:e,setSmartSuiteConf:p,step:c,setStep:x,loading:f,setLoading:S,setSnackbar:d}),i.jsxs("div",{className:"btcd-stp-page",style:_({},c===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(D,{formFields:s,smartSuiteConf:e,setSmartSuiteConf:p,loading:f,setLoading:S,isLoading:g,setIsLoading:m,setSnackbar:d}),(e==null?void 0:e.actionName)&&i.jsxs("button",{onClick:()=>w(3),disabled:!y(e),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[o("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&i.jsx(M,{step:c,saveConfig:()=>I(),isLoading:g,dataConf:e,setDataConf:p,formFields:s})]})}const R=[{label:"Name",key:"name",required:!0},{label:"Logo Icon",key:"logo_icon",required:!1}],G=[{label:"Name",key:"name",required:!0}],H=[{name:"solution",label:o("Create Solution","bit-integrations"),is_pro:!1},{name:"table",label:o("Create Table","bit-integrations"),is_pro:!0},{name:"record",label:o("Create Record","bit-integrations"),is_pro:!0}];export{re as default};
