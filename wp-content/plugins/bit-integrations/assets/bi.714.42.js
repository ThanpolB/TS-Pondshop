import{u as b,o as g,e as n,f as I,r,j as s}from"./main-183.js";import{f as w,$ as _,g as S,_ as m}from"./bi.430.0.js";import{S as v}from"./bi.337.13.js";import"./bi.554.440.js";import{S as N,I as y,s as F}from"./bi.159.3.js";import{h as k,c as E}from"./bi.561.741.js";import{G}from"./bi.649.742.js";import"./bi.929.9.js";import"./bi.12.11.js";import"./bi.860.14.js";import"./bi.251.688.js";import"./bi.136.689.js";import"./bi.684.701.js";import"./bi.351.10.js";function J({allIntegURL:c}){const d=b(),{id:p}=g(),[t,e]=n(w),[i,l]=n(_),o=I(S),[f,x]=r.useState(!1),[u,a]=r.useState({show:!1}),j=()=>{F({flow:i,setFlow:l,allIntegURL:c,conf:t,navigate:d,edit:1,setIsLoading:x,setSnackbar:a})};return s.jsxs("div",{style:{width:900},className:"p-2",children:[s.jsx(v,{snack:u,setSnackbar:a}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:h=>k(h,t,e),name:"name",value:t.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(N,{entity:i.triggered_entity,setSnackbar:a}),s.jsx(G,{flowID:p,formFields:o,googleCalendarConf:t,setGoogleCalendarConf:e}),s.jsx(y,{edit:!0,saveConfig:j,disabled:!(t!=null&&t.calendarId)||!(t!=null&&t.timeZone)||!E(t==null?void 0:t.field_map),isLoading:f,dataConf:t,setDataConf:e,formFields:o}),s.jsx("br",{})]})}export{J as default};
