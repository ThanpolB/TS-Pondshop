import{u as j,o as S,r as i,j as e}from"./main-183.js";import"./bi.554.440.js";import{B as M}from"./bi.58.712.js";import{_ as l}from"./bi.430.0.js";import{S as v}from"./bi.337.13.js";import{S as k}from"./bi.104.939.js";import{I as w,s as N}from"./bi.159.3.js";import _ from"./bi.126.180.js";import{s as y,h as L,f as E,c as P}from"./bi.377.716.js";import{M as T}from"./bi.274.717.js";import"./bi.929.9.js";import"./bi.12.11.js";import"./bi.860.14.js";import"./bi.170.714.js";import"./bi.14.718.js";import"./bi.251.688.js";import"./bi.136.689.js";function Y({formFields:d,setFlow:h,flow:g,allIntegURL:x}){const C=j(),{formID:m}=S(),[p,o]=i.useState(!1),[c,f]=i.useState({}),[a,u]=i.useState(1),[I,s]=i.useState({show:!1}),[t,n]=i.useState({name:"Mail Chimp",type:"Mail Chimp",clientId:"",clientSecret:"",listId:"",listName:"",tags:"",field_map:[{formField:"",mailChimpField:""}],address_field:[],module:"",actions:{},moduleLists:[]});i.useEffect(()=>{window.opener&&y("mailChimp")},[]);const b=()=>{var r;if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),(r=t.actions)!=null&&r.address&&!E(t)){s({show:!0,msg:l("Please map address required fields to continue.","bit-integrations")});return}if(!P(t)){s({show:!0,msg:l("Please map fields to continue.","bit-integrations")});return}t.listId!==""&&u(3)};return e.jsxs("div",{children:[e.jsx(v,{snack:I,setSnackbar:s}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(k,{step:3,active:a})}),e.jsx(_,{formID:m,mailChimpConf:t,setMailChimpConf:n,step:a,setstep:u,isLoading:p,setIsLoading:o,setSnackbar:s}),e.jsxs("div",{className:"btcd-stp-page",style:{width:a===2&&900,height:a===2&&"auto"},children:[e.jsx(T,{formID:m,formFields:d,handleInput:r=>L(r,t,n,m,c,f,s,o),mailChimpConf:t,setMailChimpConf:n,isLoading:p,setIsLoading:o,setSnackbar:s,loading:c,setLoading:f}),e.jsxs("button",{onClick:()=>b(),disabled:!t.listId||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[l("Next","bit-integrations"),e.jsx(M,{className:"ml-1 rev-icn"})]})]}),e.jsx(w,{step:a,saveConfig:()=>N({flow:g,setFlow:h,allIntegURL:x,navigate:C,conf:t,setIsLoading:o,setSnackbar:s}),isLoading:p,dataConf:t,setDataConf:n,formFields:d})]})}export{Y as default};
