var h=Object.defineProperty;var f=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var p=(a,e,t)=>e in a?h(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,x=(a,e)=>{for(var t in e||(e={}))C.call(e,t)&&p(a,t,e[t]);if(f)for(var t of f(e))I.call(e,t)&&p(a,t,e[t]);return a};import{u as w,o as v,e as g,f as F,r as u,j as s}from"./main-183.js";import{f as _,$ as N,g as y,_ as j}from"./bi.430.0.js";import{S as E}from"./bi.337.13.js";import"./bi.554.440.js";import{S as $,I as k,s as L}from"./bi.159.3.js";import{h as R,i as D}from"./bi.242.776.js";import{S as A}from"./bi.304.777.js";import"./bi.929.9.js";import"./bi.12.11.js";import"./bi.860.14.js";import"./bi.251.688.js";import"./bi.136.689.js";function W({allIntegURL:a}){const e=w();v();const[t,n]=g(_),[m,M]=g(N),d=F(y),[c,r]=u.useState(!1),[S,o]=u.useState({show:!1}),b=i=>{const l=x({},t);l[i.target.name]=i.target.value,n(l)};return s.jsxs("div",{style:{width:900},children:[s.jsx(E,{snack:S,setSnackbar:o}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:j("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:b,name:"name",value:t.name,type:"text",placeholder:j("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx($,{entity:m.triggered_entity,setSnackbar:o}),s.jsx(A,{formFields:d,handleInput:i=>R(i,t,n,r),sendFoxConf:t,setSendFoxConf:n,isLoading:c,setIsLoading:r,setSnackbar:o}),s.jsx(k,{edit:!0,saveConfig:()=>L({flow:m,allIntegURL:a,conf:t,navigate:e,edit:1,setIsLoading:r,setSnackbar:o}),disabled:D(t),isLoading:c,dataConf:t,setDataConf:n,formFields:d}),s.jsx("br",{})]})}export{W as default};
