import{o as x,r as i,e as a,f as g,j as s}from"./main-183.js";import{$ as j,g as k,f as b}from"./bi.430.0.js";import{S as u}from"./bi.337.13.js";import{g as w,E as h,s as E}from"./bi.159.3.js";import"./bi.554.440.js";import S from"./bi.63.185.js";import{W}from"./bi.242.727.js";import"./bi.12.11.js";import"./bi.929.9.js";import"./bi.860.14.js";import"./bi.58.712.js";function D({allIntegURL:r}){const{formID:n}=x(),[m,o]=i.useState({show:!1}),[p,f]=i.useState(!1),[t,c]=a(j),d=g(k),[e,l]=a(b);return s.jsxs("div",{style:{width:900},children:[s.jsx(u,{snack:m,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(w,{setSnackbar:o}):s.jsx(h,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(S,{formID:n,formFields:d,webHooks:e,setWebHooks:l,setSnackbar:o})}),s.jsx(W,{edit:!0,saveConfig:()=>E({flow:t,setFlow:c,allIntegURL:r,conf:e,edit:1,setIsLoading:f,setSnackbar:o}),isLoading:p}),s.jsx("br",{})]})}export{D as default};
