var y=Object.defineProperty;var p=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var b=(e,t,i)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,l=(e,t)=>{for(var i in t||(t={}))m.call(t,i)&&b(e,i,t[i]);if(p)for(var i of p(t))F.call(t,i)&&b(e,i,t[i]);return e};import{_ as s,d,c as _}from"./bi.430.0.js";const w=(e,t,i)=>{const n=l({},t),{name:o}=e.target;e.target.value!==""?n[o]=e.target.value:delete n[o],i(l({},n))},k=e=>!((e!=null&&e.field_map?e.field_map.filter(i=>!i.formField||!i.pCloudFormField):[]).length>0),C=(e,t,i)=>{const n={tokenDetails:e.tokenDetails},o=_(n,"pCloud_get_all_folders").then(r=>{if(r&&r.success){const a=l({},e);return r.data&&(a.foldersList=r.data),t(a),i==="fetch"?s("Folders fetched successfully","bit-integrations"):s("Folders refreshed successfully","bit-integrations")}else return s("Folders refresh failed. please try again","bit-integrations")});d.promise(o,{success:r=>r,error:s("Error Occurred","bit-integrations"),loading:s("Loading PCloud Folders List...","bit-integrations")})},v=(e,t,i,n,o)=>{if(!e.clientId||!e.clientSecret){o({clientId:e.clientId?"":s("Client Id can't be empty","bit-integrations"),clientSecret:e.clientSecret?"":s("Client Secret can't be empty","bit-integrations")});return}n(!0);const r=`https://my.pcloud.com/oauth2/authorize?client_id=${e.clientId}&response_type=code&redirect_uri=${btcbi.api.base}/redirect&state=${encodeURIComponent(window.location.href)}/redirect`,a=window.open(r,"pCloud","width=400,height=609,toolbar=off"),u=setInterval(()=>{if(a.closed){clearInterval(u);let c={},h=!1;const f=localStorage.getItem("__pCloud");if(f&&(h=!0,c=JSON.parse(f),localStorage.removeItem("__pCloud")),!c.code||c.error||!c||!h){const g=c.error?`Cause: ${c.error}`:"";d.error(`${s("Authorization Failed","bit-integrations")} ${g}. ${s("please try again","bit-integrations")}`),n(!1)}else{const g=l({},e);g.accountServer=c["accounts-server"],I(c,g,t,i,n)}}},500)},I=(e,t,i,n,o)=>{const r=l({},e);r.clientId=t.clientId,r.clientSecret=t.clientSecret,r.redirectURI=`${btcbi.api.base}/redirect`,_(r,"pCloud_authorization").then(a=>{if(a&&a.success){const u=l({},t);u.tokenDetails=a.data,i(u),n(!0),d.success(s("Authorized Successfully","bit-integrations"))}else a&&a.data||!a.success&&typeof a.data=="string"?d.error(`${s("Authorization failed Cause:","bit-integrations")}${a.data}. ${s("please try again","bit-integrations")}`):d.error(s("Authorization failed. please try again","bit-integrations"));o(!1)})};export{v as a,k as c,C as g,w as h};
