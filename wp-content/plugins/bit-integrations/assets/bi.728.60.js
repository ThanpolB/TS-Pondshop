import{u,e as l,r as f,f as h,j as t}from"./main-183.js";import{$ as _,f as j,g as b,_ as n,d as I}from"./bi.430.0.js";import"./bi.554.440.js";import{S as C,I as w,s as v}from"./bi.159.3.js";import{h as p,G as y,c as F}from"./bi.96.756.js";import"./bi.929.9.js";import"./bi.337.13.js";import"./bi.12.11.js";import"./bi.860.14.js";import"./bi.251.688.js";import"./bi.136.689.js";function q({allIntegURL:c}){const g=u(),[a,N]=l(_),[e,s]=l(j),[o,r]=f.useState(!1),[S,d]=f.useState({show:!1}),m=h(b),x=()=>{if(!F(e)){I.error(n("Please map mandatory fields","bit-integrations"));return}v({flow:a,allIntegURL:c,conf:e,navigate:g,edit:1,setIsLoading:r,setSnackbar:d})};return t.jsxs("div",{style:{width:900},children:[t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>p(i,e,s),name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(C,{entity:a.triggered_entity,setSnackbar:d}),t.jsx(y,{formID:a.triggered_entity_id,formFields:m,handleInput:i=>p(i,e,s),getgistConf:e,setGetgistConf:s,isLoading:o,setIsLoading:r}),t.jsx(w,{edit:!0,saveConfig:x,disabled:e.field_map.length<1,isLoading:o,dataConf:e,setDataConf:s,formFields:m}),t.jsx("br",{})]})}export{q as default};
