var y=Object.defineProperty;var m=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var _=(t,e,o)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,f=(t,e)=>{for(var o in e||(e={}))S.call(e,o)&&_(t,o,e[o]);if(m)for(var o of m(e))F.call(e,o)&&_(t,o,e[o]);return t};import{_ as d,d as h,c as b}from"./bi.430.0.js";import{af as v}from"./bi.554.440.js";const O=(t,e,o,l,c,a,i=0)=>{let r=f({},e);const{name:s}=t.target;switch(t.target.value!==""?r[s]=t.target.value:delete r[s],r[t.target.name]=t.target.value,t.target.name){case"folder":r.folderMap=r.folderMap.slice(0,i),r=k(r,l,o,c,a);break}o(f({},r))},k=(t,e,o,l,c)=>{var i,r,s,n,p,u;const a=f({},t);return delete a.teamType,a.folder&&!((r=(i=a.default)==null?void 0:i.folders)!=null&&r[a.folder])?(((u=(p=(n=(s=a.default)==null?void 0:s.teamFolders)==null?void 0:n[a.team])==null?void 0:p[a.folder])==null?void 0:u.type)==="private"&&(a.teamType="private"),w(e,a,o,l,c)):a.folder&&a.folder!==a.folderMap[a.folderMap.length-1]&&a.folderMap.push(a.folder),a},R=(t,e,o,l,c)=>{l(!0);const a={flowID:t!=null?t:null,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails},i=b(a,"oneDrive_get_all_folders").then(r=>{if(r&&r.success){const s=f({},e);return s.default||(s.default={}),r.data.oneDriveFoldersList&&(s.default.rootFolders=r.data.oneDriveFoldersList,s.tokenDetails=r.data.tokenDetails),o(s),l(!1),d("OneDrive Folders List refreshed successfully","bit-integrations")}else return l(!1),d("OneDrive Folders List refresh failed. please try again","bit-integrations")}).catch(()=>l(!1));h.promise(i,{success:r=>r,error:d("Error Occurred","bit-integrations"),loading:d("Loading OneDrive Folders List...","bit-integrations")})},w=(t,e,o,l,c,a)=>{const i=a?e.folderMap[a]:e.folder;l(!0);const r={formID:t,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,team:e.team,folder:i,teamType:"teamType"in e?"private":"team"};b(r,"oneDrive_get_single_folder").then(s=>{if(s&&s.success){const n=f({},e);s.data.folders?(n.default.folders||(n.default.folders={}),n.default.folders[i]=v(s.data.folders,"folderName"),n.folderMap.includes(i)||n.folderMap.push(i),c({show:!0,msg:d("Sub Folders refreshed","bitform")})):c({show:!0,msg:d("No Sub Folder Found","bitform")}),s.data.tokenDetails&&(n.tokenDetails=s.data.tokenDetails),o(f({},n))}else c({show:!0,msg:d("Sub Folders refresh failed. please try again","bitform")});l(!1)}).catch(()=>l(!1))},M=(t,e,o,l,c)=>{if(!t.clientId||!t.clientSecret){c({clientId:t.clientId?"":d("Client Id can't be empty","bit-integrations"),clientSecret:t.clientSecret?"":d("Client Secret can't be empty","bit-integrations")});return}l(!0);const a="onedrive.readwrite offline_access Files.ReadWrite.All",i=`https://login.live.com/oauth20_authorize.srf?client_id=${t.clientId}&scope=${a}&access_type=offline&prompt=consent&response_type=code&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(`${btcbi.api.base}/redirect`)}`,r=window.open(i,"oneDrive","width=400,height=609,toolbar=off"),s=setInterval(()=>{if(r.closed){clearInterval(s);let n={},p=!1;const u=localStorage.getItem("__oneDrive");if(u&&(p=!0,n=JSON.parse(u),localStorage.removeItem("__oneDrive")),!n.code||n.error||!n||!p){const g=n.error?`Cause: ${n.error}`:"";h.error(`${d("Authorization Failed","bit-integrations")} ${g}. ${d("please try again","bit-integrations")}`),l(!1)}else{const g=f({},t);g.accountServer=n["accounts-server"],$(n,g,e,o,l)}}},500)},$=(t,e,o,l,c)=>{const a=f({},t);a.clientId=e.clientId,a.clientSecret=e.clientSecret,a.redirectURI=`${btcbi.api.base}/redirect`,b(a,"oneDrive_authorization").then(i=>{if(i&&i.success){const r=f({},e);r.tokenDetails=i.data,o(r),l(!0),h.success(d("Authorized Successfully","bit-integrations"))}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?h.error(`${d("Authorization failed Cause:","bit-integrations")}${i.data.data||i.data}. ${d("please try again","bit-integrations")}`):h.error(d("Authorization failed. please try again","bit-integrations"));c(!1)})};export{w as a,M as b,R as g,O as h};
