var F=Object.defineProperty,h=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var _=(e,r,t)=>r in e?F(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,a=(e,r)=>{for(var t in r||(r={}))m.call(r,t)&&_(e,t,r[t]);if(p)for(var t of p(r))b.call(r,t)&&_(e,t,r[t]);return e},l=(e,r)=>h(e,y(r));import{_ as u,c as g,d as o}from"./bi.430.0.js";const A=(e,r,t)=>{const i=a({},r),{name:s}=e.target;e.target.value!==""?i[s]=e.target.value:delete i[s],t(a({},i))},v=e=>{const r=e.filter(t=>t.required===!0);return r.length>0?r.map(t=>({formField:"",gravitecFormField:t.key})):[{formField:"",gravitecFormField:""}]},K=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.gravitecFormField||t.formField==="custom"&&!t.customValue||t.gravitecFormField==="customFieldKey"&&!t.customFieldKey):[]).length>0),S=(e,r,t,i,s,c)=>{if(!e.site_url||!e.app_key||!e.app_secret){t({site_url:e.site_url?"":u("Site Url can't be empty","bit-integrations"),app_key:e.app_key?"":u("App Key can't be empty","bit-integrations"),app_secret:e.app_secret?"":u("App Secret can't be empty","bit-integrations")});return}t({}),c(l(a({},s),{auth:!0}));const d={site_url:e.site_url,app_key:e.app_key,app_secret:e.app_secret};g(d,"gravitec_authentication").then(n=>{if(n&&n.success){i(!0),c(l(a({},s),{auth:!1})),o.success(u("Authorized Successfully","bit-integrations"));return}c(l(a({},s),{auth:!1})),o.error(u("Authorized failed, Please enter valid Public Id & Secret Key","bit-integrations"))})};export{v as a,K as c,S as g,A as h};
