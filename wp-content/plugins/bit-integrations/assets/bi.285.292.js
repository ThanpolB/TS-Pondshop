var I=Object.defineProperty;var k=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var v=(o,e,s)=>e in o?I(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s,y=(o,e)=>{for(var s in e||(e={}))A.call(e,s)&&v(o,s,e[s]);if(k)for(var s of k(e))L.call(e,s)&&v(o,s,e[s]);return o};import{r as d,j as t,u as T,o as z}from"./main-183.js";import{z as _,y as F}from"./bi.554.440.js";import{_ as n,s as P,c as W}from"./bi.430.0.js";import{S as B}from"./bi.337.13.js";import{S as M}from"./bi.104.939.js";import{I as q,s as D}from"./bi.159.3.js";import{S as E,h as H,c as R}from"./bi.347.690.js";import{B as G}from"./bi.58.712.js";import{T as N,t as J}from"./bi.170.714.js";import"./bi.929.9.js";import"./bi.12.11.js";import"./bi.860.14.js";import"./bi.251.688.js";import"./bi.136.689.js";function K({formID:o,sliceWpConf:e,setSliceWpConf:s,step:u,setStep:x,isLoading:f,setIsLoading:b,setSnackbar:S}){const[r,p]=d.useState(!1),[m,h]=d.useState(!1),{sliceWp:i}=J,l=()=>{b("auth"),W({},"slicewp_authorize").then(c=>{c!=null&&c.success&&(p(!0),S({show:!0,msg:n("Connected with SliceWp affiliate Successfully","bit-integrations")})),b(!1),h(!0)})},j=c=>{const a=F(e);a[c.target.name]=c.target.value,s(a)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:u===1&&900,height:u===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&t.jsx(N,{title:"SliceWP",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&t.jsx(N,{title:"SliceWP",docLink:i==null?void 0:i.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations")}),f==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(_,{size:25,clr:"#022217",className:"mr-2"}),"Checking if SliceWp affiliate is active!!!"]}),m&&!r&&!f&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),P(n("%s plugin must be activated to integrate with Bit Integrations","bit-integrations"),"SliceWp affiliate")]}),!r&&t.jsx("button",{onClick:l,className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:n("Connect","bit-integrations")}),r&&t.jsxs("button",{onClick:()=>x(2),className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",disabled:!r,children:[n("Next","bit-integrations"),t.jsx(G,{className:"ml-1 rev-icn"})]})]})}function rt({formFields:o,setFlow:e,flow:s,allIntegURL:u,isInfo:x,edit:f}){const b=T(),{formID:S}=z(),[r,p]=d.useState(!1),[m,h]=d.useState(1),[i,l]=d.useState({show:!1}),j=[{key:"1",label:n("Add commission to user's affiliate","bit-integrations")}],c=[{key:"commission_date",label:n("commission_date","bit-integrations"),required:!0},{key:"reference",label:n("Reference","bit-integrations"),required:!1},{key:"amount",label:n("Amount","bit-integrations"),required:!1}],[a,g]=d.useState({name:"SliceWp",type:"SliceWp",mainAction:"",field_map:[{formField:"",slicewpFormField:""}],allActions:j,sliceWpFields:c,actions:{}}),w=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!R(a)){l({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}a.mainAction!==""&&h(3)};return t.jsxs("div",{children:[t.jsx(B,{snack:i,setSnackbar:l}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(M,{step:3,active:m})}),t.jsx(K,{formID:S,sliceWpConf:a,setSliceWpConf:g,step:m,setStep:h,isLoading:r,setIsLoading:p,setSnackbar:l}),t.jsxs("div",{className:"btcd-stp-page",style:y({},m===2&&{width:900,height:"auto",overflow:"visible"}),children:[t.jsx(E,{formFields:o,handleInput:C=>H(C,a,g),sliceWpConf:a,setSliceWpConf:g,isLoading:r,setIsLoading:p,setSnackbar:l,allIntegURL:u,isInfo:x,edit:f}),t.jsxs("button",{onClick:()=>w(),disabled:!a.mainAction||r||a.statusId===void 0,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[n("Next","bit-integrations")," ",t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(q,{step:m,saveConfig:()=>D({flow:s,setFlow:e,allIntegURL:u,navigate:b,conf:a,setIsLoading:p,setSnackbar:l}),isLoading:r,dataConf:a,setDataConf:g,formFields:o})]})}export{rt as default};
