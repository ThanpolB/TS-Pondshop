import{u as b,o as j,r as a,j as e}from"./main-183.js";import{_ as m}from"./bi.430.0.js";import"./bi.554.440.js";import{B as I}from"./bi.58.712.js";import{S}from"./bi.337.13.js";import{S as A}from"./bi.104.939.js";import{I as _,i as k}from"./bi.159.3.js";import C from"./bi.596.184.js";import{d as y}from"./bi.593.725.js";import{A as N}from"./bi.2.726.js";import"./bi.929.9.js";import"./bi.12.11.js";import"./bi.860.14.js";import"./bi.170.714.js";import"./bi.251.688.js";import"./bi.136.689.js";function O({formFields:p,setFlow:d,flow:g,allIntegURL:u}){const f=b(),{formID:c}=j(),[o,n]=a.useState(!1),[s,l]=a.useState(1),[x,i]=a.useState({show:!1}),[t,r]=a.useState({name:"Active Campaign",type:"ActiveCampaign",api_url:"",api_key:"",field_map:[{formField:"",activeCampaignField:""}],actions:{}}),h=v=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),v===3){if(!y(t)){i({show:!0,msg:m("Please map all required fields to continue.","bit-integrations")});return}if(!(t!=null&&t.listId)){i({show:!0,msg:m("Please select list to continue.","bit-integrations")});return}t.name!==""&&t.field_map.length>0&&l(3)}};return e.jsxs("div",{children:[e.jsx(S,{snack:x,setSnackbar:i}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(A,{step:3,active:s})}),e.jsx(C,{formID:c,activeCampaingConf:t,setActiveCampaingConf:r,step:s,setstep:l,isLoading:o,setIsLoading:n,setSnackbar:i}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(N,{formID:c,formFields:p,activeCampaingConf:t,setActiveCampaingConf:r,isLoading:o,setIsLoading:n,setSnackbar:i}),e.jsxs("button",{onClick:()=>h(3),disabled:!(t!=null&&t.listId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[m("Next","bit-integrations"),"  ",e.jsx(I,{className:"ml-1 rev-icn"})]})]}),e.jsx(_,{step:s,saveConfig:()=>k(g,d,u,t,f,"","",n),isLoading:o,dataConf:t,setDataConf:r,formFields:p})]})}export{O as default};
