var o=Object.defineProperty;var g=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var w=(s,e,l)=>e in s?o(s,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[e]=l,h=(s,e)=>{for(var l in e||(e={}))S.call(e,l)&&w(s,l,e[l]);if(g)for(var l of g(e))y.call(e,l)&&w(s,l,e[l]);return s};import{r as A,j as t,o as M,L as k}from"./main-183.js";import{x as j}from"./bi.554.440.js";import{_ as m}from"./bi.430.0.js";/* empty css          */import{a as $}from"./bi.929.9.js";import{b as B}from"./bi.12.11.js";import{g as R,a as N}from"./bi.16.913.js";function T({formFields:s,discordConf:e,setDiscordConf:l}){var x;const[r,c]=A.useState({show:!1}),u=n=>{const b=h({},e);n.target.value!==""?b.actions.attachments=n.target.value:delete b.actions.attachments,l(h({},b))};return t.jsxs("div",{className:"pos-rel",children:[t.jsx("div",{className:"d-flx flx-wrp",children:t.jsx(B,{onChange:()=>c({show:"attachments"}),checked:"attachments"in e.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:m("Attachments","bit-integrations"),subTitle:m("Add attachments from Bit Integrations to send Discord.","bit-integrations")})}),t.jsxs($,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:r.show==="attachments",close:()=>c({show:!1}),action:()=>c({show:!1}),title:m("Select Attachment","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),t.jsx("div",{className:"mt-2",children:m("Please select file upload fields","bit-integrations")}),t.jsxs("select",{onChange:n=>u(n),name:"attachments",value:(x=e.actions)==null?void 0:x.attachments,className:"btcd-paper-inp w-10 mt-2",children:[t.jsx("option",{value:"",children:m("Select file upload field","bit-integrations")}),s.filter(n=>n.type==="file").map(n=>t.jsx("option",{value:n.name,children:n.label},n.name+1))]})]})]})}function U({formFields:s,discordConf:e,setDiscordConf:l,isLoading:r,setIsLoading:c}){var b,v;M();const u=a=>{const i=h({},e);i[a.target.name]=a.target.value,l(i)},x=(a,i)=>{const p=h({},e);p[i]=a,i==="selectedServer"&&(p.selectedServer!==""||p.selectedServer!==null)&&a&&(p.selectedChannel="",N(p,l,c)),l(h({},p))},n=a=>{const i=h({},e);i.body=a,l(i)};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m("Select Servers:","bit-integrations")}),t.jsx(j,{options:(b=e==null?void 0:e.servers)==null?void 0:b.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:e==null?void 0:e.selectedServer,onChange:a=>x(a,"selectedServer"),disabled:r.Servers,singleSelect:!0}),t.jsx("button",{onClick:()=>R(e,l,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${m("Refresh Server List","bit-integrations")}'`},type:"button",disabled:r.servers,children:"↻"})]}),t.jsx("br",{}),(e==null?void 0:e.selectedServer)&&t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m("Select Channels:","bit-integrations")}),t.jsx(j,{options:(v=e==null?void 0:e.channels)==null?void 0:v.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:e==null?void 0:e.selectedChannel,onChange:a=>x(a,"selectedChannel"),disabled:r.Channels,singleSelect:!0}),t.jsx("button",{onClick:()=>N(e,l,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${m("Refresh Channel List","bit-integrations")}'`},type:"button",disabled:r.channels,children:"↻"})]})}),r&&t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(e==null?void 0:e.selectedChannel)&&(e==null?void 0:e.selectedServer)&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b mr-16",children:m("Messages:","bit-integrations")}),t.jsx("textarea",{className:"w-7",onChange:u,name:"body",rows:"5",value:e.body}),t.jsx(j,{options:s.filter(a=>a.type!=="file").map(a=>({label:a.label,value:`\${${a.name}}`})),className:"btcd-paper-drpdwn wdt-600 ml-2",onChange:a=>n(a)})]}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:m("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(T,{discordConf:e,setDiscordConf:l,formFields:s})]})]})}export{U as D};
