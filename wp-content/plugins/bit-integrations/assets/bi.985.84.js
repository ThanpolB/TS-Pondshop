var _=Object.defineProperty,v=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(a,t,e)=>t in a?_(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,u=(a,t)=>{for(var e in t||(t={}))w.call(t,e)&&g(a,e,t[e]);if(c)for(var e of c(t))I.call(t,e)&&g(a,e,t[e]);return a},x=(a,t)=>v(a,b(t));import{u as N,r as d,f as h,e as E,j as s}from"./main-183.js";import{$ as z,f as L,g as $,_ as S}from"./bi.430.0.js";import{S as k}from"./bi.337.13.js";import{S as F,I as R}from"./bi.159.3.js";import{h as U,s as D}from"./bi.843.799.js";import{S as K}from"./bi.354.800.js";import"./bi.554.440.js";import"./bi.929.9.js";import"./bi.12.11.js";import"./bi.860.14.js";import"./bi.762.713.js";import"./bi.251.688.js";import"./bi.136.689.js";function Y({allIntegURL:a}){const t=N(),[e,l]=d.useState({show:!1}),m=h(z),[n,o]=E(L),[j,y]=d.useState({name:"",authKey:""}),p=h($),[i,f]=d.useState({auth:!1,list:!1,tag:!1,page:!1,update:!1}),C=r=>{f(x(u({},i),{update:r}))};return s.jsxs("div",{style:{width:900},children:[s.jsx(k,{snack:e,setSnackbar:l}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:S("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",name:"name",onChange:r=>U(r,n,o,j,y),value:n.name,type:"text",placeholder:S("Integration Name...","bit-integrations")})]}),s.jsx("div",{className:"my-3",children:s.jsx(F,{entity:m.triggered_entity,setSnackbar:l})}),s.jsx(K,{selzyConf:n,setSelzyConf:o,formFields:p,loading:i,setLoading:f}),s.jsx(R,{edit:!0,saveConfig:()=>{D(m,a,n,t,{edit:1},C)},isLoading:i.update,disabled:n.field_map.length<1,dataConf:n,setDataConf:o,formFields:p})]})}export{Y as default};
